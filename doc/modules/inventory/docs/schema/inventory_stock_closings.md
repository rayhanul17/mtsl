# Table: inventory_stock_closings

```yaml
---
id: tbl:inventory_stock_closings
module: inventory
status: inferred
model: InventoryStockClosing
columns: [inventory_batch_id->inventory_batches.id, inventory_rack_id->inventory_racks.id, effective_date]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
