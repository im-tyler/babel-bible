#!/usr/bin/env python3
"""Parse a sitemap.xml and output URLs (one per line), filtering by domain.

Usage: enumerate_sitemap.py <sitemap_url_or_path> [<out_file>]
"""
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

USER_AGENT = "Mozilla/5.0"


def load(src):
    if src.startswith("http"):
        req = urllib.request.Request(src, headers={"User-Agent": USER_AGENT})
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.read().decode("utf-8", errors="replace")
    return Path(src).read_text(encoding="utf-8", errors="replace")


def main():
    src = sys.argv[1]
    xml = load(src)
    # Accept both sitemap index and sitemap; output <loc> values
    locs = re.findall(r"<loc>([^<]+)</loc>", xml)
    # Dedup while preserving order
    seen = set()
    unique = []
    for u in locs:
        if u not in seen:
            seen.add(u)
            unique.append(u)
    out = "\n".join(unique)
    if len(sys.argv) > 2:
        Path(sys.argv[2]).write_text(out + "\n")
        print(f"Wrote {len(unique)} URLs to {sys.argv[2]}")
    else:
        print(out)


if __name__ == "__main__":
    main()
