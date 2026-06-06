# AUDIT — Soare, *Turing Computability: Theory and Applications* (Springer, 2016)

- **source_book:** `soare-turing-computability`
- **source_curriculum:** `logic-foundations` (Spine 7)
- **owns chapter:** `content/42-mathematical-logic/04-computability-degrees` (prefix `42`,
  section `mathematical-logic`, field `foundations-logic`)
- **audited:** 2026-06-06

## Audit context — GREENFIELD chapter

`content/42-mathematical-logic/04-computability-degrees` currently holds only a `.gitkeep`;
the whole `42-mathematical-logic` section is empty skeleton dirs (SETUP done 2026-06-06).
A corpus-wide filename + body grep for `turing | comput(ab|e) | recursi(on|ve) | halting |
undecid | enumerab | arithmetical-hierarch | church | diophantine | word-problem |
hilbert-tenth` finds **no** computability-theory unit anywhere in `content/`. The single
adjacent unit is the CS-side **25.03.01 algorithmic-complexity-big-O** (Big-O, P/NP,
the *complexity* refinement) — a deliberate cross-ref target, NOT a duplicate: that unit
measures the cost of *decidable* problems; this chapter is about *what is computable at
all* and the structure of the *un*computable (Turing degrees). The two meet only at the
Church–Turing thesis (this chapter fixes the model the complexity classes are graded on).

**Coordination with 42.01 (incompleteness, owned by the Enderton audit):**
representability of recursive functions in arithmetic and the Gödel/Tarski theorems are
the *application* and belong to 42.01. This chapter OWNS the recursion-theoretic machine:
models of computation, the halting problem, r.e. sets, the arithmetical hierarchy as a
*computability* hierarchy, the jump, the degrees, and the priority method. Where the two
touch — Post's theorem relating the arithmetical hierarchy to the jump, and the
hierarchy-vs-definability link — these units state the computability side and **cross-ref**
42.01 for the definability/Tarski side rather than re-proving it.

Because the chapter is greenfield, the headline constructions of Soare are all genuine
gaps. Below is a tight, dependency-ordered set of 7 units. Ids are assigned sequentially
in the free `42.04.NN` block (chapter `04-computability-degrees` ⇒ middle index `04`;
no `42.*` ids are occupied anywhere in `content/`).

---

## GENUINE GAPS (7)

### 42.04.01 — Models of computation and the Church–Turing thesis
- **id:** `42.04.01`
- **title:** Models of Computation and the Church–Turing Thesis
- **spec:** Turing machines, the partial recursive functions and μ-recursion, and register
  machines; their pairwise equivalence; the universal machine, the enumeration
  $\{\varphi_e\}$ of partial computable functions, and the s-m-n (parameter) theorem — the
  evidence for and statement of the Church–Turing thesis.
- **prereqs:** [] (self-contained entry point to the chapter; uses only naive set/function
  language and induction)
- **chapter dir:** `content/42-mathematical-logic/04-computability-degrees`
- **frontmatter:** `section: mathematical-logic`, `chapter: computability-degrees`
- **dependency level:** 0 (chapter root)
- **anchors:** Soare 2016 Ch. 1–3 (Turing computable functions, the normal form / enumeration,
  s-m-n); cross-ref CS **25.03.01** for the complexity-graded view of the same model.

### 42.04.02 — The halting problem, undecidability, and the recursion theorem
- **id:** `42.04.02`
- **title:** The Halting Problem, Undecidability, and the Recursion Theorem
- **spec:** The diagonal/self-reference argument proving $K=\{e:\varphi_e(e)\!\downarrow\}$
  undecidable; many-one ($\le_m$) reducibility and undecidability transfer; Rice's theorem
  (no nontrivial index set is decidable); the Kleene recursion / fixed-point theorem and its
  use (self-reproducing programs, definition by recursion on programs).
- **prereqs:** [`42.04.01`]
- **chapter dir:** `content/42-mathematical-logic/04-computability-degrees`
- **frontmatter:** `section: mathematical-logic`, `chapter: computability-degrees`
- **dependency level:** 1
- **anchors:** Soare 2016 Ch. 2–3 (the halting problem, the recursion theorem); Rogers
  *Theory of Recursive Functions* §1.8, §11 for Rice / fixed-point depth.

### 42.04.03 — Computably enumerable sets: creative and simple sets
- **id:** `42.04.03`
- **title:** Computably Enumerable Sets — Creative and Simple Sets
- **spec:** The equivalence r.e. ⇔ domain of a partial computable function ⇔ Σ₁ projection
  ⇔ range; the complementation/Post characterization (A computable iff A and Ā both r.e.);
  $K$ as a complete creative set and $\le_m$-completeness via the productive/creative
  duality; Post's construction of a **simple** set (r.e., non-computable, not m-complete).
- **prereqs:** [`42.04.02`]
- **chapter dir:** `content/42-mathematical-logic/04-computability-degrees`
- **frontmatter:** `section: mathematical-logic`, `chapter: computability-degrees`
- **dependency level:** 2
- **anchors:** Soare 2016 Ch. 4–5 (c.e. sets, the projection theorem, Post's problem setup,
  simple and creative sets); Myhill's theorem (creative ⇔ m-complete) noted.

### 42.04.04 — Turing reducibility, oracle machines, and the jump operator
- **id:** `42.04.04`
- **title:** Turing Reducibility, Oracle Machines, and the Jump
- **spec:** Relative computability via oracle Turing machines; the relativized enumeration
  $\Phi_e^A$ and use principle; Turing reducibility $\le_T$ and Turing equivalence; the jump
  operator $A'$, $A<_T A'$ (relativized halting problem), monotonicity, and the iterates
  $\emptyset^{(n)}$; $\le_m$ strictly refines $\le_T$.
- **prereqs:** [`42.04.02`, `42.04.03`]
- **chapter dir:** `content/42-mathematical-logic/04-computability-degrees`
- **frontmatter:** `section: mathematical-logic`, `chapter: computability-degrees`
- **dependency level:** 3
- **anchors:** Soare 2016 Ch. 3, 6 (oracle computations, the jump theorem).

### 42.04.05 — The arithmetical hierarchy and Post's theorem
- **id:** `42.04.05`
- **title:** The Arithmetical Hierarchy and Post's Theorem
- **spec:** The Σ_n / Π_n / Δ_n classification of sets by quantifier alternation over
  computable matrices; the hierarchy (strictness) theorem; Post's theorem linking the
  hierarchy to the Turing jump ($\Sigma_{n+1}$ ⇔ c.e. in $\emptyset^{(n)}$; $\emptyset^{(n)}$
  is $\Sigma_n$-complete); the bridge to definability in arithmetic.
- **prereqs:** [`42.04.04`]
- **chapter dir:** `content/42-mathematical-logic/04-computability-degrees`
- **frontmatter:** `section: mathematical-logic`, `chapter: computability-degrees`
- **dependency level:** 4
- **anchors:** Soare 2016 Ch. 4, 6 (the arithmetical hierarchy, Post's theorem).
  **Cross-ref 42.01** (incompleteness/Tarski) for the *definability-in-arithmetic* side —
  this unit states the computability side and points there; it does NOT re-prove Tarski.

### 42.04.06 — The Turing degrees and the priority method (Friedberg–Muchnik)
- **id:** `42.04.06`
- **title:** The Turing Degrees and the Priority Method
- **spec:** The degrees $\mathcal{D}$ as an upper semilattice with least element **0** and the
  jump; $\mathbf{0}'$ and the c.e. degrees; **Post's problem** and its solution — the
  Friedberg–Muchnik theorem building incomparable c.e. degrees $\mathbf{a},\mathbf{b}$ with
  $\mathbf{0}<\mathbf{a},\mathbf{b}<\mathbf{0}'$ by a **finite-injury priority** argument
  (requirement lists, restraint, injury bound); existence of intermediate r.e. degrees.
- **prereqs:** [`42.04.05`]
- **chapter dir:** `content/42-mathematical-logic/04-computability-degrees`
- **frontmatter:** `section: mathematical-logic`, `chapter: computability-degrees`
- **dependency level:** 5
- **anchors:** Soare 2016 Ch. 6–7 (the upper semilattice of degrees, the Friedberg–Muchnik
  finite-injury construction); the headline theorem of the book.

### 42.04.07 — Unsolvable problems: the word problem and Hilbert's tenth (MRDP)
- **id:** `42.04.07`
- **title:** Unsolvable Problems — The Word Problem and Hilbert's Tenth (MRDP)
- **spec:** Reductions exporting undecidability to mathematics: the **word problem for
  groups** (Novikov–Boone, state) and **Hilbert's tenth problem** — the MRDP theorem that
  the Diophantine sets are exactly the computably enumerable sets, so no algorithm decides
  Diophantine solvability; the Pell-equation/exponential-growth device at the heart of the
  proof (state, with sketch).
- **prereqs:** [`42.04.05`] (Σ₁ = r.e. = Diophantine; needs the hierarchy + r.e. machinery)
- **chapter dir:** `content/42-mathematical-logic/04-computability-degrees`
- **frontmatter:** `section: mathematical-logic`, `chapter: computability-degrees`
- **dependency level:** 5
- **anchors:** Soare 2016 §III (applications); Matiyasevich *Hilbert's Tenth Problem* for the
  MRDP proof. **Cross-ref number theory 21.01.08** (Pell equation / continued fractions) for
  the Diophantine growth lemma; cross-ref **42.04.03** (Σ₁ projection ⇔ r.e.).

---

## Notes on scope decisions

- **Hyperarithmetical / analytical hierarchy** (Σ¹₁, Π¹₁, the $\mathcal{O}$ system of ordinal
  notations) is **folded as a terminal "state-only" coda inside 42.04.05** (named, located
  one level above the arithmetical hierarchy, with the Π¹₁ = effective-ω-model statement
  given but not developed). It does NOT warrant a standalone ~6000-word unit at this corpus
  depth: there is no downstream consumer in Tier A, and a full development is a large
  apparatus with little theorem-level payoff here. Flag for a possible future Sacks
  *Higher Recursion Theory* audit if the spine is later deepened.
- **Infinite-injury / tree arguments, the density theorem (Sacks), minimal degrees,**
  and the **lattice of c.e. sets** are deliberately out — one finite-injury exemplar
  (42.04.06) is the right altitude; the heavier degree-theory machinery is post-Tier-A.

## OUT OF SCOPE (1)

- **Full higher recursion theory (hyperarithmetical/analytical hierarchy as its own unit):**
  large apparatus, no Tier-A downstream consumer; stated as a coda in 42.04.05 instead of a
  standalone unit (see Notes).

## COVERED (not gaps) — due-diligence cross-refs (all VERIFIED present)

- **Complexity / P vs NP / Big-O** — `25.03.01` algorithmic-complexity-big-O (the *cost*
  refinement of decidable problems; explicitly a cross-ref, not redone here).
- **Computational thinking / algorithms (informal)** — `25.01.01`
  computational-thinking-algorithms.
- **Pell equation / continued fractions** — `21.01.08` pell-equation-continued-fractions
  (cross-ref target for the MRDP Diophantine-growth device in 42.04.07).
- **Incompleteness / Gödel / Tarski / representability of recursive functions** — owned by
  **42.01** (Enderton audit, `first-order-logic-completeness` chapter); this chapter
  cross-refs it from 42.04.05 rather than re-proving definability. (As of this audit 42.01
  is also greenfield/planned; the ownership split is recorded here for the producer.)

## Summary
- **GENUINE GAPS:** 7 (`42.04.01`–`42.04.07`)
- **OUT OF SCOPE:** 1 (full higher recursion theory; absorbed as a coda)
- **COVERED cross-refs verified:** 4 (`25.03.01`, `25.01.01`, `21.01.08`, plus 42.01 ownership)
- **gap file:** `plans/expansion/logic-foundations/_audit/soare-computability.gaps.md`
