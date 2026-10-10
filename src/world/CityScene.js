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
    const groundGeo = new THREE.PlaneGeometry(2600, 2600);
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

    const gridHelper = new THREE.GridHelper(1800, 90, 0x1e293b, 0x111827);
    gridHelper.position.y = -0.08;
    this.proceduralGroup.add(gridHelper);
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
   * Authentic Central Jakarta Waterways (mapped from OpenStreetMap):
   * 1. Kanal Banjir Barat: Manggarai (+340, +175) -> Dukuh Atas (0, +90) -> Karet (-205, +38),
   *    then bends 75° North past Stasiun Tanah Abang (-215, -180) -> Cideng/Tomang (-255, -380).
   * 2. Waduk Melati & Kali Cideng: (-85, +52) flowing North behind Grand Indonesia & Sarinah.
   * 3. Kali Ciliwung: Kwitang/Pejambon -> Masjid Istiqlal (+135, -420) -> bifurcates West along
   *    Jl. Veteran/Juanda (north of Istana Negara) to Harmoni (-145, -510) & NE to Pasar Baru.
   */
  buildWaterways() {
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      roughness: 0.14,
      metalness: 0.86
    });
    const bankMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 });

    // 1A. Kanal Banjir Barat — Leg Timur ke Barat (Manggarai -> Dukuh Atas -> Karet Petamburan, 284° WNW)
    this.addLinearStrip(360, 180, -205, 38, 22, 0.04, waterMat, false);

    // 1B. Kanal Banjir Barat — Belokan Utara 75° (Petamburan -> Tanah Abang -> Cideng/Tomang)
    this.addLinearStrip(-205, 38, -225, -240, 20, 0.04, waterMat, false);
    this.addLinearStrip(-225, -240, -285, -460, 18, 0.04, waterMat, false);

    // Jembatan Dukuh Atas (Sudirman - Thamrin melintasi Kanal Banjir Barat)
    const dukuhAtasBridge = new THREE.Mesh(new THREE.BoxGeometry(52, 1.4, 30), bankMat);
    dukuhAtasBridge.position.set(0, 0.45, 90);
    this.proceduralGroup.add(dukuhAtasBridge);

    // 2. Waduk Melati (Barat Daya Bundaran HI, di samping Thamrin Nine / Autograph Tower)
    const wadukMelati = new THREE.Mesh(new THREE.CylinderGeometry(18, 18, 0.5, 24), waterMat);
    wadukMelati.scale.set(1.3, 1, 0.9);
    wadukMelati.position.set(-88, 0.05, 54);
    this.proceduralGroup.add(wadukMelati);

    // Aliran Kali Cideng di belakang Grand Indonesia & Sarinah (X = -75)
    this.addLinearStrip(-88, 54, -75, -165, 6, 0.03, waterMat, false);

    // 3. Sungai Ciliwung di Timur Laut (Pejambon -> Masjid Istiqlal -> Harmoni & Pasar Baru)
    this.addLinearStrip(175, -180, 145, -420, 11, 0.04, waterMat, false);
    // Cabang Barat (Jl. Veteran / Juanda di Utara Istana Negara menuju Harmoni)
    this.addLinearStrip(145, -450, -145, -495, 12, 0.04, waterMat, false);
    // Cabang Utara Gajah Mada - Hayam Wuruk dari Harmoni
    this.addLinearStrip(-145, -495, -175, -620, 12, 0.04, waterMat, false);
    // Cabang Timur Laut menuju Pasar Baru / Gunung Sahari
    this.addLinearStrip(145, -420, 290, -520, 10, 0.04, waterMat, false);
  }

  /**
   * Authentic Central Jakarta & Golden Triangle Road Network:
   * - Straight Spine: Medan Merdeka Barat -> Patung Kuda -> MH Thamrin -> Bundaran HI -> Dukuh Atas (X=0)
   * - 23° SSW Diagonal Spine: Dukuh Atas (0, 90) -> Semanggi (-125, 310) -> Bundaran Senayan (-190, 475)
   * - Asymmetric Trapezoidal Medan Merdeka Loop around Monas
   * - Harmoni & Jl. Majapahit approach in NW
   * - Kebon Sirih (to Tugu Tani), Wahid Hasyim (Sarinah), Jl. Sabang (H. Agus Salim)
   * - Menteng Radial Boulevards: Jl. Imam Bonjol -> Taman Suropati -> Jl. Diponegoro, Jl. HOS Cokroaminoto -> Rasuna Said
   * - Tanah Abang / KH Mas Mansyur -> Flyover Prof. Dr. Satrio (Casablanca)
   * - Jl. Gatot Subroto & Tol Dalam Kota (NW-SE across Semanggi)
   */
  buildRoadNetwork() {
    const roadTex = TextureGenerator.createRoadTexture();
    const primaryRoadMat = new THREE.MeshStandardMaterial({
      map: roadTex,
      roughness: 0.75,
      metalness: 0.15
    });
    const boulevardMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.82
    });
    const localStreetMat = new THREE.MeshStandardMaterial({
      color: 0x172033,
      roughness: 0.88
    });
    const swMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createSidewalkTexture(),
      roughness: 0.8
    });

    // =========================================================================
    // 1. POROS LURUS THAMRIN (Patung Kuda Z=-215 -> Bundaran HI Z=0 -> Dukuh Atas Z=+90)
    // =========================================================================
    this.addLinearStrip(0, -215, 0, 92, 42, 0.06, primaryRoadMat);
    this.addLinearStrip(-24, -215, -24, 92, 5.5, 0.14, swMat);
    this.addLinearStrip(24, -215, 24, 92, 5.5, 0.14, swMat);

    // =========================================================================
    // 2. POROS DIAGONAL 23° SSW JL. JENDERAL SUDIRMAN
    //    Membelok tepat di Jembatan Dukuh Atas (0, 90) -> Semanggi (-125, 310) -> Senayan (-195, 485)
    // =========================================================================
    this.addLinearStrip(0, 90, -198, 490, 42, 0.06, primaryRoadMat);
    this.addLinearStrip(-23, 98, -221, 498, 5.5, 0.14, swMat);
    this.addLinearStrip(23, 82, -175, 482, 5.5, 0.14, swMat);

    // =========================================================================
    // 3. LINGKAR TRAPESIUM MEDAN MERDEKA (MONAS) & JL. MAJAPAHIT (HARMONI)
    // =========================================================================
    // Jl. Medan Merdeka Barat (Lurus Utara-Selatan menyambung ke Patung Kuda)
    this.addLinearStrip(0, -425, 0, -215, 32, 0.05, boulevardMat);
    // Jl. Majapahit dari Sudut Barat Laut Monas menuju Simpang Harmoni (-145, -510)
    this.addLinearStrip(-85, -425, -145, -525, 26, 0.05, boulevardMat);
    // Jl. Medan Merdeka Utara (Depan Istana Merdeka)
    this.addLinearStrip(-95, -425, 85, -425, 24, 0.05, boulevardMat);
    // Jl. Medan Merdeka Selatan (Lebih lebar karena sisi timur miring 13° SSE)
    this.addLinearStrip(-95, -215, 130, -215, 26, 0.05, boulevardMat);
    // Jl. Medan Merdeka Timur (Miring 167° SSE dari X=+85 di Utara ke X=+130 di Selatan)
    this.addLinearStrip(85, -425, 130, -215, 24, 0.05, boulevardMat);
    // Sisi Barat Dalam Monas
    this.addLinearStrip(-95, -425, -95, -215, 22, 0.05, boulevardMat);

    // =========================================================================
    // 4. JARINGAN JALAN JAKARTA PUSAT (KEBON SIRIH, WAHID HASYIM, SABANG, LAP. BANTENG)
    // =========================================================================
    // Jl. Kebon Sirih (Barat-Timur dari Tanah Abang -> Thamrin -> Tugu Tani X=+155, Z=-165)
    this.addLinearStrip(-185, -185, 0, -165, 20, 0.04, boulevardMat);
    this.addLinearStrip(0, -165, 155, -165, 22, 0.04, boulevardMat);
    // Jl. Kwitang Raya (Dari Tugu Tani ke Timur menuju Senen)
    this.addLinearStrip(155, -165, 340, -165, 22, 0.04, boulevardMat);

    // Jl. K.H. Wahid Hasyim (Barat-Timur lurus memotong Sarinah Z=-105, Sabang, hingga Gondangdia)
    this.addLinearStrip(-155, -105, 195, -105, 20, 0.04, boulevardMat);

    // Jl. H. Agus Salim / Jl. Sabang (Paralel Utara-Selatan di sebelah Timur Thamrin, X=+48)
    this.addLinearStrip(48, -215, 48, -45, 14, 0.04, localStreetMat);
    // Jl. Jaksa (Paralel di X=+82 antara Kebon Sirih & Wahid Hasyim)
    this.addLinearStrip(82, -165, 82, -105, 11, 0.04, localStreetMat);

    // Jalan sekitar Istiqlal, Katedral & Lapangan Banteng
    this.addLinearStrip(85, -425, 295, -455, 18, 0.04, localStreetMat);
    this.addLinearStrip(195, -455, 245, -340, 16, 0.04, localStreetMat);

    // =========================================================================
    // 5. BOULEVARD DIAGONAL GARDEN CITY MENTENG & SEGITIGA EMAS TIMUR (RASUNA SAID)
    // =========================================================================
    // Jl. Imam Bonjol: Memancar diagonal Tenggara (134° lalu 99°) dari Bundaran HI (0,0) ke Taman Suropati (135, 52)
    this.addLinearStrip(0, 0, 75, 42, 20, 0.05, boulevardMat);
    this.addLinearStrip(75, 42, 135, 52, 20, 0.05, boulevardMat);
    // Jl. Pangeran Diponegoro: Lanjut dari Taman Suropati (135, 52) ke Timur menuju Cikini / Salemba (340, 82)
    this.addLinearStrip(135, 52, 340, 82, 22, 0.05, boulevardMat);

    // Jl. Teuku Umar: Dari Taman Suropati (135, 52) menyerong NNE ke Tugu Tani (155, -165)
    this.addLinearStrip(135, 52, 155, -165, 18, 0.05, boulevardMat);

    // Jl. HOS Cokroaminoto (Menteng) -> menyeberangi Kanal -> Jl. H.R. Rasuna Said (Kuningan)
    this.addLinearStrip(95, -105, 110, 110, 22, 0.05, boulevardMat);
    this.addLinearStrip(110, 110, 175, 420, 30, 0.05, boulevardMat);

    // =========================================================================
    // 6. KORIDOR BARAT (TANAH ABANG / KH MAS MANSYUR) & FLYOVER PROF. DR. SATRIO
    // =========================================================================
    // Jl. Fachrudin -> Jl. K.H. Mas Mansyur (Barat Thamrin X=-155 menuju Karet X=-115, Z=+210)
    this.addLinearStrip(-155, -220, -145, 45, 22, 0.04, boulevardMat);
    this.addLinearStrip(-145, 45, -115, 215, 22, 0.04, boulevardMat);

    // Jl. Prof. Dr. Satrio (Casablanca) & Flyover Karet melintasi Sudirman menuju Mega Kuningan
    this.addLinearStrip(-115, 215, 185, 255, 24, 0.05, boulevardMat);
    const satrioFlyover = new THREE.Mesh(
      new THREE.BoxGeometry(165, 1.4, 12),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 })
    );
    satrioFlyover.position.set(-15, 6.5, 228);
    satrioFlyover.rotation.y = -0.13;
    satrioFlyover.castShadow = true;
    this.proceduralGroup.add(satrioFlyover);

    // =========================================================================
    // 7. POROS JL. GATOT SUBROTO & TOL DALAM KOTA (NW-SE MEMOTONG SEMANGGI)
    //    Tegak lurus dengan Sudirman diagonal di Simpang Susun Semanggi (-125, 310)
    // =========================================================================
    this.addLinearStrip(-380, 195, 290, 495, 42, 0.06, boulevardMat);

    // Median Kuning Jalan Tol Dalam Kota sepanjang Gatot Subroto
    const dxG = 290 - (-380);
    const dzG = 495 - 195;
    const lenG = Math.sqrt(dxG * dxG + dzG * dzG);
    const tollMedian = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.9, lenG),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b })
    );
    tollMedian.position.set(-45, 0.45, 345);
    tollMedian.rotation.y = Math.atan2(dxG, dzG);
    this.proceduralGroup.add(tollMedian);

    // Lampu Jalan PJU sepanjang Thamrin & Sudirman
    for (let z = -205; z <= 85; z += 40) {
      if (Math.abs(z) < 28) continue;
      this.createStreetLamp(-22, z, true);
      this.createStreetLamp(22, z, false);
    }
  }

  /**
   * Jalur Kereta Api Layang (Elevated Railway Viaduct):
   * Membentang dari Utara (Juanda) -> Stasiun Gambir (+98, -305) -> Stasiun Gondangdia (+145, -105)
   * -> Stasiun Cikini (+195, +65) -> Manggarai (+255, +185)
   */
  buildElevatedRailway() {
    const viaductMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.65 });
    const railTrackMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.7 });

    // Points along the eastern elevated railway line
    const points = [
      [72, -465],
      [98, -305], // Stasiun Gambir
      [142, -105], // Stasiun Gondangdia (crossing Wahid Hasyim)
      [195, 65],   // Stasiun Cikini (crossing Diponegoro)
      [255, 195]   // Menuju Manggarai
    ];

    for (let i = 0; i < points.length - 1; i++) {
      const [x1, z1] = points[i];
      const [x2, z2] = points[i + 1];
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.sqrt(dx * dx + dz * dz);
      const angle = Math.atan2(dx, dz);

      const deck = new THREE.Mesh(new THREE.BoxGeometry(7.5, 1.8, len), viaductMat);
      deck.position.set((x1 + x2) / 2, 9.5, (z1 + z2) / 2);
      deck.rotation.y = angle;
      deck.castShadow = true;
      this.proceduralGroup.add(deck);

      const track = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.3, len), railTrackMat);
      track.position.set((x1 + x2) / 2, 10.55, (z1 + z2) / 2);
      track.rotation.y = angle;
      this.proceduralGroup.add(track);
    }

    // Stasiun Gondangdia & Stasiun Cikini elevated station roofs
    [
      { x: 142, z: -105, rot: 0.22 },
      { x: 195, z: 65, rot: 0.30 }
    ].forEach((st) => {
      const stRoof = new THREE.Mesh(
        new THREE.BoxGeometry(13, 3.5, 42),
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
      "bundaran-senayan": () => LandmarkModels.createBundaranSenayan()
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
        emissiveIntensity: 0.22,
        roughness: 0.25,
        metalness: 0.75
      });
      this.nightMaterials.push(mat);
      return mat;
    });

    // 1. Koridor Lurus Jl. M.H. Thamrin (Z = -195 s/d Z = +75)
    for (let i = 0; i < 24; i++) {
      const isWest = i % 2 === 0;
      const x = isWest ? -(36 + (i % 3) * 18) : (36 + (i % 3) * 18);
      const z = -195 + i * 11.5;

      if (this.isNearLandmark(x, z, 34)) continue;
      const h = 48 + ((i * 19) % 85);
      const mat = sharedMaterials[i % sharedMaterials.length];
      this.spawnContextualBuilding(x, z, 18, h, 18, 0, mat, i, "Koridor Jl. M.H. Thamrin, Jakarta Pusat");
    }

    // 2. Koridor Diagonal 23° SSW Jl. Jenderal Sudirman (Z = +115 s/d Z = +455)
    for (let i = 0; i < 36; i++) {
      const t = i / 35;
      const zCenter = 115 + t * 340;
      // Spine center shifts SW along X = -(zCenter - 90) * 0.42
      const xCenter = -(zCenter - 90) * 0.42;
      const isWest = i % 2 === 0;
      const offset = isWest ? -(38 + (i % 3) * 18) : (38 + (i % 3) * 18);
      const x = xCenter + offset;
      const z = zCenter;

      if (this.isNearLandmark(x, z, 38)) continue;
      const h = 58 + ((i * 23) % 98);
      const mat = sharedMaterials[(i + 1) % sharedMaterials.length];
      this.spawnContextualBuilding(x, z, 20, h, 20, -0.40, mat, 30 + i, "Koridor Diagonal Jl. Jenderal Sudirman");
    }

    // 3. Kawasan Cagar Budaya Menteng & Cikini (X = +68 s/d +260, Z = -90 s/d +95)
    const mentengWallMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.65 });
    const mentengRoofMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.6 });

    for (let mx = 72; mx <= 255; mx += 26) {
      for (let mz = -85; mz <= 85; mz += 26) {
        if (this.isNearLandmark(mx, mz, 36)) continue;
        if (Math.abs(mx - 165) < 14) continue; // Rel kereta layang Gondangdia-Cikini

        const w = 11 + (mx % 5);
        const d = 11 + (mz % 5);
        const h = 6.5 + ((mx + Math.abs(mz)) % 8);

        const house = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mentengWallMat);
        house.position.set(mx, h / 2, mz);
        house.castShadow = true;
        this.proceduralGroup.add(house);

        const roof = new THREE.Mesh(new THREE.ConeGeometry(w * 0.78, 4.2, 4), mentengRoofMat);
        roof.rotation.y = Math.PI / 4;
        roof.position.set(mx, h + 2.1, mz);
        this.proceduralGroup.add(roof);
      }
    }

    // 4. Kawasan Segitiga Emas Kuningan & Rasuna Said (X = +40 s/d +260, Z = +140 s/d +380)
    for (let i = 0; i < 28; i++) {
      const x = 45 + (i % 6) * 36;
      const z = 145 + Math.floor(i / 6) * 48;
      if (this.isNearLandmark(x, z, 42)) continue;

      const h = 52 + ((i * 21) % 88);
      const mat = sharedMaterials[(i + 2) % sharedMaterials.length];
      this.spawnContextualBuilding(x, z, 20, h, 20, 0, mat, 100 + i, "Segitiga Emas Kuningan & Rasuna Said");
    }

    // 5. Kawasan Tanah Abang, Kebon Kacang & Medan Merdeka Barat (X = -85 s/d -210, Z = -390 s/d +160)
    for (let i = 0; i < 30; i++) {
      const x = -(92 + (i % 4) * 32);
      const z = -370 + Math.floor(i / 4) * 68;
      if (this.isNearLandmark(x, z, 38)) continue;

      const h = 28 + ((i * 17) % 58);
      const mat = sharedMaterials[(i + 3) % sharedMaterials.length];
      this.spawnContextualBuilding(x, z, 18, h, 18, 0, mat, 200 + i, "Kawasan Tanah Abang & Medan Merdeka Barat");
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

  spawnContextualBuilding(x, z, w, h, d, rotY, mat, index, areaName) {
    const bldg = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    bldg.position.set(x, h / 2, z);
    bldg.rotation.y = rotY;
    bldg.castShadow = true;
    bldg.receiveShadow = true;

    bldg.userData = {
      landmarkData: {
        id: `bldg-${index}`,
        name: `Gedung Koridor Jakarta #${index + 1}`,
        category: "Gedung Komersial & Perkantoran",
        tagline: areaName,
        height: `${Math.round(h * 1.9)} meter (${Math.floor(h / 3.5)} lantai)`,
        year: `${1996 + (index % 28)}`,
        architect: "Arsitektur Metropolitan DKI Jakarta",
        location: areaName,
        description: `Gedung bertingkat bagian dari tata ruang kawasan ${areaName} yang mengacu pada kepadatan blok kota Jakarta Pusat & Selatan.`,
        facts: [
          "Terintegrasi dengan jaringan jalan arteri dan pedestrian Jakarta.",
          "Menampilkan pencahayaan fasad kaca pada mode malam hari."
        ]
      },
      isClickable: true
    };

    this.interactiveObjects.push(bldg);
    this.proceduralGroup.add(bldg);
  }

  /**
   * Lush tropical vegetation along Thamrin, Sudirman, Monas, and Menteng
   */
  buildStreetVegetation() {
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.75 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });

    // Trees along straight Thamrin spine
    for (let z = -200; z <= 75; z += 24) {
      if (Math.abs(z) < 28) continue;
      this.createTree(-24, z, foliageMat, trunkMat);
      this.createTree(24, z, foliageMat, trunkMat);
    }

    // Trees along diagonal 23° SSW Sudirman spine
    for (let z = 115; z <= 460; z += 26) {
      if (Math.abs(z - 310) < 42) continue; // Semanggi
      const xCenter = -(z - 90) * 0.42;
      this.createTree(xCenter - 24, z, foliageMat, trunkMat);
      this.createTree(xCenter + 24, z, foliageMat, trunkMat);
    }

    // Trees around Monas Park & Taman Rusa (SE Quadrant of Monas)
    for (let x = -75; x <= 75; x += 22) {
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
   * Multi-Corridor Animated Traffic following the real road angles:
   * - Straight Thamrin Corridor (North-South)
   * - Diagonal 23° SSW Sudirman Corridor (Dukuh Atas -> Semanggi -> Senayan)
   * - Diagonal NW-SE Gatot Subroto Toll Road
   */
  buildTraffic() {
    const colors = [0x0284c7, 0xf8fafc, 0x0f172a, 0x94a3b8, 0xef4444, 0xf59e0b];

    const routes = [
      // Route 0: Straight Thamrin (Patung Kuda to Dukuh Atas)
      { x1: -8, z1: -210, x2: -8, z2: 88, count: 14 },
      { x1: 8, z1: 88, x2: 8, z2: -210, count: 14 },
      // Route 1: Diagonal 23° SSW Sudirman (Dukuh Atas to Bundaran Senayan)
      { x1: -8, z1: 92, x2: -200, z2: 475, count: 16 },
      { x1: -182, z1: 475, x2: 8, z2: 92, count: 16 },
      // Route 2: Gatot Subroto NW-SE Toll Corridor
      { x1: -360, z1: 202, x2: 275, z2: 488, count: 12 },
      { x1: 275, z1: 498, x2: -360, z2: 212, count: 12 }
    ];

    let idx = 0;
    routes.forEach((route) => {
      const dx = route.x2 - route.x1;
      const dz = route.z2 - route.z1;
      const angle = Math.atan2(dx, dz);

      for (let j = 0; j < route.count; j++) {
        const isBus = idx % 6 === 0;
        const vehicle = new THREE.Group();

        const bodyGeo = isBus
          ? new THREE.BoxGeometry(2.6, 2.6, 9.2)
          : new THREE.BoxGeometry(2.0, 1.4, 4.2);
        const bodyMat = new THREE.MeshStandardMaterial({
          color: isBus ? 0x0284c7 : colors[idx % colors.length],
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

        const t = j / route.count;
        vehicle.position.set(route.x1 + dx * t, 0, route.z1 + dz * t);
        vehicle.rotation.y = angle;

        this.vehicles.push({
          mesh: vehicle,
          x1: route.x1,
          z1: route.z1,
          dx,
          dz,
          progress: t,
          speed: (isBus ? 0.055 : 0.085) + (idx % 4) * 0.012
        });

        this.proceduralGroup.add(vehicle);
        idx++;
      }
    });
  }

  updateTraffic(delta) {
    this.vehicles.forEach((v) => {
      v.progress += v.speed * delta;
      if (v.progress > 1.0) v.progress -= 1.0;
      v.mesh.position.x = v.x1 + v.dx * v.progress;
      v.mesh.position.z = v.z1 + v.dz * v.progress;
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
