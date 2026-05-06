#!/usr/bin/env python3
"""Download all of David Tong's DAMTP lecture notes (HTML course pages + linked PDFs).

Tong's teaching.html lists course pages using absolute URLs
(http://www.damtp.cam.ac.uk/user/tong/<course>.html). We fetch each,
then scan each course page for PDFs and download them.
"""
import os
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

BASE = "https://www.damtp.cam.ac.uk/user/tong/"
TEACHING = BASE + "teaching.html"
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
RATE = 1.0
DOMAIN = "damtp.cam.ac.uk"


def fetch(url, dest=None):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    if dest:
        dest.parent.mkdir(parents=True, exist_ok=True)
        with open(dest, "wb") as f:
            f.write(data)
    return data


def rel_path(url):
    p = urllib.parse.urlparse(url).path
    # Strip the /user/tong/ prefix so paths are relative to tong's dir
    if "/user/tong/" in p:
        return p.split("/user/tong/", 1)[1]
    return p.lstrip("/")


def main():
    out = Path(sys.argv[1])
    raw = out / "raw"
    pages = raw / "pages"
    pdfs = raw / "pdfs"
    pages.mkdir(parents=True, exist_ok=True)
    pdfs.mkdir(parents=True, exist_ok=True)

    # Fetch teaching.html fresh (or load cached)
    teaching_path = pages / "teaching.html"
    if not teaching_path.exists():
        print("[tong] Fetching teaching.html …")
        fetch(TEACHING, teaching_path)
    teaching_html = teaching_path.read_text(encoding="utf-8", errors="replace")

    # Extract ALL hrefs that point to tong's own course pages
    all_hrefs = re.findall(r'href\s*=\s*[\"\']([^\"\']+)[\"\']', teaching_html)
    course_urls = sorted(set(
        h for h in all_hrefs
        if DOMAIN in h and h.endswith(".html")
        and "/user/tong/" in h
        and not h.endswith("teaching.html")
        and not h.endswith("bio.html")
        and not h.endswith("index.html")
        and not h.endswith("research.html")
        and not h.endswith("books.html")
    ))
    print(f"[tong] Found {len(course_urls)} course pages")
    for u in course_urls:
        print(f"  - {u}")

    # Download course pages
    for url in course_urls:
        rel = rel_path(url)
        dest = pages / rel
        if dest.exists() and dest.stat().st_size > 0:
            continue
        time.sleep(RATE)
        try:
            fetch(url, dest)
            print(f"  PAGE {rel} ({dest.stat().st_size} bytes)")
        except Exception as e:
            print(f"  FAIL page {rel}: {e}")

    # Scan each course page for PDFs
    all_pdf_urls = set()
    for url in course_urls:
        rel = rel_path(url)
        path = pages / rel
        if not path.exists():
            continue
        html = path.read_text(encoding="utf-8", errors="replace")
        for m in re.finditer(r'href\s*=\s*[\"\']([^\"\']+\.pdf)[\"\']', html, re.IGNORECASE):
            pdf = m.group(1)
            if pdf.startswith("http"):
                all_pdf_urls.add(pdf)
            else:
                all_pdf_urls.add(urllib.parse.urljoin(url, pdf))

    # Only keep PDFs on Tong's own domain
    all_pdf_urls = {u for u in all_pdf_urls if DOMAIN in u and "/user/tong/" in u}
    print(f"[tong] Total PDFs to download: {len(all_pdf_urls)}")

    ok, fail = 0, 0
    for url in sorted(all_pdf_urls):
        rel = rel_path(url)
        dest = pdfs / rel
        if dest.exists() and dest.stat().st_size > 0:
            continue
        time.sleep(RATE)
        try:
            fetch(url, dest)
            ok += 1
            print(f"  PDF {rel} ({dest.stat().st_size} bytes)")
        except Exception as e:
            fail += 1
            print(f"  FAIL pdf {rel}: {e}")

    # Inventory
    inv = out / "INVENTORY.md"
    with open(inv, "w") as f:
        f.write("# David Tong — DAMTP Lecture Notes Archive\n\n")
        f.write(f"Source: {BASE}\n\nFetched: {time.strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write(f"- Course HTML pages: {len(course_urls)}\n")
        f.write(f"- PDFs downloaded: {ok}  (failed: {fail})\n\n")
        f.write("## Course Pages\n\n")
        for u in course_urls:
            f.write(f"- {u}\n")
        f.write("\n## PDFs\n\n")
        for u in sorted(all_pdf_urls):
            f.write(f"- {u}\n")
    print(f"[tong] DONE. courses={len(course_urls)} pdfs={ok} fail={fail}")


if __name__ == "__main__":
    main()
