# Completeness re-audit — Stein-Shakarchi *Functional Analysis* (PL IV) + *Real Analysis* (PL III), harmonic-analysis payload

- **source_book:** `stein-shakarchi-harmonic`
- **source_curriculum:** `pde-harmonic`
- **target chapters:** `content/02-analysis/19-calderon-zygmund-singular-integrals/`, `content/02-analysis/20-littlewood-paley-interpolation/`
- **date:** 2026-06-05
- **predecessor:** `stein-shakarchi-harmonic.gaps.md` (7 gaps proposed). This is the post-production completeness pass against the NOW-larger corpus.

## What changed since the first audit

The first audit's 7 gaps were proposed into empty chapter directories. **All 7 are now shipped as full Master-level units** (`status: shipped`, complete Beginner→Master arc, Advanced-results + Full-proof-set + Bibliography sections):

| Prior gap | Shipped unit |
|---|---|
| Gap 1 — HL maximal theorem on R^n / Vitali | `02.19.01-hardy-littlewood-maximal-function-vitali-covering` |
| Gap 2 — CZ decomposition + CZ operators | `02.19.02-calderon-zygmund-decomposition`, `02.19.03-calderon-zygmund-singular-integral-operators-lp` |
| (Riesz transforms, split out) | `02.19.04-riesz-transforms` |
| (Riesz/Bessel potentials + HLS, split out) | `02.19.05-riesz-bessel-potentials-hardy-littlewood-sobolev` |
| Gap 3 — BMO / John-Nirenberg | `02.20.01-bmo-john-nirenberg` |
| Gap 4 — Hardy spaces H^p / atomic | `02.20.02-hardy-spaces-atomic-decomposition` |
| Gap 5 — Littlewood-Paley / square function | `02.20.03-littlewood-paley-square-function` |
| Gap 6 — Fourier multipliers / Hörmander-Mikhlin | `02.20.04-fourier-multipliers-hormander-mikhlin` |
| Gap 7 — oscillatory integrals / van der Corput | `02.20.05-oscillatory-integrals-stationary-phase-van-der-corput` |

The two chapter audits (this one + `stein-singular-integrals`) converged cleanly onto the same 10-unit layout with no duplication.

## Headline-theorem re-verification against the larger corpus

Every Stein-Shakarchi harmonic-analysis headline is now COVERED. Re-verified by body grep, not just filename:

- **Riesz-Thorin / Marcinkiewicz / Hausdorff-Young interpolation** — `02.07.06` (Thms 8-10). Unchanged.
- **Hardy-Littlewood maximal theorem on R^n, Vitali covering, weak-(1,1), Lebesgue differentiation** — `02.19.01`.
- **Calderón-Zygmund decomposition (good/bad, stopping-time cubes)** — `02.19.02`.
- **CZ singular-integral operators, Hörmander condition, L^2 ⟹ weak-(1,1) ⟹ L^p** — `02.19.03`.
- **Cotlar's inequality / maximal truncation T\*, a.e. convergence of principal values** — `02.19.03` Thm 5 (full statement, T\*f ≤ C(M(Tf)+Mf)).
- **Riesz transforms, multiplier −iξ_j/|ξ|, ∑R_j²=−I, elliptic L^p estimates** — `02.19.04`.
- **Riesz/Bessel potentials, Hardy-Littlewood-Sobolev, fractional integration** — `02.19.05` (also `02.13.02`).
- **BMO, John-Nirenberg exponential inequality, sharp maximal M^#** — `02.20.01`.
- **Fefferman-Stein sharp maximal theorem ‖f‖_p ≈ ‖M^#f‖_p** — `02.20.01` Thm 2.
- **Fefferman duality (H^1)\* = BMO** — `02.20.01` Thm 4 AND `02.20.02` Thm 4 (both directions discussed; easy direction proved as exercise).
- **Carleson-measure characterization of BMO (Poisson extension)** — `02.20.01` Thm 5.
- **Real-variable Hardy spaces H^p, grand/non-tangential/atomic/Riesz characterizations, equivalence theorem** — `02.20.02` Thms 1-4.
- **Coifman-Weiss spaces of homogeneous type / atomic H^p on doubling quasimetric** — `02.20.02` Thm 6.
- **Littlewood-Paley square function, ‖f‖_p ∼ ‖Sf‖_p, Khintchine/Rademacher randomization, g-function** — `02.20.03`.
- **Fourier multipliers, Hörmander-Mikhlin theorem** — `02.20.04`.
- **Oscillatory integrals, van der Corput lemmas, stationary phase** — `02.20.05`.
- **Fourier transform / Plancherel / Schwartz / tempered distributions** — `02.10.04`.
- **Hilbert transform / conjugate function on T (M. Riesz)** — `02.10.01` Thm 10.

## Candidates examined and rejected as new gaps

- **Cotlar-Stein almost-orthogonality LEMMA (as a standalone theorem).** Almost-orthogonality is invoked as an L^2-verification tool in `02.19.03` and `02.20.03`, and Cotlar's *inequality* (maximal truncation) is a full Master theorem in `02.19.03`. The bare almost-orthogonality lemma is deep operator-theory plumbing, not a Stein-Shakarchi *Functional/Real Analysis* headline (it belongs to the operator-theoretic later literature). Not a gap.
- **Muckenhoupt A_p weighted norm inequalities.** Genuinely absent from the real-analysis corpus (the only `A_p`/weighted hits are an unrelated conformal-Laplacian unit and an organic-chemistry unit). BUT Stein-Shakarchi's *Functional Analysis* and *Real Analysis* volumes do not headline A_p weight theory — it is Stein *Singular Integrals* (1993) / Duoandikoetxea / Grafakos territory, and the parallel `stein-singular-integrals` audit (1970 volume) also does not claim it. Not attributable to THIS book; not a gap for this audit. (Flag for a future dedicated weighted-theory source if one is ever added.)
- **Stein spherical maximal theorem.** Appears only as a cross-reference in `02.19.04`. It is from Stein's later work, not the Stein-Shakarchi PL III/IV volumes. Out of scope for this book.
- **Wavelets / Calderón reproducing formula / frames.** Flagged "lower priority, not proposed" in the first audit; touched only lightly by Stein-Shakarchi and not a headline theorem. Still not a gap.

## OUT OF SCOPE (unchanged from first audit — do not re-propose)

- **Bochner-Riesz conjecture / restriction-extension (Stein-Tomas) / Kakeya** — research-frontier; present only as statements inside `02.20.04`/`02.20.05` and the `02.21-dispersive-strichartz` chapter. Per the audit instructions, the full restriction/Bochner-Riesz machinery is deliberately deferred and is NOT re-proposed.
- **Abstract interpolation-functor theory (Calderón complex method, K-method, Besov/Triebel-Lizorkin scales)** — Bergh-Löfström territory; the named theorems are covered in `02.07.06`.
- **Complex-analytic H^p of the disc / Nevanlinna class** — adjacent to 06-riemann-surfaces; the real-variable R^n theory is the in-scope part and is covered.
- **Ergodic / Birkhoff maximal theorems** — different lineage, already at `37.02.03`.

## DRY?

**YES — DRY. 0 new genuine gaps.** All 7 prior gaps shipped as full units; every Stein-Shakarchi harmonic-analysis headline theorem (through the Fefferman/Fefferman-Stein/Cotlar/Coifman-Weiss apparatus) is now COVERED at Master level across `02.07.06`, `02.10.*`, `02.19.01-05`, and `02.20.01-05`. The only structurally-absent item (Muckenhoupt A_p weights) is not a headline of this book and is correctly deferred; the restriction/Bochner-Riesz frontier remains intentionally out of scope.

### Summary
- **New genuine gaps: 0**
- **Prior gaps now shipped: 7 (10 units)**
- **Verdict: DRY**
