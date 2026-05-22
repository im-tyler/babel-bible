import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);
    scene.fog = new THREE.FogExp2(0x08080d, 0.018);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(3, 2.5, 6);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;
    controls.minDistance = 4;
    controls.maxDistance = 20;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x202830, 0.7));

    const GOLD = 0xd4a574;
    const COOL = 0x8888aa;

    // Two interlocked equilateral triangles → hexagram (Magen David).
    // Upward triangle = fire/masculine, downward = water/feminine
    // (Kabbalistic interpretation).
    const R = 2.2;
    function triangle(rotation, color) {
        const pts = [];
        for (let i = 0; i < 3; i++) {
            const a = rotation + (i * 2 * Math.PI) / 3;
            pts.push(new THREE.Vector3(R * Math.cos(a), R * Math.sin(a), 0));
        }
        pts.push(pts[0].clone());

        const grp = new THREE.Group();
        // Tubular edges
        const tubeMat = new THREE.MeshStandardMaterial({
            color, roughness: 0.5, metalness: 0.25, emissive: 0x101010,
        });
        for (let i = 0; i < 3; i++) {
            const a = pts[i];
            const b = pts[i + 1];
            const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
            const len = a.distanceTo(b);
            const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, len, 8), tubeMat);
            tube.position.copy(mid);
            const dir = new THREE.Vector3().subVectors(b, a).normalize();
            const up = new THREE.Vector3(0, 1, 0);
            const quat = new THREE.Quaternion().setFromUnitVectors(up, dir);
            tube.quaternion.copy(quat);
            grp.add(tube);
        }
        // Faint fill
        const fillGeom = new THREE.BufferGeometry().setFromPoints(pts.slice(0, 3));
        fillGeom.setIndex([0, 1, 2]);
        fillGeom.computeVertexNormals();
        grp.add(new THREE.Mesh(fillGeom, new THREE.MeshBasicMaterial({
            color, transparent: true, opacity: 0.06,
            side: THREE.DoubleSide, depthWrite: false,
        })));
        return grp;
    }

    scene.add(triangle(Math.PI / 2, GOLD));      // upward
    scene.add(triangle(-Math.PI / 2, COOL));     // downward

    // Hexagonal centre — where the two triangles overlap
    const centre = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.18, 0),
        new THREE.MeshBasicMaterial({
            color: 0xfff0d6, transparent: true, opacity: 0.6,
            blending: THREE.AdditiveBlending,
        }),
    );
    scene.add(centre);

    function update() {
        // OrbitControls autoRotate drives motion
    }

    return { scene, camera, controls, update, labels: false };
}
