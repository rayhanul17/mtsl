# Feature: Item

```yaml
---
id: feat:inv-item
module: inventory
category: master-data
status: verified
ui: inventory-item
api:
  - POST inventory-items -> InventoryItemController.Create
  - GET inventory-items -> InventoryItemController.GetAll
  - POST inventory-items/query -> InventoryItemController.GetAll
  - GET inventory-items/details -> InventoryItemController.GetDetailedAll
  - PUT inventory-items/{id} -> InventoryItemController.Update
  - GET inventory-items/attribute-data/{inventoryItemId} -> InventoryItemController.GetAllAttributeData
  - GET inventory-items/batches-with-stock-fifo -> InventoryItemController.GetBatchesWithStockByFifo
service: InventoryItemService
tables: [inventory_items, inventory_item_attributes, inventory_batches, inventory_stocks]
upstream: [feat:inv-material, feat:inv-attribute]
downstream: [feat:inv-batch, feat:inv-stock-opening, feat:inv-stock-issue]
---
```

## Purpose

SKU/item master. Attribute-data and FIFO batches-with-stock for issue UI.

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/inventory-item` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/inventory-item/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventoryItemController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventoryItemFeatures/` |
