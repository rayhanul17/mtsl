# Retailr docs

Agent knowledge base for `retailr-client` + `retailr-server`.

Layout (same idea as [multitex-erp-doc](https://github.com/mehedi-soft-dev/multitex-erp-doc)):

```
doc/
  modules/{module}/
    docs/features/          # feature MD + YAML seed
    docs/schema/            # table stubs + FK columns
    .agent/knowledge-graph/ # nodes.jsonl, edges.jsonl, harvest
```

## Modules

| Module | Index |
|--------|-------|
| Inventory | [modules/inventory/docs/README.md](modules/inventory/docs/README.md) |

## Agent workflow

1. Read `nodes.jsonl` / `edges.jsonl` under the module’s `.agent/knowledge-graph/`.
2. Start at `feat:…`.
3. Follow `EXPOSES` → API/UI, `INJECTS` / `USES_SERVICE` → service, `USES_TABLE` / `FK_TO` → impact.
4. Open only cited paths in client/server.

Do not edit JSONL by hand. Edit feature/schema MD, then harvest:

```bash
node modules/inventory/.agent/knowledge-graph/harvest_graph.mjs
```

(from `doc/`, or use an absolute path)

## Status

| Value | Meaning |
|-------|---------|
| `verified` | Checked against controller (and key entities) |
| `inferred` | Shape from code; not column-audited |
| `draft` | Incomplete (should not appear on inventory features) |
