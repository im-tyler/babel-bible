# Donaldson — *Riemann Surfaces* (Fast Track 1.07) — Audit + Gap Plan

**Book:** Simon Donaldson, *Riemann Surfaces*
(Oxford Graduate Texts in Mathematics 22, Oxford University Press, 2011).
ISBN 978-0-19-960674-0.

**Fast Track entry:** 1.07 (Riemann-surfaces / one-complex-variable slot
of the geometric-analysis strand; Donaldson paired with Forster, Miranda,
Farkas-Kra as the differential-geometric / bundle-theoretic anchor).

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite per
orchestration protocol). Punch-list of new units + deepenings to reach
the equivalence threshold (`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§3.4). Not a full P1 audit (no line-number-level exercise inventory).

The audit surface is **comparable to Cannas**: the Codex
Riemann-surfaces chapter already ships 21 units; Donaldson is named in
`tier_anchors` on `06.03.03-uniformization-theorem` (Ch. 6) and
`06.05.02-holomorphic-line-bundle` (Ch. 8). Topic-level coverage is
high; real gaps are at *depth* — sheaf cohomology (Čech), Serre duality
on curves, Riemann-Roch *proof*, Gauss-Manin, PDE / Dirichlet-energy
uniformisation, theta-function machinery beyond definition, Jacobi
inversion, Schottky, Hodge decomposition.

---

## §1 What Donaldson's book is for

Donaldson is the canonical *differential-geometric and bundle-theoretic*
introduction to Riemann surfaces. Where Forster (1.07-paired) anchors
the **sheaf-theoretic and complex-analytic** perspective — Čech
cohomology, Mittag-Leffler, finiteness via Schwartz's theorem — and
Miranda anchors the **algebraic-curves** perspective — divisors, linear
systems, projective embeddings — Donaldson sits where the differential
geometer enters the subject. The book is organised as 14 chapters
across three Parts:

- **Part I — Preliminaries** (Ch. 1-2): basic complex analysis on the
  plane (Cauchy, Liouville, Riemann mapping for the disc),
  surfaces and Riemann surfaces from the differentiable viewpoint
  (charts, atlases, the standard examples — Riemann sphere, tori,
  hyperelliptic surfaces, plane curves).
- **Part II — Basic Theory** (Ch. 3-7): differential forms on Riemann
  surfaces (Hodge star, harmonic forms, $\bar\partial$ operator),
  **the main theorem** (existence of meromorphic functions on compact
  Riemann surfaces via the Hodge / Dirichlet-energy method —
  Donaldson's signature treatment), proofs of the main theorem
  (Hilbert space methods, weak solutions, regularity), the **Riemann-Roch
  theorem** (with full proof using Serre duality on curves),
  uniformisation (in the genus 0 / 1 / ≥ 2 cases via PDE / harmonic
  function methods).
- **Part III — Deeper Theory** (Ch. 8-14): **holomorphic line bundles
  and divisors** as the bundle-theoretic translation of Riemann-Roch;
  **further topics** including embeddings into projective space
  (Kodaira-type criteria for curves), Picard group structure, **theta
  functions and the Jacobi inversion problem** (proving $g = $ dimension
  of theta divisor and Jacobi's theorem on surjectivity of the
  Abel-Jacobi map), Riemann's bilinear relations, Schottky's theorem
  / Schottky problem, **the Gauss-Manin connection** (variation of
  periods over moduli of curves), and a final chapter touching on
  moduli of curves / Teichmüller theory.

Distinctive Donaldson choices:

1. **Differential-geometric throughout.** Donaldson is a Fields-medallist
   differential geometer (gauge theory, four-manifold invariants). The
   book's vocabulary is Hodge star, $\bar\partial$ as Cauchy-Riemann
   operator, harmonic 1-forms, Dirichlet energy, Hodge decomposition.
   Where Forster develops everything via sheaves and Mittag-Leffler,
   Donaldson develops everything via **PDE on a Riemannian surface**
   with compatible complex structure. Codex's existing chapter is
   sheaf-/divisor-theoretic in the Forster tradition; the load-bearing
   PDE / harmonic theory is not present.
2. **Sheaf cohomology of holomorphic line bundles via Čech.** Ch. 8-9
   develop $H^q(M, \mathcal{O}(L))$ — the algebraic vehicle for
   Riemann-Roch. Codex has the line-bundle unit but no genuine
   Čech-cohomology unit; the sheaf-cohomology layer is missing.
3. **Serre duality on curves, proved.** Ch. 9: $H^1(M, L) \cong H^0(M,
   K \otimes L^{-1})^*$ via Hodge theory from Ch. 5-7. Codex's
   Riemann-Roch unit treats Serre duality as a black box; no dedicated
   Serre-duality unit exists.
4. **Riemann-Roch with full proof.** Ch. 9 proves $\dim H^0(L) - \dim
   H^1(L) = \deg L + 1 - g$ using sheaf cohomology + Serre duality +
   the long exact sequence for $\mathcal{O}(L) \to \mathcal{O}(L+P)
   \to \mathbb{C}_P$. Codex's RR unit states the result with intuition
   but does not carry out the inductive divisor-bumping proof.
5. **Uniformisation via PDE.** Ch. 7 proves the universal cover is
   $\mathbb{P}^1$, $\mathbb{C}$, or $\mathbb{D}$ via Dirichlet-energy /
   Green's-function PDE machinery. Codex has the unit (Donaldson cited
   in `tier_anchors`) but the proof is sketchy / classical-style
   rather than Donaldson's PDE proof.
6. **Theta functions with Jacobi inversion.** Ch. 11 proves Jacobi's
   inversion theorem (Abel-Jacobi $\mathrm{Sym}^g(M) \to J(M)$
   surjective) and Riemann's vanishing theorem. Codex has the
   theta-function and Abel-Jacobi units but the **inversion bridge**
   between them is missing.
7. **Riemann's bilinear relations and Schottky problem.** Ch. 11-12.
   Period matrix in the Siegel upper half space; Schottky's $g=4$
   theorem as apex. Codex has period-matrix unit; bilinear relations
   only mentioned, Schottky absent.
8. **Gauss-Manin connection.** Ch. 12-13. Variation of Hodge structure
   as complex structure varies in moduli; flat connection on the
   cohomology bundle. **Codex has zero coverage — largest
   topic-level gap on Donaldson's side.**
9. **Hodge decomposition for curves.** Ch. 5 / Ch. 11. $H^1(M,
   \mathbb{C}) = H^{1,0} \oplus H^{0,1}$ via harmonic 1-form theory.
   Structural input for period matrix and bilinear relations. Codex's
   holomorphic-1-form unit has the definition but does not carry
   out the Hodge decomposition explicitly.
10. **Modern algebraic-curves outlook.** 2011 textbook with awareness
    of the projective-embedding (Kodaira-type) criterion, Picard group
    structure, divisor class group. Forster lacks this.
11. **Examples-driven from Ch. 2.** Riemann sphere, $\mathbb{C}/\Lambda$
    with Weierstrass $\wp$, hyperelliptic $y^2 = p(x)$, smooth plane
    curves — running examples throughout.
12. **Concise — 286 pages.** Production estimates below reflect that
    Donaldson has fewer micro-topics but proves headline theorems in
    greater PDE/differential-geometric depth.

Donaldson ends before higher-genus moduli theory (no Teichmüller in
depth, no Deligne-Mumford, no Mumford GIT — points to Mumford / Hubbard).

---

## §2 Coverage table (Codex vs Donaldson)

Cross-referenced against the 21-unit Codex Riemann-surfaces chapter
(`find content/06-riemann-surfaces -name "*.md" | sort`). ✓ = covered
at Donaldson-equivalent depth, △ = topic present but Codex unit
shallower (typically templated v0.5 Strand-B prose), ✗ = not covered.

### Part I — Preliminaries (Ch. 1-2)

| Donaldson topic | Codex unit | Status | Note |
|---|---|---|---|
| Holomorphic functions on $\mathbb{C}$, Cauchy theorem, Liouville | `06.01.01-holomorphic-function`; `06.01.02-cauchy-integral-formula` | ✓ | Both shipped at the right depth; Donaldson's Ch. 1 is review. |
| Meromorphic functions, residue theorem | `06.01.05-meromorphic-function`; `06.01.03-residue-theorem` | ✓ | Both shipped. |
| Analytic continuation | `06.01.04-analytic-continuation` | ✓ | Shipped. |
| Riemann mapping theorem (the disc case) | `06.01.06-riemann-mapping-theorem` | ✓ | Shipped; Donaldson Ch. 1 covers same depth. |
| Riemann surface (chart-atlas definition) | `06.03.01-riemann-surface` | ✓ | Shipped. Donaldson cited. |
| Genus, topological classification of compact surfaces | `06.03.02-genus-riemann-surface` | ✓ | Shipped. Donaldson cited. |
| Standard examples — Riemann sphere, complex torus $\mathbb{C}/\Lambda$, hyperelliptic surface, smooth plane curves | — | △ | The general examples appear scattered in Master sections of the existing units, but no dedicated "running examples of Riemann surfaces" unit. Donaldson Ch. 2 is essentially this. |
| Branch points and ramification | `06.02.01-branch-point-ramification` | ✓ | Shipped. |

### Part II — Basic Theory (Ch. 3-7)

This is where Donaldson's distinctive PDE / differential-geometric
approach lives. Codex coverage thins here.

| Donaldson topic | Codex unit | Status | Note |
|---|---|---|---|
| Differential forms on a Riemann surface; Hodge star $\star$; $d, \bar\partial, \partial$ operators | `06.06.01-holomorphic-one-form` (partial) | △ | The holomorphic-1-form unit defines $\omega \in \Omega^{1,0}$ but does not develop the full $(p,q)$-form / Hodge-star machinery. Donaldson Ch. 3 gives this as the working vocabulary for everything that follows. **Foundational depth gap.** |
| Harmonic 1-forms, Hodge decomposition $H^1(M, \mathbb{C}) = \mathcal{H}^{1,0} \oplus \mathcal{H}^{0,1}$ | partial in `06.06.01` | △ | Holomorphic-1-form unit mentions $\dim H^0(M, \Omega^1) = g$ but does not carry out the Hodge decomposition. **Donaldson Ch. 5; depth gap, high priority.** |
| **Main theorem** (existence of meromorphic functions on compact $M$ via Hodge / Dirichlet-energy method) | — | ✗ | **Gap (high priority).** Donaldson Ch. 4-5. The core PDE result the book is structured around: prove that on any compact Riemann surface there exist non-constant meromorphic functions, by solving the Dirichlet problem for harmonic functions and constructing the meromorphic function from a harmonic primitive. |
| Hilbert-space PDE machinery: weak solutions to $\bar\partial u = f$, Sobolev / regularity, Friedrichs extension | — | ✗ | **Gap.** Donaldson Ch. 5-6. Setup for the main theorem. |
| **Sheaf cohomology of holomorphic line bundles** $H^q(M, \mathcal{O}(L))$ via Čech cocycles | — | ✗ | **Gap (high priority).** Donaldson Ch. 8. The full Čech construction — open covers, Čech cochains, cocycles, coboundaries, $H^0$ as global sections, $H^1$ as obstruction — is not present anywhere in `06.*`. **Foundational for Riemann-Roch.** |
| **Serre duality on curves**: $H^1(M, L) \cong H^0(M, K \otimes L^{-1})^*$ | — | ✗ | **Gap (high priority).** Donaldson Ch. 9. The duality pairing realised via the residue / cup product. **Direct input to Riemann-Roch proof.** |
| **Riemann-Roch theorem with full proof** | `06.04.01-riemann-roch-compact-riemann-surfaces` | △ | Statement and intuition shipped; Donaldson cited in Master tier. **The actual divisor-bumping induction proof using Serre duality is not carried out** — current Master section gives the consequence and worked degree-counting, not the proof. **Depth gap, high priority.** |
| **Uniformisation theorem** (universal cover is $\mathbb{P}^1$, $\mathbb{C}$, or $\mathbb{D}$) — full PDE proof | `06.03.03-uniformization-theorem` | △ | Statement shipped; Donaldson cited in `tier_anchors` (Donaldson Ch. 6). The Master section gives a sketch that mentions monodromy / covering theory but **does not carry out Donaldson's PDE proof** (construct Green's function via Dirichlet energy, integrate to uniformising map). **Depth gap, high priority.** |

### Part III — Deeper Theory (Ch. 8-14)

| Donaldson topic | Codex unit | Status | Note |
|---|---|---|---|
| Holomorphic line bundles on a Riemann surface, transition functions | `06.05.02-holomorphic-line-bundle` | △ | Shipped, Donaldson cited (Donaldson Ch. 8). The cocycle definition is present; the **bundle-theoretic translation of Riemann-Roch** ($\dim H^0(L) - \dim H^1(L) = \deg L + 1 - g$ as a statement about line bundles, equivalent to the divisor form) is partly there. Depth assessment: roughly Donaldson-equivalent at definition level, shallower at Riemann-Roch-translation level. |
| Divisor on a Riemann surface, principal divisor, divisor class group, $\mathrm{Pic}(M)$ | `06.05.01-divisor-riemann-surface` | △ | Divisor unit shipped; the equivalence "$\mathrm{Pic}(M) = \mathrm{Cl}(M) = \mathrm{Div}(M)/\mathrm{PrinDiv}(M)$" is stated but the structure of $\mathrm{Pic}(M)$ as $\mathrm{Pic}^0(M) \oplus \mathbb{Z}$ (via degree) and the identification $\mathrm{Pic}^0(M) \cong J(M)$ is not developed cleanly. Donaldson Ch. 10 has this. |
| Riemann-Hurwitz formula | `06.05.03-riemann-hurwitz-formula` | ✓ | Shipped; Donaldson Ch. 4 covers same depth. |
| Holomorphic 1-forms, $\dim H^0(\Omega^1) = g$ | `06.06.01-holomorphic-one-form` | △ | Statement shipped; the proof via Hodge decomposition is not carried out (depth gap above). |
| **Period matrix** $\Pi \in M_{g \times 2g}(\mathbb{C})$, $A$/$B$-periods | `06.06.02-period-matrix` | △ | Shipped; the Riemann bilinear relations (period matrix is in Siegel upper half space $\mathfrak{H}_g$) are not proved. Donaldson Ch. 11. **Depth gap.** |
| **Jacobian variety** $J(M) = \mathbb{C}^g / \Lambda$ where $\Lambda$ is the period lattice | `06.06.03-jacobian-variety` | △ | Shipped; the principally-polarised-abelian-variety structure (via theta function) is mentioned but not developed. Donaldson Ch. 11. |
| **Abel-Jacobi map** $A : \mathrm{Div}^0(M) \to J(M)$, Abel's theorem (kernel = principal divisors) | `06.06.04-abel-jacobi-map` | △ | Abel's theorem shipped. |
| **Jacobi inversion theorem** (Abel-Jacobi $\mathrm{Sym}^g(M) \to J(M)$ surjective) | — | ✗ | **Gap (high priority).** Donaldson Ch. 11. The theorem that completes Abel — together they say $\mathrm{Sym}^g(M) \to J(M)$ is *birational*. |
| **Theta function on $J(M)$** | `06.06.05-theta-function` | △ | Shipped; basic definition $\theta(z, \tau) = \sum_{n \in \mathbb{Z}^g} \exp(\pi i n^T \tau n + 2\pi i n^T z)$ present. **Riemann's vanishing theorem** (zeros of theta = Abel-Jacobi image of effective divisors of degree $g-1$ shifted by Riemann constant) absent. Donaldson Ch. 11. |
| **Riemann's bilinear relations** | — | ✗ | **Gap.** Donaldson Ch. 11. The integrality / symmetry / positivity conditions on the period matrix that characterise Jacobians among complex tori. |
| **Schottky's theorem / Schottky problem** | — | ✗ | **Gap (priority-2/3).** Donaldson Ch. 12. Classifies Jacobians among principally polarised abelian varieties. The Schottky problem in $g \geq 4$. |
| **Gauss-Manin connection** (variation of periods over moduli) | — | ✗ | **Gap (priority-2, large topic).** Donaldson Ch. 12-13. Variation of Hodge structure for the universal family of Riemann surfaces; the flat connection encoding period variation. **Largest single Donaldson-distinctive topic-level gap.** |
| Embedding of curves in projective space; very-ample line bundles; canonical embedding for $g \geq 2$ non-hyperelliptic | — | ✗ | **Gap.** Donaldson Ch. 10. Codex's projective-geometry coverage in `04.*` is general; the curves-specific Kodaira-style criterion is not present. |
| Moduli of Riemann surfaces / Teichmüller theory pointers | — | ✗ | Pointer-level only in Donaldson; defer. |

### Several-variables (Ch. 7 several-variables — Codex's existing chapter section)

Codex has two units in `07-several-variables/` (`06.07.01-holomorphic-several-variables`, `06.07.02-hartogs-phenomenon`) which are *not* part of Donaldson's narrative — Donaldson is strictly one-variable. These units are anchored from Hörmander / Krantz, not Donaldson, and require no Donaldson-equivalence work.

### Aggregate coverage estimate

- **Theorem layer:** ~70% topic-level, ~35% Donaldson-equivalent
  proof-depth. Gap concentrated in (a) PDE / Hodge / Čech infrastructure
  (Ch. 5-9), (b) Riemann-Roch *proof* (unit exists, no proof), (c)
  Jacobian-side deepening (bilinear relations, Jacobi inversion,
  Riemann vanishing, Schottky), (d) Gauss-Manin / VHS block (absent).
  After priority-1: topic ~92%, proof-depth ~70%. After
  priority-1+2: ~93% proof-depth.
- **Exercise layer:** Donaldson's ~80 exercises vs. Codex's templated
  7-block. Defer to dedicated exercise-pack pass.
- **Worked-example layer:** ~40%. Donaldson runs four standard examples
  (Riemann sphere, torus, hyperelliptic, plane curves) systematically;
  Codex uses them as one-off references.
- **Notation layer:** ~80% aligned. Donaldson uses $M$ (Codex mixes
  $M / X / \Sigma$ — chapter-wide cleanup issue, not Donaldson-specific),
  $K$, $g$, $\mathcal{O}(L)$, $J(M)$, $\Pi$, $\theta$. No
  `notation/donaldson.md` needed.
- **Sequencing layer:** ~75%. Codex DAG follows Forster flow; needs new
  edges harmonic 1-forms → Hodge decomp → Serre duality → Riemann-Roch.
- **Intuition layer:** ~50%. Sheaf-/divisor-theoretic intuition decent;
  differential-geometric / PDE intuition essentially absent.
- **Application layer:** ~60%. $\wp$ from theta, low-genus periods
  partial; Schottky / moduli applications absent.

---

## §3 Gap punch-list (P3-lite — units to write or deepen, priority-ordered)

The Codex Riemann-surfaces chapter is mature in topic coverage. Most of
the work below is **deepening existing units to Donaldson-proof-depth**,
plus a small number of genuinely new units (Čech cohomology, Serre
duality, Hodge decomposition, Jacobi inversion, Gauss-Manin). The
recommended slot range is `06.04.*` for cohomology / Riemann-Roch
infrastructure, `06.06.*` for Jacobian-side deepenings and new units,
and a new chapter `06.08-moduli-and-variation/` for the Gauss-Manin /
moduli block.

### Priority 1 — load-bearing PDE / cohomology infrastructure and signature theorems

These items either provide infrastructure used silently elsewhere
(Čech cohomology, harmonic / Hodge decomposition, Serre duality) or
are Donaldson's signature proofs of named theorems (Riemann-Roch,
uniformisation via PDE). Without them the Riemann-surfaces chapter
cannot honestly claim Donaldson-equivalence.

1. **`06.04.02` Čech cohomology of holomorphic line bundles.**
   Donaldson Ch. 8 anchor; Cartan-Eilenberg 1956 / Godement 1958 as
   originator-citations for sheaf-Čech machinery, Serre 1955 *Faisceaux
   algébriques cohérents* for the holomorphic-line-bundle case.
   Three-tier; ~2200 words. Master section: open covers $\{U_\alpha\}$,
   Čech $q$-cochains $C^q$ on intersections, coboundary $\delta$,
   $H^q(M, \mathcal{O}(L))$ for line bundle $L$; $H^0$ as global
   sections, $H^1$ as obstruction class; refinement-independence;
   short exact sequence of sheaves $\to$ long exact sequence of Čech
   cohomology. Worked examples: $H^0(\mathbb{P}^1, \mathcal{O}(d)) =
   \mathbb{C}^{d+1}$; $H^1(\mathbb{P}^1, \mathcal{O}(d)) = 0$ for
   $d \geq -1$. **Highest priority — every other priority-1 item builds
   on it.**

2. **`06.04.03` Hodge decomposition for compact Riemann surfaces.**
   Donaldson Ch. 5 anchor; Hodge 1941 *Theory and Applications of
   Harmonic Integrals* originator-citation; Weyl 1913 *Die Idee der
   Riemannschen Fläche* for the Riemann-surface case (Dirichlet's
   principle). Three-tier; ~2000 words. Master section: $\Omega^*(M) =
   \bigoplus_{p+q=*} \Omega^{p,q}(M)$; harmonic 1-forms
   $\mathcal{H}^1(M) = \ker(\Delta)$; Hodge theorem $H^1(M, \mathbb{C})
   = \mathcal{H}^{1,0} \oplus \mathcal{H}^{0,1}$; for compact Riemann
   surfaces, $\dim \mathcal{H}^{1,0} = \dim \mathcal{H}^{0,1} = g$
   (the genus). Master section gives the Hilbert-space proof:
   harmonic 1-form is unique representative of cohomology class minimising
   $L^2$-norm. **Used by items 3-6.**

3. **`06.04.04` Serre duality on curves.** Donaldson Ch. 9 anchor;
   Serre 1955 *Un théorème de dualité* originator-citation. Three-tier;
   ~2000 words. Master section: for a holomorphic line bundle $L$ on
   compact Riemann surface $M$ of genus $g$, the residue / cup product
   pairing $H^1(M, L) \otimes H^0(M, K \otimes L^{-1}) \to H^1(M, K)
   = \mathbb{C}$ is non-degenerate; hence $H^1(M, L) \cong H^0(M, K
   \otimes L^{-1})^*$. Master section sketches the harmonic-theory
   proof via the Hodge decomposition of item 2. Worked example:
   Riemann sphere, $L = \mathcal{O}(d)$, both sides explicitly
   computable.

4. **Deepen `06.04.01-riemann-roch-compact-riemann-surfaces` (full
   proof).** Replace the templated / consequence-style "Key theorem
   with proof" with the actual divisor-bumping induction: short exact
   sequence $0 \to \mathcal{O}(L) \to \mathcal{O}(L+P) \to \mathbb{C}_P
   \to 0$ for a point $P$, induced long exact sequence in $H^*$, both
   sides of Riemann-Roch shift by 1, base case $L = \mathcal{O}$ gives
   $1 - g = 0 + 1 - g$. Citing item 3 (Serre duality) for the
   $H^1 = H^0(K-L)^*$ identification. Donaldson Ch. 9. No new unit ID;
   rewrite of the Intermediate "Key theorem" and Master "Full proof"
   sections.

5. **Deepen `06.03.03-uniformization-theorem` (PDE proof).** Replace
   the current covering-theoretic sketch with Donaldson's PDE proof:
   construct the Green's function on $M$ via the Dirichlet-energy
   minimisation, exponentiate to a holomorphic function with prescribed
   pole, use the holomorphic function to construct the uniformising
   map to $\mathbb{P}^1$ / $\mathbb{C}$ / $\mathbb{D}$ depending on
   genus. Donaldson Ch. 6. No new unit ID; rewrite of the Master "Full
   proof" section. The classical-style sketch can remain as
   alternative-proof commentary; the PDE proof becomes the primary
   exposition. **Deepening, high priority — the unit names Donaldson
   in `tier_anchors` so the proof should match Donaldson.**

6. **`06.06.06` Jacobi inversion theorem.** Donaldson Ch. 11 anchor;
   Jacobi 1832-1834 (originator) joint with Riemann's 1857 *Theorie
   der Abel'schen Functionen* for the modern formulation. Three-tier;
   ~1800 words. Master section: the symmetric product $\mathrm{Sym}^g(M)$
   is mapped to $J(M)$ by Abel-Jacobi; the theorem says this map is
   surjective and birational; combined with Abel's theorem (item
   `06.06.04`), $\mathrm{Sym}^g(M)/\sim \cong J(M)$. Proof via the
   theta function (item 7 below) — vanishing locus computation
   (Riemann's vanishing theorem). Worked example: genus 1 — Abel-Jacobi
   is a bijection $M \to J(M)$ (the elliptic-curve identification with
   its Jacobian).

7. **Deepen `06.06.05-theta-function` (Riemann's vanishing theorem).**
   Replace the templated proof / definition-only treatment with the
   substantive content of Donaldson Ch. 11: the theta function $\theta(z,
   \tau)$ is a holomorphic section of a specific line bundle on $J(M)$,
   its zero locus is the **theta divisor** $\Theta \subset J(M)$, and
   $\Theta$ is the image of $\mathrm{Sym}^{g-1}(M)$ under Abel-Jacobi
   shifted by the **Riemann constant** $\kappa$. This is **Riemann's
   vanishing theorem.** No new unit ID; rewrite of the Intermediate
   "Key theorem" and Master "Full proof" sections.

### Priority 2 — Donaldson-distinctive depth gaps and the Gauss-Manin block

These items either replace templated content with Donaldson-anchored
prose on existing units, introduce the Riemann-bilinear-relations and
Schottky-theorem block that Donaldson treats as substantive, or open
the moduli / variation-of-Hodge-structure block (the largest
Donaldson-distinctive topic-level gap).

8. **`06.06.07` Riemann's bilinear relations.** Donaldson Ch. 11
   anchor; Riemann 1857 originator. Three-tier; ~1800 words. Master
   section: choose canonical homology basis $A_1, \dots, A_g, B_1,
   \dots, B_g$ with $A_i \cdot B_j = \delta_{ij}$; for holomorphic
   1-forms $\omega_1, \dots, \omega_g$ normalised by $\int_{A_i}
   \omega_j = \delta_{ij}$, the period matrix $\Pi_{ij} = \int_{B_i}
   \omega_j$ satisfies (i) $\Pi^T = \Pi$ (symmetry), (ii) $\mathrm{Im}\,
   \Pi > 0$ (positivity); hence $\Pi \in \mathfrak{H}_g$, the Siegel
   upper half space. Bridge to Schottky problem (item 9).

9. **`06.06.08` Schottky's theorem and the Schottky problem.**
   Donaldson Ch. 12 anchor; Schottky 1888 / Schottky-Jung 1909
   originator-citations for the genus-4 case; Mumford 1975
   *Tata Lectures on Theta II* and Igusa for modern reformulations.
   Three-tier; ~1800 words. Master section: Schottky's classical
   $g = 4$ theorem (a quartic relation among period values), and the
   Schottky problem in general (which $\mathfrak{H}_g$-points come
   from curves; the Jacobi locus inside the moduli of principally
   polarised abelian varieties).

10. **`06.08.01` Gauss-Manin connection.** Donaldson Ch. 12-13 anchor;
    Manin 1958 / Katz-Oda 1968 originator-citations. Three-tier;
    ~2400 words. **Largest single new unit in this plan.** Master
    section: family of Riemann surfaces $\pi : \mathcal{M} \to S$ over
    a base $S$ (parameter space, e.g. $\mathfrak{H}_g$ or moduli space
    $\mathcal{M}_g$); the cohomology bundle $R^1 \pi_* \mathbb{C}$ is
    locally constant (topological invariance), so carries a flat
    connection — the **Gauss-Manin connection**; the Hodge bundles
    $R^1 \pi_* \mathcal{O}$ and $\pi_* \Omega^1$ vary holomorphically;
    period matrix as multivalued function on $S$. Worked example: family
    of elliptic curves $y^2 = x(x-1)(x-\lambda)$ over $\lambda \in
    \mathbb{C} \setminus \{0, 1\}$ — periods are hypergeometric
    functions of $\lambda$; the Gauss-Manin connection has regular
    singular points at $\lambda = 0, 1, \infty$. **Priority because
    largest topic-level gap, and bridges Riemann surfaces to algebraic
    geometry / Hodge theory more broadly.**

11. **`06.08.02` Variation of Hodge structure on the Jacobian.**
    Donaldson Ch. 13 anchor; Griffiths 1968-70 *Periods of integrals
    on algebraic manifolds* originator-citation. Three-tier; ~1800
    words. Master section: the Hodge filtration $F^1 \subset H^1$
    varies holomorphically, $F^1$ has rank $g$, transversality
    condition $\nabla F^p \subset F^{p-1} \otimes \Omega^1_S$
    (Griffiths transversality). Bridge to Hodge theory in the algebraic
    geometry chapter (`04.*`).

12. **Deepen `06.05.02-holomorphic-line-bundle` (full RR translation).**
    Add the bundle-theoretic restatement of Riemann-Roch: $\dim H^0(L) -
    \dim H^1(L) = \deg L + 1 - g$; the equivalence with the divisor
    form via $L \leftrightarrow [D]$. Add the **degree** invariant
    $\deg L = \int_M c_1(L)$ as the Chern-class integration. Donaldson
    Ch. 8-10. No new unit ID.

13. **Deepen `06.05.01-divisor-riemann-surface` (Picard group
    structure).** Add the structural result $\mathrm{Pic}(M) =
    \mathrm{Pic}^0(M) \oplus \mathbb{Z}$ via the degree map; the
    identification $\mathrm{Pic}^0(M) \cong J(M)$ as complex Lie
    groups; the short exact sequence $0 \to \mathbb{Z} \to \mathcal{O}
    \to \mathcal{O}^* \to 0$ and the connecting map giving the Chern
    class. Donaldson Ch. 10. No new unit ID.

14. **`06.04.05` Hilbert-space PDE for $\bar\partial$.** Donaldson
    Ch. 5-6 anchor; Hörmander 1965 originator. Three-tier; ~1500 words.
    Master section: weak solutions to $\bar\partial u = f$ for $f \in
    L^2 \Omega^{0,1}$; Sobolev space machinery; $L^2$-projection onto
    harmonic forms; regularity (smooth $f$ ⇒ smooth $u$). **Setup for
    items 2, 5; produces the main-theorem PDE proof Donaldson hangs
    his book on.**

15. **`06.04.06` Existence of meromorphic functions on compact Riemann
    surfaces (the main theorem).** Donaldson Ch. 4 anchor; Riemann
    1857 originator. Three-tier; ~1700 words. Master section: starting
    from the harmonic-1-form / Dirichlet-energy machinery (items 2 and
    14), construct a meromorphic function with prescribed pole at a
    given point on any compact $M$; consequence: every compact $M$
    embeds projectively. **Conceptual climax of Donaldson Part II.**

16. **Deepen `06.06.02-period-matrix` (bilinear relations stated and
    proved).** Cross-reference to item 8; flag $\Pi \in \mathfrak{H}_g$.
    No new unit ID; addition to existing Master section.

17. **Deepen `06.06.01-holomorphic-one-form` (Hodge-decomposition
    proof of $\dim H^0(\Omega^1) = g$).** Replace templated proof
    with harmonic-theory argument (cite item 2). No new unit ID.

### Priority 3 — Donaldson-distinctive optional units (depth-completing)

These items round out Donaldson's content but are not strictly required
for FT equivalence: items 18-19 are showcase examples that make the
running-example layer match Donaldson; item 20 is the curves-projective
embedding bridge; item 21 is moduli-space pointer.

18. **`06.03.04` Standard examples of Riemann surfaces (running
    examples).** Donaldson Ch. 2 anchor. Three-tier; ~2000 words.
    Master section: detailed treatment of (a) Riemann sphere
    $\mathbb{P}^1 = \mathbb{C} \cup \{\infty\}$ with the two-chart
    atlas; (b) complex torus $\mathbb{C}/\Lambda$ with the Weierstrass
    $\wp$-function generating the field of meromorphic functions; (c)
    hyperelliptic surface $y^2 = p(x)$ with $p$ degree $2g+1$ or
    $2g+2$; (d) smooth plane curves $F(x, y) = 0$. Worked examples
    referenced from later units. **Closes the worked-example-layer gap
    described in §2.**

19. **`06.05.04` Embedding of curves in projective space; canonical
    embedding.** Donaldson Ch. 10 anchor. Three-tier; ~1700 words.
    Master section: a line bundle $L$ on $M$ is **very ample** if it
    embeds $M \to \mathbb{P}(H^0(L)^*)$; Kodaira-style criterion for
    curves; the **canonical embedding** for $g \geq 2$ non-hyperelliptic
    via $K$. Worked example: genus-3 curve embeds via $K$ as a quartic
    in $\mathbb{P}^2$; genus-4 curve embeds via $K$ as the intersection
    of a quadric and a cubic in $\mathbb{P}^3$.

20. **`06.06.09` Principally polarised abelian variety structure on
    $J(M)$.** Donaldson Ch. 11 (footnote) anchor. Three-tier; ~1500
    words. The polarisation $\Theta \subset J(M)$ is principal; bridge
    to abelian varieties in algebraic geometry. Optional.

21. **`06.08.03` Survey: moduli of Riemann surfaces.** Donaldson
    Ch. 13 (pointer) anchor; Mumford 1965 / Deligne-Mumford 1969
    originator-citations. Master-only; ~900 words. Pointer to
    Hubbard / Farb-Margalit Teichmüller theory, Mumford GIT
    construction of $\mathcal{M}_g$, Deligne-Mumford compactification.
    Deferred unless Codex expands into moduli theory.

### Priority 4 — Survey / pointer items, optional

22. **`06.04.07` Survey: sheaf cohomology in algebraic geometry.**
    Master-only; ~700 words. Pointer to Hartshorne / Griffiths-Harris
    for the algebraic-geometry-of-curves treatment of the same
    cohomology machinery. Cross-link rather than expansion.

23. **Notation crosswalk (`notation/donaldson.md`).** Optional given the
    mostly-aligned conventions. Worth producing if a chapter-wide
    $M / X / \Sigma$ notation pass is undertaken; otherwise defer.

---

## §4 Implementation sketch (P3 → P4)

**Minimum Donaldson-equivalence batch** = priority 1 only (items 1-7):
4 new units (`06.04.02`, `06.04.03`, `06.04.04`, `06.06.06`) plus
3 deepenings (Riemann-Roch, uniformisation, theta function). Realistic
production estimate (mirroring earlier Cannas / Arnold / Lawson-Michelsohn
batches):

- ~3 hours per typical new unit (research + draft + validate at 27/27 +
  Lean stub + Bridge / Synthesis prose).
- ~5 hours for Čech cohomology unit (item 1) — large and load-bearing.
- ~1.5 hours per deepening.
- Priority 1 totals: 1 large × 5 h + 3 typical × 3 h + 3 deepenings ×
  1.5 h = ~18.5 hours.
- Priority 1+2 totals: 1 large × 5 h + 6 new typical × 3 h + 5
  deepenings × 1.5 h = ~30.5 hours.

At 4-6 production agents in parallel, priority-1 fits in a 1-2 day
window with one integration agent stitching outputs.

**Batch structure.**

- **Batch A (PDE / cohomology infrastructure, items 1, 2, 14, 3, ~14
  h):** opens new sections in `06.04-*`. Produce together; load-bearing
  for everything downstream.
- **Batch B (Theorem proofs, items 4, 5, 15, ~9 h):** depends on
  Batch A. Riemann-Roch proof (item 4) needs Serre duality (item 3);
  uniformisation (item 5) needs Hodge decomposition (item 2);
  main theorem (item 15) needs item 14.
- **Batch C (Jacobian-side deepening, items 6, 7, 8, 9, 16, 17, ~13
  h):** opens / extends `06.06-*`. Largely independent of Batch B —
  only depends on Batch A (item 2 for Hodge decomposition feeding the
  period-matrix bilinear relations).
- **Batch D (Gauss-Manin block, items 10, 11, ~8 h):** opens new
  `06.08-moduli-and-variation/` chapter. Largest priority-2 item.
  Independent of A-C, can run in parallel.
- **Optional Batch E (priority-3+4, items 18-23, ~10 h):** after
  priority-1+2 lands.

**Originator-prose targets** (each priority-1 unit's Master section
cites originator + Donaldson):

- **Čech cohomology** (item 1): Cartan-Eilenberg 1956; Godement 1958
  *Théorie des faisceaux*; Serre 1955 *Faisceaux algébriques cohérents*
  (Ann. Math. 61) for the holomorphic case.
- **Hodge decomposition** (2): Hodge 1941; Weyl 1913 *Die Idee der
  Riemannschen Fläche* for the Riemann-surface case.
- **Serre duality** (3): Serre 1955 *Un théorème de dualité*
  (Comm. Math. Helv. 29). Originator-prose mandatory.
- **Riemann-Roch** (4 deepening): Riemann 1857; Roch 1865;
  Hirzebruch 1956 / Grothendieck 1957 (optional modern cite).
- **Uniformisation PDE** (5 deepening): Klein 1882; Poincaré 1907 /
  Koebe 1907; Donaldson Ch. 6.
- **Jacobi inversion** (6): Jacobi 1832-1834; Riemann 1857.
- **Riemann's vanishing** (7 deepening): Riemann 1857; Mumford
  *Tata Lectures on Theta I-III*.
- **Bilinear relations** (8): Riemann 1857. Originator voice mandatory.
- **Schottky** (9): Schottky 1888 (J. reine angew. Math. 102).
- **Gauss-Manin** (10): Manin 1958; Katz-Oda 1968 (J. Math. Kyoto 8).
- **VHS** (11): Griffiths 1968-70 *Periods of integrals on algebraic
  manifolds* I-III.
- **Hilbert-space $\bar\partial$** (14): Hörmander 1965 (Acta Math. 113).

**Notation crosswalk.** Mostly aligned (per §2). No
`notation/donaldson.md` needed; existing `tier_anchors` citing
`Donaldson Ch. N` is sufficient. Pin $M$ as the Riemann-surface symbol
for new Donaldson-anchored units (Codex currently mixes $M / X /
\Sigma$ — chapter-wide cleanup is a separate maintenance pass).

**DAG edges to add.** New prerequisites for the priority-1+2 batch:

- `06.04.02` (Čech cohomology) ← {`06.05.02-holomorphic-line-bundle`,
  `06.04.03` Hodge}
- `06.04.03` (Hodge decomp) ← {`06.06.01-holomorphic-one-form`,
  `06.04.05` Hilbert-PDE}
- `06.04.04` (Serre duality) ← `06.04.03` Hodge; `06.04.04` →
  `06.04.01` Riemann-Roch
- `06.04.05` (Hilbert PDE for $\bar\partial$) ← {`06.01.01`,
  `06.06.01-holomorphic-one-form`}
- `06.04.06` (main theorem / existence of meromorphic functions) ←
  {`06.04.05`, `06.04.03`}; → `06.05.04` curves-embedding
- `06.06.06` (Jacobi inversion) ← {`06.06.04-abel-jacobi-map`,
  `06.06.05-theta-function`}
- `06.06.07` (Riemann bilinear relations) ←
  {`06.06.02-period-matrix`, `06.04.03` Hodge}
- `06.06.08` (Schottky) ← {`06.06.07`, `06.06.06`}
- `06.08.01` (Gauss-Manin) ← {`06.06.02-period-matrix`, `06.04.03`,
  `06.06.03-jacobian-variety`}
- `06.08.02` (VHS) ← `06.08.01`
- `06.05.04` (curves embedding) ← {`06.05.02`, `06.04.06`}

**Composite Donaldson + Forster batch recommendation.** Forster's book
shares the algebraic-machinery side (sheaves, divisors, Riemann-Roch
statement) with Donaldson. **The Čech cohomology unit (item 1) and the
Riemann-Roch deepening (item 4) cover both books with one production
pass.** Defer the Forster audit to the same campaign window so that
these heavy units are produced once and serve both equivalences.

---

## §5 What this plan does NOT cover

- Line-number-level inventory of every theorem / exercise across
  Donaldson's 14 chapters. Defer unless priority-1+2 expands.
- Donaldson's ~80 exercises vs. Codex's templated 7-block. Dedicated
  Donaldson-exercise-pack pass (`06.E1`/`06.E2`) is P3 follow-up after
  the theorem-layer batch closes.
- **Forster-distinctive** sheaf machinery beyond Čech (acyclicity,
  Leray, Mittag-Leffler / Schwartz finiteness). Forster gets its own
  plan; Čech overlap owned by item 1.
- **Miranda-distinctive** algebraic-curves material (linear systems
  in full generality, projective embeddings, hyperelliptic theory in
  detail). Miranda gets its own plan; items 18-19 cover the overlap.
- **Farkas-Kra-distinctive** function-theoretic / theta-deep machinery
  (Riemann theta with characteristics, Schottky-Klein prime form,
  Bergman kernel, automorphic forms on Fuchsian groups). Farkas-Kra
  gets its own plan.
- Several-complex-variables material in `06.07-*`. Donaldson is
  strictly one-variable; existing Hörmander / Krantz coverage is fine.
- Higher-genus moduli theory beyond Donaldson's Ch. 13 pointer
  (Teichmüller depth, Mumford GIT, Deligne-Mumford, Mumford-Tate).
  Hubbard / Mumford / Farb-Margalit territory; item 21 is pointer-stub.
- Gauge-theory downstream (Hitchin moduli, Narasimhan-Seshadri).
  Donaldson's other books; out of scope here.
- Worked-example densification across the existing 21 units —
  curriculum-wide cleanup issue. Only priority-1/2 deepenings carry
  mandatory rewrites; item 18 addresses systemically.
- Chapter-wide $M / X / \Sigma$ notation cleanup — maintenance pass.

---

## §6 Acceptance criteria for FT equivalence (Donaldson)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, the book is
at equivalence-coverage when:

- ≥95% of Donaldson's named theorems map to Codex units **at
  Donaldson-equivalent proof depth** (currently ~35%; after priority-1
  this rises to ~70%; after priority-1+2 to ~93%; after priority-3
  deepenings to ~96%).
- ≥80% of Donaldson's exercises have a Codex equivalent (currently
  ~5% — the templated 7-problem block; closing this requires the
  dedicated Donaldson-exercise-pack pass per §5).
- ≥90% of Donaldson's worked examples are reproduced in some Codex
  unit (currently ~40%; the priority-1+2 batch's required
  worked-example rewrites bring this to ~65%; item 18 — the
  running-examples unit — brings this to ~90%).
- The notation alignment is recorded inline in the rewritten Master
  sections (no separate `notation/donaldson.md` needed).
- For every chapter dependency in Donaldson (Part II Ch. 5 → Ch. 6 →
  Ch. 7; Ch. 8 → Ch. 9 → Ch. 10; Ch. 11 → Ch. 12 → Ch. 13), there is
  a corresponding `prerequisites` arrow chain in Codex's DAG. The
  Hodge-decomp → Serre-duality → Riemann-Roch chain in particular
  must be unbroken after the priority-1 batch.
- Pass-W weaving connects the new units (`06.04.02-06`, `06.06.06-09`,
  `06.08.01-02`, `06.05.04`, `06.03.04`) to the existing
  `06.04-riemann-roch-rs/`, `06.05-divisors-bundles/`,
  `06.06-jacobians/`, and `06.03-riemann-surfaces/` units via lateral
  connections.

The 7 priority-1 items (items 1-7) close the load-bearing-PDE-and-
cohomology-infrastructure gap and the signature-theorem-proof gap.
The 10 priority-2 items (items 8-17) close the Donaldson-distinctive
depth gaps (bilinear relations, Schottky, Gauss-Manin, VHS) and the
deepenings on existing line-bundle / divisor / period-matrix /
holomorphic-1-form units. The 6 priority-3+4 items (items 18-23) are
depth-completion, examples, and survey pointers; they bring proof-depth
coverage from ~93% to ~96%+ but are not strictly required for
sign-off.

**Composite Donaldson + Forster batch (restated).** Donaldson Ch. 8-9
and Forster Ch. III-V overlap on Čech cohomology + Riemann-Roch.
Producing both books' priority-1 batches together yields a ~10-unit
composite closing the core cohomology gaps simultaneously.

**Honest scope.** Mid-sized equivalence gap: chapter is already 21
units, topic coverage ~70%. Work dominated by *depth* rewrites and
*infrastructure* (Čech, Serre duality, Hodge decomposition, $\bar\partial$
PDE), not topic-level new content. New units concentrated in
cohomology infrastructure (`06.04.02-06` — absent) and the
moduli / variation block (`06.08.*` — absent). Jacobian-side units
(`06.06.06-09`) extend an existing section. Line-bundle / divisor /
Riemann-Roch units are deepenings of templated v0.5-Strand-B prose.

**Largest single Donaldson-distinctive gap:** Gauss-Manin / VHS block
(items 10-11). Codex has zero coverage; foundational for any future
algebraic-geometry / Hodge-theory expansion. Producing items 10-11
is the single largest topic-level expansion Donaldson buys for Codex.
