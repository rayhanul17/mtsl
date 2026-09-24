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

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `inventory_attribute_id` | `bigint` | no | inventory_attributes.id |
| `name` | `character varying(300)` | no |  |
| `normalized_name` | `character varying(300)` | no |  |
| `short_description` | `text` | yes |  |
| `is_active` | `boolean` | no |  |
| `created_at_utc` | `timestamp with time zone` | no |  |
| `updated_at_utc` | `timestamp with time zone` | yes |  |
