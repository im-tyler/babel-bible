# Codex — Lean 4 modules

Companion Lean 4 library for the Codex curriculum. Each unit with
`lean_status: full` or `lean_status: partial` has a corresponding module here.

## Layout

```
lean/
├── lakefile.toml          — Lake build config
├── lean-toolchain         — Lean version pin
├── Codex.lean             — top-level library file (imports everything)
└── Codex/
    └── <Section>/
        └── <Concept>.lean
```

## Building

```bash
cd lean
lake update      # one-time, fetches Mathlib
lake build       # type-checks every module
```

CI should run `lake build` to gate any unit that declares `lean_status: full`
or `partial` against actually compiling.

## Keeping `Codex.lean` in sync

`Codex.lean` is a generated file: it imports every module under `Codex/`,
sorted by path. `python3 scripts/check_codex_imports.py --fix` regenerates
it, and the aggregate validator (`scripts/validate_all.py`) fails whenever
the import list diverges from the on-disk module tree, so a module can no
longer silently escape `lake build`.

## Known build state (2026-09-11)

The full import list was regenerated without a Lean toolchain available on
the working machine (no `lake`/`lean`/`elan`), so the previously-unimported
modules have not been compile-verified. A static scan also found duplicate
top-level declarations across sibling modules that share a namespace —
these are hard errors once the modules are imported together and must be
repaired before `lake build` passes:

- `Codex.AlgGeom.Toric.{Lattice, Fan, Ray, RationalPolyhedralCone, SupportFunction}` —
  declared in more than one of `Toric/{DivisorSupportFunction, PicardGroup, ResolutionSingularities, SmoothnessCompletenessFans}.lean`
- `Codex.Analysis.MultiVariable.EuclR` — declared in both
  `MultiVariable/{ChainRule, LimitContinuity}.lean`
- `Codex.Foundations.LinearAlgebra.jordan_canonical_form` — declared in both
  `LinearAlgebra/{Eigen, JordanForm}.lean`
- `Codex.ModernGeometry.DifferentialForms.{Manifold, OpenCover}` — declared in
  more than one of `DifferentialForms/{CechDeRham, GoodCover, MayerVietoris, ThomGlobalAngularForm}.lean`

## Adding a unit's Lean module

1. Create `Codex/<Section>/<ConceptSlug>.lean`.
2. Regenerate `Codex.lean` with `python3 scripts/check_codex_imports.py --fix`
   (it imports every module under `Codex/`).
3. The unit's frontmatter should set `lean_module: Codex.<Section>.<ConceptSlug>`.
4. `pnpm build` (in the codex site app) runs the validator, which checks the
   module file exists at the expected path.
5. CI separately runs `lake build` to check the module compiles.

## `partial` minimum-bar

A unit with `lean_status: partial` must:
- Have its `lean_module` file present.
- Have all theorem *statements* type-check (no syntax errors, all imports
  resolve). Proofs may be `sorry`-gated, but statements must compile.
- Name a `human_reviewer` in frontmatter who has verified the gap is real
  and the proof would go through if Mathlib supported it.

## Mathlib gaps

When a unit cannot be formalised because Mathlib lacks the relevant
infrastructure, the unit declares `lean_status: none` with a
`lean_mathlib_gap` description. These collectively form the upstream
contribution roadmap; see `docs/catalogs/MATHLIB_GAPS.md` at codex root.
