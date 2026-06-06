# Completeness re-audit — Norris, *Markov Chains* (CUP, 1997)

- **source_book:** `norris-markov-chains`
- **source_curriculum:** `probability`
- **target chapter:** `content/37-probability/05-markov-chains/`
- **date:** 2026-06-05
- **context:** The probability spine has been fully produced. The original `norris-markov-chains.gaps.md` (against an empty chapter) proposed 12 units (37.05.01–12); **all 12 are now shipped on disk.** This pass re-checks Norris's headline theorems/constructions against the *now-larger* corpus to find any that remain genuinely absent.

## Method

Enumerated Norris's headline results (Ch. 1 discrete-time §1.1–1.10, Ch. 2 continuous-time §2.1–2.10, Ch. 3 long-run/CT-equilibrium, plus the Poisson-process and applications material) and grepped each against `content/37-probability/05-markov-chains/*.md` and the wider corpus. Shipped units span Norris §1.1–1.10 and §2.1–2.9 in their tier anchors — i.e. the full core of both chapters.

## Headline theorem → coverage map (all COVERED)

| Norris headline | Shipped id |
|---|---|
| Markov property, transition matrix, Chapman–Kolmogorov, law from (λ,P) | **37.05.01** |
| Class structure, communication, irreducibility, period as class property | **37.05.02** |
| Hitting probabilities / mean hitting times as minimal non-neg. solutions; gambler's ruin | **37.05.03** |
| Strong Markov property; recurrence/transience dichotomy via Σpⁿᵢᵢ; solidarity; **Pólya's theorem** (SRW on Zᵈ recurrent d≤2, transient d≥3) | **37.05.04** |
| Invariant measures via excursion/return-time construction; existence+uniqueness for irreducible recurrent; positive vs null recurrence; **Kac formula** πᵢ=1/mᵢ | **37.05.05** |
| Convergence to equilibrium (aperiodic irreducible positive-recurrent), **coupling proof**; periodic statement | **37.05.06** |
| Ergodic theorem for additive functionals; **reversibility / detailed balance**; **time-reversed chain** (reversal characterisation, Prop 2); **Metropolis–Hastings** | **37.05.07** |
| CT chains: Q-matrices, jump chain + exponential holding times, minimal construction, explosion / non-explosion | **37.05.08** |
| Kolmogorov backward & forward equations; semigroup P(t)=e^{tQ} | **37.05.09** |
| CT recurrence/transience, invariant distribution πQ=0, convergence, CT detailed balance | **37.05.10** |
| Poisson process: three equivalent characterizations, superposition/thinning, order-statistics property | **37.05.11** |
| Birth–death processes; M/M/1 / M/M/∞ queues; stability λ<μ; stationary geometric law | **37.05.12** |

### Items checked and confirmed not new gaps

- **Time reversal / the reversed chain (Norris §1.9).** Fully proven in 37.05.07 (Proposition 2: $\hat p_{ij}=\pi_j p_{ji}/\pi_i$ stochastic, equals the law of the stationary chain reversed; reversibility ⇔ $\hat P=P$ ⇔ detailed balance). Not absent.
- **Pólya's recurrence theorem (SRW on Zᵈ).** Stated and reasoned in 37.05.04 (recurrent d≤2, transient d≥3; Spitzer/Pólya references; $p^{(2n)}_{00}\sim c_d n^{-d/2}$). Not absent.
- **Kac formula** ($\pi_i=1/\mathbb E_i[T_i]$). Derived twice in 37.05.05 via renewal-reward. Not absent.
- **Metropolis–Hastings / MCMC reversible construction.** Built in 37.05.07 as the application of detailed balance + ergodic theorem. Not absent.
- **Branching (Galton–Watson) processes.** A motivating *example* in Norris, not a headline MC theorem; canonically covered in the corpus under martingales — **37.04.02** (extinction via martingale convergence). Correctly not a Markov-chains-chapter unit.
- **MCMC algorithm engineering, Markov decision processes, biological/chemical worked case studies (Norris Ch. 5 applications).** Out of scope per the original audit; their theorem basis is in 37.05.06–07. No headline theorem is stranded.

## DRY?

**DRY — 0 new genuine gaps.** Every headline theorem and construction in Norris maps to a shipped unit (37.05.01–12), with the distinctive Norris results — Pólya's theorem, the Kac formula, the time-reversed chain, coupling convergence, the minimal-construction/explosion theory, and the Kolmogorov backward/forward equations — all present and proven. The original 12-unit spine fully discharges the book; the freshly produced chapter leaves nothing of real value absent. No free 37.05.* slot needs filling.

## RETURN SUMMARY
- **New genuine gaps:** 0
- **Verdict:** DRY
