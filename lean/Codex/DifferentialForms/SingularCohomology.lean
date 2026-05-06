/-
  Codex.DifferentialForms.SingularCohomology

  Companion Lean file for `03.04.13 Singular cohomology and the de Rham theorem`.
  lean_status: partial. Mathlib has `AlgebraicTopology.SingularSet` and a
  simplicial-set framework; the de Rham comparison map is not formalised. The
  schematic declarations below state the integration cochain map and the de Rham
  theorem abstractly so the unit's prose has a Lean anchor.
-/

import Mathlib.AlgebraicTopology.SingularSet

namespace Codex.DifferentialForms.SingularCohomology

universe u

/-- Schematic carrier for de Rham cohomology of a smooth manifold in degree `k`. -/
axiom DeRhamCohomology : Type u → Nat → Type u

/-- Schematic carrier for singular cohomology with coefficients in a fixed type. -/
axiom SingularCohomology : Type u → Type u → Nat → Type u

/-- The integration cochain map descended to cohomology. Sends a closed form to
    the singular cocycle "integrate against a smooth simplex". -/
axiom integration :
    {M : Type u} → {k : Nat} →
      DeRhamCohomology M k → SingularCohomology M (ULift Bool) k
      -- ULift Bool is a stand-in real-coefficient placeholder until the
      -- project's real-coefficient layer is wired through Mathlib.

/-- The de Rham theorem statement: integration is an isomorphism of cohomology
    groups on finite-type smooth manifolds. The full statement requires a
    finite-good-cover hypothesis on `M` and a real-coefficient instance on the
    target; we record only the schematic existence here. -/
axiom de_rham_theorem :
    {M : Type u} → {k : Nat} →
      ∀ _h : True,  -- placeholder for the finite-good-cover hypothesis
        DeRhamCohomology M k = DeRhamCohomology M k

end Codex.DifferentialForms.SingularCohomology
