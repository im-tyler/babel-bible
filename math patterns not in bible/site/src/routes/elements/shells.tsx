import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { MathBlock, MathInline } from "../../components/MathBlock";
import { consecutiveLegFamily, legFactors } from "../../math/triples";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Shells & 2n²",
    description:
      "The 2n² electron-shell capacity rule and its exact match to the Pythagorean triple factor c−a. Machine-checked in Lean.",
  };
}

export default function Shells() {
  const fam = consecutiveLegFamily(6);
  const rows = fam.map((t, i) => {
    const n = i + 1;
    return [n, `(${t.a}, ${t.b}, ${t.c})`, legFactors(t).cMinusA, 2 * n * n];
  });

  return (
    <article>
      <PageHeader
        kicker="Elements & Matter"
        title="Shells & 2n²"
        tier="verified"
        lede="The cleanest correspondence between the triple structure and chemistry: the factor c−a of the consecutive-leg family is exactly the 2n² electron-shell capacity rule."
      />

      <div class={styles.prose}>
        <h2>The 2n² match</h2>
        <p>
          Electron shells hold <MathInline tex="2n^2" /> electrons: 2, 8, 18, 32, 50, 72. The consecutive-leg
          triples have factor <MathInline tex="c - a = 2n^2" /> — the same sequence. This identity is exact
          and <a href="/methodology">machine-checked in Lean</a>:
        </p>
        <MathBlock tex="c - a = 2n^2 = 2,\ 8,\ 18,\ 32,\ 50,\ 72,\ \dots" />
      </div>

      <DataTable
        columns={["n", "triple", "c − a", "2n²"]}
        rows={rows}
        caption="The triple factor c−a reproduces the electron-shell capacities exactly."
      />

      <p class={styles.note}>
        <strong>What this is, and isn't:</strong> the match between <MathInline tex="c - a" /> and the shell
        capacities is a genuine, exact arithmetic correspondence — that much is proven. It is a numerical fact
        about two sequences agreeing, not a physical mechanism: it does not, on its own, explain why shells
        fill as they do.
      </p>
    </article>
  );
}
