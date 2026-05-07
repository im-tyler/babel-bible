#!/usr/bin/env python3
"""Walk content/, collect every unit's `lean_mathlib_gap` and `lean_status`,
and emit `docs/catalogs/MATHLIB_GAPS.md` — a single rolled-up upstream-contribution
roadmap for Mathlib.

Run after producing or updating any unit. Idempotent; overwrites.

Usage:
    python build_mathlib_gaps.py
"""
from __future__ import annotations

import re
import sys
from pathlib import Path


def find_repo_root(start: Path) -> Path:
    cur = start.resolve()
    for ancestor in [cur, *cur.parents]:
        if (ancestor / "OVERVIEW.md").exists():
            return ancestor
    raise SystemExit(f"Could not locate codex/ root from {start}")


FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)


def parse_frontmatter(text: str) -> dict | None:
    m = FRONTMATTER_RE.match(text)
    if not m:
        return None
    fm: dict = {}
    block = m.group(1)
    # Lightweight parser: catches the fields we need without pulling YAML in.
    cur_key: str | None = None
    cur_value: list[str] | None = None
    for line in block.splitlines():
        if not line.strip():
            cur_key = None
            cur_value = None
            continue
        if line.startswith(" ") and cur_key:
            # Continuation of the previous block-style value
            if cur_value is not None:
                cur_value.append(line.strip())
            continue
        if ":" in line:
            key, _, value = line.partition(":")
            key = key.strip()
            value = value.strip()
            if value == "|":
                cur_key = key
                cur_value = []
                fm[key] = cur_value
            else:
                fm[key] = value
                cur_key = None
                cur_value = None
    # Join block-style values into single strings
    for key, value in list(fm.items()):
        if isinstance(value, list):
            fm[key] = "\n".join(value)
    return fm


def main():
    repo_root = find_repo_root(Path.cwd())
    content_root = repo_root / "content"
    if not content_root.exists():
        print("No content/ directory; nothing to do.")
        sys.exit(0)

    gaps: list[dict] = []
    for unit_path in sorted(content_root.rglob("*.md")):
        try:
            text = unit_path.read_text(encoding="utf-8")
        except Exception:
            continue
        fm = parse_frontmatter(text)
        if not fm:
            continue
        status = fm.get("lean_status", "")
        if status not in ("partial", "none"):
            continue
        gaps.append({
            "id": fm.get("id", unit_path.stem),
            "title": fm.get("title", "?"),
            "status": status,
            "module": fm.get("lean_module", ""),
            "gap": fm.get("lean_mathlib_gap", ""),
            "reviewer": fm.get("human_reviewer", "").strip('"'),
            "path": str(unit_path.relative_to(repo_root)),
        })

    out_path = repo_root / "docs/catalogs/MATHLIB_GAPS.md"
    lines = [
        "# Codex — Mathlib Gap Roadmap",
        "",
        f"Auto-generated from unit frontmatter (`lean_mathlib_gap` fields). Do not edit by hand; run `scripts/build_mathlib_gaps.py` to regenerate.",
        "",
        f"**Status:** {len(gaps)} units flag Mathlib gaps as of last regeneration.",
        "",
        "Each entry below corresponds to a Codex unit whose Lean formalisation is blocked or partial because Mathlib does not yet have the required infrastructure. Collectively these form the upstream-contribution roadmap. As Mathlib lands the listed material, the relevant Codex units can be promoted from `lean_status: none` / `partial` to `full`.",
        "",
        "## Conventions",
        "",
        "- **`status: partial`** — the unit's Lean module compiles statements but proofs are `sorry`-gated pending Mathlib.",
        "- **`status: none`** — Mathlib coverage is too thin to even state the theorem; the unit ships with a named human reviewer as the correctness gate.",
        "",
        "## Gaps by unit",
        "",
    ]

    for g in gaps:
        lines.append(f"### `{g['id']}` — {g['title']}")
        lines.append("")
        lines.append(f"- **Lean status:** `{g['status']}`")
        if g["module"]:
            lines.append(f"- **Module:** `{g['module']}`")
        if g["reviewer"]:
            lines.append(f"- **Human reviewer:** {g['reviewer']}")
        lines.append(f"- **Source:** [`{g['path']}`]({g['path']})")
        lines.append("")
        if g["gap"]:
            lines.append("**Mathlib gap:**")
            lines.append("")
            for paragraph in g["gap"].strip().split("\n"):
                lines.append(f"> {paragraph}" if paragraph.strip() else ">")
            lines.append("")

    if not gaps:
        lines.append("_No gaps flagged. Either the curriculum hasn't produced any `partial`/`none` units yet, or every unit has `lean_status: full`._")
        lines.append("")

    lines.append("---")
    lines.append("")
    lines.append("*Update by running `python scripts/build_mathlib_gaps.py`.*")
    lines.append("")

    out_path.write_text("\n".join(lines))
    print(f"Wrote {out_path.relative_to(repo_root)} ({len(gaps)} gaps).")


if __name__ == "__main__":
    main()
