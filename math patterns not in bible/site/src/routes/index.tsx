import TierBadge from "../components/TierBadge";
import styles from "./index.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Conic — mathematics that holds up",
    description:
      "A small collection of mathematics that survives scrutiny: classical theorems, several machine-checked in Lean, alongside the standard results they connect to. Every claim is computed or proven, never asserted.",
  };
}

export default function Home() {
  return (
    <section>
      <p class={styles.eyebrow}>verified mathematics</p>
      <h1 class={styles.title}>
        Only the mathematics that <span class={styles.accent}>actually holds up.</span>
      </h1>
      <p class={styles.lede}>
        This is a small, deliberately conservative collection: classical results — Pythagorean triples, the
        golden and metallic means, the Kepler triangle, the unit hyperbola — presented so you can check each
        one yourself. Several are machine-checked in Lean. Nothing here is asserted on authority; everything is
        either computed to high precision in front of you or formally proven. Anything that could not be
        verified was left out.
      </p>

      <div class={styles.legend}>
        <div class={styles.legendItem}>
          <TierBadge tier="verified" />
          <span>Proven as part of the audit — symbolic and, in several cases, machine-checked in Lean.</span>
        </div>
        <div class={styles.legendItem}>
          <TierBadge tier="standard" />
          <span>Standard, textbook mathematics, computed here so you can confirm it directly.</span>
        </div>
      </div>

      <div class={styles.actions}>
        <a href="/foundations/unit-hyperbola" class={styles.primary}>
          Start with the foundations
        </a>
        <a href="/methodology" class={styles.secondary}>
          How this is verified
        </a>
      </div>
    </section>
  );
}
