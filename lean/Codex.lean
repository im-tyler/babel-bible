/-
  Codex — top-level Lean library.

  Each curriculum unit at `lean_status: full` or `lean_status: partial`
  has a corresponding module under `Codex/<Section>/<Slug>.lean`.
  This file imports the full set so `lake build` checks all of them.
-/

import Codex.Precalc.Numbers.Reals
import Codex.Precalc.Equations.LinesPlane
import Codex.Precalc.Inequalities.Basic
import Codex.SpinGeometry.CliffordAlgebra
import Codex.Foundations.LinearAlgebra.VectorSpace
import Codex.Foundations.LinearAlgebra.Basis
import Codex.Foundations.LinearAlgebra.RankNullity
import Codex.Foundations.LinearAlgebra.Determinant
import Codex.Foundations.LinearAlgebra.BilinearQuadraticForm
import Codex.Analysis.FunctionalAnalysis.BanachSpaces
import Codex.Analysis.FunctionalAnalysis.HilbertSpace
import Codex.ModernGeometry.DifferentialForms.DeRhamCohomology
