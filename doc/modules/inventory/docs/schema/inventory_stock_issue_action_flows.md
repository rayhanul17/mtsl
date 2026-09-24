# Table: inventory_stock_issue_action_flows

```yaml
---
id: tbl:inventory_stock_issue_action_flows
module: inventory
status: inferred
model: InventoryStockIssueActionFlow
columns: [inventory_stock_issue_id->inventory_stock_issues.id, reference_work_flow_action_id->workflow_actions.id, repeat_no, action_date_time, previous_action_date_time, action_by_id->users.id, comments]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
