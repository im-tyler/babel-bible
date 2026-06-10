# May & Ponto — *More Concise Algebraic Topology: Localization, Completion, and Model Categories* (FT 3.39) — Deepening pass (genuine gaps)

**Audit slug:** `may-ponto-more-concise`.
**Primary chapters touched:** `content/03-modern-geometry/12-homotopy/`, `…/13-spectral-sequences/`, `…/06-characteristic-classes/`, and the legacy `content/03-differential-geometry/12-homotopy-theory/` tree.

The first-pass audit (2026-05-18) was **REDUCED** (no PDF; paywalled) and graded MP at ~5% theorem coverage, proposing an 11-unit P1+P2 punch-list (`03.12.31`–`48.12.49`) plus deepenings. Since then the swarm shipped essentially the entire model-category + simplicial-homotopy strand. Grep-verification against the live 1414-unit corpus confirms that **almost every proposed unit now exists** — the model-category foundations, the Kan-Quillen structure, hocolim/holim, the Bousfield-Kan spectral sequence, the arithmetic square + integral fracture, Bousfield localisation of a model category, and the bialgebra/Hopf/Milnor-Moore unit are all shipped. The audit's predicted "total gaps" (model categories, completion, nilpotent spaces, fracture) are now **mostly closed**.

Two genuine residual gaps remain, both on the **Part 2 localisation side** (MP Ch 5–9), which the corpus under-serves relative to the well-covered Part 3 completion / arithmetic-square material: the corpus has rationalisation ($X_\mathbb{Q}$) and $p$-**completion** ($X^\wedge_p$) but no treatment of $p$-/$T$-**localisation** ($X_{(p)}$, $X_T$) at a set of primes as a construction distinct from completion, and no standalone development of the **nilpotent-group/space theory** (lower central series, the central Postnikov refinement, detection theorems) that MP makes the central computable class of the book. `03.12.45` *defines* "nilpotent space" in one sentence but develops none of the theory; the localisation fracture theorem of Part 2 Ch 7 (distinct from the integral arithmetic square of Part 3) is absent.

**Result: 2 genuine gaps.** This is a near-fully-covered book on the model-category/completion side; the residue is the localisation-at-primes corner of Part 2.

---

## GENUINE GAPS

### Gap 1 — Localisation of nilpotent spaces at a set of primes $T$

- **proposed id:** `03.12.60` (first free slot in `03-modern-geometry/12-homotopy/`; ids through `03.12.59` are occupied)
- **title:** Localisation of nilpotent spaces at a set of primes
- **spec:** The Sullivan–Bousfield localisation $X \to X_T$ inverting primes outside $T$ (with $X_{(p)}$ the $T=\{p\}$ case and $X_\mathbb{Q}$ the $T=\varnothing$ case); the characterisation theorems for $T$-local spaces (homotopy groups are $\mathbb{Z}_T$-modules / $T$-local; cohomology with $\mathbb{Z}_T$-coefficients); the **fracture theorem for localisation** $X_{(p)} \simeq X_T \times_{X_\mathbb{Q}} X_{(p')}$ (MP Ch 7), reassembling a nilpotent space from its $p$-localisations and rationalisation. **Distinct from $p$-completion** $X^\wedge_p$ (`03.12.45`): localisation inverts primes, completion adjoins $p$-adic limits; the two agree rationally but differ integrally.
- **prereqs:** `03.12.45` (arithmetic square / integral fracture — supplies the nilpotent-space definition, $X_\mathbb{Q}$, $X^\wedge_p$, the homotopy-pullback fracture pattern), `03.12.48` (Bousfield localisation of a model category), `03.12.06` (Sullivan minimal models — the rational $T=\varnothing$ endpoint)
- **chapter dir:** `content/03-modern-geometry/12-homotopy/`; frontmatter `section: modern-geometry`, `chapter: homotopy`
- **originator citations:** Sullivan 1974 *Annals* 100 (prime-by-prime localisation, fracture squares); Bousfield 1975 *Topology* 14 (localisation functor); Hilton–Mislin–Roitberg 1975 *Localization of Nilpotent Groups and Spaces* (monograph); MP Ch 5–7.

### Gap 2 — Nilpotent groups and nilpotent spaces (the central computable class)

- **proposed id:** `03.12.61` (next free slot)
- **title:** Nilpotent groups and nilpotent spaces
- **spec:** Lower central series and nilpotency class of a group; nilpotent action of $\pi_1$ on $\pi_n$; a **nilpotent space** as one with nilpotent $\pi_1$ acting nilpotently on each $\pi_n$; the structural theorem that a nilpotent space admits a **principal refinement of its Postnikov tower** (each stage a principal $K(A,n)$-fibration, so the $k$-invariants live in ordinary cohomology), which is precisely why localisation/completion of *spaces* behaves homotopically well on this class; detection/recognition criteria (nilpotent if simply connected; if $\pi_1$ finite acting trivially; etc.). MP makes this the central class of the entire book; `03.12.45` only states the bare definition.
- **prereqs:** `03.12.40` (Postnikov tower / Kan complex), `03.12.05` (Eilenberg–MacLane spaces, $k$-invariants), `01.02.05` (solvable/nilpotent groups, Jordan–Hölder — supplies the lower central series), `03.12.52` (relative homotopy group / $\pi_1$-action)
- **chapter dir:** `content/03-modern-geometry/12-homotopy/`; frontmatter `section: modern-geometry`, `chapter: homotopy`
- **originator citations:** Hilton–Mislin–Roitberg 1975 (canonical monograph); Bousfield–Kan 1972 LNM 304 §I.5 (nilpotent fibrations); MP Ch 3–4. This unit is the natural prerequisite for Gap 1.

---

## COVERED (not gaps) — verified against the live corpus

### Part 4 — Model category theory (MP Ch 14–19): fully shipped

- **Quillen model category, three-axiom + five-axiom forms, $\mathrm{Ho}(\mathcal{M})$** — `03.12.31-quillen-model-category` (M1–M5, retract closure, homotopy category).
- **Cofibrantly generated model categories + small-object argument** — `03.12.31` (explicit small-object-argument statement and application; generating sets $I,J$; verified in the chain-complex and sSet examples). Also `03.12.33`.
- **Quillen functor, Quillen adjunction, Quillen equivalence** — `03.12.32-quillen-functor-and-equivalence` (left/right Quillen, derived functors, Quillen equivalence as equivalence of homotopy categories).
- **Model structure on $\mathbf{Top}$ (Serre/Quillen)** — `03.12.31` (Serre model structure), `03.12.32` (the $|{-}|\dashv\mathrm{Sing}$ Quillen equivalence $\mathbf{sSet}\simeq_{\mathrm{Qu}}\mathbf{Top}$, Quillen 1967 Thm II.3.1).
- **Kan-Quillen model structure on $\mathbf{sSet}$** — `03.12.33-kan-quillen-model-structure-on-sset` (cofibrations = monos, fibrations = Kan fibrations, M1–M5 via small-object argument on horn inclusions). Geometric realisation announced in `03.12.25`.
- **Model structure on chain complexes $\mathbf{Ch}_{\geq 0}(R)$ (projective)** — `03.12.31` (full projective model structure: quasi-iso weak equivalences, degree-wise-surjective fibrations, projective-cokernel cofibrations, M1–M5 verified, cofibrant = complexes of projectives) + `03.12.32` (Dold-Kan as a Quillen equivalence). Audit's proposed `03.12.46` is COVERED here. Dold-Kan itself at `01.02.35-dold-kan-correspondence`. Derived functors $\mathbb{L}F/\mathbb{R}G$ at `04.03.12-derived-functors-rf-and-lf-via-derived-categories`.
- **Bousfield localisation of a model category** — `03.12.48-bousfield-localisation-of-a-model-category` (left Bousfield localisation $L_S\mathcal{M}$, Hirschhorn existence, prime-set localisation as example).
- **Simplicial model category / function complex** — `03.12.35-simplicial-model-category-and-function-complex` (beyond MP; SM7).
- **Quasi-categories / Joyal model structure** — `03.12.43-quasi-categories-and-the-joyal-model-structure` (the $\infty$-categorical successor MP only points to).

### Part 1–3 — hocolim/holim, completion, fracture (MP Ch 1–13): shipped

- **Homotopy colimit / homotopy limit (Bousfield-Kan)** — `03.12.37-homotopy-colimit-bousfield-kan` (bar construction $B(*,I,F)$, homotopy pushout, mapping telescope, dual holim). Audit's `03.12.37` COVERED at the same id.
- **$\lim^1$ exact sequence for a tower** — covered within `03.12.45` (explicit $\lim^1$ bookkeeping, Mittag-Leffler criterion) and `03.12.38`.
- **Bousfield-Kan spectral sequence** — `03.12.38-bousfield-kan-spectral-sequence` (cosimplicial space, $\mathrm{Tot}$, $E_2 = \pi^s\pi_t$, $R$-completion, Adams/Adams-Novikov specialisations). Audit's `03.12.38` COVERED at the same id.
- **$p$-completion of nilpotent spaces $X^\wedge_p$** — `03.12.45-arithmetic-square-integral-fracture` (the $L_p = L_{H\mathbb{F}_p}$ Bousfield localisation, $\pi_n\otimes\mathbb{Z}_p$, finite-type convergence). Audit's proposed `03.12.44` is COVERED here.
- **Arithmetic square + integral fracture theorem** — `03.12.45` (Sullivan square, homotopy-pullback comparison map, Sullivan 1970 / Bousfield-Kan 1972 integral fracture theorem, $S^2$ worked example). Audit's `03.12.45` COVERED at the same id.
- **Rationalisation $X_\mathbb{Q}$** — `03.12.45` ($L_\mathbb{Q}=L_{H\mathbb{Q}}$) + `03.12.06-sullivan-minimal-models`.

### Part 2 — rational homotopy theory (MP Ch 8–9): shipped

- **Sullivan minimal models / rational homotopy (forms side)** — `03.12.06-sullivan-minimal-models` (+ exercises `03.12.E1`). Formality/Massey `03.12.51`, Cartan model `03.12.50`, mixed Hodge `03.12.44`.
- **Quillen's dual rational-homotopy framework (dgla side, Quillen 1969)** — `03.12.06` already contains the "Bigraded models and the Quillen-Sullivan equivalence" section (Quillen DG-Lie model, Koszul/$A_\infty$ duality, Sullivan↔Quillen). Audit's proposed deepening item 15 is COVERED.
- **Rational $H$-spaces / free graded Lie algebra** — covered via `03.12.06` (rational homotopy as a graded Lie algebra) + the Milnor-Moore $U(L)$ classification at `48.12.49`. The audit's proposed `03.12.47` is marginal and its content is split across these two; no standalone unit warranted.

### Part 5 — bialgebras, Hopf algebras, Steenrod (MP Ch 20–24): shipped

- **Bialgebra, Hopf algebra, antipode, primitives, Milnor-Moore theorem** — `48.12.49-bialgebra-hopf-milnor-moore` (full Milnor-Moore: graded connected cocommutative Hopf algebra over char-0 field $\cong U(P(H))$, PBW proof sketch). Audit's `48.12.49` COVERED at the same id.
- **Lie algebra / universal enveloping algebra** — `48.12.49` (commutator Lie algebra on primitives, $U(\mathfrak g)$, PBW) + `07.06.13-free-lie-algebras-hall-basis-and-magnus-theorem` + `07.06.15-campbell-baker-hausdorff`.
- **Hopf algebras & the dual Steenrod algebra** — `03.06.14-steenrod-squares-and-wu-formula` (Steenrod squares, Adem relations, the **Hopf-algebra structure** on $\mathcal{A}_2$ with the coproduct from the Cartan formula, the **dual $\mathcal{A}_2^* = \mathbb{F}_2[\xi_1,\xi_2,\dots]$, $|\xi_i|=2^i-1$**, and the Milnor basis — Milnor 1958). This is the load-bearing Steenrod-Hopf material MP Part 5 builds toward.
- **Restricted Lie algebras (char $p$), cohomology (MP Ch 22–23)** — audit-flagged P3/P4, technical, needed only for $p$-complete $H$-spaces. Not present as a standalone unit, but the audit itself deferred this to "a future $p$-completion deep-dive pass" (item 16) and it is below the deepening-pass value threshold; NOT proposed as a gap (out-of-scope per the audit's own §5).

### Characteristic classes & cobordism (MP touches via Hopf/Steenrod): shipped

- **Characteristic classes** — entire chapter `03-modern-geometry/06-characteristic-classes/` (Stiefel-Whitney `03.06.03`, Pontryagin/Chern `03.06.04`, Chern-Weil, Wu `03.06.14`, signature `03.06.19`, multiplicative sequences/genera `03.06.15`).
- **Cobordism** — `03.06.12-unoriented-bordism-thoms-theorem`, `03.06.13-oriented-bordism-pontryagin-thom`, `03.08.20-whitehead-torsion-s-cobordism`, plus Thom space/isomorphism at `48.12.29` (legacy tree) and `03.08.03` (K-theory).

### Serre & Eilenberg-Moore spectral sequences: shipped

- **Serre spectral sequence** — `03.13.02-leray-serre` (Leray-Serre SS of a fibration + Gysin sequence).
- **Eilenberg-Moore spectral sequence** — covered as dedicated sections within `03.13.01-spectral-sequence` (the $E_2 = \mathrm{Tor}^{H^*(Y)}(H^*(X),\mathbb{Z})$ statement) and `03.13.02-leray-serre` ("Eilenberg-Moore spectral sequence" subsection, dual to Leray-Serre), with an exercise in `03.13.E1` ($H^*(\Omega S^n)$ via EMSS). A standalone unit is not warranted — the SS framework unit + Leray-Serre unit jointly state and apply it.

### Foundations assumed by MP: shipped

- **Cofibrations / fibrations** — `02.01.07-fibration`, `02.01.08-cofibration`.
- **Puppe cofiber / fiber sequences** — `48.12.27-puppe-cofiber-sequence`, `48.12.28-puppe-fiber-sequence` (audit's strict prereq `48.12.27` shipped).
- **Postnikov tower** — `03.12.40-postnikov-tower-kan-complex` (audit's `03.12.40` shipped).
- **Geometric realisation / simplicial sets** — `03.12.25-simplicial-sets-and-geometric-realization`, `48.12.24-simplicial-set-delta`.

---

**Result: 2 genuine gaps (`03.12.60` localisation of nilpotent spaces at $T$; `03.12.61` nilpotent groups and spaces); ~30 topics verified COVERED with unit ids.** The audit's reduced-pass prediction of "substantial new-unit punch-list" has been overtaken by the corpus: the model-category foundations (Ch 14–19), the completion/arithmetic-square machinery (Ch 10–13), rational homotopy (Ch 8–9), and the Hopf-algebra/Steenrod material (Ch 20–24) are all shipped. The only genuine residue is the **localisation-at-a-set-of-primes** corner of Part 2 (Ch 5–7) — the prime-inverting construction $X_T$/$X_{(p)}$, its characterisation theorems, the localisation fracture theorem, and the nilpotent-group/space theory that underpins it — which the corpus currently has only as a one-line definition inside the completion-focused `03.12.45`.
