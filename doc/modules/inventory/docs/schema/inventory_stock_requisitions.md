# Table: inventory_stock_requisitions

```yaml
---
id: tbl:inventory_stock_requisitions
module: inventory
status: inferred
model: InventoryStockRequisition
columns: [id, inventory_store_id1->inventory_stores.id, inventory_store_id2->inventory_stores.id, inventory_rack_id1->inventory_racks.id, requisition_date, requisition_no, action_status_id->workflow_actions.id, action_date_time, action_by_id->users.id, is_action_flow_completed, is_cancelled, comments, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
