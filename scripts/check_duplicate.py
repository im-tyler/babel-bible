#!/usr/bin/env python3
"""Duplicate-detection gate for new Babel Bible units.

Indexes every existing unit (id, title, slug, section, chapter, concept_catalog_id,
plus the first heading line) and, given a candidate topic, surfaces the most
similar existing units so producers don't re-create content that already exists
— across sections (the hard case: e.g. "Riemannian curvature" under §13 vs §48).

Usage:
  python3 scripts/check_duplicate.py "<proposed title / topic keywords>"
  python3 scripts/check_duplicate.py --batch plans/wave2.txt   # one topic per line

Exit code 1 if any existing unit scores >= DUPLICATE_THRESHOLD (a likely
duplicate); 0 otherwise. Always prints the top matches for review.
"""
from __future__ import annotations
import argparse, math, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
DUPLICATE_THRESHOLD = 0.45
STOP = set("a an the of and or in on at to for with from by is are was were be been "
           "being it its as via into over under through introduction foundations "
           "theory overview basic basics foundation survey primer".split())

def tok(s: str) -> set[str]:
    return {t for t in re.findall(r"[a-z0-9]+", s.lower()) if t not in STOP and len(t) > 2}

# Document frequency per title token, populated at index time (IDF — so generic
# words like "decomposition"/"transfer" that appear across many titles get low
# weight and rare/distinctive terms like "ramification" dominate the score).
DF: dict[str, int] = {}
N_UNITS = 0

def idf(t: str) -> float:
    return math.log((N_UNITS + 1) / (DF.get(t, 0) + 1)) + 1.0

def wsum(tokens: set[str]) -> float:
    return sum(idf(t) for t in tokens)

defwjaccard = lambda a, b: (wsum(a & b) / wsum(a | b)) if (a and b) else 0.0
defwoverlap = lambda a, b: (wsum(a & b) / min(wsum(a), wsum(b))) if (a and b) else 0.0

def index():
    global N_UNITS
    units = []
    for md in CONTENT.rglob("*.md"):
        try:
            txt = md.read_text(errors="replace")
        except Exception:
            continue
        fm = txt.split("---", 2)
        if len(fm) < 3: continue
        body = fm[1]
        def field(name):
            m = re.search(rf"^{name}:\s*(.+?)\s*$", body, re.M)
            return m.group(1).strip().strip('"').strip("'") if m else ""
        title = field("title"); slug = field("slug")
        if not title and not slug: continue
        tokens = tok(title + " " + slug)
        for t in tokens: DF[t] = DF.get(t, 0) + 1
        units.append({
            "id": field("id"), "title": title, "slug": slug,
            "section": field("section"), "chapter": field("chapter"),
            "cid": field("concept_catalog_id"),
            "path": str(md.relative_to(ROOT)), "tokens": tokens,
        })
    N_UNITS = len(units)
    return units

def score(query: str, u: dict) -> float:
    qt = tok(query)
    base = max(defwjaccard(qt, u["tokens"]), defwoverlap(qt, u["tokens"]))
    qslug = "-".join(sorted(qt))
    slug_boost = 0.3 if (u["slug"] and (u["slug"] in qslug or qslug in u["slug"])) else 0.0
    cid_boost = 0.2 if (u["cid"] and u["cid"] in query.lower()) else 0.0
    return min(1.0, base + slug_boost + cid_boost)

def check(query: str, units: list[dict], n: int = 8):
    scored = [(score(query, u), u) for u in units]
    scored.sort(key=lambda x: -x[0])
    return scored[:n]

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("query", nargs="*", help="proposed topic / title")
    ap.add_argument("--batch", help="file of one topic per line")
    ap.add_argument("-n", type=int, default=8)
    ap.add_argument("--threshold", type=float, default=DUPLICATE_THRESHOLD)
    args = ap.parse_args()

    units = index()
    queries = []
    if args.batch:
        queries = [l.strip() for l in pathlib.Path(args.batch).read_text().splitlines() if l.strip() and not l.startswith("#")]
    elif args.query:
        queries = [" ".join(args.query)]
    if not queries:
        ap.error("provide a query or --batch")

    any_dup = False
    for q in queries:
        top = check(q, units, args.n)
        print(f"\n### {q!r}")
        flag = False
        for s, u in top:
            if s <= 0: continue
            mark = "  DUP-RISK" if s >= args.threshold else ""
            print(f"  {s:.2f}  {u['id']:<10} {u['section']}/{u['chapter']:<28} {u['title'][:60]}{mark}")
            if s >= args.threshold: flag = True
        if flag:
            any_dup = True
            print(f"  >>> likely duplicate — pick a different topic or explicitly extend {top[0][1]['id']}")
    sys.exit(1 if any_dup else 0)

if __name__ == "__main__":
    main()
