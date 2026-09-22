# Feature: Batch

```yaml
---
id: feat:inv-batch
module: inventory
category: master-data
status: draft
ui: inventory-batch
api:
  - POST inventory-batchs -> InventoryBatchController.Create
  - PUT inventory-batchs -> InventoryBatchController.Update
service: InventoryBatchService
repos: []
sql: []
tables: [inventory_batches]
upstream: [feat:inv-item]
downstream: [feat:inv-stock-opening, feat:inv-stock-mrr-rm]
---
```

## Purpose

Draft shell for **Batch**. Expand from controller/service when verifying.

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-batch` |
| API base | `inventory-batchs/` |
| Controller | `InventoryBatchController` |

## Gaps

`status: draft` — APIs beyond create/update not fully listed yet.
