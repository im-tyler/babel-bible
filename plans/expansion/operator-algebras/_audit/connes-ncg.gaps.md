# Audit — Connes, *Noncommutative Geometry* (Academic Press, 1994)

- **source_book:** `connes-ncg`
- **source_curriculum:** `operator-algebras`
- **target chapters:** `content/39-operator-algebras/06-spectral-triples-ncg/`,
  `content/39-operator-algebras/07-cyclic-cohomology/`
  (frontmatter `section: operator-algebras`; `chapter:` = the chapter name **without** the
  number prefix, i.e. `spectral-triples-ncg` / `cyclic-cohomology`; id format `39.<CC>.<UU>`)
- **date:** 2026-06-05
- **ownership:** this audit owns chapters **39.06** (spectral triples, Dirac operator, distance
  formula, Fredholm modules, Dixmier trace, local index formula) and **39.07** (cyclic cohomology
  of operator algebras + the pairing with operator K-theory). Parallel/sibling audits in the same
  spine: **Davidson** owns **39.01 / 39.02** (concrete C\*-algebras, AF algebras, operator
  K-theory); **Takesaki** owns **39.03 / 39.04** (von Neumann algebras, Tomita-Takesaki);
  **Brown-Ozawa** owns **39.05** (nuclearity, exactness). Ids `39.01.*` / `39.02.*` cited below
  as prereqs are **sibling units, may be co-produced** — flagged inline.

## Verdict

Section `39-operator-algebras` is a **freshly scaffolded, empty** chapter set (all seven
directories `01-…` through `07-…` are empty). The analytic noncommutative-geometry programme of
Connes is therefore essentially **absent** from the corpus, with three important caveats that
control overlap:

1. **Algebraic cyclic homology already exists** at
   `04.03.22` (*Cyclic homology and Connes' long exact sequence*). That unit is a thorough
   treatment of the **purely algebraic** theory: the cyclic action $\tau_n$, the Connes-Tsygan
   $(b,B)$-bicomplex, the **SBI long exact sequence** $HH_n \to HC_n \to HC_{n-2} \to HH_{n-1}$,
   periodicity $S$, periodic cyclic homology $HP$, and the **HKR cyclic identification**
   $HP_*(A)\cong H^*_{\mathrm{dR}}$ for smooth commutative $A$. **The SBI machinery is COVERED and
   is NOT re-proposed.** What is genuinely missing is the *analytic / operator-algebraic* side that
   `04.03.22` explicitly does not treat: **cyclic *cohomology* of a topological/Banach/C\*-algebra
   as the receiver of the Chern character in K-homology**, the **index pairing**
   $\langle [\varphi],[e]\rangle$ of a cyclic cocycle with operator K-theory, the **stability /
   continuity** results that make the pairing well-defined on smooth subalgebras, and **entire
   cyclic cohomology** (Connes' $\theta$-summable generalisation). These are theorem-level objects
   distinct from the algebraic SBI sequence; each cross-references `04.03.22` for the underlying
   bicomplex rather than rebuilding it.

2. **Atiyah-Singer index theory already exists** in chapter `03.09` (spin geometry):
   `03.09.06` (Fredholm operators), `03.09.08` (Dirac operator), `03.09.10` (Atiyah-Singer index
   theorem), `03.09.20` (heat-kernel proof), `03.09.24` (eta invariant + APS). The **commutative**
   index theorem and its heat-kernel proof are COVERED. The gaps are the **noncommutative** lift:
   the **spectral-triple axiomatisation** of a Dirac-type geometry over a possibly noncommutative
   algebra, the **operator-theoretic index pairing**, and the **Connes-Moscovici local index
   formula** (the residue-cocycle computation of the index pairing) — none of which appear in
   `03.09`. These cross-reference `03.09.*` as the classical model, not as duplicates.

3. **C\*-algebra / operator-K-theory basics are co-produced by Davidson** (39.01/39.02). The units
   below cite `39.01.*` (GNS, states, the C\*-norm) and `39.02.*` (operator $K_0/K_1$, the AF
   classification) as **sibling prereqs, may be co-produced**; they are not re-derived here.

**Prereq convention.** Verified-existing anchors used below:
`02.11.01` (bounded linear operators), `02.11.03` (unbounded self-adjoint operators / spectral
theorem), `02.11.05` (compact operators), `03.09.06` (Fredholm operators / index), `03.09.08`
(Dirac operator), `03.09.10` (Atiyah-Singer index theorem), `03.09.20` (heat-kernel index),
`03.09.24` (eta / APS), `03.09.02` (Clifford algebra), `03.09.05` (spinor bundle), `03.08.07`
(Bott periodicity in K-theory), `04.03.20` (Hochschild homology), `04.03.22` (algebraic cyclic
homology / SBI — the algebraic substrate, always cross-referenced for the bicomplex). Sibling
ids `39.0X.YY` are flagged "**sibling, may be co-produced**".

---

## GENUINE GAPS

### 39.06.01 — Spectral triples $(A,\mathcal H,D)$: the axioms of a noncommutative manifold
- **spec:** Define a **spectral triple** $(A,\mathcal H,D)$: a $*$-algebra $A$ represented on a
  Hilbert space $\mathcal H$ together with a self-adjoint operator $D$ with compact resolvent
  such that $[D,a]$ is bounded for all $a\in A$. State the **finite-summability** /
  $p$-summability condition ($(1+D^2)^{-1/2}\in\mathcal L^{p,\infty}$), the **grading**
  ($\mathbb Z/2$-graded = even spectral triple) and **real structure** $J$ (the KO-dimension
  table, the first-order condition $[[D,a],JbJ^{-1}]=0$), and explain how the **canonical
  commutative example** — $A=C^\infty(M)$, $\mathcal H=L^2(M,S)$, $D=$ the Dirac operator from
  `03.09.08` — recovers a closed spin manifold. State **Connes' reconstruction theorem** (a
  commutative spectral triple satisfying the seven axioms *is* the canonical triple of a spin
  manifold) as the structural payoff that licenses "$(A,\mathcal H,D)$ = noncommutative manifold".
- **prereqs:** `02.11.03`, `02.11.05`, `03.09.08`, `03.09.05`, `03.09.02`,
  `39.01.01` (*C\*-algebra / GNS — sibling, may be co-produced*)
- **chapter:** `spectral-triples-ncg` · **section:** `operator-algebras`
- **source_book:** `connes-ncg` · **source_curriculum:** `operator-algebras`

### 39.06.02 — The Connes distance formula: metric geometry from the Dirac operator
- **spec:** Prove that a spectral triple recovers a **metric** on the state space of $A$ via
  $d(\varphi,\psi)=\sup\{|\varphi(a)-\psi(a)| : \|[D,a]\|\le 1\}$ (the **Connes distance
  formula**). Show that for the canonical commutative triple on a spin manifold this reproduces
  the **geodesic (Riemannian) distance** $d_g(x,y)$ between the evaluation states $\delta_x,\delta_y$,
  the precise sense in which "$D$ knows the metric". Develop the dual picture: the metric is
  encoded by the bounded-commutator condition rather than by a distance function, so the formula
  extends verbatim to **noncommutative** $A$ (states of a matrix algebra, of the noncommutative
  torus). Contrast with the commutative geodesic-distance setup so the reader sees the formula as
  the genuinely operator-algebraic upgrade.
- **prereqs:** `39.06.01`, `02.11.03`, `03.09.08`
- **chapter:** `spectral-triples-ncg` · **section:** `operator-algebras`
- **source_book:** `connes-ncg` · **source_curriculum:** `operator-algebras`

### 39.06.03 — Fredholm modules and the pairing of K-theory with K-homology
- **spec:** Define **Fredholm modules** (the bounded $(\mathcal H,F)$, $F=F^*$, $F^2=1$, $[F,a]$
  compact — even and odd) as the cycles of **operator K-homology** $K^0/K^1$, and the passage
  **spectral triple $\to$ Fredholm module** via $F=\mathrm{sign}(D)=D|D|^{-1}$. State the
  **index pairing** $K_*(A)\times K^*(A)\to\mathbb Z$: pairing an even Fredholm module with a
  projection $e\in K_0(A)$ gives $\mathrm{Index}(eFe : e\mathcal H_+\to e\mathcal H_-)$; pairing an
  odd module with a unitary $u\in K_1(A)$ gives $-\mathrm{Index}(PuP)$ (a Toeplitz index). Prove
  the pairing is **well-defined, additive, and homotopy-invariant**, and recover the classical
  Atiyah-Singer pairing $\langle[D],[E]\rangle=\mathrm{Index}(D_E)$ (`03.09.10`) as the commutative
  case. This is the K-homology side; the Chern character that computes the pairing is `39.07.02`.
- **prereqs:** `03.09.06`, `02.11.05`, `03.08.07`,
  `39.02.01` (*operator $K_0/K_1$ — sibling, may be co-produced*), `39.06.01`
- **chapter:** `spectral-triples-ncg` · **section:** `operator-algebras`
- **source_book:** `connes-ncg` · **source_curriculum:** `operator-algebras`

### 39.06.04 — The noncommutative torus $A_\theta$ and its differential geometry
- **spec:** Construct the **noncommutative (irrational-rotation) torus** $A_\theta=C^*(U,V)$,
  $VU=e^{2\pi i\theta}UV$; the canonical **trace** $\tau$, the two commuting **derivations**
  $\delta_1,\delta_2$ generating the $\mathbb T^2$-action, and the smooth subalgebra
  $A_\theta^\infty$. Build the **standard spectral triple** on $A_\theta$ (flat $D=\delta_1\otimes
  \gamma^1+\delta_2\otimes\gamma^2$ with a $2$-spinor space) and compute the **distance formula**
  geometry. State the structural facts that make it the canonical noncommutative manifold:
  $K_0(A_\theta)=\mathbb Z^2$ with the **range of the trace** $\tau_*(K_0)=\mathbb Z+\theta\mathbb Z$
  (the Pimsner-Voiculescu / Rieffel computation), the existence of the **Powers-Rieffel projection**
  of trace $\theta$, and Morita equivalence $A_\theta\sim A_{(a\theta+b)/(c\theta+d)}$ under
  $SL_2(\mathbb Z)$. Cross-ref `39.02.*` for the K-theory computation (*sibling*).
- **prereqs:** `39.06.01`, `39.06.02`,
  `39.01.01` (*C\*-algebra — sibling*), `39.02.01` (*operator K-theory — sibling*)
- **chapter:** `spectral-triples-ncg` · **section:** `operator-algebras`
- **source_book:** `connes-ncg` · **source_curriculum:** `operator-algebras`

### 39.06.05 — The Dixmier trace and the noncommutative integral
- **spec:** Construct the **Dixmier trace** $\mathrm{Tr}_\omega$ on the Dixmier ideal
  $\mathcal L^{1,\infty}$ (the logarithmically-divergent Cesàro/Banach-limit construction on the
  partial sums $\sigma_N(T)=\sum_{n<N}\mu_n(T)$ of singular values), its properties (positivity,
  unitary invariance, vanishing on trace-class operators). Prove **Connes' trace theorem**: for a
  classical pseudodifferential operator $P$ of order $-n$ on an $n$-manifold, $\mathrm{Tr}_\omega P$
  is (up to a constant) the **Wodzicki residue**, hence the Dixmier trace recovers integration
  against the Riemannian volume — $\fint a\,ds^n := \mathrm{Tr}_\omega(a|D|^{-n})\propto\int_M a\,
  d\mathrm{vol}$ (the **noncommutative integral**, with $ds=|D|^{-1}$ the "infinitesimal line
  element"). Connect to the **Weyl law** for the eigenvalue asymptotics of $|D|^{-1}$. Cross-ref
  `02.14.02` (pseudodifferential operators) for the symbol calculus.
- **prereqs:** `02.11.05`, `02.11.03`, `02.14.02`, `39.06.01`
- **chapter:** `spectral-triples-ncg` · **section:** `operator-algebras`
- **source_book:** `connes-ncg` · **source_curriculum:** `operator-algebras`

### 39.06.06 — The Connes-Moscovici local index formula
- **spec:** State and motivate the **local index formula** computing the index pairing
  $\langle[\,(A,\mathcal H,D)\,],[e]\rangle$ of an odd/even **finitely-summable** (regular, with
  discrete dimension spectrum) spectral triple with operator K-theory as a sum of **residues** of
  zeta-type functions $\zeta_b(z)=\mathrm{Tr}(b\,|D|^{-2z})$ — the **residue cocycle**
  $\varphi=(\varphi_n)$ in the $(b,B)$-bicomplex, with the universal Connes-Moscovici constants and
  the iterated commutators $[D^2,\cdot]^{(k)}$. Present it as the **noncommutative Atiyah-Singer
  theorem**: it replaces the heat-kernel local index density of `03.09.20` with an algebraic
  residue formula valid for noncommutative $A$, and reduces to the classical $\hat A$-genus
  integrand in the commutative case. Keep the full proof (the pseudodifferential/heat-expansion
  apparatus) as a cited capstone; the deliverable is the statement, the residue-cocycle
  construction, and the commutative-recovery worked check. Cross-ref `39.07.02` (Chern character
  in K-homology) as the target of the cocycle and `03.09.20` as the classical model.
- **prereqs:** `39.06.03`, `39.06.05`, `39.07.01`, `39.07.02`, `03.09.20`, `03.09.24`
- **chapter:** `spectral-triples-ncg` · **section:** `operator-algebras`
- **source_book:** `connes-ncg` · **source_curriculum:** `operator-algebras`

### 39.07.01 — Cyclic cohomology of operator algebras and the pairing with K-theory
- **spec:** Develop **cyclic cohomology** $HC^*(A)$ for a topological / Banach / $C^*$-algebra as
  the *analytic* dual theory to the algebraic homology of `04.03.22`: cyclic $n$-cocycles as
  $(n+1)$-linear cyclically-invariant functionals annihilated by the Hochschild coboundary $b$,
  the $(b,B)$-bicomplex in the **continuous/topological-tensor** setting, and the **SBI sequence in
  cohomology** $HC^n\to HC^{n+2}\to HH^{n+1}$ with periodicity $S$. The new content beyond
  `04.03.22` is the **index pairing** $HC^{2k}(A)\times K_0(A)\to\mathbb C$,
  $\langle[\varphi],[e]\rangle=\frac{1}{k!}(\varphi\#\mathrm{Tr})(e,\dots,e)$ (and the odd
  $HC^{2k+1}\times K_1$ version), its **$S$-invariance** (so it descends to periodic cyclic
  cohomology $HP^*$), and the **smooth-subalgebra** subtlety: $A^\infty\subset A$ stable under
  holomorphic functional calculus so that $K_*(A^\infty)=K_*(A)$ and the (unbounded) cocycle is
  defined. Cross-reference `04.03.22` for the bicomplex; do **not** re-prove SBI.
- **prereqs:** `04.03.22`, `04.03.20`,
  `39.02.01` (*operator $K_0/K_1$ — sibling, may be co-produced*),
  `39.01.01` (*C\*-algebra / trace — sibling*)
- **chapter:** `cyclic-cohomology` · **section:** `operator-algebras`
- **source_book:** `connes-ncg` · **source_curriculum:** `operator-algebras`

### 39.07.02 — The Chern character in K-homology: from Fredholm modules to cyclic cocycles
- **spec:** Construct **Connes' Chern character** $\mathrm{ch}^*:K^*(A)\to HC^*(A)$ (and into
  periodic $HP^*$) sending a **finitely-summable Fredholm module** / spectral triple to an explicit
  **cyclic cocycle**: the **Connes character** $\tau_F(a^0,\dots,a^{2k})=\lambda_k\,
  \mathrm{Tr}(\Gamma F[F,a^0]\cdots[F,a^{2k}])$ (even case) and its odd analogue, with the
  normalisation constants and the verification that it is a cyclic cocycle. Prove the **index
  theorem in K-homology**: the analytic index pairing of `39.06.03` equals the cyclic pairing of
  `39.07.01` of the Chern character with the Chern character of the K-theory class —
  $\langle[x],[e]\rangle=\langle\mathrm{ch}^*[x],\mathrm{ch}_*[e]\rangle$ — so the Chern character
  is the bridge that makes the index *computable* in cyclic cohomology. This is the K-homology
  Chern character that is the codomain of the Connes-Moscovici cocycle (`39.06.06`). Distinct from
  the commutative Chern character in `03.06.04` (Chern classes) — cross-ref as the classical shadow.
- **prereqs:** `39.06.03`, `39.07.01`, `04.03.22`, `03.06.04`
- **chapter:** `cyclic-cohomology` · **section:** `operator-algebras`
- **source_book:** `connes-ncg` · **source_curriculum:** `operator-algebras`

---

## COVERED (not gaps)

- **Algebraic cyclic homology, the $(b,B)$-bicomplex, the SBI long exact sequence, periodicity
  $S$, periodic cyclic homology $HP$, and the HKR cyclic identification** — `04.03.22`. This is the
  algebraic substrate; the operator-algebraic units `39.07.01/02` **cross-reference it for the
  bicomplex and explicitly do not re-prove SBI.** The genuine gap is the *analytic* cyclic
  cohomology of topological/$C^*$-algebras + the pairing with operator K-theory, which `04.03.22`
  does not treat.
- **Hochschild homology / cohomology and HKR** — `04.03.20`, `04.03.21`. The Hochschild input to
  cyclic cohomology; reused as prereq, not re-proposed.
- **Atiyah-Singer index theorem (commutative), heat-kernel proof, APS / eta invariant** —
  `03.09.10`, `03.09.20`, `03.09.24`. The commutative index theorem and its local heat-kernel
  density are COVERED; the noncommutative spectral-triple lift and the Connes-Moscovici **residue**
  formula (`39.06.06`) are the gaps, cross-referencing these as the classical model.
- **Fredholm operators and the analytic index** — `03.09.06`. The Banach-space index theory reused
  by `39.06.03`; the *Fredholm module* (the K-homology cycle) is the new object, not re-derived
  here.
- **Dirac operator on a spin manifold, spinor bundle, Clifford algebra** — `03.09.08`, `03.09.05`,
  `03.09.02`. The canonical commutative example of a spectral triple; reused as prereq.
- **Spectral theorem for (unbounded) self-adjoint operators, compact operators, bounded
  operators** — `02.11.03`, `02.11.05`, `02.11.01`. The functional-analytic foundation; prereqs,
  not units of this audit.
- **Pseudodifferential operators on a manifold (symbol calculus)** — `02.14.02`. The input to
  Connes' trace theorem / Wodzicki residue in `39.06.05`; cross-referenced, not re-proposed.
- **Commutative Chern character / Chern classes, Bott periodicity** — `03.06.04`, `03.08.07`. The
  classical shadow of the K-homology Chern character (`39.07.02`); cross-referenced.
- **C\*-algebra basics, GNS, states, the C\*-norm; operator $K_0/K_1$, AF classification** —
  **planned siblings `39.01.*` / `39.02.*`** (Davidson). Cited as "sibling, may be co-produced"
  prereqs; not owned by this audit.
- **von Neumann algebras, traces, Tomita-Takesaki / modular theory, KMS states** — **planned
  siblings `39.03.*` / `39.04.*`** (Takesaki). The type-II$_1$ trace machinery referenced by the
  noncommutative-torus and Dixmier-trace units lives there; cross-referenced, not duplicated.
  (Note: KMS / Tomita language appears in physics units `12.14.*`, `13.09.*`, `08.12.*`, but those
  are AQFT applications, not the operator-algebra theory.)

## OUT OF SCOPE

- **The index theorem for foliations** (Connes' measured/longitudinal index theorem, the
  $C^*$-algebra of a foliation, the analytic assembly map, the Connes-Skandalis tangent groupoid
  proof) — a full research apparatus (groupoid $C^*$-algebras, $KK$-theory, the Baum-Connes
  assembly map) that the spine has not scaffolded. The **holonomy/Lie groupoid** input exists at
  `03.03.10` as a pointer, but the foliation index theorem is deferred; not proposed from this
  source. A clean theorem-level unit could be revisited if a $KK$-theory / groupoid-$C^*$ chapter
  is later added.
- **The spectral action principle and the noncommutative-geometry Standard Model** (the
  Chamseddine-Connes spectral action $\mathrm{Tr}\,f(D/\Lambda)$, the almost-commutative geometry
  $C^\infty(M)\otimes A_F$ producing the Standard Model Lagrangian + gravity, the Higgs as a
  finite-geometry connection) — a deep physics-facing research program well beyond a theorem-level
  operator-algebra unit; deferred. The classical Yang-Mills / gauge action lives at `03.07.05`;
  not duplicated.
- **Entire cyclic cohomology** (Connes' $\theta$-summable / JLO cocycle, the entire growth
  condition, the bivariant theory) — a genuine but more specialised research apparatus; folded as a
  *pointer* inside `39.07.02` (the finitely-summable Chern character is the deliverable) rather than
  given its own unit, to keep QUALITY over quantity. Could be spun out later if a $\theta$-summable
  / heat-semigroup chapter is wanted.
- **Hopf-cyclic cohomology and the Connes-Moscovici Hopf algebra $\mathcal H_n$** (the
  transverse-geometry / characteristic-class apparatus behind the local index formula) — the deep
  machinery underlying `39.06.06`; the *statement* and residue-cocycle of the local index formula
  are in scope, the Hopf-algebraic transverse index theory is deferred.
- **Novikov conjecture / higher signatures via cyclic cohomology and the Baum-Connes route** —
  application-level research material requiring assembly-map machinery not scaffolded; not proposed.

---

## RETURN SUMMARY
- **Genuine gaps:** 8 — `39.06.01` (spectral triples / axioms), `39.06.02` (Connes distance
  formula), `39.06.03` (Fredholm modules / K-theory–K-homology pairing), `39.06.04` (noncommutative
  torus), `39.06.05` (Dixmier trace / noncommutative integral), `39.06.06` (Connes-Moscovici local
  index formula), `39.07.01` (analytic cyclic cohomology + pairing with operator K-theory),
  `39.07.02` (Chern character in K-homology).
- **COVERED:** 11 topic-clusters (chiefly `04.03.22` for the algebraic SBI machinery and `03.09.*`
  for the commutative index theory; C\*/K-theory/vN-algebra basics are planned siblings 39.01–39.05).
- **OUT OF SCOPE:** 5 (foliation index theorem, spectral action / NCG Standard Model, entire cyclic
  cohomology, Hopf-cyclic / Connes-Moscovici Hopf algebra, Novikov / Baum-Connes).
- **Gap file:** `plans/expansion/operator-algebras/_audit/connes-ncg.gaps.md`
