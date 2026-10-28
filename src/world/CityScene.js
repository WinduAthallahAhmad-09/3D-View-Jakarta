import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { TextureGenerator } from './TextureGenerator.js';
import { LandmarkModels } from './LandmarkModels.js';
import { JAKARTA_LANDMARKS, CITY_CORRIDOR_CONFIG } from '../config/landmarks.js';
import { VOID_B_OSM } from '../data/void_b_osm.js';
import { VOID_C_OSM } from '../data/void_c_osm.js';

const VOID_C_CONNECTOR_PATHS = [
  [[-1043.2, -422.7], [-1030, -414.5], [-1000, -412.5], [-975, -412.5], [-955, -413.5]],
  [[-971.8, 169.1], [-962, 168.4], [-950, 168]]
];

export class CityScene {
  constructor(scene) {
    this.scene = scene;
    this.proceduralGroup = new THREE.Group();
    this.proceduralGroup.name = "procedural-city-group";
    this.scene.add(this.proceduralGroup);

    this.interactiveObjects = [];
    this.vehicles = [];
    this.vehicleMeshes = null;
    this.vehicleDummy = new THREE.Object3D();
    this.animatedTrains = [];
    this.pjuLampTransforms = [];
    this.pjuLightPool = [];
    this.pjuLightPoolSize = 12;
    this.pjuLightsActive = false;
    this.currentTimePreset = 'day';
    this.lastPjuLightPosition = new THREE.Vector3(Infinity, Infinity, Infinity);
    this.nightMaterials = [];
    this.glowMaterials = [];
    this.init();
  }

  setProceduralVisible(visible) {
    this.proceduralGroup.visible = visible;
  }

  init() {
    this.buildGroundAndGrid();
    this.buildWaterways();
    this.buildRoadNetwork();
    this.buildElevatedRailway();
    this.buildCentralJakartaEastCorridor();
    this.buildCentralJakartaEastInfillAndDistricts();
    this.buildSouthJakartaCorridor();
    this.buildSouthJakartaInfillAndParks();
    this.buildNorthJakartaInfrastructure();
    this.buildNorthJakartaInfillAndLogistics();
    this.buildWestJakartaInfrastructure();
    this.buildWestJakartaInfillAndDistricts();
    this.buildVoidBDaanMogot();
    this.buildVoidCMeruya();
    this.buildVoidBInfillAndIndustry();
    this.buildVoidBTransit();
    this.buildEastJakartaInfrastructure();
    this.buildEastJakartaInfillAndDistricts();
    this.buildLandmarks();
    this.buildUrbanDistricts();
    this.buildStreetVegetation();
    this.buildStreetLampInstances();
    this.buildPjuLightPool();
    this.buildTraffic();
    this.collectGlowMaterials();
  }

  /**
   * Expansive Jakarta ground plane with subtle urban coordinate grid
   */
  buildGroundAndGrid() {
    const groundGeo = new THREE.PlaneGeometry(3600, 3600);
    groundGeo.rotateX(-Math.PI / 2);
    this.groundMat = new THREE.MeshStandardMaterial({
      color: 0x283344,
      roughness: 0.92,
      metalness: 0.08
    });
    const ground = new THREE.Mesh(groundGeo, this.groundMat);
    ground.receiveShadow = true;
    ground.position.y = -0.15;
    this.proceduralGroup.add(ground);

    this.gridHelper = new THREE.GridHelper(3000, 150, 0x3e4c63, 0x334155);
    this.gridHelper.material.transparent = true;
    this.gridHelper.material.opacity = 0.4;
    this.gridHelper.position.y = -0.08;
    this.proceduralGroup.add(this.gridHelper);
  }

  /**
   * Helper to place a flat road or canal strip between two (x, z) points
   */
  addLinearStrip(x1, z1, x2, z2, width, y, material, receiveShadow = true) {
    const dx = x2 - x1;
    const dz = z2 - z1;
    const len = Math.sqrt(dx * dx + dz * dz);
    const angle = Math.atan2(dx, dz);

    const geo = new THREE.PlaneGeometry(width, len);
    geo.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.set((x1 + x2) / 2, y, (z1 + z2) / 2);
    mesh.rotation.y = angle;
    mesh.receiveShadow = receiveShadow;
    this.proceduralGroup.add(mesh);
    return mesh;
  }

  /**
   * Dukuh Atas Bridge over the real OpenStreetMap Kanal Banjir Barat waterway
   * (All rivers, canals, and reservoirs are rendered directly from real OSM polygons/ways in renderOSMLayers)
   */
  buildWaterways() {
    const bankMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 });

    // 1. Jembatan Dukuh Atas (Sudirman - Thamrin melintasi Kanal Banjir Barat pada [-3, 100])
    const dukuhAtasBridge = new THREE.Mesh(new THREE.BoxGeometry(36, 1.2, 26), bankMat);
    dukuhAtasBridge.position.set(-3, 0.35, 100);
    this.proceduralGroup.add(dukuhAtasBridge);

    // 2. Jembatan Tomang (Jl. Tomang Raya melintasi Kanal Banjir Barat ke arah Kyai Caringin)
    const tomangBridge = new THREE.Mesh(new THREE.BoxGeometry(32, 1.2, 24), bankMat);
    tomangBridge.position.set(-247.5, 0.35, -305.5);
    tomangBridge.rotation.y = -0.58;
    this.proceduralGroup.add(tomangBridge);

    // 3. Jembatan Roxy (Jl. Kyai Tapa melintasi Kanal Banjir Barat ke arah Hasyim Ashari)
    const roxyBridge = new THREE.Mesh(new THREE.BoxGeometry(32, 1.2, 22), bankMat);
    roxyBridge.position.set(-320.5, 0.35, -408.0);
    roxyBridge.rotation.y = 0.05;
    this.proceduralGroup.add(roxyBridge);

    // 4. Jembatan Tanjung Duren Raya (Melintasi Kali Grogol di depan Podomoro City)
    const tjDurenBridge = new THREE.Mesh(new THREE.BoxGeometry(22, 1.2, 16), bankMat);
    tjDurenBridge.position.set(-452.0, 0.35, -266.0);
    tjDurenBridge.rotation.y = -0.12;
    this.proceduralGroup.add(tjDurenBridge);

    // 5. Jembatan Kemanggisan Utama (Melintasi Kali Grogol di Kemanggisan)
    const kemanggisanBridge = new THREE.Mesh(new THREE.BoxGeometry(20, 1.2, 15), bankMat);
    kemanggisanBridge.position.set(-412.0, 0.35, -23.0);
    kemanggisanBridge.rotation.y = -0.25;
    this.proceduralGroup.add(kemanggisanBridge);

    // 6. Jembatan Tol Tangerang (Melintasi aliran kali di Tomang Barat / Kebon Jeruk)
    const tolTangerangBridge = new THREE.Mesh(new THREE.BoxGeometry(24, 1.2, 28), bankMat);
    tolTangerangBridge.position.set(-482.0, 0.40, -212.0);
    tolTangerangBridge.rotation.y = -0.28;
    this.proceduralGroup.add(tolTangerangBridge);

    // 7. Jembatan Jatibaru / Jembatan Tinggi (Tanah Abang ke Petamburan melintasi KBB)
    const jatibaruBridge = new THREE.Mesh(new THREE.BoxGeometry(28, 1.2, 18), bankMat);
    jatibaruBridge.position.set(-178.0, 0.35, -140.0);
    jatibaruBridge.rotation.y = 0.42;
    this.proceduralGroup.add(jatibaruBridge);

    // 8. Jembatan Pejompongan / Penjernihan 1 (Karet Bivak ke Palmerah melintasi KBB)
    const pejomponganBridge = new THREE.Mesh(new THREE.BoxGeometry(26, 1.2, 18), bankMat);
    pejomponganBridge.position.set(-142.0, 0.35, 89.0);
    pejomponganBridge.rotation.y = -0.15;
    this.proceduralGroup.add(pejomponganBridge);

    // 9. Jembatan Rangka Baja Kereta Api KRL Karet (Melintasi KBB)
    const krlBridgeMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8, roughness: 0.3 });
    const krlKbbBridge = new THREE.Mesh(new THREE.BoxGeometry(16, 1.6, 26), krlBridgeMat);
    krlKbbBridge.position.set(-136.0, 0.45, 62.0);
    krlKbbBridge.rotation.y = -0.65;
    this.proceduralGroup.add(krlKbbBridge);
  }

  /**
   * Helper to build a circular roundabout road ring with inner/outer curbs and lane markings
   */
  addRoundaboutRing(cx, cz, innerR, outerR, roadMat, swMat) {
    const group = new THREE.Group();
    group.position.set(cx, 0, cz);

    // Asphalt ring road around the fountain
    const roadGeo = new THREE.RingGeometry(innerR, outerR, 64);
    roadGeo.rotateX(-Math.PI / 2);
    const roadMesh = new THREE.Mesh(roadGeo, roadMat);
    roadMesh.position.y = 0.065;
    roadMesh.receiveShadow = true;
    group.add(roadMesh);

    // Outer sidewalk ring
    const outerSwGeo = new THREE.RingGeometry(outerR, outerR + 3.5, 64);
    outerSwGeo.rotateX(-Math.PI / 2);
    const outerSw = new THREE.Mesh(outerSwGeo, swMat);
    outerSw.position.y = 0.14;
    outerSw.receiveShadow = true;
    group.add(outerSw);

    // Inner curb ring hugging the fountain pool wall
    const innerCurbGeo = new THREE.RingGeometry(Math.max(1, innerR - 1.2), innerR, 64);
    innerCurbGeo.rotateX(-Math.PI / 2);
    const innerCurb = new THREE.Mesh(
      innerCurbGeo,
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.6 })
    );
    innerCurb.position.y = 0.16;
    group.add(innerCurb);

    // Circular lane markings inside the roundabout
    const laneMat = new THREE.MeshBasicMaterial({ color: 0xe2e8f0, side: THREE.DoubleSide });
    [0.35, 0.68].forEach((t) => {
      const r = innerR + (outerR - innerR) * t;
      const laneGeo = new THREE.RingGeometry(r - 0.18, r + 0.18, 64);
      laneGeo.rotateX(-Math.PI / 2);
      const lane = new THREE.Mesh(laneGeo, laneMat);
      lane.position.y = 0.08;
      group.add(lane);
    });

    this.proceduralGroup.add(group);
  }

  /**
   * Roundabout rings, Karet Flyover structure, and street lighting synced to real OpenStreetMap roads
   * (All street and highway ribbons are rendered directly from jakarta_osm.json in renderOSMLayers)
   */
  buildRoadNetwork() {
    const roundaboutAsphaltMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.78,
      metalness: 0.12
    });
    const swMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createSidewalkTexture(),
      roughness: 0.8
    });

    // 1. Tiga Bundaran Utama pada Koordinat Metrik Asli Peta Jakarta:
    //    - Bundaran HI (0, 0)
    //    - Bundaran Patung Kuda (-3, -215)
    //    - Bundaran Senayan (-316, 478)
    this.addRoundaboutRing(0, 0, 14.0, 23.0, roundaboutAsphaltMat, swMat);
    this.addRoundaboutRing(-3, -215, 14.5, 22.0, roundaboutAsphaltMat, swMat);
    this.addRoundaboutRing(-316, 478, 18.5, 26.0, roundaboutAsphaltMat, swMat);

    // 2. Struktur Jembatan Layang Flyover Karet (Jl. Prof. Dr. Satrio melintasi Jl. Jend. Sudirman di utara Sampoerna Strategic)
    const satrioFlyover = new THREE.Mesh(
      new THREE.BoxGeometry(110, 1.2, 10),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 })
    );
    satrioFlyover.position.set(-82, 5.8, 294);
    satrioFlyover.rotation.y = -0.32;
    satrioFlyover.castShadow = true;
    this.proceduralGroup.add(satrioFlyover);

    // 3. Struktur Flyover Simpang Susun Tomang (Tol Dalam Kota & Tol Tangerang di atas Simpang Tomang)
    const tomangFlyoverGroup = new THREE.Group();
    const elevatedHighwayMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 });
    const pierMat = new THREE.MeshStandardMaterial({ color: 0x64748b });

    const tomangDeck = new THREE.Mesh(new THREE.BoxGeometry(110, 1.2, 11), elevatedHighwayMat);
    tomangDeck.position.set(-418, 5.4, -224);
    tomangDeck.rotation.y = -0.46;
    tomangDeck.castShadow = true;
    tomangFlyoverGroup.add(tomangDeck);

    const tomangRamp = new THREE.Mesh(new THREE.BoxGeometry(65, 1.0, 7.5), elevatedHighwayMat);
    tomangRamp.position.set(-440, 4.8, -222);
    tomangRamp.rotation.y = -0.25;
    tomangRamp.castShadow = true;
    tomangFlyoverGroup.add(tomangRamp);

    [-35, 0, 35].forEach((offset) => {
      const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 5.4, 8), pierMat);
      pier.position.set(-418 + offset * Math.sin(-0.46), 2.7, -224 + offset * Math.cos(-0.46));
      tomangFlyoverGroup.add(pier);
    });
    this.proceduralGroup.add(tomangFlyoverGroup);

    // 4. Struktur Flyover Simpang Grogol (Jembatan Layang Grogol)
    const grogolFlyoverGroup = new THREE.Group();
    const grogolDeck = new THREE.Mesh(new THREE.BoxGeometry(85, 1.2, 10), elevatedHighwayMat);
    grogolDeck.position.set(-484, 5.0, -403);
    grogolDeck.rotation.y = -0.28;
    grogolDeck.castShadow = true;
    grogolFlyoverGroup.add(grogolDeck);

    [-25, 25].forEach((offset) => {
      const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.3, 5.0, 8), pierMat);
      pier.position.set(-484 + offset * Math.sin(-0.28), 2.5, -403 + offset * Math.cos(-0.28));
      grogolFlyoverGroup.add(pier);
    });
    this.proceduralGroup.add(grogolFlyoverGroup);

    // 5. Lampu Jalan PJU sepanjang koridor lurus Jl. M.H. Thamrin & Jl. Medan Merdeka Barat
    for (let z = -325; z <= 85; z += 38) {
      if (Math.abs(z) < 32 || Math.abs(z + 215) < 28) continue;
      this.createStreetLamp(-16.5, z, true);
      this.createStreetLamp(16.5, z, false);
    }

    // 6. Lampu Jalan PJU sepanjang koridor Jalan Letjen S. Parman (Grogol -> Tomang -> Slipi)
    for (let z = -390; z <= 70; z += 45) {
      const t = (z + 390) / 460;
      const x = -482 + t * 152;
      this.createStreetLamp(x - 7.5, z, true);
      this.createStreetLamp(x + 7.5, z, false);
    }

    // 7. Lampu Jalan PJU Koridor Penghubung: Tanah Abang, Palmerah, Tomang, dan Tanjung Duren
    for (let z = -140; z <= -70; z += 35) {
      this.createStreetLamp(-125, z, true);
    }
    for (let z = 220; z <= 290; z += 35) {
      this.createStreetLamp(-285, z, true);
    }
    for (let x = -380; x <= -260; x += 40) {
      this.createStreetLamp(x, -305, false);
    }
    for (let z = -320; z <= -240; z += 40) {
      this.createStreetLamp(-495, z, true);
    }
  }

  /**
   * Jalur Kereta Api Layang (Elevated Railway Viaduct) sesuai kurva asli OpenStreetMap:
   * Juanda (105, -388) -> Stasiun Gambir (107, -259) -> Stasiun Gondangdia (140, -108)
   * -> Stasiun Cikini (188, 65) -> Manggarai (225, 175)
   */
  buildElevatedRailway() {
    const viaductMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.65 });
    const railTrackMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.7 });
    const pierMat = new THREE.MeshStandardMaterial({ color: 0x64748b });

    const points = [
      [105, -388],
      [95, -330],
      [99, -290],
      [107, -259], // Stasiun Gambir
      [116, -233],
      [132, -147],
      [140, -108], // Stasiun Gondangdia
      [164, -22],
      [188, 65],   // Stasiun Cikini
      [225, 175]   // Menuju Manggarai
    ];

    for (let i = 0; i < points.length - 1; i++) {
      const [x1, z1] = points[i];
      const [x2, z2] = points[i + 1];
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.sqrt(dx * dx + dz * dz);
      const angle = Math.atan2(dx, dz);

      const deck = new THREE.Mesh(new THREE.BoxGeometry(7.2, 1.8, len + 1.5), viaductMat);
      deck.position.set((x1 + x2) / 2, 9.5, (z1 + z2) / 2);
      deck.rotation.y = angle;
      deck.castShadow = true;
      this.proceduralGroup.add(deck);

      const track = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.3, len + 1.5), railTrackMat);
      track.position.set((x1 + x2) / 2, 10.55, (z1 + z2) / 2);
      track.rotation.y = angle;
      this.proceduralGroup.add(track);

      const steps = Math.max(1, Math.floor(len / 26));
      for (let s = 0; s < steps; s++) {
        const t = (s + 0.5) / steps;
        const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.3, 9.5, 8), pierMat);
        pier.position.set(x1 + dx * t, 4.75, z1 + dz * t);
        this.proceduralGroup.add(pier);
      }
    }

    // Atap Stasiun Layang Gondangdia & Cikini pada koordinat OSM aslinya
    [
      { x: 140, z: -108, rot: 0.22 },
      { x: 188, z: 65, rot: 0.28 }
    ].forEach((st) => {
      const stRoof = new THREE.Mesh(
        new THREE.BoxGeometry(13, 3.5, 40),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 })
      );
      stRoof.position.set(st.x, 12.2, st.z);
      stRoof.rotation.y = st.rot;
      stRoof.castShadow = true;
      this.proceduralGroup.add(stRoof);
    });
  }

  /**
   * Tahap 2: Jaringan Jalan Arteri & Jalur Rel Kereta Api Jakarta Pusat Bagian Timur
   * 1. Boulevard Ganda Jl. Benyamin Sueb Kemayoran (Dual Carriageway + 18m Green Runway Median)
   * 2. Bundaran Ondel-Ondel & Akses Jl. HBR Motik / Jl. Angkasa / Jl. Garuda
   * 3. Koridor Rel Kereta Api Ganda Senen - Kemayoran (Double Track Railway At-Grade + LAA Catenary)
   * 4. Simpang Lima Senen Interchange & Flyover Senen (h=5.6m)
   * 5. Aliran Kali Ciliwung Kwitang – Passer Baroe – Gunung Sahari & Jembatan Kanal
   * 6. Koridor Jl. Cikini Raya & Menteng Timur (Akses TIM) & Jl. Diponegoro
   * 7. Sistem Pencahayaan PJU & Penghijauan Palem Raja Boulevard Kemayoran
   */
  buildCentralJakartaEastCorridor() {
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.78,
      metalness: 0.12
    });
    const sidewalkMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createSidewalkTexture(),
      roughness: 0.8
    });
    const medianGrassMat = new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.85
    });
    const flyoverMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.65
    });
    const pierMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.7
    });
    const railBallastMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.95
    });
    const sleeperMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.8
    });
    const steelRailMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.88,
      roughness: 0.25
    });
    const catenaryMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      metalness: 0.75,
      roughness: 0.35
    });
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0891b2,
      roughness: 0.1,
      metalness: 0.75
    });
    const canalWallMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.85
    });
    const bridgeMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.8
    });
    const foliageMat = new THREE.MeshStandardMaterial({
      color: 0x166534,
      roughness: 0.85
    });
    const trunkMat = new THREE.MeshStandardMaterial({
      color: 0x543d2b,
      roughness: 0.9
    });

    // Helper: Build a multi-lane road segment with sidewalks and optional median
    const buildEastRoad = (x1, z1, x2, z2, roadWidth = 18, hasMedian = false, medianWidth = 2.4) => {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      if (len < 0.1) return;
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;

      // Asphalt
      const road = new THREE.Mesh(new THREE.BoxGeometry(roadWidth, 0.22, len + 0.3), roadMat);
      road.position.set(mx, 0.11, mz);
      road.rotation.y = angle;
      road.receiveShadow = true;
      this.proceduralGroup.add(road);

      // Sidewalks
      const swWidth = 3.2;
      [-1, 1].forEach((dir) => {
        const sw = new THREE.Mesh(new THREE.BoxGeometry(swWidth, 0.35, len + 0.3), sidewalkMat);
        const perpX = Math.cos(angle) * (roadWidth * 0.5 + swWidth * 0.5) * dir;
        const perpZ = -Math.sin(angle) * (roadWidth * 0.5 + swWidth * 0.5) * dir;
        sw.position.set(mx + perpX, 0.175, mz + perpZ);
        sw.rotation.y = angle;
        sw.receiveShadow = true;
        this.proceduralGroup.add(sw);
      });

      // Median
      if (hasMedian && roadWidth >= 16) {
        const median = new THREE.Mesh(new THREE.BoxGeometry(medianWidth, 0.32, len), medianGrassMat);
        median.position.set(mx, 0.16, mz);
        median.rotation.y = angle;
        median.receiveShadow = true;
        this.proceduralGroup.add(median);
      }
    };

    // =========================================================================
    // 1. Benyamin Sueb Dual Carriageway & Kemayoran Boulevard Network
    // =========================================================================
    // Sumbu acuan Benyamin Sueb menghubungkan Simpang Angkasa (Z=-380),
    // Bundaran Ondel-Ondel (Z=-517), dan JIExpo Kemayoran (Z=-691.4).
    const westCarriagewayPoints = [
      [254.0, -380.0],
      [254.0, -500.0],
      [252.0, -534.0],
      [280.0, -620.0],
      [298.0, -691.4],
      [306.0, -755.0]
    ];

    const eastCarriagewayPoints = [
      [280.0, -380.0],
      [280.0, -500.0],
      [282.0, -534.0],
      [306.0, -620.0],
      [321.0, -691.4],
      [330.0, -755.0]
    ];

    for (let i = 0; i < westCarriagewayPoints.length - 1; i++) {
      const [x1, z1] = westCarriagewayPoints[i];
      const [x2, z2] = westCarriagewayPoints[i + 1];
      buildEastRoad(x1, z1, x2, z2, 13.5, false);
    }

    for (let i = 0; i < eastCarriagewayPoints.length - 1; i++) {
      const [x1, z1] = eastCarriagewayPoints[i];
      const [x2, z2] = eastCarriagewayPoints[i + 1];
      buildEastRoad(x1, z1, x2, z2, 13.5, false);
    }

    // Median Rumput Hijau Taman Eks-Runway Kemayoran (Width ~18m)
    // Segmen 1: Selatan Bundaran Ondel-Ondel
    const median1Len = 110;
    const median1 = new THREE.Mesh(new THREE.BoxGeometry(18, 0.28, median1Len), medianGrassMat);
    median1.position.set(267.2, 0.14, -440);
    this.proceduralGroup.add(median1);

    // Segmen 2: Utara Bundaran Ondel-Ondel s.d. Dekat JIExpo
    const median2Len = 110;
    const median2 = new THREE.Mesh(new THREE.BoxGeometry(18, 0.28, median2Len), medianGrassMat);
    median2.position.set(286.0, 0.14, -600);
    median2.rotation.y = 0.22;
    this.proceduralGroup.add(median2);

    // Bundaran Ondel-Ondel Road Ring
    this.addRoundaboutRing(267.2, -517.0, 16.0, 24.5, roadMat, sidewalkMat);

    // Koridor Silang Kemayoran:
    // A. Jl. HBR Motik (Barat - Timur melintasi Bundaran Ondel-Ondel)
    buildEastRoad(185.0, -517.0, 242.0, -517.0, 15, false);
    buildEastRoad(292.0, -517.0, 360.0, -517.0, 15, false);

    // B. Jl. Angkasa (Penghubung Gunung Sahari ke Kemayoran)
    buildEastRoad(175.0, -380.0, 350.0, -380.0, 18, true, 2.0);

    // C. Jl. Garuda (Kemayoran ke arah Senen barat)
    buildEastRoad(190.0, -340.0, 267.2, -340.0, 14, false);

    // =========================================================================
    // 2. Double Track Railway Senen - Kemayoran (At-Grade & LAA Catenary)
    // =========================================================================
    const railWaypoints = [
      [285.0, -80.0],
      [290.0, -170.0],
      [299.7, -288.7],
      [292.0, -380.0],
      [278.0, -480.0],
      [255.0, -670.0]
    ];

    for (let i = 0; i < railWaypoints.length - 1; i++) {
      const [x1, z1] = railWaypoints[i];
      const [x2, z2] = railWaypoints[i + 1];
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;

      // Gravel Ballast Bed
      const ballast = new THREE.Mesh(new THREE.BoxGeometry(7.6, 0.24, len + 0.4), railBallastMat);
      ballast.position.set(mx, 0.12, mz);
      ballast.rotation.y = angle;
      ballast.receiveShadow = true;
      this.proceduralGroup.add(ballast);

      // Sleepers (Bantalan Rel Beton)
      const sleeperCount = Math.max(2, Math.floor(len / 3.8));
      for (let s = 0; s < sleeperCount; s++) {
        const t = (s + 0.5) / sleeperCount;
        const sx = x1 + dx * t;
        const sz = z1 + dz * t;
        const sleeper = new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.16, 0.5), sleeperMat);
        sleeper.position.set(sx, 0.22, sz);
        sleeper.rotation.y = angle;
        this.proceduralGroup.add(sleeper);
      }

      // 4 Steel Rails (2 Rel per Jalur Ganda)
      [-2.4, -1.0, 1.0, 2.4].forEach((railOffset) => {
        const rail = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.24, len + 0.4), steelRailMat);
        const perpX = Math.cos(angle) * railOffset;
        const perpZ = -Math.sin(angle) * railOffset;
        rail.position.set(mx + perpX, 0.32, mz + perpZ);
        rail.rotation.y = angle;
        this.proceduralGroup.add(rail);
      });

      // LAA Portal Catenary Poles (every ~35 meters)
      const catenaryCount = Math.max(1, Math.floor(len / 35.0));
      for (let c = 0; c < catenaryCount; c++) {
        const t = (c + 0.5) / catenaryCount;
        const cx = x1 + dx * t;
        const cz = z1 + dz * t;
        const catGroup = new THREE.Group();
        catGroup.position.set(cx, 0, cz);
        catGroup.rotation.y = angle;

        [-4.2, 4.2].forEach((px) => {
          const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 7.2, 6), catenaryMat);
          mast.position.set(px, 3.6, 0);
          catGroup.add(mast);
        });

        const crossbeam = new THREE.Mesh(new THREE.BoxGeometry(8.8, 0.35, 0.35), catenaryMat);
        crossbeam.position.set(0, 6.9, 0);
        catGroup.add(crossbeam);

        [-1.7, 1.7].forEach((wx) => {
          const wire = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, len / catenaryCount), catenaryMat);
          wire.position.set(wx, 5.8, 0);
          catGroup.add(wire);
        });

        this.proceduralGroup.add(catGroup);
      }
    }

    // =========================================================================
    // 3. Simpang Lima Senen Interchange & Flyover Senen (h=5.6m)
    // =========================================================================
    // Lima Ruas Jalan Arteri yang Memusat ke Simpang Lima Senen [260.2, -275.9]:
    // A. Jl. Senen Raya / Dr. Wahidin (Arah Pejambon / Banteng)
    buildEastRoad(260.2, -275.9, 155.0, -315.0, 18, true, 2.2);

    // B. Jl. Kwitang Raya / Prapatan (Arah Tugu Tani / Monas)
    buildEastRoad(260.2, -275.9, 115.0, -180.0, 18, true, 2.2);

    // C. Jl. Kramat Raya (Arah Salemba / UI)
    buildEastRoad(260.2, -275.9, 272.0, -70.0, 20, true, 2.5);

    // D. Jl. Letjen Suprapto (Arah Cempaka Putih / Galur ke Timur)
    buildEastRoad(260.2, -275.9, 440.0, -275.9, 22, true, 2.5);

    // E. Jl. Bungur Besar Raya (Arah Stasiun Senen & Kemayoran Selatan)
    buildEastRoad(260.2, -275.9, 299.7, -288.7, 15, false);
    buildEastRoad(299.7, -288.7, 298.0, -380.0, 15, false);

    // Flyover Simpang Lima Senen:
    // Jembatan layang melengkung dari Kwitang [180, -235] melewati atas Simpang Senen [260.2, -275.9]
    // dan jalur rel menuju Jl. Letjen Suprapto [338, -275.9].
    const flyoverPoints = [
      [180.0, -235.0, 1.2],
      [220.0, -258.0, 5.6],
      [260.2, -275.9, 5.8],
      [298.0, -275.9, 5.6],
      [338.0, -275.9, 1.2]
    ];

    for (let i = 0; i < flyoverPoints.length - 1; i++) {
      const [x1, z1, y1] = flyoverPoints[i];
      const [x2, z2, y2] = flyoverPoints[i + 1];
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;
      const my = (y1 + y2) * 0.5;

      const deck = new THREE.Mesh(new THREE.BoxGeometry(9.5, 1.4, len + 0.4), flyoverMat);
      deck.position.set(mx, my, mz);
      deck.rotation.y = angle;
      deck.castShadow = true;
      this.proceduralGroup.add(deck);

      [-4.5, 4.5].forEach((sideOffset) => {
        const parapet = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.0, len + 0.4), flyoverMat);
        const perpX = Math.cos(angle) * sideOffset;
        const perpZ = -Math.sin(angle) * sideOffset;
        parapet.position.set(mx + perpX, my + 0.9, mz + perpZ);
        parapet.rotation.y = angle;
        this.proceduralGroup.add(parapet);
      });

      if (my >= 4.0) {
        const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, my, 8), pierMat);
        pier.position.set(mx, my * 0.5, mz);
        pier.castShadow = true;
        this.proceduralGroup.add(pier);
      }
    }

    // =========================================================================
    // 4. Kali Ciliwung Kwitang - Passer Baroe - Gunung Sahari & Jembatan Kanal
    // =========================================================================
    const riverWaypoints = [
      [205.0, -80.0],
      [195.0, -180.0],
      [165.0, -280.0],
      [147.4, -424.8],
      [165.0, -530.0],
      [170.0, -750.0]
    ];

    for (let i = 0; i < riverWaypoints.length - 1; i++) {
      const [x1, z1] = riverWaypoints[i];
      const [x2, z2] = riverWaypoints[i + 1];
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;

      const water = new THREE.Mesh(new THREE.PlaneGeometry(14.0, len + 0.4), waterMat);
      water.rotation.x = -Math.PI / 2;
      water.rotation.z = -angle;
      water.position.set(mx, 0.04, mz);
      this.proceduralGroup.add(water);

      [-7.3, 7.3].forEach((sideOffset) => {
        const wall = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.45, len + 0.4), canalWallMat);
        const perpX = Math.cos(angle) * sideOffset;
        const perpZ = -Math.sin(angle) * sideOffset;
        wall.position.set(mx + perpX, 0.22, mz + perpZ);
        wall.rotation.y = angle;
        this.proceduralGroup.add(wall);
      });
    }

    // Jembatan-Jembatan Penyeberangan Sungai:
    // A. Jembatan Kwitang
    const kwitangBridge = new THREE.Mesh(new THREE.BoxGeometry(20, 1.2, 18), bridgeMat);
    kwitangBridge.position.set(195.0, 0.38, -195.0);
    kwitangBridge.rotation.y = -0.15;
    this.proceduralGroup.add(kwitangBridge);

    // B. Jembatan Pejambon / Wahidin
    const pejambonBridge = new THREE.Mesh(new THREE.BoxGeometry(22, 1.2, 18), bridgeMat);
    pejambonBridge.position.set(165.0, 0.38, -280.0);
    pejambonBridge.rotation.y = -0.25;
    this.proceduralGroup.add(pejambonBridge);

    // C. Jembatan Pintu Air Passer Baroe (di depan Landmark #45)
    const passerBaroeBridge = new THREE.Mesh(new THREE.BoxGeometry(18, 1.2, 16), bridgeMat);
    passerBaroeBridge.position.set(147.4, 0.38, -415.0);
    passerBaroeBridge.rotation.y = -0.12;
    this.proceduralGroup.add(passerBaroeBridge);

    // D. Jembatan Angkasa / Gunung Sahari
    const angkasaBridge = new THREE.Mesh(new THREE.BoxGeometry(22, 1.2, 18), bridgeMat);
    angkasaBridge.position.set(167.0, 0.38, -380.0);
    this.proceduralGroup.add(angkasaBridge);

    // =========================================================================
    // 5. Koridor Jalan Cikini Raya & Menteng Timur (Akses TIM)
    // =========================================================================
    buildEastRoad(140.0, -10.0, 180.0, -45.0, 14, false);
    buildEastRoad(180.0, -45.0, 217.9, -77.4, 14, false);
    buildEastRoad(217.9, -77.4, 195.0, -170.0, 14, false);

    // Jl. Diponegoro (Koneksi Megaria / Metropole ke UI Salemba / RSCM)
    buildEastRoad(135.0, 10.0, 280.0, 10.0, 18, true, 2.0);

    // =========================================================================
    // 6. Sistem Pencahayaan PJU & Penghijauan Palem Raja Boulevard Kemayoran
    // =========================================================================
    for (let z = -380; z >= -745; z -= 35) {
      const t = (z - (-380)) / (-755 - (-380));
      const xCenter = 267.2 + t * (318.0 - 267.2);

      const nearRoundabout = Math.abs(z - (-517.0)) < 26;
      const nearJIExpo = Math.abs(z - (-691.4)) < 22;

      if (!nearRoundabout && !nearJIExpo) {
        this.createStreetLamp(xCenter - 1.2, z, false);
        this.createStreetLamp(xCenter + 1.2, z, true);
        this.createTree(xCenter, z + 12, foliageMat, trunkMat, 1.25);
      }

      this.createStreetLamp(xCenter - 18.0, z, true);
      this.createStreetLamp(xCenter + 18.0, z, false);
    }

    for (let z = -260; z <= -85; z += 35) {
      const t = (z - (-260)) / (-85 - (-260));
      const kramatX = 260.2 + t * (272.0 - 260.2);
      this.createStreetLamp(kramatX - 11.0, z, true);
      this.createStreetLamp(kramatX + 11.0, z, false);
    }

    for (let x = 135; x <= 245; x += 35) {
      const t = (x - 135) / (245 - 135);
      const kwitangZ = -190 + t * (-270 - (-190));
      this.createStreetLamp(x, kwitangZ - 10.0, true);
      this.createStreetLamp(x, kwitangZ + 10.0, false);
    }
  }

  /**
   * Tahap 3: Infill Urban Fabric, Distrik Komersial & Permukiman Jakarta Pusat Timur
   * 1. Kawasan Kemayoran: Menara Apartemen Wisma Atlet & Ruko Niaga Grand Palace
   * 2. Kawasan Senen & Kramat: Blok Grosir Pasar Senen (Blok III-VI), Ruko Kwitang, Sentra Kuliner Kramat & RSPAD Gatot Soebroto
   * 3. Kawasan Cikini & Salemba: Kampus IKJ, Gedung Metropole XXI (Megaria Art-Deco 1951), FKUI Salemba & RSCM
   * 4. Kawasan Passer Baroe & Sawah Besar: Arkade Toko Neoklasik, Gedung Kesenian Jakarta (GKJ 1821), & Kantor Filateli
   */
  buildCentralJakartaEastInfillAndDistricts() {
    const whiteWallMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.45 });
    const creamWallMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.55 });
    const greyWallMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.65 });
    const terracottaRoofMat = new THREE.MeshStandardMaterial({ color: 0x7c2d12, roughness: 0.75 });
    const darkRoofMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const brickMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.85 });
    const glassBlueMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.82,
      roughness: 0.18
    });
    const glassModernMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      metalness: 0.75,
      roughness: 0.25
    });
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });
    const timberMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.7 });
    const redCrossMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.3 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.85, roughness: 0.2 });

    // =========================================================================
    // 1. KAWASAN KEMAYORAN: WISMA ATLET & RUKO NIAGA GRAND PALACE
    // =========================================================================
    // Menara Kembar Wisma Atlet Kemayoran (Tower C1, C2, D10)
    const kemayoranTowers = [
      { x: 335, z: -635, w: 22, d: 20, h: 84 },
      { x: 345, z: -575, w: 24, d: 20, h: 92 },
      { x: 350, z: -675, w: 22, d: 22, h: 76 },
      { x: 232, z: -630, w: 20, d: 18, h: 72 }
    ];

    kemayoranTowers.forEach((t) => {
      const towerGroup = new THREE.Group();
      towerGroup.position.set(t.x, 0, t.z);

      const tower = new THREE.Mesh(new THREE.BoxGeometry(t.w, t.h, t.d), whiteWallMat);
      tower.position.y = t.h * 0.5;
      tower.castShadow = true;
      tower.receiveShadow = true;
      towerGroup.add(tower);

      const floors = Math.floor(t.h / 7.5);
      for (let f = 1; f < floors; f++) {
        const band = new THREE.Mesh(new THREE.BoxGeometry(t.w + 0.4, 1.2, t.d + 0.4), glassModernMat);
        band.position.y = f * 7.5;
        towerGroup.add(band);
      }

      const crown = new THREE.Mesh(new THREE.BoxGeometry(t.w * 0.7, 4.5, t.d * 0.7), greyWallMat);
      crown.position.y = t.h + 2.25;
      crown.castShadow = true;
      towerGroup.add(crown);

      this.proceduralGroup.add(towerGroup);
    });

    // Ruko Komersial Grand Palace Kemayoran (5 lantai, 18m)
    for (let z = -430; z >= -490; z -= 16) {
      const rukoWest = new THREE.Mesh(new THREE.BoxGeometry(16, 18, 12), creamWallMat);
      rukoWest.position.set(232, 9, z);
      rukoWest.castShadow = true;
      this.proceduralGroup.add(rukoWest);

      const rukoEast = new THREE.Mesh(new THREE.BoxGeometry(16, 18, 12), greyWallMat);
      rukoEast.position.set(302, 9, z);
      rukoEast.castShadow = true;
      this.proceduralGroup.add(rukoEast);
    }

    // Lapangan Hijau Golf Kemayoran (Springhill RTH)
    const golfPark = new THREE.Mesh(new THREE.BoxGeometry(60, 0.15, 80), grassMat);
    golfPark.position.set(360, 0.075, -460);
    golfPark.receiveShadow = true;
    this.proceduralGroup.add(golfPark);

    // Danau Golf Kemayoran
    const golfPond = new THREE.Mesh(
      new THREE.CylinderGeometry(14, 14, 0.2, 24),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.15, metalness: 0.8 })
    );
    golfPond.position.set(360, 0.12, -460);
    this.proceduralGroup.add(golfPond);

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      this.createTree(360 + Math.cos(angle) * 22, -460 + Math.sin(angle) * 30, grassMat, timberMat, 1.15);
    }

    // =========================================================================
    // 2. KAWASAN SENEN & KRAMAT: BLOK GROSIR, KWITANG & RSPAD
    // =========================================================================
    // Blok Grosir Pasar Senen Blok III & IV (Podium masif 6 lantai)
    const senenBlok3 = new THREE.Mesh(new THREE.BoxGeometry(32, 24, 28), greyWallMat);
    senenBlok3.position.set(230, 12, -295);
    senenBlok3.castShadow = true;
    this.proceduralGroup.add(senenBlok3);

    [6, 14].forEach((fy) => {
      const band = new THREE.Mesh(new THREE.BoxGeometry(32.4, 2.0, 28.4), glassBlueMat);
      band.position.set(230, fy, -295);
      this.proceduralGroup.add(band);
    });

    const senenBlok5 = new THREE.Mesh(new THREE.BoxGeometry(26, 20, 32), creamWallMat);
    senenBlok5.position.set(260, 10, -328);
    senenBlok5.castShadow = true;
    this.proceduralGroup.add(senenBlok5);

    // Ruko Sentra Buku & Percetakan Kwitang (3-4 lantai, 12m-15m)
    for (let x = 145; x <= 205; x += 18) {
      const rukoKwitang = new THREE.Mesh(new THREE.BoxGeometry(14, 13, 14), whiteWallMat);
      rukoKwitang.position.set(x, 6.5, -200);
      rukoKwitang.castShadow = true;
      this.proceduralGroup.add(rukoKwitang);

      const rukoRoof = new THREE.Mesh(new THREE.BoxGeometry(14.4, 1.2, 14.4), terracottaRoofMat);
      rukoRoof.position.set(x, 13.5, -200);
      this.proceduralGroup.add(rukoRoof);
    }

    // Deretan Kantor & Sentra Kuliner Nasi Kapau Kramat Raya
    for (let z = -140; z >= -220; z -= 22) {
      const rukoKramat = new THREE.Mesh(new THREE.BoxGeometry(18, 16, 16), creamWallMat);
      rukoKramat.position.set(288, 8, z);
      rukoKramat.castShadow = true;
      this.proceduralGroup.add(rukoKramat);
    }

    // Kompleks Rumah Sakit Pusat Angkatan Darat (RSPAD Gatot Soebroto)
    const rspadGroup = new THREE.Group();
    rspadGroup.position.set(185, 0, -330);

    const rspadMain = new THREE.Mesh(new THREE.BoxGeometry(34, 30, 22), whiteWallMat);
    rspadMain.position.y = 15;
    rspadMain.castShadow = true;
    rspadGroup.add(rspadMain);

    [8, 16, 24].forEach((hy) => {
      const glassStrip = new THREE.Mesh(new THREE.BoxGeometry(34.2, 2.2, 22.2), glassModernMat);
      glassStrip.position.y = hy;
      rspadGroup.add(glassStrip);
    });

    const crossV = new THREE.Mesh(new THREE.BoxGeometry(1.2, 4.2, 0.4), redCrossMat);
    crossV.position.set(0, 26, 11.2);
    rspadGroup.add(crossV);

    const crossH = new THREE.Mesh(new THREE.BoxGeometry(4.2, 1.2, 0.4), redCrossMat);
    crossH.position.set(0, 26, 11.2);
    rspadGroup.add(crossH);

    const helipad = new THREE.Mesh(new THREE.CylinderGeometry(5.5, 5.5, 0.3, 20), greyWallMat);
    helipad.position.set(0, 30.2, 0);
    rspadGroup.add(helipad);

    this.proceduralGroup.add(rspadGroup);

    // =========================================================================
    // 3. KAWASAN CIKINI & SALEMBA: KAMPUS IKJ, METROPOLE XXI & FKUI / RSCM
    // =========================================================================
    const ikjGroup = new THREE.Group();
    ikjGroup.position.set(240, 0, -95);

    const ikjBuilding = new THREE.Mesh(new THREE.BoxGeometry(26, 14, 20), brickMat);
    ikjBuilding.position.y = 7;
    ikjBuilding.castShadow = true;
    ikjGroup.add(ikjBuilding);

    const ikjRoof = new THREE.Mesh(new THREE.BoxGeometry(27, 1.4, 21), darkRoofMat);
    ikjRoof.position.y = 14.7;
    ikjGroup.add(ikjRoof);
    this.proceduralGroup.add(ikjGroup);

    // Bioskop Metropole XXI (Megaria 1951)
    const metropoleGroup = new THREE.Group();
    metropoleGroup.position.set(165, 0, -25);

    const metropoleBase = new THREE.Mesh(new THREE.BoxGeometry(24, 15, 26), whiteWallMat);
    metropoleBase.position.y = 7.5;
    metropoleBase.castShadow = true;
    metropoleGroup.add(metropoleBase);

    const metropoleTower = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.8, 12, 16), whiteWallMat);
    metropoleTower.position.set(8, 21, 8);
    metropoleTower.castShadow = true;
    metropoleGroup.add(metropoleTower);

    const metropoleDome = new THREE.Mesh(new THREE.SphereGeometry(2.5, 16, 12), goldMat);
    metropoleDome.position.set(8, 28, 8);
    metropoleGroup.add(metropoleDome);

    const canopy = new THREE.Mesh(new THREE.BoxGeometry(16, 1.2, 6), greyWallMat);
    canopy.position.set(0, 5, 14);
    metropoleGroup.add(canopy);
    this.proceduralGroup.add(metropoleGroup);

    // Kompleks FKUI & RSCM Salemba
    const fkuiGroup = new THREE.Group();
    fkuiGroup.position.set(285, 0, 15);

    const fkuiHeritage = new THREE.Mesh(new THREE.BoxGeometry(32, 12, 18), creamWallMat);
    fkuiHeritage.position.y = 6;
    fkuiHeritage.castShadow = true;
    fkuiGroup.add(fkuiHeritage);

    const fkuiRoof = new THREE.Mesh(new THREE.ConeGeometry(22, 7, 4), terracottaRoofMat);
    fkuiRoof.rotation.y = Math.PI / 4;
    fkuiRoof.position.y = 15.5;
    fkuiGroup.add(fkuiRoof);

    const rscmTower = new THREE.Mesh(new THREE.BoxGeometry(24, 45, 20), whiteWallMat);
    rscmTower.position.set(25, 22.5, -8);
    rscmTower.castShadow = true;
    fkuiGroup.add(rscmTower);

    [12, 24, 36].forEach((gy) => {
      const glassBand = new THREE.Mesh(new THREE.BoxGeometry(24.3, 2.4, 20.3), glassModernMat);
      glassBand.position.set(25, gy, -8);
      fkuiGroup.add(glassBand);
    });

    this.proceduralGroup.add(fkuiGroup);

    // =========================================================================
    // 4. KAWASAN PASSER BAROE & SAWAH BESAR: ARKADE, GKJ & FILATELI
    // =========================================================================
    // Gedung Kesenian Jakarta (GKJ 1821)
    const gkjGroup = new THREE.Group();
    gkjGroup.position.set(168, 0, -420);

    const gkjHall = new THREE.Mesh(new THREE.BoxGeometry(22, 12, 28), whiteWallMat);
    gkjHall.position.y = 6;
    gkjHall.castShadow = true;
    gkjGroup.add(gkjHall);

    const pediment = new THREE.Mesh(new THREE.ConeGeometry(12, 4.5, 4), whiteWallMat);
    pediment.rotation.y = Math.PI / 4;
    pediment.position.set(-11.5, 14, 0);
    gkjGroup.add(pediment);

    [-7, -2.5, 2.5, 7].forEach((colZ) => {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 10, 12), whiteWallMat);
      col.position.set(-11.5, 5, colZ);
      gkjGroup.add(col);
    });
    this.proceduralGroup.add(gkjGroup);

    // Gedung Filateli / Kantor Pos Batavia
    const filateliGroup = new THREE.Group();
    filateliGroup.position.set(128, 0, -410);

    const filateliMain = new THREE.Mesh(new THREE.BoxGeometry(18, 12, 18), creamWallMat);
    filateliMain.position.y = 6;
    filateliMain.castShadow = true;
    filateliGroup.add(filateliMain);

    const filateliRoof = new THREE.Mesh(new THREE.BoxGeometry(19, 4, 19), terracottaRoofMat);
    filateliRoof.position.y = 14;
    filateliGroup.add(filateliRoof);
    this.proceduralGroup.add(filateliGroup);

    // Arkade Ruko Neoklasik Passer Baroe
    for (let z = -440; z >= -520; z -= 18) {
      const rukoWest = new THREE.Mesh(new THREE.BoxGeometry(12, 11, 14), creamWallMat);
      rukoWest.position.set(134, 5.5, z);
      rukoWest.castShadow = true;
      this.proceduralGroup.add(rukoWest);

      const rukoEast = new THREE.Mesh(new THREE.BoxGeometry(12, 11, 14), whiteWallMat);
      rukoEast.position.set(158, 5.5, z);
      rukoEast.castShadow = true;
      this.proceduralGroup.add(rukoEast);

      const arcadeCanopy = new THREE.Mesh(new THREE.BoxGeometry(3, 0.4, 14), greyWallMat);
      arcadeCanopy.position.set(141.5, 3.5, z);
      this.proceduralGroup.add(arcadeCanopy);
    }
  }

  /**
   * Tahap 2: Jaringan Jalan Arteri & Jalur Layang MRT Elevated Jakarta Selatan
   * - Koridor Jl. Sisingamangaraja & Jl. Panglima Polim (Bundaran Senayan -> CSW -> Blok M)
   * - Poros Barat-Timur Jl. Kyai Maja & Jl. Trunojoyo (Barito -> CSW -> Mabes Polri / Wolter Monginsidi)
   * - Koridor Niaga Jl. Melawai Raya & Little Tokyo
   * - Koridor Penghubung Senopati - Suryo
   * - Portal Transisi Bawah Tanah & Viaduk Beton Rel Layang MRT Jakarta (Elevated Guideway)
   * - Jembatan Layang Raksasa Koridor 13 TransJakarta (Elevated Busway Ciledug - Tendean h=21.5m)
   * - PJU Street Lamps & Pohon Peneduh Boulevard Kebayoran Baru
   */
  buildSouthJakartaCorridor() {
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.8,
      metalness: 0.1
    });
    const sidewalkMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createSidewalkTexture(),
      roughness: 0.8
    });
    const medianGrassMat = new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.85
    });
    const viaductMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.65
    });
    const railTrackMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.8,
      roughness: 0.2
    });
    const pierMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.6
    });
    const tjFlyoverMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.6
    });
    const tjBarrierMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.5,
      roughness: 0.3
    });

    // Helper: Build a multi-lane road segment with side sidewalks and optional green median
    const buildRoadSegment = (x1, z1, x2, z2, roadWidth = 22, hasMedian = true) => {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;

      // Road Asphalt
      const road = new THREE.Mesh(new THREE.BoxGeometry(roadWidth, 0.25, len + 0.4), roadMat);
      road.position.set(mx, 0.125, mz);
      road.rotation.y = angle;
      road.receiveShadow = true;
      this.proceduralGroup.add(road);

      // Left & Right Sidewalks
      const swWidth = 3.6;
      [-1, 1].forEach((dir) => {
        const sw = new THREE.Mesh(new THREE.BoxGeometry(swWidth, 0.4, len + 0.4), sidewalkMat);
        const perpX = Math.cos(angle) * (roadWidth * 0.5 + swWidth * 0.5) * dir;
        const perpZ = -Math.sin(angle) * (roadWidth * 0.5 + swWidth * 0.5) * dir;
        sw.position.set(mx + perpX, 0.2, mz + perpZ);
        sw.rotation.y = angle;
        sw.receiveShadow = true;
        this.proceduralGroup.add(sw);
      });

      // Center Green Median Island
      if (hasMedian && roadWidth >= 18) {
        const medianW = 2.4;
        const median = new THREE.Mesh(new THREE.BoxGeometry(medianW, 0.38, len), medianGrassMat);
        median.position.set(mx, 0.2, mz);
        median.rotation.y = angle;
        median.receiveShadow = true;
        this.proceduralGroup.add(median);
      }
    };

    // 1. Koridor Utama Poros Sisingamangaraja & Panglima Polim
    // Waypoints from Bundaran Senayan to Blok M & Panglima Polim Selatan
    const mainCorridorPoints = [
      [-316, 478],     // Bundaran Senayan
      [-322, 515],     // Portal Transisi MRT
      [-330, 560],     // Masjid Al-Azhar
      [-339.1, 599.0], // Sekretariat ASEAN
      [-347.5, 631.6], // Simpang CSW ASEAN
      [-351.8, 660.0], // Kejaksaan Agung & M Bloc
      [-357.4, 702.5], // Stasiun MRT Blok M BCA & Plaza Blok M
      [-364.0, 750.0]  // Menuju Barito / Fatmawati
    ];

    for (let i = 0; i < mainCorridorPoints.length - 1; i++) {
      const [x1, z1] = mainCorridorPoints[i];
      const [x2, z2] = mainCorridorPoints[i + 1];
      buildRoadSegment(x1, z1, x2, z2, 22, true);
    }

    // 2. Poros Barat-Timur Simpang CSW: Jl. Kyai Maja & Jl. Trunojoyo
    const cswCrossPoints = [
      [-450, 631.6],   // Barito / Taman Ayodya Barat
      [-347.5, 631.6], // CSW Hub Center
      [-210, 631.6]    // Depan Mabes Polri & Wolter Monginsidi
    ];
    for (let i = 0; i < cswCrossPoints.length - 1; i++) {
      const [x1, z1] = cswCrossPoints[i];
      const [x2, z2] = cswCrossPoints[i + 1];
      buildRoadSegment(x1, z1, x2, z2, 18, false);
    }

    // 3. Koridor Niaga Jl. Melawai Raya
    buildRoadSegment(-364, 706.8, -270, 706.8, 15, false);

    // Jalan Falatehan / Sultan Hasanuddin (Sisi Timur M Bloc)
    buildRoadSegment(-303.8, 650, -303.8, 715, 14, false);

    // 4. Koridor Diagonal Senopati - Suryo (Konektor SCBD ke Kebayoran Baru)
    buildRoadSegment(-325, 525, -210, 505, 14, false); // Senopati Barat
    buildRoadSegment(-210, 505, -170, 555, 14, false); // Menuju Jl. Suryo

    // 5. Viaduk Jalur Rel Layang MRT Jakarta (Elevated Guideway)
    // A. Portal Transisi Keluar Terowongan Senayan (Underground Portal)
    const portalGroup = new THREE.Group();
    portalGroup.position.set(-319, 0, 498);
    portalGroup.rotation.y = -0.16;

    const portalBase = new THREE.Mesh(new THREE.BoxGeometry(9.6, 1.2, 24), viaductMat);
    portalBase.position.set(0, 0.6, 0);
    portalGroup.add(portalBase);

    // U-shaped retaining portal walls rising toward elevated level
    const wallL = new THREE.Mesh(new THREE.BoxGeometry(1.0, 3.2, 24), viaductMat);
    wallL.position.set(-4.5, 2.2, 0);
    portalGroup.add(wallL);

    const wallR = new THREE.Mesh(new THREE.BoxGeometry(1.0, 3.2, 24), viaductMat);
    wallR.position.set(4.5, 2.2, 0);
    portalGroup.add(wallR);

    // Portal arch header
    const portalArch = new THREE.Mesh(new THREE.BoxGeometry(10, 1.4, 2.4), viaductMat);
    portalArch.position.set(0, 4.2, -10);
    portalGroup.add(portalArch);

    this.proceduralGroup.add(portalGroup);

    // B. Elevated Box Girder Deck & Dual Tracks from Portal to Blok M
    const mrtDeckHeight = 11.5;
    const mrtPoints = [
      [-321, 510, 4.0],  // Ramp up from portal
      [-324, 532, 8.5],  // Incline
      [-328, 555, mrtDeckHeight], // Reaches elevated level at Al-Azhar
      [-334, 580, mrtDeckHeight],
      [-339.1, 599.0, mrtDeckHeight], // Sekretariat ASEAN
      [-347.5, 631.6, mrtDeckHeight], // CSW Stasiun ASEAN
      [-351.8, 660.0, mrtDeckHeight], // Kejagung / M Bloc
      [-355.0, 685.0, mrtDeckHeight], // Taman Martha Tiahahu
      [-357.4, 702.5, mrtDeckHeight], // Stasiun Blok M BCA
      [-364.0, 750.0, mrtDeckHeight]  // Selatan Blok M
    ];

    for (let i = 0; i < mrtPoints.length - 1; i++) {
      const [x1, z1, y1] = mrtPoints[i];
      const [x2, z2, y2] = mrtPoints[i + 1];
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;
      const my = (y1 + y2) * 0.5;

      // Skip the segment inside CSW / Blok M stations since station models have their own platforms
      const isInsideCSW = Math.hypot(mx - (-347.5), mz - 631.6) < 18;
      const isInsideBlokM = Math.hypot(mx - (-357.4), mz - 702.5) < 18;

      if (!isInsideCSW && !isInsideBlokM) {
        // Concrete Box Girder Deck
        const deck = new THREE.Mesh(new THREE.BoxGeometry(8.2, 1.6, len + 0.8), viaductMat);
        deck.position.set(mx, my, mz);
        deck.rotation.y = angle;
        deck.castShadow = true;
        this.proceduralGroup.add(deck);

        // Side Parapet Sound-barrier Walls (Grey concrete)
        [-3.8, 3.8].forEach((wx) => {
          const parapet = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.2, len + 0.8), viaductMat);
          const perpX = Math.cos(angle) * wx;
          const perpZ = -Math.sin(angle) * wx;
          parapet.position.set(mx + perpX, my + 1.2, mz + perpZ);
          parapet.rotation.y = angle;
          this.proceduralGroup.add(parapet);
        });

        // Dual Steel Rail Tracks
        [-1.6, 1.6].forEach((tx) => {
          const track = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.25, len + 0.8), railTrackMat);
          const perpX = Math.cos(angle) * tx;
          const perpZ = -Math.sin(angle) * tx;
          track.position.set(mx + perpX, my + 0.9, mz + perpZ);
          track.rotation.y = angle;
          this.proceduralGroup.add(track);
        });

        // Concrete Single-Pier Columns (Tiang Pilar Tunggal di Median)
        if (my >= 6.0) {
          const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.45, my, 12), pierMat);
          pier.position.set(mx, my * 0.5, mz);
          pier.castShadow = true;
          this.proceduralGroup.add(pier);

          // Hammerhead Cap
          const cap = new THREE.Mesh(new THREE.BoxGeometry(7.2, 1.1, 2.5), pierMat);
          cap.position.set(mx, my - 0.7, mz);
          cap.rotation.y = angle;
          this.proceduralGroup.add(cap);
        }
      }
    }

    // 6. Jembatan Layang Raksasa Koridor 13 TransJakarta (Elevated Busway Ciledug - Tendean)
    // High Flyover at y = 21.5m crossing West to East above CSW
    const tjFlyoverGroup = new THREE.Group();
    const tjDeckLen = 240;
    const tjDeck = new THREE.Mesh(new THREE.BoxGeometry(tjDeckLen, 2.2, 7.8), tjFlyoverMat);
    tjDeck.position.set(-335, 21.5, 631.6);
    tjDeck.castShadow = true;
    tjFlyoverGroup.add(tjDeck);

    // Blue Transjakarta Parapets on both sides
    [-3.6, 3.6].forEach((sideZ) => {
      const barrier = new THREE.Mesh(new THREE.BoxGeometry(tjDeckLen, 1.1, 0.4), tjBarrierMat);
      barrier.position.set(-335, 22.8, 631.6 + sideZ);
      tjFlyoverGroup.add(barrier);
    });

    // High Piers for Koridor 13 (every 38 units, avoiding CSW center)
    [-430, -392, -300, -260, -225].forEach((px) => {
      const highPier = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.6, 21.5, 12), pierMat);
      highPier.position.set(px, 10.75, 631.6);
      highPier.castShadow = true;
      tjFlyoverGroup.add(highPier);
    });
    this.proceduralGroup.add(tjFlyoverGroup);

    // 7. Sistem Penerangan PJU (Street Lamps) Koridor Sisingamangaraja & CSW
    for (let z = 485; z <= 745; z += 35) {
      // Interpolate X along Sisingamangaraja / Panglima Polim
      const t = (z - 485) / 260;
      const x = -316 + t * (-364 - (-316));
      this.createStreetLamp(x - 14.5, z, true);
      this.createStreetLamp(x + 14.5, z, false);
    }

    // PJU along Trunojoyo - Kyai Maja
    for (let x = -430; x <= -230; x += 40) {
      if (Math.abs(x - (-347.5)) < 24) continue;
      this.createStreetLamp(x, 631.6 - 11.5, true);
      this.createStreetLamp(x, 631.6 + 11.5, false);
    }

    // 8. Pohon Peneduh Boulevard Kebayoran Baru
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.85 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x543d2b, roughness: 0.9 });
    for (let z = 490; z <= 740; z += 22) {
      const t = (z - 490) / 250;
      const x = -316 + t * (-364 - (-316));
      this.createTree(x - 15.5, z, foliageMat, trunkMat, 1.1);
      this.createTree(x + 15.5, z, foliageMat, trunkMat, 1.1);
    }

    // =========================================================================
    // 9. Jalan Tol Lingkar Luar Jakarta (Tol JORR TB Simatupang)
    // =========================================================================
    const highwayMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.72,
      metalness: 0.15
    });
    const jerseyBarrierMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.6
    });

    const jorrWaypoints = [
      [-490.0, 1035.0], // Barat Lebak Bulus
      [-382.0, 1045.0], // Simpang Fatmawati
      [-330.0, 1060.0], // Cilandak / South Quarter
      [-260.0, 1062.0], // Citos / Antasari Interchange
      [-140.0, 1065.0], // Ampera / Cilandak KKO
      [0.0, 1065.0],    // Ragunan / Warung Jati
      [120.0, 1065.0]   // TB Simatupang Timur / Tanjung Barat
    ];

    for (let i = 0; i < jorrWaypoints.length - 1; i++) {
      const [x1, z1] = jorrWaypoints[i];
      const [x2, z2] = jorrWaypoints[i + 1];
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;

      // Tol JORR 6-Lane Expressway Bed (Width 24m)
      const tollRoad = new THREE.Mesh(new THREE.BoxGeometry(24, 0.45, len + 0.4), highwayMat);
      tollRoad.position.set(mx, 0.225, mz);
      tollRoad.rotation.y = angle;
      tollRoad.receiveShadow = true;
      this.proceduralGroup.add(tollRoad);

      // Central Concrete Jersey Barrier Median
      const medianBarrier = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.9, len + 0.4), jerseyBarrierMat);
      medianBarrier.position.set(mx, 0.65, mz);
      medianBarrier.rotation.y = angle;
      this.proceduralGroup.add(medianBarrier);

      // Outer Guardrails / Concrete Parapets
      [-11.6, 11.6].forEach((dir) => {
        const outerBarrier = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, len + 0.4), jerseyBarrierMat);
        const perpX = Math.cos(angle) * dir;
        const perpZ = -Math.sin(angle) * dir;
        outerBarrier.position.set(mx + perpX, 0.6, mz + perpZ);
        outerBarrier.rotation.y = angle;
        this.proceduralGroup.add(outerBarrier);
      });

      // Parallel Frontage Arterial Road TB Simatupang (North & South 2-Lane Frontage)
      [-17.5, 17.5].forEach((sideOffset) => {
        const frontage = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.25, len + 0.4), roadMat);
        const perpX = Math.cos(angle) * sideOffset;
        const perpZ = -Math.sin(angle) * sideOffset;
        frontage.position.set(mx + perpX, 0.125, mz + perpZ);
        frontage.rotation.y = angle;
        frontage.receiveShadow = true;
        this.proceduralGroup.add(frontage);
      });
    }

    // =========================================================================
    // 10. Simpang Susun Pancoran & Koridor MT Haryono - Gatot Subroto Timur
    // =========================================================================
    // Arteri Gatot Subroto Timur -> Pancoran -> MT Haryono
    const gatsuEastPoints = [
      [135.0, 435.0], // Simpang Kuningan
      [185.0, 465.0], // Depan Bidakara / Smesco
      [248.0, 492.0], // Simpang Pancoran / Patung Dirgantara
      [318.0, 506.0], // Menara Saidah / Stasiun Cawang
      [370.0, 515.0]  // Menuju Cawang Interchange
    ];

    for (let i = 0; i < gatsuEastPoints.length - 1; i++) {
      const [x1, z1] = gatsuEastPoints[i];
      const [x2, z2] = gatsuEastPoints[i + 1];
      buildRoadSegment(x1, z1, x2, z2, 24, true);
    }

    // Flyover Simpang Susun Pancoran (Elevated Overpass Barat - Timur, Y=7.8m)
    const pancoranFlyoverGroup = new THREE.Group();
    const pancoranOverpassLen = 160;
    const pancoranDeck = new THREE.Mesh(new THREE.BoxGeometry(14, 1.4, pancoranOverpassLen), viaductMat);
    pancoranDeck.position.set(248, 7.8, 492);
    pancoranDeck.rotation.y = 0.38; // Aligning with Gatot Subroto / MT Haryono angle
    pancoranDeck.castShadow = true;
    pancoranFlyoverGroup.add(pancoranDeck);

    // Parapets
    [-6.6, 6.6].forEach((px) => {
      const parapet = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.1, pancoranOverpassLen), jerseyBarrierMat);
      parapet.position.set(px, 0.9, 0);
      pancoranDeck.add(parapet);
    });

    // Support Piers
    [-60, -20, 20, 60].forEach((pz) => {
      const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.6, 7.8, 12), pierMat);
      const angle = 0.38;
      pier.position.set(248 + Math.sin(angle) * pz, 3.9, 492 + Math.cos(angle) * pz);
      pier.castShadow = true;
      pancoranFlyoverGroup.add(pier);
    });
    this.proceduralGroup.add(pancoranFlyoverGroup);

    // Flyover Pancoran Utara - Selatan (Jl. Prof. Dr. Soepomo -> Jl. Pasar Minggu, Y=6.4m)
    const soepomoFlyover = new THREE.Mesh(new THREE.BoxGeometry(11, 1.2, 130), viaductMat);
    soepomoFlyover.position.set(248, 6.4, 492);
    soepomoFlyover.castShadow = true;
    this.proceduralGroup.add(soepomoFlyover);

    // Jalan Pasar Minggu & Dr. Soepomo At-Grade
    buildRoadSegment(248, 390, 248, 460, 18, false);
    buildRoadSegment(248, 525, 248, 620, 18, false);

    // =========================================================================
    // 11. Perpanjangan Viaduk Layang MRT Fase 1 (Fatmawati - Lebak Bulus)
    // =========================================================================
    const mrtSouthExtensionPoints = [
      [-364.0, 750.0, 11.5],  // Selatan Blok M
      [-368.0, 815.0, 12.0],  // Menuju Stasiun Blok A
      [-372.0, 885.0, 12.5],  // Menuju Stasiun Haji Nawi
      [-377.0, 960.0, 13.0],  // Menuju Stasiun Cipete Raya
      [-382.0, 1035.0, 14.0], // Stasiun MRT Fatmawati Indomaret
      [-425.0, 1060.0, 13.0], // Belokan R.A. Kartini
      [-465.0, 1075.0, 12.0]  // Stasiun Akhir & Dipo Lebak Bulus Grab
    ];

    for (let i = 0; i < mrtSouthExtensionPoints.length - 1; i++) {
      const [x1, z1, y1] = mrtSouthExtensionPoints[i];
      const [x2, z2, y2] = mrtSouthExtensionPoints[i + 1];
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;
      const my = (y1 + y2) * 0.5;

      // Skip segment inside Stasiun Fatmawati (has its own detailed station mesh)
      const isInsideFatmawati = Math.hypot(mx - (-382.0), mz - 1035.0) < 22;

      if (!isInsideFatmawati) {
        // Concrete Box Girder Deck
        const deck = new THREE.Mesh(new THREE.BoxGeometry(8.2, 1.6, len + 0.8), viaductMat);
        deck.position.set(mx, my, mz);
        deck.rotation.y = angle;
        deck.castShadow = true;
        this.proceduralGroup.add(deck);

        // Parapet walls
        [-3.8, 3.8].forEach((wx) => {
          const parapet = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.2, len + 0.8), viaductMat);
          const perpX = Math.cos(angle) * wx;
          const perpZ = -Math.sin(angle) * wx;
          parapet.position.set(mx + perpX, my + 1.2, mz + perpZ);
          parapet.rotation.y = angle;
          this.proceduralGroup.add(parapet);
        });

        // Dual Steel Rail Tracks
        [-1.6, 1.6].forEach((tx) => {
          const track = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.25, len + 0.8), railTrackMat);
          const perpX = Math.cos(angle) * tx;
          const perpZ = -Math.sin(angle) * tx;
          track.position.set(mx + perpX, my + 0.9, mz + perpZ);
          track.rotation.y = angle;
          this.proceduralGroup.add(track);
        });

        // Single-Pier Hammerhead Column
        const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.5, my, 12), pierMat);
        pier.position.set(mx, my * 0.5, mz);
        pier.castShadow = true;
        this.proceduralGroup.add(pier);

        const cap = new THREE.Mesh(new THREE.BoxGeometry(7.2, 1.2, 2.5), pierMat);
        cap.position.set(mx, my - 0.7, mz);
        cap.rotation.y = angle;
        this.proceduralGroup.add(cap);
      }
    }

    // Jalan RS Fatmawati Arteri Bawah (Blok M -> Fatmawati)
    for (let i = 0; i < mrtSouthExtensionPoints.length - 2; i++) {
      const [x1, z1] = mrtSouthExtensionPoints[i];
      const [x2, z2] = mrtSouthExtensionPoints[i + 1];
      buildRoadSegment(x1, z1, x2, z2, 20, false);
    }

    // =========================================================================
    // 12. Viaduk Layang Jalur LRT Jabodebek (MT Haryono - Pancoran - Kuningan)
    // =========================================================================
    const lrtViaductMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const lrtRedMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.45 });

    const lrtWaypoints = [
      [360.0, 515.0, 15.5],  // Cawang Barat
      [318.0, 506.0, 15.5],  // Menara Saidah
      [248.0, 492.0, 15.5],  // Stasiun LRT Pancoran
      [185.0, 465.0, 15.5],  // Smesco / Bidakara
      [145.0, 440.0, 16.0],  // Tikungan Kuningan Timur
      [138.0, 350.0, 15.5],  // Rasuna Said Selatan
      [135.0, 260.0, 15.5],  // Rasuna Said Tengah
      [135.0, 160.0, 15.5]   // Menuju Setiabudi / Dukuh Atas
    ];

    for (let i = 0; i < lrtWaypoints.length - 1; i++) {
      const [x1, z1, y1] = lrtWaypoints[i];
      const [x2, z2, y2] = lrtWaypoints[i + 1];
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;
      const my = (y1 + y2) * 0.5;

      // U-Girder LRT Deck (Width 6.8m)
      const lrtDeck = new THREE.Mesh(new THREE.BoxGeometry(6.8, 1.4, len + 0.6), lrtViaductMat);
      lrtDeck.position.set(mx, my, mz);
      lrtDeck.rotation.y = angle;
      lrtDeck.castShadow = true;
      this.proceduralGroup.add(lrtDeck);

      // Red Accent Flange along LRT Viaduct Edge
      [-3.3, 3.3].forEach((rx) => {
        const accent = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.9, len + 0.6), lrtRedMat);
        const perpX = Math.cos(angle) * rx;
        const perpZ = -Math.sin(angle) * rx;
        accent.position.set(mx + perpX, my + 0.8, mz + perpZ);
        accent.rotation.y = angle;
        this.proceduralGroup.add(accent);
      });

      // Dual LRT Tracks
      [-1.3, 1.3].forEach((tx) => {
        const track = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.2, len + 0.6), railTrackMat);
        const perpX = Math.cos(angle) * tx;
        const perpZ = -Math.sin(angle) * tx;
        track.position.set(mx + perpX, my + 0.8, mz + perpZ);
        track.rotation.y = angle;
        this.proceduralGroup.add(track);
      });

      // Slender Cylindrical Piers for Elevated LRT Viaduct
      const lrtPier = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.3, my, 12), pierMat);
      lrtPier.position.set(mx, my * 0.5, mz);
      lrtPier.castShadow = true;
      this.proceduralGroup.add(lrtPier);
    }

    // =========================================================================
    // 13. Koridor Arteri Mampang Prapatan & Underpass Mampang-Kuningan
    // =========================================================================
    // Arteri Mampang Prapatan ke arah Warung Buncit
    buildRoadSegment(135.0, 435.0, 125.0, 580.0, 22, true);
    buildRoadSegment(125.0, 580.0, 115.0, 740.0, 20, true);

    // Underpass Mampang-Kuningan (Y=-3.5m Depressed Tunnel Cutting Under Gatot Subroto)
    const underpassGroup = new THREE.Group();
    const underpassLen = 130;
    const underpassRoad = new THREE.Mesh(new THREE.BoxGeometry(14, 0.3, underpassLen), roadMat);
    underpassRoad.position.set(135, -2.5, 435);
    underpassRoad.receiveShadow = true;
    underpassGroup.add(underpassRoad);

    // Retaining Portal Walls
    [-7.2, 7.2].forEach((wx) => {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(0.8, 4.0, underpassLen), viaductMat);
      wall.position.set(135 + wx, -0.6, 435);
      underpassGroup.add(wall);
    });
    this.proceduralGroup.add(underpassGroup);

    // Flyover Non-Tol Pangeran Antasari (Melintasi Kemang Village, Y=9.0m)
    const antasariFlyoverGroup = new THREE.Group();
    const antasariLen = 220;
    const antasariDeck = new THREE.Mesh(new THREE.BoxGeometry(11, 1.2, antasariLen), viaductMat);
    antasariDeck.position.set(-85, 9.0, 780);
    antasariDeck.castShadow = true;
    antasariFlyoverGroup.add(antasariDeck);

    [-70, -20, 30, 80].forEach((py) => {
      const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 9.0, 10), pierMat);
      pier.position.set(-85, 4.5, 780 + py);
      antasariFlyoverGroup.add(pier);
    });
    this.proceduralGroup.add(antasariFlyoverGroup);

    // Arteri Bawah Jl. Pangeran Antasari & Kemang Raya
    buildRoadSegment(-85, 680, -85, 900, 16, false);
    buildRoadSegment(-105, 740, -50, 820, 14, false); // Kemang Raya cross

    // =========================================================================
    // 14. Boulevard Jl. Metro Pondok Indah & Bundaran PIM
    // =========================================================================
    const pondokIndahPoints = [
      [-460.0, 700.0], // Dari arah Kebayoran Lama / Gandaria
      [-490.0, 775.0], // Utara PIM
      [-510.0, 845.0], // Depan PIM 1 & PIM 2 (di bawah Skywalk)
      [-515.0, 915.0], // Bundaran Pondok Indah
      [-520.0, 990.0]  // Menyambung ke Simpang Tol Simatupang Barat
    ];

    for (let i = 0; i < pondokIndahPoints.length - 1; i++) {
      const [x1, z1] = pondokIndahPoints[i];
      const [x2, z2] = pondokIndahPoints[i + 1];
      buildRoadSegment(x1, z1, x2, z2, 24, true);
    }

    // Bundaran Pondok Indah Road Ring
    this.addRoundaboutRing(-515.0, 915.0, 15.0, 23.5, roadMat, sidewalkMat);

    // =========================================================================
    // 15. Sistem PJU & Penghijauan Palem Koridor Selatan (Pancoran, Simatupang, Pondok Indah)
    // =========================================================================
    // PJU & Palem sepanjang Tol JORR TB Simatupang
    for (let x = -480; x <= 100; x += 45) {
      this.createStreetLamp(x, 1065 - 13.5, true);
      this.createStreetLamp(x, 1065 + 13.5, false);
    }

    // PJU & Palem sepanjang Metro Pondok Indah
    for (let z = 720; z <= 980; z += 32) {
      const t = (z - 720) / 260;
      const x = -460 + t * (-520 - (-460));
      this.createStreetLamp(x - 14.0, z, true);
      this.createStreetLamp(x + 14.0, z, false);
      this.createTree(x - 15.5, z, foliageMat, trunkMat, 1.2);
      this.createTree(x + 15.5, z, foliageMat, trunkMat, 1.2);
    }

    // PJU sepanjang Gatot Subroto Timur & Pancoran
    for (let x = 145; x <= 350; x += 38) {
      const t = (x - 145) / 205;
      const z = 440 + t * (515 - 440);
      this.createStreetLamp(x, z - 13.5, true);
      this.createStreetLamp(x, z + 13.5, false);
    }
  }

  /**
   * Tahap 3: Procedural Infill, Permukiman Garden City & Ruang Terbuka Hijau (RTH)
   * - Taman Literasi Martha Christina Tiahahu (Paviliun Melingkar, Kolam Refleksi, Amphitheater)
   * - Taman Kota Ayodya & Danau Barito (Danau Sirkular, Air Mancur, Jembatan Kayu, Tabebuya) & Hutan Kota Taman Langsat
   * - Kompleks Markas Besar Kepolisian RI (Mabes Polri) & Kementerian ATR/BPN
   * - Kompleks Komersial Blok M Square & Masjid Rooftop Nurul Iman
   * - 4 Klaster Permukiman Tropis Garden City Kebayoran Baru (Pakubuwono, Raden Patah, Barito, Petogogan)
   */
  buildSouthJakartaInfillAndParks() {
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.15,
      metalness: 0.8,
      transparent: true,
      opacity: 0.82
    });
    const stonePathMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.7 });
    const timberMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.65 });
    const whiteWallMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const terracottaRoofMat = new THREE.MeshStandardMaterial({ color: 0x7c2d12, roughness: 0.75 });
    const institutionalGreyMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.85, roughness: 0.2 });

    // =========================================================================
    // 1. TAMAN LITERASI MARTHA CHRISTINA TIAHAHU ([-348.9, 0, 688.3])
    // =========================================================================
    const tiahahuGroup = new THREE.Group();
    tiahahuGroup.position.set(-348.9, 0, 688.3);

    // Circular Park Lawn Base
    const tiahahuLawn = new THREE.Mesh(new THREE.CylinderGeometry(18, 18.5, 0.35, 32), grassMat);
    tiahahuLawn.position.y = 0.175;
    tiahahuLawn.receiveShadow = true;
    tiahahuGroup.add(tiahahuLawn);

    // Curved Reading Pavilion (Paviliun Melengkung Kayu & Kaca)
    const pavilionCurveGeo = new THREE.TorusGeometry(11, 2.2, 8, 24, Math.PI * 1.1);
    pavilionCurveGeo.rotateX(Math.PI / 2);
    const pavilionRoof = new THREE.Mesh(pavilionCurveGeo, whiteWallMat);
    pavilionRoof.position.set(0, 4.2, 0);
    pavilionRoof.castShadow = true;
    tiahahuGroup.add(pavilionRoof);

    // Pavilion Colonnade Pillars
    for (let i = 0; i <= 8; i++) {
      const angle = (i / 8) * Math.PI * 1.1;
      const colX = Math.cos(angle) * 11;
      const colZ = Math.sin(angle) * 11;
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 3.8, 8), timberMat);
      col.position.set(colX, 2.1, colZ);
      col.castShadow = true;
      tiahahuGroup.add(col);
    }

    // Shallow Reflection Pool (Kolam Refleksi Dangkal)
    const pool = new THREE.Mesh(new THREE.CylinderGeometry(5.5, 5.5, 0.38, 24), waterMat);
    pool.position.set(0, 0.2, 0);
    tiahahuGroup.add(pool);

    // Stepped Amphitheater (Plaza Duduk Kayu Komunal)
    for (let s = 1; s <= 3; s++) {
      const step = new THREE.Mesh(
        new THREE.CylinderGeometry(s * 2.4, s * 2.4, 0.3, 16, 1, false, Math.PI * 1.2, Math.PI * 0.7),
        timberMat
      );
      step.position.set(0, s * 0.3, 0);
      step.receiveShadow = true;
      tiahahuGroup.add(step);
    }

    // Perimeter Trees
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const tx = Math.cos(angle) * 15.5;
      const tz = Math.sin(angle) * 15.5;
      this.createTree(-348.9 + tx, 688.3 + tz, new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.85 }), timberMat, 0.95);
    }
    this.proceduralGroup.add(tiahahuGroup);

    // =========================================================================
    // 2. TAMAN KOTA AYODYA & DANAU BARITO ([-416.6, 0, 695.4])
    // =========================================================================
    const ayodyaGroup = new THREE.Group();
    ayodyaGroup.position.set(-416.6, 0, 695.4);

    // Circular Park Base
    const ayodyaLawn = new THREE.Mesh(new THREE.CylinderGeometry(25, 25.5, 0.35, 32), grassMat);
    ayodyaLawn.position.y = 0.175;
    ayodyaLawn.receiveShadow = true;
    ayodyaGroup.add(ayodyaLawn);

    // Circular Artificial Lake Basin (Danau Ayodya)
    const lake = new THREE.Mesh(new THREE.CylinderGeometry(14, 14, 0.45, 32), waterMat);
    lake.position.y = 0.23;
    ayodyaGroup.add(lake);

    // Central Fountain Jet Spray
    const fountainJet = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.4, 4.5, 8),
      new THREE.MeshBasicMaterial({ color: 0xbae6fd, transparent: true, opacity: 0.85 })
    );
    fountainJet.position.set(0, 2.5, 0);
    ayodyaGroup.add(fountainJet);

    // Curved Wooden Footbridge (Jembatan Titian Lengkung)
    const bridgeGeo = new THREE.BoxGeometry(3.2, 0.35, 15);
    const bridge = new THREE.Mesh(bridgeGeo, timberMat);
    bridge.position.set(4.5, 1.2, 0);
    bridge.rotation.x = 0.08;
    bridge.castShadow = true;
    ayodyaGroup.add(bridge);

    // Jogging Track Stone Ring
    const trackRing = new THREE.Mesh(new THREE.TorusGeometry(17, 1.4, 6, 32), stonePathMat);
    trackRing.rotation.x = Math.PI / 2;
    trackRing.position.y = 0.22;
    ayodyaGroup.add(trackRing);

    // Ring of Tabebuya Trees (Golden & Pink Blossoms)
    const tabebuyaGold = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.75 });
    const tabebuyaPink = new THREE.MeshStandardMaterial({ color: 0xf472b6, roughness: 0.75 });
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      const tx = Math.cos(angle) * 21;
      const tz = Math.sin(angle) * 21;
      const tabMat = i % 2 === 0 ? tabebuyaGold : tabebuyaPink;
      this.createTree(-416.6 + tx, 695.4 + tz, tabMat, timberMat, 1.15);
    }
    this.proceduralGroup.add(ayodyaGroup);

    // Connected Hutan Kota Taman Langsat (Sisi Utara Ayodya [-416.6, 0, 660])
    for (let lx = -435; lx <= -395; lx += 15) {
      for (let lz = 645; lz <= 670; lz += 12) {
        if (Math.hypot(lx - (-416.6), lz - 695.4) > 26) {
          this.createTree(lx, lz, new THREE.MeshStandardMaterial({ color: 0x14532d, roughness: 0.9 }), timberMat, 1.3);
        }
      }
    }

    // =========================================================================
    // 3. KOMPLEKS MABES POLRI ([-260, 0, 625], JL. TRUNOJOYO NO. 3)
    // =========================================================================
    const polriGroup = new THREE.Group();
    polriGroup.position.set(-260, 0, 625);

    // Main Police HQ Tower (8 lantai)
    const polriMain = new THREE.Mesh(new THREE.BoxGeometry(32, 28, 22), institutionalGreyMat);
    polriMain.position.set(0, 14, -6);
    polriMain.castShadow = true;
    polriMain.receiveShadow = true;
    polriGroup.add(polriMain);

    // East Wing & West Wing
    [-19, 19].forEach((wx) => {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(10, 20, 18), institutionalGreyMat);
      wing.position.set(wx, 10, -6);
      wing.castShadow = true;
      polriGroup.add(wing);
    });

    // Grand Entrance Portico with Gold Police Emblem
    const polriPortico = new THREE.Mesh(new THREE.BoxGeometry(14, 6, 8), whiteWallMat);
    polriPortico.position.set(0, 3, 7);
    polriPortico.castShadow = true;
    polriGroup.add(polriPortico);

    const polriEmblem = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.3, 16), goldMat);
    polriEmblem.rotation.x = Math.PI / 2;
    polriEmblem.position.set(0, 7.5, 11.2);
    polriGroup.add(polriEmblem);

    this.proceduralGroup.add(polriGroup);

    // =========================================================================
    // 4. KEMENTERIAN ATR / BPN ([-300, 0, 580], JL. SISINGAMANGARAJA NO. 2)
    // =========================================================================
    const bpnGroup = new THREE.Group();
    bpnGroup.position.set(-300, 0, 580);

    const bpnTower = new THREE.Mesh(new THREE.BoxGeometry(26, 26, 20), institutionalGreyMat);
    bpnTower.position.set(0, 13, 0);
    bpnTower.castShadow = true;
    bpnTower.receiveShadow = true;
    bpnGroup.add(bpnTower);

    // White Louvre Fins
    [-10, -5, 0, 5, 10].forEach((fx) => {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.3, 26, 1.2), whiteWallMat);
      fin.position.set(fx, 13, 10.6);
      bpnGroup.add(fin);
    });
    this.proceduralGroup.add(bpnGroup);

    // =========================================================================
    // 5. KOMPLEKS KOMERSIAL BLOK M SQUARE & MASJID ROOFTOP NURUL IMAN ([-295, 0, 715])
    // =========================================================================
    const blokMSqGroup = new THREE.Group();
    blokMSqGroup.position.set(-295, 0, 715);

    // Massive Commercial Podium Block (7 lantai)
    const squareMall = new THREE.Mesh(
      new THREE.BoxGeometry(36, 26, 36),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.6 })
    );
    squareMall.position.set(0, 13, 0);
    squareMall.castShadow = true;
    squareMall.receiveShadow = true;
    blokMSqGroup.add(squareMall);

    // Fasad Kaca Retail Podium
    [6, 12, 18].forEach((ly) => {
      const glassBand = new THREE.Mesh(
        new THREE.BoxGeometry(36.2, 2.2, 36.2),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.8, roughness: 0.2 })
      );
      glassBand.position.set(0, ly, 0);
      blokMSqGroup.add(glassBand);
    });

    // Masjid Nurul Iman Rooftop di Puncak Mall
    const masjidRooftop = new THREE.Mesh(new THREE.BoxGeometry(18, 5, 18), whiteWallMat);
    masjidRooftop.position.set(0, 28.5, 0);
    masjidRooftop.castShadow = true;
    blokMSqGroup.add(masjidRooftop);

    // Golden Dome on Rooftop Mosque
    const masjidDome = new THREE.Mesh(
      new THREE.SphereGeometry(5.2, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2),
      goldMat
    );
    masjidDome.position.set(0, 31, 0);
    masjidDome.castShadow = true;
    blokMSqGroup.add(masjidDome);

    this.proceduralGroup.add(blokMSqGroup);

    // =========================================================================
    // 6. PERMUKIMAN TROPIS GARDEN CITY KEBAYORAN BARU (MOH. SOESILO, 1948)
    // =========================================================================
    // Helper: Build a tropical garden house with authentic terracotta hipped roof
    const createGardenVilla = (x, z, width = 11, depth = 9, height = 5.2) => {
      const houseGroup = new THREE.Group();
      houseGroup.position.set(x, 0, z);

      // White Plastered Wall
      const walls = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), whiteWallMat);
      walls.position.set(0, height * 0.5, 0);
      walls.castShadow = true;
      walls.receiveShadow = true;
      houseGroup.add(walls);

      // Terracotta Hipped Roof (Genteng Limasan)
      const roofGeo = new THREE.ConeGeometry(Math.max(width, depth) * 0.72, 3.6, 4);
      roofGeo.rotateY(Math.PI / 4);
      const roof = new THREE.Mesh(roofGeo, terracottaRoofMat);
      roof.scale.set((width / (Math.max(width, depth) * 0.72)) * 0.65, 1, (depth / (Math.max(width, depth) * 0.72)) * 0.65);
      roof.position.set(0, height + 1.8, 0);
      roof.castShadow = true;
      houseGroup.add(roof);

      // Front Lawn Yard
      const yard = new THREE.Mesh(new THREE.BoxGeometry(width + 3, 0.1, depth + 3), grassMat);
      yard.position.set(0, 0.05, 0);
      yard.receiveShadow = true;
      houseGroup.add(yard);

      this.proceduralGroup.add(houseGroup);
    };

    // Cluster 1: Pakubuwono & Hang Tuah (Barat Laut Sisingamangaraja)
    for (let x = -410; x <= -355; x += 18) {
      for (let z = 495; z <= 575; z += 18) {
        if (Math.hypot(x - (-316), z - 478) > 55) {
          createGardenVilla(x, z, 12, 10, 5.5);
          this.createTree(x + 7, z + 6, new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 }), timberMat, 0.9);
        }
      }
    }

    // Cluster 2: Raden Patah & Senopati Barat (Timur Laut Sisingamangaraja)
    for (let x = -305; x <= -230; x += 19) {
      for (let z = 515; z <= 585; z += 18) {
        createGardenVilla(x, z, 11, 10, 5.2);
        this.createTree(x - 6, z + 6, new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.85 }), timberMat, 0.95);
      }
    }

    // Cluster 3: Kramat Pela & Barito (Barat Daya CSW, sekitar Ayodya)
    for (let x = -450; x <= -380; x += 18) {
      for (let z = 650; z <= 745; z += 18) {
        if (Math.hypot(x - (-416.6), z - 695.4) > 28) {
          createGardenVilla(x, z, 12, 9, 5.0);
          this.createTree(x + 6, z - 5, new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 }), timberMat, 0.9);
        }
      }
    }

    // Cluster 4: Petogogan & Melawai Selatan (Tenggara CSW)
    for (let x = -280; x <= -200; x += 18) {
      for (let z = 660; z <= 745; z += 18) {
        if (Math.hypot(x - (-260), z - 625) > 28 && Math.hypot(x - (-295), z - 715) > 26) {
          createGardenVilla(x, z, 11, 9, 5.2);
          this.createTree(x - 6, z + 5, new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.85 }), timberMat, 0.9);
        }
      }
    }

    // =========================================================================
    // 7. DISTRIK RESIDENSIAL ELITE PONDOK INDAH (BUKIT GOLFINDO & PINANG EMAS)
    // =========================================================================
    // Helper for Luxury Pondok Indah Villa with pool and gated driveway
    const createPondokIndahVilla = (x, z, width = 16, depth = 13, height = 7.5) => {
      const villaGroup = new THREE.Group();
      villaGroup.position.set(x, 0, z);

      // Base Perimeter Plot Yard
      const plot = new THREE.Mesh(new THREE.BoxGeometry(width + 4, 0.15, depth + 4), grassMat);
      plot.position.set(0, 0.075, 0);
      plot.receiveShadow = true;
      villaGroup.add(plot);

      // Main Villa 2-3 Storey Mansion
      const villaWalls = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), whiteWallMat);
      villaWalls.position.set(0, height * 0.5, 0);
      villaWalls.castShadow = true;
      villaWalls.receiveShadow = true;
      villaGroup.add(villaWalls);

      // Distinctive Mediterranean Limasan Terracotta Roof
      const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(width, depth) * 0.65, 4.2, 4), terracottaRoofMat);
      roof.rotateY(Math.PI / 4);
      roof.scale.set((width / Math.max(width, depth)) * 0.85, 1, (depth / Math.max(width, depth)) * 0.85);
      roof.position.set(0, height + 2.1, 0);
      roof.castShadow = true;
      villaGroup.add(roof);

      // Private Backyard Swimming Pool
      const pool = new THREE.Mesh(new THREE.BoxGeometry(5.5, 0.25, 3.8), waterMat);
      pool.position.set(width * 0.35, 0.15, depth * 0.35);
      villaGroup.add(pool);

      this.proceduralGroup.add(villaGroup);
    };

    // Cluster A: Pondok Indah Barat (Sisi Barat Jl. Metro Pondok Indah)
    for (let x = -555; x <= -485; x += 24) {
      for (let z = 750; z <= 960; z += 24) {
        if (Math.hypot(x - (-510), z - 845) > 45 && Math.hypot(x - (-515), z - 915) > 35) {
          createPondokIndahVilla(x, z, 15, 13, 8.0);
          this.createTree(x + 8, z + 7, new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8 }), timberMat, 1.15);
        }
      }
    }

    // Cluster B: Pondok Indah Timur & Bukit Golf
    for (let x = -470; x <= -425; x += 22) {
      for (let z = 780; z <= 940; z += 22) {
        if (Math.hypot(x - (-510), z - 845) > 45) {
          createPondokIndahVilla(x, z, 14, 12, 7.5);
          this.createTree(x - 7, z - 6, new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.85 }), timberMat, 1.1);
        }
      }
    }

    // =========================================================================
    // 8. KAWASAN KOMERSIAL & PERKANTORAN CBD TB SIMATUPANG
    // =========================================================================
    const corporateGlassMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.18, metalness: 0.88 });
    const darkGlassMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.2, metalness: 0.85 });
    const brickOfficeMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.8 });
    const concreteOfficeMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.55 });

    // A. Talavera Office Park ([-360, 0, 1085])
    const talaveraGroup = new THREE.Group();
    talaveraGroup.position.set(-360, 0, 1085);
    const talaveraTower = new THREE.Mesh(new THREE.BoxGeometry(26, 75, 22), corporateGlassMat);
    talaveraTower.position.set(0, 37.5, 0);
    talaveraTower.castShadow = true;
    talaveraGroup.add(talaveraTower);

    // Cantilevered Upper Screen
    const talaveraCrown = new THREE.Mesh(new THREE.BoxGeometry(26.8, 6, 22.8), concreteOfficeMat);
    talaveraCrown.position.set(0, 78, 0);
    talaveraGroup.add(talaveraCrown);
    this.proceduralGroup.add(talaveraGroup);

    // B. Cilandak Town Square (Citos) ([-260, 0, 1035])
    const citosGroup = new THREE.Group();
    citosGroup.position.set(-260, 0, 1035);
    const citosPodium = new THREE.Mesh(new THREE.BoxGeometry(45, 16, 32), concreteOfficeMat);
    citosPodium.position.set(0, 8, 0);
    citosPodium.castShadow = true;
    citosGroup.add(citosPodium);

    // Open-Air Dining Terrace Canopy
    const citosCanopy = new THREE.Mesh(new THREE.BoxGeometry(42, 1.2, 12), timberMat);
    citosCanopy.position.set(0, 16.5, 12);
    citosGroup.add(citosCanopy);
    this.proceduralGroup.add(citosGroup);

    // C. Arkadia Green Park & Talavera Office Park ([-180, 0, 1085])
    // Distinctive red-brick clustered office park towers
    const arkadiaGroup = new THREE.Group();
    arkadiaGroup.position.set(-180, 0, 1085);
    [-18, 0, 18].forEach((ax) => {
      const arkTower = new THREE.Mesh(new THREE.BoxGeometry(15, 45, 16), brickOfficeMat);
      arkTower.position.set(ax, 22.5, 0);
      arkTower.castShadow = true;
      arkadiaGroup.add(arkTower);

      // Arched Copper Top Trim
      const arkTop = new THREE.Mesh(new THREE.CylinderGeometry(7.5, 7.5, 16, 12, 1, false, 0, Math.PI), corporateGlassMat);
      arkTop.rotateZ(Math.PI / 2);
      arkTop.position.set(ax, 45, 0);
      arkadiaGroup.add(arkTop);
    });
    this.proceduralGroup.add(arkadiaGroup);

    // D. Alamanda Tower & 18 Office Park ([-115, 0, 1035])
    const alamandaGroup = new THREE.Group();
    alamandaGroup.position.set(-115, 0, 1035);
    const alamandaTower = new THREE.Mesh(new THREE.BoxGeometry(22, 85, 20), darkGlassMat);
    alamandaTower.position.set(0, 42.5, 0);
    alamandaTower.rotation.y = -0.22;
    alamandaTower.castShadow = true;
    alamandaGroup.add(alamandaTower);
    this.proceduralGroup.add(alamandaGroup);

    // =========================================================================
    // 9. KAWASAN RESIDENSIAL & KREATIF KEMANG (JL. KEMANG RAYA & BANGKA)
    // =========================================================================
    // Helper: Build an artistic alfresco shop/cafe or contemporary townhouse
    const createKemangBoutique = (x, z, width = 12, depth = 11, height = 7.5) => {
      const bGroup = new THREE.Group();
      bGroup.position.set(x, 0, z);

      // Modern Brick/Concrete Wall
      const wall = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), concreteOfficeMat);
      wall.position.set(0, height * 0.5, 0);
      wall.castShadow = true;
      bGroup.add(wall);

      // Glass Boutique Storefront
      const glass = new THREE.Mesh(new THREE.BoxGeometry(width * 0.85, height * 0.45, 0.3), corporateGlassMat);
      glass.position.set(0, height * 0.25, depth * 0.5 + 0.1);
      bGroup.add(glass);

      // Timber Awning & Planter Boxes
      const awning = new THREE.Mesh(new THREE.BoxGeometry(width, 0.25, 3.0), timberMat);
      awning.position.set(0, height * 0.55, depth * 0.5 + 1.5);
      bGroup.add(awning);

      this.proceduralGroup.add(bGroup);
    };

    // Kemang North & Bangka
    for (let x = -135; x <= -55; x += 18) {
      for (let z = 720; z <= 830; z += 18) {
        if (Math.hypot(x - (-95), z - 775) > 38) {
          createKemangBoutique(x, z, 13, 11, 7.2);
          this.createTree(x + 6, z + 5, new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 }), timberMat, 0.95);
        }
      }
    }

    // =========================================================================
    // 10. KOMPLEKS PUSAT MEDIS RSUP FATMAWATI ([-340, 0, 1010])
    // =========================================================================
    const rsupGroup = new THREE.Group();
    rsupGroup.position.set(-340, 0, 1010);

    // Main Inpatient Tower Paviliun Terpadu (8 lantai)
    const rsupMain = new THREE.Mesh(new THREE.BoxGeometry(32, 28, 24), whiteWallMat);
    rsupMain.position.set(0, 14, 0);
    rsupMain.castShadow = true;
    rsupGroup.add(rsupMain);

    // Red Cross Hospital Emblem on Facade
    const crossV = new THREE.Mesh(new THREE.BoxGeometry(2, 6, 0.3), new THREE.MeshStandardMaterial({ color: 0xdc2626 }));
    crossV.position.set(0, 24, 12.2);
    rsupGroup.add(crossV);
    const crossH = new THREE.Mesh(new THREE.BoxGeometry(6, 2, 0.3), new THREE.MeshStandardMaterial({ color: 0xdc2626 }));
    crossH.position.set(0, 24, 12.2);
    rsupGroup.add(crossH);

    // Diagnostic & Trauma Center Wing with Rooftop Helipad
    const traumaWing = new THREE.Mesh(new THREE.BoxGeometry(22, 14, 20), concreteOfficeMat);
    traumaWing.position.set(22, 7, 0);
    traumaWing.castShadow = true;
    rsupGroup.add(traumaWing);

    // Helipad Landing Circle
    const helipad = new THREE.Mesh(new THREE.CylinderGeometry(6, 6, 0.3, 16), darkGlassMat);
    helipad.position.set(22, 14.2, 0);
    rsupGroup.add(helipad);

    this.proceduralGroup.add(rsupGroup);

    // =========================================================================
    // 11. HUTAN KOTA TAMAN MARGASATWA RAGUNAN ([45, 0, 1065])
    // =========================================================================
    const ragunanGroup = new THREE.Group();
    ragunanGroup.position.set(45, 0, 1065);

    // Vast Forest Green Lawn Base (147 Hectares Park representation)
    const ragunanBase = new THREE.Mesh(new THREE.BoxGeometry(85, 0.35, 75), grassMat);
    ragunanBase.position.y = 0.175;
    ragunanBase.receiveShadow = true;
    ragunanGroup.add(ragunanBase);

    // Natural Safari Lake
    const ragunanLake = new THREE.Mesh(new THREE.CylinderGeometry(18, 18, 0.4, 24), waterMat);
    ragunanLake.position.set(-12, 0.25, 0);
    ragunanGroup.add(ragunanLake);

    // Schmutzer Primate Center Glass Pavilion
    const schmutzerDome = new THREE.Mesh(
      new THREE.SphereGeometry(11, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7, metalness: 0.8 })
    );
    schmutzerDome.position.set(18, 0.2, 0);
    ragunanGroup.add(schmutzerDome);

    // Dense Rainforest Canopy
    const deepForestMat = new THREE.MeshStandardMaterial({ color: 0x14532d, roughness: 0.9 });
    for (let rx = -35; rx <= 35; rx += 14) {
      for (let rz = -30; rz <= 30; rz += 14) {
        if (Math.hypot(rx - (-12), rz) > 18 && Math.hypot(rx - 18, rz) > 12) {
          this.createTree(45 + rx, 1065 + rz, deepForestMat, timberMat, 1.4);
        }
      }
    }
    this.proceduralGroup.add(ragunanGroup);

    // =========================================================================
    // 12. SMESCO INDONESIA (SME TOWER) & KOMPLEKS BIDAKARA ([195, 0, 465])
    // =========================================================================
    // A. Smesco Indonesia / SME Tower with Futuristic Geodesic Dome
    const smescoGroup = new THREE.Group();
    smescoGroup.position.set(185, 0, 455);

    const smescoPodium = new THREE.Mesh(new THREE.BoxGeometry(32, 16, 26), concreteOfficeMat);
    smescoPodium.position.set(0, 8, 0);
    smescoPodium.castShadow = true;
    smescoGroup.add(smescoPodium);

    // Futuristic Spherical Dome Exhibition Hall
    const smescoDome = new THREE.Mesh(
      new THREE.SphereGeometry(12, 24, 14, 0, Math.PI * 2, 0, Math.PI / 1.7),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.25, metalness: 0.85 })
    );
    smescoDome.position.set(0, 16, 0);
    smescoDome.castShadow = true;
    smescoGroup.add(smescoDome);

    // SME Office Tower
    const smeTower = new THREE.Mesh(new THREE.BoxGeometry(18, 65, 18), corporateGlassMat);
    smeTower.position.set(18, 32.5, -8);
    smeTower.castShadow = true;
    smescoGroup.add(smeTower);
    this.proceduralGroup.add(smescoGroup);

    // B. Kompleks Menara Bidakara & Auditorium Birawa ([215, 0, 475])
    const bidakaraGroup = new THREE.Group();
    bidakaraGroup.position.set(215, 0, 475);

    // Twin Bidakara Towers
    [-9, 9].forEach((bx) => {
      const bTower = new THREE.Mesh(new THREE.BoxGeometry(16, 68, 16), corporateGlassMat);
      bTower.position.set(bx, 34, 0);
      bTower.castShadow = true;
      bidakaraGroup.add(bTower);
    });

    // Birawa Grand Auditorium (Curved Classical Roof)
    const auditorium = new THREE.Mesh(new THREE.CylinderGeometry(14, 15, 12, 16), concreteOfficeMat);
    auditorium.position.set(0, 6, 18);
    auditorium.castShadow = true;
    bidakaraGroup.add(auditorium);
    this.proceduralGroup.add(bidakaraGroup);
  }

  createStreetLamp(x, z, facingEast) {
    this.pjuLampTransforms.push({ x, z, facingEast });
  }

  buildStreetLampInstances() {
    const count = this.pjuLampTransforms.length;
    if (count === 0) return;

    const poleMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.7 });
    const poleGeo = new THREE.CylinderGeometry(0.18, 0.28, 9, 6);
    const poleMesh = new THREE.InstancedMesh(poleGeo, poleMat, count);
    poleMesh.name = 'pju-pole';

    if (!this.pjuBulbMat) {
      this.pjuBulbMat = new THREE.MeshStandardMaterial({
        color: 0xfef08a,
        emissive: 0xfef08a,
        emissiveIntensity: 0.0,
        roughness: 0.2
      });
      this.pjuBulbMat.name = 'pju-bulb';
      this.glowMaterials.push(this.pjuBulbMat);
    }

    const bulbGeo = new THREE.SphereGeometry(0.35, 8, 8);
    const bulbMesh = new THREE.InstancedMesh(bulbGeo, this.pjuBulbMat, count);
    bulbMesh.name = 'pju-bulb-instanced';

    const dummy = new THREE.Object3D();
    this.pjuLampTransforms.forEach((lamp, index) => {
      dummy.position.set(lamp.x, 4.5, lamp.z);
      dummy.updateMatrix();
      poleMesh.setMatrixAt(index, dummy.matrix);

      dummy.position.set(lamp.x + (lamp.facingEast ? 2.0 : -2.0), 8.5, lamp.z);
      dummy.updateMatrix();
      bulbMesh.setMatrixAt(index, dummy.matrix);
    });

    poleMesh.instanceMatrix.needsUpdate = true;
    bulbMesh.instanceMatrix.needsUpdate = true;
    this.proceduralGroup.add(poleMesh);
    this.proceduralGroup.add(bulbMesh);
  }

  buildPjuLightPool() {
    for (let i = 0; i < this.pjuLightPoolSize; i++) {
      const light = new THREE.PointLight(0xfffbeb, 0, 22, 1.5);
      light.name = 'pju-pool-light';
      light.visible = false;
      light.position.set(0, 8, 0);
      this.proceduralGroup.add(light);
      this.pjuLightPool.push(light);
    }
  }

  /**
   * Keep only the nearest PJU lights active at night so the shader never
   * evaluates all 193 lamps. Refreshes after the camera moves 15 units.
   */
  updatePjuLights(cameraPosition) {
    if (this.currentTimePreset === 'day') {
      if (this.pjuLightsActive) {
        this.pjuLightPool.forEach((light) => {
          light.visible = false;
          light.intensity = 0;
        });
        this.pjuLightsActive = false;
      }
      return;
    }

    const dx = cameraPosition.x - this.lastPjuLightPosition.x;
    const dz = cameraPosition.z - this.lastPjuLightPosition.z;
    if (this.pjuLightsActive && dx * dx + dz * dz < 225) return;

    this.lastPjuLightPosition.copy(cameraPosition);

    const nearest = this.pjuLampTransforms
      .map((lamp) => {
        const x = lamp.x + (lamp.facingEast ? 2.0 : -2.0);
        const z = lamp.z;
        return { x, z, d: (x - cameraPosition.x) ** 2 + (z - cameraPosition.z) ** 2 };
      })
      .sort((a, b) => a.d - b.d);

    const intensity = this.currentTimePreset === 'night' ? 1.8 : 0.6;
    this.pjuLightPool.forEach((light, index) => {
      const nearestLamp = nearest[index];
      if (!nearestLamp) {
        light.visible = false;
        return;
      }
      light.position.set(nearestLamp.x, 8.0, nearestLamp.z);
      light.intensity = intensity;
      light.visible = true;
    });
    this.pjuLightsActive = true;
  }

  /**
   * Tahap 2 Jakarta Utara: Jaringan Jalan Tol Layang Pelabuhan (Harbour Toll Road),
   * Arteri Pesisir RE Martadinata / Lodan / Benyamin Sueb, Tata Air Danau Sunter,
   * Waduk Pluit, serta Garis Pantai Teluk Jakarta & Laut Jawa.
   *
   * Performa Optimal: Seluruh geometri digabungkan (geometry merging) menjadi 9 mesh tunggal
   * sehingga penambahan seluruh infrastruktur Jakarta Utara hanya memakan 9 draw calls.
   */
  buildNorthJakartaInfrastructure() {
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.8,
      metalness: 0.1
    });
    const sidewalkMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createSidewalkTexture(),
      roughness: 0.8
    });
    const medianGrassMat = new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.85
    });
    const viaductMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.65
    });
    const barrierMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.5,
      roughness: 0.3
    });
    const pierMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.6
    });
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      roughness: 0.15,
      metalness: 0.85,
      side: THREE.DoubleSide
    });
    const parkMat = new THREE.MeshStandardMaterial({
      color: 0x166534,
      roughness: 0.9,
      side: THREE.DoubleSide
    });
    const seawallMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.7
    });

    const roadGeos = [];
    const swGeos = [];
    const medianGeos = [];
    const viaductGeos = [];
    const barrierGeos = [];
    const pierGeos = [];
    const waterGeos = [];
    const parkGeos = [];
    const seawallGeos = [];

    const makeBox = (w, h, d, x, y, z, rotY = 0) => {
      const g = new THREE.BoxGeometry(w, h, d);
      if (rotY !== 0) g.rotateY(rotY);
      g.translate(x, y, z);
      return g;
    };

    const addRoad = (x1, z1, x2, z2, roadWidth = 20, hasMedian = false, medianWidth = 3.0) => {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;

      // Asphalt
      roadGeos.push(makeBox(roadWidth, 0.25, len + 0.4, mx, 0.125, mz, angle));

      // Sidewalks
      const swWidth = 3.2;
      [-1, 1].forEach((dir) => {
        const perpX = Math.cos(angle) * (roadWidth * 0.5 + swWidth * 0.5) * dir;
        const perpZ = -Math.sin(angle) * (roadWidth * 0.5 + swWidth * 0.5) * dir;
        swGeos.push(makeBox(swWidth, 0.4, len + 0.4, mx + perpX, 0.2, mz + perpZ, angle));
      });

      // Green median
      if (hasMedian) {
        medianGeos.push(makeBox(medianWidth, 0.45, len + 0.2, mx, 0.225, mz, angle));
      }
    };

    const addTollViaduct = (x1, z1, x2, z2, viaductWidth = 21, y = 8.5) => {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;

      // Viaduct deck slab
      viaductGeos.push(makeBox(viaductWidth, 0.8, len + 0.5, mx, y, mz, angle));

      // Safety parapets / crash barriers
      [-1, 1].forEach((dir) => {
        const perpX = Math.cos(angle) * (viaductWidth * 0.5 - 0.4) * dir;
        const perpZ = -Math.sin(angle) * (viaductWidth * 0.5 - 0.4) * dir;
        barrierGeos.push(makeBox(0.6, 1.1, len + 0.5, mx + perpX, y + 0.8, mz + perpZ, angle));
      });
      // Center divider barrier
      barrierGeos.push(makeBox(0.8, 0.9, len + 0.5, mx, y + 0.7, mz, angle));

      // Support piers spaced every ~45m
      const pierCount = Math.max(1, Math.floor(len / 45));
      for (let i = 0; i <= pierCount; i++) {
        const t = i / pierCount;
        const px = x1 + dx * t;
        const pz = z1 + dz * t;
        pierGeos.push(makeBox(2.8, y, 2.8, px, y * 0.5, pz, angle));
        pierGeos.push(makeBox(viaductWidth * 0.85, 1.2, 3.2, px, y - 0.6, pz, angle));
      }
    };

    const addWaterPlane = (w, d, x, z, y = 0.04) => {
      const g = new THREE.PlaneGeometry(w, d);
      g.rotateX(-Math.PI / 2);
      g.translate(x, y, z);
      waterGeos.push(g);
    };

    const addParkPlane = (w, d, x, z, y = 0.02) => {
      const g = new THREE.PlaneGeometry(w, d);
      g.rotateX(-Math.PI / 2);
      g.translate(x, y, z);
      parkGeos.push(g);
    };

    // =========================================================================
    // 1. TATA AIR, WADUK RETENSI, DANAU SUNTER & TELUK JAKARTA
    // =========================================================================
    // Laut Jawa & Perairan Teluk Jakarta
    addWaterPlane(2200, 600, 350, -1350, 0.02);

    // Tanggul Laut Pesisir & Seawall Breakwater
    seawallGeos.push(makeBox(330, 1.4, 4.5, -390, 0.7, -1045)); // Pluit - Sunda Kelapa
    seawallGeos.push(makeBox(520, 1.4, 4.5, 95, 0.7, -1045));  // Ancol Marina revetment
    seawallGeos.push(makeBox(390, 1.6, 5.0, 630, 0.8, -1090)); // JIS - Priok coastal dike
    seawallGeos.push(makeBox(180, 2.0, 6.0, 830, 1.0, -1270)); // Tanjung Priok harbor breakwater

    // Taman Waduk Pluit (Penampung Air Utama Jakarta Utara Barat)
    addWaterPlane(150, 190, -367, -1077, 0.04);
    addParkPlane(200, 240, -367, -1077, 0.02); // Taman RTH Waduk Pluit

    // Danau Sunter Barat (Sentra Dayung & Olahraga Air Jakarta Utara)
    addWaterPlane(70, 230, 590, -770, 0.04);
    addParkPlane(96, 250, 590, -770, 0.02); // Promenade Danau Sunter Barat

    // Danau Sunter Selatan / Timur (Twin Lake Sunter)
    addWaterPlane(110, 95, 720, -760, 0.04);
    addParkPlane(135, 120, 720, -760, 0.02); // Promenade Danau Sunter Selatan

    // Terusan Aliran Air: Kali Ancol & Muara Kali Sunter & Basin Sunda Kelapa
    addWaterPlane(16, 200, 210, -990, 0.03); // Kali Ancol
    addWaterPlane(14, 180, 550, -990, 0.03); // Muara Kali Sunter
    addWaterPlane(38, 125, -205, -980, 0.03); // Kolam Labuh Sunda Kelapa

    // =========================================================================
    // 2. JALAN TOL LAYANG PELABUHAN (HARBOUR TOLL ROAD / TOL IR. WIYOTO WIYONO)
    // Elevasi viaduk layang ganda Y = 8.5m membelah pesisir dari Pluit s.d. Priok
    // =========================================================================
    addTollViaduct(-520, -935, -205, -940, 21, 8.5); // Segmen 1: Pluit ke Sunda Kelapa
    addTollViaduct(-205, -940, 150, -945, 21, 8.5);  // Segmen 2: Sunda Kelapa ke Ancol
    addTollViaduct(150, -945, 528, -955, 21, 8.5);   // Segmen 3: Ancol ke Sisi Utara JIS
    addTollViaduct(528, -955, 830, -1180, 21, 8.5);  // Segmen 4: JIS ke Simpang Priok
    addTollViaduct(360, -500, 830, -1180, 19, 9.0);  // Segmen 5: Cabang Tol Wiyoto Wiyono Cempaka Putih - Priok

    // =========================================================================
    // 3. JARINGAN JALAN ARTERI UTAMA PESISIR (GROUND LEVEL)
    // =========================================================================
    // Jl. RE Martadinata & Jl. Lodan Raya (Poros Arteri Pesisir)
    addRoad(-380, -920, -150, -920, 18, false);
    addRoad(-150, -920, 150, -925, 20, false);
    addRoad(150, -925, 530, -935, 22, true, 2.5); // Depan JIS & Ancol
    addRoad(530, -935, 830, -1160, 22, true, 2.5); // Menuju Tanjung Priok

    // Perpanjangan Boulevard Benyamin Sueb (Kemayoran - Ancol / Laut)
    addRoad(267.2, -517.0, 267.2, -925.0, 24, true, 3.5);

    // Jl. Boulevard Raya Kelapa Gading (Poros Megapolitan Timur Laut)
    addRoad(1198.0, -220.0, 1198.0, -820.0, 24, true, 4.0);
    // Jl. Boulevard Barat Raya (Simpang MKG)
    addRoad(950.0, -531.0, 1350.0, -531.0, 20, true, 3.0);

    // Jaringan Jalan Danau Sunter (Sunter Barat, Utara & Selatan)
    addRoad(550.0, -640.0, 550.0, -900.0, 16, false); // Danau Sunter Barat
    addRoad(550.0, -900.0, 780.0, -900.0, 18, false); // Danau Sunter Utara (akses JIS)
    addRoad(550.0, -640.0, 780.0, -640.0, 16, false); // Danau Sunter Selatan

    // Jaringan Jalan Pluit (Akses Waduk Pluit & Sunda Kelapa)
    addRoad(-450.0, -900.0, -450.0, -1120.0, 16, false); // Pluit Raya
    addRoad(-450.0, -1000.0, -205.0, -920.0, 16, false); // Pluit Selatan ke Lodan

    // Jaringan Jalan Pelabuhan Tanjung Priok
    addRoad(830.0, -1160.0, 830.0, -1260.0, 22, false); // Jl. Pelabuhan Raya
    addRoad(720.0, -1220.0, 940.0, -1220.0, 20, false); // Ring Dermaga Kargo

    // =========================================================================
    // 4. MERGE GEOMETRIES & ADD TO SCENE (Hanya 9 Draw Calls!)
    // =========================================================================
    const mergeAndAdd = (geos, mat, receiveShadow = true, castShadow = false) => {
      if (!geos || geos.length === 0) return;
      const merged = BufferGeometryUtils.mergeGeometries(geos, false);
      if (merged) {
        const mesh = new THREE.Mesh(merged, mat);
        mesh.receiveShadow = receiveShadow;
        mesh.castShadow = castShadow;
        this.proceduralGroup.add(mesh);
      }
    };

    mergeAndAdd(roadGeos, roadMat, true, false);
    mergeAndAdd(swGeos, sidewalkMat, true, false);
    mergeAndAdd(medianGeos, medianGrassMat, true, false);
    mergeAndAdd(viaductGeos, viaductMat, true, false);
    mergeAndAdd(barrierGeos, barrierMat, true, false);
    mergeAndAdd(pierGeos, pierMat, true, false);
    mergeAndAdd(waterGeos, waterMat, false, false);
    mergeAndAdd(parkGeos, parkMat, true, false);
    mergeAndAdd(seawallGeos, seawallMat, true, false);
  }

  /**
   * Tahap 2 Jakarta Barat: Jaringan Jalan Tol, Arteri Utama & Koridor Tata Air
   *
   * 1. Jalan Tol Jakarta - Tangerang:
   *    - Dari Simpang Susun Tomang [-418, -224] melewati Kebon Jeruk [-785, -45],
   *      Simpang Susun Kembangan [-1040, -85], hingga Karang Tengah [-1350, -85].
   * 2. Jalan Tol Lingkar Luar Barat (JORR W1 / W2N):
   *    - Viaduk layang melintang dari Cengkareng / Bandara [-1040, -450] melintasi Kembangan [-1040, -85]
   *      menuju Meruya / Joglo [-1040, 280].
   * 3. Simpang Susun Kembangan (Interchange Tol Jakarta-Tangerang x Tol JORR W1):
   *    - Ramp layang multi-tingkat (trumpet & cloverleaf loops) menghubungkan kedua jalan tol.
   * 4. Poros Arteri Utama Jakarta Barat:
   *    - Jl. Daan Mogot: Simpang Grogol [-484, -403] ke Pesing [-650, -420] & Cengkareng [-1250, -450] + Flyover Pesing.
   *    - Jl. Panjang (Arteri Kebon Jeruk): Kedoya [-775, -420] -> Kebon Jeruk [-775, 12] -> Permata Hijau [-775, 320].
   *    - Jl. Puri Indah Raya & Boulevard Kembangan: Lingkar Sentra Bisnis Primer Barat.
   *    - Koridor Pecinan Glodok: Jl. Pancoran, Jl. Gajah Mada & Pintu Besar Selatan.
   * 5. Tata Air & Kanal Pengendali Banjir:
   *    - Kali Angke & Cengkareng Drain: Membelah Kembangan & Pesing ke arah laut utara.
   *    - Kali Pesanggrahan: Mengalir antara Kembangan dan Kebon Jeruk.
   *    - Jembatan-jembatan penyeberangan sungai tol dan arteri.
   *
   * Performa Ekstrem (Geometry Merging):
   * Seluruh geometri digabungkan per material menggunakan BufferGeometryUtils.mergeGeometries.
   * Total penambahan draw calls: Hanya 9 draw calls!
   */
  buildWestJakartaInfrastructure() {
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.8,
      metalness: 0.1
    });
    const sidewalkMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createSidewalkTexture(),
      roughness: 0.8
    });
    const medianGrassMat = new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.85
    });
    const viaductMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.65
    });
    const barrierMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.5,
      roughness: 0.3
    });
    const pierMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.6
    });
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      roughness: 0.15,
      metalness: 0.85,
      side: THREE.DoubleSide
    });
    const canalWallMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.75
    });
    const bridgeMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.7
    });

    const roadGeos = [];
    const swGeos = [];
    const medianGeos = [];
    const viaductGeos = [];
    const barrierGeos = [];
    const pierGeos = [];
    const waterGeos = [];
    const canalWallGeos = [];
    const bridgeGeos = [];

    const makeBox = (w, h, d, x, y, z, rotY = 0) => {
      const g = new THREE.BoxGeometry(w, h, d);
      if (rotY !== 0) g.rotateY(rotY);
      g.translate(x, y, z);
      return g;
    };

    const addRoad = (x1, z1, x2, z2, roadWidth = 20, hasMedian = false, medianWidth = 3.0) => {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;

      // Asphalt
      roadGeos.push(makeBox(roadWidth, 0.25, len + 0.4, mx, 0.125, mz, angle));

      // Sidewalks
      const swWidth = 3.2;
      [-1, 1].forEach((dir) => {
        const perpX = Math.cos(angle) * (roadWidth * 0.5 + swWidth * 0.5) * dir;
        const perpZ = -Math.sin(angle) * (roadWidth * 0.5 + swWidth * 0.5) * dir;
        swGeos.push(makeBox(swWidth, 0.4, len + 0.4, mx + perpX, 0.2, mz + perpZ, angle));
      });

      // Green median
      if (hasMedian) {
        medianGeos.push(makeBox(medianWidth, 0.45, len + 0.2, mx, 0.225, mz, angle));
      }
    };

    const addTollViaduct = (x1, z1, x2, z2, viaductWidth = 22, y = 8.5) => {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;

      // Viaduct deck slab
      viaductGeos.push(makeBox(viaductWidth, 0.8, len + 0.5, mx, y, mz, angle));

      // Safety parapets / crash barriers
      [-1, 1].forEach((dir) => {
        const perpX = Math.cos(angle) * (viaductWidth * 0.5 - 0.4) * dir;
        const perpZ = -Math.sin(angle) * (viaductWidth * 0.5 - 0.4) * dir;
        barrierGeos.push(makeBox(0.6, 1.1, len + 0.5, mx + perpX, y + 0.8, mz + perpZ, angle));
      });
      // Center divider barrier
      barrierGeos.push(makeBox(0.8, 0.9, len + 0.5, mx, y + 0.7, mz, angle));

      // Support piers spaced every ~45m
      const pierCount = Math.max(1, Math.floor(len / 45));
      for (let i = 0; i <= pierCount; i++) {
        const t = i / pierCount;
        const px = x1 + dx * t;
        const pz = z1 + dz * t;
        pierGeos.push(makeBox(2.8, y, 2.8, px, y * 0.5, pz, angle));
        pierGeos.push(makeBox(viaductWidth * 0.85, 1.2, 3.2, px, y - 0.6, pz, angle));
      }
    };

    const addCurvedRamp = (x1, z1, y1, x2, z2, y2, rampWidth = 9.0) => {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;
      const my = (y1 + y2) * 0.5;

      viaductGeos.push(makeBox(rampWidth, 0.65, len + 0.4, mx, my, mz, angle));

      [-1, 1].forEach((dir) => {
        const perpX = Math.cos(angle) * (rampWidth * 0.5 - 0.3) * dir;
        const perpZ = -Math.sin(angle) * (rampWidth * 0.5 - 0.3) * dir;
        barrierGeos.push(makeBox(0.5, 0.9, len + 0.4, mx + perpX, my + 0.6, mz + perpZ, angle));
      });

      if (my >= 3.5) {
        pierGeos.push(makeBox(2.0, my, 2.0, mx, my * 0.5, mz, angle));
      }
    };

    const addRiverSegment = (x1, z1, x2, z2, riverWidth = 18, wallWidth = 1.0) => {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;

      const g = new THREE.PlaneGeometry(riverWidth, len + 0.4);
      g.rotateX(-Math.PI / 2);
      g.rotateY(angle);
      g.translate(mx, 0.04, mz);
      waterGeos.push(g);

      [-1, 1].forEach((dir) => {
        const perpX = Math.cos(angle) * (riverWidth * 0.5 + wallWidth * 0.5) * dir;
        const perpZ = -Math.sin(angle) * (riverWidth * 0.5 + wallWidth * 0.5) * dir;
        canalWallGeos.push(makeBox(wallWidth, 0.6, len + 0.4, mx + perpX, 0.3, mz + perpZ, angle));
      });
    };

    const addBridge = (x, y, z, w, h, d, rotY = 0) => {
      bridgeGeos.push(makeBox(w, h, d, x, y, z, rotY));
    };

    // =========================================================================
    // 1. JALAN TOL JAKARTA - TANGERANG (KORIDOR UTAMA BARAT)
    // Dari Simpang Susun Tomang [-418, -224] meluncur barat melewati Kebon Jeruk,
    // Simpang Susun Kembangan [-1040, -85], hingga Karang Tengah / Batas Barat [-1350, -85]
    // =========================================================================
    addTollViaduct(-418, -224, -600, -135, 22, 7.5);   // Segmen 1: Tomang ke Tanjung Duren Barat
    addTollViaduct(-600, -135, -785, -45, 22, 7.5);    // Segmen 2: Tanjung Duren ke Kebon Jeruk (Depan RCTI & Museum MACAN)
    addTollViaduct(-785, -45, -1040, -85, 22, 7.5);    // Segmen 3: Kebon Jeruk ke Interchange Kembangan
    addTollViaduct(-1040, -85, -1350, -85, 22, 7.5);   // Segmen 4: Kembangan ke Karang Tengah (Batas Barat Peta)

    // Gerbang Tol Kebon Jeruk & Kembangan (Kanopi Gerbang Tol)
    viaductGeos.push(makeBox(28, 1.2, 8, -750, 9.8, -45, -0.32)); // Kanopi GT Kebon Jeruk 1 & 2
    viaductGeos.push(makeBox(28, 1.2, 8, -1120, 9.8, -85, 0));    // Kanopi GT Kembangan / Karang Tengah

    // =========================================================================
    // 2. JALAN TOL LINGKAR LUAR JAKARTA BARAT (TOL JORR W1 / LINGKAR LUAR BARAT)
    // Viaduk layang utara-selatan melintasi Kembangan / Puri:
    // Menghubungkan Cengkareng / Bandara [-1040, -450] -> Kembangan [-1040, -85] -> Meruya/Joglo [-1040, 280]
    // Level elevasi Y = 9.5m s.d. 11.2m di atas Tol Jakarta-Tangerang
    // =========================================================================
    addTollViaduct(-1040, -450, -1040, -180, 22, 9.5);  // Segmen 1: Rawa Buaya / Cengkareng ke Kembangan Utara
    addTollViaduct(-1040, -180, -1040, 20, 22, 11.2);   // Segmen 2: Melintasi Simpang Susun Kembangan (Atas Tol Tangerang)
    addTollViaduct(-1040, 20, -1040, 280, 22, 9.5);     // Segmen 3: Kembangan Selatan ke Meruya / Joglo (Batas Selatan)

    // =========================================================================
    // 3. SIMPANG SUSUN KEMBANGAN (INTERCHANGE JORR W1 x TOL JAKARTA-TANGERANG)
    // 4 Curved Loop & Flyover Slip Ramps Menghubungkan Kedua Jalan Tol
    // =========================================================================
    addCurvedRamp(-1120, -85, 7.5, -1040, -170, 9.5, 9.5); // Ramp Tangerang -> JORR Utara (Bandara)
    addCurvedRamp(-1120, -85, 7.5, -1040, 10, 9.5, 9.5);   // Ramp Tangerang -> JORR Selatan (Pondok Indah)
    addCurvedRamp(-960, -85, 7.5, -1040, -170, 9.5, 9.5);  // Ramp Tomang/Pusat -> JORR Utara
    addCurvedRamp(-960, -85, 7.5, -1040, 10, 9.5, 9.5);    // Ramp Tomang/Pusat -> JORR Selatan

    // =========================================================================
    // 4. POROS ARTERI UTAMA JAKARTA BARAT
    // =========================================================================
    // A. Jl. Daan Mogot (Poros Barat Grogol -> Pesing -> Cengkareng)
    addRoad(-484, -403, -650, -420, 24, true, 3.5); // Simpang Grogol ke Pesing
    addRoad(-650, -420, -880, -435, 24, true, 3.5); // Pesing ke Taman Kota
    addRoad(-880, -435, -1250, -450, 24, true, 3.5); // Taman Kota ke Cengkareng / Daan Mogot Barat

    // Flyover Pesing (Jembatan Layang Perlintasan Rel Pesing H=5.5m)
    addCurvedRamp(-580, -415, 0.8, -650, -420, 5.5, 11.0);
    addCurvedRamp(-650, -420, 5.5, -720, -425, 0.8, 11.0);

    // B. Koridor Jalan Panjang (Arteri Poros Utara-Selatan Kebon Jeruk)
    // Menghubungkan Kedoya / Daan Mogot [-775, -420] melewati Kebon Jeruk [-775, 12] ke Permata Hijau [-775, 320]
    addRoad(-775, -420, -775, -160, 22, true, 3.0); // Kedoya ke Kebon Jeruk Utara
    addRoad(-775, -160, -775, 80, 22, true, 3.0);   // Di depan RCTI [-785, 30] & Museum MACAN [-775, 12]
    addRoad(-775, 80, -775, 320, 22, true, 3.0);    // Kebon Jeruk Selatan ke Permata Hijau

    // Underpass / Persimpangan Arteri Kebon Jeruk di Bawah Tol Tangerang
    addRoad(-830, -45, -720, -45, 18, false); // Jl. Perjuangan & Akses Tol Kebon Jeruk

    // C. Jl. Puri Indah Raya & Boulevard Kembangan (Ring Sentra Primer Barat)
    addRoad(-1040, -85, -1185, -75, 22, true, 3.0);   // Akses Interchange Kembangan ke Lippo Mall Puri
    addRoad(-1185, -75, -1185, -160, 20, false);      // Sisi Barat Lippo Mall Puri & The St. Moritz
    addRoad(-1185, -160, -1010, -160, 22, true, 3.0); // Boulevard Kembangan Selatan
    addRoad(-1010, -160, -1010, -80, 20, false);       // Sisi Timur Puri Indah Mall
    addRoad(-1010, -80, -1040, -85, 22, true, 3.0);   // Jl. Puri Agung ke Walikota Jakbar
    addRoad(-1040, -85, -1040, -30, 20, false);        // Akses Gerbang Kantor Walikota Jakarta Barat

    // D. Koridor Pecinan Bersejarah Glodok
    addRoad(-120, -620, -120, -750, 16, false); // Jl. Pancoran (Kawasan Cagar Budaya & Kuliner Pecinan)
    addRoad(-95, -590, -95, -780, 22, true, 2.5); // Jl. Gajah Mada & Pintu Besar Selatan (Sisi Glodok)
    addRoad(-160, -660, -80, -660, 16, false); // Jl. Kemenangan / Petak Sembilan
    addRoad(-120, -640, -320, -640, 18, false); // Jl. Mangga Besar Raya Barat

    // E. Jaringan Jalan Sekunder & Penghubung Void A (Jakarta Barat Tengah)
    // 1. Jl. Greenville Raya & Jl. Taman Ratu Indah (Tanjung Duren -> Sentra Kuliner -> IPEKA -> Jl. Panjang)
    addRoad(-580, -180, -680, -170, 16, false); // Tanjung Duren Barat ke Sentra Kuliner Greenville
    addRoad(-680, -170, -775, -180, 16, false); // Sentra Kuliner ke Jl. Panjang
    addRoad(-680, -170, -710, -210, 14, false); // Cabang ke Kampus IPEKA Greenville
    addRoad(-680, -170, -680, -280, 14, false); // Jl. Taman Ratu Indah ke utara (arah Daan Mogot)

    // 2. Jl. Kedoya Raya & Sunrise Garden (RS Graha Kedoya -> Kedoya Baru -> Puri Kencana)
    addRoad(-775, -260, -860, -240, 16, true, 2.0); // Depan RS Graha Kedoya ke Kali Pesanggrahan
    addRoad(-860, -240, -950, -220, 16, true, 2.0); // Sunrise Garden ke Puri Kencana

    // 3. Jl. Pos Pengumben Raya (Poros Arteri 4-Lajur Palmerah/Kebayoran -> Kebon Jeruk -> Joglo)
    addRoad(-580, 210, -775, 210, 20, true, 2.5); // Palmerah ke Sentra Pos Pengumben
    addRoad(-775, 210, -1040, 210, 20, true, 2.5); // Sentra Pos Pengumben ke Joglo / Srengseng

    // 4. Jl. Perjuangan & Akses Underpass Tol Kebon Jeruk
    addRoad(-650, -45, -720, -45, 16, false); // Perpanjangan Jl. Perjuangan timur ke Kemanggisan
    addRoad(-830, -45, -920, -45, 16, false); // Akses barat gerbang tol Kebon Jeruk ke Kedoya Selatan

    // 5. Jl. Kebon Jeruk Raya / Kemanggisan Ilir (BINUS -> Sukabumi Utara -> Jl. Panjang)
    addRoad(-480, 20, -650, 40, 15, false); // Dari BINUS Kemanggisan ke Sukabumi Utara
    addRoad(-650, 40, -775, 50, 15, false); // Sukabumi Utara ke Jl. Panjang / MNC Studios

    // 6. Akses Lingkar Taman Cattleya & Simpang Tomang Barat
    addRoad(-480, -110, -580, -110, 18, true, 2.0); // S. Parman ke Tanjung Duren melintasi Taman Cattleya

    // =========================================================================
    // 5. TATA AIR & KANAL PENGENDALI BANJIR JAKARTA BARAT
    // =========================================================================
    // Kali Angke & Cengkareng Drain (Aliran Sungai Alami Membelah Barat ke Laut)
    addRiverSegment(-970, 200, -970, -30, 20, 1.2);   // Meruya ke Kembangan
    addRiverSegment(-970, -30, -950, -220, 20, 1.2);  // Kembangan ke Kedoya
    addRiverSegment(-950, -220, -890, -420, 22, 1.2); // Kedoya ke Pesing
    addRiverSegment(-890, -420, -890, -780, 26, 1.4); // Cengkareng Drain ke Laut

    // Kali Pesanggrahan (Membelah Kebon Jeruk & Kembangan)
    addRiverSegment(-840, 260, -840, 30, 18, 1.0);   // Kebon Jeruk Selatan
    addRiverSegment(-840, 30, -840, -180, 18, 1.0);  // Samping MNC Studios & MACAN
    addRiverSegment(-840, -180, -840, -380, 18, 1.0); // Menuju Kedoya Utara

    // Jembatan-Jembatan Penyeberangan Sungai:
    addBridge(-970, 8.2, -85, 24, 1.4, 26, 0); // Jembatan Tol Tangerang atas Kali Angke
    addBridge(-890, 1.2, -435, 26, 1.4, 28, 0); // Jembatan Daan Mogot Pesing atas Kali Angke
    addBridge(-840, 1.2, 15, 24, 1.4, 22, 0); // Jembatan Arteri Jl. Panjang atas Kali Pesanggrahan
    addBridge(-840, 1.2, -45, 24, 1.4, 24, 0); // Jembatan Tol Tangerang atas Kali Pesanggrahan

    // Kali Sekretaris (Sungai Pengendali Banjir Tanjung Duren -> Greenville -> Kedoya)
    addRiverSegment(-670, 220, -680, 50, 14, 1.0);  // Sukabumi Selatan ke Pos Pengumben
    addRiverSegment(-680, 50, -690, -100, 14, 1.0);  // Kebon Jeruk ke Greenville
    addRiverSegment(-690, -100, -710, -280, 14, 1.0); // Greenville ke Kedoya Utara

    // Danau Retensi Taman Cattleya Tomang Barat (Kolam Retensi Banjir Alami 55m x 45m)
    const cattleyaLakeGeo = new THREE.PlaneGeometry(55, 45);
    cattleyaLakeGeo.rotateX(-Math.PI / 2);
    cattleyaLakeGeo.translate(-530, 0.04, -110);
    waterGeos.push(cattleyaLakeGeo);
    canalWallGeos.push(makeBox(57, 0.5, 47, -530, 0.25, -110));

    // Jembatan Penyeberangan Void A:
    addBridge(-690, 1.2, -175, 20, 1.4, 18, 0); // Jembatan Jl. Greenville Raya atas Kali Sekretaris
    addBridge(-675, 1.2, 210, 22, 1.4, 18, 0);  // Jembatan Jl. Pos Pengumben atas Kali Sekretaris
    addBridge(-860, 1.2, -240, 22, 1.4, 20, 0); // Jembatan Jl. Kedoya Raya atas Kali Pesanggrahan

    // =========================================================================
    // 6. MERGE GEOMETRIES & ADD TO SCENE (Hanya 9 Draw Calls!)
    // =========================================================================
    const mergeAndAdd = (geos, mat, receiveShadow = true, castShadow = false) => {
      if (!geos || geos.length === 0) return;
      const merged = BufferGeometryUtils.mergeGeometries(geos, false);
      if (merged) {
        const mesh = new THREE.Mesh(merged, mat);
        mesh.receiveShadow = receiveShadow;
        mesh.castShadow = castShadow;
        this.proceduralGroup.add(mesh);
      }
    };

    mergeAndAdd(roadGeos, roadMat, true, false);
    mergeAndAdd(swGeos, sidewalkMat, true, false);
    mergeAndAdd(medianGeos, medianGrassMat, true, false);
    mergeAndAdd(viaductGeos, viaductMat, true, false);
    mergeAndAdd(barrierGeos, barrierMat, true, false);
    mergeAndAdd(pierGeos, pierMat, true, false);
    mergeAndAdd(waterGeos, waterMat, false, false);
    mergeAndAdd(canalWallGeos, canalWallMat, true, false);
    mergeAndAdd(bridgeGeos, bridgeMat, true, false);
  }

  /**
   * Tahap 2 Jakarta Timur: Jaringan Jalan Tol, Arteri Utama & Koridor Tata Air KBT
   *
   * 1. JALAN TOL JAKARTA TIMUR:
   *    - Tol Jagorawi (Cawang -> TMII -> Ciracas): Viaduk & at-grade expressway 8 lajur, GT Cililitan & GT TMII/Pasar Rebo.
   *    - Tol Jakarta - Cikampek: Cawang -> Halim -> Cipinang Melayu -> Bekasi + MBZ Japek Elevated upper deck (Y=14.0m) & GT Halim Utama.
   *    - Tol Becakayu (Bekasi - Cawang - Kampung Melayu): Viaduk layang di atas bantaran Kalimalang (Y=9.5m).
   *    - Tol Ir. Wiyoto Wiyono (By-Pass Cawang - Rawamangun - Tanjung Priok): Koridor layang megah utara-selatan di atas Jl. DI Panjaitan & Jl. Jend. A. Yani (Y=9.0m).
   *    - Simpang Susun Cawang Ramps & Loop Connectors.
   * 2. POROS ARTERI UTAMA JAKARTA TIMUR:
   *    - Jl. Matraman Raya -> Jl. Jatinegara Barat/Timur -> Jl. Otista -> Cawang.
   *    - Jl. Pemuda & Jl. Pramuka (Poros Rawamangun ke Matraman / Salemba).
   *    - Jl. Kolonel Sugiono & Jl. Basuki Rahmat (Casablanca Timur / Non-Tol) + Flyover Cipinang.
   *    - Jl. DI Panjaitan & Jl. Mayjen Sutoyo (Arteri By-Pass Bawah Tol).
   *    - Jl. Raya Pondok Gede & Akses Halim / TMII / Lubang Buaya.
   * 3. TATA AIR & KANAL PENGENDALI BANJIR:
   *    - Kanal Banjir Timur (KBT): Kanal megah lebar 26m dari Cipinang melengkung ke Duren Sawit, Pondok Bambu, hingga Cakung.
   *    - Kali Malang: Saluran air baku sejajar di bawah Tol Becakayu.
   *    - Kali Ciliwung Timur: Aliran Kampung Melayu ke Bidara Cina dan Cawang.
   *    - Danau Retensi Waduk Ria Rio / Pulomas.
   * 4. Jembatan-Jembatan Penyeberangan Sungai & Kanal.
   *
   * Performa Ekstrem (Geometry Merging):
   * Seluruh geometri digabungkan per material menggunakan BufferGeometryUtils.mergeGeometries.
   * Total penambahan draw calls: Hanya 9 draw calls!
   */
  buildEastJakartaInfrastructure() {
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.8,
      metalness: 0.1
    });
    const sidewalkMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createSidewalkTexture(),
      roughness: 0.8
    });
    const medianGrassMat = new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.85
    });
    const viaductMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.65
    });
    const barrierMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.5,
      roughness: 0.3
    });
    const pierMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.6
    });
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      roughness: 0.15,
      metalness: 0.85,
      side: THREE.DoubleSide
    });
    const canalWallMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.75
    });
    const bridgeMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.7
    });

    const roadGeos = [];
    const swGeos = [];
    const medianGeos = [];
    const viaductGeos = [];
    const barrierGeos = [];
    const pierGeos = [];
    const waterGeos = [];
    const canalWallGeos = [];
    const bridgeGeos = [];

    const makeBox = (w, h, d, x, y, z, rotY = 0) => {
      const g = new THREE.BoxGeometry(w, h, d);
      if (rotY !== 0) g.rotateY(rotY);
      g.translate(x, y, z);
      return g;
    };

    const addRoad = (x1, z1, x2, z2, roadWidth = 20, hasMedian = false, medianWidth = 3.0) => {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;

      // Road asphalt surface
      roadGeos.push(makeBox(roadWidth, 0.22, len + 0.3, mx, 0.11, mz, angle));

      // Sidewalks on left and right
      const swWidth = 3.2;
      [-1, 1].forEach((dir) => {
        const perpX = Math.cos(angle) * (roadWidth * 0.5 + swWidth * 0.5) * dir;
        const perpZ = -Math.sin(angle) * (roadWidth * 0.5 + swWidth * 0.5) * dir;
        swGeos.push(makeBox(swWidth, 0.35, len + 0.3, mx + perpX, 0.175, mz + perpZ, angle));
      });

      // Center median
      if (hasMedian && roadWidth >= 16) {
        medianGeos.push(makeBox(medianWidth, 0.32, len, mx, 0.16, mz, angle));
      }
    };

    const addTollViaduct = (x1, z1, x2, z2, width = 21, heightY = 8.5) => {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;

      // Concrete box girder deck
      viaductGeos.push(makeBox(width, 1.6, len + 0.6, mx, heightY, mz, angle));

      // Parapet and safety barriers
      [-1, 1].forEach((dir) => {
        const perpX = Math.cos(angle) * (width * 0.5 - 0.3) * dir;
        const perpZ = -Math.sin(angle) * (width * 0.5 - 0.3) * dir;
        barrierGeos.push(makeBox(0.6, 1.1, len + 0.6, mx + perpX, heightY + 1.15, mz + perpZ, angle));
      });

      // Support piers along viaduct length every ~38m
      const pierCount = Math.max(1, Math.floor(len / 38));
      for (let p = 0; p <= pierCount; p++) {
        const t = (p + 0.5) / (pierCount + 1);
        const px = x1 + dx * t;
        const pz = z1 + dz * t;
        pierGeos.push(makeBox(2.6, heightY, 2.6, px, heightY * 0.5, pz, angle));
        // Crosshead hammerhead pier cap
        pierGeos.push(makeBox(width * 0.85, 1.4, 3.2, px, heightY - 0.7, pz, angle));
      }
    };

    const addCurvedRamp = (x1, z1, y1, x2, z2, y2, width = 9.5) => {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;
      const my = (y1 + y2) * 0.5;

      viaductGeos.push(makeBox(width, 1.2, len + 0.4, mx, my, mz, angle));

      [-1, 1].forEach((dir) => {
        const perpX = Math.cos(angle) * (width * 0.5 - 0.25) * dir;
        const perpZ = -Math.sin(angle) * (width * 0.5 - 0.25) * dir;
        barrierGeos.push(makeBox(0.5, 0.9, len + 0.4, mx + perpX, my + 0.95, mz + perpZ, angle));
      });

      pierGeos.push(makeBox(2.2, my, 2.2, mx, my * 0.5, mz, angle));
    };

    const addRiverSegment = (x1, z1, x2, z2, width = 26, depth = 1.4) => {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const mx = (x1 + x2) * 0.5;
      const mz = (z1 + z2) * 0.5;

      // Water surface
      waterGeos.push(makeBox(width, 0.2, len + 0.4, mx, -0.05, mz, angle));

      // Stone/Concrete canal retaining walls
      [-1, 1].forEach((dir) => {
        const perpX = Math.cos(angle) * (width * 0.5 + 0.6) * dir;
        const perpZ = -Math.sin(angle) * (width * 0.5 + 0.6) * dir;
        canalWallGeos.push(makeBox(1.2, depth + 0.4, len + 0.4, mx + perpX, 0.2, mz + perpZ, angle));
      });
    };

    const addBridge = (x, y, z, width, height, length, rotY = 0) => {
      bridgeGeos.push(makeBox(width, height, length, x, y, z, rotY));
    };

    // =========================================================================
    // 1. JALAN TOL JAGORAWI (JAKARTA - BOGOR - CIAWI)
    // Poros tol selatan pertama Indonesia: Cawang -> Cililitan -> TMII -> Ciracas/Pasar Rebo
    // =========================================================================
    addTollViaduct(712, 724, 780, 950, 24, 7.5);   // Segmen 1: Cawang ke Cililitan
    addTollViaduct(780, 950, 890, 1220, 24, 6.5);  // Segmen 2: Cililitan ke Kramat Jati
    addTollViaduct(890, 1220, 1040, 1550, 24, 6.5); // Segmen 3: Kramat Jati ke TMII Interchange
    addTollViaduct(1040, 1550, 1120, 1850, 24, 6.5); // Segmen 4: TMII ke Ciracas / Pasar Rebo (Batas Selatan)

    // Kanopi Gerbang Tol (GT Cililitan & GT TMII)
    viaductGeos.push(makeBox(32, 1.4, 8, 770, 8.8, 930, 0.3));
    viaductGeos.push(makeBox(32, 1.4, 8, 1020, 8.8, 1520, 0.3));

    // =========================================================================
    // 2. JALAN TOL JAKARTA - CIKAMPEK (TOL JAPEK & JAPEK ELEVATED / MBZ)
    // Poros urat nadi Trans Jawa: Cawang -> Halim -> Cipinang Melayu -> Perbatasan Bekasi
    // Termasuk double-decker elevated viaduct Y=14.0m
    // =========================================================================
    addTollViaduct(712, 724, 893, 993, 22, 7.5);    // Segmen 1: Cawang ke Halim Perdanakusuma
    addTollViaduct(893, 993, 1150, 1080, 22, 7.5);  // Segmen 2: Halim ke Cipinang Melayu / Kalimalang
    addTollViaduct(1150, 1080, 1450, 1150, 22, 7.5); // Segmen 3: Cipinang Melayu ke Perbatasan Bekasi

    // Upper Deck MBZ / Japek Elevated Viaduct (Elevasi Y=14.0m di atas tol bawah)
    addTollViaduct(893, 993, 1150, 1080, 18, 14.0);
    addTollViaduct(1150, 1080, 1450, 1150, 18, 14.0);

    // Kanopi Gerbang Tol Halim Utama
    viaductGeos.push(makeBox(34, 1.4, 8, 920, 8.8, 1010, 0.42));

    // =========================================================================
    // 3. JALAN TOL BECAKAYU (BEKASI - CAWANG - KAMPUNG MELAYU)
    // Viaduk layang ikonik di atas koridor Kalimalang (Y=9.5m):
    // Cawang / DI Panjaitan -> Cipinang Bali -> Duren Sawit / Pondok Kelapa
    // =========================================================================
    addTollViaduct(712, 600, 1050, 680, 19, 9.5);  // Segmen 1: Cawang ke Cipinang Bali
    addTollViaduct(1050, 680, 1400, 720, 19, 9.5); // Segmen 2: Cipinang Bali ke Duren Sawit / Pondok Kelapa

    // =========================================================================
    // 4. JALAN TOL IR. WIYOTO WIYONO (BY-PASS CAWANG - RAWAMANGUN - TANJUNG PRIOK)
    // Viaduk layang utara-selatan di atas Jl. DI Panjaitan & Jl. Jend. A. Yani (Y=9.0m):
    // Cawang -> Kebon Nanas -> Simpang Pramuka -> Velodrome Rawamangun -> Pulomas / Priok
    // =========================================================================
    addTollViaduct(712, 724, 720, 320, 21, 9.0);   // Segmen 1: Cawang ke Kebon Nanas
    addTollViaduct(720, 320, 800, 50, 21, 9.0);    // Segmen 2: Kebon Nanas ke Simpang Pramuka
    addTollViaduct(800, 50, 945, -57, 21, 9.0);    // Segmen 3: Simpang Pramuka ke Velodrome Rawamangun
    addTollViaduct(945, -57, 850, -350, 21, 9.0);  // Segmen 4: Velodrome ke Pulomas / By-Pass Priok (Menyambung Tol Pelabuhan)

    // =========================================================================
    // 5. SIMPANG SUSUN CAWANG LOOPS & CONNECTORS
    // Ramp lengkung menghubungkan 4 penjuru jalan tol di Cawang
    // =========================================================================
    addCurvedRamp(650, 724, 7.5, 712, 660, 9.5, 9.5);  // Ramp Tol Dalam Kota -> By-Pass Priok
    addCurvedRamp(712, 660, 9.5, 780, 724, 7.5, 9.5);  // Ramp By-Pass Priok -> Tol Cikampek
    addCurvedRamp(780, 724, 7.5, 712, 780, 9.5, 9.5);  // Ramp Tol Cikampek -> Tol Jagorawi
    addCurvedRamp(712, 780, 9.5, 650, 724, 7.5, 9.5);  // Ramp Tol Jagorawi -> Tol Dalam Kota

    // =========================================================================
    // 6. POROS ARTERI UTAMA JAKARTA TIMUR
    // =========================================================================
    // A. Koridor Jl. Matraman Raya -> Jl. Jatinegara Barat/Timur -> Jl. Otista -> Cawang
    addRoad(420, -120, 550, 80, 22, true, 3.0);   // Matraman Raya Utara (Akses Salemba)
    addRoad(550, 80, 666, 282, 24, true, 3.5);    // Matraman ke Stasiun Jatinegara
    addRoad(666, 282, 580, 420, 24, true, 3.5);   // Jatinegara ke Terminal Kampung Melayu
    addRoad(580, 420, 640, 580, 22, true, 3.0);   // Kampung Melayu ke Jl. Otista
    addRoad(640, 580, 712, 724, 24, true, 3.5);   // Jl. Otista ke Simpang Susun Cawang

    // B. Koridor Jl. Pemuda & Jl. Pramuka (Poros Rawamangun ke Matraman)
    addRoad(420, -120, 620, -90, 22, true, 3.0);  // Jl. Pramuka (Matraman ke Simpang By-Pass)
    addRoad(620, -90, 945, -57, 24, true, 3.5);   // Jl. Pemuda Barat (Depan Velodrome Rawamangun)
    addRoad(945, -57, 1350, -30, 22, true, 3.0);  // Jl. Pemuda Timur (Menuju Pulogadung)

    // C. Koridor Jl. Kolonel Sugiono & Jl. Basuki Rahmat (Casablanca Timur / Non-Tol)
    addRoad(450, 520, 580, 520, 22, true, 3.0);   // Sambungan Flyover Casablanca Tebet ke Kp. Melayu
    addRoad(580, 520, 850, 520, 22, true, 3.0);   // Jl. Basuki Rahmat (Kp. Melayu ke Cipinang Besar)
    addRoad(850, 520, 1200, 520, 22, true, 3.0);  // Jl. Kolonel Sugiono (Cipinang ke Duren Sawit)

    // Flyover Cipinang (Jembatan Layang Non-Tol di atas perlintasan rel/simpang)
    addCurvedRamp(800, 520, 0.8, 870, 520, 6.0, 11.0);
    addCurvedRamp(870, 520, 6.0, 940, 520, 0.8, 11.0);

    // D. Koridor Jl. DI Panjaitan & Jl. Mayjen Sutoyo (Arteri By-Pass Bawah Tol)
    addRoad(720, 320, 712, 724, 22, true, 3.0);   // Kebon Nanas ke Cawang
    addRoad(712, 724, 780, 950, 22, true, 3.0);   // Cawang ke PGC Cililitan
    addRoad(720, 320, 800, 50, 22, true, 3.0);    // Kebon Nanas ke Pramuka

    // E. Koridor Jl. Raya Pondok Gede & Akses Halim / TMII / Lubang Buaya
    addRoad(893, 993, 1182, 1324, 18, false);     // Akses Bandara Halim ke Monumen Pancasila Sakti
    addRoad(1182, 1324, 1040, 1551, 18, false);   // Monumen Pancasila Sakti ke Gerbang TMII
    addRoad(1040, 1551, 1040, 1480, 20, true, 2.5); // Jl. Raya Taman Mini ke Akses Tol Jagorawi

    // =========================================================================
    // 7. TATA AIR & KANAL PENGENDALI BANJIR JAKARTA TIMUR
    // =========================================================================
    // A. Kanal Banjir Timur (KBT / Eastern Flood Canal)
    // Mengalir megah dari Cipinang melengkung ke Duren Sawit, Pondok Bambu, hingga Cakung
    addRiverSegment(850, 580, 1150, 350, 26, 1.4);  // KBT Segmen 1: Cipinang ke Duren Sawit
    addRiverSegment(1150, 350, 1320, 100, 26, 1.4); // KBT Segmen 2: Duren Sawit ke Pondok Bambu
    addRiverSegment(1320, 100, 1500, -250, 26, 1.4); // KBT Segmen 3: Pondok Bambu ke Pulogebang / Cakung

    // Jalan Inspeksi Ganda & Jalur Hijau Tanggul KBT
    addRoad(855, 595, 1155, 365, 8, false); // Inspeksi Sisi Timur Segmen 1
    addRoad(845, 565, 1145, 335, 8, false); // Inspeksi Sisi Barat Segmen 1
    addRoad(1155, 365, 1325, 115, 8, false); // Inspeksi Sisi Timur Segmen 2
    addRoad(1145, 335, 1315, 85, 8, false);  // Inspeksi Sisi Barat Segmen 2

    // B. Kali Malang (Saluran Air Baku Tarum Barat di bawah Tol Becakayu)
    addRiverSegment(720, 600, 1050, 680, 16, 1.2);  // Kali Malang Segmen 1: Cawang ke Cipinang Melayu
    addRiverSegment(1050, 680, 1400, 720, 16, 1.2); // Kali Malang Segmen 2: Cipinang Melayu ke Pondok Kelapa

    // C. Kali Ciliwung Timur (Aliran Ciliwung Kampung Melayu - Cawang)
    addRiverSegment(570, 380, 610, 480, 18, 1.2);   // Ciliwung Kp. Melayu ke Bidara Cina
    addRiverSegment(610, 480, 680, 700, 18, 1.2);   // Ciliwung Bidara Cina ke Cawang

    // D. Waduk Ria Rio / Pulomas (Danau Retensi Pengendali Banjir Timur Laut)
    const riaRioWaterGeo = new THREE.CylinderGeometry(28, 28, 0.8, 24);
    riaRioWaterGeo.scale(1.25, 1.0, 0.9);
    riaRioWaterGeo.translate(850, -0.1, -280);
    waterGeos.push(riaRioWaterGeo);

    // Tanggul & Taman Riparian Waduk Ria Rio
    const riaRioParkGeo = new THREE.RingGeometry(28, 36, 24);
    riaRioParkGeo.rotateX(-Math.PI / 2);
    riaRioParkGeo.scale(1.25, 1.0, 0.9);
    riaRioParkGeo.translate(850, 0.15, -280);
    medianGeos.push(riaRioParkGeo);

    // =========================================================================
    // 8. JEMBATAN-JEMBATAN PENYEBERANGAN SUNGAI & KANAL
    // =========================================================================
    addBridge(1020, 1.2, 450, 24, 1.4, 30, 0.65); // Jembatan KBT Casablanca (Jl. Kolonel Sugiono)
    addBridge(1230, 1.2, 220, 24, 1.4, 30, 0.65); // Jembatan KBT Raden Inten / Duren Sawit
    addBridge(890, 8.2, 680, 26, 1.4, 22, 0);     // Jembatan Tol Becakayu & Arteri atas Kali Malang
    addBridge(570, 1.2, 380, 26, 1.4, 24, 0);     // Jembatan Kampung Melayu atas Kali Ciliwung
    addBridge(712, 1.2, 640, 26, 1.4, 22, 0);     // Jembatan Arteri Otista / MT Haryono atas Ciliwung Cawang

    // =========================================================================
    // 9. MERGE GEOMETRIES & ADD TO SCENE (Hanya 9 Draw Calls!)
    // =========================================================================
    const mergeAndAdd = (geos, mat, receiveShadow = true, castShadow = false) => {
      if (!geos || geos.length === 0) return;
      const merged = BufferGeometryUtils.mergeGeometries(geos, false);
      if (merged) {
        const mesh = new THREE.Mesh(merged, mat);
        mesh.receiveShadow = receiveShadow;
        mesh.castShadow = castShadow;
        this.proceduralGroup.add(mesh);
      }
    };

    mergeAndAdd(roadGeos, roadMat, true, false);
    mergeAndAdd(swGeos, sidewalkMat, true, false);
    mergeAndAdd(medianGeos, medianGrassMat, true, false);
    mergeAndAdd(viaductGeos, viaductMat, true, false);
    mergeAndAdd(barrierGeos, barrierMat, true, false);
    mergeAndAdd(pierGeos, pierMat, true, false);
    mergeAndAdd(waterGeos, waterMat, false, false);
    mergeAndAdd(canalWallGeos, canalWallMat, true, false);
    mergeAndAdd(bridgeGeos, bridgeMat, true, false);
  }

  /**
   * Tahap 3 Jakarta Utara: Infill Urban Fabric, Distrik Logistik Tanjung Priok & Hutan Mangrove Pesisir.
   *
   * Performa Ekstrem (Instanced Rendering):
   * 1. 240+ Peti kemas kontainer dermaga Priok dirender via 1 InstancedMesh multi-warna.
   * 2. 120+ Ruko komersial & perumahan modern Kelapa Gading / Sunter dirender via 1 InstancedMesh.
   * 3. 16+ Gudang logistik kargo pelabuhan Priok dirender via 1 InstancedMesh.
   * 4. 140+ Vegetasi mangrove & cemara udang pesisir Teluk Jakarta dirender via 2 InstancedMesh.
   * Total hanya 5 draw calls untuk seluruh infill Jakarta Utara!
   */
  buildNorthJakartaInfillAndLogistics() {
    const dummy = new THREE.Object3D();
    const baseBoxGeo = new THREE.BoxGeometry(1, 1, 1);

    // =========================================================================
    // 1. TERMINAL PETI KEMAS KONTAINER PELABUHAN TANJUNG PRIOK (1 Draw Call)
    // =========================================================================
    const containerMat = new THREE.MeshStandardMaterial({
      roughness: 0.5,
      metalness: 0.35
    });

    const containerItems = [];
    const shippingColors = [
      new THREE.Color(0x0080a5), // Maersk Blue
      new THREE.Color(0x006633), // Evergreen Green
      new THREE.Color(0xeb5310), // Hapag-Lloyd Orange
      new THREE.Color(0xd91458), // ONE Magenta
      new THREE.Color(0x0a192f), // CMA CGM Navy
      new THREE.Color(0x8b0000), // K-Line Crimson
      new THREE.Color(0x1d4ed8), // Cosco Blue
      new THREE.Color(0xcbd5e1)  // Silver Grey
    ];

    const yardBays = [
      // Yard Timur (Koja / JICT)
      { startX: 865, endX: 975, stepX: 22.0, startZ: -1210, endZ: -1310, stepZ: 4.8, maxTiers: 4 },
      // Yard Barat (Terminal 1 Priok)
      { startX: 730, endX: 810, stepX: 20.0, startZ: -1230, endZ: -1310, stepZ: 4.8, maxTiers: 3 }
    ];

    yardBays.forEach((bay) => {
      for (let x = bay.startX; x <= bay.endX; x += bay.stepX) {
        for (let z = bay.startZ; z <= bay.endZ; z += bay.stepZ) {
          const hash = Math.abs(Math.sin(x * 12.9898 + z * 78.233));
          const is40ft = hash > 0.4;
          const len = is40ft ? 12.0 : 6.0;
          const tiers = 1 + Math.floor(hash * bay.maxTiers);

          for (let tier = 0; tier < tiers; tier++) {
            const y = 1.3 + tier * 2.6;
            const colorIdx = Math.floor((hash * 100 + tier * 3) % shippingColors.length);
            containerItems.push({
              x: x + (is40ft ? 0 : (tier % 2 === 0 ? -3 : 3)),
              y,
              z,
              w: 2.44,
              h: 2.58,
              d: len,
              color: shippingColors[colorIdx]
            });
          }
        }
      }
    });

    if (containerItems.length > 0) {
      const containerMesh = new THREE.InstancedMesh(baseBoxGeo, containerMat, containerItems.length);
      containerMesh.receiveShadow = true;
      containerMesh.castShadow = false;

      containerItems.forEach((c, idx) => {
        dummy.position.set(c.x, c.y, c.z);
        dummy.scale.set(c.w, c.h, c.d);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        containerMesh.setMatrixAt(idx, dummy.matrix);
        containerMesh.setColorAt(idx, c.color);
      });

      containerMesh.instanceMatrix.needsUpdate = true;
      if (containerMesh.instanceColor) containerMesh.instanceColor.needsUpdate = true;
      this.proceduralGroup.add(containerMesh);
    }

    // =========================================================================
    // 2. INFILL RUKO KOMERSIAL & RESIDENSIAL MODERN KELAPA GADING & SUNTER (1 Draw Call)
    // =========================================================================
    const infillMat = new THREE.MeshStandardMaterial({
      roughness: 0.75,
      metalness: 0.15
    });

    const infillItems = [];
    const infillColors = [
      new THREE.Color(0xf8fafc), // Clean white
      new THREE.Color(0xe2e8f0), // Light slate
      new THREE.Color(0xd7c4b7), // Warm beige
      new THREE.Color(0x94a3b8), // Modern grey
      new THREE.Color(0x334155), // Charcoal ruko
      new THREE.Color(0x0f766e)  // Teal accent
    ];

    // Kelapa Gading Boulevard Shophouses (Ruko 3-4 Lantai)
    for (let z = -280; z >= -760; z -= 32) {
      if (Math.abs(z - (-531)) < 60) continue; // Skip Mall Kelapa Gading zone
      const h1 = 12 + ((Math.abs(z) % 7) * 0.8);
      infillItems.push({ x: 1165, y: h1 * 0.5, z, w: 14, h: h1, d: 18, color: infillColors[Math.abs(z) % infillColors.length] });
      const h2 = 14 + ((Math.abs(z) % 5) * 0.7);
      infillItems.push({ x: 1235, y: h2 * 0.5, z, w: 14, h: h2, d: 18, color: infillColors[(Math.abs(z) + 2) % infillColors.length] });
      infillItems.push({ x: 1110, y: 4.5, z, w: 12, h: 9.0, d: 14, color: infillColors[(Math.abs(z) + 1) % infillColors.length] });
      infillItems.push({ x: 1285, y: 4.5, z, w: 12, h: 9.0, d: 14, color: infillColors[(Math.abs(z) + 3) % infillColors.length] });
    }

    // Sunter Modern Residential & Commercial Blocks
    for (let z = -650; z >= -860; z -= 35) {
      infillItems.push({ x: 505, y: 5.0, z, w: 16, h: 10.0, d: 16, color: infillColors[Math.abs(z) % infillColors.length] });
      infillItems.push({ x: 655, y: 7.0, z, w: 15, h: 14.0, d: 15, color: infillColors[(Math.abs(z) + 1) % infillColors.length] });
      infillItems.push({ x: 795, y: 5.5, z, w: 14, h: 11.0, d: 16, color: infillColors[(Math.abs(z) + 4) % infillColors.length] });
    }

    // Pluit & Penjaringan Residential Townhouses
    for (let z = -940; z >= -1080; z -= 34) {
      infillItems.push({ x: -475, y: 4.5, z, w: 15, h: 9.0, d: 15, color: infillColors[Math.abs(z) % infillColors.length] });
      infillItems.push({ x: -265, y: 5.25, z, w: 14, h: 10.5, d: 15, color: infillColors[(Math.abs(z) + 2) % infillColors.length] });
    }

    if (infillItems.length > 0) {
      const infillMesh = new THREE.InstancedMesh(baseBoxGeo, infillMat, infillItems.length);
      infillMesh.receiveShadow = true;

      infillItems.forEach((b, idx) => {
        dummy.position.set(b.x, b.y, b.z);
        dummy.scale.set(b.w, b.h, b.d);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        infillMesh.setMatrixAt(idx, dummy.matrix);
        infillMesh.setColorAt(idx, b.color);
      });

      infillMesh.instanceMatrix.needsUpdate = true;
      if (infillMesh.instanceColor) infillMesh.instanceColor.needsUpdate = true;
      this.proceduralGroup.add(infillMesh);
    }

    // =========================================================================
    // 3. KOMPLEKS PERGUDANGAN LOGISTIK PELABUHAN PRIOK (1 Draw Call)
    // =========================================================================
    const warehouseMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.65,
      metalness: 0.35
    });

    const warehouseItems = [];
    for (let x = 750; x <= 920; x += 45) {
      for (let z = -1130; z >= -1170; z -= 30) {
        warehouseItems.push({ x, y: 6.0, z, w: 32, h: 12.0, d: 22 });
      }
    }

    if (warehouseItems.length > 0) {
      const whMesh = new THREE.InstancedMesh(baseBoxGeo, warehouseMat, warehouseItems.length);
      whMesh.receiveShadow = true;

      warehouseItems.forEach((w, idx) => {
        dummy.position.set(w.x, w.y, w.z);
        dummy.scale.set(w.w, w.h, w.d);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        whMesh.setMatrixAt(idx, dummy.matrix);
      });

      whMesh.instanceMatrix.needsUpdate = true;
      this.proceduralGroup.add(whMesh);
    }

    // =========================================================================
    // 4. VEGETASI HUTAN MANGROVE & CEMARA UDANG PESISIR TELUK JAKARTA (2 Draw Calls)
    // =========================================================================
    const mangroveTrunkMat = new THREE.MeshStandardMaterial({
      color: 0x3e2723,
      roughness: 0.9
    });
    const mangroveFoliageMat = new THREE.MeshStandardMaterial({
      color: 0x1b4332,
      roughness: 0.85
    });

    const mangroveTransforms = [];
    const addTree = (x, z, scale = 1.0) => {
      mangroveTransforms.push({ x, z, scale });
    };

    // Sabuk Hutan Mangrove Penjaringan & Waduk Pluit
    for (let z = -990; z >= -1130; z -= 18) {
      addTree(-445 + Math.sin(z) * 6, z, 0.9 + Math.abs(Math.sin(z)) * 0.3);
      addTree(-290 + Math.cos(z) * 5, z, 0.85 + Math.abs(Math.cos(z)) * 0.3);
    }

    // Garis Pantai Teluk Jakarta & Pesisir Ancol
    for (let x = -80; x <= 360; x += 22) {
      addTree(x, -1035 + Math.sin(x * 0.1) * 4, 1.0 + Math.abs(Math.sin(x)) * 0.35);
    }

    // Promenade Tepian Danau Sunter
    for (let z = -660; z >= -880; z -= 24) {
      addTree(558, z, 0.95);
      addTree(622, z, 0.95);
      addTree(778, z, 0.95);
    }

    if (mangroveTransforms.length > 0) {
      const trunkGeo = new THREE.CylinderGeometry(0.24, 0.40, 3.8, 6);
      const foliageGeo = new THREE.ConeGeometry(2.6, 5.5, 7);
      const trunkMesh = new THREE.InstancedMesh(trunkGeo, mangroveTrunkMat, mangroveTransforms.length);
      const foliageMesh = new THREE.InstancedMesh(foliageGeo, mangroveFoliageMat, mangroveTransforms.length);

      trunkMesh.receiveShadow = true;
      foliageMesh.receiveShadow = true;

      mangroveTransforms.forEach((t, idx) => {
        // Trunk
        dummy.position.set(t.x, 1.9 * t.scale, t.z);
        dummy.scale.set(t.scale, t.scale, t.scale);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        trunkMesh.setMatrixAt(idx, dummy.matrix);

        // Foliage
        dummy.position.set(t.x, (3.8 + 2.5) * t.scale, t.z);
        dummy.scale.set(t.scale, t.scale, t.scale);
        dummy.updateMatrix();
        foliageMesh.setMatrixAt(idx, dummy.matrix);
      });

      trunkMesh.instanceMatrix.needsUpdate = true;
      foliageMesh.instanceMatrix.needsUpdate = true;
      this.proceduralGroup.add(trunkMesh);
      this.proceduralGroup.add(foliageMesh);
    }
  }

  /**
   * Tahap 3 Jakarta Barat: Infill Urban Fabric, Distrik Residensial Puri Indah, Ruko Kebon Jeruk & Peranakan Glodok.
   *
   * Performa Ekstrem (Instanced Rendering):
   * 1. 140+ Ruko Peranakan Tionghoa Glodok & Pinangsia (2-3 lantai atap genteng pelana, multi-warna).
   * 2. 180+ Residensial modern Puri Indah, Kembangan & Meruya (townhouse & cluster minimalis).
   * 3. 110+ Ruko komersial & sentra niaga Kebon Jeruk (Jl. Panjang & Kedoya) & Daan Mogot Pesing.
   * 4. 150+ Vegetasi pohon tropis: Palem Raja (Puri Indah) & Angsana rindang (Jl. Panjang & Daan Mogot).
   * Total penambahan draw calls: Hanya 6 draw calls!
   */
  buildWestJakartaInfillAndDistricts() {
    const dummy = new THREE.Object3D();
    const baseBoxGeo = new THREE.BoxGeometry(1, 1, 1);

    // =========================================================================
    // 1. RUKO PERANAKAN TIONGHOA GLODOK, PINANGSIA & PETAK SEMBILAN (2 Draw Calls)
    // =========================================================================
    const glodokShophouseMat = new THREE.MeshStandardMaterial({ roughness: 0.75, metalness: 0.1 });
    const glodokRoofMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.65 });

    const glodokColors = [
      new THREE.Color(0xfef3c7), // Cream Wall
      new THREE.Color(0xb45309), // Terracotta
      new THREE.Color(0x991b1b), // Red Lacquer
      new THREE.Color(0xd97706), // Ochre Yellow
      new THREE.Color(0x0f766e), // Jade Green
      new THREE.Color(0xf1f5f9)  // Stucco White
    ];

    const glodokBldItems = [];
    const glodokRoofItems = [];

    // Blok Glodok Barat (Pancoran, Petak Sembilan, Pinangsia)
    for (let x = -190; x <= -60; x += 15) {
      for (let z = -740; z <= -620; z += 16) {
        // Jangan timpa jalan atau landmark Glodok
        if (Math.abs(x - (-120)) < 16 && Math.abs(z - (-680)) < 24) continue;
        if (Math.abs(x - (-95)) < 14) continue; // Jl. Gajah Mada koridor
        if (Math.abs(z - (-640)) < 12) continue; // Jl. Mangga Besar Barat

        const hash = Math.abs(Math.sin(x * 12.9898 + z * 78.233));
        const h = 8 + hash * 6; // 8m - 14m (2-3 lantai)
        const w = 11 + (hash * 3);
        const d = 12 + ((1 - hash) * 3);
        const colIdx = Math.floor(hash * glodokColors.length) % glodokColors.length;

        glodokBldItems.push({
          x: x + (hash - 0.5) * 3,
          y: h * 0.5,
          z: z + (hash - 0.5) * 3,
          w,
          h,
          d,
          color: glodokColors[colIdx]
        });

        // Atap pelana peranakan genteng merah
        glodokRoofItems.push({
          x: x + (hash - 0.5) * 3,
          y: h + 1.2,
          z: z + (hash - 0.5) * 3,
          w: w + 0.8,
          h: 2.2,
          d: d + 0.8
        });
      }
    }

    if (glodokBldItems.length > 0) {
      const bldMesh = new THREE.InstancedMesh(baseBoxGeo, glodokShophouseMat, glodokBldItems.length);
      bldMesh.receiveShadow = true;
      bldMesh.castShadow = true;

      glodokBldItems.forEach((b, idx) => {
        dummy.position.set(b.x, b.y, b.z);
        dummy.scale.set(b.w, b.h, b.d);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        bldMesh.setMatrixAt(idx, dummy.matrix);
        bldMesh.setColorAt(idx, b.color);
      });

      bldMesh.instanceMatrix.needsUpdate = true;
      if (bldMesh.instanceColor) bldMesh.instanceColor.needsUpdate = true;
      this.proceduralGroup.add(bldMesh);

      const roofMesh = new THREE.InstancedMesh(baseBoxGeo, glodokRoofMat, glodokRoofItems.length);
      roofMesh.receiveShadow = true;
      roofMesh.castShadow = true;

      glodokRoofItems.forEach((r, idx) => {
        dummy.position.set(r.x, r.y, r.z);
        dummy.scale.set(r.w, r.h, r.d);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        roofMesh.setMatrixAt(idx, dummy.matrix);
      });

      roofMesh.instanceMatrix.needsUpdate = true;
      this.proceduralGroup.add(roofMesh);
    }

    // =========================================================================
    // 2. RESIDENSIAL KLUSTER MODERN PURI INDAH & KEMBANGAN (1 Draw Call)
    // =========================================================================
    const residentialMat = new THREE.MeshStandardMaterial({
      roughness: 0.7,
      metalness: 0.15
    });

    const residentialColors = [
      new THREE.Color(0xf8fafc), // Pure White
      new THREE.Color(0xe2e8f0), // Light Gray
      new THREE.Color(0xcbd5e1), // Slate
      new THREE.Color(0xd97706), // Warm Timber Accent
      new THREE.Color(0x334155), // Charcoal Gray
      new THREE.Color(0x94a3b8)  // Modern Concrete
    ];

    const residentialItems = [];
    const residentialZones = [
      // Zona 1: Puri Indah Utara & Barat (sekitar Lippo Mall Puri & The St. Moritz)
      { minX: -1280, maxX: -1110, stepX: 20, minZ: -200, maxZ: -115, stepZ: 20, baseH: 8, maxH: 14 },
      // Zona 2: Puri Indah Selatan (sekitar Puri Indah Mall)
      { minX: -1080, maxX: -940, stepX: 18, minZ: -190, maxZ: -120, stepZ: 18, baseH: 7, maxH: 12 },
      // Zona 3: Kembangan Selatan / Perumahan Walikota
      { minX: -1120, maxX: -940, stepX: 18, minZ: -40, maxZ: 60, stepZ: 18, baseH: 7, maxH: 13 },
      // Zona 4: Meruya Utara / Kebon Jeruk Barat
      { minX: -1100, maxX: -910, stepX: 20, minZ: 85, maxZ: 180, stepZ: 20, baseH: 7, maxH: 12 },
      // Zona 5 (Void A): Greenville & Taman Ratu Indah (Residensial Mapan)
      { minX: -760, maxX: -600, stepX: 18, minZ: -250, maxZ: -130, stepZ: 18, baseH: 7.5, maxH: 12.5 },
      // Zona 6 (Void A): Sunrise Garden & Kedoya Baru (Barat Kali Pesanggrahan)
      { minX: -940, maxX: -795, stepX: 18, minZ: -280, maxZ: -150, stepZ: 18, baseH: 7.5, maxH: 13.0 },
      // Zona 7 (Void A): Kedoya Selatan & Sukabumi Utara (Antara Tol dan Kemanggisan)
      { minX: -760, maxX: -600, stepX: 18, minZ: -75, maxZ: 110, stepZ: 18, baseH: 7.0, maxH: 12.0 },
      // Zona 8 (Void A): Sukabumi Selatan & Pos Pengumben Timur/Barat
      { minX: -940, maxX: -600, stepX: 18, minZ: 130, maxZ: 280, stepZ: 18, baseH: 7.0, maxH: 12.5 }
    ];

    residentialZones.forEach((zone) => {
      for (let x = zone.minX; x <= zone.maxX; x += zone.stepX) {
        for (let z = zone.minZ; z <= zone.maxZ; z += zone.stepZ) {
          // Lewati posisi landmark #58, #59, #60
          if (Math.abs(x - (-1040)) < 36 && Math.abs(z - (-90)) < 36) continue; // Walikota Jakbar
          if (Math.abs(x - (-1185)) < 55 && Math.abs(z - (-75)) < 50) continue; // Lippo Mall Puri
          if (Math.abs(x - (-1010)) < 45 && Math.abs(z - (-100)) < 40) continue; // Puri Indah Mall
          // Lewati koridor Tol JORR W1 dan Tol Tangerang
          if (Math.abs(x - (-1040)) < 16) continue;
          if (Math.abs(z - (-85)) < 16) continue;
          // Lewati landmark Void A (#70 s.d. #75) dan koridor Jl. Panjang
          if (Math.abs(x - (-775)) < 28 && Math.abs(z - (-260)) < 28) continue; // RS Graha Kedoya
          if (Math.abs(x - (-790)) < 26 && Math.abs(z - (-95)) < 26) continue;  // Wang Residence
          if (Math.abs(x - (-710)) < 28 && Math.abs(z - (-210)) < 28) continue; // IPEKA Greenville
          if (Math.abs(x - (-680)) < 26 && Math.abs(z - (-160)) < 26) continue; // Sentra Kuliner Greenville
          if (Math.abs(x - (-775)) < 28 && Math.abs(z - 210) < 28) continue;    // Sentra Pos Pengumben
          if (Math.abs(x - (-530)) < 36 && Math.abs(z - (-110)) < 36) continue; // Taman Cattleya
          if (Math.abs(x - (-785)) < 28 && Math.abs(z - 30) < 28) continue;     // RCTI MNC Studios
          if (Math.abs(x - (-775)) < 26 && Math.abs(z - 12) < 26) continue;     // Museum MACAN
          // Lewati koridor jalan arteri dan kanal sungai Void A
          if (Math.abs(x - (-775)) < 14) continue; // Jl. Panjang
          if (Math.abs(z - 210) < 14) continue;   // Jl. Pos Pengumben Raya
          if (Math.abs(z - (-180)) < 14 && x > -775 && x < -580) continue; // Jl. Greenville Raya
          if (Math.abs(z - (-45)) < 16) continue; // Koridor Tol Jakarta-Tangerang
          if (Math.abs(x - (-840)) < 12) continue; // Kali Pesanggrahan
          if (Math.abs(x - (-680)) < 12 && z > -250 && z < 220) continue; // Kali Sekretaris
          if (Math.abs(x - (-970)) < 16) continue; // Kali Angke
          if (this.isNearVoidCRoad(x, z, 16)) continue; // Koridor jalan OSM Void C

          const hash = Math.abs(Math.sin(x * 12.9898 + z * 78.233));
          const h = zone.baseH + hash * (zone.maxH - zone.baseH);
          const w = 12 + (hash * 4);
          const d = 13 + ((1 - hash) * 4);
          const colIdx = Math.floor(hash * residentialColors.length) % residentialColors.length;

          residentialItems.push({
            x: x + (hash - 0.5) * 4,
            y: h * 0.5,
            z: z + (hash - 0.5) * 4,
            w,
            h,
            d,
            color: residentialColors[colIdx]
          });
        }
      }
    });

    if (residentialItems.length > 0) {
      const resMesh = new THREE.InstancedMesh(baseBoxGeo, residentialMat, residentialItems.length);
      resMesh.receiveShadow = true;
      resMesh.castShadow = true;

      residentialItems.forEach((item, idx) => {
        dummy.position.set(item.x, item.y, item.z);
        dummy.scale.set(item.w, item.h, item.d);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        resMesh.setMatrixAt(idx, dummy.matrix);
        resMesh.setColorAt(idx, item.color);
      });

      resMesh.instanceMatrix.needsUpdate = true;
      if (resMesh.instanceColor) resMesh.instanceColor.needsUpdate = true;
      this.proceduralGroup.add(resMesh);
    }

    // =========================================================================
    // 3. SENTRA RUKO & PERKANTORAN MODERN KEBON JERUK & DAAN MOGOT (1 Draw Call)
    // =========================================================================
    const commercialMat = new THREE.MeshStandardMaterial({
      roughness: 0.65,
      metalness: 0.3
    });

    const commercialColors = [
      new THREE.Color(0x1e293b), // Graphite Glass
      new THREE.Color(0x334155), // Steel Slate
      new THREE.Color(0x475569), // Corporate Blue-Gray
      new THREE.Color(0x0284c7), // Cyan Glass
      new THREE.Color(0xf1f5f9), // White Panel
      new THREE.Color(0x0f766e)  // Teal Accent
    ];

    const commercialItems = [];

    // Koridor Jl. Panjang & Kebon Jeruk Intercon (sekeliling RCTI & Museum MACAN)
    for (let z = -140; z <= 120; z += 22) {
      [-815, -735].forEach((x) => {
        // Hindari menabrak RCTI [-785, 30] dan Museum MACAN [-775, 12]
        if (Math.abs(x - (-785)) < 30 && Math.abs(z - 30) < 32) return;
        if (Math.abs(x - (-775)) < 26 && Math.abs(z - 12) < 28) return;
        if (Math.abs(z - (-45)) < 20) return; // Underpass Tol Tangerang

        const hash = Math.abs(Math.sin(x * 12.9898 + z * 78.233));
        const h = 14 + hash * 16; // 14m - 30m (4-8 lantai)
        const colIdx = Math.floor(hash * commercialColors.length) % commercialColors.length;

        commercialItems.push({
          x,
          y: h * 0.5,
          z,
          w: 16 + hash * 4,
          h,
          d: 15 + (1 - hash) * 4,
          color: commercialColors[colIdx]
        });
      });
    }

    // Koridor Gudang & Niaga Daan Mogot Pesing
    for (let x = -1150; x <= -680; x += 32) {
      [-465, -400].forEach((z) => {
        // Lewati simpang flyover pesing
        if (Math.abs(x - (-650)) < 30 && Math.abs(z - (-420)) < 25) return;
        // Danau Rawa Buaya (landmark #80) — jangan menimbun badan air
        if (Math.abs(x - (-1080)) < 52 && Math.abs(z - (-400)) < 46) return;
        // Stasiun Kembangan (#85) — jaga koridor peron, JPO & jalur ganda
        if (Math.abs(x - (-955)) < 52 && Math.abs(z - (-437)) < 34) return;
        if (this.isNearVoidCRoad(x, z, 26)) return; // Koridor jalan OSM Void C

        const hash = Math.abs(Math.sin(x * 12.9898 + z * 78.233));
        const h = 9 + hash * 8; // 9m - 17m
        const colIdx = Math.floor(hash * commercialColors.length) % commercialColors.length;

        commercialItems.push({
          x,
          y: h * 0.5,
          z,
          w: 22 + hash * 4,
          h,
          d: 16 + (1 - hash) * 4,
          color: commercialColors[colIdx]
        });
      });
    }

    // Koridor Ruko Modern Void A (Jl. Panjang & Sentra Pos Pengumben)
    for (let z = -280; z <= 280; z += 20) {
      // Lewati underpass tol dan persimpangan arteri
      if (Math.abs(z - (-45)) < 18) continue;
      if (Math.abs(z - 210) < 16) continue;
      if (Math.abs(z - (-260)) < 24) continue; // RS Graha Kedoya
      if (Math.abs(z - (-95)) < 24) continue;  // Wang Residence
      if (Math.abs(z - 30) < 24) continue;    // MNC Studios
      if (Math.abs(z - 12) < 22) continue;    // Museum MACAN

      [-795, -755].forEach((x) => {
        const hash = Math.abs(Math.sin(x * 12.9898 + z * 78.233));
        const h = 12 + hash * 10; // 12m - 22m (3-5 lantai ruko)
        const colIdx = Math.floor(hash * commercialColors.length) % commercialColors.length;

        commercialItems.push({
          x,
          y: h * 0.5,
          z,
          w: 15 + hash * 3,
          h,
          d: 16 + (1 - hash) * 3,
          color: commercialColors[colIdx]
        });
      });
    }

    // Ruko Sepanjang Koridor Jl. Pos Pengumben Raya (Palmerah ke Joglo)
    for (let x = -980; x <= -600; x += 24) {
      if (Math.abs(x - (-775)) < 26) continue; // Simpang Jl. Panjang
      [195, 225].forEach((z) => {
        // Bendungan Polor (#86) — jaga badan Kali Angke dan tanggul pintu air
        if (Math.abs(x - (-970)) < 36 && Math.abs(z - 168) < 44) return;
        if (this.isNearVoidCRoad(x, z, 22)) return; // Koridor jalan OSM Void C

        const hash = Math.abs(Math.sin(x * 14.123 + z * 53.421));
        const h = 11 + hash * 9; // 11m - 20m
        const colIdx = Math.floor(hash * commercialColors.length) % commercialColors.length;

        commercialItems.push({
          x,
          y: h * 0.5,
          z,
          w: 18 + hash * 4,
          h,
          d: 14 + (1 - hash) * 3,
          color: commercialColors[colIdx]
        });
      });
    }

    if (commercialItems.length > 0) {
      const commMesh = new THREE.InstancedMesh(baseBoxGeo, commercialMat, commercialItems.length);
      commMesh.receiveShadow = true;
      commMesh.castShadow = true;

      commercialItems.forEach((c, idx) => {
        dummy.position.set(c.x, c.y, c.z);
        dummy.scale.set(c.w, c.h, c.d);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        commMesh.setMatrixAt(idx, dummy.matrix);
        commMesh.setColorAt(idx, c.color);
      });

      commMesh.instanceMatrix.needsUpdate = true;
      if (commMesh.instanceColor) commMesh.instanceColor.needsUpdate = true;
      this.proceduralGroup.add(commMesh);
    }

    // =========================================================================
    // 4. VEGETASI PERKOTAAN TROPIS JAKARTA BARAT (Instanced Trees, 2 Draw Calls)
    // =========================================================================
    const palmTrunkMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.8 });
    const treeFoliageMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });

    const treeTransforms = [];

    // Pohon Palem Raja di Median Boulevard Kembangan & Puri Indah
    for (let x = -1180; x <= -1020; x += 18) {
      treeTransforms.push({ x, z: -160, scale: 1.0, isPalm: true });
      treeTransforms.push({ x, z: -80, scale: 0.95, isPalm: true });
    }

    // Pohon Peneduh Angsana sepanjang koridor Jl. Panjang (Kebon Jeruk)
    for (let z = -140; z <= 240; z += 18) {
      if (Math.abs(z - (-45)) < 18) continue; // Jangan di underpass tol
      treeTransforms.push({ x: -762, z, scale: 1.1, isPalm: false });
      treeTransforms.push({ x: -788, z, scale: 1.1, isPalm: false });
    }

    // Pohon Peneduh sepanjang Jl. Daan Mogot Pesing
    for (let x = -1100; x <= -550; x += 26) {
      treeTransforms.push({ x, z: -418, scale: 1.05, isPalm: false });
    }

    // Pohon Peneduh Void A (Jl. Greenville Raya, Jl. Pos Pengumben & Kali Sekretaris)
    for (let x = -760; x <= -590; x += 18) {
      treeTransforms.push({ x, z: -172, scale: 1.0, isPalm: false });
      treeTransforms.push({ x, z: -188, scale: 1.0, isPalm: false });
    }
    for (let x = -980; x <= -600; x += 22) {
      treeTransforms.push({ x, z: 202, scale: 1.05, isPalm: false });
      treeTransforms.push({ x, z: 218, scale: 1.05, isPalm: false });
    }
    for (let z = -260; z <= 240; z += 24) {
      treeTransforms.push({ x: -688, z, scale: 1.15, isPalm: false }); // Bantaran Kali Sekretaris
      treeTransforms.push({ x: -848, z, scale: 1.2, isPalm: false });  // Bantaran Kali Pesanggrahan
    }

    if (treeTransforms.length > 0) {
      const trunkGeo = new THREE.CylinderGeometry(0.25, 0.45, 4.5, 6);
      const foliageGeo = new THREE.SphereGeometry(2.4, 8, 8);
      const trunkMesh = new THREE.InstancedMesh(trunkGeo, palmTrunkMat, treeTransforms.length);
      const foliageMesh = new THREE.InstancedMesh(foliageGeo, treeFoliageMat, treeTransforms.length);

      trunkMesh.receiveShadow = true;
      foliageMesh.receiveShadow = true;

      treeTransforms.forEach((t, idx) => {
        // Trunk
        dummy.position.set(t.x, 2.25 * t.scale, t.z);
        dummy.scale.set(t.scale, t.scale, t.scale);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        trunkMesh.setMatrixAt(idx, dummy.matrix);

        // Foliage canopy
        dummy.position.set(t.x, 5.0 * t.scale, t.z);
        dummy.scale.set(t.isPalm ? t.scale * 1.3 : t.scale * 1.0, t.scale * 0.85, t.isPalm ? t.scale * 1.3 : t.scale * 1.0);
        dummy.updateMatrix();
        foliageMesh.setMatrixAt(idx, dummy.matrix);
      });

      trunkMesh.instanceMatrix.needsUpdate = true;
      foliageMesh.instanceMatrix.needsUpdate = true;
      this.proceduralGroup.add(trunkMesh);
      this.proceduralGroup.add(foliageMesh);
    }
  }

  /**
   * Void B Tahap 2: Kali Mookervaart, perpanjangan Jl. Daan Mogot hingga Terminal Kalideres,
   * akses RSUD Cengkareng, Cengkareng Business City, dan Danau Rawa Buaya.
   *
   * Jalan dan kanal berasal dari OpenStreetMap, diproyeksikan dengan projectGpsToScene lalu
   * di-warp memakai transformasi affine yang mempertahankan enam anchor Void B. Seluruh
   * geometri digabung per material (10 draw call) dan PJU di sini hanya visual, tanpa
   * PointLight baru.
   */
  buildVoidBDaanMogot() {
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.8,
      metalness: 0.1
    });
    const sidewalkMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createSidewalkTexture(),
      roughness: 0.8
    });
    const medianGrassMat = new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.85
    });
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x075985,
      roughness: 0.15,
      metalness: 0.8,
      side: THREE.DoubleSide
    });
    const canalWallMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.75
    });
    const bridgeMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.7
    });
    const lampPoleMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.7,
      roughness: 0.4
    });

    const roadGeos = [];
    const sidewalkGeos = [];
    const medianGeos = [];
    const waterGeos = [];
    const wallGeos = [];
    const bridgeGeos = [];
    const lampPoleGeos = [];
    const lampBulbGeos = [];

    const makeBox = (w, h, d, x, y, z, rotY = 0) => {
      const g = new THREE.BoxGeometry(w, h, d);
      if (rotY !== 0) g.rotateY(rotY);
      g.translate(x, y, z);
      return g;
    };

    const addRoadPolyline = (points, width, hasMedian = false, hasSidewalk = true) => {
      for (let i = 0; i < points.length - 1; i++) {
        const [x1, z1] = points[i];
        const [x2, z2] = points[i + 1];
        const dx = x2 - x1;
        const dz = z2 - z1;
        const len = Math.hypot(dx, dz);
        if (len < 0.5) continue;
        const angle = Math.atan2(dx, dz);
        const mx = (x1 + x2) * 0.5;
        const mz = (z1 + z2) * 0.5;

        roadGeos.push(makeBox(width, 0.25, len + 0.8, mx, 0.125, mz, angle));
        if (hasMedian) {
          medianGeos.push(makeBox(3.4, 0.45, len + 0.6, mx, 0.225, mz, angle));
        }
        if (hasSidewalk) {
          const sw = width >= 14 ? 2.8 : 2.2;
          [-1, 1].forEach((dir) => {
            const px = Math.cos(angle) * (width * 0.5 + sw * 0.5) * dir;
            const pz = -Math.sin(angle) * (width * 0.5 + sw * 0.5) * dir;
            sidewalkGeos.push(makeBox(sw, 0.4, len + 0.8, mx + px, 0.2, mz + pz, angle));
          });
        }
      }
    };

    const addPathPolyline = (points, width) => {
      for (let i = 0; i < points.length - 1; i++) {
        const [x1, z1] = points[i];
        const [x2, z2] = points[i + 1];
        const len = Math.hypot(x2 - x1, z2 - z1);
        if (len < 0.5) continue;
        const angle = Math.atan2(x2 - x1, z2 - z1);
        sidewalkGeos.push(
          makeBox(width, 0.3, len + 0.5, (x1 + x2) * 0.5, 0.15, (z1 + z2) * 0.5, angle)
        );
      }
    };

    const offsetPolyline = (points, offset) => points.map((p, i) => {
      const prev = points[Math.max(0, i - 1)];
      const next = points[Math.min(points.length - 1, i + 1)];
      const dx = next[0] - prev[0];
      const dz = next[1] - prev[1];
      const len = Math.hypot(dx, dz) || 1;
      return [p[0] + (-dz / len) * offset, p[1] + (dx / len) * offset];
    });

    const samplePolyline = (points, step, offset = 0) => {
      const samples = [];
      let next = step * 0.5;
      let travelled = 0;
      for (let i = 0; i < points.length - 1; i++) {
        const [x1, z1] = points[i];
        const [x2, z2] = points[i + 1];
        const dx = x2 - x1;
        const dz = z2 - z1;
        const len = Math.hypot(dx, dz);
        if (len < 0.5) continue;
        const angle = Math.atan2(dx, dz);
        const px = Math.cos(angle) * offset;
        const pz = -Math.sin(angle) * offset;
        while (next <= travelled + len) {
          const t = (next - travelled) / len;
          samples.push({ x: x1 + dx * t + px, z: z1 + dz * t + pz, angle });
          next += step;
        }
        travelled += len;
      }
      return samples;
    };

    const addWaterPolyline = (points, width) => {
      for (let i = 0; i < points.length - 1; i++) {
        const [x1, z1] = points[i];
        const [x2, z2] = points[i + 1];
        const len = Math.hypot(x2 - x1, z2 - z1);
        if (len < 0.5) continue;
        const angle = Math.atan2(x2 - x1, z2 - z1);
        const mx = (x1 + x2) * 0.5;
        const mz = (z1 + z2) * 0.5;

        const water = new THREE.PlaneGeometry(width, len + 0.8);
        water.rotateX(-Math.PI / 2);
        water.rotateY(angle);
        water.translate(mx, 0.04, mz);
        waterGeos.push(water);

        [-1, 1].forEach((dir) => {
          const px = Math.cos(angle) * (width * 0.5 + 0.6) * dir;
          const pz = -Math.sin(angle) * (width * 0.5 + 0.6) * dir;
          wallGeos.push(makeBox(1.2, 0.7, len + 0.8, mx + px, 0.3, mz + pz, angle));
        });
      }
    };

    const addLampPost = (x, z, angle, side) => {
      const px = Math.cos(angle);
      const pz = -Math.sin(angle);
      const pole = new THREE.CylinderGeometry(0.16, 0.24, 8.5, 6);
      pole.translate(x, 4.25, z);
      lampPoleGeos.push(pole);

      const arm = new THREE.BoxGeometry(3.2, 0.14, 0.14);
      arm.rotateY(angle);
      arm.translate(x - px * 1.6 * side, 8.4, z - pz * 1.6 * side);
      lampPoleGeos.push(arm);

      const bulb = new THREE.SphereGeometry(0.34, 8, 8);
      bulb.translate(x - px * 3.2 * side, 8.15, z - pz * 3.2 * side);
      lampBulbGeos.push(bulb);
    };

    const segmentIntersection = (a, b, c, d) => {
      const rx = b[0] - a[0];
      const rz = b[1] - a[1];
      const sx = d[0] - c[0];
      const sz = d[1] - c[1];
      const den = rx * sz - rz * sx;
      if (Math.abs(den) < 1e-9) return null;
      const t = ((c[0] - a[0]) * sz - (c[1] - a[1]) * sx) / den;
      const u = ((c[0] - a[0]) * rz - (c[1] - a[1]) * rx) / den;
      if (t <= 0 || t >= 1 || u <= 0 || u >= 1) return null;
      return [a[0] + t * rx, a[1] + t * rz];
    };

    const waterway = VOID_B_OSM.waterways[0];
    addWaterPolyline(waterway.points, waterway.width);
    addPathPolyline(offsetPolyline(waterway.points, waterway.width * 0.5 + 5), 3.4);
    addPathPolyline(offsetPolyline(waterway.points, -(waterway.width * 0.5 + 5)), 3.4);

    const roads = VOID_B_OSM.roads.map((road) => ({
      name: road.name,
      width: road.width,
      median: road.median === true,
      points: road.points
    }));
    // Konektor prosedural yang tidak tersedia sebagai jalan OSM.
    roads.push(
      {
        name: 'Akses RSUD Cengkareng',
        width: 10,
        points: [[-1145, -446], [-1142, -486], [-1144.9, -526.5]]
      },
      {
        name: 'Akses Cengkareng Business City',
        width: 10,
        points: [[-1200, -448], [-1204, -505], [-1200, -560]]
      },
      {
        name: 'Akses Danau Rawa Buaya',
        width: 8,
        points: [[-1066.7, -389.2], [-1072, -393], [-1080, -400]]
      }
    );

    roads.forEach((road) => {
      addRoadPolyline(road.points, road.width, road.median, road.width >= 10);
    });

    // Jembatan otomatis pada setiap perpotongan jalan dengan Kanal Mookervaart.
    const crossings = [];
    roads.forEach((road) => {
      for (let i = 0; i < road.points.length - 1; i++) {
        for (let j = 0; j < waterway.points.length - 1; j++) {
          const hit = segmentIntersection(
            road.points[i], road.points[i + 1],
            waterway.points[j], waterway.points[j + 1]
          );
          if (!hit) continue;
          if (crossings.some((c) => Math.hypot(c.x - hit[0], c.z - hit[1]) < 12)) continue;
          const angle = Math.atan2(
            road.points[i + 1][0] - road.points[i][0],
            road.points[i + 1][1] - road.points[i][1]
          );
          crossings.push({ x: hit[0], z: hit[1], angle, width: road.width });
        }
      }
    });

    crossings.forEach((bridge) => {
      const deckWidth = bridge.width + 12;
      bridgeGeos.push(makeBox(deckWidth, 0.7, 24, bridge.x, 0.35, bridge.z, bridge.angle));
      [-1, 1].forEach((dir) => {
        const px = Math.cos(bridge.angle) * (deckWidth * 0.5 - 0.4) * dir;
        const pz = -Math.sin(bridge.angle) * (deckWidth * 0.5 - 0.4) * dir;
        bridgeGeos.push(makeBox(0.6, 0.8, 24, bridge.x + px, 0.85, bridge.z + pz, bridge.angle));
      });
    });

    if (!this.pjuBulbMat) {
      this.pjuBulbMat = new THREE.MeshStandardMaterial({
        color: 0xfef08a,
        emissive: 0xfef08a,
        emissiveIntensity: 0.0,
        roughness: 0.2
      });
      this.pjuBulbMat.name = 'pju-bulb';
      this.glowMaterials.push(this.pjuBulbMat);
    }

    const daanRoad = VOID_B_OSM.roads.find((road) => road.name === 'Jalan Daan Mogot');
    if (daanRoad) {
      [1, -1].forEach((side) => {
        samplePolyline(daanRoad.points, 95, 14.6 * side).forEach((p) => {
          addLampPost(p.x, p.z, p.angle, side);
        });
      });
    }
    samplePolyline(offsetPolyline(waterway.points, waterway.width * 0.5 + 8), 130).forEach((p) => {
      addLampPost(p.x, p.z, p.angle, 1);
    });

    // Vegetasi tepian kanal dan koridor Daan Mogot, dirender sebagai instanced mesh.
    const treePositions = [];
    const addTree = (x, z, scale) => {
      if (treePositions.some((t) => Math.hypot(t.x - x, t.z - z) < 7)) return;
      treePositions.push({ x, z, scale });
    };
    if (daanRoad) {
      samplePolyline(daanRoad.points, 68, 21).forEach((p, i) => {
        addTree(p.x, p.z, 0.85 + (i % 3) * 0.08);
      });
      samplePolyline(daanRoad.points, 68, -21).forEach((p, i) => {
        addTree(p.x, p.z, 0.82 + (i % 4) * 0.06);
      });
    }
    [1, -1].forEach((side) => {
      samplePolyline(offsetPolyline(waterway.points, (waterway.width * 0.5 + 12) * side), 52).forEach((p, i) => {
        addTree(p.x, p.z, 0.9 + (i % 5) * 0.05);
      });
    });

    if (treePositions.length > 0) {
      const dummy = new THREE.Object3D();
      const trunkGeo = new THREE.CylinderGeometry(0.26, 0.38, 4.2, 5);
      const foliageGeo = new THREE.ConeGeometry(2.6, 6.2, 6);
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.9 });
      const foliageMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.85 });
      const trunkMesh = new THREE.InstancedMesh(trunkGeo, trunkMat, treePositions.length);
      const foliageMesh = new THREE.InstancedMesh(foliageGeo, foliageMat, treePositions.length);

      treePositions.forEach((tree, idx) => {
        dummy.position.set(tree.x, 2.1 * tree.scale, tree.z);
        dummy.scale.set(tree.scale, tree.scale, tree.scale);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        trunkMesh.setMatrixAt(idx, dummy.matrix);

        dummy.position.set(tree.x, (4.2 + 3.0) * tree.scale, tree.z);
        dummy.updateMatrix();
        foliageMesh.setMatrixAt(idx, dummy.matrix);
      });

      trunkMesh.castShadow = true;
      trunkMesh.receiveShadow = true;
      foliageMesh.castShadow = true;
      foliageMesh.receiveShadow = true;
      this.proceduralGroup.add(trunkMesh);
      this.proceduralGroup.add(foliageMesh);
    }

    const mergeAndAdd = (geos, mat, receiveShadow = true, castShadow = false) => {
      if (!geos || geos.length === 0) return;
      const merged = BufferGeometryUtils.mergeGeometries(geos, false);
      if (merged) {
        const mesh = new THREE.Mesh(merged, mat);
        mesh.receiveShadow = receiveShadow;
        mesh.castShadow = castShadow;
        this.proceduralGroup.add(mesh);
      }
    };

    mergeAndAdd(roadGeos, roadMat, true, false);
    mergeAndAdd(sidewalkGeos, sidewalkMat, true, false);
    mergeAndAdd(medianGeos, medianGrassMat, true, false);
    mergeAndAdd(waterGeos, waterMat, false, false);
    mergeAndAdd(wallGeos, canalWallMat, true, false);
    mergeAndAdd(bridgeGeos, bridgeMat, true, true);
    mergeAndAdd(lampPoleGeos, lampPoleMat, true, false);
    mergeAndAdd(lampBulbGeos, this.pjuBulbMat, false, false);
  }

  /**
   * Void C Tahap 2: jaringan jalan Meruya-Kembangan Selatan-Joglo-Kreo dari data OSM,
   * jalur inspeksi Kali Angke, PJU, vegetasi tepi jalan, serta akses ke Stasiun
   * Kembangan dan Bendungan Polor.
   *
   * Seluruh geometri digabung per material: 7 draw call, tanpa PointLight baru.
   * Footprint enam anchor Void C sudah dipotong dari dataset, bukan dari mesh kota.
   */
  buildVoidCMeruya() {
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x3b4a5f,
      roughness: 0.78,
      metalness: 0.12
    });
    const sidewalkMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createSidewalkTexture(),
      color: 0xb9c4d2,
      roughness: 0.82
    });
    const bridgeMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.7
    });
    const lampPoleMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.7,
      roughness: 0.4
    });

    const roadGeos = [];
    const sidewalkGeos = [];
    const bridgeGeos = [];
    const lampPoleGeos = [];
    const lampBulbGeos = [];

    const makeBox = (w, h, d, x, y, z, rotY = 0) => {
      const g = new THREE.BoxGeometry(w, h, d);
      if (rotY !== 0) g.rotateY(rotY);
      g.translate(x, y, z);
      return g;
    };

    const addRoadPolyline = (points, width, hasSidewalk = true) => {
      for (let i = 0; i < points.length - 1; i++) {
        const [x1, z1] = points[i];
        const [x2, z2] = points[i + 1];
        const len = Math.hypot(x2 - x1, z2 - z1);
        if (len < 0.5) continue;
        const angle = Math.atan2(x2 - x1, z2 - z1);
        const mx = (x1 + x2) * 0.5;
        const mz = (z1 + z2) * 0.5;

        roadGeos.push(makeBox(width, 0.25, len + 0.8, mx, 0.125, mz, angle));
        if (hasSidewalk) {
          const sw = width >= 14 ? 2.8 : 2.2;
          [-1, 1].forEach((dir) => {
            const px = Math.cos(angle) * (width * 0.5 + sw * 0.5) * dir;
            const pz = -Math.sin(angle) * (width * 0.5 + sw * 0.5) * dir;
            sidewalkGeos.push(makeBox(sw, 0.4, len + 0.8, mx + px, 0.2, mz + pz, angle));
          });
        }
      }
    };

    const addPathPolyline = (points, width) => {
      for (let i = 0; i < points.length - 1; i++) {
        const [x1, z1] = points[i];
        const [x2, z2] = points[i + 1];
        const len = Math.hypot(x2 - x1, z2 - z1);
        if (len < 0.5) continue;
        const angle = Math.atan2(x2 - x1, z2 - z1);
        sidewalkGeos.push(
          makeBox(width, 0.3, len + 0.5, (x1 + x2) * 0.5, 0.15, (z1 + z2) * 0.5, angle)
        );
      }
    };

    const offsetPolyline = (points, offset) => points.map((p, i) => {
      const prev = points[Math.max(0, i - 1)];
      const next = points[Math.min(points.length - 1, i + 1)];
      const dx = next[0] - prev[0];
      const dz = next[1] - prev[1];
      const len = Math.hypot(dx, dz) || 1;
      return [p[0] + (-dz / len) * offset, p[1] + (dx / len) * offset];
    });

    const samplePolyline = (points, step, offset = 0) => {
      const samples = [];
      let next = step * 0.5;
      let travelled = 0;
      for (let i = 0; i < points.length - 1; i++) {
        const [x1, z1] = points[i];
        const [x2, z2] = points[i + 1];
        const dx = x2 - x1;
        const dz = z2 - z1;
        const len = Math.hypot(dx, dz);
        if (len < 0.5) continue;
        const angle = Math.atan2(dx, dz);
        const px = Math.cos(angle) * offset;
        const pz = -Math.sin(angle) * offset;
        while (next <= travelled + len) {
          const t = (next - travelled) / len;
          samples.push({ x: x1 + dx * t + px, z: z1 + dz * t + pz, angle });
          next += step;
        }
        travelled += len;
      }
      return samples;
    };

    const addLampPost = (x, z, angle, side) => {
      const px = Math.cos(angle);
      const pz = -Math.sin(angle);
      const pole = new THREE.CylinderGeometry(0.16, 0.24, 8.5, 6);
      pole.translate(x, 4.25, z);
      lampPoleGeos.push(pole);

      const arm = new THREE.BoxGeometry(3.2, 0.14, 0.14);
      arm.rotateY(angle);
      arm.translate(x - px * 1.6 * side, 8.4, z - pz * 1.6 * side);
      lampPoleGeos.push(arm);

      const bulb = new THREE.SphereGeometry(0.34, 8, 8);
      bulb.translate(x - px * 3.2 * side, 8.15, z - pz * 3.2 * side);
      lampBulbGeos.push(bulb);
    };

    const segmentIntersection = (a, b, c, d) => {
      const rx = b[0] - a[0];
      const rz = b[1] - a[1];
      const sx = d[0] - c[0];
      const sz = d[1] - c[1];
      const den = rx * sz - rz * sx;
      if (Math.abs(den) < 1e-9) return null;
      const t = ((c[0] - a[0]) * sz - (c[1] - a[1]) * sx) / den;
      const u = ((c[0] - a[0]) * rz - (c[1] - a[1]) * rx) / den;
      if (t <= 0 || t >= 1 || u <= 0 || u >= 1) return null;
      return [a[0] + t * rx, a[1] + t * rz];
    };

    // Kali Angke sudah menjadi mesh sungai di buildWaterways; builder ini hanya
    // menambah jalur inspeksi, PJU bantaran, dan jembatan pada perpotongan jalan OSM.
    const kaliAngke = [[-970, 200], [-970, -30], [-950, -220], [-890, -420]];
    const kaliWidth = 21;
    [1, -1].forEach((side) => {
      addPathPolyline(offsetPolyline(kaliAngke, (kaliWidth * 0.5 + 5) * side), 3.4);
    });

    const roads = VOID_C_OSM.roads.map((road) => ({
      name: road.name,
      width: road.width,
      points: road.points
    }));
    // Konektor prosedural yang tidak ada di dataset OSM.
    roads.push(
      { name: 'Akses Stasiun Kembangan', width: 10, points: VOID_C_CONNECTOR_PATHS[0] },
      { name: 'Akses Bendungan Polor', width: 8, points: VOID_C_CONNECTOR_PATHS[1] }
    );

    roads.forEach((road) => {
      addRoadPolyline(road.points, road.width, road.width >= 10);
    });

    // Jembatan otomatis pada setiap perpotongan jalan dengan Kali Angke.
    // Perpotongan di dekat Bendungan Polor dilewati karena dek bendungan sudah
    // berfungsi sebagai penyeberangan.
    const crossings = [];
    roads.forEach((road) => {
      for (let i = 0; i < road.points.length - 1; i++) {
        for (let j = 0; j < kaliAngke.length - 1; j++) {
          const hit = segmentIntersection(
            road.points[i], road.points[i + 1],
            kaliAngke[j], kaliAngke[j + 1]
          );
          if (!hit) continue;
          if (Math.abs(hit[1] - 168) < 18 && Math.abs(hit[0] + 970) < 16) continue;
          if (crossings.some((c) => Math.hypot(c.x - hit[0], c.z - hit[1]) < 12)) continue;
          const angle = Math.atan2(
            road.points[i + 1][0] - road.points[i][0],
            road.points[i + 1][1] - road.points[i][1]
          );
          crossings.push({ x: hit[0], z: hit[1], angle, width: road.width });
        }
      }
    });

    crossings.forEach((bridge) => {
      const deckWidth = bridge.width + 12;
      bridgeGeos.push(makeBox(deckWidth, 0.7, 24, bridge.x, 0.35, bridge.z, bridge.angle));
      [-1, 1].forEach((dir) => {
        const px = Math.cos(bridge.angle) * (deckWidth * 0.5 - 0.4) * dir;
        const pz = -Math.sin(bridge.angle) * (deckWidth * 0.5 - 0.4) * dir;
        bridgeGeos.push(makeBox(0.6, 0.8, 24, bridge.x + px, 0.85, bridge.z + pz, bridge.angle));
      });
    });

    if (!this.pjuBulbMat) {
      this.pjuBulbMat = new THREE.MeshStandardMaterial({
        color: 0xfef08a,
        emissive: 0xfef08a,
        emissiveIntensity: 0.0,
        roughness: 0.2
      });
      this.pjuBulbMat.name = 'pju-bulb';
      this.glowMaterials.push(this.pjuBulbMat);
    }

    const lampRoads = [
      'Jalan Meruya Ilir',
      'Jalan Meruya Selatan',
      'Jalan Joglo Raya',
      'Jalan Kembangan Barat',
      'Jalan Raya Kembangan Selatan'
    ];
    roads.filter((road) => lampRoads.includes(road.name)).forEach((road) => {
      [1, -1].forEach((side) => {
        samplePolyline(road.points, 95, (road.width * 0.5 + 1.4) * side).forEach((p) => {
          addLampPost(p.x, p.z, p.angle, side);
        });
      });
    });
    samplePolyline(offsetPolyline(kaliAngke, kaliWidth * 0.5 + 8), 130).forEach((p) => {
      addLampPost(p.x, p.z, p.angle, 1);
    });

    // Vegetasi tepi jalan utama dan bantaran Kali Angke, dirender sebagai instanced mesh.
    const treePositions = [];
    const addTree = (x, z, scale) => {
      if (treePositions.some((t) => Math.hypot(t.x - x, t.z - z) < 7)) return;
      treePositions.push({ x, z, scale });
    };
    roads.filter((road) => lampRoads.includes(road.name)).forEach((road) => {
      [1, -1].forEach((side) => {
        samplePolyline(road.points, 72, (road.width * 0.5 + 6) * side).forEach((p, i) => {
          addTree(p.x, p.z, 0.85 + (i % 4) * 0.06);
        });
      });
    });
    [1, -1].forEach((side) => {
      samplePolyline(offsetPolyline(kaliAngke, (kaliWidth * 0.5 + 12) * side), 54).forEach((p, i) => {
        addTree(p.x, p.z, 0.9 + (i % 5) * 0.05);
      });
    });

    if (treePositions.length > 0) {
      const dummy = new THREE.Object3D();
      const trunkGeo = new THREE.CylinderGeometry(0.26, 0.38, 4.2, 5);
      const foliageGeo = new THREE.ConeGeometry(2.6, 6.2, 6);
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.9 });
      const foliageMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.85 });
      const trunkMesh = new THREE.InstancedMesh(trunkGeo, trunkMat, treePositions.length);
      const foliageMesh = new THREE.InstancedMesh(foliageGeo, foliageMat, treePositions.length);

      treePositions.forEach((tree, idx) => {
        dummy.position.set(tree.x, 2.1 * tree.scale, tree.z);
        dummy.scale.set(tree.scale, tree.scale, tree.scale);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        trunkMesh.setMatrixAt(idx, dummy.matrix);

        dummy.position.set(tree.x, (4.2 + 3.0) * tree.scale, tree.z);
        dummy.updateMatrix();
        foliageMesh.setMatrixAt(idx, dummy.matrix);
      });

      trunkMesh.castShadow = true;
      trunkMesh.receiveShadow = true;
      foliageMesh.castShadow = true;
      foliageMesh.receiveShadow = true;
      this.proceduralGroup.add(trunkMesh);
      this.proceduralGroup.add(foliageMesh);
    }

    const mergeAndAdd = (geos, mat, receiveShadow = true, castShadow = false) => {
      if (!geos || geos.length === 0) return;
      const merged = BufferGeometryUtils.mergeGeometries(geos, false);
      if (merged) {
        const mesh = new THREE.Mesh(merged, mat);
        mesh.receiveShadow = receiveShadow;
        mesh.castShadow = castShadow;
        this.proceduralGroup.add(mesh);
      }
    };

    mergeAndAdd(roadGeos, roadMat, true, false);
    mergeAndAdd(sidewalkGeos, sidewalkMat, true, false);
    mergeAndAdd(bridgeGeos, bridgeMat, true, true);
    mergeAndAdd(lampPoleGeos, lampPoleMat, true, false);
    mergeAndAdd(lampBulbGeos, this.pjuBulbMat, false, false);
  }

  getVoidCRoadSegments() {
    if (!this.voidCRoadSegments) {
      const segments = [];
      const addSegments = (points, halfWidth) => {
        for (let i = 0; i < points.length - 1; i++) {
          segments.push({
            ax: points[i][0],
            az: points[i][1],
            bx: points[i + 1][0],
            bz: points[i + 1][1],
            halfWidth
          });
        }
      };
      VOID_C_OSM.roads.forEach((road) => addSegments(road.points, road.width * 0.5));
      VOID_C_CONNECTOR_PATHS.forEach((points) => addSegments(points, 5));
      this.voidCRoadSegments = segments;
    }
    return this.voidCRoadSegments;
  }

  isNearVoidCRoad(x, z, clearance = 12) {
    for (const s of this.getVoidCRoadSegments()) {
      const pad = clearance + s.halfWidth;
      if (
        x < Math.min(s.ax, s.bx) - pad || x > Math.max(s.ax, s.bx) + pad ||
        z < Math.min(s.az, s.bz) - pad || z > Math.max(s.az, s.bz) + pad
      ) continue;
      const dx = s.bx - s.ax;
      const dz = s.bz - s.az;
      const len2 = dx * dx + dz * dz;
      let t = len2 ? ((x - s.ax) * dx + (z - s.az) * dz) / len2 : 0;
      t = Math.max(0, Math.min(1, t));
      if (Math.hypot(x - (s.ax + t * dx), z - (s.az + t * dz)) < pad) return true;
    }
    return false;
  }

  /**
   * Void B Tahap 3: Infill permukiman Kalideres/Kembangan Utara dan kawasan industri
   * Cengkareng di sekitar koridor Daan Mogot, Kanal Mookervaart, dan CBC.
   *
   * 1. 130+ rumah kampung/perumahan 2-3 lantai dengan atap pelana.
   * 2. 70+ ruko di koridor jalan sekunder dan akses kawasan industri.
   * 3. 20+ gudang logistik di klaster CBC/Kalideres Utara.
   * 4. Dua akses kawasan industri, bahu jalan, dan pohon peneduh.
   * Total penambahan draw calls: 9.
   */
  buildVoidBInfillAndIndustry() {
    const dummy = new THREE.Object3D();
    const baseBoxGeo = new THREE.BoxGeometry(1, 1, 1);

    // Prisma atap pelana: ridge sejajar sumbu Z lokal, alas di y=0.
    const roofGeo = new THREE.BufferGeometry();
    roofGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute([
        -0.5, 0, -0.5, 0.5, 0, -0.5, -0.5, 0, 0.5, 0.5, 0, 0.5,
        0, 1, -0.5, 0, 1, 0.5
      ], 3)
    );
    roofGeo.setIndex([
      0, 2, 5, 0, 5, 4,
      1, 4, 5, 1, 5, 3,
      0, 4, 1,
      2, 3, 5,
      0, 1, 3, 0, 3, 2
    ]);
    roofGeo.computeVertexNormals();

    // Masking koridor: seluruh jalan OSM, kanal, konektor Tahap 2, dan akses industri baru.
    const segments = [];
    const addSegment = (a, b, half, label, way) => {
      segments.push({ ax: a[0], az: a[1], bx: b[0], bz: b[1], half, label, way });
    };

    VOID_B_OSM.roads.forEach((road) => {
      for (let i = 0; i < road.points.length - 1; i++) {
        addSegment(road.points[i], road.points[i + 1], road.width * 0.5 + 3, road.name, road);
      }
    });
    const canal = VOID_B_OSM.waterways[0];
    for (let i = 0; i < canal.points.length - 1; i++) {
      addSegment(canal.points[i], canal.points[i + 1], canal.width * 0.5 + 8, canal.name);
    }
    addSegment([-880, -435], [-1250, -450], 15, 'Jalan Daan Mogot prosedural');
    addSegment([-1145, -446], [-1142, -486], 8, 'Akses RSUD Cengkareng');
    addSegment([-1142, -486], [-1144.9, -526.5], 8, 'Akses RSUD Cengkareng');
    addSegment([-1200, -448], [-1204, -505], 8, 'Akses Cengkareng Business City');
    addSegment([-1204, -505], [-1200, -560], 8, 'Akses Cengkareng Business City');
    addSegment([-1066.7, -389.2], [-1072, -393], 7, 'Akses Danau Rawa Buaya');
    addSegment([-1072, -393], [-1080, -400], 7, 'Akses Danau Rawa Buaya');

    const accessRoads = [
      {
        name: 'Akses Kawasan Industri Kalideres',
        width: 10,
        points: [[-1440, -446], [-1440, -700]]
      },
      {
        name: 'Akses Logistik Cengkareng',
        width: 10,
        points: [[-1200, -560], [-1200, -690], [-1030, -690]]
      }
    ];
    accessRoads.forEach((road) => {
      for (let i = 0; i < road.points.length - 1; i++) {
        addSegment(road.points[i], road.points[i + 1], road.width * 0.5 + 3, road.name, road);
      }
    });

    const landmarkExclusions = [
      { id: 'terminal-bus-kalideres', x: -1320, z: -450, halfX: 48, halfZ: 40 },
      { id: 'daan-mogot-mall', x: -1260, z: -460, halfX: 47, halfZ: 42 },
      { id: 'rsud-cengkareng', x: -1140, z: -520, halfX: 45, halfZ: 40 },
      { id: 'stasiun-rawa-buaya-hub', x: -1050, z: -446, halfX: 52, halfZ: 34 },
      { id: 'danau-rawa-buaya', x: -1080, z: -400, halfX: 49, halfZ: 44 },
      { id: 'cengkareng-business-city', x: -1200, z: -560, halfX: 49, halfZ: 42 }
    ];
    const existingExclusions = [
      // Deretan gudang Daan Mogot Pesing dari Tahap 3 Jakarta Barat.
      { x: -915, z: -432.5, halfX: 235, halfZ: 53 }
    ];

    const distToSegmentSq = (px, pz, s) => {
      const dx = s.bx - s.ax;
      const dz = s.bz - s.az;
      const lenSq = dx * dx + dz * dz;
      let t = lenSq > 0 ? ((px - s.ax) * dx + (pz - s.az) * dz) / lenSq : 0;
      t = Math.max(0, Math.min(1, t));
      const cx = s.ax + dx * t;
      const cz = s.az + dz * t;
      return (px - cx) ** 2 + (pz - cz) ** 2;
    };

    const isBlocked = (x, z, radius, ignoreWays) => {
      for (let i = 0; i < segments.length; i++) {
        const s = segments[i];
        const dSq = distToSegmentSq(x, z, s);
        if (ignoreWays && s.way && ignoreWays.has(s.way)) {
          // Koridor sendiri: cukup jaga agar badan ruko tidak menimpa aspal.
          const ownLimit = s.half + radius - 2;
          if (dSq < ownLimit * ownLimit) return true;
          continue;
        }
        const limit = s.half + radius + 2;
        if (dSq < limit * limit) return true;
      }
      for (let i = 0; i < landmarkExclusions.length; i++) {
        const ex = landmarkExclusions[i];
        if (Math.abs(x - ex.x) < ex.halfX + radius && Math.abs(z - ex.z) < ex.halfZ + radius) return true;
      }
      for (let i = 0; i < existingExclusions.length; i++) {
        const ex = existingExclusions[i];
        if (Math.abs(x - ex.x) < ex.halfX + radius && Math.abs(z - ex.z) < ex.halfZ + radius) return true;
      }
      return false;
    };

    const placed = [];
    const isOccupied = (x, z, radius) => {
      for (let i = 0; i < placed.length; i++) {
        const p = placed[i];
        if (Math.hypot(p.x - x, p.z - z) < p.radius + radius + 2) return true;
      }
      return false;
    };

    const residentialItems = [];
    const shophouseItems = [];
    const roofItems = [];

    const residentialColors = [
      new THREE.Color(0xf8fafc),
      new THREE.Color(0xe7e5e4),
      new THREE.Color(0xfef3c7),
      new THREE.Color(0xd6d3d1),
      new THREE.Color(0xbae6fd),
      new THREE.Color(0xfed7aa)
    ];
    const roofColors = [
      new THREE.Color(0xb45309),
      new THREE.Color(0x9a3412),
      new THREE.Color(0x991b1b),
      new THREE.Color(0x78350f)
    ];

    const residentialZones = [
      // Kalideres Utara: permukiman padat di utara koridor Daan Mogot.
      { minX: -1500, maxX: -1350, minZ: -660, maxZ: -590, stepX: 16, stepZ: 16 },
      // Kalideres Selatan: kampung di sisi selatan Daan Mogot.
      { minX: -1490, maxX: -1370, minZ: -390, maxZ: -320, stepX: 16, stepZ: 16 },
      // Rawa Buaya Barat / Duri Kosambi.
      { minX: -1290, maxX: -1180, minZ: -380, maxZ: -300, stepX: 15, stepZ: 15 },
      // Kembangan Utara: permukiman di selatan Kanal Mookervaart.
      { minX: -1180, maxX: -1040, minZ: -360, maxZ: -295, stepX: 15, stepZ: 15 },
      // Kembangan Baru / Cengkareng Timur.
      { minX: -1060, maxX: -990, minZ: -370, maxZ: -300, stepX: 15, stepZ: 15 }
    ];

    residentialZones.forEach((zone, zoneIndex) => {
      for (let x = zone.minX; x <= zone.maxX; x += zone.stepX) {
        for (let z = zone.minZ; z <= zone.maxZ; z += zone.stepZ) {
          const hash = Math.abs(Math.sin(x * 12.9898 + z * 78.233 + zoneIndex));
          const w = 9 + hash * 3;
          const d = 10 + (1 - hash) * 3;
          const h = 6.5 + hash * 3.5;
          const radius = Math.max(w, d) * 0.5;
          const px = x + (hash - 0.5) * 2.4;
          const pz = z + (((hash * 7.31) % 1) - 0.5) * 2.4;
          if (isBlocked(px, pz, radius) || isOccupied(px, pz, radius)) continue;
          placed.push({ x: px, z: pz, radius });
          residentialItems.push({
            x: px,
            y: h * 0.5,
            z: pz,
            w,
            h,
            d,
            color: residentialColors[Math.floor(hash * residentialColors.length) % residentialColors.length]
          });
          const roofH = 1.5 + hash * 0.9;
          roofItems.push({
            x: px,
            y: h,
            z: pz,
            w: w + 1.2,
            h: roofH,
            d: d + 1.2,
            color: roofColors[Math.floor(hash * roofColors.length) % roofColors.length]
          });
        }
      }
    });

    // Ruko mengikuti jalan sekunder; Daan Mogot dilewati agar tidak menimpa kanal.
    const shophouseRoads = new Set([
      'Jalan Kalideres Permai',
      'Jalan Duri Kosambi Raya',
      'Jalan Kembangan Raya',
      'Jalan Kembangan Utama',
      'Jalan Kembangan Utara',
      'Jalan Kembangan Baru',
      'Jalan Bumi Cengkareng Indah',
      'Jalan Terminal Rawa Buaya',
      'Jalan Daan Mogot Estate',
      'Jalan Rusunawa Pesakih'
    ]);
    const shophouseColors = [
      new THREE.Color(0xf1f5f9),
      new THREE.Color(0xe2e8f0),
      new THREE.Color(0xfed7aa),
      new THREE.Color(0xbae6fd),
      new THREE.Color(0x0f766e),
      new THREE.Color(0x1e293b),
      new THREE.Color(0xd97706)
    ];

    // OSM memecah koridor menjadi banyak way pendek; sambungkan dulu agar deret
    // ruko tidak berhenti di setiap persimpangan.
    const buildRoadChains = (ways) => {
      const keyOf = (p) => `${Math.round(p[0])}:${Math.round(p[1])}`;
      const pending = ways.map((road) => ({
        points: road.points.map((p) => [p[0], p[1]]),
        ways: new Set([road])
      }));
      const chains = [];
      while (pending.length > 0) {
        const chain = pending.pop();
        let extended = true;
        while (extended) {
          extended = false;
          const head = chain.points[0];
          const tail = chain.points[chain.points.length - 1];
          for (let i = 0; i < pending.length; i++) {
            const way = pending[i].points;
            if (keyOf(way[way.length - 1]) === keyOf(tail)) {
              chain.points.push(...way.slice(0, -1).reverse());
            } else if (keyOf(way[0]) === keyOf(tail)) {
              chain.points.push(...way.slice(1));
            } else if (keyOf(way[0]) === keyOf(head)) {
              chain.points.unshift(...way.slice(1).reverse());
            } else if (keyOf(way[way.length - 1]) === keyOf(head)) {
              chain.points.unshift(...way.slice(0, -1));
            } else {
              continue;
            }
            pending[i].ways.forEach((road) => chain.ways.add(road));
            pending.splice(i, 1);
            extended = true;
            break;
          }
        }
        chains.push(chain);
      }
      return chains;
    };

    const visitChain = (chain, spacing, visit) => {
      let offset = spacing * 0.5;
      for (let i = 0; i < chain.length - 1; i++) {
        const a = chain[i];
        const b = chain[i + 1];
        const dx = b[0] - a[0];
        const dz = b[1] - a[1];
        const len = Math.hypot(dx, dz);
        if (len < 0.01) continue;
        let cursor = offset;
        while (cursor <= len) {
          const t = cursor / len;
          visit(a[0] + dx * t, a[1] + dz * t, Math.atan2(dx, dz));
          cursor += spacing;
        }
        offset = cursor - len;
      }
    };

    const shophouseWaysByName = new Map();
    VOID_B_OSM.roads.forEach((road) => {
      if (!shophouseRoads.has(road.name)) return;
      if (!shophouseWaysByName.has(road.name)) shophouseWaysByName.set(road.name, []);
      shophouseWaysByName.get(road.name).push(road);
    });

    const placeShophouseRow = (name, roadWidth, chain, ignoreWays) => {
      visitChain(chain, 14, (bx, bz, angle) => {
        const nx = Math.cos(angle);
        const nz = -Math.sin(angle);
        [-1, 1].forEach((side) => {
          const hash = Math.abs(Math.sin(bx * 8.13 + bz * 4.71 + side * 3.7));
          const w = 12 + (1 - hash) * 3; // kedalaman dari jalan
          const d = 10.5 + hash * 2.5; // lebar fasad sepanjang jalan
          const h = 9 + hash * 7;
          const px = bx + nx * (roadWidth * 0.5 + w * 0.5 + 2.2) * side;
          const pz = bz + nz * (roadWidth * 0.5 + w * 0.5 + 2.2) * side;
          const radius = Math.max(w, d) * 0.5;
          if (isBlocked(px, pz, radius, ignoreWays) || isOccupied(px, pz, d * 0.45)) return;
          placed.push({ x: px, z: pz, radius: d * 0.45 });
          shophouseItems.push({
            x: px,
            y: h * 0.5,
            z: pz,
            w,
            h,
            d,
            rotY: angle,
            color: shophouseColors[Math.floor(hash * shophouseColors.length) % shophouseColors.length]
          });
          const roofH = 1.8 + hash * 0.8;
          roofItems.push({
            x: px,
            y: h,
            z: pz,
            w: w + 1.3,
            h: roofH,
            d: d + 1.3,
            rotY: angle,
            color: roofColors[Math.floor(hash * roofColors.length) % roofColors.length]
          });
        });
      });
    };

    shophouseWaysByName.forEach((ways, name) => {
      const roadWidth = Math.max(...ways.map((road) => road.width));
      buildRoadChains(ways).forEach((chain) => placeShophouseRow(name, roadWidth, chain.points, chain.ways));
    });
    // Ruko-workshop di sepanjang akses kawasan industri.
    accessRoads.forEach((road) => placeShophouseRow(road.name, road.width, road.points, new Set([road])));

    const warehouseItems = [];
    const industrialRoofItems = [];
    const warehouseColors = [
      new THREE.Color(0x64748b),
      new THREE.Color(0x94a3b8),
      new THREE.Color(0x475569),
      new THREE.Color(0x0e7490),
      new THREE.Color(0xb45309)
    ];
    const industrialRoofColors = [
      new THREE.Color(0x334155),
      new THREE.Color(0x475569),
      new THREE.Color(0x64748b),
      new THREE.Color(0x1e293b)
    ];
    const industrialZones = [
      // Klaster logistik utara CBC, dilayani Akses Logistik Cengkareng.
      { minX: -1250, maxX: -1040, minZ: -690, maxZ: -610, stepX: 36, stepZ: 34 },
      // Industri Kalideres Barat, dilayani Akses Kawasan Industri Kalideres.
      { minX: -1500, maxX: -1370, minZ: -570, maxZ: -490, stepX: 38, stepZ: 38 },
      // Gudang ringan di utara RSUD Cengkareng.
      { minX: -1085, maxX: -985, minZ: -600, maxZ: -555, stepX: 34, stepZ: 30 },
      // Pergudangan Kalideres Utara di barat laut CBC.
      { minX: -1500, maxX: -1360, minZ: -690, maxZ: -630, stepX: 38, stepZ: 34 },
      // Blok industri antara Mall Daan Mogot dan CBC.
      { minX: -1360, maxX: -1220, minZ: -620, maxZ: -560, stepX: 38, stepZ: 34 },
      // Ekspansi logistik timur, di utara RSUD Cengkareng.
      { minX: -1000, maxX: -940, minZ: -660, maxZ: -600, stepX: 34, stepZ: 30 }
    ];

    industrialZones.forEach((zone, zoneIndex) => {
      for (let x = zone.minX; x <= zone.maxX; x += zone.stepX) {
        for (let z = zone.minZ; z <= zone.maxZ; z += zone.stepZ) {
          const hash = Math.abs(Math.sin(x * 4.71 + z * 9.13 + zoneIndex));
          const w = 22 + hash * 7;
          const d = 26 + (1 - hash) * 8;
          const h = 8 + hash * 4;
          const radius = Math.max(w, d) * 0.5;
          const px = x + (hash - 0.5) * 4;
          const pz = z + (((hash * 5.7) % 1) - 0.5) * 4;
          if (isBlocked(px, pz, radius) || isOccupied(px, pz, radius)) continue;
          placed.push({ x: px, z: pz, radius });
          warehouseItems.push({
            x: px,
            y: h * 0.5,
            z: pz,
            w,
            h,
            d,
            color: warehouseColors[Math.floor(hash * warehouseColors.length) % warehouseColors.length]
          });
          const roofH = 1.6 + hash * 1.2;
          industrialRoofItems.push({
            x: px,
            y: h,
            z: pz,
            w: w + 1.4,
            h: roofH,
            d: d + 1.4,
            color: industrialRoofColors[Math.floor(hash * industrialRoofColors.length) % industrialRoofColors.length]
          });
        }
      }
    });

    const addInstanced = (geo, mat, items, name) => {
      if (items.length === 0) return;
      const mesh = new THREE.InstancedMesh(geo, mat, items.length);
      mesh.name = name;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      items.forEach((item, idx) => {
        dummy.position.set(item.x, item.y, item.z);
        dummy.scale.set(item.w, item.h, item.d);
        dummy.rotation.set(0, item.rotY || 0, 0);
        dummy.updateMatrix();
        mesh.setMatrixAt(idx, dummy.matrix);
        mesh.setColorAt(idx, item.color);
      });
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      this.proceduralGroup.add(mesh);
    };

    addInstanced(
      baseBoxGeo,
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.78 }),
      residentialItems,
      'voidb-houses'
    );
    addInstanced(
      baseBoxGeo,
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0.15 }),
      shophouseItems,
      'voidb-shophouses'
    );
    addInstanced(
      roofGeo,
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 }),
      roofItems,
      'voidb-house-roofs'
    );
    addInstanced(
      baseBoxGeo,
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.65, metalness: 0.25 }),
      warehouseItems,
      'voidb-warehouses'
    );
    addInstanced(
      roofGeo,
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.55, metalness: 0.35 }),
      industrialRoofItems,
      'voidb-warehouse-roofs'
    );

    // Akses kawasan industri: satu mesh aspal + satu mesh bahu jalan.
    const accessRoadGeos = [];
    const accessShoulderGeos = [];
    accessRoads.forEach((road) => {
      for (let i = 0; i < road.points.length - 1; i++) {
        const [x1, z1] = road.points[i];
        const [x2, z2] = road.points[i + 1];
        const dx = x2 - x1;
        const dz = z2 - z1;
        const len = Math.hypot(dx, dz);
        if (len < 0.5) continue;
        const angle = Math.atan2(dx, dz);
        const mx = (x1 + x2) * 0.5;
        const mz = (z1 + z2) * 0.5;

        const asphalt = new THREE.BoxGeometry(road.width, 0.25, len + 0.6);
        asphalt.rotateY(angle);
        asphalt.translate(mx, 0.125, mz);
        accessRoadGeos.push(asphalt);

        [-1, 1].forEach((side) => {
          const shoulder = new THREE.BoxGeometry(2.2, 0.32, len + 0.6);
          shoulder.rotateY(angle);
          shoulder.translate(
            mx + Math.cos(angle) * (road.width * 0.5 + 1.1) * side,
            0.16,
            mz - Math.sin(angle) * (road.width * 0.5 + 1.1) * side
          );
          accessShoulderGeos.push(shoulder);
        });
      }
    });

    const accessRoadMesh = new THREE.Mesh(
      BufferGeometryUtils.mergeGeometries(accessRoadGeos, false),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.85 })
    );
    accessRoadMesh.receiveShadow = true;
    this.proceduralGroup.add(accessRoadMesh);

    const accessShoulderMesh = new THREE.Mesh(
      BufferGeometryUtils.mergeGeometries(accessShoulderGeos, false),
      new THREE.MeshStandardMaterial({ map: TextureGenerator.createSidewalkTexture(), roughness: 0.8 })
    );
    accessShoulderMesh.receiveShadow = true;
    this.proceduralGroup.add(accessShoulderMesh);

    // Pohon peneduh di sepanjang akses industri.
    const treePositions = [];
    const addTree = (x, z, scale) => {
      if (treePositions.some((t) => Math.hypot(t.x - x, t.z - z) < 6)) return;
      treePositions.push({ x, z, scale });
    };
    for (let z = -470; z >= -680; z -= 26) {
      addTree(-1440 + 8.5, z, 0.9 + (Math.abs(z) % 3) * 0.05);
      addTree(-1440 - 8.5, z, 0.88 + (Math.abs(z) % 4) * 0.05);
    }
    for (let z = -610; z >= -680; z -= 28) {
      addTree(-1200 + 8.5, z, 0.92);
      addTree(-1200 - 8.5, z, 0.9);
    }
    for (let x = -1180; x <= -1050; x += 26) {
      addTree(x, -690 + 8.5, 0.94);
      addTree(x, -690 - 8.5, 0.9);
    }

    if (treePositions.length > 0) {
      const trunkGeo = new THREE.CylinderGeometry(0.26, 0.38, 4.2, 5);
      const foliageGeo = new THREE.ConeGeometry(2.6, 6.2, 6);
      const trunkMesh = new THREE.InstancedMesh(
        trunkGeo,
        new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.9 }),
        treePositions.length
      );
      const foliageMesh = new THREE.InstancedMesh(
        foliageGeo,
        new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.85 }),
        treePositions.length
      );

      treePositions.forEach((tree, idx) => {
        dummy.position.set(tree.x, 2.1 * tree.scale, tree.z);
        dummy.scale.set(tree.scale, tree.scale, tree.scale);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        trunkMesh.setMatrixAt(idx, dummy.matrix);

        dummy.position.set(tree.x, 7.2 * tree.scale, tree.z);
        dummy.updateMatrix();
        foliageMesh.setMatrixAt(idx, dummy.matrix);
      });

      trunkMesh.castShadow = true;
      trunkMesh.receiveShadow = true;
      foliageMesh.castShadow = true;
      foliageMesh.receiveShadow = true;
      this.proceduralGroup.add(trunkMesh);
      this.proceduralGroup.add(foliageMesh);
    }

    this.voidBInfillStats = {
      houses: residentialItems.length,
      shophouses: shophouseItems.length,
      warehouses: warehouseItems.length,
      industrialRoads: accessRoads.length,
      trees: treePositions.length,
      drawCalls: 9
    };
  }

  /**
   * Void B Tahap 4: Transit TransJakarta Koridor 3 & percabangan KA Bandara
   *
   * 1. Dua halte busway di bahu selatan Jl. Daan Mogot: Rawa Buaya dan Pesakih.
   * 2. Viaduk layang KA Bandara dari Stasiun Rawa Buaya, jembatan Kanal
   *    Mookervaart, dan portal KA BANDARA di sisi barat laut.
   * 3. Rel, catenary, pilar, dan kanopi digabung menjadi enam draw call statis.
   *    Kereta Railink dua gerbong dirender terpisah mengikuti kurva viaduk.
   */
  buildVoidBTransit() {
    const concreteGeos = [];
    const canopyGeos = [];
    const glassGeos = [];
    const halteSteelGeos = [];
    const viaductSteelGeos = [];

    const makeBox = (w, h, d, x, y, z, rotY = 0, target = concreteGeos) => {
      const geo = new THREE.BoxGeometry(w, h, d);
      if (rotY !== 0) geo.rotateY(rotY);
      geo.translate(x, y, z);
      target.push(geo);
    };

    const addMerged = (geos, material, name, castShadow = false) => {
      if (geos.length === 0) return;
      const merged = BufferGeometryUtils.mergeGeometries(geos, false);
      if (!merged) return;
      const mesh = new THREE.Mesh(merged, material);
      mesh.name = name;
      mesh.castShadow = castShadow;
      mesh.receiveShadow = true;
      this.proceduralGroup.add(mesh);
    };

    // =========================================================================
    // 1. HALTE BUSWAY KORIDOR 3 DI BAHU SELATAN DAAN MOGOT
    // =========================================================================
    const daanCenterZ = (x) => -435 + ((x + 880) / (-370)) * (-15);
    const daanAngle = Math.atan2(-370, -15);
    const daanNormalX = Math.cos(daanAngle);
    const daanNormalZ = -Math.sin(daanAngle);

    const halteStops = [
      { name: 'Halte Rawa Buaya', x: -1140 },
      { name: 'Halte Pesakih', x: -1190 }
    ];

    halteStops.forEach((stop) => {
      const cx = stop.x + daanNormalX * 16.8;
      const cz = daanCenterZ(stop.x) + daanNormalZ * 16.8;

      makeBox(3.6, 0.7, 18, cx, 0.35, cz, daanAngle);
      makeBox(4.2, 0.4, 18.4, cx, 3.8, cz, daanAngle, canopyGeos);

      [-2.0, 2.0].forEach((side) => {
        makeBox(
          0.16, 0.55, 18.4,
          cx + daanNormalX * side, 3.55, cz + daanNormalZ * side,
          daanAngle, canopyGeos
        );
      });

      [-1.55, 1.55].forEach((side) => {
        makeBox(
          0.1, 2.5, 14.5,
          cx + daanNormalX * side, 2.15, cz + daanNormalZ * side,
          daanAngle, glassGeos
        );
      });

      [-1.7, 1.7].forEach((lx) => {
        [-8.4, 8.4].forEach((lz) => {
          const px = cx + daanNormalX * lx + Math.sin(daanAngle) * lz;
          const pz = cz + daanNormalZ * lx + Math.cos(daanAngle) * lz;
          makeBox(0.18, 3.3, 0.18, px, 2.35, pz, 0, halteSteelGeos);
        });
      });
    });

    // =========================================================================
    // 2. VIADUK LAYANG KA BANDARA SOEKARNO-HATTA (RAILINK)
    // Titik awal di jalur timur Stasiun Rawa Buaya, memanjat ke y=8 lalu
    // menyusuri celah bebas di timur klaster industri dan utara gudang.
    // =========================================================================
    this.bandaraRailCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1090, 0.6, -438),
      new THREE.Vector3(-1093, 1.4, -448),
      new THREE.Vector3(-1097, 3.0, -458),
      new THREE.Vector3(-1098, 4.6, -472),
      new THREE.Vector3(-1096, 6.0, -496),
      new THREE.Vector3(-1089, 6.4, -520),
      new THREE.Vector3(-1085, 7.2, -552),
      new THREE.Vector3(-1072, 7.9, -584),
      new THREE.Vector3(-1042, 8.0, -608),
      new THREE.Vector3(-1024, 8.0, -645),
      new THREE.Vector3(-1020, 8.0, -680),
      new THREE.Vector3(-1030, 8.0, -712),
      new THREE.Vector3(-1058, 8.0, -734),
      new THREE.Vector3(-1140, 8.0, -744),
      new THREE.Vector3(-1300, 8.0, -755),
      new THREE.Vector3(-1420, 8.0, -765),
      new THREE.Vector3(-1480, 8.0, -770)
    ], false, 'catmullrom', 0.15);
    this.bandaraRailCurveLength = this.bandaraRailCurve.getLength();

    const canal = VOID_B_OSM.waterways[0];
    const distToCanal = (x, z) => {
      let best = Infinity;
      for (let i = 0; i < canal.points.length - 1; i++) {
        const [ax, az] = canal.points[i];
        const [bx, bz] = canal.points[i + 1];
        const dx = bx - ax;
        const dz = bz - az;
        const lenSq = dx * dx + dz * dz;
        let t = lenSq > 0 ? ((x - ax) * dx + (z - az) * dz) / lenSq : 0;
        t = Math.max(0, Math.min(1, t));
        best = Math.min(best, Math.hypot(x - (ax + dx * t), z - (az + dz * t)));
      }
      return best;
    };

    const samples = this.bandaraRailCurve.getSpacedPoints(140);
    for (let i = 0; i < samples.length - 1; i++) {
      const a = samples[i];
      const b = samples[i + 1];
      const dx = b.x - a.x;
      const dz = b.z - a.z;
      const len = Math.hypot(dx, dz);
      if (len < 1e-4) continue;
      const angle = Math.atan2(dx, dz);
      const mx = (a.x + b.x) * 0.5;
      const my = (a.y + b.y) * 0.5;
      const mz = (a.z + b.z) * 0.5;

      // Dek girder beton hanya muncul setelah jalur meninggalkan ballast stasiun.
      if (my > 1.4) {
        makeBox(6.0, 0.7, len + 0.25, mx, my - 0.6, mz, angle);
      }

      [-1.4, 1.4].forEach((off) => {
        const nx = (-dz / len) * off;
        const nz = (dx / len) * off;
        makeBox(0.16, 0.2, len + 0.25, mx + nx, my - 0.18, mz + nz, angle, viaductSteelGeos);
        if (my > 2.5) {
          makeBox(0.05, 0.05, len + 0.2, mx + nx, my + 5.75, mz + nz, angle, viaductSteelGeos);
        }
      });
    }

    // Pilar pier berkala, dilewati di atas Kanal Mookervaart.
    for (let i = 6; i < samples.length - 6; i += 12) {
      const p = samples[i];
      if (p.y < 2.6) continue;
      if (distToCanal(p.x, p.z) < canal.width * 0.5 + 5) continue;
      const h = p.y - 0.95;
      if (h < 1.4) continue;
      makeBox(2.6, h, 2.6, p.x, h * 0.5, p.z);
      makeBox(4.6, 0.5, 4.6, p.x, h + 0.25, p.z);
    }

    // Jembatan baja di atas Kanal Mookervaart: dua girder memanjang.
    let canalSampleIndex = -1;
    let canalSampleDist = Infinity;
    samples.forEach((p, idx) => {
      const d = distToCanal(p.x, p.z);
      if (d < canalSampleDist) {
        canalSampleDist = d;
        canalSampleIndex = idx;
      }
    });
    if (canalSampleIndex > 0 && canalSampleIndex < samples.length - 1) {
      const c = samples[canalSampleIndex];
      const a = samples[canalSampleIndex - 1];
      const b = samples[canalSampleIndex + 1];
      const angle = Math.atan2(b.x - a.x, b.z - a.z);
      const nx = Math.cos(angle);
      const nz = -Math.sin(angle);
      [-2.2, 2.2].forEach((off) => {
        makeBox(0.7, 1.0, 30, c.x + nx * off, c.y - 1.35, c.z + nz * off, angle);
      });
    }

    // Catenary: tiang ganda, cross beam, dan kabel kontak di atas tiap rel.
    for (let i = 4; i < samples.length - 4; i += 12) {
      const p = samples[i];
      if (p.y < 2.5) continue;
      const a = samples[i - 1];
      const b = samples[i + 1];
      const angle = Math.atan2(b.x - a.x, b.z - a.z);
      const nx = Math.cos(angle);
      const nz = -Math.sin(angle);
      [-1, 1].forEach((side) => {
        makeBox(0.16, 5.9, 0.16, p.x + nx * 2.9 * side, p.y + 2.95, p.z + nz * 2.9 * side, 0, viaductSteelGeos);
      });
      makeBox(5.8, 0.16, 0.16, p.x, p.y + 5.95, p.z, angle, viaductSteelGeos);
    }

    // =========================================================================
    // 3. PORTAL & PAPAN NAMA KA BANDARA
    // =========================================================================
    const portal = samples[samples.length - 1];
    const portalPrev = samples[samples.length - 3];
    const portalAngle = Math.atan2(portal.x - portalPrev.x, portal.z - portalPrev.z);
    const portalNx = Math.cos(portalAngle);
    const portalNz = -Math.sin(portalAngle);

    [-6.2, 6.2].forEach((off) => {
      makeBox(1.0, 15, 1.0, portal.x + portalNx * off, 7.5, portal.z + portalNz * off, 0, viaductSteelGeos);
    });
    makeBox(13.4, 0.8, 1.0, portal.x, 14.6, portal.z, portalAngle, viaductSteelGeos);

    const signCanvas = document.createElement('canvas');
    signCanvas.width = 512;
    signCanvas.height = 128;
    const signCtx = signCanvas.getContext('2d');
    signCtx.fillStyle = '#0f3d6e';
    signCtx.fillRect(0, 0, 512, 128);
    signCtx.strokeStyle = '#f8fafc';
    signCtx.lineWidth = 8;
    signCtx.strokeRect(6, 6, 500, 116);
    signCtx.fillStyle = '#ffffff';
    signCtx.font = 'bold 64px Arial';
    signCtx.textAlign = 'center';
    signCtx.textBaseline = 'middle';
    signCtx.fillText('KA BANDARA', 256, 68);
    const signTexture = new THREE.CanvasTexture(signCanvas);
    signTexture.colorSpace = THREE.SRGBColorSpace;
    const portalSign = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 2),
      new THREE.MeshBasicMaterial({ map: signTexture, side: THREE.DoubleSide })
    );
    portalSign.position.set(portal.x, 16.1, portal.z);
    portalSign.rotation.y = Math.PI / 2;
    portalSign.name = 'voidb-transit-portal-sign';
    this.proceduralGroup.add(portalSign);

    addMerged(
      concreteGeos,
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.78 }),
      'voidb-transit-concrete',
      true
    );
    addMerged(
      canopyGeos,
      new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.45, roughness: 0.35 }),
      'voidb-transit-canopy',
      true
    );
    addMerged(
      glassGeos,
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.15, transparent: true, opacity: 0.7 }),
      'voidb-transit-glass'
    );
    addMerged(
      halteSteelGeos,
      new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.7, roughness: 0.4 }),
      'voidb-transit-halte-steel'
    );
    addMerged(
      viaductSteelGeos,
      new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8, roughness: 0.3 }),
      'voidb-transit-viaduct-steel',
      true
    );

    this.voidBTransitStats = {
      halte: halteStops.length,
      bandaraLength: Math.round(this.bandaraRailCurveLength),
      bandaraCars: 2,
      drawCalls: 6
    };
  }

  /**
   * Tahap 3 Jakarta Timur: Infill Urban Fabric, Distrik Residensial & Sentra Budaya/Komersial
   *
   * 1. 160+ Ruko komersial & koridor bisnis Rawamangun (Balai Pustaka & Pemuda), Jatinegara, dan Otista Cawang.
   * 2. 210+ Residensial modern Duren Sawit, Pondok Bambu & Cipinang (townhouse & perumahan asri).
   * 3. 28+ Fasilitas industri & pergudangan logistik Kawasan Industri Pulogadung (PT JIEP) & Hanggar Halim.
   * 4. 180+ Vegetasi perkotaan tropis: Sabuk Hijau Kanal Banjir Timur (KBT), Palem By-Pass DI Panjaitan & Hutan Kota TMII.
   * Total penambahan draw calls: Hanya 5 draw calls!
   */
  buildEastJakartaInfillAndDistricts() {
    const dummy = new THREE.Object3D();
    const baseBoxGeo = new THREE.BoxGeometry(1, 1, 1);

    // =========================================================================
    // 1. RUKO KOMERSIAL & SENTRA USAHA RAWAMANGUN, JATINEGARA & OTISTA (1 Draw Call)
    // =========================================================================
    const commMat = new THREE.MeshStandardMaterial({ roughness: 0.65, metalness: 0.2 });

    const commColors = [
      new THREE.Color(0xfef3c7), // Cream
      new THREE.Color(0xf1f5f9), // White Stucco
      new THREE.Color(0xd97706), // Warm Ochre
      new THREE.Color(0x0284c7), // Modern Cyan Glass
      new THREE.Color(0x334155), // Slate Gray
      new THREE.Color(0xb45309)  // Terracotta
    ];

    const commItems = [];

    // Blok A: Kawasan Komersial & Kuliner Rawamangun / Jl. Balai Pustaka & Pemuda
    for (let x = 860; x <= 1040; x += 18) {
      for (let z = -120; z <= 20; z += 18) {
        // Jangan timpa Velodrome Rawamangun atau jalan utama Pemuda
        if (Math.hypot(x - 945.5, z - (-57.6)) < 42) continue;
        if (Math.abs(z - (-57.6)) < 15) continue; // Koridor Jl. Pemuda

        const hash = Math.abs(Math.sin(x * 12.9898 + z * 78.233));
        const h = 11 + hash * 12; // 3-6 lantai (11m - 23m)
        const w = 12 + hash * 4;
        const d = 13 + (1 - hash) * 4;
        const colIdx = Math.floor(hash * commColors.length) % commColors.length;

        commItems.push({
          x: x + (hash - 0.5) * 3,
          y: h * 0.5,
          z: z + (hash - 0.5) * 3,
          w,
          h,
          d,
          color: commColors[colIdx]
        });
      }
    }

    // Blok B: Sentra Perdagangan & Pasar Jatinegara
    for (let x = 600; x <= 720; x += 16) {
      for (let z = 220; z <= 360; z += 18) {
        // Jangan timpa Stasiun Jatinegara atau rel
        if (Math.hypot(x - 666.1, z - 282.6) < 45) continue;
        if (Math.abs(z - 282.6) < 14) continue;

        const hash = Math.abs(Math.sin(x * 7.123 + z * 91.456));
        const h = 10 + hash * 8; // 3-4 lantai
        const w = 11 + hash * 3;
        const d = 12 + (1 - hash) * 3;
        const colIdx = Math.floor(hash * commColors.length) % commColors.length;

        commItems.push({
          x: x + (hash - 0.5) * 2,
          y: h * 0.5,
          z: z + (hash - 0.5) * 2,
          w,
          h,
          d,
          color: commColors[colIdx]
        });
      }
    }

    // Blok C: Koridor Bisnis & Transit Otista - Cawang
    for (let x = 620; x <= 740; x += 18) {
      for (let z = 540; z <= 690; z += 20) {
        // Jangan timpa Simpang Susun Cawang
        if (Math.hypot(x - 712.3, z - 723.8) < 55) continue;
        if (Math.abs(x - 640) < 14) continue; // Jl. Otista

        const hash = Math.abs(Math.sin(x * 33.22 + z * 17.88));
        const h = 12 + hash * 16; // 4-7 lantai
        const w = 13 + hash * 4;
        const d = 14 + (1 - hash) * 4;
        const colIdx = Math.floor(hash * commColors.length) % commColors.length;

        commItems.push({
          x: x + (hash - 0.5) * 3,
          y: h * 0.5,
          z: z + (hash - 0.5) * 3,
          w,
          h,
          d,
          color: commColors[colIdx]
        });
      }
    }

    if (commItems.length > 0) {
      const commMesh = new THREE.InstancedMesh(baseBoxGeo, commMat, commItems.length);
      commMesh.receiveShadow = true;
      commMesh.castShadow = true;

      commItems.forEach((c, idx) => {
        dummy.position.set(c.x, c.y, c.z);
        dummy.scale.set(c.w, c.h, c.d);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        commMesh.setMatrixAt(idx, dummy.matrix);
        commMesh.setColorAt(idx, c.color);
      });

      commMesh.instanceMatrix.needsUpdate = true;
      if (commMesh.instanceColor) commMesh.instanceColor.needsUpdate = true;
      this.proceduralGroup.add(commMesh);
    }

    // =========================================================================
    // 2. DISTRIK RESIDENSIAL MODERN DUREN SAWIT, PONDOK BAMBU & CIPINANG (1 Draw Call)
    // =========================================================================
    const resMat = new THREE.MeshStandardMaterial({ roughness: 0.7, metalness: 0.1 });
    const resColors = [
      new THREE.Color(0xfef3c7), // Warm Vanilla
      new THREE.Color(0xe2e8f0), // Modern Slate White
      new THREE.Color(0xd4d4d8), // Concrete Gray
      new THREE.Color(0xfef08a), // Pastel Yellow
      new THREE.Color(0xfbcfe8), // Soft Warm Rose
      new THREE.Color(0xccfbf1)  // Mint White
    ];

    const resItems = [];

    // Distrik Duren Sawit & Pondok Bambu (Sisi Barat & Timur KBT)
    for (let x = 1080; x <= 1380; x += 18) {
      for (let z = 180; z <= 560; z += 20) {
        // Jangan timpa Kanal Banjir Timur
        if (Math.abs(x - (1150 - (z - 350) * 0.5)) < 24) continue;
        if (Math.abs(z - 520) < 15) continue; // Jl. Kolonel Sugiono

        const hash = Math.abs(Math.sin(x * 19.456 + z * 41.789));
        const h = 7.5 + hash * 5.5; // 2-3 lantai townhouse
        const w = 11 + hash * 3;
        const d = 12 + (1 - hash) * 3;
        const colIdx = Math.floor(hash * resColors.length) % resColors.length;

        resItems.push({
          x: x + (hash - 0.5) * 3,
          y: h * 0.5,
          z: z + (hash - 0.5) * 3,
          w,
          h,
          d,
          color: resColors[colIdx]
        });
      }
    }

    // Kawasan Residensial Cipinang & Kebon Nanas
    for (let x = 740; x <= 880; x += 18) {
      for (let z = 280; z <= 480; z += 18) {
        if (Math.abs(x - 720) < 16) continue; // By-Pass DI Panjaitan
        if (Math.abs(z - 520) < 15) continue; // Jl. Basuki Rahmat

        const hash = Math.abs(Math.sin(x * 29.11 + z * 63.77));
        const h = 8 + hash * 7; // 2-3 lantai
        const w = 11 + hash * 3;
        const d = 12 + (1 - hash) * 3;
        const colIdx = Math.floor(hash * resColors.length) % resColors.length;

        resItems.push({
          x: x + (hash - 0.5) * 2,
          y: h * 0.5,
          z: z + (hash - 0.5) * 2,
          w,
          h,
          d,
          color: resColors[colIdx]
        });
      }
    }

    if (resItems.length > 0) {
      const resMesh = new THREE.InstancedMesh(baseBoxGeo, resMat, resItems.length);
      resMesh.receiveShadow = true;
      resMesh.castShadow = true;

      resItems.forEach((r, idx) => {
        dummy.position.set(r.x, r.y, r.z);
        dummy.scale.set(r.w, r.h, r.d);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        resMesh.setMatrixAt(idx, dummy.matrix);
        resMesh.setColorAt(idx, r.color);
      });

      resMesh.instanceMatrix.needsUpdate = true;
      if (resMesh.instanceColor) resMesh.instanceColor.needsUpdate = true;
      this.proceduralGroup.add(resMesh);
    }

    // =========================================================================
    // 3. KAWASAN INDUSTRI PULOGADUNG (PT JIEP) & HANGGAR LOGISTIK (1 Draw Call)
    // =========================================================================
    const factoryMat = new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.45 });
    const factoryColors = [
      new THREE.Color(0x334155), // Industrial Slate
      new THREE.Color(0x475569), // Factory Steel Gray
      new THREE.Color(0x0284c7), // Corporate Blue Warehouse
      new THREE.Color(0x64748b), // Galvanized Zinc
      new THREE.Color(0xf1f5f9)  // Clean Logistics White
    ];

    const factoryItems = [];

    // Kompleks Kawasan Industri Pulogadung (JIEP) di timur laut
    for (let x = 1200; x <= 1450; x += 45) {
      for (let z = -140; z <= 40; z += 45) {
        if (Math.abs(z - (-30)) < 16) continue; // Jl. Pemuda ujung timur

        const hash = Math.abs(Math.sin(x * 51.23 + z * 19.87));
        const w = 32 + hash * 12; // 32m - 44m lebar gudang pabrik
        const d = 34 + (1 - hash) * 12; // 34m - 46m panjang
        const h = 12 + hash * 5; // 12m - 17m tinggi hanggar pabrik
        const colIdx = Math.floor(hash * factoryColors.length) % factoryColors.length;

        factoryItems.push({
          x: x + (hash - 0.5) * 5,
          y: h * 0.5,
          z: z + (hash - 0.5) * 5,
          w,
          h,
          d,
          color: factoryColors[colIdx]
        });
      }
    }

    // Kompleks Aviasi & Barak Militer Halim
    for (let x = 800; x <= 1020; x += 40) {
      for (let z = 880; z <= 1120; z += 45) {
        // Jangan timpa Runway atau Bandara Halim
        if (Math.hypot(x - 893.2, z - 993.0) < 55) continue;
        if (Math.abs(x - (z * 0.42 + 450)) < 22) continue; // Runway clearance

        const hash = Math.abs(Math.sin(x * 43.11 + z * 87.22));
        const w = 26 + hash * 8;
        const d = 30 + (1 - hash) * 8;
        const h = 10 + hash * 4;
        const colIdx = Math.floor(hash * factoryColors.length) % factoryColors.length;

        factoryItems.push({
          x: x + (hash - 0.5) * 4,
          y: h * 0.5,
          z: z + (hash - 0.5) * 4,
          w,
          h,
          d,
          color: factoryColors[colIdx]
        });
      }
    }

    if (factoryItems.length > 0) {
      const factMesh = new THREE.InstancedMesh(baseBoxGeo, factoryMat, factoryItems.length);
      factMesh.receiveShadow = true;
      factMesh.castShadow = true;

      factoryItems.forEach((f, idx) => {
        dummy.position.set(f.x, f.y, f.z);
        dummy.scale.set(f.w, f.h, f.d);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        factMesh.setMatrixAt(idx, dummy.matrix);
        factMesh.setColorAt(idx, f.color);
      });

      factMesh.instanceMatrix.needsUpdate = true;
      if (factMesh.instanceColor) factMesh.instanceColor.needsUpdate = true;
      this.proceduralGroup.add(factMesh);
    }

    // =========================================================================
    // 4. VEGETASI PERKOTAAN TROPIS JAKARTA TIMUR (Instanced Trees, 2 Draw Calls)
    // =========================================================================
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.8 });
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });

    const treeTransforms = [];

    // Sabuk Hijau Tanggul Kanal Banjir Timur (KBT)
    // Berjejer di sepanjang kedua tepi kanal
    const kbtWaypoints = [
      [850, 580], [950, 500], [1050, 420], [1150, 350],
      [1230, 230], [1320, 100], [1410, -80], [1500, -250]
    ];
    for (let i = 0; i < kbtWaypoints.length - 1; i++) {
      const [x1, z1] = kbtWaypoints[i];
      const [x2, z2] = kbtWaypoints[i + 1];
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const angle = Math.atan2(dx, dz);
      const steps = Math.max(2, Math.floor(len / 22));

      for (let s = 0; s < steps; s++) {
        const t = (s + 0.5) / steps;
        const tx = x1 + dx * t;
        const tz = z1 + dz * t;
        // Pohon di tanggul barat & timur kanal
        const perpX = Math.cos(angle) * 16;
        const perpZ = -Math.sin(angle) * 16;
        treeTransforms.push({ x: tx + perpX, z: tz + perpZ, scale: 1.15, isPalm: false });
        treeTransforms.push({ x: tx - perpX, z: tz - perpZ, scale: 1.15, isPalm: false });
      }
    }

    // Pohon Palem Raja di By-Pass DI Panjaitan & Cawang
    for (let z = 60; z <= 700; z += 24) {
      treeTransforms.push({ x: 712, z, scale: 1.1, isPalm: true });
    }

    // Hutan Kota & Lanskap Hijau Lingkar Luar TMII & Cipayung
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
      const tx = 1040.2 + Math.cos(a) * 62;
      const tz = 1551.5 + Math.sin(a) * 58;
      treeTransforms.push({ x: tx, z: tz, scale: 1.25, isPalm: false });
    }

    // Penghijauan Taman Sekitar Monumen Pancasila Sakti
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
      const tx = 1182.3 + Math.cos(a) * 44;
      const tz = 1324.1 + Math.sin(a) * 38;
      treeTransforms.push({ x: tx, z: tz, scale: 1.2, isPalm: false });
    }

    if (treeTransforms.length > 0) {
      const trunkGeo = new THREE.CylinderGeometry(0.25, 0.45, 4.5, 6);
      const foliageGeo = new THREE.SphereGeometry(2.5, 8, 8);
      const trunkMesh = new THREE.InstancedMesh(trunkGeo, trunkMat, treeTransforms.length);
      const foliageMesh = new THREE.InstancedMesh(foliageGeo, foliageMat, treeTransforms.length);

      trunkMesh.receiveShadow = true;
      foliageMesh.receiveShadow = true;

      treeTransforms.forEach((t, idx) => {
        dummy.position.set(t.x, 2.25 * t.scale, t.z);
        dummy.scale.set(t.scale, t.scale, t.scale);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        trunkMesh.setMatrixAt(idx, dummy.matrix);

        dummy.position.set(t.x, 5.0 * t.scale, t.z);
        dummy.scale.set(t.isPalm ? t.scale * 1.3 : t.scale * 1.0, t.scale * 0.85, t.isPalm ? t.scale * 1.3 : t.scale * 1.0);
        dummy.updateMatrix();
        foliageMesh.setMatrixAt(idx, dummy.matrix);
      });

      trunkMesh.instanceMatrix.needsUpdate = true;
      foliageMesh.instanceMatrix.needsUpdate = true;
      this.proceduralGroup.add(trunkMesh);
      this.proceduralGroup.add(foliageMesh);
    }
  }

  /**
   * Builds all 22 official Jakarta landmarks at their true map positions and orientations
   */
  buildLandmarks() {
    const builders = {
      "istana-merdeka": () => LandmarkModels.createIstanaMerdeka(),
      "masjid-istiqlal": () => LandmarkModels.createMasjidIstiqlal(),
      "gereja-katedral": () => LandmarkModels.createGerejaKatedral(),
      "lapangan-banteng": () => LandmarkModels.createLapanganBanteng(),
      "monas": () => LandmarkModels.createMonas(),
      "stasiun-gambir": () => LandmarkModels.createStasiunGambir(),
      "patung-kuda": () => LandmarkModels.createPatungKuda(),
      "tugu-tani": () => LandmarkModels.createTuguTani(),
      "gedung-sarinah": () => LandmarkModels.createSarinah(),
      "bundaran-hi": () => LandmarkModels.createBundaranHI(),
      "menara-bca": () => LandmarkModels.createMenaraBCA(),
      "autograph-tower": () => LandmarkModels.createAutographTower(),
      "taman-suropati": () => LandmarkModels.createTamanSuropati(),
      "dukuh-atas": () => LandmarkModels.createDukuhAtas(),
      "wisma-46": () => LandmarkModels.createWisma46(),
      "sampoerna-strategic": () => LandmarkModels.createSampoernaStrategic(),
      "jpo-phinisi": () => LandmarkModels.createJPOPhinisi(),
      "simpang-semanggi": () => LandmarkModels.createSimpangSemanggi(),
      "gedung-dpr-mpr": () => LandmarkModels.createGedungDPR(),
      "mega-kuningan": () => LandmarkModels.createMegaKuningan(),
      "scbd-district": () => this.createSCBDCluster(),
      "gbk-senayan": () => LandmarkModels.createGBK(),
      "bundaran-senayan": () => LandmarkModels.createBundaranSenayan(),
      "podomoro-city-central-park": () => LandmarkModels.createPodomoroCity(),
      "mall-taman-anggrek": () => LandmarkModels.createMallTamanAnggrek(),
      "kawasan-pendidikan-grogol": () => LandmarkModels.createKawasanGrogol(),
      "rs-harapan-kita-dharmais": () => LandmarkModels.createPusatMedisSlipi(),
      "wisma-barito-pacific": () => LandmarkModels.createSentraBisnisSlipi(),
      "pasar-tanah-abang": () => LandmarkModels.createPasarTanahAbang(),
      "stasiun-tanah-abang": () => LandmarkModels.createStasiunTanahAbang(),
      "stasiun-palmerah": () => LandmarkModels.createStasiunPalmerah(),
      "binus-university": () => LandmarkModels.createBinusUniversity(),
      "mediterania-tanjung-duren": () => LandmarkModels.createMediteraniaTanjungDuren(),
      "sekretariat-asean": () => LandmarkModels.createSekretariatAsean(),
      "csw-asean-hub": () => LandmarkModels.createCSWAseanHub(),
      "kejaksaan-agung": () => LandmarkModels.createKejaksaanAgung(),
      "m-bloc-space": () => LandmarkModels.createMBlocSpace(),
      "stasiun-mrt-blok-m": () => LandmarkModels.createStasiunMRTBlokM(),
      "distrik-melawai": () => LandmarkModels.createDistrikMelawai(),
      "jiexpo-kemayoran": () => LandmarkModels.createJIExpoKemayoran(),
      "menara-atc-kemayoran": () => LandmarkModels.createMenaraATCKemayoran(),
      "stasiun-pasar-senen": () => LandmarkModels.createStasiunPasarSenen(),
      "pasar-senen-jaya": () => LandmarkModels.createPasarSenenJaya(),
      "taman-ismail-marzuki": () => LandmarkModels.createTamanIsmailMarzuki(),
      "passer-baroe": () => LandmarkModels.createPasserBaroe(),
      "patung-dirgantara-pancoran": () => LandmarkModels.createPatungDirgantaraPancoran(),
      "menara-saidah": () => LandmarkModels.createMenaraSaidah(),
      "south-quarter-simatupang": () => LandmarkModels.createSouthQuarterTowers(),
      "pondok-indah-mall": () => LandmarkModels.createPondokIndahMall(),
      "stasiun-mrt-fatmawati": () => LandmarkModels.createStasiunMRTFatmawati(),
      "kemang-village-lifestyle": () => LandmarkModels.createKemangVillage(),
      "jis-stadium": () => LandmarkModels.createJISStadium(),
      "ancol-dufan": () => LandmarkModels.createAncolDufan(),
      "sunda-kelapa": () => LandmarkModels.createSundaKelapaPort(),
      "jembatan-kota-intan": () => LandmarkModels.createKotaIntanBridge(),
      "mall-kelapa-gading": () => LandmarkModels.createMallKelapaGading(),
      "tanjung-priok": () => LandmarkModels.createTanjungPriokPort(),
      "walikota-jakarta-barat": () => LandmarkModels.createKantorWalikotaJakbar(),
      "lippo-mall-puri": () => LandmarkModels.createLippoMallPuri(),
      "puri-indah-mall": () => LandmarkModels.createPuriIndahMall(),
      "glodok-chinatown": () => LandmarkModels.createGlodokChinatown(),
      "mnc-studios-kebon-jeruk": () => LandmarkModels.createMNCStudiosKebonJeruk(),
      "museum-macan": () => LandmarkModels.createMuseumMACAN(),
      "stasiun-jatinegara": () => LandmarkModels.createStasiunJatinegara(),
      "bandara-halim-perdanakusuma": () => LandmarkModels.createBandaraHalim(),
      "taman-mini-indonesia-indah": () => LandmarkModels.createTamanMiniIndonesiaIndah(),
      "jakarta-international-velodrome": () => LandmarkModels.createVelodromeRawamangun(),
      "simpang-susun-cawang": () => LandmarkModels.createSimpangSusunCawang(),
      "monumen-pancasila-sakti": () => LandmarkModels.createMonumenPancasilaSakti(),
      "rs-graha-kedoya": () => LandmarkModels.createRSGrahaKedoya(),
      "wang-residence-kedoya": () => LandmarkModels.createWangResidenceKedoya(),
      "ipeka-puri-greenville": () => LandmarkModels.createIPEKAGreenville(),
      "sentra-kuliner-greenville": () => LandmarkModels.createSentraKulinerGreenville(),
      "sentra-pos-pengumben": () => LandmarkModels.createSentraPosPengumben(),
      "taman-cattleya-tomang": () => LandmarkModels.createTamanCattleyaTomang(),
      "terminal-bus-kalideres": () => LandmarkModels.createTerminalBusKalideres(),
      "rsud-cengkareng": () => LandmarkModels.createRSUDCengkareng(),
      "daan-mogot-mall": () => LandmarkModels.createDaanMogotMall(),
      "stasiun-rawa-buaya-hub": () => LandmarkModels.createStasiunRawaBuayaHub(),
      "danau-rawa-buaya": () => LandmarkModels.createDanauRawaBuaya(),
      "cengkareng-business-city": () => LandmarkModels.createCengkarengBusinessCity(),
      "universitas-mercu-buana": () => LandmarkModels.createUniversitasMercuBuana(),
      "rsud-kembangan": () => LandmarkModels.createRSUDKembangan(),
      "pasar-meruya": () => LandmarkModels.createPasarMeruya(),
      "stasiun-kembangan": () => LandmarkModels.createStasiunKembangan(),
      "bendungan-polor": () => LandmarkModels.createBendunganPolor(),
      "kampung-makan-joglo": () => LandmarkModels.createKampungMakanJoglo()
    };

    JAKARTA_LANDMARKS.forEach((item) => {
      const builder = builders[item.id];
      if (!builder) return;

      const model = builder();
      model.position.set(...item.position);
      if (item.rotationY) {
        model.rotation.y = item.rotationY;
      }

      model.userData = {
        landmarkData: item,
        isClickable: true
      };

      model.traverse((child) => {
        if (child.isMesh) {
          child.userData = model.userData;
          this.interactiveObjects.push(child);
        }
      });

      this.proceduralGroup.add(model);
    });
  }

  /**
   * Detailed SCBD Cluster (Treasury Tower, District 8, IDX, Pacific Place)
   */
  createSCBDCluster() {
    const group = new THREE.Group();
    const buildings = [
      { x: -18, z: -15, w: 26, d: 24, h: 168, style: 'dark-minimal' },
      { x: 20, z: -18, w: 24, d: 22, h: 135, style: 'modern-blue' },
      { x: -16, z: 22, w: 22, d: 22, h: 148, style: 'bronze-glass' },
      { x: 24, z: 20, w: 26, d: 22, h: 112, style: 'modern-blue' },
      { x: 2, z: 48, w: 28, d: 24, h: 152, style: 'wisma-teal' }
    ];

    buildings.forEach((b) => {
      const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
        style: b.style,
        floors: Math.floor(b.h / 3.5),
        windowsAcross: 14
      });

      const mat = new THREE.MeshStandardMaterial({
        map: diffuseTexture,
        emissiveMap: emissiveTexture,
        emissive: 0x0284c7,
        emissiveIntensity: 0.28,
        roughness: 0.25,
        metalness: 0.5
      });
      this.nightMaterials.push(mat);

      const mesh = new THREE.Mesh(new THREE.BoxGeometry(b.w, b.h, b.d), mat);
      mesh.position.set(b.x, b.h / 2, b.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
    });

    return group;
  }

  /**
   * Builds authentic Central & South Jakarta urban neighborhoods:
   * 1. Straight MH Thamrin High-Rises (Patung Kuda to Dukuh Atas)
   * 2. Diagonal 23° SSW Jenderal Sudirman Skyscrapers (Dukuh Atas to Senayan)
   * 3. Garden City Menteng & Cikini (Terracotta Roof Colonial Villas & Mid-rises)
   * 4. Kebon Sirih, Sabang & Tanah Abang Commercial Blocks
   * 5. Segitiga Emas Kuningan & Gatot Subroto High-Rises
   */
  buildUrbanDistricts() {
    const styles = ['modern-blue', 'bronze-glass', 'dark-minimal', 'wisma-teal'];

    const sharedMaterials = styles.map((style) => {
      const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
        style,
        floors: 28,
        windowsAcross: 12
      });
      const mat = new THREE.MeshStandardMaterial({
        map: diffuseTexture,
        emissiveMap: emissiveTexture,
        emissive: style === 'bronze-glass' ? 0xd97706 : 0x0284c7,
        emissiveIntensity: 0,
        roughness: 0.22,
        metalness: 0.82
      });
      this.nightMaterials.push(mat);
      return mat;
    });

    const buildingMaterials = {
      highRiseRoofMat: new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.88,
        metalness: 0.12
      }),
      midRiseRoofMat: new THREE.MeshStandardMaterial({
        color: 0x475569,
        roughness: 0.85,
        metalness: 0.1
      }),
      midRiseWallMat: new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        roughness: 0.48,
        metalness: 0.28
      }),
      lowRiseRoofMat: new THREE.MeshStandardMaterial({
        color: 0x9a3412,
        roughness: 0.78,
        metalness: 0.05
      }),
      lowRiseWallMat: new THREE.MeshStandardMaterial({
        color: 0xf1f5f9,
        roughness: 0.75,
        metalness: 0.08
      })
    };

    fetch('./src/data/jakarta_osm.json')
      .then((res) => res.json())
      .then((osm) => {
        this.renderOSMLayers(osm, sharedMaterials, buildingMaterials);
      })
      .catch((err) => {
        console.warn('Failed to load jakarta_osm.json:', err);
      });
  }

  isInsideFountainOrMonument(x, z) {
    // Bundaran HI central fountain pool (0, 0)
    if (x * x + z * z < 15.5 * 15.5) return true;
    // Bundaran Patung Kuda central fountain pool (-3, -215)
    if ((x + 3) * (x + 3) + (z + 215) * (z + 215) < 15.5 * 15.5) return true;
    // Bundaran Senayan central fountain pool (-316, 478)
    if ((x + 316) * (x + 316) + (z - 478) * (z - 478) < 19.5 * 19.5) return true;
    // Monas internal plaza east of Jl. Medan Merdeka Barat (x > 2 to +96, z = -332 to -220)
    if (x > 2 && x < 96 && z > -332 && z < -220) return true;
    return false;
  }

  buildMergedRibbonGeometry(ways, getWidth, getY, skipMonuments = false) {
    const positions = [];
    for (let i = 0; i < ways.length; i++) {
      const way = ways[i];
      const pts = way.p;
      if (!pts || pts.length < 2) continue;
      const halfW = getWidth(way) * 0.5;
      const y = getY(way);

      for (let j = 0; j < pts.length - 1; j++) {
        const x1 = pts[j][0];
        const z1 = pts[j][1];
        const x2 = pts[j + 1][0];
        const z2 = pts[j + 1][1];
        if (
          skipMonuments &&
          (this.isInsideFountainOrMonument(x1, z1) ||
            this.isInsideFountainOrMonument(x2, z2) ||
            this.isInsideFountainOrMonument((x1 + x2) * 0.5, (z1 + z2) * 0.5))
        ) {
          continue;
        }
        const dx = x2 - x1;
        const dz = z2 - z1;
        const len = Math.hypot(dx, dz);
        if (len < 0.05) continue;

        const nx = (-dz / len) * halfW;
        const nz = (dx / len) * halfW;

        const ax = x1 + nx, az = z1 + nz;
        const bx = x1 - nx, bz = z1 - nz;
        const cx = x2 + nx, cz = z2 + nz;
        const dx2 = x2 - nx, dz2 = z2 - nz;

        // Counter-clockwise winding in XZ so normal points +Y (upward toward camera)
        positions.push(
          ax, y, az,
          cx, y, cz,
          bx, y, bz,
          bx, y, bz,
          cx, y, cz,
          dx2, y, dz2
        );
      }
    }
    if (positions.length === 0) return null;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.computeVertexNormals();
    return geo;
  }

  buildMergedBuildingWallsGeometry(buildings) {
    const positions = [];
    const normals = [];
    const uvs = [];

    for (let i = 0; i < buildings.length; i++) {
      const b = buildings[i];
      const pts = b.p;
      if (!pts || pts.length < 3) continue;
      const h = b.h || 12;

      let cumDist = 0;
      const ptCount = pts.length;
      for (let j = 0; j < ptCount; j++) {
        const x1 = pts[j][0];
        const z1 = pts[j][1];
        const next = (j + 1) % ptCount;
        const x2 = pts[next][0];
        const z2 = pts[next][1];

        const dx = x2 - x1;
        const dz = z2 - z1;
        const edgeLen = Math.hypot(dx, dz);
        if (edgeLen < 0.05) continue;

        // Normal perpendicular to wall edge pointing outward (counter-clockwise winding in XZ)
        const nx = -dz / edgeLen;
        const nz = dx / edgeLen;

        const u1 = cumDist * 0.16;
        const u2 = (cumDist + edgeLen) * 0.16;
        cumDist += edgeLen;
        const vTop = h * 0.24;

        // Counter-clockwise quad triangles facing outward:
        // Triangle 1: (x1, 0, z1) -> (x2, h, z2) -> (x1, h, z1)
        positions.push(
          x1, 0, z1,
          x2, h, z2,
          x1, h, z1
        );
        normals.push(
          nx, 0, nz,
          nx, 0, nz,
          nx, 0, nz
        );
        uvs.push(
          u1, 0,
          u2, vTop,
          u1, vTop
        );

        // Triangle 2: (x1, 0, z1) -> (x2, 0, z2) -> (x2, h, z2)
        positions.push(
          x1, 0, z1,
          x2, 0, z2,
          x2, h, z2
        );
        normals.push(
          nx, 0, nz,
          nx, 0, nz,
          nx, 0, nz
        );
        uvs.push(
          u1, 0,
          u2, 0,
          u2, vTop
        );
      }
    }

    if (positions.length === 0) return null;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    return geo;
  }

  applyBuildingUVs(geo) {
    const pos = geo.attributes.position;
    const normal = geo.attributes.normal;
    const uv = geo.attributes.uv;
    if (!pos || !normal || !uv) return;

    for (let i = 0; i < pos.count; i++) {
      const ny = normal.getY(i);
      // Side walls (vertical faces where |ny| < 0.5)
      if (Math.abs(ny) < 0.5) {
        const y = pos.getY(i);
        const x = pos.getX(i);
        const z = pos.getZ(i);
        const nx = normal.getX(i);
        const nz = normal.getZ(i);

        // Continuous horizontal perimeter coordinate and vertical floor scaling
        const u = (x * -nz + z * nx) * 0.16;
        const v = y * 0.24;
        uv.setXY(i, u, v);
      }
    }
    uv.needsUpdate = true;
  }

  renderOSMLayers(osm, sharedMaterials, bldMats) {
    // 1. Real OpenStreetMap Parks & Green Spaces (165 parks - Merged into 1 draw call)
    const parkMat = new THREE.MeshStandardMaterial({
      color: 0x14532d,
      roughness: 0.9,
      metalness: 0.05,
      side: THREE.DoubleSide
    });
    if (osm.parks && osm.parks.length) {
      const parkGeos = [];
      osm.parks.forEach((park) => {
        if (!park.p || park.p.length < 3) return;
        const shape = new THREE.Shape();
        shape.moveTo(park.p[0][0], -park.p[0][1]);
        for (let i = 1; i < park.p.length; i++) {
          shape.lineTo(park.p[i][0], -park.p[i][1]);
        }
        const geo = new THREE.ShapeGeometry(shape);
        geo.rotateX(-Math.PI / 2);
        geo.translate(0, 0.015, 0);
        parkGeos.push(geo);
      });
      if (parkGeos.length > 0) {
        const mergedParks = BufferGeometryUtils.mergeGeometries(parkGeos, false);
        if (mergedParks) {
          const mesh = new THREE.Mesh(mergedParks, parkMat);
          mesh.receiveShadow = true;
          this.proceduralGroup.add(mesh);
        }
      }
    }

    // 2. Real OpenStreetMap Water Bodies & Rivers/Canals (Merged into 1 draw call)
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      roughness: 0.15,
      metalness: 0.85,
      side: THREE.DoubleSide
    });
    if (osm.waterPolygons && osm.waterPolygons.length) {
      const waterGeos = [];
      osm.waterPolygons.forEach((wp) => {
        if (!wp.p || wp.p.length < 3) return;
        const shape = new THREE.Shape();
        shape.moveTo(wp.p[0][0], -wp.p[0][1]);
        for (let i = 1; i < wp.p.length; i++) {
          shape.lineTo(wp.p[i][0], -wp.p[i][1]);
        }
        const geo = new THREE.ShapeGeometry(shape);
        geo.rotateX(-Math.PI / 2);
        geo.translate(0, 0.03, 0);
        waterGeos.push(geo);
      });
      if (waterGeos.length > 0) {
        const mergedWater = BufferGeometryUtils.mergeGeometries(waterGeos, false);
        if (mergedWater) {
          const mesh = new THREE.Mesh(mergedWater, waterMat);
          this.proceduralGroup.add(mesh);
        }
      }
    }

    if (osm.waterways && osm.waterways.length) {
      const riverGeo = this.buildMergedRibbonGeometry(
        osm.waterways,
        (w) => (w.t === 'canal' ? 14.5 : 10.5),
        () => 0.035,
        true
      );
      if (riverGeo) {
        const riverMesh = new THREE.Mesh(riverGeo, waterMat);
        this.proceduralGroup.add(riverMesh);
      }
    }

    // 3. Real OpenStreetMap Jakarta Street Network (Single Source of Truth for all roads)
    if (osm.roads && osm.roads.length) {
      const arterialWays = osm.roads.filter((r) =>
        r.t === 'motorway' || r.t === 'trunk' || r.t === 'primary' || r.t === 'motorway_link' || r.t === 'trunk_link'
      );
      const localWays = osm.roads.filter((r) =>
        r.t === 'secondary' || r.t === 'tertiary' || r.t === 'residential' || r.t === 'unclassified'
      );

      const curbMat = new THREE.MeshStandardMaterial({
        color: 0x475569,
        roughness: 0.85,
        side: THREE.DoubleSide
      });
      const arterialMat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.78,
        metalness: 0.12,
        side: THREE.DoubleSide
      });
      const localRoadMat = new THREE.MeshStandardMaterial({
        color: 0x334155,
        roughness: 0.85,
        metalness: 0.08,
        side: THREE.DoubleSide
      });
      const centerLineMat = new THREE.MeshBasicMaterial({
        color: 0x94a3b8,
        side: THREE.DoubleSide
      });

      // Sidewalk/curb casing beneath arterial OSM roads
      const arterialCurbGeo = this.buildMergedRibbonGeometry(
        arterialWays,
        (r) => (r.t === 'motorway' || r.t === 'trunk' ? 14.5 : 11.2),
        (r) => (r.l ? 0.33 : 0.048),
        true
      );
      if (arterialCurbGeo) {
        this.proceduralGroup.add(new THREE.Mesh(arterialCurbGeo, curbMat));
      }

      const arterialGeo = this.buildMergedRibbonGeometry(
        arterialWays,
        (r) => (r.t === 'motorway' || r.t === 'trunk' ? 12.0 : 9.2),
        (r) => (r.l ? 0.35 : 0.055),
        true
      );
      if (arterialGeo) {
        const mesh = new THREE.Mesh(arterialGeo, arterialMat);
        mesh.receiveShadow = true;
        this.proceduralGroup.add(mesh);
      }

      // Subtle center lane marking along major trunk/motorway corridors
      const majorWays = arterialWays.filter((r) => r.t === 'motorway' || r.t === 'trunk');
      const centerLineGeo = this.buildMergedRibbonGeometry(
        majorWays,
        () => 0.32,
        (r) => (r.l ? 0.365 : 0.068),
        true
      );
      if (centerLineGeo) {
        this.proceduralGroup.add(new THREE.Mesh(centerLineGeo, centerLineMat));
      }

      const localGeo = this.buildMergedRibbonGeometry(
        localWays,
        (r) => (r.t === 'secondary' ? 6.6 : r.t === 'tertiary' ? 4.8 : 3.5),
        () => 0.05,
        true
      );
      if (localGeo) {
        const mesh = new THREE.Mesh(localGeo, localRoadMat);
        mesh.receiveShadow = true;
        this.proceduralGroup.add(mesh);
      }
    }

    // 4. Real OpenStreetMap Railways (KRL Commuter Line, MRT, LRT, KA Antarkota)
    if (osm.railways && osm.railways.length) {
      // 4a. Ballast Bed (Bantalan Kerikil Kasar)
      const ballastMat = new THREE.MeshStandardMaterial({
        color: 0x334155,
        roughness: 0.95,
        metalness: 0.05,
        side: THREE.DoubleSide
      });
      const ballastGeo = this.buildMergedRibbonGeometry(
        osm.railways,
        () => 5.2,
        (r) => (r.b ? 0.44 : 0.09),
        true
      );
      if (ballastGeo) {
        const ballastMesh = new THREE.Mesh(ballastGeo, ballastMat);
        ballastMesh.receiveShadow = true;
        this.proceduralGroup.add(ballastMesh);
      }

      // 4b. Twin Steel Rails (Rel Baja Mengkilap)
      const steelRailMat = new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        roughness: 0.25,
        metalness: 0.85,
        side: THREE.DoubleSide
      });
      const steelRailGeo = this.buildMergedRibbonGeometry(
        osm.railways,
        () => 2.4,
        (r) => (r.b ? 0.48 : 0.13),
        true
      );
      if (steelRailGeo) {
        const steelRailMesh = new THREE.Mesh(steelRailGeo, steelRailMat);
        steelRailMesh.receiveShadow = true;
        this.proceduralGroup.add(steelRailMesh);
      }

      // 4c. Tiang Portal Listrik Aliran Atas (LAA / Overhead Catenary Gantries) along KRL corridor
      const krlWays = osm.railways.filter((r) => r.p && r.p.some(([x, z]) => x < -50 && z > -350 && z < 350));
      const gantryTransforms = [];
      let distAcc = 0;

      krlWays.forEach((w) => {
        for (let i = 0; i < w.p.length - 1; i++) {
          const [x1, z1] = w.p[i];
          const [x2, z2] = w.p[i + 1];
          const len = Math.hypot(x2 - x1, z2 - z1);
          if (len < 5) continue;
          distAcc += len;
          if (distAcc > 45) {
            distAcc = 0;
            const angle = Math.atan2(x2 - x1, z2 - z1);
            gantryTransforms.push({
              x: (x1 + x2) / 2,
              y: w.b ? 0.48 : 0.12,
              z: (z1 + z2) / 2,
              angle
            });
          }
        }
      });

      if (gantryTransforms.length > 0) {
        const gantryMat = new THREE.MeshStandardMaterial({
          color: 0x64748b,
          metalness: 0.75,
          roughness: 0.35
        });
        const poleGeo = new THREE.CylinderGeometry(0.12, 0.16, 6.2, 6);
        const beamGeo = new THREE.BoxGeometry(6.6, 0.28, 0.28);

        const poleMesh = new THREE.InstancedMesh(poleGeo, gantryMat, gantryTransforms.length * 2);
        const beamMesh = new THREE.InstancedMesh(beamGeo, gantryMat, gantryTransforms.length);
        poleMesh.castShadow = true;
        beamMesh.castShadow = true;

        const dummy = new THREE.Object3D();

        gantryTransforms.forEach((g, idx) => {
          const cosA = Math.cos(g.angle);
          const sinA = Math.sin(g.angle);
          const nx = cosA * 3.2;
          const nz = -sinA * 3.2;

          // Left pole
          dummy.position.set(g.x - nx, g.y + 3.1, g.z - nz);
          dummy.scale.set(1, 1, 1);
          dummy.rotation.set(0, g.angle, 0);
          dummy.updateMatrix();
          poleMesh.setMatrixAt(idx * 2, dummy.matrix);

          // Right pole
          dummy.position.set(g.x + nx, g.y + 3.1, g.z + nz);
          dummy.scale.set(1, 1, 1);
          dummy.rotation.set(0, g.angle, 0);
          dummy.updateMatrix();
          poleMesh.setMatrixAt(idx * 2 + 1, dummy.matrix);

          // Top beam
          dummy.position.set(g.x, g.y + 5.8, g.z);
          dummy.scale.set(1, 1, 1);
          dummy.rotation.set(0, g.angle + Math.PI / 2, 0);
          dummy.updateMatrix();
          beamMesh.setMatrixAt(idx, dummy.matrix);
        });

        poleMesh.instanceMatrix.needsUpdate = true;
        beamMesh.instanceMatrix.needsUpdate = true;
        this.proceduralGroup.add(poleMesh);
        this.proceduralGroup.add(beamMesh);
      }

      // 4d. Kereta Rel Listrik (KRL) Commuter Line Train Consists stationed at platform sidings
      const trainTanahAbang = LandmarkModels.createKRLCommuterTrain();
      trainTanahAbang.position.set(-165, 0.45, -85);
      trainTanahAbang.rotation.y = 0.45;
      this.proceduralGroup.add(trainTanahAbang);

      const trainPalmerah = LandmarkModels.createKRLCommuterTrain();
      trainPalmerah.position.set(-288.5, 0.45, 255);
      trainPalmerah.rotation.y = 0.45;
      this.proceduralGroup.add(trainPalmerah);
    }

    // 5. Real OpenStreetMap 3D Building Footprints (1,518 authentic Jakarta buildings - Merged by tier into 6 draw calls)
    if (osm.buildings && osm.buildings.length) {
      const lowRiseBldgs = [];
      const midRiseBldgs = [];
      const highRiseBldgs = [];

      const lowRoofGeos = [];
      const midRoofGeos = [];
      const highRoofGeos = [];

      osm.buildings.forEach((b) => {
        const pts = b.p;
        if (!pts || pts.length < 3) return;
        const h = b.h || 12;

        const shape = new THREE.Shape();
        shape.moveTo(pts[0][0], -pts[0][1]);
        for (let i = 1; i < pts.length; i++) {
          shape.lineTo(pts[i][0], -pts[i][1]);
        }
        const roofGeo = new THREE.ShapeGeometry(shape);
        roofGeo.rotateX(-Math.PI / 2);
        roofGeo.translate(0, h, 0);

        if (h >= 24) {
          highRiseBldgs.push(b);
          highRoofGeos.push(roofGeo);
        } else if (h >= 12) {
          midRiseBldgs.push(b);
          midRoofGeos.push(roofGeo);
        } else {
          lowRiseBldgs.push(b);
          lowRoofGeos.push(roofGeo);
        }
      });

      const renderTier = (buildings, roofGeos, roofMat, wallMat) => {
        if (roofGeos.length > 0) {
          const mergedRoofs = BufferGeometryUtils.mergeGeometries(roofGeos, false);
          if (mergedRoofs) {
            const roofMesh = new THREE.Mesh(mergedRoofs, roofMat);
            roofMesh.receiveShadow = true;
            this.proceduralGroup.add(roofMesh);
          }
        }
        if (buildings.length > 0) {
          const mergedWalls = this.buildMergedBuildingWallsGeometry(buildings);
          if (mergedWalls) {
            const wallMesh = new THREE.Mesh(mergedWalls, wallMat);
            wallMesh.receiveShadow = true;
            this.proceduralGroup.add(wallMesh);
          }
        }
      };

      renderTier(lowRiseBldgs, lowRoofGeos, bldMats.lowRiseRoofMat, bldMats.lowRiseWallMat);
      renderTier(midRiseBldgs, midRoofGeos, bldMats.midRiseRoofMat, bldMats.midRiseWallMat);
      renderTier(highRiseBldgs, highRoofGeos, bldMats.highRiseRoofMat, sharedMaterials[0]);
    }

    // 6. Procedural Infill Urban Fabric (Tahap 2):
    // Fills empty pockets across Tanah Abang, Cideng, Tomang, Tanjung Duren, Kemanggisan, and Palmerah
    this.buildInfillUrbanFabric(osm, sharedMaterials, bldMats);
  }

  /**
   * Procedural Infill Urban Fabric (Tahap 2):
   * Fills empty pockets across Tanah Abang, Cideng, Tomang, Tanjung Duren, Kemanggisan, and Palmerah
   * with authentic Jakarta ruko, residential townhouses, and commercial mid-rises using high-performance InstancedMesh.
   */
  buildInfillUrbanFabric(osm, sharedMaterials, bldMats) {
    const waterPoints = [];
    if (osm.waterways) {
      osm.waterways.forEach((w) => w.p && w.p.forEach((pt) => waterPoints.push(pt)));
    }

    const roadPoints = [];
    if (osm.roads) {
      osm.roads
        .filter((r) => ['motorway', 'trunk', 'primary'].includes(r.t))
        .forEach((r) => r.p && r.p.forEach((pt) => roadPoints.push(pt)));
    }

    const bldgCenters = [];
    if (osm.buildings) {
      osm.buildings.forEach((b) => {
        if (b.p && b.p.length >= 3) {
          bldgCenters.push([
            b.p.reduce((s, p) => s + p[0], 0) / b.p.length,
            b.p.reduce((s, p) => s + p[1], 0) / b.p.length
          ]);
        }
      });
    }

    const landmarks = JAKARTA_LANDMARKS.map((l) => [l.position[0], l.position[2], l.labelHeight || 40]);

    const isClear = (x, z, r = 8) => {
      for (let i = 0; i < landmarks.length; i++) {
        const [lx, lz, lr] = landmarks[i];
        if (Math.hypot(x - lx, z - lz) < lr * 0.85 + r) return false;
      }
      for (let i = 0; i < waterPoints.length; i++) {
        const [wx, wz] = waterPoints[i];
        if (Math.hypot(x - wx, z - wz) < 14 + r) return false;
      }
      for (let i = 0; i < roadPoints.length; i++) {
        const [rx, rz] = roadPoints[i];
        if (Math.hypot(x - rx, z - rz) < 11 + r) return false;
      }
      for (let i = 0; i < bldgCenters.length; i++) {
        const [bx, bz] = bldgCenters[i];
        if (Math.hypot(x - bx, z - bz) < 12 + r) return false;
      }
      return true;
    };

    // The 6 designated void zones
    const zones = [
      // Zona 1: Tanah Abang & Kebon Kacang
      { minX: -240, maxX: -45, minZ: -190, maxZ: 10, stepX: 16, stepZ: 18, type: 'commercial-ruko' },
      // Zona 2: Cideng, Petamburan & Jatipulo
      { minX: -340, maxX: -170, minZ: -370, maxZ: -100, stepX: 18, stepZ: 18, type: 'mixed-ruko' },
      // Zona 3: Tomang Pemukiman & Mandala
      { minX: -420, maxX: -250, minZ: -320, maxZ: -150, stepX: 16, stepZ: 16, type: 'residential' },
      // Zona 4: Tanjung Duren & Kemanggisan Utara
      { minX: -580, maxX: -380, minZ: -360, maxZ: -140, stepX: 18, stepZ: 18, type: 'tanjung-duren' },
      // Zona 5: Kemanggisan & Sekitar Kampus BINUS
      { minX: -560, maxX: -340, minZ: -130, maxZ: 130, stepX: 18, stepZ: 18, type: 'kemanggisan' },
      // Zona 6: Palmerah & Senayan Barat (Belakang DPR)
      { minX: -380, maxX: -170, minZ: 130, maxZ: 370, stepX: 18, stepZ: 20, type: 'palmerah' }
    ];

    const instances = [];
    zones.forEach((z) => {
      for (let x = z.minX; x <= z.maxX; x += z.stepX) {
        for (let zi = z.minZ; zi <= z.maxZ; zi += z.stepZ) {
          const jx = x + Math.sin(x * 12.3 + zi) * (z.stepX * 0.12);
          const jz = zi + Math.cos(zi * 8.7 + x) * (z.stepZ * 0.12);
          if (isClear(jx, jz, 7)) {
            const seed = Math.sin(jx * 7.1 + jz * 13.9);
            const rand = seed - Math.floor(seed);
            let w, d, h, style;

            if (z.type === 'commercial-ruko') {
              w = 11 + rand * 4;
              d = 13 + (1 - rand) * 5;
              h = 12 + rand * 10;
              style = rand > 0.4 ? 'ruko' : 'midRise';
            } else if (z.type === 'mixed-ruko') {
              w = 12 + rand * 6;
              d = 14 + (1 - rand) * 6;
              h = 10 + rand * 16;
              style = rand > 0.6 ? 'midRise' : 'ruko';
            } else if (z.type === 'residential') {
              w = 10 + rand * 4;
              d = 12 + (1 - rand) * 4;
              h = 7 + rand * 5;
              style = 'residential';
            } else if (z.type === 'tanjung-duren') {
              w = 12 + rand * 5;
              d = 14 + (1 - rand) * 6;
              h = 11 + rand * 13;
              style = rand > 0.5 ? 'ruko' : 'residential';
            } else if (z.type === 'kemanggisan') {
              w = 10 + rand * 5;
              d = 12 + (1 - rand) * 5;
              h = 8 + rand * 9;
              style = rand > 0.7 ? 'ruko' : 'residential';
            } else {
              w = 13 + rand * 6;
              d = 14 + (1 - rand) * 6;
              h = 11 + rand * 15;
              style = rand > 0.5 ? 'midRise' : 'ruko';
            }

            instances.push({ x: jx, z: jz, w, d, h, style, rand });
          }
        }
      }
    });

    if (instances.length === 0) return;

    // High performance InstancedMesh: renders all 300+ infill buildings in just 3 draw calls!
    const rukoInstances = instances.filter((i) => i.style === 'ruko');
    const resInstances = instances.filter((i) => i.style === 'residential');
    const midInstances = instances.filter((i) => i.style === 'midRise');

    const baseBoxGeo = new THREE.BoxGeometry(1, 1, 1);
    const dummy = new THREE.Object3D();

    // Ruko procedural texture with warm night emissive windows
    const { diffuseTexture: rukoDiff, emissiveTexture: rukoEmis } = TextureGenerator.createFacadeTexture({
      style: 'modern-blue',
      floors: 4,
      windowsAcross: 4,
      litWindowRatio: 0.55
    });
    const rukoMat = new THREE.MeshStandardMaterial({
      map: rukoDiff,
      emissiveMap: rukoEmis,
      emissive: 0xffd97d,
      emissiveIntensity: 0,
      roughness: 0.65,
      metalness: 0.15
    });
    this.nightMaterials.push(rukoMat);

    // Color palettes for rich visual variety
    const rukoColors = [
      new THREE.Color(0xf1f5f9),
      new THREE.Color(0xe2e8f0),
      new THREE.Color(0xdbeafe),
      new THREE.Color(0xfef3c7),
      new THREE.Color(0xe0e7ff),
      new THREE.Color(0xf3e8ff)
    ];
    const resColors = [
      new THREE.Color(0xb45309),
      new THREE.Color(0x9a3412),
      new THREE.Color(0xc2410c),
      new THREE.Color(0x78350f),
      new THREE.Color(0xd97706)
    ];
    const midColors = [
      new THREE.Color(0x334155),
      new THREE.Color(0x475569),
      new THREE.Color(0x1e293b),
      new THREE.Color(0x0f766e),
      new THREE.Color(0x0369a1)
    ];

    const createInstancedGroup = (list, material, colorPalette) => {
      if (list.length === 0) return;
      const mesh = new THREE.InstancedMesh(baseBoxGeo, material, list.length);
      mesh.castShadow = false;
      mesh.receiveShadow = true;

      list.forEach((item, idx) => {
        dummy.position.set(item.x, item.h * 0.5, item.z);
        dummy.scale.set(item.w, item.h, item.d);
        dummy.rotation.y = (item.rand - 0.5) * 0.15;
        dummy.updateMatrix();

        mesh.setMatrixAt(idx, dummy.matrix);
        const col = colorPalette[Math.floor(item.rand * colorPalette.length)];
        mesh.setColorAt(idx, col);
      });

      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      this.proceduralGroup.add(mesh);
    };

    createInstancedGroup(rukoInstances, rukoMat, rukoColors);
    createInstancedGroup(resInstances, bldMats.lowRiseRoofMat, resColors);
    createInstancedGroup(midInstances, sharedMaterials[0], midColors);
  }

  /**
   * Helper to get the true OSM centerline X coordinate of Jl. Jenderal Sudirman for a given Z (100..478)
   */
  getSudirmanCenterX(z) {
    if (z <= 100) return -3;
    if (z <= 190) return -3 - (z - 100) * 0.122;
    if (z <= 272) return -14 - (z - 190) * 0.561;
    if (z <= 350) return -60 - (z - 272) * 1.025;
    return -140 - (z - 350) * 1.375;
  }

  /**
   * Lush tropical vegetation along Thamrin, Sudirman, Monas, and Menteng
   */
  buildStreetVegetation() {
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.75 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const treeTransforms = [];
    const addTree = (x, z, scale = 1.0) => {
      treeTransforms.push({ x, z, scale });
    };

    // Trees along straight Thamrin & Medan Merdeka Barat spine (outside Bundaran HI & Patung Kuda)
    for (let z = -325; z <= 82; z += 26) {
      if (Math.abs(z) < 29 || Math.abs(z + 215) < 26) continue;
      addTree(-15.5, z, 1.0);
      if (z > -205) {
        addTree(15.5, z, 1.0);
      }
    }

    // Trees along true OpenStreetMap curve of Jl. Jenderal Sudirman
    for (let z = 118; z <= 452; z += 28) {
      if (Math.abs(z - 350) < 48) continue; // Skip Simpang Semanggi
      const xCenter = this.getSudirmanCenterX(z);
      addTree(xCenter - 16, z, 1.0);
      addTree(xCenter + 16, z, 1.0);
    }

    // Trees along Lapangan Medan Merdeka (Monas Park perimeter & walks)
    for (let x = 12; x <= 92; x += 16) {
      addTree(x, -222, 1.0);
      addTree(x, -330, 1.0);
    }
    for (let z = -320; z <= -230; z += 18) {
      addTree(12, z, 1.0);
      addTree(92, z, 1.0);
    }

    // Taman Suropati (Lush circular urban park in Menteng)
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      addTree(135 + Math.cos(angle) * 11, 55 + Math.sin(angle) * 11, 1.15);
      addTree(135 + Math.cos(angle + 0.39) * 18, 55 + Math.sin(angle + 0.39) * 18, 1.25);
    }

    // Lapangan Banteng (Historic civic square east of Istiqlal)
    for (let x = 150; x <= 184; x += 17) {
      addTree(x, -365, 1.0);
      addTree(x, -330, 1.0);
    }
    for (let z = -355; z <= -340; z += 15) {
      addTree(150, z, 1.0);
      addTree(184, z, 1.0);
    }

    // Gelora Bung Karno (GBK Senayan parkland & perimeter)
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      addTree(-285 + Math.cos(angle) * 44, 350 + Math.sin(angle) * 44, 1.25);
      addTree(-285 + Math.cos(angle + 0.26) * 58, 350 + Math.sin(angle + 0.26) * 58, 1.15);
    }

    // Bundaran Senayan greenery
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      addTree(-195 + Math.cos(angle) * 22, 470 + Math.sin(angle) * 22, 1.0);
    }

    // 7. Jalur Hijau Bantaran Kanal Banjir Barat (KBB Green River Corridor)
    // Dari Karet melewati Tanah Abang hingga Jatipulo & Tomang
    const kbbGreenPoints = [
      [-105, 75], [-115, 60], [-130, 35], [-145, 10], [-158, -25], [-162, -55],
      [-172, -95], [-180, -135], [-190, -170], [-210, -215], [-230, -260], [-245, -295]
    ];
    kbbGreenPoints.forEach(([kx, kz]) => {
      addTree(kx - 7, kz, 1.1);
      addTree(kx + 7, kz, 1.1);
    });

    // 8. Koridor Penghijauan Jalan Letjen S. Parman (Grogol -> Tomang -> Slipi)
    for (let z = -385; z <= 65; z += 35) {
      const t = (z + 385) / 450;
      const x = -482 + t * 152;
      addTree(x - 9.5, z, 1.1);
      addTree(x + 9.5, z, 1.1);
    }

    // 9. Ruang Terbuka Hijau & Lanskap Palmerah (Sekitar Stasiun & Belakang DPR/MPR)
    for (let z = 225; z <= 285; z += 20) {
      addTree(-295, z, 1.15);
      addTree(-275, z, 1.05);
    }

    // 10. Ruang Terbuka Hijau Kampus BINUS & Kemanggisan
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      addTree(-480 + Math.cos(angle) * 22, 25 + Math.sin(angle) * 22, 1.05);
    }

    // 11. Ruang Terbuka Hijau Tanjung Duren & Tribeca Park Podomoro
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      addTree(-465 + Math.cos(angle) * 16, -245 + Math.sin(angle) * 16, 1.2);
    }

    // High performance InstancedMesh: renders all 200+ city trees in exactly 2 draw calls!
    if (treeTransforms.length > 0) {
      const trunkGeo = new THREE.CylinderGeometry(0.28, 0.38, 4, 6);
      const foliageGeo = new THREE.ConeGeometry(2.6, 6.5, 7);

      const trunkMesh = new THREE.InstancedMesh(trunkGeo, trunkMat, treeTransforms.length);
      const foliageMesh = new THREE.InstancedMesh(foliageGeo, foliageMat, treeTransforms.length);
      trunkMesh.receiveShadow = true;
      foliageMesh.receiveShadow = true;

      const dummy = new THREE.Object3D();
      treeTransforms.forEach((t, idx) => {
        const s = t.scale || 1.0;

        dummy.position.set(t.x, 2 * s, t.z);
        dummy.scale.set(s, s, s);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        trunkMesh.setMatrixAt(idx, dummy.matrix);

        dummy.position.set(t.x, 6 * s, t.z);
        dummy.scale.set(s, s, s);
        dummy.rotation.set(0, (t.x * 2.7 + t.z * 1.3) % Math.PI, 0);
        dummy.updateMatrix();
        foliageMesh.setMatrixAt(idx, dummy.matrix);
      });

      trunkMesh.instanceMatrix.needsUpdate = true;
      foliageMesh.instanceMatrix.needsUpdate = true;
      this.proceduralGroup.add(trunkMesh);
      this.proceduralGroup.add(foliageMesh);
    }
  }

  createTree(x, z, foliageMat, trunkMat, scale = 1.0) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    if (scale !== 1.0) {
      group.scale.set(scale, scale, scale);
    }

    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.38, 4, 6), trunkMat);
    trunk.position.y = 2;
    group.add(trunk);

    const foliage = new THREE.Mesh(new THREE.ConeGeometry(2.6, 6.5, 7), foliageMat);
    foliage.position.y = 6;
    foliage.castShadow = false;
    group.add(foliage);

    this.proceduralGroup.add(group);
  }

  createVehiclePartGeometry(width, height, depth, x, y, z, color) {
    const geo = new THREE.BoxGeometry(width, height, depth);
    geo.translate(x, y, z);
    if (color !== undefined) {
      const c = new THREE.Color(color);
      const count = geo.attributes.position.count;
      const colors = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }
    return geo;
  }

  createVehicleInstancedMesh(name, geometry, material, count) {
    const mesh = new THREE.InstancedMesh(geometry, material, count);
    mesh.name = name;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.frustumCulled = false;
    this.proceduralGroup.add(mesh);
    return mesh;
  }

  writeVehicleInstance(v) {
    const dummy = this.vehicleDummy;
    dummy.position.set(v.x, v.y || 0, v.z);
    dummy.rotation.set(0, v.rotationY, 0);
    dummy.updateMatrix();

    const meshes = this.vehicleMeshes;
    if (v.kind === 'truck') {
      meshes.truckCab.setMatrixAt(v.instanceIndex, dummy.matrix);
      meshes.truckChassis.setMatrixAt(v.instanceIndex, dummy.matrix);
      meshes.truckContainer.setMatrixAt(v.instanceIndex, dummy.matrix);
      meshes.truckLights.setMatrixAt(v.instanceIndex, dummy.matrix);
    } else if (v.kind === 'bus') {
      meshes.busBody.setMatrixAt(v.instanceIndex, dummy.matrix);
      meshes.busLights.setMatrixAt(v.instanceIndex, dummy.matrix);
    } else {
      meshes.carBody.setMatrixAt(v.instanceIndex, dummy.matrix);
      meshes.carLights.setMatrixAt(v.instanceIndex, dummy.matrix);
    }
  }

  buildVehicleInstances(vehicleSpecs) {
    const counts = { car: 0, bus: 0, truck: 0 };
    vehicleSpecs.forEach((spec) => {
      spec.instanceIndex = counts[spec.kind]++;
    });

    const bodyMat = () => new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.6, roughness: 0.3 });
    const lightsMat = new THREE.MeshBasicMaterial({ vertexColors: true });

    const carBodyGeo = this.createVehiclePartGeometry(2.0, 1.4, 4.2, 0, 0.8, 0);
    const busBodyGeo = this.createVehiclePartGeometry(2.6, 2.6, 9.2, 0, 1.4, 0);
    const truckCabGeo = this.createVehiclePartGeometry(2.5, 2.6, 3.2, 0, 1.4, 4.4);
    const truckChassisGeo = this.createVehiclePartGeometry(2.5, 0.6, 12.2, 0, 0.6, 0);
    const truckContainerGeo = this.createVehiclePartGeometry(2.44, 2.58, 11.6, 0, 2.2, -0.4);

    const carLightsGeo = BufferGeometryUtils.mergeGeometries([
      this.createVehiclePartGeometry(1.6, 0.25, 0.1, 0, 0.8, 2.15, 0xffedd5),
      this.createVehiclePartGeometry(1.6, 0.25, 0.1, 0, 0.8, -2.15, 0xef4444)
    ], false);
    const busLightsGeo = BufferGeometryUtils.mergeGeometries([
      this.createVehiclePartGeometry(1.6, 0.25, 0.1, 0, 0.8, 4.65, 0xffedd5),
      this.createVehiclePartGeometry(1.6, 0.25, 0.1, 0, 0.8, -4.65, 0xef4444)
    ], false);
    const truckLightsGeo = BufferGeometryUtils.mergeGeometries([
      this.createVehiclePartGeometry(1.8, 0.25, 0.1, 0, 0.9, 6.05, 0xffedd5),
      this.createVehiclePartGeometry(1.8, 0.25, 0.1, 0, 0.9, -6.15, 0xef4444)
    ], false);

    this.vehicleMeshes = {
      carBody: this.createVehicleInstancedMesh('vehicle-car-body', carBodyGeo, bodyMat(), counts.car),
      busBody: this.createVehicleInstancedMesh('vehicle-bus-body', busBodyGeo, bodyMat(), counts.bus),
      truckCab: this.createVehicleInstancedMesh('vehicle-truck-cab', truckCabGeo, bodyMat(), counts.truck),
      truckChassis: this.createVehicleInstancedMesh('vehicle-truck-chassis', truckChassisGeo,
        new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 }), counts.truck),
      truckContainer: this.createVehicleInstancedMesh('vehicle-truck-container', truckContainerGeo,
        new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.35 }), counts.truck),
      carLights: this.createVehicleInstancedMesh('vehicle-car-lights', carLightsGeo, lightsMat, counts.car),
      busLights: this.createVehicleInstancedMesh('vehicle-bus-lights', busLightsGeo, lightsMat, counts.bus),
      truckLights: this.createVehicleInstancedMesh('vehicle-truck-lights', truckLightsGeo, lightsMat, counts.truck)
    };

    const color = new THREE.Color();
    vehicleSpecs.forEach((spec) => {
      color.setHex(spec.color);
      if (spec.kind === 'truck') {
        this.vehicleMeshes.truckCab.setColorAt(spec.instanceIndex, color);
        color.setHex(spec.containerColor);
        this.vehicleMeshes.truckContainer.setColorAt(spec.instanceIndex, color);
      } else if (spec.kind === 'bus') {
        this.vehicleMeshes.busBody.setColorAt(spec.instanceIndex, color);
      } else {
        this.vehicleMeshes.carBody.setColorAt(spec.instanceIndex, color);
      }
      this.writeVehicleInstance(spec);
    });

    Object.values(this.vehicleMeshes).forEach((mesh) => {
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    });
  }

  /**
   * Multi-Corridor Animated Traffic following the exact OpenStreetMap road geometry:
   * - Jl. Medan Merdeka Barat (North of Patung Kuda)
   * - Jl. M.H. Thamrin (Patung Kuda <-> Bundaran HI <-> Dukuh Atas)
   * - True 4-segment curve of Jl. Jenderal Sudirman (Dukuh Atas -> Setiabudi -> Karet -> Semanggi -> Senayan)
   * - True Jl. Gatot Subroto corridor (NE of DPR/MPR -> Semanggi -> Kuningan)
   * - True Jl. H.R. Rasuna Said corridor (Menteng/Setiabudi -> Mega Kuningan)
   * - Circular Roundabout Traffic around Bundaran HI, Patung Kuda, & Bundaran Senayan
   */
  buildTraffic() {
    const colors = [0x0284c7, 0xf8fafc, 0x0f172a, 0x94a3b8, 0xef4444, 0xf59e0b];

    const routes = [
      // 1. Jl. Medan Merdeka Barat (North of Patung Kuda)
      { x1: -6.0, z1: -330, x2: -6.0, z2: -240, count: 5 },
      { x1: 1.0, z1: -240, x2: 1.0, z2: -330, count: 5 },
      // 2. North Jl. M.H. Thamrin (Patung Kuda Z=-192 to Bundaran HI Z=-25)
      { x1: -4.5, z1: -192, x2: -4.5, z2: -25, count: 9 },
      { x1: 4.5, z1: -25, x2: 4.5, z2: -192, count: 9 },
      // 3. South Jl. M.H. Thamrin (Bundaran HI Z=+25 to Dukuh Atas Z=+96)
      { x1: -4.5, z1: 25, x2: -5.5, z2: 96, count: 5 },
      { x1: 2.5, z1: 96, x2: 4.5, z2: 25, count: 5 },
      // 4A. Jl. Jenderal Sudirman Segmen 1 (Dukuh Atas -> Setiabudi)
      { x1: -6.5, z1: 102, x2: -17.5, z2: 190, count: 5 },
      { x1: -10.5, z1: 190, x2: 0.5, z2: 102, count: 5 },
      // 4B. Jl. Jenderal Sudirman Segmen 2 (Setiabudi -> JPO Phinisi Karet)
      { x1: -17.5, z1: 190, x2: -63.5, z2: 272, count: 5 },
      { x1: -56.5, z1: 272, x2: -10.5, z2: 190, count: 5 },
      // 4C. Jl. Jenderal Sudirman Segmen 3 (Karet -> Simpang Semanggi)
      { x1: -63.5, z1: 272, x2: -143.5, z2: 350, count: 5 },
      { x1: -136.5, z1: 350, x2: -56.5, z2: 272, count: 5 },
      // 4D. Jl. Jenderal Sudirman Segmen 4 (Simpang Semanggi -> Bundaran Senayan)
      { x1: -143.5, z1: 350, x2: -301.0, z2: 458, count: 6 },
      { x1: -293.0, z1: 458, x2: -136.5, z2: 350, count: 6 },
      // 5. Jl. Gatot Subroto (Slipi / NE of DPR -> Semanggi -> Kuningan)
      { x1: -302.0, z1: 152, x2: -60.0, z2: 474, count: 12 },
      { x1: -52.0, z1: 470, x2: -294.0, z2: 148, count: 12 },
      // 6. Jl. H.R. Rasuna Said (Setiabudi -> Mega Kuningan)
      { x1: 93.0, z1: 192, x2: 139.0, z2: 475, count: 8 },
      { x1: 145.0, z1: 475, x2: 99.0, z2: 192, count: 8 },
      // 7. Jl. Letjen S. Parman - Arteri Utara (Slipi -> Tomang -> Grogol)
      { x1: -326.0, z1: 65, x2: -406.0, z2: -200, count: 6 },
      { x1: -406.0, z1: -200, x2: -478.0, z2: -385, count: 6 },
      // 8. Jl. Letjen S. Parman - Arteri Selatan (Grogol -> Tomang -> Slipi)
      { x1: -486.0, z1: -385, x2: -414.0, z2: -200, count: 6 },
      { x1: -414.0, z1: -200, x2: -334.0, z2: 65, count: 6 },
      // 9. Tol Dalam Kota / Viaduk Tomang (Jalur Cepat Utara & Selatan, y=0.40)
      { x1: -329.0, y: 0.40, z1: 65, x2: -481.0, z2: -385, count: 8, speedBoost: 1.4 },
      { x1: -483.0, y: 0.40, z1: -385, x2: -331.0, z2: 65, count: 8, speedBoost: 1.4 },
      // 10. Jl. Tomang Raya (Barat <-> Timur melintasi Kanal Banjir Barat)
      { x1: -415.0, z1: -205, x2: -247.0, z2: -305, count: 5 },
      { x1: -247.0, z1: -299, x2: -415.0, z2: -199, count: 5 },
      // 11. Jl. Tanjung Duren Raya (Podomoro City & Mediterania)
      { x1: -510.0, z1: -320, x2: -435.0, z2: -250, count: 5 },
      { x1: -435.0, z1: -246, x2: -510.0, z2: -316, count: 5 },
      // 12. Koridor 13 TransJakarta Elevated Flyover (Jalur Busway Layang CSW, y=22.8)
      { x1: -215.0, y: 22.8, z1: 630.0, x2: -455.0, y: 22.8, z2: 630.0, count: 2, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      { x1: -455.0, y: 22.8, z1: 633.2, x2: -215.0, y: 22.8, z2: 633.2, count: 2, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      // 13. Jl. Sisingamangaraja (Bundaran Senayan -> CSW Stasiun ASEAN)
      { x1: -319.0, z1: 480, x2: -350.5, z2: 631.6, count: 6 },
      { x1: -344.5, z1: 631.6, x2: -313.0, z2: 480, count: 6 },
      // 14. Jl. Panglima Polim (CSW -> Blok M BCA -> Selatan Melawai)
      { x1: -350.5, z1: 631.6, x2: -367.0, z2: 750, count: 6 },
      { x1: -361.0, z1: 750, x2: -344.5, z2: 631.6, count: 6 },
      // 15. Jl. Trunojoyo & Jl. Kyai Maja (Arteri Barat-Timur CSW & Mabes Polri)
      { x1: -225.0, z1: 629.0, x2: -435.0, z2: 629.0, count: 5 },
      { x1: -435.0, z1: 634.2, x2: -225.0, z2: 634.2, count: 5 },
      // 16. Jl. Melawai Raya (Kawasan Niaga Blok M & Little Tokyo)
      { x1: -245.0, z1: 703.0, x2: -425.0, z2: 703.0, count: 4 },
      { x1: -425.0, z1: 707.0, x2: -245.0, z2: 707.0, count: 4 },
      // 17. Jl. Senopati (Bundaran Senayan -> Senopati Gastronomy Corridor)
      { x1: -310.0, z1: 500, x2: -210.0, z2: 550, count: 4 },
      { x1: -210.0, z1: 554, x2: -310.0, z2: 504, count: 4 },
      // 18. Boulevard Benyamin Sueb (Kemayoran Runway Dual Carriageway)
      { x1: 224.0, z1: -360, x2: 224.0, z2: -680, count: 6 },
      { x1: 236.0, z1: -680, x2: 236.0, z2: -360, count: 6 },
      // 19. Jl. Letjen Suprapto (Simpang Lima Senen -> Cempaka Putih)
      { x1: 300.0, z1: -286, x2: 450.0, z2: -290, count: 5 },
      { x1: 450.0, z1: -294, x2: 300.0, z2: -290, count: 5 },
      // 20. Jl. Kramat Raya / Salemba (Senen -> Cikini / RSCM FKUI)
      { x1: 285.0, z1: -280, x2: 285.0, z2: -70, count: 5 },
      { x1: 291.0, z1: -70, x2: 291.0, z2: -280, count: 5 },
      // 21. TransJakarta Koridor 2 & 5 (Simpang Lima Senen Hub)
      { x1: 297.0, z1: -320, x2: 297.0, z2: -240, count: 3, isBus: true, busColor: 0x0284c7, speedBoost: 1.1 },
      { x1: 303.0, z1: -240, x2: 303.0, z2: -320, count: 3, isBus: true, busColor: 0x0284c7, speedBoost: 1.1 },
      // 22. Flyover Simpang Lima Senen (Elevated Overpass, y=7.8)
      { x1: 288.0, y: 7.8, z1: -230, x2: 288.0, y: 7.8, z2: -345, count: 3, speedBoost: 1.25 },
      { x1: 293.0, y: 7.8, z1: -345, x2: 293.0, y: 7.8, z2: -230, count: 3, speedBoost: 1.25 },
      // 23. Jalan Tol JORR TB Simatupang - Jalur Cepat Timur & Barat (y=0.225)
      { x1: -490.0, y: 0.225, z1: 1035.0, x2: 120.0, y: 0.225, z2: 1065.0, count: 8, speedBoost: 1.45 },
      { x1: 120.0, y: 0.225, z1: 1065.0, x2: -490.0, y: 0.225, z2: 1035.0, count: 8, speedBoost: 1.45 },
      // 24. TransJakarta Koridor 6 (Ragunan - Mampang - Rasuna Said Hub)
      { x1: 45.0, z1: 1065.0, x2: 135.0, z2: 435.0, count: 4, isBus: true, busColor: 0x0284c7, speedBoost: 1.1 },
      { x1: 135.0, z1: 435.0, x2: 45.0, z2: 1065.0, count: 4, isBus: true, busColor: 0x0284c7, speedBoost: 1.1 },
      // 25. TransJakarta Koridor 9 (Pinang Ranti - Pancoran - Semanggi)
      { x1: 360.0, z1: 515.0, x2: 135.0, z2: 435.0, count: 4, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      { x1: 135.0, z1: 435.0, x2: 360.0, z2: 515.0, count: 4, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      // 26. Flyover Simpang Susun Pancoran (Elevated Overpass, y=7.8)
      { x1: 180.0, y: 7.8, z1: 475.0, x2: 310.0, y: 7.8, z2: 508.0, count: 4, speedBoost: 1.3 },
      { x1: 310.0, y: 7.8, z1: 508.0, x2: 180.0, y: 7.8, z2: 475.0, count: 4, speedBoost: 1.3 },
      // 27. Boulevard Jl. Metro Pondok Indah (PIM 1-3)
      { x1: -460.0, z1: 700.0, x2: -520.0, z2: 990.0, count: 6 },
      { x1: -520.0, z1: 990.0, x2: -460.0, z2: 700.0, count: 6 },
      // 28. Flyover Non-Tol Pangeran Antasari (Kemang, y=9.0)
      { x1: -85.0, y: 9.0, z1: 680.0, x2: -85.0, y: 9.0, z2: 900.0, count: 4, speedBoost: 1.25 },
      { x1: -85.0, y: 9.0, z1: 900.0, x2: -85.0, y: 9.0, z2: 680.0, count: 4, speedBoost: 1.25 },
      // 29. TransJakarta Koridor 5 (Ancol Hub <-> Benyamin Sueb / Kemayoran)
      { x1: 267.2, z1: -920.0, x2: 267.2, z2: -520.0, count: 4, isBus: true, busColor: 0x0284c7, speedBoost: 1.1 },
      { x1: 267.2, z1: -520.0, x2: 267.2, z2: -920.0, count: 4, isBus: true, busColor: 0x0284c7, speedBoost: 1.1 },
      // 30. TransJakarta Koridor 12 (Pluit <-> Ancol <-> Tanjung Priok)
      { x1: -350.0, z1: -922.0, x2: 830.0, z2: -1162.0, count: 4, isBus: true, busColor: 0x0284c7, speedBoost: 1.1 },
      { x1: 830.0, z1: -1158.0, x2: -350.0, z2: -918.0, count: 4, isBus: true, busColor: 0x0284c7, speedBoost: 1.1 },
      // 31. Tol Pelabuhan Viaduct - Armada Truk Trailer Kontainer (y=8.5, speedBoost=1.2)
      { x1: -480.0, y: 8.5, z1: -935.0, x2: 820.0, y: 8.5, z2: -1175.0, count: 5, isTruck: true, speedBoost: 1.2 },
      { x1: 820.0, y: 8.5, z1: -1175.0, x2: -480.0, y: 8.5, z2: -935.0, count: 5, isTruck: true, speedBoost: 1.2 },
      // 32. Jl. RE Martadinata - Armada Truk Logistik Pelabuhan (y=0.15)
      { x1: -350.0, y: 0.15, z1: -920.0, x2: 830.0, y: 0.15, z2: -1160.0, count: 5, isTruck: true, speedBoost: 1.0 },
      { x1: 830.0, y: 0.15, z1: -1160.0, x2: -350.0, y: 0.15, z2: -920.0, count: 5, isTruck: true, speedBoost: 1.0 },
      // 33. Boulevard Raya Kelapa Gading (Dual Carriageway Flanking LRT Viaduct)
      { x1: 1192.0, z1: -220.0, x2: 1192.0, z2: -820.0, count: 6 },
      { x1: 1204.0, z1: -820.0, x2: 1204.0, z2: -220.0, count: 6 },
      // 34. TransJakarta Koridor 3 (Kalideres <-> Grogol <-> Monas via Jl. Daan Mogot)
      { x1: -484.0, z1: -403.0, x2: -1320.0, z2: -450.0, count: 5, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      { x1: -1320.0, z1: -450.0, x2: -484.0, z2: -403.0, count: 5, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      // 35. TransJakarta Koridor 8 (Lebak Bulus <-> Kebon Jeruk <-> Harmoni via Jl. Panjang)
      { x1: -775.0, z1: 300.0, x2: -775.0, z2: -400.0, count: 5, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      { x1: -775.0, z1: -400.0, x2: -775.0, z2: 300.0, count: 5, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      // 36. Tol Jakarta - Tangerang Express Viaduct (Tomang <-> Kebon Jeruk <-> Kembangan, y=7.9)
      { x1: -418.0, y: 7.9, z1: -224.0, x2: -1350.0, y: 7.9, z2: -85.0, count: 7, speedBoost: 1.5 },
      { x1: -1350.0, y: 7.9, z1: -85.0, x2: -418.0, y: 7.9, z2: -224.0, count: 7, speedBoost: 1.5 },
      // 37. Tol Jakarta - Tangerang - Armada Truk Logistik (y=7.9)
      { x1: -418.0, y: 7.9, z1: -224.0, x2: -1350.0, y: 7.9, z2: -85.0, count: 4, isTruck: true, speedBoost: 1.25 },
      { x1: -1350.0, y: 7.9, z1: -85.0, x2: -418.0, y: 7.9, z2: -224.0, count: 4, isTruck: true, speedBoost: 1.25 },
      // 38. Tol Lingkar Luar Barat (JORR W1 Viaduct, y=9.9)
      { x1: -1040.0, y: 9.9, z1: 260.0, x2: -1040.0, y: 9.9, z2: -420.0, count: 6, speedBoost: 1.45 },
      { x1: -1040.0, y: 9.9, z1: -420.0, x2: -1040.0, y: 9.9, z2: 260.0, count: 6, speedBoost: 1.45 },
      // 39. Boulevard Puri Indah & Kembangan Ring Road
      { x1: -1040.0, z1: -85.0, x2: -1185.0, z2: -75.0, count: 4, speedBoost: 1.0 },
      { x1: -1185.0, z1: -160.0, x2: -1010.0, z2: -160.0, count: 4, speedBoost: 1.0 },
      // 40. Koridor Pecinan Bersejarah Glodok (Jl. Pancoran & Gajah Mada Barat)
      { x1: -120.0, z1: -620.0, x2: -120.0, z2: -750.0, count: 4, speedBoost: 0.95 },
      { x1: -95.0, z1: -780.0, x2: -95.0, z2: -590.0, count: 4, speedBoost: 1.0 },
      // 41. TransJakarta Koridor 5 (Kampung Melayu <-> Jatinegara <-> Salemba <-> Ancol)
      { x1: 580.0, z1: 420.0, x2: 420.0, z2: -120.0, count: 5, isBus: true, busColor: 0x0284c7, speedBoost: 1.1 },
      { x1: 420.0, z1: -120.0, x2: 580.0, z2: 420.0, count: 5, isBus: true, busColor: 0x0284c7, speedBoost: 1.1 },
      // 42. TransJakarta Koridor 7 (Kampung Rambutan <-> TMII <-> Cililitan <-> Cawang <-> Kampung Melayu)
      { x1: 1040.0, z1: 1500.0, x2: 712.0, z2: 724.0, count: 5, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      { x1: 712.0, z1: 724.0, x2: 1040.0, z2: 1500.0, count: 5, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      // 43. TransJakarta Koridor 9 (Pinang Ranti <-> Garuda Tamini <-> Cawang Hub <-> Pancoran)
      { x1: 893.0, z1: 993.0, x2: 712.0, z2: 724.0, count: 4, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      { x1: 712.0, z1: 724.0, x2: 893.0, z2: 993.0, count: 4, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      // 44. TransJakarta Koridor 11 (Kampung Melayu <-> Jatinegara <-> Klender <-> Buaran <-> Pulogebang)
      { x1: 580.0, z1: 520.0, x2: 1400.0, z2: 520.0, count: 5, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      { x1: 1400.0, z1: 520.0, x2: 580.0, z2: 520.0, count: 5, isBus: true, busColor: 0x0284c7, speedBoost: 1.15 },
      // 45. Jalan Tol Jagorawi Express (Cawang Interchange <-> TMII <-> Cibubur, y=7.5)
      { x1: 712.0, y: 7.5, z1: 724.0, x2: 1120.0, y: 6.5, z2: 1850.0, count: 8, speedBoost: 1.45 },
      { x1: 1120.0, y: 6.5, z1: 1850.0, x2: 712.0, y: 7.5, z2: 724.0, count: 8, speedBoost: 1.45 },
      // 46. Tol Jakarta - Cikampek Express & Truk Logistik (Cawang <-> Halim <-> Bekasi, y=7.5)
      { x1: 712.0, y: 7.5, z1: 724.0, x2: 1450.0, y: 7.5, z2: 1150.0, count: 8, speedBoost: 1.45 },
      { x1: 1450.0, y: 7.5, z1: 1150.0, x2: 712.0, y: 7.5, z2: 724.0, count: 8, speedBoost: 1.45 },
      { x1: 712.0, y: 7.5, z1: 724.0, x2: 1450.0, y: 7.5, z2: 1150.0, count: 4, isTruck: true, speedBoost: 1.25 },
      { x1: 1450.0, y: 7.5, z1: 1150.0, x2: 712.0, y: 7.5, z2: 724.0, count: 4, isTruck: true, speedBoost: 1.25 },
      // 47. Tol Becakayu Viaduct Layang (Bekasi - Cawang - Kp. Melayu di atas Kalimalang, y=9.8)
      { x1: 712.0, y: 9.8, z1: 600.0, x2: 1400.0, y: 9.8, z2: 720.0, count: 6, speedBoost: 1.35 },
      { x1: 1400.0, y: 9.8, z1: 720.0, x2: 712.0, y: 9.8, z2: 600.0, count: 6, speedBoost: 1.35 },
      // 48. Tol Ir. Wiyoto Wiyono (By-Pass Cawang -> Jatinegara -> Rawamangun -> Priok, y=9.3)
      { x1: 712.0, y: 9.3, z1: 724.0, x2: 850.0, y: 9.3, z2: -350.0, count: 7, speedBoost: 1.4 },
      { x1: 850.0, y: 9.3, z1: -350.0, x2: 712.0, y: 9.3, z2: 724.0, count: 7, speedBoost: 1.4 },
      // 49. Feeder Mikrotrans & Arteri Jl. Greenville Raya (Tanjung Duren <-> Sentra Kuliner <-> Jl. Panjang)
      { x1: -580.0, z1: -180.0, x2: -775.0, z2: -180.0, count: 4, speedBoost: 1.05 },
      { x1: -775.0, z1: -180.0, x2: -580.0, z2: -180.0, count: 4, speedBoost: 1.05 },
      // 50. Koridor Arteri Jl. Kedoya Raya & Sunrise Garden (RS Graha Kedoya <-> Sunrise Garden <-> Puri Kencana)
      { x1: -775.0, z1: -260.0, x2: -950.0, z2: -220.0, count: 4, speedBoost: 1.1 },
      { x1: -950.0, z1: -220.0, x2: -775.0, z2: -260.0, count: 4, speedBoost: 1.1 },
      // 51. TransJakarta Feeder & Arteri 4-Lajur Jl. Pos Pengumben Raya (Palmerah <-> Sentra Pos Pengumben <-> Joglo)
      { x1: -580.0, z1: 210.0, x2: -1040.0, z2: 210.0, count: 6, isBus: true, busColor: 0x0284c7, speedBoost: 1.2 },
      { x1: -1040.0, z1: 210.0, x2: -580.0, z2: 210.0, count: 6, isBus: true, busColor: 0x0284c7, speedBoost: 1.2 },
      // 52. Sirkulasi Arteri Jl. Perjuangan & Akses Underpass Tol Kebon Jeruk (MNC Studios & MACAN)
      { x1: -650.0, z1: -45.0, x2: -920.0, z2: -45.0, count: 5, speedBoost: 1.15 },
      { x1: -920.0, z1: -45.0, x2: -650.0, z2: -45.0, count: 5, speedBoost: 1.15 },
      // 53. Sirkulasi Jl. Kebon Jeruk Raya / Kemanggisan Ilir (BINUS Kemanggisan <-> Sukabumi Utara <-> Jl. Panjang)
      { x1: -480.0, z1: 20.0, x2: -775.0, z2: 50.0, count: 4, speedBoost: 1.05 },
      { x1: -775.0, z1: 50.0, x2: -480.0, z2: 20.0, count: 4, speedBoost: 1.05 },
      // 54. Sirkulasi Lingkar Taman Cattleya & Simpang Tomang Barat (S. Parman <-> Tanjung Duren)
      { x1: -480.0, z1: -110.0, x2: -580.0, z2: -110.0, count: 4, speedBoost: 1.1 },
      { x1: -580.0, z1: -110.0, x2: -480.0, z2: -110.0, count: 4, speedBoost: 1.1 }
    ];

    const vehicleSpecs = [];
    let idx = 0;
    routes.forEach((route) => {
      const dx = route.x2 - route.x1;
      const dz = route.z2 - route.z1;
      const angle = Math.atan2(dx, dz);
      const y = route.y || 0;

      for (let j = 0; j < route.count; j++) {
        const isBus = route.isBus || (idx % 6 === 0);
        const isTruck = route.isTruck || false;
        const busColor = route.busColor || 0x0284c7;
        const truckContainerColor = [0x0080a5, 0x006633, 0xeb5310, 0xd91458, 0x1d4ed8, 0x8b0000][(idx + j) % 6];
        const t = j / route.count;

        vehicleSpecs.push({
          kind: isTruck ? 'truck' : (isBus ? 'bus' : 'car'),
          color: isBus ? busColor : colors[idx % colors.length],
          containerColor: truckContainerColor,
          isCircular: false,
          x1: route.x1,
          y,
          z1: route.z1,
          dx,
          dz,
          progress: t,
          speed: ((isTruck ? 0.055 : (isBus ? 0.065 : 0.095)) + (idx % 4) * 0.014) * (route.speedBoost || 1.0),
          x: route.x1 + dx * t,
          z: route.z1 + dz * t,
          rotationY: angle
        });
        idx++;
      }
    });

    // Halte Busway TransJakarta Koridor 8 di Sepanjang Koridor Jl. Panjang (Void A)
    const tjShelterMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.35, metalness: 0.5 });
    const tjGlassMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.15, transparent: true, opacity: 0.75 });
    const tjPlatformMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.7 });

    const shelterPositions = [
      { name: "Halte Kedoya Green Garden", x: -775.0, z: -230.0 },
      { name: "Halte Kebon Jeruk (MACAN)", x: -775.0, z: 0.0 },
      { name: "Halte Pos Pengumben", x: -775.0, z: 180.0 }
    ];

    shelterPositions.forEach((sh) => {
      // Concrete Raised Platform
      const plat = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.7, 18), tjPlatformMat);
      plat.position.set(sh.x, 0.35, sh.z);
      plat.receiveShadow = true;
      this.proceduralGroup.add(plat);

      // Steel Canopy Roof
      const roof = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.4, 18.4), tjShelterMat);
      roof.position.set(sh.x, 3.8, sh.z);
      roof.castShadow = true;
      this.proceduralGroup.add(roof);

      // Glass Enclosure Walls
      const glass = new THREE.Mesh(new THREE.BoxGeometry(0.2, 2.8, 16), tjGlassMat);
      glass.position.set(sh.x, 2.1, sh.z);
      this.proceduralGroup.add(glass);
    });

    // Circular Roundabout Traffic orbiting Bundaran HI (0,0), Patung Kuda (-3,-215), Bundaran Senayan (-316,478), Bundaran PIM (-515,915), & Pancoran (248,492)
    const roundabouts = [
      { cx: 0, cz: 0, radius: 16.5, count: 6, speed: 0.45 },
      { cx: 0, cz: 0, radius: 20.2, count: 6, speed: 0.52 },
      { cx: -3, cz: -215, radius: 18.0, count: 5, speed: 0.48 },
      { cx: -316, cz: 478, radius: 22.0, count: 5, speed: 0.44 },
      { cx: -515, cz: 915, radius: 19.5, count: 5, speed: 0.45 },
      { cx: 248, cz: 492, radius: 21.0, count: 6, speed: 0.48 }
    ];

    roundabouts.forEach((rb, rIdx) => {
      for (let k = 0; k < rb.count; k++) {
        const isBus = k === 0 && rIdx === 0;
        const angle = (k / rb.count) * Math.PI * 2;
        vehicleSpecs.push({
          kind: isBus ? 'bus' : 'car',
          color: isBus ? 0x0284c7 : colors[(k + rIdx) % colors.length],
          isCircular: true,
          cx: rb.cx,
          cz: rb.cz,
          radius: rb.radius,
          angle,
          angularSpeed: rb.speed,
          y: 0,
          x: rb.cx + Math.cos(angle) * rb.radius,
          z: rb.cz + Math.sin(angle) * rb.radius,
          rotationY: Math.atan2(-Math.sin(angle), Math.cos(angle))
        });
      }
    });

    this.vehicles = vehicleSpecs;
    this.buildVehicleInstances(vehicleSpecs);

    // Dynamic Kereta Rel Listrik (KRL) Commuter Line Consists running on dual mainline tracks
    const krlTrackPoints = [
      new THREE.Vector3(-285, 0.48, 255),
      new THREE.Vector3(-318, 0.48, 180),
      new THREE.Vector3(-320, 0.48, 131),
      new THREE.Vector3(-250, 0.48, 85),
      new THREE.Vector3(-188, 0.48, 48),
      new THREE.Vector3(-173, 0.48, 10),
      new THREE.Vector3(-171, 0.48, -35),
      new THREE.Vector3(-168, 0.48, -85),
      new THREE.Vector3(-170, 0.48, -135),
      new THREE.Vector3(-177, 0.48, -180),
      new THREE.Vector3(-190, 0.48, -230),
      new THREE.Vector3(-233, 0.48, -292)
    ];
    this.krlCurve = new THREE.CatmullRomCurve3(krlTrackPoints, false, 'catmullrom', 0.15);
    this.krlCurveLength = this.krlCurve.getLength();

    // Dynamic Kereta MRT Jakarta (Ratangga) running on the elevated viaduct
    const mrtTrackPoints = [
      new THREE.Vector3(-321, 4.0, 508),
      new THREE.Vector3(-324, 8.5, 532),
      new THREE.Vector3(-328, 12.35, 555),
      new THREE.Vector3(-334, 12.35, 580),
      new THREE.Vector3(-339.1, 12.35, 599.0),
      new THREE.Vector3(-347.5, 12.35, 631.6),
      new THREE.Vector3(-351.8, 12.35, 660.0),
      new THREE.Vector3(-355.0, 12.35, 685.0),
      new THREE.Vector3(-357.4, 12.35, 702.5),
      new THREE.Vector3(-364.0, 12.35, 750.0),
      new THREE.Vector3(-368.0, 12.0, 815.0),
      new THREE.Vector3(-372.0, 12.5, 885.0),
      new THREE.Vector3(-377.0, 13.0, 960.0),
      new THREE.Vector3(-382.0, 14.0, 1035.0),
      new THREE.Vector3(-425.0, 13.0, 1060.0),
      new THREE.Vector3(-465.0, 12.0, 1075.0)
    ];
    this.mrtCurve = new THREE.CatmullRomCurve3(mrtTrackPoints, false, 'catmullrom', 0.15);
    this.mrtCurveLength = this.mrtCurve.getLength();

    // Dynamic Kereta LRT Jabodebek (Lin Cibubur & Bekasi) running on elevated viaduct
    const lrtTrackPoints = [
      new THREE.Vector3(360.0, 15.5, 515.0),  // Cawang Barat
      new THREE.Vector3(318.0, 15.5, 506.0),  // Menara Saidah
      new THREE.Vector3(248.0, 15.5, 492.0),  // Stasiun LRT Pancoran
      new THREE.Vector3(185.0, 15.5, 465.0),  // Smesco / Bidakara
      new THREE.Vector3(145.0, 16.0, 440.0),  // Tikungan Kuningan Timur
      new THREE.Vector3(138.0, 15.5, 350.0),  // Rasuna Said Selatan
      new THREE.Vector3(135.0, 15.5, 260.0),  // Rasuna Said Tengah
      new THREE.Vector3(135.0, 15.5, 160.0)   // Menuju Setiabudi / Dukuh Atas
    ];
    this.lrtCurve = new THREE.CatmullRomCurve3(lrtTrackPoints, false, 'catmullrom', 0.15);
    this.lrtCurveLength = this.lrtCurve.getLength();

    // Dynamic Kereta Api Antarkota KAI (CC 206 Locomotive + Eksekutif/Ekonomi Coaches)
    // Running on double track through Stasiun Pasar Senen & Kemayoran corridor
    const senenTrackPoints = [
      new THREE.Vector3(285.0, 0.48, -80.0),
      new THREE.Vector3(290.0, 0.48, -170.0),
      new THREE.Vector3(299.7, 0.48, -288.7),
      new THREE.Vector3(292.0, 0.48, -380.0),
      new THREE.Vector3(278.0, 0.48, -480.0),
      new THREE.Vector3(255.0, 0.48, -670.0)
    ];
    this.senenRailCurve = new THREE.CatmullRomCurve3(senenTrackPoints, false, 'catmullrom', 0.15);
    this.senenRailCurveLength = this.senenRailCurve.getLength();

    // =========================================================================
    // Dynamic Kereta LRT Jakarta (Lin 1 Kelapa Gading - Velodrome)
    // Viaduk layang median Jl. Boulevard Raya Kelapa Gading (y=11.5m, track y=12.0m)
    // =========================================================================
    const lrtViaductMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.65 });
    const lrtParapetMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4 });
    const lrtPierMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.6 });

    // Track deck box: panjang 600m
    const lrtDeck = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.7, 600), lrtViaductMat);
    lrtDeck.position.set(1198.0, 11.5, -520.0);
    lrtDeck.receiveShadow = true;
    this.proceduralGroup.add(lrtDeck);

    // Parapets
    [-3.8, 3.8].forEach((px) => {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.9, 600), lrtParapetMat);
      p.position.set(1198.0 + px, 12.0, -520.0);
      this.proceduralGroup.add(p);
    });

    // Support pillars every 40m
    for (let pz = -220; pz >= -820; pz -= 40) {
      const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 11.5, 8), lrtPierMat);
      pier.position.set(1198.0, 5.75, pz);
      pier.receiveShadow = true;
      this.proceduralGroup.add(pier);
    }

    const lrtJktTrackPoints = [
      new THREE.Vector3(1198.0, 12.0, -220.0),
      new THREE.Vector3(1198.0, 12.0, -380.0),
      new THREE.Vector3(1198.0, 12.0, -531.0), // Mall Kelapa Gading / Stasiun Boulevard Utara
      new THREE.Vector3(1198.0, 12.0, -680.0),
      new THREE.Vector3(1198.0, 12.0, -820.0)
    ];
    this.lrtJakartaCurve = new THREE.CatmullRomCurve3(lrtJktTrackPoints, false, 'catmullrom', 0.15);
    this.lrtJakartaCurveLength = this.lrtJakartaCurve.getLength();

    // =========================================================================
    // Dynamic KRL Commuter Line Lintas Tanjung Priok (Pink Line)
    // Melintasi jalur Kampung Bandan -> Ancol -> JIS -> Stasiun Tanjung Priok 1914
    // =========================================================================
    const priokRailPoints = [
      new THREE.Vector3(-150.0, 0.48, -840.0), // Kota / Kampung Bandan
      new THREE.Vector3(50.0, 0.48, -890.0),
      new THREE.Vector3(150.0, 0.48, -925.0),  // Stasiun Ancol
      new THREE.Vector3(528.0, 0.48, -940.0),  // JIS / Sunter
      new THREE.Vector3(720.0, 0.48, -1060.0),
      new THREE.Vector3(831.0, 0.48, -1230.0)  // Stasiun Tanjung Priok 1914 Art Deco
    ];
    this.priokRailCurve = new THREE.CatmullRomCurve3(priokRailPoints, false, 'catmullrom', 0.15);
    this.priokRailCurveLength = this.priokRailCurve.getLength();

    // =========================================================================
    // Dynamic KRL Commuter Line Lintas Tangerang (Brown Line)
    // Melintasi jalur Duri -> Simpang Grogol Barat -> Stasiun Pesing -> Rawa Buaya -> Tangerang
    // =========================================================================
    const tangerangRailPoints = [
      new THREE.Vector3(-320.0, 0.48, -400.0), // Arah Stasiun Duri
      new THREE.Vector3(-484.0, 0.48, -412.0), // Simpang Grogol Barat
      new THREE.Vector3(-650.0, 0.48, -425.0), // Stasiun Pesing (di bawah Flyover Pesing)
      new THREE.Vector3(-880.0, 0.48, -440.0), // Stasiun Taman Kota
      new THREE.Vector3(-1080.0, 0.48, -446.0), // Stasiun Bojong Indah / Rawa Buaya
      new THREE.Vector3(-1260.0, 0.48, -452.0)  // Menuju Kalideres & Tangerang
    ];
    this.tangerangRailCurve = new THREE.CatmullRomCurve3(tangerangRailPoints, false, 'catmullrom', 0.15);
    this.tangerangRailCurveLength = this.tangerangRailCurve.getLength();

    const ballastMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.85 });
    const ballastMesh = new THREE.Mesh(new THREE.BoxGeometry(940, 0.22, 5.5), ballastMat);
    ballastMesh.position.set(-790.0, 0.22, -430.0);
    ballastMesh.rotation.y = 0.055;
    ballastMesh.receiveShadow = true;
    this.proceduralGroup.add(ballastMesh);

    // =========================================================================
    // Dynamic KRL Commuter Line Lintas Cikarang / Bekasi (DDT Jatinegara)
    // Melintasi Manggarai/Matraman -> Stasiun Jatinegara 1910 -> Klender -> Buaran -> Cakung
    // =========================================================================
    const cikarangRailPoints = [
      new THREE.Vector3(420.0, 0.48, 200.0),  // Arah Manggarai / Matraman
      new THREE.Vector3(540.0, 0.48, 240.0),  // Tikungan Pisangan Baru
      new THREE.Vector3(666.1, 0.48, 282.6),  // Stasiun Jatinegara 1910 (Meester Cornelis)
      new THREE.Vector3(950.0, 0.48, 290.0),  // Stasiun Klender
      new THREE.Vector3(1200.0, 0.48, 295.0), // Stasiun Buaran
      new THREE.Vector3(1450.0, 0.48, 300.0)  // Stasiun Klender Baru / Cakung ke Bekasi
    ];
    this.cikarangRailCurve = new THREE.CatmullRomCurve3(cikarangRailPoints, false, 'catmullrom', 0.15);
    this.cikarangRailCurveLength = this.cikarangRailCurve.getLength();

    const cikarangBallastMesh = new THREE.Mesh(new THREE.BoxGeometry(1050, 0.22, 5.5), ballastMat);
    cikarangBallastMesh.position.set(935.0, 0.22, 275.0);
    cikarangBallastMesh.rotation.y = 0.09;
    cikarangBallastMesh.receiveShadow = true;
    this.proceduralGroup.add(cikarangBallastMesh);

    // =========================================================================
    // Dynamic LRT Jabodebek Lin Cibubur
    // Melintasi Stasiun Hub Cawang -> Cililitan -> Kramat Jati -> Stasiun TMII -> Ciracas/Harjamukti
    // Elevated Viaduct y=15.0m
    // =========================================================================
    const lrtCibuburPoints = [
      new THREE.Vector3(712.3, 15.0, 723.8),   // Stasiun Hub Cawang
      new THREE.Vector3(780.0, 15.0, 950.0),   // Cililitan / PGC
      new THREE.Vector3(890.0, 15.0, 1220.0),  // Kramat Jati / Hek
      new THREE.Vector3(1040.0, 15.0, 1500.0), // Stasiun TMII
      new THREE.Vector3(1120.0, 15.0, 1820.0)  // Menuju Ciracas & Harjamukti
    ];
    this.lrtCibuburCurve = new THREE.CatmullRomCurve3(lrtCibuburPoints, false, 'catmullrom', 0.15);
    this.lrtCibuburCurveLength = this.lrtCibuburCurve.getLength();

    // =========================================================================
    // Dynamic LRT Jakarta Lin 1 (Extension Rawamangun Velodrome <-> Pulomas <-> Boulevard Kelapa Gading)
    // Melintasi Stasiun Velodrome -> Pulomas/Ria Rio -> Kayu Putih -> Boulevard Kelapa Gading
    // Elevated Viaduct y=12.0m
    // =========================================================================
    const velodromeLrtPoints = [
      new THREE.Vector3(945.5, 12.0, -57.6),   // Stasiun Velodrome Rawamangun
      new THREE.Vector3(960.0, 12.0, -200.0),  // Pulomas / Waduk Ria Rio
      new THREE.Vector3(1100.0, 12.0, -220.0), // Kayu Putih
      new THREE.Vector3(1198.0, 12.0, -220.0)  // Menyambung ke Koridor Boulevard Kelapa Gading
    ];
    this.velodromeLrtCurve = new THREE.CatmullRomCurve3(velodromeLrtPoints, false, 'catmullrom', 0.15);
    this.velodromeLrtCurveLength = this.velodromeLrtCurve.getLength();

    this.animatedTrains = [];
    const trainConfigs = [
      { id: 'krl-northbound', curve: this.krlCurve, curveLength: this.krlCurveLength, carSpacing: 17.8, trackOffset: -1.35, speed: 0.024, progress: 0.15, type: 'krl' },
      { id: 'krl-southbound', curve: this.krlCurve, curveLength: this.krlCurveLength, carSpacing: 17.8, trackOffset: 1.35, speed: -0.024, progress: 0.65, type: 'krl' },
      { id: 'mrt-southbound', curve: this.mrtCurve, curveLength: this.mrtCurveLength, carSpacing: 17.35, trackOffset: 1.6, speed: 0.035, progress: 0.2, type: 'mrt' },
      { id: 'mrt-northbound', curve: this.mrtCurve, curveLength: this.mrtCurveLength, carSpacing: 17.35, trackOffset: -1.6, speed: -0.035, progress: 0.75, type: 'mrt' },
      { id: 'kai-antarkota-northbound', curve: this.senenRailCurve, curveLength: this.senenRailCurveLength, carSpacing: 18.2, trackOffset: -1.7, speed: 0.022, progress: 0.1, type: 'kai' },
      { id: 'kai-antarkota-southbound', curve: this.senenRailCurve, curveLength: this.senenRailCurveLength, carSpacing: 18.2, trackOffset: 1.7, speed: -0.022, progress: 0.6, type: 'kai' },
      { id: 'lrt-eastbound', curve: this.lrtCurve, curveLength: this.lrtCurveLength, carSpacing: 16.5, trackOffset: 1.4, speed: 0.026, progress: 0.15, type: 'lrt' },
      { id: 'lrt-westbound', curve: this.lrtCurve, curveLength: this.lrtCurveLength, carSpacing: 16.5, trackOffset: -1.4, speed: -0.026, progress: 0.65, type: 'lrt' },
      { id: 'lrt-jkt-northbound', curve: this.lrtJakartaCurve, curveLength: this.lrtJakartaCurveLength, carSpacing: 15.8, trackOffset: -1.35, speed: 0.026, progress: 0.15, type: 'lrt-jakarta', carCount: 2 },
      { id: 'lrt-jkt-southbound', curve: this.lrtJakartaCurve, curveLength: this.lrtJakartaCurveLength, carSpacing: 15.8, trackOffset: 1.35, speed: -0.026, progress: 0.65, type: 'lrt-jakarta', carCount: 2 },
      { id: 'krl-priok-eastbound', curve: this.priokRailCurve, curveLength: this.priokRailCurveLength, carSpacing: 17.8, trackOffset: 1.4, speed: 0.022, progress: 0.2, type: 'krl', carCount: 4 },
      { id: 'krl-priok-westbound', curve: this.priokRailCurve, curveLength: this.priokRailCurveLength, carSpacing: 17.8, trackOffset: -1.4, speed: -0.022, progress: 0.7, type: 'krl', carCount: 4 },
      { id: 'krl-tangerang-westbound', curve: this.tangerangRailCurve, curveLength: this.tangerangRailCurveLength, carSpacing: 17.8, trackOffset: -1.35, speed: 0.023, progress: 0.25, type: 'krl', carCount: 4 },
      { id: 'krl-tangerang-eastbound', curve: this.tangerangRailCurve, curveLength: this.tangerangRailCurveLength, carSpacing: 17.8, trackOffset: 1.35, speed: -0.023, progress: 0.75, type: 'krl', carCount: 4 },
      { id: 'krl-cikarang-eastbound', curve: this.cikarangRailCurve, curveLength: this.cikarangRailCurveLength, carSpacing: 17.8, trackOffset: 1.4, speed: 0.024, progress: 0.2, type: 'krl', carCount: 4 },
      { id: 'krl-cikarang-westbound', curve: this.cikarangRailCurve, curveLength: this.cikarangRailCurveLength, carSpacing: 17.8, trackOffset: -1.4, speed: -0.024, progress: 0.7, type: 'krl', carCount: 4 },
      { id: 'lrt-cibubur-southbound', curve: this.lrtCibuburCurve, curveLength: this.lrtCibuburCurveLength, carSpacing: 16.5, trackOffset: 1.4, speed: 0.026, progress: 0.15, type: 'lrt', carCount: 4 },
      { id: 'lrt-cibubur-northbound', curve: this.lrtCibuburCurve, curveLength: this.lrtCibuburCurveLength, carSpacing: 16.5, trackOffset: -1.4, speed: -0.026, progress: 0.65, type: 'lrt', carCount: 4 },
      { id: 'lrt-velodrome-northbound', curve: this.velodromeLrtCurve, curveLength: this.velodromeLrtCurveLength, carSpacing: 15.8, trackOffset: -1.35, speed: 0.025, progress: 0.2, type: 'lrt-jakarta', carCount: 2 },
      { id: 'lrt-velodrome-southbound', curve: this.velodromeLrtCurve, curveLength: this.velodromeLrtCurveLength, carSpacing: 15.8, trackOffset: 1.35, speed: -0.025, progress: 0.7, type: 'lrt-jakarta', carCount: 2 },
      { id: 'ka-bandara-outbound', curve: this.bandaraRailCurve, curveLength: this.bandaraRailCurveLength, carSpacing: 19.8, trackOffset: -1.4, speed: 0.02, progress: 0.18, type: 'ka-bandara', carCount: 2 },
      { id: 'ka-bandara-inbound', curve: this.bandaraRailCurve, curveLength: this.bandaraRailCurveLength, carSpacing: 19.8, trackOffset: 1.4, speed: -0.02, progress: 0.68, type: 'ka-bandara', carCount: 2 }
    ];

    trainConfigs.forEach((cfg) => {
      const train = {
        curve: cfg.curve,
        curveLength: cfg.curveLength,
        carSpacing: cfg.carSpacing,
        trackOffset: cfg.trackOffset,
        speed: cfg.speed,
        progress: cfg.progress,
        cars: []
      };

      const numCars = cfg.carCount || 4;
      for (let c = 0; c < numCars; c++) {
        let carMesh;
        if (cfg.type === 'mrt') {
          carMesh = LandmarkModels.createSingleMRTRatanggaCar(c, 4);
        } else if (cfg.type === 'kai') {
          carMesh = LandmarkModels.createSingleKAIAntarkotaCar(c, 4);
        } else if (cfg.type === 'lrt') {
          carMesh = LandmarkModels.createSingleLRTJabodebekCar(c, 4);
        } else if (cfg.type === 'lrt-jakarta') {
          carMesh = LandmarkModels.createSingleLRTJakartaCar(c, 2);
        } else if (cfg.type === 'ka-bandara') {
          carMesh = LandmarkModels.createSingleKABandaraCar(c, 2);
        } else {
          carMesh = LandmarkModels.createSingleKRLCar(c, 4);
        }
        this.proceduralGroup.add(carMesh);
        train.cars.push(carMesh);
      }

      this.animatedTrains.push(train);
    });
  }

  updateTraffic(delta) {
    this.vehicles.forEach((v) => {
      if (v.isCircular) {
        v.angle += v.angularSpeed * delta;
        v.x = v.cx + Math.cos(v.angle) * v.radius;
        v.z = v.cz + Math.sin(v.angle) * v.radius;
        // Tangent direction for clockwise movement in XZ
        v.rotationY = Math.atan2(-Math.sin(v.angle), Math.cos(v.angle));
      } else {
        v.progress += v.speed * delta;
        if (v.progress > 1.0) v.progress -= 1.0;
        v.x = v.x1 + v.dx * v.progress;
        v.z = v.z1 + v.dz * v.progress;
      }
      this.writeVehicleInstance(v);
    });

    if (this.vehicleMeshes) {
      Object.values(this.vehicleMeshes).forEach((mesh) => {
        mesh.instanceMatrix.needsUpdate = true;
      });
    }

    if (this.animatedTrains && this.animatedTrains.length) {
      this.animatedTrains.forEach((train) => {
        const totalLen = train.curveLength;
        const carSpacing = train.carSpacing;

        train.progress += train.speed * delta;
        if (train.progress > 1.0) train.progress -= 1.0;
        if (train.progress < 0.0) train.progress += 1.0;

        const forward = train.speed > 0;

        train.cars.forEach((car, cIdx) => {
          const carOffset = forward ? -cIdx * carSpacing : cIdx * carSpacing;
          let carDist = train.progress * totalLen + carOffset;
          while (carDist < 0) carDist += totalLen;
          while (carDist > totalLen) carDist -= totalLen;

          const u = carDist / totalLen;
          const pt = train.curve.getPointAt(u);
          const tangent = train.curve.getTangentAt(u);

          // Track lateral normal offset for dual tracks
          const nx = -tangent.z * train.trackOffset;
          const nz = tangent.x * train.trackOffset;

          car.position.set(pt.x + nx, pt.y, pt.z + nz);
          const dirX = forward ? -tangent.x : tangent.x;
          const dirZ = forward ? -tangent.z : tangent.z;
          car.rotation.y = Math.atan2(dirX, dirZ);
        });
      });
    }
  }

  collectGlowMaterials() {
    this.proceduralGroup.traverse((child) => {
      if (child.isMesh && child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach((m) => {
          if (m && m.name && ['pju-bulb', 'monas-flame', 'menara-bca-crown', 'led-taman-anggrek'].includes(m.name)) {
            if (!this.glowMaterials.includes(m)) {
              this.glowMaterials.push(m);
            }
          }
        });
      }
    });
  }

  setTimePreset(preset) {
    const isNight = preset === 'night';
    const isGolden = preset === 'golden';

    // Dynamic ground & grid colors
    if (this.groundMat) {
      if (preset === 'day') {
        this.groundMat.color.setHex(0x283344);
        this.groundMat.roughness = 0.92;
      } else if (isGolden) {
        this.groundMat.color.setHex(0x522f1c);
        this.groundMat.roughness = 0.9;
      } else {
        this.groundMat.color.setHex(0x060b14);
        this.groundMat.roughness = 0.92;
      }
    }

    if (this.gridHelper) {
      if (preset === 'day') {
        this.gridHelper.material.color.setHex(0x3e4c63);
        this.gridHelper.material.opacity = 0.4;
      } else if (isGolden) {
        this.gridHelper.material.color.setHex(0x78350f);
        this.gridHelper.material.opacity = 0.35;
      } else {
        this.gridHelper.material.color.setHex(0x1e293b);
        this.gridHelper.material.opacity = 0.6;
      }
    }

    this.currentTimePreset = preset;
    this.lastPjuLightPosition.set(Infinity, Infinity, Infinity);
    if (preset === 'day') this.pjuLightsActive = false;
    this.pjuLightPool.forEach((light) => {
      light.intensity = isNight ? 1.8 : isGolden ? 0.6 : 0;
      if (preset === 'day') light.visible = false;
    });

    const monasSpots = this.scene.getObjectsByProperty("name", "monas-spotlight");
    monasSpots.forEach((s) => {
      s.intensity = isNight ? 4.5 : isGolden ? 1.2 : 0;
    });

    this.nightMaterials.forEach((m) => {
      m.emissiveIntensity = isNight ? 0.88 : isGolden ? 0.35 : 0;
    });

    // Selective Night Bloom Targets: PJU, Taman Anggrek LED, Menara BCA Crown, and Monas Flame
    this.glowMaterials.forEach((m) => {
      if (m.name === 'pju-bulb') {
        m.emissiveIntensity = isNight ? 2.6 : isGolden ? 1.0 : 0.0;
      } else if (m.name === 'monas-flame') {
        m.emissiveIntensity = isNight ? 2.8 : isGolden ? 1.4 : 0.6;
      } else if (m.name === 'menara-bca-crown') {
        m.emissiveIntensity = isNight ? 2.7 : isGolden ? 1.2 : 0.3;
      } else if (m.name === 'led-taman-anggrek') {
        m.emissiveIntensity = isNight ? 2.4 : isGolden ? 1.0 : 0.4;
      }
    });
  }

  setNightMode(isNight, nightFactor = 1.0) {
    this.setTimePreset(isNight ? 'night' : 'day');
  }
}
