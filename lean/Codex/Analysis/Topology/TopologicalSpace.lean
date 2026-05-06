/-
  Codex.Analysis.Topology.TopologicalSpace

  Companion Lean file for `02.01.01 Topological space`.
  lean_status: full. Mathlib has extensive topological-space infrastructure
  with `TopologicalSpace`, `IsOpen`, `Continuous`, `IsCompact`,
  `IsConnected`, separation axioms, the product topology, etc.
-/

import Mathlib.Topology.Basic
import Mathlib.Topology.Continuous

namespace Codex.Analysis.Topology

variable {X Y Z : Type*} [TopologicalSpace X] [TopologicalSpace Y] [TopologicalSpace Z]

/-- Composition of continuous maps is continuous. -/
example (f : X → Y) (g : Y → Z) (hf : Continuous f) (hg : Continuous g) :
    Continuous (g ∘ f) := hg.comp hf

/-- Preimage of an open set under a continuous map is open. -/
example (f : X → Y) (hf : Continuous f) (U : Set Y) (hU : IsOpen U) :
    IsOpen (f ⁻¹' U) := hU.preimage hf

/-- A continuous image of a compact set is compact. -/
example (f : X → Y) (hf : Continuous f) (K : Set X) (hK : IsCompact K) :
    IsCompact (f '' K) := hK.image hf

/-- The whole space is open. -/
example : IsOpen (Set.univ : Set X) := isOpen_univ

/-- The empty set is open. -/
example : IsOpen (∅ : Set X) := isOpen_empty

end Codex.Analysis.Topology
