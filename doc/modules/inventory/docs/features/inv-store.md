# Feature: Store

```yaml
---
id: feat:inv-store
module: inventory
category: master-data
status: draft
ui: inventory-store
api:
  - POST inventory-stores -> InventoryStoreController.Create
  - PUT inventory-stores -> InventoryStoreController.Update
service: InventoryStoreService
repos: []
sql: []
tables: [inventory_stores]
upstream: []
downstream: [feat:inv-rack, feat:inv-stock-opening, feat:inv-stock-mrr-rm]
---
```

## Purpose

Draft shell for **Store**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-store` |
| API base | `inventory-stores/` |
| Controller | `InventoryStoreController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
