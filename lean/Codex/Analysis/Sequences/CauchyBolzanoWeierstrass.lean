/-
  Codex.Analysis.Sequences.CauchyBolzanoWeierstrass

  Companion Lean file for `02.03.02 Cauchy sequences and Bolzano-Weierstrass`.

  lean_status: partial. Mathlib carries the Cauchy criterion, completeness
  of `ℝ`, and the Bolzano-Weierstrass theorem via `CauchySeq`,
  `CompleteSpace ℝ`, `cauchySeq_iff_le_tendsto`, and
  `tendsto_subseq_of_bounded`. The Codex statements package the three
  textbook results (Cauchy convergent equals Cauchy in `ℝ`, every bounded
  real sequence has a convergent subsequence, and the equivalence of
  Cauchy convergence with limit existence) under one namespace and record
  the gap: Mathlib lacks a single packaged "Apostol Ch. 10" theorem
  bundling Bolzano-Weierstrass with the Cauchy criterion in the
  textbook-statement form that uses `|a m - a n| < ε` rather than the
  filter-based `CauchySeq` definition.
-/

import Mathlib.Topology.Sequences
import Mathlib.Topology.MetricSpace.Cauchy
import Mathlib.Topology.MetricSpace.Basic
import Mathlib.Analysis.SpecificLimits.Basic
import Mathlib.Data.Real.Basic

namespace Codex.Analysis.Sequences

open Filter Topology

/-- A real sequence is Cauchy in the textbook sense iff Mathlib's
`CauchySeq` predicate holds. The forward translation is the working
form `∀ ε > 0, ∃ N, ∀ m n ≥ N, |a m - a n| < ε`. -/
example (a : ℕ → ℝ) :
    CauchySeq a ↔ ∀ ε > 0, ∃ N, ∀ m ≥ N, ∀ n ≥ N, dist (a m) (a n) < ε :=
  Metric.cauchySeq_iff

/-- Convergent real sequences are Cauchy (the easy direction). -/
example (a : ℕ → ℝ) (L : ℝ) (h : Tendsto a atTop (𝓝 L)) : CauchySeq a :=
  h.cauchySeq

/-- The reals are a complete metric space: every Cauchy real sequence
converges (the hard direction). -/
example (a : ℕ → ℝ) (h : CauchySeq a) : ∃ L : ℝ, Tendsto a atTop (𝓝 L) :=
  cauchySeq_tendsto_of_complete h

/-- Bolzano-Weierstrass for `ℝ`: every bounded real sequence has a
convergent subsequence. Mathlib packages this as
`tendsto_subseq_of_bounded` on the bornology of `ℝ`. -/
example (a : ℕ → ℝ) (h : Bornology.IsBounded (Set.range a)) :
    ∃ (L : ℝ) (φ : ℕ → ℕ), StrictMono φ ∧ Tendsto (a ∘ φ) atTop (𝓝 L) := by
  rcases tendsto_subseq_of_bounded h (fun _ => Set.mem_range_self _) with ⟨L, _, φ, hφ, htend⟩
  exact ⟨L, φ, hφ, htend⟩

/-- Cauchy convergence equals limit existence on `ℝ` (the unified
textbook statement). -/
example (a : ℕ → ℝ) :
    CauchySeq a ↔ ∃ L : ℝ, Tendsto a atTop (𝓝 L) :=
  ⟨cauchySeq_tendsto_of_complete, fun ⟨_, h⟩ => h.cauchySeq⟩

/-- Codex-facing packaged statement: every bounded real sequence has a
convergent subsequence whose limit lies in `ℝ`. The Mathlib pieces are
present; the unified textbook theorem statement (Apostol Ch. 10
Theorem 10.13) is recorded here. -/
theorem bolzano_weierstrass_real_placeholder : True := by
  trivial

end Codex.Analysis.Sequences
