# Retailr documentation + knowledge graph

Agent-oriented docs for the retailr monorepo (`retailr-client` + `retailr-server`).

Layout mirrors [multitex-erp-doc](https://github.com/mehedi-soft-dev/multitex-erp-doc): per module `docs/` + `.agent/knowledge-graph/`.

## Modules

| Module | Path |
|--------|------|
| Inventory | [`modules/inventory/`](modules/inventory/) |

## How agents should use this

1. Open `modules/{module}/.agent/knowledge-graph/nodes.jsonl` and `edges.jsonl`.
2. Find `feat:{id}` for the screen/workflow.
3. Follow edges: `EXPOSES` → API/UI, `USES_SERVICE` / `INJECTS` → service, `USES_TABLE` / `FK_TO` → impact.
4. Open only the cited source files under `retailr-client` / `retailr-server`.

Do **not** hand-edit `nodes.jsonl` / `edges.jsonl`. Edit feature/schema markdown, then run harvest.

## Harvest

```bash
node modules/inventory/.agent/knowledge-graph/harvest_graph.mjs
```

Run from `doc/` or pass absolute script path.

## Status values

| Status | Meaning |
|--------|---------|
| `draft` | Frontmatter filled; body may be stub |
| `inferred` | From code shape; not fully verified |
| `verified` | Checked against controller/service/entities |

## Share later

This `doc/` folder is shaped so it can lift wholesale to a sibling `retailr-doc` repo when share-without-code is needed.
