# Forster — *Lectures on Riemann Surfaces* — Deepening-audit gap file (Phase 2)

**Verdict: essentially fully covered.** The first-pass audit
(`plans/fasttrack/forster-riemann-surfaces.md`) was written against a
22-unit `06-riemann-surfaces` chapter and proposed a 21-item punch-list
dominated by Forster's distinctive Chapter-3 analytic spine (Stein /
Cousin / Behnke-Stein / Mittag-Leffler / Runge) plus Schwartz
finiteness, Dolbeault, branched-covering category, and Riemann's
existence theorem. The chapter has since grown to **76 units** and
**every priority-1, priority-2, and priority-4 item on that list has
shipped**, including the entire new `06.09-stein/` block. Grep
verification below.

**Genuine high-value gaps: 0.** Two marginal residue items are recorded
under "Marginal / not recommended" with the reason they fall below the
gap threshold; neither is proposed for production. This is a valid
"book is covered" result per the Phase-2 brief.

---

## Genuine gaps (high-value): NONE

Every Forster-distinctive theorem the brief and the original audit named
has a corresponding unit that *states and proves* it (or proves an
equivalent at full depth). See COVERED trailer for the id-by-id mapping.

---

## Marginal / not recommended (recorded for due diligence, NOT proposed)

These are the only Forster items without a dedicated unit. Each is
already present as originator-prose / motivation inside an existing unit,
so a new unit would be a marginal re-slice, not a genuine gap. Per the
brief ("do NOT manufacture marginal units to hit a number") these are
listed, not proposed.

1. **Explicit construction of the Riemann surface of a concrete
   algebraic function** (e.g. the surface of $\sqrt{z}$ or $\log z$ as
   maximal analytic continuation / germ space) — Forster §4–§5.
   *Why not a gap:* the construction is delivered as theorem-level
   content in `06.02.02-branched-coverings` (every branched cover of
   $\mathbb{P}^1$ ↔ the discriminant-locus cover on which $w(z)$ becomes
   single-valued; Riemann's motivating prose at lines 479+) and the
   categorical equivalence in `06.02.03-riemann-s-existence-theorem-for-algebraic-curves`.
   The abstract espace-étalé "space of germs" is fully built in
   `04.01.02-stalk`. A standalone "√z worked surface" unit would be a
   worked-example re-slice, not a missing theorem.

2. **Forster's elementary Banach/Montel compact-perturbation proof of
   $H^1$-finiteness as its own showcase unit** — Forster §14.
   *Why not a gap:* the theorem is stated and the compact-perturbation
   (Schwartz) argument is given explicitly in
   `06.04.02-cech-cohomology-line-bundles` (notes section, "Schwartz
   finiteness via compact perturbation" — nested precompact discs,
   compact restriction operator, Schwartz's surjective-Fredholm
   perturbation theorem), and the named coherent-sheaf
   "Schwartz finiteness on a compact Riemann surface" theorem with full
   rank-induction proof is in `06.04.07-sheaf-cohomology-survey`. The
   Hilbert-space/elliptic route is in `06.04.05-dbar-hilbert-pde`. The
   theorem is covered three ways; a fourth "Forster-style only" unit
   adds proof-flavour, not a missing result.

---

## COVERED (not gaps) — verified id mapping

Original-audit punch-list item → existing unit(s), grep-verified.

### Chapter 3 analytic spine (original audit priority 1, items 1–7)
- **Stein Riemann surfaces (§29)** → `06.09.01-stein-riemann-surfaces` COVERED.
- **Theorem A and B for Stein RS (§29)** → `06.09.02-theorems-a-b` COVERED.
  (Higher-dim $\mathbb{C}^n$ version also in `06.10.21-cartan-theorems-a-and-b-in-mathbb-c-n-with-proof`.)
- **Behnke-Stein, non-compact ⇒ Stein (§29)** → `06.09.03-behnke-stein` COVERED
  (includes corollary `Pic(X)=0` / all line bundles trivial on non-compact RS, Forster §31).
- **Cousin I additive (§§25–26)** → `06.09.04-cousin-i-additive` COVERED.
- **Cousin II multiplicative (§27)** → `06.09.05-cousin-ii-multiplicative` COVERED
  (exponential sequence, $H^2(X,\mathbb{Z})$ obstruction, **Weierstrass product theorem on $\mathbb{C}$/RS as corollary** — Forster §27, all inside this unit).
- **Mittag-Leffler on RS (§28)** → `06.09.06-mittag-leffler-on-rs` COVERED
  (plane Mittag-Leffler also at `06.01.18-mittag-leffler-theorem`).
- **Runge approximation on RS (§30)** → `06.09.07-runge-approximation-on-rs` COVERED.
- **Higher-dim Stein survey (audit item 20)** → `06.09.08-survey-cartan-serre-stein-theory-in-higher-dim` COVERED.

### Forster-distinctive proofs + covering block (original audit priority 2, items 8–13)
- **Schwartz finiteness of $H^1(X,\mathcal{O})$ on compact RS (§§14–15)** →
  COVERED in `06.04.02-cech-cohomology-line-bundles` (stated + compact-perturbation proof)
  and `06.04.07-sheaf-cohomology-survey` (named theorem, full proof). See Marginal #2.
- **Branched coverings as a category (§§4–6)** → `06.02.02-branched-coverings` COVERED
  (categorical / Galois branched-extension form; deck/monodromy).
- **Riemann's existence theorem, $P(z,w)=0$ ↔ compact RS, $\mathcal{M}(X)$ finite over $\mathbb{C}(z)$ (§§7–8)** →
  `06.02.03-riemann-s-existence-theorem-for-algebraic-curves` COVERED.
- **Dolbeault iso $H^1(X,\mathcal{O})\cong H^{0,1}_{\bar\partial}(X)$ (§24)** →
  `06.04.03-hodge-decomposition-curves` COVERED (fine Dolbeault resolution, Step 4 proves
  $H^{0,1}=H^1(X,\mathcal{O}_X)$); also `06.04.02` Step 2–3.
- **Gluing-patches / maximal atlas / IFT-on-RS deepening (§§1–3)** →
  `06.03.01-riemann-surface` COVERED (maximal holomorphic atlas, transition functions, chart examples).
- **Line bundle trivial on non-compact RS (§31)** →
  `06.09.03-behnke-stein` (Pic vanishing corollary) + `06.09.05-cousin-ii-multiplicative` COVERED.

### Chapter 2 cohomology spine (original audit priority 3, composite items 14–19)
- **Sheaves on RS / Čech cohomology of analytic sheaves (§13)** → `06.04.02-cech-cohomology-line-bundles` + `06.04.07-sheaf-cohomology-survey` COVERED
  (general sheaf machinery: `04.01.01-sheaf`, `04.01.02-stalk` incl. espace-étalé, `04.01.03-sheafification`).
- **Divisors + Riemann-Roch (§16)** → `06.05.01-divisor-riemann-surface` + `06.04.01-riemann-roch-compact-riemann-surfaces` COVERED.
- **Serre duality (§17)** → `06.04.04-serre-duality-curves` COVERED.
- **Riemann-Hurwitz (§18)** → `06.05.03-riemann-hurwitz-formula` (+ `06.01.30-riemann-hurwitz-meromorphic-maps`) COVERED.
- **$\dim\Omega^1(X)=g$ / holomorphic 1-forms (§§19–20)** → `06.06.01-holomorphic-one-form` (+ `06.04.03` dimension count) COVERED.
- **Period integrals (§12)** → `06.06.02-period-matrix` (+ `06.06.07-riemann-bilinear`) COVERED.
- **Abel's theorem (§21)** → `06.06.04-abel-jacobi-map` COVERED.
- **Jacobi inversion (§§21–22)** → `06.06.06-jacobi-inversion` COVERED.
- **Theta functions / vanishing (§22)** → `06.06.05-theta-function` (+ `06.01.31-jacobi-theta-functions`) COVERED.

### Brief-named Forster-specific checks
- **Dolbeault/Čech comparison on RS** → COVERED, `06.04.03` + `06.04.02` (see above).
- **Finiteness theorem $H^1$ finite-dim via Schwartz/Montel** → COVERED, `06.04.02` + `06.04.07` (see above).
- **Mittag-Leffler / Weierstrass distributions** → COVERED, `06.09.06` + `06.09.04` (Cousin I) + `06.09.05` (Weierstrass product) + plane cases `06.01.18`, `06.01.17`.
- **Covering theory + monodromy + analytic continuation as sheaf of germs** →
  COVERED: covering/deck/Galois/universal-cover `03.12.02-covering-space`; monodromy & germ-chain continuation `06.01.04-analytic-continuation`; espace-étalé sheaf-of-germs `04.01.02-stalk`; branched/monodromy `06.02.02`.
- **Triangulation / genus** → COVERED, `06.03.02-genus-riemann-surface` (Euler char $\chi=2-2g$ via cell decomposition + $g=\dim\Omega^1$).
- **Riemann-Hurwitz** → COVERED, `06.05.03` (+ `06.01.30`).

### Original-audit "covered/✓" items confirmed still present
- Holomorphic/meromorphic functions on RS → `06.01.01`, `06.01.05`.
- Branch points / ramification → `06.02.01-branch-point-ramification`.
- Uniformization → `06.03.03-uniformization-theorem`.
- Divisors, line bundles, Jacobian, Abel-Jacobi → `06.05.0x`, `06.06.0x`.

---

**Counts:** genuine high-value gaps = **0**; marginal-not-recommended = 2;
COVERED-verified topics = **31** distinct items mapped to existing ids.
