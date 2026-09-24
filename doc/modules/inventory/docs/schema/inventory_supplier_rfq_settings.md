# Table: inventory_supplier_rfq_settings

```yaml
---
id: tbl:inventory_supplier_rfq_settings
module: inventory
status: inferred
model: InventorySupplierRfqSetting
columns: [id, business_profile_id->business_profiles.id, inventory_material_id->inventory_materials.id, minimum_order_quantity, average_rate, currency_id->lk_financial_currencies.id, purchase_mou_id->measurement_of_units.id, order_to_in_house_lead_time_days, is_active, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `business_profile_id` | `bigint` | no | business_profiles.id |
| `inventory_material_id` | `bigint` | no | inventory_materials.id |
| `minimum_order_quantity` | `numeric(7,4)` | yes |  |
| `average_rate` | `numeric(12,2)` | yes |  |
| `currency_id` | `smallint` | yes | lk_financial_currencies.id |
| `purchase_mou_id` | `bigint` | no | measurement_of_units.id |
| `order_to_in_house_lead_time_days` | `smallint` | yes |  |
| `is_active` | `boolean` | no |  |
| `created_at_utc` | `timestamp with time zone` | no |  |
| `created_by_user_id` | `bigint` | no | users.id |
| `updated_at_utc` | `timestamp with time zone` | yes |  |
| `updated_by_user_id` | `bigint` | yes | users.id |
