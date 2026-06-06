# Spine 7 (logic-foundations) — collision-checked production plan

TWO new sections (prefix-25 collides CS+prose-logic, so formal logic gets a fresh prefix):
- `content/42-mathematical-logic` (section `mathematical-logic`, prefix 42, field `foundations-logic`):
  4 chapters, 34 units. Enderton/Marker/Kunen/Soare.
- `content/41-category-theory` (section `category-theory`, prefix 41, field `foundations-logic`):
  6 chapters, 12 units. Mac Lane (41.01/02/03/05) + Riehl (41.04/06).
46 units total, 8 dependency waves. Both sections share the `foundations-logic` field → the
`logic-foundations` lens, so the spine groups with the existing prose-logic + the 01.02.09 cat unit.

## Dedup / collision resolution
- No id collisions — each book owns disjoint chapters. 42.01 Enderton, 42.02 Marker, 42.03 Kunen,
  42.04 Soare; 41.01/02/03/05 Mac Lane, 41.04/06 Riehl (the two category auditors coordinated:
  Riehl owns Yoneda/representability + Kan-extensions/ends-coends, Mac Lane the rest).
- Greenfield: NO formal metalogic, model theory, axiomatic set theory, computability theory, or
  standalone category theory existed. The elementary prose-logic 24/25-logic units (truth tables,
  syllogisms, fallacies) are superseded-in-depth, cross-ref'd, not duplicated. The single dense
  survey 01.02.09 (category/functor/nat-transf/Yoneda/adjunction) is expanded into proper standalone
  units and cross-ref'd, not redone.
- CROSS-CHAPTER ownership seams (audited): incompleteness (42.01.09) owns Gödel-numbering/diagonal/
  the two theorems; computability (42.04) owns recursion theory; 42.01.08 imports the recursive-function
  definition as a cross-ref. Church's theorem / Entscheidungsproblem → 42.01.10 (FOL undecidability),
  consuming 42.04. Compactness/L-S THEOREMS → 42.01; their model-building APPLICATIONS → 42.02.
  Cardinal arithmetic → 42.03; consumed by Morley categoricity 42.02.06. Skolem's paradox stated
  42.01, resolved 42.03.
- CROSS-SPINE prereqs (shipped, cross-ref don't reprove): 01.02.09 (cat survey), abelian/derived-cat
  material 01.02.33/03.12.*, ACF/Nullstellensatz 04.02.07, Galois 01.02.13, finite fields 21.02.01,
  CS complexity 25.03.01 (P/NP — distinct from computability), number theory 21.01.08 (MRDP).

## Master unit list
### content/42-mathematical-logic (Enderton/Marker/Kunen/Soare)
42.01 first-order-logic-completeness [Enderton]: 01 propositional logic as a formal system · 02 propositional compactness · 03 first-order languages/syntax · 04 structures & Tarski semantics · 05 deductive calculus & soundness · 06 Gödel completeness (Henkin) · 07 compactness & Löwenheim-Skolem for FOL · 08 representability of recursive functions · 09 Gödel numbering, fixed-point lemma, incompleteness (1st/2nd/Tarski) · 10 the Entscheidungsproblem, Church's theorem & decidable theories
42.02 model-theory [Marker]: 01 structures/embeddings/elementary equivalence · 02 compactness & the method of diagrams · 03 types & the omitting types theorem · 04 saturation/homogeneity/monster models · 05 quantifier elimination & model-completeness · 06 categoricity (Ryll-Nardzewski/Morley/Baldwin-Lachlan) · 07 strongly minimal sets, Morley rank & stability · 08 o-minimality & cell decomposition
42.03 set-theory-forcing [Kunen]: 01 ZFC axioms & the cumulative hierarchy · 02 ordinals & transfinite recursion · 03 cardinals & aleph arithmetic · 04 cofinality/cardinal exponentiation/König/SCH · 05 the Axiom of Choice & equivalents · 06 the constructible universe L & Con(GCH) · 07 forcing I: posets/generics/names/the fundamental theorem · 08 forcing II: Cohen & the independence of CH · 09 Martin's Axiom & large cardinals
42.04 computability-degrees [Soare]: 01 models of computation & the Church-Turing thesis · 02 the halting problem, undecidability & the recursion theorem · 03 computably enumerable sets (creative/simple) · 04 Turing reducibility, oracles & the jump · 05 the arithmetical hierarchy & Post's theorem · 06 the Turing degrees & the priority method · 07 unsolvable problems: the word problem & MRDP/Hilbert's tenth
### content/41-category-theory (Mac Lane + Riehl)
41.01 categories-functors-natural-transformations [Mac Lane]: 01 categories/functors/duality · 02 natural transformations/functor categories/equivalence/comma
41.02 limits-colimits [Mac Lane]: 01 limits & colimits as universal cones · 02 limits from products+equalizers/preservation/filtered colimits
41.03 adjunctions [Mac Lane]: 01 adjunctions (hom-set & unit/counit) · 02 RAPL, reflective subcategories & the adjoint functor theorems
41.04 yoneda-representability [Riehl]: 01 representable functors & universal elements · 02 the Yoneda lemma, embedding & density
41.05 monads-algebras [Mac Lane]: 01 monads, Eilenberg-Moore & Kleisli · 02 Beck's monadicity theorem & Lawvere theories
41.06 kan-extensions [Riehl]: 01 ends, coends & the (co)end calculus · 02 Kan extensions ("all concepts are Kan extensions")

## Wave schedule (dependency levels; in-spine frontmatter prereqs land before the wave that needs them; serial model-theory/forcing tails use co-produced→Connections per the standing rule)
- WAVE 1 (roots): 41.01.01, 42.01.01, 42.01.03, 42.03.01, 42.04.01
- WAVE 2 (L1): 41.01.02, 41.02.01, 42.01.02, 42.01.04, 42.03.02, 42.04.02
- WAVE 3 (L2): 41.02.02, 41.03.01, 41.04.01, 42.01.05, 42.01.08, 42.02.01, 42.03.03, 42.03.05, 42.04.03
- WAVE 4 (L3): 41.03.02, 41.04.02, 41.05.01, 42.01.06, 42.01.09, 42.03.04, 42.04.04, 42.04.07
- WAVE 5 (L4): 41.05.02, 41.06.01, 42.01.07, 42.03.06, 42.04.05, 42.04.06
- WAVE 6 (L5): 41.06.02, 42.01.10, 42.02.02, 42.03.07
- WAVE 7 (L6): 42.02.03, 42.02.05, 42.02.08, 42.03.08
- WAVE 8 (L7-L9 tail): 42.02.04, 42.02.06, 42.02.07, 42.03.09

## Status
- [x] W1  [ ] W2  [ ] W3  [ ] W4  [ ] W5  [ ] W6  [ ] W7  [ ] W8  [ ] COMPLETENESS (loop-until-dry)
