# Knowledge graph (inventory)

Goal: agent walks **nodes and edges**, not the whole tree.

Feature YAML frontmatter in `docs/features/*.md` is the harvest seed. Schema files in `docs/schema/*.md` add tables/columns/`FK_TO`.

## Node types

| Type | ID pattern | Example |
|------|------------|---------|
| Module | `mod:{name}` | `mod:inventory` |
| Feature | `feat:inv-{slug}` | `feat:inv-stock-opening` |
| UI page | `ui:{route-slug}` | `ui:inventory-stock-opening` |
| API | `api:{METHOD}:{path}` | `api:POST:inventory-stock-openings` |
| Service | `svc:{Name}` | `svc:InventoryStockOpeningService` |
| Repository | `repo:{Name}` | `repo:InventoryStockOpeningRepository` |
| SQL | `sql:{tag-or-function}` | `sql:InventoryStockReportQuery` |
| Table | `tbl:{name}` | `tbl:inventory_stock_openings` |
| Column | `col:{table}.{column}` | `col:inventory_stock_openings.inventory_batch_id` |

## Edge types

| Edge | From → To |
|------|-----------|
| `CONTAINS` | Module → Feature |
| `EXPOSES` | Feature → UI / ApiAction |
| `UI_CALLS` | UI → ApiAction |
| `USES_SERVICE` | Feature → Service |
| `INJECTS` | ApiAction → Service |
| `USES_REPO` | Feature → Repository |
| `CALLS_SQL` | Feature → SQL |
| `USES_TABLE` | Feature → Table |
| `BELONGS_TO` | Table → Module |
| `HAS_COLUMN` | (via column nodes on table) |
| `FK_TO` | Column → Column |
| `UPSTREAM` / `DOWNSTREAM` | Feature → Feature |

## Harvest

```bash
node .agent/knowledge-graph/harvest_graph.mjs
```

Never hand-edit JSONL.

