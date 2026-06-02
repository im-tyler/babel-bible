import styles from "./AppShell.module.css";
import type { Tier } from "./TierBadge";

type NavLink = { href: string; label: string };
type NavGroup = { label: string; tier: Tier; links: NavLink[] };

const TIER_VAR: Record<Tier, string> = {
  real: "var(--tier-real)",
  his: "var(--tier-his)",
  claim: "var(--tier-claim)",
  content: "var(--tier-content)",
};

/** Credibility-ordered navigation: real -> constructed -> claimed -> metaphysical -> content. */
const NAV: NavGroup[] = [
  {
    label: "Start Here",
    tier: "content",
    links: [
      { href: "/", label: "Overview" },
      { href: "/how-to-read", label: "How to read this site" },
    ],
  },
  {
    label: "Foundations",
    tier: "real",
    links: [
      { href: "/foundations/unit-hyperbola", label: "Unit hyperbola" },
      { href: "/foundations/triples", label: "Pythagorean triples" },
      { href: "/foundations/constants", label: "Constants" },
      { href: "/foundations/metallic-means", label: "Metallic means" },
      { href: "/foundations/nine-means", label: "Nine means" },
    ],
  },
  {
    label: "The Generator",
    tier: "his",
    links: [
      { href: "/generator/construction-rules", label: "Construction rules" },
      { href: "/generator/force-stack", label: "Force stack" },
      { href: "/generator/new-numbers", label: "New numbers" },
    ],
  },
  {
    label: "The Solids",
    tier: "his",
    links: [
      { href: "/solids/projection-theorem", label: "Projection theorem" },
      { href: "/solids/harmonic-solids", label: "Harmonic solids" },
      { href: "/solids/standard", label: "Standard solids" },
      { href: "/solids/120-cell", label: "The 120-cell" },
    ],
  },
  {
    label: "Elements & Matter",
    tier: "his",
    links: [
      { href: "/elements", label: "Periodic table" },
      { href: "/elements/shells", label: "Shells" },
      { href: "/elements/isotopes", label: "Isotopes" },
    ],
  },
  {
    label: "The Claims",
    tier: "claim",
    links: [
      { href: "/claims/constant-derivations", label: "Constant derivations" },
      { href: "/claims/primes-riemann", label: "Primes & Riemann" },
      { href: "/claims/galaxies", label: "Galaxies" },
    ],
  },
  {
    label: "Codex",
    tier: "claim",
    links: [
      { href: "/codex/imaginary-unit", label: "The imaginary unit" },
      { href: "/codex/axioms", label: "The 40 axioms" },
      { href: "/codex/dimensions", label: "Dimensions" },
    ],
  },
  {
    label: "Resonance",
    tier: "real",
    links: [
      { href: "/resonance/tuning", label: "432 Hz tuning" },
      { href: "/resonance/spectral-chords", label: "Spectral chords" },
    ],
  },
  {
    label: "Wisdom",
    tier: "content",
    links: [{ href: "/wisdom/sacred-sites", label: "Sacred sites map" }],
  },
];

export default function AppShell({ children }: { children?: unknown }) {
  return (
    <div class={styles.shell}>
      <nav class={styles.nav}>
        <a href="/" class={styles.brand}>
          Polymath
        </a>
        <div class={styles.tagline}>a reality-tiered reading</div>
        {NAV.map((group) => (
          <div class={styles.group}>
            <div class={styles.groupLabel}>
              <span class={styles.tierDot} style={`background:${TIER_VAR[group.tier]}`} aria-hidden="true" />
              {group.label}
            </div>
            {group.links.map((link) => (
              <a href={link.href} class={styles.link}>
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </nav>
      <div class={styles.content}>
        <div class={styles.inner}>{children}</div>
      </div>
    </div>
  );
}
