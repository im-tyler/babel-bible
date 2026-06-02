import { useState } from "preact/hooks";
import styles from "./TonePlayer.module.css";

// Tone.js is loaded lazily on the first user gesture (browsers require a gesture
// to start an AudioContext), so it never enters the SSR path.

export type PlayItem = { label: string; freqs: number[]; swatch?: string; detail?: string };

let toneMod: typeof import("tone") | null = null;
let synth: import("tone").PolySynth | null = null;

async function ensureSynth() {
  if (!toneMod) toneMod = await import("tone");
  await toneMod.start();
  if (!synth) {
    synth = new toneMod.PolySynth(toneMod.Synth).toDestination();
    synth.volume.value = -10;
  }
  return synth;
}

export default function TonePlayer({ items, hold = 1.6 }: { items: PlayItem[]; hold?: number }) {
  const [active, setActive] = useState<number | null>(null);

  async function play(i: number) {
    setActive(i);
    try {
      const s = await ensureSynth();
      s.triggerAttackRelease(items[i].freqs, hold);
    } catch {
      /* audio may be blocked; ignore */
    }
    window.setTimeout(() => setActive((cur) => (cur === i ? null : cur)), hold * 1000);
  }

  return (
    <div class={styles.player}>
      {items.map((item, i) => (
        <div class={styles.row}>
          <button
            type="button"
            class={`${styles.btn} ${active === i ? styles.btnActive : ""}`}
            onClick={() => play(i)}
          >
            {item.swatch && <span class={styles.swatch} style={`background:${item.swatch}`} />}
            <span>{item.label}</span>
            {item.detail && <span class={styles.freq}>{item.detail}</span>}
          </button>
        </div>
      ))}
      <p class={styles.hint}>Audio starts on first click. Plays as just-intonation tones.</p>
    </div>
  );
}
