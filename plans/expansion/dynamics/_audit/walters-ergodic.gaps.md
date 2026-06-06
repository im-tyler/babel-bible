# Audit — Walters, *An Introduction to Ergodic Theory* (Springer GTM 79, 1982)

- **source_book:** `walters-ergodic`
- **source_curriculum:** `dynamics`
- **target chapters:** `content/38-dynamics/04-ergodic-theorems/`, `…/05-mixing-spectral/`, `…/06-entropy/`
  (frontmatter `section: dynamics`; `chapter:` = the chapter name **without** the number prefix,
  i.e. `ergodic-theorems` / `mixing-spectral` / `entropy`; id format `38.<CC>.<UU>`)
- **date:** 2026-06-05
- **ownership:** this audit owns chapters **38.04 / 38.05 / 38.06**. Parallel audits:
  Katok–Hasselblatt owns **38.03 / 38.07**; Brin–Stuck owns **38.01 / 38.02**
  (topological + symbolic dynamics, where the standalone treatment of **topological entropy**
  lands — see OUT OF SCOPE).

## Verdict

Section `38-dynamics` is a **freshly scaffolded, empty** chapter set (all seven directories
`01-topological-dynamics … 07-smooth-ergodic-theory` are empty). The only ergodic-theory
material anywhere in `content/` is the **probability-spine** unit `37.02.03`
(*The Ergodic Theorems: Birkhoff, von Neumann, Kingman*), which deliberately scopes itself to
the **stationary-sequence limit theorems** and **explicitly defers** (its own §"Boundary," line
417) "mixing, weak mixing, entropy (Kolmogorov–Sinai), the isomorphism theory of Ornstein, and
smooth ergodic theory … a separate forthcoming curriculum spine." **This audit fills exactly that
deferred dynamical spine.**

`37.02.03` already supplies, and is therefore reused as a prerequisite rather than re-proposed:
the **measure-preserving system** quadruple, the **Koopman operator** \(U_T\) as an \(L^p\)
isometry, the **invariant σ-algebra** and **ergodicity** (definition + the time-average =
space-average characterisation), and all three **ergodic theorems** (Birkhoff pointwise / von
Neumann mean / Kingman subadditive). **None of these are re-proposed.** Walters' contribution
beyond `37.02.03` is the *dynamical* superstructure: Poincaré recurrence as a measure-theoretic
theorem, the ergodicity → weak-mixing → mixing **hierarchy** with correlation-decay /
Cesàro characterisations, the **spectral isomorphism** theory (discrete spectrum, the
Halmos–von Neumann theorem), **Kolmogorov–Sinai entropy** as a conjugacy invariant, the
**Shannon–McMillan–Breiman** theorem, and the **variational principle** linking metric and
topological entropy together with **topological pressure** and **equilibrium states**.

**Entropy disambiguation.** "Entropy" in chapters `08.*` / `11.*` (Boltzmann / Gibbs / free
energy) and the **relative entropy** at `37.07.06` / `08.12.*` is **information- or
thermodynamic-entropy of a *measure***, not the **Kolmogorov–Sinai entropy of a
*transformation*** \(h_\mu(T)\) (a dynamical conjugacy invariant). They share the Shannon
formula \(-\sum p\log p\) at the partition level but are distinct objects; the KS-entropy units
below cross-reference Shannon entropy as the static ingredient, not as a duplicate.

**Prereq convention.** Verified-existing anchors used below:
`37.02.03` (ergodic theorems / measure-preserving systems / Koopman / ergodicity — the spine
prereq, **always listed**), `02.07.01` (σ-algebra, measurable space), `02.07.08` (Radon–Nikodym /
absolute continuity), `02.04.04` (FTC, for the Lebesgue-density argument), `02.10.04`
(Fourier transform / Plancherel — for the spectral chapter), `01.01.13` (spectral theorem for
normal operators — finite-dim model for the unitary spectral viewpoint), `37.01.01`
(probability space / Kolmogorov extension — for product/shift constructions),
`21.15.02` (Weyl equidistribution **via unique ergodicity** — cross-ref, the number-theory unit
that already runs the irrational-rotation unique-ergodicity argument). Ids of the form
`38.04.* / 38.05.* / 38.06.*` other than a unit's own are **planned sibling units defined in this
same audit**; they are listed as prereqs so the producer can wire the DAG once siblings land.

---

## GENUINE GAPS

### 38.04.01 — Measure-preserving systems: constructions, recurrence, and the Poincaré recurrence theorem
- **spec:** Catalogue the standard **examples** of measure-preserving transformations as *dynamical
  systems* (rotations and translations on compact groups, the one- and two-sided **Bernoulli and
  Markov shifts** with their invariant product/Markov measures, **toral endomorphisms/automorphisms**
  incl. the cat map, the **Gauss map** / continued-fraction system, **interval-exchange** as a
  pointer). Prove the **Poincaré recurrence theorem** in the abstract measure-theoretic form
  (a.e. point of any positive-measure set returns to it infinitely often) and the **Kac return-time
  formula** \(\int_A \tau_A\,d\mu = \mu(\bigcup_n T^{-n}A)\). Define **factors, products,
  natural extension, and induced (first-return) transformations** as the structural operations.
  *(Distinct from the symplectic/Hamiltonian-flow Poincaré recurrence at `05.02.08`, which is the
  Liouville-volume statement for a continuous flow; this is the abstract \((X,\mathcal B,\mu,T)\)
  theorem with Kac's formula and the systematic example catalogue.)*
- **prereqs:** `37.02.03`, `02.07.01`, `02.07.08`, `37.01.01`
- **chapter:** `ergodic-theorems` · **section:** `dynamics`
- **source_book:** `walters-ergodic` · **source_curriculum:** `dynamics`

### 38.04.02 — Ergodicity in dynamics: criteria, unique ergodicity, and equidistribution
- **spec:** The dynamical reading of **ergodicity** built on the `37.02.03` definition: the
  invariant-function / spectral (1 is a simple eigenvalue of \(U_T\)) / set-theoretic criteria, and
  the worked verifications that **irrational rotations are ergodic** for Lebesgue measure, that a
  **toral automorphism is ergodic iff no eigenvalue of its matrix is a root of unity**, and that
  **Bernoulli/mixing Markov shifts are ergodic**. Develop **unique ergodicity** (a unique invariant
  Borel probability measure) and the theorem that it is equivalent to **uniform** convergence of
  Birkhoff averages of continuous functions; deduce **Weyl equidistribution** of \((n\alpha)\) and
  **Borel's normal-numbers theorem** as ergodic corollaries. Cross-ref `21.15.02` (which already runs
  the unique-ergodicity proof for \((n\alpha)\)) — this unit supplies the general dynamical theorem the
  number-theory unit specialises.
- **prereqs:** `37.02.03`, `38.04.01`, `21.15.02`, `02.04.04`
- **chapter:** `ergodic-theorems` · **section:** `dynamics`
- **source_book:** `walters-ergodic` · **source_curriculum:** `dynamics`

### 38.05.01 — The mixing hierarchy: ergodic ⊃ weak-mixing ⊃ (strong) mixing
- **spec:** Define **(strong) mixing** \(\mu(T^{-n}A\cap B)\to\mu(A)\mu(B)\) and **weak mixing**
  (Cesàro convergence of \(|\mu(T^{-n}A\cap B)-\mu(A)\mu(B)|\) to 0), and prove the strict
  implication chain **mixing ⇒ weak-mixing ⇒ ergodic**. Establish the equivalent characterisations of
  weak mixing: (i) \(T\times T\) is ergodic; (ii) the only eigenfunctions of \(U_T\) are constants
  (no nonconstant \(L^2\) eigenfunctions / **continuous spectrum** off the constants); (iii) the
  density-1 mixing-along-a-subsequence statement (Koopman–von Neumann lemma). Give the standard
  **separating examples** — an irrational rotation is ergodic but **not** weak-mixing (discrete
  spectrum), a Bernoulli shift is mixing, and a weak-but-not-strong-mixing example as a pointer.
- **prereqs:** `37.02.03`, `38.04.02`, `02.07.01`
- **chapter:** `mixing-spectral` · **section:** `dynamics`
- **source_book:** `walters-ergodic` · **source_curriculum:** `dynamics`

### 38.05.02 — The spectral viewpoint: discrete spectrum and the Halmos–von Neumann theorem
- **spec:** The **Koopman / unitary-operator** translation of dynamics: properties of \((X,\mathcal
  B,\mu,T)\) read off the spectral type of \(U_T\) on \(L^2_0\) (the constants' orthocomplement).
  **Spectral isomorphism** vs measurable isomorphism: conjugate systems are spectrally isomorphic but
  not conversely. Develop **systems with discrete (pure point) spectrum** — \(L^2\) spanned by
  eigenfunctions — and prove the **Halmos–von Neumann theorem**: an ergodic system has discrete
  spectrum iff it is measurably conjugate to a rotation on a compact abelian group, and two
  ergodic discrete-spectrum systems are conjugate **iff** they have the same eigenvalue group
  (spectral invariants are complete here). Use the finite-dim spectral theorem `01.01.13` and
  Fourier/Plancherel `02.10.04` as the linear-algebra and harmonic-analysis models.
- **prereqs:** `37.02.03`, `38.05.01`, `01.01.13`, `02.10.04`
- **chapter:** `mixing-spectral` · **section:** `dynamics`
- **source_book:** `walters-ergodic` · **source_curriculum:** `dynamics`

### 38.06.01 — Entropy of a partition and the Kolmogorov–Sinai entropy of a transformation
- **spec:** Static **entropy of a finite/countable partition** \(H(\xi)=-\sum\mu(P)\log\mu(P)\),
  conditional entropy \(H(\xi\mid\eta)\), and their subadditivity/monotonicity calculus
  (refinements, the join \(\xi\vee\eta\)). The **entropy of \(T\) relative to a partition**
  \(h_\mu(T,\xi)=\lim_n\frac1n H(\bigvee_{i=0}^{n-1}T^{-i}\xi)\) (existence via subadditivity), and the
  **Kolmogorov–Sinai entropy** \(h_\mu(T)=\sup_\xi h_\mu(T,\xi)\). Prove it is an **isomorphism
  invariant**, the **Kolmogorov–Sinai generator theorem** (\(h_\mu(T)=h_\mu(T,\xi)\) when \(\xi\) is a
  generator), and the **entropy of a Bernoulli shift** \(=H(p)=-\sum p_i\log p_i\). State the
  **Ornstein isomorphism theorem** (entropy is a *complete* invariant for Bernoulli shifts) as a
  capstone pointer. Cross-reference Shannon entropy as the static ingredient and explicitly contrast
  with thermodynamic/Gibbs entropy (`08.*`, `11.*`) and relative entropy (`37.07.06`).
- **prereqs:** `37.02.03`, `38.04.01`, `02.07.08`
- **chapter:** `entropy` · **section:** `dynamics`
- **source_book:** `walters-ergodic` · **source_curriculum:** `dynamics`

### 38.06.02 — The Shannon–McMillan–Breiman theorem
- **spec:** The **asymptotic equipartition property** for ergodic measure-preserving systems: for a
  generating partition \(\xi\) with information function \(I_{\xi^n}(x)=-\log\mu(\xi^n(x))\) (\(\xi^n\)
  the \(n\)-step refinement / cylinder containing \(x\)), one has
  \(\frac1n I_{\xi^n}(x)\to h_\mu(T,\xi)\) **a.e. and in \(L^1\)** (the ergodic case collapses the limit
  to the constant KS-entropy). Prove it via the martingale/maximal-inequality route (the McMillan
  \(L^1\) statement upgraded to Breiman's a.e. statement), exhibiting it as the entropy analogue of
  Birkhoff's theorem. Deduce the **typical-set / cylinder-measure estimate**
  \(\mu(\xi^n(x))\approx e^{-nh}\) and connect to source-coding intuition.
- **prereqs:** `37.02.03`, `38.06.01`
- **chapter:** `entropy` · **section:** `dynamics`
- **source_book:** `walters-ergodic` · **source_curriculum:** `dynamics`

### 38.06.03 — Topological pressure, the variational principle, and equilibrium states
- **spec:** For a continuous map \(T\) of a compact metric space and a continuous potential
  \(\varphi\), define the **topological pressure** \(P(T,\varphi)\) via separated/spanning sets
  (\(P(T,0)=h_{\mathrm{top}}(T)\) recovering topological entropy as the zero-potential case). State and
  prove the **variational principle**
  \(P(T,\varphi)=\sup_{\mu}\bigl(h_\mu(T)+\int\varphi\,d\mu\bigr)\) over \(T\)-invariant Borel
  probability measures (the entropy half = \(h_{\mathrm{top}}(T)=\sup_\mu h_\mu(T)\)). Define an
  **equilibrium state** as a measure attaining the supremum; give existence via upper
  semicontinuity of entropy in the expansive case and uniqueness for **Gibbs measures** of
  Hölder potentials on subshifts of finite type / Anosov systems (the **thermodynamic-formalism**
  capstone, Bowen–Ruelle–Sinai), cross-referencing the stat-mech free-energy / Gibbs picture
  (`08.01.04`, `11.04.01`) as the physical origin while keeping the object a *dynamical* invariant.
  *(This unit owns the variational principle / pressure / equilibrium-state theory; the standalone
  combinatorial development of **topological entropy** for symbolic and topological systems is left to
  Brin–Stuck `38.01/02` — see OUT OF SCOPE — and is referenced here, not re-derived.)*
- **prereqs:** `37.02.03`, `38.06.01`, `01.01.13`
- **chapter:** `entropy` · **section:** `dynamics`
- **source_book:** `walters-ergodic` · **source_curriculum:** `dynamics`

---

## COVERED (not gaps)

- **Birkhoff pointwise / von Neumann mean / Kingman subadditive ergodic theorems** — `37.02.03`
  (probability spine). The measure-preserving-system quadruple, the Koopman operator as an \(L^p\)
  isometry, the invariant σ-algebra, and the *definition* of ergodicity with the time-average =
  space-average characterisation all live here. **Reused as prereq, never re-proposed.**
- **Ergodic theorem for Markov chains / long-run averages + detailed balance** — `37.05.07`
  (countable-state-chain version; the abstract dynamical statement is `37.02.03`).
- **Weyl equidistribution of \((n\alpha)\) via unique ergodicity of the irrational rotation** —
  `21.15.02` Prop. 3 (runs the exact unique-ergodicity Fourier argument). `38.04.02` supplies the
  general dynamical unique-ergodicity theorem and cross-references it; not duplicated.
- **Poincaré recurrence for Hamiltonian/symplectic flows (Liouville-volume version)** — `05.02.08`.
  The abstract measure-theoretic theorem **with Kac's formula and the example catalogue** is the
  genuine gap (`38.04.01`); the geometric flow statement is the physics specialisation.
- **Cat-map / Anosov topological entropy as a *number* (\(\log\frac{3+\sqrt5}{2}\))** — `05.14.08`
  (used as a fast-dynamo growth rate). This is an *applied appearance* of a single example's
  entropy, not the KS-entropy theory; `38.06.01/03` supply the systematic theory.
- **Informal "mixing" / "ergodic" / sensitive-dependence language for chaotic mechanics** —
  `09.08.01` (KAM & chaos), `02.12.10` (Poincaré–Bendixson). Descriptive, not the measure-theoretic
  mixing hierarchy; `38.05.01` supplies the theorems.
- **Shannon / relative / Gibbs / Boltzmann entropy of a *measure*** — `37.07.06` (relative entropy /
  Donsker–Varadhan), `08.01.03/04` (Boltzmann distribution / free energy), `11.04.01` (canonical
  ensemble). Distinct object from the KS-entropy of a *transformation* (`38.06.*`); cross-referenced
  for the disambiguation, not duplicated.
- **Spectral theorem for normal/unitary operators (finite-dim) and Fourier/Plancherel** —
  `01.01.13`, `02.10.04`: the linear-algebra and harmonic-analysis prerequisites for the spectral
  chapter, referenced as prereqs, not ergodic-theory units.

## OUT OF SCOPE

- **Standalone topological entropy of symbolic / topological systems** (definition via open
  covers / spanning sets in the *purely topological* setting, entropy of subshifts of finite type,
  the zeta-function count) — belongs to **Brin–Stuck `38.01/02`** (topological + symbolic dynamics).
  Walters treats it mainly as the \(\varphi=0\) case of pressure; `38.06.03` references
  \(h_{\mathrm{top}}(T)\) from there and supplies only the **variational principle / pressure /
  equilibrium-state** layer.
- **Hyperbolicity, structural stability, Markov partitions, SRB measures, Pesin theory** —
  **Katok–Hasselblatt `38.03`** and **smooth ergodic theory `38.07`**. The Gibbs-measure /
  thermodynamic-formalism *application to Anosov systems* is mentioned in `38.06.03` as a capstone
  pointer but the smooth-dynamics machinery is not built there.
- **Ornstein isomorphism theory in full** (the d̄-metric, very-weak-Bernoulli, finitely-determined
  partitions) — stated as a capstone *pointer* in `38.06.01`; the full proof is a research-level
  topic deferred (likely a later `38.06` unit or `38.07`), not spun out here.
- **Walters' Chapter-0 measure-theory and functional-analysis recap** (Lebesgue/Radon–Nikodym,
  conditional expectation, \(L^2\) geometry) — already covered in `02.07.*` and `37.04.*`; referenced
  as prereqs, not re-proposed.
- **Multiple recurrence / Furstenberg's ergodic-theoretic Szemerédi theorem** — beyond Walters'
  scope (Furstenberg's own book); a candidate for a later additive-combinatorics or dynamics unit,
  not proposed from this source.

---

## RETURN SUMMARY
- **Genuine gaps:** 7 (`38.04.01`, `38.04.02`, `38.05.01`, `38.05.02`, `38.06.01`, `38.06.02`, `38.06.03`)
- **COVERED:** 8 topics (mapped to existing ids; chiefly `37.02.03` for the ergodic theorems themselves)
- **OUT OF SCOPE:** 5
- **Gap file:** `plans/expansion/dynamics/_audit/walters-ergodic.gaps.md`
