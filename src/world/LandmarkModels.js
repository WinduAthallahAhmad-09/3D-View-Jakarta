import * as THREE from 'three';
import { TextureGenerator } from './TextureGenerator.js';

/**
 * Geometrically faithful 3D architectural models of 19+ iconic Jakarta landmarks
 * designed using real-world Google Maps & architectural references.
 */
export class LandmarkModels {
  /**
   * 1. Istana Merdeka & Istana Negara
   * Neo-Palladian white palace with Corinthian colonnade, grand stairs, and Merah Putih flagpole.
   */
  static createIstanaMerdeka() {
    const group = new THREE.Group();
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.85, roughness: 0.2 });

    // Lawn & Courtyard (fits north of Jl. Medan Merdeka Utara Z=-335)
    const lawn = new THREE.Mesh(
      new THREE.BoxGeometry(52, 0.5, 32),
      new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 })
    );
    lawn.position.set(0, 0.25, -2);
    lawn.receiveShadow = true;
    group.add(lawn);

    // Main Palace Building
    const mainHall = new THREE.Mesh(new THREE.BoxGeometry(36, 11, 18), whiteMat);
    mainHall.position.set(0, 5.8, -5);
    mainHall.castShadow = true;
    mainHall.receiveShadow = true;
    group.add(mainHall);

    // Front Portico & Pediment
    const portico = new THREE.Mesh(new THREE.BoxGeometry(18, 12, 7), whiteMat);
    portico.position.set(0, 6.2, 6);
    portico.castShadow = true;
    group.add(portico);

    // 6 Front Corinthian Pillars
    for (let x = -7.5; x <= 7.5; x += 3) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 10, 12), whiteMat);
      col.position.set(x, 5.5, 9.8);
      col.castShadow = true;
      group.add(col);
    }

    // Grand Front Staircase
    const stairs = new THREE.Mesh(new THREE.BoxGeometry(12, 1.8, 4), whiteMat);
    stairs.position.set(0, 1.1, 11.5);
    group.add(stairs);

    // Garuda Emblem on Pediment
    const garuda = new THREE.Mesh(new THREE.SphereGeometry(1.1, 12, 12), goldMat);
    garuda.position.set(0, 11.2, 9.9);
    group.add(garuda);

    // Tiang Bendera Pusaka & Bendera Merah Putih
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.2, 18, 8),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.8 })
    );
    pole.position.set(0, 9, 13);
    group.add(pole);

    const redFlag = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.9, 0.1), new THREE.MeshBasicMaterial({ color: 0xdc2626 }));
    redFlag.position.set(1.5, 17.5, 13);
    group.add(redFlag);

    const whiteFlag = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.9, 0.1), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    whiteFlag.position.set(1.5, 16.6, 13);
    group.add(whiteFlag);

    return group;
  }

  /**
   * 2. Masjid Istiqlal
   * Modernist white marble hall, 45m spherical dome, and single 96.66m minaret scaled to fit its real block.
   */
  static createMasjidIstiqlal() {
    const group = new THREE.Group();
    const marbleMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.3,
      metalness: 0.15,
      map: TextureGenerator.createMarbleTexture()
    });
    const domeMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.25,
      metalness: 0.4
    });

    // Main Prayer Hall Building
    const hall = new THREE.Mesh(new THREE.BoxGeometry(24, 12, 24), marbleMat);
    hall.position.set(-4, 6, 0);
    hall.castShadow = true;
    hall.receiveShadow = true;
    group.add(hall);

    // 45m Main Spherical Dome
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(9, 32, 20, 0, Math.PI * 2, 0, Math.PI / 2),
      domeMat
    );
    dome.position.set(-4, 12, 0);
    dome.castShadow = true;
    group.add(dome);

    // Crescent Spire on Dome
    const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.32, 5, 8), domeMat);
    spire.position.set(-4, 22.5, 0);
    group.add(spire);

    // Courtyard (Plaza Terbuka Sisi Tenggara)
    const courtyard = new THREE.Mesh(new THREE.BoxGeometry(16, 6.5, 20), marbleMat);
    courtyard.position.set(14, 3.25, 0);
    group.add(courtyard);

    // Menara Tunggal 96,66m (South-East Corner)
    const minaretShaft = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.4, 46, 16), marbleMat);
    minaretShaft.position.set(16, 23, 10);
    minaretShaft.castShadow = true;
    group.add(minaretShaft);

    const minaretSpire = new THREE.Mesh(
      new THREE.ConeGeometry(1.4, 12, 16),
      new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.85, roughness: 0.15 })
    );
    minaretSpire.position.set(16, 52, 10);
    group.add(minaretSpire);

    return group;
  }

  /**
   * 3. Gereja Katedral Jakarta
   * Neo-Gothic Cathedral with twin 60m white lacy spires across Jl. Katedral from Masjid Istiqlal.
   */
  static createGerejaKatedral() {
    const group = new THREE.Group();
    const brickMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.65 });
    const whiteIronMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.5, roughness: 0.25 });

    // Nave & Cross-shaped Body
    const nave = new THREE.Mesh(new THREE.BoxGeometry(11, 11, 24), brickMat);
    nave.position.set(0, 5.5, 0);
    nave.castShadow = true;
    group.add(nave);

    const transept = new THREE.Mesh(new THREE.BoxGeometry(20, 10, 9), brickMat);
    transept.position.set(0, 5, -2);
    transept.castShadow = true;
    group.add(transept);

    // Pitched Gothic Roof
    const roofGeo = new THREE.ConeGeometry(7.5, 6.5, 4);
    roofGeo.rotateY(Math.PI / 4);
    roofGeo.scale(1, 1, 2.3);
    const roof = new THREE.Mesh(roofGeo, new THREE.MeshStandardMaterial({ color: 0x334155 }));
    roof.position.set(0, 14, 0);
    group.add(roof);

    // Twin Front Towers + White Cast-Iron Spires (60m)
    [-4.2, 4.2].forEach((x) => {
      const towerBase = new THREE.Mesh(new THREE.BoxGeometry(3.4, 16, 3.4), brickMat);
      towerBase.position.set(x, 8, 11);
      towerBase.castShadow = true;
      group.add(towerBase);

      const spire = new THREE.Mesh(new THREE.ConeGeometry(1.9, 18, 8), whiteIronMat);
      spire.position.set(x, 25, 11);
      spire.castShadow = true;
      group.add(spire);
    });

    // Central Angelus Dei Spire
    const centralSpire = new THREE.Mesh(new THREE.ConeGeometry(1.2, 14, 8), whiteIronMat);
    centralSpire.position.set(0, 21, -2);
    group.add(centralSpire);

    // Rose Window (Rozeta) on Front Facade
    const roseWindow = new THREE.Mesh(
      new THREE.CircleGeometry(2.0, 16),
      new THREE.MeshBasicMaterial({ color: 0xfef08a })
    );
    roseWindow.position.set(0, 8.5, 12.1);
    group.add(roseWindow);

    return group;
  }

  /**
   * 4. Monumen Nasional (Monas) + Lapangan Medan Merdeka
   * Strictly bounded inside the real Medan Merdeka street loop (West X=-3, East X=+102, North Z=-335, South Z=-215)
   */
  static createMonas() {
    const group = new THREE.Group();
    const marbleMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.3,
      metalness: 0.1,
      map: TextureGenerator.createMarbleTexture()
    });

    // Lapangan Medan Merdeka Green Park (centered at X=50, Z=-275 -> local [-8, +2] from Monas at [58, -277])
    const park = new THREE.Mesh(
      new THREE.BoxGeometry(88, 0.45, 102),
      new THREE.MeshStandardMaterial({ color: 0x14532d, roughness: 0.9 })
    );
    park.position.set(-8, 0.22, 2);
    park.receiveShadow = true;
    group.add(park);

    // North-South & East-West Orthogonal Paths inside Medan Merdeka
    const nsPath = new THREE.Mesh(
      new THREE.BoxGeometry(6, 0.55, 100),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.7 })
    );
    nsPath.position.set(0, 0.3, 2);
    group.add(nsPath);

    const ewPath = new THREE.Mesh(
      new THREE.BoxGeometry(86, 0.55, 6),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.7 })
    );
    ewPath.position.set(-8, 0.3, 0);
    group.add(ewPath);

    // Diagonal Cross Plaza Paths inside the 88x102 park
    [0.72, -0.72].forEach((angle) => {
      const diagPath = new THREE.Mesh(
        new THREE.BoxGeometry(5.5, 0.55, 118),
        new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.7 })
      );
      diagPath.rotation.y = angle;
      diagPath.position.set(-8, 0.3, 2);
      group.add(diagPath);
    });

    // Southern Reflecting Pool & Fountain (Monas Selatan)
    const southPool = new THREE.Mesh(
      new THREE.BoxGeometry(11, 0.7, 18),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.85 })
    );
    southPool.position.set(0, 0.4, 34);
    group.add(southPool);

    // Western Dancing Fountain Plaza (Taman Air Mancur Menari Monas Barat)
    const westFountain = new THREE.Mesh(
      new THREE.CylinderGeometry(8.5, 8.5, 0.8, 24),
      new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.1, metalness: 0.85 })
    );
    westFountain.position.set(-32, 0.4, 0);
    group.add(westFountain);

    // Inner Courtyard around the Monas Cup
    const basePlaza = new THREE.Mesh(
      new THREE.BoxGeometry(42, 1.3, 42),
      new THREE.MeshStandardMaterial({ color: 0x334155 })
    );
    basePlaza.position.y = 0.65;
    basePlaza.receiveShadow = true;
    group.add(basePlaza);

    // Pelataran Cawan Bawah (Lesung)
    const lowerCupGeo = new THREE.CylinderGeometry(20, 13, 8, 4);
    lowerCupGeo.rotateY(Math.PI / 4);
    const lowerCup = new THREE.Mesh(lowerCupGeo, marbleMat);
    lowerCup.position.y = 5.5;
    lowerCup.castShadow = true;
    group.add(lowerCup);

    // Tugu Obelisk (Alu)
    const shaftGeo = new THREE.CylinderGeometry(2.4, 3.8, 110, 4);
    shaftGeo.rotateY(Math.PI / 4);
    const shaft = new THREE.Mesh(shaftGeo, marbleMat);
    shaft.position.y = 10.5 + 55;
    shaft.castShadow = true;
    group.add(shaft);

    // Pelataran Puncak
    const upperCupGeo = new THREE.CylinderGeometry(6, 3, 5, 4);
    upperCupGeo.rotateY(Math.PI / 4);
    const upperCup = new THREE.Mesh(upperCupGeo, marbleMat);
    upperCup.position.y = 123;
    group.add(upperCup);

    // Lidah Api Kemerdekaan (Emas Murni 50kg)
    const flameMat = new THREE.MeshStandardMaterial({
      color: 0xffb703,
      emissive: 0xfb8500,
      emissiveIntensity: 0.9,
      roughness: 0.15,
      metalness: 0.95
    });

    const flame = new THREE.Mesh(new THREE.ConeGeometry(2.6, 14, 16), flameMat);
    flame.position.y = 132.5;
    group.add(flame);

    const flameLight = new THREE.PointLight(0xffaa00, 3.0, 80);
    flameLight.position.y = 135;
    group.add(flameLight);

    // 4 Night Spotlights
    [[-32, -32], [32, -32], [-32, 32], [32, 32]].forEach(([x, z]) => {
      const spot = new THREE.SpotLight(0xffffff, 0, 190, Math.PI / 7, 0.4);
      spot.position.set(x, 2, z);
      spot.target = shaft;
      spot.name = "monas-spotlight";
      group.add(spot);
    });

    return group;
  }

  /**
   * 5. Stasiun Gambir + Jalur Kereta Layang
   */
  static createStasiunGambir() {
    const group = new THREE.Group();
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5 });
    const greenRoofMat = new THREE.MeshStandardMaterial({ color: 0x047857, roughness: 0.4, metalness: 0.3 });

    // Main Station Building
    const station = new THREE.Mesh(new THREE.BoxGeometry(22, 14, 95), wallMat);
    station.position.set(0, 7, 0);
    station.castShadow = true;
    group.add(station);

    // Emerald Green Pitched Roof
    const roof = new THREE.Mesh(new THREE.BoxGeometry(26, 4, 100), greenRoofMat);
    roof.position.set(0, 16, 0);
    group.add(roof);

    return group;
  }

  /**
   * 6. Bundaran Patung Kuda Arjuna Wijaya & Menara Kembar Bank Indonesia
   */
  static createPatungKuda() {
    const group = new THREE.Group();
    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x92400e, metalness: 0.85, roughness: 0.25 });
    const waterMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.8 });

    // Fountain Pool
    const pool = new THREE.Mesh(new THREE.CylinderGeometry(14, 15, 1.2, 32), waterMat);
    pool.position.y = 0.6;
    group.add(pool);

    // Chariot & 8 Galloping Horses
    for (let i = 0; i < 8; i++) {
      const horse = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.2, 3.2), bronzeMat);
      const xOffset = (i % 2 === 0 ? -1.8 : 1.8) + (i % 4 === 0 ? -1.2 : 1.2) * 0.4;
      const zOffset = -8 + Math.floor(i / 2) * 4.2;
      horse.position.set(xOffset, 2.5, zOffset);
      group.add(horse);
    }

    // Arjuna Chariot at Back
    const chariot = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 3, 5.5, 12), bronzeMat);
    chariot.position.set(0, 3.8, 7);
    group.add(chariot);

    // Kompleks Menara Kembar Bank Indonesia (di sisi Barat Patung Kuda)
    const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
      style: 'bronze-glass',
      floors: 32,
      windowsAcross: 12
    });
    const biMat = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      emissiveMap: emissiveTexture,
      emissive: 0xd97706,
      emissiveIntensity: 0.25,
      metalness: 0.7,
      roughness: 0.25
    });

    [-18, 18].forEach((zOff) => {
      const biTower = new THREE.Mesh(new THREE.BoxGeometry(22, 82, 20), biMat);
      biTower.position.set(-58, 41, zOff);
      biTower.castShadow = true;
      group.add(biTower);

      // Classical Dome Crown on BI Towers
      const crown = new THREE.Mesh(
        new THREE.ConeGeometry(12, 8, 4),
        new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.7 })
      );
      crown.rotation.y = Math.PI / 4;
      crown.position.set(-58, 86, zOff);
      group.add(crown);
    });

    return group;
  }

  /**
   * 7. Gedung Sarinah Thamrin
   */
  static createSarinah() {
    const group = new THREE.Group();
    const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
      style: 'modern-blue',
      floors: 16,
      windowsAcross: 14
    });

    const facadeMat = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      emissiveMap: emissiveTexture,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.3,
      roughness: 0.3,
      metalness: 0.6
    });

    // Revitalized Stepped Podium
    const podium = new THREE.Mesh(
      new THREE.BoxGeometry(36, 14, 42),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 })
    );
    podium.position.set(0, 7, 0);
    podium.castShadow = true;
    group.add(podium);

    // Main Historic Sarinah Tower
    const tower = new THREE.Mesh(new THREE.BoxGeometry(20, 58, 32), facadeMat);
    tower.position.set(2, 29, 0);
    tower.castShadow = true;
    group.add(tower);

    return group;
  }

  /**
   * 8. Bundaran Hotel Indonesia & Patung Selamat Datang
   */
  static createBundaranHI() {
    const group = new THREE.Group();

    const basinWall = new THREE.Mesh(
      new THREE.CylinderGeometry(13.5, 14.0, 1.4, 48),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.5 })
    );
    basinWall.position.y = 0.7;
    group.add(basinWall);

    const water = new THREE.Mesh(
      new THREE.CylinderGeometry(12.8, 12.8, 1.2, 48),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.85 })
    );
    water.position.y = 0.8;
    group.add(water);

    for (let r = 4; r <= 10.5; r += 3.2) {
      const ringGeo = new THREE.TorusGeometry(r, 0.14, 8, 36);
      ringGeo.rotateX(Math.PI / 2);
      const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
      ring.position.y = 1.45;
      group.add(ring);
    }

    const pillar = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 19, 2.0),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8 })
    );
    pillar.position.y = 9.5;
    pillar.castShadow = true;
    group.add(pillar);

    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.25, metalness: 0.85 });
    const maleBody = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.55, 4.8, 8), bronzeMat);
    maleBody.position.set(-0.75, 22.2, 0);
    group.add(maleBody);

    const femaleBody = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 4.5, 8), bronzeMat);
    femaleBody.position.set(0.75, 22.05, 0);
    group.add(femaleBody);

    return group;
  }

  /**
   * 9. Menara BCA & Grand Indonesia + Hotel Indonesia Kempinski
   */
  static createMenaraBCA() {
    const group = new THREE.Group();
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

    const h = 138;
    const tower = new THREE.Mesh(new THREE.BoxGeometry(26, h, 22), facadeMat);
    tower.position.y = h / 2;
    tower.castShadow = true;
    tower.receiveShadow = true;
    group.add(tower);

    // Grand Indonesia Mall Podium & Kempinski Wing (strictly west of Thamrin and outside Bundaran HI ring)
    const mall = new THREE.Mesh(
      new THREE.BoxGeometry(30, 18, 28),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 })
    );
    mall.position.set(-14, 9, -4);
    mall.castShadow = true;
    group.add(mall);

    return group;
  }

  /**
   * 10. Autograph Tower & Luminary Tower (Thamrin Nine)
   * Tallest building in Indonesia (382.9m) with stepped glass setbacks.
   */
  static createAutographTower() {
    const group = new THREE.Group();
    const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
      style: 'modern-blue',
      floors: 75,
      windowsAcross: 18
    });

    const glassMat = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      emissiveMap: emissiveTexture,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.35,
      roughness: 0.12,
      metalness: 0.9
    });

    // Autograph Tower Main Tier (195m scaled -> ~383m real)
    const lowerTier = new THREE.Mesh(new THREE.BoxGeometry(22, 130, 22), glassMat);
    lowerTier.position.set(0, 65, 0);
    lowerTier.castShadow = true;
    group.add(lowerTier);

    const upperTier = new THREE.Mesh(new THREE.BoxGeometry(18, 65, 18), glassMat);
    upperTier.position.set(1.5, 162.5, 1.5);
    upperTier.castShadow = true;
    group.add(upperTier);

    // Observation Glass Cube Crown
    const obsCrown = new THREE.Mesh(
      new THREE.BoxGeometry(16, 10, 16),
      new THREE.MeshStandardMaterial({
        color: 0xe0f2fe,
        emissive: 0x38bdf8,
        emissiveIntensity: 0.7,
        roughness: 0.1,
        metalness: 0.9
      })
    );
    obsCrown.position.set(1.5, 200, 1.5);
    group.add(obsCrown);

    // Twin Neighbor: Luminary Tower (304m, stays east of Waduk Melati)
    const luminary = new THREE.Mesh(new THREE.BoxGeometry(18, 152, 18), glassMat);
    luminary.position.set(-22, 76, 8);
    luminary.castShadow = true;
    group.add(luminary);

    return group;
  }

  /**
   * 11. Wisma 46 (BNI City Tower)
   */
  static createWisma46() {
    const group = new THREE.Group();
    const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
      style: 'wisma-teal',
      floors: 46,
      windowsAcross: 14
    });

    const facadeMat = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      emissiveMap: emissiveTexture,
      emissive: 0x0f766e,
      emissiveIntensity: 0.28,
      roughness: 0.2,
      metalness: 0.75
    });

    const whiteBeamMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });

    const bodyHeight = 115;
    const body = new THREE.Mesh(new THREE.BoxGeometry(22, bodyHeight, 18), facadeMat);
    body.position.y = bodyHeight / 2;
    body.castShadow = true;
    group.add(body);

    const spireHeight = 45;
    const spireShape = new THREE.Shape();
    spireShape.moveTo(-11, 0);
    spireShape.lineTo(11, 0);
    spireShape.quadraticCurveTo(8, spireHeight * 0.7, 0, spireHeight);
    spireShape.quadraticCurveTo(-8, spireHeight * 0.7, -11, 0);

    const spireGeo = new THREE.ExtrudeGeometry(spireShape, {
      depth: 16,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.6,
      bevelThickness: 0.6
    });
    spireGeo.translate(0, 0, -8);
    const spire = new THREE.Mesh(spireGeo, whiteBeamMat);
    spire.position.y = bodyHeight;
    spire.castShadow = true;
    group.add(spire);

    const antenna = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.4, 22, 8),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9 })
    );
    antenna.position.y = bodyHeight + spireHeight + 11;
    group.add(antenna);

    return group;
  }

  /**
   * 12. Sampoerna Strategic Square & WTC Sudirman
   */
  static createSampoernaStrategic() {
    const group = new THREE.Group();
    const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
      style: 'bronze-glass',
      floors: 32,
      windowsAcross: 12
    });

    const mat = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      emissiveMap: emissiveTexture,
      emissive: 0xd97706,
      emissiveIntensity: 0.3,
      roughness: 0.25,
      metalness: 0.65
    });

    const domeMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      emissive: 0xd97706,
      emissiveIntensity: 0.4,
      metalness: 0.8,
      roughness: 0.2
    });

    // Twin Neo-Classical Towers on the East Side of Sudirman
    [-12, 12].forEach((zOff) => {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(16, 95, 16), mat);
      tower.position.set(0, 47.5, zOff);
      tower.castShadow = true;
      group.add(tower);

      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(7.5, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2),
        domeMat
      );
      dome.position.set(0, 95, zOff);
      group.add(dome);
    });

    return group;
  }

  /**
   * 13. JPO Phinisi Karet Sudirman
   * Bright terracotta-orange pedestrian bridge shaped like a Phinisi boat spanning across Sudirman.
   */
  static createJPOPhinisi() {
    const group = new THREE.Group();
    const orangeMat = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      emissive: 0xc2410c,
      emissiveIntensity: 0.45,
      roughness: 0.3,
      metalness: 0.5
    });
    const deckMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.6 });

    // Lower Walkway Span across Jalan Sudirman (X = -18 to +18)
    const walkway = new THREE.Mesh(new THREE.BoxGeometry(36, 1.1, 4.0), deckMat);
    walkway.position.set(0, 8.5, 0);
    walkway.castShadow = true;
    group.add(walkway);

    // Upper Curved Phinisi Ship Viewing Deck
    const phinisiHull = new THREE.Mesh(new THREE.BoxGeometry(24, 2.0, 6.5), orangeMat);
    phinisiHull.position.set(0, 12.2, 0);
    group.add(phinisiHull);

    // Side Support Stairs / Elevators on West and East Sidewalks
    [-17, 17].forEach((x) => {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(3.5, 13, 5), orangeMat);
      tower.position.set(x, 6.5, 0);
      tower.castShadow = true;
      group.add(tower);
    });

    return group;
  }

  /**
   * 14. Simpang Susun Semanggi
   * Elevated circular flyover ring + Gatot Subroto overpass synced with real OSM cloverleaf ramps below.
   */
  static createSimpangSemanggi() {
    const group = new THREE.Group();
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 });
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    // 1. Elevated Outer Circular Ring Flyover (Simpang Susun Semanggi 2017)
    const ringRadius = 38;
    const ringGeo = new THREE.TorusGeometry(ringRadius, 3.0, 8, 64);
    ringGeo.rotateX(Math.PI / 2);
    ringGeo.scale(1, 0.35, 1);
    const flyoverRing = new THREE.Mesh(ringGeo, concreteMat);
    flyoverRing.position.y = 11.5;
    flyoverRing.castShadow = true;
    group.add(flyoverRing);

    // Glowing LED Accent Ring on Semanggi Flyover
    const ledGeo = new THREE.TorusGeometry(ringRadius + 2.8, 0.3, 6, 64);
    ledGeo.rotateX(Math.PI / 2);
    const ledRing = new THREE.Mesh(ledGeo, glowMat);
    ledRing.position.y = 11.5;
    group.add(ledRing);

    // 2. Gatot Subroto Overpass Bridge over Sudirman
    const overpass = new THREE.Mesh(new THREE.BoxGeometry(92, 1.8, 18), concreteMat);
    overpass.position.set(0, 6.5, 0);
    overpass.castShadow = true;
    group.add(overpass);

    // Support Piers for Circular Flyover
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const px = Math.cos(angle) * ringRadius;
      const pz = Math.sin(angle) * ringRadius;
      if (Math.abs(px) < 14 || Math.abs(pz) < 14) continue;
      const pier = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.1, 11.5, 10), concreteMat);
      pier.position.set(px, 5.75, pz);
      group.add(pier);
    }

    return group;
  }

  /**
   * 15. Gedung MPR / DPR RI (Gedung Kura-Kura Senayan)
   * Iconic green split-wing parabolic dome + Nusantara III high-rise secretariat.
   */
  static createGedungDPR() {
    const group = new THREE.Group();
    const greenDomeMat = new THREE.MeshStandardMaterial({
      color: 0x059669,
      roughness: 0.35,
      metalness: 0.3
    });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });

    // Gedung Nusantara (Kubah Kura-Kura Hijau)
    const domeGeo = new THREE.SphereGeometry(22, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    domeGeo.scale(1.3, 0.65, 1.0);
    const dome = new THREE.Mesh(domeGeo, greenDomeMat);
    dome.position.set(0, 2, 0);
    dome.castShadow = true;
    group.add(dome);

    // Center Split / Gap on Dome
    const centerRib = new THREE.Mesh(new THREE.BoxGeometry(3.2, 17, 44), whiteMat);
    centerRib.position.set(0, 8.5, 0);
    group.add(centerRib);

    // Gedung Nusantara I / III Secretariat Tower behind Dome
    const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
      style: 'dark-minimal',
      floors: 24,
      windowsAcross: 14
    });
    const towerMat = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      emissiveMap: emissiveTexture,
      emissive: 0xfef08a,
      emissiveIntensity: 0.25
    });
    const tower = new THREE.Mesh(new THREE.BoxGeometry(34, 68, 14), towerMat);
    tower.position.set(0, 34, -28);
    tower.castShadow = true;
    group.add(tower);

    return group;
  }

  /**
   * 16. Kawasan Mega Kuningan & Rasuna Said (Gama Tower & Bakrie Tower)
   */
  static createMegaKuningan() {
    const group = new THREE.Group();

    const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
      style: 'modern-blue',
      floors: 64,
      windowsAcross: 16
    });
    const mat = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      emissiveMap: emissiveTexture,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.3,
      roughness: 0.18,
      metalness: 0.85
    });

    // Gama Tower (285m)
    const gama = new THREE.Mesh(new THREE.BoxGeometry(22, 155, 22), mat);
    gama.position.set(16, 77.5, -18);
    gama.castShadow = true;
    group.add(gama);

    // Bakrie Tower (Iconic Twisted Geometric Segments)
    for (let s = 0; s < 5; s++) {
      const seg = new THREE.Mesh(new THREE.BoxGeometry(18, 24, 18), mat);
      seg.position.set(-24, 12 + s * 24, 16);
      seg.rotation.y = s * 0.14;
      seg.castShadow = true;
      group.add(seg);
    }

    // Menara Karya & Kuningan Towers
    const karya = new THREE.Mesh(new THREE.BoxGeometry(20, 115, 20), mat);
    karya.position.set(24, 57.5, 16);
    karya.castShadow = true;
    group.add(karya);

    return group;
  }

  /**
   * 17. Gelora Bung Karno (GBK) + Hutan Kota GBK + Istora Senayan
   */
  static createGBK() {
    const group = new THREE.Group();

    // 1. Stadion Utama GBK
    const field = new THREE.Mesh(
      new THREE.CylinderGeometry(20, 20, 0.5, 32),
      new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8 })
    );
    field.position.y = 0.3;
    group.add(field);

    const bowl = new THREE.Mesh(
      new THREE.CylinderGeometry(40, 26, 14, 36, 1, true),
      new THREE.MeshStandardMaterial({ color: 0xef4444, side: THREE.DoubleSide })
    );
    bowl.position.y = 7;
    group.add(bowl);

    const roofRingGeo = new THREE.RingGeometry(22, 44, 48);
    roofRingGeo.rotateX(-Math.PI / 2);
    const roof = new THREE.Mesh(
      roofRingGeo,
      new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        metalness: 0.7,
        roughness: 0.3,
        side: THREE.DoubleSide
      })
    );
    roof.position.y = 14.5;
    roof.castShadow = true;
    group.add(roof);

    // 2. Istora Senayan (di sisi Tenggara Stadion Utama)
    const istora = new THREE.Mesh(
      new THREE.BoxGeometry(24, 10, 28),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 })
    );
    istora.position.set(36, 5, 32);
    istora.castShadow = true;
    group.add(istora);

    return group;
  }

  /**
   * 18. Bundaran Senayan & Patung Pemuda Membangun
   */
  static createBundaranSenayan() {
    const group = new THREE.Group();

    // Round Fountain Basin
    const pool = new THREE.Mesh(
      new THREE.CylinderGeometry(18, 19, 1.2, 36),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.85 })
    );
    pool.position.y = 0.6;
    group.add(pool);

    // Pedestal Pillar
    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(1.5, 2.5, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0x64748b })
    );
    pedestal.position.y = 6;
    group.add(pedestal);

    // Patung Pemuda Membangun (Holding Flaming Dish Overhead)
    const figure = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 1.1, 11, 10),
      new THREE.MeshStandardMaterial({ color: 0x451a03, metalness: 0.8, roughness: 0.3 })
    );
    figure.position.y = 17.5;
    figure.castShadow = true;
    group.add(figure);

    // Flaming Dish ("Pizza Pan")
    const dish = new THREE.Mesh(
      new THREE.CylinderGeometry(3.2, 1.8, 1.0, 16),
      new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xea580c,
        emissiveIntensity: 0.85
      })
    );
    dish.position.y = 23.5;
    group.add(dish);

    // Plaza Senayan & Senayan City Context Towers (West Side)
    const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
      style: 'bronze-glass',
      floors: 28,
      windowsAcross: 14
    });
    const sencyMat = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      emissiveMap: emissiveTexture,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.25
    });

    const sency = new THREE.Mesh(new THREE.BoxGeometry(24, 78, 22), sencyMat);
    sency.position.set(-52, 39, 10);
    sency.castShadow = true;
    group.add(sency);

    return group;
  }

  /**
   * 19. Lapangan Banteng & Monumen Pembebasan Irian Barat
   * Bounded cleanly inside Jl. Lapangan Banteng Barat, Timur, Utara, & Selatan.
   */
  static createLapanganBanteng() {
    const group = new THREE.Group();
    const parkMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.4 });
    const waterMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.85 });
    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x78350f, metalness: 0.85, roughness: 0.25 });

    // Rectangular Park Lawn fitting inside the real Lapangan Banteng road box
    const lawn = new THREE.Mesh(new THREE.BoxGeometry(36, 0.5, 32), parkMat);
    lawn.position.y = 0.25;
    lawn.receiveShadow = true;
    group.add(lawn);

    // Semicircular Amphitheater & Twin Reflecting Pools
    [-9, 9].forEach((xOff) => {
      const pool = new THREE.Mesh(new THREE.BoxGeometry(10, 0.7, 9), waterMat);
      pool.position.set(xOff, 0.4, 0);
      group.add(pool);
    });

    // Twin Slanted Pedestal Towers of Monumen Pembebasan Irian Barat
    [-2.4, 2.4].forEach((zOff) => {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(1.8, 20, 1.4), stoneMat);
      pillar.position.set(0, 10, zOff);
      pillar.castShadow = true;
      group.add(pillar);
    });

    // Top Platform & Bronze Figure Breaking Chains (35m)
    const topDeck = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.2, 7.5), stoneMat);
    topDeck.position.set(0, 20, 0);
    group.add(topDeck);

    const statue = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 1.0, 7.0, 8), bronzeMat);
    statue.position.set(0, 24.2, 0);
    statue.castShadow = true;
    group.add(statue);

    // Gedung Kementerian Keuangan (Istana Daendels / Gedung AA Maramis) on East Side
    const kemenkeu = new THREE.Mesh(new THREE.BoxGeometry(12, 13, 28), stoneMat);
    kemenkeu.position.set(28, 6.5, 0);
    kemenkeu.castShadow = true;
    group.add(kemenkeu);

    return group;
  }

  /**
   * 20. Tugu Tani (Patung Pahlawan)
   * Triangular pedestal & Soviet-sculpted bronze statue of mother & freedom fighter at Kebon Sirih East.
   */
  static createTuguTani() {
    const group = new THREE.Group();
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.5 });
    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x3f2e21, metalness: 0.85, roughness: 0.25 });

    // Roundabout Garden Island
    const island = new THREE.Mesh(
      new THREE.CylinderGeometry(8.5, 9.5, 0.8, 24),
      new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8 })
    );
    island.position.y = 0.4;
    group.add(island);

    // Triangular Prism Pedestal
    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.8, 9, 3), stoneMat);
    pedestal.position.y = 5;
    pedestal.castShadow = true;
    group.add(pedestal);

    // Patung Pahlawan (Pejuang & Sang Ibu)
    const hero = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.0, 6.5, 8), bronzeMat);
    hero.position.set(0, 12.5, 0.4);
    hero.castShadow = true;
    group.add(hero);

    const mother = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.85, 5.2, 8), bronzeMat);
    mother.position.set(0, 11.8, -0.9);
    group.add(mother);

    return group;
  }

  /**
   * 21. Taman Suropati & Gedung Bappenas (Jantung Garden City Menteng)
   * Fits inside the real Jalan Taman Suropati loop (Situ Lembang is rendered at its true NW location from OSM).
   */
  static createTamanSuropati() {
    const group = new THREE.Group();
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });
    const waterMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.85 });
    const whiteColonialMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const terracottaMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.6 });

    // Oval Park Lawn of Taman Suropati
    const park = new THREE.Mesh(new THREE.CylinderGeometry(14, 14, 0.5, 36), grassMat);
    park.scale.set(1.25, 1, 0.9);
    park.position.y = 0.25;
    park.receiveShadow = true;
    group.add(park);

    // Central Fountain Basin
    const fountain = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.6, 1.0, 24), waterMat);
    fountain.position.y = 0.55;
    group.add(fountain);

    // 6 ASEAN Peace Sculptures around the park perimeter
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const sculp = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 3.6, 1.2),
        new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.4 })
      );
      sculp.position.set(Math.cos(a) * 11, 2.0, Math.sin(a) * 8.5);
      sculp.castShadow = true;
      group.add(sculp);
    }

    // Gedung Bappenas (Historic Colonial Building Facing North Side of Park)
    const bappenas = new THREE.Mesh(new THREE.BoxGeometry(22, 10, 12), whiteColonialMat);
    bappenas.position.set(0, 5, -20);
    bappenas.castShadow = true;
    group.add(bappenas);

    const bappenasRoof = new THREE.Mesh(new THREE.ConeGeometry(14, 4.5, 4), terracottaMat);
    bappenasRoof.rotation.y = Math.PI / 4;
    bappenasRoof.scale.set(1.2, 1, 0.65);
    bappenasRoof.position.set(0, 12, -20);
    group.add(bappenasRoof);

    return group;
  }

  /**
   * 22. Kawasan Transit Terpadu Dukuh Atas & BNI City
   */
  static createDukuhAtas() {
    const group = new THREE.Group();
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.5, roughness: 0.3 });
    const accentMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.45
    });

    // Stasiun BNI City (KA Bandara) on West Side of Canal
    const bniStation = new THREE.Mesh(new THREE.BoxGeometry(32, 10, 11), roofMat);
    bniStation.position.set(-34, 5, -6);
    bniStation.rotation.y = -0.22;
    bniStation.castShadow = true;
    group.add(bniStation);

    // Stasiun KRL Sudirman on East Side of Bridge
    const sudirmanStation = new THREE.Mesh(new THREE.BoxGeometry(36, 7.5, 10), concreteMat);
    sudirmanStation.position.set(34, 3.8, 6);
    sudirmanStation.rotation.y = -0.22;
    group.add(sudirmanStation);

    // JPM Dukuh Atas (Jembatan Penyeberangan Multiguna connecting LRT, KRL, MRT)
    const skybridge = new THREE.Mesh(new THREE.BoxGeometry(52, 2.8, 5), accentMat);
    skybridge.position.set(14, 9.0, 3);
    skybridge.rotation.y = 0.22;
    skybridge.castShadow = true;
    group.add(skybridge);

    // Skatepark & Terowongan Kendal Pedestrian Plaza Indicator
    const plaza = new THREE.Mesh(
      new THREE.BoxGeometry(12, 0.7, 16),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 })
    );
    plaza.position.set(20, 0.35, -14);
    group.add(plaza);

    return group;
  }
}

