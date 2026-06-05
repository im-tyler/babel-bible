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

**(a) SETUP** — register the spine's section(s) once, before producing. A NEW section
(probability 37, dynamics 38, operator-algebras 39, combinatorics 40, category-theory 41)
needs ALL of 1-7. A spine that EXTENDS an existing section (PDE→analysis, analytic-NT→
number-theory) skips 2-5 and only does 6-7 (new chapter dirs + skeleton). Do this as a
SINGLE commit before any audit/produce so every downstream agent sees the same structure.

1. **Section dir.** Create `content/<NN>-<name>/` (reserved numbers in §4).
2. **field_map.yaml — the section→field row (easy to miss).** Add a row under `sections:`
   mapping the new section KEY → `{ area: math, field: <field-id> }`. ⚠️ The `<field-id>`
   may ALREADY appear in the `fields:` block (label+order) — that is NOT the same thing;
   without the `sections:` row the section defaults to `area: other` and disappears from the
   math lens. Confirm the `fields:` label/order also exists (add if not).
3. **validate_unit.py — register the prefix.** Add `"<NN>": "math"` to `DOMAIN_BY_PREFIX`
   AND add `"<NN>"` to the `formal_gap_required` set (~line 450). Without this the section
   silently defaults to math but at the WEAKER 5-word lean-gap bar instead of 30; registering
   holds new pure-math units to the same standard as the rest of math.
4. **sections.ts — build-critical, not cosmetic.** Append to `SECTIONS[]` in
   `site/src/lib/sections.ts`:
   `{ key: "<section-key>", order: <float>, label: "<Display>", anchor: "<section-key>", domain: "mathematics" }`.
   `key` MUST equal the frontmatter `section:` value. If a unit references an unregistered
   section key, the site lookup returns undefined and the build can break.
5. **lenses/<field-id>.yaml.** `{ id, label, description, seed: { field_in: [<field-id>] }, group_by: field }`.
6. **Chapter skeleton (prevents id chaos).** Before auditing, lay down the chapter dirs +
   numbering for the section from the BACKLOG's per-spine skeleton, e.g.
   `content/37-probability/{01-measure-foundations,02-independence-laws,03-clt-characteristic-fns,...}/`.
   All audit/producer agents then slot ids into this SHARED structure (`<NN>.<CC>.<UU>`),
   so parallel agents don't collide or invent divergent chapter numbers.
7. **Smoke-test the SETUP.** Run `python3 scripts/build_lenses.py` and confirm: the new
   field appears, its lens resolves with **0 dangling**, and `by area` still shows the
   section under `math` (not `other`). Fix before producing.

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

**(e) COMPLETENESS pass (per spine — "ensure nothing was missed").** The loop is
gap-driven, so a missed concept in the audit never gets produced. After a spine's PRODUCE
wave integrates, run ONE re-audit round against the now-larger corpus: re-spawn an audit
agent per book (same `AUDIT_BRIEF`, but told "the corpus already contains the units listed
in this spine's gap files — find anything STILL absent"). Produce any genuinely new gaps it
surfaces, integrate, and repeat until a full round yields **0 new gaps** (loop-until-dry,
typically 1-2 rounds). Only then mark the spine's PRODUCE step `[x]` and log the dry round.
This is the difference between "audited once" and "verified complete."

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
statuses AND append a one-line wave entry to its `## Log`, (c) update the memory file
`project_math_expansion.md` with what shipped and what's next, (d) write a one-paragraph
"where I am / next action" so the next session resumes in one read.

---

## 6. Provenance & the lens system (so new units are filterable)

Every produced unit stamps `source_books: [<book>]` and `source_curriculum: <spine-id>` in
frontmatter. `scripts/build_lenses.py` reads that (frontmatter takes precedence over the
audit-trail fallback) and assigns the unit to its field lens. After each wave, running
`build_lenses.py` makes the new units show up under their toggle on the site, and they
correctly do NOT appear under "Theoretical Physics" (which is Fast-Track-sourced). This is
the mechanism that keeps each lens showing "exactly and only what that path needs" as the
corpus grows.
