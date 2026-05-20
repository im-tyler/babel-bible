import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// The Crystal Axis — the four-tier alternating-orientation pyramid stack
// rendered as a pure form, without the eightfold-path lines or morphing.
// Two diamonds (bipyramids) joined at the central perichoretic pinch.

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x07070b);
    scene.fog = new THREE.FogExp2(0x07070b, 0.013);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(6, 1.5, 8);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1.25, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
    controls.minDistance = 4;
    controls.maxDistance = 25;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x303040, 0.55));
    const key = new THREE.DirectionalLight(0xfff0d6, 0.75);
    key.position.set(6, 8, 5);
    scene.add(key);
    const fill = new THREE.PointLight(0x7a88a8, 0.45, 18);
    fill.position.set(-5, -2, -3);
    scene.add(fill);
    const accent = new THREE.PointLight(0xd4a574, 0.55, 14);
    accent.position.set(0, 1.25, 6);
    scene.add(accent);

    const PH = 2.5;
    const PR = 1.5;

    // The four layers — alternating orientation along the vertical axis.
    // Surfaces are emissive and slightly translucent so the crystal feel reads.
    const layers = [
        { name: 'Illness', y: -2.5, inv: true,  color: 0x7a2e2e, faceOp: 0.18, edgeOp: 0.7 },
        { name: 'Reality', y:  0.0, inv: false, color: 0xd4a574, faceOp: 0.32, edgeOp: 0.85 },
        { name: 'Ego',     y:  2.5, inv: true,  color: 0x8888aa, faceOp: 0.22, edgeOp: 0.75 },
        { name: 'Life',    y:  5.0, inv: false, color: 0xf0e6d3, faceOp: 0.36, edgeOp: 0.9 },
    ];

    const axisGroup = new THREE.Group();
    scene.add(axisGroup);

    const facePulse = [];
    const edgePulse = [];

    layers.forEach((layer, pi) => {
        const group = new THREE.Group();
        group.position.set(0, layer.y, 0);

        const geo = new THREE.ConeGeometry(PR, PH, 4);

        const faceMat = new THREE.MeshPhongMaterial({
            color: layer.color,
            emissive: layer.color,
            emissiveIntensity: 0.08,
            transparent: true,
            opacity: layer.faceOp,
            side: THREE.DoubleSide,
            shininess: 120,
            depthWrite: false,
        });
        const mesh = new THREE.Mesh(geo, faceMat);
        if (layer.inv) mesh.rotation.x = Math.PI;
        group.add(mesh);
        facePulse.push({ mat: faceMat, base: layer.faceOp, phase: (pi / 4) * Math.PI * 2 });

        const edgeGeo = new THREE.EdgesGeometry(geo);
        const edgeMat = new THREE.LineBasicMaterial({
            color: layer.color,
            transparent: true,
            opacity: layer.edgeOp,
        });
        const edges = new THREE.LineSegments(edgeGeo, edgeMat);
        if (layer.inv) edges.rotation.x = Math.PI;
        group.add(edges);
        edgePulse.push({ mat: edgeMat, base: layer.edgeOp, phase: (pi / 4) * Math.PI * 2 });

        // Optional inner glow cap for the crystal feel
        const glow = new THREE.Mesh(
            new THREE.ConeGeometry(PR * 1.18, PH * 1.12, 4),
            new THREE.MeshBasicMaterial({
                color: layer.color,
                transparent: true,
                opacity: 0.04,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            }),
        );
        if (layer.inv) glow.rotation.x = Math.PI;
        glow.renderOrder = -1;
        group.add(glow);

        axisGroup.add(group);
    });

    // --- Central perichoretic pinch (the apex-to-apex contact between Reality and Ego) ---
    const pinch = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 24, 24),
        new THREE.MeshBasicMaterial({ color: 0xfff0d6 }),
    );
    pinch.position.y = 1.25;
    scene.add(pinch);

    const pinchGlow = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 16, 16),
        new THREE.MeshBasicMaterial({
            color: 0xfff0d6,
            transparent: true,
            opacity: 0.55,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        }),
    );
    pinchGlow.position.y = 1.25;
    scene.add(pinchGlow);

    // A second, larger soft halo around the pinch — emphasises it as load-bearing
    const pinchHalo = new THREE.Mesh(
        new THREE.SphereGeometry(0.9, 16, 16),
        new THREE.MeshBasicMaterial({
            color: 0xfff0d6,
            transparent: true,
            opacity: 0.06,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        }),
    );
    pinchHalo.position.y = 1.25;
    scene.add(pinchHalo);

    const clock = new THREE.Clock();
    function update() {
        const t = clock.getElapsedTime();
        // Subtle breathing across the four crystal tiers — each on its own phase
        facePulse.forEach(p => {
            p.mat.opacity = p.base * (0.85 + 0.15 * Math.sin(t * 0.6 + p.phase));
            p.mat.emissiveIntensity = 0.06 + 0.06 * Math.sin(t * 0.6 + p.phase);
        });
        edgePulse.forEach(p => {
            p.mat.opacity = p.base * (0.92 + 0.08 * Math.sin(t * 0.7 + p.phase));
        });
        // Pinch and halo pulse together at a faster rate — the still-point that "beats"
        pinchGlow.scale.setScalar(1 + 0.25 * Math.sin(t * 1.4));
        pinchHalo.scale.setScalar(1 + 0.15 * Math.sin(t * 0.9));
        // Gentle bob to the whole structure
        axisGroup.position.y = Math.sin(t * 0.3) * 0.06;
    }

    return { scene, camera, controls, update, labels: false };
}
