# Inventory module

Schema: `inventory_module` (PostgreSQL).

All feature docs below list **every controller action** from `InventoryModule.Api` (verified against source). Re-harvest after edits:

```bash
node ../.agent/knowledge-graph/harvest_graph.mjs
```

## Feature index

### Configurations (master-data)

| Feature id | Doc | Status |
|------------|-----|--------|
| `feat:inv-category` | [features/inv-category.md](features/inv-category.md) | verified |
| `feat:inv-attribute` | [features/inv-attribute.md](features/inv-attribute.md) | verified |
| `feat:inv-batch` | [features/inv-batch.md](features/inv-batch.md) | verified |
| `feat:inv-material` | [features/inv-material.md](features/inv-material.md) | verified |
| `feat:inv-item` | [features/inv-item.md](features/inv-item.md) | verified |
| `feat:inv-store` | [features/inv-store.md](features/inv-store.md) | verified |
| `feat:inv-rack` | [features/inv-rack.md](features/inv-rack.md) | verified |
| `feat:inv-bp-rfq-setting` | [features/inv-bp-rfq-setting.md](features/inv-bp-rfq-setting.md) | verified |

### Transactions

| Feature id | Doc | Status |
|------------|-----|--------|
| `feat:inv-stock-opening` | [features/inv-stock-opening.md](features/inv-stock-opening.md) | verified |
| `feat:inv-stock-mrr-rm` | [features/inv-stock-mrr-rm.md](features/inv-stock-mrr-rm.md) | verified |
| `feat:inv-stock-mrr-fg` | [features/inv-stock-mrr-fg.md](features/inv-stock-mrr-fg.md) | verified |
| `feat:inv-stock-requisition` | [features/inv-stock-requisition.md](features/inv-stock-requisition.md) | verified |
| `feat:inv-stock-issue` | [features/inv-stock-issue.md](features/inv-stock-issue.md) | verified |
| `feat:inv-stock-issue-return` | [features/inv-stock-issue-return.md](features/inv-stock-issue-return.md) | verified |
| `feat:inv-stock-adjustment` | [features/inv-stock-adjustment.md](features/inv-stock-adjustment.md) | verified |
| `feat:inv-stock-transfer` | [features/inv-stock-transfer.md](features/inv-stock-transfer.md) | verified |
| `feat:inv-stock-closing` | [features/inv-stock-closing.md](features/inv-stock-closing.md) | verified |
| `feat:inv-current-stock` | [features/inv-current-stock.md](features/inv-current-stock.md) | verified |

### Reports

| Feature id | Doc | Status |
|------------|-----|--------|
| `feat:inv-stock-report` | [features/inv-stock-report.md](features/inv-stock-report.md) | verified |

## Knowledge graph

- Guide: [10-knowledge-graph.md](10-knowledge-graph.md)
- Generated: [`../.agent/knowledge-graph/`](../.agent/knowledge-graph/)
