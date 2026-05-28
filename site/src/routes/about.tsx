import { getCollection } from "@neutron-build/core";

export function head() {
  return {
    title: "About Babel Bible",
    description:
      "What Babel Bible is, who it's for, and how the three-tier system works. Plus everything that goes into producing it.",
  };
}

export async function loader() {
  const units = await getCollection("units");
  return {
    unitCount: units.length,
  };
}

export default function About({ data }: { data: any }) {
  return (
    <article>
      <section class="page-narrow" style="padding-top: 0;">
        <h1>About Babel Bible</h1>
        <p class="lede">
          A self-study curriculum that takes a learner from foundations to graduate-level mastery
          across the sciences and humanities — math, physics, chemistry, biology, philosophy,
          language, and the social world. Every concept exists at three depths in a single source
          document; the site filters what you see.
        </p>
      </section>

      <section class="page-narrow">
        <h2>The three tiers</h2>
        <p>
          Every unit is written at all three depths, and they run in sequence down the page —
          from the intuitive picture to the graduate-level treatment. Read top-to-bottom for the
          full arc, or skip to the depth you want; each tier's sections are labelled.
        </p>
        <ul>
          <li>
            <strong>Beginner</strong> — intuition, visuals, worked examples with everyday numbers.
            Math/physics anchors: 3Blue1Brown, Strogatz <em>Infinite Powers</em>. Other domains
            use their own field-canonical entry points. Endpoint: scientific and cultural
            literacy.
          </li>
          <li>
            <strong>Intermediate</strong> — definitions, proofs, exercises, scaffolded Lean
            puzzles where applicable. Math/physics anchors: Axler <em>Linear Algebra Done Right</em>,
            Apostol <em>Calculus</em>, Griffiths <em>Electrodynamics</em>. Endpoint:
            undergrad-textbook mastery.
          </li>
          <li>
            <strong>Master</strong> — full proofs, primary literature, hard problems, full Lean
            formalisation where Mathlib covers. Math/physics anchors: Lang <em>Algebra</em>,
            Hartshorne, Bott-Tu, Lawson-Michelsohn, Weinberg. Endpoint: graduate research
            readiness.
          </li>
        </ul>
      </section>

      <section class="page-narrow">
        <h2>How units work</h2>
        <p>
          A unit is one concept — one theorem cluster, one technique. All three tiers live in the
          same markdown source, in labelled sections (<code>Intuition [Beginner]</code>,{" "}
          <code>Formal definition [Intermediate+]</code>, <code>Advanced results [Master]</code>)
          that run in sequence down the page.
        </p>
        <p>
          Cross-references like <code>[04.04.03]</code> link to other units; if the target hasn't
          shipped yet, the reference shows as pending rather than breaking. Inline citations open a
          side panel with the source detail. Where Mathlib covers a result, the unit's Lean
          formalisation status is declared and aggregated on the Lean page below.
        </p>
        <p class="muted">
          The curriculum is still filling in: some units are complete across all three tiers,
          others run deeper at one depth than another, and some citations are still being verified.
          What's published builds and cross-links cleanly.
        </p>
      </section>

      <section class="page-narrow">
        <h2>Browse the curriculum</h2>
        <p class="muted">Three ways to find a unit.</p>
      </section>
      <div class="hub-grid">
        <a href="/units" class="hub-card">
          <div class="hub-card-name">All units</div>
          <div class="hub-card-meta">{data.unitCount} units, filterable by tier / section / status.</div>
        </a>
        <a href="/concepts" class="hub-card">
          <div class="hub-card-name">Concepts</div>
          <div class="hub-card-meta">The canonical concept catalog — every concept maps to at most one unit.</div>
        </a>
        <a href="/dag" class="hub-card">
          <div class="hub-card-name">Dependency map</div>
          <div class="hub-card-meta">How sections cite each other. The whole curriculum as a directed graph.</div>
        </a>
      </div>

      <section class="page-narrow">
        <h2>Where the material comes from</h2>
        <p>
          Master-tier units cite primary literature with page references; where a citation is still
          being verified it's marked pending rather than dropped. The connections registry tracks
          cross-unit synthesis claims; the Lean status page records which units are formalised in
          Mathlib.
        </p>
      </section>
      <div class="hub-grid">
        <a href="/connections" class="hub-card">
          <div class="hub-card-name">Connections</div>
          <div class="hub-card-meta">Cross-unit synthesis claims — duals, equivalences, foundations, bridging theorems.</div>
        </a>
        <a href="/lean" class="hub-card">
          <div class="hub-card-name">Lean formalization</div>
          <div class="hub-card-meta">Per-unit status: full / partial / none. Aggregates Mathlib coverage gaps.</div>
        </a>
      </div>

      <section class="page-narrow">
        <h2>How it's produced</h2>
        <p>
          Babel Bible is written by an automated pipeline: each unit is drafted by language models
          working against the canonical literature of its field, then run through quality gates and
          human review before it ships. Cross-references are validated at build time and Lean proofs
          are machine-checked where Mathlib covers the result. The production plan, reviewer
          protocol, and house-style specs are all public.
        </p>
      </section>
      <div class="hub-grid">
        <a href="/specs" class="hub-card">
          <div class="hub-card-name">Specs</div>
          <div class="hub-card-meta">Unit format, quality rubric, continuity scaffold, orchestration protocol.</div>
        </a>
        <a href="/plans" class="hub-card">
          <div class="hub-card-name">Plans</div>
          <div class="hub-card-meta">Curriculum plan, production guide, reviewer plan, site plan, project plan.</div>
        </a>
      </div>
    </article>
  );
}
