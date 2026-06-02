import PageHeader from "../../components/PageHeader";
import { MathBlock, MathInline } from "../../components/MathBlock";
import { partial, omega, chi, epsilonInfinity } from "../../math/newNumbers";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "The new numbers — Polymath",
    description:
      "Grant's 'BFN' constants ∂, ω, χ (and Kai) computed to high precision, with his closure identity ∂ + ω = 10 verified exactly.",
  };
}

export default function NewNumbers() {
  const d = partial();
  const w = omega();
  const c = chi();
  const eps = epsilonInfinity();

  return (
    <article>
      <PageHeader
        kicker="The Generator"
        title="The new numbers"
        tier="his"
        lede="Grant introduces 'Beautiful Numbers' — ∂, ω, χ and Kai. They are well-defined constructions, so they reproduce exactly. Computed here to 40 digits, with his closure identity ∂ + ω = 10 verified."
      />

      <div class={styles.values}>
        <div class={styles.value}>
          <span class={styles.sym}>∂</span>
          <span class={styles.def}>Fo / Theo = 5(√3 − 1)</span>
          <span class={styles.num}>{d.toPrecision(40)}</span>
        </div>
        <div class={styles.value}>
          <span class={styles.sym}>ω</span>
          <span class={styles.def}>Ce = ∂²/10 + 5</span>
          <span class={styles.num}>{w.toPrecision(40)}</span>
        </div>
        <div class={styles.value}>
          <span class={styles.sym}>χ</span>
          <span class={styles.def}>∂ + ω = 10 ("9.999̄")</span>
          <span class={styles.num}>{c.toPrecision(40)}</span>
        </div>
      </div>

      <div class={styles.prose}>
        <h2>The closure identity</h2>
        <MathBlock tex="\partial + \omega = \chi = 10" />
        <p>
          Verified above to 40 digits. There's a second identity:{" "}
          <MathInline tex="10/\omega - 1 = 1/\sqrt{3}" />. Computed both ways:
        </p>
        <MathBlock tex={`10/\\omega - 1 = ${eps.fromOmega.toPrecision(16)}`} />
        <MathBlock tex={`1/\\sqrt{3} = ${eps.fromRoot3.toPrecision(16)}`} />
        <p>They match exactly — these are consistent algebraic constructions, not measured quantities.</p>

        <h2>Kai (≈ 8.88)</h2>
        <p>
          A third number, Kai, tied to 888 and the triquetra, is referenced at roughly 8.88 — but its
          construction is not cleanly specified in the public summary, so it can't be reproduced here without
          guessing. That gap is noted honestly rather than filled with an invented formula.
        </p>
      </div>

      <p class={styles.note}>
        <strong>Real vs his:</strong> ∂, ω, and χ are exact, reproducible constructions (the high-precision
        calculator is genuine — Grant claims 320,000 digits; the math supports any precision). Their
        significance — that they're fundamental "new numbers" underlying reality — is the framework.
      </p>
    </article>
  );
}
