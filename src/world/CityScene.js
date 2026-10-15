import * as THREE from 'three';
import { TextureGenerator } from './TextureGenerator.js';
import { LandmarkModels } from './LandmarkModels.js';
import { JAKARTA_LANDMARKS, CITY_CORRIDOR_CONFIG } from '../config/landmarks.js';

export class CityScene {
  constructor(scene) {
    this.scene = scene;
    this.proceduralGroup = new THREE.Group();
    this.proceduralGroup.name = "procedural-city-group";
    this.scene.add(this.proceduralGroup);

    this.interactiveObjects = [];
    this.vehicles = [];
    this.streetLights = [];
    this.nightMaterials = [];
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
    this.buildLandmarks();
    this.buildUrbanDistricts();
    this.buildStreetVegetation();
    this.buildTraffic();
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

    this.gridHelper = new THREE.GridHelper(2400, 120, 0x3e4c63, 0x334155);
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

  createStreetLamp(x, z, facingEast) {
    const poleGroup = new THREE.Group();
    poleGroup.position.set(x, 0, z);

    const poleMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.7 });
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.28, 9, 6), poleMat);
    pole.position.y = 4.5;
    poleGroup.add(pole);

    const bulb = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xfef08a })
    );
    bulb.position.set(facingEast ? 2.0 : -2.0, 8.5, 0);
    poleGroup.add(bulb);

    const lampLight = new THREE.PointLight(0xfffbeb, 0, 22, 1.5);
    lampLight.position.set(facingEast ? 2.0 : -2.0, 8.0, 0);
    poleGroup.add(lampLight);
    this.streetLights.push(lampLight);

    this.proceduralGroup.add(poleGroup);
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
      "mediterania-tanjung-duren": () => LandmarkModels.createMediteraniaTanjungDuren()
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
        roughness: 0.2,
        metalness: 0.8
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
    // 1. Real OpenStreetMap Parks & Green Spaces (165 parks)
    const parkMat = new THREE.MeshStandardMaterial({
      color: 0x14532d,
      roughness: 0.9,
      metalness: 0.05,
      side: THREE.DoubleSide
    });
    if (osm.parks) {
      osm.parks.forEach((park) => {
        if (!park.p || park.p.length < 3) return;
        const shape = new THREE.Shape();
        shape.moveTo(park.p[0][0], -park.p[0][1]);
        for (let i = 1; i < park.p.length; i++) {
          shape.lineTo(park.p[i][0], -park.p[i][1]);
        }
        const geo = new THREE.ShapeGeometry(shape);
        geo.rotateX(-Math.PI / 2);
        const mesh = new THREE.Mesh(geo, parkMat);
        mesh.position.y = 0.015;
        mesh.receiveShadow = true;
        this.proceduralGroup.add(mesh);
      });
    }

    // 2. Real OpenStreetMap Water Bodies & Rivers/Canals
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      roughness: 0.15,
      metalness: 0.85,
      side: THREE.DoubleSide
    });
    if (osm.waterPolygons) {
      osm.waterPolygons.forEach((wp) => {
        if (!wp.p || wp.p.length < 3) return;
        const shape = new THREE.Shape();
        shape.moveTo(wp.p[0][0], -wp.p[0][1]);
        for (let i = 1; i < wp.p.length; i++) {
          shape.lineTo(wp.p[i][0], -wp.p[i][1]);
        }
        const geo = new THREE.ShapeGeometry(shape);
        geo.rotateX(-Math.PI / 2);
        const mesh = new THREE.Mesh(geo, waterMat);
        mesh.position.y = 0.03;
        this.proceduralGroup.add(mesh);
      });
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

      // 4d. Kereta Rel Listrik (KRL) Commuter Line Train Consists stationed at platforms
      const trainTanahAbang = LandmarkModels.createKRLCommuterTrain();
      trainTanahAbang.position.set(-168, 0.45, -85);
      trainTanahAbang.rotation.y = 0.45;
      this.proceduralGroup.add(trainTanahAbang);

      const trainPalmerah = LandmarkModels.createKRLCommuterTrain();
      trainPalmerah.position.set(-285, 0.45, 255);
      trainPalmerah.rotation.y = 0.45;
      this.proceduralGroup.add(trainPalmerah);
    }

    // 5. Real OpenStreetMap 3D Building Footprints (1,566 authentic Jakarta buildings)
    if (osm.buildings && osm.buildings.length) {
      osm.buildings.forEach((b, idx) => {
        const pts = b.p;
        if (!pts || pts.length < 3) return;

        const shape = new THREE.Shape();
        shape.moveTo(pts[0][0], -pts[0][1]);
        for (let i = 1; i < pts.length; i++) {
          shape.lineTo(pts[i][0], -pts[i][1]);
        }

        const h = b.h || 12;
        const geo = new THREE.ExtrudeGeometry(shape, {
          depth: h,
          bevelEnabled: false
        });
        geo.rotateX(-Math.PI / 2);

        let mats;
        if (h >= 24) {
          mats = [bldMats.highRiseRoofMat, sharedMaterials[idx % sharedMaterials.length]];
        } else if (h >= 12) {
          mats = [bldMats.midRiseRoofMat, bldMats.midRiseWallMat];
        } else {
          mats = [bldMats.lowRiseRoofMat, bldMats.lowRiseWallMat];
        }

        this.applyBuildingUVs(geo);
        const mesh = new THREE.Mesh(geo, mats);
        mesh.castShadow = h >= 18;
        mesh.receiveShadow = true;

        const meters = b.hm || Math.round(h * 1.78);
        const floors = Math.max(1, Math.round(meters / 3.8));
        const bName = b.n || `Gedung Jakarta #${idx + 1}`;
        const bStreet = b.s || 'Kawasan Inti DKI Jakarta';

        mesh.userData = {
          landmarkData: {
            id: `osm-bldg-${idx}`,
            name: bName,
            category: b.n ? 'Data Gedung OpenStreetMap Jakarta' : 'Bangunan Perkotaan Jakarta',
            tagline: `${bStreet} — Geometri Tapak Asli Peta Jakarta`,
            height: `${meters} meter (~${floors} lantai)`,
            year: 'Data OSM DKI Jakarta',
            location: bStreet,
            description: `Bangunan nyata di Jakarta (${bName}) yang diekstrak langsung dari koordinat poligon tapak bangunan OpenStreetMap DKI Jakarta.`,
            facts: [
              `Bentuk tapak poligon (${pts.length} titik sudut) sesuai koordinat GPS asli Jakarta.`,
              `Estimasi elevasi struktur: ${meters} meter (~${floors} lantai).`
            ]
          },
          isClickable: true
        };

        this.interactiveObjects.push(mesh);
        this.proceduralGroup.add(mesh);
      });
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
      mesh.castShadow = true;
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

    // Trees along straight Thamrin & Medan Merdeka Barat spine (outside Bundaran HI & Patung Kuda)
    for (let z = -325; z <= 82; z += 26) {
      if (Math.abs(z) < 29 || Math.abs(z + 215) < 26) continue;
      this.createTree(-15.5, z, foliageMat, trunkMat);
      if (z > -205) {
        this.createTree(15.5, z, foliageMat, trunkMat);
      }
    }

    // Trees along true OpenStreetMap curve of Jl. Jenderal Sudirman
    for (let z = 118; z <= 452; z += 28) {
      if (Math.abs(z - 350) < 48) continue; // Skip Simpang Semanggi
      const xCenter = this.getSudirmanCenterX(z);
      this.createTree(xCenter - 16, z, foliageMat, trunkMat);
      this.createTree(xCenter + 16, z, foliageMat, trunkMat);
    }

    // Trees along Lapangan Medan Merdeka (Monas Park perimeter & walks)
    for (let x = 12; x <= 92; x += 16) {
      this.createTree(x, -222, foliageMat, trunkMat);
      this.createTree(x, -330, foliageMat, trunkMat);
    }
    for (let z = -320; z <= -230; z += 18) {
      this.createTree(12, z, foliageMat, trunkMat);
      this.createTree(92, z, foliageMat, trunkMat);
    }

    // Taman Suropati (Lush circular urban park in Menteng)
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      this.createTree(135 + Math.cos(angle) * 11, 55 + Math.sin(angle) * 11, foliageMat, trunkMat, 1.15);
      this.createTree(135 + Math.cos(angle + 0.39) * 18, 55 + Math.sin(angle + 0.39) * 18, foliageMat, trunkMat, 1.25);
    }

    // Lapangan Banteng (Historic civic square east of Istiqlal)
    for (let x = 150; x <= 184; x += 17) {
      this.createTree(x, -365, foliageMat, trunkMat);
      this.createTree(x, -330, foliageMat, trunkMat);
    }
    for (let z = -355; z <= -340; z += 15) {
      this.createTree(150, z, foliageMat, trunkMat);
      this.createTree(184, z, foliageMat, trunkMat);
    }

    // Gelora Bung Karno (GBK Senayan parkland & perimeter)
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      this.createTree(-285 + Math.cos(angle) * 44, 350 + Math.sin(angle) * 44, foliageMat, trunkMat, 1.25);
      this.createTree(-285 + Math.cos(angle + 0.26) * 58, 350 + Math.sin(angle + 0.26) * 58, foliageMat, trunkMat, 1.15);
    }

    // Bundaran Senayan greenery
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      this.createTree(-195 + Math.cos(angle) * 22, 470 + Math.sin(angle) * 22, foliageMat, trunkMat);
    }

    // 7. Jalur Hijau Bantaran Kanal Banjir Barat (KBB Green River Corridor)
    // Dari Karet melewati Tanah Abang hingga Jatipulo & Tomang
    const kbbGreenPoints = [
      [-105, 75], [-115, 60], [-130, 35], [-145, 10], [-158, -25], [-162, -55],
      [-172, -95], [-180, -135], [-190, -170], [-210, -215], [-230, -260], [-245, -295]
    ];
    kbbGreenPoints.forEach(([kx, kz]) => {
      this.createTree(kx - 7, kz, foliageMat, trunkMat, 1.1);
      this.createTree(kx + 7, kz, foliageMat, trunkMat, 1.1);
    });

    // 8. Koridor Penghijauan Jalan Letjen S. Parman (Grogol -> Tomang -> Slipi)
    for (let z = -385; z <= 65; z += 35) {
      const t = (z + 385) / 450;
      const x = -482 + t * 152;
      this.createTree(x - 9.5, z, foliageMat, trunkMat, 1.1);
      this.createTree(x + 9.5, z, foliageMat, trunkMat, 1.1);
    }

    // 9. Ruang Terbuka Hijau & Lanskap Palmerah (Sekitar Stasiun & Belakang DPR/MPR)
    for (let z = 225; z <= 285; z += 20) {
      this.createTree(-295, z, foliageMat, trunkMat, 1.15);
      this.createTree(-275, z, foliageMat, trunkMat, 1.05);
    }

    // 10. Ruang Terbuka Hijau Kampus BINUS & Kemanggisan
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      this.createTree(-480 + Math.cos(angle) * 22, 25 + Math.sin(angle) * 22, foliageMat, trunkMat, 1.05);
    }

    // 11. Ruang Terbuka Hijau Tanjung Duren & Tribeca Park Podomoro
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      this.createTree(-465 + Math.cos(angle) * 16, -245 + Math.sin(angle) * 16, foliageMat, trunkMat, 1.2);
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
    foliage.castShadow = true;
    group.add(foliage);

    this.proceduralGroup.add(group);
  }

  createVehicleMesh(isBus, color) {
    const vehicle = new THREE.Group();
    const bodyGeo = isBus
      ? new THREE.BoxGeometry(2.6, 2.6, 9.2)
      : new THREE.BoxGeometry(2.0, 1.4, 4.2);
    const bodyMat = new THREE.MeshStandardMaterial({
      color,
      metalness: 0.6,
      roughness: 0.3
    });

    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = isBus ? 1.4 : 0.8;
    vehicle.add(body);

    const hl = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.25, 0.1),
      new THREE.MeshBasicMaterial({ color: 0xffedd5 })
    );
    hl.position.set(0, 0.8, isBus ? 4.65 : 2.15);
    vehicle.add(hl);

    const tl = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.25, 0.1),
      new THREE.MeshBasicMaterial({ color: 0xef4444 })
    );
    tl.position.set(0, 0.8, -(isBus ? 4.65 : 2.15));
    vehicle.add(tl);

    return vehicle;
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
      { x1: 145.0, z1: 475, x2: 99.0, z2: 192, count: 8 }
    ];

    let idx = 0;
    routes.forEach((route) => {
      const dx = route.x2 - route.x1;
      const dz = route.z2 - route.z1;
      const angle = Math.atan2(dx, dz);

      for (let j = 0; j < route.count; j++) {
        const isBus = idx % 6 === 0;
        const vehicle = this.createVehicleMesh(
          isBus,
          isBus ? 0x0284c7 : colors[idx % colors.length]
        );

        const t = j / route.count;
        vehicle.position.set(route.x1 + dx * t, 0, route.z1 + dz * t);
        vehicle.rotation.y = angle;

        this.vehicles.push({
          mesh: vehicle,
          isCircular: false,
          x1: route.x1,
          z1: route.z1,
          dx,
          dz,
          progress: t,
          speed: (isBus ? 0.065 : 0.095) + (idx % 4) * 0.014
        });

        this.proceduralGroup.add(vehicle);
        idx++;
      }
    });

    // Circular Roundabout Traffic orbiting Bundaran HI (0,0), Patung Kuda (-3,-215), & Bundaran Senayan (-316,478)
    const roundabouts = [
      { cx: 0, cz: 0, radius: 16.5, count: 6, speed: 0.45 },
      { cx: 0, cz: 0, radius: 20.2, count: 6, speed: 0.52 },
      { cx: -3, cz: -215, radius: 18.0, count: 5, speed: 0.48 },
      { cx: -316, cz: 478, radius: 22.0, count: 5, speed: 0.44 }
    ];

    roundabouts.forEach((rb, rIdx) => {
      for (let k = 0; k < rb.count; k++) {
        const isBus = k === 0 && rIdx === 0;
        const vehicle = this.createVehicleMesh(
          isBus,
          isBus ? 0x0284c7 : colors[(k + rIdx) % colors.length]
        );
        const angle = (k / rb.count) * Math.PI * 2;
        vehicle.position.set(rb.cx + Math.cos(angle) * rb.radius, 0, rb.cz + Math.sin(angle) * rb.radius);
        vehicle.rotation.y = Math.atan2(-Math.sin(angle), Math.cos(angle));

        this.vehicles.push({
          mesh: vehicle,
          isCircular: true,
          cx: rb.cx,
          cz: rb.cz,
          radius: rb.radius,
          angle,
          angularSpeed: rb.speed
        });

        this.proceduralGroup.add(vehicle);
      }
    });
  }

  updateTraffic(delta) {
    this.vehicles.forEach((v) => {
      if (v.isCircular) {
        v.angle += v.angularSpeed * delta;
        v.mesh.position.x = v.cx + Math.cos(v.angle) * v.radius;
        v.mesh.position.z = v.cz + Math.sin(v.angle) * v.radius;
        // Tangent direction for clockwise movement in XZ
        v.mesh.rotation.y = Math.atan2(-Math.sin(v.angle), Math.cos(v.angle));
      } else {
        v.progress += v.speed * delta;
        if (v.progress > 1.0) v.progress -= 1.0;
        v.mesh.position.x = v.x1 + v.dx * v.progress;
        v.mesh.position.z = v.z1 + v.dz * v.progress;
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

    this.streetLights.forEach((light) => {
      light.intensity = isNight ? 1.8 : isGolden ? 0.6 : 0;
    });

    const monasSpots = this.scene.getObjectsByProperty("name", "monas-spotlight");
    monasSpots.forEach((s) => {
      s.intensity = isNight ? 4.5 : isGolden ? 1.2 : 0;
    });

    this.nightMaterials.forEach((m) => {
      m.emissiveIntensity = isNight ? 0.88 : isGolden ? 0.35 : 0;
    });
  }

  setNightMode(isNight, nightFactor = 1.0) {
    this.setTimePreset(isNight ? 'night' : 'day');
  }
}
