# Table: inventory_stock_requisition_action_flows

```yaml
---
id: tbl:inventory_stock_requisition_action_flows
module: inventory
status: inferred
model: InventoryStockRequisitionActionFlow
columns: [inventory_stock_requisition_id->inventory_stock_requisitions.id, reference_action_flow_status_id->workflow_actions.id, repeat_no, action_date_time, previous_action_date_time, action_by_id->users.id, comments]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `inventory_stock_requisition_id` | `bigint` | no | inventory_stock_requisitions.id |
| `reference_action_flow_status_id` | `bigint` | no | workflow_actions.id |
| `repeat_no` | `smallint` | no |  |
| `action_date_time` | `timestamp with time zone` | no |  |
| `previous_action_date_time` | `timestamp with time zone` | no |  |
| `action_by_id` | `bigint` | no | users.id |
| `comments` | `text` | yes |  |
