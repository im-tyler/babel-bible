# Milnor — *Morse Theory* (Fast Track 3.03) — Audit + Gap Plan

**Book:** John W. Milnor, *Morse Theory*, based on lecture notes by M. Spivak
and R. Wells. Annals of Mathematics Studies 51, Princeton University Press,
1963. vi + 153 pp. Free PDF hosted on the Ranicki archive at
<https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnmors.pdf>.

**Fast Track entry:** 3.03 (the canonical small monograph on critical-point
theory for smooth manifolds, sitting between general differential topology
and the Floer / symplectic chapter).

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
new units so that *Morse Theory* (MMT hereafter) is covered to the
equivalence threshold (≥95% effective coverage of theorems, examples,
exercises, notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

This pass is intentionally not a full P1 audit. MMT is short (~150 pp.) and
extraordinarily distilled — the editorial style is to deliver each theorem
with minimal preamble — so the TOC alone already determines most of the
audit content, and a line-number-level inventory would be redundant with
the punch-list. The pass works from MMT's TOC (Parts I–IV + Appendix), the
existing Codex symplectic / spin / K-theory units that already cite MMT,
and the gap is the punch-list.

---

## §1 What MMT is for

MMT is the canonical small monograph on **Morse theory** — the study of
how the topology of a smooth manifold is determined by the critical-point
data of a smooth function on it. Despite being ~150 pages, MMT delivers
the entire classical theory and culminates in a complete proof of the
**Bott periodicity theorem** for the orthogonal and unitary groups,
obtained as an application of Morse theory to the path space of a
symmetric space. The editorial style is severe: Milnor states the
minimum necessary lemmas, gives short and exact proofs, and arrives at
deep theorems with a velocity that no later textbook has matched.

Distinctive content, organised by the four parts of the book:

1. **Part I — Non-degenerate smooth functions on a manifold (§§1–7).** The
   foundations. Critical point of a smooth $f: M \to \mathbb{R}$,
   non-degenerate critical point, Hessian and **Morse index**, the **Morse
   lemma** giving local normal form $f = -x_1^2 - \cdots - x_\lambda^2 +
   x_{\lambda+1}^2 + \cdots + x_n^2$. **Reeb's theorem**: a compact manifold
   with exactly two non-degenerate critical points is homeomorphic to a
   sphere. The two foundational theorems linking critical data to topology:
   **Theorem 3.1** (passing a non-critical level changes nothing up to
   diffeomorphism) and **Theorem 3.2** (passing a level containing one
   non-degenerate critical point of index $\lambda$ attaches a
   $\lambda$-handle / $\lambda$-cell). The **Morse inequalities** for Betti
   numbers in terms of critical-point counts. Existence of non-degenerate
   functions via embedding in Euclidean space. The **Lefschetz hyperplane
   theorem** as a Morse-theoretic application to complex projective
   manifolds. Compare Audin-Damian Part I and Banyaga-Hurtubise Chapters
   3–6 [ref: Audin-Damian *Morse Theory and Floer Homology* Part I;
   Banyaga-Hurtubise *Lectures on Morse Homology* Chs. 3–6].
2. **Part II — A rapid course in Riemannian geometry (§§8–10).** Just
   enough Riemannian geometry to do calculus of variations on geodesics:
   covariant differentiation $\nabla$, the curvature tensor $R$, geodesics,
   the exponential map, and completeness (Hopf-Rinow). Genuinely "rapid"
   — Milnor compresses a semester of Riemannian geometry into roughly
   25 pages, keeping only what is load-bearing for Part III.
3. **Part III — Calculus of variations applied to geodesics (§§11–19).**
   The **path space** $\Omega(M; p, q)$, the energy functional $E$, the
   first variation, the Hessian $E_{**}$ at a critical path (geodesic),
   **Jacobi fields** as the null-space of $E_{**}$, **conjugate points**.
   The **Morse Index Theorem**: the index of $E_{**}$ at a geodesic equals
   the number of conjugate points (with multiplicity) interior to the
   geodesic. **Finite-dimensional approximation** of $\Omega$ by broken
   geodesics — the technique that makes infinite-dimensional Morse theory
   rigorous in this book. Topology of the full path space (it has the
   homotopy type of a CW complex with one $\lambda$-cell per geodesic of
   index $\lambda$). Existence of non-conjugate points. Topology vs.
   curvature: **Theorem 19.4** (Bonnet-Myers via Morse) and the
   **Cartan-Hadamard theorem**.
4. **Part IV — Applications to Lie groups and symmetric spaces
   (§§20–24).** Symmetric spaces, Lie groups as symmetric spaces.
   **Whole manifolds of minimal geodesics**: the key technical device for
   the periodicity proof — when the set of minimal geodesics from $p$ to
   $q$ is itself a manifold, one can do Morse theory by induction on
   dimension. **The Bott periodicity theorem for $\mathrm{U}(n)$**
   (§23): $\Omega \mathrm{U} \simeq \mathbb{Z} \times \mathrm{BU}$, proved
   via Morse theory on the path space of $\mathrm{U}(2n)$ joining $I$ to
   $-I$. **The periodicity theorem for $\mathrm{O}(n)$** (§24): the
   eight-fold periodicity, proved by iterating the minimal-geodesics
   construction through a chain $\mathrm{O}(16n) \supset \mathrm{O}(16n)/\Omega_1 \supset
   \cdots$ down to a one-point space. This is the original Morse-theoretic
   proof; the K-theoretic / Clifford-module reformulation (Atiyah-Bott-Shapiro
   1964) is logically independent but historically posterior.
5. **Appendix — The homotopy type of a monotone union.** A technical CW
   approximation lemma used in Part III to handle ascending unions of
   approximations.
6. **Editorial signature.** MMT is the gold-standard example of Milnor's
   "deliver the heart of the field in a small book" style. Compare
   *Topology from the Differentiable Viewpoint* (76 pp.) and
   *Characteristic Classes* (with Stasheff, 230 pp.). Subsequent textbooks
   on Morse theory (Schwarz 1993, Banyaga-Hurtubise 2004, Audin-Damian
   2014, Nicolaescu 2007/2011) all explicitly cite MMT as the canonical
   classical reference and structure their classical-theory chapters
   around its Part I [ref: Schwarz *Morse Homology* Birkhäuser 1993
   Introduction; Nicolaescu *An Invitation to Morse Theory* 2nd ed. 2011
   Part I].
7. **Relation to later programmes.** The infinite-dimensional Morse theory
   of Floer (Hamiltonian / Lagrangian / instanton Floer homology) replaces
   Milnor's finite-dim approximation by a **gradient flow** in a Banach /
   Hilbert manifold setting, recovers Milnor-style index information from
   the trajectory moduli spaces, and packages the output as a **Morse
   complex** (Schwarz 1993). MMT is the conceptual prerequisite for that
   programme. Audin-Damian Part I is essentially "MMT Part I rewritten in
   the Morse-complex framework that will be needed for Floer in Part II"
   [ref: Audin-Damian Part I; Schwarz §§1–3].

MMT is **not** a first introduction to smooth manifolds. It assumes
familiarity with manifolds, tangent bundles, vector fields, the implicit
function theorem, and CW complexes (the latter only at the level of cell
attachment). It is the canonical entry point to Morse theory if one wants
the classical finite-dim treatment with the Bott-periodicity payoff. The
modern Morse-complex / Morse-homology programme is a later development;
MMT itself does **not** define Morse homology as a chain complex (that is
Thom 1949 / Smale 1960s / Witten 1982 / Floer 1988 / Schwarz 1993).

---

## §2 Coverage table (Codex vs MMT)

Cross-referenced against the current Codex corpus. ✓ = covered,
△ = partial / different framing, ✗ = not covered.

| MMT topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Critical point, Hessian, non-degeneracy (Morse condition) | `02.05.05-multivariable-taylor-extrema.md` | △ | Classical multivariable extrema only; no manifold Hessian, no Morse-index definition. Touches the Euclidean shadow but not the geometry. |
| Morse lemma (local normal form) | — | ✗ | **Gap.** Foundational. |
| Morse index $\lambda(p)$ of a non-degenerate critical point | — | ✗ | **Gap.** Cited by name in Floer units (`05.08.02`, `05.08.04`) without an anchor. |
| Reeb's theorem (sphere recognition by two critical points) | — | ✗ | **Gap.** Charming and short — natural Beginner-tier hook. |
| Theorem 3.1 (sublevel sets across non-critical levels are diffeomorphic) | — | ✗ | **Gap.** Load-bearing for handle attachment. |
| Theorem 3.2 / handle attachment ($\lambda$-cell attachment at index-$\lambda$ critical) | — | ✗ | **Gap.** This is *the* theorem linking analysis to topology in Morse theory. |
| Morse inequalities (weak + strong) for Betti numbers | — | ✗ | **Gap.** |
| Existence of Morse functions (generic via Whitney embedding) | — | ✗ | **Gap.** |
| Lefschetz hyperplane theorem (Morse-theoretic proof) | — | ✗ | **Gap.** Connects to Hodge theory / Hartshorne (`04-algebraic-geometry/`); currently unanchored in either chapter. |
| Covariant derivative $\nabla$ | △ | △ | Covered functionally in `03.05.09-curvature.md` and `03.05-bundles/` connection units, but as a connection on a vector bundle rather than the Levi-Civita-on-a-Riemannian-manifold framing MMT uses. Adequate for FT-equivalence; no new unit needed. |
| Curvature tensor $R$ | △ | △ | Covered in `03.05.09-curvature.md` at the bundle-curvature level. The Riemannian-curvature-tensor specialisation (sectional curvature, $R(X,Y)Z$ formula) is partial. Marginal gap. |
| Geodesic, exponential map, Hopf-Rinow completeness | △ | △ | Geodesic flow appears in `05.02.06-geodesic-flow-hamiltonian.md` from the Hamiltonian-symplectic side; the Riemannian-geometry framing (Levi-Civita geodesic, $\exp_p$, Hopf-Rinow) has no dedicated unit. **Marginal gap** — one short unit closes it. |
| Path space $\Omega(M; p, q)$ | — | ✗ | **Gap.** Foundational for the variational half of MMT and for loop-space arguments throughout topology. |
| Energy functional $E$, first variation formula | — | ✗ | **Gap.** |
| Hessian $E_{**}$ at a critical geodesic | — | ✗ | **Gap.** |
| Jacobi field, Jacobi equation | — | ✗ | **Gap.** Cited in `03.09.18-berger-holonomy.md` informally. |
| Conjugate point, conjugate-point multiplicity | — | ✗ | **Gap.** |
| Morse Index Theorem ($\mathrm{index}(E_{**}) = $ count of interior conjugate points) | — | ✗ | **Gap (high priority — the central theorem of Part III).** |
| Finite-dimensional approximation of $\Omega$ by broken geodesics | — | ✗ | **Gap.** Master-tier only — technique unit. |
| Path space has CW type with one $\lambda$-cell per geodesic of index $\lambda$ | — | ✗ | **Gap.** The bridge from variational Morse theory to algebraic topology of loop spaces. |
| Bonnet-Myers theorem via Morse | — | ✗ | **Gap.** Compact-with-positive-curvature ⇒ finite fundamental group. |
| Cartan-Hadamard theorem (non-positive curvature ⇒ $\exp_p$ covering map) | — | ✗ | **Gap.** |
| Symmetric space; Lie group as symmetric space | △ | △ | `03.03-lie/` Lie group units are present (Lie group, Lie algebra, Maurer-Cartan, etc.); a unit explicitly identifying $G$ with $(G \times G)/\Delta G$ as a symmetric space is absent. Marginal gap. |
| Whole manifolds of minimal geodesics (Bott's induction device) | — | ✗ | **Gap.** Master-tier; the technical heart of the periodicity proof. |
| Bott periodicity for $\mathrm{U}$ via Morse on path space of $\mathrm{U}(2n)$ | `03.08.07-bott-periodicity.md` | △ | The Bott-periodicity unit **already cites** MMT §23 by name as its Master anchor, but presents the statement via clutching / classifying-space arguments and only gestures at the Morse-theoretic proof in a single line (see `03.08.07` line 490, line 508, line 510). **The Morse-theoretic proof is the anchor citation but has no anchor unit.** |
| Bott periodicity for $\mathrm{O}$ via iterated minimal-geodesics chain | `03.08.07-bott-periodicity.md` (real case) | △ | Same as above. The real eight-fold periodicity is stated and proved via Clifford modules (Lawson-Michelsohn route) but the Morse proof is referenced only obliquely. |
| Appendix: homotopy type of a monotone union (CW approximation) | — | ✗ | **Gap (low priority — technical lemma).** |

**Aggregate coverage estimate:** ~5–10% of MMT has corresponding Codex
units. Part I (the foundations) is essentially uncovered. Part II is
mostly covered (the Codex has Riemannian curvature and connections, but
not Levi-Civita-and-Hopf-Rinow framed). Part III is essentially
uncovered. Part IV — the Bott periodicity culmination — has a downstream
unit (`03.08.07`) but its **Morse-theoretic proof is unanchored**: the
unit cites MMT §23 as its Master tier anchor while having no
prerequisite chain that supplies the Morse-theoretic background.

**Silent Morse dependencies in the symplectic chapter.** The Floer
sub-chapter (`content/05-symplectic/floer/`) consists of four shipped
units (`05.08.01` Arnold conjecture, `05.08.02` Floer homology,
`05.08.03` Maslov index, `05.08.04` Conley-Zehnder index). All four
cite Audin-Damian *Morse Theory and Floer Homology* as their primary
anchor; Audin-Damian Part I *is* MMT Part I in modern notation, and all
four units invoke Morse-theoretic concepts (index, gradient flow,
critical-point counting, Morse complex) without any prerequisite unit
that defines them. **Four Floer units silently depend on Morse-theoretic
content with no anchor.**

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 1 — load-bearing classical Morse theory (Part I + Part III core):**

1. **`03.02.02` Critical point, Hessian, Morse index, Morse lemma.** Smooth
   $f: M \to \mathbb{R}$, the intrinsic Hessian at a critical point, the
   non-degeneracy condition, and the Morse-lemma normal form. MMT §2 anchor.
   Three-tier, ~1500 words. Foundational; unblocks every other Morse unit.
2. **`03.02.03` Morse functions and handle attachment (Theorems 3.1, 3.2).**
   Sublevel-set diffeomorphism across non-critical levels; cell attachment
   at non-degenerate critical points of index $\lambda$. MMT §3 anchor.
   Three-tier; Beginner gives the height-function-on-torus picture
   (MMT §1), Intermediate gives Theorems 3.1 and 3.2 with the gradient-flow
   proof sketch, Master gives the full proofs. ~2000 words.
3. **`03.02.04` Morse inequalities and Reeb's theorem.** Weak and strong
   Morse inequalities relating critical-point counts to Betti numbers; Reeb
   sphere-recognition theorem as a corollary. MMT §§4–5 anchor.
   ~1500 words. Three-tier.
4. **`03.12.X1` Path space $\Omega(M; p, q)$, energy functional, first
   variation.** Definition of the path space, energy vs length, first
   variation of $E$, critical paths = geodesics. MMT §§11–12 anchor; also
   covered in Bott-Tu §17 indirectly via loop spaces. ~1500 words. Slots
   into `03.12-homotopy/` next to existing loop-space-adjacent units.
5. **`03.02.05` Jacobi fields, conjugate points, Morse Index Theorem.**
   Jacobi equation as the second-variation EL equation, conjugate points
   as zeros of Jacobi fields, the Index Theorem ($\mathrm{index}(E_{**}) =
   \sum$ interior conjugate-point multiplicities). MMT §§13–15 anchor.
   Three-tier; ~2500 words; the longest unit in the punch-list because
   the Index Theorem proof is genuinely technical. Master tier includes
   the finite-dim-approximation argument from MMT §16.

**Priority 2 — Part II patch + Part III topology + Bott connection:**

6. **`03.03.X1` Levi-Civita connection, exponential map, Hopf-Rinow.**
   Patches the Part II gap: the existing `03.05.09-curvature.md` covers
   bundle curvature but not Levi-Civita; Hopf-Rinow is absent. MMT §10
   anchor; do Cross with do Carmo *Riemannian Geometry* as a secondary
   anchor. ~1500 words.
7. **`03.12.X2` Path-space CW structure: cells from geodesics of index $\lambda$.**
   The theorem that $\Omega(M; p, q)$ has the homotopy type of a CW complex
   with one $\lambda$-cell per geodesic of index $\lambda$. MMT §17 anchor.
   Two-tier (Intermediate + Master); ~1500 words. The bridge from Part III
   variational Morse to the loop-space algebraic topology that feeds Bott.
8. **`03.02.06` Topology and curvature: Bonnet-Myers and Cartan-Hadamard.**
   Both as Morse-theoretic applications of the Index Theorem. MMT §§19 + 22
   anchor. ~1500 words. Three-tier.
9. **`03.08.X1` Bott periodicity for $\mathrm{U}$: the Morse-theoretic proof.**
   Currently `03.08.07-bott-periodicity.md` cites MMT §23 as its Master
   anchor while only stating the result. Add a sibling unit (or expand the
   existing Master tier into a separate unit) giving the Morse-theoretic
   proof: path space of $\mathrm{U}(2n)$ from $I$ to $-I$, the set of
   minimal geodesics is $\mathrm{Gr}_n(\mathbb{C}^{2n})$, induct on $n$.
   MMT §23 anchor; Milnor-Stasheff §24 secondary. ~2000 words; Master tier
   only. This is the unit that **completes the citation chain** in the
   K-theory chapter.

**Priority 3 — Lefschetz hyperplane and the real-case Bott proof:**

10. **`03.02.07` Lefschetz hyperplane theorem via Morse.** Andreotti-Frankel /
    Milnor Morse-theoretic proof on the affine complement. MMT §7 anchor;
    Andreotti-Frankel 1959 originator citation. ~1500 words. Connects the
    Morse units to `04-algebraic-geometry/` (where the Lefschetz hyperplane
    theorem is also a gap on the Hartshorne audit).
11. **`03.08.X2` Bott periodicity for $\mathrm{O}$: iterated minimal geodesics.**
    The eight-fold periodicity proved by the chain of symmetric spaces
    $\mathrm{O}(16n) \supset \mathrm{O}(16n)/\mathrm{U}(8n) \supset \cdots$.
    MMT §24 anchor. Master tier only; ~2000 words. Optional — the
    Clifford-module proof (Lawson-Michelsohn) is already covered in
    `03.09-spin-geometry/`, so this unit is the historical Morse-theoretic
    proof, not the only proof.

**Priority 4 — technical and survey units (optional, Master-only):**

12. **`03.02.X1` Finite-dimensional approximation of $\Omega$ by broken
    geodesics.** MMT §16 technique unit. Master-only, ~1200 words. Useful
    as the conceptual bridge to Floer theory (where the analogous device is
    the analytic compactification of trajectory moduli spaces).
13. **`03.02.X2` Symmetric space; Lie group as symmetric space.** Closes
    the Part IV §§20–22 gap. Sits between `03.03-lie/` and the new Bott
    units. ~1500 words. Three-tier.
14. **Pointer in `05.08.02` Floer homology** to the new `03.02.0X` Morse
    units. Single-paragraph weaving edit, not a new unit; recorded here so
    it is not forgotten in Pass-W.

---

## §4 Implementation sketch (P3 → P4)

For a full MMT coverage pass, items 1–5 are the priority-1 minimum and
also unblock the Floer units' silent Morse dependency. Realistic
production estimate (mirroring earlier batches):

- ~3 hours per Morse unit. The corpus average is 2.5–3 hours; MMT units
  trend slightly above average because the Index Theorem proof and the
  Bott periodicity proof both have nontrivial Master tiers.
- Priority 1: 5 units × ~3 hours = **~15 hours.**
- Priority 2: 4 units × ~3 hours = **~12 hours.**
- Priority 3: 2 units × ~3.5 hours = **~7 hours.**
- Priority 4 (optional): 2 units + 1 weaving edit ≈ **~6 hours.**
- **Total for full coverage: ~40 hours.** Priority 1 alone closes the
  Floer-dependency gap and is the minimal useful chunk: ~15 hours, two
  to three focused days.

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, the following units
should carry originator-prose citations:

- **Marston Morse**, "Relations between the critical points of a real
  function of $n$ independent variables," *Trans. AMS* 27 (1925) 345–396 —
  the foundational paper introducing the Morse inequalities. Cite in unit
  `03.02.04`.
- **Marston Morse**, *The Calculus of Variations in the Large* (AMS
  Colloquium Publications XVIII, 1934) — book-length consolidation; cite in
  unit `03.02.05`.
- **Raoul Bott**, "The stable homotopy of the classical groups," *Proc.
  Nat. Acad. Sci. USA* 43 (1957) 933–935; the long-form paper *Annals*
  70 (1959) 313–337. Cite in `03.08.X1` and `03.08.X2`.
- **Stephen Smale**, "On the structure of manifolds," *Amer. J. Math.* 84
  (1962) 387–399, and the $h$-cobordism theorem (1962) — Morse-theoretic
  application. Cite as a "downstream" pointer in `03.02.03`.
- **John Milnor**, *Morse Theory* (1963) — the canonical consolidation.
  Cite throughout.
- **Andreotti, Frankel**, "The Lefschetz theorem on hyperplane sections,"
  *Annals of Math.* 69 (1959) 713–717 — cite in `03.02.07`.

**Notation crosswalk.** MMT writes:

- $f^a = \{x \in M : f(x) \le a\}$ for sublevel sets.
- $\lambda$ for the Morse index.
- $\Omega(M; p, q)$ for the path space from $p$ to $q$, and $\Omega(M) =
  \Omega(M; p, p)$ for the based loop space when convenient.
- $E$ for the energy functional, $L$ for length.
- $E_{**}$ for the Hessian of $E$ at a critical path.

Audin-Damian and Schwarz use slightly different notation:
$\mathrm{Crit}(f)$, $\mathrm{ind}(p)$ for index, $W^s(p)$ / $W^u(p)$ for
stable/unstable manifolds (these are absent from MMT, which does not
introduce gradient-flow stable manifolds explicitly — that is a
Smale 1960s reformulation). The Codex notation decision (per
`docs/specs/UNIT_SPEC.md` §11) should: adopt MMT's $f^a$, $\lambda$,
$\Omega(M; p, q)$, $E$, $L$ verbatim, and **add** the Smale-era
$W^s$/$W^u$ in unit `03.02.03` as the modern reformulation, with a
notation paragraph cross-referencing both. Record in `§Notation` of
units `03.02.02` and `03.02.03`.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in MMT (full P1
  audit). Deferred; the TOC + the punch-list above are sufficient at the
  scale of a 150-page monograph.
- **Schwarz, *Morse Homology* (Birkhäuser 1993) — Fast Track 3.04.**
  Deferred to a separate audit. The Morse-complex / Morse-homology
  programme is logically downstream of MMT and substantively distinct
  (gradient flow, transversality, signs, the Morse-Smale-Witten complex);
  the Codex priority is to anchor classical MMT first and then build the
  complex on top.
- **Audin-Damian Part II — Floer Homology.** Already partially covered in
  `05.08-floer/` and will get its own audit pass alongside the
  Floer-specific texts (Donaldson Floer / FT 3.06; Hutchings ECH notes).
- **Donaldson Floer homology and Yang-Mills Morse theory — FT 3.06.**
  Deferred.
- **The $h$-cobordism theorem of Smale 1962** as a substantive unit.
  Mentioned in the originator citations and as a downstream pointer in
  `03.02.03`; a full unit on the $h$-cobordism theorem is a separate
  effort (one of the few classical Milnor results not in MMT itself; it is
  in Milnor's later *Lectures on the h-Cobordism Theorem* 1965).
- **Witten's supersymmetric Morse theory** (Witten 1982 "Supersymmetry
  and Morse theory") — the analytic/physical reformulation that motivates
  Floer. Deferred to a topological-QFT audit; relevant to the existing
  gauge-theory and Chatterjee QFT plans.

---

## §6 Acceptance criteria for FT equivalence (MMT)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- ≥95% of MMT's named theorems map to Codex units. Current ~5–10%; after
  priority-1 units rises to ~55%; after priority-1+2 to ~80%; after
  priority-1+2+3 to ~95%; full ≥95% requires priorities 1–3 (priority 4 is
  optional deepening).
- ≥90% of MMT's worked examples (height function on torus / sphere,
  $\mathbb{CP}^n$ as a Morse example, $f(x) = \sum a_i x_i^2$ on $S^n$,
  the Bott periodicity calculation on $\mathrm{U}(2n)$) have either a
  direct unit or are referenced from a unit covering them.
- The Bott periodicity unit `03.08.07-bott-periodicity.md` cites its new
  Morse-theoretic-proof sibling (item 9 in the punch-list) rather than
  citing MMT §23 directly without an in-Codex anchor.
- All four Floer units (`05.08.01`–`05.08.04`) cite the new Morse units
  as prerequisites and have Pass-W weaving paragraphs pointing back to
  them.
- Notation decisions are recorded in `03.02.02` and `03.02.03` (see §4).
- Originator-prose citations of Morse 1925, Morse 1934, Bott 1957/1959,
  Andreotti-Frankel 1959, and Smale 1962 are present in the relevant
  units.

The 5 priority-1 units close the **Floer-dependency gap** entirely and
roughly half the absolute coverage gap. Priority-2 closes Part III and
connects to Bott. Priority-3 closes Lefschetz hyperplane and the real
Bott proof. Priority-4 is master-tier deepening.

---

## §7 Sourcing

- **Free.** Ranicki archive hosts the full PDF at
  <https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnmors.pdf> (5.4 MB,
  ~160 pp. scanned typescript). This is a free educational mirror of the
  1963 Annals of Mathematics Studies publication; cite as Milnor, J.,
  *Morse Theory*, Annals of Mathematics Studies 51, Princeton University
  Press, 1963.
- **Print.** Princeton University Press has kept MMT in print continuously
  since 1963 (ISBN 0-691-08008-9). Used copies are easy to find.
- **Local copy.** Add to `reference/fasttrack-texts/03-modern-geometry/`
  as `Milnor-MorseTheory.pdf` to mirror the pattern of other free FT texts
  (e.g. Bott already lives in this directory as `Bott-LecturesOnMorseTheory.pdf`
  per `03.08.07-bott-periodicity.md` line 27).
- **Companion peer texts (cited in §1):**
  - M. Schwarz, *Morse Homology*, Progress in Mathematics 111, Birkhäuser
    1993. The Morse-complex / Floer-finite-dim reformulation. FT 3.04.
  - M. Audin, M. Damian, *Morse Theory and Floer Homology*, Universitext,
    Springer 2014 (English translation of the 2010 French original). The
    standard modern reference; Part I is the Morse-complex rewriting of
    MMT Part I.
  - A. Banyaga, D. Hurtubise, *Lectures on Morse Homology*, Texts in the
    Mathematical Sciences 29, Kluwer 2004. Self-contained graduate text
    structured around a complete proof of the Morse Homology Theorem.
  - L. Nicolaescu, *An Invitation to Morse Theory*, Universitext, Springer
    (2nd ed. 2011). The most accessible modern introduction; covers
    Morse-Smale flows, min-max theory, moment maps and equivariant
    cohomology, and complex Morse / Picard-Lefschetz theory in addition
    to the classical material.
- **Originator-paper archive locations:**
  - Morse 1925 *Trans. AMS* — JSTOR.
  - Bott 1957 *PNAS* — open access via pnas.org.
  - Bott 1959 *Annals* — JSTOR.
  - Andreotti-Frankel 1959 *Annals* — JSTOR.
  - Smale 1962 *Amer. J. Math.* — JSTOR.
