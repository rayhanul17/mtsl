# Inventory knowledge graph

Feature YAML in `features/*.md` is the harvest seed. Schema files in `schema/*.md` add tables and `FK_TO` columns.

Agents walk `../.agent/knowledge-graph/nodes.jsonl` and `edges.jsonl` — not the whole repo.

## Frontmatter (feature)

| Key | Harvest |
|-----|---------|
| `id` | Feature node |
| `module` | `mod:{module}` → `CONTAINS` |
| `category` / `status` | metadata |
| `ui` | `ui:{slug}` → `EXPOSES` |
| `api` | multi-line list `METHOD path -> Handler` → ApiAction + `EXPOSES` + `INJECTS` |
| `service` | `svc:{name}` → `USES_SERVICE` |
| `repos` | `repo:{name}` → `USES_REPO` |
| `sql` | `sql:{name}` → `CALLS_SQL` |
| `tables` | `tbl:{name}` → `USES_TABLE` |
| `upstream` / `downstream` | feature links |

Omit empty `repos` / `sql`.

## Frontmatter (schema)

| Key | Harvest |
|-----|---------|
| `id` | `tbl:…` |
| `module` | `BELONGS_TO` |
| `model` | `MAPS_MODEL` |
| `columns` | `COLUMN` or `COLUMN->TABLE.COLUMN` → `FK_TO` |

Table ids use bare names (`inventory_stock_openings`); PG schema is always `inventory_module`.

## Node / edge IDs

| Type | Pattern |
|------|---------|
| Module | `mod:inventory` |
| Feature | `feat:inv-{slug}` |
| UI | `ui:{route-slug}` |
| API | `api:{METHOD}:{path}` |
| Service | `svc:{Name}` |
| Repo | `repo:{Name}` |
| SQL | `sql:{tag}` |
| Table | `tbl:{name}` |
| Column | `col:{table}.{column}` |

Edges: `CONTAINS`, `EXPOSES`, `UI_CALLS`, `USES_SERVICE`, `INJECTS`, `USES_REPO`, `CALLS_SQL`, `USES_TABLE`, `BELONGS_TO`, `FK_TO`, `UPSTREAM`, `DOWNSTREAM`.

## Harvest

```bash
node ../.agent/knowledge-graph/harvest_graph.mjs
```

Never hand-edit JSONL.
