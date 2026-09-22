# Feature: Business Profile RFQ Setting

```yaml
---
id: feat:inv-bp-rfq-setting
module: inventory
category: master-data
status: draft
ui: business-profile-rfq-setting
api:
  - POST inventory-supplier-rfq-settings -> InventorySupplierRfqSettingController.Create
  - PUT inventory-supplier-rfq-settings -> InventorySupplierRfqSettingController.Update
service: InventorySupplierRfqSettingService
repos: []
sql: []
tables: [inventory_supplier_rfq_settings]
upstream: [feat:inv-material]
downstream: []
---
```

## Purpose

Draft shell for **Business Profile RFQ Setting**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `business-profile-rfq-setting` |
| API base | `inventory-supplier-rfq-settings/` |
| Controller | `InventorySupplierRfqSettingController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
