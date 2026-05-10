// Audit-file utilities. Reads `plans/fasttrack/*.md` and exposes:
//   - a list of available audit slugs
//   - per-slug rendered HTML (via the same marked pipeline as units)
//
// Audit files are plain markdown without frontmatter. Slug = filename
// without .md.

import { Marked } from "marked";
import markedKatex from "marked-katex-extension";
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const AUDITS_DIR = resolve(import.meta.dirname, "../../../plans/fasttrack");

export interface AuditSummary {
  slug: string;
  title: string;
  ftEntry?: string;
  filePath: string;
}

function firstHeading(body: string): string {
  const m = /^#\s+(.+)$/m.exec(body);
  return m ? m[1].trim() : "";
}

function ftEntryFromBody(body: string): string | undefined {
  const m =
    /Fast Track\s+(?:entry\s*[:=]\s*|)\b(\d+\.\d+)\b/i.exec(body) ||
    /\(Fast Track\s+(\d+\.\d+)\)/i.exec(body);
  return m ? m[1] : undefined;
}

export function listAudits(): AuditSummary[] {
  if (!existsSync(AUDITS_DIR)) return [];
  const out: AuditSummary[] = [];
  for (const name of readdirSync(AUDITS_DIR)) {
    if (!name.endsWith(".md")) continue;
    const filePath = resolve(AUDITS_DIR, name);
    let s;
    try { s = statSync(filePath); } catch { continue; }
    if (!s.isFile()) continue;
    const slug = name.replace(/\.md$/, "");
    const body = readFileSync(filePath, "utf-8");
    const title = firstHeading(body) || slug;
    out.push({ slug, title, ftEntry: ftEntryFromBody(body), filePath });
  }
  out.sort((a, b) => a.slug.localeCompare(b.slug));
  return out;
}

const _marked = new Marked();
_marked.use(markedKatex({ throwOnError: false, output: "html", strict: "ignore", nonStandard: true }) as any);

export function renderAudit(slug: string): { title: string; html: string } | null {
  const filePath = resolve(AUDITS_DIR, `${slug}.md`);
  if (!existsSync(filePath)) return null;
  const body = readFileSync(filePath, "utf-8");
  const title = firstHeading(body) || slug;
  // Strip the leading H1 since the page header renders the title separately.
  const stripped = body.replace(/^#\s+.+\n/, "");
  const html = _marked.parse(stripped) as string;
  return { title, html };
}
