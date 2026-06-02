import { primeSeries } from "../math/primes";
import styles from "./PrimePlot.module.css";

// Static, server-rendered SVG (no client JS). Shows real π(x) vs Li(x).

const W = 640;
const H = 400;
const PAD = { l: 52, r: 16, t: 16, b: 36 };

export default function PrimePlot({ max = 1000 }: { max?: number }) {
  const data = primeSeries(max, 50);
  const xMax = max;
  const yMax = Math.max(...data.map((d) => Math.max(d.pi, d.li))) * 1.05;

  const sx = (x: number) => PAD.l + (x / xMax) * (W - PAD.l - PAD.r);
  const sy = (y: number) => H - PAD.b - (y / yMax) * (H - PAD.t - PAD.b);
  const path = (key: "pi" | "li") =>
    data.map((d, i) => `${i === 0 ? "M" : "L"} ${sx(d.x).toFixed(1)} ${sy(d[key]).toFixed(1)}`).join(" ");

  const xticks = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(xMax * f));
  const yticks = [0, 0.5, 1].map((f) => Math.round(yMax * f));

  return (
    <figure class={styles.figure}>
      <svg class={styles.svg} viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Prime counting function versus the logarithmic integral">
        {yticks.map((y) => (
          <line class={styles.grid} x1={sx(0)} y1={sy(y)} x2={sx(xMax)} y2={sy(y)} />
        ))}
        <line class={styles.axis} x1={sx(0)} y1={sy(0)} x2={sx(xMax)} y2={sy(0)} />
        <line class={styles.axis} x1={sx(0)} y1={sy(0)} x2={sx(0)} y2={sy(yMax)} />
        {xticks.map((x) => (
          <text class={styles.axisLabel} x={sx(x)} y={H - PAD.b + 16} text-anchor="middle">{x}</text>
        ))}
        {yticks.map((y) => (
          <text class={styles.axisLabel} x={PAD.l - 8} y={sy(y) + 4} text-anchor="end">{y}</text>
        ))}
        <path class={styles.liLine} d={path("li")} />
        <path class={styles.pi} d={path("pi")} />
      </svg>
      <div class={styles.legend}>
        <span class={styles.key}>
          <span class={styles.dash} style="border-color:var(--accent)" /> π(x) — actual prime count
        </span>
        <span class={styles.key}>
          <span class={styles.dash} style="border-color:var(--accent-warm)" /> Li(x) — logarithmic integral
        </span>
      </div>
    </figure>
  );
}
