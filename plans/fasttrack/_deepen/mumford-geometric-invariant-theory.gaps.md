# Mumford, *Geometric Invariant Theory* (FT 3.31) — Deepening gap file

**SLUG:** `mumford-geometric-invariant-theory`
**Method:** verified each item of the first-pass §3 punch-list and each major MFK
theorem against the live corpus (`find content -name "04.10.*"`, `find … "05.04.*"`,
and body greps for the supplied keyword set + Haboush / Nagata / categorical-quotient /
reductive-group / abelian-variety / theta-group / Narasimhan-Seshadri).

**Headline:** the corpus grew enormously since the REDUCED first-pass audit. Essentially
the *entire* §3 punch-list (P1–P4, items 1–13) has shipped as dedicated units
`04.10.03` through `04.10.15`. Only **2 genuine gaps** remain, both *prerequisite
objects that GIT presupposes* rather than GIT results themselves; the GIT machinery proper
is now fully anchored. This is a near-fully-covered book.

---

## GENUINE GAPS (2)

### GAP 1 — Linear / reductive algebraic groups (structure + geometric reductivity)

- **proposed id:** `04.10.07` (free slot; first-pass reserved this number for exactly this
  unit and it never shipped)
- **title:** Linear algebraic groups, reductivity, and finite generation of invariants
- **spec:** Linear algebraic group as an affine group scheme; unipotent radical and the
  definition of *reductive* (trivial unipotent radical) and *linearly reductive*; tori /
  classical groups / semisimple groups as the reductive examples vs unipotent
  non-examples; Hilbert's finite-generation theorem for classical-group invariant rings
  (symbolic method, 1890/1893); Nagata 1959 counterexample = negative answer to Hilbert's
  14th problem; Reynolds operator (char 0) and **Haboush's theorem** (geometric reductivity
  in char $p$, Mumford conjecture, Annals 1975) giving finite generation of
  $R^G$ in all characteristics — the precise hypothesis that makes
  $\mathrm{Proj}\,R^G$ exist.
- **prereqs (verified exist):** `04.10.02-git` (uses reductivity, states finite generation
  in passing), `03.03.02-group-action`, `07.06.22-weyl-complete-reducibility`,
  `01.02.17-hilbert-basis-noetherian`, `04.02.07-nullstellensatz-and-dimension-theory`
- **chapter dir:** `content/04-algebraic-geometry/10-moduli/`; frontmatter
  section `04` chapter `10`
- **why a genuine gap:** reductivity + finite generation is defined only *in passing*
  inside `04.10.02-git` (lines 159, 167, 175, 287–307, 454–470, 508) and name-checked in
  rep-theory units (`07.02.01` Maschke, `07.06.22` Weyl, both Lie-algebra-side). Haboush's
  theorem is **never stated as a theorem** anywhere — it appears only as a one-sentence
  synthesis mention in `07.06.22` and `07.02.01`. There is **no dedicated unit treating the
  linear/reductive algebraic group as an object** (`find … grep "linear algebraic group|
  root datum|chevalley.*classif"` returns only GIT/toric/rep-theory units that *use* the
  notion, none that anchor it). This is the single foundational prerequisite GIT leans on
  hardest and the only first-pass P1 item not converted to an anchor unit.

### GAP 2 — Abelian varieties (structure object: group law, polarization, dual, isogeny)

- **proposed id:** `04.10.16` (free slot)
  *(alt placement: a new `04-algebraic-geometry/04-curves` or dedicated abelian-variety
  cluster id; `04.10.16` keeps it adjacent to the moduli/GIT machinery that consumes it,
  matching MFK Ch. 6–7 / Mumford's *Abelian Varieties*.)*
- **title:** Abelian varieties: group law, polarizations, and the dual
- **spec:** Abelian variety as a complete connected group variety; rigidity ⇒ commutativity
  and projectivity; $A = V/\Lambda$ over $\mathbb{C}$ with the Riemann relations;
  polarization from an ample line bundle and the dual abelian variety $\hat A = \mathrm{Pic}^0$;
  the theta line bundle and principal polarizations; isogenies and the Tate / $\ell$-adic
  module; the theta-group (Heisenberg) and theta-linearization that MFK uses to build the
  moduli of abelian varieties via GIT.
- **prereqs (verified exist):** `04.05.05-ample-line-bundle`, `04.05.02-picard-group`,
  `06.06.03-jacobian-variety`, `06.06.05-theta-function`, `04.04.03-elliptic-curves`,
  `04.09.11-kodaira-embedding-theorem`
- **chapter dir:** `content/04-algebraic-geometry/10-moduli/`; frontmatter
  section `04` chapter `10`
- **why a genuine gap:** "abelian variety" appears in 50+ files but **always as a cited
  object, never anchored** — the Jacobian (`06.06.03`) is a *special* abelian variety with
  its own focus, elliptic curves (`04.04.03`) are the 1-dimensional case, and the theta
  function (`06.06.05`) is analytic. No unit defines the general abelian variety with its
  group law, polarization, dual, and isogenies. The **theta group / theta-linearization**
  (Mumford's distinctive GIT input for the moduli of abelian varieties, MFK Ch. 6–7) is
  *entirely absent*: `grep "theta.group|theta.linear|mumford.theta|heisenberg.*theta"`
  returns nothing in content. This is the one MFK application chapter with no corpus anchor.
  *Conservative note:* this is the lowest-priority of the two — MFK treats abelian-variety
  moduli as an application and the first-pass audit itself flagged theta groups / abelian
  varieties as "likely out of core scope." Propose at Master tier; defer if abelian
  varieties are slated for a dedicated Mumford *Abelian Varieties* audit instead.

---

## COVERED (not gaps) — due-diligence trailer

Every other first-pass §3 punch-list item and every major MFK theorem checked maps to a
shipped unit:

| First-pass item / MFK topic | Covering unit | Evidence |
|---|---|---|
| Hilbert–Mumford numerical criterion (1-PS) | `04.10.03-hilbert-mumford-numerical-criterion` | full statement + proof + binary-form worked examples |
| Kempf 1978 optimal/most-destabilising 1-PS | `04.10.03` | stated as theorem (lines 211, 281, 405) + exercise; cited in master refs (line 34) |
| Kempf–Ness theorem (GIT ↔ symplectic) | `04.10.04-kempf-ness-git-symplectic-dictionary` | dedicated anchor unit; bridges to `05.04.02` |
| Hilbert scheme $\mathrm{Hilb}^P_X$ | `04.10.05-hilbert-scheme-of-x` | dedicated unit |
| Moduli of vector bundles; slope stability | `04.10.06-moduli-vector-bundles-curve-slope-stability` | dedicated unit; dim $r^2(g-1)+1$ |
| Narasimhan–Seshadri (stable ↔ unitary) | `04.10.06` | full statement (lines 398–404) + Atiyah-Bott/Donaldson proof strategy + exercise |
| Harder–Narasimhan filtration | `04.10.06` | theorem + proof (lines 188–218) |
| Kirwan stratification of unstable locus | `04.10.08-kirwan-stratification-unstable-locus` | dedicated unit |
| Variation of GIT (Dolgachev–Hu, Thaddeus) | `04.10.09-variation-of-git-vgit` | dedicated unit |
| Gieseker stability / moduli of sheaves | `04.10.11-gieseker-stability-and-moduli-of-sheaves` | dedicated unit |
| Bridgeland stability conditions | `04.10.12-bridgeland-stability-conditions` | dedicated unit |
| K-stability / Yau–Tian–Donaldson | `04.10.13-k-stability-and-the-yau-tian-donaldson-conjecture` | dedicated unit |
| Non-reductive GIT (Doran–Kirwan) | `04.10.14-non-reductive-git` | dedicated unit |
| Derived GIT / magic windows | `04.10.15-derived-git-and-magic-windows` | dedicated unit |
| GIT quotient $X/\!/_LG=\mathrm{Proj}\,R^G$; categorical/good/geometric quotient | `04.10.02-git` | quotient theorem GIT1–GIT3 with **universal property** (lines 151–183); good vs geometric vs categorical all defined |
| Stable / semistable / unstable points | `04.10.02-git` | stratification, worked binary-quartic example |
| $G$-linearised line bundle | `04.10.02-git` | formal definition |
| Reductivity / finite generation (as a *mention*) | `04.10.02-git` | lines 159–307, 454–470 — covered enough that GAP 1 is borderline; proposed only because no *anchor* unit + Haboush never stated as a theorem |
| Moduli of curves $\mathcal{M}_g$ via GIT | `04.10.01-moduli-of-curves` | dedicated unit |
| Deligne–Mumford stable-curve compactification | `04.10.22-stable-curve-and-deligne-mumford-stability` | dedicated unit |
| Moment map for $G$-action | `05.04.01-moment-map` | dedicated unit (Cycle 5) |
| Marsden–Weinstein symplectic reduction | `05.04.02-symplectic-reduction` | dedicated unit (Cycle 5) |
| AGS convexity (image of moment map) | `05.04.03-ags-convexity` | dedicated unit |
| Atiyah–Bott Yang–Mills / ASD moduli | `03.07.09-moduli-space-of-asd-connections-...` + `04.10.06` (A-B proof) | covered |
| Categorical vs geometric quotient (first-pass item 8 / `04.10.10`) | `04.10.02-git` | the first-pass itself flagged this as "could be folded into `04.10.02-git`"; universal property + good/geometric distinction is there (lines 151–183) — **not a gap** |

**Counts:** 2 genuine gaps; 24 COVERED-verified topics.
**Gap file path:** `plans/fasttrack/_deepen/mumford-geometric-invariant-theory.gaps.md`
