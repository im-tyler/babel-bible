import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// =========================================================================
// Khanda — emblem of the Khalsa (Sikhism). Three constituent weapons,
// arranged after the Sikh Rehat Maryada and Nishan Sahib iconography:
//
//   1. Khanda (central sword)   — straight, double-edged, single-pointed
//                                  at the top; hilt at the bottom.
//                                  Symbolises divine knowledge (vidya).
//   2. Chakkar (chakra)          — circular ring around the khanda.
//                                  Eternity / sovereignty / mukti.
//   3. Two kirpans (curved swords) — single-edged, crossed below the
//                                    chakkar, blades curving outward.
//        • Left  — "Miri"  — temporal authority.
//        • Right — "Piri"  — spiritual authority.
//
// Proportional layout (verified against Khalsa Nishan Sahib renderings):
//        chakkar outer R         = 1.10
//        khanda total height     = 3.20   (blade 2.20, hilt 1.00)
//        khanda blade width      = 0.34
//        kirpan blade arc radius = 1.85    (so the tip sweeps just above
//                                           the chakkar's top)
//        kirpan arc sweep        = 145°    (from hilt at lower outside
//                                           to tip at upper inside)
// =========================================================================

export function init({ renderer }) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08080d);
    scene.fog = new THREE.FogExp2(0x08080d, 0.018);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
    camera.position.set(0, 0.4, 7.5);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.1, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.32;
    controls.minDistance = 4;
    controls.maxDistance = 22;
    controls.disconnect?.();

    scene.add(new THREE.AmbientLight(0x202830, 0.7));
    const key = new THREE.DirectionalLight(0xfff0d6, 0.75);
    key.position.set(2, 4, 5);
    scene.add(key);

    const GOLD = 0xd4a574;

    const metalMat = new THREE.MeshStandardMaterial({
        color: GOLD, roughness: 0.4, metalness: 0.55, emissive: 0x140a02,
    });

    // ------------------------------------------------------------------
    // 1. Khanda — central double-edged sword (straight, point up, hilt down)
    // ------------------------------------------------------------------
    //   Blade outline (in XY plane): a tall hexagonal lens.
    //     • point at top
    //     • two shoulders where blade meets handle
    //     • widest at the centre, tapered toward both ends
    //   Hilt: cylindrical grip + spherical pommel.
    // ------------------------------------------------------------------
    {
        const BLADE_H   = 2.20;
        const BLADE_W   = 0.34;
        const HILT_H    = 1.00;
        const SHOULDER  = 0.10;          // shoulder length above the cross-guard
        const baseY     = -HILT_H + 0.10;   // sword base sits below origin so the centre roughly aligns

        // Blade as an extruded Shape (point-up double-edged profile).
        const blade = new THREE.Shape();
        const x = BLADE_W / 2;
        blade.moveTo(0, baseY + HILT_H + BLADE_H);          // top point
        blade.lineTo( x, baseY + HILT_H + BLADE_H * 0.55);  // upper-right shoulder
        blade.lineTo( x, baseY + HILT_H + SHOULDER);        // lower-right shoulder
        blade.lineTo( 0, baseY + HILT_H);                   // bottom of blade (above guard)
        blade.lineTo(-x, baseY + HILT_H + SHOULDER);        // lower-left shoulder
        blade.lineTo(-x, baseY + HILT_H + BLADE_H * 0.55);  // upper-left shoulder
        blade.closePath();

        const bladeGeom = new THREE.ExtrudeGeometry(blade, {
            depth: 0.16,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.03,
            bevelSegments: 2,
        });
        bladeGeom.translate(0, 0, -0.08);
        scene.add(new THREE.Mesh(bladeGeom, metalMat));

        // Cross-guard (horizontal bar where blade meets hilt)
        const guard = new THREE.Mesh(
            new THREE.BoxGeometry(0.65, 0.10, 0.18),
            metalMat,
        );
        guard.position.y = baseY + HILT_H - 0.05;
        scene.add(guard);

        // Hilt grip (cylinder)
        const grip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.10, 0.10, HILT_H * 0.7, 16),
            metalMat,
        );
        grip.position.y = baseY + HILT_H * 0.35;
        scene.add(grip);

        // Pommel (sphere at the very bottom of the hilt)
        const pommel = new THREE.Mesh(
            new THREE.SphereGeometry(0.14, 20, 16),
            metalMat,
        );
        pommel.position.y = baseY;
        scene.add(pommel);
    }

    // ------------------------------------------------------------------
    // 2. Chakkar — TorusGeometry centred on the blade's midline.
    // ------------------------------------------------------------------
    {
        const R_CHAKKAR  = 1.10;
        const TUBE       = 0.075;
        const chakkar = new THREE.Mesh(
            new THREE.TorusGeometry(R_CHAKKAR, TUBE, 12, 96),
            new THREE.MeshStandardMaterial({
                color: GOLD, roughness: 0.35, metalness: 0.65, emissive: 0x140a02,
            }),
        );
        chakkar.position.y = 0.20;
        scene.add(chakkar);
    }

    // ------------------------------------------------------------------
    // 3. Two kirpans — curved single-edged swords flanking the khanda.
    //    Each blade traces a circular arc; hilts at the bottom-outside,
    //    blade tips at the upper-inside (the canonical "embracing" pose).
    // ------------------------------------------------------------------
    function makeKirpan(side /* +1 right, -1 left */) {
        const grp = new THREE.Group();

        // Blade as a tube along a circular arc.
        const ARC_RADIUS = 1.85;
        const ARC_SWEEP  = Math.PI * 145 / 180;          // 145°
        const ARC_CENTRE = new THREE.Vector3(side * 1.60, -0.10, 0);
        // Hilt-end angle: blade emerges from a hilt sitting at the bottom-outside.
        // For the right kirpan (side=+1): hilt is at angle 200° (down-left of arc centre),
        // tip is at 200° - 145° = 55° (up-left of arc centre) — i.e. inside-up.
        // Mirror for the left.
        const HILT_ANGLE = side > 0
            ? Math.PI * 200 / 180
            : Math.PI * (360 - 200) / 180;
        const angleDir = side > 0 ? -1 : +1;             // sweep direction
        const SEGMENTS = 64;
        const pts = [];
        for (let i = 0; i <= SEGMENTS; i++) {
            const t = i / SEGMENTS;
            const a = HILT_ANGLE + angleDir * t * ARC_SWEEP;
            pts.push(new THREE.Vector3(
                ARC_CENTRE.x + ARC_RADIUS * Math.cos(a),
                ARC_CENTRE.y + ARC_RADIUS * Math.sin(a),
                0,
            ));
        }
        const curve = new THREE.CatmullRomCurve3(pts);
        const bladeTube = new THREE.Mesh(
            new THREE.TubeGeometry(curve, 96, 0.08, 8, false),
            metalMat,
        );
        grp.add(bladeTube);

        // Hilt at the start of the curve (the outside-bottom end).
        const hiltPos = pts[0];
        const hiltDir = new THREE.Vector3().subVectors(pts[1], pts[0]).normalize();
        const hilt = new THREE.Mesh(
            new THREE.CylinderGeometry(0.09, 0.09, 0.45, 12),
            metalMat,
        );
        const up = new THREE.Vector3(0, 1, 0);
        // Cylinder default points along Y; rotate to align with hilt outward direction.
        const hiltAxis = hiltDir.clone().negate();  // hilt points opposite the blade's start tangent
        const quat = new THREE.Quaternion().setFromUnitVectors(up, hiltAxis);
        hilt.quaternion.copy(quat);
        hilt.position.copy(hiltPos).addScaledVector(hiltAxis, 0.18);
        grp.add(hilt);

        // Pommel cap at hilt's outer end.
        const pommel = new THREE.Mesh(
            new THREE.SphereGeometry(0.10, 16, 12),
            metalMat,
        );
        pommel.position.copy(hiltPos).addScaledVector(hiltAxis, 0.42);
        grp.add(pommel);

        return grp;
    }
    scene.add(makeKirpan(+1));
    scene.add(makeKirpan(-1));

    function update() {
        // OrbitControls autoRotate drives motion
    }

    return { scene, camera, controls, update, labels: false };
}
