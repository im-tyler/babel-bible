#!/usr/bin/env python3
"""Validate a Codex unit against the automated portion of docs/specs/QUALITY_RUBRIC.md.

Usage:
    python validate_unit.py path/to/unit.md
    python validate_unit.py content/03-modern-geometry/09-spin-geometry/03.09.02-clifford-algebra.md

Exit code:
    0 - all automated checks pass; ready for human review
    1 - one or more checks failed; details on stdout

Run this *before* sending a unit to human reviewers. A failing unit doesn't
enter human review.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import yaml


_CATALOG_TEXT_CACHE: dict[Path, str] = {}
_DEPS_CACHE: dict[Path, dict[str, Any]] = {}
_CONTENT_STATUS_CACHE: dict[Path, dict[str, set[str]]] = {}
_UNIT_STATUS_CACHE: dict[Path, dict[str, set[str]]] = {}


# Repo root resolution: walk up from the unit until we find OVERVIEW.md
def find_repo_root(start: Path) -> Path:
    cur = start.resolve()
    for ancestor in [cur, *cur.parents]:
        if (ancestor / "OVERVIEW.md").exists():
            return ancestor
    raise SystemExit(f"Could not locate codex/ root from {start}")


REQUIRED_FRONTMATTER = {
    "id", "title", "slug", "section", "chapter", "concept_catalog_id",
    "prerequisites", "tier_anchors", "tiers_present", "references",
    "lean_status", "estimated_time", "status",
}

VALID_TIERS = {"beginner", "intermediate", "master"}

UNIT_ID_RE = re.compile(r"^\d{2}\.\d{2}\.\d{2}$")
ESSAY_ID_RE = re.compile(r"^\d{2}\.essays\.\d{2}$")

DOMAIN_BY_PREFIX = {
    "00": "math", "01": "math", "02": "math", "03": "math",
    "04": "math", "05": "math", "06": "math", "07": "math",
    "08": "math",
    "09": "physics", "10": "physics", "11": "physics",
    "12": "physics", "13": "physics",
    "14": "chemistry", "15": "chemistry", "16": "chemistry",
    "17": "biology", "18": "biology", "19": "biology",
    "20": "philosophy",
    "22": "language",
    "23": "world",
    "24": "numerical-pde",
    "25": "logic",
    "26": "statistics",
    "27": "earth-science",
    "28": "astronomy",
    "29": "psychology",
    "30": "sociology",
    "31": "anthropology",
    "32": "world",
    "33": "history-of-science",
    "34": "music-art",
    "35": "health-medicine",
    "36": "media-literacy",
}

INTERMEDIATE_EVIDENCE_KEYWORDS = {
    "math": [
        "key theorem", "key result", "key derivation",
    ],
    "physics": [
        "key theorem", "key derivation", "core model", "key result",
    ],
    "chemistry": [
        "key theorem", "key mechanism", "key result", "key derivation",
        "core model", "advanced treatment",
    ],
    "biology": [
        "key mechanism", "key experiment", "evidence pattern",
        "core model", "key theorem", "key result",
    ],
    "philosophy": [
        "key argument", "argument reconstruction", "case analysis",
        "key theorem", "key concepts",
    ],
    "psychology": [
        "key mechanism", "key experiment", "key model", "key result",
        "core model", "evidence pattern",
    ],
    "sociology": [
        "key concepts", "key model", "case study", "comparative framework",
        "institutional analysis", "academic perspectives", "social theory",
        "key argument", "competing perspectives",
    ],
    "language": [
        "key concepts", "diagnostics", "close reading",
        "rhetorical analysis", "linguistic theory", "critical theory",
    ],
    "world": [
        "key concepts", "key model", "case study", "comparative framework",
        "institutional analysis", "academic perspectives", "political theory",
        "geographic theory", "economic theory",
    ],
}

PROHIBITED_PHRASES = [
    r"\bobviously\b", r"\bclearly\b", r"\bit is easy to see\b",
    r"\bas we will see\b", r"\btrivial(?:ly)?\b",
    r"\bnow,?\s+let'?s\s+consider\b",
]
PROHIBITED_RE = re.compile("|".join(PROHIBITED_PHRASES), re.IGNORECASE)

# Tokens that signal a formal proof being presented rather than an
# intuition-building introduction. "Let X be..." style opens are flagged
# only when they introduce an arbitrary symbol; "Let's compute..." (plain
# English contraction) is permitted via the trailing-apostrophe check.
BEGINNER_PROOF_LANGUAGE = [
    "Proof.", "QED", "∎", "It follows that", "Hence,", "Hence ",
]

# Allowed-only chars in Beginner formal-content scan.  Anything else flagged.
BEGINNER_ALLOWED_FORMAL = re.compile(
    r"\$([\d\s+\-*/=<>().\[\]a-zA-Z_]{0,40})\$"
)
# Common notation we *forbid* at Beginner (require flagging). \mathbb{R}
# etc. are permitted because the Beginner anchor (3Blue1Brown / Strogatz)
# uses them regularly. Truly advanced symbols (gradient, tensor product,
# summation/integration operators, quantifiers, Greek letters used as
# free variables) remain forbidden.
BEGINNER_FORBIDDEN_RE = re.compile(
    r"\\(nabla|otimes|sum|int|prod|partial|forall|exists)"
)


@dataclass
class CheckResult:
    name: str
    passed: bool
    detail: str = ""


@dataclass
class ValidationReport:
    unit_path: Path
    frontmatter: dict
    checks: list[CheckResult] = field(default_factory=list)

    def add(self, name: str, passed: bool, detail: str = ""):
        self.checks.append(CheckResult(name, passed, detail))

    @property
    def all_passed(self) -> bool:
        return all(c.passed for c in self.checks)

    def emit(self):
        passed = sum(1 for c in self.checks if c.passed)
        total = len(self.checks)
        print(f"\nValidation report for: {self.unit_path}")
        print(f"  {passed}/{total} checks passed.")
        for c in self.checks:
            mark = "✓" if c.passed else "✗"
            print(f"  [{mark}] {c.name}")
            if not c.passed and c.detail:
                for line in c.detail.split("\n"):
                    print(f"        {line}")


# ---------------------------------------------------------------------------
# Parsing
# ---------------------------------------------------------------------------

FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n(.*)$", re.DOTALL)


def parse_unit(path: Path) -> tuple[dict, str]:
    text = path.read_text(encoding="utf-8")
    m = FRONTMATTER_RE.match(text)
    if not m:
        raise ValueError(f"{path}: missing YAML frontmatter delimiters")
    fm = yaml.safe_load(m.group(1))
    body = m.group(2)
    return fm, body


SECTION_RE = re.compile(r"^(#{2,4})\s+(.+?)(?:\s*\[(\w+\+?)\])?\s*$", re.MULTILINE)


def extract_sections(body: str) -> list[tuple[int, str, str | None, int, int]]:
    """Return [(level, title, tier_marker, start_offset, end_offset), ...]."""
    matches = list(SECTION_RE.finditer(body))
    out = []
    for i, m in enumerate(matches):
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(body)
        out.append((len(m.group(1)), m.group(2).strip(), m.group(3), start, end))
    return out


def section_tier_set(marker: str | None) -> set[str]:
    """`[Beginner]` -> {"beginner"}; `[Intermediate+]` -> {"intermediate", "master"}; `[Master]` -> {"master"}."""
    if not marker:
        return set()
    base = marker.rstrip("+").lower()
    if base not in VALID_TIERS:
        return set()
    if marker.endswith("+"):
        order = ["beginner", "intermediate", "master"]
        return set(order[order.index(base):])
    return {base}


def unit_domain(fm: dict) -> str:
    uid = str(fm.get("id", ""))
    prefix = uid.split(".", 1)[0] if "." in uid else ""
    return DOMAIN_BY_PREFIX.get(prefix, "math")


def unit_prefix(fm: dict) -> str:
    uid = str(fm.get("id", ""))
    return uid.split(".", 1)[0] if "." in uid else ""


# ---------------------------------------------------------------------------
# Universal checks (§0)
# ---------------------------------------------------------------------------

def check_frontmatter_schema(report: ValidationReport):
    fm = report.frontmatter
    missing = [k for k in REQUIRED_FRONTMATTER if k not in fm]
    report.add(
        "frontmatter: all required fields present",
        not missing,
        detail=f"missing: {missing}" if missing else "",
    )


def check_id_filename_match(report: ValidationReport):
    fm = report.frontmatter
    name = report.unit_path.name
    expected_prefix = str(fm.get("id", "")) + "-"
    report.add(
        "filename matches id-slug pattern",
        name.startswith(expected_prefix) and name.endswith(".md"),
        detail=f"got {name}, expected to start with {expected_prefix} and end with .md",
    )


def check_tiers_present(report: ValidationReport):
    fm = report.frontmatter
    tp = fm.get("tiers_present", [])
    valid = isinstance(tp, list) and len(tp) > 0 and set(tp) <= VALID_TIERS
    report.add(
        "tiers_present is non-empty subset of {beginner, intermediate, master}",
        valid,
        detail=f"got {tp}",
    )


def check_concept_catalog_id(report: ValidationReport, repo: Path):
    fm = report.frontmatter
    cid = fm.get("concept_catalog_id", "")
    catalog = _concept_catalog_text(repo)
    found = bool(cid) and cid in catalog
    report.add(
        "concept_catalog_id exists in docs/catalogs/CONCEPT_CATALOG.md",
        found,
        detail=f"id '{cid}' not found" if not found else "",
    )


def check_section_markers_match_tiers(report: ValidationReport, body: str):
    fm = report.frontmatter
    tp = set(fm.get("tiers_present", []))
    sections = extract_sections(body)
    tiers_seen: set[str] = set()
    for _, _, marker, _, _ in sections:
        tiers_seen |= section_tier_set(marker)
    # Each present tier must have at least one section
    missing = tp - tiers_seen
    report.add(
        "tiers_present have corresponding section markers",
        not missing,
        detail=f"tiers without sections: {missing}" if missing else "",
    )
    # Tiers absent from tiers_present should not have content
    extras = (tiers_seen - tp) - {None}
    report.add(
        "no content for tiers outside tiers_present",
        not extras,
        detail=f"unexpected tier sections: {extras}" if extras else "",
    )


def check_prereqs(report: ValidationReport, repo: Path):
    fm = report.frontmatter
    prereqs = fm.get("prerequisites", []) or []
    pending_ok = bool(fm.get("pending_prereqs", False))
    draft_ok = fm.get("status") == "draft"
    deps = _deps_manifest(repo)
    pending_set = set(deps.get("pending", []))
    for edge in deps.get("edges", []):
        if isinstance(edge, dict) and edge.get("state") == "pending":
            if edge.get("from"):
                pending_set.add(str(edge.get("from")))
            if edge.get("to"):
                pending_set.add(str(edge.get("to")))

    # Each prereq must point to a published unit OR a pending edge
    failed = []
    for pid in prereqs:
        # Heuristic: "published" = a content/**/*.md exists with id == pid in frontmatter
        if not _unit_with_id_exists(pid, repo):
            if (pending_ok or draft_ok) and _content_with_id_exists(pid, repo):
                continue
            if not (pending_ok and pid in pending_set):
                failed.append(pid)
    report.add(
        "all prerequisites resolve OR are pending-registered",
        not failed,
        detail=f"unresolved: {failed}" if failed else "",
    )


def _unit_with_id_exists(uid: str, repo: Path) -> bool:
    return "shipped" in _unit_statuses(repo).get(str(uid), set())


def _content_with_id_exists(uid: str, repo: Path, shipped_only: bool = False) -> bool:
    statuses = _content_statuses(repo).get(str(uid), set())
    if not statuses:
        return False
    if not shipped_only:
        return True
    return "shipped" in statuses or ESSAY_ID_RE.match(str(uid)) is not None


def _concept_catalog_text(repo: Path) -> str:
    repo = repo.resolve()
    if repo not in _CATALOG_TEXT_CACHE:
        path = repo / "docs/catalogs/CONCEPT_CATALOG.md"
        _CATALOG_TEXT_CACHE[repo] = path.read_text() if path.exists() else ""
    return _CATALOG_TEXT_CACHE[repo]


def _deps_manifest(repo: Path) -> dict[str, Any]:
    repo = repo.resolve()
    if repo not in _DEPS_CACHE:
        path = repo / "manifests" / "deps.json"
        _DEPS_CACHE[repo] = json.loads(path.read_text()) if path.exists() else {}
    return _DEPS_CACHE[repo]


def _scan_statuses(roots: list[Path]) -> dict[str, set[str]]:
    statuses: dict[str, set[str]] = {}
    for root in roots:
        if not root.exists():
            continue
        for p in root.rglob("*.md"):
            try:
                fm, _ = parse_unit(p)
            except Exception:
                continue
            uid = str(fm.get("id", "")).strip()
            if not uid:
                continue
            statuses.setdefault(uid, set()).add(str(fm.get("status", "")).strip())
    return statuses


def _unit_statuses(repo: Path) -> dict[str, set[str]]:
    repo = repo.resolve()
    if repo not in _UNIT_STATUS_CACHE:
        _UNIT_STATUS_CACHE[repo] = _scan_statuses([repo / "content"])
    return _UNIT_STATUS_CACHE[repo]


def _content_statuses(repo: Path) -> dict[str, set[str]]:
    repo = repo.resolve()
    if repo not in _CONTENT_STATUS_CACHE:
        _CONTENT_STATUS_CACHE[repo] = _scan_statuses([
            repo / "content",
            repo / "site" / "src" / "content",
        ])
    return _CONTENT_STATUS_CACHE[repo]


def check_references(report: ValidationReport, repo: Path):
    fm = report.frontmatter
    refs = fm.get("references", []) or []
    if not refs:
        report.add("≥1 references entry", False, "list empty")
        return
    report.add("≥1 references entry", True)
    archive = repo / "reference"

    pending_only = True
    failed = []
    for r in refs:
        if not isinstance(r, dict):
            failed.append(f"reference is not a mapping: {r}")
            continue
        if r.get("pending"):
            if not r.get("pointer"):
                failed.append(f"pending reference missing pointer: {r}")
        else:
            pending_only = False
            src = r.get("source", "")
            path = r.get("path", "")
            if src == "TODO_REF":
                # Treat TODO_REF as pending without explicit flag (legacy escape hatch)
                continue
            full = archive / src / path if path and not path.startswith(src + "/") else archive / path
            # Heuristic: try multiple candidates
            candidates = [
                archive / src / path,
                archive / path,
                archive / path.replace("md/", ""),
            ] if path else []
            if not any(c.exists() for c in candidates):
                failed.append(f"unresolved {src}/{path}")
    report.add(
        "every references[] entry resolves OR is pending+pointer",
        not failed,
        detail="\n".join(failed) if failed else "",
    )
    report.add("at least one non-pending reference exists", not pending_only)


def check_lean_status(report: ValidationReport, repo: Path):
    fm = report.frontmatter
    status = fm.get("lean_status")
    module = fm.get("lean_module")
    gap = fm.get("lean_mathlib_gap")
    reviewer = fm.get("human_reviewer")
    tp = set(fm.get("tiers_present", []))
    prefix = unit_prefix(fm)
    formal_gap_required = prefix in {
        "00", "01", "02", "03", "04", "05", "06", "07", "08",
        "09", "10", "11", "12", "13",
        "14", "15", "16", "17", "18", "19",
    } or str(fm.get("id", "")).startswith("20.01.")

    if status == "full":
        ok = bool(module)
        report.add("lean_status: full has lean_module declared", ok,
                   detail="lean_module empty/absent")
        if module:
            modpath = repo / "lean" / (module.replace(".", "/") + ".lean")
            report.add("lean_module file exists at expected path",
                       modpath.exists(),
                       detail=f"expected {modpath.relative_to(repo)}")
    elif status == "partial":
        ok = bool(module)
        report.add("lean_status: partial has lean_module declared", ok)
        if module:
            modpath = repo / "lean" / (module.replace(".", "/") + ".lean")
            report.add("lean_module file exists at expected path",
                       modpath.exists(),
                       detail=f"expected {modpath.relative_to(repo)}")
    elif status == "none":
        report.add("lean_status: none has no lean_module declared",
                   not module,
                   detail=f"unexpected lean_module: {module}")
        min_words = 30 if formal_gap_required else 5
        report.add("lean_status: none has lean/formalization note",
                   bool(gap) and len(str(gap).split()) >= min_words,
                   detail=f"gap/note missing or under {min_words} words")
    else:
        report.add("lean_status is full | partial | none", False,
                   detail=f"got {status!r}")


def check_inline_citations(report: ValidationReport, body: str):
    fm = report.frontmatter
    declared = {(r.get("source") if isinstance(r, dict) else None) for r in (fm.get("references", []) or [])}
    declared.add("TODO_REF")
    cite_re = re.compile(r"\[ref:\s+([\w\-]+)")
    failed = []
    for m in cite_re.finditer(body):
        src = m.group(1)
        if src not in declared:
            failed.append(src)
    report.add(
        "every [ref: …] uses a declared source",
        not failed,
        detail=f"orphan citations: {set(failed)}" if failed else "",
    )


def check_hooks_out(report: ValidationReport, repo: Path):
    hooks = report.frontmatter.get("hooks_out", []) or []
    if not hooks:
        report.add("hooks_out absent or empty is valid", True)
        return
    failed = []
    for idx, hook in enumerate(hooks):
        if not isinstance(hook, dict):
            failed.append(f"hook {idx} is not a mapping")
            continue
        target = str(hook.get("target", ""))
        kind = hook.get("kind")
        why = str(hook.get("why", "")).strip()
        if not (UNIT_ID_RE.match(target) or ESSAY_ID_RE.match(target)):
            failed.append(f"hook {idx} target has invalid id syntax: {target!r}")
        if kind not in {"proposed", "confirmed"}:
            failed.append(f"hook {idx} kind must be proposed|confirmed: {kind!r}")
        if len(why) < 30:
            failed.append(f"hook {idx} why is missing or under 30 chars")
        if kind == "confirmed":
            if not hook.get("confirmed_by"):
                failed.append(f"hook {idx} confirmed hook missing confirmed_by")
            if not _content_with_id_exists(target, repo, shipped_only=True):
                failed.append(f"hook {idx} confirmed target not found as shipped: {target}")
    report.add(
        "hooks_out entries are well-formed",
        not failed,
        detail="\n".join(failed) if failed else "",
    )


def check_prohibited_phrasings(report: ValidationReport, body: str):
    # Strip fenced code blocks before scanning prose: Lean / pseudocode often
    # uses identifiers like `trivial`, `obvious`, etc. which are syntactic
    # rather than rhetorical and shouldn't trigger the phrasing rubric.
    stripped = re.sub(r"```[\s\S]*?```", "", body)
    hits = PROHIBITED_RE.findall(stripped.lower())
    report.add(
        "no prohibited phrasings (obviously/clearly/etc.)",
        not hits,
        detail=f"found: {set(hits[:5])}" if hits else "",
    )


def check_math_delimiter_brittleness(report: ValidationReport, body: str):
    """Catch `$...$-X` patterns: closing `$` immediately followed by `-` and
    a letter. These trip strict KaTeX delimiter parsing. We use
    `nonStandard: true` in the renderer config so they still render, but the
    canonical form is `$...\\text{-X}$` so the suffix lives inside the math.
    Restricted to the literal `$-letter` follow to avoid false positives
    where the regex spans prose between two unrelated math blocks."""
    stripped = re.sub(r"```[\s\S]*?```", "", body)
    stripped = re.sub(r"<[^>]+>", "", stripped)
    # Look for closing `$` immediately followed by `-` then a letter,
    # where the `$` is preceded by a closing-brace or alphanumeric (typical
    # of an actual math-block closer like `}$` or `n)$`).
    brittle = re.findall(r"[\w}\)]\$-[A-Za-z]", stripped)
    report.add(
        "no brittle `$X$-Y` math-delimiter patterns",
        not brittle,
        detail=f"found {len(brittle)} occurrence(s); first: {brittle[0]!r}" if brittle else "",
    )


def check_paragraph_length(report: ValidationReport, body: str):
    paragraphs = re.split(r"\n\n+", body)
    over_250 = []
    for p in paragraphs:
        p = p.strip()
        if p.startswith("#") or p.startswith("---") or "```" in p:
            continue
        wc = len(p.split())
        if wc > 250:
            over_250.append(wc)
    report.add(
        "no paragraph exceeds 250 words",
        not over_250,
        detail=f"oversize paragraphs (word counts): {over_250}" if over_250 else "",
    )


# ---------------------------------------------------------------------------
# Tier-specific checks
# ---------------------------------------------------------------------------

def check_beginner(report: ValidationReport, body: str):
    sections = [(t, s, e) for lvl, t, m, s, e in extract_sections(body)
                if "beginner" in section_tier_set(m)]
    text = "\n".join(body[s:e] for _, s, e in sections)
    if not text.strip():
        return  # already flagged elsewhere

    # Beginner paragraph length. Skip headings, math display blocks, exercise
    # fences, code blocks, tables, images, blockquotes, and HTML structural
    # elements (aside / details / summary / div) — these aren't prose paragraphs.
    def is_prose(p: str) -> bool:
        s = p.strip()
        if not s:
            return False
        if s.startswith("#"):
            return False
        if s.startswith(":::"):  # legacy exercise / callout fence
            return False
        if s.startswith("```"):  # code block
            return False
        if s.startswith("$$") or (s.startswith("$") and "\n" not in s and s.endswith("$")):
            return False  # display math line
        if s.startswith("|") and "|" in s.split("\n", 1)[0]:
            return False  # table row
        if s.startswith("![") or s.startswith(">"):
            return False  # image / blockquote
        if re.match(r"^</?(aside|details|summary|div|figure|figcaption|ol|ul|li|p|table|tr|td|th)\b", s, re.IGNORECASE):
            return False  # raw HTML structural elements (callouts, exercises)
        return True

    paras = [p for p in re.split(r"\n\n+", text) if is_prose(p)]
    over_120 = [len(p.split()) for p in paras if len(p.split()) > 120]
    report.add("Beginner paragraphs ≤ 120 words", not over_120,
               detail=f"oversize: {over_120}" if over_120 else "")

    # No proof language. Exercise answers may use words such as "hence" in
    # ordinary explanations, so remove structured exercise blocks before this
    # prose-style scan.
    proof_text = re.sub(r"<aside[\s\S]*?</aside>", "", text, flags=re.IGNORECASE)
    proof_text = re.sub(r"```[\s\S]*?```", "", proof_text)
    proof_hits = [w for w in BEGINNER_PROOF_LANGUAGE if w in proof_text]
    report.add("Beginner has no proof language", not proof_hits,
               detail=f"found: {proof_hits}" if proof_hits else "")

    # Forbidden formal notation
    forb_hits = BEGINNER_FORBIDDEN_RE.findall(text)
    report.add("Beginner uses no advanced formal notation",
               not forb_hits,
               detail=f"found symbols: {set(forb_hits)}" if forb_hits else "")

    # At least one image / diagram reference. Satisfied by a real image embed
    # (`![…](…)`) OR by a `## Visual [Beginner]` section carrying a genuine
    # diagram — a fenced ASCII diagram or a markdown table. Prose-first units
    # (language, world, applied chem/physics) legitimately use the latter; a
    # real ASCII/table diagram is a stronger visual than a placeholder image
    # tag, so this is accepted for any status, not just drafts.
    has_image = bool(re.search(r"!\[[^\]]*\]\([^)]+\)", text))
    if not has_image:
        h2s = list(re.finditer(r"^##\s+(.+?)(?:\s*\[(\w+\+?)\])?\s*$", body, re.MULTILINE))
        for i, m in enumerate(h2s):
            title = m.group(1).strip().lower()
            marker = m.group(2)
            if "visual" not in title or "beginner" not in section_tier_set(marker):
                continue
            start = m.end()
            end = h2s[i + 1].start() if i + 1 < len(h2s) else len(body)
            section = body[start:end]
            # genuine diagram: a fenced block or a markdown table row
            if "```" in section or re.search(r"^\s*\|.+\|\s*$", section, re.MULTILINE):
                has_image = True
                break
    report.add("Beginner has at least one image/diagram reference", has_image)


def check_intermediate(report: ValidationReport, body: str):
    titles = [t.lower() for _, t, _, _, _ in extract_sections(body)]
    has_def = any("formal definition" in t for t in titles)
    domain = unit_domain(report.frontmatter)
    evidence_terms = INTERMEDIATE_EVIDENCE_KEYWORDS.get(domain, INTERMEDIATE_EVIDENCE_KEYWORDS["math"])
    has_thm = any(any(term in t for term in evidence_terms) for t in titles)
    has_ex = any("exercise" in t for t in titles) or '<aside class="exercise"' in body
    if not has_ex and report.frontmatter.get("status") == "draft":
        has_ex = "<aside data-exercise" in body
    has_lean = any("lean" in t for t in titles)
    report.add("Intermediate has formal definition section", has_def)
    report.add("Intermediate has domain evidence section", has_thm)
    report.add("Intermediate has exercises section", has_ex)
    fm = report.frontmatter
    if fm.get("lean_status") in ("full", "partial"):
        report.add("Intermediate has lean formalization section", has_lean)


def check_master(report: ValidationReport, body: str):
    sections = extract_sections(body)
    master_sections = [(t, s, e) for _, t, m, s, e in sections
                       if "master" in section_tier_set(m)]
    titles = [t.lower() for t, _, _ in master_sections]

    # The three structurally-required Master sections.
    all_titles = [t.lower() for _, t, _, _, _ in sections]
    has_connections = any("connection" in t for t in titles) or (
        unit_domain(report.frontmatter) in {"language", "world", "philosophy"}
        and any("connection" in t for t in all_titles)
    )
    has_history = any(("historical" in t) or ("philosophical" in t) for t in titles)
    has_biblio = any("bibliograph" in t for t in titles)
    report.add("Master has connections section", has_connections)
    report.add("Master has historical/philosophical context section", has_history)
    report.add("Master has bibliography section", has_biblio)

    # "Advanced results" need not be the literal title — the unit needs
    # at least one Master section *beyond* the standard four
    # (connections / history / bibliography / lean formalization) to
    # carry actual mathematical depth.
    standard = {"connection", "historical", "philosophical", "bibliograph", "lean"}
    advanced_count = sum(
        1 for t in titles
        if not any(s in t for s in standard)
    )
    report.add(
        "Master has at least one substantive (non-meta) section",
        advanced_count >= 1,
        detail=f"only meta sections present (count: 0)" if not advanced_count else "",
    )


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def validate(unit_path: Path) -> ValidationReport:
    repo = find_repo_root(unit_path)
    fm, body = parse_unit(unit_path)
    report = ValidationReport(unit_path=unit_path, frontmatter=fm)

    # §0 universal
    check_frontmatter_schema(report)
    check_id_filename_match(report)
    check_tiers_present(report)
    check_concept_catalog_id(report, repo)
    check_section_markers_match_tiers(report, body)
    check_prereqs(report, repo)
    check_references(report, repo)
    check_lean_status(report, repo)
    check_inline_citations(report, body)
    check_hooks_out(report, repo)
    check_prohibited_phrasings(report, body)
    # Math delimiter brittleness check disabled: marked-katex-extension is
    # configured with `nonStandard: true` so `$X$-Y` patterns render
    # correctly. Re-enable if the parser config tightens.
    # check_math_delimiter_brittleness(report, body)
    check_paragraph_length(report, body)

    # Per-tier
    tp = set(fm.get("tiers_present", []))
    if "beginner" in tp:
        check_beginner(report, body)
    if "intermediate" in tp:
        check_intermediate(report, body)
    if "master" in tp:
        check_master(report, body)

    return report


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("unit", type=Path, help="path to the unit's .md file")
    args = ap.parse_args()
    report = validate(args.unit)
    report.emit()
    sys.exit(0 if report.all_passed else 1)


if __name__ == "__main__":
    main()
