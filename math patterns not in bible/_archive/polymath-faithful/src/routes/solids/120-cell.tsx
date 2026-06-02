import { Island } from "@neutron-build/core/client";
import PageHeader from "../../components/PageHeader";
import { MathBlock, MathInline } from "../../components/MathBlock";
import CascadeViewer from "../../components/islands/CascadeViewer";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "The 120-cell — Polymath",
    description:
      "Grant generates the 120-cell as the dodecahedron 'breathing inward' from the Kepler triangle. The Kepler triangle is real; the reinterpretation is his.",
  };
}

export default function Cell120() {
  return (
    <article>
      <PageHeader
        kicker="The Solids"
        title="The 120-cell"
        tier="his"
        lede="Grant reinterprets the 120-cell — one of the six regular 4-polytopes — as the dodecahedron projected inward in self-similar golden shells, with no fourth orthogonal dimension required."
      />

      <div class={styles.prose}>
        <h2>The Kepler triangle is real</h2>
        <p>
          The cascade is generated from the Kepler triangle with sides{" "}
          <MathInline tex="1,\ \sqrt{\varphi},\ \varphi" />. It is a genuine right triangle because{" "}
          <MathInline tex="1 + \varphi = \varphi^2" /> — the defining property of the golden ratio. That much
          is exact, standard mathematics.
        </p>
        <MathBlock tex="1^2 + (\sqrt{\varphi})^2 = 1 + \varphi = \varphi^2." />

        <h2>The inward cascade</h2>
        <p>
          Grant nests dodecahedra with shell radii <MathInline tex="\varphi^{-k}" />, reading the 120-cell as
          the dodecahedron "breathing inward." Drag to rotate:
        </p>
      </div>

      <Island component={CascadeViewer} client="only" shells={6} />

      <p class={styles.note}>
        <strong>Where the framework begins:</strong> the golden self-similarity and the Kepler triangle are
        real. But the standard 120-cell is a genuine four-dimensional polytope (600 cells, 1200 faces); calling
        it "just the dodecahedron breathing inward" is a reinterpretation, not an equivalence. We render the
        cascade as his 3D analogy — clearly labelled as such, not as the 4-polytope.
      </p>
    </article>
  );
}
