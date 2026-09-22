# Feature: {short name}

```yaml
---
id: feat:inv-{slug}
module: inventory
category: master-data
status: verified
ui: {route-slug}
api:
  - METHOD path -> Controller.Method
service: {ServiceName}
tables: []
upstream: []
downstream: []
---
```

## Purpose

One or two sentences.

## Entry

| Kind | Value |
|------|-------|
| Routes | `inventory-module/...` |
| Angular | `retailr-client/.../pages/...` |
| Controller | `retailr-server/.../Controllers/....cs` |
| Service | `retailr-server/.../Features/.../` |

## Notes

Only when something is non-obvious (odd route spelling, shared controller, etc.).
