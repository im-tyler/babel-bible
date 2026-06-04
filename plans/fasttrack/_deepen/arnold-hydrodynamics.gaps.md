# Arnold-Khesin *Topological Methods in Hydrodynamics* — deepened gap file

**Slug:** `arnold-hydrodynamics` · **FT 1.12** · re-audited against the live ~1319-unit corpus.

The first-pass audit (`plans/fasttrack/arnold-hydrodynamics.md`) proposed a 20-item
punch-list opening `05.14-topological-hydrodynamics/` and `05.15-optimal-transport/`.
Since then the corpus grew: **`05.14.07` (Beltrami/ABC), `05.14.08` (fast dynamo),
`05.15.01` (Wasserstein/Otto), `05.15.02` (Korteweg/Madelung) already shipped**, and
several upstream items proved already-covered (Lie-Poisson in `05.03.01`; Massey/
Borromean triple-linking in `03.12.51`; KdV-as-Hamiltonian in `05.09.08`; Kelvin/
Helmholtz vortex theorems in `09.07.01`; ideal-fluid-on-`SDiff` geodesic identification
already developed at master depth inside `05.09.05`).

What remains genuinely absent is the **load-bearing topological-fluid core that the two
shipped `05.14.*` units explicitly forward-reference as "planned"** — helicity-as-Casimir,
asymptotic-linking, the Hopf-invariant unknotting obstruction, MHD frozen-flux/magnetic
helicity, and Arnold's energy-Casimir stability theorem. These occupy the free slots
`05.14.01–06`. The KdV/Camassa-Holm *Bott-Virasoro-geodesic* framing is also genuinely
missing as a distinct item from the Hamiltonian framing in `05.09.08`.

**Genuine gaps: 6. COVERED-verified topics: 11.**

---

## GENUINE GAPS

### 1. `05.14.01` — Helicity as a Casimir invariant of ideal-fluid Euler
- **spec:** Define helicity $\mathcal{H}(v)=\int_M v\wedge dv=\int_M v\cdot\operatorname{curl}v\,d\mathrm{vol}$ for a divergence-free field on a closed 3-manifold; prove it is a Casimir of the Lie-Poisson structure on $\mathfrak{X}_{\mathrm{vol}}(M)^*$ (constant on isovorticity coadjoint orbits) and hence conserved by the Euler flow; gauge/well-definedness on non-simply-connected $M$.
- **prereqs:** `05.09.05` (Euler-Arnold / ideal fluid on `SDiff`), `05.03.01` (coadjoint orbit + Lie-Poisson bracket), `03.04.04` (exterior derivative)
- **chapter dir:** `content/05-symplectic/14-topological-hydrodynamics/` · frontmatter `section: symplectic`, `chapter: topological-hydrodynamics`
- **why genuine:** helicity-as-Casimir is *mentioned* in `05.14.07` (Beltrami) and one-lined in `05.09.05`, but no unit states or proves it; `05.14.07` itself flags it as "planned `05.14.02`". Fluid helicity is nowhere a primary subject (the high-count "helicity" hits — Penrose `03.07.14`, Proca `12.05.06`, Wigner `07.07.06` — are *particle* helicity, unrelated).
- **anchor:** Moreau 1961; Moffatt 1969 (J. Fluid Mech. 35); Arnold-Khesin Ch. III §1. Anchor unit for the block.

### 2. `05.14.02` — Asymptotic linking number and Arnold's helicity-as-linking theorem
- **spec:** Gauss linking integral for two closed curves in $\mathbb{R}^3$; the asymptotic linking $\lambda(x_1,x_2)$ of long orbit-segments of a volume-preserving flow closed up short; Arnold's theorem that helicity equals the average asymptotic linking $\mathcal{H}(v)=\int_{M\times M}\lambda(x_1,x_2)\,dx_1dx_2$ (the "asymptotic Hopf invariant").
- **prereqs:** `05.14.01` (helicity), `03.04.04` (Lie derivative / curl), `05.02.06` (geodesic-flow / flow machinery)
- **chapter dir:** `content/05-symplectic/14-topological-hydrodynamics/`
- **why genuine:** "asymptotic linking" appears **only** as a forward-reference inside `05.14.08`/`05.14.07`; no unit defines it or proves Arnold 1973. The Gauss *linking number* appears as the abelian Chern-Simons phase (`03.16.06`) but the Gauss linking *integral* and the asymptotic-ergodic-mean theorem are absent.
- **anchor:** Arnold 1973 *The asymptotic Hopf invariant and its applications* (Sel. Math. Sov. 5). **Originator-prose mandatory.**

### 3. `05.14.03` — Hopf invariant and the topological obstruction to unknotting vortex tubes
- **spec:** Hopf invariant $H(f)\in\mathbb{Z}$ of $f:S^3\to S^2$ via $H(f)=\int_{S^3}\alpha\wedge d\alpha$ with $d\alpha=f^*\omega$, equivalently the linking of two generic fibres; identify with the helicity of an associated field; the obstruction — a vortex configuration of nonzero helicity cannot be carried by ideal-fluid evolution to one of zero helicity; Hopf fibration as the canonical helicity-1 example; preservation of vortex-tube knot/link type under the Euler flow.
- **prereqs:** `05.14.01` (helicity), `05.14.02` (asymptotic linking), `03.04.03` (integration on manifolds / Stokes)
- **chapter dir:** `content/05-symplectic/14-topological-hydrodynamics/`
- **why genuine:** the integral/linking definition of the **Hopf invariant** is not a unit (`03.12.49` is the Hopf *algebra* bialgebra; the `03.02.*` files are Hopf-Rinow). Knotted-vortex-tube topological conservation has no unit. `05.14.07` lists this as "planned `05.14.04`".
- **anchor:** Hopf 1931 (Math. Annalen 104); Moffatt 1969; Arnold-Khesin Ch. III §4-§5.

### 4. `05.14.04` — Ideal MHD: frozen-flux, the semidirect-product Lie-Poisson structure, and magnetic helicity
- **spec:** Ideal MHD as a Lie-Poisson system on $\mathfrak{X}_{\mathrm{vol}}(M)\ltimes\Omega^2(M)$ (magnetic field carried as a frozen-in 2-form); Alfvén's frozen-flux theorem; magnetic helicity $\int A\wedge dA$ as a Casimir; cross-helicity; Woltjer minimum-energy force-free Beltrami relaxed states (Taylor states).
- **prereqs:** `05.14.01` (helicity Casimir), `05.09.05` (Euler-Arnold / semidirect-product aside), `10.03.03` (Maxwell stress / EM fields)
- **chapter dir:** `content/05-symplectic/14-topological-hydrodynamics/`
- **why genuine:** ideal MHD is mentioned only as an aside in `05.09.05` (semidirect product) and `05.14.07`/`05.14.08` (force-free/Woltjer pointer); no unit states the frozen-flux theorem or the magnetic-helicity Casimir. "Alfvén"/"frozen-flux"/"magnetic helicity" have **zero** primary-subject hits.
- **anchor:** Alfvén 1942 (Nature 150); Woltjer 1958 (PNAS 44); Arnold-Khesin Ch. II §1-§5. (`05.14.08` already cites the dynamo side; this unit is the equilibrium/topology side it forward-references as "planned `05.14.06`".)

### 5. `05.14.05` — Arnold's nonlinear stability theorem (energy-Casimir method)  **[apex]**
- **spec:** Steady Euler solutions as critical points of energy on each isovorticity coadjoint orbit (Casimirs $\int F(\omega)$); the second variation $\delta^2(E+C)$ sign-definite on the orbit tangent gives a Lyapunov function; Arnold's 1st theorem (2D shear flow with monotone vorticity profile is nonlinearly stable); relation to Rayleigh's inflection-point criterion.
- **prereqs:** `05.14.01` (helicity / Casimirs), `05.09.05` (steady Euler), `05.04.02` (symplectic reduction)
- **chapter dir:** `content/05-symplectic/14-topological-hydrodynamics/`
- **why genuine:** "energy-Casimir" / "Arnold stability" have **zero** hits in the corpus; no unit states the theorem. `05.14.07` flags it as "planned `05.14.05`". The single largest deficit per the audit's §6.
- **anchor:** Arnold 1965 (Dokl. Akad. Nauk SSSR 162) + Arnold 1966 (Izv. Vyssh. Uchebn. Zaved. Mat. 54). **Originator-prose mandatory; apex unit.**

### 6. `05.14.06` — KdV and Camassa-Holm as Euler-Arnold geodesics on the Bott-Virasoro group
- **spec:** Bott-Virasoro central extension of $\operatorname{Diff}(S^1)$ at the Gelfand-Fuchs cocycle; with the right-invariant $L^2$ metric the Euler-Arnold equation is KdV; with the $H^1$ metric it is Camassa-Holm (peakon geodesics losing smoothness in finite time); contrast with the GZF/bi-Hamiltonian framing.
- **prereqs:** `05.09.05` (Euler-Arnold), `03.11.03` (Virasoro algebra), `05.09.08` (KdV as Hamiltonian evolution equation — the framing this complements)
- **chapter dir:** `content/05-symplectic/14-topological-hydrodynamics/` (or extend `05.09-*`; `05.14` keeps the Arnold-Khesin geometric framing together)
- **why genuine:** `05.09.08` does KdV-as-Hamiltonian (Gardner-Zakharov-Faddeev bracket, bi-Hamiltonian, Magri) but **not** KdV-as-geodesic-on-Bott-Virasoro; `05.15.02` (Korteweg/Madelung) only name-drops Camassa-Holm/Bott-Virasoro. The Euler-Arnold geometric derivation is the Arnold-Khesin-distinctive content and is absent.
- **anchor:** Ovsienko-Khesin 1987; Misiołek 1998 (J. Geom. Phys. 24); Camassa-Holm 1993 (PRL 71); Khesin-Misiołek 2003 (Adv. Math. 176).

---

## COVERED (not gaps) — due-diligence trailer

1. **Ideal-fluid Euler equation as geodesic on `SDiff(M)`** (audit item 1) — **COVERED `05.09.05`**. Master tier derives $\partial_t u+\nabla_u u=-\nabla p$, $\operatorname{div}u=0$ as the Euler-Arnold equation on `SDiff(M)` with the $L^2$ metric, identifies vorticity transport, and states the curvature formula. Genuine remaining gap is the *topological-invariant* layer (gaps 1-3), not the geodesic identification.
2. **Curvature of the diffeomorphism group / Lagrangian instability / weather unpredictability** — **COVERED `05.09.05`** (Arnold's $L^2$ sectional-curvature formula, negative curvature ⇒ exponential separation ⇒ hopeless forecast, Misiołek/Shnirelman/Khesin-Misiołek cited).
3. **General Euler-Arnold equation on a Lie group ($\dot m=\operatorname{ad}^*_v m$)** — **COVERED `05.09.05`** (the unit's primary subject).
4. **Lie-Poisson bracket on $\mathfrak{g}^*$, symplectic leaves = coadjoint orbits** (audit item 13, proposed `05.04.08`) — **COVERED `05.03.01`** Step 8 + Synthesis: $\{f,g\}(\mu)=\langle\mu,[df_\mu,dg_\mu]\rangle$, degeneracy, leaves are coadjoint orbits, KKS = leaf restriction. A self-contained promotion would be a deepening, not a genuine gap.
5. **Casimir functions of degenerate Poisson structures** — **COVERED `05.09.12`** and `05.09.08` (field-bracket Casimirs). General Casimir theory present; helicity-as-Casimir (gap 1) is the missing *instance*.
6. **Kelvin circulation theorem / Helmholtz vortex theorems / vorticity transport / vortex stretching / 2D-vs-3D cascade** (audit's "knotted vortex tubes" preservation, partially) — **COVERED `09.07.01`** (states Kelvin's $\Gamma=\oint v\cdot d\ell$ conservation, Helmholtz $D\omega/Dt=(\omega\cdot\nabla)v$, Biot-Savart for vorticity, 2D inverse cascade). The *geometric* coadjoint-orbit / Hopf-obstruction framing (gap 3) is the residue.
7. **Massey products, Borromean rings, triple/higher-order linking** (audit item 12, proposed `05.14.12`) — **COVERED `03.12.51`** (triple Massey product $\langle a,b,c\rangle$, Borromean rings as canonical example, "higher-order linking number"). No new unit warranted.
8. **Gauss linking number of two curves** — **COVERED (as a value) `03.16.06`** (abelian Chern-Simons Wilson-loop phase $=\operatorname{lk}$) and `05.10.04` (contact-topology survey). The Gauss *integral* and the *asymptotic-linking* theorem remain genuine (gap 2), but plain pairwise linking is present.
9. **KdV as a Hamiltonian evolution equation / bi-Hamiltonian / Magri / GZF bracket** — **COVERED `05.09.08`**. The distinct *Bott-Virasoro geodesic* framing is gap 6.
10. **Beltrami fields / ABC flows / chaotic streamlines; fast dynamo / Arnold cat-map; force-free Woltjer/Taylor states** (audit items 6-8) — **COVERED `05.14.07` and `05.14.08`** (already shipped, with helicity formula, kinematic/fast-dynamo definition, Woltjer force-free relaxation, Etnyre-Ghrist contact correspondence).
11. **Wasserstein/Otto optimal transport; Korteweg/Madelung quantum hydrodynamics** (audit items 17-18) — **COVERED `05.15.01` and `05.15.02`** (already shipped).

**Notes for the producer.** Gaps 1-5 form a single internally-cross-referenced batch (gap 1 precedes 2-5; gap 5 is the apex, produce last). They occupy the only free slots `05.14.01–06`; `05.14.07/08` are occupied and already forward-reference these exact ids as "planned", so id placement is pre-validated. Per-unit `§Notation` paragraphs suffice — no `notation/arnold-khesin.md` file. Out of scope (confirmed by audit §5, not gaps): Navier-Stokes regularity/BKM (asided in `05.09.05` + `09.07.01`), K41 turbulence (in `09.07.01`), Hunter-Saxton, EPDiff abstract framework, full optimal-transport theory.
