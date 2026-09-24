# Table: inventory_items

```yaml
---
id: tbl:inventory_items
module: inventory
status: inferred
model: InventoryItem
columns: [id, inventory_material_id->inventory_materials.id, name, normalized_name, sku, dsm_code, description, is_active, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `inventory_material_id` | `bigint` | no | inventory_materials.id |
| `name` | `character varying(300)` | no |  |
| `normalized_name` | `character varying(300)` | no |  |
| `sku` | `character varying(100)` | yes |  |
| `dsm_code` | `text` | yes |  |
| `description` | `character varying(5000)` | yes |  |
| `is_active` | `boolean` | no |  |
| `created_at_utc` | `timestamp with time zone` | no |  |
| `created_by_user_id` | `bigint` | no | users.id |
| `updated_at_utc` | `timestamp with time zone` | yes |  |
| `updated_by_user_id` | `bigint` | yes | users.id |
