# Completeness Re-Audit — Brin & Stuck, *Introduction to Dynamical Systems* (CUP, 2002)

- **source_book:** `brin-stuck`
- **source_curriculum:** `dynamics`
- **date:** 2026-06-05
- **context:** Spine 4 fully produced. Re-audit against the NOW-larger `38-dynamics`
  corpus (38.01–38.07 all shipped). The prior `brin-stuck.gaps.md` proposed 9 units;
  this pass checks whether any Brin–Stuck headline theorem is *still* genuinely absent.

## Method

Took the 9 gaps from `brin-stuck.gaps.md` plus Brin–Stuck's headline theorems and
grepped each against the shipped corpus. 8 of the 9 proposed units shipped verbatim
(38.01.01–05, 38.02.01–03). The 9th (proposed **38.02.04** — topological entropy of a
subshift + coding) carried an explicit **merge flag**: "if Walters' 38.06 already
proposes the subshift word-growth entropy, merge this into that unit and drop 38.02.04."
Verified whether that merge target now exists.

## Headline-theorem coverage map

| Brin–Stuck headline result | Status | Unit |
|---|---|---|
| Topological system / orbits / ω-limit / conjugacy | COVERED | `38.01.01` |
| Minimality (Zorn), recurrence, non-wandering set | COVERED | `38.01.02` |
| Transitivity, Birkhoff transitivity thm, mixing, Devaney/Banks | COVERED | `38.01.03` |
| Circle rotation: minimality + unique ergodicity + equidistribution | COVERED | `38.01.04` |
| Poincaré rotation number; Denjoy theorem | COVERED | `38.01.05` |
| Full shift / subshifts; Cantor structure; σ homeomorphism | COVERED | `38.02.01` |
| SFT, transition matrix, irreducibility⇔transitive, primitive⇔mixing, tr Aⁿ | COVERED | `38.02.02` |
| Perron–Frobenius (general non-neg / primitive), SFT growth = log λ(A) | COVERED | `38.02.03` |
| Topological entropy of a subshift = log λ(A) (word-growth) | COVERED | `38.06.01` (full proof, Prop. 3) + `38.02.03` |
| Coding: higher-block recoding, SFT ≅ edge shift, semiconjugacy | COVERED | `38.02.02` (Thm part (a), Prop. 5) |
| Markov partitions; doubling-map & cat-map coded to an SFT | COVERED | `38.06.01` (worked exs) + `38.03.01` + `38.03.04` (Bowen) |

### Why the proposed 38.02.04 is no longer a gap

Its four headline clusters are all in the shipped corpus:

1. **Word-growth topological entropy = log λ(A).** `38.06.01` defines
   $h_{\mathrm{top}}(\sigma|_{X_A}) = \lim \tfrac1n \log W_n$ via separated/spanning sets,
   proves $W_n = \mathbf 1^\top A^{n-1}\mathbf 1$ and the Perron-Frobenius growth
   $= \log\lambda(A)$ in a full proof (Proposition 3 / Advanced "model evaluations").
   `38.02.03` independently carries the SFT growth-rate = $\log\lambda(A)$ statement.
2. **Coding / higher-block recoding / SFT ≅ edge shift.** `38.02.02` proves every SFT is
   conjugate to a 1-step SFT and to an edge shift (Theorem part (a), Proposition 5).
3. **Markov-partition semiconjugacy.** `38.03.04` (shadowing → Bowen Markov partitions →
   semiconjugacy from an SFT onto a basic set) and `38.03.01` (cat map as the model Anosov
   system, coded by an SFT).
4. **Doubling-map and cat-map worked codings.** `38.06.01` computes both
   ($\log 2$, $\log\tfrac{3+\sqrt5}{2}$) explicitly.

The merge flag fired exactly as written: 38.06.01 owns the general topological-entropy
machinery and the subshift word-growth specialization, so a standalone 38.02.04 would be
pure duplication.

## NEW GENUINE GAPS

**None.** Every Brin–Stuck headline theorem of real value now lands on a shipped unit.

The remaining Brin–Stuck content not given its own unit is correctly out of scope or
folded, unchanged from the prior audit:
- Hyperbolicity / Anosov / structural stability / horseshoe — owned by `38.03.*`.
- Measure-theoretic & smooth ergodic theory (Birkhoff/von Neumann, mixing-spectral,
  Oseledets, Pesin) — owned by `38.04`–`38.05`, `38.07`.
- General entropy machinery (Bowen-Dinaburg, variational principle, pressure) — `38.06.*`.
- Continuous-time qualitative ODE theory (Poincaré–Bendixson, bifurcations) — `02.12.*`.
- Gauss map / continued-fraction map worked example — cross-ref `21.01.08`, folded.

## DRY?

**DRY — 0 new gaps.** All 9 prior-audit proposals are resolved: 8 shipped as proposed
(38.01.01–05, 38.02.01–03) and the 9th (38.02.04) is fully subsumed by the now-shipped
38.06.01 / 38.02.02 / 38.02.03 / 38.03.* exactly per its own merge flag. No standalone
unit should be created; doing so would duplicate shipped content.
