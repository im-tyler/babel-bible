// Canonical section ordering, display labels, and domain grouping.
// `section` (frontmatter value) → SectionInfo. Sections are grouped under
// one of seven Domains for homepage / nav presentation.

export type DomainKey =
  | "mathematics"
  | "physics"
  | "chemistry"
  | "biology"
  | "philosophy"
  | "language"
  | "world";

export type SectionInfo = {
  key: string;              // frontmatter section value
  order: number;            // sort order within its domain
  label: string;            // display name
  anchor: string;           // url-safe slug for jump links
  domain: DomainKey;
};

export type DomainInfo = {
  key: DomainKey;
  order: number;
  label: string;
  blurb: string;            // one-line description shown under the heading
};

export const DOMAINS: DomainInfo[] = [
  { key: "mathematics", order: 1, label: "Mathematics",
    blurb: "Foundations through algebraic geometry, symplectic structures, and representation theory." },
  { key: "physics",     order: 2, label: "Physics",
    blurb: "Classical mechanics through QFT, statistical mechanics, and general relativity." },
  { key: "chemistry",   order: 3, label: "Chemistry",
    blurb: "General, physical, organic, and inorganic — built on the quantum-mechanical core." },
  { key: "biology",     order: 4, label: "Biology",
    blurb: "Molecular and cellular through organismal, ecological, and evolutionary biology." },
  { key: "philosophy",  order: 5, label: "Philosophy",
    blurb: "The methods and history of thought that shape every other domain." },
  { key: "language",    order: 6, label: "Language",
    blurb: "Grammar, writing, and the techniques that move literature." },
  { key: "world",       order: 7, label: "World",
    blurb: "Economics, civics, and geography — how the human world is structured." },
];

export const DOMAIN_BY_KEY = new Map<DomainKey, DomainInfo>(
  DOMAINS.map((d) => [d.key, d])
);

export const SECTIONS: SectionInfo[] = [
  // ── Mathematics ──
  { key: "precalc",               order: 0,    label: "Precalculus foundations",          anchor: "precalc",               domain: "mathematics" },
  { key: "foundations",           order: 1,    label: "Algebra & linear algebra",         anchor: "foundations",           domain: "mathematics" },
  { key: "analysis",              order: 2,    label: "Analysis",                         anchor: "analysis",              domain: "mathematics" },
  { key: "number-theory",         order: 2.2,  label: "Number theory",                    anchor: "number-theory",         domain: "mathematics" },
  { key: "differential-geometry", order: 2.5,  label: "Differential geometry",            anchor: "differential-geometry", domain: "mathematics" },
  { key: "modern-geometry",       order: 3,    label: "Modern geometry",                  anchor: "modern-geometry",       domain: "mathematics" },
  { key: "algebraic-geometry",    order: 4,    label: "Algebraic geometry",               anchor: "algebraic-geometry",    domain: "mathematics" },
  { key: "symplectic",            order: 5,    label: "Symplectic geometry",              anchor: "symplectic",            domain: "mathematics" },
  { key: "stat-mech",             order: 5.5,  label: "Statistical field theory",         anchor: "stat-mech",             domain: "mathematics" },
  { key: "riemann-surfaces",      order: 6,    label: "Riemann surfaces",                 anchor: "riemann-surfaces",      domain: "mathematics" },
  { key: "representation-theory", order: 7,    label: "Representation theory",            anchor: "representation-theory", domain: "mathematics" },

  // ── Physics ──
  { key: "classical-mech",        order: 9,    label: "Classical mechanics",              anchor: "classical-mech",        domain: "physics" },
  { key: "quantum-theory",        order: 9.4,  label: "Quantum theory foundations",       anchor: "quantum-theory",        domain: "physics" },
  { key: "em-sr",                 order: 10,   label: "Electromagnetism & special relativity", anchor: "em-sr",            domain: "physics" },
  { key: "stat-mech-physics",     order: 11,   label: "Statistical mechanics",            anchor: "stat-mech-physics",     domain: "physics" },
  { key: "thermodynamics",        order: 11.2, label: "Thermodynamics",                   anchor: "thermodynamics",        domain: "physics" },
  { key: "quantum",               order: 12,   label: "Quantum mechanics & QFT",          anchor: "quantum",               domain: "physics" },
  { key: "gr-cosmology",          order: 13,   label: "General relativity & cosmology",   anchor: "gr-cosmology",          domain: "physics" },

  // ── Chemistry ──
  { key: "genchem-pchem",         order: 14,   label: "General & physical chemistry",     anchor: "genchem-pchem",         domain: "chemistry" },
  { key: "orgchem",               order: 15,   label: "Organic chemistry",                anchor: "orgchem",               domain: "chemistry" },
  { key: "inorgchem",             order: 16,   label: "Inorganic chemistry",              anchor: "inorgchem",             domain: "chemistry" },

  // ── Biology ──
  { key: "mol-cell-bio",          order: 17,   label: "Molecular & cellular biology",     anchor: "mol-cell-bio",          domain: "biology" },
  { key: "organismal-bio",        order: 18,   label: "Organismal biology",               anchor: "organismal-bio",        domain: "biology" },
  { key: "eco-evo-bio",           order: 19,   label: "Ecology & evolution",              anchor: "eco-evo-bio",           domain: "biology" },

  // ── Philosophy ──
  { key: "philosophy",            order: 20,   label: "Philosophy",                       anchor: "philosophy",            domain: "philosophy" },

  // ── Language ──
  { key: "grammar",               order: 22.1, label: "Grammar",                          anchor: "grammar",               domain: "language" },
  { key: "writing",               order: 22.2, label: "Writing",                          anchor: "writing",               domain: "language" },
  { key: "literature",            order: 22.3, label: "Literature techniques",            anchor: "literature",            domain: "language" },

  // ── World ──
  { key: "economics",             order: 23.1, label: "Economics",                        anchor: "economics",             domain: "world" },
  { key: "civics",                order: 23.2, label: "Civics",                           anchor: "civics",                domain: "world" },
  { key: "geography",             order: 23.3, label: "Geography",                        anchor: "geography",             domain: "world" },
];

export const MATH_SECTION_KEYS = new Set(
  SECTIONS.filter((s) => s.domain === "mathematics").map((s) => s.key)
);

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

export function sectionDomain(key: string | undefined): DomainKey | "other" {
  if (!key) return "other";
  return SECTION_BY_KEY.get(key)?.domain ?? "other";
}
