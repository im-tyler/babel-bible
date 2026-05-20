import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);
    scene.fog = new THREE.FogExp2(0x08080d, 0.02);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0, 1.8, 7);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = false;
    controls.minDistance = 3.5;
    controls.maxDistance = 18;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x303040, 0.6));

    const SNAKE = 0x6a9d4a;
    const SNAKE_BRIGHT = 0x9ad06a;

    function fillMat(color, opacity = 0.08) {
        return new THREE.MeshBasicMaterial({
            color, transparent: true, opacity,
            side: THREE.DoubleSide, depthWrite: false,
        });
    }
    function lineMat(color, opacity = 0.75) {
        return new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    }

    const R_MAJOR = 2.0;
    const R_MINOR = 0.32;

    // Snake body: wireframe torus (the cycle made visible)
    const bodyGeo = new THREE.TorusGeometry(R_MAJOR, R_MINOR, 10, 48);
    const bodyFill = new THREE.Mesh(bodyGeo, fillMat(SNAKE, 0.06));
    scene.add(bodyFill);
    const bodyWire = new THREE.LineSegments(
        new THREE.WireframeGeometry(bodyGeo),
        lineMat(SNAKE_BRIGHT, 0.55),
    );
    scene.add(bodyWire);

    // Head: an icosahedron at theta=0, wireframe
    const headGroup = new THREE.Group();
    headGroup.position.set(R_MAJOR, 0, 0);
    scene.add(headGroup);

    const headGeo = new THREE.IcosahedronGeometry(0.42, 0);
    const headFill = new THREE.Mesh(headGeo, fillMat(SNAKE, 0.1));
    headFill.scale.set(1.1, 0.85, 0.85);
    headGroup.add(headFill);
    const headWire = new THREE.LineSegments(
        new THREE.WireframeGeometry(headGeo),
        lineMat(SNAKE_BRIGHT, 0.8),
    );
    headWire.scale.set(1.1, 0.85, 0.85);
    headGroup.add(headWire);

    // Eyes — small bright dots
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffaa33 });
    const eyeGeo = new THREE.IcosahedronGeometry(0.07, 0);
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(0.18, 0.18, 0.32);
    headGroup.add(eyeL);
    const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    eyeR.position.set(0.18, 0.18, -0.32);
    headGroup.add(eyeR);

    function update() {
        // No spin — ouroboros sits still; the cycle is implied by the closed loop
    }

    return { scene, camera, controls, update, labels: false };
}
