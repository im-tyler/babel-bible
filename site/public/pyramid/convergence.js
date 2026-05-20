import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06060a);
    scene.fog = new THREE.FogExp2(0x06060a, 0.012);

    const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 200);
    camera.position.set(12, 6, 18);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1.5, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.25;
    controls.minDistance = 8;
    controls.maxDistance = 40;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x303040, 0.55));
    const key = new THREE.DirectionalLight(0xfff0d6, 0.7);
    key.position.set(8, 10, 6);
    scene.add(key);
    const fill = new THREE.PointLight(0x7a88a8, 0.5, 22);
    fill.position.set(-8, -4, -4);
    scene.add(fill);
    const accent = new THREE.PointLight(0xd4a574, 0.5, 18);
    accent.position.set(0, 0, 8);
    scene.add(accent);

    const PH = 2.5;
    const PR = 1.5;
    const layers = [
        { name: 'Illness', y: -2.5, inv: true,  color: 0x7a2e2e, op: 0.0 },
        { name: 'Reality', y:  0.0, inv: false, color: 0xd4a574, op: 0.18 },
        { name: 'Ego',     y:  2.5, inv: true,  color: 0x8888aa, op: 0.10 },
        { name: 'Life',    y:  5.0, inv: false, color: 0xf0e6d3, op: 0.22 },
    ];

    const axisGroup = new THREE.Group();
    scene.add(axisGroup);

    layers.forEach(layer => {
        const group = new THREE.Group();
        group.position.set(0, layer.y, 0);
        const geo = new THREE.ConeGeometry(PR, PH, 4);
        const mat = new THREE.MeshPhongMaterial({
            color: layer.color,
            transparent: true,
            opacity: layer.op,
            side: THREE.DoubleSide,
            shininess: 60,
            depthWrite: false,
        });
        const mesh = new THREE.Mesh(geo, mat);
        if (layer.inv) mesh.rotation.x = Math.PI;
        group.add(mesh);

        const edgesGeo = new THREE.EdgesGeometry(geo);
        const edgeMat = new THREE.LineBasicMaterial({
            color: layer.color,
            transparent: true,
            opacity: 0.55,
        });
        const edges = new THREE.LineSegments(edgesGeo, edgeMat);
        if (layer.inv) edges.rotation.x = Math.PI;
        group.add(edges);

        const div = document.createElement('div');
        div.style.cssText =
            'color:#' + layer.color.toString(16).padStart(6, '0') +
            ';font-family:SF Mono,monospace;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;opacity:0.7;';
        div.textContent = layer.name;
        const label = new CSS2DObject(div);
        label.position.set(2.2, 0, 0);
        group.add(label);

        axisGroup.add(group);
    });

    const pinch = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 24, 24),
        new THREE.MeshBasicMaterial({ color: 0xfff0d6 }),
    );
    pinch.position.y = 1.25;
    scene.add(pinch);
    const pinchGlow = new THREE.Mesh(
        new THREE.SphereGeometry(0.35, 16, 16),
        new THREE.MeshBasicMaterial({
            color: 0xfff0d6,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
        }),
    );
    pinchGlow.position.y = 1.25;
    scene.add(pinchGlow);

    const symbols = [];
    function addSymbol(name, position, builder) {
        const g = new THREE.Group();
        g.position.set(...position);
        builder(g);
        scene.add(g);
        const div = document.createElement('div');
        div.className = 'sym-label';
        div.style.cssText =
            'color:rgba(212,165,116,0.85);font-family:SF Mono,monospace;font-size:9.5px;letter-spacing:0.12em;text-transform:uppercase;background:rgba(8,8,13,0.5);padding:2px 6px;border:1px solid rgba(212,165,116,0.25);';
        div.textContent = name;
        const label = new CSS2DObject(div);
        label.position.set(0, 1.2, 0);
        g.add(label);
        symbols.push({ name, group: g });
        return g;
    }

    addSymbol('ouroboros', [-5, -2.5, 0], g => {
        const torus = new THREE.Mesh(
            new THREE.TorusGeometry(0.7, 0.13, 12, 48),
            new THREE.MeshPhongMaterial({ color: 0x4a5d2a, emissive: 0x1a2a08, shininess: 80 }),
        );
        g.add(torus);
        const head = new THREE.Mesh(
            new THREE.SphereGeometry(0.18, 16, 12),
            new THREE.MeshPhongMaterial({ color: 0x3a4d2a, shininess: 100 }),
        );
        head.position.set(0.7, 0, 0);
        head.scale.set(1.2, 0.85, 0.85);
        g.add(head);
    });

    addSymbol('vesica', [-5, -0.6, 0], g => {
        const ringMat = new THREE.MeshPhongMaterial({ color: 0xd4a574, emissive: 0xd4a574, emissiveIntensity: 0.1, shininess: 120 });
        const ringGeo = new THREE.TorusGeometry(0.55, 0.06, 12, 48);
        const a = new THREE.Mesh(ringGeo, ringMat);
        a.position.x = -0.28;
        g.add(a);
        const b = new THREE.Mesh(ringGeo, ringMat.clone());
        b.position.x = 0.28;
        g.add(b);
    });

    addSymbol('sri yantra', [-5, 1.0, 0], g => {
        const lineMat = new THREE.LineBasicMaterial({ color: 0xd44470, transparent: true, opacity: 0.85 });
        const lineMat2 = new THREE.LineBasicMaterial({ color: 0xffa844, transparent: true, opacity: 0.85 });
        function triangle(size, downward, z, mat) {
            const h = size * Math.sqrt(3) / 2;
            const pts = downward
                ? [[-size/2, h/2, z],[size/2, h/2, z],[0, -h/2, z],[-size/2, h/2, z]]
                : [[-size/2, -h/2, z],[size/2, -h/2, z],[0, h/2, z],[-size/2, -h/2, z]];
            const ptsV = pts.map(p => new THREE.Vector3(...p));
            const geo = new THREE.BufferGeometry().setFromPoints(ptsV);
            return new THREE.Line(geo, mat);
        }
        g.add(triangle(1.0, true, 0.0, lineMat));
        g.add(triangle(0.65, true, 0.02, lineMat));
        g.add(triangle(0.85, false, -0.01, lineMat2));
        g.add(triangle(0.5, false, -0.02, lineMat2));
        const bindu = new THREE.Mesh(
            new THREE.SphereGeometry(0.04, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0xffffff }),
        );
        g.add(bindu);
    });

    addSymbol('bagua', [5, -0.6, 0], g => {
        const yang = new THREE.Mesh(
            new THREE.CircleGeometry(0.55, 48),
            new THREE.MeshBasicMaterial({ color: 0xf0e6d3, side: THREE.DoubleSide }),
        );
        g.add(yang);
        const halfShape = new THREE.Shape();
        halfShape.absarc(0, 0, 0.55, Math.PI / 2, -Math.PI / 2, true);
        halfShape.absarc(0, 0.275, 0.275, -Math.PI / 2, Math.PI / 2, false);
        halfShape.absarc(0, -0.275, 0.275, -Math.PI / 2, Math.PI / 2, true);
        const yin = new THREE.Mesh(
            new THREE.ShapeGeometry(halfShape),
            new THREE.MeshBasicMaterial({ color: 0x14141a, side: THREE.DoubleSide }),
        );
        yin.position.z = 0.001;
        g.add(yin);
        const outline = new THREE.Mesh(
            new THREE.TorusGeometry(0.55, 0.02, 8, 48),
            new THREE.MeshBasicMaterial({ color: 0xc8a04e }),
        );
        g.add(outline);
    });

    addSymbol('dharmachakra', [5, 2.5, 0], g => {
        const rim = new THREE.Mesh(
            new THREE.TorusGeometry(0.7, 0.05, 12, 48),
            new THREE.MeshPhongMaterial({ color: 0xc8a04e, emissive: 0x4a3820, shininess: 140 }),
        );
        g.add(rim);
        const hub = new THREE.Mesh(
            new THREE.SphereGeometry(0.12, 20, 20),
            new THREE.MeshPhongMaterial({ color: 0x8a6a2a, shininess: 150 }),
        );
        g.add(hub);
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2;
            const spoke = new THREE.Mesh(
                new THREE.CylinderGeometry(0.018, 0.018, 0.56, 8),
                new THREE.MeshPhongMaterial({ color: 0xc8a04e, shininess: 120 }),
            );
            spoke.position.set(Math.cos(a) * 0.35, Math.sin(a) * 0.35, 0);
            spoke.rotation.z = a + Math.PI / 2;
            g.add(spoke);
        }
    });

    addSymbol('whirling', [-5, 3.5, 0], g => {
        const skirt = new THREE.Mesh(
            new THREE.CylinderGeometry(0.12, 0.55, 0.7, 24, 1, true),
            new THREE.MeshPhongMaterial({ color: 0xf0e6d3, side: THREE.DoubleSide }),
        );
        skirt.position.y = -0.15;
        g.add(skirt);
        const body = new THREE.Mesh(
            new THREE.CylinderGeometry(0.1, 0.1, 0.4, 12),
            new THREE.MeshPhongMaterial({ color: 0xc8a04e }),
        );
        body.position.y = 0.4;
        g.add(body);
        const head = new THREE.Mesh(
            new THREE.SphereGeometry(0.08, 16, 16),
            new THREE.MeshPhongMaterial({ color: 0xe8c8a0 }),
        );
        head.position.y = 0.7;
        g.add(head);
        const hat = new THREE.Mesh(
            new THREE.CylinderGeometry(0.07, 0.08, 0.18, 12),
            new THREE.MeshPhongMaterial({ color: 0x8a6a3a }),
        );
        hat.position.y = 0.85;
        g.add(hat);
    });

    addSymbol('tree of life', [5, 4.0, 0], g => {
        const positions = [
            [ 0.0,  0.6], [ 0.3,  0.4], [-0.3,  0.4],
            [ 0.3,  0.1], [-0.3,  0.1], [ 0.0, -0.05],
            [ 0.3, -0.3], [-0.3, -0.3], [ 0.0, -0.5],
            [ 0.0, -0.7],
        ];
        const colors = [0xffffff,0x8888bb,0x333344,0x4a78c8,0xc83838,0xe8c060,0x4ab070,0xd87040,0xa080c8,0x8a6a3a];
        positions.forEach((p, i) => {
            const s = new THREE.Mesh(
                new THREE.SphereGeometry(0.07, 16, 16),
                new THREE.MeshPhongMaterial({
                    color: colors[i],
                    emissive: colors[i],
                    emissiveIntensity: 0.3,
                }),
            );
            s.position.set(p[0], p[1], 0);
            g.add(s);
        });
    });

    addSymbol('mandala', [0, 6.5, 0], g => {
        const inner = new THREE.Mesh(
            new THREE.SphereGeometry(0.06, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0xffffff }),
        );
        g.add(inner);
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2;
            const dot = new THREE.Mesh(
                new THREE.SphereGeometry(0.04, 12, 12),
                new THREE.MeshPhongMaterial({ color: 0xffeacc, emissive: 0xffeacc, emissiveIntensity: 0.5 }),
            );
            dot.position.set(Math.cos(a) * 0.25, Math.sin(a) * 0.25, 0);
            g.add(dot);
        }
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2;
            const petal = new THREE.Mesh(
                new THREE.ConeGeometry(0.08, 0.22, 6),
                new THREE.MeshPhongMaterial({ color: 0xff8e60 }),
            );
            petal.position.set(Math.cos(a) * 0.5, Math.sin(a) * 0.5, 0);
            petal.rotation.z = a - Math.PI / 2;
            g.add(petal);
        }
        const ring = new THREE.Mesh(
            new THREE.TorusGeometry(0.75, 0.02, 8, 64),
            new THREE.MeshBasicMaterial({ color: 0xc8a04e }),
        );
        g.add(ring);
    });

    addSymbol('aum', [-4, 6.5, 0], g => {
        function arc(r, tube, arcLen, rotZ, x, y) {
            const m = new THREE.Mesh(
                new THREE.TorusGeometry(r, tube, 12, 48, arcLen),
                new THREE.MeshPhongMaterial({ color: 0xd4a574, emissive: 0xd4a574, emissiveIntensity: 0.2, shininess: 120 }),
            );
            m.rotation.z = rotZ;
            m.position.set(x, y, 0);
            g.add(m);
        }
        arc(0.55, 0.07, Math.PI * 1.5, Math.PI * 0.25, -0.1, -0.15);
        arc(0.3, 0.055, Math.PI * 1.3, Math.PI * 0.85, 0.25, 0.0);
        arc(0.16, 0.045, Math.PI * 1.6, Math.PI * 0.4, 0.42, 0.25);
        const bindu = new THREE.Mesh(
            new THREE.SphereGeometry(0.045, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0xffffff }),
        );
        bindu.position.set(0.15, 0.7, 0);
        g.add(bindu);
    });

    addSymbol('trinity', [4, 6.5, 0], g => {
        const rGeo = new THREE.TorusGeometry(0.45, 0.05, 12, 48);
        const cols = [0xd4a574, 0x8888aa, 0xf0e6d3];
        [0, Math.PI / 3, (2 * Math.PI) / 3].forEach((rotZ, i) => {
            const m = new THREE.Mesh(
                rGeo,
                new THREE.MeshPhongMaterial({ color: cols[i], emissive: cols[i], emissiveIntensity: 0.15, shininess: 140 }),
            );
            m.rotation.z = rotZ;
            m.rotation.x = i === 0 ? 0.4 : i === 1 ? -0.4 : 0;
            m.rotation.y = i === 0 ? -0.2 : i === 1 ? 0.2 : 0;
            g.add(m);
        });
    });

    addSymbol('tetractys', [0, -4.5, 0], g => {
        function row(count, y) {
            const off = -((count - 1) / 2) * 0.28;
            for (let i = 0; i < count; i++) {
                const d = new THREE.Mesh(
                    new THREE.SphereGeometry(0.07, 16, 16),
                    new THREE.MeshPhongMaterial({
                        color: 0xfff0d6,
                        emissive: 0xd4a574,
                        emissiveIntensity: 0.4,
                    }),
                );
                d.position.set(off + i * 0.28, y, 0);
                g.add(d);
            }
        }
        row(1,  0.45);
        row(2,  0.18);
        row(3, -0.09);
        row(4, -0.36);
    });

    const clock = new THREE.Clock();
    function update() {
        const t = clock.getElapsedTime();
        pinchGlow.scale.setScalar(1 + 0.25 * Math.sin(t * 1.3));
        symbols.forEach((s, i) => {
            const phase = (i / symbols.length) * Math.PI * 2;
            s.group.rotation.y = Math.sin(t * 0.4 + phase) * 0.2;
            const baseY = s.group.userData.baseY ?? s.group.position.y;
            if (s.group.userData.baseY === undefined) s.group.userData.baseY = baseY;
            s.group.position.y = s.group.userData.baseY + Math.sin(t * 0.7 + phase) * 0.06;
        });
    }

    return { scene, camera, controls, update, labels: true };
}
