import styles from "./TierBadge.module.css";

export type Tier = "verified" | "standard";

const LABEL: Record<Tier, string> = {
  verified: "Verified",
  standard: "Standard",
};

const TITLE: Record<Tier, string> = {
  verified: "Proven in the audit (symbolic and/or Lean-checked)",
  standard: "Standard, textbook mathematics",
};

/**
 * Marks the standing of each page's content.
 *  - verified: a result proven as part of the audit (sympy and/or Lean).
 *  - standard: ordinary textbook mathematics.
 * Text label + color (color is never the only signal — accessibility).
 */
export default function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span class={`${styles.badge} ${styles[tier]}`} title={TITLE[tier]}>
      <span class={styles.dot} aria-hidden="true" />
      {LABEL[tier]}
    </span>
  );
}
