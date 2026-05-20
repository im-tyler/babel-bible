import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0, 4, 7);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = false;  // classical mandalas are still — meditation is still
    controls.minDistance = 4;
    controls.maxDistance = 20;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x404050, 0.65));

    function fillMat(color, opacity = 0.08) {
        return new THREE.MeshBasicMaterial({
            color, transparent: true, opacity,
            side: THREE.DoubleSide, depthWrite: false,
        });
    }
    function lineMat(color, opacity = 0.8) {
        return new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    }

    const mandala = new THREE.Group();
    scene.add(mandala);
    mandala.rotation.x = -Math.PI / 2;

    // Central bindu
    const binduGeo = new THREE.IcosahedronGeometry(0.15, 0);
    mandala.add(new THREE.LineSegments(
        new THREE.WireframeGeometry(binduGeo),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 }),
    ));

    // Innermost ring of 8 small wireframe icosahedra
    const dotGeo = new THREE.IcosahedronGeometry(0.08, 0);
    const INNER_R = 0.55;
    for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        const wire = new THREE.LineSegments(
            new THREE.WireframeGeometry(dotGeo),
            lineMat(0xffeacc, 0.8),
        );
        wire.position.set(Math.cos(a) * INNER_R, Math.sin(a) * INNER_R, 0);
        mandala.add(wire);
    }

    // Inner ring of lotus petals — wireframe cones
    const PETAL_R = 1.2;
    const petalGeo = new THREE.ConeGeometry(0.22, 0.65, 6);
    for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        const grp = new THREE.Group();
        grp.add(new THREE.Mesh(petalGeo, fillMat(0xff8e60, 0.08)));
        grp.add(new THREE.LineSegments(new THREE.EdgesGeometry(petalGeo), lineMat(0xff8e60, 0.75)));
        grp.position.set(Math.cos(a) * PETAL_R, Math.sin(a) * PETAL_R, 0);
        grp.rotation.z = a - Math.PI / 2;
        mandala.add(grp);
    }

    // Middle ring of small dots — wireframe
    const BUD_R = 1.9;
    const budGeo = new THREE.IcosahedronGeometry(0.1, 0);
    for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        const wire = new THREE.LineSegments(
            new THREE.WireframeGeometry(budGeo),
            lineMat(0xc874aa, 0.7),
        );
        wire.position.set(Math.cos(a) * BUD_R, Math.sin(a) * BUD_R, 0);
        mandala.add(wire);
    }

    // Outer ring of petals
    const OUTER_R = 2.7;
    const outerPetalGeo = new THREE.ConeGeometry(0.3, 1.0, 6);
    for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
        const grp = new THREE.Group();
        grp.add(new THREE.Mesh(outerPetalGeo, fillMat(0x4a78c8, 0.08)));
        grp.add(new THREE.LineSegments(new THREE.EdgesGeometry(outerPetalGeo), lineMat(0x4a78c8, 0.75)));
        grp.position.set(Math.cos(a) * OUTER_R, Math.sin(a) * OUTER_R, 0);
        grp.rotation.z = a - Math.PI / 2;
        mandala.add(grp);
    }

    // Four cardinal gates — wireframe boxes
    const gateGeo = new THREE.BoxGeometry(0.9, 0.18, 0.4);
    const GATE_DIST = 3.4;
    for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        const gate = new THREE.Group();
        gate.add(new THREE.Mesh(gateGeo, fillMat(0xc8a04e, 0.08)));
        gate.add(new THREE.LineSegments(new THREE.EdgesGeometry(gateGeo), lineMat(0xc8a04e, 0.8)));
        gate.position.set(Math.cos(a) * GATE_DIST, Math.sin(a) * GATE_DIST, 0);
        gate.rotation.z = a;
        mandala.add(gate);
    }

    // Outer boundary ring — wireframe torus
    const boundaryGeo = new THREE.TorusGeometry(3.4, 0.04, 6, 64);
    mandala.add(new THREE.Mesh(boundaryGeo, fillMat(0xc8a04e, 0.07)));
    mandala.add(new THREE.LineSegments(
        new THREE.WireframeGeometry(boundaryGeo),
        lineMat(0xc8a04e, 0.65),
    ));

    function update() {
        // Static
    }

    return { scene, camera, controls, update, labels: false };
}
