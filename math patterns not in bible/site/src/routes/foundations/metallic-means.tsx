import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { MathBlock, MathInline } from "../../components/MathBlock";
import { metallicTable } from "../../math/metallic";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Metallic means",
    description:
      "The metallic means (golden, silver, bronze…) as roots of x² − nx − 1 = 0, and why the hyperbolic form e^arcsinh(n/2) equals them exactly.",
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
        tier="verified"
        lede="The golden ratio is the first of an infinite family. Each metallic mean is the positive root of a simple quadratic — and the exotic-looking hyperbolic form e^arcsinh(n/2) turns out to be exactly the same number."
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

        <h2>An equivalent hyperbolic form</h2>
        <p>The same family can be written as a hyperbolic exponential:</p>
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
        caption="Metallic means by closed form vs. the hyperbolic form — identical."
      />

      <p class={styles.note}>
        <strong>Standard, both ways:</strong> the metallic means and the hyperbolic identity{" "}
        <MathInline tex="\lambda_n = e^{\operatorname{arcsinh}(n/2)}" /> are ordinary mathematics — two
        notations for the same number, agreeing to every digit computed. That equality is all this page
        claims. See <a href="/methodology">how this is verified</a>.
      </p>
    </article>
  );
}
