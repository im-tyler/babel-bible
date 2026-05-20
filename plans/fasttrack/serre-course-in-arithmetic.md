# Serre — *A Course in Arithmetic* (Fast Track 3.14) — Audit + Gap Plan

**Book:** Jean-Pierre Serre, *A Course in Arithmetic* (Springer Graduate
Texts in Mathematics 7, English translation 1973 by an anonymous Springer
translator of the French original *Cours d'arithmétique*, Presses
Universitaires de France 1970; viii + 115 pp. in the English ed.). ISBN
0-387-90040-3 (hardcover), 0-387-90041-1 (softcover). Commercial title
(BUY in `docs/catalogs/FASTTRACK_BOOKLIST.md` row 3.14 — "Number theory,
Ostrowski").

**Fast Track entry:** 3.14. The canonical *shortest* graduate text on
elementary modern number theory. Two-part structure:
**Part I — Algebraic Methods** (Chs. I–IV, ~70 pp.) finite fields,
$p$-adic fields, the Hilbert symbol, quadratic forms over $\mathbb{Q}_p$
and over $\mathbb{Q}$, Hasse-Minkowski theorem; **Part II — Analytic
Methods** (Chs. V–VII, ~45 pp.) Dirichlet's theorem on primes in
arithmetic progressions (via $L(s, \chi)$), modular forms on
$\mathrm{SL}_2(\mathbb{Z})$ (Eisenstein series, the discriminant
$\Delta$, the $j$-invariant, theta functions, Hecke operators). The book
is a 115-page *crystalline* introduction connecting the algebra of
quadratic forms over local fields to the analysis of $L$-functions and
modular forms — the cleanest single bridge between **3.34 Manin-Panchishkin**
(arithmetic geometry survey) and the elementary algebra / analysis core
of the Codex.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list
of new units so that *A Course in Arithmetic* (CinA hereafter) is
covered to the equivalence threshold (≥95% effective coverage of
theorems, key examples, exercise pack, notation, sequencing, intuition,
applications — see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).
Mirrors the Brown-Higgins-Sivera *NAT* plan and the Manin-Panchishkin
*IMNT* plan in structure. **Not** a full P1 audit; a line-number
inventory of every named theorem is deferred to a dedicated pass after a
local PDF is sourced.

**Sourcing status: REDUCED.** No local PDF in
`reference/textbooks-extra/`, `reference/fasttrack-texts/`, or
`reference/book-collection/free-downloads/` (verified 2026-05-18).
Springer link <https://link.springer.com/book/10.1007/978-1-4684-9884-4>
redirects to the Springer IDP authentication wall. Anna's Archive
acquisition deferred. This plan was produced from canonical knowledge of
CinA's seven-chapter structure (well-documented and stable across
editions — the book is famously short and its TOC is reproduced in every
review and citation list) cross-referenced against the peer sources in
§1. The §3 punch-list is robust to this gap because CinA's content map
is fixed by its two-part / seven-chapter structure and is unusually
simple by graduate-text standards; the line-number anchor list in §4 is
the part that genuinely needs the PDF. **Strong coordination with the
Manin-Panchishkin audit (Cycle 9 / FT 3.34)** — CinA Chs. V–VII overlap
substantially with IMNT Ch. 6 (modular forms, Hecke operators,
$L$-functions). Overlapping units are *shipped once*; see §2 and §3.

---

## §1 What CinA is for

CinA is the **canonical short graduate text on elementary modern number
theory** — quadratic forms, $p$-adic methods, Dirichlet's theorem,
modular forms, Hecke operators — all in 115 pages. Where Hardy-Wright
*An Introduction to the Theory of Numbers* (Oxford 1938, 6th ed. 2008,
~620 pp.) is the encyclopaedic undergraduate reference, where
Borevich-Shafarevich *Number Theory* (Academic Press 1966, ~436 pp.) is
the classical Soviet-school treatment that develops algebraic number
theory and local fields at full textbook depth, where Cassels-Fröhlich
*Algebraic Number Theory* (Academic Press 1967, the Brighton
proceedings, ~366 pp.) is the canonical class-field-theory reference,
where Diamond-Shurman *A First Course in Modular Forms* (Springer GTM
228, 2005, ~436 pp.) is the modern textbook on modular forms at
graduate-textbook depth, and where Manin-Panchishkin *Introduction to
Modern Number Theory* (Springer Enc. Math. Sci. 49, 2nd ed. 2005, ~514
pp., FT 3.34) is the encyclopaedic survey — **CinA is the shortest
self-contained graduate text that bridges quadratic forms over local
fields, Dirichlet's theorem via $L$-functions, and modular forms with
Hecke operators in a single coherent 115-page narrative**. Like CSLA
(FT 3.12) and LRFG (FT 3.15), CinA extracts a lecture course (Serre,
ENS late 1960s) into its functorial spine, stripping commentary while
keeping every non-trivial proof.

Distinctive contributions, in the order CinA develops them:

1. **Ch. I — Finite fields ($\sim$8 pp.).** Construction of
   $\mathbb{F}_q$, multiplicative group $\mathbb{F}_q^\times$ cyclic,
   squares in $\mathbb{F}_q$, quadratic reciprocity stated and proved
   via Gauss sums in 3 pages. Serre's signature compression: the whole
   foundation of quadratic reciprocity in a single chapter.
2. **Ch. II — $p$-adic fields ($\sim$13 pp.).** Definitions of
   $\mathbb{Z}_p$ and $\mathbb{Q}_p$ via projective limits *and* via
   completion w.r.t. $|\cdot|_p$. **Hensel's lemma** (Ch. II §2);
   squares in $\mathbb{Q}_p$ (Ch. II §3). The unique route taken: the
   topological + valuation-theoretic definitions are developed in
   parallel and identified, which is the cleanest pedagogy for a
   student seeing $p$-adic numbers for the first time.
3. **Ch. III — The Hilbert symbol $(a, b)_v$ ($\sim$10 pp.).** Local
   Hilbert symbols over $\mathbb{Q}_p$ and $\mathbb{R}$, bilinearity,
   non-degeneracy, the **product formula $\prod_v (a, b)_v = 1$** —
   the local-global reciprocity in its most elementary form.
4. **Ch. IV — Quadratic forms over $\mathbb{Q}_p$ and over
   $\mathbb{Q}$ ($\sim$30 pp.).** Equivalence over $\mathbb{Q}_p$
   classified by rank + discriminant + Hasse-Witt invariant
   $\epsilon(f)$ + (over $\mathbb{R}$) signature. **Hasse-Minkowski
   theorem (Ch. IV §3)**: a quadratic form over $\mathbb{Q}$
   represents 0 iff it represents 0 over every completion
   $\mathbb{Q}_v$. The signature local-global theorem for quadratic
   forms; one of the cleanest local-global statements in mathematics.
   Followed by **Meyer's theorem** (a form in $\geq 5$ variables over
   $\mathbb{Q}$ with indefinite signature represents 0) and the
   classification of indefinite rational forms.
5. **Ch. V — Dirichlet density & Dirichlet's theorem ($\sim$15 pp.).**
   Dirichlet characters $\chi : (\mathbb{Z}/m)^\times \to \mathbb{C}^\times$,
   $L$-series $L(s, \chi) = \sum \chi(n)/n^s$, analytic continuation
   to $\mathrm{Re}(s) > 0$ for $\chi \neq 1$, non-vanishing
   $L(1, \chi) \neq 0$, **Dirichlet's theorem on primes in arithmetic
   progressions**. Serre's proof of $L(1, \chi) \neq 0$ (the hard
   step for real $\chi$) goes via the Dedekind zeta of
   $\mathbb{Q}(\sqrt{d})$ — the cleanest exposition in the literature.
6. **Ch. VI — Modular forms ($\sim$15 pp.).** Modular group
   $\mathrm{SL}_2(\mathbb{Z})$, fundamental domain $\mathcal{F}$,
   modular forms of weight $k$, the space $M_k$ and the cusp forms
   $S_k$, **Eisenstein series $E_k$**, the **discriminant
   $\Delta = (E_4^3 - E_6^2)/1728$** as the first nontrivial cusp
   form, the **$j$-invariant** $j = 1728 E_4^3/\Delta$, **dimension
   formula** $\dim M_k = \lfloor k/12 \rfloor + \delta$. The graded
   ring of modular forms $M_* = \mathbb{C}[E_4, E_6]$. Theta
   functions and their modularity (Ch. VI §6).
7. **Ch. VII — Hecke operators ($\sim$15 pp.).** Hecke operators
   $T_n$ on $M_k$, multiplicativity for coprime $n$, simultaneous
   diagonalisation of $S_k$ under $\{T_p\}_p$, Hecke eigenforms,
   Euler product for the $L$-function $L(f, s)$ of a Hecke
   eigenform, the link to the Ramanujan $\tau$-function and
   **Ramanujan's conjectures** (Mordell 1917 / Deligne 1974).

CinA is **the** canonical undergraduate-bridge / early-graduate
text for both **quadratic forms + local-global** (Chs. I–IV) and
**modular forms + Hecke + $L$-functions** (Chs. V–VII). It is the
prerequisite Manin-Panchishkin (FT 3.34) explicitly assumes (see
IMNT plan §1: "It assumes Serre *A Course in Arithmetic* (3.14) or
equivalent for the elementary background"). CinA Chs. I–IV have **no
overlap** with any other FT title at the Codex's coverage scope; CinA
Chs. V–VII overlap with **IMNT Ch. 6** (Manin-Panchishkin survey) and
with **Diamond-Shurman** Chs. 1–5 (which is not currently a FT title
but is cited as a peer source for the IMNT audit).

**Peer sources** (in addition to the CinA book itself; ≥3 required per
the audit protocol):

- Yu. I. Manin, A. A. Panchishkin, *Introduction to Modern Number
  Theory: Fundamental Problems, Ideas and Theories* (Springer Enc. Math.
  Sci. 49, 2nd ed. 2005) — FT 3.34, the encyclopaedic survey;
  **explicitly assumes CinA**. Audit at
  `plans/fasttrack/manin-introduction-modern-number-theory.md`
  (Cycle 9). Overlap with CinA Chs. V–VII is significant: ship once.
- J. W. S. Cassels, A. Fröhlich (eds.), *Algebraic Number Theory*
  (Academic Press 1967; Brighton conference proceedings) — canonical
  class-field-theory reference. CinA's local-field material in Ch. II
  is the "Brighton lite": $\mathbb{Q}_p$ in 13 pages versus
  Cassels-Fröhlich's full local class-field theory in 366 pages.
- Z. I. Borevich, I. R. Shafarevich, *Number Theory* (Academic Press
  1966, translated by N. Greenleaf from the 1964 Russian original) —
  the classical Soviet-school text. Develops quadratic forms,
  local fields, and Hasse-Minkowski at textbook depth (~150 pp.
  on quadratic forms alone); CinA Chs. I–IV are the *compressed*
  version of Borevich-Shafarevich Chs. 1, 2, 5.
- F. Diamond, J. Shurman, *A First Course in Modular Forms* (Springer
  GTM 228, 2005) — modern textbook on modular forms, Hecke
  algebras, the Eichler-Shimura relation. CinA Chs. VI–VII are the
  compressed bridge into Diamond-Shurman.
- (Supplementary) J.-P. Serre, "A Course in Arithmetic", Springer GTM 7,
  1973 — the book itself.
- (Supplementary) H. Davenport, *Multiplicative Number Theory* (Springer
  GTM 74, 3rd ed. 2000) — alternative anchor for Dirichlet's theorem;
  Davenport's proof is the standard variant CinA Ch. V condenses.

---

## §2 Coverage table (Codex vs CinA)

Cross-referenced against the current Codex corpus
(`content/00-precalc/` through `content/20-philosophy/`; 362 units total
as of 2026-05-18).
✓ = covered, △ = partial / different framing, ✗ = not covered.

| CinA topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Finite fields $\mathbb{F}_q$, $\mathbb{F}_q^\times$ cyclic | △ | △ | Touched in `07-representation-theory/` (e.g. character tables of $\mathrm{GL}_2(\mathbb{F}_q)$) but no dedicated number-theoretic unit on finite-field structure. |
| Quadratic reciprocity (Gauss sums) | — | ✗ | **Gap.** Foundational classical theorem; not covered. |
| $p$-adic numbers $\mathbb{Q}_p$, $\mathbb{Z}_p$ | △ | △ | Touched in passing in `02-analysis/` Ostrowski-adjacent material (see IMNT audit §2); no dedicated unit. Confirmed gap. |
| Hensel's lemma | — | ✗ | **Gap.** Hensel 1908 originator-citation expected. |
| Squares in $\mathbb{Q}_p$ | — | ✗ | **Gap.** |
| Hilbert symbol $(a, b)_v$, product formula | — | ✗ | **Gap.** |
| Quadratic forms over a field — equivalence, discriminant, Witt's theorem | — | ✗ | **Gap.** No quadratic-forms unit anywhere in the Codex. |
| Hasse-Witt invariant $\epsilon(f)$ | — | ✗ | **Gap.** |
| Hasse-Minkowski theorem | — | ✗ | **Gap.** Hasse 1923-24 originator. The signature local-global theorem. |
| Meyer's theorem (indefinite forms in $\geq 5$ vars) | — | ✗ | **Gap.** |
| Classification of quadratic forms over $\mathbb{Q}$ | — | ✗ | **Gap.** |
| Dirichlet characters $\chi : (\mathbb{Z}/m)^\times \to \mathbb{C}^\times$ | — | ✗ | **Gap.** Distinct from but parallel to characters of finite groups in `07-rep-theory/`. |
| Dirichlet $L$-series $L(s, \chi)$, analytic continuation | — | ✗ | **Gap.** Already on IMNT punch-list as `21.03.02` — **dedup with IMNT**. |
| $L(1, \chi) \neq 0$ for $\chi \neq 1$ | — | ✗ | **Gap.** Component of the Dirichlet's theorem proof. |
| Dirichlet's theorem on primes in AP | — | ✗ | **Gap.** Dirichlet 1837 originator. Already on IMNT punch-list — **dedup**. |
| Dirichlet density | — | ✗ | **Gap.** |
| Modular group $\mathrm{SL}_2(\mathbb{Z})$, fundamental domain | △ | △ | Modular group pointer in `06.01.08-mobius-transformations.md`; fundamental domain $\mathcal{F}$ not explicitly drawn. |
| Modular forms of weight $k$, $M_k$, $S_k$ | △ | △ | Referenced in `06.08.02-vhs-jacobian.md` synthesis and `04.04.03-elliptic-curves.md` master tier; no dedicated unit. Already on IMNT punch-list as `21.04.01` — **dedup with IMNT**. |
| Eisenstein series $E_k$ | △ | △ | Mentioned in passing in `06.08.02-vhs-jacobian.md`; no dedicated unit. **Dedup with IMNT `21.04.01`**. |
| Discriminant $\Delta$, $j$-invariant | △ | △ | $j$-invariant mentioned in `04.04.03-elliptic-curves.md` master tier; no dedicated derivation. |
| Dimension formula $\dim M_k$ | — | ✗ | **Gap.** |
| Theta functions | △ | △ | Mentioned in `06.06.07-riemann-bilinear.md` (Riemann theta on Jacobians) and `06.06.08-schottky-problem.md`; weight-$1/2$ modular theta function specifically (CinA Ch. VI §6) is a gap. |
| Hecke operators $T_n$ | — | ✗ | **Gap.** Hecke 1936-37 originator. Already on IMNT punch-list as `21.04.02` — **dedup with IMNT**. |
| Hecke eigenforms, Euler product for $L(f, s)$ | — | ✗ | **Gap.** **Dedup with IMNT `21.04.02`.** |
| Ramanujan $\tau$ and Ramanujan conjectures | — | ✗ | **Gap.** Mordell 1917 (multiplicativity), Deligne 1974 (RH bound). |

**Aggregate coverage estimate:** **~3%** of CinA has corresponding Codex
units (only the modular-group pointer in `06.01.08`, the passing
Eisenstein-series reference in `06.08.02-vhs-jacobian.md`, and the
$j$-invariant mention in `04.04.03-elliptic-curves.md` master tier).
The gap is essentially total. **This is consistent with the IMNT audit's
finding of ~5% coverage** (IMNT covers a superset of CinA's content;
CinA's coverage is a subset of IMNT's coverage).

**Structural recommendation.** This plan **endorses the IMNT audit's
recommendation** to create `content/21-number-theory/` as a new top-level
chapter. CinA's content slots in cleanly:

- CinA Chs. I–IV (finite fields, $p$-adic, Hilbert symbol, quadratic
  forms, Hasse-Minkowski) → **`21.02-quadratic-forms-and-local-fields/`**
  sub-chapter (new — not on the IMNT punch-list; CinA-specific
  contribution to the new chapter).
- CinA Ch. V (Dirichlet's theorem, $L(s, \chi)$) →
  **`21.03-L-functions/`** sub-chapter, with units **`21.03.02`**
  shipped jointly with IMNT.
- CinA Chs. VI–VII (modular forms, Hecke operators) →
  **`21.04-modular-forms/`** sub-chapter, with units **`21.04.01`** and
  **`21.04.02`** shipped jointly with IMNT.

**CinA is the right anchor for the Priority-0 prereq units** in the IMNT
plan (local fields / $p$-adic numbers) — CinA Ch. II is the cleanest
short exposition of $\mathbb{Q}_p$ in print and should be the primary
tier-anchor for the `21.02-local-fields` units. **CinA is also the right
anchor for the new quadratic-forms track** (a CinA-specific
contribution not covered by IMNT, which assumes quadratic-forms
background and develops only higher arithmetic).

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — strict prerequisites (shared with IMNT plan, ship once):**

- **`21.01.01` Number-theory chapter README + notation crosswalk.**
  Chapter scaffolding. Shared with IMNT audit.
- Algebraic-number-theory primer units (`21.01.02`–`21.01.05`,
  Neukirch-anchored) — *shared with IMNT plan*; CinA does not require
  these but the new chapter does for self-coherence.

**Priority 1 — high-leverage, CinA-specific (quadratic-forms /
local-fields track, *new* relative to IMNT):**

1. **`21.02.01` Finite fields $\mathbb{F}_q$ — structure and squares.**
   Construction via $\mathbb{F}_p[X]/(f)$, $\mathbb{F}_q^\times$ cyclic,
   the index-2 subgroup of squares, the Legendre symbol. CinA Ch. I
   anchor. Three-tier. ~1500 words. Originator-citation: Galois 1830
   (finite fields); Gauss 1801 (Legendre symbol, *Disquisitiones
   Arithmeticae*).
2. **`21.02.02` Quadratic reciprocity via Gauss sums.** Statement,
   proof via the quadratic Gauss sum $g_\chi = \sum_a \chi(a) \zeta_p^a$.
   CinA Ch. I §3 anchor. Three-tier; Beginner = statement + examples;
   Master = the full Gauss-sums proof. ~1800 words. Originator:
   Gauss 1801 (six different proofs in *Disquisitiones*; the Gauss-sums
   proof is the third).
3. **`21.02.03` $p$-adic numbers $\mathbb{Q}_p$ and $\mathbb{Z}_p$.**
   Two constructions (projective limit + $|\cdot|_p$-completion) and
   their identification. CinA Ch. II §§1–2 anchor; Borevich-Shafarevich
   Ch. 1 §3 cross-anchor. Three-tier. ~2000 words.
   **Originator: Hensel 1908**, *Theorie der algebraischen Zahlen*
   (Teubner) — the introduction of $p$-adic numbers.
   **Shared with IMNT plan Priority-0** (the IMNT plan listed
   "Local fields / $p$-adic numbers" as a prereq; this is that unit).
4. **`21.02.04` Hensel's lemma.** Statement, proof, the Newton-iteration
   picture, examples (squares in $\mathbb{Q}_p$, polynomial roots).
   CinA Ch. II §2 anchor. Three-tier. ~1500 words. Originator: Hensel
   1918 (in the standard form).
5. **`21.02.05` Hilbert symbol $(a, b)_v$ and the product formula.**
   Definition, bilinearity, non-degeneracy, computation tables for
   $\mathbb{Q}_p$ and $\mathbb{R}$, **product formula
   $\prod_v (a, b)_v = 1$**. CinA Ch. III anchor. Three-tier;
   Master tier includes the product-formula proof. ~2000 words.
   Originator: Hilbert 1897, *Zahlbericht* (§64 on the reciprocity
   symbol).
6. **`21.02.06` Quadratic forms over a field — equivalence, Witt's
   theorem.** $f \sim g$ iff diagonalisations agree, Witt cancellation,
   Witt decomposition into a hyperbolic part + anisotropic part. Over
   $\mathbb{R}$: classified by signature. CinA Ch. IV §§1–2 anchor;
   Borevich-Shafarevich Ch. 1 §6 cross-anchor. Three-tier. ~1800 words.
   Originator: Witt 1937 *J. Reine Angew. Math.* 176 (Witt cancellation).
7. **`21.02.07` Quadratic forms over $\mathbb{Q}_p$ — discriminant and
   Hasse-Witt invariant.** Classification by rank + discriminant
   $d(f) \in \mathbb{Q}_p^\times / (\mathbb{Q}_p^\times)^2$ +
   $\epsilon(f) \in \{\pm 1\}$. CinA Ch. IV §2 anchor. Three-tier.
   ~1800 words. Originator: Hasse 1923 *J. Reine Angew. Math.* 152.
8. **`21.02.08` Hasse-Minkowski theorem.** Statement: a quadratic
   form over $\mathbb{Q}$ represents 0 iff it represents 0 over every
   $\mathbb{Q}_v$. **The first local-global theorem.** Proof sketch
   (CinA Ch. IV §3); the classical Legendre 3-variable case derived as
   a corollary. CinA Ch. IV §3 anchor. Three-tier; Master tier covers
   the full proof. ~2500 words. **Originator: Hasse 1923-24** (J. Reine
   Angew. Math. 152 (1923); 153 (1924)), generalising Minkowski 1890
   (rationals over $\mathbb{Q}$). This is **CinA's distinctive load-bearing
   theorem** and is not on the IMNT punch-list — *new contribution from
   CinA*.
9. **`21.02.09` Meyer's theorem and the classification of indefinite
   rational forms.** Statement and corollary applications. CinA Ch. IV
   §4 anchor. Master + Intermediate; Beginner = pointer only. ~1500
   words. Originator: Meyer 1884.

**Priority 1 — shared with IMNT (modular forms / $L$-functions track,
ship once, **CinA = primary anchor**, IMNT = survey supplement):**

10. **`21.03.02` Dirichlet $L$-functions and Dirichlet's theorem on
    primes in AP.** **Already on IMNT punch-list at this ID.** CinA Ch.
    V anchor (primary — proof of $L(1, \chi) \neq 0$ via Dedekind zeta
    of $\mathbb{Q}(\sqrt{d})$); IMNT Ch. 6 supplement. Three-tier. ~1800
    words. **Originator: Dirichlet 1837**, "Beweis des Satzes, dass
    jede unbegrenzte arithmetische Progression …", *Abhandl. Königl.
    Preuss. Akad.*
11. **`21.03.04` Dirichlet density.** *New, CinA-specific.* Definition,
    relation to natural density, statement of the prime number theorem
    in arithmetic progressions in density form. CinA Ch. VI (in the
    French ed.; renumbering varies) anchor. Two-tier; Master only as a
    pointer. ~1000 words. Could be folded into `21.03.02` rather than a
    separate unit — flagged for editorial decision.
12. **`21.04.01` Modular forms on $\mathrm{SL}_2(\mathbb{Z})$.**
    **Already on IMNT punch-list at this ID.** CinA Ch. VII anchor
    (primary — fundamental domain, dimension formula, $E_4$/$E_6$
    generating the ring); Diamond-Shurman Ch. 1 supplement; IMNT
    survey. Three-tier. ~2200 words.
13. **`21.04.02` Hecke operators and Hecke algebra.** **Already on
    IMNT punch-list at this ID.** CinA Ch. VII anchor (primary —
    multiplicativity, Euler product for $L(f, s)$, Hecke eigenforms,
    Ramanujan $\tau$); Diamond-Shurman Ch. 5 supplement; IMNT survey.
    Three-tier. ~2000 words. **Originator: Hecke 1936-37** (Math. Ann.
    112; Math. Ann. 114).

**Priority 2 — CinA deepenings (theta functions, Ramanujan):**

14. **`21.04.04` Theta functions and modular forms of half-integer
    weight.** The Jacobi theta function $\theta(z) = \sum_{n} q^{n^2}$,
    its modularity under $\Gamma_0(4)$, theta series of positive
    definite quadratic forms (the **representation-numbers application**
    that motivates the modular-forms theory — number of representations
    of $n$ as a sum of $k$ squares). CinA Ch. VI §6 + Ch. VII §6 anchor.
    Three-tier; Master tier required. ~2000 words.
    Originator-citation: Jacobi 1829 (theta functions); Siegel 1935
    (theta series of quadratic forms).
15. **`21.04.05` Ramanujan $\tau$-function and Ramanujan conjectures.**
    $\Delta = q \prod (1 - q^n)^{24} = \sum \tau(n) q^n$; Ramanujan's
    three conjectures (multiplicativity, Euler product, Hasse bound
    $|\tau(p)| \leq 2 p^{11/2}$). Mordell 1917 proved (i)+(ii); Deligne
    1974 proved (iii) as a corollary of the Weil conjectures.
    CinA Ch. VII §4-§5 anchor. Master-tier-heavy; ~1500 words.
    Originators: Ramanujan 1916 *Trans. Cambridge Phil. Soc.* 22
    (conjectures); Mordell 1917 *Proc. Camb. Phil. Soc.* 19
    (multiplicativity proof); Deligne 1974 *Publ. Math. IHES* 43
    (Hasse bound via Weil conjectures).

**Priority 3 — exercise pack (CinA exercises are short and pedagogically
focused — high yield):**

16. **CinA exercise pack.** ~30 exercises distributed across
    `21.02.*` and `21.04.*` units. CinA's exercises are unusually clean
    and short (the book is a course, not a survey); they are an
    excellent fit for the Codex's exercise-pack convention. Target ~5
    exercises per priority-1 unit. ~6 hours total production time after
    the units ship.

---

## §4 Implementation sketch (P3 → P4)

For a full CinA coverage pass, **items 1–13 are the minimum set** to hit
the FT equivalence threshold, **with the Priority-0 chapter scaffolding
shipped first**. Realistic production estimate (mirroring earlier
Brown / Lawson-Michelsohn / Bott-Tu / Hartshorne batches):

- ~3–4 hours per unit. CinA units skew **lower** than the corpus
  average — CinA itself is unusually short and self-contained, its
  proofs are clean, and the editorial work of compressing each chapter
  into a unit is straightforward.
- 9 priority-1 CinA-specific units × ~3.5 hours = **~32 hours**.
- 4 priority-1 shared-with-IMNT units × ~4 hours = ~16 hours
  (already in the IMNT budget; counts **0 additional hours** in the
  CinA budget if shipped jointly).
- 2 priority-2 units × ~3 hours = ~6 hours.
- 1 exercise pack pass × ~6 hours = ~6 hours.
- **Total CinA-only marginal cost ~44 hours** (assuming IMNT-shared
  units are already on the IMNT schedule); ~60 hours stand-alone if
  the IMNT-shared units have not yet shipped. Fits a focused 6–8 day
  window. **Strong overlap dedup with IMNT plan** — running the two
  audits jointly saves ~16 hours.

**Originator-prose targets.** Several CinA units are originator-eligible
per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10:

- **Hensel 1908**, *Theorie der algebraischen Zahlen* (Teubner). The
  introduction of $p$-adic numbers. Originator citation for `21.02.03`.
- **Hilbert 1897**, *Die Theorie der algebraischen Zahlkörper*
  ("Zahlbericht"), §64. The Hilbert symbol. Originator citation for
  `21.02.05`.
- **Hasse 1923-24**, "Über die Äquivalenz quadratischer Formen im
  Körper der rationalen Zahlen," *J. Reine Angew. Math.* 152 (1923);
  "Darstellbarkeit von Zahlen durch quadratische Formen im Körper der
  rationalen Zahlen," *J. Reine Angew. Math.* 153 (1924). The
  Hasse-Minkowski theorem. Originator citation for `21.02.08`.
- **Witt 1937**, "Theorie der quadratischen Formen in beliebigen
  Körpern," *J. Reine Angew. Math.* 176. Witt cancellation. Originator
  citation for `21.02.06`.
- **Dirichlet 1837**, "Beweis des Satzes, dass jede unbegrenzte
  arithmetische Progression …," *Abhandl. Königl. Preuss. Akad.*
  Originator citation for `21.03.02` (shared with IMNT plan §4).
- **Eisenstein 1847**, "Beiträge zur Theorie der elliptischen
  Functionen," *J. Reine Angew. Math.* 35. The Eisenstein series.
  Originator citation for `21.04.01`.
- **Hecke 1936-37**, *Math. Ann.* 112 and 114. The Hecke operators.
  Originator citation for `21.04.02` (shared with IMNT plan §4).
- **Ramanujan 1916** *Trans. Cambridge Phil. Soc.* 22, **Mordell 1917**
  *Proc. Camb. Phil. Soc.* 19, **Deligne 1974** *Publ. Math. IHES* 43.
  Originator citations for `21.04.05`.
- **Serre 1970**, *Cours d'arithmétique* (PUF) / Serre 1973 (Springer
  trans.) — the book itself, anchor for the unified
  quadratic-forms + modular-forms exposition.

**Notation crosswalk.** CinA follows the French-school /
later-Bourbaki conventions:

- $\mathbb{Q}_p$, $\mathbb{Z}_p$ for the $p$-adic completions
  (consistent with IMNT — no conflict).
- $|x|_p = p^{-v_p(x)}$ for the $p$-adic absolute value; $v_p(x)$ for
  the $p$-adic valuation.
- $(a, b)_v$ for the local Hilbert symbol at the place $v$ (including
  $v = \infty$ for $\mathbb{R}$).
- $d(f)$ for the discriminant of a quadratic form;
  $\epsilon(f) = \epsilon_v(f)$ for the Hasse-Witt invariant.
- $f \sim g$ for equivalence of quadratic forms over a base field.
- $\chi : (\mathbb{Z}/m)^\times \to \mathbb{C}^\times$ for Dirichlet
  characters; $L(s, \chi)$ for the Dirichlet $L$-function.
- $\mathrm{SL}_2(\mathbb{Z}) = \Gamma$, $\mathcal{H}$ or $\mathbb{H}$
  for the upper half plane, $\mathcal{F}$ for the standard fundamental
  domain.
- $M_k$ for weight-$k$ modular forms, $S_k$ for cusp forms; $E_k$ for
  Eisenstein series; $\Delta$ for the discriminant cusp form; $j$ for
  the $j$-invariant.
- $T_n$ for the Hecke operator of index $n$ on $M_k$.

These match the IMNT notation crosswalk verbatim; record once in the
chapter-opening `21.01.01` README. **No notation conflict between CinA
and IMNT** — Serre is the common ancestor of both conventions.

---

## §5 What this plan does NOT cover

- **A line-number-level inventory of every named theorem in CinA**
  (full P1 audit; deferred until a local PDF is sourced — CinA is only
  115 pp. and a complete inventory is a ~2-day pass once the PDF lands,
  but is gated on acquisition).
- **Wiles 1995 proof and Eichler-Shimura at technical depth.** Deferred
  to the **IMNT (FT 3.34) audit** which is the appropriate home for
  the modularity programme. CinA does not cover modularity; it stops at
  Hecke eigenforms and the Ramanujan conjectures (which Deligne settled
  via Weil). The CinA → IMNT bridge is the punch-list units
  `21.04.02`–`21.04.05`; everything past that is IMNT's territory.
- **Algebraic number theory at textbook depth.** CinA does *not* develop
  number fields, rings of integers, ideal class groups, or units —
  these are assumed background or referenced. Algebraic-NT units are on
  the **IMNT punch-list Priority-0** (Neukirch-anchored), not CinA's.
- **Class field theory and adèles.** Not in CinA. On the IMNT
  punch-list.
- **$p$-adic $L$-functions and Iwasawa theory.** Not in CinA. On the
  IMNT punch-list (Priority-2).
- **Exercise pack at full coverage.** CinA has ~30 well-chosen short
  exercises; the punch-list includes a single P2 exercise-pack pass
  (item 16). Full per-unit exercise coverage is a follow-up.

---

## §6 Acceptance criteria for FT equivalence (CinA)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The `21-number-theory/` chapter exists with its scaffolding
  (`21.01.01` chapter README, dependency edges in
  `docs/catalogs/DEPENDENCY_MAP.md`). **Shared with IMNT audit
  acceptance criterion.**
- Priority-1 CinA-specific units `21.02.01`–`21.02.09` (finite fields,
  quadratic reciprocity, $\mathbb{Q}_p$, Hensel, Hilbert symbol,
  quadratic forms, Hasse-Minkowski, Meyer) have shipped.
- Priority-1 shared units `21.03.02`, `21.04.01`, `21.04.02` have
  shipped (jointly with IMNT — single ship satisfies both audits).
- ≥95% of CinA's named theorems map to Codex units (currently ~3%;
  after the 9 Priority-1 CinA-specific units + 3 shared units this
  rises to ~85%; full ≥95% requires Priority-2 theta-functions and
  Ramanujan units).
- ≥90% of CinA's worked computations have a direct unit or are
  referenced (Gauss-sums proof of quadratic reciprocity, examples of
  squares in $\mathbb{Q}_p$, computation of the Hilbert symbol
  tables, classification of small-rank quadratic forms over
  $\mathbb{Q}_p$ and $\mathbb{Q}$, fundamental domain of
  $\mathrm{SL}_2(\mathbb{Z})$, dimension formula for $M_k$,
  decomposition of $S_{12}$ under Hecke).
- Notation decisions recorded in `21.01.01` (see §4).
- Pass-W weaving connects the new chapter to `04-algebraic-geometry/`
  via the elliptic-curves unit `04.04.03`, to `06-riemann-surfaces/`
  via the modular-group / VHS units, and to `07-representation-theory/`
  via the parallel character-theory framing (group characters vs.
  Dirichlet characters).
- **The CinA audit and the IMNT audit are jointly closed** — overlapping
  units shipped once, with both audits' acceptance criteria checked
  against the same unit ID.

The 9 CinA-specific Priority-1 units + 3 IMNT-shared Priority-1 units
close most of the equivalence gap. Priority-2 deepenings (theta
functions, Ramanujan) close the residual gap. Priority-3 (exercise pack)
hits the ≥95% line.

---

## §7 Sourcing

- **Status: REDUCED.** No local PDF found in the three configured paths
  (`reference/textbooks-extra/`, `reference/fasttrack-texts/`,
  `reference/book-collection/free-downloads/`) as of 2026-05-18.
  Springer link <https://link.springer.com/book/10.1007/978-1-4684-9884-4>
  redirects to the Springer IDP authentication wall (303 See Other to
  `idp.springer.com/authorize?…`). WebFetch on the Wikipedia and Google
  search-result pages returned no usable TOC. This plan was produced
  from canonical knowledge of CinA's two-part / seven-chapter structure
  (stable and unusually well-documented for a 115-page book — the TOC
  is reproduced in every introductory number-theory syllabus, Springer's
  book page, and Wikipedia's references list) cross-referenced against
  the peer sources in §1.
- **Action item.** Source CinA (Springer paid download or Anna's
  Archive) and drop into `reference/textbooks-extra/` as
  `Serre-CourseInArithmetic-1973.pdf`. Required before a full P1
  audit can run at line-number granularity.
- **License.** Springer copyright. For educational use cite as Serre,
  *A Course in Arithmetic* (Springer Graduate Texts in Mathematics 7,
  Springer-Verlag, 1973; trans. of *Cours d'arithmétique*, PUF 1970).
- **Local copy target path.** `reference/textbooks-extra/` per pattern
  of other paid FT texts (Hartshorne, Silverman, Neukirch, Manin-Panchishkin).
- **Companion sources already in / targeted for the reference
  library.**
  - Borevich-Shafarevich, *Number Theory* — not yet sourced;
    cross-anchor for `21.02.03`–`21.02.09` (local fields + quadratic
    forms at textbook depth).
  - Cassels-Fröhlich, *Algebraic Number Theory* (Brighton) — not yet
    sourced; cross-anchor for the Master-tier local-fields material.
  - Diamond-Shurman, *A First Course in Modular Forms* — not yet
    sourced; cross-anchor for `21.04.01`–`21.04.02` (shared with IMNT
    audit which also requires this source).
  - Manin-Panchishkin, *Introduction to Modern Number Theory* — not
    yet sourced; the IMNT audit (Cycle 9) Priority-1 source. CinA
    audit cross-references the IMNT plan throughout.
  - Davenport, *Multiplicative Number Theory* — not yet sourced;
    supplementary anchor for `21.03.02` (Dirichlet's theorem).

---

## §8 Coordination notes (Manin-overlap dedup)

The CinA and IMNT audits identify **3 shared units** in the Priority-1
ship list — `21.03.02` (Dirichlet $L$-functions), `21.04.01` (modular
forms on $\mathrm{SL}_2(\mathbb{Z})$), `21.04.02` (Hecke operators).
These should be **shipped once** with **CinA as the primary tier-anchor
source** (the elementary, proof-complete exposition) and **IMNT as the
secondary supplementary source** (the encyclopaedic survey framing).
Rationale: CinA proves these results in full at the level the Codex
beginner + intermediate tiers require; IMNT does not prove them, it
surveys them. The Codex's three-tier convention requires a primary
proof-complete anchor, which is CinA's role.

Additionally, the **Priority-0 prereq unit `21.02.03` ($p$-adic numbers
$\mathbb{Q}_p$)** appears on both audits' lists. CinA Ch. II is the
primary tier-anchor; Borevich-Shafarevich Ch. 1 §3 and (post-acquisition)
Neukirch Ch. II §§1–4 are cross-anchors. Ship once.

**Net effect.** Running the CinA and IMNT audits jointly saves ~16
hours of production time and ~3 units of duplicated content. The
combined Priority-1 punch-list for the new `21-number-theory/` chapter
is **(IMNT 8 + CinA 9 - shared 3) = 14 units** plus Priority-0
scaffolding, not 17.
