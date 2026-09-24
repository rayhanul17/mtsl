# Table: inventory_stock_mrrs

```yaml
---
id: tbl:inventory_stock_mrrs
module: inventory
status: verified
model: InventoryStockMrr
columns: [id, inventory_store_id->inventory_stores.id, base_mrr_id->inventory_stock_mrrs.id, mrr_type_id->lk_mrr_types.id, mrr_receive_type_id->lk_mrr_receive_types.id, mrr_category, mrr_date, mrr_no, business_profile_id->business_profiles.id, challan_no, challan_file_url, challan_date, invoice_no, invoice_file_url, invoice_date, currency_id->lk_financial_currencies.id, currency_conv_rate_local, total_material_amount, total_material_amount_local, discount_pct, discount_amount_local, other_cost_amount_local, vat_pct, vat_amount_local, vds_amount_local, tds_amount_local, total_material_net_amount_local, total_material_net_amount, per_unit_landing_cost, action_status_id->workflow_actions.id, action_date_time, action_by_id->users.id, is_action_flow_completed, is_cancelled, comments, created_at_utc, created_by_user_id->users.id, updated_at_utc, updated_by_user_id->users.id]
---
```

PostgreSQL schema `inventory_module`. Harvest reads `columns` for `FK_TO`.
