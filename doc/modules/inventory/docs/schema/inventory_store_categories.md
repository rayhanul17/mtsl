# Table: inventory_store_categories

```yaml
---
id: tbl:inventory_store_categories
module: inventory
status: inferred
model: InventoryStoreCategory
columns: [inventory_store_id->inventory_stores.id, inventory_category_id->inventory_categories.id, created_at_utc, created_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `inventory_store_id` | `bigint` | no | inventory_stores.id |
| `inventory_category_id` | `bigint` | no | inventory_categories.id |
| `created_at_utc` | `timestamp with time zone` | no |  |
| `created_by_user_id` | `bigint` | no | users.id |
