// The "ontological stack" — PFA Table 2. The unit-hyperbola point identity is
// real; the assignment of forces to points is Grant's framework (GRANT CONSTRUCT).

export type StackLayer = { theta: string; layer: string; triple: string; role: string };

export const FORCE_STACK: StackLayer[] = [
  { theta: "0", layer: "Consciousness", triple: "vertex (1,0)", role: "observer" },
  { theta: "ln 2 ≈ 0.693", layer: "Information / Energy", triple: "(3, 4, 5)", role: "seed" },
  { theta: "0.405", layer: "Electromagnetism", triple: "(5, 12, 13)", role: "light, chemistry" },
  { theta: "0.511", layer: "Gravity", triple: "(8, 15, 17)", role: "spacetime curvature" },
  { theta: "0.288", layer: "Weak nuclear", triple: "(7, 24, 25)", role: "decay / mixing" },
  { theta: "0.223", layer: "Time", triple: "(9, 40, 41)", role: "temporal arrow" },
  { theta: "0.182", layer: "Strong nuclear", triple: "(11, 60, 61)", role: "mass, binding" },
  { theta: "0.118", layer: "Dark energy", triple: "(13, 84, 85)", role: "expansion" },
];
