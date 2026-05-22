# Babel Bible

A self-study curriculum spanning the sciences and humanities. Math, physics, chemistry, biology, philosophy, language, and the social world — same concept, three depths:

- **Beginner** — intuition, visuals, worked examples.
- **Intermediate** — formal definitions, proofs, exercises.
- **Master** — graduate-level depth with primary-source citations and Lean formalisation status where Mathlib covers.

**Status:** Live at <https://babelbible.org>. 830+ units across 7 domains. Continuously expanded by an autonomous production pipeline against a 27-point quality rubric.

**Codename:** the Lean formalisation library and internal docs still use the codename `Codex`. Babel Bible is the product name.

## Layout

```
B.I.B.L.E/
├── README.md                          ← you are here
├── OVERVIEW.md                        ← project orientation (load-bearing doc)
├── BRIEF.md                           ← one-page vision extract
├── content/                           ← produced curriculum units (~830, growing)
│   ├── 00-precalc/  …  21-number-theory/    ← math (~580 units)
│   ├── 09-classical-mech/  …  13-gr-cosmology/   ← physics (~55 units)
│   ├── 14-genchem-pchem/  …  16-inorgchem/   ← chemistry (~32 units)
│   ├── 17-mol-cell-bio/  …  19-eco-evo-bio/   ← biology (~40 units)
│   ├── 20-philosophy/   ← philosophy (~7 units)
│   ├── 22-language/     ← grammar / writing / literature (~50 units)
│   └── 23-world/        ← economics / civics / geography (~57 units)
├── lean/                              ← Lean 4 project (library = `Codex`)
├── site/                              ← Neutron-based site (deploys to babelbible.org)
├── docs/                              ← specs, plans, catalogs
├── manifests/                         ← per-unit state, deps, campaign log
├── plans/fasttrack/                   ← per-book Fast Track equivalence plans
├── reference/                         ← local archive of external sources (gitignored)
└── scripts/                           ← validators + content tooling
```

## Pipeline

1. **Spec** (`docs/specs/UNIT_SPEC.md`) declares the unit format and rubric.
2. **Produce** — content agents draft units that pass the 27-point automated rubric (`scripts/validate_unit.py`).
3. **Integrate** — cross-refs validated at build time; broken refs fail the build.
4. **Site** — Neutron generates static HTML; deployed to OVH via Teploy.
5. **Audit** — Fast Track books mapped per-unit; per-book audits in `manifests/`.

## Three tiers

Each unit packs Beginner / Intermediate / Master content in a single source file. Section markers (`[Beginner]`, `[Intermediate+]`, `[Master]`) gate visibility. The tier toggle in the site header changes what the reader sees.

## Lean formalisation

The Lean 4 library lives in `lean/` (module root: `Codex.*`). Each Master-tier unit declares a `lean_status` of `full`, `partial`, or `none`. Mathlib coverage gaps surface in `docs/catalogs/MATHLIB_GAPS.md` as contribution candidates.

## Site

Built with [Neutron](https://neutron.build) — single static-site target served by Caddy. Local dev: `cd site && npm run dev`. Production build: `npm run build && neutron-ts preview` to verify locally; deploy with `teploy deploy` (config in `site/teploy.yml`).

## Next-step references

- `OVERVIEW.md` — the canonical project doc; read this when in doubt.
- `BRIEF.md` — one-page extract of the vision.
- `docs/specs/UNIT_SPEC.md` — the unit format.
- `docs/specs/QUALITY_RUBRIC.md` — the 27-point automated checks.
- `docs/plans/PRODUCTION_RUNBOOK.md` — how an agent picks the next unit.
- `docs/plans/COMPLETION_ROADMAP.md` — what remains to v1.
