---
description: Pick the next queued unit and run it through the swarm pipeline
argument-hint: [--id ID] [--batch N]
---

Workflow for advancing the Codex Fast Track production:

1. Refresh the master plan:

   ```bash
   python3 scripts/build_production_plan.py
   ```

2. Pick the next queued unit(s) and emit briefs:

   ```bash
   python3 scripts/produce_next.py $ARGUMENTS
   ```

   Default: 1 unit. Pass `--batch 4` for a parallel swarm. Pass `--id 05.09.03` to target a specific unit.

3. For each printed brief, **launch a single Agent** with `subagent_type=general-purpose`, `run_in_background=true`, and the full brief as the `prompt`. If multiple briefs are printed, launch them in parallel (one Agent per brief, all in the same message).

4. As each agent completes, run the integrator:

   ```bash
   python3 scripts/integrate_unit.py <id> --commit --push
   ```

   The integrator:
   - Validates the file (must hit 27/27 — if not, fix and re-run).
   - Adds a stub catalog entry if missing.
   - Updates `manifests/deps.json` (idempotent).
   - Marks the unit shipped in the production plan.
   - Generates any missing placeholder SVGs.
   - Confirms continuity thresholds still pass.
   - Commits + pushes the result.

5. After integration, run the dashboard:

   ```bash
   python3 scripts/dashboard.py
   ```

6. Repeat from step 2 until the user calls stop.

**Hard stop conditions** (pause and report to the user):
- Validator drops below 100% on a file you can't fix in 1-2 iterations.
- Continuity thresholds fail after a batch.
- ≥3 agent failures in a single batch (infrastructure-degradation signal).
- Production plan reports 0 queued units (run an audit instead via `/audit-next`).

**Quality bar reminder:** every produced unit must show real, complete proofs (not the templated Cartan-formula stand-in the Cannas audit flagged), specific worked examples, and originator citations with primary-source dates.
