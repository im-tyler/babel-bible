# Mumford (Fogarty, Kirwan) — *Geometric Invariant Theory* (Fast Track 3.31) — Audit + Gap Plan

**Book:** David Mumford, *Geometric Invariant Theory*, Ergebnisse der
Mathematik und ihrer Grenzgebiete 34 (Neue Folge), Springer-Verlag 1965;
**3rd enlarged edition** with John Fogarty and Frances Kirwan, 1994,
xiv + 292 pp. ISBN 978-3-540-56963-3. Hereafter **GIT** (or **MFK**
when the 3rd-edition material is being referenced).

**Fast Track entry:** 3.31, paired with Joe Harris *Moduli of Curves*
(3.30) and Fulton *Toric Varieties* (3.32) as the moduli-and-quotients
trio. GIT is the canonical text on **constructing moduli spaces as
quotients of reductive group actions** — stability, semistability,
the Hilbert-Mumford numerical criterion, the GIT quotient
$X /\!/_L G = \mathrm{Proj}\bigoplus_n H^0(X; L^{\otimes n})^G$, and
(in the third edition) Kirwan's stratification of the unstable locus
linking GIT to symplectic reduction. The book Mumford was awarded the
1974 Fields Medal partly for.

**PDF availability.** No author-hosted PDF (commercial Springer
Ergebnisse text; still in print). **Not present** in
`reference/textbooks-extra/`, `reference/fasttrack-texts/`, or the
newly-discovered `reference/book-collection/free-downloads/` (which
contains only Freed's CBMS / lecture notes). Springer SpringerLink
(`link.springer.com/book/10.1007/978-3-642-57916-5`) gated behind
institutional auth; Wikipedia and Newstead's freely-available Tata
lectures used as cross-checks. **This audit is REDUCED** — produced
from chapter structure as documented in MFK's introduction (1994),
Newstead 1978, Hoskins's *Moduli Problems and Geometric Invariant
Theory* lecture notes (Berlin/Bonn 2015), Mukai *An Introduction to
Invariants and Moduli* (Cambridge 2003), Schmitt *Geometric
Invariant Theory and Decorated Principal Bundles* (EMS 2008), and
the Codex's already-shipped `04.10.02-git` unit (which is the
densest in-corpus reference for the book). Mark as **REDUCED** in
the audit log; full P1 inventory at line-number granularity deferred
until a PDF is acquired.

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite
per orchestration protocol). Punch-list of new units + deepenings to
reach the equivalence threshold
(`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Mirrors the
structure of `brown-higgins-sivera-nonabelian-algebraic-topology.md`
and `griffiths-harris-geometry-algebraic-curves.md`.

The audit surface is **focused** — Codex's
`04-algebraic-geometry/10-moduli/` chapter ships only two units
(`04.10.01-moduli-of-curves`, `04.10.02-git`), both of which already
**name-check** every major GIT result. `04.10.02-git` is a substantive
master-tier unit and **covers** the Mumford 1965 GIT theorem
statement, stability/semistability stratification, the Proj
construction, the Hilbert-Mumford numerical criterion (worked for
binary quartics), the Kempf-Ness theorem, Kirwan stratification (in
the Master-tier *Advanced Results* section), variation of GIT,
and Bridgeland stability. **But every one of these is sketched, not
unit-anchored.** Hilbert-Mumford, Kempf-Ness, Kirwan stratification,
moduli of vector bundles (slope stability), the Hilbert scheme, the
reductivity / finite-generation theorem, and variation of GIT all
deserve dedicated units; GIT (the book) cannot be considered
FT-equivalent until they ship.

---

## §1 What GIT is for

**GIT** is the canonical text on **constructing algebraic quotients
of varieties by reductive group actions**. Where naive set-theoretic
quotients $X / G$ are usually non-Hausdorff, non-projective, and
unhelpful for moduli theory, Mumford's framework introduces a
*linearisation* — an ample line bundle $L$ on $X$ with a lift of the
$G$-action — and defines the GIT quotient

$$
X /\!/_L G := \mathrm{Proj}\bigoplus_{n \geq 0} H^0(X; L^{\otimes n})^G.
$$

The construction works exactly on the *semistable locus*
$X^{ss}(L)$, which Mumford characterises by the existence of an
invariant section non-vanishing at $x$. The *stable locus*
$X^s(L) \subseteq X^{ss}(L)$ — orbits closed in $X^{ss}$ with finite
stabiliser — gives a *geometric* quotient (set-theoretic orbit
space); the full semistable locus gives only a *categorical* /
*good* quotient (identifying points with intersecting orbit
closures). The reductivity hypothesis on $G$ (Mumford: classical
groups, semisimple Lie groups, tori; not unipotents) is essential
for the *finite generation* of $\bigoplus_n H^0(X; L^{\otimes n})^G$
(Hilbert 1893 for classical groups, Nagata's 1959 counterexample for
non-reductives, Mumford's general reductive case).

GIT is the construction tool that makes **algebraic moduli spaces
exist as schemes**:

- *Moduli of curves* $\mathcal{M}_g$ (Mumford 1965) — GIT quotient of
  the Hilbert scheme of tri-canonically embedded curves by $\mathrm{PGL}$.
- *Moduli of vector bundles* $\mathcal{M}(r, d)$ on a curve (Mumford
  1962, Seshadri 1967, Narasimhan-Seshadri 1965) — GIT quotient via
  slope stability $\mu(E) = \deg E / \mathrm{rank}\,E$.
- *Moduli of abelian varieties* (Mumford 1965, 1968) — GIT with
  theta-linearisation.
- *Moduli of K-stable Fano varieties* (Tian-Donaldson-Chen-Sun 2015) —
  infinite-dimensional GIT via test configurations.

Distinctive contributions, in roughly the order MFK develops them:

1. **Reductive group actions and finite generation.** Hilbert's
   classical-groups theorem extended to all reductive groups (over
   any characteristic, using *good filtrations* in char $p$ where the
   Reynolds operator fails). MFK Ch. 1, App. A.
2. **Linearisation.** A $G$-action on an ample line bundle $L$
   covering the action on $X$; gives the $G$-graded section ring whose
   Proj is the GIT quotient. MFK Ch. 1.
3. **Stable, semistable, unstable points.** The stratification
   $X^s(L) \subseteq X^{ss}(L) \subseteq X$ via the existence and
   geometry of invariant sections. MFK Ch. 1, Defs. 1.7–1.8.
4. **The GIT quotient theorem (Mumford 1965).** Existence of
   $X /\!/_L G$ as a quasi-projective scheme (projective if $X$ is);
   categorical-quotient property on $X^{ss}$, geometric-quotient
   property on $X^s$. MFK Ch. 1 §4, Thm. 1.10.
5. **Hilbert-Mumford numerical criterion.** A point is unstable iff
   *some* one-parameter subgroup $\lambda : \mathbb{G}_m \to G$
   destabilises it (positive weight at the limit). Reduces stability
   to a finite-checkable convex-geometric calculation. MFK Ch. 2,
   Thm. 2.1. Strengthened by Kempf 1978 (existence of a *most
   destabilising* 1-PS).
6. **Applications: moduli of curves.** Construction of $\mathcal{M}_g$
   for $g \geq 2$ as a quasi-projective scheme via the tri-canonical
   Hilbert scheme. MFK Ch. 5.
7. **Applications: moduli of vector bundles, Picard schemes,
   abelian varieties.** MFK Chs. 6–7 (mostly Fogarty appendix in 2nd
   ed., absorbed into the main text in 3rd ed.).
8. **Kirwan's stratification of the unstable locus** (3rd edition
   appendix, from Kirwan 1984). Stratifies $X^{us}$ into finitely
   many $G$-invariant locally closed pieces matching the
   Morse-theoretic strata of the moment-map norm-squared $\|\mu\|^2$
   — making the GIT picture symplectic via Kempf-Ness.

GIT is **not** a first introduction to algebraic geometry. It assumes
Hartshorne-level scheme theory (Proj, ample line bundles, Hilbert
scheme), basic algebraic-group theory (reductive groups, root
systems, one-parameter subgroups), and (for the Kirwan appendix)
basic symplectic geometry (moment maps, Marsden-Weinstein
reduction). It is the canonical entry point to moduli theory in the
algebraic-geometric tradition; the parallel symplectic-geometry
tradition (Atiyah-Bott, Kirwan, Hitchin) is equivalent in content
and complementary in style. The Fast Track explicitly chooses the
Mumford / algebraic-geometric track, with Kirwan's symplectic
viewpoint as a deepening (Cycle 5 Marsden-Weinstein connection
already partially shipped at `05.04.01-moment-map` and
`05.04.02-symplectic-reduction`).

---

## §2 Coverage table (Codex vs GIT)

Cross-referenced against the current corpus.
✓ = covered, △ = partial / mentioned-but-not-anchored, ✗ = not covered.

| GIT topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Reductive algebraic group; complete reducibility | — | ✗ | **Gap.** Mentioned in `04.10.02-git` master-tier Ex. 4, but no anchor unit. Would live in `03-modern-geometry/03-lie-groups/` (`03.03.0R` or similar) or in algebraic-geometry chapter. |
| Hilbert-Nagata-Mumford finite generation of invariants | `04.10.02-git` (master tier, Advanced Results) | △ | Mentioned in proof outline of GIT theorem; no dedicated unit on the finite-generation theorem itself. |
| $G$-linearised line bundle | `04.10.02-git` (formal definition) | △ | Defined in passing; no anchor unit. |
| Stable / semistable / unstable points | `04.10.02-git` | ✓ | Covered in intermediate + worked example tier. |
| GIT quotient $X /\!/_L G = \mathrm{Proj}(R^G)$ | `04.10.02-git` | ✓ | This is the main content of the existing unit. |
| Categorical vs geometric quotient | `04.10.02-git` | △ | Stated but not given dedicated unit; standard moduli-theory distinction worth pulling out. |
| Hilbert-Mumford numerical criterion (1-PS) | `04.10.02-git` (Ex. 3 worked) | △ | Worked for binary quartics; no anchor unit stating the general theorem with proof. |
| Kempf 1978: most-destabilising 1-PS | — | ✗ | **Gap.** Strengthening of HM; Master-tier deepening. |
| Hilbert scheme $\mathrm{Hilb}^P_{\mathbb{P}^N}$ | `04.10.01-moduli-of-curves` (mentioned) | △ | Cited as input to Mumford's $\mathcal{M}_g$ construction; no dedicated unit. Foundational for any moduli-via-GIT construction. |
| Moduli of curves $\mathcal{M}_g$ via GIT | `04.10.01-moduli-of-curves` | ✓ | Existing unit. |
| Deligne-Mumford stable-curve compactification $\overline{\mathcal{M}_g}$ | `04.10.01-moduli-of-curves` | ✓ | Master tier. |
| Moduli of vector bundles on a curve; slope stability | `04.10.02-git` (Ex. 7 mentioned) | △ | Foundational application of GIT; deserves dedicated unit. |
| Narasimhan-Seshadri theorem (stable bundles ↔ unitary reps) | — | ✗ | **Gap.** Bridge between GIT and Riemann-surface representations. |
| Gieseker stability for sheaves | — | ✗ | **Gap.** Higher-dim generalisation of slope stability. |
| Kempf-Ness theorem (GIT ↔ symplectic reduction) | `04.10.02-git` (Ex. 6 worked) | △ | Stated; no anchor unit. Bridges to `05.04.02-symplectic-reduction`. |
| Kirwan stratification of unstable locus | `04.10.02-git` (Advanced Results) | △ | Mentioned; no anchor unit. |
| Variation of GIT (Dolgachev-Hu, Thaddeus) | `04.10.02-git` (Advanced Results) | △ | Mentioned; no anchor unit. |
| K-stability and YTD conjecture | `04.10.02-git` (Advanced Results) | △ | Mentioned at master tier; pointer-unit candidate. |
| Bridgeland stability conditions | `04.10.02-git` (Advanced Results) | △ | Mentioned; categorical analogue of GIT. |
| Non-reductive GIT (Doran-Kirwan) | `04.10.02-git` (Advanced Results) | △ | Mentioned; master-tier deepening. |
| Moment map for $G$-action on symplectic / Kähler manifold | `05.04.01-moment-map` | ✓ | Shipped via Cycle 5 (Cannas da Silva, Marsden-Weinstein). |
| Marsden-Weinstein symplectic reduction | `05.04.02-symplectic-reduction` | ✓ | Shipped via Cycle 5. |
| Atiyah-Bott Yang-Mills over Riemann surfaces | `03.07.09-moduli-space-of-asd-connections-mathcal-m-k-s-4` | △ | Adjacent — moduli of ASD connections (4-manifolds), not Riemann-surface bundle case. Cycle 6 (Atiyah K-Theory) flagged. |

**Aggregate coverage estimate:** ~25% of GIT's distinctive content has
*anchor-level* coverage; ~70% has *name-check* coverage in
`04.10.02-git`. The existing GIT unit is dense but is doing the work
of 6–8 units; the punch-list extracts those into dedicated anchor
units so each is FT-equivalence-grade and can be cited cleanly from
other moduli-using texts (Atiyah-Bott, Joe Harris, ACGH-II, Donaldson
*Floer Homology Groups in Yang-Mills*, Hitchin Higgs bundles, etc.).

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — soft prereqs already shipped or partial.** Reductivity
needs a $\geq$ Beginner/Intermediate anchor; Hilbert scheme needs a
stub. Both can be Cycle-internal (algebraic-geometry chapter)
deferrals.

**Priority 1 — high-leverage, captures GIT's central content as
dedicated anchor units (extracting from the existing `04.10.02-git`
catch-all):**

1. **`04.10.03` Hilbert-Mumford numerical criterion.** Statement,
   sketch of proof via reduction to torus actions on $\mathbb{A}^N$,
   convexity / Newton-polytope picture, Kempf 1978 most-destabilising
   1-PS strengthening (Master tier). Worked examples: binary $d$-forms
   (root-multiplicity criterion, generalising `04.10.02-git` Ex. 3),
   $n$-point configurations on $\mathbb{P}^1$, Grassmannian Plücker
   stability. MFK Ch. 2 anchor. Three-tier, ~2000 words.
2. **`04.10.04` Kempf-Ness theorem and the GIT–symplectic dictionary.**
   Statement; proof sketch via norm-minimisation / convexity; explicit
   identification $X /\!/_L G \cong \mu^{-1}(0) / K$ with $K \subset G$
   maximal compact. Pulls the existing `04.10.02-git` Ex. 6 out into
   an anchor unit. Bridges to `05.04.02-symplectic-reduction`
   (Marsden-Weinstein) — the Cycle 5 / Cannas-da-Silva
   moment-map / reduction batch is the symplectic-side prereq, now
   shipped. Kempf-Ness 1979 (LNM 732) originator citation. MFK 3rd ed.
   appendix (Kirwan) anchor. Three-tier, ~2000 words.
3. **`04.10.05` Hilbert scheme $\mathrm{Hilb}^P_X$.** Grothendieck 1961
   *FGA* construction; representable functor parametrising closed
   subschemes with given Hilbert polynomial; relative version
   $\mathrm{Hilb}^P_{X/S}$; tangent space $H^0(N_{Y/X})$;
   smoothability and connectedness. Foundational input to **any**
   moduli-space construction via GIT (Mumford, Gieseker, Simpson).
   Worked example: $\mathrm{Hilb}^2(\mathbb{P}^2)$ = blow-up of
   $\mathrm{Sym}^2 \mathbb{P}^2$ at the diagonal. MFK Ch. 5 anchor;
   Grothendieck FGA originator. Three-tier, ~2000 words.
4. **`04.10.06` Moduli of vector bundles on a curve; slope stability.**
   Mumford's 1962 stability condition
   $\mu(E) = \deg E / \mathrm{rank}\,E$; construction of
   $\mathcal{M}(r, d)$ as a GIT quotient (Seshadri 1967, Newstead
   1972); smoothness, dimension $r^2(g - 1) + 1$; Atiyah-Bott
   cohomology (1983); Narasimhan-Seshadri 1965 unitary-representations
   correspondence stated. Newstead 1978 Tata lectures anchor; MFK
   Ch. 6 / Seshadri 1967 Annals 85 originator. Three-tier, ~2200 words.
5. **`04.10.07` Reductive algebraic groups and finite generation of
   invariants.** Definition (complete reducibility / unipotent radical
   trivial); classical groups, semisimple groups, tori as examples;
   non-reductive examples (Borel, unipotent); Hilbert's 1893
   finite-generation theorem for classical groups via the symbolic
   method; Nagata 1959 counterexample answering Hilbert 14 in the
   negative; Mumford / Haboush 1975 extension to all reductive groups
   in arbitrary characteristic (Reynolds operator in char 0; good
   filtrations / *Haboush's theorem* on geometric reductivity in
   char $p$). MFK Ch. 1 + App. A; Haboush 1975 Annals 102. Three-tier,
   ~1800 words. **Bridges to `03-modern-geometry/03-lie-groups`** for
   the Lie-theoretic content; algebraic-geometry chapter is the
   anchor location given the GIT context.

**Priority 2 — second-order content (Kirwan stratification, variation,
categorical quotient):**

6. **`04.10.08` Kirwan stratification of the unstable locus.** Kirwan
   1984 *Cohomology of Quotients in Symplectic and Algebraic
   Geometry* (PUP). Stratification of $X^{us}$ into finitely many
   $G$-invariant locally closed pieces indexed by conjugacy classes of
   1-parameter subgroups; matches Morse-theoretic strata of
   $\|\mu\|^2$ via Kempf-Ness; used to compute equivariant cohomology
   of GIT quotients $H^*_G(X^{ss}) \to H^*(X /\!/ G)$ (Kirwan
   surjectivity). MFK 3rd ed. ch. 8 (Kirwan appendix) anchor.
   Master-tier-only, ~1500 words.
7. **`04.10.09` Variation of GIT (VGIT).** Different linearisations
   give different GIT quotients, related by *flips* / *flops* across
   walls. Dolgachev-Hu 1998 Publ. Math. IHES 87; Thaddeus 1996 J.
   Amer. Math. Soc. 9. The space of linearisations is a polytope in
   $\mathrm{NS}(X)^G \otimes \mathbb{R}$; quotients change as walls
   are crossed. Foundational for birational geometry of moduli spaces
   and the minimal model program. Intermediate + Master tier,
   ~1500 words.
8. **`04.10.10` Categorical vs geometric quotient; good and
   geometric quotients.** The Borel-Mumford notion of *good
   quotient* (surjective, $G$-invariant, affine pieces have invariant
   coordinate rings) and *geometric quotient* (fibres = $G$-orbits).
   Universal property; comparison with topological quotient. MFK
   Ch. 1 §0–1. Short Intermediate unit, ~1000 words. Could be folded
   into `04.10.02-git` rather than a new unit; flagged as a P2
   "extract from existing" item.

**Priority 3 — modern deepenings (Master-tier, not strictly required
for FT-equivalence but high-value for working algebraic geometers):**

9. **`04.10.11` Gieseker stability and moduli of sheaves.** Gieseker
   1977 Annals 106; stability via Hilbert polynomial (refining slope
   stability for higher-dim sheaves). Moduli space of Gieseker-stable
   sheaves on a projective surface / threefold; smoothness, virtual
   fundamental class, Donaldson-Thomas counts. Master-tier-only,
   ~1500 words.
10. **`04.10.12` Bridgeland stability conditions.** Bridgeland 2007
    Annals 166; stability on triangulated categories
    $\mathrm{D}^b\mathrm{Coh}(X)$. The space of stability conditions
    $\mathrm{Stab}(X)$ is a complex manifold; foundational for mirror
    symmetry and derived-category moduli. Master-tier-only, ~1500
    words.
11. **`04.10.13` K-stability and the Yau-Tian-Donaldson conjecture.**
    K-stability for Fano varieties via test configurations
    (infinite-dimensional GIT). Chen-Donaldson-Sun 2015 (three
    J. Amer. Math. Soc. papers): KE metric exists ⇔ K-stable.
    Master-tier-only, ~1500 words.

**Priority 4 — survey pointers (optional, Master-only):**

12. **`04.10.14` Non-reductive GIT.** Doran-Kirwan 2007; reductive
    envelopes; augmented quotient stacks. Pointer unit; ~1000 words.
13. **`04.10.15` Derived GIT and magic windows.** Halpern-Leistner
    2014 Adv. Math.; lifts GIT to $\mathrm{D}^b\mathrm{Coh}$ with
    *magic windows* giving derived equivalences across walls. Pointer
    unit; ~1000 words.

---

## §4 Implementation sketch (P3 → P4)

For a full GIT coverage pass, items 1–5 are the minimum FT-equivalence
set. Realistic production estimate (mirroring recent
algebraic-geometry batches at `04.10.01-moduli-of-curves`,
`04.10.02-git`, and the `04.04` Riemann-Roch units):

- ~3.5–4 hours per priority-1 unit (heavy on technical statements +
  worked examples; master tier requires careful HM-criterion / VGIT
  / slope-stability machinery and citation discipline).
- 5 priority-1 units × ~3.75 hours = ~18–19 hours of focused
  production.
- 3 priority-2 units × ~3 hours = ~9 hours.
- 5 priority-3/4 deepenings × ~2.5 hours = ~12–13 hours.
- **Total ~40 hours** for a complete pass; **~20 hours** for the
  FT-equivalence minimum. Fits a focused 5-day window.

**Originator-prose target.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, units 1, 2, 4, 5
(Hilbert-Mumford, Kempf-Ness, vector-bundle moduli, finite
generation) should carry originator-prose treatment citing:

- **Hilbert, D.** (1893), *Über die vollen Invariantensysteme*, Math.
  Ann. 42, 313–373 — originator: finite generation of classical-group
  invariant rings via the symbolic method.
- **Mumford, D.** (1965), *Geometric Invariant Theory*, Springer
  Ergebnisse 34 — the book itself; originating the framework.
- **Kempf, G.** (1978), *Instability in invariant theory*, Annals of
  Math. 108, 299–316 — originator: most-destabilising 1-PS
  strengthening of Hilbert-Mumford.
- **Kempf, G. & Ness, L.** (1979), *The length of vectors in
  representation spaces*, in *Algebraic Geometry, Copenhagen 1978*,
  Springer LNM 732, 233–243 — originating the GIT ↔ symplectic
  reduction dictionary.
- **Kirwan, F.** (1984), *Cohomology of Quotients in Symplectic and
  Algebraic Geometry*, Mathematical Notes 31, Princeton University
  Press — originating the unstable-locus stratification (appended to
  the 3rd edition of MFK).
- **Haboush, W.** (1975), *Reductive groups are geometrically
  reductive*, Annals of Math. 102, 67–83 — originating finite
  generation in arbitrary characteristic.
- **Mumford, D.** (1962), *Projective invariants of projective
  structures and applications*, in *Proc. Internat. Congr.
  Mathematicians (Stockholm, 1962)* — originating slope stability for
  vector bundles, pre-MFK.
- **Seshadri, C. S.** (1967), *Space of unitary vector bundles on a
  compact Riemann surface*, Annals of Math. 85, 303–336 — first
  rigorous GIT construction of $\mathcal{M}(r, d)$.

**Notation crosswalk.** MFK uses $X^{ss}(L)$, $X^s(L)$, $X^{us}(L)$
for the (semi)stable / unstable loci, $X /\!/_L G$ for the GIT
quotient (or $X /\!/ G$ when the linearisation is implicit),
$\mu^L(x, \lambda)$ for the Hilbert-Mumford function. Newstead and
Hoskins follow MFK. The Codex's `04.10.02-git` already adopts MFK
notation throughout; the new units should preserve this. Kempf-Ness
uses $\Phi$ or $\|v\|^2$ for the norm-squared moment map (real
side); Kirwan uses $\mu : X \to \mathfrak{k}^*$ for the moment map
(matching the Codex's `05.04.01-moment-map` notation). Record in a
§Notation paragraph of `04.10.03` and `04.10.04`.

---

## §5 What this plan does NOT cover

- **Joe Harris *Moduli of Curves* (FT 3.30).** Deferred to its own
  audit pass. There is substantial overlap (Hilbert scheme; moduli
  of stable curves; tautological classes; Mumford-Morita-Miller
  $\kappa$-classes; Witten-Kontsevich) but Joe Harris's book is the
  curve-specific deformation-theory text, not the GIT framework
  text. Coordinate via cross-references once both plans are written.
- **Symplectic / Marsden-Weinstein side beyond the Kempf-Ness
  bridge.** The Cycle 5 (Cannas da Silva, Helgason) moment-map and
  symplectic-reduction units (`05.04.01`, `05.04.02`) are the
  symplectic-side anchors; Atiyah-Bott Yang-Mills cohomology
  (FT 3.41 or similar) is the parallel symplectic-moduli text and
  has its own audit pass.
- **A line-number-level inventory of every named theorem in MFK**
  (full P1 audit; deferred — MFK is 292 pp. but technically dense,
  requires a PDF to do faithfully).
- **Exercise-pack production.** MFK has no formal exercise list;
  exercises in derived units should come from Newstead 1978 and
  Mukai 2003 (which both have explicit exercises).
- **Cubical / derived / non-reductive deepenings** beyond the
  pointer units `04.10.14` and `04.10.15`. The Codex is not
  committing to a parallel derived-GIT track.
- **K-stability analytic proof details** (YTD conjecture). The
  pointer unit `04.10.13` states the theorem and sketches the
  test-configuration GIT picture; the analytic proof
  (Chen-Donaldson-Sun's three Ann. Math. papers, 200+ pp. total) is
  out of scope for FT-equivalence.

---

## §6 Acceptance criteria for FT equivalence (GIT)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- All 5 **priority-1** units have shipped (`04.10.03`–`04.10.07`).
  This closes the central HM-criterion / Kempf-Ness / Hilbert-scheme
  / vector-bundle-moduli / reductivity gap that
  `04.10.02-git` currently catches.
- ≥2 of the 3 **priority-2** units have shipped (`04.10.08` Kirwan
  stratification + at least one of `04.10.09` VGIT / `04.10.10`
  categorical quotient).
- At least 1 of the **priority-3** units has shipped, with the
  others queued as Master-tier deepenings.
- All originator-prose citations (Hilbert 1893, Mumford 1965,
  Kempf 1978, Kempf-Ness 1979, Kirwan 1984, Haboush 1975, Seshadri
  1967) appear at least once in the corpus, with at least one
  unit per originator carrying the prose.
- ≥95% of GIT's named theorems in chapters 1–8 map to a Codex unit
  (currently ~25% anchor + ~70% mention; after priority-1 this rises
  to ~75% anchor; priority-1+2 to ~90% anchor; full ≥95% requires
  priority-1+2+3).
- ≥90% of GIT's worked examples (binary forms, $n$-points on
  $\mathbb{P}^1$, point-configurations on $\mathbb{P}^2$, moduli of
  curves, moduli of vector bundles, moduli of abelian varieties)
  have either a direct unit or a worked-example block in a covering
  unit.
- Notation decisions are recorded in `04.10.03` and `04.10.04`.
- Pass-W weaving connects the new units laterally to
  `04.10.01-moduli-of-curves`, `04.10.02-git`,
  `05.04.01-moment-map`, `05.04.02-symplectic-reduction`,
  `03.07.09-moduli-space-of-asd-connections`, and the (future)
  Joe Harris *Moduli of Curves* punch-list.

The 5 priority-1 units close most of the equivalence gap. Priority-2
closes the Kirwan / VGIT / categorical-quotient gap. Priority-3+4 are
modern-research deepenings (Gieseker, Bridgeland, K-stability,
non-reductive GIT, derived GIT) — high-value but not strictly
required for FT-equivalence.

---

## §7 Sourcing

- **Primary text.** Mumford, Fogarty, Kirwan, *Geometric Invariant
  Theory*, 3rd enlarged edition, Springer Ergebnisse 34, 1994.
  No author-hosted PDF; commercial Springer text, still in print.
  **Acquisition: BUY** (per `docs/catalogs/FASTTRACK_BOOKLIST.md`
  entry 3.31). Pre-acquisition the audit is REDUCED; post-acquisition
  a P1 full audit at line-number granularity should follow.
- **Free secondary sources used in this reduced audit.**
  - **Newstead, P. E.** (1978), *Lectures on Introduction to Moduli
    Problems and Orbit Spaces*, Tata Institute of Fundamental
    Research Lectures on Mathematics 51. Freely hosted at
    `<https://www.math.tifr.res.in/~publ/ln/tifr51.pdf>`. The
    canonical accessible GIT introduction; covers HM criterion and
    moduli-of-bundles in detail.
  - **Hoskins, V.** (2015), *Moduli Problems and Geometric Invariant
    Theory*, lecture notes (Berlin / Bonn). Freely hosted at
    `<https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf>`.
    Modern GIT lecture notes with explicit worked examples.
  - **Mukai, S.** (2003), *An Introduction to Invariants and
    Moduli*, Cambridge Studies in Advanced Mathematics 81. (No free
    PDF; supplementary reference cited from corpus.)
  - **Schmitt, A.** (2008), *Geometric Invariant Theory and
    Decorated Principal Bundles*, EMS Zürich Lectures in Advanced
    Mathematics. Modern reference for GIT applied to decorated
    bundles.
  - **Thomas, R. P.** (2006), *Notes on GIT and Symplectic Reduction
    for Bundles and Varieties*, Surveys in Differential Geometry X,
    221–273. Freely available preprint
    `<https://arxiv.org/abs/math/0512411>`. The standard modern
    bridge between GIT and symplectic reduction.
  - **Wikipedia,** *Geometric invariant theory*. Cross-check for
    chapter-level structure of the 3rd edition.
- **License.** MFK is commercial; cite as Mumford, Fogarty, Kirwan,
  *Geometric Invariant Theory*, 3rd enlarged ed., Springer 1994.
  Newstead 1978 is freely hosted by TIFR; cite as Newstead,
  *Lectures on Introduction to Moduli Problems and Orbit Spaces*,
  TIFR Lectures on Mathematics 51, Springer 1978. Hoskins 2015 is
  author-hosted lecture notes.
- **Local copy target.** Once acquired (PDF or scan), add to
  `reference/textbooks-extra/` as
  `Mumford-Fogarty-Kirwan-GeometricInvariantTheory-3rdEd-1994.pdf`
  to mirror the corpus pattern. Pre-acquisition: add
  `Newstead-LecturesOnModuliProblemsAndOrbitSpaces-TIFR1978.pdf`
  and `Hoskins-ModuliProblemsAndGIT-2015-LectureNotes.pdf` as
  freely-available proxies.

---

**Status:** REDUCED audit (no PDF). Punch-list: 5 P1 + 3 P2 + 3 P3 +
2 P4 = 13 candidate units. Conversion to a full P1 audit deferred
until MFK PDF acquired.
