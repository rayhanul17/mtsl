# Table: inventory_stock_issues

```yaml
---
id: tbl:inventory_stock_issues
module: inventory
status: inferred
model: InventoryStockIssue
columns: [id, inventory_store_id1->inventory_stores.id, inventory_store_id2->inventory_stores.id, inventory_stock_requisition_id->inventory_stock_requisitions.id, issue_date, issue_no, action_status_id->workflow_actions.id, action_date_time, action_by_id->users.id, is_action_flow_completed, is_cancelled, comments, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `inventory_store_id1` | `bigint` | no | inventory_stores.id |
| `inventory_store_id2` | `bigint` | no | inventory_stores.id |
| `inventory_stock_requisition_id` | `bigint` | no | inventory_stock_requisitions.id |
| `issue_date` | `date` | no |  |
| `issue_no` | `character varying(100)` | no |  |
| `action_status_id` | `bigint` | no | workflow_actions.id |
| `action_date_time` | `timestamp with time zone` | no |  |
| `action_by_id` | `bigint` | no | users.id |
| `is_action_flow_completed` | `boolean` | no |  |
| `is_cancelled` | `boolean` | no |  |
| `comments` | `character varying(1000)` | yes |  |
| `created_at_utc` | `timestamp with time zone` | no |  |
| `created_by_user_id` | `bigint` | no | users.id |
| `updated_at_utc` | `timestamp with time zone` | yes |  |
| `updated_by_user_id` | `bigint` | yes | users.id |
