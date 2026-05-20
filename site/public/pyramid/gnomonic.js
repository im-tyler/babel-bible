import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);
    scene.fog = new THREE.FogExp2(0x08080d, 0.014);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 200);
    camera.position.set(6, 4, 9);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
    controls.minDistance = 5;
    controls.maxDistance = 30;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x202830, 0.6));
    const key = new THREE.DirectionalLight(0xfff0d6, 0.8);
    key.position.set(5, 7, 4);
    scene.add(key);
    const fill = new THREE.PointLight(0x6a7d9d, 0.5, 20);
    fill.position.set(-5, -3, -3);
    scene.add(fill);

    const R = 2.0;
    const PLANE_D = R;
    const PLANE_HALF = 3.5;

    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(R, 48, 32),
        new THREE.MeshPhongMaterial({
            color: 0x6a7d9d,
            transparent: true,
            opacity: 0.08,
            side: THREE.DoubleSide,
            shininess: 80,
            depthWrite: false,
        }),
    );
    scene.add(sphere);

    const wire = new THREE.Mesh(
        new THREE.SphereGeometry(R, 24, 16),
        new THREE.MeshBasicMaterial({
            color: 0x4a5d7d,
            wireframe: true,
            transparent: true,
            opacity: 0.22,
        }),
    );
    scene.add(wire);

    function makeTangentPlane(yPos) {
        const grp = new THREE.Group();
        grp.position.y = yPos;
        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(PLANE_HALF * 2, PLANE_HALF * 2),
            new THREE.MeshBasicMaterial({
                color: 0xd4a574,
                transparent: true,
                opacity: 0.08,
                side: THREE.DoubleSide,
                depthWrite: false,
            }),
        );
        plane.rotation.x = Math.PI / 2;
        grp.add(plane);
        const grid = new THREE.GridHelper(PLANE_HALF * 2, 12, 0xd4a574, 0xd4a574);
        grid.material.transparent = true;
        grid.material.opacity = 0.25;
        grp.add(grid);
        const dot = new THREE.Mesh(
            new THREE.SphereGeometry(0.08, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0xffe6b3 }),
        );
        grp.add(dot);
        return grp;
    }
    scene.add(makeTangentPlane(PLANE_D));
    scene.add(makeTangentPlane(-PLANE_D));

    const centre = new THREE.Mesh(
        new THREE.SphereGeometry(0.09, 24, 24),
        new THREE.MeshBasicMaterial({ color: 0xffeacc }),
    );
    scene.add(centre);
    const centreGlow = new THREE.Mesh(
        new THREE.SphereGeometry(0.28, 16, 16),
        new THREE.MeshBasicMaterial({
            color: 0xffd699,
            transparent: true,
            opacity: 0.35,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        }),
    );
    scene.add(centreGlow);

    const rayMat = new THREE.LineBasicMaterial({
        color: 0xd4a574,
        transparent: true,
        opacity: 0.4,
    });

    function rayToPlane(dir) {
        if (Math.abs(dir.y) < 0.001) return null;
        const targetY = dir.y > 0 ? PLANE_D : -PLANE_D;
        const t = targetY / dir.y;
        const x = dir.x * t;
        const z = dir.z * t;
        if (Math.abs(x) > PLANE_HALF || Math.abs(z) > PLANE_HALF) return null;
        return new THREE.Vector3(x, targetY, z);
    }

    const staticRays = new THREE.Group();
    scene.add(staticRays);
    for (let i = 0; i < 32; i++) {
        const u = (i + 0.5) / 32;
        const phi = Math.acos(1 - 2 * u);
        const theta = i * Math.PI * (1 + Math.sqrt(5));
        const dir = new THREE.Vector3(
            Math.sin(phi) * Math.cos(theta),
            Math.cos(phi),
            Math.sin(phi) * Math.sin(theta),
        );
        const end = rayToPlane(dir);
        if (!end) continue;
        const pts = [new THREE.Vector3(0, 0, 0), end];
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        staticRays.add(new THREE.Line(geo, rayMat));
        const surfacePt = dir.clone().multiplyScalar(R);
        const dot = new THREE.Mesh(
            new THREE.SphereGeometry(0.04, 8, 8),
            new THREE.MeshBasicMaterial({ color: 0xfff0d6, transparent: true, opacity: 0.5 }),
        );
        dot.position.copy(surfacePt);
        staticRays.add(dot);
        const planeDot = new THREE.Mesh(
            new THREE.SphereGeometry(0.05, 8, 8),
            new THREE.MeshBasicMaterial({ color: 0xd4a574 }),
        );
        planeDot.position.copy(end);
        staticRays.add(planeDot);
    }

    const tracerSurface = new THREE.Mesh(
        new THREE.SphereGeometry(0.13, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xfff0d6 }),
    );
    scene.add(tracerSurface);
    const tracerHalo = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 16, 16),
        new THREE.MeshBasicMaterial({
            color: 0xfff0d6,
            transparent: true,
            opacity: 0.35,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        }),
    );
    scene.add(tracerHalo);
    const tracerPlanePt = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xffd699 }),
    );
    scene.add(tracerPlanePt);
    const liveRay = new THREE.Mesh(
        new THREE.CylinderGeometry(0.018, 0.018, 1, 8),
        new THREE.MeshBasicMaterial({ color: 0xffe6b3, transparent: true, opacity: 0.85 }),
    );
    scene.add(liveRay);
    const oppositeRay = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, 1, 8),
        new THREE.MeshBasicMaterial({ color: 0xffe6b3, transparent: true, opacity: 0.35 }),
    );
    scene.add(oppositeRay);

    const TRAIL_LEN = 1400;
    const trailPos = new Float32Array(TRAIL_LEN * 3);
    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
    const trailLine = new THREE.Line(
        trailGeo,
        new THREE.LineBasicMaterial({ color: 0xfff0d6, transparent: true, opacity: 0.55 }),
    );
    scene.add(trailLine);

    const PLANE_TRAIL_LEN = 1400;
    function makePlaneTrail(color) {
        const arr = new Float32Array(PLANE_TRAIL_LEN * 3);
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(arr, 3));
        const line = new THREE.Line(g, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.7 }));
        scene.add(line);
        return { arr, geo: g, line, history: [] };
    }
    const trailN = makePlaneTrail(0xd4a574);
    const trailS = makePlaneTrail(0x8888aa);
    const trail3D = { arr: trailPos, geo: trailGeo, line: trailLine, history: [] };

    function pushBufferTrail(trail, pt) {
        trail.history.push(pt.clone());
        if (trail.history.length > PLANE_TRAIL_LEN) trail.history.shift();
        for (let i = 0; i < trail.history.length; i++) {
            trail.arr[i * 3]     = trail.history[i].x;
            trail.arr[i * 3 + 1] = trail.history[i].y;
            trail.arr[i * 3 + 2] = trail.history[i].z;
        }
        trail.geo.setDrawRange(0, trail.history.length);
        trail.geo.attributes.position.needsUpdate = true;
    }

    function setLiveCylinder(cyl, from, to) {
        const dir = new THREE.Vector3().subVectors(to, from);
        const len = dir.length();
        cyl.scale.set(1, len, 1);
        const mid = new THREE.Vector3().addVectors(from, to).multiplyScalar(0.5);
        cyl.position.copy(mid);
        cyl.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    }

    const clock = new THREE.Clock();
    function update() {
        const t = clock.getElapsedTime();
        wire.rotation.y = t * 0.05;

        const W1 = 0.27;
        const W2 = 1.13;
        const a = W1 * t;
        const b = W2 * t;
        const x0 = 0, y0 = -Math.sin(b), z0 = Math.cos(b);
        const dir = new THREE.Vector3(
            x0 * Math.cos(a) + z0 * Math.sin(a),
            y0,
            -x0 * Math.sin(a) + z0 * Math.cos(a),
        );

        const surfacePos = dir.clone().multiplyScalar(R);
        tracerSurface.position.copy(surfacePos);
        tracerHalo.position.copy(surfacePos);
        tracerHalo.scale.setScalar(1 + 0.2 * Math.sin(t * 2.0));

        pushBufferTrail(trail3D, surfacePos);

        const fwd = rayToPlane(dir);
        if (fwd) {
            tracerPlanePt.visible = true;
            tracerPlanePt.position.copy(fwd);
            setLiveCylinder(liveRay, new THREE.Vector3(0, 0, 0), fwd);
            liveRay.visible = true;
            pushBufferTrail(fwd.y > 0 ? trailN : trailS, fwd);
        } else {
            tracerPlanePt.visible = false;
            liveRay.visible = false;
        }

        const back = rayToPlane(dir.clone().negate());
        if (back) {
            setLiveCylinder(oppositeRay, new THREE.Vector3(0, 0, 0), back);
            oppositeRay.visible = true;
            pushBufferTrail(back.y > 0 ? trailN : trailS, back);
        } else {
            oppositeRay.visible = false;
        }

        centreGlow.scale.setScalar(1 + 0.15 * Math.sin(t * 1.6));
    }

    return { scene, camera, controls, update, labels: false };
}
