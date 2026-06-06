# Completeness re-audit — Dembo & Zeitouni, *Large Deviations Techniques and Applications*

SLUG: `dembo-zeitouni-large-deviations`
SECTION: `probability` · CHAPTER: `07-large-deviations` · PREFIX: `37.07`
Re-audited against the NOW-LARGER corpus (2026-06-05), after the full large-deviations spine shipped.

## Context

The first audit (`dembo-zeitouni-large-deviations.gaps.md`) found the entire LDP
theory absent corpus-wide and proposed 11 gaps `37.07.01–37.07.11`. All eleven have
since been produced:

| id | unit |
|----|------|
| 37.07.01 | large-deviation principle, rate functions, goodness, weak-to-full upgrade, **Bryc inverse** |
| 37.07.02 | Cramér's theorem, Legendre-Fenchel rate, tilting / Chernoff |
| 37.07.03 | Legendre-Fenchel transform, convex duality, biconjugation, essential smoothness |
| 37.07.04 | Gärtner-Ellis theorem |
| 37.07.05 | Sanov's theorem, empirical measures, method of types, **Gibbs conditioning / Csiszár conditional-limit theorem, I-projection** |
| 37.07.06 | relative entropy as good rate function, Donsker-Varadhan variational formula, Pinsker |
| 37.07.07 | Varadhan's integral lemma, Laplace principle, **Bryc's inverse lemma** |
| 37.07.08 | contraction principle + inverse contraction principle |
| 37.07.09 | exponential tightness, exponential approximation, Dawson-Gärtner projective limit, **Mogulskii (schematic)** |
| 37.07.10 | Schilder's theorem, Cameron-Martin rate, **Mogulskii (random-walk analogue)** |
| 37.07.11 | Freidlin-Wentzell theory, quasi-potential, Eyring-Kramers exit asymptotics |

## Method

Listed Dembo-Zeitouni's headline theorems and word-boundary-grepped each against the
whole corpus and the shipped 37.07.* units. Verified that named results are genuinely
**stated and proved**, not merely cited, by reading the relevant passages.

## Headline-theorem checklist (all COVERED)

- **LDP definition / good rate function / uniqueness / weak-to-full** — COVERED `37.07.01`.
- **Cramér's theorem (ℝ and ℝᵈ)** — COVERED `37.07.02`.
- **Legendre-Fenchel duality / biconjugation / essential smoothness** — COVERED `37.07.03`.
- **Gärtner-Ellis theorem** — COVERED `37.07.04`.
- **Sanov's theorem / empirical measures / method of types** — COVERED `37.07.05`.
- **Gibbs conditioning principle / conditional limit theorem (Csiszár, DZ §7.3)** — COVERED `37.07.05` (stated as the I-projection corollary in the Master section and proved schematically in the exercises). Was a plausible standalone candidate; it is genuinely treated, so **not a gap**.
- **Relative entropy as rate function / Donsker-Varadhan variational formula / Pinsker** — COVERED `37.07.06`.
- **Varadhan's integral lemma / Laplace principle** — COVERED `37.07.07`.
- **Bryc's inverse (asymptotic-value / inverse-Varadhan) lemma** — COVERED `37.07.01` and `37.07.07` (fully stated with the exponential-tightness hypothesis). Candidate for its own slot; already discharged.
- **Contraction principle + inverse contraction principle** — COVERED `37.07.08`.
- **Exponential tightness / exponential approximation / Dawson-Gärtner projective limit** — COVERED `37.07.09`.
- **Mogulskii's theorem (random-walk sample-path LDP)** — COVERED `37.07.09` and `37.07.10` (rate $\int\Lambda^*(\dot f)$ derived via the projective route; Schilder recovered as the Gaussian case). Candidate for its own slot; genuinely covered as the random-walk analogue of Schilder, so **not a gap**.
- **Schilder's theorem / Cameron-Martin energy** — COVERED `37.07.10`.
- **Freidlin-Wentzell / quasi-potential / exit-time (Eyring-Kramers)** — COVERED `37.07.11`.

## Still out of scope (re-confirmed, no new curricular value)

- **Process-level (level-3) LDP / empirical-process & occupation-measure LDPs for Markov chains** (DZ §6.3–6.5). The level-1/level-2 pairing (Cramér + Sanov + Gärtner-Ellis) plus the conditional-limit corollary delivers every headline payoff; the level-3 machinery remains heavy apparatus without a distinct headline theorem of curricular value at this tier. Referenced explicitly inside `37.07.05`.
- **Sample-path moderate deviations / CLT-LDP interpolation** — `\bmoderate deviation` → 0 hits; a secondary refinement, no distinct headline theorem. Still out of scope.
- **Full abstract LDP on general locally-convex / topological-vector spaces beyond the Polish-space + path-space treatment** — the shipped units already work over Hausdorff regular spaces with the projective-limit route, covering every named theorem; further generality is apparatus, not theorem-level payoff.

## New genuine gaps

**None.** Every Dembo-Zeitouni headline theorem maps onto a shipped `37.07.*` unit, and
the three candidates that could plausibly have warranted their own slots after the spine
shipped — the **Gibbs conditioning / conditional limit theorem**, **Bryc's inverse
lemma**, and **Mogulskii's theorem** — are each genuinely stated and proved inside
existing units (`37.07.05`, `37.07.01`/`37.07.07`, and `37.07.09`/`37.07.10`
respectively). The previously-deferred level-3 / moderate-deviation / full-abstract
items remain correctly out of scope.

## DRY?

**DRY.** 0 new gaps. The shipped 37.07.01–37.07.11 spine fully covers Dembo & Zeitouni's
headline theorems; proposing any further unit would duplicate existing coverage or
re-import an item correctly held out of scope.
