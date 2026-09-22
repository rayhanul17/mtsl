# Feature: Stock MRR FG

```yaml
---
id: feat:inv-stock-mrr-fg
module: inventory
category: transactions
status: draft
ui: inventory-stock-mrr-fg
api:
  - POST inventory-stock-mrrs -> InventoryStockMrrController.Create
  - PUT inventory-stock-mrrs -> InventoryStockMrrController.Update
service: InventoryStockMrrService
repos: []
sql: []
tables: [inventory_stock_mrrs, inventory_stock_mrr_details, inventory_stocks]
upstream: [feat:inv-store, feat:inv-item]
downstream: [feat:inv-stock-report]
---
```

## Purpose

Draft shell for **Stock MRR FG**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-stock-mrr-fg` |
| API base | `inventory-stock-mrrs/` |
| Controller | `InventoryStockMrrController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
