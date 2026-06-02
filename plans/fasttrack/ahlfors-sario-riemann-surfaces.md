# Ahlfors-Sario — *Riemann Surfaces* (Fast Track 1.06) — Audit + Gap Plan

**Book:** Lars V. Ahlfors and Leo Sario, *Riemann Surfaces*
(Princeton Mathematical Series 26, Princeton University Press, 1960).
LCCN 60-5780.

**Fast Track entry:** 1.06 (Riemann-surfaces slot of the
geometric-analysis strand; the **classical / topological / function-
theoretic** anchor, paired with Forster 1.07 sheaf-theoretic,
Donaldson 1.07 differential-geometric, Miranda algebraic-curves,
Farkas-Kra theta-function).

**Plan status:** gap-analysed

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite per
`docs/specs/ORCHESTRATION_PROTOCOL.md`). Punch-list of new units +
deepenings to reach the equivalence threshold
(`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Not a full P1 audit
(no line-number-level exercise inventory).

**Coordination note.** This is the **third** Riemann-surfaces book to be
audited. The `06-riemann-surfaces` chapter has grown to **78 units**
since the Forster/Donaldson audits were written (those audits cite a
21–22-unit chapter; that chapter is now obsolete as a coverage
baseline). In particular the **entire Forster Chapter-3 Stein / Cousin /
Mittag-Leffler / Behnke-Stein / Runge block** has already shipped
(`06.09.01-08`), the Donaldson PDE / Čech / Hodge / Serre-duality /
Gauss-Manin infrastructure has shipped (`06.04.02-07`, `06.08.01-03`),
and the Jacobian-side machinery is complete (`06.06.01-08`). **The
mainstream Riemann-surface theory Ahlfors-Sario shares with those books
is therefore almost entirely ENRICH, not NEW.** This audit deliberately
restricts its NEW-unit punch-list to the **genuinely distinctive
Ahlfors-Sario contribution: the classical topology of surfaces
(triangulation, fundamental polygon, classification), the Hilbert space
of differentials and the Dirichlet principle on *open* surfaces, the
classification of open Riemann surfaces (parabolic/hyperbolic type, the
type problem, null-classes $O_G, O_{HB}, O_{HD}, O_{AD}$), capacity /
harmonic measure on the ideal boundary, and extremal length** — none of
which any peer Riemann-surfaces book on the Fast Track supplies, and
none of which currently exists in the chapter.

---

## §1 What Ahlfors-Sario's book is for

Ahlfors-Sario is the canonical **classical, topological, and
function-theoretic** treatment of Riemann surfaces, and the foundational
reference for the **theory of open (non-compact) Riemann surfaces** and
their **type problem**. Where Forster develops the subject through
sheaves and Čech cohomology, Donaldson through Hodge theory and PDE, and
Miranda through algebraic curves, Ahlfors-Sario builds everything from
**point-set and combinatorial topology of surfaces** upward, then runs
the analysis through a **Hilbert space of square-integrable
differentials** and the **Dirichlet principle realised as orthogonal
projection**. It is a Fields-medallist's (Ahlfors) synthesis of the
classical Weyl / Nevanlinna / Royden tradition, and it remains *the*
reference for the classification theory of open surfaces. ~382 pages,
two large chapters:

- **Chapter I — Surface topology.** Surfaces as triangulable
  2-manifolds; simplicial / singular homology of surfaces; the
  **fundamental polygon** and the word $a_1 b_1 a_1^{-1} b_1^{-1}\cdots$;
  the **classification of compact surfaces** (orientable ⇒ sphere with
  $g$ handles; the genus / Euler-characteristic invariant); covering
  surfaces, the universal cover, the fundamental group and monodromy;
  the **ideal boundary** and the exhaustion of an open surface by
  compact bordered pieces; the **partition of the ideal boundary** and
  the notion of the *kernel* and the *type* of the open surface at a
  topological level. This is the most thorough surface-topology
  development of any Fast Track Riemann-surfaces text.

- **Chapter II — Riemann surfaces and their differentials.** Conformal
  structure; harmonic and analytic differentials; the **Hilbert space
  $\Gamma$ of square-integrable differentials** with the inner product
  $(\omega, \theta) = \iint \omega \wedge {*\bar\theta}$ and its
  orthogonal decomposition $\Gamma = \Gamma_h \oplus \Gamma_{e0}^* \oplus
  \Gamma_{e0}$ (harmonic, exact-with-compact-support, co-exact);
  the **Dirichlet principle as orthogonal projection** (Weyl's lemma,
  Royden's approach); the **principal functions / principal
  differentials** with prescribed singularities and boundary behaviour
  ($p_0, p_1$ — the normal operators $L_0, L_1$); existence of harmonic
  and analytic differentials and functions on open surfaces; **the
  classification of open Riemann surfaces** — the **type problem**
  (parabolic vs. hyperbolic, i.e. whether a Green's function exists);
  the **null-classes** $O_G$ (no Green's function / parabolic),
  $O_{HB}$ (no nonconstant bounded harmonic functions), $O_{HD}$ (no
  nonconstant Dirichlet-finite harmonic functions), $O_{AD}, O_{AB}$
  (analytic analogues), and their proper inclusions
  $O_G \subset O_{HB} \subset O_{HD}$, $O_G \subset O_{AB} \subset
  O_{AD}$; **capacity** and **harmonic measure** of the ideal boundary;
  **extremal length** and the modulus of curve / ring families as a
  conformal invariant and a tool for type criteria; Abelian
  differentials, period reproducing, the bilinear relations on
  open surfaces.

Distinctive Ahlfors-Sario choices:

1. **Surface topology done in full, from triangulation up.** The
   classification of compact surfaces via the fundamental polygon is
   carried out completely. No other Fast Track Riemann-surfaces text
   does the topology at this level; they cite it.
2. **Open surfaces are the protagonist, not an afterthought.** Forster
   reaches non-compact surfaces only at the Stein block; Donaldson and
   Miranda are essentially compact-only. Ahlfors-Sario's whole second
   half is the **classification of open Riemann surfaces**.
3. **The Hilbert space of differentials and orthogonal-projection
   Dirichlet principle.** Royden/Weyl-style $\Gamma = \Gamma_h \oplus
   \Gamma_{e0}^* \oplus \Gamma_{e0}$ is the analytic engine. This is a
   genuinely different proof technology from Forster's Čech/Schwartz and
   Donaldson's elliptic-PDE/Friedrichs.
4. **The type problem and null-classes.** $O_G / O_{HB} / O_{HD} /
   O_{AD}$ and their strict inclusions are the apex of the book and the
   single most Ahlfors-Sario-distinctive contribution. Zero current
   Codex coverage.
5. **Capacity and harmonic measure of the ideal boundary.** The
   potential-theoretic criteria for type (parabolic ⟺ ideal boundary
   has capacity zero / harmonic measure zero).
6. **Extremal length / modulus of curve families.** Ahlfors-Beurling's
   conformal invariant, used as a type criterion and a comparison tool.
   Not present anywhere in Codex.
7. **Principal functions and normal operators $L_0, L_1$.** The
   Sario-distinctive existence machinery: solving boundary-value
   problems on an open surface by a linear normal operator interpolating
   between the two ideal-boundary behaviours.

Ahlfors-Sario does **not** cover: sheaf cohomology / Čech (Forster),
Hodge-theoretic period machinery in the bundle-theoretic style
(Donaldson), theta functions / Jacobi inversion in depth (Donaldson,
Farkas-Kra), projective embeddings of curves (Miranda), Gauss-Manin /
VHS (Donaldson). All of those are already shipped via the other anchors.

---

## §2 Coverage table (Babel Bible vs Ahlfors-Sario)

Cross-referenced against the **78-unit** Codex Riemann-surfaces chapter
(`find content/06-riemann-surfaces -name "06.*.md" | sort`). ✓ = covered
at Ahlfors-Sario-equivalent depth, △ = topic present but the Babel Bible
unit takes a different (non-AS) approach or is shallower on the AS angle,
✗ = not covered anywhere in the chapter. **IDs below are verified
against the live filesystem.**

### Chapter I — Surface topology

| Ahlfors-Sario topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| Surface as a 2-manifold; conformal/Riemann-surface definition | `06.03.01-riemann-surface` | ✓ | Chart-atlas definition shipped. |
| Triangulability of surfaces; simplicial structure | — (chapter); `03-modern-geometry/12-homotopy/03.12.12-simplicial-homology` (general) | △ | General simplicial homology exists in the topology strand; the **surface-specific triangulation + Radó theorem** is not in `06.*`. |
| Homology / fundamental group of a surface | partial: `06.06.02-period-matrix`, `06.06.07-riemann-bilinear` (canonical homology basis $A_i,B_i$) | △ | The $A/B$-period homology basis is used; the **fundamental-polygon construction and the surface classification proof** are not carried out. |
| **Fundamental polygon; classification of compact surfaces** ($a_1b_1a_1^{-1}b_1^{-1}\cdots$, sphere-with-$g$-handles) | partial in `06.03.02-genus-riemann-surface` | △ | Genus unit derives $\chi = 2-2g$ by attaching handles, but does **not** prove the classification via the fundamental polygon / word reduction. **AS-distinctive topology gap.** |
| Genus / Euler characteristic invariant | `06.03.02-genus-riemann-surface` | ✓ | Shipped. |
| Covering surfaces, universal cover, monodromy | `06.03.03-uniformization-theorem`, `06.02.02-branched-coverings` | ✓ | Shipped. |
| **Ideal boundary; exhaustion of an open surface; partition of the ideal boundary** | — | ✗ | **Gap (NEW, AS-distinctive).** The topological scaffolding for the whole open-surface theory: bordered exhaustions $\Omega_1 \Subset \Omega_2 \Subset \cdots$, the ideal boundary $\beta$, its components/partition. Exhaustions appear *analytically* in `06.09.03-behnke-stein` (PSH-exhaustion route) but the **classical ideal-boundary / type-of-boundary topology is absent.** |

### Chapter II §§1–4 — Differentials and the Dirichlet principle

| Ahlfors-Sario topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| Harmonic / analytic differentials; conjugate differential ${*}$ | `06.06.01-holomorphic-one-form`, `06.04.03-hodge-decomposition-curves` | ✓/△ | The Hodge/holomorphic-1-form vocabulary is shipped (Donaldson-style). The **AS Hilbert-space-of-differentials framing** is a different presentation. ENRICH. |
| Hodge / harmonic decomposition (compact) | `06.04.03-hodge-decomposition-curves` | ✓ | Shipped (Donaldson Ch. 5 style). |
| **Hilbert space $\Gamma$ of square-integrable differentials; orthogonal decomposition $\Gamma_h \oplus \Gamma_{e0}^* \oplus \Gamma_{e0}$ on an *open* surface** | — | ✗ | **Gap (NEW, AS-distinctive).** Royden/Weyl orthogonal-projection construction on **open** surfaces. `06.04.03` is the *compact* Hodge story; the open-surface $L^2$-differential decomposition (the engine of the existence theorems) is absent. |
| **Dirichlet principle as orthogonal projection / Weyl's lemma** (open surface) | partial: `06.01.11-harmonic-functions-plane`, `06.01.24-dirichlet-problem-perron` | △ | The Dirichlet principle is covered **in the plane** (Riemann 1851 / Hilbert 1900 / Perron, in `06.01.11`/`06.01.24`). The **orthogonal-projection (Weyl-Royden) version on a Riemann surface** — the form AS actually uses — is not present. DEEPEN/ENRICH the harmonic-functions unit + NEW open-surface unit. |
| Existence of harmonic/analytic differentials & functions on open surfaces | partial in `06.09.*` (analytic existence via Stein) | △ | Forster-Stein route ships analytic existence; AS's **principal-function / Dirichlet-principle existence** route is a different, classical method. ENRICH. |
| **Principal functions / principal operators $L_0, L_1$ (normal operators)** | — | ✗ | **Gap (NEW, AS/Sario-distinctive).** The linear-operator method for prescribing ideal-boundary behaviour. No analogue anywhere. |
| Period reproducers; bilinear relations on open surfaces | `06.06.07-riemann-bilinear` (compact) | △ | Compact bilinear relations shipped; open-surface period theory is the AS extension. ENRICH. |

### Chapter II §§5–6 — Classification of open Riemann surfaces (the apex)

**Ahlfors-Sario's distinctive territory. Zero overlap with Forster,
Donaldson, Miranda, or Farkas-Kra plans. Every gap here is owned by
this plan.**

| Ahlfors-Sario topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| **The type problem: parabolic vs. hyperbolic open surface** (existence of a Green's function) | — | ✗ | **Gap (NEW, highest-priority AS headline).** Whether an open surface carries a Green's function. `06.09.03-behnke-stein` mentions the disc-vs-$\mathbb{C}$ universal-cover dichotomy in passing but does **not** develop the type problem. No Green's function on a Riemann surface exists anywhere (`06.01.02` mentions Green's function only as a Cauchy-kernel aside). |
| **Class $O_G$ (parabolic / null-bounded surfaces)** | — | ✗ | **Gap (NEW, AS headline).** Surfaces with no Green's function. |
| **Classes $O_{HB}, O_{HD}$ (no nonconstant bounded / Dirichlet-finite harmonic functions)** | — | ✗ | **Gap (NEW).** The harmonic null-classes and the strict chain $O_G \subset O_{HB} \subset O_{HD}$. |
| **Classes $O_{AB}, O_{AD}$ (analytic null-classes)** and the inclusion lattice | — | ✗ | **Gap (NEW).** $O_G \subset O_{AB} \subset O_{AD}$; the Royden / Ahlfors-Sario separating examples. |
| **Capacity / harmonic measure of the ideal boundary** as a type criterion | partial: `06.01.24-dirichlet-problem-perron` (Wiener capacity, in the plane) | △ | Logarithmic capacity + Wiener criterion exist **in the plane**. The **ideal-boundary capacity / harmonic-measure-zero ⟺ parabolic** criterion on a surface is absent. ENRICH the plane unit; NEW surface unit. |
| **Extremal length / modulus of curve families** | — | ✗ | **Gap (NEW, AS/Ahlfors-Beurling-distinctive).** The conformal invariant and type criterion. **Zero coverage anywhere in the entire curriculum** (verified: no `content/**` file mentions "extremal length"). |
| Royden compactification / Royden boundary (pointer) | — | ✗ | **Gap (NEW, optional pointer).** The functional-analytic ideal boundary. |

### Aggregate coverage estimate (vs Ahlfors-Sario)

- **Theorem layer:** ~55% topic, ~40% AS-proof-depth. The compact-RS
  half (Chapter II §§1–4 mainstream, all Chapter I except ideal
  boundary/classification-via-polygon) is largely **ENRICH** — covered
  by the now-78-unit chapter via Forster/Donaldson machinery. The
  **open-surface classification half (type problem, null-classes,
  capacity/harmonic measure of the ideal boundary, extremal length,
  principal operators, the open-surface Hilbert-space-of-differentials)
  is ~0% and entirely NEW.** After P1 (open-surface block): topic
  ~85%, proof-depth ~70%. After P1+P2: ~92%.
- **Exercise layer:** AS has relatively few formal exercises (it is a
  monograph, not a problem text); the templated 7-block per new unit
  suffices for the headline results. ~15% currently; ~70% after P1.
- **Worked-example layer:** ~30%. The model open surfaces ($\mathbb{C}$
  parabolic, $\mathbb{D}$ hyperbolic, $\mathbb{C}^*$, $\mathbb{C}
  \setminus E$ for thin/thick $E$, the type-problem covering examples)
  are the worked examples; mostly absent.
- **Notation layer:** ~40% aligned. AS notation $\Gamma, \Gamma_h,
  \Gamma_{e0}, {*}, O_G, O_{HB}, O_{HD}, L_0, L_1$, $\lambda$ (extremal
  length), $\omega$ (harmonic measure) is AS-specific and undocumented.
  Optional `notation/ahlfors-sario.md`.
- **Sequencing layer:** ~50%. The chapter DAG has no
  triangulation → classification → ideal-boundary → type-problem →
  null-classes chain.
- **Intuition layer:** ~45%. The *why* of parabolic/hyperbolic type
  (does the random walk / Brownian motion escape to the ideal boundary?
  is the surface "small" or "large" at infinity?) is absent.
- **Application layer:** ~40%. Type-problem applications (when is a
  covering surface of $\mathbb{C}$ parabolic? Nevanlinna theory link;
  the Caratheodory / Denjoy-Carleman-Ahlfors connections) absent.

---

## §3 Gap punch-list (P3-lite — units to write or deepen, priority-ordered)

The chapter is mature on mainstream Riemann-surface theory; the
Ahlfors-Sario value-add is concentrated in a **new open-surface
classification block** plus the **surface-topology foundations**.
Tags: **[NEW]** (no current unit; AS-distinctive), **[DEEPEN]** (existing
unit gets AS material added), **[ENRICH]** (topic already covered by a
peer anchor; add an AS-perspective cross-reference / Master-section
note, no new unit unless flagged). New units open a new section
`06.11-open-surfaces/` (next free section number — `06.10-several-
complex-variables/` is the last existing) plus supplements to
`06.03-riemann-surfaces/`.

### Priority 1 — AS-distinctive open-surface classification block (NEW)

The single largest topic-level expansion Ahlfors-Sario buys Babel Bible.
**No peer Fast Track Riemann-surfaces anchor supplies any of these.**

1. **`06.11.01` Ideal boundary and exhaustions of an open Riemann
   surface.** **[NEW]** Ahlfors-Sario Ch. I (ideal boundary) + Ch. II §3.
   ~1800 words. Master: bordered exhaustion $\Omega_1 \Subset \Omega_2
   \Subset \cdots$, $\bigcup \Omega_n = X$; the ideal boundary $\beta$
   and its components; the partition of $\beta$; relation to the
   end-compactification. Foundational for items 2–6. Originator:
   Kerékjártó 1923 (ends of surfaces); Stoïlow.

2. **`06.11.02` Hilbert space of differentials; orthogonal
   decomposition on an open surface.** **[NEW]** AS Ch. II §1–2.
   ~2200 words (large, load-bearing). Master: $\Gamma$ = $L^2$
   differentials, $(\omega,\theta) = \iint \omega \wedge {*\bar\theta}$;
   subspaces $\Gamma_h$ (harmonic), $\Gamma_{e0}$ (exact, compact
   support closure), $\Gamma_{e0}^*$ (co-exact); the orthogonal
   decomposition $\Gamma = \Gamma_h \oplus \Gamma_{e0} \oplus
   \Gamma_{e0}^*$; **Weyl's lemma** (weakly-harmonic ⇒ smooth-harmonic)
   as the regularity input. Worked: the plane $\mathbb{C}$. Originator:
   Weyl 1940 *method of orthogonal projection*; Royden. **Engine of
   the existence theory; cross-references `06.04.03` (compact Hodge),
   `06.04.05` ($\bar\partial$ Hilbert PDE).**

3. **`06.11.03` Green's function on a Riemann surface and the type
   problem (parabolic vs. hyperbolic).** **[NEW]** AS Ch. II §5.
   ~2000 words. Master: Green's function $g(z,z_0)$ as the harmonic
   function with a $-\log|z-z_0|$ singularity and ideal-boundary value
   0, constructed as a limit over the exhaustion; an open surface is
   **hyperbolic** if $g$ exists, **parabolic** otherwise; equivalence
   with non-existence of a harmonic measure / capacity-zero ideal
   boundary. Worked: $\mathbb{D}$ hyperbolic, $\mathbb{C}$ and
   $\mathbb{C}^*$ parabolic. **AS headline; highest priority.**
   Originator: Myrberg, Nevanlinna, Ahlfors-Sario.

4. **`06.11.04` Null-classes $O_G, O_{HB}, O_{HD}, O_{AD}$ and the
   classification of open surfaces.** **[NEW]** AS Ch. II §6.
   ~2200 words. Master: $O_G$ (parabolic), $O_{HB}$ (no nonconstant
   bounded harmonic), $O_{HD}$ (no nonconstant Dirichlet-finite
   harmonic), $O_{AB}, O_{AD}$ (analytic analogues); the strict
   inclusion lattice $O_G \subset O_{HB} \subset O_{HD}$ and $O_G
   \subset O_{AB} \subset O_{AD}$; separating examples (Royden,
   Tôki, Ahlfors-Sario). **AS apex; the book's headline classification
   theorem.** Originator: Ahlfors-Sario 1960; Royden 1952; Sario.

5. **`06.11.05` Capacity and harmonic measure of the ideal boundary.**
   **[NEW]** AS Ch. II §5. ~1700 words. Master: harmonic measure
   $\omega$ of the ideal boundary as the limit of harmonic measures of
   $\partial\Omega_n$; capacity of the ideal boundary; the criterion
   **parabolic ⟺ harmonic measure 0 ⟺ ideal boundary has capacity
   zero**. Cross-references `06.01.24` (plane Wiener capacity).
   Originator: Nevanlinna; Sario.

6. **`06.11.06` Extremal length and the modulus of curve families.**
   **[NEW]** AS Ch. II (and Ahlfors-Beurling 1950). ~1800 words.
   Master: the extremal length $\lambda(\Gamma)$ of a curve family,
   its conformal invariance, the modulus of a ring/quadrilateral, the
   composition/comparison laws, and its use as a **type criterion**
   (parabolicity via divergence of an extremal-length series).
   Worked: modulus of an annulus $\log(R/r)/2\pi$; the Grötzsch /
   Teichmüller extremal problems (pointer). **Zero coverage anywhere
   in the entire curriculum — a genuine new tool.** Originator:
   Ahlfors-Beurling 1950 *Conformal invariants and function-theoretic
   null-sets* (Acta Math. 83).

### Priority 2 — Surface topology foundations + principal operators (NEW + DEEPEN)

7. **`06.03.04` Classification of compact surfaces via the fundamental
   polygon.** **[NEW]** AS Ch. I. ~1900 words. Master: triangulability
   (Radó's theorem, stated), the fundamental polygon and its edge word,
   the word-reduction algorithm to the normal form
   $a_1b_1a_1^{-1}b_1^{-1}\cdots a_gb_ga_g^{-1}b_g^{-1}$, hence every
   compact orientable surface is a sphere with $g$ handles; genus and
   $\chi$ as complete invariants; the non-orientable normal form
   (pointer). Cross-references `06.03.02-genus` (which derives $\chi$
   but not the classification). Originator: Möbius 1863; Dehn-Heegaard
   1907; Radó 1925. **AS-distinctive topology gap.**

8. **`06.11.07` Principal functions and the normal operator method
   ($L_0, L_1$).** **[NEW]** AS/Sario Ch. II §4. ~1700 words. Master:
   the linear normal operators $L_0$ (Dirichlet-type, value-0 ideal
   boundary) and $L_1$ (Neumann-type, reflecting boundary); the
   principal functions $p_0, p_1$ prescribing a singularity and
   interpolating ideal-boundary behaviour; how existence of harmonic
   functions with prescribed singularities follows. The Sario-signature
   machinery. Originator: Sario 1952–58.

9. **Deepen `06.01.11-harmonic-functions-plane` (Dirichlet principle as
   orthogonal projection).** **[DEEPEN]** Add a Master-section note on
   Weyl's orthogonal-projection form of the Dirichlet principle and its
   surface generalisation, forward-pointing to `06.11.02`. Currently the
   unit gives Riemann/Hilbert/Perron only.

10. **Deepen `06.03.02-genus-riemann-surface` (triangulation pointer).**
    **[DEEPEN]** Add a one-paragraph pointer to the
    fundamental-polygon classification (`06.03.04`, item 7) so the
    handle-attachment $\chi$-derivation is grounded in the full
    classification rather than asserted.

### Priority 3 — ENRICH (already covered by peer anchors; AS cross-references only)

These are mainstream Riemann-surface topics that **Ahlfors-Sario covers
but the chapter already ships via Forster/Donaldson/Miranda**. No new
units. Add an AS-perspective sentence + `tier_anchors` citation where
the AS treatment is notably different.

11. **`06.04.03-hodge-decomposition-curves`** — **[ENRICH]** add AS
    Ch. II Hilbert-space-of-differentials framing as the open-surface
    generalisation; cite Ahlfors-Sario alongside Hodge/Weyl.

12. **`06.06.07-riemann-bilinear`** — **[ENRICH]** cite AS Ch. II for
    the period-reproducer / bilinear-relations treatment; note the
    open-surface extension.

13. **`06.03.03-uniformization-theorem`** — **[ENRICH]** the type
    dichotomy (parabolic/hyperbolic universal cover) is the
    uniformisation shadow of the AS type problem; add a cross-reference
    to `06.11.03`.

14. **`06.01.24-dirichlet-problem-perron`** — **[ENRICH]** cross-link
    the plane Wiener-capacity criterion to the ideal-boundary capacity
    criterion `06.11.05`.

15. **`06.09.03-behnke-stein`** — **[ENRICH]** the unit already mentions
    the parabolic/hyperbolic dichotomy in passing; add a cross-reference
    to the full type-problem treatment `06.11.03`–`06.11.04` so the
    aside is grounded.

16. **`06.06.01-holomorphic-one-form`, `06.04.05-dbar-hilbert-pde`** —
    **[ENRICH]** cite AS for the classical differentials-and-conjugate
    (${*}$-operator) presentation that the existing $\bar\partial$ /
    Hodge units present in modern form.

### Priority 4 — Survey / pointer / notation (optional)

17. **`06.11.08` Survey: Royden compactification and the ideal
    boundary.** **[NEW — pointer]** Master-only; ~800 words. The
    functional-analytic Royden boundary; pointer to Sario-Nakai
    *Classification Theory of Riemann Surfaces* (the sequel monograph)
    and Constantinescu-Cornea *Ideale Ränder Riemannscher Flächen*.

18. **Notation crosswalk (`notation/ahlfors-sario.md`).** **[optional]**
    $\Gamma, \Gamma_h, \Gamma_{e0}^*, {*}, O_G, O_{HB}, O_{HD}, O_{AD},
    L_0, L_1, \lambda, \omega$. ~400 words.

---

## §4 Implementation sketch (P3 → P4)

**Minimum Ahlfors-Sario-equivalence batch = Priority 1 (items 1–6):
6 NEW units, all AS-only (zero overlap with any peer plan).** They open
the new section `06.11-open-surfaces/`. Production estimate (mirroring
Forster/Donaldson batches):

- ~3 h per typical new unit; ~4 h each for items 2, 4 (large,
  load-bearing — the differentials Hilbert space and the null-class
  classification).
- Priority 1: 2 × 4 + 4 × 3 = ~20 h.
- Priority 1+2: 20 h + item 7 (4 h, large) + item 8 (3 h) + two
  deepenings (items 9, 10; ~1 h each) = ~28 h.
- Priority 3 (items 11–16) are ENRICH cross-references — Master-section
  edits + `tier_anchors`/`references` additions, ~0.5 h each, ~3 h
  total; not new units.

At 4–6 parallel production agents, Priority 1 fits in a 1–2 day window.

**Batch structure.**

- **Batch AS-A (items 1, 2, 3, ~10 h):** ideal boundary → Hilbert space
  of differentials → Green's function / type problem. Load-bearing
  chain; produce together. Opens `06.11-open-surfaces/`.
- **Batch AS-B (items 4, 5, 6, ~9 h):** null-classes, capacity/harmonic
  measure, extremal length. Depends on AS-A (item 4 needs the type
  problem item 3; item 5 needs the ideal boundary item 1).
- **Batch AS-C (items 7, 8, 9, 10, ~9 h):** surface-topology
  classification + principal operators + two deepenings. Item 7 is
  independent (topology); item 8 depends on AS-A item 2.
- **ENRICH pass (items 11–16, ~3 h):** one integration agent adds
  cross-references and `tier_anchors` citations after AS-A/B land.

**Originator-prose targets** (each AS-distinctive unit cites originator
+ Ahlfors-Sario):

- (1) Ideal boundary: Kerékjártó 1923 *Vorlesungen über Topologie*;
  Stoïlow.
- (2) Hilbert space of differentials: Weyl 1940 *The method of
  orthogonal projection in potential theory* (Duke Math. J. 7);
  Royden 1952.
- (3) Type problem / Green's function: P. J. Myrberg 1933; R. Nevanlinna
  *Eindeutige analytische Funktionen* (1936); Ahlfors-Sario 1960.
- (4) Null-classes: Ahlfors-Sario 1960 (originator monograph); Royden
  1952; Tôki; Sario-Nakai 1970 (sequel) as modern anchor.
- (5) Capacity / harmonic measure: Nevanlinna 1936; Sario.
- (6) Extremal length: Ahlfors-Beurling 1950 *Conformal invariants and
  function-theoretic null-sets* (Acta Math. 83). Originator voice
  mandatory; Ahlfors *Conformal Invariants* (1973) as modern anchor.
- (7) Surface classification: Möbius 1863; Dehn-Heegaard 1907; Radó 1925
  (triangulability).
- (8) Principal operators: Sario 1952 / 1958; Ahlfors-Sario Ch. II.

**DAG edges to add** (Priority 1+2):

- `06.11.01` (ideal boundary) ← {`06.03.01`, `06.03.03`}
- `06.11.02` (Hilbert space of differentials) ←
  {`06.06.01-holomorphic-one-form`, `06.04.03-hodge-decomposition-curves`}
- `06.11.03` (Green's function / type problem) ←
  {`06.11.01`, `06.11.02`, `06.01.24-dirichlet-problem-perron`}
- `06.11.04` (null-classes) ← {`06.11.03`, `06.11.05`}
- `06.11.05` (capacity / harmonic measure) ←
  {`06.11.01`, `06.11.03`, `06.01.24`}
- `06.11.06` (extremal length) ← {`06.01.06-riemann-mapping-theorem`,
  `06.11.03`}
- `06.03.04` (surface classification) ← {`06.03.02-genus`,
  `03-modern-geometry/.../03.12.12-simplicial-homology`}
- `06.11.07` (principal operators) ← {`06.11.02`, `06.11.03`}

**Notation crosswalk.** Small `notation/ahlfors-sario.md` (item 18) for
$\Gamma / \Gamma_h / \Gamma_{e0}^*$, the conjugate ${*}$, the
null-classes $O_*$, $L_0/L_1$, $\lambda$, $\omega$. Defer unless a
chapter-wide cleanup is undertaken.

---

## §5 What this plan does NOT cover

- Line-number-level inventory of every theorem across Ahlfors-Sario's
  two chapters. Defer.
- **Mainstream Riemann-surface theory already shipped** via Forster
  (Stein / Cousin / Mittag-Leffler / Runge — `06.09.*`), Donaldson
  (Čech / Hodge / Serre duality / Riemann-Roch / Gauss-Manin / VHS —
  `06.04.*`, `06.08.*`), and the Jacobian block (`06.06.*`). These are
  ENRICH at most (§3 items 11–16), never NEW — the chapter is now 78
  units and the overlap is near-total on the compact side.
- **Forster-distinctive** sheaf machinery, **Donaldson-distinctive**
  PDE/VHS, **Miranda-distinctive** algebraic-curves, **Farkas-Kra-
  distinctive** theta/automorphic machinery. Each owns its plan.
- The full **Sario-Nakai *Classification Theory of Riemann Surfaces***
  (1970) sequel — Royden algebra, Wiener/harmonic boundary in depth,
  the complete null-class lattice with all separating examples. Item 17
  is a pointer; the deep classification theory is out of scope for a
  single FT-equivalence pass.
- **Nevanlinna value-distribution theory** (the type problem's
  function-theoretic sibling) — separate book, not FT 1.06.
- Quasiconformal-mapping / Teichmüller theory beyond the extremal-length
  pointer (item 6) — Ahlfors *Lectures on Quasiconformal Mappings* /
  Ahlfors-Bers territory, not this book.
- Non-orientable surface classification beyond the pointer in item 7.
- Several-complex-variables material in `06.10.*` (out of AS scope; AS
  is strictly one-variable / surface theory).

---

## §6 Acceptance criteria for FT equivalence (Ahlfors-Sario)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, the book is
at equivalence-coverage when:

- ≥95% of Ahlfors-Sario's named theorems map to Babel Bible units **at
  AS-equivalent depth** (currently ~40%; after Priority 1 ~75%; after
  Priority 1+2 ~92%; ENRICH pass closes the residual compact-side
  citations to ~96%).
- ≥80% of AS's (relatively few) exercises have a Codex equivalent
  (the templated 7-block on each new unit suffices; ~70% after P1).
- ≥90% of AS's worked examples reproduced (the model open surfaces
  $\mathbb{C}, \mathbb{D}, \mathbb{C}^*, \mathbb{C}\setminus E$ in the
  type-problem and extremal-length units; ~30% now → ~90% after P1+P2).
- Notation alignment recorded inline in the P1 Master sections plus
  optional `notation/ahlfors-sario.md` (item 18).
- DAG arrows for the AS dependency chain
  (triangulation → classification → ideal boundary → Hilbert space of
  differentials → Green's function / type problem → null-classes →
  capacity / extremal length) unbroken after Priority 1+2.
- Pass-W weaving connects the new `06.11-open-surfaces/` section and
  `06.03.04` to the existing chapter — especially `06.03.03`
  (uniformisation type dichotomy), `06.09.03` (Behnke-Stein
  exhaustion), `06.04.03`/`06.04.05` (compact Hodge / $\bar\partial$),
  and `06.01.24` (plane Wiener capacity).

**Honest scope.** Despite being the third Riemann-surfaces book, the
NEW surface area is **non-trivial and genuinely distinctive**: the
**entire open-surface classification theory — type problem,
null-classes, capacity / harmonic measure of the ideal boundary,
extremal length, the open-surface Hilbert space of differentials, and
principal operators — has zero current coverage**, and *extremal length
is absent from the whole curriculum*. The compact-surface and
mainstream-differentials material, by contrast, is near-fully shipped
and is ENRICH-only. **Largest AS-distinctive gap:** the null-class
classification of open surfaces (item 4) and the type problem / Green's
function (item 3) — the apex of the book and the reason it remains the
canonical open-surface reference.

**Split:** 8 NEW units (items 1–8: six in `06.11-open-surfaces/`, one
topology unit `06.03.04`, one principal-operators unit) + 2 DEEPEN
(items 9–10) + 6 ENRICH cross-references (items 11–16) + 2 optional
(items 17–18). Read this plan as adding **~8 units** to Babel Bible, all
on Ahlfors-Sario's distinctive open-surface / classical-topology spine,
with the mainstream overlap explicitly de-scoped to ENRICH so no
duplicate Riemann-surface infrastructure is produced.
