# Feature: Stock Report

```yaml
---
id: feat:inv-stock-report
module: inventory
category: reports
status: verified
ui: inventory-stock-report
api:
  - GET inventory-reports/stocks -> InventoryReportController.GetStockReport
  - GET inventory-reports/report-header -> InventoryReportController.GetReportHeader
service: InventoryReportService
repos: [InventoryReportRepository]
sql: [InventoryStockReportQuery]
tables: [inventory_stocks, inventory_stock_openings, inventory_stock_mrr_details, inventory_stock_issue_details, inventory_stock_transfer_details, inventory_stock_adjustment_details]
upstream: [feat:inv-stock-opening, feat:inv-stock-mrr-rm, feat:inv-stock-issue, feat:inv-stock-transfer, feat:inv-stock-adjustment]
downstream: []
---
```

## Purpose

Period stock movement report (opening, MRR, issue, return, transfer, adjustment, closing).

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/inventory-stock-report`, `inventory-module/inventory-stock-report-printing` |
| Angular | `retailr-client/src/app/modules/inventory-module/pages/inventory-stock-report/` |
| Controller | `retailr-server/src/Modules/InventoryModule/InventoryModule.Api/Controllers/InventoryReportController.cs` |
| Service | `retailr-server/src/Modules/InventoryModule/InventoryModule.Application/Features/InventoryReportFeatures/` |

## Notes

SQL detail: `retailr-server/.../Persistence/Docs/inventory-stock-report.md`.
