# Audit gaps — Le Gall, *Brownian Motion, Martingales, and Stochastic Calculus* (37.06)

SLUG: `legall-stochastic-calculus`
SOURCE CURRICULUM: `probability` · SECTION: `probability` · CHAPTER: `06-brownian-motion-stochastic-calculus`
Audited 2026-06-05 against the live corpus. New chapter `content/37-probability/06-brownian-motion-stochastic-calculus/` is **empty**; free ids run sequentially from `37.06.01`.

This book overlaps the existing `content/02-analysis/15-stochastic-analysis/` chapter heavily, and that overlap is the expected, valuable result. All five 02.15 units were read in full (not just frontmatter). The single-PDE/Itô-calculus spine of Le Gall is **already built at master depth** in 02.15.01–05, and two of the book's "advanced" headline theorems that the prompt flagged as candidate gaps turned out to be **fully stated and proved elsewhere**:

- **Lévy's characterisation** is a standalone Proposition *with proof* in `02.15.01` (lines 205–211: continuous local martingale + $\langle X\rangle_t=t$ ⇒ BM, via the complex exponential martingale). NOT a gap.
- **Girsanov's theorem** is **Theorem 10** in `02.07.08-absolute-continuity-radon-nikodym.md` (lines 521–523): full statement with Novikov's condition, drift removal $\tilde B_t=B_t-\int_0^t\theta_s\,ds$, the exponential-martingale density, and the finance application. NOT a gap.

What is genuinely absent corpus-wide (verified by filename + body grep over all of `content/`) is the **depth beyond the single-integrator Itô calculus**: (i) the standalone theory of **continuous local martingales, quadratic variation, and the Doob–Meyer decomposition** as objects in their own right (02.15.01/02 only construct quadratic variation *ad hoc* for BM and for the stochastic integral, never the general $\langle M\rangle$ / Doob–Meyer machinery); (ii) the **predictable / Brownian martingale representation theorem** (zero hits anywhere); (iii) **local times and Tanaka's formula** (the occupation-density object — zero hits; the only "Tanaka" in the corpus is Tanaka's *equation* in 02.15.03, a different object used to illustrate weak vs. strong SDE solutions).

Result: **3 genuine gaps**, **12 COVERED-verified topics**, **3 OUT OF SCOPE**.

---

## Genuine gaps (propose to write)

### 1. `37.06.01` — Continuous local martingales, quadratic variation, and the Doob–Meyer decomposition
- **title:** Continuous local martingales and the Doob–Meyer / quadratic-variation theory
- **spec:** The general theory of continuous-time martingales that Le Gall builds before any integration: continuous local martingales, the Doob–Meyer decomposition of a continuous submartingale, existence and uniqueness of the increasing process $\langle M\rangle$ (quadratic variation) of a continuous local martingale as the compensator making $M^2-\langle M\rangle$ a local martingale, the Kunita–Watanabe covariation $\langle M,N\rangle$ and inequality, and the characterisation $M$ is a martingale of bounded variation ⇒ $M$ constant. This is the structural backbone — distinct from the BM-specific $\langle B\rangle_t=t$ partition computation in 02.15.01 and the integral-specific $[I(H)]_t=\int H^2\,ds$ identity in 02.15.02, neither of which proves the general Doob–Meyer existence theorem.
- **prereqs:** `37.04.*` (conditional expectation & discrete martingales, this curriculum), `02.07.06` (L^p spaces, completeness), `02.15.01` (Brownian motion, the motivating example of $\langle B\rangle_t=t$)
- **chapter:** `06-brownian-motion-stochastic-calculus` · `section: probability` · `source_book: legall-stochastic-calculus` · `source_curriculum: probability`
- **why a gap:** `grep -riE "doob.?meyer|continuous local martingale|kunita.?watanabe"` over `content/` hits only the two 02.15 units, where the phrases appear *incidentally* (a "continuous local martingale" hypothesis inside Lévy's proof and inside the BDG statement); there is no standalone Doob–Meyer decomposition theorem and no general construction of $\langle M\rangle$ for an arbitrary continuous local martingale anywhere in the corpus. `grep -riE "doob.?meyer decomposition"` → 0 hits.

### 2. `37.06.02` — The Brownian martingale representation theorem
- **title:** The martingale (predictable) representation theorem for the Brownian filtration
- **spec:** Every (local) martingale $M$ adapted to a Brownian filtration $(\mathcal F_t^B)$ admits a representation $M_t = M_0 + \int_0^t H_s\,dB_s$ for a unique predictable, locally square-integrable integrand $H$ — equivalently, the stochastic integrals against $B$ exhaust the $L^2$ martingales of the Brownian filtration; the proof via density of Wiener (exponential) functionals / chaos, and the corollary that the Brownian filtration supports no martingales of bounded variation other than constants. State the multidimensional version. This is the converse direction to Itô integration and the analytic engine behind market completeness in finance.
- **prereqs:** `37.06.01` (continuous local martingales & $\langle M\rangle$, this chapter), `02.15.02` (the Itô integral and Itô's formula), `02.15.01` (Brownian motion)
- **chapter:** `06-brownian-motion-stochastic-calculus` · `section: probability` · `source_book: legall-stochastic-calculus` · `source_curriculum: probability`
- **why a gap:** `grep -riE "martingale representation|predictable representation"` over `content/` → **0 hits**. The only "representation" in the 02.15 units is the *Feynman-Kac* representation of a PDE solution (02.15.02 exercise), a different theorem. Genuinely absent.

### 3. `37.06.03` — Brownian local time and Tanaka's formula
- **title:** Local times, Tanaka's formula, and the occupation-density theory of continuous semimartingales
- **spec:** The local time $L_t^a$ of a continuous semimartingale at level $a$ as the occupation density $\int_0^t f(X_s)\,d\langle X\rangle_s = \int_\mathbb{R} f(a)\,L_t^a\,da$; **Tanaka's formula** $|X_t-a| = |X_0-a| + \int_0^t \operatorname{sgn}(X_s-a)\,dX_s + L_t^a$ (and the $(X-a)^\pm$ variants) as the Itô formula for the non-$C^2$ convex function; the Itô–Tanaka generalised Itô formula for convex $f$ with $f''$ a measure; joint continuity (Trotter) and the Ray–Knight description for Brownian local time; Lévy's identity $(|B|, L^0)\overset d=(B-\underline B,-\underline B)$ relating local time to the running infimum.
- **prereqs:** `37.06.01` (quadratic variation / continuous local martingales, this chapter), `02.15.02` (the Itô integral and Itô's formula), `02.15.01` (Brownian motion; reflection principle)
- **chapter:** `06-brownian-motion-stochastic-calculus` · `section: probability` · `source_book: legall-stochastic-calculus` · `source_curriculum: probability`
- **why a gap:** `grep -riE "local time|tanaka|occupation (density|time)"` over `content/` → the only stochastic-analysis hit is `02.15.03` line 169, which discusses **Tanaka's *equation*** $dX=\operatorname{sgn}(X)\,dB$ as a *counterexample for strong SDE solutions* — a completely different object from Tanaka's *formula* for local time. No occupation-density / local-time unit exists anywhere (other hits are geography "local time", Green's functions on Riemann surfaces, etc.). Genuinely absent and a central chapter of Le Gall (Ch. 7).

---

## COVERED (not gaps) — verified with existing unit ids

- **Gaussian variables / Gaussian processes / Gaussian white noise** (covariance $s\wedge t$ forcing the BM increments) — **COVERED** `02.15.01` (Lévy–Ciesielski construction realises BM as a Gaussian process, lines 138–176); Gaussian-vector foundations in the CLT/CF chapter `37.03.*` and `26.02.01`.
- **Construction of Brownian motion** (Lévy–Ciesielski / Wiener measure, Kolmogorov continuity) — **COVERED** `02.15.01`.
- **Filtrations, stopping times, optional sampling / optional stopping** — **COVERED** `02.15.01` (optional-sampling identity, lines 140+); discrete-time martingale machinery in `37.04.*`.
- **Quadratic variation of Brownian motion $\langle B\rangle_t=t$** — **COVERED** `02.15.01` (line 184, the $L^2$/a.s. partition limit). *(The general continuous-local-martingale Doob–Meyer theory is gap #1.)*
- **The Itô integral against a continuous semimartingale + Itô isometry** — **COVERED** `02.15.02` (construction as the $L^2$-isometric extension from simple integrands).
- **Itô's formula** (1-D, time-dependent, multidimensional with covariation $\langle X^i,X^j\rangle$) — **COVERED** `02.15.02` (lines 326–372).
- **Lévy's characterisation of Brownian motion** (continuous local mart. + $\langle X\rangle_t=t$ ⇒ BM) — **COVERED** `02.15.01` Proposition with full proof (lines 205–211). Prompt-flagged as a candidate; it is present.
- **Burkholder–Davis–Gundy inequalities** (running max $\sim$ quadratic variation in every $L^p$) — **COVERED** `02.15.02` (line 342).
- **Doléans-Dade / stochastic exponential & Novikov's condition** — **COVERED** `02.15.02` (lines 336–340).
- **Girsanov's theorem / change of measure / Cameron–Martin drift shift** — **COVERED** `02.07.08` **Theorem 10** (lines 521–523, full statement with Novikov + drift removal); referenced again in `02.15.02` line 340. Prompt-flagged as a candidate; it is present and proved.
- **Stochastic differential equations, diffusions, strong/weak solutions, the generator, Dynkin's formula** — **COVERED** `02.15.03` (incl. Tanaka's *equation* as the weak-not-strong counterexample, line 169).
- **Feynman–Kac formula / connections to PDE (Cauchy problem, Dirichlet problem, exit times, harmonic functions)** — **COVERED** `02.15.04` (Feynman–Kac) and `02.15.03` (generator ↔ elliptic operator, Dirichlet/exit). Le Gall Ch. 8 "Stochastic calculus and PDEs."

## OUT OF SCOPE

- **Stratonovich integral / calculus** — already its own unit `02.15.05`; not in Le Gall's main line and fully covered.
- **Brownian motion on a Riemannian manifold** — `03.02.45` (Stratonovich/Eells–Elworthy–Malliavin direction); beyond Le Gall's Euclidean scope.
- **Path-integral / Wiener-measure-as-quantisation and Fokker–Planck-in-physics** — `08.14.01`, `08.10.02` (physics curriculum); the probabilistic Wiener measure is already in `02.15.01`, the physics framing is a separate spine.
