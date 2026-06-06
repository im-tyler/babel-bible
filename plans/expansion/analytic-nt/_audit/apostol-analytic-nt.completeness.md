# Completeness re-audit: Apostol — *Introduction to Analytic Number Theory*

`source_book: apostol-analytic-nt`
`source_curriculum: analytic-nt`
`section: number-theory` (`content/21-number-theory`)
`re-audited against: spine 3 (21.11–21.16) now fully produced`
`date: 2026-06-05`

Re-run of the headline-theorem sweep against the **now-larger** corpus. The prior
`apostol-analytic-nt.gaps.md` raised 5 gaps (21.11.01–03, 21.16.01–02); **all 5 are
now shipped**, and the OUT OF SCOPE blocks (sieves, exponential sums, analytic
mean-values) have also landed in 21.14/21.15. Every Apostol headline theorem now maps
to a unit. Method: Apostol Ch. 1–14 enumerated chapter by chapter; each headline
grep'd by name and by formula against `21.01`, `21.03`, and `21.11`–`21.16`.

---

## Chapter-by-chapter coverage (Apostol Ch. 1–14)

- **Ch. 1 (arithmetical functions, FTA framing) / Ch. 2 (Dirichlet convolution, Möbius inversion, $\varphi=\mu*N$, $\Lambda=\mu*\log$)** — `21.11.01`. COVERED.
- **Ch. 3 (big-O, Euler summation, Abel summation, Euler-Maclaurin; $\sum 1/n=\log x+\gamma+O(1/x)$; average orders $\sum d(n)=x\log x+(2\gamma-1)x+O(\sqrt x)$, $\sum\sigma(n)=\tfrac{\pi^2}{12}x^2+\cdots$, $\sum\varphi(n)=\tfrac{3}{\pi^2}x^2+\cdots$ via the Dirichlet hyperbola method)** — `21.11.02`. COVERED with the explicit constants and error terms verified in-body.
- **Ch. 4 (Chebyshev $\theta,\psi$; Chebyshev inequalities; Bertrand's postulate; Mertens' theorems; Shapiro's Tauberian theorem as the engine)** — `21.11.03`. COVERED. (Shapiro's theorem appears as the elementary Tauberian step inside this unit, not a standalone headline.)
- **Ch. 5 ($\varphi$, Fermat-Euler, $(\mathbb Z/n)^\times$ structure, primitive roots)** — `21.01.04`, `21.01.05`. COVERED.
- **Ch. 6 (Dirichlet characters mod $m$, orthogonality relations)** — `21.03.02`. COVERED.
- **Ch. 7 (Dirichlet's theorem on primes in AP, $L(1,\chi)\neq0$)** — `21.03.02` + `21.03.04`. COVERED.
- **Ch. 8 (periodic arithmetic functions, finite Fourier, Ramanujan sums $c_q(n)$, Gauss sums associated to characters)** — see DRY note below. Folded into `21.11.01` / `21.03.02`; not a standalone headline.
- **Ch. 9 (quadratic residues, Legendre symbol, quadratic reciprocity, Gauss sums)** — `21.01.06`, `21.01.07`. COVERED.
- **Ch. 10 (primitive roots, structure of $(\mathbb Z/n)^\times$)** — `21.01.05`. COVERED.
- **Ch. 11 (Dirichlet series, Euler products, abscissa of convergence)** — `21.03.01`/`21.03.02`; analytic deepening in `21.11.04` (Perron) and `21.11.05`. COVERED.
- **Ch. 12 (functions $\zeta(s)$, $L(s,\chi)$: analytic continuation, functional equation)** — `21.03.01` (zeta FE) + `21.13.05` (approximate FE / convexity for $L$). COVERED.
- **Ch. 13 (analytic Prime Number Theorem; PNT for arithmetic progressions; contour proof; zero-free region)** — `21.12.01`–`21.12.04` (von Mangoldt/$\psi$, contour PNT, zero-free region + error, Riemann–von Mangoldt explicit formula) + `21.13.01`–`21.13.03` (zero-free regions for $L$, Siegel, PNT-in-AP / Siegel-Walfisz). COVERED — substantially deepened beyond Apostol.
- **Ch. 14 (partitions: Euler generating function, Euler's distinct=odd identity, pentagonal number theorem, Jacobi triple product; Hardy-Ramanujan asymptotic; Rademacher exact series via the circle method)** — `21.16.01` (generating function + pentagonal) + `21.16.02` (Hardy-Ramanujan-Rademacher circle method). COVERED.

---

## NEW GENUINE GAPS

**None.** Every Apostol headline theorem maps to a shipped unit. The 5 gaps from the
prior audit are now produced; nothing of headline value remains absent.

The single borderline item is **Apostol Ch. 8 — periodic arithmetic functions mod $k$,
finite Fourier expansions, and Ramanujan sums $c_q(n)$** (with the evaluation
$c_q(n)=\sum_{d\mid(q,n)}d\,\mu(q/d)$ and the orthogonality of additive characters).
It remains developed nowhere: $c_q(n)$ surfaces only as a reference line in `21.11.01`
and as the degenerate-Kloosterman remark $S(0,0;p)=p-1$ in `21.15.04`. Consistent with
the prior audit's explicit decision, this is **not raised as a genuine gap**: it is a
self-contained Apostol chapter rather than a headline theorem of independent value, and
its content folds cleanly into the convolution-ring unit `21.11.01` (Ramanujan sums as a
multiplicative-in-$q$ arithmetic function) and the character/orthogonality unit
`21.03.02` (finite Fourier on $\mathbb Z/k$). Flag-only for a future Montgomery-Vaughan
21.11 enrichment if a dedicated finite-Fourier unit is ever wanted; not actioned here.

---

## DRY?

**Yes — DRY.** Apostol is fully covered with zero new gaps. All 14 chapters map to
shipped units; the elementary multiplicative spine (Ch. 1–4) lives in `21.11.01–03`,
the algebraic chapters (Ch. 5,9,10) in `21.01.04–07`, the character/L-function/PNT
chapters (Ch. 6,7,11–13) in `21.03` and `21.12`/`21.13`, and partitions (Ch. 14) in
`21.16`. The only un-unitized Apostol content — Ch. 8 periodic functions / Ramanujan
sums — is a borderline minor chapter that the prior audit deliberately declined to
raise and that subsumes into existing units; it does not warrant a new unit. Conservative
verdict holds: 0 new gaps, as expected.
