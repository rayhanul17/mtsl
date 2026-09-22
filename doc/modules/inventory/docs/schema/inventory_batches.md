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

PostgreSQL schema: `inventory_module`. PK column `id` declared so opening/stock FKs resolve.
