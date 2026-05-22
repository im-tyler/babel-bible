import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// =========================================================================
// Crescent & Star — proportions taken from Turkish standard TS 5380
// (the official Republic of Türkiye flag specification, 1936).
//
// With flag width G:
//   outer circle diameter  = G / 2                  →  R_out = G / 4
//   inner circle diameter  = 4G / 10 = 2G / 5        →  r_in  = G / 5
//   centre-to-centre gap   = G / 16                  →  offset = G / 16
//   star circumscribed dia = G / 4                   →  R_star = G / 8
//   inner pentagon ratio   = sin(π/10) / cos(π/5)    (regular 5-point star)
//
// We pick G so that the outer crescent radius is 2.0 in scene units
// (G = 8). Star centre is placed in the concave "horn" opening at
// (offset + r_in - R_star, 0), giving the canonical Turkish-flag layout.
// =========================================================================

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);
    scene.fog = new THREE.FogExp2(0x08080d, 0.018);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0.8, 1.4, 6.5);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0.4, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
    controls.minDistance = 4;
    controls.maxDistance = 20;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x202830, 0.7));
    const key = new THREE.DirectionalLight(0xfff0d6, 0.7);
    key.position.set(3, 3, 4);
    scene.add(key);

    const GOLD = 0xd4a574;

    // --- TS 5380 derived constants (G = 8) ---
    const G = 8;
    const R_OUT  = G / 4;          // 2.0
    const R_IN   = G / 5;          // 1.6
    const OFFSET = G / 16;         // 0.5
    const R_STAR = G / 8;          // 1.0
    // Inner pentagon radius for a regular 5-point star:
    //   r_inner / r_outer = sin(π/10) / sin(3π/10)
    const STAR_INNER_RATIO = Math.sin(Math.PI / 10) / Math.sin(3 * Math.PI / 10);

    // Crescent = (outer disk) − (inner disk offset toward the fly).
    // Two-dimensional shape with a circular hole; ExtruedGeometry gives depth.
    const crescentShape = new THREE.Shape();
    crescentShape.absarc(0, 0, R_OUT, 0, Math.PI * 2, false);
    const bite = new THREE.Path();
    bite.absarc(OFFSET, 0, R_IN, 0, Math.PI * 2, true);
    crescentShape.holes.push(bite);

    const crescentGeom = new THREE.ExtrudeGeometry(crescentShape, {
        depth: 0.18,
        bevelEnabled: true,
        bevelThickness: 0.04,
        bevelSize: 0.04,
        bevelSegments: 2,
        curveSegments: 96,
    });
    crescentGeom.translate(0, 0, -0.09);

    const crescent = new THREE.Mesh(
        crescentGeom,
        new THREE.MeshStandardMaterial({
            color: GOLD, roughness: 0.45, metalness: 0.35, emissive: 0x1a0e04,
        }),
    );
    scene.add(crescent);

    // 5-point regular star — points up, tucked into the concave horn opening.
    // Outer vertices at angles π/2 + k·(2π/5), inner vertices interleaved.
    function starShape(rOut, rIn) {
        const s = new THREE.Shape();
        for (let i = 0; i < 10; i++) {
            const r = i % 2 === 0 ? rOut : rIn;
            const a = Math.PI / 2 + (i * Math.PI) / 5;
            const x = r * Math.cos(a);
            const y = r * Math.sin(a);
            if (i === 0) s.moveTo(x, y); else s.lineTo(x, y);
        }
        s.closePath();
        return s;
    }
    const starGeom = new THREE.ExtrudeGeometry(
        starShape(R_STAR, R_STAR * STAR_INNER_RATIO),
        {
            depth: 0.16,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.03,
            bevelSegments: 2,
        },
    );
    starGeom.translate(0, 0, -0.08);

    // Place star so its centre sits inside the horn's opening, on the
    // crescent's symmetry axis. The horn opens around x = OFFSET + R_IN;
    // star's left tip should clear the inner-disk arc.
    const STAR_X = OFFSET + R_IN - R_STAR;   // = 0.5 + 1.6 - 1.0 = 1.1
    const star = new THREE.Mesh(
        starGeom,
        new THREE.MeshStandardMaterial({
            color: GOLD, roughness: 0.4, metalness: 0.4, emissive: 0x1a0e04,
        }),
    );
    star.position.set(STAR_X, 0, 0.05);
    scene.add(star);

    function update() {
        // OrbitControls autoRotate drives motion
    }

    return { scene, camera, controls, update, labels: false };
}
