import { useEffect, useRef, useState } from "preact/hooks";
import styles from "./SolidViewer.module.css";

// The Kepler-triangle "inward cascade": nested dodecahedra shrinking by φ^-k.
// Grant's reinterpretation of the 120-cell as the dodecahedron "breathing
// inward." Tier: GRANT CONSTRUCT (the real 120-cell is a genuine 4-polytope).

const PHI = (1 + Math.sqrt(5)) / 2;

export default function CascadeViewer({ shells = 6 }: { shells?: number }) {
  const [ready, setReady] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

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

      const height = 400;
      const width = el.clientWidth || 600;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 4);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height);
      el.appendChild(renderer.domElement);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enablePan = false;

      const group = new THREE.Group();
      const geos: { dispose(): void }[] = [];
      for (let k = 0; k < shells; k++) {
        const r = 1.6 * Math.pow(PHI, -k);
        const geo = new THREE.DodecahedronGeometry(r);
        geos.push(geo);
        const opacity = 0.85 - k * 0.1;
        const color = k % 2 === 0 ? 0x5b8def : 0xe0a458;
        group.add(
          new THREE.LineSegments(
            new THREE.EdgesGeometry(geo),
            new THREE.LineBasicMaterial({ color, transparent: true, opacity: Math.max(0.2, opacity) })
          )
        );
      }
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
        if (!reduce) {
          group.rotation.y += 0.0035;
          group.rotation.x += 0.0012;
        }
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
      setReady(true);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        controls.dispose();
        geos.forEach((g) => g.dispose());
        renderer.dispose();
        if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [shells]);

  return (
    <figure class={styles.figure}>
      <div ref={hostRef} class={styles.canvas} style="height:400px">
        {!ready && <div class={styles.loading}>initializing renderer…</div>}
      </div>
      <div class={styles.readout}>
        <span>
          <strong>{shells}</strong> nested dodecahedra
        </span>
        <span>
          shell radius <strong>φ⁻ᵏ</strong>
        </span>
        <span>φ = {PHI.toFixed(6)}</span>
      </div>
      <p class={styles.caveat}>
        A visual of Grant's "inward breathing" reinterpretation. The genuine 120-cell is a real
        four-dimensional polytope; this nested-dodecahedron cascade is his 3D analogy, not the 4-polytope.
      </p>
    </figure>
  );
}
