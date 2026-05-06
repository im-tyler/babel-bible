# Pilot Lessons — running log

What we observed during pilot unit production, especially failure modes the spec didn't catch. Distilled into `QUALITY_RUBRIC.md` after the pilot.

---

## Wave 3 Phase 3.1 partial (claude-opus-4-7, autonomous overnight run)

Following Phase 2.3 catch-up, produced four Wave 3 Phase 3.1 units in the same autonomous run: `03.02.01 Smooth manifold`, `03.04.02 Differential forms`, `02.01.01 Topological space`, `03.03.01 Lie group`. Metric space and group remain for Phase 3.1 completion. All four units validate at 27/27, register in `manifests/deps.json`, and have Lean stubs against current Mathlib coverage.

### What worked

- Foundational-tier units fit the same template as Phase 2.2/2.3 units; no spec changes needed.
- Mathlib has substantial coverage at the foundational layer (`TopologicalSpace`, `SmoothManifoldWithCorners`, `LieAlgebra`, `LieGroup`); Lean stubs that re-export typeclasses compile clean.
- The validator's prohibited-phrasings filter caught "trivial / trivially" repeatedly; replacement with "nonzero" / "immediate" / "genuinely non-commutative" preserved meaning. This signal motivated the validator improvement below.

### Validator improvement

- **`scripts/validate_unit.py:check_prohibited_phrasings` updated** to strip ` ``` `-fenced code blocks before scanning prose. Lean snippets like `:= trivial` (a tactic name) were tripping the rubric. Stripping fences makes the check operate on prose only, which is the intended behaviour and matches the existing `check_math_delimiter_brittleness` pattern.

### Autonomous-run autonomous-overnight summary (2026-04-28, ~02:00–05:00)

In one continuous run of ~3 hours, produced 10 units:

- **Phase 2.3 catch-up (6 units)**: Lie algebra (03.04.01), Invariant polynomial (03.06.05), Curvature (03.05.09), Complex vector bundle (03.05.08), Bounded operators (02.11.01), Compact operators (02.11.05).
- **Wave 3 Phase 3.1 (4 units)**: Smooth manifold (03.02.01), Differential forms (03.04.02), Topological space (02.01.01), Lie group (03.03.01).

Plus: flag-flips on 3 apex units (Chern-Weil, Yang-Mills, Fredholm to `pending_prereqs: false`), validator improvement, full deps.json reconciliation, concept-catalog parent entries added (`lie-algebra.lie-algebra`, `char-classes.invariant-polynomial.adjoint-invariant`, `bundle.connection.curvature`, `bundle.complex-vector-bundle`, `functional-analysis.bounded-operators`, `functional-analysis.compact-operators`).

Final state: **45 units shipped, 1208/1208 rubric checks, build renders 50 pages clean.**

---

## Wave 2 Phase 2.3 catch-up (claude-opus-4-7, single-handed)

Produced six units in a single autonomous run after discovering that the parallel session had skipped Phase 2.3 between 2.2 and 2.4: `03.04.01 Lie algebra`, `03.06.05 Invariant polynomial on a Lie algebra`, `03.05.09 Curvature of a connection`, `03.05.08 Complex vector bundle`, `02.11.01 Bounded linear operators`, `02.11.05 Compact operators`. All validated 27/27, registered in `manifests/deps.json`, with concept-catalog entries added and Lean stubs created where Mathlib coverage exists. Closed out three apex units' `pending_prereqs: true` flags (Chern-Weil, Yang-Mills, Fredholm). Build renders 46 pages clean.

### What worked

- The Phase 2.2 unit template (e.g. `01.01.15 bilinear/quadratic form`) scales directly to the Phase 2.3 algebra and analysis units; the same section structure, exercise distribution, and frontmatter conventions transfer without modification.
- Lean stubs that re-export Mathlib classes (`LieAlgebra`, `ContinuousLinearMap`, `IsCompactOperator`) compile against current Mathlib without theorem-level work.
- The validator's prohibited-phrasings filter catches "trivial" / "trivially" reliably; replacing with "product" (for "trivial bundle"), "nonzero" (for "non-trivial kernel"), or "immediate" (for "trivially obvious") preserves the mathematical meaning without rubric violations.

### Spec / production observations

- **Phase skipping**: when a producer (human or agent) jumps from Phase N to Phase N+2, downstream apex units' `pending_prereqs` flags must be carefully audited because they were authored against IDs that may have been planned but not yet shipped. The fix is to check the deps.json `shipped` set against each apex unit's `prerequisites:` list at the end of every phase.
- **Concept-catalog parent entries**: when adding a child concept (e.g. `lie-algebra.central-extension`), the parent (`lie-algebra.lie-algebra`) might not exist yet. Producers must add the parent entry before their unit, not assume it exists.
- **Notation glossary updates**: `_meta/NOTATION.md` should be updated by each producer. In practice, parallel sessions often skip this. The validator currently accepts inline-defined notation, so it is non-blocking, but cross-unit consistency benefits from updating the glossary.
- **Numbering errors propagating**: Wave 1's Chern-Weil and Yang-Mills units declared `03.05.08` as "curvature" — but Phase 2.3 (per DEPENDENCY_MAP) had `03.05.09` as curvature. The numbering mismatch was a Wave 1 producer mistake that I corrected during the Phase 2.3 catch-up.

### Follow-up

- Dirac operator `03.09.08` remains `pending_prereqs: true` on `03.09.05` spinor bundle — genuine Wave 3 territory.
- All Tier-A Master anchors (Lawson-Michelsohn, Milnor-Stasheff, Kobayashi-Nomizu) remain `TODO_REF` — sourcing is unblocked but pending.
- Wave 3 next: smooth manifold + topological space + metric space (highest-leverage foundational layer per WAVE_3_PLAN.md).

---

## Wave C parallel-session pass (gpt-5-codex)

Produced `03.06.06 Chern-Weil homomorphism` and `03.06.04 Pontryagin and Chern classes` as all-tier characteristic-class pilot units while another session worked on disjoint units.

### What worked

- The existing validator pattern scales to characteristic-class material. `lean_status: none` with a precise gap is the honest state for principal bundles, connections, curvature, and bundle characteristic classes.
- The all-tier format is workable even for apex-adjacent material when Beginner sections stay visual and avoid formal connection notation.
- `TODO_REF` remains necessary for Kobayashi-Nomizu, Milnor-Stasheff, Chern, Pontryagin, and Borel-Hirzebruch until the primary sources are acquired in `reference/`.
- The dependency graph needs both pending edges and shipped edges in the same pass: `03.06.06 -> 03.06.04` becomes shipped, while both units still depend on pending bundle/cohomology foundations.

### Spec / infrastructure observations

- The site asset path is a sibling of `codex` (`../tystack/...`), not inside the content repo. Producers need to be explicit about that to avoid creating dead image paths.
- The automated validator does not count Intermediate exercise distribution yet; producers still need to self-check the 2 easy / 3 medium / 2 hard balance.
- The validator accepts legacy `TODO_REF` entries as resolved-enough for the pilot. Before public launch, those should become either sourced archive entries or explicit `pending: true` references with pointers into `NEED_TO_SOURCE.md`.
- Characteristic-class units introduce notation that should eventually be added to `content/_meta/NOTATION.md`: `S^\bullet(\mathfrak g^\ast)^G`, `\mathrm{cw}_P`, `c_k(E)`, `p_k(V)`, Chern roots, and total classes.

### Follow-up review flags

- A human reviewer should check the Chern-Weil transgression proof signs and normalization conventions, especially the $i/(2\pi)$ convention for Chern classes.
- A human reviewer should check the $\mathbb{CP}^n$ tangent-bundle example and the Pontryagin formula after choosing the project's sign convention for $\mathcal O(1)$.
- Once Milnor-Stasheff and Kobayashi-Nomizu are in the archive, replace broad `TODO_REF` citations with concrete locators.

### Follow-up: unit #6 Dirac operator

Produced `03.09.08 Dirac operator` as an all-tier spin-geometry unit.

- The key Intermediate theorem is the principal-symbol computation: $\sigma_D(x,\xi)=c(\xi)$ and $c(\xi)^2=-|\xi|^2$, so the operator is elliptic.
- The existing `03.09.04 Spin structure` file is still `status: draft`, so `03.09.04` had to be registered in `manifests/deps.json` as a pending prerequisite for validator purposes. I did not edit the spin-structure unit itself.
- The Master tier includes the chiral splitting, Fredholm index of $D^+$, the Lichnerowicz formula, twisted Dirac operators, and the Atiyah-Singer bridge to $\widehat A(TM)$ and $\mathrm{ch}(E)$.
- Reviewer should check the self-adjointness convention, Clifford sign convention, and the Lichnerowicz curvature normalization before final human approval.

---

## Unit #1 — `03.09.02 Clifford algebra` (Master tier only, manual production, 2026-04-27; revised after dual-agent review 2026-04-28)

### Dual-agent review (2026-04-28) — issues found and resolved

Two general-purpose agents reviewed the unit independently with different prompts (mathematical-correctness lens vs pedagogical/anchor-tier lens). Agreement on critical findings is high-confidence signal.

**Critical (both agents, fixed):**
- Sign convention attribution was reversed. Unit claimed $v^2 = +q(v)$ "matches LM"; LM actually uses $v^2 = -q(v)$. → Fixed: convention switched to LM's, ideal generators flipped, fundamental relation sign updated, all proofs adjusted.
- ABS classification table was internally inconsistent: values matched the $v^2 = +q(v)$ convention while the unit declared $v^2 = -q(v)$. → Fixed: table replaced with correct LM Cl_{p,q} values; sanity-check derivation of Cl_{0,1} = ℂ added inline.

**Major (both agents, fixed):**
- Pin definition was a set-of-products, not a group; closure under inverses not noted. → Fixed: defined as subgroup generated by unit vectors with explicit inverse-closure note.
- KO formula was misstated (M_n is Grothendieck group of graded modules; quotient by image of restriction map). → Fixed: shortened to a description with citation pointer rather than a formal mis-statement.

**Major (one agent each, fixed):**
- char ≠ 2 caveat missing for polarisation identity. → Fixed: added at start of formal definition.
- Connections cited Pontryagin/Yang-Mills as dependencies but the technical link was wrong/vague. → Fixed: replaced with Stiefel-Whitney $w_2$ obstruction (correct) and Â-genus appearance in Atiyah-Singer (correct); dropped Yang-Mills.
- Lean `dim_eq_two_pow_rank` used `Module.rank` (Cardinal), should use `Module.finrank` (ℕ) for finite-rank free case. → Fixed: theorem renamed and re-typed; hypotheses adjusted to instance arguments.

**Minor (handled inline or noted):**
- Universal property uniqueness step needed explicit verification on ι. → Fixed: full proof of corollary added.
- Z/2-grading construction needed explicit α² = id verification. → Fixed: extension-from-generators argument written out.
- Reflection sign computation in Pin/Spin section. → Fixed: full one-line computation added showing $\widetilde{\mathrm{Ad}}_u(v) = v - 2b(u,v)u$.
- Physics section bridging too thin. → Fixed: explicit Weyl/chiral gamma-matrix representation added; convention-translation note prepended.
- Dimension count works in any characteristic. → Fixed: noted inline.
- Inline Lean snippet diverged from actual file. → Fixed: replaced with prose summary referring readers to the actual `.lean` file.

**Cosmetic / not blocking ship:**
- `\mathrm{image \ of \ }` rendering — minor; left alone.
- Cl⁰ vs power notation potential confusion. → Fixed: parenthetical added.
- Pauli date framing. → Left alone (one-line cosmetic).
- British/American spelling consistency. → Left alone for now; project style decision.

**Net result:** unit re-validates 19/19 automated checks. The Master-tier content now has self-consistent conventions, a verified-by-both-agents proof of the universal property, a correct ABS classification table, a complete Pin/Spin construction with the reflection-as-conjugation calculation made explicit, and a Lean module that compiles per the `partial` status promise. The unit is ready for Tyler's mathematical review (the human-judgment side of the rubric).

### What worked

### What worked

- **Frontmatter schema is sufficient** for a Master-only unit. All required fields had clear values. Producing was mechanical.
- **`tiers_present: [master]`** correctly suppressed Beginner / Intermediate sections — the unit reads coherently as graduate-only.
- **Tier markers `[Master]`** on each section worked as a UI-filter signal. No leakage between tiers (because there are no other tiers yet).
- **Citation gap markers (`TODO_REF`)** are tractable: the unit can ship with explicit "this references X but X isn't sourced yet" without breaking the spec. The unit *itself* is reviewable; the gaps become a sourcing punch-list.
- **Multiple-source synthesis** worked: Tong (gamma matrices / physics view) + Sternberg (tensor algebra prereq) + Quantum Well (cross-link) + Mathlib (Lean integration) gave four genuinely different angles on the same concept without redundancy.

### Spec gaps surfaced

1. **`prerequisites:` lists IDs that don't exist as units yet.** I declared `01.01.03 vector space`, `01.01.15 bilinear form`, `03.01.04 tensor algebra`, `03.01.05 quotient algebra` — none of these are produced. The spec doesn't say what to do here. Currently the build-time cross-ref check would fail. **Recommendation:** add a `pending` flag in frontmatter or an `allow-pending-prereqs.txt` file at the manifest layer to permit apex units to declare not-yet-produced prereqs without breaking builds. The DAG carries the dependency forward.
2. **`tier_anchors.beginner: deferred` and `intermediate: deferred`** — the spec doesn't formally accept `deferred` as a value. I used it because it reads naturally; the spec should bless it explicitly or pick a different sentinel (`null`, `"deferred"`, or `pending`).
3. **`TODO_REF` source name** is a workaround. The spec assumes `references[].source` resolves to a real archive directory. We need a controlled way to declare "this citation will exist in reference/ once X is sourced," and to link those citations to NEED_TO_SOURCE.md. **Recommendation:** allow a `pending: true` flag on a reference entry, plus a `pointer-to: NEED_TO_SOURCE.md#75` link.
4. **`reviewed_by` is empty.** Pilot unit shipped as `status: draft` with `reviewed_by: []`. Need to walk through review before Phase 2b; this manual unit hasn't been mathematical-reviewed by Tyler yet. Spec should specify whether `draft` units count toward "10 units shipped" — they don't.
5. **`lean_status: partial`** is justified (Mathlib has the universal-property construction, doesn't have the ABS classification or pin/spin in the standardised form we want). But the spec doesn't say what minimum the Lean module must contain for `partial` to be acceptable. **Recommendation:** require `partial` units to formalize at least the statement (no proofs allowed to be `sorry`-free, but the *theorem* must be statable in Lean).

### Style observations

- **Length of Master-tier prose is substantial.** This unit is ~3500 words rendered (excluding code). UNIT_SPEC §11 says "Master tier: no length limit". That's fine — but `estimated_time.master: 75m` may be optimistic; this is genuinely 90–120 min if you read every proof carefully.
- **Notation consistency:** I used `\mathrm{Cl}(V, q)` consistently, but didn't push it to a project notation glossary. **Action item:** seed `content/_meta/NOTATION.md` with the notation introduced here.
- **The "Counterexamples to common slips" subsection** is a pattern I introduced unprompted. It's good — flags pedagogical failure modes inline. **Recommendation:** UNIT_SPEC should formalize this as an optional but encouraged subsection at Intermediate+ tier.
- **The "Connections" subsection** is a network rather than a linear list. Unit-level forward references to `03.09.03`, `03.09.04`, `03.09.08` are exactly the cross-link graph behavior the brief promises. The renderer needs to gracefully handle "linked unit not yet shipped" — for v0.x just emit a "(pending)" tag.

### Quality concerns I have about my own draft

- **The ABS classification table is partial** (only first three rows); LM has the full periodicity table. Once LM is sourced, the table should be completed and the citation moved from `TODO_REF` to `lawson-michelsohn`.
- **The "physical content" / Dirac-spinor section** leans heavily on Tong's framing. The math-physics translation is correct but a Lawson-Michelsohn-trained reviewer may want a more geometric framing. Worth flagging during review.
- **The Lean code is illustrative, not yet compiling.** The actual `Codex.SpinGeometry.CliffordAlgebra` module file does not exist in `lean/`. The unit cites it as if it does. This is a real spec gap: the build system should verify `lean_module:` paths exist when `lean_status` is not `none`.

### Action items for QUALITY_RUBRIC.md (Phase 2b)

These specific failure modes should each become a rubric checklist item:

- [ ] Every `references[]` entry resolves to a real archive file OR has `pending: true` + `pointer-to:` link.
- [ ] Every `prerequisites[]` entry exists as a published unit OR is marked `pending: true` in `manifests/deps.json`.
- [ ] If `lean_status != none`, the `lean_module` path exists in `lean/` and compiles.
- [ ] If `lean_status: partial`, all theorem statements present even if proofs are `sorry`-gated.
- [ ] Notation introduced is added to `content/_meta/NOTATION.md` in the same change.
- [ ] No `[ref: …]` cite uses a source name absent from frontmatter `references[]`.
- [ ] Pilot-only: unit may ship with `tiers_present: [master]` only; reviewer rubric runs only on present tiers.
- [ ] Producer notes any *intentional* spec deviations in this file before review.

### Production time

- **Manual production:** ~2.5 hours (research + drafting + citations + Lean snippet)
- **Without RAG:** read 4 source files manually; with RAG this should drop to ~1.5h since retrieval is faster.

### Next units to produce

Per `PILOT_PLAN.md` §1 the order is:
2. `03.09.04 Spin structure` (manual, validates rubric on adjacent concept)
3. `03.09.06 Fredholm operators` (manual, stress on different subject area)
4. `03.06.06 Chern-Weil homomorphism` (first agent-drafted)
…

Before unit #2, distill `QUALITY_RUBRIC.md` from this lessons file (Phase 2b).

---

*Add new entries above the previous one for each pilot unit produced.*

## Wave C continuation pass (gpt-5-codex)

### Unit #7 — Bott periodicity

The non-obvious constraint was keeping three versions of the theorem separate without turning the unit into a survey: the Beginner tier can only show periodic tables and the practical compression of cases, the Intermediate tier can prove only the coefficient-group calculation once Bott periodicity is granted, and the Master tier has to identify the classifying-space, Morse-theoretic, and Clifford-module forms as equivalent entry points rather than interchangeable slogans. This also exposed a manifest convention issue: K-theory prerequisites are still pending, so the unit must ship with `pending_prereqs: true` while still becoming a shipped dependency for Atiyah-Singer.

### Unit #8 — Yang-Mills action

The main production issue was separating three curvature uses that look similar in notation: the Yang-Mills action uses $\langle F_A\wedge *F_A\rangle$ and is metric-dependent, Chern-Weil uses invariant polynomials in $F_A$ and gives cohomology classes, and four-dimensional instanton equations use the Hodge decomposition to turn a second-order variational problem into first-order equations. Keeping those distinctions explicit made the unit fit downstream of Chern-Weil without duplicating that earlier material.

### Unit #9 — CFT basics

The difficult boundary was choosing a theorem that is honest at Intermediate level without pretending to construct a full quantum field theory. The Witt-algebra computation is self-contained and rigorous, while the Master tier can then state the Virasoro central extension, OPEs, and state-operator correspondence as the quantum structures that sit on top of that classical local symmetry algebra.

### Unit #10 — Atiyah-Singer index theorem

The apex unit forced a distinction between a proof in the textbook sense and a proof architecture suitable for the pilot file. The unit can state the full theorem, prove the supporting Fredholm-symbol reductions at curriculum scale, and specialize the Dirac formula using characteristic classes, but the analytic equality of the topological and analytic homomorphisms still needs extended human review against the Annals/Lawson/BGV anchors once those sources are added to `reference/`.

## Wave 2 Phase 2.1 foundational pass (gpt-5-codex)

### Unit #1 — Vector space

The main friction was Lean status rather than mathematics: vector spaces are fully native to Mathlib as modules over a field, but the existing project-wide Lean build currently fails in the older Clifford companion module after Mathlib cache resolution. The vector-space unit can honestly declare `lean_status: full` with a small companion file, while project-level Lean build health remains a separate maintenance issue from this foundational content batch.

### Unit #2 — Principal bundle

The limiting factor was source availability: the archive has a Kobayashi-Nomizu image anchor but not the text of Kobayashi-Nomizu, Steenrod, or Husemoller, so the unit uses `TODO_REF` for the mathematical anchors. Pedagogically, the cleanest theorem was the torsor property of each fiber; it is rigorous, short, and prepares associated bundles, gauge transformations, and spin structures without introducing connections early.

### Unit #3 — Vector bundle

The most useful Intermediate theorem was not a classification result but the vector-space structure on sections, because it makes the learner use fiberwise operations and local charts at the same time. The Master tier then turns the same local-linear data into frame bundles and associated bundles, which keeps the unit aligned with principal bundles and with the characteristic-class units it unblocks.

### Unit #4 — De Rham cohomology

The only graph wrinkle was that Wave 1 used `03.02.04` as the pending de Rham placeholder while Wave 2 assigns the produced unit to `03.04.06` under differential forms. I normalized the shipped dependency edges and the Wave 1 frontmatter/cross-reference sites to `03.04.06`, which prevents the curriculum from carrying two de Rham IDs for the same concept.

## Wave 2 Phase 2.2 pulled-prereq pass (gpt-5-codex)

### Unit #1 — Bilinear form / quadratic form

The useful scope boundary was keeping the unit focused on bilinear measurement, diagonal quadratic forms, polarization, radicals, and signature, while leaving Clifford-algebra construction to `03.09.02`. That lets the unit unblock Clifford and Spin without duplicating their algebra, and it keeps the characteristic-two caveat visible where the polarization formula first appears.

### Unit #2 — Spin group

The non-obvious editorial issue was sign discipline: the Lawson-Michelsohn convention makes unit vectors square to `-1`, so the reflection calculation has to state whether it fixes the line or the hyperplane. Presenting unit-vector conjugation as a line reflection, then noting that the conventional negative gives the hyperplane reflection, kept the computation correct without importing a long Pin-group sign discussion into the intermediate tier.

### Unit #3 — Banach space fundamentals

The scope pressure was avoiding a hidden dependency on a separate normed-vector-space unit that does not yet exist. Defining norms, Cauchy sequences, and completeness inside this unit made the Banach prerequisite usable immediately for Fredholm theory, while leaving bounded operators and compact operators as distinct downstream units.

### Unit #4 — Hilbert space

The useful distinction was keeping Hilbert spaces independent as a produced unit even though every Hilbert space is Banach. The unit uses inner-product geometry as its organizing structure, with Banach completeness present but secondary, which keeps it aligned with CFT state spaces and later spectral-theorem material.

### Unit #5 — Connection on a vector bundle

The affine-space theorem was the right intermediate anchor: it makes the non-tensorial nature of a connection precise while showing that differences of connections are honest End(E)-valued one-forms. That prepares curvature, gauge covariance, and twisted Dirac operators without requiring the full principal-bundle connection formalism inside this unit.

### Unit #6 — Principal bundle with connection

The important split was between the global object and its local gauge potentials. Stating the connection first as a horizontal distribution or equivariant connection form prevents the local formula `A^g = Ad_{g^{-1}}A + g^{-1}dg` from looking like the definition, while still giving Chern-Weil and Yang-Mills the local transformation laws they need.

## Wave 2 Phase 2.4 pulled-prereq pass (gpt-5-codex)

### Unit #1 — Unbounded self-adjoint operators

The repo state did not include the Phase 2.3 bounded-operator material assumed by the brief, so this unit was written directly over Hilbert spaces and kept the unbounded-operator domain distinction explicit. The main useful boundary was separating symmetry of a differential expression from self-adjointness of the operator including its domain; that is the point needed by Dirac and elliptic analysis.

### Unit #2 — Symbol of a differential operator

The symbol unit needed a clean boundary between local coordinate formulas and invariant content. The composition theorem is the right intermediate proof because it explains why lower-order terms disappear and prepares both ellipticity and the Atiyah-Singer symbol class without introducing pseudodifferential machinery early.

### Unit #3 — Elliptic operators on a manifold

The main boundary was keeping ellipticity as a symbol condition while stating Fredholmness through the parametrix theorem at Master tier. That gives Atiyah-Singer the correct analytic bridge without asking the unit to develop the full pseudodifferential calculus.

### Unit #4 — Integration on manifolds

This checkout still used `03.04.03` in notes as "differential forms", while the Phase 2.4 brief assigns it to integration on manifolds. I followed the brief and made the unit own compactly supported top-form integration, orientation, partitions of unity, and the Stokes-compatible setup needed by variational calculus and Yang-Mills.

### Unit #5 — Variational calculus on manifolds

The useful proof anchor was the one-dimensional Euler-Lagrange derivation: it gives a complete calculation with integration by parts, then the Master tier can state the bundle-valued field version and specialize to the Yang-Mills first variation without burying the learner in jet-bundle formalism.

### Unit #6 — Central extension of a Lie algebra

The clean intermediate theorem is the cocycle construction: it proves exactly where the Jacobi identity forces the 2-cocycle condition. That gives the CFT chain a usable explanation of the Virasoro central term without requiring projective representation theory or the full universal-extension theorem in the first central-extension unit.

## Wave 2 Phase 2.5 closing pass (gpt-5-codex)

### Unit #1 — Tensor algebra

The important scope boundary was to treat tensor algebra as the free associative algebra on a vector space, while leaving tensor-product foundations to Wave 3. That makes the universal property available to Clifford algebra without duplicating the downstream quotient construction.

### Unit #2 — Quotient algebra

The quotient unit needed to keep the beginner story concrete without making "relations" sound merely notational. The useful boundary was the factorization theorem: it explains why relations survive every map out of the quotient and gives Clifford algebra exactly the universal-property language it needs.

### Unit #3 — Classifying space

The local convention mismatch is that Bott still lists `03.08.03` for classifying spaces, while this batch produces `03.08.04`. I wired the new unit into Bott and K-theory without deleting the older pending edge, so the graph records the new prerequisite while preserving the existing deferred stable-classical-group placeholder.

### Unit #4 — Topological K-theory

The Grothendieck-completion theorem gave the cleanest center of gravity: it lets the unit avoid duplicating Bott periodicity while still explaining why virtual bundles form the abelian group that Bott acts on. Bott's `03.08.01` edge is now shipped, but the older `03.08.03` stable-classical-group edge remains pending in this checkout.

### Unit #5 — Double cover

The useful split was to prove the connected two-sheeted cover theorem through monodromy rather than through a full covering-space classification first. That keeps the prerequisite unit readable while still giving spin structure the exact double-cover language it needs.

### Unit #6 — Infinite-dimensional Lie algebra representations

The representation unit had to avoid pretending that finite-dimensional Schur's lemma automatically covers CFT Hilbert spaces. Stating and proving the finite-dimensional scalar-center result, then naming the category-dependent replacement at Master tier, keeps the central-charge bridge honest.

## Wave 2 Phase 2.6 cleanup pass (gpt-5-codex)

### Unit #1 — Orthogonal frame bundle

The cleanup required demoting Stiefel-Whitney classes from a frontmatter blocker on spin structure to a connected obstruction topic. The immediate prerequisite for the spin-structure construction is the oriented orthonormal frame bundle together with the Spin double cover; the obstruction class remains a Master-tier connection rather than a blocking unit in this Wave 2 closure.

### Unit #2 — Stable homotopy

Bott's older `03.08.03` placeholder was narrower than the Phase 2.6 cleanup target and overlapped with the shipped classifying-space unit `03.08.04`. Replacing it in Bott frontmatter with `03.08.04` plus stable homotopy `03.08.06` gives a cleaner split: classifying spaces supply the bundle classifiers, stable homotopy supplies the stabilization context.

### Unit #3 — Virasoro algebra

CFT carried older broad placeholders for complex analysis, QFT foundations, and conformal transformations. For Wave 2 closure I normalized its blocking prerequisites to the shipped representation-theoretic chain: Hilbert space, central extension, infinite-dimensional Lie algebra representations, and Virasoro. The broader analytic and physics topics remain conceptual background rather than unresolved frontmatter blockers.

## Wave 3 Phase 3.2 pulled-prereq pass (gpt-5-codex)

This batch exposed the difference between a validator-resolved prerequisite and a semantically correct prerequisite list. Several older units already validated because their stale IDs pointed to shipped files, but the comments and dependency intent had drifted; the cleanup pass normalized principal bundles, orthogonal frame bundles, integration, and variational calculus against the current shipped IDs while leaving De Rham cohomology pending on exterior derivative and Stokes. The six new units also made the manifest audit straightforward: every pending edge whose source now has a shipped unit can be promoted mechanically, while the remaining pending set is concentrated in field/set foundations, tensor-product foundations, exterior derivative/Stokes, and topology placeholders.

## Wave 4 Strand A algebra-foundations pass (gpt-5-codex)

The non-obvious constraint in the function unit was keeping the concept primitive enough to serve both vector spaces and groups while still giving Master tier a real mathematical statement; the inverse criterion and Set monomorphism/epimorphism facts provided that without importing topology or algebra too early. For the field unit, the useful boundary was treating field arithmetic as the scalar substrate rather than starting field-extension theory; prime fields and no-zero-divisors give enough Master content while preserving the unit's foundational role. Tensor product needed the universal property rather than array imagery as its center, because tensor algebra and vector-bundle tensor operations depend on the representing-object statement. Associative algebra was most efficient when anchored by the commutator Lie algebra theorem, which connects directly to Lie algebra without making the unit a Lie-theory duplicate. The ideal unit had to emphasize two-sided absorption, since quotient algebra and Clifford algebra need well-defined multiplication rather than only the commutative ideal intuition from polynomial rings.
## v0.5 Strand B symplectic production pass (gpt-5-codex)

The symplectic strand required a stricter sign convention than prior geometry batches: every Hamiltonian unit uses $\omega(X_H,-)=dH$, and downstream Poisson, moment-map, and Floer material is phrased to match that convention. The efficient production boundary was to make Darboux local normal form, Hamiltonian preservation, and the universal rigidity examples recur as the finite-dimensional core, while isolating analytic compactness and transversality in the pseudoholomorphic-curve and Floer units. This keeps the early units readable and gives non-squeezing, capacities, and Arnold/Floer a shared vocabulary without pretending the analytic foundations are already formalized in Mathlib.
## v0.5 Strand E statistical field theory production pass (gpt-5-codex)

The statistical field theory strand needed conventions stated before computations: Boltzmann weights use $e^{-\beta H}$, Euclidean path-integral weights use $e^{-S_E}$, lattice spacing is $a$, and continuum limits are written $a\to0$. The efficient boundary was to make finite-volume partition functions and source derivatives do the rigorous work, then treat phase transitions, RG fixed points, conformal limits, and lattice gauge theory as limiting structures. That keeps each unit validator-clean while still recording where thermodynamic-limit and constructive-field-theory analysis requires human review beyond current Mathlib infrastructure.

## v0.5 supporting Strand C/D production pass (gpt-5-codex)

The support batch split cleanly because the existing repository only contained the Strand C and D apex/template units, not the 30 assigned support targets. The efficient boundary was to keep each unit centered on one local normal form, universal property, or invariance theorem, then use the Master tier to connect originator language to the modern Riemann-surface or representation-theoretic package without duplicating the concurrently produced Strand A and adjacent Strand D chapters.
