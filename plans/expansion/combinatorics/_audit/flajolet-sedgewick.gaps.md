# Audit — Flajolet & Sedgewick, *Analytic Combinatorics* (Cambridge, 2009)

- **source_book:** `flajolet-sedgewick`
- **source_curriculum:** `combinatorics`
- **target chapter:** `content/40-combinatorics/08-analytic-combinatorics-asymptotics/`
  (frontmatter `section: combinatorics`; `chapter: analytic-combinatorics-asymptotics`
  — the chapter dir name **without** the `08-` prefix; id format `40.08.<UU>`)
- **date:** 2026-06-06
- **ownership:** this audit owns chapter **40.08** in its entirety. It is the **first audit**
  run in Spine 6; the whole `40-combinatorics` tree is freshly scaffolded and **empty**
  (every chapter `01…08` contains only a `.gitkeep`).

## Verdict

`40.08` (and indeed all of `content/40-combinatorics`) is **empty**. Searching the live corpus for
the analytic-combinatorics apparatus — `symbolic method`, `singularity analysis`, `transfer
theorem`, `quasi-power`, `Flajolet`, OGF/EGF as *analytic* objects — returns **nothing**
(the handful of `grep` hits for "singularity"/"transfer"/"asymptotic" are unrelated occurrences
in differential geometry, moduli, and number-theory units). So the Flajolet–Sedgewick programme
is genuinely absent and this audit yields a full chapter of gaps.

**The clean division of labour with the rest of the corpus is:**

1. **Formal/enumerative generating functions** (the OGF/EGF as a formal power series, the algebra
   of GFs, basic coefficient extraction by partial fractions) are owned by the **co-produced
   Stanley EC1 units in chapter 40.01** (`enumeration-generating-functions`). Those units do
   **not exist yet** — they are produced in parallel in this same spine — so below they are cited
   as the **within-spine co-produced prereq** "`40.01.* — EC1 generating functions`" without
   pinning an exact `UU` (the producer wires the DAG once 40.01 lands). My units take the GF as
   given and go **analytic**: treat it as a function of a complex variable and extract asymptotics.

2. **Complex-analysis machinery** is owned by **`06-riemann-surfaces/01-complex-analysis`** and is
   cross-referenced, never re-proved. Verified-existing anchors used below:
   - `06.01.02` — Cauchy integral formula (the coefficient integral
     \([z^n]f = \frac1{2\pi i}\oint f(z)\,z^{-n-1}\,dz\)).
   - `06.01.03` — residue theorem (meromorphic coefficient extraction).
   - `06.01.05` — meromorphic functions (poles, principal parts).
   - `06.01.13` — argument principle / Rouché (locating dominant singularities).
   - `06.01.27` — power / Laurent series (radius of convergence = distance to nearest singularity).
   - `06.01.04` — analytic continuation (the \(\Delta\)-domain / continuation past the dominant
     singularity that singularity analysis needs).
   - `06.01.15` — Gamma function, **including Stirling via the Laplace method** (the saddle-point
     template and the \(1/\Gamma\) factors in the standard singularity-analysis scale).
   - `06.01.17` — Weierstrass factorisation / Hadamard products (entire-function growth, used by
     the saddle-point chapter).

3. **Partition / Hardy–Ramanujan circle-method asymptotics** are owned by **Spine 3**
   (`21.16.02` Hardy–Ramanujan–Rademacher, `21.16.01` pentagonal number theorem). My units defer
   to them: where partitions appear they are flagged as the modular/circle-method case handled
   in `21.16`, and I do **not** re-derive \(p(n)\sim e^{\pi\sqrt{2n/3}}/(4n\sqrt3)\).

4. **Probabilistic limit theorems** (CLT, characteristic functions, Berry–Esseen) live in
   **Spine 4 probability** (`37.*`). The quasi-powers unit cross-refs the CLT machinery and uses it
   as the analytic engine behind combinatorial Gaussian limit laws, not as a duplicate.

**Prereq convention below.** `40.08.*` ids other than a unit's own are **planned sibling units
defined in this same audit** (listed so the producer can wire the within-chapter DAG once they
land). `40.01.*` is the **co-produced EC1 generating-functions** prereq (cited generically).
`06.01.*` and `21.16.*` are **verified-existing cross-spine** anchors.

---

## GENUINE GAPS

### 40.08.01 — The symbolic method for unlabelled structures: combinatorial constructions and OGF translation
- **spec:** Set up the **analytic-combinatorics dictionary** for *unlabelled* combinatorial classes.
  Define a combinatorial class, its size function and **ordinary generating function**
  \(A(z)=\sum_n a_n z^n=\sum_{\alpha\in\mathcal A}z^{|\alpha|}\), and the **admissible
  constructions** with their automatic OGF translations: **disjoint union** (sum) \(A+B\),
  **Cartesian product** \(A\times B\mapsto A(z)B(z)\), **sequence**
  \(\textsc{Seq}(\mathcal B)\mapsto 1/(1-B(z))\), **multiset** \(\textsc{MSet}\mapsto
  \exp\!\big(\sum_{k\ge1}B(z^k)/k\big)\) (the **Euler transform**), **powerset**
  \(\textsc{PSet}\), and **cycle** \(\textsc{Cyc}\mapsto\sum_{k\ge1}\frac{\phi(k)}{k}\log\frac1{1-B(z^k)}\)
  (Pólya). Prove each translation rule and run the canonical specifications: binary/general plane
  trees, integer compositions, the **Euler product** for partitions
  \(P(z)=\prod_k(1-z^k)^{-1}\) (cross-ref `21.16.01` for the partition number theory itself).
  This is the *constructive/analytic* layer built on top of — and explicitly distinct from — the
  formal OGF algebra of the EC1 units (`40.01.*`).
- **prereqs:** `40.01.*` (EC1 generating functions — co-produced), `06.01.27` (power/Laurent series),
  `00.12.02` (binomial theorem / formal series intuition)
- **chapter:** `analytic-combinatorics-asymptotics` · **section:** `combinatorics`
- **source_book:** `flajolet-sedgewick` · **source_curriculum:** `combinatorics`

### 40.08.02 — The symbolic method for labelled structures: the EGF dictionary and the labelled product
- **spec:** The *labelled* parallel of 40.08.01. Define **labelled classes**, the **labelled
  (partitional) product** \(\mathcal A\star\mathcal B\) (relabellings/shuffles), and the
  **exponential generating function** \(\hat A(z)=\sum_n a_n z^n/n!\). Prove the EGF translations:
  product \(\mapsto \hat A(z)\hat B(z)\), **sequence** \(\textsc{Seq}\mapsto 1/(1-\hat B)\),
  **set** \(\textsc{Set}\mapsto \exp(\hat B)\) (the **exponential / set construction**), and
  **cycle** \(\textsc{Cyc}\mapsto \log\frac1{1-\hat B}\). Develop the **boxed product**
  \(\mathcal A^{\square}\star\mathcal B\) (smallest-label-in-the-\(\mathcal A\)-part) and its
  integral translation \(\int_0^z (\partial_t\hat A)\,\hat B\,dt\). Run the canonical labelled
  specifications: permutations \(=\textsc{Seq}\) and \(=\textsc{Set}(\textsc{Cyc})\) (giving the
  EGF \((1-z)^{-1}\) two ways), **set partitions / Bell numbers** \(\textsc{Set}(\textsc{Set}_{\ge1})
  \mapsto e^{e^z-1}\), **surjections**, **involutions** \(\exp(z+z^2/2)\), and **labelled trees**
  (Cayley) via \(\textsc{Set}\) of rooted trees.
- **prereqs:** `40.08.01`, `40.01.*` (EC1 generating functions — co-produced)
- **chapter:** `analytic-combinatorics-asymptotics` · **section:** `combinatorics`
- **source_book:** `flajolet-sedgewick` · **source_curriculum:** `combinatorics`

### 40.08.03 — Meromorphic coefficient asymptotics: Cauchy's coefficient formula and the dominant singularity
- **spec:** The **first principle of coefficient asymptotics**: the location of the dominant
  singularity dictates exponential growth, its nature dictates the subexponential factor. Establish
  **Cauchy's coefficient formula** \([z^n]f=\frac1{2\pi i}\oint f(z)z^{-n-1}dz\) as the analytic
  bridge (cross-ref `06.01.02`); the **Exponential Growth Formula** \([z^n]f=\rho^{-n}\theta(n)\)
  with \(\rho\) = radius of convergence = modulus of the nearest singularity (Pringsheim's theorem
  for the positive-coefficient case: the dominant singularity is **real positive**); and the
  **rational/meromorphic transfer**: for \(f=N/D\) rational (or meromorphic on a disk),
  \([z^n]f=\sum (\text{residue contributions})=\sum_j c_j\,\beta_j^{-n}n^{m_j-1}+\dots\) by
  partial-fraction / residue expansion (cross-ref `06.01.03`, `06.01.05`). Worked examples:
  linear-recurrence sequences (Fibonacci → golden-ratio growth), compositions, the **supercritical
  sequence schema**, and surjection numbers from the pole of \((2-e^z)^{-1}\). Use the argument
  principle (`06.01.13`) to *locate* the dominant pole.
- **prereqs:** `40.08.01`, `40.08.02`, `06.01.02`, `06.01.03`, `06.01.05`, `06.01.27`
- **chapter:** `analytic-combinatorics-asymptotics` · **section:** `combinatorics`
- **source_book:** `flajolet-sedgewick` · **source_curriculum:** `combinatorics`

### 40.08.04 — Singularity analysis: the standard-function scale and the Flajolet–Odlyzko transfer theorems
- **spec:** The treatment of **non-polar (algebraic-logarithmic) singularities**, where partial
  fractions fail. Develop the **standard singularity scale** \((1-z)^{-\alpha}\) and its coefficient
  asymptotics \([z^n](1-z)^{-\alpha}\sim n^{\alpha-1}/\Gamma(\alpha)\) (cross-ref `06.01.15` for
  \(\Gamma\)), with logarithmic refinements \((1-z)^{-\alpha}(\tfrac1z\log\tfrac1{1-z})^\beta\).
  State and prove the **Flajolet–Odlyzko transfer theorems**: on a **\(\Delta\)-domain** (a disk
  with a notch removed at the singularity \(z=1\), requiring analytic continuation `06.01.04`),
  **big-O and little-o transfer** — if \(f(z)=O((1-z)^{-\alpha})\) as \(z\to1\) in \(\Delta\), then
  \([z^n]f=O(n^{\alpha-1})\) — and the **singularity-analysis asymptotic transfer** turning a local
  expansion of \(f\) near its singularity into an asymptotic expansion of \([z^n]f\) term by term.
  Contrast with the saddle-point method (40.08.06): singularity analysis is the tool when the
  dominant singularity is **isolated and of moderate growth**.
- **prereqs:** `40.08.03`, `06.01.04`, `06.01.13`, `06.01.15`
- **chapter:** `analytic-combinatorics-asymptotics` · **section:** `combinatorics`
- **source_book:** `flajolet-sedgewick` · **source_curriculum:** `combinatorics`

### 40.08.05 — Asymptotics of tree families: square-root singularities and the tree-function
- **spec:** **Singularity analysis applied to simple varieties of trees.** A tree class satisfying a
  smooth functional equation \(Y(z)=z\,\phi(Y(z))\) (the **tree-function** template, e.g.
  \(T=ze^{T}\) for labelled rooted trees, \(B=z(1+B)^2/\dots\) for binary trees) generically has a
  **square-root singularity**: \(Y(z)=\tau-c\sqrt{1-z/\rho}+\dots\) at the dominant singularity
  \(\rho=1/\phi'(\tau)\) determined by the **smooth implicit-function / characteristic-system**
  condition \(\phi(\tau)=\tau\phi'(\tau)\). Singularity analysis (40.08.04) then gives the universal
  \([z^n]Y\sim C\,\rho^{-n}n^{-3/2}\) tree-counting law. Worked: Catalan/binary-tree
  \(n^{-3/2}4^n\), labelled rooted trees / **Cayley** \(n^{n-1}\) recovered analytically, and the
  number of **2-3 / general plane trees**. **Coordinate note:** the formal **Lagrange inversion
  theorem** for extracting coefficients of \(Y=z\phi(Y)\) is owned by the **Stanley EC2 trees unit
  in chapter 40.03** (`symmetric-functions-rsk`/trees) — this unit *cites* Lagrange inversion for
  the exact coefficients and scopes itself to the **singularity-analysis asymptotics**. **Partition
  asymptotics are NOT here** — those are the modular/circle-method case owned by `21.16.02`.
- **prereqs:** `40.08.04`, `40.08.01`, `06.01.13` (implicit-function / argument-principle locating)
- **chapter:** `analytic-combinatorics-asymptotics` · **section:** `combinatorics`
- **source_book:** `flajolet-sedgewick` · **source_curriculum:** `combinatorics`

### 40.08.06 — The saddle-point method for entire and rapidly-growing generating functions
- **spec:** Coefficient asymptotics when the GF is **entire** (no finite dominant singularity, so
  40.08.03–05 do not apply) or grows fast at its singularity. Develop the **saddle-point method**
  for \([z^n]f=\frac1{2\pi i}\oint f(z)z^{-n-1}dz\): deform the contour to a circle \(|z|=r_n\)
  through the **saddle point** of \(h(z)=\log f(z)-(n+1)\log z\) given by the saddle-point equation
  \(z f'(z)/f(z)=n+1\), and obtain the **saddle-point bound** and the **Gaussian-approximation**
  asymptotic \([z^n]f\sim f(r_n)\,r_n^{-n}/\sqrt{2\pi\,h''(r_n)}\). Present the method as the
  contour-integral cousin of the Laplace method already used for Stirling (cross-ref `06.01.15`).
  Applications: **involutions** \([z^n]e^{z+z^2/2}\), **set partitions / Bell numbers**
  \(B_n\sim n!\,[z^n]e^{e^z-1}\) (the **Moser–Wyman / saddle-point estimate**, with \(r_n\) the
  positive root of \(re^r=n\) — i.e. the tree-function value), and the number of **involutions** and
  **fragmented permutations**. Note the **partition** case \(\prod(1-z^k)^{-1}\) has a saddle-point
  flavour but the *sharp* result is the modular circle method (defer to `21.16.02`).
- **prereqs:** `40.08.03`, `06.01.02`, `06.01.15`, `06.01.17`
- **chapter:** `analytic-combinatorics-asymptotics` · **section:** `combinatorics`
- **source_book:** `flajolet-sedgewick` · **source_curriculum:** `combinatorics`

### 40.08.07 — Limit laws in combinatorics: the quasi-powers theorem and Gaussian limit distributions
- **spec:** From counting to **distributional** asymptotics: the limiting distribution of a
  combinatorial **parameter** (number of parts, cycles, components, leaves, etc.) carried by a
  **bivariate generating function** \(F(z,u)=\sum_{n,k} f_{n,k}u^k z^n\), where \(u\) marks the
  parameter. State and prove **Hwang's quasi-powers theorem**: if the normalised PGF behaves like a
  large power, \(\mathbb E[u^{X_n}]=\frac{[z^n]F(z,u)}{[z^n]F(z,1)}\sim A(u)\,B(u)^{\lambda_n}\) with
  \(\lambda_n\to\infty\) and suitable analytic regularity, then \(X_n\) is **asymptotically
  Gaussian** with computable mean \(\sim\lambda_n B'(1)/B(1)\) and variance, with a Berry–Esseen-type
  speed of convergence. Treat the two standard schemas producing quasi-powers: the **meromorphic /
  supercritical-sequence** schema (movable dominant pole \(\rho(u)\)) and the **singularity-analysis
  perturbation** schema (movable algebraic singularity \(\rho(u)\)). Applications: number of cycles
  in a random permutation (**Goncharov / Erdős–Turán**, Gaussian with mean \(\log n\)), number of
  parts in compositions, number of components in labelled set constructions. **Cross-ref** the
  probability-spine CLT / characteristic-function machinery (`37.*`) as the analytic engine, not a
  duplicate; this unit supplies the *combinatorial-GF* route to Gaussian laws.
- **prereqs:** `40.08.03`, `40.08.04`, `40.08.06`
- **chapter:** `analytic-combinatorics-asymptotics` · **section:** `combinatorics`
- **source_book:** `flajolet-sedgewick` · **source_curriculum:** `combinatorics`

---

## COVERED (not gaps) — cross-referenced, not re-proved

- **Cauchy's integral / coefficient formula** — `06.01.02`. Reused as the analytic bridge for
  coefficient extraction (40.08.03/06); not re-proposed.
- **Residue theorem and meromorphic functions / partial fractions** — `06.01.03`, `06.01.05`. The
  meromorphic-coefficient asymptotics (40.08.03) *apply* these; the complex-analysis theorems are not
  re-derived.
- **Argument principle / Rouché** — `06.01.13`. Used to *locate* dominant singularities; owned by
  complex analysis.
- **Analytic continuation / \(\Delta\)-domains** — `06.01.04`. The continuation past the dominant
  singularity that singularity analysis requires; cross-ref, not re-proved.
- **Gamma function, Stirling's formula via the Laplace method** — `06.01.15`. Supplies the
  \(1/\Gamma(\alpha)\) factor of the standard scale (40.08.04) and the Laplace-method template the
  saddle-point method (40.08.06) generalises. Not re-proposed.
- **Power / Laurent series, radius of convergence = distance to nearest singularity** — `06.01.27`.
  The elementary fact underlying the exponential-growth formula; cross-ref.
- **Weierstrass factorisation / entire-function growth** — `06.01.17`. Background for the
  entire-GF saddle-point chapter; cross-ref.
- **Partition function asymptotics \(p(n)\sim e^{\pi\sqrt{2n/3}}/(4n\sqrt3)\) and the
  Hardy–Ramanujan–Rademacher circle method** — `21.16.02` (Spine 3); **pentagonal number theorem /
  Euler product** — `21.16.01`. The analytic-combinatorics units defer the *sharp partition*
  asymptotics to these; the Euler product \(\prod(1-z^k)^{-1}\) appears in 40.08.01 only as a
  symbolic-method specification, with the deep asymptotics pointed to `21.16`.
- **Formal generating-function algebra (OGF/EGF as formal series, basic coefficient extraction)** —
  **co-produced Stanley EC1 units, chapter `40.01.*`** (`enumeration-generating-functions`). The
  analytic units take these as given; the *formal* side is not re-derived here.
- **Lagrange inversion theorem (formal coefficient extraction for \(Y=z\phi(Y)\))** — to be owned by
  the **Stanley EC2 trees unit, chapter `40.03`**. 40.08.05 cites it and supplies only the
  *singularity-analysis asymptotics*. (Coordinate flag for the EC2 audit.)
- **Probabilistic central limit theorem / characteristic functions / Berry–Esseen** — Spine 4
  probability `37.*`. The quasi-powers unit (40.08.07) cross-refs these as the engine behind
  combinatorial Gaussian limit laws; not duplicated.

## OUT OF SCOPE

- **Multivariable analytic combinatorics (ACSV: Pemantle–Wilson, the diagonal / multivariate
  saddle point)** — Flajolet–Sedgewick treat this only lightly (the bivariate marking in 40.08.07 is
  the boundary). The full multivariate-singularity machinery is a separate research monograph
  (Pemantle–Wilson) and is not proposed from this source.
- **The full Part B "Complex Asymptotics" apparatus restated as complex analysis** (Cauchy theorem,
  residues, analytic continuation as *theory*) — already owned by `06.01.*`; cited as prereqs, not
  re-spun.
- **Tauberian theorems (Hardy–Littlewood / Karamata) as a standalone development** — Flajolet–
  Sedgewick mention them as an alternative to singularity analysis but make singularity analysis the
  primary tool. A Tauberian unit, if wanted, is better sourced from an analytic-number-theory or
  real-analysis text; not manufactured here.
- **Mellin-transform asymptotics (the harmonic-sum / Mellin–Perron apparatus, Flajolet–Sedgewick
  Appendix B / the divide-and-conquer recurrence asymptotics)** — a self-contained transform-analysis
  topic with its natural home in analysis / analytic number theory (Mellin transform), not the
  combinatorial-asymptotics core; deferred, not proposed, to avoid a marginal unit.

---

## RETURN SUMMARY
- **Genuine gaps:** 7 (`40.08.01` … `40.08.07`)
- **COVERED:** 11 topics (chiefly `06.01.*` complex-analysis anchors + `21.16.*` partition
  asymptotics + co-produced `40.01.*` EC1 GFs)
- **OUT OF SCOPE:** 4
- **Gap file:** `plans/expansion/combinatorics/_audit/flajolet-sedgewick.gaps.md`
