# Feature: Stock Closing

```yaml
---
id: feat:inv-stock-closing
module: inventory
category: transactions
status: verified
ui: inventory-stock-closing
api:
  - POST inventory-stock-closings -> InventoryStockClosingController.ProcessStockClosing
service: InventoryStockClosingService
tables: [inventory_stock_closings, inventory_stocks]
upstream: [feat:inv-stock-opening, feat:inv-store, feat:inv-stock-report]
downstream: [feat:inv-stock-report]
---
```

## Purpose

Period stock closing. UI may load stocks via report APIs before posting close.

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/inventory-stock-closing` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/inventory-stock-closing/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventoryStockClosingController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventoryStockClosingFeatures/` |

## Notes

Preparing UI also uses `GET inventory-reports/stocks` (`feat:inv-stock-report`).
