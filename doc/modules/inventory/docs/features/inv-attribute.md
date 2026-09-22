# Feature: Attribute

```yaml
---
id: feat:inv-attribute
module: inventory
category: master-data
status: draft
ui: inventory-attribute
api:
  - POST inventory-attributes -> InventoryAttributeController.Create
  - PUT inventory-attributes -> InventoryAttributeController.Update
service: InventoryAttributeService
repos: []
sql: []
tables: [inventory_attributes, inventory_attribute_items]
upstream: [feat:inv-category]
downstream: [feat:inv-material, feat:inv-item]
---
```

## Purpose

Draft shell for **Attribute**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-attribute` |
| API base | `inventory-attributes/` |
| Controller | `InventoryAttributeController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
