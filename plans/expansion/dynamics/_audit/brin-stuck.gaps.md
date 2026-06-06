# Audit — Brin & Stuck, *Introduction to Dynamical Systems* (CUP, 2002)

- **source_book:** `brin-stuck`
- **source_curriculum:** `dynamics`
- **target chapters:** `content/38-dynamics/01-topological-dynamics/` and
  `content/38-dynamics/02-symbolic-dynamics/` (frontmatter `section: dynamics`,
  `chapter: topological-dynamics` / `symbolic-dynamics`, id format `38.01.<UU>` / `38.02.<UU>`)
- **date:** 2026-06-05

## Verdict

The entire `38-dynamics` section is a **freshly scaffolded set of empty chapter
directories** (`01-topological-dynamics` … `07-smooth-ergodic-theory` all empty). Nothing
in `content/` develops topological dynamics or symbolic dynamics as a framework. The grep
sweep surfaced only **adjacent, differently-purposed** material:

- **Perron–Frobenius** lives in `37.05.02` (stochastic/Markov-chain context — row-stochastic
  matrices, period, cyclic classes) and in analytic number theory (`21.13`, `21.14`). The
  **topological** SFT application — a non-negative 0/1 *adjacency* matrix whose Perron
  eigenvalue equals the exponential growth rate of admissible words and the topological
  entropy of the shift — is **absent**. Different object, different theorem statement.
- **Birkhoff / von Neumann ergodic theorems** are covered measure-theoretically in `37.02.03`
  (probability). That is **Walters' territory (38.04)**, not mine; recurrence in the
  *topological* (Birkhoff recurrence / non-wandering) sense is not the measure-theoretic
  Poincaré recurrence of `05.02.08`.
- **Equidistribution of $\{n\alpha\}$** appears as **Weyl's criterion** via Fourier analysis in
  `21.15.02` (number theory). The **dynamical** statement — the irrational circle rotation is
  minimal and *uniquely ergodic*, with equidistribution as a corollary of unique ergodicity —
  is not stated; I cross-reference `21.15.02` rather than duplicate the Fourier proof.
- **Arnold cat map** appears only as a *dynamo* application in `05.14.08` (topological
  hydrodynamics). The hyperbolic toral automorphism as a dynamical system (Markov partition,
  conjugacy to an SFT, structural stability) is **not** developed — and the hyperbolic-dynamics
  treatment of it is **Katok–Hasselblatt's territory (38.03)**, so I propose only the
  topological-transitivity/minimality *framework* here, not the hyperbolicity.
- **Poincaré–Bendixson, Lyapunov stability, limit cycles, bifurcation** (`02.12.*`) are the
  *continuous-time ODE qualitative theory*, not the abstract topological-dynamics of a single
  continuous self-map on a compact metric space.

Consequently the **abstract topological-dynamics framework (38.01) and the symbolic-dynamics
framework (38.02) are genuine gaps in full.** Below is a tight spine of Brin–Stuck's headline
results, quality-over-quantity (worked examples folded into the unit they illustrate).

**Prereq convention.** Verified-existing anchors: `02.01.01` (topological space), `02.01.02`
(continuous map), `02.01.05` (metric space), `02.01.06` (quotient topology), `01.01.08`
(eigenvalue/eigenvector), `01.01.11` (Jordan form), `01.01.13` (spectral theorem),
`21.01.08` (continued fractions, for the Diophantine cross-ref), `21.15.02` (Weyl
equidistribution, cross-ref), `37.05.02` (stochastic Perron–Frobenius, contrast cross-ref).
Prereqs of the form `38.0x.xx` are **sibling units in this section** (38.04/05/06 audited in
parallel by Walters, 38.03/07 by Katok–Hasselblatt); listed so the producer can wire the DAG.

---

## GENUINE GAPS

### 38.01.01 — Topological dynamical systems, orbits, and limit sets
- **spec:** A topological dynamical system as a continuous self-map $f:X\to X$ (and the
  homeomorphism / $\mathbb{Z}$-action and flow / $\mathbb{R}$-action variants) on a compact
  metric space; forward and full orbits; $\omega$-limit and $\alpha$-limit sets and their
  basic properties (closed, $f$-invariant, non-empty for compact $X$); fixed and periodic
  points; topological conjugacy and semi-conjugacy as the equivalence relation of the subject.
- **prereqs:** `02.01.01`, `02.01.02`, `02.01.05`
- **chapter:** `topological-dynamics` · **section:** `dynamics`
- **source_book:** `brin-stuck` · **source_curriculum:** `dynamics`

### 38.01.02 — Minimality and recurrence
- **spec:** Minimal sets (non-empty closed invariant with no proper such subset); Zorn's-lemma
  existence of a minimal set in any non-empty compact invariant set; a system is minimal iff
  every orbit is dense; recurrent, non-wandering, and Birkhoff-recurrent points; the
  non-wandering set $\Omega(f)$ as closed and invariant; almost-periodic points and the
  characterization of minimal systems via uniform recurrence.
- **prereqs:** `38.01.01`
- **chapter:** `topological-dynamics` · **section:** `dynamics`
- **source_book:** `brin-stuck` · **source_curriculum:** `dynamics`

### 38.01.03 — Topological transitivity and topological mixing
- **spec:** Topological transitivity ($\exists$ dense orbit; equivalently every pair of
  non-empty opens is connected by some iterate) and the Birkhoff transitivity theorem (on a
  complete separable space without isolated points, a dense orbit exists iff the
  open-set-connectivity condition holds, via Baire category); topological mixing as the
  strictly stronger eventual-overlap condition; minimal $\Rightarrow$ transitive, and the
  chain minimal $\Rightarrow$ transitive $\Rightarrow$ non-wandering$=X$ with separating
  examples; Devaney chaos (transitivity + dense periodic points + sensitive dependence) and
  Banks et al.'s theorem that the first two imply sensitivity.
- **prereqs:** `38.01.01`, `38.01.02`
- **chapter:** `topological-dynamics` · **section:** `dynamics`
- **source_book:** `brin-stuck` · **source_curriculum:** `dynamics`

### 38.01.04 — Circle rotations, minimality, and unique ergodicity
- **spec:** The circle rotation $R_\alpha(x)=x+\alpha \bmod 1$; $R_\alpha$ has finite orbits
  (rational $\alpha$) versus every orbit dense and the system minimal (irrational $\alpha$);
  unique ergodicity of the irrational rotation and the resulting equidistribution of
  $\{n\alpha\}$ (Weyl), proved here dynamically via the unique-ergodicity criterion
  (uniform convergence of Birkhoff averages of continuous functions) and cross-referenced to
  the Fourier proof in `21.15.02`; the Diophantine role of the continued-fraction
  approximations of $\alpha$ (cross-ref `21.01.08`).
- **prereqs:** `38.01.01`, `38.01.02`, `38.01.03`, `21.15.02`, `21.01.08`
- **chapter:** `topological-dynamics` · **section:** `dynamics`
- **source_book:** `brin-stuck` · **source_curriculum:** `dynamics`
- **dedup:** equidistribution of $\{n\alpha\}$ proved Fourier-analytically in `21.15.02`;
  this unit gives the *dynamical* (unique-ergodicity) account and cites it. Unique ergodicity
  as a general measure-theoretic notion may also be touched by Walters (38.04) — keep this unit
  the *circle-rotation* instance and cross-ref the general statement.

### 38.01.05 — The rotation number of circle homeomorphisms (Poincaré)
- **spec:** Orientation-preserving circle homeomorphisms; lifts to $\mathbb{R}$; Poincaré's
  rotation number $\rho(f)=\lim (F^n(x)-x)/n$ — existence, independence of $x$, conjugacy
  invariance; $\rho$ rational iff $f$ has a periodic orbit; for irrational $\rho$ the unique
  minimal set is either all of $S^1$ (and $f$ is semi-conjugate to $R_\rho$, Poincaré
  classification) or a Cantor set (Denjoy counterexample), with the Denjoy theorem giving
  $C^2$/bounded-variation conjugacy to the rotation as the boundary case.
- **prereqs:** `38.01.04`
- **chapter:** `topological-dynamics` · **section:** `dynamics`
- **source_book:** `brin-stuck` · **source_curriculum:** `dynamics`

### 38.02.01 — Shift spaces: the full shift and subshifts
- **spec:** The sequence space $\Sigma_k=\{1,\dots,k\}^{\mathbb{Z}}$ (and one-sided
  $\Sigma_k^+$) with the product (cylinder/metric) topology — compact, perfect, totally
  disconnected (a Cantor set); the shift map $\sigma$ as a homeomorphism; subshifts as
  closed shift-invariant subsets defined by a set of forbidden words; the full shift is
  topologically mixing and has dense periodic points; cylinder sets as a basis and the
  metric realizing the product topology.
- **prereqs:** `38.01.01`, `38.01.03`, `02.01.05`
- **chapter:** `symbolic-dynamics` · **section:** `dynamics`
- **source_book:** `brin-stuck` · **source_curriculum:** `dynamics`

### 38.02.02 — Shifts of finite type, transition matrices, and topological Markov chains
- **spec:** Shifts of finite type (subshifts defined by a finite set of forbidden blocks);
  reduction to a 1-step SFT / topological Markov chain via a higher-block recoding; the 0/1
  transition (adjacency) matrix $A$ and the vertex/edge-graph picture; admissible words
  $\leftrightarrow$ paths in the graph; the count of length-$n$ admissible words and periodic
  points $= \operatorname{tr} A^n$; irreducibility of $A$ (graph strongly connected) $\Leftrightarrow$
  topological transitivity, and aperiodicity (primitive $A$) $\Leftrightarrow$ topological mixing.
- **prereqs:** `38.02.01`, `01.01.08`
- **chapter:** `symbolic-dynamics` · **section:** `dynamics`
- **source_book:** `brin-stuck` · **source_curriculum:** `dynamics`
- **dedup:** distinct from the *stochastic* transition matrix of `37.05.02`; that is a
  row-stochastic Markov-chain matrix (probabilities), this is a 0/1 *adjacency* matrix
  encoding admissibility. Cross-ref `37.05.02` to contrast the two uses of "transition matrix".

### 38.02.03 — Perron–Frobenius for non-negative matrices and the growth rate of an SFT
- **spec:** The Perron–Frobenius theorem for irreducible non-negative (and the primitive)
  matrices: a simple positive Perron eigenvalue $\lambda$ equal to the spectral radius, with
  positive left/right eigenvectors, dominating all other eigenvalues (strictly, in the
  primitive case); cyclic (period-$p$) spectral structure in the irreducible-imprimitive case;
  application to an SFT: the number of admissible $n$-words grows like $\lambda^n$, so the
  topological entropy of the SFT is $\log\lambda(A)$.
- **prereqs:** `38.02.02`, `01.01.08`, `01.01.11`
- **chapter:** `symbolic-dynamics` · **section:** `dynamics`
- **source_book:** `brin-stuck` · **source_curriculum:** `dynamics`
- **dedup:** Perron–Frobenius is *stated* for the stochastic case in `37.05.02` and used in
  `21.13`/`21.14`; no unit proves the general non-negative-matrix theorem with the
  Perron-eigenvector/spectral-gap content. This unit owns the **general PF theorem** plus its
  symbolic-dynamics consequence. Cross-ref `37.05.02`.

### 38.02.04 — Topological entropy of a subshift and the coding of dynamical systems
- **spec:** Topological entropy via the exponential growth rate of the number of admissible
  $n$-words, $h_{top}(\sigma|_Y)=\lim \tfrac1n\log\#\{n\text{-words}\}$; for an SFT it equals
  $\log\lambda(A)$ (from 38.02.03); the role of symbolic dynamics as a *coding* tool — Markov
  partitions semi-conjugate a system to an SFT (the doubling map and the full $1$-sided shift,
  the hyperbolic toral automorphism's Markov partition stated as the motivating example and
  cross-referenced forward to 38.03); the variational-principle and general definitions of
  topological entropy left to the entropy chapter.
- **prereqs:** `38.02.02`, `38.02.03`
- **chapter:** `symbolic-dynamics` · **section:** `dynamics`
- **source_book:** `brin-stuck` · **source_curriculum:** `dynamics`
- **dedup / OVERLAP FLAG:** the **general** definition of topological entropy
  (spanning/separated sets, open-cover definition, the variational principle) belongs to
  **Walters / 38.06** — propose there, not here. This unit keeps only the *word-growth*
  definition specialized to subshifts and the $\log\lambda(A)$ computation, which is the
  natural Brin–Stuck landing point. **If Walters' 38.06 audit already proposes the
  subshift word-growth entropy, merge this into that unit and drop 38.02.04.**

---

## COVERED (not gaps)

- **Perron–Frobenius (stochastic / row-stochastic matrices, period, cyclic classes)** —
  `37.05.02`. Probabilistic; the *general non-negative* theorem and the SFT use are 38.02.03.
- **Equidistribution of $\{n\alpha\}$ / Weyl's criterion** — `21.15.02` (Fourier proof).
  38.01.04 gives the dynamical (unique-ergodicity) account and cross-refs it.
- **Poincaré recurrence (measure-theoretic)** — `05.02.08`; the *topological* recurrence /
  non-wandering theory is 38.01.02 (distinct statement).
- **Birkhoff / von Neumann ergodic theorems** — `37.02.03` (Walters' 38.04 territory; not
  re-proposed here).
- **Arnold cat map** — appears as a dynamo in `05.14.08`; the hyperbolic-dynamics treatment
  (Markov partition, structural stability) is **Katok–Hasselblatt / 38.03**, referenced
  forward from 38.02.04, not proposed here.
- **Continued fractions / Diophantine approximation** — `21.01.08`; prereq cross-ref for the
  circle-rotation Diophantine condition, not re-proposed.
- **Spectral theorem / eigenvalues / Jordan form** — `01.01.08`, `01.01.11`, `01.01.13`;
  linear-algebra prereqs for the transition-matrix analysis.
- **Topological-space / metric-space / quotient-topology foundations** — `02.01.01`,
  `02.01.02`, `02.01.05`, `02.01.06`; prereqs.

## OUT OF SCOPE

- **Hyperbolicity, Anosov/Axiom-A systems, structural stability, Markov partitions of
  hyperbolic toral automorphisms (as theorems)** — **Katok–Hasselblatt, chapter 38.03**;
  Brin–Stuck's later chapters touch these but they are owned elsewhere. 38.02.04 only
  *names* the cat-map Markov partition as motivation.
- **General topological-entropy machinery (spanning/separated sets, open covers, the
  variational principle)** — **Walters, chapter 38.06**; this audit proposes only the
  subshift word-growth specialization (38.02.04, with a merge flag).
- **Measure-theoretic / smooth ergodic theory (ergodic theorems, mixing-spectral theory,
  Lyapunov exponents, Pesin theory)** — **Walters (38.04/38.05) and Katok–Hasselblatt
  (38.07)**; not topological dynamics.
- **Continuous-time qualitative ODE theory (Poincaré–Bendixson, Lyapunov stability, limit
  cycles, bifurcations)** — already in `02.12.*`; a different (flow / vector-field) layer
  than the abstract-self-map framework audited here.
- **Brin–Stuck's worked examples** (expanding maps of the interval beyond the doubling map,
  the Gauss map / continued-fraction map as a worked example, the quadratic family details)
  — folded into the units they illustrate (doubling map into 38.02.04; Gauss-map dynamics
  cross-ref `21.01.08`), not spun out as standalone units.

---

## RETURN SUMMARY
- **Genuine gaps:** 9 (38.01.01–38.01.05; 38.02.01–38.02.04)
- **COVERED:** 8 topics (mapped to existing ids / sibling-chapter owners)
- **OUT OF SCOPE:** 5
- **Overlap flags:** 38.02.04 (topological entropy) merges with Walters 38.06 if duplicated;
  38.01.04 unique ergodicity coordinates with Walters 38.04; cat-map hyperbolicity deferred to
  Katok–Hasselblatt 38.03.
- **Gap file:** `plans/expansion/dynamics/_audit/brin-stuck.gaps.md`
