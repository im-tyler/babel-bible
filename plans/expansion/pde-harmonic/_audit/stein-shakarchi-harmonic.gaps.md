# Audit: Stein-Shakarchi — *Functional Analysis* (PL IV) + *Real Analysis* (PL III), harmonic-analysis payload

Spine: `pde-harmonic`. Target chapters: 02.20 `littlewood-paley-interpolation`, 02.19 `calderon-zygmund-singular-integrals` (section `analysis`, field `analysis`).
Method: assume covered until proven absent. Verified each headline theorem by filename + body grep across `content/02-analysis/` (esp. 02.07-measure, 02.10-harmonic, 02.11-functional-analysis, 02.13-pde, 02.14-microlocal).

KEY FINDING: the *interpolation* half of chapter 02.20 is almost entirely pre-empted by the L^p unit **02.07.06**, which already carries Riesz-Thorin, Marcinkiewicz, and Hausdorff-Young as full named Master theorems. The genuine gaps are the harmonic-analysis *machinery* (maximal theorem on R^n, BMO, Littlewood-Paley, multipliers, H^p, oscillatory integrals) that currently has no home — these land in 02.20/02.19.

Existing 02.19 and 02.20 chapter directories exist but are EMPTY (no units yet), so all free slots from .01 onward are available.

---

## GENUINE GAPS

### Gap 1
- **id**: `02.19.01`
- **title**: The Hardy-Littlewood Maximal Theorem on R^n
- **spec**: Centered/uncentered maximal operator $Mf(x)=\sup_{r>0}\frac{1}{|B_r|}\int_{B_r(x)}|f|$. Vitali covering lemma; weak-type $(1,1)$ bound $|\{Mf>\lambda\}|\le \frac{C_n}{\lambda}\|f\|_1$; strong $(p,p)$ for $1<p\le\infty$ by interpolation with the trivial $L^\infty$ bound. Lebesgue differentiation theorem as corollary. Dyadic maximal function and the $L\log L$ / weak-(1,1) sharpness. This is the *R^n* maximal operator and its covering-lemma proof — distinct from the partial-sum maximal operator $S^*$ on $\mathbb{T}$ in 02.10.01 Thm 9 (Carleson-Hunt context), which is only stated, and from the bare *mention* that "$M$ is weak-(1,1)" inside the Marcinkiewicz remark in 02.07.06.
- **prereqs**: `02.07.06` (L^p, weak-type, Marcinkiewicz), `02.07.05` (dominated convergence), `02.07.02` (outer measure/Caratheodory)
- **chapter**: `calderon-zygmund-singular-integrals` · **section**: analysis
- **source_book**: stein-shakarchi-harmonic
- **source_curriculum**: pde-harmonic
- **dedup flag**: HIGH OVERLAP RISK with the parallel **Stein audit** (*Singular Integrals*) — the HL maximal theorem + Vitali covering is foundational in that book too. Keep ONE. Recommend it lives here in 02.19 as the gateway to the CZ chapter regardless of which audit's wording the dispatcher takes.

### Gap 2
- **id**: `02.19.02`
- **title**: Calderon-Zygmund Decomposition and Singular Integral Operators on R^n
- **spec**: CZ decomposition of an $L^1$ function at height $\lambda$ (good/bad parts, dyadic stopping-time cubes). Calderon-Zygmund convolution kernels $K$ with the Hörmander condition $\int_{|x|>2|y|}|K(x-y)-K(x)|\,dx\le C$; $L^2$-boundedness hypothesis $\Rightarrow$ weak-$(1,1)$ $\Rightarrow$ strong $(p,p)$, $1<p<\infty$, by CZ decomposition + Marcinkiewicz. Riesz transforms $R_j$ as the canonical R^n example. The Hilbert transform on $\mathbb{T}$ (02.10.01 Thm 10, M. Riesz conjugate function) is the 1-D circle prototype only; the R^n CZ machinery and the kernel/Hörmander-condition framework are absent.
- **prereqs**: `02.19.01` (maximal theorem), `02.07.06` (L^p, Marcinkiewicz interpolation), `02.10.04` (Fourier transform / Plancherel for the $L^2$ bound), `02.13.02` (Riesz potentials / convolution operators)
- **chapter**: `calderon-zygmund-singular-integrals` · **section**: analysis
- **source_book**: stein-shakarchi-harmonic
- **source_curriculum**: pde-harmonic
- **dedup flag**: VERY HIGH OVERLAP with the parallel **Stein audit** (*Singular Integrals* is literally this book's core). This unit is more Stein's than Stein-Shakarchi's. Recommend the dispatcher assign 02.19.02 to the **Stein** audit and drop it from this one if both fire; listed here only to claim the chapter slot and flag the collision.

### Gap 3
- **id**: `02.20.01`
- **title**: BMO and the John-Nirenberg Inequality
- **spec**: Space of bounded mean oscillation $\mathrm{BMO}(\mathbb{R}^n)$: $\|f\|_*=\sup_Q \frac{1}{|Q|}\int_Q|f-f_Q|$. $L^\infty\subsetneq\mathrm{BMO}$, $\log|x|\in\mathrm{BMO}$. John-Nirenberg inequality: exponential decay of the distribution of $|f-f_Q|$ on a cube, $|\{x\in Q:|f-f_Q|>\lambda\}|\le C|Q|e^{-c\lambda/\|f\|_*}$. Consequences: $\mathrm{BMO}$ as the correct endpoint $L^p$, $p\to\infty$; CZ operators map $L^\infty\to\mathrm{BMO}$; the Fefferman duality $(H^1)^*=\mathrm{BMO}$ (stated). Currently BMO is only *name-dropped* in 02.07.06 (Sobolev borderline), 02.10.01 (Hilbert transform endpoint), never defined or developed.
- **prereqs**: `02.19.02` (CZ operators map into BMO), `02.07.06` (L^p / interpolation), `02.19.01` (maximal function for the sharp maximal characterization)
- **chapter**: `littlewood-paley-interpolation` · **section**: analysis
- **source_book**: stein-shakarchi-harmonic
- **source_curriculum**: pde-harmonic
- **dedup flag**: MODERATE overlap with the Stein audit (BMO + John-Nirenberg appear in *Singular Integrals* too). This is squarely in Stein-Shakarchi PL IV's harmonic payload; recommend it stays with THIS audit. If both propose it, keep one.

### Gap 4
- **id**: `02.20.02`
- **title**: Hardy Spaces H^p and the Atomic Decomposition
- **spec**: Real-variable Hardy spaces $H^p(\mathbb{R}^n)$, $0<p\le1$: maximal-function (grand/non-tangential), atomic, and Riesz-transform characterizations; equivalence theorem. Atoms (size + cancellation/moment conditions); the atomic decomposition $f=\sum\lambda_j a_j$. $H^1$ as the natural substitute for $L^1$ on which CZ operators are bounded (where $L^1\to L^1$ fails). Duality $(H^1)^*=\mathrm{BMO}$ (Fefferman). For $p>1$, $H^p=L^p$. (Complex-analytic $H^p$ of the disc/upper half-plane is touched in 06-riemann-surfaces' Hardy-space neighborhood but the real-variable R^n theory is absent.)
- **prereqs**: `02.20.01` (BMO, for the duality), `02.19.02` (CZ/Riesz transforms), `02.07.06` (L^p), `02.10.04` (Fourier transform)
- **chapter**: `littlewood-paley-interpolation` · **section**: analysis
- **source_book**: stein-shakarchi-harmonic
- **source_curriculum**: pde-harmonic
- **dedup flag**: LOW-MODERATE overlap with Stein audit. Real-variable $H^p$ is shared territory but is a clean standalone unit; one copy only.

### Gap 5
- **id**: `02.20.03`
- **title**: Littlewood-Paley Theory and the Square Function
- **spec**: Dyadic frequency decomposition $f=\sum_j \Delta_j f$ via smooth annular multipliers (Littlewood-Paley projections); the square function $Sf=(\sum_j|\Delta_j f|^2)^{1/2}$; the Littlewood-Paley theorem $\|f\|_p\sim\|Sf\|_p$ for $1<p<\infty$. Khintchine inequality + Rademacher randomization; the $g$-function and area-integral variants. Vector-valued CZ / Marcinkiewicz framing. This is the central "square-function technology" of PL IV — genuinely absent (only mentioned in 02.10.01 synthesis as a future direction).
- **prereqs**: `02.19.02` (CZ / vector-valued singular integrals), `02.07.06` (L^p, Marcinkiewicz), `02.10.04` (Fourier transform), `02.11.08` (Hilbert space, for the $L^2$ identity)
- **chapter**: `littlewood-paley-interpolation` · **section**: analysis
- **source_book**: stein-shakarchi-harmonic
- **source_curriculum**: pde-harmonic
- **dedup flag**: HIGH OVERLAP RISK — the parallel **Stein audit** explicitly also targets 02.20 Littlewood-Paley. This is the most likely duplicate. Dispatcher: keep exactly ONE Littlewood-Paley/square-function unit at 02.20.03.

### Gap 6
- **id**: `02.20.04`
- **title**: Fourier Multipliers and the Hörmander-Mikhlin Theorem
- **spec**: Multiplier operators $T_m f=(m\hat f)^\vee$; $m\in L^\infty\Leftrightarrow T_m$ bounded on $L^2$. Mikhlin condition $|\partial^\alpha m(\xi)|\le C|\xi|^{-|\alpha|}$ for $|\alpha|\le \lfloor n/2\rfloor+1$ (or Hörmander's $L^2$-Sobolev-localized form) $\Rightarrow T_m$ bounded on $L^p$, $1<p<\infty$, via Littlewood-Paley + CZ. Applications: Riesz transforms, imaginary powers $(-\Delta)^{is}$, Bochner-Riesz framing (statement). The psido unit 02.14.02 mentions Mikhlin's 1956 theorem historically but does not state or prove it; no multiplier-theory unit exists.
- **prereqs**: `02.20.03` (Littlewood-Paley, the standard proof route), `02.19.02` (CZ theory), `02.10.04` (Fourier transform / Plancherel for the $L^2$ characterization), `02.07.06` (L^p / interpolation)
- **chapter**: `littlewood-paley-interpolation` · **section**: analysis
- **source_book**: stein-shakarchi-harmonic
- **source_curriculum**: pde-harmonic
- **dedup flag**: MODERATE overlap with Stein audit (multiplier theorems sit near the CZ chapter in *Singular Integrals*). Tightly coupled to the Littlewood-Paley unit; keep both with the same audit if possible. One copy only.

### Gap 7
- **id**: `02.20.05`
- **title**: Oscillatory Integrals and the Method of Stationary Phase (Harmonic-Analysis Theory)
- **spec**: Oscillatory integrals of the first kind $I(\lambda)=\int e^{i\lambda\phi(x)}\psi(x)\,dx$; van der Corput lemmas (first/higher-derivative bounds); non-stationary and stationary phase asymptotics with the Hessian-signature factor. Oscillatory integral operators $T_\lambda f(x)=\int e^{i\lambda\phi(x,y)}\psi(x,y)f(y)\,dy$ and the $\lambda^{-n/2}$ decay under non-degenerate $\partial^2_{xy}\phi$ (Hörmander). Decay of the Fourier transform of a surface-carried measure / restriction-flavored framing (statement). NOTE: stationary phase is used as a *tool* in the microlocal units (02.14.01 wavefront, 02.14.02 psido composition), but there is no dedicated harmonic-analysis oscillatory-integral unit with van der Corput + the $L^2$ operator estimate.
- **prereqs**: `02.14.02` (psido / stationary-phase calculus, the microlocal counterpart), `02.10.04` (Fourier transform), `02.07.06` (L^p)
- **chapter**: `littlewood-paley-interpolation` · **section**: analysis
- **source_book**: stein-shakarchi-harmonic
- **source_curriculum**: pde-harmonic
- **dedup flag**: LOW overlap with Stein audit (oscillatory integrals are the back third of *Singular Integrals*; Stein-Shakarchi PL IV gives the intro). Could equally be assigned to the Stein audit. One copy only; flag if both propose. Borderline-scope (see OUT OF SCOPE note on restriction theory).

---

## COVERED

- **Riesz-Thorin / complex interpolation theorem** — COVERED `02.07.06` Theorem 9 (full statement + three-lines proof sketch). The chapter-20 name "interpolation" is largely pre-empted here.
- **Marcinkiewicz / real interpolation theorem** — COVERED `02.07.06` Theorem 10 (weak-type endpoints, strong-type interior; explicitly notes the HL maximal operator is weak-(1,1)).
- **Hausdorff-Young inequality** — COVERED `02.07.06` Theorem 8 (with Beckner sharp constant) AND qualitatively in `02.10.04` (failure for $p>2$ discussed).
- **L^p spaces, Hölder/Minkowski, completeness (Riesz-Fischer)** — COVERED `02.07.06`.
- **Duality $(L^p)^*=L^q$, reflexivity, uniform convexity (Clarkson)** — COVERED `02.07.06` Theorems 4-6 + `02.11.02` (C4 biduality/reflexivity).
- **Hahn-Banach, dual-space richness, separating hyperplanes** — COVERED `02.11.02`.
- **Fourier transform on R^n, Plancherel, $L^2$ unitarity** — COVERED `02.10.04`.
- **Hardy-Littlewood-Sobolev inequality + Riesz potentials $I_\alpha$** — COVERED `02.13.02` Theorems 1-2 (Sobolev-scaling line $1/q=1/p-\alpha/n$).
- **Hilbert transform / conjugate function on $\mathbb{T}$, $L^p$-bounded (M. Riesz 1927)** — COVERED `02.10.01` Theorem 10 (1-D circle prototype; the R^n CZ generalization is Gap 2).
- **Maximal partial-sum operator $S^*$ on $\mathbb{T}$ / Carleson-Hunt a.e. convergence** — COVERED `02.10.01` Theorem 9 + synthesis (distinct from the R^n HL maximal operator, Gap 1).
- **Method of stationary phase (as a microlocal tool)** — COVERED `02.14.02`, `02.14.01` (used in psido composition / wavefront transforms; the dedicated harmonic-analysis oscillatory-integral *theory* with van der Corput is Gap 7).
- **Pseudo-differential operators / symbol calculus (where multiplier operators conceptually sit)** — COVERED `02.14.02` (mentions Mikhlin 1956 + Calderon-Zygmund 1952 historically but does not state/prove the multiplier theorem — Gap 6).

## OUT OF SCOPE

- **Bochner-Riesz conjecture / restriction-extension (Stein-Tomas) / Kakeya** — research-frontier harmonic analysis; only touched as statements inside Gaps 6-7. Not separate units for this audit (defer; would belong to a dedicated dispersive/restriction unit near 02.21, possibly the Tao audit).
- **Abstract complex/real interpolation functor theory (Calderón complex method, $K$-method, Lions-Peetre, Besov/Triebel-Lizorkin space scales)** — the *named theorems* (Riesz-Thorin, Marcinkiewicz) are covered in 02.07.06; the abstract interpolation-space machinery is a separate large topic better sourced from Bergh-Löfström, not Stein-Shakarchi. Out of scope here.
- **Complex-analytic Hardy spaces $H^p$ of the disc / Nevanlinna class / boundary values** — adjacent to 06-riemann-surfaces complex-analysis material; Gap 4 deliberately scopes to the *real-variable* R^n theory only.
- **Wavelets / Calderón reproducing formula / frames** — Stein-Shakarchi touches these lightly; lower priority, would be a follow-on unit. Not proposed.
- **Ergodic / Birkhoff maximal theorems** — different lineage (already at 37.02.03); not the HL maximal operator.

---

### Summary
- **Genuine gaps: 7** (2 in 02.19, 5 in 02.20)
- **Covered: 12**
- **Out of scope: 5**
- **Gap file**: `plans/expansion/pde-harmonic/_audit/stein-shakarchi-harmonic.gaps.md`
- **Dispatcher note**: Gaps 1 (HL maximal), 2 (CZ singular integrals), 5 (Littlewood-Paley) are the high duplicate-risk units vs the parallel Stein (*Singular Integrals*) audit. Recommend: assign Gap 2 to Stein, keep Gaps 3/4/5/6/7 here, and dedup Gap 1 to whichever fires first (it belongs in 02.19 either way).
