import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0, 0.5, 7);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = false;  // a yantra is meant to be gazed at, not spinning
    controls.minDistance = 3.5;
    controls.maxDistance = 18;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x303040, 0.65));

    function triangle(size, yOffset, downward, z, color, opacity) {
        const h = size * Math.sqrt(3) / 2;
        const pts = downward
            ? [ new THREE.Vector3(-size/2, yOffset + h/2, z),
                new THREE.Vector3( size/2, yOffset + h/2, z),
                new THREE.Vector3( 0,      yOffset - h/2, z),
                new THREE.Vector3(-size/2, yOffset + h/2, z) ]
            : [ new THREE.Vector3(-size/2, yOffset - h/2, z),
                new THREE.Vector3( size/2, yOffset - h/2, z),
                new THREE.Vector3( 0,      yOffset + h/2, z),
                new THREE.Vector3(-size/2, yOffset - h/2, z) ];
        const g = new THREE.BufferGeometry().setFromPoints(pts);
        return new THREE.Line(g, new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
    }

    const UP_COLOR = 0xffa844;
    const DOWN_COLOR = 0xd44470;

    const yantra = new THREE.Group();
    scene.add(yantra);

    [
        { size: 4.0, yo:  0.0,  z:  0.00 },
        { size: 3.2, yo: -0.1,  z:  0.02 },
        { size: 2.4, yo: -0.2,  z:  0.04 },
        { size: 1.6, yo: -0.1,  z:  0.06 },
        { size: 1.0, yo:  0.0,  z:  0.08 },
    ].forEach(t => yantra.add(triangle(t.size, t.yo, true, t.z, DOWN_COLOR, 0.85)));

    [
        { size: 3.5, yo:  0.0,  z: -0.02 },
        { size: 2.8, yo:  0.1,  z: -0.04 },
        { size: 2.0, yo:  0.1,  z: -0.06 },
        { size: 1.3, yo:  0.0,  z: -0.08 },
    ].forEach(t => yantra.add(triangle(t.size, t.yo, false, t.z, UP_COLOR, 0.85)));

    // Bindu — wireframe icosahedron at the centre
    const binduGeo = new THREE.IcosahedronGeometry(0.12, 0);
    yantra.add(new THREE.LineSegments(
        new THREE.WireframeGeometry(binduGeo),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 }),
    ));

    function squareGate(radius, z, opacity) {
        const pts = [
            new THREE.Vector3(-radius,  radius, z),
            new THREE.Vector3( radius,  radius, z),
            new THREE.Vector3( radius, -radius, z),
            new THREE.Vector3(-radius, -radius, z),
            new THREE.Vector3(-radius,  radius, z),
        ];
        const g = new THREE.BufferGeometry().setFromPoints(pts);
        return new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0xc8a04e, transparent: true, opacity }));
    }
    yantra.add(squareGate(2.6, -0.12, 0.55));
    yantra.add(squareGate(2.9, -0.14, 0.35));

    // Lotus petals
    const petalMat = new THREE.LineBasicMaterial({
        color: 0xff9966, transparent: true, opacity: 0.5,
    });
    const PETAL_R = 2.4;
    for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        const x = Math.cos(a) * PETAL_R;
        const y = Math.sin(a) * PETAL_R;
        const tip_x = Math.cos(a) * (PETAL_R + 0.25);
        const tip_y = Math.sin(a) * (PETAL_R + 0.25);
        const w = 0.25;
        const lx = Math.cos(a + Math.PI / 2) * w;
        const ly = Math.sin(a + Math.PI / 2) * w;
        const pts = [
            new THREE.Vector3(x + lx, y + ly, -0.1),
            new THREE.Vector3(tip_x, tip_y, -0.1),
            new THREE.Vector3(x - lx, y - ly, -0.1),
        ];
        const g = new THREE.BufferGeometry().setFromPoints(pts);
        yantra.add(new THREE.Line(g, petalMat));
    }

    function update() {
        // Static
    }

    return { scene, camera, controls, update, labels: false };
}
