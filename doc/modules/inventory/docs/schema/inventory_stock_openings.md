# Table: inventory_stock_openings

```yaml
---
id: tbl:inventory_stock_openings
module: inventory
status: verified
model: InventoryStockOpening
columns: [inventory_batch_id->inventory_batches.id, inventory_rack_id->inventory_racks.id, effective_date, quantity, is_data_locked, short_description]
---
```

PostgreSQL schema: `inventory_module`.

Composite PK: `(inventory_batch_id, inventory_rack_id, effective_date)`.

Entity: `retailr-server/src/Modules/InventoryModule/InventoryModule.Domain/Entities/InventoryStockOpening.cs`  
Config: `.../EntityConfigs/InventoryStockOpeningConfig.cs`
