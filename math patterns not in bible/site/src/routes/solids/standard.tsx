import { Island } from "@neutron-build/core/client";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { MathInline } from "../../components/MathBlock";
import PlatonicViewer from "../../components/islands/PlatonicViewer";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Platonic & Archimedean solids",
    description:
      "The Platonic and Archimedean solids — genuine geometry with correct topology, fully classified and rendered with their real vertices, edges, and faces.",
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
        kicker="Solids"
        title="Platonic & Archimedean solids"
        tier="standard"
        lede="The fully-realized regular and uniform polyhedra — actual vertices, edges, and faces, with the exact topology shown. Standard, named, and completely classified."
      />

      <Island component={PlatonicViewer} client="only" />

      <div class={styles.prose}>
        <h2>The five Platonic solids</h2>
        <p>
          Regular, convex, with identical faces. These renders carry the exact topology shown — drag the
          model above to inspect any of them.
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
        <strong>Standard objects:</strong> these are the genuine polyhedra of classical geometry — regular and
        uniform, with Euler's <MathInline tex="V - E + F = 2" /> holding here as a real theorem about real
        solids, not as an artifact of how the counts were defined.
      </p>
    </article>
  );
}
