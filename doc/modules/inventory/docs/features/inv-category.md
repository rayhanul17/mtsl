# Feature: Category

```yaml
---
id: feat:inv-category
module: inventory
category: master-data
status: draft
ui: inventory-category
api:
  - POST inventory-categories -> InventoryCategoryController.Create
  - PUT inventory-categories -> InventoryCategoryController.Update
service: InventoryCategoryService
repos: []
sql: []
tables: [inventory_categories]
upstream: []
downstream: [feat:inv-attribute, feat:inv-material]
---
```

## Purpose

Draft shell for **Category**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-category` |
| API base | `inventory-categories/` |
| Controller | `InventoryCategoryController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
