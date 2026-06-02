import TierBadge from "../components/TierBadge";
import type { Tier } from "../components/TierBadge";
import styles from "./how-to-read.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "How to read this site — Polymath",
    description: "The four reality tiers and the one rule that governs the whole project: label, don't assert.",
  };
}

const TIERS: { tier: Tier; body: string; example: string }[] = [
  {
    tier: "real",
    body: "Standard, established mathematics — often hiding under an invented name. These statements are true and you can verify them. We state them plainly.",
    example: "Every Pythagorean triple lands on the unit hyperbola x² − y² = 1. That is forced algebra, not a discovery.",
  },
  {
    tier: "his",
    body: "Grant's own constructs. They follow a stated rule, so we can reproduce them exactly in code — but no outside work validates the significance he assigns them.",
    example: "Generating a polyhedron's vertex count as V = a + 2b + c from a triple. The arithmetic is real; the meaning is his.",
  },
  {
    tier: "claim",
    body: "Post-hoc fits, category errors, or unproven assertions presented as fact. We may still compute or visualize them, but they are always disclaimed — never asserted as science.",
    example: "Deriving the fine-structure constant 'with no free parameters.' The choice of construction is the parameter space.",
  },
  {
    tier: "content",
    body: "Text and data pages with nothing to compute or falsify — axioms, wisdom writing, maps. Presented as the source material it is.",
    example: "The forty Codex axioms, or a map of sacred sites with real coordinates.",
  },
];

export default function HowToRead() {
  return (
    <section>
      <h1>How to read this site</h1>
      <p class={styles.lede}>
        The source material mixes genuine mathematics with unvalidated invention and outright numerology, all
        presented with equal confidence. That blend is exactly what makes it persuasive — and misleading. So
        every claim here is tagged with one of four reality tiers.
      </p>

      <div class={styles.cards}>
        {TIERS.map((t) => (
          <article class={styles.card}>
            <TierBadge tier={t.tier} />
            <p class={styles.body}>{t.body}</p>
            <p class={styles.example}>{t.example}</p>
          </article>
        ))}
      </div>

      <div class={styles.rule}>
        <h2>The one rule</h2>
        <p>
          <strong>Label, don't assert.</strong> Wherever a claim is Grant's framework or is unproven, it is
          marked as such. The goal is not to debunk and not to evangelize — it is to let you see precisely
          where the real mathematics ends and the framework begins.
        </p>
      </div>
    </section>
  );
}
