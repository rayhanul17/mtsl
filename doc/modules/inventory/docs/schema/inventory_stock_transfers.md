# Table: inventory_stock_transfers

```yaml
---
id: tbl:inventory_stock_transfers
module: inventory
status: inferred
model: InventoryStockTransfer
columns: [id, transfer_reference_no, inventory_store_id1->inventory_stores.id, inventory_store_id2->inventory_stores.id, date, reference_action_flow_status_id->workflow_actions.id, action_date_time, action_by_id->users.id, is_action_flow_completed, is_cancelled, comments, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
