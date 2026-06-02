import PageHeader from "../../components/PageHeader";
import TierBadge from "../../components/TierBadge";
import { constantChecks } from "../../math/constants";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Constants — Polymath",
    description:
      "Grant's 'conic identities' for constants, each computed to 24 digits so you can see which are exact and which are near-coincidences.",
  };
}

export default function Constants() {
  const checks = constantChecks(24);

  return (
    <article>
      <PageHeader
        kicker="Foundations"
        title="Constants, self-verified"
        tier="real"
        lede="Grant presents many 'conic identities' for fundamental constants. Rather than take them on faith, this page computes each one to 24 digits and shows exactly how many agree with the true value."
      />

      <div class={styles.checks}>
        {checks.map((c) => (
          <div class={styles.check}>
            <div class={styles.checkHead}>
              <span class={styles.symbol}>{c.symbol}</span>
              <span class={styles.identity}>= {c.identity}</span>
              <TierBadge tier={c.tier} />
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
        <strong>Why this matters:</strong> the first two are genuine identities — they equal the constant
        exactly, to as many digits as you compute. The √10 expression is the kind of thing the Codex calls a
        "resonant mirror": it agrees to about four digits and then drifts. Computing it to 24 places turns an
        impressive-looking claim into a visible near-coincidence. That is the whole method of this site —{" "}
        <a href="/how-to-read">compute, don't trust</a>.
      </p>
    </article>
  );
}
