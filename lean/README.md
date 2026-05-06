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

## Adding a unit's Lean module

1. Create `Codex/<Section>/<ConceptSlug>.lean`.
2. Add `import Codex.<Section>.<ConceptSlug>` to `Codex.lean`.
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
contribution roadmap; see `MATHLIB_GAPS.md` at codex root.
