import { Island } from "@neutron-build/core/client";
import PageHeader from "../../components/PageHeader";
import PeriodicTable from "../../components/islands/PeriodicTable";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Elements — Polymath",
    description:
      "An interactive periodic table. Click an element for its electron shells (real Aufbau filling), the 2n² capacities, and Grant's framework mappings.",
  };
}

export default function Elements() {
  return (
    <article>
      <PageHeader
        kicker="Elements & Matter"
        title="The periodic table"
        tier="his"
        lede="The centerpiece of Grant's framework: every element mapped to shells, triples, and solids. Click any element — the shells and 2n² capacities are real computed data; the polyhedral and 'oxidation prediction' mappings are his constructs, labelled as such."
      />

      <Island component={PeriodicTable} client="visible" />

      <p class={styles.note}>
        <strong>What's real vs his:</strong> the electron shells come from a genuine idealized Aufbau fill,
        and the 2n² capacities are exact. Grant's additions — that each element <em>is</em> a polyhedron, that
        oxidation states follow a "triangle wave," that the shell radii are the{" "}
        <a href="/foundations/nine-means">Nine Means</a> — are framework. The "predicted oxidation" shown is a
        crude valence heuristic, not a reliable value (real oxidation states are many and context-dependent).
      </p>
    </article>
  );
}
