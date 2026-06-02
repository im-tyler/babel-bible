import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { MathBlock } from "../../components/MathBlock";
import { carryMultiply, shortLegFusion, corridorStep } from "../../math/construction";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Construction rules — Polymath",
    description:
      "The three deterministic rules Grant uses to generate every 'force triangle' from the (3,4,5) seed.",
  };
}

export default function ConstructionRules() {
  const seed = { a: 3, b: 4, c: 5 };
  const cm = carryMultiply(seed);
  const slf = shortLegFusion(3, 5);
  const cs = corridorStep(seed);

  return (
    <article>
      <PageHeader
        kicker="The Generator"
        title="Construction rules"
        tier="his"
        lede="Grant grows the whole force stack from one seed, (3,4,5), using three deterministic rules. The arithmetic is real and reproducible; that these operations 'create forces' is the framework."
      />

      <div class={styles.prose}>
        <h2>1 · Carry & Multiply</h2>
        <MathBlock tex="(a,b,c) \rightarrow (c,\ a\cdot b,\ \sqrt{c^2 + (ab)^2})" />
        <p>
          From (3,4,5): <span class={styles.mono}>({cm.a}, {cm.b}, {cm.c})</span>.
        </p>

        <h2>2 · Short-Leg Fusion</h2>
        <MathBlock tex="(a_i, a_j) \rightarrow (a_i + a_j,\ a_i a_j,\ \sqrt{\cdots})" />
        <p>
          From legs 3 and 5: <span class={styles.mono}>({slf.a}, {slf.b}, {slf.c})</span> — his "gravity" triple.
        </p>

        <h2>3 · Corridor Step</h2>
        <MathBlock tex="(a,b,b{+}1) \rightarrow (a{+}2,\ b{+}2a{+}2,\ b{+}2a{+}3)" />
        <p>
          From (3,4,5): <span class={styles.mono}>({cs.a}, {cs.b}, {cs.c})</span> — walks the consecutive-leg family.
        </p>
      </div>

      <DataTable
        columns={["rule", "input", "output"]}
        rows={[
          ["Carry & Multiply", "(3, 4, 5)", `(${cm.a}, ${cm.b}, ${cm.c})`],
          ["Short-Leg Fusion", "legs 3, 5", `(${slf.a}, ${slf.b}, ${slf.c})`],
          ["Corridor Step", "(3, 4, 5)", `(${cs.a}, ${cs.b}, ${cs.c})`],
        ]}
        caption="The three rules applied to the seed, computed by the tested code in src/math/construction.ts."
      />

      <p class={styles.note}>
        <strong>Real vs his:</strong> each rule is exact integer arithmetic that produces genuine Pythagorean
        triples. The claim that applying them <em>generates the fundamental forces</em> is the construct — see{" "}
        <a href="/generator/force-stack">the force stack</a> for the assignments.
      </p>
    </article>
  );
}
