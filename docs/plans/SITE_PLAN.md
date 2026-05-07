# Codex — Site Build Plan

The rendering layer. Reads `content/`, produces a learner-facing site. Built on Neutron (TS) with markdown + math + tier filtering. Persists state to Nucleus once we wire that in (later).

Read `OVERVIEW.md` §10 (platform strategy) and `docs/specs/UNIT_SPEC.md` (canonical content format) before this.

---

## 1. Architecture decisions

| Decision | Choice | Why |
|---|---|---|
| Framework | Neutron (TS) | Tyler's framework; dogfood pressure-tests it |
| Location | `tystack/typescript/apps/codex/` | Sibling of existing apps; benefits from shared toolchain |
| Content source | `codex/content/` symlinked into `src/content/units/` | Single source of truth at codex repo root; site is a view |
| Renderer | Preact SSR via Neutron's existing pipeline | Matches site app pattern |
| Math rendering | KaTeX via `remark-math` + `rehype-katex` | SSR-friendly, lighter than MathJax, standard |
| Code highlighting | Neutron's built-in (`syntaxHighlight: css-variables`) | Already configured in site app |
| Routing | File-based, Astro-style | Follows `apps/site/` pattern |
| Persistence | Nucleus eventually (Phase D) | Reading progress; for v0.1 use localStorage |
| Build adapter | `adapterStatic` for v0.1 | No SSR runtime needed for browse-only experience |

## 2. Routes

```
/                                — Codex landing
/about                           — what Codex is, who it's for, tier model
/units                           — full unit index (filterable)
/u/[id]                          — single unit page (e.g. /u/03.09.02)
/concepts                        — browse concept catalog
/concepts/[id]                   — single concept page
/sources                         — reference archive index (browse what we cite)
/sources/[source]                — list passages from one source
/dag                             — dependency graph visualisation (v0.5)
/search                          — RAG-backed search (v0.5, gated on RAG running)
```

For v0.1 pilot: `/`, `/about`, `/units`, `/u/[id]`, `/concepts`. The rest are stubs.

## 3. Content collection schema

Zod schema at `src/content/config.ts` mirroring `docs/specs/UNIT_SPEC.md` frontmatter exactly.

```ts
defineCollection({
  schema: z.object({
    id: z.string().regex(/^\d{2}\.\d{2}\.\d{2}$/),
    title: z.string(),
    slug: z.string(),
    section: z.string(),
    chapter: z.string(),
    concept_catalog_id: z.string(),
    prerequisites: z.array(z.string()),
    successors: z.array(z.string()).default([]),
    tier_anchors: z.object({
      beginner: z.union([z.string(), z.literal("deferred")]),
      intermediate: z.union([z.string(), z.literal("deferred")]),
      master: z.union([z.string(), z.literal("deferred")]),
    }),
    tiers_present: z.array(z.enum(["beginner", "intermediate", "master"])),
    pending_prereqs: z.boolean().default(false),
    references: z.array(z.object({
      source: z.string(),
      path: z.string(),
      locator: z.string().optional(),
      pending: z.boolean().optional(),
      pointer: z.string().optional(),
    })),
    lean_module: z.string().optional(),
    lean_status: z.enum(["full", "partial", "none"]),
    lean_mathlib_gap: z.string().optional(),
    human_reviewer: z.string().optional(),
    estimated_time: z.record(z.string()),
    status: z.enum(["draft", "review", "approved", "shipped"]),
    produced_by: z.string(),
    reviewed_by: z.array(z.string()).default([]),
  }),
});
```

If frontmatter doesn't match the schema, build fails. (Same belt-and-suspenders as the rubric validator.)

## 4. Tier filter mechanism

Single source of truth = the markdown body with `[Beginner]` / `[Intermediate+]` / `[Master]` markers on `##` headings. The renderer filters at render time.

**Implementation:**
- Markdown is parsed into HTML at build time (via remark + rehype) with section markers preserved as `data-tier` attributes on `<section>` wrappers around each H2 group.
- A small Preact island reads `localStorage.codex_tier` (`beginner` | `intermediate` | `master`), defaults to whichever is the lowest-index tier in `tiers_present`, and toggles `display: none` on sections whose `data-tier` doesn't include the current tier.
- Tier toggle UI in the global header — three radio buttons.
- For pilot units with `tiers_present: [master]`, the toggle is non-interactive (greyed out, "this unit is Master-only" tooltip).

## 5. Cross-reference resolution

- `[ref: source locator]` inline citations → render as superscript clickable footnotes; clicking opens a side panel with the citation details and a link to the archive file (or a "pending source" badge if `pending: true`).
- `[unit-id]` cross-references → if the target unit has `status: shipped`, render as `<a href="/u/<id>">title</a>`; otherwise render as `<span class="pending">unit-id (pending)</span>` with a tooltip.

Both resolved at build time via remark plugins so the static HTML is correct.

## 6. Math rendering

`remark-math` + `rehype-katex` in `neutron.config.ts`:

```ts
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  runtime: "preact",
  adapter: adapterStatic({ precompress: true }),
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { strict: "ignore" }]],
    syntaxHighlight: { theme: "css-variables" },
  },
});
```

Plus KaTeX CSS in the layout: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16/dist/katex.min.css">`.

## 7. Component inventory

| Component | Purpose |
|---|---|
| `<Header>` | Tier toggle + nav |
| `<TierBadge>` | "Master-only" / "All tiers" pill in unit pages |
| `<UnitMeta>` | Sidebar with prereqs, anchors, references, lean status |
| `<TierSection>` | Wraps a section with `data-tier` for client-side filtering |
| `<Citation>` | Inline cite renderer (ref) |
| `<UnitLink>` | Cross-ref to another unit, with pending state |
| `<Callout>` | "Counterexamples to common slips" / "Connections" / etc. |
| `<LeanCode>` | Lean code block with appropriate styling |
| `<TierToggleIsland>` | Client-side island; the only JS in v0.1 |

## 8. Phases

### Phase A — Scaffolding (this session)
- [ ] Create app dir; copy site app's `package.json`, `neutron.config.ts`, `vite.config.ts`, `tsconfig.json` as starting point.
- [ ] Install math plugins.
- [ ] Symlink `codex/content/` → `apps/codex/src/content/units/`.
- [ ] Define content collection schema.
- [ ] Verify `pnpm build` succeeds.

### Phase B — Pages
- [ ] Landing page (`index.tsx`).
- [ ] Unit page (`u/[id].tsx`) with full UNIT_SPEC layout.
- [ ] Layout with tier toggle island.
- [ ] Unit index (`units/index.tsx`).

### Phase C — Polish
- [ ] Citation footnote panel.
- [ ] Cross-ref resolution (with pending badge).
- [ ] Concept catalog browse.
- [ ] CSS theme (typography, math, code blocks).

### Phase D — Site v1 features
- [ ] Reading-progress persistence (Nucleus once leak-free Nucleus deployed).
- [ ] DAG visualisation.
- [ ] RAG-backed search (gated on RAG running).
- [ ] User accounts (v1.5).

## 9. Validation gate

The site build is gated on **all unit content passing `validate_unit.py`**. Add to `package.json` build script:

```json
"build": "python ../../../codex/scripts/validate_all_units.py && neutron-ts build"
```

(We'll write `validate_all_units.py` as a thin wrapper around `validate_unit.py`.)

## 10. Risks / gotchas

| Risk | Mitigation |
|---|---|
| KaTeX doesn't render some LaTeX (e.g., `\xhookrightarrow`) | Fall back to inline raw LaTeX with a CSS class; track gaps |
| Symlink across repos fails on Windows | Document; for now we're on macOS, not a blocker |
| Neutron content collection doesn't follow symlinks | Test in Phase A; if blocked, copy on build instead |
| Cross-ref target unit not yet published | Fail gracefully — render as "(pending)" badge |
| Tier filter requires JS (loses progressive enhancement) | Default page renders all sections of `tiers_present`; JS only hides per user pref |
| `[Master]` markers in markdown might conflict with link syntax `[text]` | Only match section-heading-level markers; use a more specific regex |

## 11. Success criteria for Phase A (visual confirmation)

- `pnpm dev` starts a local server.
- Visiting `/u/03.09.02` renders the Clifford algebra unit.
- LaTeX displays correctly (inline `$\mathrm{Cl}(V, q)$` and display `$$ ... $$`).
- ABS classification table renders.
- Frontmatter metadata visible in sidebar (prereqs, anchors, references, lean status).
- Tier toggle widget in header (works in this case = "Master-only" indicator since unit is Master-only).
- Citations and cross-references render as styled spans (clickability is Phase C).

This gives Tyler a real visual to react to.

---

*Phase A starts now. Subsequent phases wait on review of Phase A output.*
