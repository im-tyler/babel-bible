# Arnol'd-Givental-Kirillov-Vershik et al. — *Dynamical Systems IV: Symplectic Geometry and its Applications* (Fast Track 1.11) — Audit + Gap Plan

**Book:** *Dynamical Systems IV: Symplectic Geometry and its Applications*,
Encyclopaedia of Mathematical Sciences, Vol. 4, edited by V. I. Arnol'd
and S. P. Novikov (Springer, Berlin / Heidelberg).

- 1st English edition: 1990 (translated from the Russian
  *Itogi nauki i tekhniki — Sovremennye problemy matematiki —
  Fundamental'nye napravleniya*, Vol. 4, VINITI 1985), ISBN
  3-540-17003-X. ~283 pp.
- 2nd English edition: 2001, ISBN 3-540-62635-2 / 978-3-540-62635-7,
  vii + 335 pp. (expanded with revised survey of post-1985 developments
  in symplectic topology, Floer / Gromov / mirror-symmetry pointers).
  **The 2001 edition is the citation target for this plan.**

The volume is a multi-author **survey** in the EMS series. It is **not**
Arnol'd's *Mathematical Methods* (FT 1.11-mech, audited at
`plans/fasttrack/arnold-mathematical-methods.md`) and it is **not**
Cannas's *Lectures on Symplectic Geometry* (FT 1.11-cannas, audited at
`plans/fasttrack/cannas-da-silva-symplectic.md`). All three share the
single 1.11 booklist slot — the FT entry "Dynamical Systems IV
(Symplectic Geometry)" is the *EMS* volume, and Cannas / Arnold-Mech are
the freely-available companions the strand recommends alongside it. The
EMS volume itself is a separate text with its own table of contents
which this audit anchors against.

**Contents of Volume 4 (2001 ed.):**

- **Part I — Symplectic Geometry** by V. I. Arnol'd and A. B. Givental
  (~140 pp.). The flagship article and the volume's primary content.
  Eight chapters: (1) linear symplectic geometry; (2) symplectic manifolds;
  (3) symplectic geometry and mechanics; (4) contact manifolds;
  (5) Lagrangian and Legendrian singularities; (6) Lagrangian and
  Legendrian cobordisms; (7) symplectic and contact topology; (8)
  appendices on Floer-Gromov and pseudoholomorphic methods (added in the
  2nd ed.).
- **Part II — Geometric Quantization** by A. A. Kirillov (~80 pp.). The
  orbit method, prequantisation, polarisations, half-densities,
  metaplectic correction, character formula via orbit method, fully
  worked $\mathrm{SU}(2)$, Heisenberg, and nilpotent-Lie examples.
- **Part III — Integrable Systems** by B. A. Dubrovin, I. M. Krichever,
  S. P. Novikov (~50 pp., added in 2001 ed.). Finite-gap integration of
  KdV / KP, theta-function solutions, algebro-geometric integrability,
  Hamiltonian structures on loop groups. **This is the Dubrovin
  contribution the book's title-page attribution refers to.**
- **Part IV — Nonholonomic Dynamical Systems** by A. M. Vershik and
  V. Ya. Gershkovich (~50 pp.). Geometry of distributions, sub-Riemannian
  metrics, Carnot-Carathéodory geometry, Pfaffian systems, variational
  problems with non-integrable constraints, control-theoretic
  reformulation, applications to mechanics (rolling sphere, skate).

**Fast Track entry:** 1.11. Marked `BUY` on
`docs/catalogs/FASTTRACK_BOOKLIST.md` line 41. The two-volume Springer
EMS hardcover or 2001 paperback are the canonical English editions;
selected chapters are reproduced in Arnol'd's *Singularities of
Caustics and Wave Fronts* (1990) and in the *Givental Selecta* (AMS
2012). No fully free PDF; partial chapters circulate on the
EMS-supplements pages.

**Purpose of this plan:** lightweight P1-lite audit-and-gap pass
mirroring the Cannas, Arnold-Mech, and Atiyah audits. Because the EMS
volume is a *survey* — high-density, statement-heavy, light on
self-contained proofs — the equivalence target is **expository-coverage
plus pointer-density**, not full proof-depth on every numbered result.
The Cannas plan owns the proof-depth treatment of the symplectic core;
this Arnold-Dubrovin plan owns the **survey-distinctive content** that
neither Cannas nor Arnold-Mech reach: Lagrangian and Legendrian
singularities (Arnol'd's signature contribution), the Kirillov orbit
method as a complete pedagogical arc, finite-gap integration of KdV,
and sub-Riemannian / nonholonomic geometry.

---

## §1 What the EMS Vol. 4 volume is for

The Arnol'd-Givental survey is the **single densest expository document
on symplectic geometry in print**. Where Cannas teaches the subject from
zero and McDuff-Salamon develops symplectic topology in depth, the EMS
article assumes the reader knows symplectic forms and then walks the
*whole modern landscape* in 140 pages — including topics no other
introductory text touches: Lagrangian and Legendrian singularities,
symplectic cobordism, the variational calculus of Lagrangian
submanifolds, the contact-symplectic correspondence at the level of
detail needed to do calculations. It is the standard reference for
mature researchers entering symplectic geometry from analysis or algebra.

The Kirillov Part II is the **canonical English-language exposition of
the orbit method**, written by its originator. It develops geometric
quantisation from coadjoint orbits with half-density / metaplectic
corrections fully worked, and computes the irreducible unitary
representations of $\mathrm{SU}(2)$, the Heisenberg group, and
nilpotent Lie groups via the orbit-method machinery. Cannas does not
touch geometric quantisation; Codex has only `05.11.02` (one
prequantisation worked example).

The Dubrovin-Krichever-Novikov Part III is the **algebraic-geometric
integrable-systems survey** — finite-gap integration of KdV and KP,
theta-function formulas for soliton solutions, the connection to
Riemann surfaces and Jacobians, Hamiltonian structures on loop groups.
Codex's integrable-systems block (`05.09.*`) covers KAM / Birkhoff /
Nekhoroshev / adiabatic-invariant perturbation theory but **has nothing
on algebro-geometric integrability**.

The Vershik-Gershkovich Part IV introduces **sub-Riemannian / Carnot-
Carathéodory geometry**, the modern setting for control theory and the
geometric formulation of nonholonomic mechanics (rolling sphere, ice
skate, falling cat). Codex has no sub-Riemannian content anywhere.

Distinctive Arnol'd-Givental contributions, in roughly the article's
order:

1. **Symplectic algebra and Lagrangian Grassmannians.** Ch. 1 develops
   the Lagrangian Grassmannian $\Lambda(n) = \mathrm{Sp}(2n)/\mathrm{GL}(n)$
   with its topology, the universal Maslov class, and the Maslov index
   of a loop in $\Lambda(n)$ as the obstruction to lifting to the
   metaplectic Grassmannian. Codex has `05.08.03-maslov-index` (Floer-
   anchored) but the Lagrangian-Grassmannian / universal-Maslov-class
   framing is missing.
2. **Geometry of cotangent bundles.** Ch. 2 treats $T^*X$ as the
   universal symplectic manifold, the canonical 1-form $\theta = p\,dq$
   and its naturality, geodesic flow as Hamiltonian on $T^*M$,
   Hamilton-Jacobi as generating-function PDE. Cannas / Codex cover
   this; Arnold-Givental's distinctive treatment is the **fibered
   cotangent bundle** $T^*M \to M$ and its role in Lagrangian
   fibrations.
3. **The hierarchy of symplectic invariants.** Ch. 3 organises the
   symplectic invariants — symplectic capacities, displacement energy,
   Hofer norm, action spectrum — in a single hierarchy with proven
   inequalities between them. Codex has `05.07.02-symplectic-capacity`
   (Gromov-anchored) but the *hierarchy* and the inequalities are not
   present.
4. **Contact manifolds with full Legendrian theory.** Ch. 4 extends
   Cannas's contact treatment with Legendrian submanifolds, fronts,
   the contact transformation group, contact Hamiltonian formalism,
   and the contact analogue of generating functions. Codex's contact
   block (`05.10.*`) is Cannas-depth; Legendrian theory is missing.
5. **Lagrangian and Legendrian singularities** (Ch. 5) — **Arnol'd's
   signature contribution**. The classification of generic singularities
   of Lagrangian projections $\pi : L \hookrightarrow T^*M \to M$ via
   the $A_k, D_k, E_k$ ADE families; the same for Legendrian projections
   in contact geometry; bifurcation diagrams; caustics in wave optics
   and their stable-versus-unstable classification. **Zero coverage in
   Codex.** This is the chapter that makes the EMS volume canonical:
   Arnol'd developed the entire theory through the 1960s-80s and the
   exposition here is by him, the originator.
6. **Lagrangian and Legendrian cobordism** (Ch. 6). Two Lagrangian
   submanifolds of $T^*M$ are Lagrangian-cobordant if there is a
   Lagrangian in $T^*(M \times [0,1])$ that restricts to each end;
   Arnol'd computes the Lagrangian cobordism groups in low dimensions.
   No coverage in Codex.
7. **Symplectic and contact topology** (Ch. 7). Surveys the
   Eliashberg-Gromov rigidity theorem (symplectomorphism group is
   $C^0$-closed in diffeomorphism group), Gromov non-squeezing,
   Eliashberg's overtwisted-vs-tight dichotomy in 3D contact geometry,
   pseudoholomorphic curves, the Arnol'd conjecture. Codex has the
   non-squeezing / Arnold-conjecture units; Eliashberg rigidity and the
   contact dichotomy are absent.
8. **Floer-Gromov pseudoholomorphic appendix** (Ch. 8, added in 2nd
   ed.). Pointer-level coverage of Gromov-Witten invariants, quantum
   cohomology, mirror symmetry. Codex covers the Floer / non-squeezing
   side; quantum cohomology and Gromov-Witten as such are missing
   (they live in `06-algebraic-geometry/` adjacencies and the mirror-
   symmetry chapter).

Distinctive Kirillov contributions (Part II):

K1. **The orbit method as a unified machine.** Every irreducible unitary
   representation of a simply-connected nilpotent (and many
   semisimple / solvable) Lie groups arises from a coadjoint orbit;
   the construction is prequantum line bundle + polarisation +
   half-density / metaplectic correction. Originator-authored
   exposition.
K2. **Worked irreducible-representation computations.** The
   $\mathrm{SU}(2)$ case (representations indexed by integer spins via
   the $S^2$ orbits), the Heisenberg group (Schrödinger representation
   from the affine-plane orbit), the $ax+b$ group, complete nilpotent
   classification.
K3. **Polarisations, half-densities, metaplectic correction.** The
   technical machinery to make the orbit method functorial. Codex has
   `05.11.02` for one $\mathrm{SU}(2)$ worked example but the general
   polarisation / half-density formalism is not present.
K4. **Character formula via orbit method.** $\chi_\pi(\exp X)$ as the
   Fourier transform of the canonical Liouville measure on the orbit
   $\mathcal{O}_\pi$. Connects to Duistermaat-Heckman as a special
   case.

Distinctive Dubrovin-Krichever-Novikov contributions (Part III):

D1. **Finite-gap integration of KdV.** Periodic solutions of the
   Korteweg-de Vries equation are linearised on the Jacobian of a
   hyperelliptic Riemann surface (the spectral curve); explicit
   theta-function formulas.
D2. **KP hierarchy and Sato Grassmannian.** Multi-component
   generalisations, infinite-dimensional Grassmannian formulation.
D3. **Hamiltonian structures on loop groups and Drinfeld-Sokolov
   reduction.** Connects to the integrable side of conformal field
   theory.

Distinctive Vershik-Gershkovich contributions (Part IV):

V1. **Distributions and Frobenius integrability.** A distribution
   $D \subset TM$ of rank $k$; integrability iff $[D, D] \subset D$;
   nonintegrable distributions are the *nonholonomic* objects.
V2. **Sub-Riemannian / Carnot-Carathéodory metric.** Given a bracket-
   generating distribution and a metric on it, the SR distance
   $d_{\mathrm{CC}}(p, q)$ is the infimum of lengths of horizontal
   paths.
V3. **Ball-Box theorem and Hausdorff dimension.** The SR ball is
   anisotropic; Hausdorff dimension is strictly greater than topological
   dimension. Defines the Carnot-Carathéodory metric structure.
V4. **Variational problems with nonholonomic constraints.** Pontryagin
   maximum principle as the SR-geodesic equation; abnormal extremals
   (Montgomery's example). Rolling ball / ice skate / parking
   problem worked.

---

## §2 Babel Bible coverage map (EMS Vol. 4 ↔ `content/05-symplectic/`)

Cross-referenced against the current 65-unit Codex symplectic chapter.
✓ = covered at EMS-equivalent depth (survey-level, not necessarily
proof-depth); △ = topic present but EMS treatment more comprehensive
or differently framed; ✗ = not covered.

### Part I — Symplectic Geometry (Arnol'd-Givental)

| EMS Ch. / topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| 1 / Linear symplectic geometry; Lagrangian subspaces, Lagrangian Grassmannian $\Lambda(n)$, universal Maslov class | `05.01.01-symplectic-vector-space`; `05.08.03-maslov-index` | △ | Linear symplectic algebra ✓; Lagrangian Grassmannian as a manifold (its topology, $\pi_1(\Lambda(n)) = \mathbb{Z}$, the universal Maslov class as a generator of $H^1(\Lambda(n))$) not present. **Gap.** |
| 1 / Linear Hamiltonian systems, normal forms, Williamson | `05.09.04-williamson-normal-form` | ✓ | Covered. |
| 2 / Symplectic manifold, $T^*X$, Liouville form, Darboux | `05.01.02-symplectic-manifold`; `05.02.05-cotangent-bundle`; `05.01.04-darboux-theorem`; `05.01.05-moser-trick` | ✓ | Cannas-depth, post-priority-1 batch. |
| 2 / Lagrangian fibration, action-angle as Lagrangian fibration | `05.02.04-action-angle-coordinates`; `05.05.01-lagrangian-submanifold` | △ | Action-angle ✓; the *abstract* Lagrangian-fibration concept ($\pi : M \to B$ with Lagrangian fibres) is mentioned in the integrable unit but is not its own item. **Gap (small).** |
| 2 / Weinstein neighbourhoods, Moser | `05.05.02-weinstein-neighbourhood`; `05.01.05-moser-trick` | ✓ | Covered by Cannas batch. |
| 3 / Hamiltonian mechanics, Poisson brackets, integrability, Hamilton-Jacobi | `05.02.01–05.02.04`; `05.05.04-hamilton-jacobi` | ✓ | Covered (Arnold-Mech and Cannas batches). |
| 3 / Symplectic / Hamiltonian group actions, moment map, reduction, KKS | `05.04.01-moment-map`; `05.04.02-symplectic-reduction`; `05.03.01-coadjoint-orbit` | ✓ | Covered. |
| 3 / Convexity, Delzant, Duistermaat-Heckman | `05.04.03-ags-convexity`; `05.04.04-delzant-theorem`; `05.04.05-duistermaat-heckman` | ✓ | Covered by Cannas priority-1 batch. |
| 3 / Symplectic invariants hierarchy (capacities, Hofer norm, action spectrum, displacement energy) | `05.07.02-symplectic-capacity`; `05.07.01-non-squeezing` | △ | Capacities and non-squeezing ✓; Hofer norm, displacement energy, the *hierarchy* with inequalities (Ekeland-Hofer ≤ Hofer-Zehnder ≤ Gromov width, etc.) is not present as such. **Gap.** |
| 4 / Contact manifold, Reeb, $S^{2n+1}$ canonical | `05.10.01-contact-manifold`; `05.10.02-symplectisation`; `05.10.03-gray-theorem` | ✓ | Cannas-depth. |
| 4 / Legendrian submanifold, contact Hamiltonian, contact transformation group | — | ✗ | **Gap.** Legendrian theory absent; Codex has no Legendrian unit. |
| 4 / Front projections, generating families of Legendrians | — | ✗ | **Gap.** |
| 5 / Lagrangian singularities: classification of generic Lagrangian projections, $A_k/D_k/E_k$ catastrophe families, caustics | — | ✗ | **Gap (high priority — Arnol'd's signature topic, not covered by any other FT book).** Originator-author treatment. |
| 5 / Legendrian singularities: classification of generic Legendrian projections (= wavefronts in geometric optics) | — | ✗ | **Gap (high priority).** |
| 5 / Bifurcations and the link to catastrophe theory (Thom-Mather) | — | △ | A pointer exists in `02.14.01-wave-front-set-of-a-distribution` (microlocal analysis chapter) but no dedicated symplectic-side unit. **Gap.** |
| 6 / Lagrangian cobordism (Arnol'd's definition, cobordism groups in low dim) | — | ✗ | **Gap.** Pure-Arnol'd topic; not in Cannas, not in Arnold-Mech. |
| 6 / Legendrian cobordism | — | ✗ | **Gap.** |
| 7 / Eliashberg-Gromov $C^0$-rigidity of $\mathrm{Symp}$ | — | ✗ | **Gap (medium priority).** Mentioned in passing in `05.07.01-non-squeezing` but the rigidity theorem itself ($\mathrm{Symp}(M)$ is $C^0$-closed in $\mathrm{Diff}(M)$) is not a unit. |
| 7 / Eliashberg overtwisted vs tight contact 3-manifolds | `05.10.04-contact-topology-survey` | △ | Pointer-level. The dichotomy is named but not developed; the overtwisted disk and the $h$-principle are not isolated. |
| 7 / Arnol'd conjecture, Floer homology, non-squeezing, pseudoholomorphic curves | `05.08.01-arnold-conjecture`; `05.08.02-floer-homology`; `05.07.01-non-squeezing`; `05.06.02-pseudoholomorphic-curve` | ✓ | Covered (templated but topic-present). |
| 8 / Gromov-Witten invariants, quantum cohomology, mirror symmetry (2nd ed. appendix) | — | △ | Pointer in `05.08.02-floer-homology` Master; quantum cohomology / Gromov-Witten as such belong to algebraic-geometry chapter `06.*`. **Cross-link rather than duplicate.** |

### Part II — Geometric Quantization (Kirillov)

| Kirillov §  | Topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|---|
| K1 / Orbit method overview, prequantisation, Souriau-Kostant line bundle | `05.11.02-prequantisation-spin-coadjoint` | △ | One worked example exists ($\mathrm{SU}(2)$ orbit on $S^2$); the *general* prequantisation theorem (integrality condition $[\omega/2\pi] \in H^2(M, \mathbb{Z})$, existence of prequantum line bundle) is not its own unit. **Gap.** |
| K2 / Polarisation (real / complex / Kähler), half-densities, metaplectic correction | — | ✗ | **Gap (high priority).** The technical heart of geometric quantisation; entirely missing. |
| K3 / Character formula via orbit method, $\chi_\pi(\exp X) = \int_{\mathcal{O}_\pi} e^{i\langle \xi, X \rangle}\, d\beta(\xi)$ | — | ✗ | **Gap.** |
| K4 / Worked examples: $\mathrm{SU}(2)$ full classification, Heisenberg / Schrödinger representation, nilpotent Lie groups | `05.11.02` ($\mathrm{SU}(2)$ only) | △ | Heisenberg and nilpotent cases missing. **Gap.** |
| K5 / Reduction-quantisation commutation (Guillemin-Sternberg, $[Q, R] = 0$) | — | ✗ | **Gap.** |

### Part III — Integrable Systems (Dubrovin-Krichever-Novikov)

| DKN §  | Topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|---|
| D1 / KdV as integrable Hamiltonian PDE, Lax pair, infinite conservation laws | — | ✗ | **Gap.** Codex's `05.09.*` covers finite-dim integrable systems (KAM regime); KdV and infinite-dim integrability are absent. |
| D1 / Finite-gap integration, spectral curve, Baker-Akhiezer functions, theta-function solutions | — | ✗ | **Gap (Dubrovin-distinctive).** No coverage. |
| D2 / KP hierarchy, Sato Grassmannian, $\tau$-functions | — | ✗ | **Gap.** |
| D3 / Hamiltonian structures on loop groups, Drinfeld-Sokolov | — | ✗ | **Gap.** |

### Part IV — Nonholonomic Dynamical Systems (Vershik-Gershkovich)

| VG §  | Topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|---|
| V1 / Distributions on manifolds, Frobenius integrability, bracket-generating | — | △ | Frobenius theorem is in `03-differential-geometry/` (general DG chapter) but not anchored to the nonholonomic / sub-Riemannian context. **Cross-link sufficient if we add the SR unit.** |
| V2 / Sub-Riemannian / Carnot-Carathéodory metric structure | — | ✗ | **Gap (high priority — entire missing topic).** |
| V3 / Ball-Box theorem, Hausdorff dimension of SR balls | — | ✗ | **Gap.** |
| V4 / Pontryagin maximum principle, normal vs abnormal extremals, Montgomery example | — | ✗ | **Gap.** |
| V4 / Worked nonholonomic mechanics: rolling sphere, ice skate, parking problem | — | ✗ | **Gap.** Standard introductory examples; expository ones are easy to write. |

### Aggregate coverage estimate

- **Part I (Arnol'd-Givental, ~140 pp.):** ~65% topic-coverage. The
  symplectic-mechanics core (Chs. 2-3, Chs. 7-8 topology pointers) is
  well-covered by the Cannas / Arnold-Mech batches. The **distinctive
  Arnol'd content** — Lagrangian Grassmannian / universal Maslov,
  Lagrangian and Legendrian singularities (Ch. 5), Lagrangian /
  Legendrian cobordism (Ch. 6), the invariants hierarchy, Legendrian
  theory in contact — is **0% to 20% covered**.
- **Part II (Kirillov, ~80 pp.):** ~15% covered. `05.11.02` is a single
  worked example; the orbit-method machinery (polarisations, half-densities,
  character formula, multiple-example coverage) is absent.
- **Part III (Dubrovin-Krichever-Novikov, ~50 pp.):** ~5% covered. KdV
  / KP / finite-gap / loop groups are absent.
- **Part IV (Vershik-Gershkovich, ~50 pp.):** ~10% covered (Frobenius
  exists in DG chapter; no SR / CC / nonholonomic content).

**Composite:** ~30-35% across the volume. The bulk of the missing
content is in three concentrated blocks: (a) Lagrangian / Legendrian
singularities and cobordism (Arnol'd-Givental Ch. 5-6, ~5-6 units worth);
(b) orbit-method geometric quantisation (Kirillov, ~3-4 units worth);
(c) algebro-geometric integrability and sub-Riemannian geometry
(Dubrovin and Vershik-Gershkovich, ~4-5 units worth).

The volume's *shared* content (linear / manifold / Hamiltonian /
moment-map symplectic geometry) is owned by the Cannas plan and is
already either covered or batched into the Cannas priority-1 punch-list.
**This Arnold-Dubrovin plan does not duplicate Cannas items.**

---

## §3 Gap punch-list (EMS-distinctive units to write, priority-ordered)

The Codex symplectic chapter is now 65 units (post-Cannas batch). All
new items below land in `content/05-symplectic/` in either existing
chapters (`11-geometric-quantization`) or in **two new chapters** the
EMS volume motivates: `05.12-singularities/` (Lagrangian / Legendrian
singularities and cobordism — Arnol'd-Givental Ch. 5-6) and
`05.13-nonholonomic/` (sub-Riemannian / Carnot-Carathéodory geometry —
Vershik-Gershkovich Part IV). Algebro-geometric integrability units land
in the existing `05.09-integrable/` block at the `.08-.10` range (which
is free; the highest occupied slot is `.07`).

### Priority 1 — load-bearing distinctive content (orbit method + Lagrangian singularities)

These items capture the EMS volume's **uniquely-Arnol'd-Kirillov**
content that no other FT book covers and no existing Codex unit
addresses.

1. **`05.12.01` Lagrangian Grassmannian and the universal Maslov class.**
   Arnol'd-Givental Ch. 1 anchor; Arnol'd 1967 *Characteristic class
   entering in quantization conditions* (Funct. Anal. Appl. 1) as
   originator-text. Three-tier; ~1800 words. Build the Lagrangian
   Grassmannian $\Lambda(n) = U(n)/O(n)$, compute $\pi_1(\Lambda(n)) = \mathbb{Z}$
   via the $\det^2 : U(n) \to S^1$ map, define the universal Maslov class
   as the pull-back of the generator of $H^1(S^1)$. Bridge to the
   existing `05.08.03-maslov-index` (Floer / loop-version) and
   `05.08.04-conley-zehnder-index`. **Foundation for items 2 and 3.**
   Suggested reviewer: external symplectic-topology reviewer.

2. **`05.12.02` Lagrangian singularities and the ADE classification of
   caustics.** Arnol'd-Givental Ch. 5 anchor; Arnol'd 1972
   *Normal forms for functions near degenerate critical points*
   (Russian Math. Surveys 29) as originator-text; Arnol'd 1976
   *Wave front evolution and equivariant Morse lemma* as second
   originator. Three-tier; ~2200 words. The generic singularities of
   the projection $\pi : L \hookrightarrow T^*M \to M$ at $L$
   Lagrangian are classified up to symplectic equivalence by simple
   germs of functions $\mathbb{R}^n \to \mathbb{R}$ — exactly Arnol'd's
   ADE list $A_k, D_k, E_6, E_7, E_8$. Caustics in geometrical optics
   (fold $A_2$, cusp $A_3$, swallowtail $A_4$, butterfly $A_5$) as
   physical instances. Master tier sketches the proof via the
   stability-of-singularities lemma. **Arnol'd's signature theorem;
   originator-prose mandatory.** Suggested reviewer: external
   singularity-theory reviewer.

3. **`05.12.03` Legendrian singularities and wave-front evolution.**
   Arnol'd-Givental Ch. 5 anchor (continued from item 2); Arnol'd
   1976 originator. Three-tier; ~1800 words. The contact analogue
   of item 2: generic singularities of the front projection
   $\pi : L \hookrightarrow PT^*M \to M$ for $L$ Legendrian in the
   projectivised cotangent bundle, classified by the same ADE families
   but with the *swallowtail* / *cuspidal-edge* / *Whitney-umbrella*
   wave-front singularities as physical examples. Bridge to optics
   (Maxwell's caustics) and to the microlocal analysis chapter
   (`02.14.*`). Suggested reviewer: external optics / singularity-theory
   reviewer.

4. **`05.11.01` Prequantum line bundle and the integrality condition.**
   Kirillov Part II Ch. 1 anchor; Souriau 1970 and Kostant 1970 as
   joint originator-texts (already cited in `05.11.02`). Three-tier;
   ~1700 words. The general prequantisation theorem: a symplectic
   manifold $(M, \omega)$ admits a prequantum Hermitian line bundle
   $(L, \nabla)$ with curvature $\omega$ iff $[\omega/2\pi] \in
   H^2(M, \mathbb{Z})$. The integrality condition is the *only*
   obstruction; explicit construction via Čech cocycles when satisfied.
   Worked example: $S^2$ with area form $r\omega_{\mathrm{vol}}$
   prequantisable iff $r \in \mathbb{Z}$. **Foundational; promote
   `05.11.02` from one-off to instance of a general framework.**
   Suggested reviewer: external geometric-quantisation reviewer.

5. **`05.11.03` Polarisation, half-densities, and metaplectic correction.**
   Kirillov Part II Ch. 2 anchor; Blattner-Kostant-Sternberg
   originator-texts (mid-1970s sequence). Three-tier; ~2000 words. A
   prequantum line bundle is too big to be the quantum Hilbert space;
   we cut it down by choosing a *polarisation* (Lagrangian distribution
   on $M$) and taking polarised sections. Three flavours: real
   (vertical polarisation on $T^*X$ gives Schrödinger), complex / Kähler
   (gives Bargmann-Fock), mixed. Half-densities and the metaplectic
   correction make the choice independent of polarisation. **The
   technical heart of geometric quantisation.** Worked example:
   Bargmann-Fock for $T^*\mathbb{R}^n$ with the complex polarisation
   $\frac{\partial}{\partial \bar z}$. Suggested reviewer: external
   geometric-quantisation reviewer.

6. **`05.11.04` Kirillov character formula and orbit-method
   computations.** Kirillov Part II Ch. 3-4 anchor; Kirillov 1962
   *Unitary representations of nilpotent Lie groups* (Russian Math.
   Surveys 17) as originator-text. Three-tier; ~2000 words.
   $\chi_\pi(\exp X) = \int_{\mathcal{O}_\pi} e^{2\pi i \langle \xi, X \rangle}
   \beta(\xi)$ where $\beta$ is the canonical Liouville measure on the
   orbit and the integral is in the distributional sense. Connects to
   Duistermaat-Heckman as a special case. Worked examples: Heisenberg
   group (Schrödinger / Stone-von Neumann via the affine orbit), full
   $\mathrm{SU}(2)$ irreducible classification by integer-spin orbits.
   Suggested reviewer: external orbit-method / representation-theory
   reviewer.

### Priority 2 — Arnol'd-Givental extension content and sub-Riemannian block

These complete the symplectic-topology and contact picture and open the
sub-Riemannian chapter.

7. **`05.12.04` Lagrangian and Legendrian cobordism.** Arnol'd-Givental
   Ch. 6 anchor; Arnol'd 1980 *Lagrange and Legendre cobordisms*
   (Funct. Anal. Appl. 14, two-part paper) as originator-text.
   Three-tier; ~1700 words. Two Lagrangian submanifolds of $T^*M$ are
   Lagrangian-cobordant if there is a Lagrangian in $T^*(M \times [0,1])$
   restricting to each end; the Lagrangian cobordism group of $M$ is
   computed by Arnol'd in low dimension via the universal Maslov class.
   Legendrian-cobordism analogue. Suggested reviewer: external
   symplectic-topology reviewer.

8. **`05.10.05` Legendrian submanifold and contact Hamiltonian
   formalism.** Arnol'd-Givental Ch. 4 anchor; Eliashberg-Gromov
   1991 *Convex symplectic manifolds* for the contact-Hamiltonian
   formalism. Three-tier; ~1500 words. A Legendrian $L \subset M^{2n+1}$
   is a maximal-dimensional submanifold (dim $= n$) integral to the
   contact distribution $\xi$. Generic Legendrians, the
   contact-Hamiltonian vector field $X_H$ generated by a function
   $H : M \to \mathbb{R}$ (the contact-form variant of $X_H$). Bridge
   from `05.10.01-contact-manifold`. Suggested reviewer: external
   contact-geometry reviewer.

9. **`05.07.03` Symplectic invariants hierarchy: capacities, Hofer
   norm, displacement energy.** Arnol'd-Givental Ch. 3-7 anchor;
   Hofer-Zehnder 1994 *Symplectic Invariants and Hamiltonian Dynamics*
   as primary modern reference. Three-tier; ~1800 words. Capacities
   $c$ (Gromov width, Ekeland-Hofer, Hofer-Zehnder); Hofer norm on
   $\mathrm{Ham}(M)$; displacement energy $e(A) = \inf \{\|\phi\|_H :
   \phi(A) \cap A = \emptyset\}$; the inequalities organising them.
   Bridge from `05.07.01-non-squeezing` and `05.07.02-symplectic-
   capacity`. Suggested reviewer: external symplectic-topology
   reviewer.

10. **`05.13.01` Distributions and bracket-generating condition (Chow-
    Rashevsky).** Vershik-Gershkovich Part IV §1-2 anchor;
    Chow 1939, Rashevsky 1938 originators. Three-tier; ~1500 words.
    A distribution $D \subset TM$ is bracket-generating if iterated
    Lie brackets $[D, [D, \ldots, [D, D]]]$ span $TM$ at every point;
    the Chow-Rashevsky theorem then says any two points are connected
    by a $D$-horizontal path. Frobenius vs nonintegrable distributions.
    Cross-links from `03-differential-geometry/` Frobenius unit.
    Suggested reviewer: external sub-Riemannian / control-theory
    reviewer.

11. **`05.13.02` Sub-Riemannian / Carnot-Carathéodory metric and the
    Ball-Box theorem.** Vershik-Gershkovich Part IV §3-4 anchor;
    Mitchell 1985 *On Carnot-Carathéodory metrics* and Montgomery
    2002 *A Tour of Subriemannian Geometries* as modern references.
    Three-tier; ~1800 words. Given a bracket-generating distribution
    $D$ and a metric $g_D$ on it, the SR distance $d_{\mathrm{CC}}(p,
    q) = \inf \{\mathrm{length}(\gamma) : \gamma \text{ horizontal}\}$.
    Ball-Box theorem: $\mathrm{Ball}(p, r)$ is anisotropic of size
    $r^{w_1} \times \cdots \times r^{w_n}$ with weights $w_i$ given by
    the step in the bracket-generating filtration. Hausdorff dim
    $= \sum w_i$ exceeds topological dim. Suggested reviewer: external
    sub-Riemannian reviewer.

12. **`05.13.03` Nonholonomic mechanics: rolling sphere, ice skate, and
    Pontryagin's maximum principle.** Vershik-Gershkovich Part IV §5
    anchor; Pontryagin 1962 *Mathematical Theory of Optimal Processes*
    originator. Three-tier; ~1500 words. Variational problems with
    non-integrable constraints; PMP as the SR-geodesic equation;
    normal extremals (Hamiltonian on $T^*M$) vs abnormal extremals
    (Montgomery 1994 counter-example). Worked: rolling sphere on a
    plane (5D contact-like configuration manifold,
    bracket-generating-rank-2 distribution), ice skate / Heisenberg-
    group model, parallel-parking problem. Suggested reviewer: external
    control-theory reviewer.

### Priority 3 — Dubrovin Part III: algebro-geometric integrability

These items capture the **Dubrovin-Krichever-Novikov** Part III content
that the volume's title-page attribution refers to. They are larger
units (closer to 2000 words) because the theta-function machinery is
technical, and they cross-link heavily into the algebraic-geometry and
Riemann-surface chapters.

13. **`05.09.08` KdV as integrable Hamiltonian PDE, Lax pair, infinite
    conservation laws.** Dubrovin-Krichever-Novikov §1 anchor; Lax 1968
    *Integrals of nonlinear equations of evolution* originator;
    Gardner-Greene-Kruskal-Miura 1967 *Method for solving the KdV
    equation* originator. Three-tier; ~1800 words. KdV $u_t = 6uu_x -
    u_{xxx}$ written as $L_t = [L, A]$ with $L = -\partial^2 + u$;
    isospectral evolution; infinite tower of polynomial conserved
    densities. Bridge into `05.09.*` integrable block, complements
    KAM (which is finite-dim regime) with the infinite-dim integrable
    side. Suggested reviewer: external integrable-systems reviewer.

14. **`05.09.09` Finite-gap integration and theta-function solutions.**
    Dubrovin-Krichever-Novikov §2 anchor; Dubrovin-Matveev-Novikov 1976
    *Nonlinear equations of Korteweg-de Vries type, finite-zone linear
    operators, and Abelian varieties* (Russian Math. Surveys 31) as
    originator-text. Three-tier; ~2000 words. Periodic / quasi-periodic
    KdV solutions are linearised on the Jacobian of a hyperelliptic
    Riemann surface (the *spectral curve* of the Lax operator);
    explicit Baker-Akhiezer / Its-Matveev theta-function formula
    $u(x, t) = -2 \partial_x^2 \log \theta(\mathbf{U} x + \mathbf{V} t +
    \mathbf{c}) + \text{const}$. Cross-links to Forster /
    Griffiths-Harris (Riemann surfaces) and Mumford (theta functions).
    **Dubrovin's signature contribution.** Suggested reviewer: external
    algebraic-geometry / integrable-systems reviewer.

15. **`05.09.10` KP hierarchy, Sato Grassmannian, $\tau$-functions.**
    Dubrovin-Krichever-Novikov §3 anchor; Sato 1981 *Soliton equations
    as dynamical systems on infinite-dimensional Grassmann manifolds*
    (RIMS Kokyuroku 439) as originator-text. Three-tier; ~1800 words.
    The Kadomtsev-Petviashvili (KP) equation as a 2-dim generalisation
    of KdV; the entire KP hierarchy parametrised by points of the
    Sato Grassmannian $\mathrm{Gr}(\infty / 2)$; $\tau$-function as
    the determinantal coordinate. Bridge to conformal field theory
    (vertex operators). Suggested reviewer: external integrable /
    CFT reviewer.

### Priority 4 — Survey / pointer items, optional

16. **`05.07.04` Eliashberg-Gromov $C^0$-rigidity of $\mathrm{Symp}$.**
    Arnol'd-Givental Ch. 7 anchor; Eliashberg 1981 + Gromov 1985 as
    originators. Master-only, ~1200 words. The symplectomorphism group
    is $C^0$-closed in the diffeomorphism group: a $C^0$-limit of
    symplectomorphisms is a symplectomorphism. Connects to non-squeezing
    via Hofer-Zehnder capacity. Suggested reviewer: external symplectic-
    topology reviewer.

17. **`05.10.06` Eliashberg tight-vs-overtwisted dichotomy in 3D contact
    geometry.** Arnol'd-Givental Ch. 7 anchor; Eliashberg 1989
    *Classification of overtwisted contact structures on 3-manifolds*
    (Invent. Math. 98) originator. Master-only, ~1500 words. The
    overtwisted disk; the $h$-principle on 3-manifolds for overtwisted
    contact structures; the very different rigidity of tight contact
    structures. Promotes the existing `05.10.04-contact-topology-survey`
    pointer to a real treatment. Suggested reviewer: external contact-
    topology reviewer.

---

## §4 Notes on sourcing, scope, and execution

**EMS Vol. 4 attribution.** The book's cover lists Arnol'd, Dubrovin,
Givental, Kirillov, Novikov, Vershik, Gershkovich, Krichever as
contributing authors; the FT booklist line shortens this to "Arnol'd,
Dubrovin." Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, the
plan-slug `arnold-dubrovin-symplectic` is acceptable but originator
attribution per unit must cite the specific contributing author of the
EMS part in question (Arnol'd-Givental for items 1-3, 7-9, 16-17;
Kirillov for items 4-6; Dubrovin-Krichever-Novikov for items 13-15;
Vershik-Gershkovich for items 10-12).

**Volume edition.** Cite the 2001 second English edition (Springer,
ISBN 3-540-62635-2). The 1990 first edition (ISBN 3-540-17003-X) has
the same chapter structure but lacks the Floer-Gromov appendix (Ch. 8)
and the post-1985 surveys.

**No double-counting with Cannas or Arnold-Mech.** Items in EMS Vol. 4
Chs. 2-3 (cotangent bundle, Hamiltonian formalism, moment map,
reduction, Delzant, Duistermaat-Heckman) are owned by the Cannas plan
priority-1 batch and are not listed here. Items in EMS Vol. 4 Ch. 3
plus Arnold-Mech Appendix 8 (KAM, action-angle, Hamilton-Jacobi PDE,
geodesic flow as Hamiltonian) are owned by the Arnold-Mech plan and
are not listed here. **17 punch-list items are EMS-distinctive.**

**Total estimated production cost.** 17 units at an average ~3 hours
per unit (closer to 3.5 h for the singularity / Dubrovin items, closer
to 2.5 h for the Master-only priority-4 items) is ~50-55 hours of
focused production. Split into three parallel sub-batches:

- Sub-batch A (singularities + orbit method): items 1, 2, 3, 4, 5, 6
  — ~18 hours.
- Sub-batch B (sub-Riemannian + contact / topology extensions):
  items 7, 8, 9, 10, 11, 12, 16, 17 — ~22 hours.
- Sub-batch C (Dubrovin algebro-geometric integrability): items 13,
  14, 15 — ~14 hours.

Sub-batch C can run independently of A and B. Sub-batches A and B share
the existing chapter-12 / chapter-13 reservations (no collision).

**Originator-prose targets.** Per `docs/plans/FASTTRACK_EQUIVALENCE_
PLAN.md` §10, the following originator citations are mandatory:

- Items 1-3, 7 (Lagrangian Grassmannian, Lagrangian / Legendrian
  singularities and cobordism): Arnol'd 1967, 1972, 1976, 1980 (papers
  in *Funct. Anal. Appl.*, *Russian Math. Surveys*).
- Items 4-6 (orbit method): Kirillov 1962 (*Russian Math. Surveys* 17);
  Souriau 1970 *Structure des Systèmes Dynamiques*; Kostant 1970
  *Quantization and Unitary Representations* (LNM 170);
  Blattner-Kostant-Sternberg 1976 sequence.
- Items 13-15 (algebro-geometric integrability): Lax 1968
  (*Comm. Pure Appl. Math.* 21); Gardner-Greene-Kruskal-Miura 1967
  (*Phys. Rev. Lett.* 19); Dubrovin-Matveev-Novikov 1976
  (*Russian Math. Surveys* 31); Sato 1981 (*RIMS Kokyuroku* 439).
- Items 10-12 (nonholonomic / sub-Riemannian): Chow 1939
  (*Math. Ann.* 117); Rashevsky 1938; Pontryagin 1962 *Mathematical
  Theory of Optimal Processes*; Mitchell 1985 (*J. Differential Geom.*
  21); Montgomery 1994 abnormal-extremal counterexample.
- Items 8, 9 (Legendrian / capacities): Eliashberg 1989 (*Invent. Math.*
  98); Hofer-Zehnder 1994 *Symplectic Invariants and Hamiltonian
  Dynamics*; Gromov 1985 (*Invent. Math.* 82).
- Item 16 (Eliashberg-Gromov rigidity): Eliashberg 1981
  (*Funct. Anal. Appl.* 15); Gromov 1985 (*Invent. Math.* 82).
- Item 17 (overtwisted / tight): Eliashberg 1989, 1992.

**Notation crosswalk.** Arnol'd-Givental use $\omega$ for symplectic
form, $\alpha$ for contact form, $\mathcal{O}$ for coadjoint orbit
(matching Codex). $\Lambda(n)$ for Lagrangian Grassmannian, $\mu$ for
Maslov class — record in `05.12.01` §Notation. Kirillov uses $K(G)$ for
the orbit space $\mathfrak{g}^*/G$ (the "K-space"); $\hat G$ for the
unitary dual; explicit polarisation notation $\mathfrak{p} \subset
\mathfrak{g}^*$ — record in `05.11.03` §Notation. Dubrovin uses
$\theta(\mathbf{z}|\tau)$ for the multi-dim theta-function with period
matrix $\tau$; spectral curve $\Gamma$; Baker-Akhiezer function
$\psi(P, x, t)$ — record in `05.09.09` §Notation. Vershik-Gershkovich
use $D$ or $\mathcal{H}$ for the horizontal distribution,
$d_{\mathrm{CC}}$ for the Carnot-Carathéodory metric — record in
`05.13.01` §Notation. A separate `notation/arnold-dubrovin.md`
crosswalk file is *not* required; per-unit Master-section
§Notation paragraphs suffice (per Cannas precedent).

**DAG edges to add.** New prerequisites arrows for the punch-list:

- `05.12.01` (Lagrangian Grassmannian) ← {`05.12.02` Lag singularities,
  `05.12.03` Leg singularities, `05.12.04` cobordism, `05.08.03` Maslov
  index}. Successor of `05.05.01` Lagrangian submanifold.
- `05.12.02` (Lag singularities) ← `05.12.03` (Leg singularities) ←
  `05.12.04` (cobordism).
- `05.11.01` (prequantum line bundle) ← `05.11.02` (existing $\mathrm{SU}(2)$
  example, retro-frame it as instance), `05.11.03` (polarisation),
  `05.11.04` (character formula). Promote `05.11.02` from standalone
  to instance.
- `05.11.03` ← `05.11.04`.
- `05.10.05` (Legendrian) successor of `05.10.01` contact manifold.
- `05.07.03` (capacities hierarchy) successor of `05.07.01` non-squeezing
  and `05.07.02` symplectic capacity.
- `05.13.01` (distributions / Chow-Rashevsky) ← `05.13.02` (CC metric)
  ← `05.13.03` (nonholonomic mechanics). External prereq from
  Frobenius unit in `03-differential-geometry/`.
- `05.09.08` (KdV / Lax) ← `05.09.09` (finite-gap / theta) ← `05.09.10`
  (KP / Sato). External prereqs from `21-number-theory/` Riemann
  surface units and `06-algebraic-geometry/` theta-function units
  (cross-link).

---

## §5 What this plan does NOT cover

- Cannas-priority items (Moser, Weinstein, Darboux, AGS convexity,
  Delzant, Duistermaat-Heckman, contact basics, etc.). Owned by
  `plans/fasttrack/cannas-da-silva-symplectic.md`.
- Arnold-Mech-priority items (KAM, Hamilton-Jacobi PDE, geodesic flow,
  Hamilton's principle of least action, adiabatic invariants, etc.).
  Owned by `plans/fasttrack/arnold-mathematical-methods.md`.
- McDuff-Salamon territory: pseudoholomorphic moduli spaces, Gromov
  compactness with bubbling, Floer chain complex construction,
  Hofer geometry in depth, symplectic homology. Owned by the
  McDuff-Salamon audit (not yet written; on Tier-β list).
- Quantum cohomology and Gromov-Witten invariants. Sit in
  `06-algebraic-geometry/` and the planned mirror-symmetry chapter,
  not in `05-symplectic/`. Cross-link only.
- Full $K$-theoretic / equivariant cohomology localisation
  (Atiyah-Bott / Berline-Vergne). Owned by Atiyah-Yang-Mills audit
  (FT 3.20).
- The Vershik-Gershkovich Part IV §6 (abnormal extremal classification
  beyond Montgomery's example). Optional follow-up to item 12;
  not in priority-1-4.
- Lefschetz fibrations on 4-manifolds (Donaldson-Auroux). Sits on
  Donaldson-Floer audit boundary (FT 3.06).
- Full exercise pack. The EMS volume has **no formal exercises** (it
  is a survey, not a textbook); problem-pack production is deferred
  pending the Cannas-exercise-pack pass landing first as the
  symplectic-chapter pattern.

---

## §6 Acceptance criteria for FT equivalence (Arnol'd-Dubrovin EMS Vol. 4)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- ≥95% of Arnol'd-Givental Part I named theorems / results map to
  Babel Bible units (currently ~65%; after priority-1 items 1-3 and
  priority-2 items 7-9 → ~92%; after priority-3 → unchanged for Part
  I; after priority-4 → ~96%).
- ≥90% of Kirillov Part II topics covered (currently ~15%; after
  priority-1 items 4-6 → ~85%).
- ≥80% of Dubrovin Part III topics covered (currently ~5%; after
  priority-3 items 13-15 → ~90%).
- ≥80% of Vershik-Gershkovich Part IV topics covered (currently
  ~10%; after priority-2 items 10-12 → ~85%).
- All ADE Lagrangian / Legendrian singularity classes are stated and
  the caustic / wavefront physical-instance dictionary is in place
  (closed by items 2, 3).
- The orbit-method machinery (prequantum + polarisation + half-density
  + character formula) is a complete pedagogical arc, not just a
  worked example (closed by items 4-6 + existing `05.11.02`).
- A dedicated sub-Riemannian / Carnot-Carathéodory mini-chapter
  exists (`05.13-nonholonomic/`, closed by items 10-12).
- Notation decisions recorded in unit §Notation paragraphs (per §4
  above); no separate notation file required.
- Pass-W weaving connects the new chapter-12 / chapter-13 units to
  the existing `05.05-lagrangian/`, `05.07-gromov/`, `05.08-floer/`,
  `05.10-contact/`, and `05.11-geometric-quantization/` blocks.

The 6 priority-1 items (1-6) close the orbit-method and signature-
Arnol'd-content gaps. The 6 priority-2 items (7-12) close the
sub-Riemannian, Legendrian, and capacity-hierarchy gaps. The 3
priority-3 items (13-15) close the Dubrovin algebro-geometric
integrability gap. The 2 priority-4 items (16-17) are deepenings on
existing units; they bring topic-level coverage from ~92% to ~96%.

**Honest scope.** The EMS Vol. 4 is the densest single text in the
Fast Track symplectic strand and the **highest-leverage book the
symplectic chapter has not yet been audited against**. The Cannas
batch (already shipped) covers the symplectic-mechanics core; the
Arnold-Mech batch covers the variational and KAM core; this
Arnold-Dubrovin batch covers everything else of importance — Lagrangian
singularities, geometric quantisation, algebro-geometric integrability,
sub-Riemannian geometry. After this audit's punch-list ships, the
symplectic chapter graduates from "broad coverage of standard
textbook material" to "broad coverage of the entire research
landscape Arnol'd-Givental-Kirillov-Dubrovin-Vershik survey."

**Composite batch recommendation.** Run sub-batches A and B together
(priority-1 + priority-2 + priority-4 = 14 units, ~40 hours, opens
two new chapters); land sub-batch C (priority-3 = 3 units, ~14 hours)
as a separate Dubrovin-focused batch that can be coordinated with
the Forster *Lectures on Riemann Surfaces* (FT 1.07) and
Griffiths-Harris (FT 3.22) plans to leverage shared theta-function
infrastructure. This composite execution path closes the entire
symplectic-strand FT gap in ~55 hours of focused production.
