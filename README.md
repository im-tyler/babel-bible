# Codex

A single resource aimed at superseding every existing math/physics self-study path — from pre-calculus through spin geometry, QFT, and algebraic topology.

**Status:** Pre-pilot. Reference archive being assembled; scaffold docs (Brief / Unit spec / Quality rubric / Dependency map / Pilot plan) not yet written.

## Layout

```
codex/
├── README.md                          ← you are here
├── FASTTRACK_BOOKLIST.md              ← full Fast Track curriculum booklist
├── reference/                         ← local archive of external sources
│   ├── _meta/
│   │   ├── SOURCES.md                 ← attribution + license per source
│   │   └── licenses/                  ← (per-source license text if explicit)
│   ├── tong/                          ← David Tong DAMTP lecture notes (20 PDFs + 24 HTML)
│   ├── quantum-well/                  ← Boris — CC BY 4.0 — 958 MD notes
│   ├── milekic/                       ← Nikola Milekic — 938 MD (mostly SWE, out of scope)
│   ├── fast-track/                    ← The Fast Track article itself
│   ├── goodtheorist/                  ← 't Hooft's curated resource map
│   ├── rigetti/                       ← Susan Rigetti's physics self-study guide
│   ├── quantum-country/               ← Matuschak & Nielsen — 3 essays (mnemonic medium)
│   ├── diegovera/                     ← Diego Vera self-study essays (47 pages)
│   ├── jimmyqin/                      ← Jimmy Qin handwritten PDFs (150) + 6 pages
│   ├── rowlands/                      ← George Rowlands CS garden (out of scope for pilot)
│   └── readingfeynman/                ← Van Belle — ARCHIVED BUT EXCLUDED FROM PRODUCTION (fringe)
├── scripts/                           ← retrieval + conversion tooling
│   ├── fetch_obsidian.py              ← Obsidian Publish sites via cache/access API
│   ├── fetch_static.sh                ← Single-page curl with browser UA
│   ├── fetch_tong.py                  ← Bespoke Tong crawler (course pages + PDFs)
│   ├── fetch_urls.py                  ← Batch URL fetcher (takes a list of URLs)
│   ├── enumerate_sitemap.py           ← Extract <loc> URLs from sitemap.xml
│   ├── extract_links.py               ← Same-domain link extractor
│   └── convert_html_to_md.sh          ← pandoc HTML -> gfm+math markdown
└── logs/                              ← fetch run logs
```

## Pipeline

Five stages, implemented:

1. **Discover** — per-source URL enumeration (sitemap.xml, Obsidian cache JSON, course-page scraping).
2. **Retrieve** — curl / Python `urlretrieve` with browser UA and polite rate limits (0.3–1.0 s).
3. **Normalize** — pandoc HTML → GitHub-flavored markdown with LaTeX math preserved (`gfm+tex_math_dollars`).
4. **Organize** — per-source directory, `SOURCES.md` for attribution metadata.
5. **Rebuild** — deferred. Will be driven by the Unit Spec once written; content-production agents query the archive for reference material on a per-topic basis.

## Source Rules

See `reference/_meta/SOURCES.md` for the complete attribution index and license status. Summary:

- **Legally adaptable with attribution:** Quantum Well (CC BY 4.0) only.
- **Reference-only (all rights reserved):** everything else — don't republish, paraphrase when producing original content, always attribute.
- **Excluded from production use:** `readingfeynman/` (fringe interpretation, archived for completeness only).

## Next Steps

1. Finish any in-flight background fetches (readingfeynman, rowlands).
2. Convert remaining HTML → MD once fetches complete.
3. Draft the 5 scaffold documents:
   - `BRIEF.md` — audience, pedagogical philosophy, mastery definition, Lean integration stance
   - `UNIT_SPEC.md` — what one lesson contains; style rules; explanation modes
   - `QUALITY_RUBRIC.md` — pass/fail checklist for AI-produced units
   - `DEPENDENCY_MAP.md` — DAG of prerequisites (book-level + concept-level for pilot)
   - `PILOT_PLAN.md` — first ~10 units (prereqs + Shilov), success criteria
4. Build `TOPIC_INDEX.md` — curriculum-topic to archive-file mapping, seeded from the Fast Track booklist.
5. Run the pilot. Iterate until the pipeline produces content at quality. Then scale.
