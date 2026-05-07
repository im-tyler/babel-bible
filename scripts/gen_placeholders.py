#!/usr/bin/env python3
"""Generate placeholder SVGs for missing concept images.

Scans content/ for `/img/<slug>-placeholder.svg` references and writes
SVGs to site/public/img/ for any slug that doesn't already have one.

Style matches the existing placeholders: 720x360 viewBox, cream
background, two accent colours, abstract shapes, concept name centred
at the bottom. Variant chosen deterministically from the slug hash so
the same concept always gets the same picture.
"""
import hashlib
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "content"
OUT_DIR = ROOT / "site" / "public" / "img"

PALETTES = [
    ("#f7f7f2", "#1f6f8b", "#f2b134"),
    ("#f5f1e9", "#2f5f89", "#7a4f9a"),
    ("#fbf5ee", "#3a6a4f", "#c66a3a"),
    ("#f4f4ec", "#5a3d6f", "#d68a3a"),
    ("#f7f3ea", "#1d4e5a", "#b8651e"),
    ("#f6f1e7", "#2d5a3d", "#8a4a8a"),
]


def title_case(slug: str) -> str:
    parts = slug.replace("-", " ").split()
    small = {"of", "and", "in", "on", "the", "to", "a", "for"}
    out = []
    for i, w in enumerate(parts):
        if i > 0 and w in small:
            out.append(w)
        else:
            out.append(w[:1].upper() + w[1:])
    return " ".join(out)


def variant_a(palette):
    bg, c1, c2 = palette
    return f"""  <rect width="720" height="360" fill="{bg}"/>
  <circle cx="180" cy="180" r="94" fill="none" stroke="{c1}" stroke-width="12"/>
  <path d="M290 180 C360 80 430 280 500 180 S620 150 650 205" fill="none" stroke="{c2}" stroke-width="14" stroke-linecap="round"/>
  <g fill="{c1}">
    <circle cx="180" cy="180" r="10"/>
    <circle cx="500" cy="180" r="10"/>
    <circle cx="650" cy="205" r="10"/>
  </g>"""


def variant_b(palette):
    bg, c1, c2 = palette
    return f"""  <rect width="720" height="360" fill="{bg}"/>
  <g stroke="{c1}" stroke-width="2" fill="none" opacity="0.45">
    <path d="M120 80 L120 280"/><path d="M220 80 L220 280"/><path d="M320 80 L320 280"/>
    <path d="M420 80 L420 280"/><path d="M520 80 L520 280"/><path d="M620 80 L620 280"/>
    <path d="M120 80 L620 80"/><path d="M120 140 L620 140"/><path d="M120 200 L620 200"/>
    <path d="M120 260 L620 260"/>
  </g>
  <path d="M120 260 Q220 80 320 200 T520 140 T620 200" fill="none" stroke="{c2}" stroke-width="10" stroke-linecap="round"/>
  <circle cx="220" cy="140" r="9" fill="{c1}"/>
  <circle cx="420" cy="200" r="9" fill="{c1}"/>
  <circle cx="620" cy="200" r="9" fill="{c1}"/>"""


def variant_c(palette):
    bg, c1, c2 = palette
    return f"""  <rect width="720" height="360" fill="{bg}"/>
  <ellipse cx="360" cy="170" rx="240" ry="100" fill="none" stroke="{c1}" stroke-width="8"/>
  <ellipse cx="360" cy="170" rx="240" ry="100" fill="none" stroke="{c2}" stroke-width="3" stroke-dasharray="6 8" transform="rotate(20 360 170)"/>
  <g fill="{c1}">
    <circle cx="180" cy="170" r="8"/>
    <circle cx="540" cy="170" r="8"/>
    <circle cx="360" cy="80" r="8"/>
    <circle cx="360" cy="260" r="8"/>
  </g>"""


def variant_d(palette):
    bg, c1, c2 = palette
    return f"""  <rect width="720" height="360" fill="{bg}"/>
  <defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="{c1}"/></marker></defs>
  <g stroke="{c1}" stroke-width="5" fill="none" marker-end="url(#ar)">
    <path d="M120 90 L300 170"/>
    <path d="M120 250 L300 170"/>
    <path d="M300 170 L500 90"/>
    <path d="M300 170 L500 250"/>
  </g>
  <g fill="{c2}">
    <circle cx="120" cy="90" r="14"/>
    <circle cx="120" cy="250" r="14"/>
    <circle cx="300" cy="170" r="14"/>
    <circle cx="500" cy="90" r="14"/>
    <circle cx="500" cy="250" r="14"/>
  </g>"""


def variant_e(palette):
    bg, c1, c2 = palette
    return f"""  <rect width="720" height="360" fill="{bg}"/>
  <g fill="none" stroke="{c1}" stroke-width="6">
    <rect x="100" y="80" width="180" height="180"/>
    <rect x="270" y="80" width="180" height="180"/>
    <rect x="440" y="80" width="180" height="180"/>
  </g>
  <g fill="none" stroke="{c2}" stroke-width="4">
    <path d="M190 170 Q280 50 360 170"/>
    <path d="M360 170 Q450 290 530 170"/>
  </g>
  <g fill="{c1}">
    <circle cx="190" cy="170" r="9"/>
    <circle cx="360" cy="170" r="9"/>
    <circle cx="530" cy="170" r="9"/>
  </g>"""


def variant_f(palette):
    bg, c1, c2 = palette
    return f"""  <rect width="720" height="360" fill="{bg}"/>
  <path d="M80 280 Q200 60 360 200 T640 140" fill="none" stroke="{c1}" stroke-width="14" stroke-linecap="round"/>
  <path d="M80 200 Q200 320 360 100 T640 240" fill="none" stroke="{c2}" stroke-width="10" stroke-linecap="round" stroke-dasharray="14 10"/>
  <g fill="{c1}"><circle cx="80" cy="280" r="10"/><circle cx="640" cy="140" r="10"/></g>
  <g fill="{c2}"><circle cx="80" cy="200" r="10"/><circle cx="640" cy="240" r="10"/></g>"""


VARIANTS = [variant_a, variant_b, variant_c, variant_d, variant_e, variant_f]


def render(slug: str) -> str:
    h = int(hashlib.sha1(slug.encode()).hexdigest(), 16)
    palette = PALETTES[h % len(PALETTES)]
    variant = VARIANTS[(h // len(PALETTES)) % len(VARIANTS)]
    title = title_case(slug)
    body = variant(palette)
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-labelledby="title desc">\n'
        f'  <title id="title">{title}</title>\n'
        f'  <desc id="desc">A schematic placeholder diagram for {title}.</desc>\n'
        f'{body}\n'
        f'  <text x="360" y="325" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="28" fill="#222">{title}</text>\n'
        f'</svg>\n'
    )


REF_RE = re.compile(r"/img/([a-z0-9\-]+)-placeholder\.svg")


def collect_referenced_slugs() -> set[str]:
    slugs: set[str] = set()
    for p in CONTENT_DIR.rglob("*.md"):
        try:
            text = p.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue
        for m in REF_RE.finditer(text):
            slugs.add(m.group(1))
    return slugs


def existing_slugs() -> set[str]:
    if not OUT_DIR.exists():
        return set()
    return {
        p.stem.removesuffix("-placeholder")
        for p in OUT_DIR.glob("*-placeholder.svg")
    }


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    referenced = collect_referenced_slugs()
    existing = existing_slugs()
    missing = sorted(referenced - existing)
    print(f"Referenced: {len(referenced)} | existing: {len(existing)} | missing: {len(missing)}")
    for slug in missing:
        out = OUT_DIR / f"{slug}-placeholder.svg"
        out.write_text(render(slug), encoding="utf-8")
    print(f"Wrote {len(missing)} new SVG(s).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
