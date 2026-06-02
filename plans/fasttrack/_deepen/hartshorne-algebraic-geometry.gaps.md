# Hartshorne, *Algebraic Geometry* (FT 3.21) — Phase-2 deepening gap file

**Verdict: the corpus is essentially fully covered on Hartshorne Chs I–V.**
The original audit (`plans/fasttrack/hartshorne-algebraic-geometry.md`) was
written against a 27-unit `04-algebraic-geometry/` section. That section has
since grown to ~116 units, and **nearly every "gap" the original §3 punch-list
proposed has since been produced** — often under the exact id the audit
suggested (04.02.05 smooth-étale, 04.02.07 Nullstellensatz, 04.03.03 Čech-schemes,
04.03.04 cohomology-of-projective-space, 04.03.05 Serre vanishing/finiteness,
04.03.06 derived-functors-and-Ext, 04.03.07 higher-direct-images + flat +
semicontinuity, 04.04.02 Hurwitz, 04.04.03 elliptic-curves, 04.05.06
intersection-pairing, 04.05.07 adjunction, 04.05.08 RR-surfaces, 04.05.09
Hodge-index). The surface-theory and curve-theory batches both shipped.

After heavy grep verification, **one genuine, high-value gap remains**: a
dedicated unit on **Serre's GAGA comparison theorem** (Hartshorne Appendix B).
GAGA is invoked as a load-bearing bridge in 8+ units across section 06 and 04
but is never *stated and proved as its own object* — the closest is a single
exercise in `06.03.01` restricted to curves.

---

## GENUINE GAPS (1)

### 1. `04.09.03` — Serre's GAGA comparison theorem

- **id:** `04.09.03` (slot FREE; 04.09 runs 01,02,05,07,08,09,10,11 — 03/04/06 open)
- **title:** GAGA — algebraic and analytic coherent sheaves on a projective variety
- **spec:** For a smooth complex projective variety $X$ with analytification
  $X^{\mathrm{an}}$, the analytification functor $\mathcal{F} \mapsto
  \mathcal{F}^{\mathrm{an}}$ is an equivalence $\mathrm{Coh}(X) \xrightarrow{\sim}
  \mathrm{Coh}(X^{\mathrm{an}})$ inducing isomorphisms $H^i(X,\mathcal{F}) \cong
  H^i(X^{\mathrm{an}},\mathcal{F}^{\mathrm{an}})$ for all $i$; consequences —
  every analytic subvariety of $\mathbb{P}^n(\mathbb{C})$ is algebraic (Chow's
  theorem) and every holomorphic map of projective varieties is a morphism.
- **prereqs (all verified to exist):** `04.06.02` coherent-sheaf,
  `04.03.05` Serre vanishing/finiteness, `04.02.03` projective-scheme,
  `04.09.01` hodge-decomposition, `06.10.22` complex-spaces-and-coherence
  (the analytic-coherence side).
- **chapter dir:** `content/04-algebraic-geometry/09-hodge/`;
  frontmatter section `04-algebraic-geometry`, chapter `09-hodge`
  (the transcendental / Appendix-B chapter of the corpus, alongside
  Hodge decomposition and Kodaira embedding).
- **why a gap, not covered:** `grep -rniE "theorem.*GAGA|equivalence of
  categories.*coherent.*projective"` finds GAGA only inside *Bridge* and
  *Synthesis* prose (06.10.20, 06.10.22, 06.09.02, 06.04.03, 03.04.06) and a
  single curve-only exercise (06.03.01:265). No unit states the comparison
  theorem, the analytification functor, or Chow's theorem as its subject.
  It is a named Hartshorne theorem (App. B) and the canonical bridge between
  the algebraic (`04-*`) and complex-analytic (`06-*`) halves of the corpus —
  high cross-section value.

---

## BORDERLINE — deferred, NOT proposed (1)

- **Ruled surfaces / projective bundle $\mathbb{P}(\mathcal{E})$ (Hartshorne §V.2).**
  No unit builds the relative-Proj projective-bundle construction or the ruled-
  surface / Hirzebruch-surface $\mathbb{F}_n$ theory as its own object: it
  appears only as an EGA reference (04.02.03:491) and as a *toric* example
  (04.11.04 builds $\mathbb{F}_a$ via fans). The original audit already tagged
  §V.2 "Specialty — defer"; the toric construction covers the worked example.
  Not load-bearing for the rest of the curriculum → left deferred, not a gap.

---

## COVERED (not gaps) — verified with id evidence

Every item below was a "gap" or "partial" in the original audit and is now
present. Grepped file bodies, not just filenames.

| Original-audit topic | COVERED by | evidence |
|---|---|---|
| Smooth / étale / unramified morphisms | `04.02.05` | filename + body; Jacobian + formal-smoothness |
| Nullstellensatz + dimension theory | `04.02.07` | filename; Krull dim, transcendence degree |
| Properties of schemes (Noetherian/integral/reduced/separated/proper, valuative criteria, flat) | `04.02.04` | body §P4–P5, valuative criterion for separatedness & properness proved (lines 145–393) |
| Čech cohomology of schemes (comparison to derived functor) | `04.03.03` | filename `cech-schemes` |
| $H^i(\mathbb{P}^n,\mathcal{O}(d))$ computation | `04.03.04` + `04.07.01` (full formula, lines 163–195) | filename `cohomology-projective`; 04.07.01 states the case split |
| Serre vanishing + finiteness (FAC) | `04.03.05` | filename |
| Derived functors + Ext groups + Ext sheaves + local-to-global Ext SS | `04.03.06` | body: Ext def (187), $\mathit{Ext}$ sheaf def (193), L2G SS thm (450) |
| Higher direct images $R^if_*$ + flat morphisms + semicontinuity + Grauert | `04.03.07` | body §III.8/9/12; cohomology-and-base-change, Grauert constancy (lines 79–85) |
| Twisting sheaf $\mathcal{O}(n)$ + global sections = homogeneous polys | `04.07.01` (lines 163–211) | body: $\mathcal{O}(d)$ from $k[x](d)$, $H^0 = k[x]_d$ |
| Very ample / ample ↔ closed embedding correspondence | `04.05.05` (lines 131–207) | body: very-ample def, Cartan-Serre-Grothendieck criterion proved |
| Hurwitz / Riemann-Hurwitz | `04.04.02` | filename `hurwitz-formula` |
| Elliptic curves (Weierstrass, group law, $j$-invariant) | `04.04.03` | filename |
| Canonical embedding theorem (genus $\geq 3$ non-hyperelliptic) | `04.08.02` (lines 342–372) | body: theorem stated + proved via RR separation |
| Intersection pairing on surfaces | `04.05.06` | filename + full pairing construction |
| 27 lines on the cubic / del Pezzo ($\mathbb{P}^2$ blown up at 6 pts, $E_6$) | `04.05.06` (Ex., lines 417–518) | body: 27 lines solved, intersection matrix, $E_6$ lattice |
| Adjunction formula $K_C=(K_X+C)|_C$ | `04.05.07` | filename + $2g-2=K_X\cdot C+C^2$ |
| Riemann-Roch for surfaces | `04.05.08` | filename; $\chi(\mathcal{O}_X(D))=\chi(\mathcal{O}_X)+\tfrac12 D\cdot(D-K_X)$ |
| Hodge index theorem (signature $(1,\rho-1)$) | `04.05.09` | filename |
| Castelnuovo contractibility ($(-1)$-curve criterion) | `04.05.06` (520) + `04.07.02` (375) | both state the theorem |
| Enriques-Kodaira classification (sketch) | `04.08.02` (437) + `04.05.06` (524) | Iitaka/Kodaira-dim four-class sketch |
| RR for curves (cohomological proof via Serre duality) | `04.04.01` + `04.08.03` serre-duality | filenames |
| Picard group / Cartier-Weil / line bundle | `04.05.02`,`04.05.03`,`04.05.04`,`04.05.01` | filenames |
| Sheaves / stalk / sheafification / direct-inverse image | `04.01.01`–`04.01.04` | filenames |
| Spec / affine scheme / scheme / Proj / morphism | `04.02.01`–`04.02.04` | filenames |
| Quasi-coherent / coherent sheaves | `04.06.01`,`04.06.02` | filenames |
| Sheaf of differentials / canonical sheaf | `04.08.01`,`04.08.02` | filenames |
| Serre duality | `04.08.03` | filename |
| Blowup / monoidal transformation | `04.07.02` | filename |
| Hirzebruch-RR + Grothendieck-RR (App. A pointers) | `04.05.10`,`04.05.11`,`04.05.12` | filenames |
| Clifford / Petri / gonality / Martens (Ch IV depth) | `04.04.08`–`04.04.16` | filenames (corpus exceeds Hartshorne Ch IV) |

---

## Counts

- **Genuine gaps proposed: 1** (`04.09.03` GAGA).
- **COVERED-verified topics: 31** (table above; all were audit gaps/partials).
- Borderline-deferred (not counted): 1 (ruled surfaces / $\mathbb{P}(\mathcal{E})$).
