#!/usr/bin/env python3
"""Keep lean/Codex.lean's import list in lockstep with the on-disk module tree.

Every `lean/Codex/**/*.lean` file must be imported by `lean/Codex.lean`
exactly once, and Codex.lean must import nothing that is not a module on
disk. Lake builds the `Codex` library from its `Codex` root, so a module
missing from this import list is silently never type-checked.

Usage:
    python3 scripts/check_codex_imports.py          # check; exit 1 on divergence
    python3 scripts/check_codex_imports.py --fix    # regenerate lean/Codex.lean

Also invoked from scripts/validate_all.py on every run.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

HEADER = """\
/-
  Codex — top-level Lean library.

  Each curriculum unit at `lean_status: full` or `lean_status: partial`
  has a corresponding module under `Codex/<Section>/<Slug>.lean`.
  This file imports the full set so `lake build` checks all of them.

  GENERATED FILE — do not hand-edit the import list. It mirrors every
  module under `lean/Codex/`, sorted by path. Regenerate with
  `python3 scripts/check_codex_imports.py --fix`; `scripts/validate_all.py`
  fails on divergence.
-/
"""


def find_repo_root(start: Path) -> Path:
    cur = start.resolve()
    for ancestor in [cur, *cur.parents]:
        if (ancestor / "OVERVIEW.md").exists():
            return ancestor
    raise SystemExit(f"Could not locate repo root from {start}")


def disk_modules(repo_root: Path) -> list[str]:
    codex_dir = repo_root / "lean" / "Codex"
    return sorted(
        "Codex." + ".".join(p.relative_to(codex_dir).with_suffix("").parts)
        for p in codex_dir.rglob("*.lean")
    )


def imported_modules(repo_root: Path) -> list[str]:
    text = (repo_root / "lean" / "Codex.lean").read_text(encoding="utf-8")
    return re.findall(r"^import\s+(Codex\.\S+)\s*$", text, re.MULTILINE)


def find_divergence(repo_root: Path) -> list[str]:
    """Human-readable problem lines; empty list means the sets agree."""
    disk = disk_modules(repo_root)
    imported = imported_modules(repo_root)
    disk_set = set(disk)
    imported_set = set(imported)
    missing = [m for m in disk if m not in imported_set]
    extra = [m for m in imported if m not in disk_set]
    dupes = sorted({m for m in imported if imported.count(m) > 1})
    problems = [f"module not imported by Codex.lean: {m}" for m in missing]
    problems += [f"import with no module on disk: {m}" for m in extra]
    problems += [f"duplicate import line: {m}" for m in dupes]
    return problems


def regenerate(repo_root: Path) -> None:
    lines = [HEADER.rstrip("\n"), ""]
    lines += [f"import {m}" for m in disk_modules(repo_root)]
    (repo_root / "lean" / "Codex.lean").write_text(
        "\n".join(lines) + "\n", encoding="utf-8")


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--root", type=Path,
                    default=Path(__file__).resolve().parent.parent,
                    help="repo root (auto-detected if omitted)")
    ap.add_argument("--fix", action="store_true",
                    help="regenerate lean/Codex.lean from the module tree")
    args = ap.parse_args()

    repo_root = find_repo_root(args.root)
    if args.fix:
        regenerate(repo_root)
        print(f"Regenerated lean/Codex.lean ({len(disk_modules(repo_root))} imports).")
        return

    problems = find_divergence(repo_root)
    if problems:
        print(f"Codex.lean import set diverges from lean/Codex/ module tree "
              f"({len(problems)} problem(s)):")
        for p in problems:
            print(f"  - {p}")
        print("Fix: python3 scripts/check_codex_imports.py --fix")
        sys.exit(1)
    print("Codex.lean imports match the on-disk module tree.")


if __name__ == "__main__":
    main()
