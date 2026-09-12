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
import re
import shutil
import subprocess
import sys
from pathlib import Path

LEAN_PLACEHOLDER_RE = re.compile(r"\b(sorry|admit|sorryAx)\b")


def _strip_lean_comments(text: str) -> str:
    text = re.sub(r"/-[\s\S]*?-/", "", text)  # block comments (non-nested approximation)
    text = re.sub(r"--[^\n]*", "", text)      # line comments
    return text


def check_lean_contract(repo_root: Path,
                        lean_units: list[tuple[str, dict]]) -> list[str]:
    """Enforce the real `lean_status` contract at the aggregate level.

    Per-unit `validate_unit.py` checks are existence-only by design; this
    stage, scoped to the units selected for this run:

    - runs one `lake build` over `lean/` — `Codex.lean` imports every
      module (enforced by `check_codex_imports`), so a successful build
      puts every `full`/`partial` module in the aggregate build closure;
    - for `lean_status: full` units, additionally scans the module source
      for proof placeholders (`sorry` / `admit` / `sorryAx`) and fails
      when any are found; `partial` units need only be in the closure.

    When no lake toolchain is on PATH this emits a warning and returns no
    failures (a warning, not a silent pass, that a toolchain-bearing CI
    must do the elaboration).
    """
    problems: list[str] = []
    if shutil.which("lake") is None:
        print("WARNING: no lake toolchain on PATH — Lean elaboration NOT checked.")
        print("         (lean_status: full modules were not built nor scanned for sorry/admit/sorryAx)")
        return problems

    print("Running `lake build` in lean/ (aggregate Lean gate) …")
    proc = subprocess.run(["lake", "build"], cwd=repo_root / "lean",
                          capture_output=True, text=True)
    if proc.returncode != 0:
        problems.append(f"lake build failed (exit {proc.returncode}); first errors:")
        lines = (proc.stdout + "\n" + proc.stderr).splitlines()
        err_lines = [ln for ln in lines if ln.strip().startswith("error")][:10]
        for ln in (err_lines or [ln for ln in lines if ln.strip()][-5:]):
            problems.append(f"  {ln.strip()}")
        return problems

    full_scanned = 0
    for rel, fm in lean_units:
        if fm.get("lean_status") != "full":
            continue
        module = str(fm.get("lean_module", "")).strip()
        if not module:
            continue  # already a per-unit failure
        path = repo_root / "lean" / (module.replace(".", "/") + ".lean")
        if not path.exists():
            continue  # already a per-unit failure
        full_scanned += 1
        hits = sorted(set(LEAN_PLACEHOLDER_RE.findall(
            _strip_lean_comments(path.read_text(encoding="utf-8")))))
        if hits:
            problems.append(
                f"{rel}: lean_status: full but module {module} contains "
                f"proof placeholder(s): {', '.join(hits)}")
    print(f"lake build OK; {full_scanned} full module(s) scanned for placeholders.")
    return problems


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
    from check_codex_imports import find_divergence

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
    lean_units: list[tuple[str, dict]] = []
    grand_total_passed = 0
    grand_total_checks = 0

    for unit_path in units:
        rel = unit_path.relative_to(repo_root)
        try:
            report = validate(unit_path)
            if report.frontmatter.get("lean_status") in ("full", "partial"):
                lean_units.append((str(rel), report.frontmatter))
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

    # ------------------------------------------------------------------
    # Repo-level gates (beyond per-unit checks)
    # ------------------------------------------------------------------
    aggregate_failures: list[str] = []

    # Gate: Codex.lean must import every module under lean/Codex/, so a
    # module can never silently escape the aggregate `lake build`.
    codex_problems = find_divergence(repo_root)
    if codex_problems:
        print()
        print(f"Codex.lean import check FAILED ({len(codex_problems)} problem(s)):")
        for p in codex_problems:
            print(f"  - {p}")
        aggregate_failures.extend(codex_problems)

    # Gate: the real lean_status contract (aggregate `lake build` +
    # placeholder scan for `full` modules; see check_lean_contract).
    if lean_units:
        lean_problems = check_lean_contract(repo_root, lean_units)
        if lean_problems:
            print()
            print(f"Lean elaboration check FAILED ({len(lean_problems)} problem(s)):")
            for p in lean_problems:
                print(f"  - {p}")
            aggregate_failures.extend(lean_problems)

    print()
    print(f"Overall: {grand_total_passed}/{grand_total_checks} checks passed across {len(units)} units")
    if failures or aggregate_failures:
        if failures:
            print(f"  {len(failures)} unit(s) failed:")
            for path, _ in failures:
                print(f"    - {path.relative_to(repo_root)}")
        if aggregate_failures:
            print(f"  {len(aggregate_failures)} repo-level check(s) failed (details above).")
        print()
        print("Re-run `validate_unit.py <path>` against any failing unit for full detail.")
        sys.exit(1)

    print("All units pass automated rubric. Ready to ship.")
    sys.exit(0)


if __name__ == "__main__":
    main()
