import { Island } from "@neutron-build/core/client";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import PlatonicViewer from "../../components/islands/PlatonicViewer";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Standard solids — Polymath",
    description:
      "The real Platonic and Archimedean solids — genuine geometry, with correct topology, for comparison against the Grant placeholders.",
  };
}

export default function Standard() {
  const platonic = [
    ["Tetrahedron", 4, 6, 4, "{3,3}"],
    ["Cube", 8, 12, 6, "{4,3}"],
    ["Octahedron", 6, 12, 8, "{3,4}"],
    ["Dodecahedron", 20, 30, 12, "{5,3}"],
    ["Icosahedron", 12, 30, 20, "{3,5}"],
  ];

  return (
    <article>
      <PageHeader
        kicker="The Solids"
        title="Standard solids"
        tier="real"
        lede="The genuine, fully-realized polyhedra — actual vertices, edges, and faces. These are the real objects the Grant projection only approximates. Grant's '31 shapes' figure is 5 Platonic + 13 Archimedean + 13 Catalan."
      />

      <Island component={PlatonicViewer} client="only" />

      <div class={styles.prose}>
        <h2>The five Platonic solids</h2>
        <p>
          Regular, convex, with identical faces. Unlike the projection placeholders, these renders have the
          exact topology shown — drag the model above to inspect any of them.
        </p>
      </div>

      <DataTable
        columns={["solid", "V", "E", "F", "Schläfli"]}
        rows={platonic}
        caption="The five Platonic solids. All satisfy V−E+F=2 — here genuinely, as real polyhedra."
      />

      <div class={styles.prose}>
        <h2>Beyond the Platonics</h2>
        <p>
          The uniform polyhedra continue: <strong>13 Archimedean</strong> solids (vertex-transitive, mixed
          regular faces), their <strong>13 Catalan</strong> duals, and the <strong>92 Johnson</strong> solids
          (regular faces, not vertex-transitive). All are standard, named, and fully classified — no framework
          required.
        </p>
      </div>

      <p class={styles.note}>
        <strong>Why they're here:</strong> Grant maps forces and elements onto these solids. The solids
        themselves are real mathematics; the <em>mappings</em> are the construct. Crucially, his projection
        does not reproduce them — (3,4,5) yields 16 vertices, which is no Platonic solid — so the named solids
        on this page and the generated solids elsewhere are different objects.
      </p>
    </article>
  );
}
