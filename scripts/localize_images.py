#!/usr/bin/env python3
"""Scan a site's MD files for image URLs (remote or relative), download them
to <site>/images/, and rewrite MD files to point at local paths.

Handles both Markdown image syntax ![alt](url) and raw HTML <img src="url">.
If --base-url is given, relative URLs are resolved against it.

Usage: localize_images.py <site_dir> [--base-url <url>]
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
RATE = 0.3

MD_IMG = re.compile(r"!\[([^\]]*)\]\(([^)]+)\)")
HTML_IMG = re.compile(r'<img([^>]+)>', re.IGNORECASE)
SRC_ATTR = re.compile(r'src=["\']([^"\']+)["\']', re.IGNORECASE)


def url_to_local_name(url):
    """Deterministic, safe filename from URL (preserve extension)."""
    path = urllib.parse.urlparse(url).path
    name = path.rsplit("/", 1)[-1]
    # Extract extension (default .bin)
    ext = ""
    if "." in name:
        ext = "." + name.rsplit(".", 1)[-1].split("?")[0].lower()
        if len(ext) > 6 or not re.match(r"\.[a-z0-9]+$", ext):
            ext = ""
    # Hash the URL for uniqueness, keep first 40 chars of name for debugability
    h = hashlib.md5(url.encode()).hexdigest()[:10]
    base = re.sub(r"[^A-Za-z0-9._-]", "_", name.rsplit(".", 1)[0] if "." in name else name)[:60]
    return f"{base}__{h}{ext}"


def download(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)
    return len(data)


def main():
    site = Path(sys.argv[1])
    base_url = None
    if "--base-url" in sys.argv:
        i = sys.argv.index("--base-url")
        base_url = sys.argv[i + 1]

    md_dir = site / "md"
    img_dir = site / "images"
    img_dir.mkdir(exist_ok=True)

    md_files = list(md_dir.rglob("*.md"))
    print(f"[{site.name}] Scanning {len(md_files)} MD files … base={base_url}")

    # 1. Collect all unique image URLs (remote + relative if base_url given)
    def resolve(u):
        u = u.strip()
        if u.startswith("http"):
            return u
        if u.startswith("data:"):
            return None
        if base_url:
            return urllib.parse.urljoin(base_url, u)
        return None

    urls = set()
    # Map: original_ref_in_md -> resolved_url (for accurate rewriting)
    ref_to_url = {}
    for f in md_files:
        text = f.read_text(encoding="utf-8", errors="replace")
        for m in MD_IMG.finditer(text):
            u = m.group(2).strip()
            r = resolve(u)
            if r:
                urls.add(r)
                ref_to_url[u] = r
        for m in HTML_IMG.finditer(text):
            src_m = SRC_ATTR.search(m.group(1))
            if src_m:
                u = src_m.group(1).strip()
                r = resolve(u)
                if r:
                    urls.add(r)
                    ref_to_url[u] = r
    print(f"[{site.name}] Unique image URLs: {len(urls)} (refs in md: {len(ref_to_url)})")

    # 2. Download each to images/
    url_to_local = {}
    ok, fail, skip = 0, 0, 0
    for i, u in enumerate(sorted(urls), 1):
        local_name = url_to_local_name(u)
        dest = img_dir / local_name
        url_to_local[u] = local_name
        if dest.exists() and dest.stat().st_size > 0:
            skip += 1
            continue
        try:
            download(u, dest)
            ok += 1
            if i % 50 == 0 or i <= 3:
                print(f"  [{i}/{len(urls)}] OK {local_name}")
        except Exception as e:
            fail += 1
            # Note failure; MD will still have remote URL
            if i <= 20 or i % 200 == 0:
                print(f"  [{i}/{len(urls)}] FAIL {u}: {str(e)[:80]}")
            url_to_local.pop(u, None)
        time.sleep(RATE)

    print(f"[{site.name}] download ok={ok} skip={skip} fail={fail}")

    # 3. Rewrite MD files: replace each original ref with relative path to local image
    rewritten = 0
    for f in md_files:
        text = f.read_text(encoding="utf-8", errors="replace")
        original = text
        rel_prefix = os.path.relpath(img_dir, f.parent).replace(os.sep, "/")
        for ref, resolved_url in ref_to_url.items():
            if resolved_url not in url_to_local:
                continue
            replacement = f"{rel_prefix}/{url_to_local[resolved_url]}"
            text = text.replace(ref, replacement)
        if text != original:
            f.write_text(text, encoding="utf-8")
            rewritten += 1
    print(f"[{site.name}] Rewrote {rewritten} MD files with local image paths")


if __name__ == "__main__":
    main()
