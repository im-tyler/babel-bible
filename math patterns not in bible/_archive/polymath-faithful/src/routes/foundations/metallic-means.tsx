import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { MathBlock, MathInline } from "../../components/MathBlock";
import { metallicTable } from "../../math/metallic";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Metallic means — Polymath",
    description:
      "The metallic means (golden, silver, bronze…) as roots of x² − nx − 1 = 0, and why Grant's rapidity form e^arcsinh(n/2) equals them exactly.",
  };
}

export default function MetallicMeans() {
  const rows = metallicTable(5).map((r) => [
    r.n,
    r.name,
    r.closed,
    r.value.toFixed(9),
    r.rapidity.toFixed(9),
  ]);

  return (
    <article>
      <PageHeader
        kicker="Foundations"
        title="Metallic means"
        tier="real"
        lede="The golden ratio is the first of an infinite family. Each metallic mean is the positive root of a simple quadratic — and Grant's exotic-looking 'rapidity' form turns out to be exactly the same number."
      />

      <div class={styles.prose}>
        <h2>One quadratic, infinitely many ratios</h2>
        <p>The nth metallic mean is the positive solution of</p>
        <MathBlock tex="x^2 - n x - 1 = 0 \quad\Longrightarrow\quad x = \frac{n + \sqrt{n^2 + 4}}{2}." />
        <p>
          <MathInline tex="n=1" /> gives the golden ratio, <MathInline tex="n=2" /> the silver ratio, and so
          on. Every one of these has the self-reciprocal-mantissa property{" "}
          <MathInline tex="x - \tfrac{1}{x} = n" />.
        </p>

        <h2>Grant's rapidity form</h2>
        <p>Grant writes the same family as a hyperbolic exponential:</p>
        <MathBlock tex="\lambda_n = e^{\operatorname{arcsinh}(n/2)}." />
        <p>
          This is not a new number — it is provably identical. Since{" "}
          <MathInline tex="\sinh\theta = n/2" /> gives{" "}
          <MathInline tex="e^{\theta} = \sinh\theta + \cosh\theta = \tfrac{n}{2} + \sqrt{\tfrac{n^2}{4}+1} = \tfrac{n + \sqrt{n^2+4}}{2}" />
          . The last two columns below are computed independently and agree to every digit shown.
        </p>
      </div>

      <DataTable
        columns={["n", "name", "(n + √(n²+4))/2", "value", "e^arcsinh(n/2)"]}
        rows={rows}
        caption="Metallic means by closed form vs. Grant's rapidity form — identical."
      />

      <p class={styles.note}>
        <strong>Where the framework begins:</strong> the metallic means and the rapidity identity are
        standard. Grant's further move — placing each <MathInline tex="\lambda_n" /> as a "step" on the unit
        hyperbola and reading physical meaning into the steps — is the construct, covered under{" "}
        <a href="/generator/force-stack">The Generator</a>.
      </p>
    </article>
  );
}
