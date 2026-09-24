# Table: inventory_stocks

```yaml
---
id: tbl:inventory_stocks
module: inventory
status: verified
model: InventoryStock
columns: [inventory_batch_id->inventory_batches.id, inventory_rack_id->inventory_racks.id, issued_quantity, received_quantity, adjustment_quantity, transfer_issue_quantity, transfer_receive_quantity, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
