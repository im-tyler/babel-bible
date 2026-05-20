import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);
    scene.fog = new THREE.FogExp2(0x08080d, 0.02);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0, 1.5, 7);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;   // the wheel turns
    controls.autoRotateSpeed = 0.5;
    controls.minDistance = 3.5;
    controls.maxDistance = 18;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x30262a, 0.6));

    const GOLD = 0xc8a04e;
    const GOLD_BRIGHT = 0xffe6b3;

    function fillMat(color, opacity = 0.08) {
        return new THREE.MeshBasicMaterial({
            color, transparent: true, opacity,
            side: THREE.DoubleSide, depthWrite: false,
        });
    }
    function lineMat(color, opacity = 0.8) {
        return new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    }

    const wheel = new THREE.Group();
    scene.add(wheel);

    // Outer rim
    const rimGeo = new THREE.TorusGeometry(2.0, 0.1, 8, 48);
    wheel.add(new THREE.Mesh(rimGeo, fillMat(GOLD, 0.08)));
    wheel.add(new THREE.LineSegments(new THREE.WireframeGeometry(rimGeo), lineMat(GOLD_BRIGHT, 0.7)));

    // Inner ring
    const innerGeo = new THREE.TorusGeometry(0.55, 0.06, 8, 32);
    wheel.add(new THREE.Mesh(innerGeo, fillMat(GOLD, 0.08)));
    wheel.add(new THREE.LineSegments(new THREE.WireframeGeometry(innerGeo), lineMat(GOLD_BRIGHT, 0.7)));

    // Hub — wireframe icosahedron
    const hubGeo = new THREE.IcosahedronGeometry(0.3, 0);
    wheel.add(new THREE.Mesh(hubGeo, fillMat(GOLD, 0.12)));
    wheel.add(new THREE.LineSegments(new THREE.WireframeGeometry(hubGeo), lineMat(GOLD_BRIGHT, 0.85)));

    // 8 spokes — straight line segments (the cleanest wireframe form for a spoke)
    const spokes = [];
    for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const inner = new THREE.Vector3(Math.cos(angle) * 0.55, Math.sin(angle) * 0.55, 0);
        const outer = new THREE.Vector3(Math.cos(angle) * 2.0,  Math.sin(angle) * 2.0,  0);
        const geo = new THREE.BufferGeometry().setFromPoints([inner, outer]);
        const mat = new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.65 });
        const line = new THREE.Line(geo, mat);
        wheel.add(line);
        spokes.push({ mat });
    }

    const clock = new THREE.Clock();
    let activeSpoke = 0;
    let spokeTimer = 0;
    const SPOKE_INTERVAL = 0.45;

    function update() {
        const dt = clock.getDelta();
        const t = clock.elapsedTime;
        wheel.rotation.z = -t * 0.18;
        spokeTimer += dt;
        if (spokeTimer >= SPOKE_INTERVAL) {
            spokeTimer = 0;
            activeSpoke = (activeSpoke + 1) % 8;
        }
        spokes.forEach((s, i) => {
            const phase = (i - activeSpoke + 8) % 8;
            let opacity;
            if (phase === 0) opacity = 1.0 - (spokeTimer / SPOKE_INTERVAL) * 0.5;
            else if (phase === 1) opacity = 0.65;
            else opacity = 0.45;
            s.mat.opacity = opacity;
        });
    }

    return { scene, camera, controls, update, labels: false };
}
