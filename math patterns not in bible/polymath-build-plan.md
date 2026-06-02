# Polymath / BFN Calculator — Site Build Plan (on Neutron)

Companion to `polymath-master-context.md` (the *what* and *why* — content, reality tiers, sources).
This doc is the *how* — UI design system, information architecture, and the concrete build on the
**Neutron** framework. Framework bugs found while building go in `neutron-issues-from-polymath.md`.

**Two non-negotiable goals, in tension, both served here:**
1. **Beautiful, expert UI** — editorial, scientific-instrument aesthetic. No woo, no emojis, no clutter.
2. **Honest information order** — the site must *teach* the framework in the order that makes it coherent,
   while never letting a 🔴 claim read as established science. The reality tier *is* the design.

---

## 1. The governing design principle: honesty-first information architecture

This content is a minefield: ~30% real standard math, ~30% his unvalidated constructs, ~30% post-hoc
numerology, ~10% pure metaphysics. A naive clone would present all of it with equal authority — which is
exactly the failure mode of the original. **The site's structure must encode credibility.**

Mechanism: **every claim-bearing surface carries a reality badge**, and the navigation flows from most-real
to most-speculative so the reader builds genuine understanding before hitting the unfalsifiable layer.

**Reality tiers → UI badges (text + color, never emoji — per house rule):**

| Tier | Badge label | Color token | Meaning in UI |
|---|---|---|---|
| 🟢 | `STANDARD` | `--tier-real` (cool green) | Real, standard math. Stated as fact. |
| 🟡 | `GRANT CONSTRUCT` | `--tier-his` (amber) | His rule. "Per Grant's framework — codeable, unvalidated." |
| 🔴 | `UNVERIFIED CLAIM` | `--tier-claim` (muted red) | Post-hoc / false / unproven. Always disclaimed. |
| ⚪ | `CONTENT` | `--tier-content` (neutral grey) | Text/data, no computation. |

The badge is a real component (`<TierBadge tier="his" />`) and is **mandatory** on every page header and
every `<ClaimCard>`. This is the single most important rule of the build.

---

## 2. Visual design system

**Aesthetic direction: "Observatory."** Think a precision scientific instrument crossed with an editorial
science publication — dark, calm, typographic, with math and geometry as the hero. *Not* sacred-geometry
mysticism, gold sigils, or glow. Restraint signals credibility.

### 2.1 Color (dark-first, single accent)
```
--bg          #0B0D10   page
--surface     #14171C   cards/panels
--surface-2   #1C2027   raised
--border      #262B33
--text        #E6E9EF
--text-dim    #9AA3AF
--accent      #5B8DEF   (one cool blue — links, focus, active nav)
--accent-warm #E0A458   (sparingly — highlights in geometry)
--tier-real   #4ADE80
--tier-his    #E0A458
--tier-claim  #F08C8C
--tier-content#8A93A0
```
A light theme is a later nicety; ship dark first. Tokens live in one `tokens.css`, consumed everywhere.

### 2.2 Typography
- **Display / headings:** a precise grotesk (e.g. *Geist*, *Inter Tight*, or *Söhne* if licensed). Tight tracking.
- **Body:** a readable humanist sans (*Inter*) at generous 16–18px, ~70ch measure.
- **Math:** KaTeX (its own font). **Mono:** *JetBrains Mono* / *Geist Mono* for code, raw numbers, big-decimal output.
- Type scale (1.25 ratio): 12, 14, 16, 20, 25, 31, 39, 49. Defined as `--fs-*` tokens.

### 2.3 Layout & motion
- 12-column max-width 1200px content grid; long-form pages cap text at 720px, widen for viewers/tables.
- **Persistent left nav** (the 11 domains, §4), **right "on this page" rail** on long pages, sticky page header with breadcrumb + TierBadge.
- Motion: subtle, physical, ≤200ms ease-out. Geometry viewers get smooth 60fps rotation; **respect `prefers-reduced-motion`** (freeze auto-rotation, keep interaction).
- Generous whitespace. One idea per band. Tables and viewers breathe.

### 2.4 Signature UI moments (where "beautiful" is earned)
- The **unit-hyperbola plot** as a recurring visual motif — the literal spine of the framework, rendered crisply with each force-triangle point plotted on it.
- **Solid viewers** with a faint wireframe + golden-spiral vertex dots, slow rotation, hover-to-inspect (V/E/F readout).
- **Spectral chord**: emission lines drawn as a spectrum bar that you can *hear* — line positions animate as the chord plays.
- **Number typography**: 320k-digit outputs in a monospace, scroll-virtualized panel that feels like an instrument readout.

---

## 3. Tech stack (concrete, on Neutron TS)

| Concern | Choice | Notes |
|---|---|---|
| Framework | **Neutron `typescript/`** (Preact SSR + islands, Vite) | `npm create neutron@latest`; `runtime: "preact"` |
| Routing | File-based `src/routes/*.tsx` | static mode for content; app mode only where loaders needed |
| Interactivity | **Islands** (`<Island client="visible|only">`) | all viewers/calculators are islands; content pages ship ~0 JS |
| Styling | **CSS Modules (`*.module.css`) + global `tokens.css`** | Neutron static-build CSS-Modules bug (BUG-3) was FIXED at the framework source; app now uses real scoped Modules + a global token/reset layer |
| Math typesetting | **KaTeX** | render server-side where possible |
| 3D geometry | **Three.js (current)** + `OrbitControls` | inside `client:only` islands; port Grant's PD Python here |
| High precision | **decimal.js** (and/or `big.js`) | new numbers, constants, "320k digits" calculator |
| Charts / plots | **D3** (hyperbola, spirals, π(x) vs Li(x), tent waves) | islands; SSR a static SVG fallback where cheap |
| Audio | **Tone.js** | 432 Hz tuning, spectral chords; `client:only` |
| Maps | **Leaflet** | ley-line map page; `client:only` |
| Data | **Static TS/JSON** in `src/data/` | DB-free by default |
| Persistence (optional) | **Nucleus** (SQL + KV via `@neutron-build/nucleus`) | only if accounts/saved-state ship (§7) |

**Island hydration policy:** geometry/audio/maps → `client:only` (they need `window`); calculators and
interactive plots → `client:visible` (SSR a static placeholder, hydrate on scroll); pure content → no island.

---

## 4. Information architecture — the narrative spine

The live app has 11 flat domains in arbitrary order. **We reorder into a credibility gradient** so a reader
moves real → constructed → claimed → metaphysical → content. Left-nav groups follow this order top-to-bottom.

```
0. START HERE          ⚪  Framing, the reality legend, how to read this site, who Grant is
1. FOUNDATIONS         🟢  The genuinely real math (the credible base)
2. THE GENERATOR       🟡  His constructs built from the (3,4,5) seed
3. THE SOLIDS          🟡  Grant Projection Theorem geometry
4. ELEMENTS & MATTER   🟡/🔴 Periodic-polyhedra app — the centerpiece
5. THE CLAIMS          🔴  Constant "derivations", primes/Riemann, galaxies — quarantined & labeled
6. CODEX               ⚪/🔴 The metaphysical engine (i=−1/√10, axioms, dimensions)
7. RESONANCE           🟢  Music / tuning / 432 Hz
8. WISDOM              ⚪  Content pages + sacred-sites map
```

### Full sitemap (route → tier → render mode → key widget)

**0. START HERE**
- `/` — Landing. The hyperbola motif, the thesis, the reality legend. `static`.
- `/how-to-read` — Explains the 4 tiers and the "label, don't assert" stance. `static`.
- `/about-the-framework` — Grant, the books, the sources (cite the 3 PDFs). `static`.

**1. FOUNDATIONS** 🟢 (build credibility first)
- `/foundations/unit-hyperbola` — x²−y²=1, why every triple lands on it (the real identity). D3 plot island.
- `/foundations/triples` — Euclid + the consecutive-leg family (2n+1, 2n²+2n, …); generator. `static` + small island.
- `/foundations/constants` — self-verifying constants page: each conic identity *computed to N digits* (π Machin etc.). decimal.js island.
- `/foundations/metallic-means` — x²−nx−1=0, λₙ=e^arcsinh(n/2). island.
- `/foundations/nine-means` — the Nine Generative Means + the real nested-similar-triangle algebra. island viewer.

**2. THE GENERATOR** 🟡
- `/generator/construction-rules` — Carry&Multiply, Short-Leg Fusion, Corridor Step; interactive seed→tree. island.
- `/generator/force-stack` — the ontological stack table (PFA Table 2) plotted on the hyperbola; **f1/f2 convention note**. island.
- `/generator/new-numbers` — ∂, ω, χ, Kai; big-decimal calculator (320k-digit). island. *(Kai construction = gap, label it.)*

**3. THE SOLIDS** 🟡
- `/solids/projection-theorem` — V=a+2b+c, k=6−intcount, F/E; **the two honesty caveats prominent**. island viewer.
- `/solids/harmonic-solids` — six corridor solids, convex + stellated, V/E/F tables. Three.js viewers.
- `/solids/standard` — Platonic/Archimedean/Catalan/Johnson reference. Three.js.
- `/solids/120-cell` — Kepler-triangle inward cascade; the real-vs-reinterpretation note. Three.js.
- `/solids/metatron` — Metatron's cube + dimensions-as-breath animation. SVG + island.

**4. ELEMENTS & MATTER** 🟡/🔴 — *the centerpiece; rebuild of the 7-tab Periodic Elemental Polyhedra app*
- `/elements` — periodic table; click → element card (Bohr rings at Nine-Means radii, electron config, spectral chord, 3 spinning solids, isotope/oxidation predictions). Big composite island.
- `/elements/platonic-bridge` — Carbon family H→C→…→Pb. island.
- `/elements/shells` — f2=2n² check, magic numbers (**flag 26/122 mismatch**), Madelung. island.
- `/elements/isotopes` — 108 isotopes, 60/61 overlay (**label SEMF caveat**). island.
- `/elements/oxidation` — triangle-wave predictions. island.

**5. THE CLAIMS** 🔴 — *quarantine zone; every page opens with a standing disclaimer banner*
- `/claims/constant-derivations` — α⁻¹, mp/me, G, Λ. Compute them (they hit by construction) but frame as post-hoc. island.
- `/claims/primes-riemann` — π(x) vs Li(x) (real), quasi-prime construction, rapidity spiral viz. island. **Not a proof.**
- `/claims/galaxies` — spectral matcher + pitch-angle tool; "galaxy *is* element" = category error, stated. island + Leaflet/D3.

**6. CODEX** ⚪/🔴
- `/codex/imaginary-unit` — i=−1/√10 as a labeled "alternative algebra" toggle; harmonic-collapse viz. island.
- `/codex/axioms` — the 40 axioms (I, XV–XVII, XL). `static` content, ⚪.
- `/codex/quasi-primes` — digital-root-9 (real modular arithmetic) vs the RH framing (🔴). island.
- `/codex/dimensions` — 4th/5th/RG-Unit reinterpretations. `static`.

**7. RESONANCE** 🟢
- `/resonance/tuning` — 432 Hz, just-intonation leg ratios. Tone.js island.
- `/resonance/spectral-chords` — optical→audible reduction. Tone.js + spectrum island.

**8. WISDOM** ⚪
- `/wisdom/...` — 24 Precepts, hermetic principles, Etymology of Number, etc. MDX content collection.
- `/wisdom/sacred-sites` — Leaflet map, real coords, great-circle draw. Leaflet island.

> **Decision:** the live app's grab-bag extras (FREGJ, TOL Unit, FOL, The Lens, Gematria, Cryptography,
> RSA-ECDSA, Feigenbaum, Sierpiński) are **deferred to a `/lab` section** post-MVP. RSA-ECDSA/Feigenbaum/
> Sierpiński are 🟢 and easy; the rest are ⚪/🔴 filler. Don't let them dilute the core narrative.

---

## 5. Component library (the reusable system)

Built as Preact components; interactive ones are islands. Styled via co-located `*.module.css` (CSS Modules — working after the Neutron BUG-3 fix) plus the global `tokens.css`/`global.css` layer.

**Chrome / layout**
- `AppShell` — left nav + header + content + optional right rail.
- `NavGroup` / `NavItem` — the credibility-ordered nav; shows per-section tier dot.
- `PageHeader` — breadcrumb, title, `TierBadge`, "on this page" anchor list.
- `DisclaimerBanner` — standing banner for the `/claims` quarantine zone.

**Honesty primitives (the heart of the build)**
- `TierBadge` — STANDARD / GRANT CONSTRUCT / UNVERIFIED CLAIM / CONTENT.
- `ClaimCard` — wraps any assertion: title, tier badge, the claim, a `Provenance` line ("Source: PFA p.X / not independently verified").
- `RealityNote` — inline callout for the honesty caveats (Euler-is-forced, placeholder-topology, etc.).

**Math & data**
- `MathBlock` / `MathInline` — KaTeX wrappers.
- `DataTable` — sortable, the V/E/F and triple tables.
- `BigCalc` — decimal.js calculator surface (constants, new numbers).
- `ConicPlot` — D3 hyperbola with plotted points (island, `client:visible`).

**Geometry & media (islands, `client:only`)**
- `SolidViewer` — Three.js canvas; props `{ triple, projection: "convex"|"stellated" }`; golden-spiral verts + hull; V/E/F HUD; reduced-motion aware.
- `BohrDiagram` — 9 rings at Nine-Means radii (SVG or canvas).
- `SpectralChord` — spectrum bar + Tone.js playback.
- `LeyMap` — Leaflet.

**Shared data hooks** — `useTriple(n)`, `useElement(z)`, pure functions in `src/math/` (no DOM) so they're testable and SSR-safe.

---

## 6. Code organization

```
src/
  routes/            # IA from §4, one file per page; mode: static unless loaders needed
    _layout.tsx      # AppShell + tokens import + KaTeX css
    index.tsx
    foundations/ generator/ solids/ elements/ claims/ codex/ resonance/ wisdom/
  components/         # §5; each with co-located *.module.css
    islands/         # SolidViewer, BigCalc, ConicPlot, SpectralChord, LeyMap, ...
  math/              # PURE TS, no DOM: triples, means, projection (port of Grant PD Python),
                     #   constants, metallic, new-numbers, bigdecimal helpers  -> unit-testable
  data/              # static datasets: periodic-table.ts, emission-lines.ts, constants-42.ts,
                     #   isotopes.ts, sacred-sites.ts
  content/           # MDX for wisdom pages (Neutron content collections)
  styles/
    tokens.css       # the design system (§2)
    global.css       # reset + base
db/ (optional)       # Nucleus schema + client, only if §7 ships
```

**Port discipline:** Grant's public-domain Python (`GrantPolytope`/`HarmonicSolid`, GPT §11) → `src/math/projection.ts`,
**with attribution comment** and his placeholder-topology caveat preserved in code and surfaced via `RealityNote`.

---

## 7. Data & persistence

**Default: zero database.** All datasets are static, all computation is client-side (decimal.js / Three.js).
This keeps the app deployable as static output (Neutron static adapter) and dependency-light.

**Nucleus enters only if you want accounts.** Cleanly isolated behind `src/db/` and app-mode routes:
- `withSQL` — users, saved calculator sessions, saved ley-line maps, element favorites.
- `withKV` — lightweight per-user preferences (theme, last-viewed).
- (`withVector` — *optional later*: semantic search across the wisdom/content corpus. Genuinely nice use of Nucleus, not forced.)

Until then, the only "state" is URL params (selected element, triple n) + `localStorage` for prefs. Build
the persistence layer last so the framework's DB story gets exercised on a real app — and any Nucleus bugs
land in the issues doc.

---

## 8. Build phasing (maps onto master-context §19)

**Phase 0 — Scaffold & system (foundation for "beautiful")**
Scaffold Neutron app; lock `tokens.css` + type scale; build `AppShell`, nav, `TierBadge`, `ClaimCard`,
`MathBlock`, `DataTable`; verify CSS Modules work (→ issues doc); ship `/`, `/how-to-read`. **Get the
design system right before content volume.**

**Phase 1 — Foundations (🟢, earns trust)**
All of §4.1 + §7 resonance basics. `ConicPlot`, `BigCalc`, constants self-verifier. Pure `src/math/` with tests.

**Phase 2 — Generator + Solids (🟡)**
Construction rules, force-stack, new numbers; port the projection Python; `SolidViewer`; harmonic + standard solids; 120-cell. **The visual showpiece.**

**Phase 3 — Elements (the centerpiece)**
Datasets (periodic table, NIST lines, isotopes); the element card composite island; shells/isotopes/oxidation/bridge. Highest-effort.

**Phase 4 — Claims + Codex (🔴/⚪, maximum labeling discipline)**
Quarantine zone with standing disclaimers; constant derivations, primes/Riemann, galaxies; i-redefinition, axioms, dimensions.

**Phase 5 — Wisdom + polish**
MDX content collection, sacred-sites map, view transitions, light theme, a11y/perf pass, optional Nucleus accounts.

---

## 9. Quality bars

- **Accessibility:** keyboard-navigable nav and viewers; `prefers-reduced-motion`; KaTeX with aria; color is never the *only* tier signal (badge has text too); AA contrast on the dark theme.
- **Performance:** content pages ship ~0 JS (islands only where needed); Three.js/Tone.js lazy via `client:visible`/`only`; one shared Three instance pattern; virtualize the 320k-digit output.
- **SEO:** `head()` per route with title/description/og; static-mode for all content; sitemap via Neutron's SEO utils.
- **Correctness:** `src/math/` is pure and unit-tested (the 🟢 claims must actually compute correctly — that's the credibility anchor). The 🔴 derivations are tested to *reproduce his numbers* (by construction) but shipped with disclaimers.
- **Honesty invariant (enforced in review):** no page renders a claim without a `TierBadge`; no 🔴 page lacks a `DisclaimerBanner`.

---

## 10. Open decisions for you
1. **Accounts / Nucleus?** Ship static-only MVP, or include saved-state from the start? (Recommend: static MVP, Nucleus in Phase 5.)
2. **Fonts** — license *Söhne*/*Geist*, or stick to free *Inter* + *JetBrains Mono*? (Recommend: Inter/Geist Mono to start.)
3. **Scope of `/lab`** — do the 🟢 extras (RSA-ECDSA, Feigenbaum, Sierpiński) make MVP or wait?
4. **Branding** — original name/logo (must not reuse "Polymath"/"Orion Architect"/his sigils per IP note). Need a working title.
5. **Styling** — RESOLVED: BUG-3 fixed in Neutron; app uses real CSS Modules. (Open Neutron decisions remain
   in the issues doc: the `neutron`/`neutron-ts` naming, and whether to pin `generateScopedName` in `dev.ts`
   too for full dev/build parity.)
```
