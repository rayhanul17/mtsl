# Table: inventory_store_categories

```yaml
---
id: tbl:inventory_store_categories
module: inventory
status: inferred
model: InventoryStoreCategory
columns: [inventory_store_id->inventory_stores.id, inventory_category_id->inventory_categories.id, created_at_utc, created_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
