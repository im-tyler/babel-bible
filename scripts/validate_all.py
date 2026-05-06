#!/usr/bin/env python3
"""Validate every unit in `content/` against the rubric in QUALITY_RUBRIC.md.

Walks the content tree, invokes `validate_unit.py` on each unit as a
subprocess (one process per unit, simple and robust across Python
versions), aggregates results, and exits non-zero if any unit fails.

Usage:
    python validate_all.py [--root <codex-root>]

Exit code:
    0 — every unit passes every automated check
    1 — at least one unit fails OR an exception was raised
"""
from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path


def find_repo_root(start: Path) -> Path:
    cur = start.resolve()
    for ancestor in [cur, *cur.parents]:
        if (ancestor / "OVERVIEW.md").exists():
            return ancestor
    raise SystemExit(f"Could not locate codex/ root from {start}")


SUMMARY_RE = re.compile(r"\s*(\d+)/(\d+)\s+checks passed\.")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", type=Path, default=Path.cwd(),
                    help="codex repo root (auto-detected if omitted)")
    args = ap.parse_args()

    repo_root = find_repo_root(args.root)
    validator = repo_root / "scripts" / "validate_unit.py"
    if not validator.exists():
        raise SystemExit(f"validate_unit.py not found at {validator}")

    content_root = repo_root / "content"
    if not content_root.exists():
        print(f"No content/ directory at {content_root}; nothing to validate.")
        sys.exit(0)

    units = sorted(content_root.rglob("*.md"))
    if not units:
        print(f"No units found under {content_root}.")
        sys.exit(0)

    print(f"Validating {len(units)} units against QUALITY_RUBRIC.md …")
    print()

    failures: list[tuple[Path, str]] = []
    grand_total_passed = 0
    grand_total_checks = 0

    for unit_path in units:
        rel = unit_path.relative_to(repo_root)
        result = subprocess.run(
            [sys.executable, str(validator), str(unit_path)],
            capture_output=True,
            text=True,
        )
        out = result.stdout

        m = SUMMARY_RE.search(out)
        if m:
            passed, total = int(m.group(1)), int(m.group(2))
            grand_total_passed += passed
            grand_total_checks += total
        else:
            passed, total = 0, 0

        if result.returncode == 0:
            print(f"  ✓ {rel}  ({passed}/{total})")
        else:
            print(f"  ✗ {rel}  ({passed}/{total})")
            failed_lines = [ln for ln in out.splitlines() if "[✗]" in ln]
            for ln in failed_lines[:6]:
                print(f"        {ln.strip()}")
            failures.append((unit_path, out))

    print()
    print(f"Overall: {grand_total_passed}/{grand_total_checks} checks passed across {len(units)} units")
    if failures:
        print(f"  {len(failures)} unit(s) failed:")
        for path, _ in failures:
            print(f"    - {path.relative_to(repo_root)}")
        print()
        print("Re-run `validate_unit.py <path>` against any failing unit for full detail.")
        sys.exit(1)

    print("All units pass automated rubric. Ready to ship.")
    sys.exit(0)


if __name__ == "__main__":
    main()
