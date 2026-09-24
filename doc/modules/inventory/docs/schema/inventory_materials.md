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

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
