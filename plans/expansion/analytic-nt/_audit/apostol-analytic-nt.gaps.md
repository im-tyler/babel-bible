# Audit: Apostol — *Introduction to Analytic Number Theory*

`source_book: apostol-analytic-nt`
`source_curriculum: analytic-nt`
`section: number-theory` (extends `content/21-number-theory`)
`spine: analytic-nt` — new chapters `21.11 dirichlet-series-arithmetic-functions` … `21.16 partitions-circle-method`

Method: Apostol's 12 headline blocks were each verified by filename grep + body grep
against the live corpus. The corpus already carries the **analytic L-function spine**
at graduate depth in `21.03-l-functions` (Riemann zeta `21.03.01` with Euler product,
functional equation, analytic continuation and the Hadamard-route PNT; Dirichlet
`L(s,\chi)` `21.03.02` with the **character orthogonality relations stated and proved**,
the Euler product, `L(1,\chi)\neq 0`, and **Dirichlet's theorem on primes in arithmetic
progressions**; Dirichlet density `21.03.04`; Dedekind/Hecke/Artin `21.03.03`). The
**elementary multiplicative arithmetic underneath that spine** — Apostol Ch. 1-4 — is
present only as scattered asides: the Möbius function appears as an irreducible-polynomial
count in `21.02.01` and as a "not-a-character" remark in `21.03.02`; multiplicativity of
arithmetic functions appears inside Hecke-operator theory `21.04.02`; Gauss sums are built
for quadratic reciprocity in `21.01.07`; Abel summation / summation-by-parts is a tool in
`02.03.03` and `06.01.27`. No unit develops the **ring of arithmetic functions under
Dirichlet convolution**, the **average-order / Dirichlet-hyperbola summation toolkit**, the
**elementary (Chebyshev/Mertens) prime estimates**, or the **partition function and its
generating-function theory**. Those are the genuine gaps below.

Coordination: gaps below land in **21.11** (elementary arithmetic-function theory + the
Abel/Euler-Maclaurin summation toolkit — the side this audit owns; Montgomery-Vaughan owns
the analytic mean-value / large-sieve side of 21.11/21.14) and **21.16** (partitions —
**owned by this audit**). The analytic PNT (21.12), L-functions/characters as an analytic
object (21.13), sieves (21.14) and exponential sums (21.15) are deferred to the
Davenport / Montgomery-Vaughan / Iwaniec-Kowalski audits and are listed under COVERED or
OUT OF SCOPE here.

---

## GENUINE GAPS

### 21.11.01 — Arithmetic functions and Dirichlet convolution
- **id:** `21.11.01`
- **title:** Arithmetic functions, the Dirichlet convolution ring, and Möbius inversion
- **spec:** The standard arithmetic functions ($\mu$, $\varphi$, $\sigma_\alpha$, $d=\tau$, $\Lambda$, Liouville $\lambda$, the identity/unit/constant functions); multiplicative and completely multiplicative functions; the Dirichlet product $(f*g)(n)=\sum_{d\mid n} f(d)g(n/d)$ as a commutative ring with unit $\varepsilon=\lfloor 1/n\rfloor$; Dirichlet inverses and the fact that a multiplicative function is invertible iff $f(1)\neq 0$ with multiplicative inverse; $\mu * \mathbf{1} = \varepsilon$ and the **Möbius inversion formula** $g=f*\mathbf{1}\iff f=g*\mu$; the identities $\varphi=\mu*\mathrm{N}$, $\sum_{d\mid n}\varphi(d)=n$, $\Lambda*\mathbf{1}=\log$, $\Lambda=\mu*\log$; the Bell-series / formal-Dirichlet-series viewpoint linking $*$ to multiplication of Dirichlet series. Apostol Ch. 2.
- **prereqs:** `21.01.01` (divisibility / gcd), `21.01.02` (FTA / unique factorisation), `21.01.04` (Euler totient via Fermat-Euler context), `01.02.02` (ring/group structure for the convolution-ring claim)
- **chapter:** `dirichlet-series-arithmetic-functions` — `section: number-theory`, `chapter: dirichlet-series-arithmetic-functions`
- **dedup:** distinct from `21.02.01` (uses $\mu$ only for the $N_p(n)=\frac1n\sum_{d\mid n}\mu(n/d)p^d$ irreducible-count) and from `21.03.02` (mentions $\mu$/$\varphi$ only to say they are *not* Dirichlet characters). No existing unit defines the convolution ring or states Möbius inversion as a theorem.

### 21.11.02 — Averages of arithmetic functions: the big-oh / Abel / Euler-Maclaurin toolkit
- **id:** `21.11.02`
- **title:** Average orders of arithmetic functions and the elementary summation toolkit (Abel summation, Euler-Maclaurin, the Dirichlet hyperbola method)
- **spec:** Big-oh / little-oh / asymptotic notation in the number-theoretic setting; **Abel's summation formula** $\sum_{y<n\le x} a(n) f(n) = A(x)f(x)-A(y)f(y)-\int_y^x A(t)f'(t)\,dt$ for $A(t)=\sum_{n\le t}a(n)$; the **Euler-Maclaurin summation formula** and its use to get $\sum_{n\le x}1/n=\log x+\gamma+O(1/x)$ (Euler-Mascheroni constant) and $\sum_{n\le x}\log n = x\log x - x + O(\log x)$ (Stirling-type); average orders via summatory functions: $\sum_{n\le x} d(n)=x\log x+(2\gamma-1)x+O(\sqrt x)$ by the **Dirichlet hyperbola method**, $\sum_{n\le x}\sigma(n)=\tfrac{\pi^2}{12}x^2+O(x\log x)$, $\sum_{n\le x}\varphi(n)=\tfrac{3}{\pi^2}x^2+O(x\log x)$, $\sum_{n\le x}\mu(n)/n = O(1)$, and the average order of $\mu$. Apostol Ch. 3.
- **prereqs:** `21.11.01` (the arithmetic functions being averaged), `02.03.03` (Abel summation / summation-by-parts already developed as a series tool), `06.01.15` (Gamma / Stirling asymptotics for the $\log n$ sum)
- **chapter:** `dirichlet-series-arithmetic-functions` — `section: number-theory`, `chapter: dirichlet-series-arithmetic-functions`
- **dedup:** Abel summation exists as a *convergence tool* in `02.03.03`/`06.01.27`, but its number-theoretic application (summatory functions, average orders, hyperbola method) and the Euler-Maclaurin formula are absent everywhere. The $\sum 1/n$ and $\gamma$ asymptotics live nowhere as a stated result.

### 21.11.03 — Chebyshev bounds and Mertens' theorems (elementary prime estimates)
- **id:** `21.11.03`
- **title:** Elementary estimates for the distribution of primes: Chebyshev's $\psi$/$\theta$ bounds and Mertens' theorems
- **spec:** The Chebyshev functions $\theta(x)=\sum_{p\le x}\log p$ and $\psi(x)=\sum_{p^k\le x}\log p=\sum_{n\le x}\Lambda(n)$; equivalence of $\pi(x)\sim x/\log x$, $\theta(x)\sim x$, $\psi(x)\sim x$ via Abel summation; **Chebyshev's inequalities** $c_1 x\le\psi(x)\le c_2 x$ from the central binomial coefficient $\binom{2n}{n}$; **Bertrand's postulate** (a prime in $(n,2n]$); **Mertens' theorems** $\sum_{p\le x}\frac{\log p}{p}=\log x+O(1)$, $\sum_{p\le x}\frac1p=\log\log x+M+o(1)$ (Meissel-Mertens constant), and $\prod_{p\le x}(1-1/p)\sim e^{-\gamma}/\log x$; the **Selberg symmetry identity** $\psi(x)\log x+\sum_{n\le x}\Lambda(n)\psi(x/n)=2x\log x+O(x)$ as the elementary engine. Apostol Ch. 3-4.
- **prereqs:** `21.11.01` (von Mangoldt $\Lambda$, $\Lambda=\mu*\log$), `21.11.02` (Abel summation / average-order toolkit), `21.01.02` (FTA / prime infinitude, where Chebyshev/Mertens currently appear only as historical references)
- **chapter:** `dirichlet-series-arithmetic-functions` — `section: number-theory`, `chapter: dirichlet-series-arithmetic-functions`
- **dedup:** Chebyshev bounds, Bertrand, and Mertens are cited *only as references* in `21.01.02`; no unit states or proves them. This is the **elementary** prime-counting layer; the **analytic** PNT (Newman/zeta-contour proof) is COVERED at `21.03.01` and is the Davenport 21.12 audit's territory — keep this unit elementary (no complex analysis) so it complements rather than duplicates.

### 21.16.01 — The partition function and its generating function (Euler / pentagonal number theorem)
- **id:** `21.16.01`
- **title:** Integer partitions, the generating function $\prod(1-q^n)^{-1}$, and the pentagonal number theorem
- **spec:** Unrestricted partitions $p(n)$ and restricted partitions (distinct parts, odd parts, parts $\le k$); the **Euler generating function** $\sum_{n\ge 0}p(n)q^n=\prod_{k\ge 1}(1-q^k)^{-1}$ and generating functions for restricted partitions; **Euler's partition identity** (distinct parts = odd parts); Ferrers/Young diagrams and conjugation (self-conjugate partitions = distinct odd parts); **Euler's pentagonal number theorem** $\prod_{k\ge1}(1-q^k)=\sum_{m=-\infty}^{\infty}(-1)^m q^{m(3m-1)/2}$ and the resulting recurrence $p(n)=\sum_m(-1)^{m-1}p(n-g_m)$; the Jacobi triple product as the umbrella identity. Apostol Ch. 14.1-14.9.
- **prereqs:** `21.01.02` (FTA / multiplicative structure as the additive foil), `02.03.03` (formal power series / convergence of the product), `00.12.02` (binomial / combinatorial counting)
- **chapter:** `partitions-circle-method` — `section: number-theory`, `chapter: partitions-circle-method`
- **dedup:** $p(n)$ appears only as a *Stirling-asymptotics example* in `06.01.15` (Gamma) and the pentagonal number theorem as a *one-line specialisation* of Jacobi theta in `06.01.31`. No unit develops the partition generating function, Euler's identity, Ferrers diagrams, or the pentagonal recurrence. **This audit owns 21.16.**

### 21.16.02 — Asymptotics of $p(n)$: the Hardy-Ramanujan-Rademacher circle method
- **id:** `21.16.02`
- **title:** The Hardy-Ramanujan asymptotic and the Rademacher exact formula via the circle method
- **spec:** Modularity of the Dedekind eta $\eta(\tau)=q^{1/24}\prod(1-q^n)$ and the transformation behaviour of the partition generating function under $\tau\mapsto -1/\tau$; the **circle method**: Farey dissection of the unit circle into major/minor arcs around rational points, with the generating function's singularities at roots of unity; the **Hardy-Ramanujan asymptotic** $p(n)\sim\frac{1}{4n\sqrt3}\exp\!\big(\pi\sqrt{2n/3}\big)$; the **Rademacher convergent series** giving $p(n)$ exactly; statement of how the same Hardy-Littlewood circle method attacks Waring's problem and Goldbach-type problems. Apostol Ch. 14 (and the eta-transformation from Ch. 3 of Apostol *Modular Functions and Dirichlet Series*).
- **prereqs:** `21.16.01` (partition generating function / pentagonal theorem), `06.01.15` (Gamma / saddle-point and Stirling asymptotics), `21.04.01` (modular forms on $\mathrm{SL}_2(\mathbb Z)$ — eta transformation / modularity input)
- **chapter:** `partitions-circle-method` — `section: number-theory`, `chapter: partitions-circle-method`
- **dedup:** the $p(n)$ asymptotic is *stated without derivation* as a Stirling example in `06.01.15`; the eta function's modularity is touched in `21.04.01` but never applied to partitions. The circle method as a technique exists nowhere. **This audit owns 21.16.** (Coordinate: if Iwaniec-Kowalski's 21.15 exponential-sums audit also proposes the Hardy-Littlewood circle method for Waring/Goldbach, scope that toward additive bases there and keep this unit partition-centric.)

---

## COVERED

- **Riemann zeta $\zeta(s)$, Euler product, analytic continuation, functional equation** — `21.03.01`. (Apostol Ch. 11-12.)
- **Dirichlet series & Euler products (general theory: abscissa of convergence, products of Dirichlet series = convolution of coefficients)** — partially `21.03.01`/`21.03.02` (Euler product derived from complete multiplicativity + unique factorisation; absolute/conditional convergence half-planes). The *coefficient-convolution ↔ Dirichlet-series-product* dictionary is the natural bridge from gap `21.11.01`; flagged there, not a separate gap.
- **Dirichlet characters mod $m$; the orthogonality relations** — `21.03.02` (both orthogonality relations stated; first proved). (Apostol Ch. 6.)
- **Dirichlet's theorem on primes in arithmetic progressions; $L(1,\chi)\neq0$** — `21.03.02` (analytic proof) + `21.03.04` (Dirichlet density $1/\varphi(m)$ form). (Apostol Ch. 7.)
- **The analytic Prime Number Theorem $\pi(x)\sim x/\log x$ (zeta non-vanishing on $\Re s=1$, zero-free region)** — `21.03.01` (Hadamard / de la Vallée Poussin route). The Davenport→21.12 audit owns the deepened standalone PNT unit; flag overlap there.
- **Gauss sums (quadratic)** — `21.01.07` (quadratic Gauss sum $\tau(\chi_p)$, sign determination, reciprocity proof) + `21.02.02` (reciprocity via Gauss sums). General Gauss/Kloosterman sums for `L`-function root numbers are the Iwaniec-Kowalski→21.15 audit's territory.
- **Euler totient $\varphi$, Fermat-Euler, structure of $(\mathbb Z/n)^\times$, primitive roots** — `21.01.04`, `21.01.05`. (Apostol Ch. 5, 10.)
- **Quadratic residues, Legendre symbol, quadratic reciprocity** — `21.01.06`, `21.01.07`. (Apostol Ch. 9.)
- **Abel summation / summation-by-parts as an analysis tool** — `02.03.03`, `06.01.27`. (Its number-theoretic *application* is gap `21.11.02`.)
- **Möbius function in a specific application** — `21.02.01` (irreducible-polynomial count over $\mathbb F_q$). (The general theory is gap `21.11.01`.)
- **Pentagonal number theorem as a theta specialisation** — `06.01.31` (one-line). (Its partition-theoretic development is gap `21.16.01`.)
- **Hardy-Ramanujan $p(n)$ asymptotic as a Stirling example** — `06.01.15` (stated, not derived). (Derivation is gap `21.16.02`.)

## OUT OF SCOPE

- **The large sieve / sieve methods** (Selberg sieve, Brun, Bombieri-Vinogradov) — Apostol does not treat sieves; this is the Montgomery-Vaughan / Iwaniec-Kowalski → 21.14 territory. Not an Apostol gap.
- **Exponential sums (Weyl, van der Corput, Vinogradov; Kloosterman sums)** — Apostol touches Gauss sums only; full exponential-sum theory is Iwaniec-Kowalski → 21.15. Van der Corput / stationary phase already partly at `02.20.05`. Not an Apostol gap.
- **Analytic mean-value theorems of arithmetic functions (Wirsing, Halász, Selberg-Delange)** — beyond Apostol's elementary averaging; Montgomery-Vaughan → 21.11 analytic side. Not an Apostol gap.
- **The deepened standalone analytic PNT unit and the explicit formula / zero counting** — Davenport → 21.12. Covered in essence at `21.03.01`; defer the standalone deepening to that audit.
- **Periodic arithmetic functions, Ramanujan sums $c_q(n)$, finite Fourier analysis (Apostol Ch. 8)** — borderline. Folds naturally into `21.11.01` (arithmetic functions) or the characters unit `21.03.02`; not raised as a separate gap to keep the 21.11 slate tight. Flag for the Montgomery-Vaughan 21.11 audit if it wants a dedicated finite-Fourier unit.
- **Partitions as symmetric-group / representation-theory data** — `07.05.01-02` (Young diagrams, partitions ↔ irreps of $S_n$). Distinct combinatorial use; the analytic-NT partition *counting* is the in-scope gap.

---

**Counts:** genuine gaps = 5 (3 in 21.11, 2 in 21.16) · COVERED = 11 blocks · OUT OF SCOPE = 6 blocks.
