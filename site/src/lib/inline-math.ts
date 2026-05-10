// Inline-math renderer for short fields (titles, single-paragraph notes).
// Unit titles like "Singular cohomology and de Rham theorem (with $\mathbb{Z}$
// coefficients)" must be run through KaTeX before display so the math shows
// as glyphs instead of literal TeX source.
//
// Safe on plain text — markedKatex is a no-op when no $...$ delimiter pairs
// are present. Returns an HTML string suitable for `dangerouslySetInnerHTML`.

import { Marked } from "marked";
import markedKatex from "marked-katex-extension";

const _md = new Marked({ gfm: true });
_md.use(
  markedKatex({
    throwOnError: false,
    output: "html",
    strict: "ignore",
    nonStandard: true,
  }) as any,
);

export function renderInline(s: string | undefined | null): string {
  if (!s) return "";
  return (_md.parseInline(String(s)) as string).trim();
}
