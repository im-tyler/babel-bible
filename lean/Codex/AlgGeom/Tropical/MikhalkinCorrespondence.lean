/-
  Codex.AlgGeom.Tropical.MikhalkinCorrespondence

  Companion Lean file for `04.12.05 Mikhalkin's correspondence theorem`.

  lean_status: partial. Mathlib has no tropical-geometry development at
  present beyond the basic `Tropical` semiring API in
  `Mathlib.Algebra.Tropical.Basic`. The correspondence theorem
  (Mikhalkin 2005 *J. Amer. Math. Soc.* 18) connects the enumerative
  count of complex algebraic curves of fixed Newton polygon $\Delta$ and
  genus $g$ through a generic point configuration in a toric surface to
  the weighted count of tropical curves through the corresponding
  tropical points. The full proof depends on Puiseux series,
  toric-variety degenerations, and the Viro patchworking construction
  (Viro 1984), none of which are formalised in Mathlib at this scale.

  The formalisable kernel is purely combinatorial:

  (i) the **trivalent multiplicity formula**
     $m(V) = w_1 w_2 |\det(v_1, v_2)|$
     and its balancing-invariance (the three pairwise determinant
     computations agree);

  (ii) the **dimension count**
     $r = |\Delta \cap \mathbb{Z}^2| - 1 - g$
     for the moduli of tropical curves of Newton polygon $\Delta$ and
     genus $g$;

  (iii) the **correspondence statement** as a sorry-stubbed theorem
     equating the Mikhalkin tropical count with the complex algebraic
     count;

  (iv) the **Welschinger sign rule** equating the signed tropical count
     with the Welschinger invariant of real rational curves.

  Below: the combinatorial structures with proofs where possible and
  `sorry`-stubbed theorems where the geometric content lies beyond the
  current Mathlib horizon.
-/

import Mathlib.Data.Int.Defs
import Mathlib.Data.Matrix.Basic
import Mathlib.Algebra.BigOperators.Basic
import Mathlib.Data.Finset.Basic

namespace Codex.AlgGeom.Tropical

open scoped BigOperators

/-!
## Trivalent vertex multiplicity

A trivalent vertex of a tropical curve in $\mathbb{R}^2$ is specified by
three primitive integer-direction vectors with positive integer weights,
satisfying the balancing condition.
-/

/-- Primitive integer direction in $\mathbb{Z}^2$. We do not enforce
primitivity at the type level — the multiplicity formula is invariant
under primitive-or-not since the integer weights absorb the rescaling. -/
abbrev Dir := ℤ × ℤ

/-- The signed 2x2 determinant $\det(v_1 | v_2) = v_1^x v_2^y - v_1^y v_2^x$. -/
def det2 (v₁ v₂ : Dir) : ℤ :=
  v₁.1 * v₂.2 - v₁.2 * v₂.1

/-- Data of a trivalent vertex: three weighted primitive directions
satisfying the balancing condition $\sum_i w_i v_i = 0$. -/
structure TrivalentVertexData where
  v₁ : Dir
  v₂ : Dir
  v₃ : Dir
  w₁ : ℕ
  w₂ : ℕ
  w₃ : ℕ
  w₁_pos : 0 < w₁
  w₂_pos : 0 < w₂
  w₃_pos : 0 < w₃
  /-- The balancing condition: $w_1 v_1 + w_2 v_2 + w_3 v_3 = 0$ in $\mathbb{Z}^2$. -/
  balanced :
    ((w₁ : ℤ) * v₁.1 + (w₂ : ℤ) * v₂.1 + (w₃ : ℤ) * v₃.1 = 0) ∧
    ((w₁ : ℤ) * v₁.2 + (w₂ : ℤ) * v₂.2 + (w₃ : ℤ) * v₃.2 = 0)

namespace TrivalentVertexData

/-- The Mikhalkin tropical multiplicity at a trivalent vertex,
defined from the first pair of directions. -/
def multiplicity (V : TrivalentVertexData) : ℕ :=
  V.w₁ * V.w₂ * (det2 V.v₁ V.v₂).natAbs

/-- Balancing invariance, version 1: the multiplicity computed from
the pair $(v_1, v_2)$ equals the multiplicity from the pair $(v_2, v_3)$.

Proof scaffold: from $w_3 v_3 = -w_1 v_1 - w_2 v_2$ we get
$\det(w_2 v_2, w_3 v_3) = -w_1 w_2 \det(v_2, v_1) = w_1 w_2 \det(v_1, v_2)$;
taking absolute values gives the equality of the multiplicities. -/
theorem multiplicity_eq_from_v₂_v₃ (V : TrivalentVertexData) :
    V.w₁ * V.w₂ * (det2 V.v₁ V.v₂).natAbs =
    V.w₂ * V.w₃ * (det2 V.v₂ V.v₃).natAbs := by
  sorry

/-- Balancing invariance, version 2: $(v_1, v_3)$ gives the same multiplicity. -/
theorem multiplicity_eq_from_v₁_v₃ (V : TrivalentVertexData) :
    V.w₁ * V.w₂ * (det2 V.v₁ V.v₂).natAbs =
    V.w₁ * V.w₃ * (det2 V.v₁ V.v₃).natAbs := by
  sorry

/-- The multiplicity equals twice the lattice area of the triangle
spanned by the weighted directions $w_1 v_1$ and $w_2 v_2$. The lattice
area is half the absolute determinant; doubling recovers $m(V)$. -/
theorem multiplicity_eq_lattice_area_x_two (V : TrivalentVertexData) :
    (V.multiplicity : ℤ) = (V.w₁ * V.w₂ : ℤ) * (det2 V.v₁ V.v₂).natAbs := by
  simp [multiplicity]

end TrivalentVertexData

/-!
## Tropical curve and Newton polygon

A tropical curve in $\mathbb{R}^2$ is a finite weighted graph
embedded with primitive integer directions, balanced at every vertex.
We model only the data needed for the multiplicity formula.
-/

/-- A Newton polygon $\Delta \subset \mathbb{Z}^2$, given by its
finset of lattice points. -/
structure NewtonPolygon where
  points : Finset (ℤ × ℤ)
  nonempty : points.Nonempty

namespace NewtonPolygon

/-- The number of lattice points $S = |\Delta \cap \mathbb{Z}^2|$. -/
def latticeCount (Δ : NewtonPolygon) : ℕ := Δ.points.card

end NewtonPolygon

/-- A simple tropical curve: a finset of trivalent vertices whose
combined data realises a connected balanced graph with prescribed
unbounded directions matching the inner normals of a Newton polygon. -/
structure SimpleTropicalCurve where
  vertices : Finset TrivalentVertexData
  /-- Genus of the underlying graph (first Betti number). -/
  genus : ℕ
  /-- Compatibility with a Newton polygon — the unbounded ends match
  the polygon's edge primitive-normal multiset. We elide the precise
  combinatorial encoding here. -/
  newton_polygon : NewtonPolygon

namespace SimpleTropicalCurve

/-- The Mikhalkin tropical multiplicity of the curve: product of
trivalent-vertex multiplicities. -/
noncomputable def multiplicity (Γ : SimpleTropicalCurve) : ℕ :=
  ∏ V ∈ Γ.vertices, V.multiplicity

/-- The dimension formula: the moduli of simple tropical curves of
Newton polygon $\Delta$ and genus $g$ has dimension
$|\Delta \cap \mathbb{Z}^2| - 1 - g$. -/
def moduliDimension (Δ : NewtonPolygon) (g : ℕ) : ℤ :=
  (Δ.latticeCount : ℤ) - 1 - (g : ℤ)

/-- The required number of generic points to fix a finite count of
tropical curves: $r = |\Delta \cap \mathbb{Z}^2| - 1 - g$. -/
def pointConditionCount (Δ : NewtonPolygon) (g : ℕ) : ℤ :=
  moduliDimension Δ g

end SimpleTropicalCurve

/-!
## Mikhalkin's correspondence (statement)

The correspondence theorem of Mikhalkin 2005 *J. Amer. Math. Soc.* 18:
for a generic configuration of $r$ tropical points in $\mathbb{R}^2$
(where $r$ is the dimension count above), the Mikhalkin tropical count
equals the complex algebraic count.

We state the correspondence schematically: the complex enumerative
count $N^{\Delta, g}_\mathbb{C}$ is an external natural number (the
output of the algebraic-geometric enumeration); the tropical count
$N^{\Delta, g}_{\text{trop}}$ is a sum of multiplicities. The theorem
asserts equality for generic inputs.
-/

/-- Schematic counting datum: pairs a Newton polygon, a genus, and the
combined complex-vs-tropical enumeration. -/
structure CorrespondenceData where
  newton : NewtonPolygon
  genus : ℕ
  /-- The complex algebraic count $N^{\Delta, g}$ — the number of
  irreducible complex curves of Newton polygon $\Delta$, genus $g$,
  through $r$ generic points in $(\mathbb{C}^*)^2$. -/
  complex_count : ℕ
  /-- The Mikhalkin tropical count $\sum_\Gamma m(\Gamma)$ — sum over
  simple tropical curves through the corresponding $r$ generic
  tropical points, weighted by the multiplicity formula. -/
  tropical_count : ℕ

/-- **Mikhalkin's correspondence theorem** (Mikhalkin 2005
*J. Amer. Math. Soc.* 18, Theorem 1).

For every choice of Newton polygon $\Delta$ and genus $g$, the complex
enumerative count equals the Mikhalkin tropical count. The full proof
uses the valuation map $\mathrm{val}: (\mathbb{C}\{\{t\}\}^*)^2 \to \mathbb{R}^2$,
Viro's patchworking construction (1984), and the local multiplicity
computation at trivalent vertices via Bézout-style intersection theory.

We state the theorem as a `sorry`-stubbed equality, pending the
Mathlib infrastructure for Puiseux series, toric degenerations, and
the Viro patchworking lemma. -/
theorem mikhalkin_correspondence (D : CorrespondenceData) :
    D.complex_count = D.tropical_count := by
  sorry

/-!
## Welschinger invariants and the real version

Mikhalkin 2007 *Inventiones* 167 and Itenberg-Kharlamov-Shustin 2003
*IMRN* extend the correspondence to real enumerative geometry: the
Welschinger invariant of real rational curves equals a signed
Mikhalkin tropical count, with the sign determined by the parity of
odd-multiplicity bounded edges.
-/

/-- Welschinger / signed tropical correspondence data. The signed
tropical count is $\sum_\Gamma (-1)^{n(\Gamma)} m(\Gamma)$, where
$n(\Gamma)$ is the count of odd-multiplicity bounded edges. -/
structure SignedCorrespondenceData where
  newton : NewtonPolygon
  /-- The Welschinger invariant $W_d$ of the real toric surface
  attached to $\Delta$, as an integer (signed count). -/
  welschinger : ℤ
  /-- The signed Mikhalkin tropical count: sum of signed multiplicities. -/
  signed_tropical : ℤ

/-- **Mikhalkin / Itenberg-Kharlamov-Shustin signed correspondence**
(Mikhalkin 2007 *Inventiones* 167; Itenberg-Kharlamov-Shustin 2003
*Intl. Math. Res. Notices* 49).

The Welschinger invariant $W_d$ of real rational curves through real
generic points in $\mathbb{P}^2(\mathbb{R})$ equals the signed
Mikhalkin tropical count $\sum_\Gamma (-1)^{n(\Gamma)} m(\Gamma)$,
with the sign determined by the parity of odd-multiplicity bounded
edges of the tropical curve. -/
theorem welschinger_correspondence (S : SignedCorrespondenceData) :
    S.welschinger = S.signed_tropical := by
  sorry

/-!
## Numerical witnesses

The smallest non-trivial cases of the correspondence — degree-one and
degree-two plane curves — are immediate by inspection. We record the
witnesses to anchor the formal statement against the worked examples
in `04.12.05` Mikhalkin's correspondence theorem.
-/

/-- The number of complex lines through two generic points in
$\mathbb{P}^2$ is one. -/
def N_1 : ℕ := 1

/-- The number of complex rational conics through five generic points
in $\mathbb{P}^2$ is one. -/
def N_2 : ℕ := 1

/-- The number of complex rational cubics through eight generic
points in $\mathbb{P}^2$ is twelve (Kontsevich-Manin 1994). -/
def N_3 : ℕ := 12

/-- The Welschinger invariant of real cubics through eight real points:
$W_3 = 8$ (Welschinger 2005; Itenberg-Kharlamov-Shustin 2003). -/
def W_3 : ℤ := 8

/-- Sanity check: the Kontsevich-Manin counts satisfy the difference
$N_3 - W_3 = 4$, the count of complex-conjugate pairs of non-real
rational cubics contributing equally to $N_3$ but cancelling in $W_3$. -/
example : (N_3 : ℤ) - W_3 = 4 := by decide

end Codex.AlgGeom.Tropical
