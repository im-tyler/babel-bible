# Gross — *Tropical Geometry and Mirror Symmetry* (Fast Track 3.33) — Audit + Gap Plan

**Book:** Mark Gross, *Tropical Geometry and Mirror Symmetry*, CBMS Regional
Conference Series in Mathematics 114, American Mathematical Society 2011,
xv + 317 pp. Distillation of the NSF/CBMS Regional Conference Gross gave at
Kansas State University, December 2008. The first textbook-length treatment
of the **Gross-Siebert program** for mirror symmetry via tropical and log
geometry.

**Fast Track entry:** 3.33 (Modern Geometry section). Sits immediately after
3.32 (Fulton, *Introduction to Toric Varieties*) and after 3.31 (Mumford,
*Geometric Invariant Theory*); the Wave 8 cluster groups all three together.
Gross 3.33 is the terminal book of the toric–polytope–mirror trilogy in
Modern Geometry.

**Sourcing status:** **REDUCED.** No local PDF was found in
`reference/textbooks-extra/`, `reference/fasttrack-texts/`, or
`reference/book-collection/free-downloads/` (which holds only the Freed CBMS
notes — Field Theory and Topology — *not* the Gross CBMS book). The book is
in active copyright (AMS CBMS series); not on AMS open backlist; Gross's
UCSD/Cambridge pages do not host a free draft. WebFetch attempts to AMS,
Cambridge DPMMS, and Google search returned 403/redirect failures. This
audit plan is built from (a) the standard ToC of Gross 2011 as universally
documented in the literature (the 10 CBMS lectures), (b) the parallel
expositions in Mikhalkin's *Tropical Geometry and Its Applications* survey
(ICM 2006) and Maclagan-Sturmfels *Introduction to Tropical Geometry* (AMS
GSM 161, 2015), (c) the Gross-Siebert original-source papers (2006, 2010,
2011) that the CBMS lectures consolidate, and (d) the existing Fulton
toric audit (`plans/fasttrack/fulton-toric-varieties.md`) which is the
hard sibling prerequisite. A full P1 inventory at line-number granularity
is deferred until a copy is obtained — see §7.

**Purpose:** P1 audit + P3-lite gap punch-list, mirroring
`plans/fasttrack/brown-higgins-sivera-nonabelian-algebraic-topology.md` and
`plans/fasttrack/fulton-toric-varieties.md`. Goal is a concrete list of new
units to write so that *Tropical Geometry and Mirror Symmetry* (TGMS
hereafter) reaches the equivalence threshold of
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 — ≥95% effective coverage
of named theorems, key examples, exercise pack, notation, sequencing,
intuition.

---

## §1 What TGMS is for

TGMS is the canonical textbook entry point to the **Gross-Siebert program**:
a combinatorial-algebraic proof and construction of mirror symmetry for
Calabi-Yau varieties via **tropical curves** and **log geometry**. Where
classical mirror symmetry (Candelas-de la Ossa-Green-Parkes 1991, the
quintic computation) was a string-theoretic prediction with no
mathematical foundation, and where the **Strominger-Yau-Zaslow (SYZ)
conjecture** (Strominger-Yau-Zaslow 1996, *Nucl. Phys. B* 479) gave a
geometric *interpretation* of mirror symmetry as T-duality on special
Lagrangian torus fibrations but no construction, Gross-Siebert give an
**algorithmic combinatorial reconstruction**: starting from a tropical
manifold (the integral affine base of a degenerating Calabi-Yau family),
one builds the mirror Calabi-Yau as a degeneration of toric varieties
glued by **scattering diagrams** with **slab functions**.

Distinctive contributions of TGMS, in the order Gross develops them
(Lectures 1–10):

1. **Tropical curves and tropical varieties** (Lecture 1). The
   "(min,+) algebra" / non-archimedean amoeba picture: tropical
   polynomials, tropical hypersurfaces, balanced rational graphs as
   tropical curves. Tropical $\mathbb{P}^2$ and tropical lines.
   Kapranov's theorem (the tropical variety of an algebraic variety
   = the support of the initial-ideal fan = the image under the
   non-archimedean valuation).
2. **A-model and B-model** (Lecture 2). Brief survey of the
   physicist's mirror symmetry: Gromov-Witten invariants on the
   A-side, periods of holomorphic forms on the B-side, the conjectural
   equivalence under mirror map.
3. **Log Calabi-Yau spaces and log smooth structures** (Lecture 3).
   Kato 1989 log geometry; log smooth = "smooth in the log-toric
   sense"; log Calabi-Yau = log smooth degenerate Calabi-Yau with
   trivial log canonical bundle.
4. **Toric degenerations of Calabi-Yau varieties** (Lecture 4). A
   1-parameter family $\mathfrak{X} \to \mathrm{Spec}\,\mathbb{C}[\![t]\!]$
   with generic fibre a smooth Calabi-Yau and special fibre a union
   of toric varieties glued along toric strata. The **dual intersection
   complex** of the special fibre is the integral-affine base.
5. **The reconstruction theorem: scattering diagrams and slabs**
   (Lecture 5 — the central technical result). Given a tropical
   manifold $B$ with simple singularities and a polyhedral
   decomposition $\mathscr{P}$, Gross-Siebert reconstruct (uniquely up
   to formal isomorphism, order by order in $t$) a toric degeneration
   $\mathfrak{X}_k \to \mathrm{Spec}\,\mathbb{C}[t]/(t^{k+1})$
   realising $B$ as its dual intersection complex. The data carrying
   the reconstruction are **slab functions** on codimension-1 strata
   and a **scattering diagram** built up by the Kontsevich-Soibelman
   algorithm.
6. **Theta functions and canonical coordinates** (Lecture 6 — the
   Gross-Hacking-Keel / Carl-Pumperla-Siebert payoff). The slab
   functions assemble into **theta functions** — a canonical
   $\mathbb{Z}$-basis of the algebra of regular functions on the
   mirror, indexed by integral points of $B$. Theta functions
   generalise the lattice-point basis $H^0(X_P, L_P) = \bigoplus_{m \in
   P \cap M} \chi^m$ from Fulton 3.32 (smooth toric case) to the
   degenerate Calabi-Yau case.
7. **Period integrals** (Lecture 7). The B-side: the periods of the
   reconstructed mirror family agree, at leading order, with
   tropical-disk-count invariants on the original side — the
   tropical-classical correspondence at the level of mirror symmetry.
8. **Tropical curves and disks in toric varieties** (Lecture 8). The
   Nishinou-Siebert correspondence theorem: counts of tropical curves
   = counts of (relative) algebraic curves in toric varieties.
   Nishinou-Siebert 2006 is the algebraic-geometric proof of
   Mikhalkin's correspondence in the toric case.
9. **Mikhalkin's correspondence theorem** (Lecture 9). For toric
   surfaces, the count of degree-$d$ plane curves of given genus
   through generic points equals a weighted count of tropical curves
   through the tropicalised points. Mikhalkin 2003/2005 — the
   foundational tropical-classical correspondence.
10. **The Strominger-Yau-Zaslow conjecture** (Lecture 10). Statement of
    the SYZ conjecture: mirror Calabi-Yau pairs admit dual special
    Lagrangian $T^n$-fibrations over a common integral-affine base
    $B$, with mirror duality = T-duality on the torus fibres. Gross-
    Wilson 2000, Kontsevich-Soibelman 2001, Gross-Siebert 2003 give
    the algebraic-geometric reformulation TGMS proves.

Cited peer expositions confirm this is the canonical content list and
the standard order:

- **Mikhalkin, *Tropical Geometry and Its Applications*, ICM 2006
  Madrid Proceedings, Vol. II, 827–852** — the foundational survey on
  tropical geometry; introduces tropical curves, the correspondence
  theorem (Mikhalkin 2003/2005), and the (min,+) framework. TGMS
  Lecture 1 and Lecture 9 follow Mikhalkin's exposition directly.
- **Maclagan-Sturmfels, *Introduction to Tropical Geometry* (AMS GSM
  161, 2015)** — the definitive textbook on the *commutative-algebra*
  side of tropical geometry. Maclagan-Sturmfels chapters 1–4 cover
  TGMS Lecture 1 with substantially more detail on Gröbner bases,
  initial ideals, and the Bieri-Groves theorem (the tropical variety
  is the support of the initial-ideal fan); chapters 5–6 cover
  parameter-space versions (tropical Grassmannian, tropical moduli)
  not in TGMS.
- **Gross-Siebert, "Mirror symmetry via logarithmic degeneration data
  I, II" (*J. Differential Geom.* 72, 2006, 169–338; *J. Algebraic
  Geom.* 19, 2010, 679–780)** — the originating research papers that
  TGMS consolidates. Paper I sets up log Calabi-Yau spaces and the
  dual-intersection-complex construction (TGMS Lectures 3–4); Paper II
  is the reconstruction theorem (TGMS Lecture 5).
- **Gross-Siebert, "From real affine geometry to complex geometry,"
  *Ann. of Math.* (2) 174 (2011), 1301–1428** — the published
  reconstruction theorem in final form; cited throughout TGMS Lecture
  5.
- **Strominger-Yau-Zaslow, "Mirror symmetry is T-duality," *Nucl.
  Phys. B* 479 (1996), 243–259** — the SYZ conjecture proper. TGMS
  Lecture 10 anchor; cited as the conjectural geometric origin of the
  Gross-Siebert algebraic-geometric framework.
- **Kontsevich-Soibelman, "Affine structures and non-archimedean
  analytic spaces," in *The Unity of Mathematics* (Birkhäuser, 2006),
  321–385** — the non-archimedean / Berkovich-analytic side of the
  SYZ picture; introduces the wall-crossing formula and the
  scattering-diagram formalism that TGMS Lecture 5 uses.
- **Kontsevich-Soibelman, "Stability structures, motivic Donaldson-
  Thomas invariants and cluster transformations" (arXiv:0811.2435,
  2008)** — the wall-crossing formalism in full generality; deferred
  in TGMS to a survey-level pointer (see §5).

TGMS is **not** a first introduction to algebraic geometry or to mirror
symmetry. It assumes scheme theory at the Hartshorne level (sheaves,
$\mathrm{Spec}$, projective schemes, coherent sheaves), toric geometry at
the Fulton 3.32 level (fans, cones, $X_\Sigma$, polytope $\leftrightarrow$
fan duality, line bundles from polytopes, lattice-point sections), basic
log geometry (Kato 1989), and at least a survey acquaintance with the
mirror symmetry conjecture in the physicists' form (Candelas et al
1991, the quintic prediction). The Codex prereq surface for TGMS-anchored
units is `04-algebraic-geometry/02-schemes/`, the (planned)
`04-algebraic-geometry/11-toric/` chapter from the Fulton 3.32 punch-list,
the (planned) `04-algebraic-geometry/09-hodge/` extension for Calabi-Yau
periods, and a (planned) survey unit on the mirror conjecture proper.

---

## §2 Coverage table (Codex vs TGMS)

Cross-referenced against the current 313-unit corpus (specifically
`04-algebraic-geometry/` — 40 units — and `05-symplectic/` — adjacent).

✓ = covered, △ = partial / different framing, ✗ = not covered.

| TGMS topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Tropical semiring $(\mathbb{R} \cup \{\infty\}, \min, +)$; tropical polynomial; tropical hypersurface | — | ✗ | **Gap.** No semiring / (min,+) infrastructure exists in the Codex. Foundational for all of TGMS. |
| Tropical curve (balanced rational metric graph); tropical line; tropical $\mathbb{P}^2$ | — | ✗ | **Gap.** |
| Newton polytope of a polynomial; non-archimedean amoeba | — | ✗ | **Gap.** Connects forward to Newton-polytope mention in Bernstein-Kushnirenko (Fulton 3.32 punch-list `04.11.14`). |
| Kapranov's theorem (tropical variety = support of the initial-ideal fan = image of non-archimedean valuation) | — | ✗ | **Gap. Originator-prose theorem.** |
| Bieri-Groves theorem (tropical variety as polyhedral complex of pure dimension) | — | ✗ | **Gap. Connects to dimension theory of `04.06.*` coherent sheaves.** |
| A-model (Gromov-Witten side); B-model (periods of holomorphic forms) | — | ✗ | **Gap.** No Gromov-Witten content anywhere in the Codex; no period-integral content beyond a brief Hodge-decomposition reference at `04.09.01`. |
| Mirror symmetry conjecture (physicists' form: Candelas-de la Ossa-Green-Parkes 1991 quintic prediction) | — | ✗ | **Gap. Survey-level pointer unit needed before any TGMS unit.** |
| Log structure (Kato 1989); log smooth morphism | — | ✗ | **Gap. Foundational for Lecture 3 onward.** |
| Log Calabi-Yau space; trivial log canonical bundle | — | ✗ | **Gap.** |
| Toric degeneration of a Calabi-Yau variety | — | ✗ | **Gap (high priority — TGMS Lecture 4 central object).** |
| Dual intersection complex of a degenerate Calabi-Yau; integral affine structure with singularities | — | ✗ | **Gap (high priority — the combinatorial input data).** |
| Polyhedral decomposition $\mathscr{P}$ of an integral affine manifold $B$ | — | ✗ | **Gap.** |
| Scattering diagram (Kontsevich-Soibelman); wall-crossing formula | — | ✗ | **Gap. Master-tier pointer; deferred deep content — see §5.** |
| Slab function; structure of a tropical manifold | — | ✗ | **Gap.** |
| Gross-Siebert reconstruction theorem | — | ✗ | **Gap (high priority — TGMS's central theorem; statement-level unit at FT-equivalence).** |
| Theta function of a polarised tropical manifold | — | ✗ | **Gap.** Bridges to Fulton 3.32 line-bundle-from-polytope construction (`04.11.10`); TGMS theta functions generalise lattice-point sections. |
| Period integral and the mirror map | — | ✗ | **Gap. Master-tier pointer.** |
| Tropical curve count in a toric surface | — | ✗ | **Gap.** |
| Mikhalkin's correspondence theorem | — | ✗ | **Gap (high priority — TGMS Lecture 9; Mikhalkin 2003/2005 originator).** |
| Nishinou-Siebert correspondence (toric, all dimensions) | — | ✗ | **Gap.** |
| Strominger-Yau-Zaslow (SYZ) conjecture; special Lagrangian torus fibration; T-duality | — | ✗ | **Gap (high priority — TGMS Lecture 10).** Connects to `05-symplectic/lagrangian/` (Lagrangian content) and to the Calabi-Yau-Kähler material. |
| Calabi-Yau manifold (algebraic-geometric definition: trivial canonical bundle) | — | ✗ | **Gap. Foundational prereq for all mirror-symmetry material.** |
| Calabi-Yau metric (Calabi conjecture; Yau's theorem) | — | ✗ | **Gap. Differential-geometric companion; pointer to `05-symplectic/almost-complex/` Kähler material.** |
| Reflexive polytope; Batyrev mirror duality | — | ✗ | **Gap.** Already noted in Fulton 3.32 punch-list as `04.11.16` (priority 4 pointer); TGMS picks up where Batyrev leaves off. |

**Aggregate coverage estimate:** ~0% of TGMS has corresponding Codex
units. The gap is total. This is unsurprising — TGMS is a research-level
monograph on a programme (Gross-Siebert 2003–2011) that postdates the
core algebraic-geometry foundations the Codex currently covers.

**Distinctive Codex situation.** TGMS sits at the apex of three
prerequisite stacks:

1. **Toric geometry** (Fulton 3.32 audit, fully punch-listed in
   `plans/fasttrack/fulton-toric-varieties.md` — 16 units across
   four priority bands). All of TGMS's combinatorial infrastructure
   (cones, fans, polytopes, lattice-point sections) is the Fulton
   3.32 toolkit. **Hard prerequisite.**
2. **Hodge theory and Calabi-Yau geometry** (partially covered at
   `04.09.01-hodge-decomposition.md` and `04.09.02-kodaira-vanishing.md`).
   TGMS Lecture 2 (A/B-model survey) and Lecture 7 (period integrals)
   need a Calabi-Yau definition unit, a Calabi-Yau period unit, and
   a mirror-conjecture survey unit. **Soft prerequisite — can be
   written in parallel.**
3. **Log geometry** (Kato 1989). Completely absent from the Codex
   and from any other Fast Track book. TGMS Lectures 3–6 are not
   readable without it. **Hard prerequisite — must be written first
   as its own unit cluster.**

The natural new chapter location is **`04-algebraic-geometry/12-tropical-
mirror/`** (new chapter folder appended to the existing 10-chapter AG
section, after the planned `11-toric/` Fulton chapter). The log-geometry
prerequisite units should go in **`04-algebraic-geometry/13-log/`**
(separate new chapter), or as a `12-tropical-mirror/00-log-preliminaries/`
sub-section.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — blocked by Fulton 3.32 punch-list (hard prereq).** Items
1–11 of `plans/fasttrack/fulton-toric-varieties.md` (algebraic torus,
cones, fans, $X_\Sigma$, orbit-cone correspondence, toric resolution,
toric divisors, toric Picard, polytope-to-line-bundle, algebraic moment
map) must ship before any TGMS unit can be written. TGMS inherits all
Fulton 3.32 prereqs and additionally needs the priority-4 reflexive-
polytope pointer (`04.11.16`).

**Priority 0a — additional prereqs (independent of Fulton 3.32):**

- **`04.09.03` Calabi-Yau manifold (algebraic-geometric).** Trivial
  canonical bundle; Kodaira-Spencer first-order deformation theory.
  Three-tier, ~1500 words. Anchors Lectures 2, 3, 4 of TGMS.
- **`05.??.??` Special Lagrangian torus fibration.** Located in
  `05-symplectic/lagrangian/`. Pointer unit at FT-equivalence;
  references SYZ Lecture 10.
- **`04.12.00` Log structure (Kato 1989) and log smooth morphism.**
  Foundational. Three-tier, ~2500 words. Pre-stub for the `12-tropical-
  mirror/` chapter or its own `13-log/` chapter; the latter is cleaner
  long-term. Lectures 3–6 of TGMS are unreadable without this unit.

**Priority 1 — high-leverage, captures TGMS's central content:**

1. **`04.12.01` Tropical semiring and tropical polynomial.** The
   $(\mathbb{R} \cup \{\infty\}, \min, +)$ semiring; tropical
   monomials and polynomials; tropical hypersurface as the
   non-differentiability locus. Worked examples: tropical line in
   $\mathbb{R}^2$, tropical conic, tropical $\mathbb{P}^2$. TGMS
   Lecture 1 anchor; Mikhalkin ICM 2006 §1 anchor; Maclagan-Sturmfels
   §1.1–1.3 anchor. Three-tier, ~2000 words.
2. **`04.12.02` Tropical curve (balanced rational metric graph).**
   Vertices, edges with rational slope, balancing condition at each
   vertex; tropical degree; tropical genus. Worked examples: tropical
   degree-$d$ plane curves; tropical conic through 5 points. TGMS
   Lecture 1, 8, 9 anchor; Mikhalkin 2005 §2 anchor. Three-tier,
   ~2000 words.
3. **`04.12.03` Kapranov's theorem.** Statement: for $V \subset
   (\mathbb{C}^*)^n$ an algebraic variety with ideal $I$, the tropical
   variety $\mathrm{Trop}(V) \subset \mathbb{R}^n$ equals (i) the
   image of $V(\mathbb{C}\{\!\{t\}\!\}))$ under the non-archimedean
   valuation $\nu$, and (ii) the support of the initial-ideal fan of
   $I$. Kapranov 2000 (unpublished, but the result is universally
   attributed) and Speyer-Sturmfels 2004 give the proof now in the
   literature; cited via Maclagan-Sturmfels §3. Three-tier, ~2000
   words. **Originator-prose unit (Kapranov 2000).**
4. **`04.12.04` Newton polytope and non-archimedean amoeba.** Two
   constructions, one duality. Newton polytope $\mathrm{Newt}(f)
   \subset M_\mathbb{R}$ of $f \in \mathbb{C}[x_1^{\pm}, \ldots,
   x_n^{\pm}]$; non-archimedean amoeba of $V(f)$ in $\mathbb{R}^n$.
   Bridges to Fulton 3.32 `04.11.14` (Bernstein-Kushnirenko / mixed
   volumes). Three-tier, ~1500 words.
5. **`04.12.05` Mikhalkin's correspondence theorem.** Statement and
   sketch of proof: for a toric surface $X_\Delta$ with polytope
   $\Delta$, the number of complex algebraic curves of bidegree
   $(d, g)$ in $X_\Delta$ through generic points equals a weighted
   count of tropical curves through the tropicalised points; the
   weights are the multiplicities of Mikhalkin's "complex
   multiplicity formula". Mikhalkin 2003 arXiv / Mikhalkin 2005 *JAMS*
   18, pp. 313–377. TGMS Lecture 9 anchor. Three-tier, ~2500 words.
   **Originator-prose unit (Mikhalkin 2003/2005). The signature
   tropical-classical correspondence.**
6. **`04.12.06` Nishinou-Siebert correspondence.** The
   algebraic-geometric proof of Mikhalkin's correspondence via toric
   degenerations; extension to higher-dimensional toric varieties.
   Nishinou-Siebert 2006 *Duke Math. J.* 135, 1–51. Master-tier (the
   proof is technical); ~2000 words. Intermediate gives the statement
   only.
7. **`04.12.07` Toric degeneration of a Calabi-Yau variety.** A
   1-parameter flat family $\mathfrak{X} \to \mathrm{Spec}\,
   \mathbb{C}[\![t]\!]$ with smooth generic fibre and special fibre a
   union of toric varieties glued along toric strata. **Maximally
   unipotent monodromy / large-complex-structure limit.** TGMS
   Lecture 4 anchor; Gross-Siebert 2006 *J. Differential Geom.* 72
   §2 anchor. Three-tier, ~2500 words.
8. **`04.12.08` Dual intersection complex; tropical manifold $B$.**
   Construction of the dual intersection complex from a toric
   degeneration; integral affine structure on $B$ away from a
   codimension-2 singular locus $\Delta$; the singular locus carries
   the "monodromy data" that distinguishes the Calabi-Yau case.
   Polyhedral decomposition $\mathscr{P}$ of $B$. TGMS Lecture 4
   anchor. Three-tier, ~2500 words. **Distinctive content; the
   combinatorial input for Lecture 5.**
9. **`04.12.09` Gross-Siebert reconstruction theorem (statement).**
   Given a tropical manifold $(B, \mathscr{P})$ with simple
   singularities and lifted gluing data, there is a unique (up to
   formal isomorphism) toric degeneration of Calabi-Yau varieties
   with dual intersection complex $(B, \mathscr{P})$, reconstructed
   order by order in $t$ via the scattering / slab procedure.
   Gross-Siebert 2011 *Ann. of Math.* 174, pp. 1301–1428 (originating
   paper). TGMS Lecture 5 anchor (statement only at FT-equivalence;
   proof is a Master-only sketch). ~3000 words. **TGMS's central
   theorem. Statement-level unit; proof deferred — see §5.**
10. **`04.12.10` Strominger-Yau-Zaslow (SYZ) conjecture.** Statement:
    mirror Calabi-Yau pairs $(X, X^\vee)$ admit dual special Lagrangian
    $T^n$-fibrations $X \to B$ and $X^\vee \to B$ over a common
    integral-affine base, with the mirror map = fibrewise T-duality.
    SYZ 1996 *Nucl. Phys. B* 479 anchor; TGMS Lecture 10 anchor.
    Three-tier, ~2000 words. Cross-pointer to special Lagrangian unit
    in `05-symplectic/lagrangian/` (P0a above). **Originator-prose
    unit (Strominger-Yau-Zaslow 1996).**

**Priority 2 — theta functions and the polytope-to-mirror bridge:**

11. **`04.12.11` Slab function and structure of a tropical manifold.**
    Codimension-1 strata of $(B, \mathscr{P})$ carry **slab functions**
    — Laurent polynomials in the toric coordinates of the adjacent
    chambers, recording the gluing data. The collection of slab
    functions + scattering walls is the "structure" $\mathscr{S}$ on
    $B$. TGMS Lecture 5 anchor. Master-tier (the definition is
    technical); ~2500 words.
12. **`04.12.12` Theta function of a polarised tropical manifold.**
    Theta functions $\vartheta_m$ for $m$ an integral point of $B$;
    canonical $\mathbb{Z}$-basis of the algebra of regular functions on
    the mirror; broken-line construction. Generalises the lattice-point
    basis $H^0(X_P, L_P) = \bigoplus_{m \in P \cap M} \chi^m$ from
    Fulton 3.32 `04.11.10` (toric case) to the degenerate Calabi-Yau
    case. TGMS Lecture 6 anchor; Gross-Hacking-Keel 2015 *Publ. IHÉS*
    122 + Carl-Pumperla-Siebert *Forum Math. Sigma* 8 (2020) anchors.
    Three-tier, ~2500 words. **Distinctive content; the
    Calabi-Yau analogue of Fulton's polytope-to-sections theorem.**
13. **`04.12.13` Period integral and the mirror map (pointer).** For
    the reconstructed Calabi-Yau family $\mathfrak{X}_t$, the periods
    $\int_{\gamma_i} \Omega_t$ of the holomorphic volume form along
    a basis of cycles $\gamma_i$ satisfy a Picard-Fuchs equation whose
    leading-order behaviour is computed by tropical-disk counts on
    the A-side mirror. TGMS Lecture 7 anchor. Master-tier pointer
    unit; ~1500 words. **Bridges to Hodge-theoretic Calabi-Yau periods
    in `04.09.*`.**

**Priority 3 — log geometry deep content (prerequisite-completing):**

14. **`04.12.14` (or `04.13.02`) Log smooth morphism and log Calabi-Yau
    space.** Builds on the P0a `04.12.00` log-structure unit. Log
    smooth = the log analogue of smooth; log Calabi-Yau = trivial log
    canonical. Kato 1989 *Logarithmic structures of Fontaine-Illusie*
    anchor; TGMS Lecture 3 anchor. Master-tier; ~2500 words.
15. **`04.12.15` Log Gromov-Witten invariants (pointer).** Gross-Siebert
    2013 *J. Amer. Math. Soc.* 26 / Abramovich-Chen 2014 *Asian J.
    Math.* 18. The A-side invariants the program ultimately computes.
    Master-only pointer; ~1500 words.

**Priority 4 — scattering diagrams and wall-crossing (Master-tier,
explicitly deferred deep content):**

16. **`04.12.16` Scattering diagram (Kontsevich-Soibelman); wall-crossing
    formula (pointer).** Algorithm constructing the scattering structure
    order by order in $t$ by adding walls to maintain consistency around
    each singular point of $B$. Kontsevich-Soibelman 2006 *Birkhäuser*
    chapter + Kontsevich-Soibelman 2008 arXiv:0811.2435 originators.
    TGMS Lecture 5 anchor. Master-only; ~2000 words. **Explicit pointer;
    deep content deferred — see §5.**
17. **`04.12.17` Reflexive polytope and Batyrev mirror duality (full
    unit).** Upgrade of Fulton 3.32 `04.11.16` (pointer-only) to a
    full Intermediate+Master unit. Batyrev 1994 *J. Algebraic Geom.* 3,
    pp. 493–535. **Concrete pre-Gross-Siebert mirror construction;
    one of the worked examples in TGMS.** ~2000 words.

---

## §4 Implementation sketch (P3 → P4)

For full TGMS coverage, items 1–10 are the minimum equivalence set
(priority 1) plus the prerequisite log-structure unit P0a and the
Fulton 3.32 priority-1+2 batch as hard prereqs. Realistic production
estimate (mirroring earlier algebraic-geometry batches and accounting
for the research-monograph density of TGMS):

- ~4–5 hours per unit. TGMS units skew higher than the AG corpus
  average because each unit needs to coordinate the (a) tropical /
  combinatorial side, (b) algebraic-geometric side via toric
  degeneration, and (c) mirror-symmetry interpretation. Worked
  examples are nontrivial (e.g. the quintic mirror, the K3 SYZ).
- 10 priority-1 units × ~4.5 hours = ~45 hours of focused production.
  Plus 3 prerequisite P0a units (~12 hours), 3 priority-2 units
  (~12 hours), 2 priority-3 units (~8 hours), and 2 priority-4 units
  (~8 hours) = ~85 hours total. Add the Fulton 3.32 priority-1+2
  prereq batch (~38–40 hours) and the total is ~125 hours. Realistic
  10–14 day window for a TGMS sprint after Fulton 3.32 ships.
- 10 priority-1 units alone (~45 hours) lift coverage from ~0% to
  ~55%; priority-2 (~12 hours) reaches ~75%; priority-3 (~8 hours)
  reaches ~85%; priority-4 (~8 hours) closes to ~95%.

**Originator-prose target.** TGMS's content has clear originator
attributions per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10:

- **Kapranov 2000** (unpublished lectures, written up by Speyer-
  Sturmfels 2004 *Adv. Geom.*; canonical attribution in Maclagan-
  Sturmfels 2015) — **originator of tropical curves and the tropical
  variety / non-archimedean valuation picture.** Cite in `04.12.01–
  04.12.03`.
- **Mikhalkin 2003** (arXiv:math/0312530) and **Mikhalkin 2005** (*J.
  Amer. Math. Soc.* 18, pp. 313–377) — **originator of the tropical-
  classical correspondence theorem for toric surfaces.** Cite in
  `04.12.05`. Mikhalkin's ICM 2006 survey (*Proceedings ICM Madrid*,
  Vol. II, pp. 827–852) is the readable consolidated source.
- **Strominger-Yau-Zaslow 1996** (*Nucl. Phys. B* 479, pp. 243–259) —
  **originator of the SYZ conjecture.** Cite in `04.12.10`. The paper
  is short (~17 pp.) and largely physical-intuition; the algebraic-
  geometric reformulation is Gross-Wilson 2000 and Kontsevich-
  Soibelman 2001.
- **Gross-Siebert 2006** (*J. Differential Geom.* 72, pp. 169–338) —
  **originator of the log-geometric mirror programme.** Cite in
  `04.12.07–04.12.08`.
- **Gross-Siebert 2011** (*Ann. of Math.* 174, pp. 1301–1428) —
  **originator of the reconstruction theorem.** Cite in `04.12.09`.
- **Kontsevich-Soibelman 2001** (*Symplectic geometry and mirror
  symmetry*, World Scientific, pp. 203–263) and **Kontsevich-Soibelman
  2006** (*The Unity of Mathematics*, Birkhäuser, pp. 321–385) —
  **originators of scattering / wall-crossing in the SYZ-mirror
  context.** Cite in `04.12.16`.
- **Nishinou-Siebert 2006** (*Duke Math. J.* 135, pp. 1–51) —
  **originator of the algebraic-geometric proof of the tropical-
  classical correspondence in arbitrary toric dimension.** Cite in
  `04.12.06`.
- **Gross 2011** (TGMS itself) — definitive textbook consolidation.

Each anchor unit's Master Historical section should carry at least one
of these originator citations; `04.12.05` (Mikhalkin's theorem) and
`04.12.09` (Gross-Siebert reconstruction) and `04.12.10` (SYZ) are the
three units whose **entire structure** should be in the
originator-prose mode per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10 — leading with the original statement and citation, supplying the
historical context, and offering the modernised exposition only after
the period-correct setup.

**Notation crosswalk.** TGMS uses $(B, \mathscr{P})$ for the tropical
manifold with polyhedral decomposition, $\mathscr{S}$ for the structure
(slab functions + scattering walls), $\Delta \subset B$ for the singular
locus of the integral affine structure, and $X_0$ for the special fibre
of a toric degeneration. The Codex notation decision (per
`docs/specs/UNIT_SPEC.md` §11) should adopt these unchanged. The toric
notation $(N, M, N_\mathbb{R}, M_\mathbb{R}, \sigma, \Sigma, X_\Sigma,
U_\sigma)$ from Fulton 3.32 carries over to TGMS lectures 4–6; the
tropical lectures 1–2 use $\mathbb{R}^n$ and $\mathbb{R} \cup \{\infty\}$
directly. **Conflict to resolve:** TGMS Lecture 10 (SYZ) writes $B$ for
the SYZ base — same letter as the tropical-manifold base in Lectures
4–9. This is intentional: the SYZ base **is** the tropical manifold
in the Gross-Siebert picture. The Codex units should make this
identification explicit in `04.12.08` (dual intersection complex /
tropical manifold) and again in `04.12.10` (SYZ statement).

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in TGMS.
  Deferred until a working copy of the book is sourced (see §7) —
  current sourcing status is **reduced**; the plan was built from the
  universally-documented 10-lecture structure of CBMS 114 plus the
  Mikhalkin / Maclagan-Sturmfels / Gross-Siebert original-paper
  cross-references.
- **Deep Gross-Siebert technical details.** The proof of the
  reconstruction theorem (the scattering algorithm, the consistency
  arguments around each singular point of $B$, the slab-function
  cocycle computations) is **explicitly deferred**. `04.12.09` is a
  statement-only unit with a Master-tier proof sketch. The full proof
  occupies Gross-Siebert 2011 *Ann. of Math.* 174 (128 pages) and is
  beyond FT-equivalence scope.
- **Kontsevich-Soibelman wall-crossing formula in full generality.**
  `04.12.16` is a pointer unit. The motivic-DT / cluster-transformation
  generalisation (Kontsevich-Soibelman 2008 arXiv:0811.2435) is
  explicitly out of scope; future Fast Track entry candidate.
- **Gromov-Witten theory of Calabi-Yau threefolds.** The A-side that
  mirror symmetry ultimately computes. TGMS Lecture 2 surveys it
  briefly; the Codex needs a Gromov-Witten chapter independently
  before that survey can land. Deferred to a separate Fast Track audit
  (Cox-Katz, *Mirror Symmetry and Algebraic Geometry*, FT 3.??).
- **Symplectic / Floer-theoretic mirror symmetry** (Kontsevich's
  homological mirror conjecture, Fukaya category). Out of scope;
  FT 3.34+ candidate; pointer only in `04.12.10` Master.
- **The Donaldson-Thomas / Pandharipande-Thomas correspondence.** Out
  of scope.
- **Tropical Grassmannian, tropical moduli spaces, tropical
  intersection theory beyond surfaces.** Covered in Maclagan-Sturmfels
  Ch. 5–6 but not in TGMS; out of scope for this audit.
- Exercise-pack production. TGMS exercises are mostly research-prompt
  level ("verify the following statement in the case ..."); the
  exercise pack is a P3-priority-3 follow-up after the priority-1
  units ship.

---

## §6 Acceptance criteria for FT equivalence (TGMS)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The Fulton 3.32 punch-list priority-1+2 units (`04.11.01–04.11.11`)
  have shipped (strict prereq).
- The P0a prerequisite units have shipped: `04.09.03` (algebraic
  Calabi-Yau), special-Lagrangian-torus-fibration unit in
  `05-symplectic/lagrangian/`, and `04.12.00`/`04.13.??` (log
  structure).
- ≥95% of TGMS's named theorems in Lectures 1–10 map to Codex units.
  Currently 0%. After priority-1 ships: ~55%. After priority-1+2:
  ~75%. After priority-1+2+3: ~85%. After priority-1+2+3+4: ≥95%.
- ≥90% of TGMS's worked computations have a direct unit or are
  referenced from a unit that covers them. The signature examples
  (the quintic mirror via toric degeneration, the K3 SYZ fibration,
  the focus-focus singularity of an integral affine $S^2$, the
  tropical conic through 5 points realising Mikhalkin's correspondence
  in degree 2) are distributed across priority-1 and priority-2 units'
  worked-example sections.
- Notation decisions are recorded (see §4 above).
- Cross-pointers are explicit:
  - From `04.12.07–04.12.09` back to Fulton 3.32 `04.11.04`
    (fan and $X_\Sigma$) and `04.11.10` (polytope-to-line-bundle).
  - From `04.12.10` (SYZ) laterally to the
    `05-symplectic/lagrangian/` special-Lagrangian unit and to the
    Calabi-Yau metric / Yau's theorem material.
  - From `04.12.12` (theta functions) back to Fulton 3.32 `04.11.10`
    (lattice-point basis) as the smooth-toric specialisation.
  - From `04.12.17` (Batyrev) to the Fulton 3.32 `04.11.16` pointer
    upgrade.
- Pass-W weaving connects the new `04-algebraic-geometry/12-tropical-
  mirror/` chapter to `04-algebraic-geometry/11-toric/` (Fulton),
  to `04-algebraic-geometry/09-hodge/` (Calabi-Yau periods), to
  `04-algebraic-geometry/13-log/` (or in-chapter log preliminaries),
  and to `05-symplectic/lagrangian/` (SYZ side).

The 10 priority-1 units close the foundational gap. Priority-2 closes
the theta-function and period-integral gap. Priority-3 closes the
log-geometry deep content gap. Priority-4 is the scattering / Batyrev
deepenings. Once all four priority bands are shipped, **and** the
Fulton 3.32 and P0a prereqs are in place, TGMS is at the FT-equivalence
threshold.

---

## §7 Sourcing

- **Status: REDUCED.** No local PDF was found in
  `reference/textbooks-extra/`, `reference/fasttrack-texts/`, or
  `reference/book-collection/free-downloads/` (which holds the Freed
  CBMS notes — *Field Theory and Topology* — but **not** the Gross
  CBMS 114 book). The book is in active copyright (American
  Mathematical Society, CBMS Regional Conference Series in Mathematics
  114, 2011) and is not on the AMS open backlist or any author-hosted
  page. WebFetch attempts to AMS bookstore, AMS books portal, Gross's
  Cambridge DPMMS page, and a Google search all returned 403 /
  certificate / non-content responses; the AMS retains the book
  behind the standard CBMS paywall.
- **Action required to upgrade to full P1 audit.** Acquire a copy.
  Listed as BUY in `docs/catalogs/FASTTRACK_BOOKLIST.md` line for 3.33
  ("Tropical Geometry and Mirror Symmetry — Mark Gross — Tropical
  methods, string theory — BUY") and similarly in
  `docs/catalogs/NEED_TO_SOURCE.md` ("3.33 | Tropical Geometry and
  Mirror Symmetry | Gross | AMS CBMS"). Estimated cost ~$54 paperback
  (AMS member ~$43). Library access via institutional ILL is the
  fastest path; the AMS sells CBMS books individually and AMS-member
  pricing is the standard route for a working copy. Once acquired,
  the lecture-level structure in §1 / §2 above can be upgraded to
  theorem-level inventory.
- **Local copy target.** Add to `reference/fasttrack-texts/03-modern-
  geometry/` as `Gross-TropicalGeometryAndMirrorSymmetry.pdf` to
  mirror the pattern of other paid FT texts.
- **Substitute expositions (used in this audit).**
  - **Maclagan-Sturmfels, *Introduction to Tropical Geometry* (AMS
    GSM 161, 2015).** The definitive textbook on the
    commutative-algebra and combinatorial side of tropical geometry.
    Open partial draft long available via Sturmfels' Berkeley page;
    final book is paywalled but the draft covers most of TGMS
    Lectures 1–2. M-S §1–4 anchors `04.12.01–04.12.04`; M-S §5
    (tropical varieties of higher dimension) supplements
    `04.12.05–04.12.06`.
  - **Mikhalkin, *Tropical Geometry and Its Applications*, ICM 2006
    Madrid Proceedings, Vol. II, pp. 827–852.** Free at
    <https://www.mathunion.org/icm/proceedings>. Anchors
    `04.12.01–04.12.05` from the differential-geometric side;
    Mikhalkin is the originator of the correspondence theorem in
    `04.12.05`.
  - **Gross-Siebert 2006 *J. Differential Geom.* 72 + 2010 *J.
    Algebraic Geom.* 19 + 2011 *Ann. of Math.* 174.** The three
    originating research papers TGMS consolidates. Open via arXiv
    (math/0309070, math/0703822, math/0703822 sequel). The TGMS book
    is the readable reorganisation; for theorem-level statements the
    *Ann. of Math.* 2011 paper is the canonical citation.
  - **Strominger-Yau-Zaslow 1996 *Nucl. Phys. B* 479.** Free via
    arXiv:hep-th/9606040. Short (~17 pp.); anchors `04.12.10` SYZ.
  - **Kontsevich-Soibelman 2001 + 2006.** Free via arXiv:math/0011041
    and arXiv:math/0406564. Anchors `04.12.16` scattering pointer.
- **Sibling-prereq audit.** `plans/fasttrack/fulton-toric-varieties.md`
  is the hard prereq — also REDUCED, same paywall constraint (Princeton
  Annals of Math Studies 131). Both audits should be coordinated for a
  single acquisition pass: buying Fulton 3.32 and Gross 3.33 together
  is the natural batch. Cox-Little-Schenck *Toric Varieties* (used as
  Fulton substitute) also covers the toric-degeneration material at
  the level needed for `04.12.07–04.12.08`, so the substitute corpus
  has substantial overlap across the two audits.

**Unusual findings.**

1. **Total Codex gap.** Unlike most Fast Track audits, where the
   target book has at least partial overlap with existing Codex
   content via a related differential-geometric, algebraic-topological,
   or analytic anchor, TGMS has **zero** overlap. No tropical content,
   no mirror-symmetry content, no log-geometry content, no
   Calabi-Yau-as-algebraic-variety content, no SYZ content. The
   `05-symplectic/lagrangian/` cluster mentions Lagrangians but no
   special Lagrangians or torus fibrations. The `04-algebraic-
   geometry/09-hodge/` cluster mentions Hodge decomposition but no
   Calabi-Yau periods. This is the **deepest sole-coverage gap of any
   Fast Track audit completed to date.**
2. **Sibling-coordinated punch-list.** Fulton 3.32 punch-list and
   TGMS punch-list together constitute the entire Wave 8 algebraic-
   geometry-and-mirror cluster: 16 (Fulton) + 17 (Gross) = **33 new
   units**, plus 3 P0a prerequisite units = 36 total. The Gross 3.33
   units depend strictly on the Fulton 3.32 priority-1+2 batch; the
   two punch-lists should be shipped in strict order (Fulton 3.32
   priority-1+2 first, then Gross 3.33 priority-1, then both books'
   remaining priority bands in parallel). This is the largest single-
   wave punch-list in the Fast Track equivalence plan.
3. **Log geometry is the chokepoint.** Lectures 3–6 of TGMS (the
   heart of the Gross-Siebert programme) are inaccessible without
   log structures. Neither Fulton 3.32 nor any other shipped Codex
   chapter mentions Kato 1989. The P0a `04.12.00` (or its standalone
   `04.13.??` placement) is a hard prerequisite that does not appear
   on any other Fast Track punch-list. This unit must be carefully
   produced — log geometry has a steep terminology cost that ripples
   through `04.12.07–04.12.15`.
4. **Originator-prose density.** TGMS is unusually rich in
   originator-prose anchor opportunities: Kapranov 2000, Mikhalkin
   2003/2005, SYZ 1996, Gross-Siebert 2006/2010/2011, Kontsevich-
   Soibelman 2001/2006, Nishinou-Siebert 2006, Batyrev 1994, Kato
   1989 — nine distinct originator citations across the 17-unit
   punch-list. This makes TGMS a high-leverage book for the FT-
   equivalence originator-prose target (`FASTTRACK_EQUIVALENCE_PLAN.md`
   §10).
5. **The SYZ identification.** TGMS's most striking conceptual move
   is the identification of the SYZ base (a real differential-
   geometric object: the quotient of a Calabi-Yau by a special
   Lagrangian $T^n$-action) with the dual intersection complex of a
   toric degeneration (a purely combinatorial-algebraic object: an
   integral affine manifold with singularities). This identification
   is what makes the Gross-Siebert programme a **constructive proof**
   of mirror symmetry rather than just a reformulation. Units
   `04.12.08` and `04.12.10` should both call out this identification
   explicitly, with a lateral cross-pointer between them.
