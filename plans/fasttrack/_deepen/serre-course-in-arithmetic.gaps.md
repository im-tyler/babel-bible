# Serre, *A Course in Arithmetic* (FT 3.14) — deepening gap file

Re-audit against the live corpus (1319 units). The original audit
(`plans/fasttrack/serre-course-in-arithmetic.md`, written when the corpus
was ~362 units and `21-number-theory/` did not yet exist) lists ~16
punch-list items. The `21-number-theory/` chapter has since been built
out across 9 sub-chapters; **almost the entire CinA punch-list has
shipped.** Verified below: finite fields, quadratic reciprocity via Gauss
sums, $\mathbb{Q}_p$/$\mathbb{Z}_p$, Hensel's lemma, the Hilbert symbol +
product formula, Hasse-Minkowski (with Meyer's theorem and the Hasse-Witt
invariant baked in), Dirichlet $L$-functions + Dirichlet's theorem +
$L(1,\chi)\ne0$, Dirichlet density, modular forms on $\mathrm{SL}_2(\mathbb{Z})$
(fundamental domain, valence formula, dimension formula, $M_*=\mathbb{C}[E_4,E_6]$,
$\Delta$, $j$-invariant), Hecke operators + eigenforms + Euler products,
and the Ramanujan $\tau$-function/conjectures.

**Two genuine gaps remain**, both algebraically/arithmetically load-bearing
in CinA and absent from the corpus.

---

## GAP 1 — Witt's theorem and the structure theory of quadratic forms over a field

- **id:** `21.02.06`  (FREE — `02-quadratic-forms-local-fields/` has 01–05, 08 occupied)
- **title:** Quadratic forms over a field — Witt cancellation and Witt decomposition
- **spec:** Equivalence and diagonalisation of non-degenerate quadratic
  forms over a field of characteristic $\ne 2$; isotropic vs anisotropic;
  the hyperbolic plane; **Witt's cancellation theorem** ($f\oplus h \sim
  g\oplus h \Rightarrow f\sim g$) and the **Witt decomposition** $f \cong
  f_{\mathrm{an}} \oplus m\cdot\mathbb{H}$ into an anisotropic kernel plus
  a hyperbolic part; the Witt ring $W(K)$; over $\mathbb{R}$ this recovers
  the signature classification (Sylvester) as a corollary.
- **prereqs:** `01.01.15` (bilinear / quadratic form), `01.01.01` (field),
  `21.02.01` (finite fields $\mathbb{F}_q$, squares)
- **chapter dir:** `content/21-number-theory/02-quadratic-forms-local-fields/`;
  frontmatter `section: number-theory`, `chapter: quadratic-forms-local-fields`
- **why a gap:** CinA Ch. IV §1 develops this as the algebraic substrate
  for the local and global classifications. In the corpus, `01.01.15`
  stops at Sylvester's law / signature and does NOT state Witt
  cancellation or the anisotropic-kernel decomposition; `21.02.08`
  *invokes* the Witt ring $W(\mathbb{Q})$ and hyperbolic planes in its
  master tier but treats the structure theory as background, never proving
  cancellation or the Witt decomposition. The originator result
  (**Witt 1937**, *J. reine angew. Math.* 176) has no home. This is the
  missing rung between `01.01.15` and `21.02.08`.

---

## GAP 2 — Theta series of quadratic forms and the sum-of-squares application

- **id:** `21.04.04`  (FREE — `04-modular-forms/` has 01, 02, 03, 05 occupied)
- **title:** Theta series, half-integer weight, and sums of squares
- **spec:** The Jacobi theta function $\theta(z)=\sum_{n\in\mathbb{Z}} q^{n^2}$
  and its modularity under $\Gamma_0(4)$ (weight $1/2$); theta series
  $\theta_Q(z)=\sum_{x\in\mathbb{Z}^m} q^{Q(x)}$ of a positive-definite
  integral quadratic form $Q$ as a modular form of weight $m/2$; the
  Fourier coefficient $r_Q(n) = \#\{x : Q(x)=n\}$ is a representation
  number; the **sum-of-squares application** — expressing $\theta^k$ in
  terms of Eisenstein series + cusp forms gives exact formulas for
  $r_k(n)$ (number of ways to write $n$ as a sum of $k$ squares),
  recovering Jacobi's two- and four-square theorems and the eight-square
  formula. This is CinA's signature payoff: the bridge from Part I
  (quadratic forms) to Part II (modular forms).
- **prereqs:** `21.04.01` (modular forms on $\mathrm{SL}_2(\mathbb{Z})$),
  `21.04.02` (Hecke operators), `21.02.08` (Hasse-Minkowski / quadratic
  forms over $\mathbb{Q}$), `21.01.06` (quadratic residues, Legendre
  symbol — for the two-squares case)
- **chapter dir:** `content/21-number-theory/04-modular-forms/`;
  frontmatter `section: number-theory`, `chapter: modular-forms`
- **why a gap:** CinA Ch. VII §6 (and Ch. VI in the analytic part) builds
  the entire theta-series machinery; it is *the* application that
  justifies the modular-forms theory for a number theorist and closes the
  arc connecting the two halves of the book. The corpus has theta
  functions only in the **Riemann-surface / Jacobian** sense
  (`06.06.05-theta-function.md`, `06.06.07-riemann-bilinear.md`,
  `06.06.08-schottky-problem.md`) — Riemann theta with characteristics on
  abelian varieties, NOT the number-theoretic $\theta(z)=\sum q^{n^2}$.
  `21.04.01` mentions "weight-$1/2$" only in a one-line historical
  trailer and never defines $\theta$ or representation numbers. The
  two-squares theorem appears as a one-sentence aside in `21.01.06`/
  `21.01.07`; there is no four-square theorem, no $r_k(n)$ formula, and no
  half-integer-weight modular form anywhere. Genuine, high-value gap.

---

## COVERED (not gaps) — verified against live corpus

| Audit punch-list item | Status | Existing unit (evidence) |
|---|---|---|
| Finite fields $\mathbb{F}_q$, squares, Legendre symbol (CinA Ch. I) | COVERED | `21.02.01-finite-fields-mathbb-f-q-structure-and-squares` |
| Quadratic reciprocity via Gauss sums (CinA Ch. I §3) | COVERED | `21.02.02-quadratic-reciprocity-via-gauss-sums` (also `21.01.07`) |
| Quadratic residues / Legendre symbol | COVERED | `21.01.06-quadratic-residues-legendre-symbol` |
| $p$-adic numbers $\mathbb{Q}_p$, $\mathbb{Z}_p$ (CinA Ch. II) | COVERED | `21.02.03-p--adic-numbers-mathbb-q-p-and-mathbb-z-p` |
| Hensel's lemma (CinA Ch. II §2) | COVERED | `21.02.04-hensel-s-lemma` |
| Squares in $\mathbb{Q}_p$ / square classes | COVERED | inside `21.02.03` (§ Hensel corollary) + `21.02.05` (square-class tables for $\mathbb{Q}_p^\times/(\mathbb{Q}_p^\times)^2$) |
| Hilbert symbol $(a,b)_v$ + product formula (CinA Ch. III) | COVERED | `21.02.05-hilbert-symbol-a-b-v-and-the-product-formula` (full product-formula proof in master tier) |
| Hasse-Witt invariant $\varepsilon_v(f)$ (CinA Ch. IV §2) | COVERED | defined + used in `21.02.08-hasse-minkowski-theorem` ($\varepsilon_v(f)=\prod_{i<j}(a_i,a_j)_v$) |
| Local classification of forms over $\mathbb{Q}_p$ (rank + disc + $\varepsilon$) | COVERED | stated as Serre Ch. IV Thm 7 in `21.02.08` (with discriminant in $\mathbb{Q}_v^\times/(\mathbb{Q}_v^\times)^2$, signature at $\infty$) |
| Hasse-Minkowski theorem (CinA Ch. IV §3) | COVERED | `21.02.08-hasse-minkowski-theorem` (full $n=2,3,4,\ge5$ proof) |
| Classification of forms over $\mathbb{Q}$ | COVERED | classification theorem stated + proved in `21.02.08` master tier (Witt-ring formulation included) |
| Meyer's theorem (indefinite, $\ge 5$ vars) (CinA Ch. IV §4) | COVERED | Proposition 4 in `21.02.08` (statement + proof sketch + exercise) |
| Quadratic forms over $\mathbb{R}$ / signature / Sylvester | COVERED | `01.01.15-bilinear-quadratic-form` |
| Dirichlet characters + $L(s,\chi)$ + analytic continuation (CinA Ch. V) | COVERED | `21.03.02-dirichlet-l-functions` |
| $L(1,\chi)\ne0$ for $\chi\ne1$ | COVERED | `21.03.02` (master tier; non-vanishing is the load-bearing step) |
| Dirichlet's theorem on primes in arithmetic progressions | COVERED | `21.03.02-dirichlet-l-functions` (Dirichlet 1837 originator) |
| Dirichlet density (CinA Ch. VI Fr. ed.) | COVERED | `21.03.04-dirichlet-density` |
| Riemann zeta $\zeta(s)$ (analytic background) | COVERED | `21.03.01-riemann-zeta-function` |
| Modular group $\mathrm{SL}_2(\mathbb{Z})$, fundamental domain (CinA Ch. VII §1) | COVERED | `21.04.01-modular-forms-on-sl2-z` (fundamental-domain figure + valence-formula contour) |
| Modular forms $M_k$, cusp forms $S_k$, Eisenstein $E_k$ (CinA Ch. VII §2) | COVERED | `21.04.01-modular-forms-on-sl2-z` |
| Discriminant $\Delta$, $j$-invariant (CinA Ch. VII §2–3) | COVERED | `21.04.01` ($\Delta=(E_4^3-E_6^2)/1728=q\prod(1-q^n)^{24}$; $j$ 10× in body) |
| Dimension formula $\dim M_k$ + valence formula (CinA Ch. VII §3) | COVERED | `21.04.01` (valence formula proved via residue theorem; $M_2=0$ worked) |
| Ring structure $M_*=\mathbb{C}[E_4,E_6]$ (CinA Ch. VII §3) | COVERED | `21.04.01` (structure theorem proved: independence + generation by induction) |
| Hecke operators $T_n$, multiplicativity (CinA Ch. VII §4) | COVERED | `21.04.02-hecke-operators-hecke-algebra` |
| Hecke eigenforms + Euler product for $L(f,s)$ (CinA Ch. VII §5) | COVERED | `21.04.02` (eigenform–Fourier-coeff identity; Euler product) |
| Ramanujan $\tau$ + Ramanujan conjectures (CinA Ch. VII §5) | COVERED | `21.04.05-ramanujan-tau--function-and-ramanujan-conjectures` |
| Riemann theta functions (NOT the same as Gap 2's $\sum q^{n^2}$) | distinct topic, covered | `06.06.05-theta-function`, `06.06.07-riemann-bilinear`, `06.06.08-schottky-problem` (Jacobian-theoretic theta) |

**Genuine gaps: 2.  COVERED-verified topics: 26.**
