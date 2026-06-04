# Douglas N. Arnold — *Finite Element Exterior Calculus* (FT 1.20) — Deepening gap file

**SLUG:** `douglas-arnold-feec` · re-audited 2026-06-03 against the live corpus (1404 unit files).

## Verdict

The original audit (2026-05-22, written against ~362 units, estimating ~8% coverage)
has been **almost entirely executed**. The proposed `24-numerical-pde/` chapter now exists
and ships **all 20 unit-producing items** of the §3 punch-list (Priority 0–3): the four
Sobolev/weak-PDE prereqs `24.01.01–04`, the bridge unit `03.04.15`, the two classical-FEM
units `24.02.01–02`, the six FEEC-core units `24.03.01–06`, and the six application/pointer
units `24.04.01–06`. FEEC is now **substantially covered** — the discrete de Rham complex,
polynomial form spaces $\mathcal P_r\Lambda^k/\mathcal P_r^-\Lambda^k$, Koszul operator,
Whitney forms, Raviart-Thomas/Nédélec/BDM identifications, bounded cochain projection,
the AFW convergence theorem, and the Maxwell/elasticity applications all have dedicated units.

Only **2 genuine gaps** remain — both are distinct, named theorem-clusters in Arnold's book
that the punch-list folded into other units rather than shipping standalone, and that have
**no dedicated unit anywhere in the corpus** after grepping. Conservative result; do not
manufacture more.

---

## GENUINE GAPS (2)

### GAP 1 — Abstract Hilbert complexes and the abstract Hodge decomposition
- **id:** `24.03.07` (FREE — `24.03.01–06` occupied; verified)
- **title:** Abstract Hilbert complexes, the abstract Hodge decomposition, and abstract Galerkin stability
- **spec:** A closed, densely-defined Hilbert complex $\cdots \to W^k \xrightarrow{d^k} W^{k+1} \to \cdots$ with closed range; the abstract Hodge decomposition $W^k = \mathfrak B^k \oplus \mathfrak H^k \oplus \mathfrak B^{k*}$ (range of $d$, harmonic space, range of $d^*$); the abstract Poincaré inequality; abstract well-posedness of the Hodge-Laplacian saddle-point problem; the abstract Galerkin stability theorem — stability + convergence follow from a *subcomplex admitting a uniformly bounded cochain projection*, proved **once** at the abstract level and then specialised to the de Rham complex. This is the book's load-bearing organising chapter (AFW 2018 Ch. 5; AFW 2010 §3.1–3.2; AFW 2006 §3): it is the reason FEEC is a *framework* and not a list of elements.
- **prereqs:** `24.01.02` (Sobolev forms / $H\Lambda^k$ as concrete Hilbert complex, verified), `02.11.08-hilbert-space` (verified), `02.11.02-hahn-banach-theorem` (carries Banach closed-range theorem, verified), `03.04.15-hodge-laplacian-on-a-riemannian-manifold` (verified), `24.03.05` + `24.03.06` (the concrete instances this abstracts, verified)
- **chapter:** dir `content/24-numerical-pde/03-discrete-de-rham-and-feec/`; frontmatter `section: numerical-pde`, `chapter: discrete-de-rham-and-feec`
- **why genuine:** "Hilbert complex" appears only as a *recurring phrase* inside `24.01.02`, `24.03.04–06`, `24.04.01–02` — always specialised to the concrete $H\Lambda^k$ de Rham complex. No unit states/proves the *abstract* closed-range Hilbert-complex theory (the form-free version where "de Rham" never appears) as its own object. Grep for `abstract hilbert complex|abstract hodge decomposition|closed range theorem` across `content/` returns only the generic Banach closed-range theorem in `02.11.02` (not a complex), confirming absence. This is the single highest-value missing unit: it is the conceptual spine of the book and the reason elasticity, Stokes, and Maxwell complexes (each a *different* Hilbert complex) all inherit the same stability theorem.

### GAP 2 — Eigenvalue approximation and the discrete compactness property (general Hodge-Laplacian eigenproblem)
- **id:** `24.04.07` (FREE — `24.04.01–06` occupied; verified)
- **title:** FEEC eigenvalue approximation: the Hodge-Laplacian eigenproblem, discrete compactness, and spectral correctness
- **spec:** The Hodge-Laplacian eigenvalue problem $\Delta u = \lambda u$ in mixed/compatible form; the **discrete compactness property** of a FEEC subcomplex; the eigenvalue approximation theorem (convergence of discrete eigenvalues/eigenforms, absence of *spurious* eigenmodes) following from the bounded cochain projection — stated for the *general* $k$-form Hodge Laplacian, with the Maxwell cavity as the headline special case. AFW 2010 §6 / AFW 2006 §3.4 / §7. This is a named, distinct result of the book and the canonical "why naive discretisations fail" demonstration for eigenproblems.
- **prereqs:** `24.03.06-feec-convergence-theorem-arnold-falk-winther` (verified), `24.04.01-mixed-fem-for-the-hodge-laplacian` (verified), `24.04.02-maxwell-equations-and-feec-edge-elements` (verified, the special case), `02.11.05-compact-operators` (verified), proposed `24.03.07` (GAP 1, the abstract setting)
- **chapter:** dir `content/24-numerical-pde/04-applications/`; frontmatter `section: numerical-pde`, `chapter: applications`
- **why genuine:** `discrete compactness` and the spectral-correctness theorem appear **only** inside `24.04.02` (Maxwell cavity eigenvalues), where they are stated for $k=1$ on a 3-manifold. The *general-$k$ Hodge-Laplacian eigenvalue approximation theorem* — the abstract spectral-correctness result that subsumes the Maxwell case — has no unit. Borderline (the mechanism is sketched in `24.03.06` + `24.04.02`); included because it is a separately-named theorem in the book and the discrete-compactness property is a stated FEEC axiom variant with no standalone treatment.

---

## COVERED (not gaps) — due-diligence evidence

Every other §3 punch-list item and every major FEEC theorem maps to a shipped unit:

| FEEC topic | Existing unit (verified) |
|---|---|
| Numerical-PDE chapter scaffolding/notation | `24.01.00-numerical-pde-chapter-readme-and-notation-crosswalk` |
| Sobolev spaces $H^s$, $W^{k,p}$ | `24.01.01-sobolev-spaces-h-s-and-w-k-p` |
| Sobolev spaces of forms $H\Lambda^k$, $H(\mathrm{curl})$, $H(\mathrm{div})$ | `24.01.02-sobolev-spaces-of-differential-forms-h-lambda-k` |
| Weak/variational elliptic PDE, Lax-Milgram, Galerkin | `24.01.03-weak-variational-formulation-of-elliptic-pde` |
| Babuška-Brezzi (inf-sup) saddle-point condition | `24.01.04-babuska-brezzi-inf-sup-condition-for-saddle-point-problems` |
| Hodge Laplacian on Riemannian manifold; $\delta$, $\star$, harmonic $\cong H^k_{\mathrm{dR}}$ | `03.04.15-hodge-laplacian-on-a-riemannian-manifold` (codifferential + Hodge star folded in — verified body) |
| Classical conforming FEM, Céa, Bramble-Hilbert | `24.02.01-classical-conforming-fem-galerkin-cea-bramble-hilbert` |
| Mixed FEM for Poisson, Raviart-Thomas, BDM | `24.02.02-mixed-fem-for-the-poisson-equation-raviart-thomas` |
| Whitney forms $\mathcal W^k$, barycentric formula, integration duality | `24.03.01-whitney-forms-mathcal-w-k` |
| Nédélec first-kind edge elements, $\mathcal P_r^-\Lambda^1$ | `24.03.02-nedelec-first-kind-edge-elements-...` |
| $\mathcal P_r\Lambda^k$, $\mathcal P_r^-\Lambda^k$, Koszul $\kappa$, dim formulas, element identification table, **geometric decomposition / DOFs / unisolvence / traces** | `24.03.03-polynomial-differential-form-spaces-...` (DOF/geometric-decomposition content verified in body, lines 41/315/349–375) |
| Discrete de Rham complex / FEEC subcomplex axiom | `24.03.04-discrete-de-rham-complex-and-the-feec-subcomplex-axiom` |
| Bounded cochain projection + commuting diagram (Falk-Winther/Schöberl smoothed projection) | `24.03.05-bounded-cochain-projection-and-the-commuting-diagram` |
| FEEC convergence theorem (AFW), discrete Poincaré-Friedrichs, error estimate | `24.03.06-feec-convergence-theorem-arnold-falk-winther` |
| Mixed FEM for the Hodge Laplacian, discrete Hodge decomposition, harmonic side condition | `24.04.01-mixed-fem-for-the-hodge-laplacian` |
| Maxwell + edge elements, Maxwell spectral correctness (cavity) | `24.04.02-maxwell-equations-and-feec-edge-elements` |
| Linearised elasticity, elasticity complex, AFW symmetric-tensor element | `24.04.03-linearised-elasticity-via-afw-symmetric-tensor-mixed-elements` |
| Smooth FEEC (Falk-Neilan) pointer | `24.04.04-smooth-feec-pointer-falk-neilan` |
| Isogeometric exterior calculus pointer | `24.04.05-isogeometric-exterior-calculus-pointer` |
| Virtual element exterior calculus pointer | `24.04.06-virtual-element-exterior-calculus-pointer` |
| Differential forms / $d$ / Stokes / de Rham / Čech-de Rham (smooth upstream) | `03.04.02`, `03.04.04`, `03.04.05`, `03.04.06`, `03.04.11` |
| Maxwell in differential forms (smooth) | `10.04.01-maxwell-in-differential-forms` |
| Elasticity (continuum, smooth) | `23.01.05-elasticity` |
| Banach/Hilbert space, compact operators, closed-range theorem (FA upstream) | `02.11.04`, `02.11.05`, `02.11.08`, `02.11.02` |

**Out of scope of the CBMS book (correctly deferred by §5; NOT gaps):**
a-posteriori error estimation / adaptive FEEC, iterative solvers / preconditioners /
auxiliary-space (Hiptmair-Xu) for FEEC systems, discontinuous-Galerkin FEEC. Grep confirms
none exist as units, but the original audit correctly excludes them as not present in the
seven CBMS lectures — they would require a separate numerical-PDE audit (Verfürth /
Ainsworth-Oden), not this book.

---

**Counts:** genuine gaps = **2** (`24.03.07`, `24.04.07`); COVERED-verified topics = **24+**
(table above). Gap file: `plans/fasttrack/_deepen/douglas-arnold-feec.gaps.md`.
