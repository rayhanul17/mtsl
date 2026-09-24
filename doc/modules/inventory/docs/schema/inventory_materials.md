# Table: inventory_materials

```yaml
---
id: tbl:inventory_materials
module: inventory
status: inferred
model: InventoryMaterial
columns: [id, name, normalized_name, hs_code, average_rate, average_rate_financial_currency_id->lk_financial_currencies.id, average_rate_mou_id->measurement_of_units.id, consumption_mou_id->measurement_of_units.id, purchase_mou_id->measurement_of_units.id, packaging_mou_id->measurement_of_units.id, purchase_mou_to_conversion_factor, minimum_stock, maximum_stock, description, is_auto_generated, is_active, is_product, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `name` | `character varying(300)` | no |  |
| `normalized_name` | `character varying(300)` | no |  |
| `hs_code` | `character varying(100)` | yes |  |
| `average_rate` | `numeric(12,2)` | yes |  |
| `average_rate_financial_currency_id` | `smallint` | yes | lk_financial_currencies.id |
| `average_rate_mou_id` | `bigint` | yes | measurement_of_units.id |
| `consumption_mou_id` | `bigint` | no | measurement_of_units.id |
| `purchase_mou_id` | `bigint` | yes | measurement_of_units.id |
| `packaging_mou_id` | `bigint` | yes | measurement_of_units.id |
| `purchase_mou_to_conversion_factor` | `numeric` | yes |  |
| `minimum_stock` | `numeric(20,10)` | no |  |
| `maximum_stock` | `numeric(20,10)` | no |  |
| `description` | `character varying(5000)` | yes |  |
| `is_auto_generated` | `boolean` | no |  |
| `is_active` | `boolean` | no |  |
| `is_product` | `boolean` | no |  |
| `created_at_utc` | `timestamp with time zone` | no |  |
| `created_by_user_id` | `bigint` | no | users.id |
| `updated_at_utc` | `timestamp with time zone` | yes |  |
| `updated_by_user_id` | `bigint` | yes | users.id |
