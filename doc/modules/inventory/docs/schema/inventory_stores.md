# Table: inventory_stores

```yaml
---
id: tbl:inventory_stores
module: inventory
status: inferred
model: InventoryStore
columns: [id, branch_id->branches.id, parent_inventory_store_id->inventory_stores.id, name, normalized_name, code, last_opening_date, is_active, is_maintaining_rack, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
