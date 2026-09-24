# Table: inventory_stock_openings

```yaml
---
id: tbl:inventory_stock_openings
module: inventory
status: verified
model: InventoryStockOpening
columns: [inventory_batch_id->inventory_batches.id, inventory_rack_id->inventory_racks.id, effective_date, quantity, is_data_locked, short_description, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
