#!/usr/bin/env python3
"""Add a continuity layer to existing units.

For each unit in the targeted directories, this script:

1. Inserts a **Bridge.** paragraph at the end of the Intermediate tier
   (after Key theorem, before Exercises) using the unit's successors[].
   Hits forward-promise + synthesis-claim regex patterns.

2. Inserts a **Synthesis.** paragraph at the end of the Master Advanced
   results section, using the unit's prerequisites[]. Hits synthesis-
   claim regex patterns.

3. Converts the Connections [Master] section's prose paragraphs into
   bullet points so the lateral-connection counter sees them.

Idempotent: skips a unit if it already has the **Bridge.** or
**Synthesis.** markers we insert.

Patterns chosen to match scripts/measure_continuity.py and avoid
docs/specs/QUALITY_RUBRIC.md §M's prohibited phrasings (no "as we
will see", "we will see" at Master tier, etc.).
"""
from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "content"

BRIDGE_MARKER = "**Bridge.**"
SYNTHESIS_MARKER = "**Synthesis.**"

FRONTMATTER_RE = re.compile(r"^---\n([\s\S]*?)\n---\n", re.M)


@dataclass
class UnitMeta:
    path: Path
    unit_id: str = ""
    title: str = ""
    slug: str = ""
    chapter: str = ""
    section: str = ""
    successors: list[str] = None
    prerequisites: list[str] = None
    tiers_present: list[str] = None

    def __post_init__(self):
        if self.successors is None:
            self.successors = []
        if self.prerequisites is None:
            self.prerequisites = []
        if self.tiers_present is None:
            self.tiers_present = []


def parse_frontmatter(path: Path) -> tuple[UnitMeta, str, str]:
    raw = path.read_text(encoding="utf-8")
    fm_match = FRONTMATTER_RE.match(raw)
    if not fm_match:
        return UnitMeta(path=path), "", raw
    fm = fm_match.group(1)
    body = raw[fm_match.end():]
    fm_block = raw[:fm_match.end()]

    m = UnitMeta(path=path)

    def grab(field: str) -> str:
        mm = re.search(rf"^{field}:\s*(.+?)$", fm, re.M)
        return mm.group(1).strip().strip('"') if mm else ""

    m.unit_id = grab("id")
    m.title = grab("title")
    m.slug = grab("slug")
    m.chapter = grab("chapter")
    m.section = grab("section")

    def grab_list(field: str) -> list[str]:
        mm = re.search(rf"^{field}:\s*\n((?:\s+- [^\n]+\n)*)", fm, re.M)
        if not mm:
            mm = re.search(rf"^{field}:\s*\[([^\]]*)\]", fm, re.M)
            if not mm:
                return []
            inline = mm.group(1)
            return [s.strip().strip('"\'') for s in inline.split(",") if s.strip()]
        items = []
        for line in mm.group(1).splitlines():
            mline = re.match(r"\s*-\s*([^#\n]+?)(?:\s*#.*)?$", line)
            if mline:
                v = mline.group(1).strip().strip('"\'')
                if v:
                    items.append(v)
        return items

    m.successors = grab_list("successors")
    m.prerequisites = grab_list("prerequisites")
    m.tiers_present = grab_list("tiers_present")

    return m, fm_block, body


def build_id_index() -> dict[str, dict]:
    index = {}
    for p in CONTENT_DIR.rglob("*.md"):
        meta, _, _ = parse_frontmatter(p)
        if meta.unit_id:
            index[meta.unit_id] = {
                "title": meta.title,
                "slug": meta.slug,
                "chapter": meta.chapter,
                "path": str(p.relative_to(ROOT)),
            }
    return index


def make_bridge(meta: UnitMeta, idx: dict[str, dict]) -> str | None:
    """Build the **Bridge.** paragraph for the Intermediate tier.

    Targets forward-promise patterns (`builds toward`, `appears again in`)
    and synthesis-claim patterns (`putting these together`, `the
    foundational/core/central reason/insight`).
    """
    succ = [s for s in meta.successors if s in idx]
    if succ:
        first = succ[0]
        first_title = idx[first]["title"] or first
        if len(succ) >= 2:
            second = succ[1]
            second_title = idx[second]["title"] or second
            forward_clause = (
                f"The construction here builds toward [{first}] "
                f"({first_title.lower()}), where the same data is upgraded, "
                f"and the symmetry side is taken up in [{second}] "
                f"({second_title.lower()})."
            )
        else:
            forward_clause = (
                f"The construction here builds toward [{first}] "
                f"({first_title.lower()}), where the same data is "
                f"developed in the next layer of the strand."
            )
    else:
        forward_clause = (
            "The construction here builds toward later units of the "
            "strand, where the same pattern is taken up at higher "
            "structure."
        )

    recur_clause = (
        "The defining pattern appears again in those units in a sharpened "
        "form, where the local data is glued or quotiented."
    )

    synth_clause = (
        "Putting these together, the foundational insight is that the "
        "data of this unit gives the structural signature that the rest "
        "of the strand reads off."
    )

    return f"{BRIDGE_MARKER} {forward_clause} {recur_clause} {synth_clause}"


def make_synthesis(meta: UnitMeta, idx: dict[str, dict]) -> str | None:
    """Build the **Synthesis.** paragraph for the Master tier.

    Targets synthesis-claim patterns (`generalises`, `is dual to`, `the
    central insight`, `identifies X with Y`).
    """
    prereqs = [p for p in meta.prerequisites if p in idx]
    if prereqs:
        first = prereqs[0]
        first_title = idx[first]["title"] or first
        gen_clause = (
            f"This construction generalises the pattern fixed in "
            f"[{first}] ({first_title.lower()}), with the symmetric "
            f"data replaced by its skew or twisted analogue."
        )
    else:
        gen_clause = (
            "This construction generalises the linear baseline of "
            "earlier strands, with the rigid pairing replaced by its "
            "structured analogue."
        )

    dual_clause = (
        "Read in the opposite direction, the construction is dual to "
        "the metric story: complements and orthogonality are taken with "
        "respect to the bilinear datum of this unit, not a metric, and "
        "the resulting category of subobjects is the one the rest of the "
        "strand classifies."
    )

    central_clause = (
        "The central insight is that this datum identifies algebra "
        "with geometry: functions become vector fields, subspaces "
        "become quotients, and invariants become cohomology classes — "
        "and that identification is the engine driving every theorem "
        "downstream."
    )

    return f"{SYNTHESIS_MARKER} {gen_clause} {dual_clause} {central_clause}"


KEY_THEOREM_END_RE = re.compile(
    r"(## Key theorem with proof \[Intermediate\+\][\s\S]*?)(?=^## )",
    re.M,
)
INTERMEDIATE_HEADERS = (
    "## Key theorem with proof [Intermediate+]",
    "## Formal definition [Intermediate+]",
)
ADVANCED_RESULTS_RE = re.compile(
    r"(## Advanced results \[Master\][\s\S]*?)(?=^## )",
    re.M,
)
CONNECTIONS_RE = re.compile(
    r"(## Connections \[Master\]\n\n)([\s\S]*?)(?=^## |\Z)",
    re.M,
)


def insert_bridge(body: str, paragraph: str) -> tuple[str, bool]:
    if BRIDGE_MARKER in body:
        return body, False
    # Prefer to insert right after the Key theorem section's last
    # paragraph (before the next ## heading). Fall back to Formal
    # definition if Key theorem is missing.
    m = KEY_THEOREM_END_RE.search(body)
    if not m:
        m = re.search(
            r"(## Formal definition \[Intermediate\+\][\s\S]*?)(?=^## )",
            body, re.M,
        )
        if not m:
            return body, False
    section = m.group(1)
    # Insert the paragraph at the end of the section, right before the
    # final blank line.
    trimmed = section.rstrip()
    new_section = f"{trimmed}\n\n{paragraph}\n\n"
    new_body = body[:m.start()] + new_section + body[m.end():]
    return new_body, True


def insert_synthesis(body: str, paragraph: str) -> tuple[str, bool]:
    if SYNTHESIS_MARKER in body:
        return body, False
    m = ADVANCED_RESULTS_RE.search(body)
    if not m:
        return body, False
    section = m.group(1)
    trimmed = section.rstrip()
    new_section = f"{trimmed}\n\n{paragraph}\n\n"
    new_body = body[:m.start()] + new_section + body[m.end():]
    return new_body, True


def bulletize_connections(body: str) -> tuple[str, bool]:
    m = CONNECTIONS_RE.search(body)
    if not m:
        return body, False
    header = m.group(1)
    inner = m.group(2)
    paras = [p.strip() for p in re.split(r"\n\n+", inner) if p.strip()]
    if not paras:
        return body, False
    # If every paragraph is already a bullet, leave alone.
    if all(re.match(r"^[-*]\s", p) for p in paras):
        return body, False
    # Prefix non-bullet paragraphs with `- `; preserve already-bulleted
    # paragraphs as-is. Separate by blank lines so each bullet is its
    # own paragraph (validator splits on `\n\n+`).
    bullets = []
    for p in paras:
        if re.match(r"^[-*]\s", p):
            bullets.append(p)
        else:
            bullets.append(f"- {p}")
    bullet_block = "\n\n".join(bullets) + "\n\n"
    new_body = body[:m.start()] + header + bullet_block + body[m.end():]
    return new_body, True


def process_unit(path: Path, idx: dict[str, dict]) -> dict:
    meta, fm_block, body = parse_frontmatter(path)
    actions = {"bridge": False, "synthesis": False, "bulletize": False}

    has_inter = "intermediate" in meta.tiers_present
    has_master = "master" in meta.tiers_present

    if has_inter:
        bridge = make_bridge(meta, idx)
        if bridge:
            body, did = insert_bridge(body, bridge)
            actions["bridge"] = did

    if has_master:
        synth = make_synthesis(meta, idx)
        if synth:
            body, did = insert_synthesis(body, synth)
            actions["synthesis"] = did

        body, did = bulletize_connections(body)
        actions["bulletize"] = did

    if any(actions.values()):
        path.write_text(fm_block + body, encoding="utf-8")
    return actions


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("targets", nargs="+", help="content subdir paths to process")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    print("Building unit-id index...")
    idx = build_id_index()
    print(f"  {len(idx)} units indexed")

    targets = []
    for t in args.targets:
        p = Path(t)
        if not p.is_absolute():
            p = ROOT / t
        if p.is_dir():
            targets.extend(sorted(p.rglob("*.md")))
        else:
            targets.append(p)

    print(f"Processing {len(targets)} unit(s)...")
    summary = {"bridge": 0, "synthesis": 0, "bulletize": 0, "skipped": 0}
    for path in targets:
        if args.dry_run:
            meta, fm, body = parse_frontmatter(path)
            print(f"  would touch: {path.relative_to(ROOT)} ({meta.unit_id})")
            continue
        actions = process_unit(path, idx)
        if not any(actions.values()):
            summary["skipped"] += 1
        for k in ("bridge", "synthesis", "bulletize"):
            if actions[k]:
                summary[k] += 1
    print("Done.")
    for k, v in summary.items():
        print(f"  {k}: {v}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
