#!/usr/bin/env python3
"""Pick the next queued unit from the production plan and emit an agent brief.

Intended workflow (for orchestrator / Claude Code session):

  1. python3 scripts/produce_next.py            # picks topo-next queued unit
  2. read the printed brief
  3. spawn an Agent with that brief
  4. when agent returns and writes the file, run:
       python3 scripts/integrate_unit.py <id>   # validates + integrates
  5. loop

Flags:
  --id ID             pick a specific unit id (must be queued)
  --batch N           print N briefs (one per ready unit, no two from same chapter)
  --json              emit the brief as JSON instead of markdown
  --kind KIND         filter by kind: new_unit | deepening (default: new_unit)

The brief includes:
  - target file path
  - canonical frontmatter scaffold
  - mathematical-content hints from the audit spec excerpt
  - peer reference units to copy quality from
  - hard constraints + continuity-metric requirements
  - validation command to run
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from collections import defaultdict

ROOT = Path(__file__).resolve().parent.parent
PLAN = ROOT / "manifests" / "production" / "plan.json"
CONTENT = ROOT / "content"


# ---------------------------------------------------------------------------
# Path-from-id heuristics
# ---------------------------------------------------------------------------

CHAPTER_PREFIXES = {
    "00": "00-precalc",
    "01": "01-foundations",
    "02": "02-analysis",
    "03": "03-modern-geometry",
    "04": "04-algebraic-geometry",
    "05": "05-symplectic",
    "06": "06-riemann-surfaces",
    "07": "07-representation-theory",
    "08": "08-stat-mech",
}


def slug_from_title(title: str) -> str:
    import unicodedata
    s = unicodedata.normalize("NFKD", title)
    s = s.encode("ascii", "ignore").decode("ascii")
    s = s.lower()
    s = re.sub(r"[^a-z0-9\s-]", " ", s)
    s = re.sub(r"[\s_]+", "-", s)
    return s.strip("-")


def guess_subdir(uid: str) -> Path | None:
    """Look at the existing chapter for a sibling subdir to drop the unit into.

    e.g. uid `04.05.08` → look in content/04-algebraic-geometry/05-* and
    return the dir of any sibling whose id starts `04.05.`.
    """
    parts = uid.split(".")
    if len(parts) < 3:
        return None
    chapter = CHAPTER_PREFIXES.get(parts[0])
    if not chapter:
        return None
    chapter_dir = CONTENT / chapter
    if not chapter_dir.exists():
        return None
    prefix = ".".join(parts[:2]) + "."
    for sub in sorted(chapter_dir.iterdir()):
        if not sub.is_dir():
            continue
        for f in sub.glob("*.md"):
            if f.name.startswith(prefix):
                return sub
    return None


def expected_path(uid: str, slug: str) -> Path:
    sub = guess_subdir(uid)
    if sub is None:
        # Fallback: dump into the chapter root.
        chapter = CHAPTER_PREFIXES.get(uid.split(".")[0], "_unknown")
        sub = CONTENT / chapter / "_new"
    return sub / f"{uid}-{slug}.md"


# ---------------------------------------------------------------------------
# Peer reference selection
# ---------------------------------------------------------------------------

PEER_REFERENCES = {
    # quality-bar peers per chapter family
    "03.": [
        "content/03-modern-geometry/12-homotopy/03.12.18-universal-coefficient.md",
        "content/03-modern-geometry/12-homotopy/03.12.16-poincare-duality.md",
    ],
    "04.": [
        "content/04-algebraic-geometry/05-surfaces/04.05.07-adjunction-formula.md",
        "content/04-algebraic-geometry/03-cohomology/04.03.04-cohomology-projective.md",
    ],
    "05.": [
        "content/05-symplectic/integrable/05.09.01-kam-theorem.md",
        "content/05-symplectic/symplectic-linear/05.01.05-moser-trick.md",
    ],
    "06.": [
        "content/06-riemann-surfaces/04-cohomology/06.04.04-serre-duality-curves.md",
    ],
}


def peers_for(uid: str) -> list[str]:
    for prefix, peers in PEER_REFERENCES.items():
        if uid.startswith(prefix):
            return peers
    return [
        "content/03-modern-geometry/12-homotopy/03.12.16-poincare-duality.md",
    ]


# ---------------------------------------------------------------------------
# Brief generation
# ---------------------------------------------------------------------------

BRIEF_TEMPLATE = """\
# Agent brief — write unit {uid}: {title}

You are writing one new curriculum unit for the Codex math curriculum project at `/Users/tyler/Documents/Code Projects/B.I.B.L.E/`.

## Read first (do not skip):
- `docs/specs/UNIT_SPEC.md` (canonical unit format)
- `docs/specs/QUALITY_RUBRIC.md` (27-point validator + Master prose §M)
{peer_block}

## Source audit
This unit was identified as a gap in:
{audit_list}

Audit spec excerpt:
> {spec_excerpt}

Source plan: `plans/fasttrack/{first_audit}.md` — read the relevant section for the full context.

## Target file
**Write to: `{target_path}`** (the Write tool will create the directory if needed).

## Frontmatter (use exactly):
- `id: {uid}`
- `title: {title}`
- `slug: {slug}`
- `concept_catalog_id: <pick a sensible namespace.id; the integrator will register it>`
- `prerequisites: [<derive from audit + peer units; verify the prereq IDs exist via `find content -name "*.md"`>]`
- `successors: [<list any planned downstream units; can be empty>]`
- `tiers_present: [beginner, intermediate, master]`
- `pending_prereqs: false` (set true only if a peer unit is in flight)
- `lean_status: none` with substantive `lean_mathlib_gap` ≥30 words
- `human_reviewer: "Tyler (pending external <subfield> reviewer)"` — replace `<subfield>` with the relevant area (e.g. "number theory", "alg-geom"). NEVER use the literal string `"TBD"` here; the validator rejects it.
- `status: shipped`
- `produced_by: claude-opus-4-7 (autonomous production driver)`

## Required sections (validator-enforced)
- `## Intuition [Beginner]`
- `## Visual [Beginner]` with `![alt](/img/{slug}-placeholder.svg)`
- `## Worked example [Beginner]`
- `## Check your understanding [Beginner]` — at least one `<aside class="exercise">`
- `## Formal definition [Intermediate+]`
- `## Key theorem with proof [Intermediate+]` ending with a `**Bridge.**` paragraph
- `## Exercises [Intermediate+]` with multiple `<aside class="exercise">` blocks (mix of difficulties)
- `## Advanced results [Master]` ending with a `**Synthesis.**` paragraph
- `## Full proof set [Master]` (≥1 Proposition + proof)
- `## Connections [Master]` — bullet list, **each bullet on its own paragraph (blank-line separated)**, ≥3 bullets, all linking to other unit IDs in `[NN.NN.NN]` brackets
- `## Historical & philosophical context [Master]` (≥1 paragraph, ≥1 cited primary source via `[ref: TODO_REF Author year]`)
- `## Bibliography [Master]` with bibtex entries

## Hard constraints (validator failures — avoid these)
- NEVER use the words: `trivial`, `trivially`, `non-trivial` (with hyphen — Mathlib's word boundary catches it), `obviously`, `clearly`, `it is easy to see`, `as we will see`. Use synonyms: vanishes, identity, the simple case, plain, evident-in-context, identity action, vanishing.
- Beginner sections: NO `\\nabla \\otimes \\sum \\int \\prod \\partial \\forall \\exists` symbols. Keep math elementary in those tiers. (Ban includes `\\partial`; say "the boundary" in prose.)
- Beginner paragraphs ≤ 120 words. NO proof language ("Proof.", "QED", "∎", "Suppose ", "It follows that", "Hence,").
- No paragraph anywhere exceeds 250 words.
- Every `[ref: TODO_REF X]` must correspond to an entry in `references[]` whose `source: TODO_REF`.
- Master tier prohibited (per §M): "we will see", "we will rely on whenever…", "we do not state the precise theorem here", "a subtlety worth noting" — these are §M failures. Use "appears again in", "builds toward", "this pattern recurs" for forward-promises in Master.

## Continuity-metric requirements (built into the prose)
- Bridge paragraph (Intermediate, before Exercises) must contain phrases hitting forward-promise + synthesis patterns. Ensure presence of `builds toward`, `appears again in`, plus 2+ of: `the foundational reason`, `this is exactly`, `generalises`, `is dual to`, `the central insight`, `putting these together`, `identifies X with Y` (one word each side of "with"), `the bridge is`.
- Synthesis paragraph (Master, end of Advanced results) must hit ≥4 synthesis patterns from the same list.
- Connections section: ≥3 bullets, each its own paragraph (blank line between).

## Catalog + deps
You MAY add the new `concept_catalog_id` entry to `docs/catalogs/CONCEPT_CATALOG.md` directly (recent agents have done this successfully; the integrator script handles either path). Do NOT modify `manifests/deps.json` — leave that for the integrator.

## Validation
After writing, run from the repo root:

```
python3 scripts/validate_unit.py {target_path}
```

You must achieve **all checks passing** (currently 28/28; the count can grow as the rubric evolves — the validator's footer prints `N/N checks passed`, and both numbers must match). If validator fails, iterate until they do.

## Mathematical content
The audit excerpt above gives the seed. Develop the full mathematical content using the peer units as quality benchmarks, with:
- Real, complete proofs (NOT templated Cartan-formula stand-ins)
- Specific worked examples with computations
- Genuine originator citations with primary-source dates and journals
- Cross-references to existing units that make sense given the actual prereq structure

Quality bar: a working researcher in this subfield should nod, not roll their eyes.

Report back: file written? Validator output? Word count? Anything notable?
"""


# ---------------------------------------------------------------------------


def load_plan() -> dict:
    if not PLAN.exists():
        print("error: plan not found. Run scripts/build_production_plan.py first.",
              file=sys.stderr)
        sys.exit(2)
    return json.load(open(PLAN))


def pick_next(plan: dict, kind: str) -> dict | None:
    units = plan["units"]
    queue = plan["queue_topo_order"]
    for uid in queue:
        u = units[uid]
        if u["status"] == "queued" and u.get("kind") == kind:
            return u
    return None


def render_brief(unit: dict) -> str:
    uid = unit["id"]
    title = unit["title"]
    slug = unit.get("slug") or slug_from_title(title)
    target = expected_path(uid, slug)
    peers = peers_for(uid)
    peer_block = "\n".join(f"- `{p}` (recent peer at the quality bar)" for p in peers)
    audits = unit.get("source_audits", [])
    audit_list = "\n".join(f"- {a}" for a in audits)
    return BRIEF_TEMPLATE.format(
        uid=uid,
        title=title,
        slug=slug,
        peer_block=peer_block,
        audit_list=audit_list or "- (none — newly added)",
        first_audit=audits[0] if audits else "<unknown>",
        spec_excerpt=unit.get("spec_excerpt", ""),
        target_path=target.relative_to(ROOT),
    )


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--id", help="specific unit id (must be queued)")
    ap.add_argument("--batch", type=int, default=1)
    ap.add_argument("--kind", default="new_unit")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    plan = load_plan()
    units = plan["units"]

    if args.id:
        u = units.get(args.id)
        if not u:
            print(f"error: id {args.id} not in plan", file=sys.stderr)
            return 2
        if u["status"] != "queued":
            print(f"error: id {args.id} is not queued (status={u['status']})", file=sys.stderr)
            return 2
        chosen = [u]
    else:
        chosen = []
        seen_chapters = set()
        for uid in plan["queue_topo_order"]:
            if len(chosen) >= args.batch:
                break
            u = units[uid]
            if u["status"] != "queued":
                continue
            if u.get("kind") != args.kind:
                continue
            chapter = uid.rsplit(".", 1)[0]
            if chapter in seen_chapters and args.batch > 1:
                # Spread the batch across chapters to avoid file collisions.
                continue
            seen_chapters.add(chapter)
            chosen.append(u)

    if not chosen:
        print("no queued unit matches", file=sys.stderr)
        return 1

    if args.json:
        print(json.dumps([
            {**u, "rendered_brief": render_brief(u)} for u in chosen
        ], indent=2, ensure_ascii=False))
    else:
        for i, u in enumerate(chosen):
            if i > 0:
                print("\n" + "=" * 80 + "\n")
            print(render_brief(u))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
