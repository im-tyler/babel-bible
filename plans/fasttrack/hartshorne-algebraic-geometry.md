# Hartshorne — *Algebraic Geometry* (Fast Track reference anchor) — Audit + Gap Plan

**Book:** Robin Hartshorne, *Algebraic Geometry* (Springer GTM 52, 1977).
The canonical English-language graduate textbook for scheme-theoretic
algebraic geometry; the de-facto syllabus that every PhD student in the
subject is expected to have worked through (or, more honestly, fought
with) by the end of their second year.

**Fast Track entry:** *not numbered* — Hartshorne sits in the Fast Track
booklist as a *peer reference anchor* alongside Vakil (*The Rising Sea*),
Eisenbud-Harris (*The Geometry of Schemes*), and Mumford (*The Red Book*).
It is cited by 23 of the 27 algebraic-geometry units in Codex (and by
several outside the AG section — Chern-Weil, spin structures, sphere
bundles all cross-reference Hartshorne) but has never been audited for
equivalence coverage. Treated here as a peer-anchor parallel to Hatcher,
with a numbered slot deferred until the booklist is revised.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list
of new units so that Hartshorne is covered to the equivalence threshold
(≥95%; see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Mirrors the
Hatcher plan in structure. Not a full P1 audit (which would inventory
every theorem and exercise across ~470 pages and ~600 problems at line
level); works from chapter structure and editorial choices.

---

## §1 What Hartshorne's book is for

Hartshorne is *the* Anglophone graduate textbook on scheme-theoretic
algebraic geometry. Vakil's *Rising Sea* is "foundations from scratch
with motivation everywhere"; Eisenbud-Harris stays intuitive and
classical; Hartshorne is **terse, theorem-driven, uncompromising** —
the book that codified scheme theory + sheaf cohomology + Riemann-Roch
+ curves + surfaces as a single graduate package. The source working
algebraic geometers cite when they say "in Hartshorne III.5".

Five chapters, one classical-varieties prelude, three appendices.

**Chapter I: Varieties.**
Classical algebraic geometry over an algebraically closed field $k$.
Affine and projective varieties, Nullstellensatz, Zariski topology,
regular and rational maps, dimension, nonsingular varieties, Zariski
tangent space, intersection in projective space, blow-up on a surface.
This chapter is **deliberately lightweight** — a ~50-page motivation
chapter so the student knows what schemes generalise. Not load-bearing;
a runway.

**Chapter II: Schemes.**
The technical heart of the book. Sheaves (§II.1), schemes (§II.2),
first properties — locally Noetherian, irreducible, reduced, integral
(§II.3), separated and proper morphisms (§II.4), quasi-coherent and
coherent sheaves (§II.5), divisors — Weil and Cartier, the Picard group
(§II.6), projective morphisms — Proj, twisting sheaves $\mathcal{O}(n)$,
ample/very-ample (§II.7), differentials — Kähler differentials, the
sheaf of differentials, smoothness, cotangent and canonical sheaves
(§II.8), formal schemes (§II.9, often skipped).

**Chapter III: Cohomology.**
The chapter where most students *actually* live. Derived functors
(§III.1), cohomology of sheaves (§III.2), Serre's vanishing on a
Noetherian affine scheme (§III.3), Čech cohomology (§III.4), cohomology
of projective space — Serre's computation of $H^i(\mathbb{P}^n,
\mathcal{O}(d))$ (§III.5), Ext groups and sheaves (§III.6), Serre
duality (§III.7), higher direct images (§III.8), flat morphisms (§III.9),
smooth morphisms (§III.10), formal functions (§III.11), semicontinuity
(§III.12). Sections §III.1–§III.5 are core; §III.6–§III.12 are advanced
and selectively skipped.

**Chapter IV: Curves.**
Smooth projective curves over algebraically closed $k$. Riemann-Roch
(§IV.1), Hurwitz (§IV.2), embeddings in projective space (§IV.3),
elliptic curves (§IV.4), canonical embedding (§IV.5), classification
in $\mathbb{P}^3$ (§IV.6). Every section is a long worked example.

**Chapter V: Surfaces.**
Smooth projective surfaces. Intersection pairing, adjunction formula,
Riemann-Roch for surfaces (§V.1), ruled surfaces (§V.2), monoidal
transformations / blow-ups (§V.3), 27 lines on the cubic (§V.4),
Castelnuovo's contractibility (§V.5), Enriques-Kodaira classification
sketch (§V.6). §V.1 is foundational; the rest is selective.

**Appendices.** Survey-only — A: general intersection theory / Chow.
B: GAGA, Hodge, Kähler. C: étale cohomology, Weil conjectures.

**Distinctive Hartshorne choices:**

1. **Schemes first, varieties as motivation.** The book's most famous
   editorial choice. Mumford's *Red Book* takes the opposite approach;
   Vakil splits the difference; Eisenbud-Harris stays mostly classical.
   Hartshorne's "schemes first" is now the modern default.
2. **Sheaves before schemes.** §II.1 develops sheaves before a single
   scheme appears. Schemes then become a one-paragraph construction
   (locally ringed space + $\mathrm{Spec}$).
3. **Coherent sheaves are the central object.** §II.5 + §III throughout:
   "algebraic geometry = the cohomology of coherent sheaves." Serre's
   vanishing (affine) and finiteness (projective) anchor the chapter.
4. **Projective space as the universe.** §II.7 + §III.5: the computation
   of $H^i(\mathbb{P}^n, \mathcal{O}(d))$ via Čech is the single
   most-cited calculation in the book. Chapters IV and V route through it.
5. **Čech for computation, derived functors for the definition.**
   §III.1–§III.2 give derived functors (so Serre duality is cleanly
   stateable); §III.4 gives Čech (for computation); Hartshorne proves
   agreement in the cases that matter (Noetherian separated, acyclic covers).
6. **Serre duality as the central duality.** §III.7. The clean form
   $H^i(X, \mathcal{F}) \cong H^{n-i}(X, \omega_X \otimes
   \mathcal{F}^\vee)^\vee$ for smooth projective $X/k$. Riemann-Roch
   (Ch IV) and adjunction (Ch V) are corollaries.
7. **Riemann-Roch worked, not stated.** §IV.1 states it; the rest of
   Chapter IV applies it. Hirzebruch-Riemann-Roch and
   Grothendieck-Riemann-Roch are deferred to Appendix A.
8. **Intersection on surfaces, not in general.** §V.1: pairing,
   adjunction, Hodge index. Higher-dimensional intersection theory is
   Appendix A only.
9. **Exercises as theorems.** ~600 exercises, many non-trivial results
   used in later text without proof. The exercises are how one learns
   the material — they are not optional.
10. **Notation: scheme-theoretic.** $\mathcal{O}_X$, $\mathcal{F}$,
    $\mathrm{Spec}\,A$, $\mathrm{Proj}\,S$, $\mathcal{O}_X(D)$,
    $\Omega_{X/Y}$, $\omega_X$ — the conventions every subsequent
    textbook now uses.

---

## §2 Coverage table (Codex vs Hartshorne)

Cross-referenced against the current 27-unit `04-algebraic-geometry/`
section. ✓ = covered, △ = partial / different framing or depth, ✗ = not
covered. **Bott-Tu-overlap** flags items where the gap also appears in
the Bott-Tu plan punch-list (sheaf cohomology, Čech, etc).

### Chapter I — Varieties

| Hartshorne topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Affine varieties, Zariski topology | — | ✗ | **Gap.** No standalone unit on classical affine varieties. Codex jumps directly to schemes via `04.02.01`. |
| Projective varieties | `04.07.01` projective-space | △ | Projective space exists; "projective variety" as a classical-geometry object does not. Hartshorne §I.2. |
| Nullstellensatz | — | ✗ | **Gap (high priority — foundational).** Hartshorne §I.1 anchor. The classical bridge from algebra to geometry. Used implicitly throughout `04.02.*`. |
| Regular and rational maps | `04.02.04` morphism-of-schemes | △ | Covered scheme-theoretically; classical regular/rational map (rational function field) not explicitly introduced. |
| Dimension, Krull dimension | — | ✗ | **Gap.** Hartshorne §I.1, §I.7. Used silently in `04.02.*`, `04.05.*`. |
| Nonsingular varieties, Zariski tangent space | `04.08.01` sheaf-of-differentials (uses) | △ | The cotangent module is in the differentials unit; the *Zariski tangent space at a point* and the *Jacobian criterion for nonsingularity* are not their own unit. Hartshorne §I.5. |
| Blowing up a point on a surface | `04.07.02` blowup | ✓ | Codex has the blowup unit (Cannas-aligned framing). Hartshorne §I.4 + §V.3 reference. |

### Chapter II — Schemes

| Hartshorne topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Presheaves, sheaves | `04.01.01` sheaf | ✓ | Covered. Hartshorne §II.1 reference. |
| Stalks | `04.01.02` stalk | ✓ | Covered. Hartshorne §II.1 reference. |
| Sheafification | `04.01.03` sheafification | ✓ | Covered. Hartshorne §II.1 reference. |
| Direct image, inverse image | `04.01.04` direct-inverse-image | ✓ | Covered. Hartshorne §II.1 reference. |
| Kernel, cokernel, exact sequences of sheaves | `04.01.01`, `04.01.03` (uses) | △ | Used in the sheaf and sheafification units; no standalone treatment of the abelian category $\mathbf{Sh}(X)$. |
| $\mathrm{Spec}\,A$ as a topological space | `04.02.02` affine-scheme | △ | The affine scheme unit covers $\mathrm{Spec}$ as the underlying space + structure sheaf together; the construction is present but the *topological-space-only* construction (prime spectrum with Zariski topology) is folded in. Hartshorne §II.2 reference. **Adequate.** |
| Affine scheme, structure sheaf | `04.02.02` affine-scheme | ✓ | Covered. |
| Scheme (general) | `04.02.01` scheme | ✓ | Covered. |
| Morphism of schemes | `04.02.04` morphism-of-schemes | ✓ | Covered. |
| Locally Noetherian, integral, reduced, irreducible | — | ✗ | **Gap.** Hartshorne §II.3. The basic adjectives on schemes (locally Noetherian, integral, etc.) are used but not catalogued. |
| Separated and proper morphisms | `04.02.04` (Master, mention) | △ | Mentioned in the morphism-of-schemes unit; not a standalone unit. Hartshorne §II.4 is the canonical reference. **Gap (medium priority).** |
| Quasi-coherent sheaves | `04.06.01` quasi-coherent-sheaf | ✓ | Covered. Hartshorne §II.5. |
| Coherent sheaves | `04.06.02` coherent-sheaf | ✓ | Covered. Hartshorne §II.5. |
| Sheaf $\widetilde{M}$ from a module | `04.06.01` (uses) | △ | The construction $M \mapsto \widetilde{M}$ on $\mathrm{Spec}\,A$ is in the quasi-coherent-sheaf unit. **Adequate.** |
| Projective scheme, $\mathrm{Proj}\,S$ | `04.02.03` projective-scheme | ✓ | Covered. Hartshorne §II.2, §II.7 reference. |
| Twisting sheaf $\mathcal{O}(n)$ on $\mathbb{P}^n$ | `04.05.05` ample-line-bundle (uses); `04.07.01` (uses) | △ | **Gap (high priority).** Used in the ample-line-bundle and projective-space units, not its own unit. Hartshorne §II.5, §II.7 are core references. The *very-ample / ample correspondence with closed embeddings* is also missing as a standalone item. |
| Ample, very ample line bundles | `04.05.05` ample-line-bundle | ✓ | Covered. Hartshorne §II.7 reference. |
| Weil divisors | `04.05.01` weil-divisor | ✓ | Covered. Hartshorne §II.6. |
| Cartier divisors | `04.05.04` cartier-divisor | ✓ | Covered. Hartshorne §II.6. |
| Picard group | `04.05.02` picard-group | ✓ | Covered. Hartshorne §II.6. **Hartshorne's depth on the divisor-line-bundle correspondence + the Cartier-Weil agreement on locally factorial schemes is a deepening opportunity, not a gap.** |
| Line bundle, invertible sheaf | `04.05.03` line-bundle | ✓ | Covered. |
| Sheaf of differentials, $\Omega_{X/Y}$ | `04.08.01` sheaf-of-differentials | ✓ | Covered. Hartshorne §II.8 reference. |
| Canonical sheaf $\omega_X$ | `04.08.02` canonical-sheaf | ✓ | Covered. Hartshorne §II.8 reference. |
| Smooth, étale, unramified morphisms | — | ✗ | **Gap (high priority).** Hartshorne §III.10 (smoothness via the differentials), Appendix C (étale). No Codex unit exists. Used implicitly in spin-geometry and moduli units. |
| Kähler differentials (commutative-algebra side) | `04.08.01` (uses) | △ | The module-theoretic Kähler differentials $\Omega_{B/A}$ is in the sheaf-of-differentials unit; not its own algebra unit. **Adequate** for the AG section; could deepen via a `03-01-*` (commutative algebra) cross-link. |
| Formal schemes | — | ✗ | Hartshorne §II.9. **Specialty — defer to Tier-γ.** Not load-bearing for the rest of the curriculum. |

### Chapter III — Cohomology

| Hartshorne topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Derived functors | — | ✗ | **Gap (medium priority).** Hartshorne §III.1. The general derived-functor formalism is used in `04.03.01` but not standalone. (Cross-section with category theory: belongs in `01-foundations/05-category-theory/` as a homological-algebra unit.) |
| Sheaf cohomology (definition) | `04.03.01` sheaf-cohomology | ✓ | Covered. Hartshorne §III.2 reference. |
| Cohomology of an affine Noetherian scheme — Serre's vanishing | `04.06.01` (uses); `04.03.01` (mention) | △ | **Gap (high priority).** Theorem $H^i(\mathrm{Spec}\,A, \widetilde{M}) = 0$ for $i > 0$ on Noetherian affine schemes is *the* Serre vanishing theorem (not Kodaira vanishing). Currently mentioned but no standalone unit. Hartshorne §III.3. |
| Čech cohomology of a scheme | `03.04.11` cech-de-rham (analogue) | △ | **Gap (high priority).** The de Rham version exists in the Bott-Tu strand. The *scheme-theoretic* Čech cohomology, with the comparison theorem to derived-functor cohomology on Noetherian separated schemes, is missing. Hartshorne §III.4. |
| Cohomology of projective space — $H^i(\mathbb{P}^n, \mathcal{O}(d))$ | `04.03.01` (mention); `04.07.01` (mention) | △ | **Gap (high priority — load-bearing).** *The* foundational computation of algebraic geometry. Currently scattered as mentions; no dedicated unit walks through the calculation. Hartshorne §III.5 is the canonical worked reference. |
| Serre's finiteness theorem (cohomology of coherent sheaves on projective schemes) | — | ✗ | **Gap (medium priority).** Hartshorne §III.5, Theorem 5.2. Not its own unit. Pairs with Serre vanishing as the FAC ("Faisceaux algébriques cohérents", Serre 1955) anchor pair. |
| Ext groups, Ext sheaves | — | ✗ | **Gap.** Hartshorne §III.6. Used in Serre duality without being introduced. |
| Serre duality | `04.08.03` serre-duality | ✓ | Covered. Hartshorne §III.7 reference. |
| Higher direct images $R^i f_*$ | — | ✗ | Hartshorne §III.8. Specialty — used in advanced moduli / cohomology and base change. **Gap (medium priority).** |
| Flat morphisms | — | ✗ | Hartshorne §III.9. **Gap (medium priority).** Used silently in moduli theory. |
| Smooth morphisms (cohomological side) | — | ✗ | Hartshorne §III.10. Same gap as the geometric-side smooth-morphisms entry above. |
| Theorem on formal functions | — | ✗ | Hartshorne §III.11. **Specialty — defer to Tier-γ.** |
| Semicontinuity theorem | — | ✗ | Hartshorne §III.12. **Specialty — defer to Tier-γ.** Used in moduli theory. |

### Chapter IV — Curves

| Hartshorne topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Riemann-Roch theorem for curves | `04.04.01` riemann-roch-curves | ✓ | Covered. Hartshorne §IV.1. **Hartshorne's depth — the cohomology proof via Serre duality, the genus formula, the application to embeddings — is a deepening opportunity.** |
| Hurwitz's theorem (ramification, genus formula for covers) | — | ✗ | **Gap (medium priority).** Hartshorne §IV.2 anchor. Foundational for curve theory; used implicitly in the moduli-of-curves unit. |
| Embeddings in projective space (curves) | `04.05.05` (uses) | △ | Covered as part of the ample-line-bundle unit; not its own unit on the embedding criterion. Hartshorne §IV.3. |
| Elliptic curves | — | ✗ | **Gap (medium priority).** Hartshorne §IV.4 anchor. Codex has nothing dedicated to elliptic curves — a glaring absence given how central they are to number theory, complex geometry, and the moduli-of-curves story. |
| Canonical embedding, canonical curve | `04.08.02` (uses) | △ | The canonical sheaf is covered; the canonical-embedding theorem (degree $2g - 2$ embedding into $\mathbb{P}^{g-1}$ for non-hyperelliptic $g \geq 3$) is not. Hartshorne §IV.5. |
| Classification of curves in $\mathbb{P}^3$ | — | ✗ | Hartshorne §IV.6. **Specialty — defer.** |

### Chapter V — Surfaces

| Hartshorne topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Intersection pairing on a surface, $D \cdot D'$ | — | ✗ | **Gap (high priority — load-bearing).** Hartshorne §V.1 anchor. The intersection number on a smooth projective surface; the pairing $\mathrm{Pic}(X) \times \mathrm{Pic}(X) \to \mathbb{Z}$. Used implicitly in `04.07.02` blowup, `04.05.02` picard-group, and the spin-geometry strand. |
| Adjunction formula, $K_C = (K_X + C)\big|_C$ | `04.08.02` (mention) | △ | **Gap (high priority).** Mentioned in the canonical-sheaf unit; not its own unit. Hartshorne §V.1 anchor. Foundational for genus computations on curves embedded in surfaces. |
| Riemann-Roch theorem for surfaces | — | ✗ | **Gap (medium priority).** Hartshorne §V.1 anchor. The surface form: $\chi(\mathcal{L}) = \chi(\mathcal{O}_X) + \tfrac{1}{2}(D \cdot (D - K_X))$. |
| Hodge index theorem | — | ✗ | **Gap (medium priority).** Hartshorne §V.1 anchor. The signature $(1, h^{1,1} - 1)$ on $\mathrm{NS}(X) \otimes \mathbb{R}$ for a smooth projective surface. |
| Ruled surfaces | — | ✗ | Hartshorne §V.2. **Specialty — defer.** |
| Monoidal transformations (blow-up of a point on a surface) | `04.07.02` blowup | ✓ | Covered. Hartshorne §V.3 reference. |
| 27 lines on the cubic surface | — | ✗ | Hartshorne §V.4. **Specialty (but a famous example) — defer to Tier-γ worked-examples pack.** |
| Castelnuovo's contractibility criterion | — | ✗ | Hartshorne §V.5. **Specialty — defer.** |
| Enriques-Kodaira classification (sketch) | — | ✗ | Hartshorne §V.6. **Specialty — defer.** |

### Appendices A, B, C

| Hartshorne topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Chow groups, intersection theory (general) | — | ✗ | Hartshorne Appendix A. **Survey-level in Hartshorne; defer.** Tier-γ if at all. |
| GAGA | — | ✗ | Hartshorne Appendix B. **Specialty — defer.** Bridges algebraic and complex-analytic geometry. |
| Hodge theory, Kähler manifolds | `04.09.01` hodge-decomposition | △ | Codex has the Hodge-decomposition unit (complex-geometry framing). Hartshorne Appendix B. **Adequate** for the AG section. |
| Étale cohomology, Weil conjectures | — | ✗ | Hartshorne Appendix C. **Defer to Tier-γ.** Étale-morphisms entry above is the prerequisite. |

### Aggregate coverage estimate

**Theorem layer**: ~50% map cleanly; ~25% partial or used implicitly
(Serre vanishing, projective-space cohomology, intersection pairing,
adjunction, Hurwitz); ~25% absent (Nullstellensatz, dimension theory,
étale/smooth/flat morphisms, surfaces theory, elliptic curves, derived
functors, Ext). After the priority-1+2 punch-list, ~88%.

**Exercise layer**: <1%. Codex AG section has **zero** exercise packs.
~600 Hartshorne exercises — the second-largest exercise-layer gap on
the Fast Track after Hatcher.

**Worked-example layer**: ~35%. The cohomology-of-projective-space
computation (§III.5.1) is the single most-cited example in the book
and currently lives only as a mention.

**Notation layer**: ~80% aligned. Codex uses Hartshorne's conventions
directly. Gaps: $\mathrm{Cl}(X)$ vs $\mathrm{Pic}(X)$ distinction,
$\Omega_{X/k}$ versus $\Omega_X$ implicit-base, closed-immersion
$i: Z \hookrightarrow X$ notation. A `notation/hartshorne.md`
crosswalk is warranted.

**Sequencing layer**: ~85%. Codex DAG follows Hartshorne's flow
(sheaves → schemes → cohomology → divisors → differentials →
Riemann-Roch). Hartshorne's "schemes-first" choice is mirrored: Codex
has no classical varieties chapter.

**Intuition layer**: ~65%. Codex captures the scheme + cohomology
framings cleanly; the gap is in the *density* of Hartshorne's worked
calculations, not in conceptual reach.

**Application layer**: ~70%. Riemann-Roch and spin-geometry strands
fold in Hartshorne's applications; the surface-theory applications
(intersection, adjunction, Hodge index) are absent.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

The Cannas plan punch-list (blow-up, GIT, moduli) closed three units in
the algebraic-geometry section: `04.07.02` blowup, `04.10.02` git,
`04.10.01` moduli-of-curves. The Bott-Tu plan punch-list closed the
de-Rham-side Čech (`03.04.11`) but not the scheme-side. The remaining
Hartshorne gaps are therefore largely *new* — they are not duplicated
elsewhere in the existing Fast Track audits.

**Hartshorne-distinctive priority 1 — fills load-bearing scheme + cohomology
gaps that the rest of the AG curriculum currently uses silently:**

1. **`04.03.03` Čech cohomology of schemes.** Hartshorne §III.4 anchor.
   The scheme-theoretic Čech complex on an open cover, the comparison
   theorem to derived-functor cohomology (Noetherian separated case),
   the Leray theorem for acyclic covers. Three-tier; ~1500 words.
   Couples to `03.04.11` cech-de-rham via a §Bridge cross-link. Needed
   for the priority-1 item 2 (projective-space cohomology) below.
2. **`04.03.04` Cohomology of projective space — $H^i(\mathbb{P}^n,
   \mathcal{O}(d))$.** Hartshorne §III.5 anchor. *The* canonical
   computation of algebraic geometry. Master section gives the full
   Čech calculation; intermediate gives the dimension formulas;
   beginner gives the genus-of-curves application. Three-tier; ~2000
   words. Load-bearing for Riemann-Roch deepening (item 11 below) and
   the surface-theory units.
3. **`04.03.05` Serre's vanishing and finiteness theorems.** Hartshorne
   §III.3, §III.5 anchors. FAC (Serre 1955) as originator-text. The
   pair: vanishing $H^i(\mathrm{Spec}\,A, \widetilde{M}) = 0$ for $i > 0$
   and Noetherian $A$; finiteness $\dim_k H^i(X, \mathcal{F}) < \infty$
   for $X$ projective and $\mathcal{F}$ coherent. Three-tier; ~1500
   words. Originator-prose: Serre's 1955 framing, the FAC paper as
   foundational text.
4. **`04.02.05` Smooth, étale, and unramified morphisms.** Hartshorne
   §III.10 + Appendix C anchors; SGA 1 as originator-text reference.
   The Jacobian criterion, the differential characterisation
   ($\Omega_{X/Y}$ locally free for smooth, zero for étale), the
   formal-smoothness lifting characterisation. Three-tier; ~2000 words.
   **Load-bearing** — every reference to "smooth scheme" in the spin-
   geometry strand and the moduli units currently uses the word without
   a Codex anchor.
5. **`04.07.03` Twisting sheaves $\mathcal{O}(n)$ on projective space
   and the very-ample / closed-embedding correspondence.** Hartshorne
   §II.5, §II.7 anchors. The Serre twists, the global sections
   $H^0(\mathbb{P}^n, \mathcal{O}(d)) = $ degree-$d$ homogeneous
   polynomials, the line-bundle / closed-embedding equivalence.
   Three-tier; ~1500 words. Couples to `04.05.05` ample-line-bundle as
   the concrete projective-space case.

**Hartshorne-distinctive priority 2 — fills surface-theory + curve-theory
gaps:**

6. **`04.05.06` Intersection pairing on surfaces.** Hartshorne §V.1
   anchor. The pairing $\mathrm{Pic}(X) \times \mathrm{Pic}(X) \to
   \mathbb{Z}$ on a smooth projective surface, intersection multiplicity
   at a point, the projection formula, intersection of a curve with
   itself via blow-up. Three-tier; ~1800 words. **Load-bearing** for
   adjunction (item 7) and the spin-geometry / Riemann-surfaces strands.
7. **`04.05.07` Adjunction formula.** Hartshorne §V.1 anchor.
   $K_C = (K_X + C)\big|_C$ for a smooth curve $C$ on a smooth surface
   $X$; equivalent statement via canonical sheaves. Three-tier; ~1200
   words. Closes the gap currently held only as a §V.1 mention in
   `04.08.02` canonical-sheaf.
8. **`04.05.08` Riemann-Roch theorem for surfaces.** Hartshorne §V.1
   anchor. $\chi(\mathcal{L}) = \chi(\mathcal{O}_X) + \tfrac{1}{2}D
   \cdot (D - K_X)$ for a divisor $D$ on a smooth projective surface.
   Three-tier; ~1500 words. Couples to the curves-Riemann-Roch unit and
   the eventual Hirzebruch-Riemann-Roch deepening.
9. **`04.05.09` Hodge index theorem.** Hartshorne §V.1 anchor. The
   signature $(1, \rho - 1)$ on the Néron-Severi group of a smooth
   projective surface (where $\rho$ is the Picard number). Three-tier;
   ~1200 words. Foundational for the spin-geometry strand
   (Atiyah-Singer on 4-manifolds) and for Hodge theory.
10. **`04.04.02` Hurwitz theorem and ramification.** Hartshorne §IV.2
    anchor. Riemann-Hurwitz formula $2g_X - 2 = n(2g_Y - 2) +
    \sum_P (e_P - 1)$ for a finite morphism $f: X \to Y$ of smooth
    projective curves. Three-tier; ~1200 words.
11. **`04.04.03` Elliptic curves.** Hartshorne §IV.4 anchor; Silverman
    *Arithmetic of Elliptic Curves* as cross-anchor. Smooth projective
    curves of genus 1 with a marked point, Weierstrass form, group law,
    $j$-invariant, the moduli space $\mathcal{M}_{1,1}$. Three-tier;
    ~2500 words. **A glaring absence in the current Codex.** Used as
    motivation in `04.10.01` moduli-of-curves and in number-theory
    cross-references; deserves a dedicated unit.

**Hartshorne-distinctive priority 3 — Hartshorne-depth deepenings on
existing units, plus medium-priority foundations:**

12. **Deepening of `04.04.01` riemann-roch-curves:** add a Master section
    on the cohomology proof via Serre duality (Hartshorne §IV.1 actual
    proof, not the analytical sketch). The current unit is solid on the
    statement and the genus-formula corollary; the modern proof (line
    bundles, $H^0$/$H^1$ via Serre duality, Riemann-Roch as
    $\chi(\mathcal{L}) = \deg \mathcal{L} + 1 - g$) is the deepening.
13. **Deepening of `04.05.02` picard-group:** add a Master section on
    the Cartier-Weil agreement on locally factorial schemes
    (Hartshorne §II.6). The current unit treats Pic abstractly; the
    explicit "on a smooth variety, Weil and Cartier give the same group"
    statement is a one-paragraph §III deepening.
14. **`04.02.06` Properties of schemes — Noetherian, integral, reduced,
    irreducible, separated, proper.** Hartshorne §II.3, §II.4 anchors.
    A consolidation unit covering the basic adjectives in one place
    (currently scattered across morphism-of-schemes and used silently
    elsewhere). Three-tier; ~1500 words.
15. **`04.02.07` Nullstellensatz and dimension theory.** Hartshorne
    §I.1, §I.7 anchors. The bridge from commutative algebra to
    classical geometry; Krull dimension; transcendence-degree
    characterisation for varieties over $k$. Three-tier; ~1200 words.
    Useful as a Chapter-I-style runway for classical-variety
    intuition.
16. **Deepening of `04.08.01` sheaf-of-differentials:** add a Master
    section on the Jacobian criterion for nonsingularity at a point
    (Zariski tangent space + maximal-ideal cotangent space agreement).
    Hartshorne §I.5 / §II.8.

**Hartshorne-distinctive priority 4 — survey-level pointers, exercise
pack, optional:**

17. **`04.03.06` Derived functors and Ext.** Hartshorne §III.1, §III.6.
    A consolidation unit on the homological-algebra side: derived
    functors, Ext groups, Ext sheaves. **Better placed in
    `01-foundations/05-category-theory/` as a homological-algebra
    cross-section unit;** noted here as a pointer.
18. **`04.03.07` Higher direct images and base change.** Hartshorne
    §III.8, §III.9. Survey-level Master-only unit, ~1000 words.
    Specialty — defer.
19. **`04.04.E1` Curves exercise pack** — Hartshorne Chapter IV
    exercises as graded problems. ~30 problems across Riemann-Roch
    applications, Hurwitz computations, elliptic-curve $j$-invariants,
    canonical embeddings.
20. **`04.05.E1` Divisors and surfaces exercise pack** — Hartshorne
    Chapter II §6 + Chapter V §1 exercises. ~25 problems on
    Cartier-Weil, intersection numbers, adjunction.
21. **`04.03.E1` Cohomology exercise pack** — Hartshorne Chapter III
    exercises. ~30 problems. The cohomology-of-projective-space
    computation, Čech-vs-derived comparison, Serre duality
    applications.

---

## §4 Implementation sketch (P3 → P4)

For a full Hartshorne coverage pass, **items 1–11 are the minimum
priority-1+2 set** (11 new units). Production estimate (mirroring
earlier batches):

- ~3 hours per unit (research + draft + validate at 27/27 + Lean stub +
  Bridge / Synthesis paragraphs in real prose, not the templated form).
- 11 priority-1+2 units × 3 hours = ~33 hours of focused production.
  At 4–6 production agents in parallel, this fits in a 4-day window
  with an integration agent stitching outputs.
- Priority-3 deepenings (items 12–16) = ~12 additional hours.
- Priority-4 exercise packs (items 19–21) = ~24 additional hours
  (each pack is ~8 hours by Lawson-Michelsohn batch-2 calibration).

**Total Hartshorne campaign:** ~70 hours of focused production work,
spanning ~6 days in parallel-agent mode. This is comparable to the
Bott-Tu campaign (14 new units, ~121 hours estimated) and larger than
the Lawson-Michelsohn campaign (12 new units, ~104 hours).

**Composite batching with Vakil and Eisenbud-Harris.** A composite
Hartshorne+Vakil batch could close both books' equivalence gaps
simultaneously — particularly on items 1, 2, 3 (Čech, projective-space
cohomology, Serre vanishing/finiteness), where all three books anchor.
Defer to a follow-up Vakil overlay audit; this plan covers Hartshorne
in isolation.

**Originator-prose targets.** Hartshorne is textbook synthesis, not
originator-text. Citations for priority-1+2 units:

- Schemes, $\mathrm{Spec}$, $\mathrm{Proj}$: **Grothendieck-Dieudonné
  EGA I-IV** (1960–1967).
- Sheaf cohomology, Serre vanishing/finiteness, twisting sheaves:
  **Serre 1955**, *Faisceaux algébriques cohérents* (Annals of Math).
- Étale morphisms: **SGA 1** (1960–61); **SGA 4** for étale cohomology.
- Surfaces intersection theory: **Zariski 1958** (Publ. Math. Soc. Japan).
- Riemann-Roch: **Riemann 1857**, **Roch 1865**; modern form
  **Hirzebruch 1956**.
- Hodge index: **Hodge 1937**.
- Adjunction, Hurwitz: classical (Riemann-Hurwitz 1857;
  adjunction traces to **Picard 1897**).

Each priority-1+2 unit's Master section cites the originator paper
in addition to Hartshorne.

**Notation crosswalk.** Distinctions to record in a
`notation/hartshorne.md` crosswalk:

- $\mathrm{Cl}(X) \cong \mathrm{Pic}(X)$ on locally factorial schemes
  but NOT in general.
- $\Omega_{X/k}$ versus $\Omega_X$ — Hartshorne writes $\Omega_X$ when
  the base is an implicit algebraically closed field. Codex should be
  explicit.
- Closed immersion $i: Z \hookrightarrow X$ with conormal sheaf
  $\mathcal{N}_{Z/X}^\vee = i^* \mathcal{I}_Z / \mathcal{I}_Z^2$ — this
  notation flows into the adjunction formula.
- Derived-functor versus Čech — Hartshorne uses $H^i$ for both;
  Codex should write $\check{H}^i$ until agreement is invoked.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem and exercise.
  Deferred unless the priority-1+2 punch-list expands.
- Full exercise-pack coverage. Items 19–21 sketch three per-chapter
  packs; full ~600-problem Hartshorne coverage requires ~5 dedicated
  `*.E*` passes — second-largest exercise commitment on the Fast Track.
- §II.9 (formal schemes), §III.11 (formal functions), §III.12
  (semicontinuity) — Tier-γ; specialty, not load-bearing.
- §V.4 (27 lines), §V.5 (Castelnuovo contractibility), §V.6
  (Enriques-Kodaira) — Tier-γ. The 27-lines result deserves eventual
  inclusion in a worked-examples pack.
- Appendix A (general intersection theory) — requires Fulton as
  canonical reference; defer to Tier-γ.
- Appendix B (GAGA, transcendental methods) — partially covered by
  `04.09.01` hodge-decomposition; GAGA bridge is a separate audit.
- Appendix C (Weil conjectures, étale cohomology) — Tier-γ; the
  étale-morphisms entry (priority-1 item 4) is prerequisite.
- Vakil and Eisenbud-Harris cross-coverage. Composite batching is
  noted in §4; a Vakil audit is the right forum.

---

## §6 Acceptance criteria for FT equivalence (Hartshorne)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, Hartshorne
is at equivalence-coverage when:

- ≥95% of Hartshorne's named theorems map to Codex units (currently
  ~50%; after priority-1 units this rises to ~75%; after priority-1+2
  to ~88%; after priority-3 deepenings + foundations to ~95%).
- ≥80% of Hartshorne's exercises have a Codex equivalent (currently
  <1%; closing this requires the dedicated exercise-pack pass per §5
  and items 19–21).
- ≥90% of Hartshorne's worked examples are reproduced in some Codex
  unit (currently ~35%; the priority-1+2 batch — particularly items
  2 and 11 — brings this to ~70%; the remainder requires
  worked-example densification in `04.04.01` Riemann-Roch curves and
  the new surface-theory units).
- A `notation/hartshorne.md` crosswalk exists.
- For every chapter dependency in Hartshorne (Ch I → Ch II → Ch III
  → Ch IV → Ch V), there is a corresponding `prerequisites` arrow
  chain in Codex's DAG.
- Pass-W weaving connects the new units to the existing
  `04-algebraic-geometry/` units, plus the spin-geometry strand
  (`03-09-spin-geometry`), the differential-forms / cohomology strand
  (`03-04-differential-forms`), and the moduli units
  (`04-10-moduli`) via lateral connections.

The 11 priority-1+2 units close most of the theorem-layer gap;
priority-3 closes the depth gap on Picard, Riemann-Roch, schemes
properties, and Nullstellensatz/dimension; priority-4 are pointers
and exercise packs.

**Recommended sequencing.** Priority-1 (items 1–5) as one batch
(5 agents × ~3h = ~3h wall + ~30m integration); priority-2
surface-theory bundle (items 6–9, interlinked) as a second batch;
priority-2 curves bundle (10–11) + priority-3 (12–16) as a third
batch; exercise packs as a fourth pass. This matches Hartshorne's
chapter dependencies (Ch II + III foundations → Ch V surfaces →
Ch IV curves → exercises) and keeps each integration to <12 units,
in line with Lawson-Michelsohn and Bott-Tu calibrated batch sizes.

**Composite Vakil+Hartshorne batch.** After priority-1 ships, trigger
a *Vakil overlay audit* to identify Vakil-specific framings (functor
of points, Yoneda-style scheme definitions, the "rising sea") that
need their own units versus Hartshorne units that already suffice.
Avoids redundant production across the two anchor textbooks.

---

*Plan v1. To be refined after the priority-1 batch ships and the
Vakil overlay audit completes.*
