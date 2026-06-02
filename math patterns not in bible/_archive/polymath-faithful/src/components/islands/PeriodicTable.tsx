import { useState } from "preact/hooks";
import { ELEMENTS, ELEMENT_BY_Z, CATEGORY_LABEL } from "../../data/elements";
import type { Element } from "../../data/elements";
import styles from "./PeriodicTable.module.css";

const CAT_CLASS: Record<string, string> = {
  alkali: styles.alkali, alkaline: styles.alkaline, transition: styles.transition,
  "post-transition": styles.posttransition, metalloid: styles.metalloid, nonmetal: styles.nonmetal,
  halogen: styles.halogen, noble: styles.noble, lanthanide: styles.lanthanide,
  actinide: styles.actinide, unknown: styles.unknown,
};

const LEGEND = ["alkali", "alkaline", "transition", "metalloid", "nonmetal", "halogen", "noble", "lanthanide", "actinide"] as const;

function Bohr({ el }: { el: Element }) {
  const cx = 80, cy = 80;
  const n = el.shells.length;
  const step = Math.min(9, (72 - 14) / Math.max(1, n));
  return (
    <svg class={styles.bohr} viewBox="0 0 160 160" role="img" aria-label={`Shell diagram for ${el.name}`}>
      {el.shells.map((count, i) => {
        const r = 14 + (i + 1) * step;
        const dots = Math.min(count, 18);
        return (
          <g>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--border-strong)" stroke-width="1" />
            {Array.from({ length: dots }, (_, d) => {
              const a = (d / dots) * Math.PI * 2;
              return <circle cx={cx + Math.cos(a) * r} cy={cy + Math.sin(a) * r} r="2" fill="var(--accent)" />;
            })}
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="11" fill="var(--accent-warm)" />
      <text x={cx} y={cy + 4} text-anchor="middle" font-size="11" font-weight="700" fill="#06080c">{el.symbol}</text>
    </svg>
  );
}

export default function PeriodicTable() {
  const [z, setZ] = useState(6); // Carbon
  const el = ELEMENT_BY_Z[z];
  const valence = el.shells[el.shells.length - 1];
  const capacities = el.shells.map((_, i) => 2 * (i + 1) * (i + 1));

  return (
    <div class={styles.wrap}>
      <div class={styles.grid} role="grid" aria-label="Periodic table">
        {ELEMENTS.map((e) => (
          <button
            type="button"
            class={`${styles.cell} ${CAT_CLASS[e.category]} ${e.z === z ? styles.cellActive : ""}`}
            style={`grid-column:${e.xpos};grid-row:${e.ypos}`}
            onClick={() => setZ(e.z)}
            aria-label={`${e.name} (${e.z})`}
          >
            <span class={styles.z}>{e.z}</span>
            <span class={styles.sym}>{e.symbol}</span>
          </button>
        ))}
      </div>

      <div class={styles.legend}>
        {LEGEND.map((c) => (
          <span class={styles.swatch}>
            <span class={`${styles.dot} ${CAT_CLASS[c]}`} />
            {CATEGORY_LABEL[c]}
          </span>
        ))}
      </div>

      <div class={styles.detail}>
        <Bohr el={el} />
        <div>
          <div class={styles.head}>
            <span class={styles.bigSym}>{el.symbol}</span>
            <span class={styles.meta}>
              {el.name} · Z = {el.z} · {CATEGORY_LABEL[el.category]}
            </span>
          </div>
          <dl class={styles.dl}>
            <dt>shells (K, L, …)</dt>
            <dd>{el.shells.join(", ")}</dd>
            <dt>shell capacities 2n²</dt>
            <dd>{capacities.join(", ")}</dd>
            <dt>valence electrons</dt>
            <dd>{valence}</dd>
            <dt class={styles.his}>predicted oxidation</dt>
            <dd class={styles.his}>{valence <= 4 ? `+${valence}` : `−${8 - valence}`} (framework heuristic)</dd>
          </dl>
          <div class={styles.links}>
            <a href="/elements/shells">2n² shell rule →</a>
            <a href="/resonance/spectral-chords">spectral chord →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
