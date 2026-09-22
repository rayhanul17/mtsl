# Feature: Stock Requisition

```yaml
---
id: feat:inv-stock-requisition
module: inventory
category: transactions
status: draft
ui: inventory-stock-requisition
api:
  - POST inventory-stock-requisitions -> InventoryStockRequisitionController.Create
  - PUT inventory-stock-requisitions -> InventoryStockRequisitionController.Update
service: InventoryStockRequisitionService
repos: []
sql: []
tables: [inventory_stock_requisitions, inventory_stock_requisition_details]
upstream: [feat:inv-store, feat:inv-material]
downstream: [feat:inv-stock-issue]
---
```

## Purpose

Draft shell for **Stock Requisition**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-stock-requisition` |
| API base | `inventory-stock-requisitions/` |
| Controller | `InventoryStockRequisitionController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
