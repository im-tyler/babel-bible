import katex from "katex";

/** Server-rendered KaTeX. Math is content, so this stays static (no island). */
function render(tex: string, displayMode: boolean): string {
  return katex.renderToString(tex, {
    displayMode,
    throwOnError: false,
    output: "html",
  });
}

export function MathBlock({ tex }: { tex: string }) {
  return (
    <div
      class="pm-math-block"
      // KaTeX output is generated from our own trusted strings.
      dangerouslySetInnerHTML={{ __html: render(tex, true) }}
    />
  );
}

export function MathInline({ tex }: { tex: string }) {
  return <span dangerouslySetInnerHTML={{ __html: render(tex, false) }} />;
}
