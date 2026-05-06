#!/usr/bin/env python3
"""Fetch non-markdown assets (PDFs, images) from an Obsidian Publish site.

Usage: fetch_obsidian_assets.py <cache_json_path> <uid> <out_dir>
"""
import json
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

USER_AGENT = "Mozilla/5.0"
RATE = 0.3
ACCESS_URL = "https://publish-01.obsidian.md/access/{uid}/{path}"


def fetch(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)
    return len(data)


def main():
    cache_path = sys.argv[1]
    uid = sys.argv[2]
    out = Path(sys.argv[3])
    assets_dir = out / "assets"
    assets_dir.mkdir(parents=True, exist_ok=True)

    cache = json.loads(Path(cache_path).read_text())
    non_md = sorted(k for k in cache if not k.endswith(".md"))
    # Skip tiny/metadata files without extensions (like "Meta")
    non_md = [k for k in non_md if "." in k.rsplit("/", 1)[-1]]
    print(f"Non-md assets: {len(non_md)}")

    ok, fail, skip = 0, 0, 0
    for i, key in enumerate(non_md, 1):
        dest = assets_dir / key
        if dest.exists() and dest.stat().st_size > 0:
            skip += 1
            continue
        url = ACCESS_URL.format(uid=uid, path=urllib.parse.quote(key))
        try:
            size = fetch(url, dest)
            ok += 1
            if i % 25 == 0 or i <= 3:
                print(f"  [{i}/{len(non_md)}] OK {key} ({size} bytes)")
        except Exception as e:
            fail += 1
            print(f"  [{i}/{len(non_md)}] FAIL {key}: {e}")
        time.sleep(RATE)
    print(f"DONE. ok={ok} skip={skip} fail={fail}")


if __name__ == "__main__":
    main()
