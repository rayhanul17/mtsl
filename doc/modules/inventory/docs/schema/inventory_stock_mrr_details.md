# Table: inventory_stock_mrr_details

```yaml
---
id: tbl:inventory_stock_mrr_details
module: inventory
status: verified
model: InventoryStockMrrDetail
columns: [id, inventory_stock_mrr_id->inventory_stock_mrrs.id, inventory_rack_id->inventory_racks.id, inventory_batch_id->inventory_batches.id, unit_price, mrr_qty, qty_mou_id->measurement_of_units.id, qc_pass_qty, qc_parameter_desc, qc_comment, conditional_qc_pass_qty, qc_reject_qty, is_exchangeable, exchange_mrr_detail_id->inventory_stock_mrr_details.id, stock_price]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
