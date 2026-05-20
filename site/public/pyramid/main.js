import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

// =========================================================================
// Shared renderer + labelRenderer.
// ONE WebGL context for the entire visualization. Every scene module hands us
// back a {scene, camera, controls, update, labels} context; the central loop
// renders only the currently active one.
// =========================================================================

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
// Set styles individually — assigning cssText would wipe the width/height that setSize applied
renderer.domElement.style.position = 'fixed';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.zIndex = '0';
document.body.insertBefore(renderer.domElement, document.body.firstChild);

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(innerWidth, innerHeight);
labelRenderer.domElement.style.position = 'fixed';
labelRenderer.domElement.style.top = '0';
labelRenderer.domElement.style.left = '0';
labelRenderer.domElement.style.zIndex = '1';
labelRenderer.domElement.style.pointerEvents = 'none';
document.body.insertBefore(labelRenderer.domElement, document.body.firstChild.nextSibling);

// =========================================================================
// Main pyramid scene — the "higher power" view. Self-contained context
// so it follows the same contract as the lazy-loaded aux modules.
// =========================================================================

const PH = 2.5;
const PR = 1.5;
const LEVELS = 8;
const PPL = 64;
const T_R = 2.0;
const T_r = 0.6;

function buildMainScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);
    scene.fog = new THREE.FogExp2(0x08080d, 0.015);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(7, 2, 9);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1.25, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;
    controls.minDistance = 4;
    controls.maxDistance = 25;

    scene.add(new THREE.AmbientLight(0x404060, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);
    const warmLight = new THREE.PointLight(0xd4a574, 0.5, 20);
    warmLight.position.set(0, 1.25, 5);
    scene.add(warmLight);

    const layers = [
        { name: 'Ego as Illness', desc: 'below that which you are', y: -2.5, inv: true,  color: 0x7a2e2e, op: 0.0,  eop: 0.55 },
        { name: 'Reality',        desc: 'what is',                  y:  0.0, inv: false, color: 0xd4a574, op: 0.35, eop: 0.8  },
        { name: 'Ego',            desc: 'above itself',             y:  2.5, inv: true,  color: 0x8888aa, op: 0.08, eop: 0.3  },
        { name: 'Life',           desc: 'penetration — more as is', y: 5.0, inv: false, color: 0xf0e6d3, op: 0.4, eop: 0.9 },
    ];

    let highlightedPyramid = -1;
    const allMats = [];
    const pyramidGroups = [];
    const pyramidLabelEls = [];
    const efLabelEls = [];

    layers.forEach((layer, pi) => {
        const group = new THREE.Group();
        group.position.set(0, layer.y, 0);

        const geo = new THREE.ConeGeometry(PR, PH, 4);

        const meshMat = new THREE.MeshPhongMaterial({
            color: layer.color,
            transparent: true,
            opacity: layer.op,
            side: THREE.DoubleSide,
            shininess: 60,
            depthWrite: false,
        });
        const msVal = pi === 0 ? 0 : 0.8;
        meshMat.userData = { base: layer.op, pi, ms: msVal };
        allMats.push(meshMat);

        const mesh = new THREE.Mesh(geo, meshMat);
        if (layer.inv) mesh.rotation.x = Math.PI;
        group.add(mesh);

        const edgesGeo = new THREE.EdgesGeometry(geo);
        const edgeMat = new THREE.LineBasicMaterial({
            color: layer.color,
            transparent: true,
            opacity: layer.eop,
        });
        edgeMat.userData = { base: layer.eop, pi, ms: msVal };
        allMats.push(edgeMat);

        const edges = new THREE.LineSegments(edgesGeo, edgeMat);
        if (layer.inv) edges.rotation.x = Math.PI;
        group.add(edges);

        if (pi === 3) {
            const glowGeo = new THREE.ConeGeometry(PR * 1.15, PH * 1.1, 4);
            const glowMat = new THREE.MeshBasicMaterial({
                color: layer.color,
                transparent: true,
                opacity: 0.06,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            });
            glowMat.userData = { base: 0.06, pi, ms: 0.5 };
            allMats.push(glowMat);
            const glowMesh = new THREE.Mesh(glowGeo, glowMat);
            glowMesh.renderOrder = -1;
            group.add(glowMesh);
        }

        scene.add(group);
        pyramidGroups.push(group);
    });

    const fieldDefs = [
        { localY: 0.75, h: 3.5, r: 2.0, inv: true,  color: 0x7a2e2e, op: 0.045, eop: 0.13 },
        { localY: 1.0,  h: 5.0, r: 3.0, inv: false, color: 0xd4a574, op: 0.035, eop: 0.10 },
        { localY: 0.75, h: 5.5, r: 3.5, inv: true,  color: 0x8888aa, op: 0.028, eop: 0.09 },
        { localY: 1.0,  h: 7.0, r: 5.0, inv: false, color: 0xf0e6d3, op: 0.022, eop: 0.08 },
    ];

    fieldDefs.forEach((fd, i) => {
        const geo = new THREE.ConeGeometry(fd.r, fd.h, 4);
        const mat = new THREE.MeshBasicMaterial({
            color: fd.color,
            transparent: true,
            opacity: fd.op,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const fdMs = i === 0 ? 0 : 0.6;
        mat.userData = { base: fd.op, pi: i, ms: fdMs };
        allMats.push(mat);

        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(0, fd.localY, 0);
        mesh.renderOrder = 1;
        if (fd.inv) mesh.rotation.x = Math.PI;

        const edgesGeo = new THREE.EdgesGeometry(geo);
        const edgeMat = new THREE.LineBasicMaterial({
            color: fd.color,
            transparent: true,
            opacity: fd.eop,
        });
        edgeMat.userData = { base: fd.eop, pi: i, ms: fdMs };
        allMats.push(edgeMat);

        const edges = new THREE.LineSegments(edgesGeo, edgeMat);
        mesh.add(edges);

        pyramidGroups[i].add(mesh);
    });

    function squareLoop(y, radius, twist) {
        const pts = [];
        const perEdge = PPL / 4;
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

    const morphData = [];

    function dragDown(pts, factor) {
        const targetY = -2.5;
        return pts.map(p => new THREE.Vector3(
            p.x * (1 - factor * 0.2),
            p.y + (targetY - p.y) * factor,
            p.z * (1 - factor * 0.2),
        ));
    }

    function illnessTorusRing(index) {
        const theta = (index / LEVELS) * Math.PI * 2;
        const pts = [];
        for (let i = 0; i <= PPL; i++) {
            const phi = (i / PPL) * Math.PI * 2;
            pts.push(new THREE.Vector3(
                (T_R + T_r * Math.cos(phi)) * Math.cos(theta),
                T_r * Math.sin(phi) - 2.5,
                (T_R + T_r * Math.cos(phi)) * Math.sin(theta)
            ));
        }
        return pts;
    }

    for (let i = 0; i < LEVELS; i++) {
        const t = (i + 1) / (LEVELS + 1);
        const y = -PH / 2 + t * PH;
        const r = PR * (1 - t);
        const orig = squareLoop(y, r, 0);
        const target = dragDown(orig, 0.5);
        const geo = new THREE.BufferGeometry().setFromPoints(orig);
        const mat = new THREE.LineBasicMaterial({ color: 0xd4a574, transparent: true, opacity: 0.45 });
        mat.userData = { base: 0.45, pi: 1, ms: 0.3 };
        allMats.push(mat);
        const line = new THREE.Line(geo, mat);
        scene.add(line);
        morphData.push({ line, orig, target });
    }

    const eightfold = [
        'Right View', 'Right Intention',
        'Right Speech', 'Right Action', 'Right Livelihood',
        'Right Effort', 'Right Mindfulness', 'Right Concentration',
    ];

    for (let i = 0; i < LEVELS; i++) {
        const t = (i + 1) / (LEVELS + 1);
        const y = PH / 2 + t * PH;
        const r = PR * t;
        const orig = squareLoop(y, r, 0);
        const target = dragDown(orig, 0.75);
        const geo = new THREE.BufferGeometry().setFromPoints(orig);
        const mat = new THREE.LineBasicMaterial({ color: 0x8888aa, transparent: true, opacity: 0.35 });
        mat.userData = { base: 0.35, pi: 2, ms: 0.5 };
        allMats.push(mat);
        const line = new THREE.Line(geo, mat);
        scene.add(line);
        morphData.push({ line, orig, target });
    }

    for (let i = 0; i < LEVELS; i++) {
        const t = (i + 1) / (LEVELS + 1);
        const y = -PH / 2 - t * PH;
        const r = PR * (1 - t);
        const twist = t * Math.PI;
        const orig = squareLoop(y, r, twist);
        const target = illnessTorusRing(i);
        const geo = new THREE.BufferGeometry().setFromPoints(orig);
        const mat = new THREE.LineBasicMaterial({ color: 0x7a2e2e, transparent: true, opacity: 0.5 });
        mat.userData = { base: 0.5, pi: 0, ms: 0 };
        allMats.push(mat);
        const line = new THREE.Line(geo, mat);
        scene.add(line);
        morphData.push({ line, orig, target });
    }

    let morphProgress = 0;
    let morphTarget = 0;

    function setMorph(value) {
        morphTarget = value;
    }

    document.querySelectorAll('.legend-row[data-pyramid]').forEach(row => {
        row.addEventListener('mouseenter', () => {
            highlightedPyramid = parseInt(row.dataset.pyramid);
        });
        row.addEventListener('mouseleave', () => {
            highlightedPyramid = -1;
        });
    });

    function applyVisibility() {
        const hp = highlightedPyramid;
        allMats.forEach(mat => {
            const mf = 1 - morphProgress * mat.userData.ms;
            const hf = hp < 0 ? 1 : (mat.userData.pi === hp ? 1 : 0.05);
            mat.opacity = mat.userData.base * mf * hf;
        });
        pyramidLabelEls.forEach((el, i) => {
            if (hp < 0) {
                el.style.removeProperty('opacity');
            } else {
                el.style.setProperty('opacity', i === hp ? '1' : '0.06', 'important');
            }
        });
        efLabelEls.forEach(el => {
            if (hp < 0) {
                el.style.removeProperty('opacity');
            } else {
                el.style.setProperty('opacity', hp === 2 ? '1' : '0.06', 'important');
            }
        });
    }

    const clock = new THREE.Clock();
    function update() {
        const delta = clock.getDelta();
        const elapsed = clock.elapsedTime;

        pyramidGroups.forEach((g, i) => {
            const dragShift = i === 0 ? 0 :
                             i === 1 ? -1.5 * morphProgress :
                             i === 2 ? -2.5 * morphProgress :
                             -3.5 * morphProgress;
            g.position.y = layers[i].y + Math.sin(elapsed * 0.4 + i * 1.2) * 0.04 + dragShift;
        });

        morphProgress += (morphTarget - morphProgress) * Math.min(delta * 3, 0.12);
        if (Math.abs(morphProgress - morphTarget) < 0.001) morphProgress = morphTarget;

        morphData.forEach(({ line, orig, target }) => {
            const pos = line.geometry.attributes.position.array;
            for (let i = 0; i < orig.length; i++) {
                const j = i * 3;
                pos[j]     = orig[i].x + (target[i].x - orig[i].x) * morphProgress;
                pos[j + 1] = orig[i].y + (target[i].y - orig[i].y) * morphProgress;
                pos[j + 2] = orig[i].z + (target[i].z - orig[i].z) * morphProgress;
            }
            line.geometry.attributes.position.needsUpdate = true;
        });

        applyVisibility();
    }

    return { scene, camera, controls, update, labels: false, setMorph };
}

const mainCtx = buildMainScene();

// =========================================================================
// Aux scene registry — lazy-loaded modules each exporting init().
// =========================================================================

const AUX_SCENES = [
    { btn: 'toggle-meeting',      div: 'meeting-scene',      module: './meeting.js',      label: 'meeting' },
    { btn: 'toggle-spawn',        div: 'spawn-scene',        module: './spawn.js',        label: 'spawn' },
    { btn: 'toggle-crystal-axis', div: 'crystal-axis-scene', module: './crystal-axis.js', label: 'crystal axis' },
];

const sceneRegistry = new Map();   // div -> ctx
const moduleCache = new Map();     // div -> module
let currentCtx = null;

function setActive(ctx) {
    if (currentCtx && currentCtx !== ctx && currentCtx.controls) {
        currentCtx.controls.disconnect?.();
    }
    currentCtx = ctx;
    if (currentCtx?.controls) {
        currentCtx.controls.connect?.();
    }
}

// =========================================================================
// Tab navigation — Structure / Torus / Crystal / Meeting / Spawn.
// First three are views of the axial form (Structure + Torus use mainCtx,
// just toggling the morph state; Crystal swaps to its aux scene).
// Meeting and Spawn are separate aux scenes.
// =========================================================================

const SCENE_TABS = {
    structure: { ctx: () => mainCtx, morph: 0 },
    torus:     { ctx: () => mainCtx, morph: 1 },
    crystal:   { ctx: () => loadAux(AUX_SCENES.find(s => s.div === 'crystal-axis-scene')), morph: null },
    meeting:   { ctx: () => loadAux(AUX_SCENES.find(s => s.div === 'meeting-scene')),      morph: null },
    spawn:     { ctx: () => loadAux(AUX_SCENES.find(s => s.div === 'spawn-scene')),         morph: null },
};

async function loadAux(cfg) {
    if (!sceneRegistry.has(cfg.div)) {
        const mod = await import(cfg.module);
        moduleCache.set(cfg.div, mod);
        const ctx = mod.init({ renderer, labelRenderer, THREE, OrbitControls, CSS2DObject });
        sceneRegistry.set(cfg.div, ctx);
    }
    return sceneRegistry.get(cfg.div);
}

async function selectTab(view) {
    const cfg = SCENE_TABS[view];
    if (!cfg) return;
    // Immediate UI feedback — highlight the chosen tab before await
    document.querySelectorAll('.scene-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.view === view);
    });
    const ctx = await cfg.ctx();
    setActive(ctx);
    if (cfg.morph !== null && ctx.setMorph) {
        ctx.setMorph(cfg.morph);
    }
}

document.querySelectorAll('.scene-tab').forEach(tab => {
    tab.addEventListener('click', () => selectTab(tab.dataset.view));
});

// =========================================================================
// Central render loop — only the active scene runs.
// =========================================================================

setActive(mainCtx);

function loop() {
    requestAnimationFrame(loop);
    if (!currentCtx) return;
    currentCtx.controls?.update();
    currentCtx.update?.();
    renderer.render(currentCtx.scene, currentCtx.camera);
    if (currentCtx.labels === true) {
        labelRenderer.domElement.style.display = '';
        labelRenderer.render(currentCtx.scene, currentCtx.camera);
    } else {
        // Hide the labelRenderer DOM so labels from a previously-active scene
        // don't linger on screen when the current scene doesn't use them.
        labelRenderer.domElement.style.display = 'none';
    }
}
loop();

addEventListener('resize', () => {
    renderer.setSize(innerWidth, innerHeight);
    labelRenderer.setSize(innerWidth, innerHeight);
    if (currentCtx?.camera) {
        currentCtx.camera.aspect = innerWidth / innerHeight;
        currentCtx.camera.updateProjectionMatrix();
    }
});
