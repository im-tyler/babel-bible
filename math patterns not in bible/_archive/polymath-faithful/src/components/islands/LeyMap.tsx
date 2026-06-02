import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "preact/hooks";
import { SACRED_SITES } from "../../data/sacredSites";
import styles from "./LeyMap.module.css";

// Leaflet is dynamic-imported inside the effect (it touches window at import).
// circleMarkers avoid the bundler icon-path problem (no image assets needed).

export default function LeyMap() {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let disposed = false;
    let map: import("leaflet").Map | null = null;

    (async () => {
      const L = await import("leaflet");
      if (disposed || !el) return;
      map = L.map(el, { worldCopyJump: true, minZoom: 1, scrollWheelZoom: false }).setView([20, 10], 2);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: "© OpenStreetMap, © CARTO",
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      const pts = SACRED_SITES.map((s) => [s.lat, s.lng] as [number, number]);
      L.polyline(pts, { color: "#5b8def", weight: 1, opacity: 0.5, dashArray: "5 5" }).addTo(map);
      for (const s of SACRED_SITES) {
        L.circleMarker([s.lat, s.lng], {
          radius: 6,
          color: "#5b8def",
          weight: 2,
          fillColor: "#e0a458",
          fillOpacity: 0.9,
        })
          .addTo(map)
          .bindPopup(`<strong>${s.name}</strong><br>${s.note}`);
      }
      setReady(true);
    })();

    return () => {
      disposed = true;
      if (map) map.remove();
    };
  }, []);

  return (
    <figure class={styles.figure}>
      <div class={styles.mapWrap}>
        <div ref={ref} class={styles.map} />
        {!ready && <div class={styles.loading}>loading map…</div>}
      </div>
      <p class={styles.caveat}>
        Real site coordinates on a dark base map. The dashed connectors are illustrative — "ley lines" are
        folklore, not a measured alignment.
      </p>
    </figure>
  );
}
