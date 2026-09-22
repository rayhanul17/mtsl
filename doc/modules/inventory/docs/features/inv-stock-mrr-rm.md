# Feature: Stock MRR (Raw Material)

```yaml
---
id: feat:inv-stock-mrr-rm
module: inventory
category: transactions
status: verified
ui: inventory-stock-mrr-rm
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
tables: [inventory_stock_mrrs, inventory_stock_mrr_details, inventory_stock_mrr_action_flows, inventory_stocks, inventory_batches, inventory_racks, inventory_stores]
upstream: [feat:inv-store, feat:inv-rack, feat:inv-batch, feat:inv-material, feat:inv-item]
downstream: [feat:inv-stock-report, feat:inv-stock-issue, feat:inv-stock-mrr-fg]
---
```

## Purpose

Material receipt for raw material (`MrrCategory=RM`): header, details, action-flow, QC report, costing. Completing workflow updates `inventory_stocks`.

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/inventory-stock-mrr-rm` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/inventory-stock-mrr/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventoryStockMrrController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventoryStockMrrFeatures/` |

## Notes

Same controller as FG. Permissions: `InventoryStockMrr.*`. Stock write on complete: `UpdateActionFlowAsync`.
