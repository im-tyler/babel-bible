import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);
    scene.fog = new THREE.FogExp2(0x08080d, 0.018);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(4, 3, 6);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = false;  // perichoresis is a structure, not motion
    controls.minDistance = 4;
    controls.maxDistance = 20;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x202830, 0.6));

    function fillMat(color, opacity = 0.08) {
        return new THREE.MeshBasicMaterial({
            color, transparent: true, opacity,
            side: THREE.DoubleSide, depthWrite: false,
        });
    }
    function lineMat(color, opacity = 0.7) {
        return new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    }

    const COLORS = [0xd4a574, 0x8888aa, 0xf0e6d3];
    const RING_RADIUS = 1.7;
    const TUBE_RADIUS = 0.13;
    const RING_GEO = new THREE.TorusGeometry(RING_RADIUS, TUBE_RADIUS, 8, 48);

    function makeRing(color, rx, ry, rz) {
        const grp = new THREE.Group();
        grp.add(new THREE.Mesh(RING_GEO, fillMat(color, 0.07)));
        grp.add(new THREE.LineSegments(new THREE.WireframeGeometry(RING_GEO), lineMat(color, 0.7)));
        grp.rotation.set(rx, ry, rz);
        scene.add(grp);
    }

    makeRing(COLORS[0],  0.45, -0.25, 0);
    makeRing(COLORS[1], -0.45,  0.25, Math.PI / 3);
    makeRing(COLORS[2],  0.0,   0.0,  (2 * Math.PI) / 3);

    // Centre point — the perichoretic meeting where all three mutually indwell
    const centreGlow = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.16, 0),
        new THREE.MeshBasicMaterial({
            color: 0xfff0d6,
            transparent: true,
            opacity: 0.55,
            blending: THREE.AdditiveBlending,
        }),
    );
    scene.add(centreGlow);

    function update() {
        // Static — perichoresis is a structural relationship, not a movement
    }

    return { scene, camera, controls, update, labels: false };
}
