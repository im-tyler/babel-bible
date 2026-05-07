# Arnold — *Mathematical Methods of Classical Mechanics* (Fast Track 1.11) — Audit + Gap Plan

**Book:** V. I. Arnold, *Mathematical Methods of Classical Mechanics*
(Springer Graduate Texts in Mathematics 60).

- Russian original: *Matematicheskie metody klassicheskoĭ mekhaniki*,
  Nauka, Moscow, 1974.
- 1st English edition: Springer GTM 60, 1978 (translated by K. Vogtmann
  and A. Weinstein).
- 2nd English edition: Springer GTM 60, 1989 — the canonical reference,
  expanded with revised appendices and a substantially developed KAM
  appendix (Appendix 8). Chapter / appendix references in this plan are
  to the 2nd English edition.

**Fast Track entry:** 1.11 (the symplectic-geometry / classical-mechanics
slot of the Dynamical-Systems-IV strand on the booklist; Arnold is
paired there with Cannas da Silva *Lectures on Symplectic Geometry* and
McDuff-Salamon *Introduction to Symplectic Topology* as the
mechanics-first anchor of the strand).

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite).
Output is a concrete punch-list of new units to write — and existing
units to deepen — so that *Mathematical Methods of Classical Mechanics*
is covered to the equivalence threshold (≥95% effective coverage; see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Not a full P1 audit
(no line-number-level Problem inventory).

The audit surface is **smaller than Hatcher** but **comparable to
Cannas**: Arnold §47 / §50 / §44 anchors already appear in the
`tier_anchors` field of `05.05.03-generating-functions`,
`05.02.04-action-angle-coordinates`, `05.02.05-cotangent-bundle`,
`05.02.03-integrable-system`, and several more. Genuine gaps are
concentrated in (1) Arnold-only material not in Cannas — KAM theory,
Hamilton-Jacobi PDE, principle of least action, geodesic flow as
Hamiltonian system, adiabatic invariants — and (2) the Lagrangian
formalism / Euler-Lagrange equations, which Arnold develops as Part II
but which Codex lacks as a dedicated unit.

**Substantial overlap with the Cannas plan.** The Hamiltonian core
(Hamilton's equations, Poisson brackets, integrable systems,
action-angle, moment map, symplectic reduction) is covered by both
Arnold and Cannas; the Cannas plan
(`plans/fasttrack/cannas-da-silva-symplectic.md`) already itemises
priority-1 deepenings on these existing units. **This Arnold plan
does not double-count those deepenings.** Where an item appears on
both, this plan flags it explicitly and defers production to the
Cannas batch. The Arnold-distinctive new-unit production is what this
plan adds.

---

## §1 What Arnold's book is for

Arnold is the canonical source for the **mechanics-first, geometric**
presentation of classical mechanics. Where Goldstein / Landau-Lifshitz
present mechanics in coordinates and reach symplectic geometry only as
a late chapter (or never), Arnold inverts the hierarchy: the geometric
objects (configuration manifold, tangent bundle, cotangent bundle,
symplectic structure, Hamiltonian vector field) are introduced *first*
and the coordinate calculations follow. The book has three Parts plus
eight Appendices (Appendix 8 on KAM is itself ~80 pages, the size of a
chapter).

- **Part I — Newtonian Mechanics** (Ch. 1-2): Galilean relativity,
  Newton's equations, motion in 1D potential, central field, $N$-body.
  Arnold treats this as **setup, not load-bearing topic** — dispatched
  in 60 pages so Lagrangian and Hamiltonian formulations can be
  developed in their proper geometric setting.
- **Part II — Lagrangian Mechanics** (Ch. 3-5): Hamilton's principle of
  least action, Lagrange / Euler-Lagrange equations, motion on a
  Riemannian manifold (geodesic flow as Lagrangian system), Noether's
  theorem, oscillations, rigid body, Lagrange's top, configuration
  manifold and the tangent bundle as natural setting, fibre derivative.
- **Part III — Hamiltonian Mechanics** (Ch. 6-10): symplectic manifold,
  Hamiltonian phase flow, Liouville's theorem (volume preservation),
  Poincaré recurrence, integral invariants of Poincaré-Cartan,
  Hamilton-Jacobi equation, generating functions, canonical
  transformations, action-angle, Liouville-Arnold integrability,
  perturbation theory, KAM, adiabatic invariants.
- **Appendices** (1-8): Riemannian curvature; geodesics on Lie groups
  (Euler equations of an ideal fluid as geodesic on
  $\mathrm{Diff}_{\mathrm{vol}}$!); symplectic structures on algebraic
  manifolds; contact structures; dynamical systems with symmetry;
  normal forms of quadratic Hamiltonians; normal forms of Hamiltonian
  systems near a fixed point; **theory of perturbations / KAM theorem**.

Distinctive Arnold choices:

1. **Geometric mechanics framing throughout.** Configuration manifold
   is smooth from page one; Lagrangian is $L : TM \to \mathbb{R}$;
   action is functional on paths in $M$; Euler-Lagrange equations are
   intrinsic. Not an upgrade from coordinate formulation — it *is* the
   formulation.
2. **Exterior calculus before Hamiltonian formalism.** §35 introduces
   differential forms, exterior derivative, Lie derivative, Cartan's
   magic formula — and only then defines the symplectic form on
   $T^*M$.
3. **Hamilton-Jacobi as generating function for the flow.** Chapter 9
   §47: $S(q, t)$ as action functional viewed as a function of the
   endpoint, satisfies $\partial_t S + H(q, \partial_q S, t) = 0$, used
   to integrate Hamiltonian systems by separation of variables. The
   Hamilton-Jacobi equation is not a side topic — it is the engine for
   solving integrable systems and the bridge to geometric optics / WKB.
4. **Liouville-Arnold integrable-systems theorem.** Chapter 10 §49: if
   $H$ has $n$ Poisson-commuting integrals on a $2n$-dimensional
   symplectic manifold, with $df_i$ independent on a compact connected
   level set $M_c$, then $M_c$ is diffeomorphic to an $n$-torus and on
   a tubular neighbourhood there exist action-angle coordinates
   $(I, \theta)$. **Arnold's signature theorem** in classical
   mechanics, jointly attributed in Cannas Lecture 24 as
   "Liouville-Arnold."
5. **KAM theorem — apex appendix.** Appendix 8 (~80 pages, 2nd ed.)
   presents Kolmogorov-Arnold-Moser perturbation theory: for a small
   Hamiltonian perturbation $H_\epsilon = H_0 + \epsilon H_1$ of an
   integrable $H_0$, *most* invariant tori of $H_0$ survive (positive
   measure, diophantine frequencies). Requires Newton iteration,
   small-divisor estimates. Gateway to Nekhoroshev / Aubry-Mather.
   **Codex has zero KAM units — largest topic-level gap.**
6. **Foliations on cotangent bundles.** Throughout Part III: $T^*M$ is
   foliated by Lagrangian submanifolds; level sets of Poisson-commuting
   integrals are Lagrangian; action-angle is the global statement;
   completely integrable systems are exactly those for which the
   foliation extends globally. Cannas covers the local Liouville
   theorem; Arnold's emphasis on the global foliation is
   Arnold-distinctive.
7. **Variational principle of least action.** Chapter 3 §13: a path is
   a motion iff it is a critical point of
   $S[q] = \int L(q, \dot q, t)\, dt$. **Codex's `03.04.08`
   variational-calculus covers Euler-Lagrange formalism in the
   differential-forms setting, but Hamilton's principle as the
   foundational principle of mechanics is not articulated as its own
   unit.**
8. **Geodesic flow as Hamiltonian flow on $T^*M$.** §17: geodesic
   equations on $(M, g)$ are Euler-Lagrange for $L = \tfrac{1}{2}|v|^2$,
   equivalently Hamiltonian flow for $H = \tfrac{1}{2}|p|^2_{g^{-1}}$.
   The simplest non-trivial Hamiltonian system, running example
   throughout Part III.
9. **Adiabatic invariants.** §52: action variable $I = \oint p\, dq$
   approximately conserved to all orders under slow parameter
   variation. Foundational for geometric / Berry phase, quasi-static
   thermodynamics.
10. **Newton's equations dispatched as setup.** Ch. 1-2 are 60 pages.
    Per Arnold's framing, Codex's lack of a Newtonian-mechanics unit is
    a **deferrable gap** — content is covered by the geometric units;
    only pedagogical setup is missing.
11. **Examples-driven.** Each chapter ends with worked computations:
    Kepler, harmonic oscillator, Lagrange's top, Euler equations on
    $SO(3)$, three-body, ellipsoidal geodesics.
12. **Originator-text status for some material.** Arnold's Appendix 8
    is the canonical synthesis of KAM (Kolmogorov 1954 / Arnold 1963 /
    Moser 1962 in Arnold's voice). The Liouville-Arnold upgrade is
    Arnold's. Originator-prose treatment of KAM and Liouville-Arnold
    must cite Arnold directly.

The book ends before symplectic *topology* in the modern sense (no
Floer, no Gromov non-squeezing, no pseudoholomorphic curves). The
Arnold conjecture is stated as a remark in §49, the bridge into the
McDuff-Salamon programme.

---

## §2 Coverage table (Codex vs Arnold)

Cross-referenced against the current 235-unit Codex corpus.
✓ = covered at Arnold-equivalent depth, △ = topic present but Codex
unit shallower than Arnold's chapter (typically templated v0.5
Strand-B prose), ✗ = not covered.

### Part I — Newtonian Mechanics (Ch. 1-2)

| Arnold topic | Codex unit | Status | Note |
|---|---|---|---|
| Galilean group, Galilean relativity | — | ✗ | **Deferred per Arnold's framing**: setup, not load-bearing. |
| Newton's equation as 2nd-order ODE on $M$ | — | ✗ | Setup. Could live in future `09.*` math-physics chapter. |
| Conservation of energy in 1D potential | — | ✗ | Setup. |
| Central-force motion, Kepler problem | — | ✗ | Worked example only — Arnold §8. |
| Motion in central field, virial theorem | — | ✗ | Worked example. |
| Conservation laws, $N$-body | — | ✗ | Setup. |

### Part II — Lagrangian Mechanics (Ch. 3-5)

| Arnold topic | Codex unit | Status | Note |
|---|---|---|---|
| Variational principle (Hamilton's least action) | `03.04.08` variational-calculus | △ | Euler-Lagrange machinery is in `03.04.08`; **least action as foundational principle of mechanics** is not articulated as own unit. |
| Euler-Lagrange equations, derivation | `03.04.08` (mention) | △ | Differential-forms / calculus-of-variations setting. Mechanics-first framing — Lagrangian on $TM$ as equations of motion — not covered. |
| Lagrangian on tangent bundle $L : TM \to \mathbb{R}$ | — | ✗ | **Gap.** Arnold §16. The intrinsic Lagrangian-on-$TM$ setup. |
| Legendre transform, fibre derivative $TM \to T^*M$ | — | ✗ | **Gap.** Arnold §15. The bridge from Lagrangian to Hamiltonian formalism. |
| Geodesic flow as Lagrangian system on Riemannian manifold | — | ✗ | **Gap.** Arnold §17. |
| Noether's theorem (continuous symmetry → conservation law) | — | ✗ | **Gap.** Arnold §20. **Foundational across math-physics.** |
| Oscillations, normal modes, Lagrange's small-oscillation theorem | — | ✗ | Gap. Arnold Ch. 5 — worked example. |
| Rigid body, Euler's theorem, Lagrange's top | — | ✗ | Gap. Arnold §27-§30 + Appendix 2 (Euler equations as geodesic on $SO(3)$). |

### Part III — Hamiltonian Mechanics (Ch. 6-10)

Bulk of Codex's existing symplectic chapter lives here.

| Arnold topic | Codex unit | Status | Note |
|---|---|---|---|
| Symplectic vector space, symplectic form | `05.01.01` symplectic-vector-space | △ | Templated; Cannas-plan depth gap. |
| Symplectic manifold, Darboux's theorem | `05.01.02`, `05.01.04` darboux-theorem | △ | Same Darboux depth gap as Cannas plan. |
| Cotangent bundle, Liouville form $\theta = p\, dq$ | `05.02.05` cotangent-bundle | △ | `tier_anchors` cite Arnold §37-§44. Naturality of $\theta$ and geodesic-flow worked example absent. |
| Hamiltonian vector field, $\iota_{X_H}\omega = dH$ | `05.02.01` hamiltonian-vector-field | △ | Templated. |
| Liouville's theorem (phase volume preservation) | — | ✗ | **Gap.** Arnold §16 / §38. $\mathcal{L}_{X_H}\omega^n = 0$. |
| Poincaré recurrence theorem | — | ✗ | **Gap.** Arnold §16. Volume preservation ⇒ recurrence. |
| Poisson bracket, Jacobi identity | `05.02.02` poisson-bracket | △ | Templated. |
| Integral invariants of Poincaré-Cartan | — | ✗ | Gap. Arnold §44. The 1-form $p\, dq - H\, dt$ on extended phase space. **Arnold-distinctive, Cannas-absent.** |
| **Hamilton-Jacobi equation** $\partial_t S + H(q, \partial_q S, t) = 0$ | `05.05.03` generating-functions | △ | Generating-function-as-symplectomorphism in `05.05.03`; **Hamilton-Jacobi PDE for the flow** (action as function of endpoint, separation of variables, Jacobi's complete-integrals theorem) absent. **Arnold-distinctive depth gap.** |
| Canonical transformations, generating functions | `05.05.03` generating-functions | △ | Recently shipped; covers symplectomorphism-from-function. The four classical types $S_1, S_2, S_3, S_4$ not all worked. |
| Integrable system (Liouville) | `05.02.03` integrable-system | △ | Templated; depth gap. |
| Action-angle variables (local statement) | `05.02.04` action-angle-coordinates | △ | Templated. **On Cannas priority-1 deepening list.** |
| **Liouville-Arnold theorem** (compact level set ⇒ torus, global action-angle) | `05.02.04` (claimed) | △ | Title invokes "action-angle"; theorem not actually proved. **On Cannas priority-1 deepening list.** |
| **KAM theorem** (Kolmogorov-Arnold-Moser, persistence of diophantine tori) | — | ✗ | **Gap (priority-1, apex unit).** Not in Codex anywhere. Largest topic-level gap. |
| **Adiabatic invariants** | — | ✗ | **Gap (priority-2).** Arnold §52. |
| Perturbation theory (Lindstedt series, Birkhoff normal form) | — | ✗ | Gap. Arnold §51 + Appendix 7. Setup for KAM. |

### Appendices — Arnold-distinctive material

| Appendix | Codex unit | Status | Note |
|---|---|---|---|
| App. 1: Riemannian curvature | `03.05.09` curvature; cross-strand `03.*` | △ | Topic present; Arnold's mechanics-flavoured exposition not separately reproduced. |
| App. 2: Geodesics on Lie groups; Euler-Arnold equations on $\mathrm{Diff}_{\mathrm{vol}}$ | — | ✗ | Gap. Arnold's celebrated ideal-fluid-as-geodesic observation. **Arnold-distinctive.** |
| App. 3: Symplectic structures on algebraic manifolds | partial in `04.*`, `05.01.02` | △ | Standard examples ($\mathbb{C}P^n$ as Kähler) present. |
| App. 4: Contact structures | `05.10.01` contact-manifold | ✓ | Topic shipped. |
| App. 5: Dynamical systems with symmetry | `05.04.01` moment-map; `05.04.02` reduction | △ | Cannas-anchored; on Cannas priority-1 list. |
| App. 6: Williamson's normal form for quadratic Hamiltonians | — | ✗ | Gap. |
| App. 7: Normal forms near fixed point / closed trajectory; Birkhoff | — | ✗ | Gap. Setup for KAM. |
| **App. 8: KAM theorem** | — | ✗ | **Gap (priority-1, apex unit).** ~80 pages of Arnold. |

### Topics Arnold covers as remarks / pointers (no equivalence-coverage required)

| Topic | Codex unit | Note |
|---|---|---|
| Arnold conjecture (fixed-point lower bound) | `05.08.01` arnold-conjecture | ✓ Codex has the unit; Floer downstream in `05.08.02-04`. |
| Symplectic topology (Gromov non-squeezing) | `05.07.01-02` | ✓ Cannas / McDuff-Salamon territory. |

### Aggregate coverage estimate

- **Theorem layer:** ~55% topic-level, ~30% Arnold-equivalent
  proof-depth. After priority-1: ~65%; priority-1+2: ~85%; +
  priority-3 + Cannas-deferred: ~93%.
- **Exercise layer:** Arnold's ~250 Problems vs. Codex's templated
  7-question block. Defer to dedicated exercise-pack pass.
- **Worked-example layer:** ~20% covered. Kepler, oscillator, Lagrange
  top, ellipsoidal geodesics absent.
- **Notation layer:** ~85% aligned. $\omega = dp \wedge dq = -d\theta$,
  $\theta = p\, dq$, $L$ Lagrangian, $H$ Hamiltonian, $X_H$, $\{,\}$,
  $(I, \theta)$ — all match. No `notation/arnold.md` needed.
- **Sequencing layer:** ~70%. Hamiltonian flow OK; Lagrangian-to-
  Hamiltonian bridge (Legendre / fibre derivative) missing.
- **Intuition layer:** ~40%. Mechanics-first intuition partially
  captured but not at Arnold's depth.
- **Application layer:** ~50%. Kepler, rigid body, geodesic flow,
  three-body partially in Cannas-anchored Connections sections.

---

## §3 Gap punch-list (priority-ordered)

The Codex symplectic chapter is mature on the Hamiltonian side; Arnold
exposes gaps on (a) the Lagrangian side (entire `05.00-*` chapter to
write), (b) the perturbation / KAM block (entire `05.09-*` chapter to
write, with KAM as apex), and (c) a handful of Hamilton-Jacobi /
geodesic-flow / Liouville-recurrence / Poincaré-Cartan / adiabatic-
invariant items absent from Cannas.

Recommended slot ranges:
- New `05.00-lagrangian-mechanics/` chapter (Lagrangian foundation).
- New `05.09-perturbation/` chapter (KAM, normal forms, adiabatic).
- Extensions to existing `05.02-hamiltonian/` and `05.05-lagrangian/`.

### Priority 1 — apex gap (KAM) and load-bearing Lagrangian infrastructure

1. **`05.09.01` KAM theorem (Kolmogorov-Arnold-Moser).** **Apex unit.**
   Arnold Appendix 8 anchor; Kolmogorov 1954 (Dokl. Akad. Nauk SSSR
   98), Arnold 1963 (Russ. Math. Surveys 18), Moser 1962 (Nachr. Akad.
   Wiss. Göttingen) as joint originator-citations. Three-tier;
   ~2500-3000 words at master tier. Master section: diophantine
   condition $|\langle k, \omega \rangle| \geq \gamma |k|^{-\tau}$;
   Newton-iteration scheme; small-divisor bounds; statement that for
   sufficiently small $\epsilon$ the surviving tori have positive
   Lebesgue measure tending to full as $\epsilon \to 0$. **Highest
   priority — largest single topic-level gap in the symplectic
   chapter.**

2. **`05.00.01` Lagrangian on the tangent bundle.** Arnold §16 anchor;
   Lagrange 1788 *Mécanique analytique* (originator of analytical
   form), Arnold 1974 (originator of geometric tangent-bundle form).
   Three-tier; ~1800 words. Master section: $L : TM \to \mathbb{R}$;
   action $S[\gamma] = \int L(\gamma, \dot\gamma)\, dt$; Euler-Lagrange
   $\frac{d}{dt}\partial_v L - \partial_q L = 0$. Worked example:
   $L = \tfrac{1}{2}m|\dot q|^2 - V(q)$ recovers Newton.

3. **`05.00.02` Hamilton's principle of least action.** Arnold §13
   anchor; Maupertuis 1744 / Lagrange 1788 / Hamilton 1834 (joint
   originator-citation). Three-tier; ~1500 words. Statement:
   $q(t)$ is a motion iff critical point of $S[q]$. Master section:
   derivation of Euler-Lagrange from $\delta S = 0$; least action as
   foundational rather than derived.

4. **`05.00.03` Legendre transform / fibre derivative $TM \to T^*M$.**
   Arnold §15 anchor; Legendre 1787 originator-citation. Three-tier;
   ~1600 words. Master section: $\mathbb{F}L : (q, v) \mapsto
   (q, \partial_v L)$ is a diffeomorphism for hyper-regular $L$;
   $H(q, p) = p \cdot v - L$. Worked example:
   $L = \tfrac{1}{2}|v|^2 - V$ ⇒ $H = \tfrac{1}{2}|p|^2 + V$.
   **Bridge from `05.00-*` Lagrangian block to existing `05.02-*`
   Hamiltonian block.**

5. **`05.00.04` Noether's theorem.** Arnold §20 anchor; Noether 1918
   *Invariante Variationsprobleme* (Nachr. Königl. Ges. Wiss.
   Göttingen) **— originator, mandatory originator-prose treatment.**
   Three-tier; ~2000 words. Statement: one-parameter group of
   symmetries of a Lagrangian system gives a conserved quantity; in
   the Hamiltonian setting, this becomes the moment map. Worked
   examples: translation ⇒ momentum, rotation ⇒ angular momentum,
   time-translation ⇒ energy. **Foundational across math-physics; used
   downstream by gauge theory, QFT.**

6. **`05.02.06` Geodesic flow as Hamiltonian flow on $T^*M$.** Arnold
   §17 + App. 1 anchor; Jacobi 1837 originator-citation. Three-tier;
   ~1700 words. Master section: geodesic equations as Euler-Lagrange
   for $L = \tfrac{1}{2}|v|^2_g$, equivalently Hamiltonian flow on
   $T^*M$ for $H = \tfrac{1}{2}|p|^2_{g^{-1}}$. Worked examples: round
   $S^n$ (integrable); flat torus (integrable); ellipsoid (Jacobi's
   integrable case — anchors Liouville-Arnold).

7. **Deepen `05.02.04` action-angle-coordinates (Liouville-Arnold).**
   *Already on Cannas priority-1 list (Cannas item 7).* Replace
   templated proof with actual Liouville-Arnold statement and proof.
   **No double-count — deferred to Cannas batch; flagged here for
   honest overlap accounting.**

### Priority 2 — Arnold-distinctive Hamiltonian-mechanics depth (absent from Cannas)

8. **`05.05.04` Hamilton-Jacobi equation.** Arnold §47 anchor;
   Hamilton 1834 / Jacobi 1837 *Vorlesungen über Dynamik* joint
   originator-citation. Three-tier; ~2000 words. Statement: $S(q, t)$
   solves $\partial_t S + H(q, \partial_q S, t) = 0$, generates the
   Hamiltonian flow. Jacobi's theorem on complete integrals: complete
   integral $S(q, t; \alpha)$ depending on $n$ parameters $\alpha_i$
   gives flow via $\partial_\alpha S = \beta$, $p = \partial_q S$.
   Master section: WKB / geometric optics interpretation; separation
   of variables (Kepler, central force); bridge to `05.05.03`.

9. **`05.02.07` Liouville's theorem (phase volume preservation).**
   Arnold §16 / §38 anchor; Liouville 1838 originator. Three-tier;
   ~1300 words. Statement: Hamiltonian flow preserves
   $\omega^n / n!$. Master section: one-line Cartan-formula proof;
   ergodic-theory consequences. **Used silently throughout existing
   units; promotion closes a foundational gap.**

10. **`05.02.08` Poincaré recurrence theorem.** Arnold §16 anchor;
    Poincaré 1890 *Sur le problème des trois corps* originator,
    **mandatory originator-prose**. Three-tier; ~1300 words.
    Statement: measure-preserving transformation on finite-measure
    space sends a.e. point arbitrarily close to itself infinitely
    often; specialised to Hamiltonian flow on compact energy surface.
    Master section: proof from Liouville; Boltzmann reply to Loschmidt.

11. **`05.09.02` Adiabatic invariants.** Arnold §52 anchor; Einstein
    1911 / Ehrenfest 1916 originators. Three-tier; ~1800 words.
    Statement: for $H(q, p; \lambda)$ with slowly varying
    $\lambda(\epsilon t)$, $I = \frac{1}{2\pi}\oint p\, dq$ is
    conserved to all orders in $\epsilon$ on time scales $1/\epsilon$.
    Master section: averaging proof; Arnold-Henrard generalisation.
    Bridge to geometric / Berry phase.

12. **`05.09.03` Birkhoff normal form / perturbation theory.** Arnold
    §51 + App. 7 anchor; Birkhoff 1927 *Dynamical Systems* originator.
    Three-tier; ~1800 words. Statement: $H$ near non-resonant elliptic
    fixed point can be transformed to $H = H_0(I) + O(I^N)$ for any
    $N$. Lindstedt series here. **Setup for KAM (item 1).**

13. **`05.02.09` Integral invariants of Poincaré-Cartan.** Arnold §44
    anchor; Cartan 1922 *Leçons sur les invariants intégraux*
    originator. Three-tier; ~1400 words. Statement: 1-form
    $\theta - H\, dt$ on $T^*M \times \mathbb{R}$ has integral over
    closed contour invariant under Hamiltonian flow. **Cannas-absent,
    Arnold-distinctive.**

### Priority 3 — depth gaps on existing units, examples, applications

14. **Deepen `05.02.05` cotangent-bundle.** *Already on Cannas
    priority-3 list (item 17).* Compute $\omega = -d\theta$;
    naturality of $\theta$; geodesic-flow worked example.
    **Deferred to Cannas batch.**

15. **Deepen `05.05.03` generating-functions.** Add Master-tier table
    of $S_1, S_2, S_3, S_4$; Jacobi identity for canonical
    transformations; bridge to Hamilton-Jacobi (item 8). No new ID.

16. **`05.09.04` Williamson's normal form for quadratic Hamiltonians.**
    Arnold App. 6 anchor; Williamson 1936 (Amer. J. Math. 58)
    originator. Three-tier; ~1400 words. Quadratic Hamiltonian on
    $\mathbb{R}^{2n}$ is symplectically equivalent to a sum of
    oscillators with eigenfrequencies from spectrum. **Optional;
    closes classification gap.**

17. **`05.00.05` Worked Lagrangian examples (oscillator, central
    force, rigid body).** Arnold Ch. 5 anchor. Three-tier; ~1800
    words. Beginner: harmonic oscillator. Intermediate: central
    potential, Kepler's laws. Master: Euler equations of rigid body
    as geodesic flow on $SO(3)$ left-invariant metric; Lagrange's top.
    **Provides worked-example layer Codex currently lacks.**

18. **`05.00.06` Galilean group and Newtonian mechanics setup.**
    Arnold Ch. 1 anchor. Three-tier; ~1500 words. **Optional / low
    priority** — Arnold himself dispatches as setup. Defer unless a
    flow needs the Newtonian-to-Lagrangian bridge as a step.

### Priority 4 — Appendix material, optional / advanced

19. **`05.09.05` Geodesics on Lie groups / Euler-Arnold equations.**
    Arnold App. 2 anchor; Arnold 1966 (Ann. Inst. Fourier 16)
    originator. Master-only; ~1500 words. Euler equations of ideal
    fluid as geodesic flow on $\mathrm{Diff}_{\mathrm{vol}}(M)$.
    **Originator-prose; bridges to Arnold-Khesin (FT 1.12).**

20. **`05.09.06` Nekhoroshev estimates / exponential stability.**
    Nekhoroshev 1977 originator. Master-tier; ~1500 words.
    Strengthening of KAM to deterministic exponential bound on action
    drift. **Optional sequel to item 1.**

21. **`05.00.07` Survey: classical-mechanics examples** (three-body,
    Lagrange points, Hill's lunar theory). Master-only; ~1000 words.
    Defer unless curriculum expands into celestial mechanics.

---

## §4 Implementation sketch

**Minimum Arnold-equivalence batch** = priority 1 only (items 1-7):
6 new units + 1 deferred deepening. Estimates:

- ~3 hours per typical new unit; ~5 hours for KAM (item 1) — large
  and requiring originator research.
- Priority 1: 5 typical × 3 h + 1 KAM × 5 h = ~20 hours.
- Priority 1+2: ~20 + 6 new × 3 h = ~38 hours.
- Priority 1+2+3 (excl. deferred items 7, 14): ~38 + 3 new × 3 h +
  1 deepening × 1.5 h = ~49 hours.

At 4-6 production agents in parallel, priority-1+2 fits in 3-4 days
with one integration agent. KAM is the bottleneck; warrants its own
dedicated agent invocation with extended token budget.

**Batch structure.**

- **Batch A (Lagrangian foundation, items 2-5, ~12 h):** opens new
  `05.00-lagrangian-mechanics/` chapter. Internal references; produce
  together. Must precede item 6.
- **Batch B (Geodesic / Hamilton-Jacobi / Liouville / recurrence,
  items 6, 8, 9, 10, ~13 h):** extends `05.02-hamiltonian/` and
  `05.05-lagrangian/`. After or in parallel with Batch A.
- **Batch C (Perturbation block, items 1, 11, 12, 13, ~14 h):** opens
  new `05.09-perturbation/` chapter (item 13 in `05.02-*`). After
  Batch B (KAM cites Birkhoff cites Poincaré recurrence).
- **Optional Batch D (priority-3+4, items 15-21, ~15 h):** after
  Cannas priority-1+2 batch lands.

**Originator-prose targets.** Arnold is **partly originator** (the
Liouville-Arnold action-angle upgrade is his; the geodesic-on-
Diff_vol is his; KAM synthesis is his voice). Joint originator-
citations:

- **KAM** (item 1): Kolmogorov 1954, Arnold 1963, Moser 1962. Cite
  all three; Appendix 8 is canonical synthesis.
- **Lagrangian-on-$TM$** (2): Lagrange 1788 + Arnold 1974.
- **Hamilton's principle** (3): Maupertuis 1744 / Lagrange 1788 /
  Hamilton 1834.
- **Legendre** (4): Legendre 1787; Hamilton 1834 / Arnold 1974 for
  geometric form.
- **Noether** (5): Noether 1918. **Originator-prose mandatory** —
  paraphrase her one-page proof.
- **Geodesic flow** (6): Jacobi 1837; Arnold §17 / App. 1.
- **Hamilton-Jacobi** (8): Hamilton 1834 / Jacobi 1837.
- **Liouville's theorem** (9): Liouville 1838.
- **Poincaré recurrence** (10): Poincaré 1890. **Originator-prose
  mandatory.**
- **Adiabatic invariants** (11): Einstein 1911 / Ehrenfest 1916 /
  Arnold §52.
- **Birkhoff** (12): Birkhoff 1927.
- **Poincaré-Cartan** (13): Poincaré 1899 / Cartan 1922.

Each priority-1 unit's Master section cites originator + Arnold.

**Notation crosswalk.** Aligned per §2. No `notation/arnold.md`
needed. Pin sign convention $\omega = dp \wedge dq = -d\theta$,
$\theta = p\, dq$ in Master sections of items 4 and 8.

**DAG edges.** New prerequisites for priority-1+2:

- `05.00.01` ← {`03.02.01` smooth-manifold, `03.04.08` variational-
  calculus}
- `05.00.02` ← `05.00.01`
- `05.00.03` ← {`05.00.01`, `05.02.05` cotangent-bundle}
- `05.00.04` ← {`05.00.02`, `03.03.02` group-action};
  `05.00.04` → `05.04.01` moment-map *(Noether → moment-map: the
  Hamiltonian moment map is the Noether-conserved quantity).*
- `05.02.06` ← {`05.00.03`, `05.02.05`, `05.02.01`}
- `05.02.07` ← {`05.01.02`, `05.02.01`, `03.04.04`}
- `05.02.08` ← `05.02.07`
- `05.05.04` ← {`05.05.03`, `05.02.04`}
- `05.09.01` ← {`05.09.03`, `05.02.04`, `05.02.08`}
- `05.09.02` ← `05.02.04`
- `05.09.03` ← {`05.02.04`, `05.05.04`}
- `05.02.09` ← {`05.02.05`, `05.05.03`}

**Chapter structure.** Two new chapters + extensions to two existing:

- New `05.00-lagrangian-mechanics/`: items 2-5 (and 17-18, 21).
- New `05.09-perturbation/`: items 1, 11, 12 (and 16, 19, 20).
- Extend `05.02-hamiltonian/`: items 6, 9, 10, 13.
- Extend `05.05-lagrangian/`: item 8.

**Composite Cannas + Arnold batch.** Production order:

1. Cannas priority-1 (Moser, Weinstein, Darboux + action-angle
   deepening — closes technique gap).
2. Arnold Batch A (Lagrangian foundation).
3. Arnold Batch B (Geodesic-HJ-Liouville-recurrence).
4. Arnold Batch C (KAM block — depends on Cannas action-angle
   deepening from step 1).
5. Cannas priority-2 + Arnold priority-3+4 interleave as background.

**Cross-references.** Arnold KAM (item 1) ↔ Liouville-Arnold deepening
(item 7, in Cannas batch): KAM is perturbation of Liouville-Arnold
foliated picture. Arnold Noether (item 5) → moment-map (`05.04.01`):
moment map is Noether-conserved quantity for group action.

---

## §5 What this plan does NOT cover

- Line-number Problem inventory across three Parts and eight
  Appendices. Defer unless punch-list expands.
- Arnold's ~250 Problems vs. Codex's templated 7-problem block.
  Dedicated Arnold-exercise-pack family (`05.00.E1` Lagrangian,
  `05.02.E1` Hamiltonian, `05.09.E1` perturbation) is P3-priority
  follow-up.
- **Cannas-overlap items**: deepening of `05.02.04` action-angle
  (Cannas priority-1 item 7) and `05.02.05` cotangent-bundle (Cannas
  priority-3 item 17) **not duplicated here**. Referenced in §3
  (items 7, 14) but production owned by Cannas plan.
- McDuff-Salamon territory: Floer-theoretic Arnold conjecture
  (`05.08.02-04`), Gromov non-squeezing, $J$-holomorphic curves.
  Arnold mentions only as remarks.
- Heavy classical-mechanics computation: full Laplace-Runge-Lenz, full
  three-body, Hill's lunar theory, Lagrange points L1-L5. Goldstein /
  Landau-Lifshitz territory; Arnold dispatches as worked examples.
  Item 21 is pointer-stub only.
- Topological methods in hydrodynamics (FT 1.12). Item 19 is stub;
  full Arnold-Khesin coverage is its own per-book plan.
- Statistical mechanics / ergodic theory beyond Poincaré recurrence.
  Lives in Codex `08-stat-mech/`.
- Geometric quantisation (Kostant-Souriau). Arnold mentions in
  passing (App. 3); deferred to a future plan.
- `notation/arnold.md` standalone file. Crosswalk decisions in §4 are
  sufficient.
- Worked-example densification across the existing 21 symplectic
  units (curriculum-wide v0.5-Strand-B pattern). Items 6 and 17
  partially fill the gap.

---

## §6 Acceptance criteria for FT equivalence (Arnold)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, the book
is at equivalence-coverage when:

- ≥95% of Arnold's named theorems map to Codex units **at
  Arnold-equivalent proof depth** (currently ~30%; after priority-1
  ~65%; after priority-1+2 ~85%; after priority-3 + Cannas-deferred
  ~93%; after priority-4 ~96%). KAM (item 1) is the single largest
  contributor.
- ≥80% of Arnold's Problems have a Codex equivalent (currently ~5%;
  closing requires the Arnold-exercise-pack pass per §5).
- ≥90% of Arnold's worked examples reproduced (currently ~20%;
  priority-1+2 batch + item 17 brings to ~65%; remainder needs
  optional worked-example densification pass).
- Notation alignment recorded inline in rewritten Master sections;
  no separate `notation/arnold.md`.
- For every chapter dependency in Arnold (Part II → Part III via
  Legendre; §47 → §49 via Hamilton-Jacobi as integrability tool;
  §50 → App. 8 via action-angle as unperturbed system for KAM), there
  is a corresponding `prerequisites` arrow chain in Codex's DAG. The
  Lagrangian → Legendre → Hamiltonian chain in particular must be
  unbroken after the priority-1 batch.
- Pass-W weaving connects the new units (`05.00.01-04`, `05.02.06-09`,
  `05.05.04`, `05.09.01-03`) to the existing
  `05.01-symplectic-linear/`, `05.02-hamiltonian/`,
  `05.04-moment-reduction/`, `05.05-lagrangian/`, and the prerequisite
  `03.04-differential-forms/` chapters via lateral connections.

The 6 priority-1 new units (items 1-6) + the deferred Cannas-batch
deepening (item 7) close the load-bearing-technique gap and ship the
KAM apex unit. The 6 priority-2 items (items 8-13) close
Arnold-distinctive Hamiltonian depth absent from Cannas. The 8
priority-3+4 items (items 14-21) are depth-completion, examples, and
survey pointers; they bring proof-depth from ~85% to ~96% but are not
strictly required for sign-off.

**Honest scope.** Mid-sized equivalence gap: symplectic chapter is
mature on the Hamiltonian side (Arnold cited as anchor on most
existing units) but has a structural gap on the Lagrangian side
(entire `05.00-*` chapter to write) and a single largest gap in
the perturbation / KAM block (entire `05.09-*` chapter to write,
KAM as apex). Priority-1 batch is **6 new units + 1 deferred
deepening** — larger than Cannas priority-1 (3-4 new) but smaller
than Hatcher priority-1+2 (10 units).

**Apex unit designation.** Item 1 (`05.09.01` KAM) is designated an
**apex unit** — at the boundary of the curriculum's depth, requiring
originator-research synthesis (three joint originators across two
languages and three decades), substantial master-tier exposition
(~3000 words), bridging to modern dynamical-systems literature.
Apex units are produced with extended agent budgets and stricter
quality-sampling thresholds (per
`docs/specs/ORCHESTRATION_PROTOCOL.md` §8). The Arnold KAM unit joins
a small list across the curriculum (e.g., `03.09.10` Atiyah-Singer in
the Lawson-Michelsohn batch).

**Composite Cannas + Arnold batch (restated).** Cannas Lectures 22-24
and Arnold Part III overlap on Liouville-Arnold and action-angle.
**Producing Cannas priority-1 and Arnold priority-1 in coordinated
succession yields a ~10-unit mechanics-equivalence block** closing
both books' core gaps together. Shared `05.02.04` deepening owned by
Cannas batch; Arnold-distinctive new units (KAM, Lagrangian
foundation, Hamilton-Jacobi PDE, geodesic flow, Noether, Liouville
volume, Poincaré recurrence) owned by this Arnold batch. After both
land, the symplectic-mechanics block is at ≥85% Arnold-equivalent and
≥85% Cannas-equivalent simultaneously.
