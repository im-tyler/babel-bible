# Audit — Marker, *Model Theory: An Introduction* (Spine 7, logic-foundations)

- **source_book:** `marker-model-theory`
- **source_curriculum:** `logic-foundations`
- **chapter dir:** `content/42-mathematical-logic/02-model-theory`
- **frontmatter:** `section: mathematical-logic`, `chapter: model-theory`, `field: foundations-logic`
- **prefix:** `42`, ids `42.02.NN`

## Verdict
`content/42-mathematical-logic/02-model-theory/` is GREENFIELD (only `.gitkeep`).
No formal model theory exists anywhere in `content/`: the `25-logic`/`24-logic` units
are elementary prose logic (truth tables, syllogisms, informal fallacies); every
corpus hit for "compactness", "model", "type", "saturation", "Löwenheim", etc. is in
an unrelated context (functional-analysis compactness, analytic models, normal
families, large-deviations exponential tightness). The completeness / compactness /
Löwenheim-Skolem THEOREMS are owned by the co-produced **42.01 (Enderton)** — this
chapter STATES and APPLIES them (cross-ref 42.01), it does not reprove them.
Cardinal arithmetic used in categoricity is owned by **42.03 (Kunen)** (cross-ref).
Field theory (ACF, RCF, Galois) is owned by the existing algebra corpus
(04.02.07 Nullstellensatz, 01.02.13 Galois) — cross-ref, do not reprove.

**7 genuine gaps proposed**, all greenfield, in dependency order.

In-spine **co-produced** (NOT yet shipped — referenced as prereqs, dispatch-after, not blockers):
- `42.01.*` (Enderton) — first-order syntax/semantics, the completeness, compactness,
  and Löwenheim-Skolem theorems. Treated as the upstream that supplies the three
  theorems every unit below leans on.
- `42.03.*` (Kunen) — ordinals/cardinals, cardinal arithmetic, the back-and-forth /
  set-theoretic machinery used in saturation and Morley's theorem.

---

## GENUINE GAPS

### 42.02.01 — Structures, embeddings, and elementary equivalence
- **spec:** First-order structures and the satisfaction relation, (elementary) embeddings and substructures, the Tarski–Vaught test, the Löwenheim–Skolem theorems read model-theoretically (downward/upward) and unions of elementary chains (Tarski's chain lemma).
- **prereqs (cross-spine):** none firmly shipped — leans on 25.02.01 (predicate-logic quantifiers, elementary prose anchor).
- **prereqs (in-spine co-produced):** 42.01.* (first-order semantics; the L-S theorems — STATE, cross-ref, don't reprove).
- **dependency level:** 0 (chapter foundation).

### 42.02.02 — The compactness theorem and the method of diagrams
- **spec:** The compactness theorem stated from 42.01 and turned into a working tool — the elementary diagram and the diagram lemma (embeddings ↔ models of the diagram), with the canonical compactness constructions (non-standard models of arithmetic, finite-axiomatisability failures, the existence of infinite models / Löwenheim–Skolem upward via diagrams).
- **prereqs (cross-spine):** none.
- **prereqs (in-spine):** 42.02.01; 42.01.* (compactness — STATE, cross-ref, don't reprove).
- **dependency level:** 1.

### 42.02.03 — Types and the omitting types theorem
- **spec:** Complete and partial n-types over a theory, the Stone type space $S_n(T)$ and its topology, realizing and omitting types, isolated (principal) types, and the Omitting Types theorem with the prime/atomic-model corollary.
- **prereqs (cross-spine):** 02.01.01 (topological space — for the Stone-space topology, cross-ref).
- **prereqs (in-spine):** 42.02.01, 42.02.02; 42.01.* (compactness).
- **dependency level:** 2.

### 42.02.04 — Saturation, homogeneity, and monster models
- **spec:** $\kappa$-saturated, homogeneous and universal models; existence and uniqueness of saturated/special models; the monster model as a universal domain and "definable over a small set"; back-and-forth and elementary maps.
- **prereqs (cross-spine):** 42.03.* (cardinal arithmetic, regular/singular cardinals — STATE, cross-ref, don't reprove).
- **prereqs (in-spine):** 42.02.03.
- **dependency level:** 3.

### 42.02.05 — Quantifier elimination and model-completeness
- **spec:** Quantifier elimination and the test for it, model-completeness and Robinson's test, with the worked examples — dense linear orders without endpoints, algebraically closed fields (Tarski–Chevalley: the image of a constructible set is constructible) and real closed fields (Tarski's decidability / completeness of RCF), and Presburger arithmetic.
- **prereqs (cross-spine):** 04.02.07 (Nullstellensatz/constructible-set background for ACF — cross-ref), 01.02.13 (Galois/field theory for RCF — cross-ref, don't reprove field theory).
- **prereqs (in-spine):** 42.02.02 (diagrams/compactness), 42.02.01.
- **dependency level:** 2.

### 42.02.06 — Categoricity: Ryll-Nardzewski, Morley, and Baldwin–Lachlan
- **spec:** $\aleph_0$-categoricity and the Ryll-Nardzewski theorem (finitely many n-types ⇔ $\omega$-categorical), the Łoś–Vaught test, then Morley's categoricity theorem (categorical in one uncountable cardinal ⇒ categorical in all) via $\omega$-stability and counting types, with the Baldwin–Lachlan analysis (1 or $\aleph_0$ countable models, two-cardinal flavour).
- **prereqs (cross-spine):** 42.03.* (uncountable cardinal arithmetic — cross-ref).
- **prereqs (in-spine):** 42.02.03 (types), 42.02.04 (saturation), 42.02.05 (QE supplies the running examples).
- **dependency level:** 4.

### 42.02.07 — Strongly minimal sets, Morley rank, and stability
- **spec:** Strongly minimal sets and the pregeometry/algebraic-closure dimension (acl-dimension), Morley rank and degree, the stability spectrum and $\omega$-stability, an introduction to forking and independence; closing with the algebraic transfer applications (Ax–Grothendieck via finite-field/ACF compactness, the Ax–Kochen theorem, and the Lefschetz principle).
- **prereqs (cross-spine):** 21.02.01 (finite fields — for Ax–Grothendieck, cross-ref), 04.02.07 (constructibility — cross-ref).
- **prereqs (in-spine):** 42.02.06 (categoricity/$\omega$-stability), 42.02.04 (saturation), 42.02.05 (QE for ACF).
- **dependency level:** 5.

---

## NOTES ON SCOPE PACKING
- o-MINIMALITY and the cell-decomposition theorem are FOLDED into 42.02.07's
  pregeometry/dimension framing where tameness of the reals is the worked geometric
  example, rather than spun out as a standalone 8th unit — Marker's o-minimality
  chapter is a coda whose theorem-level payoff (monotonicity, cell decomposition,
  finiteness of definable sets in $\mathbb{R}$) sits naturally beside strong minimality
  and RCF (42.02.05) at ~6000 words. If the producer finds 42.02.07 over-stuffed,
  split off **42.02.08 — o-minimality and cell decomposition** (spec: o-minimal
  structures, the monotonicity and cell-decomposition theorems, definable finiteness
  and the geometric tameness of $\mathbb{R}_{\mathrm{exp}}$/RCF, applications to real
  algebraic geometry; prereqs 42.02.05 + 42.02.07; level 6). Flagged here so the
  free id is reserved and the call is the producer's, not a manufactured unit.

## COVERED (not gaps) — due-diligence evidence
- **Completeness theorem** — owned by co-produced 42.01 (Enderton); this chapter STATES, cross-refs.
- **Compactness theorem (proof)** — owned by 42.01; applied here (42.02.02), not reproved.
- **Löwenheim–Skolem (downward/upward, proof)** — owned by 42.01; applied here (42.02.01).
- **Cardinal arithmetic / regular & singular cardinals** — owned by co-produced 42.03 (Kunen); cross-ref from 42.02.04, 42.02.06.
- **Nullstellensatz / constructible sets / dimension** — content/04-algebraic-geometry/02-schemes/04.02.07; cross-ref from 42.02.05, 42.02.07 (Tarski–Chevalley), not reproved.
- **Galois theory / field theory** — content/01-foundations/02-groups/01.02.13 (FTGT, finite case); cross-ref from 42.02.05 (RCF), not reproved.
- **Finite fields** — content/21-number-theory (21.02.01); cross-ref from 42.02.07 (Ax–Grothendieck), not reproved.
- **Elementary predicate logic / quantifiers** — content/25-logic/02-predicate-logic/25.02.01; prose anchor only, NOT formal model theory (correctly greenfield here).
- **Topological space / Stone spaces** — content/02-analysis/01-topology/02.01.01; cross-ref for $S_n(T)$ topology in 42.02.03, not reproved.

## OUT OF SCOPE
- (none) — Marker is a graduate text that maps cleanly onto the curriculum's
  theorem-level granularity; no 200-page apparatus without payoff was encountered.
  The only borderline item (o-minimality as a standalone unit) is handled under
  NOTES ON SCOPE PACKING above rather than dropped or padded.
