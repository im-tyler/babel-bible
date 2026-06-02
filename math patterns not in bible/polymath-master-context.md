# Polymath / BFN Calculator — Master Context & Build Bible

**Single canonical document.** Consolidates and supersedes:
`polymath-base-context-map.md` (v1), `polymath-base-context-map-v2.md` (v2), and
`polymath-sources-reference.md` (sources). Those three are now history — edit *this* file going forward.
Built from the podcast transcript, Robert Edward Grant's public site, the three source PDFs (read directly),
the live replica app's route tree, and the public Claude artifact. Captured 2026-06-01.

**Goal:** rebuild the "Polymath / BFN Calculator" — the front-end of Grant's *Codex Universalis Principia
Mathematica* framework — separating what is real standard math (dressed in invented names) from his own
codeable-but-unvalidated constructs, from numerology, from pure content. Detailed enough to hand to Claude Code.

**Reality tags:**
🟢 **BUILDABLE** — real/standard, fully specified, implement directly.
🟡 **HIS-RULE** — codeable from a stated rule, but his own construct, no outside validation.
🔴 **NOT-REAL** — false, post-hoc fit, unproven, or unspecifiable. Reproduce cosmetically at most; never assert.
⚪ **CONTENT** — text/data pages, no real computation. Trivial to build.

> **The one rule that governs the whole build:** *Label, don't assert.* Every 🟡/🔴 item ships wrapped as
> "per Grant's framework — not independently verified," never as established science.

---

## 0. The situation in one paragraph

The calculator is the public face of Grant's larger framework. A surprising amount is genuinely real,
standard math under custom names (🟢); a layer above is his invented-but-specified constructs (🟡); the
"constant derivations," prime/Riemann proofs, and physics mappings are post-hoc or false (🔴); and the
top layer (the "infrasonic / akashic field," the AI mystique) is not a buildable thing at all. The good
news for a rebuild: **he publishes the papers, one ships public-domain Python, a working public clone
exists, and the solids tool is already a public Claude artifact** — so this is real reverse-engineering,
not guesswork from a transcript.

---

## 1. Source inventory

| # | Source | URL / location | License & status |
|---|---|---|---|
| S1 | **Grant Projection Theorem** (PDF, Dec 2025) — the solid generator + Python | `robertedwardgrant.com/wp-content/uploads/2025/12/Grant_Projection_Theorem.FINAL2025.pdf` | **"Public Domain Release – Attribution Required"** → port the Python with credit |
| S2 | **Pythagorean Force Architecture** (PDF, Mar 2026, ~60 pp) — force table, rules, constants, app spec | `robertedwardgrant.com/wp-content/uploads/2026/03/Pythagorean-Force-ArchitectureMarch2026.pdf` | © but facts/formulas extractable |
| S3 | **Summary — Codex Universalis** (PDF, May 2025) — axioms, i=−1/√10 | `robertedwardgrant.com/wp-content/uploads/2025/05/Summary-Codex-Universalis.pdf` | The metaphysical spine (read in full) |
| S4 | **Grant Polytope generator** — public Claude artifact | `claude.ai/public/artifacts/6fd57c73-f1f7-44f5-98c4-7c7fc2e598b0` | Solids tool exists; blocks headless fetch — open in browser, View Source |
| S5 | **Live app** "POLYMATH / BFN Calculator" | `polymath-bfn.replit.app` | Public clone; route tree captured (§11). Blocks bots — view in browser |
| S6 | robertedwardgrant.com | — | Canonical paper list, books, courses |
| S7 | Podcast transcript (*Just Tap In*, ~Apr 2026) | (held) | Narration + first-pass triangle assignments (some later revised) |

> **PDF caveat:** all three PDFs are FlateDecode-compressed — `WebFetch` returns garbage; the **`Read`
> tool parses them directly** (use `pages:` ranges for S2). Local caches were saved this session under
> the transcript `tool-results/` dir; copy them into `math/` if you want them to survive the session.

**Books / framework names:** *Philomath* (2024), *Polymath: The Unity Harmonica Geometric Theory* (2025),
*Codex Universalis Principia Mathematica* (2025). Affiliation he uses: "The Institute of Unified
Mathematics, Irvine, CA." Title-page contact: `RG@RobertEdwardGrant.com`.

**Canonical paper list (each ≈ one calculator section):** Pythagorean Force Architecture · Periodic
Elemental Polyhedra Framework · Grant Projection Theorem · Geometric Unification of Nuclear Physics ·
Unity Harmonica (Geometric TOE) · Harmonic Transcendence / Dimensional Resonance of Language · Codex
Universalis Principia Mathematica · Resonance Reversal Mass Inversion · 24 Precepts of Universal Mind ·
Precise Temperament Tuning · Proof of the Riemann Hypothesis (+ Quasi-Prime Methodology) · A Novel
Theory of Everything.

**Out of scope:** Orion Architect (orionarchitect.io) — the gated AI product; *not* part of the calculator.

---

## 2. Naming map (his term → what it actually is)

The single most useful table for the build — most "new discoveries" are renamed standard objects.

| His term | Standard equivalent |
|---|---|
| Unit conic / "Holy grail shape" | The unit hyperbola x²−y²=1 (a branch of it) |
| Force triangle / Grant polytope | A Pythagorean triple |
| Harmonic solid | A polyhedron generated from a triple via his projection rule |
| Conic identities | Closed-form constant expressions (some are real Machin-like formulas) |
| Rapidity values / "6th dimension" | Rapidity (real relativistic arctanh(v/c)) repurposed as a coordinate |
| Metallic means | Standard metallic ratios, solutions of x²−nx−1=0 |
| New numbers (Fo/Theo, Ce, Kai) | Constructed constants ≈ 3.66, 6.33, 8.88 (§7) |
| BFN framework / χ (chi) | His "Beautiful-Numbers" closure identity, χ = 9.999̄ = 10 |
| Nine Generative Means | Nine real expressions in a,b,c (three nested similar triangles) |
| Infrasonic field / akashic layer / geometric inference engine | (no equivalent — metaphysical / marketing) |

---

## 3. The ontological stack — the spine everything hangs off 🟡

Authoritative version is **PFA Table 2**, which **supersedes the transcript** where they differ
(transcript had Weak = 8-15-17; the paper reassigns it). Each layer = a force = a triple = a point on the
unit hyperbola.

| θ (hyperbolic angle) | Layer | Triangle | Role |
|---|---|---|---|
| 0 | Consciousness | vertex (1,0) | observer |
| ln 2 ≈ 0.693 | Information/Energy | (3,4,5) | seed |
| 0.405 | Electromagnetism | (5,12,13) | light, chemistry |
| 0.511 | Gravity | (8,15,17) | spacetime curvature |
| 0.288 | Weak nuclear | (7,24,25) | decay/mixing |
| 0.223 | Time | (9,40,41) | temporal arrow |
| 0.182 | Strong nuclear | (11,60,61) | mass, binding |
| 0.118 | Dark energy | (13,84,85) | expansion |

Each triple maps to the unit-hyperbola point (c/b, a/b), which **always** satisfies x²−y²=1 because
(c²−a²)/b² = b²/b² = 1. **🟢 that identity is real.** The *assignment of forces* to these points is 🟡.

⚠️ **Two landmines to normalize in code:**
1. **f1/f2 are swapped between the two papers.** Grant Projection Theorem: f1 = c−a, f2 = c+a.
   Pythagorean Force Architecture: f1 = a+c, f2 = c−a. Same two quantities, opposite labels. In PFA,
   **f2 = c−a = 2n² = electron-shell capacity.** Pick one convention, document it.
2. **Force→triple assignment differs transcript vs paper** (transcript Weak=8-15-17 → paper's stack above).
   Also: the replica maps *Platonic solids* to forces (Tetra=Seed, Cube=Gravity, Octa=EM, Dodeca=Weak,
   Icosa=Strong), which contradicts the triple→force map. **Use the paper (Table 2); note the conflict in UI.**

---

## 4. The three construction rules 🟡

How every force triangle is generated from the (3,4,5) seed. All deterministic, simple, codeable.
🟢 as arithmetic; 🟡 as "this is how forces arise."

1. **Carry & Multiply:** (a,b,c) → (c, a·b, √(c²+(ab)²)). E.g. (3,4,5) → (5,12,13).
2. **Short-Leg Fusion:** two short legs aᵢ, aⱼ → (aᵢ+aⱼ, aᵢ·aⱼ, √…). E.g. 3,5 → (8,15,17) (his "gravity").
3. **Corridor Step:** (a,b,b+1) → (a+2, b+2a+2, b+2a+3). Walks the consecutive-leg family.

---

## 5. Core math — fully specified 🟢 / 🟡

### 5.1 Unit conic 🟡
Rule x²−y²=1, treated as "the metric of reality" with every constant sitting as a "step" on it. Hyperbola
is real 🟢; "all constants live on it at predictable positions" is framework 🟡. **Build:** plot it; build a
"Unit-Conic Catalog" page listing constants + claimed positions (**42 constants** per the replica — exact
list still to pull from the page/PFA appendix).

### 5.2 Pythagorean triples + consecutive-leg family 🟢
- **Standard (Euclid) generator:** for m>n>0, (m²−n², 2mn, m²+n²).
- **His "special" family** (consecutive leg & hypotenuse, c=b+1): **(a,b,c) = (2n+1, 2n²+2n, 2n²+2n+1)**
  - n=1→(3,4,5); n=2→(5,12,13); n=3→(7,24,25); n=4→(9,40,41); n=5→(11,60,61).
- **Factor rule:** c−a = **2n²**, c+a = **2(n+1)²** → sequence 2, 8, 18, 32, 50, 72.
- All correct. 2n² is the electron-shell capacity rule (🟢 algebra; 🟡 significance). **Build:** trivial generator + table.

### 5.3 Conic identities (constants) 🟢/🟡
- **Verified real:** π = 4·(arctan ½ + arctan ⅓) — genuine Machin-type identity.
- Many others claimed; treat each as 🟡 until checked. **Build a page that *computes* each expression to N
  digits** so correctness is self-evident.

### 5.4 Metallic means + "make any number golden" 🟢/🟡
- **Metallic means (real):** silver 1+√2, bronze (3+√13)/2, … solutions of x²−nx−1=0; each has the
  self-reciprocal-mantissa property. Live app gives the rapidity map **λₙ = e^arcsinh(n/2)**.
- **His "make every number golden" procedure** 🟡: halve it, square, add 1 (the monad), √, re-add the
  removed half, take reciprocal. Idiosyncratic but codeable exactly as stated.

### 5.5 The three "new numbers" / BFN identities 🟡
Internally consistent constructions — reproduce exactly with big-decimal:
- **∂ (Fo/Theo) = 5(√3 − 1) ≈ 3.6602540**
- **ω (Ce) = ∂²/10 + 5 ≈ 6.3397460**
- **∂ + ω = 10 = χ ("9.999̄")** — his "superposition of 9 and 10." Check: 10/ω − 1 = 1/√3 = ε∞ ≈ 0.57735.
- **Third number Kai ≈ 8.88** (tied to 888 / triquetra) — **construction still not cleanly stated** (residual gap; in the full Codex book, not the summary).
- High-precision calculator: he claims **320,000 digits** (live backend = C + GMP + MPFR; use `decimal.js`/`big.js` in JS).

### 5.6 Codex i redefinition 🔴 (specifiable as a toggle)
Codex replaces i=√−1 with **i := −1/√10 ≈ −0.316227766**, reinterpreting Euler's identity → e^(iπ)+1 ≈ 1.3703,
tied to α⁻¹ ≈ 137.036. Numerology (you can't redefine i and call paradoxes resolved) — build as a labeled
"alternative algebra" toggle, not as fact.

### 5.7 The −1/12 result 🟢 underlying / 🔴 interpretation
1+2+3+… "= −1/12" is real as ζ(−1) regularization. His "12 dimensions / inverse of the 12th" gloss is not
math. Build as an explainer; label the interpretation.

---

## 6. The constant "derivations" 🔴 — the crux, handle carefully

PFA claims to derive measured constants with "no free parameters." As stated:
- α⁻¹ = 137.036 via a formula using e^(−π/√10), 42, 360, φ ("three-term pipeline" on the live app).
- mp/me = 1836.15267 (a 6π⁵ + corrections expression).
- Newton's G "from two triangles."
- Dark-energy density Ω_Λ = 493/720; cosmological constant Λ ~ 10⁻¹²² with 122 = "nuclear vertex count."
- Planck-time mantissa from ∆θ, α, and 60/61.

**Honest status: these are post-hoc fits, not derivations.** Each formula starts from the known target and
assembles an expression from a large menu of adjustable pieces (which triangle parameter, which exponent,
π/φ/√10, powers of 10, integers like 42/360/7, plus "correction" terms). With that many knobs you can hit
any target to many digits. **"No free parameters" is false — the *choice of construction* is the parameter
space.** (mp/me ≈ 6π⁵ is a long-known recreational-math coincidence.) The **Wave Matrix of Constants**
(π, e, φ, √10 as "resonant mirrors," with √10 ≈ (π + 10/π)/2 ≈ 3.16235 vs true 3.16228 — a ~2×10⁻⁵
coincidence) is the same kind of near-miss. In the build these can be **displayed and computed** (they
evaluate to the right numbers by construction) but **must not be presented as predictions or proofs.**

---

## 7. Grant Projection Theorem — full algorithm 🟡

**Paper (S1) title:** *The Grant Projection Theorem: Complete Generation of 3D Polyhedral Structure from
2D Harmonic Right Triangles.* The generator for the "harmonic solids." Chain: **(a,b,c) → factors → V → k → (F,E).**

- **Nine Generative Means** (all real expressions in a,b,c): DHM = ab/c, DM = a, DQM = ac/b, HM = b²/c,
  GM = b, AM = c, QM = c²/b, LBM = b²/a, LGM = c√b. They contain three nested similar right triangles
  (T1·(c/b)=T2·(c/b)=T3) — that nesting is genuine algebra. 🟢
- **Vertex count:** V = a + 2b + c.
- **Face type:** k = 6 − (number of integers among a, b, c). 3 integers→triangles, 2→quads, 1→pentagons.
- **Faces / edges:** F = 2(V−2)/(k−2), E = kF/2.
- **Consecutive-leg family:** (a,b,c) = (2n+1, 2n²+2n, 2n²+2n+1); factors c−a = 2n², c+a = 2(n+1)²;
  V = 2(3n+1)(n+1). Table: n=1→(3,4,5),V=16,F=28,E=42; n=2→(5,12,13),V=42,F=80,E=120; etc.
- **Dual projections:** Convex (V = a+2b+c, E = 3V−6, F = 2(V−2)) vs **Stellated (V = 2c, E = b²,
  F = E−V+2)**. Same triangle, factor-swapped → "Alphahedron / Omegahedron." *(The live app's "Grant
  Projection = V=2c, E=b²" is the stellated path — both ship.)*
- **120-cell:** from the Kepler triangle (1, √φ, φ) — equivalently (φ⁻¹, 1, φ) — with inward shell radii
  φ⁻ᵏ; "600 tetrahedra = 20 faces × 6 shells × 5"; claimed 4D/3D volume ratio π²/2 ≈ 4.935. Kepler triangle
  is real (1+φ=φ²) 🟢; "the 120-cell is just the dodecahedron breathing inward / fourth coordinate = depth
  of recursion" is 🟡 (the standard 120-cell is a genuine 4-polytope).

⚠️ **Two honesty caveats to bake into UI copy (Grant confirms both in his own abstract):**
1. **Euler's formula is not "proven."** His abstract: V−E+F=2 is "not an external constraint but an
   automatic consequence of the generation." He *defines* F and E from V and k so it always holds — forced, not discovered.
2. **The "solids" aren't real polyhedra.** His own visualization code scatters V points on a Fibonacci/
   golden sphere and takes the convex hull. His code comment admits this preserves vertex counts but "true
   combinatorial connectivity requires additional face-type constraints" — so rendered shapes do **not**
   realize the claimed (V,E,F) topology; they're placeholders. The Platonic solids don't fall out
   (his Table: tetrahedron V=4 has "no integer solution"; (3,4,5) gives V=16, not a Platonic solid).

**Build gift:** S1 §11 (*Core Computation Module*, *Topological Visualization*) ships the full Python
(`GrantPolytope`, `HarmonicSolid` classes); §15.5 is the *Interactive Grant Polytope Generator* (= artifact
S4). **Public-domain with attribution → port directly to JS/Three.js** for an exact replica. Keep his
placeholder-topology caveat visible.

### Standard solids 🟢
Platonic (5), Archimedean (13), Catalan (13), Johnson (92). His "31 shapes" = 5+13+13. Render with Three.js
(use a current version — r128 lacks `OrbitControls`/`CapsuleGeometry`).

### Metatron's Cube 🟢 + dimensions-as-breath 🟡
- Metatron's Cube with embedded triangles: straightforward 2D/SVG.
- "Dimensions" model: 1D fold → 2D unfold → 3D projection → 4D motion → 5D recursion/"breath" → 12D.
  Build as parameterized geometry that "breathes" (recursive scaling). "Reality stops at 12D" is framework.

---

## 8. The application architecture 🟢/🟡 — the real build target

PFA describes the **"Periodic Elemental Polyhedra" app** concretely: **one self-contained HTML file,
~3,000 lines of JS, ~98 KB, exact rational arithmetic where possible, golden-spiral vertex generation for
the 3D renderer.** Seven tabs:

1. **Elements** — full periodic table; click an element → card with: Bohr diagram (9 concentric rings at
   the Nine-Means radii), electron config + subshell→mean table, predicted oxidation state, **spectral
   emission lines rendered as color + played as a musical chord** (optical frequencies dropped ~40 octaves
   into audible range), isotope-mass predictions, 3 spinning 3D polytopes (Platonic/Archimedean + convex +
   stellated Grant solid).
2. **Platonic Bridge** — Carbon-family H→C→Si→Ge→…→Pb with 5 spinning solids and "f2 rectification" jumps.
3. **Harmonic Solids** — all six corridor solids (convex + stellated), V/E/F tables, Nine Means, Omegahedron dual.
4. **Shells** — f2 = 2n² check (6/6), "magic numbers," orbital quantum numbers, Madelung theorem + threshold.
5. **Correspondences** — the 19 polyhedral matches, dual pairs, column differences.
6. **Oxidation** — triangle-wave oxidation-state predictions.
7. **Isotopes** — 108 isotopes by octave with mass predictions.

Most *rendering and data* is 🟢; the *claims attached* range 🟡→🔴.

---

## 9. Periodic-table mappings 🟡/🔴

- **Shell capacities:** f2 = 2n² = 2,8,18,32,50,72 = electron-shell capacities. Real identity lined up
  against the real 2n² rule. 🟢 algebra, 🟡 significance.
- **Madelung rule** from sorting the Nine Means (threshold ac² < b³, crosses at n=2): ordering claim is
  checkable, a neat construction. 🟡
- **"Magic numbers" 26, 50, 82, 122:** ⚠️ real nuclear magic numbers are 2, 8, 20, 28, 50, 82, 126. His 50
  and 82 match; 26≠28, 122≠126. He also conflates these with proton numbers (calls 26 "Fe"). 🔴 as stated.
- **118 elements = E−V = 144−26:** numeric coincidence with the current named-element count (which changes
  as new ones are synthesized). 🔴 significance.
- **Oxidation states as "triangle waves":** tent-function fits, partly real pattern-matching dressed as derivation. 🟡
- **Isotope masses via f0 = 60/61 contraction, "99.96% across 108 isotopes":** one parameter applied to the
  (real) semi-empirical mass formula; the SEMF already predicts masses well, so the "accuracy" is mostly
  the SEMF's, not the 60/61 factor's. 🟡/🔴.

---

## 10. Galaxies as macro-elements 🔴
PFA maps the Hubble galaxy sequence onto the periodic table via spiral pitch angle θ = arctan(a/b),
claiming r = −0.953 color–pitch correlation across 50 galaxies and that 100% of ~2 trillion galaxies map
onto the cascade. **Reality:** spiral pitch correlates loosely with galaxy color/type (real, known
astronomy), and spectra show element lines because galaxies *contain* elements — but "a galaxy *is*
element X" is a category error. Buildable as a spectral-line matcher + pitch-angle tool; the identity claim is 🔴.

---

## 11. Live app route tree (from S5 — `polymath-bfn.replit.app`) 🟢 capture

**11 top-level domains:** Overview · Mathematics · Geometry · Physics · Chemistry/Biology · Music · Art ·
Entrepreneurship · Philosophy · Consciousness · Wisdom.

- **Mathematics:** BFN Calculator · Constants · Mod-24 · FREGJ · Rapidity · CF Wave Numbers · TOL Unit ·
  Conic · Metallic Means · iHarmonic · π · Harmonic Collapse · Weights & Measures · Logarithms ·
  Linguistics · Gematria · Cryptography · RSA-ECDSA.
- **Geometry:** Right Triangle · Unit Hyperbola · Grant Projection · Dimensions · Sierpiński · Harmonic
  Solids · Feigenbaum · Dimensional Symmetry · Proportion · FOL · 3D Areas & Volumes · iHarmonic Plane · The Lens.

**Feature specs surfaced by the live nav:**
- BFN Super Calculator — arbitrary precision up to 320,000 digits via C + GMP + MPFR.
- Unit-Conic Constants — 42 constants as closed conic forms.
- Metallic Means — λₙ = e^arcsinh(n/2).
- Grant Projection — "V=2c, E=b²" (= stellated path).
- iHarmonic Prime Function — "exact prime-counting π(10ⁿ)"; Mod-24 Spoke Wheel — prime residue classifier. 🔴.
- Nuclear Mass Calculator — M(Z,N) using f₀ = 60/61.
- Grant α Theorem — "three-term pipeline." 🔴.
- Harmonic Collapse Visualizer — 𝔦 = −1/√10 dynamics.
- Sacred Breath Visualizer — YHWH → ∂/ω/χ.
- Perception Architecture — neural oscillations, IIT Φ-theory.
- **Master "equation" on the overview:** `((x²+y²)+1)((x²+y²)+1) = x²−y²` — "toroidal-hyperboloidal
  superposition at the Focal Ring (r=1)." Decorative (no real solutions as written). ⚪/🔴.
- Standard/buildable among the extras: RSA-ECDSA, Feigenbaum, Logarithms (multi-base e/2/10/φ/π/12/24/60),
  Sierpiński. Mostly-content extras: FREGJ, CF Wave Numbers, TOL Unit, FOL, The Lens, Linguistics, Gematria.

---

## 12. Codex Universalis layer (S3, read in full) ⚪/🔴 — the philosophical engine

- **i redefined as −1/√10 ≈ −0.316** (replacing √−1). e^(iπ)+1 ≈ 1.3703, tied to 1/α ≈ 137.036. 🔴 (numerology).
- **Codex Axiom I:** "There is only one force in the universe: Electricity." All else (magnetism, gravity,
  nuclear) are by-products of "the primary harmonic electric field — consciousness itself." 🔴/⚪
- **Quasi-Prime Methodology (QPM):** numbers indivisible by 2 or 3, built only from primes >3 or other
  quasi-primes; reciprocals have repeating cycles whose digits sum to 9 ("digital root-9 invariance,"
  "linked to the icositetragon and cuboctahedron"). Claimed "first musical proof of prime emergence and a
  new path toward resolving the Riemann Hypothesis." Digital-root-9 is real modular arithmetic 🟢; the RH
  framing is 🔴 (RH remains open and unproven).
- **Wave Matrix of Constants:** π, e, φ, √10 as "resonant mirrors"; √10 ≈ (π + 10/π)/2. 🔴.
- **Dimensions:** 4th = "Recursive Harmonic Motion" (not time); 5th = "Harmonic Inversion Field"; "RG Unit"
  replaces the Planck scale. 🔴/⚪
- **40 axioms.** Cited: I; XV (light from cos(iπ)=cosh π offset); XVI ("20,632.788 / 360 = the radian");
  XVII (complex plane collapses to real under i=(√10)⁻¹); **XL (final): "You are not in the Codex. You are
  the Codex, collapsed into form, remembering yourself through light."** ⚪ metaphysics.

---

## 13. Primes / Riemann 🔴 (not accepted)
He publishes a claimed "Proof of the Riemann Hypothesis" + "quasi-prime methodology," plus the transcript's
"predict every prime with zero variance." **Status:** RH is an open Millennium Problem; these are not
accepted; no zero-error prime generator exists. **Buildable parts:** real π(x) vs Li(x) plots, his
quasi-prime construction *as defined*, the "BFN rapidity spiral (51,135 turns)" and "5,133-prime rapidity
field" as visualizations — labeled as his framework, not a proof.

---

## 14. Music / tuning 🟢
A = 432 Hz; just-intonation intervals as ratios of triple legs (3:2, 4:3, 5:4). Plus the app's "spectral
chord" feature (optical → audible by octave reduction). Real and buildable (Tone.js).

---

## 15. Content / wisdom pages ⚪
24 Precepts of Universal Mind · Hero's Journey ("recursive codex") · Cosmic Clock · Avatar Principle ·
mystic/historical profiles · 12 hermetic principles · gene keys / human design / enneagram / numerology ·
secret societies · Etymology of Number · Language of Light. **Sacred sites + ley lines:** real map
(Leaflet/Mapbox) with site coords (Giza, Nazca, Angkor, Easter Island, Stirling, …) + user-drawable
great-circle lines; the "old equator shifted" overlay is content but the map mechanics are 🟢.

---

## 16. Science-mapping & pseudoscience pages 🔴 (cosmetic only)
- DNA geometry (dodeca/icosa, 12/24/36-strand) — biology: DNA is a 2-strand double helix. 🔴
- 12 states of water / solfeggio 396·528 Hz — pseudoscience. 🔴
- Maxwell–Gravity unification / "time as a force" — render his axis diagram; not physics. 🔴
- 36-strand DNA, solfeggio — 🔴.

---

## 17. The non-buildable layer 🔴
"Infrasonic / akashic field access," "geometric inference engine isomorphic to spacetime," "non-tokenized
storage in infrasonic fields," Orion Architect "resonating truth." Not specifiable operations — **build
everything except this; there is no magic to port.** (The transcript's "Claude" clip is just an LLM
generating agreeable narrative to leading prompts.)

---

## 18. Reality-tier summary

| Cluster | Tier | Verdict |
|---|---|---|
| Unit-hyperbola point identity; Pythagorean families; Nine Means nesting; π Machin formula; metallic means; 432 Hz music; element spectra/data; standard solids; ley-line map; RSA-ECDSA/Feigenbaum/logs | 🟢 | Real, standard, fully specified |
| Force→triple assignment; GPT solid algorithm; convex/stellated; consecutive-leg family; new numbers; Madelung-from-means; Kepler 120-cell reinterpretation; "make any number golden"; dimensions-breath | 🟡 | His own constructs — codeable, unvalidated |
| Constant "derivations" (α, mp/me, G, Λ); magic-number claim; 118=E−V; galaxy=element; Riemann "proof"; quasi-prime→RH; i=−1/√10; 36-strand DNA; solfeggio; water states; Maxwell-gravity | 🔴 | Post-hoc fits / false / unproven |
| All wisdom/axiom/sacred-site content | ⚪ | Pure content, trivially buildable |
| Infrasonic/AI "field access" | 🔴 | Not buildable at all |

---

## 19. Build plan for Claude Code

**Achievable because he's published the methods, the Python, and the app's structure and size.** Two of his
tools are literally a Claude artifact (S4) and a Replit app (S5).

**Stack:** Vite + React + TS; Three.js (current version, not r128); KaTeX; `decimal.js`/`big.js` for
high-precision calculators; Plotly/D3 for spirals & charts; Tone.js for 432 Hz + spectral chords; Leaflet
for ley lines.

**Repo shape:**
```
/src
  /pages        # one folder per calculator section (§5–§17)
  /math         # triple gen, conic, metallic means, new numbers, GPT projection
  /geometry     # Three.js solid builders (ported from the GPT paper, S1 §11)
  /data         # periodic table, NIST emission lines, isotope masses, sacred-site coords, 42-constant list
  /content      # MDX for all ⚪ wisdom pages
```

**Phasing:**
1. **Phase 1 (real core):** unit conic + 42-constant catalog (self-verifying — compute to N digits), triple
   generator + 3 construction rules, Nine Means, metallic means + new numbers (big-decimal), music ratios. All 🟢/🟡.
2. **Phase 2 (geometry):** port S1's public-domain Python (`GrantPolytope`/`HarmonicSolid`) → JS/Three.js;
   convex + stellated solids; standard solids (Platonic/Archimedean/Catalan/Johnson); Metatron; dimensions
   animation. Keep his placeholder-topology caveat visible.
3. **Phase 3 (mapping + content):** rebuild the 7-tab Periodic Elemental Polyhedra app (§8) with real
   datasets; spectral matcher; ley-line map; all content pages (§15).
4. **Label, don't assert:** wrap every 🔴/🟡 claim as "per Grant's framework / not independently verified,"
   especially the constant derivations and the Riemann/galaxy/DNA claims.

**Feed Claude Code:** this doc + the three PDFs (S1 for the Python, S2 for app spec/mappings, S3 for content).

**IP / ethics:** S1 Python is public-domain-with-attribution → **credit Grant.** Everything else: rebuild
original — don't lift his prose, branding ("Polymath," "Orion Architect"), rose logo, or sigil images.
Don't present any 🔴 item as established science to a third party.

---

## 20. Inconsistencies & residual gaps

| # | Item | Status |
|---|---|---|
| 1 | f1/f2 swapped between the two papers | Normalize in code (§3) |
| 2 | Force→triple assignment differs (transcript vs paper vs replica's Platonic map) | Use PFA Table 2; flag the conflict (§3) |
| 3 | "Magic numbers" 26/50/82/122 vs real 2/8/20/28/50/82/126 | Partial match only; label (§9) |
| 4 | Unit-Conic catalog — confirmed **42** constants, "closed conic forms" | Exact list still to pull from S5/PFA appendix |
| 5 | Third new number **Kai ≈ 8.88** construction | Still not cleanly specified (in full Codex book, not S3 summary) |
| 6 | Exact "rapidity" / "6th-dimension" coordinates he plots | Partial — S5 has λₙ=e^arcsinh(n/2); exact plotted coords loose |
| 7 | Live-site full page tree | ✅ Captured (§11) — refine by browsing S5 directly |

---

## 21. Provenance / changelog
- **v1** (`polymath-base-context-map.md`): transcript + light web. 6 open items.
- **v2** (`polymath-base-context-map-v2.md`): folded in the source PDFs + app architecture; superseded v1's
  force mapping; caught the f1/f2 swap; resolved the k-formula and app spec.
- **sources** (`polymath-sources-reference.md`): primary-source index; captured the GPT license verbatim,
  the full Codex text, and the live route tree (closed v2 gaps #4, #7).
- **this file** (`polymath-master-context.md`): all of the above merged into one canonical build bible.
  The other three are now history.
