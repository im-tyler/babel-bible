# Codex — Fast Track Coverage Roadmap

Drafted 2026-05-17. Successor to the ad-hoc batch plans
(`WAVE_3_PLAN.md`, `WAVE_4_PLAN.md`). Defines the **forward push** from
the current ~14% audited / ~12% unit-touched state toward Fast Track
equivalence-completeness on all 93 books.

Read alongside:
- `docs/catalogs/FASTTRACK_BOOKLIST.md` — canonical list of 93 books.
- `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` — what "equivalence-covered" means.
- `manifests/production/plan.json` — live state of audits and units.

---

## §1 Where we are (snapshot, 2026-05-17)

- **Total Fast Track books:** 93 (4 prereq + 21 §1 + 20 §2 + 48 §3).
- **Books with a plan stub in `plans/fasttrack/`:** 14
  (prereqs Lang + Apostol I/II; §1.04 Ahlfors, §1.05 Brown, §1.05a
  Brown-Higgins-Sivera, §1.17 Bott-Tu, §3.21 Hartshorne, §3.35 Lawson-
  Michelsohn; plus four substitute/adjacent: Arnold *Math Methods*, Cannas
  da Silva *Symplectic*, Forster *Riemann Surfaces*, Hatcher *Algebraic
  Topology*).
- **Books with shipped Codex units (source_audits in plan.json):** 11.
- **Total shipped units:** 313 across 9 sections (00–08).
- **Books not yet audited:** 79 of 93.

**Coverage rate by section** (rough — counts shipped-units density vs FT
expectation):

| Section | FT books | Plans drafted | Units shipped | State |
|---|---|---|---|---|
| 0 Prereqs | 4 | 3 (Arnold ODE missing) | 7 (precalc) + indirect | Light coverage |
| 1 Fundamental Mechanics/Geom | 21 | 5 (Ahlfors, Brown×2, Bott-Tu, +Arnold MM substitute) | ~150 (analysis, mod-geom, symplectic) | Concentrated; gaps in physics texts (Landau Mech / Classical Fields) |
| 2 Quantum & Stat Phys | 20 | 0 | ~22 (stat-mech section only, no QM/QFT) | **Empty** — single largest gap |
| 3 Modern Geom / Alg Top / Foundations | 48 | 6 (Hartshorne, Lawson-Michelsohn, Hatcher substitute, Cannas substitute, Donaldson + Forster Riemann Surfaces) | ~134 (algebraic geometry, rep theory, parts of modern geometry) | Patchy — strong on alg-geom/rep-theory, weak on Milnor track, K-theory, Serre track, Penrose-Rindler |

The single most consequential gap is **Section 2** (Quantum & Stat Phys):
20 books, zero plan stubs, and the stat-mech units that exist are not
anchored against any specific Section 2 text.

---

## §2 Strategy: two tracks running in parallel

A book moves through these stages:

```
unaudited → plan-stub (P0/P1-lite) → punch-list units written (P3) → equivalence-covered (P4)
                          ~1 day                     ~3 hr/unit, 10-30 units                    ~1 day verification
```

The cost asymmetry matters. A **plan stub** is 1 day. A **full unit set**
for one book is 30–90 hours of focused production. Therefore:

- **Track A (cheap, fast):** drive every FT book to plan-stub state. 79
  books × 1 day = 79 working days of audit work. This is the *coverage
  map*. Without plan stubs we are flying blind on what units are needed.
- **Track B (expensive, slow):** turn shipped plan stubs into shipped units,
  one book at a time. This is where the actual learning content lives.

The two tracks proceed in parallel, but Track A *must lead* Track B by at
least 5–10 books so that production has visibility into what comes next.

---

## §3 Wave 5 — next 10 audits (Track A)

Recommended ordering for the next 10 plan stubs to write. Criteria:

1. **Section 2 unblock** (currently 0 plans for the whole quantum section).
2. **Free / author-hosted PDFs** (no acquisition friction).
3. **Prereq position** (unlock downstream Codex chapters).

| # | FT entry | Book | Author | Source | Why now |
|---|---|---|---|---|---|
| 1 | 2.02 | Quantum Theory, Groups and Representations | Peter Woit | **FREE** (Columbia) | Section 2 gateway. Bridges rep theory (3.11/3.13) to QM. PDF in `reference/fasttrack-texts/02-quantum-stat/`. |
| 2 | 2.03 | QFT Lecture Notes | Sourav Chatterjee | **FREE** (Stanford) | Cheapest path to a Section 2 QFT plan; short, self-contained. |
| 3 | 2.01 | Quantum Mechanics: Non-Relativistic Theory | Landau, Lifshitz | BUY | Anchors all of Section 2. Companion to 2.02. |
| 4 | 2.10 | Statistical Physics 1 | Landau, Lifshitz | BUY | Anchors the existing `08-stat-mech/` units retroactively. Highest leverage in §2 because we already have ~22 stat-mech units that need a book to map against. |
| 5 | 0.4 | Ordinary Differential Equations | Vladimir Arnold | BUY | Last missing prereq stub. Closes Section 0. |
| 6 | 1.02 | Mechanics | Landau, Lifshitz | BUY | Foundational Section 1 physics text; already in `books_unaudited`. |
| 7 | 1.03 | Classical Theory of Fields | Landau, Lifshitz | BUY | Bridges Section 1 → Section 2 via SR/EM/GR. |
| 8 | 3.38 | A Concise Course in Algebraic Topology | J. Peter May | **FREE** (UChicago) | Currently substituted by Hatcher; needs canonical plan since FT explicitly chooses May. |
| 9 | 3.40 | Simplicial Objects in Algebraic Topology | J. Peter May | **FREE** (UChicago) | Companion to 3.38; PDF already in `reference/fasttrack-texts/03-modern-geometry/`. |
| 10 | 3.42 | Complex Cobordism and Stable Homotopy Groups of Spheres | Doug Ravenel | **FREE** (Green Book) | Master-tier connective unit between Section 3 algebraic topology and higher-categorical material. |

**Wave 5 deliverable:** 10 new files under `plans/fasttrack/`. Updates to
`manifests/production/plan.json` `audits_done` (13 → 23) and
`books_unaudited` (48 → 38). Section 2 coverage goes from 0/20 to 4/20
plans.

---

## §4 Wave 6 — next 10 audits after Wave 5

Sequenced to deepen Section 2 and unblock Section 3 gateways.

| # | FT entry | Book | Author | Source | Why |
|---|---|---|---|---|---|
| 1 | 2.04–2.09 | Generalized Functions Vols 1–6 | Gel'fand, Vilenkin | BUY | Treat as one combined audit; 6 books, one plan with per-volume sections. Foundational for distributions in QM/QFT. |
| 2 | 2.17 | The Quantum Theory of Fields Vol. 1 | Weinberg | BUY | Anchors QFT. Foundations only — Vol 2/3 are later waves. |
| 3 | 3.01 | Algebra | Serge Lang | BUY | Foundational §3 text; touches half the §3 chapters. |
| 4 | 3.03 | Morse Theory | John Milnor | BUY (archives free) | Anchors `03-modern-geometry/` Morse track; pairs with our existing units. |
| 5 | 3.08 | Characteristic Classes | Milnor, Stasheff | BUY | Currently unanchored despite Codex having `06-characteristic-classes/`. |
| 6 | 3.10 | K Theory | Michael Atiyah | BUY | Codex has `08-k-theory/` (3 units); needs canonical book mapping. |
| 7 | 3.11 | Representation Theory: A First Course | Fulton, Harris | BUY | Anchors `07-representation-theory/` (26 units, currently unanchored). |
| 8 | 3.18 | Foundations of Differential Geometry Vol 1 | Kobayashi, Nomizu | BUY | Anchors `02-manifolds/`, `03-lie/`, `05-bundles/`. |
| 9 | 3.20 | Geometry of Yang-Mills Fields | Michael Atiyah | BUY | Anchors `07-gauge-theory/`. |
| 10 | 3.36 | Spinors and Space-Time Vol 1 | Penrose, Rindler | BUY | Companion to shipped Lawson-Michelsohn punch-list. |

**Wave 6 deliverable:** 10 new files (counting Gel'fand-Vilenkin as one
combined audit). `audits_done` (23 → 33). Section 2 → 11/20, Section 3 →
~14/48.

---

## §5 Waves 7–10 — finish Track A (everything else, ~10 books per wave)

After Wave 6 the remaining ~50 books split roughly:

- **Wave 7:** §3 Serre track (3.12, 3.13, 3.14, 3.15), Hirzebruch (3.25, 3.26),
  Voisin (3.27), Helgason (3.17), Kobayashi-Nomizu Vol 2 (3.19).
- **Wave 8:** §3 moduli/geometry of curves (3.22, 3.30, 3.31, 3.32, 3.33),
  Penrose-Rindler Vol 2 (3.37), May-Ponto (3.39), Goerss-Jardine (3.41).
- **Wave 9:** §3 endgame (3.43 Deligne et al, 3.44 DeWitt, 3.45 Gérard,
  3.47 Brylinski, 3.48 Besse) + §2 endgame (2.11 Souriau, 2.12 Baxter,
  2.13/2.14 Itzykson-Drouffe, 2.20 Landau QED).
- **Wave 10:** §1 residual (1.06 Ahlfors-Sario, 1.08/1.09 Mackenzie ×2,
  1.10/1.14/1.15 Sternberg ×3, 1.11 Arnold-Dubrovin Symplectic, 1.12
  Arnold Hydrodynamics, 1.13 Whitney, 1.18 Shifrin, 1.19 Griffiths-Morgan,
  1.20 D. Arnold FEEC).

**Total Track A budget:** 79 audits ÷ 10 per wave = 8 waves at ~1 working
week per wave = ~2 working months sustained, or ~4 months at half-pace.
End state: 93/93 plan stubs in `plans/fasttrack/`, full picture of what
production must produce.

---

## §6 Track B — production scheduling

Once Track A is N books ahead, production proceeds book-by-book according
to the priority-1 punch-lists in each plan stub. The natural production
order (driven by prereq DAG, not by FT numbering) is:

1. **Brown 1.05 priority-1** (7 units, ~21 hr). Unblocks Brown 1.05a NAT
   and most of `03.12-homotopy/`.
2. **Brown 1.05a priority-1** (5 units, ~17 hr). Higher-dim algebraic
   topology. Depends on (1).
3. **Bott-Tu priority-1** (punch-list count 0 — already shipped). Skip.
4. **Hartshorne priority-1** (12 units). Codex already has 37 alg-geom
   units; Hartshorne audit identified specific gaps.
5. **Apostol Vol I + Vol II priority-1** (18+13 units). Anchors §0 prereqs.
6. **Lang Basic Math priority-1** (22 units). Anchors §0.1.
7. **Wave 5 audits' priority-1 sets** (Woit, Chatterjee, Landau ×3, Arnold ODE,
   May ×2, Ravenel) — Track B unlocks once their stubs ship.

**Sustained pace.** With one operator weaving + one production agent
shipping ~2 units per day, Track B clears ~50 units per week. The full
~1500 units needed for FT equivalence (≈ 16 units per book × 93 books,
minus overlap) clears in ~30 weeks of sustained work, or ~14–18 months
at realistic 50% capacity.

---

## §7 Milestones and acceptance

- **M1 (end of Wave 5):** Section 2 has 4 plan stubs; total stubs 24/93
  (26%).
- **M2 (end of Wave 6):** Total stubs 34/93 (37%). Every Codex section
  (07, 08 especially) has an anchoring §2 or §3 book audited.
- **M3 (end of Wave 10):** **All 93 books plan-stubbed.** This is the
  coverage-map milestone — from here, every unit Codex produces can be
  justified by exactly which FT punch-list line it closes.
- **M4 (Track B at 50%):** Half of the priority-1 punch-list units across
  the corpus shipped. Estimated mid-2027 at sustained pace.
- **M5 (equivalence-complete):** All books at ≥95% theorem-layer coverage
  per `FASTTRACK_EQUIVALENCE_PLAN.md` §3.4. Estimated late-2027 to mid-2028.

---

## §8 Risks and mitigations

| Risk | Mitigation |
|---|---|
| Track A audits drift away from FT canonical books and become substitute-text studies (as happened with Cannas, Forster, Hatcher). | Each plan stub must declare its FT entry # in the title line. The 4 existing substitute-text plans should be renamed to mark them as deepenings, and a *canonical* plan for the FT-listed book should still be written. |
| Section 2 punch-lists are massive (physics texts have hundreds of named results). | Treat each Section 2 book as a multi-wave production target. Don't try to ship a Landau-Lifshitz priority-1 set in one batch. |
| Sourcing friction on BUY-only books (most of §1/§2 physics texts, all of §3 endgame). | Wave 5 deliberately prioritizes FREE texts. Resolve BUY sourcing in parallel — library access, used-book acquisition — so it doesn't block Wave 6+ audits. |
| Plan-stub format drift across batches. | All plan stubs follow the `brown-topology-and-groupoids.md` template (§1 What the book is for / §2 Coverage table / §3 Punch-list / §4 Implementation / §5 What this plan does NOT cover / §6 Acceptance criteria). The Brown-Higgins-Sivera plan added 2026-05-17 is the most recent reference template. |

---

## §9 Next concrete action

Pick a Wave 5 book and ship its plan stub:

- **Lowest friction:** §2.03 Chatterjee QFT — free PDF already in
  `reference/fasttrack-texts/02-quantum-stat/`, short text, opens Section 2.
- **Highest leverage:** §2.10 Landau Stat Phys 1 — retroactively anchors
  the existing 22 stat-mech units, instantly closes coverage on one whole
  Codex section.

Recommendation: ship **Chatterjee first** (lowest cost to validate the
Wave 5 cadence), then **Landau Stat Phys 1** second (highest leverage
once cadence is proven).
