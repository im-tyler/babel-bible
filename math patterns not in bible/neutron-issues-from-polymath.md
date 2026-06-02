# Neutron — Issues & Observations from the Polymath Build

A running log of anything in the **Neutron framework itself** (not the Polymath app) that needs your
attention — confirmed bugs, rough edges, missing features, and design observations surfaced while building
the Polymath/Codex site on `Neutron/typescript/`. The app build plan is `polymath-build-plan.md`.

**How this doc works:** as I work agentically on the Polymath site, anything that breaks, surprises, or is
missing *because of Neutron* gets logged here with a repro, so you can fix the framework. App-specific bugs
do NOT go here. Each confirmed bug gets the template below; architectural observations go in §B.

Severity: **S1** blocks the build · **S2** painful workaround exists · **S3** papercut · **OBS** design note, not a defect.

> **STATUS (2026-06-01): BUG-1, BUG-2, and BUG-3 are FIXED in the local Neutron source and validated against
> the Polymath app (`neutron-ts build` ships correct scoped CSS + zero JS; `neutron-ts dev` serves 200).**
> Files changed in `Neutron/typescript/`: `packages/create-neutron/templates/*/package.json`,
> `packages/neutron/src/vite/plugin.ts`, `packages/neutron/src/vite/index.ts`,
> `packages/neutron-cli/src/commands/build.ts`. Both packages rebuilt with `pnpm -C packages/<pkg> build`.
> **Review the diffs and commit them to the Neutron repo.**

---

## Entry template (copy for each new bug)

```
### [ID] <short title>
- **Severity:** S1 | S2 | S3
- **Area:** routing | islands | styling | loaders | nucleus | cli | build | types | ssr
- **Neutron version:** <from package.json / git rev>
- **What happened:**
- **Expected:**
- **Minimal repro:** (file + steps)
- **Workaround used in the app:** (so the build keeps moving)
- **Suspected cause / fix direction:**
- **Status:** open | workaround | fixed-in-neutron
```

---

## A. Confirmed bugs

### [BUG-1] `basic` template scaffolds package.json scripts that call a nonexistent `neutron` bin
- **Severity:** S2 (fresh app won't `pnpm dev`/`build` as generated; trivial workaround)
- **Area:** cli | scaffold (create-neutron)
- **Neutron version:** create-neutron 0.1.0; `@neutron-build/cli` 0.1.0 (local `packages/neutron-cli`)
- **What happened:** `create-neutron site --template basic` generated `package.json` scripts using
  `neutron dev`, `neutron build`, `neutron start`, etc. But the only CLI dependency, `@neutron-build/cli`,
  ships its bin as **`neutron-ts`** (verified: both local `packages/neutron-cli/package.json` and
  `npm view @neutron-build/cli bin` → `{ "neutron-ts": "dist/index.js" }`). There is no `neutron` bin from
  npm deps, so `pnpm dev` in a fresh scaffold fails with command-not-found unless the Go CLI happens to be
  installed globally.
- **Expected:** Generated scripts should call `neutron-ts` (as the dogfooded `apps/codex` does), OR the npm
  `@neutron-build/cli` should also expose a `neutron` bin alias.
- **Minimal repro:** `node packages/create-neutron/dist/index.js tmpapp --template basic` → inspect
  `tmpapp/package.json` scripts → `cd tmpapp && pnpm i && pnpm dev` → fails.
- **Workaround used in the app:** rewrote all scripts in `math/site/package.json` to `neutron-ts ...`.
- **FIX APPLIED:** changed the script bodies in all scaffold templates that referenced the nonexistent
  `neutron` bin (`templates/full|app|basic|marketing/package.json`) to `neutron-ts` — matching the bin the
  `@neutron-build/cli` dependency actually ships and what the dogfooded `apps/codex` already uses. The
  `docs` template was already correct. The success message already says `pnpm dev` (runs the script), so no
  change there. A freshly scaffolded app now runs with only its npm deps, no global binary required.
- **Decision note for you:** I deliberately did NOT add a `neutron` bin alias to the npm CLI, to avoid two
  different binaries named `neutron` (the Go universal CLI vs the node TS CLI) colliding on a global install.
  If you instead want `neutron` to be the canonical command everywhere, that's an architecture call — see BUG-2.
- **Status:** fixed-in-neutron (templates)

### [BUG-3] Static-site build drops ALL CSS Modules (and component-level CSS) from output
- **Severity:** S1 (silently ships unstyled pages — no error, no warning)
- **Area:** cli | build | styling (static path)
- **Neutron version:** `@neutron-build/cli` 0.1.0 (local `packages/neutron-cli`)
- **What happened:** Built a static-only app (all routes `mode: "static"`) whose components style via
  `import styles from "./X.module.css"`. Build succeeded with no warning. The SSR'd HTML correctly contains
  the **hashed** scoped class names (`_badge_5do0r_1`, `_shell_1edlb_1`, …) — but the emitted CSS bundle
  (`dist/assets/site-*.css`, 2 KB) contains **only** the global side-effect CSS (`tokens.css` + `global.css`).
  Not one module rule is present anywhere in `dist`. Result: every component rendered unstyled in production;
  class names reference rules that exist in no stylesheet.
- **Expected:** All CSS reachable from the rendered route/component graph — side-effect imports AND
  `*.module.css` AND CSS imported by components (not just route files) — should land in the static CSS bundle.
- **Root cause (found):** `packages/neutron-cli/src/commands/build.ts` ~L152-168, the `else` (static-only)
  branch. It collects CSS by **regex-scanning only route files** for side-effect imports:
  ```js
  for (const m of src.matchAll(/import\s+["']([^"']+\.css)["']/g)) { cssImports.add(...) }
  ```
  This regex requires `import "….css"` with no binding, so a CSS-Modules import
  (`import styles from "./x.module.css"`) never matches. It also only scans `routes[]`, so CSS imported by
  any **component** (transitively) is missed regardless of style. It then builds a temp `_css-entry.js` with
  `plugins: []` (no preact preset) — which is *why* the regex hack exists: that lib build can't compile TSX,
  so they avoid importing the real modules.
- **Minimal repro:** any static route that renders a component which imports a `*.module.css`; `neutron-ts
  build`; grep `dist/**/*.css` for the hashed class — absent.
- **Workaround used in the app:** abandoned CSS Modules; moved all component styles into global CSS files
  (`styles/components.css`, `styles/pages.css`) imported via side-effect in `_layout.tsx`, using a manual
  `pm-` class namespace for pseudo-scoping. This is the dogfooded `apps/site` pattern and builds correctly.
- **FIX APPLIED (two parts — both were required):**
  1. **Coverage** — replaced the regex CSS scan in the static-only branch of `build.ts` with a temp entry
     that **namespace-imports + re-exports every route/layout module** through the existing
     `?neutron-client-route` pipeline (`import * as __rN from "/src/...tsx?neutron-client-route"; export
     const __keep = [...]`). This makes Vite walk the real module graph and extract ALL reachable CSS —
     side-effect, component-level, and `*.module.css`. The query suffix reuses neutronPlugin's existing
     load hook that strips `loader`/`action` (server-only) while keeping CSS imports in build mode. Added
     `neutronPlugin(...)` + the preact preset (via merged user config) + `resolve.dedupe` to that lib build.
     The namespace-import + `__keep` export is essential: plain side-effect imports let Vite tree-shake the
     unused component graph, which silently dropped the value-imported CSS Modules again.
  2. **Scoped-name consistency** — the pages are pre-rendered by a Vite *dev* SSR instance while their CSS
     is emitted by a separate Vite *build* instance; Vite's default CSS-module hashing differs between dev
     and build, so even with coverage the HTML names wouldn't match the CSS. Added a deterministic
     `css.modules.generateScopedName` (hash of project-relative file path + local name → `_<name>_<8hex>`)
     and applied the SAME function to all three Vite configs in `build.ts` (client bundle, static CSS lib,
     SSR render server). Exported `CLIENT_ROUTE_QUERY` from `@neutron-build/core/vite` for the CLI to reuse.
- **Validated:** Polymath build → all 31 scoped classes in the HTML resolve to a rule in the 7 KB CSS
  bundle; **zero JS shipped** (static guarantee preserved — the lib JS is still discarded); `dev` serves 200.
- **Note:** dev mode was already internally consistent (single Vite instance), so I left `dev.ts` untouched;
  the fix targets the build pipeline where the two-instance mismatch lived. The island/app build path got the
  same `generateScopedName` for safety but hasn't been exercised yet (no islands until Phase 1).
- **Status:** fixed-in-neutron (build.ts static branch + scoped-name pinning); review & commit.

### [BUG-4] Hooks crash during SSR/pre-render when app and framework resolve different preact copies
- **Severity:** S1 (any island/component using useState/useEffect fails to render — build skips the page, dev returns HTTP 500)
- **Area:** ssr | build | dev | islands | packaging
- **Neutron version:** `@neutron-build/core` + `@neutron-build/cli` 0.1.0 (local link)
- **What happened:** A static page with an `<Island>` whose component uses `useState` crashed both at build
  (`Error rendering …: TypeError: Cannot read properties of undefined (reading '__H')`, page skipped) and in
  dev (HTTP 500). Root cause: the pre-renderer/dev-SSR obtained `preact-render-to-string` + `preact` via a
  direct `import` resolved from the **framework's** node_modules, while route components were loaded with the
  Vite SSR server's `ssrLoadModule`, resolving preact from the **app's** node_modules. Two preact instances →
  the hooks dispatcher set by render-to-string isn't the one the component's hooks read → `__H` undefined.
  Triggered here by a preact version skew across the `link:` boundary (app 10.29.2 vs framework 10.28.3); it
  also bites any real install where the app's preact differs from the framework's bundled copy.
- **Expected:** Components and the renderer always share one preact instance during SSR.
- **FIX APPLIED (build + dev paths + scaffold):**
  - `packages/neutron-cli/src/commands/build.ts`: load `h` + `renderToString` via the SSR server's
    `ssrLoadModule("preact" / "preact-render-to-string")` (app-resolved) with a fallback to the CLI copy; use
    those (`appH`/`appRender`) in the pre-render loop. Added `resolve.dedupe` for preact, `ssr.noExternal`
    for preact + preact/hooks + preact-render-to-string, and `server.fs.strict:false` to the SSR createServer.
  - `packages/neutron-cli/src/commands/dev.ts`: same `dedupe` + `ssr.noExternal` on the dev createServer.
  - `packages/neutron/src/vite/plugin.ts`: both dev-render functions now resolve the renderer via
    `server.ssrLoadModule(...)` (fallback to direct import) instead of `await import("preact-render-to-string")`.
  - `packages/create-neutron/templates/*/package.json`: added `preact-render-to-string` so scaffolded apps
    provide a single, matched renderer + preact for SSR (makes the app-resolved path always succeed).
- **App-side:** added `preact-render-to-string` to `math/site` (mirrors the template change).
- **Validated:** island page (`/foundations/unit-hyperbola`) SSRs its SVG + readout and hydrates;
  build renders 4/4 pages, dev serves 200; math unit tests 10/10.
- **Status:** fixed-in-neutron (build + dev + templates); review & commit.

### [OBS-6] Static-with-islands pages link every route's CSS chunk, not just their own
- **Severity:** OBS (perf nit; correctness fine because CSS Modules are scoped)
- **Area:** build | css
- **Observation:** When the client-bundle path runs (any island present), each pre-rendered static page's
  HTML links ALL route CSS chunks (e.g. `/foundations/unit-hyperbola` links `how-to-read-*.css`,
  `index-*.css`, `triples-*.css`, …). `extractClientCssFiles` injects the full set rather than the
  per-route/layout subset. Harmless visually (scoped names don't collide) but ships extra CSS per page.
- **Fix direction:** inject only the CSS reachable from each route's own module graph + its layout chain.
- **Status:** open (optimization, not blocking)

### [BUG-2 candidate] docs/README say `neutron dev`; bin is `neutron-ts` — naming inconsistency
- **Severity:** S3 (papercut / docs)
- **Area:** cli | docs
- **What happened:** `typescript/README.md` quickstart and `create-neutron` success message both say
  `pnpm dev` → which maps to `neutron`, but the shipped bin is `neutron-ts`. The Go `cli/` is named
  `neutron`. Two different CLIs ("neutron" Go vs "neutron-ts" node) with overlapping docs is confusing.
- **RESOLUTION — NOT A BUG, BY DESIGN (confirmed from source 2026-06-01):** Neutron is a deliberate
  two-layer CLI. The Go `neutron` is a language-agnostic **orchestrator**: `cli/cmd/dev.go` →
  `detect.DetectLanguage` → `internal/delegate/delegate.go` delegates to each language's native runner. For
  TS, `runTypeScriptDev` runs `npx neutron-ts dev` (primary) / `npm run dev` (fallback). `neutron-ts` is the
  TS framework's **self-contained npm bin** — a TS project runs with only its npm deps, no Go binary needed.
  So `neutron` (cohesion / one command across all languages) and `neutron-ts` (modular / per-language runner)
  are intentionally distinct, not an inconsistency.
- **DEFINITIVE DECISION:** keep templates on `neutron-ts`; do NOT add a `neutron` npm-bin alias.
  Rationale: (1) the npm project must be self-contained → script must be `neutron-ts`; (2) the Go delegate's
  `npm run dev` fallback means a `neutron dev` script would infinite-loop (neutron → npm run dev → neutron);
  (3) an npm `neutron` bin would collide with the Go `neutron` on global installs and break delegation.
- **Only remaining action (docs, optional):** in README/quickstart, distinguish the two paths —
  `pnpm dev` / `neutron-ts` (npm-native, always works) vs `neutron dev` (optional unified orchestrator, needs
  the Go CLI). No further framework code change.
- **Status:** resolved — by design; templates correct; docs clarification optional

---

## B. Pre-build observations & risks (from architecture review, 2026-06-01)

These are NOT confirmed defects — they're things I noticed surveying `Neutron/typescript/` before writing
a line of app code. Logged so you can decide whether they're intentional or worth changing in the framework.

### [OBS-1] No first-class scoped styling — global CSS + BEM only  →  CONFIRMED as [BUG-3]
- **Update (2026-06-01):** The CSS-Modules spike was run. Modules do NOT work in the static build path —
  see **[BUG-3]** above for root cause + fix. App uses global CSS with a manual `pm-` namespace. OBS-1's
  feature-request (first-class scoped styles) stands, but the concrete defect is BUG-3.
- **Severity:** OBS (becomes S2 if CSS Modules turn out not to work)
- **Area:** styling
- **Observation:** The dogfooded `apps/site/` styles entirely via global CSS files (`styles/global.css`,
  `components.css`, …) with BEM naming. There's no scoped `<style>` block, no CSS-Modules convention, and no
  Tailwind in the templates. For a large, component-dense app this invites class-name collisions and
  specificity wars — the exact problem scoped styles solve.
- **Why it matters for Polymath:** 40+ pages, ~20 reusable components, a strong visual system. Global BEM
  scales poorly here.
- **Plan / ask:** First action in Phase 0 is to **verify whether Vite CSS Modules (`*.module.css`) work
  out-of-the-box** in a Neutron app (Vite supports them natively, so they likely do even if undocumented).
  - If they work → document it as the recommended pattern for component styling; no framework change needed.
  - If they don't → that's a real gap. **Feature request: first-class scoped styles** — either ensure Vite
    CSS Modules pass through cleanly, or add a Svelte/Astro-style scoped `<style>` block to `.tsx` routes.
- **Status:** open (verify early)

### [OBS-2] Signals exist but are barely dogfooded
- **Severity:** OBS
- **Area:** state
- **Observation:** `@preact/signals-core` is wired up (`signal`/`computed`/`effect`, plus `createMemo`/
  `createEffect`/`createRoot` wrappers), but the example apps use `preact/hooks` `useState`/`useEffect`
  almost everywhere. Signals are effectively untested in real app code.
- **Why it matters:** Polymath's interactive islands (calculators, viewers with shared parameters like the
  selected triple `n`) are a natural fit for signals. If I lean on them, I may be the first real exercise of
  that path — expect undiscovered bugs.
- **Plan:** Use `useState` for island-local state (safe, proven); try signals only for genuinely
  cross-island shared state, and log anything that misbehaves here.
- **Status:** open (will exercise cautiously)

### [OBS-3] Framework is v0.1.0 — expect pre-1.0 sharp edges
- **Severity:** OBS
- **Area:** all
- **Observation:** `typescript/` reports version 0.1.0. Feature-complete for our scope and self-dogfooded,
  but pre-1.0 means APIs may shift and edge cases are likely unhit.
- **Plan:** Pin the exact version used; note it in every bug entry. Treat any crash as a candidate framework
  bug worth a repro here, not just an app problem.
- **Status:** informational

### [OBS-4] Heavy client-only libs (Three.js / Tone.js / Leaflet) vs islands — unverified at scale
- **Severity:** OBS
- **Area:** islands | ssr | build
- **Observation:** The island model supports `client:only` and `preact/hooks`, so browser-only libs *should*
  work. But the examples don't include anything as heavy as Three.js/WebGL, Web Audio, or Leaflet. Untested
  concerns: (a) does `client:only` fully skip SSR so `window`/`document` access at module top-level doesn't
  crash the server render; (b) bundle splitting so Three.js doesn't bloat the initial payload; (c) multiple
  Three viewers on one page (the element card has 3) sharing context cleanly.
- **Plan:** Validate with a single `SolidViewer` spike in Phase 0/2 before committing the element card. Log
  any SSR-crash-on-import, hydration mismatch, or bundle-size surprise here.
- **Status:** open (spike planned)

### [OBS-5] Nucleus TS client — real-app exercise pending
- **Severity:** OBS
- **Area:** nucleus
- **Observation:** The Drizzle-style client (`createClient().use(withSQL)...`) looks clean, but Polymath is
  static-first and won't touch Nucleus until the optional accounts layer (build plan §7, Phase 5). So this is
  a future test surface, not a current one.
- **Plan:** When accounts ship, log connection/ORM/migration friction here. Until then, nothing to test.
- **Status:** deferred

---

## C. Resolved / fixed-in-Neutron

*Empty — move entries here once you've fixed them in the framework, with the commit/rev.*
