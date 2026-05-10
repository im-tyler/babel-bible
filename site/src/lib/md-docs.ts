// Generic markdown-doc reader used by /specs, /plans, and /sources.
// Reads a directory of .md files and renders each through marked + KaTeX.

import { Marked } from "marked";
import markedKatex from "marked-katex-extension";
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { resolve, basename } from "node:path";

export interface DocSummary {
  slug: string;       // filename without .md
  title: string;      // first H1 in the file
  filePath: string;
}

export interface RenderedDoc {
  slug: string;
  title: string;
  html: string;
}

const _marked = new Marked();
_marked.use(markedKatex({ throwOnError: false, output: "html", strict: "ignore", nonStandard: true }) as any);

function firstHeading(body: string): string {
  const m = /^#\s+(.+)$/m.exec(body);
  return m ? m[1].trim() : "";
}

export function listDocs(dir: string): DocSummary[] {
  if (!existsSync(dir)) return [];
  const out: DocSummary[] = [];
  for (const name of readdirSync(dir)) {
    if (!name.endsWith(".md")) continue;
    const filePath = resolve(dir, name);
    let s;
    try { s = statSync(filePath); } catch { continue; }
    if (!s.isFile()) continue;
    const slug = name.replace(/\.md$/, "");
    const body = readFileSync(filePath, "utf-8");
    out.push({ slug, title: firstHeading(body) || slug, filePath });
  }
  out.sort((a, b) => a.slug.localeCompare(b.slug));
  return out;
}

export function renderDoc(dir: string, slug: string): RenderedDoc | null {
  const filePath = resolve(dir, `${slug}.md`);
  if (!existsSync(filePath)) return null;
  const body = readFileSync(filePath, "utf-8");
  const title = firstHeading(body) || slug;
  const stripped = body.replace(/^#\s+.+\n/, "");
  const html = _marked.parse(stripped) as string;
  return { slug, title, html };
}

export const SPECS_DIR = resolve(import.meta.dirname, "../../../docs/specs");
export const PLANS_DIR = resolve(import.meta.dirname, "../../../docs/plans");
