import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);
    scene.fog = new THREE.FogExp2(0x08080d, 0.018);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0, 0.5, 7);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.2, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.minDistance = 4;
    controls.maxDistance = 20;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x202830, 0.6));
    const key = new THREE.DirectionalLight(0xfff0d6, 0.8);
    key.position.set(2, 3, 4);
    scene.add(key);

    const GOLD = 0xd4a574;
    const CREAM = 0xf0e6d3;

    // Latin cross — vertical 3.2u, transom at 2/3 up, depth 0.35
    const beamMat = new THREE.MeshStandardMaterial({
        color: GOLD,
        roughness: 0.4,
        metalness: 0.3,
        emissive: 0x1a0e04,
    });

    const vertical = new THREE.Mesh(new THREE.BoxGeometry(0.45, 3.2, 0.35), beamMat);
    vertical.position.y = 0.2;
    scene.add(vertical);

    const horizontal = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.45, 0.35), beamMat);
    horizontal.position.y = 0.85;
    scene.add(horizontal);

    // Vesica piscis halo — Christian sacred-geometric heritage
    function arcCurve(centerX, radius, segments = 64) {
        const pts = [];
        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const a = -Math.PI / 2 + Math.PI * t;
            pts.push(new THREE.Vector3(centerX + radius * Math.cos(a), radius * Math.sin(a), 0));
        }
        return pts;
    }
    const haloMat = new THREE.LineBasicMaterial({ color: CREAM, transparent: true, opacity: 0.35 });
    const r = 2.2;
    [-r / 2, r / 2].forEach((cx) => {
        const pts = arcCurve(cx, r);
        const geom = new THREE.BufferGeometry().setFromPoints(pts);
        scene.add(new THREE.Line(geom, haloMat));
    });

    // Faint outer aureole
    const aureole = new THREE.Mesh(
        new THREE.TorusGeometry(2.8, 0.02, 6, 96),
        new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.35 }),
    );
    scene.add(aureole);

    function update() {
        // OrbitControls autoRotate drives motion
    }

    return { scene, camera, controls, update, labels: false };
}
