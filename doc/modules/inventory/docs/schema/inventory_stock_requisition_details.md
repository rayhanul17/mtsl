# Table: inventory_stock_requisition_details

```yaml
---
id: tbl:inventory_stock_requisition_details
module: inventory
status: inferred
model: InventoryStockRequisitionDetail
columns: [id, inventory_stock_requisition_id->inventory_stock_requisitions.id, inventory_material_id->inventory_materials.id, inventory_item_id->inventory_items.id, requisition_quantity, measurement_of_unit_id->measurement_of_units.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `inventory_stock_requisition_id` | `bigint` | no | inventory_stock_requisitions.id |
| `inventory_material_id` | `bigint` | no | inventory_materials.id |
| `inventory_item_id` | `bigint` | yes | inventory_items.id |
| `requisition_quantity` | `numeric(20,10)` | no |  |
| `measurement_of_unit_id` | `bigint` | no | measurement_of_units.id |
