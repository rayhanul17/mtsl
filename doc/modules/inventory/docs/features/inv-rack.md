# Feature: Rack

```yaml
---
id: feat:inv-rack
module: inventory
category: master-data
status: draft
ui: inventory-rack
api:
  - POST inventory-racks -> InventoryRackController.Create
  - PUT inventory-racks -> InventoryRackController.Update
service: InventoryRackService
repos: []
sql: []
tables: [inventory_racks]
upstream: [feat:inv-store]
downstream: [feat:inv-stock-opening, feat:inv-stock-mrr-rm]
---
```

## Purpose

Draft shell for **Rack**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-rack` |
| API base | `inventory-racks/` |
| Controller | `InventoryRackController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
