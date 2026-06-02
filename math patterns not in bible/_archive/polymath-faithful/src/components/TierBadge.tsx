import styles from "./TierBadge.module.css";

export type Tier = "real" | "his" | "claim" | "content";

const LABEL: Record<Tier, string> = {
  real: "Standard",
  his: "Grant Construct",
  claim: "Unverified Claim",
  content: "Content",
};

/**
 * The honesty primitive. Every claim-bearing surface carries one of these.
 * Text label + color (color is never the only signal — accessibility).
 */
export default function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span class={`${styles.badge} ${styles[tier]}`} title={`Reality tier: ${LABEL[tier]}`}>
      <span class={styles.dot} aria-hidden="true" />
      {LABEL[tier]}
    </span>
  );
}
