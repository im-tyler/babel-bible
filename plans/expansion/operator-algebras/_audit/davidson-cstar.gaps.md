# Audit — Davidson, *C\*-algebras by Example* (Fields Institute Monographs 6, 1996)

- **source_book:** `davidson-cstar`
- **source_curriculum:** `operator-algebras`
- **target chapters:** `content/39-operator-algebras/01-c-star-algebras-basics/`,
  `…/02-af-algebras-k-theory/`
  (frontmatter `section: operator-algebras`; `chapter:` = the chapter name **without** the
  number prefix, i.e. `c-star-algebras-basics` / `af-algebras-k-theory`; id format `39.<CC>.<UU>`)
- **date:** 2026-06-05
- **ownership:** this audit owns chapters **39.01 / 39.02**. Parallel audits:
  Takesaki owns **39.03 / 39.04** (von Neumann algebras, Tomita–Takesaki); Brown–Ozawa owns
  **39.05** (nuclearity, exactness); Connes owns **39.06 / 39.07** (spectral triples / NCG,
  cyclic cohomology).

## Verdict

Section `39-operator-algebras` is a **freshly scaffolded, entirely empty** chapter set — all seven
directories `01-c-star-algebras-basics … 07-cyclic-cohomology` contain **no files**. There is
therefore **no existing C\*-algebra theory anywhere in `content/`** to deduplicate against. Targeted
greps confirm the headline objects are absent from the corpus:

- `cuntz` / `cuntz algebra` → **0 hits**; `gelfand duality`, `C_0(X)`, `unitization`,
  `noncommutative torus`, `dimension group`, `approximately finite`, `group c*-algebra`,
  `operator k-theory` → **0 hits**.
- `toeplitz` hits (12 files) are **all** Toeplitz *matrices / determinants* (probability SLLN,
  Gärtner–Ellis, the 2-D Ising / dimer Pfaffian, large deviations) — **not** the Toeplitz
  **C\*-algebra / extension**, which is absent.
- `bratteli`, `effros`, `elliott` hits are spurious (no Bratteli **diagram**, no Effros–Handelman–Shen
  / Elliott **AF-classification** anywhere — the strings appear in unrelated PDE / measure / name
  contexts).
- `six-term` hits (4 files) are the **K-theory-with-reality (KR)** and sheaf-cohomology exact
  sequences in `03.08.12` / `03.09.12` / `06.04.07`, **not** the C\*-algebra **six-term exact
  sequence** of an extension.

**What exists is PREREQUISITE Hilbert-space / functional-analysis machinery, reused but never
re-proposed:** bounded operators `02.11.01`, Hilbert space `02.11.08`, inner-product space
`02.11.07`, Banach spaces `02.11.04`, Hahn–Banach `02.11.02`, compact operators `02.11.05`,
**unbounded self-adjoint operators `02.11.03`** (this is where the spectral measure / projection-valued
measure / **bounded-Borel functional calculus on a Hilbert space** lives — the Hilbert-space
spectral theorem), finite-dim spectral theorem `01.01.13`, ring/ideal `01.02.06`, and Fredholm
operators `03.09.06` (kernel/cokernel index — the analytic ingredient of the Toeplitz extension).

**K-theory disambiguation (critical, per audit brief).** `content/03-modern-geometry/08-k-theory/`
holds **TOPOLOGICAL K-theory of vector bundles** — `03.08.01` \(K^0(X)=\) Grothendieck group of
bundles, `03.08.03` Thom iso, `03.08.07` Bott periodicity (Morse-theoretic, for \(U\)/\(O\)),
`03.08.09` worked computations. This is **not** the **operator / C\*-algebra K-theory** of Davidson
Ch. V–VI: \(K_0(A)\) of **equivalence classes of projections** in matrix amplifications \(M_\infty(A)\),
\(K_1(A)\) of **homotopy classes of unitaries**, the **six-term exact sequence** of a short exact
sequence of C\*-algebras, and the **index map** \(\partial\) realising Bott periodicity at the
operator level. The Serre–Swan bridge \(K^0(X)\cong K_0(C(X))\) is a *theorem connecting* the two and
is itself a genuine gap. The operator-K-theory units below **cross-reference** `03.08.*` (same Bott
periodicity ⇒ 2-periodicity, abstractly) but build the projection/unitary picture from scratch.

**Quasi-free-state / GNS note.** `12.14.01` (CCR/Weyl algebra, quasi-free states) and the algebraic-QFT
units `08.10.07`, `13.09.*` *invoke* "GNS" and "Gelfand–Naimark" **in passing** as named tools for
constructing field representations from states; **none builds the GNS construction or the
Gelfand–Naimark theorem as a C\*-algebra theorem**. The CCR unit's own frontmatter lists a *proposed*
`12.14.02 "GNS construction"` successor that **was never realised** (the actual `12.14.02` is the
Heisenberg group / Stone–von Neumann). GNS and both Gelfand–Naimark theorems are therefore genuine
gaps owned here.

**Prereq convention.** Verified-existing anchors used below: `02.11.01` (bounded operators),
`02.11.08` (Hilbert space), `02.11.07` (inner-product space), `02.11.04` (Banach spaces), `02.11.02`
(Hahn–Banach), `02.11.05` (compact operators), `02.11.03` (unbounded self-adjoint / Hilbert-space
spectral measure & Borel functional calculus), `01.01.13` (finite-dim spectral theorem), `01.02.06`
(ring homomorphism / ideal), `03.09.06` (Fredholm operators), `03.08.01` (topological K-theory of
bundles), `03.08.07` (Bott periodicity, topological). Ids `39.01.* / 39.02.*` other than a unit's own
are **planned sibling units defined in this same audit**, listed as prereqs so the producer can wire
the DAG once siblings land.

---

## GENUINE GAPS

### 39.01.01 — C\*-algebras: axioms, spectrum, and the continuous functional calculus
- **spec:** The category of **Banach \*-algebras** and **C\*-algebras** (the C\*-identity
  \(\lVert a^*a\rVert=\lVert a\rVert^2\)), with the standard examples \(B(H)\), \(C_0(X)\), \(M_n\),
  and \(K(H)\). **Unitization** \(A^+\) and approximate units. The **spectrum** \(\sigma(a)\), the
  **spectral-radius formula** \(r(a)=\lim\lVert a^n\rVert^{1/n}=\sup|\sigma(a)|\), and the basic
  spectral permanence (\(\sigma\) computed in a sub-C\*-algebra agrees). Build the **continuous
  functional calculus** for a single normal element: the isometric \*-isomorphism
  \(C(\sigma(a))\xrightarrow{\ \cong\ }C^*(a,1)\), \(f\mapsto f(a)\), and its corollaries (positivity
  of \(a^*a\), existence of \(|a|\) and the polar/positive parts, automatic continuity of
  \*-homomorphisms = norm-decreasing). *(Distinct from `02.11.03`, which builds the **Borel**
  functional calculus of one (un)bounded self-adjoint operator via its spectral measure on a fixed
  Hilbert space; this unit is the **abstract C\*-algebra** continuous calculus \(C(\sigma(a))\cong
  C^*(a,1)\) with no ambient Hilbert space, and the spectral-radius/C\*-identity structure theory.)*
- **prereqs:** `02.11.01`, `02.11.04`, `02.11.05`, `01.02.06`, `01.01.13`
- **chapter:** `c-star-algebras-basics` · **section:** `operator-algebras`
- **source_book:** `davidson-cstar` · **source_curriculum:** `operator-algebras`

### 39.01.02 — Commutative C\*-algebras and the Gelfand–Naimark duality \(A\cong C_0(X)\)
- **spec:** The **Gelfand transform** and the structure theorem for commutative C\*-algebras: the
  **maximal-ideal / character space** \(\widehat A\) (Gelfand spectrum) with the weak-\* topology, and
  the **first Gelfand–Naimark theorem** — every commutative C\*-algebra \(A\) is isometrically
  \*-isomorphic to \(C_0(\widehat A)\) (\(C(\widehat A)\) in the unital case, with \(\widehat A\)
  compact Hausdorff). Develop this into the **anti-equivalence of categories** (Gelfand duality)
  between commutative C\*-algebras and locally compact Hausdorff spaces, the origin of the
  "noncommutative topology" slogan. Recover the continuous functional calculus of `39.01.01` as the
  commutative case \(C^*(a,1)\cong C(\sigma(a))\).
- **prereqs:** `39.01.01`, `02.11.02`, `01.02.06`
- **chapter:** `c-star-algebras-basics` · **section:** `operator-algebras`
- **source_book:** `davidson-cstar` · **source_curriculum:** `operator-algebras`

### 39.01.03 — States, the GNS construction, and the Gelfand–Naimark representation theorem
- **spec:** **Positive linear functionals** and **states** (norm-one positive functionals) on a
  C\*-algebra; the order structure on \(A_{\mathrm{sa}}\) and the existence of states separating points
  (Hahn–Banach + positivity). The **GNS construction**: from a state \(\varphi\) build the Hilbert
  space \(H_\varphi\) (completion of \(A/N_\varphi\) under \(\langle a,b\rangle=\varphi(b^*a)\)), the
  cyclic \*-representation \(\pi_\varphi\), and the cyclic vector \(\xi_\varphi\) with
  \(\varphi(a)=\langle\pi_\varphi(a)\xi_\varphi,\xi_\varphi\rangle\). Pure states ↔ irreducible
  representations. Assemble the **universal representation** and prove the **second Gelfand–Naimark
  theorem**: every C\*-algebra is isometrically \*-isomorphic to a norm-closed \*-subalgebra of some
  \(B(H)\). *(This is the C\*-algebra theorem the algebraic-QFT units `12.14.01` / `08.10.07` /
  `13.09.*` merely **invoke by name** to build field representations from quasi-free / Hadamard states;
  it is constructed here for the first time.)*
- **prereqs:** `39.01.01`, `39.01.02`, `02.11.08`, `02.11.07`, `02.11.02`
- **chapter:** `c-star-algebras-basics` · **section:** `operator-algebras`
- **source_book:** `davidson-cstar` · **source_curriculum:** `operator-algebras`

### 39.01.04 — The Toeplitz algebra, the Cuntz algebras \(\mathcal O_n\), and extensions
- **spec:** Two cornerstone **concrete C\*-algebras presented by generators and relations**.
  (i) The **Toeplitz algebra** \(\mathcal T=C^*(S)\) generated by the unilateral shift \(S\)
  (\(S^*S=1\), \(SS^*=1-p_0\)): the short exact sequence
  \(0\to K(H)\to\mathcal T\to C(\mathbb T)\to 0\) (Coburn's theorem — \(\mathcal T\) is the universal
  C\*-algebra of a single isometry), exhibiting \(\mathcal T\) as the **Toeplitz extension** of
  \(C(\mathbb T)\) by the compacts, with **Fredholm index** = winding number for the symbol
  (Toeplitz/Gohberg–Krein). (ii) The **Cuntz algebras** \(\mathcal O_n\) (\(2\le n\le\infty\)):
  isometries \(S_1,\dots,S_n\) with \(\sum S_iS_i^*=1\); **simplicity**, the absence of a trace, and
  the gauge action. Frame both as the prototypes of "C\*-algebras defined by an extension /
  by generators" feeding the K-theory chapter. Uses Fredholm operators `03.09.06` for the index.
- **prereqs:** `39.01.01`, `39.01.03`, `02.11.05`, `03.09.06`
- **chapter:** `c-star-algebras-basics` · **section:** `operator-algebras`
- **source_book:** `davidson-cstar` · **source_curriculum:** `operator-algebras`

### 39.02.01 — AF algebras, Bratteli diagrams, and the irrational rotation algebra \(A_\theta\)
- **spec:** **Approximately finite-dimensional (AF) C\*-algebras** as inductive limits of
  finite-dimensional C\*-algebras \(\varinjlim M_{n_1}\oplus\dots\oplus M_{n_k}\); the **Bratteli
  diagram** encoding the embeddings, with the standard examples (UHF algebras incl. the CAR algebra,
  the GICAR algebra, the Fermion / \(2^\infty\) algebra). Then the **irrational rotation algebra**
  (**noncommutative torus**) \(A_\theta=C^*(u,v\mid vu=e^{2\pi i\theta}uv)\): its construction as a
  crossed product \(C(\mathbb T)\rtimes_\theta\mathbb Z\), simplicity and unique trace for irrational
  \(\theta\), and (as a capstone pointer) its **AF-embeddability** (Pimsner–Voiculescu) — the headline
  worked example tying generators-and-relations to AF structure.
- **prereqs:** `39.01.01`, `39.01.02`, `01.02.06`, `02.11.08`
- **chapter:** `af-algebras-k-theory` · **section:** `operator-algebras`
- **source_book:** `davidson-cstar` · **source_curriculum:** `operator-algebras`

### 39.02.02 — Operator K-theory: \(K_0\) of projections, \(K_1\) of unitaries
- **spec:** Build **C\*-algebra K-theory** from scratch. \(K_0(A)\): Murray–von Neumann equivalence
  and homotopy of projections over \(M_\infty(A)=\varinjlim M_n(A)\), the abelian monoid of classes
  under \(\oplus\), and its **Grothendieck group**; the unital vs non-unital (\(\widetilde K_0\),
  scaled ordered group) conventions and functoriality/homotopy invariance/half-exactness/stability.
  \(K_1(A)\): homotopy classes of unitaries in \(M_\infty(\widetilde A)\) under \(\oplus\). Compute the
  basic values: \(K_0(\mathbb C)=\mathbb Z\), \(K_0(M_n)=\mathbb Z\), \(K_0(K)=\mathbb Z\),
  \(K_0(B(H))=0\), \(K_1(\mathbb C)=0\), and \(K_1(C(\mathbb T))=\mathbb Z\) (winding number).
  **Cross-reference, do not duplicate, `03.08.01`** (topological \(K^0\) of bundles): state the
  **Serre–Swan / \(K^0(X)\cong K_0(C(X))\)** bridge as the link between the two K-theories.
- **prereqs:** `39.01.01`, `39.01.03`, `03.08.01`, `02.11.05`
- **chapter:** `af-algebras-k-theory` · **section:** `operator-algebras`
- **source_book:** `davidson-cstar` · **source_curriculum:** `operator-algebras`

### 39.02.03 — The six-term exact sequence, the index/exponential maps, and Bott periodicity
- **spec:** The **homological engine** of operator K-theory. For a short exact sequence
  \(0\to J\to A\to A/J\to 0\) of C\*-algebras, the **six-term cyclic exact sequence**
  \(K_0(J)\to K_0(A)\to K_0(A/J)\xrightarrow{\partial}K_1(J)\to K_1(A)\to K_1(A/J)
  \xrightarrow{\exp}K_0(J)\), with explicit **index map** \(\partial\) (lift a unitary, take the
  index/defect projection) and **exponential map**. State **Bott periodicity**
  \(K_i(SA)\cong K_{i+1}(A)\), \(K_0(A)\cong K_0(S^2A)\) at the operator level (cross-referencing the
  *topological* Bott periodicity `03.08.07` as the same 2-periodicity proved bundle-theoretically).
  Run the worked computations the machinery is for: the **Toeplitz extension** `39.01.04` giving the
  Fredholm-index ↔ winding-number boundary map, \(K_*(\mathcal O_n)\) (\(K_0=\mathbb Z/(n-1)\)),
  and the **classification of AF algebras by their ordered \(K_0\)** = scaled **dimension group**
  (Elliott's theorem; Effros–Handelman–Shen characterisation of dimension groups), with
  \(K_0(A_\theta)=\mathbb Z+\theta\mathbb Z\) as the closing example.
- **prereqs:** `39.02.02`, `39.01.04`, `39.02.01`, `03.08.07`, `03.09.06`
- **chapter:** `af-algebras-k-theory` · **section:** `operator-algebras`
- **source_book:** `davidson-cstar` · **source_curriculum:** `operator-algebras`

---

## COVERED (not gaps)

- **Spectral measure / projection-valued measure / Borel functional calculus of a single
  (un)bounded self-adjoint or normal operator on a fixed Hilbert space** — `02.11.03` (and the
  finite-dim model `01.01.13`). Reused as the analytic prerequisite for `39.01.01`; the **abstract
  C\*-algebra continuous functional calculus** \(C(\sigma(a))\cong C^*(a,1)\) (no ambient \(H\)) is the
  genuine gap, not this.
- **Bounded / compact operators, \(B(H)\), \(K(H)\), Fredholm operators and the analytic index** —
  `02.11.01`, `02.11.05`, `03.09.06`. The building-block algebras and the index used in the Toeplitz
  extension; referenced as prereqs, not re-proposed.
- **Topological K-theory of vector bundles** — `03.08.01` (\(K^0(X)\)), `03.08.03` (Thom iso),
  `03.08.07` / `03.08.08` (Bott periodicity), `03.08.09` (computations), `03.08.02` (Adams ops). The
  **operator / C\*-algebra K-theory** (\(K_0\) of projections, \(K_1\) of unitaries, the six-term
  sequence) is a **different theory**; `39.02.*` cross-references these for the Serre–Swan bridge and
  the shared 2-periodicity, but builds the algebraic K-theory independently.
- **"GNS" / "Gelfand–Naimark" invoked by name to build field representations from states** —
  `12.14.01` (CCR/Weyl, quasi-free states), `08.10.07` (Wightman axioms / reconstruction),
  `13.09.02/03/04/06` (Hadamard states). These **use** the construction as a named tool; the
  construction itself (GNS + both Gelfand–Naimark theorems) is built in `39.01.02/03`.
- **Hahn–Banach, Banach/Hilbert/inner-product-space foundations, rings & ideals** — `02.11.02`,
  `02.11.04`, `02.11.08`, `02.11.07`, `01.02.06`. Standard prerequisites; not C\*-algebra units.

## OUT OF SCOPE

- **Von Neumann algebras** (the bicommutant theorem, factors and the type I/II/III classification,
  the predual, normal states/weights) — **Takesaki `39.03`**. Davidson touches \(W^*\) ideas only as
  background; the GNS/state material here stays C\*-level.
- **Tomita–Takesaki modular theory** (the modular operator \(\Delta\), modular automorphism group,
  KMS states) — **Takesaki `39.04`**.
- **Nuclearity, exactness, completely positive maps / Stinespring dilation, the CPAP, tensor products
  of C\*-algebras** — **Brown–Ozawa `39.05`**. (`stinespring` already has 6 incidental hits but no
  dedicated unit; the CP-map theory is Brown–Ozawa's, referenced not built here.)
- **Spectral triples, the noncommutative-geometry Dirac operator, the local index formula, cyclic
  (co)homology pairing with K-theory** — **Connes `39.06/39.07`**. \(A_\theta\) appears here as a
  *C\*-algebra example*; its NCG/spectral-triple structure is Connes' chapter.
- **General crossed-product / groupoid C\*-algebra theory and the Pimsner–Voiculescu exact sequence in
  full** — Davidson treats \(A_\theta=C(\mathbb T)\rtimes\mathbb Z\) as a single worked example;
  the systematic crossed-product / group-C\*-algebra theory (full vs reduced, amenability) is deeper
  than this source and is left to a later `39.*` unit (its amenability side belongs near `39.05`),
  cited as a pointer in `39.02.01`, not spun out.
- **Davidson's appendices** (Hilbert-space / spectral-theorem / point-set-topology recap) — already in
  `02.11.*` / `01.01.13` / `02.01.*`; referenced as prereqs, not re-proposed.

---

## RETURN SUMMARY
- **Genuine gaps:** 7 (`39.01.01`, `39.01.02`, `39.01.03`, `39.01.04`, `39.02.01`, `39.02.02`, `39.02.03`)
- **COVERED:** 5 topic-clusters (all mapped to existing **prerequisite** ids; no existing C\*-algebra
  unit — section 39 is empty)
- **OUT OF SCOPE:** 6 (owned by parallel Takesaki / Brown–Ozawa / Connes audits, or deferred)
- **Gap file:** `plans/expansion/operator-algebras/_audit/davidson-cstar.gaps.md`
