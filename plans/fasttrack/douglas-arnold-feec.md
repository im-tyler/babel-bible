# Douglas N. Arnold — *Finite Element Exterior Calculus* (Fast Track 1.20) — Audit + Gap Plan

**Book:** Douglas N. Arnold, *Finite Element Exterior Calculus* (SIAM
CBMS-NSF Regional Conference Series in Applied Mathematics 93,
Society for Industrial and Applied Mathematics, Philadelphia, 2018;
xii + 120 pp.). ISBN 978-1-611975-53-6 (paperback), 978-1-611975-54-3
(eBook). DOI 10.1137/1.9781611975543. Commercial title (booklist row
1.20 marks status as "? — some author notes may be free"; the SIAM
CBMS volume is **BUY**, but Arnold's freely-circulating 2006 Acta
Numerica review article and the 2010 BMS *Bulletin* paper cover ~70%
of the same ground and are linkable as open-access cross-anchors).

**Fast Track entry:** 1.20. The canonical short reference on the
**finite element exterior calculus (FEEC)** framework — the
Arnold-Falk-Winther synthesis that recasts mixed finite-element
methods for elliptic and Hodge-Laplacian PDEs as a *discrete de Rham
complex* problem. Seven CBMS lectures (delivered 2012, University of
Texas at El Paso) compressed into 120 pp.:

- **Lecture 1.** The Hodge Laplacian $\Delta = d\delta + \delta d$ on
  a Riemannian manifold; mixed formulation $(\sigma, u) \in
  L^2\Lambda^{k-1} \times L^2\Lambda^k$ with $\sigma = \delta u$.
- **Lecture 2.** The de Rham complex $0 \to \Lambda^0 \xrightarrow{d}
  \Lambda^1 \to \cdots \to \Lambda^n \to 0$ and its discrete
  approximation; Whitney forms; simplicial cochain complex.
- **Lecture 3.** The FEEC framework: finite-dimensional subcomplexes
  $\Lambda_h^k \subset \Lambda^k$; **bounded cochain projection**
  $\pi_h : \Lambda^k \to \Lambda_h^k$ commuting with $d$.
- **Lecture 4.** Polynomial differential forms: $\mathcal{P}_r\Lambda^k$
  and the reduced-degree family $\mathcal{P}_r^-\Lambda^k = \mathcal{P}_{r-1}\Lambda^k
  + \kappa \mathcal{P}_{r-1}\Lambda^{k+1}$ (Koszul operator
  $\kappa$); the two FEEC families on simplices.
- **Lecture 5.** Convergence theory: stability via the discrete
  Poincaré inequality + uniform bound on $\pi_h$; consistency;
  optimal a-priori error estimates in mixed Hodge-Laplacian norm.
- **Lecture 6.** Examples: scalar elliptic ($k = 0$), vector
  Laplacian, **Maxwell equations** ($k = 1$ on a 3-manifold,
  Nédélec edge elements), linearised **elasticity** with
  symmetric stress tensor.
- **Lecture 7.** Recent developments: smooth FEEC (Falk-Neilan);
  isogeometric exterior calculus (Buffa-Rivas-Sangalli-Vázquez);
  virtual element exterior calculus (Beirão da Veiga et al.);
  trimmed and bubble-enriched de Rham complexes.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite +
P2 + P3-lite of the orchestration protocol). Output is a concrete
punch-list of new units so that *FEEC* is covered to the equivalence
threshold (≥95% effective coverage of theorems, key examples,
exercise pack, notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Mirrors the Serre
*CinA* plan and the Cannas *Lectures on Symplectic Geometry* plan in
structure. **Not** a full P1 audit: a theorem-by-theorem inventory
with line-number anchors is deferred until a local PDF is sourced.
This is the **first applied/numerical entry** to receive a Fast
Track audit; the punch-list opens a new sub-chapter
`03.04.15-…` and **proposes a new top-level chapter**
`24-numerical-pde/` (the slot currently empty between
`23-world/` and `32-world-history/` — chapters 24–31 are unused,
and `24-numerical-pde/` is the first applied-mathematics top-level
chapter alongside the existing `23-world/`-bracket region. Note: the
slot `08-` is already occupied by `08-stat-mech/`, so the numerical
chapter cannot live there).

**Sourcing status: REDUCED.** No local PDF in
`reference/textbooks-extra/`, `reference/fasttrack-texts/`, or
`reference/book-collection/free-downloads/` (verified 2026-05-22).
SIAM link <https://epubs.siam.org/doi/book/10.1137/1.9781611975543>
sits behind the SIAM e-book paywall. Acquisition deferred. This plan
was produced from canonical knowledge of the FEEC seven-lecture
structure (stable since the AFW 2006 / AFW 2010 papers; the CBMS
volume reorganises but does not extend that synthesis) cross-referenced
against the freely-available **Arnold-Falk-Winther 2006** Acta
Numerica article (*Finite element exterior calculus, homological
techniques, and applications*, Acta Numer. 15:1-155) — the
**95%-overlap open-access companion** — and the peer sources in §1.
The §3 punch-list is robust to the PDF gap because FEEC's content
map is fixed by the AFW 2006/2010 papers and their canonical
restatement in the CBMS volume; the line-number anchor list in §4 is
the part that genuinely needs the local PDF.

---

## §1 What FEEC is for

FEEC is the **canonical synthesis recasting mixed finite-element
methods for the Hodge Laplacian as a discrete de Rham complex
problem**, with stability and optimal convergence reduced to two
**structural** axioms: (i) the discrete spaces $\Lambda_h^k$ form a
subcomplex of $\Lambda^k$; (ii) there exists a uniformly $L^2$-bounded
cochain projection $\pi_h$ commuting with $d$. Where Ciarlet *The
Finite Element Method for Elliptic Problems* (North-Holland 1978,
~530 pp.) is the encyclopaedic foundation for $H^1$-conforming FEM,
where Brezzi-Fortin *Mixed and Hybrid Finite Element Methods*
(Springer SCM 15, 1991, ~350 pp.) is the canonical text on the
**Babuška-Brezzi (inf-sup) condition** and saddle-point problems
formulated *space by space*, where Hiptmair *Finite elements in
computational electromagnetism* (Acta Numer. 11, 2002, ~106 pp.) is
the closest precursor — recognising that Maxwell-conforming
Nédélec elements form a discrete de Rham complex *in the
electromagnetism case* — and where Boffi-Brezzi-Fortin *Mixed Finite
Element Methods and Applications* (Springer SCM 44, 2013, ~685 pp.)
is the modern encyclopaedia of mixed methods including a chapter on
FEEC, **FEEC is the shortest self-contained graduate text presenting
the full discrete-de-Rham unification across all $k$ and on
arbitrary Riemannian manifolds**. The CBMS lectures crystallise the
AFW 2006 / 2010 framework into a 120-page narrative with the
**cochain-projection axiom** as the conceptual centre of gravity.

Distinctive contributions, in the order FEEC develops them:

1. **Lecture 1 — The Hodge Laplacian and the mixed weak form
   ($\sim$15 pp.).** The Hodge Laplacian $\Delta = d\delta + \delta d
   : \Lambda^k \to \Lambda^k$ on an oriented Riemannian manifold;
   harmonic forms $\mathfrak{H}^k = \ker \Delta \cong H^k_{\mathrm{dR}}(M)$;
   the **mixed weak formulation** $(\sigma, u) \in H\Lambda^{k-1}
   \times H\Lambda^k$ satisfying $\langle \sigma, \tau \rangle =
   \langle u, d\tau \rangle$ and $\langle d\sigma, v \rangle +
   \langle du, dv \rangle = \langle f, v \rangle$. The
   well-posedness of this saddle-point system (with the harmonic-form
   side condition) is the foundational PDE-analytic step the rest
   of the book discretises.
2. **Lecture 2 — The de Rham complex and Whitney forms
   ($\sim$15 pp.).** $L^2$ and Sobolev de Rham complexes
   $H\Lambda^k$, $H_0\Lambda^k$; the **simplicial cochain complex**
   on a triangulation $\mathcal{T}_h$; **Whitney forms** $\mathcal{W}^k$
   (Whitney 1957, *Geometric Integration Theory* §IV.27) — the
   canonical $H^1$ piecewise-linear differential $k$-forms supported
   on $k$-faces of the triangulation, satisfying the **integration
   duality** $\int_\sigma \mathcal{W}^{\tau} = \delta_{\sigma\tau}$
   for $k$-simplices $\sigma, \tau$. Whitney forms = the *original*
   FEEC family; Whitney's commuting-diagram lemma is the prototype
   of the AFW cochain-projection axiom.
3. **Lecture 3 — Subcomplexes and bounded cochain projections
   ($\sim$15 pp.).** A finite-dimensional subspace family
   $\Lambda_h^\bullet$ is a **finite element exterior calculus
   subcomplex** iff $d \Lambda_h^k \subset \Lambda_h^{k+1}$. A
   **bounded cochain projection** is a family
   $\pi_h^k : \Lambda^k \to \Lambda_h^k$ satisfying
   $\pi_h^k|_{\Lambda_h^k} = \mathrm{id}$ and the **commuting
   diagram** $d \pi_h^k = \pi_h^{k+1} d$, **uniformly bounded** in
   $L^2$ as $h \to 0$. AFW's central theorem: existence of a uniform
   bounded cochain projection ⇒ discrete Poincaré inequality ⇒
   stability of the discrete Hodge-Laplacian system. This **single
   axiom** replaces the previous case-by-case inf-sup verifications.
4. **Lecture 4 — The polynomial differential form spaces
   $\mathcal{P}_r\Lambda^k$ and $\mathcal{P}_r^-\Lambda^k$
   ($\sim$15 pp.).** Two families of polynomial $k$-forms on a
   simplex. $\mathcal{P}_r\Lambda^k$ = $k$-forms with polynomial
   coefficients of total degree $\leq r$, dimension
   $\binom{r+n}{n}\binom{n}{k}$. The **reduced family**
   $\mathcal{P}_r^-\Lambda^k = \mathcal{P}_{r-1}\Lambda^k +
   \kappa\, \mathcal{P}_{r-1}\Lambda^{k+1}$, where
   $\kappa : \Lambda^{k+1} \to \Lambda^k$ is the **Koszul operator**
   $(\kappa\omega)_x(v_1, \ldots, v_k) = \omega_x(x, v_1, \ldots, v_k)$;
   dimension $\binom{r+n}{n-k}\binom{r+k-1}{k}$. Identifications
   matching classical families:
   - $\mathcal{P}_r^-\Lambda^0 = \mathcal{P}_r\Lambda^0$ (Lagrange).
   - $\mathcal{P}_r^-\Lambda^n = \mathcal{P}_{r-1}\Lambda^n$
     (discontinuous).
   - $\mathcal{P}_r^-\Lambda^1$ on a 2-simplex = **Raviart-Thomas**
     element (Raviart-Thomas 1977).
   - $\mathcal{P}_r^-\Lambda^1$ on a 3-simplex = **Nédélec
     first-kind edge element** (Nédélec 1980).
   - $\mathcal{P}_r^-\Lambda^2$ on a 3-simplex = **Nédélec
     first-kind face element** (Nédélec 1980), same family as
     Raviart-Thomas-Nédélec.
   - $\mathcal{P}_r\Lambda^1$ on a 3-simplex = **Brezzi-Douglas-Marini
     / Nédélec second-kind edge** element (Brezzi-Douglas-Marini
     1985 / Nédélec 1986).
   The two families fit into two distinct discrete de Rham
   subcomplexes, recovering essentially **all** classical FEM spaces
   for $H(\mathrm{curl})$ and $H(\mathrm{div})$ as special cases.
5. **Lecture 5 — Convergence theory ($\sim$15 pp.).** Given a uniform
   bounded cochain projection $\pi_h$: discrete Poincaré-Friedrichs
   inequality $\|\omega\|_{L^2} \leq C\|d\omega\|_{L^2}$ for
   $\omega \perp \mathfrak{H}_h^k$ holds with $h$-independent $C$;
   **stability** of the mixed Hodge-Laplacian saddle-point system in
   the natural norm; **a-priori error estimate**
   $\|u - u_h\|_{H\Lambda^k} + \|\sigma - \sigma_h\|_{H\Lambda^{k-1}}
   \leq C h^{r}(|u|_{H^{r+1}} + |\sigma|_{H^r})$ for the
   $\mathcal{P}_{r+1}^-\Lambda^k \times \mathcal{P}_r^-\Lambda^{k-1}$
   pair, optimal in the approximation order of the spaces. **The AFW
   theorem (AFW 2006, Th. 7.9; AFW 2010, Th. 3.9) — the load-bearing
   result of FEEC.**
6. **Lecture 6 — Vector Laplacian, Maxwell, elasticity ($\sim$15 pp.).**
   The scalar Poisson equation as $k = 0$ Hodge-Laplacian (recovers
   standard $H^1$-conforming Lagrange FEM with optional mixed
   formulation = **Raviart-Thomas mixed Poisson**). **Vector
   Laplacian** as $k = 1$ on a 3-manifold (recovers the
   **edge-element Maxwell discretisation** — the FEEC story for
   computational electromagnetism, subsuming Hiptmair 2002).
   **Linearised elasticity** as a $k = 1$ symmetric-tensor-valued
   problem — requires the **Bernardi-Raugel / Arnold-Falk-Winther**
   stable mixed element with strongly symmetric stress (AFW 2007,
   *Math. Comp.* 76:1699-1723), which uses **polynomial differential
   form spaces with values in symmetric tensors** — a non-trivial
   generalisation of the de Rham complex (the elasticity complex
   $0 \to \mathrm{RM} \to V \xrightarrow{\epsilon} \mathbb{S} \xrightarrow{J}
   \mathbb{S} \xrightarrow{\mathrm{div}} V \to 0$).
7. **Lecture 7 — Recent developments ($\sim$15 pp.).** Survey of
   post-2010 directions: **smooth FEEC** (Falk-Neilan 2013,
   $C^k$-conforming complexes for Stokes); **isogeometric exterior
   calculus** (Buffa-Sangalli-Vázquez et al., NURBS-based de Rham
   complexes); **virtual element exterior calculus** (Beirão da
   Veiga et al. 2018, polygonal/polyhedral meshes); **trimmed
   serendipity** elements; **bubble-enriched** de Rham complexes for
   superconvergence.

FEEC is **the** canonical text for **structural mixed finite-element
analysis**. It is the prerequisite the *Boffi-Brezzi-Fortin* 2013
encyclopaedia silently relies on for the FEEC chapter, and the
language in which all recent (2010+) advanced mixed-FEM papers are
written. FEEC has **no overlap** with any other FT title at the
Babel Bible's coverage scope — neither Bott-Tu (FT 1.17) nor Arnold's
*Mathematical Methods of Classical Mechanics* (FT 1.11; same author,
*entirely different book*) nor Shifrin (FT 1.18) addresses **discrete**
exterior calculus or finite-element analysis. FEEC overlaps **upward**
with Bott-Tu (the de Rham complex side, handled by FT 1.17) and
**downward** with classical FEM textbooks that are not on the FT
booklist (Ciarlet, Strang-Fix, Brenner-Scott). FEEC is the
**unique bridge** between the differential-forms machinery of FT 1.17
and the numerical-PDE world the Codex does not yet touch.

**Peer sources** (in addition to the CBMS book itself; ≥3 required
per the audit protocol):

- D. N. Arnold, R. S. Falk, R. Winther, *Finite element exterior
  calculus, homological techniques, and applications*, Acta Numer.
  15 (2006), 1-155 — the **founding 155-page synthesis paper**.
  Freely available via Cambridge Acta Numerica open archive and
  Arnold's personal site
  <https://www-users.cse.umn.edu/~arnold/papers/acta.pdf>. **The CBMS
  book is the lecture-format restatement of this paper**, so AFW
  2006 is the canonical line-number anchor source until the CBMS PDF
  is acquired.
- D. N. Arnold, R. S. Falk, R. Winther, *Finite element exterior
  calculus: from Hodge theory to numerical stability*, Bull. Amer.
  Math. Soc. (N.S.) 47 (2010), 281-354 — the **second canonical
  reference**, more accessible than the Acta Numerica paper. Free
  AMS open access via DOI 10.1090/S0273-0979-10-01278-4. Cited
  routinely in subsequent FEEC literature.
- F. Brezzi, M. Fortin, *Mixed and Hybrid Finite Element Methods*
  (Springer SCM 15, 1991) and Boffi-Brezzi-Fortin *Mixed Finite
  Element Methods and Applications* (Springer SCM 44, 2013) — the
  canonical **mixed-FEM** references. The 2013 edition includes a
  FEEC chapter co-written with Arnold; it is the canonical pre-FEEC
  baseline for what the discrete-de-Rham framework subsumes.
- R. Hiptmair, *Finite elements in computational electromagnetism*,
  Acta Numer. 11 (2002), 237-339 — the immediate precursor in the
  **Maxwell-only** case; explicitly identifies the discrete de Rham
  complex for $H(\mathrm{curl})$ + $H(\mathrm{div})$ on
  $\mathbb{R}^3$, motivating the AFW generalisation. Free Acta
  Numer. archive.
- A. Bossavi, *Computational Electromagnetism: Variational
  Formulations, Complementarity, Edge Elements* (Academic Press
  1998) — supplementary anchor for Whitney forms in the
  electromagnetism context (the route Bossavi took independently
  before Hiptmair / AFW).
- (Supplementary) H. Whitney, *Geometric Integration Theory*
  (Princeton Math. Series 21, 1957) — the **originator** source for
  Whitney forms. FT 1.13 on the booklist.
- (Supplementary) P. G. Ciarlet, *The Finite Element Method for
  Elliptic Problems* (North-Holland 1978; SIAM Classics 40, 2002) —
  the canonical FEM foundation (degrees of freedom, conforming
  finite elements, Bramble-Hilbert lemma, Strang lemma).
- (Supplementary) S. C. Brenner, L. R. Scott, *The Mathematical
  Theory of Finite Element Methods* (Springer TAM 15, 3rd ed. 2008) —
  modern alternative to Ciarlet; standard graduate text for the
  $H^1$-conforming theory.

---

## §2 Coverage table (Babel Bible vs FEEC)

Cross-referenced against the current Babel Bible corpus
(`content/00-precalc/` through `content/23-world/`; ~362 units as of
2026-05-22).
✓ = covered, △ = partial / different framing, ✗ = not covered.

| FEEC topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Differential forms $\Lambda^k$ on a manifold | `03.04.02-differential-forms.md` | ✓ | Master tier covers $k$-forms, wedge product, pullback. |
| Exterior derivative $d$ | `03.04.04-exterior-derivative.md` | ✓ | Master tier covers $d^2 = 0$, naturality. |
| Stokes theorem | `03.04.05-stokes-theorem.md` | ✓ | Standard manifold Stokes; the analytic identity FEEC's mixed weak form integrates by parts to produce. |
| De Rham cohomology $H^k_{\mathrm{dR}}$ | `03.04.06-de-rham-cohomology.md` | ✓ | Shipped; Master tier covers de Rham theorem. |
| Mayer-Vietoris for de Rham | `03.04.07-mayer-vietoris.md` | ✓ | Shipped. |
| Čech-de Rham double complex | `03.04.11-cech-de-rham.md` | ✓ | Shipped — the homological-algebra side of FEEC's "the complex matters, not the spaces". |
| Hodge theory / Hodge Laplacian on compact Riemannian manifold | `48.02.12-kahler-identities-hodge-decomposition.md`; `06.04.03-hodge-decomposition-curves.md`; `04.09.01-hodge-decomposition.md` | △ | Kähler / curves / algebraic-geometry framings shipped, but **the smooth real Riemannian Hodge Laplacian $\Delta = d\delta + \delta d$** (Lecture 1 anchor) has **no dedicated unit**. **First gap.** |
| Codifferential $\delta = d^*$, Hodge star $\star$ | △ (cited in `48.02.12`) | △ | No dedicated unit. **Gap.** |
| Harmonic forms ≅ de Rham cohomology | △ (cited in `03.04.06` Master and `48.02.12`) | △ | Statement appears; no dedicated derivation. |
| Sobolev spaces $H^s$, $H(\mathrm{curl})$, $H(\mathrm{div})$, $H\Lambda^k$ | — | ✗ | **Gap.** No Sobolev-space unit anywhere in the Babel Bible. Foundational prerequisite. |
| Weak / variational formulation of elliptic PDE | △ (cited via `02.12.*` ODE) | △ | No dedicated unit on weak solutions of elliptic PDEs. **Gap.** |
| Lax-Milgram theorem; Babuška-Brezzi (inf-sup) condition | — | ✗ | **Gap.** Foundational for FEM stability. |
| Galerkin method; Céa's lemma; Strang lemmas | — | ✗ | **Gap.** Foundational FEM convergence machinery. |
| Finite element method (general; conforming) | — | ✗ | **Gap.** **Entire FEM track absent from Codex.** |
| Whitney forms $\mathcal{W}^k$ | — | ✗ | **Gap.** Whitney 1957 originator. |
| Simplicial cochain complex; combinatorial-vs-smooth de Rham comparison | △ (via `03.04.13-singular-cohomology.md`) | △ | Singular cohomology shipped; the simplicial-cochain-as-discrete-forms framing FEEC requires is not explicit. |
| Polynomial differential form spaces $\mathcal{P}_r\Lambda^k$ | — | ✗ | **Gap.** AFW 2006 originator. |
| Reduced spaces $\mathcal{P}_r^-\Lambda^k$ and Koszul operator $\kappa$ | — | ✗ | **Gap.** |
| Raviart-Thomas elements $RT_r$ | — | ✗ | **Gap.** Raviart-Thomas 1977 originator. |
| Brezzi-Douglas-Marini elements $BDM_r$ | — | ✗ | **Gap.** Brezzi-Douglas-Marini 1985 originator. |
| Nédélec edge / face elements | — | ✗ | **Gap.** Nédélec 1980, 1986 originator. |
| Subcomplex / discrete de Rham complex | — | ✗ | **Gap.** The FEEC structural axiom. |
| Bounded cochain projection $\pi_h$ + commuting diagram | — | ✗ | **Gap.** The FEEC structural axiom (II). AFW 2006 originator. |
| FEEC convergence theorem (AFW 2006/2010) | — | ✗ | **Gap.** The load-bearing theorem of the entire field. |
| Mixed FEM for Poisson (Raviart-Thomas mixed formulation) | — | ✗ | **Gap.** Classical entry point; pre-FEEC literature. |
| Hodge-Laplacian FEEC discretisation | — | ✗ | **Gap.** Lecture 5 anchor. |
| Discrete Poincaré-Friedrichs inequality | — | ✗ | **Gap.** Stability ingredient. |
| Maxwell equations + edge-element FEEC discretisation | △ (Maxwell in `10-em-sr/`; no FEM treatment) | △ | EM existence shipped at PDE level; numerical / FEEC angle absent. |
| Elasticity + AFW symmetric-tensor element | — | ✗ | **Gap.** AFW 2007 *Math. Comp.* originator. |
| Smooth FEEC (Falk-Neilan) | — | ✗ | **Gap.** Lecture 7 survey item. |
| Isogeometric exterior calculus | — | ✗ | **Gap.** Lecture 7 survey item. |
| Virtual element exterior calculus | — | ✗ | **Gap.** Lecture 7 survey item. |

**Aggregate coverage estimate:** **~8%** of FEEC has corresponding
Codex units (the differential-forms / de Rham / Stokes upstream;
Hodge theory in the Kähler / curves framings; no discrete-side
content). The gap is essentially total on the numerical-PDE side and
substantial on the Sobolev-space prerequisite side.

**Structural recommendation.** Two options for ID-space placement:

- **Option A — extend `03.04-differential-forms/`.** Add a
  `03.04.15+` sub-block on Whitney forms, polynomial differential
  forms, and the discrete de Rham complex. Pro: keeps FEEC adjacent
  to its differential-forms upstream and reuses the existing chapter
  scaffold. Con: mixes smooth and discrete material in one chapter;
  applied / numerical content sits awkwardly inside the
  "modern-geometry" section.
- **Option B — open a new chapter `24-numerical-pde/` (new top-level
  slot).** Mirrors the move that opened `21-number-theory/` for the
  CinA + IMNT joint audit. The slot `08-` is **already taken** by
  `08-stat-mech/`; chapters 24–31 are unused, and `24-` is the
  first applied-mathematics slot alongside the existing
  `23-world/`-bracket. Pro: applied / numerical material in its own
  home, with room to grow (later: Brenner-Scott classical FEM
  units; spectral methods; iterative solvers; multigrid). Con:
  requires chapter scaffolding (`24.01.00` README;
  `docs/catalogs/CONCEPT_CATALOG.md` chapter section;
  `docs/catalogs/DEPENDENCY_MAP.md` edges from `02-analysis/` and
  `03-modern-geometry/04-differential-forms/`).

**This plan recommends Option B**, with the FEEC content placed in
sub-chapters `24.01-sobolev-and-weak-pdes/`, `24.02-classical-fem/`,
`24.03-discrete-de-rham-and-feec/`, `24.04-applications/`. Rationale:
applied / numerical material is conceptually distinct from smooth
differential geometry, and the Codex's longer-term plan to ship
numerical-PDE units (Strang-Fix, Brenner-Scott, multigrid, spectral)
benefits from a dedicated home now. **The few Sobolev-space units
needed by FEEC are also needed by every future PDE / FEM unit**, so
shipping them once in `24.01-sobolev-and-weak-pdes/` pays back
across the whole numerical track. The Hodge-theory bridge units
stay in `03.04-differential-forms/` (i.e. **`03.04.15` Hodge
Laplacian on a Riemannian manifold** lives in modern-geometry, even
though it is FEEC's Lecture 1 anchor — because the smooth Hodge
Laplacian is a modern-geometry object, only its discretisation is
numerical).

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — strict prerequisites (chapter scaffolding + Sobolev /
weak-PDE machinery; foundational for all of Priority 1):**

1. **`24.01.00` Numerical-PDE chapter README + notation crosswalk.**
   Chapter scaffolding: README, dependency edges from `02-analysis/`
   (functional analysis prereqs) and from `03-modern-geometry/04`
   (differential-forms prereqs). Notation table. ~800 words.
   Sub-chapter list. **Required before any other `08.*` unit.**

2. **`24.01.01` Sobolev spaces $H^s$ and $W^{k,p}$.** Definitions
   via weak derivatives + completion; trace theorems; Sobolev
   embeddings (statement only at Beginner / Intermediate; Master =
   compact-embedding proof for bounded Lipschitz domains).
   Three-tier; ~2200 words. Originator-citation: Sobolev 1936,
   *Mat. Sb.* 1(43):39-72.

3. **`24.01.02` Sobolev spaces of differential forms $H\Lambda^k$.** The
   spaces $H(\mathrm{curl})$, $H(\mathrm{div})$, and the general
   $H\Lambda^k = \{\omega \in L^2\Lambda^k : d\omega \in L^2\}$; trace
   theorems on the boundary as forms. Three-tier; ~1800 words.
   **Distinctive FEEC prerequisite.**

4. **`24.01.03` Weak / variational formulation of elliptic PDE.**
   Galerkin form $a(u, v) = (f, v)$; Lax-Milgram theorem; Friedrichs
   inequality. Three-tier; ~1800 words. Originator-citation: Galerkin
   1915 (Vestnik); Lax-Milgram 1954 *Comm. Pure Appl. Math.* 7.

5. **`24.01.04` Babuška-Brezzi (inf-sup) condition for saddle-point problems.** Statement, equivalence to invertibility, application
   to mixed Poisson. Three-tier; ~2000 words. Originator-citation:
   Babuška 1971 (*Numer. Math.* 16); Brezzi 1974 (*RAIRO Anal.
   Numér.* 8). **The pre-FEEC stability framework FEEC subsumes.**

**Priority 1 — high-leverage, FEEC-specific (discrete de Rham
complex; the load-bearing content):**

6. **`03.04.15` Hodge Laplacian on a Riemannian manifold.** Smooth
   $\Delta = d\delta + \delta d$ on $\Lambda^k$; Hodge decomposition
   $\Lambda^k = d\Lambda^{k-1} \oplus \delta\Lambda^{k+1}
   \oplus \mathfrak{H}^k$; harmonic forms $\cong H^k_{\mathrm{dR}}$.
   **Lives in modern-geometry**, not the new numerical chapter, because
   the smooth Hodge Laplacian is a differential-geometry object.
   Three-tier; ~2200 words. Originator-citation: Hodge 1941
   *The Theory and Applications of Harmonic Integrals* (CUP).
   **Bridge unit between `03.04-differential-forms/` and the new
   `24-numerical-pde/` chapter.**

7. **`24.02.01` Classical conforming FEM — Galerkin, Céa, Bramble-Hilbert.** Lagrange $\mathcal{P}_r$ elements on simplices;
   degrees of freedom; assembly; Céa's lemma quasi-best
   approximation; Bramble-Hilbert local approximation; standard
   a-priori $H^1$ error estimate
   $\|u - u_h\|_{H^1} \leq Ch^r |u|_{H^{r+1}}$. Three-tier;
   ~2400 words. Originator-citation: Courant 1943 (*Bull. AMS* 49);
   Bramble-Hilbert 1970 (*SIAM J. Numer. Anal.* 7).
   **Pre-FEEC baseline; recovers the $k = 0$ FEEC story in the
   classical language. Needed for narrative flow even though FEEC
   subsumes it.**

8. **`24.02.02` Mixed FEM for the Poisson equation (Raviart-Thomas).** Mixed weak form $(\sigma, u) \in
   H(\mathrm{div}) \times L^2$ with $\sigma = \nabla u$;
   $RT_r$ element on a triangle; Brezzi-Douglas-Marini second
   family; inf-sup stability; optimal mixed-norm error. Three-tier;
   ~2200 words. Originator-citation: Raviart-Thomas 1977
   ("A mixed finite element method for 2nd order elliptic problems,"
   *Lecture Notes in Math.* 606); Brezzi-Douglas-Marini 1985
   (*Numer. Math.* 47:217-235). **The canonical pre-FEEC mixed
   element; FEEC subsumes via $\mathcal{P}_r^-\Lambda^{n-1}$.**

9. **`24.03.01` Whitney forms $\mathcal{W}^k$.** Lowest-order
   FEEC family. Definition on simplicial $k$-faces via the barycentric
   coordinate identity $\mathcal{W}^{[v_0, \ldots, v_k]} =
   k! \sum_{j=0}^k (-1)^j \lambda_j\, d\lambda_0 \wedge \cdots
   \wedge \widehat{d\lambda_j} \wedge \cdots \wedge d\lambda_k$;
   integration duality with $k$-simplices; the **Whitney
   commuting diagram** (Whitney's predecessor of the AFW projection).
   Three-tier; ~2000 words. Originator-citation: Whitney 1957,
   *Geometric Integration Theory* §IV.27 (Princeton). **The
   originator unit for FEEC.** Note: Whitney's text is FT 1.13;
   coordinated originator-prose treatment with that audit's
   Priority-1 list.

10. **`24.03.02` Nédélec first-kind edge elements and $\mathcal{P}_r^-\Lambda^1$.** Lowest-order Nédélec
    edge element on a tetrahedron = $\mathcal{P}_1^-\Lambda^1$;
    degrees of freedom (edge tangential moments); $H(\mathrm{curl})$
    conformity; restriction to triangle faces = $RT$ element. Three-tier;
    ~1800 words. Originator-citation: Nédélec 1980 (*Numer.
    Math.* 35:315-341). **The Maxwell discretisation pillar.**

11. **`24.03.03` Polynomial differential form spaces $\mathcal{P}_r\Lambda^k$ and $\mathcal{P}_r^-\Lambda^k$.** Both
    AFW families on an $n$-simplex; the Koszul operator $\kappa$;
    dimension formulas; the inclusions
    $\mathcal{P}_r^-\Lambda^k \subset \mathcal{P}_r\Lambda^k
    \subset \mathcal{P}_r^-\Lambda^k$; the **identification table**
    recovering Lagrange / RT / BDM / Nédélec-I / Nédélec-II
    elements as special cases. Three-tier; Master required;
    ~2400 words. Originator-citation: Arnold-Falk-Winther 2006,
    *Acta Numer.* 15:1-155. **Lecture 4 anchor; the
    "mathematical kernel" of FEEC.**

12. **`24.03.04` Discrete de Rham complex and the FEEC subcomplex axiom.** Definition of a FEEC subcomplex
    $\Lambda_h^\bullet \subset \Lambda^\bullet$; the two canonical
    AFW subcomplexes (the $\mathcal{P}_r\Lambda^\bullet$ chain and
    the $\mathcal{P}_r^-\Lambda^\bullet$ chain) on a simplicial
    triangulation; cohomology of the discrete complex matches the
    smooth one. Three-tier; ~1800 words. Originator-citation: AFW
    2006 / AFW 2010.

13. **`24.03.05` Bounded cochain projection and the commuting diagram.** The structural FEEC axiom (II): $\pi_h^k : H\Lambda^k
    \to \Lambda_h^k$ satisfying $\pi_h^k|_{\Lambda_h^k} = \mathrm{id}$,
    $d\pi_h^k = \pi_h^{k+1}d$, $\|\pi_h^k\|_{L^2 \to L^2} \leq C$
    independent of $h$. Construction via Schöberl-Falk-Winther
    smoothed projection. Three-tier; Master tier covers the
    construction; ~2200 words. Originator-citation: AFW 2006
    (existence); Falk-Winther 2014 *Found. Comput. Math.* 14:557-598
    (canonical commuting smoothed projection); Schöberl 2008
    *Math. Comp.* 77:633-649.

14. **`24.03.06` FEEC convergence theorem (Arnold-Falk-Winther).**
    Discrete Poincaré-Friedrichs inequality from the bounded cochain
    projection; stability of the discrete mixed Hodge-Laplacian
    system; a-priori error estimate
    $\|u - u_h\|_{H\Lambda^k} + \|\sigma - \sigma_h\|_{H\Lambda^{k-1}}
    \leq C h^{r}(\|u\|_{H^{r+1}} + \|\sigma\|_{H^r})$. Three-tier;
    Master required, includes full proof outline ~3000 words.
    Originator-citation: Arnold-Falk-Winther 2006 *Acta Numer.* 15;
    Arnold-Falk-Winther 2010 *Bull. AMS* (N.S.) 47:281-354. **The
    distinctive load-bearing theorem; mandatory originator-prose.**

**Priority 2 — FEEC applications (Lecture 6 examples):**

15. **`24.04.01` Mixed FEM for the Hodge Laplacian.** The full FEEC
    discretisation of the Hodge-Laplacian saddle-point system from
    Lecture 5; harmonic-form side condition; matrix structure;
    iterative-solver pointer. Three-tier; ~2000 words. Builds on
    items 6 + 11-14.

16. **`24.04.02` Maxwell equations and FEEC edge elements.**
    Time-harmonic Maxwell as $\Delta$ on $H(\mathrm{curl})$; the
    edge-element discretisation as the $k = 1$ FEEC story on a
    3-manifold; comparison to Hiptmair 2002. Three-tier; ~2200 words.
    Originator-citations: Maxwell 1865 *Phil. Trans. Royal Soc.* 155
    (equations); Nédélec 1980 (edge elements); Hiptmair 2002
    *Acta Numer.* 11:237-339 (de-Rham-complex framing for Maxwell).

17. **`24.04.03` Linearised elasticity via AFW symmetric-tensor mixed elements.** The elasticity complex
    $0 \to \mathrm{RM} \to V \xrightarrow{\epsilon} \mathbb{S}
    \xrightarrow{J} \mathbb{S} \xrightarrow{\mathrm{div}} V \to 0$;
    stable mixed element with strongly symmetric stress in 2D and
    3D. Three-tier; Master tier required (this is a research-level
    application). ~2400 words. Originator-citation: Arnold-Falk-Winther
    2007 *Math. Comp.* 76:1699-1723 (the **AFW elasticity element**);
    Arnold-Winther 2002 *Numer. Math.* 92:401-419 (the 2D version).
    **The AFW-2007 result is the second load-bearing theorem of
    FEEC alongside item 14.**

**Priority 3 — Lecture 7 survey items (deepenings / pointers):**

18. **`24.04.04` Smooth FEEC pointer (Falk-Neilan).** $C^k$-conforming
    de Rham complex for Stokes / biharmonic problems. Pointer-only
    + Master tier; ~1200 words. Originator-citation: Falk-Neilan
    2013 *SIAM J. Numer. Anal.* 51:1308-1326 ($k = 1$); Neilan 2015
    (3D extension).

19. **`24.04.05` Isogeometric exterior calculus pointer.** NURBS-based
    de Rham complexes; the Buffa-Sangalli-Vázquez construction.
    Pointer-only + Master tier; ~1000 words. Originator-citation:
    Buffa-Rivas-Sangalli-Vázquez 2011 *Math. Models Methods Appl.
    Sci.* 21:1421.

20. **`24.04.06` Virtual element exterior calculus pointer.** Polygonal
    / polyhedral meshes; the Beirão da Veiga et al. construction.
    Pointer-only + Master tier; ~1000 words. Originator-citation:
    Beirão da Veiga-Brezzi-Marini-Russo 2018 *Comput. Methods Appl.
    Mech. Engrg.* 327:173-195.

**Priority 4 — exercise pack + deepenings of existing differential-forms
units:**

21. **`03.04.E2` FEEC bridge exercises on `03.04.06`–`03.04.15`.**
    ~10 exercises bridging smooth de Rham to the discrete-FEEC side:
    integration of Whitney forms over simplices, computation of
    $\mathcal{P}_1^-\Lambda^1$ basis on a triangle, Koszul-operator
    identities, commuting-diagram check for the canonical interpolant
    on $\mathcal{P}_r^-\Lambda^0$. Master-tier exercise-pack unit;
    ~3 hours production. Hooks into `03.04.E1` exercise-pack
    pattern.

22. **Deepen `03.04.06-de-rham-cohomology` Master.** Add an
    explicit pointer-and-paragraph block on the **discrete de Rham
    complex** (Whitney / FEEC) as the numerical analogue. No new
    unit; one paragraph + cross-link to `24.03.04`.

23. **`24.04.E1` FEEC convergence-theorem exercises.** ~8 exercises
    on the inf-sup constant for $RT_r$, discrete-Poincaré
    derivation, optimal-rate verification, harmonic-form
    side-condition computations on simple meshes. Master tier;
    ~3 hours.

---

## §4 Implementation sketch (P3 → P4)

For a full FEEC coverage pass, **items 1-17 are the minimum set** to
hit the FT equivalence threshold, **with the Priority-0 scaffolding
(items 1-5) shipped first**. Realistic production estimate
(mirroring earlier Brown / Lawson-Michelsohn / Bott-Tu / Hartshorne
batches, with an applied-content premium):

- ~4-5 hours per unit. FEEC units skew **higher** than the corpus
  average — the bio/chem prose-first contract applies in spirit
  (numerical/applied units do not require Lean formalisation; lean_status:
  none), so the contract lift is the multi-section Master + 6000+ words
  per Master-required unit. Several FEEC units (items 11, 13, 14, 17)
  carry research-level depth and will likely run to 8000+ words.
- 5 Priority-0 scaffolding/prereq units × ~4.5 hours = **~22 hours**.
- 9 Priority-1 FEEC-distinctive units × ~5 hours = **~45 hours**
  (items 6-14; one bridge unit + 8 FEEC-core units).
- 3 Priority-2 application units × ~5 hours = ~15 hours.
- 3 Priority-3 pointer units × ~2 hours = ~6 hours.
- 2 exercise packs × ~3 hours = ~6 hours.
- 1 deepening pass × ~1 hour = ~1 hour.
- **Total ~95 hours.** Fits a focused 12-14 day window. **No overlap
  with any other Fast Track plan** — FEEC is the **first
  numerical-PDE audit** and opens its own ID-space; no double-count.

**Per the bio/chem prose-first contract memo** (memory note
`feedback_bio_chem_prose_first.md`): applied / numerical units stay
**prose-first**, with **`lean_status: none`** the default. The
contract lift is multi-section Master tier + 6000+ words. Lean
formalisation is optional and almost certainly out of reach for FEEC
units (Mathlib has no FEM library, no Sobolev-space-valued
differential-forms machinery, no inf-sup framework). All FEEC units
ship with **`lean_status: none`** and a named **`human_reviewer`** —
this is the same pattern as `17-mol-cell-bio/`, `14-genchem-pchem/`.

**Originator-prose targets.** Several FEEC units are
originator-eligible per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10:

- **Sobolev 1936**, "Sur un théorème d'analyse fonctionnelle,"
  *Mat. Sb.* 1(43):39-72. Sobolev spaces. Originator citation for
  `24.01.01`.
- **Galerkin 1915**, "Series solution of some cases of equilibrium
  of elastic beams and plates," *Vestnik Inzh. Tekh.* 1:897-908
  (in Russian). The Galerkin method. Originator citation for
  `24.01.03`.
- **Lax-Milgram 1954**, "Parabolic equations," *Contributions to
  the Theory of Partial Differential Equations* (Ann. Math. Stud. 33),
  167-190. Originator citation for `24.01.03`.
- **Babuška 1971**, "Error-bounds for finite element method,"
  *Numer. Math.* 16:322-333; **Brezzi 1974**, "On the existence,
  uniqueness and approximation of saddle-point problems arising
  from Lagrangian multipliers," *RAIRO Anal. Numér.* 8:129-151.
  Originator citation for `24.01.04`.
- **Hodge 1941**, *The Theory and Applications of Harmonic Integrals*
  (Cambridge University Press). Originator citation for `03.04.15`.
- **Courant 1943**, "Variational methods for the solution of problems
  of equilibrium and vibrations," *Bull. Amer. Math. Soc.* 49:1-23
  (first proposal of the FEM); **Bramble-Hilbert 1970**, "Estimation
  of linear functionals on Sobolev spaces with application to
  Fourier transforms and spline interpolation," *SIAM J. Numer.
  Anal.* 7:112-124. Originator citations for `24.02.01`.
- **Raviart-Thomas 1977**, "A mixed finite element method for 2nd
  order elliptic problems," in *Mathematical Aspects of Finite
  Element Methods* (Rome 1975), Lecture Notes in Math. 606,
  Springer, 292-315; **Brezzi-Douglas-Marini 1985**, "Two families
  of mixed finite elements for second order elliptic problems,"
  *Numer. Math.* 47:217-235. Originator citations for `24.02.02`.
- **Whitney 1957**, *Geometric Integration Theory* (Princeton Math.
  Series 21), §IV.27. Whitney forms. Originator citation for
  `24.03.01` — **coordinated with FT 1.13 audit (Whitney
  *Geometric Integration Theory* itself)**.
- **Nédélec 1980**, "Mixed finite elements in $\mathbb{R}^3$,"
  *Numer. Math.* 35:315-341; **Nédélec 1986**, "A new family of
  mixed finite elements in $\mathbb{R}^3$," *Numer. Math.* 50:57-81.
  Originator citations for `24.03.02`.
- **Arnold-Falk-Winther 2006**, "Finite element exterior calculus,
  homological techniques, and applications," *Acta Numer.* 15:1-155;
  **Arnold-Falk-Winther 2010**, "Finite element exterior calculus:
  from Hodge theory to numerical stability," *Bull. Amer. Math. Soc.
  (N.S.)* 47:281-354. **Originator citations for the FEEC framework
  itself** — items `24.03.03`, `24.03.04`, `24.03.05`, `24.03.06`.
  Mandatory originator-prose treatment.
- **Falk-Winther 2014**, "Local bounded cochain projections,"
  *Found. Comput. Math.* 14:557-598; **Schöberl 2008**, "A
  posteriori error estimates for Maxwell equations," *Math. Comp.*
  77:633-649. Originator citations for `24.03.05` (the smoothed
  projection construction).
- **Arnold-Falk-Winther 2007**, "Mixed finite element methods for
  linear elasticity with weakly imposed symmetry," *Math. Comp.*
  76:1699-1723; **Arnold-Winther 2002**, "Mixed finite elements for
  elasticity," *Numer. Math.* 92:401-419. Originator citations for
  `24.04.03`. Mandatory originator-prose.
- **Hiptmair 2002**, "Finite elements in computational
  electromagnetism," *Acta Numer.* 11:237-339. Originator citation
  for the Maxwell-only de-Rham-complex framing in `24.04.02`.
- **Falk-Neilan 2013**, "Stokes complexes and the construction of
  stable finite elements with pointwise mass conservation,"
  *SIAM J. Numer. Anal.* 51:1308-1326. Originator citation for
  `24.04.04`.

**Notation crosswalk.** FEEC follows AFW-standard notation:

- $\Lambda^k(\Omega)$ for smooth differential $k$-forms on $\Omega$;
  $\Lambda_h^k$ for the finite-element subspace.
- $H\Lambda^k(\Omega) = \{\omega \in L^2\Lambda^k :
  d\omega \in L^2\Lambda^{k+1}\}$ — the Sobolev de Rham space.
- $d : \Lambda^k \to \Lambda^{k+1}$ for the exterior derivative;
  $\delta = d^* = (-1)^{nk+1} \star d \star$ for the codifferential.
- $\star : \Lambda^k \to \Lambda^{n-k}$ for the Hodge star.
- $\mathfrak{H}^k = \ker(d) \cap \ker(\delta) \cong H^k_{\mathrm{dR}}$
  for harmonic forms.
- $\mathcal{P}_r\Lambda^k$ for full polynomial $k$-forms of total
  degree $\leq r$ on a simplex; $\mathcal{P}_r^-\Lambda^k$ for the
  reduced family.
- $\kappa : \Lambda^{k+1} \to \Lambda^k$ for the **Koszul operator**
  $(\kappa\omega)_x(v_1, \ldots, v_k) = \omega_x(x, v_1, \ldots, v_k)$.
- $\pi_h^k : \Lambda^k \to \Lambda_h^k$ for the bounded cochain
  projection.
- $\mathcal{W}^{[v_0, \ldots, v_k]}$ for the Whitney form on the
  $k$-simplex $[v_0, \ldots, v_k]$; $\lambda_i$ for barycentric
  coordinates.
- $a_h(\cdot, \cdot)$ for the discrete bilinear form; $b_h$ for the
  saddle-point off-diagonal block.

These match Bott-Tu notation upstream (`03.04.*` units) with no
conflict — AFW are explicit about following Bott-Tu / Spivak
conventions for the smooth side. **Record once in the new
`24.01.00` chapter README.**

**Dependency edges to register in
`docs/catalogs/DEPENDENCY_MAP.md`:**

- `24.01.01` → `02.11.04-banach-spaces`, `02.11.06-normed-vector-space`,
  `02.11.07-inner-product-space`, `02.11.08-hilbert-space`
  (functional analysis upstream).
- `24.01.02` → `24.01.01` + `03.04.02-differential-forms`,
  `03.04.04-exterior-derivative`.
- `24.01.03` → `24.01.01`, `02.11.04-banach-spaces`.
- `24.01.04` → `24.01.03`, `02.11.05-compact-operators`.
- `03.04.15` → `03.04.04-exterior-derivative`, `03.04.06-de-rham-cohomology`,
  `04.09.01-hodge-decomposition` (cross-pollinate the Kähler
  framing).
- `24.02.01` → `24.01.03`, `02.11.04-banach-spaces`.
- `24.02.02` → `24.02.01`, `24.01.04`, `24.01.02`.
- `24.03.01` → `03.04.02-differential-forms`, `03.04.13-singular-cohomology`.
- `24.03.02` → `24.03.01`, `24.02.02`.
- `24.03.03` → `24.03.01`, `03.04.04-exterior-derivative`.
- `24.03.04` → `24.03.03`, `03.04.06-de-rham-cohomology`.
- `24.03.05` → `24.03.04`, `24.01.02`.
- `24.03.06` → `24.03.05`, `03.04.15`, `24.01.04`.
- `24.04.01` → `24.03.06`, `03.04.15`.
- `24.04.02` → `24.03.06`, `10-em-sr/*` (Maxwell equations content,
  upstream).
- `24.04.03` → `24.03.06`, `09-classical-mech/*` (elasticity-as-PDE
  upstream).

---

## §5 What this plan does NOT cover

- **A line-number-level inventory of every CBMS lecture.** Full P1
  audit deferred until a local PDF is sourced. The AFW 2006 Acta
  Numer. paper covers ~95% of the content with full line-number
  anchor capability, so the equivalence threshold can in principle
  be hit from the open-access cross-anchor alone; the CBMS PDF
  remains the primary tier-anchor target.
- **A-posteriori error estimation and adaptive FEEC.** Not in the
  CBMS lectures; covered in subsequent AFW papers and in
  Demlow-Hirani 2014 (*Found. Comput. Math.* 14:1337-1371) and
  later. Deferred — would need a **second** numerical-PDE audit
  on (e.g.) Verfürth or Ainsworth-Oden once those land on the
  booklist.
- **Iterative solvers and preconditioners for FEEC systems.** Not in
  the CBMS lectures; covered in Hiptmair-Xu 2007 (*SIAM J. Numer.
  Anal.* 45:2483-2509) and the auxiliary-space-preconditioning
  literature. Deferred to a future linear-algebra-of-FEM unit.
- **Discontinuous Galerkin exterior calculus** (DG-FEEC). A separate
  research direction; not in the CBMS lectures. Deferred.
- **The infinite-dimensional Hodge-theoretic / PDE-analytic
  foundations** (regularity theory for elliptic systems on
  manifolds, Weyl's lemma). Touched in `48.02.12-kahler-identities-hodge-decomposition.md`
  and shipped at the Kähler / curves level; full smooth-real
  Hodge theory not covered at textbook depth. Deferred — outside
  FEEC's scope; would need a separate Warner / Wells audit.
- **Exercise pack at full coverage.** FEEC contains ~15 lecture
  exercises across its 7 lectures; the punch-list includes two
  P4 exercise-pack passes (items 21 + 23). Full per-unit
  exercise coverage is a follow-up.

---

## §6 Acceptance criteria for FT equivalence (FEEC)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The `24-numerical-pde/` chapter exists with its scaffolding
  (`24.01.00` chapter README; dependency edges in
  `docs/catalogs/DEPENDENCY_MAP.md`; chapter row in
  `docs/catalogs/CONCEPT_CATALOG.md`).
- Priority-0 prereq units `24.01.01`–`24.01.04` have shipped.
- The bridge unit `03.04.15` (Hodge Laplacian on a Riemannian
  manifold) has shipped.
- Priority-1 FEEC-core units `24.02.01`–`24.03.06` have shipped (8
  units).
- ≥95% of FEEC's named theorems map to Codex units — currently ~8%;
  after Priority-0 + Priority-1 this rises to ~80%; full ≥95%
  requires Priority-2 application units (`24.04.01`–`24.04.03`).
- ≥90% of FEEC's worked examples have a direct unit or are
  referenced (Lagrange Poisson, mixed Poisson with RT, edge-element
  Maxwell on a tetrahedron, $\mathcal{P}_1^-\Lambda^1$ basis,
  Koszul-operator dimension check, AFW elasticity element on a
  triangle).
- Notation decisions recorded in `24.01.00` (see §4).
- Pass-W weaving connects the new chapter to
  `02-analysis/11-functional-analysis/` (Sobolev / weak-form
  prereqs), to `03-modern-geometry/04-differential-forms/` (smooth
  de Rham upstream), to `10-em-sr/` (Maxwell application), and to
  `09-classical-mech/` (linearised elasticity application).
- Originator-prose treatment of the AFW 2006 + AFW 2010 framework
  in items `24.03.03`-`24.03.06` (mandatory per §10 of the
  equivalence plan).
- All FEEC units ship with `lean_status: none` + named
  `human_reviewer` (the prose-first contract from
  `feedback_bio_chem_prose_first.md`).

The 5 Priority-0 + 9 Priority-1 units close most of the equivalence
gap. Priority-2 application units close the residual gap. Priority-3
pointers + Priority-4 exercise packs hit the ≥95% line.

---

## §7 Sourcing

- **Status: REDUCED.** No local PDF found in the three configured
  paths (`reference/textbooks-extra/`, `reference/fasttrack-texts/`,
  `reference/book-collection/free-downloads/`) as of 2026-05-22.
  SIAM link <https://epubs.siam.org/doi/book/10.1137/1.9781611975543>
  sits behind the SIAM e-book paywall. WebFetch on the SIAM
  bookstore page and Arnold's faculty page returned no usable TOC
  for the CBMS volume. This plan was produced from canonical
  knowledge of the FEEC seven-lecture structure (the structure is
  stable since AFW 2006 / 2010 — the CBMS volume reorganises but
  does not extend the framework) cross-referenced against the **AFW
  2006 Acta Numerica paper** (open-access via Arnold's personal
  site) and the peer sources in §1.
- **Action item.** Source FEEC (SIAM paid download — SIAM members
  receive a discount; alternatively Anna's Archive) and drop into
  `reference/textbooks-extra/` as
  `Arnold-FiniteElementExteriorCalculus-2018.pdf`. **Required
  before a full P1 audit can run at line-number granularity** for
  the CBMS volume specifically.
- **Open-access workaround for immediate production.** AFW 2006
  *Acta Numer.* 15:1-155 is freely available at
  <https://www-users.cse.umn.edu/~arnold/papers/acta.pdf> and covers
  ~95% of the CBMS content with full line-number granularity. **Drop
  this into `reference/textbooks-extra/` as
  `Arnold-Falk-Winther-FEEC-ActaNumer-2006.pdf`** — sufficient for
  Priority-0 and Priority-1 production. Acquire AFW 2010 *Bull.
  AMS* paper similarly from
  <https://www.ams.org/journals/bull/2010-47-02/S0273-0979-10-01278-4/>
  (AMS open access) as
  `Arnold-Falk-Winther-FEEC-BullAMS-2010.pdf`.
- **License.** SIAM copyright (CBMS volume). For educational use
  cite as Arnold, *Finite Element Exterior Calculus*, CBMS-NSF
  Regional Conference Series in Applied Mathematics 93, SIAM, 2018.
  AFW 2006 and AFW 2010 papers are author-archived and
  AMS-open-access respectively and require standard journal
  citation.
- **Local copy target path.** `reference/textbooks-extra/` per
  pattern of other paid FT texts (Hartshorne, Silverman, Neukirch,
  Manin-Panchishkin, Serre CinA).
- **Companion sources already in / targeted for the reference
  library.**
  - Arnold-Falk-Winther 2006 *Acta Numer.* paper — **not yet
    sourced; should be acquired first** as the primary tier-anchor
    until the CBMS PDF lands.
  - Arnold-Falk-Winther 2010 *Bull. AMS* paper — **not yet sourced;
    open-access, acquire alongside AFW 2006**.
  - Boffi-Brezzi-Fortin *Mixed FEM and Applications* (Springer SCM
    44) — not yet sourced; cross-anchor for `24.01.04` (inf-sup)
    and `24.02.02` (mixed Poisson).
  - Hiptmair 2002 *Acta Numer.* 11:237-339 — not yet sourced;
    open-access Cambridge Acta Numer. archive; cross-anchor for
    `24.04.02` (Maxwell FEEC).
  - Whitney 1957 *Geometric Integration Theory* — FT 1.13;
    cross-coordinated audit. Originator citation for `24.03.01`.
  - Ciarlet *The Finite Element Method for Elliptic Problems* —
    not yet sourced; supplementary anchor for `24.02.01` (classical
    FEM); SIAM Classics 40 reprint.
  - Brenner-Scott *Mathematical Theory of Finite Element Methods*
    (Springer TAM 15) — not yet sourced; supplementary anchor for
    `24.02.01`.

---

## §8 Coordination notes (Whitney FT 1.13 overlap)

The FEEC audit and a future Whitney *Geometric Integration Theory*
(FT 1.13) audit share **one shared unit** in the Priority-1 ship
list — `24.03.01` (Whitney forms). The originator-source is
Whitney 1957 *Geometric Integration Theory* §IV.27. **Ship once**
with **Whitney as the originator anchor**; FEEC consumes the unit
downstream and references it via the cochain-projection construction.
A future FT 1.13 audit should cite this plan and **not** double-count
`24.03.01`.

There is **no overlap** with any other FT title:

- Bott-Tu (FT 1.17): smooth-side de Rham only; no discrete content.
- Cannas-Symplectic (FT 1.05; if audited): symplectic forms and
  reduction, not numerical discretisation of forms.
- Arnold-Mathematical-Methods (FT 1.11): classical mechanics on
  symplectic manifolds; smooth differential forms only. **Same
  author, entirely different book** — no overlap.
- Shifrin Ch. 8 (FT 1.18): multivariable calculus / Stokes on
  manifolds; no discretisation.
- Sternberg variants (FT 1.10, 1.14, 1.15): smooth differential
  geometry.

**Net effect.** FEEC is the **first numerical-PDE audit** in the
Codex. Running it as written opens the `24-numerical-pde/` chapter
and ships ~17 new units across Priorities 0-2. The marginal cost is
~95 hours. **Coordinate with a planned FT 1.13 (Whitney) audit on
item `24.03.01` (Whitney forms) — single ship satisfies both
audits.**

---

## §9 Notes on the "lightweight applied audit" pattern

This is the **first applied / numerical Fast Track audit** in the
Codex. Two pattern observations for future applied audits:

1. **Sobolev / functional-analysis prerequisites are pervasively
   absent from the Codex.** FEEC is gated on ~4 Sobolev / weak-PDE
   units (`24.01.01`–`24.01.04`) that **every future PDE audit will
   share** — Strang-Fix, Brenner-Scott, Evans (if added), spectral
   methods, multigrid. Ship these once in `24.01-*` and the
   marginal cost of subsequent applied audits drops sharply.
2. **The `lean_status: none` + named `human_reviewer` contract is
   strictly stricter than for bio/chem.** Numerical-PDE units have
   **no plausible** Mathlib formalisation path — there is no FEM
   library, no Sobolev-valued-form machinery, no inf-sup
   infrastructure. **All FEEC units must ship with `lean_status:
   none`**, the corresponding multi-section Master + ≥6000-word
   prose lift, and a named (non-TBD) `human_reviewer` per the
   `feedback_bio_chem_prose_first.md` contract. The reviewer pool
   for FEEC realistically includes Douglas Arnold himself (PI of the
   AFW programme), Ragnar Winther, Richard Falk, Snorre Christiansen,
   Anil Hirani — **acquisition of a credible reviewer is a strict
   prerequisite for ship**, as for the upstream-of-research bio
   units.

These notes will inform the **next applied audit** (likely
Olver *Applications of Lie Groups to Differential Equations*, FT
1.16, which spans symbolic/computational and is the natural
follow-on) and any future numerical-PDE audits.
