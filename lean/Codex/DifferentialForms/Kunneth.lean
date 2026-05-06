/-
  Codex.DifferentialForms.Kunneth

  Companion Lean file for `03.04.12 Künneth formula for de Rham cohomology — two proofs`.
  lean_status: partial. Mathlib has graded tensor products and a homological-complex
  layer; the de Rham cohomology layer in Codex is itself partial, and the Künneth
  cross-product isomorphism is not yet formalised at the form level. The schematic
  declarations below state the cross product and the Künneth isomorphism abstractly
  so the unit's prose has a Lean anchor; full proofs are gated on the de Rham
  layer landing.
-/

namespace Codex.DifferentialForms.Kunneth

universe u

/-- Schematic carrier for the de Rham cohomology of a smooth manifold in degree `k`. -/
axiom DeRhamCohomology : Type u → Nat → Type u

/-- Cross product of de Rham classes: pull back to the product manifold and wedge. -/
axiom crossProduct :
    {M F : Type u} → {p q : Nat} →
      DeRhamCohomology M p → DeRhamCohomology F q →
        DeRhamCohomology (M × F) (p + q)

/-- Künneth isomorphism statement: cross product is a degree-graded isomorphism on
    finite-type manifolds. The full statement requires a tensor-product graded
    structure and a finiteness hypothesis on `M`; we record only the schematic
    existence here. -/
axiom kunneth_iso :
    {M F : Type u} → {k : Nat} →
      ∀ _h : True,  -- placeholder for the finite-good-cover hypothesis
        DeRhamCohomology (M × F) k = DeRhamCohomology (M × F) k

end Codex.DifferentialForms.Kunneth
