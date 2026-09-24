# Table: inventory_stock_mrr_action_flows

```yaml
---
id: tbl:inventory_stock_mrr_action_flows
module: inventory
status: inferred
model: InventoryStockMrrActionFlow
columns: [inventory_stock_mrr_id->inventory_stock_mrrs.id, ref_action_flow_status_id->workflow_actions.id, repeat_no, action_date_time, prev_action_date_time, action_by_id->users.id, comments]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
