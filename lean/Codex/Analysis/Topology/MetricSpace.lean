/-
  Codex.Analysis.Topology.MetricSpace

  Companion Lean file for `02.01.05 Metric space`.
  lean_status: full. Mathlib has comprehensive metric-space coverage:
  `MetricSpace`, `dist_triangle`, `Cauchy`, `Complete`, the Banach
  fixed-point theorem, Heine-Borel, etc.
-/

import Mathlib.Topology.MetricSpace.Basic
import Mathlib.Topology.MetricSpace.Cauchy

namespace Codex.Analysis.Topology

variable {X : Type*} [MetricSpace X]

/-- Triangle inequality. -/
example (x y z : X) : dist x z ≤ dist x y + dist y z := dist_triangle x y z

/-- Symmetry. -/
example (x y : X) : dist x y = dist y x := dist_comm x y

/-- Positive-definiteness with the equality case. -/
example (x y : X) : dist x y = 0 ↔ x = y := dist_eq_zero

/-- Every convergent sequence is Cauchy. -/
example {ι : Type*} [Preorder ι] {f : Filter ι} (x : ι → X) (a : X)
    (h : Filter.Tendsto x f (nhds a)) : CauchyFilter (Filter.map x f) := by
  exact (h.cauchy_map : _)

end Codex.Analysis.Topology
