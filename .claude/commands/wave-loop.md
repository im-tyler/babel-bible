---
description: Drive the produce/integrate/commit cycle until natural stop. The autonomous wave-loop.
argument-hint: [--max-batches N | --topic FT-PREFIX]
---

Run a sustained wave of unit production.

## Driver behaviour

Loop the following until a hard-stop condition fires:

1. **Refresh the plan.**
   ```bash
   python3 scripts/build_production_plan.py
   ```

2. **Check the queue depth.**
   - If `queued >= 4`: continue to step 3 (production batch).
   - If `queued > 0` but `< 4`: produce what's there, then trigger an audit batch via `/audit-batch` to refill.
   - If `queued == 0`: trigger `/audit-batch 4` to populate the queue, then loop.

3. **Spawn a parallel produce batch (4 agents).**
   ```bash
   python3 scripts/produce_next.py --batch 4
   ```
   For each printed brief, launch one Agent (`subagent_type: general-purpose`, `run_in_background: true`) **in the same message** so they execute in parallel.

4. **Integrate each returning unit.**
   ```bash
   python3 scripts/integrate_unit.py <id>
   ```
   Must hit 27/27. If validator fails, fix and re-run; if 2+ retries fail on the same unit, stop and report.

5. **Commit + push the batch.**
   ```bash
   git add -A
   git commit -m "wave-batch <N>: <unit-ids>"
   git push
   ```

6. **Run the dashboard.**
   ```bash
   python3 scripts/dashboard.py
   ```

7. **Loop** to step 1.

## Hard-stop conditions (pause and report to the user)

- ≥3 agent stalls (600s timeout) in a single batch — infrastructure degradation.
- ≥3 consecutive batches require manual validator-fix — quality bar slipping.
- `--max-batches N` reached (default unlimited; if the user passes a cap, honor it).
- Continuity-metric regression after integration — stop, do not auto-fix.
- Out-of-scope topic surfaced (Generalized Functions Vol 4-6, QED, Stat Field Theory Vol 2) — skip and continue.

## Safety + reporting

- After every successful batch: print a 3-line summary (count shipped this wave, queue remaining, last commit sha).
- On hard stop: print the failure reason, the dashboard, and what the next session should pick up from.
- **Never** alter `manifests/deps.json` or `manifests/connections.json` by hand — the integrator owns those.
- **Never** mark a unit shipped without 27/27 validator pass.

## Topic filtering

- Default: pull whatever is at the top of `queue_topo_order` (no filter).
- `--topic 0.`, `--topic 1.`, `--topic 2.`, `--topic 3.`: prefer queued units derived from FT chapter N audits. Useful for "foundations only" or "modern geometry only" passes.
- The producer respects topic filtering; if no matching units are queued, fall back to whatever is queued first.

## Cost expectation per wave

- 4 agents × ~250-400k tokens each per batch = ~1-1.5M tokens / batch.
- ~5-15 min wall-clock per batch + ~2 min orchestrator overhead per integration.
- A 10-batch wave (typical natural session) ships ~40 units, ~$500-800 agent compute.
