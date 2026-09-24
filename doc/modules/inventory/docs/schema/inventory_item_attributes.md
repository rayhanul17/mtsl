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

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `inventory_item_id` | `bigint` | no | inventory_items.id |
| `inventory_attribute_item_id` | `bigint` | no | inventory_attribute_items.id |
