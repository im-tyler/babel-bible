import PageHeader from "../../components/PageHeader";
import DisclaimerBanner from "../../components/DisclaimerBanner";
import PrimePlot from "../../components/PrimePlot";
import { MathInline } from "../../components/MathBlock";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Primes & Riemann — Polymath",
    description:
      "Grant publishes a 'proof of the Riemann Hypothesis' and zero-variance prime prediction. RH is unsolved. Here is the real mathematics — π(x) vs Li(x) — that these claims sit on top of.",
  };
}

export default function PrimesRiemann() {
  return (
    <article>
      <PageHeader
        kicker="The Claims"
        title="Primes & the Riemann Hypothesis"
        tier="claim"
        lede="Grant's framework claims a proof of the Riemann Hypothesis and a 'quasi-prime' method that predicts every prime with zero variance. The Riemann Hypothesis is an open Millennium Problem; no such proof is accepted."
      />

      <DisclaimerBanner>
        <strong>Not accepted mathematics.</strong> The Riemann Hypothesis remains unproven. No method predicts
        primes with zero error. The plot below is the genuine, standard relationship; the "proof" and the
        "zero-variance" prediction are the unverified claims.
      </DisclaimerBanner>

      <div class={styles.prose}>
        <h2>The real picture</h2>
        <p>
          The prime-counting function <MathInline tex="\pi(x)" /> (how many primes are ≤ x) is closely tracked
          by the logarithmic integral <MathInline tex="\operatorname{Li}(x)" />. The Riemann Hypothesis is,
          loosely, a statement about how tightly. Both curves below are computed here from a real sieve and
          numerical integration — no framework involved.
        </p>
      </div>

      <PrimePlot max={1000} />

      <div class={styles.prose}>
        <h2>The quasi-prime method</h2>
        <p>
          Grant's "quasi-primes" (numbers indivisible by 2 or 3, built from primes &gt; 3) and their
          digital-root-9 behaviour are real modular arithmetic — that part is checkable and true. But "digits
          of reciprocals sum to 9" is a base-10 fact about numbers coprime to 9, not a path to the Riemann
          Hypothesis. The leap from a tidy base-10 pattern to a proof of RH is where the claim fails.
        </p>
      </div>

      <p class={styles.note}>
        <strong>Buildable vs claimed:</strong> the π(x)/Li(x) plot and the quasi-prime construction are real
        and reproduced faithfully. The proof of RH and zero-variance prime prediction are not — they are
        presented here only to be examined and labelled, never asserted.
      </p>
    </article>
  );
}
