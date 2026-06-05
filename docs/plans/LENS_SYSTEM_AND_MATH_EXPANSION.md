# Codex — Lens System & Math Expansion Plan

How the site lets a user toggle to "exactly and only what they want to learn,"
and how the math content grows from the Fast Track (theoretical-physics) slice
toward broader mathematics — without ever re-tagging units by hand.

Status: PLAN (2026-06). Site lives at `B.I.B.L.E/site/` (Neutron). Build tooling
is Python under `scripts/` (consistent with `build_production_plan.py`).

---

## 1. Goal & principles

- A user picks a **lens** (Theoretical Physics, Pure Math, Probability, a course…)
  and the math pages show exactly the units that lens contains, in a learnable order.
- Adding a new field later (combinatorics, logic, …) must require **zero re-tagging**
  of existing units. New units join the right lenses automatically.
- A lens is always a **complete, in-order path**, never a disconnected pile.

Three non-negotiable principles:

1. **Units describe themselves; lenses select them.** Never write product taxonomy
   ("track: physics") into a unit. Units carry intrinsic facts; lenses are queries.
2. **Many-to-many, multi-axis.** A unit is in Physics *and* Pure Math *and* a topic.
   Never force one bucket.
3. **The prerequisite graph is the spine.** "What to learn / in what order" is computed
   from `prerequisites`, not hand-maintained.

---

## 2. The three concepts (keep these separate)

| Concept | Question it answers | Where it lives | Cardinality |
|---|---|---|---|
| **Field** | what IS this unit? | derived from `section`/`chapter` via a mapping table (no per-unit edit) | 1 primary (+ optional secondary) |
| **Source** | which book did it come from? | `source_books: [...]` in frontmatter, backfilled from the audit trail | list |
| **Lens** | what does the USER want to see? | `lenses/*.yaml` manifests (product curation) | many, composable |

Conflating these is the usual failure. Field = intrinsic subject. Source = provenance.
Lens = the toggle. The "Theoretical Physics" toggle is a *lens* backed by the Fast Track
*source*; "Probability" is a *lens* backed by the Probability *field*.

---

## 3. Unit metadata (the axes a lens can query)

Already present per unit: `id`, `section`, `chapter`, `prerequisites`, `successors`,
`tiers_present`, `concept_catalog_id`.

To add:
- **Field** — NOT a new per-unit tag. A `manifests/field_map.yaml` maps every
  `section` (and a few chapter overrides) to a field id from the taxonomy in §6.
  Cheap, central, no file churn. Example: `03-modern-geometry -> geometry-topology`.
- **Source** — `source_books: [<book-id>, ...]` in frontmatter. This is genuinely
  intrinsic and otherwise lossy (a unit's section ≠ the book that drove it). Backfilled
  programmatically: every `plans/fasttrack/_deepen/*.gaps.md` and audit file records
  which book produced which unit ids; a one-time script writes `source_books` into
  frontmatter. Units with no recorded source (shared foundations produced directly)
  get `source_books: [foundational]`.
- **Topic tags** (`topics: [...]`) — DEFER. Cross-cutting themes (supersymmetry,
  index-theorem). Expensive, low early-ROI. Add when a user actually wants them.

---

## 4. The lens system

A lens manifest (`lenses/theoretical-physics.yaml`):

```yaml
id: theoretical-physics
label: Theoretical Physics
description: The mathematics a theoretical physicist needs — the Fast Track.
seed:                      # the rule that selects the lens's CORE units
  any:
    - source_in: [fast-track]
    - field_in: [math-physics]
include: []                # manual pins (force-add unit ids)
exclude: []                # manual removals
group_by: field            # default browse grouping (field | curriculum | tier)
order: dependency          # dependency | curriculum | id
```

Resolution (the clever part) — `build_lenses.py` computes:

> **lens units = seed ∪ prerequisite-closure(seed)**, minus `exclude`, plus `include`.

- **Seed** = the core units the rule selects (marked `core`).
- **Closure** = every prerequisite of a seed unit, recursively (marked `supporting`).
  This auto-includes shared foundations (measure theory, linear algebra) *because the
  path depends on them* — so foundations are never tagged per-lens.
- **Validation** (same rigor as the 27/27 unit validator): the resolved set must be
  dependency-closed. A seed unit whose prereq is neither included nor explicitly marked
  `external` is a BUILD ERROR. Guarantees every lens is actually learnable.

Lenses are composable underneath (queries AND/OR), but the MVP ships a flat set of
presets. Custom user-built lenses come later.

---

## 5. Site information architecture

Persistent **lens toggle** in the header/sidebar (sticky across pages; defaults to
"Theoretical Physics" since that is the current corpus, switchable to "All" / "Pure Math").

Page hierarchy, all reshaped by the active lens:

1. **Math hub** (`/math`) — cards for each field present in the active lens
   (Geometry & Topology, Algebra, Probability…), each showing unit count + progress.
   This is the "math page" with the toggle. Under the Physics lens you see the physics-
   relevant fields; flip to Probability and the page reshapes.
2. **Field page** (`/math/<field>`) — the chapter tree for that field, lens-scoped,
   in dependency order. Core units prominent; supporting/prereq units shown subtly.
3. **Chapter page** (`/math/<field>/<chapter>`) — the units in that chapter.
4. **Unit page** (`/math/.../<id>`) — the 3-tier content, lens badges (which lenses it
   belongs to), and **Prerequisites / Next** navigation from the DAG.
5. **Path view** (later) — "I want to learn X" → ordered prerequisite closure to X as a
   walkable syllabus, optionally intersected with a lens.

Secondary controls on browse pages: **group-by** (field / curriculum-module / tier) and a
**tier filter** ("only Beginner intuition"). The lens sets sensible defaults.

---

## 6. Field taxonomy (= the filter categories = the content roadmap structure)

This single list is BOTH what users filter by AND how we plan content. Each field's
status against the current corpus:

**Pure mathematics**
| Field id | Label | Status |
|---|---|---|
| foundations-logic | Foundations, Logic & Category Theory | stub (tiny 24/25-logic) |
| algebra | Algebra (groups, rings, fields, Galois, homological) | partial (strong basics) |
| number-theory | Number Theory (algebraic + analytic) | partial (algebraic only) |
| combinatorics | Combinatorics & Graph Theory | absent |
| geometry-topology | Geometry & Topology (diff geom, alg top, geom top, symplectic) | STRONG |
| algebraic-geometry | Algebraic Geometry | STRONG |
| analysis | Analysis (real, complex, functional, harmonic, measure) | partial (core strong) |
| differential-equations | ODE & PDE | partial (basics + microlocal) |
| probability | Probability & Stochastics | seeded (this session) |
| dynamics | Dynamical Systems & Ergodic Theory | absent |
| representation-theory | Representation Theory | STRONG (Lie-heavy) |
| operator-algebras | Operator Algebras & Noncommutative Geometry | thin |

**Applied & computational**
| Field id | Label | Status |
|---|---|---|
| numerical-analysis | Numerical Analysis & Scientific Computing | absent (FEEC only) |
| optimization | Optimization & Control | absent |
| statistics | Statistics & Learning Theory | thin |
| information-theory | Information & Coding Theory | absent |
| theoretical-cs | Theoretical Computer Science | absent |

**Mathematical physics** (the existing strength; cross-cuts the above)
| math-physics | Classical / Quantum / Statistical / Field theory / GR | STRONG |

---

## 7. Content roadmap (spines, anchor books, sequencing)

Method per spine = the proven loop: assemble a booklist → audit each book against the
live corpus (verify-don't-assume) → produce only genuine gap units → integrate. Each
spine ≈ 5–12 books ≈ ~80–150 units (less where foundations exist).

**Sequencing by synergy with the existing corpus** (do these in order):

1. **Probability & Stochastics** — *already seeded.* Finish it: martingale theory in
   depth, Markov chains, large deviations (Dembo-Zeitouni), random matrices
   (Anderson-Guionnet-Zeitouni), Brownian motion/SDE depth (Le Gall). Anchors: Durrett,
   Williams, Le Gall, Billingsley. **First — it feeds analytic NT, dynamics, statistics.**
2. **Modern PDE & Harmonic Analysis** — extends the existing analysis/microlocal. Anchors:
   Evans, Gilbarg-Trudinger, Stein (Singular Integrals; Harmonic Analysis), Tao.
3. **Analytic Number Theory** — uses the complex analysis already present. Anchors:
   Davenport, Montgomery-Vaughan, Iwaniec-Kowalski. (PNT, ζ/L-functions, sieves.)
4. **Dynamical Systems & Ergodic Theory** — extends ODE. Anchors: Katok-Hasselblatt, Walters.
5. **Operator Algebras & NCG** — extends index theory/K-theory. Anchors: Takesaki,
   Brown-Ozawa, Connes.
6. **Combinatorics & Graph Theory** — orthogonal but core to pure math. Anchors: Stanley
   EC I/II, Diestel, Alon-Spencer, Flajolet-Sedgewick.
7. **Foundations & Logic** — orthogonal. Anchors: Enderton, Marker, Kunen, Soare; plus a
   proper Category Theory spine (Mac Lane, Riehl) extending the single 01.02.09 unit.

Completing 1–7 takes pure math from ~47% to ~85%.

**Tier B (applied/computational) — only if the Codex is meant to be universal**, lower
synergy: Numerical Analysis (Trefethen-Bau, Golub-Van Loan, LeVeque), Optimization
(Boyd-Vandenberghe, Nocedal-Wright, Rockafellar), Statistics & Learning (Casella-Berger,
van der Vaart, Hastie-Tibshirani-Friedman), Information Theory (Cover-Thomas), Theoretical
CS (Sipser, Arora-Barak). Tier A+B ≈ doubles the corpus, → ~70% of all math.

---

## 8. Build pipeline (new scripts)

- `scripts/backfill_sources.py` — read the audit trail (`plans/fasttrack/` + `_deepen/`)
  and write `source_books` into unit frontmatter. One-time, idempotent, re-runnable.
- `manifests/field_map.yaml` — section/chapter → field id.
- `scripts/build_unit_index.py` — emit `site/data/units.json`
  (id → section, chapter, field, source_books, tiers, prerequisites, title, slug).
- `scripts/build_lenses.py` — resolve each `lenses/*.yaml` → `site/data/lenses/<id>.json`
  (ordered TOC = seed + closure, grouped, validated dependency-closed).
- Site (Neutron) consumes the static JSON. Postgres enters ONLY later, for user accounts
  + progress state (done / ready / locked), not for content or lenses.

---

## 9. Phased execution

**Phase 0 — Architecture (do first; scope-independent).**
1. Define `manifests/field_map.yaml` (section → field).
2. `backfill_sources.py` → `source_books` on all ~1500 units.
3. `build_unit_index.py` + `build_lenses.py`.
4. Author 3 lenses: `all`, `theoretical-physics` (Fast Track), `pure-math`.
5. Neutron: the lens toggle + the lens-aware math hub + field/chapter pages.
   (Right now Physics and All ≈ the whole corpus — correct, and proves the pipeline.)

**Phase 1 — First content spine.** Finish Probability & Stochastics (§7.1). The instant
it lands, the Probability lens separates cleanly from Physics — the live proof the system
works.

**Phase 2+ — Remaining spines** (§7, in order), then optionally Tier B. Add the
goal→syllabus path view and progress/accounts when the Codex is ready to be a platform,
not just a reference.

---

## 10. Open decisions (your call)

- **Scope ceiling:** pure math only (Tier A) vs. all math (Tier A+B). Drives whether
  Tier B is ever built. Reversible — the architecture is identical either way.
- **Default lens:** "Theoretical Physics" (honest to current content) vs. "All."
- **Curriculum lenses:** beyond field lenses, expose book-curricula (the literal Fast
  Track Sections 1/2/3) as their own toggles? Cheap to add once Source is tagged.
