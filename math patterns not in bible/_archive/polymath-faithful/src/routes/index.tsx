import TierBadge from "../components/TierBadge";
import styles from "./index.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Polymath — a reality-tiered reading of the Codex Universalis",
    description:
      "A rebuild of Robert Edward Grant's Polymath calculator that separates real mathematics from unvalidated construct from unproven claim — and labels every one.",
  };
}

export default function Home() {
  return (
    <section>
      <p class={styles.eyebrow}>Polymath / Codex Universalis</p>
      <h1 class={styles.title}>
        Real mathematics, his constructs, and unproven claims —{" "}
        <span class={styles.accent}>clearly told apart.</span>
      </h1>
      <p class={styles.lede}>
        This is a faithful rebuild of the Polymath calculator with one difference: every claim carries a
        reality tier. You can explore the genuine mathematics, see exactly where it becomes Grant's own
        framework, and never mistake a post-hoc coincidence for established science.
      </p>

      <div class={styles.legend}>
        <div class={styles.legendItem}>
          <TierBadge tier="real" />
          <span>Standard, verifiable mathematics. Stated as fact.</span>
        </div>
        <div class={styles.legendItem}>
          <TierBadge tier="his" />
          <span>His own construct — codeable from a stated rule, but unvalidated.</span>
        </div>
        <div class={styles.legendItem}>
          <TierBadge tier="claim" />
          <span>Post-hoc, false, or unproven. Always disclaimed, never asserted.</span>
        </div>
        <div class={styles.legendItem}>
          <TierBadge tier="content" />
          <span>Text and data. No computation to verify.</span>
        </div>
      </div>

      <div class={styles.actions}>
        <a href="/foundations/unit-hyperbola" class={styles.primary}>
          Start with the real math
        </a>
        <a href="/how-to-read" class={styles.secondary}>
          How to read this site
        </a>
      </div>
    </section>
  );
}
