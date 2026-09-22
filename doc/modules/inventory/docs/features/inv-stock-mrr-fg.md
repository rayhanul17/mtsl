# Feature: Stock MRR (Finish Good)

```yaml
---
id: feat:inv-stock-mrr-fg
module: inventory
category: transactions
status: verified
ui: inventory-stock-mrr-fg
api:
  - POST inventory-stock-mrrs -> InventoryStockMrrController.Create
  - GET inventory-stock-mrrs -> InventoryStockMrrController.GetAll
  - POST inventory-stock-mrrs/query -> InventoryStockMrrController.GetAll
  - GET inventory-stock-mrrs/{id} -> InventoryStockMrrController.GetById
  - PUT inventory-stock-mrrs/{id} -> InventoryStockMrrController.Update
  - POST inventory-stock-mrrs/details -> InventoryStockMrrController.CreateDetail
  - PUT inventory-stock-mrrs/details/{detailId} -> InventoryStockMrrController.UpdateDetail
  - PUT inventory-stock-mrrs/details/bulk -> InventoryStockMrrController.BulkUpdateDetail
  - DELETE inventory-stock-mrrs/details/{detailId} -> InventoryStockMrrController.DeleteDetail
  - GET inventory-stock-mrrs/details/{detailId} -> InventoryStockMrrController.GetDetailById
  - GET inventory-stock-mrrs/details/by-mrr/{mrrStockId} -> InventoryStockMrrController.GetDetailsByMrrId
  - POST inventory-stock-mrrs/action-flow -> InventoryStockMrrController.UpdateActionFlow
  - GET inventory-stock-mrrs/report/{mrrId} -> InventoryStockMrrController.GetReport
  - PUT inventory-stock-mrrs/costing -> InventoryStockMrrController.UpdateCosting
service: InventoryStockMrrService
repos: [InventoryStockMrrRepository, InventoryStockMrrDetailRepository, InventoryStockRepository]
tables: [inventory_stock_mrrs, inventory_stock_mrr_details, inventory_stock_mrr_action_flows, inventory_stocks]
upstream: [feat:inv-store, feat:inv-item, feat:inv-rack, feat:inv-batch]
downstream: [feat:inv-stock-report]
---
```

## Purpose

Material receipt for finish goods (`MrrCategory=FG`). Same APIs as RM; different UI and `InventoryStockMrrFg.*` permissions.

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/inventory-stock-mrr-fg` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/inventory-stock-mrr-fg/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventoryStockMrrController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventoryStockMrrFeatures/` |

## Notes

Sibling of `feat:inv-stock-mrr-rm` sharing `InventoryStockMrrController`.
