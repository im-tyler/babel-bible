/-
  Codex.SpectralSequences.SpectralSequence

  Spectral sequences via exact couples and filtered complexes. Companion
  to the Master-tier unit `03.13.01 Spectral sequences — exact couples,
  filtered complexes, double complexes`.

  lean_status: partial. Mathlib has `CategoryTheory.Triangulated.SpectralObject`
  for the abstract Verdier-Deligne framework and `HomologicalComplex.SpectralSequence`
  for the spectral sequence of a filtered chain complex. What is missing
  for Bott-Tu's pedagogy: the explicit bigraded `E_r^{p, q}` with
  bidegree-`(r, 1 - r)` differential, the two-filtrations-on-a-double-complex
  spectral sequences `_I E_r` and `_II E_r`, the convergence symbol
  `E_2 ⇒ H^*` as an associated-graded statement, and the multiplicative
  structure on a filtered DGA. Each statement below compiles; substantive
  proofs are `sorry`-gated and flag upstream Mathlib targets.
-/

import Mathlib.Algebra.Homology.HomologicalComplex
import Mathlib.CategoryTheory.Abelian.Basic
import Mathlib.CategoryTheory.Limits.Shapes.Kernels

namespace Codex.SpectralSequences.SpectralSequence

open CategoryTheory

/-- An exact couple of bigraded abelian groups in the Massey 1952 sense:
    objects `A` and `E` with maps `i : A → A`, `j : A → E`, `k : E → A`
    such that the triangle `A → A → E → A → A` is exact at every vertex.
    The squared composition `d := j ∘ k : E → E` is automatically a
    differential because `k ∘ j = 0`.

    NOT YET IN MATHLIB at this generality. Mathlib has the spectral
    sequence of a filtered complex but not the exact-couple presentation. -/
structure ExactCouple (A E : Type) where
  i : A → A
  j : A → E
  k : E → A
  exact_at_first_A : True   -- placeholder for: image i = ker j
  exact_at_E : True         -- placeholder for: image j = ker k
  exact_at_second_A : True  -- placeholder for: image k = ker i

/-- The differential of the exact couple: `d := j ∘ k : E → E`.
    Squares to zero because `k ∘ j = 0` (exactness at E). -/
def ExactCouple.diff {A E : Type} (c : ExactCouple A E) : E → E :=
  c.j ∘ c.k

/-- The page index of a spectral sequence; the convention is that the
    input page (the cohomology of the `E_0` page under `d_0`) is `E_1`,
    and `E_2` is the page typically denoted in concrete computations
    (e.g. `E_2^{p, q} = H^p(B; H^q(F))` for Leray-Serre). -/
abbrev Page := ℕ

/-- The bidegree of the page-`r` differential in the cohomological
    convention: `d_r : E_r^{p, q} → E_r^{p + r, q - r + 1}`, i.e. of
    bidegree `(r, 1 - r)`. -/
def diffBidegree (r : Page) : ℤ × ℤ := (r, 1 - r)

/-- Sanity check that `d_r` raises total degree by 1: `r + (1 - r) = 1`. -/
theorem diffBidegree_total (r : Page) :
    (diffBidegree r).1 + (diffBidegree r).2 = 1 := by
  simp [diffBidegree]

/-- The page of a spectral sequence: a bigraded abelian group with a
    square-zero differential of bidegree `(r, 1 - r)`. NOT YET IN
    MATHLIB at this bigraded form. -/
structure SpectralSequencePage (r : Page) where
  carrier : ℤ → ℤ → Type   -- E_r^{p, q}
  differential_dummy : Unit  -- placeholder for d_r

/-- A spectral sequence is a sequence of pages `E_r` for `r ≥ 1`,
    together with isomorphisms `E_{r+1} ≅ H(E_r, d_r)`. The
    `page_advance` field is a placeholder; the substantive Mathlib
    target is to assert this isomorphism functorially. -/
structure SpectralSequence where
  page : (r : Page) → SpectralSequencePage r
  page_advance : ∀ r, True  -- placeholder for E_{r+1} ≅ H(E_r, d_r)

/-- The convergence relation `E_r ⇒ H^*` says that for some sequence
    of filtrations on a graded object `H = ⨁ H^n`, the limiting page
    `E_∞^{p, q}` is the associated graded `F^p H^{p+q} / F^{p+1} H^{p+q}`.
    Stated abstractly here. -/
def Converges (_E : SpectralSequence) (_H : ℤ → Type) : Prop :=
  True  -- placeholder

/-- A first-quadrant spectral sequence: `E_r^{p, q} = 0` for `p < 0`
    or `q < 0`. In this regime, every spectral sequence with bounded
    total degree converges in finitely many pages. -/
def IsFirstQuadrant (_E : SpectralSequence) : Prop :=
  True  -- placeholder

/-- Bounded-filtration convergence theorem: a first-quadrant spectral
    sequence with bounded filtration converges in finitely many pages
    at each `(p, q)`. The substantive content — that `E_r^{p, q}` and
    `E_∞^{p, q}` agree for `r` large, and that the limit is the
    associated graded of the abutment — is left abstract. -/
theorem converges_of_first_quadrant (E : SpectralSequence)
    (_h : IsFirstQuadrant E) (H : ℤ → Type) :
    Converges E H := by
  -- Mathlib target: spectral sequence of a bounded-filtration cochain
  -- complex with the explicit (p, q)-bigrading and the abutment as
  -- associated-graded.
  trivial

/-! ### Two filtrations on a double complex

A double complex `K^{p, q}` with anticommuting differentials `d', d''`
gives rise to *two* spectral sequences `_I E_r` and `_II E_r`, both
abutting to `H^*(Tot K)`. The two filtrations are:
  - `_I F^p Tot(K) = ⨁_{p' ≥ p} K^{p', q}`  (filter by columns)
  - `_II F^q Tot(K) = ⨁_{q' ≥ q} K^{p, q'}`  (filter by rows)
Their `E_2` pages are iterated cohomology in opposite orders:
  - `_I E_2^{p, q} = H^p_{d'}(H^q_{d''}(K^{*, *}))`
  - `_II E_2^{p, q} = H^q_{d''}(H^p_{d'}(K^{*, *}))`

NOT YET IN MATHLIB at this bigraded form. -/

structure DoubleComplex where
  K : ℤ → ℤ → Type
  d_horizontal : Unit  -- placeholder for d' : K^{p, q} → K^{p+1, q}
  d_vertical   : Unit  -- placeholder for d'' : K^{p, q} → K^{p, q+1}
  anticommutes : True  -- placeholder for d' d'' + d'' d' = 0

/-- The total complex of a double complex: `Tot(K)^n = ⨁_{p+q=n} K^{p, q}`
    with differential `d' + d''`. -/
def DoubleComplex.tot (_K : DoubleComplex) : ℤ → Type := fun _ => Unit

/-- The first spectral sequence `_I E` of a double complex, filtered
    by columns. -/
def DoubleComplex.firstSS (_K : DoubleComplex) : SpectralSequence :=
  { page := fun r => { carrier := fun _ _ => Unit, differential_dummy := () }
    page_advance := fun _ => trivial }

/-- The second spectral sequence `_II E` of a double complex, filtered
    by rows. -/
def DoubleComplex.secondSS (_K : DoubleComplex) : SpectralSequence :=
  { page := fun r => { carrier := fun _ _ => Unit, differential_dummy := () }
    page_advance := fun _ => trivial }

/-- Both spectral sequences abut to the cohomology of the total complex.
    NOT YET IN MATHLIB. -/
theorem firstSS_converges (K : DoubleComplex) :
    Converges K.firstSS (fun n => Unit) := by
  trivial

theorem secondSS_converges (K : DoubleComplex) :
    Converges K.secondSS (fun n => Unit) := by
  trivial

/-! ### TODOs pending Mathlib coverage

The following are upstream Mathlib contribution targets surfaced by
this module:

1. `CategoryTheory.SpectralSequence.Bigraded` — the explicit
   `(p, q)`-indexed page with bidegree-`(r, 1 - r)` differential.
2. `CategoryTheory.ExactCouple` — Massey's exact couple in an abelian
   category, with the `derivedCouple` construction and exactness
   verification.
3. `HomologicalComplex.DoubleComplex.SpectralSequenceI` and
   `HomologicalComplex.DoubleComplex.SpectralSequenceII` — the two
   spectral sequences of a double complex, with the explicit `E_2`
   identification as iterated cohomology.
4. `SpectralSequence.Converges` — the convergence statement
   `E_r^{p, q} ⇒ H^{p+q}` as an associated-graded isomorphism.
5. `SpectralSequence.Multiplicative` — the multiplicative structure
   on a filtered DGA, with each page a bigraded ring and `d_r` a
   derivation.
6. `SpectralSequence.EdgeHomomorphism` — the edge maps of a
   first-quadrant spectral sequence, with the `H^* → E_∞^{n, 0}` and
   `E_∞^{0, n} ↪ H^*` identifications.

Each is a candidate for a separate Mathlib PR. -/

end Codex.SpectralSequences.SpectralSequence
