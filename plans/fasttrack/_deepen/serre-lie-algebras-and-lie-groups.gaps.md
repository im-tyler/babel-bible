# Serre — *Lie Algebras and Lie Groups* (FT 3.13) — Deepening gap file (Phase 2)

**Re-audit verdict (current corpus, 1414 units).** SLALG is now effectively
fully covered. An earlier version of this gap file (corpus ≈1319 units) listed
4 genuine gaps — free Lie algebra, the BCH formula as a dedicated theorem,
Lie-algebra cohomology + Whitehead's lemmas, and the Hochschild-Serre spectral
sequence. **All four of those have since been produced** as
`07.06.13`, `07.06.15`, `07.06.23`, `07.06.24` and are verified present below.
Combined with the previously-confirmed Part II arc (formal groups, p-adic Lie
groups, Lazard, Lie's three theorems) and the Part I prereqs (Engel/Lie,
Cartan criterion, PBW, Weyl reducibility), the book is at FT-equivalence
coverage.

**Genuine gaps: 0. Optional/marginal: 1. COVERED-verified topics: 20.**

---

## GENUINE GAPS

None. Every theorem, construction, and major worked computation in SLALG maps
to a shipped unit (see COVERED trailer). The first-pass audit's
~15%-coverage estimate is stale and the original 14-item punch-list is closed.

## OPTIONAL / MARGINAL (does NOT meet the genuine-gap bar)

- **`07.06.E1` — Lie-algebra cohomology exercise pack.**
  spec: worked pack — $H^*(\mathfrak{sl}_2,\mathbb C)$, $H^*$(Heisenberg) via
  the Hochschild-Serre SS, $H^*$(abelian) $=$ exterior algebra. prereqs:
  `07.06.23`, `07.06.24` (both present). chapter dir
  `content/07-representation-theory/06-lie-algebraic/`;
  `section: representation-theory`, `chapter: lie-algebraic`. `07.06.E1` is a
  free slot (no E-pack currently in the chapter).
  **Why marginal, not a gap:** all three computations already appear as worked
  examples *inside* `07.06.23` (sl_2; abelian/exterior — 11 hits) and `07.06.24`
  (Heisenberg via the SS), and both units carry their own exercise blocks. A
  standalone pack would re-state shipped content. Logged for completeness per
  the brief; no production recommended.

---

## COVERED (not gaps) — verified with id evidence against live `content/`

Part I core (Serre's signature material — previously the 4 open gaps, now shipped):

| SLALG topic | Covered by | Evidence |
|---|---|---|
| **Free Lie algebra, Hall basis, Magnus, primitive elements, Friedrichs** | `07.06.13` free-lie-algebras-hall-basis-and-magnus-theorem | title; 21 body hits on friedrichs/primitive/comultiplication/Hopf |
| **Campbell-Baker-Hausdorff formula (universal series, convergence, Dynkin form)** | `07.06.15` the-campbell-baker-hausdorff-formula | dedicated unit; Dynkin formula present (18 hits) |
| **Lie-algebra cohomology $H^*(\mathfrak g,M)$ + Whitehead's lemmas + cohomological Weyl reducibility** | `07.06.23` lie-algebra-cohomology-and-whiteheads-lemmas | Chevalley-Eilenberg complex, low-degree dictionary, Whitehead lemmas; sl_2 + abelian/exterior worked examples |
| **Hochschild-Serre SS for a Lie-algebra ideal** | `07.06.24` the-hochschild-serre-spectral-sequence | $E_2=H^p(\mathfrak g/\mathfrak h,H^q(\mathfrak h,M))$; inflation/restriction/five-term (14 hits); Heisenberg example |

Part I prereqs (confirmed shipped):

| SLALG topic | Covered by | Evidence |
|---|---|---|
| Lie algebra (defn, ideals, derivations, semidirect product) | `03.04.01` lie-algebra | shipped |
| Universal enveloping algebra $U(\mathfrak g)$ | `07.06.02` universal-enveloping-algebra | shipped |
| **PBW theorem** (audit wanted a proof unit) | `07.06.02` (filtration / associated-graded proof, 6 hits); `48.12.49` (PBW as Hopf-coalgebra iso) | proved, not just stated |
| Hopf-algebra / primitive-element structure of $U(\mathfrak g)$ | `48.12.49` bialgebra-hopf-milnor-moore | Milnor-Moore; $P(U(\mathfrak g))=\mathfrak g$; the BCH apparatus |
| Solvable / nilpotent Lie algebras | `07.06.14` engel-lie-theorem; `01.02.05` solvable-nilpotent-jordan-holder | shipped |
| **Engel's theorem + Lie's theorem** | `07.06.14` engel-lie-theorem | title is "Engel's theorem + Lie's theorem" |
| **Cartan's criterion** (solvability/semisimplicity via Killing form) | `07.06.16` cartan-criterion-solvability-semisimplicity | shipped |
| Killing form / Cartan subalgebra / root-space / Serre relations | `07.06.17`–`07.06.20` | shipped |
| **Weyl complete reducibility** | `07.06.22` weyl-complete-reducibility (Casimir proof) + cohomological re-proof in `07.06.23` | both proofs present |
| Exponential map $\exp:\mathfrak g\to G$ (real/complex) | `03.03.01` lie-group + `02.06.03` matrix-exponential | shipped |

Part II arc (formal groups / p-adic / Lie functor — confirmed shipped):

| SLALG topic | Covered by | Evidence |
|---|---|---|
| **Formal group law** $F(X,Y)\in R[\![X,Y]\!]$ | `48.03.04` formal-group-law | axioms, Lazard ring, char-0 $\cong\hat{\mathbb G}_a$ via $\log_F$; Master: Cartier module, p-typical, **height**, **Lubin-Tate** (10 hits) |
| Lie functor for formal groups (char-0 equivalence) | `48.03.04` | char-0 additive-equivalence stated and proved |
| **$p$-adic Lie group + $p$-adic exponential** | `48.03.05` padics-lie-group | $\mathbb Q_p$, radius of convergence (30 hits), p-adic BCH bracket, p-adic analytic manifold |
| **Lazard's equivalence** (p-adic Lie groups ↔ $\mathbb Q_p$-Lie algebras; uniform pro-$p$) | `48.03.05` (Theorem 1: uniform pro-$p$ of finite rank, 11 pro-p hits) | shipped; DSMS modern pro-$p$ cited |
| **Lie's three theorems** (integration, Lie functor) | `48.03.06` lie-third-theorem | unified categorical statement, BCH-based construction |
| $\mathbb Q_p$ / $p$-adic absolute value prereq | `21.02.03` p-adic-numbers-$\mathbb Q_p$-and-$\mathbb Z_p$ | a real number-theory strand now anchors the p-adic units (first-pass assumed none existed) |

Spectral-sequence cross-strand:

| SLALG topic | Covered by | Evidence |
|---|---|---|
| Spectral sequence (general) + five-term exact sequence | `03.13.01` spectral-sequence; `04.03.13/14` grothendieck/filtered-complex | general machinery |
| Leray-Serre SS (topological, fibrations) | `03.13.02` leray-serre | topological parallel cross-linked by `07.06.24` |

**Bottom line:** SLALG is fully covered. Mark the first-pass audit
`plans/fasttrack/serre-lie-algebras-and-lie-groups.md` as SUPERSEDED /
coverage ≥95% achieved. The only standing item is the optional `07.06.E1`
exercise pack, which is not required for FT equivalence.
