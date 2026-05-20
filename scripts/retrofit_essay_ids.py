#!/usr/bin/env python3
"""Retrofit `id:` and `applies_to:` frontmatter onto the 6 existing philosophy essays.

Per docs/plans/PHILOSOPHY_PLAN.md §8.1. Idempotent: re-running on already-retrofitted
files makes no changes. If an existing `id:` disagrees with the expected value, the
script errors loudly rather than overwriting.

Manual line parsing — no YAML library dependency.
"""

from __future__ import annotations

import sys
from pathlib import Path

ESSAYS_DIR = (
    Path(__file__).resolve().parent.parent
    / "site"
    / "src"
    / "content"
    / "philosophy"
)

# Verbatim from PHILOSOPHY_PLAN.md §8.1
ASSIGNMENTS: list[tuple[str, str]] = [
    ("01-reflexivity.md", "20.essays.01"),
    ("02-geometry-of-disclosure.md", "20.essays.02"),
    ("03-perfected-figure.md", "20.essays.03"),
    ("04-what-passes-between.md", "20.essays.04"),
    ("05-practice.md", "20.essays.05"),
    ("06-realization.md", "20.essays.06"),
]

APPLIES_TO_VALUE = "[20]"


def split_frontmatter(text: str) -> tuple[list[str], str, str]:
    """Split a markdown file into (frontmatter_lines, body, line_ending).

    Returns the frontmatter lines (without the enclosing `---` markers),
    the body text (everything after the closing `---`, including the
    newline that follows it), and the detected line ending.

    Raises ValueError if the file does not start with a frontmatter block.
    """
    line_ending = "\r\n" if "\r\n" in text.split("\n", 1)[0:1][0:1] and False else "\n"
    # Detect line ending by inspecting the first line break
    if "\r\n" in text:
        line_ending = "\r\n"
    else:
        line_ending = "\n"

    lines = text.split(line_ending)
    if not lines or lines[0].strip() != "---":
        raise ValueError("file does not begin with '---' frontmatter delimiter")

    # Find closing ---
    close_idx = None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            close_idx = i
            break
    if close_idx is None:
        raise ValueError("frontmatter has no closing '---' delimiter")

    fm_lines = lines[1:close_idx]
    # Body starts at close_idx + 1; rejoin with original line ending
    body = line_ending.join(lines[close_idx + 1 :])
    return fm_lines, body, line_ending


def parse_field(line: str) -> tuple[str, str] | None:
    """Return (key, value) for a simple `key: value` line, else None."""
    stripped = line.lstrip()
    if not stripped or stripped.startswith("#"):
        return None
    if ":" not in stripped:
        return None
    # Top-level fields only (no leading whitespace)
    if line[: len(line) - len(stripped)] != "":
        return None
    key, _, value = stripped.partition(":")
    return key.strip(), value.strip()


def retrofit(path: Path, expected_id: str) -> str:
    """Apply retrofit to one file. Returns a status string."""
    original = path.read_text(encoding="utf-8")
    try:
        fm_lines, body, line_ending = split_frontmatter(original)
    except ValueError as e:
        return f"error: {e}"

    existing: dict[str, str] = {}
    for ln in fm_lines:
        parsed = parse_field(ln)
        if parsed is not None:
            existing[parsed[0]] = parsed[1]

    has_id = "id" in existing
    has_applies = "applies_to" in existing

    # Validate existing id if present
    if has_id:
        # Strip surrounding quotes for comparison
        current_id = existing["id"].strip().strip('"').strip("'")
        if current_id != expected_id:
            return (
                f"error: existing id '{current_id}' does not match expected "
                f"'{expected_id}'; refusing to overwrite"
            )

    # Validate existing applies_to if present (must equal [20])
    if has_applies:
        current_applies = existing["applies_to"].strip()
        # Normalize whitespace inside brackets
        normalized = current_applies.replace(" ", "")
        if normalized != "[20]":
            return (
                f"error: existing applies_to '{current_applies}' does not match "
                f"expected '[20]'; refusing to overwrite"
            )

    if has_id and has_applies:
        return "already-correct"

    # Append missing fields to the end of the frontmatter block
    new_fm_lines = list(fm_lines)
    if not has_id:
        new_fm_lines.append(f"id: {expected_id}")
    if not has_applies:
        new_fm_lines.append(f"applies_to: {APPLIES_TO_VALUE}")

    new_text = (
        "---"
        + line_ending
        + line_ending.join(new_fm_lines)
        + line_ending
        + "---"
        + line_ending
        + body
    )

    # Safety: body bytes must be unchanged
    _, original_body, _ = split_frontmatter(original)
    _, new_body, _ = split_frontmatter(new_text)
    if original_body != new_body:
        return "error: body changed during rewrite (bug)"

    path.write_text(new_text, encoding="utf-8")
    return "added"


def main() -> int:
    if not ESSAYS_DIR.is_dir():
        print(f"error: essays directory not found: {ESSAYS_DIR}", file=sys.stderr)
        return 2

    any_error = False
    for filename, essay_id in ASSIGNMENTS:
        path = ESSAYS_DIR / filename
        if not path.is_file():
            print(f"{filename}: error: file not found")
            any_error = True
            continue
        status = retrofit(path, essay_id)
        print(f"{filename}: {status}")
        if status.startswith("error:"):
            any_error = True

    return 1 if any_error else 0


if __name__ == "__main__":
    sys.exit(main())
