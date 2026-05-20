# Fulton, Harris — *Representation Theory: A First Course* (Fast Track 3.11) — Audit + Gap Plan

**Book:** William Fulton, Joe Harris, *Representation Theory: A First Course*
(Graduate Texts in Mathematics 129 / Readings in Mathematics, Springer 1991,
xv + 551 pp., ISBN 0-387-97527-6). Standard reference; commercial title (BUY
in `docs/catalogs/FASTTRACK_BOOKLIST.md` row 3.11).

**Fast Track entry:** 3.11. The canonical graduate representation-theory text
of the modern era — distinguished from the Fast Track's other rep-theory slots
(2.02 Woit *QM, Groups and Representations*; 3.12/3.13/3.15 Serre's three
slim volumes; 3.16 Diaconis) by being **comprehensive and extremely concrete**:
finite groups (with the $S_n$ examples worked out in painstaking detail) →
compact Lie groups → classical complex Lie algebras (with Dynkin diagrams
introduced as classification tools, not abstract decoration) → general
semisimple theory. The Fast Track source page describes it as the "complex
case" classification text (Serre's *Complex Semisimple Lie Algebras* being
the ludicrously brief companion).

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
deepenings + a small set of new units so that *Representation Theory: A
First Course* (FH hereafter) is covered to the equivalence threshold (≥95%
effective coverage of theorems, key examples, exercise pack, notation,
sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**REDUCED audit.** No local PDF in `reference/textbooks-extra/` (only the
cover image at `reference/fast-track/images/Fulton-Harris-Rep-Theory-...jpg`).
Springer preview is gated; Google Books preview is gated. This audit works
from (a) the **public TOC structure** of GTM 129 (well-documented and
referenced by the Fast Track source page §3.11), (b) the Codex's existing
26 shipped units in `content/07-representation-theory/`, and (c) the
originator literature. A full line-number audit is deferred until a PDF is
acquired. This is consistent with the audit-stub convention used for
Brown-Higgins-Sivera (1.05a).

---

## §1 What FH is for

FH is the **canonical concrete graduate rep-theory text**. Where Serre's
*Linear Representations of Finite Groups* (FT 3.15) is the slim crystalline
finite-group treatment, where Knapp's *Lie Groups Beyond an Introduction*
gives the structure-theoretic real-form sweep, and where Hall's *Lie Groups,
Lie Algebras, and Representations* keeps everything matrix-explicit at
upper-undergraduate level — FH is the **bridge**: rigorous like Serre,
matrix-explicit like Hall, but covering the *entire* arc from $S_n$ to
the Weyl character formula in one volume with every classical Lie algebra
($\mathfrak{sl}_n, \mathfrak{sp}_{2n}, \mathfrak{so}_n$) worked out *by
hand* before the general theory is invoked. This worked-example-first
pedagogy is the book's signature contribution.

Distinctive contributions, in roughly the order FH develops them:

1. **Character theory of finite groups, with $S_n$ as the running case
   study.** FH §§1–5: definitions, Schur's lemma, character orthogonality,
   induced representations, Frobenius reciprocity. §4 introduces *Young
   diagrams* and *Young symmetrisers* to construct the Specht modules
   of $S_n$ explicitly — and §§5 the Frobenius character formula, hook
   length formula, and Schur-Weyl duality. The Frobenius character
   formula [Frobenius 1900] is given a fully self-contained proof using
   only the orthogonality relations. Originator citation: Schur 1901 PhD
   thesis (Schur-Weyl duality); Frobenius 1896/1900 (the character
   theory programme he initiated by correspondence with Dedekind).

2. **Lie groups and Lie algebras introduced through the matrix examples
   first.** FH §§7–9: $\mathfrak{sl}_2 \mathbb{C}$ is worked out
   completely — its irreducible representations $V_n$ classified by
   highest weight $n$, the Casimir element constructed explicitly, the
   character $\chi_n(t) = (t^{n+1} - t^{-n-1})/(t - t^{-1})$ derived by
   weight counting. This is the *only* place in the literature where the
   reader is invited to **rediscover the abstract theory** from a single
   worked example.

3. **The $\mathfrak{sl}_3 \mathbb{C}$ chapter (FH §§11–13) — the
   pedagogical centrepiece.** Roots, weights, the Weyl group $S_3$
   acting on the weight lattice, the fundamental chamber, and the
   hexagonal-honeycomb pictures that have appeared in every subsequent
   rep-theory exposition. By the end of §13 the reader has the entire
   highest-weight programme in their hands as a *picture*, before any
   general Cartan-Killing theory is invoked. This visualisation-first
   approach is FH's distinctive editorial choice.

4. **The classical Lie algebras worked out one at a time, in order:**
   $\mathfrak{sl}_n$ (§15), $\mathfrak{sp}_{2n}$ (§16), $\mathfrak{so}_{2n+1}$
   and $\mathfrak{so}_{2n}$ (§§18–19). Each chapter constructs the root
   system from scratch, identifies the fundamental weights, and writes
   down the dimensions of the standard representations using the Weyl
   dimension formula *before* invoking it abstractly. The reader sees
   $A_n, B_n, C_n, D_n$ emerging as Dynkin diagrams **inductively** from
   their root systems rather than postulated.

5. **Spin representations (FH §20) and the $\mathfrak{so}_n$ /
   $\mathfrak{spin}(n)$ distinction via Clifford algebras.** Pin and Spin
   groups constructed explicitly; the half-spin representations of
   $\mathfrak{so}_{2n}$ written down in terms of Clifford generators.
   FH presents this as a *representation-theoretic* phenomenon (the
   spinor rep is not a rep of $\mathrm{SO}$ but is of its double cover),
   rather than the geometric setup of Lawson-Michelsohn (FT 1.08).

6. **The general theory of semisimple Lie algebras (FH §§21–24)** is
   finally given *after* the entire $A$/$B$/$C$/$D$ case has been worked
   out: Cartan subalgebras, root-space decomposition (Cartan's theorem,
   1894), the Killing form, semisimplicity criterion, abstract Dynkin
   diagrams, and the classification of simple complex Lie algebras into
   four infinite families + five exceptionals. This *example-then-theory*
   ordering is the inverse of Humphreys' standard treatment.

7. **The Weyl character formula and the Weyl integration formula (FH
   §§24–26).** Statement, proof via the Casimir, and applications:
   Weyl dimension formula, Steinberg formula for multiplicities,
   Kostant multiplicity formula. The compact-Lie-group derivation
   (Weyl 1925/1926) is sketched in §26 alongside the algebraic
   derivation. Originator citation: Hermann Weyl, "Theorie der
   Darstellung kontinuierlicher halb-einfacher Gruppen durch lineare
   Transformationen, I–IV," *Math. Zeitschrift* 23–24 (1925–26) —
   the foundational paper of compact-Lie-group representation theory.

8. **Appendices A–F:** multilinear algebra (tensor and exterior
   powers, treated explicitly); the symmetric algebra and symmetric
   functions; polynomial and rational representations of $\mathrm{GL}_n$
   via the Schur functor; Lie's theorem, Engel's theorem, semisimple
   and nilpotent Jordan decompositions. These appendices are
   load-bearing: §A on multilinear algebra is repeatedly referenced;
   §B/§C on symmetric functions are the technical backbone of
   Schur-Weyl duality and the Littlewood-Richardson rule (which
   FH states but proves only in special cases — the full LR rule
   is referred to Macdonald).

FH is **not** the place to learn Lie *group* theory in the sense of
smooth manifolds with group structure (Hall is better for that, FT
3.10) and is **not** the place for the deep structure theory of real
forms (Knapp's *Beyond an Introduction*, ibid.). FH is also explicit
about pushing infinite-dimensional reps (Harish-Chandra modules,
unitary reps of non-compact groups) entirely outside scope. The
canonical follow-ups are: Knapp for real forms; Humphreys
*Introduction to Lie Algebras and Representation Theory* for the
algebraic axiomatic treatment; Bump *Lie Groups* for the geometric
synthesis.

**Cited peer sources (≥3, per stub spec):**
- J.-P. Serre, *Linear Representations of Finite Groups* (Springer GTM
  42, 1977) — FT 3.15, the slim crystalline finite-group treatment.
  FH §§1–5 is a "fattened" Serre with worked $S_n$ machinery.
- B. C. Hall, *Lie Groups, Lie Algebras, and Representations: An
  Elementary Introduction* (Springer GTM 222, 2nd ed. 2015) — FT 3.10
  -adjacent (already in `reference/quantum-well/md/Literature/`).
  Covers the same Lie-side material at a gentler pace, matrix-only,
  without finite groups. Hall is FH's most direct competitor.
- A. W. Knapp, *Lie Groups Beyond an Introduction* (Birkhäuser 2nd
  ed. 2002) — cited as tier anchor in `07.01.01-group-representation.md`
  master tier. The structure-theoretic real-form sequel to FH.
- B. E. Sagan, *The Symmetric Group: Representations, Combinatorial
  Algorithms, and Symmetric Functions* (Springer GTM 203, 2nd ed.
  2001) — the canonical "FH chapter 4 expanded to a book" treatment
  of $S_n$, RSK, and the Frobenius character formula.

---

## §2 Coverage table (Codex vs FH)

Cross-referenced against the current 26 shipped units of
`content/07-representation-theory/` plus prerequisites pulled in from
`03-modern-geometry/09-spin-geometry/`.
✓ = covered, △ = partial / different framing / coverage on inspection
of the unit body but not the explicit FH worked example, ✗ = not covered.

| FH topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Group representation, equivalence, sub/quotient | `07.01.01` group-representation | ✓ | Master tier cites FH and Serre as anchors. |
| Schur's lemma | `07.01.02` schur-lemma | ✓ | Direct correspondent. |
| Character of a representation | `07.01.03` character | ✓ | |
| Character orthogonality relations | `07.01.04` character-orthogonality | ✓ | First and second orthogonality. |
| Regular representation | `07.01.05` regular-representation | ✓ | |
| Tensor product of representations | `07.01.06` tensor-product-of-representations | ✓ | |
| Induced representation | `07.01.07` induced-representation | ✓ | |
| Frobenius reciprocity | `07.01.08` frobenius-reciprocity | ✓ | |
| Maschke's theorem (complete reducibility, char 0) | `07.02.01` maschke-theorem | ✓ | |
| Restriction; tensor decomposition rules | — | △ | Touched in `07.01.06` but no standalone unit for Mackey's restriction / induction formulae. **Gap (low).** |
| Character table of $S_3$, $S_4$, $S_5$, $A_4$ | — | ✗ | **Gap (medium).** FH §2 worked-example tables; Codex has the machinery but no worked tables. Pack-pass exercise candidate. |
| Symmetric group representation theory | `07.05.01` symmetric-group-representation | ✓ | |
| Young diagrams and tableaux | `07.05.02` young-diagram | ✓ | Hook length formula present. |
| Specht modules / Young symmetrisers | `07.05.03` specht-module | ✓ | |
| Frobenius character formula for $S_n$ | △ (referenced in `07.05.02`) | △ | **Gap (medium-low).** Mentioned but no dedicated unit; FH §4 gives a complete proof. Candidate: `07.05.04` frobenius-character-formula. |
| Schur-Weyl duality $\mathrm{GL}_d \times S_n$ on $V^{\otimes n}$ | △ (stated in `07.05.01`, `07.05.02`) | △ | **Gap (high).** Codex states it; FH §6 gives the full proof. Candidate: `07.05.04` schur-weyl-duality (or fold into the `07.05.04` slot). |
| Schur functors, polynomial reps of $\mathrm{GL}_n$ | — | ✗ | **Gap (medium).** FH §6 + Appendix C. No Codex unit. Candidate: `07.05.05` schur-functor. |
| Littlewood-Richardson rule | — | ✗ | **Gap (medium-low).** FH §A.1 states it; full proof referenced to Macdonald. Candidate: short pointer unit `07.05.06` littlewood-richardson. |
| RSK correspondence | — | ✗ | **Gap (low).** Not in FH proper (referred to Sagan/Macdonald); Codex skip is consistent with FH but a master-tier deepening would close the Sagan-coverage hole. |
| Lie algebra representation | `07.06.01` lie-algebra-representation | ✓ | |
| Universal enveloping algebra; PBW | `07.06.02` universal-enveloping-algebra | ✓ | |
| Casimir element | — (touched in `07.06.07`) | △ | **Gap (medium).** FH §6 uses the Casimir constantly; Codex references it in passing. Candidate: short unit `07.06.10` casimir-element. |
| $\mathfrak{sl}_2 \mathbb{C}$ rep theory worked out | △ (in `07.03.01` and `07.06.06`) | △ | **Gap (high — pedagogical centrepiece of FH).** Codex has highest-weight theory and Verma modules abstractly, but no dedicated $\mathfrak{sl}_2$ unit walking through the $V_n$ classification, ladder operators, and the character $\chi_n(t) = (t^{n+1} - t^{-n-1})/(t - t^{-1})$. Candidate: `07.06.11` sl2-representations. |
| $\mathfrak{sl}_3 \mathbb{C}$ rep theory worked out (the hexagonal-weight pictures) | — | ✗ | **Gap (very high — the FH centrepiece).** No Codex unit. Without this, a Codex reader cannot reproduce the FH §§11–13 visual programme. Candidate: `07.06.12` sl3-representations. |
| Root system | `07.06.03` root-system | ✓ | |
| Weyl group | `07.06.04` weyl-group | ✓ | |
| Dynkin diagram and the $A$/$B$/$C$/$D$ classification | `07.06.05` dynkin-diagram | ✓ | |
| Cartan-Weyl classification of simple complex Lie algebras | `07.04.01` cartan-weyl-classification | ✓ | |
| Highest-weight representations | `07.03.01` highest-weight-representation | ✓ | |
| Verma module | `07.06.06` verma-module | ✓ | |
| Weyl character formula | `07.06.07` weyl-character-formula | ✓ | |
| Weyl dimension formula | `07.06.08` weyl-dimension-formula | ✓ | |
| Borel-Weil theorem (geometric realisation) | `07.06.09` borel-weil-theorem | ✓ | Goes *beyond* FH (FH does not cover the geometric realisation; this is FH-equivalent + Knapp/Bump deepening). |
| Steinberg formula / Kostant multiplicity | — | △ | **Gap (low — Master deepening).** FH §25; no Codex unit. Candidate: §Master extension to `07.06.07`. |
| Compact Lie group representation | `07.07.01` compact-lie-group-representation | ✓ | |
| Peter-Weyl theorem | `07.07.02` peter-weyl-theorem | ✓ | |
| Haar measure | `07.07.03` haar-measure | ✓ | |
| Weyl integration formula | — | ✗ | **Gap (medium).** FH §26.2; cornerstone of compact-Lie character theory. Candidate: `07.07.04` weyl-integration-formula. |
| Classical groups $\mathrm{SU}(n)$, $\mathrm{SO}(n)$, $\mathrm{Sp}(n)$ as compact-real-forms | — | △ | **Gap (medium).** Mentioned in passing; FH §23 explicit. Could fold into a §Master extension of `07.07.01`. |
| $\mathfrak{sp}_{2n}$ representations | — | ✗ | **Gap (medium).** FH §16. No dedicated unit. Candidate: §Master extension of `07.06.12`/`07.06.05` or new unit `07.06.13`. |
| $\mathfrak{so}_n$ representations (B and D series) | — | △ | **Gap (medium).** FH §§18–19. Dimension formulae implicit in `07.06.08`; no worked construction. |
| Spin and pin representations; Clifford construction | `03.09.02 clifford-algebra`, `03.09.03 spin-group`, `03.09.04 spin-structure`, `03.09.05 spinor-bundle` | △ | Spin geometry chapter has the Clifford/Pin/Spin objects; *representation-theoretic* spin reps of $\mathfrak{so}_n$ (FH §20 algebraic treatment) is partial — the geometric side is in 03.09 but the algebraic half-spin construction over $\mathbb{C}$ is not its own unit. Candidate: §Master extension of `07.06.12` or `07.06.13` cross-linking to `03.09.03`. |
| Exceptional Lie algebras $G_2, F_4, E_6, E_7, E_8$ | `07.04.01` mentions all five | △ | **Gap (low).** FH §22 constructs $G_2$ explicitly; Codex states but does not construct. Master deepening only. |
| Symmetric functions (App B) | — | ✗ | **Gap (low).** Touched implicitly via Schur polynomials in `07.05.02`. Master deepening to `07.05.04` would suffice. |
| Multilinear algebra refresher (App A) | `01.01.*` linear algebra strand | ✓ | Linear-algebra strand 01.01 covers tensor and exterior powers. |
| Lie's, Engel's, Jordan decomposition (App E) | — | △ | **Gap (low).** Engel/Lie are *prereqs* for the Cartan classification; touched in `07.04.01` but no dedicated unit. Master deepening candidate. |

**Aggregate coverage estimate (REDUCED audit basis).**
- Finite-group half of FH (Part I, §§1–6): **~80%** covered. Gaps are
  worked $S_n$ character tables, the standalone Frobenius character
  formula unit, and the dedicated Schur-Weyl duality / Schur functor
  unit.
- $\mathfrak{sl}_2$ / $\mathfrak{sl}_3$ pedagogical centrepiece (Part II,
  §§7–13): **~40%** covered. Codex has the abstract machinery
  (highest-weight, Verma modules, characters) but **lacks the
  worked-out $\mathfrak{sl}_2$ and $\mathfrak{sl}_3$ examples** that
  are FH's defining contribution. This is the **largest pedagogical
  gap.**
- Classical Lie algebras case-by-case (Part III, §§14–20): **~60%**
  covered abstractly via `07.06.*` (Dynkin diagrams, Weyl group, etc.)
  but the worked $\mathfrak{sp}_{2n}$, $\mathfrak{so}_{2n+1}$,
  $\mathfrak{so}_{2n}$ constructions are not present as their own
  units. Spin reps cross to `03.09` but the algebraic half-spin
  construction is missing.
- General theory (Part IV, §§21–26): **~85%** covered.
  Cartan-Weyl, Weyl character formula, Weyl dimension formula, Borel-
  Weil all shipped. Missing: Weyl integration formula, Steinberg/Kostant
  multiplicities (master deepening).

**Overall: ~65% of FH covered by the 26 shipped units of
`07-representation-theory/` (plus spin-geometry cross-references).**
The gap is **pedagogical, not topical** — Codex has nearly all of FH's
theorems but is missing the worked-example units that make FH
distinctive. This is exactly the pattern the stub task predicted
("deepening-heavy outcome rather than new-unit-heavy").

---

## §3 Gap punch-list (priority-ordered)

**Priority 1 — high-leverage, captures FH's distinctive pedagogical content:**

1. **`07.06.11` Representations of $\mathfrak{sl}_2 \mathbb{C}$.**
   Standalone worked-example unit. The $V_n = \mathrm{Sym}^n(\mathbb{C}^2)$
   classification, weight decomposition, ladder operators $H, E, F$,
   character $\chi_n(t) = (t^{n+1} - t^{-n-1})/(t - t^{-1})$, Casimir
   element computed explicitly, tensor product Clebsch-Gordan rule
   $V_m \otimes V_n = \bigoplus_{k=0}^{\min(m,n)} V_{m+n-2k}$. FH §11
   anchor; Hall §4 anchor; Hall *Quantum Theory* §17 anchor for the
   physics cross-link to angular momentum. Three-tier; this is the
   *single most quoted unit-worth-of-material* in physics-adjacent
   rep theory. ~2000 words. **Foundational — pulls weight for
   `06-lie-algebraic/` and for cross-strand QM bridges.**

2. **`07.06.12` Representations of $\mathfrak{sl}_3 \mathbb{C}$.**
   The hexagonal-weight-picture unit. Cartan subalgebra of diagonal
   trace-zero matrices, root system $A_2$ as a planar hexagon, the
   six positive/negative roots, the two fundamental weights
   $\omega_1, \omega_2$, the standard $V = \mathbb{C}^3$ rep and its
   dual, the adjoint rep (the 8 of QCD), the Clebsch-Gordan
   decomposition $V \otimes V^* = V_{\mathrm{ad}} \oplus
   V_{\mathrm{triv}}$, and a worked $V_{a, b} = \Gamma_{a \omega_1 + b
   \omega_2}$ for small $(a, b)$. FH §§11–13 anchor; this is FH's
   pedagogical centrepiece and is the **single largest gap.** Three-tier;
   master tier includes the dimension formula via the hexagonal-Weyl
   count. ~2500 words. **High pedagogical leverage; closes a worked-
   example gap that no other Codex unit fills.**

3. **`07.05.04` Schur-Weyl duality.** Standalone unit. $\mathrm{GL}_d
   \times S_n$ acting on $V^{\otimes n}$; the bimodule decomposition
   $V^{\otimes n} = \bigoplus_{\lambda \vdash n,\, \ell(\lambda) \leq d}
   \mathbb{S}_\lambda(V) \otimes V_\lambda$ where $\mathbb{S}_\lambda$
   is the Schur functor and $V_\lambda$ is the Specht module; proof
   via double-centraliser theorem. FH §6 anchor; Sagan §2 anchor.
   Originator-prose section citing Schur 1901 and Weyl 1925.
   Three-tier; master tier includes the Brauer-algebra generalisation
   to $\mathrm{O}(V)$ and $\mathrm{Sp}(V)$. **High — currently stated
   piecemeal across three units, no dedicated home.**

**Priority 2 — fills medium-priority FH content with new units:**

4. **`07.06.13` Representations of the classical Lie algebras
   $\mathfrak{sp}_{2n}$, $\mathfrak{so}_{2n+1}$, $\mathfrak{so}_{2n}$.**
   One unit covering all three series via Dynkin diagrams $C_n, B_n, D_n$.
   Standard representations, exterior-power decompositions
   ($\Lambda^k V$ for $\mathfrak{sp}$ is *not* irreducible — this is
   the canonical FH worked example), fundamental weights, dimension
   formulae for small $n$. FH §§16, 18, 19 anchor. **Medium — these
   are FH's case-by-case constructions; Codex has the Dynkin
   classification but not the worked reps.**

5. **`07.05.05` Schur functor and polynomial representations of
   $\mathrm{GL}_n$.** Definition of $\mathbb{S}_\lambda$ via Young
   symmetrisers; dimension formula via Schur polynomials and the
   Jacobi-Trudi identity; statement of the equivalence between
   polynomial reps of $\mathrm{GL}_n$ and representations of $S_n$
   factored through Young symmetrisers. FH §6 + Appendix C anchor.
   Intermediate + Master tiers; depends on `07.05.04`. **Medium.**

6. **`07.07.04` Weyl integration formula.** $\int_G f \, d\mu_G =
   \frac{1}{|W|} \int_T f|_T \cdot |\Delta|^2 \, d\mu_T$ for $G$
   compact connected with maximal torus $T$ and Weyl group $W$.
   Statement, proof sketch, and the canonical application: derivation
   of the Weyl character formula from the orthogonality of characters
   on $G$. FH §26.2 anchor. **Medium — Codex has the algebraic Weyl
   character formula but lacks its compact-group integration
   derivation.**

7. **`07.06.10` Casimir element.** Short unit (~1200 words). For a
   semisimple Lie algebra $\mathfrak{g}$ with Killing form $\kappa$,
   the Casimir $\Omega = \sum X_i X^i \in U(\mathfrak{g})$ where
   $\{X_i\}$ and $\{X^i\}$ are dual bases; $\Omega$ is central; acts
   as a scalar on each irreducible rep ($\Omega|_{V_\lambda} =
   \langle \lambda, \lambda + 2\rho\rangle$). FH §6 + §14 anchor.
   Intermediate + Master. **Low-medium — currently referenced in
   passing in `07.06.07`; a dedicated 1200-word unit cleans this up.**

**Priority 3 — Master-tier deepenings (not strictly required for FT
equivalence, but close the gap to ≥95%):**

8. **§Master deepening of `07.05.02` and/or `07.05.04`: Frobenius
   character formula for $S_n$.** Full statement and FH-style proof
   from orthogonality of class functions. Currently only referenced.
   ~600 words added.

9. **§Master deepening of `07.07.01`: classical compact real forms
   $\mathrm{SU}(n)$, $\mathrm{SO}(n)$, $\mathrm{Sp}(n)$ as compact-real
   -forms of their complexifications.** ~500 words added; cross-links
   to `07.06.13`.

10. **§Master deepening of `07.06.12`/`07.06.05`: Pin and Spin half-spin
    representations of $\mathfrak{so}_n$ via Clifford algebras.** ~700
    words added; cross-references `03.09.02`, `03.09.03`. FH §20 anchor.

11. **§Master deepening of `07.06.07`: Steinberg multiplicity formula
    and Kostant multiplicity formula.** ~400 words added. FH §25.

12. **§Master deepening of `07.04.01`: explicit construction of $G_2$
    via octonions or the seven-dimensional Cayley algebra.** ~500 words
    added. FH §22.

13. **§Master deepening of `07.05.05`: Littlewood-Richardson rule
    (statement + worked example, proof referred to Macdonald).** ~400
    words added. FH App A.

**Priority 4 — survey / exercise pack follow-ups (optional):**

14. **Character tables: $S_3$, $S_4$, $S_5$, $A_4$, $A_5$.** Exercise
    pack addition rather than new units. Could be folded into
    `07.05.01` or a new exercises-only file `07.05.E1`. FH §§2, 3
    anchor. ~5 worked tables.

15. **§Pointer unit for Mackey's restriction-induction formula.** FH
    §3 + §6. Could be a §Master extension to `07.01.07` rather than a
    new unit.

---

## §4 Implementation sketch (P3 → P4)

**Realistic production estimate** (mirroring earlier Brown-Higgins-Sivera,
Lawson-Michelsohn, Bott-Tu batches):

- Priority 1 (3 new units): ~3.5 hours each = **~10–11 hours.**
  `07.06.11 sl2`, `07.06.12 sl3`, `07.05.04 schur-weyl-duality`.
- Priority 2 (4 new units): ~3 hours each = **~12 hours.**
- Priority 3 (6 master deepenings): ~45 min each = **~4–5 hours.**
- Priority 4 (exercise pack additions): ~2 hours.

**Total: ~28–30 hours of focused production for full FT-equivalence
coverage of FH.** Fits a 4–5 day window. Priority 1 alone (~11 hours,
1.5 days) would close the largest pedagogical gap and raise effective
coverage from ~65% to ~85%.

**Originator-prose targets.** Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10, originator-prose treatment with primary-source citations should appear
in:

- **Schur 1901** — Issai Schur's doctoral dissertation *Über eine Klasse
  von Matrizen, die sich einer gegebenen Matrix zuordnen lassen*
  (Friedrich-Wilhelms-Universität Berlin 1901). Originates the
  $\mathrm{GL}_n$-$S_n$ centraliser duality. **Cite in `07.05.04`.**
- **Frobenius 1896** — Ferdinand Georg Frobenius, *Über
  Gruppencharaktere*, Sitzungsberichte Preuß. Akad. Wiss. Berlin (1896)
  985–1021; *Über die Primfaktoren der Gruppendeterminante*, ibid.
  (1896) 1343–1382. Originates the entire character-theory programme.
  **Cite in `07.01.03`, `07.01.04` (Master section).**
- **Weyl 1925/1926** — Hermann Weyl, "Theorie der Darstellung
  kontinuierlicher halb-einfacher Gruppen durch lineare
  Transformationen, I–IV," *Math. Z.* 23 (1925) 271–309, *Math. Z.*
  24 (1925) 328–376, 377–395, 789–791. Founds compact-Lie character
  theory; Weyl character formula and integration formula. **Cite in
  `07.06.07`, `07.07.04`.**
- **Cartan 1894** — Élie Cartan, *Sur la structure des groupes de
  transformations finis et continus*, thèse, Paris 1894. Classifies
  simple complex Lie algebras. **Cite in `07.04.01`.**
- **Killing 1888–1890** — Wilhelm Killing, "Die Zusammensetzung der
  stetigen endlichen Transformationsgruppen, I–IV," *Math. Ann.* 31, 33,
  34, 36 (1888–1890). The actual originator of the classification
  programme (Cartan corrected and completed Killing's work). **Cite
  alongside Cartan in `07.04.01` Master section.**
- **Young 1900** — Alfred Young, "On Quantitative Substitutional
  Analysis," series of papers *Proc. London Math. Soc.* 33 onward
  (1900–1934). Originates Young symmetrisers and the tableau
  combinatorics. **Cite in `07.05.02`, `07.05.03`.**

**Notation crosswalk.** FH uses $V_\lambda$ for irreps of $S_n$ indexed
by partitions $\lambda \vdash n$, $\Gamma_a$ for irreps of $\mathfrak{sl}_2$
of highest weight $a$, and $\Gamma_{(a,b)}$ for irreps of $\mathfrak{sl}_3$
of highest weight $a \omega_1 + b \omega_2$. Codex uses $L(\lambda)$ or
$V(\lambda)$ for the highest-weight rep with highest weight $\lambda$ (per
`07.03.01`, `07.06.06`). The new units `07.06.11`, `07.06.12` should
adopt $V_n$ / $V_{a, b}$ for the explicit-example tier (matching FH and
matching physics-strand $V_j$ angular-momentum-irrep convention) and
explicitly note the $L(\lambda)$ correspondence in a §Notation paragraph.

**Cross-strand weaving (Pass-W).** New units should link laterally to:

- `physics/quantum-mechanics/` angular momentum strand — `07.06.11` is
  the *direct* algebraic underpinning of QM angular momentum
  ($J^2, J_z$, raising/lowering operators).
- `02.02 quantum-theory-groups-representations` audit (Woit, FT 2.02)
  — `07.06.11`, `07.06.12`, `07.07.04` are explicit prereqs for Woit's
  spin and $\mathrm{SU}(3)$ chapters.
- `03.09 spin-geometry` — `07.06.13` (or its master deepening on spin
  reps) cross-links to `03.09.02, 03.09.03, 03.09.04, 03.09.05`.
- `04 algebraic-geometry/Grassmannian` (if/when shipped) — `07.05.05`
  Schur functor and Schubert calculus.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in FH (full P1
  audit; deferred until a local PDF is acquired). Coverage estimates
  in §2 are based on FH's well-known chapter structure plus
  spot-checks of Codex units.
- **Serre's three slim books** (FT 3.12 *Trees*, 3.13 *A Course in
  Arithmetic — Linear Reps fragment*, 3.15 *Linear Representations of
  Finite Groups*). Per the stub spec, those are deferred to their own
  dedicated audits. Note that FH §§1–5 substantially *supersedes*
  Serre 3.15 in pedagogical scope; the Serre 3.15 audit is therefore
  expected to be a thin "Serre is FH §§1–5 condensed" plan rather
  than a full punch-list.
- **Diaconis 3.16** *Probability and Representation Theory* — own
  audit; FH does not cover the probability-of-random-walks application.
- **Hall *Lie Groups, Lie Algebras, and Representations* (FT 3.10
  -adjacent)** — own audit; significant overlap with FH Part II but
  matrix-Lie-group-first ordering rather than Lie-algebra-first.
- **The infinite-dimensional rep theory of non-compact Lie groups**
  (Harish-Chandra, Mackey, Kirillov orbit method). FH excludes this
  by design; the Codex follows FH.
- **Modular representation theory** (Brauer characters, blocks,
  decomposition matrices). FH excludes; Codex follows.
- **Algebraic groups in positive characteristic** (Jantzen *Representations
  of Algebraic Groups*; Lusztig; quantum groups). FH excludes;
  deferred to a hypothetical future Master-tier algebraic-groups audit.
- **Hopf-algebraic and category-theoretic abstractions** (tensor
  categories, fusion rules, modular tensor categories). FH excludes;
  deferred to the planned `05-category-theory/` strand.

---

## §6 Acceptance criteria for FT equivalence (FH)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The 3 Priority-1 new units have shipped (`07.06.11 sl2`,
  `07.06.12 sl3`, `07.05.04 schur-weyl-duality`). These close the
  largest pedagogical gap.
- ≥95% of FH's named theorems and major worked examples in chapters
  1–26 map to a Codex unit (currently ~65%; after Priority-1 this
  rises to ~85%; after Priority-1+2 to ~92%; full ≥95% requires
  Priority-3 master deepenings).
- ≥90% of FH's worked computations have a direct unit or are
  cross-referenced from a unit that covers them. The $\mathfrak{sl}_2$,
  $\mathfrak{sl}_3$, $\mathfrak{sp}_{2n}$, $\mathfrak{so}_n$ case
  studies all need dedicated units or §Master extensions.
- Notation crosswalk recorded (see §4).
- Pass-W weaving connects the new units to `physics/quantum-mechanics/`,
  to the Woit audit, and to `03.09 spin-geometry/`.
- Originator-prose sections (Schur 1901, Frobenius 1896, Weyl 1925,
  Cartan 1894, Killing 1888, Young 1900) appear in the relevant Master
  tiers.

**Equivalence verification protocol** (per `FASTTRACK_EQUIVALENCE_PLAN.md`
§4):

- **4.1 Book-as-input self-check.** Sample 5 random theorem statements
  from FH; for each, identify the Codex unit that proves it.
- **4.2 Exercise reproducibility.** Sample 5 random exercises from
  FH (likely from §§3, 4, 11, 13, 22); for each, identify the Codex
  unit(s) sufficient to solve it. Note: FH exercises are notoriously
  open-ended and often constitute their own mini-papers — the
  sampling protocol should bias toward computational rather than
  open-ended exercises.
- **4.3 Notation comprehension.** Sample 5 fragments of FH prose;
  paraphrase each into the Codex notation system (per §4 crosswalk).

---

## §7 Sourcing

- **Local PDF status.** Not present in `reference/textbooks-extra/`
  (verified — only the cover image
  `reference/fast-track/images/Fulton-Harris-Rep-Theory-683x1024__3816f354c4.jpg`
  is local). FH is a commercial Springer GTM and is not author-hosted.
- **Commercial source.** Springer GTM 129. Print + Springer eBook
  available at `link.springer.com/book/10.1007/978-1-4612-0979-9`.
  ISBN 0-387-97527-6 (hardcover), 0-387-97495-4 (softcover).
- **Library-mirror sources.** Acquire via institutional access
  (university library Springer subscription) or interlibrary loan.
  For the local copy, target placement is
  `reference/textbooks-extra/Fulton-Harris-Representation-Theory.pdf`
  to mirror the pattern of other commercial-source FT texts.
- **Companion / supplementary materials.**
  - W. Fulton, *Young Tableaux: With Applications to Representation
    Theory and Geometry* (Cambridge LMS Student Texts 35, 1997) — the
    standalone expansion of FH §4. Public eBook via Cambridge Core.
  - I. G. Macdonald, *Symmetric Functions and Hall Polynomials* (Oxford
    2nd ed. 1995) — referenced by FH for the full Littlewood-Richardson
    proof.
- **Open-access alternatives covering ~60% of FH:**
  - B. C. Hall, *Lie Groups, Lie Algebras, and Representations* (Springer
    GTM 222) — substantial preview on Google Books; covers FH Part II
    at gentler pace.
  - B. E. Sagan, *The Symmetric Group* (Springer GTM 203) — covers FH
    §§1–6 finite-group half.
  - Various lecture notes: Etingof et al. *Introduction to Representation
    Theory* (free, MIT 18.712 notes; covers FH §§1–6 with cleaner
    category-theoretic spine).
- **Reduced-audit flag.** This plan was produced *without* a local FH
  PDF. Coverage estimates in §2 should be re-verified once a PDF is
  acquired, particularly for the Part III chapters on classical Lie
  algebras (FH §§14–20) where worked-example detail is the
  load-bearing pedagogical content. **Promote to full P1 audit when
  PDF is local.**
