# Table: inventory_attribute_items

```yaml
---
id: tbl:inventory_attribute_items
module: inventory
status: inferred
model: InventoryAttributeItem
columns: [id, inventory_attribute_id->inventory_attributes.id, name, normalized_name, short_description, is_active, created_at_utc, updated_at_utc]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
