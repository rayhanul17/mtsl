# Table: inventory_stocks

```yaml
---
id: tbl:inventory_stocks
module: inventory
status: verified
model: InventoryStock
columns: [inventory_batch_id->inventory_batches.id, inventory_rack_id->inventory_racks.id, issued_quantity, received_quantity, adjustment_quantity, transfer_issue_quantity, transfer_receive_quantity, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `inventory_batch_id` | `bigint` | no | inventory_batches.id |
| `inventory_rack_id` | `bigint` | no | inventory_racks.id |
| `issued_quantity` | `numeric(20,10)` | no |  |
| `received_quantity` | `numeric(20,10)` | no |  |
| `adjustment_quantity` | `numeric(20,10)` | no |  |
| `transfer_issue_quantity` | `numeric(20,10)` | no |  |
| `transfer_receive_quantity` | `numeric(20,10)` | no |  |
| `created_at_utc` | `timestamp with time zone` | no |  |
| `created_by_user_id` | `bigint` | no | users.id |
| `updated_at_utc` | `timestamp with time zone` | yes |  |
| `updated_by_user_id` | `bigint` | yes | users.id |
