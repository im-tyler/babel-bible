#!/usr/bin/env python3
"""Rewrite Obsidian markdown files to point image refs at the correct relative path
to files in assets/.

Obsidian MDs reference images by bare filename (e.g. `Pasted image 20220430175732.png`).
The files live under `assets/<path>/<filename>`. We build a filename index and rewrite
each ref to a proper relative path.

Also converts wiki-link image syntax `![[name]]` to standard markdown `![](path)`
so the content renders in any standard markdown viewer.

Usage: fix_obsidian_image_paths.py <site_dir>
"""
import os
import re
import sys
import urllib.parse
from collections import defaultdict
from pathlib import Path


MD_IMG = re.compile(r"!\[([^\]]*)\]\(([^)]+)\)")
WIKI_IMG = re.compile(r"!\[\[([^\]]+)\]\]")
IMG_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".bmp"}


def main():
    site = Path(sys.argv[1])
    md_dir = site / "md"
    assets = site / "assets"
    if not assets.exists():
        print(f"[{site.name}] no assets/ directory; nothing to fix")
        return

    # Build filename -> [paths] index
    idx = defaultdict(list)
    for f in assets.rglob("*"):
        if f.is_file() and f.suffix.lower() in IMG_EXTS:
            idx[f.name].append(f)

    print(f"[{site.name}] indexed {sum(len(v) for v in idx.values())} images in assets/ ({len(idx)} unique names)")

    total_md = 0
    total_rewrites = 0
    total_unresolved = 0

    for f in md_dir.rglob("*.md"):
        text = f.read_text(encoding="utf-8", errors="replace")
        original = text
        total_md += 1

        def resolve_name(name):
            # URL-decode + strip anchor
            nm = urllib.parse.unquote(name).split("#")[0].strip()
            # Pick last path component (many refs are paths like "File Repository/foo.png")
            base = nm.rsplit("/", 1)[-1]
            hits = idx.get(base, [])
            if not hits:
                return None
            # Prefer shortest path (closest to root of assets/)
            target = sorted(hits, key=lambda p: len(p.parts))[0]
            rel = os.path.relpath(target, f.parent).replace(os.sep, "/")
            # URL-encode for MD syntax
            return urllib.parse.quote(rel)

        # Fix markdown-style ![alt](ref)
        def md_sub(m):
            nonlocal total_rewrites, total_unresolved
            alt, ref = m.group(1), m.group(2)
            if ref.startswith("http") or ref.startswith("/") or ref.startswith("data:"):
                return m.group(0)
            # Skip anchor-only refs
            if ref.startswith("#"):
                return m.group(0)
            # Skip if already points into images/ or assets/
            if "images/" in ref or "assets/" in ref or "../" in ref:
                return m.group(0)
            resolved = resolve_name(ref)
            if resolved:
                total_rewrites += 1
                return f"![{alt}]({resolved})"
            total_unresolved += 1
            return m.group(0)

        text = MD_IMG.sub(md_sub, text)

        # Convert wiki-image ![[name]] -> ![](path)
        def wiki_sub(m):
            nonlocal total_rewrites, total_unresolved
            inner = m.group(1)
            # Obsidian wiki-image can be like "name|size" or "name#anchor"
            name = inner.split("|")[0].split("#")[0].strip()
            # Only convert if it's an image (by extension)
            lower = name.lower()
            if not any(lower.endswith(ext) for ext in IMG_EXTS):
                return m.group(0)  # leave non-image wiki-links alone
            resolved = resolve_name(name)
            if resolved:
                total_rewrites += 1
                return f"![]({resolved})"
            total_unresolved += 1
            return m.group(0)

        text = WIKI_IMG.sub(wiki_sub, text)

        if text != original:
            f.write_text(text, encoding="utf-8")

    print(f"[{site.name}] scanned {total_md} MD files; rewrites={total_rewrites} unresolved={total_unresolved}")


if __name__ == "__main__":
    main()
