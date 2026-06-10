# Donaldson, *Floer Homology Groups in Yang-Mills Theory* (FT 3.06) — Deepening gap pass

**Slug:** `donaldson-floer-homology-yang-mills`
**Date:** 2026-06-02

## Headline

The first-pass audit's full 12-item punch-list (`03.07.17`–`03.07.28`)
has **already shipped** — Chern-Simons on $Y$, configuration space /
slice theorem, spectral-flow grading, Uhlenbeck cylinder compactness,
gluing, orientations, the apex unit $HF_*(Y)$, relative Donaldson
invariants, the surgery exact triangle, the Atiyah-Floer conjecture,
polyfolds, and the monopole-instanton equivalence are all present. The
4-manifold side the audit deferred is also covered: Donaldson's
**polynomial invariants** are stated and proved-in-sketch at `03.07.09`
and `03.07.24`, and **Donaldson's diagonalisation theorem (Theorem A)**
including the reducibles-as-cone-points / wall-crossing / $b_+$ argument
is at master tier in `03.06.19`.

After grepping the live corpus, only **two genuine gaps** remain — both
named results Donaldson's book invokes that have no stating/proving unit
anywhere. They sit just after the existing Floer cluster.

---

## GENUINE GAPS (2)

### 1. Casson's invariant and the Euler characteristic of instanton Floer homology

- **id:** `03.07.33`
- **title:** Casson's invariant and $\chi(HF_*) = 2\lambda$
- **spec:** Casson's $\mathrm{SU}(2)$ invariant $\lambda(Y)$ of an integer
  homology 3-sphere as a signed count of irreducible flat connections /
  representations $\pi_1(Y)\to\mathrm{SU}(2)$ (Casson 1985, via
  Heegaard-splitting representation-variety intersection); Taubes'
  gauge-theoretic reformulation (Taubes 1990); Floer's theorem that the
  Euler characteristic of instanton Floer homology computes it,
  $\chi(HF_*(Y)) = 2\lambda(Y)$; surgery formula and the
  Casson-Walker-Lescop extensions as a pointer.
- **prereqs:** `03.07.23` (instanton Floer homology $HF_*(Y)$),
  `03.07.17` (Chern-Simons functional on $Y$ — flat connections as
  critical points), `03.07.25` (surgery exact triangle — for the
  surgery formula), `03.06.19` (intersection form / signature — Casson's
  surgery formula uses the Alexander/signature data).
- **chapter dir:** `content/03-modern-geometry/07-gauge-theory/`
- **frontmatter:** chapter `03-modern-geometry`, section `07-gauge-theory`
- **why a gap:** `grep -rliE "casson"` returns only the *holomorphic
  Casson invariant* of Donaldson-Thomas (`04.10.11`, a CY3 sheaf-counting
  object) and "Casson handle/Casson's flexible 4D handles" prose in
  `48.02.22/23/24`, `03.06.19`. The classical $\mathrm{SU}(2)$ Casson
  invariant $\lambda(Y)$ and the identity $\chi(HF) = 2\lambda$ — the
  single most-cited *consequence* of instanton Floer homology and the
  historical motivation for the whole theory (Donaldson Ch. 1, Ch. 6) —
  is stated nowhere. `03.07.23` worked the Poincaré-sphere example but
  did not introduce Casson's invariant or the Euler-characteristic
  theorem.

### 2. Structure of Donaldson's polynomial invariants (Kronheimer-Mrowka simple type / basic classes)

- **id:** `03.07.34`
- **title:** Simple type and basic classes — the Kronheimer-Mrowka structure theorem
- **spec:** Package the family $\{q_{M,k}\}$ of Donaldson polynomials into
  the Donaldson series $\mathbf{D}_M(\alpha) = \sum q_{M,k}(\alpha)/d!$;
  state the Kronheimer-Mrowka 1994/95 structure theorem: for a
  simply-connected 4-manifold of **simple type** the series has the form
  $\mathbf{D}_M(\alpha) = \exp(Q(\alpha)/2)\sum_s a_s\, e^{\langle K_s,\alpha\rangle}$
  with finitely many **basic classes** $K_s \in H^2(M;\mathbb{Z})$ and
  rational coefficients $a_s$; the blow-up and product/connected-sum
  formulae; vanishing on connected sums (positive scalar curvature /
  $b_+>1$ split); the diffeomorphism-invariance of the basic-class set;
  the Seiberg-Witten ↔ Donaldson basic-class correspondence (Witten 1994)
  as a pointer.
- **prereqs:** `03.07.09` (ASD moduli on $S^4$ — defines $q_{M,k}$ and
  the $\mu$-map), `03.07.24` (relative Donaldson invariants — gluing /
  connected-sum structure), `03.06.19` (intersection form $Q$, $b_+$).
- **chapter dir:** `content/03-modern-geometry/07-gauge-theory/`
- **frontmatter:** chapter `03-modern-geometry`, section `07-gauge-theory`
- **why a gap:** the *definition* of the Donaldson polynomial $q_{M,k}$
  is shipped (`03.07.09` "Theorem (Donaldson 1983 — polynomial
  invariants)" + Proposition at `03.07.24`), but the **structure** of
  these invariants — simple type, basic classes, the Donaldson-series
  exponential form, blow-up formula — is the deepest result *about* them
  and is absent: `grep -rliE "simple type|basic class|structure
  theorem.*donaldson"` returns nothing in geometry. This is the result
  that makes Donaldson invariants *computable* and is the 4-manifold
  counterpart that frames the SW=Donaldson relation. Donaldson 2002
  references it (Ch. 7 / closing) as the structural target the relative
  theory feeds.

---

## COVERED (not gaps) — due-diligence evidence

| Audit topic | Verdict | Existing unit(s) |
|---|---|---|
| Chern-Simons functional on a 3-manifold ($\mathrm{CS}:\mathcal B(Y)\to\mathbb R/\mathbb Z$, flat connections, mod-$\mathbb Z$) | COVERED | `03.07.17` |
| Configuration space / gauge group / slice theorem on $\mathcal B^*(Y)$, reducibles as strata | COVERED | `03.07.18` |
| Spectral flow & Floer grading mod 8 (Hessian $*d_A$, APS index) | COVERED | `03.07.19` (+ APS at `03.09.24`) |
| Uhlenbeck compactness for ASD on cylinders, bubbling $8\pi^2$ | COVERED | `03.07.20` |
| Gluing theorem for instanton trajectories | COVERED | `03.07.21` (+ Morse-side `03.15.04`) |
| Orientations on trajectory moduli (Donaldson 1987) | COVERED | `03.07.22` (+ `03.15.05`) |
| Instanton Floer homology $HF_*(Y)$, $\partial^2=0$, invariance, $\Sigma(2,3,5)$ example | COVERED | `03.07.23` |
| Relative Donaldson invariants $\Phi(X)\in HF_*(\partial X)$, gluing formula | COVERED | `03.07.24` |
| Donaldson-Floer surgery exact triangle | COVERED | `03.07.25` |
| Atiyah-Floer conjecture (instanton ↔ Lagrangian Floer of rep variety) | COVERED | `03.07.26` (+ `05.08.02`) |
| Polyfolds (Hofer-Wysocki-Zehnder) | COVERED | `03.07.27` |
| Monopole-instanton Floer equivalence (Kronheimer-Mrowka) | COVERED | `03.07.28` |
| Donaldson polynomial invariants of closed 4-manifolds (definition, $\mu$-map, smooth-structure invariant) | COVERED | `03.07.09` (Thm + Prop), `03.07.24` |
| Donaldson's diagonalisation theorem A; reducibles/cone-points/wall-crossing; $b_+$ count; $E_8$ obstruction | COVERED | `03.06.19` (master + Lean stub `donaldson_diagonalisation`) |
| Chern-Simons form (finite-dim, transgression) | COVERED | `03.06.07` |
| Representation/character variety of $Y$ as flat connections | COVERED | `03.07.17`, `03.07.18`, `03.07.26` |
| Holonomy-perturbation construction (non-degeneracy) | COVERED | `03.07.23`, `03.07.18`, `03.07.19` |
| Seiberg-Witten / monopole equations | COVERED (pointer) | `03.07.28` (3D/4D SW eqns named), `03.06.19` (Furuta $10/8$), `03.16.06` |
| Symplectic / Hamiltonian Floer (parallel theory) | COVERED | `05.08.01`–`05.08.04` |
| Lagrangian intersection Floer (Atiyah-Floer RHS) | COVERED | `03.07.26`, `05.08.02`, `05.05.*` |
| Equivariant / SO(3) Floer (Kotschick appendix) | COVERED (pointer) | `03.07.23`, `03.07.25` (Fintushel-Stern context) |
| Morse-homology abstract machinery (gradient flow, trajectory spaces, broken trajectories, continuation, Morse complex) | COVERED | `03.15.01`–`03.15.09` |
| ASD equation / BPST instanton / ADHM / Uhlenbeck removable singularities | COVERED | `03.07.06`, `03.07.07`, `03.07.08`, `03.07.10` |

**Explicitly NOT proposed (conservative calls):**
- *Standalone Seiberg-Witten-equation unit* — Donaldson 2002 treats SW
  only as the alternative; the corpus already names the 3D/4D SW
  equations at `03.07.28` and Furuta's $10/8$-theorem at `03.06.19`. A
  full SW theory belongs to a future Kronheimer-Mrowka *Monopoles and
  Three-Manifolds* audit, not this book. Left COVERED-as-pointer.
- *U-map / module structure on $HF_*$* — Donaldson Ch. 6 covers it
  briefly; the first-pass audit (§5) intentionally kept it as a
  pointer inside `03.07.23`. Marginal; not promoted.
- *Donaldson series QFT framing (Witten 1994)* — folded into gap #2 as a
  pointer; not its own unit.

---

## Counts

- **Genuine gaps:** 2 (`03.07.33` Casson invariant + $\chi(HF)=2\lambda$;
  `03.07.34` simple type / basic classes / KM structure theorem)
- **COVERED-verified topics:** 23
- **Gap file:** `plans/fasttrack/_deepen/donaldson-floer-homology-yang-mills.gaps.md`
