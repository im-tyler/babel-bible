import PageHeader from "../components/PageHeader";
import styles from "./methodology.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "How this is verified",
    description:
      "Everything on this site was selected by verification: high-precision computation, symbolic proof, and machine-checked Lean. Here is exactly how, and what is proven.",
  };
}

export default function Methodology() {
  return (
    <article>
      <PageHeader
        kicker="Start Here"
        title="How this is verified"
        tier="verified"
        lede="Nothing here is included on authority. Each result is either computed to high precision in front of you, proven symbolically, or machine-checked in Lean. A much larger pool of claims was tested the same way — only what passed is shown."
      />

      <div class={styles.steps}>
        <div class={styles.step}>
          <h3>High-precision computation</h3>
          <p>Identities are evaluated to dozens of digits so an exact equality is visibly exact, not merely close. <span class={styles.tool}>decimal.js / Python</span></p>
        </div>
        <div class={styles.step}>
          <h3>Symbolic proof</h3>
          <p>Whether a statement is a true identity (and not a near-miss or a definitional tautology) is decided exactly. <span class={styles.tool}>sympy</span></p>
        </div>
        <div class={styles.step}>
          <h3>Formal proof</h3>
          <p>The core theorems are machine-checked end to end, with no gaps left unproven. <span class={styles.tool}>Lean 4 + Mathlib</span></p>
        </div>
      </div>

      <div class={styles.prose}>
        <h2>What is proven</h2>
        <p>
          The Foundations results are stated and machine-checked in Lean (the build is clean, with no{" "}
          <span class={styles.mono}>sorry</span>). The full proof scripts and the falsification harness live in
          the project's <span class={styles.mono}>audit/</span> directory and regenerate every number end to end.
        </p>
      </div>

      <table class={styles.verdicts}>
        <thead>
          <tr><th>Result</th><th>Proven by</th></tr>
        </thead>
        <tbody>
          <tr><td>Consecutive-leg families are always Pythagorean</td><td class={styles.keep}>sympy + Lean</td></tr>
          <tr><td>c − a = 2n²  and  c + a = 2(n+1)²</td><td class={styles.keep}>sympy + Lean</td></tr>
          <tr><td>Every triple lies on the unit hyperbola x² − y² = 1</td><td class={styles.keep}>sympy + Lean</td></tr>
          <tr><td>Nine-means nesting (HM, GM, AM in geometric progression)</td><td class={styles.keep}>sympy + Lean</td></tr>
          <tr><td>Kepler triangle: 1 + φ = φ²</td><td class={styles.keep}>sympy + Lean</td></tr>
          <tr><td>Metallic mean = e^arcsinh(n/2)</td><td class={styles.keep}>sympy</td></tr>
        </tbody>
      </table>

      <div class={styles.prose}>
        <h2>What was excluded, and why</h2>
        <p>
          These results were gathered from a broader framework that mixes genuine mathematics with claims that
          do not survive testing — constant "derivations" a dense menu of expressions reproduces by chance, a
          polyhedron-counting rule whose Euler identity is forced by its own definitions, a force-to-triangle
          mapping with no relation to measured physics. None of that is here. The rule throughout: a test can
          confirm-against-chance or rule out — it can never manufacture validity, so only what was independently
          verifiable was kept.
        </p>
      </div>
    </article>
  );
}
