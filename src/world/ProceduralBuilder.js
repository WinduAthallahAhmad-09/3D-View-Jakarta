/**
 * ProceduralBuilder.js
 * 
 * Lightweight procedural building & road infrastructure toolkit for Jakarta 3D View.
 * Inspired by Google Three-Live (skills/three-live-authoring).
 *
 * Core architectural principles:
 * 1. Realistic Metric Scale Calibration (1 unit 3D ~ 10-12m real-world)
 * 2. Building Typology Scale Matrix (residential, shophouses, mid-rise, industrial)
 * 3. Standardized Road Hierarchy Widths (highway, arterial, collector, local)
 * 4. Road-Aligned Ribbon Placement (facades strictly face the street with consistent setback)
 * 5. Single Draw-Call GPU Instancing (THREE.InstancedMesh) for rock-solid 60 FPS
 */

import * as THREE from 'three';

/**
 * Standard Building Typologies calibrated to real Jakarta urban metrics.
 * 1 unit ~ 10m.
 */
export const BUILDING_TYPOLOGY = {
  RESIDENTIAL: {
    name: 'residential',
    minWidth: 0.65, maxWidth: 0.85,   // 6.5m - 8.5m
    minDepth: 0.85, maxDepth: 1.15,   // 8.5m - 11.5m
    minHeight: 0.45, maxHeight: 0.70, // 4.5m - 7.0m (1-2 lantai)
    setback: 0.35,                     // mundur 3.5m dari aspal jalan
    roofType: 'pitched'
  },
  SHOPHOUSE: {
    name: 'shophouse',                // Ruko Khas Jakarta (3-4 lantai)
    minWidth: 0.55, maxWidth: 0.75,   // 5.5m - 7.5m per unit ruko
    minDepth: 1.20, maxDepth: 1.60,   // 12m - 16m
    minHeight: 1.05, maxHeight: 1.40, // 10.5m - 14m (3-4 lantai)
    setback: 0.25,                     // ruko menempel dekat trotoar
    roofType: 'parapet'
  },
  OFFICE_MIDRISE: {
    name: 'officeMidRise',
    minWidth: 1.80, maxWidth: 3.20,   // 18m - 32m
    minDepth: 1.80, maxDepth: 3.20,   // 18m - 32m
    minHeight: 1.80, maxHeight: 3.50, // 18m - 35m (5-10 lantai)
    setback: 0.60,
    roofType: 'flat'
  },
  WAREHOUSE_LOGISTICS: {
    name: 'warehouse',
    minWidth: 3.00, maxWidth: 5.50,   // 30m - 55m
    minDepth: 4.00, maxDepth: 7.50,   // 40m - 75m
    minHeight: 0.80, maxHeight: 1.30, // 8m - 13m (1-2 lantai hanggar)
    setback: 0.80,
    roofType: 'arch'
  }
};

/**
 * Standard Road Hierarchy Widths.
 */
export const ROAD_HIERARCHY = {
  HIGHWAY: {
    width: 22.0,
    medianWidth: 1.5,
    curbHeight: 0.25,
    description: 'Jalan Tol Layang / Tol Antarkota (JORR, Tol Bandara, Tol Tangerang)'
  },
  ARTERIAL_PRIMARY: {
    width: 16.5,
    sidewalkWidth: 2.0,
    curbHeight: 0.20,
    description: 'Arteri Primer Kembar (Jl. Daan Mogot, Sudirman, Gatot Subroto)'
  },
  COLLECTOR_SECONDARY: {
    width: 11.0,
    sidewalkWidth: 1.5,
    curbHeight: 0.15,
    description: 'Kolektor Sekunder (Jl. Duri Kosambi, Kedoya Raya, Pos Pengumben)'
  },
  LOCAL_RESIDENTIAL: {
    width: 5.5,
    sidewalkWidth: 0.8,
    curbHeight: 0.10,
    description: 'Jalan Lingkungan / Perumahan'
  }
};

export class ProceduralBuilder {
  /**
   * Hitung penempatan bangunan yang rapi di sepanjang sisi jalan (Road-Aligned Ribbon).
   * Menjamin semua bangunan menghadap ke jalan dan jarak mundurnya (setback) seragam.
   *
   * @param {Array<[number, number]>} polylinePoints - Titik koordinat [x, z] jalan
   * @param {number} roadWidth - Lebar jalan
   * @param {Object} typology - Spesifikasi tipe bangunan dari BUILDING_TYPOLOGY
   * @param {Object} options - Konfigurasi tambahan { sides: 'both'|'left'|'right', seed: number, spacing: number }
   * @returns {Array<Object>} Array penempatan { x, z, y, width, depth, height, rotationY, type, side }
   */
  static calculateRoadAlignedPlacements(polylinePoints, roadWidth, typology = BUILDING_TYPOLOGY.SHOPHOUSE, options = {}) {
    if (!polylinePoints || polylinePoints.length < 2) return [];

    const sides = options.sides || 'both';
    const sideMultipliers = sides === 'both' ? [1, -1] : (sides === 'left' ? [-1] : [1]);
    const placements = [];
    const seed = options.seed || 42;
    const spacing = options.spacing || 0.15; // Jarak antar unit bangunan (1.5 meter)

    let pseudoRand = Math.sin(seed) * 10000;
    const nextRand = () => {
      pseudoRand = (pseudoRand * 9301 + 49297) % 233280;
      return pseudoRand / 233280;
    };

    for (let i = 0; i < polylinePoints.length - 1; i++) {
      const p1 = polylinePoints[i];
      const p2 = polylinePoints[i + 1];

      const dx = p2[0] - p1[0];
      const dz = p2[1] - p1[1];
      const segmentLen = Math.hypot(dx, dz);
      if (segmentLen < 1.0) continue;

      // Vektor unit tangen jalan
      const tx = dx / segmentLen;
      const tz = dz / segmentLen;

      // Vektor normal tegak lurus sisi jalan (normal 2D di bidang XZ)
      const nx = -tz;
      const nz = tx;

      // Sudut rotasi agar fasad depan bangunan menghadap jalan
      const baseRotationY = Math.atan2(dx, dz);

      let currentDist = spacing + 0.5;
      while (currentDist < segmentLen - 0.8) {
        const rand = nextRand();
        const width = typology.minWidth + rand * (typology.maxWidth - typology.minWidth);
        const depth = typology.minDepth + (1 - rand) * (typology.maxDepth - typology.minDepth);
        const height = typology.minHeight + nextRand() * (typology.maxHeight - typology.minHeight);

        // Titik pusat di garis tengah jalan
        const centerSegDist = currentDist + width / 2;
        if (centerSegDist > segmentLen - 0.5) break;

        const cx = p1[0] + tx * centerSegDist;
        const cz = p1[1] + tz * centerSegDist;

        // Pasang bangunan pada sisi kiri / kanan jalan
        for (const sm of sideMultipliers) {
          // Jarak offset dari garis tengah jalan = (setengah lebar jalan) + setback + (setengah kedalaman bangunan)
          const offsetDist = (roadWidth * 0.5) + typology.setback + (depth * 0.5);

          const posX = cx + nx * (sm * offsetDist);
          const posZ = cz + nz * (sm * offsetDist);

          // Rotasi: sisi kanan (sm = 1) menghadap kiri jalan, sisi kiri (sm = -1) menghadap sebaliknya
          const rotY = sm > 0 ? baseRotationY + Math.PI / 2 : baseRotationY - Math.PI / 2;

          placements.push({
            x: posX,
            y: 0,
            z: posZ,
            width,
            depth,
            height,
            rotationY: rotY,
            type: typology.name,
            side: sm > 0 ? 'right' : 'left'
          });
        }

        currentDist += width + spacing;
      }
    }

    return placements;
  }

  /**
   * Render ratusan bangunan sekaligus dengan performa tinggi (GPU InstancedMesh = 1 draw call).
   *
   * @param {Array<Object>} placements - Hasil dari calculateRoadAlignedPlacements
   * @param {THREE.Material} material - Material bersama (Shared Material)
   * @param {THREE.Group} targetGroup - Group Three.js tujuan
   * @returns {THREE.InstancedMesh} InstancedMesh yang dihasilkan
   */
  static buildInstancedBuildings(placements, material, targetGroup) {
    if (!placements || placements.length === 0) return null;

    const count = placements.length;
    const baseGeo = new THREE.BoxGeometry(1, 1, 1);
    const instancedMesh = new THREE.InstancedMesh(baseGeo, material, count);
    instancedMesh.castShadow = true;
    instancedMesh.receiveShadow = true;

    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const p = placements[i];
      dummy.position.set(p.x, (p.y || 0) + p.height * 0.5, p.z);
      dummy.rotation.set(0, p.rotationY, 0);
      dummy.scale.set(p.width, p.height, p.depth);
      dummy.updateMatrix();

      instancedMesh.setMatrixAt(i, dummy.matrix);
    }

    instancedMesh.instanceMatrix.needsUpdate = true;

    if (targetGroup) {
      targetGroup.add(instancedMesh);
    }

    return instancedMesh;
  }

  /**
   * Buat geometri atap limasan/pelana parametrik (Pitched Roof) khas permukiman tropis Jakarta.
   *
   * @param {number} width - Lebar bangunan
   * @param {number} depth - Kedalaman bangunan
   * @param {number} ridgeHeight - Tinggi bubungan atap
   * @param {number} overhang - Lebar cucuran atap (tritisan)
   * @returns {THREE.BufferGeometry} Geometri atap parametrik
   */
  static createPitchedRoofGeometry(width, depth, ridgeHeight = 0.35, overhang = 0.12) {
    const w = (width + overhang * 2) * 0.5;
    const d = (depth + overhang * 2) * 0.5;
    const h = ridgeHeight;

    const geom = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      // Sisi Miring Depan
      -w, 0,  d,   w, 0,  d,   0, h,  0,
      // Sisi Miring Belakang
       w, 0, -d,  -w, 0, -d,   0, h,  0,
      // Sisi Miring Kanan
       w, 0,  d,   w, 0, -d,   0, h,  0,
      // Sisi Miring Kiri
      -w, 0, -d,  -w, 0,  d,   0, h,  0,
      // Alas Atap (Bawah)
      -w, 0, -d,   w, 0, -d,   w, 0,  d,
      -w, 0, -d,   w, 0,  d,  -w, 0,  d
    ]);

    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geom.computeVertexNormals();
    return geom;
  }

  /**
   * Buat geometri lengkung hanggar/pergudangan logistik (Arch Roof) untuk kawasan sentra industri/kargo.
   *
   * @param {number} width - Lebar gudang
   * @param {number} depth - Panjang gudang
   * @param {number} archHeight - Ketinggian lengkungan atap
   * @returns {THREE.BufferGeometry} Geometri atap lengkung
   */
  static createArchRoofGeometry(width, depth, archHeight = 0.45) {
    const radius = (width * width / (8 * archHeight)) + (archHeight / 2);
    const angle = 2 * Math.asin(width / (2 * radius));
    const geom = new THREE.CylinderGeometry(radius, radius, depth, 16, 1, false, -angle / 2, angle);
    geom.rotateX(Math.PI / 2);
    geom.rotateZ(Math.PI / 2);
    geom.translate(0, -radius + archHeight, 0);
    geom.computeVertexNormals();
    return geom;
  }

  /**
   * Bersihkan memori mesh dan material secara aman (mencegah memory leak).
   * Sesuai standar three-live lifecycle management.
   *
   * @param {THREE.Object3D} object - Objek Three.js yang akan dibersihkan
   */
  static disposeHierarchy(object) {
    if (!object) return;

    object.traverse((child) => {
      if (child.geometry) {
        child.geometry.dispose();
      }
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((mat) => {
            if (mat.map) mat.map.dispose();
            mat.dispose();
          });
        } else {
          if (child.material.map) child.material.map.dispose();
          child.material.dispose();
        }
      }
    });
  }
}
