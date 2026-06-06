# Audit — Gilbarg-Trudinger, *Elliptic Partial Differential Equations of Second Order* (2e, Springer 2001)

- **source_book:** `gilbarg-trudinger-elliptic`
- **source_curriculum:** `pde-harmonic`
- **target spine:** `02-analysis`, section `analysis`, mainly chapter 02.17 `elliptic-regularity`
- **audit date:** 2026-06-05

## Verification summary

The new PDE chapters 02.16–02.21 exist only as **empty directory skeletons** — no units shipped. The only elliptic/PDE material in the corpus is:

- `02.13.01` Laplace equation — weak/strong/Hopf max principle, Hopf boundary lemma, Harnack, Liouville, Perron + barriers — **all specifically for harmonic functions (Δu = 0)**, classical constant-coefficient case.
- `02.13.02` Poisson equation, Newtonian potential — explicitly defers Schauder (Hölder data) and Calderón-Zygmund (L^p data) as "weaker hypotheses require…"; no estimates proved.
- `06.01.24` Dirichlet problem + Perron's method — for Δu = 0 on plane domains.
- `24.01.01` Sobolev spaces H^s, W^{k,p}; `24.01.03` weak/variational formulation of elliptic PDE + Lax-Milgram (numerical-pde chapter).

Greps for `schauder`, `calderon|zygmund|singular integral`, `de giorgi|nash|moser`, `alexandrov|bakelman|pucci`, `maximal function`, `C^{2,α} estimate` over all of `content/` returned **only passing forward-references** (e.g. in 02.13.02) or **unrelated hits** (Moser as in KAM/Moser-trick; Hölder as a name in symplectic). No dedicated unit proves any GT-level elliptic estimate.

Conclusion: GT's general second-order elliptic operator theory is essentially **all genuine gaps**. Default-COVERED was applied and only the classical Δu = 0 max-principle/Perron pieces survived as COVERED.

### Prereq id legend (verified)
- `02.13.01` Laplace max principle / Harnack (harmonic baseline)
- `02.13.02` Poisson / Newtonian potential
- `02.07.06` L^p spaces, Hölder & Minkowski inequalities
- `02.07.05` Fatou / dominated convergence (Lebesgue machinery for CZ)
- `02.11.05` compact operators; `02.11.08` Hilbert space; `02.11.09` open mapping / closed graph (Fredholm/method-of-continuity functional-analytic base)
- `24.01.01` Sobolev spaces W^{k,p}; `24.01.03` weak/variational formulation + Lax-Milgram
- **SIBLING (planned 02.16, may be co-produced — flagged):** `02.16.01` Sobolev spaces / weak derivatives, `02.16.02` weak solutions & Lax-Milgram. These are claimed by the parallel **Evans** audit. Where used below they are marked `[sibling 02.16 — may be co-produced]`. Existing `24.01.x` analogues are listed alongside as a fallback so 02.17 units are not blocked.

---

## GENUINE GAPS (8)

Free slots in chapter 02.17 `elliptic-regularity` assigned sequentially from `02.17.01`.

### 02.17.01 — Maximum principles for general second-order elliptic operators
- **title:** Weak and Strong Maximum Principles for Linear Elliptic Operators; Hopf Boundary Point Lemma
- **spec:** Operator L = a^{ij}(x) D_{ij} + b^i(x) D_i + c(x) with (a^{ij}) elliptic. Weak maximum principle for Lu ≥ 0 with c = 0, then with c ≤ 0 (sign restriction and why it is needed). Hopf's strong maximum principle via the interior-ball/Hopf lemma; Hopf boundary point lemma for general L. Comparison principle, uniqueness for the Dirichlet problem Lu = f. Contrast with the harmonic case in 02.13.01 (which is the special case L = Δ). GT §3.1–3.2.
- **prereqs:** `02.13.01`, `02.05.04` (implicit/inverse for the C² setting), `02.07.06`
- **chapter:** elliptic-regularity · **section:** analysis

### 02.17.02 — Alexandrov-Bakelman-Pucci (ABP) maximum principle
- **title:** The Alexandrov-Bakelman-Pucci Estimate and L^n Maximum Principle
- **spec:** Sup-bound for Lu ≥ f (non-divergence form, L^n right-hand side) in terms of ‖f/𝒟*‖_{L^n(Ω)} via the upper contact set and the normal-mapping / area-formula argument; the Monge-Ampère measure of the contact set. ABP as the quantitative non-divergence maximum principle underlying Krylov-Safonov and the L^p theory. GT §9.1.
- **prereqs:** `02.17.01`, `02.07.11` (area/coarea formula — normal mapping), `02.07.06`
- **chapter:** elliptic-regularity · **section:** analysis

### 02.17.03 — Schauder interior and global C^{2,α} estimates
- **title:** Schauder Theory: Interior and Boundary C^{2,α} Estimates for Elliptic Equations
- **spec:** Hölder spaces C^{k,α} and interior/global Schauder estimates for L with C^α coefficients: ‖u‖_{C^{2,α}} bounded by ‖Lu‖_{C^α} + ‖u‖_{C^0}. Newtonian-potential / frozen-coefficient (Korn) approach or Campanato's characterization. Boundary Schauder estimates on C^{2,α} domains. Builds directly on the Newtonian-potential second-derivative bound flagged in 02.13.02. GT §4, §6.1.
- **prereqs:** `02.13.02`, `02.17.01`, `02.07.06`
- **chapter:** elliptic-regularity · **section:** analysis

### 02.17.04 — The Dirichlet problem: method of continuity and Schauder existence
- **title:** Existence for the Classical Dirichlet Problem via the Method of Continuity
- **spec:** Solvability of Lu = f, u = φ on ∂Ω in C^{2,α} for C^α coefficients and C^{2,α} boundary. Method of continuity / a-priori-estimate-plus-fixed-point: the Schauder interior+global estimate (02.17.03) supplies the uniform bound; Banach-space continuation along L_t = (1−t)Δ + tL. Contrast with Perron's method for Δu = 0 (06.01.24, 02.13.01) — this is the general-operator existence theorem. GT §6.1–6.3.
- **prereqs:** `02.17.03`, `02.11.04` (Banach spaces), `02.11.09` (open mapping/closed graph)
- **chapter:** elliptic-regularity · **section:** analysis

### 02.17.05 — L^p (Calderón-Zygmund) theory and singular integrals for elliptic equations
- **title:** Calderón-Zygmund Singular Integrals and W^{2,p} Estimates for Elliptic Equations
- **spec:** Calderón-Zygmund decomposition, the maximal function, the L^p boundedness of the second-derivative singular integral arising from the Newtonian potential (Riesz-transform-type kernel), Marcinkiewicz interpolation between the weak-(1,1) and L² bounds. Resulting W^{2,p} interior/global estimates: ‖u‖_{W^{2,p}} ≲ ‖Lu‖_{L^p} + ‖u‖_{L^p}. Closes the L^p forward-reference made in 02.13.02. GT §9.2–9.6.
  - *Note:* the singular-integral machinery (CZ decomposition, maximal function, weak-(1,1)) is general harmonic analysis and properly belongs to chapter 02.19 `calderon-zygmund-singular-integrals`; if 02.19 is produced first, this unit should **cite** that unit and restrict to the elliptic W^{2,p} application. Flagged as a cross-chapter coordination point.
- **prereqs:** `02.13.02`, `02.07.05`, `02.07.06`, `02.17.02` (ABP for the comparison route)
- **chapter:** elliptic-regularity · **section:** analysis

### 02.17.06 — De Giorgi-Nash-Moser: Hölder continuity of weak solutions
- **title:** De Giorgi-Nash-Moser Theory: Local Boundedness and Hölder Continuity of Weak Solutions
- **spec:** Divergence-form operator div(A(x)∇u) with merely bounded measurable elliptic A. De Giorgi's truncation / level-set iteration **or** Moser iteration giving local boundedness (L^∞ bound) and then interior Hölder continuity (C^{0,α}) of weak solutions with no continuity assumption on the coefficients. The De Giorgi-Nash theorem and its role in Hilbert's 19th problem. GT §8.5–8.8.
- **prereqs:** `24.01.01` (Sobolev spaces W^{1,p}) **[sibling `02.16.01` — may be co-produced]**, `24.01.03` (weak formulation) **[sibling `02.16.02`]**, `02.07.06`, `02.17.01`
- **chapter:** elliptic-regularity · **section:** analysis

### 02.17.07 — Harnack inequality for general elliptic operators
- **title:** The Harnack Inequality for Elliptic Equations (Moser and Krylov-Safonov)
- **spec:** Harnack inequality sup_{B} u ≤ C inf_{B} u for non-negative weak solutions of divergence-form equations (Moser's iteration with the John-Nirenberg / BMO lemma) and for non-divergence equations (Krylov-Safonov, via ABP). Harnack ⇒ Hölder continuity and the Liouville theorem for general operators. Generalizes the harmonic Harnack of 02.13.01 to bounded-measurable / non-divergence coefficients. GT §8.6–8.10, §9.7.
- **prereqs:** `02.17.06`, `02.17.02` (ABP for the non-divergence route), `02.13.01`
- **chapter:** elliptic-regularity · **section:** analysis

### 02.17.08 — Quasilinear elliptic equations: a-priori gradient estimates and existence
- **title:** Quasilinear Elliptic Equations: Gradient Estimates and Existence by Leray-Schauder
- **spec:** Quasilinear divergence-form equations div A(x,u,∇u) + B = 0 (model: prescribed mean curvature / minimal surface, p-Laplacian flavour). Interior and global a-priori gradient bounds, De Giorgi-Nash applied to the differentiated equation for C^{1,α} of the gradient, and existence via the Leray-Schauder fixed-point theorem chaining the a-priori estimates. GT §10–11, §13, §15 (overview level). Treated as the capstone synthesis of 02.17.03/06/07.
- **prereqs:** `02.17.06`, `02.17.07`, `02.17.04`, `02.11.05` (compact operators — Leray-Schauder/Schaefer)
- **chapter:** elliptic-regularity · **section:** analysis

---

## COVERED

- **Maximum principle for harmonic functions (weak / strong / Hopf boundary lemma).** `02.13.01` — but **only** for Δu = 0; the general-L versions are gap 02.17.01. Covered = the harmonic baseline these gaps extend.
- **Harnack inequality for harmonic functions.** `02.13.01` (Theorem 5). General-operator Harnack is gap 02.17.07.
- **Liouville theorem (harmonic).** `02.13.01`.
- **Fundamental solution / Newtonian potential, distributional −Δu = f.** `02.13.02`. The C^{2,α} and W^{2,p} mapping properties of this potential are gaps 02.17.03 / 02.17.05.
- **Perron's method, barriers, boundary regularity for the Dirichlet problem (Δu = 0).** `02.13.01`, `06.01.24`. The general-operator existence theory is gap 02.17.04.
- **Sobolev spaces W^{k,p}, H^s; weak/variational formulation; Lax-Milgram.** `24.01.01`, `24.01.03` (also planned as sibling 02.16 by the Evans audit). Prereqs for the weak-solution gaps, not GT-specific gaps themselves.
- **L^p spaces, Hölder/Minkowski inequalities; Lebesgue convergence theorems.** `02.07.06`, `02.07.05`. Analytic prereqs, covered.
- **Hilbert space / spectral / compact-operator functional analysis.** `02.11.05`, `02.11.08`, `02.11.09`. Prereqs, covered.

## OUT OF SCOPE

- **Generic Calderón-Zygmund / singular-integral operator theory, maximal functions, Marcinkiewicz interpolation as standalone harmonic analysis.** Belongs to chapter **02.19** `calderon-zygmund-singular-integrals` (Stein-territory), not to a GT elliptic-regularity audit. Referenced from gap 02.17.05 but its general development is a separate book's audit.
- **Parabolic / hyperbolic regularity and Schauder theory for evolution equations.** Chapter **02.18** `parabolic-hyperbolic`; GT is elliptic-only (the heat-equation parabolic max principle is already noted in 02.13.03).
- **Sobolev-space *construction* and embedding/trace/compactness theorems (Sobolev, Rellich-Kondrachov, trace).** These are 02.16 / Evans-audit material (and partly `24.01.01`); GT uses them as tools. Listed as prereqs above, not claimed here.
- **Fully nonlinear (Monge-Ampère, Bellman/Isaacs) regularity — Krylov-Evans, Caffarelli-Cabré viscosity theory.** Beyond GT's main line (GT touches Monge-Ampère only via ABP); proper home is a Caffarelli-Cabré / Krylov audit, not this one. ABP itself is captured as 02.17.02.
- **Littlewood-Paley theory, interpolation spaces, dispersive/Strichartz estimates.** Chapters 02.20 / 02.21; unrelated to GT.
