# Babel Bible

A self-study curriculum spanning the sciences and humanities. Math, physics, chemistry, biology, philosophy, language, and the social world — same concept, three depths:

- **Beginner** — intuition, visuals, worked examples.
- **Intermediate** — formal definitions, proofs, exercises.
- **Master** — graduate-level depth with primary-source citations and Lean formalisation where Mathlib covers.

![License: MIT](https://img.shields.io/badge/code-MIT-blue)
![Content: CC-BY-SA](https://img.shields.io/badge/content-CC--BY--SA-green)
![Lean 4](https://img.shields.io/badge/formalization-Lean_4-ff8c0d)
![Status](https://img.shields.io/badge/status-live-brightgreen)

**Live at <https://babelbible.org>** — ~2,559 units across 50 sections (~360 chapters), every produced unit passing a 27-point automated rubric.

**Codename:** the Lean formalisation library and internal docs still use the codename `Codex`. Babel Bible is the product name.

## Layout

```
babel-bible/
├── README.md                 ← you are here
├── AGENTS.md                 ← agent + contributor entry point
├── OVERVIEW.md               ← the load-bearing project doc
├── content/                  ← curriculum units (~2,559 markdown files, 50 sections)
├── lean/                     ← Lean 4 formalisation (library root: `Codex.*`)
├── site/                     ← Neutron-based site → babelbible.org
├── docs/                     ← specs, briefs, catalogs, plans
├── plans/                    ← expansion state, audits, finalization queue
├── manifests/                ← per-unit state, dependency DAG, campaign log
├── lenses/                   ← lens/filter system (curriculum views)
├── _meta/, style/            ← notation + editorial voice
├── scripts/                  ← validators + content tooling
└── reference/                ← local archive of external sources (gitignored)
```

## Pipeline

1. **Spec** (`docs/specs/UNIT_SPEC.md`) declares the unit format and rubric.
2. **Produce** — content agents draft units that pass the 27-point automated rubric (`scripts/validate_unit.py`).
3. **Integrate** — cross-references validated at build time; broken refs fail the build.
4. **Site** — Neutron generates static HTML; deployed to OVH via Teploy.
5. **Audit** — per-section coverage/gap audits under `plans/expansion/`.

## Three tiers

Each unit packs Beginner / Intermediate / Master content in a single source file. Section markers (`[Beginner]`, `[Intermediate+]`, `[Master]`) gate visibility. The tier toggle in the site header changes what the reader sees.

## Lean formalisation

The Lean 4 library lives in `lean/` (module root: `Codex.*`). Each Master-tier unit declares a `lean_status` of `full`, `partial`, or `none`. Mathlib coverage gaps surface in `docs/catalogs/MATHLIB_GAPS.md` as contribution candidates.

## Site

Built with [Neutron](https://neutron.build) — single static-site target served by Caddy. Local dev: `cd site && npm run dev`. Production: `npm run build`, deploy with `teploy deploy` (config in `site/teploy.yml`).

## Next-step references

- `AGENTS.md` — entry point: full doc map and reading order (includes a consolidated **Current state** section).
- `OVERVIEW.md` — the canonical project doc; read this when in doubt.
- `docs/specs/UNIT_SPEC.md` — the unit format.
- `docs/specs/QUALITY_RUBRIC.md` — the 27-point automated checks.
- `plans/expansion/FINALIZATION_PLAN.md` — the live production queue.

## License

Dual-licensed:

- **Code** (`lean/`, `scripts/`, `site/`) — MIT, see [LICENSE](LICENSE).
- **Curriculum content** (`content/`) — Creative Commons Attribution-ShareAlike 4.0 (CC-BY-SA-4.0), see [LICENSE-content.md](LICENSE-content.md).
