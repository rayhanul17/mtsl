# Table: inventory_stock_adjustments_action_flows

```yaml
---
id: tbl:inventory_stock_adjustments_action_flows
module: inventory
status: inferred
model: InventoryStockAdjustmentsActionFlow
columns: [inventory_stock_adjustment_id->inventory_stock_adjustments.id, reference_work_flow_action_id->workflow_actions.id, repeat_no, action_date_time, previous_action_date_time, action_by_id->users.id, comments]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
