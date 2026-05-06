#!/usr/bin/env python3
"""Extract same-domain hrefs from an HTML file, output as absolute URLs.

Usage: extract_links.py <base_url> <html_file> [<out_file>]
"""
import re
import sys
import urllib.parse
from pathlib import Path


def main():
    base = sys.argv[1]
    html = Path(sys.argv[2]).read_text(encoding="utf-8", errors="replace")
    domain = urllib.parse.urlparse(base).netloc

    hrefs = re.findall(r'href\s*=\s*[\"\']([^\"\']+)[\"\']', html)
    urls = set()
    for h in hrefs:
        if h.startswith("#") or h.startswith("mailto:") or h.startswith("javascript:"):
            continue
        absu = urllib.parse.urljoin(base, h)
        p = urllib.parse.urlparse(absu)
        if p.netloc != domain:
            continue
        # Strip fragments and query params
        absu = urllib.parse.urlunparse((p.scheme, p.netloc, p.path, "", "", ""))
        # Skip non-page assets
        if re.search(r"\.(css|js|png|jpg|jpeg|gif|svg|ico|xml|json|woff2?|ttf|eot)$", absu, re.I):
            continue
        urls.add(absu)

    out = "\n".join(sorted(urls))
    if len(sys.argv) > 3:
        Path(sys.argv[3]).write_text(out + "\n")
        print(f"Wrote {len(urls)} URLs to {sys.argv[3]}")
    else:
        print(out)


if __name__ == "__main__":
    main()
