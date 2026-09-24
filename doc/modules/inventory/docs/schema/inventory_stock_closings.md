# Table: inventory_stock_closings

```yaml
---
id: tbl:inventory_stock_closings
module: inventory
status: inferred
model: InventoryStockClosing
columns: [inventory_batch_id->inventory_batches.id, inventory_rack_id->inventory_racks.id, effective_date, quantity, is_data_locked, short_description, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `inventory_batch_id` | `bigint` | no | inventory_batches.id |
| `inventory_rack_id` | `bigint` | no | inventory_racks.id |
| `effective_date` | `date` | no |  |
| `quantity` | `numeric(20,10)` | no |  |
| `is_data_locked` | `boolean` | no |  |
| `short_description` | `character varying(1000)` | yes |  |
| `created_at_utc` | `timestamp with time zone` | no |  |
| `created_by_user_id` | `bigint` | no | users.id |
| `updated_at_utc` | `timestamp with time zone` | yes |  |
| `updated_by_user_id` | `bigint` | yes | users.id |
