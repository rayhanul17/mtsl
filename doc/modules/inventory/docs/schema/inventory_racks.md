# Table: inventory_racks

```yaml
---
id: tbl:inventory_racks
module: inventory
status: inferred
model: InventoryRack
columns: [id, inventory_store_id->inventory_stores.id, name, normalized_name, short_description, is_data_locked, is_active, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `inventory_store_id` | `bigint` | no | inventory_stores.id |
| `name` | `character varying(300)` | no |  |
| `normalized_name` | `character varying(300)` | no |  |
| `short_description` | `character varying(1000)` | yes |  |
| `is_data_locked` | `boolean` | no |  |
| `is_active` | `boolean` | no |  |
| `created_at_utc` | `timestamp with time zone` | no |  |
| `created_by_user_id` | `bigint` | no | users.id |
| `updated_at_utc` | `timestamp with time zone` | yes |  |
| `updated_by_user_id` | `bigint` | yes | users.id |
