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
  { key: "differential-geometry", order: 2.5, label: "Differential geometry", anchor: "differential-geometry" },
  { key: "modern-geometry", order: 3, label: "Modern geometry", anchor: "modern-geometry" },
  { key: "algebraic-geometry", order: 4, label: "Algebraic geometry", anchor: "algebraic-geometry" },
  { key: "symplectic", order: 5, label: "Symplectic geometry", anchor: "symplectic" },
  { key: "stat-mech", order: 5.5, label: "Statistical field theory", anchor: "stat-mech" },
  { key: "riemann-surfaces", order: 6, label: "Riemann surfaces", anchor: "riemann-surfaces" },
  { key: "representation-theory", order: 7, label: "Representation theory", anchor: "representation-theory" },
  { key: "classical-mech", order: 9, label: "Classical mechanics", anchor: "classical-mech" },
  { key: "quantum-theory", order: 9.4, label: "Quantum theory foundations", anchor: "quantum-theory" },
  { key: "em-sr", order: 10, label: "Electromagnetism & special relativity", anchor: "em-sr" },
  { key: "stat-mech-physics", order: 11, label: "Statistical mechanics", anchor: "stat-mech-physics" },
  { key: "thermodynamics", order: 11.2, label: "Thermodynamics", anchor: "thermodynamics" },
  { key: "quantum", order: 12, label: "Quantum mechanics & QFT", anchor: "quantum" },
  { key: "gr-cosmology", order: 13, label: "General relativity & cosmology", anchor: "gr-cosmology" },
  { key: "genchem-pchem", order: 14, label: "General & physical chemistry", anchor: "genchem-pchem" },
  { key: "orgchem", order: 15, label: "Organic chemistry", anchor: "orgchem" },
  { key: "inorgchem", order: 16, label: "Inorganic chemistry", anchor: "inorgchem" },
  { key: "mol-cell-bio", order: 17, label: "Molecular & cellular biology", anchor: "mol-cell-bio" },
  { key: "organismal-bio", order: 18, label: "Organismal biology", anchor: "organismal-bio" },
  { key: "eco-evo-bio", order: 19, label: "Ecology & evolution", anchor: "eco-evo-bio" },
  { key: "philosophy", order: 20, label: "Philosophy", anchor: "philosophy" },
];

export const MATH_SECTION_KEYS = new Set([
  "precalc",
  "foundations",
  "analysis",
  "differential-geometry",
  "modern-geometry",
  "algebraic-geometry",
  "symplectic",
  "stat-mech",
  "riemann-surfaces",
  "representation-theory",
]);

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
