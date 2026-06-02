# Krantz — *Function Theory of Several Complex Variables* (Fast Track 3.23) — Audit + Gap Plan

**Book:** Steven G. Krantz, *Function Theory of Several Complex
Variables* (2nd ed., AMS Chelsea Publishing, vol. 340, 2001; reprint of
the Wadsworth 1992 2nd ed., orig. Wiley 1982). ISBN 0-8218-2724-3.

**Fast Track entry:** 3.23 (several-complex-variables slot of the
complex-geometry strand; Krantz paired with Gunning-Rossi 3.24 as the
two SCV anchors. Krantz is the **hard-analysis / integral-kernel /
PDE-estimates** anchor — Cauchy-Fantappiè kernels, the $\bar\partial$
problem with $L^2$ and subelliptic estimates, the $\bar\partial$-Neumann
problem, Bergman / Szegő kernel boundary asymptotics. Gunning-Rossi
3.24 is the **sheaf-theoretic / local-algebra** anchor — local rings of
holomorphic functions, coherent analytic sheaves, the Oka-Cartan
theory, complex spaces.)

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite per
`docs/specs/ORCHESTRATION_PROTOCOL.md`). Punch-list of new units +
deepenings to reach the equivalence threshold
(`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Not a full P1 audit
(no line-number-level exercise inventory).

The audit surface is **lopsided**. Babel Bible's several-complex-variables
footprint is two templated v0.5 units
(`06.07.01-holomorphic-several-variables`,
`06.07.02-hartogs-phenomenon`) plus a single higher-dimensional Stein
**survey** (`06.09.08`). The adjacent dimension-one Stein / Cousin /
Mittag-Leffler chapter (`06.09.01-07`, Forster-derived) and the complex-
geometry units in `03.02.*` (Dolbeault, Kähler) and `04.09.*` (Hodge,
Kodaira) supply real but *one-variable-or-projective* infrastructure.
**The genuinely several-variable hard-analysis spine that Krantz is
written around — domains of holomorphy, plurisubharmonicity, the Levi
problem, the $\bar\partial$ problem and the $\bar\partial$-Neumann
problem, integral-kernel representation (Bochner-Martinelli, Cauchy-
Fantappiè, Henkin-Ramirez), Bergman and Szegő kernel boundary behaviour
— is essentially absent.** This is one of the larger genuine topic-level
gaps in the Fast Track campaign, comparable to the Gauss-Manin gap on
the Donaldson side but wider, because Krantz's whole book lives in the
$n \geq 2$ regime Babel Bible has barely entered.

---

## §1 What Krantz's book is for

*Function Theory of Several Complex Variables* is the canonical
graduate **hard-analysis** introduction to $\mathbb{C}^n$, $n \geq 2$:
not the local-ring / sheaf route (Gunning-Rossi, Grauert-Remmert) and
not the complex-algebraic-geometry route (Griffiths-Harris), but the
**function-theoretic and PDE-estimate** route. The organising question
is: *which domains $\Omega \subset \mathbb{C}^n$ are natural for
holomorphic function theory, and what integral formulas and a-priori
estimates make the theory work?* The answer threads through domains of
holomorphy, pseudoconvexity, the Levi problem, and the $\bar\partial$
machinery, culminating in the boundary analysis of the Bergman and
Szegő kernels and the function theory on strongly pseudoconvex domains.
Roughly 13 chapters / ~550 pages:

- **Ch. 1 — Elementary theory.** Holomorphic functions of several
  variables; the Cauchy integral on a polydisc and the distinguished
  boundary; power series, multi-index calculus; the Cauchy-Riemann
  equations $\partial f / \partial \bar z_j = 0$ as an *overdetermined*
  system; **Hartogs phenomenon** and the failure of isolated
  singularities to exist for $n \geq 2$; the Weierstrass preparation
  and division theorems.
- **Ch. 2 — Domains of holomorphy and pseudoconvexity.** Domains of
  holomorphy; holomorphic convexity; **the Cartan-Thullen theorem**
  (domain of holomorphy ⟺ holomorphically convex); **plurisubharmonic
  functions**; the **Levi form** and **Levi pseudoconvexity**;
  Hartogs pseudoconvexity; equivalence of the three notions
  (the easy direction of the Levi problem).
- **Ch. 3-4 — The $\bar\partial$ problem and the Levi problem.**
  Solving $\bar\partial u = f$ with $L^2$ estimates (Hörmander's
  weighted method) on pseudoconvex domains; **solution of the Levi
  problem** (pseudoconvex ⟹ domain of holomorphy, via the
  $\bar\partial$ machinery — Oka-Bremermann-Norguet); approximation and
  the Oka-Weil theorem; Cousin I/II in $\mathbb{C}^n$.
- **Ch. 5-7 — Integral kernels.** The **Bochner-Martinelli kernel**;
  the **Cauchy-Fantappiè** formalism; the **Henkin-Ramirez kernel** for
  strongly pseudoconvex domains; integral solution operators for
  $\bar\partial$ with sup-norm and Hölder estimates; the **Bergman
  kernel** and Bergman metric; the **Szegő kernel**; **Fefferman's
  theorem** on boundary asymptotics and biholomorphic extension.
- **Ch. 8-10 — The $\bar\partial$-Neumann problem.** The Hilbert-space
  formulation; the basic estimate; **subelliptic estimates** on
  strongly pseudoconvex domains; **Kohn's solution**; boundary
  regularity; Condition $Z(q)$; connection to the tangential
  Cauchy-Riemann complex $\bar\partial_b$ and CR geometry.
- **Ch. 11-13 — Geometric function theory and rigidity.** Invariant
  metrics (Carathéodory, Kobayashi, Bergman); the **automorphism group**
  of a domain; **Fefferman's biholomorphic-mapping theorem** (smooth
  extension to the boundary); **the Wong-Rosay theorem** and
  boundary-behaviour rigidity; an analytic-disc / extension survey.

Distinctive Krantz choices (versus the Babel Bible's existing complex
infrastructure):

1. **Hard analysis over sheaves.** Where Gunning-Rossi (3.24) and the
   Babel Bible coherent-sheaf units (`04.06.02`) develop SCV through local
   rings and the Oka coherence theorems, Krantz develops it through
   integral formulas and PDE estimates. The two routes meet at the
   solution of the Levi problem; Krantz's route is the one Babel Bible has
   *zero* of.
2. **$n \geq 2$ from page one.** The Babel Bible chapter is built on
   one-variable complex analysis (`06.01.*`, 30 units) and dimension-one
   Riemann-surface theory. Krantz's entire content is the *break* from
   $n = 1$: overdetermined $\bar\partial$, automatic singularity
   removal, domains-of-holomorphy as a genuine restriction. Only two
   thin Babel Bible units (`06.07.01-02`) live here, both templated.
3. **Plurisubharmonic functions as the central tool.** PSH functions
   are the SCV analogue of subharmonic functions and the technical
   heart of pseudoconvexity, the $\bar\partial$ $L^2$-method, and the
   Levi problem. **Babel Bible has no plurisubharmonic-function unit at all**
   (the one-variable `06.01.24-dirichlet-problem-perron` covers
   subharmonic/Perron in $n=1$ only).
4. **The Levi problem as the structural theorem.** Cartan-Thullen +
   the equivalence pseudoconvex ⟺ domain of holomorphy ⟺
   holomorphically convex is the spine of Ch. 2-4. **Absent.**
5. **$\bar\partial$ with $L^2$ estimates (Hörmander).** The weighted
   $L^2$ existence theorem for $\bar\partial u = f$ on pseudoconvex
   domains. Babel Bible has a *one-variable* $\bar\partial$-Hilbert-PDE unit
   (`06.04.05-dbar-hilbert-pde`, Donaldson-derived) but not the
   several-variable Hörmander theory. **Major depth gap.**
6. **The $\bar\partial$-Neumann problem and subelliptic estimates.**
   Kohn's solution, Condition $Z(q)$, subellipticity on strongly
   pseudoconvex domains. **Zero coverage — and there is no nearby unit
   anywhere in Babel Bible.** This is the deepest Krantz-distinctive block.
7. **Integral kernels: Bochner-Martinelli, Cauchy-Fantappiè,
   Henkin-Ramirez.** The several-variable replacements for the Cauchy
   kernel. Babel Bible has the one-variable Cauchy integral
   (`06.01.02`) but no several-variable kernel of any kind. **Absent.**
8. **Bergman and Szegő kernels.** Reproducing kernels for $A^2(\Omega)$
   and $H^2(\partial \Omega)$; Bergman metric; Fefferman boundary
   asymptotics. **Absent** (no occurrence of "Bergman kernel" or "Szegő
   kernel" anywhere in `content/`).
9. **Fefferman mapping theorem and boundary rigidity.** Biholomorphic
   maps between strongly pseudoconvex domains extend smoothly to the
   boundary; Wong-Rosay. **Absent.**
10. **Invariant metrics (Carathéodory / Kobayashi / Bergman).** Babel Bible
    has no hyperbolic-metric / invariant-distance unit even in one
    variable beyond the Schwarz lemma (`06.01.12`). **Absent in the SCV
    form.**
11. **Weierstrass preparation / division.** Named in the Synthesis of
    `06.07.01` but not given a unit. The local-algebra workhorse;
    overlaps with the Gunning-Rossi 3.24 audit.
12. **CR geometry / $\bar\partial_b$.** The tangential Cauchy-Riemann
    complex on a real hypersurface; the Lewy non-solvability example.
    Pointer-level in Krantz; **absent** in Babel Bible.

Krantz stays inside the function-theory / PDE programme: it does *not*
develop coherent-sheaf cohomology in $n$ variables (Gunning-Rossi 3.24
/ Grauert-Remmert), Kähler-Hodge theory (Griffiths-Harris / Voisin —
Babel Bible has `03.02.11-12`, `04.09.*`), or the algebraic theory of
complex spaces. Those are owned by adjacent audits.

---

## §2 Coverage table (Babel Bible vs Krantz)

Cross-referenced against Babel Bible's actual several-complex-variables and
adjacent complex-geometry units. Existing relevant ids, verified by
`find content -name "*.md"`:

- **SCV proper:** `06.07.01-holomorphic-several-variables`,
  `06.07.02-hartogs-phenomenon` (both templated v0.5, Strand-C/D).
- **Dimension-one Stein / Cousin (Forster-derived, $n=1$):**
  `06.09.01-stein-riemann-surfaces`, `06.09.02-theorems-a-b`,
  `06.09.03-behnke-stein`, `06.09.04-cousin-i-additive`,
  `06.09.05-cousin-ii-multiplicative`, `06.09.06-mittag-leffler-on-rs`,
  `06.09.07-runge-approximation-on-rs`,
  `06.09.08-survey-cartan-serre-stein-theory-in-higher-dim` (the only
  higher-dim SCV unit, survey-level).
- **One-variable complex analysis (foundation):**
  `06.01.02-cauchy-integral-formula`, `06.01.04-analytic-continuation`,
  `06.01.17-weierstrass-factorization`, `06.01.18-mittag-leffler-theorem`,
  `06.01.24-dirichlet-problem-perron` (subharmonic / Perron, $n=1$).
- **One-variable $\bar\partial$ PDE:** `06.04.05-dbar-hilbert-pde`
  (Donaldson-derived, $n=1$).
- **Complex geometry (differential / projective):**
  `03.02.09-almost-complex-structure`,
  `03.02.10-complex-manifold-dolbeault`,
  `03.02.11-hermitian-kahler-form`,
  `03.02.12-kahler-identities-hodge-decomposition`,
  `03.05.19-holomorphic-vector-bundle`,
  `05.06.03-newlander-nirenberg`.
- **Sheaf / coherence (algebraic):** `04.01.01-sheaf`,
  `04.03.01-sheaf-cohomology`, `04.06.02-coherent-sheaf`,
  `04.09.11-kodaira-embedding-theorem`.

✓ = covered at Krantz-equivalent depth, △ = topic present but shallower
(typically templated v0.5 prose or one-variable / projective rather
than the several-variable hard-analysis form), ✗ = not covered.

### Ch. 1 — Elementary theory

| Krantz topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| Holomorphic functions on $\Omega \subset \mathbb{C}^n$; multi-index power series | `06.07.01-holomorphic-several-variables` | △ | Definition present but the unit is templated v0.5 ("transparent sheets" boilerplate); the multi-index Cauchy-on-the-polydisc theorem is stated, no genuine SCV worked content. Depth gap. |
| Cauchy integral on the polydisc; distinguished boundary | partial in `06.07.01` | △ | Stated in the "Key theorem" line; no distinguished-boundary geometry, no Cauchy estimates in $n$ variables. |
| Cauchy-Riemann equations as overdetermined system $\partial f/\partial \bar z_j = 0$ | `06.01.10-cauchy-riemann-equations` ($n=1$) | △ | One-variable CR shipped; the *overdeterminacy* and its consequences (compatibility condition $\bar\partial f = 0$ closed) not given a unit. |
| **Hartogs phenomenon / extension across compact holes** | `06.07.02-hartogs-phenomenon` | △ | Topic present; templated v0.5 prose, the Synthesis paragraph has the correct statement but the proof is the thin "Laurent in one variable" sketch. Depth gap. |
| **Hartogs / Bochner tube theorem; convexity of the hull** | — | ✗ | **Gap.** Hartogs extension via the Bochner-Martinelli kernel; tube domains. |
| **Weierstrass preparation & division theorems** | — | ✗ | **Gap (shared with Gunning-Rossi 3.24).** Named only in the `06.07.01` Synthesis; no unit. Local-algebra workhorse. |

### Ch. 2 — Domains of holomorphy and pseudoconvexity

This is the conceptual core of Krantz Part I, and **Babel Bible has none of
it in the several-variable form.**

| Krantz topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| **Domain of holomorphy** | — | ✗ | **Gap (high priority).** The defining object of the book. Nothing in `content/`. |
| **Holomorphic convexity; holomorphically convex hull** | — | ✗ | **Gap (high priority).** Cf. one-variable `06.09.01-stein-riemann-surfaces` mentions holomorphic convexity, but only in dimension 1. |
| **Cartan-Thullen theorem** (domain of holomorphy ⟺ holomorphically convex) | — | ✗ | **Gap (high priority).** The first structural theorem of SCV. |
| **Plurisubharmonic functions; the complex Monge-Ampère / Levi form on functions** | — | ✗ | **Gap (highest priority — central tool).** No PSH unit anywhere. The one-variable subharmonic / Perron unit `06.01.24-dirichlet-problem-perron` is the closest, and it is $n=1$. |
| **Levi form; Levi pseudoconvexity of a boundary** | — | ✗ | **Gap (high priority).** The Levi form $\sum \partial^2 \rho / \partial z_j \partial \bar z_k\, w_j \bar w_k \geq 0$ on the complex tangent space. Foundational. |
| **Hartogs pseudoconvexity; equivalence of the pseudoconvexity notions** | — | ✗ | **Gap.** $-\log d(\cdot, \partial\Omega)$ PSH ⟺ Levi pseudoconvex ⟺ exhausted by PSH. |

### Ch. 3-4 — The $\bar\partial$ problem and the Levi problem

| Krantz topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| **$\bar\partial u = f$ with Hörmander $L^2$ estimates on pseudoconvex domains** | `06.04.05-dbar-hilbert-pde` ($n=1$) | △ | A one-variable $\bar\partial$-Hilbert-PDE unit exists (Donaldson-derived). The several-variable weighted-$L^2$ Hörmander theory — the load-bearing existence theorem — is **not** present. Major depth gap; effectively a new unit. |
| **Solution of the Levi problem** (pseudoconvex ⟹ domain of holomorphy) | — | ✗ | **Gap (high priority).** Oka-Bremermann-Norguet; the structural payoff of the $\bar\partial$ machinery. |
| **Oka-Weil approximation theorem** | partial cf. `06.09.07-runge-approximation-on-rs` ($n=1$) | ✗ | **Gap.** Runge/Oka-Weil exists only in dimension one (Forster-derived). Several-variable Oka-Weil absent. |
| **Cousin I / II in $\mathbb{C}^n$** | `06.09.04`, `06.09.05` ($n=1$) | △ | Cousin I/II shipped only in dimension one. The several-variable cohomological obstruction (sheaf $H^1$, $H^2$ on Stein domains) absent. |

### Ch. 5-7 — Integral kernels

**Krantz-distinctive hard-analysis block; zero overlap with any existing
unit.**

| Krantz topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| **Bochner-Martinelli kernel & formula** | — | ✗ | **Gap (high priority).** The first several-variable reproducing kernel; gives Hartogs extension and a $\bar\partial$ solution operator. |
| **Cauchy-Fantappiè formalism** | — | ✗ | **Gap.** The general machine producing holomorphic kernels from a "generating" $(1,0)$-form. |
| **Henkin-Ramirez kernel** on strongly pseudoconvex domains; sup-norm / Hölder $\bar\partial$ estimates | — | ✗ | **Gap (high priority).** The integral solution operator that gives the *sharp* estimates Hörmander's $L^2$-method misses. |
| **Bergman kernel; Bergman metric** | — | ✗ | **Gap (high priority).** Reproducing kernel of $A^2(\Omega)$; no occurrence of "Bergman kernel" in `content/`. |
| **Szegő kernel** | — | ✗ | **Gap.** Reproducing kernel of the Hardy space $H^2(\partial\Omega)$. |
| **Fefferman boundary asymptotics of the Bergman kernel** | — | ✗ | **Gap.** Asymptotic expansion near a strongly pseudoconvex boundary; input to the mapping theorem. |

### Ch. 8-10 — The $\bar\partial$-Neumann problem

**The deepest Krantz-distinctive block. Zero Babel Bible coverage; no nearby
unit anywhere.**

| Krantz topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| **$\bar\partial$-Neumann problem** (Hilbert-space formulation; the basic estimate) | — | ✗ | **Gap (high priority — flagship).** The boundary-value problem for the complex Laplacian $\Box = \bar\partial \bar\partial^* + \bar\partial^* \bar\partial$. |
| **Subelliptic estimates; Kohn's solution** on strongly pseudoconvex domains | — | ✗ | **Gap (high priority).** $\|u\|^2_{1/2} \lesssim Q(u,u)$; the gain of $1/2$ derivative. |
| **Condition $Z(q)$; boundary regularity** | — | ✗ | **Gap.** Hörmander's $Z(q)$ for solvability/regularity in bidegree $(0,q)$. |
| **Tangential CR complex $\bar\partial_b$; Lewy non-solvability** | — | ✗ | **Gap (pointer-level acceptable).** CR geometry; the Hans Lewy example. |

### Ch. 11-13 — Geometric function theory and rigidity

| Krantz topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| **Invariant metrics: Carathéodory, Kobayashi, Bergman** | — | ✗ | **Gap.** No invariant-distance unit in Babel Bible (Schwarz-Pick `06.01.12` is the $n=1$ germ). |
| **Automorphism group of a domain** | — | ✗ | **Gap.** $\mathrm{Aut}(\Omega)$ as a Lie group; non-equivalence of polydisc and ball. |
| **Fefferman mapping theorem** (smooth boundary extension of biholomorphisms) | — | ✗ | **Gap.** Apex of the geometric-function-theory part. |
| **Wong-Rosay theorem; boundary-orbit rigidity** | — | ✗ | **Gap (priority-3).** Characterisation of the ball by a non-compact automorphism orbit. |

### Aggregate coverage estimate (vs Krantz)

- **Theorem layer:** ~10-15% topic-level, ~5% Krantz-equivalent
  proof-depth. The only genuinely-covered topics are the Hartogs
  phenomenon and the bare definition of a holomorphic function of
  several variables (both templated). Everything structural — domains
  of holomorphy, pseudoconvexity, plurisubharmonicity, the Levi
  problem, several-variable $\bar\partial$, integral kernels, the
  $\bar\partial$-Neumann problem, Bergman/Szegő, the mapping theorem —
  is absent. After priority-1: topic ~55%, proof-depth ~40%. After
  priority-1+2: topic ~85%, proof-depth ~70%.
- **Exercise layer:** Krantz's substantial exercise sets vs. Babel Bible's
  templated 7-block (and the existing `06.07.*` units carry *generic*
  exercises with no SCV content). ~3%. Deferred to a dedicated
  exercise-pack pass.
- **Worked-example layer:** ~10%. The ball $\mathbb{B}^n$ and polydisc
  $\Delta^n$ as running examples (their Bergman kernels, their
  automorphism groups, the ball/polydisc non-biholomorphism) are
  Krantz's spine of examples and appear nowhere.
- **Notation layer:** ~40% aligned. One-variable notation ($z$,
  $\partial$, $\bar\partial$) carries over; the several-variable
  apparatus (multi-index $\alpha$, $|\alpha|$, Levi form, $A^2$/$H^2$,
  $\Box$, $\rho$ defining function) is unestablished. A
  `notation/krantz.md` is warranted.
- **Sequencing layer:** ~15%. No DAG chain
  PSH → pseudoconvex → Cartan-Thullen → $\bar\partial$-$L^2$ → Levi
  problem → kernels → $\bar\partial$-Neumann exists.
- **Intuition layer:** ~10%. The geometric intuition for why $n \geq 2$
  differs (overdetermined $\bar\partial$, the Hartogs figure, "every
  pseudoconvex domain is a domain of holomorphy") is only in the
  Synthesis paragraphs of the two templated units.
- **Application layer:** ~5%. Boundary behaviour of kernels, mapping
  rigidity, CR geometry — none present.

---

## §3 Gap punch-list (P3-lite — units to write or deepen, priority-ordered)

The work here is overwhelmingly **new units**, not deepenings: Babel Bible
has barely entered $\mathbb{C}^n$. Recommended slotting opens a new
chapter **`06.10-several-complex-variables/`** (the existing
`06.07-several-variables/` holds only the two templated stubs and the
existing dimension-one Stein material is in `06.09-stein/`). The two
templated stubs `06.07.01-02` are deepened in place. Some local-algebra
items (Weierstrass preparation) **overlap the Gunning-Rossi 3.24 audit**
and are flagged `[Composite — GR 3.24]`; one unit serves both books.

**Overlap convention.** `[Krantz-only]` = sole-owned by this plan;
`[Composite — GR 3.24]` = also in the Gunning-Rossi plan, produce once.

### Priority 1 — the structural SCV spine (domains, PSH, Levi, $\bar\partial$)

Without this block Babel Bible cannot claim any SCV equivalence. These are
the load-bearing definitions and theorems every later kernel/Neumann
unit cites.

1. **`06.10.01` Domains of holomorphy and holomorphic convexity.**
   **[Krantz-only]** Krantz Ch. 2; Cartan-Thullen 1932 (Math. Ann.
   106) originator. ~2000 words. Master: domain of holomorphy;
   holomorphically convex hull $\hat K_\Omega$; **Cartan-Thullen
   theorem** (domain of holomorphy ⟺ holomorphically convex ⟺
   $\hat K_\Omega \Subset \Omega$ for all $K \Subset \Omega$). Worked:
   $\Delta^n$ and $\mathbb{B}^n$ are domains of holomorphy; $\mathbb{C}^n
   \setminus \{0\}$, $n \geq 2$, is not (Hartogs). **Highest-priority
   conceptual anchor.**

2. **`06.10.02` Plurisubharmonic functions.** **[Krantz-only]**
   Krantz Ch. 2; Oka 1942 / Lelong 1942 (originators of PSH).
   ~2000 words. Master: PSH function (usc, subharmonic on every complex
   line); the complex Hessian / Levi form $\geq 0$ for $C^2$ PSH;
   maximum principle; $-\log d(z, \partial\Omega)$; exhaustion
   functions. Worked: $\log|f|$, $|z|^2$, $\max$ of PSH. **Central
   technical tool; cited by items 3, 4, 6, 8.**

3. **`06.10.03` Pseudoconvexity and the Levi form.** **[Krantz-only]**
   Krantz Ch. 2; E. E. Levi 1910 (Ann. Mat. Pura Appl.) originator.
   ~2000 words. Master: defining function $\rho$; the **Levi form** on
   the complex tangent space $T^{1,0}_p \partial\Omega$; Levi
   pseudoconvexity; Hartogs pseudoconvexity; **equivalence** (Levi ⟺
   Hartogs ⟺ PSH-exhaustible) — the easy half of the Levi problem.
   Worked: $\mathbb{B}^n$ strongly pseudoconvex; the worm/Hartogs
   triangle as boundary cases. Depends on item 2.

4. **`06.10.04` The $\bar\partial$ problem with $L^2$ estimates
   (Hörmander).** **[Krantz-only]** Krantz Ch. 4; Hörmander 1965 (Acta
   Math. 113) originator; Kohn-Nirenberg. ~2400 words. **Largest
   priority-1 unit.** Master: the weighted $L^2$ existence theorem —
   for $\Omega$ pseudoconvex and $f$ a $\bar\partial$-closed $(0,1)$-form
   with $\int |f|^2 e^{-\varphi} < \infty$, there is $u$ with
   $\bar\partial u = f$ and $\int |u|^2 e^{-\varphi} \leq \int |f|^2
   e^{-\varphi}/c$; the Hörmander a-priori estimate via the
   Bochner-Kodaira-Morrey-Kohn identity. Cross-reference the
   one-variable `06.04.05-dbar-hilbert-pde`. Depends on items 2, 3.
   **Load-bearing for items 5, and for the kernel and Neumann blocks.**

5. **`06.10.05` Solution of the Levi problem.** **[Krantz-only]**
   Krantz Ch. 4; Oka 1953 / Bremermann 1954 / Norguet 1954
   originators. ~1800 words. Master: pseudoconvex ⟹ domain of
   holomorphy, via the $\bar\partial$-$L^2$ machinery (item 4) — local
   peak functions / separation of points; closes the equivalence
   chain with Cartan-Thullen (item 1). **Structural payoff of Part I.**
   Depends on items 1, 3, 4.

6. **Deepen `06.07.01-holomorphic-several-variables`.**
   **[Krantz-only]** Replace the templated v0.5 "transparent sheets"
   prose with genuine content: multi-index calculus, the Cauchy
   integral on the polydisc with the *distinguished* boundary, Cauchy
   estimates in $n$ variables, the overdetermined CR system
   $\bar\partial f = 0$, holomorphy ⟺ separate holomorphy (Hartogs'
   theorem on separate analyticity, *Osgood lemma*). No new id;
   Master / Key-theorem rewrite. **High priority — this is the entry
   unit and is currently boilerplate.**

7. **Deepen `06.07.02-hartogs-phenomenon`.** **[Krantz-only]** Replace
   templated prose with the Bochner-Martinelli proof of Hartogs
   extension (cite item 9), the precise statement (compact $K \Subset
   \Omega$, $\Omega \setminus K$ connected, $n \geq 2$), and the
   contrast with $n = 1$. No new id; Master rewrite. High priority.

### Priority 2 — integral kernels, $\bar\partial$-Neumann, Cousin in $\mathbb{C}^n$

Krantz's hard-analysis distinctive blocks. None overlap any existing
unit.

8. **`06.10.06` Bochner-Martinelli kernel and formula.**
   **[Krantz-only]** Krantz Ch. 1/5; Bochner 1943 / Martinelli 1938
   originators. ~1800 words. Master: the kernel
   $K(\zeta, z) = c_n \sum (\bar\zeta_j - \bar z_j)/|\zeta - z|^{2n}\,
   d\bar\zeta \wedge d\zeta$; the integral representation for $C^1$
   functions; Hartogs extension as a corollary; a non-holomorphic
   reproducing kernel that nonetheless gives a $\bar\partial$ solution
   operator. Depends on item 2 (for the extension application).

9. **`06.10.07` Cauchy-Fantappiè and Henkin-Ramirez kernels.**
   **[Krantz-only]** Krantz Ch. 5-6; Leray / Fantappiè; Henkin 1969 /
   Ramirez 1967 originators. ~2200 words. Master: the
   Cauchy-Fantappiè machine producing holomorphic kernels from a
   generating form; the Henkin-Ramirez kernel on strongly pseudoconvex
   $\Omega$; sup-norm and Hölder-$1/2$ estimates for $\bar\partial$ —
   the *sharp* estimates beyond Hörmander's $L^2$. Worked: the ball
   kernel explicitly. Depends on items 3, 4.

10. **`06.10.08` Bergman kernel and Bergman metric.** **[Krantz-only]**
    Krantz Ch. 7; Bergman 1933 originator. ~2000 words. Master: the
    Hilbert space $A^2(\Omega)$; the reproducing kernel $K_\Omega(z,w)$;
    transformation under biholomorphism; the **Bergman metric**
    $g_{j\bar k} = \partial^2 \log K(z,z)/\partial z_j \partial \bar
    z_k$; invariance. Worked: $K_{\mathbb{B}^n}$ and $K_{\Delta^n}$
    explicitly. **Headline kernel.**

11. **`06.10.09` Szegő kernel and Fefferman boundary asymptotics.**
    **[Krantz-only]** Krantz Ch. 7; Szegő 1921; Fefferman 1974 (Invent.
    Math. 26) originator for the asymptotics. ~1800 words. Master:
    Hardy space $H^2(\partial\Omega)$ and its reproducing kernel; the
    Fefferman asymptotic expansion of the Bergman kernel near a
    strongly pseudoconvex boundary; input to the mapping theorem
    (item 13). Depends on item 10.

12. **`06.10.10` The $\bar\partial$-Neumann problem and subelliptic
    estimates.** **[Krantz-only]** Krantz Ch. 8-10; Kohn 1963-64 (Ann.
    Math. 78, 79) originator; Hörmander Condition $Z(q)$. ~2400 words.
    **Flagship of the deepest Krantz block.** Master: the complex
    Laplacian $\Box = \bar\partial\bar\partial^* + \bar\partial^*
    \bar\partial$; the Hilbert-space (Friedrichs) formulation with the
    $\bar\partial$-Neumann boundary conditions; the basic estimate; the
    **subelliptic $1/2$-estimate** on strongly pseudoconvex domains
    (Kohn); Condition $Z(q)$; boundary regularity / Kohn-Nirenberg.
    Depends on items 3, 4. **Largest priority-2 unit.**

13. **`06.10.11` Cousin I/II and the Levi problem in $\mathbb{C}^n$.**
    **[Krantz-only]** Krantz Ch. 4; Cousin 1895; Oka. ~1600 words.
    Master: several-variable Cousin I (additive, solvable on domains
    of holomorphy via $H^1(\Omega, \mathcal{O}) = 0$) and Cousin II
    (multiplicative, topological obstruction in $H^2(\Omega,
    \mathbb{Z})$); Oka-Weil approximation. Cross-reference the
    dimension-one chapter `06.09.04-05`. Depends on items 4, 5.

### Priority 3 — geometric function theory, rigidity, local algebra

14. **`06.10.12` Invariant metrics: Carathéodory, Kobayashi, Bergman.**
    **[Krantz-only]** Krantz Ch. 11; Carathéodory 1926 / Kobayashi
    1967 originators. ~1800 words. Master: the three invariant
    pseudodistances; distance-decreasing under holomorphic maps
    (Schwarz-Pick generalisation); completeness on bounded domains.
    Worked: the ball with the Bergman/Bergman-Poincaré metric.

15. **`06.10.13` Automorphism groups and the Fefferman mapping
    theorem.** **[Krantz-only]** Krantz Ch. 11-12; Fefferman 1974;
    H. Cartan (automorphism-group theorem) originators. ~1800 words.
    Master: $\mathrm{Aut}(\Omega)$ as a Lie group; the ball and
    polydisc automorphism groups, and their non-biholomorphism; the
    **Fefferman theorem** (a biholomorphism between smoothly bounded
    strongly pseudoconvex domains extends smoothly to the boundary).
    Depends on items 11, 14.

16. **`06.10.14` Weierstrass preparation and division.**
    **[Composite — GR 3.24]** Krantz Ch. 1; Weierstrass. ~1600 words.
    Master: the preparation theorem (a germ regular of order $k$ in
    $z_n$ factors as unit × Weierstrass polynomial), the division
    theorem, and the corollary that $\mathcal{O}_{n}$ (the local ring
    of germs) is Noetherian and a UFD. *Production owned jointly with
    the Gunning-Rossi 3.24 plan; one unit serves both books.*

17. **`06.10.15` Tangential CR complex $\bar\partial_b$ and the Lewy
    example.** **[Krantz-only — survey-leaning]** Krantz Ch. 9-10;
    H. Lewy 1957 (Ann. Math. 66) originator. ~1500 words. Master: the
    induced CR structure on a real hypersurface; $\bar\partial_b$; the
    Lewy non-solvable equation; pointer to CR geometry / embeddability.
    Depends on item 12.

### Priority 4 — survey / pointer / notation, optional

18. **`06.10.16` Wong-Rosay theorem and boundary rigidity.**
    **[Krantz-only — pointer]** Krantz Ch. 12. Master-only; ~900 words.
    A non-compact automorphism orbit accumulating at a strongly
    pseudoconvex boundary point forces $\Omega \cong \mathbb{B}^n$.
    Pointer to the scaling method.

19. **`06.10.17` Survey: routes into SCV — sheaf-theoretic and
    complex-geometric.** **[Krantz-only — pointer]** Master-only;
    ~800 words. Cross-link to Gunning-Rossi 3.24 (local rings, coherent
    sheaves), Hörmander (the $L^2$ programme in full), Grauert-Remmert
    (Stein spaces), and the Babel Bible Kähler/Hodge units
    (`03.02.10-12`, `04.09.*`). Situates Krantz's hard-analysis route.

20. **Notation crosswalk (`notation/krantz.md`).** **[Krantz-only]**
    Multi-index $\alpha$; $\bar\partial$, $\bar\partial^*$, $\Box$;
    defining function $\rho$ and the Levi form; $A^2$/$H^2$ and the
    Bergman/Szegő kernels $K_\Omega$, $S_\Omega$; $\mathbb{B}^n$,
    $\Delta^n$. ~500 words. Warranted given the new apparatus.

---

## §4 Implementation sketch (P3 → P4)

**Minimum Krantz-equivalence batch** = priority 1 (items 1-7): 5 new
units (`06.10.01-05`) + 2 in-place deepenings (`06.07.01-02`). This
establishes the structural spine (domains of holomorphy,
plurisubharmonicity, pseudoconvexity, $\bar\partial$-$L^2$, the Levi
problem) without which the kernel and Neumann blocks have nothing to
cite. Production estimate (mirroring earlier Donaldson / Forster
batches):

- ~3 h per typical new unit; ~4 h for the load-bearing
  $\bar\partial$-$L^2$ unit (item 4) and the $\bar\partial$-Neumann unit
  (item 12); ~1.5 h per deepening.
- Priority 1: 1 large × 4 h + 4 typical × 3 h + 2 deepenings × 1.5 h =
  **~19 h**.
- Priority 1+2: + 1 large × 4 h (item 12) + 5 typical × 3 h (items 8,
  9, 10, 11, 13) = **~38 h** total.
- Priority 1+2+3: + 4 typical × 3 h (items 14, 15, 16, 17) =
  **~50 h**.

At 4-6 production agents in parallel, priority-1 fits a 1-2 day window;
priority-1+2 a ~4-day window with one integration agent stitching the
new `06.10-several-complex-variables/` chapter.

**Batch structure.**

- **Batch A (structural spine, items 1, 2, 3, 6, 7, ~13 h):** opens
  `06.10-*`; PSH (item 2) and pseudoconvexity (item 3) load-bearing.
  Produce together. The two deepenings (6, 7) can run in parallel since
  they only need item 9 cross-references resolved at integration.
- **Batch B (the $\bar\partial$ engine, items 4, 5, ~6 h):** depends on
  Batch A (items 2, 3). The Levi-problem solution (5) needs the
  $\bar\partial$-$L^2$ unit (4).
- **Batch C (integral kernels, items 8, 9, 10, 11, ~8 h):** depends on
  Batch A-B (items 2-4). Bochner-Martinelli (8) is independent and can
  start with Batch A; Henkin-Ramirez (9) needs item 4; Szegő/Fefferman
  (11) needs Bergman (10).
- **Batch D ($\bar\partial$-Neumann + Cousin, items 12, 13, ~6 h):**
  depends on Batch A-B. Item 12 is the deepest unit.
- **Batch E (geometric / rigidity / local algebra, items 14-17, ~10
  h):** after priority-1+2 lands. Item 16 (Weierstrass) coordinated
  with the Gunning-Rossi 3.24 campaign.
- **Optional Batch F (priority-4, items 18-20, ~4 h).**

**Originator-prose targets** (each Master section cites originator +
Krantz):

- Domains of holomorphy / Cartan-Thullen (1): Cartan-Thullen 1932
  (Math. Ann. 106). Originator voice mandatory.
- PSH (2): Oka 1942 / Lelong 1942 (CRAS 215).
- Levi form / pseudoconvexity (3): E. E. Levi 1910 (Ann. Mat. Pura
  Appl. 17).
- $\bar\partial$-$L^2$ (4): Hörmander 1965 (Acta Math. 113); Kohn 1963.
- Levi problem (5): Oka 1953 (Bull. Soc. Math. France 78);
  Bremermann 1954; Norguet 1954.
- Bochner-Martinelli (8): Martinelli 1938; Bochner 1943 (Ann. Math.
  44).
- Cauchy-Fantappiè / Henkin-Ramirez (9): Leray 1956; Henkin 1969
  (Mat. Sb. 78); Ramirez 1967 (Math. Ann. 184).
- Bergman (10): Bergman 1933 / *The Kernel Function and Conformal
  Mapping* 1950.
- Szegő / Fefferman (11): Szegő 1921; Fefferman 1974 (Invent. Math.
  26). Fefferman originator voice mandatory.
- $\bar\partial$-Neumann (12): Kohn 1963-64 (Ann. Math. 78-79);
  Kohn-Nirenberg 1965. Originator voice mandatory.
- Invariant metrics (14): Carathéodory 1926; Kobayashi 1967
  (Bull. AMS 82).
- Fefferman mapping (15): Fefferman 1974; H. Cartan 1935.
- Weierstrass (16): Weierstrass; cf. Gunning-Rossi Ch. II.
- Lewy (17): H. Lewy 1957 (Ann. Math. 66).

**Notation crosswalk.** Produce `notation/krantz.md` (item 20) — the
several-variable apparatus is genuinely new to Babel Bible (multi-index,
Levi form, $\Box$, $A^2/H^2$, defining function $\rho$). Pin
$\Omega \subset \mathbb{C}^n$ for the domain, $\mathbb{B}^n$ / $\Delta^n$
for the running examples.

**DAG edges to add** (priority-1+2):

- `06.10.01` (domains of holomorphy) ← {`06.07.01`, `06.09.01`
  (dim-one holomorphic convexity, for contrast)}
- `06.10.02` (PSH) ← {`06.01.24-dirichlet-problem-perron` (subharmonic
  $n=1$), `06.07.01`}
- `06.10.03` (pseudoconvexity) ← {`06.10.02`, `03.02.09-almost-complex-structure`}
- `06.10.04` ($\bar\partial$-$L^2$) ← {`06.10.02`, `06.10.03`,
  `06.04.05-dbar-hilbert-pde` (dim-one $\bar\partial$)}
- `06.10.05` (Levi problem) ← {`06.10.01`, `06.10.03`, `06.10.04`}
- `06.10.06` (Bochner-Martinelli) ← {`06.07.01`, `06.10.02`};
  `06.10.06` → `06.07.02` (Hartogs proof)
- `06.10.07` (Henkin-Ramirez) ← {`06.10.03`, `06.10.04`, `06.10.06`}
- `06.10.08` (Bergman kernel) ← {`06.07.01`, `06.10.03`}
- `06.10.09` (Szegő / Fefferman) ← {`06.10.08`, `06.10.10`}
- `06.10.10` ($\bar\partial$-Neumann) ← {`06.10.03`, `06.10.04`}
- `06.10.11` (Cousin in $\mathbb{C}^n$) ← {`06.10.04`, `06.10.05`,
  `06.09.04`}
- `06.10.12` (invariant metrics) ← {`06.10.08`, `06.01.12-maximum-modulus-schwarz-lemma`}
- `06.10.13` (Aut + Fefferman mapping) ← {`06.10.09`, `06.10.12`}
- `06.10.14` (Weierstrass) ← {`06.07.01`}; xref `04.06.02-coherent-sheaf`
- `06.10.15` ($\bar\partial_b$ / Lewy) ← {`06.10.10`}

**Composite Krantz + Gunning-Rossi (3.24) batch recommendation.**
Krantz (hard analysis) and Gunning-Rossi (local rings / coherent
sheaves) overlap on (a) the elementary theory of Ch. 1 (holomorphic
functions, Cauchy on the polydisc, Hartogs) and (b) **Weierstrass
preparation / division** (item 16). Schedule the two SCV audits in the
same campaign window so item 16 — and the deepened entry unit
`06.07.01` — is produced once and serves both equivalences. Krantz owns
the analytic spine ($\bar\partial$, kernels, Neumann, Bergman/Szegő,
mapping theorem); Gunning-Rossi owns the local-algebra / coherent-sheaf
spine (Oka coherence, $\mathcal{O}_n$ as a local ring, analytic sets,
complex spaces). The Levi problem is the meeting point — Krantz solves
it by $\bar\partial$, Gunning-Rossi by coherent sheaves; both should
cross-reference `06.10.05`.

---

## §5 What this plan does NOT cover

- Line-number-level inventory of every theorem / exercise across
  Krantz's 13 chapters. Defer unless priority-1+2 expands.
- Krantz's full exercise sets vs. Babel Bible's templated 7-block. The
  existing `06.07.*` units carry *generic, non-SCV* exercises; a
  dedicated SCV-exercise-pack pass (`06.10.E1`/`E2`) is a P3 follow-up
  after the theorem-layer batch closes.
- **Gunning-Rossi-distinctive (3.24)** material: the local ring
  $\mathcal{O}_n$ and its algebra, **Oka's coherence theorem** in full,
  coherent analytic sheaves, analytic sets / Remmert-Stein, the theory
  of complex spaces and normalisation. The Gunning-Rossi audit owns
  these; only Weierstrass preparation (item 16) is composite.
- **Hörmander-distinctive** depth: the full $L^2$ programme (weights,
  $L^2$-estimates for $(p,q)$-forms in all bidegrees,
  Skoda/Ohsawa-Takegoshi extension). Item 4 covers the
  $(0,1)$-existence theorem; the broader programme is a Hörmander-book
  audit if/when added.
- **Kähler / Hodge** complex-geometry material — Babel Bible already has
  `03.02.10-12` (Dolbeault, Kähler, Kähler-Hodge) and `04.09.*` (Hodge
  decomposition, Kodaira vanishing/embedding). Krantz is function
  theory on domains, not compact-Kähler theory; no overlap to reclaim
  here beyond the survey pointer (item 19).
- **Dimension-one** Stein / Cousin / Mittag-Leffler / Runge — already
  shipped in `06.09.01-07` (Forster-derived). Krantz's $n \geq 2$
  Cousin (item 13) cross-references but does not re-derive the
  dimension-one case.
- Deep **CR geometry** (embeddability, the Kohn-Rossi / Boutet de
  Monvel theorems, the Lewy operator's microlocal analysis). Item 17 is
  a survey-level entry; the full theory is out of scope.
- **Several-variable value-distribution / Nevanlinna theory** and the
  $\partial\bar\partial$-potential theory of currents
  (Lelong-Demailly). Out of scope.
- Worked-example densification beyond the priority-1+2 ball/polydisc
  running examples.
- Notation cleanup beyond `notation/krantz.md` (item 20).

---

## §6 Acceptance criteria for FT equivalence (Krantz)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, the book is
at equivalence-coverage when:

- ≥95% of Krantz's named theorems map to Babel Bible units **at
  Krantz-equivalent proof depth** (currently ~5%; after priority-1,
  ~45%; after priority-1+2, ~75%; after priority-3, ~90%).
- ≥80% of Krantz's exercises have a Codex equivalent (currently ~3% —
  and the existing `06.07.*` exercises are generic, not SCV; closing
  this requires the dedicated SCV-exercise-pack pass per §5).
- ≥90% of Krantz's worked examples reproduced in some Codex unit
  (currently ~10%; the priority-1+2 batch's required ball/polydisc
  worked examples — Bergman/Szegő kernels, automorphism groups,
  ball/polydisc non-biholomorphism — bring this to ~85%).
- Notation alignment recorded in `notation/krantz.md` (item 20) plus
  inline in the priority-1 Master sections.
- DAG `prerequisites` arrows for every Krantz chapter dependency: the
  chain **PSH → pseudoconvexity → Cartan-Thullen → $\bar\partial$-$L^2$
  → Levi problem → kernels → $\bar\partial$-Neumann → mapping theorem**
  must be unbroken after the priority-1+2 batch.
- Pass-W weaving connects the new `06.10-several-complex-variables/`
  chapter to: the deepened entry units `06.07.01-02`; the dimension-one
  Stein chapter `06.09.*` (Cousin/Levi-problem dimension-one ancestors);
  the higher-dim survey `06.09.08`; the one-variable $\bar\partial$ unit
  `06.04.05`; and the complex-geometry units `03.02.10-12`, `04.09.*`
  (Kähler/Hodge cross-links via the survey item 19).

Priority-1 (items 1-7) closes the structural SCV spine — the
definitions and theorems (domains of holomorphy, plurisubharmonicity,
pseudoconvexity, $\bar\partial$-$L^2$, the Levi problem) that the rest
of Krantz stands on, plus the two templated-stub deepenings that are
currently the *only* SCV content in Babel Bible. Priority-2 (items 8-13)
closes the Krantz-distinctive hard-analysis blocks: integral kernels
(Bochner-Martinelli, Cauchy-Fantappiè / Henkin-Ramirez), the Bergman
and Szegő kernels, the $\bar\partial$-Neumann problem, and Cousin in
$\mathbb{C}^n$. Priority-3 (items 14-17) closes the geometric-function-
theory / rigidity layer (invariant metrics, automorphism groups, the
Fefferman mapping theorem) and the local-algebra overlap (Weierstrass,
composite with Gunning-Rossi 3.24). Priority-4 (items 18-20) is
pointer / survey / notation.

**Honest scope.** Large topic-level gap. Unlike the Donaldson / Forster
Riemann-surface audits — where the chapter was already 21-22 units and
the work was mostly *depth* — here Babel Bible has effectively **not
entered $\mathbb{C}^n$**: two templated stubs and one higher-dim survey.
This is a **new-chapter build** (`06.10-several-complex-variables/`,
~14-17 units) of which only Weierstrass preparation is shared with an
adjacent audit. The single deepest Krantz-distinctive block is the
**$\bar\partial$-Neumann problem with subelliptic estimates** (item 12),
which has no nearby unit anywhere in Babel Bible; the single most
load-bearing is the **$\bar\partial$ problem with $L^2$ estimates**
(item 4), on which the Levi-problem solution and the sharp kernel
estimates both depend. Composite batching with Gunning-Rossi 3.24 saves
the elementary-theory and Weierstrass-preparation work; everything else
is Krantz-only.
