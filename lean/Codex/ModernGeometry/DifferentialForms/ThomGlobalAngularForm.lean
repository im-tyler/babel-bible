/-
  Codex.ModernGeometry.DifferentialForms.ThomGlobalAngularForm

  Companion Lean file for `03.04.09 Compactly-supported cohomology,
  integration along the fiber, and the de Rham Thom isomorphism`.

  lean_status: partial. Mathlib has compactly-supported function support
  (`HasCompactSupport`) and partial vector-bundle and differential-form
  infrastructure, but compactly-vertical cohomology, integration along
  the fiber for differential forms, the Thom class, and the global
  angular form are not formalised.
-/

namespace Codex.ModernGeometry.DifferentialForms

universe u

axiom Manifold : Type u

axiom VectorBundle : Manifold → Nat → Type u

/-- Compactly-vertical forms on the total space of a vector bundle: forms
    whose support, intersected with the fibers over any compact set in
    the base, is compact. Bott-Tu coinage. -/
axiom CompactVerticalForm :
    {M : Manifold} → {r : Nat} → VectorBundle M r → Nat → Type u

/-- Compactly-supported forms on a manifold. -/
axiom CompactlySupportedForm : Manifold → Nat → Type u

/-- Integration along the fiber: shifts form-degree down by the rank of
    the bundle. -/
axiom integrateFiber :
    {M : Manifold} → {r : Nat} → {E : VectorBundle M r} → {p : Nat} →
    CompactVerticalForm E (p + r) → CompactlySupportedForm M p

/-- The Thom class: a closed compactly-vertical r-form whose fiber
    integral is one. -/
axiom thomClass :
    {M : Manifold} → {r : Nat} → (E : VectorBundle M r) →
    CompactVerticalForm E r

/-- The Thom-class fiber-integral identity (statement placeholder). -/
axiom thomClass_fiber_integral :
    {M : Manifold} → {r : Nat} → (E : VectorBundle M r) → True

/-- The Euler class as the pullback of the Thom class by the zero section. -/
axiom eulerClass :
    {M : Manifold} → {r : Nat} → (E : VectorBundle M r) → True

/-- The global angular form on the unit-sphere bundle, with Bott-Tu sign
    convention `d psi = - pi^* e(E)`. -/
axiom globalAngularForm :
    {M : Manifold} → {r : Nat} → (E : VectorBundle M r) → True

/-- The de Rham Thom isomorphism: pullback-and-wedge with the Thom class
    is an isomorphism between H^p(M) and H^{p+r}_{cv}(E). -/
axiom thomIsomorphism :
    {M : Manifold} → {r : Nat} → (E : VectorBundle M r) → {p : Nat} → True

end Codex.ModernGeometry.DifferentialForms
