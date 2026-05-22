# Harris, Morrison — *Moduli of Curves* (Fast Track 3.30) — Audit + Gap Plan

**Book:** Joe Harris and Ian Morrison, *Moduli of Curves*, Graduate Texts in
Mathematics 187, Springer-Verlag 1998, xiv + 366 pp. ISBN 978-0-387-98429-2
/ 978-0-387-98438-4. Hereafter **HM**.

**Fast Track entry:** 3.30, paired with Hartshorne (3.21), ACGH-I (3.22),
and Mumford-Fogarty-Kirwan *GIT* (3.31) as the algebraic-geometry curves /
moduli quartet. HM is the canonical textbook on the **moduli space
$\mathcal{M}_g$ itself** — the space whose *points* are isomorphism classes
of smooth projective genus-$g$ curves and whose **Deligne-Mumford
compactification** $\overline{\mathcal{M}}_g$ adds stable curves with at-
worst-nodal singularities. Where ACGH-I (FT 3.22, audited Cycle 7) studies
linear systems and Brill-Noether theory on a *fixed* curve, and MFK (FT
3.31, audited Cycle 8) is the abstract quotient framework, **HM is the
book on the moduli space itself, its boundary, its tautological classes,
and its birational geometry**. The book working algebraic geometers cite
when they say "by Harris-Morrison Ch. 6" or "the $3\lambda - \delta$
slope inequality" or "the Mumford relation."

**PDF availability.** No author-hosted PDF (commercial Springer GTM, still
in print). **Not present** in `reference/textbooks-extra/`,
`reference/fasttrack-texts/`, or
`reference/book-collection/free-downloads/` (the last contains only
Freed's notes). Springer SpringerLink (`link.springer.com/book/10.1007/b98867`)
gated behind institutional auth; Anna's Archive not reached within the
time budget. **This audit is REDUCED** — produced from HM's standard
chapter structure as documented across the algebraic-geometry community
(MathSciNet review by Vakil 1999, Vakil's own *Moduli of Curves*
Park-City lectures, Mumford 1983 *Towards an enumerative geometry of the
moduli space of curves*, Deligne-Mumford 1969 *Publ. Math. IHES* 36,
ACGH-II = Arbarello-Cornalba-Griffiths 2011 *Geometry of Algebraic
Curves II* GMW 268, the Faber-Pandharipande tautological-relations
literature, and Hain's *Lectures on Moduli Spaces of Riemann Surfaces*
PCMI 2011), together with the Babel Bible's already-shipped
`04.10.01-moduli-of-curves` and `06.08.03-moduli-of-riemann-surfaces`
units (which **already name-check every major HM topic**). Mark as
**REDUCED** in the audit log; a full P1 inventory at line-number
granularity is deferred until a PDF is acquired.

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite per
orchestration protocol). Punch-list of new units + deepenings to reach
the equivalence threshold
(`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Mirrors the structure
of `brown-higgins-sivera-nonabelian-algebraic-topology.md`,
`griffiths-harris-geometry-algebraic-curves.md`, and
`mumford-geometric-invariant-theory.md`.

The audit surface is **highly focused** — Babel Bible's
`04-algebraic-geometry/10-moduli/` chapter ships only two units
(`04.10.01-moduli-of-curves`, `04.10.02-git`), and
`06-riemann-surfaces/08-vhs/06.08.03-moduli-of-riemann-surfaces.md` mirrors
the `04.10.01` content from the Riemann-surfaces side. **Both `04.10.01`
and `06.08.03` are *substantive* units that name-check `$\psi$`, `$\kappa$`,
`$\lambda$`, the Hodge bundle, Deligne-Mumford compactification, stable
curves, Mumford conjecture, Madsen-Weiss, Witten-Kontsevich, and the
$3g - 3$ dimension count.** *Every single one of those topics is sketched,
not unit-anchored.* The tautological-ring machinery (Mumford 1983 $\kappa$
classes, Mumford's relations, Faber-Pandharipande / Pixton relations),
the boundary-divisor / dual-graph stratification of
$\overline{\mathcal{M}}_g$, deformation theory of nodal curves, Hurwitz
numbers and admissible covers, the Harris-Mumford "of general type for
$g \geq 24$" theorem, the $3\lambda - \delta$ slope inequalities, and
the modern $\overline{\mathcal{M}}_{g, n}$ marked-point story are
**load-bearing for the existing units but have no anchor units of their
own**. This is the largest single-book gap in the algebraic-geometry
chapter.

**Coordination with Mumford GIT (Cycle 8).** Substantial overlap on the
Hilbert-scheme / tri-canonical / GIT-quotient construction of
$\mathcal{M}_g$ (HM Ch. 4, MFK Ch. 5). The Cycle-8 punch-list at
`plans/fasttrack/mumford-geometric-invariant-theory.md` already proposes
`04.10.05` *Hilbert scheme* and `04.10.07` *reductive groups / finite
generation*; **these are upstream prerequisites for the HM punch-list and
must not be double-counted**. HM-specific units below assume those ship
first and pick up at deformation-theory of curves / boundary divisors /
tautological classes, which are *curve-specific* material that MFK does
not cover.

---

## §1 What HM is for

HM is the canonical textbook on the **moduli space of curves
$\mathcal{M}_g$ and its Deligne-Mumford compactification
$\overline{\mathcal{M}}_g$, treated as geometric objects whose internal
structure (boundary, tautological classes, birational invariants,
deformation theory) one wants to compute and use**. Where Mumford-Fogarty-
Kirwan *GIT* (FT 3.31) gives the *abstract* quotient-construction
machinery, and ACGH-I (FT 3.22) gives the *fixed-curve* Brill-Noether and
Abel-Jacobi machinery, **HM is the book on the moduli space itself as
the central object of study** — written by working algebraic geometers
for working algebraic geometers, with extensive low-genus
($\mathcal{M}_2$, $\mathcal{M}_3$) hands-on calculations and a clear
problem-set-driven pedagogical style. The book that **made
$\overline{\mathcal{M}}_g$ accessible** to a generation of algebraic
geometers and bridged the 1969 Deligne-Mumford construction to the
1990s tautological-ring boom.

Six chapters, with the first half developing the geometry of curves and
the second half developing the moduli space.

**Chapter 1 — Parameter spaces: constructions and examples.** Hilbert
schemes, Chow varieties, parameter-space constructions in general
(Mumford's pluri-canonical for curves, Grothendieck's $\mathrm{Quot}$
and $\mathrm{Hilb}$). Motivating low-dimensional examples: the modular
curve $\overline{\mathcal{M}}_{1, 1}$ as $\mathbb{H}/\mathrm{SL}_2(\mathbb{Z})$,
the moduli of hyperelliptic curves as $\mathrm{Sym}^{2g + 2}(\mathbb{P}^1)/
\mathrm{PGL}_2$, the $\mathcal{M}_2$ explicit model. Sets the framing
question: what does it mean for a space to "be" a moduli space (fine vs
coarse vs stack).

**Chapter 2 — Basic facts about moduli spaces of curves.** $\mathcal{M}_g$
as a coarse moduli space; the moduli functor; representability failure
because of automorphisms; introduction to the Deligne-Mumford stack
$\overline{\mathcal{M}}_g$; the $3g - 3$ dimension count via deformation
theory (Kodaira-Spencer, $H^1(C; T_C)$); the Teichmüller-theoretic and
Hodge-theoretic alternative constructions; the universal property
sketches; smoothness of the stack and how it interacts with the
non-smoothness of the coarse space along the hyperelliptic locus.

**Chapter 3 — Techniques.** Deformation theory of smooth and nodal
curves: $\mathrm{Ext}^1(\Omega_C, \mathcal{O}_C)$ as the tangent space
to deformations; the local-to-global spectral sequence; deformations of
nodes vs of smoothings; logarithmic deformation theory; Schlessinger's
deformation framework. The technical chapter underpinning the rest of
the book.

**Chapter 4 — Construction of $\overline{\mathcal{M}}_g$.** The
tri-canonical embedding, Hilbert scheme, $\mathrm{PGL}$ quotient via GIT
(citing Mumford 1965); the Deligne-Mumford 1969 stable-reduction
construction; stable curves and their automorphism groups; the boundary
$\partial\overline{\mathcal{M}}_g = \overline{\mathcal{M}}_g \setminus
\mathcal{M}_g$ as a normal-crossing divisor with components
$\Delta_0, \Delta_1, \ldots, \Delta_{\lfloor g/2 \rfloor}$; the dual
graph of a stable curve as the combinatorial stratification
device for boundary strata; irreducibility of $\overline{\mathcal{M}}_g$
(Deligne-Mumford).

**Chapter 5 — Limit linear series and Brill-Noether theory.** Eisenbud-
Harris 1986 *limit linear series* — extending Brill-Noether existence /
non-emptiness theorems to nodal / boundary curves via degenerations.
Brill-Noether-loci $W^r_d$ as moduli problems over $\overline{\mathcal{M}}_g$.
Connects HM directly to ACGH-I (which does the fixed-curve story).

**Chapter 6 — Geometry of moduli spaces: selected topics.** The
**tautological classes**: $\psi_i = c_1(\mathbb{L}_i)$ on
$\overline{\mathcal{M}}_{g, n}$, $\kappa_a = \pi_*\psi^{a + 1}$ (Mumford-
Morita-Miller), $\lambda_a = c_a(\mathbb{E})$ (Hodge bundle), boundary
classes $\delta_i$. **Mumford's GRR relations** (1983 *Towards an
enumerative geometry*): the explicit formula for $\lambda$ in terms of
$\kappa_1$ and $\delta$ via Grothendieck-Riemann-Roch applied to the
universal curve. The slope inequality $s(\overline{\mathcal{M}}_g) \leq
\frac{12}{g + 1}$ and the **Harris-Mumford 1982** theorem
($\overline{\mathcal{M}}_g$ is of general type for $g \geq 24$).
Pointers forward to Mumford's conjecture (Madsen-Weiss 2007) and
Witten-Kontsevich (1992) intersection numbers.

Distinctive contributions of HM, in roughly the order they are developed:

1. **The moduli space as a geometric object to compute with**, not just
   to construct. HM's signature pedagogical move.
2. **Hands-on $\mathcal{M}_2$, $\mathcal{M}_3$ models** via hyperelliptic
   and plane-quartic descriptions, with explicit Igusa / Clebsch
   invariants for $\mathcal{M}_2$ and the Aronhold model for
   $\mathcal{M}_3$.
3. **Deformation theory of nodal curves** as the technical foundation.
   $\mathrm{Ext}^1(\Omega_C, \mathcal{O}_C)$, smoothings of nodes, the
   versal deformation space, Schlessinger.
4. **The dual graph stratification** of $\partial\overline{\mathcal{M}}_g$,
   making the boundary explicitly combinatorial and computable.
5. **Tautological classes $\psi, \kappa, \lambda$ and the Hodge bundle
   $\mathbb{E}$** treated as concrete computable invariants, with
   explicit Chern-class computations and the **Mumford relation**
   $12\lambda = \kappa_1 + \delta$ on $\overline{\mathcal{M}}_g$ from
   Mumford 1983.
6. **Limit linear series** (Eisenbud-Harris) bridging fixed-curve
   Brill-Noether (ACGH-I) to families over $\overline{\mathcal{M}}_g$.
7. **The Harris-Mumford / Eisenbud-Harris slope inequalities** and the
   **$g \geq 24$ general-type theorem**: birational classification of
   $\overline{\mathcal{M}}_g$ via canonical-class positivity of
   $K_{\overline{\mathcal{M}}_g} = 13\lambda - 2\delta$.
8. **Hurwitz numbers and admissible covers**: counting branched covers
   $C \to \mathbb{P}^1$ with prescribed ramification, via the
   Harris-Mumford compactification of the Hurwitz scheme by *admissible
   covers*. Connects to the ELSV formula (1999) and Witten-Kontsevich.
9. **Pointers to the modern theory**: Mumford's conjecture / Madsen-
   Weiss, Witten-Kontsevich KdV hierarchy, Faber-Pandharipande
   tautological-ring conjectures, the moduli stack vs coarse space
   distinction.

HM is **not** a first introduction to algebraic geometry, scheme theory,
or moduli theory. It assumes Hartshorne-level scheme theory (Ch. II–III),
basic curve theory (Riemann-Roch, canonical embedding, hyperelliptic
involution), and Mumford-level GIT (the construction of $\mathcal{M}_g$
by tri-canonical Hilbert + $\mathrm{PGL}$ quotient is stated, not
re-proved). It is the canonical entry point to moduli of curves in the
algebraic-geometric tradition; the parallel topological / mapping-class-
group tradition (Farb-Margalit, Hain PCMI 2011, Madsen-Weiss) is
equivalent in target but very different in style. The Fast Track explicitly
chooses HM, with mapping-class-group pointers as a Master-tier deepening.

**Peer / originator literature cited.**

- **Mumford, D.** (1965), *Geometric Invariant Theory*, Springer
  Ergebnisse 34 (3rd ed. with Fogarty & Kirwan 1994). The construction
  of $\mathcal{M}_g$ as a quasi-projective scheme via tri-canonical GIT.
  Fast Track 3.31, audited Cycle 8 at
  `plans/fasttrack/mumford-geometric-invariant-theory.md`.
- **Deligne, P. & Mumford, D.** (1969), *The irreducibility of the
  space of curves of given genus*, Publ. Math. IHES 36, 75–109. The
  stable-curves compactification $\overline{\mathcal{M}}_g$ and the
  proof of geometric irreducibility in arbitrary characteristic.
- **Mumford, D.** (1983), *Towards an enumerative geometry of the
  moduli space of curves*, in *Arithmetic and Geometry II*, Birkhäuser,
  271–328. Originating the tautological ring and the
  $\psi, \kappa, \lambda$ classes, and the Grothendieck-Riemann-Roch
  derivation of Mumford's relation $12\lambda = \kappa_1 + \delta$.
- **Arbarello, E., Cornalba, M., Griffiths, P. & Harris, J.** (1985),
  *Geometry of Algebraic Curves I*, Springer Grundlehren 267. Fast
  Track 3.22, audited Cycle 7 at
  `plans/fasttrack/griffiths-harris-geometry-algebraic-curves.md`.
  Fixed-curve Brill-Noether and Abel-Jacobi machinery; HM extends to
  families over $\overline{\mathcal{M}}_g$.
- **Arbarello, E., Cornalba, M. & Griffiths, P.** (2011), *Geometry of
  Algebraic Curves II*, Springer Grundlehren 268. The moduli-theoretic
  companion volume; mapping class group, Teichmüller, period mapping,
  tautological intersection theory. Not yet audited; queued behind HM.
- **Harris, J. & Mumford, D.** (1982), *On the Kodaira dimension of the
  moduli space of curves*, Invent. Math. 67, 23–86. Originating the
  "of general type for $g \geq 24$" theorem.
- **Vakil, R.** (2003), *The moduli space of curves and its tautological
  ring*, Notices Amer. Math. Soc. 50, 647–658. Free survey at
  `<https://math.stanford.edu/~vakil/files/curvesNotices.pdf>`. The
  best concise modern introduction to HM-style material.
- **Vakil, R.** (2017), *Foundations of Algebraic Geometry*. Free at
  `<https://math.stanford.edu/~vakil/216blog/>`. The accessible
  scheme-theoretic prereq for HM; chapter on moduli of curves is
  effectively a digest of HM Ch. 2–4.

---

## §2 Coverage table (Babel Bible vs HM)

Cross-referenced against the current corpus.
✓ = covered, △ = partial / mentioned-but-not-anchored, ✗ = not covered.

| HM topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Moduli space $\mathcal{M}_g$ as coarse moduli (functor + GIT) | `04.10.01-moduli-of-curves`, `06.08.03-moduli-of-riemann-surfaces` | ✓ | Both units are substantive (master-tier). Riemann's $3g - 3$ count covered. |
| $\mathcal{M}_g$ as Deligne-Mumford *stack* | `04.10.01` (caveat box), `06.08.03` (master tier) | △ | Mentioned; **no dedicated unit on Deligne-Mumford stacks**. Foundational gap. |
| Tri-canonical Hilbert / $\mathrm{PGL}$-quotient construction | `04.10.01` (proof outline), `04.10.02-git` (referenced) | △ | The proof outline in `04.10.01` is the entire treatment; the Hilbert scheme itself has no anchor (already on the Cycle-8 MFK punch-list as `04.10.05`). |
| Deformation theory of smooth curves; $H^1(C; T_C)$ tangent space | — | ✗ | **Gap.** Mentioned in passing in `04.10.01` proof outline. Foundational for HM Ch. 3. Would live in `04.10` or `04-algebraic-geometry/02-schemes/`. |
| Deformation theory of nodal curves; smoothing nodes | — | ✗ | **Gap.** HM Ch. 3 core content; needed for any boundary-divisor / stable-reduction treatment. |
| Schlessinger's criteria; versal deformations | — | ✗ | **Gap.** Foundational deformation-theory machinery; broader than HM but anchored here. |
| Deligne-Mumford stable-curves compactification $\overline{\mathcal{M}}_g$ | `04.10.01` (master tier), `06.08.03` (master tier) | △ | Stated, definition given; **no proof of properness / projectivity, no anchor on stable-reduction theorem**. |
| Stable curve: nodal singularities, finite $\mathrm{Aut}$, $\omega_C$ ample | `04.10.01` (master tier) | △ | Defined in passing; deserves dedicated unit. |
| Boundary divisors $\Delta_0, \Delta_1, \ldots, \Delta_{\lfloor g/2 \rfloor}$ | `04.10.01` (master tier paragraph) | △ | Listed but not unfolded; no dimension / glueing / monodromy computation. |
| Dual graph of a stable curve; boundary stratification | — | ✗ | **Gap.** Foundational combinatorial device for $\partial\overline{\mathcal{M}}_g$. |
| Irreducibility of $\mathcal{M}_g$ (Deligne-Mumford 1969) | `06.08.03` (cited) | △ | Cited in references; **no anchor unit stating the theorem with proof sketch**. |
| Hodge bundle $\mathbb{E} = \pi_*\omega_{\mathcal{C}/\mathcal{M}}$ | `04.10.01` (Exercise 4 with proof) | △ | Defined in an exercise; deserves its own master-tier unit (Hodge bundle is the central rank-$g$ vector bundle on $\overline{\mathcal{M}}_g$). |
| $\psi$-classes $\psi_i = c_1(\mathbb{L}_i)$ on $\overline{\mathcal{M}}_{g, n}$ | `04.10.01` (master-tier paragraph) | △ | Named, not anchored. **Load-bearing for Witten-Kontsevich exercise in `04.10.01`.** |
| $\kappa$-classes $\kappa_a = \pi_*\psi^{a + 1}$ (Mumford-Morita-Miller) | `04.10.01` (master-tier paragraph) | △ | Named, not anchored. **Load-bearing for Mumford-conjecture exercise in `04.10.01`.** |
| $\lambda$-classes $\lambda_a = c_a(\mathbb{E})$ (Hodge classes) | `04.10.01` (master-tier paragraph) | △ | Named, not anchored. **Load-bearing for the Picard-group statement in `04.10.01`.** |
| Mumford's relation $12\lambda = \kappa_1 + \delta$ | — | ✗ | **Gap.** Mumford 1983 GRR derivation; foundational tautological identity. |
| Tautological ring $R^*(\overline{\mathcal{M}}_{g, n})$ | `04.10.01` (master tier, Advanced Results) | △ | Defined in one paragraph; deserves a dedicated unit with Faber-Pandharipande / Pixton-relations pointer. |
| Faber's intersection conjecture; Gorenstein-with-explicit-socle | `04.10.01` (master tier paragraph) | △ | Mentioned; pointer-unit candidate. |
| Pixton's tautological relations | `04.10.01` (master tier paragraph) | △ | Mentioned; pointer-unit candidate. |
| Marked-point moduli $\overline{\mathcal{M}}_{g, n}$; $\dim = 3g - 3 + n$ | `04.10.01` (formal-definition paragraph) | △ | Dimension formula stated, no unit dedicated to the marked-point construction or its boundary / forgetful / gluing morphisms. |
| Forgetful morphism $\pi : \overline{\mathcal{M}}_{g, n + 1} \to \overline{\mathcal{M}}_{g, n}$ | — | ✗ | **Gap.** Foundational structural morphism; used to define $\kappa$ classes. |
| Gluing / clutching morphisms $\overline{\mathcal{M}}_{g_1, n_1 + 1} \times \overline{\mathcal{M}}_{g_2, n_2 + 1} \to \overline{\mathcal{M}}_{g_1 + g_2, n_1 + n_2}$ | — | ✗ | **Gap.** The morphisms defining the boundary strata. |
| Limit linear series (Eisenbud-Harris 1986) | — | ✗ | **Gap.** HM Ch. 5 core content; bridges ACGH-I Brill-Noether to families. Also on ACGH-I punch-list. |
| Brill-Noether loci $W^r_d$ over $\overline{\mathcal{M}}_g$ | — | ✗ | **Gap.** On ACGH-I punch-list as well; coordinate. |
| Harris-Mumford 1982: $\overline{\mathcal{M}}_g$ of general type for $g \geq 24$ | `04.10.01` (master tier paragraph) | △ | Mentioned; no anchor with $K = 13\lambda - 2\delta$ canonical-class computation. |
| Slope inequality / slope of $\overline{\mathcal{M}}_g$ | `04.10.01` (master tier paragraph) | △ | Mentioned via Harris-Mumford; no anchor. |
| Hurwitz numbers; Hurwitz scheme; admissible covers | `04.04.02-hurwitz-formula` (Riemann-Hurwitz only) | △ | **Riemann-Hurwitz formula** covered; **Hurwitz numbers** (count of branched covers) and the **admissible-covers compactification** are gaps. |
| Kontsevich's ribbon graphs / matrix Airy function | `04.10.01` (Exercise 7 sketch) | △ | Stated as theorem statement; no anchor on the ribbon-graph / matrix-model proof technique. |
| Witten conjecture $F$ satisfies KdV | `04.10.01` (Exercise 7) | △ | Statement only; no anchor unit. |
| Mumford conjecture $\lim H^*(\mathcal{M}_g) = \mathbb{Q}[\kappa_1, \kappa_2, \ldots]$ | `04.10.01` (Exercise 6) | △ | Statement + Madsen-Weiss outline; no anchor unit. |
| Madsen-Weiss theorem (stable mapping class group ≃ $\Omega^\infty \mathbf{MTSO}(2)$) | `04.10.01` (Exercise 6 sketch) | △ | Stated; no anchor — substantial topology prereq (Galatius-Madsen-Tillmann-Weiss). |
| ELSV formula (Hurwitz numbers ↔ Hodge-integrals) | — | ✗ | **Gap.** Ekedahl-Lando-Shapiro-Vainshtein 2001; not yet on any punch-list. |
| Igusa / Clebsch invariants for $\mathcal{M}_2$ | `04.10.01` (Exercise 5 sketch) | △ | Hyperelliptic-quotient construction sketched; no explicit Igusa-invariant computation. |
| Plane-quartic / Aronhold model for $\mathcal{M}_3$ | — | ✗ | **Gap.** HM's signature low-genus example. |
| Teichmüller space $\mathcal{T}_g$; mapping class group $\mathrm{Mod}_g$ | `06.08.03` (master tier paragraph) | △ | Mentioned; no anchor. Cross-reference to Farb-Margalit (not in Fast Track at present). |
| Moduli of abelian varieties $\mathcal{A}_g$; Torelli morphism $\mathcal{M}_g \to \mathcal{A}_g$ | `06.06.03-jacobian-variety`, `06.06.08-schottky-problem` | △ | Jacobian unit covers single-curve case; **Torelli morphism + Torelli theorem** has no anchor unit. Schottky problem unit references it. |
| Modular forms ↔ $\overline{\mathcal{M}}_{1, 1}$ | `04.10.01` (master tier paragraph) | △ | Mentioned; pointer to number theory / Wiles. |
| Mirzakhani's hyperbolic-geometry proof of Witten-Kontsevich | `04.10.01` (master tier paragraph) | △ | Mentioned; pointer only. |

**Aggregate coverage estimate:** Two **substantive** units
(`04.10.01-moduli-of-curves`, `06.08.03-moduli-of-riemann-surfaces`)
already exist and **name-check** essentially every HM topic. But
**anchor-level** coverage of HM-distinctive material (deformation theory,
boundary divisors, dual graphs, tautological classes, Mumford's relation,
limit linear series, Harris-Mumford general-type theorem, Hurwitz
numbers, admissible covers) is roughly **5%** — only the foundational
$\mathcal{M}_g$ definition + worked exercises are anchored. **The existing
`04.10.01` unit is doing the work of 8–10 units**; the punch-list extracts
the silently-load-bearing pieces into dedicated anchor units. **This is
the largest single-book gap in the algebraic-geometry chapter** and
silently undermines the existing units' citations.

**Critically: the Mumford-conjecture exercise (`04.10.01` Ex. 6), the
Witten-Kontsevich exercise (Ex. 7), and the Hodge-bundle exercise
(Ex. 4) all reference $\psi$, $\kappa$, $\lambda$ classes as named
objects, but those classes have no anchor units.** Any reader following
the exercise chain will hit a dead-end. Same for the Picard-group
statement in the master-tier prose. **Closing this gap is a corpus-
integrity priority, not just an FT-equivalence priority.**

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — soft prereqs shared with Mumford GIT plan.** The Cycle-8
MFK punch-list (`plans/fasttrack/mumford-geometric-invariant-theory.md`
§3) already proposes:

- `04.10.05` Hilbert scheme $\mathrm{Hilb}^P_X$ (foundational input).
- `04.10.07` Reductive groups + finite generation.

These are **shared prerequisites** with the HM punch-list and must ship
once, not twice. The HM-specific units below assume they exist or are
queued.

**Priority 1 — high-leverage, captures HM's central content as dedicated
anchor units that are silently load-bearing for `04.10.01` and
`06.08.03`:**

1. **`04.10.20` Deformation theory of smooth curves.** Tangent space
   $T_{[C]}\mathcal{M}_g = H^1(C; T_C) = \mathrm{Ext}^1(\Omega_C,
   \mathcal{O}_C)$; obstruction in $H^2(C; T_C) = 0$ for curves;
   Kodaira-Spencer map; $\dim H^1(C; T_C) = 3g - 3$ via Riemann-Roch
   on $T_C = \omega_C^{-1}$. Worked example: deformation space of an
   elliptic curve is 1-dimensional. Schlessinger's criteria stated.
   HM Ch. 3 anchor; Kodaira-Spencer 1958 J. Math. Mech. 8 originator.
   Three-tier, ~2000 words. **Critical for the $3g - 3$ dimension
   count to be more than a slogan in `04.10.01`.**
2. **`04.10.21` Deformation theory of nodal curves; smoothings of
   nodes.** Local deformation of a node $xy = 0$ has 1-parameter
   smoothing $xy = t$; global picture via $\mathrm{Ext}^1$;
   logarithmic deformation theory for stable curves;
   $\dim T_{[C_0]}\overline{\mathcal{M}}_g = 3g - 3$ holds at nodal
   curves with the node-smoothing parameters; the boundary divisor
   $\Delta_i$ as the locus where one node persists. HM Ch. 3
   anchor; Deligne-Mumford 1969 *Publ. Math. IHES* 36 originator
   citation. Three-tier, ~2200 words. **Critical for the
   $\overline{\mathcal{M}}_g$ master-tier prose in `04.10.01` to be
   more than a description.**
3. **`04.10.22` Stable curve and Deligne-Mumford stability.**
   Definition (nodal, finite $\mathrm{Aut}$, $\omega_C$ ample;
   equivalently every smooth rational component meets the rest in
   $\geq 3$ points); dual graph; arithmetic genus; the three
   equivalent characterisations; examples and non-examples; the
   *moduli stack* $\overline{\mathcal{M}}_g$ as a Deligne-Mumford
   stack. HM Ch. 4 + Deligne-Mumford 1969 anchor. Three-tier,
   ~1800 words. **Anchor for stable-curve content that `04.10.01`
   currently states inline.**
4. **`04.10.23` Boundary divisors $\Delta_i$ and the dual-graph
   stratification of $\partial\overline{\mathcal{M}}_g$.** The
   irreducible boundary components $\Delta_0$ (irreducible nodal
   genus $g - 1$) and $\Delta_i$ ($1 \leq i \leq g/2$, two
   components of genera $i$ and $g - i$ glued at a node); the
   normal-crossing structure; the dual graph as the combinatorial
   index of boundary strata of $\overline{\mathcal{M}}_g$. The
   gluing morphisms $\xi_i : \overline{\mathcal{M}}_{i, 1} \times
   \overline{\mathcal{M}}_{g - i, 1} \to \Delta_i \subset
   \overline{\mathcal{M}}_g$. HM Ch. 4 anchor. Three-tier,
   ~2000 words.
5. **`04.10.24` Tautological classes I: $\psi$-classes on
   $\overline{\mathcal{M}}_{g, n}$.** Definition $\psi_i = c_1
   (\mathbb{L}_i)$, where $\mathbb{L}_i$ is the cotangent line at
   the $i$-th marked point; behaviour under forgetful and gluing
   morphisms; the **string equation** and **dilaton equation**;
   $\psi$-class intersection numbers and the Witten-Kontsevich
   generating function (pointer to KdV). Mumford 1983 +
   Witten 1990 originators. Three-tier, ~2000 words.
6. **`04.10.25` Tautological classes II: $\kappa$- and $\lambda$-
   classes; Hodge bundle.** $\kappa_a = \pi_*(\psi_{n + 1}^{a + 1})$
   (Mumford-Morita-Miller); $\lambda_a = c_a(\mathbb{E})$ where
   $\mathbb{E} = \pi_*\omega_{\mathcal{C}/\mathcal{M}}$ is the
   Hodge bundle; **Mumford's relation $12\lambda = \kappa_1 +
   \delta$ on $\overline{\mathcal{M}}_g$** via GRR applied to
   $\omega_{\mathcal{C}/\mathcal{M}}$; the tautological ring
   $R^*(\overline{\mathcal{M}}_{g, n}) \subset \mathrm{CH}^*$ as
   the subring generated by these classes plus boundary classes.
   Mumford 1983 originator. Three-tier, ~2200 words. **Closes the
   $\kappa, \lambda$ gap that `04.10.01` opens but does not fill.**

**Priority 2 — important second-order content (forgetful / gluing
morphisms, Mumford relations, Harris-Mumford):**

7. **`04.10.26` Forgetful and gluing morphisms on $\overline{\mathcal{M}}_{g, n}$.**
   $\pi_i : \overline{\mathcal{M}}_{g, n + 1} \to
   \overline{\mathcal{M}}_{g, n}$ forgetting the $i$-th marked
   point; the universal curve $\overline{\mathcal{C}}_{g, n} \cong
   \overline{\mathcal{M}}_{g, n + 1}$ via stabilisation; gluing
   morphisms producing boundary divisors; behaviour of $\psi$ /
   $\kappa$ / $\lambda$ classes under pullback. HM Ch. 6 anchor.
   Intermediate + Master tier, ~1500 words.
8. **`04.10.27` Mumford-Morita-Miller relations and the tautological
   ring.** Beyond Mumford's $12\lambda = \kappa_1 + \delta$:
   Faber-Pandharipande 1999 conjecture (Gorenstein with explicit
   socle); Pixton's relations 2012 (conjectural complete set);
   Janda 2018 (proof of $3$-spin / Pixton-DR side); the *DR cycles*
   = double-ramification cycles. Master-tier-only, ~1800 words.
9. **`04.10.28` Harris-Mumford theorem: $\overline{\mathcal{M}}_g$
   is of general type for $g \geq 24$.** Canonical class
   $K_{\overline{\mathcal{M}}_g} = 13\lambda - 2\delta$ via the
   adjunction-type formula and Mumford's relation; positivity for
   $g \geq 24$ via slope inequalities on Brill-Noether divisors;
   subsequent improvements (Eisenbud-Harris-Mumford,
   Farkas $g = 22, 23$). Harris-Mumford 1982 Invent. Math. 67;
   Farkas 2010s for boundary cases. Master-tier-only, ~1800 words.
10. **`04.10.29` Limit linear series (Eisenbud-Harris).** Extending
    Brill-Noether $W^r_d$ to nodal / boundary curves;
    *limit-linear-series* on chains of components; smoothability
    criteria; applications to families of curves. **Coordinate
    with ACGH-I punch-list** (which proposes a fixed-curve
    Brill-Noether anchor first; HM extends to families). HM Ch. 5
    anchor; Eisenbud-Harris 1986 Invent. Math. 85. Master-tier-only,
    ~1800 words.

**Priority 3 — Hurwitz / admissible covers / explicit-low-genus
(distinctive HM material, master-tier):**

11. **`04.10.30` Hurwitz numbers and the Hurwitz scheme.** Count of
    degree-$d$ branched covers $C \to \mathbb{P}^1$ with prescribed
    ramification profiles; the Hurwitz scheme as a parameter space;
    monodromy / character-theoretic formulas (Burnside, Frobenius);
    connection to symmetric-group representation theory. HM Ch. 1 + 6
    references; ELSV 1999 originator (pointer for the formula).
    Three-tier, ~2000 words. **Bridges to `04.04.02-hurwitz-formula`
    (Riemann-Hurwitz, already shipped) and `07-representation-theory/`.**
12. **`04.10.31` Admissible covers (Harris-Mumford compactification of
    the Hurwitz scheme).** Compactification of the Hurwitz scheme by
    *admissible covers* of nodal curves; the morphism to
    $\overline{\mathcal{M}}_g$; used in the Harris-Mumford 1982
    proof of the general-type theorem. HM Ch. 4 + Harris-Mumford 1982
    anchor. Master-tier-only, ~1500 words.
13. **`04.10.32` ELSV formula: Hurwitz numbers as Hodge integrals.**
    Ekedahl-Lando-Shapiro-Vainshtein 2001 Invent. Math. 146 formula
    expressing simple Hurwitz numbers as integrals of $\lambda$ /
    $\psi$ classes over $\overline{\mathcal{M}}_{g, n}$. Connection
    to Gromov-Witten of $\mathbb{P}^1$; Okounkov-Pandharipande proof
    of Witten via ELSV + matrix models. Master-tier-only, ~1500 words.
14. **`04.10.33` Low-genus models: $\mathcal{M}_2$ (Igusa-Clebsch)
    and $\mathcal{M}_3$ (Aronhold / plane quartic).** Explicit
    Igusa-Clebsch invariants $I_2, I_4, I_6, I_{10}$ giving
    $\mathcal{M}_2$ as a weighted projective variety; the Aronhold
    invariant identifying $\mathcal{M}_3$ with the moduli of
    plane quartics minus the hyperelliptic locus. HM Ch. 1 + 2
    explicit examples. Igusa 1960 Amer. J. Math. 82 originator for
    $\mathcal{M}_2$. Intermediate + Master tier, ~1800 words.

**Priority 4 — modern-research pointer units (Master-only, optional but
high-value):**

15. **`04.10.34` Torelli morphism and Torelli theorem.** The morphism
    $\tau : \mathcal{M}_g \to \mathcal{A}_g$ sending $C \mapsto
    (\mathrm{Jac}(C), \Theta)$; Torelli theorem (1913, rigorous proofs
    by Andreotti 1958, Matsusaka 1958, Weil 1957): $\tau$ is generically
    injective; the Schottky problem (already covered at
    `06.06.08-schottky-problem`). Master-tier pointer; ~1200 words.
16. **`04.10.35` Witten-Kontsevich-Mirzakhani: the KdV hierarchy on
    $\overline{\mathcal{M}}_{g, n}$.** Pointer unit unfolding the
    statement of `04.10.01` Exercise 7. Witten 1990 conjecture;
    Kontsevich 1992 matrix-Airy proof; Mirzakhani 2007 hyperbolic
    proof; Okounkov-Pandharipande proof via ELSV. Master-tier-only;
    ~1500 words. **Closes the dead-end exercise reference in
    `04.10.01`.**
17. **`04.10.36` Mumford's conjecture and the Madsen-Weiss theorem
    (pointer).** Pointer unit unfolding `04.10.01` Exercise 6.
    Stable mapping class group $\Gamma_\infty$; group completion
    $B\Gamma_\infty^+ \simeq \Omega^\infty\mathbf{MTSO}(2)$;
    cohomology calculation giving $\mathbb{Q}[\kappa_1, \kappa_2,
    \ldots]$. Galatius-Madsen-Tillmann-Weiss generalisation.
    Master-tier-only; ~1500 words. **Significant topology prereq
    (cobordism categories) — flag for Cycle-coordination with the
    topology track.**

---

## §4 Implementation sketch (P3 → P4)

For a full HM coverage pass, items 1–6 are the minimum FT-equivalence
set (and the **corpus-integrity** minimum, closing the silently load-
bearing dead-end references in `04.10.01` and `06.08.03`). Realistic
production estimate (mirroring the algebraic-geometry batches at
`04.10.01-moduli-of-curves`, `04.10.02-git`, and the `04.04` Riemann-
Roch units):

- ~4 hours per priority-1 unit (heavy on technical statements + worked
  computations; master tier requires careful $\mathrm{Ext}^1$ /
  GRR / Chern-class / Mumford-relation machinery, citation discipline
  for originator prose, and consistency-checking against the existing
  `04.10.01` and `06.08.03` units).
- 6 priority-1 units × ~4 hours = ~24 hours of focused production.
- 4 priority-2 units × ~3.25 hours = ~13 hours.
- 4 priority-3 units × ~3 hours = ~12 hours.
- 3 priority-4 pointer units × ~2 hours = ~6 hours.
- **Total ~55 hours** for a complete pass; **~24 hours** for the
  FT-equivalence + corpus-integrity minimum. Fits a focused 6–7 day
  window.

**Originator-prose target.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, units 2, 3, 4, 6, 9, 11
(nodal deformation, stable curves, boundary divisors, $\kappa$-classes /
Mumford relation, Harris-Mumford general-type, Hurwitz numbers) should
carry originator-prose treatment citing:

- **Deligne, P. & Mumford, D.** (1969), *The irreducibility of the
  space of curves of given genus*, Publ. Math. IHES 36, 75–109 —
  originating $\overline{\mathcal{M}}_g$, the stable-curve definition,
  the stable-reduction theorem.
- **Mumford, D.** (1983), *Towards an enumerative geometry of the
  moduli space of curves*, in *Arithmetic and Geometry II*, Birkhäuser,
  271–328 — originating $\kappa$-classes, the tautological ring,
  Mumford's relation $12\lambda = \kappa_1 + \delta$.
- **Witten, E.** (1990), *Two-dimensional gravity and intersection
  theory on moduli space*, Surveys in Differential Geometry 1,
  243–310 — conjecturing the KdV-hierarchy structure of
  $\psi$-class intersection numbers.
- **Kontsevich, M.** (1992), *Intersection theory on the moduli space
  of curves and the matrix Airy function*, Comm. Math. Phys. 147,
  1–23 — proving Witten via ribbon graphs and matrix integrals.
- **Madsen, I. & Weiss, M.** (2007), *The stable moduli space of
  Riemann surfaces: Mumford's conjecture*, Annals of Math. 165,
  843–941 — proving Mumford's 1983 stable-cohomology conjecture.
- **Harris, J. & Mumford, D.** (1982), *On the Kodaira dimension of
  the moduli space of curves*, Invent. Math. 67, 23–86 — originating
  the general-type theorem for $g \geq 24$.
- **Eisenbud, D. & Harris, J.** (1986), *Limit linear series: basic
  theory*, Invent. Math. 85, 337–371 — originating limit linear
  series.
- **Kodaira, K. & Spencer, D. C.** (1958), *On deformations of complex
  analytic structures I, II*, Annals of Math. 67, 328–401, 403–466
  — originating deformation theory + Kodaira-Spencer map.
- **Ekedahl, T., Lando, S., Shapiro, M. & Vainshtein, A.** (2001),
  *Hurwitz numbers and intersections on moduli spaces of curves*,
  Invent. Math. 146, 297–327 — ELSV formula.

**Notation crosswalk.** HM uses $\mathcal{M}_g$ and $\overline{\mathcal{M}}_g$
for the coarse moduli and its DM compactification, $\mathcal{M}_{g, n}$
and $\overline{\mathcal{M}}_{g, n}$ for the $n$-marked-point versions,
$\Delta_i$ for the boundary divisors, $\lambda$ for the first Chern class
of the Hodge bundle (sometimes $\lambda_1$ for it, $\lambda_a$ for
higher Chern classes), $\kappa_a$ for the Mumford-Morita-Miller classes,
$\psi_i$ for the cotangent classes at marked points, $\delta = \sum\Delta_i$
for the total boundary class, $\mathbb{E}$ for the Hodge bundle. ACGH-II
follows the same convention. The Babel Bible's existing `04.10.01` and
`06.08.03` units already adopt this notation throughout; the new HM
units **must preserve consistency**. Record in a §Notation paragraph of
`04.10.24` and `04.10.25`.

**Coordination notes.**

- **MFK Cycle 8** (`plans/fasttrack/mumford-geometric-invariant-theory.md`):
  the Hilbert-scheme unit `04.10.05` and reductivity unit `04.10.07`
  are shared prerequisites. HM punch-list reserves IDs `04.10.20–36`
  to leave `04.10.03–19` available for the MFK side.
- **ACGH-I Cycle 7** (`plans/fasttrack/griffiths-harris-geometry-
  algebraic-curves.md`): the limit-linear-series unit `04.10.29` here
  builds on the fixed-curve Brill-Noether anchor that ACGH-I punch-list
  proposes. Cross-reference both plans.
- **Riemann-surface side** (`06.08.03-moduli-of-riemann-surfaces.md`):
  the existing unit at `06.08.03` is a Riemann-surface-side mirror of
  `04.10.01`. Treat it as a *complementary* anchor (analytic / Hodge-
  theoretic phrasing) rather than rewriting; lateral connections via
  pass-W.

---

## §5 What this plan does NOT cover

- **Madsen-Weiss proof internals** (`04.10.36` is a pointer-only
  unit). Cobordism categories, scanning, group-completion theorems for
  mapping class group spaces, the Galatius-Madsen-Tillmann-Weiss
  identification — these require a topology-side audit that is not
  yet in the Fast Track queue. Defer.
- **Witten-Kontsevich / Mirzakhani proof internals** (`04.10.35` is a
  pointer-only unit). The matrix-Airy / ribbon-graph proof,
  Mirzakhani's hyperbolic-volume proof, and the Okounkov-Pandharipande
  ELSV-based proof are each substantial papers; only statements and
  high-level outlines are in scope. Defer the proofs.
- **ACGH-II** (Arbarello-Cornalba-Griffiths 2011 GMW 268). This is the
  moduli-theoretic companion to ACGH-I and overlaps HM substantially
  on tautological classes, intersection theory on
  $\overline{\mathcal{M}}_{g, n}$, period mapping, and the Hodge
  bundle. Audited separately if/when needed; coordinate via cross-
  references once both plans are written.
- **Mapping class group $\mathrm{Mod}_g$ machinery** (Dehn-Lickorish
  generators, Birman exact sequence, the Nielsen-Thurston classification,
  Farb-Margalit). Touched in `06.08.03` master-tier prose and
  `04.10.36`; full treatment defers to a future Farb-Margalit Fast
  Track addition (not yet listed).
- **Teichmüller theory** (extremal quasi-conformal maps,
  Teichmüller's existence + uniqueness theorems, Teichmüller geodesics,
  Bers's embedding). Touched in `06.08.03` master-tier; full treatment
  defers to a future Teichmüller-theory audit (Imayoshi-Taniguchi,
  Hubbard, etc.).
- **GIT-side construction details beyond `04.10.01` proof outline.**
  The tri-canonical / Hilbert / $\mathrm{PGL}$ quotient is the
  Mumford GIT plan's responsibility (`04.10.05`); HM Ch. 4 cites the
  construction and develops the *boundary* / *deformation* /
  *tautological-class* picture, which is what the HM punch-list
  anchors.
- **A line-number-level inventory of every named theorem in HM**
  (full P1 audit; deferred — HM is 366 pp. and technically dense,
  requires a PDF to do faithfully).
- **Exercise-pack production from HM's problem sets.** HM exercises
  are extensive and explicit; an exercise-pack pass should follow the
  priority-1 unit batch once PDF acquisition makes line-number citation
  possible.
- **K-stability / KSBA / KSB moduli of higher-dimensional varieties.**
  Out of scope; pointer in `04.10.02-git` master-tier already.

---

## §6 Acceptance criteria for FT equivalence (HM)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- All 6 **priority-1** units have shipped (`04.10.20`–`04.10.25`).
  This closes the central deformation-theory / stable-curve / boundary-
  divisor / tautological-class gap that `04.10.01` and `06.08.03`
  currently catch silently.
- ≥3 of the 4 **priority-2** units have shipped, with Mumford's
  relation `04.10.27` and Harris-Mumford general-type `04.10.28`
  mandatory.
- ≥2 of the 4 **priority-3** units have shipped, with the Hurwitz-
  numbers unit `04.10.30` mandatory (closing the `04.04.02` Riemann-
  Hurwitz → Hurwitz-numbers gap).
- At least 1 of the **priority-4** pointer units has shipped, with
  Witten-Kontsevich `04.10.35` and Mumford-conjecture `04.10.36`
  the priorities (they close the dead-end exercise references in
  `04.10.01`).
- All originator-prose citations (Deligne-Mumford 1969, Mumford 1983,
  Witten 1990, Kontsevich 1992, Madsen-Weiss 2007, Harris-Mumford 1982,
  Eisenbud-Harris 1986, Kodaira-Spencer 1958, ELSV 2001) appear at
  least once in the corpus with at least one unit per originator
  carrying the full prose.
- ≥95% of HM's named theorems in chapters 1–6 map to a Babel Bible unit
  (currently ~5% anchor + ~90% mention; after priority-1 this rises
  to ~55% anchor; priority-1+2 to ~80% anchor; full ≥95% requires
  priority-1+2+3).
- ≥90% of HM's worked low-genus examples ($\mathcal{M}_2$ via
  Igusa-Clebsch, $\mathcal{M}_3$ via Aronhold, $\overline{\mathcal{M}}_2$
  boundary description, $\overline{\mathcal{M}}_3$ canonical-class
  computation) have either a direct unit (Priority-3 `04.10.33`) or a
  worked-example block in a covering unit.
- Notation decisions are recorded in `04.10.24` and `04.10.25`.
- Pass-W weaving connects the new units laterally to
  `04.10.01-moduli-of-curves`, `04.10.02-git`,
  `04.04.01-riemann-roch-curves`, `04.04.02-hurwitz-formula`,
  `04.08.02-canonical-sheaf`, `04.09.01-hodge-decomposition`,
  `06.03.01-riemann-surface`, `06.06.03-jacobian-variety`,
  `06.06.08-schottky-problem`, `06.08.03-moduli-of-riemann-surfaces`,
  and the (existing) Mumford GIT punch-list shared units
  `04.10.05` (Hilbert scheme) and `04.10.07` (reductive groups).
- **Corpus-integrity audit:** every named reference to $\psi$,
  $\kappa$, $\lambda$, Hodge bundle, Deligne-Mumford stack, boundary
  divisor, Mumford conjecture, Madsen-Weiss, Witten-Kontsevich in
  `04.10.01` and `06.08.03` is updated to cite the new anchor unit
  by ID and slug. **No more dead-end name-checks.**

The 6 priority-1 units close the corpus-integrity gap and most of the
FT-equivalence gap. Priority-2 closes Harris-Mumford / tautological-
relations / limit-linear-series. Priority-3 closes Hurwitz / admissible
covers / low-genus examples. Priority-4 closes the dead-end pointer
references in the existing units.

---

## §7 Sourcing

- **Primary text.** Harris, J. & Morrison, I., *Moduli of Curves*,
  Springer GTM 187, 1998, xiv + 366 pp. ISBN 978-0-387-98429-2 /
  978-0-387-98438-4. No author-hosted PDF; commercial Springer GTM,
  still in print. **Acquisition: BUY** (per
  `docs/catalogs/FASTTRACK_BOOKLIST.md` entry 3.30). Pre-acquisition
  the audit is REDUCED; post-acquisition a P1 full audit at line-
  number granularity should follow.
- **Free secondary sources used in this reduced audit.**
  - **Vakil, R.** (2003), *The moduli space of curves and its
    tautological ring*, Notices Amer. Math. Soc. 50, 647–658. Free at
    `<https://math.stanford.edu/~vakil/files/curvesNotices.pdf>`. The
    best concise modern introduction to HM-style material;
    covers $\mathcal{M}_g$, $\overline{\mathcal{M}}_g$, tautological
    ring, Witten-Kontsevich, ELSV, Pixton's relations.
  - **Vakil, R.** (2017), *Foundations of Algebraic Geometry*. Free at
    `<https://math.stanford.edu/~vakil/216blog/>`. Chapter on moduli
    of curves is effectively a digest of HM Ch. 2–4 with the
    scheme-theoretic prerequisites built in. Used as the
    chapter-structure crosscheck for HM Ch. 2–4 in this reduced
    audit.
  - **Hain, R.** (2011), *Lectures on Moduli Spaces of Riemann
    Surfaces*, Park City IAS / PCMI 2011 Lectures. Free preprint
    `<https://arxiv.org/abs/1403.6911>` and at
    `<https://math.duke.edu/~hain/papers/PCMI.pdf>`. Modern lecture-
    notes survey of $\mathcal{M}_g$, $\overline{\mathcal{M}}_g$, the
    tautological ring, mapping class group, Teichmüller, period
    mapping. The Riemann-surface-side companion to HM.
  - **Mumford, D.** (1983), *Towards an enumerative geometry of the
    moduli space of curves*, in *Arithmetic and Geometry II*,
    Birkhäuser, 271–328. The originating paper for tautological
    classes and Mumford's relation; library access typically required.
  - **Deligne, P. & Mumford, D.** (1969), *The irreducibility of the
    space of curves of given genus*, Publ. Math. IHES 36, 75–109.
    Free at `<http://www.numdam.org/item/PMIHES_1969__36__75_0/>`.
    The originating compactification paper.
  - **Faber, C. & Pandharipande, R.** (2000), *Logarithmic series and
    Hodge integrals in the tautological ring*, Michigan Math. J. 48,
    215–252; and subsequent papers in the Faber-Pandharipande series.
    Free arXiv preprints.
  - **Cornalba, M. & Harris, J.** (1988), *Divisor classes associated
    to families of stable varieties*, Ann. Sci. ENS 21, 455–475. Free
    at numdam.org. The slope-inequality calibration paper.
  - **Arbarello, E., Cornalba, M. & Griffiths, P.** (2011), *Geometry
    of Algebraic Curves II*, Springer GMW 268. **Same status as HM:
    commercial Springer text, no free PDF**, used here only via its
    standard citation pattern in the secondary literature. Will be
    audited separately.
- **License.** HM is commercial; cite as Harris, J. & Morrison, I.,
  *Moduli of Curves*, Springer GTM 187, 1998. Pre-acquisition the
  audit relies on the free Vakil / Hain / numdam sources above plus
  the standing citations in `04.10.01-moduli-of-curves` and
  `06.08.03-moduli-of-riemann-surfaces`.
- **Local copy.** Once acquired, add to `reference/textbooks-extra/` as
  `Harris-Morrison-ModuliOfCurves.pdf` to mirror the pattern of other
  commercial Fast Track texts; promote to `reference/fasttrack-texts/`
  once an FT-tier acquisition pass is run.
- **Audit status:** REDUCED. Flag in `logs/audit-cycle-N.md` (this
  cycle) for post-acquisition P1 promotion.
