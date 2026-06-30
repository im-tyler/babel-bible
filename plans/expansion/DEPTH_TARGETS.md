# Babel Bible — Depth-Fill Target Triage (2026-06-30)

Authoritative list of which thin chapters actually need depth fills vs which
are fine as a single survey-anchor. Supersedes the "fill everything" approach
implied by the thin-chapter count alone.

## Rubric

A thin chapter (≤2 shipped units) needs a depth fill when at least one holds:

- **(a) Core canon of a major discipline.** One survey genuinely cannot cover
  med-school organ systems, clinical psych subdisciplines, the major artistic
  movements, named earth-science / astronomy subdisciplines, the central
  philosophical subdisciplines, or the core organic / inorganic reaction classes.
- **(b) Multi-perspective topic.** A major war has military / social / economic
  / diplomatic angles; a major scientific revolution has multiple key figures
  and decades of historiography.
- **(c) Survey-anchor deferral.** The shipped unit's title contains
  "survey" / "foundations" / "introduction" / "overview" — explicitly a single
  angle, not the canon.

Skip the depth fill when:

- **K-12 / pre-college** (§00-precalc) — Khan Academy, standard textbooks;
  one unit per topic is more than sufficient.
- **Specialist subdisciplines** where one good survey captures the field
  (cross-cultural psych, I-O psych, hydrology, applied anthropology, etc.).
- **Speculative / emerging fields** where one unit captures the state
  (future-medicine).
- **Topics already covered by adjacent chapters** (biological-anthropology ↔ §19
  eco-evo; digital-literacy ↔ §50 computer-science).
- **Narrow specialist math/physics niches** at the grad level (most thin
  chapters in §02-analysis, §03-modern-geometry, §04-AG, §21-ANT, §41-cat,
  §42-logic, §43-numerical — already deep where it matters).

## Section-level verdicts (with thin-chapter counts as of 2026-06-30)

### HIGH-LEVERAGE (88 thin chapters — fill all)

| Section | Thin | Why |
|---|---|---|
| 13-gr-cosmology | 1 | GR foundational chapters (equivalence / curvature / cosmology) are core grad-phys |
| 16-inorgchem | 9 | Core inorganic canon (organometallic, solid-state, catalysis) |
| 18-organismal-bio | 12 | Med-school organ systems — every 1u chapter (respiratory, digestive, endocrine, renal, reproductive, immunology, development, nervous) is core canon |
| 20-philosophy | 12 | Major subdisciplines (epistemology, phil-of-physics / biology / science / mind, consciousness) |
| 27-earth-science | 10 | Core earth-sci (plate-tectonics, minerals-rocks, atmosphere-weather, oceanography, earth-history) |
| 28-astronomy | 10 | Core astro (solar-system, stars, galaxies, cosmology, exoplanets, ISM, high-energy) |
| 29-psychology | 14 | Clinical / cognitive psych canon (learning-memory, cognition, disorders, therapy, development, social, personality, motivation-emotion) |
| 34-music-art | 10 | Arts canon (music-fundamentals, music-history, art-history, film-photography) |
| 35-health-medicine | 10 | Clinical core (infectious-disease, chronic, nutrition, mental, pharmacology) |

### MED-LEVERAGE (94 thin chapters — selective fill)

| Section | Thin | Verdict |
|---|---|---|
| 15-orgchem | 15 | Fill canon (aromatic, organometallic-synth, spectroscopy); skip specialist (enzyme-mech, natural-products, polymers) |
| 17-mol-cell-bio | 9 | Most chapters already at 2u; fill remaining thin ones (mol-genetics, immunology, signaling) |
| 19-eco-evo-bio | 14 | Some thin (mendelian, speciation, drift, macroevolution) deserve one more; others (biogeography, coevolution) fine |
| 30-sociology | 10 | Fill core (culture, socialization, stratification, institutions); skip specialist (urbanization, globalization) |
| 32-world-history | 26 | Mostly already at 2u; remaining thin are smaller topics (prehistory, indus-valley) — selective |
| 33-history-of-science | 8 | Fill major revolutions (industrial, relativity-quantum, genetics); skip specialist (digital, contemporary) |
| 51-linguistics | 7 | New section; subdisciplines (phonology, morphology, syntax) could use depth |
| 52-economics | 5 | New section; micro / macro / econometrics depth |

Estimated MED-LEVERAGE fills: ~30-40 units (not all 94).

### LOW-LEVERAGE (82 thin chapters — SKIP)

All §00-precalc, all specialist grad-math/physics (§01, §02, §03, §04, §05, §06,
§07, §08, §21, §24, §37, §38, §39, §41, §42, §43, §46, §48), all §22-language
(ELA pedagogy), §31-anthropology specialist subfields, §36-media-literacy,
§11-stat-mech-physics, §12-quantum specialist chapters, §23-world-economics-essays.

## Total queue

- HIGH-LEVERAGE: ~88 units (one per thin chapter)
- MED-LEVERAGE: ~30-40 units (selective)
- LOW-LEVERAGE: skip (82 chapters deferred indefinitely)

**Effective queue: ~120 units ≈ 30 waves at 4/wave.** Down from the
indiscriminate ~264 chapters / ~65 waves.

## Operating rule

When picking the next wave's topics:

1. Pull from HIGH-LEVERAGE first; only fall through to MED when HIGH is drained
   for that session's disjoint-section slice.
2. Pick specific named niches within each chapter (use `check_duplicate.py`).
3. Maintain the disjoint-sections-per-wave rule (parallel-producer pattern).
4. Skip LOW-LEVERAGE entirely; if asked, the answer is "skip per DEPTH_TARGETS.md."
