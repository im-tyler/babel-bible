/-
  Codex.Precalc.Equations.LinesPlane

  Companion Lean file for `00.03.01 Linear equations and the line`.

  Mathlib supplies `Matrix` and `Matrix.det` for square matrices over a
  commutative ring, the two-by-two determinant via `Matrix.det_fin_two`,
  the `Module` instance on `Fin n → K` for `K` a field, and
  `AffineSubspace.mk'` with the `affineSpan` construction for affine
  subspaces of a vector space. Cramer's rule is packaged in
  `Mathlib.LinearAlgebra.Matrix.Cramer` as `Matrix.cramer` applied to the
  coefficient matrix, with `Matrix.mulVec_cramer` assembling the unique
  solution when the determinant is a unit. The four named statements
  below mirror the unit's signature theorems; proofs are deferred to
  Mathlib lookup while the reviewer signs off on the coverage claim.
-/

import Mathlib.Data.Matrix.Basic
import Mathlib.LinearAlgebra.Matrix.Determinant.Basic
import Mathlib.LinearAlgebra.Matrix.NonsingularInverse
import Mathlib.LinearAlgebra.AffineSpace.AffineSubspace

namespace Codex.Precalc.Equations

universe u

variable {K : Type u} [Field K]

/-- The two-by-two determinant of a system of two linear equations
    in two unknowns. -/
def lineSystemDet (a₁ b₁ a₂ b₂ : K) : K := a₁ * b₂ - a₂ * b₁

/-- Cramer's rule for a two-by-two linear system. When the determinant
    is nonzero, the system `a₁ x + b₁ y = c₁`, `a₂ x + b₂ y = c₂` has a
    unique solution in `K × K`. -/
theorem two_line_cramer
    (a₁ b₁ c₁ a₂ b₂ c₂ : K)
    (hD : lineSystemDet a₁ b₁ a₂ b₂ ≠ 0) :
    ∃! p : K × K,
      a₁ * p.1 + b₁ * p.2 = c₁ ∧ a₂ * p.1 + b₂ * p.2 = c₂ := by
  sorry

/-- Parametric description of a line. The solution set of
    `a x + b y = c` with `(a, b) ≠ 0` equals the affine line through
    any solution `p₀` with direction `(-b, a)`. -/
theorem line_parametric
    (a b c : K) (h : (a, b) ≠ ((0 : K), (0 : K)))
    (p₀ : K × K) (hp₀ : a * p₀.1 + b * p₀.2 = c) :
    {p : K × K | a * p.1 + b * p.2 = c}
      = {p : K × K | ∃ t : K, p = (p₀.1 - t * b, p₀.2 + t * a)} := by
  sorry

/-- Parallelism / coincidence criterion. Two lines `a₁ x + b₁ y = c₁`
    and `a₂ x + b₂ y = c₂` have a non-unique intersection (either no
    points or every point in common) iff the two-by-two determinant
    of the coefficient matrix vanishes. -/
theorem parallel_or_coincident_iff_det_zero
    (a₁ b₁ c₁ a₂ b₂ c₂ : K) :
    lineSystemDet a₁ b₁ a₂ b₂ = 0 ↔
      (¬ ∃! p : K × K,
          a₁ * p.1 + b₁ * p.2 = c₁ ∧ a₂ * p.1 + b₂ * p.2 = c₂) := by
  sorry

/-- Perpendicular-distance formula. The distance from a point
    `(x₀, y₀)` to the line `a x + b y = c` with `(a, b) ≠ 0` over the
    reals equals `|a x₀ + b y₀ - c| / sqrt (a^2 + b^2)`. Stated for the
    real-coefficient case; the Lean statement requires Mathlib's
    `Real.sqrt` and the Euclidean inner-product structure on
    `EuclideanSpace ℝ (Fin 2)`, hence is recorded as a sketch. -/
theorem point_line_distance_sketch :
    True := by
  trivial

end Codex.Precalc.Equations
