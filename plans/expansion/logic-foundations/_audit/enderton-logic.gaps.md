# Audit — Enderton, *A Mathematical Introduction to Logic* (2nd ed., 2001)

- **source_book:** `enderton-logic`
- **source_curriculum:** `logic-foundations`
- **target chapter:** `content/42-mathematical-logic/01-first-order-logic-completeness/`
  (frontmatter `section: mathematical-logic`; `chapter: first-order-logic-completeness`
  — the chapter name **without** the `01-` prefix; id format `42.01.<UU>`;
  frontmatter `field: foundations-logic`)
- **date:** 2026-06-06
- **ownership:** this audit owns chapter **42.01** (the proof-theory / metalogic spine:
  formal propositional logic, FOL syntax+semantics, deductive calculus + soundness,
  Gödel completeness, compactness *theorem*, Löwenheim–Skolem *theorems*, decidability,
  representability of recursive functions, the incompleteness theorems, Tarski undefinability).
  Parallel audits in this spine: **42.02 model-theory**, **42.03 set-theory-forcing**,
  **42.04 computability-degrees**.

## Verdict — GREENFIELD chapter, with sketches to supersede (not duplicate)

`content/42-mathematical-logic/` is a **freshly scaffolded, empty** chapter set (all four
directories `01-first-order-logic-completeness … 04-computability-degrees` contain **zero**
`.md` files). **No standalone proof-theoretic or metalogic unit exists anywhere in `content/`**
— a title-level search across the whole corpus for `complet*/compact*/skolem/henkin/
incompleteness/undecidab/tarski/soundness/first-order/deductive-calc` returns **only**
analysis/topology/geometry homonyms (e.g. `Lp completeness`, `compact operators`,
`compact-open topology`, `Uhlenbeck compactness`), never a logic unit.

What **does** exist, and which this audit deliberately **supersedes rather than duplicates**,
is a layer of **survey-level sketches** embedded in the two elementary critical-thinking logic
chapters and the philosophy chapter:

- **`24-logic`** (8 units; Hurley/Gensler-anchored critical-thinking course) and
  **`25-logic`** (4 units; the same elementary spine, parallel copy). Their `propositional`
  (`24.01.01`/`25.01.01`, ~8 100 words) and `predicate` (`24.02.01`/`25.02.01`, ~8 000 words)
  units are **survey units with a "master" tier** that *narrate* — in 1–3 paragraph **sketches**,
  not as theorems with full proofs — soundness+completeness, the Henkin construction (3 stages),
  compactness, downward/upward Löwenheim–Skolem, Skolem's paradox, Church undecidability,
  Gödel numbering, the first/second incompleteness theorems, and Tarski undefinability.
- **`20.09.01`** (philosophy of mathematics): incompleteness as a *philosophical* datum
  (Hilbert's programme, "truth outruns proof") — no formal apparatus.

**These are intro / critical-thinking / philosophical treatments.** They are paragraph-length
gestures inside multi-topic survey units; **none develops the object language, the deductive
calculus, the term-model construction, the diagonal/fixed-point lemma, representability, or the
Gödel-numbering arithmetization at theorem-with-proof depth.** The full proof-theoretic /
model-theoretic / arithmetization development is therefore **genuinely greenfield**. Each unit
below cross-references the relevant `24.0x`/`25.0x` survey paragraph as the *informal pointer*
and supersedes it with a rigorous standalone treatment.

**Prereq convention.** Verified-existing anchors used below:
`25.01.01` (propositional logic, truth tables, functional completeness — informal pointer +
the propositional-fragment intuition), `25.02.01` (predicate logic / quantifiers / the
satisfaction relation sketch — informal pointer), `00.12.01` (mathematical induction — used
pervasively for induction on formula/derivation structure), `20.09.01` (philosophy of math —
cross-ref for the *significance* of incompleteness, not a technical prereq).
Ids of the form `42.01.*` other than a unit's own are **planned sibling units defined in this
same audit** (in-spine co-produced); they are listed as prereqs so the producer can wire the
DAG once siblings land. Ids `42.04.*` are **planned computability-spine units** owned by the
parallel computability audit (see the boundary note) — listed as cross-refs / soft prereqs.

---

## INCOMPLETENESS ↔ COMPUTABILITY BOUNDARY (coordination note — READ FIRST)

The incompleteness theorems sit on a seam between this spine (42.01) and the
**computability** spine (42.04). The boundary I drew, to be confirmed by the 42.04 auditor:

- **42.04 (computability) OWNS the recursion-theory machinery:** the definition of
  (primitive) recursive and (Turing-/μ-)computable functions, the Church–Turing thesis,
  recursively enumerable vs. recursive sets, the **unsolvability of the halting problem**,
  and **Church's theorem** that FOL validity is undecidable as a *recursion-theoretic* fact.
- **42.01 (this spine) OWNS the logical bridge:** **representability** of recursive functions
  and relations *in a theory* (Σ₁-representability in Q/PA), the **arithmetization / Gödel
  numbering** of the syntax of the object theory, the **diagonal (fixed-point) lemma**, and the
  **first and second incompleteness theorems** + **Tarski undefinability** as theorems about
  *formal theories of arithmetic*. These are the "logic side" of the seam.
- **Concretely:** `42.01.08` (representability) **imports the *notion* of a recursive function
  from `42.04`** (cross-ref, soft prereq) and proves it is *representable in Q*; `42.01.09`
  (incompleteness) uses `42.01.08` + arithmetization. The 42.04 auditor should **scope the
  pure recursion theory (definitions, halting problem, Rice's theorem, the
  recursion/s-m-n theorems, degrees) to 42.04 and NOT re-prove representability or the
  incompleteness theorems** — those are claimed here. **Church's undecidability of FOL** is the
  one genuinely shared item: 42.04 may own it as the recursion-theoretic reduction; `42.01.07`
  (this spine) states it as a *corollary about FOL* and cross-refs. **Flag to 42.04 to confirm
  who proves Church's theorem in full** to avoid a duplicate.

**Boundary with 42.02 (model theory):** this spine **OWNS the theorems** — Gödel completeness,
the **compactness theorem** (statement + completeness-based and the boundary to the
ultraproduct proof), and the **Löwenheim–Skolem theorems** (downward/upward) + Skolem's
paradox. **42.02 OWNS the model-building applications** — non-standard models *as objects of
study*, types/saturation, elementary chains, categoricity (Łoś–Vaught), preservation theorems,
quantifier elimination, Ehrenfeucht–Fraïssé. The compactness/LS units below give **one or two
canonical applications** (existence of infinite/non-standard models, non-finite-axiomatizability,
non-first-order-definability of finiteness/well-foundedness) **as immediate corollaries** and
**explicitly defer the systematic model theory to 42.02.**

**Boundary with 42.03 (set theory):** Skolem's paradox is *stated* here (LS applied to ZFC);
the *resolution via absoluteness/forcing* and the metatheory of ZFC models belong to 42.03.

---

## GENUINE GAPS

### 42.01.01 — Propositional logic as a formal system: syntax, truth assignments, tautological consequence
- **spec:** Develop sentential logic as a *formal object* (Enderton ch. 1): the inductive
  definition of well-formed formulas over a set of sentence symbols, the **unique readability /
  parsing** theorem, **truth assignments** and the recursive extension to all wffs, **tautology**,
  **tautological implication** \(\Sigma \models \tau\), satisfiability, and **truth-functional /
  functional completeness** of a connective set (every Boolean function is expressible; \(\{\neg,\wedge\}\),
  \(\{\neg,\vee\}\), \(\{\to,\neg\}\), and the single connectives NAND/NOR). Distinguish this
  formal-system treatment from the truth-table *survey* at `25.01.01`.
- **prereqs:** `25.01.01` (informal pointer), `00.12.01` (induction on wff structure)
- **dependency level:** L0

### 42.01.02 — The compactness theorem for propositional logic
- **spec:** Prove **compactness for sentential logic** (Enderton §1.7): a set \(\Sigma\) of wffs
  is satisfiable iff every finite subset is, via the König's-lemma / maximal-consistent-extension
  (Lindenbaum) argument *purely at the propositional level* (no FOL). Derive the canonical
  corollaries: the **infinite four-/k-colour-ability of graphs from finite colourability**, and
  the topological reading as **compactness of \(\{0,1\}^S\)** (a special case of Tychonoff).
  This is the propositional warm-up whose method is reused for the FOL completeness term model.
- **prereqs:** `42.01.01`
- **dependency level:** L1

### 42.01.03 — First-order languages: syntax, terms, formulas, and unique readability
- **spec:** Set up the **syntax of first-order logic** (Enderton ch. 2.0–2.1): signatures
  (constant/function/relation symbols + arities), **terms** and **wffs** by simultaneous
  induction, free vs. bound variables, **substitution** \(\varphi^x_t\) and the
  *substitutability* (capture-avoidance) condition, **unique readability** for terms and
  formulas, prenex form. Pure syntax — semantics is `42.01.04`. Supersedes the syntax gestures
  in `25.02.01`.
- **prereqs:** `42.01.01`, `00.12.01`
- **dependency level:** L1

### 42.01.04 — Structures and Tarski semantics: satisfaction, truth, and first-order definability
- **spec:** Define a **structure (model)** \(\mathfrak A\) for a signature, **variable
  assignments**, the **Tarskian satisfaction relation** \(\mathfrak A,s \models \varphi\) by
  recursion on \(\varphi\), **truth of sentences**, **logical implication** \(\Gamma\models\varphi\)
  and **validity**. Prove the **substitution lemma** (\(\mathfrak A,s\models\varphi^x_t\) iff
  \(\mathfrak A, s[x\mapsto \bar s(t)]\models\varphi\)) and the **coincidence lemma** (truth
  depends only on free-variable values). Introduce **definability of relations** in a structure
  and give first examples (orderings, the integers in the rationals). The model-*theory* of
  definability (Beth, Svenonius, the systematic story) is deferred to **42.02**.
- **prereqs:** `42.01.03`, `25.02.01` (informal pointer)
- **dependency level:** L2

### 42.01.05 — A deductive calculus for first-order logic and the soundness theorem
- **spec:** Present a **deductive system** for FOL (Enderton ch. 2.4 Hilbert-style: logical
  axioms incl. the quantifier and equality axioms, **modus ponens** + generalisation; note the
  natural-deduction alternative), the notion of a **derivation** \(\Gamma\vdash\varphi\),
  **the deduction theorem**, generalisation-on-constants, and **alphabetic variants**. Prove the
  **soundness theorem** (\(\Gamma\vdash\varphi \Rightarrow \Gamma\models\varphi\)) by induction
  on derivations. This is the syntactic counterpart whose converse is completeness (`42.01.06`).
- **prereqs:** `42.01.04`
- **dependency level:** L2

### 42.01.06 — Gödel's completeness theorem: the Henkin construction
- **spec:** Prove **Gödel's completeness theorem** (Enderton §2.5) in Henkin's form:
  **every consistent set of sentences is satisfiable** (hence \(\Gamma\models\varphi
  \Rightarrow \Gamma\vdash\varphi\)). Full development: **Lindenbaum** extension to a maximal
  consistent set, addition of **Henkin witnessing constants** (\(\exists x\,\psi \to
  \psi(c_\psi)\)), the **term model** on equivalence classes of closed terms modulo provable
  equality, and the **truth lemma** verifying the canonical structure satisfies exactly the
  members of the extended theory. Note the **enumerability/countable-language** case vs. the
  general case (well-ordering / Zorn). This is the central theorem of the spine and supersedes
  the 3-line "stages" sketch at `25.02.01`/`24.02.01`.
- **prereqs:** `42.01.05`, `42.01.02` (the propositional maximal-consistency method)
- **dependency level:** L3

### 42.01.07 — Compactness and Löwenheim–Skolem for first-order logic: first consequences
- **spec:** Derive from completeness the **compactness theorem for FOL** (\(\Gamma\) has a model
  iff every finite subset does) and the **downward and upward Löwenheim–Skolem theorems**
  (a satisfiable countable theory has a countable model; a theory with an infinite model has
  models of every infinite cardinality \(\ge |\mathcal L|\)). Give the **canonical immediate
  corollaries**: existence of **non-standard models of arithmetic / analysis** (infinitesimals),
  **infinitude-of-models** and the failure of FOL to control cardinality, **non-first-order-
  definability of finiteness / torsion / well-foundedness / archimedean**, **non-finite-
  axiomatizability** arguments, and **Skolem's paradox** (LS applied to ZFC — *stated*; its
  resolution via absoluteness is `42.03`). The **systematic model-building** (ultraproducts/Łoś,
  saturation, categoricity, types) is deferred to **42.02**; this unit owns the *theorems*.
- **prereqs:** `42.01.06`
- **dependency level:** L4

### 42.01.08 — Representability of recursive functions in arithmetic
- **spec:** Bridge logic and computability (Enderton ch. 3.3): the **theories Q (Robinson) and
  PA**, **Σ₁ / Δ₀ formulas**, and the theorem that **every recursive function and relation is
  representable** (numeralwise definable) in Q. Develop the **β-function / Gödel coding of
  sequences** (CRT-based) needed to represent functions defined by primitive recursion and
  minimization, and the representability of "is-a-proof-of" once the syntax is arithmetized.
  **Imports the definition of recursive/Turing-computable function from `42.04`** (cross-ref,
  soft prereq) — it does *not* re-develop recursion theory. This is the load-bearing lemma for
  incompleteness.
- **prereqs:** `42.01.04`, `42.04.*` (recursive functions — computability spine, cross-ref),
  `00.12.01`
- **dependency level:** L3 (parallel to the completeness arc; depends on 42.04 machinery)

### 42.01.09 — Gödel numbering, the fixed-point lemma, and the incompleteness theorems
- **spec:** Prove the **First and Second Incompleteness Theorems** and **Tarski's undefinability
  of truth** (Enderton ch. 3.4–3.5). Develop the **arithmetization (Gödel numbering)** of terms,
  formulas, and proofs; the **provability predicate** \(\mathrm{Prov}_T\) and the **derivability
  (Hilbert–Bernbays–Löb) conditions**; the **diagonal / fixed-point lemma**; construction of the
  **Gödel sentence** \(G\leftrightarrow\neg\mathrm{Prov}_T(\ulcorner G\urcorner)\). Prove
  **First Incompleteness** (any consistent, recursively axiomatized \(T\supseteq Q\) is
  incomplete; ω-consistency vs. Rosser's improvement), **Tarski undefinability** (the truth set
  of \(\mathbb N\) is not arithmetically definable), and the **Second Incompleteness Theorem**
  (\(T\nvdash\mathrm{Con}_T\) via the derivability conditions). Close with the *significance*
  (cross-ref `20.09.01`) and **true-but-unprovable** statements in PA as a pointer (the
  combinatorial Paris–Harrington / Goodstein examples may be a later unit). Supersedes the
  one-paragraph incompleteness sketch in `24.02.01`/`25.02.01`.
- **prereqs:** `42.01.08`, `42.01.06`, `42.01.07`, `20.09.01` (significance cross-ref)
- **dependency level:** L4

---

## OPTIONAL / WATCH (propose only if the spine wants the extra depth)

- **`42.01.10` — Decidable and undecidable theories; the Entscheidungsproblem (Church's theorem).**
  *Conditional on the 42.04 boundary.* If 42.04 claims Church's theorem and the general theory of
  (un)decidable theories (Q/PA undecidable, ACF/RCF/Presburger **decidable** via QE,
  decidability vs. completeness, the arithmetical hierarchy of a theory), then this is **OUT OF
  SCOPE here** (folds into 42.04 + the QE material that 42.02 may own). If 42.04 scopes itself to
  *pure* recursion theory and 42.02 to *model-theoretic* QE, a **single logic-side unit on the
  Entscheidungsproblem and the (un)decidability of theories** is a genuine gap and belongs here as
  `42.01.10` (prereqs `42.01.07`, `42.01.09`, `42.04.*`). **Flagged for cross-audit resolution;
  not counted in the firm gap total.**

---

## COVERED (not gaps — survey/sketch coverage that this audit SUPERSEDES, not duplicates)

These topics *appear* in the corpus only as elementary-survey or master-tier **sketches** inside
multi-topic survey units; none is a standalone theorem-with-proof unit, so each is *superseded*
(rigorous standalone unit proposed above) rather than skipped. Listed for due-diligence:

- **Propositional soundness/completeness (sketch):** `25.01.01` §"Soundness and Completeness"
  (lines ~254–284) — maximal-consistent-set sketch, no formal-system development → superseded by
  `42.01.01`/`42.01.02`/`42.01.06`.
- **Propositional compactness (sketch):** `25.01.01` §"The Compactness Theorem" (lines ~418–430),
  graph-colouring + Tychonoff remarks → superseded by `42.01.02`.
- **Tarski satisfaction relation (sketch):** `25.02.01` line ~170 (one-line recursive def) →
  superseded by `42.01.04`.
- **Gödel completeness / Henkin (3-stage sketch):** `25.02.01` lines ~239–257 → superseded by
  `42.01.06`.
- **FOL compactness + applications (sketch):** `25.02.01` lines ~410–418 (non-standard arithmetic,
  Rado graph) → theorem owned by `42.01.07`; *systematic* applications → **42.02**.
- **Löwenheim–Skolem + Skolem's paradox (sketch):** `25.02.01` lines ~420–426 → superseded by
  `42.01.07`; paradox resolution → **42.03**.
- **Decidability/undecidability of FOL, Church 1936 (sketch):** `25.02.01` lines ~428–451
  (incl. monadic, RCF, QE remarks) → see `42.01.10` WATCH item + 42.02/42.04 boundary.
- **Gödel numbering + 1st/2nd incompleteness + Tarski undefinability (one-paragraph sketch):**
  `24.02.01` lines ~344–442 → superseded by `42.01.09`.
- **Incompleteness as philosophy (no apparatus):** `20.09.01` (Hilbert programme, "truth outruns
  proof") → cross-ref target for `42.01.09`'s significance section; not a technical home.

## OUT OF SCOPE

- **Recursion theory proper** (recursive/Turing-computable functions, halting problem, Rice,
  recursion/s-m-n theorems, Turing/many-one degrees, the priority method): **owned by 42.04.**
  `42.01.08` *imports* the notion of a recursive function as a cross-ref; it does not develop it.
- **Systematic model theory** (ultraproducts/Łoś as a method, saturation, types, categoricity,
  preservation, quantifier elimination as a programme, Ehrenfeucht–Fraïssé, o-minimality):
  **owned by 42.02.** `42.01.07` gives only the canonical *one-shot* corollaries of
  compactness/LS.
- **Metatheory of ZFC models / forcing / absoluteness** (the *resolution* of Skolem's paradox,
  inner models, independence): **owned by 42.03.** `42.01.07` only *states* Skolem's paradox.
- **Second-order / infinitary / modal logic** (Enderton ch. 4 sketches second-order logic and
  its failure of completeness/compactness): a single *pointer* paragraph inside `42.01.07`
  suffices; a full second-order-logic unit is **not** proposed here (out of the headline-theorem
  scope; revisit only if the spine plan wants a "limits of first-order logic" capstone).
- **Elementary critical-thinking logic** (syllogisms, informal fallacies, inductive reasoning,
  decision theory, cognitive biases): the `24-logic`/`25-logic` survey chapters — a *different*
  (intro/general-education) curriculum layer, intentionally not in this metalogic spine.

---

### Summary
**9 firm genuine gaps** (`42.01.01`–`42.01.09`) + **1 conditional WATCH** (`42.01.10`,
Entscheidungsproblem — pending 42.02/42.04 boundary). **9 COVERED-as-sketch** topics superseded.
**5 OUT-OF-SCOPE** buckets (recursion theory → 42.04; systematic model theory → 42.02; ZFC
metatheory → 42.03; second-order/infinitary/modal; elementary logic).
