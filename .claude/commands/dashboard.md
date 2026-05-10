---
description: One-screen status of Codex production (shipped / queued / audits / next 5)
---

Print the current production dashboard:

```bash
python3 scripts/dashboard.py
```

If the plan has not been rebuilt recently, run:

```bash
python3 scripts/build_production_plan.py && python3 scripts/dashboard.py
```
