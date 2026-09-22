# Feature: Store

```yaml
---
id: feat:inv-store
module: inventory
category: master-data
status: verified
ui: inventory-store
api:
  - POST inventory-stores -> InventoryStoreController.Create
  - GET inventory-stores -> InventoryStoreController.GetAll
  - GET inventory-stores/paginated-details -> InventoryStoreController.GetAll
  - PUT inventory-stores/{id} -> InventoryStoreController.Update
  - GET inventory-stores/stores -> InventoryStoreController.GetStoresForDropdown
service: InventoryStoreService
repos: [InventoryStoreRepository]
sql: [InventoryStoreQuery]
tables: [inventory_stores, inventory_store_categories, inventory_store_users]
upstream: []
downstream: [feat:inv-rack, feat:inv-stock-opening, feat:inv-stock-mrr-rm, feat:inv-stock-requisition]
---
```

## Purpose

Store/warehouse master. Slim dropdown for other screens.

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/inventory-store` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/inventory-store/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventoryStoreController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventoryStoreFeatures/` |
