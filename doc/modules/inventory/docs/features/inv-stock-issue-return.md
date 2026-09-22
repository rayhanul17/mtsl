# Feature: Stock Issue Return

```yaml
---
id: feat:inv-stock-issue-return
module: inventory
category: transactions
status: draft
ui: inventory-stock-issue-return
api:
  - POST inventory-stock-issue-returns -> InventoryStockIssueReturnController.Create
  - PUT inventory-stock-issue-returns -> InventoryStockIssueReturnController.Update
service: InventoryStockIssueReturnService
repos: []
sql: []
tables: [inventory_stock_issue_returns, inventory_stocks]
upstream: [feat:inv-stock-issue]
downstream: [feat:inv-stock-report]
---
```

## Purpose

Draft shell for **Stock Issue Return**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-stock-issue-return` |
| API base | `inventory-stock-issue-returns/` |
| Controller | `InventoryStockIssueReturnController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
