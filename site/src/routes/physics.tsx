import { getCollection } from "@neutron-build/core";
import { renderInline } from "../lib/inline-math";

export function head() {
  return {
    title: "Physics — Babel Bible",
    description:
      "Physics built on the math spine: classical mechanics, electromagnetism, statistical mechanics, quantum theory, and field theory — each section citing the math results it stands on.",
  };
}

export async function loader() {
  const units = await getCollection("units");
  const physicsUnits = units
    .filter((u: any) => {
      const id = u.data.id ?? "";
      const n = parseInt(id.slice(0, 2), 10);
      return n >= 9 && n <= 13 && !id.includes("essays");
    })
    .map((u: any) => ({
      id: u.data.id,
      title: u.data.title,
      section: u.data.section,
      status: u.data.status,
    }))
    .sort((a: any, b: any) => a.id.localeCompare(b.id));
  return { units: physicsUnits };
}

export default function PhysicsLanding({ data }: { data: any }) {
  return (
    <article>
      <section class="page-narrow" style="padding-top: 0;">
        <h1>Physics</h1>
        <p class="lede">
          Physics is the first section to make the cross-referenced structure visible. Every claim
          here points back to a specific mathematical result — Lagrangians to variational calculus,
          field theory to representation theory, statistical mechanics to measure theory.
        </p>
      </section>

      {data.units.length > 0 && (
        <section class="page-narrow">
          <h2>Units (§09–13)</h2>
          <ol class="unit-list">
            {data.units.map((u: any) => (
              <li>
                <a href={`/u/${u.id}`}>
                  <code>{u.id}</code> — <span dangerouslySetInnerHTML={{ __html: renderInline(u.title) }} />
                </a>
                {" "}
                <span class={`badge badge--${u.status}`}>{u.status}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section class="page-narrow">
        <h2>Five-branch structure</h2>
        <p>
          §09 classical mechanics · §10 electromagnetism &amp; special relativity · §11 statistical
          mechanics (physics flavor) · §12 quantum mechanics &amp; QFT · §13 general relativity &amp;
          cosmology. Plus existing §03 math-physics border units (Clifford, spin, Dirac, Yang-Mills,
          Atiyah-Singer) and §08 math-stat-mech (Onsager, RG, lattice gauge). See{" "}
          <a href="/plans/PHYSICS_PLAN">the physics plan</a> for branch-by-branch detail.
        </p>
      </section>
    </article>
  );
}
