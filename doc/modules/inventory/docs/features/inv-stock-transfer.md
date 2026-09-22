# Feature: Stock Transfer

```yaml
---
id: feat:inv-stock-transfer
module: inventory
category: transactions
status: draft
ui: inventory-stock-transfer
api:
  - POST inventory-stock-transfers -> InventoryStockTransferController.Create
  - PUT inventory-stock-transfers -> InventoryStockTransferController.Update
service: InventoryStockTransferService
repos: []
sql: []
tables: [inventory_stock_transfers, inventory_stock_transfer_details, inventory_stocks]
upstream: [feat:inv-store, feat:inv-rack]
downstream: [feat:inv-stock-report]
---
```

## Purpose

Draft shell for **Stock Transfer**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-stock-transfer` |
| API base | `inventory-stock-transfers/` |
| Controller | `InventoryStockTransferController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
