import styles from "./AppShell.module.css";
import type { Tier } from "./TierBadge";

type NavLink = { href: string; label: string };
type NavGroup = { label: string; tier: Tier; links: NavLink[] };

const TIER_VAR: Record<Tier, string> = {
  verified: "var(--tier-verified)",
  standard: "var(--tier-standard)",
};

/** Only verified theorems and standard mathematics. Ordered foundations -> applications. */
const NAV: NavGroup[] = [
  {
    label: "Start Here",
    tier: "verified",
    links: [
      { href: "/", label: "Overview" },
      { href: "/methodology", label: "How this is verified" },
    ],
  },
  {
    label: "Foundations",
    tier: "verified",
    links: [
      { href: "/foundations/unit-hyperbola", label: "Unit hyperbola" },
      { href: "/foundations/triples", label: "Pythagorean triples" },
      { href: "/foundations/kepler-triangle", label: "Kepler triangle" },
      { href: "/foundations/metallic-means", label: "Metallic means" },
      { href: "/foundations/nine-means", label: "Nine means" },
      { href: "/foundations/constants", label: "Constants" },
    ],
  },
  {
    label: "Solids",
    tier: "standard",
    links: [{ href: "/solids/standard", label: "Platonic & Archimedean" }],
  },
  {
    label: "Elements & Matter",
    tier: "standard",
    links: [
      { href: "/elements", label: "Periodic table" },
      { href: "/elements/shells", label: "Shells & 2n²" },
    ],
  },
  {
    label: "Resonance",
    tier: "standard",
    links: [
      { href: "/resonance/tuning", label: "Just intonation" },
      { href: "/resonance/spectral-chords", label: "Spectral chords" },
    ],
  },
];

export default function AppShell({ children }: { children?: unknown }) {
  return (
    <div class={styles.shell}>
      <nav class={styles.nav}>
        <a href="/" class={styles.brand}>
          Conic
        </a>
        <div class={styles.tagline}>only what holds up</div>
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
