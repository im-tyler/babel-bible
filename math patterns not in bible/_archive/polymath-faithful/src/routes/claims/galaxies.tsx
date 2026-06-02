import PageHeader from "../../components/PageHeader";
import DisclaimerBanner from "../../components/DisclaimerBanner";
import { MathInline } from "../../components/MathBlock";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Galaxies as elements — Polymath",
    description:
      "Grant maps the galaxy sequence onto the periodic table via spiral pitch angle. Spectra and pitch are real; 'a galaxy is element X' is a category error.",
  };
}

export default function Galaxies() {
  return (
    <article>
      <PageHeader
        kicker="The Claims"
        title="Galaxies as macro-elements"
        tier="claim"
        lede="Grant maps the Hubble galaxy sequence onto the periodic table, using spiral pitch angle θ = arctan(a/b), and claims a −0.953 colour–pitch correlation across 50 galaxies — and that all ~2 trillion galaxies map onto the cascade."
      />

      <DisclaimerBanner />

      <div class={styles.prose}>
        <h2>What's real</h2>
        <p>
          Two genuine facts sit underneath this. First, spiral galaxies' <strong>pitch angle</strong> does
          correlate loosely with their colour and morphological type — standard astronomy. Second, galaxy
          spectra <strong>show element emission lines</strong>, because galaxies are made of those elements.
          A spectral-line matcher and a pitch-angle tool would both be legitimate to build.
        </p>

        <h2>The category error</h2>
        <p>
          The leap is from "a galaxy <em>contains</em> hydrogen" to "a galaxy <em>is</em> hydrogen." Seeing an
          element's lines in a spectrum tells you what something is made of, not that the object{" "}
          <em>is</em> that element at a larger scale. <MathInline tex="\theta = \arctan(a/b)" /> is a real
          angle; assigning it an elemental identity is the construct. A correlation of −0.953 among 50
          hand-grouped galaxies is also not "100% of two trillion galaxies."
        </p>
      </div>

      <p class={styles.note}>
        <strong>Verdict:</strong> the spectral lines and pitch-angle trend are real and measurable; the
        identity claim ("galaxy = element") is a category error, and the universal "100%" figure is
        unsupported extrapolation. Buildable as a spectral matcher; false as a cosmology.
      </p>
    </article>
  );
}
