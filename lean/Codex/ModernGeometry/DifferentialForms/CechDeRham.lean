/-
  Codex.ModernGeometry.DifferentialForms.CechDeRham

  Companion Lean file for `03.04.11 Čech-de Rham double complex and the
  tic-tac-toe principle`.

  lean_status: partial. Mathlib has chain-complex and double-complex
  infrastructure (`HomologicalComplex`, `HomologicalComplex₂`) and partial
  differential-form support, but the Čech-de Rham double complex itself —
  with its product-cover indexing, restriction-to-intersection face maps,
  and partition-of-unity contracting homotopy — is not yet wired together.
-/

namespace Codex.ModernGeometry.DifferentialForms

universe u

/-- Schematic carrier for a smooth manifold. -/
axiom Manifold : Type u

/-- Schematic carrier for an open cover of a manifold. -/
axiom OpenCover : Manifold → Type u

/-- Bidegree-(p, q) piece of the Čech-de Rham double complex on a cover.
    Concretely: tuples of `q`-forms indexed by ordered (p+1)-tuples of cover
    elements, with values living on the corresponding intersection. -/
axiom CechDeRhamBidegree :
    {M : Manifold} → OpenCover M → Nat → Nat → Type u

/-- Horizontal (Čech) differential: alternating-sum restriction to one more
    intersection. Increases Čech degree by 1. -/
axiom cechDifferential :
    {M : Manifold} → {U : OpenCover M} → {p q : Nat} →
    CechDeRhamBidegree U p q → CechDeRhamBidegree U (p + 1) q

/-- Vertical (de Rham) differential: componentwise exterior derivative on
    each intersection. Increases form degree by 1. -/
axiom deRhamDifferential :
    {M : Manifold} → {U : OpenCover M} → {p q : Nat} →
    CechDeRhamBidegree U p q → CechDeRhamBidegree U p (q + 1)

/-- Both differentials square to zero (placeholder statement). -/
axiom cechDifferential_squared_zero :
    {M : Manifold} → {U : OpenCover M} → {p q : Nat} →
    (ω : CechDeRhamBidegree U p q) →
      cechDifferential (cechDifferential ω) = cechDifferential (cechDifferential ω)

axiom deRhamDifferential_squared_zero :
    {M : Manifold} → {U : OpenCover M} → {p q : Nat} →
    (ω : CechDeRhamBidegree U p q) →
      deRhamDifferential (deRhamDifferential ω) = deRhamDifferential (deRhamDifferential ω)

end Codex.ModernGeometry.DifferentialForms
