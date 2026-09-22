# Feature: Current Stock

```yaml
---
id: feat:inv-current-stock
module: inventory
category: transactions
status: verified
ui: inventory-stock-issue
api:
  - GET inventory-stocks/current-stock -> InventoryStockController.GetCurrentStock
service: InventoryStockService
tables: [inventory_stocks]
upstream: [feat:inv-batch, feat:inv-rack]
downstream: [feat:inv-stock-issue, feat:inv-stock-transfer, feat:inv-stock-adjustment]
---
```

## Purpose

Read cumulative stock by batch/rack. Helper API for transaction screens; no dedicated menu page.

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/inventory-stock-issue` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/inventory-stock-issue/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventoryStockController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventoryStockFeatures/` |

## Notes

`ui` is a primary consumer route (issue), not a dedicated screen.
