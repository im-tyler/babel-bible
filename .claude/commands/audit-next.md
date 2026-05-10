---
description: Pick the next unaudited Fast Track book and run it through an audit agent
argument-hint: [--ft-entry FT] [--slug SLUG]
---

Workflow for adding a new audit to the campaign:

1. Refresh the master plan:

   ```bash
   python3 scripts/build_production_plan.py
   ```

2. Pick the next unaudited book and emit the audit brief:

   ```bash
   python3 scripts/audit_next_book.py $ARGUMENTS
   ```

3. Launch an Agent with `subagent_type=general-purpose`, `run_in_background=true`, and the printed brief. Audit agents typically take 5-10 minutes.

4. When the agent writes `plans/fasttrack/<slug>.md`, refresh the plan to ingest the new gap units:

   ```bash
   python3 scripts/build_production_plan.py
   ```

   The plan rebuild parses the new audit's punch-list, deduplicates against existing audits, and adds queued items to the master queue.

5. Commit the new audit:

   ```bash
   git add -A
   git commit -m "audit: <book-name> — <N> gap units identified"
   git push
   ```

6. Run the dashboard to see the updated burn-down:

   ```bash
   python3 scripts/dashboard.py
   ```

After this, switch to `/produce-next` to start producing the new gap units.

**Out-of-scope books** (skip these): Generalized Functions Vols 4-6 (advanced applications), Quantum Electrodynamics, Statistical Field Theory Vol. 2 — too narrow for the FT spine. Use `--ft-entry` to manually pick something more appropriate if `audit_next_book.py` selects one of these.
