# Deepening audit — Whitney, *Geometric Integration Theory* (FT 1.13)

SLUG: `whitney-geometric-integration-theory`
Method: every §3 punch-list item from the first-pass audit was re-verified against the
live corpus by filename grep + body grep before being kept or dropped. The first-pass
audit predates the buildout of the `02.07-measure-theory/` chapter and the GMT block now
sitting (misfiled) under `02.13-pde/`. The vast majority of its punch-list is now SHIPPED.

**Result: 3 genuine gaps, 14 COVERED-verified topics.**

The three gaps are all *analysis prerequisites* of GMT — the non-smooth change-of-variables
machinery (Rademacher → area/coarea) and Whitney's classical C^k-extension theorem. None of
the three is stated/proved anywhere in the corpus; each is currently only *invoked* by the
already-shipped currents units. They are high-leverage (reused far beyond GMT:
Calderón-Zygmund, Sobolev extension, optimal transport).

---

## Gap 1 — Whitney extension theorem (+ Whitney covering lemma)

- **id:** `02.07.09`
- **title:** Whitney extension theorem and the Whitney cube decomposition
- **spec:** A $C^m$ Whitney jet field on a closed set $A\subset\mathbb{R}^n$ extends to a $C^m$
  function on all of $\mathbb{R}^n$; proved via the Whitney covering of $\mathbb{R}^n\setminus A$
  by dyadic cubes with $\operatorname{diam}(Q)\asymp\operatorname{dist}(Q,A)$ and a matched smooth
  partition of unity. Include the covering lemma as a standalone statement (its own reuse in
  Calderón-Zygmund / Sobolev extension).
- **prereqs:** `02.07.02` (Lebesgue outer measure / Carathéodory — verified exists),
  `02.05.04` (implicit/inverse function theorems — verified exists),
  `02.05.05` (multivariable Taylor / jets — verified exists)
- **chapter dir:** `content/02-analysis/07-measure-theory/`
  (frontmatter `section: analysis`, `chapter: measure-theory`)
- **note:** originator Whitney 1934 *Trans. AMS* 36:63-89; mandatory originator-prose.
  Genuinely absent — the only "Whitney … extension" hits in the corpus are local-ring finite
  extensions (`06.10.17`) and Tietze extension (`02.07.03`), neither related. Distinct from the
  Whitney *embedding* theorem (which IS covered, see trailer). `lean_status: none`.

## Gap 2 — Rademacher's theorem

- **id:** `02.07.10`
- **title:** Rademacher's theorem (a.e. differentiability of Lipschitz maps)
- **spec:** A locally Lipschitz $f:\mathbb{R}^n\to\mathbb{R}^m$ is totally differentiable
  $\mathcal{L}^n$-a.e.; proof via directional derivatives + Fubini + the absolute continuity of
  Lipschitz functions on lines. The hinge prerequisite for the coarea/area formulas.
- **prereqs:** `02.07.02` (Lebesgue outer measure — verified), `02.07.05` (Fatou / dominated
  convergence — verified), `02.05.05` (multivariable differentiation — verified)
- **chapter dir:** `content/02-analysis/07-measure-theory/`
  (`section: analysis`, `chapter: measure-theory`)
- **note:** originator Rademacher 1919 *Math. Ann.* 79:340-359. Currently only *invoked in
  passing* — `02.13.11` Step 2 and `05.15.01` Step 3 cite "by Rademacher's theorem" with no
  statement or proof; no dedicated unit states it. `lean_status: none`.

## Gap 3 — Area and coarea formulas

- **id:** `02.07.11`
- **title:** The area and coarea formulas for Lipschitz maps
- **spec:** Area formula ($n\le m$): $\int_A J_nf\,d\mathcal{L}^n=\int_{\mathbb{R}^m}
  \mathcal{H}^0(A\cap f^{-1}\{y\})\,d\mathcal{H}^n(y)$. Coarea formula ($n\ge m$):
  $\int_A J_mf\,d\mathcal{L}^n=\int_{\mathbb{R}^m}\mathcal{H}^{n-m}(A\cap f^{-1}\{y\})\,
  d\mathcal{L}^m(y)$. The two non-smooth change-of-variables theorems driving GMT computations;
  recovers polar coordinates, the smooth surface-area formula, and the layer-cake identity as
  special cases.
- **prereqs:** `02.07.10` (Rademacher — Gap 2 above), `02.07.02` (Hausdorff measure is built in
  `02.07.02` Theorem 5 — verified), `02.07.06` ($L^p$ / integration — verified)
- **chapter dir:** `content/02-analysis/07-measure-theory/`
  (`section: analysis`, `chapter: measure-theory`)
- **note:** originator Federer 1959 *Trans. AMS* 93 ("Curvature measures") / Federer 1969 §3.2;
  area-formula precursor Eilenberg 1938, coarea precursor Kronrod 1950. Currently only *applied*
  inside the currents units (`02.13.07`, `02.13.11`) and named in `05.04.05`, never stated or
  proved as a standalone theorem. `lean_status: none`. Ship after Gap 2.

---

## COVERED (not gaps) — verified due diligence

First-pass audit items that are NOW shipped or were already shipped; each with the existing id.

- **Whitney deformation theorem** (audit item 16, `02.13.05`) — SHIPPED at
  `content/02-analysis/13-pde/02.13.05-whitney-deformation-theorem.md` (3 tiers). Body also
  fully develops **polyhedral chains** (17 hits), **mass** and the **flat norm** (14 hits),
  and **flat chains** — so audit items 13/14/15 (polyhedral chains; mass & flat norm; flat
  $r$-chains) are absorbed here. NOTE: misfiled under `13-pde/` rather than a GMT subchapter,
  but the id `02.13.05` is occupied and the content exists.
- **Rectifiable currents / integral & normal currents / Federer-Fleming compactness / Plateau**
  (audit items 18, 19, 20, `02.13.07`) — SHIPPED at
  `…/02.13.07-rectifiable-currents.md`: integral currents (16 hits), normal currents,
  Federer-Fleming compactness theorem (6 hits), Plateau (5 hits).
- **Slicing of currents** (audit item 22, `02.13.11`) — SHIPPED at
  `…/02.13.11-slicing-of-currents.md`.
- **Integration of forms over flat chains; Stokes for flat chains** (audit item 17) — COVERED
  inside `02.13.05` (flat-chain Stokes / form pairing) + smooth Stokes at `03.04.05`.
- **Whitney embedding theorem** (audit item 10, `48.02.04`) — COVERED at
  `content/03-modern-geometry/02-manifolds/03.02.01-smooth-manifold.md`: weak ($\mathbb{R}^{2n+1}$)
  and strong ($\mathbb{R}^{2n}$) versions stated, with a Sard-based proof sketch and Whitney-trick
  pointer. (Audit proposed `48.02.04`; that id is now occupied by Frobenius in the *other*
  manifolds dir — the embedding content already lives in `03.02.01`.) NOT a gap.
- **Whitney trick** (Whitney 1944, removal of transverse double points) — COVERED at
  `content/03-differential-geometry/02-manifolds/48.02.22-the-whitney-trick-and-handle-cancellation.md`.
- **mass & comass of $r$-vectors as dual norms** (audit item 12) — COVERED: comass is *defined*
  as a dual norm on unit decomposable $p$-vectors in
  `content/03-modern-geometry/09-spin-geometry/03.09.19-calibrated-geometries.md` (36 hits).
- **Plücker relations / simple vs non-simple $r$-vectors** (audit item 12) — COVERED: the exact
  relation $p_{12}p_{34}-p_{13}p_{24}+p_{14}p_{23}=0$ and the decomposability criterion are
  stated in `content/04-algebraic-geometry/07-projective/04.07.01-projective-space.md`.
- **Exterior algebra $\Lambda^rV$, $\Lambda^rV^*$** — COVERED at
  `content/01-foundations/02-groups/01.02.19-tensor-algebra-exterior-symmetric.md`.
- **Differential forms; exterior derivative; pullback; integration on manifolds; smooth Stokes;
  de Rham cohomology / de Rham theorem; singular cohomology** (audit items, Part I) — COVERED at
  `03.04.02` (forms), `03.04.03` (integration on manifolds), `03.04.05` (Stokes),
  `03.04.06` (de Rham cohomology), `03.04.11` (Čech–de Rham).
- **Hausdorff measure $\mathcal{H}^r$ and Hausdorff dimension** (audit item 5) — COVERED at
  `content/02-analysis/07-measure-theory/02.07.02-lebesgue-outer-measure-caratheodory.md`
  Theorem 5 (definition, critical-exponent dimension, Cantor $\log 2/\log 3$ example).
- **$\sigma$-algebras & abstract measures; Lebesgue measure; Carathéodory construction; Lebesgue
  integral & convergence theorems; $L^p$ spaces** (audit items 1-4, the Priority-0 measure-theory
  scaffold) — SHIPPED as the full chapter `02.07.01`–`02.07.08`
  (`02.07.01` σ-algebra/Borel, `02.07.02` Lebesgue/Carathéodory, `02.07.03` measurable
  functions/Egorov/Lusin, `02.07.04` Lebesgue integral/MCT, `02.07.05` Fatou/DCT,
  `02.07.06` $L^p$/Hölder/Minkowski, `02.07.07` Fubini-Tonelli, `02.07.08` Radon-Nikodym).
- **Lipschitz functions** (as objects) — used throughout `02.07.*` and `02.13.*`; only the
  *Rademacher differentiability theorem* about them is the gap (Gap 2), not Lipschitz functions
  per se.
- **Whitney forms $\mathcal{W}^k$** (audit item, deferred to FEEC) — SHIPPED at
  `content/24-.../24.03.01-whitney-forms-mathcal-w-k.md`. Correctly *not* double-counted.

### Dropped from first-pass punch-list as non-gaps
Audit items 1-7 (measure-theory scaffold), 10/12-22 (GMT core + structure theorems + Whitney
embedding) are all shipped per above. The genuine residue is exactly the three change-of-variables
/ extension prerequisites in the gap list. The audit's own recommended `02.13-geometric-measure-theory`
subchapter never materialised; the GMT units instead landed (id-correct, dir-misfiled) under
`02.13-pde/`. That misfiling is a cleanup item, not a coverage gap, and is out of scope here.
