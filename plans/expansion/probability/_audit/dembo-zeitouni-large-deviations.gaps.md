# Audit gaps — Dembo & Zeitouni, *Large Deviations Techniques and Applications*

SLUG: `dembo-zeitouni-large-deviations`
SECTION: `probability` · CHAPTER: `07-large-deviations` · PREFIX: `37.07`
Audited against the live corpus (2026-06-05).

**Finding: large-deviation theory is entirely absent corpus-wide.** Word-boundary
greps confirm it — `\blarge deviation` returns only coincidental hits (Wasserstein
"large deviation" aside in `05.15.01`, heat-kernel asymptotics prose, descriptive-
statistics files); `cram[eé]r` matches only *Cramér's rule* (linear algebra) and
*Cramér-Rao* (statistics), never Cramér's LDP; `sanov|varadhan|g[äa]rtner-ellis|
freidlin|schilder` → 0 relevant hits. The target chapter
`content/37-probability/07-large-deviations/` contains only a `.gitkeep`. The whole
`37-probability` section is being built fresh (all eight chapters hold only
`.gitkeep`), so there is no "assume covered" prior to apply here: the LDP spine must
be built from scratch.

What IS covered, and must be **referenced rather than rebuilt**, is the convex-
analysis / thermodynamic substrate: the Legendre transform (mechanics + thermo
forms), relative entropy / free energy (stat-mech), and the Brownian/Itô/SDE layer
(`02.15.*`) that Schilder and Freidlin-Wentzell sit on. Those are listed under
COVERED with ids and are the prereq anchors below.

Result: **11 genuine gaps** (37.07.01–37.07.11), **7 COVERED-verified topics**,
**4 OUT-OF-SCOPE**.

Note on prereqs: items tagged `[37.x, fresh-build]` are sibling units in the same
probability expansion (not yet written but planned in the section skeleton); items
with a verified `NN.NN.NN` id were grep-confirmed to exist in the live corpus.

---

## Genuine gaps (propose to write)

### 1. `37.07.01` — The large deviation principle: rate functions, lower/upper bounds, good rate functions
- **spec:** Define the LDP for a family $\{\mu_\varepsilon\}$ at speed $a_\varepsilon$: lower bound on open sets $\liminf \varepsilon\log\mu_\varepsilon(G)\ge -\inf_G I$, upper bound on closed sets $\limsup \varepsilon\log\mu_\varepsilon(F)\le -\inf_F I$; lower-semicontinuity and *good* rate functions (compact level sets), the weak LDP, uniqueness of the rate function, and exponential tightness as the bridge from weak to full.
- **prereqs:** `02.07.05` (Fatou/dominated convergence), `02.07.08` (Radon-Nikodym), measure-foundations `[37.01, fresh-build]`
- **chapter:** `07-large-deviations` · `section: probability` · `source_book: dembo-zeitouni-large-deviations` · `source_curriculum: probability`
- **why a gap:** the definitional core of the whole theory; absent corpus-wide. Anchor unit for 37.07.

### 2. `37.07.02` — Cramér's theorem on $\mathbb{R}$ and the Legendre-Fenchel rate function
- **spec:** LDP for empirical means $\bar S_n=\frac1n\sum X_i$ of i.i.d. real variables with rate $I(x)=\Lambda^*(x)=\sup_\lambda(\lambda x-\Lambda(\lambda))$, $\Lambda(\lambda)=\log\mathbb E e^{\lambda X}$; convexity, the change-of-measure (tilting) lower bound, the Chernoff upper bound, and the finite-dimensional $\mathbb R^d$ extension.
- **prereqs:** `37.07.01`, independence/LLN `[37.02, fresh-build]`, `09.04.01` (Legendre transform — referenced, see COVERED), `02.11.02` (Hahn-Banach, for the convex-duality machinery)
- **chapter:** `07-large-deviations` · `section: probability` · `source_book: dembo-zeitouni-large-deviations` · `source_curriculum: probability`
- **why a gap:** the prototype LDP (Dembo-Zeitouni Thm 2.2.3/2.2.30). `cram[eé]r` greps hit only Cramér's *rule*/Cramér-*Rao*; Cramér's LDP absent.

### 3. `37.07.03` — The Legendre-Fenchel transform and convex duality of rate functions
- **spec:** Standalone treatment of the Fenchel conjugate $f^*(\lambda)=\sup_x(\langle\lambda,x\rangle-f(x))$ on $\mathbb R^d$: biconjugation $f^{**}=f$ for closed convex $f$, the Fenchel-Young inequality, essential smoothness / steepness, and why $\Lambda^*$ is automatically convex and good. The probabilistic logarithmic-moment-generating-function $\Lambda$ as the dual object.
- **prereqs:** `02.11.02` (Hahn-Banach / separation), `09.04.01` (Legendre transform, smooth case — referenced)
- **chapter:** `07-large-deviations` · `section: probability` · `source_book: dembo-zeitouni-large-deviations` · `source_curriculum: probability`
- **why a gap:** the corpus has only the *smooth, invertible* Legendre transform (mechanics `09.04.01`, thermo `11.01.02`). The general lower-semicontinuous-convex Fenchel conjugate with biconjugation and essential smoothness — the analytic engine of Cramér/Gärtner-Ellis — is absent. Grep `fenchel|convex conjugate|biconjugate` → 0 hits.

### 4. `37.07.04` — The Gärtner-Ellis theorem
- **spec:** LDP for a general (not necessarily i.i.d.) sequence from the limiting log-moment-generating function $\Lambda(\lambda)=\lim\frac1n\log\mathbb E e^{n\langle\lambda,Z_n\rangle}$: lower bound at exposed points, upper bound with the essential-smoothness/steepness hypothesis, rate $I=\Lambda^*$. The dependent-data generalisation of Cramér.
- **prereqs:** `37.07.02` (Cramér), `37.07.03` (Fenchel duality), markov-chains `[37.05, fresh-build]` (for the dependent-data examples)
- **chapter:** `07-large-deviations` · `section: probability` · `source_book: dembo-zeitouni-large-deviations` · `source_curriculum: probability`
- **why a gap:** Dembo-Zeitouni Thm 2.3.6; the workhorse for Markov-chain and Gaussian LDPs. `g[äa]rtner` → 0 hits.

### 5. `37.07.05` — Sanov's theorem and the LDP for empirical measures
- **spec:** LDP for the empirical measure $L_n=\frac1n\sum\delta_{X_i}$ of i.i.d. samples in $M_1(\Sigma)$ (weak topology) with rate the relative entropy $H(\nu\,\|\,\mu)=\int\log\frac{d\nu}{d\mu}\,d\nu$; statement via the level-1/level-2 hierarchy, the method-of-types proof for finite alphabets, and Cramér as a contraction of Sanov.
- **prereqs:** `37.07.01`, `02.07.08` (Radon-Nikodym, for $d\nu/d\mu$), relative entropy (referenced, see COVERED), clt/weak-convergence `[37.03, fresh-build]`
- **chapter:** `07-large-deviations` · `section: probability` · `source_book: dembo-zeitouni-large-deviations` · `source_curriculum: probability`
- **why a gap:** Dembo-Zeitouni Thm 6.2.10. `sanov` → 0 hits; relative entropy exists only as a thermodynamic/quantum-info quantity, never as an LDP rate function.

### 6. `37.07.06` — Relative entropy as a rate function and the Donsker-Varadhan variational formula
- **spec:** $H(\nu\,\|\,\mu)$ as a good convex rate function: non-negativity (Gibbs' inequality), the dual/variational characterisation $H(\nu\,\|\,\mu)=\sup_g\{\int g\,d\nu-\log\int e^g d\mu\}$, joint convexity and lower semicontinuity, and Pinsker's inequality bounding total variation.
- **prereqs:** `02.07.08` (Radon-Nikodym), `02.07.06` ($L^p$/Jensen), `37.07.03` (Fenchel duality)
- **chapter:** `07-large-deviations` · `section: probability` · `source_book: dembo-zeitouni-large-deviations` · `source_curriculum: probability`
- **why a gap:** the corpus treats relative entropy only as a physical/information quantity (`08.12.02`, `12.17.*`); its role as a *good rate function* with the Donsker-Varadhan variational duality is the LDP-specific payoff and is absent.

### 7. `37.07.07` — Varadhan's integral lemma and the Laplace principle
- **spec:** Under an LDP with good rate $I$ plus a tail (moment) condition, $\lim\varepsilon\log\int e^{F/\varepsilon}d\mu_\varepsilon=\sup_x(F(x)-I(x))$; equivalence of the LDP with the Laplace principle, and the Laplace-method/saddle-point heuristic it makes rigorous.
- **prereqs:** `37.07.01`, `37.07.03` (Fenchel sup-duality)
- **chapter:** `07-large-deviations` · `section: probability` · `source_book: dembo-zeitouni-large-deviations` · `source_curriculum: probability`
- **why a gap:** Dembo-Zeitouni Thm 4.3.1; the LDP analogue of dominated convergence / the rigorous Laplace method. `varadhan` → 0 hits.

### 8. `37.07.08` — The contraction principle and the inverse contraction principle
- **spec:** If $\mu_\varepsilon$ satisfies an LDP with good rate $I$ and $f$ is continuous, then $f(\mu_\varepsilon)$ satisfies an LDP with rate $I'(y)=\inf\{I(x):f(x)=y\}$; the inverse contraction principle under exponential tightness; applications deriving Cramér from Sanov.
- **prereqs:** `37.07.01`, `37.07.05` (Sanov, as the worked application)
- **chapter:** `07-large-deviations` · `section: probability` · `source_book: dembo-zeitouni-large-deviations` · `source_curriculum: probability`
- **why a gap:** Dembo-Zeitouni Thm 4.2.1; the structural transport-of-LDP tool, absent.

### 9. `37.07.09` — Exponential tightness, exponential approximation, and the Dawson-Gärtner projective limit
- **spec:** Exponential tightness as the upgrade from weak to full LDP and the source of goodness; exponentially-good approximations (the LDP is stable under exp-equivalent perturbations); the Dawson-Gärtner theorem lifting LDPs along a projective system to the limit (the abstract route to function-space LDPs).
- **prereqs:** `37.07.01`, `37.07.08` (contraction), measure-foundations `[37.01, fresh-build]`
- **chapter:** `07-large-deviations` · `section: probability` · `source_book: dembo-zeitouni-large-deviations` · `source_curriculum: probability`
- **why a gap:** Dembo-Zeitouni §4.1, §4.2.2, §4.6 — the topological plumbing that makes infinite-dimensional LDPs (Mogulskii, Schilder) go through. Absent and a genuine prereq for 37.07.10–11.

### 10. `37.07.10` — Schilder's theorem: small-noise large deviations for Brownian motion
- **spec:** LDP for $\sqrt\varepsilon\,W$ in path space $C_0[0,1]$ as $\varepsilon\to0$ with good rate the Cameron-Martin energy $I(\phi)=\frac12\int_0^1|\dot\phi|^2dt$ ($+\infty$ off the Cameron-Martin space); proof via finite-dimensional Cramér + exponential tightness / Dawson-Gärtner, and Mogulskii's theorem as the random-walk analogue.
- **prereqs:** `02.15.01` (Brownian motion / Wiener process), `37.07.02` (Cramér), `37.07.09` (exponential tightness / projective limit), brownian-motion chapter `[37.06, fresh-build]`
- **chapter:** `07-large-deviations` · `section: probability` · `source_book: dembo-zeitouni-large-deviations` · `source_curriculum: probability`
- **why a gap:** Dembo-Zeitouni Thm 5.2.3; the gateway to small-noise diffusion LDPs. `schilder` → 0 hits; `02.15.01` provides the Wiener-measure prereq but states no LDP.

### 11. `37.07.11` — Freidlin-Wentzell theory: large deviations for small-noise diffusions
- **spec:** LDP for $dX^\varepsilon=b(X^\varepsilon)dt+\sqrt\varepsilon\,\sigma(X^\varepsilon)dW$ with good rate the action $I(\phi)=\frac12\int|\sigma^{-1}(\dot\phi-b(\phi))|^2dt$; the quasi-potential, exit-time/exit-location asymptotics (Eyring-Kramers heuristic), and the contraction of Schilder through the Itô map.
- **prereqs:** `37.07.10` (Schilder), `02.15.02` (Itô integral/formula), `02.15.03` (SDEs/diffusions and the generator), `37.07.08` (contraction principle)
- **chapter:** `07-large-deviations` · `section: probability` · `source_book: dembo-zeitouni-large-deviations` · `source_curriculum: probability`
- **why a gap:** Dembo-Zeitouni Ch. 5.6; the major applied payoff (metastability, exit problems). `freidlin|wentzell|quasi-potential|kramers` → 0 hits. SDE/Itô prereqs verified in `02.15.*`.

---

## COVERED (not gaps) — referenced, do not rebuild

- **Legendre transform (smooth / invertible case)** — COVERED `09.04.01` (Lagrangian→Hamiltonian) and `11.01.02` (thermodynamic potentials). Reference these for the smooth case; 37.07.03 generalises to the lower-semicontinuous-convex Fenchel conjugate, which they do *not* cover.
- **Relative entropy / KL divergence (as a physical/info quantity)** — COVERED `08.12.02` (thermodynamic-fluctuation context), `12.17.01`/`12.17.03` (quantum-info entropy). 37.07.06 supplies the *rate-function / Donsker-Varadhan* reading, absent there.
- **Free energy / log-partition function $\log\mathbb E e^{\lambda X}$ analogue** — COVERED `08.01.04` (free energy), `11.04.01` (canonical ensemble). The cumulant-generating-function $\Lambda(\lambda)$ is the probabilistic mirror; thermo gives the physics, not the LDP statements.
- **Radon-Nikodym derivative $d\nu/d\mu$** — COVERED `02.07.08`. Prereq for Sanov/relative-entropy; reference, do not rebuild.
- **Hahn-Banach / separation (convex-duality substrate)** — COVERED `02.11.02`. Prereq for Fenchel duality.
- **Brownian motion / Wiener measure** — COVERED `02.15.01`. Prereq for Schilder; states the construction, not the small-noise LDP.
- **Itô calculus / SDEs / diffusion generator** — COVERED `02.15.02`, `02.15.03`. Prereqs for Freidlin-Wentzell; provide the diffusion, not its LDP.

## OUT OF SCOPE (no theorem-level payoff for this chapter)

- **Method of types — full information-theoretic development** (Csiszár-Körner). Touched inside 37.07.05 as the finite-alphabet Sanov proof; a standalone types/coding chapter belongs to an information-theory spine, not here.
- **Process-level (level-3) LDP / Donsker-Varadhan large deviations for empirical processes of Markov chains** — the full level-3 / occupation-measure machinery (Dembo-Zeitouni Ch. 6.3–6.5) is heavy apparatus; the level-2 Sanov + Gärtner-Ellis pairing (37.07.04–05) delivers the headline payoff. Defer unless a dedicated Markov-LDP unit is later requested.
- **Sample-path moderate deviations and the CLT-LDP interpolation** — secondary refinement, no distinct headline theorem.
- **Abstract LDP on general topological / locally-convex spaces with the inverse-Laplace (Bryc) converse and projective-limit generalities beyond Dawson-Gärtner** — the Polish-space / $\mathbb R^d$ + path-space treatment in 37.07.01–11 covers every named theorem; full generality is apparatus without added theorem-level payoff.
