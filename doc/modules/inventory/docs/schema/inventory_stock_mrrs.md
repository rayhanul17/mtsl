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

PostgreSQL schema `inventory_module`. YAML `columns` = harvest seed (`FK_TO`). Table below = human read.

| Column | Type | Nullable | FK |
|--------|------|----------|----|
| `id` | `bigint` | no |  |
| `inventory_store_id` | `bigint` | no | inventory_stores.id |
| `base_mrr_id` | `bigint` | yes | inventory_stock_mrrs.id |
| `mrr_type_id` | `smallint` | no | lk_mrr_types.id |
| `mrr_receive_type_id` | `smallint` | yes | lk_mrr_receive_types.id |
| `mrr_category` | `text` | no |  |
| `mrr_date` | `date` | no |  |
| `mrr_no` | `character varying(100)` | no |  |
| `business_profile_id` | `bigint` | no | business_profiles.id |
| `challan_no` | `character varying(100)` | no |  |
| `challan_file_url` | `text` | yes |  |
| `challan_date` | `date` | no |  |
| `invoice_no` | `character varying(100)` | yes |  |
| `invoice_file_url` | `text` | yes |  |
| `invoice_date` | `date` | yes |  |
| `currency_id` | `smallint` | no | lk_financial_currencies.id |
| `currency_conv_rate_local` | `numeric(5,2)` | no |  |
| `total_material_amount` | `numeric(12,2)` | no |  |
| `total_material_amount_local` | `numeric(12,2)` | no |  |
| `discount_pct` | `numeric(5,2)` | no |  |
| `discount_amount_local` | `numeric(12,2)` | no |  |
| `other_cost_amount_local` | `numeric(12,2)` | no |  |
| `vat_pct` | `numeric(5,2)` | no |  |
| `vat_amount_local` | `numeric(12,2)` | no |  |
| `vds_amount_local` | `numeric(12,2)` | no |  |
| `tds_amount_local` | `numeric(12,2)` | no |  |
| `total_material_net_amount_local` | `numeric(12,2)` | no |  |
| `total_material_net_amount` | `numeric(12,2)` | no |  |
| `per_unit_landing_cost` | `numeric(12,2)` | no |  |
| `action_status_id` | `bigint` | no | workflow_actions.id |
| `action_date_time` | `timestamp with time zone` | no |  |
| `action_by_id` | `bigint` | no | users.id |
| `is_action_flow_completed` | `boolean` | no |  |
| `is_cancelled` | `boolean` | no |  |
| `comments` | `character varying(1000)` | yes |  |
| `created_at_utc` | `timestamp with time zone` | no |  |
| `created_by_user_id` | `bigint` | no | users.id |
| `updated_at_utc` | `timestamp with time zone` | yes |  |
| `updated_by_user_id` | `bigint` | yes | users.id |
