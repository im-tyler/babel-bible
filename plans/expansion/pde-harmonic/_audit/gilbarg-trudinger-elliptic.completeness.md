# Completeness re-audit: Gilbarg-Trudinger — *Elliptic Partial Differential Equations of Second Order* (2e, Springer 2001)

`source_book: gilbarg-trudinger-elliptic`
`source_curriculum: pde-harmonic`
`section: analysis` (mainly `content/02-analysis/17-elliptic-regularity/`, with `02.16-sobolev-weak-solutions` and classical `02.13-pde`)
`audit date: 2026-06-05`

**Second pass.** Spine 2 (the elliptic-regularity chapter) was fully produced since
the first-pass audit (`gilbarg-trudinger-elliptic.gaps.md`). The corpus now contains the
complete `content/02-analysis/17-elliptic-regularity/` chapter (9 units, all three tiers)
plus the supporting Sobolev/weak-solution machinery `02.16.01-05`:

- `02.17.01` H^2/H^k interior+boundary regularity of weak solutions
- `02.17.02` maximum principles for general second-order elliptic operators (weak/strong/Hopf)
- `02.17.03` Alexandrov-Bakelman-Pucci estimate
- `02.17.04` Schauder interior+boundary C^{2,α} estimates
- `02.17.05` classical Dirichlet problem via the method of continuity
- `02.17.06` L^p / Calderón-Zygmund W^{2,p} estimates
- `02.17.07` De Giorgi-Nash-Moser local boundedness + Hölder continuity
- `02.17.08` Harnack inequality (Moser divergence route + Krylov-Safonov non-divergence route)
- `02.17.09` quasilinear elliptic: gradient estimates + existence by Leray-Schauder
- `02.16.01` Sobolev/Gagliardo-Nirenberg/Morrey; `02.16.02` trace/extension;
  `02.16.03` Rellich-Kondrachov/Poincaré; `02.16.04` Lax-Milgram/weak solutions;
  `02.16.05` Fredholm alternative + elliptic eigenvalues

**The first-pass eight gaps all shipped** — and the chapter over-delivered: it added an
H^2/H^k regularity unit (`02.17.01`) that was not even in the original gap list, and
absorbed the planned sibling `02.16` Sobolev layer as a full five-unit chapter.

Method: each GT headline theorem (chapters 2-17 of the 2nd ed.) was re-checked by
filename grep + body grep against the now-larger corpus. Conservative bar: a headline is a
new gap only if it is **neither built nor stated** anywhere as a standalone result of real
curricular value.

Result: **0 new gaps.** Every GT headline resolves to a shipped unit, and the more
specialized chapter results (Wiener criterion, Bernstein theorem, boundary gradient
estimates, Fredholm/eigenvalue theory) are each stated with their characterizing content
inside an existing unit — clearing the conservative "stated-with-substance" bar.

---

## GENUINE GAPS

None.

## COVERED on the second pass (re-verified)

- **First-pass eight** (`02.17.01`-`02.17.08` of the gaps file, re-indexed) — all shipped
  as `02.17.02`-`02.17.09` (the gaps-file 02.17.01 max-principles unit became `02.17.02`
  once the new H^2 regularity unit took the `.01` slot).
- **Weak/strong maximum principle + Hopf boundary lemma for general L** (GT §3.1-3.2) — `02.17.02`.
- **Alexandrov-Bakelman-Pucci L^n estimate / contact-set normal-mapping** (GT §9.1) — `02.17.03`.
- **Schauder interior + global C^{2,α} estimates** (GT §4, §6.1) — `02.17.04`.
- **Classical Dirichlet solvability via the method of continuity** (GT §6.1-6.3) — `02.17.05`.
- **Calderón-Zygmund / W^{2,p} estimates** (GT §9.2-9.6) — `02.17.06` (generic CZ/singular-
  integral machinery remains chapter 02.19 territory; cross-referenced, not re-claimed).
- **De Giorgi-Nash-Moser Hölder continuity of weak solutions / Hilbert's 19th** (GT §8.5-8.8)
  — `02.17.07` (divergence form, bounded-measurable coefficients, Caccioppoli + truncation/Moser).
- **Harnack inequality, both routes** (GT §8.6-8.10, §9.7) — `02.17.08` (Moser + John-Nirenberg;
  Krylov-Safonov via ABP).
- **Quasilinear gradient estimates + Leray-Schauder/Schaefer existence; minimal surface /
  prescribed mean curvature; Serrin's sharp boundary mean-curvature condition; the Bernstein
  rigidity theorem with the dimension-7 ceiling (Bombieri-De Giorgi-Giusti)** (GT §10-11, §13,
  §15-17) — `02.17.09` (Theorem 4 states Bernstein in full; boundary gradient estimates via
  barriers covered).
- **H^2/H^k interior+boundary regularity of weak solutions** (GT §8.3-8.4, difference-quotient
  method) — `02.17.01`.
- **Fredholm alternative + elliptic eigenvalues** (GT §8.6, Riesz-Schauder) — `02.16.05`.
- **Sobolev inequalities, trace/extension, Rellich-Kondrachov, Poincaré** (GT §7) —
  `02.16.01`-`02.16.03`.
- **Lax-Milgram / Hilbert-space weak solvability** (GT ch.5, §8.1-8.2) — `02.16.04`.
- **Wiener criterion for boundary-point regularity (capacity series), barriers, Perron** (GT
  §2.8, classical) — stated with the full capacity-thickness characterization and Lebesgue
  spine/thorn examples in `02.13.01`; the harmonic max-principle/Harnack/Liouville baseline is
  `02.13.01`; Newtonian potential is `02.13.02`.

## OUT OF SCOPE / not gaps (unchanged from first pass)

- **Generic Calderón-Zygmund / singular-integral operator theory, maximal function,
  Marcinkiewicz interpolation as standalone harmonic analysis** — chapter 02.19 (Stein
  territory). Cross-referenced from `02.17.06`, not re-claimed here.
- **Parabolic / hyperbolic regularity and evolution Schauder theory** — chapter 02.18; GT is
  elliptic-only.
- **Fully nonlinear regularity (Krylov-Evans / Caffarelli-Cabré viscosity theory,
  Monge-Ampère interior regularity)** — beyond GT's main line (GT touches Monge-Ampère only via
  ABP, captured in `02.17.03`). Proper home is a Caffarelli-Cabré / Krylov audit. **Re-confirmed
  deferred:** GT does not develop viscosity solutions or the Evans-Krylov C^{2,α} theorem, so
  there is no GT headline pulling it into scope here. No curricular value added by re-proposing
  at this level.
- **Littlewood-Paley / interpolation-space / dispersive-Strichartz machinery** — chapters
  02.20/02.21; unrelated to GT.

## DRY?

**0 new gaps. Verdict: DRY.**

The elliptic-regularity spine fully covers Gilbarg-Trudinger's headline theory and in
several places exceeds the first-pass gap spec (extra H^2/H^k unit, full five-unit Sobolev
chapter, Bernstein theorem and Serrin's sharp solvability condition stated in the quasilinear
capstone). No GT headline theorem of real curricular value survives this pass.
