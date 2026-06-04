# Schwarz — *Morse Homology* (FT 3.04) — Deepening gap file (Phase 2)

**Verdict: 2 genuine gaps.** The chapter `03.15-morse-homology/` was built
recently and ships items 1–9 and 12 of the original audit punch-list
(`03.15.01`–`03.15.09`, `03.15.12`). All of the Schwarz-specific analytic
machinery — the Banach manifold of trajectories and the Fredholm
linearised operator with spectral flow (`03.15.02`), Sard-Smale /
Banach-space genericity transversality (`03.15.02`), exponential decay and
broken-trajectory compactness (`03.15.03`), gluing and the
manifold-with-corners boundary structure (`03.15.04`), coherent
orientations (`03.15.05`), the Morse complex with $\partial^2=0$
(`03.15.06`), continuation invariance (`03.15.07`), the Morse Homology
Theorem via the Eilenberg-Steenrod / cellular comparison (`03.15.08`), and
the cup-product ring structure (`03.15.09`) — is **covered** at
Schwarz-equivalent depth. See the COVERED trailer for ids.

The two gaps are the two punch-list items (audit items 10 and 11) whose
slots `03.15.10` and `03.15.11` were **never written**. `03.15.10` is a
hard dangling reference: it is cited as the dedicated home for the
flow-reversal Poincaré-duality proof and the filtered spectral sequence in
**three already-shipped units** (`03.15.07`, `03.15.08`, `03.15.09`), but
the file does not exist. Writing it closes those broken internal links.
`03.15.11` (the Floer bridge) is the audit's flagged apex weaving payload —
the corpus's "analogue-without-original" connector — and is uncovered.

---

## Gap 1 — `03.15.10` Poincaré duality via flow reversal; the filtered Morse spectral sequence

- **id:** `03.15.10` (free slot; chapter currently has 01–09, 12)
- **title:** Poincaré duality via flow reversal and the filtered Morse spectral sequence
- **spec:** Reversing the negative-gradient flow exchanges stable and
  unstable manifolds ($W^u(x;f)=W^s(x;-f)$, index $\mu_f(x)\mapsto
  n-\mu_f(x)$), giving the chain isomorphism $C_k(f)\cong C^{n-k}(-f)$ that
  intertwines $\partial_f$ with $\delta_{-f}$ and descends to the
  Morse-theoretic Poincaré duality $HM_k(f)\cong HM^{n-k}(-f)\cong
  HM^{n-k}(M)$ — proved by a single sign change, no triangulation or
  fundamental class. Then the filtration of $C_*(f)$ by critical value
  (sublevel sets) yields a spectral sequence whose $E_1$ page is the
  critical-point count and which converges to $HM_*(M)$; the filtered
  continuation maps of `03.15.07` are its maps of spectral sequences.
  Worked example: height function on $T^2$, the duality pairing and the
  two-step filtration.
- **prereqs (verified to exist):** `03.15.08` (Morse Homology Theorem),
  `03.15.09` (Morse cohomology / cup product, which states the duality
  theorem and defers its proof here), `03.12.16` (singular Poincaré
  duality), `03.13.01` (spectral sequence). Filtered-continuation germ in
  `03.15.07`.
- **chapter dir:** `content/03-modern-geometry/03.15-morse-homology/`
- **frontmatter:** section `03` (modern geometry), chapter
  `15-morse-homology`.
- **Why genuine, not covered:** `03.15.09` line 393 states the
  flow-reversal duality theorem and ends "(continued in [03.15.10])"; line
  427 says "the Morse-theoretic proof ... is the subject of [03.15.10]".
  `03.15.07` lines 281 and 311 name `[03.15.10]` as the home of the
  filtered spectral sequence. `03.15.08` line 190 lists `[03.15.10]` as a
  forward refinement. The file does not exist — these are dangling links to
  unwritten content. `03.12.16` is the singular-side duality and
  `03.13.01` is the general spectral-sequence machinery; neither is the
  Morse-theoretic flow-reversal proof or the critical-value filtration,
  which are the actual subject. No `filtration by critical value` /
  `filtered Morse` construction exists anywhere in `content/`.

## Gap 2 — `03.15.11` From finite-dimensional Morse to Floer homology (bridge unit)

- **id:** `03.15.11` (free slot)
- **title:** From finite-dimensional Morse homology to Floer homology
- **spec:** Master-only bridge (~1500 words). The explicit dictionary that
  grounds both already-shipped Floer chapters in their finite-dimensional
  template: closed manifold $M$ ⟶ loop space $\mathcal{L}M$ (symplectic) or
  gauge-orbit space $\mathcal{B}(Y)=\mathcal{A}/\mathcal{G}$ (instanton);
  Morse function ⟶ symplectic action $\mathcal{A}_H$ / Chern-Simons; finite
  gradient flow lines ⟶ pseudoholomorphic cylinders / ASD instantons on the
  cylinder; the Fredholm $\mathcal{M}(x,y)$ of `03.15.02` ⟶ Banach-manifold
  trajectory moduli; Sard-Smale transversality ⟶ generic perturbations;
  broken-trajectory compactness `03.15.03` ⟶ Gromov/Uhlenbeck compactness
  with bubbling; gluing `03.15.04`, orientations `03.15.05`, and
  $\partial^2=0$ `03.15.06` carry over verbatim — but the Morse Homology
  Theorem `03.15.08` is *replaced* by an invariance statement because no
  finite cell structure exists in infinite dimensions. Explicit forward
  links to `05.08.02`, `05.08.04`, `03.07.19`–`03.07.23`.
- **prereqs (verified to exist):** `03.15.08` (Morse Homology Theorem).
  Forward weaving targets verified present: `05.08.02-floer-homology` (at
  `content/05-symplectic/floer/`), `05.08.04-conley-zehnder-index`,
  `03.07.19`–`03.07.23` (instanton Floer block).
- **chapter dir:** `content/03-modern-geometry/03.15-morse-homology/`
- **frontmatter:** section `03`, chapter `15-morse-homology`.
- **Why genuine, not covered:** The shipped 03.15 units carry one-line
  forward pointers in their Bridge paragraphs (e.g. `03.15.08` line 190,
  `03.15.12` line 180 point at `[05.08.02]`/`[03.07.23]`), and
  `05.08.02-floer-homology` line 339 states the analogy in its own
  synthesis — but no unit assembles the full Morse⟷Floer dictionary as its
  primary content, and `05.08.02` carries no prerequisite edge or pointer
  back to a finite-dimensional template unit. The audit flagged this as the
  "single most conspicuous analogue-without-original gap." Lower priority
  than Gap 1 (no dangling links force it), but it is the one remaining
  punch-list item with genuine cross-chapter value. **If de-scoping to a
  single unit, prioritise Gap 1 — it repairs broken internal references;
  Gap 2 is pure weaving enrichment.**

---

## COVERED (not gaps) — verified against the live corpus

Original audit punch-list items 1–9 and 12 all shipped; the Schwarz-specific
analytic items the brief asked to check are covered:

- **Gradient flow, $W^s/W^u$, Morse-Smale condition** (audit item 1) →
  `03.15.01-gradient-flow-stable-unstable-morse-smale`.
- **Trajectory spaces; Banach manifold of trajectories; Fredholm section;
  linearised operator $D_\gamma F=\frac{d}{dt}+A(t)$ & spectral-flow index;
  Sard-Smale / Banach-space genericity transversality** (audit item 2;
  brief's "analytic framework", "Fredholm theory", "linearised operator &
  spectral flow", "transversality via Sard-Smale / Banach genericity") →
  `03.15.02-trajectory-spaces-fredholm-transversality`.
- **Exponential decay; broken-trajectory compactness** (audit item 3;
  brief's "exponential decay & broken-trajectory compactness") →
  `03.15.03-compactness-broken-trajectories`.
- **Gluing; manifold-with-corners / boundary structure of the compactified
  moduli** (audit item 4; brief's "gluing & manifold-with-corners
  structure") → `03.15.04-gluing-of-trajectories`.
- **Coherent orientations; characteristic signs $n(x,y)$** (audit item 5) →
  `03.15.05-coherent-orientations-and-characteristic-signs`.
- **Morse complex $C_*(f)$, boundary operator, $\partial^2=0$, Morse
  inequalities** (audit item 6) →
  `03.15.06-the-morse-complex-and-partial-2-0`.
- **Continuation maps and invariance of $HM_*$** (audit item 7) →
  `03.15.07-continuation-maps-and-invariance-of-hm`.
- **Morse Homology Theorem $HM_*(f)\cong H_*(M;\mathbb{Z})$; internal
  Eilenberg-Steenrod + cellular comparison; $\mathbb{CP}^n$ example** (audit
  item 8; brief's "Morse-homology = singular-homology isomorphism via
  continuation") → `03.15.08-the-morse-homology-theorem` (uses
  `03.12.13` cellular, `03.12.15` Eilenberg-Steenrod, both present).
- **Morse cohomology, cup product, ring structure via $Y$-graphs** (audit
  item 9; brief's "ring structure") →
  `03.15.09-morse-cohomology-cup-product-and-the-ring-structure`.
- **Witten supersymmetric Morse theory (deformed differential, tunnelling
  prediction of the differential)** (audit item 14) →
  `03.15.12-witten-s-supersymmetric-morse-theory-survey-pointer`.
- **Conley-index relation** (brief's "Conley-index relation"): the
  continuation/isolating-neighbourhood viewpoint is treated inside the
  shipped units — `conley` appears in `03.15.03`, `03.15.04`, `03.15.06`,
  `03.15.07`. No standalone Conley-index theory exists in the corpus, but
  Schwarz does not develop one either (he uses Conley-Zehnder
  continuation), so this is not a Schwarz gap; the relevant content is
  COVERED in `03.15.07` (continuation/invariance).

**Net deepening result: 2 genuine gaps (`03.15.10`, `03.15.11`), of which
`03.15.10` repairs dangling internal references and is the priority. 11
audit topics verified COVERED.**
