# Completeness re-audit — Stein, *Singular Integrals and Differentiability Properties of Functions* (PUP, 1970)

- **source_book:** `stein-singular-integrals`
- **source_curriculum:** `pde-harmonic`
- **target chapters:** `content/02-analysis/19-calderon-zygmund-singular-integrals/`,
  `content/02-analysis/20-littlewood-paley-interpolation/`
- **date:** 2026-06-05
- **context:** Re-audit after Spine 2 production. The original gap-audit
  (`stein-singular-integrals.gaps.md`) was written against *empty* scaffold
  directories; all six of its proposed gaps have since shipped. This pass
  re-checks every Stein headline theorem against the now-larger corpus.

## Headline-theorem ledger (Stein 1970, by chapter)

| Stein chapter / theorem | Corpus unit | Status |
|---|---|---|
| Ch. I — HL maximal function, Vitali 5r covering, weak-(1,1), strong-(p,p) | `02.19.01` | COVERED |
| Ch. I §3 — Calderón–Zygmund decomposition (g+b, stopping-time cubes) | `02.19.02` | COVERED |
| Ch. II — CZ singular-integral operators; L² + Hörmander ⟹ weak-(1,1) ⟹ Lᵖ | `02.19.03` | COVERED |
| Ch. II — Cotlar inequality / maximal truncation T* ≤ M, a.e. convergence of p.v. | `02.19.03` (Thm 5) | COVERED |
| Ch. III — Riesz transforms, multiplier −iξⱼ/|ξ|, ΣRⱼ²=−I, Hessian Lᵖ estimate | `02.19.04` | COVERED |
| Ch. III — rotational-covariance characterization of the Riesz vector | `02.19.04` (Thm 4 / Prop 5) | COVERED |
| Ch. IV — Littlewood–Paley g-function, area integral, square-function Lᵖ equiv. | `02.20.03` | COVERED |
| Ch. IV — Hörmander–Mikhlin / Marcinkiewicz multiplier theorem | `02.20.04`; also `02.20.03` Thm 2 | COVERED |
| Ch. V — Riesz potentials Iₐ, HLS inequality (Hedberg/maximal route) | `02.19.05` | COVERED |
| Ch. V — Bessel potentials Jₐ, Lᵖ_α = Jₐ(Lᵖ) ≅ Sobolev Wᵅ·ᵖ | `02.19.05` | COVERED |
| Ch. VI — BMO preview / John–Nirenberg | `02.20.01` (full, shipped beyond preview) | COVERED |
| (Fefferman–Stein) H¹ / BMO duality, atomic decomposition | `02.20.02`, `02.20.01` | COVERED |
| Interpolation: Riesz–Thorin, Marcinkiewicz, Hausdorff–Young | `02.07.06` | COVERED |
| Fourier transform / Plancherel / Schwartz / tempered distributions | `02.10.04` | COVERED |
| Hilbert transform & conjugate function on 𝕋 (M. Riesz) | `02.10.01` | COVERED |
| Lebesgue differentiation theorem | `02.04.04` (+ `02.19.01`) | COVERED |

Vector-valued (Hilbert-space-valued) CZ theory — the "almost-orthogonality" /
Cotlar's-lemma path and the ℓ²-valued decomposition that powers Littlewood–Paley
— is present as named, proved content inside `02.19.03` and `02.20.03`, not merely
gestured at. The square-function unit additionally carries the Khintchine
randomization route and the continuous g / Lusin-area variants.

## GENUINE GAPS (new, after re-audit)

**None.**

Every Stein 1970 headline theorem of real value now resolves to a shipped unit.
The two items the original audit deliberately left un-spun (Ch. VIII pointwise /
approximate differentiability a.e., and the full H^p area-integral theory of
Stein's *later* work) remain correctly out of scope:

- **Ch. VIII — approximate/p-th-order differentiability a.e.** is a niche
  consequence of the maximal theorem; it is folded as remarks into `02.19.01`
  (Lebesgue-point / differentiability discussion) and does not rise to a
  headline theorem warranting a standalone unit. Quality-over-quantity holds.
- **Full H^p space theory / non-tangential maximal & area-integral
  characterization of H^p** belongs to Fefferman–Stein 1972 and Stein–Weiss,
  not the 1970 *Singular Integrals* volume; the H¹/BMO slice that Stein
  previews is already shipped (`02.20.01`/`02.20.02`). Not a gap for this book.
- **BMO / John–Nirenberg**, originally deferred to the Stein–Shakarchi audit as
  a mere "preview", has in fact shipped in full at `02.20.01` — so even the one
  item this audit hedged on is now closed, not open.

## OUT OF SCOPE (unchanged)

- Carleson–Hunt a.e. convergence, time-frequency, bilinear Hilbert transform —
  later-volume / different-book; touched in `02.10.01`.
- Restriction/extension, Strichartz — `02.21` (`dispersive-strichartz`), a
  different book's audit.

## DRY?

**DRY verdict: YES — this book is DRY. 0 new gaps.** The corpus fully
absorbs Stein 1970's headline content across `02.19.01–05`, `02.20.01–04`, and
the interpolation/Fourier anchors `02.07.06` / `02.10.01` / `02.10.04`. No
genuinely-absent headline theorem of value remains; re-producing any of the
above would duplicate shipped units. Do not queue further work for this source.
