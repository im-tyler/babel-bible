# Audit — Stein, *Singular Integrals and Differentiability Properties of Functions* (PUP, 1970)

- **source_book:** `stein-singular-integrals`
- **source_curriculum:** `pde-harmonic`
- **target chapters:** `content/02-analysis/19-calderon-zygmund-singular-integrals/` and
  `content/02-analysis/20-littlewood-paley-interpolation/`
  (frontmatter `section: analysis`, `chapter:` = name without number, id format `02.19.<UU>` / `02.20.<UU>`)
- **date:** 2026-06-05

## Verdict

Chapters `19-calderon-zygmund-singular-integrals` and `20-littlewood-paley-interpolation`
are **freshly scaffolded empty directories** (as are `16`–`18`, `21`). The corpus already
contains substantial *adjacent* harmonic-analysis material, so most of Stein's machinery
must be assessed against existing units rather than assumed absent. After verification:

**COVERED by existing units (default — do not re-produce):**
- **Riesz–Thorin (complex) interpolation** — `02.07.06` Theorem 9 (full statement + three-lines proof sketch).
- **Marcinkiewicz (real) interpolation** — `02.07.06` Theorem 10 (weak-type endpoints, explicitly noting the HL maximal operator is weak-(1,1)).
- **Hausdorff–Young** — `02.07.06` Theorem 8.
- **Sobolev embedding theorem** (Gagliardo–Nirenberg–Sobolev exponent \(p^*=np/(n-p)\), Morrey \(C^{0,\alpha}\), borderline \(p=n\to\)BMO) — stated in `02.07.06` and discussed operationally in `24.01.01`. The *direct* embedding statement is covered; only the **potential-theoretic derivation** (Riesz/Bessel potentials → HLS → embedding), which is Stein's distinctive route, is a gap (see 02.19.04 below).
- **Hilbert transform / conjugate function on \(\mathbb{T}\)** and \(L^p\)-boundedness (M. Riesz) — `02.10.01` Theorem 10. The 1-D periodic case is covered; the \(n\)-dimensional CZ generalisation and the Riesz transforms are not.
- **Fourier transform / Plancherel / Schwartz space / tempered distributions** — `02.10.04`.
- **Lebesgue differentiation theorem** (the one *consequence* of the maximal inequality already present) — `02.04.04` Theorem 1, and `02.11.04` cross-ref. The HL **maximal operator itself** (Vitali covering, weak-(1,1) bound) is referenced as a black-box tool but never established as a unit.
- **Pseudodifferential operators / Schwartz kernel theorem** (the microlocal successor of CZ operators) — `02.14.02`, `02.14.04`.

**Coordination notes.**
- Singular-integral operator theory (CZ decomposition, CZ operators, Riesz transforms, vector-valued/Cotlar) stays in **02.19** per the spine.
- The Littlewood–Paley square-function / \(g\)-function unit lives in **02.20**. A parallel Stein–Shakarchi (*Functional/Real Analysis*) audit also targets 02.20 for Littlewood–Paley + Hardy spaces + BMO; the 02.20.01 \(g\)-function unit below is **flagged as possible overlap** — if the Stein–Shakarchi audit ships an equivalent square-function unit, defer to whichever lands first and fold the other's emphasis (Stein: vector-valued / Hörmander multiplier emphasis) as a section.
- **BMO / John–Nirenberg** is left to the Stein–Shakarchi (Hardy-space) audit; per the prompt Stein gives only a "BMO preview", which is folded into 02.19.05 as a closing section, not spun out.

**Prereq convention.** Verified anchors: `02.07.06` (Lp / Hölder / interpolation),
`02.07.07` (Fubini–Tonelli), `02.04.04` (FTC / Lebesgue differentiation),
`02.10.04` (Fourier transform / Plancherel / Schwartz / tempered distributions),
`02.10.01` (Hilbert transform on \(\mathbb{T}\), cross-ref), `02.14.04` (distributions / kernels),
`24.01.01` (Sobolev spaces \(H^s, W^{k,p}\), cross-ref).
Prereqs of the form `02.19.xx` / `02.20.xx` are sibling units defined below.

---

## GENUINE GAPS

### 02.19.01 — The Hardy–Littlewood maximal function and the Vitali covering lemma
- **spec:** Define the centred/uncentred HL maximal operator \(Mf(x)=\sup_{r>0}\frac{1}{|B(x,r)|}\int_{B(x,r)}|f|\) on \(\mathbb{R}^n\). Prove the Vitali (5r) covering lemma and deduce the weak-type \((1,1)\) bound \(|\{Mf>\lambda\}|\le \frac{C_n}{\lambda}\|f\|_1\); strong-type \((p,p)\) for \(1<p\le\infty\) by interpolation with the trivial \(L^\infty\) bound; recover the Lebesgue differentiation theorem and \(L^p\) density of Lebesgue points. (Stein Ch. I.)
- **prereqs:** `02.07.06`, `02.07.07`, `02.04.04`
- **chapter:** `calderon-zygmund-singular-integrals` · **section:** `analysis`
- **source_book:** `stein-singular-integrals` · **source_curriculum:** `pde-harmonic`

### 02.19.02 — The Calderón–Zygmund decomposition
- **spec:** Given \(f\in L^1(\mathbb{R}^n)\) and height \(\lambda>0\), the stopping-time/dyadic-cube decomposition \(f=g+b\), \(b=\sum_j b_j\), with \(\|g\|_\infty\le C\lambda\), \(\|g\|_1\le\|f\|_1\), each \(b_j\) supported on a cube \(Q_j\) with mean zero and \(\frac{1}{|Q_j|}\int_{Q_j}|f|\sim\lambda\), and \(\sum_j|Q_j|\le \lambda^{-1}\|f\|_1\). The good-\(\lambda\)/bad-part splitting as the engine of all weak-(1,1) bounds below. (Stein Ch. I §3.)
- **prereqs:** `02.19.01`
- **chapter:** `calderon-zygmund-singular-integrals` · **section:** `analysis`
- **source_book:** `stein-singular-integrals` · **source_curriculum:** `pde-harmonic`

### 02.19.03 — Calderón–Zygmund singular integral operators: \(L^p\)-boundedness
- **spec:** Convolution operators \(Tf=\mathrm{p.v.}\,K*f\) with a CZ kernel (\(|K(x)|\le A|x|^{-n}\), the Hörmander/gradient regularity condition \(\int_{|x|>2|y|}|K(x-y)-K(x)|\,dx\le B\), and an \(L^2\)-bound via the Fourier transform of \(K\), homogeneity \(K(x)=\Omega(x/|x|)|x|^{-n}\) with mean-zero \(\Omega\)). Prove: \(L^2\)-boundedness ⟹ weak-(1,1) (via the CZ decomposition) ⟹ \(L^p\) for \(1<p<\infty\) (Marcinkiewicz) and the dual range. (Stein Ch. II.)
- **prereqs:** `02.19.02`, `02.10.04`, `02.07.06`
- **chapter:** `calderon-zygmund-singular-integrals` · **section:** `analysis`
- **source_book:** `stein-singular-integrals` · **source_curriculum:** `pde-harmonic`

### 02.19.04 — The Riesz transforms and the higher Riesz transforms
- **spec:** \(R_j f = c_n\,\mathrm{p.v.}\int \frac{x_j-y_j}{|x-y|^{n+1}}f(y)\,dy\), with multiplier \(\widehat{R_jf}(\xi)=-i\frac{\xi_j}{|\xi|}\hat f(\xi)\); \(\sum_j R_j^2=-I\); \(L^p\)-boundedness as a special case of 02.19.03. The vector \((R_1,\dots,R_n)\) as the \(n\)-dimensional analogue of the Hilbert transform; the second-order identity \(\partial_i\partial_j = -R_iR_j\Delta\) giving \(\|\partial_i\partial_j u\|_p\le C_p\|\Delta u\|_p\) (CZ elliptic \(L^p\) estimate). (Stein Ch. III.)
- **prereqs:** `02.19.03`, `02.10.01` (cross-ref Hilbert transform)
- **chapter:** `calderon-zygmund-singular-integrals` · **section:** `analysis`
- **source_book:** `stein-singular-integrals` · **source_curriculum:** `pde-harmonic`

### 02.19.05 — Riesz potentials, Bessel potentials, and fractional integration (Hardy–Littlewood–Sobolev), with a BMO preview
- **spec:** The Riesz potential \(I_\alpha f = c_{n,\alpha}\,|x|^{-(n-\alpha)}*f\), \(\widehat{I_\alpha f}=|\xi|^{-\alpha}\hat f\); the Hardy–Littlewood–Sobolev inequality \(\|I_\alpha f\|_q\le C\|f\|_p\) for \(1/q=1/p-\alpha/n\), \(1<p<q<\infty\) (proof via the maximal function / weak-type + Marcinkiewicz). Bessel potentials \(J_\alpha=(I-\Delta)^{-\alpha/2}\) and the identification \(L^p_\alpha=J_\alpha(L^p)\) with the Sobolev space \(W^{\alpha,p}\); **Sobolev embedding re-derived via potentials** (the borderline \(p=n/\alpha\to\)BMO endpoint as a closing **BMO preview** — full John–Nirenberg deferred to the Hardy-space audit). (Stein Ch. V.)
- **prereqs:** `02.19.01`, `02.07.06`, `24.01.01` (cross-ref Sobolev spaces)
- **chapter:** `calderon-zygmund-singular-integrals` · **section:** `analysis`
- **source_book:** `stein-singular-integrals` · **source_curriculum:** `pde-harmonic`

### 02.20.01 — The Littlewood–Paley \(g\)-function and square-function characterisation of \(L^p\)
- **spec:** The Littlewood–Paley \(g\)-function \(g(f)(x)=\big(\int_0^\infty |t\,\partial_t P_t f(x)|^2\,\frac{dt}{t}\big)^{1/2}\) built from the Poisson semigroup; the two-sided equivalence \(\|g(f)\|_p\sim\|f\|_p\) for \(1<p<\infty\) (via vector-valued CZ theory). Dyadic-frequency \(\Delta_j\) decomposition and the square-function norm equivalence. Application: the **Hörmander–Mikhlin multiplier theorem** (multipliers \(m(\xi)\) with \(|\partial^\beta m|\le C|\xi|^{-|\beta|}\) give \(L^p\)-bounded operators). (Stein Ch. IV.)
  **Possible overlap:** a parallel Stein–Shakarchi audit may produce an equivalent square-function unit in this chapter; coordinate (this unit carries the *vector-valued / multiplier* emphasis).
- **prereqs:** `02.19.03`, `02.10.04`, `02.07.06`
- **chapter:** `littlewood-paley-interpolation` · **section:** `analysis`
- **source_book:** `stein-singular-integrals` · **source_curriculum:** `pde-harmonic`

---

## COVERED

- **Riesz–Thorin interpolation** — `02.07.06` (Theorem 9).
- **Marcinkiewicz interpolation** — `02.07.06` (Theorem 10), with weak-(1,1) of \(M\) noted.
- **Hausdorff–Young inequality** — `02.07.06` (Theorem 8).
- **Sobolev embedding theorem (direct statement: GNS / Morrey / borderline)** — `02.07.06`, `24.01.01`. (Only the *potential-theoretic derivation* is gapped → 02.19.05.)
- **Hilbert transform & conjugate-function \(L^p\)-boundedness on \(\mathbb{T}\)** — `02.10.01` (Theorem 10). (The \(n\)-dim CZ/Riesz generalisation is gapped → 02.19.03/04.)
- **Lebesgue differentiation theorem** — `02.04.04` (Theorem 1); `02.11.04` cross-ref.
- **Fourier transform, Plancherel, Schwartz space, tempered distributions** — `02.10.04`.
- **Distributions / Schwartz kernel theorem** — `02.14.04`.
- **Pseudodifferential operators** (CZ successor theory) — `02.14.02`.
- **\(L^p\)-space structure: Hölder, Minkowski, duality, completeness** — `02.07.06`.

## OUT OF SCOPE

- **BMO / John–Nirenberg inequality (full theory) & Hardy spaces \(H^p\)** — owned by the parallel Stein–Shakarchi (Functional/Real Analysis) audit; Stein gives only a preview here, folded into 02.19.05's closing section. Not a standalone gap for this book.
- **Carleson–Hunt a.e. convergence / time-frequency / bilinear Hilbert transform** — already discussed in `02.10.01`; beyond Stein's *Singular Integrals* (a later-volume / different-book topic).
- **Theory of \(H^p\) spaces and the area integral as a Hardy-space tool** — Stein's *later* work (Stein–Weiss / Fefferman–Stein 1972); out of scope for this 1970 volume's audit, deferred to the Hardy-space audit.
- **Restriction / extension estimates, Strichartz** — belong to 02.21 (`dispersive-strichartz`), a different book's audit (Tao / Stein-Shakarchi).
- **Pointwise differentiability properties (Stein Ch. VIII: approximate differentiability, the \(p\)-th order differentiability a.e.)** — niche; folded as remarks into 02.19.05 rather than spun out (quality over quantity).
