# Feature: Item

```yaml
---
id: feat:inv-item
module: inventory
category: master-data
status: draft
ui: inventory-item
api:
  - POST inventory-items -> InventoryItemController.Create
  - PUT inventory-items -> InventoryItemController.Update
service: InventoryItemService
repos: []
sql: []
tables: [inventory_items]
upstream: [feat:inv-material, feat:inv-attribute]
downstream: [feat:inv-batch, feat:inv-stock-opening]
---
```

## Purpose

Draft shell for **Item**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-item` |
| API base | `inventory-items/` |
| Controller | `InventoryItemController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
