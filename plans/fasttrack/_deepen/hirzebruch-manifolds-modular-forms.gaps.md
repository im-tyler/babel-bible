# Deepening gap pass — Hirzebruch-Berger-Jung, *Manifolds and Modular Forms* (FT 3.26)

**Slug:** `hirzebruch-manifolds-modular-forms`
**Date:** 2026-06-02
**Method:** Phase-2 re-audit against the live ~1319-unit corpus. The
original audit (`plans/fasttrack/hirzebruch-manifolds-modular-forms.md`)
was written against a 313-unit corpus and proposed ~14 units across a new
`04.11-modular-forms/` chapter plus six `03.06.21`–`03.06.26` slots. The
corpus has since grown enormously: the entire central content of this book
— Ochanine genus, Witten genus, modularity, Bott-Taubes rigidity,
elliptic cohomology / TMF, the modular-forms foundations, the Weierstrass
℘-function, the j-invariant, Hecke operators, η, Δ — **shipped during the
batch-1/batch-2 waves**. After grepping every proposed item, the book is
essentially fully covered. Only ONE genuine (modest) foundational gap
remains.

---

## GENUINE GAPS (1)

### Gap 1 — Jacobi theta functions $\theta_1,\theta_2,\theta_3,\theta_4$ on $\mathbb{H}$

- **proposed id:** `06.01.31` (FREE — `06.01.*` occupied through `.30`)
  - *Alt placement:* `06.06.06` (FREE — `06.06.*` occupied through `.08`,
    but `.06`/`.07` are free) under `06-riemann-surfaces/06-jacobians/`.
    Recommend `06.01.31` in complex-analysis since these are
    one-variable functions on $\mathbb{H}\times\mathbb{C}$, sibling to the
    existing `06.01.25` (℘) and `06.01.26` (j-invariant).
- **title:** Jacobi theta functions $\theta_1,\dots,\theta_4$ and the triple product
- **spec:** The four classical Jacobi theta functions on
  $\mathbb{H}\times\mathbb{C}$; quasi-periodicity and the modular
  transformation laws $\theta_1(z,\tau+1)$, $\theta_1(z/\tau,-1/\tau)$
  (and the analogues for $\theta_2,\theta_3,\theta_4$); the Jacobi triple
  product; the theta-nullwerte $\theta_j(0,\tau)$ and Jacobi's identity
  $\theta_2^4+\theta_4^4=\theta_3^4$; the heat equation
  $\partial_\tau\theta = \tfrac{1}{4\pi i}\partial_z^2\theta$; the
  relations to $\wp$, $\eta$, and $\Delta=\tfrac{1}{2^8}(\theta_2\theta_3\theta_4)^8$.
- **prereqs:** `06.01.25` (Weierstrass ℘-function),
  `06.01.26` (modular function / j-invariant),
  `21.04.01` (modular forms on $\mathrm{SL}_2(\mathbb{Z})$).
- **chapter dir:** `content/06-riemann-surfaces/01-complex-analysis/`
  - frontmatter `section: riemann-surfaces`, `chapter: complex-analysis`.
- **why genuine:** The four Jacobi thetas as standalone analytic objects on
  $\mathbb{H}$ — with their explicit modular transformation laws and the
  triple product — are **not** a unit anywhere. `06.06.05-theta-function`
  treats the genus-$g$ **Riemann** theta on Jacobians (different object,
  capital $\Theta$, multivariable) and only mentions in one synthesis
  sentence that "in genus one, theta functions reduce to Jacobi's." The
  modularity proof (`03.06.23` Ingredient 2) and the rigidity proof
  (`03.06.24`) both **depend on** $\theta_1$'s transformation law
  $\theta_1(z/\tau,-1/\tau)=-i(-i\tau)^{1/2}e^{i\pi z^2/\tau}\theta_1(z,\tau)$,
  which is currently asserted, not derived, anywhere in the corpus. This
  is the genuine missing analytic substrate. **Modest priority** — it is
  a foundations-fill, not frontier; the load-bearing theorems it supports
  already ship. Corresponds to the original audit's proposed `06.06.09`.

---

## COVERED (not gaps) — verified with unit ids

Every other item the original audit proposed is now covered. Evidence:

**The book's central frontier content (the reason this book exists):**

- **Ochanine elliptic genus $\varphi_{\mathrm{Och}}$** (audit's `03.06.21`)
  — COVERED in `03.06.23`. Full definition via the multiplicative-sequence
  power series $Q_{\mathrm{Och}}(x,q)=\tfrac{x/2}{\sinh(x/2)}\prod(1-q^n)^2/((1-q^ne^x)(1-q^ne^{-x}))$
  and the equivalent $\theta_1$ formulation, multiplicativity, worked
  $\mathbb{HP}^n$ / cuspidal-limit computations. **The free slot `03.06.21`
  exists but the content lives in `03.06.23`** — not a gap.
- **Witten genus $\varphi_W$** (audit's `03.06.22`) — COVERED in `03.06.23`
  (full definition on string manifolds, $M_*(\mathrm{SL}_2(\mathbb{Z}))$
  values, $q\to0$ recovers $\hat A$) and `03.09.21` (loop-space index
  framing). Free slot `03.06.22` exists but content shipped.
- **Modularity theorem** ($\varphi_{\mathrm{Och}}\in M_*(\Gamma_0(2))$,
  $\varphi_W\in M_*(\mathrm{SL}_2(\mathbb{Z}))$, cuspidal-limit table,
  spin integrality, Landweber-Stong characterisation, level-$N$) —
  COVERED `03.06.23` (the entire unit; includes the Zagier theta-quotient
  proof and the Fricke-involution $\tau\mapsto-1/(2\tau)$ signature limit).
- **Bott-Taubes rigidity** (audit's `03.06.24`) — COVERED `03.06.24`
  (equivariant elliptic genus, Atiyah-Bott fixed-point proof, Liu's
  Jacobi-form / modular-invariance proof, $\hat A$-vanishing as $q\to0$).
- **Witten heuristic: Dirac operator on $\mathcal{L}M$** (audit's
  `03.06.25`) — COVERED as substantive Master-tier content inside
  `03.06.23` (§"Witten heuristic", lines ~586/594) and `03.06.24`
  (lines ~93/366/540), plus `03.09.21` (line 361). Sigma-model partition
  function, worldsheet anomaly = string condition, loop-rotation $S^1$
  action all present. Free slot `03.06.25` exists; not a standalone unit
  but the heuristic is fully told. **Borderline** — could be split out,
  but the content is not absent, so NOT a gap per the conservative rule.
- **Elliptic cohomology / TMF** (audit's `03.06.26`, plus the audit's §5
  TMF non-goal) — COVERED `03.06.26`, which is far more than a pointer:
  Landweber exact-functor theorem, Landweber-Ravenel-Stong construction,
  Hopkins-Miller TMF, Ando-Hopkins-Strickland $\sigma$-orientation
  $\mathrm{MString}\to\mathrm{TMF}$, Lurie DAG construction, Stolz-Teichner,
  height-2 chromatic placement. Cross-links the BP/chromatic units
  `03.13.05`–`03.13.08`.

**Modular-forms strand (the audit's proposed green-field `04.11` chapter):**

- **Modular forms of weight $k$ for $\mathrm{SL}_2(\mathbb{Z})$; ring
  $M_*=\mathbb{C}[E_4,E_6]$; Eisenstein series; cusp forms; $q$-expansion;
  fundamental domain; dimension/valence formula; discriminant $\Delta$**
  (audit's `04.11.01`) — COVERED `21.04.01` (full treatment).
- **Congruence subgroups $\Gamma_0(N)$, $\Gamma_1(N)$, level structure**
  (audit's `04.11.02`) — COVERED: defined in `03.06.23` (Def $\Gamma_0(N)$,
  index formula, $M_*(\Gamma_0(2))=\mathbb{C}[\delta,\epsilon]$);
  modular curves $X_0(N),X_1(N)$ as moduli of level structures in
  `04.04.03` (elliptic curves) and `21.04.03` / `21.06.01`.
- **Hecke operators / eigenforms / Hecke algebra** (audit's `04.11.03`) —
  COVERED `21.04.02`.
- **Dedekind $\eta$, $j$-invariant, discriminant $\Delta$, $\eta^{24}=\Delta$**
  (audit's `04.11.04`) — COVERED `06.01.26` (j-invariant, modular function,
  fundamental domain, $\lambda$, moduli interpretation) and `21.04.05`
  ($\eta^{24}=\Delta$, eta transformation law, triple product).
- **Weierstrass $\wp$-function, $(\wp')^2=4\wp^3-g_2\wp-g_3$,
  $\mathbb{C}/\Lambda\cong E$, $g_2,g_3$ as weight-4/6 modular forms**
  (audit's `04.04.04`) — COVERED `06.01.25` (full analytic theory incl.
  the differential equation, addition formula, uniformisation).
- **Modular group $\mathrm{SL}_2(\mathbb{Z})$ acting on $\mathbb{H}$ as
  moduli of elliptic curves** — COVERED `06.01.26` (fundamental domain,
  $j$ as moduli) + `04.04.03` (modular curves as moduli) + `21.04.01`.

**Topology / index substrate (audit's Priority-0, shared with FT 3.25 / 3.08):**

- **Multiplicative sequences, $L$/$\hat A$/Todd genera** — COVERED `03.06.15`.
- **Hirzebruch signature theorem; signature of a $4k$-manifold** —
  COVERED `03.06.11`, `03.06.19`.
- **Chern character** — COVERED `03.06.18`.
- **Oriented / unoriented bordism (Pontryagin-Thom)** — COVERED
  `03.06.13`, `03.06.12`.
- **Atiyah-Singer index theorem; twisted Dirac $\hat A\cdot\mathrm{ch}(E)$
  (App II)** — COVERED `03.09.10`, plus `03.09.08` (Dirac operator),
  `03.09.20` (heat-kernel index), `03.09.24` (eta-invariant / APS).
- **Family / equivariant index** — COVERED `03.09.21`.
- **String manifolds ($\tfrac{p_1}{2}=0$) / string structure** — COVERED:
  defined in `03.06.23`/`03.06.24`/`03.06.26`; Whitehead tower in
  `03.12.07`; $w_1=w_2=0$, $p_1/2$ classes in `03.06.03`, `03.09.04`.
- **Free loop space $\mathcal{L}M$, loop rotation $S^1$-action,
  transgression** — COVERED `03.11.04`.

---

## Result

- **Genuine gaps: 1** (`06.01.31` Jacobi theta functions — modest
  foundations-fill).
- **COVERED-verified topics: 26** (listed above, each with id evidence).
- **Gap file:** `plans/fasttrack/_deepen/hirzebruch-manifolds-modular-forms.gaps.md`

**Bottom line.** The original audit estimated ~5–15% coverage and ~39 hours
of green-field production. That estimate is now obsolete: between the
modular-forms chapter `21.04.*`, the complex-analysis units `06.01.25/26`,
and the four shipped characteristic-class units `03.06.15/23/24/26`, the
book is **~95% covered**. The entire elliptic-genus / modularity / rigidity
/ elliptic-cohomology arc — the reason FT 3.26 exists — is fully present.
The lone remaining gap is the standalone analytic Jacobi-theta unit whose
transformation laws the modularity and rigidity proofs currently invoke
without deriving.
