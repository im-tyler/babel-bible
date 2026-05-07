#!/usr/bin/env python3
r"""Compile a TikZ source file to an SVG placeholder.

Reads ``site/diagrams/<slug>.tex`` (a TikZ body — just the
``\begin{tikzpicture}...\end{tikzpicture}`` content, no preamble), wraps
it in a standalone LaTeX document, runs ``pdflatex`` + ``pdftocairo`` to
produce a vector SVG, and writes it to
``site/public/img/<slug>-placeholder.svg``, overwriting any existing
auto-generated abstract placeholder.

Usage:
  python3 scripts/render_diagram.py <slug>...   # render specific slugs
  python3 scripts/render_diagram.py --all       # render every .tex in site/diagrams/

Requirements (macOS):  brew install --cask mactex
                       brew install poppler          # for pdftocairo
"""
import argparse
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIAGRAMS_DIR = ROOT / "site" / "diagrams"
OUT_DIR = ROOT / "site" / "public" / "img"

PREAMBLE_PATH = DIAGRAMS_DIR / "_preamble.tex"

DEFAULT_PREAMBLE = r"""\documentclass[border=4pt]{standalone}
\usepackage{tikz}
\usepackage{amsmath,amssymb}
\usepackage{tikz-cd}
\usetikzlibrary{arrows.meta,backgrounds,calc,decorations.pathreplacing,positioning,shapes.geometric}
\begin{document}
%BODY%
\end{document}
"""


def load_preamble() -> str:
    if PREAMBLE_PATH.exists():
        return PREAMBLE_PATH.read_text(encoding="utf-8")
    return DEFAULT_PREAMBLE


def compile_one(slug: str) -> bool:
    src = DIAGRAMS_DIR / f"{slug}.tex"
    if not src.exists():
        print(f"  ! source not found: {src}")
        return False
    body = src.read_text(encoding="utf-8")
    preamble = load_preamble()
    if "%BODY%" not in preamble:
        print(f"  ! preamble missing %BODY% marker")
        return False
    full = preamble.replace("%BODY%", body)

    with tempfile.TemporaryDirectory() as td:
        td = Path(td)
        tex = td / f"{slug}.tex"
        tex.write_text(full, encoding="utf-8")
        try:
            subprocess.run(
                ["pdflatex", "-interaction=nonstopmode", "-halt-on-error",
                 "-output-directory", str(td), str(tex)],
                check=True, capture_output=True, text=True, cwd=td,
            )
        except subprocess.CalledProcessError as e:
            print(f"  ! pdflatex failed for {slug}:\n{e.stdout[-1500:]}")
            return False
        pdf = td / f"{slug}.pdf"
        out = OUT_DIR / f"{slug}-placeholder.svg"
        OUT_DIR.mkdir(parents=True, exist_ok=True)
        try:
            subprocess.run(
                ["pdftocairo", "-svg", str(pdf), str(out)],
                check=True, capture_output=True, text=True, cwd=td,
            )
        except subprocess.CalledProcessError as e:
            print(f"  ! pdftocairo failed for {slug}: {e.stderr[-500:]}")
            return False
    print(f"  + wrote {out.relative_to(ROOT)}")
    return True


def main() -> int:
    if shutil.which("pdflatex") is None or shutil.which("pdftocairo") is None:
        print("error: 'pdflatex' and 'pdftocairo' must be on PATH "
              "(install MacTeX + poppler)")
        return 2
    ap = argparse.ArgumentParser()
    ap.add_argument("slugs", nargs="*")
    ap.add_argument("--all", action="store_true")
    args = ap.parse_args()

    if args.all:
        slugs = sorted(p.stem for p in DIAGRAMS_DIR.glob("*.tex") if p.stem != "_preamble")
    else:
        slugs = args.slugs
    if not slugs:
        print("nothing to render (pass slugs or --all)")
        return 0
    ok = sum(1 for s in slugs if compile_one(s))
    print(f"rendered {ok}/{len(slugs)}")
    return 0 if ok == len(slugs) else 1


if __name__ == "__main__":
    sys.exit(main())
