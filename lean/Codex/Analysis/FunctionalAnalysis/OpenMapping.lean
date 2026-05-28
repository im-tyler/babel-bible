import Mathlib.Analysis.NormedSpace.Banach
import Mathlib.Analysis.NormedSpace.BanachSteinhaus

namespace Codex.Analysis.FunctionalAnalysis

/-!
Companion names for the open mapping, closed graph, bounded inverse, and
Banach-Steinhaus theorems.

Mathlib provides:
* `ContinuousLinearMap.isOpenMap_of_surjective` — open mapping theorem.
* `ContinuousLinearEquiv.ofBijective` (and friends) — bounded inverse theorem.
* `LinearMap.continuous_of_isClosed_graph` — closed graph theorem.
* `banach_steinhaus` — uniform boundedness principle.

The aliases below mirror the curriculum statements so downstream units can
reference a stable handle even while their proofs are inherited from Mathlib.
-/

variable (E F : Type*)
variable [NormedAddCommGroup E] [NormedSpace ℝ E] [CompleteSpace E]
variable [NormedAddCommGroup F] [NormedSpace ℝ F] [CompleteSpace F]

/-- Open mapping theorem (Banach-Schauder): a surjective continuous linear map
between Banach spaces is an open map. -/
abbrev OpenMappingTheorem : Prop :=
  ∀ (T : E →L[ℝ] F), Function.Surjective T → IsOpenMap T

/-- Bounded inverse theorem: a continuous linear bijection between Banach
spaces has continuous inverse. -/
abbrev BoundedInverseTheorem : Prop :=
  ∀ (T : E →L[ℝ] F), Function.Bijective T →
    Continuous (Function.invFun T)

/-- Closed graph theorem: a linear map between Banach spaces is continuous iff
its graph is closed in the product space. -/
abbrev ClosedGraphTheorem : Prop :=
  ∀ (T : E →ₗ[ℝ] F), IsClosed { p : E × F | p.2 = T p.1 } → Continuous T

/-- Banach-Steinhaus / uniform boundedness principle: a pointwise bounded
family of bounded linear maps from a Banach space is uniformly bounded in
operator norm. -/
abbrev BanachSteinhausPrinciple : Prop :=
  ∀ {ι : Type*} (T : ι → E →L[ℝ] F),
    (∀ x : E, ∃ M : ℝ, ∀ i : ι, ‖T i x‖ ≤ M) →
    ∃ C : ℝ, ∀ i : ι, ‖T i‖ ≤ C

end Codex.Analysis.FunctionalAnalysis
