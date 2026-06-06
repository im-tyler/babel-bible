# Audit — Riehl, *Category Theory in Context* (Dover, 2016)

- **source_book:** `riehl-category`
- **source_curriculum:** `logic-foundations`
- **target chapters (this audit OWNS only these):**
  - `content/41-category-theory/04-yoneda-representability/` — frontmatter `section: category-theory`,
    `chapter: yoneda-representability`, id format `41.04.<UU>`
  - `content/41-category-theory/06-kan-extensions/` — frontmatter `section: category-theory`,
    `chapter: kan-extensions`, id format `41.06.<UU>`
  - frontmatter `field: foundations-logic` throughout.
- **date:** 2026-06-06
- **ownership / coordination:** This audit owns **41.04** and **41.06** ONLY. The Mac Lane auditor
  owns **41.01** (categories/functors/nat-transf), **41.02** (limits/colimits), **41.03**
  (adjunctions), **41.05** (monads/algebras). No units are proposed in those chapters here. The
  units below cross-reference Mac Lane's chapters as **co-produced in-spine prereqs**
  (ids `41.01.*`, `41.02.*`, `41.03.*`, `41.05.*`) so the producer can wire the DAG once the
  sibling chapters land. Conversely Mac Lane's adjunction/limit units consume my Yoneda (41.04),
  and my Kan-extension capstone (41.06.02) recovers their limits/adjoints/monads as special cases.

## Verdict

The entire `41-category-theory` section is **freshly scaffolded and empty** — all six chapter
directories (`01-…` through `06-…`) contain only `.gitkeep`. The *only* category-theory prose
anywhere in `content/` is the single dense survey unit
**`01.02.09`** (*Category, functor, natural transformation, the Yoneda lemma, and adjunction*,
filed under foundations/groups), which is a one-unit whirlwind tour. It **states** the Yoneda
lemma with a full proof and **sketches** the Yoneda-embedding fullness/faithfulness (Ex. 5),
representability and uniqueness of representing objects (Ex. 6), the (co)limit-as-universal-cone
viewpoint, and adjunction — but it does **not** give representability, the Yoneda embedding, the
density theorem, the co-Yoneda lemma, ends/coends, weighted limits, or Kan extensions their own
standalone depth. It is reused as a prerequisite below, never re-proposed.

**The 41.04 / 41.06 chapters are genuine green-field.** Verification:

- **Kan extensions of functors** (`Lan_K F` / `Ran_K F`): the literal phrase "left/right Kan
  extension" appears in `content/` only as **passing remarks** inside the homotopy/simplicial
  spine — `03.12.24` (geometric realisation "is a left Kan extension along Yoneda", one line in a
  proof sketch) and `03.12.25` (the "Kan extension *condition*" = horn-filling for Kan *complexes*,
  an unrelated notion). The Bousfield–Kan, Kan-complex, Kan-fibration, and Dold–Kan hits are all
  distinct objects. **No unit develops the universal property of Kan extensions, the pointwise
  (co)end formula, existence, preservation by adjoints, or "all concepts are Kan extensions."**
- **Ends / coends / the (co)end calculus:** the word "coend" appears once, as a bare formula for
  geometric realisation in `03.12.24`; the end/coend *calculus* (wedges, the Fubini theorem,
  (co)end formulas for natural transformations and Kan extensions, weighted limits) is **entirely
  absent**. (All other `coend`/`end`/`weighted` grep hits are false positives: geography, ergodic
  theory, GIT weights, etc.)
- **Representable functors / universal elements / the Yoneda embedding as a standalone / the
  density theorem / co-Yoneda:** only `01.02.09` (sketch) and `04.02.01` (functor-of-points
  *application* to schemes, which cites Yoneda but proves nothing about it). No standalone unit.

Prereq ids verified to exist on disk: **`01.02.09`** (Yoneda/adjunction survey),
**`01.02.30`** (chain complex in an abelian category), **`01.02.33`** (abelian category / AB axioms),
**`04.02.01`** (scheme / functor of points), **`04.03.06`** (derived functors and Ext),
**`04.03.11`** (derived category), **`04.03.12`** (`RF`/`LF` via derived categories). Ids of the
form `41.01.*`–`41.05.*` are **co-produced sibling units** (Mac Lane's chapters) listed as prereqs
for DAG wiring, not claimed by this audit.

---

## GENUINE GAPS

### 41.04.01 — Representable functors, universal elements, and universal properties as representability
- **spec:** Develop **representable functors** as the organising lens: a `Set`-valued functor
  `F: C → Set` (resp. presheaf `C^op → Set`) is **representable** when `F ≅ C(c, –)` (resp.
  `C(–, c)`), and the data of such an isomorphism is equivalently a **universal element**
  `x ∈ F(c)` (the "functor of points" viewpoint). Prove that a representing object is **unique up
  to unique isomorphism**, and reframe the standard **universal properties** — initial/terminal
  objects, products/coproducts, (co)equalisers, the free–forgetful constructions — uniformly as
  representability of an associated `Set`-valued functor (e.g. a product represents
  `X ↦ C(X,A)×C(X,B)`; a limit represents `X ↦ Cone(X,D)`; a left adjoint value `F c` represents
  `d ↦ D(Fc, d)` once 41.03 lands). Give worked **examples**: the forgetful functor `Grp → Set`
  represented by `ℤ`, `U: Ring → Set` by `ℤ[x]`, the contravariant power-set `2^(–)` represented
  by `2` (a subobject classifier preview), the tangent/points functors. Establish that
  representability is the precise sense in which "a universal property determines an object."
  *(Expands `01.02.09`'s Def. "representation of a functor" and its Ex. 6 uniqueness sketch into a
  full standalone treatment; cross-references it.)*
- **prereqs:** `41.01.*` (categories/functors/nat-transf — Mac Lane, co-produced), `01.02.09`
- **chapter:** `yoneda-representability` · **section:** `category-theory` · **field:** `foundations-logic`
- **source_book:** `riehl-category` · **source_curriculum:** `logic-foundations`

### 41.04.02 — The Yoneda lemma, the Yoneda embedding, and the density theorem
- **spec:** State and prove the **Yoneda lemma** `Nat(C(c,–), F) ≅ F(c)` (and the contravariant /
  presheaf form `Nat(C(–,c), F) ≅ F(c)`), naturally in `c` and `F`, with the identity morphism as
  the universal probe. Derive the **Yoneda embedding** `よ: C ↪ [C^op, Set]`, `c ↦ C(–,c)`, and
  prove it is **full and faithful** (so `C(c,c') ≅ Nat(よc, よc')`); deduce that an object is
  determined up to isomorphism by its presheaf of points and classify natural transformations
  between hom-functors. Give **Cayley's theorem as Yoneda for one-object categories** (a monoid /
  group embeds in its own endofunctor monoid via left translation). Prove the **density theorem /
  co-Yoneda lemma**: every presheaf is canonically a **colimit of representables** (the
  category-of-elements colimit), i.e. `F ≅ colim_{(c,x)∈∫F} よc`, and present the **ninja-Yoneda**
  coend form `F c ≅ ∫^d C(d,c) × F d` / `F c ≅ ∫_d Set(C(c,d), F d)` as a cross-ref to 41.06.01.
  **State** the 2-categorical Yoneda lemma (`[C^op, Cat]` enrichment) as a pointer. Cross-ref
  `04.02.01` (the functor-of-points of a scheme is exactly the Yoneda embedding restricted to
  representable presheaves on `CRing`).
- **prereqs:** `41.04.01`, `41.01.*` (Mac Lane, co-produced), `41.02.*` (limits/colimits — Mac Lane,
  for the density-as-colimit statement), `01.02.09`
- **chapter:** `yoneda-representability` · **section:** `category-theory` · **field:** `foundations-logic`
- **source_book:** `riehl-category` · **source_curriculum:** `logic-foundations`

### 41.06.01 — Ends, coends, and the calculus of (co)ends: Fubini, weighted limits, and the natural-transformation coend
- **spec:** Define **ends** `∫_c F(c,c)` and **coends** `∫^c F(c,c)` of a bifunctor
  `F: C^op × C → D` via (co)wedges and their universal property; identify the end as an equaliser
  and the coend as a coequaliser of the product/coproduct over hom-sets. Prove the headline
  formulas of the **calculus**: the **set of natural transformations as an end**
  `Nat(F,G) ≅ ∫_c D(Fc, Gc)`; the **Fubini theorem** for iterated (co)ends (interchange of order);
  the **co-Yoneda / density** coend identities `∫^c C(c,–)×Fc ≅ F` and `∫_c Set(C(–,c),Fc) ≅ F`
  (feeding 41.04.02). Develop **weighted (co)limits** `lim^W F = ∫_c W c ⋔ F c` and
  `colim^W F = ∫^c W c · F c` as the (co)end against a weight functor, recovering ordinary conical
  (co)limits as the terminal/representable-weight case and exhibiting weighted limits as the right
  language for the pointwise Kan-extension formula in 41.06.02. Worked examples: tensor product of
  functors `F ⊗_C G = ∫^c Fc × Gc`, geometric realisation as a coend
  `|X| = ∫^{[n]} X_n · Δ^n` (cross-ref `03.12.24`), the bar construction as a pointer.
- **prereqs:** `41.02.*` (limits/colimits — Mac Lane, co-produced), `41.04.02` (Yoneda — for the
  natural-transformation end and the co-Yoneda identities), `01.02.09`
- **chapter:** `kan-extensions` · **section:** `category-theory` · **field:** `foundations-logic`
- **source_book:** `riehl-category` · **source_curriculum:** `logic-foundations`

### 41.06.02 — Kan extensions: the universal property, the pointwise (co)end formula, and "all concepts are Kan extensions"
- **spec:** Define **left and right Kan extensions** `Lan_K F` / `Ran_K F` of `F: C → E` along
  `K: C → D` by their universal property (initial/terminal among functors `D → E` equipped with a
  comparison 2-cell), equivalently as the left/right adjoints to restriction `K^*: [D,E] → [C,E]`
  when those exist. Prove the **pointwise formula** as a weighted (co)limit / (co)end (building on
  41.06.01): `Lan_K F (d) ≅ ∫^c D(Kc, d) · F c ≅ colim_{(K↓d)} F` and
  `Ran_K F (d) ≅ ∫_c F c ^ D(d, Kc) ≅ lim_{(d↓K)} F`; give **existence** (E (co)complete + C small)
  and **preservation by adjoints / left-exact functors**. Develop the capstone **"all concepts are
  Kan extensions"**: recover **(co)limits** as Kan extension along `C → 1`, **adjoints** (`G ⊣ F`
  iff `Lan_F 1_C ≅ G` with the unit as universal 2-cell), and the **Yoneda lemma itself**
  (`Lan_よ` / the density formula) as special cases; cross-ref the corresponding Mac Lane units
  (`41.02.*`, `41.03.*`). Cover **codensity monads** `Ran_G G` as the monad attached to a functor
  (cross-ref Mac Lane's monads `41.05.*`), and the **nerve–realisation / density** adjunction
  `(Lan_よ F ⊣ N_F)` from a functor `F: C → E` into a cocomplete `E`. **State** the homotopy /
  derived Kan extension as the model-categorical or ∞-categorical lift, cross-referencing the
  derived-functor corpus (`04.03.06`, `04.03.11`, `04.03.12`) and `03.12.*`.
- **prereqs:** `41.06.01` (ends/coends, weighted limits), `41.04.02` (Yoneda/density),
  `41.02.*` (limits/colimits — Mac Lane), `41.03.*` (adjunctions — Mac Lane), `41.05.*`
  (monads — Mac Lane, for codensity), `01.02.09`
- **chapter:** `kan-extensions` · **section:** `category-theory` · **field:** `foundations-logic`
- **source_book:** `riehl-category` · **source_curriculum:** `logic-foundations`

---

## COVERED (not gaps)

- **Yoneda lemma — statement and proof of the bijection `Nat(C(A,–),F) ≅ F(A)`** — `01.02.09`
  ("Key theorem with proof" section) already states and fully proves it, including the contravariant
  form (Ex. 3). `41.04.02` does **not** re-prove the bare bijection in isolation; it builds the
  **embedding (full-and-faithful), Cayley-as-Yoneda, the density theorem, and the co-Yoneda/ninja
  form** on top of it, and cross-references `01.02.09` as the prerequisite statement. (Splitting
  Yoneda fully into 41.04 with no overlap is impossible since 01.02.09 is the spine's only existing
  category-theory unit; the gap is the **standalone depth**, not the bare lemma.)
- **Representation of a functor — definition + uniqueness of representing object** — sketched in
  `01.02.09` (Def. "representation of a functor"; Ex. 6 proves `A ≅ A'` for two representations).
  `41.04.01` promotes this to a full unit with the universal-element equivalence and the systematic
  re-reading of universal properties; the sketch is the seed, cited not duplicated.
- **Functor of points / representability applied to schemes** — `04.02.01` (scheme) develops the
  functor of points and cites Yoneda for `Sch ↪ [CRing, Set]`. This is the **application**;
  `41.04.02` supplies the underlying embedding theorem and cross-refs it.
- **Hom-functors are functors; covariant/contravariant; naturality square** — `01.02.09`
  (Formal-definition section + Prop. 1). Reused, not re-proposed.
- **Adjunction (unit/counit, triangle identities), uniqueness of adjoints, right adjoints preserve
  limits, AFT statement** — `01.02.09` (Advanced/Master sections) **and** Mac Lane's `41.03.*`.
  Owned by Mac Lane; `41.06.02` recovers adjoints **as Kan extensions** and cross-refs, does not
  re-derive the adjunction theory.
- **(Co)limits as universal cones, products/equalisers/pullbacks as special cases** — `01.02.09`
  (Master) and Mac Lane's `41.02.*`. `41.06.01`/`41.06.02` use them (weighted/pointwise formulas)
  and cross-ref; not re-proposed here.
- **Geometric-realisation coend `|X| = ∫^{[n]} X_n·Δ^n` and "realisation = Lan along Yoneda"** —
  `03.12.24` / `03.12.25` state these as one-line facts inside the simplicial spine. `41.06.01`/
  `41.06.02` supply the **general coend calculus and Kan-extension theory** these are instances of,
  and cross-reference the simplicial units rather than duplicating their homotopy content.
- **Derived functors `RF`/`LF`, derived/triangulated categories** — `04.03.06`, `04.03.11`,
  `04.03.12`, `04.03.10`. `41.06.02` only **states** homotopy/derived Kan extensions as a pointer
  and cross-refs this corpus; the derived-functor machinery is not rebuilt.
- **Monads / Eilenberg–Moore & Kleisli algebras** — owned by Mac Lane `41.05.*`. `41.06.02` touches
  monads only via **codensity monads** `Ran_G G` and cross-refs 41.05; the monad theory is not
  claimed.

## OUT OF SCOPE

- **41.01 / 41.02 / 41.03 / 41.05 content** (categories, functors, natural transformations,
  limits/colimits, adjunctions, monads/algebras) — owned by the **Mac Lane auditor**. Not proposed
  here per the coordination split; only cross-referenced.
- **Full enriched / `V`-category theory and the enriched (co)end / weighted-limit calculus in
  generality** — Riehl develops weighted limits enriched over a monoidal `V`; this audit keeps
  41.06.01 to the **`Set`-/`Ab`-enriched (ordinary) calculus** sufficient to state Kan extensions,
  with enriched generality flagged as a pointer. A standalone enriched-category-theory unit (Kelly)
  is a candidate for a later 41.* slot, not manufactured from this source.
- **Full ∞-categorical / quasi-category development of Kan extensions and (co)ends** — the
  `(∞,1)`-lift; partially present in the homotopy spine (`03.12.43` quasi-categories,
  `03.12.37` homotopy colimits / Bousfield–Kan). `41.06.02` states the homotopy/derived Kan
  extension as a cross-ref pointer; the full ∞-categorical apparatus (Lurie) is out of scope for
  this ordinary-category-theory chapter.
- **Riehl's Chapter-on-model-categories / homotopy-theory appendix material** — already covered by
  the `03.12.*` homotopy spine (model categories, Quillen functors/equivalences, Bousfield
  localisation); referenced, not re-proposed.

---

## RETURN SUMMARY
- **Genuine gaps:** 4 — `41.04.01`, `41.04.02` (chapter 41.04), `41.06.01`, `41.06.02` (chapter 41.06).
- **COVERED:** 9 topics (chiefly `01.02.09` for the bare Yoneda lemma / representation / adjunction
  survey; `04.02.01` for functor-of-points; `41.02/03/05.*` Mac Lane; `04.03.*` derived functors).
- **OUT OF SCOPE:** 4.
- **Stayed strictly within 41.04 and 41.06; no units proposed in Mac Lane's 41.01/02/03/05.**
- **Gap file:** `plans/expansion/logic-foundations/_audit/riehl-category.gaps.md`
