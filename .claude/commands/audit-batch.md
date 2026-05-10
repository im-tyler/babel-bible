---
description: Spawn a parallel batch of Fast Track audits. Default 4 books at once.
argument-hint: [N | --ft-prefix PREFIX | --batch N]
---

Run a parallel audit batch.

1. Refresh the plan:

   ```bash
   python3 scripts/build_production_plan.py
   ```

2. Pick N unaudited books and emit one brief per book:

   ```bash
   python3 scripts/audit_next_book.py --batch ${N:-4} $ARGUMENTS
   ```

   Each brief is separated by `---BRIEF-BREAK---` in the output.

3. Spawn one Agent per brief in **the same message** so they run in parallel:
   - `subagent_type: general-purpose`
   - `run_in_background: true`
   - `prompt`: the brief verbatim

4. As each agent finishes (writes `plans/fasttrack/<slug>.md`), refresh the plan to ingest the new gap units:

   ```bash
   python3 scripts/build_production_plan.py
   ```

5. After all agents in the batch return, commit + push:

   ```bash
   git add -A
   git commit -m "audit batch: <book-slugs> — <N> total gap units identified"
   git push
   ```

6. Run the dashboard:

   ```bash
   python3 scripts/dashboard.py
   ```

**Audit kinds in §3 of each audit doc:**
- `[NEW]` — write a new unit
- `[DEEPEN]` — replace templated stand-in content in an existing unit
- `[ENRICH]` — add a citation to an existing unit's bibliography (no new authoring)

The producer should consume `[NEW]` and `[DEEPEN]`. `[ENRICH]` items are bibliography-only patches and should be applied as a single small commit per audit-batch.

**Hard stop conditions:**
- ≥3 audit agent failures in a row → infrastructure-degradation; pause.
- Validator regression on a peer audit while writing the new one → pause.
- 0 unaudited books returned → call `/produce-next` instead.

**Useful prefix filters:**
- `--ft-prefix 0.` — prerequisites (Lang Basic Math, Apostol, Arnold ODE)
- `--ft-prefix 1.` — ch. 1 (mechanics + fields + geometry foundations)
- `--ft-prefix 2.` — ch. 2 (quantum + stat-mech)
- `--ft-prefix 3.` — ch. 3 (modern geometry + topology)
