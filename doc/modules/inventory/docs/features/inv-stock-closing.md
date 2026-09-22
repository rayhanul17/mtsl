# Feature: Stock Closing

```yaml
---
id: feat:inv-stock-closing
module: inventory
category: transactions
status: draft
ui: inventory-stock-closing
api:
  - POST inventory-stock-closings -> InventoryStockClosingController.Close
service: InventoryStockClosingService
repos: []
sql: []
tables: [inventory_stock_closings]
upstream: [feat:inv-stock-opening, feat:inv-store]
downstream: [feat:inv-stock-report]
---
```

## Purpose

Draft shell for **Stock Closing**. Period close; may block if open workflows exist.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-stock-closing` |
| API base | `inventory-stock-closings/` |
| Controller | `InventoryStockClosingController` |

## Gaps

`status: draft` — confirm action name and validation rules in service.
