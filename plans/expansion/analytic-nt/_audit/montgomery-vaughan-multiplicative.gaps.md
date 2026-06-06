# Audit — Montgomery & Vaughan, *Multiplicative Number Theory I: Classical Theory*

Spine: `analytic-nt` · extends `content/21-number-theory` · section `number-theory` · field `number-theory`.
Audited 2026-06-05. Method: list MV headline theorems, grep corpus, default COVERED.

Landing chapters per orchestration brief:
- **21.11** `dirichlet-series-arithmetic-functions` — only the *analytic mean-value* side proposed here; elementary arithmetic-function / Dirichlet-convolution theory is **deferred to the parallel Apostol audit** (dedup flags below).
- **21.14** `sieve-methods-large-sieve` — large sieve, Bombieri-Vinogradov, mean values of multiplicative functions. MV's core; entirely absent from corpus.

Coordination state:
- Parallel **Davenport** audit owns 21.12 (PNT) + 21.13 (Dirichlet L / characters). I do NOT propose PNT or character-orthogonality units (MV Ch. 4, 6, 9 overlap → deferred to Davenport; see OUT OF SCOPE).
- Parallel **Apostol** audit owns 21.11 (arithmetic functions, Euler products, Möbius/Mertens/Abel summation) + 21.16 (partitions). For 21.11 I claim only the analytic summatory-function / Perron-Mellin / Selberg-Delange material and flag the convolution/Mertens prerequisites as Apostol-owned.

Existing relevant units (verified by grep + read):
- `21.03.01` Riemann zeta — Euler product, Dirichlet series convergence, functional equation, non-vanishing on Re=1. **Covers** Euler-product / Dirichlet-series *foundations*.
- `21.03.02` Dirichlet L-functions — characters, orthogonality relations, $L(1,\chi)\neq0$, functional equation/Gauss sum.
- `21.03.04` Dirichlet density — $\sum_p p^{-s}\sim\log\frac1{s-1}$, density-$1/\varphi(m)$ for primes in AP.
- `21.01.02` primes/FTA — Chebyshev bounds + Mertens theorems **mentioned only as references/Master asides**, no standalone treatment.
- No unit anywhere on: large sieve, Bombieri-Vinogradov, mean values of multiplicative functions (Halász/Wirsing), Selberg-Delange, Perron/Mellin inversion as an NT tool, Dirichlet hyperbola / summatory functions. (grep counts: large sieve 1 incidental, bombieri-vinogradov 0 dedicated, halász 0, wirsing 0, selberg-delange 0, brun-titchmarsh 0, turán-kubilius 0.)

---

## GENUINE GAPS

### Gap 1
- **id**: `21.11.03`
- **title**: Summatory functions and the Dirichlet hyperbola method
- **spec**: Averages of arithmetic functions via partial (Abel) summation and the Dirichlet hyperbola method. Derive $\sum_{n\le x} d(n) = x\log x + (2\gamma-1)x + O(\sqrt x)$ (Dirichlet divisor problem, classical error term), $\sum_{n\le x}\sigma(n)=\frac{\pi^2}{12}x^2+O(x\log x)$, $\sum_{n\le x}\varphi(n)=\frac{3}{\pi^2}x^2+O(x\log x)$, and $\sum_{n\le x}\mu(n)^2=\frac{6}{\pi^2}x+O(\sqrt x)$ (squarefree density). State the divisor-problem error exponent $\Theta$ and the trivial vs. Voronoi $O(x^{1/3})$ improvement as a Master aside. MV Ch. 2 §2.1-2.2. **The analytic averaging engine**; distinct from the elementary convolution algebra (Apostol-owned).
- **prereqs**: `21.01.02` (primes/FTA, arithmetic functions intro), `21.03.01` (Dirichlet series), `02.03.03` (series convergence), `02.04.06` (improper integrals / comparison)
- **chapter**: dirichlet-series-arithmetic-functions
- **section**: number-theory
- **source_book**: montgomery-vaughan-multiplicative
- **source_curriculum**: analytic-nt
- **dedup**: ⚠️ Apostol covers Abel/partial summation + Dirichlet convolution *as the algebraic toolkit*. This unit consumes those as prereqs and is the **analytic** estimate of summatory functions. If Apostol proposes a "summatory functions / average orders" unit at 21.11, MERGE into this id and keep the hyperbola-method + error-term emphasis. Coordinate id assignment (Apostol should take 21.11.01-02 for convolution/Möbius/Mertens; this is 21.11.03).

### Gap 2
- **id**: `21.11.04`
- **title**: Perron's formula and Mellin inversion for Dirichlet series
- **spec**: The analytic bridge from a Dirichlet series $F(s)=\sum a_n n^{-s}$ to its coefficient sums. Perron's formula $\sum_{n\le x}' a_n = \frac{1}{2\pi i}\int_{c-iT}^{c+iT} F(s)\frac{x^s}{s}\,ds + (\text{error})$ with the effective truncation error term; the smoothed/Mellin-transform variant; analytic continuation and growth bounds (convex bounds, Phragmén-Lindelöf for vertical strips) as the inputs that turn Perron into asymptotics. Worked extraction of $\psi(x)\sim x$ shape (statement; the full PNT contour shift is **Davenport-owned at 21.12**). MV Ch. 5 §5.1. Grep: `perron` 21 incidental hits, `mellin` 18 — none a dedicated NT inversion unit.
- **prereqs**: `21.03.01` (zeta / Dirichlet series), `06.01.16` (zeta, complex-analytic), `06.01.22` (Phragmén-Lindelöf), `02.10.04` (Fourier transform / Plancherel — Mellin analogue), `06.01.04` (analytic continuation)
- **chapter**: dirichlet-series-arithmetic-functions
- **section**: number-theory
- **source_book**: montgomery-vaughan-multiplicative
- **source_curriculum**: analytic-nt
- **dedup**: Davenport may invoke Perron inside the PNT proof at 21.12. Keep Perron/Mellin as a **reusable standalone tool unit** here; 21.12 should cite this rather than re-derive. No Apostol overlap (Apostol's PNT is the elementary Selberg-Erdős route).

### Gap 3
- **id**: `21.14.01`
- **title**: The large sieve inequality
- **spec**: The analytic large sieve: for $a_n$ supported on $M<n\le M+N$ and well-spaced points $\{\alpha_r\}\subset\mathbb{R}/\mathbb{Z}$ with separation $\ge\delta$, $\sum_r\big|\sum_n a_n e(n\alpha_r)\big|^2\le(N+\delta^{-1})\sum_n|a_n|^2$. The duality/almost-orthogonality proof (Montgomery-Vaughan, with the sharp $N+\delta^{-1}$ constant); the arithmetic large sieve over Farey fractions / Dirichlet characters $\sum_{q\le Q}\frac{q}{\varphi(q)}\sum_{\chi\bmod q}^{*}\big|\sum_n a_n\chi(n)\big|^2\le(N+Q^2)\sum|a_n|^2$. Brun-Titchmarsh theorem $\pi(x;q,a)\le\frac{2x}{\varphi(q)\log(x/q)}$ as the headline application. MV Ch. 7. **Entirely absent** (grep: 1 incidental mention in 21.03.04).
- **prereqs**: `21.03.02` (Dirichlet characters, orthogonality), `02.09.01` (complex exponentials / $e(\theta)$), `01.01.09` (Gram-Schmidt / inner-product / duality), `21.15.??` (exponential sums — soft prereq; may be produced in parallel)
- **chapter**: sieve-methods-large-sieve
- **section**: number-theory
- **source_book**: montgomery-vaughan-multiplicative
- **source_curriculum**: analytic-nt
- **dedup**: none. This is MV's signature contribution and is uncovered. Apostol/Davenport do not treat the large sieve.

### Gap 4
- **id**: `21.14.02`
- **title**: The Bombieri-Vinogradov theorem
- **spec**: "GRH on average": $\sum_{q\le Q}\max_{(a,q)=1}\big|\psi(x;q,a)-\frac{x}{\varphi(q)}\big|\ll_A \frac{x}{(\log x)^A}$ for $Q\le x^{1/2}(\log x)^{-B}$. Proof architecture via the large sieve + the Vaughan identity decomposition of $\Lambda(n)$ into Type I / Type II bilinear sums + the multiplicative large sieve for character sums; statement of the role as a GRH-strength substitute in applications (e.g. Chen's theorem, bounded gaps). MV Ch. 9 §9.4 (with Ch. 17/Vol. II linkage noted as further reading). **Entirely absent** (grep: 0 dedicated; only incidental `bombieri`/`vinogradov` references in 21.01.02, 21.03.04).
- **prereqs**: `21.14.01` (large sieve), `21.03.02` (Dirichlet L / characters), `21.12.??` (PNT for $\psi$ — Davenport-owned, soft prereq for the main-term shape), `21.11.04` (Perron — for the Vaughan-identity / Type II handling)
- **chapter**: sieve-methods-large-sieve
- **section**: number-theory
- **source_book**: montgomery-vaughan-multiplicative
- **source_curriculum**: analytic-nt
- **dedup**: none. Depends on Davenport's PNT-in-AP main term (21.12/21.13); flag a cross-spine prereq edge once Davenport assigns its ids. The theorem itself is uncovered and MV-canonical.

### Gap 5
- **id**: `21.14.03`
- **title**: Mean values of multiplicative functions (Halász-Wirsing)
- **spec**: Asymptotics for $\frac1x\sum_{n\le x} f(n)$, $f$ multiplicative with $|f|\le1$. Wirsing's theorem for non-negative $f$; the Halász theorem characterizing when the mean value vanishes vs. has a nonzero limit, via the "pretentious" distance $\mathbb{D}(f,n^{it};x)^2=\sum_{p\le x}\frac{1-\operatorname{Re}(f(p)p^{-it})}{p}$. The Turán-Kubilius inequality and the elementary side of mean values; relation to $\sum_{n\le x}\mu(n)=o(x)\Leftrightarrow$ PNT. MV Ch. 4 §4.3 + Ch. 6. **Absent** (grep: halász 0, wirsing 0, turán-kubilius 0).
- **prereqs**: `21.11.03` (summatory functions), `21.03.01` (Euler products / Dirichlet series), `21.14.01` (large sieve — Turán-Kubilius variance input), `37.02.02` (SLLN / second-moment intuition, soft)
- **chapter**: sieve-methods-large-sieve
- **section**: number-theory
- **source_book**: montgomery-vaughan-multiplicative
- **source_curriculum**: analytic-nt
- **dedup**: none. The probabilistic Erdős-Kac sibling lives in `37.*` (probability spine) and is only incidentally referenced; this is the multiplicative-function mean-value engine, distinct. No Apostol/Davenport overlap.

### Gap 6
- **id**: `21.11.05`
- **title**: The Selberg-Delange method
- **spec**: Asymptotics for $\sum_{n\le x} f(n)$ when the Dirichlet series $F(s)=\sum f(n)n^{-s}$ factors as $\zeta(s)^{z}G(s)$ with $G$ analytic past $\operatorname{Re}(s)=1$ — i.e. average order of multiplicative $f$ whose Euler factors mimic $\zeta^z$. Derive the Landau-Selberg-Delange asymptotic $\sum_{n\le x} f(n)\sim C\,x(\log x)^{z-1}$ with the contour-integral / Hankel-contour extraction of the $(\log x)^{z-1}$ power. Application: $\#\{n\le x: \omega(n)=k\}$ (Landau) and the count of integers that are sums of two squares ($z=1/2$). MV Ch. 5 §5.2 (Selberg-Delange). **Absent** (grep: selberg-delange 0).
- **prereqs**: `21.11.04` (Perron / Mellin inversion), `21.03.01` (zeta + functional equation), `06.01.04` (analytic continuation), `06.01.15` (Gamma function — Hankel contour), `06.01.22` (Phragmén-Lindelöf)
- **chapter**: dirichlet-series-arithmetic-functions
- **section**: number-theory
- **source_book**: montgomery-vaughan-multiplicative
- **source_curriculum**: analytic-nt
- **dedup**: builds on Gap 2 (Perron). No Apostol/Davenport overlap — this is the analytic-continuation-of-$\zeta^z$ technique unique to MV (and Tenenbaum); Apostol does not reach it.

---

## COVERED (MV headline theorems already in corpus — no new unit)

- **Euler product / Dirichlet series convergence (MV Ch. 1)** → `21.03.01` (Euler product, abscissa of convergence, $\zeta$ as Dirichlet series). Also Apostol-owned for the elementary side at 21.11.
- **Dirichlet characters + orthogonality relations (MV Ch. 4, 9)** → `21.03.02` (characters, both orthogonality relations, $L(s,\chi)$).
- **$L(1,\chi)\neq0$ / Dirichlet's theorem on primes in AP (MV Ch. 4)** → `21.03.02` + `21.03.04`.
- **Functional equation of $\zeta$ and $L(s,\chi)$, Gauss sums (MV Ch. 10)** → `21.03.01` (theta/Mellin proof) + `21.03.02` (root number / Gauss sum stated).
- **Dirichlet density, $\sum_p p^{-s}\sim\log\frac1{s-1}$ (MV Ch. 4)** → `21.03.04`.
- **Chebyshev bounds + Mertens' three theorems (MV Ch. 2)** → stated in `21.01.02` (Master asides) and reinforced as **Apostol-owned** at 21.11; not re-proposed (default COVERED / deferred to Apostol).
- **Möbius function, Dirichlet convolution, Abel/partial summation (MV §§1.2-1.3)** → **deferred to Apostol audit (21.11)**; treated as prereqs to my Gap 1. Not a genuine gap for *this* audit.
- **Riemann-von Mangoldt explicit formula machinery (MV Ch. 12)** → foundations in `21.03.01`; the explicit-formula/zero-density refinement is **Davenport-owned at 21.12** (see OUT OF SCOPE).

## OUT OF SCOPE (owned by parallel audit or another spine — do NOT produce here)

- **Prime Number Theorem (analytic proof, zero-free region, $\psi(x)\sim x$) — MV Ch. 6** → **Davenport, 21.12**. My Gap 2 (Perron) and Gap 4 (B-V) supply tools/cite it; I do not produce the PNT unit.
- **PNT in arithmetic progressions, Siegel-Walfisz, Page/Siegel zeros — MV Ch. 11** → **Davenport, 21.12/21.13**. B-V (my Gap 4) consumes its main term as a cross-spine prereq.
- **Zero-density estimates / Linnik (MV Ch. 9-10, Vol. II)** → Davenport 21.12 or deferred to a later Iwaniec-Kowalski audit; beyond MV-I "classical" scope here.
- **Riemann hypothesis / pair correlation (MV Ch. 13-14)** → conjecture-level, lives with `21.03.01` zeta unit; not a production target.
- **Partitions / circle method (MV does not cover; chapter 21.16)** → **Apostol audit** (partitions) + a later Vaughan *The Hardy-Littlewood Method* audit.
- **Exponential sums (Weyl, van der Corput, Vinogradov's mean value) — chapter 21.15** → only soft-cited by my large-sieve unit; primary ownership belongs to a dedicated exponential-sums source audit (Iwaniec-Kowalski / Montgomery's *Ten Lectures*), not MV-I.
- **Erdős-Kac theorem (probabilistic NT)** → already in probability spine `37.*` (referenced in 37.03.03); Turán-Kubilius enters my Gap 5 only as the multiplicative-function variance tool, not the CLT statement.
