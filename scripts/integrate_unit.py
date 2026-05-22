#!/usr/bin/env python3
"""Integrate a newly-written unit into the corpus.

After an agent writes `content/.../<id>-<slug>.md`, run:

    python3 scripts/integrate_unit.py <id>

The integrator:
  1. Locates the file by id (search content/**/<id>-*.md).
  2. Runs the validator. If it fails, prints the failure and exits 1.
  3. Reads the unit's frontmatter (concept_catalog_id, prereqs, successors).
  4. Adds a stub catalog entry to docs/catalogs/CONCEPT_CATALOG.md if missing.
  5. Adds prereq + successor edges to manifests/deps.json (idempotent).
  6. Marks the unit as `shipped` in manifests/production/plan.json.
  7. Runs `python3 scripts/gen_placeholders.py` (idempotent).
  8. Runs `python3 scripts/measure_continuity.py` and confirms thresholds hold.
  9. Returns 0 on success.

Flags:
  --commit            also git-add + git-commit + git-push the change
  --message MSG       custom commit message
  --skip-continuity   skip the continuity threshold check
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
DEPS = ROOT / "manifests" / "deps.json"
CATALOG = ROOT / "docs" / "catalogs" / "CONCEPT_CATALOG.md"
PLAN = ROOT / "manifests" / "production" / "plan.json"


def find_unit_file(uid: str) -> Path | None:
    for p in CONTENT.rglob(f"{uid}-*.md"):
        return p
    return None


def parse_frontmatter(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^---\n([\s\S]*?)\n---\n", text)
    if not m:
        return {}
    fm = m.group(1)
    out = {}
    for line in fm.splitlines():
        m2 = re.match(r"^(\w+):\s*(.*)$", line)
        if m2:
            out[m2.group(1)] = m2.group(2).strip().strip('"')
    # Lists
    for field in ("prerequisites", "successors", "tiers_present"):
        m3 = re.search(rf"^{field}:\s*\n((?:\s+- .+\n?)*)", fm, re.M)
        if m3:
            items = []
            for line in m3.group(1).splitlines():
                m4 = re.match(r"\s*-\s*([^#\n]+?)(?:\s*#.*)?$", line)
                if m4:
                    v = m4.group(1).strip().strip('"\'')
                    if v:
                        items.append(v)
            out[field] = items
        # inline list
        m5 = re.search(rf"^{field}:\s*\[(.*?)\]", fm, re.M)
        if m5 and field not in out:
            out[field] = [s.strip().strip('"\'') for s in m5.group(1).split(",") if s.strip()]
    return out


def run(cmd: list[str], cwd: Path = ROOT, check: bool = True) -> subprocess.CompletedProcess:
    return subprocess.run(cmd, cwd=cwd, check=check, capture_output=True, text=True)


_PASS_RE = re.compile(r"\b(\d+)/(\d+) checks passed\b")


def validate(path: Path) -> tuple[bool, str]:
    proc = run(["python3", "scripts/validate_unit.py", str(path.relative_to(ROOT))],
               check=False)
    out = proc.stdout + proc.stderr
    m = _PASS_RE.search(out)
    return bool(m) and m.group(1) == m.group(2), out


def ensure_catalog_stub(catalog_id: str, title: str) -> bool:
    """Append a minimal catalog entry if absent. Returns True if added."""
    text = CATALOG.read_text(encoding="utf-8")
    if f"### {catalog_id}" in text:
        return False
    stub = (
        f"\n### {catalog_id}\n\n"
        f"- **title**: {title}\n"
        f"- **prerequisites**: (auto-stub; refine with audit context)\n"
        f"- **tier_anchors**:\n"
        f"  - master: TBD\n"
        f"  - intermediate: TBD\n"
        f"  - beginner: TBD\n"
        f"- **notes**: Auto-generated stub via integrate_unit.py — refine with the unit's actual content.\n"
    )
    CATALOG.write_text(text + stub, encoding="utf-8")
    return True


def update_deps(uid: str, prereqs: list[str], successors: list[str]) -> int:
    """Add edges idempotently. Returns # edges added."""
    deps = json.load(open(DEPS))
    shipped = deps.setdefault("shipped", [])
    if uid not in shipped:
        shipped.append(uid)
        shipped.sort()
    edges = deps.setdefault("edges", [])
    added = 0
    for p in prereqs:
        # Strip any "id  # comment" shape
        p = re.sub(r"\s+#.*$", "", p).strip()
        if not p:
            continue
        e = {"from": p, "to": uid, "state": "shipped"}
        if e not in edges:
            edges.append(e)
            added += 1
    for s in successors:
        s = re.sub(r"\s+#.*$", "", s).strip()
        if not s:
            continue
        e = {"from": uid, "to": s, "state": "shipped"}
        if e not in edges:
            edges.append(e)
            added += 1
    DEPS.write_text(json.dumps(deps, indent=2, ensure_ascii=False), encoding="utf-8")
    return added


def update_plan(uid: str) -> bool:
    if not PLAN.exists():
        return False
    plan = json.load(open(PLAN))
    u = plan.get("units", {}).get(uid)
    if not u:
        plan.setdefault("units", {})[uid] = {
            "id": uid, "status": "shipped", "kind": "new_unit",
            "source_audits": ["integrator-direct"],
        }
    else:
        u["status"] = "shipped"
    PLAN.write_text(json.dumps(plan, indent=2, ensure_ascii=False), encoding="utf-8")
    return True


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("uid", help="unit id, e.g. 05.09.03")
    ap.add_argument("--commit", action="store_true")
    ap.add_argument("--push", action="store_true")
    ap.add_argument("--message", default=None)
    ap.add_argument("--skip-continuity", action="store_true")
    args = ap.parse_args()

    path = find_unit_file(args.uid)
    if not path:
        print(f"error: no file matches {args.uid}-*.md under content/", file=sys.stderr)
        return 2

    print(f"== integrate {args.uid}: {path.relative_to(ROOT)}")

    print("-- validating ...")
    ok, out = validate(path)
    if not ok:
        print(out)
        print("VALIDATOR FAILED — fix the unit and re-run.")
        return 1
    m = _PASS_RE.search(out)
    print(f"   {m.group(1)}/{m.group(2)} ✓" if m else "   ✓")

    fm = parse_frontmatter(path)
    catalog_id = fm.get("concept_catalog_id", "")
    title = fm.get("title", "")
    prereqs = fm.get("prerequisites", [])
    successors = fm.get("successors", [])

    if catalog_id:
        added = ensure_catalog_stub(catalog_id, title)
        print(f"-- catalog: {'added stub' if added else 'already present'} for {catalog_id}")

    edges_added = update_deps(args.uid, prereqs, successors)
    print(f"-- deps.json: {edges_added} new edge(s) (+ shipped registration)")

    update_plan(args.uid)
    print("-- production plan: marked shipped")

    print("-- gen_placeholders.py ...")
    run(["python3", "scripts/gen_placeholders.py"])
    print("   done")

    if not args.skip_continuity:
        print("-- measure_continuity.py ...")
        proc = run(["python3", "scripts/measure_continuity.py"], check=False)
        if "All thresholds met" not in proc.stdout:
            print(proc.stdout)
            print("WARNING: continuity thresholds did not all pass.")
        else:
            print("   thresholds OK")

    if args.commit:
        msg = args.message or f"unit {args.uid}: {title}"
        run(["git", "add", "-A"])
        # commit with HEREDOC-style message via -m, simple form
        body = (
            f"{msg}\n\n"
            f"Path: {path.relative_to(ROOT)}\n"
            f"Source audits: {', '.join(fm.get('source_audits', []) or ['integrator'])}\n\n"
            f"Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n"
        )
        proc = run(["git", "commit", "-m", body], check=False)
        if proc.returncode != 0:
            print(proc.stdout, proc.stderr)
        else:
            print("-- committed")

        if args.push:
            proc = run(["git", "push", "origin", "main"], check=False)
            if proc.returncode == 0:
                print("-- pushed")
            else:
                print(proc.stdout, proc.stderr)

    print(f"== integrated {args.uid} ✓")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
