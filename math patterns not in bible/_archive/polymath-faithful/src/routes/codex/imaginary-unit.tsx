import PageHeader from "../../components/PageHeader";
import DisclaimerBanner from "../../components/DisclaimerBanner";
import { MathBlock, MathInline } from "../../components/MathBlock";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "The imaginary unit, redefined — Polymath",
    description:
      "The Codex replaces i = √−1 with the real value i = −1/√10. We compute exactly what that does — and why it doesn't resolve anything.",
  };
}

// e^(iπ)+1 under i = −1/√10  ⇒  iπ = −π/√10  ⇒  e^(−π/√10)+1
const value = Math.exp(-Math.PI / Math.sqrt(10)) + 1;

export default function ImaginaryUnit() {
  return (
    <article>
      <PageHeader
        kicker="Codex"
        title="The imaginary unit, redefined"
        tier="claim"
        lede="The Codex's central move: replace the imaginary unit i = √−1 with a real number, i = −1/√10 ≈ −0.3162, and reinterpret Euler's identity as a 'harmonic collapse.'"
      />

      <DisclaimerBanner />

      <div class={styles.prose}>
        <h2>What the substitution gives</h2>
        <p>
          Setting <MathInline tex="i = -1/\sqrt{10}" /> and substituting into Euler's identity makes{" "}
          <MathInline tex="i\pi = -\pi/\sqrt{10}" />, so:
        </p>
        <MathBlock tex={`e^{i\\pi} + 1 = e^{-\\pi/\\sqrt{10}} + 1 \\approx ${value.toFixed(4)}.`} />
        <p>
          Grant ties this <span class={styles.mono}>≈ 1.3703</span> to the reciprocal of the fine-structure
          constant <MathInline tex="\alpha^{-1} \approx 137.036" /> (i.e. 1.37036 × 100). The arithmetic above
          is real — you can verify the number — and we expose it as a labelled "alternative algebra."
        </p>

        <h2>Why it resolves nothing</h2>
        <p>
          The symbol <MathInline tex="i" /> is <em>defined</em> by{" "}
          <MathInline tex="i^2 = -1" />; that is the entire reason complex numbers work. Replacing it with a
          real number doesn't "fix paradoxes" — it simply abandons complex analysis and computes a different,
          unrelated quantity that happens to be near 1.37. The resemblance to{" "}
          <MathInline tex="\alpha^{-1}" /> is a numerical coincidence in the same family as the other{" "}
          <a href="/claims/constant-derivations">constant "derivations."</a>
        </p>
      </div>

      <p class={styles.note}>
        <strong>Verdict:</strong> you cannot redefine <MathInline tex="i" /> and keep the results that depended
        on its actual definition. This is numerology dressed as algebra — buildable and computable, but not a
        resolution of anything in mathematics or physics.
      </p>
    </article>
  );
}
