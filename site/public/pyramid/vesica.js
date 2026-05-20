import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);
    scene.fog = new THREE.FogExp2(0x08080d, 0.02);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0, 1, 7);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = false;  // sacred geometry — sit still
    controls.minDistance = 3.5;
    controls.maxDistance = 18;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x303040, 0.55));

    const GOLD = 0xd4a574;
    const CREAM = 0xf0e6d3;

    function fillMat(color, opacity = 0.07) {
        return new THREE.MeshBasicMaterial({
            color, transparent: true, opacity,
            side: THREE.DoubleSide, depthWrite: false,
        });
    }
    function lineMat(color, opacity = 0.75) {
        return new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    }

    const RADIUS = 1.6;
    const TUBE = 0.07;
    const OFFSET = RADIUS;

    // Two interlocking rings (wireframe)
    const ringGeo = new THREE.TorusGeometry(RADIUS, TUBE, 8, 48);
    const ringL = new THREE.Group();
    ringL.add(new THREE.Mesh(ringGeo, fillMat(GOLD, 0.06)));
    ringL.add(new THREE.LineSegments(new THREE.WireframeGeometry(ringGeo), lineMat(GOLD, 0.75)));
    ringL.position.x = -OFFSET / 2;
    scene.add(ringL);

    const ringR = new THREE.Group();
    ringR.add(new THREE.Mesh(ringGeo, fillMat(GOLD, 0.06)));
    ringR.add(new THREE.LineSegments(new THREE.WireframeGeometry(ringGeo), lineMat(GOLD, 0.75)));
    ringR.position.x = OFFSET / 2;
    scene.add(ringR);

    // Cross — wireframe outline only (EdgesGeometry works for boxes)
    const vBoxGeo = new THREE.BoxGeometry(0.12, 2.6, 0.12);
    const vBox = new THREE.LineSegments(new THREE.EdgesGeometry(vBoxGeo), lineMat(CREAM, 0.8));
    scene.add(vBox);
    const hBoxGeo = new THREE.BoxGeometry(1.4, 0.12, 0.12);
    const hBox = new THREE.LineSegments(new THREE.EdgesGeometry(hBoxGeo), lineMat(CREAM, 0.8));
    hBox.position.y = 0.45;
    scene.add(hBox);

    function update() {
        // Static
    }

    return { scene, camera, controls, update, labels: false };
}
