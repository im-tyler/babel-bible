import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);
    scene.fog = new THREE.FogExp2(0x08080d, 0.018);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(4, 3, 7);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = false;  // the dervish spins itself; no need for orbit autoRotate too
    controls.minDistance = 4;
    controls.maxDistance = 20;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x30262a, 0.55));

    function fillMat(color, opacity = 0.07) {
        return new THREE.MeshBasicMaterial({
            color, transparent: true, opacity,
            side: THREE.DoubleSide, depthWrite: false,
        });
    }
    function lineMat(color, opacity = 0.8) {
        return new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    }

    const SKIRT_COLOR = 0xf0e6d3;
    const BODY_COLOR = 0xc8a04e;
    const HAT_COLOR = 0x8a6a3a;

    // Floor ring — wireframe
    const floorGeo = new THREE.RingGeometry(3.0, 3.2, 32);
    const floorWire = new THREE.LineSegments(
        new THREE.WireframeGeometry(floorGeo),
        lineMat(0x4a3820, 0.55),
    );
    floorWire.rotation.x = -Math.PI / 2;
    floorWire.position.y = -1.8;
    scene.add(floorWire);

    const dervish = new THREE.Group();
    scene.add(dervish);

    const SKIRT_RADIUS = 1.6;
    const SKIRT_TOP_R = 0.32;
    const SKIRT_HEIGHT = 2.2;
    const BODY_RADIUS = 0.3;
    const BODY_HEIGHT = 1.0;
    const HEAD_R = 0.22;
    const HAT_HEIGHT = 0.5;
    const HAT_RADIUS = 0.2;

    // Skirt — wireframe cylinder
    const skirtGeo = new THREE.CylinderGeometry(SKIRT_TOP_R, SKIRT_RADIUS, SKIRT_HEIGHT, 16, 2, true);
    const skirt = new THREE.Group();
    skirt.add(new THREE.Mesh(skirtGeo, fillMat(SKIRT_COLOR, 0.08)));
    skirt.add(new THREE.LineSegments(new THREE.WireframeGeometry(skirtGeo), lineMat(SKIRT_COLOR, 0.7)));
    skirt.position.y = -0.6;
    dervish.add(skirt);

    // Body
    const bodyGeo = new THREE.CylinderGeometry(BODY_RADIUS, BODY_RADIUS * 0.85, BODY_HEIGHT, 8);
    const body = new THREE.Group();
    body.add(new THREE.Mesh(bodyGeo, fillMat(BODY_COLOR, 0.1)));
    body.add(new THREE.LineSegments(new THREE.WireframeGeometry(bodyGeo), lineMat(BODY_COLOR, 0.8)));
    body.position.y = SKIRT_HEIGHT / 2 - 0.6 + BODY_HEIGHT / 2;
    dervish.add(body);

    // Head
    const headGeo = new THREE.IcosahedronGeometry(HEAD_R, 0);
    const head = new THREE.Group();
    head.add(new THREE.Mesh(headGeo, fillMat(0xe8c8a0, 0.1)));
    head.add(new THREE.LineSegments(new THREE.WireframeGeometry(headGeo), lineMat(0xe8c8a0, 0.85)));
    head.position.y = body.position.y + BODY_HEIGHT / 2 + HEAD_R;
    dervish.add(head);

    // Hat (sikke — the tall felt cap)
    const hatGeo = new THREE.CylinderGeometry(HAT_RADIUS, HAT_RADIUS * 1.1, HAT_HEIGHT, 8);
    const hat = new THREE.Group();
    hat.add(new THREE.Mesh(hatGeo, fillMat(HAT_COLOR, 0.12)));
    hat.add(new THREE.LineSegments(new THREE.WireframeGeometry(hatGeo), lineMat(HAT_COLOR, 0.85)));
    hat.position.y = head.position.y + HEAD_R + HAT_HEIGHT / 2 - 0.04;
    dervish.add(hat);

    // Arms — line segments
    const armY = body.position.y + BODY_HEIGHT * 0.3;
    function makeArm(side) {
        const armPts = [
            new THREE.Vector3(0, armY, 0),
            new THREE.Vector3(side * 1.2, armY, 0),
        ];
        const armGeo = new THREE.BufferGeometry().setFromPoints(armPts);
        dervish.add(new THREE.Line(armGeo, lineMat(BODY_COLOR, 0.8)));
        const handGeo = new THREE.IcosahedronGeometry(0.1, 0);
        const hand = new THREE.LineSegments(
            new THREE.WireframeGeometry(handGeo),
            lineMat(0xe8c8a0, 0.85),
        );
        hand.position.set(side * 1.2, armY, 0);
        dervish.add(hand);
    }
    makeArm(1);
    makeArm(-1);

    const clock = new THREE.Clock();
    function update() {
        const t = clock.getElapsedTime();
        // The dervish whirls — this is the symbol's defining motion
        dervish.rotation.y = t * 4.5;
        skirt.scale.x = 1 + 0.04 * Math.sin(t * 9);
        skirt.scale.z = 1 + 0.04 * Math.cos(t * 9);
    }

    return { scene, camera, controls, update, labels: false };
}
