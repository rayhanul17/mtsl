# Table: inventory_attributes

```yaml
---
id: tbl:inventory_attributes
module: inventory
status: inferred
model: InventoryAttribute
columns: [id, code, name, normalized_name, short_description, is_active, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
