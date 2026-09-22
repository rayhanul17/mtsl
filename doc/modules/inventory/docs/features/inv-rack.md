# Feature: Rack

```yaml
---
id: feat:inv-rack
module: inventory
category: master-data
status: verified
ui: inventory-rack
api:
  - POST inventory-racks -> InventoryRackController.Create
  - GET inventory-racks -> InventoryRackController.GetAll
  - POST inventory-racks/query -> InventoryRackController.GetAll
  - PUT inventory-racks/{id} -> InventoryRackController.Update
service: InventoryRackService
tables: [inventory_racks]
upstream: [feat:inv-store]
downstream: [feat:inv-stock-opening, feat:inv-stock-mrr-rm, feat:inv-stock-transfer]
---
```

## Purpose

Rack/location under a store.

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/inventory-rack` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/inventory-rack/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventoryRackController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventoryRackFeatures/` |
