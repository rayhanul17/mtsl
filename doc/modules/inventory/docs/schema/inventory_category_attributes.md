# Table: inventory_category_attributes

```yaml
---
id: tbl:inventory_category_attributes
module: inventory
status: inferred
model: InventoryCategoryAttribute
columns: [inventory_category_id->inventory_categories.id, inventory_attribute_id->inventory_attributes.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `inventory_category_id` | `bigint` | no | inventory_categories.id |
| `inventory_attribute_id` | `bigint` | no | inventory_attributes.id |
