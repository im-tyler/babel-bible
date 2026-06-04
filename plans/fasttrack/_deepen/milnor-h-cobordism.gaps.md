# Milnor, *Lectures on the h-Cobordism Theorem* (FT 3.07) — Deepening gap pass

**Slug:** `milnor-h-cobordism`
**Date:** 2026-06-04

## Headline

The first-pass audit (`plans/fasttrack/milnor-h-cobordism.md`) measured
the corpus at ~5–10% coverage and laid out a 14-item punch-list
(`03.02.20`–`03.02.28`, `03.08.20`, plus the reserved Morse-core block
and several enrich edits). **Almost the entire punch-list has since
shipped.** Verified against the live corpus, every load-bearing unit the
audit asked for now exists at LHC-equivalent depth:

- **`03.02.20`** handles, surgery, and the cobordism category (LHC §§1–2)
- **`03.02.21`** rearrangement and self-indexing Morse functions (§3)
- **`03.02.22`** the Whitney trick and handle cancellation (§§4–6) — with
  the first cancellation theorem, the Whitney lemma, and the strong
  cancellation theorem at intersection number $\pm 1$
- **`03.02.23`** the h-cobordism theorem (§§6–8) — full proof: acyclic
  Morse–Smale complex reduced to zero by handle slides + strong
  cancellation; the algebraic basis/cancellation proposition; the
  $s$-cobordism / Whitehead-torsion refinement woven in as Master
- **`03.02.24`** the generalised Poincaré conjecture in high dimensions (§8)
- **`03.02.27`** Levi-Civita / exponential map / gradient-like fields on a
  cobordism (audit item 8; isotopy-extension + tubular-uniqueness applied)
- **`03.02.28`** pointer: surgery theory and the surgery exact sequence (item 13)
- **`03.02.30`** Morse functions, Morse lemma, index (the reserved Morse core)
- **`03.02.31`** handle attachment, CW type, Morse inequalities (Morse core)
- **`03.08.20`** Whitehead torsion and the s-cobordism theorem (item 10) —
  closes the algebraic-$K_1$ / simple-homotopy corpus hole the audit flagged
- the abstract Morse-homology machinery (`03.15.01`–`03.15.09`) supplies
  the Morse–Smale chain-complex / basis-theorem layer in full generality.

The handle calculus, the Whitney trick, the title theorem, its proof, the
generalised Poincaré corollary, and the Whitehead-torsion refinement are
all anchored. After grepping every topic in the book against `content/`,
**zero genuine gaps remain.** This is a valid fully-covered result.

---

## GENUINE GAPS (0)

None. LHC is covered to the equivalence threshold. The handle/cobordism
block (`03.02.20`–`03.02.24`), its Morse-core prerequisites
(`03.02.30`–`03.02.31`, `03.02.27`), the Morse-Smale homology machinery
(`03.15.*`), and the s-cobordism refinement (`03.08.20`) jointly cover
every theorem, the proof, and the applications.

---

## COVERED (not gaps) — due-diligence evidence

| LHC topic (§) | Verdict | Existing unit(s) | Grep evidence |
|---|---|---|---|
| Cobordism $(W;V_0,V_1)$, Morse function on a cobordism, one handle per critical point (§1) | COVERED | `03.02.20` (with existence proof, §Factorisation), `03.02.30`, `03.02.31` | `grep -liE "cobordism category\|morse function.*cobordism" content/` → `03.02.20` |
| Handle $D^\lambda\times D^{n-\lambda}$; core, cocore, attaching/belt sphere; surgery on a level set (§2) | COVERED | `03.02.20` (def + surgery $\chi(V,\varphi)$), `03.02.31` | belt/attaching sphere + tubular-nbhd surgery in `03.02.20` body |
| Gradient-like vector field; ascending/descending spheres (§2) | COVERED | `03.02.20`, `03.02.27` (gradient-like fields on a cobordism, dedicated unit) | `concept_catalog_id: differential-topology.gradient-like-vector-field` (`03.02.27`) |
| Rearrangement; self-indexing Morse function (§3) | COVERED | `03.02.21` (Theorems 4.1, 4.8 anchors; reorder-when-spheres-miss criterion) | `grep -liE "self-indexing\|rearrang" content/` → `03.02.21` |
| Morse–Smale chain complex; $H_*(W,V_0)$; boundary by intersection numbers (§3/§6) | COVERED | `03.02.21` (Master), `03.15.06` (the Morse complex, $\partial^2=0$), `03.02.31` | `grep -liE "morse.?smale\|morse complex" content/` |
| First cancellation theorem (single transverse point) (§4) | COVERED | `03.02.22` (First Cancellation Theorem 5.4 anchor; single-trajectory product proposition) | line 264 Proposition in `03.02.22` |
| Whitney trick; embedded Whitney disc; simple connectivity buys embeddability (§5) | COVERED | `03.02.22` (Whitney Lemma 6.6; Whitney 1944 originator) | `grep -liE "whitney trick" content/` → `03.02.22` |
| Strong cancellation at intersection number $\pm 1$ (§5) | COVERED | `03.02.22` (Bridge: algebraic $\pm1$ → single geometric point → cancel) | line 168 Bridge in `03.02.22` |
| Cancellation in middle dimensions; acyclic complex reduced to nothing (§6) | COVERED | `03.02.23` (Step 2 + the acyclic-free-complex proposition + proof) | lines 163, 255–259 in `03.02.23` |
| Handle slides / Smale moves (change of basis on the complex) (§6) | COVERED | `03.02.23` (handle slides as elementary row/col ops; diffeo-type unchanged) | `grep -liE "handle slide" content/` → `03.02.23` |
| Elimination of low/high handles by connectivity (§7) | COVERED | `03.02.23`, `03.02.22`, `03.02.24` | handle-trading/connectivity prose across the block |
| Basis theorem / algebraic cancellation of an acyclic free complex (§7) | COVERED | `03.02.23` (Proposition: acyclic free $\mathbb{Z}$-complex cancels to zero by elementary moves, Smith-normal-form proof) | line 255 in `03.02.23` |
| **h-cobordism theorem** statement + proof (§8) | COVERED | `03.02.23` (the anchor unit; Smale 1962 originator) | `concept_catalog_id: differential-topology.h-cobordism-theorem` |
| Generalised Poincaré conjecture $n\ge5$ (§8) | COVERED | `03.02.24` (Smale 1961 originator; $S^n$-minus-two-discs argument; $n=3,4$ contrast) | `grep -liE "generalised poincar" content/` → `03.02.24` |
| Exotic 7-spheres are homeomorphic (not diffeo) to $S^7$ via h-cobordism (§8) | COVERED | `03.06.17` (consumer; now backed by the `03.02.23` anchor) | citation now in-corpus |
| **s-cobordism theorem; Whitehead torsion $\tau\in\mathrm{Wh}(\pi_1)$** (refinement) | COVERED | `03.08.20` (dedicated unit; $\mathrm{Wh}(\pi)=K_1(\mathbb{Z}\pi)/(\pm\pi)$, BMS s-cobordism, $\mathrm{Wh}(1)=0$); summarised in `03.02.23` Master | `grep -liE "s-cobordism\|whitehead torsion" content/` → `03.08.20`, `03.02.23`, `03.02.28`, `03.02.22` |
| Surgery theory as downstream programme (Wall, Browder) | COVERED (pointer) | `03.02.28` (surgery exact sequence pointer; Wall/Browder/Ranicki anchors) | `concept_catalog_id: differential-topology.surgery-exact-sequence` |
| Worked example: cancelling $\lambda/(\lambda{+}1)$ pair, single-trajectory product, trivial cobordism (§§2–4) | COVERED | `03.02.22` (Worked example [Beginner] + cancelling-pair Proposition), `03.02.23` | line 87 + line 264 in `03.02.22` |
| Transversality / Sard / tubular neighbourhoods / isotopy extension (shared prereq, audit item 7) | COVERED (distributed) | `03.02.30` (Sard genericity + Thom transversality, proved), `03.02.20` (relative Sard for Morse-function existence; tubular-nbhd surgery), `03.02.27` (isotopy extension theorem + tubular-nbhd uniqueness applied) | `grep -niE "sard\|transversal\|tubular\|isotopy extension"` hits all three |

### Conservative calls (checked, deliberately NOT proposed)

- **Standalone Guillemin–Pollack transversality unit** (the audit's
  unrealised item 7 slot `03.02.26`, since reassigned to harmonic maps).
  Every component — Sard's theorem, Thom transversality, the tubular
  neighbourhood theorem, the isotopy extension theorem — is **stated and
  used at the depth LHC requires**, distributed across `03.02.30`,
  `03.02.20`, and `03.02.27`. A dedicated unit would be a marginal
  reorganisation, not a missing theorem; per the brief's "default to
  COVERED if a near-equivalent exists" rule, this is not a genuine gap.
- **Standalone worked-handle-calculus unit** (audit item 6). The canonical
  LHC computations (the cancelling pair across a single transverse
  trajectory giving a product; the trivial cobordism) are embedded as a
  Beginner worked example and a stated-and-proved Proposition in
  `03.02.22`. Promoting them to a separate unit would add no theorem.
- **`03.06.17` citation repointing** (audit items 11–12, enrich edits, not
  gaps). The h-cobordism anchor `03.02.23` now exists; whether the
  `TODO_REF Smale 1962` strings in `03.06.17` / `03.02.01` have been
  reflowed is a weaving-pass bookkeeping item, not a content gap.

---

## Counts

- **Genuine gaps:** 0
- **COVERED-verified topics:** 19 (table) + 3 conservative calls
- **Gap file:** `plans/fasttrack/_deepen/milnor-h-cobordism.gaps.md`
