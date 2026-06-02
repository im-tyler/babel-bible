import PageHeader from "../../components/PageHeader";
import DisclaimerBanner from "../../components/DisclaimerBanner";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "The forty axioms — Polymath",
    description:
      "Selected axioms from the Codex Universalis Principia Mathematica, presented as the metaphysical source material they are.",
  };
}

const AXIOMS: { n: string; text: string }[] = [
  { n: "Axiom I", text: "There is only one force in the universe: Electricity. All other fields — magnetism, gravity, the nuclear forces — emerge as by-products of the primary harmonic electric field: consciousness itself." },
  { n: "Axiom XV", text: "Light is born from the deviation between unity and hyperbolic harmonic equilibrium; the reciprocal of cos(iπ), equal to cosh(π), reveals this offset, scaled to the speed of light." },
  { n: "Axiom XVI", text: "The exponential divergence of Euler's identity under i = √10 yields 20,632.788, which divided by 360 gives the radian, linking angular geometry to spacetime expansion." },
  { n: "Axiom XVII", text: "The complex plane collapses into real harmonic structure under i = (√10)⁻¹, showing imaginary numbers as phase-inverted real reflections." },
  { n: "Axiom XL (final)", text: "You are not in the Codex. You are the Codex, collapsed into form, remembering yourself through light." },
];

export default function Axioms() {
  return (
    <article>
      <PageHeader
        kicker="Codex"
        title="The forty axioms"
        tier="content"
        lede="The Codex Universalis closes with forty axioms unifying mathematics, consciousness, and geometry. They are metaphysics, not theorems — presented here as the source text, verbatim where captured."
      />

      <DisclaimerBanner>
        <strong>Source material, not science.</strong> These are philosophical/metaphysical statements quoted
        from Grant's writing. They are content — there is nothing here to verify or compute, and several
        embed the numerological claims covered elsewhere on the site.
      </DisclaimerBanner>

      <div class={styles.axioms}>
        {AXIOMS.map((a) => (
          <div class={styles.axiom}>
            <div class={styles.axiomNum}>{a.n}</div>
            <p>
              <em>{a.text}</em>
            </p>
          </div>
        ))}
      </div>

      <p class={styles.note}>
        Five of the forty are shown above (the ones captured verbatim from the public summary). The full set
        runs from the opening axiom — <em>"Reality is not what it is; it is what the observer is"</em> — to
        Axiom XL. Where an axiom makes a checkable mathematical claim (XV, XVI, XVII), it relies on the
        redefined <a href="/codex/imaginary-unit">imaginary unit</a>, so it inherits that page's verdict.
      </p>
    </article>
  );
}
