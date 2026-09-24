# Table: inventory_material_categories

```yaml
---
id: tbl:inventory_material_categories
module: inventory
status: inferred
model: InventoryMaterialCategory
columns: [inventory_material_id->inventory_materials.id, inventory_category_id->inventory_categories.id]
---
```

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `inventory_material_id` | `bigint` | no | inventory_materials.id |
| `inventory_category_id` | `bigint` | no | inventory_categories.id |
