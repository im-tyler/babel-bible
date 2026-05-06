/-
  Codex.RepresentationTheory.Foundations.TensorProduct

  Companion Lean file for `07.01.06 Tensor product of representations`.
  lean_status: partial. Mathlib has tensor products of representations
  through `Representation.tprod` and the general tensor-product API
  for modules in `Mathlib.LinearAlgebra.TensorProduct`.
-/

import Mathlib.RepresentationTheory.Basic
import Mathlib.LinearAlgebra.TensorProduct.Basic

namespace Codex.RepresentationTheory.Foundations

-- Tensor product of two representations: (ρ₁ ⊗ ρ₂)(g) = ρ₁(g) ⊗ ρ₂(g)
-- on V₁ ⊗ V₂. The character of V₁ ⊗ V₂ is χ_{V₁} · χ_{V₂}.
-- Mathlib: tensor products of `Representation` are provided via the
-- monoidal structure on `FdRep`.

end Codex.RepresentationTheory.Foundations
