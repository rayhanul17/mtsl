# Feature: Material

```yaml
---
id: feat:inv-material
module: inventory
category: master-data
status: draft
ui: inventory-material
api:
  - POST inventory-materials -> InventoryMaterialController.Create
  - PUT inventory-materials -> InventoryMaterialController.Update
service: InventoryMaterialService
repos: []
sql: []
tables: [inventory_materials]
upstream: [feat:inv-category, feat:inv-attribute]
downstream: [feat:inv-item, feat:inv-stock-opening]
---
```

## Purpose

Draft shell for **Material**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-material` |
| API base | `inventory-materials/` |
| Controller | `InventoryMaterialController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
