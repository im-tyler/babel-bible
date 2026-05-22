# Arnold — *Ordinary Differential Equations* (Fast Track 0.4) — Audit + Gap Plan

> **`audit_completeness: reduced`.** Full PDF could not be retrieved
> within the audit window: the loshijosdelagrange WordPress mirror
> exceeds WebFetch's 10 MB content limit; Springer's catalogue page
> sits behind an IDP authentication redirect; Internet Archive,
> Google Books, and Amazon previews returned only metadata. This
> plan is built from the canonical TOC (Springer GTM-tier "yellow
> book", 3rd Russian ed. translated by Roger Cooke, 1992 = ISBN
> 3-540-54813-0, 334 pp.) reconstructed from citation network +
> reviewer summaries + the parallel Arnold *Mathematical Methods*
> audit plan, and from the standard ODE-pedagogy cross-references
> (Hirsch-Smale-Devaney, Strogatz, Tenenbaum-Pollard,
> Coddington-Levinson). Per AGENTIC_EXECUTION_PLAN §6.6 this plan
> can trigger P2/P3/P4 against its punch-list, but P5 verification
> cannot mark the book `equivalence-covered`; only
> `equivalence-partial`. A full re-audit is queued in
> `NEED_TO_SOURCE.md` once a local PDF lands.

**Book:** V. I. Arnold, *Ordinary Differential Equations*, 3rd edition,
translated by Roger Cooke from the Russian, Springer-Verlag 1992
(Springer-Textbook; ISBN 3-540-54813-0). 334 pages. (Distinct from the
1973 MIT-Press first English edition transl. R. A. Silverman, which is
the Russian 2nd-edition translation.)

**Fast Track entry:** **0.4** — the canonical Section 0 prereq on ODEs,
the last missing prerequisite audit per FASTTRACK_COVERAGE_ROADMAP.md
Wave 5. Marked **BUY** in `docs/catalogs/FASTTRACK_BOOKLIST.md`.

**Distinguish from sibling Arnold plan.** A different Arnold book —
*Mathematical Methods of Classical Mechanics* (Fast Track 1.11) — has
its own audit plan at `plans/fasttrack/arnold-mathematical-methods.md`.
That book is the symplectic / Hamiltonian / Lagrangian mechanics
companion and is consulted here only where the two books' content
overlaps (vector fields, flows, integral curves, geodesic flow as
Hamiltonian). This plan is the canonical ODE-first stub.

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite per
the orchestration protocol). Output is a concrete priority-ordered
punch-list of new units to write so that Arnold ODE is covered to the
equivalence threshold (≥95% effective coverage; see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Not a full P1 audit
(no line-number-level Problem inventory possible without the PDF).

---

## §1 What Arnold's ODE book is for

Arnold's *Ordinary Differential Equations* is the canonical **geometric,
qualitative** introduction to ODEs. It inverts the standard
power-series-and-tricks approach inherited from Tenenbaum-Pollard or
Boyce-DiPrima: where those texts solve equations, Arnold studies
**vector fields** on a phase space and their **flows**, integrates only
when integration is illuminating, and uses the topology of phase
portraits — rather than closed-form solutions — as the primary object
of understanding. The book is foundational for the Fast Track because
the geometric perspective is what is reused everywhere downstream: in
Hamiltonian mechanics (FT 1.11), symplectic geometry (FT 1.11 / 1.04),
dynamical systems (FT 1.12), and analysis on manifolds (FT 1.10).

Distinctive Arnold choices:

1. **Phase space and flow are primitive.** Chapter 1 introduces phase
   space, vector field, integral curve, phase flow, and one-parameter
   group of diffeomorphisms before writing down a single
   equation-in-coordinates. The ODE $\dot x = v(x)$ is the *coordinate
   shadow* of "the flow $g^t$ of the vector field $v$." This is the
   opposite framing from the standard US undergraduate ODE text
   (Boyce-DiPrima, Tenenbaum-Pollard) which writes equations first and
   reaches geometric interpretation only at the end if at all.

2. **Existence-uniqueness via Picard iteration is in Chapter 4** —
   deliberately deferred. Chapters 1-3 build phase-portrait intuition,
   classification of equilibria, and linear-system technique; the
   existence-uniqueness *proof* via the contraction-mapping principle is
   pushed back so the reader sees what the theorem is *for* before
   seeing how it is proved. Pedagogical inversion vs Hirsch-Smale-Devaney
   *Differential Equations, Dynamical Systems, and an Introduction to
   Chaos* (3rd ed., 2013, Ch. 17) and Coddington-Levinson *Theory of
   Ordinary Differential Equations* (McGraw-Hill 1955) where the
   theorem is proved first.

3. **Linear systems through the matrix exponential and the saddle /
   node / focus / centre classification of planar equilibria.**
   Chapter 3 develops $\exp(At)$, classification of $2 \times 2$ real
   linear systems by trace and determinant, and stability of linear
   equilibria. Strogatz *Nonlinear Dynamics and Chaos* (2nd ed., 2015,
   Ch. 5-6) covers the same material at a less rigorous level; Arnold
   gives the rigorous version with $e^{At}$ as a one-parameter group.

4. **Rectification of a vector field (straightening theorem).** A
   non-vanishing smooth vector field is locally diffeomorphic to a
   constant vector field. Arnold's geometric statement of the
   existence-uniqueness-smooth-dependence package: in the neighbourhood
   of a non-equilibrium point the flow is *trivial* up to
   diffeomorphism. This is the local model, and it is the right way to
   state local ODE theory once one is doing geometry rather than
   calculation. Absent from standard ODE texts; appears explicitly in
   Arnold and in Spivak's *Calculus on Manifolds* (Ch. 5) for the
   straightening of a vector field.

5. **Differential equations on manifolds (Ch. 5).** Vector field on a
   smooth manifold, one-parameter group of diffeomorphisms $g^t$,
   Lie derivative, first integrals, the geometric statement that an
   ODE on $\mathbb{R}^n$ is a special case of an ODE on a manifold. The
   chapter foreshadows everything in `03-modern-geometry/` and
   `05-symplectic/`. Lie derivative appears here in its primitive
   form as $\frac{d}{dt}\Big|_{t=0} (g^t)^* f$ rather than the Cartan-
   formula form $\iota_X d + d \iota_X$ used in differential-forms texts.

6. **Stability theory via Lyapunov functions.** The Lyapunov direct
   method for stability of equilibria is presented geometrically as
   "a function decreasing along trajectories"; asymptotic stability via
   strict decrease. Originator-text status: Arnold cites Lyapunov 1892
   *Problème général de la stabilité du mouvement* (Kharkov Math.
   Soc.; French translation Princeton 1947) as the foundational source.
   This is the right entry point to nonlinear stability before
   Hirsch-Smale-Devaney Ch. 9 or Khalil *Nonlinear Systems* Ch. 4.

7. **Linear systems with periodic coefficients — Floquet theory.**
   Chapter 3 closes with the Floquet-Lyapunov reduction theorem:
   $\dot x = A(t) x$ with $A(t + T) = A(t)$ admits a fundamental
   solution $X(t) = P(t) e^{Bt}$ with $P$ periodic, $B$ constant.
   Floquet 1883 (Ann. Sci. Éc. Norm. Sup.) is the originator. This is
   the gateway to parametric resonance, Hill's equation, and Mathieu
   equation. Stronger emphasis than in Hirsch-Smale-Devaney.

8. **Examples-driven throughout.** Arnold runs persistent worked
   examples: the population / radioactive-decay scalar ODE, the
   harmonic oscillator, the mathematical pendulum (and its phase
   portrait with separatrix), the predator-prey Volterra-Lotka system,
   the geodesic-flow scalar example as foreshadowing of geometric
   mechanics. Each is reused across chapters to illustrate
   theorem-after-theorem; the pendulum phase portrait in particular
   is the running visual.

Distinguished from the *Mathematical Methods of Classical Mechanics*
(FT 1.11): Arnold ODE is the **prereq**, restricted to ODEs as a
self-contained geometric theory; Hamiltonian / Lagrangian / symplectic
content is touched only via the pendulum and geodesic-flow examples in
the final chapter. Hamilton's equations, Poisson brackets, action-angle,
and KAM live in the *Mathematical Methods* book and its audit plan.

The book is **not** a numerical-methods text (no Euler / Runge-Kutta
analysis), is **not** a Sturm-Liouville / boundary-value / Bessel-
function compendium (Tenenbaum-Pollard territory), and is **not** a
PDE text. PDE coverage is a separate Fast Track entry and is explicitly
deferred per §5 below.

---

## §2 Coverage table (Babel Bible vs Arnold ODE)

Cross-referenced against the current Babel Bible corpus (~313 units across
nine chapters). Codex has substantial Hamiltonian / symplectic content
in `05-symplectic/` (49 units shipped, including
`05.02.01-hamiltonian-vector-field`, `05.02.07-liouville-volume`,
`05.02.08-poincare-recurrence`, `05.02.06-geodesic-flow-hamiltonian`),
which touches Arnold-ODE Chapter 5 material *from the symplectic side*
but **not from the ODE-as-flow side**. The functional-analysis block in
`02-analysis/11-functional-analysis/` contains
`02.11.04-banach-spaces` (which underwrites the contraction-mapping
proof) but no contraction-mapping unit per se. The
`03-modern-geometry/02-manifolds/` chapter contains only
`03.02.01-smooth-manifold` — no tangent bundle, no vector field, no
flow unit.

✓ = covered at Arnold-equivalent depth, △ = topic present in some
form but Babel Bible unit shallower / framed differently, ✗ = not covered.

### Chapter 1 — Basic Concepts (phase space, vector field, flow)

| Arnold topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Phase space, state of a process | — | ✗ | **Gap.** Foundational definition; absent. |
| Vector field on $\mathbb{R}^n$ / on a manifold | — | ✗ | **Gap (high priority — load-bearing for whole curriculum).** |
| Integral curve, phase curve, phase flow | — | ✗ | **Gap.** |
| One-parameter group of diffeomorphisms $g^t$ | partial in `05.02.01` Hamiltonian vector field | △ | Mentioned in Hamiltonian context; not its own unit. |
| Equilibrium / fixed point of a vector field | — | ✗ | **Gap.** |
| Worked examples: radioactive decay, population, pendulum, harmonic oscillator | — | ✗ | Gap. |
| Direction field on $\mathbb{R}^2$ | — | ✗ | Gap (low priority — pedagogical). |

### Chapter 2 — Basic Theorems (existence, uniqueness, dependence)

| Arnold topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Existence theorem (Peano / Picard) | — | ✗ | **Gap (high priority).** |
| Uniqueness theorem (Picard-Lindelöf, Lipschitz) | — | ✗ | **Gap (high priority).** |
| Extendability of solutions / maximal interval | — | ✗ | Gap. |
| Continuous dependence on initial data and parameters | — | ✗ | Gap. |
| Differentiable dependence on initial data (variational equation) | — | ✗ | Gap. |
| Rectification (straightening) theorem | — | ✗ | **Gap (high priority — Arnold-distinctive geometric local model).** |

### Chapter 3 — Linear Systems

| Arnold topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Linear system $\dot x = A x$ with constant $A$ | — | ✗ | **Gap.** |
| Matrix exponential $e^{At}$ as one-parameter group | partial: spectral theorem in `02.11.*` | △ | Operator-exponential exists abstractly; ODE framing absent. |
| Classification of $2 \times 2$ planar linear systems (saddle, node, focus, centre, improper, degenerate) | — | ✗ | **Gap.** |
| Stability of linear equilibria via eigenvalues | — | ✗ | Gap. |
| Inhomogeneous linear system / variation of constants | — | ✗ | Gap. |
| Linear system with periodic coefficients (Floquet theorem) | — | ✗ | **Gap.** |
| Parametric resonance (Mathieu / Hill) | — | ✗ | Gap (low priority). |

### Chapter 4 — Proofs of the Main Theorems

| Arnold topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Contraction-mapping principle (Banach fixed-point) | — | ✗ | **Gap (load-bearing across analysis).** `02.11.04-banach-spaces` provides the ambient setting only. |
| Picard iteration as fixed point of integral operator | — | ✗ | Gap; subsumed by existence unit above. |
| Gronwall inequality | — | ✗ | Gap. |
| Differentiable-dependence proof via variational equation | — | ✗ | Gap. |

### Chapter 5 — Differential Equations on Manifolds

| Arnold topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Smooth manifold (definition) | `03.02.01-smooth-manifold` | ✓ | Already shipped. |
| Tangent vector / tangent space at a point | — | ✗ | Gap (already a known cross-strand gap). |
| Tangent bundle $TM$ | — | ✗ | Gap (cross-strand). |
| Vector field on a manifold | — | ✗ | Gap. |
| Flow of a vector field on a manifold; existence on compact manifolds | partial via `05.02.01-hamiltonian-vector-field` | △ | Hamiltonian-only framing. |
| Lie derivative $\mathcal{L}_X f$ | partial via `05.02.02-poisson-bracket`, `03.04.04-exterior-derivative` | △ | Cartan-formula form present in symplectic chapter; primitive flow-pullback form absent. |
| First integral / conserved quantity | — | ✗ | Gap. |
| Geodesic flow on Riemannian manifold (as ODE example) | partial via `05.02.06-geodesic-flow-hamiltonian` | △ | Hamiltonian framing; pure-ODE / Lagrangian framing absent. |
| Lyapunov stability theorem (direct method) | — | ✗ | **Gap.** |
| Asymptotic stability via strict Lyapunov function | — | ✗ | Gap. |
| Poincaré-Bendixson theorem (planar limit sets) | — | ✗ | **Gap (Arnold ODE-specific; foundational dynamical-systems result).** |
| Limit cycle | — | ✗ | Gap. |

### Aggregate coverage estimate

- **Theorem layer:** ~5% topic-level (only smooth-manifold definition
  and partial Hamiltonian-side flow coverage). After priority-1 batch:
  ~55%; priority-1+2: ~85%; +priority-3: ~93%.
- **Notation layer:** ~50% aligned. Codex uses $X_H$ for Hamiltonian
  vector field; Arnold uses $v$ generically and $g^t$ for the flow.
  Both are standard; align via a §Notation paragraph in the basic
  vector-field unit. Lyapunov function $V$, first integral $f$, phase
  flow $g^t$ — adopt Arnold's notation directly.
- **Sequencing layer:** ~30% — Codex has no Section-0 ODE block at
  all. Arnold's Ch.1-2-3-4-5 sequence becomes a new Codex chapter
  family (proposed `02.12-ode/` or `02.07-ode/` — see §4).
- **Application layer:** ~25%. Pendulum, oscillator, predator-prey,
  geodesic flow partly visible in the symplectic chapter; ODE-side
  framing absent.

The gap is **substantial** but the *intuition* layer is partly
prepared by the symplectic chapter: anyone who has read `05.02.*`
already has Hamiltonian flows; an ODE block formalises the general
case those units secretly depend on.

---

## §3 Gap punch-list (priority-ordered)

Recommended chapter slot: a **new `02.12-ode/` chapter** (or
`02.07-ode/` if the Section-0 ordering renumbers; see §4) inserted
between the multivariable-differentiation chapter and the functional-
analysis chapter, with a single forward edge into
`05-symplectic/` from the manifold-flow unit.

### Priority 1 — Arnold-equivalent backbone (the load-bearing units)

1. **`02.12.01` Phase space, vector field, integral curve.** Arnold
   Ch.1 §1-§3 anchor. Three-tier; ~1500 words. Beginner: scalar ODE
   $\dot x = v(x)$ as flow on $\mathbb{R}$; radioactive-decay /
   logistic worked examples. Intermediate: vector field on $\mathbb{R}^n$;
   integral curve; equilibrium. Master: smooth vector field on a
   smooth manifold (forward-references `03.02.01`). Originator
   citation: Poincaré 1881-1886 *Mémoire sur les courbes définies
   par une équation différentielle* (J. de Math. Pures et Appl.).
   **Load-bearing for whole curriculum — vector field appears
   downstream in `03.*`, `05.*`, `07.*`.**

2. **`02.12.02` Phase flow / one-parameter group $g^t$.** Arnold §4
   anchor. Three-tier; ~1300 words. Beginner: scalar autonomous flow
   $g^t(x_0) = x(t; x_0)$. Intermediate: $g^t \circ g^s = g^{t+s}$,
   $g^0 = \mathrm{id}$, smoothness. Master: complete vs incomplete
   flows; flow on compact manifold is complete. Lie derivative as
   $\frac{d}{dt}|_0 (g^t)^* f$. **Load-bearing for `05.02.*`.**

3. **`02.12.03` Existence and uniqueness of solutions (Picard-
   Lindelöf).** Arnold Ch.2 + Ch.4 anchor; statement in Ch.2, proof
   via contraction in Ch.4. Three-tier; ~2000 words. Beginner:
   statement and pendulum worked example. Intermediate: Lipschitz
   hypothesis; uniqueness vs Peano-only existence. Master:
   contraction-mapping proof; Picard iteration; Gronwall as
   consequence. Originator citations: Cauchy 1820s (lectures, not
   published), Lipschitz 1876 (J. f. Math. 82), Picard 1890
   (*Mémoire sur la théorie des équations aux dérivées partielles*),
   Lindelöf 1894 (C. R. Acad. Sci.). **Foundational across analysis.**

4. **`02.12.04` Continuous and differentiable dependence on initial
   data.** Arnold Ch.2 §7-§8 + Ch.4 anchor. Three-tier; ~1500 words.
   Variational equation $\dot Y = (Dv)(x(t)) Y$ for the derivative
   of the flow with respect to initial data. Master: Gronwall-style
   continuous-dependence bound; smoothness of $g^t$ in $(t, x)$
   jointly. Worked example: sensitivity in the harmonic oscillator.

5. **`02.12.05` Rectification (straightening) of a vector field.**
   Arnold Ch.2 §7 (also called the *flow-box theorem*). Three-tier;
   ~1300 words. Statement: in a neighbourhood of a non-equilibrium
   point, a smooth vector field is diffeomorphic to $\partial /
   \partial x^1$. Master: proof via flow + transversal section.
   **Arnold-distinctive; the geometric local model. Foundational for
   `03-modern-geometry/02-manifolds/` and the Frobenius / foliation
   theorems downstream.**

6. **`02.12.06` Linear system $\dot x = A x$ and the matrix
   exponential $e^{At}$.** Arnold Ch.3 anchor. Three-tier; ~1700
   words. Beginner: scalar $\dot x = ax$ ⇒ $x = e^{at} x_0$.
   Intermediate: matrix exponential via series; $\frac{d}{dt} e^{At}
   = A e^{At}$; one-parameter group property. Master: spectral form
   $e^{At} = \sum_\lambda e^{\lambda t} P_\lambda(t)$ on
   generalised eigenspaces; relation to Jordan form. Worked
   examples: harmonic oscillator, damped oscillator, coupled
   oscillators. Originator citation: Cauchy 1840s, Sylvester 1883
   (matrix functions).

7. **`02.12.07` Classification of planar linear systems (saddle /
   node / focus / centre).** Arnold Ch.3 anchor. Three-tier;
   ~1800 words. The trace-determinant plane; phase portraits for
   each generic case (saddle, stable / unstable node, stable /
   unstable focus / spiral, centre); degenerate cases (improper
   node, parabolic / shear). Master: classification proof via Jordan
   form; topological vs linear equivalence. Worked example: pendulum
   linearised at equilibrium and at separatrix. **Arnold's
   characteristic phase-portrait pedagogy in its purest form.**

### Priority 2 — Lyapunov / Floquet / Poincaré-Bendixson (Arnold-distinctive depth)

8. **`02.12.08` Lyapunov stability (direct method).** Arnold Ch.5
   anchor. Three-tier; ~1700 words. Statement: existence of a
   positive-definite $V$ with $\mathcal{L}_v V \leq 0$ near
   equilibrium implies stability; strict decrease implies
   asymptotic stability. Master: proof sketch; energy functions
   for Hamiltonian systems are Lyapunov; converse Lyapunov theorem
   (Massera 1949) as pointer. Originator citation: Lyapunov 1892
   *Problème général de la stabilité du mouvement* (Kharkov;
   reprinted Princeton 1947). **Mandatory originator-prose** per
   `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10.

9. **`02.12.09` Floquet theorem (linear systems with periodic
   coefficients).** Arnold Ch.3 anchor. Three-tier; ~1500 words.
   Statement: $\dot x = A(t) x$ with $A(t+T) = A(t)$ has fundamental
   matrix $X(t) = P(t) e^{Bt}$ with $P$ $T$-periodic, $B$ constant.
   Monodromy matrix $X(T)$; Floquet multipliers and exponents;
   stability classification. Master: Hill's equation, Mathieu
   equation, parametric resonance. Originator citation: Floquet
   1883 (Ann. Sci. Éc. Norm. Sup. 12).

10. **`02.12.10` Poincaré-Bendixson theorem.** Arnold Ch.5 anchor.
    Three-tier; ~1700 words. Statement: a bounded $\omega$-limit
    set of a planar flow with finitely many equilibria is either
    an equilibrium, a periodic orbit, or a chain of equilibria
    connected by heteroclinic / homoclinic orbits. Master: proof
    via Jordan curve theorem + transversal section; non-existence
    of chaos in 2D continuous flows. Worked example: Van der Pol
    oscillator limit cycle. Originator citations: Poincaré 1881-86
    *Mémoire sur les courbes définies par une équation
    différentielle*, Bendixson 1901 (Acta Math. 24). **Mandatory
    originator-prose for Poincaré.**

11. **`02.12.11` Vector field on a manifold; flow on a compact
    manifold is complete.** Arnold Ch.5 anchor. Three-tier;
    ~1400 words. Vector field as section of $TM$; integral curves
    via local charts; gluing into global flow on $M$ compact.
    **Bridge to `03-modern-geometry/`.** Forward-references the
    (currently-unwritten) tangent-bundle and Lie-derivative units.

12. **`02.12.12` First integrals / conserved quantities.** Arnold
    Ch.5 anchor. Three-tier; ~1200 words. $f$ is a first integral
    iff $\mathcal{L}_v f = 0$; integration reduces dimension.
    Worked examples: energy for the pendulum, angular momentum for
    central-force motion, Volterra-Lotka conserved quantity.
    **Bridge to Noether's theorem in `05.00.04`.**

### Priority 3 — examples, applications, depth-completion

13. **`02.12.13` Inhomogeneous linear ODE / variation of constants.**
    Arnold Ch.3. Three-tier; ~1100 words. $\dot x = A x + f(t)$;
    fundamental matrix; Duhamel formula. Standard but absent.

14. **`02.12.14` Limit cycle and Liénard / Van der Pol systems.**
    Three-tier; ~1300 words. Existence and uniqueness of limit
    cycles for $\ddot x + f(x) \dot x + x = 0$ under Liénard
    conditions. Originator: Liénard 1928, Van der Pol 1926.
    Bridge from Poincaré-Bendixson (item 10).

15. **`02.12.E1` Arnold ODE exercise pack.** Three-tier exercise
    block; ~25-30 problems sampled from Arnold's Chapter exercises
    (pendulum phase portrait, classification problems, Lyapunov
    function construction, Floquet exponent computation,
    rectification near generic points). Defer to dedicated
    exercise-pack pass.

### Priority 4 — optional Arnold-distinctive pointers (Master-tier only)

16. **`02.12.15` Linearisation at a hyperbolic equilibrium
    (Hartman-Grobman theorem).** Arnold mentions in passing; full
    statement and citation to Hartman 1960 / Grobman 1959. Master-
    only stub; ~900 words.

17. **`02.12.16` Smooth dependence on parameters / structural
    stability survey.** Arnold pointer to Andronov-Pontryagin 1937
    structural stability of planar systems. Master-only; ~800 words.

18. **`02.12.17` Bifurcation theory pointer.** Saddle-node, Hopf,
    pitchfork bifurcations as the four canonical local bifurcations.
    Survey unit only — full bifurcation theory belongs to a
    nonlinear-dynamics text (Strogatz, Guckenheimer-Holmes), not
    to Arnold's ODE book. Master-only pointer; ~700 words.

---

## §4 Implementation sketch

**Minimum Arnold-equivalence batch** = priority 1 only (items 1-7):
7 new units in a new chapter family.

**Hour estimates** (mirroring the Arnold *Mathematical Methods* batch):

- ~3 hours per typical unit; ~4 hours for the existence-uniqueness
  unit (item 3, contraction-mapping proof) and ~4 hours for
  Poincaré-Bendixson (item 10, Jordan-curve subtlety).
- Priority 1 (items 1-7): 5 typical × 3 h + 2 heavier × 4 h = ~23 h.
- Priority 1+2 (items 1-12): ~23 + 4 typical × 3 h + 1 heavier × 4 h
  = ~39 h.
- Priority 1+2+3 (items 1-14, excl. exercise pack): ~39 + 2 × 3 h
  = ~45 h.

At 3-4 production agents in parallel, priority-1 fits in 2-3 days;
priority-1+2 fits in 4-5 days with one integration agent. No single
apex unit (KAM was the apex in *Mathematical Methods*; ODE has no
comparable single-unit boss).

**Chapter slot decision.** Two candidates:

- **`02.12-ode/`** — inside the analysis chapter, after multivariable
  differentiation (`02.05`) and parallel to functional analysis
  (`02.11`). Natural Section-0 placement; ODEs are an analysis topic.
  **Recommended.**
- `02.07-ode/` — alternative interleaved numbering if `02.06-...
  02.11` need stable-id stability.

Pick `02.12-ode/`. Confirm by reading
`docs/catalogs/CONCEPT_CATALOG.md` and `docs/specs/UNIT_SPEC.md` §3.

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, originator-prose
treatment is mandatory for:

- **Poincaré 1881-1886** *Mémoire sur les courbes définies par une
  équation différentielle* (J. de Math. Pures et Appl., four memoirs)
  — items 1 and 10 (phase curves; Poincaré-Bendixson).
- **Lyapunov 1892** *Problème général de la stabilité du mouvement*
  (Kharkov Math. Soc.; French Princeton 1947) — item 8.
- **Picard 1890** + **Lindelöf 1894** — item 3.
- **Floquet 1883** — item 9.

Arnold himself is **not** the originator of this material (unlike for
KAM in *Mathematical Methods*); originator citations are to the 19th
and early-20th-century classics. Arnold's role is **canonical
synthesiser** and the master-tier prose can cite him as the
modern-geometric expositor.

**Notation crosswalk.** Arnold's notation:

- $v$ for vector field (Babel Bible symplectic chapter uses $X$ for vector
  field, $X_H$ for Hamiltonian; **standardise on $X$ generically and
  $v$ when Arnold-specific framing is invoked**).
- $g^t$ for phase flow (adopt directly — no Codex conflict).
- $V$ for Lyapunov function (no conflict).
- $f$ for first integral (no conflict).

Pin in a §Notation paragraph of item 1 (`02.12.01`).

**DAG edges.** New prerequisites:

- `02.12.01` ← {`02.05.04` implicit-inverse-function, `02.11.04`
  banach-spaces} (the latter prepares Banach-space ambient for §3
  in item 3).
- `02.12.02` ← `02.12.01`.
- `02.12.03` ← {`02.12.01`, `02.11.04`}; introduces contraction
  mapping inline.
- `02.12.04` ← `02.12.03`.
- `02.12.05` ← `02.12.04`.
- `02.12.06` ← {`02.12.01`, `02.11.01` bounded-linear-operators}.
- `02.12.07` ← `02.12.06`.
- `02.12.08` ← `02.12.05`.
- `02.12.09` ← {`02.12.06`, `02.12.04`}.
- `02.12.10` ← {`02.12.07`, `02.12.05`}.
- `02.12.11` ← {`02.12.05`, `03.02.01` smooth-manifold}; **forward
  edge into `05.02.01-hamiltonian-vector-field`**.
- `02.12.12` ← `02.12.11`; **forward edge into `05.00.04-noether-
  theorem`**.

**Forward edges into already-shipped units.** After priority-1, the
following existing units gain a *retroactive prerequisite*:

- `05.02.01-hamiltonian-vector-field` ← `02.12.11`.
- `05.02.06-geodesic-flow-hamiltonian` ← `02.12.11`.
- `05.02.07-liouville-volume` ← `02.12.02` (phase flow primitive).
- `05.02.08-poincare-recurrence` ← `02.12.02`.
- `05.00.04-noether-theorem` ← `02.12.12` (Noether ↔ first integral).
- `05.09.01-kam-theorem` ← `02.12.06`, `02.12.07` (linear system
  classification is prerequisite for perturbation around equilibrium).

**Composite Arnold-ODE + Arnold-MM batch.** The two Arnold plans
overlap at vector-field, flow, geodesic-flow, Lie-derivative, and
first-integral / Noether. Production discipline:

- The **general ODE / flow** content is owned by this plan
  (items 1, 2, 5, 11, 12).
- The **Hamiltonian / mechanics** content is owned by the *Mathematical
  Methods* plan (Hamilton's principle, Legendre, Noether, KAM).
- **No double-count**: Lie-derivative-on-manifold lives in item 11 of
  this plan; the Hamiltonian-vector-field Lie derivative (Cartan
  formula form) is already in `05.02.02-poisson-bracket`.

---

## §5 What this plan does NOT cover

- **PDE techniques.** Separation of variables, Sturm-Liouville,
  Fourier methods, characteristic-method for first-order PDE. Arnold
  has a separate *Lectures on Partial Differential Equations*
  (Springer 2004) which is the canonical sequel; PDE coverage is a
  separate Fast Track entry and is deferred. Arnold ODE touches
  Hamilton-Jacobi only as a remark; the full HJ-PDE unit is in the
  *Mathematical Methods* punch-list (item 8 there).
- **Numerical ODE methods.** Euler, Runge-Kutta, implicit / stiff
  solvers, symplectic integrators, error analysis. Numerics is a
  separate curriculum thread; Hairer-Wanner *Solving ODEs* would be
  the canonical book if it were ever added.
- **Boundary-value problems / Sturm-Liouville / special functions.**
  Bessel, Legendre, hypergeometric, Mathieu functions in full
  detail. Tenenbaum-Pollard / Coddington-Levinson territory; Arnold
  dispatches as remarks. Mathieu equation gets a single mention in
  item 9 only.
- **Hamiltonian / Lagrangian mechanics in full.** Owned by
  `plans/fasttrack/arnold-mathematical-methods.md`. The geodesic-
  flow worked example in item 11 of this plan is the ODE-side
  pointer; the symplectic-side framing is the *Mathematical Methods*
  plan's territory.
- **KAM theory / Nekhoroshev / Aubry-Mather.** All in *Mathematical
  Methods* (FT 1.11) plan.
- **Bifurcation theory in full.** Pointer-only in item 18.
  Guckenheimer-Holmes *Nonlinear Oscillations* or Kuznetsov
  *Elements of Applied Bifurcation Theory* would be the canonical
  text; not on the current FT booklist.
- **Chaos / strange attractors / ergodic theory beyond
  Poincaré-Bendixson.** Strogatz / Wiggins / Katok-Hasselblatt
  territory. Item 10 closes the planar-flow gap; higher-dim chaos
  is deferred.
- **Line-number Problem inventory across Arnold's ~150 problems.**
  Cannot do without the PDF. Defer; exercise-pack production is
  P3 priority-3 (item 15) and can be sourced from Hirsch-Smale-Devaney
  + Strogatz as substitute exercise pool until the Arnold PDF lands.
- **Stochastic ODEs / SDEs.** Øksendal territory; not in Arnold.
- **Delay-differential equations / functional-differential
  equations.** Not in Arnold.
- **A `notation/arnold-ode.md` standalone file.** Crosswalk in §4
  is sufficient.

---

## §6 Acceptance criteria for FT equivalence (Arnold ODE)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, the book
is at equivalence-coverage when:

- ≥95% of Arnold's named theorems map to Babel Bible units **at Arnold-
  equivalent proof depth** (currently ~5%; after priority-1 ~55%;
  after priority-1+2 ~85%; after priority-3 ~93%; priority-1+2+3+4
  ~96%). The phase-flow → linear-classification → Poincaré-
  Bendixson → Lyapunov backbone closes most of the gap.
- ≥80% of Arnold's ~150 Problems have a Codex equivalent
  (currently 0%; closing requires the `02.12.E1` exercise pack —
  item 15). Until the PDF lands, exercise-pack can be sourced from
  Hirsch-Smale-Devaney + Strogatz as substitute pool.
- ≥90% of Arnold's worked examples reproduced (currently ~10%;
  priority-1+2 batch brings to ~70%; remainder needs worked-example
  densification across items 6, 7, 10, 14).
- Notation alignment recorded inline in `02.12.01` per §4.
- DAG edges land per §4: in particular the new chapter's forward
  edges into `05.02.*` make the symplectic-chapter prerequisites
  honest (currently `05.02.01-hamiltonian-vector-field` is shipped
  without a vector-field prerequisite — priority-1 item 1 fixes
  this retroactively).
- Pass-W weaving connects `02.12-ode/` to: `02.05-*` (multivariable
  differentiation, for the variational equation in item 4),
  `02.11-*` (functional analysis, for the contraction-mapping
  ambient in item 3), `03.02-manifolds/` (item 11 bridge),
  `05.02-hamiltonian/` (the symplectic chapter's silent flow
  dependency).
- **`audit_completeness: reduced` cannot be marked
  `equivalence-covered`.** Per AGENTIC_EXECUTION_PLAN §6.6, P5
  verification on this book can mark it only `equivalence-partial`
  until a full PDF audit re-runs. The re-audit is queued in
  `NEED_TO_SOURCE.md`. Hard rule.

**Honest scope.** Substantial equivalence gap: Codex has no
Section-0 ODE block at all; every priority-1 unit is net-new. Once
priority-1 ships (7 new units, ~23 hours), the symplectic chapter's
silent ODE-prereq dependencies become explicit, and the curriculum
gains a load-bearing vector-field / flow / Picard-Lindelöf / matrix-
exponential foundation that is currently absent. This is the
**last missing prerequisite audit** per FASTTRACK_COVERAGE_ROADMAP
Wave 5 — its closure unblocks the Section-0 → Section-1 transition
in the Fast Track DAG.

**No apex unit.** Unlike *Mathematical Methods* (where KAM is the
apex), Arnold ODE has no single oversize unit. The book is uniformly
load-bearing; production risk is spread across the seven priority-1
units rather than concentrated.

---

## §7 Sourcing

**Status: BUY.** Per `docs/catalogs/FASTTRACK_BOOKLIST.md`, this book
is not available via the project's free-PDF channels. Audit
performed under the §6.6 reduced fallback.

**Attempted sources (this audit, 2026-05-17):**

- **loshijosdelagrange WordPress mirror**
  (`https://loshijosdelagrange.files.wordpress.com/2013/04/vladimir-i-arnold-vladimir-i-arnold-roger-cooke-ordinary-differential-equations-1992.pdf`).
  PDF exists at the redirected URL
  `https://loshijosdelagrange.wordpress.com/wp-content/uploads/2013/04/vladimir-i-arnold-vladimir-i-arnold-roger-cooke-ordinary-differential-equations-1992.pdf`
  but exceeds WebFetch's 10 MB content-length limit. **Recommended
  manual-download target for re-audit.** Likely legality grey;
  treat as study-only mirror.
- **Springer catalogue** (`link.springer.com/book/9783540548133` ≈
  DOI `10.1007/978-3-642-58694-1` for the 1992 *Springer-Textbook*
  edition). Sits behind IDP authentication redirect.
  WebFetch-inaccessible without credentials.
- **Internet Archive** (`archive.org/details/ordinarydifferen0000arno`).
  Metadata only; no preview content available to WebFetch.
- **Google Books / Amazon previews.** Catalogue pages reached;
  front-matter preview not exposed to WebFetch.

**Recommendation for full re-audit:**

1. Purchase Springer-Textbook 3rd-edition reprint (~$50-70 new,
   $20-30 used). Add to `reference/fasttrack-texts/00-prereq/` as
   `Arnold-OrdinaryDifferentialEquations.pdf` once digitised.
2. Or: download from the loshijosdelagrange mirror via browser
   (which has no content-length limit) and add locally under the
   same path.
3. Or: borrow via ILL — Arnold's *ODE* is widely held by university
   libraries; ISBN 3-540-54813-0 (1992 reprint) or 0-262-51018-9
   (MIT Press 1973 first English ed., transl. Silverman, which is
   the Russian 2nd-edition translation and is content-equivalent
   for the priority-1 punch-list).

Once a PDF lands, re-run P1 audit; promote `audit_completeness`
from `reduced` to `full`; re-verify §2 line-number coverage and
§3 priority-1 punch-list against the actual chapter / section /
problem layout (this stub used reconstructed TOC, and Cooke's
1992 edition has minor section renumbering vs Silverman's 1973;
priority-1 punch-list robust to both).

**Peer-source anchors used to build §1 (cited ≥3):**

- M. W. Hirsch, S. Smale, R. L. Devaney, *Differential Equations,
  Dynamical Systems, and an Introduction to Chaos*, 3rd ed.,
  Academic Press / Elsevier 2013. The standard modern peer text;
  Lipschitz existence / linear-system classification / Lyapunov
  stability / Poincaré-Bendixson are all in chapters 7, 4-6, 9,
  10 respectively. Used to cross-check item-sequence in §3.
- S. H. Strogatz, *Nonlinear Dynamics and Chaos*, 2nd ed., Westview
  / CRC Press 2015. The standard applied-pedagogy text;
  trace-determinant plane / phase portraits / Van der Pol limit
  cycles in Ch. 5-7. Used as worked-example anchor.
- M. Tenenbaum, H. Pollard, *Ordinary Differential Equations*,
  Dover 1985 reprint (original Harper & Row 1963). The contrasting
  classical equation-solving text; used as foil to articulate
  Arnold's distinctive geometric framing in §1.
- E. A. Coddington, N. Levinson, *Theory of Ordinary Differential
  Equations*, McGraw-Hill 1955. The classical rigorous text;
  existence-uniqueness and Floquet-theory references match
  Arnold's content directly. Cited for item 3 originator
  cross-check.

**Citation network for originator-prose:**

- H. Poincaré, "Mémoire sur les courbes définies par une équation
  différentielle," *J. de Math. Pures et Appl.*, 4 memoirs,
  1881-1886.
- A. M. Lyapunov, "Problème général de la stabilité du
  mouvement," doctoral dissertation, Kharkov Math. Soc. 1892;
  French translation Princeton Univ. Press, *Annals of Math.
  Studies* 17, 1947.
- É. Picard, "Mémoire sur la théorie des équations aux dérivées
  partielles et la méthode des approximations successives," *J.
  Math. Pures Appl.*, 1890.
- E. Lindelöf, "Sur l'application de la méthode des approximations
  successives aux équations différentielles ordinaires du premier
  ordre," *C. R. Acad. Sci. Paris*, 1894.
- G. Floquet, "Sur les équations différentielles linéaires à
  coefficients périodiques," *Ann. Sci. Éc. Norm. Sup.* 12,
  1883, 47-88.
- I. Bendixson, "Sur les courbes définies par des équations
  différentielles," *Acta Math.* 24, 1901, 1-88.

**License note.** The loshijosdelagrange mirror is unauthorised;
re-audit must use a properly licensed copy. Springer reprints are
in print as of 2026.
