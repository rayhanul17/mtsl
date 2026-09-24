# Table: inventory_stock_issue_details

```yaml
---
id: tbl:inventory_stock_issue_details
module: inventory
status: inferred
model: InventoryStockIssueDetail
columns: [id, inventory_stock_issue_id->inventory_stock_issues.id, inventory_batch_id->inventory_batches.id, inventory_rack_id->inventory_racks.id, issue_quantity]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `inventory_stock_issue_id` | `bigint` | no | inventory_stock_issues.id |
| `inventory_batch_id` | `bigint` | no | inventory_batches.id |
| `inventory_rack_id` | `bigint` | no | inventory_racks.id |
| `issue_quantity` | `numeric(20,10)` | no |  |
