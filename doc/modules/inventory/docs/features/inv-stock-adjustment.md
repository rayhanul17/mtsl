# Feature: Stock Adjustment

```yaml
---
id: feat:inv-stock-adjustment
module: inventory
category: transactions
status: draft
ui: inventory-stock-adjustment
api:
  - POST inventory-stock-adjustments -> InventoryStockAdjustmentController.Create
  - PUT inventory-stock-adjustments -> InventoryStockAdjustmentController.Update
service: InventoryStockAdjustmentService
repos: []
sql: []
tables: [inventory_stock_adjustments, inventory_stock_adjustment_details, inventory_stocks]
upstream: [feat:inv-store, feat:inv-batch]
downstream: [feat:inv-stock-report]
---
```

## Purpose

Draft shell for **Stock Adjustment**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-stock-adjustment` |
| API base | `inventory-stock-adjustments/` |
| Controller | `InventoryStockAdjustmentController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
