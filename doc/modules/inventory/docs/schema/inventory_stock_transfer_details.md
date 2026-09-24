# Table: inventory_stock_transfer_details

```yaml
---
id: tbl:inventory_stock_transfer_details
module: inventory
status: inferred
model: InventoryStockTransferDetail
columns: [id, inventory_stock_transfer_id->inventory_stock_transfers.id, inventory_batch_id->inventory_batches.id, inventory_rack1->inventory_racks.id, inventory_rack2->inventory_racks.id, transferred_quantity, acknowledged_quantity, acknowledgement_comment]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
