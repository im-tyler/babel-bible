# Arbarello, Cornalba, Griffiths, Harris — *Geometry of Algebraic Curves, Volume 1* (Fast Track 3.22) — Audit + Gap Plan

**Book:** Enrico Arbarello, Maurizio Cornalba, Phillip A. Griffiths,
Joseph D. Harris, *Geometry of Algebraic Curves, Volume 1*
(Springer Grundlehren der mathematischen Wissenschaften 267, 1985,
xvi + 386 pp.). ISBN 978-0-387-90997-4. Joint with the much later
Volume 2 by Arbarello-Cornalba-Griffiths (GMW 268, 2011); Volume 2 is
**out of scope** here and will be audited separately if/when its
content (moduli of curves, second-order deformation, Witten conjecture,
intersection theory on $\overline{\mathcal{M}}_g$) is brought into the
Codex's algebraic-curves campaign.

**Fast Track entry:** 3.22, paired with Hartshorne (3.21) and Joe Harris
*Moduli of Curves* (3.30) as the algebraic-geometry curves trio.
Griffiths-Harris Vol 1 (hereafter **ACGH-I**) is the canonical
textbook on **special divisors and Brill-Noether theory** — the
geometric / Hodge-theoretic / Abel-Jacobi-machinery side of curve
theory. The book that working algebraic geometers cite when they say
"by Griffiths-Harris Ch. IV" or "the Brill-Noether dimension theorem".

**PDF availability.** No author-hosted PDF (commercial Springer text;
in print). No copy in `reference/textbooks-extra/` or
`reference/fasttrack-texts/`. **This audit is reduced** — produced
from chapter structure, the standard secondary literature
(Donaldson, Forster, Hartshorne, Mumford, Voisin), and the Volume-1
citations already present in the corpus (`06.06.06-jacobi-inversion`,
`06.06.07-riemann-bilinear`, `06.06.08-schottky-problem`,
`04.04.01-riemann-roch-curves`, `04.10.01-moduli-of-curves` all cite
ACGH-I by section). Mark as **REDUCED** in the audit log; a full
P1 inventory at line-number granularity is deferred until a PDF is
acquired.

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite per
orchestration protocol). Punch-list of new units + deepenings to reach
the equivalence threshold (`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§3.4). Mirrors the structure of `donaldson-riemann-surfaces.md` and
`brown-higgins-sivera-nonabelian-algebraic-topology.md`.

The audit surface is **mixed** — Codex's algebraic-geometry chapter
(`04-algebraic-geometry/`) and Riemann-surfaces chapter
(`06-riemann-surfaces/`) jointly ship ~45 curve-relevant units;
Riemann-Roch, divisors, Abel-Jacobi, Jacobi inversion, theta function,
period matrix, Riemann bilinear, and Schottky are all present at
some depth. **The Brill-Noether content is mentioned but not
anchored** — Brill-Noether-dimension $\rho(g, r, d)$, the
existence theorem (Kempf-Kleiman-Laksov), the dimension theorem
(Griffiths-Harris 1980), Petri-general curves (Gieseker 1982), the
Brill-Noether-loci $W^r_d$ and $G^r_d$ as moduli stacks, Martens'
theorem, Mumford's strengthening, all appear in passing in
`06.06.06` and `06.06.08` but **no dedicated unit exists**. The
**theta-function machinery is also templated** — `06.06.05` is
v0.5 Strand C/D auto-generated prose, not the substantive
Riemann-vanishing / theta-divisor / Riemann singularity story
ACGH-I develops. These two blocks are the main gap.

---

## §1 What ACGH-I is for

ACGH-I is the canonical textbook on the **geometry of linear systems
on algebraic curves and the Brill-Noether classification**. Where
Hartshorne Ch. IV does Riemann-Roch and the basics of curves in the
scheme-theoretic style, and Forster / Donaldson / Miranda
(FT 1.07 / 3.18) do the analytic / differential-geometric side
of Riemann surfaces, ACGH-I sits at the **intersection of
algebraic geometry and Hodge theory**: divisor classes via
Abel-Jacobi, special divisors via Brill-Noether, theta function via
Riemann's vanishing theorem, all developed with explicit machinery
suitable for actual computation on a specific curve. The book that
formalised **special-divisor theory** for the modern era.

Eight chapters, plus appendices.

**Chapter I — Preliminaries.** Standard package on divisors, line
bundles, the Picard variety $\mathrm{Pic}^d(C)$, linear systems
$|D|$, projective embeddings, the canonical embedding for $g \geq 2$
non-hyperelliptic, Riemann-Roch and Serre duality (stated;
proofs deferred to Hartshorne / Forster). Sets notation and
re-orients the reader from a scheme-theoretic background.

**Chapter II — Determinantal varieties.** Algebro-geometric
infrastructure for Brill-Noether: degeneracy loci of maps of
vector bundles, Eagon-Northcott / Porteous formula, Thom-Porteous
class. The technical bridge between the Brill-Noether matrix
$\mu_0 : H^0(L) \otimes H^0(K \otimes L^{-1}) \to H^0(K)$ and
the geometry of $W^r_d \subset \mathrm{Pic}^d(C)$.

**Chapter III — Introduction to special divisors.** Definitions of
$W^r_d := \{[L] \in \mathrm{Pic}^d(C) : h^0(L) \geq r + 1\}$
and $G^r_d := \{(L, V) : V \subset H^0(L), \dim V = r + 1\}$,
the **Brill-Noether number** $\rho(g, r, d) := g - (r+1)(g - d + r)$,
the **expected dimension** of $W^r_d$. Statement of the
Brill-Noether existence theorem and dimension theorem.

**Chapter IV — The varieties of special linear series on a
general curve.** The book's signature chapter. Proofs of
the **Brill-Noether existence theorem** (Kempf 1971,
Kleiman-Laksov 1972) via degeneracy-loci / Porteous-class
calculation: for $\rho \geq 0$, $W^r_d$ is non-empty of dimension
$\geq \rho$. Proof of the **Brill-Noether dimension theorem**
(Griffiths-Harris 1980) and **smoothness theorem** for a *general*
curve in $\mathcal{M}_g$: $\dim W^r_d = \rho$ when $\rho \geq 0$,
$W^r_d = \emptyset$ when $\rho < 0$, and $W^r_d$ is smooth away
from $W^{r+1}_d$. **Petri general curves** (Gieseker 1982,
Eisenbud-Harris 1983 *Petri general*): on a general curve the
Petri map $\mu_0$ is injective for every line bundle, which
implies the Brill-Noether theorems and additionally describes the
local geometry of $W^r_d$.

**Chapter V — The Basic Results of the Brill-Noether Theory.**
Consequences: **Clifford's theorem** with equality characterisation
(equality iff $D = 0$, $D = K$, or $C$ hyperelliptic);
**Martens' theorem** bounding $\dim W^r_d$ above for special
$d, r$; **Mumford's strengthening** of Martens; **Keem's theorem**.
The gonality stratification of $\mathcal{M}_g$ — the **gonality**
$\mathrm{gon}(C)$ is the smallest $d$ with $W^1_d \neq \emptyset$,
i.e., the smallest degree of a non-constant map $C \to \mathbb{P}^1$;
$\mathrm{gon}(C) \leq \lceil (g+3)/2 \rceil$ by Brill-Noether.

**Chapter VI — The geometric theory of Riemann's theta function.**
The Riemann theta function $\theta(z, \tau)$ on $\mathbb{C}^g$
descended to the Jacobian $J(C)$, the **theta divisor**
$\Theta \subset J(C)$, **Riemann's vanishing theorem**:
$\Theta$ is Abel-Jacobi image of $\mathrm{Sym}^{g-1}(C)$
translated by the **Riemann constant** $\kappa$, and
$\mathrm{mult}_p \theta = h^0(L_p)$ at every effective line bundle
$L_p$ of degree $g - 1$ corresponding to $p \in J(C)$ (the
**Riemann singularity theorem**). Identification of
$\mathrm{Sing}(\Theta)$ with the translated Brill-Noether locus
$W^1_{g-1}$. The Riemann theta function from the geometric
(not the analytic) side: theta is a section of a specific
ample line bundle on $J(C)$, principal polarisation, the
abelian-variety structure as a consequence not a hypothesis.

**Chapter VII — The Existence and Connectedness Theorems for $W^r_d$.**
Detailed proof of the existence theorem (Kempf 1971, Kleiman-Laksov
1972). Fulton-Lazarsfeld connectedness theorem
(Fulton-Lazarsfeld 1981): for $\rho(g, r, d) \geq 1$,
$W^r_d$ is connected; corollary: $W^r_d$ is irreducible for
$\rho \geq 1$ on a Petri-general curve.

**Chapter VIII — Enumerative Geometry of Curves.** Chern-class /
intersection-theory calculations on $W^r_d$. The Eisenbud-Harris
*Limit linear series* preview (proper Volume-2 territory).
Castelnuovo numbers, the number of $g^r_d$'s on a general curve,
applications to enumerative problems on $\mathcal{M}_g$.

**Appendices.** Excess linear series, the universal Jacobian /
universal Picard, Hilbert schemes of curves in projective space.

Distinctive ACGH-I editorial choices:

1. **Brill-Noether is the spine.** The book is organised around the
   classification of linear systems $g^r_d := (L, V)$ on a curve.
   This is **not** how Hartshorne / Vakil / Forster / Donaldson are
   organised; they take Riemann-Roch as a destination, not as the
   starting point of a classification programme.
2. **Determinantal-variety machinery (Ch. II) front-loaded.** Porteous
   formula and degeneracy loci are developed as the technical
   foundation for the existence theorem. Codex does not have this
   block at all — no Porteous, no Thom-Porteous class, no
   Eagon-Northcott; the closest is the Chern-class machinery in
   Lawson-Michelsohn and Milnor-Stasheff coverage, which is
   topological not algebro-geometric.
3. **Petri map $\mu_0 : H^0(L) \otimes H^0(K \otimes L^{-1}) \to H^0(K)$
   as the local invariant.** Codex has the Petri map *implicit* in
   Riemann-Roch proofs but never named or developed; ACGH-I makes
   $\mu_0$ a first-class object whose injectivity controls the
   local geometry of $W^r_d$.
4. **Gieseker-Petri theorem (1982) and Lazarsfeld's vector-bundle
   proof.** Gieseker 1982 *Stable curves and special divisors* and
   Lazarsfeld 1986 *Brill-Noether-Petri without degenerations*. The
   former proves Petri's conjecture by degeneration to nodal curves;
   the latter by Mukai-Lazarsfeld vector bundles on K3 surfaces. Both
   absent from Codex.
5. **Riemann singularity theorem as the bridge.** Chapter VI
   identifies $\mathrm{Sing}(\Theta) = W^1_{g-1}$ via the multiplicity
   formula $\mathrm{mult}_p \theta = h^0(L_p)$. This is the
   load-bearing observation that links theta functions to
   Brill-Noether geometry, and the input to Andreotti-Mayer and the
   Schottky problem. Codex's `06.06.08-schottky-problem` cites this
   in passing but does not develop it.
6. **Theta function via geometry, not analysis.** ACGH-I's theta
   function is a holomorphic section of the line bundle
   $\mathcal{O}_{J(C)}(\Theta)$ where $\Theta$ is defined geometrically
   as the Abel-Jacobi image of $\mathrm{Sym}^{g-1}(C)$, with the
   analytic formula $\theta(z, \tau) = \sum_{n \in \mathbb{Z}^g}
   \exp(\pi i n^T \tau n + 2\pi i n^T z)$ as a *consequence*. Codex's
   `06.06.05-theta-function` is currently the analytic-formula-first
   templated stub (v0.5 Strand C/D); ACGH-I's geometric framing
   would require a full rewrite.
7. **Constructive existence on the Jacobian.** Abel-Jacobi
   $\alpha_d : \mathrm{Sym}^d(C) \to \mathrm{Pic}^d(C)$ is realised
   concretely; $W^r_d = \alpha_d(\{D : h^0(D) \geq r + 1\})$ is
   computed via the rank-condition on a specific evaluation matrix.
8. **Explicit running examples.** Hyperelliptic ($g \geq 2$),
   trigonal ($g \geq 3$), $k$-gonal stratification; canonical
   embedding for $g = 3, 4, 5$ explicitly; Castelnuovo bound; the
   Petri conjecture / Lazarsfeld theorem worked through for low
   genera.
9. **Not a Riemann-surface book.** Riemann surfaces appear only as
   the analytic backdrop; the working object is the smooth projective
   curve $C$ over an algebraically closed field of characteristic
   zero. This is the **complementary lens** to Donaldson / Forster.
10. **Bibliographic anchor.** ACGH-I is the citation that closes the
    Brill-Noether era and opens the moduli era — pairs with
    Joe Harris *Moduli of Curves* (FT 3.30) and Mumford
    *Curves and their Jacobians* (FT-adjacent, often cited).

ACGH-I ends **before** modern moduli theory (no Deligne-Mumford
compactification, no Witten conjecture, no Kontsevich theorem, no
limit linear series at length). Volume 2 (ACG 2011) picks up there.

---

## §2 Coverage table (Codex vs ACGH-I)

Cross-referenced against the curves-relevant subset of the corpus
(`04-algebraic-geometry/04-curves/`, `04-algebraic-geometry/04-riemann-roch/`,
`04-algebraic-geometry/05-divisors/`, `04-algebraic-geometry/08-differentials/`,
`04-algebraic-geometry/10-moduli/`, `06-riemann-surfaces/05-divisors-bundles/`,
`06-riemann-surfaces/06-jacobians/`, plus the `06.04-riemann-roch-rs/`
and `06.04-cohomology/` units). ✓ = covered at ACGH-I-equivalent depth,
△ = topic present but Codex unit shallower / different framing, ✗ = not
covered.

### Chapter I — Preliminaries

| ACGH-I topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Divisor, line bundle on a curve, equivalence | `06.05.01-divisor-riemann-surface`; `06.05.02-holomorphic-line-bundle`; `04.05.01-weil-divisor`; `04.05.03-line-bundle`; `04.05.04-cartier-divisor` | ✓ | Shipped (some templated; Donaldson plan flags `06.05.01` for deepening). |
| Picard group $\mathrm{Pic}(C)$, $\mathrm{Pic}^d(C)$, degree map | `04.05.02-picard-group` | △ | Shipped; structure $\mathrm{Pic}^d \cong \mathrm{Pic}^0 \cong J(C)$ partial — Donaldson plan item 13 calls for deepening. |
| Linear system $|D|$, base-point-free, very ample | — | ✗ | **Gap.** No dedicated linear-system unit; mentioned but never developed as the first-class object ACGH-I builds on. |
| Projective embedding via $|D|$; very ample line bundles | `04.05.05-ample-line-bundle`; Donaldson plan item 19 (`06.05.04`) | △ | Algebraic-geometry side present in `04.05.05`; curves-specific Donaldson item 19 is on the deepening punch-list but not yet shipped. |
| Canonical embedding for $g \geq 2$ non-hyperelliptic | partial in `06.08.02-vhs-jacobian` and `04.08.02-canonical-sheaf` | △ | Canonical sheaf present; the canonical map $C \to \mathbb{P}^{g-1}$ and its hyperelliptic-vs-non-hyperelliptic dichotomy is referenced only as commentary, not anchored. |
| Riemann-Roch theorem (statement) | `04.04.01-riemann-roch-curves`; `06.04.01-riemann-roch-compact-riemann-surfaces` | ✓ | Shipped both sides; Donaldson plan item 4 calls for proof-depth deepening on `06.04.01`. |
| Serre duality on curves | `06.04.04-serre-duality-curves`; `04.08.03-serre-duality` | △ | Shipped both sides; depth varies (Donaldson plan item 3 covers `06.04.04`). |
| Hodge decomposition / period matrix | `06.06.02-period-matrix`; `06.06.07-riemann-bilinear` | ✓ | Shipped; `06.06.07` is at full Riemann-bilinear depth. |
| Hyperelliptic curve, $y^2 = p(x)$ | partial in `04.04.02-hurwitz-formula`; Donaldson plan item 18 | △ | Mentioned as example; no dedicated unit. |

### Chapter II — Determinantal varieties

| ACGH-I topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Degeneracy loci of a map of vector bundles | — | ✗ | **Gap.** No dedicated unit anywhere in `04.*` or `03.*`. |
| Porteous formula / Thom-Porteous class | — | ✗ | **Gap.** |
| Eagon-Northcott complex | — | ✗ | **Gap.** Pointer-only acceptable. |
| Chern-class formalism for degeneracy loci | partial in `03.07.*` (gauge theory), `04.05.06-intersection-pairing` | △ | Topological Chern classes shipped (Milnor-Stasheff anchor); the algebraic-geometry Chern-class / intersection-theory formalism on $\mathrm{Pic}^d$ is not present. |

### Chapter III — Introduction to special divisors

| ACGH-I topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| **Special divisor**, $\ell(K - D) > 0$ | mentioned in `04.04.01-riemann-roch-curves` (Clifford prose) | △ | Defined in passing in the RR unit; no dedicated unit. |
| **Brill-Noether number** $\rho(g, r, d) := g - (r+1)(g - d + r)$ | mentioned in `04.04.01`, `06.06.06`, `06.06.08` | △ | Formula appears three times across the corpus but is never anchored in its own unit. **Foundational symbol with no home.** |
| **$W^r_d$**, the Brill-Noether locus $\{[L] \in \mathrm{Pic}^d : h^0(L) \geq r + 1\}$ | mentioned in `06.06.06-jacobi-inversion`, `06.06.08-schottky-problem` | ✗ | **Gap (high priority).** No dedicated unit; the symbol is invoked by `06.06.08` (Schottky/Andreotti-Mayer) as if it were anchored. |
| **$G^r_d$**, the variety of $g^r_d$'s | — | ✗ | **Gap.** |
| Statement of Brill-Noether existence theorem | mentioned in `06.06.06-jacobi-inversion` | △ | Statement present in the Jacobi-inversion unit's commentary; no dedicated theorem unit. |
| Statement of Brill-Noether dimension theorem (Griffiths-Harris 1980) | mentioned in `06.06.06-jacobi-inversion`, `06.06.08-schottky-problem` | △ | Statement appears in commentary; the theorem itself has no anchoring unit. **The Codex silently depends on this theorem** via `06.06.08`'s singular-locus identification. |

### Chapter IV — Brill-Noether on a general curve

| ACGH-I topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| **Brill-Noether existence theorem** (Kempf 1971, Kleiman-Laksov 1972) | mentioned in `06.06.06-jacobi-inversion` | ✗ | **Gap (high priority).** Statement cited; proof / dedicated unit absent. The Porteous-class / degeneracy-locus proof is entirely absent (Ch. II gap above). |
| **Brill-Noether dimension theorem** (Griffiths-Harris 1980) | mentioned in `06.06.06`, `06.06.08` | ✗ | **Gap (high priority).** Codex's most-cited unanchored result — used silently by `06.06.08`. |
| **Brill-Noether smoothness theorem** | — | ✗ | **Gap.** |
| **Petri map** $\mu_0 : H^0(L) \otimes H^0(K \otimes L^{-1}) \to H^0(K)$ | — | ✗ | **Gap.** Foundational local invariant; absent. |
| **Gieseker-Petri theorem** (Gieseker 1982) | — | ✗ | **Gap (high priority).** Petri general curves; the modern proof of the Brill-Noether dimension theorem. |
| **Lazarsfeld's vector-bundle proof** (Lazarsfeld 1986) | — | ✗ | **Gap.** Master-tier deepening. K3-surface Mukai-Lazarsfeld bundles. |

### Chapter V — Basic results

| ACGH-I topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| **Clifford's theorem** | mentioned in `04.04.01-riemann-roch-curves` | △ | Statement and hyperelliptic-equality case present in commentary; equality characterisation depth is templated. |
| **Martens' theorem** | — | ✗ | **Gap.** |
| **Mumford's strengthening of Martens** | — | ✗ | **Gap.** |
| **Keem's theorem** | — | ✗ | **Gap (low priority — specialist).** |
| **Gonality** $\mathrm{gon}(C)$, gonality stratification | mentioned in `06.06.08-schottky-problem` (trigonal/tetragonal Schottky) | ✗ | **Gap.** The concept is used in `06.06.08` as if anchored; no dedicated unit. |
| **Bound $\mathrm{gon}(C) \leq \lceil (g+3)/2 \rceil$** | — | ✗ | **Gap.** Brill-Noether corollary. |
| **Hyperelliptic locus** $\mathcal{H}_g \subset \mathcal{M}_g$ | mentioned in `04.10.01-moduli-of-curves` (dimension $2g - 1$) | △ | Dimension stated; structure as Brill-Noether stratum not developed. |
| **Trigonal / $k$-gonal loci** | mentioned in `06.06.08` | ✗ | **Gap.** |

### Chapter VI — Geometric theory of theta

| ACGH-I topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Riemann theta function on $J(C)$ | `06.06.05-theta-function` | △ | Shipped but **v0.5 Strand C/D templated** — analytic formula only, no geometric framing, no theta-divisor identification. **High-priority rewrite.** |
| **Theta divisor** $\Theta \subset J(C)$ | mentioned in `06.06.08-schottky-problem`, `06.08.02-vhs-jacobian` | △ | Used by `06.06.08`'s Schottky / Andreotti-Mayer development; no dedicated unit anchoring the divisor itself. |
| **Riemann's vanishing theorem** | mentioned in `06.06.08`, Donaldson plan item 7 | △ | On Donaldson plan as deepening of `06.06.05` (item 7); not yet shipped. |
| **Riemann singularity theorem** $\mathrm{mult}_p \theta = h^0(L_p)$ | mentioned in `06.06.08-schottky-problem` | ✗ | **Gap (high priority).** Identifies $\mathrm{Sing}(\Theta) = W^1_{g-1}$; the load-bearing bridge to Brill-Noether. **Codex silently depends on this in `06.06.08`.** |
| **Riemann constant** $\kappa$ | — | ✗ | **Gap.** |
| Principal polarisation $\Theta$ as a line bundle | mentioned in Donaldson plan item 20 (`06.06.09`) | △ | Donaldson plan calls for `06.06.09`; not yet shipped. |
| Jacobi inversion via theta | `06.06.06-jacobi-inversion` | ✓ | Shipped at substantial depth (634 lines); proof via theta in Master tier. |

### Chapter VII — Existence / connectedness for $W^r_d$

| ACGH-I topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Detailed proof of Brill-Noether existence (Kempf / Kleiman-Laksov via Porteous) | — | ✗ | **Gap.** Master-tier; depends on Ch. II determinantal infrastructure. |
| Fulton-Lazarsfeld connectedness theorem | — | ✗ | **Gap (specialist).** |
| Irreducibility of $W^r_d$ for $\rho \geq 1$ on Petri-general | — | ✗ | **Gap.** |

### Chapter VIII — Enumerative geometry

| ACGH-I topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Chern classes on $W^r_d$ | — | ✗ | **Gap.** |
| Castelnuovo number / number of $g^r_d$'s | — | ✗ | **Gap (specialist).** |
| Limit linear series (preview) | — | ✗ | Defer to Eisenbud-Harris / Joe Harris audit. |

### Appendices

| ACGH-I topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Universal Jacobian / universal Picard | mentioned in `06.08.02-vhs-jacobian` | △ | Cited; not anchored. |
| Hilbert scheme of curves | — | ✗ | **Gap.** Defer to FT 3.30 (Joe Harris). |
| Excess linear series | — | ✗ | **Gap (specialist).** |

### Aggregate coverage estimate

- **Theorem layer:** ~30% topic-level, ~15% ACGH-equivalent
  proof-depth. Gap concentrated in (a) the entire **Chapter II
  determinantal infrastructure** (absent), (b) the **Chapter III–IV
  Brill-Noether-loci block** (statements scattered as
  commentary across `06.06.06`, `06.06.08`, `04.04.01`; no
  dedicated units; the Codex *uses* Brill-Noether $W^r_d$ in
  `06.06.08` without anchoring it), (c) the **Chapter V Martens /
  Mumford / gonality block** (absent), and (d) the **Chapter VI
  Riemann-vanishing / Riemann-singularity / theta-divisor block**
  (templated `06.06.05`, no Riemann-singularity unit; bridge to
  Schottky / Andreotti-Mayer in `06.06.08` is **load-bearing but
  unanchored**). After priority-1: topic ~75%, proof-depth ~55%.
  After priority-1+2: ~92% topic-level, ~80% proof-depth.
- **Exercise layer:** ACGH-I has long, intricate, often-multi-part
  exercises (especially Ch. III–V); Codex's templated 7-block is
  essentially zero overlap. Defer to dedicated exercise-pack pass.
- **Worked-example layer:** ~40%. Codex covers low-genus
  hyperelliptic / elliptic / canonical examples; ACGH-I's running
  examples on Petri-general curves, trigonal curves, the
  Castelnuovo-Severi calculation, are absent.
- **Notation layer:** ~70% aligned. ACGH-I writes $W^r_d$, $G^r_d$,
  $\rho(g, r, d)$, $\mu_0$, $\Theta$, $\kappa$, $\theta$, $C$
  for the curve, $J(C)$ for the Jacobian; Codex uses $X$ / $C$ /
  $M$ for curves interchangeably (chapter-wide cleanup issue, not
  ACGH-I-specific). Recommend pinning $C$ for new
  ACGH-anchored units and consolidating the $\rho$ / $W^r_d$ symbols
  with a `notation/griffiths-harris.md`.
- **Sequencing layer:** ~50%. Codex DAG has no Brill-Noether spine;
  the chain Petri map → Porteous → $W^r_d$ existence → dimension →
  Riemann singularity → theta-divisor needs to be built.
- **Intuition layer:** ~30%. Special-divisor intuition (why
  Brill-Noether is the correct organising principle for curve
  theory) is essentially absent.
- **Application layer:** ~40%. Gonality stratification, canonical
  embedding for non-hyperelliptic $g \leq 5$, hyperelliptic /
  trigonal Schottky variants are referenced but not developed.

---

## §3 Gap punch-list (P3-lite — units to write or deepen, priority-ordered)

The Codex curves coverage is **mixed**: standard divisor / linear /
Riemann-Roch / Abel-Jacobi / Jacobi-inversion content is present
(some templated; Donaldson plan handles depth deepenings on the
analytic side), but the **Brill-Noether content** and the
**Riemann-singularity / theta-divisor bridge** are largely absent.
The work below concentrates on closing those two blocks. Recommended
slot range: `04.04.04-*` and `04.04.05-*` for new Brill-Noether units
on the algebraic-geometry side, `06.06.10-*` for the
Riemann-singularity / theta-divisor / Brill-Noether-locus units on the
Riemann-surfaces side, with cross-references.

### Priority 1 — load-bearing Brill-Noether infrastructure and signature theorems

These items either anchor symbols already used elsewhere in the
corpus ($\rho$, $W^r_d$, $G^r_d$, $\mu_0$, $\mathrm{gon}$) or are
ACGH-I's signature theorems (Brill-Noether existence, dimension,
Gieseker-Petri, Riemann singularity). Without them the
Brill-Noether / theta block cannot honestly claim ACGH-equivalence,
and several already-shipped units (`06.06.06`, `06.06.08`) cite
unanchored results.

1. **`04.04.04` Linear system on a curve; $|D|$, $g^r_d$, base-point-free,
   very ample.** ACGH-I Ch. I / Hartshorne IV.1 / Forster §16 anchors.
   Three-tier; ~2000 words. Foundational notation unit; defines $|D| =
   \mathbb{P}(H^0(\mathcal{O}(D)))$, the linear series $g^r_d$ of dimension
   $r$ and degree $d$, base-point-free / very-ample conditions. Worked
   examples: $g^1_2$ on a hyperelliptic curve, $g^1_3$ on a trigonal,
   canonical $g^{g-1}_{2g-2}$.

2. **`04.04.05` Brill-Noether number $\rho(g, r, d)$ and Brill-Noether
   loci $W^r_d \subset \mathrm{Pic}^d(C)$, $G^r_d$.** ACGH-I Ch. III
   anchor. Three-tier; ~2200 words. **Highest priority — this is the
   unit `06.06.06`, `06.06.08`, and `04.04.01` silently cite.** Master
   section: Brill-Noether number $\rho(g, r, d) := g - (r+1)(g - d + r)$
   as expected dimension; $W^r_d = \{[L] \in \mathrm{Pic}^d(C) :
   h^0(L) \geq r + 1\}$; $G^r_d = \{(L, V) : V \subset H^0(L),
   \dim V = r + 1\}$ with forgetful map $G^r_d \to W^r_d$;
   Brill-Noether matrix / Petri map. Worked examples: $W^0_d$ for
   small $d$, $W^1_2$ on hyperelliptic.

3. **`04.04.06` Brill-Noether existence theorem (Kempf 1971;
   Kleiman-Laksov 1972).** ACGH-I Ch. IV / VII anchor.
   Three-tier; ~1800 words. Master section: statement, the
   degeneracy-loci framing, sketch via Porteous formula (citing
   item 7 if shipped, else state Porteous as black-box). Originator
   prose: Severi 1915 (precursor), Kempf 1971, Kleiman-Laksov 1972.

4. **`04.04.07` Brill-Noether dimension theorem (Griffiths-Harris
   1980; Gieseker 1982).** ACGH-I Ch. IV anchor. Three-tier;
   ~2000 words. Master section: for a *general* curve $C \in
   \mathcal{M}_g$, $\dim W^r_d = \rho$ when $\rho \geq 0$ and
   $W^r_d = \emptyset$ when $\rho < 0$; smoothness of $W^r_d$
   away from $W^{r+1}_d$. Originator prose: Griffiths-Harris 1980
   *On the variety of special linear systems on a general algebraic
   curve* (Duke Math. J. 47, 233–272). Cross-reference Gieseker
   1982 *Stable curves and special divisors* (Inventiones 66,
   251–275) for the modern proof. **The unit `06.06.06` and
   `06.06.08` already cite this as if anchored.**

5. **`04.04.08` Petri map $\mu_0$ and Gieseker-Petri theorem.**
   ACGH-I Ch. IV anchor. Three-tier; ~1800 words. Master section:
   Petri map $\mu_0 : H^0(L) \otimes H^0(K \otimes L^{-1}) \to
   H^0(K)$; Petri's conjecture (Petri 1923); Gieseker 1982 proof
   (degeneration to nodal); Lazarsfeld 1986 *Brill-Noether-Petri
   without degenerations* (J. Differential Geom. 23, 299–307,
   K3-Mukai-Lazarsfeld bundles) as an alternative.

6. **`06.06.10` Riemann singularity theorem** $\mathrm{mult}_p
   \theta = h^0(L_p)$. ACGH-I Ch. VI anchor; Riemann 1857 originator.
   Three-tier; ~1800 words. Master section: identification
   $\mathrm{Sing}(\Theta) = W^1_{g-1}$ (translated). **The Codex
   load-bearer for `06.06.08`'s Andreotti-Mayer development.**
   Three-tier; Master section gives the multiplicity formula via
   tangent-cone calculation; Intermediate gives the statement and
   worked $g = 4$ example.

7. **Deepen `06.06.05-theta-function` (geometric framing,
   theta divisor, Riemann's vanishing theorem).** Replace the v0.5
   Strand C/D templated unit with a substantive rewrite: theta
   function $\theta(z, \tau) = \sum_{n \in \mathbb{Z}^g} \exp(\pi i
   n^T \tau n + 2\pi i n^T z)$, theta divisor $\Theta = \theta^{-1}(0)$
   as Abel-Jacobi image of $\mathrm{Sym}^{g-1}(C)$ shifted by the
   Riemann constant $\kappa$ (Riemann's vanishing theorem), principal
   polarisation. Donaldson plan item 7 already calls for this
   deepening from the Donaldson side; ACGH-I gives the
   algebraic-geometry framing. **Joint deepening with Donaldson item 7.**
   No new unit ID; rewrite of Intermediate "Key theorem" and Master
   "Full proof" sections.

### Priority 2 — Chapter V results and the determinantal-variety prelude

These items extend the priority-1 spine with consequences of
Brill-Noether (Clifford / Martens / gonality) and the Chapter II
algebro-geometric infrastructure (Porteous, determinantal
varieties).

8. **`04.04.09` Clifford's theorem with equality.** Statement +
   hyperelliptic-equality characterisation. ACGH-I Ch. V;
   Clifford 1878 originator. Three-tier; ~1500 words. Master
   section: full proof via $h^0(D) + h^0(K - D) \geq h^0(K) + 1$
   exchange argument; equality case forces $D = 0$, $D = K$, or
   $C$ hyperelliptic. **Currently in `04.04.01` commentary;
   extract to dedicated unit.**

9. **`04.04.10` Martens' theorem and Mumford's strengthening.**
   ACGH-I Ch. V; Martens 1967, Mumford 1974 originators. Three-tier;
   ~1700 words. Master section: $\dim W^r_d \leq d - 2r - 1$ for
   non-hyperelliptic $C$ (Martens) and the refinement for
   non-trigonal (Mumford).

10. **`04.04.11` Gonality of a curve.** ACGH-I Ch. V anchor.
    Three-tier; ~1500 words. Master section: $\mathrm{gon}(C) :=
    \min\{d : W^1_d \neq \emptyset\}$; bound $\mathrm{gon}(C) \leq
    \lceil (g + 3)/2 \rceil$ by Brill-Noether existence; gonality
    stratification of $\mathcal{M}_g$. Worked examples:
    hyperelliptic ($\mathrm{gon} = 2$), trigonal ($\mathrm{gon} = 3$),
    canonical curve cases.

11. **`04.04.12` Petri-general curve and the open Petri locus
    $\mathcal{M}_g^{\mathrm{Petri}}$.** ACGH-I Ch. IV / V. Three-tier;
    ~1500 words. The generic locus of $\mathcal{M}_g$ where Petri's
    conjecture holds and Brill-Noether is governed by $\rho$.

12. **`04.04.13` Determinantal varieties and the Porteous formula.**
    ACGH-I Ch. II anchor; Porteous 1971 originator (Liverpool
    Singularities Symposium I). Three-tier; ~1800 words. Master
    section: $\mathrm{Z}_k(\varphi) := \{x : \mathrm{rk}(\varphi_x)
    \leq k\}$ for a map of vector bundles $\varphi : E \to F$;
    expected codimension $(e - k)(f - k)$; Porteous-class formula
    $[\mathrm{Z}_k] = \Delta_{(e-k)^{f-k}}(c(F - E))$ as a
    Schur-polynomial determinant in Chern classes. Setup for
    item 3 (Brill-Noether existence proof). **Or include as a
    Master section of item 3; do not require as standalone unit
    if `03.*` Chern-class infrastructure remains light.**

13. **Deepen `04.04.01-riemann-roch-curves` (link to Brill-Noether
    block).** Add cross-references from the Brill-Noether prose in
    `04.04.01` to the new units 2-5 above. Replace the templated
    "Synthesis" paragraph with substantive cross-references. No
    new unit ID.

14. **Deepen `06.06.08-schottky-problem` (cross-reference
    Riemann singularity and Brill-Noether anchors).** Update the
    `06.06.08` Andreotti-Mayer development to cite the new
    `06.06.10` (Riemann singularity) and `04.04.07` (Brill-Noether
    dimension) units. No new unit ID; bibliography + prose update.

### Priority 3 — Chapter VII–VIII deepenings and Lazarsfeld

These items round out the existence-theorem proof, the
connectedness theorem, and the Lazarsfeld vector-bundle
alternative proof.

15. **`04.04.14` Brill-Noether existence theorem — full
    Porteous-class proof.** Master-only deepening of item 3 once
    item 12 ships. ~1500 words. The detailed Kempf-Kleiman-Laksov
    proof on the universal Picard.

16. **`04.04.15` Fulton-Lazarsfeld connectedness theorem.**
    ACGH-I Ch. VII; Fulton-Lazarsfeld 1981 *On the connectedness
    of degeneracy loci and special divisors* (Acta Math. 146).
    Master-only; ~1200 words. Statement + connectedness corollary
    for $W^r_d$ when $\rho \geq 1$.

17. **`04.04.16` Lazarsfeld's K3-vector-bundle proof of Petri.**
    Lazarsfeld 1986; Mukai 1989 *Curves, K3 surfaces and Fano
    3-folds of genus $\leq 10$*. Master-only; ~1500 words.
    The Mukai-Lazarsfeld bundle on a K3 surface containing $C$;
    Petri's conjecture as a vector-bundle stability statement.

### Priority 4 — Survey / pointer items, optional

18. **`04.04.17` Survey: enumerative geometry of $W^r_d$ and
    $g^r_d$'s on a general curve.** Master-only; ~900 words.
    ACGH-I Ch. VIII pointer; Castelnuovo number, the number of
    $g^r_d$'s on a Petri-general curve as a Schubert calculation.
    Defer unless Codex commits to the enumerative-curves track.

19. **`04.04.18` Universal Jacobian / universal Picard variety
    $\mathcal{J}_g \to \mathcal{M}_g$.** Master-only; ~1000 words.
    ACGH-I Appendix. Bridge to Joe Harris (FT 3.30) / Volume 2
    audit. Defer.

20. **Notation crosswalk `notation/griffiths-harris.md`.**
    ~500 words. Pin $C$ as the curve, $W^r_d$ / $G^r_d$ /
    $\rho$ / $\mu_0$ / $\Theta$ / $\kappa$ symbol conventions.
    Worth producing if priority-1+2 batch ships; otherwise inline
    in unit Master sections.

---

## §4 Implementation sketch (P3 → P4)

**Minimum ACGH-I-equivalence batch** = priority 1 only (items 1–7):
6 new units (`04.04.04`, `04.04.05`, `04.04.06`, `04.04.07`,
`04.04.08`, `06.06.10`) plus 1 deepening (`06.06.05`). Realistic
production estimate (mirroring earlier Cannas / Donaldson /
Lawson-Michelsohn batches):

- ~3 hours per typical new unit (research + draft + validate at
  27/27 + Lean stub + Bridge / Synthesis prose).
- ~4 hours for the Brill-Noether-loci unit (item 2 — large and
  load-bearing, multiple symbols anchored).
- ~3.5 hours for the Brill-Noether-dimension-theorem unit (item 4
  — originator-prose for Griffiths-Harris 1980 mandatory).
- ~2 hours for the theta-function rewrite (item 7 — joint with
  Donaldson plan item 7; one production pass serves both).
- Priority-1 totals: 1 large × 4 h + 4 typical × 3 h + 1 originator-
  heavy × 3.5 h + 1 deepening × 2 h = ~21.5 hours.
- Priority-1+2 totals: priority-1 + items 8–14 × ~2.5 h average =
  ~21.5 + ~18 = ~40 hours.

At 3–5 production agents in parallel, priority-1 fits in a 1–2 day
window with one integration agent stitching outputs. Priority-1+2
together fits a 3–4 day campaign.

**Batch structure.**

- **Batch A (Brill-Noether spine, items 1, 2, 3, 4, 5, ~13.5 h):**
  opens new sections `04.04.04-08`. Load-bearing; items 3-5 depend
  on items 1-2. The signature theorems; closes the most-cited
  unanchored block in the corpus.
- **Batch B (Theta / Riemann singularity, items 6, 7, ~5.5 h):**
  joint with Donaldson plan item 7. Opens `06.06.10`. Depends on
  Batch A item 2 (the $W^1_{g-1}$ symbol).
- **Batch C (Chapter V consequences, items 8, 9, 10, 11, ~6 h):**
  extends `04.04.*`. Depends on Batch A. Items 8-11 are
  independent of each other and can run in parallel.
- **Batch D (Chapter II infrastructure + deepenings, items 12-14,
  ~6 h):** opens `04.04.13` (Porteous / determinantal) if
  Chern-class infrastructure is judged ready; otherwise leave as
  inline Master section. Items 13-14 are bibliography + prose
  updates on existing units.
- **Optional Batch E (priority-3+4, items 15-20, ~10 h):** after
  priority-1+2 lands.

**Originator-prose targets** (each priority-1 unit's Master section
cites originator + ACGH-I):

- **Linear system** (item 1): Brill-Noether 1873 *Über die
  algebraischen Functionen und ihre Anwendung in der Geometrie*
  (Math. Ann. 7, 269–310) as the originating linear-systems
  framework; Riemann 1857 *Theorie der Abel'schen Functionen*
  (Crelle 54, 115–155) for the divisor / linear-system
  pre-history.
- **Brill-Noether loci** (item 2): Brill-Noether 1873; Severi 1915
  *Sulla classificazione delle curve algebriche* (precursor
  existence claim).
- **Brill-Noether existence** (item 3): Severi 1915 (precursor);
  Kempf 1971 *Schubert methods with an application to algebraic
  curves* (Stichting Math. Centrum Amsterdam) and Kleiman-Laksov
  1972 *On the existence of special divisors* (Amer. J. Math. 94,
  431–436). **Originator-prose mandatory.**
- **Brill-Noether dimension theorem** (item 4): Griffiths-Harris
  1980 *On the variety of special linear systems on a general
  algebraic curve* (Duke Math. J. 47, 233–272). **Phillip Griffiths
  + Joseph Harris are the originators**; originator-prose mandatory.
  Cite Gieseker 1982 *Stable curves and special divisors*
  (Inventiones 66, 251–275) for the modern proof of Petri.
- **Petri map / Gieseker-Petri** (item 5): Petri 1923 *Über die
  invariante Darstellung algebraischer Funktionen einer
  Veränderlichen* (Math. Ann. 88); Gieseker 1982; Lazarsfeld 1986
  *Brill-Noether-Petri without degenerations* (J. Differential
  Geom. 23, 299–307).
- **Riemann singularity theorem** (item 6): Riemann 1866
  *Bemerkungen über die Integration der Differentialgleichungen*
  (Crelle 65); Kempf 1973 *On the geometry of a theorem of
  Riemann* (Ann. Math. 98, 178–185) for the modern proof.
  **Originator voice mandatory.**
- **Theta function rewrite** (item 7): Riemann 1857; Jacobi
  1832/1834; Mumford *Tata Lectures on Theta I-II* (Birkhäuser PM
  28/43); Fay 1973 *Theta Functions on Riemann Surfaces*
  (Springer LNM 352).
- **Clifford** (item 8): Clifford 1878 *On the classification of
  loci* (Phil. Trans. Roy. Soc. 169).
- **Martens / Mumford** (item 9): Martens 1967 *Über den Dimensionssatz
  im Raume der speziellen Divisoren* (Crelle 233); Mumford 1974
  *Prym varieties I* (in *Contributions to Analysis*).
- **Gonality** (item 10): bound via Brill-Noether 1873 +
  Kleiman-Laksov 1972.
- **Petri general** (item 11): Petri 1923; Gieseker 1982.
- **Porteous** (item 12): Porteous 1971 *Simple singularities of
  maps* (Liverpool Singularities Symposium I, Springer LNM 192);
  Fulton 1984 *Intersection Theory* §14 for the modern
  presentation.

**Notation crosswalk.** Recommend new `notation/griffiths-harris.md`
(item 20) consolidating $W^r_d$, $G^r_d$, $\rho(g, r, d)$, $\mu_0$,
$\Theta$, $\kappa$, $\mathrm{gon}(C)$, $g^r_d$, $|D|$. Pin $C$ for
new ACGH-anchored units (the chapter-wide $M / X / \Sigma / C$
issue Donaldson plan flags is a separate maintenance pass).

**DAG edges to add.** New prerequisites for the priority-1+2 batch:

- `04.04.04` (linear system) ← {`04.05.01-weil-divisor`,
  `04.05.03-line-bundle`, `06.05.01-divisor-riemann-surface`}
- `04.04.05` (Brill-Noether loci) ← {`04.04.04`, `04.05.02-picard-group`,
  `04.04.01-riemann-roch-curves`}
- `04.04.06` (Brill-Noether existence) ← `04.04.05`
- `04.04.07` (Brill-Noether dimension) ← {`04.04.05`, `04.04.06`}
- `04.04.08` (Petri map) ← {`04.04.05`, `04.04.07`}
- `06.06.10` (Riemann singularity) ← {`04.04.05`, `06.06.05-theta-function`,
  `06.06.06-jacobi-inversion`}
- `04.04.09` (Clifford) ← `04.04.05`
- `04.04.10` (Martens / Mumford) ← `04.04.09`
- `04.04.11` (gonality) ← {`04.04.05`, `04.04.07`}
- `04.04.12` (Petri general) ← {`04.04.07`, `04.04.08`}
- `04.04.13` (Porteous) ← Chern-class infrastructure (TBD)
- `04.04.07` → `06.06.08-schottky-problem` (close the silent
  dependency)
- `06.06.10` → `06.06.08-schottky-problem` (close the silent
  dependency)

**Joint deepening with Donaldson.** Donaldson plan item 7
(Riemann's vanishing theorem, deepening of `06.06.05`) overlaps
with this plan's item 7 (theta function geometric rewrite). **One
production pass on `06.06.05` serves both equivalences.** Schedule
in the same campaign window as the Donaldson priority-1 batch.

**Joint coverage with Hartshorne.** Hartshorne IV does Riemann-Roch,
Hurwitz, and curves embedded in projective space; this overlap is
already shipped via `04.04.01`, `04.04.02-hurwitz-formula`, and
the canonical-embedding deepening on the Donaldson plan punch-list.
ACGH-I picks up where Hartshorne IV ends: special divisors,
Brill-Noether. The priority-1 batch here does **not** duplicate
Hartshorne — these are genuinely new units the Hartshorne audit
doesn't claim.

---

## §5 What this plan does NOT cover

- **Volume 2** (Arbarello-Cornalba-Griffiths 2011) — moduli of
  curves, second-order deformation, Witten conjecture,
  intersection theory on $\overline{\mathcal{M}}_g$. **Defer to a
  separate ACG-II audit** when Volume 2 enters the campaign.
- **Joe Harris, *Moduli of Curves*** (FT 3.30) — Hilbert schemes
  of curves, Deligne-Mumford compactification, tautological ring,
  Kontsevich theorem, Witten's conjecture, ELSV formula. **Defer
  to the Harris-Moduli audit.** Item 19 above (universal Jacobian)
  bridges the two.
- **Limit linear series** (Eisenbud-Harris 1986). ACGH-I Ch. VIII
  previews; the full theory belongs to a dedicated EH audit, not
  shipped here.
- **Higher rank Brill-Noether** (Bertram-Feinberg, Mukai). Out of
  scope.
- Line-number-level inventory of every theorem / exercise across
  ACGH-I's eight chapters. **Reduced audit; defer to a full P1
  pass once a PDF is acquired.**
- ACGH-I's extensive exercise sets (especially Ch. III–V). Defer
  to dedicated exercise-pack pass.
- The **Chapter II determinantal-variety infrastructure** beyond
  the Porteous-formula pointer (item 12). Eagon-Northcott, full
  Schubert calculus on $\mathrm{Gr}(k, n)$, and the Macaulay-Bayer
  algebraic-combinatorics input are deferred to a Fulton
  *Intersection Theory* / Griffiths-Harris *Principles* audit.
- Algebraic-curves-over-non-algebraically-closed-fields content.
  ACGH-I is char-0, $k = \overline{k}$; arithmetic Brill-Noether
  (Coleman, Faltings, Voloch) is out of scope.
- The **Schottky problem in genus $\geq 4$** beyond what
  `06.06.08` already ships. ACGH-I touches the Schottky-Jung
  framework in Ch. VI; full coverage belongs to a Mumford
  *Tata Lectures on Theta II* or Beauville-Debarre audit.
- Lean formalisation of Brill-Noether existence / dimension
  theorems. None exist in Mathlib; Lean stubs will mark the
  formalisation as `TBD`.

---

## §6 Acceptance criteria for FT equivalence (ACGH-I)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, the book
is at equivalence-coverage when:

- ≥95% of ACGH-I's named theorems in chapters I–VI map to Codex
  units **at ACGH-I-equivalent proof depth** (currently ~15%;
  after priority-1 this rises to ~55%; after priority-1+2 to ~82%;
  after priority-3 to ~92%+; full ≥95% requires priority-1+2+3 +
  selective priority-4).
- ≥80% of ACGH-I's exercises have a Codex equivalent (currently
  ~5%; closing this requires the dedicated ACGH-I-exercise-pack
  pass per §5).
- ≥90% of ACGH-I's worked examples (hyperelliptic, trigonal,
  canonical, Castelnuovo) are reproduced in some Codex unit
  (currently ~40%; the priority-1+2 batch's required
  worked-example rewrites bring this to ~75%; full ≥90% requires
  the Donaldson plan item 18 "standard examples" unit plus the
  new Brill-Noether spine).
- The **silent dependencies** of `06.06.08-schottky-problem` on
  Brill-Noether $W^1_{g-1}$ and the Riemann singularity theorem
  are closed by anchoring `04.04.07` (Brill-Noether dimension)
  and `06.06.10` (Riemann singularity).
- The **`06.06.05-theta-function` templated stub** is replaced
  with the ACGH-anchored geometric-framing rewrite (joint with
  Donaldson plan item 7).
- The notation alignment is recorded inline or via the optional
  `notation/griffiths-harris.md` (item 20).
- For every chapter dependency in ACGH-I (Ch. III → Ch. IV → Ch. V;
  Ch. VI → Ch. VII), there is a corresponding `prerequisites`
  arrow chain in Codex's DAG.
- Pass-W weaving connects the new units (`04.04.04-18`, `06.06.10`)
  to the existing `04.04.01` (Riemann-Roch), `04.04.02`
  (Hurwitz), `04.04.03` (elliptic), `04.05.*` (divisors / Picard),
  `06.06.*` (Jacobian / Abel-Jacobi / theta / Schottky) via
  lateral connections.

The 7 priority-1 items close the load-bearing Brill-Noether spine
and the Riemann-singularity / theta-divisor bridge. Priority-2
closes the Chapter V consequences (Clifford, Martens, gonality,
Petri general) and the Chapter II algebro-geometric prelude. Priority-3
closes the existence-theorem detailed proof and Lazarsfeld's
alternative. Priority-4 is depth-completion and survey pointers.

**Composite ACGH-I + Donaldson + Forster batch.** ACGH-I Ch. VI
(theta function, Riemann vanishing, Riemann singularity), Donaldson
Ch. 11 (theta function with Jacobi inversion, Riemann's bilinear
relations), and Forster Ch. III–V (Čech cohomology + Riemann-Roch
proof) all share the Jacobian-side theta machinery. Producing the
ACGH-I priority-1 + Donaldson priority-1 batches together yields
a ~13-unit composite closing the Brill-Noether spine, theta-divisor
bridge, and the Donaldson PDE / cohomology infrastructure
simultaneously.

**Honest scope.** **Mixed** equivalence gap: curve basics shipped
across `04.04-*`, `04.05-*`, `06.04-*`, `06.05-*`, `06.06-*`;
Brill-Noether content **almost entirely absent** despite being
silently cited by `06.06.06`, `06.06.08`, `04.04.01`, and
`04.10.01`. Work concentrated in two new sub-chapters:
`04.04.04-18` (Brill-Noether spine + Chapter V consequences +
Chapter II prelude) and `06.06.10` plus deepening of `06.06.05`
(Riemann singularity / theta-divisor bridge). No infrastructure
chapter (Chern-class / intersection-theory on Picard variety) is
mandatory — Porteous can be inline.

**Largest single ACGH-I-distinctive gap:** the **Brill-Noether
spine** (items 1–5: linear systems, $\rho$, $W^r_d$, existence,
dimension, Petri). Without these, the algebraic-curves section
of Codex carries unanchored symbols that already appear in
shipped units. **Closing this is the highest-leverage curve-theory
audit deliverable available in the campaign window.**

**Unusual finding.** `06.06.08-schottky-problem` (743 lines,
mature Strand A) depends on the Riemann singularity theorem and
the Brill-Noether dimension theorem as if they were anchored —
multiple in-text statements ("$\dim \mathrm{Sing}(\Theta) = g - 4$
generically by Griffiths-Harris 1980, cf. [06.06.06]") cite a
result that is not in any dedicated unit. `06.06.06-jacobi-inversion`
similarly states the Brill-Noether existence theorem and the
dimension theorem in its Master commentary, citing Griffiths-Harris
1980 and Gieseker 1982, but the theorems themselves have no
homes. The Codex therefore has a **load-bearing citation chain
that resolves to no theorem unit** — a documentation-integrity
defect surfaced by this audit. Closing it via priority-1 items 2,
4, and 6 is the cleanest available fix.

---

## §7 Sourcing

- **No free PDF.** ACGH-I is a Springer Grundlehren volume in
  active commercial print; no author-hosted copy, no open-access
  Springer release. Anna's-Archive availability fluctuates but
  is not relied on for this audit.
- **No local copy.** Not present in `reference/textbooks-extra/`
  or `reference/fasttrack-texts/`. Acquisition required for a
  full P1 line-number-level pass; the present audit is **REDUCED**
  and works from chapter structure plus the citations already
  embedded in the corpus.
- **License.** Springer commercial. Cite as Arbarello, Cornalba,
  Griffiths, Harris, *Geometry of Algebraic Curves, Volume 1*,
  Grundlehren der mathematischen Wissenschaften 267,
  Springer-Verlag 1985.
- **Peer sources used for this reduced audit.**
  - **Hartshorne**, *Algebraic Geometry* (Springer GTM 52, 1977),
    Chapter IV — Riemann-Roch / curves; FT 3.21 sibling.
    `plans/fasttrack/hartshorne-algebraic-geometry.md`.
  - **Forster**, *Lectures on Riemann Surfaces* (Springer GTM 81,
    1981), §§16–30 — Riemann-Roch, Jacobi inversion, Abel.
    `plans/fasttrack/forster-riemann-surfaces.md`.
  - **Donaldson**, *Riemann Surfaces* (OUP OGTM 22, 2011),
    Ch. 8–11 — sheaf cohomology, Serre duality, theta function,
    Jacobi inversion, bilinear relations. FT 1.07.
    `plans/fasttrack/donaldson-riemann-surfaces.md`.
  - **Mumford**, *Curves and Their Jacobians* (Univ. of Michigan
    Press, 1975, reissued as the second half of *The Red Book*) —
    Jacobian-as-Picard, theta divisor, Schottky pointer.
    Originator citations for many Brill-Noether and theta results.
  - **Voisin**, *Hodge Theory and Complex Algebraic Geometry I*
    (Cambridge SAM 76, 2002), Ch. 7 — Abel-Jacobi, period
    matrix, Hodge decomposition for curves. FT-adjacent; already
    audited (`plans/fasttrack/voisin-hodge-theory-volume-1.md`).
  - **Mumford**, *Tata Lectures on Theta I-II* (Birkhäuser PM
    28/43, 1983/1984) — theta function with characteristics,
    Schottky-Jung, Riemann's vanishing. Originator-citation
    anchor for theta-side units.
  - **Eisenbud-Harris**, *3264 and All That* (CUP 2016) §14 —
    determinantal varieties / Porteous formula. Modern alternative
    to Fulton *Intersection Theory* for item 12.
  - **Fulton-Lazarsfeld 1981**, *On the connectedness of degeneracy
    loci and special divisors* (Acta Math. 146) — connectedness
    theorem originator. Item 16.
  - **Griffiths-Harris 1980**, *On the variety of special linear
    systems on a general algebraic curve* (Duke Math. J. 47,
    233–272) — Brill-Noether dimension theorem originator paper;
    Phillip Griffiths and Joseph Harris are the originators of
    the result the book formalises. Item 4 originator-prose.
  - **Gieseker 1982**, *Stable curves and special divisors*
    (Inventiones 66, 251–275) — modern proof of Petri's
    conjecture / Brill-Noether-Petri theorem. Item 5
    originator-prose alternative.
  - **Lazarsfeld 1986**, *Brill-Noether-Petri without
    degenerations* (J. Differential Geom. 23, 299–307) —
    K3-Mukai-Lazarsfeld bundle proof of Petri. Item 17.
  - **Kempf 1971**, *Schubert methods with an application to
    algebraic curves* (Math. Centrum Amsterdam preprint) and
    **Kleiman-Laksov 1972** *On the existence of special divisors*
    (Amer. J. Math. 94, 431–436) — Brill-Noether existence
    originator papers. Item 3.
  - **Riemann 1857/1866** *Theorie der Abel'schen Functionen*
    / *Bemerkungen über die Integration* — originator-citation
    for Riemann-Roch (in its original Riemann-only form), theta
    function, Riemann singularity, Riemann's vanishing.

**Recommendation:** acquire a Springer-licensed copy of ACGH-I
before the priority-1 batch enters production; the chapter-section
correspondence in §2 above is from secondary literature and may
mis-number specific results. A full P1 line-number pass should
follow acquisition.
