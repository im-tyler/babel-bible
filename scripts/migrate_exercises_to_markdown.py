#!/usr/bin/env python3
"""One-shot migration: rewrite exercise blocks from compact HTML format
into markdown-friendly format so KaTeX (and any other inline marked
extension) can process the math inside hints and answers.

Idempotent: if a file already uses the markdown form, it's left alone.

The transformation:

  <aside class="exercise" ...>
  <p class="exercise__label"><strong>X</strong></p>
  <p>prompt</p>
  <ol class="exercise__options" type="A">
  <li>opt1</li>
  ...
  </ol>
  <details class="exercise__hint"><summary>Hint</summary>
  hint text
  </details>
  <details class="exercise__answer"><summary>Answer</summary>
  <p>answer paragraphs</p>
  </details>
  </aside>

becomes

  <aside class="exercise" ... markdown="1">

  **X**

  prompt

  A. opt1
  B. opt2
  ...

  <details class="exercise__hint"><summary>Hint</summary>

  hint text

  </details>

  <details class="exercise__answer"><summary>Answer</summary>

  answer paragraphs (one per blank-line-separated chunk)

  </details>

  </aside>

The blank lines around each inner element are required by `marked` to
re-enter markdown parsing inside an HTML block.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ASIDE_RE = re.compile(r"<aside class=\"exercise\"([^>]*)>(.*?)</aside>", re.DOTALL)


def transform_aside(attrs: str, body: str) -> str:
    # Bail if already migrated (presence of `markdown="1"` attribute).
    if 'markdown="1"' in attrs:
        return f"<aside class=\"exercise\"{attrs}>{body}</aside>"

    # Label: <p class="exercise__label"><strong>...</strong></p>
    label_match = re.search(
        r'<p class="exercise__label"><strong>(.+?)</strong></p>', body, re.DOTALL
    )
    label = label_match.group(1).strip() if label_match else None
    if label_match:
        body = body.replace(label_match.group(0), "")

    # Prompt: first <p>...</p> after label removal that isn't inside <details>
    # We process by extracting elements in order.
    parts: list[str] = []
    if label:
        parts.append(f"**{label}**")

    # Walk through the body, capturing top-level elements.
    pos = 0
    while pos < len(body):
        # skip whitespace
        while pos < len(body) and body[pos] in " \t\r\n":
            pos += 1
        if pos >= len(body):
            break

        # Try to match top-level constructs in order.
        rest = body[pos:]

        # <p>...</p> (single-line or multi-line, no nested <p>)
        m_p = re.match(r"<p>(.*?)</p>", rest, re.DOTALL)
        # <ol class="exercise__options" ...>...</ol>
        m_ol = re.match(
            r'<ol class="exercise__options"[^>]*>(.*?)</ol>', rest, re.DOTALL
        )
        # <details class="exercise__X">...</details>
        m_det = re.match(
            r'<details class="(exercise__\w+)"><summary>(.+?)</summary>(.*?)</details>',
            rest,
            re.DOTALL,
        )

        if m_det:
            cls, summary, inner = m_det.group(1), m_det.group(2), m_det.group(3)
            inner_md = html_inner_to_markdown(inner)
            parts.append(
                f'<details class="{cls}"><summary>{summary}</summary>\n\n{inner_md}\n\n</details>'
            )
            pos += m_det.end()
        elif m_ol:
            inner = m_ol.group(1)
            options = re.findall(r"<li>(.*?)</li>", inner, re.DOTALL)
            letters = ["A", "B", "C", "D", "E", "F"]
            lines = [f"{letters[i]}. {opt.strip()}" for i, opt in enumerate(options)]
            parts.append("\n".join(lines))
            pos += m_ol.end()
        elif m_p:
            parts.append(m_p.group(1).strip())
            pos += m_p.end()
        else:
            # unknown content; advance one char to avoid infinite loop
            pos += 1

    new_body = "\n\n" + "\n\n".join(parts) + "\n\n"
    return f'<aside class="exercise"{attrs} markdown="1">{new_body}</aside>'


def html_inner_to_markdown(s: str) -> str:
    """Loose conversion: turn <p>...</p> into a paragraph; bare text stays bare."""
    chunks = re.findall(r"<p>(.*?)</p>", s, re.DOTALL)
    if chunks:
        return "\n\n".join(c.strip() for c in chunks)
    return s.strip()


def migrate_file(path: Path) -> int:
    text = path.read_text(encoding="utf-8")
    new_text, n = ASIDE_RE.subn(
        lambda m: transform_aside(m.group(1), m.group(2)), text
    )
    if n and new_text != text:
        path.write_text(new_text, encoding="utf-8")
    return n


def main():
    if len(sys.argv) > 1:
        targets = [Path(p) for p in sys.argv[1:]]
    else:
        # default: walk content/
        repo_root = Path(__file__).resolve().parent.parent
        targets = sorted((repo_root / "content").rglob("*.md"))

    total = 0
    for path in targets:
        n = migrate_file(path)
        if n:
            print(f"{path}: migrated {n} exercise block(s)")
            total += n
    print(f"\nTotal: {total} exercise block(s) migrated.")


if __name__ == "__main__":
    main()
