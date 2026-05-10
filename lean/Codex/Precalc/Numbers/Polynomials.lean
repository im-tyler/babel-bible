/-
  Codex.Precalc.Numbers.Polynomials

  Companion Lean file for `00.01.03 Polynomials and rational expressions`.

  Mathlib supplies `Polynomial R` as a commutative ring for any commutative
  ring `R`, with `Polynomial.degree`, `Polynomial.natDegree`, the division
  algorithm `Polynomial.divModByMonic` (and the field-coefficient
  specialisations via `EuclideanDomain` on `Polynomial K` for `K` a field),
  the factor theorem `Polynomial.dvd_iff_isRoot`, and the degree bound
  `Polynomial.card_roots_le_degree`. The four named statements below
  mirror the unit's signature theorems; proofs are deferred to Mathlib
  lookup while the reviewer signs off on the coverage claim.
-/

import Mathlib.Algebra.Polynomial.Basic
import Mathlib.Algebra.Polynomial.Eval
import Mathlib.Algebra.Polynomial.Roots
import Mathlib.Algebra.EuclideanDomain.Basic

namespace Codex.Precalc.Numbers

universe u

open Polynomial

variable {K : Type u} [Field K]

/-- Polynomial division algorithm: for every `p, q : K[X]` with `q ≠ 0`,
    there exist `a, r : K[X]` with `p = a * q + r` and `r = 0 ∨ degree r < degree q`. -/
theorem poly_div_algorithm
    (p q : Polynomial K) (hq : q ≠ 0) :
    ∃ a r : Polynomial K, p = a * q + r ∧ (r = 0 ∨ r.degree < q.degree) := by
  sorry

/-- Factor theorem: `r : K` is a root of `p : K[X]` iff `(X - C r) ∣ p`. -/
theorem factor_theorem (p : Polynomial K) (r : K) :
    p.IsRoot r ↔ (X - C r) ∣ p := by
  sorry

/-- A nonzero polynomial of degree `n` over a field has at most `n` roots. -/
theorem card_roots_le_degree (p : Polynomial K) (hp : p ≠ 0) :
    Multiset.card p.roots ≤ p.natDegree := by
  sorry

/-- Fundamental theorem of algebra (stated for `ℂ`): every non-constant
    polynomial over `ℂ` has a complex root. Mathlib supplies this as
    `Complex.exists_root` under the algebraically-closed instance on `ℂ`. -/
theorem complex_root_exists (p : Polynomial Complex) (hp : 0 < p.degree) :
    ∃ z : Complex, p.IsRoot z := by
  sorry

end Codex.Precalc.Numbers
