# Feature: Batch

```yaml
---
id: feat:inv-batch
module: inventory
category: master-data
status: verified
ui: inventory-batch
api:
  - POST inventory-batchs -> InventoryBatchController.Create
  - GET inventory-batchs -> InventoryBatchController.GetAll
  - POST inventory-batchs/query -> InventoryBatchController.GetAll
  - PUT inventory-batchs/{id} -> InventoryBatchController.Update
service: InventoryBatchService
tables: [inventory_batches]
upstream: [feat:inv-item]
downstream: [feat:inv-stock-opening, feat:inv-stock-mrr-rm, feat:inv-stock-issue]
---
```

## Purpose

Lot/batch master for items (cost / FIFO).

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/inventory-batch` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/inventory-batch/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventoryBatchController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventoryBatchFeatures/` |

## Notes

Route is `inventory-batchs` (literal `s` after controller name).
