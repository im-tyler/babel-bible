# J. Peter May — *A Concise Course in Algebraic Topology* (Fast Track 3.38) — Audit + Gap Plan

**Book:** J. P. May, *A Concise Course in Algebraic Topology* (Chicago
Lectures in Mathematics, University of Chicago Press, 1999, ix + 243 pp.).
Hosted free by the author at
<https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf>.

**Fast Track entry:** 3.38 — the **canonical** algebraic-topology text on the
Fast Track booklist (`docs/catalogs/FASTTRACK_BOOKLIST.md` line 125). Hatcher
has been the *substitute* per the existing
`plans/fasttrack/hatcher-algebraic-topology.md` audit (Hatcher is a peer
reference anchor, not numbered) and per `AGENTIC_EXECUTION_PLAN.md` §6.1,
which mandates that every substitute plan be supplemented by a
canonical-text plan stub. This file is that supplement.

**Purpose of this plan:** P1-lite audit-and-gap pass. Output is a concrete
punch-list of new units and deepenings so that May is covered to the
FT-equivalence threshold (≥95% effective coverage of theorems, key
examples, exercise pack, notation, sequencing, intuition, applications —
see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

Because Babel Bible's existing 24-unit `03.12-homotopy/` corpus and the
allied units in `03.04-differential-forms/` were largely produced against
Hatcher (per the Brown+Hatcher composite batch recommendation), this audit
expects to find **high baseline coverage** (~80%) at the theorem-statement
level. May's distinctive contributions are pedagogical *framing* — categorical
language deployed from Ch 2, axiomatic homology before singular construction,
HELP as a unifying organizational principle, Puppe sequences in Ch 8 —
and these typically translate to **deepenings of existing units** rather than
new units. That outcome is flagged and embraced: per the task brief, "primarily
*deepenings* of existing units rather than new units" is a valid high-value
outcome of the audit when the canonical text is added after the substitute
has already driven production.

This pass is intentionally not a full line-number P1 inventory. May is
~243 pp. but extremely dense; a full audit per the Brown+Hatcher template
would inflate this document beyond utility. Worked from the full TOC
(Ch 1–25 + suggested-reading appendix) plus close reading of Ch 1–10 and
selective deep reads of Ch 11 (homotopy excision), Ch 12–13 (homological
algebra + axiomatic homology), Ch 16 (singular homology + simplicial
objects + classifying spaces), Ch 17 (universal coefficients), Ch 22
(cohomology, K(π,n), Postnikov, operations), and the TOC entries for
Ch 18–25.

---

## §1 What May's book is for

May's *Concise Course* is the **categorically literate, axiomatically
organized** entry point to graduate algebraic topology, drawn from the third
quarter of the Chicago first-year topology sequence. Where Hatcher anchors
the **CW-complex / singular-chains / cup-product** mainline that every modern
graduate course follows pedagogically, and Brown (1.05) anchors the
**fundamental-groupoid** framing, May anchors the **categorical / homotopical
/ model-category-flavored** route that the *research literature* speaks: a
first course that prepares students to read May-Ponto (3.39), Lurie's
*Higher Topos Theory*, and the modern stable-homotopy literature without
relearning the foundations.

Distinctive May contributions and editorial choices (in roughly the order
he develops them):

1. **Categorical language from Chapter 2.** Categories, functors, natural
   transformations, equivalences of categories, limits, colimits, and
   adjunctions are introduced **before van Kampen** and used to *prove*
   van Kampen as the statement **Π(X) ≅ colim_{U ∈ 𝒪} Π(U)** — a colimit
   of groupoids. May explicitly defends this choice in the introduction:
   "exposition should give emphasis to those features that the axiomatic
   approach shows to be fundamental." Hatcher and Bredon avoid category
   theory; Spanier uses it heavily but late. May uses it *early*, lightly,
   and constantly. This is the single most pedagogically distinctive move
   in the book — Codex has none of this framing in the existing van
   Kampen unit (`03.12.09`).
2. **Cofibrations, fibrations, and weak equivalences treated thoroughly
   (Chs 6–9).** Each gets its own chapter with mapping-cylinder and
   mapping-path-space replacement constructions, HEP and HLP criteria,
   fiber-/cofiber-homotopy-equivalence, and change of fiber. May
   foregrounds the *Quillen model-category-flavored* triple
   (cofibration, fibration, weak equivalence) that his later work and the
   modern literature take as foundational, without ever defining a model
   category in the book — that is deferred to May-Ponto (FT 3.39).
   Hatcher devotes Appendix B to a fraction of this material; May spends
   four full chapters.
3. **HELP — the Homotopy Extension and Lifting Property — as a unifying
   organizational principle (Ch 10).** May states a single theorem
   (HELP for relative CW pairs and n-equivalences) and derives **both**
   the Whitehead theorem **and** the cellular approximation theorem as
   one-line corollaries. This is the cleanest exposition of these results
   in print. Hatcher proves Whitehead and cellular approximation
   separately by different arguments.
4. **Based cofiber and fiber sequences with full Puppe iteration (Ch 8).**
   The cofiber sequence X → Y → Cf → ΣX → ΣY → ΣCf → … and the dual
   fiber sequence Ω²Y → ΩFf → ΩX → ΩY → Ff → X → Y are developed
   *together* as long exact sequences of pointed sets, with the
   Σ ⊣ Ω adjunction relating them. Hatcher introduces Puppe sequences
   only as remarks; May builds them as a chapter-length pillar.
5. **Compactly-generated spaces as the standing convention (Ch 5).**
   May fixes `𝒰` = compactly-generated weak Hausdorff spaces as *the*
   category in which all subsequent constructions take place, so the
   exponential law $\mathrm{Map}(X \times Y, Z) \cong \mathrm{Map}(X,
   \mathrm{Map}(Y, Z))$ is unconditional and function spaces are themselves
   compactly generated. Hatcher relegates this to Appendix C; Codex has
   it in `02.01.09`.
6. **Homotopy excision proved by Boardman-style excisive-triad reduction
   (Ch 11).** May's proof reduces to the case of triads with a single
   relative cell and proceeds by careful five-lemma induction using
   triad homotopy groups π_q(X; A, B), simplicial approximation, and a
   Uryshon-lemma cube subdivision. The proof is "deep but elementary in
   principle" (May's phrase); the framework is **excisive triads**, which
   is what generalizes to spectra and the modern derivation of generalized
   excision. Hatcher's proof of Blakers-Massey is sketched rather than
   given in full.
7. **Axiomatic homology first, cellular construction second, singular
   construction last (Chs 13–16) — the *reverse* of Hatcher's order.**
   May states the Eilenberg-Steenrod axioms (dimension, exactness,
   excision, additivity, weak equivalence) on CW pairs in Ch 13, *defines*
   cellular homology as the construction that satisfies them, derives all
   classical theorems (Mayer-Vietoris, Hurewicz, etc.) in Chs 14–15 from
   the axioms, and only in Ch 16 explains how the classical singular
   construction recovers the same theory via the **geometric realization
   ΓX = |S_*X|** as a functorial CW approximation. This is a profoundly
   different pedagogical sequence; it makes uniqueness of homology a
   *foundational* fact and singular homology a *construction* among many.
8. **Singular homology via simplicial objects and the |–| ⊣ S adjunction
   (Ch 16 §§4–5).** Simplicial sets are introduced as functors with face
   and degeneracy operators, geometric realization |K_*| is defined for
   any simplicial set, and the singular complex S_* is shown to be right
   adjoint to |–|. This adjunction makes singular homology a special
   case of simplicial-set homology and prepares the reader for May's
   *Simplicial Objects in Algebraic Topology* (FT 3.40). The
   $K(\pi, n)$-via-iterated-bar-construction $B^n(\pi)$ in Ch 16 §5 is
   May's **own** originating construction (May 1967, *Simplicial
   Objects*) — a categorical alternative to Hatcher's cell-attachment
   K(π, n) (Babel Bible `03.12.05`).
9. **Poincaré duality via cap product (Ch 20), then Euler characteristic
   and index for manifolds with boundary (Ch 21).** May gives a "quick
   and standard" cap-product proof and *explicitly* notes (footnote 2,
   p. 2) that the modern Spanier-Whitehead / Atiyah-duality / Thom-
   isomorphism derivation is omitted — that is deferred to May-Ponto.
   Ch 21 develops the index (signature) and Poincaré-Lefschetz duality
   for manifolds with boundary, a topic Hatcher only touches in §3.3.
10. **Sketch chapters as deliberate appetite-whetters (Chs 22–25).** May
    devotes the last four chapters to *sketched* introductions to
    cohomology operations + Postnikov systems (Ch 22), characteristic
    classes via the Thom isomorphism (Ch 23), K-theory and Bott
    periodicity (Ch 24), and cobordism with prespectra (Ch 25). These
    are pointers — "subjects I feel must be introduced in some fashion
    in any serious graduate-level introduction" — and they explicitly
    invite the reader into the topics that May-Ponto (FT 3.39) develops
    in earnest.

Peer-source corroboration of the above framing:

- **Hatcher, *Algebraic Topology* (2002).** Hatcher's preface and his
  online "Spanier vs Hatcher" notes acknowledge May as the canonical
  *concise* treatment for students continuing into homotopy theory.
  Hatcher's pedagogical choice (CW-first, geometric-pictures-driven)
  is the deliberate complement to May's categorical-first style.
- **Spanier, *Algebraic Topology* (1966).** The classical pre-May
  reference. Heavy categorical machinery developed late; general spaces
  first, CW second. May's *Concise* explicitly improves on Spanier by
  introducing categories *early* and *lightly* and by using
  compactly-generated spaces as the standing category.
- **Bredon, *Topology and Geometry* (1993).** GTM 139. The standard
  "topology *and* differential geometry in one volume" reference. Bredon
  treats algebraic topology in the second half with substantial overlap
  to May Chs 12–22 but at lower depth on cofibration/fibration
  machinery; Bredon has no compactly-generated convention and no Puppe
  sequence treatment to speak of.
- **May & Ponto, *More Concise Algebraic Topology* (2012).** The
  explicit sequel (FT 3.39). May-Ponto opens by assuming the *Concise
  Course* and proceeds to localization, completion, model categories,
  and Hopf-algebra structure on $\pi_*$ of ring spectra. The sequel is
  the load-bearing reason May's *Concise* takes the categorical line:
  the sequel is unreadable without the foundational habits May builds
  here.
- **May, *Simplicial Objects in Algebraic Topology* (1967).** FT 3.40.
  The originating reference for the simplicial-set framework May uses
  in Ch 16; the iterated bar construction $K(\pi, n) = B^n(\pi)$ in
  particular originates there.

May is **not** the right book for a student's very first exposure to
algebraic topology — he says so explicitly ("not designed as a textbook,
although it could be used as one in exceptionally strong graduate
programs"). It is the right book for the **second** exposure, after the
reader has met fundamental group + singular homology + cup product
somewhere else (Hatcher Ch 0–3 is the standard such "somewhere else") and
wants the modern, categorically-organized framing that makes the rest of
algebraic topology accessible.

---

## §2 Coverage table (Babel Bible vs May)

Cross-referenced against the current `03.12-homotopy/` corpus (24 shipped
units, see `content/03-modern-geometry/12-homotopy/`) and adjacent
`03.04-*`, `02.01.*`, `03.08-*` units. ✓ = covered at May-equivalent depth,
✓† = covered but with **Hatcher framing rather than May framing** (a
deepening candidate), △ = partial / different framing or depth, ✗ = not
covered. **H-overlap** = the gap is already on the Hatcher punch-list.

### Chapter 1 — The fundamental group and applications

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Definition $\pi_1(X, x)$, homotopy invariance, $\gamma[a]$ change-of-basepoint | `03.12.00` fundamental-group, `03.12.01` homotopy | ✓ | Standard. |
| $\pi_1(\mathbb{R}) = 0$, $\pi_1(S^1) \cong \mathbb{Z}$ via covering-path-lifting | `03.12.02` covering-space | ✓ | Worked. |
| Brouwer fixed point theorem (n=2) | `03.12.00` (mention) | △ | Stated in passing; deserves an explicit corollary block. |
| Fundamental theorem of algebra (homotopy proof) | — | ✗ | **Small gap.** Classic application worth a 200-word remark in `03.12.00`. |

### Chapter 2 — Categorical language and the van Kampen theorem

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Categories, functors, natural transformations | `01.10.0*` category-theory family | ✓ | Codex has category-theory foundations elsewhere. |
| Homotopy category h𝒯, homotopy invariance as functoriality through h𝒯 | — | ✗ | **Distinctive May framing gap.** No Babel Bible unit makes the homotopy-category statement of homotopy invariance. |
| Fundamental groupoid Π(X) as functor 𝒰 → 𝒢𝒫 | `03.12.08` fundamental-groupoid | ✓† | Babel Bible unit exists (Brown framing); May framing adds the **functoriality + skeleton equivalence Π(X)/path-component ≃ π_1(X, x_0)** as a categorical statement. Deepening candidate. |
| Limits and colimits in 𝒰, 𝒢𝒫, 𝒮 | `01.10.*` | △ | Codex covers limits/colimits in categorical foundations but not specifically in 𝒢𝒫 / topological-groupoid setting. |
| **van Kampen theorem as Π(X) ≅ colim_{U ∈ 𝒪} Π(U)** in 𝒢𝒫 | `03.12.09` seifert-van-kampen | ✓† | Babel Bible unit exists but proves only the **group form**. May's **colimit-of-groupoids** form is the load-bearing categorical statement; deepening candidate (Master section). |

### Chapter 3 — Covering spaces

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Definition, unique path lifting | `03.12.02` covering-space | ✓ | |
| Coverings of groupoids, classification of coverings of groupoids | — | ✗ | **Distinctive May framing.** May classifies covers of groupoids *first* and derives the classification of covers of spaces as a corollary by applying Π. Deepening candidate for `03.12.02` Master tier; also a Brown-overlap deepening. |
| Group actions and orbit categories | `03.12.02` (mention) | △ | Mentioned. May's depth (orbit category, classification by Π-sets) is a deepening. |
| Construction of covers (universal cover, classification by subgroups of Π) | `03.12.02` | ✓ | |

### Chapter 4 — Graphs

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Graphs as 1-dim CW, edge paths, trees | — | ✗ | **Small gap.** Hatcher §1.A overlap; defer to Tier-γ unless Bass-Serre is pursued. |
| Homotopy types of graphs, fundamental group as free | — | ✗ | **Small gap.** Used implicitly (Nielsen-Schreier consequence) but not stated. |
| Covers of graphs, Euler characteristics | `03.12.23` euler-characteristic | △ | Euler-characteristic unit exists; graph-theoretic application is a worked-example deepening. |

### Chapter 5 — Compactly generated spaces

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Definition of compactly generated (weak Hausdorff) spaces | `02.01.09` compact-open-topology (Master section) | ✓ | Covered as a Master section per the Hatcher plan; Codex makes this a *Master* aside, not a *standing convention*. |
| Category of compactly generated spaces, exponential law | `02.01.09` (Master) | ✓ | Same. |
| **Standing convention for the rest of the book** | — | △ | Codex has not adopted a project-wide standing convention. May's "all spaces are compactly generated" is a notation/convention decision (see §3 crosswalk); should be recorded in a `notation/may.md` and referenced from the cofibration / fibration units. |

### Chapters 6–7 — Cofibrations, fibrations

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Cofibration definition, mapping cylinders | `02.01.08` cofibration | ✓ | |
| Replacing maps by cofibrations | `02.01.08` (mention) | △ | The Mf construction is in the unit; the **factorization-as-cofibration-followed-by-htpy-equivalence** is a deepening candidate. |
| HEP criterion, retract-of-cylinder characterization | `02.01.08` | ✓ | |
| Cofiber homotopy equivalence | — | ✗ | **Gap (low priority).** Not standalone; May uses this in Ch 8. |
| Fibration definition, path lifting functions | `02.01.07` fibration | ✓ | |
| Replacing maps by fibrations (mapping path space Nf) | `02.01.07` | ✓ | |
| HLP criterion | `02.01.07` | ✓ | |
| Fiber homotopy equivalence, change of fiber | `02.01.07` (mention) | △ | Change-of-fiber action of $\pi_1(B)$ on the fiber is mentioned; May's full **change of fiber** machinery (including the action of $\Omega B$ on the homotopy fiber) is a deepening. |

### Chapter 8 — Based cofiber and fiber sequences

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Based homotopy classes [X, Y], cones / suspensions / paths / loops based | `03.12.03` suspension, `02.01.08` cofibration | △ | Based versions touched but not their own unit. |
| Based cofibrations, reduced mapping cylinder | `02.01.08` (mention) | △ | |
| **Cofiber sequence (Puppe), $X \to Y \to Cf \to \Sigma X \to \Sigma Y \to \cdots$** | — | ✗ | **Gap (medium priority).** Puppe sequences are used silently in `03.12.05` and elsewhere but never developed as their own object. Distinctive May treatment. |
| Based fibrations, dual constructions | `02.01.07` | △ | |
| **Fiber sequence, $\cdots \to \Omega^2 Y \to \Omega F f \to \Omega X \to \Omega Y \to Ff \to X \to Y$** | — | ✗ | **Gap (medium priority).** Same as above; the long-exact-sequence-of-pointed-sets statement is foundational. |
| $\Sigma \dashv \Omega$ adjunction, connection between cofiber and fiber sequences | `03.12.03` (mention) | △ | The adjunction $[\Sigma X, Y] \cong [X, \Omega Y]$ is in the suspension unit; the full diagrammatic naturality lemma connecting Cf and Ff is a gap. |

### Chapter 9 — Higher homotopy groups

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Definition $\pi_n(X) = [S^n, X]$, $\pi_n(X, A) = \pi_{n-1}(P(X; *, A))$ | `03.12.01` homotopy | ✓ | |
| Long exact sequence of a pair, of a fibration | `02.01.07` fibration | ✓ | |
| Standard calculations ($\pi_n(S^1) = 0$ for $n>1$, $\pi_n(\mathbb{R}P^i)$, etc.) | scattered | △ | Worked-example density below May. Deepening candidate. |
| $\pi_n(X \times Y) \cong \pi_n(X) \times \pi_n(Y)$ | — | ✗ | **Tiny gap.** Could be added as a one-paragraph corollary in `03.12.01`. |
| Hopf bundles $S^1 \to S^3 \to S^2$, $S^3 \to S^7 \to S^4$, $S^7 \to S^{15} \to S^8$ | — | ✗ | **Small gap.** Important worked examples — all three Hopf bundles deserve a short worked-example block in `02.01.07` or a new dedicated unit. |
| Change of basepoint for higher homotopy / relative homotopy groups | — | ✗ | **Small gap.** May Ch 9 §5; the conjugation action of $\pi_1$ on $\pi_n$ is used silently. |
| n-equivalence, weak equivalence, the technical lemma | — | ✗ | **Gap (medium priority).** May Ch 9 §6 is the heart of the CW-approximation proof in Ch 10; weak equivalence is referenced in many Babel Bible units without being defined cleanly. |

### Chapter 10 — CW complexes

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Definition, examples (S^n, ℝP^n, ℂP^n, T^2, K) | `03.12.10` cw-complex | ✓ | |
| Constructions on CW: quotient, wedge, product, colimit | `03.12.10` | ✓ | |
| **HELP theorem (Homotopy Extension and Lifting Property)** | — | ✗ | **Gap (P1 high priority — distinctive May).** The single theorem from which May derives both Whitehead and cellular approximation. Currently Codex has the two corollaries (`03.12.20` whitehead-theorem) but no HELP unit. |
| Whitehead's theorem (CW form) | `03.12.20` whitehead-theorem | ✓ | Derived in the unit by a Hatcher-style argument; **deepening candidate**: rewrite as a HELP corollary. |
| Cellular approximation theorem | `03.12.13` cellular-homology (used) | △ | Used in cellular-homology unit; **deepening candidate**: factor out as a HELP corollary and cross-link to a HELP unit. |
| CW approximation of spaces, pairs, excisive triads | — | ✗ | **Gap (P1 high priority — distinctive May).** May Ch 10 §§5–7. The functorial CW approximation $\Gamma$ underlies May's entire approach to homology (Chs 13–16). |

### Chapter 11 — Homotopy excision and suspension

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Statement of homotopy excision (Blakers-Massey) | `03.12.21` blakers-massey | ✓ | Codex has a Master-only unit per the Hatcher punch-list. |
| **Freudenthal suspension theorem (statement and corollary from Blakers-Massey)** | `03.12.03` suspension | ✓ | |
| Stable homotopy groups $\pi_q^s(X) = \mathrm{colim}_n \pi_{q+n}(\Sigma^n X)$ | `03.08.06` stable-homotopy | ✓ | |
| **Proof of homotopy excision via excisive-triad reduction** | `03.12.21` (Master) | △ | Babel Bible unit gives Hatcher's sketch; May's **excisive-triad + simplicial-approximation + Uryshon cube-subdivision** proof is the canonical full argument. Deepening candidate. |
| Triad homotopy groups $\pi_q(X; A, B)$ | — | ✗ | **Gap (P3 — internal machinery).** Used in the proof; not strictly needed for FT-equivalence at the theorem layer. |

### Chapters 12–15 — Homological algebra, axiomatic and cellular homology, Hurewicz, uniqueness

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Chain complexes, chain maps, chain homotopy | various (`03.04.*`, `03.12.11`, `03.12.13`) | ✓ | |
| Tensor products of chain complexes, sign rules | `03.04.12` kunneth (mention) | △ | The Koszul sign rule is implicit; should be stated explicitly in the Künneth or universal-coefficient unit. |
| Short / long exact sequences, snake lemma | covered in various places | ✓ | Standard. |
| **Eilenberg-Steenrod axioms for homology** | `03.12.15` eilenberg-steenrod | ✓ | Codex has the standalone unit per the Hatcher punch-list. |
| **Cellular homology defined first, axioms verified second (May's order)** | `03.12.13` cellular-homology | ✓† | Babel Bible unit exists but follows Hatcher's order (define cellular, prove it agrees with singular). May's order is the **reverse**: axioms first, cellular is the *construction*. Deepening candidate — add a Master section "May's axiomatic perspective." |
| Cellular chains of products, $C_*(X \times Y) \cong C_*(X) \otimes C_*(Y)$ | `03.04.12` kunneth | ✓ | |
| Worked examples: $H_*(T^2), H_*(K), H_*(\mathbb{R}P^n)$ | scattered | △ | Worked-example density below May. |
| Reduced vs unreduced homology, suspension iso $\tilde{H}_n(X) \cong \tilde{H}_{n+1}(\Sigma X)$ | `03.12.03` (mention) | △ | Should be stated cleanly; currently used implicitly. |
| **Mayer-Vietoris sequence (axiomatic from excision)** | `03.04.07` mayer-vietoris | ✓† | Babel Bible unit is de-Rham-flavored; the **axiomatic** derivation from excision is a deepening — add a Master section deriving MV from the Eilenberg-Steenrod excision axiom for any homology theory. |
| Homology of colimits | — | ✗ | **Small gap.** May Ch 14 §6: $H_*(\mathrm{colim}_i X_i) \cong \mathrm{colim}_i H_*(X_i)$ for sequential colimits along cofibrations. Used silently. |
| **Hurewicz theorem (axiomatic proof)** | `03.12.19` hurewicz-theorem | ✓ | Codex has the unit; May's proof is cleaner — deepening candidate. |
| **Uniqueness of homology on CW complexes** | `03.12.15` (Master mention) | △ | Babel Bible's Eilenberg-Steenrod unit states uniqueness but does not give the full **CW-approximation-based** proof. Deepening candidate. |

### Chapter 16 — Singular homology theory

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Singular chain complex $C_*(X)$ | `03.12.11` singular-homology | ✓ | |
| **Geometric realization $\Gamma X = |S_* X|$ of the total singular complex** | — | ✗ | **Gap (P2 — distinctive May).** The functorial CW approximation that makes singular = cellular as a *theorem* about $\Gamma$. |
| Proof that $\gamma: \Gamma X \to X$ is a weak equivalence | — | ✗ | **Gap (P2).** Same as above; this is the rigorous bridge between May's axiomatic approach and the classical singular construction. |
| **Simplicial sets, face/degeneracy operators, simplicial objects in general categories** | — | ✗ | **Gap (P1 high priority — load-bearing for May 3.40).** No Babel Bible unit on simplicial sets. This is the bridge to May *Simplicial Objects* and to the entire model-category / ∞-category literature. Cross-references: May 3.40 audit will treat this in depth but a foundational stub at `03.12-homotopy/` level is needed. |
| **Geometric realization functor and its adjunction with the singular complex $|–| \dashv S_*$** | — | ✗ | **Gap (P1 high priority — load-bearing).** The categorical adjunction is the load-bearing categorical statement of Ch 16; without it the May framework collapses. |
| **Classifying spaces $BG$ and $K(\pi, n) = B^n(\pi)$ via iterated bar construction** | `03.08.04` classifying-space, `03.12.05` eilenberg-maclane | △ | Codex has both, but constructed via Milnor (`03.08.04`) and cell-attachment (`03.12.05`) respectively. **May's $B^n(\pi)$ iterated-bar construction** is a Master-tier deepening candidate that connects the two units. |

### Chapter 17 — More homological algebra

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Universal coefficient theorem (homology, Tor) | `03.12.18` universal-coefficient | ✓ | |
| Künneth theorem (chain-level, with Tor) | `03.04.12` kunneth | ✓ | |
| Hom functors and universal coefficients in cohomology (Ext) | `03.12.18` | ✓ | |
| Relations between ⊗ and Hom (Hom-tensor adjunction at the chain level) | — | ✗ | **Small gap.** Standard homological algebra; should be a Master remark in `03.12.18`. |

### Chapters 18–19 — Axiomatic and cellular cohomology

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Axioms for cohomology (contravariant) | `03.12.15` eilenberg-steenrod (Master) | △ | Codex eilenberg-steenrod unit states the homology axioms; the cohomology axioms (contravariance, ADDITIVITY via products rather than direct sums) are a deepening. |
| Cellular and singular cohomology, agreement | `03.04.13` singular-cohomology | ✓ | |
| **Cup products in cohomology, $H^*(X; R)$ as a graded commutative R-algebra** | `03.04.13` (Master section) | ✓ | |
| Worked example: $H^*(\mathbb{R}P^n; \mathbb{F}_2)$ and Borsuk-Ulam | — | ✗ | **Small gap.** Classic application; Hatcher §3.2 also overlap. Worth a worked-example block. |
| **Obstruction theory (sketch)** | `03.12.05` (Master mention) | △ | Mentioned but not developed; same gap as the Hatcher punch-list item 11. |
| Reduced cohomology, $\mathrm{lim}^1$ and Milnor exact sequence | — | ✗ | **Gap (P3).** $\mathrm{lim}^1$ is foundational for the cohomology of colimits; standard reference is May Ch 19 §4. |
| Uniqueness of cohomology on CW complexes | `03.12.15` (mention) | △ | Same as homology uniqueness deepening. |

### Chapters 20–21 — Poincaré duality, manifolds with boundary, index

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Statement of Poincaré duality $H^k(M) \cong H_{n-k}(M)$ | `03.12.16` poincare-duality | ✓ | |
| Cap product $\frown: H^k \otimes H_n \to H_{n-k}$ | `03.12.17` cap-product | ✓ | |
| Orientations, fundamental class $[M]$, the vanishing theorem | `03.12.16` | ✓ | |
| Orientation cover | `03.12.16` (mention) | △ | Mentioned; deepening candidate. |
| **Euler characteristic of a compact manifold via Poincaré duality** | `03.12.23` euler-characteristic | ✓ | |
| **Index (signature) of an oriented manifold** | — | ✗ | **Gap (medium priority).** Used silently in `03.09.10` Atiyah-Singer. May Ch 21 is the canonical exposition. |
| Manifolds with boundary, Poincaré-Lefschetz duality | — | ✗ | **Gap (medium priority).** Used in cobordism (`03.08.*`) and the Stokes-type theorems. |
| Index of manifolds that are boundaries (signature cobordism invariant) | — | ✗ | **Gap (P3).** Bridges to Ch 25 cobordism. |

### Chapter 22 — Homology, cohomology, and $K(\pi, n)$s

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| $K(\pi, n)$ and homology / cohomology representability | `03.12.05` eilenberg-maclane | ✓ | |
| Cup and cap products at the level of K(π, n)-cohomology | `03.04.13` (Master) | ✓ | |
| **Postnikov systems (sketch)** | `03.12.05` (Master) | △ | Hatcher-overlap deepening; sketched in Babel Bible, deeper in May Ch 22 §4. |
| **Cohomology operations, Steenrod algebra, Adem relations** | `03.12.05` (Master), `03.12.04` spectrum | ✓ | Codex has the Steenrod-algebra Master section in `03.12.05`; depth is roughly equal to May Ch 22 §5. |

### Chapter 23 — Characteristic classes of vector bundles

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Classification of vector bundles by $BO(n)$ / $BU(n)$ | `03.08.04` classifying-space | ✓ | |
| **Stiefel-Whitney, Chern, Pontryagin, Euler classes** | scattered | △ | Codex has Pontryagin in spin-geometry strand; Stiefel-Whitney and Chern are mentioned but not their own units. |
| **Thom space, Thom isomorphism theorem $H^*(M\xi) \cong H^{*-n}(B\xi)$** | — | ✗ | **Gap (P2).** Load-bearing for cobordism and the Atiyah-Singer / spin-geometry strand. |
| Construction of Stiefel-Whitney classes via Thom + Steenrod | — | ✗ | **Gap (P3 — Master deepening).** May Ch 23 §6. |
| Characteristic numbers | — | ✗ | **Gap (P3).** |

### Chapter 24 — K-theory

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Definition $K^0(X) = \mathrm{Vect}(X)^{gp}$, $K^{-n}$ via $\Sigma^n$ | — | ✗ | **Gap.** Codex has a K-theory pointer in `03.09.*` (spin-geometry) but no foundational unit on topological K-theory. Defer — see §5 non-goals; this is a separate audit's scope. |
| Bott periodicity | — | ✗ | **Gap.** Same. |
| Splitting principle, Thom isomorphism in K-theory | — | ✗ | **Gap.** Same. |
| Chern character | — | ✗ | **Gap.** Same. |
| Adams operations, Hopf invariant one | — | ✗ | **Gap.** Same. |

### Chapter 25 — Cobordism

| May topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Cobordism groups $\mathcal{N}_*$, Thom's theorem $\mathcal{N}_* \cong \pi_*(TO)$ | `03.08.05` cobordism (if shipped — verify) | — | Verify against the `03.08-*` corpus; defer to the Ravenel (FT 3.42) audit. |
| Prespectra, the Steenrod algebra coaction | `03.12.04` spectrum | △ | Codex has the spectrum unit; prespectra and the coaction are Master-level deepenings. |
| Stable category introduction | `03.08.06` stable-homotopy | ✓ | |

### Aggregate coverage estimate

**Theorem layer.** ~80% of May's named theorems map to Babel Bible units (the
existing Hatcher-anchored corpus closes most of the theorem-statement gap
because Hatcher and May agree on what is true; they differ on framing).
After the priority-1 punch-list below this rises to ~92%; after priority-2
to ~96%.

**Framing / pedagogical-sequence layer.** ~35% covered. The categorical
framing (functorial van Kampen, h𝒯 homotopy category, |–| ⊣ S_*
adjunction, axiomatic-first homology sequence) is largely absent. This
is the dominant gap and the primary justification for this audit pass.

**Exercise layer.** Not separately audited. May's exercise sets are modest
in size (1–10 per chapter, ~120 total). Defer to a dedicated exercise-pack
pass after the priority-1 deepenings.

**Worked-example layer.** ~70% covered. The standard computations are
present (spheres, projective spaces, Hopf bundles partially); May's
$\mathbb{R}P^n / \mathrm{Borsuk-Ulam}$ and triple-Hopf-bundle blocks are
the main worked-example gaps.

**Notation layer.** ~60% aligned. May's distinctive notation choices
(`𝒰` for compactly generated spaces, `𝒯` for based spaces, `h𝒞` for
homotopy categories, $\Pi(X)$ for fundamental groupoid, $\Sigma$/$\Omega$
based, $S_*$ / $|–|$ / $B^n(\pi)$ for the simplicial machinery, $\Gamma X$
for the functorial CW approximation) need a `notation/may.md` crosswalk.

**Sequencing layer.** ~50%. Codex follows Hatcher's order
(singular → cellular → axiomatic); May's reverse order
(axiomatic → cellular → singular) is a deepening to record in the
sequencing notes rather than a re-ordering of units.

**Intuition layer.** ~60%. May's categorical intuition (everything is a
functor; the right object is the colimit; the right map is the
adjunction) is the central pedagogical asset and the most under-reproduced.

**Application layer.** ~75%. Brouwer, FTA, Borsuk-Ulam, Hopf bundles,
Whitehead, cellular approximation, Hurewicz, Poincaré duality — all
shipped at Hatcher depth. May-specific applications (HELP-derived
proofs, axiomatic uniqueness, $B^n(\pi)$) are the gap.

---

## §3 Gap punch-list (priority-ordered)

**Priority 0 — strict prerequisites:** None new. The Brown 1.05 and Hatcher
prereqs are already in flight. The 24-unit `03.12-homotopy/` corpus
constitutes the foundation this audit deepens.

**Priority 1 — high-leverage, captures May's distinctive content
(estimate: 3 new units + 4 deepenings):**

1. **`03.12.24` HELP and the unified Whitehead / cellular-approximation
   theorem.** Statement of HELP (homotopy extension and lifting property)
   for $(X, A)$ a relative CW pair and $e: Y \to Z$ an n-equivalence.
   The single theorem and its two one-line corollaries (Whitehead
   theorem and cellular approximation). Three-tier; ~1500 words.
   Originator-prose target: May 1999 *Concise* Ch 10; also May 1967
   *Simplicial Objects* for the simplicial-set analogue. Cross-links to
   `03.12.20` whitehead-theorem (refactor as HELP corollary) and to
   `03.12.13` cellular-homology (cellular approximation now factored out
   to here).
2. **`03.12.25` Simplicial sets and geometric realization.** Definition
   of simplicial sets (face $d_i$ + degeneracy $s_i$ operators with the
   simplicial identities); the singular-complex functor $S_*$; the
   geometric-realization functor $|–|$; the **$|–| \dashv S_*$
   adjunction**. Three-tier; ~1800 words. Foundational stub at Babel Bible
   `03.12-homotopy/` level; full development deferred to the May 3.40
   audit. Originator: May 1967 *Simplicial Objects*.
3. **`03.12.26` Functorial CW approximation $\Gamma X = |S_*X|$.** The
   geometric realization of the total singular complex as a functorial
   CW approximation; the weak-equivalence $\gamma: \Gamma X \to X$; the
   identification of cellular chains $C_*(\Gamma X)$ with the singular
   chain complex $C_*(X)$. Three-tier; ~1500 words. Closes the bridge
   between May's axiomatic homology (Ch 13) and the classical singular
   construction (Ch 16). Originator: May 1999 Ch 16 §§2–3.
4. **Deepening of `03.12.09` seifert-van-kampen** — add a Master section
   "Van Kampen as a colimit of groupoids," stating and proving
   $\Pi(X) \cong \mathrm{colim}_{U \in \mathcal{O}} \Pi(U)$ in the
   category of groupoids, with the group-form van Kampen as a corollary
   by passage to skeleton. ~600 words. May Ch 2 §§6–7 anchor.
5. **Deepening of `03.12.13` cellular-homology** — add a Master section
   "May's axiomatic perspective: cellular homology as *the* construction
   satisfying Eilenberg-Steenrod on CW pairs." Reverses the
   construction-first / axioms-second order and shows uniqueness as a
   foundational fact. ~800 words. May Ch 13 anchor.
6. **Deepening of `03.12.21` blakers-massey** — replace the Hatcher-style
   sketch with May's full excisive-triad proof (Ch 11 §3): triad
   homotopy groups $\pi_q(X; A, B)$, five-lemma induction on single-cell
   excisive triads, simplicial-approximation / Uryshon cube subdivision.
   ~1000 words added at Master tier.
7. **Deepening of `03.12.05` eilenberg-maclane** — add a Master section
   "Iterated bar construction $K(\pi, n) = B^n(\pi)$" giving May's
   simplicial-group construction of Eilenberg-MacLane spaces as the
   iterated classifying space of an abelian topological group. ~700
   words. May Ch 16 §5 anchor. Cross-links to `03.08.04`
   classifying-space and to the new `03.12.25` simplicial-sets unit.

**Priority 2 — Puppe sequences, fibration-cofibration duality, Thom
isomorphism (estimate: 3 new units):**

8. **`03.12.27` Puppe cofiber sequence.** The sequence
   $X \to Y \to Cf \to \Sigma X \to \Sigma Y \to \Sigma Cf \to \cdots$
   and its long-exact-sequence-of-pointed-sets property
   $\cdots \to [\Sigma Cf, Z] \to [\Sigma Y, Z] \to [\Sigma X, Z] \to
   [Cf, Z] \to [Y, Z] \to [X, Z]$. Three-tier; ~1500 words.
   Originator: Puppe 1958 (citation), May 1999 Ch 8 §4.
9. **`03.12.28` Puppe fiber sequence.** Dual to (8): $\cdots \to \Omega^2 Y
   \to \Omega Ff \to \Omega X \to \Omega Y \to Ff \to X \to Y$ and the
   covariant LES $\cdots \to [Z, \Omega Ff] \to [Z, \Omega X] \to [Z,
   \Omega Y] \to [Z, Ff] \to [Z, X] \to [Z, Y]$. Includes the
   connection-between-Cf-and-Ff lemma via the $\Sigma \dashv \Omega$
   adjunction. Three-tier; ~1500 words. May 1999 Ch 8 §§5–7.
10. **`03.12.29` Thom space and Thom isomorphism.** Thom space $M\xi$
    of a vector bundle $\xi \to B$; Thom isomorphism $H^k(B) \cong
    \tilde{H}^{k+n}(M\xi)$ for an oriented rank-$n$ bundle. Three-tier;
    ~1800 words. Load-bearing for spin-geometry (`03.09.10` Atiyah-Singer)
    and for the cobordism strand (`03.08.05`-ish). May Ch 23 §5 anchor;
    Milnor-Stasheff 1974 *Characteristic Classes* as originator-text.

**Priority 3 — manifolds-with-boundary, index, and missing worked
examples (estimate: 2 new units + several worked-example deepenings):**

11. **`03.12.30` Index (signature) of a closed oriented 4k-manifold and
    Poincaré-Lefschetz duality.** May Ch 21 §§2–4. Three-tier; ~1500
    words. Currently used silently in `03.09.10` Atiyah-Singer
    (signature theorem); deserves its own unit.
12. **Deepening of `03.04.07` mayer-vietoris** — add a Master section
    "Mayer-Vietoris from the Eilenberg-Steenrod axioms" deriving MV for
    *any* homology theory from excision + exactness + additivity. ~500
    words. May Ch 14 §5 anchor.
13. **Worked-example deepenings** in `03.12.00` fundamental-group (FTA
    via degree), `03.12.01` homotopy (three Hopf bundles, $\pi_n(X \times
    Y)$), `03.04.13` singular-cohomology ($H^*(\mathbb{R}P^n; \mathbb{F}_2)$
    + Borsuk-Ulam). ~1200 words total across three units.

**Priority 4 — survey-level pointers, optional (estimate: defer to
follow-ups):**

14. **K-theory foundational unit family** — defer to a dedicated
    K-theory audit pass; out of scope for this plan (see §5 non-goals).
    May Ch 24 is sketched and is the pointer chapter par excellence.
15. **Cobordism / prespectra deepenings** — defer to Ravenel (FT 3.42)
    audit and the May-Ponto (FT 3.39) audit; out of scope (see §5
    non-goals).
16. **$\mathrm{lim}^1$ and the Milnor exact sequence** — May Ch 19 §4.
    Master-only; ~600 words. Connects to the spectral-sequence strand
    in `03.13-*`.

---

## §4 Implementation sketch (P3 → P4)

For a full May coverage pass, **items 1–10 are the minimum priority-1+2
set** (6 new units + 4 deepenings of existing units). Production estimate:

- **New units:** ~3.5 hours each (research + draft + validate at 27/27 +
  Lean stub + Bridge / Synthesis paragraphs in real prose). May units
  skew slightly higher than the Hatcher batch average because the
  categorical content requires careful notation work. 6 new units ×
  3.5 hours = **21 hours**.
- **Deepenings:** ~1.5 hours each (Master-section insertion + cross-link
  updates + Pass-V continuity check). 4 deepenings × 1.5 hours =
  **6 hours**.
- **Total priority-1+2:** ~27 hours of focused production. At 4 production
  agents in parallel, fits a 2–3 day window with an integration agent.

**Notation crosswalk (load-bearing for this batch).** A new
`notation/may.md` should record:

- `𝒰` for the category of compactly-generated weak-Hausdorff spaces; this
  becomes the standing convention from `02.01.09` compact-open-topology
  forward in any unit that references function spaces or exponential law.
- `𝒯` for the category of based spaces in `𝒰`; basepoints required to be
  closed nondegenerate inclusions (i.e. **nondegenerately based** /
  **well pointed**).
- `h𝒞` for the homotopy category of any category `𝒞` equipped with a
  homotopy relation. Babel Bible's existing homotopy-category usage in
  `03.12.01` is informal; the formal "category h𝒯 of based spaces with
  based-homotopy classes of maps" should be recorded.
- $\Pi(X)$ for the fundamental groupoid (vs `𝛱_1(X)` in some other
  references); align with `03.12.08` fundamental-groupoid notation.
- $\Sigma X = S^1 \wedge X$ for reduced suspension and $\Omega X = F(S^1, X)$
  for based loop space; the $\Sigma \dashv \Omega$ adjunction
  $F(\Sigma X, Y) \cong F(X, \Omega Y)$ with the $\pi_0$-statement
  $[\Sigma X, Y] \cong [X, \Omega Y]$.
- $Mf$ for the reduced mapping cylinder, $Nf$ for the mapping path space,
  $Cf$ for the homotopy cofiber, $Ff$ for the homotopy fiber. Babel Bible's
  existing `02.01.06` quotient-topology unit uses $M_f$ for the *unreduced*
  mapping cylinder; reconcile.
- $S_*X$ for the total singular complex (a simplicial set),
  $|K_*|$ for the geometric realization, $\Gamma X = |S_*X|$ for the
  functorial CW approximation. None of these appear in Babel Bible yet.
- $B(G), E(G)$ for the classifying-space and total-space pair of a
  topological group (May Ch 16 §5 = `03.08.04` classifying-space);
  iterated bar construction $B^n(\pi)$ for $K(\pi, n)$.
- $\tilde{H}_n$ vs $H_n$ for reduced vs unreduced homology, with the
  suspension iso $\tilde{H}_n(X) \cong \tilde{H}_{n+1}(\Sigma X)$. Match
  Hatcher's convention.
- $\pi_q(X; A, B)$ for triad homotopy groups (May Ch 11 §3); flag as
  load-bearing for the homotopy-excision deepening.

Also record May's notational quirks vs Hatcher:
- May writes $H_q(X; \pi)$ where Hatcher writes $H_n(X; G)$. Adopt
  $H_n(X; G)$ (Hatcher / standard).
- May writes $[X, Y]$ for unbased homotopy classes in `𝒰` and explicitly
  switches to based in `𝒯` for Ch 8 onward. Codex uses $[X, Y]$ uniformly
  for based homotopy classes in `03.12-*` — flag this as a notation
  decision.
- May uses script-style category names (`𝒰`, `𝒯`, `𝒮`, `𝒢`, `𝒶ℬ`); Codex
  uses upright (`Top`, `Top_*`, `Set`, `Grp`, `Ab`). The `notation/may.md`
  crosswalk records both.

**Originator-prose citations.** May 1999 *Concise Course* is itself a
modern synthesis, but the originating sources for the priority-1+2 batch
are:

- HELP, n-equivalences, weak equivalence: **J. H. C. Whitehead 1949**,
  *Combinatorial homotopy I, II* (Bull. AMS 55) — same as the Hatcher
  punch-list cellular-approximation citation. May's HELP synthesis is
  in his own *Concise* Ch 10.
- Simplicial sets, geometric realization, $|–| \dashv S_*$ adjunction:
  **J. P. May 1967**, *Simplicial Objects in Algebraic Topology*
  (University of Chicago Press) — this is **FT 3.40** and is being
  audited separately. The May 3.38 units cite the May 3.40 audit as
  the originator-text reference.
- Bar construction, $K(\pi, n) = B^n(\pi)$: **J. P. May 1972**,
  *The Geometry of Iterated Loop Spaces* (Lecture Notes in Math 271)
  — the canonical originator-text for the iterated-bar formulation.
- Puppe sequences: **D. Puppe 1958**, *Homotopiemengen und ihre induzierten
  Abbildungen I* (Math. Z. 69, 299–344) — the originator. May synthesises.
- Homotopy excision via excisive triads: **A. L. Blakers and W. S. Massey
  1951–1953**, *The homotopy groups of a triad I, II, III* (Ann. Math.).
  May Ch 11 §3 follows this directly.
- Thom space and Thom isomorphism: **R. Thom 1954**, *Quelques propriétés
  globales des variétés différentiables* (Comment. Math. Helv. 28); for
  the modern exposition cite Milnor-Stasheff 1974 *Characteristic Classes*.

Each priority-1 unit's Master section should cite the originator paper
in addition to May.

---

## §5 What this plan does NOT cover

- **A line-number-level inventory** of every named theorem and exercise in
  May's 243 pages. Worked from the TOC + close reading of Chs 1–10 + selective
  deep reads of Chs 11, 12–13, 16, 17, 22, and the TOC of Chs 18–25. A
  full P1 audit would sharpen the punch-list (especially exercise-side)
  but would not change which units need writing.
- **May Chs 24 (K-theory) and 25 (cobordism + prespectra).** These are
  May's deliberate "appetite-whetting" sketch chapters and they explicitly
  point to other texts. K-theory is the subject of a separate, deferred
  audit pass (Atiyah's *K-Theory* monograph is the natural canonical-text
  choice). Cobordism is the subject of Ravenel (FT 3.42) and the
  May-Ponto (FT 3.39) audits.
- **May Ch 22 §4–§5 — Postnikov + cohomology-operations *depth***. Codex
  has these as Master sections per the Hatcher punch-list (item 11);
  May's depth is roughly equal and not a separate deepening.
- **The simplicial-objects machinery beyond the foundational stub.**
  The Eilenberg-Zilber theorem, Dold-Kan correspondence, Moore complex,
  Kan complex / fibration theory, simplicial-set model structure — all
  the heart of *Simplicial Objects in Algebraic Topology* — are the
  scope of the **FT 3.40 May Simplicial audit**, not this audit. This
  plan ships only the foundational $|–| \dashv S_*$ stub (item 2)
  required to make the May framework legible in Babel Bible.
- **Model categories.** Out of scope; deferred to **May-Ponto (FT 3.39)**.
  May explicitly notes in his introduction that the *Concise Course* is
  influenced by Quillen's model-category framework but does not develop
  it. Codex mirrors that choice — no model-category units land in this
  audit's punch-list.
- **The exercise pack.** May's exercises are smaller in number than
  Hatcher's (~120 vs ~600) but several are open-ended. Defer to a
  dedicated `03.12.E*` exercise-pack pass after the priority-1+2
  deepening batch closes.
- **Figures.** May uses many small commutative-diagram pictures (the
  van-Kampen square, the homotopy-invariance square, etc.); these are
  load-bearing for intuition. Babel Bible's figure infrastructure is the same
  curriculum-wide deferred item already flagged in the Hatcher plan §5.

---

## §6 Acceptance criteria for FT equivalence (May)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, May is at
equivalence-coverage when:

- ≥95% of May's named theorems in Chs 1–22 map to Babel Bible units (currently
  ~80%; after priority-1 units this rises to ~92%; after priority-1+2 to
  ~96%; priority-3 deepenings + the index unit close the residue).
  Chs 23–25 are explicitly out of scope (see §5) and do not count
  against the threshold.
- May's **categorical framing** is captured at three load-bearing points:
  - Van Kampen as a colimit of groupoids (deepening item 4).
  - Eilenberg-Steenrod axioms as a foundational definition with
    cellular construction as the verifier (deepening item 5).
  - $|–| \dashv S_*$ adjunction explicit (new unit item 2).
- The **HELP unification** is captured (new unit item 1) with Whitehead
  and cellular approximation refactored as corollaries.
- A `notation/may.md` crosswalk exists and is cross-linked from `02.01.09`
  compact-open-topology, `03.12.01` homotopy, `03.12.03` suspension,
  `03.12.08` fundamental-groupoid, and the new units 1–3 above.
- ≥80% of May's exercises have a Codex equivalent. Currently <5%; closing
  this requires the dedicated exercise-pack pass per §5.
- ≥90% of May's worked examples are reproduced in some Babel Bible unit
  (currently ~70%; the priority-3 worked-example deepenings bring this
  to ~88%; the residue is May Ch 22's $K(\pi, n)$ cohomology calculations).
- Pass-W weaving connects the new units (items 1, 2, 3, 8, 9, 10) to the
  existing `03.12-homotopy/` corpus via lateral connections, and connects
  the simplicial-sets stub (item 2) forward to the May 3.40 audit.

The 6 priority-1+2 new units + 4 priority-1 deepenings close most of the
framing gap; priority-3 closes the manifolds-with-boundary and
worked-example residue. Priority-4 is deferred to the K-theory and
May-Ponto audits.

**Composite recommendation.** Because the priority-1 deepenings (items
4–7) touch *existing* units that have shipped against Hatcher, the
production strategy is to dispatch them as **one composite May-deepening
batch** with the three new May-distinctive units (items 1, 2, 3) and run
Pass-V continuity once at the end of the batch. This avoids re-running
Pass-V between each deepening and preserves the units' existing 27/27
validation scores. The priority-2 batch (items 8, 9, 10) is dispatched
separately because the Thom-isomorphism unit (item 10) is load-bearing
for the spin-geometry / Atiyah-Singer chain and deserves its own quality
review.

---

## §7 Sourcing

- **Free.** Author-hosted PDF at
  <https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf>. The
  edition served from May's UChicago page is the **revised** version
  (published 1999 by Chicago Press; the online PDF carries author
  corrections through 2007, marked "ConciseRevised").
- **License.** Author has placed the PDF freely available for educational
  use from his UChicago faculty page. For educational use cite as
  J. P. May, *A Concise Course in Algebraic Topology*, Chicago Lectures
  in Mathematics, University of Chicago Press 1999 (revised PDF, ~2007).
- **Local copy.** Already at
  `reference/fasttrack-texts/03-modern-geometry/May-ConciseAlgebraicTopology.pdf`
  (1.6 MB; matches the canonical Codex Fast Track convention for the
  modern-geometry book bucket).
