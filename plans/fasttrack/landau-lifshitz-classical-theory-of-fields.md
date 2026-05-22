# Landau, Lifshitz — *The Classical Theory of Fields* (Fast Track 1.03) — Audit + Gap Plan

**Book:** L. D. Landau, E. M. Lifshitz, *The Classical Theory of Fields*,
Volume 2 of the *Course of Theoretical Physics*. Canonical English edition:
4th revised English edition, translated by Morton Hamermesh,
Butterworth-Heinemann / Pergamon, 1975 (reprinted with corrections through
the 1980s and 1990s; ISBN 0-7506-2768-9). Russian original 1st edition 1939
(Landau and Lifshitz); the 7th Russian edition (1988) is the basis of the
4th revised English. 402 pages, 14 chapters.

**Fast Track entry:** 1.03 of `docs/catalogs/FASTTRACK_BOOKLIST.md`, the
SR + EM + GR slot of the Course of Theoretical Physics strand. Sibling
entry 1.02 *Mechanics* (Landau Vol 1) is being audited in parallel this
cycle and is a hard prerequisite for the Lagrangian-mechanics framing
that opens Vol 2.

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite of the
orchestration protocol in `docs/plans/AGENTIC_EXECUTION_PLAN.md`). Output
is a concrete punch-list of new units to write so that *Classical Theory
of Fields* (CTF hereafter) is covered to the equivalence threshold
(≥95% effective coverage; see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§3.4).

**Audit completeness: `reduced`** per AGENTIC_EXECUTION_PLAN §6.6. The PDF
is not in the local `reference/` archive and is BUY-only (Pergamon /
Butterworth-Heinemann holds rights; no author-hosted PDF, no public-domain
Internet Archive scan accessible at audit time). The §1 inventory below is
built from the publicly visible Elsevier / ScienceDirect TOC, peer
references (MTW, Jackson, Wald, Carroll), and the citation network. P5
verification on this audit cannot mark CTF `equivalence-covered`; only
`equivalence-partial` until re-audited from a full source. Re-audit
upgrade queued in `docs/catalogs/NEED_TO_SOURCE.md`.

---

## §1 What CTF is for

CTF is the second volume of the Landau-Lifshitz *Course of Theoretical
Physics*. It is the canonical *physicist's* exposition of classical field
theory: the entire content of special relativity, classical
electrodynamics, and general relativity is derived inside ~400 pages from
a single editorial premise — the **principle of least action applied to
fields and to point particles coupled to fields**. The book is the
Landau-school distillation: definitions are minimal, derivations proceed
by physical reasoning rather than by mathematical formalism, and every
field theory in the book (the free relativistic particle, the
electromagnetic field, the gravitational field) is introduced as the
simplest action invariant under the relevant symmetry group.

Distinctive editorial framing, in roughly the order CTF develops it:

1. **Relativity principle first.** Chapter 1 begins not with Maxwell's
   equations and an asymmetry in their transformation laws (Einstein 1905,
   Jackson Ch. 11) but with the Einstein-synchronisation construction of
   the invariant interval $ds^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2$ as a
   postulate. The Lorentz group is then derived as the isometry group of
   $ds^2$. This is the inverse of the historical / Jackson order and is
   pedagogically decisive: every later chapter is "what is the simplest
   action invariant under the Poincaré group?".

2. **Relativistic mechanics as a one-line action principle (Ch. 2).** The
   free-particle action is $S = -mc \int ds$ — the unique Poincaré-invariant
   functional linear in proper time. From it the entire kinematics
   (four-momentum, $E = mc^2$, mass-shell condition) drops out by
   variation. Compare Jackson §12.1 (postulates Maxwell, derives
   Lorentz) and Goldstein Ch. 7 (Lagrangian first but no field-theoretic
   continuation): only LL takes the action functional as primary and
   carries it forward to EM and GR.

3. **EM as the simplest field theory of a vector potential coupled to
   particles (Ch. 3-4).** The interaction term $-(e/c) \int A_\mu \, dx^\mu$
   is the unique Poincaré- and gauge-invariant coupling linear in
   $A_\mu$. The free-field term $-(1/16\pi c) \int F_{\mu\nu} F^{\mu\nu}
   \, d^4 x$ is the unique gauge-invariant Lorentz scalar quadratic in
   $\partial A$. Maxwell's equations are then Euler-Lagrange equations
   from the total action. Compare Jackson Ch. 11-12: Jackson postulates
   Maxwell and *checks* covariance; LL postulates covariance and
   *derives* Maxwell.

4. **Gravity as the geometric field theory on Lorentzian manifolds (Ch.
   10-11).** The gravitational field is identified with the spacetime
   metric $g_{\mu\nu}$; the equivalence principle is the postulate that
   in a freely falling frame all non-gravitational physics reduces to
   special relativity. The geodesic equation is then the EL equation of
   $-mc \int ds$ on a curved Lorentzian background. The Einstein-Hilbert
   action $S_g = -(c^3 / 16\pi G) \int R \sqrt{-g} \, d^4 x$ is the
   simplest scalar invariant built from the metric and its derivatives,
   and Einstein's equations $G_{\mu\nu} = (8\pi G / c^4) T_{\mu\nu}$ are
   its EL equations. This is the *Hilbert 1915* derivation in a
   physicist's idiom, presented as the obvious continuation of the EM
   construction.

5. **Energy-momentum and stress-energy tensors as Noether currents (Ch.
   4 and 11).** The canonical stress-energy tensor for EM is constructed
   directly from translation invariance of the action; the Hilbert
   stress-energy tensor for matter is the source of Einstein's
   equations, defined by $T_{\mu\nu} = -(2 / \sqrt{-g}) \delta S_m /
   \delta g^{\mu\nu}$. The two definitions are reconciled via
   improvement terms (Belinfante-Rosenfeld), though LL does not
   emphasise the symmetrisation problem explicitly.

6. **Explicit solutions ahead of formalism.** CTF computes the
   Schwarzschild and Reissner-Nordström solutions (Ch. 12), the
   Friedmann-Lemaître cosmologies (Ch. 14), the Liénard-Wiechert
   potentials and synchrotron radiation (Ch. 8-9) all in coordinate
   formulas without committing to a coordinate-free differential-geometric
   treatment. Compare Wald and Carroll, which set up the
   coordinate-free machinery first; LL goes directly from $g_{\mu\nu}$ in
   coordinates to the Schwarzschild metric.

7. **Compactness and selection.** ~400 pages cover what MTW (1279 pp.),
   Jackson (832 pp.) and Wald (491 pp.) cover combined. The selection
   is consciously *physicist's*: no formal differential geometry, no
   bundle-theoretic gauge framing, no causal-structure theorems
   (Penrose-Hawking singularity theory is mentioned only in passing in
   §14). The trade-off is loss of mathematical generality in exchange
   for derivational unity across SR + EM + GR.

8. **Pointer to QFT (Ch. 4, 11, 14).** The action-principle framing
   continues into Vol 4 (*Quantum Electrodynamics*) and is the reason
   CTF is the natural pre-text for a path-integral course. CTF stops at
   the classical level — quantisation is Vol 4's job — but the
   editorial choice of the action functional is exactly what makes the
   quantisation programme transparent.

CTF is **not** a first introduction to electromagnetism or to relativity
for the mathematically untrained: there is essentially no exterior calculus
(forms appear only implicitly as antisymmetric tensors), no formal
differential geometry beyond index notation, and limited rigorous
treatment of distributions or weak solutions. It assumes Vol 1 *Mechanics*
(Lagrangian and Hamiltonian formalism on $TQ$ and $T^*Q$) and
undergraduate vector calculus + linear algebra. The canonical alternative
texts — cited throughout the §1 inventory and as audit cross-checks —
are:

- **C. W. Misner, K. S. Thorne, J. A. Wheeler, *Gravitation*, W. H.
  Freeman 1973.** (MTW.) The encyclopaedic differential-geometric
  treatment of GR; Track-1 / Track-2 structure mirrors CTF's
  physicist-first approach but with a coordinate-free language layer
  CTF lacks.
- **J. D. Jackson, *Classical Electrodynamics*, 3rd edition, Wiley 1998.**
  The encyclopaedic EM reference. Jackson postulates Maxwell and
  derives covariance; CTF inverts this order.
- **R. M. Wald, *General Relativity*, University of Chicago Press 1984.**
  The canonical mathematically-rigorous GR text; covers causal-structure
  theory, singularity theorems, and asymptotic structure that CTF
  omits. Wald is the bridge between CTF's physicist GR and the
  Lorentzian-geometry literature.
- **S. M. Carroll, *Spacetime and Geometry: An Introduction to General
  Relativity*, Pearson 2003.** Modern pedagogical GR; covers
  differential-geometric prerequisites in Ch. 2-3 in a style closer to
  the Babel Bible's existing `03-modern-geometry/` strand than LL's index
  calculus.

A fifth optional cross-check, useful for the EM-as-gauge-theory bridge
that CTF foreshadows but does not develop, is **B. Felsager,
*Geometry, Particles, and Fields*, Springer 1998** — the same content
in fibre-bundle language.

---

## §2 Coverage table (Babel Bible vs CTF)

Cross-referenced against the current 313-unit corpus (`manifests/`
inventory at audit time). ✓ = covered, △ = partial / different framing,
✗ = not covered.

| CTF chapter / topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Ch. 1 — Principle of relativity; Lorentz transformations; invariant interval | `05.00.06-galilean-newtonian-setup` (Galilean limit only); `04.05.09-hodge-index-theorem` (mentions Minkowski signature in algebraic-geometry analogy) | △ | **Gap.** Minkowski space, Lorentz group, invariant interval, four-vectors are not first-class objects. Galilean-Lorentzian contraction is mentioned in passing in `05.00.06` line 218 but not developed. |
| Ch. 2 — Relativistic mechanics; four-momentum; mass-shell; $E = mc^2$ | — | ✗ | **Gap.** Free relativistic particle action $S = -mc \int ds$ is not in the Babel Bible. `05.00.04-noether-theorem` has a $\mathbb{R}^4$ scalar-field example with Lagrangian density but no relativistic point particle. |
| Ch. 3 — Charges in EM fields; gauge invariance; field-particle interaction | `03.04.08-variational-calculus` (covers EL on fibre bundles, abstractly); `05.00.04-noether-theorem` (covers Noether currents abstractly) | △ | **Gap.** No unit treats the EM 4-potential $A_\mu$, the field tensor $F_{\mu\nu}$, or the minimal coupling $-(e/c) A_\mu dx^\mu$ explicitly. |
| Ch. 4 — EM field equations; Maxwell's equations from action; stress-energy | `03.07.05-yang-mills-action` (abelian case is EM, but framed as gauge theory not as CTF builds it); `05.00.04-noether-theorem` (line 273 has scalar-field stress-energy example) | △ | **Gap.** Maxwell's equations from $-(1/16\pi c) \int F_{\mu\nu} F^{\mu\nu} d^4x$, the EM stress-energy tensor in physicist's index notation, Poynting vector, and conservation laws are not directly covered. |
| Ch. 5 — Constant EM fields; Coulomb law; magnetic dipole; multipole expansion | — | ✗ | **Gap.** Standard EM problems (point charge, dipole, multipole) absent from Babel Bible. |
| Ch. 6 — Electromagnetic waves; plane waves; polarisation; energy flux | — | ✗ | **Gap.** Plane-wave solutions of Maxwell, polarisation, wave-zone fields absent. |
| Ch. 7 — Propagation of light; geometric optics; eikonal; Doppler; aberration | — | ✗ | **Gap.** Eikonal limit, light-cone propagation, optical phenomena absent. |
| Ch. 8 — Field of moving charges; Liénard-Wiechert potentials; retarded potentials | — | ✗ | **Gap.** Retarded Green's function, Liénard-Wiechert formulas absent. |
| Ch. 9 — Radiation of EM waves; Larmor formula; multipole radiation; synchrotron | — | ✗ | **Gap.** Larmor formula, multipole radiation, accelerated-charge spectrum absent. |
| Ch. 10 — Particle in a gravitational field; metric tensor; geodesic equation; equivalence principle | `05.02.06-geodesic-flow-hamiltonian` (Riemannian geodesic flow as a Hamiltonian system; not Lorentzian, no equivalence-principle framing) | △ | **Gap.** Lorentzian metric, equivalence principle, Christoffel symbols, geodesic equation as EL of $-mc \int ds$ on curved background are not in the Babel Bible. Riemannian (positive-definite) geodesic flow is covered; the Lorentzian extension is not. |
| Ch. 11 — Gravitational field equations; Riemann curvature; Einstein-Hilbert action | `03.05.09-curvature` (curvature of a connection on a vector bundle; pure mathematical setup); `03.07.05-yang-mills-action` (action principle for gauge connections, abelian and non-abelian; not metric-based) | △ | **Gap.** Riemann curvature of a Lorentzian metric, Ricci tensor and Ricci scalar, Bianchi identities, Einstein-Hilbert action $S = -(c^3/16\pi G) \int R \sqrt{-g} d^4x$, and the Einstein field equations $G_{\mu\nu} = 8\pi G T_{\mu\nu}/c^4$ are not in the Babel Bible. The Codex has connection-curvature for *vector* bundles but not the Levi-Civita connection of a Lorentzian metric and its specific curvature tensors. |
| Ch. 12 — Field of gravitating bodies; Schwarzschild; Reissner-Nordström; Kerr | — | ✗ | **Gap.** No exact solutions of Einstein's equations. |
| Ch. 13 — Gravitational waves; weak-field limit; quadrupole formula | — | ✗ | **Gap.** Linearised gravity, transverse-traceless gauge, quadrupole radiation formula absent. |
| Ch. 14 — Relativistic cosmology; FLRW; Friedmann equations; cosmological constant | — | ✗ | **Gap.** Cosmological solutions, scale factor, redshift, $\Lambda$CDM are absent. |

**Aggregate coverage estimate:** ~5-10% of CTF has corresponding or
neighbouring Babel Bible units; the rest is uncovered. The Codex has the
*mathematical* infrastructure for several CTF chapters (variational
calculus on bundles, abstract Noether theorem, abstract curvature of a
connection, Riemannian geodesic flow) but none of the *physical content*
in CTF's framing — neither special relativity, nor Maxwell theory, nor
general relativity have dedicated units. Closing this is a substantial
new-unit punch-list. The Vol 1 *Mechanics* punch-list is a strict
prerequisite for the relativistic-mechanics units (3 + 4 below).

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

The natural Babel Bible location for CTF content is a new sub-strand within
`03-modern-geometry/` (provisionally `03.14-relativity/` or
`03.15-classical-field-theory/` — directory name to be confirmed during
P3 setup against `docs/specs/UNIT_SPEC.md`'s strand convention) for SR
and GR, and a new top-level dossier within `05-symplectic/` or the new
field-theory strand for the EM content. **Numbering below uses
placeholder `XX.YY.NN` pending strand assignment in P3.**

**Priority 0 — blocked by Vol 1 *Mechanics* punch-list:** The
relativistic-mechanics units (3, 4 below) require Vol 1 priority-1 units
on the action principle for a single particle, four-velocity vs.
three-velocity, and the canonical correspondence between Galilean and
Newtonian mechanics. Vol 1 audit is running in parallel this cycle; check
`plans/fasttrack/landau-mechanics.md` (sibling audit) for the exact
blocker list before scheduling Priority-1 production.

**Priority 1 — high-leverage, captures CTF's editorial core (SR + EM
action principle + GR action principle):**

1. **`XX.YY.01` Minkowski space and the Lorentz group.** $\mathbb{R}^{1,3}$
   with signature $(+,-,-,-)$ (CTF / particle-physics convention; cross-walk
   to the $(-,+,+,+)$ convention used in parts of `03-modern-geometry/`
   recorded explicitly — see §4), invariant interval $ds^2$, Lorentz
   transformations as $\mathrm{O}(1,3)$, Poincaré group as the affine
   extension. Wikipedia / MTW Ch. 1-3 / Carroll §1 cross-check. Three-tier.
   Beginner: $1+1$ Lorentz boost, time dilation, length contraction.
   Intermediate: full $\mathrm{SO}^+(1,3)$ structure, generators, Lie
   algebra. Master: bridge to spin geometry (`03.09.02-clifford-algebra`
   already records the LL signature convention conflict, line 658) and
   to the existing Galilean-contraction note in
   `05.00.06-galilean-newtonian-setup`. ~1800 words.

2. **`XX.YY.02` Four-vectors, four-tensors, and the index calculus on
   $\mathbb{R}^{1,3}$.** $x^\mu$ vs $x_\mu$, raising and lowering with
   $\eta_{\mu\nu}$, summation convention, $\partial_\mu$ vs $\partial^\mu$,
   antisymmetric tensors and the dual via $\epsilon^{\mu\nu\rho\sigma}$.
   Pure notation unit, ~1200 words. Beginner only. CTF Ch. 1 §6 anchor;
   Jackson §11.6 cross-check.

3. **`XX.YY.03` The relativistic free-particle action $S = -mc \int ds$.**
   CTF Ch. 2 §8. Derivation of four-momentum $p^\mu = (E/c, \mathbf{p})$,
   mass-shell $p^\mu p_\mu = m^2 c^2$, $E^2 = (pc)^2 + (mc^2)^2$, the
   non-relativistic limit. Three-tier. Master section: the action as the
   simplest Poincaré-invariant functional linear in proper time
   (uniqueness up to total derivative). ~2000 words. Bridges Vol 1
   Lagrangian-mechanics priority-1 unit; the action principle generalises
   `05.00.02-hamilton-principle` to the relativistic case.

4. **`XX.YY.04` Charged particle in an EM field: minimal coupling.** CTF
   Ch. 3 §16. The interaction action $-(e/c) \int A_\mu \, dx^\mu$ as the
   unique gauge-invariant scalar linear in $A_\mu$, the Lorentz force law
   $dp^\mu / d\tau = (e/c) F^{\mu\nu} u_\nu$ as the EL equation, the field
   tensor $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$, gauge
   transformations $A_\mu \to A_\mu + \partial_\mu \chi$. Three-tier.
   Master section: bridge to `03.05.07-principal-bundle-connection` — the
   $A_\mu$ is the local form of a $U(1)$-connection on a principal bundle
   over Minkowski space. ~2200 words.

5. **`XX.YY.05` The EM field action and Maxwell's equations.** CTF Ch.
   4 §27. The free-field action $-(1/16\pi c) \int F_{\mu\nu} F^{\mu\nu}
   \, d^4 x$ as the unique gauge-invariant Lorentz scalar quadratic in
   $\partial A$, the EL equations $\partial_\mu F^{\mu\nu} = (4\pi/c)
   j^\nu$ (the inhomogeneous Maxwell equations), the Bianchi identity
   $\partial_\mu F^*{}^{\mu\nu} = 0$ (the homogeneous Maxwell equations).
   Three-tier. Master section: comparison with the abelian case of
   Yang-Mills (`03.07.05-yang-mills-action`) and the
   bundle-theoretic re-derivation. ~2500 words. Originator-prose anchor —
   Maxwell 1865 / 1873 *Treatise on Electricity and Magnetism* and
   Einstein 1905 *Annalen der Physik* as the citation pair.

6. **`XX.YY.06` Stress-energy tensor of the EM field.** CTF Ch. 4 §32-33.
   Canonical $T^{\mu\nu}$ from translation invariance via Noether's theorem
   on a Lagrangian density (extending `05.00.04-noether-theorem`'s
   field-theory addendum), symmetrisation problem, the symmetric
   $T^{\mu\nu} = -F^{\mu\alpha} F^\nu{}_\alpha + (1/4) \eta^{\mu\nu}
   F^{\alpha\beta} F_{\alpha\beta}$, conservation $\partial_\mu T^{\mu\nu}
   = 0$, Poynting vector and energy flux. Three-tier. ~2000 words.

7. **`XX.YY.07` Lorentzian metric and the equivalence principle.** CTF
   Ch. 10 §82, §87. A Lorentzian manifold $(M, g)$ with signature $(+,-,-,-)$,
   the equivalence principle as the postulate that locally inertial frames
   reduce all non-gravitational physics to SR, Christoffel symbols
   $\Gamma^\lambda_{\mu\nu}$ as the unique torsion-free
   metric-compatible connection, the geodesic equation $\ddot x^\lambda
   + \Gamma^\lambda_{\mu\nu} \dot x^\mu \dot x^\nu = 0$ as the EL of
   $-mc \int ds$ on $(M, g)$. Three-tier. Master section: bridge to
   `05.02.06-geodesic-flow-hamiltonian` (the Riemannian-positive case)
   and to `03.05.07-principal-bundle-connection` (the Levi-Civita
   connection as a specific principal-bundle connection on the
   orthonormal frame bundle, which is `03.05.03-orthogonal-frame-bundle`
   adapted to Lorentzian signature). ~2500 words.

8. **`XX.YY.08` Riemann curvature, Ricci tensor, scalar curvature on a
   Lorentzian manifold.** CTF Ch. 11 §91-92. Riemann tensor
   $R^\rho{}_{\sigma\mu\nu}$ in coordinates, symmetries (antisymmetry in
   first and second pairs, pair-symmetry, first Bianchi), Ricci tensor
   $R_{\mu\nu} = R^\rho{}_{\mu\rho\nu}$, scalar curvature $R = g^{\mu\nu}
   R_{\mu\nu}$, second Bianchi identity $\nabla_\lambda R^\rho{}_{\sigma\mu\nu}
   + \nabla_\mu R^\rho{}_{\sigma\nu\lambda} + \nabla_\nu
   R^\rho{}_{\sigma\lambda\mu} = 0$. Three-tier. Master section: bridge
   to `03.05.09-curvature` (curvature of a connection on a vector bundle;
   the Lorentzian Riemann tensor is a specific case for the Levi-Civita
   connection on $TM$). ~2200 words.

9. **`XX.YY.09` The Einstein-Hilbert action and the Einstein field
   equations.** CTF Ch. 11 §93. The action $S_g = -(c^3 / 16\pi G) \int R
   \sqrt{-g} \, d^4 x$ as the simplest scalar invariant of the metric and
   its derivatives, derivation of the EL equation $G_{\mu\nu} = R_{\mu\nu}
   - (1/2) g_{\mu\nu} R = (8\pi G / c^4) T_{\mu\nu}$, the Hilbert
   stress-energy tensor $T_{\mu\nu} = -(2 / \sqrt{-g}) \delta S_m /
   \delta g^{\mu\nu}$. Three-tier. Master section: originator-prose
   treatment citing Hilbert 1915 *Die Grundlagen der Physik* and Einstein
   1915 *Sitzungsberichte* (independent discovery); the Hilbert
   variational derivation is the editorial centre of LL Ch. 11. ~2800
   words.

**Priority 2 — completes CTF's worked-solutions and radiation chapters:**

10. **`XX.YY.10` Liénard-Wiechert potentials and retarded Green's
    function.** CTF Ch. 8 §62-66. The retarded Green's function for the
    d'Alembertian, the Liénard-Wiechert potentials of a moving point
    charge. Three-tier. ~2000 words. Jackson §14 cross-check.

11. **`XX.YY.11` Larmor formula and multipole radiation.** CTF Ch. 9
    §67-71. Power radiated by an accelerated charge, dipole and quadrupole
    radiation, the radiation reaction problem (Abraham-Lorentz). Three-tier.
    ~2000 words. Jackson §9, §16 cross-check.

12. **`XX.YY.12` Schwarzschild solution.** CTF Ch. 12 §97. Spherically
    symmetric vacuum solution of Einstein's equations, the Schwarzschild
    coordinates, the event horizon at $r = 2GM/c^2$, perihelion advance
    and light bending. Three-tier. ~2500 words. Wald Ch. 6, MTW §31, Carroll
    Ch. 5 cross-check.

13. **`XX.YY.13` Linearised gravity and the quadrupole formula.** CTF Ch.
    13 §107. Weak-field $g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu}$, the
    transverse-traceless gauge, the wave equation $\Box \bar h_{\mu\nu} =
    -(16\pi G / c^4) T_{\mu\nu}$, the quadrupole formula $P = (G / 5c^5)
    \langle \dddot Q_{\mu\nu} \dddot Q^{\mu\nu} \rangle$. Three-tier.
    ~2000 words. MTW §35, Wald §4.4 cross-check.

14. **`XX.YY.14` FLRW cosmology and Friedmann equations.** CTF Ch. 14
    §111-112. The FLRW metric with scale factor $a(t)$, the two
    Friedmann equations as Einstein's equations on the FLRW ansatz,
    redshift, cosmological constant. Three-tier. ~2000 words. Wald §5,
    Carroll Ch. 8 cross-check.

**Priority 3 — Master-tier deepenings and constant-field / wave chapters
(complete CTF's EM coverage to ≥95%):**

15. **`XX.YY.15` Plane EM waves and polarisation.** CTF Ch. 6 §47-50.
    Pointer or short unit; bridges to optics units in future strands.
    ~1200 words.

16. **`XX.YY.16` Geometric optics and the eikonal equation.** CTF Ch. 7
    §53. Pointer unit. ~1000 words.

17. **`XX.YY.17` Constant fields: Coulomb law, dipole, multipole.** CTF
    Ch. 5 §36-41. Pointer / refresher unit. ~1500 words.

**Priority 4 — survey pointers (optional, Master-only):**

18. **`XX.YY.18` Causal structure and singularity theorems.** Pointer
    unit at FT-equivalence. Wald Ch. 8-9, Penrose-Hawking, Hawking-Ellis
    *Large Scale Structure of Space-Time* as bibliography. CTF mentions
    only in passing. ~1200 words.

19. **`XX.YY.19` Kerr and Reissner-Nordström solutions.** Pointer unit;
    CTF Ch. 12 §104. ~1200 words.

---

## §4 Implementation sketch (P3 → P4)

For a full CTF coverage pass, items 1-9 are the minimum set (with the
Vol 1 priority-1 prereqs as a strict requirement). Realistic production
estimate, mirroring earlier batches:

- ~3.5-4.5 hours per CTF unit. CTF units skew higher than the corpus
  average because (a) the index calculus is unfamiliar to the Babel Bible's
  current differential-geometry idiom, (b) master tier requires
  explicit cross-walks to bundle-theoretic framings already in
  `03-modern-geometry/`, and (c) physical interpretation paragraphs
  beyond the mathematical statements add length to every tier.
- 9 priority-1 units × ~4 hours = ~36 hours of focused production. Plus
  the Vol 1 priority-1 prereqs (estimate from sibling audit). Plus
  priority-2 (5 units × ~4 hours = ~20 hours) to close the EM and GR
  worked-solutions / cosmology gap. Total ~56 hours of CTF-specific
  production, fitting a focused 8-10 day window. Priority-3+4 are
  Master-tier deepenings and can ship later.

**Originator-prose targets.** CTF is itself an *expository* text (Landau
school distillation), not the original source for any of the theorems it
develops. The originator citations for priority-1 units 5 and 9 should
trace through CTF back to:

- **J. C. Maxwell**, *A Treatise on Electricity and Magnetism*, Vols
  I-II, Oxford 1873 — the original Maxwell-equations text. Used for
  unit 5 (the EM field equations).
- **A. Einstein**, "Zur Elektrodynamik bewegter Körper," *Annalen der
  Physik* 17 (1905) 891-921 — special relativity. Used for unit 1.
- **A. Einstein**, "Die Feldgleichungen der Gravitation," *Sitzungsberichte
  der Preussischen Akademie der Wissenschaften* (Berlin, 25 Nov 1915)
  844-847 — the Einstein field equations. Used for unit 9.
- **D. Hilbert**, "Die Grundlagen der Physik," *Nachrichten von der
  Königl. Gesellschaft der Wissenschaften zu Göttingen* (20 Nov 1915)
  395-407 — the variational derivation of the field equations from the
  Einstein-Hilbert action, which is CTF's framing. Used for unit 9.
- **E. Noether**, "Invariante Variationsprobleme," *Nachr. d. Kgl. Ges.
  d. Wiss. zu Göttingen* (1918) 235-257 — the conserved-currents
  theorem; already cited from `05.00.04-noether-theorem`, re-cited for
  unit 6.

**Notation crosswalk (load-bearing for this strand).** CTF uses the
**$(+,-,-,-)$ Minkowski signature** (timelike $+$, spacelike $-$), greek
indices $\mu, \nu, \ldots$ for 4-tensors and latin indices $i, j, \ldots$
for 3-tensors, the **Einstein summation convention**, and the
$\eta_{\mu\nu} = \mathrm{diag}(+1, -1, -1, -1)$ metric.

The Babel Bible's existing `03-modern-geometry/` strand uses **$(-,+,+,+)$ in
several places** — `03.09.02-clifford-algebra` line 658 explicitly
records the LM (Lawson-Michelsohn) convention as $(-,+,+,+)$ in the
spin-geometry treatment, and notes "the physics literature works in
Lorentzian signature $(1, 3)$ with the *opposite* sign convention from
LM." The `03.09.04-spin-structure` and `03.09.05-spinor-bundle` units
inherit the LM $(-,+,+,+)$ convention.

This is a **direct conflict** between the LL convention used in the new
CTF strand and the LM convention used in the existing spin-geometry
strand. The convention decision is:

- **Adopt the CTF $(+,-,-,-)$ signature inside the new
  `XX.YY.NN-*` units** (priority-1 units 1-9 and priority-2 units 10-14).
  This is the physicist's convention; CTF's index calculus is unworkable
  in $(-,+,+,+)$ without rewriting every signed term, and the audience
  for this strand is reading the Landau-school programme directly.
- **Document the conflict explicitly** in a `§Notation` paragraph of
  unit 1 (`XX.YY.01` Minkowski space and the Lorentz group) and unit 7
  (`XX.YY.07` Lorentzian metric and the equivalence principle), citing
  `03.09.02-clifford-algebra` and noting that the spin-geometry units
  use the opposite signature. Any unit that lateral-connects to a
  spin-geometry unit must include a one-line signature crosswalk.
- **Record in `docs/specs/UNIT_SPEC.md` §11 notation conventions** (P2
  task) as a strand-level decision: SR/EM/GR units inherit CTF
  signature; spin-geometry / Lorentzian-Dirac units inherit LM
  signature; cross-strand bridges include explicit signature
  crosswalks. This is the same pattern `03.09.02` already establishes
  in its physics-vs-LM crosswalk, generalised to the new strand.

Without this decision being recorded explicitly, P4 (units-cross-link)
will produce broken citation chains in the spin-geometry-to-relativity
bridge units (most notably any unit on the Dirac equation on a
Lorentzian manifold, which sits exactly at the conflict).

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named formula in CTF (full P1
  audit; deferred to a future re-audit once the PDF is sourced — see
  AGENTIC_EXECUTION_PLAN §6.6 hard rule).
- Exercise-pack production. CTF problems are extensive (~30-50 per
  chapter, ~500 total) and frequently open-ended; exercise pack is a
  P3-priority-3 follow-up after the priority-1 units ship and the
  full-source re-audit is complete. (Reduced-audit constraint: §1.2
  exercise inventory is omitted per AGENTIC_EXECUTION_PLAN §6.6.)
- The Yang-Mills *non-abelian* generalisation of EM. CTF's EM-action
  framing extends naturally to Yang-Mills, but Yang-Mills as a
  curriculum strand is anchored at **FT 3.20 Atiyah** *Geometry of
  Yang-Mills Fields* (and to `03.07.05-yang-mills-action`, already in
  the Codex), not at FT 1.03. Defer the non-abelian gauge content to
  the Atiyah and Donaldson-Kronheimer punch-lists, with a
  one-paragraph bridge in unit 5's Master section.
- Quantisation of any field theory. CTF stops at the classical level.
  Path-integral quantisation lives in the QFT track (`05.00.04-noether-theorem`
  already foreshadows it for scalar fields; full path-integral coverage
  is in FT 2.20 *QED* and the stat-mech strand `08.07.01-path-integral`).
- Causal structure, singularity theorems, asymptotic structure. These
  are CTF-adjacent but not in CTF; bibliography pointer in priority-4
  unit 18 only. Wald Ch. 8-9 is the canonical entry point.
- Numerical relativity, post-Newtonian expansion, gravitational-wave
  data analysis. Out of FT 1.03 scope.
- Plasma physics, magnetohydrodynamics, optical media (dispersive EM).
  Out of scope; Landau Vol 8 *Electrodynamics of Continuous Media* is
  the next text in the series and would be a separate Fast Track entry
  if added (not currently listed).

---

## §6 Acceptance criteria for FT equivalence (CTF)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The Vol 1 *Mechanics* priority-1 units have shipped (strict prereq for
  units 3, 4 — the action-principle framing).
- ≥95% of CTF's named theorems / formula-derivations across Ch. 1-14 map
  to Babel Bible units. Currently ~5-10%; after priority-1 (units 1-9) this
  rises to ~55-60% (covers SR foundations, EM action principle, GR
  action principle but not all worked solutions); after priority-1+2
  (adding units 10-14) to ~85% (adds Liénard-Wiechert, Larmor,
  Schwarzschild, linearised gravity, FLRW); full ≥95% requires
  priority-3 (constant fields, plane waves, eikonal — units 15-17).
- ≥90% of CTF's worked computations in Ch. 1-14 have a direct unit or
  are referenced from a unit covering them. The Liénard-Wiechert,
  Larmor, Schwarzschild, linearised-gravity, and FLRW worked
  computations are load-bearing for this criterion and are all in
  priority-2.
- Notation decisions are recorded in `docs/specs/UNIT_SPEC.md` §11 (see
  §4 above).
- Pass-W weaving connects the new units to `03-modern-geometry/`
  (curvature, principal-bundle connection, frame bundle, spin geometry),
  to `05-symplectic/lagrangian-mechanics/` (action principle, Noether),
  and to `03.07.05-yang-mills-action` (EM as abelian gauge theory) via
  lateral connections.

**Hard rule (AGENTIC_EXECUTION_PLAN §6.6):** because this is a
**`reduced`-audit book**, P5 verification cannot mark CTF
`equivalence-covered`. The best mark achievable while the audit is
reduced is `equivalence-partial`. To upgrade to full equivalence-cover,
a full re-audit from the PDF is required and queued in
`docs/catalogs/NEED_TO_SOURCE.md` (see §7).

The 9 priority-1 units close CTF's editorial-core coverage gap given
the Vol 1 prereqs are in place. Priority-2 closes the worked-solutions
gap. Priority-3+4 are deepenings and pointer-only material.

---

## §7 Sourcing

- **BUY-only.** Pergamon / Butterworth-Heinemann holds the rights for
  the English-language *Course of Theoretical Physics*; no author-hosted
  PDF, no free legal Internet Archive scan, no publisher preview beyond
  the ScienceDirect chapter list. The Russian original (Nauka) is also
  copyrighted.
- **Canonical English edition for citation.** L. D. Landau, E. M.
  Lifshitz, *The Classical Theory of Fields*, 4th revised English
  edition, trans. Morton Hamermesh, Course of Theoretical Physics Vol.
  2, Butterworth-Heinemann 1975, ISBN 0-7506-2768-9, xv + 402 pp.
- **Russian-edition citation (Vol 2 in the *Teoreticheskaya Fizika*
  series).** L. D. Landau, E. M. Lifshitz, *Teoriya polya*, 7th edn,
  Nauka, Moscow 1988.
- **Acquisition action.** Add CTF to `docs/catalogs/NEED_TO_SOURCE.md`
  with `priority: medium-high` (this audit is reduced, blocking full
  equivalence-cover) and `acquisition_paths: purchase | university ILL
  | institutional ScienceDirect access`. Once acquired, file under
  `reference/fasttrack-texts/03-physics/Landau-Lifshitz-Vol2-ClassicalTheoryOfFields.pdf`
  (directory to be created if absent) and trigger a full P1 re-audit
  upgrade — replace this reduced audit's §1.2 (exercises) with the
  full inventory, recompute coverage and acceptance thresholds, and
  flip `audit_completeness: reduced → full` in
  `manifests/production/plan.json` and in `manifests/campaign.json`.
- **Peer cross-checks used during the reduced audit** (and the canonical
  cross-check texts to cite in the new units' tier anchors):
  - C. W. Misner, K. S. Thorne, J. A. Wheeler, *Gravitation*, W. H.
    Freeman 1973. Used for GR units 7-9, 12-14.
  - J. D. Jackson, *Classical Electrodynamics*, 3rd edn, Wiley 1998.
    Used for EM units 4-6, 10-11, 15-17.
  - R. M. Wald, *General Relativity*, University of Chicago Press 1984.
    Used for GR units 7-14, 18-19.
  - S. M. Carroll, *Spacetime and Geometry: An Introduction to General
    Relativity*, Pearson 2003. Used as the modern pedagogical cross-check
    for units 1, 7-14.
  - (Optional, for the bundle-theoretic bridge.) B. Felsager, *Geometry,
    Particles, and Fields*, Springer 1998. Used for the Master-tier
    bridges in units 4 and 5.
