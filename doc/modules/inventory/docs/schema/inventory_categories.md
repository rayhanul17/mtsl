# Table: inventory_categories

```yaml
---
id: tbl:inventory_categories
module: inventory
status: inferred
model: InventoryCategory
columns: [id, parent_inventory_category_id->inventory_categories.id, name, normalized_name, code, is_leaf, is_active, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
