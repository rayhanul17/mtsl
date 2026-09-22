# Table: inventory_stock_mrr_details

```yaml
---
id: tbl:inventory_stock_mrr_details
module: inventory
status: verified
model: InventoryStockMrrDetail
columns: [id, inventory_stock_mrr_id->inventory_stock_mrrs.id, inventory_rack_id->inventory_racks.id, inventory_batch_id->inventory_batches.id, mrr_qty, qc_pass_qty, conditional_qc_pass_qty, qc_reject_qty, unit_price, stock_price]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
