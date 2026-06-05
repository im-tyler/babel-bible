# Spine 1 (probability) — collision-checked production plan

Source: the 6 audit gap files in `_audit/`. Parallel auditors couldn't see each other, so
ids were reconciled here. **42 units**, produced in 6 dependency-ordered waves of 7. Peers
for quality-matching: `02.15.02` (Ito integral) + `02.07.08` (Radon-Nikodym); chapter-
specific peers noted per wave.

## Dedup / collision resolution
- DROP Durrett `37.04.01` (martingale convergence+stopping) → superseded by Williams `37.04.01–03`.
- DROP Durrett `37.05.01` (one MC unit) → superseded by Norris `37.05.01–12`.
- DROP Durrett `37.07.01` (Cramér+LDP) → superseded by Dembo-Zeitouni `37.07.01–11`.
- KEEP Durrett `37.08.01` (Wigner); AGZ coordinated, starts `37.08.02`.
- ADD `37.01.01` (probability space + Kolmogorov extension/consistency theorem) — genuinely
  absent corpus-wide (02.07 has Carathéodory, not the projective-limit construction); the
  anchor prereq for 37.05.*, 37.07.*.

## Master unit list (id → title → book)
- 37.01.01 Probability spaces & the Kolmogorov extension theorem — [anchor]
- 37.02.01 Borel–Cantelli + Kolmogorov 0-1 law — durrett
- 37.02.02 Strong law of large numbers — durrett
- 37.03.01 Characteristic functions, inversion, Lévy continuity — durrett
- 37.03.02 Lindeberg–Feller CLT — durrett
- 37.04.01 Discrete martingales, stopping times, optional stopping — williams
- 37.04.02 Upcrossing inequality & a.s. martingale convergence — williams
- 37.04.03 Doob inequalities, uniform integrability, L^p convergence — williams
- 37.05.01 Markov property, transition matrices, Chapman–Kolmogorov — norris
- 37.05.02 Class structure, irreducibility, periodicity — norris
- 37.05.03 Hitting probabilities & expected hitting times — norris
- 37.05.04 Strong Markov property & recurrence/transience — norris
- 37.05.05 Invariant measures & distributions; positive/null recurrence — norris
- 37.05.06 Convergence to equilibrium (coupling proof) — norris
- 37.05.07 Ergodic theorem & detailed balance — norris
- 37.05.08 Continuous-time chains I: Q-matrices, jump chains, holding times — norris
- 37.05.09 Continuous-time chains II: Kolmogorov backward/forward equations — norris
- 37.05.10 CT recurrence, invariant distributions, convergence — norris
- 37.05.11 The Poisson process: equivalent characterizations — norris
- 37.05.12 Birth–death processes & queueing chains — norris
- 37.06.01 Continuous local martingales, quadratic variation, Doob–Meyer — legall
- 37.06.02 Brownian martingale representation theorem — legall
- 37.06.03 Brownian local time & Tanaka's formula — legall
- 37.07.01 The large deviation principle: rate functions, bounds, goodness — dembo-zeitouni
- 37.07.02 Cramér's theorem & the Legendre–Fenchel rate function — dembo-zeitouni
- 37.07.03 The Legendre–Fenchel transform & convex duality — dembo-zeitouni
- 37.07.04 The Gärtner–Ellis theorem — dembo-zeitouni
- 37.07.05 Sanov's theorem & the LDP for empirical measures — dembo-zeitouni
- 37.07.06 Relative entropy as rate function; Donsker–Varadhan variational formula — dembo-zeitouni
- 37.07.07 Varadhan's integral lemma & the Laplace principle — dembo-zeitouni
- 37.07.08 The contraction principle — dembo-zeitouni
- 37.07.09 Exponential tightness & the Dawson–Gärtner projective limit — dembo-zeitouni
- 37.07.10 Schilder's theorem (small-noise LDP for Brownian motion) — dembo-zeitouni
- 37.07.11 Freidlin–Wentzell theory (small-noise diffusions) — dembo-zeitouni
- 37.08.01 Wigner semicircle law & the moment method — durrett
- 37.08.02 Stieltjes transform & semicircle via the resolvent — agz
- 37.08.03 Gaussian ensembles GOE/GUE/GSE & joint eigenvalue density — agz
- 37.08.04 Determinantal point processes & sine-kernel bulk universality — agz
- 37.08.05 Airy kernel & Tracy–Widom edge law — agz
- 37.08.06 Largest eigenvalue / operator-norm bound — agz
- 37.08.07 Spectral concentration (log-Sobolev / Herbst) — agz
- 37.08.08 Free probability: freeness, free convolution, R-transform — agz

## Wave schedule (each wave: produce in parallel, integrate dep-order, commit, build_lenses)
Same-wave prereqs go in `## Connections`, NOT frontmatter (not yet on disk).
- WAVE 1: 37.01.01, 37.02.01, 37.02.02, 37.03.01, 37.04.01, 37.06.01, 37.07.03
- WAVE 2: 37.03.02, 37.04.02, 37.04.03, 37.05.01, 37.06.02, 37.07.01, 37.07.06
- WAVE 3: 37.05.02, 37.05.08, 37.06.03, 37.07.02, 37.07.05, 37.07.07, 37.08.01
- WAVE 4: 37.05.03, 37.05.04, 37.05.09, 37.05.11, 37.07.04, 37.07.08, 37.08.02
- WAVE 5: 37.05.05, 37.05.06, 37.07.09, 37.08.03, 37.08.04, 37.08.06, 37.08.07
- WAVE 6: 37.05.07, 37.05.10, 37.05.12, 37.07.10, 37.07.11, 37.08.05, 37.08.08

## Status
- [x] Wave 1  [x] Wave 2  [x] Wave 3  [x] Wave 4  [x] Wave 5  [ ] Wave 6
- [ ] COMPLETENESS re-audit (loop-until-dry)
