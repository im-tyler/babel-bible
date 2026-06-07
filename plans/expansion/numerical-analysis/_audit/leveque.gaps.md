# Audit: LeVeque — *Finite Difference Methods for Ordinary and Partial Differential Equations*

`source_book: leveque`
`source_curriculum: numerical-analysis`
`section: numerical-analysis` (new chapters `content/43-numerical-analysis/10-numerical-odes`,
`11-finite-difference-pdes`)

Method: each LeVeque headline theorem was verified by filename grep + body grep against the
live corpus (`content/43-numerical-analysis/`, `content/24-numerical-pde/`,
`content/02-analysis/`). Findings:

- **The entire `content/43-numerical-analysis/` section is an empty scaffold** — all eleven
  chapter dirs (`01-floating-point-conditioning` … `11-finite-difference-pdes`) contain zero
  `.md` files. There is NO existing numerical-ODE or finite-difference-PDE unit anywhere in
  the corpus (`grep -riE "runge-kutta|crank-nicolson|von neumann stab|lax-wendroff|lax
  equivalence|dahlquist|zero-stab|upwind|method of lines|finite difference"` over `content/`
  returns only incidental physics/chem hits — lattice numerics, Langevin updates, the FEM
  Galerkin unit `24.02.01`). So both chapters 43.10 and 43.11 are greenfield.

- **The continuous-PDE theory is fully built and must be cross-ref'd, not re-proved:**
  `02.13.01-04` (classical Laplace/Poisson/heat/wave), `02.16.04` (Lax-Milgram weak elliptic
  existence), `02.17.01` ($H^2$/$H^k$ elliptic regularity), `02.18.01/02` (Galerkin
  existence parabolic/hyperbolic). LeVeque's role is the **numerical discretisation and its
  convergence**, not the continuous solvability — those are cross-refs.

- **The finite-ELEMENT / Galerkin / FEEC treatment of PDEs is the distinct
  `content/24-numerical-pde/` section** (`24.01-24.04`: Sobolev/weak forms, Céa/Bramble-
  Hilbert, mixed/RT FEM, Whitney forms, the discrete de Rham complex, AFW convergence
  `24.03.06`). Finite-difference methods are a **different discretisation family**
  (pointwise stencils, not variational subspaces); they are cross-ref'd against FEM, never
  duplicated.

- **Coordination with Süli-Mayers (auditing `numerical-analysis` in parallel):** Süli-Mayers
  owns the ELEMENTARY one-step construction (the intro Euler/RK *derivation*). This audit
  owns the **stability/stiffness/multistep theory** in 43.10 and **all of FD-PDE** in 43.11.
  The intro one-step unit `43.10.01` below is written as the shared RK landing slot — if
  Süli-Mayers claims it, this audit's 43.10.02… still stand; renumber 43.10.01 out only if
  a duplicate lands.

These are the genuine gaps below.

---

## GENUINE GAPS — 43.10 numerical-odes

### 43.10.01 — One-step methods: Euler, trapezoidal, Runge-Kutta; consistency and order
- **id:** `43.10.01`
- **title:** One-step methods for IVPs: forward/backward Euler, the trapezoidal rule, Runge-Kutta families, local truncation error and order of accuracy
- **spec:** The IVP $y'=f(t,y)$, $y(0)=y_0$ and the general one-step map $u^{n+1}=u^n+h\,\Phi(t_n,u^n,h)$; forward (explicit) and backward (implicit) Euler, the trapezoidal/implicit-midpoint rule, and the explicit Runge-Kutta family with its Butcher tableau (incl. classical RK4); local truncation error $\tau^n$, consistency ($\tau\to0$) and order $p$ via Taylor matching of the order conditions; one-step global error bound for a Lipschitz $f$ (the convergence-of-one-step-methods theorem, $O(h^p)$). SHARED RK landing slot with Süli-Mayers — coordinate so the elementary derivation lands once.
- **prereqs:** `02.12.01` (phase space / vector field / IVP, continuous existence), `02.06.03` (systems of linear ODE, matrix exponential — the linear test problem), `02.05.05` (multivariable Taylor — order-condition matching)
- **chapter:** `numerical-odes` — `section: numerical-analysis`, `chapter: numerical-odes`

### 43.10.02 — Linear multistep methods: Adams and BDF families, order via the characteristic polynomials
- **id:** `43.10.02`
- **title:** Linear multistep methods: Adams-Bashforth/Moulton and BDF families; the generating polynomials $\rho,\sigma$ and order conditions
- **spec:** The $r$-step LMM $\sum_{j=0}^r \alpha_j u^{n+j}=h\sum_{j=0}^r\beta_j f^{n+j}$; derivation of Adams-Bashforth (explicit) and Adams-Moulton (implicit) by interpolatory quadrature, and the backward-differentiation formulas (BDF); the first/second characteristic polynomials $\rho(\zeta),\sigma(\zeta)$; consistency $\Leftrightarrow\rho(1)=0,\ \rho'(1)=\sigma(1)$ and the order conditions through the residual of $\rho,\sigma$; predictor-corrector pairing. The constructive multistep layer.
- **prereqs:** `43.10.01` (one-step methods, LTE/order framework), `02.05.05` (Taylor — interpolatory-quadrature derivation), `02.12.01` (IVP). NOTE: the natural polynomial-interpolation/quadrature prereq lives in the still-empty in-section chapters `43.08`/`43.09`; cite those ids once they exist.
- **chapter:** `numerical-odes` — `section: numerical-analysis`, `chapter: numerical-odes`

### 43.10.03 — Zero-stability, the root condition, and the Dahlquist equivalence theorem
- **id:** `43.10.03`
- **title:** Zero-stability and convergence of linear multistep methods: the root condition and Dahlquist's equivalence theorem
- **spec:** Zero-stability as boundedness of the numerical solution as $h\to0$, equivalent to the **root condition** on $\rho(\zeta)$ (all roots in $|\zeta|\le1$, those on $|\zeta|=1$ simple); the Dahlquist **equivalence theorem**: for a consistent LMM, *convergence $\Leftrightarrow$ zero-stability*, and convergence order equals consistency order under zero-stability; the Dahlquist **first barrier** on the attainable order of a zero-stable $r$-step method. The central convergence theorem for multistep ODE methods.
- **prereqs:** `43.10.02` (LMM, $\rho/\sigma$, consistency), `01.01.08` (eigenvalues — characteristic roots), `02.03.02` (Cauchy/Bolzano-Weierstrass — boundedness criterion)
- **chapter:** `numerical-odes` — `section: numerical-analysis`, `chapter: numerical-odes`

### 43.10.04 — Absolute stability, stability regions, and the linear test equation
- **id:** `43.10.04`
- **title:** Absolute stability: the linear test equation, stability regions, and the boundary-locus method
- **spec:** The Dahlquist test equation $y'=\lambda y$ and the stability function $R(z)$, $z=h\lambda$; the **region of absolute stability** $\{z:|R(z)|\le1\}$ (or $\{z:\text{all roots of }\rho(\zeta)-z\sigma(\zeta)\text{ in unit disc}\}$ for LMMs); explicit regions for forward Euler, RK4, and Adams/BDF; the boundary-locus construction; behaviour under coupled linear systems via eigen-decoupling. The applied stability-region machinery distinct from the asymptotic ($h\to0$) zero-stability of 43.10.03.
- **prereqs:** `43.10.03` (zero-stability, root condition), `01.01.08` (eigenvalues / diagonalisation of the linear system), `06.01.01` (holomorphic function / complex plane — stability regions in $z=h\lambda\in\mathbb C$)
- **chapter:** `numerical-odes` — `section: numerical-analysis`, `chapter: numerical-odes`

### 43.10.05 — Stiff equations, A-stability, and the Dahlquist second barrier
- **id:** `43.10.05`
- **title:** Stiffness, A-stability, L-stability, and the Dahlquist second barrier
- **spec:** Stiff systems (widely separated eigenvalue time-scales) and the practical failure of explicit methods; **A-stability** (stability region contains the entire left half-plane $\Re z\le0$), with backward Euler / trapezoidal / implicit RK as examples; **L-stability** ($R(\infty)=0$) and why trapezoidal is A- but not L-stable; the **Dahlquist second barrier**: no A-stable LMM has order $>2$, and the trapezoidal rule is the optimal-error A-stable second-order LMM. The stiffness/A-stability theory and its sharp barrier.
- **prereqs:** `43.10.04` (absolute stability, stability regions, test equation), `02.06.03` (linear systems / matrix exponential — stiff decoupling), `43.10.02` (LMM order theory)
- **chapter:** `numerical-odes` — `section: numerical-analysis`, `chapter: numerical-odes`

---

## GENUINE GAPS — 43.11 finite-difference-pdes

### 43.11.01 — Finite differences for the elliptic BVP: the 5-point Laplacian and its convergence
- **id:** `43.11.01`
- **title:** Finite-difference discretisation of the Poisson problem: the 5-point Laplacian, the discrete maximum principle, and convergence
- **spec:** The 5-point stencil for $-\Delta u=f$ on a rectangle with Dirichlet data; the sparse linear system, its symmetric positive-definite / M-matrix structure and the **discrete maximum principle**; local truncation error $O(h^2)$; the convergence theorem $\|U-u\|_\infty=O(h^2)$ via consistency + stability of $A_h^{-1}$ (the discrete-Green's-function / comparison-function bound); known eigenvalues of the discrete Laplacian. The FD elliptic discretisation, **distinct from** the FEM/Galerkin discretisation of the same problem in `24.02.01`/`24.01.03` (cross-ref) and from the continuous Poisson theory `02.13.02` (cross-ref).
- **prereqs:** `02.13.02` (continuous Poisson / fundamental solution — the problem being discretised), `02.13.01` (maximum principle — its discrete analogue), `01.01.08` (eigenvalues — spectrum of $A_h$)
- **chapter:** `finite-difference-pdes` — `section: numerical-analysis`, `chapter: finite-difference-pdes`

### 43.11.02 — The method of lines and stability for parabolic problems (heat equation)
- **id:** `43.11.02`
- **title:** Parabolic finite differences: the method of lines, explicit/implicit/Crank-Nicolson schemes, and the stability restriction
- **spec:** Semidiscretisation of $u_t=u_{xx}$ by the **method of lines** to a stiff ODE system $U'=A_h U$, then time-stepping by forward Euler (explicit, $O(\Delta t/\Delta x^2)$ restriction), backward Euler (implicit, unconditionally stable), and **Crank-Nicolson** (trapezoidal, second-order, unconditionally stable); local truncation orders; absolute-stability analysis of $\Delta t\,\lambda(A_h)$ explaining the parabolic step restriction via the eigenvalues of the 1-D discrete Laplacian. Links 43.10's stiff/A-stability machinery to the PDE; cross-ref continuous heat theory `02.13.03`.
- **prereqs:** `43.11.01` (discrete Laplacian / its spectrum), `43.10.05` (stiffness / A-stability — the MOL system is stiff), `02.13.03` (continuous heat equation — the problem discretised)
- **chapter:** `finite-difference-pdes` — `section: numerical-analysis`, `chapter: finite-difference-pdes`

### 43.11.03 — Von Neumann stability analysis and the CFL condition
- **id:** `43.11.03`
- **title:** Von Neumann (Fourier) stability analysis of finite-difference schemes and the CFL condition
- **spec:** Fourier-mode ansatz $U_j^n=g^n e^{i\xi j\Delta x}$ for constant-coefficient linear schemes; the **amplification factor** $g(\xi)$ and the von Neumann stability criterion $|g(\xi)|\le1+O(\Delta t)$ for all modes; worked criteria recovering the explicit-heat restriction $\Delta t\le\tfrac12\Delta x^2$ and the advection **Courant-Friedrichs-Lewy (CFL)** number $\nu=a\Delta t/\Delta x\le1$; the CFL **necessary** condition via domains of dependence. The principal practical stability tool for FD-PDE.
- **prereqs:** `43.11.02` (explicit/implicit heat schemes — the test cases), `02.10.01` (Fourier series — the mode ansatz), `02.13.04` (wave equation / domains of dependence — for the CFL geometric argument)
- **chapter:** `finite-difference-pdes` — `section: numerical-analysis`, `chapter: finite-difference-pdes`

### 43.11.04 — Hyperbolic finite differences: upwind, Lax-Friedrichs, Lax-Wendroff; numerical diffusion and dispersion
- **id:** `43.11.04`
- **title:** Finite-difference schemes for the advection equation: upwind, Lax-Friedrichs, Lax-Wendroff, and modified-equation analysis
- **spec:** The linear advection equation $u_t+au_x=0$; the first-order **upwind** and **Lax-Friedrichs** schemes and the second-order **Lax-Wendroff** scheme, with their Butcher-free derivations and stencils; stability via the CFL number (43.11.03); the **modified-equation / truncation-error analysis** showing first-order schemes carry artificial **numerical diffusion** ($u_{xx}$ term) and second-order schemes carry **numerical dispersion** ($u_{xxx}$ term); monotonicity and the failure of high-order linear schemes near discontinuities (Godunov pointer). The hyperbolic FD core; cross-ref continuous wave/transport theory `02.13.04` and the entropy-solution theory `02.18.06`.
- **prereqs:** `43.11.03` (von Neumann / CFL stability), `02.13.04` (wave/transport equation, characteristics), `02.18.06` (scalar conservation laws / entropy solutions — the nonlinear context the schemes approximate)
- **chapter:** `finite-difference-pdes` — `section: numerical-analysis`, `chapter: finite-difference-pdes`

### 43.11.05 — The Lax equivalence theorem: consistency + stability ⇔ convergence
- **id:** `43.11.05`
- **title:** The Lax-Richtmyer equivalence theorem for finite-difference schemes
- **spec:** The abstract well-posed linear evolution problem and a consistent one-step FD scheme $U^{n+1}=C(\Delta t)U^n$; **Lax-Richtmyer stability** (uniform power-boundedness $\|C(\Delta t)^n\|\le K$ for $n\Delta t\le T$); the **equivalence theorem**: for a consistent scheme approximating a well-posed linear IVP, *stability $\Leftrightarrow$ convergence*; the Kreiss matrix theorem / power-boundedness characterisation as the stability engine and its relation to von Neumann analysis. The capstone convergence theorem of linear FD-PDE — the PDE analogue of Dahlquist equivalence (43.10.03).
- **prereqs:** `43.11.03` (von Neumann stability — the practical sufficient test), `43.11.02` (one-step PDE schemes / MOL operators), `01.01.08` (eigenvalues / operator powers — Kreiss/power-boundedness)
- **chapter:** `finite-difference-pdes` — `section: numerical-analysis`, `chapter: finite-difference-pdes`

---

## COVERED (cross-referenced, not gaps)

These existing units carry the **continuous PDE theory** and the **finite-element /
variational discretisation** that LeVeque's finite-difference units cross-reference and must
NOT duplicate:

Continuous PDE theory (`02-analysis`) — the problems being discretised:
- **Laplace/harmonic, maximum principle** — `02.13.01` (model for the *discrete* max principle in 43.11.01).
- **Poisson, fundamental solution, Newtonian potential** — `02.13.02` (the elliptic BVP of 43.11.01).
- **Heat equation, heat kernel, Duhamel** — `02.13.03` (the parabolic problem of 43.11.02).
- **Wave equation, d'Alembert, characteristics, domains of dependence** — `02.13.04` (the hyperbolic/CFL context of 43.11.03/04).
- **Lax-Milgram / weak elliptic existence** — `02.16.04`; **$H^2$ elliptic regularity** — `02.17.01` (continuous solvability/regularity assumed by FD convergence proofs).
- **Galerkin existence, parabolic/hyperbolic** — `02.18.01`/`02.18.02`; **scalar conservation laws / entropy solutions** — `02.18.06` (the nonlinear hyperbolic theory behind 43.11.04).
- **Fourier series / transform** — `02.10.01`/`02.10.04` (the mode ansatz of von Neumann analysis 43.11.03).
- **Continuous IVP / phase flow / linear ODE systems** — `02.12.01`, `02.06.03` (the ODE being discretised in 43.10).

Finite-ELEMENT / Galerkin / FEEC discretisation (`24-numerical-pde`) — the DISTINCT
variational method (cross-ref, never duplicated by FD):
- **Sobolev/weak formulation of elliptic PDE, Lax-Milgram (FEM)** — `24.01.01`/`24.01.03`; **inf-sup** — `24.01.04`.
- **Classical conforming FEM, Céa, Bramble-Hilbert** — `24.02.01` (the Galerkin counterpart to the FD elliptic discretisation 43.11.01); **mixed/Raviart-Thomas FEM** — `24.02.02`.
- **Whitney forms, edge elements, discrete de Rham, FEEC convergence (AFW)** — `24.03.01-07`; **FEEC applications (Hodge Laplacian, Maxwell, elasticity, eigenvalue approx.)** — `24.04.*`.

Linear-algebra prerequisites (`01-foundations`):
- **Eigenvalues/eigenvectors** — `01.01.08` (spectra of discrete operators, stability roots); **Rayleigh quotient / Courant-Fischer** — `01.01.14`.

## OUT OF SCOPE

- **Adaptive mesh refinement, multigrid, and modern sparse direct/iterative solvers for the
  discrete systems** — solver technology belongs to the (currently scaffolded) `43.03`
  direct-solvers and `43.07` Krylov chapters and to a dedicated multigrid source book, not
  to LeVeque's discretisation core. (FD produces the sparse system; how to *solve* it is a
  separate spine chapter.)
- **High-resolution / TVD / ENO-WENO / flux-limiter and Godunov finite-volume schemes for
  nonlinear conservation laws** — LeVeque's *other* book (*Finite Volume Methods for
  Hyperbolic Problems*); reserved for a finite-volume audit. 43.11.04 only *points* to the
  monotonicity obstruction (Godunov's theorem) without building the nonlinear FV apparatus.
- **Spectral / pseudospectral methods (Chebyshev, FFT-based)** — a distinct discretisation
  family (Trefethen's *Spectral Methods*); not finite-difference, reserve for that source.
- **Detailed Butcher-tableau order theory / rooted-tree (Hairer-Wanner) algebra for
  high-order RK** — beyond LeVeque's introductory ODE treatment; a Hairer-Nørsett-Wanner
  audit would own the rooted-tree/B-series machinery. 43.10.01 carries RK4 and the order
  conditions only to the depth LeVeque presents.
- **Continuous existence/uniqueness (Picard-Lindelöf) for general nonlinear ODE** — assumed
  as input; the corpus's IVP/flow theory is `02.12.01` (cross-ref), and a full
  Picard-Lindelöf theorem unit, if desired, is an analysis-spine item, not a numerics gap.
