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

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
