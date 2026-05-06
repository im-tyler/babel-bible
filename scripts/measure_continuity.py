#!/usr/bin/env python3
"""measure_continuity.py — compute Layer 4 continuity metrics across Codex.

Six metrics (per CONTINUITY_SCAFFOLD.md §10):

  1. Backward-reference density (per 1000 words, per unit)        target ≥ 8
  2. Forward-promise density   (per 1000 words, per unit)         target ≥ 3
  3. Lateral-connection count  (per unit Master section)          target ≥ 3
  4. Synthesis-claim count     (per unit Intermediate ≥2, Master ≥4)
  5. Anchor-phrase reuse rate  (verbatim use of registered phrases)  target ≥ 95%
  6. Throughline coverage rate (synthesis_beats hit by bridges)   target = 100%

Reads:
  content/**/*.md          — units
  flows/**/*.md            — flow files (when they exist)
  manifests/connections.json — registered connections + anchor phrases

Writes:
  manifests/continuity_report.md   — per-unit and per-flow report
  Exit code: 0 if all thresholds met, 1 if any below.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from collections import defaultdict
from dataclasses import dataclass, field

ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "content"
FLOWS_DIR = ROOT / "flows"
CONNECTIONS = ROOT / "manifests" / "connections.json"
REPORT = ROOT / "manifests" / "continuity_report.md"

# Thresholds
THRESHOLD_BACKWARD = 8.0   # per 1000 words
THRESHOLD_FORWARD = 3.0    # per 1000 words
THRESHOLD_LATERAL_PER_MASTER = 3
THRESHOLD_SYNTHESIS_INTERMEDIATE = 2
THRESHOLD_SYNTHESIS_MASTER = 4
THRESHOLD_ANCHOR_REUSE = 0.95
THRESHOLD_THROUGHLINE_COVERAGE = 1.0


# Patterns
UNIT_ID_PATTERN = re.compile(r"\b\d{2}\.\d{2}\.\d{2}\b")
FORWARD_PROMISE_PATTERNS = [
    re.compile(r"\bwe\s+will\s+see\b", re.I),
    re.compile(r"\bbuilds?\s+toward\b", re.I),
    re.compile(r"\bin\s+the\s+next\b", re.I),
    re.compile(r"\bforshadow\w*", re.I),
    re.compile(r"\bwe\s+will\s+later\b", re.I),
    re.compile(r"\bappears?\s+again\s+in\b", re.I),
    re.compile(r"\bthis\s+pattern\s+recurs?\b", re.I),
]
SYNTHESIS_CLAIM_PATTERNS = [
    re.compile(r"\bthe\s+(foundational|core|central)\s+(reason|insight|idea|claim)\b", re.I),
    re.compile(r"\bthis\s+is\s+(exactly|precisely|the\s+same\s+as)\b", re.I),
    re.compile(r"\b(generalises|specialises|is\s+dual\s+to|is\s+the\s+limit)\b", re.I),
    re.compile(r"\b(is|recurs?)\s+(an\s+instance|a\s+special\s+case|a\s+generalisation)\s+of\b", re.I),
    re.compile(r"\bputting\s+(this|these)\s+together\b", re.I),
    re.compile(r"\bindex\s*=\s*topology\b", re.I),
    re.compile(r"\bthe\s+bridge\s+(is|between)\b", re.I),
    re.compile(r"\bidentifies?\s+\w+\s+with\s+\w+\b", re.I),
]


@dataclass
class UnitMetrics:
    path: str
    unit_id: str = ""
    word_count_total: int = 0
    word_count_intermediate: int = 0
    word_count_master: int = 0
    backward_refs: int = 0
    forward_promises: int = 0
    lateral_connections_master: int = 0
    synthesis_claims_intermediate: int = 0
    synthesis_claims_master: int = 0
    anchor_phrases_invoked: int = 0
    anchor_phrases_verbatim: int = 0
    failures: list[str] = field(default_factory=list)

    @property
    def backward_density(self) -> float:
        return (self.backward_refs / max(self.word_count_total, 1)) * 1000

    @property
    def forward_density(self) -> float:
        return (self.forward_promises / max(self.word_count_total, 1)) * 1000

    @property
    def anchor_reuse_rate(self) -> float:
        if self.anchor_phrases_invoked == 0:
            return 1.0
        return self.anchor_phrases_verbatim / self.anchor_phrases_invoked


def split_into_tier_sections(body: str) -> dict[str, str]:
    """Split markdown body by tier sections.

    Sections with `[Beginner]`, `[Intermediate+]` or `[Master]` markers in the H2.
    """
    sections = {"beginner": "", "intermediate": "", "master": ""}
    parts = re.split(r"(?=^## )", body, flags=re.M)
    for p in parts:
        m = re.match(r"^## ([^\n]+)", p)
        if not m:
            continue
        heading = m.group(1).lower()
        if "[beginner]" in heading:
            sections["beginner"] += p
        elif "[intermediate" in heading:
            sections["intermediate"] += p
        elif "[master]" in heading:
            sections["master"] += p
        elif "[all tiers]" in heading:
            for k in sections:
                sections[k] += p
    return sections


def count_words(text: str) -> int:
    text = re.sub(r"```[\s\S]*?```", "", text)  # strip fenced code blocks
    text = re.sub(r"<[^>]+>", "", text)  # strip html tags
    text = re.sub(r"\$[^$]+\$", "", text)  # strip inline math
    text = re.sub(r"\$\$[\s\S]*?\$\$", "", text)  # strip display math
    return len(re.findall(r"\b[A-Za-z][A-Za-z\-']+\b", text))


def count_backward_refs(text: str, this_unit_id: str = "") -> int:
    """Count explicit backward references — unit IDs that aren't this unit's own."""
    matches = UNIT_ID_PATTERN.findall(text)
    # Each occurrence of another unit's ID counts as a reference.
    other = [m for m in matches if m != this_unit_id]
    return len(other)


def count_forward_promises(text: str) -> int:
    return sum(len(p.findall(text)) for p in FORWARD_PROMISE_PATTERNS)


def count_synthesis_claims(text: str) -> int:
    return sum(len(p.findall(text)) for p in SYNTHESIS_CLAIM_PATTERNS)


def count_lateral_connections(master_section: str) -> int:
    """Count items in the Master Connections section's list."""
    m = re.search(r"## Connections \[Master\]([\s\S]*?)(?=^## |\Z)", master_section, re.M)
    if not m:
        return 0
    body = m.group(1)
    # Bullet items in Connections section
    bullets = re.findall(r"^\s*[-*]\s+", body, re.M)
    return len(bullets)


def load_connections() -> dict:
    if not CONNECTIONS.exists():
        return {"connections": []}
    return json.loads(CONNECTIONS.read_text())


def measure_unit(path: Path, registered: list[dict]) -> UnitMetrics:
    metrics = UnitMetrics(path=str(path.relative_to(ROOT)))
    raw = path.read_text(encoding="utf-8", errors="ignore")
    # Frontmatter
    fm_match = re.match(r"^---\n([\s\S]*?)\n---\n", raw)
    body = raw[fm_match.end():] if fm_match else raw
    if fm_match:
        fm = fm_match.group(1)
        m = re.search(r"^id:\s*(\S+)", fm, re.M)
        if m:
            metrics.unit_id = m.group(1)

    metrics.word_count_total = count_words(body)
    metrics.backward_refs = count_backward_refs(body, metrics.unit_id)
    metrics.forward_promises = count_forward_promises(body)

    sections = split_into_tier_sections(body)
    metrics.word_count_intermediate = count_words(sections["intermediate"])
    metrics.word_count_master = count_words(sections["master"])
    metrics.synthesis_claims_intermediate = count_synthesis_claims(sections["intermediate"])
    metrics.synthesis_claims_master = count_synthesis_claims(sections["master"])
    metrics.lateral_connections_master = count_lateral_connections(sections["master"])

    # Anchor-phrase reuse (only meaningful once registry has phrases)
    for conn in registered:
        phrase = conn.get("anchor_phrase", "")
        if not phrase:
            continue
        unit_invokes = phrase.lower() in body.lower()
        if unit_invokes:
            metrics.anchor_phrases_invoked += 1
            if phrase in body:  # exact verbatim
                metrics.anchor_phrases_verbatim += 1

    return metrics


def evaluate_thresholds(metrics: list[UnitMetrics]) -> tuple[dict, list[str]]:
    failures = []
    if not metrics:
        return {}, ["No units found."]

    by_metric = {
        "backward_density_avg": sum(m.backward_density for m in metrics) / len(metrics),
        "forward_density_avg": sum(m.forward_density for m in metrics) / len(metrics),
        "lateral_per_master_avg": sum(m.lateral_connections_master for m in metrics) / len(metrics),
        "synthesis_intermediate_avg": sum(m.synthesis_claims_intermediate for m in metrics) / len(metrics),
        "synthesis_master_avg": sum(m.synthesis_claims_master for m in metrics) / len(metrics),
        "anchor_reuse_avg": sum(m.anchor_reuse_rate for m in metrics) / len(metrics),
    }

    if by_metric["backward_density_avg"] < THRESHOLD_BACKWARD:
        failures.append(f"backward_density: {by_metric['backward_density_avg']:.2f} < {THRESHOLD_BACKWARD}")
    if by_metric["forward_density_avg"] < THRESHOLD_FORWARD:
        failures.append(f"forward_density: {by_metric['forward_density_avg']:.2f} < {THRESHOLD_FORWARD}")
    if by_metric["lateral_per_master_avg"] < THRESHOLD_LATERAL_PER_MASTER:
        failures.append(f"lateral_per_master: {by_metric['lateral_per_master_avg']:.2f} < {THRESHOLD_LATERAL_PER_MASTER}")
    if by_metric["synthesis_intermediate_avg"] < THRESHOLD_SYNTHESIS_INTERMEDIATE:
        failures.append(f"synthesis_intermediate: {by_metric['synthesis_intermediate_avg']:.2f} < {THRESHOLD_SYNTHESIS_INTERMEDIATE}")
    if by_metric["synthesis_master_avg"] < THRESHOLD_SYNTHESIS_MASTER:
        failures.append(f"synthesis_master: {by_metric['synthesis_master_avg']:.2f} < {THRESHOLD_SYNTHESIS_MASTER}")
    if by_metric["anchor_reuse_avg"] < THRESHOLD_ANCHOR_REUSE:
        failures.append(f"anchor_reuse: {by_metric['anchor_reuse_avg']:.2f} < {THRESHOLD_ANCHOR_REUSE}")

    return by_metric, failures


def write_report(metrics: list[UnitMetrics], by_metric: dict, failures: list[str]) -> None:
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    lines = ["# Codex — Continuity Report\n"]
    lines.append(f"_Generated: $(date)_\n\n")
    lines.append(f"**Units measured:** {len(metrics)}\n\n")
    lines.append("## Aggregate metrics\n\n")
    lines.append("| Metric | Avg | Threshold | Status |\n")
    lines.append("|---|---|---|---|\n")
    rows = [
        ("Backward-reference density (per 1000w)", by_metric.get("backward_density_avg", 0), THRESHOLD_BACKWARD),
        ("Forward-promise density (per 1000w)", by_metric.get("forward_density_avg", 0), THRESHOLD_FORWARD),
        ("Lateral connections (per Master section)", by_metric.get("lateral_per_master_avg", 0), THRESHOLD_LATERAL_PER_MASTER),
        ("Synthesis claims (Intermediate)", by_metric.get("synthesis_intermediate_avg", 0), THRESHOLD_SYNTHESIS_INTERMEDIATE),
        ("Synthesis claims (Master)", by_metric.get("synthesis_master_avg", 0), THRESHOLD_SYNTHESIS_MASTER),
        ("Anchor-phrase reuse rate", by_metric.get("anchor_reuse_avg", 0), THRESHOLD_ANCHOR_REUSE),
    ]
    for name, val, thresh in rows:
        status = "✓" if val >= thresh else "✗"
        lines.append(f"| {name} | {val:.2f} | {thresh} | {status} |\n")
    lines.append("\n")

    if failures:
        lines.append("## Failures\n\n")
        for f in failures:
            lines.append(f"- {f}\n")
        lines.append("\n")
    else:
        lines.append("## All thresholds met ✓\n\n")

    # Bottom 10 (worst) units by backward density
    lines.append("## Lowest 10 units by backward-reference density\n\n")
    sorted_by_back = sorted(metrics, key=lambda m: m.backward_density)[:10]
    lines.append("| Unit | Path | Backward / 1000w |\n|---|---|---|\n")
    for m in sorted_by_back:
        lines.append(f"| {m.unit_id} | {m.path} | {m.backward_density:.2f} |\n")

    REPORT.write_text("".join(lines))


def main() -> int:
    registry = load_connections()
    registered = registry.get("connections", [])

    units = sorted(CONTENT_DIR.rglob("*.md"))
    metrics = [measure_unit(p, registered) for p in units]

    by_metric, failures = evaluate_thresholds(metrics)
    write_report(metrics, by_metric, failures)

    print(f"Continuity report: {REPORT}")
    print(f"Units measured: {len(metrics)}")
    for k, v in by_metric.items():
        print(f"  {k}: {v:.2f}")
    if failures:
        print(f"Threshold failures: {len(failures)}")
        for f in failures:
            print(f"  - {f}")
        return 1
    print("All thresholds met.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
