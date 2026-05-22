# Donaldson — *Floer Homology Groups in Yang-Mills Theory* (Fast Track 3.06) — Audit + Gap Plan

**Book:** S. K. Donaldson (with the assistance of M. Furuta and D. Kotschick),
*Floer Homology Groups in Yang-Mills Theory.* Cambridge Tracts in
Mathematics 147. Cambridge University Press, 2002. x + 236 pp.
ISBN 978-0-521-80803-3.

**Fast Track entry:** 3.06. Modern-Geometry strand (B), gauge-theory
slot. Sits one row below Atiyah's *Geometry of Yang-Mills Fields*
(FT 3.20, audited last cycle) and below Kobayashi-Nomizu Vol. 2
(FT 3.19, sibling audit). It is the canonical concise monograph
treatment of **instanton Floer homology** of 3-manifolds — the
$\mathrm{SU}(2)$-gauge-theoretic invariant Donaldson and Floer built
in the late 1980s on top of Atiyah-Singer / ADHM / Donaldson-theory.

**Source PDF:** Not present in `reference/textbooks-extra/`. Cambridge
Tracts editions are commercial; cite by ISBN. Chapter structure used
below is reconstructed from the published table of contents
(Cambridge catalogue, AMS Bull. review by Liviu Nicolaescu 41 (2004)
267-271) and cross-checked against (a) Floer's original
*Comm. Math. Phys.* 118 (1988) 215-240, (b) Donaldson-Kronheimer 1990
§7, (c) Salamon's *Lectures on Floer Homology* (IAS/Park City 1997),
and (d) Kronheimer-Mrowka 2007 *Monopoles and Three-Manifolds*
(Cambridge NMS 10) as the post-Donaldson reference.

**Audit type:** P1-lite audit + P2 gap pass + P3-lite punch-list,
mirroring `atiyah-geometry-yang-mills-fields.md`,
`lawson-michelsohn-spin-geometry.md`, and
`milnor-stasheff-characteristic-classes.md`.

**Plan status:** `reduced` — no direct PDF access in this pass.
Audit works from the book's published table of contents and the
canonical companion references (Floer 1988, Donaldson-Kronheimer 1990,
Kronheimer-Mrowka 2007, Salamon 1997). Sufficient to drive the
production punch-list to FT-equivalence. Full P1 line-number inventory
deferred pending direct PDF access.

---

## §1 What Donaldson's *Floer Homology Groups in Yang-Mills Theory* is for

By 1988 Andreas Floer had taken the ASD-Yang-Mills moduli machinery
that Donaldson used to define his 4-manifold polynomial invariants
(*J. Diff. Geom.* 1990) and transplanted it onto a 3-manifold $Y$ as
an **infinite-dimensional Morse theory** for the Chern-Simons
functional $\mathrm{CS} : \mathcal{A}(Y)/\mathcal{G}(Y) \to
\mathbb{R}/\mathbb{Z}$. Critical points are flat $\mathrm{SU}(2)$-
connections on $Y$; gradient trajectories are ASD instantons on the
cylinder $Y \times \mathbb{R}$. The resulting Morse complex
$CF^*(Y)$ is the **instanton Floer homology** $HF^*(Y)$, a finitely
generated $\mathbb{Z}/8$-graded abelian group attached to every
oriented integer homology 3-sphere (the case $b_1(Y) = 0$). It is the
3-manifold companion to Donaldson's 4-manifold invariants: a TQFT in
the loose sense, with relative Donaldson invariants
$\Phi(X, A) \in HF^*(\partial X)$ for 4-manifolds with boundary.

Floer's original 1988-89 papers (*Comm. Math. Phys.* 118, 1988;
*J. Diff. Geom.* 28, 1988; *Bull. AMS* 22, 1990) sketch the theory
but defer many compactness, gluing, transversality, and orientation
issues. The Donaldson tract is the **first systematic book-length
exposition** with proofs filled in, written by the principal architect
of the 4-manifold side. It is the canonical reference for instanton
Floer homology and the natural prerequisite to Kronheimer-Mrowka's
2007 monopole-Floer tome.

The book is organised as 7 chapters across ~236 pages:

1. **Introduction (Ch. 1).** Yang-Mills primer recap; flat
   connections, the Chern-Simons functional on the gauge-equivalence
   space $\mathcal{B}(Y) = \mathcal{A}(Y)/\mathcal{G}(Y)$, the gauge-
   invariance modulo $\mathbb{Z}$, and the heuristic Morse-theory
   picture leading to the Floer chain complex.

2. **Basic gauge theory (Ch. 2).** The configuration space
   $\mathcal{A}(Y)$ of $\mathrm{SU}(2)$-connections, the gauge group
   $\mathcal{G}(Y)$, the irreducible-connections-mod-gauge space
   $\mathcal{B}^*(Y)$ and its smooth Banach-manifold structure;
   slice theorem; the Coulomb gauge; reducibles as orbifold strata.
   The ASD equation $F_A^+ = 0$ on $Y \times \mathbb{R}$ rephrased as
   a gradient flow for $\mathrm{CS}$.

3. **The Chern-Simons functional and its critical points (Ch. 3).**
   Definition of $\mathrm{CS}(A) = \tfrac{1}{8\pi^2}\int_Y
   \mathrm{tr}(A \wedge dA + \tfrac{2}{3} A \wedge A \wedge A)$;
   gauge-transformation behaviour modulo $\mathbb{Z}$; critical points
   = flat connections = representations
   $\pi_1(Y) \to \mathrm{SU}(2)$; perturbations of $\mathrm{CS}$ to
   achieve non-degeneracy (the standard holonomy-perturbation
   construction).

4. **Index, spectral flow, and the Floer grading (Ch. 4).** The
   relative grading $\mu(\alpha, \beta) \in \mathbb{Z}/8$ defined via
   spectral flow of the Hessian (a self-adjoint operator on $Y$)
   along a path between critical points $\alpha, \beta$; relation to
   the Atiyah-Patodi-Singer index theorem on the cylinder; the mod-8
   periodicity from the $\mathrm{SU}(2)$ Dirac-operator family.

5. **Compactness and gluing (Ch. 5).** Uhlenbeck compactness for
   the ASD equation on cylinders; bubbling at points where instantons
   concentrate energy quanta of $8\pi^2$; reduction of energy quanta
   modulo bubbling = breaking of the cylinder into broken trajectories.
   Gluing theorem inverting the breaking: pre-glued trajectory + small
   ASD perturbation = honest trajectory; orientations on the moduli
   spaces of trajectories.

6. **The Floer chain complex and $HF_*(Y)$ (Ch. 6).** The chain
   group $CF_*(Y) = \mathbb{Z}\langle \text{critical points}\rangle$,
   the boundary operator $\partial$ counting 1-dimensional trajectory
   moduli, the identity $\partial^2 = 0$ from the boundary of
   2-dimensional trajectory moduli (broken trajectories cancel in
   pairs once orientations are coherent); invariance under
   perturbations / metric variations; the resulting
   $\mathbb{Z}/8$-graded $HF_*(Y)$ as 3-manifold invariant.

7. **Cobordisms and the TQFT structure (Ch. 7).** Relative Donaldson
   invariants for $(X, \partial X = Y)$ taking values in
   $HF_*(Y)$; the gluing formula
   $\Phi(X_1 \cup_Y X_2) = \langle \Phi(X_1), \Phi(X_2)\rangle$
   recovering the absolute Donaldson polynomial; the surgery exact
   triangle of Floer-Braam-Donaldson relating $HF_*$ for the three
   surgeries on a knot in a homology sphere.

**Furuta / Kotschick appendices** discuss orientations on
trajectory moduli (Furuta) and the equivariant / SO(3) variants
(Kotschick).

Three peer texts and where they overlap:

- **Floer, "An instanton-invariant for 3-manifolds,"
  *Comm. Math. Phys.* 118 (1988) 215-240.** The originating paper.
  Donaldson's tract is the book-length filling-in.
- **Salamon, "Lectures on Floer homology," *IAS/Park City Math.
  Series* 7 (1999) 143-229.** Pedagogical companion; covers both
  Hamiltonian (symplectic) and instanton Floer in the same notation.
- **Kronheimer-Mrowka, *Monopoles and Three-Manifolds.* Cambridge
  NMS 10, 2007. ~700 pp.** The Seiberg-Witten cousin. Far more
  technical (analytic-foundational); KM2010 *J. Diff. Geom.* showed
  the equivalence with instanton Floer (sketched in §11 of that
  paper). Sits one tier deeper than Donaldson 2002.

Two further critical originator citations:

- **Donaldson, "An application of gauge theory to four-dimensional
  topology," *J. Diff. Geom.* 18 (1983) 279-315.** Originating the
  4-manifold polynomial invariants whose 3-manifold companion this
  book builds.
- **Atiyah, "New invariants of 3- and 4-dimensional manifolds," in
  *The Mathematical Heritage of Hermann Weyl*, Proc. Sympos. Pure
  Math. 48 (1988) 285-299.** The originating "Atiyah-Floer
  conjecture" relating instanton Floer of $Y$ to Lagrangian
  intersection Floer of the representation variety of a Heegaard
  splitting.

---

## §2 Prior art and overlaps with sibling audits

The audit surface lives next to three already-audited Yang-Mills /
characteristic-class books:

- **Atiyah, *Geometry of Yang-Mills Fields* (FT 3.20).** Five new
  P1 units already shipped this cycle: `03.07.05` Yang-Mills action,
  `03.07.06` ASD equation (per Atiyah punch-list, not yet shipped),
  `03.07.07` BPST instanton + Bogomolny bound (shipped),
  `03.07.09` ASD moduli space $\mathcal{M}_k(S^4)$ (shipped),
  `03.07.10` ADHM construction (shipped), `03.07.11`
  Penrose / Ward (shipped), `03.07.14` Penrose transform (shipped).
  **Donaldson 2002 is the 3-manifold downstream** of all these:
  the ASD equation Atiyah Ch. 1 introduces becomes the gradient flow
  of $\mathrm{CS}$ on the cylinder; the Uhlenbeck removable-
  singularities theorem $03.07.08$ (Atiyah P1 item not yet shipped)
  is the analytic prerequisite for cylinder-end compactness.
  **Soft prereq:** Atiyah audit's remaining P1 items (`03.07.06`,
  `03.07.08`) should land before Donaldson Floer's P1 starts.

- **Lawson-Michelsohn, *Spin Geometry* (FT 3.04).** Provides the
  spin / Dirac-operator infrastructure used by the spectral-flow /
  APS-index identification of the Floer grading
  (Donaldson Ch. 4). Lawson-Michelsohn audit P1 already covered
  the Dirac operator on a closed manifold (`03.09.08`) and the
  APS index (`03.09.24`). **Hard prereq:** `03.09.24` (eta invariant
  + APS index) must be at master-tier proof depth.

- **Milnor-Stasheff, *Characteristic Classes* (FT 3.05).** Already
  audited; Chern-Simons forms unit `03.06.07` is shipped and is the
  finite-dimensional version of the functional whose infinite-
  dimensional Morse theory this book constructs. **Soft prereq:** no
  changes needed.

- **Symplectic Floer side (`05.08.*`).** Existing units
  `05.08.01-arnold-conjecture`, `05.08.02-floer-homology`,
  `05.08.03-maslov-index`, `05.08.04-conley-zehnder-index` cover the
  **Hamiltonian Floer homology** built on the symplectic action
  functional. The Atiyah-Floer conjecture (Donaldson Ch. 7 / §1
  in this audit) is the equivalence between instanton Floer
  (Donaldson) and a Lagrangian-intersection Floer of the
  representation variety of a Heegaard splitting. **Cross-link
  target:** every new instanton-Floer unit cites the parallel
  symplectic-Floer unit; the Atiyah-Floer unit (P2 below) is the
  bridge.

- **Donaldson *Riemann Surfaces* (FT 1.07).** Audited; no direct
  overlap (one-complex-variable curve theory vs. 3-manifold gauge
  theory). Reference for Donaldson's pedagogical voice.

Cross-referenced against the current corpus:

- `03.07-gauge-theory/` ships 7 units (`03.07.05`, `.07`, `.09`,
  `.10`, `.11`, `.14`, `.16`). Next free IDs are `03.07.17+`.
- `03.06.07-chern-simons-and-transgression.md` is shipped at master
  tier with Chern-Simons 1974, Bott-Tu §6, MS Appendix C, KN Vol. II
  Ch. XII master sources. Provides the finite-dimensional
  $\mathrm{CS}(A)$ definition; the infinite-dimensional / 3-manifold
  / mod-$\mathbb{Z}$ refinement is **not** carried out there.
- `03.09.24-eta-invariant-and-atiyah-patodi-singer-index-theorem.md`
  is shipped — spectral-flow input ready.
- `05.08.02-floer-homology.md` (the Hamiltonian-side / symplectic
  Floer) is shipped — bridge target.
- **No instanton Floer machinery** is present anywhere in the
  corpus. The Chern-Simons functional **on 3-manifolds** (as a
  functional on $\mathcal{B}(Y)$, not the finite-dimensional
  characteristic-class form), the Floer chain complex on a
  3-manifold, the relative Donaldson invariants, the surgery exact
  triangle, the Atiyah-Floer conjecture, polyfolds, and the
  Kronheimer-Mrowka monopole / instanton equivalence are all absent.

**Aggregate coverage estimate.** Counting the ~15 top-level
Donaldson topics planned:

- ✓ covered (cross-references via Atiyah / Lawson-Michelsohn / MS
  units): 0
- △ partial (finite-dim CS at `03.06.07`, ASD background via
  Atiyah units, symplectic Floer as parallel target): 3
- ✗ gap: 12

Coverage is roughly **~10%** weighted by load-bearing, **~5%** by
raw topic count. The book is essentially **all gap** on the Babel Bible
side; the gauge-theory chapter `03.07.*` is itself only ~50%
populated even after the Atiyah cycle, and the 3-manifold / Floer
extension is greenfield.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

The Donaldson 2002 audit produces ~11 units. Slot range is
`03.07.17` through `03.07.28` inside the gauge-theory chapter
`03.07-gauge-theory/`. **No new chapter is created**: Floer homology
of 3-manifolds is a gauge-theoretic invariant and belongs alongside
the ASD / instanton / moduli units already there. (The symplectic
cousin `05.08.02-floer-homology` stays where it is in the symplectic
chapter; cross-links connect the two.) Two pointer units (`.27`
polyfolds, `.28` Kronheimer-Mrowka equivalence) close the modern
landscape.

**Priority 0 — strict prerequisites in the corpus or in sibling
audits.** The Atiyah audit's remaining P1 items
(`03.07.06` ASD equation, `03.07.08` conformal compactification /
Uhlenbeck removable singularities) are soft prereqs — the cylinder-
end compactness theory of Donaldson Ch. 5 depends on Uhlenbeck.
`03.09.24` APS-index unit is a hard prereq for the spectral-flow
grading (Donaldson Ch. 4). Both are already in the production queue
or already shipped, so no extra blockers.

**Priority 1 — load-bearing infrastructure and the Floer complex
itself.** These items either define the central object
($\mathrm{CS}$ on $\mathcal{B}(Y)$, the Floer chain complex,
$HF_*(Y)$) or supply infrastructure used silently by the central
object (irreducible-connection space, spectral flow, cylinder
compactness, gluing).

1. **`03.07.17` Chern-Simons functional on a 3-manifold.** [NEW]
   Donaldson Ch. 1, 3 anchor; Chern-Simons 1974 originator (already
   cited from `03.06.07`); Floer 1988 *Comm. Math. Phys.* 118.
   Three-tier, ~2200 words. Master section: define
   $\mathrm{CS} : \mathcal{A}(Y) \to \mathbb{R}$ on the space of
   $\mathrm{SU}(2)$-connections on a closed oriented 3-manifold $Y$,
   $\mathrm{CS}(A) = \tfrac{1}{8\pi^2}\int_Y \mathrm{tr}(A \wedge dA
   + \tfrac{2}{3} A \wedge A \wedge A)$; show $\mathrm{CS}(g \cdot A)
   = \mathrm{CS}(A) + \deg(g) \pmod{\mathbb{Z}}$ where
   $\deg(g) \in \mathbb{Z}$ is the degree of $g : Y \to
   \mathrm{SU}(2)$; hence $\mathrm{CS} : \mathcal{B}(Y) \to
   \mathbb{R}/\mathbb{Z}$ is well-defined; critical points are
   flat connections, equivalently representations
   $\rho : \pi_1(Y) \to \mathrm{SU}(2)$. Worked example: lens space
   $L(p, q)$ with finite cyclic $\pi_1$ and finitely many flat
   connections enumerated explicitly. **Hard prereq:** `03.06.07`
   (finite-dim Chern-Simons form). **Loadbearing for items 2-7.**

2. **`03.07.18` Configuration space and slice theorem on $\mathcal{B}^*(Y)$.** [NEW] Donaldson Ch. 2 anchor; Atiyah-Bott 1983
   originating reference for the gauge-theoretic Banach-manifold
   formalism. Three-tier, ~1800 words. Master section: gauge group
   $\mathcal{G}(Y) = \mathrm{Map}(Y, \mathrm{SU}(2))$ acting on
   $\mathcal{A}(Y)$; quotient $\mathcal{B}(Y) = \mathcal{A}/\mathcal{G}$;
   restrict to irreducible connections to obtain the smooth Banach-
   manifold stratum $\mathcal{B}^*(Y)$; Coulomb-gauge slice theorem
   (local model: $\ker d_A^* \subset T_A \mathcal{A}$); reducible
   connections as orbifold singular strata. Worked example: the
   trivial connection is reducible with isotropy $\mathrm{SU}(2)$;
   the orbifold local model is the cone on $\mathbb{CP}^1$ in the
   $b_1 = 0$ case.

3. **`03.07.19` Spectral flow and the Floer grading mod 8.** [NEW] Donaldson Ch. 4 anchor;
   Atiyah-Patodi-Singer 1975 originator for spectral flow;
   Floer 1988 *Comm. Math. Phys.* 118 §3. Three-tier, ~2000 words.
   Master section: given two flat connections $\alpha, \beta$ on $Y$
   and a path $A_t \in \mathcal{A}(Y)$ from $\alpha$ to $\beta$,
   define the Hessian $\mathrm{Hess}_{A_t}(\mathrm{CS}) = *d_{A_t}$
   (a self-adjoint operator on $\Omega^1(Y; \mathfrak{su}(2))$);
   spectral flow $\mathrm{sf}(\{*d_{A_t}\})_{t \in [0,1]} \in
   \mathbb{Z}$ = signed count of eigenvalue zero-crossings; this
   equals the APS index of the cylinder Dirac-type operator
   $d/dt + *d_{A_t}$ on $Y \times [0, 1]$; mod-8 reduction gives
   the Floer relative grading. Worked example: $Y = $ Poincaré
   homology sphere $\Sigma(2, 3, 5)$, two non-trivial flat
   connections enumerated, relative grading computed. **Hard prereq:**
   `03.09.24` (APS index).

4. **`03.07.20` Uhlenbeck compactness for ASD equations on cylinders.** [NEW] Donaldson Ch. 5 anchor; Uhlenbeck 1982
   *Comm. Math. Phys.* 83 originator for connections with small
   $L^2$-curvature; Donaldson-Kronheimer 1990 §4. Three-tier,
   ~2000 words. Master section: cylinder $Y \times \mathbb{R}$ with
   product metric; ASD equation $F_A^+ = 0$ on the cylinder is
   $\dot A_t = -\mathrm{grad}\,\mathrm{CS}(A_t)$ after Coulomb-gauge
   fixing; finite-energy ASD connections decay exponentially to
   flat connections at both ends; statement of Uhlenbeck
   compactness with bubbling (sequence of ASD connections converges
   modulo gauge after passing to a subsequence, with finitely many
   energy-$8\pi^2$ bubbles split off). Cross-link to `03.07.08`
   (Atiyah audit, Uhlenbeck removable singularities) and `03.07.09`
   (ASD moduli on $S^4$).

5. **`03.07.21` Gluing theorem for instanton trajectories.** [NEW]
   Donaldson Ch. 5 anchor; Taubes 1984 *J. Diff. Geom.* 19
   originator for the gluing construction on closed 4-manifolds;
   Donaldson-Kronheimer 1990 §7 for the cylindrical case.
   Three-tier, ~1700 words. Master section: given a broken
   trajectory $\alpha \to \gamma \to \beta$ between flat
   connections, the **pre-gluing** $A_T^{\#}$ is an approximate
   ASD connection on $Y \times \mathbb{R}$ obtained by cutting and
   pasting the two pieces with gluing parameter $T \gg 0$; the
   gluing theorem says for $T$ large enough there is a unique
   honest ASD connection $A_T$ near $A_T^{\#}$, depending smoothly
   on $T$. Inverts the breaking in item 4 and is what underwrites
   $\partial^2 = 0$ in item 7.

6. **`03.07.22` Orientations on instanton trajectory moduli.** [NEW]
   Donaldson Ch. 5 + Furuta appendix anchor; Donaldson 1987
   *J. Geom. Phys.* 4 originator. Three-tier, ~1500 words. Master
   section: the moduli space of unparametrised trajectories
   $\mathcal{M}(\alpha, \beta)$ is canonically oriented (Donaldson
   1987) provided a coherent orientation of the determinant lines
   of the linearised ASD operators is fixed; orientation choice
   factors through choice of a homology orientation of $Y$ (which
   is automatic in the homology-sphere case $b_1 = 0$). **Required
   for the signed count in item 7.**

7. **`03.07.23` Instanton Floer homology $HF_*(Y)$.** [NEW] Donaldson
   Ch. 6 anchor; Floer 1988 *Comm. Math. Phys.* 118 originator.
   Three-tier, ~2400 words. **Apex unit of the book.** Master section:
   the chain group $CF_*(Y) = \bigoplus_{\alpha}
   \mathbb{Z}\langle \alpha \rangle$ over the (finite, after
   holonomy perturbation) set of irreducible flat connections;
   relative grading by item 3; the boundary operator
   $\partial \alpha = \sum_\beta \#\mathcal{M}^{(1)}(\alpha, \beta)
   \cdot \beta$ where $\#$ is the signed count from item 6 over
   the 1-dimensional component of the trajectory moduli; identity
   $\partial^2 = 0$ from the boundary of 2-dimensional components
   (broken trajectories cancel — items 4 and 5 are the inputs);
   invariance of $HF_*(Y) = H_*(CF, \partial)$ under choice of
   metric and perturbation (continuation maps). Worked example:
   $HF_*(\Sigma(2, 3, 5))$ for the Poincaré homology sphere
   explicitly computed (two generators in degrees 1, 5;
   $\partial = 0$; $HF_* = \mathbb{Z}^2$ concentrated in degrees
   1 and 5). **Hard prereqs:** items 1, 2, 3, 4, 5, 6.

**Priority 2 — TQFT structure, surgery, and the Atiyah-Floer
conjecture.** These items round out the structural content of the
book — relative Donaldson invariants, the surgery exact triangle,
and the conjectural bridge to symplectic Floer homology.

8. **`03.07.24` Relative Donaldson invariants for 4-manifolds with boundary.** [NEW] Donaldson Ch. 7 anchor;
   Donaldson 1990 *J. Diff. Geom.* 26 originator for the closed
   invariants; Floer-Donaldson 1990 for the relative formulation.
   Three-tier, ~1800 words. Master section: 4-manifold $X$ with
   boundary $\partial X = Y$; the moduli space of ASD connections
   on $X$ with cylindrical-end asymptotics $\to \alpha$ at the
   boundary is a manifold cut out by the ASD equation modulo
   gauge; intersection-pairing-style integration over this moduli
   space defines $\Phi(X) \in HF_*(Y)$; gluing formula
   $\Phi(X_1 \cup_Y X_2) = \langle \Phi(X_1), \Phi(X_2)\rangle$
   recovering the absolute Donaldson polynomial of $X_1 \cup_Y X_2$.
   **Bridge between 3-manifold Floer and 4-manifold Donaldson
   invariants — TQFT structure.**

9. **`03.07.25` Donaldson-Floer surgery exact triangle.** [NEW]
   Donaldson Ch. 7 anchor; Floer 1990 *Bull. AMS* 22 + Braam-
   Donaldson 1995 *Floer Memorial Volume* originator. Three-tier,
   ~1700 words. Master section: knot $K \subset Y$ in a homology
   sphere; three surgeries $Y_0$ (zero-surgery), $Y_1$ (1-surgery),
   $Y_\infty = Y$ on $K$ along the longitude / meridian; long exact
   sequence $\cdots \to HF_*(Y) \to HF_*(Y_0) \to HF_*(Y_1) \to
   HF_{*-1}(Y) \to \cdots$ (after mod-8 shift). Worked example:
   computing $HF_*$ for $\pm 1$-surgery on the trefoil from
   $HF_*(S^3) = 0$ and $HF_*(\Sigma(2, 3, 7))$.

10. **`03.07.26` Atiyah-Floer conjecture.** [NEW] Atiyah 1988
    *Proc. Sympos. Pure Math.* 48 originator; Donaldson Ch. 1 / §1
    pointer-level coverage. Master-only, ~1600 words. Statement:
    Heegaard splitting $Y = Y_1 \cup_\Sigma Y_2$ along a genus-$g$
    surface $\Sigma$; the representation variety
    $\mathcal{R}(\Sigma) = \mathrm{Hom}(\pi_1 \Sigma,
    \mathrm{SU}(2))/\mathrm{conjugation}$ carries a natural
    symplectic structure (Goldman); the restriction maps
    $\mathcal{R}(Y_i) \hookrightarrow \mathcal{R}(\Sigma)$ embed as
    Lagrangian submanifolds; the conjecture asserts
    $HF^{\mathrm{inst}}_*(Y) \cong HF^{\mathrm{Lag}}_*(\mathcal{R}(Y_1),
    \mathcal{R}(Y_2))$ as $\mathbb{Z}/8$-graded groups. Status:
    proved in cases (Dostoglou-Salamon 1994 for mapping tori; partial
    results since). **Direct cross-link to `05.08.02` (symplectic
    Floer) and to `05.05.01` Lagrangian submanifolds.**

**Priority 3 — modern landscape pointers.** Post-Donaldson
developments. Master-only survey units, not load-bearing for the
book's own coverage but mandatory for naming-the-current-state.

11. **`03.07.27` Polyfolds (Hofer-Wysocki-Zehnder).** [NEW]
    Hofer-Wysocki-Zehnder 2017 *Polyfolds and Fredholm Theory*
    (Memoirs AMS 248) originator; HWZ 2007-2010 lecture series.
    Master-only, ~1300 words. Pointer: polyfold theory is the
    abstract framework for handling all of the compactness +
    transversality + gluing analysis in instanton, symplectic, and
    monopole Floer theories simultaneously; replaces ad-hoc per-
    theory machinery (Donaldson Ch. 5 + Salamon's symplectic
    cousin + Kronheimer-Mrowka's monopole analysis) with a single
    abstract Fredholm-theory-with-corners formalism. **No proofs,
    no constructions — purely a "what this is and where to read it"
    unit.** Cites HWZ 2017, and Wehrheim's *J. Symplectic Geom.* 10
    (2012) survey.

12. **`03.07.28` Monopole-instanton Floer equivalence (Kronheimer-Mrowka).** [NEW] Kronheimer-Mrowka 2010 *J. Diff. Geom.* 84
    originator; Kronheimer-Mrowka 2007 *Monopoles and Three-
    Manifolds* (Cambridge NMS 10) for the monopole side. Master-
    only, ~1400 words. Pointer: Seiberg-Witten / monopole Floer
    $HM^*(Y)$ defined in KM2007; equivalence $HF^{\mathrm{inst}}_*(Y)
    \cong HM_*(Y)$ proved in KM2010 via a deformation of the
    Seiberg-Witten equations to the ASD equations along a family of
    perturbed equations interpolating between the two; this is the
    modern resolution of the structural question Donaldson 2002
    leaves open ("is there a canonical 3-manifold gauge-theoretic
    invariant?"). Mention sutured instanton Floer (KM 2010s) and
    Heegaard Floer (Ozsváth-Szabó 2004) as the third / fourth
    points of the now-equivalent square.

**Priority 4 — survey pointers (deferred, not part of equivalence
sign-off).**

13. **Master section addition to `03.06.07`** linking the finite-
    dimensional Chern-Simons form to the infinite-dimensional
    functional on $\mathcal{B}(Y)$. [ENRICH] Not a new unit;
    upgrade the existing master tier with a paragraph and a
    forward-link to `03.07.17`. Mandatory once item 1 ships.

14. **Notation crosswalk on `03.07.23`** documenting Donaldson's
    convention vs. Floer 1988 vs. Kronheimer-Mrowka. [ENRICH]
    Inline in `03.07.23`'s master tier; no separate
    `notation/donaldson-floer.md` needed.

---

## §4 Implementation sketch (P3 → P4)

**Minimum Donaldson-Floer equivalence batch** = P1 only (items 1-7):
7 new units. Realistic production estimate (mirroring Atiyah-Pisa
and Lawson-Michelsohn batches; instanton-Floer units skew higher
than the corpus average because master tier needs Banach-manifold
gauge theory, Atiyah-Patodi-Singer spectral flow, Uhlenbeck
compactness, and gluing analysis in one place):

- ~4 hours per typical new unit.
- ~5 hours for the apex unit `03.07.23` (item 7, $HF_*(Y)$) and
  the master $\mathrm{CS}$ unit `03.07.17` (item 1).
- ~3.5 hours per P2 / P3 pointer unit.
- **Priority 1: 5 typical × 4 h + 2 apex × 5 h = ~30 hours.**
- **Priority 2: 3 units × 4 h = ~12 hours.**
- **Priority 3: 2 units × 3.5 h = ~7 hours.**
- **Total: ~49 hours.** Fits a focused ~7-day window at 4-6
  parallel production agents with one integration agent stitching
  outputs.

**Batch structure.**

- **Batch A (infrastructure: CS functional, configuration space,
  spectral flow, items 1, 2, 3, ~13 h):** opens the new
  `03.07.17-19` slots. Items 1 and 2 are mutually independent;
  item 3 depends on item 1 (defines the Hessian) and on
  `03.09.24` (already shipped — APS index).

- **Batch B (analysis: compactness, gluing, orientations,
  items 4, 5, 6, ~11 h):** depends on Batch A (cylinder ASD
  equation = gradient flow needs item 1 + 2). Soft prereq on
  Atiyah audit's `03.07.08` (Uhlenbeck removable singularities)
  shipping first.

- **Batch C (the Floer complex itself, item 7, ~5 h):** depends
  on every item in Batches A and B. Apex unit.

- **Batch D (TQFT and Atiyah-Floer, items 8, 9, 10, ~12 h):**
  depends on Batch C. Item 10 (Atiyah-Floer) also cross-links to
  `05.08.02` symplectic-Floer; production agent should coordinate
  with the symplectic-side weaver.

- **Batch E (modern landscape pointers, items 11, 12, ~7 h):**
  independent of all other batches; can run in parallel with
  Batch C / D.

**Originator-prose targets** (each P1 / P2 unit's master section
cites originator + Donaldson 2002):

- **Chern-Simons functional on $Y$** (item 1): Chern-Simons 1974
  *Annals of Math.* 99 (already cited from `03.06.07`); Witten
  1989 *Comm. Math. Phys.* 121 *Quantum Field Theory and the
  Jones Polynomial* for the path-integral / TQFT framing; Floer
  1988 *Comm. Math. Phys.* 118 §2 for the gauge-modulo-Z
  refinement.
- **$\mathcal{B}^*(Y)$ slice theorem** (2): Atiyah-Bott 1983
  *Phil. Trans. Roy. Soc. A* 308 *The Yang-Mills equations over
  Riemann surfaces* for the gauge-theoretic Banach-manifold
  formalism; Mitter-Viallet 1981 *Comm. Math. Phys.* 79 originator
  for the slice construction.
- **Spectral flow / Floer grading** (3): Atiyah-Patodi-Singer 1975
  *Math. Proc. Cambridge* 77-79 for spectral flow; Floer 1988
  *Comm. Math. Phys.* 118 §3 for the mod-8 reduction.
- **Uhlenbeck compactness** (4): Uhlenbeck 1982 *Comm. Math. Phys.*
  83 *Connections with $L^p$ bounds on curvature*; Uhlenbeck 1982
  *Comm. Math. Phys.* 83 *Removable singularities in Yang-Mills
  fields*.
- **Gluing** (5): Taubes 1984 *J. Diff. Geom.* 19 *Self-dual
  Yang-Mills connections on non-self-dual 4-manifolds*;
  Donaldson-Kronheimer 1990 §7.
- **Orientations** (6): Donaldson 1987 *J. Geom. Phys.* 4
  *The orientation of Yang-Mills moduli spaces and 4-manifold
  topology*.
- **$HF_*(Y)$** (7): Floer 1988 *Comm. Math. Phys.* 118 *An
  instanton-invariant for three-manifolds*; Floer 1988
  *J. Diff. Geom.* 28 *Morse theory for Lagrangian intersections*
  (symplectic cousin).
- **Relative Donaldson invariants** (8): Donaldson 1990
  *Topology* 29 *Polynomial invariants for smooth four-manifolds*;
  Floer-Donaldson exchange 1990 (unpublished — cite
  Donaldson-Kronheimer 1990 §7 as the published source).
- **Surgery exact triangle** (9): Floer 1990 *Bull. AMS* 22
  *Instanton homology, surgery and knots*; Braam-Donaldson 1995
  in *Floer Memorial Volume*.
- **Atiyah-Floer** (10): Atiyah 1988 *Proc. Sympos. Pure Math.* 48
  *New invariants of 3- and 4-dimensional manifolds*; Dostoglou-
  Salamon 1994 *Annals of Math.* 139 (proof of the mapping-torus
  case).
- **Polyfolds** (11): Hofer-Wysocki-Zehnder 2017 *Memoirs AMS* 248
  *Polyfold and Fredholm Theory*; Wehrheim 2012 *J. Symplectic
  Geom.* 10 survey.
- **Monopole / instanton equivalence** (12): Kronheimer-Mrowka
  2010 *J. Diff. Geom.* 84 *Knots, sutures and excision*;
  Kronheimer-Mrowka 2007 *Monopoles and Three-Manifolds* (Cambridge
  NMS 10).

**Notation crosswalk.** Donaldson 2002 uses $A$ for the connection,
$F_A$ for the curvature (matches `03.05.07`-`03.05.09` and the
Atiyah audit's `03.07.05+`). The configuration space is
$\mathcal{B}$ (Donaldson) vs. $\mathcal{M}$ (Floer 1988) vs.
$\mathcal{C}$ (Kronheimer-Mrowka 2007) — Donaldson's $\mathcal{B}$
is the Babel Bible choice for new units. Critical points are $\alpha,
\beta, \gamma$ (Donaldson) or $a, b, c$ (Floer); pin $\alpha$.
Chain group is $CF_*$ (Donaldson) vs. $C^F_*$ (Floer); pin $CF_*$.
Grading is $\mu(\alpha, \beta) \in \mathbb{Z}/8$ (Donaldson) vs.
$\mu^F(\alpha, \beta) \in \mathbb{Z}/8\mathbb{Z}$ (Floer); pin
$\mu$. Record decisions inline in `03.07.23`'s master tier.

**DAG edges to add.** New prerequisites for the P1-P3 batch:

- `03.07.17` (CS on $Y$) ← {`03.06.07` finite-dim CS;
  `03.05.07` connection; `03.05.09` curvature}
- `03.07.18` (slice theorem) ← {`03.07.17`; `03.07.05` Yang-Mills
  action}
- `03.07.19` (spectral flow) ← {`03.07.17`; `03.09.24` APS index}
- `03.07.20` (Uhlenbeck cylinder compactness) ← {`03.07.06` ASD
  equation [Atiyah P1, pending]; `03.07.08` Uhlenbeck removable
  singularities [Atiyah P1, pending]}
- `03.07.21` (gluing) ← `03.07.20`
- `03.07.22` (orientations) ← {`03.07.18`; `03.07.21`}
- `03.07.23` ($HF_*(Y)$) ← {`03.07.17`, `03.07.18`, `03.07.19`,
  `03.07.20`, `03.07.21`, `03.07.22`}
- `03.07.24` (relative Donaldson) ← {`03.07.23`; `03.07.09` ASD
  moduli on $S^4$}
- `03.07.25` (surgery triangle) ← `03.07.23`
- `03.07.26` (Atiyah-Floer) ← {`03.07.23`; `05.08.02` symplectic
  Floer; `05.05.01` Lagrangian submanifolds}
- `03.07.27` (polyfolds) ← `03.07.23` (forward reference target)
- `03.07.28` (monopole / instanton) ← `03.07.23`

---

## §5 What this plan does NOT cover

- A line-number-level exercise inventory of Donaldson's 7 chapters.
  Donaldson 2002 has very few formal exercises (it is a research
  monograph, not a textbook); this audit treats the worked-out
  computations as the implicit "exercise pack" and reproduces them
  in the master tier of the punch-list units.
- **Donaldson polynomial invariants of closed 4-manifolds**
  (Donaldson 1990 *Topology* 29). The 4-manifold side; this book is
  about their 3-manifold companion. The polynomials are referenced
  from item 8 (relative invariants) but a dedicated unit on the
  closed-manifold polynomial invariants is deferred to a future
  Donaldson-Kronheimer audit (the 1990 *Geometry of Four-Manifolds*
  is not currently in the Fast Track booklist; flag for inclusion
  if a future cycle adds it).
- **Seiberg-Witten theory and monopole Floer homology** at depth.
  Kronheimer-Mrowka 2007 *Monopoles and Three-Manifolds* is the
  canonical reference; not currently in Fast Track. Item 12 is a
  pointer only.
- **Heegaard Floer homology** (Ozsváth-Szabó 2004). Item 12
  mentions only.
- **Sutured Floer homology** in depth. Item 12 mentions only.
- **Symplectic Floer / Hamiltonian Floer at depth.** Already covered
  by the existing `05.08-floer/` units in the symplectic chapter;
  this audit cross-links rather than duplicates.
- **Bauer-Furuta cohomotopy refinement of Seiberg-Witten.** Out of
  scope (post-dates Donaldson 2002).
- **Quantum-field-theory framing of Chern-Simons** (Witten 1989,
  *Comm. Math. Phys.* 121, Jones polynomial). Pointer-level in item
  1's master tier; not its own unit (could be added under
  `12-tqft/` chapter if and when that chapter is opened).
- **Equivariant / SO(3) variants of instanton Floer.** Kotschick
  appendix material; pointer-level in item 7's master tier.
- **The Donaldson-Furuta-Kotschick "$U$-map" and module structure
  on $HF_*$.** Donaldson Ch. 6 covers this briefly; pointer in
  item 7's master tier rather than a dedicated unit.

---

## §6 Acceptance criteria for FT equivalence (Donaldson Floer)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The Atiyah-Pisa sibling audit's P1 units (`03.07.06` ASD
  equation, `03.07.08` Uhlenbeck removable singularities) have
  shipped (soft prereq, blocks item 4).
- `03.09.24` APS-index unit holds at master-tier proof depth (hard
  prereq, blocks item 3). Already shipped at audit time.
- ≥95% of Donaldson's named theorems in Ch. 1-7 map to Babel Bible
  units (currently ~5-10%; after P1 rises to ~65%; after
  P1+P2 to ~90%; full ≥95% requires P1+P2+P3).
- The signature theorems are at master-tier proof depth:
  $\mathrm{CS}$ gauge-modulo-$\mathbb{Z}$ identity (item 1),
  spectral-flow grading (item 3), Uhlenbeck compactness on
  cylinders (item 4), $\partial^2 = 0$ for the Floer differential
  (item 7), gluing formula for relative Donaldson invariants
  (item 8).
- Pass-W weaving connects the new units to `03.07.05` (Yang-Mills
  action), `03.06.07` (finite-dim Chern-Simons),
  `03.09.24` (APS index), `05.08.02` (symplectic Floer),
  `05.05.01` (Lagrangian submanifolds — for Atiyah-Floer).
- Notation decisions are recorded inline in `03.07.23`'s master
  tier (see §4).

The 7 P1 items close the load-bearing gap (Chern-Simons functional,
configuration space, spectral flow, compactness, gluing,
orientations, $HF_*(Y)$ itself). The 3 P2 items close the TQFT /
surgery / Atiyah-Floer structural gap. The 2 P3 items name the
modern landscape (polyfolds, monopole-instanton equivalence). The 2
P4 enrichments are mandatory once P1 ships.

**Honest scope.** Greenfield. The instanton-Floer chapter is
essentially absent from the Babel Bible; production cost is high but
sharply contained — 11 units in one chapter, with all originator
prose anchored on a small cluster of mid-to-late-1980s papers
(Floer 1988, Donaldson 1987, Uhlenbeck 1982, Taubes 1984,
APS 1975). The book itself is concise (~236 pp) and the audit
maps roughly 1 chapter $\to$ 1-2 units.

**Largest single Donaldson-Floer-distinctive gap:** the apex unit
`03.07.23` $HF_*(Y)$ (item 7). Every other item builds toward it;
the chapter as a whole becomes coherent the moment this unit ships
at master-tier depth.

---

## §7 Sourcing

- **Print.** Cambridge University Press, Cambridge Tracts in
  Mathematics 147, 2002. ISBN 978-0-521-80803-3 (hardback);
  paperback reprint 2010 ISBN 978-0-521-15405-1. Available from
  Cambridge directly and the usual resellers. Status in
  `docs/catalogs/FASTTRACK_BOOKLIST.md`: **BUY**.
- **PDF mirror.** A scanned copy circulates on academic mirrors
  (researchgate, Cambridge institutional preprint repositories);
  not bundled with the Babel Bible; not licensed for redistribution.
  Add to `reference/textbooks-extra/` as
  `Donaldson-FloerHomologyYM-CTM147-2002.pdf` if a clean copy is
  obtained, mirroring the pattern of Lawson-Michelsohn and similar
  monographs.
- **Companion texts (free or already in the corpus).**
  Floer's original 1988 *Comm. Math. Phys.* 118 paper (open via
  Project Euclid mirrors), Salamon's *Lectures on Floer Homology*
  IAS/Park City 1997 lectures (free on Salamon's ETH page —
  `https://people.math.ethz.ch/~salamon/`), Kronheimer-Mrowka 2007
  *Monopoles and Three-Manifolds* (Cambridge NMS 10; commercial,
  cite by ISBN), Donaldson-Kronheimer 1990 *The Geometry of
  Four-Manifolds* (Oxford Mathematical Monographs; commercial,
  cite by ISBN, flag for future Fast Track inclusion).
- **License.** Cambridge Tracts is a commercial publication;
  cite by ISBN. Free academic copies on researchgate / Cambridge
  preprint mirrors are for individual reading only.

---

*Reduced audit pass (no direct PDF access in this cycle). Chapter
structure reconstructed from Cambridge catalogue, AMS Bull. review
by Nicolaescu, and cross-checked against Floer 1988,
Donaldson-Kronheimer 1990, Kronheimer-Mrowka 2007, Salamon 1997.
Full P1 line-number inventory deferred pending direct PDF access.
Hard prereq: `03.09.24` APS-index master-tier shipped. Soft prereq:
Atiyah-Pisa sibling audit's `03.07.06` and `03.07.08` shipped.*
