# Completeness re-audit — Walters, *An Introduction to Ergodic Theory* (Springer GTM 79, 1982)

- **source_book:** `walters-ergodic`
- **source_curriculum:** `dynamics`
- **date:** 2026-06-05 (re-audit after Spine 4 production)
- **predecessor:** `walters-ergodic.gaps.md` (2026-06-05) proposed 7 gaps; all produced.
- **corpus delta since gaps audit:** `38.04.01/02`, `38.05.01/02`, `38.06.01/02/03/04` all shipped,
  plus sibling chapters `38.01-topological-dynamics`, `38.02-symbolic-dynamics`,
  `38.07-smooth-ergodic-theory` (Brin–Stuck / Katok–Hasselblatt spines). The ergodic theorems
  themselves remain at `37.02.03`.

## Method

Enumerated Walters' headline theorems (Ch. 1 measure-preserving / recurrence, Ch. 2–3 spectral /
isomorphism, Ch. 4 entropy, Ch. 5–6 topological dynamics / unique ergodicity, Ch. 8 topological
entropy, Ch. 9 pressure / variational principle). Grepped each named result against the now-larger
corpus and read the relevant shipped units to confirm each is a *proven named theorem*, not a
passing mention.

## Headline-theorem coverage map (all COVERED)

| Walters headline | Status | id |
|---|---|---|
| Birkhoff pointwise / von Neumann mean / Kingman subadditive | COVERED | `37.02.03` |
| Poincaré recurrence (abstract measure-theoretic, ∞-often) | COVERED | `38.04.01` |
| Induced (first-return) transformation + measure-preservation | COVERED | `38.04.01` |
| Kac return-time formula | COVERED | `38.04.01` |
| Kakutani–Rokhlin tower lemma (aperiodic approximation) | COVERED | `38.04.01` (Thm 4) |
| Ergodicity criteria (invariant-fn / spectral / set) | COVERED | `38.04.02` |
| Irrational-rotation ergodicity; toral-automorphism root-of-unity criterion | COVERED | `38.04.02` |
| Krylov–Bogolyubov existence of invariant measure | COVERED | `38.04.02` (Prop 4) + `38.01.02` |
| Ergodic decomposition (Choquet simplex / barycentre) | COVERED | `38.04.02` (Thm 5) |
| Unique ergodicity ⇔ uniform convergence of Birkhoff averages (Oxtoby) | COVERED | `38.04.02` + `38.01.04` |
| Weyl equidistribution / Borel normal numbers as ergodic corollaries | COVERED | `38.04.02`, `21.15.02` |
| Mixing ⇒ weak-mixing ⇒ ergodic chain (strict) | COVERED | `38.05.01` |
| Koopman–von Neumann lemma + weak-mixing characterisations (T×T, continuous spectrum, density-1) | COVERED | `38.05.01` (named Thm) |
| Spectral isomorphism vs measurable isomorphism; maximal spectral type | COVERED | `38.05.02` |
| Discrete (pure point) spectrum; eigenvalue group | COVERED | `38.05.02` |
| Halmos–von Neumann theorem (discrete spectrum ⇒ group rotation; eigenvalue group complete invariant) | COVERED | `38.05.02` |
| Partition entropy $H(\xi)$, conditional entropy, join calculus | COVERED | `38.06.02` |
| KS entropy $h_\mu(T)$ as isomorphism invariant; Kolmogorov–Sinai generator theorem | COVERED | `38.06.02` |
| Bernoulli-shift entropy $=H(p)$; isomorphism problem | COVERED | `38.06.02` (Thm 4) |
| Ornstein isomorphism theorem (entropy complete invariant for Bernoulli) | COVERED | `38.06.02` (Thm 4, capstone) |
| Topological entropy (spanning/separated, open covers) | COVERED | `38.06.01`; symbolic case `38.02.*` |
| Shannon–McMillan–Breiman (a.e. + $L^1$; AEP / typical set) | COVERED | `38.06.03` |
| Topological pressure; $P(T,0)=h_{\mathrm{top}}$ | COVERED | `38.06.04` |
| Variational principle $P(T,\varphi)=\sup_\mu(h_\mu+\int\varphi)$ | COVERED | `38.06.04` |
| Equilibrium states / Gibbs measures / measure of maximal entropy (BRS) | COVERED | `38.06.04` |

## NEW GAPS

**None.**

Every headline theorem in Walters is now a proven, named result in the corpus. The predecessor
audit's 7 proposed units shipped, and in the process *absorbed* several results that the gaps audit
had only sketched in specs — induced transformations, the Kac formula, the Kakutani–Rokhlin tower
(now a full named theorem in `38.04.01`), Krylov–Bogolyubov existence and the Choquet-simplex
ergodic decomposition (named theorems in `38.04.02`), and the Koopman–von Neumann lemma (named
theorem in `38.05.01`). Nothing Walters states as a headline theorem is genuinely absent.

## Deliberately not proposed (sub-headline / out-of-source, unchanged from gaps audit)

- **Ornstein machinery in full** (d̄-metric, very-weak-Bernoulli, finitely-determined) — Walters
  states the theorem without proof; present as a capstone pointer in `38.06.02`. Not a headline gap.
- **Abramov entropy formula for induced maps; Pinsker σ-algebra / K-systems; Krieger finite
  generator theorem** — sub-headline technical refinements Walters treats lightly or not at all;
  Krieger's theorem lives more naturally with symbolic dynamics (`38.02.*`). Not of headline value
  from this source.
- **Multiple recurrence / Furstenberg–Szemerédi** — outside Walters' book (Furstenberg's own text);
  unchanged out-of-scope from the gaps audit.
- **Smooth ergodic theory (Pesin, Oseledets, Hopf argument)** — owned by `38.07.*`; referenced as
  forward pointers in `38.06.02`, not a Walters headline.

## DRY?

**DRY verdict: YES — no duplication and no new gaps.** The 8 shipped units partition Walters' content
cleanly (recurrence/measure-preserving → `38.04`, mixing/spectral → `38.05`, entropy/pressure →
`38.06`), reuse `37.02.03` for the three ergodic theorems as a prereq rather than re-proving them,
and correctly defer topological/symbolic entropy and smooth ergodic theory to the sibling chapters
`38.01/02/07`. 0 new gaps.

## RETURN SUMMARY
- **New gaps:** 0
- **DRY verdict:** YES — full headline coverage, no duplication, 0 new gaps.
