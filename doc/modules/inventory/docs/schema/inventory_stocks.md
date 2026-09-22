# Table: inventory_stocks

```yaml
---
id: tbl:inventory_stocks
module: inventory
status: verified
model: InventoryStock
columns: [inventory_batch_id->inventory_batches.id, inventory_rack_id->inventory_racks.id, issued_quantity, received_quantity, adjustment_quantity, transfer_issue_quantity, transfer_receive_quantity]
---
```

PostgreSQL schema: `inventory_module`.

Composite PK: `(inventory_batch_id, inventory_rack_id)`.

Cumulative balance formula (see Persistence stock-report doc):  
`received + transfer_receive − issued − transfer_issue − adjustment`.

Entity: `retailr-server/src/Modules/InventoryModule/InventoryModule.Domain/Entities/InventoryStock.cs`  
Config: `.../EntityConfigs/InventoryStockConfig.cs`
