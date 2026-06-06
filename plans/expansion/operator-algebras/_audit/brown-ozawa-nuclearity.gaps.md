# Audit — Brown & Ozawa, *C\*-Algebras and Finite-Dimensional Approximations* (GSM 88, AMS 2008)

- **source_book:** `brown-ozawa-nuclearity`
- **source_curriculum:** `operator-algebras`
- **target chapter:** `content/39-operator-algebras/05-nuclearity-exactness/`
  (frontmatter `section: operator-algebras`, `chapter: nuclearity-exactness`, id format `39.05.<UU>`)
- **date:** 2026-06-05

## Verdict

The entire `39-operator-algebras` section is a **freshly scaffolded set of empty chapter
directories** (`01-c-star-algebras-basics` … `07-cyclic-cohomology`, no `.md` files). Nothing
in `content/` develops the finite-dimensional-approximation theory of C\*-algebras as a
framework. The grep sweep
(`completely positive|stinespring|nuclear|exact|cpap|quasidiagonal|amenab|operator system|kirchberg|choi|cuntz|haagerup|connes embedding`)
surfaced only **substring false positives** ("spring", "choice/choose", "amenable to
factorisation", "operator" + "system" on separate lines) plus exactly **two genuinely
adjacent, differently-purposed units**:

- **`12.17.01` (density matrix, pure/mixed states)** — quantum-information layer. It
  *does* state the **Stinespring dilation** and **Kraus decomposition** for completely
  positive maps, but in the **quantum-channel idiom**: CP**T**P maps on finite-dimensional
  $M_n$, environments and ancillas, the Kraus operator-sum, the CPTP ⟺ isometric-dilation
  equivalence. This is the **physics specialization**. It does **not** develop the
  C\*-algebraic structure theory — operator systems, the Arveson/Choi-Effros extension
  theorem, CP maps between general (non-matrix, non-unital) C\*-algebras, the multiplicative
  domain, or Stinespring's minimal dilation as a representation-theoretic object. **My units
  own the C\*-structure theory and cross-reference `12.17.01` for the finite-dimensional /
  quantum-channel instance** (explicit dedup notes below).
- **`12.17.03` (Bell/CHSH/Tsirelson)** — states **MIP\* = RE** and the resulting
  **refutation of the Connes embedding conjecture** from the quantum-correlations /
  complexity side, as a one-paragraph structural-depth remark. It does **not** state the
  conjecture in its operator-algebra form (tracial von Neumann algebras embedding into an
  ultrapower of the hyperfinite II$_1$ factor / the matricial microstates / the equivalence
  with Kirchberg's QWEP problem). My group-approximation unit gives the **operator-algebra
  statement** of the Connes embedding problem and its link to the residually-finite-dimensional
  / hyperlinear-group circle, cross-referencing `12.17.03` for the MIP\*=RE refutation rather
  than duplicating it. (Deep MIP\*/RE apparatus stays OUT OF SCOPE — see trailer.)

No content anywhere develops **nuclearity, exactness, the min/max tensor products of
C\*-algebras, the CPAP, quasidiagonality, amenable groups (Følner / invariant means /
paradoxical decompositions / the von Neumann–Day problem), group C\*-algebras, or the
Haagerup / weak-amenability approximation properties.** All are genuine gaps in full.

**Prereq convention.** Verified-existing anchors:
`02.11.08` (Hilbert space), `02.11.01` (bounded linear operators), `02.11.02` (Hahn–Banach,
the analytic engine of the Arveson extension theorem), `02.11.05` (compact operators),
`01.02.20` (free group / free product / presentation — for non-amenability of $F_2$ and the
paradoxical decomposition), `01.02.10` (tensor product of modules — algebraic-tensor
prerequisite), `12.17.01` (quantum-channel CP maps / Stinespring / Kraus — dedup cross-ref),
`12.17.03` (Tsirelson / MIP\*=RE refutation of Connes embedding — dedup cross-ref).
IDs of the form `39.01.xx` / `39.03.xx` are **sibling units in this section**, co-produced in
parallel by the **Davidson audit (39.01, C\*-algebra basics: GNS, states, Gelfand–Naimark)**
and the **Takesaki audit (39.03, von Neumann algebras; 39.04 modular theory)**. They are
listed as prereqs and **flagged "sibling, may be co-produced"** so the producer can wire the
DAG; if a sibling slot is unfilled at production time, inline the minimal needed statement.

---

## GENUINE GAPS

### 39.05.01 — Completely positive maps and Stinespring's dilation theorem
- **spec:** Positive and $n$-positive maps between C\*-algebras; complete positivity; the
  matrix-amplification picture ($\phi$ is CP iff $\phi\otimes\mathrm{id}_n \geq 0$ for all $n$).
  **Stinespring's dilation theorem:** every CP map $\phi:A\to B(H)$ has the form
  $\phi(a)=V^\* \pi(a) V$ for a $\*$-representation $\pi$ on a Hilbert space $K$ and a bounded
  $V:H\to K$, with the **minimal** dilation unique up to unitary equivalence. Corollaries:
  the Kadison–Schwarz inequality $\phi(a)^\*\phi(a)\le \|\phi\|\,\phi(a^\*a)$ for unital CP,
  the **multiplicative domain**, and the GNS construction as the state ($\dim H=1$) special
  case. The Choi matrix / complete positivity for maps on $M_n$ (Choi's theorem: CP ⟺ the
  Choi matrix is positive, ⟺ a Kraus / operator-sum representation exists).
- **prereqs:** `02.11.08`, `02.11.01`, `39.01.xx` *(C\*-algebra basics / GNS — sibling, may be co-produced)*
- **chapter:** `nuclearity-exactness` · **section:** `operator-algebras`
- **source_book:** `brown-ozawa-nuclearity` · **source_curriculum:** `operator-algebras`
- **dedup:** `12.17.01` states Stinespring/Kraus/Choi for **finite-dimensional quantum
  channels** (CPTP on $M_n$). This unit owns the **general C\*-algebraic** statement
  (arbitrary $A$, minimality and uniqueness, multiplicative domain) and cross-refs `12.17.01`
  for the quantum-channel instance and the trace-preservation normalization.

### 39.05.02 — Operator systems and the Arveson–Choi–Effros extension theorem
- **spec:** Operator systems (self-adjoint unital subspaces of a C\*-algebra) and the
  matrix order they carry; unital completely positive (UCP) maps as the morphisms; **Arveson's
  extension theorem** (a UCP map on an operator subsystem of $A$ extends to a UCP map on all of
  $A$ — the CP analogue of Hahn–Banach, proved via injectivity of $B(H)$); the **Choi–Effros
  theorem** characterizing operator systems abstractly via the matrix-order axioms, and the
  Choi–Effros product giving a C\*-structure to an injective operator system. Injective
  operator systems; the connection to nuclearity (preview).
- **prereqs:** `39.05.01`, `02.11.02` (Hahn–Banach), `02.11.08`
- **chapter:** `nuclearity-exactness` · **section:** `operator-algebras`
- **source_book:** `brown-ozawa-nuclearity` · **source_curriculum:** `operator-algebras`

### 39.05.03 — Tensor products of C\*-algebras: the minimal and maximal norms
- **spec:** The algebraic tensor product $A\odot B$ and its C\*-completions; the **minimal
  (spatial) norm** $\|\cdot\|_{\min}$ via faithful representations and its independence of the
  chosen representations; the **maximal norm** $\|\cdot\|_{\max}$ via all $\*$-homomorphisms;
  $\|\cdot\|_{\min}\le\|\cdot\|_{\max}$ and the universal property of $A\otimes_{\max}B$;
  Takesaki's theorem that $\min$ is the smallest C\*-norm; first examples where the two
  norms differ (the canonical separating example $C^\*_r(F_2)\otimes C^\*_r(F_2)$, stated).
- **prereqs:** `39.05.01`, `01.02.10` (algebraic tensor product), `39.01.xx` *(C\*-basics — sibling, may be co-produced)*
- **chapter:** `nuclearity-exactness` · **section:** `operator-algebras`
- **source_book:** `brown-ozawa-nuclearity` · **source_curriculum:** `operator-algebras`

### 39.05.04 — Nuclear C\*-algebras and the completely positive approximation property
- **spec:** Nuclearity: $A$ is **nuclear** iff $A\otimes_{\min}B = A\otimes_{\max}B$ for
  every $B$. The **CPAP** (completely positive approximation property): the identity of $A$
  factors approximately through matrix algebras by UCP maps,
  $A \xrightarrow{\psi_\lambda} M_{n(\lambda)} \xrightarrow{\varphi_\lambda} A$ with
  $\varphi_\lambda\psi_\lambda\to\mathrm{id}_A$ pointwise. **Theorem (Choi–Effros,
  Kirchberg):** nuclear ⟺ CPAP. Permanence properties (closed under quotients, ideals,
  extensions, inductive limits, tensor products); examples (commutative, AF, type I, the CAR
  algebra) and the canonical **non-example** ($C^\*_r(F_2)$). Relation to injectivity /
  amenability of the algebra (Connes–Haagerup, stated).
- **prereqs:** `39.05.02`, `39.05.03`, `39.02.xx` *(AF algebras — sibling, may be co-produced)*
- **chapter:** `nuclearity-exactness` · **section:** `operator-algebras`
- **source_book:** `brown-ozawa-nuclearity` · **source_curriculum:** `operator-algebras`

### 39.05.05 — Exact C\*-algebras and the local lifting / nuclear-embeddability characterization
- **spec:** Exactness: $A$ is **exact** iff the functor $A\otimes_{\min}(-)$ preserves short
  exact sequences; equivalently (Kirchberg) iff $A$ embeds into a nuclear C\*-algebra
  (nuclear embeddability), equivalently the CPAP holds in the "one-sided" approximate-
  factorization form through the inclusion. Subalgebras of nuclear algebras are exact;
  exactness passes to subalgebras (unlike nuclearity); the relationship nuclear ⟹ exact and
  the standard exact-but-not-nuclear example ($C^\*_r(F_2)$ is exact). Kirchberg's theorem
  that exactness $=$ local reflexivity for the relevant class (stated).
- **prereqs:** `39.05.03`, `39.05.04`
- **chapter:** `nuclearity-exactness` · **section:** `operator-algebras`
- **source_book:** `brown-ozawa-nuclearity` · **source_curriculum:** `operator-algebras`

### 39.05.06 — Amenable groups: invariant means, Følner sets, and paradoxical decompositions
- **spec:** Three equivalent faces of **amenability** of a (discrete) group $G$: a
  left-invariant mean on $\ell^\infty(G)$; the **Følner condition** (approximately invariant
  finite sets, $|gF\triangle F|/|F|\to 0$); and the absence of a **paradoxical
  decomposition** (Tarski's theorem: $G$ is non-amenable iff $G$ admits a paradoxical
  decomposition). Closure properties (subgroups, quotients, extensions, directed unions $\Rightarrow$
  the class of amenable groups); abelian and (hence) solvable groups are amenable; the
  **free group $F_2$ is non-amenable** (ping-pong / paradoxical decomposition), the source of
  the Banach–Tarski paradox and the von Neumann–Day problem (Ol'shanskii / Adyan
  counterexamples noted).
- **prereqs:** `01.02.20` (free group / free product), `02.11.08`
- **chapter:** `nuclearity-exactness` · **section:** `operator-algebras`
- **source_book:** `brown-ozawa-nuclearity` · **source_curriculum:** `operator-algebras`
- **dedup:** "amenable" appears in `content/` only as the ordinary English adjective
  ("amenable to factorisation", `01.01.08` / `07.06.14`); no unit develops amenable groups.
  This unit owns the group-amenability framework outright.

### 39.05.07 — Group C\*-algebras and the amenability ⟺ nuclearity dictionary
- **spec:** The full group C\*-algebra $C^\*(G)$ (universal for unitary representations) and
  the **reduced** group C\*-algebra $C^\*_r(G)$ (generated by the left regular representation
  on $\ell^2(G)$); the canonical surjection $C^\*(G)\twoheadrightarrow C^\*_r(G)$.
  **Theorem (the central dictionary):** for a discrete group $G$ the following are
  equivalent — $G$ is amenable; $C^\*(G)=C^\*_r(G)$ (the surjection is an isomorphism);
  $C^\*_r(G)$ is nuclear; the trivial representation is weakly contained in the regular
  representation. The non-amenable benchmark: $C^\*_r(F_2)$ is **exact but not nuclear** and
  $C^\*(F_2)\ne C^\*_r(F_2)$, tying back to 39.05.04 / 39.05.05.
- **prereqs:** `39.05.04`, `39.05.05`, `39.05.06`, `02.11.08`
- **chapter:** `nuclearity-exactness` · **section:** `operator-algebras`
- **source_book:** `brown-ozawa-nuclearity` · **source_curriculum:** `operator-algebras`

### 39.05.08 — Quasidiagonality
- **spec:** Quasidiagonal sets of operators (an approximately-block-diagonalizable family:
  finite-rank projections $P_n\nearrow 1$ with $\|[P_n,T]\|\to 0$ for each $T$); quasidiagonal
  C\*-algebras via approximately-multiplicative completely-positive maps into matrix algebras
  (the QD analogue of the CPAP); Voiculescu's theorem that quasidiagonality is a homotopy /
  representation-theoretic invariant (invariance under compact perturbation and approximate
  unitary equivalence); QD obstructions (a QD algebra has no non-zero proper isometries —
  hence $C^\*_r(F_\infty)$-type tests) and the place of QD between AF and nuclear; statement of
  the Tikuisis–White–Winter theorem (faithful trace + amenable + UCT $\Rightarrow$ QD) as the
  modern capstone.
- **prereqs:** `39.05.01`, `39.05.04`, `02.11.05` (compact operators)
- **chapter:** `nuclearity-exactness` · **section:** `operator-algebras`
- **source_book:** `brown-ozawa-nuclearity` · **source_curriculum:** `operator-algebras`

### 39.05.09 — Group approximation properties and the Connes embedding problem
- **spec:** The hierarchy of **group approximation properties** beyond amenability: the
  **Haagerup property** (a-T-menability: a proper conditionally-negative-definite function /
  $C_0$ approximation of the identity by positive-definite functions) with $F_n$ and free
  groups as the motivating examples, contrasted with Kazhdan's property (T) as the opposite
  pole; **weak amenability** and the **Cowling–Haagerup constant** $\Lambda_{cb}(G)$
  (completely-bounded approximate identity of the Fourier algebra). The **Connes embedding
  problem** in operator-algebra form: does every separable II$_1$ factor (equivalently every
  tracial von Neumann algebra) embed into an ultrapower $R^\omega$ of the hyperfinite II$_1$
  factor? — its reformulations (Kirchberg's QWEP conjecture; **hyperlinear**/sofic groups;
  microstates), and its **refutation via MIP\*=RE** (cross-ref `12.17.03`, stated not proved).
- **prereqs:** `39.05.06`, `39.05.07`, `39.03.xx` *(von Neumann algebras / II$_1$ factors — sibling, may be co-produced)*, `12.17.03`
- **chapter:** `nuclearity-exactness` · **section:** `operator-algebras`
- **source_book:** `brown-ozawa-nuclearity` · **source_curriculum:** `operator-algebras`
- **dedup:** `12.17.03` states **MIP\*=RE** and the resulting refutation from the
  quantum-correlation / complexity side. This unit gives the **operator-algebra statement** of
  the Connes embedding problem and the surrounding approximation-property landscape, and
  cross-refs `12.17.03` for the refutation rather than re-deriving it. Deep MIP\*/RE machinery
  stays OUT OF SCOPE.

---

## COVERED (not gaps)

- **Stinespring dilation / Kraus decomposition / Choi's theorem (finite-dim quantum
  channels)** — `12.17.01`. The **general C\*-algebraic** version (minimal dilation,
  multiplicative domain, non-matrix $A$) is 39.05.01, which cross-refs `12.17.01`.
- **MIP\*=RE refutation of the Connes embedding conjecture (complexity side)** — `12.17.03`.
  The **operator-algebra statement** of the conjecture is 39.05.09, which cross-refs it.
- **Free group / free product / group presentation** — `01.02.20`; prereq anchor for
  non-amenability of $F_2$ and the paradoxical decomposition (39.05.06), not re-proposed.
- **Hilbert space / bounded & compact operators / Hahn–Banach** — `02.11.08`, `02.11.01`,
  `02.11.05`, `02.11.02`; functional-analysis prereqs (Hahn–Banach is the analytic engine of
  Arveson extension in 39.05.02).
- **Algebraic tensor product of modules** — `01.02.10`; prereq for the C\*-tensor norms
  (39.05.03).
- **C\*-algebra basics (GNS, states, Gelfand–Naimark), von Neumann algebras / II$_1$
  factors** — **siblings 39.01 (Davidson) and 39.03/39.04 (Takesaki)**, co-produced in
  parallel; referenced as prereqs, not proposed here.

## OUT OF SCOPE

- **The full Connes-embedding / MIP\*=RE proof apparatus** (interactive proof systems,
  self-testing / rigidity, the compression / introspection machinery, the
  recursive-enumerability encoding) — research-frontier complexity theory; 39.05.09 *states*
  the refutation and cross-refs `12.17.03`, no more.
- **The Kirchberg–Phillips classification theorem and the $\mathcal{O}_2$ / $\mathcal{O}_\infty$
  absorption theorems as full results** — Cuntz-algebra structure theory and Kirchberg–Phillips
  classification are the **purely-infinite / Elliott-classification** programme; they belong to
  a dedicated classification unit (and lean on KK-theory). Brown–Ozawa only states $\mathcal{O}_2$
  embedding as an endpoint; I do **not** spin out a classification unit here. (If a later
  classification audit lands, $\mathcal{O}_2$ embedding belongs there.)
- **K-theory / KK-theory / the UCT** — `39.02` (AF-algebras & K-theory, Davidson sibling) and
  any future KK unit; the Tikuisis–White–Winter QD theorem in 39.05.08 only *names* the UCT
  hypothesis.
- **Tomita–Takesaki modular theory, injective-factor classification (Connes), the bicommutant
  / type classification** — **Takesaki siblings 39.03 / 39.04**; 39.05.04 only *names*
  injectivity ⟺ amenability ⟺ nuclearity as a cross-section dictionary.
- **Property (T) as a developed theory** (Kazhdan, expanders, rigidity) — 39.05.09 only
  *contrasts* it with the Haagerup property as the opposite pole; a full property-(T) unit is a
  geometric-group-theory / representation-theory subject, not this chapter.
- **Banach–Tarski paradox as a standalone set-theory/geometry unit** — 39.05.06 *names* it as
  the consequence of $F_2$'s paradoxical decomposition; the measure-theoretic paradox proper is
  a foundations topic, not re-proposed here.

---

## RETURN SUMMARY
- **Genuine gaps:** 9 (39.05.01–39.05.09)
- **COVERED:** 6 topic-clusters (mapped to existing ids / sibling-chapter owners)
- **OUT OF SCOPE:** 6
- **Sibling-coordination flags:** 39.01 (Davidson, C\*-basics/GNS) prereq of 39.05.01/03;
  39.02 (AF/K-theory) prereq of 39.05.04; 39.03/39.04 (Takesaki, vN algebras/modular) prereq
  of 39.05.09 and contrast cross-ref in 39.05.04. Quantum-info dedup: 39.05.01↔`12.17.01`,
  39.05.09↔`12.17.03`.
- **Gap file:** `plans/expansion/operator-algebras/_audit/brown-ozawa-nuclearity.gaps.md`
