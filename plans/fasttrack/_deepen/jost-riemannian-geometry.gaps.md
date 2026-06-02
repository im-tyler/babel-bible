# Jost, *Riemannian Geometry and Geometric Analysis* (FT 3.28) — deepening gap file

**Verdict.** The first-pass audit's "Chapters 1–5 uncovered / Chapters 9–12 ~0%"
is badly inflated. Since that audit, the corpus grew to 1319 units and the
**entire basic-Riemannian-geometry layer (Jost Chs. 1–6) is now covered** —
Levi-Civita connection, exponential map, geodesics, curvature tensor and its
symmetries/Bianchi, sectional/Ricci/scalar curvature, Jacobi fields, conjugate
points, second variation / index form, Bonnet–Myers, Cartan–Hadamard, Rauch
(stated), Bishop–Gromov-style volume comparison, symmetric spaces, the Bochner
technique and vanishing theorems all have homes (see COVERED trailer).

The genuine remaining gaps are concentrated in Jost's **analytic capstone**
(Chs. 9–12: harmonic maps, Sobolev-on-manifolds, Yamabe) plus a small number of
named theorems that are invoked-but-never-stated (Riemannian Hopf–Rinow,
Toponogov, Synge). These are high-value: the Eells–Sampson paper and the Yamabe
problem currently have **no anchor anywhere in the corpus**.

Recommended home: `03-differential-geometry/02-manifolds/` (the `03.02.*`
chain, where all the Riemannian material already lives). Free slots verified:
`03.02.26`, `03.02.29`, `03.02.32`, `03.02.33`, `03.02.34`.

---

## Genuine gaps (6)

### 1. `03.02.26` — Harmonic maps: energy, tension field, harmonic-map equation
- **spec:** Energy $E(u)=\tfrac12\int_M|\mathrm du|_g^2\,\mathrm dV_g$ for
  $u:(M,g)\to(N,h)$; tension field $\tau(u)=\mathrm{tr}_g\nabla\mathrm du$;
  Euler–Lagrange equation $\tau(u)=0$; examples (harmonic functions $N=\mathbb R$,
  geodesics $M=[0,1]$, holomorphic maps in the Kähler case).
- **prereqs:** `03.02.05` (sectional/Ricci/scalar curvature), `03.02.27`
  (Levi-Civita/exp), `03.04.08` (variational calculus)
- **chapter dir:** `content/03-differential-geometry/02-manifolds/`;
  frontmatter `section: differential-geometry`, `chapter: manifolds`
- **originator:** Eells–Sampson 1964 (*Amer. J. Math.* 86, 109–160) — **top-tier,
  no current anchor anywhere in the corpus**.

### 2. `03.02.29` — Harmonic-map heat flow and the Eells–Sampson theorem
- **spec:** $\partial_t u=\tau(u)$; for $M$ compact, $N$ compact of nonpositive
  sectional curvature, the flow exists for all time and sub-converges to a
  harmonic map homotopic to $u_0$. Bochner identity
  $\tfrac12\Delta|\mathrm du|^2=|\nabla\mathrm du|^2+\langle\mathrm{Ric}^M\mathrm du,\mathrm du\rangle-\langle R^N(\mathrm du,\mathrm du)\mathrm du,\mathrm du\rangle$
  as the curvature-control engine; short-time existence + energy decay +
  sub-convergence.
- **prereqs:** `03.02.26` (harmonic maps, gap #1), `03.02.15` (Bochner technique)
- **chapter dir:** `content/03-differential-geometry/02-manifolds/`
- **originator:** Eells–Sampson 1964. (Note: the harmonic-map Bochner identity is
  *not* the same as the Bochner/Weitzenböck content in `03.02.15`, which is for
  forms/spinors — it is a genuinely new identity for maps, so it belongs here
  rather than as a separate unit.)

### 3. `03.02.32` — Riemannian Hopf–Rinow theorem
- **spec:** On a connected Riemannian manifold the equivalences geodesic
  completeness $\Leftrightarrow$ metric completeness $\Leftrightarrow$ Heine–Borel
  (closed-and-bounded $\Rightarrow$ compact), plus the existence of a minimising
  geodesic between any two points. The **positive-definite** statement and proof.
- **prereqs:** `03.02.27` (Levi-Civita/exp), `13.02.02` (geodesics/parallel transport)
- **chapter dir:** `content/03-differential-geometry/02-manifolds/`
- **originator:** Hopf–Rinow 1931 (*Comment. Math. Helv.* 3, 209–225).
- **why a gap, not COVERED:** the theorem is *invoked* in `03.02.07`
  (Killing-field completeness), `03.02.06`, and the Jacobi unit, but the only unit
  that *states/proves* a Hopf–Rinow theorem is `03.02.17`, which is the
  **Lorentzian / global-hyperbolicity** version — a different theorem (the
  Riemannian equivalences fail in Lorentzian signature). Flagged by three prior
  audits (Milnor, Helgason, KN-I) and still unresolved. Conservative call: this is
  a real, load-bearing gap.

### 4. `03.02.33` — Yamabe problem and the conformal Laplacian
- **spec:** Conformal class $g\mapsto e^{2f}g$; conformal Laplacian
  $L_g=\Delta_g-c_n\,\mathrm{Scal}_g$, $c_n=\tfrac{n-2}{4(n-1)}$; Yamabe invariant
  $Y(M,[g])$; the Yamabe theorem (every compact $M^{\ge3}$ admits a conformal
  metric of constant scalar curvature) and its three-round proof structure
  (Trudinger 1968 / Aubin 1976 / Schoen 1984), with the role of the positive-mass
  theorem.
- **prereqs:** `03.02.05` (scalar curvature), `03.02.16` (Weyl tensor / conformally
  flat metrics), `03.09.17` (Witten positive mass — cross-link)
- **chapter dir:** `content/03-differential-geometry/02-manifolds/`
- **originator chain:** Yamabe 1960, Trudinger 1968, Aubin 1976, Schoen 1984;
  Lee–Parker *Bull. AMS* 17 (1987) 37–91 survey. **Zero hits for "yamabe" or
  "conformal laplacian" in the entire corpus** — completely absent.

### 5. `03.02.34` — Toponogov triangle comparison theorem
- **spec:** Global triangle comparison under a sectional-curvature lower bound:
  geodesic triangles are "fatter" than (hinge/angle versions in) the constant-
  curvature model space. Relation to Rauch (the infinitesimal version) and to
  Cartan–Hadamard / Bonnet–Myers as the two extreme regimes.
- **prereqs:** `03.02.19` (Jacobi fields / index form, where Rauch is stated),
  `03.02.06` (constant-curvature model spaces)
- **chapter dir:** `content/03-differential-geometry/02-manifolds/`
- **originator:** Toponogov 1959 (*Uspekhi Mat. Nauk* 14, 87–130).
- **why a gap:** **zero hits for "toponogov" in `content/`** (only in plan files).
  Rauch is *stated* in `03.02.19`; Toponogov (the global triangle version, which
  Rauch does not give) is genuinely absent. Lower priority than the analytic
  gaps but a clean named-theorem hole in comparison geometry.

### 6. `03.02.35` — Synge's theorem
- **spec:** A compact, even-dimensional, orientable Riemannian manifold with
  positive sectional curvature is simply connected (and the odd-dimensional
  positive-curvature statement: orientable). Proof via the second variation on a
  shortest closed geodesic in a free homotopy class. Master-tier-dominant.
- **prereqs:** `03.02.19` (second variation / index form), `03.02.32` (Hopf–Rinow,
  gap #3 — for the shortest-closed-geodesic existence step)
- **chapter dir:** `content/03-differential-geometry/02-manifolds/`
- **originator:** J. L. Synge, *Quart. J. Math.* 7 (1936) 316–320.
- **why a gap:** **zero genuine hits for "synge" in `content/` geometry units**
  (matches are word-fragments in unrelated files). A standard second-variation
  corollary with no current home. Lowest priority of the six; include only if the
  batch wants the full comparison-geometry closing set.

---

## COVERED (not gaps) — verified due diligence

| Topic (first-pass audit claimed gap) | COVERED by | Evidence |
|---|---|---|
| Levi-Civita connection, Christoffel symbols, metric compatibility | `03.02.27`, `13.02.02`, `03.05.15` | `03.02.27` defines Levi-Civita + exp; `13.02.02` gives the Christoffel formula and $\nabla g=0$ explicitly |
| Exponential map, normal coordinates, Gauss lemma | `03.02.27`, `03.02.06` | exp map and injectivity-radius/normal-coordinate use throughout `03.02.06` |
| Geodesic equation (Riemannian) | `13.02.02`, `05.02.06` | `13.02.02` $\ddot\gamma^k+\Gamma^k_{ij}\dot\gamma^i\dot\gamma^j=0$ in full; Hamiltonian face in `05.02.06` |
| Riemannian curvature tensor $R(X,Y)Z$, symmetries, algebraic Bianchi | `13.03.01`, `03.05.09` | `13.03.01` proves all four symmetries + first/second Bianchi + 20-component count |
| Sectional / Ricci / scalar curvature | `03.02.05` | dedicated unit; the $K(\sigma)$ formula, Ricci as trace, scalar as double trace |
| Jacobi fields, conjugate points, Morse index theorem | `03.02.19` | dedicated unit; Jacobi equation, index form, index theorem |
| Second variation of energy / index form | `03.02.19` | "Definition (index form)" = second variation $E_{**}$ |
| Bonnet–Myers theorem | `03.02.19` (infinitesimal), `03.02.06` (global) | exercise derives the diameter bound; applied globally in `03.02.06` |
| Cartan–Hadamard theorem | `03.02.06` (Thm 1), `07.04.07` | full statement + $\exp_p$ diffeomorphism; reused for NPC symmetric spaces |
| Rauch comparison theorem | `03.02.19` | stated as the index-form comparison (curvature bound ⇒ conjugate-point shift) |
| Bishop–Gromov / volume comparison | `03.02.05` (Thm 4) | scalar-curvature volume comparison against constant-curvature model |
| Spaces of nonpositive curvature (Cartan–Hadamard manifolds) | `07.04.07`, `03.02.06` | NPC symmetric spaces diffeomorphic to $\mathbb R^n$ via Cartan–Hadamard |
| Bochner technique / Weitzenböck / vanishing theorems (forms & spinors) | `03.02.15`, `03.09` chain | dedicated Bochner unit; positive-Ricci kills harmonic 1-forms; Lichnerowicz |
| Riemannian symmetric spaces (Jost Ch. 6) | `07.04.07` | dedicated unit; Helgason anchor |
| Spin structures / Dirac operator (Jost Ch. 7) | `03.09.05/08/14/15/17` | full Lawson–Michelsohn chain |
| Morse on loop spaces / Bott periodicity (Jost Ch. 8) | `03.02.19`, `03.15.*` | index theorem → path-space CW structure → Bott periodicity |
| Sobolev spaces $W^{k,p}$ / $H^s$ (flat) and Rellich–Kondrachov (flat) | `24.01.01` | flat-domain Sobolev + compact embedding (manifold/intrinsic version is a *minor* residual gap — see note) |
| Positive mass theorem | `03.09.17` | Witten spinor proof (Schoen–Yau original would be cross-linked from gap #4) |
| Elliptic regularity for $\Delta_g$ (Riemann-surface case) | `06.04.05` | $\bar\partial$ / Hilbert-space PDE on Riemann surfaces |

**Notes on judgement calls.**
- *Sobolev spaces on a Riemannian manifold (intrinsic, Jost Ch. 11)* — `24.01.01`
  covers flat $H^s$/$W^{k,p}$ but has **no** intrinsic/manifold content (0 hits for
  "manifold" in its body). This is a real but *low-value, supporting* gap; I did
  not promote it to the gap list because it is a notational lift of an existing
  unit rather than new mathematics, and the harmonic-map and Yamabe units (which
  need it) can carry the intrinsic-Sobolev definitions inline. Flag it as an
  optional 7th unit if the batch wants the analytic prerequisites freestanding.
- *Riemannian metric tensor / isometry as a standalone unit* — not promoted: the
  metric tensor is defined and used across `03.02.05`, `03.02.06`, `13.02.02`,
  `03.05.20`; a dedicated "definition of $g$" unit would be marginal. COVERED in
  effect.
- *Harmonic-map Bochner identity* — folded into gap #2 rather than split out
  (it is the proof engine of Eells–Sampson and has no independent use yet).
