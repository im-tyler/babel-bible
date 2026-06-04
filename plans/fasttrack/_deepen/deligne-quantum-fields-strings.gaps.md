# Deligne, Etingof, Freed, et al. — *Quantum Fields and Strings: A Course for Mathematicians* (FT 3.43) — first audit (genuine residual gaps)

**Audit slug:** `deligne-quantum-fields-strings`.
**Verdict:** Near-fully covered cross-section. This 2-volume IAS course is a mathematician's
walk through QFT/SUSY/strings, and the corpus has since grown deep QFT, axiomatic-QFT,
CFT, TQFT, spin-geometry, SUSY, and microlocal-QFT strands that subsume the overwhelming
majority of its theorem-level content. Aggressive grep-verification (below) confirms that
the headline constructions — Wightman/Osterwalder-Schrader axioms with reflection
positivity and the reconstruction theorem, the spin-statistics and PCT theorems, the
Feynman/Wiener path integral made rigorous, Virasoro CFT with conformal blocks and the
Verlinde formula, the WZW action, Chern-Simons quantum TQFT, the Atiyah-Segal functorial
formulation, BRST quantisation, and the physics superspace/Berezin calculus — are all
already present. **One genuine high-value math-theorem-level gap remains:** the
*mathematician's* differential-geometric theory of **supermanifolds** (the ringed-space
definition, the functor-of-points / even-rules formalism, and super Lie groups) that
Deligne and Morgan's "Notes on Supersymmetry following Joseph Bernstein" was written to
supply. Everything else is either COVERED or genuine physics/string-survey OUT OF SCOPE.

---

## GENUINE GAP 1 (high value) — Supermanifolds: the ringed-space definition, the functor of points, and super Lie groups

- **id:** `07.06.28`
- **title:** Supermanifolds as ringed spaces, the functor of points, and super Lie groups
- **spec:** The abstract differential-geometric definition Deligne-Morgan build the SUSY
  course on, distinct from the physicists' coordinate superspace. A **supermanifold** is a
  $\mathbb{Z}_2$-graded locally ringed space $(M,\mathcal{O}_M)$ locally isomorphic to
  $(U,\,C^\infty_U\otimes\Lambda^\bullet(\xi_1,\dots,\xi_q))$ — the model superdomain
  $\mathbb{R}^{p|q}$ with structure sheaf the smooth functions tensored with a Grassmann
  algebra in odd generators $\xi_j$. Morphisms = graded-ringed-space maps; the **Batchelor
  theorem** (every real supermanifold is isomorphic, non-canonically, to the split
  $(M,\Lambda^\bullet E^\ast)$ of a vector bundle $E\to M$). The **functor of points /
  even-rules principle**: a supermanifold is determined by its functor
  $S\mapsto \mathrm{Hom}(S,M)$ on the category of supermanifolds, so odd coordinates are
  detected only against auxiliary odd parameters — the $S$-points formalism that makes
  "odd" geometry rigorous and resolves sign/ordering ambiguities. **Super Lie groups** as
  group objects in supermanifolds; the super Harish-Chandra pair $(G_0,\mathfrak{g})$
  equivalence (an ordinary Lie group $G_0$ plus a Lie superalgebra $\mathfrak{g}$ with
  $\mathfrak{g}_{\bar 0}=\mathrm{Lie}(G_0)$); the **super Poincaré group** as the worked
  example whose Lie superalgebra is the SUSY algebra already in `12.19.01`. The Berezinian
  (already in `12.19.02`) reappears as the transition cocycle of the orientation/Berezin
  line bundle.
- **why a gap:** The corpus has the *physics* superspace (`12.19.02`: $\mathbb{R}^{4|4}$ by
  coordinates, $\theta$'s, Berezin integral, supercovariant derivatives) and the *algebraic*
  side (`07.06.27`: Lie superalgebras, super-Jacobi, Kac classification), but **nothing**
  states the ringed-space definition of a supermanifold, Batchelor's theorem, the functor-of-
  points / even-rules principle, or super Lie groups / Harish-Chandra pairs. grep across
  `content/` for "ringed space"+super, "functor of points", "super Lie group", "Batchelor",
  "even rules", "$\mathbb{R}^{p|q}$" returns zero on the geometric supermanifold notion (the
  "functor of points" hits are all ordinary schemes in `04-algebraic-geometry`). This is
  precisely the mathematical foundation the IAS course was written to install (Deligne-Morgan,
  "Notes on Supersymmetry following Joseph Bernstein," *Quantum Fields and Strings* Vol. 1,
  Part 1) and a clean, self-contained theorem-level deliverable. Deligne-Morgan 1999 anchor;
  Berezin-Leĭtes 1975, Kostant 1977, Batchelor 1979, Manin *Gauge Field Theory and Complex
  Geometry* originators.
- **prereqs:** `07.06.27` (Lie superalgebra — the odd-tangent / super Lie group algebra),
  `04.02.01` (scheme / locally ringed space — the ringed-space template),
  `03.09.05` (spinor bundle — the odd directions of super Poincaré space),
  `01.02.09` (category/functor/Yoneda — for the functor-of-points statement).
- **chapter dir:** `07-representation-theory/06-lie-algebraic/`; `section: representation-theory`,
  `chapter: lie-algebraic`. Three-tier; ~2200 words. Successor to `07.06.27`; flagged as a
  prereq the SUSY chapter (`12.19.02`) tacitly assumes. §Notation records $\mathbb{R}^{p|q}$,
  $\mathcal{O}_M$, the Berezinian, super Harish-Chandra pair.

---

## COVERED (not gaps) — verified against the live corpus

- **Wightman axioms (W1-W7) + Wightman-Gårding reconstruction theorem** — `08.10.07-wightman-axioms-w1w7` (full unit: the seven axioms, GNS/Borchers-algebra reconstruction, uniqueness via cyclicity).
- **Osterwalder-Schrader axioms / reflection positivity / Euclidean-Minkowski equivalence** — `08.10.07` (OS reconstruction as the dual half of Wightman) + `08.09.01-wick-rotation`. The axiomatic/functorial-QFT reflection-positivity datum is fully present.
- **Spin-statistics theorem** — `08.10.07` (stated and proved-in-outline via Källén-Lehmann + extended-tube analytic continuation + positivity; Pauli 1940, Burgoyne 1958). Not a gap.
- **PCT / CPT theorem** — `08.10.07` (Jost/Bargmann-Hall-Wightman extended-tube proof) + `12.06.04-crossing-symmetry-cpt-theorem-at-the-s--matrix-level`.
- **Reeh-Schlieder, Haag's theorem, Borchers algebra, Haag-Kastler net, Bisognano-Wichmann modular theory** — `08.10.07` (synthesis) + `13.09.09-unruh-effect-via-the-bisognano-wichmann-theorem` + `12.14.01-ccr-algebra-weyl-algebra-and-quasi-free-states`.
- **Atiyah-Segal functorial/axiomatic formulation of QFT (TQFT = symmetric monoidal functor)** — `03.02.20-handles-surgery-and-the-cobordism-category` (definition) + the worked `03-modern-geometry/16-tqft/` cluster (`03.16.01` Atiyah-Segal axioms, `03.16.02` 2d-TQFT↔Frobenius).
- **Feynman path integral for mathematicians (Wiener measure, Feynman-Kac)** — `08.14.01-brownian-motion-the-wiener-measure-and-the-path-integral` (rigorous Wiener-measure construction) + `08.07.01-path-integral` + `12.10.01-path-integral-formulation` + `08.06.01-gaussian-field` (the Gaussian functional measure).
- **Classical field theory: Lagrangian density, field-theoretic Euler-Lagrange, Noether currents** — `09.07.01-continuum-mechanics-field-theory` (Lagrangian density $\mathcal{L}(\phi,\partial_\mu\phi)$, field EL, energy current) + `09.03.01`/`05.00.04` (Noether).
- **Jet bundles & the variational/symmetry formalism** — `05.05.05-jet-bundle-and-total-derivative`, `05.05.06-prolongation-of-vector-fields`, `05.05.08-noethers-second-theorem-and-the-bianchi-identity`, `03.04.08-variational-calculus`. The jet-bundle variational apparatus is present (PDE-symmetry framing).
- **Covariant phase space / symplectic structure on the space of solutions (linear field)** — `13.09.02-klein-gordon-equation-on-a-globally-hyperbolic-spacetime` (the non-degenerate symplectic form on the solution space via advanced-minus-retarded $E$; Cauchy-data presymplectic form). Linear case fully covered.
- **Superspace, superfields, Berezin integration, the Berezinian, supercovariant derivatives** — `12.19.02-superspace-superfields-berezin-integration` (physics coordinate calculus; feeds GAP 1's geometric refinement).
- **Lie superalgebras, super-Jacobi identity, Kac classification of finite-dim simple Lie superalgebras** — `07.06.27-lie-superalgebras-graded-bracket-classification`.
- **Supersymmetry algebra (Haag-Łopuszański-Sohnius), supermultiplets, Wess-Zumino model, super-Yang-Mills, SUSY breaking + Witten index, super-QCD/Seiberg duality** — full `12.19.01`-`12.19.06` chapter.
- **Conformal field theory (Gawedzki lectures): Virasoro algebra, central charge, OPE, primaries, Ward identities, state-operator correspondence, BPZ** — `03.10.02-cft-basics` + `03.11.03-virasoro-algebra` + `08.06.02-conformal-criticality`.
- **Conformal blocks, the Verlinde formula, modular tensor categories, fusion rules** — `03.16.06-chern-simons-quantum-tqft-jones-reshetikhin-turaev` (conformal blocks as $H^0(\mathcal{M}_\Sigma,\mathcal{L}^{\otimes k})$, Verlinde formula, MTC) + `03.10.02`.
- **Wess-Zumino-Witten model & the level-$k$ extension** — `03.10.03-the-wess-zumino-witten-action-and-the-level-k-extension`.
- **Chern-Simons theory as a 3d TQFT (partition functions, Jones polynomial, Reshetikhin-Turaev)** — `03.16.06`; classical CS functional/forms in `03.07.17` and `03.06.07`.
- **Perturbative renormalisation (rigorous): BPHZ / forest formula, Epstein-Glaser causal perturbation theory** — `08.10.06-one-loop-renormalisation-in-phi-4` (BP/Hepp/Zimmermann forest formula at one loop) + `13.09.07-time-ordered-products-hollands-wald` (full Epstein-Glaser causal perturbation theory, Stueckelberg-Petermann renormalisation freedom, locally covariant axiomatisation, existence theorem). The rigorous renormalisation programme is present.
- **Wilsonian / momentum-shell RG; effective action** — `08.04.05-momentum-shell-wilson-renormalization-group` + `11.07.01-critical-phenomena-and-renormalization-group` + `08.08.03-effective-field-theory`.
- **Nonlinear sigma model & its RG** — `08.15.02-the-nonlinear-sigma-model-and-the-o-n-renormalization-group`; harmonic-map (geometric sigma-model) face in `03.02.26`/`03.02.29`.
- **BRST cohomology / Faddeev-Popov ghost quantisation** — `03.07.31-brst-cohomology-and-faddeev-popov-ghost-quantisation`.
- **Anomalies (chiral/ABJ, descent, anomaly-as-invertible-theory)** — `12.18.05-chiral-abj-anomaly-triangle-diagram` + `03.07.32-anomalies-via-descent-equations-and-the-index-theorem` + `03.16.05-anomalies-as-invertible-field-theories`.
- **Free quantum fields / Fock space / second quantisation / canonical QFT** — `12.05.04`/`12.05.05`/`12.05.06`, `12.13.01`/`12.13.02`, `12.12.01-canonical-quantum-field-theory`, `08.10.01`/`08.10.09`.

---

## OUT OF SCOPE (judged outside curriculum intent)

- **Witten/Kazhdan "Dynamics of QFT" survey lectures and the strings half of the course (perturbative string theory, the Polyakov path integral as a sum over worldsheet metrics, the critical dimension, vertex operators, string scattering amplitudes, dualities).** This is physics/string-theory survey with no isolable math-theorem-level payoff beyond the CFT and moduli-of-Riemann-surfaces machinery the corpus already carries (`03.10.02` namedrops the critical-dimension constraint; `06.08.03-moduli-of-riemann-surfaces` carries the worldsheet-moduli geometry). Manufacturing a "bosonic string" unit would be a physics-survey unit, not a theorem — declined per brief §14.
- **BV/antifield (Batalin-Vilkovisky) quantisation and the fully nonlinear covariant phase space / Peierls bracket.** BRST (`03.07.31`) and the linear-field covariant symplectic structure (`13.09.02`) are covered; the BV antibracket / master equation is a genuine omission but sits at the far frontier with thin theorem-level payoff for the curriculum's intended audience, and the course treats it as apparatus rather than result. Flagged as a possible future deepening target, not proposed as a unit now (conservative scope call).
- **Two-dimensional free-field / determinant-line / chiral-anomaly bundle technology (Quillen metric on $\det\bar\partial$, holomorphic anomaly).** Already present as the Quillen-metric / holomorphic-anomaly material referenced from `03.10.02` and `03.09.10` (Atiyah-Singer family index); no residual gap.

---

**Result: 1 genuine gap (`07.06.28` — supermanifolds as ringed spaces, functor of points, super Lie groups), 24 topic-clusters verified COVERED with unit ids, 3 OUT-OF-SCOPE items.** This is the expected outcome for a mature corpus meeting a broad mathematician's QFT/strings course: the single residual math-theorem-level item is the abstract supergeometry foundation (Deligne-Morgan's signature contribution to this very volume), which the physics superspace and the algebraic Lie-superalgebra units approach from both sides without ever stating.
