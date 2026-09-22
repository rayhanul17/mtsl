# Feature: Stock Opening

```yaml
---
id: feat:inv-stock-opening
module: inventory
category: transactions
status: verified
ui: inventory-stock-opening
api:
  - POST inventory-stock-openings -> InventoryStockOpeningController.Create
  - PUT inventory-stock-openings -> InventoryStockOpeningController.Update
  - PUT inventory-stock-openings/bulk -> InventoryStockOpeningController.BulkUpdate
  - GET inventory-stock-openings -> InventoryStockOpeningController.GetOne
  - POST inventory-stock-openings/query -> InventoryStockOpeningController.GetAll
  - GET inventory-stock-openings/report -> InventoryStockOpeningController.GetReport
service: InventoryStockOpeningService
repos: [InventoryStockOpeningRepository, InventoryStockRepository, InventoryItemRepository, InventoryBatchRepository, InventoryMaterialRepository]
tables: [inventory_stock_openings, inventory_stocks, inventory_batches, inventory_racks, inventory_items, inventory_materials]
upstream: [feat:inv-store, feat:inv-rack, feat:inv-item, feat:inv-batch, feat:inv-material]
downstream: [feat:inv-stock-report, feat:inv-stock-closing]
---
```

## Purpose

Opening balances per batch + rack + effective date. Create may create item/batch. Locking an opening upserts `inventory_stocks.ReceivedQuantity`.

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/inventory-stock-opening`, `inventory-module/inventory-stock-opening-report` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/inventory-stock-opening/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventoryStockOpeningController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventoryStockOpeningFeatures/` |

## Notes

Composite PK: `(inventory_batch_id, inventory_rack_id, effective_date)`. Permissions: `InventoryStockOpening.*`.
