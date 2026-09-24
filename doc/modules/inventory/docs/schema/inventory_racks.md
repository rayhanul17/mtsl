# Table: inventory_racks

```yaml
---
id: tbl:inventory_racks
module: inventory
status: inferred
model: InventoryRack
columns: [id, inventory_store_id->inventory_stores.id, name, normalized_name, short_description, is_data_locked, is_active, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
