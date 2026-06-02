import PageHeader from "../../components/PageHeader";
import { MathBlock, MathInline } from "../../components/MathBlock";
import { metallicMean } from "../../math/metallic";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "The Kepler triangle",
    description:
      "The right triangle with sides 1, √φ, φ — a genuine right triangle because 1 + φ = φ², the defining property of the golden ratio. Machine-checked in Lean.",
  };
}

export default function KeplerTriangle() {
  const phi = metallicMean(1);

  return (
    <article>
      <PageHeader
        kicker="Foundations"
        title="The Kepler triangle"
        tier="verified"
        lede="The right triangle whose sides are in geometric progression: 1, √φ, φ. It is a genuine right triangle for one exact reason — the defining identity of the golden ratio."
      />

      <div class={styles.prose}>
        <h2>Why it is a right triangle</h2>
        <p>
          The golden ratio <MathInline tex="\varphi" /> satisfies <MathInline tex="\varphi^2 = \varphi + 1" />.
          Take a triangle with legs <MathInline tex="1" /> and <MathInline tex="\sqrt{\varphi}" /> and
          hypotenuse <MathInline tex="\varphi" />. The Pythagorean condition holds <em>exactly</em>:
        </p>
        <MathBlock tex="1^2 + (\sqrt{\varphi})^2 = 1 + \varphi = \varphi^2." />
        <p>
          So the three sides <MathInline tex="1,\ \sqrt{\varphi},\ \varphi" /> form a right triangle, and they
          are in geometric progression with common ratio <MathInline tex="\sqrt{\varphi}" />. With{" "}
          <MathInline tex="\varphi = {(1+\sqrt5)/2}" /> evaluated by the same tested code used across the site:
        </p>
        <dl class={styles.values} style="max-width:var(--prose-max)">
          <dt>φ</dt>
          <dd>{phi.toFixed(12)}</dd>
          <dt>√φ</dt>
          <dd>{Math.sqrt(phi).toFixed(12)}</dd>
          <dt>1 + φ</dt>
          <dd>{(1 + phi).toFixed(12)}</dd>
          <dt>φ²</dt>
          <dd>{(phi * phi).toFixed(12)}</dd>
        </dl>
        <p>
          The last two rows are equal to every digit shown — that equality is the whole content of the
          triangle, and it is <a href="/methodology">machine-checked in Lean</a> as{" "}
          <span class={styles.mono}>kepler_golden</span>.
        </p>
      </div>

      <p class={styles.note}>
        <strong>Standard, and nothing more:</strong> the Kepler triangle is a well-known object in classical
        geometry. It is included here because the identity behind it is exact and proven; any further reading
        of it — golden-ratio cascades, four-dimensional reinterpretations — is not part of what this site
        claims.
      </p>
    </article>
  );
}
