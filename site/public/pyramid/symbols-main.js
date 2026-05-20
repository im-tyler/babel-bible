import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

// =========================================================================
// Symbols viewer — standalone page. One shared renderer, swaps the active
// symbol scene on button click. Lazy-loads each module on first visit.
// =========================================================================

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
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

const sceneRegistry = new Map(); // symbol slug -> ctx
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

async function showSymbol(slug, moduleUrl, label) {
    if (!sceneRegistry.has(slug)) {
        const mod = await import(moduleUrl);
        const ctx = mod.init({ renderer, labelRenderer, THREE, OrbitControls, CSS2DObject });
        sceneRegistry.set(slug, ctx);
    }
    setActive(sceneRegistry.get(slug));
    document.querySelectorAll('#symbol-bar button').forEach(b => {
        b.classList.toggle('active', b.dataset.symbol === slug);
    });
    document.getElementById('symbol-label').textContent = label;
}

document.querySelectorAll('#symbol-bar button').forEach(btn => {
    btn.addEventListener('click', () => {
        showSymbol(btn.dataset.symbol, btn.dataset.module, btn.textContent);
    });
});

// Default symbol on load
const defaultBtn = document.querySelector('#symbol-bar button[data-symbol="ouroboros"]');
showSymbol(defaultBtn.dataset.symbol, defaultBtn.dataset.module, defaultBtn.textContent);

function loop() {
    requestAnimationFrame(loop);
    if (!currentCtx) return;
    currentCtx.controls?.update();
    currentCtx.update?.();
    renderer.render(currentCtx.scene, currentCtx.camera);
    if (currentCtx.labels !== false) {
        labelRenderer.render(currentCtx.scene, currentCtx.camera);
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
