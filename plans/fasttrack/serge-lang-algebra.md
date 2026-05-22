# Lang — *Algebra* (Fast Track 3.01) — Audit + Gap Plan

**Book:** Serge Lang, *Algebra*, revised third edition. Graduate Texts in
Mathematics 211, Springer 2002 (corrected printing of 1965/1971/1993
Addison-Wesley editions). ISBN 978-0-387-95385-4. Approx. xv + 914 pp.

**Fast Track entry:** 3.01 — the *first* book in §3 "Modern Geometry,
Algebraic Topology, Mathematical Foundations." Lang is the canonical
graduate-algebra anchor of the Fast Track and the prerequisite spine for
the rest of §3: 3.02 Gel'fand–Manin *Homological Algebra*, 3.10 Atiyah
*K Theory*, 3.11 Fulton–Harris *Representation Theory*, 3.12 Serre
*Complex Semisimple Lie Algebras*, 3.13 Serre *Lie Algebras and Lie
Groups*, 3.21 Hartshorne *Algebraic Geometry*, 3.22 Griffiths–Harris,
3.34 Manin *Modern Number Theory*. The Fast Track source page lists
Lang's TOC under the §3 toggle with no body prose — the book is treated
as a reference floor that downstream §3 books assume in toto.

**Purpose of this plan:** P1 audit-and-gap pass. Output is a concrete
punch-list of new units to write and existing units to deepen so that
*Algebra* is covered to the equivalence threshold (≥95% effective
coverage of theorems, key examples, exercise pack, notation, sequencing,
intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

The audit surface here is **the largest single-volume gap in the corpus.**
The Codex `01-foundations/02-algebra/` directory currently contains
exactly **one shipped unit** (`01.02.01-group.md`, Wave-3 Phase-3.2,
shipped 2026-05-07), against Lang's ~30 chapters spanning groups,
rings, modules, fields, Galois theory, semisimple representations,
commutative algebra, and homological algebra. The campaign brief framed
the foundation as "10 shipped units"; that count is aspirational —
on-disk it is one. Several Lang topics have shipped *piecemeal* under
neighbouring directories: linear algebra units (10 in `01-foundations/01-
linear-algebra/`), representation theory units (26 in `07-representation-
theory/`), and commutative-algebra-flavoured units in
`04-algebraic-geometry/02-schemes/`. Closing the Lang gap therefore
requires not just new `01.02.*` units but rigorous cross-referencing to
the existing rep-theory and alg-geom corpus so that core theorems
(Sylow, Galois, Wedderburn, Schur, Maschke, Nakayama, Hilbert basis,
Noether normalisation, Nullstellensatz) are not re-derived inconsistently.

This pass is intentionally **focused on Parts I–III** of Lang (Groups,
Rings, Modules, Fields/Galois, Linear/Semisimple). Part IV (Homological
algebra Ch. XX–XXI) is **deferred to the 3.02 Gel'fand–Manin audit** —
the two books cover the same ground and the Babel Bible should treat Gel'fand–
Manin as the primary homological-algebra reference, not Lang's
appendix. Lang's commutative-algebra material in Ch. IX–X (Noetherian
rings, integral extensions, Krull dimension, localisation) overlaps the
Atiyah–Macdonald appendix to Hartshorne and is **partially deferred** to
the 3.21 Hartshorne audit — Codex commitments are recorded here but
production credit lives in the Hartshorne plan.

---

## §1 What Lang's *Algebra* is for

Lang is the canonical *graduate-level abstract algebra* textbook in the
American tradition. Where Dummit–Foote *Abstract Algebra* and Aluffi
*Algebra: Chapter 0* are graduate-introductory and pedagogically
patient, and where Bourbaki *Algèbre* and Atiyah–Macdonald *Introduction
to Commutative Algebra* are encyclopaedic-systematic and minimally-
expository respectively, Lang is **terse, fast, abstract, and very wide**.
Lang's editorial bet: a graduate student who has worked through
Dummit–Foote or Artin at the undergraduate level should be able to absorb
the entire abstract-algebra graduate curriculum from one source, with
appendices and exercises supplying the connections to fields the student
will later need (algebraic geometry, number theory, Lie theory,
representation theory). The book is universally adopted as the qualifying-
exam reference for U.S. graduate algebra.

Distinctive editorial choices, in roughly the order Lang develops them:

1. **Categories from page one.** Lang opens Ch. I with a brief
   "categories and functors" section before defining groups, then uses
   functorial language throughout (free objects as left-adjoints,
   universal properties as the *definition* of tensor products, etc.).
   This is the principal point of contrast with Dummit–Foote (which
   defers categorical language to a late chapter) and with Aluffi (which
   builds categories *first* in a more leisurely way). Codex implication:
   Lang notation crosswalk must be explicit about when a "universal
   property" is in play, because the Babel Bible follows Aluffi's slower
   category-first style in foundations units but graduate § targets
   adopt Lang's terse functorial framing.

2. **Groups, rings, modules in parallel (Ch. I–III).** Lang sets up
   parallel structural theorems (homomorphism, isomorphism, correspondence
   theorems) across the three categories, then treats finite group
   theory (Sylow, simplicity of $A_n$, solvable and nilpotent groups,
   Jordan–Hölder) in concentrated form in Ch. I §6–9. Rings (Ch. II) and
   modules (Ch. III) are treated *before* polynomial rings (Ch. IV), so
   that polynomial-ring theory is presented as the canonical example of
   the general module theory, not the other way around.

3. **Fields and Galois theory (Ch. V–VIII) treated abstractly.** Lang
   develops algebraic and transcendental extensions, separability,
   normality, Galois correspondence, Kummer theory, and infinite Galois
   theory (with the Krull topology and profinite groups) as one
   integrated story. Distinctive: infinite Galois theory and profinite
   groups are introduced *before* the reader leaves Part II, where most
   undergraduate texts defer them or omit them.

4. **Commutative algebra (Ch. IX–X) as algebraic-geometry preparation.**
   Localisation, Noetherian rings (Hilbert basis theorem, Krull's
   intersection theorem, Krull dimension), integral extensions (Nakayama,
   going-up / going-down, Noether normalisation, Nullstellensatz), and
   completions. Lang's coverage here is the bridge to Hartshorne's
   Ch. I; Lang's notation is the one downstream Hartshorne units must
   adopt.

5. **Real fields, absolute values, valuation rings (Ch. XI–XII).**
   Orderings on fields, real closures, places and valuations, completions
   of valued fields, the local–global perspective with Ostrowski's
   theorem. Bridge to algebraic number theory (Manin 3.34) and
   $p$-adic Lie theory (Serre 3.13).

6. **Linear algebra and bilinear forms (Ch. XIII–XV) at the abstract
   level.** Matrices and linear maps over a commutative ring, structure
   theorem for modules over a PID (with the rational and Jordan canonical
   forms as corollaries), bilinear and quadratic forms, Witt's theorem.
   The Codex has 10 shipped linear-algebra units following Shilov; Lang's
   versions are the *generalised-ring* versions of those, and the audit
   must record which units need a graduate-tier deepening to absorb Lang's
   coefficient-ring generality.

7. **Representations and group rings (Ch. XVII–XVIII).** Semisimple
   rings and modules (Wedderburn–Artin structure theorem), the Jacobson
   radical, representations of finite groups via group algebras
   ($k[G]$-modules), Maschke's theorem, character theory, induced
   representations, Frobenius reciprocity (in the algebraic
   presentation). The Codex has 26 shipped representation-theory units
   (mostly following Fulton–Harris); Lang's version is the *algebra-side*
   account that downstream rep-theory work depends on (Wedderburn first,
   characters second).

8. **Appendices and homological-algebra coda (Ch. XIX–XXI).** Tensor
   products of modules redone for noncommutative coefficients, general
   homology theory (chain complexes, derived functors, $\mathrm{Ext}$
   and $\mathrm{Tor}$), finite free resolutions. Codex defers most of
   this to 3.02 Gel'fand–Manin; only the Lang-specific tensor-product
   notation and the bare definitions of $\mathrm{Ext}/\mathrm{Tor}$ are
   on this audit's scope.

**Cited peer sources** for §1 framing (used throughout this plan):

- David S. Dummit, Richard M. Foote, *Abstract Algebra*, 3rd ed.,
  Wiley 2004. The dominant U.S. graduate-introductory algebra text;
  pedagogically patient where Lang is terse. Used here as the "slow
  reference" for first-pass exposition of Sylow, Galois, modules over
  PIDs. [ref: TODO_REF Dummit-Foote 2004]
- Paolo Aluffi, *Algebra: Chapter 0*, AMS Graduate Studies in
  Mathematics 104, 2009. Category-first reorganisation of the same
  material; the closest single text to the Babel Bible's own pedagogical
  style. Used here for cross-checking notation when Lang's categorical
  framing is too compressed. [ref: TODO_REF Aluffi 2009]
- Nicolas Bourbaki, *Algèbre*, Chapters 1–10, Hermann then Springer
  (various dates 1942–2007; English translation Springer 1989). The
  encyclopaedic-systematic comparison reference; consulted for precise
  statements where Lang is loose (especially tensor products, semisimple
  modules, structure of finite-dimensional algebras). [ref: TODO_REF
  Bourbaki Algèbre]
- M. F. Atiyah, I. G. Macdonald, *Introduction to Commutative Algebra*,
  Addison-Wesley 1969 (reprinted Westview/CRC 1994). The compact
  commutative-algebra reference; Lang Ch. IX–X covers the same material
  in a different order. Used to anchor the Babel Bible's commutative-algebra
  prep for Hartshorne. [ref: TODO_REF Atiyah-Macdonald 1969]

The Codex equivalence target inherits Lang's bet: graduate-tier units
should be terse, functorial, and self-consistent across the three
parallel theories (groups, rings, modules). A reader who has worked
through the Babel Bible `01.02.*` and `01.01.*` strands should be able to open
Hartshorne Ch. I, Fulton–Harris §1, or Serre *Lie Algebras and Lie
Groups* Part I and recognise the territory without further preparation.

---

## §2 Coverage table (Babel Bible vs Lang)

Cross-referenced against the current ~313-unit corpus.
✓ = covered, △ = partial / different framing or shipped under a
neighbouring directory, ✗ = not covered. Lang chapter numbers refer to
the GTM 211 third edition.

| Lang topic | Lang loc. | Babel Bible unit(s) | Status | Note |
|---|---|---|---|---|
| Categories and functors | Ch. I §11 (and appendix) | — | ✗ | **Gap.** Codex has implicit category use but no foundational category-theory unit; deferred to a separate `01.02.0X` category-theory stub (see §3 P-1). |
| Group, subgroup, homomorphism | Ch. I §1–3 | `01.02.01-group.md` | ✓ | Shipped. Beginner/Intermediate/Master. Master tier cites Lang §I anchor. |
| Cosets, quotient group, normal subgroup, isomorphism theorems | Ch. I §3–4 | — | ✗ | **Gap.** Foundational. |
| Group action, orbit-stabiliser, conjugation | Ch. I §5 | △ | △ | `03.03.02-group-action.md` (per `01.02.01` successors list) covers Lie-group actions; algebraic group-action unit needed. |
| Sylow theorems | Ch. I §6 | — | ✗ | **Gap (high priority).** Load-bearing for rep theory and number theory. |
| Free groups, free abelian groups, presentations | Ch. I §12 | — | ✗ | **Gap.** Needed for fundamental-group computations (cross-Brown 1.05). |
| Solvable, nilpotent groups; Jordan–Hölder | Ch. I §9–10 | — | ✗ | **Gap.** Needed for Galois solvability. |
| Symmetric, alternating, simplicity of $A_n$ | Ch. I §5 | △ | △ | Touched in `07.05.*` symmetric-group rep-theory units; structural unit (simplicity of $A_n$, conjugacy classes) absent. |
| Ring, ideal, quotient ring, homomorphism | Ch. II §1–3 | — | ✗ | **Gap.** Foundational. |
| Polynomial ring, UFD, PID, ED | Ch. II §3–4; Ch. IV | — | ✗ | **Gap.** Foundational. |
| Localisation of rings | Ch. II §3 | △ | △ | Implicit in `04.02.02-affine-scheme.md`; no standalone algebraic unit. |
| Chinese Remainder Theorem | Ch. II §2 | — | ✗ | **Gap.** Small unit. |
| Module, submodule, quotient, hom | Ch. III §1–4 | — | ✗ | **Gap.** Foundational. |
| Direct sum, direct product, free module | Ch. III §4–6 | △ | △ | Vector-space versions in `01.01.03-vector-space.md`; module version absent. |
| Tensor product of modules | Ch. III §3 (and Ch. XVI) | △ | △ | Rep-theoretic version in `07.01.06-tensor-product-of-representations.md`; algebraic-module version absent. |
| Exact sequence, snake lemma | Ch. III §9 | — | ✗ | **Gap.** Defer machinery to 3.02 Gel'fand–Manin; need a small stub here. |
| Polynomial ring properties: Gauss's lemma, Eisenstein, content | Ch. IV §1–4 | — | ✗ | **Gap.** |
| Field, characteristic, prime field | Ch. V §1 | △ | △ | `01.01.01-field.md` covers Beginner/Intermediate; Lang-tier characteristic-theory deepening needed. |
| Algebraic extension, degree | Ch. V §1–2 | — | ✗ | **Gap.** |
| Splitting field, normal extension | Ch. V §3–4 | — | ✗ | **Gap.** |
| Separable extension, perfect field | Ch. V §6 | — | ✗ | **Gap.** |
| Galois group, Galois correspondence (finite) | Ch. VI §1–2 | — | ✗ | **Gap (high priority).** Originator: Galois 1832. |
| Cyclotomic extensions, roots of unity | Ch. VI §3 | — | ✗ | **Gap.** |
| Solvability by radicals, insolubility of quintic | Ch. VI §6–7 | — | ✗ | **Gap.** Signature theorem of Part II. |
| Kummer theory, Artin–Schreier | Ch. VI §8 | — | ✗ | **Gap (Master tier).** |
| Infinite Galois theory, Krull topology, profinite groups | Ch. VII | — | ✗ | **Gap (Master tier).** |
| Transcendental extensions, transcendence basis | Ch. VIII | — | ✗ | **Gap.** Needed for Hartshorne dimension theory. |
| Noetherian ring, Hilbert basis theorem | Ch. X §1 | △ | △ | Hilbert basis is invoked in `04.02.07-nullstellensatz-and-dimension-theory.md`; no standalone proof. |
| Integral extension, going-up / going-down | Ch. VII §1–2 (and Ch. IX) | — | ✗ | **Gap.** Atiyah–Macdonald §5 parallel; partially deferred to Hartshorne audit. |
| Nullstellensatz | Ch. IX §1–2 | △ | △ | `04.02.07-nullstellensatz-and-dimension-theory.md` covers the geometric statement; pure algebra proof absent. |
| Noether normalisation | Ch. IX §1 | — | ✗ | **Gap.** Algebraic proof needed; cross-ref Hartshorne. |
| Krull dimension, Krull's principal ideal theorem | Ch. X §3 | △ | △ | Touched in `04.02.07`; structural unit absent. |
| Nakayama's lemma | Ch. X §4 | — | ✗ | **Gap.** Small but load-bearing for Hartshorne and Atiyah K-theory. |
| Completion, $I$-adic topology | Ch. X §5 | — | ✗ | **Gap.** Deferred from this audit to a 3.34 Manin number-theory stub. |
| Ordered field, real closure | Ch. XI | — | ✗ | **Gap (low priority, Master tier).** |
| Absolute values, places, Ostrowski | Ch. XII | — | ✗ | **Gap (Master tier).** Cross-ref Manin 3.34. |
| Linear maps over a ring, matrices | Ch. XIII | △ | △ | Vector-space version in `01.01.*` (10 units); Lang's coefficient-ring generality deepening needed on `01.01.05-linear-transformation-rank-nullity.md`. |
| Determinants (over commutative rings) | Ch. XIII §4 | △ | △ | `01.01.07-determinant.md` is field-coefficient; deepening to commutative-ring coefficients needed. |
| Structure theorem for modules over a PID | Ch. III §7 / Ch. XIV | — | ✗ | **Gap (high priority).** Rational and Jordan canonical form follow as corollaries; existing `01.01.11-jordan-canonical-form.md` should be reframed as a corollary, not a standalone construction. |
| Bilinear, sesquilinear, quadratic forms; Witt's theorem | Ch. XV | △ | △ | `01.01.15-bilinear-quadratic-form.md` exists; Witt cancellation/decomposition absent. |
| Tensor algebra, exterior algebra, symmetric algebra | Ch. XVI | △ | △ | Used implicitly in `04.08.01-sheaf-of-differentials.md`; standalone units absent. |
| Semisimple ring, semisimple module | Ch. XVII §1–3 | — | ✗ | **Gap (high priority).** |
| Wedderburn–Artin structure theorem | Ch. XVII §4 | — | ✗ | **Gap (high priority).** Originator: Wedderburn 1908, Artin 1927. |
| Jacobson radical | Ch. XVII §6 | — | ✗ | **Gap.** |
| Maschke's theorem | Ch. XVIII §1 | ✓ | ✓ | `07.02.01-maschke-theorem.md` shipped. Cross-link from new Lang unit. |
| Group algebra $k[G]$, regular representation | Ch. XVIII §1–2 | △ | △ | `07.01.05-regular-representation.md` covers rep-theoretic angle; algebra-side framing absent. |
| Schur's lemma | Ch. XVII §1 | ✓ | ✓ | `07.01.02-schur-lemma.md` shipped. Cross-link. |
| Characters and orthogonality | Ch. XVIII §5 | ✓ | ✓ | `07.01.03-character.md`, `07.01.04-character-orthogonality.md` shipped. Cross-link. |
| Induced representations, Frobenius reciprocity | Ch. XVIII §7 | ✓ | ✓ | `07.01.07-induced-representation.md`, `07.01.08-frobenius-reciprocity.md` shipped. Cross-link; Lang's algebra-side proof should be referenced. |
| General homology theory | Ch. XX | — | ✗ | **Deferred to 3.02 Gel'fand–Manin audit.** |
| Finite free resolutions, $\mathrm{Ext}$, $\mathrm{Tor}$ | Ch. XXI | △ | △ | `04.03.06-derived-functors-and-ext.md` exists for the sheaf-theoretic angle; pure-algebra version deferred to 3.02. |

**Aggregate coverage estimate (Parts I–III only, the in-scope chapters):**
~12% of Lang's named theorems in Ch. I–XVIII have a Babel Bible unit that
covers them at any tier. Of those, half are △ (covered under a
neighbouring directory with a different framing — e.g., Maschke under
rep-theory uses representation-language exclusively, not algebra-side
Wedderburn-decomposition language). True ✓ count: ~8 of Lang's ~80
named theorems in scope.

Closing the gap to ≥95% effective coverage requires ~25 new units
plus ~15 deepening passes on existing units (see §3).

---

## §3 Gap punch-list (P3 — priority-ordered)

Items numbered with provisional unit IDs in `01.02.*` (foundations
algebra). Some items will cross-list into `01.03.*` (a new
commutative-algebra subdirectory to be opened) once the Hartshorne audit
confirms its scope.

### Priority 0 — blockers (must ship before downstream §3 work continues)

The following four downstream books currently sit on Lang's prerequisite
shelf with no enforced gate: 3.11 Fulton–Harris (rep-theory units in
`07-*` already produced), 3.21 Hartshorne (alg-geom units in `04-*`
already produced), 3.13 Serre Lie groups, 3.34 Manin number theory.
Each of these has shipped Babel Bible units that implicitly cite Lang theorems
*not yet covered in the Babel Bible.* Continuity gate: the P-1 Lang units
below should ship before further `04.*` or `07.*` units are added,
or those new units must declare `pending_prereqs: true`.

### Priority 1 — high-leverage, captures Lang's central content

1. **`01.02.02` Subgroup, coset, quotient group, isomorphism theorems.**
   Foundational. ~1500 words, three-tier. Dummit-Foote §3 anchor;
   Lang §I.3 anchor.

2. **`01.02.03` Group action, orbit-stabiliser, class equation.**
   Algebraic framing distinct from `03.03.02-group-action.md` (which
   targets Lie groups). Three-tier; Master tier covers Burnside.

3. **`01.02.04` Sylow theorems.** Originator: Sylow 1872. The
   load-bearing finite-group-theory result. Three-tier. Master tier
   includes worked classification of groups of order $\leq 60$. Cross-
   linked from `07.05.*` symmetric-group units.

4. **`01.02.05` Solvable group, nilpotent group, Jordan–Hölder.**
   Needed for Galois solvability by radicals (P-1 item 12 below).

5. **`01.02.06` Ring, ideal, quotient ring; isomorphism theorems for
   rings.** Foundational; ~2000 words. Cite Dummit-Foote §7–8 anchor,
   Aluffi §III anchor.

6. **`01.02.07` Polynomial ring; UFD, PID, ED; Gauss's lemma;
   Eisenstein.** Foundational. Cross-link to existing
   `01.01.01-field.md` and to `04.02.*` affine-scheme units.

7. **`01.02.08` Localisation of a commutative ring.** Algebraic
   framing; cross-link to `04.02.02-affine-scheme.md`. Atiyah–Macdonald
   §3 anchor.

8. **`01.02.09` Module, submodule, quotient module, free module, direct
   sum.** Foundational. ~1800 words.

9. **`01.02.10` Tensor product of modules (commutative case).** Lang
   Ch. III §3 + Ch. XVI anchor. Universal-property definition; explicit
   construction. Cross-link to `07.01.06-tensor-product-of-
   representations.md` (which becomes a corollary). Master tier covers
   the noncommutative case from Ch. XVI §5.

10. **`01.02.11` Exact sequence, short five lemma, snake lemma (stub).**
    Small unit (~1000 words). Pure-algebra version; full homological
    machinery deferred to 3.02 Gel'fand–Manin.

11. **`01.02.12` Algebraic field extension, degree, splitting field.**
    Foundational for Galois. Three-tier.

12. **`01.02.13` Separability, normality, Galois extension; Galois
    correspondence (finite).** Originator: Galois 1832 (manuscripts;
    posthumous 1846 *J. de Math. Pures Appl.*, ed. Liouville). The
    signature theorem of Part II. Three-tier; Master tier includes
    insolubility of the quintic as worked example. ~3500 words —
    largest single unit in this punch-list.

13. **`01.02.14` Structure theorem for finitely generated modules over a
    PID.** Lang Ch. III §7 anchor. Three-tier. Existing
    `01.01.11-jordan-canonical-form.md` must be **deepened**
    (Master-tier section) to derive JCF and rational canonical form as
    corollaries; this is a deepening, not a new unit.

14. **`01.02.15` Semisimple module, semisimple ring; Wedderburn–Artin
    structure theorem.** Originator: J. H. M. Wedderburn 1908
    (*Proc. London Math. Soc.* (2) 6, 77–118, on hypercomplex number
    systems); Artin 1927 generalisation. Three-tier; Master tier
    covers the Jacobson radical (Ch. XVII §6) in a §Bonus. Cross-link to
    `07.02.01-maschke-theorem.md` and to `07.01.02-schur-lemma.md`,
    both of which become *corollaries* of Wedderburn–Artin in the
    Lang-style algebra-side framing.

15. **`01.02.16` Nakayama's lemma.** Small unit (~1000 words) but
    load-bearing for Hartshorne and Atiyah K-theory. Originator:
    Krull (1938) / Azumaya (1951) / Nakayama (1951) — attribution
    contested; Lang names it after Nakayama. Notation crosswalk
    paragraph required.

16. **`01.02.17` Hilbert basis theorem; Noetherian rings and modules.**
    Originator: Hilbert 1890 *Math. Ann.* 36. Three-tier. Cross-link
    to `04.02.07-nullstellensatz-and-dimension-theory.md` which
    currently invokes Hilbert basis without a Codex proof.

17. **`01.02.18` Integral extension; Noether normalisation; weak
    Nullstellensatz.** Originator: Noether 1926 *Math. Ann.* 96
    (algebraic-set normalisation); 1927 (general integral closure).
    Three-tier; Master tier proves strong Nullstellensatz from weak +
    Noether normalisation. Cross-link reframes the geometric
    Nullstellensatz unit in `04.02.07` as the geometric corollary.

### Priority 2 — important deepenings and Master-tier extensions

18. **`01.02.19` Tensor algebra, exterior algebra, symmetric algebra.**
    Lang Ch. XVI anchor. Cross-link from `04.08.01-sheaf-of-
    differentials.md` (currently uses exterior powers without a Codex
    definition).

19. **`01.02.20` Free group, free product, group presentation.** Lang
    Ch. I §12. Cross-link from Brown 1.05 fundamental-group punch-list.

20. **`01.02.21` Transcendental extension, transcendence basis,
    transcendence degree.** Needed for Hartshorne dimension theory.

21. **`01.02.22` Krull dimension, Krull's principal ideal theorem.**
    Cross-link to `04.02.07`. Partially deferred to Hartshorne audit;
    record commitment here.

22. **`01.02.23` Group algebra $k[G]$, regular representation
    (algebra-side framing).** Bridge unit between Lang Ch. XVIII and
    `07.01.05-regular-representation.md`. Reframes the latter under
    Wedderburn–Artin decomposition.

23. **Deepenings on existing units (no new ID):**
    - `01.01.01-field.md` — add Master-tier section on prime field,
      characteristic, Frobenius.
    - `01.01.05-linear-transformation-rank-nullity.md` — Master-tier
      coefficient-ring generality (linear maps over a commutative ring,
      not just a field).
    - `01.01.07-determinant.md` — Master-tier deepening to commutative
      coefficients; statement of the Cayley–Hamilton via "determinant
      trick" (Atiyah–Macdonald §2 anchor).
    - `01.01.11-jordan-canonical-form.md` — Master-tier reframing as
      corollary of `01.02.14` PID structure theorem.
    - `01.01.15-bilinear-quadratic-form.md` — Master-tier Witt
      cancellation and Witt decomposition.
    - `01.02.01-group.md` — add §Notation paragraph crosswalking Lang's
      categorical framing (Ch. I §11) with the Babel Bible's slower exposition.

### Priority 3 — Master-tier survey pointers (low priority)

24. **`01.02.24` Cyclotomic extensions, roots of unity, Artin–Schreier
    extensions.** Master-only.

25. **`01.02.25` Infinite Galois theory, Krull topology, profinite
    groups.** Master-only; pointer to Lang Ch. VII and Serre
    *Cohomologie Galoisienne* for follow-up.

26. **`01.02.26` Ordered field, real closure; absolute values,
    Ostrowski's theorem.** Master-only. Pointer toward Manin 3.34.

### Priority 4 — deferred to neighbouring audits

- **Homological algebra (Lang Ch. XX–XXI).** Defer to 3.02 Gel'fand–
  Manin audit. Codex commitment: when the 3.02 audit ships, this plan
  is amended to record cross-references.
- **Completions and $I$-adic topology (Lang Ch. X §5).** Defer to 3.34
  Manin number-theory audit.
- **Commutative algebra detail beyond Nakayama / Noether normalisation /
  Hilbert basis (Lang Ch. IX–X residue).** Defer to 3.21 Hartshorne
  audit's Atiyah–Macdonald appendix.

---

## §4 Implementation sketch (P3 → P4)

For a full Lang Parts I–III coverage pass, items 1–17 are the minimum
set. Realistic production estimate (calibrated against the Bott-Tu,
Lawson-Michelsohn, and Brown 1.05 batches):

- ~3 hours per standard unit, ~5 hours for the large units (Galois
  correspondence #12, Wedderburn–Artin #14, PID structure theorem #13).
- Priority-1 unit count: 17 units, of which 3 are large.
  $14 \times 3 + 3 \times 5 = 57$ hours. Plus ~6 deepening passes
  averaging ~1.5 hours each = ~9 hours. Total **~66 hours** of focused
  production for P-1.
- Priority-2 unit count: 5 units + 6 explicit deepenings = ~15 hours.
- Priority-3 unit count: 3 Master-only units = ~6 hours.
- **Grand total to ≥95% Lang equivalence (Parts I–III, in scope):
  ~87 hours.** Fits a 10–12 day focused window. Larger than any
  previous single-book audit's production estimate; reflects Lang's role
  as the foundation of §3.

**Originator-prose targets.** Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10, the following P-1 units should carry originator-prose treatment:

- Item 4 (Sylow) — L. Sylow, "Théorèmes sur les groupes de
  substitutions," *Math. Ann.* 5 (1872), 584–594.
- Item 12 (Galois correspondence) — É. Galois, "Mémoire sur les
  conditions de résolubilité des équations par radicaux," 1831
  manuscript, published posthumously by J. Liouville in *J. de Math.
  Pures Appl.* (1) 11 (1846), 381–444. The originating document of
  group theory and Galois theory together; the unit should treat the
  modern Galois correspondence as the Artin–Lang reformulation of
  Galois's original results.
- Item 14 (Wedderburn–Artin) — J. H. M. Wedderburn, "On hypercomplex
  numbers," *Proc. London Math. Soc.* (2) 6 (1908), 77–118;
  E. Artin, "Zur Theorie der hyperkomplexen Zahlen," *Abh. Math. Sem.
  Univ. Hamburg* 5 (1927), 251–260.
- Item 16 (Nakayama) — W. Krull, "Dimensionstheorie in Stellenringen,"
  *J. Reine Angew. Math.* 179 (1938); G. Azumaya, "On maximally
  central algebras," *Nagoya Math. J.* 2 (1951); T. Nakayama, "A
  remark on finitely generated modules," *Nagoya Math. J.* 3 (1951).
  The attribution-contested origin should be documented.
- Item 17 (Hilbert basis) — D. Hilbert, "Ueber die Theorie der
  algebraischen Formen," *Math. Ann.* 36 (1890), 473–534.
- Item 18 (Noether normalisation) — E. Noether, "Idealtheorie in
  Ringbereichen," *Math. Ann.* 83 (1921), 24–66 (the foundational
  Noetherian-ring paper); E. Noether, "Abstrakter Aufbau der
  Idealtheorie in algebraischen Zahl- und Funktionenkörpern,"
  *Math. Ann.* 96 (1927), 26–61 (the integral-closure / normalisation
  paper).
- The "modern consolidation" originator-citation for the *organisation*
  of the whole material (Parts I–III taken as a single graduate
  course) is Serge Lang himself: the first edition of *Algebra*
  (Addison-Wesley 1965) set the template that Dummit–Foote, Hungerford,
  Aluffi, and every subsequent graduate algebra text reorganises in
  response to.

**Notation crosswalk.** Lang's distinctive notational choices that the
Codex must record (in `docs/specs/UNIT_SPEC.md` §11 and as §Notation
paragraphs in the affected units):

- Lang writes $A^*$ for the group of units of a ring $A$; Codex
  convention TBD — the rep-theory units use $A^\times$. Standardise on
  $A^\times$ project-wide; add notation note to `01.02.06`.
- Lang's $M \otimes_A N$ tensor product is over a *commutative* ring
  unless noted otherwise; noncommutative case in Ch. XVI uses
  $M \otimes^R_A N$. Codex follows the same convention; record in
  `01.02.10`.
- Lang's $\mathrm{Gal}(K/k)$ uses the *quotient* notation (extension on
  top); Codex follows. Many number-theory references write
  $\mathrm{Gal}(K|k)$; flag in `01.02.13` notation paragraph.
- Lang's "semisimple" allows a zero module; Bourbaki's does not. Lang's
  convention adopted; record in `01.02.15`.
- Lang's *radical* of a ring is the Jacobson radical; the nilradical
  is distinguished as "nilradical." Codex follows; record in
  `01.02.15` and `01.02.17`.

---

## §5 What this plan does NOT cover

- **Homological algebra in depth (Lang Ch. XX–XXI).** Deferred to the
  3.02 Gel'fand–Manin *Homological Algebra (Algebra V)* audit. Only the
  bare snake-lemma stub (item 11) sits inside the Lang audit.
- **Commutative-algebra detail beyond Nakayama, Noether normalisation,
  Hilbert basis, integral extensions, Krull dimension.** Deferred to
  the 3.21 Hartshorne audit's Atiyah–Macdonald appendix scope.
  In particular: associated primes, primary decomposition, depth and
  Cohen–Macaulay, regular local rings, completions, Hensel's lemma.
  Codex commitments are recorded in this plan's Priority-4 section but
  production credit lives in the Hartshorne audit.
- **Field-theoretic specialisation to number theory.** Real closures
  (Ch. XI), absolute values and Ostrowski (Ch. XII) are Master-only
  pointer units (item 26) in this plan; full treatment defers to a
  3.34 Manin number-theory audit when that book is added to the
  campaign.
- **Exercise pack.** Lang's exercises are famously challenging and many
  are open-ended research-pointer problems. Exercise pack production is
  a P3-priority-3 follow-up after the priority-1 units ship.
- **Line-number inventory of every named theorem.** ~900-page book;
  the audit here works from chapter structure and named-theorem level.
  A full P1 line-number audit would refine exercise-pack scope but
  would not change the punch-list.

---

## §6 Acceptance criteria for FT equivalence (Lang Parts I–III)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- All 17 Priority-1 units have shipped at three-tier (Beginner /
  Intermediate / Master) with `tier_anchors` citing Lang's §
  numbers in the Master tier.
- Existing `01.01.*` units are deepened per §3 Priority-2 item 23.
- Existing `07.*` rep-theory units are cross-linked from `01.02.15`
  Wedderburn–Artin so that Maschke / Schur / character orthogonality /
  induced reps / Frobenius reciprocity all reference the algebra-side
  framing.
- Existing `04.02.07-nullstellensatz-and-dimension-theory.md` is
  cross-linked from `01.02.17` (Hilbert basis) and `01.02.18` (Noether
  normalisation).
- ≥95% of Lang's named theorems in Ch. I–XVIII map to Babel Bible units
  (currently ~12%; after Priority-1 units this rises to ~75%; after
  Priority-1 + 2 to ~92%; full ≥95% requires Priority-3 selective
  pickups + the rep-theory cross-links from item 22).
- ≥90% of Lang's worked computations in Ch. I–XVIII have a direct unit
  or are referenced from a unit that covers them.
- Notation decisions are recorded per §4 (six items).
- Pass-W weaving connects the new `01.02.*` units to the existing
  `01.01.*` linear-algebra strand, the `04.02.*` algebraic-geometry
  schemes strand, and the `07.*` representation-theory strand via
  lateral connections; each new unit has at least 2 outbound and 2
  inbound connections recorded in `manifests/production/connections.json`.

The 17 Priority-1 units close most of the equivalence gap. Priority-2
closes the linear-algebra / rep-theory cross-linkage. Priority-3 + 4
are deepenings and deferrals.

---

## §7 Sourcing

- **Status.** BUY (per `docs/catalogs/FASTTRACK_BOOKLIST.md` row 3.01).
  Springer GTM 211 retail; no free author PDF.
- **Local copy.** **Not present** in `reference/textbooks-extra/` as of
  this audit (2026-05-18). Only Lang's *Basic Mathematics* is on disk.
  Action: acquire and add to `reference/fasttrack-texts/03-modern-
  geometry/` as `Lang-Algebra.pdf` to mirror the pattern of other §3
  texts. **`audit_completeness: full`** — this audit works from
  knowledge of Lang's well-documented TOC (verifiable against Springer
  publisher page, Wikipedia summary, and the Fast Track source page's
  TOC images at `reference/fast-track/images/image-33__c7d6862489.png`
  through `image-37__9d46db4177.png`); the punch-list does not depend
  on line-level inspection.
- **Peer references** for cross-checking and notation crosswalk (all
  TODO_REF until physical copies are added to `reference/`):
  - Dummit, Foote, *Abstract Algebra*, 3e (Wiley 2004). Pedagogically
    slower; primary cross-check for Sylow, Galois, modules-over-PID.
  - Aluffi, *Algebra: Chapter 0* (AMS 2009). Category-first
    reorganisation; closest to Codex style.
  - Bourbaki, *Algèbre* Ch. 1–10 (Springer English ed. 1989).
    Encyclopaedic precision; consulted where Lang is loose.
  - Atiyah, Macdonald, *Introduction to Commutative Algebra* (Addison-
    Wesley 1969). The compact commutative-algebra reference; Lang
    Ch. IX–X parallel.
- **Originator papers.** See §4 originator-prose targets list (Sylow
  1872, Hilbert 1890, Wedderburn 1908, Galois 1846 posth., Noether
  1921 + 1927, Artin 1927, Krull 1938, Azumaya / Nakayama 1951).
- **License note.** Lang's *Algebra* is in print, in copyright,
  commercial; cite excerpts under fair-use for educational annotation
  only. Do not redistribute PDF.

---

**Audit completeness:** `full` (Parts I–III, the in-scope chapters).
Parts IV (homological), Ch. XI–XII (real / valued fields), and
Ch. IX–X residue commutative algebra are explicit deferrals to
neighbouring audits per §5.
