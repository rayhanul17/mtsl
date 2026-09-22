# Table: inventory_stock_issue_details

```yaml
---
id: tbl:inventory_stock_issue_details
module: inventory
status: inferred
model: InventoryStockIssueDetail
columns: [id, inventory_stock_issue_id->inventory_stock_issues.id, inventory_batch_id->inventory_batches.id, inventory_rack_id->inventory_racks.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
