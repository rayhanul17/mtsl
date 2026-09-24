# Table: inventory_item_attributes

```yaml
---
id: tbl:inventory_item_attributes
module: inventory
status: inferred
model: InventoryItemAttribute
columns: [inventory_item_id->inventory_items.id, inventory_attribute_item_id->inventory_attribute_items.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
