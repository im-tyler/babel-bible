import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);
    scene.fog = new THREE.FogExp2(0x08080d, 0.016);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = false;  // sefirot are stable emanations
    controls.minDistance = 5;
    controls.maxDistance = 22;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x222a30, 0.55));

    function fillMat(color, opacity = 0.1) {
        return new THREE.MeshBasicMaterial({
            color, transparent: true, opacity,
            side: THREE.DoubleSide, depthWrite: false,
        });
    }
    function lineMat(color, opacity = 0.8) {
        return new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    }

    const SEFIROT = [
        { name: 'Keter',    pos: [ 0.0,  3.5, 0], color: 0xffffff },
        { name: 'Chokmah',  pos: [ 1.6,  2.4, 0], color: 0x8888bb },
        { name: 'Binah',    pos: [-1.6,  2.4, 0], color: 0x555566 },
        { name: 'Chesed',   pos: [ 1.6,  0.8, 0], color: 0x4a78c8 },
        { name: 'Geburah',  pos: [-1.6,  0.8, 0], color: 0xc83838 },
        { name: 'Tiferet',  pos: [ 0.0, -0.4, 0], color: 0xe8c060 },
        { name: 'Netzach',  pos: [ 1.6, -1.6, 0], color: 0x4ab070 },
        { name: 'Hod',      pos: [-1.6, -1.6, 0], color: 0xd87040 },
        { name: 'Yesod',    pos: [ 0.0, -2.4, 0], color: 0xa080c8 },
        { name: 'Malkuth',  pos: [ 0.0, -3.6, 0], color: 0x8a6a3a },
    ];

    const SEFIRA_R = 0.3;
    const sphereGeo = new THREE.IcosahedronGeometry(SEFIRA_R, 1);
    SEFIROT.forEach(s => {
        const g = new THREE.Group();
        g.position.set(...s.pos);
        g.add(new THREE.Mesh(sphereGeo, fillMat(s.color, 0.12)));
        g.add(new THREE.LineSegments(new THREE.WireframeGeometry(sphereGeo), lineMat(s.color, 0.85)));
        scene.add(g);
    });

    const PATHS = [
        [0,1],[0,2],[0,5],
        [1,2],[1,3],[1,5],
        [2,4],[2,5],
        [3,4],[3,5],[3,6],
        [4,5],[4,7],
        [5,6],[5,7],[5,8],
        [6,7],[6,8],[6,9],
        [7,8],[7,9],
        [8,9],
        [1,4],[2,3],
    ];

    const pathMat = new THREE.LineBasicMaterial({
        color: 0xc8a04e, transparent: true, opacity: 0.5,
    });
    PATHS.forEach(([a, b]) => {
        const pts = [
            new THREE.Vector3(...SEFIROT[a].pos),
            new THREE.Vector3(...SEFIROT[b].pos),
        ];
        const g = new THREE.BufferGeometry().setFromPoints(pts);
        scene.add(new THREE.Line(g, pathMat));
    });

    function update() {
        // Static — the Tree is a structural diagram
    }

    return { scene, camera, controls, update, labels: false };
}
