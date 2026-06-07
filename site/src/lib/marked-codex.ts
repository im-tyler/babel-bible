// Custom `marked` extensions for Codex inline syntaxes.
//
// Implements:
//   [ref: source locator]   — citation footnote, hyperlinked + tooltipped
//   [unit-id]               — cross-reference to another unit (status-aware)
//
// Both are inline-level extensions. They do not interact with each other
// or with KaTeX (they require literal square brackets in markdown text).
// The unit-id matcher is restricted to the canonical \d{2}\.\d{2}\.\d{2}
// pattern so it does not collide with ordinary markdown link references.

import type { TokenizerExtension, RendererExtension } from "marked";

type Tok = {
  type: string;
  raw: string;
  inner: string;
} | {
  type: string;
  raw: string;
  unitId: string;
};

// ---------------------------------------------------------------------------
// [ref: ...]
// ---------------------------------------------------------------------------
// One inline syntax, three reader-facing outcomes:
//
//   [ref: tong p.40]              resolved — `tong` is a registered source
//                                 key; the side-panel shows full metadata.
//   [ref: Schrödinger 1944]      free-form citation — shown verbatim, no
//                                 registered key, no panel metadata.
//   [ref: TODO_REF Kadanoff1966] pending — source not yet wired in. Readers
//   [ref: Lewis 1916, pending+pointer]   see only the cleaned citation; the
//                                 internal sentinels (`TODO_REF`,
//                                 `pending+pointer`) are stripped from view.
//
// The tokenizer captures the whole inner string so author names with
// non-ASCII letters (e.g. "Wächtershäuser") tokenize instead of leaking the
// raw `[ref: ...]` marker into the page.

const REF_RE = /^\[ref:\s*([^\]]*)\]/;

// Strip the internal pending sentinels so they never reach the reader.
function cleanCite(s: string): string {
  return s
    .replace(/\s*[—-]\s*pending acquisition.*$/i, "")
    .replace(/;?\s*see NEED_TO_SOURCE.*$/i, "")
    .replace(/\s*[—-]\s*acquisition.*$/i, "")
    // Combined refs like "Arnold 1966; ref: TODO_REF Marsden-Ratiu Ch. 13"
    // collapse to "Arnold 1966; Marsden-Ratiu Ch. 13".
    .replace(/[;,]\s*ref:\s*TODO_REF\s*/gi, "; ")
    .replace(/\bref:\s*TODO_REF\s*/gi, "")
    .replace(/\bTODO_REF\s*/g, "")
    .replace(/,?\s*pending\s*\+\s*pointer/gi, "")
    .replace(/,?\s*\bpending\b/gi, "")
    .replace(/\s*[;,]\s*$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const refTokenizer: TokenizerExtension = {
  name: "codexRef",
  level: "inline",
  start(src: string) {
    const i = src.indexOf("[ref:");
    return i === -1 ? undefined : i;
  },
  tokenizer(src: string) {
    const m = REF_RE.exec(src);
    if (!m) return undefined;
    return { type: "codexRef", raw: m[0], inner: m[1] };
  },
};

const refRenderer: RendererExtension = {
  name: "codexRef",
  renderer(token: any) {
    const inner = ((token as { inner: string }).inner || "").trim();
    const sp = inner.search(/\s/);
    const head = sp === -1 ? inner : inner.slice(0, sp);
    const rest = sp === -1 ? "" : inner.slice(sp + 1).trim();

    // Pending: explicit `TODO_REF` head or a `pending` sentinel anywhere.
    if (head === "TODO_REF" || /\bpending\b/i.test(inner)) {
      const cite = cleanCite(head === "TODO_REF" ? rest : inner) || "source pending";
      const c = escapeHtml(cite);
      return `<span class="ref ref--pending" data-ref-pending="1" data-ref-cite="${c}" title="${c} — source being verified"><sup>[${c}]</sup></span>`;
    }

    // Resolved: a lowercase slug head is a registered source key, looked up
    // in the citation panel's source table.
    if (/^[a-z][a-z0-9_-]*$/.test(head)) {
      const supBody = rest ? `${escapeHtml(head)} ${escapeHtml(rest)}` : escapeHtml(head);
      const title = rest ? escapeHtml(`${head} — ${rest}`) : escapeHtml(head);
      return `<span class="ref" data-ref-source="${escapeHtml(head)}" data-ref-locator="${escapeHtml(rest)}" title="${title}"><sup>[${supBody}]</sup></span>`;
    }

    // Free-form citation (e.g. author-year) with no registered key.
    const cite = cleanCite(inner);
    const c = escapeHtml(cite);
    return `<span class="ref" data-ref-cite="${c}" title="${c}"><sup>[${c}]</sup></span>`;
  },
};

// ---------------------------------------------------------------------------
// [<section>.<chapter>.<ordinal>]  — bare unit-id reference
// ---------------------------------------------------------------------------

const UNIT_ID_RE = /^\[(\d{2}\.\d{2}\.\d{2})\]/;

const unitRefTokenizer: TokenizerExtension = {
  name: "codexUnitRef",
  level: "inline",
  start(src: string) {
    const m = src.match(/\[\d{2}\.\d{2}\.\d{2}\]/);
    return m ? src.indexOf(m[0]) : undefined;
  },
  tokenizer(src: string) {
    const m = UNIT_ID_RE.exec(src);
    if (!m) return undefined;
    return {
      type: "codexUnitRef",
      raw: m[0],
      unitId: m[1],
    };
  },
};

// Build-time set of shipped unit IDs (filled in by content collection scan).
// We default to empty; the codex app populates it via a side-effect import.
const shippedUnitIds = new Set<string>();

export function setShippedUnitIds(ids: Iterable<string>) {
  shippedUnitIds.clear();
  for (const id of ids) shippedUnitIds.add(id);
}

const unitRefRenderer: RendererExtension = {
  name: "codexUnitRef",
  renderer(token: any) {
    const t = token as { unitId: string };
    if (shippedUnitIds.has(t.unitId)) {
      return `<a class="unit-ref" href="/u/${t.unitId}"><code>${t.unitId}</code></a>`;
    }
    return `<span class="unit-ref unit-ref--pending" title="unit pending"><code>${t.unitId}</code> <span class="unit-ref__badge">pending</span></span>`;
  },
};

// ---------------------------------------------------------------------------
// Image renderer override
// ---------------------------------------------------------------------------
// Default marked v15 passes alt text through unescaped, so quoted labels in
// the markdown source ("ker T", "coker T", etc.) produce HTML attributes with
// literal inner double quotes — which break Vite's parse5 HTML transform in
// dev, and any strict downstream HTML consumer. Override the renderer to
// escape href, alt, and title at attribute level.

interface MarkedImageToken {
  href: string;
  title: string | null;
  text: string;
}

// ---------------------------------------------------------------------------
// Internal production-note suppression
// ---------------------------------------------------------------------------
// The production pipeline appends a trailing provenance note to each unit /
// essay body — production wave/cycle, date, agent model, `hooks_out` targets,
// `PLAN.md §` pointers, draft status. These are useful project records but
// leak internal scaffolding onto reader-facing pages. We keep them in the
// markdown source and strip them at render time.
//
// Signature: a paragraph that opens with a *single* `*`/`_` (italic, never a
// `**bold**` content lead-in) and carries an unambiguous production token.
// Validated to match every production note and no curriculum prose.

const PRODUCTION_NOTE_TOKENS =
  /(agent-drafted|hooks_out|hooks_in|All hooks|\bseed unit\b|to be resolved during|cross-domain audit|sourcing pass|Cross-references\.|Citation status\.|docs\/plans\/|PLAN\.md|reference\/ archive|pending\+pointer|\bunit #\d|[Pp]roduced manually|[Pp]roduced 20\d\d|produced by (?:claude|gpt|glm|deepseek)|First production by|deepened (?:to|from|in|as|per|\d)|deepening\b|\bWave \d|\bCycle [0-9A-Z]|\bPass \d unit|\bP\d unit|v0\.\d Strand|Strand [A-Z] unit|Phase \d\.\d|Pilot unit|claude-opus|claude-sonnet|claude-haiku|claude-glm|glm-agent|gpt-[0-9]|deepseek|autonomous production|Catalog entry|CONCEPT_CATALOG|Citations marked\s+`?TODO_REF|item-A block|Section \d+ opener|first production unit)/;

function isProductionNote(text: string): boolean {
  const t = text.trim();
  if (!(/^\*(?!\*)/.test(t) || /^_(?!_)/.test(t))) return false;
  return PRODUCTION_NOTE_TOKENS.test(text);
}

const THEMATIC_BREAK = /^\s*(-{3,}|\*{3,}|_{3,})\s*$/;

// Some units append a `Catalog entry` section that dumps the unit's own
// frontmatter (concept id, status, produced_by, word count, dates) — as a
// fenced block, bullet list, table, or inline after the heading. That's
// internal metadata, not reader content. Strip the heading through the next
// heading / rule / end-of-document, plus any rule that precedes it.
function stripCatalogEntry(markdown: string): string {
  // Catalog-entry sections are always terminal — strip the heading through
  // end-of-document. Using `(?=$)` instead of "next heading" avoids stopping
  // prematurely on `###` lines inside the section's fenced code block.
  return markdown.replace(
    /\n+(?:-{3,}[ \t]*\n+)?#{1,6}[ \t]*Catalog entry\b[\s\S]*$/i,
    "\n",
  );
}

// Replace internal field-name jargon ("the frontmatter's `lean_mathlib_gap`
// field", "no `lean_module`") with reader-friendly phrasing. Backticked
// forms only — bare YAML keys inside fenced code examples are left alone.
function cleanProseJargon(markdown: string): string {
  return markdown
    // Compound phrases first (longest match wins).
    .replace(/the\s+frontmatter'?s?\s+`?lean_mathlib_gap`?\s+(?:field|block)/gi, "the Mathlib gap analysis")
    .replace(/the\s+`?lean_mathlib_gap`?\s+(?:field|block)\s+(?:in|of)\s+(?:the\s+)?frontmatter/gi, "the Mathlib gap analysis")
    .replace(/`?lean_mathlib_gap`?\s+in\s+(?:the\s+)?frontmatter/gi, "Mathlib gap analysis")
    .replace(/the\s+`?lean_mathlib_gap`?\s+(?:field|block)/gi, "the Mathlib gap analysis")
    .replace(/`lean_mathlib_gap`/g, "Mathlib gap analysis")
    .replace(/`lean_module`/g, "Lean module")
    // Generic frontmatter references in prose.
    .replace(/\bnamed in the frontmatter\b/gi, "documented in the unit metadata")
    .replace(/\bin the frontmatter\b/gi, "in the unit metadata")
    .replace(/\bfrom the frontmatter\b/gi, "from the unit metadata")
    .replace(/\bthe frontmatter'?s\b/gi, "the unit metadata's")
    .replace(/\bthe frontmatter\b/gi, "the unit metadata");
}

// Image alt text frequently carries "A schematic placeholder diagram for X".
// Readers don't need the placeholder signal; strip the word from alt-text.
function cleanImageAltPlaceholder(markdown: string): string {
  return markdown.replace(/(!\[[^\]]*?)\s+placeholder\b/gi, "$1");
}

// Some units wrap every body paragraph in literal `<p>…</p>` HTML. Marked
// treats raw-HTML blocks as opaque, which blocks inline syntax inside —
// `[ref:]` markers in particular never get tokenized. Strip the redundant
// wrapper tags; markdown will paragraph the content normally.
function stripRedundantPTags(markdown: string): string {
  return markdown.replace(/^<p>/gm, "").replace(/<\/p>$/gm, "");
}

// Collapsible `<details>` exercise-answer blocks are HTML blocks; without a
// blank line inside, marked treats their contents as opaque raw HTML and
// inline syntax like `[ref:]` never tokenizes. Inject blank lines so the
// inner content is parsed as markdown per CommonMark HTML-block rules.
function openDetailsBlocks(markdown: string): string {
  return markdown
    .replace(/(<summary>[^<]*<\/summary>)\n(?!\n)/g, "$1\n\n")
    .replace(/(?<!\n)\n<\/details>/g, "\n\n</details>");
}

// Inline editorial TODO markers left in prose, e.g. `**[Need to source — …]**`.
// Self-contained bold spans; consume one leading space so removal doesn't
// leave a "word ," artifact. (We do not touch unbracketed prose such as
// "no citation needed".)
function stripEditorialMarkers(markdown: string): string {
  return markdown.replace(
    / ?\*{0,2}\[Need to source\b[^\]]*\]\*{0,2}/gi,
    "",
  );
}

// Remove production notes from raw markdown along with the `---` rule that
// precedes them, so no orphan horizontal rule is left at the foot of the page.
function stripProductionNotes(markdown: string): string {
  const blocks = markdown.split(/\n{2,}/);
  const keep: string[] = [];
  for (const b of blocks) {
    if (isProductionNote(b)) {
      if (keep.length && THEMATIC_BREAK.test(keep[keep.length - 1])) keep.pop();
      continue;
    }
    keep.push(b);
  }
  while (keep.length && (THEMATIC_BREAK.test(keep[keep.length - 1]) || keep[keep.length - 1].trim() === "")) {
    keep.pop();
  }
  return keep.join("\n\n");
}

// ---------------------------------------------------------------------------
// Public extension
// ---------------------------------------------------------------------------

// The unit Visual sections carry auto-generated placeholder SVG diagrams
// (`/img/<slug>-placeholder.svg`). They are not yet at a quality bar we trust to
// teach from, so we suppress every rendered image site-wide while keeping the
// source `![...]()` tags intact (validator/provenance untouched) and the prose
// description in each Visual section visible. Flip to `false` to bring images
// back once real diagrams replace the placeholders.
const HIDE_IMAGES = true;

export const codexMarkedExtensions = {
  extensions: [
    refTokenizer,
    refRenderer,
    unitRefTokenizer,
    unitRefRenderer,
  ],
  renderer: {
    image(token: MarkedImageToken) {
      if (HIDE_IMAGES) return "";
      const { href, title, text } = token;
      const safeHref = escapeHtml(href);
      const safeAlt = escapeHtml(text);
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";
      return `<img src="${safeHref}" alt="${safeAlt}"${titleAttr} />`;
    },
    // Tier markers in section headings (`## Intuition [Beginner]`) render as
    // styled pills instead of raw bracketed text. The toggle no longer hides
    // tiers, so the marker is the reader's signal for which tier they're in.
    heading(this: any, token: any) {
      const depth = Math.min(Math.max(token?.depth || 2, 1), 6);
      const html = this.parser.parseInline(token.tokens);
      const m = html.match(/^([\s\S]*?)\s*\[(Beginner|Intermediate\+?|Master)\]\s*$/);
      if (!m) return `<h${depth}>${html}</h${depth}>`;
      const label = m[2];
      const cls = label.toLowerCase().replace("+", "-plus");
      return `<h${depth}>${m[1]} <span class="tier-pill tier-pill--${cls}">${label}</span></h${depth}>`;
    },
  },
  hooks: {
    preprocess(markdown: string) {
      return stripProductionNotes(
        stripEditorialMarkers(
          stripCatalogEntry(
            stripRedundantPTags(
              openDetailsBlocks(
                cleanImageAltPlaceholder(cleanProseJargon(markdown)),
              ),
            ),
          ),
        ),
      );
    },
  },
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
