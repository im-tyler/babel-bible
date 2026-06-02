import PageHeader from "../../components/PageHeader";
import DisclaimerBanner from "../../components/DisclaimerBanner";
import { derivations, sharedDigits } from "../../math/derivations";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Constant derivations — Polymath",
    description:
      "Grant claims to derive measured constants 'with no free parameters.' We compute each one and show why that claim is false.",
  };
}

export default function ConstantDerivations() {
  const ds = derivations();

  return (
    <article>
      <PageHeader
        kicker="The Claims"
        title="Constant 'derivations'"
        tier="claim"
        lede="Grant presents formulas that reproduce measured constants and calls them derivations 'with no free parameters.' Each one does evaluate close to its target — because it was built to. Here they are, computed."
      />

      <DisclaimerBanner />

      <div class={styles.derivs}>
        {ds.map((d) => {
          const digits = sharedDigits(d.computed, d.measured);
          return (
            <div class={styles.deriv}>
              <div class={styles.derivHead}>
                <span class={styles.target}>{d.target}</span>
                <span class={styles.formula}>= {d.formula}</span>
              </div>
              <dl class={styles.nums}>
                <dt>computed</dt>
                <dd>{d.computed.toPrecision(8)}</dd>
                <dt>measured</dt>
                <dd>{d.measured.toPrecision(8)}</dd>
                <dt>agreement</dt>
                <dd>~{digits} significant digits</dd>
              </dl>
              <p class={styles.derivNote}>{d.note}</p>
            </div>
          );
        })}
      </div>

      <p class={styles.note}>
        <strong>Why "no free parameters" is false:</strong> the free parameter is the <em>choice of formula</em>.
        Given a target value and a large menu of pieces — π, φ, √10, small integers like 6, 42, 360, 493,
        720, powers of 10, and "correction" terms — you can assemble an expression that hits almost any number
        to several digits. Agreement to 4–6 digits from a hand-picked formula is what coincidence looks like,
        not what derivation looks like. None of these predicts a new measurement.
      </p>
    </article>
  );
}
