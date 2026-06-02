import { Island } from "@neutron-build/core/client";
import PageHeader from "../../components/PageHeader";
import PeriodicTable from "../../components/islands/PeriodicTable";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "The periodic table",
    description:
      "An interactive periodic table. Click an element for its electron shells (idealized Aufbau filling) and the 2n² shell capacities.",
  };
}

export default function Elements() {
  return (
    <article>
      <PageHeader
        kicker="Elements & Matter"
        title="The periodic table"
        tier="standard"
        lede="Click any element to see its electron shells and the 2n² shell capacities. The shells come from an idealized Aufbau fill and the capacities are exact — standard, computed data, nothing more."
      />

      <Island component={PeriodicTable} client="visible" />

      <p class={styles.note}>
        <strong>Standard data:</strong> the electron shells are a genuine idealized Aufbau fill and the 2n²
        capacities are exact. The one structural fact worth following from here is that the shell capacities{" "}
        2, 8, 18, 32 are the same sequence as the triple factor <span class={styles.mono}>c − a</span> — see{" "}
        <a href="/elements/shells">Shells &amp; 2n²</a>.
      </p>
    </article>
  );
}
