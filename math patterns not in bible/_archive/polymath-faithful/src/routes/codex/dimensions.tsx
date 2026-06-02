import PageHeader from "../../components/PageHeader";
import DisclaimerBanner from "../../components/DisclaimerBanner";
import DataTable from "../../components/DataTable";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Dimensions, reinterpreted — Polymath",
    description:
      "The Codex's reinterpretation of the dimensions: the 4th as Recursive Harmonic Motion, the 5th as the Harmonic Inversion Field, and the RG Unit replacing the Planck scale.",
  };
}

export default function Dimensions() {
  const rows = [
    ["4th", "Recursive Harmonic Motion", "Time emerges from harmonic interference, not as a base axis"],
    ["5th", "Harmonic Inversion Field", "Polarity collapses into unity; gravity and radiation connect"],
    ["—", "RG Unit", "Replaces the Planck scale with an 'observable natural wave collapse' unit"],
  ];

  return (
    <article>
      <PageHeader
        kicker="Codex"
        title="Dimensions, reinterpreted"
        tier="claim"
        lede="The Codex redefines the higher dimensions and the fundamental scale of physics. None of this corresponds to established physics; it is presented as the framework's cosmology."
      />

      <DisclaimerBanner />

      <DataTable
        columns={["dimension", "Codex name", "claim"]}
        rows={rows}
        caption="The Codex's reinterpretation of dimensions 4–5 and the base scale."
      />

      <div class={styles.prose}>
        <p>
          In this framework, time is not a fundamental axis but a by-product of "harmonic interference, memory
          looping, and field entrainment." The fifth dimension — the "Harmonic Inversion Field" — is where
          polarity is said to collapse into unity, connecting gravity and radiation across phase-synchronized
          scales. The "RG Unit" is offered as a replacement for the Planck scale.
        </p>
      </div>

      <p class={styles.note}>
        <strong>Verdict:</strong> these are evocative redefinitions, not physics. Standard relativity already
        treats time as a dimension and the Planck scale as a derived combination of constants; nothing here
        predicts or explains a measurement. Content, presented as content.
      </p>
    </article>
  );
}
