# Gunning — *Introduction to Holomorphic Functions of Several Variables* (Fast Track 3.24) — Audit + Gap Plan

**Book:** Robert C. Gunning, *Introduction to Holomorphic Functions of
Several Variables*, 3 volumes — **Vol. I: Function Theory**, **Vol. II:
Local Theory**, **Vol. III: Homological Theory** (Wadsworth &
Brooks/Cole Mathematics Series, 1990). ISBN 0-534-13308-8 (Vol. I),
0-534-13309-6 (Vol. II), 0-534-13310-X (Vol. III). The single-author
expansion and rewrite of the classic Gunning–Rossi *Analytic Functions
of Several Complex Variables* (Prentice-Hall 1965).

**Fast Track entry:** 3.24 (the **local-algebra / sheaf-theoretic /
Oka–Cartan** anchor of the several-complex-variables strand; paired with
Krantz 3.23, the **hard-analysis / integral-kernel / PDE-estimates**
anchor). The booklist pairs the two SCV texts deliberately: Krantz
develops $\mathbb{C}^n$ through $\bar\partial$, $L^2$ estimates, and
integral kernels; **Gunning develops it through the local ring of germs
$\mathcal{O}_n$, analytic sets, coherent analytic sheaves, Oka's
coherence theorem, and the Cartan Theorems A and B** — the algebraic and
homological spine that Krantz deliberately omits.)

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite per
`docs/specs/ORCHESTRATION_PROTOCOL.md`). Punch-list of new units +
deepenings to reach the equivalence threshold
(`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Not a full
line-number-level P1 audit.

**Critical coordination note.** The several-complex-variables chapter
`content/06-riemann-surfaces/10-several-complex-variables/` was **just
built from the Krantz 3.23 audit** and shipped 13 units
(`06.10.01`–`06.10.09`, `06.10.11`, `06.10.12`, `06.10.14`, `06.10.16`).
**Most of Gunning Vol. I (function theory) is therefore already covered
at Krantz-equivalent depth** — domains of holomorphy, plurisubharmonic
functions, pseudoconvexity, the $\bar\partial$-$L^2$ method, the Levi
problem, Bochner–Martinelli, Cauchy–Fantappiè/Henkin–Ramirez kernels,
Bergman/Szegő, Cousin I/II, invariant metrics. Those overlap topics are
marked **`[ENRICH]`** (add Gunning's framing/voice to an existing unit),
never re-built. **The genuine NEW gaps are Gunning Vols. II and III: the
local theory (germ ring $\mathcal{O}_n$ as an analytic-algebra object,
the local analytic Nullstellensatz/Rückert, analytic sets and their
local parametrisation, dimension, and the structure of complex
spaces) and the homological theory (coherent analytic sheaves with
proof, Oka's coherence theorem, sheaf cohomology in $\mathbb{C}^n$, and
the Cartan Theorems A and B in arbitrary dimension with proof).** This
plan isolates exactly that distinctive Gunning material.

---

## §1 What Gunning's three volumes are for

Gunning's *Introduction* is the canonical graduate development of
several-complex-variables along the **Oka–Cartan / local-algebra /
sheaf-cohomology** route, as opposed to Krantz's hard-analysis route or
the Griffiths–Harris complex-algebraic-geometry route. The organising
question is: *what is the local algebraic structure of holomorphic
germs, how do analytic sets sit inside $\mathbb{C}^n$, and what global
function theory does the resulting coherent-sheaf machinery produce?* The
three volumes split the subject cleanly:

- **Vol. I — Function Theory** (the part that overlaps Krantz). Holomorphic
  functions on $\Omega \subseteq \mathbb{C}^n$; the Cauchy integral on
  polydiscs; the Hartogs phenomenon; domains of holomorphy and
  holomorphic convexity; the Cartan–Thullen theorem; plurisubharmonic
  functions; pseudoconvexity and the Levi form; the $\bar\partial$
  problem and the Levi problem; the Cousin problems; the
  Bochner–Martinelli and Cauchy–Fantappiè integral representations.
  **This volume is essentially what the Krantz 3.23 batch already
  shipped as `06.10.01`–`06.10.12`.**

- **Vol. II — Local Theory** (first Gunning-distinctive volume). The
  germ ring $\mathcal{O}_n = {}_n\mathcal{O}$; the **Weierstrass
  preparation/division** engine; $\mathcal{O}_n$ Noetherian local UFD
  (Rückert basis); the **local analytic Nullstellensatz** (Rückert);
  **analytic sets** and their germs, the **finite branched-cover (local
  parametrisation) theorem**, irreducible components, **dimension**; the
  local ring of an analytic-set germ; regular/singular points; the
  **Remmert–Stein** removable-singularity theorem; normalisation;
  coherence as a local statement.

- **Vol. III — Homological Theory** (second Gunning-distinctive volume).
  Sheaves of $\mathcal{O}$-modules; **coherent analytic sheaves**;
  **Oka's coherence theorem** ($\mathcal{O}_{\mathbb{C}^n}$ coherent over
  itself; ideal sheaf of an analytic set coherent); sheaf cohomology of
  coherent analytic sheaves; the **Cartan Theorems A and B** in arbitrary
  dimension with proof (on Stein open sets); **complex spaces** and
  coherence on them; the homological reformulation of the Cousin and Levi
  problems; Cartan–Serre finiteness on compact complex spaces.

Distinctive Gunning choices (versus the Babel Bible's existing complex
infrastructure):

1. **Local algebra of $\mathcal{O}_n$ as a first-class object.** Where
   Krantz uses the Weierstrass theorems instrumentally, Gunning builds
   the *whole local theory* on them. **`06.10.14` covers
   preparation/division and the Noetherian + UFD corollaries but stops
   there.** The local Nullstellensatz, the radical-ideal ↔ analytic-set-
   germ correspondence, and the module theory over $\mathcal{O}_n$ are
   **absent**. Genuine NEW.

2. **Analytic sets and their local geometry.** Local parametrisation
   (finite branched cover), irreducible decomposition, dimension,
   regular/singular loci, Remmert–Stein. Babel Bible has only the
   *algebraic* analogue (`04.02.07`, scheme Nullstellensatz + Krull
   dimension); no *analytic-set* unit. Genuine NEW.

3. **Coherent analytic sheaves with the analytic proof.** Babel Bible's
   `04.06.02` is the **scheme-theoretic** coherent sheaf
   (Hartshorne/Vakil). **Oka's coherence theorem — that
   $\mathcal{O}_{\mathbb{C}^n}$ is a coherent sheaf of rings — is not
   given a unit anywhere** (only one-line mentions in `06.09.02`,
   `06.10.14`). Genuine NEW, and the flagship of Vol. III.

4. **Cartan Theorems A and B in arbitrary dimension, with proof.** Babel Bible
   has A/B **only in dimension one** with proof (`06.09.02`) plus a
   **survey** of the higher-dim case (`06.09.08`). The $n \geq 2$ proof —
   via the now-shipped $\bar\partial$-$L^2$ method (`06.10.04`) and
   coherence — is **survey-only**. Gunning-distinctive DEEPEN.

5. **Complex spaces.** Locally ringed analytic-model spaces;
   reduced/non-reduced structure; coherence on them. **No unit
   anywhere.** Genuine NEW (survey-leaning).

6. **Function theory of Vol. I.** Domains of holomorphy, PSH,
   pseudoconvexity, the Levi problem, the $\bar\partial$ machine,
   integral kernels, Cousin, invariant metrics — **all shipped by the
   Krantz batch** (`06.10.01`–`06.10.12`). Pure **ENRICH**: add Gunning's
   local-ring / sheaf framing; produce no new units.

Gunning stays inside the Oka–Cartan / local-algebra / sheaf programme.
He does **not** develop the hard-analysis refinements that are
Krantz-distinctive (the $\bar\partial$-Neumann problem with subelliptic
estimates, Fefferman boundary asymptotics, the Fefferman mapping
theorem); those are owned by the Krantz audit. The two books meet at the
Levi problem — Krantz solves it by $\bar\partial$-$L^2$ (`06.10.05`),
Gunning by coherent sheaves and Theorem B — and at the Weierstrass
theorems (`06.10.14`, already produced as a composite serving both).

---

## §2 Coverage table (Babel Bible vs Gunning)

Cross-referenced against Babel Bible's actual several-complex-variables,
Stein, and algebraic-geometry sheaf units. Existing relevant ids,
verified by `find content -name "*.md"`:

- **SCV function theory (Krantz batch — Gunning Vol. I):**
  `06.10.01-domains-of-holomorphy-and-holomorphic-convexity`,
  `06.10.02-plurisubharmonic-functions`,
  `06.10.03-pseudoconvexity-and-the-levi-form`,
  `06.10.04-dbar-equation-hormander-l2-estimates`,
  `06.10.05-solution-of-the-levi-problem`,
  `06.10.06-bochner-martinelli-kernel-and-formula`,
  `06.10.07-cauchy-fantappie-and-henkin-ramirez-kernels`,
  `06.10.08-bergman-kernel-and-bergman-metric`,
  `06.10.09-szego-kernel-and-fefferman-boundary-asymptotics`,
  `06.10.11-cousin-i-ii-and-the-levi-problem-in-mathbb-c-n`,
  `06.10.12-invariant-metrics-caratheodory-kobayashi-bergman`,
  `06.10.16-wong-rosay-theorem-and-boundary-rigidity`.
- **SCV local algebra (Gunning Vol. II partial):**
  `06.10.14-weierstrass-preparation-and-division` (germ ring
  $\mathcal{O}_n$; preparation + division; Noetherian + UFD; Henselian;
  Rückert basis theorem).
- **Templated entry units (Gunning Vol. I, ch. 1):**
  `06.07.01-holomorphic-several-variables`,
  `06.07.02-hartogs-phenomenon` (both `lean_status: partial`, `status:
  shipped`; the multi-index Cauchy / Hartogs content is present).
- **Dimension-one Stein / Cousin / Theorems A–B (Forster-derived,
  $n=1$):** `06.09.01-stein-riemann-surfaces`,
  `06.09.02-theorems-a-b` (Cartan A & B, dim one, with proof),
  `06.09.03-behnke-stein`, `06.09.04-cousin-i-additive`,
  `06.09.05-cousin-ii-multiplicative`, `06.09.06-mittag-leffler-on-rs`,
  `06.09.07-runge-approximation-on-rs`,
  `06.09.08-survey-cartan-serre-stein-theory-in-higher-dim` (the only
  higher-dim Cartan-A/B unit; **survey-level, no proof**).
- **Sheaf / cohomology (algebraic & dim-one):** `04.01.01-sheaf`,
  `04.01.02-stalk`, `04.01.03-sheafification`,
  `04.03.01-sheaf-cohomology`, `04.06.01-quasi-coherent-sheaf`,
  `04.06.02-coherent-sheaf` (**scheme-theoretic**),
  `06.04.07-sheaf-cohomology-survey` ($n=1$, four-picture comparison).
- **Algebraic Nullstellensatz / dimension (not analytic):**
  `04.02.07-nullstellensatz-and-dimension-theory`.
- **Complex geometry foundation:**
  `03.02.10-complex-manifold-dolbeault`.

✓ = covered at Gunning-equivalent depth, △ = topic present but
shallower / in a different (algebraic or dimension-one) form, ✗ = not
covered.

### Vol. I — Function Theory (overlaps Krantz; mostly shipped)

| Gunning topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| Holomorphic functions on $\Omega \subseteq \mathbb{C}^n$; multi-index Cauchy on polydiscs | `06.07.01` | ✓ | Shipped (Krantz-batch entry); ENRICH with Gunning's germ framing only. |
| Hartogs phenomenon | `06.07.02` | ✓ | Shipped. ENRICH. |
| Domains of holomorphy; holomorphic convexity; Cartan–Thullen | `06.10.01` | ✓ | Shipped at full depth. ENRICH (Gunning ch. on holomorphic convexity). |
| Plurisubharmonic functions | `06.10.02` | ✓ | Shipped. ENRICH. |
| Pseudoconvexity; Levi form | `06.10.03` | ✓ | Shipped. ENRICH. |
| $\bar\partial$ with $L^2$ estimates | `06.10.04` | ✓ | Shipped. ENRICH (Gunning's coherence-route framing vs Hörmander). |
| Solution of the Levi problem | `06.10.05` | ✓ | Shipped (the $\bar\partial$ proof). **Gunning's sheaf-theoretic proof** via Theorem B is the distinctive complement — see §3 item 4. |
| Cousin I / II in $\mathbb{C}^n$ | `06.10.11` | ✓ | Shipped. ENRICH with the $H^1/H^2$ cohomological framing Gunning gives. |
| Bochner–Martinelli; Cauchy–Fantappiè | `06.10.06`, `06.10.07` | ✓ | Shipped. ENRICH. |
| Bergman / Szegő kernels; invariant metrics | `06.10.08`, `06.10.09`, `06.10.12` | ✓ | Shipped (Krantz-distinctive; Gunning treats lightly). No action. |

### Vol. II — Local Theory (**Gunning-distinctive; largest NEW block**)

| Gunning topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| Germ ring $\mathcal{O}_n$; Weierstrass preparation & division | `06.10.14` | ✓ | Shipped. The local-algebra entry point is in place. |
| $\mathcal{O}_n$ Noetherian + UFD + Henselian (Rückert basis) | `06.10.14` (Master) | ✓ | Proved in the existing unit. |
| **Local analytic Nullstellensatz (Rückert); radical-ideal ↔ germ correspondence** | — (cf. `04.02.07`, *algebraic*) | ✗ | **Gap (NEW).** The analytic $\sqrt{I} = \mathcal{I}(\mathcal{V}(I))$ over $\mathcal{O}_n$; not the scheme-theoretic version. |
| **Analytic sets; local parametrisation (finite branched cover); irreducible components; dimension** | — | ✗ | **Gap (NEW, high priority).** Local structure of $\{f_1 = \cdots = f_k = 0\}$; the branched-cover normal form; $\dim$ of a germ. |
| **Local ring of an analytic-set germ; regular & singular points** | — | ✗ | **Gap (NEW).** $\mathcal{O}_{V,p} = \mathcal{O}_n/\mathcal{I}(V)$; smooth points; the singular locus is a proper analytic subset. |
| **Remmert–Stein removable-singularity theorem; normalisation** | — | ✗ | **Gap (NEW, survey-leaning).** Extension of analytic sets across lower-dimensional sets; the normalisation of an analytic set. |

### Vol. III — Homological Theory (**Gunning-distinctive; second NEW block**)

| Gunning topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| Sheaves of $\mathcal{O}$-modules (general) | `04.01.01-03` | △ | Sheaf machinery present (algebraic framing); ENRICH-by-reference. |
| **Coherent *analytic* sheaves** | `04.06.02` (*algebraic*) | △ | The coherent-sheaf unit is scheme-theoretic. The analytic definition (finite type + finitely-presented relations over $\mathcal{O}_{\mathbb{C}^n}$) needs its own unit. |
| **Oka's coherence theorem** ($\mathcal{O}_{\mathbb{C}^n}$ coherent; $\mathcal{I}(V)$ coherent) | — (one-line mentions only) | ✗ | **Gap (NEW, flagship of Vol. III).** The three Oka coherence theorems with proof; the load-bearing input to Theorems A and B. |
| **Cartan Theorems A and B in arbitrary dimension (with proof)** | `06.09.02` ($n=1$, proof); `06.09.08` ($n\geq2$, **survey**) | △ | **Deepen.** Dimension-one A/B proved; the $n\geq2$ proof is survey-only. Promote to a proof unit on Stein open sets via `06.10.04` + coherence. |
| **Sheaf cohomology of coherent analytic sheaves in $\mathbb{C}^n$** | `06.04.07` ($n=1$ four-picture); `04.03.01` (algebraic) | △ | Several-variable $\check{\mathrm{C}}$ech/Dolbeault cohomology of coherent analytic sheaves on Stein/polydisc domains; ENRICH/extend. |
| **Complex spaces (locally ringed analytic-model spaces)** | — | ✗ | **Gap (NEW, survey-leaning).** Reduced/non-reduced complex spaces; morphisms; coherence; Stein spaces. |
| Finiteness on compact complex spaces (Cartan–Serre) | `06.09.08`, `06.04.07` | △ | Survey-level; Cartan–Serre finiteness named, not proved in $n\geq2$. ENRICH. |

### Aggregate coverage estimate (vs Gunning, all three volumes)

- **Vol. I (function theory):** ~90% topic-level, ~85% proof-depth —
  shipped by the Krantz batch. Remaining work is **ENRICH only**
  (Gunning framing/voice), no new units.
- **Vol. II (local theory):** ~25% — only the germ-ring + Weierstrass
  entry (`06.10.14`) is in place. The Nullstellensatz, analytic sets,
  local parametrisation, dimension, and normalisation are **absent**.
  This is the single largest genuine NEW block.
- **Vol. III (homological theory):** ~20% — sheaf machinery and
  dimension-one Theorems A/B exist; the *analytic* coherent sheaf, Oka's
  coherence theorem, the $n\geq2$ A/B proof, and complex spaces are
  **absent or survey-only**.
- **Whole book:** **~55–60% topic-level**, **~50% proof-depth**, almost
  entirely because Vol. I was just shipped. After the Vol. II + Vol. III
  NEW units (priority 1–2): topic ~90%, proof-depth ~80%.
- **Exercise / worked-example layers:** Gunning is a treatise, not a
  problem book; the shipped `06.10.*` units carry genuine SCV exercise
  blocks (~40%). The Vol. II/III running examples — the cusp germ
  $z_2^2 = z_1^3$, the reducible germ $\{z_1 z_2 = 0\}$, the branched-
  cover normal form, $\mathcal{O}_{\mathbb{C}^n}$ coherent on a polydisc
  — appear nowhere yet (~30%); supplied by the new units.
- **Notation layer:** ~40%. `06.10.14` writes the germ ring
  $\mathcal{O}_n$; Gunning writes ${}_n\mathcal{O}$ / ${}_n\mathcal{O}_a$
  (stalk at $a$), $\mathcal{V}(I)$, $\mathcal{I}(V)$, $\mathrm{loc}$. A
  `notation/gunning.md` is warranted (none on disk; the Krantz-specced
  `notation/krantz.md` is also not yet present).
- **Sequencing layer:** ~50%. The spine Weierstrass → Nullstellensatz →
  analytic sets → coherence → Theorems A/B → complex spaces is broken
  after `06.10.14`.
- **Intuition layer:** ~55%. Analytic-set germs, branched covers, and
  "coherence = local finiteness propagates" are only implicit in
  existing Master sections.

---

## §3 Gap punch-list (P3-lite — units to write, deepen, or enrich)

The work is **overwhelmingly ENRICH on Vol. I (no new units) plus a
focused NEW build on Vols. II–III**. New units extend the existing
`06.10-several-complex-variables/` chapter with non-colliding ids
(`06.10.10`, `06.10.13`, `06.10.15`, `06.10.17`–`06.10.21` are all free;
`06.10.10`/`06.10.13`/`06.10.15` were reserved by the Krantz audit for
$\bar\partial$-Neumann / Fefferman-mapping / $\bar\partial_b$ units that
were **not** shipped, so to avoid future collision with a Krantz
follow-up the Gunning local/sheaf units take the **`06.10.17`+** block).
Items shared with already-shipped units are flagged `[ENRICH]`; the two
genuinely new blocks are `[NEW]`; the higher-dimension Theorems A/B
promotion is `[DEEPEN]`.

**Overlap convention.** `[Gunning-only]` = sole-owned by this plan;
`[Composite — Krantz 3.23]` = topic also in the Krantz plan (produce/
enrich once).

### Priority 1 — the local-theory spine (Gunning Vol. II)

Without this block Babel Bible has the Weierstrass engine (`06.10.14`)
but none of the geometry it powers. These are the load-bearing
definitions every Vol. III sheaf unit cites.

1. **`06.10.17` Local analytic Nullstellensatz and the ideal–germ
   correspondence.** **[Gunning-only — NEW]** Gunning Vol. II ch. on
   $\mathcal{O}_n$; Rückert 1933 (Math. Ann. 107) originator. ~2000
   words. Master: the local rings ${}_n\mathcal{O}$ and the operators
   $\mathcal{V}(I)$ (germ of common zeros) and $\mathcal{I}(V)$ (germs
   vanishing on $V$); the **Rückert Nullstellensatz**
   $\mathcal{I}(\mathcal{V}(I)) = \sqrt{I}$ for an ideal $I \subseteq
   {}_n\mathcal{O}$; the resulting order-reversing bijection between
   radical ideals and analytic-set germs. Cite/contrast the
   *algebraic* Nullstellensatz `04.02.07`. Depends on `06.10.14`.
   **Highest-priority Vol. II anchor.**

2. **`06.10.18` Analytic sets: local parametrisation, dimension, and
   irreducible components.** **[Gunning-only — NEW]** Gunning Vol. II;
   Weierstrass/Rückert/Remmert. ~2400 words. **Largest priority-1
   unit.** Master: analytic-set germ; the **local parametrisation
   theorem** — every $d$-dimensional irreducible germ is a finite
   branched holomorphic cover of a $d$-dimensional coordinate polydisc,
   via iterated Weierstrass preparation; irreducible decomposition into
   finitely many components (Noetherian $\Rightarrow$ primary
   decomposition); **dimension** of a germ; the regular locus is dense
   and open, the singular locus is a proper analytic subset of strictly
   lower dimension. Worked: the cusp $z_2^2 = z_1^3$ as a $1$-dim
   irreducible germ with one singular point; $\{z_1 z_2 = 0\}$ as a
   reducible germ. Depends on items 1, `06.10.14`. **Load-bearing for
   the coherence and complex-space units.**

3. **`06.10.19` The local ring of an analytic set; regular points,
   singular locus, Remmert–Stein.** **[Gunning-only — NEW]** Gunning
   Vol. II; Remmert–Stein 1953 (Math. Ann. 126). ~1800 words. Master:
   the local ring $\mathcal{O}_{V,p} = {}_n\mathcal{O}/\mathcal{I}(V)$;
   regular (smooth) points where $V$ is locally a submanifold and
   $\mathcal{O}_{V,p}$ is itself a convergent-power-series ring;
   $\dim_{\mathbb{C}} \mathfrak{m}/\mathfrak{m}^2$ as the embedding
   dimension; the **Remmert–Stein removable-singularity theorem** (an
   analytic set extends across a lower-dimensional analytic set under a
   dimension hypothesis); pointer to normalisation. Depends on items 1, 2.

### Priority 2 — the homological spine (Gunning Vol. III)

Gunning's sheaf-theoretic distinctive blocks. The coherent-*analytic*
sheaf and Oka coherence are the genuine gaps; the $n\geq2$ Theorems A/B
is a promotion of the existing survey.

4. **`06.10.20` Coherent analytic sheaves and Oka's coherence theorem.**
   **[Gunning-only — NEW, flagship]** Gunning Vol. III; Oka 1950 (Bull.
   Soc. Math. France 78) / Cartan 1950 originators. ~2400 words.
   **Deepest Gunning-distinctive unit.** Master: sheaf of
   $\mathcal{O}_{\mathbb{C}^n}$-modules; **coherent** = locally finite
   type with locally finitely-generated relation sheaf; the **three Oka
   coherence theorems** — (i) $\mathcal{O}_{\mathbb{C}^n}$ is coherent
   over itself (the relation sheaf of finitely many holomorphic
   functions is locally finitely generated, proved by Weierstrass
   division), (ii) the ideal sheaf $\mathcal{I}(V)$ of an analytic set is
   coherent, (iii) the structure sheaf $\mathcal{O}_V$ of an analytic set
   is coherent. Contrast the *algebraic* coherent sheaf `04.06.02`
   (Hartshorne/Serre framing) explicitly: coherence is automatic on a
   Noetherian scheme but is a **theorem** in the analytic category.
   Depends on items 1, 2; cross-ref `06.10.14`, `04.06.02`.

5. **`06.10.21` Cartan Theorems A and B in $\mathbb{C}^n$ (with proof).**
   **[Composite — Krantz 3.23 (Cousin) / Gunning-distinctive]** Gunning
   Vol. III; Cartan séminaire 1951–53; Cartan–Serre 1953 originators.
   ~2200 words. **DEEPEN** of the existing survey `06.09.08`: promote
   the higher-dimension Theorems A and B from survey to proof. Master:
   for $\mathcal{F}$ coherent analytic on a Stein open $\Omega \subseteq
   \mathbb{C}^n$ (e.g. a polydisc, a domain of holomorphy), **Theorem B**
   $H^q(\Omega, \mathcal{F}) = 0$ for $q \geq 1$ (proved via the
   $\bar\partial$-$L^2$ solvability of `06.10.04` for the structure
   sheaf, then bootstrapped through coherent resolutions of item 4) and
   **Theorem A** (global sections generate every stalk). Deduce Cousin
   I/II, the Levi-problem-by-sheaves route, and Oka's principle as
   corollaries — cross-ref `06.10.05`, `06.10.11`, the dimension-one
   `06.09.02`, and the survey `06.09.08`. Depends on items 2, 4,
   `06.10.04`. **Load-bearing payoff of Vol. III.**

### Priority 3 — complex spaces, finiteness, survey

6. **`06.10.22` Complex spaces and coherence on them.** **[Gunning-only
   — NEW, survey-leaning]** Gunning Vol. III; Cartan/Serre/Grauert.
   ~1600 words. Master: a **complex space** as a locally ringed space
   locally isomorphic to an analytic-set model $(V, \mathcal{O}_V)$ in
   some polydisc; reduced vs non-reduced (nilpotents in the structure
   sheaf); morphisms of complex spaces; coherence of $\mathcal{O}_X$;
   Stein spaces and the extension of Theorems A and B; pointer to
   Grauert's direct-image coherence theorem. Depends on items 3, 4, 5.

7. **`06.10.23` Survey: the Oka–Cartan route into SCV and its
   relation to the analytic and algebraic routes.** **[Gunning-only —
   pointer]** Master-only; ~900 words. Situate Gunning's local-algebra /
   sheaf programme against (a) the Krantz hard-analysis route
   (`06.10.04`–`06.10.10`), (b) the dimension-one Stein chapter
   (`06.09.*`), and (c) the scheme-theoretic algebraic geometry of
   chapter 04 (`04.06.02`, `04.03.01`, GAGA). Cross-link to
   `06.09.08`. Closes the Gunning chapter's narrative.

### Priority 4 — ENRICH passes on shipped Vol. I units + notation

8. **ENRICH `06.10.01`–`06.10.12` with Gunning framing.**
   **[Composite — Krantz 3.23]** No new ids. For each shipped Vol. I unit
   add, where natural, a sentence or Connections bullet giving Gunning's
   local-ring / coherent-sheaf perspective (e.g. on `06.10.05`, note the
   sheaf-theoretic proof of the Levi problem via Theorem B as the
   complement to the $\bar\partial$ proof; on `06.10.11`, the $H^1/H^2$
   coherent-cohomology obstruction). Light touch; provenance only.

9. **ENRICH `06.07.01`, `06.07.02` with the germ-ring entry point.**
   **[Composite — Krantz 3.23]** No new ids. Add the germ
   ${}_n\mathcal{O}_a$ and the forward pointer to `06.10.14`/`06.10.17`
   so the entry units name the local-algebra route Gunning opens.

10. **Notation crosswalk (`notation/gunning.md`).** **[Gunning-only]**
    ${}_n\mathcal{O}$, ${}_n\mathcal{O}_a$ (germ ring / stalk at $a$);
    $\mathcal{V}(I)$, $\mathcal{I}(V)$, $\mathrm{loc}$, $\sqrt{I}$;
    coherent analytic sheaf $\mathcal{F}$, relation sheaf
    $\mathcal{R}(\sigma_1,\dots,\sigma_p)$; complex space
    $(X, \mathcal{O}_X)$. Reconcile with the $\mathcal{O}_n$ used in
    `06.10.14`. ~500 words.

---

## §4 Implementation sketch (P3 → P4)

**Minimum Gunning-equivalence batch** = priority 1 + 2 (items 1–5): 5
new/deepened units (`06.10.17`–`06.10.21`). This establishes the
local-theory spine (Nullstellensatz, analytic sets, dimension) and the
homological spine (coherent analytic sheaves, Oka coherence, $n\geq2$
Theorems A/B) — the entire Gunning-distinctive content. Vol. I needs
**zero new units**.

Production estimate (mirroring the Krantz batch): ~3 h/typical unit,
~4 h for the two load-bearing units (item 2 analytic sets, item 4 Oka
coherence), ~2 h for the A/B promotion (item 5, scaffolded by `06.09.08`
+ `06.09.02`). Priority 1 ≈ **10 h**; priority 1+2 ≈ **17 h**; +priority
3 ≈ **22 h**; ENRICH + notation (items 8–10) ≈ 3 h at integration. At
3–4 parallel agents the whole Gunning-distinctive build fits a ~2-day
window.

**Batch structure.**

- **Batch A (local-theory spine, items 1, 2, 3, ~10 h):** the
  Nullstellensatz (1) and analytic sets (2) are mutually load-bearing;
  produce together; item 3 follows. All depend on the shipped
  `06.10.14`.
- **Batch B (homological spine, items 4, 5, ~7 h):** coherent analytic
  sheaves + Oka coherence (4) depends on Batch A; the $n\geq2$ A/B
  promotion (5) depends on item 4 and the shipped `06.10.04`.
- **Batch C (complex spaces + survey, items 6, 7, ~5 h):** after
  Batch A–B land.
- **ENRICH + notation (items 8, 9, 10):** integration-time, after the
  new units exist so the cross-references resolve.

**Originator-prose targets** (each Master section cites originator +
Gunning):

- Local Nullstellensatz (1): Rückert 1933 (Math. Ann. 107);
  cf. Gunning Vol. II.
- Analytic sets / local parametrisation (2): Weierstrass; Rückert;
  Remmert.
- Remmert–Stein (3): Remmert–Stein 1953 (Math. Ann. 126).
- Oka coherence (4): Oka 1950 (Bull. Soc. Math. France 78, the VIIᵉ
  mémoire); H. Cartan 1950 (Bull. SMF 78). Originator voice mandatory.
- Theorems A and B (5): H. Cartan, séminaire ENS 1951–53;
  Cartan–Serre 1953 (CRAS 237). Originator voice mandatory.
- Complex spaces (6): H. Cartan 1957 (séminaire); Grauert–Remmert.

**DAG edges to add** (priority 1+2+3):

- `06.10.17` (analytic Nullstellensatz) ← {`06.10.14`}; xref `04.02.07`
- `06.10.18` (analytic sets) ← {`06.10.17`, `06.10.14`}
- `06.10.19` (local ring of an analytic set; Remmert–Stein) ←
  {`06.10.17`, `06.10.18`}
- `06.10.20` (coherent analytic sheaves; Oka coherence) ←
  {`06.10.18`, `06.10.14`}; xref `04.06.02`, `04.01.01`
- `06.10.21` (Theorems A/B in $\mathbb{C}^n$) ← {`06.10.20`,
  `06.10.04`, `06.09.02`}; → enriches `06.09.08`, `06.10.05`,
  `06.10.11`
- `06.10.22` (complex spaces) ← {`06.10.19`, `06.10.20`, `06.10.21`}
- `06.10.23` (Oka–Cartan-route survey) ← {`06.10.21`, `06.09.08`}

**Composite Gunning + Krantz (3.23) accounting.** Krantz (hard analysis)
and Gunning (local algebra / coherent sheaves) overlap on (a) **all of
Vol. I function theory** — already shipped as `06.10.01`–`06.10.12` from
the Krantz batch (ENRICH only here), and (b) the **Weierstrass
preparation/division** unit `06.10.14`, already produced once as a
composite serving both. The Levi problem is the meeting point: `06.10.05`
gives Krantz's $\bar\partial$ proof; the Gunning sheaf-theoretic proof
(via Theorem B) is added as Advanced-results material in the new
`06.10.21` and cross-referenced from `06.10.05`. **Gunning owns the
local-algebra spine (`06.10.17`–`06.10.19`) and the coherent-sheaf /
Oka-coherence / complex-space spine (`06.10.20`, `06.10.22`); the $n\geq2$
Theorems A/B (`06.10.21`) is shared payoff.** No double production: the
Krantz batch's unshipped `06.10.10`/`06.10.13`/`06.10.15` slots
($\bar\partial$-Neumann, Fefferman mapping, $\bar\partial_b$) remain
Krantz-only and are untouched here; Gunning's new units take the
`06.10.17`+ block to avoid any collision.

---

## §5 What this plan does NOT cover

- **All of Gunning Vol. I** beyond ENRICH: domains of holomorphy, PSH,
  pseudoconvexity, the $\bar\partial$-$L^2$ method, the Levi problem,
  Cousin, Bochner–Martinelli, Cauchy–Fantappiè, Bergman/Szegő, invariant
  metrics. **Already shipped** as `06.10.01`–`06.10.12` from the Krantz
  3.23 batch; this plan only adds Gunning framing, no new units.
- **Krantz-distinctive hard analysis** with no Gunning analogue: the
  $\bar\partial$-Neumann problem and subelliptic estimates, Fefferman
  boundary asymptotics, the Fefferman biholomorphic-mapping theorem,
  Wong–Rosay beyond the shipped `06.10.16`. Owned by the Krantz audit
  (its unshipped `06.10.10`/`06.10.13`/`06.10.15` follow-up).
- **Line-number-level inventory** of every proposition/exercise across
  Gunning's three volumes. Gunning is exercise-sparse; a dedicated
  SCV-exercise-pack pass is deferred.
- **Grauert's deep theorems** beyond a pointer: the direct-image
  coherence theorem, the Grauert–Riemenschneider vanishing, the theory
  of pseudoconvex/holomorphically-convex complex spaces and their
  Remmert reduction. Item 6 names complex spaces and points to direct
  images; the full Grauert theory is a separate audit if/when added.
- **Scheme-theoretic algebraic geometry** (Hartshorne/Vakil): the
  algebraic coherent sheaf `04.06.02`, algebraic Nullstellensatz
  `04.02.07`, scheme cohomology `04.03.*`, GAGA. Gunning's analytic
  units *contrast* with these but do not re-derive them; GAGA is a
  pointer in item 7.
- **Dimension-one Stein / Cousin / Mittag-Leffler / Runge** — shipped in
  `06.09.01-07` (Forster-derived). The $n\geq2$ Theorems A/B (item 5)
  cross-references but does not re-derive the dimension-one case
  `06.09.02`.
- **Several-variable value-distribution / Nevanlinna theory**, currents
  and Lelong numbers, and the deep singularity theory of analytic sets
  (resolution, Whitney stratification beyond the regular/singular
  dichotomy of item 3). Out of scope.

---

## §6 Acceptance criteria for FT equivalence (Gunning)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, the book is
at equivalence-coverage when:

- ≥95% of Gunning's named theorems map to Babel Bible units **at
  Gunning-equivalent proof depth**. Vol. I is already there (~85–90% via
  the Krantz batch). Vols. II–III rise from ~22% to ~85% after priority
  1+2 (items 1–5): the local Nullstellensatz, analytic-set
  parametrisation/dimension, coherent analytic sheaves, Oka coherence,
  and the $n\geq2$ Theorems A/B are the named results that gate this.
- ≥80% of Gunning's (sparse) exercises have a Codex equivalent — met by
  the standard 7-block on each new `06.10.17`–`06.10.22` unit plus the
  shipped `06.10.*` blocks.
- ≥90% of Gunning's worked examples reproduced — the new Vol. II units
  must carry the cusp germ $z_2^2 = z_1^3$, the reducible germ
  $\{z_1 z_2 = 0\}$, the branched-cover normal form, and (Vol. III) the
  coherence of $\mathcal{O}_{\mathbb{C}^n}$ on a polydisc as required
  worked examples.
- Notation alignment recorded in `notation/gunning.md` (item 10),
  reconciled with the $\mathcal{O}_n$ of `06.10.14`.
- DAG `prerequisites` arrows for the Vol. II–III dependency chain:
  **Weierstrass (`06.10.14`) → local Nullstellensatz (`06.10.17`) →
  analytic sets (`06.10.18`) → local ring / Remmert–Stein (`06.10.19`) →
  coherent analytic sheaves + Oka coherence (`06.10.20`) → Theorems A/B
  in $\mathbb{C}^n$ (`06.10.21`) → complex spaces (`06.10.22`)** must be
  unbroken after the priority 1+2 batch.
- Pass-W weaving connects the new local/sheaf units to: the shipped
  Vol. I function-theory units (`06.10.01`–`06.10.12`), especially the
  Levi problem `06.10.05` (sheaf-theoretic proof complement) and Cousin
  `06.10.11` (cohomological obstruction); the dimension-one Theorems A/B
  `06.09.02` and the higher-dim survey `06.09.08` (now upgraded by
  `06.10.21`); the algebraic coherent sheaf `04.06.02` and algebraic
  Nullstellensatz `04.02.07` (explicit analytic-vs-algebraic contrast);
  and the sheaf machinery `04.01.01-03`, `04.03.01`.

**Honest scope.** **High existing coverage — but for a non-obvious
reason.** Unlike the Krantz audit (which faced a near-empty
$\mathbb{C}^n$ footprint and specced a 14-unit new-chapter build), the
Gunning audit arrives *after* the Krantz batch has shipped 13 units, so
**Gunning Vol. I is already ~90% covered** and the whole function-theory
half of the book is **ENRICH, not build**. The genuine work is the
**~6-unit NEW build of Gunning's two distinctive volumes** — the local
theory (Nullstellensatz, analytic sets, dimension, local rings:
`06.10.17`–`06.10.19`) and the homological theory (coherent analytic
sheaves, Oka's coherence theorem, the $n\geq2$ Cartan Theorems A and B,
complex spaces: `06.10.20`–`06.10.22`). The single deepest
Gunning-distinctive unit is **Oka's coherence theorem** (`06.10.20`),
which has no dedicated unit anywhere in Babel Bible (only one-line
mentions); the single most load-bearing is the **analytic-sets /
local-parametrisation unit** (`06.10.18`), on which coherence and complex
spaces both depend. The composite accounting with Krantz 3.23 saves the
entire Vol. I function-theory build and the Weierstrass unit; everything
remaining is Gunning-distinctive local-algebra and sheaf theory.
