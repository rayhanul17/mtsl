# Table: inventory_stock_mrrs

```yaml
---
id: tbl:inventory_stock_mrrs
module: inventory
status: verified
model: InventoryStockMrr
columns: [id, inventory_store_id->inventory_stores.id, base_mrr_id, mrr_type_id, mrr_receive_type_id, mrr_category, mrr_date, mrr_no, business_profile_id, action_status_id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
