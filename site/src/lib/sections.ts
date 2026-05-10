// Canonical section ordering and display labels.
// Maps frontmatter `section` value -> { order, label, anchor }

export type SectionInfo = {
  key: string; // frontmatter section value
  order: number;
  label: string;
  anchor: string; // url-safe slug for jump links
};

export const SECTIONS: SectionInfo[] = [
  { key: "precalc", order: 0, label: "Precalculus foundations", anchor: "precalc" },
  { key: "foundations", order: 1, label: "Algebra & linear algebra", anchor: "foundations" },
  { key: "analysis", order: 2, label: "Analysis", anchor: "analysis" },
  { key: "modern-geometry", order: 3, label: "Modern geometry", anchor: "modern-geometry" },
  { key: "algebraic-geometry", order: 4, label: "Algebraic geometry", anchor: "algebraic-geometry" },
  { key: "symplectic", order: 5, label: "Symplectic geometry", anchor: "symplectic" },
  { key: "stat-mech", order: 5.5, label: "Statistical field theory", anchor: "stat-mech" },
  { key: "riemann-surfaces", order: 6, label: "Riemann surfaces", anchor: "riemann-surfaces" },
  { key: "representation-theory", order: 7, label: "Representation theory", anchor: "representation-theory" },
];

export const SECTION_BY_KEY = new Map<string, SectionInfo>(
  SECTIONS.map((s) => [s.key, s])
);

export function sectionLabel(key: string | undefined): string {
  if (!key) return "Unsectioned";
  return SECTION_BY_KEY.get(key)?.label ?? key;
}

export function sectionOrder(key: string | undefined): number {
  if (!key) return 999;
  return SECTION_BY_KEY.get(key)?.order ?? 999;
}
