# Completeness re-audit: Iwaniec-Kowalski — *Analytic Number Theory* (AMS Colloquium 53)

`source_book: iwaniec-kowalski-ant`
`source_curriculum: analytic-nt`
`section: number-theory` (extends `content/21-number-theory/`)
`re-audited: 2026-06-05` (against the now-shipped Spine 3 analytic-NT corpus)

**Context.** The first audit (`iwaniec-kowalski-ant.gaps.md`) found chapters `11`–`16`
as empty scaffold and proposed **8 gaps**. Those 8 are now all shipped (verified by
filename + body grep): `21.11.01-05`, `21.12.01-04`, `21.13.01-05`, `21.14.01-05`,
`21.15.01-05`, `21.16.01-02` — 27 units across the six analytic-NT chapters. This pass
re-lists I-K's headline tools against the **larger** corpus and hunts for any
theorem-level payoff that is *still* genuinely absent.

## Method

Re-grepped every I-K headline tool, including the ones the first audit did not need to
check (because the chapters were empty): Vaughan's identity / Type I-II bilinear
decomposition of $\Lambda$, the dispersion method, the delta/circle method, the
Dirichlet divisor problem ($\Delta(x)$ / hyperbola / Voronoi), zero-density estimates
($N(\sigma,T)$, $N(\alpha,T,\chi)$), moments of $\zeta$, Halász/Wirsing mean values,
Linnik-Selberg cancellation, the Bessel/Voronoi kernel, exponent pairs, the
Bombieri-Iwaniec-Huxley discrete method. Each hit was resolved to a shipped
theorem-level unit, an incidental cross-reference, or a correctly-scoped exclusion.

The strongest candidate for a residual gap was **Vaughan's identity / the Type I-II
bilinear decomposition** (I-K Ch. 13) — the engine for "sums over primes" and the
parity-barrier evasion. It is **COVERED**: `21.14.02` (Bombieri-Vinogradov) states the
full identity
$\Lambda(n)=\sum_{bd=n,\,d\le U}\mu(d)\log b-\sum_{dcm=n}\mu(d)\Lambda(c)+\sum_{mk=n,\,m>U,\,k>V}(\sum_{d\mid m,\,d\le U}\mu(d))\Lambda(k)$,
sorts it into Type I / Type II sums, identifies the bilinear term, and disposes of it by
Cauchy-Schwarz + the multiplicative large sieve as a labeled Proposition with worked
exercises (lines 350-454). No standalone unit is warranted.

## NEW GAPS

**None.** Every I-K theorem-level tool resolves to a shipped unit or a correctly-scoped
exclusion. 0 new gaps — the conservative expectation for a freshly-produced spine.

## COVERED — verification of the re-checked tools

- **Vaughan's identity / Type I-II bilinear decomposition of $\Lambda$** (I-K Ch. 13) —
  `21.14.02` (full identity, Type I/II sorting, large-sieve disposal, two exercises).
- **Dirichlet divisor problem** ($\sum_{n\le x}d(n)$, $\Delta(x)$, hyperbola method,
  Voronoi $O(x^{1/3}\log x)$, Hardy-Landau $\Omega(x^{1/4})$, Huxley
  $O(x^{131/416+\varepsilon})$, Gauss-circle analogue) — `21.15.01` (Voronoi summation),
  theorem-level with exercise; elementary hyperbola asymptotic also in `21.11.02`.
- **Large-sieve zero-density estimate** $\sum_{q\le Q}\frac{q}{\varphi(q)}\sum^*_\chi
  N(\alpha,T,\chi)\ll(Q^2T)^{c(1-\alpha)}$ and the explicit-formula passage to
  $\psi(x,\chi)$ — `21.14.02` (stated, proved-in-sketch, applied as the modern B-V engine).
- **Halász-Wirsing mean values of multiplicative functions** — `21.14.03`.
- **Poisson / Voronoi summation, dual lattice, Bessel kernel** — `21.15.01`.
- **Weyl sums / differencing / Weyl inequality / equidistribution** — `21.15.02`.
- **van der Corput A/B-processes, exponent pairs, subconvexity for $\zeta(\tfrac12+it)$**
  — `21.15.03`.
- **Gauss / Jacobi / Kloosterman / Salié sums, Weil bound** — `21.15.04`.
- **Vinogradov mean value theorem** (sharp bound + zero-free-region / Waring use) — `21.15.05`.
- **Combinatorial / Selberg sieve, fundamental lemma, parity problem, Brun-Titchmarsh**
  — `21.14.04` (+ large sieve inequality `21.14.01`).
- **Kloosterman sums, Petersson/Kuznetsov trace formula, Linnik-Selberg cancellation** —
  `21.14.05`.
- **Approximate functional equation, analytic conductor, convexity bound, Lindelöf /
  $\mu(\sigma)$** — `21.13.05`.
- **PNT, zero-free region, explicit formula, Riemann-von Mangoldt $N(T)$** — `21.12.01-04`.
- **PNT in AP / Siegel-Walfisz / Siegel's theorem / Polya-Vinogradov** — `21.13.01-04`.
- **Perron / Mellin / Selberg-Delange / arithmetic-function average orders** — `21.11.01-05`.
- **Circle method, Hardy-Ramanujan-Rademacher partition asymptotics** — `21.16.01-02`.

## OUT OF SCOPE (unchanged from first audit — research-frontier apparatus)

- Full spectral decomposition of $L^2(\Gamma\backslash\mathbb{H})$ / Maass forms /
  Selberg trace formula at proof depth (a future automorphic-forms spine; `21.14.05`
  delivers the formula + Kloosterman-cancellation payoff at the right intro tier).
- Subconvexity / moment machinery (Burgess, amplification, spectral large sieve, the
  fourth moment, CFKRS / random-matrix moment conjectures) — the convexity bound and the
  *statement* of subconvexity are in `21.13.05`; the program is deferred.
- $\mathrm{GL}_n$ / Rankin-Selberg automorphic analytic theory (overlaps `21.10.01`).
- The Bourgain-Demeter-Guth decoupling proof of Vinogradov (stated, not reproved, in
  `21.15.05`).
- The **dispersion method** (Linnik) and the **delta/$\delta$-symbol method**, and the
  beyond-large-sieve Deshouillers-Iwaniec / Zhang well-factorable-moduli technology —
  these are named in `21.14.02`/`21.14.04`/`21.15.04` as the parity-barrier evasion and
  Elliott-Halberstam-frontier inputs; they are research-monograph apparatus, correctly
  flagged rather than developed.
- General-$\zeta$ zero-density exponents (Ingham/Huxley $N(\sigma,T)$ refinements) beyond
  the large-sieve average density estimate already in `21.14.02`.

## DRY?

**DRY.** All 8 prior-audit gaps shipped; 0 new gaps. The analytic toolbox I-K is built
around — exponential sums, sieves, large sieve, Kloosterman/spectral, AFE/convexity, the
Vaughan-identity bilinear engine, the divisor problem, and zero-density-on-average — is
now fully represented at theorem-plus-application depth. The remaining I-K material is
the deferred automorphic/subconvexity/moment frontier, which stays out of scope for an
encyclopedic reference. This book is complete against the corpus.
