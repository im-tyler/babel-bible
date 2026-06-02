import { Island } from "@neutron-build/core/client";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import SolidViewer from "../../components/islands/SolidViewer";
import { consecutiveLegFamily } from "../../math/triples";
import { convexCounts, stellatedCounts } from "../../math/projection";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Harmonic solids — Polymath",
    description:
      "The six corridor solids generated from the consecutive-leg family, with convex and stellated counts and live (placeholder) renders.",
  };
}

export default function HarmonicSolids() {
  const family = consecutiveLegFamily(6);
  const rows = family.map((t) => {
    const cv = convexCounts(t);
    const st = stellatedCounts(t);
    return [
      `(${t.a}, ${t.b}, ${t.c})`,
      cv.V, cv.E, cv.F,
      st.V, st.E, st.F,
    ];
  });

  return (
    <article>
      <PageHeader
        kicker="The Solids"
        title="Harmonic solids"
        tier="his"
        lede="The consecutive-leg family run through the projection theorem — each triple yields a convex solid and its stellated conjugate. The counts are exact; the renders are the golden-spiral placeholders described on the previous page."
      />

      <DataTable
        columns={["triple", "conv V", "conv E", "conv F", "stel V", "stel E", "stel F"]}
        rows={rows}
        caption="Convex and stellated counts for the six corridor solids. Every row satisfies V−E+F=2 by construction."
      />

      <div class={styles.viewers}>
        {family.slice(0, 3).map((t) => (
          <div>
            <h3>({t.a}, {t.b}, {t.c})</h3>
            <Island component={SolidViewer} client="only" a={t.a} b={t.b} c={t.c} selectable={true} />
          </div>
        ))}
      </div>

      <p class={styles.note}>
        <strong>Reading these honestly:</strong> the table is real arithmetic and reproduces Grant's figures.
        The 3D shapes preserve each solid's vertex count but not its claimed edges/faces — see{" "}
        <a href="/solids/projection-theorem">the projection theorem</a> for why. Treat the renders as
        faithful reproductions of his tool, not as evidence the solids exist as described.
      </p>
    </article>
  );
}
