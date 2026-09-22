# Feature: Business Profile RFQ Setting

```yaml
---
id: feat:inv-bp-rfq-setting
module: inventory
category: master-data
status: verified
ui: business-profile-rfq-setting
api:
  - POST inventory-supplier-rfq-settings -> InventorySupplierRfqSettingController.Create
  - PUT inventory-supplier-rfq-settings/{id} -> InventorySupplierRfqSettingController.UpdateSupplierRfqSetting
  - POST inventory-supplier-rfq-settings/query -> InventorySupplierRfqSettingController.Get
service: InventorySupplierRfqSettingService
tables: [inventory_supplier_rfq_settings]
upstream: [feat:inv-material]
downstream: []
---
```

## Purpose

Supplier RFQ settings per material / business profile.

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/business-profile-rfq-setting` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/business-profile-rfq-setting/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventorySupplierRfqSettingController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventorySupplierRfqSettingFeatures/` |
