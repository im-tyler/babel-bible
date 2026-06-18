# Babel Bible — Depth & Quality Audit (post-finalization)

*Performed 2026-06-17 after the finalization session that shipped +91 units
(corpus 2,392 → 2,483). This audit measures **quality and depth**, not just unit
counts. Read alongside `COMPREHENSIVE_AUDIT.md` (the 2026-06-15 structural audit)
and `FINALIZATION_PLAN.md`.*

---

## 0. Headline (verified measurements)

| Metric | Value | Verdict |
|---|---|---|
| Total units | 2,483 | healthy |
| Mean body words / unit | 5,825 | on target (spec: 5–9k) |
| Median body words | 5,828 | uniform; no bimodal thin/thick split |
| Units < 2,500 words | 228 (9%) | investigate — see §3 |
| Units > 12,000 words | 26 (1%) | investigate — see §4 |
| `validate_all.py` | **66,935 / 66,935** | green |
| `build_lenses.py` | clean, 0 dangling | green |

The corpus is mechanically healthy and uniformly deep. The issues are subtler than
counts reveal.

---

## 1. The dominant quality issue: citation debt

**98% of units (2,444 / 2,483) cite their sources via `TODO_REF` placeholders.**
13,273 reference entries are `source: TODO_REF`; 1,249 carry `pending: true`.

This is **by design** — the `reference/` archive is gitignored and absent during
autonomous production, so producers use `TODO_REF` as the validator's legacy escape
hatch. It passes the 27/27 gate. But it means:

- Every `[ref: TODO_REF AuthorYear]` inline cite renders as a footnote pointing at
  nothing resolveable. The citation panel is structurally present but inert.
- The "originator attribution" that the producer brief enforces is *naming* real
  originators (Atiyah-Singer 1963, Noether 1921, Kripke 1980, etc.) — the author/year
  *is* in the prose — but the source-link layer is unbuilt.
- This is the single largest gap between the curriculum's *formal* quality (27/27)
  and its *scholarly* quality (verifiable citations).

**Recommendation:** this is the highest-value quality work remaining. Two paths:
- **(a) Sourced-reference pass.** Acquire the ~13 highest-leverage sources already
  identified in `docs/catalogs/NEED_TO_SOURCE.md` (Lawson-Michelsohn, Milnor-Stasheff,
  Kobayashi-Nomizu, Hartshorne, Reed-Simon, etc.) into `reference/`, then run a
  citation-resolution pass that rewrites `TODO_REF` → resolved `source:` entries.
  Each acquisition resolves dozens to hundreds of units.
- **(b) Honest demotion.** Where a source will not be acquired, replace the
  `TODO_REF` with an explicit `pending: true` + `pointer:` to `NEED_TO_SOURCE.md`
  so the citation panel renders as "pending" rather than fake-resolved.

Either path is multi-session but tractable. The status quo — 98% placeholder — is
the one thing most worth changing for perceived quality.

---

## 2. Depth-floor status (§0 criterion 3)

**~175 chapters sit below the ≥3-unit floor** (excluding the three intentional
literacy surveys §26 / §49 / §50). Breakdown by cause:

- **~80 are 1-unit anchors shipped in the 2026-06-17 finalization session** — the
  new homes (§51-linguistics 7, §52-economics 6, §04 AG-advanced 5, §28 astronomy
  4, §16/§15 chemistry gaps, §29/§30/§34/§35 social-science/arts/health gaps).
  These are **substantive single units (~5–8k words each)**, not stubs. The ≥3 floor
  is a heuristic; many genuinely do not need padding.
- **~50 are mature-but-thin specialty chapters** (§08-stat-mech 1-unit chapters
  like `fluctuations`/`wick`/`path-integral`; §32 world-history era chapters; §33
  history-of-science 2-unit chapters; §36 media-literacy 2-unit). Some of these
  genuinely deserve more; others are appropriately concise.
- **~45 are 2-unit chapters** one unit short of the floor.

**Verdict:** the strict ≥3-everywhere criterion is **not the right quality target**.
It would mean ~290 more units, much of which is padding. A per-chapter judgment
("does this topic genuinely need more depth?") is the honest gate. The
finalization session already deepened the highest-value cases (the conspicuous
§32 breadth gap, the §04 AG advanced frontier, etc.).

**Recommendation:** retire the mechanical ≥3 floor in favor of the §1.4 per-chapter
judgement. Keep the floor as guidance for *survey* sections only.

---

## 3. The 228 sub-2,500-word units

Spot-checked: the bulk are legitimately short —
- The §26-statistics / §49-logic / §50-CS literacy-survey units (intentional)
- Essay units (`*.essays.*`)
- A handful of `Key concepts` stubs and exercise-pack units

A minority (~30–50) are genuinely thin and would benefit from deepening. These
cluster in §00-precalc (1-unit chapters like `02-set-and-function`, `04-inequalities`,
`09-coordinate-geom`, `10-conics`) and a few §02 / §08 specialty chapters.

**Recommendation:** a targeted DEEPEN pass on the §00-precalc thin chapters (the
on-ramp to the whole curriculum deserves solidity) and the ~30 genuinely-thin
non-survey units. ~40 units of work; high pedagogical value.

---

## 4. The 26 over-12,000-word units

These are mostly legitimate apex / high-density math units (e.g. characteristic-class,
gauge-theory, representation-theory units where the proof machinery is genuinely
long). Spot-checks show no bloat pattern. The longest (15.8k words) is within the
spec's "Master tier: no length limit."

**Verdict:** not a quality issue. Leave as-is.

---

## 5. Continuity metrics

- **74% of units** carry a `**Bridge.**` paragraph; **72%** carry `**Synthesis.**`.
- The ~26% without are the literacy surveys, the essay units, and the units where
  the Intermediate evidence section is a domain-specific heading (Key mechanism /
  Key argument / Case study) rather than "Key theorem with proof" — the
  Bridge/Synthesis convention is math-flavored and doesn't always transfer.

**Caveat the agent-produced units may mechanically satisfy.** The continuity
patterns ("builds toward", "appears again in", etc.) are validator-checked, so
parallel agents reliably include them — but mechanical inclusion is not the same
as genuine continuity. A `scripts/measure_continuity.py` run (per
`CONTINUITY_SCAFFOLD.md`) would give real density numbers; this audit did not run
it. **Recommendation:** run it; flag units where pattern-density is high but
backward-reference density is low (the "anthology mode" failure).

---

## 6. Section balance

Math-heavy (modern-geometry 242, algebraic-geometry 140, analysis 123) vs thin
humanities (the §22 chapters rhetoric/creative-writing/world-lit at 1 each — these
are the new chapters; §20 philosophy is now well-covered with 5 pillars + depth).
The two new sections (§51-linguistics 7, §52-economics 6) are credible.

**Real thin spots deserving attention:**
- §00-precalc on-ramp (see §3)
- §22-language new chapters (rhetoric/creative-writing/world-lit each want a 2nd unit)
- §33-history-of-science (uniformly 2 → 3 would lift the whole section)
- §36-media-literacy (uniformly 2 → 3)

---

## 7. What's genuinely strong (don't break these)

- **Math spine (§01–§08, §37–§47):** world-class depth. The graduate math-phys
  track (§03-modern-geometry 242 units) is exceptional.
- **The three new sections (§51, §52, §48-riemannian):** structurally complete,
  all 27/27, peer-calibrated. The §01-foundations algebra home — the #1 audit gap
  at session start — is now closed with 4 anchors.
- **§20-philosophy:** all 5 missing pillars shipped + metaphysics depth.
- **Mechanical health:** zero validator failures; build renders; lenses resolve.

---

## 8. Prioritized recommendations

In order of value-per-effort:

1. **Citation-resolution pass** (§1). The single biggest perceived-quality lever.
   Start with the ~13 highest-leverage source acquisitions in `NEED_TO_SOURCE.md`.
2. **§00-precalc deepening** (§3). The curriculum's on-ramp; ~10 units of high
   pedagogical value.
3. **Run `measure_continuity.py`** (§5). Detect anthology-mode failures the
   validator can't.
4. **Lift §33-history-of-science and §36-media-literacy from 2→3** (§6). ~14 small
   units, completes two whole sections.
5. **§22-language new-chapter depth** (rhetoric/creative-writing/world-lit × 1
   more each). 3 units.
6. **Retire the mechanical ≥3 floor** as a quality target (§2) — replace with
   per-chapter judgment.

Items 1–5 together are ~50–80 units of *targeted* work — substantially less than
the ~290 the strict floor implies, and almost all of it higher-value than generic
padding.

---

## 9. Honest verdict

The curriculum is **substantively complete and mechanically excellent**. The
finalization session closed every major structural and coverage gap. What remains
is a citation-resolution campaign (perceived quality), a handful of targeted
depth fills (pedagogical quality), and a continuity audit (integrative quality).
None of it is structural debt; all of it is refinement.

The project can ship v1 in its current state with honest disclosure of the
citation-debt caveat. Items 1–5 above are the path from "ship" to "definitive."

---

*Audit dated 2026-06-17. Re-run `validate_all.py`, `build_lenses.py`, and the
measurement script in `FINALIZATION_PLAN.md` to refresh numbers after future work.*
