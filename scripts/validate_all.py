#!/usr/bin/env python3
"""Validate units in `content/` against the rubric in docs/specs/QUALITY_RUBRIC.md.

Walks the content tree, runs `validate_unit.py` in-process so repo-wide
indexes are reused, aggregates results, and exits non-zero if any unit fails.

Usage:
    python validate_all.py [--root <codex-root>]
    python validate_all.py --path content/14-genchem-pchem --path content/22-language

Exit code:
    0 — every unit passes every automated check
    1 — at least one unit fails OR an exception was raised
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path


def find_repo_root(start: Path) -> Path:
    cur = start.resolve()
    for ancestor in [cur, *cur.parents]:
        if (ancestor / "OVERVIEW.md").exists():
            return ancestor
    raise SystemExit(f"Could not locate codex/ root from {start}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", type=Path, default=Path.cwd(),
                    help="codex repo root (auto-detected if omitted)")
    ap.add_argument("--path", action="append", type=Path,
                    help="content subtree or unit file to validate; repeatable")
    args = ap.parse_args()

    repo_root = find_repo_root(args.root)
    sys.path.insert(0, str(repo_root / "scripts"))
    from validate_unit import validate

    if args.path:
        units: list[Path] = []
        for requested in args.path:
            path = requested if requested.is_absolute() else repo_root / requested
            if path.is_file():
                units.append(path)
            elif path.is_dir():
                units.extend(sorted(path.rglob("*.md")))
            else:
                raise SystemExit(f"Path not found: {requested}")
        units = sorted(set(units))
    else:
        content_root = repo_root / "content"
        if not content_root.exists():
            print(f"No content/ directory at {content_root}; nothing to validate.")
            sys.exit(0)
        units = sorted(content_root.rglob("*.md"))
    if not units:
        print("No units found.")
        sys.exit(0)

    print(f"Validating {len(units)} units against docs/specs/QUALITY_RUBRIC.md …")
    print()

    failures: list[tuple[Path, str]] = []
    grand_total_passed = 0
    grand_total_checks = 0

    for unit_path in units:
        rel = unit_path.relative_to(repo_root)
        try:
            report = validate(unit_path)
            passed = sum(1 for check in report.checks if check.passed)
            total = len(report.checks)
            grand_total_passed += passed
            grand_total_checks += total
        except Exception as exc:
            passed = 0
            total = 0
            print(f"  ✗ {rel}  ({passed}/{total})")
            print(f"        exception: {exc}")
            failures.append((unit_path, str(exc)))
            continue

        if report.all_passed:
            print(f"  ✓ {rel}  ({passed}/{total})")
        else:
            print(f"  ✗ {rel}  ({passed}/{total})")
            for check in [c for c in report.checks if not c.passed][:6]:
                print(f"        [✗] {check.name}")
                if check.detail:
                    print(f"            {check.detail.splitlines()[0]}")
            failures.append((unit_path, ""))

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
