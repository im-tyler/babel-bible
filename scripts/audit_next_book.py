#!/usr/bin/env python3
"""Pick the next unaudited book and emit an audit-agent brief.

Reads `manifests/production/plan.json` for the unaudited list (built from
`docs/catalogs/FASTTRACK_BOOKLIST.md`) and emits a brief that an Agent
can follow to produce a `plans/fasttrack/<slug>.md` audit doc in the
same shape as the existing 9 audits.

Workflow:
  1. python3 scripts/audit_next_book.py        # prints brief
  2. spawn an Agent with that brief
  3. when agent writes the audit file, run:
       python3 scripts/build_production_plan.py    # rebuilds + ingests gap units
  4. loop

Flags:
  --ft-entry FT     pick a specific FT entry (e.g., 1.04)
  --slug SLUG       pick by output-file slug (e.g., ahlfors-complex-analysis)
  --json            emit JSON instead of markdown brief
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PLAN = ROOT / "manifests" / "production" / "plan.json"
AUDIT_DIR = ROOT / "plans" / "fasttrack"

# Books to skip — out of FT scope or otherwise inappropriate for audit
SKIP_KEYWORDS = ("Generalized Functions", "Quantum Electrodynamics",
                 "Statistical Field Theory Vol. 2")


def slug_for(book: dict) -> str:
    parts = []
    for token in book["author"].split(",")[:1]:
        parts.append(re.sub(r"[^a-z]+", "-", token.lower()).strip("-"))
    title_words = re.sub(r"[^a-z\s]+", " ", book["title"].lower()).split()
    parts.extend(title_words[:3])
    return "-".join(p for p in parts if p)


BRIEF_TEMPLATE = """\
# Agent brief — Fast Track audit: {title}

You are running a Fast Track audit at `/Users/tyler/Documents/Code Projects/Codex/`.

## Read first:
- `docs/specs/ORCHESTRATION_PROTOCOL.md` (Pass 1 audit + Pass 2 gap analysis spec)
- `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` (the equivalence threshold and seven coverage layers)
- One peer audit at the format and depth I want — pick one of:
  - `plans/fasttrack/hatcher-algebraic-topology.md`
  - `plans/fasttrack/cannas-da-silva-symplectic.md`
  - `plans/fasttrack/donaldson-riemann-surfaces.md`

## Book under audit
- **Title:** {title}
- **Author:** {author}
- **FT booklist entry:** {ft_entry}
- **Output file:** `plans/fasttrack/{slug}.md`

## Output structure (mirror peer audits)
- Header with book details + FT entry context
- §1 What this book is for: chapter structure + the book's distinctive editorial choices vs. peer texts in the same area
- §2 Coverage table: book topic → Codex unit ID(s) → status (✓ / △ / ✗) → note. Use ACTUAL existing unit IDs only — do NOT invent. Run `find content -name "*.md" | sort` early and cross-reference accurately.
- §3 Gap punch-list, priority-ordered (P1 / P2 / P3 / P4):
  - Each item has the form: `1. **\\`<id>\\` <title>.** <one-paragraph spec describing exactly what to write>`.
  - **Three kinds** of items (use the correct kind tag):
    - `[NEW]` — new unit. Pick a sensible unit id (`<chapter>.<section>.<position>`) by looking at which sub-chapter the topic logically belongs in. AVOID collisions with shipped IDs.
    - `[DEEPEN]` — deepen an existing templated unit. Cite the existing unit id and explain what proof / content needs to replace the templated stand-in.
    - `[ENRICH]` — concept already fully covered by an existing unit. The audit's job is just to record the citation: book + chapter/section + 1-line note about what perspective this book contributes (proof variant / worked example / historical context). Spec field is the bibliography-patch.
  - When a concept is already shipped well, prefer `[ENRICH]` over duplicate authoring. We do not want two unit-versions of the same concept; we want one canonical unit citing every book that covers it.
- §4 Implementation sketch (production estimates).
- §5 What this plan does NOT cover (out-of-scope topics, deferred sections).
- §6 Acceptance criteria for FT equivalence on this book.

## Critical
- Use ACTUAL existing unit IDs in §2; verify via `find content -name "*.md" | sort`.
- Honest assessment: if the corpus already covers most of the book, say so. The audit's value is in identifying the small set of remaining gaps.
- 300-500 lines markdown is the target (recent peer audits run 468-700 lines).
- Do NOT modify any other file. Just write `plans/fasttrack/{slug}.md`.

## Report
Lines produced; P1 / P2 / P3 / P4 punch-list counts; estimated existing-coverage %.
"""


def emit_one(book: dict, as_json: bool) -> None:
    book["slug"] = slug_for(book)
    if as_json:
        print(json.dumps({**book, "rendered_brief": BRIEF_TEMPLATE.format(**book)},
                         indent=2, ensure_ascii=False))
    else:
        print(BRIEF_TEMPLATE.format(**book))


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--ft-entry")
    ap.add_argument("--slug")
    ap.add_argument("--batch", type=int, default=1,
                    help="emit briefs for N books in parallel (separated by '\\n---BRIEF-BREAK---\\n')")
    ap.add_argument("--ft-prefix",
                    help="restrict to books whose ft_entry starts with this prefix (e.g., '0.' for prereqs)")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    if not PLAN.exists():
        print("error: production plan not built. Run scripts/build_production_plan.py.",
              file=sys.stderr)
        return 2
    plan = json.load(open(PLAN))
    candidates = plan.get("books_unaudited", [])

    # Filter out out-of-scope books.
    filtered = []
    for b in candidates:
        if any(k in b["title"] for k in SKIP_KEYWORDS):
            continue
        filtered.append(b)

    if args.ft_entry:
        filtered = [b for b in filtered if b["ft_entry"] == args.ft_entry]
    elif args.slug:
        filtered = [b for b in filtered if slug_for(b) == args.slug]

    if args.ft_prefix:
        filtered = [b for b in filtered if b["ft_entry"].startswith(args.ft_prefix)]

    if not filtered:
        print("no unaudited book matches", file=sys.stderr)
        return 1

    take = filtered[: max(1, args.batch)]
    for i, book in enumerate(take):
        if i > 0:
            print("\n---BRIEF-BREAK---\n")
        emit_one(book, args.json)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
