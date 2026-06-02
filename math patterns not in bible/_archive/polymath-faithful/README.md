# Polymath — Faithful Reproduction (reference build)

A complete, honest reproduction of Robert Edward Grant's "Polymath / BFN Calculator"
(the front end of his *Codex Universalis* framework), built on the **Neutron** framework
(Preact SSR + islands).

**This is the reference, not the product.** Its job is *faithfulness*: reproduce what Grant
presents, but tag every claim with a reality tier so nothing reads as established science.
The rigorous, original successor — which keeps only what survives testing — lives in
`../audit/` and the eventual branded build.

## Reality tiers

- **STANDARD** (🟢) — real, verifiable mathematics, stated as fact.
- **GRANT CONSTRUCT** (🟡) — his own rule; codeable, unvalidated.
- **UNVERIFIED CLAIM** (🔴) — post-hoc, false, or unproven. Always disclaimed.
- **CONTENT** (⚪) — text/data, nothing to compute.

The governing rule everywhere: **label, don't assert.**

## Run

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static output in dist/
pnpm test     # vitest — the STANDARD math claims must actually compute correctly
```

CLI is `neutron-ts` (the Neutron TS framework runner). The app links the local Neutron
source via pnpm `link:` (see package.json).

## What's here

26 pages across 8 sections, credibility-ordered (real → constructed → claimed → metaphysical →
content): Start · Foundations · The Generator · The Solids · Elements & Matter · The Claims ·
Codex · Resonance · Wisdom.

- Pure, unit-tested math in `src/math/`; datasets in `src/data/`.
- Interactive islands: ConicPlot (SVG), SolidViewer/PlatonicViewer/CascadeViewer (Three.js),
  TonePlayer (Tone.js — real 432 Hz + spectral chords), LeyMap (Leaflet), PeriodicTable (118
  elements, computed Aufbau shells, Bohr diagram).
- Static pages ship zero JS; heavy libraries are lazy-chunked.

## Intentional gaps (it's a reference)

- Elements reproduces a working periodic table, not every micro-feature of Grant's 7-tab app
  (no per-element spinning solids, no Platonic-Bridge/oxidation tabs; spectral chords are
  hydrogen-only).
- Wisdom includes the sacred-sites map only; the other ⚪ content pages are omitted.
- The `/lab` extras (RSA-ECDSA, Feigenbaum, Sierpiński, …) are deferred.
- Electron shells use idealized Aufbau order (real exceptions like Cr/Cu not special-cased).

These are deliberate — depth is going into the `../audit/` verification effort instead.

## Provenance

Grant's Grant-Projection-Theorem Python is public-domain (attribution required) and is the
basis for `src/math/projection.ts`. Everything else is original. Do not reuse his branding
("Polymath", "Orion Architect"), rose logo, or sigils in any public release.
