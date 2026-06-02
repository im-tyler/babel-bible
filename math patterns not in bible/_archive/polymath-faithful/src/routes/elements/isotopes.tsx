import PageHeader from "../../components/PageHeader";
import { MathBlock, MathInline } from "../../components/MathBlock";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Isotopes — Polymath",
    description:
      "Grant predicts isotope masses with a 60/61 'contraction factor' at ~99.96% accuracy. The accuracy is real — but it belongs to the semi-empirical mass formula underneath, not the 60/61 factor.",
  };
}

export default function Isotopes() {
  return (
    <article>
      <PageHeader
        kicker="Elements & Matter"
        title="Isotope masses"
        tier="his"
        lede="Grant reports predicting 108 isotope masses to ~99.96% accuracy using a single factor f₀ = 60/61. The headline number is real; the credit is misattributed."
      />

      <div class={styles.prose}>
        <h2>The claim</h2>
        <p>
          A contraction factor <MathInline tex="f_0 = 60/61 \approx 0.98361" /> is applied across 108 isotopes,
          and the predicted masses land within ~0.04% of measured values.
        </p>
        <MathBlock tex="f_0 = \tfrac{60}{61} \approx 0.983607" />

        <h2>Why the accuracy is misleading</h2>
        <p>
          Nuclear masses are <em>already</em> predicted well by the <strong>semi-empirical mass formula</strong>{" "}
          (SEMF) — the liquid-drop model with volume, surface, Coulomb, asymmetry, and pairing terms. It
          reaches sub-percent accuracy on its own, with no help from any 60/61 factor. Layering a single
          near-unity multiplier on top of an already-accurate formula and reporting the combined accuracy
          credits the multiplier for the SEMF's work.
        </p>
        <p>
          Put differently: multiplying good predictions by 0.9836 (≈1) leaves them good predictions. The 99.96%
          is the SEMF's, not the contraction factor's.
        </p>
      </div>

      <p class={`${styles.note} ${styles.bad}`}>
        <strong>Verdict:</strong> the data (108 isotope masses) and the headline accuracy are real, but the
        explanatory weight is on the standard mass formula, not on f₀ = 60/61. A genuine test would be whether
        60/61 improves on the SEMF alone — and there's no evidence it does.
      </p>
    </article>
  );
}
