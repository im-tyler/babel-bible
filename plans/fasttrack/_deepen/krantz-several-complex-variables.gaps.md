# Krantz — *Function Theory of Several Complex Variables* (FT 3.23) — Deepening gap file (Phase 2)

**Re-audited:** 2026-06-04 against the live 1414-unit corpus.

**Verdict.** The original audit (written when Babel Bible had only two
templated SCV stubs) is now almost entirely **stale**: the
`06.10-several-complex-variables/` chapter has been built out into a 22-unit
spine that covers the entire Krantz Part-I/Part-II programme — domains of
holomorphy, plurisubharmonicity, the Levi form, Hörmander $L^2$
$\bar\partial$, the Levi problem, Bochner-Martinelli / Cauchy-Fantappiè /
Henkin-Ramirez kernels, the Bergman and Szegő kernels with Fefferman
boundary asymptotics, Cousin in $\mathbb{C}^n$, invariant metrics,
Weierstrass preparation, Wong-Rosay rigidity, plus the Gunning-Rossi
local-algebra block (Nullstellensatz, analytic sets, coherent sheaves,
Cartan A/B, complex spaces). Of the original 20-item punch-list, **17 are
now COVERED**.

Only **3 genuine gaps** remain — all three already cited as forward
("pending"/dangling) references by existing units, confirming they are real
holes the chapter expects to be filled:

---

## Genuine gaps

### Gap 1 — `06.10.10` The $\bar\partial$-Neumann problem and subelliptic estimates
- **id:** `06.10.10` (free slot; `06.10.09` and `06.10.11` occupied, `.10` empty)
- **title:** The $\bar\partial$-Neumann problem and subelliptic estimates
- **spec:** The complex Laplacian $\Box = \bar\partial\bar\partial^* + \bar\partial^*\bar\partial$; the Friedrichs/Hilbert-space ($\bar\partial$-Neumann boundary) formulation; the basic estimate; Kohn's subelliptic $1/2$-estimate on strongly pseudoconvex domains; Hörmander's Condition $Z(q)$; boundary regularity (Kohn-Nirenberg). The Neumann operator $N$ and the canonical solution operator.
- **prereqs:** `06.10.03` (pseudoconvexity / Levi form), `06.10.04` (Hörmander $L^2$ $\bar\partial$)
- **chapter dir:** `content/06-riemann-surfaces/10-several-complex-variables/`
- **frontmatter:** `section: riemann-surfaces`, `chapter: several-variables`
- **why genuine:** No dedicated unit anywhere. `06.10.04` mentions "Neumann"/$\Box$ 8× but as cross-pointers, not the boundary-value problem itself; `06.10.09` cites "the $\bar\partial$-Neumann operator $N$" and "subelliptic gain" as a black box it relies on. This is Krantz's deepest distinctive block (Ch. 8-10) and is the load-bearing input to the Fefferman asymptotics already shipped in `06.10.09`. Flagship priority. ~2400 words.

### Gap 2 — `06.10.13` Automorphism groups and the Fefferman mapping theorem
- **id:** `06.10.13` (free slot; `.12` and `.14` occupied, `.13` empty)
- **title:** Automorphism groups and the Fefferman mapping theorem
- **spec:** $\mathrm{Aut}(\Omega)$ as a (real) Lie group; the ball vs. polydisc automorphism groups and their non-biholomorphism (Poincaré); the Fefferman mapping theorem — a biholomorphism between smoothly bounded strongly pseudoconvex domains extends $C^\infty$ to the boundary — via the Bergman-kernel boundary asymptotics. Cartan's automorphism-group theorem.
- **prereqs:** `06.10.09` (Szegő / Fefferman boundary asymptotics), `06.10.12` (invariant metrics)
- **chapter dir:** `content/06-riemann-surfaces/10-several-complex-variables/`
- **frontmatter:** `section: riemann-surfaces`, `chapter: several-variables`
- **why genuine:** The file does not exist, yet **three** shipped units cite `06.10.13` as the home of the mapping-theorem proof: `06.10.09` ("the Fefferman mapping theorem proved in [06.10.13]"), `06.10.12` ("[06.10.13] (pending)"), and `06.10.16`. This is a dangling forward-reference — a real structural hole. (`06.10.16` Wong-Rosay discusses the mapping *mechanism* but is the rigidity/scaling unit, not the Aut-group + mapping-theorem statement unit.) ~1800 words.

### Gap 3 — `06.10.15` Tangential Cauchy-Riemann complex $\bar\partial_b$ and the Lewy example
- **id:** `06.10.15` (free slot; `.14` and `.16` occupied, `.15` empty)
- **title:** The tangential CR complex $\bar\partial_b$ and the Lewy non-solvability example
- **spec:** The induced CR structure on a real hypersurface $\partial\Omega \subset \mathbb{C}^n$; the tangential Cauchy-Riemann operator $\bar\partial_b$; the Hans Lewy non-solvable equation; pointer to CR embeddability (Kohn-Rossi / Boutet de Monvel). Survey-leaning.
- **prereqs:** `06.10.03` (pseudoconvexity / Levi form), `06.10.10` (the $\bar\partial$-Neumann problem — Gap 1)
- **chapter dir:** `content/06-riemann-surfaces/10-several-complex-variables/`
- **frontmatter:** `section: riemann-surfaces`, `chapter: several-variables`
- **why genuine:** `\bar\partial_b` appears only as in-passing mentions inside the kernel units (`06.10.06`, `06.10.07`, `06.10.09`) and the Lewy operator has no unit anywhere in `content/` (grep for "lewy" returns only the unrelated d'Alembert/spin units). Pointer-level acceptable per original audit item 17. ~1500 words.

---

## COVERED (not gaps) — verified against `content/`

Original punch-list items now satisfied by shipped units:

- **Domains of holomorphy, holomorphic convexity, Cartan-Thullen** → `06.10.01-domains-of-holomorphy-and-holomorphic-convexity` (file title contains Cartan-Thullen content; verified).
- **Plurisubharmonic functions** → `06.10.02-plurisubharmonic-functions`.
- **Pseudoconvexity and the Levi form** → `06.10.03-pseudoconvexity-and-the-levi-form`.
- **$\bar\partial$ with Hörmander $L^2$ estimates (several-variable)** → `06.10.04-dbar-equation-hormander-l2-estimates`.
- **Solution of the Levi problem** → `06.10.05-solution-of-the-levi-problem`.
- **Bochner-Martinelli kernel & formula** → `06.10.06-bochner-martinelli-kernel-and-formula`.
- **Cauchy-Fantappiè & Henkin-Ramirez kernels (sup-norm / Hölder-$1/2$)** → `06.10.07-cauchy-fantappie-and-henkin-ramirez-kernels`.
- **Bergman kernel and Bergman metric** → `06.10.08-bergman-kernel-and-bergman-metric`.
- **Szegő kernel and Fefferman boundary asymptotics** → `06.10.09-szego-kernel-and-fefferman-boundary-asymptotics`.
- **Cousin I/II and the Levi problem in $\mathbb{C}^n$; Oka-Weil** → `06.10.11-cousin-i-ii-and-the-levi-problem-in-mathbb-c-n`.
- **Invariant metrics (Carathéodory, Kobayashi, Bergman); $\mathrm{Aut}$ basics** → `06.10.12-invariant-metrics-caratheodory-kobayashi-bergman`.
- **Weierstrass preparation and division** → `06.10.14-weierstrass-preparation-and-division` (composite with GR 3.24).
- **Wong-Rosay theorem and boundary rigidity** → `06.10.16-wong-rosay-theorem-and-boundary-rigidity`.
- **Hartogs phenomenon** → `06.07.02-hartogs-phenomenon` (shipped; Bochner-Martinelli proof now cross-referenced from `06.10.06`).
- **Holomorphic functions of several variables; polydisc Cauchy; multi-index; overdetermined CR** → `06.07.01-holomorphic-several-variables` (shipped, `lean_status: partial`).
- **Local-algebra / Gunning-Rossi-side block (out of Krantz scope but corpus-present):** local analytic Nullstellensatz `06.10.17`, analytic sets / parametrisation `06.10.18`, local ring / Remmert-Stein `06.10.19`, coherent analytic sheaves / Oka coherence `06.10.20`, Cartan A & B in $\mathbb{C}^n$ `06.10.21`, complex spaces `06.10.22`.

### Deepening notes (not missing-unit gaps; tracked separately)
- `06.07.01` and `06.07.02` are `status: shipped` but each retains one templated "transparent sheets" Intuition paragraph and sit at ~1750 words; the original audit's items 6-7 (multi-index / distinguished-boundary / Osgood depth for `.01`; full Bochner-Martinelli proof for `.02`) are partly addressed via cross-references to `06.10.06`. These are in-place *deepening* candidates, not gaps — no new id.

### Notation
- `notation/krantz.md` (original item 20) does **not** exist. Optional crosswalk, not counted as a theorem-layer gap.
