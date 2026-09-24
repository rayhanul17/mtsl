# Table: inventory_stock_issue_return_action_flows

```yaml
---
id: tbl:inventory_stock_issue_return_action_flows
module: inventory
status: inferred
model: InventoryStockIssueReturnActionFlow
columns: [inventory_stock_issue_return_id->inventory_stock_issue_returns.id, reference_action_status_id->workflow_actions.id, repeat_no, action_date_time, previous_action_date_time, action_by_id->users.id, comments]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
