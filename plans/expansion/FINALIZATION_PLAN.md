# Babel Bible — Finalization Plan (the path to "done")

The successor to `BACKLOG.md`. The autonomous Fast-Track + Tier-C production campaign
is complete (2,392 units, all 27/27). What remains is a **mixed program** of scope
decisions, structural normalization, content re-homing, depth fills, and (optionally)
new subjects — *not* a greenfield production queue.

This document is self-resuming: a fresh agent given this file + the briefs under
`docs/briefs/` + the safety protocol in §3 can drive the program top-down. The
status table in §2 is the source of truth; update it as work lands.

**Status:** PLAN (2026-06-17). Authored against the **live** content tree, not the
2026-06-15 audit. The audit (`COMPREHENSIVE_AUDIT.md`) is now stale on mechanical
BLOCKERs — the June cleanup session already deleted §25-logic, fixed every duplicate
chapter number, emptied the empty dirs, and resolved the §01/§11/§19 collisions. Do
**not** re-plan those; they are done.

---

## 0. What "done" means (completion criteria)

The curriculum is "the best resource" — finalizable — when **all six** hold:

1. **Findability.** Every standard graduate/undergraduate topic has a *named chapter
   home* a reader can locate in <30s from the section list. No content reachable only
   by grep. (Closes: §01 algebra gap, Riemannian geometry, optics, condensed-matter,
   scientific linguistics, the §05/§08 slug-only chaos, §48/§03 split.)
2. **Structural cleanliness.** Every chapter is `NN-slug`, `NN` monotonically
   increasing from 01 within its section, no duplicates, no gaps without a documented
   reason. Every section's chapter list reads as an ordered curriculum.
3. **Tier-2 depth floor.** Every non-survey chapter carries ≥3 units. The intentional
   literacy surveys (§26-statistics, §49-logic, §50-CS) are exempt *by design* and
   documented as such; everything else at 1–2 units gets filled.
4. **Standard-subject coverage.** Every subject a comprehensive science+humanities
   curriculum carries has either a home here or an explicit, documented scope
   exclusion (§4.3). No silent absences.
5. **Validator + build green.** `python3 scripts/validate_all.py` clean; every unit
   27/27; `cd site && npm run build` clean; `python3 scripts/build_lenses.py` reports
   0 dangling per lens.
6. **Scope decisions recorded.** Every Tyler-only decision in §4 has a dated entry in
   `OVERVIEW.md` §12 (decision log) and a one-line verdict here in §2.

When all six are green, this file is archived and `OVERVIEW.md` §13 is updated to
declare the curriculum final-for-v1.

---

## 1. The shape of the remaining work (five categories)

| Cat | Name | New content? | Risk to existing content | Owner |
|---|---|---|---|---|
| **S** | Scope decisions | n/a | none | **Tyler only** |
| **B** | Structural normalization (renumber, merge, reconcile) | none | **high** — executed wrong | autonomous, §3 protocol |
| **C** | Re-homing (create chapter homes for scattered content + cross-refs) | low (cross-refs + ~10–40 units) | low | autonomous |
| **D** | Depth fills (thin non-survey chapters → ≥3 units) | medium | none | autonomous |
| **E** | New chapter builds (standard topics entirely absent) | medium | none | autonomous |
| **F** | New subjects (only if S approves) | high | none | autonomous after S-gate |

**Hard rule:** B-work and S-work gate everything else. Do not start C/D/E/F until the
B-items in the relevant section are closed and the S-decisions those items depend on
are recorded.

---

## 2. Status table (source of truth — update as work lands)

Legend: `[ ]` todo · `[~]` in progress · `[x]` done · `[S]` blocked on a scope decision · `[-]` explicitly declined (with reason).

### S — Scope decisions (LOCKED 2026-06-17 per Tyler "do it all"; verdicts per §4 recommendations)

| ID | Decision | Verdict |
|---|---|---|
| S1 | §48 ↔ §03 reconciliation | **Carve** — §48 = Classical & Riemannian Geometry; §03 = Modern/Gauge. Units are distinct (48.* vs 03.* IDs, verified) — no merge, only additive cross-refs + a named Riemannian chapter. |
| S2 | §08 vs §11 stat-mech | **Keep both** — distinct audiences; document the split via cross-ref. |
| S3 | §02.09-complex stub | **Keep in place** — unit is legitimately placed (elementary complex numbers in analysis); add cross-ref to §06.01, do not migrate. |
| S4 | New Linguistics section | **Yes** — §51-linguistics (prefix 51 free). |
| S5 | New Economics section | **Yes** — §52-economics. |
| S6 | Condensed-matter physics | **Yes** — as chapter under §12-quantum (`12.20-condensed-matter`). |
| S7 | Law / Pol-Sci / Business / standalone Neuroscience / Materials / standalone Astrophysics | **Defer to v2** — recorded as explicit scope exclusions (FINALIZATION_PLAN §4.3). Astrophysics = deepen §28. |
| S8 | Further Tier-B spines | **No** — spines 8–12 close the applied set. |

### B — Structural normalization (autonomous; §3 protocol)

**Important correction (2026-06-17):** verified against the live codebase that
**directory names are purely cosmetic** — `validate_unit.py` reads frontmatter only
(no dir↔id coupling); `build_lenses.py` does `CONTENT.rglob("*.md")` keyed on
frontmatter `section`/`chapter`; the site collection + `md-docs.ts` use `readdirSync`
+ frontmatter; URLs are `/u/<id>`, never dir names; zero inbound refs to any dir-name
string. **Users never see dir names.** The audit's "slug-only chapters break
navigation" was about filesystem aesthetics for developers, not user-facing
findability. User-facing findability is a frontmatter + site-home problem → that is
what the C-tasks solve.

| ID | Section | Task | Depends | Status |
|---|---|---|---|---|
| B1 | §05-symplectic | **DROPPED.** Slug-only dirs are cosmetic (zero functional impact) AND a clean rename is unsafe: `integrable/` (05.09.01–06) and `09-kam/` (05.09.07–09) both claim chapter 09 → collide; `symplectic-linear/` holds a stray 05.09.04. A correct fix is a content-level merge = a C-task, not a B-task. Not worth the risk for zero user gain. | — | `[-]` dropped |
| B2 | §08-stat-mech | **DROPPED.** Same reasoning — cosmetic only; chapter 12 is split across `fluctuations/` + `linear-response/`. No functional gain. | — | `[-]` dropped |
| B3 | §03-modern-geometry | Rename `03.15-morse-homology` → `15-morse-homology` to match the `NN-slug` format used by its 15 siblings. Trivially safe: no collisions, no inbound dir-name refs (grep-verified), frontmatter `chapter: morse-homology` already correct, unit IDs `03.15.*` unchanged. Pure developer-aesthetics. | — | `[ ]` |
| B4 | §48-differential-geometry | **After S1**: implement the chosen reconciliation. If "carve": renumber §48's 4 chapters to 01–04, add a Riemannian-geometry chapter (merging in relevant §03.02-manifolds units via cross-ref, not move). If "merge": move §48 units into §03 slots, redirect inbound refs. (Note: dir-name renumber is cosmetic per above; the load-bearing part is the cross-ref/redirect + new content.) | S1 | `[S]` |
| B5 | §02.09-complex | **After S3**: migrate the 1 stub unit to §06.01-complex-analysis, redirect inbound refs, remove empty dir. | S3 | `[S]` |
| B6 | §19-eco-evo-bio tail | Verify the 4 single-unit chapters (biogeography, coevolution, origin-of-life, biogeochemistry) are correctly placed; no content move unless a genuine misplacement is found. | — | `[ ]` |
| B7 | all sections | Sweep: confirm no orphan/empty dirs; confirm every unit's frontmatter `chapter` matches a dir that exists (this *is* load-bearing — `build_lenses` keys off it). Slug-only dir *names* are fine and ignored. | B3–B6 | `[ ]` |

### C — Re-homing scattered content (autonomous)

| ID | Topic | Current scatter | Task | Depends | Status |
|---|---|---|---|---|---|
| C1 | **§01 algebra home** | 325 units across §21/§04/§03/§07 (rings, fields, Galois, Noetherian, homological) | Add chapters to §01-foundations: `03-rings-modules`, `04-fields-galois`, `05-commutative-algebra`, `06-homological-algebra`. **Do not move** existing units; write 2–4 foundational units per chapter that establish the home + cross-ref the rich downstream content. ~10–20 new units total. | — | `[ ]` |
| C2 | **Optics home** | `10.08-advanced-electrodynamics` (eikonal, Kirchhoff, Kramers-Kronig) | Either (a) rename `10.08` → `10.08-optics-and-advanced-electrodynamics` + add 2–3 units (geometric optics, wave optics, polarization) so it reads as a findable optics home; or (b) split into `10.08-optics` + `10.09-advanced-em`. Recommend (a). | — | `[ ]` |
| C3 | **Condensed-matter physics home** | §16-inorgchem/07-solid-state (4 units, chemistry-flavored) + §12-quantum many-body | **After S6**: new chapter under §12-quantum (`12.20-condensed-matter`) or §13. Band structure, superconductivity, magnetism, topological phases. ~6–10 units. Cross-ref §16.07. | S6 | `[S]` |
| C4 | **Scientific linguistics home** | §22 is ELA; §31.05 is anthropological (3 units) | **After S4**: new section (recommended `51-linguistics`) with chapters phonetics/phonology, morphology, syntax-theory, semantics, pragmatics, historical-comparative, sociolinguistics. Migrate the 3 §31.05 units in as cross-refs (don't move — anthropological framing stays). ~20–30 units. | S4 | `[S]` |
| C5 | **Structured economics home** | §23-world/01-economics (30 essays only) | **After S5**: either expand §23.01 into tiered chapters (micro/macro/econometrics/game theory) or new section. Recommended: new section `52-economics`; keep §23.01 essays as a "readings" cross-ref. ~30–40 units. | S5 | `[S]` |
| C6 | **Riemannian geometry home** | Smeared across §03.02-manifolds (1 unit) and §48.02-manifolds (45 units) | **After S1/B4**: a named `riemannian-geometry` chapter with connection/curvature/geodesics/comparison-theorem units (~8–12). Pull existing relevant units in via cross-ref; write the missing spine. | S1, B4 | `[S]` |

### D — Depth fills (autonomous; non-survey chapters currently at 1–2 units)

Order by curricular weight. Each item: produce enough units to reach ≥3 (target 4–5)
in the named chapter.

| ID | Section / chapter | Current | Task | Status |
|---|---|---|---|---|
| D1 | §32-world-history (20 of 26 chapters at 1 unit) | 1.3/ch | Fill the 8–10 highest-leverage chapters to ≥3 (priority: classical-greece, roman-empire, medieval-europe, atlantic-slave-trade, industrial-revolution, world-war-one, world-war-two, decolonization, cold-war, globalization). ~20 units. | `[ ]` |
| D2 | §13-gr-cosmology intros (`01-equivalence`, `03-curvature`, `08-cosmology` at 1 each) | 1/ch | Each is load-bearing; raise to ≥3. Inflation/nucleosynthesis/CMB under cosmology. ~6–8 units. | `[ ]` |
| D3 | §29-psychology: psychometrics chapter (MISSING) + history-of-psych chapter | 0 | Add `13-psychometrics` (test construction, reliability/validity, IQ, personality assessment) and `14-history-of-psychology`. ~4–6 units. | `[ ]` |
| D4 | §20-philosophy: `04-aesthetics`, `07-democracy` at 1 each | 1/ch | Raise to ≥3 each. (Note: the bigger §20 gap is E2, not depth.) | `[ ]` |
| D5 | §03-modern-geometry/02-manifolds (1 unit) vs §48 overlap | 1 | **After S1/B4**: reconcile — either fold into §48 or thicken to ≥3. Don't duplicate. | `[S]` |
| D6 | §41-category-theory (every chapter 1–2 units) | ~2/ch | Thicken the 6 core chapters to ≥3 each (limits, adjunctions, Yoneda, monads, Kan extensions). ~8–10 units. | `[ ]` |
| D7 | §42-mathematical-logic/05-proof-theory (1 unit) | 1 | Raise to ≥3 (ordinal analysis, cut-elimination, consistency strength). ~3 units. | `[ ]` |
| D8 | §02-analysis/02-real-numbers (1), `09-complex` (1) | 1/ch | `02-real-numbers` → ≥3 (construction, completeness, order); `09-complex` resolved by B5. | `[ ]` |
| D9 | §16-inorgchem main-group + f-block + catalysis chapters (absent) | 0 | Add `08-main-group-detail`, `09-lanthanides-actinides`, `10-catalysis`. ~9–12 units. (Audit §16.) | `[ ]` |
| D10 | §15-orgchem advanced (heterocyclic, natural-products, polymers, organocatalysis, photochemistry) | absent | Add 4–5 chapters at 2–3 units each. ~12–15 units. (Audit §15.) | `[ ]` |
| D11 | §17-mol-cell-bio: methods chapter (microscopy/PCR/sequencing/CRISPR) absent + cytoskeleton | 0 | Add `11-methods`, `12-cytoskeleton-motility`, `13-junctions-ecm`. ~8–10 units. | `[ ]` |
| D12 | §18-organismal-bio: plant physiology (entirely absent) + sensory systems | 0 | Add `12-plant-physiology`, `13-sensory-systems`. ~6–8 units. | `[ ]` |
| D13 | §21-number-theory: algebraic-NT + class-field-theory chapters (absent or 1 unit) | 0–1 | Add `17-algebraic-number-theory` (number fields, Dedekind domains, class group), `18-class-field-theory`. ~10–14 units. | `[ ]` |
| D14 | §04-algebraic-geometry advanced (étale, abelian varieties, birational, intersection, deformation) | absent | Add 5 chapters at 2–3 units each. ~12–15 units. (Audit §04.) | `[ ]` |
| D15 | §28-astronomy: ISM/star-formation, high-energy astrophysics, instrumentation | absent | Add 3 chapters at 2–3 units. ~7–9 units. | `[ ]` |
| D16 | §27-earth-science: structural-geology, soil-science, GIS-remote-sensing | absent | Add 3 chapters at 2–3 units. ~7–9 units. | `[ ]` |

### E — New chapter builds (autonomous; standard topics entirely absent)

| ID | Section | Task | Status |
|---|---|---|---|
| E1 | §20-philosophy | Add the four missing core pillars: `11-metaphysics`, `12-philosophy-of-language`, `13-philosophy-of-mind`, `14-political-philosophy`, `15-history-of-philosophy`. ~15–20 units. (This is the single biggest humanities gap.) | `[ ]` |
| E2 | §22-language | Add `05-rhetoric-and-composition-theory`, `06-creative-writing`, `07-world-literatures-theory`. (Linguistics is C4, not here.) ~6–9 units. | `[ ]` |
| E3 | §07-representation-theory | Add `08-finite-groups-depth` (Serre LRFG treatment), `09-vertex-algebras`, `10-d-modules-algebraic-groups`. ~8–10 units. | `[ ]` |
| E4 | §03-modern-geometry (post-S1) | Add `15-algebraic-topology-depth` (fundamental group, homology, cohomology beyond spectral sequences). ~8–10 units. | `[ ]` |
| E5 | §12-quantum | Add `20-standard-model` (electroweak/QCD), `21-many-body-condensed-matter-qm` (overlaps C3 — sequence after). ~6–8 units. | `[ ]` |

### F — New subjects (autonomous ONLY after S-gate approval)

Populated only when S4–S7 are approved. F-items inherit the form of C/D items
once their section exists. **Any task that creates a new section (§51-linguistics,
§52-economics, etc.) must run the full 7-step SETUP in
`docs/plans/MATH_EXPANSION_ORCHESTRATION.md` §2a first** — section dir, `field_map.yaml`
section→field row, `validate_unit.py` `DOMAIN_BY_PREFIX` + `formal_gap_required`
registration, `site/src/lib/sections.ts` entry, `lenses/<field>.yaml`, chapter skeleton,
`build_lenses.py` smoke-test. Skipping the validator-prefix step silently drops new
pure-math-adjacent units to the weaker 5-word gap bar instead of 30.

---

## 3. The no-content-loss safety protocol (read before ANY B-task)

The single invariant: **no unit is ever deleted without a verified replacement path.**
Every B-task (and any merge move in C) follows this recipe:

1. **Inventory.** Before touching anything, list every unit in the affected chapter(s)
   with `ls -1 <chap>/*.md`. Capture the unit IDs.
2. **Decide per unit.** For each: `keep-in-place` | `move (rename target)` |
   `cross-ref-only (content stays, add pointer from new home)`. Default for any
   ambiguous unit is **cross-ref-only** — the safest option.
3. **Checkpoint.** `git add -A && git commit -m "checkpoint before <task-id>: inventory"`
   so the pre-state is recoverable even if a later step errors.
4. **Execute moves as `git mv`** (preserves history). Never `cp` + `rm`.
5. **Redirect inbound references** before deleting any source path:
   `rg -l "<old-unit-id>" content/` and update each referring unit's
   `[NN.NN.NN]` cross-refs and `prerequisites:`/`successors:` fields.
6. **Update `manifests/deps.json`** for any moved/renamed unit id (the JSON is the
   DAG source of truth; the markdown DEPENDENCY_MAP is a regenerated view).
7. **Validate.** `python3 scripts/validate_all.py` must be green. If any unit breaks,
   the cause is almost always an unredirected inbound ref — find it, fix it, re-run.
8. **Commit.** One commit per B-task: `B<n>: <one-line summary>`.
9. **Log.** Append a line to `FINALIZATION_LOG.md` (create it): task id, files moved,
   units affected, commit hash.

**Hard prohibitions:**
- Never `rm` a unit file. If a unit must go away, it goes via `git mv` to an
  `_archive/` subdir first, with a redirect left behind.
- Never edit a unit body during a B-task. B-tasks are pure rename/redirect. Content
  edits happen in C/D/E under the producer brief.
- Never batch unrelated B-tasks in one commit. One task, one commit, recoverable.

**If `validate_all.py` breaks and you can't find the bad ref in 10 minutes:**
`git reset --hard <checkpoint-commit>` and re-plan the task. Do not paper over.

---

## 4. Scope-decision detail (Tyler-only — §S items)

Each entry: the question, the options, my recommendation + rationale, the
cost of the decision. Tyler records the verdict in `OVERVIEW.md` §12 and here.

### S1 — §48 differential-geometry vs §03 modern-geometry
- **Carve (recommended).** §48 becomes **Classical & Riemannian Geometry** (manifolds,
  Lie groups as Diff-G objects, fibre bundles, Riemannian metric/connection/curvature,
  geodesics, comparison theorems — the do Carmo/Lee/Petersen track). §03 keeps its
  243 units as **Modern Geometry / Geometric Topology / Gauge** (spin, characteristic
  classes, K-theory, gauge theory, CFT, TQFT, homotopy, spectral sequences).
  *Why:* gives Riemannian geometry the home it currently lacks; respects that §03's
  mass is genuinely the math-physics track; merge would swamp §03 and bury Riemannian.
  *Cost:* ~12 new Riemannian units (C6) + a clean renumber of §48's 4 chapters.
- **Merge.** Fold §48 into §03. *Rejected:* doubles §03 to 313 units, no Riemannian
  home emerges, navigation worse.

### S2 — §08 vs §11 stat-mech
- **Keep both (recommended).** §08 is mathematical-physics-flavored (statistical field
  theory, lattice gauge, exactly-solved, RG); §11 is physics-flavored (thermodynamics,
  kinetic theory, ensembles, partition functions). Distinct reader profiles.
  *Action:* add a one-line cross-reference in each section's README pointing at the
  other. No content moves.

### S3 — §02.09-complex stub
- **Migrate (recommended).** §02-analysis/09-complex has 1 unit; §06-riemann-surfaces/
  01-complex-analysis has 32. The stub is a leftover. Move the 1 unit into §06.01 as a
  new id (or merge content if it covers something §06.01 lacks), redirect inbound refs,
  delete §02.09.

### S4 — Linguistics section
- **Yes (recommended).** Scientific linguistics is a standard humanities discipline,
  entirely absent (§22 is ELA pedagogy; §31.05 is anthropological). Create `51-linguistics`
  (verify prefix is free — §50 is the max). 7 chapters, ~20–30 units. *Why now:* clear
  gap, no overlap risk, content can cross-ref the 3 existing §31.05 units.

### S5 — Economics section
- **Yes (recommended).** §23-world/01-economics is 30 essay-style units — readings, not
  a tiered micro/macro/econometrics curriculum. Standard social-science subject.
  Create `52-economics` (or expand §23.01 into tiered chapters — Tyler's call).
  *Why:* the structured track is a real absence; essays don't satisfy the findability
  criterion (§0.1).

### S6 — Condensed-matter physics
- **Yes (recommended).** Standard physics graduate track; content scattered across
  §16-inorgchem/07 (chemistry-flavored solid state) and §12-quantum many-body. Add as
  a chapter under §12-quantum (`12.20-condensed-matter`) rather than a new section —
  keeps it in the physics branch.

### S7 — Law / Political Science / Business / Neuroscience / Materials / Astrophysics
- **Defer to v2 (recommended).** Law/Business are professional-school tracks, outside
  the "science + humanities foundations" remit. Neuroscience overlaps §29-psychology +
  §17.09-cellular-neuroscience — a cross-disciplinary binder, not a new section.
  Materials and Astrophysics are better served by deepening §16-inorgchem/§28-astronomy
  respectively. *Record as explicit scope exclusions in §4.3.*

### S8 — Further Tier B spines
- **No (recommended).** Spines 8–12 close the applied-math set. No further Tier B
  spines; remaining math edges (étale cohomology, higher category theory, etc.) are
  E-items inside existing sections, not new spines.

### 4.3 — Documented scope exclusions (v1 does NOT carry these)
Populated as S-decisions land. Entries: subject · one-line reason · date.

---

## 5. Sequencing (the order to actually do the work)

```
Phase 0  Tyler records S1–S8 verdicts.                                    [gate]
   │
Phase 1  B-tasks that don't depend on S: B1, B2, B3, B6, B7-sweep.        [autonomous]
   │     (slug-only normalization — pure rename, no content risk under §3)
   │
Phase 2  B-tasks gated by S: B4 (§48, needs S1), B5 (§02.09, needs S3).   [autonomous]
   │
Phase 3  C-tasks (re-homing): C1 (§01 algebra) first — highest math       [autonomous]
   │     leverage; then C2 (optics), C6 (Riemannian, needs S1+B4),
   │     C3/C4/C5 (need S6/S4/S5).
   │
Phase 4  D-tasks (depth fills) and E-tasks (new chapters) in parallel.   [autonomous]
   │     Resume the BACKLOG loop pattern: audit-book → produce → integrate
   │     → validate → build_lenses → commit.
   │
Phase 5  F-tasks (new subjects) once S4/S5 approved and C4/C5 homes       [autonomous]
   │     exist. Linguistics + Economics sections built out.
   │
Phase 6  Final verification: re-run §0 completion criteria 1–6.           [gate]
```

**Parallelism rule.** Within a phase, tasks touching disjoint sections run in parallel
(producer agents write disjoint chapter dirs — same discipline as the v0.5 batches).
Integration stays single-threaded (one writer to `deps.json`, `CONCEPT_CATALOG.md`,
`sections.ts`, `field_map.yaml` per wave).

---

## 6. The loop (what an agent does each session)

```
1. Read §2 status table. Find the FIRST `[ ]` item in phase order (S-items
   excepted — those wait on Tyler).
2. If it's a B-task: follow §3 exactly. Commit. Update §2 status. Loop.
3. If it's a C/D/E/F-task: follow docs/briefs/{AUDIT,PRODUCER,DEEPEN,
   EXERCISE_PACK}_BRIEF.md + docs/plans/MATH_EXPANSION_ORCHESTRATION.md §3
   (the integration recipe). Validate 27/27. build_lenses. Commit. Update §2.
4. After every 3 tasks: run §0 completion-criteria sweep; note progress.
5. Stop at: budget cap · a `[S]` blocker · repeated integration failure.
   Write a checkpoint: clean working tree, §2 updated, one-line log entry.
```

**Resume next session** = re-read §2, pick up at first `[ ]`. The status table is the
conversation between sessions.

### 6.1 Sweep scripts (read-only; run anytime to verify state)

```bash
# Slug-only chapters remaining (B7)
python3 - <<'PY'
import os,re,collections
for sec in sorted(os.listdir("content")):
    p=f"content/{sec}"; 
    if not os.path.isdir(p): continue
    chs=sorted(d for d in os.listdir(p) if os.path.isdir(f"{p}/{d}"))
    slug=[c for c in chs if not re.match(r'^\d{2}-',c)]
    if slug: print(f"{sec}: {slug}")
PY

# Duplicate chapter numbers remaining
python3 - <<'PY'
import os,re,collections
for sec in sorted(os.listdir("content")):
    p=f"content/{sec}"
    if not os.path.isdir(p): continue
    nums=collections.Counter()
    for d in os.listdir(p):
        m=re.match(r'^(\d{2})-',d)
        if m and os.path.isdir(f"{p}/{d}"): nums[m.group(1)]+=1
    dups={k:v for k,v in nums.items() if v>1}
    if dups: print(f"{sec}: {dups}")
PY
```

---

## 7. Estimated scope

| Bucket | New units | Wall-time (autonomous, 1 agent) | Notes |
|---|---|---|---|
| B (structural) | 0 | ~3–5 hours | pure `git mv` + ref redirects |
| C (re-homing) | ~50–80 | ~3–4 weeks intermittent | §01 algebra + Riemannian dominate |
| D (depth) | ~110–140 | ~5–7 weeks | spread across 16 chapters |
| E (new chapters) | ~45–60 | ~3 weeks | §20 philosophy dominates |
| F (new subjects, if S approves) | ~50–70 | ~4–5 weeks | Linguistics + Economics |
| **Total to "done"** | **~255–350** | **~4–6 months at 50% capacity** | doubles to ~2,650–2,750 units |

This is roughly the same scale as one Tier-A spine + one Tier-B spine combined. The
existing pipeline has proven it can do this — the constraint is decision bandwidth
(Tyson S-items) and the discipline of §3, not production capacity.

---

## 8. Completion log (append one line per closed task)

- **2026-06-17 — Wave 3 (session 1, parallel agents).** Four more units, parallel-pattern with collision-proofing (catalog stubs pre-added by dispatcher; agents read-only on catalog). `48.01.02` Riemannian comparison theorems (Cartan-Hadamard, Bonnet-Myers, Bishop-Gromov — C6 depth, 27/27 first pass); `20.13.01` philosophy of mind (27/27 after paragraph-split + "obvious"→reword); `20.14.01` political philosophy (Rawls/Nozick/authority — 27/27 after "non-trivial"→reword); `20.15.01` history of philosophy (ancient→continental survey — 27/27 after "clearly"→reword + word-count floor). **E1 COMPLETE: all five §20 philosophy pillars shipped** (metaphysics, language, mind, political, history). Corpus 2,403→2,407; validate_all 64,883/64,883. The §20 philosophy gap (audit's biggest humanities hole) is now structurally closed.
- **2026-06-17 — Wave 2 (session 1, parallel agents).** Four more anchor units shipped via the proven parallel-producer pattern (4 general agents, disjoint paths, serial integration). `01.05.01` commutative-algebra (27/27 first pass), `01.06.01` homological-algebra (27/27 after 3 mechanical fixes: YAML backslash escaping, "non-trivial"→reworded, word-count floor), `20.12.01` philosophy-of-language (27/27 first pass, Frege/Russell/Wittgenstein/Kripke/Austin, humanities addendum satisfied), `29.13.01` psychometrics (27/27 after "trivially"→reworded; the audit's explicit MISSING chapter — D3). §01-foundations algebra home now has all four anchor units (rings-modules, fields-Galois, commutative, homological) — the #1 math findability gap is structurally closed; remaining work there is depth fills. Corpus 2,399→2,403; validate_all 64,775/64,775; pure-math lens 1,508→1,510. Per-unit catalog stubs + deps.json integrated. Each agent produced ~3,600–6,000 words at the peer caliber; the parallel pattern validated for queue drainage.
- **2026-06-17 — Wave 1 (session 1).** Scope decisions S1–S8 LOCKED (OVERVIEW §12). All scaffolding landed: §01 algebra home chapters (03–06), §48/01-riemannian-geometry, §12/20-condensed-matter, §20 philosophy chapters 11–15, §51-linguistics (7-chapter skeleton + `validate_unit` prefix 51 + `sections.ts` `linguistics` key + `field_map` row), §52-economics (6-chapter skeleton + prefix 52, sharing the existing `economics` section key). B3 done (`03.15-morse-homology`→`15-morse-homology`); C2 done (`08-advanced-electrodynamics`→`08-optics-and-advanced-electrodynamics`). B1/B2 dropped (slug-only dirs are cosmetic; §05 collisions make a clean rename a C-task not a B-task). B6/B7 sweep clean (June session already fixed every duplicate/empty). **Seven foundational units shipped, all 27/27, integrated:** `01.03.01` rings-modules, `01.04.01` fields-Galois, `48.01.01` Riemannian-geometry, `20.11.01` metaphysics, `51.01.01` phonetics (linguistics anchor), `52.01.01` microeconomics (economics anchor), `12.20.01` condensed-matter. Corpus 2,392→2,399; validate_all 64,667/64,667; pure-math lens 1,505→1,508; physics 237→238. Each new home now has a findable anchor unit; depth fills (D-items) + remaining C/E-items queued for wave 2+.
- _2026-06-17 — Plan authored against live tree. Mechanical BLOCKERs (audit §"Cross-cutting") confirmed already fixed in the June cleanup session. S-items S1–S8 await Tyler verdicts._

---

*This document supersedes the "discretionary curation" framing of BACKLOG.md "NEXT
ACTIONS" and turns it into an executable, status-tracked program. When §0 criteria 1–6
are all green, the curriculum is final-for-v1; archive this file and update OVERVIEW §13.*
