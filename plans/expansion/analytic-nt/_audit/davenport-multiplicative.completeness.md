# Re-audit (completeness): Davenport — *Multiplicative Number Theory* (3rd ed., GTM 74)

source_book: davenport-multiplicative
source_curriculum: analytic-nt
spine: analytic-nt (extends `content/21-number-theory`)
re-audited: 2026-06-05
context: Spine 3 (analytic number theory) fully produced; chapters 21.11-21.16 now shipped.

## Purpose

Re-audit Davenport against the NOW-LARGER corpus. The original gap file
(`davenport-multiplicative.gaps.md`, 2026-06-05) identified 9 genuine gaps; all 9
have since been produced. This pass re-checks every Davenport headline theorem
against the shipped corpus to find anything STILL genuinely absent.

## Original 9 gaps — all now COVERED on disk

| original gap | title | shipped unit |
|---|---|---|
| 21.12.01 | Chebyshev $\theta,\psi$, von Mangoldt $\Lambda$, $-\zeta'/\zeta=\sum\Lambda n^{-s}$ | **21.12.01** von-mangoldt-psi-zeta-logarithmic-derivative |
| 21.12.02 | Perron's formula / Mellin inversion | **21.11.04** perron-formula-mellin-inversion (dedicated unit) + applied in **21.12.02** |
| 21.12.03 | PNT via contour integration | **21.12.02** prime-number-theorem-contour-integration |
| 21.12.04 | Effective HdlVP zero-free region + $O(xe^{-c\sqrt{\log x}})$ | **21.12.03** effective-zero-free-region-error-term |
| 21.12.05 | Riemann–von Mangoldt explicit formula + $N(T)$ count | **21.12.04** riemann-von-mangoldt-explicit-formula |
| 21.13.01 | Zero-free regions for $L(s,\chi)$, Siegel/exceptional zero | **21.13.01** zero-free-regions-l-functions-siegel-zeros |
| 21.13.02 | Siegel's theorem $L(1,\chi)\gg_\epsilon q^{-\epsilon}$ | **21.13.02** siegel-theorem-exceptional-zero |
| 21.13.03 | PNT in APs / Siegel–Walfisz | **21.13.03** prime-number-theorem-arithmetic-progressions-siegel-walfisz |
| 21.13.04 | Polya–Vinogradov inequality | **21.13.04** polya-vinogradov-inequality |

Plus a bonus unit **21.13.05** (approximate functional equation / convexity bound)
beyond Davenport's core.

## Verification of the load-bearing details

- **Perron's formula** is proven in its own unit **21.11.04**, not merely folded
  into the PNT proof — stronger coverage than the original gap requested.
- **$N(T)$ Riemann–von Mangoldt zero-counting** $N(T)=(T/2\pi)\log(T/2\pi)-T/2\pi+O(\log T)$
  via the argument principle on $\xi$ is in **21.12.04** (Master + locator).
- **Explicit formula for $\psi(x,\chi)$** (the $L$-function analogue driving PNT in APs)
  is in **21.13.03**.
- **General Gauss-sum completion** $|\tau(\chi)|=\sqrt q$ for primitive $\chi$ (the
  device behind Polya–Vinogradov, not just the quadratic Gauss sum of 21.02.02)
  is in **21.13.04**.
- **$L(s,\chi)$ functional equation** — **21.03.02** + invoked across 21.13.01/02/03/05.

## Previously OUT-OF-SCOPE items now also COVERED elsewhere

These were correctly excluded from Davenport's analytic core in the original
audit; the larger corpus now carries them under their proper chapters, so they
remain non-gaps for this book:

- Large sieve inequality / Brun–Titchmarsh — **21.14.01**.
- Bombieri–Vinogradov — **21.14.02**.

## STILL-absent headline theorems of real value

None. Every theorem Davenport proves in full — the von Mangoldt/$\psi$ apparatus,
Perron, the contour PNT, the effective zero-free region and error term, the
explicit formula and $N(T)$, zero-free regions and Siegel zeros for $L(s,\chi)$,
Siegel's theorem, Siegel–Walfisz, and Polya–Vinogradov — now has a dedicated unit
with a full proof. No new gap slot in 21.1x is warranted.

## DRY?
DRY — 0 new gaps; all 9 original Davenport gaps shipped (21.12.01-04, 21.13.01-04) and re-verified covered.
