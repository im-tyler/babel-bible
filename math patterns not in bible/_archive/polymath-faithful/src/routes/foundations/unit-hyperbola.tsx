import { Island } from "@neutron-build/core/client";
import PageHeader from "../../components/PageHeader";
import { MathBlock, MathInline } from "../../components/MathBlock";
import ConicPlot from "../../components/islands/ConicPlot";
import styles from "./unit-hyperbola.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "The unit hyperbola — Polymath",
    description:
      "Why every Pythagorean triple lands exactly on x² − y² = 1 — a forced algebraic identity, shown interactively.",
  };
}

export default function UnitHyperbola() {
  return (
    <article>
      <PageHeader
        kicker="Foundations"
        title="The unit hyperbola"
        tier="real"
        lede="Grant calls x² − y² = 1 'the metric of reality.' The hyperbola is real, and every triple really does sit on it — but for a plain algebraic reason, shown below."
      />

      <div class={styles.prose}>
        <h2>The identity</h2>
        <p>Map a triple to the point</p>
        <MathBlock tex="\left(\tfrac{c}{b},\ \tfrac{a}{b}\right)." />
        <p>It always lies on the unit hyperbola, and here is why — no mysticism required:</p>
        <MathBlock tex="x^2 - y^2 = \frac{c^2}{b^2} - \frac{a^2}{b^2} = \frac{c^2 - a^2}{b^2} = \frac{b^2}{b^2} = 1." />
        <p>
          The last step uses only <MathInline tex="a^2 + b^2 = c^2" />, i.e.{" "}
          <MathInline tex="c^2 - a^2 = b^2" />. So landing on the curve isn't a discovery about the
          universe — it's true for <strong>every</strong> Pythagorean triple by construction.
        </p>

        <h2>See it</h2>
        <p>
          The consecutive-leg family plotted on the curve. Hover a point to read its triple, its exact
          coordinates, the residual <MathInline tex="x^2 - y^2 - 1" /> (zero to machine precision), and its
          hyperbolic angle <MathInline tex="\theta = \operatorname{atanh}(y/x)" />.
        </p>
      </div>

      <Island component={ConicPlot} client="visible" count={6} />

      <p class={styles.note}>
        <strong>Where the framework begins:</strong> the identity above is standard. What is Grant's own is
        the next move — assigning each point a <em>physical force</em> (the rapidity θ as a "force corridor").
        That mapping is a construct, covered under{" "}
        <a href="/generator/force-stack">The Generator → Force stack</a>.
      </p>
    </article>
  );
}
