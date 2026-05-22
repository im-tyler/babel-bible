# Babel Bible — Cross-Domain Expansion Plan

**Drafted 2026-05-17; updated 2026-05-22.** Successor to the implicit "math+physics only" scope (`OVERVIEW.md` §3 invariant 6, `BRIEF.md` §Scope v1) which is hereby revised. Sibling of `FASTTRACK_COVERAGE_ROADMAP.md` — that plan governs depth of the math/physics axis; this plan governs the lateral expansion across the domains the site and content tree now expose: **Math · Physics · Chemistry · Biology · Philosophy · Language · World**.

**Status:** Active. Locks the high-level structure. Technical domains have per-domain plans (`PHYSICS_PLAN.md`, `CHEMISTRY_PLAN.md`, `BIOLOGY_PLAN.md`, `PHILOSOPHY_PLAN.md`); language/world hardening is governed by `LANGUAGE_WORLD_PLAN.md`.

Read `OVERVIEW.md` (the canonical reference) first. This plan refines §11 ("what's fixed vs what's open") by moving "scope v1 = math + physics only" from Fixed to Decided-otherwise.

---

## §1 What this plan does

It does three things and only three things:

1. **Revises the v1 scope** from "math + physics only" to "math + physics + chemistry + biology + philosophy + language + world". Decision logged in §9 and propagated to `OVERVIEW.md`.
2. **Defines the cross-domain link contract** — the rules by which a unit in one domain references a unit (or pending-unit slot) in another domain. This is the load-bearing new piece. Without it the expansion is a set of parallel curricula that share a header bar; with it, the cross-coherence becomes a structural property of the build, not a wish.
3. **Orders the per-domain plans** and names what each one must answer before its first unit ships.

What this plan does *not* do:

- Pick specific apex units in chem/bio. That lives in `CHEMISTRY_PLAN.md` / `BIOLOGY_PLAN.md`.
- Replace the math/physics production roadmap. `FASTTRACK_COVERAGE_ROADMAP.md` continues to govern the math/physics axis; this plan is orthogonal to it.
- Alter the OVERVIEW invariants 1–5, 7, or 8 (tier structure, progressive disclosure, Lean-where-Mathlib-covers, reference resolution, mastery operationalization, cross-link graph, tool-agnostic content). All carry forward unchanged.

---

## §2 Domain map

Each domain answers seven questions. Filled here at the high level; per-domain plans flesh out the details.

### 2.1 Math

| Aspect | Setting |
|---|---|
| Authoring mode | Tiered units (Beginner / Intermediate / Master) per existing `UNIT_SPEC.md`. |
| Prereq topology | **Strict DAG.** Logical entailment is rigid. |
| Anchor literature per tier | B: 3Blue1Brown / Strogatz · I: Axler / Apostol · M: Lang / Hartshorne / Bott-Tu. (Already locked in `BRIEF.md`.) |
| Mastery endpoint per tier | B: read pop-math with comprehension · I: work anchor-textbook exercises cold · M: read research papers. |
| Lean stance | Ground truth at Intermediate+ where Mathlib covers. (Invariant §3.3.) |
| Cross-domain role | **Spine.** Other domains cite into math; math rarely cites out. |
| Current state | 313 shipped units across sections 00–08. Active push: 79 of 93 Fast Track books unaudited (see `FASTTRACK_COVERAGE_ROADMAP.md`). |

### 2.2 Physics

| Aspect | Setting |
|---|---|
| Authoring mode | Tiered units, same scaffold as math. |
| Prereq topology | **Multi-entry DAG, not a linear spine.** Five branches: classical mech / EM+SR / stat mech / QM+QFT / GR+cosmology. Each branch has internal order; branches can be entered independently once math prereqs are met. |
| Anchor literature per tier | B: Feynman *Six Easy Pieces* / Susskind *Theoretical Minimum* · I: Griffiths (EM, QM) / Taylor (CM) / Schroeder (thermo) · M: Weinberg (QFT) / Wald (GR) / Peskin-Schroeder / Polchinski / Sakurai (modern). |
| Mastery endpoint per tier | B: explain mechanism in plain language with correct dependence on conserved quantities · I: solve anchor problem sets · M: open a recent paper in the subarea and identify novel vs background. |
| Lean stance | `lean_status: none` dominates (Mathlib gap); named human reviewer required. Decision 2026-04-23 carries forward. |
| Cross-domain role | Cites heavily *into* math; emits hooks *out* to chem (atomic structure, spectroscopy, thermo), bio (electrochemistry, photo-everything, biomechanics), phil (interpretation, time, determinism). |
| Current state | Section 08 stat-mech populated (9 subdirs); spin-geometry / gauge-theory units from the pilot live in §03 (those are mathematical-physics border units, not "physics proper"). No standalone classical-mech / EM / QM units yet. |

### 2.3 Chemistry

| Aspect | Setting |
|---|---|
| Authoring mode | **Hybrid: tiered units + synthesis essays.** Units carry the load (mechanisms, structures, exercises). Essays cover synthetic ideas that don't fit cleanly under one unit (e.g., "what reactivity is", "the bond as a many-body phenomenon"). |
| Prereq topology | **Soft DAG.** Even softer than physics — gen chem can enter from atomic structure, bonding, or stoichiometry; orgo is partly its own DAG; pchem leans heavily on physics. |
| Anchor literature per tier | B: Crash Course / Khan · I: Atkins *Physical Chemistry* / Clayden-Greeves-Warren *Organic Chemistry* / Shriver-Atkins *Inorganic* · M: McQuarrie *Quantum Chemistry* / Levine *Quantum Chemistry* / Carey-Sundberg *Advanced Organic*. |
| Mastery endpoint per tier | B: predict whether a reaction will proceed in qualitative terms · I: work textbook problems including mechanism arrows and rate analysis · M: design a synthesis or interpret a research-paper spectrum. |
| Lean stance | `lean_status: none` everywhere; no Mathlib coverage. Human reviewer or computational-chem-package-verified (e.g., DFT result) where the claim is computational. |
| Cross-domain role | Cites *into* physics (QM, thermo, EM) and math (linear algebra, group theory for crystallography). Emits hooks *out* to bio (biochem, enzyme kinetics, metabolism) and phil (emergence at the molecular scale). |
| Excludes (lives elsewhere) | Materials science → physics (condensed-matter subarea of §09–13). Geochemistry / atmospheric chem / cosmochemistry → not in scope v1. Nuclear chem / particle-physics overlap → physics, not chem. Biochemistry **mechanism** (e.g., enzyme kinetics, redox chemistry, polymer reactions) belongs to chem; biochemistry **as it operates in specific organisms or pathways** (e.g., the citric acid cycle in *S. cerevisiae*) belongs to bio. Chemical engineering / process scale-up → not in scope v1. |
| Current state | 36 units exist across §14–16, plus a chemistry essay in `site/src/content/chemistry/`. The stronger units are already deep; the main debt is source resolution, reviewer status, placeholder visuals, and a few older scaffold units. |

### 2.4 Biology

| Aspect | Setting |
|---|---|
| Authoring mode | Hybrid: tiered units + synthesis essays, like chemistry. |
| Prereq topology | **Multi-tree, weakly connected.** Three large independent entry trees: molecular/cellular, organismal/physiological, ecological/evolutionary. They share fewer prereqs with each other than physics branches do. |
| Anchor literature per tier | B: Why Evolution Is True / Crash Course Biology · I: Alberts *MBoC* (mol/cell) / Campbell *Biology* (organismal) / Futuyma *Evolution* · M: Alberts *MBoC* (deep dive) / Nelson *Biological Physics* / primary lit by subarea. |
| Mastery endpoint per tier | B: explain a biological mechanism (e.g., action potential) in plain language with correct causal direction · I: work anchor-textbook problems, interpret experimental figures · M: read a primary paper in the subarea and assess methods. |
| Lean stance | `lean_status: none` everywhere; reviewer-attested. (Note: certain pop-dyn / epidemiology models *are* mathematically tractable and could carry `partial` Lean status if Mathlib covers the relevant ODE / probability tooling.) |
| Cross-domain role | Cites *into* chem (biochem, enzyme mechanism), physics (electrochem, optics, thermo, stat mech of biopolymers), math (probability, dynamical systems, graph theory). Emits hooks *out* to phil (consciousness, agency, life). |
| Excludes (lives elsewhere) | Biochemistry **mechanism** → chem. Biochemistry **as it operates in specific organisms / systems** → bio. Medicine / pharmacology / clinical applications → not in scope v1. Psychology and cognitive science → not in scope v1 (philosophy of mind covers the conceptual overlap; empirical psych deferred to v2+). Neuroscience: cellular/molecular → bio; cognitive/computational/consciousness → phil and v2+. Bioinformatics methods → math; bioinformatics-specific tooling → not in scope v1. Public health / epidemiology models → math (probability, dyn-sys); domain-specific epidemiology → v2+. |
| Current state | 40 units exist across §17–19, plus a biology essay in `site/src/content/biology/`. Molecular/cell and eco/evo are already substantial; the main debt is source resolution, reviewer status, and breadth completion. |

### 2.5 Philosophy

| Aspect | Setting |
|---|---|
| Authoring mode | **Hybrid.** Long-form synthesis essays remain in `site/src/content/philosophy/`; tiered analytic-philosophy units now live under `content/20-philosophy/`. Essays carry orientation and reflexive synthesis; tiered units carry definitions, argument reconstruction, cases, exercises, and reviewer-checkable mastery. |
| Prereq topology | Essays are mostly flat. Tiered units use light DAGs by subfield: epistemology/logic first, then philosophy of science, ethics, political philosophy, philosophy of language/aesthetics, mind, mathematics, physics, chemistry, and biology as needed. |
| Anchor literature per tier | Controlled by `PHILOSOPHY_PLAN.md`; unit-level frontmatter must name beginner, intermediate, and master anchors. |
| Mastery endpoint per tier | Beginner: distinguish core positions and cases. Intermediate: reconstruct arguments and counterexamples. Master: map live position space without presenting one school as canonical. |
| Lean stance | `lean_status: none` everywhere except formal logic / set theory / Gödel-class material, which *could* carry Lean status via Mathlib's logic libraries. |
| Cross-domain role | **Receives** hooks from math, physics, chemistry, biology, language, and world content. **Emits** hooks back into those domains as "see also: what does this mechanism imply for X" footers. |
| Current state | 6 site essays exist (`01-reflexivity` through `06-realization`) and tiered §20 units are now live in draft/review form. Main debt is reviewer naming and source hardening before any analytic unit is marked shipped. |

### 2.6 Language

| Aspect | Setting |
|---|---|
| Authoring mode | Tiered units plus literary/source essays. Units teach grammar, writing, rhetoric, and close-reading skills; essays guide extended works or critical traditions. |
| Prereq topology | Mostly shallow skill graph: grammar foundations feed writing and literature, but many literature units/essays can be entered independently. |
| Anchor literature per tier | B: elementary grammar/writing instruction · I: Huddleston & Pullum / Williams / standard composition and literary-analysis texts · M: linguistics handbooks, rhetoric, critical theory, primary literary scholarship. |
| Mastery endpoint per tier | B: identify and use forms correctly · I: diagnose, revise, and analyze real passages · M: compare theories, interpret source texts, and situate claims historically. |
| Lean stance | `lean_status: none` except formal semantics/logic crossover. Human review is the correctness gate. |
| Cross-domain role | Receives from philosophy of language/logic; emits to world essays, rhetoric, literary history, and source interpretation. |
| Current state | 50 draft units under §22 plus language essays in `site/src/content/language/`; broad coverage, substantial source/schema hardening needed. |

### 2.7 World

| Aspect | Setting |
|---|---|
| Authoring mode | Tiered units for economics/civics/geography concepts plus synthesis essays for historical and social-science controversies. |
| Prereq topology | Shallow within each strand; economics has the strongest internal order, civics/geography are more modular. |
| Anchor literature per tier | B: civic/geography/econ primers · I: standard intro texts and official institutional/geospatial sources · M: primary legal/constitutional/economic sources, historiography, comparative politics, GIS/geodesy, and social-science literature. |
| Mastery endpoint per tier | B: explain institutions, models, and maps in plain language · I: apply models and compare cases · M: evaluate assumptions, source quality, historical interpretations, and institutional tradeoffs. |
| Lean stance | `lean_status: none` except occasional formal economics/game-theory crossover. Human review is the correctness gate. |
| Cross-domain role | Receives math/statistics links for economics and geography; emits philosophy hooks on justice, institutions, evidence, and social explanation. |
| Current state | 57 draft units under §23 plus world essays in `site/src/content/world/`; broad coverage, substantial source/schema hardening needed. |

### 2.8 Unit vs essay decision criteria (for hybrid domains)

Chem and bio are hybrid (units + essays). Without explicit criteria authors guess, and essays accumulate faster than units because no validator gates their proliferation. Decision rule:

**Author as a tiered unit if all three hold:**
- A **testable mastery endpoint** exists at at least one tier — something the unit's exercises can evidence.
- A **clear prereq tree** can be declared in frontmatter and validated by `validate_unit.py`.
- Master-tier reading fits in roughly **20–50 minutes**, matching the unit-size invariant in `OVERVIEW.md` §4.

**Author as a synthesis essay if any of these hold:**
- It **spans subareas** in ways that make it un-anchorable to one prereq tree (e.g., "what reactivity *is*, structurally" cuts across atomic structure, orbital theory, kinetics, and thermodynamics).
- It is **interpretive or synthetic** — its job is to draw out a stance or connection, not to teach a mechanism.
- It has **no testable endpoint** that survives operationalization ("the role of metaphor in chemistry teaching" is essay material).

**Tiebreaker: prefer the unit.** Default toward the gated, exercisable, machine-validatable form. Essays earn their place; they don't get it by default.

---

## §3 The cross-domain link contract

The single most important section. The cross-coherence goal — "everything cross-correlates between math, phil, chem, bio, phys" — is achieved at build time by enforcing a contract, not at author-time by hoping people remember to link.

### 3.1 Two kinds of cross-references

`UNIT_SPEC.md` already supports `[ref: source-locator]` (citation into the external reference archive) and `[unit-id]` (cross-link within Babel Bible). The latter is the load-bearing primitive. Cross-domain linking uses the same syntax — `[03.02.01]` (math), `[09.02.04]` (physics), `[10.03.07]` (chem), etc. — with the section-number prefix conveying domain.

Section-number prefixes (locked as part of this plan):

| Prefix range | Domain |
|---|---|
| `00.–08.` | Math (existing; do not renumber) |
| `09.–13.` | Physics (5 branches × ~1 section each) |
| `14.–16.` | Chemistry (gen / orgo / pchem-inorg) |
| `17.–19.` | Biology (mol-cell / organismal / eco-evo) |
| `20.–20.` | Philosophy (if it gets units) |
| `22.–22.` | Language (grammar / writing / literature) |
| `23.–23.` | World (economics / civics / geography) |

**Routing rule (locked).** Physics units are addressable in three places, and this is **not** a bug to be fixed by renumbering:

- `03.*` — math-physics border units already shipped under modern-geometry (Clifford, Spin, Dirac, Yang-Mills, Atiyah-Singer, Chern-Weil, Bott periodicity, etc.). These stay where they are; renumbering would break ~50+ shipped cross-refs across `manifests/deps.json` and existing units. Their **primary discipline is mathematics**; the physics interest is downstream.
- `08-stat-mech.*` — mathematical-physics flavor (Onsager, RG, lattice gauge, mathematical path integrals, etc.). Stays put for the same reason.
- `09–13.*` — **physics proper** going forward: classical mech, EM+SR, GR+cosmology, QM+QFT, plus a phys-flavor stat-mech section that may eventually co-exist with §08 or absorb its physically-flavored siblings (decision deferred to `PHYSICS_PLAN.md`).

The deciding question for new units is "what is the primary discipline?" Math → `00–08`. Physics → `09–13`. Border units default to math; cross-domain `hooks_out` from a `§03.*` unit *to* a `§09–13.*` physics unit are the mechanism by which math-physics border units expose themselves to the physics nav. Physics landing page (`/physics`) and `/dag` filtering query *both* the `09–13` namespace and the union of `hooks_out` from math-side border units that target physics.

**Philosophy IDs.** Existing 6 essays at `site/src/content/philosophy/01-reflexivity` … `06-realization` will be retrofitted with IDs `20.essays.01` … `20.essays.06` so other domains can `hooks_out` to them and the validator can resolve those targets. Whether philosophy also grows a tiered-units ID space (e.g. `20.01.NN` for tiered chapters) is a `PHILOSOPHY_PLAN.md` decision; the prefix table reserves `20` for philosophy as a whole.

### 3.2 Inbound vs outbound

A unit declares both:

```yaml
prerequisites:          # inbound: required reading
  - 03.02.01            # math, linear algebra
  - 09.04.02            # physics, classical mech: Hamiltonian
hooks_out:              # outbound: this unit is referenced BY
  - target: 14.05.03    # chem, molecular orbitals — proposed
    kind: proposed
    why: "MO theory cites this unit's spin-statistics result"
  - target: 17.04.02    # bio, photosynthesis — proposed
    kind: proposed
    why: "Light-harvesting cites this unit's photon-absorption section"
  - target: 14.03.04    # chem, hybridization — confirmed
    kind: confirmed
    confirmed_by: "reviewer-id"
    why: "Hybridization picks up the orbital-angular-momentum decomposition stated here"
```

`prerequisites` already exists. `hooks_out` is **new**, with two states:

- `proposed` — the emitting author declared the link. The target may not exist yet, and even if it does, no reviewer from the receiving domain has audited the semantic correctness of the link. This is the default state.
- `confirmed` — the target unit is shipped *AND* a reviewer from the receiving domain has signed off that the linked claim is correct on their side. Carries a `confirmed_by:` reviewer-id field as lightweight attestation.

The validator never auto-flips `proposed` → `confirmed`. Promotion is an explicit step recorded when the receiving domain produces or revisits the target unit. This is the failure mode the binary `pending/shipped` design missed: a target unit existing is not the same as a target unit being a true counterpart on the receiving side.

The `hooks_out` field is non-blocking — neither `proposed` nor `confirmed` hooks fail the build. `prerequisites` is partially blocking — see §3.4.

### 3.3 The connections manifest

`manifests/connections.json` (already exists per `OVERVIEW.md` §9) gets a new role: it becomes the **bidirectional cross-domain edge index** built from all `prerequisites` + `hooks_out` declarations across every unit. Today it logs "semantic connections"; under this plan it's the authoritative cross-domain graph the site queries to render the "this unit is referenced by …" sidebar and the cross-domain DAG view at `/dag`.

**Migration of existing rows.** Existing connections.json content is preserved and tagged with a `source: legacy-semantic` discriminator. Auto-generated rows from `prerequisites` carry `source: prereq`; rows from `hooks_out` carry `source: hook` plus the `kind` (`proposed`/`confirmed`). The validator patch in §6 step 3 emits the auto-generated rows in a one-time sweep; legacy rows are reviewed during the cross-domain audit (§6 step 9) and either preserved as-is, upgraded to a declared hook on a specific unit, or retired.

### 3.4 Build-time validation

`scripts/validate_unit.py` extends with:

- `hooks_out.target` must be a syntactically valid unit ID — `section.chapter.unit` form, or `20.essays.NN` for philosophy essays.
- `hooks_out.kind` is `proposed` or `confirmed`. `confirmed` requires (a) the target unit exists with `status: shipped`, and (b) a `confirmed_by:` reviewer-id field is present on the hook entry.
- `prerequisites` entries that are cross-domain follow the *same* `pending_prereqs` mechanism as intra-math prereqs (per existing `UNIT_SPEC.md` rules): they may be pending, with the pending edges registered in `manifests/deps.json` and the unit's frontmatter carrying `pending_prereqs: true`. Aligning with the existing rule rather than inventing a stricter parallel system avoids author confusion and lets the existing pending-deps tooling extend naturally.
- `hooks_out.why` is required and ≥ 30 chars (forces the author to articulate the link reason).

### 3.5 Why this contract is enough (and what it doesn't catch)

It catches:
- Dangling cross-refs (build fails).
- "I forgot to think about whether bio cares about this physics result" (the unit can ship with `hooks_out: []`, but reviewers can flag empty hooks lists on units whose subject obviously projects into other domains).

It does not catch:
- A genuine *missing* connection that no author thought of. Mitigated by the `connections.json` review pass after each domain's first wave ships — a separate audit deliverable in each per-domain plan.
- Semantic incorrectness of a stated hook ("this chem unit cites that physics unit, but the physics result doesn't actually imply what the chem unit claims"). That's a reviewer judgment, not a build check — addressed by the `confirmed` state's reviewer attestation, but only on hooks that get promoted.

### 3.6 Pending-hook sweep — preventing rot

Non-blocking `proposed` hooks can accumulate forever if no one harvests them. Three mechanisms keep them honest:

1. **Per-domain plan absorption.** At drafting time, each per-domain plan queries `manifests/connections.json` for `kind: proposed` edges where `target` is in its domain. These become **suggested first units** in the plan's backlog. Not mandatory ("you must build everything other domains proposed"), but the per-domain plan must explicitly list each proposed inbound hook and decide per hook: *accept* (queue for production), *reject* (the proposing unit's `why` doesn't survive scrutiny — proposing author edits or removes the hook), or *defer* (mark `priority: low` and leave for later waves).
2. **Quarterly staleness sweep.** A periodic scan of long-lived `proposed` hooks: if a hook has been `proposed` for > 6 months with no movement, surface it for promote/reject/retire review. Mechanical reminder, not enforcement.
3. **The cross-domain audit step (§6 step 9).** First formal place this happens across all active domains simultaneously.

---

## §4 Coverage philosophy: how each domain decides "what to include"

Math has Fast Track as its coverage spec (93 books → audit → unit production). Physics has *partial* coverage from Fast Track (§2 Quantum, §3 advanced topics). Chem, bio, and phil have no analogous canonical list.

Per-domain plans must answer:

| Domain | Coverage source candidate |
|---|---|
| Math | Fast Track booklist + pre-calc ramp. Already locked. |
| Physics | Fast Track §2 + 't Hooft / Rigetti syllabi for the parts FT thins out (classical mech ramp, intro QM). |
| Chemistry | No single canonical roadmap exists. Candidates: ACS undergrad chemistry curriculum + graduate-level subarea standards (Atkins / Clayden / McQuarrie). |
| Biology | Even less canonical. Candidates: Alberts MBoC as the molecular-cell spine; Campbell as the organismal/integrative spine; Futuyma as the evolutionary spine. Three spines, not one. |
| Philosophy | Stays essay-driven for foundational material. Tiered-unit coverage (if introduced) would be subject-narrow (logic; philosophy of mathematics; philosophy of physics; philosophy of biology; philosophy of mind). |

The point: **don't pretend every domain admits a Fast Track equivalent.** Chemistry and biology need their own coverage scaffolds, designed in their per-domain plans. Forcing a Fast-Track-shaped scaffold onto a domain that doesn't have one is a recipe for a curriculum with arbitrary holes.

---

## §5 Mastery-endpoint operationalization across domains

The OVERVIEW invariant is "mastery is operationalized, not vibes." That carries forward, but the *form* of the test varies by domain:

- **Math:** prove a theorem, solve a proof exercise, fill in a Lean tactic.
- **Physics:** derive a result, predict a measurement, identify a regime.
- **Chemistry:** propose a synthesis, predict a spectrum, push curly arrows, justify a rate law.
- **Biology:** read an experimental figure and identify confound + conclusion; predict a mutation phenotype; trace a metabolic pathway.
- **Philosophy:** reconstruct an argument; identify hidden premises; produce a counterexample; map a position onto its commitments.

**Honest machine-verifiability ranking.** Not all of these are auto-gradable, and the project should not pretend otherwise:

| Domain | Auto-gradable share at I/M tier | Reason |
|---|---|---|
| Math | High where Mathlib covers; medium where it doesn't | Lean compile is the gate; falls back to human review for the gaps |
| Physics | Medium-low | Symbolic derivations partially checkable; predictions and regime-identification are not |
| Chemistry | Low | No widely-used auto-grader for curly-arrow notation; spectra prediction requires DFT-level tooling; synthesis design is essentially open-ended |
| Biology | Very low | Figure-reading, phenotype prediction, pathway tracing are all judgment-heavy |
| Philosophy | Very low | Argument-reconstruction is the canonical "needs a human" task |

This means chem, bio, and phil rubrics at Intermediate / Master tier will be **human-review-heavy**. The validator can check structure (frontmatter, citation resolution, hooks_out well-formedness) but not the semantic correctness of mastery exercises. `REVIEWER_PLAN.md` per-domain extensions must plan for this — it's the bottleneck `OVERVIEW.md` already flagged at ~750hr for math alone, and the four less-mechanizable domains multiply it rather than divide it.

Per-domain plans expand these into per-tier rubrics analogous to `QUALITY_RUBRIC.md`'s pedagogical-reviewer checks. Each rubric extension is part of that domain's first deliverable.

---

## §6 Order of operations

Sequence chosen to validate the cross-domain link contract on the highest-leverage pair first (physics ↔ math, since math is already populated and physics has the richest hook density into math).

| Order | Deliverable | Owner | Blocks |
|---|---|---|---|
| 1 | This plan (`BIBLE_EXPANSION_PLAN.md`) | drafted 2026-05-17 | everything below |
| 2 | `UNIT_SPEC.md` patch: add `hooks_out` field + section-number-prefix table | next session | all per-domain plans |
| 3 | `scripts/validate_unit.py` patch: hooks_out validation | next session | shipping any cross-domain hook |
| 4 | `PHYSICS_PLAN.md` | next | first physics unit |
| 5 | First 5 physics units (one per branch — classical, EM, stat mech, QM, GR) | after #4 | validates the link contract; calibrates physics rubric |
| 6 | Retrospective: did the link contract work? amend §3 if needed | after #5 | chemistry/biology plans |
| 7 | `CHEMISTRY_PLAN.md` + `BIOLOGY_PLAN.md` (parallel, both informed by physics retro) | after #6 | first chem/bio units |
| 8 | First 5 chem + 5 bio units | after #7 | cross-domain audit |
| 9 | Cross-domain audit pass: review `manifests/connections.json` for missing edges | after #8 | `PHILOSOPHY_PLAN.md` |
| 10 | `PHILOSOPHY_PLAN.md` (decides essay-only vs unit-augmented, informed by what cross-refs the other domains want to send into phil) | after #9 | philosophy rebuild if needed |

Rationale for putting philosophy last:
- Philosophy's role is to **receive** hooks more than emit them. We learn what shape phil needs to be by seeing what the other domains point at.
- The existing 6 essays aren't blocking anything; they continue to serve readers while the plan is finalized.

---

## §7 What's locked by this plan vs what's still open

### Locked

- Five-domain scope (math + physics + chem + bio + phil).
- All `OVERVIEW.md` §11 fixed items *except* "scope v1 = math + physics" carry forward unchanged (tier structure, progressive disclosure, Lean stance, reference resolution, mastery operationalization, cross-link graph, tool-agnostic content).
- Section-number-prefix allocation + routing rule for the fragmented physics namespace (§3.1).
- `hooks_out` field shape with `proposed` / `confirmed` states (§3.2).
- Cross-domain prereqs follow the existing `pending_prereqs` mechanism — they *may* be pending, registered in `manifests/deps.json` (§3.4). Aligned with the intra-math rule rather than inventing a stricter parallel.
- Unit-vs-essay decision criteria for hybrid domains (§2.6).
- Pending-hook sweep convention (§3.6).
- Order of operations (§6).

### Open (deferred to per-domain plans)

- Specific apex units for chem, bio, phil.
- Whether phil gets tiered units in addition to essays.
- Anchor-text picks at each tier for chem, bio, phil.
- Specific coverage roadmaps for chem and bio.
- Per-domain reviewer roster (mirrors `REVIEWER_PLAN.md` per-domain).
- Whether stat-mech (currently §08, mathematical-physics-flavored) gets re-homed under §11 once §09+ physics sections exist.

### Open (deferred to a later epoch — explicitly not v1)

- Computer science as a sixth domain. (Existing global CLAUDE.md mentions CS as a v2 candidate; this plan does not relitigate that.)
- Translation / localization (still English-only).
- K–8 arithmetic / pre-algebra ramp (still out of scope).

---

## §8 Risks and how each is mitigated

| Risk | Mitigation |
|---|---|
| Five domains × per-tier rubrics = 15 rubrics to maintain. | Per-tier mastery endpoints (§5) replace per-domain rubric duplication for the *human-judgment* portion. The *automated* validator rubric stays one file. |
| Chem and bio have no Fast-Track-equivalent → coverage holes go undetected. | Per-domain plans must explicitly define their coverage source (§4 table). If no canonical list exists, the plan invents one and names what was excluded. |
| `hooks_out` becomes lip service ("everybody declares an empty list, nobody links"). | Reviewer checklists for chem/bio/phys include "scan this unit's claims — name three plausible hooks into other domains; if none, justify." Codified in per-domain plans. |
| Five-domain expansion stalls math production. | Math production is on a separate track (`FASTTRACK_COVERAGE_ROADMAP.md`); the per-domain plans here are sequenced so that physics-1st only consumes ≤1 reviewer-week before pausing for retrospective. Math axis keeps moving in parallel. |
| Cross-domain reviewer expertise is rare (few people are credible in both physics and bio). | Hooks-out reviewer is the *emitting domain's* reviewer (they justify why the link makes sense from their side). The receiving domain's reviewer audits incoming hooks during their own production passes. No reviewer is asked to credential two domains simultaneously. |
| Philosophy rewrite churn — the 6 existing essays may need restructuring if `PHILOSOPHY_PLAN.md` introduces units. | Essays are kept intact; tiered units (if introduced) live alongside them. Site nav exposes both. No deletions; only additions. |

---

## §9 Decision log entries (to be added to `OVERVIEW.md` §12 on the same date)

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-17 | v1 scope expanded from "math + physics" to "math + physics + chemistry + biology + philosophy" | Cross-domain coherence is the project's distinct thesis; math+physics alone cannot demonstrate it. Site nav already advertised those then-current domains; this aligned scope with the surface at the time. |
| 2026-05-22 | v1 scope expanded again to include language (§22) and world/social science (§23), matching the live content tree | These sections already contain substantial draft units and essays; treating them as informal extras makes the quality system inaccurate. Detailed hardening rules live in `docs/plans/LANGUAGE_WORLD_PLAN.md`. |
| 2026-05-17 | Cross-domain link contract introduced: `hooks_out` field with two states (`proposed` / `confirmed`); cross-domain `prerequisites` follow existing `pending_prereqs` mechanism rather than a stricter parallel rule; section-number-prefix table locks domain identity with a routing rule for the fragmented physics namespace (§03 math-physics border units + §08 math-flavor stat-mech + §09–13 physics proper) | Mechanical enforcement prevents the cross-coherence goal from degrading to lip service. Two-state hooks separate "author declared it" from "receiving-domain reviewer signed off"; the original `pending/shipped` binary conflated those. Aligning cross-domain prereqs with the existing pending mechanism avoids author confusion. |
| 2026-05-17 | Philosophy essay IDs retrofitted to `20.essays.NN` so cross-refs can target them | Without IDs, other domains have no validated way to `hooks_out` to existing essays. |
| 2026-05-17 | Chem and bio adopt hybrid authoring (tiered units + synthesis essays); phil mode decided in `PHILOSOPHY_PLAN.md` | Essays alone can't operationalize mastery; tiered-units alone can't carry trans-disciplinary syntheses. Hybrid covers both. |
| 2026-05-17 | Unit-vs-essay decision criteria locked (§2.6): unit if testable endpoint + clear prereq tree + 20–50min scope; essay if multi-subarea, interpretive/synthetic, or has no testable endpoint; tiebreaker defaults to unit | Without explicit criteria authors guess; essays accumulate worse than units because they have no validator gating proliferation. |
| 2026-05-17 | Explicit exclusions added to chem and bio scope tables (§2.3, §2.4) | Without scope fences (materials → physics; pharmacology / psych / clinical → not v1; biochem-mechanism vs biochem-in-organism boundary), chem and bio balloon during per-domain planning. |
| 2026-05-17 | Pending-hook sweep convention (§3.6): each per-domain plan harvests `hooks_out → its domain` as suggested backlog; quarterly staleness sweep on long-lived `proposed` hooks | Prevents `proposed` hooks from accumulating without ever being audited, built, or retired. |
| 2026-05-17 | Honest machine-verifiability ranking added (§5): chem, bio, phil rubrics at I/M are explicitly human-review-heavy with no Lean-equivalent | Reviewer bandwidth was already flagged as the math bottleneck (~750hr); the four less-mechanizable domains multiply it, and pretending otherwise would set unrealistic scaling expectations. |
| 2026-05-17 | `manifests/connections.json` migration: existing "semantic connections" rows tagged `source: legacy-semantic`; new auto-generated rows tagged `source: prereq` or `source: hook` | Avoids destroying existing content while clarifying provenance. |
| 2026-05-17 | Per-domain plans authored sequentially: PHYSICS → (retro) → CHEM ∥ BIO → (audit) → PHIL | Physics validates the link contract with the densest math-side hook surface; phil last because it's mostly a receiver. |

---

## §10 Next immediate actions

1. Patch `docs/specs/UNIT_SPEC.md`: add `hooks_out` field schema (with `proposed`/`confirmed` states, `confirmed_by:` for confirmed entries, required `why` ≥ 30 chars); add §3.1 section-number-prefix table + routing rule; document `20.essays.NN` philosophy-essay IDs.
2. Patch `scripts/validate_unit.py`: enforce `hooks_out` per §3.4; extend `pending_prereqs` validator to accept cross-domain pending edges registered in `manifests/deps.json`; emit `source: prereq` / `source: hook` rows into `manifests/connections.json`; tag existing rows as `source: legacy-semantic`.
3. Patch `OVERVIEW.md`: append §9 decision-log rows (10 new rows per §9 of this plan); revise §11 fixed-vs-open table (move "scope v1 = math + physics" to the open/superseded column with a pointer to this plan); confirm the other 7 §11 fixed items carry forward unchanged.
4. Retrofit IDs on the 6 philosophy essays (`20.essays.01` … `20.essays.06`) and update the philosophy route to surface them so the validator can resolve cross-refs.
5. Draft `docs/plans/PHYSICS_PLAN.md` — the first per-domain plan. Must include: the harvested backlog of `hooks_out → physics` proposed edges from `manifests/connections.json` (empty at first; populated as math units start declaring them).

*This plan is the canonical reference for cross-domain expansion. When uncertain about cross-domain mechanics, check here. When updating, propagate to OVERVIEW §12 the same day.*
