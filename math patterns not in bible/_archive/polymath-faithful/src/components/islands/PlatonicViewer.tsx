import { useEffect, useRef, useState } from "preact/hooks";
import styles from "./SolidViewer.module.css";

// Real Platonic solids via Three.js built-in geometries (genuine topology,
// unlike the Grant placeholder). Tier: STANDARD.

type Solid = { name: string; V: number; E: number; F: number };
const SOLIDS: Record<string, Solid> = {
  tetrahedron: { name: "Tetrahedron", V: 4, E: 6, F: 4 },
  cube: { name: "Cube", V: 8, E: 12, F: 6 },
  octahedron: { name: "Octahedron", V: 6, E: 12, F: 8 },
  dodecahedron: { name: "Dodecahedron", V: 20, E: 30, F: 12 },
  icosahedron: { name: "Icosahedron", V: 12, E: 30, F: 20 },
};
const KEYS = Object.keys(SOLIDS);

export default function PlatonicViewer() {
  const [key, setKey] = useState("dodecahedron");
  const [ready, setReady] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);
  const s = SOLIDS[key];

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    let raf = 0;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      const { OrbitControls } = await import("three/addons/controls/OrbitControls.js");
      if (disposed || !el) return;

      const height = 380;
      const width = el.clientWidth || 600;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 3.4);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height);
      el.appendChild(renderer.domElement);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enablePan = false;

      const geo =
        key === "tetrahedron" ? new THREE.TetrahedronGeometry(1.3)
        : key === "cube" ? new THREE.BoxGeometry(1.7, 1.7, 1.7)
        : key === "octahedron" ? new THREE.OctahedronGeometry(1.4)
        : key === "dodecahedron" ? new THREE.DodecahedronGeometry(1.3)
        : new THREE.IcosahedronGeometry(1.3);

      const group = new THREE.Group();
      group.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x5b8def, transparent: true, opacity: 0.08 })));
      group.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0x5b8def })));
      scene.add(group);

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const ro = new ResizeObserver(() => {
        const w = el.clientWidth || 600;
        renderer.setSize(w, height);
        camera.aspect = w / height;
        camera.updateProjectionMatrix();
      });
      ro.observe(el);
      const animate = () => {
        raf = requestAnimationFrame(animate);
        if (!reduce) group.rotation.y += 0.004;
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
      setReady(true);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        controls.dispose();
        geo.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [key]);

  return (
    <figure class={styles.figure}>
      <div ref={hostRef} class={styles.canvas}>
        {!ready && <div class={styles.loading}>initializing renderer…</div>}
      </div>
      <div class={styles.controls} role="group" aria-label="Platonic solid">
        {KEYS.map((k) => (
          <button
            type="button"
            class={`${styles.tab} ${key === k ? styles.tabActive : ""}`}
            aria-pressed={key === k}
            onClick={() => {
              setReady(false);
              setKey(k);
            }}
          >
            {SOLIDS[k].name}
          </button>
        ))}
      </div>
      <div class={styles.readout}>
        <span>
          <strong>{s.name}</strong>
        </span>
        <span>
          V {s.V} · E {s.E} · F {s.F}
        </span>
        <span>
          V−E+F = <strong>{s.V - s.E + s.F}</strong>
        </span>
      </div>
    </figure>
  );
}
