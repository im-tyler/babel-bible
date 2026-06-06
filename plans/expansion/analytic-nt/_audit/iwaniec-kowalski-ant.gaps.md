# Audit: Iwaniec-Kowalski — *Analytic Number Theory* (AMS Colloquium 53)

`source_book: iwaniec-kowalski-ant`
`source_curriculum: analytic-nt`
`section: number-theory` (extends `content/21-number-theory/`)

**Verdict:** The modern analytic toolbox is genuinely near-absent. Chapters `11`–`16`
(`dirichlet-series-arithmetic-functions` … `partitions-circle-method`) exist as **empty
scaffold directories** — zero shipped units. The pre-existing NT corpus stops at the
*structural* level: the zeta / Dirichlet / Dedekind-Hecke-Artin $L$-functions
(`21.03.01-04`), modular forms and Hecke theory (`21.04.01-05`), Galois reps / Langlands
(`21.05`, `21.10`). The analytic *machinery* I-K is built around — exponential sums (van
der Corput, Weyl, Vinogradov), Kloosterman sums and the Weil bound, the spectral
(Kuznetsov/Petersson) side, the large/combinatorial sieves, and the general
approximate-functional-equation method — has **no theorem-level unit anywhere**.

**8 genuine gaps**, owning chapter `15-exponential-sums` (this audit's primary lane),
plus the Kloosterman/spectral and combinatorial-sieve side of `14-sieve-methods-large-sieve`
and one general-$L$-function unit in `13-dirichlet-l-functions-characters`.

## Method
Each I-K headline tool was verified by filename + body grep across the live corpus
(`exponential sum`, `weyl sum`, `van der corput`, `vinogradov`, `kloosterman`, `salie`,
`gauss sum`, `poisson summation`, `large sieve`, `selberg sieve`, `brun`,
`bombieri-vinogradov`, `approximate functional equation`, `subconvexity`,
`kuznetsov`/`petersson`, `weil bound`/`character sum`). Every hit resolved to either an
**incidental cross-reference** or a **different (structural/elementary) result**:

- `poisson summation` appears only as a *tool used in passing* inside the theta-symmetry
  functional-equation derivations (`02.10.04` Fourier transform, `06.01.31` Jacobi theta,
  `21.03.01`/`.02`/`.03`, `21.04.04`) — never stated as the lattice-sum / dual-lattice
  theorem in its own right, and never with the truncated-sum / Voronoï application.
- `gauss sum` appears only in the *quadratic* context — quadratic reciprocity via the
  quadratic Gauss sum (`21.02.02`, `21.01.06/07`), finite-field squares (`21.02.01`), and
  the root-number factor of a Dirichlet $L$-function (`21.03.02`). The general theory of
  Gauss/Jacobi/Kloosterman/Salié sums and their sharp ($\sqrt q$ / Weil) bounds is absent.
- `van der corput` is covered **as analysis** (`02.20.05` oscillatory integrals /
  stationary phase) but only for *integrals*; the A- and B-process **exponential-sum**
  estimates and the resulting subconvexity for $\zeta(1/2+it)$ are not a unit.
- the `large sieve`/`selberg sieve`/`brun`/`bombieri-vinogradov` greps return **only
  false positives** (the English word "sieve", "set-aside", Eratosthenes-as-name) — no
  sieve-method unit exists.
- `04.03.08` (étale cohomology) and `21.06` host the Weil-conjectures *framework*, but the
  concrete **Weil bound for one-variable character/Kloosterman sums** ($|S(a,b;p)|\le
  2\sqrt p$) is never extracted at the analytic-NT tier.

**Coordination with parallel audits (per dispatch).**
- **Large sieve inequality** ($\sum_{q\le Q}\sum_{a}^{*}|\sum_n a_n e(an/q)|^2 \le (N+Q^2)\|a\|^2$)
  and its duality / arithmetic (Bombieri-Vinogradov) consequences are **ceded to the
  Montgomery-Vaughan audit** (`21.14`). This audit takes the **combinatorial/Selberg sieve**
  (`21.14.01`) and the **Kloosterman + spectral (Petersson/Kuznetsov)** side (`21.14.05`),
  which are I-K's signature contributions; both *forward-reference* the MV large-sieve unit
  as a prereq (flagged DEDUP below).
- **PNT / zero-free region / explicit formula** → Davenport audit (`21.12`).
  **Perron / Dirichlet-series mean values / Dirichlet hyperbola** → Montgomery-Vaughan +
  Apostol (`21.11`). **Circle method / partitions** → Apostol (`21.16`). This audit does
  **not** propose those; the AFE unit below (`21.13.05`) is the *general $L$-function*
  analytic-continuation/AFE machinery, complementary to Davenport's concrete zeta/Dirichlet
  treatment (flagged DEDUP).

Forward-prereferenced sibling-spine ids (`21.11.01`, `21.12.01`, `21.14.02` large sieve)
are planned units in the Davenport / Montgomery-Vaughan / Apostol audits of this same
analytic-nt batch; all `21.0x.*`, `02.*`, `06.01.*` prereqs are verified-existing files.

---

## GENUINE GAPS

### 21.15.01 — Poisson summation and the dual-lattice / Voronoï method
- **id:** `21.15.01`
- **title:** Poisson summation, the truncated/smoothed sum, and Voronoï summation
- **spec:** The Poisson summation formula $\sum_{n\in\mathbb{Z}}f(n)=\sum_{m\in\mathbb{Z}}\hat f(m)$ stated as a theorem (Schwartz / suitable-decay hypotheses, convergence, the $\mathbb{Z}^d$ / general-lattice and dual-lattice version $\sum_{n\in\Lambda}f(n)=\mathrm{covol}(\Lambda)^{-1}\sum_{m\in\Lambda^*}\hat f(m)$); the smoothed / truncated form used to convert an incomplete arithmetic sum $\sum_{n\le N}f(n)$ into a short dual sum; statement of **Voronoï summation** for $\sum_n d(n)f(n)$ (and $a_f(n)$ for a modular form) as the arithmetic refinement, with the Hankel/Bessel kernel. The summation-formula engine I-K Ch. 4 builds on, promoted from the in-passing role it plays in `21.03.01`/`21.04.04`.
- **prereqs:** `02.10.04` (Fourier transform on $\mathbb{R}^n$, Plancherel), `06.01.31` (Jacobi theta / lattice sums), `02.03.03` (absolute convergence of series)
- **chapter:** `15-exponential-sums` — `section: number-theory`, `chapter: exponential-sums`
- **source_book:** `iwaniec-kowalski-ant` · **source_curriculum:** `analytic-nt`

### 21.15.02 — Weyl sums, Weyl differencing, and equidistribution
- **id:** `21.15.02`
- **title:** Weyl's exponential sums, the Weyl differencing inequality, and equidistribution mod 1
- **spec:** Exponential sums $S=\sum_{n\le N} e(P(n))$ for a real polynomial $P$; **Weyl differencing** $|S|^2\le N + 2\sum_{h<N}|\sum_n e(P(n+h)-P(n))|$ iterated to linearize the phase; the **Weyl criterion** (a sequence $(x_n)$ is equidistributed mod 1 iff $\sum_{n\le N}e(kx_n)=o(N)$ for every $k\neq0$); equidistribution of $(\alpha n^k)$ for irrational $\alpha$ (Weyl's theorem) and the resulting $N^{1-2^{1-k}+\varepsilon}$-type bound. The exponential-sum half that complements the integral van der Corput unit `02.20.05`.
- **prereqs:** `21.15.01` (Poisson summation / completing sums), `21.01.05` (additive characters / $\mathbb{Z}/q\mathbb{Z}$ structure), `02.03.03` (series estimates)
- **chapter:** `15-exponential-sums` — `section: number-theory`, `chapter: exponential-sums`
- **source_book:** `iwaniec-kowalski-ant` · **source_curriculum:** `analytic-nt`

### 21.15.03 — Van der Corput's method for exponential sums (A- and B-processes)
- **id:** `21.15.03`
- **title:** The van der Corput method: the A-process, B-process, and the subconvexity bound for $\zeta(\tfrac12+it)$
- **spec:** Estimating $\sum_{a<n\le b} e(f(n))$ for a smooth $f$ with controlled derivatives; the **A-process** (Weyl differencing / shift) and the **B-process** (Poisson summation + stationary phase, producing the dual sum $\sum e(f(n_\nu)-n_\nu x_\nu)/\sqrt{f''}$); van der Corput's first- and second-derivative tests for sums (the sum-analogue of `02.20.05`); the exponent-pair formalism; application giving the classical convexity-breaking bound $\zeta(\tfrac12+it)\ll t^{1/6+\varepsilon}$. I-K Ch. 8.
- **prereqs:** `21.15.02` (Weyl differencing), `02.20.05` (stationary phase / van der Corput for integrals), `21.03.01` (Riemann zeta, the application target)
- **chapter:** `15-exponential-sums` — `section: number-theory`, `chapter: exponential-sums`
- **source_book:** `iwaniec-kowalski-ant` · **source_curriculum:** `analytic-nt`

### 21.15.04 — Gauss, Jacobi, and Kloosterman sums; the Weil bound
- **id:** `21.15.04`
- **title:** Complete character sums: Gauss, Jacobi, Kloosterman, and Salié sums and the Weil bound
- **spec:** Complete additive/multiplicative character sums mod $p$: the **Gauss sum** $\tau(\chi)=\sum_x\chi(x)e(x/p)$ with $|\tau(\chi)|=\sqrt p$ (general $\chi$, beyond the quadratic case of `21.02.02`); **Jacobi sums** and their relation to Gauss sums and point counts on diagonal curves; the **Kloosterman sum** $S(a,b;p)=\sum_{x\bmod p}^{*} e((ax+b\bar x)/p)$, its twisted multiplicativity, and the **Weil bound** $|S(a,b;p)|\le 2\sqrt p$ (Riemann hypothesis for the associated curve); the **Salié sum** and its elementary evaluation. I-K Ch. 11 (Sums over finite fields) and Ch. 12 — the arithmetic input to the spectral and sieve machinery.
- **prereqs:** `21.02.01` (finite fields $\mathbb{F}_q$, characters and squares), `21.01.06` (Legendre symbol / multiplicative characters), `21.03.02` (Dirichlet characters / root number $\tau(\chi)$ context)
- **chapter:** `15-exponential-sums` — `section: number-theory`, `chapter: exponential-sums`
- **source_book:** `iwaniec-kowalski-ant` · **source_curriculum:** `analytic-nt`
- **DEDUP:** the *quadratic* Gauss sum sign/modulus is in `21.02.02` (used for QR); this unit is the **general $\chi$ + Kloosterman/Weil-bound** theory and cites `21.02.02` only as the quadratic special case, no overlap.

### 21.15.05 — Vinogradov's mean value theorem
- **id:** `21.15.05`
- **title:** Vinogradov's mean value theorem and bounds for long Weyl sums
- **spec:** The mean value $J_{s,k}(N)=\#\{$solutions of $\sum_{i\le s}(n_i^j-m_i^j)=0,\ 1\le j\le k\}$; statement of the (sharp, post-Bourgain-Demeter-Guth / Wooley) bound $J_{s,k}(N)\ll N^{s+\varepsilon}+N^{2s-k(k+1)/2+\varepsilon}$; its use to estimate Weyl sums $\sum e(\alpha_1 n+\dots+\alpha_k n^k)$ uniformly and to give the Vinogradov zero-free region for $\zeta$ near $\sigma=1$ and Waring-problem bounds. I-K Ch. 8.5; kept at statement-plus-consequences depth (the decoupling proof is cross-referenced, not reproved).
- **prereqs:** `21.15.02` (Weyl sums / differencing), `21.15.03` (van der Corput exponent-pair context), `21.01.02` (primes / counting context for the zero-free-region application)
- **chapter:** `15-exponential-sums` — `section: number-theory`, `chapter: exponential-sums`
- **source_book:** `iwaniec-kowalski-ant` · **source_curriculum:** `analytic-nt`

### 21.14.01 — The combinatorial and Selberg sieves
- **id:** `21.14.01`
- **title:** Sieve methods: Eratosthenes-Legendre, Brun's combinatorial sieve, and the Selberg $\Lambda^2$ sieve
- **spec:** The sieve problem $S(\mathcal{A},\mathcal{P},z)=\#\{a\in\mathcal{A}: (a,P(z))=1\}$; inclusion-exclusion (Legendre) and the **parity / fundamental lemma** obstruction; **Brun's pure and combinatorial sieve** (truncated inclusion-exclusion) giving Brun's theorem ($\sum 1/p$ over twin primes converges) and the bounded-gaps-shaped upper bounds; the **Selberg upper-bound sieve** via the optimized quadratic form $\big(\sum_{d\mid n}\lambda_d\big)^2$ with $\lambda_1=1$, the diagonalization, and the main term $X/\sum_{d<z}\mu^2(d)/g(d)$; the Brun-Titchmarsh inequality $\pi(x;q,a)\ll x/(\varphi(q)\log(x/q))$. I-K Ch. 6. (The **large sieve inequality** itself is ceded to Montgomery-Vaughan, `21.14.02`.)
- **prereqs:** `21.01.04` (Euler/Möbius arithmetic, $\mu$, multiplicativity), `21.01.02` (primes / counting), `21.11.01` (Dirichlet-series / mean-value substrate — planned MV/Apostol unit)
- **chapter:** `14-sieve-methods-large-sieve` — `section: number-theory`, `chapter: sieve-methods-large-sieve`
- **source_book:** `iwaniec-kowalski-ant` · **source_curriculum:** `analytic-nt`
- **DEDUP:** large-sieve inequality + Bombieri-Vinogradov are the Montgomery-Vaughan audit's `21.14.02`/`21.14.03`; this unit is the **combinatorial/Selberg** half only and forward-references `21.14.02`. Flag for the integrator if MV places a combinatorial-sieve unit too.

### 21.14.05 — Kloosterman sums, the Petersson/Kuznetsov formula, and sums of Kloosterman sums
- **id:** `21.14.05`
- **title:** The spectral approach: Petersson/Kuznetsov trace formulas and cancellation in sums of Kloosterman sums
- **spec:** The **Petersson formula** (Fourier coefficients of a basis of holomorphic cusp forms $\leftrightarrow$ diagonal $\delta_{mn}$ + a Kloosterman-sum/Bessel term) and the **Kuznetsov formula** (its Maass-form / spectral analogue, with the continuous spectrum / Eisenstein contribution); the resulting **cancellation in sums of Kloosterman sums** $\sum_{c\le X}S(m,n;c)/c \ll X^{1/6+\varepsilon}$ (Kuznetsov, beating the Weil-bound-times-trivial bound); statement of the Selberg eigenvalue conjecture $\lambda_1\ge 1/4$ and its analytic role. I-K Ch. 14–16, the spectral heart of the book — kept at trace-formula-statement-plus-application depth (full spectral decomposition of $L^2(\Gamma\backslash\mathbb{H})$ deferred, see OUT OF SCOPE).
- **prereqs:** `21.15.04` (Kloosterman sums / Weil bound), `21.04.02` (Hecke operators / cusp-form Fourier coefficients), `21.04.01` (modular forms on $\mathrm{SL}_2(\mathbb{Z})$)
- **chapter:** `14-sieve-methods-large-sieve` — `section: number-theory`, `chapter: sieve-methods-large-sieve`
- **source_book:** `iwaniec-kowalski-ant` · **source_curriculum:** `analytic-nt`
- **DEDUP:** no overlap with MV large-sieve units; this is the Kloosterman/spectral lane explicitly assigned to this audit.

### 21.13.05 — The approximate functional equation and the analytic theory of general L-functions
- **id:** `21.13.05`
- **title:** The approximate functional equation, gamma factors, and analytic conductor for general $L$-functions
- **spec:** The axiomatic **analytic $L$-function** (Euler product, Dirichlet series, completed $\Lambda(s)=Q^s\gamma(s)L(s)$, functional equation $\Lambda(s)=\varepsilon\Lambda(1-s)$ with root number $\varepsilon$ and gamma factor $\gamma$); the **analytic conductor** $\mathfrak{q}(s)$; derivation of the **approximate functional equation** $L(s)=\sum_{n}\frac{a_n}{n^s}V_s(n/\sqrt Q)+\varepsilon\,(\text{dual sum})$ via a contour shift against a smooth weight $V$, expressing $L$ on the critical line by two sums of length $\sim\sqrt{\mathfrak q}$; the **convexity bound** $L(\tfrac12+it)\ll \mathfrak q^{1/4+\varepsilon}$ and the *statement* of the subconvexity problem. I-K Ch. 5. The general-$L$-function analytic-machinery unit the structural `21.03.*` family lacks.
- **prereqs:** `21.03.01` (Riemann zeta, functional equation), `21.03.02` (Dirichlet $L$-functions, root number), `06.01.15` (Gamma function / Stirling / Mellin), `21.15.01` (Poisson/Mellin smoothing context)
- **chapter:** `13-dirichlet-l-functions-characters` — `section: number-theory`, `chapter: dirichlet-l-functions-characters`
- **source_book:** `iwaniec-kowalski-ant` · **source_curriculum:** `analytic-nt`
- **DEDUP:** Davenport's `21.13.*` units give the concrete Dirichlet-$L$ functional equation / characters; this unit is the **general axiomatic AFE + analytic conductor + convexity** layer (I-K Ch. 5), one level up. Flag for integrator to confirm Davenport does not also claim a `21.13.05` slot.

---

## COVERED (not gaps)

- **Riemann zeta: definition, analytic continuation, functional equation, Euler product, Hadamard product, explicit formula, RH statement** — `21.03.01` (full master-tier unit, Riemann/Edwards/Titchmarsh/Iwaniec-Kowalski anchored). The AAF/conductor *generalization* is the gap `21.13.05`.
- **Dirichlet $L$-functions, characters, functional equation, root number $\tau(\chi)$, non-vanishing at $s=1$** — `21.03.02`.
- **Dedekind / Hecke / Artin $L$-functions; Dirichlet density / Chebotarev** — `21.03.03`, `21.03.04`.
- **Modular forms on $\mathrm{SL}_2(\mathbb{Z})$, Hecke operators / algebra, Eichler-Shimura, theta series, Ramanujan $\tau$ / Deligne bound** — `21.04.01-05`. (Prereqs for the spectral unit `21.14.05`.)
- **Poisson summation as a tool** — used inside `02.10.04`, `06.01.31`, `21.03.01/.02/.03`, `21.04.04`; never the standalone lattice theorem → promoted in `21.15.01`.
- **Van der Corput / stationary phase for oscillatory integrals** — `02.20.05`; the *exponential-sum* A/B-process tests are the distinct gap `21.15.03`.
- **Quadratic Gauss sum (sign, $|\tau|=\sqrt p$) for quadratic reciprocity** — `21.02.02`, `21.01.06/07`, `21.02.01`; the general-character + Kloosterman/Weil-bound theory is `21.15.04`.
- **Fourier transform / Plancherel; Fourier series / Riemann-Lebesgue; Gamma function / Mellin** — `02.10.04`, `02.10.01`, `06.01.15` (analysis substrate / prereqs).
- **Étale cohomology / Weil-conjectures framework / Sato-Tate** — `04.03.08`, `21.06.02`; the concrete one-variable Weil bound $|S(a,b;p)|\le 2\sqrt p$ extracted at NT-tier is part of `21.15.04`.
- **Prime number theorem, zero-free region, explicit formula** — *not present yet* but **ceded to the Davenport audit (`21.12`)**; not re-proposed here.
- **Large sieve inequality, Bombieri-Vinogradov, Dirichlet mean values / Perron / hyperbola, circle method / partitions** — *not present yet* but **ceded to Montgomery-Vaughan / Apostol audits (`21.11`, `21.14.02-03`, `21.16`)**; this audit forward-references them.

## OUT OF SCOPE

- **Full spectral decomposition of $L^2(\Gamma\backslash\mathbb{H})$ / theory of Maass forms / Selberg trace formula at proof depth** — a several-hundred-page automorphic-analysis apparatus; `21.14.05` delivers the Petersson/Kuznetsov **formula + its Kloosterman-cancellation payoff** at statement level, which is the right introductory tier. The full spectral theory belongs to a future automorphic-forms spine.
- **Subconvexity / moment machinery (Burgess, Conrey-Iwaniec, the spectral large sieve, amplification, $t$-aspect / level-aspect subconvexity)** — research-monograph apparatus (I-K Ch. 7, 13, 26+); `21.13.05` states the convexity bound and *names* the subconvexity problem; `21.15.03` gives one classical van-der-Corput subconvex bound for $\zeta$. The general program is deferred.
- **Moments of $\zeta$ / $L$-functions (fourth moment, CFKRS conjectures, random-matrix predictions)** — conjectural/research tier; the RMT side already lives in `37.08.*` (Montgomery pair-correlation is a one-line aside in `21.03.01`). Not a clean theorem-level unit.
- **Automorphic $L$-functions / Rankin-Selberg / $\mathrm{GL}_n$ analytic theory (I-K Ch. 5.12, 13)** — overlaps the existing Langlands survey `21.10.01` and the structural $L$-function block; the *general* analytic apparatus (AFE, conductor) is captured by `21.13.05` without committing to the $\mathrm{GL}_n$ machinery.
- **Bourgain-Demeter-Guth decoupling proof of Vinogradov's mean value** — the harmonic-analysis proof is a major separate development; `21.15.05` states the sharp bound and its NT consequences and cross-references the decoupling proof rather than reproducing it.

---

## Counts
- **Genuine gaps: 8** — `21.15.01-05` (exponential sums, owned lane), `21.14.01` (combinatorial/Selberg sieve), `21.14.05` (Kloosterman/spectral), `21.13.05` (general-$L$ AFE).
- **COVERED-verified topics: 10** (zeta `21.03.01`, Dirichlet-$L$ `21.03.02`, Dedekind/Hecke/Artin + density `21.03.03/04`, modular/Hecke `21.04.01-05`, Poisson-as-tool, van-der-Corput-integral `02.20.05`, quadratic Gauss sum `21.02.02`, Fourier/Gamma substrate, étale/Weil framework, PNT/large-sieve/circle-method ceded to siblings).
- **OUT OF SCOPE: 5** (full spectral/Maass theory, subconvexity-moment machinery, $\zeta$ moments/RMT, $\mathrm{GL}_n$ automorphic analytic theory, decoupling proof of Vinogradov).
- **DEDUP flags: 4** — `21.15.04` vs `21.02.02` (quadratic special case only); `21.14.01` vs MV large sieve `21.14.02`; `21.14.05` (owned, no overlap); `21.13.05` vs Davenport `21.13.*` (one level up — confirm slot).

**Gap file:** `plans/expansion/analytic-nt/_audit/iwaniec-kowalski-ant.gaps.md`
