# Bott & Tu — *Differential Forms in Algebraic Topology* (FT 1.17) — Deepening pass (genuine gaps)

**Audit slug:** `bott-tu-differential-forms`.
**Primary chapters touched:** `content/03-modern-geometry/04-differential-forms/`, `…/05-bundles/`, `…/06-characteristic-classes/`, `…/08-k-theory/`, `…/12-homotopy/`, `…/13-spectral-sequences/`, and `content/04-algebraic-geometry/03-cohomology/`.

The first-pass audit (2026-04-28) graded the book at ~37% effective coverage and proposed a **14-unit production plan (N1–N14)** plus deepenings. Since then the swarm shipped the entire plan. Grep-verification against the live 1419-unit corpus confirms that every one of N1–N14 exists, **and** every finer sub-topic the §2.8 gap blocks named (twisted/nonorientable de Rham §7, path-fibration loop-space cohomology §16, Pontryagin embedding obstruction §22, Poincaré series of a graded algebra §23, Gysin sequence, projectivization/Grothendieck Chern classes §20, transverse-intersection Poincaré dual, singular cone construction + homology spectral sequence §15, Hopf index theorem §11, flag-manifold Borel presentation + Schubert cells §21/§23) is present and stated/proved.

**Result: 0 genuine gaps.** This is a fully-covered book. The original 14-unit punch-list was executed in full and the brief's prediction ("core is heavily covered, expect 0–3 gaps") resolves at the low end. No new units are warranted; manufacturing marginal units here would duplicate shipped material.

---

## GENUINE GAPS

None. Every candidate from the §2.8 gap blocks and §3 production plan was verified COVERED below.

---

## COVERED (not gaps) — verified against the live corpus

### The 14-unit production plan (N1–N14) — all shipped

- **N1 Mayer-Vietoris sequence (de Rham)** — `03.04.07-mayer-vietoris` (short/long/compact-support MV; partition-of-unity exactness; MV induction on $S^n$). Exercises in `03.04.E1-mv-degree-exercises`.
- **N2 Good cover, finite-dimensionality, MV induction** — `03.04.10-good-cover` (good-cover existence via geodesic convexity; finite-dim of $H^*$; MV induction; Hopf-index references present).
- **N3 Čech-de Rham double complex + tic-tac-toe** — `03.04.11-cech-de-rham` ($K^{p,q}$, $D=d\pm\delta$, tic-tac-toe Künneth/Poincaré-duality, cone construction referenced).
- **N4 $H^*_c$ / $H^*_{cv}$ / de Rham Thom isomorphism + global angular form** — `03.04.09-thom-global-angular-form` (integration along fiber, projection formula, $d\psi=-\pi^*e$ Bott-Tu sign convention explicit, relative de Rham, twisted/non-orientable Thom case).
- **N5 Künneth via MV and tic-tac-toe (dual proof)** — `03.04.12-kunneth`.
- **N6 Singular cohomology + de Rham theorem** — `03.04.13-singular-cohomology` (singular MV via small chains/barycentric subdivision, cone construction, integer-coefficient de Rham theorem, three-route comparison). Also `03.12.11-singular-homology`.
- **N7 Spectral sequence of a filtered/double complex (exact couples)** — `03.13.01-spectral-sequence` (exact couple, derived couple, $E_r^{p,q}$, $d_r$, two filtrations, multiplicative structure, Hopf-invariant). Abstract derived-category versions also at `04.03.13`/`04.03.14`.
- **N8 Leray-Serre spectral sequence + Gysin** — `03.13.02-leray-serre` (Serre SS of fiber bundle; Gysin; **path-loop fibration $\Omega S^n\to PS^n\to S^n$ and $H^*(\Omega S^n)$ — closes Bott-Tu §16**).
- **N9 Leray-Hirsch + splitting principle** — `03.13.03-leray-hirsch-splitting` (incl. Poincaré-series/Hilbert-series material).
- **N10 Sphere bundles + global angular form + Hopf index theorem** — `03.05.10-sphere-bundle` (oriented sphere bundle, Euler class, Hopf index $\sum\mathrm{ind}=\chi$, Poincaré-Hopf, $e(TS^{2n})$). Euler characteristic also `03.12.23`.
- **N11 Local systems and monodromy** — `04.03.02-local-systems` (locally-constant presheaf as local system, monodromy rep $\pi_1\to\mathrm{Aut}$, Möbius as $\mathbb{Z}/2$ system, orientation local system, twisted cohomology — closes Bott-Tu §13 **and** the §7 non-orientable case via the orientation local system).
- **N12 Sullivan minimal models / rational homotopy** — `03.12.06-sullivan-minimal-models` (+ exercises `03.12.E1-rational-homotopy-exercises`; formality/Massey at `03.12.51`; Cartan model `03.12.50`; mixed Hodge on rational homotopy `03.12.44`).
- **N13 Universal bundle, $H^*(BU(k))$, flag-manifold Borel presentation** — `03.08.05-universal-bundle` (infinite Grassmannian = $BU(k)$, $F\ell_n=U(n)/T$, Borel presentation $\mathbb{Z}[x_1,\dots,x_n]/(e_1,\dots,e_n)$, $\mathrm{Gr}(2,4)$ worked). Schubert calculus / coinvariant theorem at `03.06.20-borel-hirzebruch-cohomology-g-t`.
- **N14 Whitehead tower, rational Hurewicz, Serre finiteness** — `03.12.07-whitehead-tower`. Supporting: relative homotopy `03.12.52`, Whitehead theorem `03.12.20`, Hurewicz `03.12.19`, Blakers-Massey `03.12.21`, Postnikov `03.12.40`, K(Z,n)/transgression `03.12.05`/`03.12.40`. $\pi_4(S^3)$/$\pi_5(S^3)$ computations appear across `03.12.06`/`03.12.07`/`03.12.40`.

### Finer §2.8 gap-block sub-topics — all shipped

- **Stokes, integration, orientation, degree of a proper map (§3–§4)** — `03.04.03-integration-on-manifolds`, `03.04.05-stokes-theorem`.
- **Poincaré lemma / closed-and-exact (§4)** — `03.04.21-closed-and-exact-forms-poincare-lemma`, and base case in `03.04.06`.
- **Poincaré duality + transverse-intersection dual $\eta_{S_1\cap S_2}=\eta_{S_1}\wedge\eta_{S_2}$ (§5)** — `03.04.06-de-rham-cohomology` (Pass-5 rows 29/30, full proposition + $T^2$ worked example). Topological version `03.12.16-poincare-duality`, cap product `03.12.17`.
- **Twisted/non-orientable de Rham complex, twisted Poincaré duality, twisted Thom (§7)** — `03.04.06` (twisted Thom isomorphism $H^*(M;\mathcal{o}_E)\cong H^{*+r}_{cv}(E)$) + `03.04.09` (non-orientable Thom via orientation local system) + `04.03.02` (orientation local system, twisted cohomology).
- **Gysin sequence** — `03.13.01`, `03.13.02`, `03.04.06`, `03.06.04` (and `48.12.29-thom-space-thom-isomorphism` in the legacy `03-differential-geometry` tree).
- **Projectivization $\mathbb{P}(E)\to M$ + Grothendieck definition of Chern classes (§20)** — `03.06.04-pontryagin-chern-classes` (explicit "Projectivization and the Grothendieck definition" section, Bott-Tu §20.4 cited, tautological subbundle, Leray-Hirsch route, splitting-principle consistency).
- **Conjugate bundles, realification/complexification, Pontryagin embedding obstruction $p(TM)p(\nu)=1$ (§22)** — `03.06.04` (full $p(TM)p(\nu)=1$ derivation + $\mathbb{C}P^2\not\hookrightarrow\mathbb{R}^5$). Stiefel-Whitney version `03.06.16-whitney-duality-immersion-obstructions` (Massey bound, $\mathbb{RP}^2$).
- **Poincaré series of a graded algebra (§23)** — `03.08.05`, `03.13.03`, `03.06.20` (Poincaré polynomial via fundamental degrees).
- **Flag manifolds as primary objects + Schubert cells (§21)** — `03.08.05` + `03.06.20` (Schubert basis, BGG/Demazure operators).
- **Hopf invariant (§17)** — `03.13.01`, `03.13.02`, `03.12.19`, `03.08.11-j-x-and-j-homomorphism`, `03.04.E1`.
- **Chern-Weil / characteristic-class endpoints** — `03.06.05`/`03.06.06` (invariant polynomial, Chern-Weil homomorphism), `03.06.03`/`03.06.04` (Stiefel-Whitney, Pontryagin/Chern).
- **Eilenberg-MacLane spaces, Postnikov, telescoping/$K(\mathbb{Z},3)$ (§18)** — `03.12.05-eilenberg-maclane`, `03.12.40-postnikov-tower-kan-complex`, referenced in `03.12.07`.
- **Sheaf / Čech cohomology bridge (II §10)** — `04.03.01-sheaf-cohomology`, `04.03.03-cech-schemes`, `03.04.14-hypercohomology-of-a-complex-of-sheaves`.

---

**Result: 0 genuine gaps; 30+ topics verified COVERED with unit ids (14-unit production plan N1–N14 fully shipped, plus all finer §2.8 sub-topics).** Bott-Tu's core (de Rham, Mayer-Vietoris, Čech-de Rham double complex, spectral sequences, characteristic classes, rational homotopy) and its long tail (twisted de Rham, path fibration, Pontryagin embedding obstruction, flag/Schubert/Borel) are all present. The book is essentially fully covered — no new units recommended.
