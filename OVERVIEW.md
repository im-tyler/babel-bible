# Babel Bible — Overview

This is the single load-bearing document. Everything else (the production playbook, `docs/specs/UNIT_SPEC.md`, `docs/specs/QUALITY_RUBRIC.md`, `docs/catalogs/DEPENDENCY_MAP.md`) supports or details parts of this. Read this first; read this when in doubt. For the full doc map and reading order, see `AGENTS.md`.

---

## 1. What Babel Bible is

A curriculum that takes a self-taught learner from high-school algebra to graduate-level mastery across mathematics, physics, chemistry, biology, philosophy, language, and world/social-science foundations. Every unit exists at three depths (Beginner / Intermediate / Master) in one source document with progressive disclosure. Units are cross-linked into a prerequisite graph. Proofs at Intermediate+ are Lean-verified where Mathlib covers them; argument, mechanism, source, and case-analysis units are human-reviewed where formalization is not the right gate. Exercises are interactive — auto-checkable where possible, human-reviewable where not. Built to supersede single-roadmap self-study lists by being structurally better in ways printed books physically cannot be.

---

## 2. Who it's for

**Entry requirement:** high-school algebra + basic functions + elementary geometry. No calculus assumed. No K–8 arithmetic covered (separate product if demand emerges).

**Three learner profiles at v1+:**

| Profile | Primary tier | Endpoint |
|---|---|---|
| Curious adult / high-school student | Beginner | Scientific literacy |
| Undergrad / self-taught adult aiming for rigor | Intermediate | Undergrad-textbook mastery (can work problems cold) |
| PhD-track / career-changer into research | Master | Graduate research readiness (can read follow-on papers) |

A single learner can use different tiers per unit. Tier is per-unit, per-session.

**Honest v0.x audience reality.** If the pilot is apex-first (Master-tier content at the top of Fast Track), the *launch* audience is effectively only the PhD-track profile. Beginner and Intermediate profiles cannot consume Codex until the prerequisite chain fills in at those tiers (which is later waves of production). v0.x is, in practice, a graduate reference that is becoming a full mastery platform. Be honest about this in product communications: do not advertise "anyone can use Codex" when only the Master-tier profile can, yet.

---

## 3. Non-negotiable invariants

These are fixed. Changing any of them is a scope discussion, not an implementation choice.

1. **Three tiers with literature anchors.** Beginner ≈ 3Blue1Brown / Strogatz. Intermediate ≈ Axler / Apostol / Griffiths. Master ≈ Lang / Hartshorne / Weinberg / Bott-Tu. Anchors resolve "what tier is this?" to "point at this book — does it match?"
2. **Progressive disclosure, single source.** One source file per unit with `[Beginner]` / `[Intermediate+]` / `[Master]` section markers. Tier = UI filter, not separate lesson.
3. **Lean 4 is ground truth where Mathlib covers — *flagged* elsewhere, not a gate.** At Intermediate+, any formalizable theorem with Mathlib coverage must be formalized (`lean_status: full`). Where Mathlib is thin or absent (most of spin geometry, QFT, advanced algebraic geometry, most of physics), the unit ships with `lean_status: none` + a named human reviewer who signed off. This means Lean is a correctness *accelerator* where it applies and a *contribution roadmap* for the Mathlib gaps it reveals — it is not a universal quality gate. At the top of Fast Track, expect `lean_status: none` to dominate until Mathlib catches up or we contribute formalizations upstream.
4. **References must resolve.** Every `[ref: source locator]` citation points at a real file in `reference/`. Build-time check; unresolved = build fail.
5. **Mastery is operationalized, not vibes.** Per-tier endpoints (see §2) are testable. Exercises evidence the endpoint.
6. **Scope v1 = cross-domain Babel Bible.** Math and physics remain the technical spine, but chemistry (§14–16), biology (§17–19), philosophy (§20), language (§22), and world/social science (§23) are first-class v1 domains. Standalone computer science, medicine/clinical tracks, empirical psychology, K–8 arithmetic, localization, and credentialing remain v2+ scope.
7. **Cross-links across the whole graph.** A QFT unit can reference the vector-space unit directly. Users navigate the graph, not a linear table of contents.
8. **Content is tool-agnostic.** Markdown + Lean + structured YAML. Rendering/UI is a view layer, swappable. Platform choice (Astro / Neutron / etc.) does not affect content correctness.

---

## 4. The unit

A **unit** is the atomic piece of curriculum: one concept, ~20–50 min of Master-tier reading time. Single markdown source file at `content/<section>/<chapter>/<id>-<slug>.md`. Frontmatter declares id, prerequisites, successors, tier anchors, references, Lean module, Lean status, estimated time, and status.

Sections with tier markers (Beginner 4, Intermediate+ 4, Master 5) allow the UI to filter per learner.

**Full details in `docs/specs/UNIT_SPEC.md`.**

**Tier completion is per-unit flexible.** A unit *may* ship with only Master-tier content filled in and backfill Beginner / Intermediate later. Frontmatter declares which tiers are present (`tiers_present: [master]`). Reviewer rubric keys off present tiers only.

---

## 5. Production strategy (explicitly flexible)

The invariants (§3) do not constrain production order or tier completion. These are orthogonal choices made per wave.

### DAG growth is bidirectional

- **Top-down**: start from apex units (apex = no successors yet declared). Pulling in prerequisites generates new unit IDs that become next wave's queue.
- **Bottom-up**: start from leaf units (leaf = no prerequisites). Each shipped leaf unblocks downstream units.
- **Mixed**: any wave can pick either end. Both grow the same DAG.

### Tier completion per unit

Each unit has a `tiers_present` frontmatter field: subset of `[beginner, intermediate, master]`. A unit can ship with just `[master]` and be tier-completed in a later wave when prerequisite tier units exist.

**Reason tier flexibility matters:** writing Beginner-tier content for Master topics (e.g., spin geometry) requires the Beginner-tier prerequisite chain to already exist (the learner needs Beginner-tier linear algebra, Lie groups, Clifford algebras first). Forcing all-tiers at production time couples every top unit to a 2-year-ahead prereq-chain completion. Decoupling lets top-down production ship.

### Apex-first production (recommended for research-adjacent pilot)

1. Pick ~10 apex units at the top of Fast Track (example candidates: Atiyah-Singer index theorem, Dirac operator, spin structures, Clifford algebras, Yang-Mills action, Chern-Weil homomorphism, characteristic classes, Bott periodicity, Fredholm operators, conformal field theory basics).
2. Produce Master-tier only. Mark `tiers_present: [master]`, set unfilled tiers' frontmatter fields to `deferred`.
3. Each produced apex declares prereq unit IDs that don't exist yet → those become the next wave queue.
4. Lower waves produce prereq units, backfilling tier coverage bottom-up.
5. Lower tiers (Intermediate / Beginner) of apex units get added once the prereq chain of that tier exists.

**Honest cost accounting for apex-first:** shipping a unit as Master-only does *not* reduce the eventual Beginner/Intermediate work — those tiers require the Beginner/Intermediate prerequisite chain to exist before they can be written. Total tier-completion work across the curriculum is the same either way. The *win* of apex-first is narrower: you validate the Master-tier production pipeline before tackling the harder pedagogical problem of Beginner-tier content synthesis. Do not expect apex-first to "save time" in aggregate; expect it to *reduce risk* by isolating one variable (Master-tier pipeline) before introducing another (Beginner-tier synthesis).

### Leaf-first production (alternative, for literacy-focused rollouts)

1. Pick ~10 leaf units at the pre-calc ramp (example: real numbers, functions, linear equations, vectors, matrices, limits, derivatives, integrals, sequences, series).
2. Produce all three tiers. Each tier is producible from day 1 because prereqs are essentially nothing.
3. Each produced leaf unblocks downstream units.
4. Successive waves walk up the DAG.

### What production strategy the pilot uses is a separate decision

The overview does not lock this. Other waves can use a different strategy without violating any invariant.

---

## 6. Quality system

### Review roles

- **Mathematical reviewer** — verifies correctness. Lean compile = pass where Mathlib covers. Domain expert otherwise (~30 min per unit budget).
- **Domain reviewer** — verifies chemistry, biology, philosophy, language, and world/social-science content where Lean is irrelevant. The reviewer checks mechanisms, evidence, source interpretation, argument reconstruction, historical claims, and case framing against the relevant anchor literature.
- **Pedagogical reviewer** — verifies tier-appropriate pedagogy against rubric. Each tier has its own checklist (Beginner: no undefined notation, reading level ≤ grade 10, visual present. Intermediate: formal def + theorem + 5–10 exercises. Master: Lean where Mathlib covers, historical context with primary citations.)
- **Integrator** — resolves cross-refs, updates dependency graph, checks notation glossary.
- **Copy editor** — prose quality.

### Reviewer bandwidth is the actual bottleneck

At ~30 min expert review per unit × ~1500 units = ~750 hours of domain-expert time before the newer domains are counted. With chemistry, biology, philosophy, language, and world included, reviewer bandwidth becomes the central scaling constraint. Tyler alone cannot review all topics at Master-tier fluency.

**Reviewer strategy is a Phase 1 deliverable, not an afterthought.** See `docs/plans/REVIEWER_PLAN.md` for the concrete plan (who reviews, incentives, escalation when no expert is available, LLM-augmented review with human spot-check policy). Without this solved, Master-tier scaling stalls no matter how fast production runs.

### Automated checks (build-time)

- Every reference citation resolves to a real archive file.
- Every cross-ref `[unit-id]` points at an existing published unit (or an allow-listed pending one for top-down mode).
- Notation used without a glossary entry flagged.
- Tier section markers well-formed; no `[Master]` content in `[Beginner]` sections.
- Lean modules compile as part of the Babel Bible Lean project.
- Frontmatter schema valid (all required fields present).

### Per-tier rubrics

Full rubric in `docs/specs/QUALITY_RUBRIC.md` (to be written). Each tier has a pass/fail checklist keyed to §3 and UNIT_SPEC. If `tiers_present` doesn't include a tier, that tier's rubric doesn't run.

---

## 7. Agent orchestration

Six roles with canonical JSON handoff manifests. See `docs/plans/AGENT_PRODUCTION_PLAYBOOK.md` for the operating recipe.

| Role | In | Out |
|---|---|---|
| Scanner | Unit spec + concept | Ranked archive passages (RAG) |
| Producer | Spec + passages | Draft unit |
| Mathematical reviewer | Draft | pass/flag + errors |
| Pedagogical reviewer | Draft | pass/flag vs rubric |
| Integrator | Approved unit | Final with cross-refs resolved |
| Copy editor | Final | Polished |

Parallelization is topological-sort-based: units with no unproduced prereq can run concurrently.

---

## 8. Pipeline stages

| Phase | Deliverable | Status |
|---|---|---|
| 0 | Reference archive (~1 GB, 11 sources) | Done |
| 1 | Scaffold (this doc, UNIT_SPEC, DEPENDENCY_MAP, REVIEWER_PLAN) — rubric *after* pilot unit #1, not before | Complete |
| 1.5 | RAG layer over the reference archive (embeddings + retrieval for Scanner role) | Pending |
| 2a | Pilot unit #1: produced manually (no agents), used as rubric-seed | Pending |
| 2b | `docs/specs/QUALITY_RUBRIC.md` distilled from unit #1's actual output + failure modes | Pending |
| 2c | 9 more pilot units produced using the rubric (mix of manual + agent-assisted) | Pending |
| 3 | Iterate specs from pilot learnings | Pending |
| 4 | Parallel scale via agent swarm | Pending |

**Why Phase 1.5 (RAG) exists explicitly:** the Scanner agent role assumes retrieval over the 1 GB archive. `TOPIC_INDEX.md` is keyword-matched against filenames — too coarse for per-unit reference selection. Embeddings + vector store + retrieval layer is a prerequisite to any agent-assisted production. Cannot skip.

**Why rubric-after-pilot-unit-#1:** rubrics written before seeing real output capture imagined failure modes, not real ones. Produce one unit manually, see what actually goes wrong, then distill the rubric from those specific failures. Do not front-load theoretical rubric work.

---

## 9. Data layer

```
codex/
├── README.md                     # repo intro
├── AGENTS.md                     # agent entry point (doc map + reading order)
├── OVERVIEW.md                   # you are here
├── docs/                         # all planning + spec + catalog material
│   ├── pilot-lessons.md          # consolidated production-lesson log
│   ├── plans/                    # AGENT_PRODUCTION_PLAYBOOK, MATH_EXPANSION_ORCHESTRATION, AGENTIC_EXECUTION_PLAN, FASTTRACK_*, SITE_PLAN, REVIEWER_PLAN
│   ├── specs/                    # UNIT_SPEC, QUALITY_RUBRIC, ORCHESTRATION_PROTOCOL, CONTINUITY_SCAFFOLD, FASTTRACK_FLOW_SCAFFOLD
│   ├── catalogs/                 # CONCEPT_CATALOG, DEPENDENCY_MAP, MATHLIB_GAPS, FASTTRACK_BOOKLIST, NEED_TO_SOURCE
│   └── batches/                  # paste-ready GPT batch scaffolds (V05_GPT_BATCH_*, WAVE_4_GPT_BATCH)
├── reference/                    # external archive (Phase 0, done; gitignored)
├── content/                      # produced units (Phase 2+)
│   ├── 00-precalc/
│   ├── 01-foundations/
│   ├── 02-analysis/
│   ├── 03-modern-geometry/
│   ├── 04-algebraic-geometry/
│   ├── 05-symplectic/
│   ├── 06-riemann-surfaces/
│   ├── 07-representation-theory/
│   ├── 08-stat-mech/
│   ├── 09-classical-mech/        # physics proper
│   ├── 10-em-sr/
│   ├── 11-stat-mech-physics/
│   ├── 12-quantum/
│   ├── 13-gr-cosmology/
│   ├── 14-genchem-pchem/         # chemistry
│   ├── 15-orgchem/
│   ├── 16-inorgchem/
│   ├── 17-mol-cell-bio/          # biology
│   ├── 18-organismal-bio/
│   ├── 19-eco-evo-bio/
│   ├── 20-philosophy/
│   ├── 22-language/
│   └── 23-world/
├── _meta/
│   └── NOTATION.md               # project-wide notation glossary
├── style/
│   └── editorial-voice.md        # voice and prose conventions
├── lean/                         # Codex.* Lean 4 project
├── scripts/                      # orchestration tooling (validators, RAG, fetchers)
├── plans/fasttrack/              # per-book Fast Track equivalence plans (long-form)
├── manifests/
│   ├── campaign.json             # cross-strand orchestration log
│   ├── connections.json          # cross-unit semantic connections
│   ├── deps.json                 # dependency graph (JSON adjacency list)
│   └── units/*.json              # per-unit pipeline-status manifests
├── logs/                         # sourcing run logs
└── site/                         # Astro companion site
```

---

## 10. Platform strategy

**Content is tool-agnostic and stays that way.** Markdown + Lean + structured YAML and JSON. Any renderer can consume it.

**Platform roadmap:**
- v0.1 pilot: static render (Astro or similar) to prove the pipeline works.
- v0.5: exercise-answering + auto-check (frontend build-out).
- v1.0: Lean-in-browser (WASM Lean + Mathlib).
- v1.5: spaced-repetition scheduling + accounts.
- v2.0: personalized paths, mastery-gating.

**Framework commitment (2026-04-23):** built on **Neutron (TS framework)** + **Nucleus (database)** — both Tyler's own. Babel Bible is a load-bearing consumer of both, which means Codex drives their requirements and Codex uncovers their bugs. No Astro/Next interim scaffold; go direct.

**Known Neutron/Nucleus dependencies Babel Bible imposes:**
- **Nucleus leak must be fixed before Phase 2c** (persistence layer for unit manifests and learner progress). Currently tracked as an open Neutron bug; blocker for any agent-scale production.
- Markdown + YAML rendering pipeline in Neutron must support: tier-marked sections (§4 of OVERVIEW), `[ref:]` and `[unit-id]` citation syntaxes (UNIT_SPEC §8–9), exercise fence (`::: exercise`) rendering, Lean code blocks with WASM evaluation (later).
- Build-time reference-resolution (unresolved citation = build fail) needs to live in the Neutron build step.

**Content does not depend on platform choice.** Markdown + YAML + Lean source files are tool-agnostic. If Neutron timeline slips beyond pilot needs, content can still be produced and reviewed; rendering is the only piece gated on Neutron.

---

## 11. What's fixed vs what's open

### Fixed (§3 invariants and these):

- Audience entry requirement (high-school algebra)
- Three-tier structure + literature anchors
- Progressive disclosure, single-source unit
- Lean ground truth at Intermediate+ where Mathlib covers
- Build-time reference-resolution
- Mastery operational definitions
- Scope v1 = cross-domain Babel Bible: math, physics, chemistry, biology, philosophy, language, and world/social science
- Cross-link graph architecture
- Tool-agnostic content

### Open (deferrable — decided per wave / per pilot / per platform milestone):

- **Pilot production strategy** (top-down vs bottom-up vs mixed) — recorded in `docs/plans/PILOT_PLAN.md`
- **Which 10 specific apex (or leaf) units seed the pilot** — in `docs/plans/PILOT_PLAN.md`
- **Whether v1 ships Master-only and tiers backfill later, or all-tiers-at-once** — recorded per unit via `tiers_present`
- **Specific Mathlib target modules to prioritize contributing to** — emerges from `lean_status: none` flags in produced units
- **Exact coverage boundaries inside language/world** — recorded in `docs/plans/LANGUAGE_WORLD_PLAN.md` and revised as content matures
- **Whether some philosophy/language/world subsections split into their own top-level domains** — defer until the current §20/§22/§23 namespaces are saturated
- **Platform for v0.1 pilot rendering** (Astro / Next / minimal custom)
- **Interactivity milestones calendar** (v0.5 through v2.0)
- **Agent swarm vendor / orchestration runtime** (whichever Tyler is using)
- **Reviewer roster and incentives** — recorded in `docs/plans/REVIEWER_PLAN.md`
- **Canonical concept catalog per subject per tier** — recorded in `docs/catalogs/CONCEPT_CATALOG.md`; resolves DAG free-degrees (two producers can't declare different prereqs for the same unit if the concept list is canonical)

---

## 12. Decision log

Chronological record of scope-affecting decisions, so future contributors can understand why things are the way they are.

| Date | Decision | Rationale |
|---|---|---|
| 2026-04-17 | Project named `babel-bible` | Latin for bound book of knowledge; distinct from existing project names |
| 2026-04-17 | Reference archive scope = 11 sources (9 in-scope + 1 excluded + 1 future) | Math/physics coverage; Rowlands CS and Reading Feynman excluded from production |
| 2026-04-18 | Three tiers via progressive disclosure (not 2) | Matches existing textbook literature anchors; UI filter keeps production cost ~1.3× not 3× |
| 2026-04-18 | Interactivity is core, not optional | Without it Babel Bible is just a better textbook; interaction is the structural advantage |
| 2026-04-22 | Framework-first: Neutron + Codex co-develop | Codex drives Neutron requirements; avoids stack context-switching |
| 2026-04-22 | Content stays tool-agnostic | Platform choice can change without rewriting units |
| 2026-04-22 | Production order is flexible per wave (top-down / bottom-up / mixed) | Invariants don't constrain order; pilot can start anywhere in the DAG |
| 2026-04-22 | Tier completion is per-unit flexible | Top-down production on apex units ships Master-only and backfills tiers later |
| 2026-04-23 | Lean invariant weakened: `lean_status: none` acceptable at frontier with named human reviewer | Mathlib doesn't cover spin geometry / QFT / most graduate physics; Lean-as-gate would block apex-first pilot entirely |
| 2026-04-23 | v0.x audience honestly scoped to PhD-track only during apex-first pilot | Beginner/Intermediate profiles cannot consume until prereq chains fill in per tier; do not advertise those profiles as served at v0.x |
| 2026-04-23 | RAG layer added as Phase 1.5 (before agent production) | Scanner agent role assumes retrieval; TOPIC_INDEX keyword-matching too coarse |
| 2026-04-23 | `docs/specs/QUALITY_RUBRIC.md` written *after* pilot unit #1, not before | Rubrics written from imagined failure modes miss real ones; pilot output seeds real rubric |
| 2026-04-23 | `docs/plans/REVIEWER_PLAN.md` added as Phase 1 deliverable | Reviewer bandwidth is the actual scaling bottleneck (~750 hours expert time for v1) and was previously unaddressed |
| 2026-04-23 | `docs/catalogs/CONCEPT_CATALOG.md` added to resolve DAG free-degrees | Without canonical concept lists per subject/tier, producers declare inconsistent prereqs for the same unit |
| 2026-04-23 | Platform: Neutron (TS framework) + Nucleus (database); no interim Astro | Dogfooding drives Neutron maturity; content remains tool-agnostic so pilot can proceed in parallel with Neutron development |
| 2026-04-23 | Nucleus leak is a hard blocker before Phase 2c | Agent-assisted production writes unit manifests and progress to Nucleus; leak must be fixed before scaling |
| 2026-04-27 | Pool leak fixed (`ClientWithDriver` wrapper aborts driver on drop); 83 nucleus-client tests + 3597 nucleus-lib tests passing | Belt-and-suspenders cancellation under runtime-shutdown / panic / cancel paths |
| 2026-04-27 | mimalloc as default global allocator (Nucleus); jemalloc demoted to opt-in feature | Universal build (incl. macOS ARM64); ~5–10% perf delta acceptable; jemalloc still available for Linux production tuning |
| 2026-04-27 | RAG: BGE-large-en-v1.5 local model + Nucleus VECTOR(1024) HNSW storage | Dogfoods Nucleus vector model; no API key; no vendor lock-in |
| 2026-04-27 | Pilot unit #1 produces with reference-gap markers (Lawson-Michelsohn pending) | Path (B) chosen — pilot stress-tests citation-gap handling; backfill LM citations once sourced |
| 2026-04-27 | Pilot unit #1 (Clifford algebra) shipped — 27/27 rubric, three tiers, dual-agent reviewed | First completed unit; pattern established for downstream production |
| 2026-04-27 | Pilot unit #2 (Spin structure) shipped Master-only — 20/20 rubric | Validates apex-first production; Beginner/Intermediate backfill pending prereq chain |
| 2026-04-27 | Site renderer live: Neutron-based, three themes, three tiers, KaTeX SSR, citation panel, filterable units | Phase B (rendering polish) + part of Phase C |
| 2026-04-27 | Neutron upstream patch: `markedExtensions` config slot wired through CLI/SSR | Plain `.md` files now get plugin support; `marked-katex-extension`, `marked-directive`, custom `[ref:]` and `[unit-id]` tokens all work SSR |
| 2026-04-27 | Wave A complete: validator-in-build, citation footnote panel, filterable nav (units/concepts/dag) | Hardened pipeline before content scaling |
| 2026-04-27 | Pilot unit #3 (Fredholm operators) shipped — 27/27 rubric, three tiers | Functional-analysis subject area; stress-tests spec on territory disjoint from spin geometry |
| 2026-04-27 | Lean lakefile + top-level Codex.lean library | `lean_status: partial` units now have a real build target; CI can `lake build` going forward |
| 2026-04-27 | `docs/catalogs/MATHLIB_GAPS.md` aggregator added | Auto-generated upstream-contribution roadmap from unit `lean_mathlib_gap` fields; 3 gaps tracked |
| 2026-04-27 | UNIT_SPEC patched (5 gaps from pilot lessons): `pending_prereqs` flag, `deferred` tier-anchor value, `pending+pointer` reference schema, Lean module path verification, `partial` lean_status statement-compile gate | Spec gaps surfaced by manual production of unit #1; closed before scaling |
| 2026-04-27 | `docs/specs/QUALITY_RUBRIC.md` distilled from docs/pilot-lessons.md (not pre-written) | 19 automated checks + tier-specific human-judgment items; mechanically enforceable by validator |
| 2026-04-27 | `scripts/validate_unit.py` ships; runs the automated rubric in seconds; unit #1 passes 19/19 | Quality gate is now machine-checkable before any human reviewer touches a unit |
| 2026-04-27 | Lean module skeleton at `lean/Codex/SpinGeometry/CliffordAlgebra.lean` with theorem statements | Resolves `lean_status: partial` minimum-bar promise; statements compile, ABS classification marked as Mathlib gap |
| 2026-04-27 | `manifests/deps.json` seeded with pending-prereq edges from unit #1 | DAG growth bookkeeping is now real, not theoretical |
| 2026-04-27 | `content/_meta/NOTATION.md` seeded with notation introduced by unit #1 | Glossary populated; validator can now check unregistered-symbol usage |
| 2026-04-27 | `docs/catalogs/CONCEPT_CATALOG.md` expanded with 5 prereq concepts unit #1 declares | Resolves DAG free-degrees for the spin-geometry branch |
| 2026-05-22 | v1 scope updated to match the live repo: chemistry (§14–16), biology (§17–19), philosophy (§20), language (§22), and world/social science (§23) are first-class alongside math and physics | The content tree and site already contain these domains; treating them as v2 would make the specs and validators lie about the project surface |
| 2026-05-22 | Non-math domains use domain-appropriate Intermediate/Master evidence: mechanism and derivation for science, argument reconstruction for philosophy, syntactic/literary analysis for language, and case/model/source analysis for world | A universal "key theorem with proof" gate is too narrow; rigor must be preserved by matching the review object to the discipline |
| 2026-05-22 | Language/world get a dedicated plan and rubric overlay rather than being folded into philosophy or treated as informal extras | The repo contains substantial §22/§23 unit sets and essays; they need source, exercise, and review standards of their own |

---

## 13. Next immediate actions

The original bootstrap sequence (seed the DAG, run the pilot, distill the rubric,
stand up agent orchestration) is complete — the project is now in continuous
autonomous expansion at ~2,400 units. For current state and what to do next, see
`SESSION_NOTES.md` (live status) and `plans/expansion/BACKLOG.md` (production
queue). Reading order for any new agent is in `AGENTS.md`.

---

*This document is the canonical reference. When uncertain, check here first. When updating invariants, update here and propagate.*
