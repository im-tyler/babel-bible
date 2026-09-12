"""C2/C3: unit id grammar enforcement; exact concept-catalog membership.

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
        self.assertTrue(run_check({"id": "23.essays.08"}))   # essay grammar
        self.assertTrue(run_check({"id": "00.01.E1"}))       # exercise-pack
        self.assertTrue(run_check({"id": "06.01.E2"}))       # grammar

    def test_invalid_ids_fail(self):
        self.assertFalse(run_check({"id": "0.1.1"}))
        self.assertFalse(run_check({"id": "abc"}))
        self.assertFalse(run_check({"id": "00.01.01-extra"}))
        self.assertFalse(run_check({"id": "00.01.e1"}))  # lowercase E fails
        self.assertFalse(run_check({"id": "00.01.X1"}))


class CatalogMembershipTest(unittest.TestCase):
    CATALOG = """# Catalog

## Format

Describes entries.

### test.concept-one

- **title**: Concept one

### "test.quoted-concept"

- **title**: Quoted concept
"""

    def setUp(self):
        self.root = Path("/tmp/babel-c3-test")
        cat = self.root / "docs" / "catalogs" / "CONCEPT_CATALOG.md"
        cat.parent.mkdir(parents=True, exist_ok=True)
        cat.write_text(self.CATALOG, encoding="utf-8")
        self.addCleanup(lambda: __import__("shutil").rmtree(
            self.root, ignore_errors=True))
        validate_unit._CATALOG_IDS_CACHE.pop(self.root.resolve(), None)

    def _check(self, cid: str) -> bool:
        report = report_for({"concept_catalog_id": cid})
        validate_unit.check_concept_catalog_id(report, self.root)
        return report.checks[-1].passed

    def test_exact_id_passes(self):
        self.assertTrue(self._check("test.concept-one"))

    def test_quoted_heading_id_passes(self):
        self.assertTrue(self._check("test.quoted-concept"))

    def test_prefix_or_truncated_id_fails(self):
        # Substring search used to pass all three of these.
        self.assertFalse(self._check("test.concept"))        # prefix
        self.assertFalse(self._check("concept-one"))         # truncated
        self.assertFalse(self._check("test.concept-one-x"))  # extension

    def test_id_mentioned_only_in_prose_fails(self):
        self.assertFalse(self._check("Format"))


if __name__ == "__main__":
    unittest.main()
