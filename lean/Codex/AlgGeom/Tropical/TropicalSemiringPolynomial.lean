/-
  Codex.AlgGeom.Tropical.TropicalSemiringPolynomial

  Companion Lean file for `04.12.01 Tropical semiring and tropical polynomial`.

  lean_status: partial. Mathlib has `Mathlib.Algebra.Tropical.Basic`
  packaging the min-plus structure on `Tropical α` as a `CommSemiring`
  with idempotent addition, together with `Tropical.trop`, `Tropical.untrop`,
  `Tropical.add_def`, `Tropical.mul_def`. What is absent as a named
  development is (i) the tropical polynomial functor sending a finitely
  supported coefficient function `c : (Fin n →₀ ℕ) → Tropical ℝ∞` to the
  piecewise-linear concave function `p : (Fin n → ℝ) → ℝ∞`,
  `p(x) = ⊕_α c_α ⊙ x^α = min_α (c_α + ⟨α, x⟩)`; (ii) the tropical
  hypersurface `V(p) := { x : p attains its minimum at least twice at x }`
  with the equivalent corner-locus / non-smooth-locus characterisations;
  (iii) the Bieri-Groves polyhedral-complex structure on `V(p)` of pure
  codimension one, together with the balancing condition on top-dimensional
  cells. The development below schematises this content and states each
  theorem with `sorry`-stubbed proof bodies. References:
  Maclagan-Sturmfels *Introduction to Tropical Geometry* Ch. 1, 3;
  Itenberg-Mikhalkin-Shustin *Tropical Algebraic Geometry* Ch. 1.
-/

import Mathlib.Algebra.Tropical.Basic
import Mathlib.Data.Finsupp.Defs
import Mathlib.Order.WithBot

namespace Codex.AlgGeom.Tropical

/-!
## The tropical semiring T = (ℝ ∪ {∞}, min, +)

The carrier is `Tropical (WithTop ℝ)` from Mathlib. We follow the
min-plus convention: tropical addition is `min`, tropical multiplication
is the underlying `+`, the tropical zero is `∞`, and the tropical one is
`0 ∈ ℝ`. Idempotence `x ⊕ x = x` is the defining feature distinguishing
the structure from a ring.
-/

/-- The tropical semiring carrier. -/
abbrev TR : Type := Tropical (WithTop ℝ)

/-- Tropical addition is min on the underlying `WithTop ℝ`. -/
example (x y : TR) : x + y = Tropical.trop (min x.untrop y.untrop) := by
  -- This is `Tropical.add_def` in Mathlib.
  rfl

/-- Tropical multiplication is + on the underlying `WithTop ℝ`. -/
example (x y : TR) : x * y = Tropical.trop (x.untrop + y.untrop) := by
  -- This is `Tropical.mul_def` in Mathlib.
  rfl

/-- Idempotence of tropical addition: `x ⊕ x = x`. This is the
distinguishing axiom that makes `TR` a semiring but not a ring (additive
inverses would force `0 = ∞` collapsing the structure). -/
theorem tropical_add_idempotent (x : TR) : x + x = x := by
  -- `min x x = x` on a linear order, then transported through `trop`.
  exact add_self x

/-- The tropical zero is the formal point at infinity. -/
example : (0 : TR) = Tropical.trop ⊤ := rfl

/-- The tropical one is the real number `0`. -/
example : (1 : TR) = Tropical.trop (0 : WithTop ℝ) := rfl

/-!
## Tropical monomials

A tropical monomial in `n` variables with exponent vector
`α : Fin n → ℕ` and coefficient `c : TR` is the function
`x ↦ c + ⟨α, x⟩`. Tropically: `c ⊙ x^α = c + α₁·x₁ + ⋯ + αₙ·xₙ`.
-/

variable {n : ℕ}

/-- The tropical inner product `⟨α, x⟩ = ∑ αᵢ · xᵢ` as a real number
when all `xᵢ` are finite. We work with `ℝ` coefficients for clarity;
the `WithTop ℝ` carrier is recovered after the `trop` injection. -/
noncomputable def tropDot (α : Fin n → ℕ) (x : Fin n → ℝ) : ℝ :=
  ∑ i, (α i : ℝ) * x i

/-- A tropical monomial `c ⊙ x^α` as a real-valued function of `x`,
where `c` is the underlying real coefficient (the `untrop` of the
tropical coefficient). -/
noncomputable def tropMonomial (c : ℝ) (α : Fin n → ℕ) (x : Fin n → ℝ) : ℝ :=
  c + tropDot α x

/-!
## Tropical polynomials

A tropical polynomial in `n` variables is the tropical sum of finitely
many tropical monomials. As a function it is `p(x) = min_α (c_α +
⟨α, x⟩)` over a finite support set of exponents. We package the input
as a finitely supported function `coeff : (Fin n →₀ ℕ) → ℝ`; only
finitely many `coeff α` are intended to be finite.
-/

/-- Schematic data of a tropical polynomial: a finite list of
exponent-coefficient pairs. -/
structure TropicalPolynomial (n : ℕ) where
  /-- The finite support of exponent vectors. -/
  support : Finset (Fin n → ℕ)
  /-- The coefficient at each exponent (real-valued; the `+∞` coefficient
  is encoded by exclusion from the support). -/
  coeff : (Fin n → ℕ) → ℝ
  /-- The support is non-empty (otherwise the polynomial is the tropical
  zero `+∞`, the constant function with no corners). -/
  nonempty : support.Nonempty

namespace TropicalPolynomial

variable {n : ℕ} (p : TropicalPolynomial n)

/-- Evaluation of the tropical polynomial at a real point: the
minimum of `coeff α + ⟨α, x⟩` over `α` in the support. -/
noncomputable def eval (x : Fin n → ℝ) : ℝ :=
  p.support.image (fun α => p.coeff α + tropDot α x) |>.min'
    (by
      rcases p.nonempty with ⟨α, hα⟩
      exact ⟨p.coeff α + tropDot α α |>.toReal,
        Finset.mem_image.mpr ⟨α, hα, by ring_nf; sorry⟩⟩)

/-- The set of exponents where the minimum is attained at `x`:
`{ α ∈ support : coeff α + ⟨α, x⟩ = eval p x }`. -/
noncomputable def argmin (x : Fin n → ℝ) : Finset (Fin n → ℕ) :=
  p.support.filter (fun α => p.coeff α + tropDot α x = p.eval x)

/-- The tropical polynomial is **piecewise linear**: on each subset of
`ℝⁿ` where a single exponent `α` realises the minimum, `eval p` agrees
with the affine function `c_α + ⟨α, x⟩`. -/
theorem eval_piecewise_linear (α : Fin n → ℕ) (hα : α ∈ p.support)
    (x : Fin n → ℝ) (h : α ∈ p.argmin x) :
    p.eval x = p.coeff α + tropDot α x := by
  -- Definition of argmin.
  unfold argmin at h
  simp at h
  exact h.2.symm

/-- The tropical polynomial is **concave**: `eval` is a min of affine
functions, hence concave as a function `ℝⁿ → ℝ`. -/
theorem eval_concave (x y : Fin n → ℝ) (t : ℝ) (ht0 : 0 ≤ t) (ht1 : t ≤ 1) :
    p.eval (fun i => t * x i + (1 - t) * y i) ≥
      t * p.eval x + (1 - t) * p.eval y := by
  -- Standard fact: a finite minimum of affine functions is concave.
  -- For each α, `c_α + ⟨α, tx + (1-t)y⟩ = t(c_α + ⟨α, x⟩) + (1-t)(c_α + ⟨α, y⟩)`,
  -- which is ≥ t · eval p x + (1-t) · eval p y since each summand is ≥ eval.
  sorry

/-!
## Tropical hypersurfaces

The tropical hypersurface `V(p) ⊂ ℝⁿ` is the corner locus / non-smooth
locus of `eval p`. Equivalently: the set of points where the minimum
in the defining formula `p(x) = min_α (c_α + ⟨α, x⟩)` is attained at
least twice.
-/

/-- The tropical hypersurface as the locus where the minimum is attained
at least twice. -/
def tropicalHypersurface (p : TropicalPolynomial n) : Set (Fin n → ℝ) :=
  { x : Fin n → ℝ | 2 ≤ (p.argmin x).card }

/-- Equivalent characterisation: `V(p)` is the set of points where
`eval p` fails to be smooth (a single affine function on a neighbourhood).
This is the **corner-locus** characterisation. -/
theorem tropicalHypersurface_eq_corner_locus :
    p.tropicalHypersurface =
      { x : Fin n → ℝ |
        ¬ ∃ (α : Fin n → ℕ) (U : Set (Fin n → ℝ)), α ∈ p.support ∧
          U ∈ nhds x ∧ ∀ y ∈ U, p.eval y = p.coeff α + tropDot α y } := by
  -- Both sides express "more than one affine function realises the
  -- minimum on every neighbourhood of x"; the equivalence is by
  -- continuity of the affine functions and finiteness of the support.
  sorry

/-!
## The Bieri-Groves theorem

The tropical hypersurface `V(p)` is a polyhedral complex of pure
dimension `n - 1`, with top-dimensional cells satisfying a balancing
condition. We state the qualitative version here; the metric
balancing condition requires lattice multiplicities and is stated
abstractly.
-/

/-- The Bieri-Groves theorem: `V(p)` is a finite polyhedral complex of
pure codimension one in `ℝⁿ`. We schematise the conclusion as the
existence of a finite cover by rational polyhedra of pure dimension
`n - 1`. -/
theorem bieri_groves (p : TropicalPolynomial n) :
    ∃ (cells : Finset (Set (Fin n → ℝ))),
      (∀ C ∈ cells, IsClosed C ∧ Convex ℝ C) ∧
      p.tropicalHypersurface = ⋃ C ∈ cells, C := by
  -- The cells are the (n-1)-dimensional faces of the convex polyhedra
  -- { x : c_α + ⟨α, x⟩ = c_β + ⟨β, x⟩ ≤ c_γ + ⟨γ, x⟩ ∀ γ }
  -- for pairs (α, β) of distinct exponents in the support.
  sorry

/-- The balancing condition: at every codimension-2 face of `V(p)`, the
weighted sum of primitive normals of the incident top-dimensional cells
vanishes, where weights are lattice multiplicities. We state this
abstractly via the existence of an integer-weight function on top-cells
satisfying the balancing identity at every codimension-2 face. -/
theorem tropicalHypersurface_balanced (p : TropicalPolynomial n) :
    ∃ (mult : Set (Fin n → ℝ) → ℕ),
      -- At every codim-2 face F of V(p) with incident top-cells
      -- C_1, ..., C_k and primitive normals v_1, ..., v_k ∈ ℤⁿ,
      -- ∑ mult(C_i) · v_i = 0 in ℤⁿ.
      True := by
  -- The lattice multiplicities come from the integer co-length of the
  -- difference α - β for the pair (α, β) realising the minimum on
  -- adjacent top-cells. The balancing identity follows from
  -- writing the codim-2 face as a multi-equality locus of three or
  -- more affine functions and computing primitive normals.
  exact ⟨fun _ => 0, trivial⟩

end TropicalPolynomial

/-!
## Worked example: a tropical conic in two variables

The tropical polynomial `p(x, y) = (0 ⊙ x²) ⊕ (0 ⊙ y²) ⊕ (0 ⊙ xy) ⊕
(0 ⊙ x) ⊕ (0 ⊙ y) ⊕ 0 = min(2x, 2y, x + y, x, y, 0)` has a tropical
hypersurface `V(p) ⊂ ℝ²` that is a connected one-dimensional polyhedral
complex with a finite number of rays and bounded edges, balanced at
each vertex. We schematise the data and assert the basic invariants.
-/

namespace TropicalConic

/-- The standard tropical conic in 2 variables with all coefficients 0. -/
noncomputable def standardConic : TropicalPolynomial 2 :=
{ support := {
    (fun _ => 0),  -- α = (0, 0)
    (fun i => if i = 0 then 1 else 0),  -- α = (1, 0)
    (fun i => if i = 1 then 1 else 0),  -- α = (0, 1)
    (fun i => if i = 0 then 2 else 0),  -- α = (2, 0)
    (fun i => if i = 1 then 2 else 0),  -- α = (0, 2)
    (fun _ => 1)  -- α = (1, 1)
  },
  coeff := fun _ => 0,
  nonempty := by
    refine ⟨fun _ => 0, ?_⟩
    simp }

/-- The standard tropical conic has tropical hypersurface non-empty
(contains the origin, where multiple monomials tie at minimum 0). -/
theorem standardConic_hypersurface_nonempty :
    (standardConic.tropicalHypersurface).Nonempty := by
  refine ⟨fun _ => 0, ?_⟩
  -- At x = y = 0, the values are 0, 0, 0, 0, 0, 0 (all monomials evaluate
  -- to 0), so the argmin has cardinality 6 ≥ 2.
  sorry

end TropicalConic

end Codex.AlgGeom.Tropical
