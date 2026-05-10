import { getCollection } from "@neutron-build/core";
import { listAudits } from "../lib/audits";
import { loadBooklist, totalBooks } from "../lib/booklist";

export function head() {
  return {
    title: "About Math STEM",
    description:
      "What Math STEM is, who it's for, and how the three-tier system works. Plus everything that goes into producing it.",
  };
}

export async function loader() {
  const units = await getCollection("units");
  const audits = listAudits();
  const chapters = loadBooklist();
  return {
    unitCount: units.length,
    auditCount: audits.length,
    bookCount: totalBooks(chapters),
  };
}

export default function About({ data }: { data: any }) {
  return (
    <article>
      <section class="page-narrow" style="padding-top: 0;">
        <h1>About Math STEM</h1>
        <p class="lede">
          A curriculum that takes a self-taught learner from high-school algebra to graduate-level
          mastery in mathematics and physics. Every concept exists at three depths in a single
          source document; the site filters what you see.
        </p>
      </section>

      <section class="page-narrow">
        <h2>The three tiers</h2>
        <p>
          Pick a tier in the header. Each unit packs all three depths into one source file; the
          tier toggle changes which sections render.
        </p>
        <ul>
          <li>
            <strong>Beginner</strong> — intuition, visuals, worked examples with everyday numbers.
            Anchored on 3Blue1Brown and Strogatz <em>Infinite Powers</em>. Endpoint: scientific
            literacy.
          </li>
          <li>
            <strong>Intermediate</strong> — definitions, proofs, exercises, scaffolded Lean
            puzzles. Anchored on Axler <em>Linear Algebra Done Right</em>, Apostol{" "}
            <em>Calculus</em>, Griffiths <em>Electrodynamics</em>. Endpoint: undergrad-textbook
            mastery.
          </li>
          <li>
            <strong>Master</strong> — full proofs, primary literature, hard problems, full Lean
            formalisation where Mathlib covers. Anchored on Lang <em>Algebra</em>, Hartshorne, Bott-Tu, Lawson-Michelsohn,
            Weinberg. Endpoint: graduate research readiness.
          </li>
        </ul>
      </section>

      <section class="page-narrow">
        <h2>How units work</h2>
        <p>
          A unit is one concept — one theorem cluster, one technique. All three tiers live in the
          same markdown source. Section markers (<code>[Beginner]</code>,{" "}
          <code>[Intermediate+]</code>, <code>[Master]</code>) gate visibility; the toggle in the
          header is the user-facing switch.
        </p>
        <p>
          Cross-references like <code>[04.04.03]</code> link to other units at your current tier.
          Citations like <code>[ref: source locator]</code> open a side panel with full source
          metadata. Mathlib-formalisation status is declared per unit and aggregated on the Lean
          page below.
        </p>
        <p>
          v0.1 is apex-first: Master-tier graduate content seeded at the top of the curriculum
          first (spin geometry, QFT, algebraic topology). Beginner and Intermediate tiers exist as
          place-holders for apex units; they fill in as the prerequisite chain reaches them.
        </p>
        <p class="muted">
          If you arrived hoping for accessible introductions to graduate math, you are early.
          v1 is the right time to come back. v0.x is for graduate readers who want a single
          cross-linked reference.
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
          Every Master-tier unit cites primary literature with page references. Where a published
          source isn't available we cite first-principles reasoning. The booklist below is the
          canonical anchor set; the connections registry is the cross-unit synthesis layer.
        </p>
      </section>
      <div class="hub-grid">
        <a href="/sources" class="hub-card">
          <div class="hub-card-name">Sources / booklist</div>
          <div class="hub-card-meta">{data.bookCount} primary texts, sourcing status, {data.auditCount} per-book audit punch-lists.</div>
        </a>
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
        <h2>Project &amp; contributors</h2>
        <p>
          Math STEM ships through automated quality gates and a human reviewer pipeline. The
          production plan, reviewer protocol, and house-style specs are all public.
        </p>
      </section>
      <div class="hub-grid">
        <a href="/production" class="hub-card">
          <div class="hub-card-name">Production</div>
          <div class="hub-card-meta">Live readout — shipped, queued, audits done, books unaudited.</div>
        </a>
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
