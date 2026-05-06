/-
  Codex.ModernGeometry.Homotopy.CoveringSpace

  Companion Lean file for `03.12.02 Covering space`.
  lean_status: partial. Mathlib has `IsCoveringMap`, basic path-lifting,
  and the deck transformation group. The full Galois correspondence is
  partially formalised.
-/

import Mathlib.Topology.Covering

namespace Codex.ModernGeometry.Homotopy

variable {X Y : Type*} [TopologicalSpace X] [TopologicalSpace Y]

/-- A covering map is continuous. -/
example (p : Y → X) (hp : IsCoveringMap p) : Continuous p := hp.1.continuous

/-- A covering map is surjective. -/
example (p : Y → X) (hp : IsCoveringMap p) : Function.Surjective p := hp.surjective

end Codex.ModernGeometry.Homotopy
