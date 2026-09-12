"""Shared fixture builders for the scripts/tests/ suite.

Builds a minimal hermetic "mini repo" (its own OVERVIEW.md root, catalog,
content unit, and lean/ tree) in a temp directory so validate_all /
validate_unit can be exercised end-to-end without touching the real corpus.
"""

from __future__ import annotations

import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent.parent
SCRIPTS_DIR = REPO_ROOT / "scripts"

UNIT_MD = """---
id: 00.01.01
title: Test concept
slug: test-concept
section: test
chapter: test-chapter
concept_catalog_id: test.concept-one
prerequisites: []
tier_anchors:
  beginner: "Some Book Ch. 1"
  intermediate: "Some Book Ch. 2"
  master: "Some Book Ch. 3"
tiers_present: [beginner, intermediate, master]
references:
  - source: TODO_REF
    path: "Some Book"
    locator: "Ch. 1"
lean_module: Codex.Test.TestMod
lean_status: partial
estimated_time:
  beginner: 10m
  intermediate: 20m
  master: 30m
status: shipped
---

## Intuition [Beginner]

A gentle visual introduction to the test concept.

## Visual [Beginner]

```
+--------+        +--------+
|  idea  |  --->  | result |
+--------+        +--------+
```

## Formal definition [Intermediate+]

We define the concept precisely.

## Key theorem [Intermediate+]

The key result holds for the concept.

## Exercises [Intermediate+]

1. Verify the key result in a small case.

## Lean formalization [Intermediate+]

The companion Lean module states the key result.

## Advanced results [Master]

Deeper structure of the concept.

## Connections [Master]

Links to neighboring concepts.

## Historical context [Master]

Origins of the concept.

## Bibliography [Master]

- Some Book, Ch. 1-3.
"""

CATALOG_MD = """# Catalog

## Format

Describes the entry format.

### test.concept-one

- **title**: Test concept
- **prerequisites**: none
- **notes**: fixture entry.
"""

TESTMOD_LEAN = """import Mathlib.Tactic

namespace Codex.Test

theorem key_result : True := trivial

end Codex.Test
"""


def build_mini_repo(include_unit: bool = True) -> Path:
    """Materialize a hermetic mini repo in a fresh temp dir and return its root."""
    tmp = Path(tempfile.mkdtemp(prefix="babel-tests-"))
    (tmp / "OVERVIEW.md").write_text("# mini\n", encoding="utf-8")
    scripts_dst = tmp / "scripts"
    scripts_dst.mkdir()
    for py in SCRIPTS_DIR.glob("*.py"):
        shutil.copy(py, scripts_dst / py.name)
    (tmp / "docs" / "catalogs").mkdir(parents=True)
    (tmp / "docs" / "catalogs" / "CONCEPT_CATALOG.md").write_text(
        CATALOG_MD, encoding="utf-8")
    (tmp / "manifests").mkdir()
    (tmp / "manifests" / "deps.json").write_text("{}", encoding="utf-8")
    (tmp / "lean" / "Codex" / "Test").mkdir(parents=True)
    (tmp / "lean" / "Codex" / "Test" / "TestMod.lean").write_text(
        TESTMOD_LEAN, encoding="utf-8")
    (tmp / "lean" / "Codex.lean").write_text(
        "import Codex.Test.TestMod\n", encoding="utf-8")
    (tmp / "lean" / "AXIOM_ALLOWLIST.txt").write_text(
        "# Extra axioms admitted in #print axioms output for full units.\n"
        "# One name per line; foundational axioms (propext, Classical.choice,\n"
        "# Quot.sound) are always allowed and need not be listed here.\n",
        encoding="utf-8")
    if include_unit:
        unit_dir = tmp / "content" / "00-test" / "01-ch"
        unit_dir.mkdir(parents=True)
        (unit_dir / "00.01.01-test-concept.md").write_text(
            UNIT_MD, encoding="utf-8")
    return tmp


def run_validate_all(root: Path, *args: str, path: str | None = None):
    """Run the real validate_all.py against `root` as a subprocess."""
    env_extra = {"PATH": path} if path is not None else {}
    import os
    env = {**os.environ, **env_extra}
    return subprocess.run(
        [sys.executable, str(SCRIPTS_DIR / "validate_all.py"),
         "--root", str(root), *args],
        capture_output=True, text=True, env=env, timeout=300,
    )


def write_stub_toolchain(bin_dir: Path, axioms_by_name: dict[str, list[str]]):
    """Create stub `lake` / `lean` executables.

    `lake build` exits 0. `lake env lean <file>` scans the probe file for
    `#print axioms <name>` lines and answers each from `axioms_by_name`
    (names absent from the map report the three foundational axioms).
    """
    bin_dir.mkdir(parents=True, exist_ok=True)
    mapper = bin_dir / "axiom_map.tsv"
    mapper.write_text(
        "\n".join(f"{k}\t{','.join(v)}" for k, v in axioms_by_name.items())
        + "\n", encoding="utf-8")
    lean_stub = bin_dir / "lean"
    lean_stub.write_text(
        "#!/usr/bin/env python3\n"
        "import pathlib, sys\n"
        "probe = pathlib.Path(sys.argv[-1])\n"
        "amap = {}\n"
        "mapfile = pathlib.Path(__file__).resolve().parent / 'axiom_map.tsv'\n"
        "if mapfile.exists():\n"
        "    for ln in mapfile.read_text(encoding='utf-8').splitlines():\n"
        "        if '\\t' in ln:\n"
        "            k, v = ln.split('\\t', 1)\n"
        "            amap[k] = v\n"
        "for line in probe.read_text(encoding='utf-8').splitlines():\n"
        "    line = line.strip()\n"
        "    if line.startswith('#print axioms '):\n"
        "        name = line[len('#print axioms '):].strip()\n"
        "        v = amap.get(name, 'propext, Classical.choice, Quot.sound')\n"
        "        if v == 'NONE':\n"
        "            print(f\"'{name}' does not depend on any axioms\")\n"
        "        else:\n"
        "            print(f\"'{name}' depends on axioms: [{v}]\")\n"
        "sys.exit(0)\n",
        encoding="utf-8")
    lean_stub.chmod(0o755)
    lake_stub = bin_dir / "lake"
    lake_stub.write_text(
        "#!/bin/sh\n"
        "if [ \"$1\" = \"build\" ]; then exit 0; fi\n"
        "if [ \"$1\" = \"env\" ] && [ \"$2\" = \"lean\" ]; then\n"
        "  shift 2\n"
        "  exec \"$(dirname \"$0\")/lean\" \"$@\"\n"
        "fi\n"
        "exit 0\n",
        encoding="utf-8")
    lake_stub.chmod(0o755)
