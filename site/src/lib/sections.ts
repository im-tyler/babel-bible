// Canonical section ordering, display labels, and domain grouping.
// `section` (frontmatter value) → SectionInfo. Sections are grouped under
// one of 13 Domains for homepage / nav presentation.

export type DomainKey =
  | "mathematics"
  | "physics"
  | "chemistry"
  | "biology"
  | "health"
  | "earth-and-space"
  | "computing"
  | "philosophy"
  | "mind-and-society"
  | "language"
  | "arts"
  | "history"
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
    blurb: "Foundations through algebraic geometry, symplectic structures, representation theory, logic, and numerical analysis." },
  { key: "physics",     order: 2, label: "Physics",
    blurb: "Classical mechanics through QFT, statistical mechanics, and general relativity." },
  { key: "chemistry",   order: 3, label: "Chemistry",
    blurb: "General, physical, organic, and inorganic — built on the quantum-mechanical core." },
  { key: "biology",     order: 4, label: "Biology",
    blurb: "Molecular and cellular through organismal, ecological, and evolutionary biology." },
  { key: "health",      order: 5, label: "Health & medicine",
    blurb: "Clinical and applied physiology, public health, and the biology of disease." },
  { key: "earth-and-space", order: 6, label: "Earth & space",
    blurb: "Earth systems, planetary science, and astronomy from observation to cosmology." },
  { key: "computing",   order: 7, label: "Computing",
    blurb: "Computer science: algorithms, systems, languages, theory of computation." },
  { key: "philosophy",  order: 8, label: "Philosophy",
    blurb: "The methods and history of thought that shape every other domain." },
  { key: "mind-and-society", order: 9, label: "Mind & society",
    blurb: "Psychology, sociology, and anthropology — how minds and groups work." },
  { key: "language",    order: 10, label: "Language",
    blurb: "Grammar, writing, and the techniques that move literature." },
  { key: "arts",        order: 11, label: "Arts",
    blurb: "Music, visual art, and the structures of aesthetic practice." },
  { key: "history",     order: 12, label: "History",
    blurb: "World history and the history of science — how knowledge and societies developed." },
  { key: "world",       order: 13, label: "World",
    blurb: "Economics, civics, geography, and media literacy — how the human world is structured." },
];

export const DOMAIN_BY_KEY = new Map<DomainKey, DomainInfo>(
  DOMAINS.map((d) => [d.key, d])
);

export const SECTIONS: SectionInfo[] = [
  // ── Mathematics ──
  { key: "precalc",               order: 0,    label: "Precalculus foundations",          anchor: "precalc",               domain: "mathematics" },
  { key: "foundations",           order: 1,    label: "Algebra & linear algebra",         anchor: "foundations",           domain: "mathematics" },
  { key: "analysis",              order: 2,    label: "Analysis",                         anchor: "analysis",              domain: "mathematics" },
  { key: "probability",           order: 2.1,  label: "Probability & stochastics",        anchor: "probability",           domain: "mathematics" },
  { key: "number-theory",         order: 2.2,  label: "Number theory",                    anchor: "number-theory",         domain: "mathematics" },
  { key: "differential-geometry", order: 2.5,  label: "Differential geometry",            anchor: "differential-geometry", domain: "mathematics" },
  { key: "modern-geometry",       order: 3,    label: "Modern geometry",                  anchor: "modern-geometry",       domain: "mathematics" },
  { key: "algebraic-geometry",    order: 4,    label: "Algebraic geometry",               anchor: "algebraic-geometry",    domain: "mathematics" },
  { key: "symplectic",            order: 5,    label: "Symplectic geometry",              anchor: "symplectic",            domain: "mathematics" },
  { key: "stat-mech",             order: 5.5,  label: "Statistical field theory",         anchor: "stat-mech",             domain: "mathematics" },
  { key: "riemann-surfaces",      order: 6,    label: "Riemann surfaces",                 anchor: "riemann-surfaces",      domain: "mathematics" },
  { key: "representation-theory", order: 7,    label: "Representation theory",            anchor: "representation-theory", domain: "mathematics" },
  { key: "logic",                 order: 7.5,  label: "Logic",                            anchor: "logic",                 domain: "mathematics" },
  { key: "category-theory",       order: 7.6,  label: "Category theory",                  anchor: "category-theory",       domain: "mathematics" },
  { key: "statistics",            order: 7.8,  label: "Statistics",                       anchor: "statistics",            domain: "mathematics" },
  { key: "numerical-pde",         order: 8,    label: "Numerical analysis & PDE",         anchor: "numerical-pde",         domain: "mathematics" },
  { key: "dynamics",              order: 8.2,  label: "Dynamical systems & ergodic theory", anchor: "dynamics",            domain: "mathematics" },
  { key: "operator-algebras",     order: 8.4,  label: "Operator algebras & NCG",           anchor: "operator-algebras",     domain: "mathematics" },
  { key: "combinatorics",         order: 8.6,  label: "Combinatorics & graph theory",       anchor: "combinatorics",         domain: "mathematics" },

  // ── Physics ──
  { key: "classical-mech",        order: 9,    label: "Classical mechanics",              anchor: "classical-mech",        domain: "physics" },
  { key: "quantum-theory",        order: 9.4,  label: "Quantum theory foundations",       anchor: "quantum-theory",        domain: "physics" },
  { key: "quantum-mechanics",     order: 9.5,  label: "Quantum mechanics",                anchor: "quantum-mechanics",     domain: "physics" },
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

  // ── Health & medicine ──
  { key: "health-medicine",       order: 19.5, label: "Health & medicine",                anchor: "health-medicine",       domain: "health" },

  // ── Earth & space ──
  { key: "earth-science",         order: 19.7, label: "Earth science",                    anchor: "earth-science",         domain: "earth-and-space" },
  { key: "astronomy",             order: 19.8, label: "Astronomy",                        anchor: "astronomy",             domain: "earth-and-space" },

  // ── Computing ──
  { key: "computer-science",      order: 19.9, label: "Computer science",                 anchor: "computer-science",      domain: "computing" },

  // ── Philosophy ──
  { key: "philosophy",            order: 20,   label: "Philosophy",                       anchor: "philosophy",            domain: "philosophy" },

  // ── Mind & society ──
  { key: "psychology",            order: 21,   label: "Psychology",                       anchor: "psychology",            domain: "mind-and-society" },
  { key: "sociology",             order: 21.5, label: "Sociology",                        anchor: "sociology",             domain: "mind-and-society" },
  { key: "anthropology",          order: 21.7, label: "Anthropology",                     anchor: "anthropology",          domain: "mind-and-society" },

  // ── Language ──
  { key: "grammar",               order: 22.1, label: "Grammar",                          anchor: "grammar",               domain: "language" },
  { key: "writing",               order: 22.2, label: "Writing",                          anchor: "writing",               domain: "language" },
  { key: "literature",            order: 22.3, label: "Literature techniques",            anchor: "literature",            domain: "language" },

  // ── Arts ──
  { key: "music-art",             order: 22.5, label: "Music & art",                      anchor: "music-art",             domain: "arts" },

  // ── History ──
  { key: "world-history",         order: 22.7, label: "World history",                    anchor: "world-history",         domain: "history" },
  { key: "history-of-science",    order: 22.9, label: "History of science",               anchor: "history-of-science",    domain: "history" },

  // ── World ──
  { key: "economics",             order: 23.1, label: "Economics",                        anchor: "economics",             domain: "world" },
  { key: "civics",                order: 23.2, label: "Civics",                           anchor: "civics",                domain: "world" },
  { key: "geography",             order: 23.3, label: "Geography",                        anchor: "geography",             domain: "world" },
  { key: "media-literacy",        order: 23.4, label: "Media literacy",                   anchor: "media-literacy",        domain: "world" },
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
