# Ahlfors — *Complex Analysis* (Fast Track 1.04) — Audit + Gap Plan

**Book:** Lars V. Ahlfors, *Complex Analysis: An Introduction to the
Theory of Analytic Functions of One Complex Variable* (3rd ed., McGraw-Hill,
1979). ISBN 0-07-000657-1. ~331 pages, 8 chapters, ~280 exercises.

**Fast Track entry:** 1.04. The canonical graduate complex-analysis
text — the **single-complex-variable anchor** of the FT analysis spine.
Already cited by `tier_anchors` on five existing Codex units
(`06.01.01-holomorphic-function`, `06.01.06-riemann-mapping-theorem`,
and others — see §2). Paired downstream with FT 1.07 (Donaldson /
Forster / Miranda Riemann-surfaces); Ahlfors prepares the
plane-and-disc machinery the surfaces books then lift to global
geometry.

**Purpose:** lightweight P1-lite + P2 + P3-lite pass per orchestration
protocol. Punch-list of new units + deepenings to reach
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 threshold. **Peer audit
to** `forster-riemann-surfaces.md` and `donaldson-riemann-surfaces.md`
(the surfaces side of FT 1.07): Ahlfors owns the **classical-plane**
spine those plans assume present but Codex has barely shipped. The
Codex chapter `06.01-complex-analysis/` ships 6 units, 5 of which are
**v0.5 Strand C/D templated stubs** (only `06.01.01` carries genuine
prose). Topic-level coverage of Ahlfors's first half is shallow but
nominally present; **the entire Ahlfors back half — gamma function,
zeta function, Weierstrass factorization (only the corollary use in
Cousin II shipped), normal families / Montel, Schwarz-Christoffel,
Picard's theorems, harmonic-function theory, hyperbolic / Schwarz-Pick
geometry — is absent from Codex.**

The work is dominated by **(a) deepenings** of the five templated
06.01.x stubs (highest priority — they currently fail equivalence at
the prose-quality layer entirely) and **(b) new units** for the
distinctive Ahlfors back-half block (Chapters 5-8). New-unit volume is
larger than peer audits: ~12-15 NEW vs Forster's 7 and Donaldson's 4.

---

## §1 What Ahlfors's book is for

The canonical graduate-level introduction to one-complex-variable
analysis. Where Stein-Shakarchi anchors the real-analysis-flavoured
modern style, Conway the encyclopaedic measure-theoretic style, and
Rudin's *Real and Complex* the terse-axiomatic style, Ahlfors anchors
the **geometric / function-theoretic / hyperbolic-metric** tradition.
It is the book PhD students cite when they say "complex analysis"
without qualification — the originator-text for the modern presentation
of normal families, Schwarz-Pick on the disc, and Picard's theorems.

8 chapters, ~331 pages:

- **Ch. 1 Complex Numbers** (~25 pp). Algebra, polar form, roots of
  unity; **Riemann sphere $\mathbb{C}_\infty$ via stereographic
  projection**; spherical chordal metric.
- **Ch. 2 Complex Functions** (~50 pp). Topology, analyticity,
  Cauchy-Riemann; conformal maps; **elementary functions** ($e^z$,
  $\log z$, $z^\alpha$, trig); **branches**; **Möbius transformations**,
  cross-ratio, symmetry; upper half-plane ↔ disc.
- **Ch. 3 Analytic Functions as Mappings** (~60 pp). Elementary
  conformal mapping; **harmonic functions** (Laplacian, mean-value,
  **Poisson integral**, reflection); complex integration intro;
  index of a closed curve; **Cauchy's integral formula**.
- **Ch. 4 Complex Integration** (~70 pp; densest chapter). **General
  Cauchy's theorem (homological form)**; residue calculus + real-
  integral evaluation; **argument principle + Rouché**; **maximum
  modulus + Schwarz lemma + Schwarz-Pick**; **Phragmén-Lindelöf**;
  harmonic functions, Dirichlet on disc.
- **Ch. 5 Series and Product Developments** (~65 pp). Power /
  Taylor / Laurent series; **Mittag-Leffler partial fractions**;
  **infinite products**; **Weierstrass factorization theorem**;
  **gamma function $\Gamma(z)$**; **Riemann zeta $\zeta(s)$,
  analytic continuation, functional equation**; **normal families
  (Montel)**.
- **Ch. 6 Conformal Mapping, Dirichlet's Problem** (~35 pp).
  **Riemann mapping theorem (proof via normal families)**; boundary
  behaviour; **Schwarz-Christoffel formula**; **Dirichlet via
  Perron's method**; harmonic measure.
- **Ch. 7 Elliptic Functions** (~30 pp). Doubly-periodic functions;
  **Weierstrass $\wp$**, $(\wp')^2 = 4\wp^3 - g_2\wp - g_3$; theta
  functions; **modular function $\lambda$, modular group, $j$-
  invariant**.
- **Ch. 8 Global Analytic Functions** (~30 pp). Analytic continuation
  along curves; **monodromy theorem**; Riemann surface of an analytic
  function; algebraic functions; **Picard's little + great theorems**;
  Schottky, Bloch; uniformization closing arc.

**Distinctive Ahlfors choices** (the load-bearing list, Codex-relevance
flagged):

1. **Geometric throughout.** Conformality drives Ch. 2-3; the
   Schwarz-Pick hyperbolic metric on the disc is woven into Schwarz
   lemma so Picard, Schottky, Bloch, Riemann mapping all become
   hyperbolic-isometry / contraction arguments. **Codex: zero
   hyperbolic-metric content.**
2. **Riemann sphere from Chapter 1.** $\mathbb{C}_\infty = S^2$ in
   §1.4; chordal metric immediately. Möbius transformations are
   *chordal isometries* (up to rotation). **Codex: no Riemann-sphere
   unit.**
3. **Möbius transformations as a category.** $\mathrm{PSL}_2(\mathbb{C})
   \curvearrowright \mathbb{C}_\infty$, cross-ratio, classification
   (parabolic / elliptic / loxodromic / hyperbolic). Bridge to
   hyperbolic geometry. **Codex: absent.**
4. **Cauchy's theorem in homological form.** Cycles, winding
   numbers, Dixon proof. **Codex `06.01.02` is templated — no proof,
   no Dixon.**
5. **Argument principle + Rouché in one section** as residue
   corollaries on $f'/f$. **Codex: absent.**
6. **Schwarz lemma → Schwarz-Pick → hyperbolic geometry.**
   Foundational for Picard. **Codex: absent.**
7. **Phragmén-Lindelöf** for unbounded domains. **Codex: absent.**
8. **Harmonic functions + Dirichlet (Poisson / Perron).** Half of
   why complex analysis matters in PDE / fluid / EM applications.
   **Codex: zero harmonic content.**
9. **Weierstrass factorization on $\mathbb{C}$.** Codex's
   `06.09.05-cousin-ii` mentions the RS-corollary; the **plane
   theorem absent**.
10. **Gamma function $\Gamma(z)$ — full development.** Single
    most-cited example of analytic continuation. **Codex: absent.**
11. **Riemann zeta $\zeta(s)$**, analytic continuation, functional
    equation. **Codex: absent.**
12. **Normal families / Montel.** Used for Riemann mapping (Ch. 6)
    and Picard (Ch. 8). **Codex: absent.**
13. **Schwarz-Christoffel** for polygons. PDE / fluid / EM tool.
    **Codex: absent.**
14. **Picard little + great.** Capstone of one-complex-variable.
    **Codex: absent.**
15. **Schottky / Bloch.** Quantitative Picard. **Codex: absent.**
16. **Weierstrass $\wp$ + modular function $\lambda / j$.** Codex's
    `06.06.05-theta-function` is templated; **no $\wp$ unit, no
    modular-form unit**.
17. **Monodromy theorem** (Ch. 8 §1). **Codex `06.01.04` is templated
    and does not state monodromy.**
18. **~280 exercises**, heavy load-bearing volume. **Codex has the
    templated 7-block on each shipped 06.01.x — none solve a real
    Ahlfors exercise.**

Ahlfors does not cover (scope clarity): $H^p$ Hardy spaces beyond
Phragmén-Lindelöf, several-complex-variables Hartogs (FT 06.07
territory), automorphic forms beyond modular function (Farkas-Kra
territory), Riemann-Roch on compact surfaces (FT 1.07 — Donaldson /
Forster / Miranda).

---

## §2 Coverage table (Codex vs Ahlfors)

Existing Codex units relevant to Ahlfors, from
`find content -name "*.md" | sort`:

- **`06.01-complex-analysis/`** (6 units, 5 templated):
  `06.01.01-holomorphic-function` (only one with genuine prose),
  `06.01.02-cauchy-integral-formula` (templated),
  `06.01.03-residue-theorem` (templated),
  `06.01.04-analytic-continuation` (templated),
  `06.01.05-meromorphic-function` (templated),
  `06.01.06-riemann-mapping-theorem` (templated).
- **`06.02-coverings/`**: `06.02.02-branched-coverings`,
  `06.02.03-riemann-s-existence-theorem-for-algebraic-curves`.
- **`06.03-riemann-surfaces/`**: `06.03.01-riemann-surface`,
  `06.03.03-uniformization-theorem`.
- **`06.06-jacobians/`**: `06.06.01-holomorphic-one-form`,
  `06.06.05-theta-function` (templated).
- **`06.07-several-variables/`**: `06.07.01-holomorphic-several-variables`,
  `06.07.02-hartogs-phenomenon`.
- **`06.09-stein/`**: `06.09.05-cousin-ii-multiplicative` (touches
  Weierstrass factorisation as Cousin-II corollary).
- **`02.11-functional-analysis/`** (background only): `02.11.05-compact-operators`,
  `02.11.08-hilbert-space`.

✓ = covered at Ahlfors-equivalent depth, △ = topic present but Codex
unit shallower / templated, ✗ = not covered.

### Chapter 1 — Complex Numbers

| Ahlfors topic | Codex unit | Status | Note |
|---|---|---|---|
| §1.1-1.2 Complex algebra, polar form, roots of unity | — | ✗ | **Gap.** Belongs in `00-precalc` or new `06.01.00`. |
| §1.3 The complex plane as a metric space | partial in `02.01.05-metric-space` | △ | Generic metric-space coverage; complex specifics absent. |
| §1.4 **Riemann sphere $\mathbb{C}_\infty$ via stereographic projection** | — | ✗ | **Gap (P1).** Foundational; cited by every Möbius / global discussion. |
| §1.4 Spherical chordal metric | — | ✗ | **Gap.** Same unit. |

### Chapter 2 — Complex Functions

| Ahlfors topic | Codex unit | Status | Note |
|---|---|---|---|
| §2.1 Topology of $\mathbb{C}$, limits, sequences | partial in `02.01.05` | △ | Generic. |
| §2.1 Analytic functions, Cauchy-Riemann | `06.01.01-holomorphic-function` | △ | Definition shipped at depth; CR equations not unpacked at Ahlfors's level (real-and-imaginary-part decomposition; harmonic conjugate). |
| §2.2 Conformal mappings | mention in `06.01.01` | △ | Mention only; no dedicated unit. |
| §2.3 **Elementary functions** ($e^z$, $\log z$, $\sin z$, $\cos z$, branches) | — | ✗ | **Gap (P1).** Foundational; sets up branches discussion needed for monodromy / analytic continuation. |
| §2.3 Branches of $\log$ and $z^\alpha$ | — | ✗ | **Gap (P1).** Forward-declared by `06.01.04-analytic-continuation` but never built. |
| §2.4 **Möbius (linear-fractional) transformations**; cross-ratio | — | ✗ | **Gap (P1).** Hyperbolic geometry foundation. |
| §2.4 Symmetry / inversion on the sphere; classification (parabolic / elliptic / loxodromic) | — | ✗ | **Gap (P1).** Same unit. |
| §2.4 Upper half-plane ↔ disc model | — | ✗ | **Gap.** Half of Schwarz-Pick. |

### Chapter 3 — Analytic Functions as Mappings

| Ahlfors topic | Codex unit | Status | Note |
|---|---|---|---|
| §3.1 Elementary conformal mapping (Möbius + elementary functions in detail) | — | ✗ | Cross-references Ch 2 + new Möbius unit; depth gap. |
| §3.2 **Harmonic functions; Laplacian; mean-value property** | — | ✗ | **Gap (P1 — Ahlfors-distinctive).** Codex has zero harmonic-function content. |
| §3.2 **Poisson integral on the disc** | — | ✗ | **Gap (P1).** Same unit or sibling. |
| §3.2 **Schwarz reflection principle** | — | ✗ | **Gap (P2).** |
| §3.3 Line integrals, primitives, Cauchy's theorem (rectangle / disc) | partial in `06.01.02` | △ | Templated; no proof at Ahlfors level (Goursat triangle; primitive existence on simply-connected domains). |
| §3.4 Index of a closed curve / winding number | — | ✗ | **Gap (P1).** Cited by `06.01.03-residue-theorem` but not built. |
| §3.4 Cauchy's integral formula | `06.01.02-cauchy-integral-formula` (templated) | △ | **Templated stub — DEEPEN required.** |

### Chapter 4 — Complex Integration

| Ahlfors topic | Codex unit | Status | Note |
|---|---|---|---|
| §4.1 **General Cauchy's theorem (homological version, Dixon proof)** | partial in `06.01.02` | △ | **Templated; DEEPEN essential.** Ahlfors's homological framing absent. |
| §4.1 Cycles, winding numbers, homology in domains | — | ✗ | **Gap (P1).** |
| §4.2 Cauchy integral formula for cycles | — | ✗ | **Gap.** Same unit as homological Cauchy. |
| §4.3 **Residue calculus** + evaluation of real integrals | `06.01.03-residue-theorem` (templated) | △ | **Templated stub — DEEPEN essential.** |
| §4.3 **Argument principle**; Rouché's theorem | — | ✗ | **Gap (P1).** |
| §4.4 **Maximum modulus principle**; Schwarz lemma | partial / mention | ✗ | **Gap (P1).** Mentioned in `06.01.01` Master only. |
| §4.4 **Schwarz-Pick / hyperbolic metric on the disc** | — | ✗ | **Gap (P1 — Ahlfors-distinctive).** |
| §4.5 **Phragmén-Lindelöf principle** | — | ✗ | **Gap (P2).** |
| §4.6 **Harmonic functions (Laplacian, mean value, Poisson)** | — | ✗ | **Gap (P1).** |
| §4.7 Schwarz reflection principle | — | ✗ | **Gap (P2).** Often grouped with §3.2. |

### Chapter 5 — Series and Product Developments

| Ahlfors topic | Codex unit | Status | Note |
|---|---|---|---|
| §5.1 Power series, radius of convergence | — | ✗ | **Gap (P2).** Foundational; might fit under `00-precalc/02.07-series` or new unit. |
| §5.1 **Taylor and Laurent series** | partial in `06.01.05` Master | △ | Templated mention; expansion theorem not stated at depth. |
| §5.2 **Partial-fraction (Mittag-Leffler) on $\mathbb{C}$** | partial via `06.09.04-cousin-i` (RS case) | △ | Plane case (Ahlfors's level) absent; only RS generalisation shipped. |
| §5.2 **Infinite products** | — | ✗ | **Gap (P1).** |
| §5.2 **Weierstrass factorization theorem (entire functions)** | partial via `06.09.05-cousin-ii` | △ | Cousin-II generalisation shipped; classical plane statement absent. |
| §5.2 **Gamma function $\Gamma(z)$ — full development** | — | ✗ | **Gap (P1 — Ahlfors-distinctive).** |
| §5.4 **Riemann zeta function $\zeta(s)$, analytic continuation, functional equation** | — | ✗ | **Gap (P1 — Ahlfors-distinctive).** |
| §5.5 **Normal families; Montel's theorem** | — | ✗ | **Gap (P1).** Used in Ch 6 + Ch 8 Picard. |

### Chapter 6 — Conformal Mapping, Dirichlet's Problem

| Ahlfors topic | Codex unit | Status | Note |
|---|---|---|---|
| §6.1 **Riemann mapping theorem (proof via normal families)** | `06.01.06-riemann-mapping-theorem` (templated) | △ | **Templated stub — DEEPEN essential.** Currently no proof, no statement at Ahlfors depth. |
| §6.1 Boundary behaviour (Carathéodory) | — | ✗ | **Gap (P3).** |
| §6.2 **Schwarz-Christoffel formula** | — | ✗ | **Gap (P1).** |
| §6.4 **Dirichlet problem on general domain (Perron's method)** | — | ✗ | **Gap (P2).** Depends on harmonic-function unit. |
| §6.5 Harmonic measure | — | ✗ | **Gap (P3).** |

### Chapter 7 — Elliptic Functions

| Ahlfors topic | Codex unit | Status | Note |
|---|---|---|---|
| §7.1 Doubly-periodic functions; period lattice | partial via `06.06.02-period-matrix` | △ | RS-generalised; classical $\mathbb{C}/\Lambda$ unit absent. |
| §7.2 **Weierstrass $\wp$ function**; differential equation $(\wp')^2 = 4\wp^3 - g_2 \wp - g_3$ | — | ✗ | **Gap (P1).** |
| §7.3 Theta functions $\vartheta_i$ on $\mathbb{H}$ | partial via `06.06.05-theta-function` (templated) | △ | Templated; no $\vartheta_i$ split, no Jacobi product. |
| §7.4 **Modular function $\lambda$, modular group, $j$-invariant** | — | ✗ | **Gap (P2).** |
| §7.4 Fundamental domain of $\mathrm{PSL}_2(\mathbb{Z})$ | — | ✗ | **Gap (P2).** Same unit. |

### Chapter 8 — Global Analytic Functions

| Ahlfors topic | Codex unit | Status | Note |
|---|---|---|---|
| §8.1 Analytic continuation along curves | partial in `06.01.04` (templated) | △ | **Templated; DEEPEN essential.** Curve-continuation explicit; monodromy not stated. |
| §8.1 **Monodromy theorem** | — | ✗ | **Gap (P1).** Belongs in `06.01.04` deepening. |
| §8.2 Riemann surface of an analytic function (sheet construction) | partial via `06.03.01` | △ | RS as object shipped; sheet / fibred construction from analytic function absent. |
| §8.2 Algebraic functions $P(z, w) = 0$ | `06.02.03-riemann-s-existence-theorem-for-algebraic-curves` | ✓ | Forster-batch shipped. |
| §8.3 **Picard's little theorem** (entire ⇒ omits ≤ 1 value) | — | ✗ | **Gap (P1 — Ahlfors-distinctive).** |
| §8.3 **Picard's great theorem** (essential singularity) | — | ✗ | **Gap (P1).** |
| §8.3 **Schottky's theorem** | — | ✗ | **Gap (P3).** |
| §8.3 **Bloch's theorem** | — | ✗ | **Gap (P3).** |

### Aggregate coverage estimate (vs Ahlfors)

- **Theorem layer:** ~30% topic, ~12% Ahlfors-proof-depth (most
  shipped units are templated). After P1 deepenings + P1 new units:
  topic ~85%, proof-depth ~70%. After P1+P2: ~93% / ~85%.
- **Exercise layer:** ~3% (Ahlfors's ~280 exercises vs templated
  7-block on 5 of 6 shipped units, none of which solve real Ahlfors
  exercises). Dedicated exercise pack `06.01.E1` / `06.01.E2`
  required at P3.
- **Worked-example layer:** ~10%. The contour-integration
  worked examples that anchor Chapter 4 are absent; a residue-pack
  / contour-pack unit fills this at P2.
- **Notation layer:** ~50% aligned. Ahlfors uses $\Omega$ (region),
  $\mathbb{C}_\infty$ (Riemann sphere), $\wp(z; \omega_1, \omega_2)$,
  $\Gamma(z) / B(p, q)$, $\zeta(s)$, $\lambda(\tau) / j(\tau)$. Codex
  notation drift mild; `notation/ahlfors.md` low-priority.
- **Sequencing layer:** ~30%. Ahlfors's chapter chain (Ch 1
  sphere → Ch 2 elementary functions / Möbius → Ch 3 conformal +
  harmonic → Ch 4 integration / Schwarz → Ch 5 normal families /
  $\Gamma$ / $\zeta$ → Ch 6 Riemann mapping / Schwarz-Christoffel /
  Dirichlet → Ch 7 $\wp$ / modular → Ch 8 Picard) currently has
  ~3 of 8 nodes shipped. Most prerequisites missing.
- **Intuition layer:** ~25%. Ahlfors's geometric-Schwarz-Pick framing
  absent; templated stubs offer no intuition.
- **Application layer:** ~15%. The standard contour-integration tour
  (∫ from $-\infty$ to $\infty$ of rational, trig, $e^{ix}$ ×
  rational) is what makes complex analysis applied; Codex has zero
  coverage.

---

## §3 Gap punch-list (P3-lite — units to write or deepen, priority-ordered)

The shape of this audit differs from peer surfaces audits: Ahlfors is
**the prerequisite**, not the surface. Codex's `06.01-complex-analysis/`
chapter currently fails equivalence on two axes — (a) five of six
shipped units are **templated v0.5 Strand C/D stubs** without genuine
prose (DEEPEN required), and (b) Ahlfors's **back-half block** (Ch 5-8)
is entirely absent (NEW required). Mid-volume new-unit count
(~12-15 NEW units) and heavy DEEPEN load (~5 templated stubs replaced
+ 3 cross-chapter Master sections enriched).

### Priority 1 — Templated-stub deepenings + Ahlfors-distinctive headlines

The five templated 06.01.x stubs currently fail equivalence at the
prose-quality layer entirely. These rewrites are required before any
new unit can claim Ahlfors as a tier_anchor honestly. The "Ahlfors-
distinctive" new units are the back-half headlines.

1. **`06.01.02` Cauchy integral formula.** [DEEPEN] Replace templated
   stub with Ahlfors §4.1-4.2: rectangle / disc Cauchy (Goursat
   triangle proof); homological Cauchy on cycles via Dixon; Cauchy
   integral formula on cycles; Cauchy estimates → Liouville → FTA.
   ~2000 words. Originator: Cauchy 1825 *Mémoire sur les intégrales
   définies prises entre des limites imaginaires*; Goursat 1900;
   Dixon 1971 (Proc. AMS 29).

2. **`06.01.03` Residue theorem.** [DEEPEN] Ahlfors §4.3: residue at
   pole / infinity; residue theorem on cycles; **canonical contour-
   integration tour** (∫ rational over $\mathbb{R}$; rational × trig;
   rational × $e^{i\alpha x}$; indented contours; keyhole contours);
   **argument principle** $\oint f'/f = N - P$; **Rouché**. ~2400
   words; largest deepening. Originator: Cauchy 1826; Rouché 1862.

3. **`06.01.04` Analytic continuation.** [DEEPEN] Ahlfors §8.1:
   continuation along a curve; between overlapping discs; **monodromy
   theorem** on simply-connected domain; examples $\sqrt{z}$, $\log z$.
   ~1700 words. Originator: Weierstrass c. 1842 lectures; Riemann 1857.

4. **`06.01.05` Meromorphic function.** [DEEPEN] Ahlfors §5.1-5.2:
   poles / zeros; isolated-singularity classification (removable /
   pole / essential); **Casorati-Weierstrass**; **Laurent expansion**
   with proof and uniqueness; meromorphic = local ratio of holomorphic.
   ~1700 words. Originator: Weierstrass; Casorati 1868.

5. **`06.01.06` Riemann mapping theorem.** [DEEPEN] Ahlfors §6.1:
   statement; **proof via normal families** (extremal $\sup |f'(z_0)|$
   solved by Montel + Hurwitz); uniqueness up to disc Möbius; explicit
   maps (half-plane, strip, slit-disc). ~2000 words. Depends on item 13
   (Montel). Originator: Riemann 1851 statement; Koebe 1907, Carathéodory
   1912 proof.

6. **`06.01.07` Riemann sphere $\mathbb{C}_\infty$.** [NEW] Ahlfors
   §1.4. Stereographic projection $S^2 \setminus \{N\} \cong \mathbb{C}$;
   $\mathbb{C}_\infty$ as compact genus-0 Riemann surface; **chordal
   metric** $d(z, w) = 2|z - w| / \sqrt{(1 + |z|^2)(1 + |w|^2)}$;
   meromorphic functions ↔ holomorphic maps to $\mathbb{C}_\infty$.
   ~1500 words. Originator: Riemann 1851. Foundational for every
   Möbius / global discussion.

7. **`06.01.08` Möbius (linear-fractional) transformations.** [NEW]
   Ahlfors §2.4. $\mathrm{PSL}_2(\mathbb{C}) \curvearrowright
   \mathbb{C}_\infty$; classification by trace (parabolic / elliptic /
   hyperbolic / loxodromic); **cross-ratio** as Möbius invariant;
   circle-line preservation; symmetry / inversion. ~1800 words.
   Worked: $\mathbb{H} \to \mathbb{D}$ map; three-points-to-$\{0,1,\infty\}$.
   Originator: Möbius 1855; Klein 1872. Foundational for Schwarz-Pick,
   Schwarz-Christoffel, modular group.

8. **`06.01.09` Elementary complex functions: $e^z, \log z, z^\alpha$,
   trig.** [NEW] Ahlfors §2.3. Power-series $e^z$; periodicity $2\pi i$;
   **branches of $\log z$** on simply-connected $\Omega \subset
   \mathbb{C}^*$; principal branch; $z^\alpha$; $\sin z, \cos z$;
   hyperbolic functions; inverse trig as branches. ~1700 words.

9. **`06.01.10` Cauchy-Riemann equations + harmonic conjugate.** [NEW]
   Ahlfors §2.1, §3.2. CR system; equivalent to $\partial f/\partial
   \bar z = 0$; $\Delta u = \Delta v = 0$; harmonic-conjugate existence
   on simply-connected $\Omega$; Looman-Menchoff converse sketch.
   ~1500 words.

10. **`06.01.11` Harmonic functions on the plane.** [NEW] Ahlfors
    §3.2, §4.6. Laplacian; mean-value property; **Poisson integral**
    on the disc; harmonic maximum principle; harmonic Liouville.
    ~1800 words. Originator: Laplace 1782; Poisson 1820. **Foundation
    for Schwarz reflection, Picard, Dirichlet.**

11. **`06.01.12` Maximum modulus + Schwarz lemma.** [NEW] Ahlfors
    §4.4. Maximum modulus on bounded $\Omega$; **Schwarz lemma**
    ($f: \mathbb{D} \to \mathbb{D}, f(0) = 0$ ⇒ $|f| \leq |z|$;
    equality ⇒ rotation); **Schwarz-Pick** ($f: \mathbb{D} \to
    \mathbb{D}$ contracts hyperbolic metric). ~1800 words. Originator:
    Schwarz 1869; Pick 1916. **Foundation for Picard.**

12. **`06.01.13` Argument principle and Rouché.** [NEW] Ahlfors §4.3.
    $\frac{1}{2\pi i}\oint f'/f = N - P$; **Rouché**: $|f - g| < |g|$
    on $\partial\Omega$ ⇒ equal zero counts. Worked: zero count of
    $z^7 + 4z^3 + 11$ in $|z| < 1$; Rouché-FTA. ~1300 words.

13. **`06.01.14` Normal families and Montel's theorem.** [NEW]
    Ahlfors §5.5. Locally uniformly bounded family ⇒ **normal**;
    Vitali; Hurwitz (limit of nonvanishing holomorphic is nonvanishing
    or $\equiv 0$). ~1700 words. Cited by item 5 deepening + items 19,
    20. Originator: Montel 1907 (Ann. ENS); Vitali 1903.

14. **`06.01.15` Gamma function $\Gamma(z)$.** [NEW] Ahlfors §5.2.
    Euler integral on $\Re z > 0$; functional equation $\Gamma(z+1) =
    z\Gamma(z)$ continues to $\mathbb{C} \setminus \{0, -1, -2, \ldots\}$;
    **Weierstrass product** $1/\Gamma(z) = z e^{\gamma z} \prod (1 +
    z/n) e^{-z/n}$; **reflection** $\Gamma(z)\Gamma(1-z) = \pi/\sin\pi z$;
    **Stirling**. ~2000 words. Originator: Euler 1729 (Goldbach letter);
    Gauss 1812; Weierstrass 1856. **Single most-cited example of
    analytic continuation.**

15. **`06.01.16` Riemann zeta function $\zeta(s)$.** [NEW] Ahlfors §5.4.
    Dirichlet series on $\Re s > 1$; **Euler product** over primes;
    analytic continuation to $\mathbb{C} \setminus \{1\}$ via integral
    representation $\zeta(s)\Gamma(s) = \int_0^\infty t^{s-1}/(e^t - 1)
    dt$; **functional equation** $\xi(s) = \xi(1-s)$; pointer to RH.
    ~2200 words. Originator: Euler 1737; Riemann 1859 *Über die Anzahl
    der Primzahlen unter einer gegebenen Grösse*. **Originator-prose
    mandatory.**

16. **`06.01.17` Weierstrass factorization theorem.** [NEW] Ahlfors §5.2.
    Entire $f$ with zeros $\{a_n\}$ factors $f = z^m e^{g(z)} \prod
    E_{p_n}(z/a_n)$ via **Weierstrass primary factors**; convergence
    via $\sum 1/|a_n|^{p+1} < \infty$. ~1700 words. Originator:
    Weierstrass 1876. (Plane prequel to `06.09.05` Cousin II.)

17. **`06.01.18` Mittag-Leffler theorem on $\mathbb{C}$.** [NEW]
    Ahlfors §5.2. Prescribed principal parts $P_n$ at $a_n \to \infty$
    ⇒ meromorphic realisation; convergence via polynomial subtraction.
    ~1300 words. Originator: Mittag-Leffler 1884 (Acta Math. 4).
    (Plane prequel to `06.09.06`-RS-case.)

18. **`06.01.19` Schwarz-Christoffel formula.** [NEW] Ahlfors §6.2.
    $\mathbb{H} \to$ polygon: $f'(z) = K \prod_k (z - x_k)^{\alpha_k - 1}$;
    rectangle, triangle, regular-polygon worked examples. ~1700 words.
    Originator: Schwarz 1869; Christoffel 1867. PDE / fluid-mechanics
    tool.

19. **`06.01.20` Picard's little theorem.** [NEW] Ahlfors §8.3. Non-
    constant entire ⇒ omits at most one value. Proof via Montel +
    Schwarz-Pick on the modular $\lambda$. ~1600 words. Originator:
    Picard 1879 (CRAS 88). Depends on items 11, 13, 26.

20. **`06.01.21` Picard's great theorem.** [NEW] Ahlfors §8.3. Essential
    singularity ⇒ image takes every value (≤ 1 exception) infinitely
    often. Proof via Montel of $\{f((z - z_0)/r)\}$ + little Picard.
    ~1500 words. Originator: Picard 1880. Depends on items 13, 19.
    **Capstone of one-complex-variable.**

### Priority 2 — Ahlfors-distinctive depth (Ch 4-7)

Topics that are not strictly equivalence-blockers but close prominent
Ahlfors gaps and deliver the bulk of the chapter's promised pedagogy.

21. **`06.01.22` Phragmén-Lindelöf principle.** [NEW] Ahlfors §4.5.
    Extension of maximum modulus to unbounded domains via auxiliary
    bounded subharmonic comparison. Worked: half-plane / sector /
    strip versions. ~1500 words. Originator: Phragmén-Lindelöf 1908
    (Acta Math. 31).

22. **`06.01.23` Schwarz reflection principle.** [NEW] Ahlfors §3.2,
    §4.7. Holomorphic on upper half-plane, real-valued on $\mathbb{R}$
    boundary segment ⇒ extends across to lower half-plane via
    $f(\bar z) = \overline{f(z)}$. Generalised reflection across
    arcs / circles. ~1300 words. Originator: Schwarz 1870.

23. **`06.01.24` Dirichlet problem on the disc + Perron's method.**
    [NEW] Ahlfors §3.2, §6.4. Existence of harmonic function with
    prescribed boundary values: disc case via **Poisson integral**
    (item 11); general domain via **Perron's method** (sup over
    subharmonic subsolutions). Boundary regularity (barriers).
    ~2000 words. Originator: Dirichlet (1840s lectures); Perron 1923
    (Math. Z. 18). **Half of why complex analysis matters in PDE.**

24. **`06.01.25` Weierstrass $\wp$ function.** [NEW] Ahlfors §7.2.
    Period lattice $\Lambda = \mathbb{Z}\omega_1 + \mathbb{Z}\omega_2$;
    $\wp(z) = 1/z^2 + \sum_{\omega \neq 0} (1/(z - \omega)^2 - 1/\omega^2)$;
    differential equation $(\wp')^2 = 4\wp^3 - g_2 \wp - g_3$;
    $\mathbb{C}/\Lambda$ as elliptic curve $y^2 = 4x^3 - g_2 x - g_3$;
    field of elliptic functions $= \mathbb{C}(\wp, \wp')$. ~2000 words.
    Originator: Weierstrass 1862-63 lectures (published Eisenstein 1840s
    earlier with $\wp$-like series). **Classical-plane analogue of
    `06.06.05-theta-function`.**

25. **`06.01.26` Modular function $\lambda$ and $j$-invariant.** [NEW]
    Ahlfors §7.4. Modular group $\mathrm{PSL}_2(\mathbb{Z})$ on
    $\mathbb{H}$; fundamental domain; **$\lambda(\tau)$** as modular
    function for $\Gamma(2)$ (omits 0, 1, $\infty$); **$j$-invariant**
    $j(\tau)$ for $\mathrm{PSL}_2(\mathbb{Z})$; isomorphism
    $\mathbb{H}/\Gamma(2) \cong \mathbb{C} \setminus \{0, 1\}$ used
    in classical Picard proof. ~1700 words. Originator: Klein 1879
    (j-invariant); Picard 1879 (use in Picard's theorem).

26. **`06.01.27` Power series and Laurent series (proofs).** [NEW]
    Ahlfors §5.1. Radius of convergence $1/\limsup |a_n|^{1/n}$;
    holomorphic ⇔ locally power-series-expandable; **Laurent
    expansion theorem** on annulus with proof; uniqueness. ~1500
    words. (Could be folded into `06.01.05` deepening if scope
    pressure; standalone preferred for citation depth.)

27. **`06.01.28` Index / winding number of a closed curve.** [NEW]
    Ahlfors §3.4. $n(\gamma, z_0) = \frac{1}{2\pi i} \oint_\gamma
    dw/(w - z_0)$; integer-valued; locally constant; computation
    examples; relation to fundamental group of $\mathbb{C} \setminus
    \{z_0\}$. ~1100 words. **Foundation for homological Cauchy.**
    Could be folded into `06.01.02` deepening; standalone preferred.

### Priority 3 — Composite / cross-chapter deepenings + exercise pack

28. **Deepen `06.01.01-holomorphic-function`.** [ENRICH] Already at
    depth; add Ahlfors §1-2 explicit references for Cauchy-Riemann
    equations, harmonic-conjugate corollary, branches discussion
    forward-pointer to item 8.

29. **`06.01.E1` Contour integration exercise pack.** [NEW] ~30
    Ahlfors-style contour integrals: rational over $\mathbb{R}$,
    rational × trig, rational × $e^{i\alpha x}$, indented contours,
    keyhole contours, mixed-branch integrals. ~2500 words. Closes
    the worked-example layer for Ch 4.

30. **`06.01.E2` Ahlfors exercise pack (selected).** [NEW] ~25
    Ahlfors exercises (Ch 1-8 spread) with full solutions. ~3000
    words. Closes the exercise-layer to Ahlfors.

31. **Deepen `06.06.05-theta-function`.** [ENRICH/DEEPEN composite]
    Already on Forster/Donaldson plan as composite item; add Ahlfors
    §7.3 plane-case framing (Jacobi $\vartheta_i$, the four classical
    theta functions, product representations).

32. **Deepen `06.03.03-uniformization-theorem`.** [ENRICH] Add Ahlfors
    §8 closing-arc reference; Ahlfors's framing of uniformization
    as the Picard / monodromy capstone.

33. **`notation/ahlfors.md` notation crosswalk.** [NEW — optional]
    $\Omega$ (region), $\mathbb{C}_\infty$ (Riemann sphere),
    $\wp(z; \omega_1, \omega_2)$, $\Gamma$, $\zeta$, $\lambda$,
    $j$. ~400 words. Defer unless `06.06`-side $X / M / \Sigma$
    cleanup undertaken.

### Priority 4 — Pointers / surveys, optional

34. **`06.01.29` Schottky's and Bloch's theorems.** [NEW — optional]
    Ahlfors §8.3. Quantitative Picard refinements. ~1300 words.
    Cite if items 19, 20 don't already absorb. P4 unless gauge-theory
    / value-distribution downstream demands.

35. **`06.01.30` Riemann-Hurwitz for plane meromorphic / sphere maps.**
    [NEW — optional pointer] Cross-link to `06.05.03-riemann-hurwitz-formula`
    via the sphere-as-genus-0 case. P4.

---

## §4 Implementation sketch (P3 → P4)

**Minimum Ahlfors-equivalence batch** = priority 1 (items 1-20):
**5 deepenings + 15 new units, all Ahlfors-only.** Production estimate:

- ~1.5 h per deepening of templated stub (research + replace prose +
  validate at 27/27).
- ~3 h per typical new unit; ~4 h for items 14, 15 (gamma, zeta —
  load-bearing originator-prose units), item 5 deepening (Riemann
  mapping with full Montel proof), item 2 deepening (residue calculus
  + argument principle + Rouché).
- Priority 1 totals: 5 deepenings × 1.5 h + 11 typical new × 3 h +
  4 large × 4 h = ~56 h.
- Priority 1+2 totals: 56 h + 7 P2 units × 3 h = ~77 h.
- Priority 1+2+3 totals: 77 h + 3 P3 packs × 4 h + 2 enrichments ×
  1 h = ~91 h.

At 4-6 parallel production agents, priority-1 fits in a 3-4 day
window. **This is the largest single-chapter audit yet — comparable
to Hartshorne's depth gap, not Cannas's.**

**Batch structure.**

- **Batch A (template-replace, items 1, 2, 3, 4, 5, ~10 h):** the
  five DEEPEN items. Highest priority: cleans the existing chapter
  surface so subsequent units can cite shipped prose without
  forward-templated-stub references. Produce together; load-bearing
  for everything downstream.
- **Batch B (Ahlfors front-half foundations, items 6, 7, 8, 9, 10,
  ~13 h):** Riemann sphere → Möbius → elementary functions →
  Cauchy-Riemann → harmonic functions. Depends on Batch A for
  `06.01.01` enrichment references. Foundational for Batch C-D.
- **Batch C (Ahlfors integration headlines, items 11, 12, 13, 17,
  ~9 h):** maximum modulus / Schwarz / Schwarz-Pick / argument
  principle / Rouché / Mittag-Leffler. Depends on Batch B.
- **Batch D (back-half headlines: gamma, zeta, Weierstrass factorization,
  Montel, Riemann mapping retake, items 14, 15, 16, 18, ~14 h):**
  Ahlfors-distinctive Ch 5 block + Schwarz-Christoffel. Item 5
  deepening cites item 18 (Montel) — produce in same batch with
  forward-citation discipline.
- **Batch E (Picard capstone, items 19, 20, ~5 h):** depends on
  Batches B-D. Closing arc.
- **Batch F (P2 polish + exercise packs, ~25 h):** items 21-30.
  Optional / phased after Batch A-E.

**Originator-prose targets** (priority-1 Master sections cite originator
+ Ahlfors). Most originators listed inline above; the load-bearing
**originator-voice-mandatory** units are: item 6 (Riemann 1851); item 14
(Euler 1729 Goldbach letter / Gauss 1812 / Weierstrass 1856); item 15
(Euler 1737 / Riemann 1859 *Über die Anzahl der Primzahlen unter einer
gegebenen Grösse*); item 19 (Picard 1879, CRAS 88, 1024-1027). Other
items cite standard primary sources (Cauchy 1825/1826, Schwarz 1869,
Pick 1916, Möbius 1855, Klein 1872, Picard 1880, Montel 1907, Mittag-
Leffler 1884, Weierstrass 1876, Christoffel 1867, Goursat 1900, Dixon
1971, Casorati 1868, Koebe 1907, Carathéodory 1912, Laplace 1782,
Poisson 1820, Vitali 1903).

**Notation crosswalk.** Mostly aligned with shipped 06.01.x. Defer
`notation/ahlfors.md` (item 33) unless chapter-wide pass undertaken.

**DAG edges to add** (priority-1 + 2):

- `06.01.07` ← `06.01.01`
- `06.01.08` ← {`06.01.07`, `06.01.01`}
- `06.01.09`, `06.01.10` ← `06.01.01`
- `06.01.11` ← {`06.01.10`, `06.01.02`}
- `06.01.12` ← {`06.01.02`, `06.01.11`}
- `06.01.13` ← `06.01.03`
- `06.01.14` ← {`06.01.01`, `06.01.02`, `02.01.05`}; →
  `06.01.06`-deepened, items 19, 20
- `06.01.15`, `06.01.16`, `06.01.17` ← `06.01.05`; `06.01.16` →
  `06.09.05`; `06.01.17` → `06.09.04`
- `06.01.18` ← {`06.01.06`, `06.01.08`}
- `06.01.19` ← {`06.01.12`, `06.01.14`, `06.01.26`}
- `06.01.20` ← {`06.01.14`, `06.01.19`}
- `06.01.22` ← `06.01.12`; `06.01.23` ← {`06.01.11`, `06.01.10`};
  `06.01.24` ← `06.01.11`
- `06.01.25` ← {`06.01.05`, `06.01.16`}; lateral to `06.06.05`
- `06.01.26` ← {`06.01.08`, `06.01.25`}

**Composite Ahlfors + Donaldson + Forster batch.** Item 16
(Weierstrass factorization on $\mathbb{C}$) and item 17 (Mittag-Leffler
on $\mathbb{C}$) are the **plane prequels** to `06.09.05-cousin-ii`
and `06.09.06`-Mittag-Leffler-on-RS (already shipped from the Forster
batch). Producing items 16, 17 retroactively strengthens the Forster
chain. Item 5 deepening (Riemann mapping with Montel proof) is the
plane prequel to the Donaldson uniformization deepening; co-cite.

---

## §5 What this plan does NOT cover

- Line-number-level inventory of theorems / exercises across all 8
  chapters. Defer unless priority-1+2 expands.
- Ahlfors's ~280 exercises vs. templated 7-block. Items 29-30 close
  ~50; remainder deferred to a v0.7+ comprehensive complex-analysis
  exercise pack.
- **Donaldson-distinctive** RS material (Hodge on RS, RS-PDE,
  Gauss-Manin / VHS, Schottky on RS). Donaldson plan owns.
- **Forster-distinctive** sheaf-theoretic RS material (Stein 1-d,
  Cousin I/II on RS, Behnke-Stein, Schwartz finiteness). Forster
  owns; plane prequels (items 16, 17) owned here.
- **Several-complex-variables** Hartogs / Stein (FT 06.07 territory;
  shipped).
- **Number-theoretic** $\zeta$ beyond the functional equation (RH,
  PNT, $L$-functions). Item 15 stops at Ahlfors Ch 5; Manin /
  Apostol-NT territory deferred.
- **Modular-form** machinery beyond $\lambda, j$ (higher weight,
  Eisenstein, Hecke). Diamond-Shurman / Serre *Cours d'arithmétique*
  territory.
- **$H^p$ Hardy spaces, BMO, Bergman, Beurling.** Garnett / Rudin RAC
  territory.
- **Nevanlinna value-distribution theory.** Quantitative defect /
  characteristic functions deferred.
- **Quasiconformal maps, Beltrami, Teichmüller.** Ahlfors's *other*
  book (*Lectures on Quasiconformal Mappings*); out of scope.
- Worked-example densification beyond items 29-30; v0.7+ pass.
- Notation crosswalk (item 33) deferred unless chapter-wide pass.

---

## §6 Acceptance criteria for FT equivalence (Ahlfors)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, the book
is at equivalence-coverage when:

- ≥95% of Ahlfors's named theorems map to Codex units **at
  Ahlfors-equivalent proof depth** (currently ~12% — five of six
  shipped units are templated; after Batch A 5 deepenings, ~35%;
  after priority-1 (Batches A-E), ~85%; after priority-1+2,
  ~93%; after priority-1+2+3, ~96%).
- ≥80% of Ahlfors's exercises have a Codex equivalent (currently
  ~3% — the templated 7-block on five of six units; closing this
  requires items 29-30 plus the future v0.7 comprehensive
  complex-analysis exercise pack).
- ≥90% of Ahlfors's worked examples reproduced in some Codex unit
  (currently ~10% — the contour-integration tour and the sphere /
  Möbius worked maps absent; priority-1 deepenings + items 29-30
  bring this to ~90%).
- Notation alignment recorded inline in priority-1 deepenings + new
  Master sections; optional `notation/ahlfors.md` (item 33)
  deferred.
- DAG `prerequisites` arrows for every Ahlfors chapter dependency
  (Ch 1 sphere → Ch 2 Möbius → Ch 3 conformal + harmonic → Ch 4
  integration / Schwarz → Ch 5 normal families / $\Gamma$ / $\zeta$
  → Ch 6 Riemann mapping / Schwarz-Christoffel / Dirichlet → Ch 7
  $\wp$ / modular → Ch 8 monodromy / Picard). The Schwarz → normal
  families → Picard chain in particular must be unbroken after
  priority-1.
- Pass-W weaving lateral connections: items 16-17 ↔ `06.09.05` +
  `06.09.06` (plane / RS Mittag-Leffler / Weierstrass parallels);
  item 25 ↔ `06.06.05` ($\wp$ / theta plane analogue); item 5 ↔
  `06.03.03` (Riemann mapping → uniformization); item 26 ↔
  `06.06.05` (modular function / theta).

The 5 P1 deepenings close the templated-stub gap (the chapter's
largest quality embarrassment). The 15 P1 new units close the
Ahlfors-distinctive front-half (sphere, Möbius, elementary
functions, Cauchy-Riemann, harmonic, Schwarz, argument principle,
normal families) and back-half (gamma, zeta, Weierstrass,
Mittag-Leffler, Schwarz-Christoffel, Picard) gaps. P2 (items 21-27)
closes Phragmén-Lindelöf / Schwarz reflection / Dirichlet-Perron /
$\wp$ / modular function depth — Ahlfors-distinctive, not strict
equivalence-blockers. P3 (28-33) is the exercise pack + cross-
chapter enrichments. P4 (34-35) optional pointers.

**Composite scheduling.** Run Batch A first (~10 h) — required so
downstream Codex citations point to shipped prose. Items 16-17
retroactively strengthen Forster's `06.09.04-05` (plane prequels).
Item 5 deepening feeds Donaldson's `06.03.03` uniformization
deepening — composite-batch with Donaldson Phase 1.

**Honest scope.** Largest single-chapter audit yet — 15 NEW + 5
DEEPEN priority-1, plus 7 NEW + 4 ENRICH P2-3. Work dominated by
**(a)** replacing the v0.5 Strand C/D templated stubs (5 of 6
shipped 06.01.x units) and **(b)** the entire Ahlfors back-half
(gamma / zeta / Weierstrass / Mittag-Leffler / Schwarz-Christoffel /
Picard / $\wp$ / modular) which is completely absent from Codex
despite being foundational for the existing 06.06-jacobians and
06.09-stein chapters.

**Largest Ahlfors-distinctive gap:** the back-half Chapter 5-8 block
— gamma (item 14), zeta (15), normal families + Picard (13, 19, 20),
Schwarz-Christoffel (18). Items 14-15 alone are the single largest
topic-level expansion Ahlfors buys Codex (canonical analytic-
continuation examples; originator-text foundational).
