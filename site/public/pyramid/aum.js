import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);
    scene.fog = new THREE.FogExp2(0x08080d, 0.018);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = false;  // the symbol is static; sound is invoked, not spun
    controls.minDistance = 4;
    controls.maxDistance = 20;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x30262a, 0.6));

    const GOLD = 0xd4a574;

    function fillMat(opacity = 0.06) {
        return new THREE.MeshBasicMaterial({
            color: GOLD, transparent: true, opacity,
            side: THREE.DoubleSide, depthWrite: false,
        });
    }
    function lineMat(opacity = 0.8) {
        return new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity });
    }

    function arc(r, tube, arcLen, rotZ, x, y) {
        const geo = new THREE.TorusGeometry(r, tube, 6, 32, arcLen);
        const grp = new THREE.Group();
        grp.add(new THREE.Mesh(geo, fillMat(0.07)));
        grp.add(new THREE.LineSegments(new THREE.WireframeGeometry(geo), lineMat(0.7)));
        grp.rotation.z = rotZ;
        grp.position.set(x, y, 0);
        scene.add(grp);
    }

    // A — waking
    arc(1.6, 0.12, Math.PI * 1.5, Math.PI * 0.25, -0.1, -0.4);
    // U — dream
    arc(0.9, 0.10, Math.PI * 1.3, Math.PI * 0.85, 0.7, 0.0);
    // M — deep sleep
    arc(0.45, 0.08, Math.PI * 1.6, Math.PI * 0.4, 1.1, 0.7);
    // Crescent
    arc(0.42, 0.06, Math.PI * 0.95, -Math.PI / 2, 0.4, 1.5);

    // Bindu — turiya (the fourth state, the silence)
    const binduGeo = new THREE.IcosahedronGeometry(0.13, 0);
    const binduGrp = new THREE.Group();
    binduGrp.position.set(0.4, 2.0, 0);
    binduGrp.add(new THREE.Mesh(binduGeo, new THREE.MeshBasicMaterial({
        color: 0xfff0d6, transparent: true, opacity: 0.2,
    })));
    binduGrp.add(new THREE.LineSegments(
        new THREE.WireframeGeometry(binduGeo),
        new THREE.LineBasicMaterial({ color: 0xfff0d6, transparent: true, opacity: 0.9 }),
    ));
    scene.add(binduGrp);

    function update() {
        // Static
    }

    return { scene, camera, controls, update, labels: false };
}
