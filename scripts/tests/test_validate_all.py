"""L5: missing lake is fatal in normal mode; --content-only is explicit.

Run: python3 scripts/tests/test_validate_all.py
"""

from __future__ import annotations

import shutil
import sys
import unittest
from pathlib import Path
from unittest import mock

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

import fixtures  # noqa: E402
import validate_all  # noqa: E402

CONTENT_ONLY_MSG = "Content validation passed (content-only; Lean NOT checked)."


class LakeAbsentIsFatalTest(unittest.TestCase):
    def test_check_lean_contract_fatal_without_lake(self):
        root = fixtures.build_mini_repo()
        self.addCleanup(shutil.rmtree, root, ignore_errors=True)
        with mock.patch("shutil.which", return_value=None):
            problems = validate_all.check_lean_contract(
                root, [("content/00-test/01-ch/00.01.01-test-concept.md",
                        {"lean_status": "partial",
                         "lean_module": "Codex.Test.TestMod"})])
        self.assertEqual(len(problems), 1)
        self.assertIn("no lake toolchain on PATH", problems[0])
        self.assertIn("fatal", problems[0])


class EndToEndExitCodesTest(unittest.TestCase):
    def setUp(self):
        self.root = fixtures.build_mini_repo()
        self.addCleanup(shutil.rmtree, self.root, ignore_errors=True)

    def test_normal_mode_fails_without_lake(self):
        proc = fixtures.run_validate_all(self.root, path="/usr/bin:/bin")
        self.assertNotEqual(proc.returncode, 0)
        if shutil.which("lake") is None:
            self.assertIn("no lake toolchain on PATH",
                          proc.stdout + proc.stderr)
            self.assertNotIn("Ready to ship.", proc.stdout)

    def test_content_only_passes_with_distinct_message(self):
        proc = fixtures.run_validate_all(self.root, "--content-only",
                                         path="/usr/bin:/bin")
        self.assertEqual(proc.returncode, 0, proc.stdout + proc.stderr)
        self.assertIn(CONTENT_ONLY_MSG, proc.stdout)
        self.assertNotIn("Ready to ship.", proc.stdout)


if __name__ == "__main__":
    unittest.main()
