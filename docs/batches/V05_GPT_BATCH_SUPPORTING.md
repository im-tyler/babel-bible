# Codex v0.5 — Supporting Units batch — gpt-codex assignment

This is your third v0.5 batch, after Strands B (Symplectic) and E (Statistical field theory) — both shipped clean. This batch is *supporting units* beneath the v0.5 apex strands. Concurrent with claude, who is producing Strand A's 22 supporting units plus Strand D's 07.01/07.02/07.05 supporting (10 units) — disjoint chapter directories, no collision risk.

**Your half: 30 supporting units** = all of Strand C (18) + Strand D's Lie-algebraic and compact-Lie-group chapters (12). At your usual ~2–5 min/unit cadence, this closes in 2–3 hours.

## Working directory

/Users/tyler/Documents/proj rn/codex

## Read first

1. **`docs/plans/V05_SUPPORTING_UNITS_PLAN.md`** — the master scaffold. Every unit below has its originator citation and modern textbook anchor there. Read it before you produce any unit.
2. `docs/plans/CURRICULUM_V0_5_PLAN.md` — overall v0.5 framing.
3. `docs/catalogs/FASTTRACK_BOOKLIST.md` — Fast Track parity reference. The Master-tier anchors below pull from this list whenever the textbook is on it.
4. `docs/specs/UNIT_SPEC.md`, `docs/specs/QUALITY_RUBRIC.md` — frontmatter and tier markers; 27-point validator + §M Master prose standard.
5. `docs/catalogs/CONCEPT_CATALOG.md` — namespaces in use: `complex-analysis.<x>` for Strand C, `rep-theory.<x>` for Strand D.
6. **Templates** — read at least one of these before each strand:
   - `content/06-riemann-surfaces/03-riemann-surfaces/06.03.01-riemann-surface.md` (Strand C apex, set the tone)
   - `content/07-representation-theory/04-classification/07.04.01-cartan-weyl-classification.md` (Strand D apex, includes Killing/Cartan/Weyl genius-prose context)

## Genius-prose principle (load-bearing)

Per Tyler's directive: *"convey the intelligence of writing from the original geniuses who conceived the work."* Master-tier prose for each unit must quote, paraphrase, or contextualise the original conception, not only the modern synthesis. The `Originator` column below is **not decorative** — it is the conceptual anchor for the Historical & philosophical context section and informs the framing of the formal-definition section. Where the original paper is readable in 2026 (Cauchy 1825, Riemann 1851/1857, Cartan 1894, Hodge 1941, Frobenius 1896, Weyl 1925, Jacobi 1828), mine its prose.

## Production queue — Strand C (18 units)

Place units in `content/06-riemann-surfaces/<chapter>/<id>-<slug>.md`. Concept-catalog namespace `complex-analysis.<x>`.

| # | Unit ID | Title | Originator | Modern anchor |
|---|---|---|---|---|
| 1 | `06.01.05` | Meromorphic function | Riemann 1851 *Grundlagen* | Ahlfors §4; Forster §1 |
| 2 | `06.01.02` | Cauchy integral formula | Cauchy 1825 *Mémoire sur les intégrales définies prises entre des limites imaginaires* | Ahlfors §4 (Fast Track 1.04) |
| 3 | `06.01.03` | Residue theorem | Cauchy 1826 | Ahlfors §4–5 |
| 4 | `06.01.04` | Analytic continuation | Weierstrass 1841– | Ahlfors §8; Conway Ch IX |
| 5 | `06.01.06` | Riemann mapping theorem | Riemann 1851 (statement); Koebe 1907 (proof) | Ahlfors §6; Stein-Shakarchi Vol II §8 |
| 6 | `06.02.01` | Branch point and ramification | Riemann 1851 dissertation | Forster §1; Donaldson Ch 1 (Fast Track 1.07) |
| 7 | `06.03.02` | Genus of a Riemann surface | Riemann 1857 *Theorie der Abelschen Functionen* | Forster §16; Donaldson Ch 3 |
| 8 | `06.03.03` | Uniformization theorem | Koebe 1907; Poincaré 1907 | Forster §IV–V; Donaldson Ch 6; Ahlfors-Sario (Fast Track 1.06) |
| 9 | `06.05.01` | Divisor on a Riemann surface | Riemann 1857 (implicit); Klein 1882 | Forster §16; Miranda Ch IV; Farkas-Kra Ch III |
| 10 | `06.05.02` | Holomorphic line bundle on a Riemann surface | Cartan-Serre 1953–55 | Forster §29; Donaldson Ch 8 |
| 11 | `06.05.03` | Riemann-Hurwitz formula | Hurwitz 1891 *Über Riemann'sche Flächen mit gegebenen Verzweigungspunkten* | Forster §17; Miranda Ch II |
| 12 | `06.06.01` | Holomorphic 1-form / abelian differential | Riemann 1857; Klein 1882 *Über Riemann's Theorie der algebraischen Functionen* | Forster §17; Farkas-Kra Ch II; Springer |
| 13 | `06.06.02` | Period matrix | Riemann 1857 (introduces period relations) | Farkas-Kra Ch III; Griffiths-Harris Ch 2 |
| 14 | `06.06.03` | Jacobian variety | Jacobi 1829 (elliptic); Riemann 1857 (general); Weierstrass | Mumford *Curves and their Jacobians*; Farkas-Kra Ch VI; Birkenhake-Lange |
| 15 | `06.06.04` | Abel-Jacobi map | Abel 1826 *Mémoire sur une propriété générale*; Jacobi 1832 | Mumford; Griffiths-Harris Ch 2; Forster §21 |
| 16 | `06.06.05` | Theta function | Jacobi 1828 *Fundamenta Nova*; Riemann 1866 (theta with characteristics) | Mumford *Tata Lectures on Theta* I–III; Farkas-Kra Ch VI; Igusa |
| 17 | `06.07.01` | Holomorphic functions of several variables | Hartogs 1906 | Krantz (Fast Track 3.23); Gunning-Rossi (Fast Track 3.24) |
| 18 | `06.07.02` | Hartogs phenomenon | Hartogs 1906 *Zur Theorie der analytischen Functionen mehrerer unabhängiger Veränderlicher* | Krantz; Hörmander |

## Production queue — Strand D Lie-algebraic + compact (12 units)

Place units in `content/07-representation-theory/<chapter>/<id>-<slug>.md`. Concept-catalog namespace `rep-theory.<x>`. Chapter directories `06-lie-algebraic/` and `07-compact-lie/` are new — create them.

| # | Unit ID | Title | Originator | Modern anchor |
|---|---|---|---|---|
| 19 | `07.06.01` | Lie algebra representation | Cartan 1894 *Sur la structure des groupes de transformations finis et continus* | Humphreys §6; Fulton-Harris §9 (Fast Track 3.11) |
| 20 | `07.06.02` | Universal enveloping algebra | Poincaré 1900; Birkhoff 1937; Witt 1937 (PBW theorem) | Humphreys §17; Dixmier *Enveloping Algebras*; Bourbaki Ch I |
| 21 | `07.06.03` | Root system | Killing 1888–90 *Die Zusammensetzung der stetigen endlichen Transformationsgruppen* I–IV; Cartan 1894 | Bourbaki Ch VI (Fast Track 3.12-anchor); Humphreys §8–10; Serre *Complex Semisimple Lie Algebras* (Fast Track 3.12) |
| 22 | `07.06.04` | Weyl group | Weyl 1925–26 *Theorie der Darstellung kontinuierlicher halb-einfacher Gruppen* (the four landmark papers) | Bourbaki Ch VI; Humphreys §10; Hiller *Geometry of Coxeter Groups* |
| 23 | `07.06.05` | Dynkin diagram | Eugene Dynkin 1947 *Classification of simple Lie algebras* | Humphreys §11; Bourbaki Ch VI |
| 24 | `07.06.06` | Verma module | Daya-Nand Verma 1968 (PhD thesis) | Humphreys *Representations of Semisimple Lie Algebras in the BGG Category O*; Dixmier; Knapp Ch V |
| 25 | `07.06.07` | Weyl character formula | Weyl 1925–26 | Fulton-Harris §24 (Fast Track 3.11); Humphreys §24; Knapp Ch V |
| 26 | `07.06.08` | Weyl dimension formula | Weyl 1925 | Fulton-Harris §24 |
| 27 | `07.06.09` | Borel-Weil theorem | Borel 1954 (Bourbaki seminar); Bott 1957 (extended to higher cohomology) | Knapp Ch VI; Tu *Differential Geometry*; Wallach *Real Reductive Groups* I |
| 28 | `07.07.01` | Compact Lie group representation | Weyl 1925–26 (the unitarian trick) | Knapp Ch IV; Bröcker-tom Dieck *Representations of Compact Lie Groups*; Sepanski |
| 29 | `07.07.02` | Peter-Weyl theorem | Peter & Weyl 1927 *Die Vollständigkeit der primitiven Darstellungen einer geschlossenen kontinuierlichen Gruppe* | Knapp Ch IV; Bröcker-tom Dieck; Folland *Abstract Harmonic Analysis* |
| 30 | `07.07.03` | Haar measure | Alfréd Haar 1933 *Der Massbegriff in der Theorie der kontinuierlichen Gruppen* | Knapp Ch VIII; Folland *Real Analysis*; Bourbaki *Intégration* |

## Suggested ordering

Within each strand, work top-to-bottom of the table. The order is dependency-respecting: e.g., `06.01.05 Meromorphic function` must precede `06.05.01 Divisor on a Riemann surface` (which uses meromorphic). `07.06.01 Lie algebra rep` precedes everything else in 07.06. `07.06.03 Root system`, `07.06.04 Weyl group`, `07.06.05 Dynkin diagram` form a tight triple — produce in that order so the Dynkin unit can refer back.

You can produce Strand C and Strand D in parallel sub-passes if useful (no inter-strand dependencies in this batch).

## Tier policy

All 30 units: three tiers, `tiers_present: [beginner, intermediate, master]`. Beginner aims at Strogatz / 3Blue1Brown level; Master aims at LM-standard graduate-text prose informed by the originator's conception.

`pending_prereqs: false` — every prerequisite cited (Riemann surface, holomorphic function, group representation, Schur's lemma, Lie algebra, Cartan-Weyl) is shipped.

## Per-unit production protocol

1. Open the originator paper or the modern anchor. Identify the canonical statement and the originator's conceptual phrasing.
2. Draft the unit using the apex template (06.03.01 or 07.04.01).
3. Master-tier *Historical & philosophical context* section: cite originator paper with the exact title and year. Prefer originator's prose for framing where readable.
4. Update `docs/catalogs/CONCEPT_CATALOG.md` (namespace `complex-analysis.<x>` for C, `rep-theory.<x>` for D).
5. Update `manifests/deps.json` (both the `nodes[]` array and `_notes{}` object).
6. Run `./.venv/bin/python scripts/validate_unit.py <path>` until 27/27.
7. After every 3–4 units, run `./.venv/bin/python scripts/validate_all.py` to ensure no global drift.

## Hard conventions

- **`lean_status: stub` is NOT validator-acceptable.** Use `partial` whenever Mathlib has any related infrastructure (root systems, Lie algebras, holomorphic differentiation, charted spaces, complex analysis primitives — all present). Use `none` only if Mathlib has literally nothing.
- **Prohibited phrasings.** The validator strips fenced code blocks, but in prose, avoid: `obviously`, `clearly`, `evidently`, `as we will see`, `trivial(ly)`. Replace `trivial` with `nonzero`, `zero`, `inert`, or `vanishing` per context.
- **Beginner symbols.** No $\partial$, $\int$, $\sum$, $\prod$, $\nabla$, $\otimes$, $\forall$, $\exists$ in Beginner. Rewrite formulas in plain language.
- **Beginner image.** Every Beginner section needs at least one `![...](/img/<slug>-placeholder.svg)` image reference.
- **No emojis anywhere.**
- **Master sections required.** Connections, Historical & philosophical context, Bibliography (validator looks for these literal headings with `[Master]` tier marker).

## Cross-strand sharing notes

Several of your units are companion-pieces to claude's units, by design:

- `06.05.01 Divisor on a Riemann surface` (yours) ↔ `04.05.01 Weil divisor on a scheme` (claude). Both Master-tier sections name GAGA as the bridge.
- `06.05.02 Holomorphic line bundle on RS` (yours) ↔ `04.05.03 Line bundle / invertible sheaf` (claude). Same pattern.
- `06.06.02 Period matrix` (yours) ↔ `04.09.01 Hodge decomposition` (claude). Yours is the genus-1+ rank-1 case of claude's general Kähler statement. Cross-link both ways.
- `07.06.01 Lie algebra representation` (yours) is the Lie-algebra-side of `07.01.01 Group representation` (already shipped, claude). Establish the differentiation bridge in your Master section.

Don't duplicate; cross-reference. The Master-tier Connections section is the right place for "see also" links.

## Master prose standard

Same as Strands B/E and v0.5 apex: six failure modes from QUALITY_RUBRIC §M. The genius-prose principle is the *positive* twin of those failure modes: instead of valedictory rhetoric, give the reader the originator's actual conceptual frame. *"Riemann's 1857 Theorie der Abelschen Functionen introduced the genus through period relations of integrals, not as a topological count of holes — that interpretation came decades later."* Concrete, attributed, historical.

## Stop conditions

Stop and report after:

- All 30 units validate at 27/27.
- `validate_all.py` green (~200 units total at this point).
- No new prohibited-phrasing or Beginner-symbol violations introduced.

If a single unit genuinely cannot be sourced (originator paper unavailable, no clear modern anchor), set `lean_status: none`, `human_reviewer: TBD`, ship at apex skeleton, and report — don't block the batch.

Begin with `06.01.05 Meromorphic function`. Read `docs/plans/V05_SUPPORTING_UNITS_PLAN.md` first.

---

*v0.5 supporting batch — 30 units = Strand C (18) + Strand D 07.06–07.07 (12). Concurrent with claude's 32 supporting units (Strand A entire + Strand D 07.01/07.02/07.05). End-state target: ~172 units total, ≥80% Fast Track parity within Strands A, C, D.*
