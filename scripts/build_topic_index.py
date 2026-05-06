#!/usr/bin/env python3
"""Build TOPIC_INDEX.md by crawling the reference archive and mapping files to topics.

The primary organizing spine is Quantum Well's folder hierarchy (it's the cleanest
and covers the most of our curriculum territory). For each top-level topic, we list:
- Quantum Well folder contents
- Tong PDFs that cover it
- Jimmy Qin PDFs that cover it
- Other sources where relevant

Usage: build_topic_index.py <codex_dir>
"""
import os
import re
import sys
from pathlib import Path
from collections import defaultdict


def list_md(root):
    return sorted(p.relative_to(root) for p in root.rglob("*.md"))


def list_pdfs(root):
    return sorted(p.relative_to(root) for p in root.rglob("*.pdf"))


# Mapping from curriculum category to keywords that match Jimmy Qin / Tong filenames
KEYWORDS = {
    "Linear Algebra": ["linear-algebra", "linalg", "matrix", "vc", "vector"],
    "Analysis / Calculus": ["calculus", "analysis", "ahlfors", "apostol"],
    "Complex Analysis": ["complex-analysis", "ahlfors", "complex", "contour", "residue"],
    "Differential Equations": ["ode", "pde", "differential", "diffeq"],
    "Differential Geometry": ["differential-geometry", "diffgeo", "manifold", "connection", "curvature"],
    "Topology": ["topology", "homotopy", "homology", "cohomology", "simplicial"],
    "Algebra / Lie Groups": ["algebra", "lie", "rep-theory", "representation", "group"],
    "Number Theory": ["number-theory", "arithmetic", "p-adic", "adele", "zeta"],
    "Classical Mechanics": ["mechanics", "lagrangian", "hamiltonian", "dynamics", "relativity"],
    "Electromagnetism": ["em.pdf", "electromagnet", "maxwell", "electrodynamic"],
    "Fluid Mechanics": ["fluids", "fluid-dynamics", "hydrodynamic"],
    "General Relativity": ["gr.pdf", "general-relativity", "cosmology", "einstein"],
    "Quantum Mechanics": ["quantum-mechanics", "qm-", "scattering", "born", "dirac"],
    "Quantum Field Theory": ["qft", "quantum-field", "gauge-theory", "path-integral"],
    "Statistical Mechanics": ["statphys", "statistical", "stat-mech", "ising", "percolation"],
    "Statistical Field Theory": ["sft.pdf", "stat-field"],
    "Condensed Matter": ["solid-state", "superconduct", "bec-", "bcs-", "quasiparticle"],
    "Particle Physics": ["particle.pdf", "standard-model", "elementary-particle"],
    "String Theory": ["string.pdf", "string-theory", "branes", "supersymmetry", "susy"],
    "Pedagogy / Methodology": [],  # handled by source mapping
}


def match_files(files, keywords):
    out = []
    for f in files:
        name = str(f).lower()
        for kw in keywords:
            if kw.lower() in name:
                out.append(f)
                break
    return sorted(set(out))


def main():
    codex = Path(sys.argv[1])
    ref = codex / "reference"

    qw = ref / "quantum-well" / "md"
    tong_pdf = ref / "tong" / "raw" / "pdfs"
    jq_pdf = ref / "jimmyqin" / "raw" / "pdfs"
    milekic = ref / "milekic" / "md"

    # Quantum Well: use its folder hierarchy as primary spine
    qw_folders = defaultdict(list)
    for f in qw.rglob("*.md"):
        rel = f.relative_to(qw)
        parts = rel.parts
        top = parts[0] if len(parts) > 1 else "_root"
        qw_folders[top].append(rel)

    tong_pdfs = list_pdfs(tong_pdf)
    jq_pdfs = list_pdfs(jq_pdf)
    milekic_mds = list_md(milekic)

    out_path = codex / "reference" / "_meta" / "TOPIC_INDEX.md"
    lines = [
        "# Codex Topic Index",
        "",
        "Auto-generated map of curriculum topics to archive files. Regenerate after any fetch.",
        "",
        "The primary organizing spine is **Quantum Well** (the most comprehensive, CC BY 4.0-licensed source).",
        "Cross-references to Tong PDFs, Jimmy Qin PDFs, and Milekic notes are keyword-matched.",
        "",
        "## Source Coverage Summary",
        "",
        f"- Quantum Well: {sum(len(v) for v in qw_folders.values())} notes across {len(qw_folders)} top-level folders",
        f"- Tong lecture PDFs: {len(tong_pdfs)}",
        f"- Jimmy Qin lecture PDFs: {len(jq_pdfs)}",
        f"- Milekic notes: {len(milekic_mds)} (mostly software; math portion smaller)",
        "",
        "---",
        "",
        "## Curriculum Categories (keyword-indexed)",
        "",
    ]
    for topic, kws in KEYWORDS.items():
        tong_match = match_files(tong_pdfs, kws)
        jq_match = match_files(jq_pdfs, kws)
        mil_match = [m for m in milekic_mds if any(kw.lower() in str(m).lower() for kw in kws)]
        lines.append(f"### {topic}")
        lines.append("")
        if tong_match:
            lines.append(f"**Tong ({len(tong_match)}):**")
            for f in tong_match:
                lines.append(f"- `tong/raw/pdfs/{f}`")
            lines.append("")
        if jq_match:
            lines.append(f"**Jimmy Qin ({len(jq_match)}):**")
            for f in jq_match[:15]:
                lines.append(f"- `jimmyqin/raw/pdfs/{f}`")
            if len(jq_match) > 15:
                lines.append(f"- … and {len(jq_match) - 15} more")
            lines.append("")
        if mil_match:
            lines.append(f"**Milekic ({len(mil_match)}):**")
            for f in mil_match[:10]:
                lines.append(f"- `milekic/md/{f}`")
            if len(mil_match) > 10:
                lines.append(f"- … and {len(mil_match) - 10} more")
            lines.append("")
        if not (tong_match or jq_match or mil_match):
            lines.append("_No keyword matches — check Quantum Well folder index below._")
            lines.append("")

    lines.append("---")
    lines.append("")
    lines.append("## Quantum Well — Full Folder Index")
    lines.append("")
    lines.append("Quantum Well organizes its 958 notes into these top-level categories. For in-depth coverage of most math and physics topics, this is the primary source.")
    lines.append("")
    for folder, files in sorted(qw_folders.items()):
        lines.append(f"### {folder} ({len(files)} notes)")
        lines.append("")
        for f in sorted(files)[:20]:
            lines.append(f"- `quantum-well/md/{f}`")
        if len(files) > 20:
            lines.append(f"- … and {len(files) - 20} more")
        lines.append("")

    out_path.write_text("\n".join(lines))
    print(f"Wrote {out_path}")


if __name__ == "__main__":
    main()
