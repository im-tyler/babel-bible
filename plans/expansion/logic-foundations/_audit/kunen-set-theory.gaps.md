# Audit — Kunen, *Set Theory* (Studies in Logic 34, College Publications, 2011)

- **source_book:** `kunen-set-theory`
- **source_curriculum:** `logic-foundations`
- **target chapter:** `content/42-mathematical-logic/03-set-theory-forcing/`
  (frontmatter `section: mathematical-logic`; `chapter: set-theory-forcing`;
  id format `42.03.<UU>`; field `foundations-logic`)
- **date:** 2026-06-06
- **ownership:** this audit owns **all of 42.03** (axiomatic / independence set theory).
  Sibling logic chapters (also freshly scaffolded, currently empty): **42.01**
  first-order-logic-completeness (Gödel completeness, the FOL syntax/semantics/models
  substrate, compactness, Löwenheim–Skolem), **42.02** model-theory (Morley categoricity,
  types, saturation — *consumes* the cardinal arithmetic built here), **42.04**
  computability-degrees. Cross-refs to `42.01.*`/`42.02.*` below name the *planned*
  sibling units so the producer can wire the DAG once they land.

## Verdict

Chapter `42-mathematical-logic` is a **freshly scaffolded, entirely empty** chapter set —
all four directories (`01-first-order-logic-completeness … 04-computability-degrees`)
contain only `.gitkeep`. There is therefore **no axiomatic set theory anywhere in
`content/`** to deduplicate against. The whole axiomatic/independence apparatus (ZFC, the
cumulative hierarchy, ordinals & transfinite recursion, cardinals & cardinal arithmetic, AC
and its independence, the constructible universe L, forcing, large cardinals) is
**greenfield**.

What *does* exist in the corpus is **elementary, prose-level set-theory background**, reused
as prerequisite and cross-referenced, never re-proposed:

- **Cantor's diagonal argument, countable vs uncountable, \(|\mathbb Q|=\aleph_0\),
  \(|\mathbb R|=2^{\aleph_0}\)** — built at the **naive** level in `00.01.01`
  (real-numbers unit), which even *narrates* (in its history/synthesis prose) that
  \(|\mathbb R|=\aleph_1\) (CH) is independent of ZFC, settled by Gödel 1940 and Cohen 1963.
  That unit gives the *statement* and the diagonal proof; it builds **no** ordinal/cardinal
  arithmetic, no \(\aleph\)-hierarchy, no forcing. The axiomatic cardinal theory (`42.03.04`)
  cross-refs `00.01.01` as the elementary anchor and builds the machinery the prose there
  merely names.
- **Zorn's lemma** is *used as a tool* in `02.11.02` (Hahn–Banach) and flagged as
  "background" in `01.01.03` (vector space); `02.11.02` even discusses HB ↔ BPI ↔ choice
  reverse-math in passing. **No unit states/proves AC ⇔ Zorn ⇔ well-ordering** or treats AC
  axiomatically; that equivalence theorem is a genuine gap (`42.03.05`), and `02.11.02`/`01.01.03`
  are listed as the downstream consumers to cross-ref.
- **Well-ordering principle / induction** is treated for \(\mathbb N\) only in `00.12.01`
  (mathematical induction), which *explicitly notes* "transfinite induction on ordinals
  exists in Mathlib … but is **not** connected to the introductory unit." Transfinite
  induction/recursion on ordinals is therefore a genuine gap (`42.03.02`).
- **The Borel \(\sigma\)-algebra** is `02.07.01` (measure theory). The **Borel/projective
  hierarchy and descriptive set theory** as a *set-theoretic* topic is absent; targeted greps
  for "borel hierarchy", "analytic set" (as a DST object), "projective hierarchy", "polish
  space", "determinacy / axiom of determinacy / Banach–Mazur game" return **0 relevant hits**
  (the "analytic set" / "determinacy" hits are all complex-geometry analytic varieties and
  unrelated "determined" prose). Covered by the DST pointer unit (`42.03.09`), cross-reffing
  `02.07.01`.
- **Ultrafilters / ultraproducts / the compactness theorem** as logic objects: 0 dedicated
  units (hits are incidental). These belong to the **FOL substrate `42.01`** (compactness via
  ultraproducts) and to `42.02` (model theory); the ultrafilter *consequence of AC* is touched
  in `42.03.05` and cross-reffed, not owned.

**Prereq convention.** Verified-existing anchors: `00.01.01` (naive cardinality / Cantor
diagonal), `00.12.01` (induction & well-ordering on \(\mathbb N\)), `01.01.03` (vector space /
Zorn background), `02.11.02` (Hahn–Banach, a Zorn/AC consumer), `02.07.01` (Borel
\(\sigma\)-algebra), `01.02.06` (ring/ideal — Boolean-algebra background for `42.03.05`/`.06`).
Ids `42.03.*` (other than a unit's own) and `42.01.*`/`42.02.*` are **planned units** (this
audit's siblings / parallel-audit siblings) listed as prereqs so the producer can wire the DAG
once they land.

---

## GENUINE GAPS

### 42.03.01 — The ZFC axioms and the cumulative hierarchy \(V_\alpha\)
- **spec:** State the **Zermelo–Fraenkel axioms with Choice** one by one (Extensionality,
  Pairing, Union, Power Set, Infinity, Foundation/Regularity, the **Separation** and
  **Replacement** schemata, Choice), motivating each from the iterative conception of set.
  Build the **cumulative (von Neumann) hierarchy** \(V_0=\varnothing\),
  \(V_{\alpha+1}=\mathcal P(V_\alpha)\), \(V_\lambda=\bigcup_{\alpha<\lambda}V_\alpha\), and
  prove (using Foundation) that \(V=\bigcup_\alpha V_\alpha\): **every set is well-founded**,
  with its **rank**. Develop the basic well-foundedness / \(\in\)-induction machinery and the
  **Reflection Principle** (every finite list of formulas reflects to some \(V_\alpha\)) as the
  schema that makes ZF unfinitely-axiomatisable and underlies relative-consistency arguments.
- **prereqs:** `00.12.01`, `42.01.01`
- **chapter:** `set-theory-forcing` · **section:** `mathematical-logic`
- **source_book:** `kunen-set-theory` · **source_curriculum:** `logic-foundations`

### 42.03.02 — Ordinals, transfinite induction, and transfinite recursion
- **spec:** **Von Neumann ordinals** (transitive sets well-ordered by \(\in\)); every
  well-ordering is isomorphic to a unique ordinal (Mostowski-style). Successor vs limit
  ordinals, \(\omega\), the classes \(\mathrm{Ord}\) and \(\mathrm{On}\) (a proper class,
  Burali-Forti). **Transfinite induction** and the **transfinite-recursion theorem** (define a
  class function on all ordinals by recursion). **Ordinal arithmetic** \(\alpha+\beta\),
  \(\alpha\cdot\beta\), \(\alpha^\beta\) via recursion and via order types (sum/product/exp of
  well-orderings), its non-commutativity, and **Cantor normal form**. This is the recursion
  engine the rest of the chapter (rank, \(\aleph_\alpha\), the \(L\)-hierarchy) runs on; the
  introductory unit `00.12.01` explicitly stops at induction on \(\mathbb N\).
- **prereqs:** `42.03.01`, `00.12.01`
- **chapter:** `set-theory-forcing` · **section:** `mathematical-logic`
- **source_book:** `kunen-set-theory` · **source_curriculum:** `logic-foundations`

### 42.03.03 — Cardinals, alephs, and the arithmetic of \(+,\times\)
- **spec:** **Cardinals as initial ordinals**; the well-ordering theorem ⇒ every set has a
  cardinality \(|X|\). The **aleph hierarchy** \(\aleph_\alpha=\omega_\alpha\) and the
  \(\beth\) (beth) function. **Cantor's theorem** \(|X|<|\mathcal P(X)|\) (cross-ref the naive
  diagonal in `00.01.01`) and **Schröder–Bernstein**. Arithmetic of infinite cardinals:
  **\(\kappa+\lambda=\kappa\cdot\lambda=\max(\kappa,\lambda)\)** for infinite cardinals (the
  Hessenberg "absorption" theorem, via the canonical Gödel well-ordering of \(\mathrm{Ord}\times
  \mathrm{Ord}\)), so additive/multiplicative cardinal arithmetic collapses. Sets the stage for
  the *exponential* arithmetic (the only hard part) in `42.03.04`. **This is the cardinal
  arithmetic the model-theory chapter `42.02` consumes** (Morley categoricity, Hanf numbers,
  stability counting) — flagged as a downstream cross-ref.
- **prereqs:** `42.03.02`, `00.01.01`
- **chapter:** `set-theory-forcing` · **section:** `mathematical-logic`
- **source_book:** `kunen-set-theory` · **source_curriculum:** `logic-foundations`

### 42.03.04 — Cofinality, cardinal exponentiation, König's theorem, and the SCH
- **spec:** The genuinely hard half of cardinal arithmetic. **Cofinality** \(\mathrm{cf}(\kappa)\);
  **regular vs singular** cardinals; \(\mathrm{cf}(\kappa)\) is regular and \(\aleph_{\alpha+1}\)
  is regular (AC). **König's theorem** \(\sum_{i}\kappa_i<\prod_i\lambda_i\) when
  \(\kappa_i<\lambda_i\), and its corollaries \(\kappa<\kappa^{\mathrm{cf}(\kappa)}\) and
  \(\mathrm{cf}(2^\kappa)>\kappa\) (so \(\mathrm{cf}(2^{\aleph_0})>\omega\): the **only**
  ZFC-provable constraint on the continuum beyond \(2^{\aleph_0}>\aleph_0\)). **Cardinal
  exponentiation** \(\kappa^\lambda\), the **gimel function**, the Hausdorff and Bukovský–Hechler
  recursion formulas reducing \(2^\kappa\) and \(\kappa^\lambda\) to gimel, **GCH**, and the
  **Singular Cardinals Hypothesis (SCH)** (state Silver's theorem — SCH cannot first fail at a
  singular of uncountable cofinality — and point to Shelah's pcf bound \(2^{\aleph_\omega}<
  \aleph_{\omega_4}\) as the frontier; pcf itself out of scope).
- **prereqs:** `42.03.03`
- **chapter:** `set-theory-forcing` · **section:** `mathematical-logic`
- **source_book:** `kunen-set-theory` · **source_curriculum:** `logic-foundations`

### 42.03.05 — The Axiom of Choice: Zorn, well-ordering, and equivalents
- **spec:** The **Axiom of Choice** and its proof-equivalents over ZF:
  **AC ⇔ Zorn's lemma ⇔ the well-ordering theorem ⇔ Tukey's lemma ⇔ "every vector space has a
  basis" ⇔ Tychonoff** (each with the cycle of implications, the Zorn↔well-ordering core via
  transfinite recursion). State the weaker consequences used elsewhere: the **ultrafilter /
  Boolean prime ideal theorem** (every Boolean algebra has a prime ideal; BPI ⇒ compactness of
  FOL, ⇒ Tychonoff-for-Hausdorff) and **dependent/countable choice**, noting BPI is **strictly
  weaker** than full AC. This is the axiomatic unit the corpus has been *using without proving*:
  `02.11.02` (Hahn–Banach via Zorn; HB ↔ BPI reverse-math) and `01.01.03` (vector-space basis
  via Zorn) are the downstream consumers and are cross-reffed. (Independence of AC from ZF is
  deferred to `42.03.07`/`.08`.)
- **prereqs:** `42.03.02`, `42.03.03`, `01.02.06`, `42.01.03`
- **chapter:** `set-theory-forcing` · **section:** `mathematical-logic`
- **source_book:** `kunen-set-theory` · **source_curriculum:** `logic-foundations`

### 42.03.06 — The constructible universe \(L\): Con(ZF) ⇒ Con(ZFC + GCH)
- **spec:** Gödel's **inner model** \(L\). Definable power set \(\mathrm{Def}(X)\); the
  hierarchy \(L_0=\varnothing\), \(L_{\alpha+1}=\mathrm{Def}(L_\alpha)\),
  \(L=\bigcup_\alpha L_\alpha\). Prove \(L\models\mathrm{ZF}\) (relativisation, absoluteness of
  \(\Delta_0\) formulas, the reflection/condensation toolkit), the **Condensation Lemma**, and
  the **axiom of constructibility \(V=L\)**. Derive in \(L\): the canonical \(\Sigma_1\)
  **well-ordering \(<_L\)** ⇒ \(L\models\mathrm{AC}\), and via condensation
  \(L\models\mathrm{GCH}\). Conclude the **relative consistency** \(\mathrm{Con}(\mathrm{ZF})
  \Rightarrow\mathrm{Con}(\mathrm{ZFC}+\mathrm{GCH})\) — the "one half" of the CH problem the
  prose in `00.01.01` attributes to Gödel 1940. (Fine structure / \(\square\)/\(\diamondsuit\)
  beyond a one-line pointer is out of scope.)
- **prereqs:** `42.03.01`, `42.03.04`, `42.03.05`, `42.01.01`
- **chapter:** `set-theory-forcing` · **section:** `mathematical-logic`
- **source_book:** `kunen-set-theory` · **source_curriculum:** `logic-foundations`

### 42.03.07 — Forcing I: posets, generic filters, names, and the forcing theorem
- **spec:** The **machinery of forcing** (the flagship, part 1). Work over a countable transitive
  model \(M\models\mathrm{ZFC}\) (or the Boolean-valued / class-forcing framing as the remark).
  **Forcing posets** \(\mathbb P\) and dense sets; **\(M\)-generic filters** \(G\) and their
  existence (Rasiowa–Sikorski, by countability of \(M\)). **\(\mathbb P\)-names**, the valuation
  \(\tau_G\), and the **generic extension** \(M[G]\): prove \(M[G]\models\mathrm{ZFC}\), \(M
  \subseteq M[G]\), \(G\in M[G]\), same ordinals. The **forcing relation** \(p\Vdash\varphi\),
  its **definability inside \(M\)** and the **Truth/Fundamental Theorem of Forcing**
  (\(M[G]\models\varphi\) iff some \(p\in G\) forces \(\varphi\)). **Antichains, the ccc
  (countable chain condition), and cardinal preservation** (ccc ⇒ cofinalities and cardinals are
  absolute between \(M\) and \(M[G]\)). This unit builds the apparatus; `42.03.08` applies it.
- **prereqs:** `42.03.06`, `42.01.01`, `42.01.02`
- **chapter:** `set-theory-forcing` · **section:** `mathematical-logic`
- **source_book:** `kunen-set-theory` · **source_curriculum:** `logic-foundations`

### 42.03.08 — Forcing II: Cohen's independence of CH (and of \(\neg\)CH/AC)
- **spec:** The **flagship payoff**. **Adding Cohen reals**: the poset \(\mathrm{Fn}(\omega\times
  \kappa,2)\) of finite partial functions, its **ccc** (via the \(\Delta\)-system lemma — proved
  here), and the generic injection of \(\kappa\) new reals. Take \(\kappa=\aleph_2^M\): ccc
  preserves cardinals, so \(M[G]\models 2^{\aleph_0}\ge\aleph_2\), i.e.
  \(M[G]\models\neg\mathrm{CH}\). Conclude \(\mathrm{Con}(\mathrm{ZFC})\Rightarrow
  \mathrm{Con}(\mathrm{ZFC}+\neg\mathrm{CH})\) — Cohen 1963, the **independence of CH** (the
  other half of the `00.01.01` prose). Note the dual constructions: forcing **CH** (or **GCH**)
  by collapsing/coding, and the **independence of AC from ZF** via a symmetric / permutation
  submodel (Cohen's symmetric model, or the Fraenkel–Mostowski permutation model as the ZFU
  warm-up). Together with `42.03.06` this closes \(\mathrm{CH}\) as **independent of ZFC**.
- **prereqs:** `42.03.07`, `42.03.04`
- **chapter:** `set-theory-forcing` · **section:** `mathematical-logic`
- **source_book:** `kunen-set-theory` · **source_curriculum:** `logic-foundations`

### 42.03.09 — Martin's Axiom, large cardinals, and a descriptive-set-theory pointer
- **spec:** Three "where it goes next" topics, each at theorem-statement depth (the consistency
  proofs being beyond a single unit). **(i) Martin's Axiom \(\mathrm{MA}_\kappa\)** as the
  product of **iterated/finite-support ccc iteration**: statement, consistency with
  \(\neg\mathrm{CH}\) (Solovay–Tennenbaum), and a sample consequence (MA\(_{\aleph_1}\) ⇒
  \(2^{\aleph_0}>\aleph_1\), every \(\aleph_1\)-union of null sets is null). **(ii) Large
  cardinals**: **inaccessible** (regular strong-limit; \(V_\kappa\models\mathrm{ZFC}\), so
  Con(ZFC) is unprovable in ZFC — the second incompleteness wall, cross-ref `42.04`/`42.01`),
  **measurable** (a \(\kappa\)-complete nonprincipal ultrafilter ⇒ an elementary embedding
  \(j:V\to M\), and \(V\neq L\) by Scott), and the **consistency-strength hierarchy** ordered by
  these embeddings, with a pointer to **AD / determinacy** and the AD↔measurable/Woodin
  consistency linkage. **(iii) Descriptive set theory pointer**: the **Borel and projective
  hierarchies** on Polish spaces (cross-ref the Borel \(\sigma\)-algebra `02.07.01`),
  \(\mathbf\Sigma^1_1\) analytic sets, and the slogan that regularity properties (Lebesgue
  measurability, the perfect-set property) of projective sets are governed by large cardinals /
  determinacy.
- **prereqs:** `42.03.08`, `42.03.04`, `02.07.01`
- **chapter:** `set-theory-forcing` · **section:** `mathematical-logic`
- **source_book:** `kunen-set-theory` · **source_curriculum:** `logic-foundations`

---

## COVERED (not gaps)

- **Cantor's diagonal argument; countable vs uncountable; \(|\mathbb Q|=\aleph_0\),
  \(|\mathbb R|=2^{\aleph_0}\); Schröder–Bernstein at the naive level; the *statement* that CH
  is independent of ZFC** — `00.01.01` (real-numbers unit) gives all of this as naive/prose
  background. The **axiomatic** cardinal theory (`42.03.03`/`.04`) and the **independence proof**
  (`42.03.06`/`.08`) build the machinery `00.01.01` only names; that unit is cross-reffed, not
  re-proposed.
- **Zorn's lemma as a working tool; vector-space basis via Zorn; HB ↔ BPI reverse-math
  remark** — `02.11.02` (Hahn–Banach), `01.01.03` (vector space). These *use* choice; the
  **AC ⇔ Zorn ⇔ well-ordering** equivalence theorem itself is the gap `42.03.05`, which lists
  these as downstream consumers.
- **Induction & well-ordering on \(\mathbb N\)** — `00.12.01`. Transfinite induction/recursion on
  **ordinals** (`42.03.02`) is the gap; `00.12.01` explicitly declines to connect to ordinals.
- **The Borel \(\sigma\)-algebra and measurable spaces** — `02.07.01` (measure theory). The
  set-theoretic **Borel/projective hierarchy & descriptive set theory** (`42.03.09` pointer)
  cross-refs it but is a distinct topic; no DST unit exists.

## OUT OF SCOPE

- **First-order logic syntax/semantics, satisfaction, the completeness theorem, compactness,
  Löwenheim–Skolem, ultraproducts** — owned by **42.01** (FOL substrate). `42.03` cross-refs
  these (forcing's CTM, the BPI⇒compactness remark) but does not build them.
- **Model theory proper — types, saturation, Morley categoricity, stability** — owned by
  **42.02**, which *consumes* the cardinal arithmetic of `42.03.03`/`.04`. Cross-reffed as
  downstream, not built here.
- **Gödel incompleteness / computability / Turing degrees** — owned by **42.04** (and the
  incompleteness side near `42.01`). The inaccessible-cardinal ⇒ unprovability-of-Con(ZFC)
  remark in `42.03.09` cross-refs the second incompleteness theorem rather than proving it.
- **Fine structure of \(L\) (\(\square\), \(\diamondsuit\), morasses); inner-model theory above
  \(L\) (\(L[U]\), \(K\)); the full pcf theory; iterated forcing beyond the MA application;
  proper forcing / PFA; determinacy proofs (AD, \(L(\mathbb R)\), Woodin cardinals)** — all
  beyond single-unit, theorem-level scope. Stated as frontier pointers in `42.03.06`/`.09`,
  not spun into units. Kunen's appendices (logic prerequisites, ordinal-definable sets in full)
  are likewise referenced, not re-proposed.

---

## RETURN SUMMARY
- **Genuine gaps:** 9 (`42.03.01`–`42.03.09`)
- **COVERED:** 4 topic-clusters (all naive/prose background mapped to existing `00.*`/`01.*`/
  `02.*` prerequisite ids; no existing axiomatic set-theory unit — chapter 42 is empty)
- **OUT OF SCOPE:** 4 clusters (FOL `42.01` / model theory `42.02` / computability `42.04`
  siblings; plus advanced inner-model / pcf / iterated-forcing / determinacy frontier)
- **Gap file:** `plans/expansion/logic-foundations/_audit/kunen-set-theory.gaps.md`
