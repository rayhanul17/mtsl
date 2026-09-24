# Table: inventory_stock_adjustment_details

```yaml
---
id: tbl:inventory_stock_adjustment_details
module: inventory
status: inferred
model: InventoryStockAdjustmentDetail
columns: [id, inventory_stock_adjustment_id->inventory_stock_adjustments.id, inventory_batch_id->inventory_batches.id, inventory_rack_id->inventory_racks.id, adjustment_quantity]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
