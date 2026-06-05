# Audit: Anderson-Guionnet-Zeitouni — *An Introduction to Random Matrices*

`source_book: agz-random-matrices`
`source_curriculum: probability`
`section: probability` (new section `content/37-probability/`)

**Verdict:** Random matrix theory is genuinely near-absent from the corpus. **7 genuine gaps** in chapter `08-random-matrices`.

Method: AGZ's headline theorems were each verified by filename + body grep across the
live corpus. Every RMT-flavored hit (`semicircle`, `wigner`, `tracy-widom`,
`determinantal`, `free`, `stieltjes`) resolved to **incidental cross-references**, not
units: `08.14.06` (matrix-models / 2D-gravity) derives the semicircle *only* from the
QFT large-$N$ genus expansion and explicitly defers the probabilistic ensemble theory
and free probability; `08.14.07` (KPZ) and `07.05.01-03` (symmetric-group / RSK) merely
*name* the Tracy-Widom law as an external fact; `07.07.04` is the **compact-Lie-group**
Weyl integration formula, not the RMT joint eigenvalue density. There are **no**
units on non-crossing partitions, free cumulants, free convolution, the R-transform,
asymptotic freeness, determinantal point processes, the sine/Airy kernels, or
spectral concentration.

**Boundary with the Durrett audit.** The sibling audit
`durrett-probability.gaps.md` already claims **`37.08.01` = "The Wigner semicircle law
and the moment method"** (semicircle via Catalan moments + statement of universality /
Tracy-Widom). This audit does **not** re-propose that unit. AGZ is the dedicated RMT
monograph, so its genuine gaps are the *deeper machinery* that `37.08.01` only states:
the resolvent/Stieltjes proof, the Gaussian ensembles and their joint density,
determinantal/sine-kernel bulk universality, the Airy-kernel / Tracy-Widom edge at
proof depth, the operator-norm / largest-eigenvalue bound, spectral concentration, and
the entire free-probability layer. Proposed ids therefore start at **`37.08.02`**.

Forward-prereferenced sibling-spine ids (`37.02.02`, `37.03.01`, `37.07.01`, `37.08.01`)
are the planned units defined in the Durrett/Williams audits of this same probability
batch; cross-strand prereqs (`01.01.*`, `02.07.*`, `02.09.*`, `02.11.*`, `06.01.*`,
`08.13.*`) are verified-existing files.

---

## GENUINE GAPS

### 37.08.02 — The Stieltjes transform and the semicircle law via the resolvent
- **id:** `37.08.02`
- **title:** The Stieltjes transform and the semicircle law via the self-consistent resolvent equation
- **spec:** Stieltjes (Cauchy) transform $G_\mu(z)=\int(\lambda-z)^{-1}d\mu$, its analytic properties and the Stieltjes inversion formula recovering $\mu$; the resolvent / Schur-complement expansion for a Wigner matrix; derivation of the self-consistent fixed-point equation $G(z)=(-z-G(z))^{-1}$ and its solution $G(z)=\tfrac12(-z+\sqrt{z^2-4})$, giving an analytic (non-moment) proof that the empirical spectral distribution converges to the semicircle. The transform-method complement to the Catalan-moment proof in `37.08.01`.
- **prereqs:** `37.08.01` (semicircle law / moment method), `02.09.01` (complex analysis, Cauchy transform), `02.11.03` (resolvent of a self-adjoint operator)
- **chapter:** `08-random-matrices` — `section: probability`, `chapter: 08-random-matrices`

### 37.08.03 — Gaussian ensembles (GUE/GOE/GSE) and the joint eigenvalue density
- **id:** `37.08.03`
- **title:** The Gaussian ensembles GOE/GUE/GSE and the Weyl integration / joint eigenvalue density
- **spec:** Definition of the Gaussian orthogonal/unitary/symplectic ensembles via the invariant Gaussian weight $\propto e^{-\beta N\,\mathrm{tr}\,M^2/4}$ ($\beta=1,2,4$); the change of variables to eigenvalue/eigenvector coordinates producing the Vandermonde Jacobian; the joint eigenvalue density $\propto \prod_{i<j}|\lambda_i-\lambda_j|^\beta \, e^{-\frac{\beta N}{4}\sum\lambda_i^2}$ as a log-gas / Coulomb-gas. The probabilistic RMT analogue of the compact-group Weyl integration formula `07.07.04`.
- **prereqs:** `37.08.01` (Wigner ensembles), `01.01.13` (spectral theorem for normal operators), `01.01.07` (determinant / Vandermonde)
- **chapter:** `08-random-matrices` — `section: probability`, `chapter: 08-random-matrices`

### 37.08.04 — Determinantal point processes and the sine-kernel bulk universality
- **id:** `37.08.04`
- **title:** Determinantal point processes, the orthogonal-polynomial method, and sine-kernel bulk universality
- **spec:** Determinantal point process with correlation kernel $K$; correlation functions $\rho_k=\det[K(x_i,x_j)]$; for the GUE, the Hermite-polynomial / Christoffel-Darboux kernel that makes the eigenvalue process determinantal; rescaling in the bulk and convergence of the kernel to the **sine kernel** $\frac{\sin\pi(x-y)}{\pi(x-y)}$, giving local bulk eigenvalue statistics (gap probabilities, level spacing). Underpins the universality only *stated* in `37.08.01`.
- **prereqs:** `37.08.03` (GUE / joint eigenvalue density), `02.11.05` (compact / trace-class operators, Fredholm context), `06.01.02` (Cauchy integral formula for kernel asymptotics)
- **chapter:** `08-random-matrices` — `section: probability`, `chapter: 08-random-matrices`

### 37.08.05 — The Airy kernel and the Tracy-Widom edge distribution
- **id:** `37.08.05`
- **title:** The Tracy-Widom law: the Airy kernel and the GUE edge fluctuations
- **spec:** Edge rescaling $\lambda_{\max}\approx 2 + N^{-2/3}\xi$; convergence of the Christoffel-Darboux kernel at the spectral edge to the **Airy kernel** $\frac{\mathrm{Ai}(x)\mathrm{Ai}'(y)-\mathrm{Ai}'(x)\mathrm{Ai}(y)}{x-y}$; the Tracy-Widom distribution $F_2(s)=\det(I-K_{\mathrm{Airy}})_{L^2(s,\infty)}$ as a Fredholm determinant and its Painlevé II representation; the $\beta=1,4$ variants $F_1,F_4$. Proof-depth treatment of the edge law that `37.08.01`, `08.14.07` (KPZ), and `07.05.02-03` (RSK) only cite.
- **prereqs:** `37.08.04` (determinantal processes / Christoffel-Darboux kernel), `02.09.01` (complex analysis / steepest descent for Airy asymptotics)
- **chapter:** `08-random-matrices` — `section: probability`, `chapter: 08-random-matrices`

### 37.08.06 — The largest eigenvalue and the operator-norm bound
- **id:** `37.08.06`
- **title:** The operator norm of a Wigner matrix: convergence of the largest eigenvalue to the edge
- **spec:** Convergence of $\|M_N\|=\lambda_{\max}\to 2$ (the spectral edge / semicircle support) almost surely; the high-trace / even-moment method bounding $\mathbb{E}\,\mathrm{tr}\,M^{2k}$ for $k\sim\log N$ to control the top eigenvalue; the matching lower bound; statement of the no-outlier (no eigenvalue strays beyond the bulk) phenomenon. The "largest eigenvalue" chapter of AGZ at the law-of-large-numbers scale, below the Tracy-Widom fluctuation scale of `37.08.05`.
- **prereqs:** `37.08.01` (moment method / Catalan combinatorics), `37.02.02` (strong law / a.s. convergence), `01.01.13` (spectral theorem, operator norm as top eigenvalue)
- **chapter:** `08-random-matrices` — `section: probability`, `chapter: 08-random-matrices`

### 37.08.07 — Concentration of the spectrum (log-Sobolev / Herbst)
- **id:** `37.08.07`
- **title:** Concentration of measure for the spectrum of a random matrix
- **spec:** Lipschitz functions of the eigenvalues (linear spectral statistics) as Lipschitz functions of the Gaussian entries; the Gaussian log-Sobolev inequality and the Herbst argument yielding sub-Gaussian concentration $\mathbb{P}(|f-\mathbb{E}f|>t)\le 2e^{-cN t^2}$ for $1$-Lipschitz $f$ of the matrix; concentration of the empirical spectral measure and of $\lambda_{\max}$ around their means. The probabilistic engine behind the a.s. statements in `37.08.02`/`37.08.06`.
- **prereqs:** `37.08.01` (empirical spectral distribution), `02.07.06` ($L^p$ / functional-inequality context), `37.03.01` (Gaussian / characteristic-function tools)
- **chapter:** `08-random-matrices` — `section: probability`, `chapter: 08-random-matrices`

### 37.08.08 — Free probability: freeness, free convolution, and the R-transform
- **id:** `37.08.08`
- **title:** Free probability: freeness, non-crossing partitions, free convolution, and the R-transform
- **spec:** Voiculescu's non-commutative probability space $(\mathcal{A},\tau)$ and the definition of **freeness** (free independence) of subalgebras; free cumulants and the non-crossing-partition lattice; the **R-transform** $R_\mu$ linearizing **free (additive) convolution** $\mu\boxplus\nu$ (with the multiplicative S-transform stated); the semicircle law as the free analogue of the Gaussian (free CLT); **asymptotic freeness** of independent GUE matrices (Voiculescu's theorem), explaining why the empirical eigenvalue distribution of sums/products of large random matrices is computed by free convolution. Kept at the probability/RMT level (the C*-/von-Neumann-algebra formulation belongs to the future operator-algebras spine).
- **prereqs:** `37.08.03` (Gaussian ensembles / trace functional), `02.11.01` (bounded operators, $\mathrm{tr}$ as a state), `01.02.10` (tensor product of modules / algebra context)
- **chapter:** `08-random-matrices` — `section: probability`, `chapter: 08-random-matrices`

---

## COVERED (not gaps)

- **Wigner semicircle law + moment/Catalan method + statement of universality / Tracy-Widom** — claimed by the sibling Durrett audit as `37.08.01`; this audit builds on it rather than duplicating it.
- **Wigner semicircle as a large-$N$ matrix-model saddle** (QFT derivation, Catalan moments, genus / topological expansion, orthogonal-polynomial BIPZ string equation) — `08.14.06` (matrix-models / 2D gravity); explicitly defers the probabilistic-ensemble and free-probability theory, which is exactly the gap set above.
- **Tracy-Widom law as an external fact in KPZ universality** (GUE/GOE TW for curved/flat fronts, link to last-passage percolation / RSK) — *named* in `08.14.07` (KPZ); proof via the Airy kernel is the gap `37.08.05`.
- **Tracy-Widom for longest-increasing-subsequence / Plancherel measure (Baik-Deift-Johansson)** — *cited* in `07.05.01`, `07.05.02`, `07.05.03` (symmetric-group / RSK / Young diagrams); the RMT-side proof machinery is `37.08.04`-`37.08.05`.
- **Weyl integration formula** (compact-Lie-group version, $\int_G f = \frac{1}{|W|}\int_T f\,|\Delta|^2$) — `07.07.04`; the RMT joint eigenvalue density / log-gas is the distinct gap `37.08.03`.
- **Spectral theorem (finite-dim, normal operators / principal axes)** — `01.01.13`; **eigenvalue/eigenvector basics** — `01.01.08`; **determinant / Vandermonde** — `01.01.07`. (Linear-algebra substrate, prereqs above.)
- **Resolvent / spectrum of (un)bounded self-adjoint operators** — `02.11.03`; **trace-class / compact operators** — `02.11.05`; **bounded operators as a state's domain** — `02.11.01`. (Functional-analysis substrate.)
- **Cauchy transform / contour-integral and steepest-descent toolkit** — `02.09.01`, `06.01.02`, `06.01.03`. (Complex-analysis substrate for the Stieltjes-transform and kernel-asymptotics gaps.)
- **Strong law of large numbers / a.s. convergence; characteristic functions; large-deviation principle** — sibling-spine `37.02.02`, `37.03.01`, `37.07.01` (Durrett audit). The matrix-specific LDP for the empirical spectral measure (Ben Arous-Guionnet) is treated as an Advanced-section extension of `37.08.07`/`37.07.01`, not a separate unit.

## OUT OF SCOPE

- **Operator-algebra / C\*- / von-Neumann-algebra formulation of free probability** (free group factors, free entropy/free dimension, $W^*$-probability spaces) — belongs to the planned operator-algebras spine. Gap `37.08.08` stays at the combinatorial / RMT level (freeness, non-crossing partitions, R-transform, asymptotic freeness of GUE).
- **Dyson Brownian motion / stochastic-calculus dynamics of eigenvalues** — heavy SDE apparatus; the static ensemble theory above is the priority, and the dynamics would layer on the existing stochastic-calculus block `02.15.*` if pursued later. Not proposed now.
- **Heavy local-law / four-moment / Erdős-Schlein-Yau universality machinery** (optimal rigidity, edge/bulk universality for general Wigner ensembles at full generality) — research-monograph apparatus beyond AGZ's introductory scope; `37.08.04`-`37.08.05` deliver the GUE-exact determinantal universality, which is the appropriate introductory tier.
- **$\beta$-ensembles / Selberg integral / Jack-polynomial theory at general $\beta$** — the $\beta=1,2,4$ classical ensembles are covered in `37.08.03`; the general-$\beta$ tridiagonal (Dumitriu-Edelman) and stochastic-Airy-operator theory is out of introductory scope.
- **Survey-tier mentions of random matrices in statistics / number theory** (`26.*`, `21.06.02` Sato-Tate, `21.03.01` Montgomery pair-correlation asides) — one-line cross-references, not units; the gaps target the theorem-and-proof RMT tier.

---

## Counts
- **Genuine gaps: 7** (`37.08.02`-`37.08.08`)
- **COVERED-verified topics: 8** (semicircle/moment `37.08.01`, matrix-models `08.14.06`, KPZ-TW `08.14.07`, RSK-TW `07.05.*`, Weyl `07.07.04`, linear-algebra substrate, functional-analysis substrate, complex-analysis substrate)
- **OUT OF SCOPE: 5**
