# Codex — Production Guide

**Audience:** the operator (Tyler), or a future Claude session running the production swarm.

**Purpose:** how to advance the Fast Track curriculum efficiently, without per-batch hand-holding.

---

## TL;DR

Three slash commands and four scripts. You invoke `/produce-next` (or `/audit-next` when the queue is empty), Claude runs the swarm, the integrator handles validation and commits. Repeat until done.

---

## The system

### Source of truth: `manifests/production/plan.json`

Built by `scripts/build_production_plan.py`. Parses every `plans/fasttrack/*.md` audit, dedups gap units, marks them shipped or queued by inspecting `content/`, and topologically sorts by prereqs.

Key fields:
- `units[<id>]` — every unit (shipped + queued) with status, source audits, prereqs.
- `queue_topo_order` — the list of queued unit ids in dependency order.
- `audits_done` — completed audits with P1/P2/P3/P4 counts.
- `books_unaudited` — FT booklist rows that lack an audit file.
- `counts` — top-line burn-down numbers.

Re-run `build_production_plan.py` whenever a new audit lands or a unit ships, to refresh the queue.

### Producer: `scripts/produce_next.py`

```
python3 scripts/produce_next.py            # 1 brief
python3 scripts/produce_next.py --batch 4  # 4 briefs (parallel-safe)
python3 scripts/produce_next.py --id 05.09.03  # target a specific unit
```

Picks the next queued unit (topo order; with `--batch N`, picks N units from distinct chapters to avoid file collisions) and prints a complete agent brief: target file path, frontmatter scaffold, peer references, hard constraints, continuity-metric requirements, and a math-content seed pulled from the audit's punch-list excerpt.

The brief is meant to be pasted directly into an `Agent({subagent_type: 'general-purpose', prompt: ..., run_in_background: true})` call.

### Integrator: `scripts/integrate_unit.py`

```
python3 scripts/integrate_unit.py 05.09.03                         # validate + register
python3 scripts/integrate_unit.py 05.09.03 --commit                # + commit
python3 scripts/integrate_unit.py 05.09.03 --commit --push         # + push to Forgejo
```

After an agent writes the unit file, the integrator:
1. Locates the file by id.
2. Runs the validator. **Aborts with exit 1 if not 27/27.**
3. Adds a stub catalog entry to `docs/catalogs/CONCEPT_CATALOG.md` if missing.
4. Adds prereq + successor edges to `manifests/deps.json` (idempotent).
5. Marks the unit shipped in the production plan.
6. Runs `gen_placeholders.py` to back-fill any missing SVGs.
7. Runs `measure_continuity.py` and confirms thresholds hold.
8. Optionally commits + pushes.

### Auditor: `scripts/audit_next_book.py`

```
python3 scripts/audit_next_book.py             # next unaudited book
python3 scripts/audit_next_book.py --ft-entry 1.04
```

Picks the next book from the unaudited list and emits an audit-agent brief in the same shape as the existing 9 audits. After the agent writes `plans/fasttrack/<slug>.md`, re-run `build_production_plan.py` to ingest the new gap units.

### Dashboard: `scripts/dashboard.py`

```
python3 scripts/dashboard.py
```

Prints burn-down, next 5 queued units, last 5 commits, validator + continuity headlines, and a session-count estimate.

---

## Slash commands

- **`/produce-next`** — full produce-validate-integrate-commit-push cycle. Pass `--batch 4` as `$ARGUMENTS` for parallel runs.
- **`/audit-next`** — generate the next audit, run the agent, refresh the plan.
- **`/dashboard`** — one-screen status.

These live at `.claude/commands/*.md`.

---

## Recommended cadence

Once you trust the swarm:

- **Daily** (or every other day): one `/produce-next --batch 4` cycle. Adds ~4 units. ~30-45 min wall-clock if everything goes smoothly. ~1-1.5M agent tokens.
- **Weekly** or when the queue runs low: one `/audit-next` cycle to add a new book's gap units to the queue.
- **After every 5-10 produced units**: spot-check the §M Master prose for templated voice. If you see Cannas-style boilerplate creeping in, schedule a deepening pass.

For autonomous-style operation (you're not at the keyboard), use the `loop` skill:

```
/loop 30m /produce-next
```

This runs `/produce-next` every 30 minutes for as long as the session is alive. **Caveats**: each loop iteration consumes meaningful compute; agent failures still need manual recovery; and the session-end happens when you close it. Treat this as "supervised autopilot," not "set and forget."

---

## Quality gates

The integrator enforces:

1. **27/27 validator** — automatic. Failed integration is rolled back.
2. **All 6 continuity thresholds** — measured on every integrate. A regression triggers a warning (not a hard fail).
3. **Catalog entry exists** — auto-stub if missing; refine manually later.
4. **Deps.json updated** — auto.

The integrator does NOT enforce:

- **Master prose §M standard** — these are the human-judgment items in `docs/specs/QUALITY_RUBRIC.md` §M. Templated voice creeps in occasionally; review periodically.
- **Mathematical correctness** — the validator catches phrasing slop, not math errors. Spot-check by reading.
- **Pedagogical coherence** — cross-references should make sense beyond just resolving syntactically.

---

## Cost expectations (rough)

Per produce-batch of 4 agents:
- Token cost: ~1-1.5M (each agent ~250-400k).
- Wall-clock: ~5-15 min for agents + ~2-3 min orchestrator overhead per integration.

Per audit:
- Token cost: ~250-500k.
- Wall-clock: ~5-15 min agent.

Per session (a 4-batch run + 1 audit + integration):
- Token cost: ~5-7M agent + ~500k orchestrator.
- Wall-clock: 45-90 min.

To finish the FT punch-list (estimate 400-600 net-new units + 80 audits):
- ~100-150 produce-batches + 80 audit batches.
- Sustained at one session/day: ~6-8 months of calendar time.
- Total agent compute: roughly $5-15K depending on prevailing rates.

---

## Failure modes and recovery

### Agent timeout / stream-idle
Has happened in this session. Recovery: launch a manual replacement agent with the same brief, OR write the unit by hand. After 3+ failures in a row, **stop launching** — infrastructure is degraded.

### Validator fails on a fresh unit
The most common failures (in order of frequency):
1. **Prohibited phrasing** (`trivial`, `non-trivial`, `obviously`, `clearly`). Rewrite using vanishes / identity / vanishing / etc.
2. **Beginner has `\partial`** — rewrite as "the boundary" in prose.
3. **Paragraph >250 words** — split.
4. **Catalog id missing** — integrator stubs it; re-validate.
5. **Pending prereq** — set `pending_prereqs: true` if peers are in flight.

### Continuity threshold regression
Usually the new unit's Bridge or Synthesis is missing the required forward-promise / synthesis-claim phrasings. Inspect the metrics with `python3 scripts/measure_continuity.py` and add the missing phrases.

### Numbering collision
Two audits suggested the same unit id. Re-run `build_production_plan.py` (it dedups) and pick distinct ids manually for the agents.

### Catalog drift
If the plan reports queued units that are actually shipped, the catalog id has drifted from the file id. Run `build_production_plan.py` — it rebuilds from the file system, not the catalog.

---

## Backlog (future scaffolding work)

Things this guide doesn't yet automate:

1. **Per-chapter editorial polish queue** — identify units with templated Bridge/Synthesis (regex-detect) and schedule deepening agents per chapter.
2. **Lean re-build automation** — `scripts/lean_health.py` would catch Mathlib-rename breakages and propose fixes.
3. **Real-diagram prioritisation** — most units still have abstract auto-generated SVGs; a queue ranked by view-count (once site analytics ship) would prioritise the highest-impact diagrams.
4. **Reviewer-attestation tracking** — REVIEWER_PLAN.md flags this as the actual scaling bottleneck. The integrator should write `human_reviewer: TBD` rows to a queue, and an attestation tool should let the reviewer mark units approved.

These are separate scaffolding sessions when the present queue gets exhausted.

---

## File map

```
scripts/
  build_production_plan.py    # build/refresh the master plan
  produce_next.py             # next-unit-brief generator
  integrate_unit.py           # validate + register + commit
  audit_next_book.py          # next-audit-brief generator
  dashboard.py                # one-screen status
  validate_unit.py            # (existing) per-unit validator
  validate_all.py             # (existing) corpus validator
  measure_continuity.py       # (existing) continuity scoring
  gen_placeholders.py         # (existing) placeholder SVG filler
  add_continuity_layer.py     # (existing) one-time continuity-layer pass

manifests/
  production/plan.json        # master plan (machine-readable)
  deps.json                   # unit DAG
  units/                      # per-unit pipeline-status manifests
  campaign.json               # multi-strand orchestration ledger

docs/
  plans/PRODUCTION_PLAN.md    # human-readable rollup of plan.json
  plans/PRODUCTION_GUIDE.md   # this file
  catalogs/CONCEPT_CATALOG.md # canonical concept registry
  catalogs/FASTTRACK_BOOKLIST.md  # 92-row book-list

plans/fasttrack/              # audit files (one per book)
.claude/commands/             # slash commands
```
