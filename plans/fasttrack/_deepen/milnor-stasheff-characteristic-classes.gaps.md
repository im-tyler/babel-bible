# Deepening audit — Milnor & Stasheff, *Characteristic Classes*

**Slug:** `milnor-stasheff-characteristic-classes`
**Chapter:** `content/03-modern-geometry/06-characteristic-classes/`
**Date:** 2026-06-02

## Verdict

**ESSENTIALLY FULLY COVERED.** The original first-pass audit (`plans/fasttrack/milnor-stasheff-characteristic-classes.md`) was written when `03.06.*` held only four shipped units (`03.06.03`–`03.06.06`). Since then the entire Priority-0 through Priority-4 punch-list of that audit has been produced. The chapter now runs `03.06.03` through `03.06.26`, and every flagged gap (Thom isomorphism, Euler class, BO/BU cohomology, SW/Pontryagin numbers, signature theorem at master tier, unoriented + oriented bordism, Pontryagin-Thom, Steenrod squares + Wu formula, multiplicative sequences/genera, Whitney duality + immersions, exotic 7-spheres, Bernoulli numbers) is shipped and deep — many with full proofs, not stubs.

**Genuine gaps: 0.** I could not find a single Milnor-Stasheff theorem or construction lacking a corresponding unit after heavy grepping. I am reporting 0 gaps honestly rather than manufacturing marginal units.

---

## COVERED (not gaps) — due-diligence evidence

Each original-audit gap, with the unit that now covers it and a verified evidence line.

| Milnor-Stasheff topic (M-S §) | Existing unit | Evidence |
|---|---|---|
| Stiefel-Whitney axioms, Whitney product, normalisation | `03.06.03` | Full axioms + uniqueness proof via $H^*(BO(n);\mathbb{Z}/2)$. |
| Cohomology ring $H^*(BO(n);\mathbb{Z}/2)=\mathbb{Z}/2[w_1,\dots,w_n]$ (§6,§7) | `03.06.03`, `03.06.04`, `03.06.20` | `03.06.03:179` polynomial-ring uniqueness proof; `03.06.04:589`–`606` BU/BSO rings; `03.06.20` Borel-Hirzebruch $G/T$ derivation. |
| $H^*(BU(n);\mathbb{Z})=\mathbb{Z}[c_1,\dots,c_n]$ (§14) | `03.06.04`, `03.06.20` | `03.06.04:594`. |
| **Thom class & Thom isomorphism (singular cohomology)** (§8,§10) | `03.12.29` | `03.12.29:101`–`117` definition + existence/uniqueness proof via Leray-Hirsch; `03.06.07` flagged in original audit was filled by `03.12.29` cross-section. de Rham version `03.04.09`; K-theory version `03.08.03`. |
| **Euler class** $e(E)=U|_B$, obstruction theorem (§9) | `03.05.10`, `03.06.04`, `03.12.29` | `03.05.10:169`–`409` Euler class, Poincaré-Hopf, nonzero-section obstruction, universal angular form; `03.06.04:579` top Chern class = Euler class via splitting principle. |
| **Gysin sequence** | `03.13.02`, `03.12.29` | `03.13.02:187`–`218` full Gysin LES derived from Leray-Serre with proof; `03.12.29:135`. |
| Stiefel-Whitney numbers $w_I[M]$ & Pontryagin numbers $p_I[M]$ (§4,§16) | `03.06.10` | Dedicated unit "Stiefel-Whitney and Pontryagin numbers". |
| **Splitting principle** (§14,§15) | `03.13.03` | "Leray-Hirsch / splitting principle" unit; used throughout `03.06.04`, `03.06.15`. |
| Chern-Weil construction (App C) | `03.06.05`, `03.06.06` | Invariant polynomial + Chern-Weil homomorphism. |
| Pontryagin classes axiomatic $p_i=(-1)^ic_{2i}(E\otimes\mathbb{C})$ (§15) | `03.06.04` | `03.06.04:412`. |
| **Hirzebruch signature theorem** (§19) | `03.06.11`, `03.06.19` | Dedicated master-tier signature-theorem unit + intersection-form/signature unit. |
| **Steenrod squares & Wu formula** (§8,§11) | `03.06.14` | Dedicated unit "Steenrod squares and the Wu formula"; $w_i=\mathrm{Sq}^i(u)$ in `03.06.03:185`, `03.12.29:143`. |
| **Unoriented bordism $\mathfrak{N}_*=\mathbb{F}_2[x_i]$ & Thom's theorem** (§17) | `03.06.12` | `03.06.12:415` polynomial-ring structure on non-Mersenne generators, $x_{2k}=[RP^{2k}]$, Dold-manifold odd generators, full Pontryagin-Thom synthesis. |
| **Oriented bordism $\Omega^{SO}_*$ & Pontryagin-Thom** (§18) | `03.06.13` | Dedicated unit. |
| **Multiplicative sequences, $L$-/$\hat{A}$-/Todd genera** (§19, App B) | `03.06.15` | Dedicated master unit; Bernoulli coefficients discussed `03.06.15:738`. |
| Bernoulli numbers (App B) | `06.01.16`, `21.03.01`, `03.06.15`, `03.06.17`, `03.06.19` | Generating function in zeta units; applied in genera/exotic-sphere units. Not a standalone gap. |
| **Whitney duality $w(TM)w(\nu)=1$ & immersion obstructions** (§4,§11) | `03.06.16` | Dedicated unit "Whitney duality and immersion obstructions". |
| **Combinatorial Pontryagin classes & exotic 7-spheres** (§20) | `03.06.17` | Dedicated master-tier survey unit. |
| Chern character $\mathrm{ch}(E)$ (§16) | `03.06.18`, `03.08.01` | Dedicated ring-homomorphism unit. |
| $w_1$=orientability, $w_2$=spin obstruction | `03.06.03`, `03.09.04` | Across SW + spin units. |
| Cup product / Poincaré duality review (App A) | `03.12.16`, `03.12.17` | Shipped. |
| Grassmannian / classifying-space construction (§5,§6) | `03.08.04`, `03.08.05`, `03.06.20` | Classifying space + universal bundle + Schubert-cell-flavored Borel-Hirzebruch. |

### Bonus coverage beyond the book (chapter has grown past M-S scope)
`03.06.07` Chern-Simons/transgression, `03.06.08` Kostant-Weil prequantum, `03.06.09` Dixmier-Douady, `03.06.20` Borel-Hirzebruch $G/T$, `03.06.23` elliptic-genus modularity, `03.06.24` Bott-Taubes rigidity, `03.06.26` elliptic-cohomology pointer — all present, all beyond Milnor-Stasheff proper.

---

## Summary

- **Genuine gaps:** 0
- **COVERED-verified topics:** 22 (every original-audit gap + the book's core theorem list)
- **Gap file:** `plans/fasttrack/_deepen/milnor-stasheff-characteristic-classes.gaps.md`

The `03-modern-geometry/06-characteristic-classes/` chapter, together with cross-section units in `03.12.*` (Thom/Steenrod), `03.13.*` (Gysin/Leray-Hirsch), `03.05.*` (Euler class), and `03.08.*` (classifying spaces, K-theory Thom), provides complete Fast-Track-equivalent coverage of Milnor-Stasheff. No production work recommended.
