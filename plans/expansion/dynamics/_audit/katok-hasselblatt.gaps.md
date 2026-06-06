# Katok-Hasselblatt, *Introduction to the Modern Theory of Dynamical Systems* — audit gap file

Audited against the live corpus. **The entire `content/38-dynamics/` section is an
empty chapter skeleton** (all seven sub-chapters `01-topological-dynamics` …
`07-smooth-ergodic-theory` contain zero units). The dynamical-systems material
K-H develops therefore exists in the corpus only as scattered, differently-framed
references:

- **ODE / qualitative** (`02-analysis/12-ode/`): phase flow `02.12.02`, rectification
  `02.12.05`, Lyapunov direct method `02.12.08`, Poincaré-Bendixson `02.12.10`,
  limit cycles `02.12.14`, bifurcation pointer `02.12.17`. These are planar /
  local-stability tools, NOT hyperbolic-set theory.
- **KAM / integrable** (`05-symplectic/integrable/`, `09-classical-mech/08-chaos/`):
  KAM theorem `05.09.01` + `09.08.01`, Nekhoroshev `05.09.06`, Birkhoff normal form
  `05.09.03`, action-angle `05.02.04`/`09.06.01`. Covers the twist-map/KAM circle of
  ideas from the Hamiltonian-perturbation side.
- **Geodesic flow** (`05-symplectic/hamiltonian/05.02.06`): states (survey-level) that
  the geodesic flow on a negatively-curved closed manifold is Anosov and (Hopf 1939)
  mixing — but does NOT define Anosov/hyperbolic sets, does NOT prove the Hopf argument.
- **Arnold cat map** (`05.14.08`): uses the cat map as a fast-dynamo example; mentions
  Markov partitions/transfer operator in passing; no general hyperbolic-dynamics unit.
- **Ergodic theorems** (`37.02.03`): Birkhoff / von Neumann / Kingman — SHIPPED on the
  probability spine. Per audit brief these are NOT re-proposed; they are referenced as a
  prereq.

Consequently **the hyperbolic-dynamics and smooth-ergodic-theory cores I own
(38.03, 38.07) are entirely absent as systematic units.** I list the load-bearing
gaps below, deferring topological-dynamics minutiae / symbolic dynamics to the
parallel **Brin-Stuck** audit (38.01/38.02) and entropy / variational principle /
mixing classification to the parallel **Walters** audit (38.04/05/06). Where my
chapters (38.01) overlap Brin-Stuck I claim only the rotation-number / circle-
homeomorphism thread that K-H develops as its first deep theorem.

---

## GAP 1 — Circle homeomorphisms: rotation number and Poincaré classification

- **id:** `38.01.01`  (FREE — `01-topological-dynamics/` empty)
- **title:** Rotation number and the Poincaré classification of circle homeomorphisms
- **spec:** Poincaré rotation number $\rho(f)$ of an orientation-preserving circle
  homeomorphism (well-defined mod 1, independent of lift base point, invariant under
  topological conjugacy); $\rho$ rational $\iff$ a periodic orbit exists; for irrational
  $\rho$, $f$ is semi-conjugate to the rigid rotation $R_\rho$, and conjugate iff every
  orbit is dense (no wandering intervals).
- **prereqs:** `02.12.01` (phase space / flows), `02.12.02` (phase flow, one-parameter
  group), `02.01.06` (quotient topology, for $S^1=\mathbb{R}/\mathbb{Z}$)
- **chapter:** `topological-dynamics`; `section: dynamics`
- **source_book:** katok-hasselblatt
- **source_curriculum:** dynamics
- **why a gap:** K-H Ch. 11–12. The corpus has rotation number nowhere
  (filename + body grep both empty); the KAM units `05.09.01`/`09.08.01` use
  Diophantine rotation vectors but never define the 1-D rotation number or state
  Poincaré's classification. Foundational; everything in twist/circle dynamics rests on it.

---

## GAP 2 — Denjoy's theorem and the Denjoy counterexample

- **id:** `38.01.02`  (FREE)
- **title:** Denjoy's theorem and the Denjoy counterexample
- **spec:** A $C^2$ (or $C^1$ with bounded variation of $\log Df$) orientation-preserving
  circle diffeomorphism with irrational rotation number $\rho$ is topologically conjugate
  to the rigid rotation $R_\rho$ (no wandering intervals); the sharpness counterexample —
  a $C^1$ diffeomorphism with irrational $\rho$ that is NOT minimal (has a wandering
  interval / Denjoy minimal set).
- **prereqs:** `38.01.01` (rotation number, Poincaré classification), `02.12.05`
  (rectification / conjugacy of flows)
- **chapter:** `topological-dynamics`; `section: dynamics`
- **source_book:** katok-hasselblatt
- **source_curriculum:** dynamics
- **why a gap:** K-H §12.1. The regularity threshold ($C^2$ suffices, $C^1$ fails) is one
  of the cleanest "differentiability matters" results in dynamics and has no corpus home.

---

## GAP 3 — Hyperbolic sets: definition, cone criterion, and structural stability

- **id:** `38.03.01`  (FREE — `03-hyperbolicity-structural-stability/` empty)
- **title:** Hyperbolic invariant sets — uniform splitting, cone criterion, and the local
  structure of Anosov and Axiom-A systems
- **spec:** Uniformly hyperbolic invariant set $\Lambda$: continuous $Df$-invariant
  splitting $T_\Lambda M = E^s \oplus E^u$ with uniform contraction/expansion; equivalent
  cone-field criterion; Anosov diffeomorphism ($\Lambda = M$); Axiom A (hyperbolic
  nonwandering set + density of periodic points) and the Smale spectral decomposition into
  basic sets; the cat map / solenoid as canonical examples.
- **prereqs:** `02.12.02` (phase flow), `01.01.08` (eigenvalue/eigenvector, for the linear
  model), `02.05.04` (inverse/implicit function theorem)
- **chapter:** `hyperbolicity-structural-stability`; `section: dynamics`
- **source_book:** katok-hasselblatt
- **source_curriculum:** dynamics
- **why a gap:** K-H Ch. 6, 17, 18. "Anosov" appears only as informal prose in `05.02.06`
  and `05.14.08`; there is no unit DEFINING a hyperbolic set or stating the spectral
  decomposition. This is the root unit for the whole 38.03 chapter.

---

## GAP 4 — The Smale horseshoe and chaotic dynamics from transverse homoclinic points

- **id:** `38.03.02`  (FREE)
- **title:** The Smale horseshoe and the Smale-Birkhoff homoclinic theorem
- **spec:** Geometric horseshoe map; its invariant set is a Cantor set on which the
  dynamics is topologically conjugate to the full 2-shift $\sigma$ on $\{0,1\}^{\mathbb{Z}}$
  (uncountably many periodic orbits, positive entropy, sensitive dependence); the
  Smale-Birkhoff theorem — a transverse homoclinic point forces a horseshoe in some power
  of the map. Distinguish from `02.12.14` (limit cycles, regular planar dynamics).
- **prereqs:** `38.03.01` (hyperbolic sets), `02.12.02` (phase flow)
  — symbolic-shift machinery deferred to Brin-Stuck 38.02; reference it once shipped.
- **chapter:** `hyperbolicity-structural-stability`; `section: dynamics`
- **source_book:** katok-hasselblatt
- **source_curriculum:** dynamics
- **why a gap:** K-H §2.5, Ch. 6. The horseshoe is the canonical mechanism of deterministic
  chaos; grep for "horseshoe" returns zero unit hits. Load-bearing and entirely absent.

---

## GAP 5 — The Hadamard-Perron stable/unstable manifold theorem

- **id:** `38.03.03`  (FREE)
- **title:** The Hadamard-Perron theorem — stable and unstable manifolds of a hyperbolic set
- **spec:** Existence and uniqueness of local stable/unstable manifolds $W^s_{loc}(x)$,
  $W^u_{loc}(x)$ tangent to $E^s$, $E^u$ at each point of a hyperbolic set; they are
  as smooth as the map, vary continuously, and integrate to global invariant manifolds;
  the graph-transform (Hadamard) and Lyapunov-Perron (integral-equation) proofs; the
  $\lambda$-lemma / inclination lemma.
- **prereqs:** `38.03.01` (hyperbolic sets), `02.05.04` (implicit/inverse function theorem),
  `02.11.02` (Hahn-Banach / Banach-space fixed-point setting for the Perron method)
- **chapter:** `hyperbolicity-structural-stability`; `section: dynamics`
- **source_book:** katok-hasselblatt
- **source_curriculum:** dynamics
- **why a gap:** K-H Ch. 6 (the technical heart). The nonlinear stable-manifold theorem
  exists nowhere; `03.15.01` covers stable/unstable manifolds only for *Morse gradient*
  flows (Morse-Smale, distinct setting). The named Hadamard-Perron theorem is the
  prerequisite for shadowing, structural stability, and Pesin theory.

---

## GAP 6 — Shadowing and structural stability of hyperbolic sets

- **id:** `38.03.04`  (FREE)
- **title:** The shadowing lemma and structural stability of Anosov / Axiom-A systems
- **spec:** Anosov shadowing (pseudo-orbit tracing) lemma: near a hyperbolic set every
  $\delta$-pseudo-orbit is $\varepsilon$-shadowed by a true orbit; consequences —
  the closing lemma (density of periodic points), expansiveness, and **structural
  stability**: an Anosov diffeomorphism is $C^1$-structurally stable (every $C^1$-nearby
  map is topologically conjugate to it). Robustness as the defining feature of hyperbolicity.
- **prereqs:** `38.03.01` (hyperbolic sets), `38.03.03` (stable/unstable manifolds)
- **chapter:** `hyperbolicity-structural-stability`; `section: dynamics`
- **source_book:** katok-hasselblatt
- **source_curriculum:** dynamics
- **why a gap:** K-H Ch. 18. "Shadowing"/"structural stability" return zero unit hits.
  Structural stability is the punchline of the whole hyperbolic theory and is absent.

---

## GAP 7 — The multiplicative ergodic (Oseledets) theorem and Lyapunov exponents

- **id:** `38.07.01`  (FREE — `07-smooth-ergodic-theory/` empty)
- **title:** Lyapunov exponents and the Oseledets multiplicative ergodic theorem
- **spec:** Lyapunov exponents of a cocycle / the derivative cocycle $Df^n$ over a
  measure-preserving system; Oseledets' theorem — for an ergodic system the limit
  $\lim \frac1n \log\|D_xf^n v\|$ exists a.e. and takes finitely many values, with an
  a.e.-defined measurable invariant Oseledets splitting $T_xM=\bigoplus E^i(x)$; Furstenberg-
  Kesten subadditivity as the scalar precursor; relation to the top exponent via Kingman.
- **prereqs:** `37.02.03` (Birkhoff / Kingman subadditive ergodic theorems — SHIPPED),
  `01.01.08` (eigenvalue/eigenvector), `02.06.03` (systems of linear ODE,
  matrix exponential — the linear-cocycle model)
- **chapter:** `smooth-ergodic-theory`; `section: dynamics`
- **source_book:** katok-hasselblatt
- **source_curriculum:** dynamics
- **why a gap:** K-H supplement (S.2). Oseledets appears only as a passing phrase in
  `05.14.07`/`37.02.03`; no unit states the multiplicative ergodic theorem. This is the
  foundation of non-uniform hyperbolicity and the prerequisite for Pesin theory (GAP 8).

---

## GAP 8 — Pesin theory: non-uniform hyperbolicity and the entropy formula

- **id:** `38.07.02`  (FREE)
- **title:** Pesin theory — stable manifolds for non-uniformly hyperbolic systems and the
  Pesin entropy formula
- **spec:** Non-uniformly hyperbolic (Pesin) sets where all Lyapunov exponents are nonzero;
  existence of stable/unstable manifolds a.e. (with Pesin/Lyapunov charts and the regularity
  of the splitting failing only on a small set); absolute continuity of the stable foliation;
  the **Pesin entropy formula** $h_\mu(f)=\int \sum_{\lambda_i>0}\lambda_i\, d\mu$ for a
  smooth measure-preserving diffeomorphism, and the Margulis-Ruelle inequality
  $h_\mu \le \int\sum_{\lambda_i>0}\lambda_i\,d\mu$ for general invariant measures.
- **prereqs:** `38.07.01` (Oseledets / Lyapunov exponents), `38.03.03` (Hadamard-Perron
  stable manifolds), `37.02.03` (Birkhoff ergodic theorem); metric-entropy definition
  deferred to Walters 38.06 — reference once shipped.
- **chapter:** `smooth-ergodic-theory`; `section: dynamics`
- **source_book:** katok-hasselblatt
- **source_curriculum:** dynamics
- **why a gap:** K-H supplement (S.4–S.5). Pesin theory is the capstone of smooth ergodic
  theory and is entirely absent (grep "pesin" empty). Depends on GAP 7 and GAP 5.

---

## GAP 9 — Ergodicity of hyperbolic systems: the Hopf argument

- **id:** `38.07.03`  (FREE)
- **title:** The Hopf argument — ergodicity of geodesic flows and Anosov systems
- **spec:** The Hopf chain argument: Birkhoff averages are constant along stable manifolds
  (forward) and unstable manifolds (backward); combined with absolute continuity of the
  stable/unstable foliations and local product structure, a $C^2$ volume-preserving Anosov
  system (in particular the geodesic flow on a closed negatively-curved manifold) is ergodic
  — indeed mixing. Recovers Hopf 1939 (surfaces) and Anosov 1967 (all dimensions) as the
  systematic theorem behind the survey statement in `05.02.06`.
- **prereqs:** `38.03.01` (Anosov / hyperbolic sets), `38.03.03` (stable/unstable manifolds),
  `37.02.03` (Birkhoff ergodic theorem), `05.02.06` (geodesic flow — survey statement)
- **chapter:** `smooth-ergodic-theory`; `section: dynamics`
- **source_book:** katok-hasselblatt
- **source_curriculum:** dynamics
- **why a gap:** K-H Ch. 17. `05.02.06` *asserts* geodesic-flow ergodicity/mixing but
  proves nothing; the Hopf argument (the mechanism) has no home. Distinct from the abstract
  ergodic theorems at `37.02.03`, which say nothing about WHY a hyperbolic flow is ergodic.

---

## COVERED (not gaps)

- **Birkhoff / von Neumann / Kingman ergodic theorems** — SHIPPED `37.02.03`
  (probability spine). Referenced as prereq throughout; not re-proposed (per brief).
- **KAM theorem (twist maps, invariant tori, Diophantine frequencies)** — SHIPPED
  `05.09.01` (symplectic) + `09.08.01` (classical-mech, with Strogatz/Arnold anchors).
  K-H Ch. 9–12's KAM thread is covered from the Hamiltonian side.
- **Nekhoroshev (exponential stability) / Birkhoff normal form / action-angle** — SHIPPED
  `05.09.06`, `05.09.03`, `05.02.04`/`09.06.01`.
- **Poincaré recurrence theorem** — SHIPPED `05.02.08`.
- **Poincaré-Bendixson theorem (planar limit sets)** — SHIPPED `02.12.10`.
- **Lyapunov stability (direct method, planar/local)** — SHIPPED `02.12.08`. (The
  hyperbolic-set Lyapunov *exponent* machinery is the distinct GAP 7.)
- **Limit cycles, Liénard / van der Pol** — SHIPPED `02.12.14`.
- **Phase flow / one-parameter group; rectification (flow-box) theorem** — SHIPPED
  `02.12.02`, `02.12.05`.
- **Anosov geodesic flow + Hopf mixing (survey statement)** — `05.02.06` states it; the
  *proof mechanism* is GAP 9 and the *definition of Anosov* is GAP 3, but the headline
  fact is present, so the standalone statement is not itself a gap.
- **Arnold cat map as a hyperbolic toral automorphism (example)** — `05.14.08` (fast dynamo)
  uses it; the *general* theory is GAP 3, but the example exists.

## OUT OF SCOPE (deferred to parallel audits or other spines)

- **Topological dynamics generalities** — minimality, topological transitivity, equicontinuity,
  topological recurrence, $\omega$-limit sets, group rotations / equidistribution
  (Weyl) → **Brin-Stuck** audit, chapter 38.01. (Weyl equidistribution already partly at
  `21.15.02` Weyl sums.)
- **Symbolic dynamics** — subshifts of finite type, transition matrices, topological Markov
  chains, Markov partitions / coding of hyperbolic sets → **Brin-Stuck**, chapter 38.02.
- **Topological & metric entropy, the variational principle, Shannon-McMillan-Breiman,
  Kolmogorov-Sinai entropy, the classification of mixing/weak-mixing/spectral types** →
  **Walters** audit, chapters 38.04/05/06. (K-H develops these; I cede them per the
  coordination note.)
- **Twist maps / Aubry-Mather theory (minimal action, Mather sets)** — K-H Ch. 9, 13.
  Sits at the boundary of 38.01 and the symplectic KAM chapter; defer to a dedicated
  twist-map decision after Brin-Stuck/Walters land, to avoid double-claiming with `05.09.*`.
- **Abstract measure theory / probability foundations** — measure-preserving transformations,
  invariant measures on Markov chains → SHIPPED on the probability spine
  (`37.01.*`, `37.05.05`, `37.05.06`); not re-framed.
