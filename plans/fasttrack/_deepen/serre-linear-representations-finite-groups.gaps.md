# Serre, *Linear Representations of Finite Groups* (FT 3.15) — Deepening gap file

**SLUG:** `serre-linear-representations-finite-groups`
**Deepened:** 2026-06-02 against the live `07-representation-theory/` corpus.

## Summary

The original audit (`plans/fasttrack/serre-linear-representations-finite-groups.md`)
was written when `07-representation-theory/` had **26 shipped units** and estimated
**~55% coverage**, proposing ~8 new units across its Priority-1/2 lists. The chapter
has since grown to **70+ units**, and **nearly every Priority-1/2 unit the audit
proposed now exists and is deep**. After heavy verification, almost all of Serre
Parts I, II, and III are COVERED. Only **2 genuine gaps** remain, both real Serre LRFG
content with zero corpus coverage.

The audit's flagship structural gaps are all resolved:
- Modular setup / $p$-modular triple $(K,\mathcal{O},k)$, Maschke failure, reduction
  mod $p$ — COVERED in `07.02.03` (the audit's proposed `07.02.02` anchor is
  subsumed; no separate anchor unit needed).
- cde-triangle, decomposition matrix $D$, Cartan matrix $C=D^tD$, $\det C$ a power
  of $p$ — `07.02.03`.
- Brauer characters (Teichmüller lift, $p$-regular classes, orthogonality, basis
  count) — `07.02.04`.
- Block theory, defect groups, Brauer main theorems — `07.02.06`.
- Artin induction (incl. Artin $L$-functions) — `07.01.10`.
- Brauer induction — `07.01.11`.
- Frobenius–Schur indicator (real/quaternionic/complex, $Q_8$) — `07.01.12`.
- Mackey decomposition formula + Mackey irreducibility criterion — `07.01.07`
  (Ex. 6 + line 410) and full theorem in `07.07.07` (line 445, with the explicit
  finite-group ancestor formula).

---

## GENUINE GAPS (2)

### Gap 1 — `07.01.13` Irreducible representations of $GL_2(\mathbb{F}_q)$

- **id:** `07.01.13` (free; `07.01.09`–`07.01.12` occupied, `07.01.13` unused)
- **title:** Irreducible representations of $GL_2(\mathbb{F}_q)$
- **spec:** Construct and tabulate the irreducible characters of $GL_2(\mathbb{F}_q)$
  via induction from the Borel (principal series, characters $\alpha\otimes\beta$),
  the twists of the Steinberg, and the cuspidal/discrete-series representations
  parametrised by characters of the non-split torus $\mathbb{F}_{q^2}^\times$ — Serre
  LRFG §5.2 / Ch. 8's flagship worked example.
- **prereqs:** `07.01.07` (induced representation), `07.01.08` (Frobenius reciprocity),
  `07.01.04` (character orthogonality), `21.02.01` (finite fields $\mathbb{F}_q$).
- **chapter dir:** `content/07-representation-theory/01-foundations/`
- **frontmatter:** `section: representation-theory`, `chapter: foundations`
- **why genuine:** the only `GL_2(\mathbb{F}_q)` hits in the corpus are
  infinite-dimensional/Lie-group "principal series" in `07.04.12` (spherical functions
  on symmetric spaces) and `07.07.09` (Lorentz group $SL_2(\mathbb{C})$ Naimark
  series) — neither is the finite-group character table. No `deligne-lusztig`,
  `cuspidal`, or `discrete series` unit exists for finite groups of Lie type. This is
  Serre's single most substantial Part-II worked example and is fully absent.

### Gap 2 — `07.02.02` Fong–Swan theorem (lifting modular irreducibles for $p$-solvable groups)

- **id:** `07.02.02` (free; `07.02.01`, `07.02.03`, `07.02.04`, `07.02.06` occupied)
- **title:** The Fong–Swan theorem
- **spec:** For a $p$-solvable finite group $G$, every irreducible
  $\overline{\mathbb{F}_p}G$-module is liftable: its Brauer character is the
  restriction to $p$-regular elements of an ordinary irreducible character — Serre
  LRFG §16.3. State, prove the $\Phi$-lifting via the Clifford-theory / induction
  argument, and give the consequence that the decomposition matrix of a $p$-solvable
  group has a square unitriangular shape with each modular irreducible lifting.
- **prereqs:** `07.02.04` (Brauer character), `07.02.03` (cde-triangle / decomposition
  map), `01.02.05` (solvable/nilpotent groups).
- **chapter dir:** `content/07-representation-theory/02-character/`
- **frontmatter:** `section: representation-theory`, `chapter: character`
- **why genuine:** zero corpus hits for `fong-swan`/`fong swan`. The original audit
  itself flagged Fong–Swan only as a deferred Master-tier pointer inside `07.02.04`,
  but `07.02.04` never absorbed it (grep of `07.02.04` body: no Fong–Swan, no
  $p$-solvable lifting theorem). It is a named Serre LRFG theorem and the natural
  bridge from the now-shipped modular units to the $p$-solvable case. *Lower priority
  than Gap 1; could alternatively be a Master-tier extension of `07.02.04` rather than
  a standalone unit — proposed as `07.02.02` because the slot is free and the theorem
  carries a full proof.*

---

## COVERED (not gaps) — due-diligence evidence

| Serre LRFG topic | Existing unit(s) | Evidence |
|---|---|---|
| Group representation, sub/quotient, equivalence | `07.01.01` | anchor unit |
| Maschke / complete reducibility (char 0) + semisimplicity of $kG$ | `07.02.01` | Maschke theorem unit, Artin–Wedderburn |
| Schur's lemma | `07.01.02` | anchor unit |
| Character of a representation; Frobenius 1896 | `07.01.03` | anchor unit |
| Character orthogonality (1st & 2nd relations) | `07.01.04` | full Schur-lemma proofs |
| Number of irreducibles = number of conjugacy classes | `07.01.04` (l.122, l.445) | stated + worked ($S_4$) |
| Canonical/isotypic decomposition, projector formula | `07.01.05`, `07.01.01` | covered |
| Regular representation; Artin–Wedderburn | `07.01.05` | anchor unit |
| Tensor product of representations; $\mathrm{Sym}^2,\Lambda^2$ | `07.01.06` | anchor unit |
| Induced representation $\mathrm{Ind}_H^G$ | `07.01.07` | anchor unit; cites Serre §7 |
| Frobenius reciprocity | `07.01.08` | categorical + character forms |
| Induction in stages / transitivity of induction | `07.01.07` (Ex. 2), `07.07.07` (l.397, proved) | covered |
| Mackey decomposition formula ($\mathrm{Res}_K\mathrm{Ind}_H^G$ over double cosets) | `07.01.07` (Ex. 6, l.325), `07.07.07` (l.447) | full statement + proof sketch |
| **Mackey irreducibility criterion** | `07.01.07` (l.410), `07.07.07` (l.445) | full theorem, both finite & locally compact |
| Mackey projection formula | `07.01.07` (l.420) | covered |
| **Artin's induction theorem** + Artin $L$-functions | `07.01.10` | anchor unit, Artin 1931 originator prose |
| **Brauer's induction theorem** (elementary subgroups) | `07.01.11` | anchor unit |
| **Frobenius–Schur indicator** (real/quaternionic/complex; $Q_8$) | `07.01.12` | anchor unit, FS-indicator formula |
| Schur index / rationality / splitting fields | `07.02.01` (l.411), `07.01.12` (l.392) | Master-tier, Brauer–Speiser |
| Burnside $p^aq^b$ solvability | `07.01.03` (l.407), `07.01.01`, `01.02.04`, `01.02.05` | stated (note: not actually a Serre LRFG theorem) |
| **Modular setup / $p$-modular triple $(K,\mathcal{O},k)$**, Maschke failure, reduction mod $p$, lattices, projective covers | `07.02.03` (l.188–234) | full "$p$-modular system" definition — subsumes audit's proposed `07.02.02` anchor |
| **Grothendieck groups $R_K,R_k,P_k$ + cde-triangle** | `07.02.03` | anchor unit, $c=d\circ e$ proved |
| **Decomposition map $d$ / decomposition matrix $D$** | `07.02.03` (l.216), `07.02.04` (l.432) | constructed |
| **Cartan map $c$ / Cartan matrix $C=D^tD$**, $\det C$ a power of $p$ | `07.02.03` | covered |
| **Brauer characters** (Teichmüller lift, $p$-regular, orthogonality, basis) | `07.02.04` | anchor unit |
| **Blocks of $kG$, defect groups, Brauer main theorems** | `07.02.06` | anchor unit ($A_5$, $p=2$ worked) |
| Small-group character tables ($A_4$, $S_4$, $D_4$, $Q_8$, $A_5$) | `07.01.03` (l.210, 378), `07.01.04` (l.122), `07.01.12` (l.262, 338), `07.02.06` (l.342), `07.01.10` (l.298) | scattered as worked examples/exercises across foundations units; consolidated table pack remains optional/pedagogical, not a structural gap |
| Mackey theory for locally compact groups / imprimitivity | `07.07.07` | full unit |
| $S_n$ representations via Young symmetrisers / Specht modules | `07.05.01`–`07.05.03` | covered |

**Notes on near-misses deliberately NOT proposed as gaps:**
- *Worked character-table pack ($A_4,S_4,A_5,Q_8$).* The audit floated `07.02.E1`.
  Every one of these tables already appears as a worked example or exercise across
  `07.01.03/04/12`, `07.02.06`, `07.01.10`. A consolidated pack is pedagogical polish,
  not a missing theorem — excluded per the "no marginal units" guidance.
- *Group of a product $\widehat{G\times H}=\widehat G\otimes\widehat H$ (Serre §3.2).*
  Not explicitly stated in `07.01.06`, but it is a one-line corollary of orthogonality
  already covered; a Master-tier sentence, not a unit. Excluded.
- *Audit's proposed `07.02.02 modular-representation` anchor.* Subsumed — its content
  ($p$-modular triple, Maschke failure, $KG/\mathcal{O}G/kG$, lift & reduce) is the
  opening of `07.02.03`. The freed `07.02.02` slot is reassigned above to Fong–Swan.

---

## Counts

- **Genuine gaps:** 2 (`07.01.13` $GL_2(\mathbb{F}_q)$; `07.02.02` Fong–Swan)
- **COVERED-verified topics:** 26 (table) + 3 near-miss exclusions
