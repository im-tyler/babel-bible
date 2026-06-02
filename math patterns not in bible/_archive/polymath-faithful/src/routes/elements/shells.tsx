import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { MathBlock, MathInline } from "../../components/MathBlock";
import { consecutiveLegFamily, legFactors } from "../../math/triples";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Shells & magic numbers — Polymath",
    description:
      "The 2n² electron-shell rule, its exact match to the triple factor c−a, and an honest look at Grant's 'magic numbers.'",
  };
}

export default function Shells() {
  const fam = consecutiveLegFamily(6);
  const rows = fam.map((t, i) => {
    const n = i + 1;
    return [n, `(${t.a}, ${t.b}, ${t.c})`, legFactors(t).cMinusA, 2 * n * n];
  });

  const real = [2, 8, 20, 28, 50, 82, 126];
  const grant = [26, 50, 82, 122];

  return (
    <article>
      <PageHeader
        kicker="Elements & Matter"
        title="Shells & magic numbers"
        tier="his"
        lede="The cleanest real link in the whole framework — and one of its clearest overreaches — sit side by side here."
      />

      <div class={styles.prose}>
        <h2>The 2n² match (real)</h2>
        <p>
          Electron shells hold <MathInline tex="2n^2" /> electrons: 2, 8, 18, 32, 50, 72. The consecutive-leg
          triples have factor <MathInline tex="c - a = 2n^2" /> — the same sequence. This identity is exact:
        </p>
        <MathBlock tex="c - a = 2n^2 = 2,\ 8,\ 18,\ 32,\ 50,\ 72,\ \dots" />
      </div>

      <DataTable
        columns={["n", "triple", "c − a", "2n²"]}
        rows={rows}
        caption="The triple factor c−a reproduces the electron-shell capacities exactly."
      />

      <div class={styles.prose}>
        <h2>The "magic numbers" (overreach)</h2>
        <p>
          Grant also claims a set of nuclear "magic numbers" — <span class={styles.mono}>{grant.join(", ")}</span>.
          The real nuclear magic numbers (shells of exceptional stability) are{" "}
          <span class={styles.mono}>{real.join(", ")}</span>. Only 50 and 82 actually match; 26 ≠ 28 and 122 ≠
          126, and he conflates these nuclear numbers with proton counts (calling 26 "iron").
        </p>
      </div>

      <p class={`${styles.note} ${styles.bad}`}>
        <strong>Verdict:</strong> the 2n² ↔ c−a identity is genuine and elegant. The "magic numbers" claim is
        a partial match dressed as a full one — two of four are right, and the framing mixes up distinct
        physical quantities. We show both so the strong claim and the weak one aren't confused.
      </p>
    </article>
  );
}
