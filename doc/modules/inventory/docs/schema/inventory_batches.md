# Table: inventory_batches

```yaml
---
id: tbl:inventory_batches
module: inventory
status: inferred
model: InventoryBatch
columns: [id, inventory_item_id->inventory_items.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
