# Feature: Material

```yaml
---
id: feat:inv-material
module: inventory
category: master-data
status: verified
ui: inventory-material
api:
  - POST inventory-materials -> InventoryMaterialController.Create
  - GET inventory-materials -> InventoryMaterialController.GetAll
  - GET inventory-materials/details -> InventoryMaterialController.GetDetailedAll
  - GET inventory-materials/details/{id} -> InventoryMaterialController.GetDetailed
  - GET inventory-materials/details-slim -> InventoryMaterialController.GetDetailedSlim
  - POST inventory-materials/query -> InventoryMaterialController.GetAll
  - PUT inventory-materials/{id} -> InventoryMaterialController.Update
  - GET inventory-materials/attribute-data/{inventoryMaterialId} -> InventoryMaterialController.GetAllAttributeData
service: InventoryMaterialService
repos: [InventoryMaterialRepository]
sql: [InventoryMaterialQuery]
tables: [inventory_materials, inventory_material_categories]
upstream: [feat:inv-category, feat:inv-attribute]
downstream: [feat:inv-item, feat:inv-stock-opening, feat:inv-bp-rfq-setting]
---
```

## Purpose

Material master with details, slim lists, and attribute-data for UI.

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/inventory-material` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/inventory-material/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventoryMaterialController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventoryMaterialFeatures/` |
