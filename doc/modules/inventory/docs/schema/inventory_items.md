# Table: inventory_items

```yaml
---
id: tbl:inventory_items
module: inventory
status: inferred
model: InventoryItem
columns: [id, inventory_material_id->inventory_materials.id, name, normalized_name, sku, dsm_code, description, is_active, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
