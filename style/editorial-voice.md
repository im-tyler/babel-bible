# Babel Bible — Editorial Voice

The unified prose style every agent must respect when producing units, flows, bridges, and connection prose. Without this document, parallel agents produce stylistically inconsistent output. With it, the curriculum reads as if a single graduate-textbook author wrote the whole thing.

Synthesised from the 182 currently-shipped units. The voice they share — and the voice every new unit must extend — is captured below.

---

## 1. Core voice attributes

The Codex voice is:

- **Direct, not breezy.** Sentences carry weight. We do not pad with "let us now consider" when "Consider" suffices.
- **Confident without being condescending.** The reader is treated as an adult intent on understanding.
- **Conceptually frank.** When something is hard, we say so. When something is "the foundational reason," we say so. Hedging language ("perhaps," "arguably") is avoided unless genuinely warranted.
- **Historically literate.** When citing originators, the prose carries a sense that we have read the original — not just the modern textbook.
- **Connection-aware.** Every concept is named in relation to others. Standalone introductions of definitions without context are anomalies, not the norm.

The voice is **not**:

- Conversational ("So basically what's happening here is…")
- Hype-driven ("This astonishing result connects…")
- Apologetic ("You may already know this, but…")
- Faux-folksy ("Think of a vector space as a club…")
- Flat-textbookish ("Definition 3.4. A scheme is …")

---

## 2. Sentence-level conventions

### Cadence

- **Definitions in short sentences**, set off from surrounding prose. *"A sheaf on $X$ is a presheaf satisfying the gluing axiom."* Not *"We may take a sheaf on $X$ to be a presheaf which has the additional property that gluing holds."*
- **Synthesis claims in longer sentences**, where the structure of the claim mirrors the structure of the connection. *"Cohomology measures the failure of local sections to glue globally — a failure that is invisible on affine schemes (where everything glues, by Serre's theorem) and which on projective schemes is governed by the dimensions of $H^i$."*
- **Mix lengths within paragraphs.** A paragraph of all-short sentences feels staccato; all-long, exhausting. Three to five sentences per paragraph, with at least one short and one long.

### Equation framing

- **Display math is for results that the reader will return to.** Throwaway equations stay inline.
- **Every display equation deserves a sentence before and after.** The before sets up what the equation says; the after notes what's important about it.
- **Equation labels are minimal.** Avoid `\tag{}` unless multiple later equations reference the same display.

### Punctuation

- Em dashes for parenthetical synthesis ("Cohomology — the right-derived functors of $\Gamma$ — satisfies …").
- Colons before lists or extended consequences ("There are three reasons: …").
- Semicolons sparingly, for parallel structure.

---

## 3. Reference patterns

### Backward references

- **Preferred**: *"As we saw in §4.02.02, the structure sheaf $\mathcal{O}_X$ recovers the ring on affine charts."*
- **Acceptable**: *"Recall the affine-scheme definition (04.02.02): …"*
- **Avoid**: *"Earlier, we discussed how …"* (vague, no cross-link).

The unit ID — `04.02.02` — is the canonical anchor. Plain language ("the affine scheme unit") is fine when the ID has just been used; otherwise include the ID for traceability.

### Forward promises

- **Preferred**: *"This pattern recurs in §04.04.01 (Riemann-Roch), where the same dimension count is precisely the obstruction we are now identifying."*
- **Acceptable**: *"We will see in the Riemann-Roch unit that this number equals $\deg(D) + 1 - g$."*
- **Avoid**: *"More on this later."* (lazy)

### Citation patterns

- **Originator**: full first reference uses author + paper title + year. *"Frobenius's 1896 *Über die Charaktere endlicher Gruppen* introduced characters as eigenvalues of the group determinant."* Subsequent references can shorten: *"Frobenius's 1896 paper."*
- **Modern textbook**: use a recognisable short form once established. *"Hartshorne's §III.7 gives the algebraic-geometric proof."*
- **Cross-references to other Babel Bible units**: ID-only, as in §3.1.

---

## 4. Connection-type prose patterns

When invoking a registered connection from `manifests/connections.json`, the prose should signal the connection type. These are the canonical phrasings (per the nine connection types):

| Type | Canonical phrasing |
|---|---|
| **Generalisation** | "X generalises Y by relaxing condition Z." / "X is the natural setting in which Y becomes a special case." |
| **Specialisation** | "Y is the X-instance where Z holds." / "When restricted to Z, the theorem reduces to Y." |
| **Analogy** | "X and Y share the index = topology pattern: …" / "The same structure recurs: in X, the role of $A$ is played by $A'$ in Y." |
| **Dual** | "X and Y are dual under the correspondence T." / "Spec turns a ring into a space; Γ turns the space back into the ring." |
| **Foundation-of** | "X rests on Y." / "Without Y, the construction X cannot proceed." |
| **Limit** | "X is the colimit of Y as Z varies." / "The stalk is what the section becomes when restricted to a point." |
| **Equivalence** | "X and Y are equivalent through T." / "Algebraic and analytic categories coincide on smooth projective varieties via GAGA." |
| **Recurrence** | "We have seen this pattern before in W; here it appears as X." / "The functoriality of cohomology recurs across topology, group theory, and algebraic geometry." |
| **Bridging-theorem** | "Theorem T identifies X with Y under hypotheses H." / "The Hodge decomposition is exactly the bridge that lets algebraic data control topological invariants." |

Use these phrasings as a starting palette. Variation is fine; the connection-type signal must remain explicit.

---

## 5. Tier-specific voice

### Beginner

- **Vocabulary**: the vocabulary of physics popularisations (Strogatz, 3Blue1Brown, Penrose's *Road to Reality*) where appropriate. Concrete examples lead.
- **Sentence length**: short to medium. Long sentences are read more slowly than short ones; Beginner readers are still building intuition.
- **No advanced symbols**: no $\partial$, $\int$, $\sum$, $\prod$, $\nabla$, $\otimes$, $\forall$, $\exists$. Use prose where formulae would slow comprehension.
- **Image required**: every Beginner section has at least one visual reference, even if placeholder.
- **Tone**: "Imagine," "Picture," "Think of" — invitational without being condescending.

### Intermediate

- **Vocabulary**: graduate-textbook standard. Technical terms used freely, with the assumption that the reader has met them in prerequisite units.
- **Definitions are formal**: numbered, set off, complete.
- **Theorems with proofs**: at least one named theorem per unit, with a proof or proof sketch. Sketches must say where the work happens, not gloss over it.
- **Exercises substantial**: 5–7 exercises mixing easy/medium/hard, with hints and full answers in `<details>` blocks.
- **Lean stub mandatory** when relevant Mathlib infrastructure exists.

### Master

- **Vocabulary**: graduate seminar / monograph level. Statements are precise; nuances are surfaced.
- **Connections section is dense**: every other concept this concept relates to gets a paragraph. Use the connection-type phrasings (§4).
- **Historical & philosophical context section is the place where genius-prose lives**: quote or paraphrase the originator's framing where the original paper is readable. Cite by exact title and year.
- **Bibliography is curated**: 6–10 references, mixing originator papers, canonical textbooks, and at least one current-research-level reference.
- **Advanced results section names what's beyond this unit's scope**: Kazhdan-Lusztig, perfectoid spaces, geometric Langlands, etc. Foreshadowing.

---

## 6. Originator-prose integration

When citing an originator paper that's readable in 2026 (Cauchy 1825, Riemann 1851/1857, Cartan 1894, Frobenius 1896, Hodge 1941, Mumford 1965, etc.), the Master Historical section should:

1. Name the paper with exact title and year (italicised).
2. Briefly contextualise the historical moment (Cartan's dissertation; Hodge's wartime monograph; Mumford's GIT framework).
3. Quote or paraphrase the originator's framing, distinguished from the modern synthesis.
4. Note how the modern synthesis differs from the original.

Example:

> Bernhard Riemann's 1857 *Theorie der Abelschen Functionen* introduced what we now call the genus through period relations of integrals — not as a topological count of holes; that interpretation came decades later via Möbius and Klein. For Riemann, the genus was the dimension of the space of holomorphic 1-forms, computed by analytical means; the topological reformulation as $\dim H^1(C; \mathbb{R})/2$ was a downstream insight.

This is the difference between *citing* an originator and *channelling* one. The originator citation in the unit's `references:` block is necessary but not sufficient; the Master section's prose must do the work of historical situating.

---

## 7. What good Babel Bible prose actually reads like

Reproduced from `04.05.04 Cartier divisor` Master section, unedited:

> *Pierre Cartier introduced this notion in a series of Bourbaki-seminar talks during 1957–58, in the context of Grothendieck's nascent scheme theory. Cartier was solving the problem: how to define divisors on **non-classical** schemes (non-locally-factorial, non-normal, non-Noetherian) so that the correspondence with line bundles persists.*
>
> *The Weil-divisor formalism, while geometrically natural, breaks down on:*
>
> - *Singular varieties: prime divisors at singularities may not be locally principal.*
> - *Non-normal varieties: orders $v_Y$ may not be integer-valued.*
> - *Arbitrary base schemes in the relative setting.*
>
> *Cartier's insight: define divisors via local equations, not via formal sums of subvarieties.*

Notice:
- Direct sentences carrying conceptual weight
- Explicit naming of the problem ("Cartier was solving the problem: how to …")
- Inline list breaks for parallel structure
- The italicised contrasting term ("non-classical") doing rhetorical work
- The closing sentence stating the *insight*, not just the *definition*

This is what every Master section aspires to. New units should match this register.

---

## 8. What bad Babel Bible prose looks like (avoid)

> "There are many divisors in algebraic geometry. One such divisor is the Cartier divisor. The Cartier divisor was introduced by Pierre Cartier. It has many uses. It is related to line bundles. It is also related to Weil divisors. The Cartier divisor is important."

Failure modes:
- Six independent sentences with no connective tissue
- No motivation, no synthesis claim
- "Important" without specifying *for what*
- "Many uses" without naming any
- No anchor phrase invocation, no connection-type signal

Agents that produce prose like this fail the quality-sampling check (§8 of orchestration protocol).

---

## 9. Versioning and review

This document is versioned. Material changes to the editorial voice trigger a re-evaluation of all subsequently-produced units against the new voice. Quarterly review by the operator. Agents read this document at the start of every production task as part of their connection brief.

*Voice document v1. Synthesised from the 182-unit shipped corpus. To be refined as patterns emerge from the Tier α campaign.*
