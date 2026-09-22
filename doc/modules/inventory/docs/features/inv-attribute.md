# Feature: Attribute

```yaml
---
id: feat:inv-attribute
module: inventory
category: master-data
status: verified
ui: inventory-attribute
api:
  - POST inventory-attributes -> InventoryAttributeController.Create
  - POST inventory-attributes/copy -> InventoryAttributeController.Copy
  - GET inventory-attributes -> InventoryAttributeController.GetAll
  - GET inventory-attributes/by-category -> InventoryAttributeController.GetAll
  - POST inventory-attributes/query -> InventoryAttributeController.GetAll
  - PUT inventory-attributes/{id} -> InventoryAttributeController.Update
  - GET inventory-attributes/{id} -> InventoryAttributeController.GetById
  - GET inventory-attributes/items -> InventoryAttributeController.GetAllItems
  - GET inventory-attributes/items/non-paginated -> InventoryAttributeController.GetAllItems
  - GET inventory-attributes/color-items/{categoryId} -> InventoryAttributeController.GetColorItems
  - GET inventory-attributes/businessProfile-items/{categoryId} -> InventoryAttributeController.GetBusinessProfileItems
  - POST inventory-attributes/color-items/{categoryId} -> InventoryAttributeController.CreateItem
  - POST inventory-attributes/businessProfile-items/{categoryId} -> InventoryAttributeController.CreateBusinessProfile
service: InventoryAttributeService
tables: [inventory_attributes, inventory_attribute_items, inventory_category_attributes]
upstream: [feat:inv-category]
downstream: [feat:inv-material, feat:inv-item]
---
```

## Purpose

Attribute definitions and items (color / business-profile helpers).

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/inventory-attribute` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/inventory-attribute/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventoryAttributeController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventoryAttributeFeatures/` |

## Notes

Controller path segment is `businessProfile-items` (camelCase).
