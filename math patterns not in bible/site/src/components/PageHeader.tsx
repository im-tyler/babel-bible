import TierBadge from "./TierBadge";
import type { Tier } from "./TierBadge";
import styles from "./PageHeader.module.css";

export default function PageHeader(props: {
  kicker: string;
  title: string;
  tier: Tier;
  lede?: string;
}) {
  return (
    <header class={styles.header}>
      <div class={styles.kicker}>{props.kicker}</div>
      <div class={styles.titleRow}>
        <h1 class={styles.title}>{props.title}</h1>
        <TierBadge tier={props.tier} />
      </div>
      {props.lede && <p class={styles.lede}>{props.lede}</p>}
    </header>
  );
}
