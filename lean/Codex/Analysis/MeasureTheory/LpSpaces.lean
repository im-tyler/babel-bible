import Mathlib.MeasureTheory.Function.LpSpace
import Mathlib.MeasureTheory.Integral.MeanInequalities

namespace Codex.Analysis.MeasureTheory

/-!
Companion names for the L^p-spaces (Hölder, Minkowski, Riesz-Fischer) unit.

Mathlib provides:

* `MeasureTheory.Lp` for the L^p quotient `Lp E p μ` of almost-everywhere
  measurable maps modulo a.e.-equivalence, a Banach space for `1 ≤ p ≤ ∞`.
* `MeasureTheory.snorm` and `MeasureTheory.Lp.norm_def` for the L^p-norm.
* `MeasureTheory.MemLp` for the predicate that a measurable function lies in L^p.
* `MeasureTheory.ENNReal.lintegral_mul_le_Lp_mul_Lq` for Hölder's inequality
  on `ENNReal`-valued measurable functions.
* `MeasureTheory.snorm_add_le` for Minkowski's inequality on the snorm.
* `MeasureTheory.Lp.completeSpace` instantiating `CompleteSpace (Lp E p μ)`
  for `1 ≤ p ≤ ∞`, the Riesz-Fischer completeness theorem.
-/

variable {α E : Type*} [MeasurableSpace α] [NormedAddCommGroup E]
variable (μ : MeasureTheory.Measure α)

/-- The L^p space `Lp E p μ` is a complete normed group for any `1 ≤ p ≤ ∞`.
This is the Riesz-Fischer completeness theorem, packaged as a Mathlib instance. -/
def CodexLpComplete (p : ENNReal) [Fact (1 ≤ p)] : Prop :=
  CompleteSpace (MeasureTheory.Lp E p μ)

/-- Hölder's inequality for conjugate exponents `p, q` on `ENNReal`-valued
measurable functions. -/
def CodexHolderStatement (f g : α → ENNReal) (p q : ℝ) : Prop :=
  ∀ (_h : 1/p + 1/q = 1) (_hp : 0 < p) (_hq : 0 < q),
    MeasureTheory.lintegral μ (fun x => f x * g x) ≤
      (MeasureTheory.lintegral μ (fun x => f x ^ p)) ^ (1 / p) *
      (MeasureTheory.lintegral μ (fun x => g x ^ q)) ^ (1 / q)

/-- Minkowski's triangle inequality for the L^p snorm. -/
def CodexMinkowskiStatement (f g : α → E) (p : ENNReal) : Prop :=
  MeasureTheory.snorm (fun x => f x + g x) p μ ≤
    MeasureTheory.snorm f p μ + MeasureTheory.snorm g p μ

end Codex.Analysis.MeasureTheory
