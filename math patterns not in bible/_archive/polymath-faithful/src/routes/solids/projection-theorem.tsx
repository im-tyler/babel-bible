import { Island } from "@neutron-build/core/client";
import PageHeader from "../../components/PageHeader";
import { MathBlock, MathInline } from "../../components/MathBlock";
import SolidViewer from "../../components/islands/SolidViewer";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "The Grant Projection Theorem — Polymath",
    description:
      "How a triple becomes a polyhedron's vertex, edge, and face counts — and the two reasons it proves less than it claims.",
  };
}

export default function ProjectionTheorem() {
  return (
    <article>
      <PageHeader
        kicker="The Solids"
        title="The Grant Projection Theorem"
        tier="his"
        lede="Grant's algorithm turns a triple (a, b, c) into a full set of polyhedron counts. The arithmetic is real and his code is public-domain — but two facts, true by the math itself, keep it from being the discovery it's presented as."
      />

      <div class={styles.prose}>
        <h2>The algorithm</h2>
        <p>Three deterministic steps take a triple to a polyhedron:</p>
        <MathBlock tex="V = a + 2b + c, \qquad k = 6 - (\text{integers among }a,b,c)," />
        <MathBlock tex="F = \frac{2(V-2)}{k-2}, \qquad E = \frac{kF}{2}." />
        <p>
          For an all-integer triple <MathInline tex="k = 3" /> (triangular faces), giving{" "}
          <MathInline tex="E = 3V - 6" /> and <MathInline tex="F = 2V - 4" />. There is also a{" "}
          <em>stellated</em> conjugate with the factors swapped:{" "}
          <MathInline tex="V = 2c,\ E = b^2,\ F = E - V + 2" />. Drag to rotate; switch projections:
        </p>
      </div>

      <Island component={SolidViewer} client="only" a={5} b={12} c={13} selectable={true} />

      <div class={styles.caveats}>
        <div class={styles.caveat}>
          <h3>1. Euler's formula isn't proven here — it's forced</h3>
          <p>
            <MathInline tex="V - E + F = 2" /> holds for every triple. But that's because{" "}
            <MathInline tex="F" /> and <MathInline tex="E" /> are <strong>defined</strong> from{" "}
            <MathInline tex="V" /> and <MathInline tex="k" /> so that it must. Substituting{" "}
            <MathInline tex="E = 3V-6,\ F = 2V-4" /> gives{" "}
            <MathInline tex="V - (3V-6) + (2V-4) = 2" /> identically. It's an algebraic tautology, not a
            discovery about geometry. Grant's own paper says as much.
          </p>
        </div>
        <div class={styles.caveat}>
          <h3>2. The rendered shapes aren't the claimed polyhedra</h3>
          <p>
            The generator places <MathInline tex="V" /> points on a golden-spiral sphere and takes their
            convex hull. That preserves the vertex <em>count</em>, but the hull's edges and faces are not the
            claimed <MathInline tex="E" /> and <MathInline tex="F" /> — realizing those would need extra
            connectivity constraints the code doesn't impose (its own comment admits this). And the Platonic
            solids don't fall out: the tetrahedron (<MathInline tex="V=4" />) has no integer triple, and
            (3,4,5) gives <MathInline tex="V=16" />, which is not a Platonic solid.
          </p>
        </div>
      </div>

      <p class={styles.note}>
        <strong>So what is real?</strong> The counting formulas are exact arithmetic, and his Python is a
        faithful generator you can reproduce (it is ported, with attribution, in{" "}
        <span class={styles.mono}>src/math/projection.ts</span>). What's a construct is the claim that these
        counts describe real solids, or matter. We render his exact placeholder so you can see precisely what
        the tool does and doesn't do.
      </p>
    </article>
  );
}
