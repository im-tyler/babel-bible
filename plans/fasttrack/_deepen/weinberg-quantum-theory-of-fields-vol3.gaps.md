# Weinberg QFT Vol 3 (Supersymmetry) — Phase-2 deepening gap file

**Book:** Weinberg, *The Quantum Theory of Fields, Vol. 3: Supersymmetry* (FT 2.19).
**Re-audited:** 2026-06-04 against the live corpus.

**Headline.** The Phase-1 audit's central structural finding is **confirmed and
still holds**: supersymmetric *quantum field theory* — the SUSY extension of the
Poincaré algebra, superspace/superfields, the Wess-Zumino model, super-Yang-Mills,
the non-renormalization theorem, spontaneous SUSY breaking, SQCD/Seiberg duality,
and supergravity — is **genuinely uncovered**. None of the SUSY-adjacent units that
*do* exist in the corpus touch Vol-3 field-theory content (grep evidence in the
COVERED trailer).

**Two corrections to the Phase-1 audit's structural claims** (the corpus grew since
2026-06-01):
- The audit proposed `07.06.23` for the Lie-superalgebra unit. **That slot, and
  `07.06.24-26`, are now occupied** (Lie-algebra cohomology, Hochschild-Serre,
  Weyl construction, G2). Next free is **`07.06.27`**.
- The audit proposed a new `12.19` SUSY sub-chapter and said `12-quantum` ends at
  17. **`12.18-gauge-and-symmetry` now exists** (Higgs, Goldstone, asymptotic
  freedom, theta-vacua, ABJ anomaly, OPE, vortices, lattice confinement). `12.19`
  is still free and remains the correct home for the SUSY sub-chapter. Several
  Phase-1 "not-yet-shipped prerequisites" are now shipped: **Goldstone theorem
  `12.18.02`** (prereq for the Goldstino), **canonical QFT `12.12.01`**, **chiral
  anomaly `12.18.05`**.

Scope discipline (per brief): the MSSM sparticle-spectrum phenomenology, gauge-
coupling unification / neutralino dark matter, and the string-theory and
experimental-status survey pointers from the Phase-1 punch-list are treated as
**out of scope** for this deepening pass (physics phenomenology / forward-pointer
surveys, not load-bearing theory). The list below is the tight set of genuine,
high-value, theory-load-bearing gaps.

---

## Genuine gaps (7)

### 1. Lie superalgebras (Z2-graded Lie algebras)
- **id:** `07.06.27` (verified free; `07.06.22` was the audit's claimed end but the
  chapter now runs to `07.06.26-g2-via-the-octonions`)
- **title:** Lie superalgebras: the graded bracket, the super-Jacobi identity, and basic classification
- **spec:** Z2-graded vector space with an even/odd-graded bracket satisfying graded
  antisymmetry and the super-Jacobi identity; the universal enveloping superalgebra;
  the classification skeleton (Kac). Pure-algebra substrate the SUSY algebra instantiates.
- **prereqs:** `07.06.21` (Casimir element), `07.04.01` (Cartan-Weyl classification),
  `07.06.11` (reps of sl(2,C))
- **chapter dir:** `content/07-representation-theory/06-lie-algebraic/` — frontmatter
  `section: representation-theory`, `chapter: lie-algebraic`

### 2. The supersymmetry algebra and the Haag-Lopuszanski-Sohnius theorem
- **id:** `12.19.01` (new sub-chapter `content/12-quantum/19-supersymmetry/`; `12.19` verified free)
- **title:** The supersymmetry algebra: Coleman-Mandula, Haag-Lopuszanski-Sohnius, and the graded extension of Poincare
- **spec:** Coleman-Mandula no-go (stated/cited); the unique graded evasion
  {Q_a, Qbar_bdot} = 2 sigma^mu_{a bdot} P_mu; N=1 and extended (N>1) algebras;
  central charges and the BPS bound. The single load-bearing Vol-3 unit.
- **prereqs:** `07.06.27` (Lie superalgebras, gap #1), `07.07.06` (Wigner Poincare
  classification), `07.07.09` (Lorentz/SL(2,C) reps), `07.06.10` (Casimir element)
- **chapter dir:** `content/12-quantum/19-supersymmetry/` — `section: quantum`,
  `chapter: supersymmetry`

### 3. Superspace, superfields, and Berezin integration
- **id:** `12.19.02`
- **title:** Superspace and superfields: Grassmann coordinates, Berezin integration, chiral and vector superfields, the superderivative
- **spec:** Anticommuting theta, thetabar coordinates on R^{4|4}; Berezin integral
  (int d^2theta thetatheta = 1); chiral and vector superfields; the supercovariant
  derivative D_a; component expansions; F- and D-term projections. Self-contains the
  Grassmann/Berezin foundation (only incidental elsewhere — `03.07.31`, `08.14.02`).
- **prereqs:** `12.19.01` (SUSY algebra, gap #2), `01.01.07` (determinant, for the
  Berezinian/Jacobian), `03.09.05` (spinor bundle)
- **chapter dir:** `content/12-quantum/19-supersymmetry/`

### 4. Supermultiplets and the Wess-Zumino model
- **id:** `12.19.03`
- **title:** Supermultiplets and the Wess-Zumino model: Bose-Fermi degeneracy, the superpotential, and the auxiliary F-field
- **spec:** Massless and massive reps of the SUSY algebra; equality of bosonic and
  fermionic on-shell degrees of freedom; the chiral / vector / gravity multiplets;
  the Wess-Zumino chiral-superfield Lagrangian, the holomorphic superpotential,
  on-shell vs off-shell SUSY via the auxiliary F-field. The simplest interacting
  SUSY field theory. (Distinct from the 2D WZW action `03.10.03`.)
- **prereqs:** `12.19.02` (superspace, gap #3), `12.05.04`/`12.05.05` (free
  scalar/spinor fields — the components), `12.13.02` (fermionic Fock space)
- **chapter dir:** `content/12-quantum/19-supersymmetry/`

### 5. Supersymmetric gauge theory and the non-renormalization theorem
- **id:** `12.19.04`
- **title:** Super-Yang-Mills and the non-renormalization theorem: the vector superfield, Wess-Zumino gauge, W^a W_a, and supergraphs
- **spec:** Gauging a SUSY theory: the vector superfield, Wess-Zumino gauge, the
  gauge field strength W_a and the kinetic W^a W_a term, super-Yang-Mills; superspace
  Feynman rules (supergraphs); the non-renormalization theorem — the superpotential
  receives no perturbative corrections — via supergraph power-counting and the modern
  holomorphy (Seiberg) argument. The load-bearing SUSY perturbation-theory result.
- **prereqs:** `12.19.03` (Wess-Zumino model, gap #4), `03.07.05` (Yang-Mills
  action), `03.07.31` (BRST/Faddeev-Popov)
- **chapter dir:** `content/12-quantum/19-supersymmetry/`

### 6. Spontaneous supersymmetry breaking and the Witten index
- **id:** `12.19.05`
- **title:** Spontaneous SUSY breaking: the Goldstino theorem, O'Raifeartaigh and Fayet-Iliopoulos, the supertrace sum rule, and the field-theory Witten index
- **spec:** The Goldstino theorem (SUSY analogue of Goldstone); F-term
  (O'Raifeartaigh) and D-term (Fayet-Iliopoulos) breaking; the supertrace mass sum
  rule STr M^2 = 0; the field-theory Witten index Tr(-1)^F as an obstruction to
  dynamical breaking. (The field-theory index is genuinely absent; `08.10.11` and
  `03.15.12` carry only the QM / geometric versions — cross-link, don't duplicate.)
- **prereqs:** `12.19.04` (super-Yang-Mills, gap #5), `12.18.02` (Goldstone theorem),
  cross-link `08.10.11` (SUSY-QM Witten index), `03.15.12` (geometric Witten index)
- **chapter dir:** `content/12-quantum/19-supersymmetry/`

### 7. Holomorphy, SQCD, and Seiberg duality
- **id:** `12.19.06`
- **title:** Supersymmetric QCD and Seiberg duality: the moduli space of vacua, holomorphy, and N=1 electric-magnetic duality
- **spec:** The classical/quantum moduli space of SUSY vacua; holomorphy as a
  constraint on the effective superpotential; the Affleck-Dine-Seiberg
  superpotential; Seiberg's electric-magnetic duality for N=1 SQCD, the
  superconformal window, and the NSVZ exact beta function. The deepest
  non-perturbative content in the book. (Distinct from the `03.07.*` Seiberg-Witten
  4-manifold invariants — a topology tool, not this.)
- **prereqs:** `12.19.04` (super-Yang-Mills + non-renorm, gap #5), `12.18.03`
  (asymptotic freedom / running coupling), `12.18.04` (theta-vacua)
- **chapter dir:** `content/12-quantum/19-supersymmetry/`

**Notation note for the production team (record in `12.19.01`/`12.19.02`):** metric
signature (Weinberg mostly-plus vs Wess-Bagger mostly-minus), two-component
van-der-Waerden spinor conventions, supercharge normalization, and Berezin measure
must be pinned and given a conversion box. The Phase-1 audit's §3 notation crosswalk
is the source list.

---

## COVERED (not gaps) — due-diligence evidence

Each item below was a Phase-1 candidate (or a topic worth checking); grep against
`content/12-quantum/` and `content/08-stat-mech/` confirms an existing unit, so it
is NOT proposed as a gap.

- **Supersymmetric quantum mechanics / superpotential / Witten index (QM version)** —
  COVERED by `08.10.11-supersymmetric-quantum-mechanics-superpotential-witten-index`.
  Verified it is one-particle-Hilbert-space SUSY-QM (N=2 SUSY-QM, partner
  Hamiltonians), explicitly contrasting itself with field theory; it does NOT cover
  the relativistic SUSY algebra, superspace, or any Vol-3 construction. The
  field-theory Witten index is cross-linked from gap #6, not duplicated.
- **Stochastic / statistical SUSY (Nicolai map, Parisi-Sourlas)** — COVERED by
  `08.10.12-the-nicolai-map-and-stochastic-quantisation-of-susy-theories` and
  `08.10.13-parisi-sourlas-dimensional-reduction-and-random-field-supersymmetry`.
  These are stochastic-quantisation / random-field SUSY, not relativistic SUSY-QFT;
  out of Vol-3 scope and correctly separate.
- **Grassmann / Berezin integration** — only partially present, via
  `08.14.02-grassmann-integration-and-the-2d-ising-model-as-free-fermions` (2D Ising
  context) and incidentally inside `03.07.31` (BRST) and `03.09.26` (Mathai-Quillen).
  No clean superspace/Berezin foundation exists; folded into gap #3 rather than a
  separate gap.
- **Wess-Zumino-Witten action** — COVERED (but DIFFERENT topic) by
  `03.10.03-the-wess-zumino-witten-action-and-the-level-k-extension`. This is the 2D
  conformal current-algebra WZW action, NOT the 4D SUSY Wess-Zumino model; the SUSY
  model is genuinely absent and is gap #4.
- **Witten supersymmetric Morse theory** — COVERED by
  `03.15.12-witten-s-supersymmetric-morse-theory-survey-pointer` (geometric Witten
  Laplacian / Morse homology). Not SUSY-QFT; cross-linked from gap #6.
- **Goldstone theorem** (prereq for the Goldstino) — COVERED by
  `12.18.02-the-goldstone-theorem-and-effective-goldstone-lagrangians`. Used as a
  prereq of gap #6, not re-derived.
- **Higgs mechanism / spontaneous gauge-symmetry breaking** — COVERED by
  `12.18.01`. Ordinary SSB substrate; the super-Higgs mechanism (SUGRA) is a deeper,
  out-of-scope deepening this pass.
- **Yang-Mills action; BRST / Faddeev-Popov** — COVERED by `03.07.05-yang-mills-action`
  and `03.07.31-brst-cohomology-and-faddeev-popov-ghost-quantisation`. Ordinary
  gauge theory; prereqs of gap #5, its supersymmetric extension absent.
- **Poincare algebra / Wigner classification / Lorentz reps / Casimir** — COVERED by
  `07.07.06` (Wigner Poincare), `07.07.09` (Lorentz SL(2,C) reps), `07.06.10`/`07.06.21`
  (Casimir). The algebra SUSY *extends*; prereqs of gaps #1-2, the graded extension absent.
- **Free scalar / spinor / vector fields, fermionic Fock space** — COVERED by
  `12.05.04-06`, `12.13.02`. The components that assemble into multiplets; prereqs of
  gap #4, the unifying multiplet absent.
- **BPS / Bogomolny bound (field theory)** — the only hit,
  `03.07.07-bpst-instanton-and-the-bogomolny-bound`, is the instanton/monopole
  Bogomolny bound, NOT the SUSY central-charge BPS bound. The SUSY BPS bound is
  folded into gap #2 (extended algebra / central charges); not a separate gap.
- **Spin geometry / Einstein equations** (SUGRA substrate) — COVERED by
  `03.09.05` (spinor bundle) and `13.04.01-04` (Einstein equations / EH action).
  Ordinary GR + spinors; full supergravity (gravitino, super-Higgs) deemed
  out-of-scope deepening this pass and not proposed.

## OUT OF SCOPE (deferred / phenomenology / survey) — 5 Phase-1 items not proposed

- **MSSM particle content, R-parity, mu-problem, superpotential** (Phase-1 unit 9) —
  physics phenomenology; not theory-load-bearing for the corpus.
- **Gauge-coupling unification + neutralino LSP / dark matter** (Phase-1 unit 10) —
  phenomenology.
- **Supergravity basics: gravitino, super-Higgs, gravity-mediated breaking**
  (Phase-1 unit 13) — deepest material; needs a procured Vol-3 copy and string-theory
  context; deferred, not a clean deepening gap this pass.
- **Extended-SUSY geometry survey: N=2 special Kahler, N=4 finiteness** (Phase-1 unit
  14) — survey depth; special-Kahler partially shadowed by `04.09.*` Kahler/Hodge;
  deferred.
- **String-theory + experimental-status survey pointers** (Phase-1 units 16-18) —
  forward-pointer / honest-status surveys, not theory.

---

**Counts:** 7 genuine gaps; 13 COVERED-verified topics; 5 OUT-OF-SCOPE items.
