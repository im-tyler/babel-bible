# Donaldson *Riemann Surfaces* — deepened gap file

**Slug:** `donaldson-riemann-surfaces` · **FT 1.07** · re-audited against the live ~1414-unit corpus.

The first-pass audit (`plans/fasttrack/donaldson-riemann-surfaces.md`) proposed a 23-item
punch-list: a priority-1 cohomology/PDE infrastructure block (Čech, Hodge decomposition,
Serre duality, ∂̄-Hilbert PDE, Riemann-Roch proof, uniformisation PDE proof, Jacobi inversion),
a priority-2 Jacobian-side + Gauss-Manin block, and priority-3/4 examples/survey items.

**Since the audit was written, the corpus absorbed almost the entire punch-list.** The
`06.04-cohomology/` directory now ships Čech cohomology (`06.04.02`), Hodge decomposition
(`06.04.03`), Serre duality (`06.04.04`), the ∂̄-Hilbert-PDE unit (`06.04.05`), and a
sheaf-cohomology survey (`06.04.07`). The `06.06-jacobians/` directory ships Jacobi inversion
(`06.06.06`), Riemann bilinear relations (`06.06.07`), and the Schottky problem (`06.06.08`).
A whole new `06.08-vhs/` chapter ships the Gauss-Manin connection (`06.08.01`), VHS on the
Jacobian (`06.08.02`), and moduli of Riemann surfaces (`06.08.03`). The Narasimhan-Seshadri
theorem — flagged in my brief — is covered at master depth in `04.10.06` (and stated in
`03.05.19`, cross-linked from `06.05.02`). Riemann's existence theorem / abundance of
meromorphic functions (Donaldson's "main theorem") is proved via the Hodge/harmonic-form
route in `06.02.03`. The Dolbeault isomorphism, Hodge star, and (p,q)-form machinery live
inside `06.04.02`/`06.04.03`. The canonical embedding of curves lives in `04.04.14` +
`04.08.02`; the Torelli theorem in `04.10.34`.

What remains genuinely absent is narrow and entirely **differential-geometric**: the
**curvature route to uniformisation** — finding a conformal metric of constant Gaussian
curvature by solving the Gauss-curvature (Liouville) PDE, and the Ricci-flow-on-surfaces
proof of uniformisation. The corpus has **zero** Ricci-flow units and no constant-curvature
conformal-metric / Liouville-equation unit. This is exactly the Donaldson-flavoured geometric
analysis that the potential-theoretic uniformisation unit (`06.03.03`, proved via the Green's
function) does not carry. It is the single coherent topic-level gap. A second, smaller genuine
gap is the **prescribed-Gaussian-curvature (Kazdan-Warner / Berger-Nirenberg) PDE** that
underlies it. Everything else the audit proposed is now covered; the rest of the audit's value
is depth-deepening of already-shipped units, which is out of scope for a gap file.

**Genuine gaps: 2. COVERED-verified topics: 24.**

---

## GENUINE GAPS

### 1. `06.03.04` — Uniformisation via constant-curvature conformal metrics (Liouville equation + Ricci flow on surfaces)
- **spec:** The differential-geometric proof of uniformisation. On a compact Riemann surface, every conformal class contains a metric of constant Gaussian curvature $+1$, $0$, or $-1$ (sign fixed by Gauss-Bonnet via the Euler characteristic); finding it means solving the Gauss-curvature equation $\Delta u = K_0 - K\,e^{2u}$ (a Liouville-type semilinear PDE) for the conformal factor $e^{2u}$. State and outline the variational/sub-supersolution existence proof in the $\chi<0$ case, and present Hamilton-Chow's **normalised Ricci flow** $\partial_t g = (r - R)g$ on surfaces, which converges to the constant-curvature metric and so reproves uniformisation by a parabolic flow. Recover the three model geometries ($S^2$, $\mathbb{C}/\Lambda$, $\mathbb{D}$) as the constant-curvature representatives.
- **prereqs:** `06.03.03` (uniformisation theorem — potential-theoretic statement this complements), `03.02.05` (sectional/Ricci/scalar curvature), `03.02.06` (constant-curvature spaces / Killing-Hopf)
- **chapter dir:** `content/06-riemann-surfaces/03-riemann-surfaces/` · frontmatter `section: riemann-surfaces`, `chapter: riemann-surfaces`
- **why genuine:** `06.03.03` proves uniformisation by potential theory (Green's function / Dirichlet problem) and explicitly says "the proof requires potential theory or the solution of the Dirichlet problem"; the conformal-metric-of-constant-curvature route is a *different* proof and is absent. Grep confirms **no Ricci-flow unit exists anywhere in the corpus** (`find ... | grep ricci` returns only `03.02.05-sectional-ricci-scalar-curvature` and `03.02.14-gauss-codazzi-ricci-equations` — neither is a flow), and no `constant curvature ... uniformiz` / `liouville equation` body match in `03-differential-geometry/` or `24-numerical-pde/`. This is the brief's "uniformisation via curvature/Ricci flow" item, genuinely missing.
- **anchor:** Poincaré 1898 (constant-curvature conformal metric); Berger 1971 / Kazdan-Warner 1974 (Gauss-curvature equation); Hamilton 1988 *The Ricci flow on surfaces* (Contemp. Math. 71); Chow 1991 *The Ricci flow on the 2-sphere* (J. Diff. Geom. 33). Originator-prose target: Hamilton-Chow.

### 2. `06.03.05` — The prescribed-Gaussian-curvature equation on a surface (Kazdan-Warner)
- **spec:** Given a compact surface with background metric $g_0$ of curvature $K_0$, which functions $K$ arise as the Gaussian curvature of a conformal metric $e^{2u}g_0$? The equation $-\Delta u + K_0 = K e^{2u}$; the Gauss-Bonnet sign constraint $\int K\,dA = 2\pi\chi$; the Kazdan-Warner solvability trichotomy by the sign of $\chi$ (positive / zero / negative Euler characteristic), with the negative case (existence whenever $K<0$ somewhere and the average constraint holds) carried in full and the $S^2$ Nirenberg-problem obstruction stated. This is the PDE engine behind gap 1 and the analytic heart of Donaldson's geometric-analysis reading of surface theory.
- **prereqs:** `06.01.24` (Dirichlet problem / Perron — elliptic-PDE solvability on a surface domain), `06.01.11` (harmonic functions in the plane / Laplacian), `03.02.05` (Gaussian/Ricci curvature)
- **chapter dir:** `content/06-riemann-surfaces/03-riemann-surfaces/` · frontmatter `section: riemann-surfaces`, `chapter: riemann-surfaces`
- **why genuine:** No unit states the prescribed-curvature / Liouville equation. Grep for `prescribed (gaussian|gauss) curvature|kazdan-warner|nirenberg problem|liouville equation` across `03-differential-geometry/` and `24-numerical-pde/` returns nothing. The `06.01.24-dirichlet-problem-perron` unit solves the *linear* Dirichlet problem but not the semilinear curvature equation. Distinct from gap 1: gap 1 is the geometric uniformisation statement + Ricci flow; gap 2 is the standalone elliptic-PDE existence theory it rests on. If only one unit is produced, fold gap 2 into gap 1's Master section.
- **anchor:** Kazdan-Warner 1974 *Curvature functions for compact 2-manifolds* (Ann. of Math. 99); Berger 1971; Moser 1973 (Trudinger-Moser inequality for the $S^2$ case).

---

## COVERED (not gaps)

Each topic the original audit proposed (and each item my brief flagged), with the existing unit that already states/proves it. Verified by `find content -name "*.md"` filename grep + `grep -rli` body grep.

- **Čech cohomology of holomorphic line bundles** (audit item 1) — COVERED `06.04.02-cech-cohomology-line-bundles` (full open-cover / cochain / $\delta$ / $H^0$-$H^1$ construction + $\mathbb{P}^1$ worked examples).
- **Hodge decomposition for compact Riemann surfaces** (audit item 2) — COVERED `06.04.03-hodge-decomposition-curves` (harmonic 1-forms, $H^1 = \mathcal{H}^{1,0}\oplus\mathcal{H}^{0,1}$, Hodge star, $\dim = g$).
- **Serre duality on curves** (audit item 3) — COVERED `06.04.04-serre-duality-curves` (residue pairing $H^1(L)\cong H^0(K\otimes L^{-1})^*$).
- **Riemann-Roch with full proof** (audit item 4) — COVERED `06.04.01-riemann-roch-compact-riemann-surfaces` (the unit exists; divisor-bumping proof depth is a *deepening*, not a topic gap).
- **Uniformisation theorem (potential-theoretic)** (audit item 5) — COVERED `06.03.03-uniformization-theorem` (cites Donaldson Ch. 6; Green's-function/Dirichlet route present). The *PDE-proof deepening* is depth, not a gap; the genuinely distinct **curvature/Ricci-flow** route is gap 1 above.
- **Jacobi inversion theorem** (audit item 6) — COVERED `06.06.06-jacobi-inversion`.
- **Theta function / Riemann's vanishing theorem** (audit item 7) — COVERED `06.06.05-theta-function` (+ `06.01.31-jacobi-theta-functions`).
- **Riemann's bilinear relations** (audit item 8) — COVERED `06.06.07-riemann-bilinear`.
- **Schottky's theorem / Schottky problem** (audit item 9) — COVERED `06.06.08-schottky-problem` (+ `06.01.29-schottky-bloch-theorems`).
- **Gauss-Manin connection** (audit item 10; flagged "largest gap") — COVERED `06.08.01-gauss-manin` (period mapping + elliptic-family worked example).
- **Variation of Hodge structure / Griffiths transversality** (audit item 11) — COVERED `06.08.02-vhs-jacobian`.
- **Holomorphic line bundle / RR translation / degree** (audit item 12) — COVERED `06.05.02-holomorphic-line-bundle`.
- **Divisor / Picard group structure** (audit item 13) — COVERED `06.05.01-divisor-riemann-surface`.
- **Hilbert-space PDE for ∂̄** (audit item 14) — COVERED `06.04.05-dbar-hilbert-pde` (+ `06.10.04-dbar-equation-hormander-l2-estimates` for the SCV case).
- **Existence of meromorphic functions / "main theorem"** (audit item 15) — COVERED `06.02.03-riemann-s-existence-theorem-for-algebraic-curves` (harmonic-form/Hodge proof) + stated in `06.03.01-riemann-surface`.
- **Period matrix / Siegel upper half space** (audit item 16) — COVERED `06.06.02-period-matrix` (with bilinear relations in `06.06.07`).
- **Holomorphic 1-forms / $\dim H^0(\Omega^1)=g$** (audit item 17) — COVERED `06.06.01-holomorphic-one-form` (Hodge-theory proof in `06.04.03`).
- **Standard running examples (sphere/torus/hyperelliptic/plane curves)** (audit item 18) — COVERED distributed: Riemann sphere `06.01.07`; torus via Weierstrass ℘ `06.01.25` + `06.01.26`; hyperelliptic + plane curves in `06.02.02-branched-coverings` and `06.02.03`. Worked-example *density* is a curriculum issue, not a topic gap.
- **Embedding of curves in projective space / canonical embedding** (audit item 19) — COVERED `04.04.14-enriques-babbage-petri-theorem` + `04.08.02-canonical-sheaf` (+ projective-embedding statement in `06.02.03`).
- **Principally polarised abelian variety structure on $J(M)$** (audit item 20) — COVERED `04.10.16-abelian-varieties` + PPAV statements in `06.06.06`/`06.06.07`/`06.06.08`.
- **Moduli of Riemann surfaces / Teichmüller pointer** (audit item 21) — COVERED `06.08.03-moduli-of-riemann-surfaces`.
- **Sheaf-cohomology survey** (audit item 22) — COVERED `06.04.07-sheaf-cohomology-survey`.
- **Narasimhan-Seshadri (stable bundles ↔ unitary reps)** (brief item) — COVERED `04.10.06-moduli-vector-bundles-curve-slope-stability` (full statement + Atiyah-Bott/Donaldson moment-map proof outline), restated `03.05.19-holomorphic-vector-bundle`, cross-linked `06.05.02`.
- **Riemann mapping theorem / Dirichlet-principle route** (brief item) — COVERED `06.01.06-riemann-mapping-theorem` (Dirichlet-principle / Koebe history) + `06.01.24-dirichlet-problem-perron`. (Plateau/Douglas-Radó is not Donaldson-central and lives adjacently in `03.02.26`/`03.02.29` harmonic-map theory.)
