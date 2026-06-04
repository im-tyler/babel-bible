# Serre — *Complex Semisimple Lie Algebras* (FT 3.12) — Deepening re-audit (Phase 2)

**Verdict: essentially FULLY COVERED.** The first-pass audit
(`plans/fasttrack/serre-complex-semisimple-lie-algebras.md`) was written in the
"reduced-audit" state when `content/07-representation-theory/06-lie-algebraic/`
had only 26 units and estimated ~55% coverage. The corpus has since grown:
**every Priority-1, Priority-2, and Priority-3 unit the audit proposed has been
written and shipped.** Grep-verification against the live corpus shows CSLA's
8-chapter content — including its two signature contributions (CSA conjugacy via
regular elements, and the Serre-relations presentation) — now maps to existing
units. Effective coverage is ~95%+.

**Genuine gaps: 0.** No CSLA theorem or construction lacks a home unit. There is
one corpus-hygiene finding (a duplicate Casimir unit) noted below — it is NOT a
content gap and does not need a new unit.

---

## Genuine gaps (0)

None. Every candidate from the first-pass punch-list (§3) verifies as already
written. See the COVERED trailer for the evidence.

---

## Finding (not a gap): duplicate Casimir-element unit

`07.06.10-casimir-element.md` and `07.06.21-casimir-element.md` are BOTH titled
"Casimir element" and BOTH carry `concept_catalog_id: rep-theory.casimir-element`.
The first-pass audit intended `07.06.10` to be the **Killing form** unit and
`07.06.21` to be Casimir; in production `07.06.10` was instead built as a second
Casimir unit (9898 words) while `07.06.21` is the shorter Casimir (1814 words).
This is a **dedup/relabel task for the maintainer**, not a CSLA coverage gap —
the Casimir element is covered (twice), and the Killing form is covered in
substance inside `07.06.16` (see below). Recommend: relabel `07.06.10` to
`killing-form` (its content already carries the heaviest Killing-form treatment,
32 mentions) or merge the two Casimir units. No new id needed.

---

## COVERED (not gaps) — verified against live corpus

Every row below was the first-pass audit's "Gap" item. All now have a shipped unit.

| CSLA topic (audit §2/§3) | Existing unit | Evidence |
|---|---|---|
| Engel's theorem | **07.06.14** engel-lie-theorem | title "Engel's theorem + Lie's theorem"; Humphreys §3 anchor |
| Lie's theorem (solvable over ℂ) | **07.06.14** engel-lie-theorem | same unit, §4 anchor |
| Killing form (def, ad-invariance, computation) | **07.06.16** cartan-criterion (64 Killing mentions; def via trace of composed adjoints) + heavy use in 07.06.10/17/18 | no standalone "killing-form" title, but def + ad-invariance + sl₂ computation present; CSLA Ch. II bundles Killing form with the criterion, matching this packaging |
| Cartan's criterion for solvability AND semisimplicity | **07.06.16** cartan-criterion-solvability-semisimplicity | full proofs; Cartan 1894 + Killing 1888-90 originator prose |
| Weyl complete-reducibility theorem | **07.06.22** weyl-complete-reducibility | standalone unit, Casimir-element proof |
| Casimir element | **07.06.10** + **07.06.21** casimir-element | both shipped (duplicate — see Finding); C = h²/2+ef+fe for sl₂, scalar n(n+2)/2 |
| Cartan subalgebra: def, existence, conjugacy via regular elements | **07.06.17** cartan-subalgebra | Serre's Zariski-density / connectedness-of-regular-elements conjugacy proof written out (lines 192-194); Serre §III anchor |
| Regular elements; CSA conjugacy (Serre's distinctive proof) | **07.06.17** cartan-subalgebra | "regular elements form a connected dense open subset"; exercise on regular ⇒ semisimple |
| Root-space decomposition g = h ⊕ ⨁ g_α | **07.06.18** root-space-decomposition | standalone unit; Humphreys §8 anchor |
| sl₂-triple per root / root strings | **07.06.18** + **07.06.11** representations-of-sl2 | covered in root-space unit and sl₂ rep unit |
| Root system (abstract, Euclidean) | **07.06.03** root-system | direct correspondent |
| Weyl group | **07.06.04** weyl-group | direct correspondent |
| Simple roots, positive roots, base, chamber | **07.06.03** + **07.06.04** | covered |
| Cartan matrix | **07.06.19** cartan-matrix | standalone unit (a_ij = ⟨α_i,α_j^∨⟩, integer entries, Dynkin link) |
| Dynkin diagram; ADE classification | **07.06.05** dynkin-diagram | direct correspondent |
| Cartan-Weyl classification (A_n…G_2) | **07.04.01** cartan-weyl-classification | cites Serre 1966 by name |
| **Serre relations + Serre's theorem** (signature CSLA content) | **07.06.20** serre-relations-serre-theorem | relations (ad e_i)^{1-A_ij} e_j = 0 written out; "build an entire semisimple Lie algebra from generators and relations"; Serre 1966 originator citation |
| Chevalley basis | **07.06.20** serre-relations (master section) + Kac/Carter anchors | covered as alternative integral form |
| Theorem of the highest weight | **07.03.01** highest-weight-representation | direct correspondent |
| Verma module; L(λ) | **07.06.06** verma-module | direct correspondent |
| Weyl character formula | **07.06.07** weyl-character-formula | direct correspondent |
| Weyl dimension formula | **07.06.08** weyl-dimension-formula | (bonus, beyond CSLA) |
| Levi-Malcev decomposition | **07.06.16** (Theorem 3, full statement + Malcev 1942 conjugacy) + **07.06.22** + **03.03.06** lie-third-theorem | g = r ⋊ s, radical + Levi factor, uniqueness up to conjugacy — all stated |
| Compact real form | **07.04.02** compact-real-form | standalone unit; Weyl 1925-26 anchor |
| Weyl's unitarian trick | **07.04.02** + **07.06.10/22** + **07.04.03** cartan-involution + **07.04.05** real-forms | complex reps ↔ unitary reps of compact form; multiple homes |
| Solvable/nilpotent Lie algebra basics; derived/lower-central series | **03.04.01** lie-algebra + **01.02.05** solvable-nilpotent-jordan-holder + **07.06.14** | covered |
| Universal enveloping algebra (for Casimir/Verma) | **07.06.02** universal-enveloping-algebra | covered |

**Bonus coverage beyond CSLA** (the corpus now exceeds CSLA's scope on the
rep-theory side): `07.06.09` Borel-Weil, `07.06.23` Lie-algebra cohomology /
Whitehead's lemmas, `07.06.24` Hochschild-Serre spectral sequence, the entire
`07.04` symmetric-space strand (real forms, Iwasawa, Bruhat, Harish-Chandra),
and `07.07` compact-Lie strand.

---

## Bottom line

CSLA is **at or above FT-equivalence threshold** in the current corpus. The
first-pass audit's 13-item punch-list is 100% delivered. The only follow-up is
the **maintainer dedup/relabel of the two `rep-theory.casimir-element` units**
(07.06.10 ↔ 07.06.21), which is corpus hygiene, not new content. No new units
recommended.
