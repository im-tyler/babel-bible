# Kobayashi–Nomizu, *Foundations of Differential Geometry, Vol. I* (FT 3.18) — deepening gap file

**Verdict.** The first-pass audit (REDUCED mode, written at ~25% claimed
coverage, "Chapter IV ~0%", "holonomy upstream absent") is now **almost entirely
obsolete**. Since that audit the corpus grew to ~1319 units and the entire KN-I
priority-0+1+2 punch-list — every single one of items 1–19 in §3 of the original
plan — **has been produced** by the parallel differential-geometry effort. The
connection-on-principal-bundle core, the affine/torsion/Cartan structural
equations, the full holonomy chain (holonomy group, Ambrose–Singer, holonomy
reduction), the Riemannian capstone (Levi-Civita, Hopf–Rinow, sectional/Ricci/
scalar, constant-curvature/Killing–Hopf, Killing fields, Myers–Steenrod) all
have dedicated homes. See the COVERED trailer — it is long because nearly the
whole book is now anchored.

KN-I Vol. I is at **≥95% effective coverage**. This is a valid, valuable
"essentially done" result. The residual genuine gaps are **one** named theorem
(the intrinsic Cartan–Ambrose–Hicks rigidity theorem, present in the corpus only
in its *submanifold* form) plus **one** thin notational consolidation that is
borderline (a freestanding "Lie derivative of tensor fields" unit). I list the
first as a genuine gap and the second as a flagged optional, conservatively.

Recommended homes: `03-differential-geometry/02-manifolds/` (`03.02.*` chain,
where all Riemannian material lives) for the affine/Riemannian rigidity gap.
Free `03.02.*` slots verified occupied through `48.02.38`; next free is
`48.02.39`. The entire `48.05.00–03.05.23` band is occupied (both the
`05-bundles/` and `05-fibre-bundles/` trees).

---

## Genuine gaps (1)

### 1. `48.02.39` — Cartan–Ambrose–Hicks theorem (intrinsic affine/Riemannian rigidity)
- **spec:** The intrinsic CAH theorem: for simply-connected complete Riemannian
  (or affine) manifolds $M, M'$, a linear isometry $T_pM\to T_{p'}M'$ that
  intertwines the curvature tensors and their covariant derivatives along
  broken geodesics (i.e. is compatible with parallel transport) extends to a
  global isometry; the local version reconstructs an isometry from agreement of
  $R$ and $\nabla^k R$ at a point. Corollaries: rigidity of locally symmetric
  spaces ($\nabla R=0$ ⇒ local model is determined by $R_p$), and the
  "constant curvature ⇒ space form" mechanism as a special case.
- **prereqs:** `48.02.27` (Levi-Civita / exp), `48.02.05` (sectional/Ricci/scalar
  curvature), `48.05.16` (holonomy group), `48.02.32` (Riemannian Hopf–Rinow,
  for the completeness/extension step)
- **chapter dir:** `content/03-differential-geometry/02-manifolds/`;
  frontmatter `section: differential-geometry`, `chapter: manifolds`
- **originator:** É. Cartan (1928, *Leçons sur la géométrie des espaces de
  Riemann*); Ambrose 1956 (*Trans. AMS* 83, 647–680, "Parallel translation of
  Riemannian curvature"); Hicks 1959. KN-I §VI.7.
- **why a gap, not COVERED:** the only CAH statement in `content/` is
  `48.02.14`'s **Theorem 5 "Cartan–Ambrose–Hicks theorem for submanifolds"**
  (two submanifolds of a common ambient space with isometric second fundamental
  forms + normal connections). That is the *extrinsic / fundamental-theorem-of-
  submanifolds* face. The **intrinsic** CAH theorem — that the *abstract*
  Riemannian/affine structure is reconstructed from curvature + parallel
  transport, with no ambient space — is a genuinely different statement (it is
  the abstract rigidity theorem underlying the space-form and locally-symmetric-
  space classifications) and is **not stated anywhere**. The related "curvature
  determined by sectional curvatures" (`48.02.05`) and "locally symmetric ⇔
  $\nabla R=0$" (`07.04.07`) are pieces of its corollary set but not the theorem
  itself. Moderate priority — it cleanly closes KN-I Ch. VI and is the conceptual
  capstone of the connection-determines-geometry programme. Master-tier-dominant.

---

## Flagged optional (not promoted)

- **Freestanding "Lie derivative of tensor fields / Lie bracket of vector fields"
  unit.** The original audit's priority-0 item 2 (`48.02.03`). The Lie bracket of
  vector fields is *defined and used* (`48.02.04` Frobenius: the bracket as the
  involutivity obstruction, with worked computations) and the Lie derivative on
  forms is fully developed with the **Cartan magic formula**
  $\mathcal L_X=d\,\iota_X+\iota_X d$ in `03.04.04`, plus $\mathcal L_X g=0$ in
  `48.02.07` (Killing). A dedicated unit consolidating $\mathcal L_X$ on general
  tensor fields would be a *notational lift* of material already present rather
  than new mathematics. **Not promoted** — COVERED in effect. Add only if a
  future Lee *Smooth Manifolds* batch wants the manifold-layer prerequisite
  freestanding.

---

## COVERED (not gaps) — verified due diligence

The first-pass audit's §3 punch-list items are crossed off below with the unit
that now anchors each. (`05-bundles/` = `content/03-modern-geometry/05-bundles/`;
`05-fibre-bundles/` = `content/03-differential-geometry/05-fibre-bundles/`.)

| KN-I topic (audit punch-list item) | COVERED by | Evidence |
|---|---|---|
| Smooth manifold, atlas, charts | `03.02.01`, `48.02.02`, `48.02.03` | topological-manifold + smooth-structure-atlases + smooth-maps now a full chain (audit saw only one unit) |
| Frobenius theorem (audit item 3, `48.02.04`) | `48.02.04` | dedicated unit; involutive ⇔ integrable, bracket/local-frame proof |
| Lie bracket of vector fields | `48.02.04` | defined + worked: bracket as involutivity obstruction |
| Lie derivative (Cartan magic formula) | `03.04.04`, `48.02.07` | $\mathcal L_X=d\iota_X+\iota_X d$ stated; $\mathcal L_X g$ in Killing unit |
| Lie group, Lie algebra; exp $:\mathfrak g\to G$ (audit item 4) | `03.03.01`, `03.04.01` | $\exp:\mathfrak g\to G$ stated + $\mathfrak{so}(3)$/Rodrigues worked example |
| Maurer–Cartan form + structure equation (audit item 4) | `03.04.04` | $\theta_g=(L_{g^{-1}})_*$; $d\theta+\tfrac12[\theta\wedge\theta]=0$ derived |
| General fibre bundle (audit item 5, `48.05.00`) | `48.05.00` (`05-fibre-bundles/`) | dedicated general-fibre-bundle unit |
| Principal $G$-bundle | `03.05.01` | shipped |
| Vertical subbundle + fundamental vector fields (audit item 6, `48.05.06`) | `48.05.06` (`05-fibre-bundles/`) | dedicated unit (unblocked the `03.05.07` Lean gap) |
| Connection on principal bundle (1-form + horizontal dist.) | `03.05.07` | shipped, KN-I §II anchor |
| Horizontal lift + parallel transport (audit item 7, `48.05.11`) | `48.05.11` (`05-fibre-bundles/`) | dedicated unit |
| Curvature 2-form, Cartan structural eqn $\Omega=d\omega+\tfrac12[\omega,\omega]$ | `03.05.09` | shipped, KN-I §III anchor |
| Reduction of structure group + of connection (audit item 8, `48.05.12`) | `48.05.12` (`05-fibre-bundles/`) | dedicated general-reduction unit; `03.05.03` is the O(n) example |
| Associated bundle $P\times_G F$ + induced connection (audit item 9, `48.05.13`) | `48.05.13` (`05-fibre-bundles/`) | dedicated unit |
| Connections on $P$ ↔ covariant derivatives on assoc. vector bundles | `03.05.04`, `48.05.13` | equivalence stated in `03.05.04` (Leibniz/$\mathbb R$-linear characterisation) |
| Frame bundle $L(M)$, linear connection, soldering form (audit items 11, `48.05.15`) | `48.05.15` (`05-fibre-bundles/`) | dedicated unit; general GL(n) frame bundle + canonical $\theta$ |
| Torsion tensor + two Cartan structural equations (audit item 10, `48.05.14`) | `48.05.14` (`05-fibre-bundles/`) | dedicated unit; both structural eqns |
| First + second Bianchi identities (audit item 20) | `48.05.14` | **both** stated as "Theorem (Bianchi identities)" + algebraic-Bianchi exercise |
| Geodesic of affine connection / auto-parallel | `48.02.27`, `13.02.02` | Levi-Civita unit + geodesics/parallel-transport unit |
| Exponential map $\exp_p$, normal coordinates, completeness (audit item 12) | `48.02.27`, `48.02.32` | Levi-Civita/exp unit (do Carmo Ch. 7 completeness locator) + Hopf–Rinow |
| Levi-Civita connection (existence + uniqueness) (audit item 12) | `48.02.27` | dedicated unit, "fundamental lemma Thm 3.6" |
| Hopf–Rinow theorem (audit item 12) | `48.02.32` | dedicated Riemannian Hopf–Rinow unit |
| Sectional / Ricci / scalar curvature (audit item 13, `48.02.05`) | `48.02.05` | dedicated unit |
| Constant-curvature spaces + Killing–Hopf (audit item 14, `48.02.06`) | `48.02.06` | dedicated unit; $S^n/\mathbb R^n/\mathbb H^n$ classification |
| Killing fields / infinitesimal isometries (audit item 18, `48.02.07`) | `48.02.07` | dedicated unit; $\mathcal L_X g=0$, Lie algebra of Killing fields |
| Myers–Steenrod (audit item 19, `48.02.08`) | `48.02.08` | dedicated unit; isometry group is a Lie group |
| Holonomy group + restricted holonomy (audit item 15, `48.05.16`) | `48.05.16` (`05-fibre-bundles/`) | dedicated unit |
| Ambrose–Singer theorem (audit item 16, `48.05.17`) | `48.05.17` (`05-fibre-bundles/`) | dedicated unit |
| Holonomy reduction theorem (audit item 17, `48.05.18`) | `48.05.18` (`05-fibre-bundles/`) | dedicated unit |
| Berger holonomy classification | `03.09.18` | shipped; upstream apparatus (16–18) now supplied |
| Chern–Weil, invariant polynomial, Pontryagin/Chern classes | `03.06.06`, `03.06.05`, `03.06.04` | all shipped |
| Yang–Mills action | `03.07.05` | shipped; connection apparatus now anchored upstream |
| Riemannian symmetric spaces / locally symmetric $\nabla R=0$ | `07.04.07` | dedicated unit (partial CAH corollary set) |
| CAH for submanifolds (extrinsic / fundamental theorem) | `48.02.14` | "Theorem 5 (Cartan–Ambrose–Hicks for submanifolds)" — *distinct* from the intrinsic gap #1 |

**Notes on judgement calls.**
- The original audit ran in REDUCED mode (no PDF, working from the TOC) and
  predates the entire `48.02.05–48.02.08`, `48.02.27`, `48.02.32`,
  `48.05.06`, `48.05.11–48.05.18` production wave. Every "✗ Gap" row in its §2
  table has since been filled. I re-verified each by `find`/`grep` against the
  live tree rather than trusting the table.
- `48.02.14`'s CAH-for-submanifolds is **not** double-counted as covering gap #1:
  it requires a common ambient space and isometric second fundamental forms,
  whereas the intrinsic CAH (gap #1) reconstructs the abstract metric/affine
  structure from $R$ + parallel transport alone. Different hypotheses, different
  conclusion, different proof. Conservative call: genuine gap.
- "Curvature determined by sectional curvatures" (`48.02.05` Thm) and
  "locally symmetric ⇔ $\nabla R=0$" (`07.04.07`) are *fragments* of the CAH
  corollary set, not the rigidity theorem; they do not retire gap #1.
