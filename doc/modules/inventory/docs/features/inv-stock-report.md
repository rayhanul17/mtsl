# Feature: Stock Report

```yaml
---
id: feat:inv-stock-report
module: inventory
category: reports
status: draft
ui: inventory-stock-report
api:
  - GET inventory-reports/stocks -> InventoryReportController.GetStocks
  - GET inventory-reports/report-header -> InventoryReportController.GetReportHeader
service: InventoryReportService
repos: [InventoryReportRepository]
sql: [InventoryStockReportQuery]
tables: [inventory_stocks, inventory_stock_openings, inventory_stock_mrr_details, inventory_stock_issue_details]
upstream: [feat:inv-stock-opening, feat:inv-stock-mrr-rm, feat:inv-stock-issue]
downstream: []
---
```

## Purpose

Period stock movement report (opening, MRR, issue, return, transfer, adjustment, closing).

## Entry

| Kind | Value |
|------|-------|
| UI route slug | `inventory-stock-report` |
| API base | `inventory-reports/` |
| Controller | `InventoryReportController` |
| Deep SQL doc | `retailr-server/src/Modules/InventoryModule/InventoryModule.Infrastructure/Persistence/Docs/inventory-stock-report.md` |

## Gaps

`status: draft` — verify exact controller action names and filters against code.
