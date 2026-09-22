# Feature: Category

```yaml
---
id: feat:inv-category
module: inventory
category: master-data
status: verified
ui: inventory-category
api:
  - POST inventory-categories -> InventoryCategoryController.Create
  - GET inventory-categories -> InventoryCategoryController.GetAll
  - GET inventory-categories/non-paginated -> InventoryCategoryController.GetAll
  - POST inventory-categories/query -> InventoryCategoryController.GetAll
  - PUT inventory-categories/{id} -> InventoryCategoryController.Update
  - GET inventory-categories/raw-material -> InventoryCategoryController.GetRawMaterialCategories
  - GET inventory-categories/finish-good -> InventoryCategoryController.GetFinishGoodCategories
service: InventoryCategoryService
tables: [inventory_categories, inventory_category_attributes]
upstream: []
downstream: [feat:inv-attribute, feat:inv-material]
---
```

## Purpose

Inventory category tree. Filters for raw-material and finish-good.

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/inventory-category` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/inventory-category/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventoryCategoryController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventoryCategoryFeatures/` |

## Notes

Route prefix is fixed `inventory-categories` (not `[controller]s`).
