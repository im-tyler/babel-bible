import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { MathBlock, MathInline } from "../../components/MathBlock";
import { consecutiveLeg } from "../../math/triples";
import { nineMeans, nestedRatio } from "../../math/nineMeans";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Nine means — Polymath",
    description:
      "The nine generative means of a triangle, and the one genuinely true fact inside them: three form nested similar right triangles.",
  };
}

export default function NineMeans() {
  const t = consecutiveLeg(2); // (5, 12, 13)
  const means = nineMeans(t);
  const rows = means.map((m) => [m.key, m.name, m.formula, m.value.toFixed(6)]);
  const { ratio, nested } = nestedRatio(t);
  const [hm, gm, am] = nested;

  return (
    <article>
      <PageHeader
        kicker="Foundations"
        title="The nine means"
        tier="real"
        lede="From any triangle (a, b, c), Grant derives nine 'generative means.' Most are just labelled ratios — but one relation among them is genuinely, exactly true."
      />

      <div class={styles.prose}>
        <p>
          For the triple <span class={styles.mono}>(5, 12, 13)</span>, the nine means evaluate as follows.
          Each is a plain closed-form expression in <MathInline tex="a, b, c" /> — real arithmetic, computed
          by the same tested code used elsewhere on the site.
        </p>
      </div>

      <DataTable
        columns={["key", "name", "formula", "value"]}
        rows={rows}
        caption="The nine generative means of (5, 12, 13)."
      />

      <div class={styles.prose}>
        <h2>The one true relation</h2>
        <p>
          The genuinely interesting fact is that three of the means —{" "}
          <MathInline tex="\mathrm{HM} = b^2/c" />, <MathInline tex="\mathrm{GM} = b" />, and{" "}
          <MathInline tex="\mathrm{AM} = c" /> — form a geometric progression with common ratio{" "}
          <MathInline tex="c/b" />:
        </p>
        <MathBlock tex={`\\frac{b^2}{c}\\cdot\\frac{c}{b} = b, \\qquad b\\cdot\\frac{c}{b} = c.`} />
        <p>
          For (5, 12, 13) that ratio is <span class={styles.mono}>{ratio.toFixed(6)}</span>, and indeed{" "}
          <span class={styles.mono}>
            {hm.toFixed(4)} × {ratio.toFixed(4)} = {(hm * ratio).toFixed(4)} = {gm}
          </span>{" "}
          and{" "}
          <span class={styles.mono}>
            {gm} × {ratio.toFixed(4)} = {(gm * ratio).toFixed(4)} = {am}
          </span>
          . This nesting of similar right triangles is real algebra — not a coincidence.
        </p>
      </div>

      <p class={styles.note}>
        <strong>Where the framework begins:</strong> the nesting is exact and standard. Calling these the
        "generative" means of matter — using them as the shell radii in the element diagrams — is Grant's
        construct, picked up under <a href="/solids/projection-theorem">The Solids</a> and{" "}
        <a href="/elements">Elements</a>.
      </p>
    </article>
  );
}
