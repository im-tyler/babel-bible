"""C2: unit id grammar enforcement (UNIT_ID_RE / ESSAY_ID_RE).

Run: python3 scripts/tests/test_validate_unit.py
"""

from __future__ import annotations

import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

import validate_unit  # noqa: E402


def report_for(fm: dict) -> validate_unit.ValidationReport:
    return validate_unit.ValidationReport(
        unit_path=Path("/tmp/fake.md"), frontmatter=fm)


def run_check(fm: dict) -> bool:
    report = report_for(fm)
    validate_unit.check_id_format(report)
    return report.checks[-1].passed


class IdFormatTest(unittest.TestCase):
    def test_valid_ids_pass(self):
        self.assertTrue(run_check({"id": "00.01.01"}))
        self.assertTrue(run_check({"id": "29.13.02"}))
        self.assertTrue(run_check({"id": "23.essays.08"}))  # essay grammar

    def test_invalid_ids_fail(self):
        self.assertFalse(run_check({"id": "0.1.1"}))
        self.assertFalse(run_check({"id": "abc"}))
        self.assertFalse(run_check({"id": "00.01.01-extra"}))
        self.assertFalse(run_check({"id": "00.01.E1"}))  # exercise ids are
        # not unit ids; they fail the unit grammar (site-only companions)


if __name__ == "__main__":
    unittest.main()
