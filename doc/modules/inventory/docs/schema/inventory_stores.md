# Table: inventory_stores

```yaml
---
id: tbl:inventory_stores
module: inventory
status: inferred
model: InventoryStore
columns: [id, branch_id->branches.id, parent_inventory_store_id->inventory_stores.id, name, normalized_name, code, last_opening_date, is_active, is_maintaining_rack, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `branch_id` | `bigint` | no | branches.id |
| `parent_inventory_store_id` | `bigint` | yes | inventory_stores.id |
| `name` | `character varying(300)` | no |  |
| `normalized_name` | `character varying(300)` | no |  |
| `code` | `character varying(100)` | yes |  |
| `last_opening_date` | `date` | yes |  |
| `is_active` | `boolean` | no |  |
| `is_maintaining_rack` | `boolean` | no |  |
| `created_at_utc` | `timestamp with time zone` | no |  |
| `created_by_user_id` | `bigint` | no | users.id |
| `updated_at_utc` | `timestamp with time zone` | yes |  |
| `updated_by_user_id` | `bigint` | yes | users.id |
