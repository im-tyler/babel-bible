import { Island } from "@neutron-build/core/client";
import PageHeader from "../../components/PageHeader";
import { MathBlock, MathInline } from "../../components/MathBlock";
import ConicPlot from "../../components/islands/ConicPlot";
import styles from "./unit-hyperbola.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "The unit hyperbola",
    description:
      "Why every Pythagorean triple lands exactly on x² − y² = 1 — a forced algebraic identity, shown interactively. Machine-checked in Lean.",
  };
}

export default function UnitHyperbola() {
  return (
    <article>
      <PageHeader
        kicker="Foundations"
        title="The unit hyperbola"
        tier="verified"
        lede="Every Pythagorean triple sits exactly on the unit hyperbola x² − y² = 1 — not as a coincidence, but for a plain algebraic reason, shown below and machine-checked in Lean."
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
        <strong>What the angle is:</strong> the hyperbolic angle <MathInline tex="\theta" /> is simply a
        coordinate along the curve — a way of labelling where each triple lands. It is geometry, not physics:
        it carries no claim about forces or measured quantities. The identity itself is{" "}
        <a href="/methodology">machine-checked in Lean</a>.
      </p>
    </article>
  );
}
