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
    this.buildLandmarks();
    this.buildUrbanDistricts();
    this.buildStreetVegetation();
    this.buildTraffic();
  }

  /**
   * Expansive Jakarta ground plane with subtle urban block grid
   */
  buildGroundAndGrid() {
    const groundGeo = new THREE.PlaneGeometry(2400, 2400);
    groundGeo.rotateX(-Math.PI / 2);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0b111e,
      roughness: 0.92,
      metalness: 0.08
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.receiveShadow = true;
    ground.position.y = -0.15;
    this.proceduralGroup.add(ground);

    // Subtle geospatial coordinate grid lines on ground
    const gridHelper = new THREE.GridHelper(1600, 80, 0x1e293b, 0x111827);
    gridHelper.position.y = -0.08;
    this.proceduralGroup.add(gridHelper);
  }

  /**
   * Sungai Ciliwung & Kanal Banjir Barat (Melintang di Dukuh Atas Z = +88 & Istiqlal)
   */
  buildWaterways() {
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      roughness: 0.15,
      metalness: 0.85
    });
    const bankMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 });

    // 1. Kanal Banjir Barat (Dukuh Atas - Karet, Z = +88)
    const canalGeo = new THREE.PlaneGeometry(950, 22);
    canalGeo.rotateX(-Math.PI / 2);
    const canal = new THREE.Mesh(canalGeo, waterMat);
    canal.position.set(0, 0.04, 88);
    this.proceduralGroup.add(canal);

    // Concrete embankments
    [-12, 12].forEach((zOff) => {
      const bank = new THREE.Mesh(new THREE.BoxGeometry(950, 1.2, 2), bankMat);
      bank.position.set(0, 0.4, 88 + zOff);
      this.proceduralGroup.add(bank);
    });

    // Jembatan Jalan Jenderal Sudirman di atas Kanal Banjir Barat
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(56, 1.4, 28), bankMat);
    bridge.position.set(0, 0.45, 88);
    this.proceduralGroup.add(bridge);

    // 2. Aliran Sungai Ciliwung (Membelah kawasan Istiqlal & Pasar Baru di Utara)
    const ciliwungNorth = new THREE.Mesh(new THREE.PlaneGeometry(450, 12), waterMat);
    ciliwungNorth.rotation.x = -Math.PI / 2;
    ciliwungNorth.position.set(160, 0.04, -370);
    this.proceduralGroup.add(ciliwungNorth);
  }

  /**
   * True-to-Map Road Network of Central & South Jakarta:
   * - Poros Utama: Medan Merdeka -> Thamrin -> Sudirman -> Senayan
   * - Poros Barat-Timur: Jl. Gatot Subroto & Tol Dalam Kota (di Semanggi)
   * - Poros Timur: Jl. H.R. Rasuna Said (Kuningan)
   * - Poros Barat: Jl. K.H. Mas Mansyur
   * - Lingkar Medan Merdeka (Monas) & Jl. Wahid Hasyim (Sarinah) & Jl. Imam Bonjol (Menteng)
   */
  buildRoadNetwork() {
    const roadTex = TextureGenerator.createRoadTexture();
    const roadMat = new THREE.MeshStandardMaterial({
      map: roadTex,
      roughness: 0.75,
      metalness: 0.15
    });
    const secondaryRoadMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.85
    });
    const swMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createSidewalkTexture(),
      roughness: 0.8
    });

    // 1. POROS UTAMA UTARA-SELATAN (Jl. M.H. Thamrin - Jl. Jend. Sudirman)
    // Membentang dari Patung Kuda (Z=-215) hingga Bundaran Senayan (Z=+510)
    const mainLen = 740;
    const mainRoadGeo = new THREE.PlaneGeometry(44, mainLen);
    mainRoadGeo.rotateX(-Math.PI / 2);
    const mainRoad = new THREE.Mesh(mainRoadGeo, roadMat);
    mainRoad.position.set(0, 0.05, 150);
    mainRoad.receiveShadow = true;
    this.proceduralGroup.add(mainRoad);

    // Trotoar Barat & Timur Sudirman-Thamrin
    [-25, 25].forEach((x) => {
      const swGeo = new THREE.PlaneGeometry(6, mainLen);
      swGeo.rotateX(-Math.PI / 2);
      const sw = new THREE.Mesh(swGeo, swMat);
      sw.position.set(x, 0.15, 150);
      sw.receiveShadow = true;
      this.proceduralGroup.add(sw);
    });

    // 2. POROS BARAT-TIMUR (Jl. Gatot Subroto & Tol Dalam Kota di Z = +270)
    const gatsuLen = 820;
    const gatsuGeo = new THREE.PlaneGeometry(gatsuLen, 42);
    gatsuGeo.rotateX(-Math.PI / 2);
    const gatsuRoad = new THREE.Mesh(gatsuGeo, secondaryRoadMat);
    gatsuRoad.position.set(0, 0.06, 270);
    gatsuRoad.receiveShadow = true;
    this.proceduralGroup.add(gatsuRoad);

    // Median Tol Dalam Kota Gatot Subroto
    const tollMedian = new THREE.Mesh(
      new THREE.BoxGeometry(gatsuLen, 0.8, 2.5),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b })
    );
    tollMedian.position.set(0, 0.4, 270);
    this.proceduralGroup.add(tollMedian);

    // 3. LINGKAR EMPAT JALAN MEDAN MERDEKA (Mengelilingi Monas)
    // Medan Merdeka Selatan (Z = -215) & Medan Merdeka Utara (Z = -425)
    [-215, -425].forEach((z) => {
      const mmHoriz = new THREE.Mesh(new THREE.PlaneGeometry(240, 24), secondaryRoadMat);
      mmHoriz.rotation.x = -Math.PI / 2;
      mmHoriz.position.set(0, 0.05, z);
      this.proceduralGroup.add(mmHoriz);
    });
    // Medan Merdeka Barat (X = -105) & Medan Merdeka Timur (X = +105)
    [-105, 105].forEach((x) => {
      const mmVert = new THREE.Mesh(new THREE.PlaneGeometry(24, 234), secondaryRoadMat);
      mmVert.rotation.x = -Math.PI / 2;
      mmVert.position.set(x, 0.05, -320);
      this.proceduralGroup.add(mmVert);
    });

    // 4. KORIDOR KUNINGAN (Jl. H.R. Rasuna Said di X = +200)
    const rasunaRoad = new THREE.Mesh(new THREE.PlaneGeometry(28, 480), secondaryRoadMat);
    rasunaRoad.rotation.x = -Math.PI / 2;
    rasunaRoad.position.set(200, 0.04, 180);
    this.proceduralGroup.add(rasunaRoad);

    // 5. KORIDOR TANAH ABANG - KARET (Jl. K.H. Mas Mansyur di X = -140)
    const mansyurRoad = new THREE.Mesh(new THREE.PlaneGeometry(22, 380), secondaryRoadMat);
    mansyurRoad.rotation.x = -Math.PI / 2;
    mansyurRoad.position.set(-140, 0.04, 50);
    this.proceduralGroup.add(mansyurRoad);

    // 6. JALAN LINTAS: Jl. Wahid Hasyim (Sarinah Z=-105), Jl. Imam Bonjol (Menteng), Jl. Asia Afrika (Senayan)
    [-105, 0, 380, 480].forEach((z) => {
      const crossRoad = new THREE.Mesh(new THREE.PlaneGeometry(420, 18), secondaryRoadMat);
      crossRoad.rotation.x = -Math.PI / 2;
      crossRoad.position.set(0, 0.03, z);
      this.proceduralGroup.add(crossRoad);
    });

    // Lampu Jalan PJU sepanjang Sudirman-Thamrin & Gatot Subroto
    for (let z = -210; z <= 470; z += 40) {
      if (Math.abs(z) < 28 || Math.abs(z - 270) < 35) continue;
      this.createStreetLamp(-23, z, true);
      this.createStreetLamp(23, z, false);
    }
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
   * Builds all 19 official Jakarta landmarks at their true map positions
   */
  buildLandmarks() {
    const builders = {
      "istana-merdeka": () => LandmarkModels.createIstanaMerdeka(),
      "masjid-istiqlal": () => LandmarkModels.createMasjidIstiqlal(),
      "gereja-katedral": () => LandmarkModels.createGerejaKatedral(),
      "monas": () => LandmarkModels.createMonas(),
      "stasiun-gambir": () => LandmarkModels.createStasiunGambir(),
      "patung-kuda": () => LandmarkModels.createPatungKuda(),
      "gedung-sarinah": () => LandmarkModels.createSarinah(),
      "bundaran-hi": () => LandmarkModels.createBundaranHI(),
      "menara-bca": () => LandmarkModels.createMenaraBCA(),
      "autograph-tower": () => LandmarkModels.createAutographTower(),
      "wisma-46": () => LandmarkModels.createWisma46(),
      "sampoerna-strategic": () => LandmarkModels.createSampoernaStrategic(),
      "jpo-phinisi": () => LandmarkModels.createJPOPhinisi(),
      "simpang-semanggi": () => LandmarkModels.createSimpangSemanggi(),
      "gedung-dpr-mpr": () => LandmarkModels.createGedungDPR(),
      "mega-kuningan": () => LandmarkModels.createMegaKuningan(),
      "scbd-district": () => this.createSCBDCluster(),
      "gbk-senayan": () => LandmarkModels.createGBK(),
      "bundaran-senayan": () => LandmarkModels.createBundaranSenayan()
    };

    JAKARTA_LANDMARKS.forEach((item) => {
      const builder = builders[item.id];
      if (!builder) return;

      const model = builder();
      model.position.set(...item.position);
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
      { x: -18, z: -15, w: 26, d: 24, h: 168, style: 'dark-minimal', name: 'Treasury Tower (279m)' },
      { x: 20, z: -18, w: 24, d: 22, h: 135, style: 'modern-blue', name: 'The Energy Building' },
      { x: -16, z: 22, w: 22, d: 22, h: 148, style: 'bronze-glass', name: 'District 8 Tower' },
      { x: 24, z: 20, w: 26, d: 22, h: 112, style: 'modern-blue', name: 'Gedung Bursa Efek Indonesia (IDX)' },
      { x: 2, z: 48, w: 28, d: 24, h: 152, style: 'wisma-teal', name: 'Pacific Place & Ritz-Carlton' }
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
   * Builds authentic Jakarta surrounding urban neighborhoods:
   * - Koridor Pencakar Langit Sudirman-Thamrin
   * - Kawasan Menteng (Perumahan Cagar Budaya & Taman Rindang di Timur Thamrin)
   * - Kawasan Kuningan & Gatot Subroto Timur
   * - Kawasan Tanah Abang & Kebon Kacang di Barat
   */
  buildUrbanDistricts() {
    const styles = ['modern-blue', 'bronze-glass', 'dark-minimal', 'wisma-teal'];

    // Create 3 shared materials per style for high WebGL performance
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
        emissiveIntensity: 0.22,
        roughness: 0.25,
        metalness: 0.75
      });
      this.nightMaterials.push(mat);
      return mat;
    });

    // 1. Deretan Gedung Koridor Thamrin - Sudirman (Z = -190 s/d Z = +450)
    for (let i = 0; i < 65; i++) {
      const isWest = i % 2 === 0;
      const x = isWest ? -(38 + (i % 4) * 22) : (38 + (i % 4) * 22);
      const z = -185 + i * 9.8;

      // Hindari tabrakan dengan landmark utama
      if (this.isNearLandmark(x, z, 36)) continue;
      if (Math.abs(z - 88) < 18) continue; // Kanal Banjir Barat
      if (Math.abs(z - 270) < 48) continue; // Simpang Semanggi

      const h = 42 + ((i * 19) % 95);
      const w = 16 + (i % 10);
      const d = 16 + ((i * 3) % 10);
      const mat = sharedMaterials[i % sharedMaterials.length];

      this.spawnContextualBuilding(x, z, w, h, d, mat, i, isWest ? "Koridor Barat Sudirman-Thamrin" : "Koridor Timur Sudirman-Thamrin");
    }

    // 2. Kawasan Menteng (Timur Thamrin: X = +90 s/d +260, Z = -180 s/d +60)
    // Bangunan rendah-menengah (low/mid-rise) & rumah kolonial beratap terakota
    const mentengWallMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.7 });
    const mentengRoofMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.65 });

    for (let mx = 100; mx <= 260; mx += 28) {
      for (let mz = -170; mz <= 50; mz += 28) {
        if (Math.abs(mz) < 14) continue;
        const w = 12 + (mx % 6);
        const d = 12 + (mz % 6);
        const h = 7 + ((mx + mz) % 10);

        const house = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mentengWallMat);
        house.position.set(mx, h / 2, mz);
        house.castShadow = true;
        this.proceduralGroup.add(house);

        const roof = new THREE.Mesh(new THREE.ConeGeometry(w * 0.75, 4.5, 4), mentengRoofMat);
        roof.rotation.y = Math.PI / 4;
        roof.position.set(mx, h + 2.25, mz);
        this.proceduralGroup.add(roof);
      }
    }

    // 3. Kawasan Segitiga Emas Kuningan & Gatot Subroto (X = +100 s/d +320, Z = +120 s/d +360)
    for (let i = 0; i < 32; i++) {
      const x = 115 + (i % 6) * 35;
      const z = 120 + Math.floor(i / 6) * 45;
      if (this.isNearLandmark(x, z, 40)) continue;
      if (Math.abs(z - 270) < 28) continue;

      const h = 55 + ((i * 23) % 85);
      const mat = sharedMaterials[(i + 1) % sharedMaterials.length];
      this.spawnContextualBuilding(x, z, 20, h, 20, mat, 100 + i, "Kawasan Bisnis Kuningan & Gatot Subroto");
    }

    // 4. Kawasan Tanah Abang & Slipi (Barat: X = -120 s/d -300, Z = -150 s/d +180)
    for (let i = 0; i < 30; i++) {
      const x = -(120 + (i % 5) * 36);
      const z = -140 + Math.floor(i / 5) * 52;
      if (this.isNearLandmark(x, z, 40)) continue;
      if (Math.abs(z - 88) < 18) continue;

      const h = 30 + ((i * 17) % 65);
      const mat = sharedMaterials[(i + 2) % sharedMaterials.length];
      this.spawnContextualBuilding(x, z, 18, h, 18, mat, 200 + i, "Kawasan Tanah Abang & Karet");
    }
  }

  isNearLandmark(x, z, minDist) {
    for (const lm of JAKARTA_LANDMARKS) {
      const dx = x - lm.position[0];
      const dz = z - lm.position[2];
      if (Math.sqrt(dx * dx + dz * dz) < minDist) return true;
    }
    return false;
  }

  spawnContextualBuilding(x, z, w, h, d, mat, index, areaName) {
    const bldg = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    bldg.position.set(x, h / 2, z);
    bldg.castShadow = true;
    bldg.receiveShadow = true;

    bldg.userData = {
      landmarkData: {
        id: `bldg-${index}`,
        name: `Gedung Perkantoran Jakarta #${index + 1}`,
        category: "Gedung Komersial",
        tagline: areaName,
        height: `${Math.round(h * 1.9)} meter (${Math.floor(h / 3.5)} lantai)`,
        year: `${1995 + (index % 29)}`,
        architect: "Arsitektur Metropolitan Jakarta",
        location: areaName,
        description: `Gedung perkantoran dan komersial bertingkat yang menjadi bagian dari tata ruang kawasan ${areaName}.`,
        facts: [
          "Bagian dari koridor ekonomi utama DKI Jakarta.",
          "Dilengkapi sistem fasad peredam radiasi matahari tropis."
        ]
      },
      isClickable: true
    };

    this.interactiveObjects.push(bldg);
    this.proceduralGroup.add(bldg);
  }

  /**
   * Lush tropical trees along roads, Monas Park, Menteng, and Senayan
   */
  buildStreetVegetation() {
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.75 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });

    // Trees along Sudirman-Thamrin
    for (let z = -200; z <= 460; z += 22) {
      if (Math.abs(z) < 28 || Math.abs(z - 88) < 16 || Math.abs(z - 270) < 35) continue;
      this.createTree(-25, z, foliageMat, trunkMat);
      this.createTree(25, z, foliageMat, trunkMat);
    }

    // Trees around Medan Merdeka (Monas Park Perimeter)
    for (let x = -80; x <= 80; x += 20) {
      this.createTree(x, -235, foliageMat, trunkMat);
      this.createTree(x, -405, foliageMat, trunkMat);
    }
  }

  createTree(x, z, foliageMat, trunkMat) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.38, 4, 6), trunkMat);
    trunk.position.y = 2;
    group.add(trunk);

    const foliage = new THREE.Mesh(new THREE.ConeGeometry(2.6, 6.5, 7), foliageMat);
    foliage.position.y = 6;
    foliage.castShadow = true;
    group.add(foliage);

    this.proceduralGroup.add(group);
  }

  /**
   * Multi-Corridor Animated Traffic:
   * - Sudirman-Thamrin (North-South TransJakarta & Cars)
   * - Gatot Subroto Toll Road (East-West Traffic)
   */
  buildTraffic() {
    const colors = [0x0284c7, 0xf8fafc, 0x0f172a, 0x94a3b8, 0xef4444, 0xf59e0b];

    for (let i = 0; i < CITY_CORRIDOR_CONFIG.trafficDensity; i++) {
      const isEastWest = i >= 42; // 42 vehicles on Sudirman-Thamrin, 22 on Gatot Subroto
      const isBus = i % 6 === 0;
      const dirPositive = i % 2 === 0;

      const vehicle = new THREE.Group();
      const bodyGeo = isBus
        ? new THREE.BoxGeometry(2.6, 2.6, 9.5)
        : new THREE.BoxGeometry(2.0, 1.4, 4.2);
      const bodyMat = new THREE.MeshStandardMaterial({
        color: isBus ? 0x0284c7 : colors[i % colors.length],
        metalness: 0.6,
        roughness: 0.3
      });

      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = isBus ? 1.4 : 0.8;
      vehicle.add(body);

      // Headlights & Taillights
      const hl = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 0.25, 0.1),
        new THREE.MeshBasicMaterial({ color: 0xffedd5 })
      );
      hl.position.set(0, 0.8, isBus ? 4.8 : 2.15);
      vehicle.add(hl);

      const tl = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 0.25, 0.1),
        new THREE.MeshBasicMaterial({ color: 0xef4444 })
      );
      tl.position.set(0, 0.8, -(isBus ? 4.8 : 2.15));
      vehicle.add(tl);

      if (!isEastWest) {
        // North-South Sudirman-Thamrin
        const laneX = isBus
          ? (dirPositive ? -7.5 : 7.5)
          : (dirPositive ? -(11 + (i % 3) * 3.5) : (11 + (i % 3) * 3.5));
        const z = -210 + (i * 16) % 680;
        vehicle.position.set(laneX, 0, z);
        if (!dirPositive) vehicle.rotation.y = Math.PI;

        this.vehicles.push({
          mesh: vehicle,
          axis: 'z',
          speed: (isBus ? 0.42 : 0.65) + (i % 4) * 0.08,
          dir: dirPositive ? 1 : -1,
          min: -215,
          max: 485
        });
      } else {
        // East-West Gatot Subroto
        const laneZ = 270 + (dirPositive ? 8 + (i % 2) * 4 : -(8 + (i % 2) * 4));
        const x = -380 + ((i - 42) * 35) % 760;
        vehicle.position.set(x, 0, laneZ);
        vehicle.rotation.y = dirPositive ? Math.PI / 2 : -Math.PI / 2;

        this.vehicles.push({
          mesh: vehicle,
          axis: 'x',
          speed: 0.75 + (i % 3) * 0.1,
          dir: dirPositive ? 1 : -1,
          min: -390,
          max: 390
        });
      }

      this.proceduralGroup.add(vehicle);
    }
  }

  updateTraffic(delta) {
    this.vehicles.forEach((v) => {
      const step = v.speed * delta * 55 * v.dir;
      if (v.axis === 'z') {
        v.mesh.position.z += step;
        if (v.mesh.position.z > v.max) v.mesh.position.z = v.min;
        if (v.mesh.position.z < v.min) v.mesh.position.z = v.max;
      } else {
        v.mesh.position.x += step;
        if (v.mesh.position.x > v.max) v.mesh.position.x = v.min;
        if (v.mesh.position.x < v.min) v.mesh.position.x = v.max;
      }
    });
  }

  setNightMode(isNight, nightFactor = 1.0) {
    this.streetLights.forEach((light) => {
      light.intensity = isNight ? 1.8 * nightFactor : 0;
    });

    const monasSpots = this.scene.getObjectsByProperty("name", "monas-spotlight");
    monasSpots.forEach((s) => {
      s.intensity = isNight ? 3.8 * nightFactor : 0;
    });

    this.nightMaterials.forEach((m) => {
      m.emissiveIntensity = isNight ? 0.88 * nightFactor : 0.16;
    });
  }
}
