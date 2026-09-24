# Table: inventory_categories

```yaml
---
id: tbl:inventory_categories
module: inventory
status: inferred
model: InventoryCategory
columns: [id, parent_inventory_category_id->inventory_categories.id, name, normalized_name, code, is_leaf, is_active, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `parent_inventory_category_id` | `bigint` | yes | inventory_categories.id |
| `name` | `character varying(300)` | no |  |
| `normalized_name` | `character varying(300)` | no |  |
| `code` | `character varying(100)` | yes |  |
| `is_leaf` | `boolean` | no |  |
| `is_active` | `boolean` | no |  |
| `created_at_utc` | `timestamp with time zone` | no |  |
| `created_by_user_id` | `bigint` | no | users.id |
| `updated_at_utc` | `timestamp with time zone` | yes |  |
| `updated_by_user_id` | `bigint` | yes | users.id |
