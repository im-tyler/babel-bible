# Polymath — Grounded Build

Only the parts of Robert Edward Grant's "Polymath / *Codex Universalis*" framework that
**survive testing**. Built on the **Neutron** framework (Preact SSR + islands).

A faithful, fully-labelled reproduction of the *entire* framework was built first; every
checkable claim was then run through a falsification harness (`../audit/`). This build keeps
only what passed and **removes** what didn't. The rule throughout: a test can confirm-against-chance
or rule out — it can never manufacture validity.

- **Faithful reproduction (reference):** `../_archive/polymath-faithful/` and git tag `faithful-v1`.
- **The audit (null models + sympy + Lean proofs):** `../audit/` — see `audit/RESULTS.md`.

## What's kept

- **Foundations** — the verified theorems (unit hyperbola, triples, constants, metallic means,
  nine means); several machine-checked in Lean. Plus `6π⁵ ≈ mₚ/mₑ` as a labelled coincidence.
- **The Generator / The Solids / Elements** — Grant's constructs that are *real as arithmetic*
  (construction rules, new numbers, the projection solids, the periodic table + 2n² shells),
  honestly labelled as his framework, not established fact.
- **Resonance** — 432 Hz just intonation and spectral chords (real audio).
- **Methodology** — how the audit was run and what each claim's verdict was.

## What was removed (tested → failed)

Constant "derivations" (α⁻¹, Ω_Λ — chance), the force→triple physics (arbitrary), the Euler
"proof" (tautology) and √10 "identity" (coincidence), the Codex metaphysics, galaxies-as-elements,
and the Riemann "proof". All preserved in the faithful archive; the verdicts are in `audit/RESULTS.md`.

## Reality tiers (two now suffice)

- **STANDARD** — real, verifiable mathematics (much of it Lean-verified).
- **GRANT CONSTRUCT** — his own rule; real as arithmetic / reproducible, but his framework, unvalidated.

## Run

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static output in dist/
pnpm test     # vitest — the STANDARD math must actually compute correctly
```

CLI is `neutron-ts`. The app links the local Neutron source via pnpm `link:` (see package.json).

## Note

Working title only — "Polymath" is Grant's term and must not ship in a public/branded release.
Naming + branding is the deliberate next step.
