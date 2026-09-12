"""L5/L6: fatal missing lake + --content-only; axiom-aware full gate.

Run: python3 scripts/tests/test_validate_all.py
"""

from __future__ import annotations

import os
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

FULL_FM = {"lean_status": "full", "lean_module": "Codex.Test.TestMod"}


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


class ParseAxiomsOutputTest(unittest.TestCase):
    def test_recorded_samples(self):
        # Real `#print axioms` output formats.
        text = (
            "'Codex.Foo.bar' depends on axioms: [propext, Classical.choice, Quot.sound]\n"
            "'Codex.Foo.baz' does not depend on any axioms\n"
            "'Codex.Foo.qux' depends on axioms: [propext, Classical.choice, Quot.sound, sorryAx]\n"
        )
        self.assertEqual(
            validate_all.parse_axioms_output(text),
            {
                "Codex.Foo.bar": ["propext", "Classical.choice", "Quot.sound"],
                "Codex.Foo.baz": [],
                "Codex.Foo.qux": ["propext", "Classical.choice",
                                   "Quot.sound", "sorryAx"],
            },
        )


class ScanFullModuleDeclsTest(unittest.TestCase):
    def test_namespace_tracking(self):
        src = "\n".join([
            "namespace Codex.Test",
            "private theorem hidden : True := trivial",
            "theorem key_result : True := trivial",
            "lemma aux' : True := trivial",
            "end Codex.Test",
            "example : True := trivial",
        ])
        theorems, axioms = validate_all.scan_full_module_decls(src)
        # private declarations are invisible to an importing probe
        self.assertEqual(theorems, ["Codex.Test.key_result",
                                    "Codex.Test.aux'"])
        self.assertEqual(axioms, [])

    def test_axiom_decls_detected(self):
        src = "\n".join([
            "namespace Codex.Test",
            "axiom bogus : False",
            "theorem primary : False := bogus",
            "end Codex.Test",
        ])
        theorems, axioms = validate_all.scan_full_module_decls(src)
        self.assertEqual(theorems, ["Codex.Test.primary"])
        self.assertEqual(axioms, ["Codex.Test.bogus"])

    def test_example_only_module_has_no_named_theorems(self):
        src = "example : True := trivial\n"
        theorems, axioms = validate_all.scan_full_module_decls(src)
        self.assertEqual((theorems, axioms), ([], []))


class AxiomGateTest(unittest.TestCase):
    """End-to-end gate tests against the stub lake/lean toolchain."""

    def setUp(self):
        self.root = fixtures.build_mini_repo()
        self.addCleanup(shutil.rmtree, self.root, ignore_errors=True)
        self.module_path = self.root / "lean" / "Codex" / "Test" / "TestMod.lean"

    def _run(self, axioms_by_name, fm=None):
        bin_dir = self.root / "stubbin"
        fixtures.write_stub_toolchain(bin_dir, axioms_by_name)
        env = {**os.environ,
               "PATH": f"{bin_dir}{os.pathsep}{os.environ['PATH']}"}
        with mock.patch.dict(os.environ, env):
            return validate_all.check_lean_contract(
                self.root, [("content/00-test/01-ch/00.01.01-test-concept.md",
                             fm or dict(FULL_FM))])

    def test_foundational_axioms_pass(self):
        problems = self._run({})
        self.assertEqual(problems, [])

    def test_custom_axiom_in_module_fails(self):
        self.module_path.write_text(
            "namespace Codex.Test\n"
            "axiom bogus : False\n"
            "theorem key_result : False := bogus\n"
            "end Codex.Test\n", encoding="utf-8")
        problems = self._run({"Codex.Test.key_result": ["bogus"]})
        self.assertTrue(any("declares axiom(s): Codex.Test.bogus" in p
                            for p in problems), problems)
        self.assertTrue(any("non-allowlisted" in p and "bogus" in p
                            for p in problems), problems)

    def test_project_allowlist_admits_custom_axiom(self):
        self.module_path.write_text(
            "namespace Codex.Test\n"
            "axiom bogus : False\n"
            "theorem key_result : False := bogus\n"
            "end Codex.Test\n", encoding="utf-8")
        (self.root / "lean" / "AXIOM_ALLOWLIST.txt").write_text(
            "Codex.Test.bogus  # admitted for the test\n", encoding="utf-8")
        problems = self._run({"Codex.Test.key_result": ["Codex.Test.bogus"]})
        self.assertEqual(problems, [])

    def test_transitive_sorry_fails(self):
        # key_result invokes an imported (partial-unit) theorem proved
        # with sorry: the probe reports sorryAx in its axiom dependencies.
        problems = self._run({"Codex.Test.key_result":
                              ["propext", "sorryAx"]})
        self.assertTrue(any("sorryAx" in p for p in problems), problems)

    def test_no_named_theorem_fails_closed(self):
        self.module_path.write_text(
            "namespace Codex.Test\n"
            "example : True := trivial\n"
            "end Codex.Test\n", encoding="utf-8")
        problems = self._run({})
        self.assertTrue(any("no named theorem/lemma" in p and
                            "lean_theorem" in p for p in problems), problems)

    def test_lean_theorem_frontmatter_narrows_probe(self):
        self.module_path.write_text(
            "namespace Codex.Test\n"
            "theorem key_result : True := trivial\n"
            "theorem other : True := trivial\n"
            "end Codex.Test\n", encoding="utf-8")
        fm = dict(FULL_FM, lean_theorem="Codex.Test.other")
        # key_result would report sorryAx if probed; only `other` is probed.
        problems = self._run({"Codex.Test.key_result": ["sorryAx"]}, fm=fm)
        self.assertEqual(problems, [])


if __name__ == "__main__":
    unittest.main()
