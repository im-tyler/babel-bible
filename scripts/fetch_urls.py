#!/usr/bin/env python3
"""Fetch a batch of URLs (HTML pages) into a destination directory.

Usage: fetch_urls.py <out_dir> <url1> [<url2> ...]
   OR: fetch_urls.py <out_dir> --from-file <urls.txt>

Each URL is saved under <out_dir>/raw/<slug>.html where slug is derived from the URL path.
"""
import hashlib
import os
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
RATE = 1.0


def fetch(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    dest.parent.mkdir(parents=True, exist_ok=True)
    with open(dest, "wb") as f:
        f.write(data)
    return len(data)


def url_to_slug(url):
    """Make a safe filename from a URL path."""
    p = urllib.parse.urlparse(url)
    path = p.path.strip("/")
    if not path or path.endswith("/"):
        path = path + "index"
    # Replace problematic chars
    slug = path.replace("/", "__").replace(":", "_").replace("?", "_").replace("&", "_")
    slug = re.sub(r"[^A-Za-z0-9._-]", "_", slug)
    # Avoid super-long names by hashing if >150 chars
    if len(slug) > 150:
        h = hashlib.md5(url.encode()).hexdigest()[:8]
        slug = slug[:120] + "__" + h
    if not slug.endswith(".html"):
        slug = slug + ".html"
    return slug


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)

    out = Path(sys.argv[1])
    raw = out / "raw"
    raw.mkdir(parents=True, exist_ok=True)

    args = sys.argv[2:]
    urls = []
    if args[0] == "--from-file":
        with open(args[1]) as f:
            urls = [line.strip() for line in f if line.strip() and not line.startswith("#")]
    else:
        urls = args

    print(f"[fetch] {len(urls)} URLs -> {raw}")
    ok, fail, skip = 0, 0, 0
    for i, url in enumerate(urls, 1):
        slug = url_to_slug(url)
        dest = raw / slug
        if dest.exists() and dest.stat().st_size > 0:
            skip += 1
            continue
        time.sleep(RATE)
        try:
            size = fetch(url, dest)
            ok += 1
            if i % 20 == 0 or i <= 5:
                print(f"  [{i}/{len(urls)}] OK {slug} ({size} bytes)")
        except Exception as e:
            fail += 1
            print(f"  [{i}/{len(urls)}] FAIL {url}: {e}")

    # Inventory
    inv = out / "INVENTORY.md"
    with open(inv, "w") as f:
        f.write(f"# Fetch Inventory\n\nFetched: {time.strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write(f"- URLs processed: {len(urls)}\n")
        f.write(f"- Downloaded: {ok}\n- Skipped (already present): {skip}\n- Failed: {fail}\n\n")
        f.write("## URLs\n\n")
        for u in urls:
            f.write(f"- {u}\n")
    print(f"[fetch] DONE. ok={ok} skip={skip} fail={fail}")


if __name__ == "__main__":
    main()
