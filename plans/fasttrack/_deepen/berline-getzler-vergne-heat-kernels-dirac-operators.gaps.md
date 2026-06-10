# BGV *Heat Kernels and Dirac Operators* (FT 3.29) — Phase-2 deepening gaps

**Book:** Berline, Getzler, Vergne, *Heat Kernels and Dirac Operators*
(Grundlehren 298). SLUG `berline-getzler-vergne-heat-kernels-dirac-operators`.

**Headline result of this re-audit.** The first-pass audit's Priority-1 and
most of its Priority-2 punch-list have since SHIPPED. Units `03.09.23`
(Bismut superconnection), `03.09.24` (eta invariant + APS), `03.09.25`
(Kirillov character formula via the equivariant index), and `03.09.26`
(Mathai-Quillen formalism + universal Thom forms) all now exist in the
spin-geometry chapter. The Lichnerowicz formula, McKean-Singer identity,
Getzler rescaling, Mehler's formula, the $\widehat A$-genus density, the
small-$t$ asymptotic expansion (index-tier), and the family/equivariant
index are all covered. After verification, only the items below remain as
genuine gaps. BGV is now ~90% covered at FT-equivalence depth.

---

## Genuine gaps (2)

### Gap 1 — Probabilistic / Brownian-bridge heat kernel of a Dirac operator (BGV Ch. 7)

- **id:** `03.09.27` (free — confirmed; highest occupied is `03.09.26` plus `E1`,`E2`)
- **title:** Probabilistic construction of the heat kernel of a Dirac operator (Bismut formula)
- **spec:** Bismut's stochastic-parallel-transport / Brownian-bridge path-integral representation of $e^{-tD^2}$, the probabilistic Mehler formula, and the path-integral form of the local index theorem; Master-tier only.
- **prereqs (verified to exist):** `03.09.20` (heat-kernel index, McKean-Singer + Getzler rescaling), `03.09.08` (Dirac operator, Lichnerowicz formula), `08.14.01` (Brownian motion, Wiener measure, Feynman-Kac — flat-space stochastic foundation), `03.09.14` (Dirac bundle / Clifford connection).
- **chapter dir:** `content/03-modern-geometry/09-spin-geometry/`; frontmatter `section: modern-geometry`, `chapter: spin-geometry`.
- **Evidence it is absent:** grep `brownian|stochastic parallel|feynman-kac|path integral` across `03-modern-geometry/09-spin-geometry/` returns only `03.09.23` and `03.09.26`, where Bismut's probabilistic proof appears solely as a one-line historical mention ("one a direct probabilistic argument via the Brownian-motion path-integral", `03.09.23:550`); no unit constructs the heat kernel probabilistically. `grep -rliE "brownian motion on|brownian bridge|stochastic parallel transport"` returns no manifold-level stochastic unit anywhere in `content/`.
- **Caveat (carry forward from first-pass §3 item 5):** the manifold-level stochastic prerequisites — Brownian motion on a Riemannian manifold, stochastic parallel transport, Itô calculus on manifolds — are NOT in the corpus (`08.14.01` is flat-space only; the only other `ito/stochastic` filename hit is `17.08.01` cell-cycle, unrelated). Ship Master-only with an explicit "underlying manifold-level stochastic calculus is not yet in the Babel Bible" note, exactly as the first-pass audit prescribed. This remains the deepest pedagogical gap in BGV's spine.

### Gap 2 — Cartan model of equivariant de Rham cohomology (BGV Ch. 7 §7.1–7.2 tooling; underpins Ch. 6)

- **id:** `03.09.28` (free — confirmed)
- **title:** Equivariant de Rham cohomology and the Cartan model
- **spec:** The Cartan complex $(\Omega^\bullet(M)\otimes \mathbb{R}[\mathfrak g])^G$ with equivariant differential $d_{\mathfrak g} = d - \iota_{X}$, equivariantly closed forms (e.g. $\bar\omega = \omega + \mu$), the equivariant Chern-Weil map, and the Atiyah-Bott / Berline-Vergne localisation formula stated as a clean theorem in this language.
- **prereqs (verified to exist):** `03.04.04` (exterior derivative), `03.06.06` (Chern-Weil homomorphism), `48.05.16` (holonomy / Lie-group action context) or `07.06.09` (Borel-Weil) for the group-action prerequisite, `05.04.05` (Duistermaat-Heckman — the prototype example to point back to).
- **chapter dir:** recommend `content/03-modern-geometry/09-spin-geometry/` to sit directly under the equivariant-index / Kirillov units that consume it; frontmatter `section: modern-geometry`, `chapter: spin-geometry`. (Alternative placement `03-modern-geometry/06-characteristic-classes/` — free ids `03.06.21`/`03.06.22`/`03.06.25` — is defensible since it is a characteristic-class construction; spin-geometry is preferred for proximity to its consumers `03.09.21`/`03.09.25`.)
- **Evidence it is absent:** no unit defines the Cartan model as its subject. `05.04.05` (Duistermaat-Heckman) *states* the Atiyah-Bott/Berline-Vergne localisation formula and *names* the Cartan model, but its Lean section explicitly flags "the Cartan model of equivariant cohomology that Duistermaat-Heckman requires" as a Mathlib/prerequisite gap (`05.04.05:393,399`); `03.09.25` (Kirillov) likewise *uses* equivariant cohomology and Harish-Chandra localisation but does not develop the Cartan model. `find` for `equivariant-de-rham|cartan-complex|equivariant-form` filenames returns nothing. This is the shared foundational unit that `03.09.21`, `03.09.25`, and `05.04.05` all silently assume.
- **Note:** This is a borderline-but-genuine gap — the localisation *theorem* is stated in `05.04.05`, so propose at Beginner+Intermediate(+Master optional) depth focused on the *model and the equivariant differential*, not on re-proving DH. If a future producer judges `05.04.05`'s coverage sufficient, this can be downgraded to a deepening section in `03.09.25`; flagged here because three separate units flag it as a missing prerequisite.

---

## COVERED (not gaps) — due-diligence trailer

Each topic below was a candidate (from the first-pass punch-list or the
deepening brief) and was verified ALREADY COVERED; not proposed.

| Candidate topic (BGV ch.) | Existing unit(s) | Evidence |
|---|---|---|
| Clifford algebra / Clifford modules (Ch. 1) | `03.09.02`, `03.09.11`, `03.09.15` | shipped; Clifford algebra + chessboard + Cl_k-Dirac |
| Generalised Dirac operator on a Clifford bundle (Ch. 1) | `03.09.14` (Dirac bundle), `03.09.08` (Dirac operator) | shipped |
| **Lichnerowicz formula** $D^2=\nabla^*\nabla+\tfrac14\mathrm{Scal}$ | `03.09.08` (stated + proof sketch, §"Lichnerowicz in coordinates", lines 727+), `03.09.16` (theorem + proof, lines 165–197) | fully proved in two units |
| Weitzenböck / Bochner-Weitzenböck identity | `03.09.14`, `03.09.16`, `48.02.15` (Bochner technique) | shipped |
| Small-$t$ asymptotic expansion of $e^{-tD^2}$ (Ch. 2) | `03.09.20` (§Small-$t$ asymptotic, line 387; Gilkey invariant-theory coefficients cited), `03.09.22` (parametrix / Seeley calculus) | covered at index tier |
| Duhamel principle / parametrix construction | `03.09.22` (pseudodifferential, Seeley calculus), `02.13.03` (heat-equation Duhamel) | shipped |
| **Seeley-DeWitt / Gilkey heat coefficients** $a_j(x)$ | `03.09.20` (Gilkey invariant theory cited, line 387), `03.09.22` (Seeley complex powers + zeta, lines 366) | adequate for index; no standalone spectral-geometry unit but not a BGV-spine gap |
| Index of Dirac operators — statement (Ch. 3) | `03.09.10` (Atiyah-Singer), `03.09.06` (Fredholm), `03.09.09` (elliptic operators) | shipped |
| **McKean-Singer formula** (index = Str of heat kernel) | `03.09.20` (§Key-theorem + §Full-proof-set), `03.09.10`, `03.09.21` | shipped with proof |
| Local index theorem via **Getzler rescaling** (Ch. 4) | `03.09.20` (lines 236–244, 389) | shipped, full computation |
| **Mehler's formula** / harmonic-oscillator heat kernel | `03.09.20` (lines 391–397, full statement + use; correctly inline, not standalone) | shipped |
| $\widehat A$-genus density derivation | `03.09.20`, `03.06.04`, `03.06.15` (L-/$\widehat A$-/Todd genera) | shipped |
| Equivariant index / Atiyah-Bott Lefschetz (Ch. 6) | `03.09.21` (family/equivariant/Lefschetz), `03.08.10` (equivariant K-theory $K_G$, $R(G)$) | shipped |
| **Kirillov character formula** (Ch. 6) | `03.09.25` (shipped since first-pass) | full unit, coadjoint-orbit derivation |
| **Bismut superconnection** / family index (Ch. 8–9) | `03.09.23` (shipped since first-pass) | full unit |
| Family index bundle (Ch. 9) | `03.09.21`, `03.09.23` | shipped |
| **Eta invariant + APS index theorem** (Ch. 10) | `03.09.24` (shipped since first-pass) | full unit incl. Hurwitz-zeta worked example |
| **Mathai-Quillen formalism** / universal Thom form (Ch. 1.6 + Ch. 7 appx) | `03.09.26` (shipped since first-pass), `03.04.09` (Thom global angular form) | full unit |
| Atiyah-Bott / Berline-Vergne localisation *theorem* | `05.04.05` (stated as theorem, lines 415, 493; equivariant integration formula line 205) | theorem present (the *Cartan model itself* is Gap 2) |
| Duistermaat-Heckman localisation | `05.04.05` | shipped |
| Supersymmetric / path-integral view of local index | `03.09.20` (Alvarez-Gaumé/Witten, lines 425–429), `03.15.12` (Witten SUSY Morse pointer) | covered as deepening |
| AHSS / $K^*(M)$ connection | `03.13.04` | shipped (Cycle 6) |
| Chern character ring homomorphism | `03.06.18` | shipped |

**Bookkeeping note (unchanged, not a content gap):** the first-pass audit
flagged `docs/catalogs/FASTTRACK_BOOKLIST.md` row 3.29 mis-listing authors
as "Bismut, Ghys, Quillen" instead of "Berline, Getzler, Vergne". Still
recommended for a separate booklist edit; not touched here (hard rule).

---

**Summary:** 2 genuine gaps (`03.09.27` probabilistic heat kernel,
`03.09.28` Cartan-model equivariant de Rham cohomology); 22 candidate
topics verified COVERED. The book is now substantially at FT-equivalence
coverage after the first-pass Priority-1/2 units shipped.
