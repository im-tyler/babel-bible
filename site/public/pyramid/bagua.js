import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0, 1, 6);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = false;  // bagua is a structural diagram — static
    controls.minDistance = 3.5;
    controls.maxDistance = 18;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x40404a, 0.7));

    function lineMat(color, opacity = 0.8) {
        return new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    }
    function fillMat(color, opacity = 0.08) {
        return new THREE.MeshBasicMaterial({
            color, transparent: true, opacity,
            side: THREE.DoubleSide, depthWrite: false,
        });
    }

    // --- Central Taijitu — wireframe rendering: outer circle + S-curve
    const DISC_R = 1.4;
    const taiji = new THREE.Group();
    scene.add(taiji);

    // Outer circle (as line)
    const circlePts = [];
    for (let i = 0; i <= 64; i++) {
        const a = (i / 64) * Math.PI * 2;
        circlePts.push(new THREE.Vector3(Math.cos(a) * DISC_R, Math.sin(a) * DISC_R, 0));
    }
    taiji.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(circlePts),
        lineMat(0xc8a04e, 0.85),
    ));

    // S-curve dividing yin and yang (composed of two half-circles)
    const sCurvePts = [];
    // Upper semicircle (small) — top half from (0, DISC_R) to (0, 0)
    for (let i = 0; i <= 32; i++) {
        const a = Math.PI / 2 - (i / 32) * Math.PI;
        sCurvePts.push(new THREE.Vector3(Math.cos(a) * (DISC_R / 2), DISC_R / 2 + Math.sin(a) * (DISC_R / 2), 0));
    }
    // Lower semicircle (small) — from (0, 0) to (0, -DISC_R)
    for (let i = 0; i <= 32; i++) {
        const a = Math.PI / 2 + (i / 32) * Math.PI;
        sCurvePts.push(new THREE.Vector3(Math.cos(a) * (DISC_R / 2), -DISC_R / 2 + Math.sin(a) * (DISC_R / 2), 0));
    }
    taiji.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(sCurvePts),
        lineMat(0xc8a04e, 0.85),
    ));

    // Two small circles (the "eyes" / seeds of the opposite)
    function smallCircle(cy, color) {
        const r = DISC_R / 8;
        const pts = [];
        for (let i = 0; i <= 24; i++) {
            const a = (i / 24) * Math.PI * 2;
            pts.push(new THREE.Vector3(Math.cos(a) * r, cy + Math.sin(a) * r, 0));
        }
        return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat(color, 0.85));
    }
    taiji.add(smallCircle(DISC_R / 2, 0xc8a04e));
    taiji.add(smallCircle(-DISC_R / 2, 0xc8a04e));

    // 8 trigrams arranged in octagonal ring — wireframe boxes
    const TRIGRAMS = [
        { name: 'Heaven',   bits: [1,1,1] },
        { name: 'Lake',     bits: [1,1,0] },
        { name: 'Fire',     bits: [1,0,1] },
        { name: 'Thunder',  bits: [1,0,0] },
        { name: 'Wind',     bits: [0,1,1] },
        { name: 'Water',    bits: [0,1,0] },
        { name: 'Mountain', bits: [0,0,1] },
        { name: 'Earth',    bits: [0,0,0] },
    ];
    const TRIGRAM_DIST = 2.8;
    const BAR_LEN = 0.55;
    const BAR_THICK = 0.07;
    const BAR_DEPTH = 0.06;
    const BAR_GAP = 0.08;
    const BROKEN_GAP = 0.16;

    const solidBarGeo = new THREE.BoxGeometry(BAR_LEN, BAR_THICK, BAR_DEPTH);
    const halfBarGeo = new THREE.BoxGeometry((BAR_LEN - BROKEN_GAP) / 2, BAR_THICK, BAR_DEPTH);

    TRIGRAMS.forEach((tg, i) => {
        const a = (i / 8) * Math.PI * 2 + Math.PI / 2;
        const cx = Math.cos(a) * TRIGRAM_DIST;
        const cy = Math.sin(a) * TRIGRAM_DIST;
        const orient = a - Math.PI / 2;
        const group = new THREE.Group();
        group.position.set(cx, cy, 0);
        group.rotation.z = orient;
        for (let row = 0; row < 3; row++) {
            const yOff = (row - 1) * (BAR_THICK + BAR_GAP);
            if (tg.bits[row] === 1) {
                const bar = new THREE.LineSegments(new THREE.EdgesGeometry(solidBarGeo), lineMat(0xc8a04e, 0.8));
                bar.position.set(0, yOff, 0);
                group.add(bar);
            } else {
                const half = (BAR_LEN - BROKEN_GAP) / 2;
                const bL = new THREE.LineSegments(new THREE.EdgesGeometry(halfBarGeo), lineMat(0xc8a04e, 0.8));
                bL.position.set(-(BROKEN_GAP / 2 + half / 2), yOff, 0);
                group.add(bL);
                const bR = new THREE.LineSegments(new THREE.EdgesGeometry(halfBarGeo), lineMat(0xc8a04e, 0.8));
                bR.position.set( BROKEN_GAP / 2 + half / 2, yOff, 0);
                group.add(bR);
            }
        }
        scene.add(group);
    });

    // Outer guide circle
    const guidePts = [];
    for (let i = 0; i <= 96; i++) {
        const a = (i / 96) * Math.PI * 2;
        guidePts.push(new THREE.Vector3(Math.cos(a) * 3.5, Math.sin(a) * 3.5, 0));
    }
    scene.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(guidePts),
        lineMat(0xc8a04e, 0.35),
    ));

    function update() {
        // Static
    }

    return { scene, camera, controls, update, labels: false };
}
