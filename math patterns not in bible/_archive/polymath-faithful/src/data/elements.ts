// Periodic table data + computed electron shells. The shell counts come from a
// real idealized Aufbau/Madelung fill (a few real elements have exceptions like
// Cr, Cu — noted in the UI). xpos/ypos give standard grid placement (f-block in
// rows 9/10). Tier: STANDARD (data + filling are real).

export type Category =
  | "alkali" | "alkaline" | "transition" | "post-transition" | "metalloid"
  | "nonmetal" | "halogen" | "noble" | "lanthanide" | "actinide" | "unknown";

export type Element = {
  z: number;
  symbol: string;
  name: string;
  category: Category;
  xpos: number;
  ypos: number;
  shells: number[];
};

// Madelung filling order as [n, l]; capacity = 2(2l+1).
const ORBITALS: [number, number][] = [
  [1, 0], [2, 0], [2, 1], [3, 0], [3, 1], [4, 0], [3, 2], [4, 1], [5, 0],
  [4, 2], [5, 1], [6, 0], [4, 3], [5, 2], [6, 1], [7, 0], [5, 3], [6, 2], [7, 1],
];

/** Electrons per principal shell for atomic number z (idealized Aufbau order). */
export function electronShells(z: number): number[] {
  let e = z;
  const byN: Record<number, number> = {};
  for (const [n, l] of ORBITALS) {
    if (e <= 0) break;
    const take = Math.min(2 * (2 * l + 1), e);
    byN[n] = (byN[n] || 0) + take;
    e -= take;
  }
  return Object.keys(byN)
    .map(Number)
    .sort((a, b) => a - b)
    .map((n) => byN[n]);
}

// [z, symbol, name, category, xpos, ypos]
const RAW: [number, string, string, Category, number, number][] = [
  [1, "H", "Hydrogen", "nonmetal", 1, 1], [2, "He", "Helium", "noble", 18, 1],
  [3, "Li", "Lithium", "alkali", 1, 2], [4, "Be", "Beryllium", "alkaline", 2, 2],
  [5, "B", "Boron", "metalloid", 13, 2], [6, "C", "Carbon", "nonmetal", 14, 2],
  [7, "N", "Nitrogen", "nonmetal", 15, 2], [8, "O", "Oxygen", "nonmetal", 16, 2],
  [9, "F", "Fluorine", "halogen", 17, 2], [10, "Ne", "Neon", "noble", 18, 2],
  [11, "Na", "Sodium", "alkali", 1, 3], [12, "Mg", "Magnesium", "alkaline", 2, 3],
  [13, "Al", "Aluminium", "post-transition", 13, 3], [14, "Si", "Silicon", "metalloid", 14, 3],
  [15, "P", "Phosphorus", "nonmetal", 15, 3], [16, "S", "Sulfur", "nonmetal", 16, 3],
  [17, "Cl", "Chlorine", "halogen", 17, 3], [18, "Ar", "Argon", "noble", 18, 3],
  [19, "K", "Potassium", "alkali", 1, 4], [20, "Ca", "Calcium", "alkaline", 2, 4],
  [21, "Sc", "Scandium", "transition", 3, 4], [22, "Ti", "Titanium", "transition", 4, 4],
  [23, "V", "Vanadium", "transition", 5, 4], [24, "Cr", "Chromium", "transition", 6, 4],
  [25, "Mn", "Manganese", "transition", 7, 4], [26, "Fe", "Iron", "transition", 8, 4],
  [27, "Co", "Cobalt", "transition", 9, 4], [28, "Ni", "Nickel", "transition", 10, 4],
  [29, "Cu", "Copper", "transition", 11, 4], [30, "Zn", "Zinc", "transition", 12, 4],
  [31, "Ga", "Gallium", "post-transition", 13, 4], [32, "Ge", "Germanium", "metalloid", 14, 4],
  [33, "As", "Arsenic", "metalloid", 15, 4], [34, "Se", "Selenium", "nonmetal", 16, 4],
  [35, "Br", "Bromine", "halogen", 17, 4], [36, "Kr", "Krypton", "noble", 18, 4],
  [37, "Rb", "Rubidium", "alkali", 1, 5], [38, "Sr", "Strontium", "alkaline", 2, 5],
  [39, "Y", "Yttrium", "transition", 3, 5], [40, "Zr", "Zirconium", "transition", 4, 5],
  [41, "Nb", "Niobium", "transition", 5, 5], [42, "Mo", "Molybdenum", "transition", 6, 5],
  [43, "Tc", "Technetium", "transition", 7, 5], [44, "Ru", "Ruthenium", "transition", 8, 5],
  [45, "Rh", "Rhodium", "transition", 9, 5], [46, "Pd", "Palladium", "transition", 10, 5],
  [47, "Ag", "Silver", "transition", 11, 5], [48, "Cd", "Cadmium", "transition", 12, 5],
  [49, "In", "Indium", "post-transition", 13, 5], [50, "Sn", "Tin", "post-transition", 14, 5],
  [51, "Sb", "Antimony", "metalloid", 15, 5], [52, "Te", "Tellurium", "metalloid", 16, 5],
  [53, "I", "Iodine", "halogen", 17, 5], [54, "Xe", "Xenon", "noble", 18, 5],
  [55, "Cs", "Caesium", "alkali", 1, 6], [56, "Ba", "Barium", "alkaline", 2, 6],
  [57, "La", "Lanthanum", "lanthanide", 3, 9], [58, "Ce", "Cerium", "lanthanide", 4, 9],
  [59, "Pr", "Praseodymium", "lanthanide", 5, 9], [60, "Nd", "Neodymium", "lanthanide", 6, 9],
  [61, "Pm", "Promethium", "lanthanide", 7, 9], [62, "Sm", "Samarium", "lanthanide", 8, 9],
  [63, "Eu", "Europium", "lanthanide", 9, 9], [64, "Gd", "Gadolinium", "lanthanide", 10, 9],
  [65, "Tb", "Terbium", "lanthanide", 11, 9], [66, "Dy", "Dysprosium", "lanthanide", 12, 9],
  [67, "Ho", "Holmium", "lanthanide", 13, 9], [68, "Er", "Erbium", "lanthanide", 14, 9],
  [69, "Tm", "Thulium", "lanthanide", 15, 9], [70, "Yb", "Ytterbium", "lanthanide", 16, 9],
  [71, "Lu", "Lutetium", "lanthanide", 17, 9],
  [72, "Hf", "Hafnium", "transition", 4, 6], [73, "Ta", "Tantalum", "transition", 5, 6],
  [74, "W", "Tungsten", "transition", 6, 6], [75, "Re", "Rhenium", "transition", 7, 6],
  [76, "Os", "Osmium", "transition", 8, 6], [77, "Ir", "Iridium", "transition", 9, 6],
  [78, "Pt", "Platinum", "transition", 10, 6], [79, "Au", "Gold", "transition", 11, 6],
  [80, "Hg", "Mercury", "transition", 12, 6], [81, "Tl", "Thallium", "post-transition", 13, 6],
  [82, "Pb", "Lead", "post-transition", 14, 6], [83, "Bi", "Bismuth", "post-transition", 15, 6],
  [84, "Po", "Polonium", "post-transition", 16, 6], [85, "At", "Astatine", "halogen", 17, 6],
  [86, "Rn", "Radon", "noble", 18, 6],
  [87, "Fr", "Francium", "alkali", 1, 7], [88, "Ra", "Radium", "alkaline", 2, 7],
  [89, "Ac", "Actinium", "actinide", 3, 10], [90, "Th", "Thorium", "actinide", 4, 10],
  [91, "Pa", "Protactinium", "actinide", 5, 10], [92, "U", "Uranium", "actinide", 6, 10],
  [93, "Np", "Neptunium", "actinide", 7, 10], [94, "Pu", "Plutonium", "actinide", 8, 10],
  [95, "Am", "Americium", "actinide", 9, 10], [96, "Cm", "Curium", "actinide", 10, 10],
  [97, "Bk", "Berkelium", "actinide", 11, 10], [98, "Cf", "Californium", "actinide", 12, 10],
  [99, "Es", "Einsteinium", "actinide", 13, 10], [100, "Fm", "Fermium", "actinide", 14, 10],
  [101, "Md", "Mendelevium", "actinide", 15, 10], [102, "No", "Nobelium", "actinide", 16, 10],
  [103, "Lr", "Lawrencium", "actinide", 17, 10],
  [104, "Rf", "Rutherfordium", "transition", 4, 7], [105, "Db", "Dubnium", "transition", 5, 7],
  [106, "Sg", "Seaborgium", "transition", 6, 7], [107, "Bh", "Bohrium", "transition", 7, 7],
  [108, "Hs", "Hassium", "transition", 8, 7], [109, "Mt", "Meitnerium", "unknown", 9, 7],
  [110, "Ds", "Darmstadtium", "unknown", 10, 7], [111, "Rg", "Roentgenium", "unknown", 11, 7],
  [112, "Cn", "Copernicium", "transition", 12, 7], [113, "Nh", "Nihonium", "unknown", 13, 7],
  [114, "Fl", "Flerovium", "post-transition", 14, 7], [115, "Mc", "Moscovium", "unknown", 15, 7],
  [116, "Lv", "Livermorium", "unknown", 16, 7], [117, "Ts", "Tennessine", "halogen", 17, 7],
  [118, "Og", "Oganesson", "noble", 18, 7],
];

export const ELEMENTS: Element[] = RAW.map(([z, symbol, name, category, xpos, ypos]) => ({
  z, symbol, name, category, xpos, ypos, shells: electronShells(z),
}));

export const ELEMENT_BY_Z: Record<number, Element> = Object.fromEntries(
  ELEMENTS.map((e) => [e.z, e])
);

export const CATEGORY_LABEL: Record<Category, string> = {
  alkali: "Alkali metal", alkaline: "Alkaline earth", transition: "Transition metal",
  "post-transition": "Post-transition metal", metalloid: "Metalloid", nonmetal: "Nonmetal",
  halogen: "Halogen", noble: "Noble gas", lanthanide: "Lanthanide", actinide: "Actinide",
  unknown: "Unknown / predicted",
};
