# Landau, Lifshitz — *Mechanics* (Fast Track 1.02) — Audit + Gap Plan

**Book:** L. D. Landau, E. M. Lifshitz, *Mechanics* (Volume 1 of the
*Course of Theoretical Physics*).

- Russian original: *Mekhanika*, Nauka, Moscow, 1958.
- 3rd English edition: translated by J. B. Sykes and J. S. Bell,
  Butterworth-Heinemann, 1976; reprinted continuously through 2000.
  Pagination and section references in this plan are to the 3rd English
  edition (vii + 169 pp.).

**Fast Track entry:** 1.02 — the classical-mechanics anchor of Section 1
of the booklist (after 1.01 Shilov *Linear Algebra*, before 1.03
*Classical Theory of Fields*). Catalog status: **BUY** (under active
copyright; Pergamon / Butterworth-Heinemann commercial title).

**Audit completeness: full.** Local PDF resolved at
`reference/textbooks-extra/Vol 1 - Landau, Lifshitz - Mechanics (3rd ed,
1976).pdf` (7.3 MB, the canonical Sykes-Bell translation). The catalog
flags 1.02 as BUY-only, but a copy was already in
`reference/textbooks-extra/`; full TOC and key sections (Ch. I-VII)
inventoried directly. WebFetch fallback was not needed.

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite).
Output is a punch-list of new units and existing-unit deepenings so that
*Mechanics* is covered to the FT-equivalence threshold (≥95% effective
coverage; see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Not a
full P1 audit — Landau's 251 Problems are inventoried at chapter level
only.

**Substantial overlap with the Arnold plan
(`plans/fasttrack/arnold-mathematical-methods.md`).** Landau Vol 1 and
Arnold cover the same canonical material — least action, Lagrangian,
Hamiltonian, canonical transformations, Hamilton-Jacobi, action-angle,
adiabatic invariants — with opposite editorial choices (Landau:
physicist-coordinates-first, examples-driven, 169 pp; Arnold:
geometer-manifolds-first, theorem-driven, 500+ pp). **The Arnold batch
(items 1-7, 11-13) has already shipped the Codex equivalents of Landau
Chapters I-II and VII.** This Landau plan does not double-count those
units; it itemises *Landau-distinctive* deepenings and the
worked-example layer Landau is canonically known for.

---

## §1 What Landau's *Mechanics* is for

Landau-Lifshitz Volume 1 is **the originating physics text the Fast
Track uses to ground all later mechanics tracks** (Arnold 1.11, Cannas
1.11, Souriau 2.11, Woodhouse 3.09). Its distinctive editorial choice:
**derive *all* of classical mechanics from the principle of least
action.** The book opens at §1 with generalised coordinates, reaches
Lagrange's equations by §5, and the entire 169-page exposition is one
unbroken chain of variational consequences — Lagrangian → conservation
laws → integrable problems → small oscillations → rigid body →
Hamiltonian → canonical transformations → Hamilton-Jacobi → adiabatic
invariants. No Newtonian setup chapter; Newton's $F = ma$ first appears
at eq. (5.4) as a *corollary* of the Euler-Lagrange equations for a
specific Lagrangian. Galilean relativity (§3) is used to *constrain* the
Lagrangian of a free particle and *derive* $L = \tfrac{1}{2}mv^2$ from
symmetry alone — a derivation Arnold copies but most physicists do not.

Density: ~30 named results in 169 pp., compared to Arnold's ~120 in
500+ pp. Landau is **extremely terse**; arguments are often one
paragraph, examples are problems with brief solutions, and what
Arnold spends a chapter motivating, Landau states in three sentences.
Reading Landau is a multiplier on prior mechanics knowledge; reading
him as a first source is famously hard.

Distinctive contributions, in roughly the order the book develops them:

1. **Principle of least action as foundational, not derived.** §2: the
   action $S = \int_{t_1}^{t_2} L(q, \dot q, t)\, dt$ is the *defining*
   object of mechanics; Euler-Lagrange equations
   $\frac{d}{dt}\frac{\partial L}{\partial \dot q_i} -
   \frac{\partial L}{\partial q_i} = 0$ are derived in two pages.
2. **Galilean-relativity derivation of the free-particle Lagrangian.**
   §4: $L$ for a free particle must be a function of $v^2$ alone
   (isotropy + homogeneity of space + homogeneity of time); Galilean
   invariance under infinitesimal velocity boost forces $L \propto v^2$;
   so $L = \tfrac{1}{2}mv^2$ up to an additive total derivative. **The
   mass appears as the proportionality constant, not as a primitive.**
3. **Mechanical similarity / virial theorem.** §10: if
   $U(\alpha r) = \alpha^k U(r)$ then for similar trajectories
   $t'/t = (l'/l)^{1 - k/2}$; gives Kepler's third law $T^2 \propto a^3$
   (with $k = -1$), gives oscillator period independent of amplitude
   ($k = 2$), gives free-fall law (constant force, $k = 1$).
   **Landau-distinctive — Arnold does not isolate similarity as a
   technique.**
4. **The reduced-mass / one-body reduction.** §13: two-body central
   problem reduces to one body of reduced mass $\mu = m_1 m_2 / (m_1 +
   m_2)$ in central field. Standard, but Landau's treatment is the
   physics-canonical one.
5. **Kepler problem — full solution including the Runge-Lenz vector.**
   §15: orbit equation $p/r = 1 + e\cos\varphi$, time-period via Kepler
   III, the additional conserved vector
   $\mathbf{A} = \mathbf{p} \times \mathbf{M} - m\alpha \hat{\mathbf{r}}$
   *named in the §15 problems but not as "Runge-Lenz"*. Closure of
   orbits as the signature of the $1/r$ potential.
6. **Scattering: Rutherford's formula and small-angle scattering.**
   §17-§20: cross-section as Jacobian, Rutherford
   $d\sigma = (\alpha/2mv_\infty^2)^2 \sin^{-4}(\theta/2)\, d\Omega$,
   small-angle scattering, **scattering in the laboratory frame**
   (boost from CM to lab — physicist-essential, Arnold-absent).
7. **Small oscillations — full treatment.** Ch. V (§§21-30, 36 pp.):
   1D harmonic, forced oscillations including resonance, damped,
   forced+damped, parametric resonance, anharmonic oscillations and
   nonlinear resonance, normal modes of coupled systems, oscillations
   of molecules. **Landau-canonical; reproduced in virtually every
   physics curriculum.**
8. **Rigid-body dynamics.** Ch. VI (§§31-39, 35 pp.): angular velocity,
   inertia tensor, principal axes, angular momentum of a rigid body,
   Euler's equations $I_1 \dot\Omega_1 = (I_2 - I_3) \Omega_2 \Omega_3$
   etc., Eulerian angles, **the symmetrical top**, **rigid bodies in
   contact** (rolling, slipping, no-slip constraints), motion in a
   non-inertial frame (Coriolis, centrifugal). **Landau-canonical.**
9. **Hamilton's equations / canonical equations.** Ch. VII §40:
   Hamiltonian $H = \sum p_i \dot q_i - L$ as Legendre transform,
   Hamilton's equations $\dot q = \partial H / \partial p$,
   $\dot p = -\partial H / \partial q$.
10. **Routhian.** §41: hybrid Lagrangian-Hamiltonian formulation
    eliminating cyclic coordinates. **Used in physics but rarely in
    geometric-mechanics texts.**
11. **Poisson brackets — full algebraic treatment.** §42: definition,
    Jacobi identity (with explicit operator-commutator proof),
    Poisson's theorem ($[f,g]$ of two integrals is itself an integral),
    Poisson brackets of angular momentum components.
12. **Action as a function of the coordinates; Maupertuis' principle.**
    §43-§44: $\partial S / \partial q_i = p_i$, $\partial S / \partial t
    = -H$, abbreviated action $S_0 = \int p\, dq$ minimised at fixed
    energy. **Maupertuis is Landau's bridge to geometric optics and
    Hamilton-Jacobi.**
13. **Canonical transformations and Liouville's theorem.** §45-§46:
    four types of generating functions $F_1, F_2, F_3, F_4$,
    invariance of $\sum p_i\, dq_i - H\, dt$, phase-volume preservation
    via Jacobian = 1.
14. **Hamilton-Jacobi equation and separation of variables.**
    §47-§48: $\partial S / \partial t + H(q, \partial S / \partial q,
    t) = 0$, complete integral $S(q, t; \alpha_1, \ldots, \alpha_s)$,
    Jacobi's $\beta_i = \partial S / \partial \alpha_i$ theorem,
    separation in spherical, parabolic, elliptic coordinates with
    worked Kepler and two-centre cases.
15. **Adiabatic invariants and canonical action variables.** §49-§51:
    $I = \frac{1}{2\pi}\oint p\, dq$ is invariant under slow parameter
    variation; **accuracy of adiabatic conservation** (§51) — Landau
    shows $\Delta I$ is exponentially small in $1/\epsilon$ via contour
    integration around complex singularities of $q(t)$, a
    Landau-canonical small-divisor-free derivation. §52 conditionally
    periodic motion.
16. **Worked Problems as primary pedagogical mechanism.** Roughly 251
    Problems with solutions, distributed §-by-§. **The Problems are
    not exercises in the modern sense — they are mini-chapters.**
    Examples: Lagrangian of double pendulum (§5 Pr. 1), Kepler in a
    parabolic orbit, anharmonic oscillator perturbation series,
    Lagrange's top (§35 Pr. 1), nutation of a symmetrical top.

The book ends before relativistic mechanics (deferred to Vol. 2) and
before continuum mechanics (deferred to Vol. 6-7). It also stops
short of KAM, perturbation theory beyond Birkhoff, and the modern
symplectic-topology programme — those are mid-20th-century and later
developments, not Landau's territory.

---

## §2 Coverage table (Codex vs Landau Vol 1)

Cross-referenced against the current Codex corpus (49 units in
`05-symplectic/`, including the Arnold-MM substitute batch already
shipped). ✓ = covered at Landau-equivalent depth, △ = topic present but
Landau-distinctive examples / framing not captured, ✗ = not covered.

### Chapter I — Equations of Motion (§§1-5, 12 pp.)

| Landau topic | Codex unit | Status | Note |
|---|---|---|---|
| Generalised coordinates, configuration space | (touched in `05.00.01`) | △ | Coordinate-language framing not isolated; Arnold-MM substitute uses $TM$. |
| Principle of least action (§2) | `05.00.02-hamilton-principle` | △ | Unit exists (Arnold-MM batch); Landau's two-page derivation is the canonical short proof — anchor citation needed. |
| Galilean relativity, derivation of $L = \tfrac{1}{2}mv^2$ (§3-§4) | `05.00.06-galilean-newtonian-setup` | △ | Unit shipped; Landau's *symmetry-derives-the-Lagrangian* argument needs explicit anchor. |
| Lagrangian for system of particles (§5) | `05.00.01-lagrangian-on-tm` | △ | Coordinate-form $L = T - U = \tfrac{1}{2}\sum m_a v_a^2 - U(r_a)$ not the master statement (which uses $L : TM \to \mathbb{R}$). |

### Chapter II — Conservation Laws (§§6-10, 12 pp.)

| Landau topic | Codex unit | Status | Note |
|---|---|---|---|
| Energy conservation from time-translation (§6) | (covered in `05.00.04` Noether) | △ | Noether-anchored; Landau's coordinate-language derivation is one paragraph and worth quoting in the Beginner tier. |
| Momentum conservation from space-translation (§7) | `05.00.04` Noether | △ | Same. |
| Centre of mass (§8) | — | ✗ | **Gap.** Trivially derivable but not isolated as a unit. |
| Angular momentum (§9) | (touched in `05.00.04`) | △ | Noether-rotational-symmetry. Worked formula $\mathbf{M} = \sum \mathbf{r}_a \times \mathbf{p}_a$ not isolated. |
| **Mechanical similarity / virial theorem** (§10) | — | ✗ | **Gap (Landau-distinctive).** No Codex unit. Kepler III, Bertrand's theorem flavour, isolated as own technique. |

### Chapter III — Integration of the Equations of Motion (§§11-15, 17 pp.)

| Landau topic | Codex unit | Status | Note |
|---|---|---|---|
| Motion in 1D, quadrature by energy conservation (§11) | — | ✗ | **Gap.** Foundational physics example. |
| Period of oscillation from potential (§12) | — | ✗ | Gap. Worked example of inversion technique. |
| Reduced mass (§13) | — | ✗ | **Gap.** Two-body to one-body reduction. |
| Motion in a central field (§14) | — | ✗ | **Gap.** Conservation of $\mathbf{M}$, effective potential $U_\text{eff}(r) = U + M^2/2mr^2$, orbit equation. |
| **Kepler problem with Runge-Lenz (§15)** | — | ✗ | **Gap (Landau-distinctive).** Worked-example anchor. |

### Chapter IV — Collisions Between Particles (§§16-20, 14 pp.)

| Landau topic | Codex unit | Status | Note |
|---|---|---|---|
| Disintegration / decay (§16) | — | ✗ | Gap. Physicist-required, math-curriculum-absent. |
| Elastic collisions (§17) | — | ✗ | Gap. |
| Scattering cross-section (§18) | — | ✗ | **Gap.** Definition of $d\sigma$, lab-frame vs CM-frame. |
| **Rutherford formula (§19)** | — | ✗ | **Gap (Landau-distinctive worked example).** |
| Small-angle scattering (§20) | — | ✗ | Gap. |

### Chapter V — Small Oscillations (§§21-30, 32 pp.)

| Landau topic | Codex unit | Status | Note |
|---|---|---|---|
| 1D harmonic oscillator (§21) | scattered in Codex examples | △ | Not isolated as own unit. |
| Forced oscillations, resonance (§22) | — | ✗ | Gap. |
| Coupled oscillators / normal modes (§23) | — | ✗ | **Gap.** Standard physics, Codex-absent. |
| Molecular vibrations (§24) | — | ✗ | Gap. Application example. |
| Damped oscillations (§25) | — | ✗ | Gap. |
| Forced + damped (§26) | — | ✗ | Gap. |
| Parametric resonance (§27) | — | ✗ | **Gap (Landau-canonical).** Mathieu equation territory. |
| Anharmonic oscillations (§28) | — | ✗ | Gap. Perturbation series. |
| Nonlinear resonance (§29) | — | ✗ | Gap. |
| Motion in rapidly oscillating field — Kapitza pendulum (§30) | — | ✗ | **Gap (Landau-canonical, originator-prose).** |

### Chapter VI — Motion of a Rigid Body (§§31-39, 33 pp.)

| Landau topic | Codex unit | Status | Note |
|---|---|---|---|
| Angular velocity (§31) | — | ✗ | Gap. |
| Inertia tensor (§32) | — | ✗ | **Gap.** Physicist-canonical. |
| Angular momentum of a rigid body (§33) | — | ✗ | Gap. |
| **Equations of motion of a rigid body (§34)** | — | ✗ | Gap. Newton-Euler equations. |
| **Eulerian angles (§35)** | — | ✗ | **Gap.** $SO(3)$ parametrisation, used in QM, robotics. |
| **Euler's equations (§36)** | (touched in `05.09.05-euler-arnold-equations`) | △ | Euler-Arnold unit exists at master tier; Landau's coordinate Euler equations on $SO(3)$ not the beginner-tier focus. |
| **The symmetrical top (§37)** | — | ✗ | **Gap (Landau-canonical worked example).** Lagrange's top by quadrature. |
| Rigid bodies in contact / constraints (§38) | — | ✗ | Gap. Holonomic vs. non-holonomic. |
| **Motion in a non-inertial frame (§39)** | — | ✗ | **Gap.** Centrifugal + Coriolis force derived from Lagrangian. |

### Chapter VII — The Canonical Equations (§§40-52, 32 pp.)

Bulk of Codex's existing symplectic chapter lives here. Most items
shipped by the Arnold-MM batch.

| Landau topic | Codex unit | Status | Note |
|---|---|---|---|
| Hamilton's equations (§40) | `05.02.01-hamiltonian-vector-field` | △ | Shipped (Arnold-MM); Landau's coordinate-form derivation worth a Beginner-tier anchor. |
| **The Routhian (§41)** | — | ✗ | **Gap (Landau-distinctive).** Hybrid Lagrangian-Hamiltonian for cyclic coords. |
| Poisson brackets (§42) | `05.02.02-poisson-bracket` | △ | Shipped (Arnold-MM); Landau's operator-commutator proof of Jacobi worth anchoring. |
| Action as function of coordinates (§43) | (touched in `05.05.04` Hamilton-Jacobi) | △ | $\partial S/\partial q = p$, $\partial S/\partial t = -H$; folded into HJ unit. |
| **Maupertuis' principle (§44)** | — | ✗ | **Gap.** Abbreviated action $S_0 = \int p\, dq$, Jacobi metric; bridge to geodesics. |
| Canonical transformations (§45) | `05.05.03-generating-functions` | △ | Shipped; Landau's $F_1, F_2, F_3, F_4$ four-types table not fully in master tier. |
| Liouville's theorem (§46) | `05.02.07-liouville-volume` | ✓ | Shipped (Arnold-MM). |
| Hamilton-Jacobi equation (§47) | `05.05.04-hamilton-jacobi` | △ | Shipped (Arnold-MM); separation-of-variables technique (§48) not its own unit. |
| **Separation of variables (§48)** | — | ✗ | **Gap.** Worked separations (spherical, parabolic, elliptic) including the two-centre Coulomb problem. |
| Adiabatic invariants (§49) | `05.09.02-adiabatic-invariants` | △ | Shipped (Arnold-MM); Landau's exponential-accuracy result (§51) is **the** Landau contribution and is *not* in the shipped unit. |
| Canonical variables (action-angle) (§50) | `05.02.04-action-angle-coordinates` | △ | Shipped (Arnold-MM). |
| **Accuracy of conservation of the adiabatic invariant (§51)** | — | ✗ | **Gap (Landau-originator).** Exponential $\sim e^{-c/\epsilon}$ improvement via complex-contour argument. |
| Conditionally periodic motion (§52) | (touched in `05.02.03` integrable + `05.02.04` action-angle) | △ | Shipped (Arnold-MM). |

### Aggregate coverage estimate

- **Theorem layer:** ~40% topic-level, ~30% Landau-equivalent
  proof-depth. The Hamiltonian half (Ch. VII §§40, 42, 45-47, 49-50)
  is well-shipped via Arnold-MM substitute batch. The Lagrangian-side
  worked-example layer (Ch. III-VI: central-field, scattering, small
  oscillations, rigid body) is almost entirely absent.
- **Exercise / worked-example layer:** ~10%. Landau's 251 Problems are
  the canonical physics problem corpus; Codex has the templated 7-Q
  pack. Dedicated exercise-pack pass is P3-priority-3 follow-up.
- **Notation layer:** ~70%. Major crosswalk concerns:
  - Landau writes $L$ for Lagrangian on coordinate space (no
    tangent-bundle language); Codex uses $L: TM \to \mathbb{R}$.
  - Landau writes $\mathbf{M}$ for angular momentum; Codex / modern
    geometric texts write $\mathbf{L}$ or $J$.
  - Landau writes $H$ for Hamiltonian, $\{f, g\}$ or $[f, g]$ for
    Poisson bracket (the latter in §42); Codex uses $\{f, g\}$.
  - Landau's action symbol is $S$ for the on-shell action and $S_0$
    for the abbreviated action; Codex uses $S$ for both contextually.
  - Russian-physics convention puts $T - U$ rather than $K - V$; sign
    conventions on canonical transformations differ from
    Arnold/Cannas.
- **Sequencing layer:** ~50%. Codex orders Lagrangian → Hamiltonian →
  canonical → HJ; Landau orders identically *except* he postpones
  Hamiltonian to Ch. VII (after small oscillations and rigid body).
  Codex's ordering matches Arnold's, not Landau's.
- **Intuition layer:** ~25%. Landau's physicist-intuition (resonance,
  scattering, similarity, virial) is largely absent from Codex's
  geometer-flavoured symplectic chapter.
- **Application layer:** ~15%. Kepler, Rutherford, Lagrange's top,
  Coriolis force, normal-mode molecular vibrations — all standard
  physics examples, absent from Codex.

After priority-1 batch: theorem layer ~60%, application ~50%.
After priority-1+2: ~80%, ~75%. Priority-3 brings to ~92%, ~88%.
Full ≥95% requires a dedicated Landau-style Problem set.

---

## §3 Gap punch-list (priority-ordered)

The Codex symplectic chapter is mature on the abstract-Hamiltonian
side (Arnold-MM-batch already shipped Hamilton-Jacobi, action-angle,
adiabatic, KAM, Noether). Landau exposes gaps on (a) the coordinate-
physics worked-example layer (Kepler, scattering, small oscillations,
rigid body, Coriolis) and (b) a handful of Landau-distinctive items
absent from Arnold (mechanical similarity, Routhian, Maupertuis,
exponential-accuracy adiabatic, Kapitza pendulum, parametric
resonance).

Recommended slot ranges:
- **Extend `05.00-lagrangian-mechanics/`** with worked examples and
  Landau-distinctive sections.
- **Extend `05.02-hamiltonian/`** with Routhian, Maupertuis,
  exponential-accuracy adiabatic.
- **New `09.*` math-physics chapter** (or extend `05.00-*`) for
  Newtonian-mechanics worked examples (Kepler, Rutherford, rigid body,
  small oscillations, Coriolis). Landau's most canonical territory.

### Priority 1 — Landau-distinctive load-bearing additions (5 items)

1. **`05.00.08` Mechanical similarity / virial theorem.** Landau §10
   anchor; Clausius 1870 (virial), Bertrand 1873 (closure of orbits
   for $1/r$ and $r^2$ potentials only). Three-tier; ~1500 words.
   Statement: $U(\alpha r) = \alpha^k U(r) \Rightarrow t'/t =
   (l'/l)^{1-k/2}$. Worked examples: $k = -1$ recovers Kepler III,
   $k = 2$ recovers period-independent oscillator. Master section:
   virial theorem $\langle T \rangle = (k/2) \langle U \rangle$ for
   homogeneous potentials. **Landau-canonical, absent from
   Arnold-MM batch.**

2. **`05.02.10` The Routhian.** Landau §41 anchor; Routh 1877
   *Treatise on the Dynamics of a System of Rigid Bodies* originator.
   Three-tier; ~1400 words. Definition: $R = \sum p_\alpha \dot q_\alpha
   - L$ over cyclic coordinates only, leaving the non-cyclic ones in
   Lagrangian form. Use case: motion of symmetric top with cyclic
   precession angle. **Landau-distinctive; absent from Arnold-MM
   batch; appears in physics curricula but not in modern geometric-
   mechanics texts.**

3. **`05.02.11` Maupertuis' principle / abbreviated action.** Landau
   §44 anchor; Maupertuis 1744 *Accord de différentes lois de la
   nature qui avaient jusqu'ici paru incompatibles* originator,
   Euler 1744, Jacobi 1837. Three-tier; ~1600 words. Statement: at
   fixed energy $E$, $\delta S_0 = \delta \int p\, dq = 0$ over paths
   with $H = E$. Master section: Jacobi metric
   $ds^2 = 2(E - U)\, a_{ik}\, dq^i\, dq^k$; reduction of mechanics
   at fixed energy to geodesic problem in conformally-rescaled
   metric. **Bridge to `05.02.06` geodesic-flow-hamiltonian; complements
   Arnold-MM batch.**

4. **`05.09.07` Exponential accuracy of the adiabatic invariant.**
   Landau §51 anchor; **Landau is the originator** (the
   complex-contour argument is his signature contribution to
   perturbation theory). Three-tier; ~1800 words. Statement: for
   $H(q, p; \lambda(\epsilon t))$ with $\lambda$ analytic in $t$,
   $\Delta I \sim e^{-c/\epsilon}$ where $c$ is the imaginary part
   of the nearest complex singularity of $q(t)$ from the real axis.
   Master section: contour-integration proof; comparison with the
   power-series-only result $\Delta I = O(\epsilon^N)$ from
   averaging. **Originator-prose mandatory** — paraphrase Landau's
   §51 directly. Deepens `05.09.02-adiabatic-invariants` (which
   currently has only the leading-order result).

5. **`05.00.09` Worked Lagrangian examples — coordinate-physics layer.**
   Landau Ch. III §§11-15 anchor. Three-tier; ~2200 words. Beginner:
   1D motion via energy quadrature (§11), period from potential
   (§12). Intermediate: reduced-mass two-body (§13), motion in central
   field with effective potential (§14). Master: full Kepler problem
   including the Runge-Lenz vector $\mathbf{A} = \mathbf{p} \times
   \mathbf{M} - m\alpha \hat{\mathbf{r}}$ and orbit closure as
   $SO(4)$-degeneracy signature (§15 Problems). **Provides the
   coordinate-physics worked-example layer Codex currently lacks.**

### Priority 2 — Landau-canonical physics chapters (5 items)

6. **`05.00.10` Scattering and Rutherford formula.** Landau Ch. IV
   §§16-20 anchor; Rutherford 1911 (Phil. Mag. 21) originator of the
   formula. Three-tier; ~2000 words. Beginner: cross-section
   definition as flux/density ratio. Intermediate: elastic-collision
   kinematics in CM and lab frames; small-angle scattering.
   Master: Rutherford formula
   $d\sigma = (\alpha/4 E)^2 \sin^{-4}(\theta/2)\, d\Omega$ from
   hyperbolic orbits in central field, with CM-to-lab boost. **First
   collision-theory unit in Codex; downstream prereq for `02.*`
   Section-2 QM scattering.**

7. **`05.00.11` Small oscillations and normal modes.** Landau Ch. V
   §§21-23 anchor + §27 parametric resonance. Three-tier; ~2400
   words. Beginner: 1D harmonic + forced + damped. Intermediate:
   coupled oscillators, normal-mode decomposition via eigenvalue
   problem $(\omega^2 m_{ij} - k_{ij})\, A_j = 0$. Master:
   parametric resonance from Mathieu equation
   $\ddot x + \omega^2(1 + h \cos 2\omega_0 t)\, x = 0$, instability
   tongues. **Foundational across physics; Codex-absent.**

8. **`05.00.12` Kapitza pendulum / motion in rapidly oscillating
   field.** Landau §30 anchor; Kapitza 1951 (Sov. Phys. Usp.)
   originator. Three-tier; ~1500 words. Master section:
   effective-potential method, $U_\text{eff} = U + \langle f^2
   \rangle / 4 m \omega^2$, inverted-pendulum stabilisation.
   **Landau-Kapitza originator-prose mandatory; canonical
   physics-pedagogy example absent from Arnold and Codex.**

9. **`05.00.13` Rigid-body dynamics — inertia tensor and Eulerian
   angles.** Landau Ch. VI §§31-35 anchor; Euler 1765 *Theoria motus
   corporum solidorum* originator. Three-tier; ~2200 words.
   Beginner: angular velocity vector $\boldsymbol{\Omega}$, inertia
   tensor $I_{ik} = \sum m(r^2 \delta_{ik} - x_i x_k)$. Intermediate:
   principal axes, angular momentum $M_i = I_{ik}\Omega_k$,
   equations of motion. Master: Eulerian angles
   $(\varphi, \theta, \psi)$ as $SO(3)$ chart, symmetrical top by
   quadrature. **Complements `05.09.05` Euler-Arnold (which is
   geometric / coadjoint-orbit framing) with the coordinate-physics
   counterpart.**

10. **`05.00.14` Motion in a non-inertial frame / Coriolis force.**
    Landau §39 anchor; Coriolis 1835 (J. École Polytech.) originator.
    Three-tier; ~1400 words. Beginner: rotating-frame setup,
    pseudo-forces. Intermediate: Lagrangian-derivation of
    centrifugal + Coriolis terms; energy is *not* conserved in
    rotating frame, but $E_0 = E - \boldsymbol{\Omega} \cdot
    \mathbf{M}$ is. Master: Foucault pendulum, weather-system
    application. **Universal physics topic; bridge to `1.03`
    classical fields and `2.*` non-inertial QM.**

### Priority 3 — depth on existing units, examples, applications (4 items)

11. **Deepen `05.00.02-hamilton-principle`.** Add a Master-tier
    section anchored to Landau §2: the *two-page* canonical derivation
    of Euler-Lagrange from $\delta S = 0$, with explicit endpoint-
    fixity and integration-by-parts. Currently the unit cites Arnold;
    add Landau as joint originator-anchor. No new ID.

12. **Deepen `05.00.06-galilean-newtonian-setup`.** Add Master-tier
    section anchored to Landau §3-§4: derive $L = \tfrac{1}{2}mv^2$
    from Galilean invariance + homogeneity + isotropy. **Landau-
    distinctive symmetry-derives-the-Lagrangian argument** absent
    from Arnold. No new ID.

13. **Deepen `05.02.02-poisson-bracket`.** Add Master-tier proof of
    Jacobi identity via Landau's §42 operator-commutator argument
    ($D_1 D_2 - D_2 D_1$ is a first-order operator) — the cleanest
    elementary proof. No new ID.

14. **Deepen `05.05.03-generating-functions`.** Tabulate the four
    types $F_1(q, Q)$, $F_2(q, P)$, $F_3(p, Q)$, $F_4(p, P)$ in the
    master tier per Landau §45 (eqs. (45.7)-(45.8)) — physicist-
    canonical reference table. *Already on Arnold plan priority-3
    item 15; no double-count.*

### Priority 4 — survey / advanced (1 item)

15. **`05.00.15` Separation of variables in Hamilton-Jacobi —
    elliptic and parabolic.** Landau §48 anchor; Jacobi 1837 / Stäckel
    1891 originator. Master-only; ~1600 words. Worked separations:
    central field in spherical, two-centre Coulomb in elliptic,
    parabolic-cylinder Kepler. **Bridge to integrable-systems
    classics; deferable unless curriculum expands into integrable
    systems beyond Liouville-Arnold.**

---

## §4 Implementation sketch

**Minimum Landau-equivalence batch** = priority 1 only (items 1-5):
4 new units + 1 deepening. Estimates:

- ~3 hours per typical new unit; item 5 (worked Lagrangian examples)
  is ~4.5 h given the worked-example density. Item 4 (exponential-
  accuracy adiabatic) is ~4 h for originator research.
- Priority 1: 4 typical × 3 h + 1 worked-example × 4.5 h + 1
  originator-prose × 4 h = ~20 hours. *Effectively the same envelope
  as Arnold priority-1.*
- Priority 1+2: ~20 + 5 new × 3.5 h = ~38 hours.
- Priority 1+2+3 (excl. duplicate items 14): ~38 + 3 deepenings ×
  1.5 h = ~43 hours.

**Originator-prose targets.** Landau is **partly originator** —
exponential adiabatic accuracy (item 4) is *the* Landau contribution.
Otherwise he is a synthesizer in the Lagrange-Hamilton-Jacobi-Poisson-
Noether tradition. Joint originator-citations:

- **Item 1 (similarity / virial):** Clausius 1870 (virial); Bertrand
  1873 (closure of orbits).
- **Item 2 (Routhian):** Routh 1877.
- **Item 3 (Maupertuis):** Maupertuis 1744 / Euler 1744 / Jacobi 1837.
- **Item 4 (exponential adiabatic):** **Landau §51 — originator,
  mandatory originator-prose.**
- **Item 5 (Kepler / Runge-Lenz):** Newton 1687 (Kepler problem);
  Runge 1919 / Lenz 1924 (the vector).
- **Item 6 (Rutherford):** Rutherford 1911.
- **Item 7 (parametric resonance):** Mathieu 1868; Faraday 1831
  (parametric instability of pendula).
- **Item 8 (Kapitza pendulum):** **Kapitza 1951 — originator,
  mandatory originator-prose.**
- **Item 9 (rigid body):** Euler 1765.
- **Item 10 (Coriolis):** Coriolis 1835.

**Notation crosswalk concerns (Landau-specific).** Recorded inline in
the Master sections of each new unit:

- **Lagrangian:** Landau writes $L(q, \dot q, t)$ as a function on
  coordinate patches; Codex Master-tier writes $L : TM \to \mathbb{R}$.
  Pin the equivalence $L_\text{Landau}(q, \dot q, t) =
  L_\text{Codex}|_{\text{chart}}(q, v, t)$.
- **Angular momentum symbol:** Landau $\mathbf{M}$, Codex $J$ /
  $\mathbf{L}$. **Resolution:** keep $\mathbf{M}$ in Landau-anchored
  Master sections, write $\mathbf{L}$ in coordinate-free statements.
- **Sign convention on Hamiltonian:** Landau uses
  $H = \sum p \dot q - L$ (eq. 40.2); Arnold and Cannas agree. No
  conflict.
- **Sign convention on symplectic form:** Landau does not introduce
  $\omega$ explicitly. Codex's choice $\omega = dp \wedge dq =
  -d(p\, dq)$ matches Arnold; Landau's
  $\sum dp_i \wedge dq_i$ (implicit in §45) is the same.
- **Russian physicist conventions:** Landau writes
  $T = \tfrac{1}{2} a_{ik}(q) \dot q_i \dot q_k$ (kinetic-energy
  metric); modern math-physics writes $\frac{1}{2}g_{ij}\dot q^i
  \dot q^j$. Pin equivalence: $a_{ik} = g_{ik}$ for the configuration
  metric.
- **Cross-volume notation alert:** Landau Vol 1's $S$ for action
  reappears in Vol 2 as the *relativistic* action $S = -mc \int ds$.
  When citing across volumes, disambiguate. (Plan applies to
  `1.03` audit also.)

**DAG edges.** New prerequisites for priority-1+2:

- `05.00.08` (similarity) ← `05.00.02` (Hamilton's principle)
- `05.02.10` (Routhian) ← {`05.02.01`, `05.00.01`}
- `05.02.11` (Maupertuis) ← {`05.02.05` cotangent-bundle,
  `05.05.04` Hamilton-Jacobi}; → `05.02.06` geodesic-flow
- `05.09.07` (exponential adiabatic) ← {`05.09.02` adiabatic,
  `06.01.13` argument-principle / contour integration}
- `05.00.09` (Lagrangian worked examples) ←
  `05.00.01-05` Lagrangian block
- `05.00.10` (scattering) ← `05.00.09` (central field)
- `05.00.11` (small oscillations) ← `05.00.02`
- `05.00.12` (Kapitza) ← `05.00.11` (parametric resonance)
- `05.00.13` (rigid body) ← {`05.00.01`, `03.03.02` group-action,
  `05.09.05` Euler-Arnold}
- `05.00.14` (Coriolis) ← `05.00.13`

**Chapter structure.** No new chapter folder needed. Extensions:

- Extend `05.00-lagrangian-mechanics/`: items 1, 5, 6, 7, 8, 9, 10
  (plus deepenings 11, 12).
- Extend `05.02-hamiltonian/`: items 2, 3 (plus deepening 13, 14).
- Extend `05.09-perturbation/` (alias `integrable/`): item 4.
- Optional priority-4 item 15 either extends `05.05-lagrangian/` or
  opens a Master-tier sub-chapter on separation-of-variables.

**Composite Arnold + Landau batch.** Most efficient production order:
because the Arnold-MM substitute batch (priority-1+2 of
`arnold-mathematical-methods.md`) has already shipped 13 of the 17 core
units that Landau and Arnold share, this Landau batch is **purely
Landau-distinctive additions**. No re-production of Hamilton's
equations, Poisson brackets, action-angle, KAM, Liouville, Hamilton-
Jacobi. The Landau plan adds:

- 4 new Landau-distinctive Hamiltonian-side units (items 1, 2, 3, 4),
- 6 new physics-canonical Lagrangian/Newtonian-side worked-example
  units (items 5, 6, 7, 8, 9, 10) — these are the bulk of the
  shipped Landau pedagogy and have **no Arnold-MM substitute**
  because Arnold dispatches them as Problems in 2 pages.

**Apex unit designation.** Item 4 (`05.09.07` exponential-accuracy
adiabatic) is a **near-apex** unit — originator-prose, requires complex-
analysis contour-integration argument that bridges to
`06-riemann-surfaces/`, paraphrases Landau §51 directly. Not as
research-heavy as Arnold-KAM but warrants extended budget.

---

## §5 What this plan does NOT cover

- **Relativistic mechanics.** Deferred to Landau Vol 2 *Classical
  Theory of Fields* (FT 1.03); separate plan.
- **Continuum / fluid mechanics.** Deferred to Vol 6 *Fluid Mechanics*
  (not on FT) and Arnold-Khesin (FT 1.12).
- **Statistical mechanics.** Deferred to Vol 5 / Souriau (FT 2.10,
  2.11).
- **Quantum mechanics.** Deferred to Vol 3 (FT 2.01).
- **Line-number Problem inventory.** Landau's ~251 Problems form a
  separate per-section problem corpus. Inventory deferred unless the
  punch-list expands into a dedicated Landau-exercise-pack pass
  (analogous to the proposed Arnold-exercise-pack — would be its own
  ~20-hour pass).
- **The remaining ~30% of Landau worked Problems** outside priority-1
  items: nutation of symmetrical top, Lagrange points in restricted
  three-body, oscillations of polyatomic molecules, anharmonic
  perturbation series, motion of charged particle in EM field as
  Lagrangian, motion of relativistic particle (deferred to Vol 2).
- **Goldstein / Marion-Thornton parallel-track coverage.** Goldstein
  is cited as a peer source but not separately audited; if a future
  decision adds Goldstein to FT, dedicated plan. José-Saletan
  *Classical Dynamics* same.
- **Russian-language original.** Translation differences (Sykes-Bell
  vs. Russian) not catalogued; physicist-conventions track the English
  edition.

---

## §6 Acceptance criteria for FT equivalence (Landau Vol 1)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, *Mechanics*
is at equivalence-coverage when:

- ≥95% of Landau's named results (and worked formulae) in
  Chapters I-VII map to Codex units **at Landau-equivalent
  pedagogical depth** (currently ~40%; after priority-1 ~60%; after
  priority-1+2 ~80%; after priority-1+2+3 ~92%; after priority-4
  ~95%). Items 4 (exponential adiabatic), 8 (Kapitza), and 9 (rigid
  body) are the highest-leverage individual gaps.
- ≥80% of Landau's Problems have a Codex equivalent worked example
  (currently ~10%; closing requires the Landau-exercise-pack pass
  per §5).
- ≥90% of Landau's worked examples appear in a unit (currently ~15%;
  priority-1+2 brings to ~70%; remainder needs dedicated worked-
  example densification).
- Notation crosswalk pinned in Master sections per §4. No standalone
  `notation/landau.md` needed.
- DAG: for every Lagrangian → conservation-law → integrable chain in
  Landau Chs. I-III (least action → Noether → reduced mass → central
  field → Kepler), an unbroken prerequisite chain in Codex's DAG.
  Currently breaks at `05.00.09` (worked Lagrangian examples) — item
  5 closes it.
- Pass-W weaving connects new units to existing `05.00-*`,
  `05.02-*`, `05.05-*`, `05.09-*` and laterally to `06.01.13`
  (contour integration, for item 4) and `03.03.*` (group actions,
  for items 9-10).

The 4 priority-1 new units (items 1-4) + 1 worked-example unit
(item 5) close the Landau-distinctive gap given the Arnold-MM batch
is shipped. Priority-2 closes the physics-canonical worked-example
layer (items 6-10). Priority-3+4 are deepenings.

**Prerequisite alert.** Landau Vol 1 sits at FT 1.02 — **after** the
Apostol Vols I (single-variable calculus) and II (multivariable +
linear algebra) and Lang *Basic Mathematics* (FT 0.1, 0.2, 0.3). Codex
must keep those prerequisite chains intact: Apostol Vol II calculus-of-
variations (Ch. 7) and linear algebra (Ch. 3-5) are load-bearing for
items 5, 7, 9, 11. Audit plans
`tom-m-apostol-calculus-vol-single.md` and
`tom-m-apostol-calculus-vol-multi.md` should be checked for any
incomplete-coverage gaps that would block Landau units; this Landau
plan does not re-audit Apostol.

**Honest scope.** Mid-sized equivalence gap. The Codex symplectic
chapter is mature on the Arnold-geometric side (49 units shipped, of
which ~13 already cite Landau-Arnold-equivalent material), but the
**Landau-canonical physics-pedagogy layer** (worked examples,
scattering, oscillations, rigid body, Coriolis, similarity, virial,
Kapitza, Routhian, Maupertuis, exponential-accuracy adiabatic) is
almost entirely uncaptured. Priority-1+2 batch is **10 new units +
4 deepenings** — comparable to Arnold priority-1+2 in scope but with
a different center of mass (Arnold added KAM and Lagrangian-on-$TM$
infrastructure; Landau adds the physicist worked-example corpus).

---

## §7 Sourcing

- **Status:** BUY per `docs/catalogs/FASTTRACK_BOOKLIST.md`.
- **Local copy resolved:** `reference/textbooks-extra/Vol 1 - Landau,
  Lifshitz - Mechanics (3rd ed, 1976).pdf` (7.3 MB; also `.djvu`).
  Full text accessed for this audit.
- **Citation form:** L. D. Landau, E. M. Lifshitz, *Mechanics*, 3rd
  ed., translated from the Russian by J. B. Sykes and J. S. Bell,
  Course of Theoretical Physics Volume 1 (Butterworth-Heinemann,
  Oxford, 1976; reprinted 2000). ISBN 0 7506 2896 0.
- **Russian original:** *Mekhanika* (Mekhanika), Nauka, Moscow, 1958
  (and 1965 / 1973 revisions). Pre-1989 Soviet text — copyright
  questions are non-trivial; English Pergamon / Butterworth edition
  remains commercial.
- **Peer sources cited in this audit (peer-anchor for §1):**
  - H. Goldstein, C. Poole, J. Safko, *Classical Mechanics*, 3rd ed.
    (Addison-Wesley, 2002) — physicist-coordinate companion;
    canonical American counterpart to Landau.
  - J. Marion, S. Thornton, *Classical Dynamics of Particles and
    Systems*, 5th ed. (Brooks/Cole, 2003) — undergraduate parallel.
  - V. I. Arnold, *Mathematical Methods of Classical Mechanics*,
    Springer GTM 60, 2nd ed. (1989) — geometric counterpart, audit
    plan at `plans/fasttrack/arnold-mathematical-methods.md`.
  - J. V. José, E. J. Saletan, *Classical Dynamics: A Contemporary
    Approach* (Cambridge UP, 1998) — hybrid coordinate-geometric
    text; bridge between Landau and Arnold.
- **Additional originator references** (cited in §3 punch-list):
  Lagrange 1788 *Mécanique analytique*; Hamilton 1834-35 (Phil.
  Trans. Roy. Soc. Lond. 124, 125); Jacobi 1843 *Vorlesungen über
  Dynamik*; Poisson 1809 (J. École Polytech. 8); Noether 1918
  (Nachr. König. Ges. Wiss. Göttingen); Rutherford 1911 (Phil.
  Mag. 21); Kapitza 1951 (Sov. Phys. Usp.); Coriolis 1835 (J. École
  Polytech.); Euler 1765 *Theoria motus corporum solidorum*;
  Maupertuis 1744; Clausius 1870; Bertrand 1873; Routh 1877;
  Mathieu 1868.
- **Local copy retention.** Keep at
  `reference/textbooks-extra/` (the existing path); not promoted
  into `reference/fasttrack-texts/01-fundamentals/` because the
  fasttrack-texts directory is for free-license / public-domain
  texts only. Landau remains commercial-copyright; the personal
  copy stays in the `textbooks-extra/` parking area.
