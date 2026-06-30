# Babel Bible — Finalization Plan (the path to "done")

The successor to `BACKLOG.md`. The autonomous Fast-Track + Tier-C production campaign
is complete (2,392 units at session start; **2,471 after the 2026-06-17 finalization
session that shipped +79 units**). What remains is **discretionary depth** — closing
the §0 completion-criteria gaps where thin chapters and a handful of standard topics
still fall short — not a greenfield production queue.

This document is self-resuming: a fresh agent given this file + the briefs under
`docs/briefs/` + the safety protocol in §3 can drive the program top-down. The
status table in §2 is the source of truth; update it as work lands.

**Status:** PLAN (2026-06-17). Authored against the **live** content tree, not the
2026-06-15 audit. The audit (`COMPREHENSIVE_AUDIT.md`) is now stale on mechanical
BLOCKERs — the June cleanup session already deleted §25-logic, fixed every duplicate
chapter number, emptied the empty dirs, and resolved the §01/§11/§19 collisions. Do
**not** re-plan those; they are done.

## Live status & roadmap (2026-06-27 audit — authoritative; supersedes the stale §2 table)

Audited against the live tree. This section is the source of truth; §2 below is
retained for history and is superseded where it conflicts.

**Headline numbers:** 52 sections · 557 chapters · **2,592 units** · validator
**69,878/69,878 green** · site build green (post the 2026-06-27 math-rendering
fix: prose raw-math 776 → 0 visible). §51-linguistics (7/7) and §52-economics
(6/6) structurally complete. S1–S8 locked.

**Completion-criteria scorecard (§0):**
1. Findability — **mostly** (homes anchored; depth is the gap).
2. Structural cleanliness — **1 cosmetic dir-number mismatch** (`08-classification` holds unit `07.04.01`); §05/§08 slug-only dirs are cosmetic.
3. Tier-2 depth floor — **182 non-survey chapters still at 1–2 units** ← the bulk of remaining work.
4. Standard-subject coverage — **done** (§51/§52 built).
5. Validator + build — **green**.
6. Scope decisions recorded — **done**.

**The gate (Tyler, not autonomous):** ~29,060 `TODO_REF` citation placeholders.
Resolution requires acquiring the ~13 sources in `docs/catalogs/NEED_TO_SOURCE.md`
— the single biggest perceived-quality lever, and the only item that cannot
proceed without Tyler.

### Ordered completion roadmap

**Phase 0 — Tyler gate.** Acquire sources (`NEED_TO_SOURCE.md`). Unblocks Phase 3.

**Phase 1 — Structural cleanup (autonomous, ~1 hr, zero content risk).**
- P1a: rename `content/07-representation-theory/08-classification` → `05-classification` (its unit `07.04.01` keeps its ID — load-bearing for inbound refs; `04` is taken by `04-symmetric`, `05` is the free slot, so this clears the `08` clash with `08-finite-groups-depth`). Pure dir rename; frontmatter/unit-id unchanged; zero reader impact.
- P1b: confirm no orphan dirs; confirm every unit's frontmatter `chapter` has a matching dir (load-bearing for `build_lenses`).
- (Optional, cosmetic) normalize §05/§08 slug-only dirs — declined by default per B1/B2.

**Phase 2 — Depth fills (autonomous — the LONG POLE, ~300–400 new units).**
Raise the 182 thin non-survey chapters to ≥3 (target 4–5). Curricular-weight
order, each wave disjoint across sections (parallel-producer pattern, serial
integration — the proven v0.5 cadence):

1. **Math spines** — §01-foundations (rings/fields/commutative/homological
   anchors exist → thicken), §41-category-theory, §04-AG advanced
   (étale/abelian/birational/intersection/deformation), §03 alg-top depth,
   §21-ANT + class-field-theory, §07-rep-theory, §02-analysis thin,
   §48-differential-geometry depth.
2. **Sciences** — §13-GR intros (equivalence/curvature/cosmology),
   §15-orgchem advanced, §16-inorgchem main-group/f-block/catalysis,
   §17-mol-cell-bio methods/cytoskeleton, §18 organismal plant/sensory,
   §12-quantum Standard-Model depth, §28-astronomy, §27-earth-science,
   §19-eco-evo-bio tail.
3. **Humanities/social** — §32-world-history (20 thin chapters, biggest single
   block), §20-philosophy depth, §29-psychology, §30-sociology, §34-music-art,
   §51-linguistics depth, §52-economics depth, §22-language, §31-anthropology,
   §33-history-of-science, §35-health, §36-media.
4. **Remaining thin chapters** in section-prefix order (§00, §06, §08–§11, §14,
   §23, §24, §37–§40, §42–§47, §49).

Each unit: produce per `docs/briefs/PRODUCER_BRIEF.md` + `docs/specs/UNIT_SPEC.md`
→ validate 27/27 (`scripts/validate_unit.py`) → integrate (`CONCEPT_CATALOG.md`
stub + `manifests/deps.json`) → `build_lenses` smoke-test.

**Phase 3 — Citation resolution (autonomous, AFTER Phase 0).** Replace
`TODO_REF` placeholders with sourced citations against the acquired set.

**Phase 4 — Final verification.** Re-run §0 criteria 1–6; declare v1 final;
archive this file; update `OVERVIEW.md` §13.

**Cadence:** ~4–6 validated units per session wave. Phase 2 is many sessions
over months — exactly as §7 estimates. Loop: read this roadmap → pick the next
disjoint slice → produce → validate → integrate → checkpoint → resume.

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

- **2026-06-30 — Phase 2 wave 23 (4-unit HIGH-LEVERAGE wave).** `27.01.04` Mantle plumes, hot spots, and large igneous provinces (earth-science/plate-tectonics) — Dana 1890 → Wilson 1963 (the Hawaiian hot-spot hypothesis) → Morgan 1971 Nature 230:42 ("Convection Plumes in the Lower Mantle") → Richards-Duncan-Ball 1989 + Campbell-Griffiths 1990 plume-head/tail model → Courtillot 2003 Rev. Geophys. 41:1 (5-criteria test) → Foulger-Anderson critique. Deccan Traps (~66 Ma, ~1.5M km³ of lava, K-Pg correlation) as the worked example. `28.01.04` The Nice model: solar-system dynamical instability, giant-planet migration, and the LHB (astronomy/solar-system) — Fernández-Ip 1984 → Malhotra 1993 (Pluto orbit) → the three 2005 Nature 435 papers (Tsiganis 459, Gomes 466 LHB trigger, Morbidelli 462 Trojan capture) → Walsh 2011 Nature 475:206 (Grand Tack) → Morbidelli 2018. The lunar impact-melt spike (Tera-Papanastassiou-Wasserburg 1974) as canonical evidence. `18.08.04` The RAAS: renin-angiotensin-aldosterone system, hypertension, and ACE-inhibitor therapy (organismal-bio/renal) — Tigerstedt-Bergman 1898 → Goldblatt 1934 (renal hypertension) → Braun-Menéndez 1940 → Ferreira 1965 jararaca venom → Ondetti-Rubin-Cushman 1977 Science 196:441 (captopril, first oral ACE inhibitor) → Laragh 1973 (volume vs vasoconstriction theory) → McMurray 2014 NEJM PARADIGM-HF (sacubitril/valsartan). SARS-CoV-2 binds ACE2 for cell entry; ACEi/ARBs not harmful in COVID. `35.04.04` The obesity epidemic: leptin signaling, thrifty-gene hypothesis, and Set-Point theory (health-medicine/nutrition) — Neel 1962 (thrifty gene) → Coleman 1973 (parabiosis) → Zhang-Friedman 1994 Nature 372:425 (leptin positional cloning) → Flegal 1998-2010 NCHS obesity data → Speakman 2008 (predation-release critique) → Wilding-Batterham 2021 NEJM (semaglutide, ~15% loss) → Jastreboff 2022 NEJM (tirzepatide, ~21% loss). Pima Indians as the worked example. Set-point convergence theorem $W(t) = W^* + (W(0)-W^*)\exp(-(\alpha+\beta)t/\rho)$ derived. All four 27/27 first-pass. Two producers (mantle plumes, Nice model) noted the brief's per-domain evidence heading was mis-specified and used validator-compatible alternatives (Key result inside Key model section). Corpus 2,588 → **2,592**; validate_all 69,770 → **69,878**; lenses clean; site rebuilt (2,663 pages, 0 skipped) + deployed (version `a3d56201`, retired wave 22's `ed91144d`).

- **2026-06-30 — Phase 2 wave 22 (4-unit HIGH-LEVERAGE wave).** `18.06.04` The gut-brain axis (organismal-bio/digestive) — Bayliss-Starling 1902 → Langley 1921 ENS → Gershon 1998 "second brain" → Cryan-Dinan 2012 → Bravo 2011 PNAS (Lactobacillus → GABA receptors) → Hsiao 2013 Cell (B. fragilis + ASD model) → Sampson 2016 Cell (PD fecal transplant → motor symptoms). The 90% afferent vagus (vs the misleading "rest-and-digest" framing); microbiome-derived SCFAs, tryptophan, secondary bile acids. `29.04.05` Motor learning and the cerebellum (psychology/learning-memory) — Holmes 1917 → Eccles-Ito-Szentágothai 1967 → Marr 1969 / Albus 1971 (parallel-fiber-Purkinje supervised learning) → Ito 1982 LTD discovery → Gilbert-Thach 1977 complex-spike error signal → Lisberger-Miles 1980s VOR adaptation paradigm → McCormick-Thompson 1984 eyeblink conditioning. Marr-Albus perceptron convergence theorem (Novikoff-style bound) in Full proof set. `16.10.02` Electrocatalysis and water splitting (inorgchem/catalysis) — Tafel 1905 → Trasatti 1972 Sabatier-volcano for HER → Nørskov 2004-2005 DFT-based rational catalyst design (computational hydrogen electrode) → Nocera 2008+ CoPi + 2011 Science "artificial leaf" → Trotochaud-Boettcher 2012 NiFe oxyhydroxide (Fe as the active site). Tafel slope and Sabatier volcano derived from Butler-Volmer microkinetics. `34.05.02` Cinéma vérité and direct cinema (music-art/film-photography) — Rouch-Morin 1961 Chronique d'un été (French cinéma vérité: filmmaker on-screen, participatory) vs Drew 1960 Primary + Wiseman + Maysles + Pennebaker (North American direct cinema: fly-on-the-wall, observational); Brault 1958 Les Raquetteurs as Quebecois pioneers; Nichols 1991 (Representing Reality) documentary-modes taxonomy; the conflation-as-synonyms critiqued as obscuring real philosophical differences. All four 27/27 first-pass. One producer (motor learning) corrected two citation-venue errors in the brief (Ito 1982 was J. Physiol. not Nature; Gilbert-Thach 1977 was Brain Research not Nature). Corpus 2,584 → **2,588**; validate_all 69,662 → **69,770**; lenses clean; site rebuilt (2,659 pages, 0 skipped) + deployed (version `ed91144d`, retired wave 21's `0c173e95`).

- **2026-06-30 — Phase 2 wave 21 (4-unit HIGH-LEVERAGE wave).** `35.07.04` Cytochrome P450 pharmacogenomics (health-medicine/pharmacology) — Omura-Sato 1964 → Estabrook 1963 (P450-CO spectrum) → Meyer-Zanger 1997 (CYP2D6 phenotype-genotype) → Paine 2006 (gut-wall CYP3A4 first-pass) → CPIC 2014+ clinical guidelines; the 2007 codeine-CYP2D6 ultra-rapid-metabolizer pediatric death as canonical case; Michaelis-Menten competitive vs mechanism-based DDI formulas derived. `29.05.04` Working memory: Baddeley-Hitch model (psychology/cognition-intelligence) — Atkinson-Shiffrin 1968 multi-store → Baddeley-Hitch 1974 fractionation (phonological loop + visuospatial sketchpad + central executive; dual-task dissociation as empirical foundation) → Baddeley 2000 (episodic buffer) → Cowan 2001 (4±1 chunks under suppression) → Engle-Kane 2004 (executive attention as the WM-Gf link); Fuster-Alexander 1971 + Funahashi 1989 DLPFC persistent activity as neural substrate. `20.03.04` The anthropic principle and cosmic fine-tuning (philosophy/phil-of-physics) — Carter 1974 WAP/SAP → Dicke 1961 → Carr-Rees 1979 → Barrow-Tipler 1986 → Weinberg 1987 anthropic Λ prediction (cosmological-constant problem: QFT predicts 10^120 larger than observed) → Susskind 2005 string landscape → Bostrom 2002 observation-selection effects → Page 2007+ measure problem; Doomsday, Sleeping Beauty, Presumptuous Philosopher as related self-locating puzzles. `28.08.02` Pulsars and neutron stars (astronomy/high-energy-astrophysics) — Landau 1932 → Baade-Zwicky 1934 (neutron stars form in supernovae) → Tolman-Oppenheimer-Volkoff 1939 (GR hydrostatic equilibrium, TOV limit ~2-2.3 M☉) → Hewish-Bell 1968 (Bell Burnell's discovery; Hewish 1974 Nobel) → Gold 1968 rotating-beam model → Hulse-Taylor 1975 PSR B1913+16 binary pulsar (1993 Nobel; first indirect gravitational-wave detection) → Kouveliotou 1998 magnetar; magnetic-dipole spin-down formula L_sd = (32π⁴ B² R⁶ sin²α)/(3 c³ P⁴) derived; Peters 1964 binary-orbital-decay derivation in Full proof set. All four 27/27 first-pass. One producer (pulsars) caught and corrected a fabricated author name (replaced with proper STARE2/CHIME 2020 attribution) and flagged a brief typo in the magnetic-dipole formula (sin²α in numerator, not denominator); another (working memory) needed a frontmatter fix for a missing `tiers_present` field. Corpus 2,580 → **2,584**; validate_all 69,554 → **69,662**; lenses clean; site rebuilt (2,655 pages, 0 skipped) + deployed (version `0c173e95`, retired wave 20's `bc574240`).

- **2026-06-30 — Phase 2 wave 20 (4-unit HIGH-LEVERAGE wave).** `20.01.04` Social epistemology (philosophy/epistemology) — Hume-Reid testimony debate → Wittgenstein 1969 → Goldman 1999 → Coady 1992 → Sosa 1991 virtue epistemology → Lackey 2008 dualism → Fricker 2007 epistemic injustice → Nguyen 2020 echo chambers; Tarasoff 1976 worked example. `29.09.05` Eating disorders (psychology/psychological-disorders) — Gull-Lasègue 1873 → Keys 1950 Minnesota Starvation Experiment (the empirical bio-psychosocial foundation) → Russell 1979 (BN as distinct) → Fairburn 2008 CBT-E → Lock-Le Grange 2012 Maudsley FBT → DSM-5 2013; AN has the highest mortality of any psychiatric disorder (~5-6%). `35.03.05` Neurodegenerative disease (health-medicine/chronic-disease) — Alzheimer 1907 → Prusiner 1982 prions → Spillantini 1997 α-synuclein → Hardy-Waterson 1998 amyloid cascade → Braak-Braak 1991 / Braak 2003 staging → van Dyck 2023 lecanemab (first disease-modifying Alzheimer's drug, 27% slowing of decline). `28.07.02` Molecular clouds and protostellar evolution (astronomy/ism-star-formation) — Jeans 1902 gravitational-instability criterion derived from linear perturbation of self-gravitating hydrodynamics → Larson 1969 / Shu 1977 inside-out collapse → Hayashi 1961 + Henyey 1955 PMS tracks → Adams-Lada-Shu 1987 + Andre 1993 Class 0/I/II/III protostellar sequence → McKee-Tan 2003 turbulent core → ALMA HL Tau 2015. All four 27/27 first-pass (minor mechanical fixes only). One producer honestly noted `glm-5.2` as the producer (not opus-4-7); another caught a slight exercise-class-name typo and fixed it. Corpus 2,576 → **2,580**; validate_all 69,446 → **69,554**; lenses clean; site rebuilt (2,651 pages, 0 skipped) + deployed (version `bc574240`, retired wave 19's `00ee9819`).

- **2026-06-30 — Phase 2 wave 19 (4-unit HIGH-LEVERAGE wave).** 4 more depth units across 4 disjoint HIGH-LEVERAGE sections, all 27/27 first-pass (one producer retried after an empty initial dispatch and shipped clean). `18.07.04` Thyroid hormones and metabolic regulation: HPT axis, iodine biochemistry, and autoimmune thyroid disease (organismal-bio/endocrine) — Kendall 1915 → Harrington-Barger 1927 → Gross-Pitt-Rivers 1952 (T3) → Adams-Purves 1956 (TSI) → Bianco-Kim 2006 deiodinases; HPT set-point derivation; Wolff-Chaikoff effect and Jod-Basedow phenomenon. `27.03.04` Megathrust earthquakes and the seismic cycle: subduction-zone seismicity, Cascadia 1700, and the 2011 Tōhoku event (earth-science/earthquakes-volcanoes) — Reid 1910 elastic-rebound → Kanamori 1977 moment magnitude Mw = (2/3)·log10(M0) - 10.7 → Scholz 1998 rate-and-state friction → Satake-Atwater 2003 (Cascadia 1700 reconstruction from Japanese orphan-tsunami records + Pacific-NW ghost forests) → Simons-Minson-Sladen 2011; Mw~9.5 single-event ceiling derived from M0 = μAD. `16.07.05` Perovskite solar cells: ABX3 lead-halide crystal chemistry, defect tolerance, and the photovoltaic revolution (inorgchem/solid-state) — Kojima-Miyasaka 2009 (3.8% DSSC) → Lee-Teuscher-Snaith 2012 (10.9%) → Burschka-Grätzel 2013 (14% solution-processed) → Stranks 2013 (long diffusion lengths) → NREL 2024 (26.1% single / 33.9% tandem); Shockley-Queisser limit derived for perovskite tandems. `34.04.03` Italian Renaissance art: from Giotto to Michelangelo, c. 1300-1520 (music-art/art-history) — Giotto Arena Chapel c.1305 → Brunelleschi perspective c.1415 → Masaccio Trinity c.1427 → Alberti De pictura 1435 → High Renaissance (Leonardo/Michelangelo/Raphael c.1490-1520) → Vasari Lives 1550/1568 (founding art history); Burckhardt 1860, Panofsky 1927 ("Perspective as Symbolic Form"), Baxandall 1972 in Master interpretive debates. Two producers caught per-domain evidence-heading nuances (`Key mechanism` for both biology and chemistry); one caught a slight filename mismatch in the dispatched peer-file path and read the correct file without issue. Corpus 2,572 → **2,576**; validate_all 69,338 → **69,446**; lenses clean; site rebuilt (2,647 pages, 0 skipped) + deployed (version `00ee9819`, retired wave 18's `929f27f7`) — commit `00ee9819`.

- **2026-06-30 — Phase 2 wave 18 (DEPTH_TARGETS triage adopted; first 4-unit wave).** First wave governed by the new `plans/expansion/DEPTH_TARGETS.md` triage: of 264 thin chapters, 88 are HIGH-LEVERAGE (med-school organ systems, clinical psych, core earth/astro, arts canon, clinical medicine, core inorganic), 94 MED, 82 LOW (skip). The "fill everything" approach is retired; future waves target only HIGH first, then selective MED. Wave 18 covered 4 disjoint HIGH-LEVERAGE sections: `18.03.04` Control of ventilation — preBötC rhythm kernel (Smith-Feldman 1987; Paton 1996), RTN/raphe central chemoreceptors (~80% of hypercapnic response; Guyenet-Abbott 2009), carotid body glomus cells (primary hypoxic sensor), clinical patterns (Cheyne-Stokes, Ondine's curse / PHOX2B / Amiel-Tison 2003). `35.02.05` HIV/AIDS — Ho-Shaw-Perelson 1995-96 viral dynamics (10¹⁰ virions/day; productively-infected-cell half-life ~1 day) derived from first principles; first-line ART (INSTI + 2 NRTIs); Owen 2006 vegetative-state fMRI; Berlin patient / CCR5-Δ32 (Hütter 2009); Cohen 2011 HPTN 052 (U=U). `34.02.04` From Gregorian chant to Notre Dame polyphony — Charlemagne Admonitio 789 → Musica Enchiriadis c.870 → Guido d'Arezzo staff c.1025 → Leonin/Perotin Magnus Liber Organi (c.1170-1230; Perotin's "Viderunt omnes" 1198 as earliest known 4-voice composition) → Franco of Cologne mensural notation c.1280 → Ars Nova (Vitry, Machaut c.1320+). `20.06.04` The neuroscience of consciousness — Crick-Koch 1990 NCC research program; binocular rivalry (Logothetis-Schall 1989 in macaque MT); GWT (Dehaene-Naccache 2001) and IIT (Tononi 2004) as testable theories; Owen 2006 fMRI (~17% of clinically-vegetative patients show covert awareness); Casali 2013 PCI collapse under anesthesia. All four 27/27 first-pass; two producers correctly handled validator per-domain evidence-keyword mismatches (Core model for biology, Key argument for philosophy); one honestly flagged that the dispatched peer `35.08.02` is actually a stub and omitted it from Connections per playbook §10.3. Corpus 2,568 → **2,572**; validate_all 69,230 → **69,338**; lenses clean; site rebuilt (2,643 pages, 0 skipped) + deployed (version `929f27f7`, retired wave 17's `4a8cda50`) — commit `929f27f7`.

- **2026-06-30 — Phase 2 wave 17 (parallel-pattern sustained; psych / eco-evo / earth-science disjoint slice).** 3 more depth units across 3 disjoint sections, all 27/27 first-pass (each independently re-verified pre-integration), all dedup-gate cleared. `29.03.04` Hubel and Wiesel's visual cortex architecture: orientation columns, ocular dominance, and hypercolumns (§29-psychology/03-sensation-perception; the 1958-1981 Hubel-Wiesel collaboration / 1981 Nobel that mapped V1 columnar architecture — simple/complex/hypercomplex hierarchy, orientation columns, ocular-dominance stripes, the 1 mm² hypercolumn tiling, critical-period plasticity; modern Lien-Scanziani 2013 recurrent-amplification revision). `19.06.04` Founder-effect and peripatric speciation: Mayr, genetic drift, and the founder-flush model (§19-eco-evo-bio/06-speciation; Mayr 1954/1963 "genetic revolution" hypothesis; Hawaiian Drosophila empirical anchor; Barton-Charlesworth 1984 → Gavrilets-Hastings 1996 → Coyne-Orr 2004 modern-synthesis rejection of drift-only, retention of the broader peripatric phenomenon). `27.04.04` El Nino-Southern Oscillation (ENSO): Bjerknes feedback, Walker circulation, and global teleconnections (§27-earth-science/04-atmosphere-weather; Walker 1923-24 SO → Bjerknes 1966/1969 coupled feedback → Wyrtki 1975 heat-content buildup → Cane-Zebiak 1985 first forecast → Suarez-Schopf 1988 / Battisti-Hirst 1989 delayed oscillator → Jin 1997 recharge oscillator → McPhaden 1998 TOGA-TAO 1997-98 benchmark event). The dedup gate again cleared only ~3 clean niches from a 22-candidate batch (B1+B2); §19-eco-evo's Fisher/Hamilton/Wright/Hardy-Weinberg candidates were all flagged against already-shipped units — confirming the corpus's body-density constraint. All three producers used validator-permitted domain-specific Intermediate-evidence headings (`## Key model` for psychology, `## Key result` for biology, `## Key theorem` for earth-science) — the validator's `INTERMEDIATE_EVIDENCE_KEYWORDS` map has per-domain keyword lists that producers must match. Corpus 2,565 → **2,568**; validate_all 69,149 → **69,230**; lenses clean; site rebuilt (2,639 pages, 0 skipped) + deployed (version `4a8cda50`, retired wave 16's `85f1ae74`) — commit `4a8cda50`.

- **2026-06-29 — Phase 2 wave 16 (parallel-pattern sustained; physiology / philosophy / astronomy disjoint slice).** 3 more depth units across 3 disjoint sections, all 27/27 first-pass (each independently re-verified pre-integration), all dedup-gate cleared. `18.02.05` Cardiac gap junctions: connexin architecture, intercellular coupling, and arrhythmia (§18-organismal-bio/02-cardiovascular; hexameric connexon channels Cx43/Cx40/Cx45 propagate the action potential through the myocardial syncytium; Cx43 remodeling post-MI creates the anisotropic substrate for re-entrant VT — Revel-Karnovsky 1967 → Loewenstein 1966 → Beyer 1987 → Spach-Dolber 1986 → Gutstein 2001 conditional KO → Roell 2007 gene-therapy proof-of-concept). `20.15.03` Husserl's phenomenology: intentionality, the reduction, and transcendental consciousness (§20-philosophy/15-history-of-philosophy; three load-bearing concepts — intentionality / epoché / transcendental ego — originator chain Brentano 1874 → Husserl 1900-01 LI → 1913 Ideas I → 1931 CM → 1936 Crisis; Master-tier traces the transformations: Heidegger 1927 hermeneutic, Sartre 1936/43 nothingness, Merleau-Ponty 1945 lived body, Derrida 1967 deconstruction, plus the Follesdo-Zahavi noema debate). `28.02.05` Stellar nucleosynthesis: B²FH process network, nuclear burning stages, and the origin of the elements (§28-astronomy/02-stars; eight-stage framework H→He→C→Ne→O→Si→Fe with Coulomb-barrier ignition-T scaling; B²FH 1957 seven-process organization; s-process in AGB stars, r-process in neutron-star mergers confirmed by GW170817 — Bethe 1939 → Salpeter 1952 / Hoyle 1954 triple-α → B²FH 1957 / Cameron 1957 → Wallerstein 1997 → Kasen 2017). The dedup gate again proved load-bearing: a 15-candidate batch surfaced only ~5 clean niches; the HPA/stress topic was withdrawn after observing that the `29.11.03` stub ("Stress and health psychology: allostatic load") would body-collide at the catalog level even though its title scored <0.20 — a textbook case of the body-density warning. One producer (gap junctions) honestly flagged that the dispatched peer `17.09.03` synaptic transmission is a stub and omitted it from Connections, using 4 verified-shipped peers instead; the Husserl producer used the philosophy-domain `## Key argument [Intermediate+]` heading variant. Corpus 2,562 → **2,565**; validate_all 69,068 → **69,149**; lenses clean; site rebuilt (2,636 pages, 0 skipped) + deployed (version `85f1ae74`, retired wave 15's `3fc7d7bb`) — commit `85f1ae74`.

- **2026-06-29 — Phase 2 wave 15 (parallel-pattern sustained; chemistry/bio/history disjoint slice).** 3 more depth units across 3 disjoint sections, all 27/27 first-pass (each independently re-verified pre-integration), all dedup-gate cleared. `15.07.06` Baeyer-Villiger oxidation: Criegee intermediate, migratory aptitude, lactone regiochemistry (§15-orgchem/07-carbonyl; originator chain Baeyer-Villiger 1899 → Criegee 1948 → Brown-Okamoto σ+ correlations → Bolm 1994 / Katsuki 1997 asymmetric BV → Walsh 1976 BVMO enzymatic). `17.11.03` CRISPR-Cas9 genome editing: PAM recognition, sgRNA guidance, DSB repair outcomes (§17-mol-cell-bio/11-methods-techniques; mechanistic depth distinct from the 17.11.01 methods survey — Jinek/Doudna-Charpentier 2012 → Nishimasu 2014 structure → Komor 2016 base editing → Anzalone 2019 prime editing → Casgevy 2023 sickle-cell approval). `32.20.03` Verdun and the Somme 1916: industrialized attrition on the Western Front (§32-world-history/20-world-war-one; convergence-thesis framing of Falkenhayn's Ausblutung + Haig's breakthrough doctrines — Foley 2005, Prior-Wilson 2005, Sheffield 2011, Mosier, Liddell Hart, Keegan 1976, Audoin-Rouzeau-Becker 2000 in the historiographical debates). The dedup gate confirmed again that the corpus is denser than the thin-chapter count implies — a 15-candidate batch surfaced only 5 clean niches, and the chosen 3 are all specific named mechanisms/battles rather than broad survey titles. The chemistry agent used `## Key mechanism [Intermediate+]` (the validator-permitted chemistry-domain variant of "Key theorem"); the history agent used `## Key thesis: a comparative framework [Intermediate+]` to satisfy the intermediate-evidence substring check. No producer fabricated citations. Corpus 2,559 → **2,562**; validate_all 68,987 → **69,068**; lenses clean; site rebuilt (2,633 pages, 0 skipped) + deployed (version `3fc7d7bb`, old container `952ed458` retired, health-check passed) — commit `3fc7d7bb`.

- **2026-06-29 — Phase 2 waves 12–14 (parallel-agent pattern validated, sustained).** 9 more depth units across 3 parallel waves, all 27/27, all gate-cleared, produced via the parallel-producer pattern (3 general agents per wave on disjoint chapters, serial integration). Wave 12: `29.13.03` item response theory / Rasch model (Fisher information, test information, CAT, DIF), `16.09.03` lanthanide luminescence / antenna effect (f-f, Judd-Ofelt, Förster/Dexter, upconversion), `34.08.02` generative art / creative coding (Perlin noise, Processing, Molnár/Mohr/Nake lineage). Wave 13: `18.13.02` hair cell mechanotransduction / cochlear tuning (tip-link, prestin somatic electromotility, Greenwood), `28.09.02` adaptive optics / interferometry / EHT (diffraction limit, Van Cittert-Zernike, closure phase), `16.08.02` noble gas compounds / xenon fluorides (Bartlett 1962, 3c-4e MO model, octet-rule fall). Wave 14: `27.07.05` stratospheric ozone depletion / CFCs / Montreal Protocol (Chapman, Molina-Rowland 1974, Farman 1985, PSC mechanism), `32.07.03` Byzantine empire / Constantinople / Justinian (1000-year continuation, Kaldellis continuity-vs-decline), `02.07.12` Lebesgue differentiation theorem / Hardy-Littlewood maximal (Vitali → weak-type → LDT → Marcinkiewicz interpolation). The parallel pattern sustained 3 clean first-pass waves — including one agent that refused to fabricate unverifiable citations (substituting the real Yost-Kaye 1933 reference) and two that honestly flagged `status: stub` prereqs (27.07.02, 32.07.02) and used `pending_prereqs: true` rather than faking resolution. The dedup gate again blocked the majority of candidate topics — the corpus's body density (not the title-level gate) is the binding constraint, and finding genuinely uncovered niches takes ~10 candidates vetted per clean topic found. Corpus 2,550 → **2,559**; validate_all 68,744 → **68,987**; lenses clean; site rebuilt + deployed after each wave (commits `a86730ba`, `d498364a`, `952ed458`).

- **2026-06-29 — Phase 2 waves 10–11 (autonomous loop continues).** 10 more depth units, all 27/27, all gate-cleared. Wave 10 (6 units): `17.11.02` optical tweezers / single-molecule force spectroscopy (Ashkin, Svoboda-Block, Bustamante WLC, Evans-Ritchie), `20.13.02` embodied / 4E cognition (Varela-Thompson-Rosch, Clark-Chalmers parity, Friston active inference), `51.06.02` Indo-European comparative method (Grimm/Verner/laryngeal, de Saussure confirmed by Hittite), `51.07.02` variationist sociolinguistics (Labov department store, apparent time, variable rule, Eckert community of practice), `52.06.02` neuroeconomics / dopamine RPE (Rescorla-Wagner, TD, Schultz-Dayan-Montague, Caplin-Dean axioms), `52.04.02` signaling games / Bayesian Nash (Spence, Akerlof lemons, Cho-Kreps intuitive criterion, Crawford-Sobel cheap talk). Wave 11 (4 units): `52.01.02` revealed preference / Afriat's theorem (GARP, Afriat inequalities, Diewert LP proof, Varian shortest-path test), `52.01.03` Edgeworth box + two welfare theorems (Arrow-Debreu existence, Debreu-Scarf core convergence), `22.06.02` prose rhythm / sentence acoustics (Christensen cumulative sentence, Williams cognitive-load, Lanham ten-style, Gibson dependency-locality), `20.15.02` Kant Critique of Pure Reason (transcendental idealism, synthetic a priori, the categories and the deduction, two-aspect reading). The gate again blocked many would-be duplicates (pulsars, terpene biosynthesis, MRI, phototransduction, formants, boron hydrides, whiteness studies, functionalism, hyperbolic discounting, Grice implicature, retrospective synthesis, Akerlof-style comparative advantage) — confirming the corpus is denser than the thin-chapter count implies; later waves need to find genuinely uncovered niches rather than re-title broad topics. Corpus 2,540 → **2,550**; validate_all 68,474 → **68,744**; lenses clean; site rebuilt + deployed after each wave (commits `8f91fcfd`, `ddf569ac`).

- **2026-06-27 — Phase 2 waves 6–7 (autonomous loop continues).** 10 more depth units, all 27/27, all gate-cleared. Wave 6: `08.12.03` Jarzynski/Crooks fluctuation theorems, `43.05.09` randomized SVD/sketching, `41.07.02` braided/ribbon monoidal categories, `51.02.02` autosegmental phonology + OT, `52.02.02` Solow growth + convergence, `30.10.02` feminist theory/intersectionality. Wave 7: `04.19.02` cotangent complex + deformation-obstruction, `04.18.02` Schubert calculus/Grassmannian cohomology, `01.06.02` syzygy/Hilbert/Auslander-Buchsbaum, `03.02.02` Sard/transversality/genericity. The gate again blocked would-be duplicates (Borel-Cantelli vs `37.02.01`, Chow-ring-as-topic vs the `04.18.01` sibling, Abel's theorem vs `06.06.06`, disinformation vs `36.03.02`, big-science vs `33.08.02`) — confirming the corpus is denser than the thin-chapter count suggests, so remaining depth work needs careful niche-topic selection. Two producer tasks returned empty and were re-run cleanly. Corpus 2,521 → **2,531**; validate_all 67,961 → **68,231**; lenses clean; site rebuilt + deployed after each wave-pair.
- **2026-06-27 — Phase 2 waves 3–5 (autonomous orchestration, dedup gate enforced).** Three more disjoint depth-fill waves, 18 units total, all 27/27, all gate-cleared. The duplicate-detection gate earned its keep across all three waves — it caught and prevented re-creation of: Weil conjectures (vs `04.15.01`), Dedekind domains (vs `21.17.01`), stellar structure (vs `28.02.02`), Nullstellensatz (vs `04.02.07`), Borel-Weil (vs `07.06.09`), Serre duality (vs `04.08.03`), Rawls/Nozick justice (vs `20.02.01`), digital revolution (vs `33.07.01`), anthropological theory (vs `31.01.02`), investigative journalism (vs `36.02.02`), medieval European science (vs `33.02.02`). Wave 3: `27.09.02` folding/faulting/deformation, `27.10.02` soil classification/critical zone, `28.10.02` extremophiles/biosignatures, `18.12.02` C3/C4/CAM + plant water relations, `29.13.02` classical test theory/factor analysis, `17.12.02` molecular-motors mechanics. Wave 4: `20.12.02` Frege/Russell/reference, `20.14.02` social contract (Hobbes/Locke/Rousseau), `34.09.02` dramatic structure Aristotle→Brecht/Beckett, `34.10.02` modern dance Graham/Cunningham/Balanchine, `22.05.02` Aristotle rhetoric + Toulmin, `32.26.02` globalization backlash/Anthropocene. Wave 5: `19.13.02` coevolutionary arms races/Red Queen, `19.15.02` RNA world/prebiotic chemistry, `20.04.02` Kant Critique of Judgment/sublime, `20.07.02` deliberative democracy/public sphere, `15.13.02` RNA secondary structure/ribozymes, `29.14.02` cognitive revolution/computational mind. Corpus 2,503 → **2,521**; validate_all 67,475 → **67,961**; lenses clean; site rebuilt + deployed after each pair of waves.
- **2026-06-27 — Phase 2 wave 2 (+ duplicate-detection gate).** Built `scripts/check_duplicate.py` (IDF-weighted title/slug/concept similarity over the whole corpus) as a permanent pre-production gate so depth fills don't recreate existing units; it surfaced real overlaps (a "Weil conjectures" proposal vs the existing étale unit, "Dedekind domains" vs `21.17.01`, a "stellar structure" proposal vs the existing `28.02.02`) and is now part of the production loop. Wave 2: 4 depth units, all 27/27, all gate-cleared as non-duplicate — `21.17.02` ramification / decomposition-inertia groups (5972w), `15.15.02` named heterocyclic ring synthesis (6504w), `13.08.03` cosmological inflation / slow-roll (5802w), `16.09.02` actinide chemistry / nuclear fuel cycle (6366w). Corpus 2,499 → **2,503**; validate_all 67,367 → **67,475**; lenses clean.
- **2026-06-27 — Math-rendering fix + Phase 1 + Phase 2 wave 1.** (a) Fixed all on-page math display (prose raw-math 776 → 0 visible; 2 residual hits live in a collapsed "Mathlib gap" details and a citation tooltip) via six `marked-codex.ts` preprocess passes — `separateDisplayMath`, `rejoinSplitInlineMath`, `protectMathAsterisk`, `openDetailsBlocks`/`stripRedundantPTags` boundary fixes, `renderMathInHtmlItems` — plus `renderInline`/`renderBlock`/`mathToText` for frontmatter fields (titles, tier anchors, references, lean-gap, citation popups); rebuilt + deployed. (b) **Phase 1 (P1a):** renamed `07/08-classification` → `05-classification` (cosmetic, validator green). (c) **Phase 2 wave 1:** 4 depth units shipped, all 27/27 — `01.03.02` modules-over-a-pid (4071w, first pass), `13.03.02` ricci-einstein-curvature-tensors (4739w, first pass), `12.21.02` electroweak-theory-higgs-mechanism (7977w, 2nd pass — 1 paragraph-length fix), `19.12.02` island-biogeography-species-area (4764w, first pass). (d) Fixed a pre-existing ID collision surfaced by the wave: renumbered the mislabeled `19.12.02`-nutrient-cycles stub → `19.16.01`; archived the redundant `19.10.03` island-biogeography stub (superseded by the real `19.12.02`) and redirected its 2 inbound refs. Corpus 2,496 → **2,499**; validate_all 67,286 → **67,367**; build_lenses clean. Next: Phase 2 wave 2 (next disjoint slice — §41/§04/§21 math depth, §32-world-history block).

- **2026-06-17 — Waves 8–15 (session 1, parallel agents, "do it all" directive).** Drained the bulk of the queue: **48 more units across 8 waves** (6 per wave, disjoint sections, collision-proofed via pre-added catalog stubs). Highlights: §21 ANT+CFT complete (17, 18); §16 inorgchem main-group + f-block + catalysis (08–10); §15 orgchem heterocyclic + polymers/photochem + natural-products (15–17); §17 mol-cell methods + cytoskeleton (11, 12); §18 organismal plant-physiology + sensory (12, 13); §04 AG étale + abelian + birational + intersection + deformation (15–19); §28 ISM + high-energy + instrumentation + astrobiology (07–10); §27 structural + soil (09, 10); §13 GR equivalence-depth + cosmology-depth (01, 08); §12 condensed-matter superconductivity + magnetism/topological + Standard-Model (20, 21); §07 finite-groups-rep (08); §42 proof-theory cut-elimination (05); §41 limits + yoneda + adjunctions depth (02, 03, 04); §48 Riemannian geodesics-depth (01); §02 real-numbers constructions-depth (02); §03 alg-top homology-cohomology (17); §20 metaphysics-depth (11); §32 WWII + globalization + atlantic-slave-trade depth (16, 22, 25); §22 rhetoric + creative-writing + world-literatures (05–07); §29 history-of-psych + I-O psych (14, 15); §30 race-ethnicity + gender-sexuality (09, 10); §34 theater + dance (09, 10); §35 medical-diagnostics + surgery-emergency (09, 10); §50 computer-architecture (13). Corpus 2,392 → 2,471; validate_all 64,478 → 66,611. All units 27/27; integration serial throughout; ~80% first-pass, remainder needed only mechanical banned-word / YAML-escape / heading fixes.
- **2026-06-17 — Wave 7 (session 1, parallel agents).** First D-item wave (depth fills for established thin chapters). `21.17.01` algebraic-number-theory (NEW §21 chapter 17 — the audit's noted ANT/class-group gap; 27/27 after "trivial"→reword + image-bracket fix), `32.24.02` cold-war depth (§32's thinnest section; first-pass, 6,561 words), `41.03.03` adjunctions unit-counit calculus (§41 depth; first-pass), `16.08.01` main-group descriptive chemistry (NEW §16 chapter 08 — the audit's main-group gap; first-pass). Corpus 2,419→2,423; validate_all 65,315/65,315; math 1,511→1,513.
- **2026-06-17 — Wave 6 (session 1, parallel agents).** Four units, all 27/27 (one "non-trivial"→reword on sociolinguistics). §51-linguistics `51.06.01` historical-comparative + `51.07.01` sociolinguistics → **§51 structurally complete (7/7 chapters)**; §52-economics `52.05.01` international-trade + `52.06.01` behavioral → **§52 structurally complete (6/6 chapters)**. Every chapter in both brand-new sections now has at least one unit. Corpus 2,415→2,419; validate_all 65,207/65,207; `other` area 662→666.
- **2026-06-17 — Wave 5 (session 1, parallel agents).** Four units, all 27/27 first pass. §51-linguistics `51.03.01` morphology + `51.05.01` semantics/pragmatics (section now 5 of 7 chapters filled); §52-economics `52.03.01` econometrics (4 of 6 filled); §12-condensed-matter `12.20.02` superconductivity (BCS, Ginzburg-Landau, Josephson — depth under S6). Corpus 2,411→2,415; validate_all 65,099/65,099; physics area 238→239.
- **2026-06-17 — Wave 4 (session 1, parallel agents).** Four units deepening the two brand-new sections to credible size (3 units each): §51-linguistics `51.02.01` phonology + `51.04.01` syntax; §52-economics `52.02.01` macroeconomics + `52.04.01` game theory (Nash existence via Kakutani in Master). All 27/27 first pass — collision-proofing (pre-added stubs) and the established brief pattern let agents produce clean units without iteration. Corpus 2,407→2,411; validate_all 64,991/64,991; `other` area 655→659 (the new humanities/social-science units).
- **2026-06-17 — Wave 3 (session 1, parallel agents).** Four more units, parallel-pattern with collision-proofing (catalog stubs pre-added by dispatcher; agents read-only on catalog). `48.01.02` Riemannian comparison theorems (Cartan-Hadamard, Bonnet-Myers, Bishop-Gromov — C6 depth, 27/27 first pass); `20.13.01` philosophy of mind (27/27 after paragraph-split + "obvious"→reword); `20.14.01` political philosophy (Rawls/Nozick/authority — 27/27 after "non-trivial"→reword); `20.15.01` history of philosophy (ancient→continental survey — 27/27 after "clearly"→reword + word-count floor). **E1 COMPLETE: all five §20 philosophy pillars shipped** (metaphysics, language, mind, political, history). Corpus 2,403→2,407; validate_all 64,883/64,883. The §20 philosophy gap (audit's biggest humanities hole) is now structurally closed.
- **2026-06-17 — Wave 2 (session 1, parallel agents).** Four more anchor units shipped via the proven parallel-producer pattern (4 general agents, disjoint paths, serial integration). `01.05.01` commutative-algebra (27/27 first pass), `01.06.01` homological-algebra (27/27 after 3 mechanical fixes: YAML backslash escaping, "non-trivial"→reworded, word-count floor), `20.12.01` philosophy-of-language (27/27 first pass, Frege/Russell/Wittgenstein/Kripke/Austin, humanities addendum satisfied), `29.13.01` psychometrics (27/27 after "trivially"→reworded; the audit's explicit MISSING chapter — D3). §01-foundations algebra home now has all four anchor units (rings-modules, fields-Galois, commutative, homological) — the #1 math findability gap is structurally closed; remaining work there is depth fills. Corpus 2,399→2,403; validate_all 64,775/64,775; pure-math lens 1,508→1,510. Per-unit catalog stubs + deps.json integrated. Each agent produced ~3,600–6,000 words at the peer caliber; the parallel pattern validated for queue drainage.
- **2026-06-17 — Wave 1 (session 1).** Scope decisions S1–S8 LOCKED (OVERVIEW §12). All scaffolding landed: §01 algebra home chapters (03–06), §48/01-riemannian-geometry, §12/20-condensed-matter, §20 philosophy chapters 11–15, §51-linguistics (7-chapter skeleton + `validate_unit` prefix 51 + `sections.ts` `linguistics` key + `field_map` row), §52-economics (6-chapter skeleton + prefix 52, sharing the existing `economics` section key). B3 done (`03.15-morse-homology`→`15-morse-homology`); C2 done (`08-advanced-electrodynamics`→`08-optics-and-advanced-electrodynamics`). B1/B2 dropped (slug-only dirs are cosmetic; §05 collisions make a clean rename a C-task not a B-task). B6/B7 sweep clean (June session already fixed every duplicate/empty). **Seven foundational units shipped, all 27/27, integrated:** `01.03.01` rings-modules, `01.04.01` fields-Galois, `48.01.01` Riemannian-geometry, `20.11.01` metaphysics, `51.01.01` phonetics (linguistics anchor), `52.01.01` microeconomics (economics anchor), `12.20.01` condensed-matter. Corpus 2,392→2,399; validate_all 64,667/64,667; pure-math lens 1,505→1,508; physics 237→238. Each new home now has a findable anchor unit; depth fills (D-items) + remaining C/E-items queued for wave 2+.
- _2026-06-17 — Plan authored against live tree. Mechanical BLOCKERs (audit §"Cross-cutting") confirmed already fixed in the June cleanup session. S-items S1–S8 await Tyler verdicts._

---

*This document supersedes the "discretionary curation" framing of BACKLOG.md "NEXT
ACTIONS" and turns it into an executable, status-tracked program. When §0 criteria 1–6
are all green, the curriculum is final-for-v1; archive this file and update OVERVIEW §13.*
