# Feature: Stock Issue

```yaml
---
id: feat:inv-stock-issue
module: inventory
category: transactions
status: draft
ui: inventory-stock-issue
api:
  - POST inventory-stock-issues -> InventoryStockIssueController.Create
  - PUT inventory-stock-issues -> InventoryStockIssueController.Update
service: InventoryStockIssueService
repos: []
sql: []
tables: [inventory_stock_issues, inventory_stock_issue_details, inventory_stocks]
upstream: [feat:inv-stock-requisition]
downstream: [feat:inv-stock-issue-return, feat:inv-stock-report]
---
```

## Purpose

Draft shell for **Stock Issue**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-stock-issue` |
| API base | `inventory-stock-issues/` |
| Controller | `InventoryStockIssueController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
