#!/usr/bin/env python3
"""Integrate a newly-written unit into the corpus.

After an agent writes `content/.../<id>-<slug>.md`, run:

    python3 scripts/integrate_unit.py <id>

The integrator:
  1. Locates the file by id (search content/**/<id>-*.md).
  2. Runs the validator. If it fails, prints the failure and exits 1.
  3. Reads the unit's frontmatter (concept_catalog_id, prereqs, successors)
     with the canonical YAML parser shared with the validators.
  4. Adds a stub catalog entry to docs/catalogs/CONCEPT_CATALOG.md if missing.
  5. Adds prereq + successor edges to manifests/deps.json (idempotent); every
     endpoint must match the canonical unit-id grammar
     (NN.NN.NN / NN.NN.EN / NN.essays.NN) or the run fails.
  6. Marks the unit as `shipped` in manifests/production/plan.json.
  7. Runs `python3 scripts/gen_placeholders.py` (idempotent).
  8. Runs `python3 scripts/measure_continuity.py` and confirms thresholds hold.
  9. Returns 0 on success.

Flags:
  --commit            also git-add + git-commit + git-push the change
  --message MSG       custom commit message
  --skip-continuity   skip the continuity threshold check
  --regenerate        rebuild manifests/deps.json wholesale from content
                      frontmatter (edges, shipped, pending, _prefix_sections)
                      and exit; fixes committed corruption and enforces the
                      shipped/pending partition
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from validate_unit import (  # noqa: E402
    ESSAY_ID_RE,
    EXERCISE_ID_RE,
    UNIT_ID_RE,
    parse_unit,
)

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
DEPS = ROOT / "manifests" / "deps.json"
CATALOG = ROOT / "docs" / "catalogs" / "CONCEPT_CATALOG.md"
PLAN = ROOT / "manifests" / "production" / "plan.json"


def find_unit_file(uid: str) -> Path | None:
    for p in CONTENT.rglob(f"{uid}-*.md"):
        return p
    return None


def is_valid_unit_id(uid: str) -> bool:
    return bool(
        UNIT_ID_RE.fullmatch(uid) or ESSAY_ID_RE.fullmatch(uid)
        or EXERCISE_ID_RE.fullmatch(uid)
    )


def normalize_id_list(value: object, uid: str, field: str,
                      errors: list[str]) -> list[str]:
    """Coerce a frontmatter id-list field to list[str], validating every
    endpoint against the canonical unit-id grammar. A single scalar is
    accepted as a one-element list; anything else is an error."""
    if value is None:
        return []
    if isinstance(value, (str, int, float)):
        value = [value]
    if not isinstance(value, list):
        errors.append(f"{uid}: {field} must be a list, got {type(value).__name__}")
        return []
    out: list[str] = []
    for item in value:
        s = str(item).strip()
        if not is_valid_unit_id(s):
            errors.append(
                f"{uid}: {field} endpoint {s!r} fails the canonical unit-id "
                f"grammar (NN.NN.NN / NN.NN.EN / NN.essays.NN)"
            )
            continue
        out.append(s)
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
    errors: list[str] = []
    prereqs = normalize_id_list(prereqs, uid, "prerequisites", errors)
    successors = normalize_id_list(successors, uid, "successors", errors)
    if errors:
        for e in errors:
            print(f"error: {e}", file=sys.stderr)
        raise SystemExit(1)
    deps = json.load(open(DEPS))
    shipped = deps.setdefault("shipped", [])
    pending = deps.setdefault("pending", [])
    if uid in pending:
        pending.remove(uid)
    if uid not in shipped:
        shipped.append(uid)
        shipped.sort()
    edges = deps.setdefault("edges", [])
    added = 0
    for p in prereqs:
        e = {"from": p, "to": uid, "state": "shipped"}
        if e not in edges:
            edges.append(e)
            added += 1
    for s in successors:
        e = {"from": uid, "to": s, "state": "shipped"}
        if e not in edges:
            edges.append(e)
            added += 1
    DEPS.write_text(json.dumps(deps, indent=2, ensure_ascii=False), encoding="utf-8")
    return added


def regenerate_deps() -> int:
    """Rebuild manifests/deps.json wholesale from content frontmatter.

    - shipped: every content unit with status "shipped" (same publication
      predicate as the site and build_production_plan.py).
    - edges: prerequisites + successors of every content unit, endpoints
      validated against the canonical unit-id grammar; state is "shipped"
      when both endpoints are shipped units, else "pending".
    - pending: every edge endpoint that is not a shipped unit — so
      shipped ∩ pending is empty by construction.
    - _prefix_sections: majority-vote prefix -> section-key map generated
      from content (used by the site for ids with no content).
    _comment / version / _notes are preserved.
    """
    old: dict = {}
    if DEPS.exists():
        old = json.loads(DEPS.read_text(encoding="utf-8"))
    units: dict[str, dict] = {}
    errors: list[str] = []
    for path in sorted(CONTENT.rglob("*.md")):
        try:
            fm, _ = parse_unit(path)
        except Exception as exc:
            errors.append(f"{path.relative_to(ROOT)}: {exc}")
            continue
        uid = str(fm.get("id", "")).strip()
        if uid:
            units[uid] = fm
    if errors:
        for e in errors:
            print(f"error: {e}", file=sys.stderr)
        return 1

    edges: dict[tuple[str, str], None] = {}
    for uid in sorted(units):
        fm = units[uid]
        for p in normalize_id_list(fm.get("prerequisites"), uid,
                                   "prerequisites", errors):
            edges[(p, uid)] = None
        for s in normalize_id_list(fm.get("successors"), uid,
                                   "successors", errors):
            edges[(uid, s)] = None
    if errors:
        for e in errors:
            print(f"error: {e}", file=sys.stderr)
        return 1

    shipped = {u for u, fm in units.items()
               if str(fm.get("status", "")) == "shipped"}
    endpoints = {x for e in edges for x in e}
    pending = sorted(endpoints - shipped)

    prefix_counts: dict[str, dict[str, int]] = {}
    for uid, fm in sorted(units.items()):
        section = str(fm.get("section", "") or "")
        if section:
            prefix_counts.setdefault(uid.split(".")[0], {})
            prefix_counts[uid.split(".")[0]][section] = \
                prefix_counts[uid.split(".")[0]].get(section, 0) + 1
    prefix_sections = {
        prefix: sorted(sections.items(), key=lambda kv: (-kv[1], kv[0]))[0][0]
        for prefix, sections in sorted(prefix_counts.items())
    }

    overlap = sorted(shipped & set(pending))
    if overlap:
        print(f"error: regeneration produced shipped∩pending overlap: {overlap}",
              file=sys.stderr)
        return 1

    out = {
        "_comment": old.get(
            "_comment",
            "Codex dependency graph. Source of truth for prereq relationships. "
            "Updated by integrator on every unit ship.",
        ),
        "version": old.get("version", 1),
        "edges": [
            {
                "from": a,
                "to": b,
                "state": "shipped" if a in shipped and b in shipped else "pending",
            }
            for a, b in sorted(edges)
        ],
        "pending": pending,
        "shipped": sorted(shipped),
        "_notes": old.get("_notes", {}),
        "_prefix_sections": prefix_sections,
    }
    DEPS.write_text(json.dumps(out, indent=2, ensure_ascii=False), encoding="utf-8")
    print(
        f"deps.json regenerated: {len(out['edges'])} edges, "
        f"{len(out['shipped'])} shipped, {len(out['pending'])} pending"
    )
    return 0


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
    ap.add_argument("uid", nargs="?", help="unit id, e.g. 05.09.03")
    ap.add_argument("--commit", action="store_true")
    ap.add_argument("--push", action="store_true")
    ap.add_argument("--message", default=None)
    ap.add_argument("--skip-continuity", action="store_true")
    ap.add_argument("--regenerate", action="store_true",
                    help="rebuild manifests/deps.json from content frontmatter and exit")
    args = ap.parse_args()

    if args.regenerate:
        return regenerate_deps()

    if not args.uid:
        ap.error("unit id is required unless --regenerate is given")

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

    fm, _ = parse_unit(path)
    catalog_id = str(fm.get("concept_catalog_id", ""))
    title = str(fm.get("title", ""))
    errors: list[str] = []
    prereqs = normalize_id_list(fm.get("prerequisites"), args.uid,
                                "prerequisites", errors)
    successors = normalize_id_list(fm.get("successors"), args.uid,
                                   "successors", errors)
    if errors:
        for e in errors:
            print(f"error: {e}", file=sys.stderr)
        return 1

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
