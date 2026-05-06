#!/usr/bin/env python3
"""Download Fast Track textbooks from confirmed legitimate free sources.

Only downloads from author-hosted or institutional-hosted URLs. Never from piracy mirrors.
Uses HEAD probes first to verify URL is reachable and is a PDF.
"""
import os
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
RATE = 1.0

# (url, local_path_relative_to_fasttrack_texts, source_note)
CANDIDATES = [
    # Section 1 - Fundamentals
    ("https://groupoids.org.uk/pdffiles/topgrpds-e.pdf",
     "01-fundamentals/Brown-TopologyAndGroupoids.pdf",
     "Ronald Brown — author hosts at groupoids.org.uk"),

    # Section 2 - Quantum & Stat Phys
    ("https://www.math.columbia.edu/~woit/QM/qmbook.pdf",
     "02-quantum-stat/Woit-QuantumTheoryGroupsRepresentations.pdf",
     "Peter Woit — author hosts at Columbia"),
    ("https://souravchatterjee.su.domains/qft-lectures-combined.pdf",
     "02-quantum-stat/Chatterjee-QFTLectureNotes.pdf",
     "Sourav Chatterjee — author hosts at Stanford"),

    # Section 3 - Modern Geometry / Topology
    ("https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf",
     "03-modern-geometry/May-ConciseAlgebraicTopology.pdf",
     "J. Peter May — author hosts at UChicago"),
    ("https://www.math.uchicago.edu/~may/TEAK/KateBookFinal.pdf",
     "03-modern-geometry/May-Ponto-MoreConciseAlgebraicTopology.pdf",
     "May & Ponto — author hosts at UChicago"),
    ("https://www.math.uchicago.edu/~may/BOOKS/Simp.pdf",
     "03-modern-geometry/May-SimplicialObjects.pdf",
     "J. Peter May — author hosts at UChicago"),
    ("https://people.math.rochester.edu/faculty/doug/mybooks/ravenel.pdf",
     "03-modern-geometry/Ravenel-ComplexCobordism.pdf",
     "Ravenel — author hosts 'Green Book' at Rochester"),

    # Secondary candidates — probe for availability
    # Olver's book — author may host
    ("https://www-users.cse.umn.edu/~olver/eqs_/pmn.pdf",
     "01-fundamentals/Olver-ApplicationsOfLieGroups.pdf",
     "Peter Olver — candidate URL at UMN (verify)"),

    # Freed Lectures on Field Theory and Topology — AMS CBMS
    ("https://web.ma.utexas.edu/users/dafr/lectures.pdf",
     "03-modern-geometry/Freed-LecturesFieldTheoryTopology.pdf",
     "Dan Freed — candidate URL at UT Austin (verify)"),

    # Douglas Arnold Finite Element Exterior Calculus — author may host notes
    ("https://www-users.cse.umn.edu/~arnold/papers/bulletin.pdf",
     "01-fundamentals/Arnold-FiniteElementExteriorCalculus.pdf",
     "Doug Arnold — candidate paper URL at UMN (verify)"),

    # Diaconis — candidate notes
    ("https://statweb.stanford.edu/~cgates/PERSI/papers/lectures.pdf",
     "03-modern-geometry/Diaconis-ProbabilityAndRepTheory.pdf",
     "Persi Diaconis — candidate URL at Stanford (verify)"),

    # Sternberg — hosts several books freely
    ("http://people.math.harvard.edu/~shlomo/docs/lie_algebras.pdf",
     "03-modern-geometry/Sternberg-GroupTheoryPhysics.pdf",
     "Shlomo Sternberg — candidate URL at Harvard (verify)"),
    ("http://people.math.harvard.edu/~shlomo/docs/curvature.pdf",
     "01-fundamentals/Sternberg-CurvatureMathPhysics.pdf",
     "Shlomo Sternberg — candidate URL at Harvard (verify)"),
    ("http://people.math.harvard.edu/~shlomo/docs/Advanced_Calculus.pdf",
     "01-fundamentals/Sternberg-LecturesDifferentialGeometry.pdf",
     "Shlomo Sternberg — candidate URL at Harvard (verify)"),
]


def head_check(url, timeout=15):
    try:
        req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": USER_AGENT})
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, r.headers.get("Content-Type", ""), int(r.headers.get("Content-Length", 0) or 0)
    except Exception as e:
        return None, str(e)[:80], 0


def download(url, dest, timeout=120):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        data = r.read()
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)
    return len(data)


def main():
    root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(
        "/Users/tyler/Documents/proj rn/codex/reference/fasttrack-texts")

    results = []
    for url, rel, note in CANDIDATES:
        dest = root / rel
        if dest.exists() and dest.stat().st_size > 10_000:
            results.append(("SKIP", url, dest.stat().st_size, note))
            continue

        status, ctype, size = head_check(url)
        if status != 200:
            results.append(("MISS", url, f"HEAD={status} {ctype}", note))
            continue
        if "pdf" not in ctype.lower() and not url.lower().endswith(".pdf"):
            results.append(("WRONG_TYPE", url, f"content-type={ctype}", note))
            continue

        try:
            bytes_got = download(url, dest)
            results.append(("OK", url, bytes_got, note))
            print(f"  OK  {rel}  ({bytes_got/1024/1024:.1f} MB)")
        except Exception as e:
            results.append(("FAIL", url, str(e)[:80], note))
            print(f"  FAIL  {rel}:  {e}")
        time.sleep(RATE)

    # Report
    print("\n=== Results ===")
    for status, url, info, note in results:
        print(f"  [{status}] {url}  ({info})")
        print(f"         {note}")


if __name__ == "__main__":
    main()
