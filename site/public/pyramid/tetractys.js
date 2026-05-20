import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0, 0, 7);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = false;  // Pythagorean diagram — static
    controls.minDistance = 4;
    controls.maxDistance = 18;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x30262a, 0.65));

    const DOT_COLOR = 0xd4a574;
    const LINE_COLOR = 0xc8a04e;

    function lineMat(color, opacity = 0.8) {
        return new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    }

    const DOT_R = 0.22;
    const GAP_X = 0.85;
    const GAP_Y = 0.85;
    const tetra = new THREE.Group();
    scene.add(tetra);

    const dotGeo = new THREE.IcosahedronGeometry(DOT_R, 0);
    const dots = [];

    function row(count, y) {
        const offset = -((count - 1) / 2) * GAP_X;
        const out = [];
        for (let i = 0; i < count; i++) {
            const mat = lineMat(DOT_COLOR, 0.9);
            const wire = new THREE.LineSegments(new THREE.WireframeGeometry(dotGeo), mat);
            wire.position.set(offset + i * GAP_X, y, 0);
            tetra.add(wire);
            const d = { mesh: wire, mat };
            dots.push(d);
            out.push(d);
        }
        return out;
    }

    const r1 = row(1,  GAP_Y * 1.5);
    const r2 = row(2,  GAP_Y * 0.5);
    const r3 = row(3, -GAP_Y * 0.5);
    const r4 = row(4, -GAP_Y * 1.5);

    function line(a, b) {
        const g = new THREE.BufferGeometry().setFromPoints([a.mesh.position, b.mesh.position]);
        tetra.add(new THREE.Line(g, lineMat(LINE_COLOR, 0.4)));
    }
    line(r1[0], r4[0]);
    line(r1[0], r4[3]);
    line(r4[0], r4[3]);
    line(r2[0], r2[1]);
    line(r3[0], r3[1]); line(r3[1], r3[2]);
    line(r4[0], r4[1]); line(r4[1], r4[2]); line(r4[2], r4[3]);
    line(r1[0], r2[0]); line(r1[0], r2[1]);
    line(r2[0], r3[0]); line(r2[0], r3[1]); line(r2[1], r3[1]); line(r2[1], r3[2]);
    line(r3[0], r4[0]); line(r3[0], r4[1]);
    line(r3[1], r4[1]); line(r3[1], r4[2]);
    line(r3[2], r4[2]); line(r3[2], r4[3]);

    function update() {
        // Static
    }

    return { scene, camera, controls, update, labels: false };
}
