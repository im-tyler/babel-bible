import PageHeader from "../../components/PageHeader";
import { constantChecks } from "../../math/constants";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Constants, computed",
    description:
      "Standard identities for π and φ, each computed to 24 digits so you can confirm the equality is exact rather than taking it on faith.",
  };
}

export default function Constants() {
  const checks = constantChecks(24);

  return (
    <article>
      <PageHeader
        kicker="Foundations"
        title="Constants, computed"
        tier="standard"
        lede="A constant identity is only worth stating if it is exact. Rather than take any equality on faith, this page evaluates each expression to 24 digits and shows how many agree with the true value."
      />

      <div class={styles.checks}>
        {checks.map((c) => (
          <div class={styles.check}>
            <div class={styles.checkHead}>
              <span class={styles.symbol}>{c.symbol}</span>
              <span class={styles.identity}>= {c.identity}</span>
            </div>
            <dl class={styles.values}>
              <dt>computed</dt>
              <dd>{c.computed}</dd>
              <dt>true value</dt>
              <dd>{c.reference}</dd>
              <dt>agreement</dt>
              <dd class={c.exact ? styles.match : styles.mismatch}>
                {c.exact
                  ? `exact — matches to all ${c.agreeingDigits}+ digits`
                  : `only ~${c.agreeingDigits} digits, then diverges`}
              </dd>
            </dl>
            <p class={styles.checkNote}>{c.note}</p>
          </div>
        ))}
      </div>

      <p class={styles.note}>
        <strong>Why this matters:</strong> both expressions are genuine identities — they equal the constant
        exactly, to as many digits as you care to compute, cross-checked against an independent formula. This
        is the discipline applied throughout the site: an "identity" that only agreed to a handful of digits
        and then drifted would be a near-coincidence, not an identity, and would not be shown here.{" "}
        <a href="/methodology">Compute, don't trust.</a>
      </p>
    </article>
  );
}
