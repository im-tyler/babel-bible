# Helgason DGLGSS (FT 3.17) — deepening-audit gap file

**Verdict:** The first-pass audit (`helgason-differential-geometry.md`) was a
REDUCED no-PDF stub written before the `07.04.04-symmetric/` subdirectory
existed. Since then the corpus has shipped **9 symmetric-space units**
(`07.04.02, .03, .06, .07, .08, .09, .10, .12, .14`) plus the Priority-0
prereqs the stub flagged as missing. Almost the entire stub punch-list is now
COVERED. The book is **~85% covered**; what remains is a tight set of focused
**classification / structure-theorem** units that no existing unit states as
its own theorem.

Recommended chapter dir: `content/07-representation-theory/04-symmetric/`
(frontmatter `chapter: representation-theory`, `section: symmetric-spaces`).
Free slots verified empty: **07.04.04, 07.04.05, 07.04.11, 07.04.13**.

---

## Genuine gaps (3)

### 1. `07.04.05` — Real forms of a complex semisimple Lie algebra (Cartan classification + Vogan diagrams)
- **spec:** Classify the real forms of a complex semisimple $\mathfrak g_{\mathbb C}$ as conjugacy classes of Cartan involutions; compact form, split (normal) form, and the intermediate forms; the **Vogan-diagram** encoding (Dynkin diagram + 2-coloured/arrowed automorphism data) and its equivalence with Cartan's labels. Worked tables for $A_n,B_n,C_n,D_n,G_2,F_4,E_6,E_7,E_8$.
- **why a gap:** `07.04.01` classifies only the *complex* semisimple algebras and lists compact real forms in passing; `07.04.03` (cartan-involution) and `07.04.06` (orthogonal-symmetric-LA) construct *one* real form from an involution but never enumerate the conjugacy classes or state the bijection (Cartan involutions ↔ real forms). Grep for `vogan diagram` / `maximally split` / `split real form` returns no unit stating this classification (only an incidental "split real form" phrase inside `07.04.10`). This is DGLGSS Ch. III §7 + Ch. X §6, the load-bearing classification the stub flagged as "very high" and still absent.
- **prereqs:** `07.04.01` (cartan-weyl-classification), `07.04.02` (compact-real-form), `07.04.03` (cartan-involution), `07.06.18` (root-space-decomposition).
- **originator prose:** Cartan 1914, 1929; Weyl 1925.

### 2. `07.04.13` — Classification tables of irreducible Riemannian symmetric spaces (Cartan's list)
- **spec:** The full Cartan classification: four families (compact / non-compact, Hermitian / non-Hermitian) related by duality; the **11 infinite families** with Cartan labels $\mathrm{AI,AII,AIII,BDI,DIII,CI,CII}$ and the **12 exceptional spaces** $\mathrm{EI{-}EIX,FI,FII,G}$; for each: the pair $G/K$, dimension, rank, and restricted-root type. Reference/lookup unit.
- **why a gap:** No unit tabulates the full list. `07.04.14` (hermitian) gives **only** the Hermitian-type sublist (labels AIII, BDI, CI, DIII, EIII, EVII — verified by grep); `07.04.07` (riemannian-symmetric-space) gives ~4 worked examples (sphere, hyperbolic, $\mathbb{CP}^n$, Grassmannian) but no classification table; `07.04.06` covers the type I/II/III/IV abstraction but not the labelled enumeration. This is DGLGSS Ch. X, explicitly flagged by the brief as "load-bearing tabular data."
- **prereqs:** `07.04.05` (real-forms-classification, gap #1 above), `07.04.07` (riemannian-symmetric-space), `07.04.08` (restricted-root-system), `07.04.14` (hermitian-symmetric-space).
- **originator prose:** Cartan 1926–27.
- **note:** predominantly tabular (high reference value); pairs naturally with a physics cross-link to the Altland-Zirnbauer tenfold way.

### 3. `07.04.11` — Invariant differential operators on $G/K$ and the Harish-Chandra isomorphism
- **spec:** The algebra $\mathbb D(G/K)$ of $G$-invariant differential operators; its commutativity; and the **Harish-Chandra isomorphism** $\mathbb D(G/K) \xrightarrow{\sim} S(\mathfrak a_{\mathbb C})^{W}$ onto Weyl-invariant polynomials on $\mathfrak a^*$. The Laplace-Beltrami operator as a generator; radial part / the connection to $Z(U(\mathfrak g))$.
- **why a gap:** The isomorphism is only *sketched in passing* inside `07.04.12` (spherical-function) — that unit asserts "$D$ acts by the Harish-Chandra homomorphism … a polynomial $p_D(\lambda)$" as a step in the spherical-function proof but never states or proves $\mathbb D(G/K)\cong S(\mathfrak a)^W$ as a theorem, nor establishes commutativity. `07.06.10/.21` (casimir) cover $Z(U(\mathfrak g))$ for the *group*, not the $\mathbb D(G/K)$ symmetric-space version. This is DGLGSS Ch. IV §5 / Ch. II §4, the structural input that makes the whole spherical-function theory work; it deserves its own theorem unit.
- **prereqs:** `07.04.07` (riemannian-symmetric-space), `07.04.08` (restricted-root-system), `07.06.04` (weyl-group), `07.06.10` (casimir-element).
- **originator prose:** Harish-Chandra 1958.

---

## COVERED (not gaps) — due-diligence trailer

Each stub punch-list item / brief candidate, with the existing unit that covers it:

- **Cartan involution $\theta$** — COVERED `07.04.03` (existence + uniqueness up to inner aut, $B_\theta$ positive-definite, full proof via compact real form).
- **Cartan decomposition $\mathfrak g=\mathfrak k\oplus\mathfrak p$ (algebra level)** — COVERED, woven through `07.04.03`, `07.04.06`, `07.04.07` (bracket relations, eigenspace split). No standalone `07.04.04` needed — it would duplicate these.
- **Cartan decomposition $G=K\exp\mathfrak p$ (group level)** — COVERED `07.04.09` (proved as Step 2 + KAK theorem; diffeomorphism stated).
- **Compact real form (existence + uniqueness, Weyl unitary trick)** — COVERED `07.04.02`.
- **Orthogonal symmetric Lie algebra; types I/II/III/IV; compact↔noncompact duality** — COVERED `07.04.06` (definition, four types, duality construction $\mathfrak g\leftrightarrow\mathfrak g^*$ with full Killing-form proof).
- **Riemannian symmetric space (geodesic symmetry $s_p$ ⟺ $G/K$ ⟺ orth. sym. LA)** — COVERED `07.04.07` (namesake unit; equivalence proof, worked examples $S^n,\mathbb H^n,\mathbb{CP}^n,$ Grassmannian).
- **Curvature $R(X,Y)Z=-[[X,Y],Z]$; $\nabla R=0$; sectional-sign by type; Cartan–Hadamard for non-compact type** — COVERED `07.04.07`.
- **Iwasawa decomposition $G=KAN$** — COVERED `07.04.09` (statement, proof, uniqueness, diffeomorphism, $\rho$).
- **$KAK$ / polar decomposition; $A_+$ fundamental domain** — COVERED `07.04.09` (KAK theorem + worked $SL_2(\mathbb R)$ singular-value example).
- **Restricted roots $\Sigma\subset\mathfrak a^*$, Cartan subspace, multiplicities $m_\alpha$, non-reduced $BC_n$, restricted Weyl group, Satake diagrams** — COVERED `07.04.08`.
- **Bruhat decomposition $G=\sqcup_w BwB$, minimal parabolic, big cell** — COVERED `07.04.10`.
- **Spherical function $\varphi_\lambda$; Harish-Chandra integral formula; $c$-function; Gelfand commutativity; rank-one reduction to classical special functions (two-point homogeneous spaces)** — COVERED `07.04.12`.
- **Hermitian symmetric spaces; bounded symmetric domains; Borel + Harish-Chandra embedding; $Z(\mathfrak k)$ characterisation** — COVERED `07.04.14`.
- **Totally geodesic submanifolds; Lie triple system $[X,Y,Z]=[[X,Y],Z]$** — COVERED `07.04.06` (Theorem 4 + Prop 2) and `07.04.07` (rank = max flat totally geodesic submanifold).
- **Killing form; Cartan's semisimplicity criterion** (stub Priority-0) — COVERED `07.06.16` (cartan-criterion-solvability-semisimplicity) + `07.06.10` (casimir).
- **Hopf-Rinow completeness** (stub Priority-0) — COVERED `03.02.32` (the-riemannian-hopf-rinow-theorem); Lorentzian variant `03.02.17`.
- **Complex semisimple root-space decomposition, root systems, Weyl group, Dynkin diagrams** (DGLGSS Ch. III prereqs) — COVERED `07.06.03, .04, .05, .17, .18, .19, .20`.
- **Lie group / Lie algebra / exponential / adjoint** (DGLGSS Ch. II) — COVERED `03.03.01` (lie-group), `03.02.27` (Levi-Civita + exponential map), adjoint woven through `07.06.*`. (BCH formula has no dedicated unit but is not a Helgason-equivalence blocker; the stub itself rated it low.)
- **Compact-group harmonic analysis (Peter-Weyl, Haar, Weyl integration)** — COVERED `07.07.02, .03`, `07.07.04`.
- **Wigner classification (physics application of real forms)** — COVERED `07.07.06`, `07.07.09`.

**Not proposed (correctly out of scope / deferred per stub §5):** deep Plancherel/Paley-Wiener on $G/K$ (Helgason GTM 113), horocycle transform, Helgason-Fourier transform (GSM 39).
