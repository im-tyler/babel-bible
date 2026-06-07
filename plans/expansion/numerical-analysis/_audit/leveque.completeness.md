# Completeness re-audit: LeVeque — *Finite Difference Methods for Ordinary and Partial Differential Equations*

`source_book: leveque`
`source_curriculum: numerical-analysis`

Re-audit of LeVeque against the **live, post-ship** corpus. The numerical-analysis spine
has shipped all 42 planned units, including the ten LeVeque units 43.10.01–05 (numerical
ODEs) and 43.11.01–05 (finite-difference PDEs). Verified shipped on disk:

```
content/43-numerical-analysis/10-numerical-odes/43.10.01..05      (one-step/RK, LMM/Adams/BDF,
    zero-stability/Dahlquist-equivalence, absolute-stability/regions, stiffness/A-stability/2nd-barrier)
content/43-numerical-analysis/11-finite-difference-pdes/43.11.01..05  (5-point elliptic Laplacian,
    method-of-lines parabolic, von Neumann/CFL, hyperbolic upwind/LF/LW + diffusion/dispersion,
    Lax-Richtmyer equivalence)
```

Method: rebuilt LeVeque's headline-theorem list and grepped each against the live corpus
(filename + body), checking the obvious chapter home AND cross-section homes, before
calling anything a gap. Strict scope judgement applied per AUDIT_BRIEF.

## RESULT — 1 new gap

LeVeque's **Chapter 2, "Steady States and Boundary Value Problems"** — the one-dimensional
**two-point boundary-value problem** $u''=f$ on $[a,b]$ solved by finite differences — is a
genuine, high-value remaining gap. It is the foundational chapter of the book and is **not**
covered by any shipped unit:

- **43.11.01** (5-point elliptic Laplacian) introduces the 1-D second-difference operator
  $T=\tfrac1{h^2}\mathrm{tridiag}(-1,2,-1)$ ONLY as the Kronecker building block of the 2-D
  Laplacian on a square ($A_h=I\otimes T+T\otimes I$). Verified: the unit never poses the
  standalone 1-D two-point BVP, has **no** variable-coefficient operator $(\kappa(x)u')'$, and
  has **no** Neumann/Robin/mixed boundary conditions (grep for `variable coeff|neumann|robin|
  mixed bound|sturm` returns only an unrelated barrier-function exercise `p(x)=(x-1/2)^2`).
  LeVeque Ch. 2's distinctively 1-D content — the tridiagonal solve, the **Green's-function /
  discrete-comparison convergence** for the 1-D problem, **variable coefficients**, **Neumann/
  Robin BCs and the ghost-point / half-order accuracy issue**, and **nonlinear two-point BVPs
  via Newton's method** — is absent.
- **No shooting-method unit exists** (grep `shooting` over `content/` returns only prose/false
  positives; no numerical shooting unit). No continuous Sturm-Liouville BVP unit exists
  (`sturm|liouville` filename grep: none in analysis). The `02.08`/`02.06` ODE units cover
  IVPs only (no `boundary-value`/`two-point` body hits).
- **Coordination with the Süli re-audit:** no double-proposal risk. The original Süli-Mayers
  audit (`suli-mayers.gaps.md`, OUT-OF-SCOPE §) **explicitly deferred** "Boundary-value
  problems for ODEs / finite-difference & finite-element PDE discretization (Süli & Mayers
  Ch. 13, 14)" to **LeVeque (43.10/43.11)**. Ownership is unambiguously LeVeque's. This is
  ONE unit; per the prompt it lands at the suggested free id `43.10.06`.

`43.10.06` is a verified-free slot (`find content -name "43.10.06*"` → none). LeVeque's
Chapter 2 is ODE-flavoured (steady-state ODE BVPs), so the `numerical-odes` chapter home is
the correct one.

### 43.10.06 — Finite-difference methods for two-point boundary-value problems
- **id:** `43.10.06`
- **title:** Finite-difference methods for two-point boundary-value problems: the tridiagonal solve, convergence, variable coefficients, and Neumann/Robin conditions
- **spec:** The one-dimensional two-point BVP $-u''=f$ (and the variable-coefficient
  $-(\kappa(x)u')'+ q(x)u=f$) on $[a,b]$ with Dirichlet data; the centred second-difference
  discretisation yielding the **tridiagonal SPD/M-matrix** system $A_h U=F$; local truncation
  error $O(h^2)$ and the **convergence theorem $\|U-u\|_\infty=O(h^2)$** via consistency +
  stability of $A_h^{-1}$ (the discrete-Green's-function / comparison-function bound, the 1-D
  analogue of the discrete maximum principle); treatment of **Neumann and Robin boundary
  conditions** by one-sided / ghost-point stencils and the resulting accuracy bookkeeping;
  and **nonlinear two-point BVPs** $u''=g(x,u,u')$ solved by Newton's method on the discrete
  system. The 1-D steady-state BVP core of LeVeque Ch. 2 — distinct from the 2-D elliptic
  5-point discretisation `43.11.01` (which uses $T$ only as a Kronecker factor) and from the
  continuous ODE theory `02.06.02`/`02.08.02` (cross-ref, IVP-only).
- **prereqs:** `43.03.02` (Cholesky / SPD tridiagonal solve — the linear system), `43.02.03`
  (Newton's method — the nonlinear BVP step), `43.10.01` (local truncation error / order
  framework), `02.06.02` (continuous nth-order linear ODE — the problem being discretised)
- **chapter:** `numerical-odes` — `section: numerical-analysis`, `chapter: numerical-odes`
- **source_book:** `leveque`
- **source_curriculum:** `numerical-analysis`

---

## COVERED / not new gaps (verified against the live corpus)

LeVeque's remaining headline topics are all already shipped — re-verified on disk:

- **One-step methods (Euler/trapezoidal/RK4), LTE & order** — `43.10.01`.
- **Linear multistep (Adams-Bashforth/Moulton, BDF), $\rho/\sigma$ polynomials** — `43.10.02`.
- **Zero-stability, root condition, Dahlquist equivalence theorem** — `43.10.03`.
- **Absolute stability, stability regions, the test equation, boundary locus** — `43.10.04`.
- **Stiffness, A-stability, L-stability, Dahlquist 2nd barrier** — `43.10.05`.
- **5-point Laplacian elliptic BVP (2-D), discrete max principle, $O(h^2)$ convergence** — `43.11.01`.
- **Method of lines, explicit/implicit/Crank-Nicolson parabolic, step restriction** — `43.11.02`.
- **Von Neumann (Fourier) stability, amplification factor, CFL condition** — `43.11.03`.
- **Hyperbolic FD: upwind, Lax-Friedrichs, Lax-Wendroff; numerical diffusion/dispersion** — `43.11.04`.
- **Lax-Richtmyer equivalence (consistency + stability ⇔ convergence), Kreiss/power-boundedness** — `43.11.05`.

Continuous PDE/ODE theory cross-referenced (not duplicated): `02.13.01-04`, `02.16.04`,
`02.17.01`, `02.18.01/02/06`, `02.10.01`, `02.06.02/03`, `02.08.02`, `02.12.01`. FEM/FEEC
discretisation cross-referenced: `24.01-24.04`.

## OUT OF SCOPE (re-affirmed — still correctly excluded)

- **Multigrid / AMR / modern sparse iterative solvers for the discrete systems** — solver
  technology; Krylov/preconditioning already shipped `43.07.01-05` (Jacobi/GS/SOR, Arnoldi/
  Lanczos, GMRES, CG, preconditioning). FD produces the sparse system; how to solve it is the
  43.07 chapter's job. A dedicated multigrid source book, not LeVeque, would own the V-cycle
  convergence theory. **Not a gap.**
- **High-resolution / TVD / ENO-WENO / flux-limiter / Godunov finite-volume schemes** —
  LeVeque's *other* book (*Finite Volume Methods for Hyperbolic Problems*); reserved for a
  finite-volume audit. 43.11.04 only points to the monotonicity obstruction (Godunov). **Not a gap.**
- **Spectral / pseudospectral (Chebyshev, FFT) methods** — distinct discretisation family
  (Trefethen, *Spectral Methods*); not finite-difference. **Not a gap.**
- **Rooted-tree / B-series order theory for high-order RK** — Hairer-Nørsett-Wanner depth,
  beyond LeVeque's introductory ODE treatment; 43.10.01 carries RK4 and the order conditions
  to LeVeque's depth. **Not a gap.**
- **Continuous Picard-Lindelöf existence/uniqueness for nonlinear ODE** — assumed input;
  an analysis-spine item (IVP/flow theory at `02.12.01`), not a numerics gap. **Not a gap.**

---

## RETURN SUMMARY
- **New genuine gaps:** 1 — `43.10.06` (finite-difference methods for two-point BVPs, LeVeque Ch. 2).
- **COVERED (re-verified shipped):** 10 LeVeque units (43.10.01-05, 43.11.01-05) + cross-ref theory.
- **OUT OF SCOPE (re-affirmed):** 5 clusters (multigrid/solvers, finite-volume/TVD-WENO,
  spectral, RK rooted-trees, Picard-Lindelöf).
- **Coordination:** Süli re-audit deferred all ODE-BVP discretization to LeVeque — no
  double-proposal; the two-point-BVP unit is ONE unit, owned here as `43.10.06`.
