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
    const outerSwGeo = new THREE.RingGeometry(outerR, outerR + 4.0, 64);
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

  buildRoadNetwork() {
    const roadTex = TextureGenerator.createRoadTexture();
    const primaryRoadMat = new THREE.MeshStandardMaterial({
      map: roadTex,
      roughness: 0.75,
      metalness: 0.15
    });
    const roundaboutAsphaltMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.78,
      metalness: 0.12
    });
    const boulevardMat = new THREE.MeshStandardMaterial({
      color: 0x243247,
      roughness: 0.82
    });
    const localStreetMat = new THREE.MeshStandardMaterial({
      color: 0x2d3d54,
      roughness: 0.88
    });
    const swMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createSidewalkTexture(),
      roughness: 0.8
    });

    // =========================================================================
    // 1. BUNDARAN HI (0, 0) & POROS LURUS JL. M.H. THAMRIN
    //    Kolam Air Mancur radius 13.5 -> Jalan Bundaran radius 14.0 s/d 23.0 -> Trotoar luar s/d 26.0
    //    Seluruh gedung keliling (Plaza Indonesia, Kempinski, Mandarin Oriental, Wisma Nusantara) berada di radius >= 28!
    // =========================================================================
    this.addRoundaboutRing(0, 0, 14.0, 23.0, roundaboutAsphaltMat, swMat);
    this.addRoundaboutRing(0, -215, 14.5, 22.5, roundaboutAsphaltMat, swMat);
    this.addRoundaboutRing(-190, 475, 14.5, 23.5, roundaboutAsphaltMat, swMat);

    // Segmen Utara Jl. M.H. Thamrin: dari selatan Bundaran Patung Kuda (Z=-192) ke utara Bundaran HI (Z=-22)
    this.addLinearStrip(0, -192, 0, -22, 26, 0.06, primaryRoadMat);
    this.addLinearStrip(-15.5, -192, -15.5, -22, 4.0, 0.14, swMat);
    this.addLinearStrip(15.5, -192, 15.5, -22, 4.0, 0.14, swMat);

    // Segmen Selatan Jl. M.H. Thamrin: dari selatan Bundaran HI (Z=+22) ke Jembatan Dukuh Atas (Z=+90)
    this.addLinearStrip(0, 22, 0, 90, 26, 0.06, primaryRoadMat);
    this.addLinearStrip(-15.5, 22, -15.5, 90, 4.0, 0.14, swMat);
    this.addLinearStrip(15.5, 22, 15.5, 90, 4.0, 0.14, swMat);

    // =========================================================================
    // 2. POROS DIAGONAL 23° SSW JL. JENDERAL SUDIRMAN
    //    Dari Jembatan Dukuh Atas (0, 90) -> Semanggi (-125, 310) -> berhenti di tepi Bundaran Senayan (-180, 454)
    // =========================================================================
    this.addLinearStrip(0, 90, -180, 454, 26, 0.06, primaryRoadMat);
    this.addLinearStrip(-15.5, 96, -195, 459, 4.0, 0.14, swMat);
    this.addLinearStrip(15.5, 84, -165, 449, 4.0, 0.14, swMat);

    // =========================================================================
    // 3. LINGKAR TRAPESIUM MEDAN MERDEKA (MONAS) & JL. MAJAPAHIT (HARMONI)
    //    Mengelilingi Taman Monas (TIDAK menembus tengah Monas!)
    // =========================================================================
    // Jl. Medan Merdeka Barat (Sisi Barat Monas X=-95, lalu menyambung ke Bundaran Patung Kuda)
    this.addLinearStrip(-95, -425, -95, -215, 22, 0.05, boulevardMat);
    this.addLinearStrip(-95, -215, -22, -215, 22, 0.05, boulevardMat);
    // Jl. Majapahit dari Sudut Barat Laut Monas menuju Simpang Harmoni (-145, -525)
    this.addLinearStrip(-95, -425, -145, -525, 22, 0.05, boulevardMat);
    // Jl. Medan Merdeka Utara (Depan Istana Merdeka)
    this.addLinearStrip(-95, -425, 85, -425, 20, 0.05, boulevardMat);
    // Jl. Medan Merdeka Selatan (Dari tepi timur Bundaran Patung Kuda X=+22 ke X=+130)
    this.addLinearStrip(22, -215, 130, -215, 22, 0.05, boulevardMat);
    // Jl. Medan Merdeka Timur (Miring 167° SSE dari X=+85 di Utara ke X=+130 di Selatan)
    this.addLinearStrip(85, -425, 130, -215, 20, 0.05, boulevardMat);

    // =========================================================================
    // 4. JARINGAN JALAN JAKARTA PUSAT (KEBON SIRIH, WAHID HASYIM, SABANG, KEBON KACANG)
    // =========================================================================
    // Jl. Kebon Sirih (Barat-Timur dari Tanah Abang -> Thamrin -> Tugu Tani X=+155, Z=-165)
    this.addLinearStrip(-185, -185, 0, -165, 16, 0.045, boulevardMat);
    this.addLinearStrip(0, -165, 155, -165, 18, 0.045, boulevardMat);
    // Jl. Kwitang Raya (Dari Tugu Tani ke Timur menuju Senen)
    this.addLinearStrip(155, -165, 340, -165, 18, 0.045, boulevardMat);

    // Jl. K.H. Wahid Hasyim (Barat-Timur lurus memotong Sarinah Z=-105, Sabang, hingga Gondangdia)
    this.addLinearStrip(-185, -105, 195, -105, 16, 0.045, boulevardMat);

    // Jl. Kebon Kacang Raya (Dari tepi barat Bundaran HI X=-22 menuju Grand Indonesia & Tanah Abang)
    this.addLinearStrip(-22, 0, -165, 0, 14, 0.045, boulevardMat);

    // Jl. H. Agus Salim / Jl. Sabang (Paralel Utara-Selatan di sebelah Timur Thamrin, X=+48)
    this.addLinearStrip(48, -215, 48, -30, 12, 0.045, localStreetMat);
    // Jl. Jaksa (Paralel di X=+82 antara Kebon Sirih & Wahid Hasyim)
    this.addLinearStrip(82, -165, 82, -105, 10, 0.045, localStreetMat);

    // Jalan sekitar Istiqlal, Katedral & Lapangan Banteng
    this.addLinearStrip(85, -425, 295, -455, 15, 0.045, localStreetMat);
    this.addLinearStrip(195, -455, 245, -340, 14, 0.045, localStreetMat);

    // =========================================================================
    // 5. BOULEVARD DIAGONAL GARDEN CITY MENTENG & SEGITIGA EMAS TIMUR (RASUNA SAID)
    // =========================================================================
    // Jl. Imam Bonjol: Mulai dari tepi luar tenggara Bundaran HI (18, 14) -> (75, 42) -> Taman Suropati (135, 52)
    this.addLinearStrip(18, 14, 75, 42, 16, 0.05, boulevardMat);
    this.addLinearStrip(75, 42, 135, 52, 16, 0.05, boulevardMat);
    // Jl. Sutan Syahrir: Mulai dari tepi timur Bundaran HI (22, -6) menuju Menteng
    this.addLinearStrip(22, -6, 95, -42, 13, 0.045, localStreetMat);
    // Jl. Pangeran Diponegoro: Lanjut dari Taman Suropati (135, 52) ke Timur menuju Cikini / Salemba (340, 82)
    this.addLinearStrip(135, 52, 340, 82, 20, 0.05, boulevardMat);

    // Jl. Teuku Umar: Dari Taman Suropati (135, 52) menyerong NNE ke Tugu Tani (155, -165)
    this.addLinearStrip(135, 52, 155, -165, 16, 0.05, boulevardMat);

    // Jl. HOS Cokroaminoto (Menteng) -> menyeberangi Kanal -> Jl. H.R. Rasuna Said (Kuningan)
    this.addLinearStrip(95, -105, 110, 110, 20, 0.05, boulevardMat);
    this.addLinearStrip(110, 110, 175, 420, 26, 0.05, boulevardMat);

    // =========================================================================
    // 6. KORIDOR BARAT (TANAH ABANG / KH MAS MANSYUR) & FLYOVER PROF. DR. SATRIO
    // =========================================================================
    // Jl. Fachrudin -> Jl. K.H. Mas Mansyur (Barat Thamrin X=-155 menuju Karet X=-115, Z=+210)
    this.addLinearStrip(-155, -220, -145, 45, 20, 0.045, boulevardMat);
    this.addLinearStrip(-145, 45, -115, 215, 20, 0.045, boulevardMat);

    // Jl. Prof. Dr. Satrio (Casablanca) & Flyover Karet melintasi Sudirman menuju Mega Kuningan
    this.addLinearStrip(-115, 215, 185, 255, 22, 0.05, boulevardMat);
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
    // =========================================================================
    this.addLinearStrip(-380, 195, 290, 495, 36, 0.06, boulevardMat);

    // Median Kuning Jalan Tol Dalam Kota sepanjang Gatot Subroto
    const dxG = 290 - (-380);
    const dzG = 495 - 195;
    const lenG = Math.sqrt(dxG * dxG + dzG * dzG);
    const tollMedian = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 0.9, lenG),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b })
    );
    tollMedian.position.set(-45, 0.45, 345);
    tollMedian.rotation.y = Math.atan2(dxG, dzG);
    this.proceduralGroup.add(tollMedian);

    // Lampu Jalan PJU sepanjang Thamrin (di luar area Bundaran HI)
    for (let z = -185; z <= 85; z += 38) {
      if (Math.abs(z) < 42) continue;
      this.createStreetLamp(-20, z, true);
      this.createStreetLamp(20, z, false);
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

    const lowRiseMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.65,
      metalness: 0.12
    });
    const midRiseMat = new THREE.MeshStandardMaterial({
      color: 0xcbd5e1,
      roughness: 0.45,
      metalness: 0.32
    });

    fetch('./src/data/jakarta_osm.json')
      .then((res) => res.json())
      .then((osm) => {
        this.renderOSMLayers(osm, sharedMaterials, midRiseMat, lowRiseMat);
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

  renderOSMLayers(osm, sharedMaterials, midRiseMat, lowRiseMat) {
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
        (w) => (w.t === 'canal' ? 10.0 : 8.0),
        () => 0.035,
        true
      );
      if (riverGeo) {
        const riverMesh = new THREE.Mesh(riverGeo, waterMat);
        this.proceduralGroup.add(riverMesh);
      }
    }

    // 3. Real OpenStreetMap Jakarta Street Network (All road tiers clearly visible across the city)
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
        color: 0x26354a,
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

      // Sidewalk/curb casing beneath arterial OSM roads
      const arterialCurbGeo = this.buildMergedRibbonGeometry(
        arterialWays,
        (r) => (r.t === 'motorway' || r.t === 'trunk' ? 11.5 : 9.2),
        (r) => (r.l ? 0.33 : 0.048),
        true
      );
      if (arterialCurbGeo) {
        this.proceduralGroup.add(new THREE.Mesh(arterialCurbGeo, curbMat));
      }

      const arterialGeo = this.buildMergedRibbonGeometry(
        arterialWays,
        (r) => (r.t === 'motorway' || r.t === 'trunk' ? 9.5 : 7.4),
        (r) => (r.l ? 0.35 : 0.055),
        true
      );
      if (arterialGeo) {
        const mesh = new THREE.Mesh(arterialGeo, arterialMat);
        mesh.receiveShadow = true;
        this.proceduralGroup.add(mesh);
      }

      const localGeo = this.buildMergedRibbonGeometry(
        localWays,
        (r) => (r.t === 'secondary' ? 6.0 : r.t === 'tertiary' ? 4.5 : 3.2),
        () => 0.05,
        true
      );
      if (localGeo) {
        const mesh = new THREE.Mesh(localGeo, localRoadMat);
        mesh.receiveShadow = true;
        this.proceduralGroup.add(mesh);
      }
    }

    // 4. Real OpenStreetMap Railways (KRL, MRT, LRT, KA Antarkota)
    if (osm.railways && osm.railways.length) {
      const railMat = new THREE.MeshStandardMaterial({
        color: 0x64748b,
        roughness: 0.6,
        metalness: 0.4,
        side: THREE.DoubleSide
      });
      const railGeo = this.buildMergedRibbonGeometry(
        osm.railways,
        () => 2.8,
        (r) => (r.b ? 0.42 : 0.08),
        true
      );
      if (railGeo) {
        this.proceduralGroup.add(new THREE.Mesh(railGeo, railMat));
      }
    }

    // 5. Real OpenStreetMap 3D Building Footprints (1,641 authentic Jakarta buildings)
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

        let mat;
        if (h >= 24) {
          mat = sharedMaterials[idx % sharedMaterials.length];
        } else if (h >= 12) {
          mat = midRiseMat;
        } else {
          mat = lowRiseMat;
        }

        const mesh = new THREE.Mesh(geo, mat);
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
  }

  /**
   * Lush tropical vegetation along Thamrin, Sudirman, Monas, and Menteng
   */
  buildStreetVegetation() {
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.75 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });

    // Trees along straight Thamrin spine (outside Bundaran HI roundabout)
    for (let z = -188; z <= 82; z += 24) {
      if (Math.abs(z) < 29) continue;
      this.createTree(-16.5, z, foliageMat, trunkMat);
      this.createTree(16.5, z, foliageMat, trunkMat);
    }

    // Trees along diagonal 23° SSW Sudirman spine
    for (let z = 115; z <= 445; z += 26) {
      if (Math.abs(z - 310) < 42) continue; // Semanggi
      const xCenter = -(z - 90) * 0.42;
      this.createTree(xCenter - 17, z, foliageMat, trunkMat);
      this.createTree(xCenter + 17, z, foliageMat, trunkMat);
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
   * Multi-Corridor Animated Traffic following the real road angles and circling Bundaran HI:
   * - North Thamrin (Patung Kuda to North Bundaran HI)
   * - Circular Bundaran HI Roundabout (vehicles orbiting the fountain pool)
   * - South Thamrin (South Bundaran HI to Dukuh Atas)
   * - Diagonal 23° SSW Sudirman Corridor (Dukuh Atas -> Semanggi -> Bundaran Senayan)
   * - Diagonal NW-SE Gatot Subroto Toll Road
   */
  buildTraffic() {
    const colors = [0x0284c7, 0xf8fafc, 0x0f172a, 0x94a3b8, 0xef4444, 0xf59e0b];

    const routes = [
      // Route 0A: North Thamrin (Patung Kuda Z=-188 to North Bundaran HI Z=-25)
      { x1: -6.5, z1: -188, x2: -6.5, z2: -25, count: 10 },
      { x1: 6.5, z1: -25, x2: 6.5, z2: -188, count: 10 },
      // Route 0B: South Thamrin (South Bundaran HI Z=+25 to Dukuh Atas Z=+88)
      { x1: -6.5, z1: 25, x2: -6.5, z2: 88, count: 5 },
      { x1: 6.5, z1: 88, x2: 6.5, z2: 25, count: 5 },
      // Route 1: Diagonal 23° SSW Sudirman (Dukuh Atas to Bundaran Senayan rim)
      { x1: -6.5, z1: 92, x2: -184, z2: 448, count: 16 },
      { x1: -172, z1: 448, x2: 6.5, z2: 92, count: 16 },
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

    // Circular Roundabout Traffic orbiting Bundaran HI fountain (radius 16.5 & 20.2)
    [16.5, 20.2].forEach((radius, rIdx) => {
      const count = 7;
      for (let k = 0; k < count; k++) {
        const isBus = k === 0 && rIdx === 0;
        const vehicle = this.createVehicleMesh(
          isBus,
          isBus ? 0x0284c7 : colors[(k + rIdx) % colors.length]
        );
        const angle = (k / count) * Math.PI * 2;
        vehicle.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
        vehicle.rotation.y = -angle;

        this.vehicles.push({
          mesh: vehicle,
          isCircular: true,
          cx: 0,
          cz: 0,
          radius,
          angle,
          angularSpeed: 0.45 + (rIdx * 0.08)
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
