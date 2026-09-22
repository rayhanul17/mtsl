# Inventory module

PostgreSQL schema: `inventory_module`.

Every feature lists **all** controller actions. Graph:

```bash
node ../.agent/knowledge-graph/harvest_graph.mjs
```

Guide: [10-knowledge-graph.md](10-knowledge-graph.md)

## Features

### Master-data

| Id | Doc |
|----|-----|
| `feat:inv-category` | [inv-category.md](features/inv-category.md) |
| `feat:inv-attribute` | [inv-attribute.md](features/inv-attribute.md) |
| `feat:inv-batch` | [inv-batch.md](features/inv-batch.md) |
| `feat:inv-material` | [inv-material.md](features/inv-material.md) |
| `feat:inv-item` | [inv-item.md](features/inv-item.md) |
| `feat:inv-store` | [inv-store.md](features/inv-store.md) |
| `feat:inv-rack` | [inv-rack.md](features/inv-rack.md) |
| `feat:inv-bp-rfq-setting` | [inv-bp-rfq-setting.md](features/inv-bp-rfq-setting.md) |

### Transactions

| Id | Doc |
|----|-----|
| `feat:inv-stock-opening` | [inv-stock-opening.md](features/inv-stock-opening.md) |
| `feat:inv-stock-mrr-rm` | [inv-stock-mrr-rm.md](features/inv-stock-mrr-rm.md) |
| `feat:inv-stock-mrr-fg` | [inv-stock-mrr-fg.md](features/inv-stock-mrr-fg.md) |
| `feat:inv-stock-requisition` | [inv-stock-requisition.md](features/inv-stock-requisition.md) |
| `feat:inv-stock-issue` | [inv-stock-issue.md](features/inv-stock-issue.md) |
| `feat:inv-stock-issue-return` | [inv-stock-issue-return.md](features/inv-stock-issue-return.md) |
| `feat:inv-stock-adjustment` | [inv-stock-adjustment.md](features/inv-stock-adjustment.md) |
| `feat:inv-stock-transfer` | [inv-stock-transfer.md](features/inv-stock-transfer.md) |
| `feat:inv-stock-closing` | [inv-stock-closing.md](features/inv-stock-closing.md) |
| `feat:inv-current-stock` | [inv-current-stock.md](features/inv-current-stock.md) |

### Reports

| Id | Doc |
|----|-----|
| `feat:inv-stock-report` | [inv-stock-report.md](features/inv-stock-report.md) |

All statuses: **verified**.
