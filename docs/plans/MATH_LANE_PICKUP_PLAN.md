# Math lane — pickup plan

**Written 2026-05-20** at session pause after wave-batch 1. Tip on Forgejo: `4d1d4ea`.

Pick this up cold by reading the top of `manifests/orchestrator_status.md` and this file. Everything else is in the codebase.

---

## §1 Where the math lane stands

| Metric | Value |
|---|---|
| Shipped units | 714 |
| Queued (audit-derived) | 52 |
| Audited Fast Track books | 58 / 92 (34 explicitly out-of-scope) |
| Books at 100% in plan | 36 / 50 |
| Books partial | 13 |
| Books at 0% shipped | 1 (Joe Harris *Moduli of Curves*) |

**Definition of done for this plan:** every audited Fast Track book at 100% in `manifests/production/plan.json`. ~10 cycles @ 6 units, or ~15 wave-batches @ 4 units.

## §2 Remaining queue by book

Ordered by "cheapest to close" (the book-completion framing introduced Cycle 12). Closing a book reduces the partial-count and moves it into the 100% column — that's the headline metric.

| # | Book | Queued | Cycles to close | Closes at | Notes |
|---|---|---|---|---|---|
| 1 | **Manin IMNT** | 4 | 1 | book #37 | 4 remaining: 21.06.02 Sato-Tate, 21.09.01 Arakelov, 21.09.02 Faltings/Mordell, 21.10.01 Langlands survey |
| 2 | Souriau *Dynamical Systems* | 1 | <1 | book #38 | spillover into another cycle |
| 3 | May-Ponto *More Concise* | 1 | <1 | book #39 | spillover |
| 4 | LL *Stat Phys 1* | 4 | 1 | book #40 | thermodynamics/transport |
| 5 | Hirzebruch *Manifolds & Modular Forms* | 2 | <1 | book #41 | 03.06.24 Bott-Taubes rigidity + 1 |
| 6 | Hirzebruch *Topological Methods* | 2 | <1 | book #42 | 04.05.11 worked HRR, 04.05.12 GRR pointer |
| 7 | Woit *Quantum Theory Groups & Reps* | 2 | <1 | book #43 | spillover |
| 8 | Fulton *Toric Varieties* | 4 | 1 | book #44 | 04.11.12 toric cohomology + 3 |
| 9 | Weinberg QFT vol 1 | 4 | 1 | book #45 | QFT foundations cluster |
| 10 | Mumford *GIT* | 5 | 1 | book #46 | deformation/DM moduli remainder |
| 11 | Chatterjee QFT | 6 | 1.5 | book #47 | 08.10.04 Wick + cluster |
| 12 | Parisi-Wu *Stochastic Quantization* | 7 | 2 | book #48 | new chapter likely needed |
| 13 | **Joe Harris *Moduli of Curves*** | 7 | 2 | book #49 | last zero-ship book |
| 14 | Serre *Course in Arithmetic* | 8 | 2 | book #50 | Section 21 expansion (mostly NT) |

Total: **57 queued, ~14 cycles or ~15 wave-batches**.

The book-completion ordering above is the recommended dispatch order. Two reasons: (a) every cycle ends with a clean "book X closes at 100%" headline; (b) the ≤2-queue books at slots 2/3/5/6/7 fill spillover slots when a 4-queue book leaves room in a wave-batch.

## §3 How to dispatch (pickup mechanics)

### Quick path — autonomous wave-loop (recommended for sustained sessions)

Run the wave-loop skill. It refreshes plan, picks 4 next queued units, dispatches in parallel, integrates each, commits, pushes, loops. Hard-stops are well-defined.

```
# In Claude Code session:
/wave-loop
```

Skill driver loops until natural stop: 3+ stalls, 3+ consecutive validator-fix batches, continuity-metric regression, or out-of-scope topic.

### Manual cycle path (when you want to curate dispatch)

```bash
cd "/Users/tyler/Documents/Code Projects/B.I.B.L.E"

# 1. Refresh plan
python3 scripts/build_production_plan.py

# 2. See the queue head
python3 scripts/produce_next.py --batch 6 | grep "^# Agent brief"

# 3. Read the full briefs (one per unit, ~80 lines each)
python3 scripts/produce_next.py --batch 6 > /tmp/briefs.txt

# 4. Dispatch 6 Agent calls in parallel using each brief
# 5. On return: re-validate each, run scripts/integrate_unit.py <id>
# 6. Pass-W cross-stitch (separate agent)
# 7. Commit + push
# 8. Append orchestrator_status entry
```

This was the pattern for Cycles 12-14. Use it when you want to enforce a specific book-by-book sequence or when an unusual topic needs custom briefing.

## §4 Hard-won knowledge from this session arc (2026-05-20)

### 4.1 Term-of-art tension (NT lane)

The validator's `\btrivial(?:ly)?\b` regex prohibition collides with pinned analytic-number-theory phrases:
- "trivial zero" → use **"negative-even zero"**
- "trivial character" → use **"principal character"**
- "trivial Galois representation" → use **"identity / one-dimensional unit representation"**
- "trivial motive" → use **"unit motive"**
- "inertia acts trivially" → use **"inertia acts by the identity"**

Affects every NT/Galois-rep unit. Future fix: add a per-domain validator exemption (whitelist) for chapter 21. Until then, agents work around with the substitutions above — established precedent in 21.03.01–21.07.02.

### 4.2 Catalog backfill pattern

If a unit ships with `concept_catalog_id: namespace.foo` but no matching entry exists in `docs/catalogs/CONCEPT_CATALOG.md`, validator fails on that one check. Backfill the missing entry as part of close-cycle (same shape as siblings). Two instances in this session: `foundations.subgroup-coset-quotient` (Cycle 13), `diff-geom.padics-lie-group` (Cycle 14).

### 4.3 Continuity-metric advisories ≠ regressions

`scripts/integrate_unit.py` may report `forward_density: 2.21 < 3.0` or `synthesis_master: 4.00 < 4` as **warnings** — these are not validator failures. Integrator still marks the unit shipped. Only stop on regression of a *previously passing* unit, not on advisories for newly-shipped ones.

### 4.4 Session B carry-over

The other Claude session (Session B, chem/bio/phys lane) keeps shipping cross-domain deepenings between math dispatches. Typical pattern: at commit time, 4–11 cross-domain files appear modified in working tree. **They validate at 27/27** and should be committed *separately* (`chem/bio/phys carry-over:` prefix) before the math-lane commit. See `9d598f9`, `bc52204` for shape. Keeps Forgejo history clean and auditable.

### 4.5 Sibling-in-flight prereqs

When a unit's natural prereq is being produced in the same cycle, the agent must put it in `## Connections [Master]` *not* `prerequisites:` — otherwise validator fails the prereq-resolve check. Codified in playbook §10.3. Briefs should call this out explicitly when relevant.

### 4.6 Pass-W reciprocity

After each cycle ships, run a Pass-W agent (dispatch + brief in this session's cycles) to add reciprocal Connections bullets in peer files. Typical: 20–40 reciprocal edits across 10–16 peers. Catches stale unit-ID references and reciprocity gaps. Pattern in `manifests/weaving_report.md` — append each cycle.

### 4.7 Tip-of-Forgejo discipline

Push after every cycle / wave-batch close. Forgejo remote is `http://100.108.123.49:49152/Tyler/codex.git`, branch `main`. Session B and math-lane sessions sync through here — push promptly to avoid divergence.

## §5 Quality gates (don't compromise)

Per `docs/plans/AGENTIC_EXECUTION_PLAN.md` §8 and the cycles 12–14 precedent:

1. **27/27 validator on every unit before commit.** Re-validate independently after agent returns; agents have been known to over-claim.
2. **Re-dispatch on agent failure.** Never accept partial — one transient API socket failure happened in Cycle 11; the re-dispatch was clean.
3. **Pass-W reciprocity after every cycle.** Catches one-way links before they accumulate.
4. **Lean compile check every 6 cycles.** `lake build` against current Mathlib. Pin `lake-manifest.json` if a Mathlib upgrade breaks anything.
5. **Continuity report sweep every 3 cycles.** Drift triggers a polish cycle.

## §6 What comes after "all books closed"

Phase 5 polish (3–4 cycles):
- Continuity sweep across all 714+ shipped units
- Lean compile pass against current Mathlib
- Drift audit on Cycle-1 through Cycle-N units
- Bibliography canonicalisation
- Pass-W consolidation: every Master ≥ 3 lateral connections

After that, decide:
- Backfill the ~200 missing entries in `CONCEPT_CATALOG.md`, OR
- Reposition the catalog as a seed-list and update `/concepts` to reflect that

Site/UX polish (separate, ~2 hour focused session):
- Add tier + Lean columns to `/units` index
- Add search + section grouping to `/concepts`
- Link prereqs on `/concepts` to in-page anchors
- Fix "Babel Bible" → "Math STEM" branding in head titles
- Add "Catalog entry →" reverse link on `/u/[id]`

These don't block math-lane completion and can run in parallel with Session B's chem/bio/phys lane.

## §7 Where to look in the codebase (orientation)

| Need | Location |
|---|---|
| Current state | `manifests/orchestrator_status.md` (tail) |
| Plan / coverage | `manifests/production/plan.json` (regenerate via `scripts/build_production_plan.py`) |
| Next unit briefs | `python3 scripts/produce_next.py --batch N` |
| Validator | `python3 scripts/validate_unit.py <path>` |
| Integrator | `python3 scripts/integrate_unit.py <id>` |
| Audit punch-lists | `plans/fasttrack/<book-slug>.md` |
| Style contract | `docs/specs/UNIT_SPEC.md`, `docs/specs/QUALITY_RUBRIC.md`, `docs/plans/CYCLE_4_STYLE_PARITY_PLAN.md` |
| Production playbook | `docs/plans/AGENT_PRODUCTION_PLAYBOOK.md` (§5.1 contract, §10 originator-prose, §10.3 sibling-in-flight, §16 paths) |
| Cross-stitch log | `manifests/weaving_report.md` |
| Cycle history | `manifests/orchestrator_status.md` |

## §8 First action when picking this up

```bash
cd "/Users/tyler/Documents/Code Projects/B.I.B.L.E"
git pull origin main                                    # sync with Session B
python3 scripts/build_production_plan.py                # refresh
tail -100 manifests/orchestrator_status.md              # recent cycles
python3 -c "import json; p = json.load(open('manifests/production/plan.json')); print(f'shipped={p[\"counts\"][\"shipped\"]} queued={p[\"counts\"][\"queued\"]}')"
```

Then either invoke `/wave-loop` or pick the next book from §2 and dispatch manually.

---

End of pickup plan. Good luck — quality bar is holding; the orchestration loop works.
