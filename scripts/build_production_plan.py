#!/usr/bin/env python3
"""Build the master production plan from all audit punch-lists.

Walks every `plans/fasttrack/*.md` audit file, extracts the gap-unit
punch-list bullets (matching the format `**`<id>` <title>.** <spec>`),
deduplicates by canonical unit id, marks already-shipped units, and
emits both:

  - `manifests/production/plan.json`   (machine-readable state)
  - `docs/plans/PRODUCTION_PLAN.md`    (human-readable rollup)

The plan tracks three kinds of work:

  - `new_unit`   — write a unit at a planned id
  - `deepening`  — rewrite the Key-theorem proof in an existing
                   templated unit (Cannas-style)
  - `audit`      — run a Fast Track audit on an unaudited book

Idempotent: re-running rebuilds the plan from sources of truth
(audits + content + booklist). Status fields are recomputed by
inspecting the corpus, so a unit that was `queued` last run and is
shipped this run becomes `shipped`.
"""
from __future__ import annotations

import datetime as dt
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AUDIT_DIR = ROOT / "plans" / "fasttrack"
CONTENT_DIR = ROOT / "content"
BOOKLIST = ROOT / "docs" / "catalogs" / "FASTTRACK_BOOKLIST.md"
DEPS = ROOT / "manifests" / "deps.json"

OUT_JSON = ROOT / "manifests" / "production" / "plan.json"
OUT_MD = ROOT / "docs" / "plans" / "PRODUCTION_PLAN.md"

# Match a punch-list bullet:
#   1. **`05.09.01` Title of unit.** Spec text...
PUNCHLIST_RE = re.compile(
    r"^\s*(\d+)\.\s+\*\*`(\d{2}\.\d{2}\.\d{2}[A-Za-z0-9_]*)`\s+"
    r"(.+?)\.\*\*\s*(.*?)$",
    re.M,
)

# Match a deepening reference (existing id with words like "deepening" / "rewrite"):
DEEPENING_HINTS = ("deepening", "rewrite", "real proof", "templated", "fold")


def shipped_unit_ids() -> set[str]:
    """Discover already-shipped unit ids by scanning content/."""
    ids = set()
    for p in CONTENT_DIR.rglob("*.md"):
        text = p.read_text(encoding="utf-8", errors="ignore")
        m = re.search(r"^id:\s*(\S+)", text, re.M)
        if m:
            ids.add(m.group(1))
    return ids


def shipped_unit_meta() -> dict[str, dict]:
    """Map id -> {title, slug, path} for shipped units."""
    meta = {}
    for p in CONTENT_DIR.rglob("*.md"):
        text = p.read_text(encoding="utf-8", errors="ignore")
        fm = re.match(r"^---\n([\s\S]*?)\n---\n", text)
        if not fm:
            continue
        body = fm.group(1)

        def grab(field):
            m = re.search(rf"^{field}:\s*(.+?)$", body, re.M)
            return m.group(1).strip().strip('"') if m else ""

        uid = grab("id")
        if uid:
            meta[uid] = {
                "title": grab("title"),
                "slug": grab("slug"),
                "path": str(p.relative_to(ROOT)),
            }
    return meta


def parse_audit(path: Path) -> tuple[str, list[dict]]:
    """Return (audit-slug, list of punch-list entries)."""
    audit_slug = path.stem
    text = path.read_text(encoding="utf-8")
    items = []

    # Split into priority sections to assign priority labels.
    # Hatcher / Cannas / Arnold / etc. use **Priority N** subheadings.
    sections = re.split(
        r"\*\*Priority\s+(\d|one|two|three|four)[^\*]*\*\*",
        text,
        flags=re.I,
    )
    # sections layout: [pre, priority_marker_1, body_1, priority_marker_2, body_2, ...]
    priority_blocks = []
    current_priority = None
    for chunk in sections:
        if chunk is None:
            continue
        if chunk.strip().lower() in {"1", "2", "3", "4", "one", "two", "three", "four"}:
            num = chunk.strip().lower()
            current_priority = {
                "1": "P1", "one": "P1",
                "2": "P2", "two": "P2",
                "3": "P3", "three": "P3",
                "4": "P4", "four": "P4",
            }.get(num, "P?")
        else:
            priority_blocks.append((current_priority or "P?", chunk))

    for priority, body in priority_blocks:
        for m in PUNCHLIST_RE.finditer(body):
            position = int(m.group(1))
            uid = m.group(2)
            title = m.group(3).strip()
            spec = m.group(4).strip()
            kind = "new_unit"
            spec_lower = spec.lower()
            for hint in DEEPENING_HINTS:
                if hint in spec_lower or hint in title.lower():
                    kind = "deepening"
                    break
            items.append({
                "id": uid,
                "title": title,
                "spec_excerpt": spec[:600],  # cap
                "priority": priority,
                "audit": audit_slug,
                "audit_position": position,
                "kind": kind,
            })
    return audit_slug, items


def parse_booklist() -> list[dict]:
    """Extract booklist rows: {ft_entry, title, author, status}."""
    if not BOOKLIST.exists():
        return []
    rows = []
    text = BOOKLIST.read_text(encoding="utf-8")
    # Match table rows like: | 1.05 | Topology and Groupoids | Ronald Brown | ... |
    for m in re.finditer(
        r"^\|\s*([\d\.]+)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|",
        text, re.M,
    ):
        ft = m.group(1).strip()
        title = m.group(2).strip()
        author = m.group(3).strip()
        if not re.match(r"^\d", ft):  # skip headers
            continue
        rows.append({"ft_entry": ft, "title": title, "author": author})
    return rows


def slugify(s: str) -> str:
    s = s.lower()
    s = re.sub(r"[^\w\s-]", "", s)
    s = re.sub(r"[\s_]+", "-", s)
    return s.strip("-")


def audited_books() -> set[str]:
    """Return set of audit slugs that have audits in plans/fasttrack/."""
    return {p.stem for p in AUDIT_DIR.glob("*.md")}


def matches_audited(row: dict, audit_slugs: set[str]) -> bool:
    """Heuristic: a booklist row is audited iff some author-or-title fragment
    appears in an audit slug."""
    title_slug = slugify(row["title"])
    author_slug = slugify(row["author"])
    for audit in audit_slugs:
        if any(part in audit for part in title_slug.split("-") if len(part) > 3):
            return True
        if any(part in audit for part in author_slug.split("-") if len(part) > 3):
            return True
    return False


def topo_sort(units: dict[str, dict]) -> list[str]:
    """Return ids in dependency order. Cyclic / unresolved prereqs put unit later."""
    visited = set()
    order = []

    def visit(uid):
        if uid in visited:
            return
        visited.add(uid)
        for p in units.get(uid, {}).get("prereqs", []):
            if p in units:
                visit(p)
        order.append(uid)

    for uid in units:
        visit(uid)
    return order


def main() -> int:
    shipped_ids = shipped_unit_ids()
    shipped_meta = shipped_unit_meta()

    # Walk audits.
    units: dict[str, dict] = {}
    audits: dict[str, dict] = {}
    for path in sorted(AUDIT_DIR.glob("*.md")):
        slug, items = parse_audit(path)
        audits[slug] = {
            "path": str(path.relative_to(ROOT)),
            "punch_list_count": len(items),
            "p1": sum(1 for it in items if it["priority"] == "P1"),
            "p2": sum(1 for it in items if it["priority"] == "P2"),
            "p3": sum(1 for it in items if it["priority"] == "P3"),
            "p4": sum(1 for it in items if it["priority"] == "P4"),
        }
        for it in items:
            uid = it["id"]
            if uid in units:
                # Same unit appears in multiple audits — merge the source list.
                units[uid].setdefault("source_audits", []).append(slug)
                # Keep the highest-priority record.
                if it["priority"] < units[uid]["priority"]:
                    units[uid]["priority"] = it["priority"]
                    units[uid]["spec_excerpt"] = it["spec_excerpt"]
            else:
                units[uid] = {
                    "id": uid,
                    "title": it["title"],
                    "spec_excerpt": it["spec_excerpt"],
                    "priority": it["priority"],
                    "kind": it["kind"],
                    "source_audits": [slug],
                    "audit_position": it["audit_position"],
                    "prereqs": [],
                    "successors": [],
                }

    # Mark shipped vs queued and decorate with current title/path.
    for uid, info in units.items():
        if uid in shipped_ids:
            info["status"] = "shipped"
            if uid in shipped_meta:
                info["actual_path"] = shipped_meta[uid]["path"]
                info["title"] = shipped_meta[uid]["title"] or info["title"]
        else:
            info["status"] = "queued"

    # Add already-shipped units that aren't in any audit (just so the plan
    # sees them as part of the shipped set).
    for uid in shipped_ids:
        if uid not in units:
            units[uid] = {
                "id": uid,
                "title": shipped_meta.get(uid, {}).get("title", ""),
                "status": "shipped",
                "kind": "new_unit",
                "priority": "shipped-pre-audit",
                "source_audits": [],
                "actual_path": shipped_meta.get(uid, {}).get("path", ""),
                "prereqs": [],
                "successors": [],
            }

    # Enrich prereq edges from deps.json.
    if DEPS.exists():
        deps = json.load(open(DEPS))
        for e in deps.get("edges", []):
            src, dst = e.get("from"), e.get("to")
            if src and dst:
                if dst in units:
                    units[dst].setdefault("prereqs", [])
                    if src not in units[dst]["prereqs"]:
                        units[dst]["prereqs"].append(src)
                if src in units:
                    units[src].setdefault("successors", [])
                    if dst not in units[src]["successors"]:
                        units[src]["successors"].append(dst)

    # Topological order for queued units.
    queued_order = [u for u in topo_sort(units) if units[u]["status"] == "queued"]

    # Booklist rows + which are audited.
    audit_slugs = audited_books()
    rows = parse_booklist()
    unaudited = [r for r in rows if not matches_audited(r, audit_slugs)]

    # Aggregate counts.
    counts = {
        "shipped": sum(1 for u in units.values() if u["status"] == "shipped"),
        "queued": sum(1 for u in units.values() if u["status"] == "queued"),
        "deepenings_queued": sum(
            1 for u in units.values()
            if u["status"] == "queued" and u.get("kind") == "deepening"
        ),
        "audits_done": len(audits),
        "books_total": len(rows),
        "books_unaudited": len(unaudited),
    }

    plan = {
        "version": 1,
        "generated_at": dt.datetime.now(dt.timezone.utc).isoformat(),
        "counts": counts,
        "units": units,
        "queue_topo_order": queued_order,
        "audits_done": audits,
        "books_unaudited": unaudited,
    }

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(plan, indent=2, ensure_ascii=False), encoding="utf-8")

    # Write the human-readable rollup.
    lines = [
        "# Codex — Master Production Plan",
        "",
        f"_Generated: {plan['generated_at']}_",
        "",
        "## Burn-down",
        "",
        f"- Units shipped: **{counts['shipped']}**",
        f"- Units queued (gap units from audits): **{counts['queued']}**",
        f"- Of which deepenings: **{counts['deepenings_queued']}**",
        f"- Audits completed: **{counts['audits_done']} / {counts['books_total']}**",
        f"- Books unaudited: **{counts['books_unaudited']}**",
        "",
        "## Next 20 queued units (topological order)",
        "",
        "| Rank | ID | Title | Priority | Source audits |",
        "|---|---|---|---|---|",
    ]
    for i, uid in enumerate(queued_order[:20], 1):
        u = units[uid]
        sources = ", ".join(u.get("source_audits", []))
        lines.append(f"| {i} | `{uid}` | {u['title']} | {u['priority']} | {sources} |")

    lines += [
        "",
        "## Audits completed",
        "",
        "| Audit | P1 | P2 | P3 | P4 | Total |",
        "|---|---|---|---|---|---|",
    ]
    for slug, info in audits.items():
        total = info["p1"] + info["p2"] + info["p3"] + info["p4"]
        lines.append(f"| {slug} | {info['p1']} | {info['p2']} | {info['p3']} | {info['p4']} | {total} |")

    lines += [
        "",
        "## Books unaudited (top 20 by FT entry)",
        "",
        "| FT | Title | Author |",
        "|---|---|---|",
    ]
    for r in unaudited[:20]:
        lines.append(f"| {r['ft_entry']} | {r['title']} | {r['author']} |")

    OUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"Plan written: {OUT_JSON.relative_to(ROOT)}")
    print(f"Rollup written: {OUT_MD.relative_to(ROOT)}")
    print(f"  shipped={counts['shipped']} queued={counts['queued']}"
          f" deepenings={counts['deepenings_queued']}"
          f" audits_done={counts['audits_done']}/{counts['books_total']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
