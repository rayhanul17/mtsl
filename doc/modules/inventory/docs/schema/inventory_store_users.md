# Table: inventory_store_users

```yaml
---
id: tbl:inventory_store_users
module: inventory
status: inferred
model: InventoryStoreUser
columns: [inventory_store_id->inventory_stores.id, user_id->users.id, created_at_utc, created_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
