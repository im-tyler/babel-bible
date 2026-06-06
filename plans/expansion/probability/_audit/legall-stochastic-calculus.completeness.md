# Completeness re-audit — Le Gall, *Brownian Motion, Martingales, and Stochastic Calculus*

SLUG: `legall-stochastic-calculus`
SOURCE CURRICULUM: `probability` · SECTION: `probability` · CHAPTER: `06-brownian-motion-stochastic-calculus`
Re-audited 2026-06-05 against the **now-larger** corpus, after the probability spine and the three
37.06.* units were produced. Supersedes the gap-finding pass in
`legall-stochastic-calculus.gaps.md` (which proposed exactly 37.06.01–03, now all shipped).

## Corpus state at re-audit

Chapter `content/37-probability/06-brownian-motion-stochastic-calculus/` now contains:

- `37.06.01` — continuous local martingales, quadratic variation $\langle M\rangle$, Doob–Meyer,
  Kunita–Watanabe, general BDG, **and Dambis–Dubins–Schwarz** (time change to Brownian motion).
- `37.06.02` — Brownian martingale representation theorem, plus Wiener-chaos orthogonality,
  Clark–Ocone, and Black–Scholes market completeness.
- `37.06.03` — Brownian local time, Tanaka's formula, the **Itô–Tanaka formula for convex $f$**,
  the occupation-density formula, and Lévy's $(|B|, L^0)$ identity.

Prior-pass COVERED items remain covered (re-verified): Lévy's characterisation `02.15.01`,
Girsanov `02.07.08` Thm 10, Itô integral/formula `02.15.02`, SDEs/diffusions/generator/Dynkin
`02.15.03`, Feynman–Kac `02.15.04`, Stratonovich `02.15.05`, strong Markov + reflection principle
`02.15.01`, Lévy–Ciesielski construction + Kolmogorov continuity `02.15.01`.

## Method

Listed Le Gall's headline theorems and grepped each against all of `content/`:
`Doob.?Meyer`, `Kunita.?Watanabe`, `martingale representation`, `predictable representation`,
`local time`, `Tanaka`, `Dambis.?Dubins.?Schwarz`, `time.?change`, `Ray.?Knight`, `Blumenthal`,
`strong Markov`, `reflection principle`, `continuous semimartingale`, `occupation`, `Novikov`,
`Burkholder.?Davis.?Gundy`. Borderline hits were read in full, not counted from the filename.

## New genuine gaps

**None.** The three shipped units fully discharge the prior pass's three gaps, and in doing so
they absorbed every *secondary* Le Gall headline theorem that could otherwise have surfaced as a
new gap:

- **Dambis–Dubins–Schwarz** (every continuous local martingale is a time-changed Brownian motion):
  stated and positioned as a Proposition in `37.06.01` (line 402), with the time-change
  $\tau_u = \inf\{t : \langle M\rangle_t > u\}$, $B_u = M_{\tau_u}$, $M_t = B_{\langle M\rangle_t}$.
  NOT a gap.
- **Kunita–Watanabe inequality** — Proposition in `37.06.01` (line 386). NOT a gap.
- **Burkholder–Davis–Gundy, general continuous-local-martingale form** — `37.06.01` (line 398),
  beyond the Brownian-case statement already in `02.15.02`. NOT a gap.
- **Itô–Tanaka formula for convex $f$ with $f''$ a measure** — Proposition in `37.06.03`
  (line 402); the occupation-density form of the bracket is line 406. NOT a gap.
- **Wiener-chaos decomposition / Clark–Ocone** — Propositions in `37.06.02` (lines 383, 387).
  NOT a gap.

## Borderline items examined and ruled out

- **General stochastic integral $\int H\,dM$ against a continuous local martingale / semimartingale,
  and the general Itô formula for continuous semimartingales** (Le Gall Ch. 5). The corpus builds
  the integral explicitly only for the Brownian integrator (`02.15.02`). The general case is
  *stated and used* rather than constructed as a standalone theorem: `37.06.01` asserts the isometry
  $\mathbb{E}[(\int_0^t H\,dM)^2] = \mathbb{E}\int_0^t H_s^2\,d\langle M\rangle_s$ and that
  $\int H\,dM$ has bracket $\int H^2\,d\langle M\rangle$ (lines 212, 380), and `37.06.03` exercises
  the semimartingale Itô formula directly via the Itô–Tanaka result. Both ingredients (the
  Brownian construction + the $\langle M\rangle$ machinery) are present, and the extension is a
  one-step localization the units explicitly bridge. **Ruled out** as a genuine value-adding gap:
  it is bridged-and-asserted, not absent, and a dedicated unit would be a refactor of existing
  content rather than new headline coverage.
- **Ray–Knight theorems** (the local-time field $a\mapsto L_t^a$ as a squared-Bessel process):
  appears only as forward-looking remarks in `37.06.03` (lines 232, 390, 426). This is correct —
  Le Gall presents Ray–Knight/excursion theory as advanced end-of-chapter / downstream material,
  not a main-text headline theorem, and it sits in the excursion-theory / `03.02.45` direction.
  Out of scope, consistent with the source.
- **Blumenthal 0–1 law / strong Markov in continuous time**: the Blumenthal 0–1 law is referenced
  in `37.05.01` (continuous-time Markov contrast) and the strong Markov property + reflection are
  proved for Brownian motion in `02.15.01` (lines 196, 219). Le Gall's Ch. 2 strong-Markov spine is
  COVERED. NOT a gap.

## Verdict line

3 prior gaps → all shipped (37.06.01–03); 0 new genuine gaps on re-audit.

## DRY?

**DRY — yes.** Le Gall is now fully covered with no headline-theorem duplication and no remaining
genuine absence. The single-PDE/Itô spine lives in `02.15.*`; the general-martingale,
representation, and local-time spine lives in `37.06.*`; Girsanov in `02.07.08`. The one borderline
structural item (general $\int H\,dM$ / semimartingale Itô formula) is bridged across the existing
units rather than missing, so writing it would duplicate, not extend. **0 new gaps — DRY.**
