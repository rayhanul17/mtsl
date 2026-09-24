# Table: inventory_stock_mrr_details

```yaml
---
id: tbl:inventory_stock_mrr_details
module: inventory
status: verified
model: InventoryStockMrrDetail
columns: [id, inventory_stock_mrr_id->inventory_stock_mrrs.id, inventory_rack_id->inventory_racks.id, inventory_batch_id->inventory_batches.id, unit_price, mrr_qty, qty_mou_id->measurement_of_units.id, qc_pass_qty, qc_parameter_desc, qc_comment, conditional_qc_pass_qty, qc_reject_qty, is_exchangeable, exchange_mrr_detail_id->inventory_stock_mrr_details.id, stock_price]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `inventory_stock_mrr_id` | `bigint` | no | inventory_stock_mrrs.id |
| `inventory_rack_id` | `bigint` | no | inventory_racks.id |
| `inventory_batch_id` | `bigint` | no | inventory_batches.id |
| `unit_price` | `numeric(12,2)` | no |  |
| `mrr_qty` | `numeric(20,10)` | no |  |
| `qty_mou_id` | `bigint` | no | measurement_of_units.id |
| `qc_pass_qty` | `numeric(20,10)` | no |  |
| `qc_parameter_desc` | `character varying(100)` | yes |  |
| `qc_comment` | `text` | yes |  |
| `conditional_qc_pass_qty` | `numeric(20,10)` | no |  |
| `qc_reject_qty` | `numeric(20,10)` | no |  |
| `is_exchangeable` | `boolean` | no |  |
| `exchange_mrr_detail_id` | `bigint` | yes | inventory_stock_mrr_details.id |
| `stock_price` | `numeric(12,2)` | no |  |
