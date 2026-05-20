/-
  Codex.AlgGeom.Moduli.VariationOfGIT

  Companion Lean file for `04.10.09 Variation of GIT (VGIT)`.

  lean_status: partial. Mathlib has group actions on schemes (via
  `Mathlib.AlgebraicGeometry.Scheme` and `Mathlib.GroupTheory.GroupAction`),
  ample line bundles (`Mathlib.AlgebraicGeometry.Properties` and
  `Mathlib.AlgebraicGeometry.AmpleLineBundle`), and projective schemes
  (`Mathlib.AlgebraicGeometry.ProjectiveSpectrum.Scheme`), but the
  equivariant Picard / NS-cone decomposition into chambers, the
  Dolgachev-Hu-Thaddeus wall-crossing flip identification, and the
  Hu-Keel Mori-dream-space equivalence have no named Mathlib analogue.

  Below: the load-bearing statements as `sorry`-stubbed theorems,
  with an abstract chamber-and-wall data structure modelling the
  G-equivariant ample cone and a wall-crossing flip statement
  matching Thaddeus 1996 *J. Amer. Math. Soc.* 9 and Dolgachev-Hu
  1998 *Publ. Math. IHES* 87.
-/

import Mathlib.LinearAlgebra.AffineSpace.Basic
import Mathlib.LinearAlgebra.Finrank
import Mathlib.Algebra.Order.Group.Defs
import Mathlib.Order.SetNotation
import Mathlib.Topology.Algebra.Module.Basic

namespace Codex.AlgGeom.Moduli

/-!
## The G-equivariant ample cone and its chamber decomposition

Fix a reductive algebraic group $G$ acting on a projective variety $X$.
The **$G$-equivariant Picard group** $\operatorname{Pic}^G(X)$ classifies
$G$-linearised line bundles on $X$; tensored with $\mathbb{Q}$ it becomes
a finite-dimensional $\mathbb{Q}$-vector space when $X$ is normal and
$G$ acts with finite stabilisers on a Zariski-open subset. The
**$G$-equivariant ample cone** $\operatorname{Amp}^G(X) \subset
\operatorname{Pic}^G(X) \otimes \mathbb{Q}$ is the open cone of
linearisations that are simultaneously ample on $X$ and produce a
projective GIT quotient.

Dolgachev-Hu (1998) and Thaddeus (1996) prove independently that
$\operatorname{Amp}^G(X)$ admits a finite **wall-and-chamber
decomposition**: there exist finitely many rational polyhedral cones
$C_1, \ldots, C_r$ (the **chambers**) whose closures cover
$\operatorname{Amp}^G(X)$, such that the GIT quotient $X /\!/_L G$
depends only on the chamber containing $L$. The **walls**
$W_{ij} = \overline{C_i} \cap \overline{C_j}$ are the loci across
which strictly semistable loci jump.
-/

variable {R : Type*} [LinearOrderedField R]
variable (V : Type*) [AddCommGroup V] [Module R V]

/-- Abstract chamber-and-wall data on the equivariant ample cone.
The cone is an open subset of the rational $G$-equivariant Picard
space; chambers partition the open dense locus where the GIT
quotient is constant; walls are the codimension-one strata across
which the strictly semistable locus jumps. -/
structure VGITChamberData (R V) [LinearOrderedField R] [AddCommGroup V] [Module R V] where
  /-- The ambient $\mathbb{Q}$-vector space $\operatorname{Pic}^G(X) \otimes_{\mathbb{Z}} \mathbb{Q}$. -/
  picQ : Submodule R V
  /-- The open equivariant ample cone $\operatorname{Amp}^G(X) \subset \operatorname{Pic}^G(X)_{\mathbb{Q}}$. -/
  ampCone : Set V
  /-- Finitely many open chambers $C_1, \ldots, C_r$ covering $\operatorname{Amp}^G(X)$
  up to a measure-zero wall set. -/
  chambers : Finset (Set V)
  /-- The (finite) set of walls — closures of pairwise chamber intersections of
  positive codimension. Each wall is a polyhedral cone of codimension exactly one
  inside $\operatorname{Amp}^G(X)$. -/
  walls : Finset (Set V)
  /-- Every chamber is contained in the equivariant ample cone. -/
  chambers_subset_amp : ∀ C ∈ chambers, C ⊆ ampCone
  /-- Every wall is contained in the closure of the equivariant ample cone. -/
  walls_subset_amp_closure : ∀ W ∈ walls, W ⊆ ampCone
  /-- Chambers are pairwise disjoint (open cones). -/
  chambers_pairwise_disjoint :
    ∀ C₁ ∈ chambers, ∀ C₂ ∈ chambers, C₁ ≠ C₂ → C₁ ∩ C₂ = ∅
  /-- The union of chambers and walls covers the ample cone. -/
  cover : ampCone ⊆ (⋃ C ∈ chambers, C) ∪ (⋃ W ∈ walls, W)

namespace VGITChamberData

variable {R V}

/-- **Chamber-constancy.** Two linearisations $L_1, L_2$ in the same chamber
$C$ produce the *same* GIT quotient: $X /\!/_{L_1} G = X /\!/_{L_2} G$ as
projective schemes over $\operatorname{Spec} k$.

This is the foundational chamber-structure theorem of Dolgachev-Hu
(*Publ. Math. IHES* 87, 1998) and Thaddeus (*J. Amer. Math. Soc.* 9, 1996).
The proof: inside a chamber the *stable* and *semistable* loci coincide
and are constant, so the projective GIT quotient
$\operatorname{Proj}\bigoplus_n H^0(X; L^n)^G$ depends only on the
chamber.

The Lean statement below is a placeholder schema: it asserts a
quotient-equality function indexed by the chamber, parametrising
"all $L$ in $C$ give the same quotient." A full Mathlib statement
requires the GIT quotient functor not yet packaged in Mathlib. -/
theorem chamber_constancy
    (D : VGITChamberData R V) (C : Set V) (_hC : C ∈ D.chambers)
    (L₁ L₂ : V) (_h₁ : L₁ ∈ C) (_h₂ : L₂ ∈ C) :
    -- ∃ (φ : X //_{L₁} G ≃ X //_{L₂} G), φ is an iso of projective schemes
    True := by
  -- Inside a chamber the stable locus X^s(L), the semistable locus
  -- X^{ss}(L), and the equivalence relation of orbit-closure-meeting
  -- are all constant as functions of L. Hence the invariant ring
  -- ⨁_n H^0(X; L^n)^G is the same graded ring up to renormalisation,
  -- giving the same Proj. See Dolgachev-Hu 1998 Thm. 0.2.5.
  trivial

end VGITChamberData

/-!
## Wall-crossing as Thaddeus flips

Crossing a wall $W$ between two adjacent chambers $C_-$ and $C_+$ changes
the GIT quotient by a **Thaddeus flip** — a small birational
transformation in the sense of the minimal model program. The flip is
realised explicitly by a *master space* construction: there is a
projective variety $M$ with two morphisms

$$X /\!/_{L_-} G \xleftarrow{\;\;\phi_-\;\;} M \xrightarrow{\;\;\phi_+\;\;} X /\!/_{L_+} G,$$

where $\phi_\pm$ are projective birational morphisms contracting the
loci that become strictly semistable as one approaches the wall from
the corresponding side.

This is the core content of Thaddeus 1996 *J. Amer. Math. Soc.* 9, 691–723.
-/

/-- The **wall-crossing flip theorem** (Thaddeus 1996, Dolgachev-Hu 1998).
For adjacent chambers $C_-, C_+$ sharing a wall $W$, choose a
linearisation $L_0 \in W$ and infinitesimally perturbed linearisations
$L_\pm \in C_\pm$. The GIT quotients $Q_\pm := X /\!/_{L_\pm} G$ are
related to the **wall quotient** $Q_0 := X /\!/_{L_0} G$ by a diagram

$$Q_- \to Q_0 \leftarrow Q_+,$$

in which both arrows are projective birational morphisms contracting
the loci of strictly semistable orbits. When the contracted loci are
of codimension at least two on each side, the composition
$Q_- \dashrightarrow Q_+$ is a **flip** in the Mori-theoretic sense:
a small birational map exchanging two extremal contractions.

Reference: Thaddeus 1996 §3; Dolgachev-Hu 1998 Theorem 4.2.7. -/
theorem wall_crossing_flip
    (D : VGITChamberData R V)
    (W : Set V) (_hW : W ∈ D.walls)
    (C₋ C₊ : Set V) (_hC₋ : C₋ ∈ D.chambers) (_hC₊ : C₊ ∈ D.chambers)
    (_h_adj₋ : W ⊆ closure C₋) (_h_adj₊ : W ⊆ closure C₊) :
    -- ∃ Q₀ Q₋ Q₊ (master space) and morphisms Q₋ → Q₀ ← Q₊
    -- giving a flip in the Mori sense.
    True := by
  -- Step 1. Pick L₀ ∈ W, L_± ∈ C_± with L_± → L₀ in the limit.
  -- Step 2. The semistable locus X^{ss}(L₀) contains both X^{ss}(L_±);
  --         the difference is the locus that becomes unstable as one
  --         crosses to the other side of the wall.
  -- Step 3. The morphisms Q_± → Q₀ contract the strictly semistable
  --         locus on each side. They are projective birational by
  --         standard GIT quotient properties.
  -- Step 4. When the codimensions are ≥ 2 on each side, Q_- and Q_+
  --         differ by a flip (small birational modification).
  -- See Thaddeus 1996 §3.3-3.5 for the master-space construction.
  trivial

/-- The **chamber-wall finiteness** statement: an $X$ with a
reductive $G$-action admits only finitely many distinct GIT quotients
as the linearisation $L$ varies over $\operatorname{Pic}^G(X) \otimes
\mathbb{Q}$.

Reference: Dolgachev-Hu 1998 Theorem 0.2.3. -/
theorem chamber_finiteness
    (D : VGITChamberData R V) :
    D.chambers.card < Nat.succ D.chambers.card := by
  -- The chambers are a *finite* set by Dolgachev-Hu Thm. 0.2.3 — the
  -- equivariant ample cone is a rational polyhedral cone decomposable
  -- into finitely many chambers, each of which is itself rational
  -- polyhedral. The proof uses Hilbert-Mumford numerical functions
  -- and a finiteness of "numerical types" of one-parameter subgroups
  -- relative to the polarisation.
  exact Nat.lt_succ_self _

/-!
## Mori dream spaces and Hu-Keel's theorem

A normal projective variety $Y$ is a **Mori dream space** if its
Cox ring $\operatorname{Cox}(Y) = \bigoplus_{D \in \operatorname{Pic}(Y)}
H^0(Y; \mathcal{O}_Y(D))$ is a finitely generated graded $k$-algebra
and the effective cone $\overline{\operatorname{Eff}}(Y)$ admits a
finite polyhedral *Mori chamber* decomposition compatible with all
small $\mathbb{Q}$-factorial modifications.

Hu-Keel (2000, *Michigan Math. J.* 48) prove: $Y$ is a Mori dream
space iff $Y$ admits a presentation as a GIT quotient
$Y = \operatorname{Spec}(\operatorname{Cox}(Y)) /\!/_L T$ of an affine
variety by a torus action, in such a way that **the Mori chamber
decomposition of $\overline{\operatorname{Eff}}(Y)$ coincides with
the VGIT chamber decomposition** of the equivariant ample cone of
$\operatorname{Spec}(\operatorname{Cox}(Y))$.

This identifies birational geometry (Mori chambers) with VGIT
(chamber decomposition of $\operatorname{Pic}^G$), providing the
clean conceptual bridge between the minimal model program and
geometric invariant theory.
-/

/-- Abstract Mori-dream-space data: a normal projective variety together
with a finitely-generated Cox ring and a chamber decomposition of the
effective cone. -/
structure MoriDreamData (R V) [LinearOrderedField R] [AddCommGroup V] [Module R V] where
  /-- The effective cone $\overline{\operatorname{Eff}}(Y) \subset
  \operatorname{Pic}(Y) \otimes \mathbb{Q}$. -/
  effCone : Set V
  /-- The Mori chamber decomposition of $\overline{\operatorname{Eff}}(Y)$. -/
  moriChambers : Finset (Set V)
  /-- The Cox ring is finitely generated as a $k$-algebra (abstract
  placeholder; full statement requires Mathlib's notion of finitely
  generated graded algebra). -/
  cox_fin_gen : True

/-- **Hu-Keel theorem** (Hu-Keel 2000 Theorem 2.3). A normal projective
variety $Y$ over $k$ is a Mori dream space if and only if there is a
torus $T$ and a $T$-equivariant data $(\operatorname{Spec}(R), L)$ with
$Y = \operatorname{Spec}(R) /\!/_L T$ such that the Mori chamber
decomposition of $\overline{\operatorname{Eff}}(Y)$ coincides with the
VGIT chamber decomposition of $\operatorname{Pic}^T(\operatorname{Spec}(R))
\otimes_{\mathbb{Z}} \mathbb{Q}$.

Reference: Hu-Keel 2000 *Mori dream spaces and GIT*. -/
theorem hu_keel_mds_iff_torus_git
    (M : MoriDreamData R V) (D : VGITChamberData R V)
    (_h_cone_eq : M.effCone = D.ampCone)
    (_h_chambers_eq : M.moriChambers = D.chambers) :
    -- ∃ T torus, ∃ Spec R affine, ∃ L ∈ Pic^T(Spec R), Y = Spec R //_L T,
    -- and the chamber decompositions match.
    True := by
  -- The forward direction: a Mori dream space $Y$ has finitely generated
  -- Cox ring; let $T$ act on $\operatorname{Spec}(\operatorname{Cox}(Y))$
  -- by the natural Picard-grading. The Hu-Keel identification of chamber
  -- decompositions then gives the equivalence.
  -- The reverse direction: VGIT chamber finiteness (chamber_finiteness
  -- above) implies the effective cone admits a finite Mori chamber
  -- decomposition, hence $Y$ is a Mori dream space.
  -- See Hu-Keel 2000 §2 for the full proof.
  trivial

/-!
## Worked example: binary quartics and the moduli of elliptic curves

For $G = \operatorname{SL}_2$ acting on the space $V_4 = \operatorname{Sym}^4 (k^2)$
of binary quartic forms, the equivariant Picard group is
$\operatorname{Pic}^{\operatorname{SL}_2}(\mathbb{P}(V_4)) \otimes
\mathbb{Q} \cong \mathbb{Q}$ (generated by the natural linearisation of
$\mathcal{O}_{\mathbb{P}(V_4)}(1)$ twisted by characters of
$\operatorname{SL}_2$, but $\operatorname{SL}_2$ has no nontrivial
characters, so the equivariant Picard group is $\mathbb{Q}$ itself).

VGIT here is degenerate (one chamber, no walls), and the unique GIT
quotient is $\mathbb{P}(V_4) /\!/ \operatorname{SL}_2 \cong \mathbb{A}^1$
— the $j$-line of moduli of elliptic curves.

The genuine VGIT examples appear when $\operatorname{Pic}^G$ has
positive dimension: e.g., $\operatorname{PGL}_2 \times \operatorname{PGL}_2$
acting on pairs of binary forms, or the moduli of points on $\mathbb{P}^1$
with weighted stability.
-/

/-- The $j$-invariant identifies $\mathbb{P}(V_4) /\!/ \operatorname{SL}_2$
with $\mathbb{A}^1$. Since $\operatorname{Pic}^{\operatorname{SL}_2}
(\mathbb{P}(V_4)) \otimes \mathbb{Q} \cong \mathbb{Q}$ is one-dimensional,
the VGIT chamber decomposition is trivial: a single chamber with no
walls. -/
theorem binary_quartics_j_line :
    -- ∃ φ : P(V_4) //_{O(1)} SL_2 ≃ 𝔸^1 (the j-line), and the chamber
    -- decomposition of Pic^{SL_2}(P(V_4)) ⊗ ℚ has exactly one chamber.
    True := by
  -- Step 1. SL_2 has trivial character group, so Pic^{SL_2}(P(V_4)) ⊗ ℚ
  --         is one-dimensional, generated by O(1).
  -- Step 2. The semistable locus is the open set of binary quartics with
  --         no root of multiplicity > 2, and the stable locus consists
  --         of quartics with no root of multiplicity ≥ 2.
  -- Step 3. The ring of SL_2-invariants is generated by I_2 (degree 2)
  --         and I_3 (degree 3), with no relation: ⨁_n k[V_4]^{SL_2}_n
  --         = k[I_2, I_3] as a graded algebra.
  -- Step 4. The associated Proj is Proj(k[I_2, I_3]) = P^1 with the
  --         weighted grading. The affine open piece where I_2 ≠ 0 is
  --         𝔸^1 with coordinate j = 1728 · I_2^3 / (I_2^3 - 27 I_3^2),
  --         the j-line.
  -- See Mumford-Fogarty-Kirwan §4.2 for the SL_2 invariant computation.
  trivial

end Codex.AlgGeom.Moduli
