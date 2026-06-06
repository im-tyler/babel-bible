# Audit: Davenport — *Multiplicative Number Theory* (3rd ed., GTM 74)

source_book: davenport-multiplicative
source_curriculum: analytic-nt
spine: analytic-nt (extends `content/21-number-theory`)
audited: 2026-06-05

Scope: the analytic core of Davenport — the contour-integral proof of the Prime
Number Theorem and PNT in arithmetic progressions; Dirichlet characters and
$L$-functions; functional equation; zero-free regions; Siegel's theorem and
Siegel zeros; the explicit formula; the Polya-Vinogradov inequality.

The corpus already carries the *algebraic / structural* $L$-function treatment
(21.03.01-04) and a complex-analysis zeta unit (06.01.16) that **proves** the
$\operatorname{Re}(s)=1$ zero-free region and **states** PNT. The genuine gaps
below are the *analytic theorems Davenport proves in full* that have no
corresponding unit anywhere in `content/`: the von Mangoldt / Chebyshev
apparatus, Perron's formula, the contour-integral PNT proof, the effective HdlVP
zero-free region, the Riemann–von Mangoldt explicit formula, PNT in APs
(Siegel–Walfisz), zero-free regions for $L(s,\chi)$ + Siegel zeros, Siegel's
theorem, and Polya–Vinogradov. New units slot into the empty chapter skeletons
`21.12 prime-number-theorem` and `21.13 dirichlet-l-functions-characters`.

Verified-existing prereq ids used below:
- 06.01.02 Cauchy integral formula · 06.01.03 residue theorem ·
  06.01.04 analytic continuation · 06.01.05 meromorphic function ·
  06.01.13 argument principle / Rouché · 06.01.15 Gamma function ·
  06.01.17 Weierstrass factorization · 06.01.22 Phragmén–Lindelöf
- 02.03.03 infinite-series convergence
- 21.01.02 primes / Chebyshev bounds · 21.01.06 Legendre symbol
- 21.03.01 Riemann zeta + functional equation · 21.03.02 Dirichlet $L$ / characters /
  orthogonality / $L(1,\chi)\ne0$ · 21.03.04 Dirichlet density
- 06.01.16 complex-analysis zeta (proves $\zeta(1+it)\ne0$ on $\operatorname{Re}(s)=1$)

---

## GAPS (genuine — no existing unit proves these)

### 21.12.01 — Chebyshev functions and the von Mangoldt function
- id: 21.12.01
- title: Chebyshev $\theta,\psi$ and the von Mangoldt function $\Lambda(n)$
- spec: Define $\Lambda(n)$, $\psi(x)=\sum_{n\le x}\Lambda(n)$, $\theta(x)=\sum_{p\le x}\log p$; prove the identity $-\zeta'/\zeta(s)=\sum_n \Lambda(n)n^{-s}$ and the elementary equivalences $\psi(x)\sim x \Leftrightarrow \theta(x)\sim x \Leftrightarrow \pi(x)\sim x/\log x$ (Abel summation / partial summation).
- prereqs: [21.01.02, 21.03.01, 02.03.03]
- chapter: prime-number-theorem
- section: number-theory
- source_book: davenport-multiplicative
- source_curriculum: analytic-nt
- note: 21.01.02 gives Chebyshev *bounds* only; the $\Lambda$/$\psi$ logarithmic-derivative machinery and the PNT-equivalence reductions are absent.

### 21.12.02 — Perron's formula and Mellin inversion for Dirichlet series
- id: 21.12.02
- title: Perron's formula (Mellin inversion of a Dirichlet series)
- spec: Prove the truncated Perron formula $\sum_{n\le x}a_n = \frac{1}{2\pi i}\int_{c-iT}^{c+iT} D(s)\frac{x^s}{s}\,ds + \text{error}$ for $D(s)=\sum a_n n^{-s}$, with explicit error bounds; the analytic device converting a contour integral of $-\zeta'/\zeta$ into a sum over zeros.
- prereqs: [21.12.01, 06.01.03, 06.01.02, 02.03.03]
- chapter: prime-number-theorem
- section: number-theory
- source_book: davenport-multiplicative
- source_curriculum: analytic-nt

### 21.12.03 — The Prime Number Theorem via contour integration
- id: 21.12.03
- title: Prime Number Theorem (analytic proof) $\psi(x)\sim x$, $\pi(x)\sim x/\log x$
- spec: Full contour-integral proof of PNT: apply Perron to $-\zeta'/\zeta$, shift the contour past $\operatorname{Re}(s)=1$ using the $\operatorname{Re}(s)=1$ non-vanishing, pick up the pole at $s=1$ (main term $x$), bound the shifted integral; the Newman/Wiener–Ikehara Tauberian route as alternative.
- prereqs: [21.12.01, 21.12.02, 06.01.16, 21.03.01]
- chapter: prime-number-theorem
- section: number-theory
- source_book: davenport-multiplicative
- source_curriculum: analytic-nt
- note: PNT is only *stated* (06.01.16 Master remark; 21.01.02 prose) — never proved in any unit. The dedicated 21.12 chapter is empty.

### 21.12.04 — The effective Hadamard–de la Vallée Poussin zero-free region
- id: 21.12.04
- title: Effective zero-free region $\sigma > 1 - c/\log(|t|+2)$ for $\zeta$
- spec: Prove the classical effective zero-free region for $\zeta(s)$ via the $3+4\cos\theta+\cos2\theta$ inequality combined with bounds on $\zeta'/\zeta$ / log-derivative growth (Borel–Carathéodory + Hadamard product), upgrading the bare boundary non-vanishing to a quantitative region.
- prereqs: [06.01.16, 06.01.17, 06.01.22, 21.03.01]
- chapter: prime-number-theorem
- section: number-theory
- source_book: davenport-multiplicative
- source_curriculum: analytic-nt
- note: 06.01.16 proves only $\zeta(1+it)\ne0$ on the line and *states* the effective region without proof; the quantitative region and its PNT-error-term consequence $\pi(x)=\operatorname{Li}(x)+O(x e^{-c\sqrt{\log x}})$ are the gap.

### 21.12.05 — The Riemann–von Mangoldt explicit formula
- id: 21.12.05
- title: Explicit formula $\psi(x)=x-\sum_\rho x^\rho/\rho - \log 2\pi - \tfrac12\log(1-x^{-2})$
- spec: State and prove the explicit formula relating $\psi(x)$ to a sum over the non-trivial zeros $\rho$ of $\zeta$; derive it from Perron + the Hadamard product of $\xi(s)$ / the partial-fraction expansion of $\zeta'/\zeta$; the zero-counting $N(T)$ Riemann–von Mangoldt asymptotic as companion.
- prereqs: [21.12.02, 21.12.03, 06.01.17, 06.01.13, 21.03.01]
- chapter: prime-number-theorem
- section: number-theory
- source_book: davenport-multiplicative
- source_curriculum: analytic-nt
- note: Named only as a future "Mathlib gap" in 06.01.16 / 21.01.02; never stated as a theorem nor proved anywhere.

### 21.13.01 — Zero-free regions for Dirichlet $L$-functions and Siegel zeros
- id: 21.13.01
- title: Zero-free regions for $L(s,\chi)$ and the exceptional (Siegel) zero
- spec: Prove the standard zero-free region for $L(s,\chi)$ uniform in the modulus, away from a possible exceptional real zero of a real character (Page's theorem: at most one such zero per modulus); the $3+4\cos\theta+\cos2\theta$ argument with the $\chi,\chi^2,\chi_0$ triple, and the deduction that the exceptional zero is real, simple, and attached to a real $\chi$.
- prereqs: [21.03.02, 21.12.04, 06.01.16]
- chapter: dirichlet-l-functions-characters
- section: number-theory
- source_book: davenport-multiplicative
- source_curriculum: analytic-nt
- note: 21.03.02 only *states* Page/Siegel (Theorem 4, Master tier); the zero-free-region proof and the exceptional-zero analysis are absent.

### 21.13.02 — Siegel's theorem ($L(1,\chi)\gg_\epsilon q^{-\epsilon}$)
- id: 21.13.02
- title: Siegel's theorem — ineffective lower bound for $L(1,\chi)$
- spec: Prove Siegel's lower bound $L(1,\chi)\gg_\epsilon q^{-\epsilon}$ for real primitive $\chi$ mod $q$ (equivalently $1-\beta \gg_\epsilon q^{-\epsilon}$ for the exceptional zero); the two-character argument and the source of the ineffective constant.
- prereqs: [21.13.01, 21.03.02, 21.03.04]
- chapter: dirichlet-l-functions-characters
- section: number-theory
- source_book: davenport-multiplicative
- source_curriculum: analytic-nt
- note: Stated as Siegel 1935 in 21.03.02 references / Theorem 4 only; no proof unit.

### 21.13.03 — Prime Number Theorem in arithmetic progressions (Siegel–Walfisz)
- id: 21.13.03
- title: PNT in arithmetic progressions and the Siegel–Walfisz theorem
- spec: Prove $\psi(x;q,a)\sim x/\varphi(q)$ via $L$-function zero-free regions and the explicit formula for $\psi(x,\chi)$; the Siegel–Walfisz theorem $\psi(x;q,a)=x/\varphi(q)+O(x\exp(-c\sqrt{\log x}))$ uniformly for $q\le(\log x)^A$, using Siegel's bound to control the exceptional zero.
- prereqs: [21.13.01, 21.13.02, 21.12.03, 21.12.05, 21.03.02]
- chapter: dirichlet-l-functions-characters
- section: number-theory
- source_book: davenport-multiplicative
- source_curriculum: analytic-nt
- note: 21.03.02 (ex 8) and 21.03.04 *state* the $\sim x/(\varphi(m)\log x)$ asymptotic; neither proves it nor gives the Siegel–Walfisz error term.

### 21.13.04 — The Polya–Vinogradov inequality
- id: 21.13.04
- title: Polya–Vinogradov inequality for character sums
- spec: Prove $\bigl|\sum_{n=M+1}^{M+N}\chi(n)\bigr|\le \sqrt{q}\,\log q$ for non-principal $\chi$ mod $q$, via Gauss-sum completion and the geometric-series bound on complete exponential sums; applications to the least quadratic non-residue and short-interval character cancellation.
- prereqs: [21.03.02, 21.01.06, 02.03.03]
- chapter: dirichlet-l-functions-characters
- section: number-theory
- source_book: davenport-multiplicative
- source_curriculum: analytic-nt
- note: Polya–Vinogradov appears nowhere in `content/`. Gauss sums exist only as *quadratic* Gauss sums in the reciprocity units (21.02.02), not the general $|\tau(\chi)|=\sqrt q$ completion used here.

---

## COVERED (not gaps)

- Riemann zeta: definition, Euler product, analytic continuation, functional
  equation, RH statement, special values — **21.03.01** (and **06.01.16**).
- Zeta functional equation via theta/Poisson and via Hankel contour — **21.03.01**.
- Non-vanishing $\zeta(s)\ne0$ on $\operatorname{Re}(s)=1$ (the $3+4\cos\theta+\cos2\theta$
  proof) — **06.01.16** (Master, Proposition, full proof).
- Dirichlet characters, the dual group, orthogonality relations — **21.03.02**.
- Dirichlet $L$-functions: series, Euler product, analytic continuation — **21.03.02**.
- Functional equation of $L(s,\chi)$, Gauss sum / root number $W(\chi)$,
  $|\tau(\chi)|=\sqrt m$ — **21.03.02** (ex 7).
- Non-vanishing $L(1,\chi)\ne0$ for non-principal $\chi$ — **21.03.02** (key theorem).
- Dirichlet's theorem on primes in arithmetic progressions (qualitative,
  infinitude) — **21.03.02** (ex 8).
- Class-number formula link $L(1,\chi)$ ↔ $h(D)$ — **21.03.02** (real-character case).
- Dirichlet density of prime classes; $\log\zeta(s)\sim\log\frac{1}{s-1}$ — **21.03.04**.
- Chebyshev bounds $c_1 x/\log x\le\pi(x)\le c_2 x/\log x$, Bertrand's postulate — **21.01.02**.
- Quadratic Gauss sums (for reciprocity), Legendre symbol — **21.02.02**, **21.01.06**.
- Dedekind / Hecke / Artin $L$-functions, Chebotarev density (statements) — **21.03.03**, **21.03.04**.

## OUT OF SCOPE

- Elementary (Erdős–Selberg) proof of PNT — non-analytic; Davenport does not give
  it and the corpus references it (21.01.02); not part of this multiplicative-NT
  analytic spine.
- Bombieri–Vinogradov theorem, the large sieve — belong to the dedicated
  `21.14 sieve-methods-large-sieve` chapter, not Davenport's core; audit those
  under their own source books.
- Linnik's theorem on the least prime in an AP — beyond Davenport's main line;
  belongs to a Linnik/large-sieve source audit.
- Tate's thesis / adelic reformulation of the functional equation — covered as
  context in 21.03.02/03; an algebraic-NT (Cassels–Fröhlich) audit item, not
  analytic Davenport.
- Hadamard product / Weierstrass factorization theory of entire functions — the
  general complex-analysis machinery already exists (06.01.17); only its
  *application* to $\xi(s)$ (folded into gap 21.12.05) is in scope here.

---

RESULT: genuine gaps = 9 · covered = 12 topic-clusters · out-of-scope = 5
gap-file: plans/expansion/analytic-nt/_audit/davenport-multiplicative.gaps.md
