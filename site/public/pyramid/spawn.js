import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const PH = 2.5;
const PR = 1.5;
const BASE_SCALE = 0.28;
const SCALE_FACTOR = 0.42;
const MAX_DEPTH = 4;

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 200);
    camera.position.set(0, 0, 12);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.2;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x404060, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const allPersonGroups = [];

    function squareLoop(y, radius, twist) {
        const pts = [];
        const perEdge = 16;
        const cos = Math.cos(twist);
        const sin = Math.sin(twist);
        const corners = [
            [radius, 0], [0, radius], [-radius, 0], [0, -radius]
        ].map(([x, z]) => [x * cos - z * sin, x * sin + z * cos]);
        for (let e = 0; e < 4; e++) {
            const [x1, z1] = corners[e];
            const [x2, z2] = corners[(e + 1) % 4];
            for (let s = 0; s < perEdge; s++) {
                const t = s / perEdge;
                pts.push(new THREE.Vector3(x1 + (x2 - x1) * t, y, z1 + (z2 - z1) * t));
            }
        }
        pts.push(pts[0].clone());
        return pts;
    }

    function buildMeeting(parent, fromAngle, scale, depth) {
        if (depth > MAX_DEPTH || scale < 0.012) return;
        const h = PH * scale;
        const r = PR * scale;
        const lifeDist = h * 3;
        const isRoot = fromAngle === null;
        const fade = Math.pow(0.72, depth);

        const dotSize = Math.max(0.015, 0.05 * fade);
        parent.add(new THREE.Mesh(
            new THREE.SphereGeometry(dotSize, 8, 8),
            new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: fade })
        ));

        if (depth < 2) {
            buildIllnessCore(parent, scale * 0.22, 0, fade);
        }

        const baseRot = isRoot ? 0 : fromAngle + Math.PI;

        for (let i = 0; i < 3; i++) {
            const angle = baseRot + i * (2 * Math.PI / 3);
            const dx = Math.cos(angle);
            const dy = Math.sin(angle);
            const pg = new THREE.Group();
            pg.rotation.z = angle - Math.PI / 2;

            const iColor = new THREE.Color(0xcc3333).lerp(new THREE.Color(0x550000), depth * 0.2);
            const iGeo = new THREE.ConeGeometry(r, h, 4);
            const iEdge = new THREE.EdgesGeometry(iGeo);
            pg.add(new THREE.LineSegments(iEdge, new THREE.LineBasicMaterial({
                color: iColor, transparent: true, opacity: 0.65 * fade,
            })));
            pg.children[pg.children.length - 1].position.y = -h / 2;
            pg.children[pg.children.length - 1].rotation.x = Math.PI;

            const nIllLines = Math.max(0, 3 - depth);
            for (let li = 1; li <= nIllLines; li++) {
                const t = li / (nIllLines + 1);
                const localY = -h / 2 - h / 2 + t * h;
                const radius = r * t;
                const twist = t * Math.PI * 0.5;
                const lGeo = new THREE.BufferGeometry().setFromPoints(squareLoop(localY, radius, twist));
                pg.add(new THREE.Line(lGeo, new THREE.LineBasicMaterial({
                    color: iColor, transparent: true, opacity: 0.3 * fade,
                })));
            }

            const rColor = new THREE.Color(0xd4a574).lerp(new THREE.Color(0xf0e6d3), depth * 0.12);
            const rGeo = new THREE.ConeGeometry(r, h, 4);
            if (0.18 * fade > 0.01) {
                const rMesh = new THREE.Mesh(rGeo, new THREE.MeshPhongMaterial({
                    color: rColor, transparent: true, opacity: 0.18 * fade,
                    side: THREE.DoubleSide, depthWrite: false,
                }));
                rMesh.position.y = h / 2;
                pg.add(rMesh);
            }
            const rEdge = new THREE.EdgesGeometry(rGeo);
            const rLines = new THREE.LineSegments(rEdge, new THREE.LineBasicMaterial({
                color: rColor, transparent: true, opacity: 0.55 * fade,
            }));
            rLines.position.y = h / 2;
            pg.add(rLines);

            const nRealLines = Math.max(0, 3 - depth);
            for (let li = 1; li <= nRealLines; li++) {
                const t = li / (nRealLines + 1);
                const localY = h / 2 - h / 2 + t * h;
                const radius = r * (1 - t);
                const lGeo = new THREE.BufferGeometry().setFromPoints(squareLoop(localY, radius, 0));
                pg.add(new THREE.Line(lGeo, new THREE.LineBasicMaterial({
                    color: rColor, transparent: true, opacity: 0.2 * fade,
                })));
            }

            const eColor = new THREE.Color(0x8888aa).lerp(new THREE.Color(0xdde0f0), depth * 0.1);
            const eGeo = new THREE.ConeGeometry(r, h, 4);
            const eEdge = new THREE.EdgesGeometry(eGeo);
            const eLines = new THREE.LineSegments(eEdge, new THREE.LineBasicMaterial({
                color: eColor, transparent: true, opacity: 0.25 * fade,
            }));
            eLines.position.y = h * 1.5;
            eLines.rotation.x = Math.PI;
            pg.add(eLines);

            const lColor = new THREE.Color(0xf0e6d3);
            const lGeo = new THREE.ConeGeometry(r, h, 4);
            if (0.22 * fade > 0.01) {
                const lMesh = new THREE.Mesh(lGeo, new THREE.MeshPhongMaterial({
                    color: lColor, transparent: true, opacity: 0.22 * fade,
                    side: THREE.DoubleSide, depthWrite: false,
                }));
                lMesh.position.y = h * 2.5;
                pg.add(lMesh);
            }
            const lEdge = new THREE.EdgesGeometry(lGeo);
            const lLines = new THREE.LineSegments(lEdge, new THREE.LineBasicMaterial({
                color: lColor, transparent: true, opacity: 0.65 * fade,
            }));
            lLines.position.y = h * 2.5;
            pg.add(lLines);

            if (0.03 * fade > 0.005) {
                const gGeo = new THREE.ConeGeometry(r * 1.15, h * 1.1, 4);
                const gMesh = new THREE.Mesh(gGeo, new THREE.MeshBasicMaterial({
                    color: 0xf0e6d3, transparent: true, opacity: 0.03 * fade,
                    side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false,
                }));
                gMesh.position.y = h * 2.5;
                pg.add(gMesh);
            }

            parent.add(pg);
            allPersonGroups.push({ group: pg, angle });

            const shouldSpawn = isRoot || i !== 0;
            if (shouldSpawn) {
                const childGroup = new THREE.Group();
                childGroup.position.set(dx * lifeDist, dy * lifeDist, 0);
                parent.add(childGroup);
                buildMeeting(childGroup, angle, scale * SCALE_FACTOR, depth + 1);
            }
        }
    }

    function buildIllnessCore(parent, scale, depth, parentFade) {
        if (depth > 2 || scale < 0.01) return;
        const h = PH * scale;
        const r = PR * scale;
        const fade = parentFade * Math.pow(0.55, depth + 1);
        const coreGroup = new THREE.Group();
        parent.add(coreGroup);
        const iColor = new THREE.Color(0xcc3333).lerp(new THREE.Color(0x220000), depth * 0.3);
        coreGroup.add(new THREE.Mesh(
            new THREE.SphereGeometry(Math.max(0.01, 0.025 * fade * 3), 8, 8),
            new THREE.MeshBasicMaterial({ color: 0xcc3333, transparent: true, opacity: fade })
        ));
        for (let i = 0; i < 3; i++) {
            const angle = i * 2 * Math.PI / 3;
            const pg = new THREE.Group();
            pg.rotation.z = angle - Math.PI / 2;
            const iGeo = new THREE.ConeGeometry(r, h, 4);
            const iEdge = new THREE.EdgesGeometry(iGeo);
            const iLines = new THREE.LineSegments(iEdge, new THREE.LineBasicMaterial({
                color: iColor, transparent: true, opacity: 0.5 * fade,
            }));
            iLines.position.y = -h / 2;
            iLines.rotation.x = Math.PI;
            pg.add(iLines);
            coreGroup.add(pg);
        }
        buildIllnessCore(coreGroup, scale * 0.35, depth + 1, parentFade);
    }

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);
    buildMeeting(rootGroup, null, BASE_SCALE, 0);

    const clock = new THREE.Clock();
    function update() {
        const elapsed = clock.getElapsedTime();
        allPersonGroups.forEach(({ group, angle }, idx) => {
            const breath = Math.sin(elapsed * 0.35 + idx * 0.7) * 0.012;
            group.position.set(Math.cos(angle) * breath, Math.sin(angle) * breath, 0);
        });
    }

    return { scene, camera, controls, update, labels: false };
}
