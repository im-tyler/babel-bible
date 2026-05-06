/-
  Codex.ModernGeometry.Homotopy.Homotopy

  Companion Lean file for `03.12.01 Homotopy and homotopy group`.
  lean_status: partial. Mathlib has `ContinuousMap.Homotopy`,
  `FundamentalGroup`, and pointed-topology infrastructure; higher
  homotopy groups are partially formalised.
-/

import Mathlib.Topology.Homotopy.Basic
import Mathlib.AlgebraicTopology.FundamentalGroupoid.FundamentalGroup

namespace Codex.ModernGeometry.Homotopy

variable {X Y : Type*} [TopologicalSpace X] [TopologicalSpace Y]

/-- A homotopy between two continuous maps is a continuous family
    interpolating them. Mathlib's `ContinuousMap.Homotopy` packages this. -/
example (f g : C(X, Y)) (H : ContinuousMap.Homotopy f g) :
    ContinuousMap.Homotopy f g := H

/-- The fundamental group of a pointed topological space is a group. -/
example (X : Type*) [TopologicalSpace X] (x : X) :
    Group (FundamentalGroup X x) := inferInstance

end Codex.ModernGeometry.Homotopy
