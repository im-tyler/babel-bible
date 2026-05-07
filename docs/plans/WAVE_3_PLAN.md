# Codex — Wave 3 Plan

**Wave 3.** Production of the foundational prerequisites that Wave 2's pulled-prereq units declared as `pending_prereqs: true`. Where Wave 1 was the apex (10 units) and Wave 2 the first prereq layer (~30 units), Wave 3 reaches the foundational stratum: smooth manifold, Lie group, differential forms, topological space, normed/metric/inner-product spaces, basic algebra (group, ring, ideal), tensor product, covering space, etc.

Read `OVERVIEW.md` §5 (production strategy), `docs/catalogs/DEPENDENCY_MAP.md` §5–§6 (DAG layout and convergence), `docs/plans/PILOT_PLAN.md` (Wave 1 retrospective), `docs/pilot-lessons.md` (Wave 1 + Wave 2 production lessons), `docs/specs/QUALITY_RUBRIC.md` (the validator gate, including LM Master prose standard from §M).

---

## 1. Wave 3 scope

Wave 3 closes the remaining `pending_prereqs: true` flags across all currently-shipped units (Wave 1 + Wave 2). After Wave 3, every shipped unit's prerequisites should resolve to other shipped units — the DAG becomes traversable from leaf to apex.

Estimated unit count: **~18–22 foundational units**, organized into 3–4 parallel branches that are each largely independent:

- **Topology branch** (foundational): topological space, continuous map, compactness, Hausdorff, connectedness, covering space, homotopy
- **Smooth-manifold branch**: smooth manifold, smooth map, tangent space, tangent bundle, differential forms, exterior derivative, integration prerequisites
- **Algebra branch**: group, ring, ideal, associative algebra, tensor product, Lie group, group action, orthogonal group
- **Analysis branch**: metric space, normed vector space, inner product space, completeness, differential operator (analytic side)

These branches are largely independent within Wave 3, so Wave 3 is the second real test of parallel agent production (after Wave 2). Wave 3 should ship in 3–4 batches over a similar window to Wave 2.

## 2. Pulled-prereq enumeration by source unit

What each Wave 2 unit declared as a still-pending prerequisite. Many entries are duplicated across units — those become high-leverage Wave 3 production targets.

### From Phase 2.1 units

| Wave 2 unit | Pending prereqs (Wave 3 candidates) |
|---|---|
| `01.01.03` Vector space | Field, scalar, set theory primitives — *if pre-vector-space units are wanted; alternatively, fold into vector space's own Beginner tier* |
| `03.05.01` Principal bundle | Smooth manifold, Lie group, group action |
| `03.05.02` Vector bundle | Smooth manifold, vector space (shipped) |
| `03.04.06` De Rham cohomology | Smooth manifold, differential forms, exterior derivative |

### From Phase 2.2 units

| Wave 2 unit | Pending prereqs |
|---|---|
| `01.01.15` Bilinear/quadratic form | (clean — only depends on vector space, shipped) |
| `03.09.03` Spin group | Orthogonal group, Clifford (shipped) |
| `02.11.04` Banach space | Normed vector space, metric space, completeness |
| `02.11.08` Hilbert space | Inner product space, normed space (via Banach), completeness |
| `03.05.04` Vector-bundle connection | Vector bundle (shipped), smooth manifold |
| `03.05.07` Principal-bundle connection | Principal bundle (shipped), Lie algebra (shipped from Phase 2.3), smooth manifold |

### From Phase 2.3 units (assuming shipped)

| Wave 2 unit | Pending prereqs |
|---|---|
| `03.04.01` Lie algebra | Vector space (shipped), Lie group, smooth manifold |
| `03.06.05` Invariant polynomial | Lie algebra (shipped) |
| `02.11.01` Bounded linear operators | Banach (shipped) |
| `02.11.05` Compact operators | Bounded operators (shipped), Banach (shipped) |
| `03.05.08` Complex vector bundle | Vector bundle (shipped), complex structure on a vector space |
| `03.05.09` Curvature of a connection | Principal-bundle connection (shipped) |

### From Phase 2.4 units (planned)

| Wave 2 unit | Pending prereqs |
|---|---|
| `02.11.03` Unbounded self-adjoint operators | Hilbert (shipped), bounded (shipped), spectral theory rudiments |
| `03.09.07` Symbol of a differential operator | Differential operators, smooth manifold, cotangent bundle |
| `03.09.09` Elliptic operators on a manifold | Symbol (Phase 2.4), differential operators, smooth manifold |
| `03.04.03` Integration on manifolds | Differential forms, smooth manifold, orientation |
| `03.04.08` Variational calculus on manifolds | Differential forms, integration (Phase 2.4) |
| `03.11.01` Central extension of a Lie algebra | Lie algebra (shipped) |

### From Phase 2.5 units (planned)

| Wave 2 unit | Pending prereqs |
|---|---|
| `03.05.03` Orthogonal frame bundle | Principal bundle (shipped), orthogonal group |
| `03.05.05` Double cover | Covering space, principal bundle (shipped) |
| `03.01.04` Tensor algebra | Tensor product, vector space (shipped) |
| `03.01.05` Quotient algebra | Associative algebra, ideal |
| `03.08.01` Topological K-theory | Vector bundle (shipped), classifying space (Phase 2.5) |
| `03.08.04` Classifying space | Principal bundle (shipped), simplicial methods, homotopy |
| `03.08.06` Stable homotopy | Homotopy theory, homotopy groups, suspension |
| `03.11.02` Infinite-dim Lie reps | Lie algebra (shipped), central extension (Phase 2.4) |
| `03.11.03` Virasoro algebra | Central extension (Phase 2.4), Witt algebra |

## 3. Consolidated Wave 3 production queue

Pulled prereqs that appear across multiple Wave 2 units (high leverage). Wave 3 should produce these first.

### Tier A — high leverage (≥4 downstream uses)

| Pulled ID (proposed) | Title | Appears in |
|---|---|---|
| `03.02.??` (TBD) | **Smooth manifold** | Principal bundle, Vector bundle, De Rham, Vector-bundle connection, Principal-bundle connection, Lie algebra, Symbol of operator, Elliptic operators, Integration, Variational calculus — **≥10 units** |
| `03.04.??` (TBD) | **Differential forms** | De Rham, Integration, Variational calculus, exterior derivative — **≥3 units** (and the foundation for several more) |

### Tier B — medium leverage (2–3 downstream uses)

| Pulled ID (proposed) | Title | Appears in |
|---|---|---|
| `03.??.??` | **Lie group** | Principal bundle, Lie algebra |
| `03.??.??` | **Group action** | Principal bundle |
| `02.??.??` | **Topological space** | Topology branch is foundational; needed by Banach, Hilbert, K-theory, classifying space, etc. — though most units don't explicitly cite it |
| `02.??.??` | **Metric space** | Banach |
| `02.??.??` | **Normed vector space** | Banach, Hilbert (via completeness) |
| `02.??.??` | **Inner product space** | Hilbert |
| `03.??.??` | **Tensor product** | Tensor algebra, Complex vector bundle |
| `03.??.??` | **Orthogonal group** | Spin group, Orthogonal frame bundle |
| `03.??.??` | **Covering space** | Double cover |
| `03.??.??` | **Differential operator** (general) | Symbol, Elliptic operators |
| `03.??.??` | **Homotopy / homotopy group** | Classifying space, Stable homotopy |
| `03.??.??` | **Associative algebra** | Quotient algebra |
| `03.??.??` | **Ideal (in an algebra)** | Quotient algebra |
| `03.??.??` | **Witt algebra** | Virasoro (or fold into the Virasoro unit itself) |

### Tier C — convenience / completeness (singleton uses)

| Pulled ID | Title |
|---|---|
| `03.??.??` | Cotangent bundle (subsumes into smooth manifold or own unit) |
| `03.??.??` | Orientation |
| `03.??.??` | Suspension (topology) |
| `03.??.??` | Simplicial complex / simplicial methods |

## 4. Suggested phase structure (3–4 batches)

### Phase 3.1 — foundational (4–6 units, parallel-safe)

Units with no Wave 3 inter-deps. Produce in parallel; each unblocks several downstream Wave 3 / Wave 2 units.

- ✅ **Smooth manifold** — `03.02.01`, shipped 2026-04-28 (autonomous run)
- ✅ **Topological space** — `02.01.01`, shipped 2026-04-28 (autonomous run)
- ✅ **Metric space** — `02.01.05`, shipped 2026-04-28 (autonomous run)
- ✅ **Group** (algebraic) — `01.02.01`, shipped 2026-04-28 (Phase 3.2 batch via parallel session)
- ✅ **Lie group** — `03.03.01`, shipped 2026-04-28 (autonomous run)
- ✅ **Differential forms** — `03.04.02`, shipped 2026-04-28 (autonomous run)

**Phase 3.1 complete (6 of 6).**

### Phase 3.2 — second layer (5–6 units)

Direct prereqs of Wave 2 / Phase 3.1 units. Underway via parallel session.

- ✅ **Continuous map** — `02.01.02`, shipped 2026-04-28
- ✅ **Group action** — `03.03.02`, shipped 2026-04-28
- ✅ **Orthogonal group** — `03.03.03`, shipped 2026-04-28
- ⏳ **Normed vector space** — `02.11.06`, in flight
- ⏳ **Inner product space** — `02.11.07`, in flight
- ⏳ **Spinor bundle** — `03.09.05`, shipped 2026-04-28 (closed Dirac apex)

**Phase 3.2 progress: 4 of 6 shipped (or 5 of 6 counting spinor bundle, which I produced separately).**

### Phase 3.2 — second layer (5–7 units)

After Phase 3.1.

- **Continuous map** (after topological space)
- **Normed vector space** (after metric space)
- **Inner product space** (after normed space)
- **Group action** (after group)
- **Orthogonal group** (after Lie group)
- **Tensor product** (after vector space — already shipped — but conventions touch normed/inner-product)
- **Exterior derivative / differential forms refinement** (after smooth manifold)

### Phase 3.3 — third layer (5–7 units)

- **Covering space** (after topological space + continuous map)
- **Homotopy / homotopy group** (after topological space + continuous map)
- **Differential operator** (after smooth manifold)
- **Cotangent bundle** (after smooth manifold)
- **Associative algebra** (algebra branch)
- **Ideal in an algebra** (after associative algebra)

### Phase 3.4 (optional cleanup) — specialized singletons

- **Witt algebra** (or fold into Virasoro)
- **Suspension**
- **Simplicial methods**
- **Orientation**

## 5. Numbering — section.chapter.ordinal assignments

The `<section>.<chapter>.<ordinal>` scheme expects each Wave 3 unit to have a permanent ID. Suggested chapters (subject to your reorganization preferences):

- `01-foundations`: foundational algebra (group, ring) goes here
- `02-analysis/01-topology`: topological space, continuous map, compactness, etc.
- `02-analysis/02-metric-normed-inner`: metric space, normed VS, inner product space
- `03-modern-geometry/02-manifolds`: smooth manifold, smooth maps, tangent / cotangent bundle
- `03-modern-geometry/03-lie`: Lie group, Lie group action, orthogonal group
- `03-modern-geometry/04-differential-forms`: differential forms, exterior derivative (chapter exists)
- `03-modern-geometry/01-tensor-algebra` (new): tensor product, associative algebra, ideal, tensor algebra (relocate `03.01.04` here; assign `03.01.??` for foundations)
- `03-modern-geometry/12-homotopy` (new): covering space, homotopy, suspension, simplicial methods

The numbering convention is non-dense (gaps reserved). Wave 3 will fill many of those gaps.

## 6. Success criteria (Wave 3)

Wave 3 succeeds if, by end:

- [ ] All `pending_prereqs: true` flags across Wave 1 + Wave 2 units can be set to `false` (every declared prereq resolves to a shipped unit OR is explicitly deferred to Wave 4 with an integrator-approved waiver).
- [ ] All `prerequisites:` IDs across the entire shipped DAG resolve.
- [ ] `validate_all.py` is green at unit count ≥48 (10 Wave 1 + ~30 Wave 2 + ~18 Wave 3).
- [ ] `pnpm build` clean.
- [ ] Notation glossary at `_meta/NOTATION.md` updated to include all symbols introduced in Wave 3 units.
- [ ] At least one `lean_status: full` unit ships in Wave 3 (foundational units like vector space, topological space, group should have substantial Mathlib coverage — Wave 3 is the natural place for Lean to start succeeding).

Wave 3 *fails* if:

- Production diverges into curriculum-bloat territory (units that don't unblock anything Wave 2 declared).
- The DAG can't be traversed from leaf to apex by end of wave.
- Sign conventions or notation drift between Wave 3 foundational units and Wave 2 / Wave 1 units that depend on them.

## 7. Wave 3 is the first time foundational units exist

Wave 1 produced apex content. Wave 2 produced one layer below apex (still substantive graduate material). Wave 3 produces undergraduate-and-below material. This is a different audience-calibration problem:

- **Master tier at Wave 3** is still graduate-text voice (LM standard) but the content is much smaller per unit, since these are foundational definitions and basic theorems. Master sections will naturally be shorter than Wave 1's Master sections.
- **Intermediate tier at Wave 3** is the dominant tier for most learners — this is where Wave 3 units do the most pedagogical work.
- **Beginner tier at Wave 3** has the strongest claim to "approachability that exceeds Fast Track." A learner without prior exposure should be able to reach Master-tier comprehension by traversing Beginner → Intermediate → Master across many Wave 3 units.

This audience inversion means Wave 3 unit production should treat Beginner/Intermediate as the load-bearing tiers, with Master as the rigor backstop, not vice versa.

## 8. Exit to Wave 4 (or v1 launch?)

After Wave 3, options:

- **Wave 4** — even more foundational (high-school-algebra-prerequisite material). Per `OVERVIEW.md` §2, this is the "pre-calc ramp" that's been deliberately deferred. May or may not be in scope for v1.
- **v0.x → v1 launch decision** — once Wave 3 ships, the DAG is traversable from foundational to apex. That's the minimum viable "high-school-to-graduate-mastery" promise of the project. v1 launch is gated on rendering, exercise interactivity, RAG, reviewer attestation — not on more units.
- **Lateral expansion** — produce parallel apex strands beyond spin geometry (algebraic geometry, symplectic geometry, representation theory, statistical mechanics) following the same apex-first → pulled-prereq pattern.

Tyler's call which path Wave 4 takes. Wave 3 is the inflection point.

---

*Plan drafted 2026-04-28 during Phase 2.3 / 2.4 production. Will be revised after Wave 2 closes and docs/pilot-lessons.md has accumulated foundational-tier observations.*
