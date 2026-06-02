# Deepening audit (Phase 2) — Manin & Panchishkin, *Introduction to Modern Number Theory* (FT 3.34)

**SLUG:** `manin-introduction-modern-number-theory`
**Date:** 2026-06-02
**Verdict:** Book is now ~90% covered. The entire §3 punch-list of the
first-pass audit (written when the corpus had NO number-theory chapter, est.
~5% coverage) has since been built out as the `21-number-theory/` chapter (30
units across 9 sub-chapters). Riemann zeta, Dirichlet/Dedekind/Hecke/Artin L,
modular forms, Hecke operators, Eichler-Shimura, ℓ-adic Galois reps, Tate
modules, modularity/BSD, Iwasawa, p-adic L, Sato-Tate, Arakelov/Faltings/Mordell,
Langlands survey — all shipped. After heavy grep verification only **4 genuine
gaps** remain, three of which are signature Manin-specific or foundational
topics that the existing units cite/use but never develop in a dedicated unit.

---

## Genuine gaps (4)

### GAP 1 — Number fields, ring of integers, class group, Dirichlet unit theorem (foundational primer)

- **proposed id:** `21.02.06`
- **title:** Number fields, ring of integers, ideal class group, and the Dirichlet unit theorem
- **spec:** A number field $K$, its ring of integers $\mathcal{O}_K$, unique
  factorisation of ideals in a Dedekind domain, the ideal class group $\mathrm{Cl}(K)$,
  Minkowski's convex-body / geometry-of-numbers bound, finiteness of the class
  number $h_K$, and the Dirichlet unit theorem $\mathcal{O}_K^\times \cong \mu_K \times \mathbb{Z}^{r_1+r_2-1}$
  with the regulator $R_K$. The foundational algebraic-number-theory layer the
  entire `21.03–21.10` arc assumes.
- **prereqs:** `21.01.02` (FTA / unique factorisation), `01.02.07`
  (polynomial-ring PID/UFD/Euclidean), `21.02.03` ($\mathbb{Q}_p$ / completions)
- **chapter dir:** `content/21-number-theory/02-quadratic-forms-local-fields/`
- **frontmatter:** `chapter: quadratic-forms-local-fields`, `section: 21`
- **why genuine:** The *results* (finiteness of $h_K$ via Minkowski 1891, the
  Dirichlet unit theorem, the regulator) are cited as named black boxes inside
  `21.03.03` (the class-number-formula proof route) and used in `21.06.01`, but
  **no unit states or develops them**. `find` for `number-field|class-group|class-number|ring-of-integers|dedekind-domain|minkowski-bound|dirichlet-unit` titles returns nothing; Minkowski's convex-body theorem is stated nowhere (the only `minkowski` hits are Hasse-Minkowski `21.02.08` and the $L^p$-inequality `02.07.06`). This is IMNT Part I's "arithmetic of algebraic numbers" chapter and a strict prerequisite.

### GAP 2 — Brauer-Manin obstruction to the Hasse principle (Manin's signature contribution)

- **proposed id:** `21.02.07`
- **title:** The Brauer-Manin obstruction and the failure of the Hasse principle
- **spec:** The Brauer group $\mathrm{Br}(X)$ of a variety, the evaluation
  pairing $X(\mathbb{A}_K) \times \mathrm{Br}(X) \to \mathbb{Q}/\mathbb{Z}$, the
  Brauer-Manin set $X(\mathbb{A}_K)^{\mathrm{Br}} \subseteq X(\mathbb{A}_K)$, and
  how it accounts for counterexamples to the Hasse principle (Selmer's cubic
  $3x^3+4y^3+5z^3=0$); the arithmetic of cubic surfaces; Skorobogatov's example
  that Brauer-Manin is not the only obstruction.
- **prereqs:** `21.02.08` (Hasse-Minkowski / Hasse principle), `21.02.05`
  (Hilbert symbol, product formula, local Brauer groups), `21.02.03` ($\mathbb{Q}_p$)
- **chapter dir:** `content/21-number-theory/02-quadratic-forms-local-fields/`
- **frontmatter:** `chapter: quadratic-forms-local-fields`, `section: 21`
- **why genuine:** This is **Manin's own 1971 ICM contribution** and a headline
  topic of IMNT Part I/III. It is *named and forward-pointed at least 7 times*
  across `21.02.05` and `21.02.08` ("the Brauer-Manin obstruction would in turn
  require…", Manin 1971 in the master citation, the full QA at 21.02.08:408/414)
  — but always as a pointer to a unit that does not exist. `grep -riE "brauer.?manin"`
  finds only these pointer mentions; no unit develops the construction. High-value
  Manin-specific gap.

### GAP 3 — Étale cohomology (survey / definitional unit)

- **proposed id:** `04.03.08`
- **title:** Étale cohomology and $\ell$-adic cohomology of varieties
- **spec:** The étale site of a scheme, étale sheaves, the étale cohomology
  groups $H^i_{\text{ét}}(X, \mathcal{F})$, $\ell$-adic cohomology
  $H^i_{\text{ét}}(X_{\bar K}, \mathbb{Q}_\ell)$ as the comparison-with-Betti
  Weil cohomology, the Galois action on it (source of $\ell$-adic Galois
  representations), and the Weil-conjecture Frobenius-eigenvalue / weight
  statement. Survey-tier with definitions; pointer to SGA 4/4.5/5 for proofs.
- **prereqs:** `04.02.05` (smooth, étale, unramified morphisms), `04.03.04`
  (cohomology of projective schemes / sheaf cohomology), `04.03.01` (sheaf cohomology)
- **chapter dir:** `content/04-algebraic-geometry/03-cohomology/`
- **frontmatter:** `chapter: cohomology`, `section: 04`
- **why genuine:** `21.05.01` (ℓ-adic Galois reps) explicitly defers to a
  forthcoming étale-cohomology pointer: *"See `[04-algebraic-geometry]` for the
  étale-cohomology pointer (forthcoming)"* (line 629). The étale **morphism**
  unit `04.02.05` exists, but no unit defines the étale **site or cohomology**.
  This is the geometric foundation of the whole Galois-rep / Weil-conjecture
  story and is currently a dangling forward reference. Placed in AG (its natural
  home) per the first-pass audit's own Priority-0 note.

### GAP 4 — Heights in Diophantine geometry: Weil height, Néron-Tate canonical height, Northcott

- **proposed id:** `21.09.03`
- **title:** Heights, the Néron-Tate canonical height, and the Northcott property
- **spec:** The naive/Weil logarithmic height on $\mathbb{P}^n(\overline{\mathbb{Q}})$,
  functoriality, the Northcott finiteness property, the Néron-Tate canonical
  height $\hat h$ on an abelian variety / elliptic curve as a quadratic form,
  the height regulator, and the role of heights in the proof of Mordell-Weil
  (descent) and in BSD. Anchors Bombieri-Gubler.
- **prereqs:** `04.04.03` (elliptic curves, Mordell-Weil), `04.10.16` (abelian
  varieties), `21.09.01` (Arakelov heights as arithmetic intersection numbers)
- **chapter dir:** `content/21-number-theory/09-arakelov-faltings/`
- **frontmatter:** `chapter: arakelov-faltings`, `section: 21`
- **why genuine:** The Néron-Tate height $\hat h$ is *used as a black box* in
  `21.06.01` (BSD regulator $R_E = \det \hat h(P_i,P_j)$, Gross-Zagier),
  `21.09.01` (heights as Arakelov self-intersections), and `21.09.02` (Faltings/
  Mordell), but **no unit defines the Weil height, proves Northcott finiteness,
  or constructs the canonical height by the limit/quadratic-form argument**.
  `find` for `height|neron-tate|mordell-weil` titles returns nothing. This is
  the IMNT/Bombieri-Gubler "heights" topic the first-pass audit flagged for
  `21.09` but only the Arakelov *survey* and Faltings *statement* shipped — the
  height-construction unit they both lean on is missing. Modest-priority but a
  real load-bearing gap (the BSD regulator is currently defined via an undefined
  object).

---

## COVERED (not gaps) — verified due diligence

| IMNT / brief topic | Existing unit(s) | Evidence |
|---|---|---|
| Elementary NT: divisibility, primes, FTA, congruences/CRT, Fermat-Euler-Wilson, primitive roots | `21.01.01`–`21.01.05` | full sub-chapter |
| Quadratic residues, Legendre symbol, quadratic reciprocity | `21.01.06`, `21.01.07`, `21.02.02` | reciprocity via Gauss sums too |
| Pell equation / continued fractions | `21.01.08` | — |
| Finite fields $\mathbb{F}_q$ | `21.02.01` | — |
| $p$-adic numbers $\mathbb{Q}_p$, $\mathbb{Z}_p$; Hensel's lemma | `21.02.03`, `21.02.04` | — |
| Hilbert symbol, product formula; local fields | `21.02.05` | — |
| Hasse-Minkowski, local-global for quadratic forms | `21.02.08` | — |
| Riemann zeta: Euler product, functional eq, analytic continuation, RH | `21.03.01` | Riemann 1859 originator |
| Dirichlet $L$-functions, primes in AP, non-vanishing | `21.03.02` | Dirichlet 1837 originator |
| Dedekind zeta, Hecke $L$, Artin $L$, analytic class-number formula | `21.03.03` | states Dedekind/Hecke/Artin + Tate-thesis adelic reformulation |
| Dirichlet density, Chebotarev | `21.03.04` | — |
| Modular forms on $\mathrm{SL}_2(\mathbb{Z})$, Eisenstein/cusp, dimension | `21.04.01` | — |
| Hecke operators, Hecke algebra, eigenforms | `21.04.02` | Hecke 1936-37 originator |
| Eichler-Shimura correspondence | `21.04.03` | Eichler 1954 / Shimura 1957 originators |
| Ramanujan $\tau$, Ramanujan conjecture | `21.04.05` | — |
| $\ell$-adic Galois reps, Tate module $T_\ell E$, $\rho_{f,\ell}$ | `21.05.01` | — |
| Modularity theorem (Wiles/BCDT) + BSD conjecture | `21.06.01` | Wiles 1995, BCDT 2001 |
| Sato-Tate conjecture | `21.06.02` | — |
| $\mathbb{Z}_p$-extensions, Iwasawa $\lambda,\mu$, Iwasawa algebra | `21.07.01` | Iwasawa 1959 originator |
| $p$-adic $L$-functions, Mazur-Wiles Main Conjecture | `21.07.02` | Kubota-Leopoldt |
| Arakelov geometry / arithmetic surfaces | `21.09.01` | — |
| Faltings / Mordell theorem | `21.09.02` | Faltings 1983 |
| Langlands programme survey | `21.10.01` | $n=1$ = class field theory framing |
| **Weil conjectures (statement, Deligne)** | `21.05.01` (lines 349, 536, 542, 629, 641) | RH/rationality/Frobenius-Weil-number all *stated* with Deligne 1974/1980 cited; Hasse-Weil bound in `04.04.03`. Dedicated unit would be marginal — **NOT a gap**. |
| **Class field theory (statements: reciprocity, idele class group)** | `21.03.03`, `21.10.01` | Artin reciprocity, idele class group $F^\times\backslash\mathbb{A}_F^\times$, Takagi-Artin all *stated* (21.10.01:193, 272; 21.03.03:204,492). Adeles/ideles introduced via Tate thesis. Proof-depth CFT was explicitly a §5 non-goal. **NOT a gap.** |
| **Adeles / ideles** | `21.03.03`, `21.10.01` | adele ring $\mathbb{A}_K$, idele class group, Tate-thesis Fourier-Pontryagin duality covered as part of CFT/L-function units. **NOT a separate gap.** |
| Elliptic curves (algebraic side), Mordell-Weil | `04.04.03` | group law, Weierstrass, descent |
| Abelian varieties, theta functions, Jacobian | `04.10.16`, `06.06.03`, `06.06.05`, `06.08.02` | theta `06.06.05`, Jacobian variety `06.06.03`; cross-checked against just-produced `04.10.16` |
| Modular group $\mathrm{SL}_2(\mathbb{Z})$ acting on $\mathbb{H}$ | `06.01.08`, `21.04.01` | — |
| Non-commutative / quantum NT, philosophy of motives (Part III pointers) | Langlands `21.10.01`; motives touched in `04.03.16-19` (six-functor, perverse sheaves) | IMNT itself only gestures here; survey-pointer level present. **NOT a gap.** |
| Riemann-Roch, Weil divisors, intersection theory (AG machinery IMNT assumes) | `04.04.01`, `04.05.*` | — |

---

## Report

- **Genuine gaps:** 4 (`21.02.06` number-fields/class-group/unit-theorem primer;
  `21.02.07` Brauer-Manin obstruction; `04.03.08` étale cohomology;
  `21.09.03` heights / Néron-Tate canonical height).
- **COVERED-verified topics:** 30 (table above), including the three the brief
  flagged as likely-but-check (Weil conjectures, class field theory statements,
  adeles/ideles) — all confirmed already covered.
- **Gap file:** `plans/fasttrack/_deepen/manin-introduction-modern-number-theory.gaps.md`
