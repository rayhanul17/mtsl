# Table: inventory_stock_adjustments

```yaml
---
id: tbl:inventory_stock_adjustments
module: inventory
status: inferred
model: InventoryStockAdjustment
columns: [id, adjustment_reference_no, inventory_store_id->inventory_stores.id, adjustment_date, work_flow_action_id->workflow_actions.id, action_date_time, action_by_id->users.id, is_action_flow_completed, is_cancelled, comments, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
