# Audit: Evans — *Partial Differential Equations*

`source_book: evans-pde`
`source_curriculum: pde-harmonic`
`section: analysis` (new chapters `content/02-analysis/16-sobolev-weak-solutions`,
`17-elliptic-regularity`, `18-parabolic-hyperbolic`)

Method: each Evans headline theorem was verified by filename grep + body grep against
the live corpus. The corpus already carries the **classical fundamental-solution layer**
under `02-analysis/13-pde` (Laplace/harmonic + maximum principle `02.13.01`, Poisson /
Newtonian potential + Fredholm-alternative-by-potentials `02.13.02`, heat kernel /
Duhamel + parabolic De Giorgi-Nash-Moser + Harnack `02.13.03`, wave equation /
d'Alembert / Huygens + classical energy method `02.13.04`), the **functional-analytic
prerequisites** under `02.11` (Banach/Hilbert, Hahn-Banach, compact operators), the
**distribution / pseudodifferential layer** under `02.14`, and a **FEM-oriented Sobolev
preliminary** under `24-numerical-pde/01-sobolev-and-weak-pdes` (`24.01.01` Sobolev
spaces, `24.01.03` weak formulation + Lax-Milgram, `24.01.04` inf-sup).

What is genuinely absent is the **modern Sobolev-space / weak-solution / energy-method
core of Evans as theorem-level analysis units**:

- `24.01.01` *defines* Sobolev spaces and *survey-states* (with sketches, in
  FEM-preliminary prose: "roughly", "proof sketch") the trace, extension, Sobolev
  embedding, and Rellich-Kondrachov theorems — it does not give them as dedicated
  Evans-style theorem units with full proofs (Gagliardo-Nirenberg-Sobolev inequality,
  Morrey inequality, the full embedding hierarchy). Per audit doctrine (covered = a unit
  *states and proves* the theorem), the deep Sobolev theorems are gaps; the bare space
  definition and weak-derivative notion are COVERED.
- The general second-order **elliptic** existence (Lax-Milgram applied to general
  divergence-form operators), **regularity** (interior/boundary $H^2$, Schauder, elliptic
  De Giorgi-Nash-Moser), **Fredholm alternative** for general elliptic operators, and
  **eigenvalue** theory of symmetric elliptic operators have no units. (Lax-Milgram
  exists only inside the FEM unit `24.01.03`; elliptic De Giorgi-Nash appears only as
  *narrative* in `02.13.01`'s synthesis; the parabolic version IS a theorem in `02.13.03`.)
- The **Galerkin / Bochner-space existence** theory for general second-order parabolic
  and hyperbolic evolution equations, and the **semigroup (Hille-Yosida)** approach, are
  absent — the heat/wave units use explicit kernels and classical $C^2$ solutions only.
- The **calculus of variations** (direct method, weak lower semicontinuity), **viscosity
  solutions of Hamilton-Jacobi** (Crandall-Lions), and **scalar conservation laws /
  entropy solutions** (Lax-Oleinik, Kruzhkov) have no units anywhere (the Hamilton-Jacobi
  hits are the classical mechanics HJ *equation* `05.05.04`/`09.05.02`, not viscosity theory).

These are the genuine gaps below.

---

## GENUINE GAPS

### 02.16.01 — Sobolev inequalities: Gagliardo-Nirenberg-Sobolev and Morrey
- **id:** `02.16.01`
- **title:** Sobolev inequalities: the Gagliardo-Nirenberg-Sobolev and Morrey inequalities
- **spec:** The GNS inequality $\|u\|_{L^{p^*}}\le C\|Du\|_{L^p}$ for $p<n$ with the critical exponent $p^*=np/(n-p)$ (proof via the product/Loomis-Whitney estimate), and the Morrey inequality giving Hölder continuity $W^{1,p}\hookrightarrow C^{0,1-n/p}$ for $p>n$; the full general Sobolev embedding hierarchy $W^{k,p}$ as a corollary. Theorem-level treatment beyond the survey paragraph in `24.01.01`.
- **prereqs:** `24.01.01` (Sobolev space / weak-derivative definitions), `02.07.06` (Lp spaces, Hölder/Minkowski), `02.05.04` (multivariable differentiation)
- **chapter:** `sobolev-weak-solutions` — `section: analysis`

### 02.16.02 — Trace and extension theorems for Sobolev functions
- **id:** `02.16.02`
- **title:** Trace and extension theorems for Sobolev functions on Lipschitz domains
- **spec:** The trace operator $T:W^{1,p}(\Omega)\to L^p(\partial\Omega)$ on a bounded $C^1$/Lipschitz domain, the characterisation $W^{1,p}_0=\ker T$, the boundary integration-by-parts (Gauss-Green) formula in Sobolev form, and the bounded extension operator $E:W^{1,p}(\Omega)\to W^{1,p}(\mathbb R^n)$. Full theorems replacing the descriptive paragraphs of `24.01.01`.
- **prereqs:** `24.01.01` (Sobolev spaces), `02.16.01` (Sobolev inequalities), `02.07.11` (area/coarea formulas — boundary integration)
- **chapter:** `sobolev-weak-solutions` — `section: analysis`

### 02.16.03 — The Rellich-Kondrachov compactness theorem and Poincaré inequalities
- **id:** `02.16.03`
- **title:** The Rellich-Kondrachov compactness theorem and the Poincaré inequalities
- **spec:** Compact embedding $W^{1,p}(\Omega)\hookrightarrow\!\hookrightarrow L^q(\Omega)$ for $q<p^*$ on a bounded $C^1$ domain (proof via the Kolmogorov-Riesz / Fréchet-Kolmogorov criterion and the extension operator), and the Poincaré / Poincaré-Wirtinger inequalities $\|u-(u)_\Omega\|_{L^p}\le C\|Du\|_{L^p}$ on bounded connected domains. The compactness engine of every direct-method existence proof, stated and proved.
- **prereqs:** `02.16.02` (trace/extension), `02.11.05` (compact operators), `02.07.06` (Lp spaces)
- **chapter:** `sobolev-weak-solutions` — `section: analysis`

### 02.16.04 — The Lax-Milgram theorem and existence of weak solutions of elliptic BVPs
- **id:** `02.16.04`
- **title:** Lax-Milgram and existence/uniqueness of weak solutions of second-order elliptic boundary-value problems
- **spec:** Lax-Milgram for a continuous coercive bilinear form on a Hilbert space; the weak formulation of $Lu=-\sum\partial_i(a^{ij}\partial_j u)+\sum b^i\partial_i u+cu=f$ in divergence form with uniform ellipticity; Gårding's inequality and energy estimates giving coercivity (for $c$ large or via Fredholm), yielding existence and uniqueness in $H^1_0(\Omega)$. The general-operator analysis result; `24.01.03` states Lax-Milgram only for the FEM/Poisson preliminary.
- **prereqs:** `02.16.03` (Rellich/Poincaré), `02.11.08` (Hilbert space, Riesz representation), `24.01.01` (Sobolev spaces)
- **chapter:** `sobolev-weak-solutions` — `section: analysis`

### 02.16.05 — Fredholm alternative and spectrum for second-order elliptic operators
- **id:** `02.16.05`
- **title:** The Fredholm alternative and eigenvalues for symmetric second-order elliptic operators
- **spec:** The Fredholm alternative for $Lu=f$ via compactness of the solution operator ($L^{-1}$ compact on $L^2$ by Rellich), existence of a real countable discrete spectrum $0<\lambda_1<\lambda_2\le\cdots\to\infty$ for symmetric uniformly elliptic $L$ with Dirichlet conditions, an $L^2$-orthonormal eigenbasis, and the variational (Rayleigh quotient / Courant-Fischer) characterisation of $\lambda_1$ with the principal-eigenvalue simplicity/positivity statement.
- **prereqs:** `02.16.04` (Lax-Milgram / weak elliptic existence), `02.11.05` (compact operators, Riesz-Schauder spectral theory), `02.16.03` (Rellich compactness)
- **chapter:** `sobolev-weak-solutions` — `section: analysis`

### 02.17.01 — Interior and boundary H^2 regularity for elliptic equations
- **id:** `02.17.01`
- **title:** Interior and boundary $H^2$ (and higher $H^k$) regularity of weak elliptic solutions
- **spec:** If $u\in H^1$ is a weak solution of $Lu=f$ with $f\in L^2$ and smooth coefficients, then $u\in H^2_{loc}$ with the elliptic estimate $\|u\|_{H^2}\le C(\|f\|_{L^2}+\|u\|_{L^2})$ (difference-quotient method); the bootstrap $f\in H^k\Rightarrow u\in H^{k+2}$; up-to-the-boundary regularity on smooth domains; the infinite-smoothness corollary via Sobolev embedding. The modern regularity theory absent from `02.13` (which carries only the classical Weyl/mean-value smoothness of harmonic functions).
- **prereqs:** `02.16.04` (weak elliptic existence), `02.16.01` (Sobolev embedding), `24.01.01` (Sobolev spaces)
- **chapter:** `elliptic-regularity` — `section: analysis`

### 02.17.02 — Maximum principles for general second-order elliptic operators
- **id:** `02.17.02`
- **title:** Weak and strong maximum principles and the Hopf lemma for general elliptic operators
- **spec:** The weak maximum principle for $Lu\le 0$ with $c\ge 0$ (uniformly elliptic non-divergence form), the Hopf boundary-point lemma, and the strong maximum principle (a non-constant subsolution attains no interior maximum); Harnack inequality statement for general elliptic operators. Generalises the harmonic-only maximum principle of `02.13.01` to operators $a^{ij}\partial_{ij}+b^i\partial_i+c$.
- **prereqs:** `02.13.01` (Laplace maximum principle — the model case), `02.17.01` (elliptic regularity context), `02.05.04` (multivariable differentiation)
- **chapter:** `elliptic-regularity` — `section: analysis`

### 02.17.03 — Schauder and Calderón-Zygmund estimates; elliptic De Giorgi-Nash-Moser
- **id:** `02.17.03`
- **title:** Schauder, $L^p$ (Calderón-Zygmund), and De Giorgi-Nash-Moser estimates for elliptic equations
- **spec:** Schauder interior/global estimates $\|u\|_{C^{2,\alpha}}\le C(\|f\|_{C^{0,\alpha}}+\|u\|_{C^0})$ for Hölder coefficients; the $L^p$ Calderón-Zygmund elliptic estimate $\|D^2u\|_{L^p}\le C\|f\|_{L^p}$; and the elliptic De Giorgi-Nash-Moser theorem (Hölder continuity of weak solutions of divergence-form equations with bounded measurable coefficients) with the elliptic Harnack inequality. The elliptic analogue of the parabolic De Giorgi-Nash already in `02.13.03`; in `02.13.01` these appear only as narrative.
- **prereqs:** `02.17.01` (elliptic $H^2$ regularity), `02.17.02` (maximum principle/Harnack), `02.16.01` (Sobolev inequalities)
- **chapter:** `elliptic-regularity` — `section: analysis`

### 02.18.01 — Existence of weak solutions for second-order parabolic equations (Galerkin)
- **id:** `02.18.01`
- **title:** Galerkin existence and energy estimates for second-order parabolic equations
- **spec:** Bochner spaces $L^2(0,T;H^1_0)$ with $u'\in L^2(0,T;H^{-1})$ and the Gelfand triple $H^1_0\subset L^2\subset H^{-1}$; the Galerkin approximation scheme, a priori energy estimates via Gronwall, weak compactness passage to the limit, and existence/uniqueness of weak solutions of $u_t+Lu=f$; the parabolic regularity improvement. The energy/Galerkin existence theory absent from the kernel-based `02.13.03`.
- **prereqs:** `02.16.04` (Lax-Milgram / elliptic weak theory), `24.01.01` (Sobolev spaces), `02.13.03` (heat equation, classical parabolic theory)
- **chapter:** `parabolic-hyperbolic` — `section: analysis`

### 02.18.02 — Existence of weak solutions for second-order hyperbolic equations
- **id:** `02.18.02`
- **title:** Galerkin existence, energy estimates, and finite propagation speed for second-order hyperbolic equations
- **spec:** Weak formulation of $u_{tt}+Lu=f$ in $L^2(0,T;H^1_0)$; Galerkin construction, energy estimates, existence/uniqueness; the energy-method finite-propagation-speed theorem and domain-of-dependence cone for general variable-coefficient operators. The variable-coefficient weak theory beyond the constant-coefficient d'Alembert/Huygens of `02.13.04`.
- **prereqs:** `02.18.01` (parabolic Galerkin machinery, Bochner spaces), `02.13.04` (wave equation, classical hyperbolic theory), `02.16.04` (Lax-Milgram)
- **chapter:** `parabolic-hyperbolic` — `section: analysis`

### 02.18.03 — Semigroup theory for evolution equations: Hille-Yosida
- **id:** `02.18.03`
- **title:** $C_0$-semigroups and the Hille-Yosida theorem for linear evolution equations
- **spec:** Strongly continuous semigroups and their infinitesimal generators, the resolvent and dissipativity, the Hille-Yosida and Lumer-Phillips generation theorems, analytic semigroups for parabolic problems, and the abstract Cauchy problem $u'=Au$, $u(0)=u_0$; application to the heat and Schrödinger/wave semigroups. No semigroup-generation unit exists in an analysis/PDE context.
- **prereqs:** `02.11.03` (unbounded self-adjoint operators, resolvent), `02.11.04` (Banach spaces), `02.18.01` (evolution-equation context)
- **chapter:** `parabolic-hyperbolic` — `section: analysis`

### 02.18.04 — Direct method of the calculus of variations
- **id:** `02.18.04`
- **title:** The direct method of the calculus of variations and weak lower semicontinuity
- **spec:** Existence of minimisers of $I[u]=\int_\Omega L(Du,u,x)\,dx$ over $W^{1,p}$ via coercivity + weak lower semicontinuity; convexity of $p\mapsto L$ as the criterion for weak lower semicontinuity; the Euler-Lagrange equation as the weak PDE satisfied by a minimiser; statement of quasiconvexity for the vectorial case. The variational existence theory referenced but never built in `02.13.01`; distinct from the classical Euler-Lagrange ODE derivation `09.02.02`.
- **prereqs:** `02.16.03` (Rellich/Poincaré, weak compactness), `02.16.01` (Sobolev embedding), `09.02.02` (Euler-Lagrange equations, classical)
- **chapter:** `parabolic-hyperbolic` — `section: analysis`

### 02.18.05 — Viscosity solutions of Hamilton-Jacobi equations
- **id:** `02.18.05`
- **title:** Viscosity solutions of Hamilton-Jacobi equations
- **spec:** The definition of viscosity sub/supersolutions of $u_t+H(Du,x)=0$ via touching test functions, consistency with classical solutions, the comparison principle giving uniqueness, the Hopf-Lax formula for convex Hamiltonians, and existence by vanishing viscosity. The modern weak-solution theory (Crandall-Lions); the corpus has only the classical Hamilton-Jacobi *equation* of mechanics (`05.05.04`, `09.05.02`), no viscosity theory.
- **prereqs:** `02.13.03` (heat equation / vanishing viscosity smoothing), `09.05.02` (classical Hamilton-Jacobi equation), `02.18.04` (variational/Hopf-Lax context)
- **chapter:** `parabolic-hyperbolic` — `section: analysis`

### 02.18.06 — Scalar conservation laws and entropy solutions
- **id:** `02.18.06`
- **title:** Scalar conservation laws: shocks, the Rankine-Hugoniot condition, and entropy solutions
- **spec:** Weak solutions of $u_t+\mathrm{div}\,F(u)=0$, characteristics and finite-time gradient blow-up, the Rankine-Hugoniot jump condition, the Lax entropy condition / Oleinik inequality, the Hopf-Cole-/Lax-Oleinik formula for convex flux, the Riemann problem (shocks and rarefactions), and Kruzhkov uniqueness of entropy solutions. No conservation-law / entropy-solution / shock unit exists.
- **prereqs:** `02.18.05` (viscosity-solution / vanishing-viscosity framework), `02.13.04` (wave equation / characteristics), `24.01.01` (weak/distributional formulation)
- **chapter:** `parabolic-hyperbolic` — `section: analysis`

---

## COVERED (not gaps)

- **Sobolev spaces $H^s$, $W^{k,p}$; weak derivatives** — `24.01.01` (definitions,
  completeness, $H^1_0$, Poincaré-equivalent norm). The deep embedding/trace/compactness
  *theorems* it only surveys are the gaps `02.16.01-03`.
- **Weak/variational formulation of elliptic PDE; Lax-Milgram (FEM/Poisson case)** —
  `24.01.03`. General-operator Lax-Milgram existence is gap `02.16.04`.
- **Babuška-Brezzi inf-sup (saddle-point stability)** — `24.01.04` (out of Evans' core scope; FEM).
- **Laplace/harmonic functions, mean value, Liouville, Harnack (harmonic), Weyl
  smoothness, Dirichlet/Perron, maximum principle (harmonic)** — `02.13.01`.
- **Poisson equation, Newtonian potential, fundamental solution, Fredholm-by-potentials** — `02.13.02`.
- **Heat equation, heat kernel, Duhamel, classical energy method, parabolic
  De Giorgi-Nash-Moser regularity + parabolic Harnack** — `02.13.03`. (Parabolic DGM is
  a stated theorem here; only the *elliptic* DGM is a gap, in `02.17.03`.)
- **Wave equation, d'Alembert, spherical means, Huygens, classical energy method,
  finite propagation speed (constant coefficient)** — `02.13.04`.
- **Distributions, Schwartz kernel theorem, pseudodifferential operators, wavefront
  sets, propagation of singularities** — `02.14.01-04` (microlocal layer; prereqs).
- **Fourier transform, Plancherel** — `02.10.04`. **Lp spaces, Hölder/Minkowski** —
  `02.07.06`. **Radon-Nikodym** — `02.07.08`. **Compact operators / Riesz-Schauder** —
  `02.11.05`. **Hahn-Banach, Hilbert/Banach spaces, unbounded self-adjoint** — `02.11.02/04/03/08`.
- **Classical Euler-Lagrange / action principle (ODE form)** — `09.02.01-02`,
  `05.05.04` / `09.05.02` (classical Hamilton-Jacobi equation of mechanics). The modern
  weak/viscosity/variational PDE theory is gaps `02.18.04-05`.

## OUT OF SCOPE

- **Calderón-Zygmund singular-integral theory, Littlewood-Paley / interpolation,
  dispersive / Strichartz estimates** — these are the dedicated remits of new chapters
  `02.19`, `02.20`, `02.21` and belong to the Stein/harmonic-analysis and dispersive-PDE
  source books, not Evans' core graduate PDE text. (The $L^p$ Calderón-Zygmund *elliptic
  estimate* as applied to second-order equations is folded into `02.17.03`; the
  standalone singular-integral theory is for `02.19`.)
- **Sobolev spaces of differential forms ($H\Lambda^k$), FEEC, Raviart-Thomas/Nédélec,
  Babuška-Brezzi, Arnold-Falk-Winther** — `24-numerical-pde` (numerics, not Evans analysis).
- **Navier-Stokes / Euler existence theory** — beyond Evans' second-order linear/scalar
  core (Evans treats these only in passing); reserved for a fluids/harmonic source book.
- **Stochastic-analysis / PDE bridge (Feynman-Kac, generator of a diffusion)** —
  `02.15.03` (stochastic-analysis chapter).
