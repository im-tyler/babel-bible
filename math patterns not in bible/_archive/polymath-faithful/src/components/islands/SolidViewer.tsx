import { useEffect, useRef, useState } from "preact/hooks";
import { counts, fibonacciSphere } from "../../math/projection";
import type { Projection } from "../../math/projection";
import styles from "./SolidViewer.module.css";

// First heavy-client-lib island. Three.js is dynamically imported INSIDE the
// effect so it never enters the SSR module graph (the component still
// server-renders its shell + readout; WebGL spins up only on the client).

export default function SolidViewer(props: {
  a: number;
  b: number;
  c: number;
  projection?: Projection;
  selectable?: boolean;
}) {
  const triple = { a: props.a, b: props.b, c: props.c };
  const [proj, setProj] = useState<Projection>(props.projection ?? "convex");
  const [ready, setReady] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  const cnt = counts(triple, proj);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    let raf = 0;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      const { OrbitControls } = await import("three/addons/controls/OrbitControls.js");
      const { ConvexGeometry } = await import("three/addons/geometries/ConvexGeometry.js");
      if (disposed || !el) return;

      const height = 380;
      const width = el.clientWidth || 600;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 3.2);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height);
      el.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.minDistance = 2;
      controls.maxDistance = 6;

      const verts = fibonacciSphere(cnt.V).map(([x, y, z]) => new THREE.Vector3(x, y, z));
      const hull = new ConvexGeometry(verts);

      const group = new THREE.Group();
      group.add(
        new THREE.Mesh(
          hull,
          new THREE.MeshBasicMaterial({ color: 0x5b8def, transparent: true, opacity: 0.07 })
        )
      );
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(hull),
        new THREE.LineBasicMaterial({ color: 0x5b8def })
      );
      group.add(edges);
      const ptsGeo = new THREE.BufferGeometry().setFromPoints(verts);
      const points = new THREE.Points(
        ptsGeo,
        new THREE.PointsMaterial({ color: 0xe0a458, size: 0.055 })
      );
      group.add(points);
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
        if (!reduce) group.rotation.y += 0.003;
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
      setReady(true);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        controls.dispose();
        hull.dispose();
        edges.geometry.dispose();
        ptsGeo.dispose();
        scene.traverse((o) => {
          const mat = (o as { material?: { dispose?: () => void } }).material;
          mat?.dispose?.();
        });
        renderer.dispose();
        if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [cnt.V]);

  return (
    <figure class={styles.figure}>
      <div ref={hostRef} class={styles.canvas}>
        {!ready && <div class={styles.loading}>initializing renderer…</div>}
      </div>

      {props.selectable && (
        <div class={styles.controls} role="group" aria-label="Projection">
          {(["convex", "stellated"] as Projection[]).map((p) => (
            <button
              type="button"
              class={`${styles.tab} ${proj === p ? styles.tabActive : ""}`}
              aria-pressed={proj === p}
              onClick={() => {
                setReady(false);
                setProj(p);
              }}
            >
              {p}
            </button>
          ))}
        </div>
      )}

      <div class={styles.readout}>
        <span>
          triple <strong>({triple.a}, {triple.b}, {triple.c})</strong>
        </span>
        <span>
          {proj} <strong>V {cnt.V} · E {cnt.E} · F {cnt.F}</strong>
        </span>
        <span>
          V−E+F = <strong>{cnt.V - cnt.E + cnt.F}</strong>
        </span>
      </div>
      <p class={styles.caveat}>
        Placeholder geometry: {cnt.V} golden-spiral vertices under their convex hull. The rendered edges are
        the hull's, not the claimed E = {cnt.E}; this preserves the vertex count, not the topology.
      </p>
    </figure>
  );
}
