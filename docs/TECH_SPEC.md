# Technical Specification — metalmenders

## Overview

Private full-stack TypeScript sandbox for rapid prototyping with React client, Express server, and Drizzle ORM on PostgreSQL.

## Architecture

```mermaid
flowchart LR
  UI["React frontend"] --> API["Express backend"]
  API --> DB["PostgreSQL via Drizzle"]
```

## Evidence map

| Concern | Path |
|---------|------|
| Server | `server/` |
| Client | `client/` |
| Dependencies | `package.json` |

---

**Maintained by:** [Dark Heart Labs](https://darkheartlabs.technology)  
**Author:** Jennifer ([@jv-darkheartlabs](https://github.com/jv-darkheartlabs))  
**Site:** https://darkheartlabs.technology
