#!/usr/bin/env node
/**
 * Regenerate .agent/knowledge-graph/{nodes,edges}.jsonl from YAML
 * front-matter in docs/features/*.md and docs/schema/*.md.
 *
 * Usage (from doc/modules/inventory):
 *   node .agent/knowledge-graph/harvest_graph.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MODULE_ROOT = path.resolve(__dirname, "../..");
const DOC_ROOT = path.resolve(MODULE_ROOT, "../..");
const FEATURES_DIR = path.join(MODULE_ROOT, "docs", "features");
const SCHEMA_DIR = path.join(MODULE_ROOT, "docs", "schema");
const GRAPH_DIR = __dirname;

const SKIP = new Set(["_template.md", "_conventions.md", "ERD.md"]);
const FRONTMATTER_RE = /```yaml\s*\n---\s*\n([\s\S]*?)\n---\s*\n```/;
const IDENTIFIER_RE = /^[A-Za-z_][A-Za-z0-9_.]*$/;
const WARNINGS = [];

function parseFrontmatter(text) {
  const match = text.match(FRONTMATTER_RE);
  if (!match) return null;
  const fields = {};
  for (const raw of match[1].split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (!line.trim() || line.trim().startsWith("#") || !line.includes(":")) continue;
    const idx = line.indexOf(":");
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim().replace(/\s+#.*$/, "");
    if (value.startsWith("[") && value.endsWith("]")) {
      const inner = value.slice(1, -1).trim();
      fields[key] = inner ? inner.split(",").map((v) => v.trim()).filter(Boolean) : [];
    } else if (value === "") {
      fields[key] = null;
    } else {
      fields[key] = value;
    }
  }
  return fields;
}

function splitMulti(value) {
  if (value == null) return [];
  if (Array.isArray(value)) return value.map(String);
  return String(value)
    .split(/[|,]/)
    .map((p) => p.trim())
    .filter(Boolean);
}

function rel(p) {
  return path.relative(DOC_ROOT, p).split(path.sep).join("/");
}

function looksLikeIdentifier(value) {
  return IDENTIFIER_RE.test(value);
}

function harvestFeature(filePath, fields) {
  const nodes = [];
  const edges = [];
  const featId = fields.id;
  if (!featId) return { nodes, edges };

  nodes.push({
    id: featId,
    type: "Feature",
    source_file: rel(filePath),
    status: fields.status ?? null,
    module: fields.module ?? null,
    category: fields.category ?? null,
  });

  if (fields.module) {
    edges.push({ from: `mod:${fields.module}`, to: featId, type: "CONTAINS" });
  }

  const service = fields.service;
  if (service) {
    const svcId = `svc:${service}`;
    nodes.push({ id: svcId, type: "Service", source_file: rel(filePath), name: service });
    edges.push({ from: featId, to: svcId, type: "USES_SERVICE" });
  }

  const ui = fields.ui;
  if (ui) {
    const uiId = `ui:${ui}`;
    nodes.push({ id: uiId, type: "UiPage", source_file: rel(filePath), route: ui });
    edges.push({ from: featId, to: uiId, type: "EXPOSES" });
  }

  for (const entry of splitMulti(fields.api)) {
    if (!entry.includes(" -> ")) {
      WARNINGS.push(`${filePath}: skipping malformed api entry ${JSON.stringify(entry)}`);
      continue;
    }
    const [routePart, handler] = entry.split(" -> ").map((s) => s.trim());
    if (!routePart.includes(" ")) {
      WARNINGS.push(`${filePath}: skipping malformed api route ${JSON.stringify(routePart)}`);
      continue;
    }
    const sp = routePart.indexOf(" ");
    const httpMethod = routePart.slice(0, sp);
    const httpPath = routePart.slice(sp + 1);
    const apiId = `api:${httpMethod}:${httpPath}`;
    nodes.push({
      id: apiId,
      type: "ApiAction",
      source_file: rel(filePath),
      method: httpMethod,
      path: httpPath,
      handler,
    });
    edges.push({ from: featId, to: apiId, type: "EXPOSES" });
    if (service) edges.push({ from: apiId, to: `svc:${service}`, type: "INJECTS" });
    if (ui) edges.push({ from: `ui:${ui}`, to: apiId, type: "UI_CALLS" });
  }

  for (const repo of splitMulti(fields.repos)) {
    if (!looksLikeIdentifier(repo)) {
      WARNINGS.push(`${filePath}: skipping non-identifier repos value ${JSON.stringify(repo)}`);
      continue;
    }
    const repoId = `repo:${repo}`;
    nodes.push({ id: repoId, type: "Repository", source_file: rel(filePath), name: repo });
    edges.push({ from: featId, to: repoId, type: "USES_REPO" });
  }

  for (const sql of splitMulti(fields.sql)) {
    if (!looksLikeIdentifier(sql)) {
      WARNINGS.push(`${filePath}: skipping non-identifier sql value ${JSON.stringify(sql)}`);
      continue;
    }
    const sqlId = `sql:${sql}`;
    nodes.push({ id: sqlId, type: "Sql", source_file: rel(filePath), name: sql });
    edges.push({ from: featId, to: sqlId, type: "CALLS_SQL" });
  }

  for (const table of splitMulti(fields.tables)) {
    if (!looksLikeIdentifier(table)) {
      WARNINGS.push(`${filePath}: skipping non-identifier table value ${JSON.stringify(table)}`);
      continue;
    }
    edges.push({ from: featId, to: `tbl:${table}`, type: "USES_TABLE" });
  }

  for (const up of splitMulti(fields.upstream)) {
    if (up.includes(":")) edges.push({ from: up, to: featId, type: "UPSTREAM" });
  }
  for (const down of splitMulti(fields.downstream)) {
    if (down.includes(":")) edges.push({ from: featId, to: down, type: "DOWNSTREAM" });
  }

  return { nodes, edges };
}

function harvestSchema(filePath, fields) {
  const nodes = [];
  const edges = [];
  const tblId = fields.id;
  if (!tblId) return { nodes, edges };

  nodes.push({
    id: tblId,
    type: "Table",
    source_file: rel(filePath),
    status: fields.status ?? null,
    module: fields.module ?? null,
  });

  if (fields.module) {
    edges.push({ from: tblId, to: `mod:${fields.module}`, type: "BELONGS_TO" });
  }
  if (fields.model) {
    edges.push({ from: tblId, to: `model:${fields.model}`, type: "MAPS_MODEL" });
  }

  const tableName = tblId.includes(":") ? tblId.split(":").slice(1).join(":") : tblId;
  for (const colEntry of splitMulti(fields.columns)) {
    let colName;
    let fkTarget = null;
    if (colEntry.includes("->")) {
      const parts = colEntry.split("->").map((s) => s.trim());
      colName = parts[0];
      fkTarget = parts[1];
    } else {
      colName = colEntry.trim();
    }
    if (!looksLikeIdentifier(colName)) {
      WARNINGS.push(`${filePath}: skipping non-identifier column name ${JSON.stringify(colName)}`);
      continue;
    }
    const colId = `col:${tableName}.${colName}`;
    nodes.push({ id: colId, type: "Column", source_file: rel(filePath), table: tblId });
    if (!fkTarget) continue;
    if (!fkTarget.includes(".")) {
      WARNINGS.push(`${filePath}: skipping malformed fk target ${JSON.stringify(fkTarget)}`);
      continue;
    }
    const lastDot = fkTarget.lastIndexOf(".");
    const refTable = fkTarget.slice(0, lastDot);
    const refCol = fkTarget.slice(lastDot + 1);
    edges.push({ from: colId, to: `col:${refTable}.${refCol}`, type: "FK_TO" });
  }

  return { nodes, edges };
}

function listMd(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((n) => n.endsWith(".md") && !SKIP.has(n))
    .map((n) => path.join(dir, n))
    .sort();
}

const allNodes = [];
const allEdges = [];

for (const [dir, harvester] of [
  [FEATURES_DIR, harvestFeature],
  [SCHEMA_DIR, harvestSchema],
]) {
  for (const filePath of listMd(dir)) {
    const text = fs.readFileSync(filePath, "utf8");
    const fields = parseFrontmatter(text);
    if (!fields) {
      WARNINGS.push(`no front-matter found: ${filePath}`);
      continue;
    }
    if (!fields.id) {
      WARNINGS.push(`front-matter missing 'id': ${filePath}`);
      continue;
    }
    const { nodes, edges } = harvester(filePath, fields);
    allNodes.push(...nodes);
    allEdges.push(...edges);
  }
}

const seen = new Set();
const deduped = [];
for (const node of allNodes) {
  if (seen.has(node.id)) continue;
  seen.add(node.id);
  deduped.push(node);
}

fs.mkdirSync(GRAPH_DIR, { recursive: true });
const nodesPath = path.join(GRAPH_DIR, "nodes.jsonl");
const edgesPath = path.join(GRAPH_DIR, "edges.jsonl");
fs.writeFileSync(nodesPath, deduped.map((n) => JSON.stringify(n)).join("\n") + (deduped.length ? "\n" : ""));
fs.writeFileSync(edgesPath, allEdges.map((e) => JSON.stringify(e)).join("\n") + (allEdges.length ? "\n" : ""));

console.log(`wrote ${deduped.length} nodes -> ${rel(nodesPath)}`);
console.log(`wrote ${allEdges.length} edges -> ${rel(edgesPath)}`);
for (const w of WARNINGS) console.error(`warning: ${w}`);
