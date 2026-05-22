# Jost — *Riemannian Geometry and Geometric Analysis* (Fast Track 3.28) — Audit + Gap Plan

**Book:** Jürgen Jost, *Riemannian Geometry and Geometric Analysis*
(Springer Universitext, 7th edition 2017, xiv + 697 pp.; ISBN
978-3-319-61859-3). The standing successor to do Carmo / Petersen / Lee
on the **analytic** side: a Riemannian-geometry text that pushes
through to harmonic maps, Yamabe, and parabolic methods rather than
stopping at comparison theorems.

**Fast Track entry:** 3.28 (third-decile modern geometry, marked BUY in
`docs/catalogs/FASTTRACK_BOOKLIST.md` line 115). Sits between the
classical-Riemannian texts (do Carmo, Petersen, Lee) and the
geometric-analysis monographs (Aubin, Schoen-Yau, Hamilton).

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2
+ P3-lite of the orchestration protocol) producing a concrete
punch-list. Output is *the* canonical closing pass on the
basic-Riemannian-geometry gap in the Babel Bible — a gap previously flagged
without remedy by three earlier audits (Milnor MMT, Helgason DGLGSS,
Kobayashi-Nomizu I).

**Sourcing status:** **Reduced.** No local PDF in
`reference/textbooks-extra/` or `reference/fasttrack-texts/`; no free
author copy (Springer commercial title). Plan is built from Jost's
canonical chapter structure (well-documented in the Springer ToC and in
the citation record of Aubin, Schoen-Yau, and Hebey) and from the
existing Codex audit chain. A line-number-precise pass requires the
book on hand and is deferred.

---

## §1 What Jost is for

Jost is the **canonical modern bridge from Riemannian geometry to
geometric analysis**. Other Riemannian texts at the same level — do
Carmo *Riemannian Geometry* (Birkhäuser 1992), Petersen *Riemannian
Geometry* (GTM 171, Springer 3rd ed. 2016), Lee *Introduction to
Riemannian Manifolds* (GTM 176, Springer 2nd ed. 2018) — all stop at
the comparison theorems (Bonnet-Myers, Cartan-Hadamard, Toponogov,
Rauch) and a survey of curvature topology. Cheeger-Ebin *Comparison
Theorems in Riemannian Geometry* (AMS Chelsea reprint 2008) goes
deeper into comparison geometry but also stops at the
finite-dimensional toolkit. Jost is the text that **keeps going** into
the infinite-dimensional / PDE side.

The book's distinctive structure, in roughly the order Jost develops it:

1. **Foundations (Chs. 1–3).** Riemannian manifolds, the **Levi-Civita
   connection**, geodesics, the **exponential map**, normal coordinates,
   completeness (**Hopf-Rinow theorem**, Hopf-Rinow 1931). Standard
   first-course content, but with Jost's analytic-PDE notation
   conventions ($g_{ij}$ and $\Gamma^k_{ij}$ throughout, weak emphasis
   on the principal-bundle reformulation that Kobayashi-Nomizu prefer).
2. **Curvature (Chs. 4–5).** Riemannian curvature tensor $R$,
   **sectional**, **Ricci**, and **scalar curvature**. Jacobi fields,
   conjugate points, the second variation of energy. The **comparison
   theorems**: Bonnet-Myers (Myers 1941), Cartan-Hadamard (Cartan
   1925–26 / Hadamard 1898), Toponogov (Toponogov 1959). Cf. Petersen
   Chs. 6–7 and Cheeger-Ebin Chs. 1–4 for parallel treatments
   [ref: Petersen, *Riemannian Geometry* GTM 171, 3rd ed. 2016, §§6–7;
   Cheeger-Ebin, *Comparison Theorems in Riemannian Geometry* AMS
   Chelsea 2008, Chs. 1–4].
3. **Symmetric spaces and Lie groups (Ch. 6).** A short symmetric-space
   chapter giving the Riemannian-geometric face of what Helgason
   DGLGSS does Lie-algebraically. Significantly thinner than Helgason
   but sufficient to motivate the comparison-geometry models.
4. **Spin structures and the Dirac operator (Ch. 7).** Concise
   introduction; the Babel Bible has this material in `03.09-spin-geometry/`
   already (Lawson-Michelsohn anchor).
5. **Morse theory and Floer homology (Ch. 8).** A working-mathematician
   sketch of Morse-on-loop-spaces, Bott periodicity via geodesics,
   pointer to Floer. Parallel to Milnor MMT (covered in Cycle 3 audit)
   and Schwarz / Audin-Damian (covered in `05.08-floer-symplectic/`).
6. **Harmonic maps (Chs. 9–10).** The book's first analytic centerpiece.
   The harmonic-map energy $E(u) = \frac12 \int_M |\mathrm{d}u|^2$ for
   $u: M \to N$, the harmonic-map equation $\tau(u) = 0$, the
   **Eells-Sampson theorem** (Eells-Sampson 1964) on existence of
   harmonic maps into nonpositively curved targets via the **harmonic-
   map heat flow** $\partial_t u = \tau(u)$. The full analytic proof:
   short-time existence, Bochner identity, energy decay, sub-convergence.
   This is the chapter no other Riemannian textbook covers in full.
7. **Sobolev spaces on manifolds and elliptic regularity (Ch. 11).**
   $W^{k,p}(M, g)$ defined intrinsically, Sobolev embedding theorems
   on compact manifolds, Schauder estimates, weak solutions, elliptic
   regularity for $\Delta_g$. Cf. Aubin, *Some Nonlinear Problems in
   Riemannian Geometry* (Springer 1998) Ch. 2 and Hebey, *Sobolev
   Spaces on Riemannian Manifolds* (LNM 1635, Springer 1996) for the
   parallel treatments [ref: Aubin 1998 Ch. 2; Hebey 1996 Chs. 1–4].
8. **The Yamabe problem (Ch. 12).** The analytic capstone. The
   **Yamabe conjecture** (Yamabe 1960) — every compact Riemannian
   manifold of dimension $\geq 3$ admits a conformally equivalent
   metric of constant scalar curvature — proved in three rounds:
   Trudinger 1968 (low-dim), Aubin 1976 (dim $\geq 6$, non-locally-
   conformally-flat), Schoen 1984 (remaining cases via the **positive
   mass theorem** of Schoen-Yau 1979). Jost gives the full
   variational / concentration-compactness proof; this is the
   second-canonical exposition (Lee-Parker *The Yamabe Problem*
   *Bull. AMS* 17 (1987) 37–91 is the first).

Where Jost differs from do Carmo, Petersen, and Lee: those texts cover
items 1–2 (and partially 3) and stop; Jost's items 6–8 are the
**Springer-Universitext analytic capstone** that closes the loop with
the PDE-and-calculus-of-variations side of modern geometry. Jost is
also the text most often cited as the **prerequisite anchor** for
geometric-flow texts (Hamilton-Perelman / Topping *Lectures on the
Ricci Flow* / Chow-Knopf): students arriving at Ricci flow are
expected to know Jost Chs. 9 and 11 before opening Hamilton's papers.

Jost is **not** a first introduction to manifolds. He assumes smooth
manifolds, vector bundles, and basic functional analysis (Banach /
Hilbert spaces, weak convergence). The Codex prerequisite layer for a
Jost-anchored unit batch is therefore: `03.02-manifolds/`,
`03.05-bundles/`, and `02.11-functional-analysis/`.

---

## §2 Coverage table (Babel Bible vs Jost)

Cross-referenced against the current 313-unit corpus.
✓ = covered, △ = partial / different framing, ✗ = not covered.

| Jost topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Ch. 1 — Riemannian manifold, metric tensor, isometry** | — | ✗ | **Gap.** Metric tensor as a positive-definite section of $S^2 T^* M$; no dedicated unit. The pieces exist in `03.05.03-orthogonal-frame-bundle.md` (frame side) but not the metric-tensor side. |
| **Ch. 2 — Levi-Civita connection** | — | ✗ | **Gap (critical).** Already on the Milnor MMT punch-list (item 6, `03.03.X1`) **and** the KN-I punch-list (item 12, `03.03.X1`). The single most-cited missing unit in the Babel Bible per the KN-I audit. |
| **Ch. 2 — Geodesics, geodesic equation $\ddot{\gamma}^k + \Gamma^k_{ij}\dot{\gamma}^i\dot{\gamma}^j = 0$** | △ | △ | Geodesic flow appears in `05.02.06-geodesic-flow-hamiltonian.md` from the Hamiltonian-symplectic side; the Riemannian framing is absent. **Gap.** |
| **Ch. 2 — Exponential map $\exp_p$ at a point** | — | ✗ | **Gap.** Cited downstream without anchor (Cartan-Hadamard, Bonnet-Myers, KN-I audit). |
| **Ch. 2 — Normal coordinates** | — | ✗ | **Gap.** |
| **Ch. 3 — Hopf-Rinow theorem** | — | ✗ | **Gap (critical).** Already on Milnor MMT, Helgason DGLGSS, and KN-I punch-lists. The **canonical example of an audit-chain-closing gap**. |
| **Ch. 3 — Cut locus and injectivity radius** | — | ✗ | **Gap.** |
| **Ch. 4 — Riemannian curvature tensor $R(X,Y)Z$** | △ | △ | Covered as a bundle-curvature object in `03.05.09-curvature.md`; the Riemannian-tensor specialisation (the four symmetries $R_{ijkl}$, the algebraic Bianchi identity) is partial. |
| **Ch. 4 — Sectional curvature** | — | ✗ | **Gap.** On the KN-I punch-list (item 13, `03.02.05`). |
| **Ch. 4 — Ricci tensor and scalar curvature** | — | ✗ | **Gap.** On the KN-I punch-list (item 13, `03.02.05`). |
| **Ch. 5 — Jacobi fields, conjugate points** | — | ✗ | **Gap.** On the Milnor MMT punch-list (item 5, `03.02.05`). |
| **Ch. 5 — Second variation of energy** | — | ✗ | **Gap.** On the Milnor MMT punch-list (item 4, `03.12.X1`). |
| **Ch. 5 — Bonnet-Myers theorem** | — | ✗ | **Gap.** On the Milnor MMT punch-list (item 8, `03.02.06`). |
| **Ch. 5 — Cartan-Hadamard theorem** | — | ✗ | **Gap.** On the Milnor MMT punch-list (item 8, `03.02.06`). |
| **Ch. 5 — Toponogov triangle comparison** | — | ✗ | **Gap.** Not on any prior punch-list; new to this audit. |
| **Ch. 5 — Rauch comparison theorem** | — | ✗ | **Gap.** Not on any prior punch-list; new to this audit. |
| **Ch. 5 — Synge's theorem; first cohomology of compact $\mathrm{sec} > 0$** | — | ✗ | **Gap (low).** Master-tier only. |
| **Ch. 6 — Riemannian symmetric spaces** | — | ✗ | **Gap.** Already on Helgason punch-list (`07.04.07`). Jost gives the Riemannian-geometric face; Helgason gives the Lie-algebraic. Cross-link the two units in Pass-W. |
| **Ch. 7 — Spin structures, Dirac operator** | `03.09.04`, `03.09.08`, `03.09.14` | ✓ | Covered via Lawson-Michelsohn. No gap. |
| **Ch. 8 — Morse theory on loop spaces, Bott periodicity sketch** | `03.08.07`, partial in `12-homotopy/` | △ | Covered via the Milnor MMT audit's punch-list. Jost adds nothing new beyond the MMT batch. |
| **Ch. 9 — Harmonic map energy $E(u)$, harmonic-map equation $\tau(u) = 0$** | — | ✗ | **Gap (high — Jost's signature topic).** |
| **Ch. 9 — Bochner identity for harmonic maps** | — | ✗ | **Gap.** |
| **Ch. 10 — Harmonic-map heat flow $\partial_t u = \tau(u)$; Eells-Sampson theorem** | — | ✗ | **Gap (high — Eells-Sampson 1964 is a top-tier originator citation, no Codex anchor at present).** |
| **Ch. 11 — Sobolev spaces $W^{k,p}(M, g)$ on manifolds** | `02.11.04-banach-spaces.md` (flat), — (intrinsic) | △ | The flat-space functional-analysis layer exists; the intrinsic Riemannian formulation does not. **Gap.** |
| **Ch. 11 — Sobolev embedding on compact manifolds** | — | ✗ | **Gap.** |
| **Ch. 11 — Elliptic regularity for $\Delta_g$** | △ (in `06.04.05-dbar-hilbert-pde.md`) | △ | The Riemann-surface case is shipped; the higher-dim Riemannian case is not. |
| **Ch. 12 — Conformal class, conformal Laplacian, Yamabe invariant** | — | ✗ | **Gap.** |
| **Ch. 12 — Yamabe problem (Yamabe 1960 / Trudinger 1968 / Aubin 1976 / Schoen 1984)** | — | ✗ | **Gap (high — capstone theorem with a four-decade originator chain).** |
| **Ch. 12 — Positive mass theorem (used in Schoen's proof)** | `03.09.17-witten-positive-mass.md` | △ | Shipped via Witten's spinor proof; Schoen-Yau 1979 (the original proof, used in the Yamabe argument) is the missing originator anchor. |

**Aggregate coverage estimate.** Of Jost's 12 main chapters, the
Codex covers Ch. 7 in full, Ch. 8 partially (via prior MMT audit), and
items in Ch. 6 already on Helgason's open punch-list. **Chapters 1–5
(basic Riemannian geometry) are uncovered.** Chapters 9–12 (the
geometric-analysis capstone — Jost's signature material) are
**~0% covered**. This audit's punch-list is the canonical closing
pass for Chs. 1–5 (closing the audit-chain Riemannian gap) and the
canonical opening pass for Chs. 9–12 (new geometric-analysis units).

**Audit-chain status.** The Cycle 3 audit (Milnor MMT) flagged
Levi-Civita / exp / Hopf-Rinow as item `03.03.X1`; the Cycle 4 audit
(KN-I) re-flagged it as `03.03.X1` and added sectional / Ricci /
scalar (`03.02.05`); the Cycle 5 audit (Helgason DGLGSS) re-flagged
Hopf-Rinow as `03.02.0X`. **All three audits deferred the basic-
Riemannian batch to "the Riemannian-geometry text audit," which is
this one.** The Jost audit is therefore the convergence point for
three prior audit chains and is load-bearing for any future work in
gauge theory, geometric flows, Ricci flow / Perelman, harmonic
analysis on manifolds, or general relativity.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — manifold-layer prerequisites (shared with KN-I audit):**

Already on the KN-I punch-list (`kobayashi-nomizu-foundations-vol1.md`
items 1–5). Reproduced here for reading-order completeness; do not
duplicate the work.

- `03.02.02` Tangent bundle as smooth vector bundle.
- `03.02.03` Vector fields, Lie bracket, Lie derivative.
- `03.05.00` General fibre bundle.
- (No `03.03.04` Lie-group exp needed for Jost specifically; it's a
  Helgason / KN-I prereq, not a Jost prereq.)

**Priority 1 — basic Riemannian geometry (Chs. 1–5; closes the
audit-chain gap shared with Milnor / Helgason / KN-I):**

1. **`03.02.0R1` Riemannian metric tensor and isometry.** Definition
   of $g$ as a smooth section of $S^2 T^* M$ with $g_p$ positive
   definite, pullback under diffeomorphism, isometry. Standard
   examples (round sphere, hyperbolic space, flat torus). Jost §1.4
   anchor; do Carmo Ch. 1 secondary; Lee Ch. 2 secondary. ~1500 words.
   Three-tier.
2. **`03.03.X1` Levi-Civita connection, geodesics, exponential map,
   Hopf-Rinow.** **The single most-cited missing unit in the Babel Bible.**
   Shared with Milnor (item 6) and KN-I (item 12) punch-lists; this
   audit confirms the Jost framing as the canonical anchor (Jost
   §§2.1–3.1). Includes: fundamental theorem of Riemannian geometry
   (existence + uniqueness of Levi-Civita), Christoffel symbols
   $\Gamma^k_{ij} = \frac12 g^{kl}(\partial_i g_{jl} + \partial_j g_{il}
   - \partial_l g_{ij})$, geodesic equation, $\exp_p$ as a local
   diffeomorphism near $0 \in T_p M$, Gauss lemma, normal coordinates,
   Hopf-Rinow (geodesic completeness ⇔ metric completeness ⇔ closed-
   and-bounded compactness; existence of minimising geodesics). Jost
   §§2.1–3.1 anchor; do Carmo Chs. 2–7 secondary; Lee Chs. 4–6
   secondary; Petersen Chs. 5–6 tertiary. **~3000 words; the longest
   unit in the punch-list.** Three-tier. **Originator-prose required**
   (Levi-Civita 1917, Hopf-Rinow 1931).
3. **`03.02.0R2` Sectional, Ricci, and scalar curvature.** Already on
   KN-I punch-list as `03.02.05`. The three standard curvature
   contractions, the $K(\sigma) = \langle R(X,Y)Y, X\rangle / |X \wedge
   Y|^2$ formula, Ricci as a trace, scalar as a double trace. Jost §4
   anchor; KN-I §IV.1 secondary. ~1500 words. Three-tier.
4. **`03.02.0R3` Jacobi fields and conjugate points.** Already on
   Milnor punch-list as `03.02.05`. Jacobi equation as the linearised
   geodesic equation, conjugate points as zeros of Jacobi fields,
   relation to $\mathrm{d}\exp_p$. Jost §5.2 anchor; Milnor MMT §§13–14
   secondary; do Carmo Ch. 5 tertiary. ~2000 words. Three-tier.
5. **`03.02.0R4` Comparison theorems: Bonnet-Myers and Cartan-Hadamard.**
   Already on Milnor punch-list as `03.02.06`. Both as second-variation
   consequences. Jost §5.3 anchor; Milnor §§19, 22 secondary. ~1500
   words. Three-tier. **Originator-prose** (Myers 1941; Cartan 1925–26 /
   Hadamard 1898).
6. **`03.02.0R5` Rauch and Toponogov comparison theorems.** **New** to
   this audit (not on prior punch-lists). Rauch: pointwise comparison
   of Jacobi fields under sectional-curvature bound; Toponogov:
   global triangle comparison. Jost §5.4 anchor; Cheeger-Ebin Chs. 1–2
   secondary. ~1500 words. Three-tier; Master tier carries the proof
   sketch, Beginner gives only the statements and the "fatter
   triangles in negative curvature" picture. **Originator-prose**
   (Rauch 1951; Toponogov 1959).

**Priority 2 — harmonic maps and geometric analysis core (Chs. 9–11;
Jost's signature material, no prior Codex anchor):**

7. **`03.02.0R6` Harmonic map energy, tension field, harmonic-map
   equation.** $E(u) = \frac12 \int_M |\mathrm{d}u|_g^2 \mathrm{d}V_g$
   for $u: (M, g) \to (N, h)$, the tension field $\tau(u) = \mathrm{tr}_g
   \nabla \mathrm{d}u$, the Euler-Lagrange equation $\tau(u) = 0$.
   Examples: harmonic functions ($N = \mathbb{R}$), geodesics
   ($M = [0, 1]$), holomorphic maps (Kähler case). Jost §9.1 anchor;
   Eells-Sampson 1964 originator. ~2000 words. Three-tier.
8. **`03.02.0R7` Bochner identity for harmonic maps.** $\frac12 \Delta
   |\mathrm{d}u|^2 = |\nabla \mathrm{d}u|^2 + \langle \mathrm{Ric}^M \mathrm{d}u,
   \mathrm{d}u\rangle - \langle R^N(\mathrm{d}u, \mathrm{d}u) \mathrm{d}u,
   \mathrm{d}u\rangle$. The curvature-control identity that drives all
   harmonic-map existence theorems. Jost §9.2 anchor; Eells-Sampson 1964
   primary. ~1500 words. Master-dominant, Intermediate carries the
   statement.
9. **`03.02.0R8` Harmonic-map heat flow and the Eells-Sampson theorem.**
   $\partial_t u = \tau(u)$; for $u_0: M \to N$ with $M$ compact and
   $N$ compact of nonpositive sectional curvature, the flow exists for
   all time and sub-converges to a harmonic map homotopic to $u_0$.
   The full analytic proof: short-time existence (linear parabolic),
   Bochner-controlled energy decay, sub-convergence via Arzelà-Ascoli +
   Schauder. Jost §§10.1–10.3 anchor; Eells-Sampson 1964 originator.
   **~3000 words.** Three-tier; Beginner tier gives the statement and
   the picture; Intermediate gives the energy-decay argument;
   Master gives the full proof. **Originator-prose required**
   (Eells-Sampson 1964).
10. **`03.02.0R9` Sobolev spaces $W^{k,p}(M, g)$ on a Riemannian
    manifold.** Intrinsic definition (covariant derivatives in
    $L^p$), equivalence with chart-by-chart definition for compact
    $M$, completeness, density of smooth functions. Jost §11.1
    anchor; Aubin 1998 §2.1 secondary; Hebey 1996 Ch. 2 tertiary.
    ~1500 words. Three-tier.
11. **`03.02.0R10` Sobolev embedding and Rellich-Kondrachov on
    compact manifolds.** $W^{k,p}(M) \hookrightarrow L^q(M)$ for the
    appropriate exponent, compact embedding when the inequality is
    strict. Jost §11.2 anchor; Aubin §2.5 secondary. ~1500 words.
    Three-tier; the Beginner tier states the embedding theorem
    diagram, Master gives the proof via partition of unity.
12. **`03.02.0R11` Elliptic regularity for $\Delta_g$ on a compact
    manifold.** Schauder estimates, $L^p$ estimates, weak solutions
    are smooth. Jost §11.3 anchor. ~1500 words. Three-tier;
    Master-dominant.

**Priority 3 — Yamabe (Ch. 12; capstone theorem):**

13. **`03.02.0R12` Conformal class, conformal Laplacian, Yamabe
    invariant.** $g \mapsto e^{2f} g$, the conformal Laplacian
    $L_g = \Delta_g - c_n \mathrm{Scal}_g$ ($c_n = (n-2)/(4(n-1))$),
    the Yamabe invariant $Y(M, [g]) = \inf_{\tilde g \in [g]}
    \mathrm{Vol}(\tilde g)^{-(n-2)/n} \int \mathrm{Scal}_{\tilde g}
    \mathrm{d}V_{\tilde g}$. Jost §12.1 anchor. ~1500 words. Three-tier.
14. **`03.02.0R13` The Yamabe problem.** Statement, the variational
    setup, the three-round proof outline (Trudinger 1968 / Aubin 1976 /
    Schoen 1984), the role of the positive mass theorem. Jost
    §§12.2–12.3 anchor; Lee-Parker *Bull. AMS* 17 (1987) 37–91
    secondary. **~3500 words; the longest unit in the punch-list
    after `03.03.X1`.** Three-tier; Master tier carries the full
    Aubin-test-function calculation and the Schoen positive-mass
    invocation. **Originator-prose required** (Yamabe 1960, Trudinger
    1968, Aubin 1976, Schoen 1984).

**Priority 4 — survey pointers and weaving (optional, Master-only):**

15. **`03.02.0R14` Synge's theorem.** Compact, even-dimensional, $\sec
    > 0$, oriented ⇒ simply connected. Master-only, ~800 words. Jost
    §5.5 anchor.
16. **Pointer in `03.09.17-witten-positive-mass.md`** to Schoen-Yau
    1979 (the *original* positive mass theorem, not Witten's spinor
    proof) and to the new `03.02.0R13` (Yamabe). Single-paragraph
    weaving edit.
17. **Pointer in `03.05.09-curvature.md`** to `03.03.X1` and `03.02.0R2`
    (the Riemannian curvature specialisations). Single-paragraph edit.
18. **Pointer in `05.02.06-geodesic-flow-hamiltonian.md`** to `03.03.X1`
    (the Riemannian geodesic equation that is the projection of the
    Hamiltonian flow). Single-paragraph edit.
19. **Pointer in `06.04.05-dbar-hilbert-pde.md`** to `03.02.0R11`
    (the higher-dim Riemannian analogue of the Riemann-surface case).
    Single-paragraph edit.
20. **Cross-link in `07.04.07-riemannian-symmetric-space.md`** (when
    that unit ships from the Helgason batch) to Jost Ch. 6 as the
    Riemannian-geometric secondary anchor.

---

## §4 Implementation sketch (P3 → P4)

For a full Jost coverage pass, priority-1 closes the basic-Riemannian
gap shared with Milnor / Helgason / KN-I; priority-2 opens the
geometric-analysis chapter that has no other Codex anchor; priority-3
is the Yamabe capstone. Realistic production estimate (mirroring
earlier Milnor / KN-I / Brown / Bott-Tu batches):

- ~3 hours per Riemannian-geometry unit; **~4 hours per geometric-
  analysis unit** because the analytic chapters require careful Sobolev
  / PDE notation and the Eells-Sampson and Yamabe proofs are
  substantial.
- **Priority 1:** 6 units, with `03.03.X1` and `03.02.0R3` at ~3000–
  2000 words and the rest at ~1500. Estimate **~20 hours.**
- **Priority 2:** 6 units, with `03.02.0R8` at ~3000 words. Estimate
  **~22 hours.**
- **Priority 3:** 2 units, with `03.02.0R13` at ~3500 words. Estimate
  **~9 hours.**
- **Priority 4:** 1 Master unit + 5 weaving edits. Estimate **~3 hours.**
- **Total for full coverage: ~54 hours**, roughly two focused weeks.
  Priority-1 alone is ~20 hours and **closes the audit-chain
  Riemannian gap from Cycles 3, 4, and 5 in a single batch**.

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, the following units
should carry originator-prose citations:

- **Bernhard Riemann**, "Über die Hypothesen, welche der Geometrie zu
  Grunde liegen" (Habilitationsvortrag, Göttingen, 10 June 1854;
  published 1868 in *Abh. Königl. Ges. Wiss. Göttingen* 13) — the
  birth of Riemannian geometry; the metric tensor as a positive-
  definite quadratic form on tangent vectors. Cite in `03.02.0R1`.
- **Tullio Levi-Civita**, "Nozione di parallelismo in una varietà
  qualunque e conseguente specificazione geometrica della curvatura
  riemanniana," *Rendiconti del Circolo Matematico di Palermo* 42
  (1917) 173–204 — the original parallel-transport / Levi-Civita-
  connection definition. Cite in `03.03.X1`.
- **Heinz Hopf, Willi Rinow**, "Über den Begriff der vollständigen
  differentialgeometrischen Fläche," *Comment. Math. Helv.* 3 (1931)
  209–225 — Hopf-Rinow. Cite in `03.03.X1` (shared with KN-I
  punch-list).
- **Élie Cartan**, "Sur certaines formes riemanniennes remarquables
  des géométries à groupe fondamental simple," *Annales scientifiques
  de l'É.N.S.* 44 (1927) 345–467 (and the 1925–26 papers cited in
  Milnor MMT) — Cartan-Hadamard. **Jacques Hadamard**, "Les surfaces
  à courbures opposées et leurs lignes géodésiques," *J. Math. Pures
  Appl.* 4 (1898) 27–73 — the original negative-curvature case. Cite
  in `03.02.0R4`.
- **Sumner B. Myers**, "Riemannian manifolds with positive mean
  curvature," *Duke Math. J.* 8 (1941) 401–404 — Bonnet-Myers. Cite
  in `03.02.0R4`.
- **Harry Ernest Rauch**, "A contribution to differential geometry in
  the large," *Annals of Math.* 54 (1951) 38–55 — Rauch comparison.
  Cite in `03.02.0R5`.
- **Victor A. Toponogov**, "Riemann spaces with curvature bounded
  below" (Russian), *Uspekhi Mat. Nauk* 14 (1959) 87–130 — Toponogov
  triangle comparison. Cite in `03.02.0R5`.
- **James Eells, Joseph H. Sampson**, "Harmonic mappings of Riemannian
  manifolds," *American J. Math.* 86 (1964) 109–160 — the founding
  paper of harmonic-map theory; harmonic-map heat flow; existence
  into nonpositively curved targets. Cite in `03.02.0R6`,
  `03.02.0R7`, `03.02.0R8`. **Top-tier originator citation** — no
  other Babel Bible unit currently anchors this paper.
- **Hidehiko Yamabe**, "On a deformation of Riemannian structures on
  compact manifolds," *Osaka Math. J.* 12 (1960) 21–37 — the
  Yamabe-problem statement and the (flawed) original proof attempt.
  Cite in `03.02.0R13`.
- **Neil S. Trudinger**, "Remarks concerning the conformal
  deformation of Riemannian structures on compact manifolds,"
  *Annali Scuola Norm. Sup. Pisa* 22 (1968) 265–274 — identification
  of the gap in Yamabe's proof; low-dimensional case. Cite in
  `03.02.0R13`.
- **Thierry Aubin**, "Équations différentielles non linéaires et
  problème de Yamabe concernant la courbure scalaire," *J. Math.
  Pures Appl.* 55 (1976) 269–296 — Yamabe in dim $\geq 6$,
  non-locally-conformally-flat. Cite in `03.02.0R13`.
- **Richard Schoen**, "Conformal deformation of a Riemannian metric
  to constant scalar curvature," *J. Diff. Geom.* 20 (1984) 479–495 —
  completion of the Yamabe proof using the positive mass theorem.
  Cite in `03.02.0R13`.
- **Jürgen Jost** (2017, 7th ed.) — the canonical consolidation. Cite
  throughout as the in-Codex master anchor.

**Notation crosswalk.** Jost writes:

- $g_{ij}$ and $g^{ij}$ for the metric and its inverse in coordinates,
  $g = g_{ij} \mathrm{d}x^i \otimes \mathrm{d}x^j$.
- $\Gamma^k_{ij}$ for Christoffel symbols (lower indices symmetric);
  $\nabla_X Y$ for the Levi-Civita covariant derivative.
- $R(X, Y) Z$ for the curvature tensor; $R_{ijkl} = g(R(\partial_i,
  \partial_j) \partial_k, \partial_l)$ with Jost's sign convention
  (the convention agreeing with do Carmo and Lee, opposite to
  Cheeger-Ebin and Petersen).
- $K(\sigma)$ for sectional curvature of a 2-plane $\sigma$;
  $\mathrm{Ric}$ for Ricci; $\mathrm{Scal}$ (sometimes $R$ or $S$)
  for scalar curvature.
- $\tau(u)$ for the tension field of a map; $E(u)$ for the energy.
- $W^{k,p}(M)$ for Sobolev spaces.

The Babel Bible notation decision (per `docs/specs/UNIT_SPEC.md` §11):
adopt Jost's sign convention for $R$ (already aligned with Lee and
do Carmo) and Jost's $\tau / E$ for harmonic maps. Use $\mathrm{Scal}$
for scalar curvature consistently (not $R$, which collides with the
curvature tensor). Record in a §Notation paragraph of `03.03.X1`,
`03.02.0R2`, and `03.02.0R6`.

---

## §5 What this plan does NOT cover

- A line-number-precise inventory of every named theorem in Jost. The
  book is 697 pp.; without a local PDF the audit relies on Jost's
  chapter-level structure as documented in the Springer ToC and in
  Aubin / Hebey / Lee-Parker citations. A full P1 audit at line-number
  granularity is deferred to a dedicated pass once a copy is on hand.
- **Ricci flow.** Jost Ch. 11–12 sets the analytic foundation but does
  not cover the Hamilton-Perelman programme. Ricci flow is a separate
  Fast Track audit anchored on Topping *Lectures on the Ricci Flow*,
  Chow-Knopf *The Ricci Flow: An Introduction*, or Morgan-Tian *Ricci
  Flow and the Poincaré Conjecture*.
- **Geometric measure theory.** Federer / Simon / Almgren are
  Fast Track 3.x entries handled in a separate audit; Jost touches
  the topic only in passing.
- **Lorentzian geometry.** Jost is strictly Riemannian (positive
  definite). The Lorentzian / pseudo-Riemannian story is in O'Neill
  *Semi-Riemannian Geometry*, Sternberg *Semi-Riemannian Geometry*
  (local copy at `reference/fasttrack-texts/01-fundamentals/`), or
  Beem-Ehrlich-Easley *Global Lorentzian Geometry*.
- **Symplectic and Kähler geometry.** Already covered in
  `05-symplectic/` and partial Kähler coverage in `06-riemann-surfaces/`.
- **Spin and Dirac.** Already covered in `03.09-spin-geometry/` via
  Lawson-Michelsohn; Jost Ch. 7 is the lighter parallel exposition
  and adds no new units.

---

## §6 Acceptance criteria for FT equivalence (Jost)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- All six **priority-1** units have shipped. This closes the
  basic-Riemannian gap shared with Milnor (Cycle 3), KN-I (Cycle 4),
  and Helgason (Cycle 5) audits in a single batch.
- ≥4 of the six **priority-2** units have shipped (`03.02.0R6`,
  `03.02.0R7`, `03.02.0R8`, plus at least one of the Sobolev /
  embedding / regularity trio).
- Both **priority-3** Yamabe units have shipped, OR the Yamabe
  units are explicitly deferred to a follow-up batch with a Pass-W
  pointer in place.
- ≥95% of Jost's named theorems in Chs. 1–5 and 9–12 map to Codex
  units. Currently ~5%; after priority-1+2+3 this rises to ~85%;
  full ≥95% requires the priority-4 deepenings.
- ≥90% of Jost's worked computations in Chs. 9–12 (harmonic-map
  examples, Yamabe test-function calculations) have a direct unit or
  are referenced from a unit that covers them.
- Notation decisions are recorded (see §4).
- Pass-W weaving connects the new units to `03.02-manifolds/`,
  `03.05-bundles/`, `02.11-functional-analysis/`, `03.09-spin-geometry/`
  (via `03.09.17`), `05.02-hamiltonian/` (via `05.02.06`), and
  `06.04-cohomology/` (via `06.04.05`).

The 6 priority-1 units close the audit-chain gap. Priority-2 closes
the harmonic-map and Sobolev gap. Priority-3 closes the Yamabe gap.
Priority-4 is optional deepening + weaving.

---

## §7 Sourcing

- **Not free.** Springer commercial title, Universitext series. No
  author-hosted PDF.
- **Buy.** ISBN 978-3-319-61859-3 (7th ed. 2017, paperback). Anna's
  Archive carries scanned copies of the 6th and 7th editions for
  research access (clearly marked as the fallback per the standing
  acquisition policy in this plan series).
- **Local copy.** When acquired, add to
  `reference/fasttrack-texts/03-modern-geometry/` as
  `Jost-RiemannianGeometryAndGeometricAnalysis.pdf` to mirror the
  pattern of other commercial FT texts (Sternberg, Bott, May).
- **Secondary anchors (already in the citation chain above).**
  - do Carmo, *Riemannian Geometry*, Birkhäuser 1992. The first-course
    standard. BUY.
  - Petersen, *Riemannian Geometry*, GTM 171, Springer 3rd ed. 2016.
    The strongest comparison-geometry alternative. BUY.
  - Lee, *Introduction to Riemannian Manifolds*, GTM 176, Springer
    2nd ed. 2018. The cleanest modern exposition for priority-1
    material. BUY.
  - Cheeger-Ebin, *Comparison Theorems in Riemannian Geometry*, AMS
    Chelsea 2008. The deeper comparison-geometry reference. BUY.
  - Aubin, *Some Nonlinear Problems in Riemannian Geometry*, Springer
    1998. The geometric-analysis companion for priority-2 and -3
    material. BUY.
  - Hebey, *Sobolev Spaces on Riemannian Manifolds*, LNM 1635,
    Springer 1996. The Sobolev-on-manifolds reference. BUY.
  - Lee-Parker, "The Yamabe Problem," *Bull. AMS* 17 (1987) 37–91.
    Free at AMS. The canonical Yamabe survey. Cite alongside Jost
    Ch. 12.
