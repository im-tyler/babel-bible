/-
  Codex.Analysis.MultiVariable.ChainRule

  Companion Lean file for `02.05.03 Chain rule for multi-variable functions`.

  lean_status: partial. Mathlib carries the Fréchet-derivative form of the
  multi-variable chain rule via `HasFDerivAt.comp`, `fderiv.comp`, and the
  matrix-level companion `ContinuousLinearMap.comp` on
  `EuclideanSpace ℝ (Fin n)`. The Jacobian-matrix interpretation comes
  through `LinearMap.toMatrix` and `ContinuousLinearMap.toMatrix` with the
  standard basis on `EuclideanSpace`.

  Codex-facing gap: a single textbook-style packaging that names the
  composition rule $D(f \circ g)(a) = Df(g(a)) \circ Dg(a)$ in Apostol
  notation, exhibits the Jacobian-matrix product $J_{f \circ g}(a) =
  J_f(g(a)) \cdot J_g(a)$ as a corollary, and records the
  Faà-di-Bruno-style higher-order chain rule under one namespace is the
  Codex-facing unification that is not packaged in Mathlib.
-/

import Mathlib.Analysis.Calculus.FDeriv.Basic
import Mathlib.Analysis.Calculus.FDeriv.Comp
import Mathlib.Analysis.InnerProductSpace.EuclideanDist

namespace Codex.Analysis.MultiVariable

variable {n m p : ℕ}

/-- Working type abbreviation: a Euclidean space of dimension `n` over the reals. -/
abbrev EuclR (n : ℕ) := EuclideanSpace ℝ (Fin n)

/-- The multi-variable chain rule in Mathlib's Fréchet-derivative form. If
$g$ is differentiable at $a$ with derivative $Dg(a)$, and $f$ is
differentiable at $g(a)$ with derivative $Df(g(a))$, then $f \circ g$ is
differentiable at $a$ with derivative $Df(g(a)) \circ Dg(a)$. -/
example (f : EuclR m → EuclR p) (g : EuclR n → EuclR m) (a : EuclR n)
    (Dg : EuclR n →L[ℝ] EuclR m) (Df : EuclR m →L[ℝ] EuclR p)
    (hg : HasFDerivAt g Dg a) (hf : HasFDerivAt f Df (g a)) :
    HasFDerivAt (f ∘ g) (Df.comp Dg) a :=
  hf.comp a hg

/-- Functional version: `fderiv (f ∘ g) a = (fderiv f (g a)).comp (fderiv g a)`
for `g` differentiable at `a` and `f` differentiable at `g a`. -/
example (f : EuclR m → EuclR p) (g : EuclR n → EuclR m) (a : EuclR n)
    (hg : DifferentiableAt ℝ g a) (hf : DifferentiableAt ℝ f (g a)) :
    fderiv ℝ (f ∘ g) a = (fderiv ℝ f (g a)).comp (fderiv ℝ g a) :=
  (hf.hasFDerivAt.comp a hg.hasFDerivAt).fderiv

/-- Worked-example shape: a circle composed with the squared norm has zero
derivative. The statement records the canonical Apostol example
$f(x, y) = x^2 + y^2$, $g(t) = (\cos t, \sin t)$, $(f \circ g)(t) = 1$.
The full constant-function argument is left as a placeholder pending the
unified Apostol-style namespace. -/
example : True := trivial

/-- Codex-facing categorical statement: the Jacobian-matrix product form
$J_{f \circ g}(a) = J_f(g(a)) \cdot J_g(a)$ is a direct consequence of
the Fréchet form together with `ContinuousLinearMap.toMatrix` in the
standard basis. The combined unified-namespace statement is a
placeholder. -/
theorem multi_variable_chain_rule_placeholder : True := by
  trivial

end Codex.Analysis.MultiVariable
