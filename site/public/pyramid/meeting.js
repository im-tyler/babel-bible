import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const PH = 2.5;
const PR = 1.5;
const S = 0.28;
const H = PH * S;
const R = PR * S;
const ANGLES = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0, 0, 13);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = false;
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

    function addLabel(text, x, y, color, opacity) {
        const c = document.createElement('canvas');
        c.width = 256; c.height = 48;
        const ctx = c.getContext('2d');
        ctx.font = '11px SF Mono, Fira Code, monospace';
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.fillText(text, 128, 28);
        const t = new THREE.CanvasTexture(c);
        const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, opacity: opacity || 0.55 }));
        s.position.set(x, y, 0.1);
        s.scale.set(2.5, 0.5, 1);
        scene.add(s);
    }

    function buildMeeting(cx, cy, type) {
        const offset = type === 'below' ? 0 : -H * 2;
        const meetingGroup = new THREE.Group();
        meetingGroup.position.set(cx, cy, 0);

        const dotColor = type === 'below' ? 0xcc3333 : 0xf0e6d3;
        meetingGroup.add(new THREE.Mesh(
            new THREE.SphereGeometry(0.08, 16, 16),
            new THREE.MeshBasicMaterial({ color: dotColor })
        ));

        const glowC = document.createElement('canvas');
        glowC.width = 64; glowC.height = 64;
        const glowCtx = glowC.getContext('2d');
        const grad = glowCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, type === 'below' ? 'rgba(204,51,51,0.5)' : 'rgba(240,230,211,0.5)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        glowCtx.fillStyle = grad;
        glowCtx.fillRect(0, 0, 64, 64);
        const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({
            map: new THREE.CanvasTexture(glowC),
            transparent: true, opacity: 0.4,
            blending: THREE.AdditiveBlending, depthWrite: false,
        }));
        glowSprite.scale.set(1.8, 1.8, 1);
        meetingGroup.add(glowSprite);

        const personLayers = [
            { dy: -H / 2 + offset, inv: true, c: 0xcc3333, op: 0.0, eop: 0.75, ill: true },
            { dy: H / 2 + offset, inv: false, c: 0xd4a574, op: 0.25, eop: 0.7, ill: false },
            { dy: H * 1.5 + offset, inv: true, c: 0x8888aa, op: 0.06, eop: 0.3, ill: false },
            { dy: H * 2.5 + offset, inv: false, c: 0xf0e6d3, op: 0.3, eop: 0.8, ill: false },
        ];

        const personNames = ['person a', 'person b', 'new life'];

        ANGLES.forEach((angle, pi) => {
            const pg = new THREE.Group();
            pg.rotation.z = angle - Math.PI / 2;

            personLayers.forEach(layer => {
                const geo = new THREE.ConeGeometry(R, H, 4);
                if (layer.op > 0) {
                    const mat = new THREE.MeshPhongMaterial({
                        color: layer.c, transparent: true, opacity: layer.op,
                        side: THREE.DoubleSide, depthWrite: false, shininess: 60,
                    });
                    const mesh = new THREE.Mesh(geo, mat);
                    mesh.position.y = layer.dy;
                    if (layer.inv) mesh.rotation.x = Math.PI;
                    pg.add(mesh);
                }
                const edgesGeo = new THREE.EdgesGeometry(geo);
                const edgesMat = new THREE.LineBasicMaterial({
                    color: layer.c, transparent: true, opacity: layer.eop,
                });
                const edges = new THREE.LineSegments(edgesGeo, edgesMat);
                edges.position.y = layer.dy;
                if (layer.inv) edges.rotation.x = Math.PI;
                pg.add(edges);
                const nLines = 3;
                for (let i = 1; i <= nLines; i++) {
                    const t = i / (nLines + 1);
                    const localY = layer.dy - H / 2 + t * H;
                    let radius, twist = 0;
                    if (layer.inv) {
                        radius = R * t;
                        if (layer.ill) twist = t * Math.PI * 0.5;
                    } else {
                        radius = R * (1 - t);
                    }
                    const lOp = layer.ill ? 0.3 : 0.2;
                    const lineGeo = new THREE.BufferGeometry().setFromPoints(squareLoop(localY, radius, twist));
                    pg.add(new THREE.Line(lineGeo, new THREE.LineBasicMaterial({
                        color: layer.c, transparent: true, opacity: lOp,
                    })));
                }
            });

            const glowGeo = new THREE.ConeGeometry(R * 1.15, H * 1.1, 4);
            const glowMat = new THREE.MeshBasicMaterial({
                color: 0xf0e6d3, transparent: true, opacity: 0.06,
                side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false,
            });
            const glowMesh = new THREE.Mesh(glowGeo, glowMat);
            glowMesh.position.y = H * 2.5 + offset;
            pg.add(glowMesh);

            meetingGroup.add(pg);
            allPersonGroups.push({ group: pg, angle });

            const lifeApexDist = Math.abs(H * 3 + offset);
            const labelDist = lifeApexDist + 0.5;
            addLabel(personNames[pi],
                cx + Math.cos(angle) * labelDist,
                cy + Math.sin(angle) * labelDist,
                'rgba(240,230,211,0.4)');
        });

        scene.add(meetingGroup);

        const typeColor = type === 'below' ? 'rgba(204,51,51,0.6)' : 'rgba(240,230,211,0.6)';
        const meetDesc = type === 'below' ? 'meeting at illness' : 'meeting at life';
        addLabel(type === 'below' ? 'below self' : 'above self', cx, cy - 2.5, typeColor, 0.6);
        addLabel(meetDesc, cx, cy - 3.0, typeColor, 0.35);
    }

    buildMeeting(0, -3, 'below');
    buildMeeting(0, 3, 'above');
    addLabel('same three people', 0, 0, 'rgba(255,255,255,0.15)', 0.3);

    const clock = new THREE.Clock();
    function update() {
        const elapsed = clock.getElapsedTime();
        allPersonGroups.forEach(({ group, angle }, i) => {
            const breath = Math.sin(elapsed * 0.4 + i * 0.8) * 0.02;
            group.position.set(Math.cos(angle) * breath, Math.sin(angle) * breath, 0);
        });
    }

    return { scene, camera, controls, update, labels: false };
}
