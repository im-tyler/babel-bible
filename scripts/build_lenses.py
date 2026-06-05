#!/usr/bin/env python3
"""Build the lens/filter data the Neutron site consumes.

Reads:
  - content/**/*.md            unit frontmatter (id, section, chapter, prerequisites, tiers, status)
  - manifests/field_map.yaml   section/chapter -> {area, field}
  - lenses/*.yaml              lens definitions (seed rule + overrides)
  - plans/fasttrack/**         (best-effort) unit -> source-book attribution

Writes:
  - site/src/data/unit-index.json   id -> per-unit metadata (incl. area/field/source)
  - site/src/data/lenses.json       resolved lenses (core ids + supporting/closure ids)
  - manifests/unit_sources.json     byproduct: id -> {curriculum, books}

A lens's membership = seed (rule match) UNION prerequisite-closure(seed).
Closure pulls in shared foundations automatically and guarantees every lens is
a complete, learnable path. The closure is validated: a prereq that resolves to
no known unit is reported as dangling.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    sys.exit("PyYAML required: pip install pyyaml")

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
FIELD_MAP = ROOT / "manifests" / "field_map.yaml"
LENS_DIR = ROOT / "lenses"
AUDIT_DIR = ROOT / "plans" / "fasttrack"
OUT_DIR = ROOT / "site" / "src" / "data"
SOURCES_OUT = ROOT / "manifests" / "unit_sources.json"

FM_RE = re.compile(r"^---\n([\s\S]*?)\n---\n")
ID_RE = re.compile(r"\b(\d{2}\.\d{2}\.(?:\d{2}|E\d))\b")


def parse_frontmatter(text: str) -> dict | None:
    m = FM_RE.match(text)
    if not m:
        return None
    try:
        return yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError:
        return None


def norm_id(x) -> str:
    return str(x).strip()


def load_units(field_map: dict) -> dict:
    sec_map = field_map["sections"]
    default = field_map["default"]
    overrides = {(o["section"], o["chapter"]): o for o in field_map.get("chapter_overrides", [])}
    units: dict[str, dict] = {}
    for path in CONTENT.rglob("*.md"):
        if path.name.startswith("_") or path.name.lower() == "readme.md":
            continue
        fm = parse_frontmatter(path.read_text(encoding="utf-8", errors="ignore"))
        if not fm or "id" not in fm or "section" not in fm:
            continue
        uid = norm_id(fm["id"])
        section = str(fm.get("section", "")).strip()
        chapter = str(fm.get("chapter", "")).strip()
        ov = overrides.get((section, chapter))
        af = ov if ov else sec_map.get(section, default)
        prereqs = [norm_id(p) for p in (fm.get("prerequisites") or [])]
        fm_books = fm.get("source_books") or []
        if isinstance(fm_books, str):
            fm_books = [fm_books]
        units[uid] = {
            "id": uid,
            "title": fm.get("title", uid),
            "slug": fm.get("slug", ""),
            "section": section,
            "chapter": chapter,
            "area": af["area"],
            "field": af["field"],
            "tiers": fm.get("tiers_present", ["master"]),
            "status": fm.get("status", "shipped"),
            "prereqs": prereqs,
            "fm_curriculum": fm.get("source_curriculum"),
            "fm_books": [str(b) for b in fm_books],
        }
    return units


def attribute_sources(units: dict) -> dict:
    """Unit -> source provenance. Frontmatter `source_curriculum`/`source_books`
    (stamped by new-spine producers) is authoritative; else fall back to the
    audit-trail attribution and the fast-track default for math/physics units."""
    sources: dict[str, dict] = {}
    # frontmatter provenance takes precedence (new expansion spines stamp this)
    fm_authoritative: set[str] = set()
    for uid, u in units.items():
        if u.get("fm_curriculum"):
            sources[uid] = {"curriculum": u["fm_curriculum"], "books": u.get("fm_books", [])}
            fm_authoritative.add(uid)
    # book-level attribution from deepen gap files + first-pass audits
    for audit in list((AUDIT_DIR / "_deepen").glob("*.gaps.md")) + list(AUDIT_DIR.glob("*.md")):
        book = audit.stem.replace(".gaps", "")
        try:
            txt = audit.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        for uid in set(ID_RE.findall(txt)):
            # Only attribute to units the audit actually PRODUCES (math/physics);
            # a math audit cross-referencing a chemistry unit is not provenance.
            # Frontmatter-stamped units (new spines) are authoritative — skip.
            if uid in fm_authoritative:
                continue
            if uid in units and units[uid]["area"] in ("math", "physics"):
                rec = sources.setdefault(uid, {"curriculum": "fast-track", "books": []})
                if book not in rec["books"]:
                    rec["books"].append(book)
    # default curriculum for every math/physics unit not otherwise attributed
    for uid, u in units.items():
        if u["area"] in ("math", "physics"):
            rec = sources.setdefault(uid, {"curriculum": "fast-track", "books": []})
            rec.setdefault("curriculum", "fast-track")
        else:
            sources.setdefault(uid, {"curriculum": "other", "books": []})
    return sources


def match_rule(u: dict, rule: dict) -> bool:
    if not rule:
        return False
    if "any" in rule:
        return any(match_rule(u, r) for r in rule["any"])
    if "all" in rule:
        return all(match_rule(u, r) for r in rule["all"])
    ok = True
    if "area_in" in rule:
        ok = ok and u["area"] in rule["area_in"]
    if "field_in" in rule:
        ok = ok and u["field"] in rule["field_in"]
    if "section_in" in rule:
        ok = ok and u["section"] in rule["section_in"]
    if "source_curriculum_in" in rule:
        ok = ok and u["curriculum"] in rule["source_curriculum_in"]
    if "source_book_in" in rule:
        ok = ok and any(b in rule["source_book_in"] for b in u["books"])
    return ok


def resolve_lens(lens: dict, units: dict) -> dict:
    seed = {uid for uid, u in units.items() if match_rule(u, lens.get("seed", {}))}
    seed -= set(norm_id(x) for x in lens.get("exclude_ids", []))
    ex_fields = set(lens.get("exclude_fields", []))
    seed = {uid for uid in seed if units[uid]["field"] not in ex_fields}
    # prerequisite-closure
    closure = set(seed)
    stack = list(seed)
    dangling = set()
    while stack:
        cur = stack.pop()
        for p in units[cur]["prereqs"]:
            if p in units:
                if p not in closure:
                    closure.add(p)
                    stack.append(p)
            else:
                dangling.add(p)
    closure |= set(norm_id(x) for x in lens.get("include_ids", []) if norm_id(x) in units)
    supporting = closure - seed
    return {
        "id": lens["id"],
        "label": lens["label"],
        "description": lens.get("description", ""),
        "group_by": lens.get("group_by", "field"),
        "core": sorted(seed),
        "supporting": sorted(supporting),
        "counts": {"core": len(seed), "supporting": len(supporting), "total": len(closure)},
        "dangling_prereqs": sorted(dangling),
    }


def main() -> int:
    field_map = yaml.safe_load(FIELD_MAP.read_text())
    units = load_units(field_map)
    sources = attribute_sources(units)
    for uid, u in units.items():
        s = sources.get(uid, {"curriculum": "other", "books": []})
        u["curriculum"] = s["curriculum"]
        u["books"] = s["books"]

    field_defs = field_map["fields"]
    # unit-index.json (per-unit metadata the site renders from)
    unit_index = {
        uid: {
            "id": uid,
            "title": u["title"],
            "slug": u["slug"],
            "section": u["section"],
            "chapter": u["chapter"],
            "area": u["area"],
            "field": u["field"],
            "fieldLabel": field_defs.get(u["field"], {}).get("label", u["field"]),
            "fieldOrder": field_defs.get(u["field"], {}).get("order", 99),
            "tiers": u["tiers"],
            "status": u["status"],
            "curriculum": u["curriculum"],
            "books": u["books"],
            "prereqs": u["prereqs"],
        }
        for uid, u in units.items()
    }

    lenses = []
    for lpath in sorted(LENS_DIR.glob("*.yaml")):
        lens = yaml.safe_load(lpath.read_text())
        resolved = resolve_lens(lens, units)
        lenses.append(resolved)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    (OUT_DIR / "unit-index.json").write_text(json.dumps(unit_index, indent=0, sort_keys=True))
    (OUT_DIR / "lenses.json").write_text(json.dumps(
        {"lenses": lenses, "fields": field_defs}, indent=0))
    SOURCES_OUT.write_text(json.dumps(sources, indent=0, sort_keys=True))

    # report
    print(f"units indexed: {len(units)}")
    by_area: dict[str, int] = {}
    for u in units.values():
        by_area[u["area"]] = by_area.get(u["area"], 0) + 1
    print("by area:", dict(sorted(by_area.items())))
    for lz in lenses:
        d = f"  ({len(lz['dangling_prereqs'])} dangling)" if lz["dangling_prereqs"] else ""
        print(f"lens {lz['id']:22s} core={lz['counts']['core']:4d}  "
              f"+support={lz['counts']['supporting']:4d}  total={lz['counts']['total']:4d}{d}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
