# Lawson-Michelsohn, *Spin Geometry* (3.35) — deepening gap audit

**Audit context.** Unlike the brief's "no prior audit" assumption, a full first-pass
audit (`plans/fasttrack/lawson-michelsohn-spin-geometry.md`, Passes 1-7) DOES exist and
its production plan was **fully executed**: the 12 planned new units `03.09.11`–`03.09.22`
shipped, plus 6 deepenings, 2 exercise packs, and the deficit-row rework (Pass 6). The
book was driven from ~38% to a verified ~98% theorem aggregate. The live corpus has since
grown further (BGV-sourced `03.09.23`–`03.09.28` add Bismut, eta/APS, Kirillov,
Mathai-Quillen, Cartan model). This re-audit therefore maps the book's 126-result
inventory against the **current** corpus and finds it essentially complete. Result:
**1 genuine gap**, everything else COVERED with id evidence below.

Only free slot in `03-modern-geometry/09-spin-geometry/` is **`03.09.27`** (`.28` is occupied).

---

## GENUINE GAPS (1)

### G1 — Pure spinors and Cartan's classification of orthogonal complex structures

| Field | Value |
|---|---|
| **id** | `03.09.27` |
| **title** | Pure spinors and the spinor variety |
| **spec** | Cartan's pure spinors: the bijection between projectivized pure spinors and maximal isotropic subspaces (orthogonal complex structures on $\mathbb{R}^{2n}$); the pure-spinor variety as the closed minimal/highest-weight orbit in $\mathbb{P}(\Delta^\pm)$ cut out by the Cartan quadratic equations; the squaring map $\psi \mapsto \psi\otimes\bar\psi$ recovering the isotropic flag. (LM Thm IV.9.1, IV.9.2 / §IV.9.) |
| **prereqs** | `03.09.05` (spinor bundle), `03.09.13` (triality — half-spinor reps of Spin), `03.09.19` (calibrated geometries — parallel-spinor squaring, the natural downstream consumer) |
| **chapter dir** | `content/03-modern-geometry/09-spin-geometry/` |
| **frontmatter section/chapter** | chapter `03`, section `09` (spin geometry) |

**Why genuine.** `grep -rinE "pure spinor" content/` returns **zero** hits corpus-wide;
`isotropic Grassmannian|spinor variety|orthogonal complex structure` likewise zero. The
calibrated-geometries unit `03.09.19` covers calibrations and parallel-spinor squaring to
calibrating forms, but does **not** state or prove the pure-spinor classification (Thm
IV.9.1) or the Cartan pure-spinor-variety-as-highest-weight-orbit theorem (Thm IV.9.2).
These are the two rows in §2.1 of the first-pass audit (rows 113, 114) that were assigned
to planned unit "N9" but, in execution, N9 (`03.09.19`) was scoped to calibrations only —
the pure-spinor half was dropped. Both rows remain GAP. This is a self-contained,
high-value topic (Cartan 1938 *Leçons sur la théorie des spineurs* II; the link from
spin representation theory to complex/Kähler geometry and to twistor theory), not a
marginal unit.

**Originator anchor.** É. Cartan 1938, *Leçons sur la théorie des spineurs* (Hermann),
vol. II; modern: Chevalley 1954 *The Algebraic Theory of Spinors* Ch. III; LM §IV.9.

---

## COVERED (not gaps) — due-diligence evidence

Every other candidate from the first-pass audit's 53 GAP rows and the brief's candidate
list was verified present in the live corpus:

- **Full Clifford classification / 8×8 chessboard; $C\ell_{r+1,s+1}\cong C\ell_{r,s}\otimes C\ell_{1,1}$; real/complex Bott periodicity of $C\ell_n$** — `03.09.11` (clifford-chessboard) + `03.09.02` deepening + `03.08.07` (Bott periodicity).
- **Pin/Spin groups, spin representation, Cartan-Dieudonné (now proved), low-dim identifications, $\mathfrak{spin}=\mathfrak{so}$** — `03.09.03` (Cartan-Dieudonné stated as theorem at line 355; Pin$^\pm$ distinction included), `03.09.02`.
- **Spin(8) triality + exceptional Lie groups via spinors** — `03.09.13` (triality).
- **KR-theory and the (1,1)-periodicity theorem** — `03.09.12` (kr-theory) + `03.08.12` (kr-theory-with-reality).
- **Atiyah-Bott-Shapiro $\widehat{\mathfrak{M}}_n$ module quotient and $\widehat{\mathfrak{M}}_*\cong KO^{-*}$** — `03.09.15` (clk-dirac, ABS isomorphism stated + proved sketch), `03.08.07`, `03.09.11`.
- **Spin structure, $w_2$ obstruction, $H^1(\cdot;\mathbb{Z}/2)$ torsor** — `03.09.04`.
- **Spin$^c$ structures, $W_3=\beta w_2$ obstruction (full Bockstein proof), almost-complex ⇒ Spin$^c$** — `03.09.05` (Thm LM D.1 with proof at line 504).
- **Spin cobordism ring $\Omega_*^{\mathrm{Spin}}$, low-dim values, Anderson-Brown-Peterson structure theorem** — `03.09.04` Master section (Thm at line 341) + `03.08.12`.
- **Spinor/Clifford bundles, spin connection, Dirac operator, symbol, self-adjointness** — `03.09.05`, `03.09.08`.
- **Lichnerowicz formula $D^2=\nabla^*\nabla+\tfrac14 R$ and vanishing** — `03.09.05`, `03.09.08`.
- **Generalised Dirac bundles, universal Bochner-Weitzenböck, $d+d^*=\sum e_i\nabla_{e_i}$, Hodge Laplacian $=D^2$, Bochner $b_1$** — `03.09.14` (dirac-bundle).
- **$C\ell_k$-linear Dirac, KO-valued index, Hitchin $\alpha$-invariant, Atiyah-Hirzebruch generalised integrality** — `03.09.15` (clk-dirac).
- **PSC obstruction chain: Lichnerowicz, Hitchin $\alpha$, Gromov-Lawson enlargeable, aspherical/hyperbolic, complete-manifold higher index, topology of psc$^+$** — `03.09.16` (psc-obstruction).
- **Witten's spinor proof of the positive mass theorem (ADM mass, Schwarzschild worked example)** — `03.09.17` (witten-positive-mass).
- **Berger holonomy classification + parallel spinors (Wang bijection)** — `03.09.18` (berger-holonomy).
- **Calibrated geometries: special Lagrangian, associative, coassociative, Cayley** — `03.09.19` (calibrated-geometries).
- **Heat-kernel proof of Atiyah-Singer, McKean-Singer, asymptotic expansion, supersymmetry** — `03.09.20` (heat-kernel-index) + `03.09.23` (Bismut superconnection).
- **Family / equivariant / Atiyah-Bott Lefschetz fixed-point index** — `03.09.21` (family-equivariant-index) + `03.09.25` (Kirillov via equivariant index).
- **Sobolev spaces, pseudodifferential operators, parametrix, elliptic regularity, Hodge decomposition for elliptic complexes, spectral theorem** — `03.09.22` (pseudodifferential, all of LM III.1-III.5).
- **Atiyah-Singer index theorem (K-theoretic + cohomological), HRR, signature, Gauss-Bonnet, $\hat A$-integrality** — `03.09.10` + `03.06.11`, `03.06.15`, `04.05.10`.
- **Multiplicative sequences, $L$-/$\hat A$-/Todd genera, Chern character ring map, Thom iso defect** — `03.06.15`, `03.06.18`, `03.08.03`.
- **$\hat A=0$ for spin $M$ with smooth $S^1$-action (Atiyah-Hirzebruch 1970)** — `03.06.24` (bott-taubes-rigidity, $q\to0$ cuspidal limit).
- **Vector-field problem on $S^n$ / immersions via Clifford modules (Adams, Hurwitz-Radon)** — `03.09.E2` Exercise 15 (full proof).
- **Spinor cohomology on $c_1=0$ Calabi-Yau (LM IV.11.2)** — `03.09.E2` Exercise 16 (full proof).
- **Kähler: $\mathfrak{S}\cong\Lambda^{0,*}\otimes K^{1/2}$, $D=\sqrt2(\bar\partial+\bar\partial^*)$** — `03.09.05` + `03.09.14` Dolbeault specialisation.
- **Dirac eigenvalues on $S^1$, $S^n$, $T^n$ (both spin structures), Friedrich inequality** — `03.09.08` (explicit spectra, lines 278-344).
- **APS / eta-invariant (beyond LM's scope, but adjacent)** — `03.09.24`.
- **Charge conjugation / $J^2=\pm1$ mod-8 reality table** — `03.09.11` (Advanced results) + `03.09.05` signature mod-8 inner-product table.

---

**Counts: 1 genuine gap; 28 COVERED-verified topic clusters.**
