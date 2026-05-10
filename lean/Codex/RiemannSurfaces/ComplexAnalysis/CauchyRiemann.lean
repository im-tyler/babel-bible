/-
  Codex.RiemannSurfaces.ComplexAnalysis.CauchyRiemann

  Companion Lean file for `06.01.10 Cauchy-Riemann equations and harmonic conjugate`.
  lean_status: partial. Mathlib has `Complex.differentiableAt_iff_hasDerivAt`,
  `HasDerivAt` and the relationship between complex differentiability and the
  underlying real Fréchet derivative (`HasDerivAt.hasFDerivAt`,
  `DifferentiableAt.restrictScalars`). The Cauchy-Riemann equations and the
  harmonic-conjugate existence theorem on a simply-connected domain are not
  packaged as standalone theorems with the Codex-facing names below.
-/

import Mathlib.Analysis.Calculus.Deriv.Basic
import Mathlib.Analysis.Complex.Basic
import Mathlib.Analysis.Complex.RealDeriv

namespace Codex.RiemannSurfaces.ComplexAnalysis

open Complex

/-- Schematic CR-equivalence theorem. Codex curriculum statement: a function
    `f : ℂ → ℂ` is complex-differentiable at `z` iff its real Jacobian satisfies
    the Cauchy-Riemann equations $u_x = v_y$ and $u_y = -v_x$, and in that case
    the complex derivative equals $u_x + i v_x$. The full statement requires the
    `Complex.fderiv` infrastructure plus an explicit real-Jacobian extraction;
    the placeholder below records the curriculum-facing name. -/
theorem CauchyRiemann_equivalence_placeholder : True := by
  trivial

/-- Schematic harmonic-conjugate existence theorem. Codex curriculum statement:
    on a simply-connected open `Ω ⊆ ℂ`, any harmonic `u : Ω → ℝ` admits a
    harmonic `v : Ω → ℝ`, unique up to additive constant, such that `u + i v`
    is holomorphic on `Ω`. The proof factors through the closed-1-form
    primitive on a simply-connected domain; Mathlib has the de Rham and
    line-integral primitives but not the harmonic-conjugate corollary. -/
theorem harmonicConjugate_exists_placeholder : True := by
  trivial

example (z : ℂ) : DifferentiableAt ℂ (fun w => w * w + (1 : ℂ)) z := by
  exact (differentiableAt_id'.mul differentiableAt_id').add_const _

end Codex.RiemannSurfaces.ComplexAnalysis
