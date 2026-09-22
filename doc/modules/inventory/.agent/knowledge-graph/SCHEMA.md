# Inventory knowledge-graph schema (machine contract)

Source of truth for harvest field names. Human guide: [`../../docs/10-knowledge-graph.md`](../../docs/10-knowledge-graph.md).

## Feature frontmatter keys

| Key | Required | Harvest |
|-----|----------|---------|
| `id` | yes | Feature node |
| `module` | yes | `mod:{module}` CONTAINS |
| `category` | no | Feature metadata |
| `status` | yes | Feature metadata |
| `ui` | no | `ui:{value}` + EXPOSES |
| `api` | no | list of `METHOD path -> Handler` → ApiAction + EXPOSES + INJECTS |
| `service` | no | `svc:{name}` + USES_SERVICE |
| `repos` | no | `repo:{name}` + USES_REPO |
| `sql` | no | `sql:{name}` + CALLS_SQL |
| `tables` | no | `tbl:{name}` + USES_TABLE |
| `upstream` | no | `UPSTREAM` edges (ids must be `feat:...`) |
| `downstream` | no | `DOWNSTREAM` edges |

## Schema frontmatter keys

| Key | Required | Harvest |
|-----|----------|---------|
| `id` | yes | `tbl:...` Table node |
| `module` | yes | BELONGS_TO mod |
| `status` | no | metadata |
| `model` | no | entity class name (metadata; MAPS_MODEL edge) |
| `columns` | no | `COLUMN` or `COLUMN->TABLE.COLUMN` |

Tables live in PostgreSQL schema `inventory_module`; graph ids use bare table names (`inventory_stock_openings`).
