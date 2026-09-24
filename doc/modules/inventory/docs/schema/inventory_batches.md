# Table: inventory_batches

```yaml
---
id: tbl:inventory_batches
module: inventory
status: inferred
model: InventoryBatch
columns: [id, inventory_item_id->inventory_items.id, sequence_no, name, normalized_name, material_cost, financial_currency_id->lk_financial_currencies.id, measurement_of_unit_id->measurement_of_units.id, manufacture_date, expiry_date, is_active, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `inventory_item_id` | `bigint` | no | inventory_items.id |
| `sequence_no` | `smallint` | no |  |
| `name` | `character varying(300)` | no |  |
| `normalized_name` | `character varying(300)` | no |  |
| `material_cost` | `numeric(12,2)` | no |  |
| `financial_currency_id` | `smallint` | no | lk_financial_currencies.id |
| `measurement_of_unit_id` | `bigint` | no | measurement_of_units.id |
| `manufacture_date` | `date` | yes |  |
| `expiry_date` | `date` | yes |  |
| `is_active` | `boolean` | no |  |
| `created_at_utc` | `timestamp with time zone` | no |  |
| `created_by_user_id` | `bigint` | no | users.id |
| `updated_at_utc` | `timestamp with time zone` | yes |  |
| `updated_by_user_id` | `bigint` | yes | users.id |
