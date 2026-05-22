# Peter Olver — *Applications of Lie Groups to Differential Equations* (Fast Track 1.16) — Audit + Gap Plan

**Book:** Peter J. Olver, *Applications of Lie Groups to Differential
Equations*, Graduate Texts in Mathematics 107, 2nd edition (Springer,
1993). ISBN 0-387-94007-3. xxviii + 513 pp. The first edition (1986) is
substantively superseded by the 1993 second edition, which adds the full
Lie-Bäcklund / generalised-symmetry / Hamiltonian-PDE chapters
(Chs. 5-7) Olver had only sketched in 1986; the 1993 second edition is
the canonical reference.

**Fast Track entry:** 1.16 — the Lie-symmetries-of-differential-equations
slot of Section 1 (after Sternberg 1.15 *Group Theory and Physics* and
before Bott-Tu 1.17 *Differential Forms in Algebraic Topology*). Catalog
status: **BUY** (under active copyright; Springer GTM commercial title).

**Audit completeness: topic-level (P1-lite + P2).** No local PDF
inventoried; audit works from Olver's TOC (the canonical Springer GTM
107 second-edition TOC, verified against the citation Olver-Ch. 4-5
already embedded in `05.00.04` Noether and against the standard
section-by-section list in the *AMS Mathematical Reviews* review of the
second edition by R. M. Miura). WebFetch fallback was not exercised;
the book is famous enough that section-level claims about prolongation,
symmetry criterion, Lie-Bäcklund, recursion operator, and bi-Hamiltonian
structure are unambiguous from the standard literature.

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite).
Output is a punch-list of new units and existing-unit deepenings so that
Olver is covered to the FT-equivalence threshold (≥95% effective
coverage; see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Olver is
the canonical source for the Lie-group method of solving differential
equations — prolongation of vector fields to jet space, the
infinitesimal symmetry criterion, group-invariant solutions, the full
first and second Noether theorems for PDEs, generalised (Lie-Bäcklund)
symmetries, recursion operators, and bi-Hamiltonian structures on
infinite-dimensional Poisson manifolds (KdV as the canonical exemplar).
None of these topics are properly covered by any prior Codex audit, but
several adjacent units (Noether's theorem, Cannas-shipped moment-map and
symplectic-reduction units, Arnold-shipped integrable systems, contact
geometry on jet space) already use Olver as a citation. **The Babel
Bible has been quoting Olver Ch. 4-5 without shipping the Olver-native
units; this plan closes that gap.**

**Substantial overlap with three prior plans:**

- **Cannas plan (`plans/fasttrack/cannas-da-silva-symplectic.md`)** —
  shipped the moment-map / Marsden-Weinstein reduction / Atiyah-
  Guillemin-Sternberg / Delzant / Duistermaat-Heckman block. Olver's
  Ch. 4 §4 (symmetry groups of variational problems → conservation laws
  → moment map for Hamiltonian group actions) overlaps directly. **This
  Olver plan does not re-ship moment-map material;** it punches up the
  *prolongation-to-jet-bundle* layer that Cannas does not cover.
- **Helgason plan (`plans/fasttrack/helgason-differential-geometry.md`)**
  — shipped the Lie-group / Lie-algebra / Cartan-decomposition /
  symmetric-space infrastructure. Olver Ch. 1 (manifolds + Lie groups +
  Lie algebras + Lie's three theorems) is a 60-page recap that overlaps
  Helgason wholesale. **This Olver plan defers Ch. 1 to the Helgason
  units shipped in `07.04.*` and `03.03.*`;** no Olver Ch. 1 units are
  punch-listed.
- **Landau plan (`plans/fasttrack/landau-lifshitz-mechanics.md`)** —
  shipped the coordinate-physics worked-example layer for ODE
  symmetries (mechanical similarity, Routhian, Maupertuis, scattering,
  small oscillations, rigid body, Coriolis). Olver overlaps at the
  level of "ODE symmetry" but is the geometric-PDE counterpart, not the
  worked-example counterpart. **No overlap-drops with Landau;** Olver's
  contribution is the jet-bundle / generalised-symmetry / recursion-
  operator algebraic-geometric layer that Landau does not touch.

---

## §1 What Olver is for

Olver is the canonical graduate reference for **Sophus Lie's original
programme — read off the symmetries of a differential equation by an
algorithm, then use them to reduce, solve, or classify the equation**.
Where the modern Lie-theory literature (Helgason, Knapp, Fulton-Harris)
develops Lie groups as ends in themselves and where the mechanics
literature (Arnold, Landau, Cannas) uses Lie groups as the symmetry
infrastructure for a fixed Hamiltonian system, Olver does something
different: he turns Lie's algorithm into a calculus, applies it to
arbitrary systems of ODEs and PDEs, and develops the consequences all
the way through Noether's theorem and infinite-dimensional Hamiltonian
mechanics.

The book is **the** textbook of the Lie-group method of solving
differential equations. Every modern competitor (Bluman-Kumei
*Symmetries and Differential Equations*, Stephani *Differential
Equations: Their Solution Using Symmetries*, Ibragimov's *CRC Handbook
of Lie Group Analysis of Differential Equations*) reads as a commentary
on Olver. The signature contribution is **operational**: given a PDE
$\Delta = 0$, Olver gives a finite algorithm to compute its symmetry
algebra, and then a second algorithm to extract the group-invariant
solutions, the conservation laws, and the recursion operators.

Distinctive contributions of the second edition, in roughly the order
the book develops them (book is ~512 pp., 7 chapters, ~30 sections):

1. **Prolongation of vector fields to jet space (Ch. 2).** Given a
   vector field $\mathbf{v} = \xi^i \partial_{x^i} + \phi^\alpha
   \partial_{u^\alpha}$ on the base $X \times U$ of independent and
   dependent variables, Olver constructs its **$k$-th prolongation**
   $\mathrm{pr}^{(k)} \mathbf{v}$ — a vector field on the $k$-th jet
   bundle $J^k$ — by the explicit prolongation formula
   $\mathrm{pr}^{(k)} \mathbf{v} = \mathbf{v} + \sum_{\alpha, J}
   \phi^\alpha_J \partial_{u^\alpha_J}$ with the prolonged coefficients
   $\phi^\alpha_J$ computed by Olver's recursion
   $\phi^\alpha_J = D_J(\phi^\alpha - \xi^i u^\alpha_i) +
   \xi^i u^\alpha_{J, i}$. **This is the central computational object
   of the entire book.** Total derivative $D_i$ is defined on jet space
   as the operator that lifts $\partial_{x^i}$ through every
   $u^\alpha_J$ dependence.
2. **Infinitesimal symmetry criterion (Ch. 2 §2.2-2.4).** A
   one-parameter group of transformations $G$ is a symmetry group of
   the system $\Delta_\nu(x, u^{(k)}) = 0$ iff the generators
   $\mathbf{v}$ satisfy
   $\mathrm{pr}^{(k)} \mathbf{v}[\Delta_\nu] = 0$ whenever
   $\Delta = 0$. **This is the algorithm**: choose an ansatz for
   $\mathbf{v}$, prolong, apply $\Delta$, set the result to zero
   modulo $\Delta = 0$, separate into determining equations — a system
   of linear PDEs for the coefficients of $\mathbf{v}$ — and solve.
   The determining equations are *overdetermined and linear*; their
   general solution is the symmetry algebra of $\Delta$.
3. **Worked symmetry calculations (Ch. 2 examples, Ch. 3 applications).**
   The heat equation $u_t = u_{xx}$: 6-dimensional symmetry algebra
   isomorphic to a central extension of the Heisenberg algebra by a
   scaling and a Galilean boost. The wave equation $u_{tt} = u_{xx}$:
   infinite-dimensional symmetry algebra (Olver shows the conformal
   $(t \pm x)$ structure). Burgers' equation, KdV equation, Navier-
   Stokes — Olver computes the symmetry algebra of each.
4. **Group-invariant solutions (Ch. 3).** Given a $k$-parameter
   subgroup $H \leq G$ of the symmetry group $G$ and the orbit space
   $M/H$, Olver constructs the **invariant solutions** of $\Delta = 0$
   by reducing $\Delta$ to a system on $M/H$ with fewer independent
   variables. Worked examples: travelling-wave solutions of KdV (one-
   parameter reduction by translations gives the soliton ODE
   $-cu' = u u' + u'''$, integrated by quadrature); similarity
   solutions of the heat equation (reduction by the scaling subgroup
   gives the Gaussian fundamental solution); self-similar Burgers
   solutions.
5. **Symmetry classification of differential equations (Ch. 3 §3.5).**
   Lie's programme of classifying equations up to point-transformation
   equivalence by their symmetry algebra. Olver explicitly works out
   the Lie classification of second-order ODEs and the Bianchi-Lie
   classification of $\mathbb{R}^2$ vector-field algebras.
6. **Noether's first theorem in full generality (Ch. 4).** Olver gives
   the cleanest modern proof of the first Noether theorem: a
   one-parameter variational symmetry of a Lagrangian density
   $\mathcal{L}[u]$ on jet space (i.e. $\mathrm{pr}^{(k)} \mathbf{v}
   (\mathcal{L}) + (\mathrm{Div}\xi)\mathcal{L} = \mathrm{Div} B$ for
   some $B$) gives rise to a conservation law $\mathrm{Div} P = 0$ on
   solutions, where the conserved current $P$ is constructed from
   $\mathbf{v}$, $\mathcal{L}$, and $B$ by an explicit formula. **The
   formula generalises to generalised (Lie-Bäcklund) symmetries
   directly — this is Olver's main contribution to the Noether
   literature.**
7. **Noether's second theorem (Ch. 5 §5.3, §5.4).** Olver gives the
   modern statement of Noether's second theorem: if the variational
   symmetry depends on arbitrary functions (a *gauge* symmetry), the
   resulting conservation law is a *differential identity* — a
   relation between the Euler-Lagrange expressions and their
   derivatives that holds identically, not just on solutions. The
   canonical example is the Bianchi identity in general relativity, a
   second-Noether consequence of the gauge invariance of the Einstein-
   Hilbert action under diffeomorphisms. **Olver is the canonical
   modern reference; the Bianchi identity is *not* a first-Noether
   conservation law and many physics texts conflate the two.**
8. **Generalised symmetries / Lie-Bäcklund transformations (Ch. 5).**
   A *generalised vector field* is a vector field on jet space whose
   coefficients $\phi^\alpha = \phi^\alpha(x, u^{(k)})$ depend on
   derivatives of arbitrary order. Olver develops the algebra of
   generalised symmetries: they form a Lie algebra under the
   *characteristic-form* commutator, they include all classical Lie-
   point symmetries as a sub-Lie-algebra, and they include the
   *infinite hierarchies* (KdV hierarchy, sine-Gordon hierarchy)
   that classical Lie-point analysis misses. **Lie-Bäcklund originator
   programme; Olver is the canonical modern reformulation.**
9. **Recursion operators (Ch. 5 §5.2, §5.4).** A linear operator
   $\mathcal{R} : J^\infty \to J^\infty$ is a *recursion operator* for
   $\Delta = 0$ if $\mathcal{R}$ maps symmetries to symmetries.
   Whenever a recursion operator exists, it generates an infinite
   hierarchy of generalised symmetries from a single seed symmetry —
   this is the algebraic-geometric source of the KdV hierarchy. Olver
   gives the explicit recursion operator for KdV:
   $\mathcal{R} = D_x^2 + \tfrac{2}{3}u + \tfrac{1}{3}u_x D_x^{-1}$,
   with $D_x^{-1}$ the antiderivative (formal inverse).
10. **Hamiltonian systems on finite-dim manifolds (Ch. 6).** Olver
    treats the finite-dimensional Hamiltonian story as a stepping
    stone to the infinite-dimensional case. Symplectic structures,
    Poisson manifolds, Lie-Poisson structure on $\mathfrak{g}^*$,
    coadjoint orbits, momentum maps. Mostly recap of Arnold-Cannas
    territory; the only Olver-distinctive item is the explicit
    treatment of **degenerate Poisson structures** (Casimirs).
11. **Hamiltonian methods for evolution equations (Ch. 7).** Olver
    treats infinite-dimensional Poisson manifolds — function spaces
    on which evolution equations $u_t = K[u]$ are Hamiltonian. KdV is
    bi-Hamiltonian: $u_t = u_{xxx} + 6 u u_x$ has two compatible
    Hamiltonian structures, with the *Magri pair* of Poisson brackets
    $\mathcal{D}_1 = D_x$ and $\mathcal{D}_2 = D_x^3 + \tfrac{2}{3}
    (u D_x + D_x u)$, and the KdV hierarchy is generated by recursion
    along the ratio $\mathcal{R} = \mathcal{D}_2 \mathcal{D}_1^{-1}$.
12. **Master symmetries (Ch. 7 §7.4).** A *master symmetry* is a
    symmetry that generates the recursion-operator action by Lie
    bracket. Olver's discussion of Fuchssteiner's 1983 result on the
    master-symmetry origin of the recursion operator for integrable
    hierarchies is the canonical modern reference.
13. **Lax pairs (Ch. 7 §7.5).** Brief but canonical treatment of the
    Lax pair $L_t = [P, L]$ for KdV with $L = -\partial_x^2 + u$ and
    $P = -4 \partial_x^3 + 6 u \partial_x + 3 u_x$. Olver's Lax-pair
    discussion connects to inverse-scattering and is the canonical
    textbook bridge between Lie-symmetry analysis and integrability.

The book stops short of the modern variational bicomplex (covered in
Anderson's *The Variational Bicomplex* preprint, 1989) and the full
diffiety / secondary calculus of Vinogradov. It also stops at smooth
analytic content — no formal/algebraic D-module treatment of symmetries
(deferred to Bernstein's lectures or Kashiwara-Schapira). It is **the**
graduate textbook for the operational Lie-group method.

---

## §2 Prior art and Babel Bible coverage

Cross-referenced against the current Babel Bible corpus. The relevant
chapters are:

- `03.03.*` Lie groups (Helgason-anchored; abstract Lie theory).
- `03.04.*` Differential forms / variational calculus
  (`03.04.08-variational-calculus` is the closest Codex unit to Olver's
  jet-bundle variational calculus, but Olver's apparatus is not in it).
- `03.02.03-smooth-maps-manifolds` mentions jet bundles in passing
  (paragraph-level).
- `05.00.04-noether-theorem` already cites Olver Ch. 4-5 in
  `tier_anchors.master` and quotes Olver's PDE Noether current
  $J^\mu_X$ in the field-theory master subsection — but the unit's
  proof and worked examples are the finite-dimensional point-particle
  case. **Olver's full PDE Noether with prolongation is missing.**
- `05.05.04-hamilton-jacobi` covers H-J for ODE Hamiltonians; Olver's
  PDE Hamilton-Jacobi / characteristic-method angle is not present.
- `05.04.01-moment-map`, `05.04.02-symplectic-reduction` cover the
  finite-dim moment-map story (Cannas-shipped). Olver Ch. 6 is a
  recap; no overlap-drop needed, but no Olver-distinctive deepening
  either.
- `05.09.01` KAM, `05.09.02` adiabatic, `05.09.03` Birkhoff,
  `05.09.05` Euler-Arnold, `05.09.06` Nekhoroshev — finite-dim
  integrable / perturbation. **No infinite-dim / KdV / bi-Hamiltonian
  unit.**
- `05.10.01-04` Contact manifolds — Cannas-shipped; Olver does not
  expand on contact, but the contact 1-form on $J^1$ is the entry
  point for the jet-bundle apparatus.
- `02.12.*` ODE chapter — Olver's ODE-symmetry side (point symmetries,
  classification of second-order ODEs, reduction of order by a
  symmetry) is absent.
- `09.03.01-noethers-theorem` — duplicate-templated unit (the
  `05.00.04` Noether and `09.03.01` Noether overlap; both are
  point-particle Noether). Olver's PDE / generalised-symmetry Noether
  is in neither.

### Coverage table (Babel Bible vs Olver second edition)

| Olver chapter / topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| **Ch. 1** — manifolds, vector fields, Lie groups, Lie algebras, Lie's three theorems (60 pp.) | `03.02.*`, `03.03.*`, `07.04.*` (Helgason batch) | ✓ | Recap chapter; no Olver-distinctive content. **Skip.** |
| **Ch. 2 §2.1** — jet bundle $J^k$ as a manifold | `05.10.01-contact-manifold` (paragraph on $J^1$); `03.02.03` (paragraph on jets) | △ | No dedicated jet-bundle unit. |
| **Ch. 2 §2.2-2.4** — prolongation, infinitesimal symmetry criterion | — | ✗ | **Gap (Olver-canonical).** No Babel Bible unit. |
| **Ch. 2 §2.5** — symmetry algebra of the heat equation | — | ✗ | Gap. Worked example. |
| **Ch. 3 §3.1-§3.4** — group-invariant solutions, KdV travelling-wave, similarity solutions | — | ✗ | **Gap.** |
| **Ch. 3 §3.5** — Lie classification of ODEs | — | ✗ | Gap. |
| **Ch. 4 §4.1-§4.2** — Lagrangian density on $J^k$, variational symmetries | `05.00.02-hamilton-principle` (field-theory paragraph); `03.04.08-variational-calculus` | △ | Topic present, no Olver-style prolongation. |
| **Ch. 4 §4.3** — first Noether theorem for PDEs | `05.00.04-noether-theorem` (master subsection cites Olver Ch. 4-5; statement quoted, no proof) | △ | Statement present; Olver's full prolongation-based proof and worked examples (KdV charge, Maxwell, GR) absent. |
| **Ch. 5 §5.1-§5.2** — generalised (Lie-Bäcklund) symmetries | — | ✗ | **Gap.** |
| **Ch. 5 §5.3-§5.4** — second Noether, Bianchi identity, recursion operators | — | ✗ | **Gap.** Bianchi identity covered as Riemannian geometry in `13.03.*`; Noether-second framing absent. |
| **Ch. 6** — finite-dim Hamiltonian systems (~50 pp. recap) | `05.02.*`, `05.04.*`, `05.05.*` (Arnold + Cannas batches) | ✓ | Recap; Casimir of degenerate Poisson briefly missing — see deepening item 14. |
| **Ch. 7 §7.1-§7.2** — infinite-dim Poisson / Hamiltonian PDE | — | ✗ | **Gap (Olver-canonical).** |
| **Ch. 7 §7.3** — KdV bi-Hamiltonian structure, Magri pair | — | ✗ | **Gap.** |
| **Ch. 7 §7.4** — master symmetries | — | ✗ | Gap. |
| **Ch. 7 §7.5** — Lax pairs | — | ✗ | Gap; introductory only. |

### Aggregate coverage estimate

- **Theorem layer:** ~20% topic-level, ~10% Olver-equivalent proof
  depth. The Olver-distinctive prolongation / generalised-symmetry /
  bi-Hamiltonian / recursion-operator / Lax-pair material is almost
  entirely missing. The point-particle Noether is shipped.
- **Algorithm layer:** ~5%. Olver is fundamentally about *how to
  compute* the symmetry algebra of a given equation. No Codex unit
  delivers a worked computation of a PDE's symmetry algebra.
- **Worked-example layer:** ~10%. Olver's worked symmetry algebras of
  heat, wave, KdV, Burgers, Navier-Stokes are absent.
- **Notation layer:** ~30%. Olver's $\mathrm{pr}^{(k)}\mathbf{v}$,
  total-derivative $D_i$ on jet space, jet-coordinates $u^\alpha_J$
  with multi-index $J$, and generalised vector fields $\mathbf{v}_Q$
  with characteristic $Q$ are not used anywhere in Codex. Pin-the-
  equivalence work is concentrated in the prolongation unit.
- **Sequencing layer:** ~30%. Codex routes Lie groups → variational
  calculus → Noether (point particle) → moment map → symplectic
  reduction → integrable systems (finite-dim). Olver inserts a parallel
  track: Lie groups → jet bundle → prolongation → symmetry criterion
  → group-invariant solutions → Noether-for-PDEs → generalised
  symmetries → recursion → bi-Hamiltonian → Lax. **Punch-list items
  open a new `05.05.05`–`05.05.10` block on jet-bundle / symmetry-of-
  DE, and a new `05.09.08`–`05.09.12` block on integrable PDEs.**
- **Intuition layer:** ~15%. Sophus Lie's original geometric intuition
  (symmetry-orbits-foliate-the-equation, reduction-by-quotient,
  invariants-solve-the-equation) is not anywhere in Codex.
- **Application layer:** ~5%. KdV soliton, heat-equation self-similar
  Gaussian, wave-equation conformal symmetries, Bianchi identity as
  second-Noether — all canonical worked examples, all absent.

After priority-1 batch (5 items): theorem layer ~50%, algorithm layer
~60%, application layer ~40%.
After priority-1+2 (10 items): ~75%, ~80%, ~70%.
Priority-1+2+3 (12 items): ~90%, ~85%, ~80%.
Full ≥95% requires the deferred Anderson variational-bicomplex pass
(out of scope; see §5).

---

## §3 Gap punch-list (priority-ordered)

The Codex symplectic / mechanics chapter is mature on the finite-
dimensional side (Arnold + Cannas + Landau already shipped ~62 units in
`05-symplectic/`, including the moment-map / symplectic-reduction block
and the Arnold-Liouville / KAM / Nekhoroshev integrable-systems block).
Olver exposes gaps on (a) the jet-bundle / prolongation / symmetry-of-
DE machinery (Ch. 2-3) and (b) the infinite-dimensional Hamiltonian /
bi-Hamiltonian / recursion-operator / Lax-pair integrable-PDE side
(Ch. 5, 7). The Noether unit (`05.00.04`) needs deepening to cover the
full PDE Noether-1 plus a new Noether-2 unit.

Recommended slot ranges:
- **Extend `05.05-lagrangian/`** (currently `05.05.01-04`: Lagrangian
  submanifold, Weinstein, generating functions, Hamilton-Jacobi) with
  the jet-bundle / prolongation / symmetry-of-DE block at
  `05.05.05`–`05.05.10`.
- **Extend `05.09-integrable/`** (currently `05.09.01-07`: KAM,
  adiabatic, Birkhoff, Williamson, Euler-Arnold, Nekhoroshev,
  exponential-accuracy) with the infinite-dimensional integrable-PDE
  block at `05.09.08`–`05.09.12`.
- **Deepen `05.00.04-noether-theorem`** with the full PDE Noether-1
  prolongation proof.

### Priority 1 — Olver-canonical load-bearing additions (5 items)

1. **`05.05.05` Jet bundle $J^k(X, U)$ and total derivative.** Olver
   §2.1-§2.2 anchor; Lie 1872 (originator of contact transformations
   on $J^1$); Ehresmann 1951 (formal jet bundle); Anderson 1989
   *Variational Bicomplex* (modern reference). Three-tier; ~2200 words.
   Beginner: $J^1(X, U)$ as the space of $(x, u, u_x)$-tuples;
   $J^k$ adds higher derivatives. Intermediate: jet bundle as a smooth
   manifold, total derivative $D_i = \partial_{x^i} + \sum_J u^\alpha_{J, i}
   \partial_{u^\alpha_J}$, contact ideal generated by
   $\theta^\alpha_J = du^\alpha_J - u^\alpha_{J, i} dx^i$. Master:
   contact-form characterisation of jets of functions; $J^\infty$ as
   inverse limit; Cartan distribution. **Prerequisite for everything
   downstream.**

2. **`05.05.06` Prolongation of vector fields and the infinitesimal symmetry criterion.** Olver §2.3-§2.4 anchor; Lie 1881 (originator);
   Ovsiannikov 1962 *Group Properties of Differential Equations*
   (Russian, modern algorithm); Olver's prolongation formula. Three-
   tier; ~2400 words. Beginner: a one-parameter symmetry group of an
   ODE/PDE has an infinitesimal generator; prolong it to jet space to
   act on derivatives. Intermediate: prolongation formula
   $\mathrm{pr}^{(k)}\mathbf{v} = \mathbf{v} + \sum_\alpha \sum_J
   \phi^\alpha_J \partial_{u^\alpha_J}$ with
   $\phi^\alpha_J = D_J(\phi^\alpha - \sum_i \xi^i u^\alpha_i) + \sum_i
   \xi^i u^\alpha_{J,i}$; **infinitesimal symmetry criterion
   $\mathrm{pr}^{(k)}\mathbf{v}[\Delta_\nu] = 0$ on $\Delta = 0$**.
   Master: worked computation of the heat-equation symmetry algebra
   $\mathbf{v} = a \partial_t + b \partial_x + c x \partial_x + d \partial_u
   + \ldots$ via determining equations; isomorphism with extended
   Heisenberg algebra. **Olver-canonical algorithmic unit; the
   computational core of the whole symmetry-of-DE programme.**

3. **`05.05.07` Group-invariant solutions and symmetry reduction.**
   Olver §3.1-§3.4 anchor; Lie 1895 (originator of reduction-by-
   quotient); Bluman-Kumei §1.3 (modern algorithmic version); Olver
   §3.3 KdV soliton derivation. Three-tier; ~2200 words. Beginner: if
   $G$ is a symmetry group of $\Delta$ and $H \leq G$, the
   $H$-invariant solutions of $\Delta$ satisfy a reduced equation on
   the orbit space $M/H$ with fewer independent variables. Intermediate:
   construction of invariants $I_1, \ldots, I_{n - r}$ for the
   $r$-dimensional $H$-action, reduced equation in invariant
   coordinates. Master: **KdV travelling-wave reduction**: the
   $\langle \partial_x, \partial_t \rangle$ subgroup invariants are
   $\xi = x - ct$ and $u$, reducing $u_t = 6 u u_x + u_{xxx}$ to the
   ODE $-cu' = 6 u u' + u'''$, integrated to $u(\xi) = \tfrac{1}{2}
   c \, \mathrm{sech}^2(\tfrac{1}{2}\sqrt c \,\xi)$ (the soliton
   solution). **Heat-equation Gaussian as similarity solution from
   the scaling subgroup.** Bridge to `02.12.*` ODE reduction-of-order.

4. **`05.05.08` Noether's second theorem and the Bianchi identity.**
   Olver §5.3-§5.4 anchor; Noether 1918 *Invariante
   Variationsprobleme* (originator — Theorem II); Brading-Brown 2003
   *Noether's Theorems and Gauge Symmetries* (modern philosophical
   review). Three-tier; ~2000 words. Beginner: a *gauge* symmetry — a
   symmetry whose parameters are arbitrary functions of spacetime, not
   just constants — gives not a conservation law but an *identity*
   among the Euler-Lagrange equations. Intermediate: Olver's statement
   in jet-bundle form: if $\mathbf{v}_f$ depends on an arbitrary
   function $f(x)$ as a generalised variational symmetry, then
   $\mathbf{E}(\mathcal{L}) \cdot Q[f] \equiv \mathrm{Div}\, P[f]$
   holds *identically*, giving a linear differential relation between
   the Euler-Lagrange expressions $\mathbf{E}(\mathcal{L})_\alpha$.
   Master: **Bianchi identity in general relativity** as second-
   Noether consequence of diffeomorphism invariance of the Einstein-
   Hilbert action: $\nabla^\mu G_{\mu\nu} = 0$ holds for the Einstein
   tensor regardless of the field equations, because $G_{\mu\nu}$ is
   the Euler-Lagrange derivative and diff invariance is a gauge
   symmetry. **Olver-canonical; closes the gauge-conservation /
   identity distinction that physics texts routinely conflate.**

5. **`05.05.09` Generalised symmetries (Lie-Bäcklund) and recursion operators.** Olver §5.1-§5.2 anchor; Bäcklund 1880 (originator of
   contact transformations beyond first order); Lie 1888-1893
   (originator of higher-symmetry programme); Vinogradov 1984
   *Symmetries and Conservation Laws of Partial Differential
   Equations* (modern revival); Magri 1978 (recursion operator for
   KdV); Olver §5.2 (Olver's textbook treatment). Three-tier; ~2400
   words. Beginner: classical Lie-point symmetries depend only on
   $(x, u)$; *generalised* symmetries are vector fields whose
   coefficients depend on derivatives $u, u_x, u_{xx}, \ldots$ up to
   arbitrary order. They form a Lie algebra under the *characteristic
   commutator*. Intermediate: a *recursion operator* is a linear
   operator on the space of generalised symmetries; if $\mathbf{v}_Q$
   is a symmetry then so is $\mathbf{v}_{\mathcal{R}Q}$. KdV's
   recursion operator $\mathcal{R} = D_x^2 + \tfrac{2}{3} u +
   \tfrac{1}{3} u_x D_x^{-1}$ generates the infinite KdV hierarchy
   $u_t^{(k)} = K^{(k)}[u]$. Master: characteristic form $\mathbf{v}_Q
   = Q^\alpha[u] \partial_{u^\alpha}$ minus its prolongation; algebra
   structure under the Lie-Bäcklund commutator; **classical Lie-point
   symmetries embed as the sub-Lie-algebra of $Q$'s linear in
   derivatives**. **Olver-canonical; algebraic-geometric backbone of
   integrable-system theory.**

### Priority 2 — Olver-distinctive applications and infinite-dim Hamiltonian (5 items)

6. **`05.09.08` Infinite-dimensional Poisson manifolds and Hamiltonian evolution equations.** Olver §7.1-§7.2 anchor; Gardner 1971
   (originator — KdV as a Hamiltonian system on the space of
   functions); Faddeev-Takhtajan *Hamiltonian Methods in the Theory
   of Solitons* (full modern treatment). Three-tier; ~2200 words.
   Beginner: an evolution equation $u_t = K[u]$ is Hamiltonian if there
   exists a functional $\mathcal{H}[u]$ and a "Poisson tensor"
   $\mathcal{D}$ such that $K = \mathcal{D} \delta\mathcal{H}/\delta u$.
   Intermediate: Poisson tensor as a skew-symmetric differential
   operator $\mathcal{D}$ on the function space; the bracket
   $\{F, G\} = \int (\delta F/\delta u)\, \mathcal{D}\, (\delta G/\delta u)\, dx$
   must satisfy Jacobi (a non-trivial functional-derivative
   computation). Master: variational derivative $\delta/\delta u$ on
   the variational complex; KdV as Hamiltonian system with
   $\mathcal{D} = D_x$ and $\mathcal{H} = \int (\tfrac{1}{2} u_x^2
   - u^3)\, dx$, giving $u_t = D_x \delta\mathcal{H}/\delta u =
   u_{xxx} + 6 u u_x$. **Olver-canonical; opens the integrable-PDE
   chapter.**

7. **`05.09.09` Bi-Hamiltonian structure and the Magri pair.** Olver
   §7.3 anchor; Magri 1978 *A Simple Model of the Integrable
   Hamiltonian Equation* (originator); Olver §7.3 textbook
   formulation. Three-tier; ~2200 words. Beginner: KdV admits *two*
   distinct Hamiltonian formulations with two different Poisson
   tensors; the compatibility of these two structures forces the
   infinite hierarchy of conserved charges. Intermediate: two Poisson
   tensors $\mathcal{D}_1, \mathcal{D}_2$ are *compatible* if every
   linear combination $\alpha \mathcal{D}_1 + \beta \mathcal{D}_2$ is
   itself a Poisson tensor; the recursion operator
   $\mathcal{R} = \mathcal{D}_2 \mathcal{D}_1^{-1}$ then generates a
   hierarchy of mutually-commuting Hamiltonians. Master: KdV Magri
   pair $\mathcal{D}_1 = D_x$, $\mathcal{D}_2 = D_x^3 + \tfrac{2}{3}
   (u D_x + D_x u)$; verify compatibility (Jacobi for the pencil);
   recover the recursion operator
   $\mathcal{R} = \mathcal{D}_2 \mathcal{D}_1^{-1} = D_x^2 +
   \tfrac{2}{3} u + \tfrac{1}{3} u_x D_x^{-1}$ from item 5; the KdV
   conserved charges $H_n = \int u^{n+1} + \ldots$ form an infinite
   Liouville-integrable family. **Olver-canonical; algebraic-
   geometric backbone of integrable PDE theory.**

8. **`05.09.10` Lax pairs and isospectral deformation.** Olver §7.5
   anchor; Lax 1968 *Integrals of Nonlinear Equations of Evolution
   and Solitary Waves* (originator); Olver §7.5 textbook treatment;
   Gardner-Greene-Kruskal-Miura 1967 (inverse scattering predecessor).
   Three-tier; ~1800 words. Beginner: an evolution equation
   $L_t = [P, L]$ for two linear operators $L, P$ on function space
   says the eigenvalues of $L$ are conserved as the underlying field
   evolves — the operator $L$ moves by similarity. Intermediate: KdV
   Lax pair $L = -\partial_x^2 + u$, $P = -4\partial_x^3 + 6u\partial_x
   + 3u_x$; verify $L_t - [P, L] = (u_t - 6 u u_x - u_{xxx}) \cdot \mathrm{id}$.
   Master: bridge to inverse scattering: $L\psi = \lambda \psi$ defines
   a scattering problem; the Lax equation says the scattering data
   evolves linearly in $t$; reconstruction recovers $u(x, t)$ via the
   Gelfand-Levitan-Marchenko inverse-scattering integral equation.
   **Pointer-tier OK in Master; full inverse scattering deferred.**
   **Olver introduces; full Faddeev-Takhtajan treatment out of scope.**

9. **`05.09.11` Master symmetries and the Fuchssteiner construction.**
   Olver §7.4 anchor; Fuchssteiner 1983 (originator); Olver §7.4
   textbook treatment. Three-tier; ~1600 words. Beginner: in an
   integrable hierarchy, some symmetries do not commute with each
   other — they generate the recursion operator by Lie bracket. These
   are *master symmetries*. Intermediate: a master symmetry $\tau$
   for a hierarchy $\{K^{(n)}\}$ satisfies $[\tau, K^{(n)}] = (n+1)
   K^{(n+1)}$, so iterated bracketing with $\tau$ generates the
   hierarchy. Master: KdV master symmetry $\tau = x u_x + 3 t u_t$
   (a "scaling-time" rotation); verify $[\tau, K^{(1)}] = 2 K^{(2)}$;
   the master-symmetry algebra is a Virasoro extension of the
   hierarchy. **Olver-distinctive; bridge to `03.11.03` Virasoro
   algebra.**

10. **`05.05.10` Lie's classification of second-order ODEs and the symmetry algorithm for ODEs.** Olver §3.5 anchor; Lie 1891
    *Vorlesungen über Differentialgleichungen* (originator);
    Bianchi 1918 (classification of $\mathbb{R}^2$ vector-field
    algebras); Ibragimov 1999 *Elementary Lie Group Analysis and
    Ordinary Differential Equations* (modern algorithmic textbook).
    Three-tier; ~1800 words. Beginner: a second-order ODE admits a
    symmetry algebra of dimension 0, 1, 2, 3, or 8 (the last case is
    point-equivalent to $y'' = 0$). Lower-dimensional cases reduce
    to first-order or quadrature. Intermediate: reduction-of-order by
    a single symmetry — substitute invariants of the symmetry as new
    variables, get a first-order ODE in the new variables.
    Master: **the Lie classification table** for second-order ODEs by
    point-symmetry algebra; the four canonical forms for the
    2-dimensional Lie algebras on $\mathbb{R}^2$. **Bridge to
    `02.12.*` ODE chapter; gives the missing point-symmetry-reduction
    algorithm.**

### Priority 3 — depth on existing units (3 items)

11. **Deepen `05.00.04-noether-theorem`.** Add a Master-tier section
    anchored to Olver §4.1-§4.3: the full **PDE Noether-1 theorem
    with prolongation**. Currently the unit's master section quotes
    Olver Ch. 4 in the field-theory paragraph and states the current
    formula $J^\mu_X = (\partial \mathcal{L}/\partial u^\alpha_\mu)
    X^\alpha - \mathcal{L} \xi^\mu$ in three lines. Replace with:
    (a) prolongation of $\mathbf{v}$ to act on $\mathcal{L}[u^{(k)}]$;
    (b) variational symmetry condition
    $\mathrm{pr}^{(k)}\mathbf{v}(\mathcal{L}) + (\mathrm{Div}\xi)
    \mathcal{L} = \mathrm{Div} B$; (c) **explicit construction of
    the conserved current** from $\mathbf{v}$, $\mathcal{L}$, $B$;
    (d) Maxwell stress-energy tensor as Noether current of spacetime
    translation; (e) generalised-symmetry generalisation pointer to
    `05.05.09`. **Adds Olver as a co-anchor alongside Noether 1918.**
    No new ID.

12. **Deepen `05.05.04-hamilton-jacobi`.** Add a Master-tier section
    anchored to Olver §6.3: the **method of characteristics for
    first-order PDEs** as the dual of Hamilton-Jacobi. Olver presents
    H-J and characteristics as two halves of the same theorem: H-J
    is the symplectic perspective, characteristics is the contact /
    jet-bundle perspective. Add this duality explicitly; pin
    notation $J^1(M, \mathbb{R})$ vs cotangent bundle $T^*M$. No new
    ID.

13. **Deepen `09.03.01-noethers-theorem`.** This is the section-9
    duplicate of `05.00.04`. Either (a) re-target it as the
    physicist-pedagogy point-particle Noether and link the PDE /
    generalised-symmetry treatment to `05.00.04` + `05.05.08` +
    `05.05.09`, or (b) merge it into `05.00.04` as a redirect. **Audit
    decision deferred; current recommendation = option (a) re-target.**
    Add Olver Ch. 4-5 citation at intermediate tier so the dual-Noether
    sequence (physics-pedagogy + math-canonical) is internally cross-
    linked. No new ID.

### Priority 4 — survey / deferred (2 items)

14. **`05.09.12` Casimir functions of degenerate Poisson structures (pointer).** Olver §6.2 anchor (degenerate Poisson on Lie-Poisson
    $\mathfrak{g}^*$); Marsden-Ratiu §10 (modern treatment). Pointer-
    tier only; ~1000 words. Definition: a *Casimir* is a function
    whose Poisson bracket with everything vanishes. For Lie-Poisson
    on $\mathfrak{g}^*$, Casimirs are the adjoint-invariant
    polynomials. Worked: $\mathrm{tr}(J^2)$ for $\mathfrak{so}(3)^*$
    is the Casimir whose level sets are the coadjoint orbits =
    angular-momentum spheres. **Adjacent to `05.03.01-coadjoint-
    orbit` (already shipped); deferable.**

15. **Survey-tier pointer: variational bicomplex.** Anderson 1989
    *The Variational Bicomplex* preprint, Olver §5.4 reference.
    Pointer-tier survey unit (~800 words) noting that the full
    cohomological framework for Noether-1 / Noether-2 / generalised
    symmetries / recursion operators is the variational bicomplex of
    Vinogradov-Anderson; the symmetry algebra of $\Delta$ is the
    horizontal cohomology of an auxiliary complex on $J^\infty$.
    **Deferable; opens the door to algebraic-D-module treatment but
    not on FT.** No new ID assigned — slot at `05.05.11` if produced.

---

## §4 Implementation sketch

**Minimum Olver-equivalence batch** = priority 1 only (items 1-5):
5 new units. Estimates:

- ~3 hours per typical new unit; items 2 (prolongation + symmetry
  criterion) and 5 (generalised symmetries) are ~4 h each given the
  algebraic-geometric depth and the originator-prose targets.
- Priority 1: 3 typical × 3 h + 2 hard × 4 h = ~17 hours.
- Priority 1+2: ~17 + 5 new × 3.5 h = ~34.5 hours.
- Priority 1+2+3 (excl. deferred items 14, 15): ~34.5 + 3 deepenings ×
  1.5 h = ~39 hours.

**Originator-prose targets.** Olver is **partly originator** — his
modern prolongation-formula algorithmisation, generalised-symmetry
characteristic-form algebra, and bi-Hamiltonian treatment are
Olver-canonical (textbook-canonical, not 1880s-originator). Joint
originator-citations:

- **Item 1 (jet bundle):** Lie 1872 (contact 1-form on $J^1$);
  Ehresmann 1951 (formal jet bundle); Olver §2.1 (Codex-canonical
  modern reference).
- **Item 2 (prolongation + symmetry criterion):** Lie 1881 (originator
  of symmetry-of-DE programme); Ovsiannikov 1962 (Russian modern
  algorithm); **Olver §2.3-§2.4 — canonical modern formulation,
  mandatory originator-prose for the prolongation formula.**
- **Item 3 (group-invariant solutions):** Lie 1895 (originator of
  reduction-by-quotient); Olver §3.1-§3.4 (textbook).
- **Item 4 (Noether-2 / Bianchi):** **Noether 1918 — originator,
  mandatory originator-prose** (Olver §5.3 is the modern reformulation
  in jet-bundle language; the originator paper does both theorems).
- **Item 5 (generalised symmetries / recursion):** Bäcklund 1880
  (originator of contact transformations); **Magri 1978 — originator
  of the recursion-operator concept, mandatory originator-prose**;
  Vinogradov 1984 (modern revival); Olver §5.1-§5.2 (textbook).
- **Item 6 (infinite-dim Hamiltonian PDE):** **Gardner 1971 —
  originator of KdV as a Hamiltonian system, mandatory originator-
  prose.**
- **Item 7 (bi-Hamiltonian):** **Magri 1978 — originator, mandatory
  originator-prose** (same paper as item 5).
- **Item 8 (Lax pair):** **Lax 1968 — originator, mandatory
  originator-prose.**
- **Item 9 (master symmetries):** **Fuchssteiner 1983 — originator,
  mandatory originator-prose.**
- **Item 10 (Lie classification of ODEs):** Lie 1891 *Vorlesungen über
  Differentialgleichungen* — originator.

**Notation crosswalk concerns (Olver-specific).** Recorded inline in
the Master sections of each new unit:

- **Jet coordinates:** Olver writes $u^\alpha_J$ with multi-index $J =
  (j_1, \ldots, j_k)$ for the $\alpha$-th dependent variable's $J$-th
  derivative; Codex/Cannas use $J^k$ informally. **Resolution:** adopt
  Olver's multi-index convention as Codex-canonical for the new units;
  pin equivalence with the symmetric-tensor convention $u^\alpha_{(j_1
  \ldots j_k)}$.
- **Vector fields on $X \times U$ vs on jet space:** Olver writes
  $\mathbf{v} = \xi^i \partial_{x^i} + \phi^\alpha \partial_{u^\alpha}$
  on the base; prolongation $\mathrm{pr}^{(k)}\mathbf{v}$ acts on
  $J^k$. Pin the distinction: $\mathbf{v}$ is on the base,
  $\mathrm{pr}^{(k)}\mathbf{v}$ is on $J^k$; both are denoted by the
  same symbol in many physics texts.
- **Total derivative $D_i$:** Olver §2.2 defines $D_i =
  \partial_{x^i} + \sum_\alpha \sum_J u^\alpha_{J, i}
  \partial_{u^\alpha_J}$ as the formal extension of $\partial_{x^i}$
  to jet space. Distinguish from partial derivative $\partial_{x^i}$
  on $X$ alone — these are confused freely in physics literature.
- **Characteristic form of a symmetry:** Olver's $\mathbf{v}_Q$ with
  characteristic $Q^\alpha = \phi^\alpha - \sum_i \xi^i u^\alpha_i$
  removes the base-level translation; **all of Olver's generalised-
  symmetry algebra uses $Q$, not $(\xi, \phi)$**. Pin: Lie-point
  symmetry $\mathbf{v}$ ↔ characteristic $Q^\alpha = \phi^\alpha - \xi^i
  u^\alpha_i$ linear in derivatives; generalised symmetry ↔ $Q$
  arbitrary order.
- **Functional derivative $\delta/\delta u$:** Olver §7.1; Codex
  uses Cannas-shipped variational-calculus convention; pin
  equivalence between Olver's formal Lagrange-multiplier definition
  and the modern variational-bicomplex Euler-Lagrange operator.
- **Poisson tensor as differential operator vs as bivector:** Olver
  Ch. 7 uses the *differential operator* picture $\mathcal{D}$ acting
  on $\delta F/\delta u$; the finite-dim Codex symplectic chapter
  uses the *bivector* picture $\pi^{ij}\partial_i \otimes \partial_j$.
  Pin: $\mathcal{D}$ is the integral kernel of $\pi$ in infinite
  dimensions.

**DAG edges.** New prerequisites for priority-1+2:

- `05.05.05` (jet bundle) ← {`05.10.01` contact-manifold,
  `03.02.03` smooth-maps, `03.04.02` differential-forms};
  → `05.05.06`, `05.05.07`, `05.05.08`, `05.05.09`, `05.05.10`
- `05.05.06` (prolongation + symmetry criterion) ←
  {`05.05.05` jet bundle, `03.03.01` Lie group, `03.03.02` group
  action, `03.04.01` Lie algebra}
- `05.05.07` (group-invariant solutions) ← {`05.05.06`, `02.12.05`
  rectification, `03.03.02` group action}
- `05.05.08` (Noether-2 + Bianchi) ← {`05.00.04` Noether-1,
  `05.05.05` jet bundle, `13.04.01` Einstein field equations}
- `05.05.09` (generalised symmetries + recursion) ←
  {`05.05.06`, `05.05.08`, `05.05.05`}; → `05.09.08`, `05.09.09`
- `05.05.10` (Lie classification of ODEs) ←
  {`05.05.06`, `02.12.01`-`02.12.05` ODE block}
- `05.09.08` (infinite-dim Poisson / Hamiltonian PDE) ←
  {`05.02.02` Poisson bracket, `05.05.09`, `03.04.08` variational-
  calculus}
- `05.09.09` (bi-Hamiltonian / Magri pair) ←
  {`05.09.08`, `05.05.09`}
- `05.09.10` (Lax pair) ← {`05.09.08`, `05.09.09`}
- `05.09.11` (master symmetries) ← {`05.09.09`, `03.11.03` Virasoro
  algebra}

**Chapter structure.** Two extensions, no new chapter folder:

- Extend `05.05-lagrangian/`: items 1, 2, 3, 4, 5, 10
  (six new units in `05.05.05`–`05.05.10`).
- Extend `05.09-integrable/`: items 6, 7, 8, 9
  (four new units in `05.09.08`–`05.09.11`). Optional item 14 slots
  at `05.09.12`.
- Plus deepenings 11, 12, 13.

**Composite Olver + prior batches.** Most efficient production order:

- Items 1, 2 are foundational (jet bundle + prolongation) — these
  must ship first; everything else depends on them. Priority-block.
- Item 4 (Noether-2 / Bianchi) is the **most physics-leveraged single
  unit** in the entire plan; closes the gauge-conservation / identity
  distinction load-bearing across `13.04.01` (Einstein equations),
  `10.04.01` (Maxwell), and gauge-theory `03.07.*`. **Apex-adjacent.**
- Items 5-9 form a coherent sub-batch on integrable PDEs (generalised
  symmetries → infinite-dim Hamiltonian → bi-Hamiltonian → Lax pair
  → master symmetries); produce in this order.
- Item 10 (Lie classification of ODEs) is independent of items 5-9
  and can ship in parallel; bridges to `02.12.*` ODE chapter.
- Deepenings 11, 12, 13 are low-effort and can ship interleaved.

**Apex unit designation.** Item 4 (`05.05.08` Noether-2 / Bianchi) is
a **near-apex** unit — requires Noether 1918 originator-prose,
load-bearing across general relativity / gauge theory / Yang-Mills,
fixes a well-known physics-pedagogy confusion (Bianchi-as-Noether-1).
Items 7 (`05.09.09` bi-Hamiltonian) and 5 (`05.05.09` generalised
symmetries) are also high-leverage; the Magri-pair construction
specifically requires careful exposition.

---

## §5 What this plan does NOT cover

- **Olver Ch. 1 (manifolds + Lie groups + Lie algebras + Lie's three
  theorems).** Recap chapter; Helgason (`07.04.*`), `03.02.*`,
  `03.03.*`, `03.04.01` already cover this material at greater depth.
  No Olver-distinctive content.
- **Olver Ch. 6 (finite-dim Hamiltonian systems).** Recap chapter;
  Arnold + Cannas have already shipped the moment-map / symplectic-
  reduction / coadjoint-orbit infrastructure at `05.02.*`, `05.03.*`,
  `05.04.*`, `05.05.*`. Only the **degenerate-Poisson / Casimir**
  angle (priority-4 item 14) is Olver-distinctive at the topic level,
  and is deferable.
- **Inverse scattering transform (Faddeev-Takhtajan territory).**
  Item 8 (Lax pair) stops at the Lax-equation level; the full inverse-
  scattering apparatus (Gelfand-Levitan-Marchenko, Riemann-Hilbert
  reformulation, scattering data evolution) is out of scope. **If
  Faddeev-Takhtajan is added to FT later, dedicated audit.**
- **Variational bicomplex (Anderson-Vinogradov).** Pointer item 15
  only. The full cohomological framework for symmetries / conservation
  laws / recursion operators on $J^\infty$ is the variational
  bicomplex; Olver §5.4 references it but does not develop it.
- **D-module / algebraic-geometric treatment of symmetries.**
  Bernstein, Kashiwara, Vinogradov diffieties — out of scope.
- **Numerical symmetry-finding software.** Olver ends each chapter
  with hand-computation examples; modern software (MAPLE `Lie` package,
  Mathematica `MathLie`, the SADE / GeM packages) is referenced but
  not developed in the book. Out of scope.
- **Olver's exercises.** ~300 exercises across the seven chapters; the
  worked-example layer for items 2, 3, 5, 7 already extracts the
  highest-leverage exercises into Master-tier worked computations.
  Dedicated exercise-pack pass deferred unless curriculum expands
  into a Lie-symmetry-of-DE problem-set track.
- **Sine-Gordon / NLS / KP hierarchies.** Items 7-8 use KdV as the
  canonical worked exemplar; sine-Gordon and nonlinear Schrödinger
  share the bi-Hamiltonian / Lax / recursion structure but are not
  separately punch-listed. Bridge units producible later from items
  7-8 if needed.
- **Connection to algebraic geometry of integrable systems
  (Hitchin systems, Beauville-Mukai, Krichever).** Out of FT scope
  for this audit; lives in the algebraic-geometry chapter (`04.*`).

---

## §6 Acceptance criteria for FT equivalence (Olver 1.16)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, *Applications of
Lie Groups to Differential Equations* is at equivalence-coverage when:

- ≥95% of Olver's named results in Chapters 2-5, 7 map to Babel Bible
  units at Olver-equivalent depth (currently ~10%; after priority-1
  ~50%; after priority-1+2 ~75%; after priority-1+2+3 ~90%; after
  priority-4 ~95%). **Items 2 (prolongation criterion), 4 (Noether-2),
  5 (generalised symmetries), 7 (bi-Hamiltonian) are the highest-
  leverage individual gaps.**
- ≥80% of Olver's worked symmetry computations (heat, wave, KdV,
  Burgers, Navier-Stokes symmetry algebras; KdV soliton; heat
  self-similar Gaussian) appear as Master-tier worked examples in a
  Codex unit (currently ~0%; priority-1+2 brings to ~70%).
- Notation crosswalk pinned in Master sections per §4. The jet
  multi-index $u^\alpha_J$ and total-derivative $D_i$ conventions
  must be consistent across `05.05.05`–`05.05.10` and
  `05.09.08`–`05.09.11`.
- DAG: for every Lie's-algorithm → reduce-by-symmetry chain in Olver
  (Ch. 2 → Ch. 3 → Ch. 5 → Ch. 7), an unbroken prerequisite chain in
  Babel Bible's DAG. Currently breaks at `05.05.05` (jet bundle) — item 1
  closes it.
- Pass-W weaving connects new units to existing `05.00.04` Noether,
  `05.03.01` coadjoint-orbit, `05.04.01` moment-map, `05.05.04`
  Hamilton-Jacobi, `05.09.01-07` integrable block, `05.10.01-04`
  contact, `02.12.*` ODE, `13.04.01` Einstein equations, `03.11.03`
  Virasoro algebra.

The 5 priority-1 new units (items 1-5) close the Olver-canonical jet-
bundle / symmetry-of-DE gap. Priority-2 (items 6-10) closes the
integrable-PDE / Lie-classification-of-ODE side. Priority-3 (items
11-13) cleans up the existing Noether and Hamilton-Jacobi units.
Priority-4 (items 14, 15) deferable survey pointers.

**Prerequisite alert.** Olver sits at FT 1.16, deep into Section 1.
Prerequisite chains: Sternberg 1.10 *Differential Geometry* (manifolds,
Lie groups), Cannas 1.11 (symplectic geometry, Hamiltonian systems),
Sternberg 1.14 *Curvature in Mathematics and Physics* (variational
calculus on jets), Sternberg 1.15 *Group Theory and Physics* (Lie-
algebra representations) — all should be at FT-equivalence before
Olver's units land. The Codex Lie-theory chapter (`07.04.*`,
`03.03.*`) is at Helgason-equivalence; the symplectic chapter is at
Arnold + Cannas + Landau equivalence (`05.00.*` through `05.10.*`).
Prerequisites for Olver punch-list items 1-10 are all shipped.

**Honest scope.** Mid-to-large equivalence gap. The Babel Bible has
been *citing* Olver Ch. 4-5 in the existing `05.00.04` Noether unit
without shipping the Olver-canonical jet-bundle / prolongation / Lie-
Bäcklund / bi-Hamiltonian machinery itself. Priority-1+2 batch is
**10 new units + 3 deepenings** — comparable in scope to the Landau
priority-1+2 batch but with a distinctly different center of mass
(Landau added physicist worked examples to the coordinate-physics
side; Olver adds the jet-bundle / generalised-symmetry / integrable-
PDE algebraic-geometric backbone, none of which Landau touches).

---

## §7 Sourcing

- **Status:** BUY per `docs/catalogs/FASTTRACK_BOOKLIST.md`.
- **No local copy resolved.** WebFetch fallback was not exercised; the
  book is sufficiently canonical that the TOC structure and the
  signature contributions (prolongation formula, infinitesimal
  symmetry criterion, KdV bi-Hamiltonian structure, recursion
  operator) are unambiguous from secondary references. **If a local
  copy becomes available, re-run this audit to inventory exercises
  and to deepen worked-example coverage.**
- **Citation form:** P. J. Olver, *Applications of Lie Groups to
  Differential Equations*, 2nd ed., Graduate Texts in Mathematics 107
  (Springer-Verlag, New York, 1993). ISBN 0-387-94007-3.
- **First edition (1986):** substantively superseded; the 1993 second
  edition adds Chs. 5-7 in their full form (Lie-Bäcklund symmetries,
  recursion operators, Hamiltonian methods for evolution equations,
  bi-Hamiltonian structure, master symmetries, Lax pairs). Cite the
  1993 edition as canonical.
- **Author's website:** Peter Olver maintains a personal page at
  University of Minnesota with errata, supplementary notes, and a
  later *Equivalence, Invariants, and Symmetry* (Cambridge 1995) that
  develops the moving-frame method as a follow-on. **Errata page is
  the authoritative correction source.**
- **Peer sources cited in this audit (peer-anchor for §1):**
  - G. W. Bluman, S. Kumei, *Symmetries and Differential Equations*,
    Applied Mathematical Sciences 81 (Springer, 1989) — algorithmic
    companion; the canonical "second textbook" of the Lie-symmetry
    method, more example-driven than Olver, less geometric.
  - H. Stephani, *Differential Equations: Their Solution Using
    Symmetries* (Cambridge University Press, 1989) — the relativist's
    introduction; less algebraic depth but more worked PDE examples.
  - N. H. Ibragimov, *Elementary Lie Group Analysis and Ordinary
    Differential Equations* (Wiley, 1999) and *CRC Handbook of Lie
    Group Analysis of Differential Equations*, 3 vols. (CRC, 1994-96)
    — Soviet-school encyclopaedic reference; modern algorithmic ODE
    treatment (anchored in item 10).
  - L. V. Ovsiannikov, *Group Analysis of Differential Equations*
    (Academic Press, 1982; Russian original 1962) — the Soviet
    foundational text predating Olver; canonical reference for the
    determining-equations algorithm.
  - V. I. Arnold, *Mathematical Methods of Classical Mechanics*,
    Springer GTM 60, 2nd ed. (1989) — geometric companion for the
    finite-dim Hamiltonian / integrable / symplectic side; audit plan
    at `plans/fasttrack/arnold-mathematical-methods.md`.
  - J. Marsden, T. Ratiu, *Introduction to Mechanics and Symmetry*,
    Texts in Applied Mathematics 17, 2nd ed. (Springer, 1999) —
    moment-map / reduction companion; anchored on the Noether unit.
  - L. D. Faddeev, L. A. Takhtajan, *Hamiltonian Methods in the
    Theory of Solitons* (Springer, 1987) — the comprehensive
    inverse-scattering / soliton treatment that Olver §7.5 points
    toward but does not develop.
- **Additional originator references** (cited in §3 punch-list):
  Lie 1872 *Über Komplexe, insbesondere Linien- und Kugelkomplexe*
  (contact transformations); Lie 1881 (Verhandlungen der Gesellschaft
  Deutscher Naturforscher und Aerzte, originator of infinitesimal
  symmetries of DEs); Lie 1891 *Vorlesungen über
  Differentialgleichungen mit bekannten infinitesimalen Transformationen*
  (Leipzig, Teubner); Lie 1895 *Theorie der Transformationsgruppen*
  (3 vols.); Bäcklund 1880 (Math. Annalen 17, contact transformations);
  Noether 1918 *Invariante Variationsprobleme* (Nachr. König. Gesell.
  Wiss. Göttingen); Ehresmann 1951 (jets / formal jet bundle); Gardner
  1971 (J. Math. Phys. 12, KdV as Hamiltonian system); Lax 1968 (Comm.
  Pure Appl. Math. 21, Lax pairs); Magri 1978 (J. Math. Phys. 19,
  bi-Hamiltonian + recursion operator); Fuchssteiner 1983 (Prog.
  Theor. Phys. 70, master symmetries); Vinogradov 1984 (J. Math. Anal.
  Appl. 100, generalised-symmetry programme).
- **Local copy retention.** When acquired, file at
  `reference/textbooks-extra/` (commercial-copyright Springer GTM 107).
