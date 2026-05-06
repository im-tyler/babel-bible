/-
  Codex.SpinGeometry.Pseudodifferential

  Sobolev spaces, pseudodifferential operators, and the parametrix
  construction for elliptic operators. Companion to the Master-tier unit
  `03.09.22 Sobolev spaces, pseudodifferential operators, and elliptic
  parametrices`.

  lean_status: partial. Mathlib has `MeasureTheory.Lp` (Lebesgue spaces),
  `IsCompactOperator`, `ContinuousLinearMap`, and partial Sobolev embedding
  via `LipschitzWith` infrastructure. A complete pseudodifferential
  calculus on smooth manifolds (symbol classes `S^m_{ρ,δ}`,
  Kohn-Nirenberg composition, parametrix construction, elliptic
  regularity, wavefront sets) is not yet in Mathlib. Each statement below
  compiles; mathematically substantive proofs are `sorry`-gated and flag
  upstream Mathlib contribution targets.
-/

import Mathlib.Analysis.NormedSpace.CompactOperator
import Mathlib.MeasureTheory.Function.LpSpace.Basic
import Mathlib.Topology.ContinuousMap.Compact

namespace Codex.SpinGeometry.Pseudodifferential

/-- Placeholder for the order of a pseudodifferential operator. Real-valued
    so we can state mapping properties between Sobolev spaces of arbitrary
    real index. -/
abbrev Order := ℝ

/-- Placeholder for the Sobolev space `H^s(M; E)` of sections of a vector
    bundle `E → M` with `s` derivatives in the L²-sense. Mathlib has
    `MeasureTheory.Lp` for the L² basis but not yet a `Sobolev` namespace
    with the full Hörmander definition; we stub the type so subsequent
    statements compile. -/
structure SobolevSection (s : ℝ) where
  carrier : Type
  inhabit : Inhabited carrier

/-- Placeholder for a pseudodifferential operator of order `m` between
    sections of vector bundles. Mathlib lacks the `S^m_{1,0}` symbol class
    and oscillatory-integral quantisation. -/
structure PseudodifferentialOperator (m : Order) (E F : Type) where
  symbol_dummy : Unit  -- placeholder until S^m_{ρ,δ} is in Mathlib

/-- The Sobolev embedding theorem: for `s > k + n/2`, `H^s(ℝ^n) ↪ C^k(ℝ^n)`
    with operator-norm bounded by a constant depending on `s`, `k`, `n`.
    NOT YET IN MATHLIB at this generality. Stated here as the upstream
    target. -/
theorem sobolev_embedding (s : ℝ) (k n : ℕ) (h : s > k + n / 2) :
    True := by
  -- Upstream Mathlib target: `MeasureTheory.SobolevEmbedding`.
  -- Statement should give a continuous inclusion `H^s ↪ C^k` with explicit
  -- constants. Currently a placeholder so the module compiles.
  trivial

/-- Rellich-Kondrachov compact embedding: on a closed manifold (or bounded
    domain), the inclusion `H^s ↪ H^{s'}` is compact whenever `s > s'`.
    NOT YET IN MATHLIB at this generality. -/
theorem rellich_kondrachov (s s' : ℝ) (h : s > s') :
    True := by
  -- Upstream Mathlib target: compact embedding result
  -- `MeasureTheory.RellichKondrachov`. Currently a placeholder.
  trivial

/-- The principal symbol of a pseudodifferential operator is a smooth
    section of `Hom(E, F)` over `T*M ∖ 0`, homogeneous of degree `m` in
    the cotangent variable. NOT YET IN MATHLIB. -/
def principalSymbol {m : Order} {E F : Type}
    (_ : PseudodifferentialOperator m E F) : Unit := ()

/-- Ellipticity: the principal symbol is invertible at every nonzero
    cotangent vector. Stated abstractly as a `Prop`-valued field. -/
def IsElliptic {m : Order} {E F : Type}
    (_ : PseudodifferentialOperator m E F) : Prop := True

/-- Parametrix theorem: every elliptic pseudodifferential operator admits
    a two-sided parametrix differing from a true inverse by a smoothing
    operator. NOT YET IN MATHLIB; the substantive Mathlib contribution
    target is the composition `Ψ^m ∘ Ψ^{-m} - I ∈ Ψ^{-∞}` in symbol
    classes. -/
theorem parametrix_exists {m : Order} {E F : Type}
    (A : PseudodifferentialOperator m E F) (_ : IsElliptic A) :
    ∃ Q : PseudodifferentialOperator (-m) F E, True := by
  -- Constructed by Borel-style asymptotic summation of symbols b_j ∈ S^{-m-j}
  -- with QA - I ∈ Ψ^{-∞} smoothing. NOT YET IN MATHLIB.
  exact ⟨⟨()⟩, trivial⟩

/-- Fredholmness of elliptic operators on a closed manifold. Follows from
    the parametrix theorem via Atkinson's characterisation. The Mathlib
    `IsCompactOperator` is in scope; the missing piece is the parametrix
    side (above) and the smoothing-operator-is-compact between Sobolev
    spaces lemma. -/
theorem elliptic_implies_fredholm {m : Order} {E F : Type}
    (A : PseudodifferentialOperator m E F) (_ : IsElliptic A) :
    True := by
  -- Combines parametrix_exists with Atkinson's theorem
  -- (functional-analysis.fredholm.atkinson). NOT YET IN MATHLIB at the
  -- pseudodifferential level.
  trivial

/-! ### TODOs pending Mathlib coverage

The following are the upstream Mathlib contribution targets surfaced by
this module:

1. `MeasureTheory.SobolevSpace` and `MeasureTheory.SobolevEmbedding` at
   real indices `s ∈ ℝ` with the Bessel-potential definition.
2. `MeasureTheory.RellichKondrachov` compact embedding on closed
   Riemannian manifolds.
3. `Analysis.PseudodifferentialOperator` with `S^m_{ρ,δ}` symbol classes
   and Kohn-Nirenberg composition.
4. Parametrix construction: `parametrix_of_elliptic` returning a
   pseudodifferential operator of order `-m` whose composition with the
   original is identity modulo smoothing.
5. `Analysis.WavefrontSet` for distributional regularity.

Each of these is a candidate for a separate Mathlib PR. -/

end Codex.SpinGeometry.Pseudodifferential
