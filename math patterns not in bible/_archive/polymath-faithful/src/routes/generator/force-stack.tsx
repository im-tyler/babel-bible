import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { MathInline } from "../../components/MathBlock";
import { FORCE_STACK } from "../../data/forceStack";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "The force stack — Polymath",
    description:
      "Grant's ontological stack: each force assigned a triple and a hyperbolic angle θ. The hyperbola point is real; the force assignment is his framework.",
  };
}

export default function ForceStack() {
  const rows = FORCE_STACK.map((l) => [l.theta, l.layer, l.triple, l.role]);

  return (
    <article>
      <PageHeader
        kicker="The Generator"
        title="The force stack"
        tier="his"
        lede="The spine of the framework: each fundamental force is assigned a Pythagorean triple and a position on the unit hyperbola, indexed by hyperbolic angle θ. This is the authoritative version (PFA Table 2), which supersedes the transcript."
      />

      <DataTable
        columns={["θ (rapidity)", "layer", "triple", "role"]}
        rows={rows}
        caption="The ontological stack. Each triple maps to the hyperbola point (c/b, a/b)."
      />

      <div class={styles.prose}>
        <p>
          The mapping a triple → point <MathInline tex="(c/b,\ a/b)" /> is exact and always lands on{" "}
          <MathInline tex="x^2 - y^2 = 1" /> (see <a href="/foundations/unit-hyperbola">the unit hyperbola</a>).
          The rapidity <MathInline tex="\theta = \operatorname{atanh}(y/x)" /> is a real coordinate. What is
          Grant's is the <em>assignment</em>: that the (8,15,17) point "is" gravity, that (5,12,13) "is"
          electromagnetism, and so on.
        </p>
      </div>

      <p class={`${styles.note} ${styles.warn}`}>
        <strong>Build note — the f1/f2 trap:</strong> Grant's two papers swap the labels f1/f2. The Grant
        Projection Theorem uses <MathInline tex="f_1 = c-a,\ f_2 = c+a" />; the Pythagorean Force Architecture
        uses <MathInline tex="f_1 = a+c,\ f_2 = c-a" />. Same two quantities, opposite names. This site follows
        PFA, where <MathInline tex="f_2 = c-a = 2n^2" /> is the electron-shell capacity. The force→triple
        assignments themselves are unvalidated framework, not established physics.
      </p>
    </article>
  );
}
