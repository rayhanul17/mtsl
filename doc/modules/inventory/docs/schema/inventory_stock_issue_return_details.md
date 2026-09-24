# Table: inventory_stock_issue_return_details

```yaml
---
id: tbl:inventory_stock_issue_return_details
module: inventory
status: inferred
model: InventoryStockIssueReturnDetail
columns: [id, inventory_stock_issue_detail_id->inventory_stock_issue_details.id, inventory_stock_issue_return_id->inventory_stock_issue_returns.id, inventory_return_rack_id->inventory_racks.id, return_quantity, acknowledged_quantity, acknowledgement_comment]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `inventory_stock_issue_detail_id` | `bigint` | no | inventory_stock_issue_details.id |
| `inventory_stock_issue_return_id` | `bigint` | no | inventory_stock_issue_returns.id |
| `inventory_return_rack_id` | `bigint` | no | inventory_racks.id |
| `return_quantity` | `numeric(20,10)` | no |  |
| `acknowledged_quantity` | `numeric` | no |  |
| `acknowledgement_comment` | `text` | yes |  |
