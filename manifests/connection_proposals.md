# Connection Proposals

Buffer for new connections proposed by production agents but not yet integrated into `connections.json`. The integration agent (or operator) reviews proposals weekly, integrates approved ones, rejects the rest with rationale.

Format per proposal:

```
## conn:proposal:NNN

- **proposer**: <agent ID or operator>
- **proposed_at**: <ISO timestamp>
- **from**: <concept_catalog_id>
- **to**: <concept_catalog_id>
- **type**: <one of the nine connection types>
- **strength**: <load-bearing | synthesis | lateral>
- **anchor_phrase**: "<short canonical phrase>"
- **synthesis_note**: <2–3 sentences explaining why this connection matters>
- **appears_in_units**: [<list>]
- **rationale**: <why we should register this>
- **status**: <pending | approved | rejected>
- **decision_at**: <timestamp when decided>
- **decision_note**: <optional rationale>
```

---

*No proposals yet. First batch from the Lawson-Michelsohn pilot will populate this.*

---

## conn:proposal:001 — psc-obstruction ↔ Atiyah-Singer index theorem

- **proposer**: Pass W weaving agent (Lawson-Michelsohn pilot)
- **proposed_at**: 2026-04-28
- **from**: spin-geometry.psc-obstruction
- **to**: index-theory.atiyah-singer.index-theorem
- **type**: foundation-of
- **strength**: load-bearing
- **anchor_phrase**: "psc obstruction reads the integer Â-genus from the Atiyah-Singer index"
- **synthesis_note**: The Lichnerowicz vanishing argument identifies $\mathrm{ind}(\not{D}^+)=\widehat A(M)\cdot[M]$ with zero on a closed psc spin manifold; this routes the entire psc obstruction chain through the Atiyah-Singer specialisation table. Without Atiyah-Singer, the Â-genus is not an integer; without the integer Â-genus, Hitchin and Gromov-Lawson cannot start.
- **appears_in_units**: ["03.09.10", "03.09.16"]
- **rationale**: Pass W identified the seam as load-bearing but unregistered; both 03.09.10 (which deepening D6 extended with Rokhlin's theorem citing the Â-genus / signature relation) and 03.09.16 (which uses ind = Â-genus throughout the Lichnerowicz chain) require the bridge. Currently 03.09.16 declares `conn:418.mckean-singer-supertrace` inbound, which is technically a heat-kernel/AS bridge; the foundational Â-genus integrality bridge is unregistered.
- **status**: pending
- **decision_at**:
- **decision_note**:

---

## conn:proposal:002 — psc-obstruction ↔ dirac-bundle / Bochner-Weitzenböck

- **proposer**: Pass W weaving agent (Lawson-Michelsohn pilot)
- **proposed_at**: 2026-04-28
- **from**: spin-geometry.psc-obstruction
- **to**: spin-geometry.dirac-bundle
- **type**: foundation-of
- **strength**: load-bearing
- **anchor_phrase**: "Lichnerowicz formula is the Bochner-Weitzenböck identity on the spinor bundle"
- **synthesis_note**: The spinor specialisation $D^2=\nabla^*\nabla+\tfrac{1}{4}\,\mathrm{Scal}$ of the universal Bochner-Weitzenböck identity is the structural input to every psc obstruction argument. The 03.09.16 prose already invokes this identification ("the Lichnerowicz formula is the Bochner-Weitzenböck identity on the spinor bundle"), but currently routes through `conn:416.dirac-bundle-hodge` whose anchor is de-Rham-specific.
- **appears_in_units**: ["03.09.14", "03.09.16"]
- **rationale**: Conn:416 is registered as Dirac-bundle ↔ Hodge Laplacian on de Rham forms — that anchor is wrong for psc context. The spinor specialisation is structurally distinct and load-bearing. A separate registration would let 03.09.16 cleanly invoke the bundle-foundation it actually depends on.
- **status**: pending
- **decision_at**:
- **decision_note**:

---

## conn:proposal:003 — sphere-bundle-hopf-index ↔ de Rham cohomology

- **proposer**: Agent D (Bott-Tu Pass 4 production batch, N10)
- **proposed_at**: 2026-04-28
- **from**: bundle.sphere-bundle-hopf-index
- **to**: topology.de-rham-cohomology
- **type**: foundation-of
- **strength**: load-bearing
- **anchor_phrase**: "Hopf index theorem built on global angular form and integration of Euler class"
- **synthesis_note**: The Bott-Tu §11 derivation of the Hopf index theorem $\sum_p \mathrm{ind}_p(V) = \chi(M)$ rests on the global angular form $\psi \in \Omega^{r-1}(S(E))$ with $\int_{\text{fibre}} \psi = 1$ and $d\psi = -\pi^\ast e(E)$, then applies Stokes in the de Rham complex. Without de Rham cohomology, the global-angular-form construction cannot proceed; without integration of the Euler form, the topological identity does not follow. This is the structural foundation of the entire 03.05.10 unit and the load-bearing bridge to 03.04.06.
- **appears_in_units**: ["03.05.10", "03.04.06"]
- **rationale**: The proposed `conn:NEW.hopf-index-poincare-hopf` is named in the Bott-Tu Pass 4 plan §3.1 (N10 connection brief) as the new connection introduced by this unit. It is foundational rather than synthesis-grade because the Hopf index theorem is not stated or proved without the de Rham apparatus; integration with the existing `conn:080.de-rham-atiyah-singer-index` extends the de-Rham-into-index-theory path with a new Hopf-Poincaré entry point.
- **status**: pending
- **decision_at**:
- **decision_note**:

---

## Phase 1 bootstrap summary — 412 connections registered

The Phase 1 pass over all 182 shipped Master `## Connections` sections produced 412 registered connections. Distribution across the nine taxonomy types: foundation-of 304, bridging-theorem 79, generalisation 12, equivalence 6, analogy 6, dual 3, specialisation 1, recurrence 1, limit 0. By strength: load-bearing 80, synthesis 332, lateral 0 (single-unit, low-prose foundation-of links were filtered out as too thin per the spec). The 5 most-invoked connections (each in 2 units, since the bootstrap corpus has limited bidirectional overlap) are: `conn:001.canonical-sheaf-serre-duality` (Canonical sheaf — Serre duality), `conn:002.riemann-roch-theorem-riemann-roch-theorem` (Riemann-Roch curves — Riemann-Roch RS), `conn:003.scheme-riemann-roch-theorem` (Scheme — Riemann-Roch curves), `conn:004.serre-duality-hodge-decomposition` (Serre duality — Hodge decomposition), and `conn:005.serre-duality-kodaira-vanishing` (Serre duality — Kodaira vanishing). The bidirectional merge prefers the more specific connection type (equivalence > dual > bridging-theorem > specialisation > generalisation > limit > analogy > recurrence > foundation-of).

**Patterns observed.** Foundation-of dominates (~74% of registry) — expected, since most Master Connections sections are written as forward-promise listings of downstream uses, and the prerequisite framing maps naturally to "X is the substrate Y is built on." The bridging-theorem class is the second-largest (~19%), driven by recurrent invocations of named theorems (Atiyah-Singer, Riemann-Roch, GAGA, Stokes, spectral theorem, Bott periodicity, Hodge decomposition, Kodaira vanishing). True equivalences, dualities, specialisations, analogies, and limits are rare in the prose (only ~28 combined) — this is a genuine gap: many connections that *should* be classified as equivalences (e.g., GAGA between algebraic and analytic cohomology) or duals (e.g., Spec/Γ anti-equivalence) are instead phrased generically in connection-prose and got classified as foundation-of by the heuristic. A targeted human-pass over the foundation-of bucket would likely promote 30–50 entries to more precise types and re-anchor their phrases accordingly.

**Gaps observed.** (1) Cross-strand connections are under-represented: most registered connections are intra-section (within `04-algebraic-geometry`, within `07-representation-theory`, etc.), but the curriculum architecture promises strong cross-strand bridges (e.g., spin-geometry → index-theory → K-theory, or stat-mech → CFT → representation theory). Phase-2 weaving should explicitly check whether expected cross-strand connections exist in prose. (2) Most connections appear in only 1 unit — the corpus has not yet built up the kind of repeated-anchor-phrase reuse that the Layer-4 vision requires; this is expected for a pre-Pass-W corpus. (3) The `recurrence` and `limit` types are nearly empty (1 and 0 entries respectively), reflecting that the bootstrap units rarely deploy the prose patterns that signal these relations. Future production should be encouraged to use them, particularly for stalk-of-sheaf and Bott-periodicity-style recurrences.

**Coverage.** 159 of 182 units appear in at least one registered connection. The remaining 23 units have Master Connections that either (a) reference targets outside the catalog, (b) use prose so generic the chunker found no `[NN.NN.NN]` reference, or (c) had all connections classified as too-thin lateral and dropped during filtering. A targeted second pass with relaxed thresholds for narrowly-bullet-phrased prerequisite links could reclaim most of these without polluting the registry with low-signal entries.

---

## conn:proposal:004 — Künneth ↔ Leray-Hirsch

- **proposer**: Agent B (Bott-Tu Pass 4 production batch, N5)
- **proposed_at**: 2026-04-28
- **from**: diffgeo.de-rham.kunneth
- **to**: alg-top.leray-hirsch
- **type**: foundation-of
- **strength**: load-bearing
- **anchor_phrase**: "Leray-Hirsch built on Künneth on each fiber"
- **synthesis_note**: The Leray-Hirsch theorem says the cohomology of a fiber bundle $F\to E\to B$ is $H^*(B)\otimes H^*(F)$ when $H^*(F)$ pulls back to a free $H^*(B)$-module on $E$. The construction is fiberwise Künneth — at each base point, the fiber cohomology is identified with $H^*(F)$, and the bundle assembly extends the pointwise Künneth to the global statement. Without the Künneth formula on each fiber, Leray-Hirsch has no base case.
- **appears_in_units**: ["03.04.12", "03.13.03"]
- **rationale**: Bott-Tu §17 develops Leray-Hirsch as an explicit application of fiberwise Künneth, and §5 + §9's Künneth proofs are the prototype. The forthcoming N9 unit (Leray-Hirsch + splitting principle) and the present N5 (Künneth dual proof) both invoke this anchor. Currently unregistered.
- **status**: pending
- **decision_at**:
- **decision_note**:

---

## conn:proposal:005 — de Rham theorem ↔ singular cohomology (three routes)

- **proposer**: Agent B (Bott-Tu Pass 4 production batch, N6)
- **proposed_at**: 2026-04-28
- **from**: alg-top.singular-cohomology
- **to**: topology.de-rham-cohomology
- **type**: equivalence
- **strength**: load-bearing
- **anchor_phrase**: "de Rham cohomology equivalent to singular cohomology with real coefficients (three routes: MV induction, Čech-de Rham, sheaf-cohomology Leray)"
- **synthesis_note**: De Rham cohomology and singular cohomology with real coefficients agree on smooth manifolds via integration. The de Rham theorem admits three structurally distinct proofs (Mayer-Vietoris induction over a good cover; Čech-de Rham double-complex collapse; sheaf cohomology of the constant sheaf via fine resolution by $\Omega^*$). The three-routes characterisation is the dual-proof discipline of Bott-Tu §5 + §9 + §15 elevated to a triplet.
- **appears_in_units**: ["03.04.13", "04.03.01", "03.04.06"]
- **rationale**: This is the central comparison theorem of Bott-Tu Chapter II–III. The three-routes framing is what gap block 8 (singular cohomology) and intuition arc 4 (the de Rham comparison) require. N6 (singular cohomology + de Rham theorem) and the deepening D2 (sheaf cohomology) both invoke this anchor; unit `03.04.06` (de Rham cohomology) carries it as well. Currently unregistered.
- **status**: pending
- **decision_at**:
- **decision_note**:

---

## conn:proposal:006 — local system ↔ $\pi_1$ representation

- **proposer**: Agent B (Bott-Tu Pass 4 production batch, N11)
- **proposed_at**: 2026-04-28
- **from**: alg-geom.cohomology.local-system-monodromy
- **to**: topology.homotopy
- **type**: equivalence
- **strength**: load-bearing
- **anchor_phrase**: "local system on connected $X$ equivalent to $\pi_1(X)$-representation"
- **synthesis_note**: A local system of $A$-modules on a connected, locally simply-connected space $X$ is the same data as a representation of the fundamental group $\pi_1(X, x_0)$ on a fixed $A$-module — the **monodromy theorem**. Forward functor: take stalk at basepoint and parallel-transport along loops. Backward functor: form the associated bundle $\widetilde{X}\times_\pi V$ on the universal cover. The equivalence is the structural foundation of Bott-Tu §13 and the Riemann-Hilbert correspondence.
- **appears_in_units**: ["04.03.02", "03.12.01"]
- **rationale**: N11 (local systems and monodromy) establishes the equivalence formally; existing unit `03.12.01` (homotopy / fundamental group) is the natural bidirectional partner. The connection is load-bearing for the orientation-double-cover treatment, the twisted-Poincaré-duality formula, and the Riemann-Hilbert correspondence further downstream. Currently unregistered.
- **status**: pending
- **decision_at**:
- **decision_note**:

---

## conn:proposal:007 — local system ↔ twisted de Rham

- **proposer**: Agent B (Bott-Tu Pass 4 production batch, N11)
- **proposed_at**: 2026-04-28
- **from**: alg-geom.cohomology.local-system-monodromy
- **to**: diffgeo.de-rham.thom-cv-cohomology
- **type**: foundation-of
- **strength**: load-bearing
- **anchor_phrase**: "twisted de Rham complex built on orientation local system"
- **synthesis_note**: Twisted de Rham cohomology with values in a flat vector bundle is the de Rham analogue of cohomology with local-system coefficients; the Riemann-Hilbert correspondence identifies the two on a complex manifold. For the orientation local system $\mathrm{or}_M$ on a non-orientable manifold, the twisted de Rham cohomology supplies the orientation-twisted Poincaré duality $H^k(M; \underline{\mathbb{R}})\cong H^{n-k}_c(M; \mathrm{or}_M)$, which Bott-Tu §7 takes as its formulation of the non-orientable case.
- **appears_in_units**: ["04.03.02", "03.04.09"]
- **rationale**: N11 (local systems) provides the local-system layer; N4 (compactly-vertical / Thom on a vector bundle) provides the twisted de Rham layer. The orientation-twisted Poincaré duality of Bott-Tu §7 sits exactly at this interface. Currently unregistered.
- **status**: pending
- **decision_at**:
- **decision_note**:

---

## conn:proposal:008 — exact couple ↔ Čech-de Rham double complex

- **proposer**: Agent C (Bott-Tu Pass 4 production batch, N7)
- **proposed_at**: 2026-04-28
- **from**: homotopy.spectral-sequence.filtered-complex
- **to**: diffgeo.de-rham.cech-de-rham-double-complex
- **type**: equivalence
- **strength**: load-bearing
- **anchor_phrase**: "Čech-de Rham double-complex spectral sequence is the prototype of the abstract filtered-complex spectral sequence"
- **synthesis_note**: The Čech-de Rham double complex of [03.04.11] is the concrete prototype for the abstract spectral-sequence machinery developed in [03.13.01]. Its two filtrations produce the two collapsing spectral sequences (de Rham via row collapse on a good cover; Čech of $\underline{\mathbb{R}}$ via column collapse), with both abutments equal to the total cohomology, hence the de Rham theorem on a good cover. Bott-Tu §14 emphasises that the reader has *already done several spectral sequences without realising it* by the time they reach the abstract machinery — the Čech-de Rham computation is the principal such example. The equivalence is structural: the abstract pages of [03.13.01] are the algebraic shadow of the concrete tic-tac-toe ascent of [03.04.11].
- **appears_in_units**: ["03.13.01", "03.04.11"]
- **rationale**: Both units are now shipped (Agent A's N3 and Agent C's N7). The connection is invoked explicitly in the Master section of N7 and registered in the prerequisites graph. Currently unregistered in connections.json.
- **status**: pending
- **decision_at**:
- **decision_note**:

---

## conn:proposal:009 — spectral sequence (general) ↔ Leray-Serre (multiplicative)

- **proposer**: Agent C (Bott-Tu Pass 4 production batch, N7→N8)
- **proposed_at**: 2026-04-28
- **from**: homotopy.spectral-sequence.filtered-complex
- **to**: homotopy.spectral-sequence.serre
- **type**: foundation-of
- **strength**: load-bearing
- **anchor_phrase**: "Leray-Serre spectral sequence built on the spectral sequence of a filtered complex"
- **synthesis_note**: The Leray-Serre spectral sequence is the geometric specialisation of the abstract filtered-complex spectral sequence: filter the singular cochain complex of the total space by skeleta of the base. The multiplicative structure inherited from the cup product on cochains makes each page a bigraded ring with $d_r$ a derivation, the structural input that powers all collapse arguments and edge-homomorphism identifications. Without the abstract filtered-complex framework of [03.13.01], the Leray-Serre spectral sequence cannot be constructed.
- **appears_in_units**: ["03.13.01", "03.13.02"]
- **rationale**: Foundation-of relation between the apex of the spectral-sequence chapter and its first non-trivial application. Currently unregistered.
- **status**: pending
- **decision_at**:
- **decision_note**:

---

## conn:proposal:010 — Leray-Serre ↔ Pontryagin/Chern (Gysin/Euler)

- **proposer**: Agent C (Bott-Tu Pass 4 production batch, N8)
- **proposed_at**: 2026-04-28
- **from**: homotopy.spectral-sequence.serre
- **to**: char-classes.pontryagin-chern.definitions
- **type**: foundation-of
- **strength**: load-bearing
- **anchor_phrase**: "Gysin sequence built on Leray-Serre with Euler-class transgression"
- **synthesis_note**: The Gysin sequence of an oriented sphere bundle is the degenerate case of the Leray-Serre spectral sequence on a fibration with two-row fibre cohomology. The single non-zero differential is the transgression, which equals multiplication by the Euler class. This identification is the only spectral-sequence-derivation route to the Euler class for non-spin bundles, and through Borel-Hirzebruch's classifying-space framework it is the foundation of the modern theory of Pontryagin and Chern classes.
- **appears_in_units**: ["03.13.02", "03.06.04"]
- **rationale**: The Gysin sequence is the load-bearing application of Leray-Serre to characteristic-class theory. Currently unregistered in connections.json (which has Pontryagin/Chern incoming connections but not the Gysin/Serre route).
- **status**: pending
- **decision_at**:
- **decision_note**:

---

## conn:proposal:011 — Leray-Serre ↔ loop-space cohomology

- **proposer**: Agent C (Bott-Tu Pass 4 production batch, N8)
- **proposed_at**: 2026-04-28
- **from**: homotopy.spectral-sequence.serre
- **to**: topology.eilenberg-maclane
- **type**: foundation-of
- **strength**: load-bearing
- **anchor_phrase**: "cohomology of $\\Omega S^n$ built on Serre spectral sequence of path-loop fibration"
- **synthesis_note**: The Serre spectral sequence of the path-loop fibration $\Omega X \to PX \to X$ (with $PX$ contractible) computes $H^*(\Omega X)$ from $H^*(X)$ by reverse engineering — the abutment is $H^*(\mathrm{pt})$, so all classes outside total degree zero must die through the differentials. For $X = S^n$, this gives $H^*(\Omega S^n; \mathbb{Q})$ in closed form (polynomial for odd $n$, exterior-times-polynomial for even). For $X = K(A, n)$, it gives the inductive computation of $H^*(K(A, n))$ from $H^*(K(A, n-1))$, supplying the Cartan-Serre-Milgram tables of Eilenberg-MacLane cohomology and the Steenrod algebra.
- **appears_in_units**: ["03.13.02", "03.12.05", "03.12.06 (forthcoming Sullivan)"]
- **rationale**: Foundation-of relation. The Serre/path-loop computation is the principal route to loop-space cohomology and to the Steenrod algebra structure on $K(\mathbb{Z}/p, n)$. Currently unregistered.
- **status**: pending
- **decision_at**:
- **decision_note**:

---

## conn:proposal:012 — Leray-Hirsch ↔ splitting principle

- **proposer**: Agent C (Bott-Tu Pass 4 production batch, N9)
- **proposed_at**: 2026-04-28
- **from**: homotopy.spectral-sequence.leray-hirsch
- **to**: char-classes.pontryagin-chern.definitions
- **type**: foundation-of
- **strength**: load-bearing
- **anchor_phrase**: "splitting principle built on Leray-Hirsch applied to flag bundle"
- **synthesis_note**: The splitting principle for vector bundles — that any characteristic-class identity verified for sums of line bundles holds universally — rests on the projective bundle theorem (Leray-Hirsch applied to a $\mathbb{C}P^{n-1}$-bundle). Iterating the projectivisation produces the flag bundle on which the original bundle splits as a direct sum of line bundles, and by Leray-Hirsch the cohomology pulls back injectively. Whitney sum, Pontryagin classes, Chern character, and almost every characteristic-class identity in twentieth-century topology are derived through this technique. Borel-Hirzebruch 1958/59 codified the principle; Grothendieck 1958 reformulated it as the projective-bundle definition of Chern classes.
- **appears_in_units**: ["03.13.03", "03.06.04"]
- **rationale**: The splitting principle is the load-bearing computational technique for characteristic classes. Currently unregistered. Connection is invoked from N9's Master section.
- **status**: pending
- **decision_at**:
- **decision_note**:

---

## conn:proposal:013 — splitting principle ↔ flag-manifold Borel presentation

- **proposer**: Agent C (Bott-Tu Pass 4 production batch, N9)
- **proposed_at**: 2026-04-28
- **from**: homotopy.spectral-sequence.leray-hirsch
- **to**: k-theory.classifying-spaces
- **type**: equivalence
- **strength**: synthesis
- **anchor_phrase**: "splitting principle equivalent to Borel presentation of flag-manifold cohomology"
- **synthesis_note**: The splitting principle factors through the universal classifying-space picture: for a compact Lie group $G$ with maximal torus $T$ and Weyl group $W$, the natural map $BT \to BG$ is rationally a finite covering with deck group $W$, identifying $H^*(BG; \mathbb{Q}) = H^*(BT; \mathbb{Q})^W$. This is Borel's presentation: characteristic classes of a $G$-bundle are pullbacks of $W$-invariant polynomials on $\mathfrak{t}^*$. For $G = U(n)$, the flag manifold $G/T = F\ell_n$ is the universal flag bundle whose cohomology is the Schubert presentation. The splitting principle in its geometric form (flag-bundle pullback) and its universal form (classifying-space pullback) are equivalent characterisations of the same construction.
- **appears_in_units**: ["03.13.03", "03.08.04 (classifying space)", "03.08.05 (forthcoming N13)"]
- **rationale**: The two presentations are equivalent characterisations of the same machinery. Currently unregistered. Connection invoked from N9 Master section and forthcoming N13.
- **status**: pending
- **decision_at**:
- **decision_note**:

