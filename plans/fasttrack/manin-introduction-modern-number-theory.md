# Manin, Panchishkin — *Introduction to Modern Number Theory* (Fast Track 3.34) — Audit + Gap Plan

**Book:** Yuri I. Manin, Alexei A. Panchishkin, *Introduction to Modern
Number Theory: Fundamental Problems, Ideas and Theories* (Springer
Encyclopaedia of Mathematical Sciences, Vol. 49 — Number Theory I; 2nd
ed. 2005, xv + 514 pp.). Originally published 1995; the 2nd edition
substantially extends the coverage of Galois representations,
$p$-adic $L$-functions, Iwasawa theory, and the post-Wiles arithmetic
of modular forms.

**Fast Track entry:** 3.34. Listed in
`docs/catalogs/FASTTRACK_BOOKLIST.md` as
"Number theory, algebraic geometry — BUY".

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2
+ P3-lite of the orchestration protocol). Output is a concrete
punch-list of new units so that *Introduction to Modern Number Theory*
(IMNT hereafter) is covered to the equivalence threshold (≥95%; see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Mirrors the
Brown-Higgins-Sivera *NAT* plan in structure. **Not** a full P1 audit;
IMNT is a 514-page encyclopaedic survey densely cross-referenced
across six chapters and three parts, and a line-level inventory is a
multi-week pass. This plan works from IMNT's part-and-chapter
structure and the authors' distinctive editorial choices, produces
the gap punch-list, and stops there.

**Sourcing status:** **REDUCED.** No local PDF in
`reference/textbooks-extra/`, `reference/fasttrack-texts/`, or
`reference/book-collection/free-downloads/`. The Springer page
requires authentication; this plan was produced from canonical
knowledge of IMNT's structure (the part/chapter/section outline of
Number Theory I in the Encyclopaedia of Mathematical Sciences is
public and stable across editions) cross-referenced against the peer
sources in §1. A full P1 inventory at theorem-level granularity is
**deferred until a copy is sourced** (target: paid Springer download
or Anna's Archive). The §3 punch-list is robust to this gap because
IMNT's content map is fixed by its three parts (Problems and
Techniques / Ideas and Theories / Analogies and Visions) and the
sub-disciplines they cover; the line-number-anchored anchor list
in §4 is the part that genuinely needs the PDF.

---

## §1 What IMNT is for

IMNT is the **encyclopaedic survey** of modern arithmetic geometry by
one of its founders. Where Silverman's *Arithmetic of Elliptic
Curves* gives a focused graduate textbook on a single arithmetic
object, and Neukirch's *Algebraic Number Theory* develops the
classical theory of number fields in textbook form, Manin-Panchishkin
takes the **bird's-eye view**: zeta functions, $L$-functions,
modular forms, Galois representations, $p$-adic methods, Iwasawa
theory, étale cohomology, and the post-1995 Wiles / modularity
landscape are presented as a single connected programme, with proofs
sketched and references to the technical literature rather than
fully worked out.

Distinctive contributions, in the order IMNT develops them:

1. **Problems-first framing.** Part I ("Problems and Techniques")
   opens with Diophantine equations, the absolute Galois group
   $\mathrm{Gal}(\overline{\mathbb{Q}}/\mathbb{Q})$, and the classical
   problem of representing integers by quadratic forms — *then* the
   technical machinery is motivated by these problems. This is the
   opposite of the textbook order (technique first, problems as
   exercises).
2. **Arithmetic of algebraic numbers as a single chapter.** Number
   fields, rings of integers, units, ideal class groups, $L$-functions
   of number fields, Chebotarev density — Neukirch covers each in a
   full chapter; IMNT compresses to one because the audience already
   knows the textbook story.
3. **Zeta and $L$-functions as the spine.** Chapter 6 of Part II
   organises the entire subject around $L$-functions: Riemann zeta,
   Dirichlet $L$, Dedekind zeta, Hecke $L$, Artin $L$, automorphic
   $L$, $L$-functions of modular forms, $L$-functions of elliptic
   curves, and (in the 2nd ed.) $p$-adic $L$-functions. The functional
   equation, analytic continuation, and special values (Euler 1735,
   class number formula, Birch-Swinnerton-Dyer, Tate twist conjectures)
   appear as instances of one structural pattern.
4. **Modular forms and the Eichler-Shimura programme.** Modular
   forms, Hecke operators, Hecke algebras, the Eichler-Shimura
   correspondence between weight-2 cusp forms and $\ell$-adic Galois
   representations attached to modular curves. The bridge from
   modular forms to Galois representations, with the Eichler-Shimura
   congruence relation as the central technical bridge.
5. **Galois representations.** $\ell$-adic representations of
   $\mathrm{Gal}(\overline{\mathbb{Q}}/\mathbb{Q})$, Tate modules of
   elliptic curves, the étale cohomology of modular curves, the
   Langlands philosophy "automorphic forms ↔ Galois representations"
   in survey form.
6. **Iwasawa theory.** $\mathbb{Z}_p$-extensions, Iwasawa
   $\lambda, \mu$-invariants, the Main Conjecture (Mazur-Wiles), and
   $p$-adic $L$-functions as a parallel analytic object alongside
   complex $L$-functions.
7. **Post-Wiles synthesis (2nd ed.).** Substantial new material in
   the 2nd ed. on the modularity theorem (Wiles 1995,
   Breuil-Conrad-Diamond-Taylor 2001), the BSD conjecture, the
   Sato-Tate conjecture, and the Langlands programme as the
   unifying frame.
8. **Analogies with function fields and arithmetic surfaces.** Part
   III ("Analogies and Visions") draws the curve-over-$\mathbb{F}_q$ ↔
   number-field analogy explicit: Weil conjectures (Deligne 1974),
   arithmetic surfaces (Arakelov, Faltings 1984), zeta functions of
   schemes over $\mathbb{Z}$. This is the encyclopaedic synthesis
   that justifies the title's word "modern".

IMNT is **not** a first introduction to number theory. It assumes
Serre *A Course in Arithmetic* (3.14) or equivalent for the
elementary background, basic algebraic number theory (Neukirch
chapters 1–3 level), basic algebraic geometry (varieties + schemes
at Hartshorne Ch. I–II level), and basic Galois theory. It is the
canonical *survey* entry point to modern arithmetic geometry —
the book one reads to see the whole landscape before committing to
Silverman / Diamond-Shurman / Neukirch / Bombieri-Gubler for the
technical depth.

**Peer sources** (in addition to the IMNT book itself; ≥3 required
per the audit protocol):

- J. H. Silverman, *The Arithmetic of Elliptic Curves* (Springer GTM
  106, 2nd ed. 2009) — the canonical textbook on elliptic curves over
  number fields, $\ell$-adic representations of $E$, the Mordell-Weil
  and Mazur torsion theorems.
- F. Diamond, J. Shurman, *A First Course in Modular Forms* (Springer
  GTM 228, 2005) — the canonical textbook on modular forms, Hecke
  algebras, the Eichler-Shimura relation, and modular Galois
  representations at graduate-textbook depth.
- J. Neukirch, *Algebraic Number Theory* (Springer Grundlehren 322,
  1999) — the canonical textbook on number fields, ideal class groups,
  local-global duality, $\zeta$ and $L$-functions of number fields,
  class field theory.
- E. Bombieri, W. Gubler, *Heights in Diophantine Geometry* (Cambridge
  New Mathematical Monographs 4, 2006) — the canonical reference for
  heights, Mordell-Weil, the Mordell / Faltings theorem, and the
  arithmetic of abelian varieties at the level IMNT surveys.
- (Supplementary) J. P. Serre, *A Course in Arithmetic* (Springer GTM
  7, 1973) — the elementary number-theory anchor, FT entry 3.14,
  which IMNT explicitly assumes.

---

## §2 Coverage table (Codex vs IMNT)

Cross-referenced against the current Codex corpus
(`content/00-precalc/` through `content/20-philosophy/`).
✓ = covered, △ = partial / different framing, ✗ = not covered.

| IMNT topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Diophantine equations (Pell, Mordell, Fermat-Catalan, ABC) | — | ✗ | **Gap.** No Diophantine equations chapter. |
| Number fields, ring of integers, ideal class group | — | ✗ | **Gap.** Algebraic number theory absent. |
| Local fields, $p$-adic numbers $\mathbb{Q}_p$ | △ | △ | Touched in passing in `02-analysis/` Ostrowski-adjacent material; no dedicated unit. |
| Adeles and ideles | — | ✗ | **Gap.** |
| Class field theory (statements) | — | ✗ | **Gap.** |
| Riemann zeta function $\zeta(s)$ — functional eq, analytic continuation | — | ✗ | **Gap.** Riemann 1859 originator-citation expected. |
| Dirichlet $L$-functions | — | ✗ | **Gap.** Dirichlet 1837 originator. |
| Dedekind zeta, Hecke $L$, Artin $L$ | — | ✗ | **Gap.** |
| Elliptic curves (algebraic-geometry side) | ✓ | ✓ | `04.04.03-elliptic-curves.md` covers Mordell-Weil / Weierstrass form / group law. |
| Elliptic curves over $\mathbb{Q}$ — arithmetic side (heights, $E(\mathbb{Q})$ structure, $L$-function $L(E, s)$) | △ | △ | Algebraic-geometric side present (`04.04.03`); arithmetic-side units (BSD, $L$-function, Selmer / Tate-Shafarevich) absent. |
| Modular group $\mathrm{SL}_2(\mathbb{Z})$, action on $\mathbb{H}$ | ✓ | ✓ | Present in `06.01.08-mobius-transformations.md` as a pointer. |
| Modular forms (definition, Eisenstein series, cusp forms, weight, level) | △ | △ | Referenced in `06.08.02-vhs-jacobian.md` synthesis ("Eisenstein series $E_4, E_6$ generating the ring of modular forms") but no dedicated unit. |
| Hecke operators, Hecke algebra, eigenforms | — | ✗ | **Gap.** Hecke 1936-37 originator. |
| Eichler-Shimura congruence relation | — | ✗ | **Gap.** Eichler 1954, Shimura 1957 originators. |
| $\ell$-adic Galois representations | — | ✗ | **Gap.** |
| Tate module $T_\ell E$ of an elliptic curve | — | ✗ | **Gap.** |
| Modular Galois representation attached to a cusp form | — | ✗ | **Gap.** |
| Modularity theorem (statement) | — | ✗ | **Gap.** Wiles 1995, BCDT 2001. |
| BSD conjecture (statement) | — | ✗ | **Gap.** |
| $\mathbb{Z}_p$-extensions, Iwasawa $\lambda, \mu$-invariants | — | ✗ | **Gap.** Iwasawa 1959 originator. |
| $p$-adic $L$-functions, Main Conjecture (Mazur-Wiles) | — | ✗ | **Gap.** |
| Weil conjectures (statement, Deligne proof sketch) | △ | △ | Riemann-Hypothesis-for-varieties mentioned in `04.03/` cohomology-of-projective survey but no dedicated unit. Deligne 1974 originator. |
| Étale cohomology (survey) | — | ✗ | **Gap.** Strict prerequisite for the Galois-representation unit. |
| Arakelov geometry, arithmetic surfaces, Faltings | — | ✗ | **Gap (low priority — Master-tier survey only).** |
| Sato-Tate conjecture (statement) | — | ✗ | **Gap (low priority — Master pointer).** |
| Langlands programme (survey pointer) | — | ✗ | **Gap (low priority — non-goal per §5).** |
| ABC conjecture, Faltings / Mordell theorem (statements) | — | ✗ | **Gap (low priority — Master pointer).** |

**Aggregate coverage estimate:** **~5%** of IMNT has corresponding
Codex units (only the elliptic-curves-as-algebraic-curves unit
`04.04.03` and the modular-group / Möbius-transformations pointer
in `06.01.08`). The gap is essentially total. This is unsurprising —
the Codex has no number-theory chapter; arithmetic geometry has
appeared only where it intersects with the algebraic-geometry
curriculum (Mordell-Weil for elliptic curves, modular group via
hyperbolic geometry, period mappings via VHS).

**Structural recommendation.** A new chapter is required. Two options:

- **Option A (preferred): `21-number-theory/` as a new top-level
  chapter** parallel to `04-algebraic-geometry/` and
  `06-riemann-surfaces/`. Number theory is its own discipline with
  its own foundational sequencing (number fields → zeta/L → modular
  forms → Galois representations → Iwasawa), and folding it into
  `04-algebraic-geometry/` distorts both. This matches the FT
  booklist's treatment of 3.14 (Serre *Cours d'arithmétique*) and
  3.34 (Manin-Panchishkin) as a distinct strand.
- **Option B (alternative): `04.12-number-theory/` as a sub-chapter**
  of algebraic geometry. Cheaper to set up (no new chapter
  scaffolding), but mis-classifies number theory as a *subset* of
  algebraic geometry, which is the modern arithmetic-geometry view
  but not how the Codex sequences other classical disciplines (real
  analysis is not a sub-chapter of measure theory, etc.).

**Strong recommendation: Option A.** Create `content/21-number-theory/`
with sub-folders for the priority-1 units below. The chapter sits
naturally between `20-philosophy/` and any future physics deepenings;
its dependency edges go *into* `04-algebraic-geometry/` (for
schemes / elliptic curves) and *out to* `06-riemann-surfaces/` (for
modular forms as automorphic forms on $\mathbb{H}/\Gamma$).

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — strict prerequisites:**

- **Algebraic number theory primer.** Neukirch Ch. 1–3 equivalent —
  number fields, ring of integers, ideal class group, units.
  Currently absent from the Codex; *required* before any IMNT unit
  can be written. Tentative unit `21.01.01` through `21.01.05`.
- **Local fields / $p$-adic numbers.** $\mathbb{Q}_p$ as completion,
  Hensel's lemma, ramification, local-global. Tentative `21.02.01`
  through `21.02.04`. May overlap with `02-analysis/` Ostrowski
  material; consolidate.
- **Étale cohomology survey** (pointer-only OK at this stage).
  Needed for any honest Galois-representation unit. Could live as
  `04.12.xx` inside the AG chapter rather than the new NT chapter.

**Priority 1 — high-leverage, captures IMNT's central content:**

1. **`21.03.01` Riemann zeta function $\zeta(s)$.** Definition,
   Euler product, functional equation, analytic continuation, the
   Riemann hypothesis (statement only). Riemann 1859
   originator-citation. Three-tier; Beginner = Euler product +
   $\zeta(2) = \pi^2/6$; Intermediate = functional equation via
   theta-function symmetry; Master = the full Riemann 1859 derivation.
   ~2000 words.
2. **`21.03.02` Dirichlet $L$-functions $L(s, \chi)$.** Dirichlet
   characters, $L(s, \chi)$, non-vanishing at $s = 1$, Dirichlet's
   theorem on primes in arithmetic progressions. Dirichlet 1837
   originator. Three-tier. ~1800 words.
3. **`21.03.03` Dedekind zeta function, Hecke $L$, Artin $L$.**
   Survey unit: $\zeta_K(s)$ of a number field, Hecke characters,
   Artin $L$-functions attached to Galois representations, the
   functional equation in each case. Master tier required;
   Beginner = Dedekind only. ~2000 words.
4. **`21.04.01` Modular forms on $\mathrm{SL}_2(\mathbb{Z})$.**
   Definition, weight, holomorphy at infinity, Eisenstein series
   $E_k$, cusp forms, dimension formula for $M_k$. Diamond-Shurman
   Ch. 1 anchor; IMNT Ch. 6 anchor. Three-tier. ~2200 words.
   Foundational for the rest of the modular-forms units.
5. **`21.04.02` Hecke operators and Hecke algebra.** $T_p$ acting on
   $M_k(\Gamma)$, multiplicativity, eigenforms, the Hecke algebra
   $\mathbb{T}$. Hecke 1936-37 *Math. Ann.* originator-citation;
   Diamond-Shurman Ch. 5 anchor. Three-tier. ~2000 words.
6. **`21.04.03` Eichler-Shimura correspondence.** Statement:
   weight-2 cusp eigenforms ↔ 2-dimensional $\ell$-adic Galois
   representations on the Tate module of the Jacobian of $X_0(N)$.
   Eichler 1954 + Shimura 1957 originator-citation. Master-tier;
   Intermediate covers the statement and the $X_0(N)$ side;
   Beginner is a pointer only. ~2500 words.
7. **`21.05.01` $\ell$-adic Galois representations.** Definition,
   continuity, ramification, examples (Tate module of an elliptic
   curve $T_\ell E$, modular Galois representation $\rho_f$).
   Master-tier-heavy; depends on Priority-0 étale cohomology
   pointer. ~2500 words.
8. **`21.06.01` Modularity theorem (statement) and BSD.** Statement
   of the modularity theorem (Wiles 1995 *Ann. Math.* 141; BCDT
   2001 *J. AMS* 14 for the full statement); statement of the BSD
   conjecture; the bridge $L(E, s) = L(f_E, s)$. Master-tier;
   Beginner = "every elliptic curve over $\mathbb{Q}$ is modular".
   ~2200 words. **No proof** — defer to non-goals (§5).

**Priority 2 — Iwasawa, $p$-adic methods, Weil conjectures:**

9. **`21.07.01` $\mathbb{Z}_p$-extensions and Iwasawa theory.**
   $\mathbb{Z}_p$-extension of a number field, Iwasawa's $\lambda$
   and $\mu$ invariants, the Iwasawa algebra $\Lambda$. Iwasawa
   1959 *Bull. AMS* originator. ~2000 words. Master-tier-heavy.
10. **`21.07.02` $p$-adic $L$-functions and Main Conjecture.**
    Kubota-Leopoldt $p$-adic $L$-function, the Mazur-Wiles Main
    Conjecture (statement). Master-tier survey unit. ~1800 words.
11. **`21.08.01` Weil conjectures (statement and Deligne proof
    sketch).** Statement: rationality, functional equation,
    Riemann hypothesis, Betti numbers, for $\zeta$-functions of
    smooth projective varieties over $\mathbb{F}_q$. Deligne 1974
    *Publ. Math. IHES* 43 originator-citation for the RH. Could
    sit in `04-algebraic-geometry/` instead of `21-number-theory/`
    given the overlap; cross-link. ~2200 words.

**Priority 3 — survey deepenings (Master-tier, optional for FT
equivalence):**

12. **`21.06.02` Sato-Tate conjecture.** Statement, proof (Taylor
    et al. 2008-2011); pointer only. ~1200 words.
13. **`21.09.01` Arakelov geometry / arithmetic surfaces (survey).**
    Faltings 1984 *Ann. Math.* originator; Bombieri-Gubler anchor.
    Master-only pointer. ~1500 words.
14. **`21.09.02` Faltings / Mordell theorem.** Statement; pointer
    unit. ~1200 words.

**Priority 4 — pointers to the Langlands programme (deferred per
§5):**

15. **`21.10.01` Langlands philosophy survey.** Statement-level
    only; defer technical content. ~1000 words.

---

## §4 Implementation sketch (P3 → P4)

For a full IMNT coverage pass, **items 1–8 are the minimum set** to
hit the FT equivalence threshold, **with the Priority-0
prerequisites (number fields, local fields, étale cohomology
pointer) shipped first**. Realistic production estimate (mirroring
Hartshorne / Lawson-Michelsohn / Brown 1.05 batches):

- ~3.5–4.5 hours per unit. IMNT units skew higher than the corpus
  average because the master tier requires careful
  $L$-function and Galois-representation notation, multiple
  originator citations per unit, and tight integration with the
  algebraic-geometry chapter.
- 8 priority-1 units × ~4 hours = **~32 hours** of focused
  production for the high-leverage core.
- Plus 3 Priority-0 prereq units × ~3 hours = ~9 hours.
- Plus 3 priority-2 units × ~3.5 hours = ~11 hours.
- **Total ~52 hours** to reach ≥90% IMNT equivalence; ~60 hours
  with priority-3 to hit ≥95%. Fits a focused 7–10 day window.

**Originator-prose target.** Several IMNT units are
originator-eligible per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10:

- **Riemann 1859**, "Über die Anzahl der Primzahlen unter einer
  gegebenen Größe," *Monatsber. Berliner Akad.* — the zeta-function
  paper. Originator citation for `21.03.01`.
- **Dirichlet 1837**, "Beweis des Satzes, dass jede unbegrenzte
  arithmetische Progression …," *Abhandl. Königl. Preuss. Akad.*
  — Dirichlet $L$-functions and the arithmetic-progressions theorem.
  Originator citation for `21.03.02`.
- **Hecke 1936**, "Über die Bestimmung Dirichletscher Reihen durch
  ihre Funktionalgleichung," *Math. Ann.* 112; **Hecke 1937**,
  "Über Modulfunktionen und die Dirichletschen Reihen mit
  Eulerscher Produktentwicklung. I, II," *Math. Ann.* 114. Hecke
  operators, Hecke algebra. Originator citation for `21.04.02`.
- **Eichler 1954**, "Quaternäre quadratische Formen und die
  Riemannsche Vermutung für die Kongruenzzetafunktion," *Arch.
  Math.* 5; **Shimura 1957**, "Correspondances modulaires et les
  fonctions $\zeta$ de courbes algébriques," *J. Math. Soc. Japan*
  10. The Eichler-Shimura correspondence. Originator citation for
  `21.04.03`.
- **Iwasawa 1959**, "On $\Gamma$-extensions of algebraic number
  fields," *Bull. AMS* 65. Originator citation for `21.07.01`.
- **Deligne 1974**, "La conjecture de Weil. I," *Publ. Math. IHES*
  43. The Riemann Hypothesis for varieties over $\mathbb{F}_q$.
  Originator citation for `21.08.01`.
- **Wiles 1995**, "Modular elliptic curves and Fermat's last
  theorem," *Ann. Math.* 141. Modularity for semistable elliptic
  curves; with **Breuil-Conrad-Diamond-Taylor 2001**, *J. AMS* 14,
  full modularity. Originator-citation set for `21.06.01`.

**Notation crosswalk.** IMNT follows Bourbaki / French-school
conventions:

- $\mathbb{Q}_p$ for the $p$-adic completion; $\mathbb{Z}_p$ for the
  $p$-adic integers; $\mathbb{C}_p$ for the completion of
  $\overline{\mathbb{Q}_p}$.
- $G_K := \mathrm{Gal}(\overline{K}/K)$ for the absolute Galois
  group; $G_\mathbb{Q}$ for the rationals.
- $\zeta(s)$, $L(s, \chi)$, $\zeta_K(s)$, $L(s, \pi)$ for the
  successive $L$-function generalisations; consistent use of
  $\Lambda(s)$ for the completed $L$-function with $\Gamma$-factors.
- $M_k(\Gamma)$, $S_k(\Gamma)$ for modular and cusp forms of weight
  $k$ on $\Gamma$; $T_p$ for Hecke operators.
- $T_\ell E$ for the $\ell$-adic Tate module; $V_\ell E := T_\ell E
  \otimes_{\mathbb{Z}_\ell} \mathbb{Q}_\ell$ for the rational
  version.
- $\rho_{f, \ell} : G_\mathbb{Q} \to \mathrm{GL}_2(\overline{\mathbb{Q}_\ell})$
  for the modular Galois representation attached to a cusp eigenform
  $f$.

The Codex should adopt these notations verbatim (per
`docs/specs/UNIT_SPEC.md` §11) for all `21-*` units; record in a
§Notation paragraph of the chapter-opening unit (`21.01.01` or a
chapter README).

---

## §5 What this plan does NOT cover

- **A line-number-level inventory of every named theorem in IMNT**
  (full P1 audit; deferred until a PDF is sourced — IMNT is 514 pp.
  across six chapters and three parts, and a complete inventory is
  a multi-week pass).
- **Wiles 1995 proof of the modularity theorem at technical depth.**
  Statement only (in `21.06.01`); the full proof involves
  deformation theory of Galois representations, Hecke algebras,
  $R = \mathbb{T}$ theorems, Taylor-Wiles patching, and the
  numerical criterion — each of which deserves its own unit, and
  none of which IMNT itself develops at theorem-level proof depth.
  Pointer-only.
- **Langlands programme at technical depth.** Statement-level only
  (in `21.10.01`); the technical content — automorphic
  representations of $\mathrm{GL}_n$, Arthur's trace formula,
  functoriality, the local-global Langlands correspondence — is a
  research-monograph subject that IMNT itself only surveys.
  Deferred.
- **Exercise-pack production.** IMNT has relatively few exercises
  (encyclopaedic, not textbook); exercise pack is a P3-priority-3
  follow-up.
- **Class field theory at proof depth.** Statements only (idele
  class group, reciprocity); the full Tate-Artin proof via
  cohomology of class formations is deferred to a Neukirch-anchored
  unit in `21-number-theory/` not on this punch-list.
- **$p$-adic Hodge theory.** Fontaine's theory of $B_\mathrm{dR}$,
  $B_\mathrm{cris}$, $B_\mathrm{st}$ is touched in passing by IMNT
  (2nd ed.) but is a self-contained technical subject; deferred.

---

## §6 Acceptance criteria for FT equivalence (IMNT)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The `21-number-theory/` chapter exists with its scaffolding
  (chapter README, dependency edges in
  `docs/catalogs/DEPENDENCY_MAP.md`).
- Priority-0 prerequisite units (algebraic number theory primer,
  local fields, étale cohomology pointer) have shipped.
- ≥95% of IMNT's surveyed theorems in Parts I + II map to Codex
  units (currently ~5%; after priority-1 units this rises to
  ~70%; after priority-1 + priority-2 to ~90%; full ≥95%
  requires selective priority-3).
- ≥90% of IMNT's worked computations and named conjectures have a
  direct unit or are referenced from a unit that covers them
  (Riemann hypothesis, Birch-Swinnerton-Dyer, Sato-Tate, Faltings
  / Mordell, modularity theorem statement, Main Conjecture
  statement, ABC).
- Notation decisions are recorded (see §4).
- Pass-W weaving connects the new chapter to `04-algebraic-geometry/`
  via the elliptic-curves unit `04.04.03`, to `06-riemann-surfaces/`
  via the modular-group / VHS units, and (loosely) to
  `03-modern-geometry/` via Galois representations as principal
  bundles.

The 8 priority-1 units close most of the equivalence gap given the
Priority-0 prereqs are in place. Priority-2 closes the Iwasawa /
$p$-adic and Weil-conjectures gaps. Priority-3+4 are
deepening / pointer units.

---

## §7 Sourcing

- **Status: REDUCED.** No local PDF found in the three configured
  paths (`reference/textbooks-extra/`, `reference/fasttrack-texts/`,
  `reference/book-collection/free-downloads/`) as of 2026-05-18.
  Springer link redirects to authentication; this plan was produced
  from canonical knowledge of IMNT's structure cross-referenced
  against Silverman / Diamond-Shurman / Neukirch / Bombieri-Gubler.
- **Action item.** Source IMNT (paid Springer or Anna's Archive)
  and drop into `reference/textbooks-extra/` as
  `Manin-Panchishkin-IntroductionToModernNumberTheory-2ndEd.pdf`.
  Required before a full P1 audit can run.
- **License.** Springer copyright. For educational use cite as
  Manin, Panchishkin, *Introduction to Modern Number Theory:
  Fundamental Problems, Ideas and Theories* (Encyclopaedia of
  Mathematical Sciences 49, Springer-Verlag, 2nd ed. 2005).
- **Local copy target path.** `reference/textbooks-extra/` per
  pattern of other paid FT texts (Hartshorne, Silverman,
  Neukirch).
- **Companion sources already in / targeted for the reference
  library.**
  - Silverman, *The Arithmetic of Elliptic Curves* — cited in
    `04.04.03-elliptic-curves.md`; PDF status: TODO_REF.
  - Diamond-Shurman, *A First Course in Modular Forms* — not yet
    sourced; required for `21.04.*` units.
  - Neukirch, *Algebraic Number Theory* — not yet sourced; required
    for Priority-0 prereq units.
  - Bombieri-Gubler, *Heights in Diophantine Geometry* — not yet
    sourced; required for `21.09.*` Master-tier units.
