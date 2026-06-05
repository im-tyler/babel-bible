# Math Expansion — Autonomous Orchestration Playbook

A self-contained, self-resuming playbook for an agent to grow the corpus from the
Fast Track (theoretical-physics) slice toward broader mathematics, over many sessions,
with no human in the loop. A fresh agent given only this file + the briefs + the backlog
can run the whole thing.

**Source of truth for progress:** `plans/expansion/BACKLOG.md` (status-tracked, in the
repo — survives across sessions; the session task list does NOT).
**Briefs:** `docs/briefs/{AUDIT,PRODUCER,EXERCISE_PACK,DEEPEN_REPLACE}_BRIEF.md`.
**Why this exists / what "complete" means:** `docs/plans/LENS_SYSTEM_AND_MATH_EXPANSION.md`.

---

## 0. Standing rules (never violate)

- **Verify before producing.** Every proposed unit is grep-checked against the live
  corpus first; if covered, mark COVERED and do NOT produce a duplicate. Inflated
  "0% covered" audit claims are the norm — distrust them, verify.
- **27/27 or it doesn't ship.** Every unit self-validates to `scripts/validate_unit.py`
  27/27 before integration. No exceptions.
- **Collision-check ids across a batch** before producing. Parallel agents can't see each
  other's reservations. Dedupe shared topics and reassign clashing ids first.
- **Co-produced prereqs → Connections, not `prerequisites`.** A prereq produced in the
  same wave isn't on disk yet; list only shipped ids in frontmatter, reference the
  co-produced one in `## Connections`.
- **Commit per wave**, push, update `BACKLOG.md` statuses, update the memory checkpoint.
- **Never manufacture marginal units** to hit a number. 0-3 gaps for a mature book is a
  valid result.
- **Quality > speed.** This is a multi-day budget; do it properly.

---

## 1. The loop (what the agent does each session)

```
1. Read plans/expansion/BACKLOG.md. Find the FIRST item with status TODO
   (top-down: highest-priority spine, first unfinished step).
2. Dispatch that step (see §2 for step types). Use background agents in
   batches of 4-8; brief them from docs/briefs/.
3. As results land: collision-check, integrate (§3), commit the wave.
4. Update BACKLOG.md (mark the step DONE, note counts). Update memory.
5. Repeat from 1 until the budget/stop-condition (§5) is hit, then write a
   checkpoint and stop cleanly.
```

The backlog is ordered so "first TODO" is always the right next action. Resuming a later
session = re-run the loop; it picks up exactly where the backlog left off.

---

## 2. Step types

Each spine in the backlog expands into these steps, in order:

**(a) SETUP** — register the spine's section(s) once, before producing:
1. Pick the section name + dir (reserved numbers in §4). Create `content/<NN>-<name>/`.
2. Add the section to `manifests/field_map.yaml` (`area: math`, `field: <field-id>`) and
   to the `fields:` block (label + order).
3. Add it to `site/src/lib/sections.ts` (a `SectionInfo`, `domain: "mathematics"`).
4. Create `lenses/<field-id>.yaml` (seed `field_in: [<field-id>]`, `group_by: field`) so
   the field gets its own toggle.

**(b) AUDIT** — for each book in the spine, spawn an audit agent (brief:
`docs/briefs/AUDIT_BRIEF.md`) writing `plans/expansion/<spine>/_audit/<book>.gaps.md`.
Batch 4-6 books at a time (read-only, safe to parallelize). Record gap counts in the backlog.

**(c) PRODUCE** — collect all gap files for the spine, collision-check ids across the whole
set, then spawn producer agents (brief: `docs/briefs/PRODUCER_BRIEF.md`) — batches of 6-8.
Each agent: verifies-not-covered, produces a 3-tier unit, stamps `source_books` +
`source_curriculum: <spine-id>`, appends its catalog stub, self-validates 27/27, STOPs.
Optionally add exercise packs (brief: `docs/briefs/EXERCISE_PACK_BRIEF.md`) once concepts ship.

**(d) INTEGRATE + COMMIT** — see §3. Then run `python3 scripts/build_lenses.py` so the new
units appear under their field lens.

---

## 3. Integration (the mechanical recipe — proven)

```
for id in <produced ids, dependency order, foundations first>:
    python3 scripts/integrate_unit.py <id> --skip-continuity
python3 scripts/measure_continuity.py        # one scan per wave (non-gating warnings)
python3 scripts/build_production_plan.py      # if any in-place edits / deletions happened
python3 scripts/build_lenses.py               # refresh lens data for the new units
git add -A && git commit -m "<spine> wave N: <summary>" && git push
```
Notes: `integrate_unit.py` validates BEFORE adding the catalog stub, so producers must have
already appended their `### <id>` stub. `--skip-continuity` makes integration ~10x faster;
the continuity metrics (`synthesis_master`, `forward_density`) are chronic non-gating warnings.

---

## 4. Spine sequencing, section homes, fields (reserved)

Order by synergy with the existing corpus (do top-down). Section dirs start at 37 (36 is
the current max). Analytic NT and Modern-PDE fold into existing sections.

| # | Spine (curriculum id) | Section dir / name | field id | Notes |
|---|---|---|---|---|
| 1 | `probability` Probability & Stochastics | content/37-probability (`probability`) | `probability` | seeded: 02.15 stochastic chapter already exists; migrate/extend |
| 2 | `pde-harmonic` Modern PDE & Harmonic Analysis | extend `analysis` (02-analysis new chapters) | `analysis` (or new `pde-harmonic`) | extends 02.13-pde, 02.14-microlocal, 02.10-harmonic |
| 3 | `analytic-nt` Analytic Number Theory | extend `number-theory` (21 new chapters) | `number-theory` | orthogonal methods to the existing arithmetic-geometry NT |
| 4 | `dynamics` Dynamical Systems & Ergodic Theory | content/38-dynamics (`dynamics`) | `dynamics` | extends 02.12-ode |
| 5 | `operator-algebras` Operator Algebras & NCG | content/39-operator-algebras (`operator-algebras`) | `operator-algebras` | extends index theory / K-theory |
| 6 | `combinatorics` Combinatorics & Graph Theory | content/40-combinatorics (`combinatorics`) | `combinatorics` | near-zero currently |
| 7 | `logic-foundations` Foundations, Logic & Category Theory | extend `logic` (24/25) + content/41-category-theory | `foundations-logic` | extends the stub logic chapter + the single 01.02.09 category unit |

Tier B (applied — only if scope includes it; lower synergy, defer): Numerical Analysis,
Optimization & Control, Statistics & Learning, Information & Coding Theory, Theoretical CS.
Section dirs 42+. See the backlog for anchor books.

---

## 5. Stop conditions & checkpoint

Stop and write a checkpoint when ANY of:
- a token/time budget cap is reached,
- a spine completes (natural checkpoint),
- a manual gate fires (the backlog marks some items "HUMAN GATE" — e.g. a sourcing
  decision, or a Tier-B go/no-go),
- repeated tool/integration failure that needs a human.

Checkpoint = (a) ensure the working tree is clean and pushed, (b) update `BACKLOG.md`
statuses, (c) update the memory file `project_pipeline_drained.md` with what shipped and
what's next, (d) write a one-paragraph "where I am / next action" so the next session
resumes in one read.

---

## 6. Provenance & the lens system (so new units are filterable)

Every produced unit stamps `source_books: [<book>]` and `source_curriculum: <spine-id>` in
frontmatter. `scripts/build_lenses.py` reads that (frontmatter takes precedence over the
audit-trail fallback) and assigns the unit to its field lens. After each wave, running
`build_lenses.py` makes the new units show up under their toggle on the site, and they
correctly do NOT appear under "Theoretical Physics" (which is Fast-Track-sourced). This is
the mechanism that keeps each lens showing "exactly and only what that path needs" as the
corpus grows.
