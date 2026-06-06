# Completeness re-audit — Montgomery & Vaughan, *Multiplicative Number Theory I: Classical Theory*

Re-audited 2026-06-05 against the **now-larger** corpus (Spine 3 fully produced: chapters 21.11–21.16 shipped).
Method: re-list MV-I headline theorems, grep each against the corpus and the new 21.11/21.14 units, default COVERED. This supersedes the production-time `montgomery-vaughan-multiplicative.gaps.md` (all 6 of its gaps are now shipped).

## Disposition of the 6 prior gaps (now shipped)

| Prior gap (proposed id) | Theorem | Landed at | Status |
|---|---|---|---|
| Gap 1 (21.11.03) | Summatory functions / Dirichlet hyperbola, divisor & totient & squarefree asymptotics | **21.11.02** *Average Orders and the Summation Toolkit* (+ 21.11.01 convolution/Möbius) | COVERED — id reassigned; 21.11.03 became Chebyshev–Mertens |
| Gap 2 (21.11.04) | Perron's formula / Mellin inversion | **21.11.04** *Perron's Formula and Mellin Inversion* | COVERED |
| Gap 3 (21.14.01) | Large sieve inequality + Brun–Titchmarsh | **21.14.01** *The Large Sieve Inequality and Brun–Titchmarsh* | COVERED |
| Gap 4 (21.14.02) | Bombieri–Vinogradov | **21.14.02** *The Bombieri–Vinogradov Theorem* | COVERED |
| Gap 5 (21.14.03) | Mean values of multiplicative functions (Halász–Wirsing) | **21.14.03** *Mean Values of Multiplicative Functions: Halász's Theorem* | COVERED |
| Gap 6 (21.11.05) | Selberg–Delange method | **21.11.05** *The Selberg–Delange Method* | COVERED |

## Headline-theorem coverage map (full corpus)

- **Euler product / Dirichlet-series convergence (Ch. 1)** → 21.03.01 + 21.11.01.
- **Möbius / Dirichlet convolution / Abel summation (§§1.2–1.3)** → 21.11.01, 21.11.02.
- **Chebyshev bounds, Bertrand, Mertens' three theorems (Ch. 2)** → 21.11.03 (dedicated).
- **Average orders: divisor $d(n)$ (hyperbola, $O(\sqrt x)$), $\sigma$, $\varphi$, squarefree density, Voronoi exponent (Ch. 2)** → 21.11.02.
- **Perron / Mellin inversion, Phragmén–Lindelöf strips (Ch. 5)** → 21.11.04.
- **Selberg–Delange / Landau–Selberg–Sathe ($\omega(n)=k$), Erdős–Kac connection (Ch. 5)** → 21.11.05.
- **Dirichlet characters + both orthogonality relations, $L(1,\chi)\neq0$, Dirichlet's theorem (Ch. 4, 9)** → 21.03.02 + 21.03.04.
- **Functional equation of $\zeta$ and $L(s,\chi)$, Gauss sums (Ch. 10)** → 21.03.01 + 21.03.02.
- **PNT (analytic, zero-free region, $\psi(x)\sim x$) (Ch. 6)** → 21.12.01–03.
- **Riemann–von Mangoldt explicit formula, $N(T)$ (Ch. 12)** → 21.12.04.
- **Zero-free regions / Siegel zeros / Siegel's theorem (Ch. 11)** → 21.13.01, 21.13.02.
- **PNT in AP, Siegel–Walfisz (Ch. 11)** → 21.13.03.
- **Pólya–Vinogradov inequality (Ch. 9)** → 21.13.04 (dedicated).
- **Approximate functional equation, analytic conductor, convexity bound (Ch. 5, 9)** → 21.13.05.
- **Large sieve: optimal constant $N+\delta^{-1}$ / $N+Q^2$, duality principle, Beurling–Selberg majorant, arithmetic large sieve, sifted-set bound, Brun–Titchmarsh (Ch. 7)** → 21.14.01.
- **Bombieri–Vinogradov, Vaughan identity (Type I/II), Barban–Davenport–Halberstam (easier average variant, noted) (Ch. 9)** → 21.14.02.
- **Halász, Wirsing, Delange, Erdős–Wintner mean-value problem (Ch. 4, 6)** → 21.14.03.

## Items checked for residual gaps — all dispositioned as NOT new gaps

- **Montgomery–Vaughan / Hilbert-type inequality** — not a separate headline; it is the dual bilinear bound closed by the Beurling–Selberg majorant inside 21.14.01's optimal-constant proof. COVERED in substance.
- **Barban–Davenport–Halberstam** — appears in 21.14.02 as the strictly easier (average-over-$a$) variant of B–V. Not an MV-I standalone headline; no dedicated unit warranted.
- **Turán–Kubilius inequality / Hardy–Ramanujan normal order of $\omega(n)$** — grep: 0 dedicated hits in analytic-NT. Genuinely *absent* as a standalone unit, BUT this is **not an MV-I headline**: in MV-I the variance bound for additive functions sits in the exercises/§2 asides, not on the spine (it is Tenenbaum/Elliott territory). The Erdős–Kac CLT it feeds is already in the probability spine 37.* and is cross-referenced from 21.11.05. Not a genuine MV gap.
- **Dirichlet polynomials / mean & large values (MV Ch. 8 of Vol. II material)** — beyond MV-I "classical" scope; deferred to an Iwaniec–Kowalski / later audit, consistent with the prior file's OUT OF SCOPE.

## New gaps

**None.** Every MV-I headline theorem now maps to a shipped unit. The only zero-grep item (Turán–Kubilius / normal order) is not an MV-I spine result and is already served by the probability spine.

## DRY?

DRY verdict: **YES — DRY, 0 new gaps.** Montgomery & Vaughan *Multiplicative Number Theory I* is fully covered by the post-Spine-3 corpus; all 6 production-time gaps shipped, and re-grepping the enlarged corpus surfaces no genuinely-absent headline theorem of real value.
