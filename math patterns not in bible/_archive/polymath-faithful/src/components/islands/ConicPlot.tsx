import { useState } from "preact/hooks";
import { consecutiveLegFamily } from "../../math/triples";
import { tripleToHyperbola, upperBranch, rapidity, hyperbolaResidual } from "../../math/hyperbola";
import styles from "./ConicPlot.module.css";

// Interactive plot of x² − y² = 1 with the consecutive-leg family points.
// Pure SVG + Preact hooks — no third-party renderer. First island in the app.

const W = 640;
const H = 440;
const PAD = { l: 48, r: 24, t: 24, b: 40 };
const X0 = 0.95;
const X1 = 1.45;
const Y0 = -1.05;
const Y1 = 1.05;

const sx = (x: number) => PAD.l + ((x - X0) / (X1 - X0)) * (W - PAD.l - PAD.r);
const sy = (y: number) => PAD.t + (1 - (y - Y0) / (Y1 - Y0)) * (H - PAD.t - PAD.b);

function branchPath(sign: 1 | -1): string {
  const pts = upperBranch(X1, 160).filter((p) => p.x >= X0);
  return pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${sx(p.x).toFixed(2)} ${sy(sign * p.y).toFixed(2)}`)
    .join(" ");
}

export default function ConicPlot({ count = 6 }: { count?: number }) {
  const family = consecutiveLegFamily(count);
  const points = family.map(tripleToHyperbola);
  const [active, setActive] = useState<number>(0);

  const t = family[active];
  const p = points[active];
  const theta = rapidity(p);
  const residual = hyperbolaResidual(p);

  const xTicks = [1.0, 1.1, 1.2, 1.3, 1.4];
  const yTicks = [-1, -0.5, 0, 0.5, 1];

  return (
    <figure class={styles.figure}>
      <svg
        class={styles.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Unit hyperbola x squared minus y squared equals one, with Pythagorean triple points plotted"
      >
        {/* grid */}
        {xTicks.map((x) => (
          <line class={styles.grid} x1={sx(x)} y1={sy(Y1)} x2={sx(x)} y2={sy(Y0)} />
        ))}
        {yTicks.map((y) => (
          <line class={styles.grid} x1={sx(X0)} y1={sy(y)} x2={sx(X1)} y2={sy(y)} />
        ))}
        {/* y = 0 axis */}
        <line class={styles.axis} x1={sx(X0)} y1={sy(0)} x2={sx(X1)} y2={sy(0)} />

        {/* tick labels */}
        {xTicks.map((x) => (
          <text class={styles.axisLabel} x={sx(x)} y={H - PAD.b + 16} text-anchor="middle">
            {x.toFixed(1)}
          </text>
        ))}
        {yTicks.map((y) => (
          <text class={styles.axisLabel} x={PAD.l - 8} y={sy(y) + 4} text-anchor="end">
            {y.toFixed(1)}
          </text>
        ))}

        {/* the hyperbola (both branches near the vertex) */}
        <path class={styles.curve} d={branchPath(1)} />
        <path class={styles.curve} d={branchPath(-1)} />

        {/* vertex (1, 0) */}
        <circle class={styles.vertex} cx={sx(1)} cy={sy(0)} r={3} />

        {/* family points */}
        {points.map((pt, i) => (
          <circle
            class={`${styles.point} ${i === active ? styles.pointActive : ""}`}
            cx={sx(pt.x)}
            cy={sy(pt.y)}
            r={i === active ? 7 : 5}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            tabindex={0}
            role="button"
            aria-label={`Triple ${family[i].a}, ${family[i].b}, ${family[i].c}`}
          />
        ))}

        {/* active label */}
        <text class={styles.label} x={sx(p.x) + 10} y={sy(p.y) - 8}>
          ({t.a}, {t.b}, {t.c})
        </text>
      </svg>

      <div class={styles.readout}>
        <span>
          triple <strong>({t.a}, {t.b}, {t.c})</strong>
        </span>
        <span>
          point <strong>({p.x.toFixed(4)}, {p.y.toFixed(4)})</strong>
        </span>
        <span>
          x²−y²−1 = <strong>{residual.toExponential(1)}</strong>
        </span>
        <span>
          θ = atanh(y/x) = <strong>{theta.toFixed(4)}</strong>
        </span>
      </div>
      <p class={styles.hint}>Hover or focus a point. Every triple lands exactly on the curve.</p>
    </figure>
  );
}
