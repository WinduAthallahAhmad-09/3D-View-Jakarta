import * as THREE from 'three';
import { TextureGenerator } from './TextureGenerator.js';

/**
 * Creates geometrically accurate and stylistically faithful 3D models
 * of Jakarta's iconic landmarks.
 */
export class LandmarkModels {
  /**
   * Monas (Monumen Nasional)
   * Detailed 3D architecture: Base courtyard, museum plinth cup, obelisk shaft,
   * observation deck, and the 50kg gold flame with dynamic point light.
   */
  static createMonas() {
    const group = new THREE.Group();
    group.name = "landmark-monas";

    const marbleMat = new THREE.MeshStandardMaterial({
      color: 0xf3f4f6,
      roughness: 0.35,
      metalness: 0.1,
      map: TextureGenerator.createMarbleTexture()
    });

    const darkGraniteMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.6,
      metalness: 0.1
    });

    // 1. Plaza dasar (Taman Medan Merdeka)
    const basePlazaGeo = new THREE.BoxGeometry(70, 1.5, 70);
    const basePlaza = new THREE.Mesh(basePlazaGeo, darkGraniteMat);
    basePlaza.position.y = 0.75;
    basePlaza.receiveShadow = true;
    group.add(basePlaza);

    // 2. Pelataran Cawan Bawah (Museum Sejarah) 45x45m
    const lowerCupGeo = new THREE.BoxGeometry(45, 8, 45);
    const lowerCup = new THREE.Mesh(lowerCupGeo, marbleMat);
    lowerCup.position.y = 5.5;
    lowerCup.castShadow = true;
    lowerCup.receiveShadow = true;
    group.add(lowerCup);

    // Dinding ornamen/relief cawan bawah
    const reliefGeo = new THREE.BoxGeometry(46, 2, 46);
    const reliefMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4, metalness: 0.5 });
    const relief = new THREE.Mesh(reliefGeo, reliefMat);
    relief.position.y = 7;
    group.add(relief);

    // 3. Obelisk Tugu Monas (tiang ramping menjulang tinggi)
    // Tapering prism
    const shaftGeo = new THREE.CylinderGeometry(2.4, 3.8, 110, 4, 1);
    // Putar 45 derajat agar bidang datar sejajar mata angin
    shaftGeo.rotateY(Math.PI / 4);
    const shaft = new THREE.Mesh(shaftGeo, marbleMat);
    shaft.position.y = 9.5 + 55;
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    group.add(shaft);

    // 4. Pelataran Puncak (Cawan Atas / Observation Deck)
    const upperCupGeo = new THREE.CylinderGeometry(6, 3, 5, 4, 1);
    upperCupGeo.rotateY(Math.PI / 4);
    const upperCup = new THREE.Mesh(upperCupGeo, marbleMat);
    upperCup.position.y = 9.5 + 110 + 2.5;
    upperCup.castShadow = true;
    group.add(upperCup);

    // Pagar pengaman cawan atas
    const deckGeo = new THREE.BoxGeometry(9, 1.2, 9);
    const deck = new THREE.Mesh(deckGeo, marbleMat);
    deck.position.y = 9.5 + 110 + 5.6;
    group.add(deck);

    // 5. Lidah Api Kemerdekaan (Emas Murni 50 kg)
    // Dibuat dari kurva api meliuk berlapis emas berkilau
    const flameMat = new THREE.MeshStandardMaterial({
      color: 0xffb703,
      emissive: 0xfb8500,
      emissiveIntensity: 0.8,
      roughness: 0.15,
      metalness: 0.95
    });

    // Struktur api berlapis kerucut dinamis
    const flameCoreGeo = new THREE.ConeGeometry(2.2, 14, 16);
    const flameCore = new THREE.Mesh(flameCoreGeo, flameMat);
    flameCore.position.y = 9.5 + 110 + 6.2 + 7;
    flameCore.castShadow = true;
    group.add(flameCore);

    // Lapisan api meliuk luar
    const flameOuterGeo = new THREE.ConeGeometry(3.0, 10, 16);
    const flameOuter = new THREE.Mesh(flameOuterGeo, flameMat);
    flameOuter.position.y = 9.5 + 110 + 6.2 + 5;
    flameOuter.rotation.z = 0.08;
    group.add(flameOuter);

    // Pucuk api meliuk
    const flameTipGeo = new THREE.ConeGeometry(1.2, 7, 12);
    const flameTip = new THREE.Mesh(flameTipGeo, flameMat);
    flameTip.position.y = 9.5 + 110 + 6.2 + 12;
    flameTip.rotation.z = -0.15;
    group.add(flameTip);

    // Point Light Lidah Api (Menerangi puncak tugu di malam hari)
    const flameLight = new THREE.PointLight(0xffaa00, 2.5, 60);
    flameLight.position.y = 9.5 + 110 + 6.2 + 10;
    flameLight.castShadow = false;
    group.add(flameLight);

    // Spotlight Monas malam hari (4 penjuru menyorot ke atas obelisk)
    const spotCoords = [
      [-30, 2, -30],
      [30, 2, -30],
      [-30, 2, 30],
      [30, 2, 30]
    ];
    spotCoords.forEach(([x, y, z]) => {
      const spot = new THREE.SpotLight(0xffffff, 0, 180, Math.PI / 8, 0.4);
      spot.position.set(x, y, z);
      spot.target = shaft;
      spot.name = "monas-spotlight";
      group.add(spot);
    });

    return group;
  }

  /**
   * Bundaran Hotel Indonesia & Monumen Selamat Datang
   * Fountain basin with stepped rings + twin bronze welcoming figures + surrounding ring road.
   */
  static createBundaranHI() {
    const group = new THREE.Group();
    group.name = "landmark-bundaran-hi";

    // 1. Kolam Air Mancur Bundar Utama (Diameter 46m)
    const basinWallGeo = new THREE.CylinderGeometry(23, 23.5, 1.4, 48);
    const graniteMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.5,
      metalness: 0.2
    });
    const basinWall = new THREE.Mesh(basinWallGeo, graniteMat);
    basinWall.position.y = 0.7;
    basinWall.receiveShadow = true;
    group.add(basinWall);

    // Permukaan Air Kolam
    const waterGeo = new THREE.CylinderGeometry(22.2, 22.2, 1.2, 48);
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.88
    });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.position.y = 0.8;
    group.add(water);

    // Tingkatan semprotan air mancur (rings)
    for (let r = 6; r <= 18; r += 6) {
      const ringGeo = new THREE.TorusGeometry(r, 0.15, 8, 36);
      ringGeo.rotateX(Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.y = 1.45;
      group.add(ring);
    }

    // 2. Tiang Penopang Monumen Selamat Datang (Pilar Tinggi)
    const pillarGeo = new THREE.BoxGeometry(2.2, 20, 2.2);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.4
    });
    const pillar = new THREE.Mesh(pillarGeo, pillarMat);
    pillar.position.y = 10;
    pillar.castShadow = true;
    group.add(pillar);

    // Pelataran alas patung
    const pedestalGeo = new THREE.BoxGeometry(4.5, 1.2, 4.5);
    const pedestal = new THREE.Mesh(pedestalGeo, pillarMat);
    pedestal.position.y = 20.6;
    group.add(pedestal);

    // 3. Patung Selamat Datang (Sepasang Pemuda-Pemudi Perunggu)
    const bronzeMat = new THREE.MeshStandardMaterial({
      color: 0x78350f,
      roughness: 0.3,
      metalness: 0.85
    });

    // Figur Pria (tangan melambai ke utara)
    const maleBodyGeo = new THREE.CylinderGeometry(0.5, 0.6, 5, 8);
    const maleBody = new THREE.Mesh(maleBodyGeo, bronzeMat);
    maleBody.position.set(-0.8, 23.5, 0);
    maleBody.castShadow = true;
    group.add(maleBody);

    const maleArmGeo = new THREE.CylinderGeometry(0.18, 0.18, 3, 6);
    const maleArm = new THREE.Mesh(maleArmGeo, bronzeMat);
    maleArm.position.set(-1.4, 25.5, 0);
    maleArm.rotation.z = -Math.PI / 3;
    group.add(maleArm);

    // Figur Wanita (mengacungkan bunga)
    const femaleBodyGeo = new THREE.CylinderGeometry(0.45, 0.55, 4.7, 8);
    const femaleBody = new THREE.Mesh(femaleBodyGeo, bronzeMat);
    femaleBody.position.set(0.8, 23.35, 0);
    femaleBody.castShadow = true;
    group.add(femaleBody);

    const femaleArmGeo = new THREE.CylinderGeometry(0.16, 0.16, 2.8, 6);
    const femaleArm = new THREE.Mesh(femaleArmGeo, bronzeMat);
    femaleArm.position.set(1.3, 25.2, 0);
    femaleArm.rotation.z = Math.PI / 4;
    group.add(femaleArm);

    // Bunga di tangan (detail simbolis)
    const flowerGeo = new THREE.SphereGeometry(0.4, 8, 8);
    const flowerMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const flower = new THREE.Mesh(flowerGeo, flowerMat);
    flower.position.set(2.2, 26.2, 0);
    group.add(flower);

    // 4. Bundaran Jalan Melingkar (Roundabout Ring Road)
    const roundRoadGeo = new THREE.RingGeometry(24, 38, 48);
    roundRoadGeo.rotateX(-Math.PI / 2);
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.8
    });
    const roundRoad = new THREE.Mesh(roundRoadGeo, roadMat);
    roundRoad.position.y = 0.05;
    roundRoad.receiveShadow = true;
    group.add(roundRoad);

    // Marka jalan melingkar
    const roadLineGeo = new THREE.RingGeometry(31, 31.4, 48);
    roadLineGeo.rotateX(-Math.PI / 2);
    const roadLineMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });
    const roadLine = new THREE.Mesh(roadLineGeo, roadLineMat);
    roadLine.position.y = 0.08;
    group.add(roadLine);

    return group;
  }

  /**
   * Wisma 46 (BNI City Tower)
   * Renowned curved quill-pen/sail top spire with teal glass & white framework.
   */
  static createWisma46() {
    const group = new THREE.Group();
    group.name = "landmark-wisma-46";

    const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
      style: 'wisma-teal',
      floors: 46,
      windowsAcross: 14
    });

    const facadeMat = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      emissiveMap: emissiveTexture,
      emissive: 0x0f766e,
      emissiveIntensity: 0.25,
      roughness: 0.2,
      metalness: 0.75
    });

    const whiteBeamMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.3,
      metalness: 0.3
    });

    // 1. Badan Menara Utama
    const bodyHeight = 115;
    const bodyGeo = new THREE.BoxGeometry(22, bodyHeight, 18);
    const body = new THREE.Mesh(bodyGeo, facadeMat);
    body.position.y = bodyHeight / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);

    // Rangka arsitektur samping putih (vertical trusses)
    const leftTrussGeo = new THREE.BoxGeometry(1.5, bodyHeight, 19);
    const leftTruss = new THREE.Mesh(leftTrussGeo, whiteBeamMat);
    leftTruss.position.set(-11.2, bodyHeight / 2, 0);
    group.add(leftTruss);

    const rightTrussGeo = new THREE.BoxGeometry(1.5, bodyHeight, 19);
    const rightTruss = new THREE.Mesh(rightTrussGeo, whiteBeamMat);
    rightTruss.position.set(11.2, bodyHeight / 2, 0);
    group.add(rightTruss);

    // 2. Puncak Melengkung Ikonik Menyerupai Ujung Pena (Curved Spire)
    // Dibuat dari potongan segitiga dekonstruktivis parabolik
    const spireHeight = 45;
    const spireShape = new THREE.Shape();
    spireShape.moveTo(-11, 0);
    spireShape.lineTo(11, 0);
    spireShape.quadraticCurveTo(8, spireHeight * 0.7, 0, spireHeight);
    spireShape.quadraticCurveTo(-8, spireHeight * 0.7, -11, 0);

    const extrudeSettings = {
      depth: 16,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 2,
      bevelSize: 0.8,
      bevelThickness: 0.8
    };

    const spireGeo = new THREE.ExtrudeGeometry(spireShape, extrudeSettings);
    // Center extrusion depth
    spireGeo.translate(0, 0, -8);
    const spire = new THREE.Mesh(spireGeo, whiteBeamMat);
    spire.position.y = bodyHeight;
    spire.castShadow = true;
    group.add(spire);

    // Fasad kaca di dalam lengkungan puncak
    const spireGlassGeo = new THREE.BoxGeometry(14, spireHeight * 0.75, 14);
    const spireGlass = new THREE.Mesh(spireGlassGeo, facadeMat);
    spireGlass.position.y = bodyHeight + (spireHeight * 0.35);
    group.add(spireGlass);

    // Antena Puncak Tertinggi
    const antennaGeo = new THREE.CylinderGeometry(0.2, 0.4, 22, 8);
    const antennaMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.2 });
    const antenna = new THREE.Mesh(antennaGeo, antennaMat);
    antenna.position.y = bodyHeight + spireHeight + 11;
    group.add(antenna);

    // Lampu Merah Penerbangan (Aviation Beacon) di ujung antena
    const beaconLight = new THREE.PointLight(0xef4444, 1.8, 40);
    beaconLight.position.y = bodyHeight + spireHeight + 22;
    group.add(beaconLight);

    const beaconGeo = new THREE.SphereGeometry(0.5, 8, 8);
    const beaconMesh = new THREE.Mesh(beaconGeo, new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    beaconMesh.position.y = bodyHeight + spireHeight + 22;
    group.add(beaconMesh);

    return group;
  }

  /**
   * Menara BCA & Kompleks Grand Indonesia
   */
  static createMenaraBCA() {
    const group = new THREE.Group();
    group.name = "landmark-menara-bca";

    const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
      style: 'modern-blue',
      floors: 56,
      windowsAcross: 16
    });

    const facadeMat = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      emissiveMap: emissiveTexture,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
      roughness: 0.15,
      metalness: 0.85
    });

    // Menara Utama
    const h = 135;
    const towerGeo = new THREE.BoxGeometry(26, h, 22);
    const tower = new THREE.Mesh(towerGeo, facadeMat);
    tower.position.y = h / 2;
    tower.castShadow = true;
    tower.receiveShadow = true;
    group.add(tower);

    // Crown / Rooftop Skye Restaurant
    const crownGeo = new THREE.BoxGeometry(28, 6, 24);
    const crownMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      roughness: 0.2,
      metalness: 0.8
    });
    const crown = new THREE.Mesh(crownGeo, crownMat);
    crown.position.y = h + 3;
    group.add(crown);

    // Helipad di atap Menara BCA
    const heliGeo = new THREE.CylinderGeometry(7, 7, 0.4, 24);
    const heliMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 });
    const helipad = new THREE.Mesh(heliGeo, heliMat);
    helipad.position.y = h + 6.3;
    group.add(helipad);

    // Podium Mall Grand Indonesia di dasar
    const mallGeo = new THREE.BoxGeometry(45, 18, 38);
    const mallMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.5,
      metalness: 0.3
    });
    const mall = new THREE.Mesh(mallGeo, mallMat);
    mall.position.set(0, 9, 8);
    mall.castShadow = true;
    mall.receiveShadow = true;
    group.add(mall);

    return group;
  }

  /**
   * Gelora Bung Karno (GBK Senayan)
   * Iconic circular stadium with giant ring roof (temu gelang).
   */
  static createGBK() {
    const group = new THREE.Group();
    group.name = "landmark-gbk";

    // Lapangan rumput tengah
    const fieldGeo = new THREE.CylinderGeometry(25, 25, 0.5, 32);
    const fieldMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8 });
    const field = new THREE.Mesh(fieldGeo, fieldMat);
    field.position.y = 0.3;
    group.add(field);

    // Garis lapangan sepak bola
    const centerCircleGeo = new THREE.RingGeometry(4, 4.3, 24);
    centerCircleGeo.rotateX(-Math.PI / 2);
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const centerCircle = new THREE.Mesh(centerCircleGeo, lineMat);
    centerCircle.position.y = 0.56;
    group.add(centerCircle);

    // Tribun Penonton Bertingkat (Oval Stadium Bowl)
    const bowlGeo = new THREE.CylinderGeometry(48, 30, 14, 36, 1, true);
    const bowlMat = new THREE.MeshStandardMaterial({
      color: 0xef4444, // Kursi merah-putih khas GBK
      side: THREE.DoubleSide,
      roughness: 0.6
    });
    const bowl = new THREE.Mesh(bowlGeo, bowlMat);
    bowl.position.y = 7;
    group.add(bowl);

    // Atap Temu Gelang Baja Monumental (Ring Roof)
    const roofRingGeo = new THREE.RingGeometry(28, 54, 48);
    roofRingGeo.rotateX(-Math.PI / 2);
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.7,
      roughness: 0.3,
      side: THREE.DoubleSide
    });
    const roof = new THREE.Mesh(roofRingGeo, roofMat);
    roof.position.y = 15;
    roof.castShadow = true;
    group.add(roof);

    // Tiang-tiang penopang atap luar
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.5 });
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const x = Math.cos(angle) * 51;
      const z = Math.sin(angle) * 51;
      const pillarGeo = new THREE.CylinderGeometry(0.6, 0.6, 15, 8);
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(x, 7.5, z);
      group.add(pillar);
    }

    return group;
  }
}
