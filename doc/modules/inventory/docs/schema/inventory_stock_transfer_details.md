# Table: inventory_stock_transfer_details

```yaml
---
id: tbl:inventory_stock_transfer_details
module: inventory
status: inferred
model: InventoryStockTransferDetail
columns: [id, inventory_stock_transfer_id->inventory_stock_transfers.id, inventory_batch_id->inventory_batches.id, inventory_rack1->inventory_racks.id, inventory_rack2->inventory_racks.id, transferred_quantity, acknowledged_quantity, acknowledgement_comment]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `inventory_stock_transfer_id` | `bigint` | no | inventory_stock_transfers.id |
| `inventory_batch_id` | `bigint` | no | inventory_batches.id |
| `inventory_rack1` | `bigint` | no | inventory_racks.id |
| `inventory_rack2` | `bigint` | no | inventory_racks.id |
| `transferred_quantity` | `numeric(20,10)` | no |  |
| `acknowledged_quantity` | `numeric(20,10)` | no |  |
| `acknowledgement_comment` | `text` | yes |  |
