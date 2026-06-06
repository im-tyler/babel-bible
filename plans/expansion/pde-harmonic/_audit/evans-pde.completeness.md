# Completeness re-audit: Evans — *Partial Differential Equations*

`source_book: evans-pde`
`source_curriculum: pde-harmonic`
`section: analysis`

Re-audit of Evans against the **now-larger** corpus after Spine 2 (modern PDE &
harmonic analysis) shipped. The original gap list `evans-pde.gaps.md` was fully
produced as `02.16.*` (Sobolev/weak solutions), `02.17.*` (elliptic regularity),
`02.18.*` (parabolic/hyperbolic/variational/HJ/conservation laws). Method: each
Evans headline theorem re-grepped (filename + body) against the live corpus,
including the freshly shipped units.

## Verified COVERED after the expansion

- **Sobolev inequalities (GNS/Morrey), trace/extension, Rellich-Kondrachov,
  Poincaré** — `02.16.01-03`.
- **Lax-Milgram / weak elliptic existence, Fredholm alternative + elliptic
  eigenvalues** — `02.16.04-05`.
- **Interior/boundary $H^2$/$H^k$ regularity, general maximum principles + Hopf,
  ABP, Schauder, method of continuity, $L^p$/$W^{2,p}$ Calderón-Zygmund,
  elliptic De Giorgi-Nash-Moser, Harnack (Moser/Krylov-Safonov)** —
  `02.17.01-08`.
- **Nonvariational techniques — fixed-point existence (Schaefer / Leray-Schauder),
  method of sub/supersolutions, a priori bounds** — `02.17.09` (states Schaefer's
  theorem, the Leray-Schauder homotopy, and the sub/supersolution monotone
  iteration). Evans Ch. 9 "Nonvariational techniques" is thereby COVERED.
- **Galerkin existence for parabolic & hyperbolic equations, finite propagation
  speed, $C_0$-semigroups / Hille-Yosida** — `02.18.01-03`.
- **Direct method of the calculus of variations, weak lower semicontinuity,
  Euler-Lagrange** — `02.18.04` (Evans Ch. 8).
- **Viscosity solutions of Hamilton-Jacobi (Crandall-Lions, Hopf-Lax,
  vanishing-viscosity, eikonal)** — `02.18.05` (Evans Ch. 3.3 + 10).
- **Scalar conservation laws: shocks, Rankine-Hugoniot, Lax/Oleinik entropy,
  Lax-Oleinik formula, Riemann problem, Kruzhkov** — `02.18.06` (Evans Ch. 3.4 + 11).
- **Classical fundamental-solution layer** — Laplace/harmonic + max principle
  `02.13.01`, Poisson/Newtonian potential `02.13.02`, heat kernel/Duhamel +
  parabolic De Giorgi-Nash + parabolic Harnack `02.13.03`, wave/d'Alembert/
  spherical means/Huygens/energy method `02.13.04` (Evans Ch. 2).
- **Distributions, Schwartz kernel theorem, pseudodifferential operators,
  wavefront sets, propagation of singularities** — `02.14.01-04`.

## NEW GENUINE GAP (1)

One classical Evans headline survives the expansion: the **Cauchy-Kovalevskaya
theorem** (Evans §4.6.3) — the sole general local existence/uniqueness result
for an arbitrary real-analytic PDE Cauchy problem — together with its uniqueness
companion **Holmgren's theorem**. Grep confirms it is absent as a PDE theorem:
"Cauchy-Kovalevskaya" appears in the corpus *only* as the majorant-series
*technique* inside the real-analytic inverse function theorem `02.05.04`, never
as the general analytic Cauchy problem; "Holmgren" returns NONE. This is the
foundational "every PDE is locally solvable in the analytic category" theorem and
the natural lead-in to the classical fundamental-solution chapter, so it carries
real curricular value rather than being a stylistic duplicate.

### 02.13.06 — The Cauchy-Kovalevskaya and Holmgren theorems
- **id:** `02.13.06` (free slot in `13-pde`; 13.05/07/11 occupied, 06 open)
- **title:** The Cauchy-Kovalevskaya theorem and Holmgren's uniqueness theorem
- **spec:** Noncharacteristic Cauchy data and flattening of the Cauchy surface;
  reduction of a general analytic system to first-order form $u_t = \sum
  B^j(x,u)\,\partial_{x_j}u + c(x,u)$ with analytic data; the **Cauchy-Kovalevskaya
  theorem** — existence and uniqueness of a real-analytic local solution — proved
  by the **method of majorants** (Taylor coefficients of the unknown bounded by a
  geometric/Cauchy majorant series, whose convergence is established directly);
  the necessity of the noncharacteristic hypothesis (Lewy's counterexample noted
  for the merely-smooth case); and **Holmgren's uniqueness theorem** — uniqueness
  of solutions with merely-smooth (not analytic) data for linear analytic-coefficient
  operators, via duality against the analytic adjoint Cauchy problem.
- **prereqs:** `02.05.04` (real-analytic functions, majorant/Taylor-series
  technique — verified on disk), `02.03.03` (infinite series, convergence tests —
  verified), `02.13.04` (classical Cauchy problem / characteristics for the wave
  equation — verified), `02.14.04` (distributions/adjoint, for the Holmgren
  duality argument — verified)
- **chapter:** `pde` (`content/02-analysis/13-pde`) — `section: analysis`
- **source_book:** `evans-pde`
- **source_curriculum:** `pde-harmonic`

## OUT OF SCOPE (unchanged from prior audit)

- **Systems of conservation laws** (Riemann invariants, Glimm scheme, large-time
  behaviour — Evans §11.2-11.3): Evans treats these only briefly; reserved with
  Navier-Stokes/Euler for a dedicated fluids/hyperbolic-systems source book, per
  the prior audit's scope note. The **scalar** theory is fully covered (`02.18.06`).
- **Separation of variables, similarity solutions, Fourier-transform solution,
  Cole-Hopf, asymptotics** (Evans §4.1-4.5): solution-technique catalogue, not
  headline theorems; subsumed by the kernel/transform units `02.13.*`, `02.10.04`,
  and the symmetry-reduction material in `05.05.07`.
- **Calderón-Zygmund singular integrals, Littlewood-Paley/interpolation,
  dispersive/Strichartz** — remits of `02.19`/`02.20`/`02.21`, not Evans' core.

## DRY?
NOT-DRY — exactly one new genuine gap: `02.13.06` Cauchy-Kovalevskaya + Holmgren (the only general analytic local-solvability theorem, still absent as a PDE unit).
