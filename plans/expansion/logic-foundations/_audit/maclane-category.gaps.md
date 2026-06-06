# Audit: Mac Lane — *Categories for the Working Mathematician* (Ch. I–VI)

`source_book: maclane-category`
`source_curriculum: logic-foundations`
`section: category-theory` (NEW section `content/41-category-theory/`, field `foundations-logic`)

Chapters owned by this audit (prefix 41): `41.01 categories-functors-natural-transformations`,
`41.02 limits-colimits`, `41.03 adjunctions`, `41.05 monads-algebras`. All four chapter dirs are
empty scaffolds, so each Mac Lane headline construction is verified against the WHOLE live corpus.

**Single most important benchmark — `01.02.09`.** The corpus already carries one dense survey unit,
`content/01-foundations/02-groups/01.02.09-category-functor-natural-transformation-yoneda-adjunction.md`,
which compresses category/functor/natural-transformation/Yoneda/adjunction/(co)limits/AFT into a
SINGLE unit at survey depth: it *states* the definitions, *states* (and proves) Yoneda, *states* the
adjunction bijection + triangle identities, *states* the (co)limit-as-universal-cone theorem, and merely
*states* the AFT and RAPL without the General/Special AFT proofs, solution-set machinery, the
limits-from-products-and-equalizers construction, filtered colimits, monads, Eilenberg–Moore/Kleisli, or
Beck monadicity. The chapter-41 units below give each topic its proper standalone ~6000-word depth and
cross-ref `01.02.09` as the survey rather than duplicate it. Where `01.02.09` only sketches (AFT,
reflective subcategories, limit construction), the new units expand to full statements and proofs.

**Coordination with the Riehl auditor (do NOT collide).** Chapters `41.04 yoneda-representability` and
`41.06 kan-extensions` are owned by the Riehl auditor. I LEAVE to Riehl: the Yoneda lemma as a
standalone deep unit, the Yoneda embedding / density, representable functors and universal elements,
the (co)Yoneda / co-density formulas, and ALL of Kan extensions (pointwise Kan extensions via
(co)limits, Kan extensions along Yoneda, the "all concepts are Kan extensions" slogan, codensity
monads). My adjunction unit (41.03) CROSS-REFS Yoneda (→ 41.04) for uniqueness-of-adjoints and may
reference Kan extensions (→ 41.06) without owning them; my monad unit (41.05) notes the codensity-monad
connection as a forward cross-ref to 41.06, not a claim of ownership.

Cross-references to the existing concrete categorical corpus are stamped explicitly so the producer does
NOT reprove covered material: abelian/Grothendieck AB5 + exact filtered colimits live in `01.02.33`;
tensor–hom adjunction in `01.02.10`; free group / free product in `01.02.20`; functor of points in
`04.02.01`; sheafification as a reflective localization in `04.01.03`; groupoid-as-small-category in
`03.03.13`; (co)limits in the homotopy/model-category setting in `03.12.*`.

---

## GENUINE GAPS

### 41.01.01 — Categories, functors, and the duality principle
- **id:** `41.01.01`
- **title:** Categories, functors, isomorphisms/mono/epi, opposite and product categories, and the duality principle
- **spec:** Categories (objects, hom-sets, composition, identities, the two axioms), size (small/locally small/large), and the metacategory subtleties; the gallery of examples (**Set**, **Grp**, **Top**, **R-Mod**, posets/monoids as one-object categories, discrete and **2**); special morphisms — isomorphism, monomorphism, epimorphism, split mono/epi, and why epi ≠ surjective in general (**Ring**: ℤ→ℚ); the opposite category 𝒞ᵒᵖ and the *duality principle* (every theorem has a dual got by reversing arrows); product, subcategory (full/wide), and the covariant/contravariant Hom-functors as the running examples of functors; full/faithful/essentially-surjective functors and the notion of (iso)morphism-reflecting functor. Mac Lane Ch. I §§1–8, Ch. II §§1–4.
- **prereqs:** `01.02.01` (group), `01.02.06` (ring/ideal — for the **Ring** epi example)
- **co-produced (in-spine):** is the L0 root the other chapter-41 units build on; cross-refs `01.02.09` (the survey) and `03.03.13` (groupoid as a small category).
- **chapter:** `01-categories-functors-natural-transformations` — `section: category-theory`, `chapter: 01-categories-functors-natural-transformations`, field `foundations-logic`
- **level:** L0

### 41.01.02 — Natural transformations, functor categories, equivalence of categories, and comma categories
- **id:** `41.01.02`
- **title:** Natural transformations, the interchange law, functor categories, equivalence of categories, and comma categories
- **spec:** Natural transformations and the naturality square; vertical and horizontal composition, whiskering, and the *interchange law* (the 2-categorical structure of **Cat**); the functor category 𝒟^𝒞 and natural isomorphisms; *equivalence of categories* (fully-faithful + essentially-surjective ⇔ existence of a quasi-inverse, with the axiom-of-choice subtlety) versus isomorphism of categories, worked on **FinVect** ≃ skeleton and **Set**-of-finite-sets; the comma category (F↓G), its special cases — slice 𝒞/c, coslice c/𝒞, arrow category 𝒞², and the category of elements ∫F — as the universal home for "objects equipped with a map"; how a universal arrow is an initial object of a comma category (sets up adjunctions and limits). Mac Lane Ch. I §4, Ch. II §§4–6, Ch. IV §1 (comma categories).
- **prereqs:** `41.01.01`
- **chapter:** `01-categories-functors-natural-transformations` — `section: category-theory`, `chapter: 01-categories-functors-natural-transformations`, field `foundations-logic`
- **level:** L1
- **cross-ref:** Yoneda's "objects ≅ representables" sharpening of equivalence is LEFT to Riehl's `41.04`; the category-of-elements ∫F appears there too — this unit OWNS comma categories as a general construction and cross-refs `41.04` for the presheaf-specific ∫F.

### 41.02.01 — Limits and colimits as universal cones; (co)products, (co)equalizers, pullbacks/pushouts, completeness
- **id:** `41.02.01`
- **title:** Limits and colimits as universal cones: products, equalizers, pullbacks, terminal objects, and completeness
- **spec:** Diagrams over a small index category J, cones and the limit as a terminal cone / representing object of X↦Cone(X,D); colimits dually as initial cocones; the catalogue by shape of J — terminal/initial objects (J empty), products/coproducts (J discrete), equalizers/coequalizers (parallel pair), pullbacks/pushouts (cospan/span) — with worked computations in **Set**, **Grp**, **R-Mod** (kernel = equalizer, quotient = coequalizer/pushout, fibre product); (co)completeness and finite (co)completeness; the limit as a right adjoint to the constant/diagonal functor Δ: 𝒞→𝒞^J. Mac Lane Ch. III §§3–4, Ch. V §§1–2.
- **prereqs:** `41.01.02`; `01.02.06` (ring/ideal — for kernel/quotient examples), `01.02.10` (modules)
- **co-produced (in-spine):** the diagonal-adjoint remark forward-refs `41.03.01` (adjunctions).
- **chapter:** `02-limits-colimits` — `section: category-theory`, `chapter: 02-limits-colimits`, field `foundations-logic`
- **level:** L1
- **cross-ref:** concrete (co)limits in homotopy theory (homotopy colimits, model categories) live in `03.12.31`/`03.12.37` and are NOT reproved; the AB-axiom exactness of filtered colimits in abelian categories is `01.02.33`.

### 41.02.02 — Construction of limits, preservation/creation/reflection, and filtered colimits
- **id:** `41.02.02`
- **title:** Limits from products and equalizers; preservation, creation, and reflection of limits; filtered colimits and finitely-presentable objects
- **spec:** The *existence theorem* — a category with all (small) products and equalizers is complete, with the explicit equalizer-of-two-product-maps construction of an arbitrary limit (dually colimits from coproducts and coequalizers); a functor *preserving*, *creating*, and *reflecting* limits, and the theorem that a category with creation-of-limits along a forgetful functor inherits completeness (**Grp**, **R-Mod**, **Top** are complete because the forgetful functor to **Set** creates limits); *filtered* (and directed) colimits, why they commute with finite limits in **Set**, and *finitely-presentable / compact* objects as those whose Hom commutes with filtered colimits, with the finitely-presented-module example. Mac Lane Ch. V §§1–4, Ch. IX §1 (filtered colimits).
- **prereqs:** `41.02.01`
- **chapter:** `02-limits-colimits` — `section: category-theory`, `chapter: 02-limits-colimits`, field `foundations-logic`
- **level:** L2
- **cross-ref:** filtered-colimit *exactness* in Grothendieck/abelian categories (AB5) is stated & used in `01.02.33` — this unit owns the general construction/commutation and cross-refs `01.02.33` for the abelian payoff; the locally-presentable-category machinery beyond finitely-presentable objects is OUT OF SCOPE (see trailer).

### 41.03.01 — Adjunctions: the two definitions, triangle identities, and the free–forgetful gallery
- **id:** `41.03.01`
- **title:** Adjunctions — hom-set vs unit/counit definitions, the triangle identities, and free–forgetful adjunctions
- **spec:** The hom-set definition Hom_𝒟(FC,D) ≅ Hom_𝒞(C,GD) natural in both variables; the unit/counit definition with the *triangle identities* (ε F ∘ Fη = id, Gε ∘ ηG = id); the full *equivalence of the two definitions* (universal arrows ⇔ natural bijection ⇔ unit+counit+triangles), each direction proved; uniqueness of adjoints up to natural isomorphism (via Yoneda, cross-ref 41.04); the gallery of free–forgetful adjunctions across algebra — free group/monoid/module/vector-space, abelianization, group-completion, tensor–hom (-⊗B ⊣ Hom(B,-)) — and adjunctions as universal arrows from/to a functor. Mac Lane Ch. IV §§1–2.
- **prereqs:** `41.01.02`, `41.02.01`; `01.02.20` (free group/free product), `01.02.10` (tensor–hom)
- **co-produced (in-spine):** uniqueness-of-adjoints cross-refs Riehl's `41.04` (Yoneda); used by `41.03.02` and `41.05.01`.
- **chapter:** `03-adjunctions` — `section: category-theory`, `chapter: 03-adjunctions`, field `foundations-logic`
- **level:** L2
- **cross-ref:** expands the survey-depth adjunction material of `01.02.09`; the tensor–hom adjunction construction itself is `01.02.10` (cross-ref, do not reprove).

### 41.03.02 — RAPL, reflective subcategories, and the adjoint functor theorems
- **id:** `41.03.02`
- **title:** Right adjoints preserve limits, reflective subcategories, and the General and Special Adjoint Functor Theorems
- **spec:** RAPL/LAPC (right adjoints preserve limits, left adjoints preserve colimits) with the Hom-functor proof, and a converse failing without smallness; *reflective subcategories* (a full subcategory whose inclusion has a left adjoint), idempotent monads, and the localization examples (sheafification 04.01.03, abelianization, Stone–Čech as reflections); the *General Adjoint Functor Theorem* — a limit-preserving functor from a complete locally-small category has a left adjoint iff it satisfies the *solution-set condition* — proved via the comma category (F↓d) having a weakly-initial set hence an initial object; the *Special Adjoint Functor Theorem* under well-poweredness + a cogenerating set; worked existence of free objects (free group, free complete lattice failure) from the theorem. Mac Lane Ch. V §§6–8.
- **prereqs:** `41.03.01`, `41.02.02` (completeness, creation of limits)
- **chapter:** `03-adjunctions` — `section: category-theory`, `chapter: 03-adjunctions`, field `foundations-logic`
- **level:** L3
- **cross-ref:** `01.02.09` only *states* the AFT and RAPL; this unit gives the full GAFT/SAFT proofs and the solution-set machinery. Reflective sheafification is `04.01.03` (cross-ref, do not reprove); the AFT-as-citation in `03.12.25` (Sing preserves limits) is sourced here.

### 41.05.01 — Monads, the Eilenberg–Moore and Kleisli categories
- **id:** `41.05.01`
- **title:** Monads from adjunctions, T-algebras / the Eilenberg–Moore category, and the Kleisli category
- **spec:** A monad (T, η, μ) on 𝒞 and the monad laws; *every adjunction generates a monad* (T = GF) and its dual comonad; T-algebras and the *Eilenberg–Moore category* 𝒞^T with its forgetful/free adjunction; the *Kleisli category* 𝒞_T as the full subcategory of free algebras and as the initial resolution of the monad; the comparison functor and the fact that 𝒞^T is the *terminal* and 𝒞_T the *initial* adjunction inducing T; worked monads — free monoid/group monad, the powerset (covariant) monad, the maybe/exception and list monads as algebraic structure-bearers, and "T-algebras = sets with the structure T encodes". Mac Lane Ch. VI §§1–5.
- **prereqs:** `41.03.01` (adjunctions), `41.01.02`
- **co-produced (in-spine):** consumed by `41.05.02`.
- **chapter:** `05-monads-algebras` — `section: category-theory`, `chapter: 05-monads-algebras`, field `foundations-logic`
- **level:** L2
- **cross-ref:** the codensity-monad construction (a monad from a functor with no left adjoint, via a right Kan extension) is LEFT to Riehl's `41.06` and only forward-referenced here.

### 41.05.02 — Beck's monadicity theorem and Lawvere algebraic theories
- **id:** `41.05.02`
- **title:** Beck's monadicity theorem, monadic adjunctions, and Lawvere algebraic theories
- **spec:** *Monadic* adjunctions (the comparison functor an equivalence) and *Beck's (precise) monadicity theorem* — G is monadic iff it has a left adjoint, reflects isomorphisms, and creates coequalizers of G-split pairs — with the crude/reflexive variants; verification that **Grp**, **R-Mod**, **CompactHausdorff** (the ultrafilter monad) are monadic over **Set** while **Top**, **Field**, **Poset** are not, and what the failure diagnoses; *Lawvere theories* / finitary algebraic theories as the syntactic presentation of finitary monads on **Set**, the equivalence (Lawvere theories ⇔ finitary monads ⇔ varieties of algebras), and how this makes "algebraic = monadic over Set" precise. Mac Lane Ch. VI §§6–8; Lawvere's functorial semantics.
- **prereqs:** `41.05.01`, `41.02.02` (creation/coequalizers), `41.03.02` (AFT — for the monad–theory correspondence existence)
- **chapter:** `05-monads-algebras` — `section: category-theory`, `chapter: 05-monads-algebras`, field `foundations-logic`
- **level:** L3
- **cross-ref:** universal-algebra/variety background may cross-ref any `01.02` algebraic-structures unit; the topos-theoretic "algebraic theory in a topos" generalization is OUT OF SCOPE.

---

## COVERED (not gaps)

- **The survey: category, functor, natural transformation, Yoneda, adjunction, (co)limits-as-cones, AFT/RAPL statements** — `01.02.09`. This is a single compressed survey unit; the chapter-41 units are AGAINST it (expand the sketched AFT/reflective/limit-construction/monad material to standalone depth) and cross-ref it. Not a duplication.
- **Yoneda lemma (deep standalone), Yoneda embedding, representable functors, universal elements, density, co-Yoneda** — LEFT to Riehl's `41.04 yoneda-representability`. `01.02.09` proves a survey-level Yoneda; the deep unit is Riehl's. Not proposed here.
- **Kan extensions (pointwise via (co)limits, along Yoneda, "all concepts are Kan extensions", codensity monads)** — LEFT to Riehl's `41.06 kan-extensions`. My 41.03/41.05 only forward-cross-ref these. Not proposed here.
- **Abelian categories, Grothendieck AB1–AB5, exact filtered colimits, enough injectives** — `01.02.33`. My `41.02.02` owns the *general* filtered-colimit construction/commutation; the abelian *exactness* payoff is `01.02.33` and is cross-referenced, not reproved.
- **Tensor–hom adjunction and tensor product universal property** — `01.02.10`. Used as the model example in `41.03.01`; its construction is not reproved.
- **Functor of points / representable presheaves in algebraic geometry** — `04.02.01`. A Yoneda application; cross-ref only.
- **Sheafification as a reflective localization (left adjoint to inclusion)** — `04.01.03`. Cited as a reflective-subcategory example in `41.03.02`; not reproved.
- **Groupoid as a small category with invertible morphisms** — `03.03.13`. A categorical example, cross-ref only.
- **Triangulated / derived / Verdier-quotient categories, model categories, homotopy (co)limits, simplicial sets** — `04.03.23`, `03.12.31`, `03.12.33`, `03.12.37`, `03.12.25`. These are concrete categorical *applications* downstream of chapter 41; not duplicated. (`03.12.25` cites the AFT, which `41.03.02` now sources.)

## OUT OF SCOPE

- **Locally presentable & accessible categories (Gabriel–Ulmer), Adámek–Rosický apparatus** — beyond finitely-presentable objects (covered in `41.02.02`), the full locally-presentable/accessible-category theory is a large apparatus with limited theorem-level payoff at this tier; not proposed as a unit.
- **2-categories, bicategories, and the formal theory of monads** — Mac Lane's later 2-categorical material (Ch. XII) is a separate apparatus; the interchange law / **Cat** as a 2-category is folded into `41.01.02` at the level needed, but the formal theory of monads in a 2-category is out of scope.
- **Monoidal categories, coherence, and the coherence ("all diagrams commute") theorem (Mac Lane Ch. VII–XI)** — these belong to a *separate* monoidal/enriched-categories chapter, not to the four chapters audited here; explicitly not proposed under 41.01/02/03/05.
- **Topos theory / elementary topoi** — outside Mac Lane CWM's scope (it is in *Sheaves in Geometry and Logic*); not proposed.
