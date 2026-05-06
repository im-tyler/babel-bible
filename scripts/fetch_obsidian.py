#!/usr/bin/env python3
"""Fetch all markdown notes from an Obsidian Publish site via its cache/access API.

Usage: fetch_obsidian.py <site_uid> <output_dir> [<display_name>]
"""
import json
import os
import sys
import time
import urllib.request
import urllib.parse
from pathlib import Path

CACHE_URL = "https://publish-01.obsidian.md/cache/{uid}"
ACCESS_URL = "https://publish-01.obsidian.md/access/{uid}/{path}"
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
RATE_LIMIT_SEC = 0.3


def http_get(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=30) as r, open(dest, "wb") as f:
        f.write(r.read())


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    uid = sys.argv[1]
    out = Path(sys.argv[2])
    label = sys.argv[3] if len(sys.argv) > 3 else uid

    raw = out / "raw"
    md = out / "md"
    raw.mkdir(parents=True, exist_ok=True)
    md.mkdir(parents=True, exist_ok=True)

    # 1. Cache (site index)
    cache_path = raw / "cache.json"
    print(f"[{label}] Fetching cache index …")
    http_get(CACHE_URL.format(uid=uid), cache_path)
    with open(cache_path) as f:
        cache = json.load(f)

    md_keys = sorted(k for k in cache if k.endswith(".md"))
    other_keys = sorted(k for k in cache if not k.endswith(".md"))
    print(f"[{label}] {len(md_keys)} markdown files, {len(other_keys)} other files (images/etc.)")

    # 2. Download each .md
    ok, fail, skipped = 0, 0, 0
    for i, key in enumerate(md_keys, 1):
        dest = md / key
        dest.parent.mkdir(parents=True, exist_ok=True)
        if dest.exists() and dest.stat().st_size > 0:
            skipped += 1
            continue
        url = ACCESS_URL.format(uid=uid, path=urllib.parse.quote(key))
        try:
            http_get(url, dest)
            ok += 1
        except Exception as e:
            fail += 1
            print(f"  FAIL {key}: {e}")
        if i % 50 == 0:
            print(f"[{label}] progress {i}/{len(md_keys)} (ok={ok} fail={fail} skip={skipped})")
        time.sleep(RATE_LIMIT_SEC)

    # 3. Save inventory
    inv = out / "INVENTORY.md"
    with open(inv, "w") as f:
        f.write(f"# {label} — Obsidian Publish Archive\n\n")
        f.write(f"Site UID: `{uid}`\n\n")
        f.write(f"Fetched: {time.strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write(f"- Markdown notes: {len(md_keys)}  (downloaded {ok}, skipped {skipped}, failed {fail})\n")
        f.write(f"- Other files (images/assets): {len(other_keys)} — not downloaded\n\n")
        f.write("## Note List\n\n")
        for k in md_keys:
            f.write(f"- `{k}`\n")
    print(f"[{label}] DONE. ok={ok} fail={fail} skip={skipped}. Inventory at {inv}")


if __name__ == "__main__":
    main()
