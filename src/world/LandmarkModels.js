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
      emissive: 0xff9900,
      emissiveIntensity: 1.4,
      roughness: 0.15,
      metalness: 0.95
    });
    flameMat.name = 'monas-flame';

    const flame = new THREE.Mesh(new THREE.ConeGeometry(2.6, 14, 16), flameMat);
    flame.position.y = 132.5;
    group.add(flame);

    const flameLight = new THREE.PointLight(0xffaa00, 3.0, 80);
    flameLight.position.y = 135;
    group.add(flameLight);

    // 4 Night Spotlights illuminating the obelisk
    const spotTarget = new THREE.Object3D();
    spotTarget.position.set(0, 70, 0);
    group.add(spotTarget);

    [[-32, -32], [32, -32], [-32, 32], [32, 32]].forEach(([x, z]) => {
      const spot = new THREE.SpotLight(0xfff5ea, 0, 220, Math.PI / 6, 0.45);
      spot.position.set(x, 2, z);
      spot.target = spotTarget;
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

    // Main Station Building (proportional to elevated viaduct length)
    const station = new THREE.Mesh(new THREE.BoxGeometry(16, 11, 56), wallMat);
    station.position.set(0, 5.5, 0);
    station.castShadow = true;
    group.add(station);

    // Emerald Green Pitched Roof
    const roof = new THREE.Mesh(new THREE.BoxGeometry(19, 3.5, 60), greenRoofMat);
    roof.position.set(0, 12.5, 0);
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
      new THREE.BoxGeometry(28, 12, 30),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 })
    );
    podium.position.set(0, 6, 0);
    podium.castShadow = true;
    group.add(podium);

    // Main Historic Sarinah Tower
    const tower = new THREE.Mesh(new THREE.BoxGeometry(20, 58, 26), facadeMat);
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

    // Mahkota Ikonik Menara BCA (Glowing Curved Cantilever Crown Halo)
    const crownMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 1.5,
      roughness: 0.15,
      metalness: 0.85
    });
    crownMat.name = 'menara-bca-crown';

    const crownSlab = new THREE.Mesh(new THREE.BoxGeometry(27.6, 2.8, 23.6), crownMat);
    crownSlab.position.set(0, h + 1.4, 0);
    crownSlab.castShadow = true;
    group.add(crownSlab);

    const crownRibbon = new THREE.Mesh(new THREE.BoxGeometry(28.4, 0.8, 24.4), crownMat);
    crownRibbon.position.set(0, h + 2.6, 0);
    group.add(crownRibbon);

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

  /**
   * 23. Superblok Podomoro City & Central Park Mall (Jakarta Barat)
   * High-rise APL Tower, curved Neo Soho, Central Park Mall podium, Tribeca Park & glowing Eco Skywalk.
   */
  static createPodomoroCity() {
    const group = new THREE.Group();
    const podiumMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 });
    const aplGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.85,
      roughness: 0.18
    });
    const sohoMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.6,
      roughness: 0.25
    });
    const parkMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 });
    const skywalkMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      roughness: 0.2
    });

    // 1. Central Park Mall Grand Podium
    const mallPodium = new THREE.Mesh(new THREE.BoxGeometry(64, 15, 52), podiumMat);
    mallPodium.position.set(0, 7.5, 0);
    mallPodium.castShadow = true;
    mallPodium.receiveShadow = true;
    group.add(mallPodium);

    // 2. APL Tower (Pencakar langit utama, tinggi ~188m / 92 unit)
    const aplTower = new THREE.Mesh(new THREE.BoxGeometry(22, 92, 18), aplGlassMat);
    aplTower.position.set(-16, 46, -12);
    aplTower.castShadow = true;
    group.add(aplTower);

    // Mahkota miring APL Tower
    const aplCrown = new THREE.Mesh(new THREE.BoxGeometry(20, 8, 16), aplGlassMat);
    aplCrown.position.set(-16, 94, -12);
    aplCrown.rotation.x = 0.2;
    group.add(aplCrown);

    // 3. Neo Soho Tower (Arsitektur lengkung modern)
    const sohoTower = new THREE.Mesh(new THREE.BoxGeometry(20, 74, 20), sohoMat);
    sohoTower.position.set(22, 37, 18);
    sohoTower.rotation.y = 0.15;
    sohoTower.castShadow = true;
    group.add(sohoTower);

    // 4. Tribeca Park (Taman terbuka hijau di tengah mall)
    const tribeca = new THREE.Mesh(new THREE.CylinderGeometry(14, 15, 1.2, 16), parkMat);
    tribeca.position.set(-4, 15.6, 12);
    tribeca.receiveShadow = true;
    group.add(tribeca);

    // 5. Eco Skywalk (Jembatan lengkung ikonik melintasi jalan dari Central Park ke Neo Soho)
    const skywalk = new THREE.Mesh(new THREE.BoxGeometry(28, 3.2, 4.5), skywalkMat);
    skywalk.position.set(10, 18, 6);
    skywalk.rotation.y = -0.55;
    skywalk.castShadow = true;
    group.add(skywalk);

    // 6. Menara Residensial Mediterania Garden
    [-18, 18].forEach((xOffset) => {
      const resTower = new THREE.Mesh(
        new THREE.BoxGeometry(16, 58, 16),
        new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.6 })
      );
      resTower.position.set(xOffset, 29, -32);
      resTower.castShadow = true;
      group.add(resTower);
    });

    return group;
  }

  /**
   * 24. Mall Taman Anggrek & Kondominium (Jakarta Barat)
   * Megamall terbesar dengan Guinness World Record LED facade screen & 8 condomiunium towers.
   */
  static createMallTamanAnggrek() {
    const group = new THREE.Group();
    const podiumMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.5 });
    const condoMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.45 });
    const ledMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 1.2,
      roughness: 0.15
    });
    ledMat.name = 'led-taman-anggrek';

    // 1. Megamall Grand Podium
    const mallPodium = new THREE.Mesh(new THREE.BoxGeometry(68, 16, 48), podiumMat);
    mallPodium.position.set(0, 8, 0);
    mallPodium.castShadow = true;
    mallPodium.receiveShadow = true;
    group.add(mallPodium);

    // 2. Giant LED Facade Screen (Rekor Dunia Guinness menghadap Jl. S. Parman)
    const ledScreen = new THREE.Mesh(new THREE.BoxGeometry(64, 11, 1.2), ledMat);
    ledScreen.position.set(0, 9.5, 24.5);
    group.add(ledScreen);

    // 3. 8 Menara Kondominium Ikonik (2 baris x 4 menara kembar, tinggi ~150m / 72 unit)
    const xOffsets = [-24, -8, 8, 24];
    const zOffsets = [-12, 10];

    xOffsets.forEach((x) => {
      zOffsets.forEach((z) => {
        const tower = new THREE.Mesh(new THREE.BoxGeometry(12, 70, 12), condoMat);
        tower.position.set(x, 43, z);
        tower.castShadow = true;
        group.add(tower);

        // Mahkota bertingkat kondominium
        const crown = new THREE.Mesh(
          new THREE.BoxGeometry(9, 5, 9),
          new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.5 })
        );
        crown.position.set(x, 80, z);
        group.add(crown);
      });
    });

    return group;
  }

  /**
   * 25. Kawasan Pendidikan UNTAR & Universitas Trisakti (Grogol)
   * Kampus bersejarah, Menara Tarumanagara & Monumen Tragedi 12 Mei 1998.
   */
  static createKawasanGrogol() {
    const group = new THREE.Group();
    const brickMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.7 });
    const creamMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.5 });
    const trisaktiMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.45 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.75, roughness: 0.2 });

    // 1. Menara Utama UNTAR I (Gedung M / Tarumanagara)
    const untarTower = new THREE.Mesh(new THREE.BoxGeometry(22, 52, 18), creamMat);
    untarTower.position.set(-12, 26, -10);
    untarTower.castShadow = true;
    group.add(untarTower);

    // Aksen Fasad Merah Bata UNTAR
    const untarFront = new THREE.Mesh(new THREE.BoxGeometry(14, 48, 2), brickMat);
    untarFront.position.set(-12, 24, 0.1);
    group.add(untarFront);

    // 2. Kampus Universitas Trisakti (Gedung Rektorat & Fakultas)
    const trisaktiHall = new THREE.Mesh(new THREE.BoxGeometry(32, 28, 20), trisaktiMat);
    trisaktiHall.position.set(16, 14, 8);
    trisaktiHall.castShadow = true;
    group.add(trisaktiHall);

    // Gedung Pascasarjana Kaca
    const pascaTower = new THREE.Mesh(new THREE.BoxGeometry(16, 38, 14), glassMat);
    pascaTower.position.set(16, 19, -14);
    pascaTower.castShadow = true;
    group.add(pascaTower);

    // 3. Monumen Tragedi 12 Mei 1998 (Plaza lingkaran dan tugu peringatan reformasi)
    const monumentPlaza = new THREE.Mesh(
      new THREE.CylinderGeometry(7, 7, 0.8, 16),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 })
    );
    monumentPlaza.position.set(0, 0.4, 20);
    group.add(monumentPlaza);

    const monumentSpire = new THREE.Mesh(
      new THREE.ConeGeometry(1.6, 9, 4),
      new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.4 })
    );
    monumentSpire.position.set(0, 5, 20);
    group.add(monumentSpire);

    // 4. Jembatan Penyeberangan Penghubung Antar-Kampus
    const campusBridge = new THREE.Mesh(
      new THREE.BoxGeometry(24, 2.5, 3.8),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.5 })
    );
    campusBridge.position.set(2, 10, -2);
    group.add(campusBridge);

    return group;
  }

  /**
   * 26. Pusat Medis Nasional: RS Jantung Harapan Kita & RS Kanker Dharmais (Slipi)
   */
  static createPusatMedisSlipi() {
    const group = new THREE.Group();
    const whiteMedMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });
    const dharmaisMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, metalness: 0.6, roughness: 0.25 });
    const redCrossMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });

    // 1. RS Jantung & Pembuluh Darah Harapan Kita (Bentuk Ventrikuler)
    const hkMain = new THREE.Mesh(new THREE.BoxGeometry(34, 32, 24), whiteMedMat);
    hkMain.position.set(-18, 16, 0);
    hkMain.castShadow = true;
    group.add(hkMain);

    // Simbol Palang Merah Harapan Kita
    const crossV = new THREE.Mesh(new THREE.BoxGeometry(2, 8, 0.4), redCrossMat);
    crossV.position.set(-18, 26, 12.2);
    group.add(crossV);
    const crossH = new THREE.Mesh(new THREE.BoxGeometry(8, 2, 0.4), redCrossMat);
    crossH.position.set(-18, 26, 12.2);
    group.add(crossH);

    // 2. RS Kanker Dharmais (Menara Modern Kaca Hijau Toska)
    const dharmaisTower = new THREE.Mesh(new THREE.BoxGeometry(24, 46, 22), dharmaisMat);
    dharmaisTower.position.set(18, 23, -4);
    dharmaisTower.castShadow = true;
    group.add(dharmaisTower);

    // 3. Jembatan Skybridge Penghubung Medis
    const medBridge = new THREE.Mesh(
      new THREE.BoxGeometry(18, 2.6, 3.8),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.4 })
    );
    medBridge.position.set(0, 14, -2);
    group.add(medBridge);

    return group;
  }

  /**
   * 27. Sentra Bisnis Slipi (Wisma Barito Pacific & Grand Slipi Tower)
   */
  static createSentraBisnisSlipi() {
    const group = new THREE.Group();
    const baritoGlass = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      metalness: 0.8,
      roughness: 0.15
    });
    const grandSlipiMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      metalness: 0.75,
      roughness: 0.2
    });

    // 1. Wisma Barito Pacific (Twin Towers kaca biru)
    [-14, 14].forEach((x) => {
      const barito = new THREE.Mesh(new THREE.BoxGeometry(16, 56, 16), baritoGlass);
      barito.position.set(x, 28, -12);
      barito.castShadow = true;
      group.add(barito);

      // Mahkota piramida modern
      const crown = new THREE.Mesh(new THREE.ConeGeometry(9, 6, 4), baritoGlass);
      crown.position.set(x, 59, -12);
      crown.rotation.y = Math.PI / 4;
      group.add(crown);
    });

    // 2. Grand Slipi Tower (Menara Silinder Spiral Modern)
    const grandSlipi = new THREE.Mesh(new THREE.CylinderGeometry(11, 12, 68, 24), grandSlipiMat);
    grandSlipi.position.set(0, 34, 16);
    grandSlipi.castShadow = true;
    group.add(grandSlipi);

    return group;
  }

  /**
   * 29. Kompleks Pasar Tanah Abang (Blok A, Blok B & Skybridge Jatibaru)
   * Pusat grosir tekstil terbesar se-Asia Tenggara dengan kubah toska khas Blok A & skybridge jalan raya.
   */
  static createPasarTanahAbang() {
    const group = new THREE.Group();
    const blokAMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5 });
    const blokBMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const domeMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.35, metalness: 0.3 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.8, roughness: 0.2 });
    const skybridgeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      roughness: 0.25
    });

    // 1. Blok A (Podium Grosir Utama, 16 lantai)
    const blokA = new THREE.Mesh(new THREE.BoxGeometry(46, 32, 38), blokAMat);
    blokA.position.set(-10, 16, -6);
    blokA.castShadow = true;
    blokA.receiveShadow = true;
    group.add(blokA);

    // Kubah Hijau Toska Ikonik di atas Atap Blok A
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(7.5, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2),
      domeMat
    );
    dome.position.set(-10, 32, -6);
    dome.castShadow = true;
    group.add(dome);

    // Spire mahkota kubah
    const spire = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.6, 5, 8),
      new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.8 })
    );
    spire.position.set(-10, 41, -6);
    group.add(spire);

    // 2. Blok B (Gedung Berdampingan)
    const blokB = new THREE.Mesh(new THREE.BoxGeometry(36, 38, 30), blokBMat);
    blokB.position.set(24, 19, 4);
    blokB.castShadow = true;
    group.add(blokB);

    // Dinding Kaca Blok B
    const bGlass = new THREE.Mesh(new THREE.BoxGeometry(32, 32, 1.5), glassMat);
    bGlass.position.set(24, 20, 19.5);
    group.add(bGlass);

    // 3. Skybridge Jatibaru (Jembatan Penyeberangan Multiguna Melintang di Atas Jalan Raya)
    const skybridge = new THREE.Mesh(new THREE.BoxGeometry(52, 4.2, 5.5), skybridgeMat);
    skybridge.position.set(-8, 9, 22);
    skybridge.rotation.y = 0.15;
    skybridge.castShadow = true;
    group.add(skybridge);

    // Pilar Penyangga Skybridge
    [-20, 0, 20].forEach((ox) => {
      const pier = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 1.0, 9, 8),
        new THREE.MeshStandardMaterial({ color: 0x64748b })
      );
      pier.position.set(-8 + ox, 4.5, 22);
      group.add(pier);
    });

    // 4. Metro Tanah Abang & Blok F (Ruko & Toko Tekstil)
    const metro = new THREE.Mesh(
      new THREE.BoxGeometry(22, 24, 26),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.6 })
    );
    metro.position.set(-28, 12, 18);
    metro.castShadow = true;
    group.add(metro);

    return group;
  }

  /**
   * 30. Stasiun KRL Tanah Abang & Dipo Transit Hub
   * Simpul transit kereta api komuter lintas lingkar barat dengan kanopi lengkung baja & peron bertingkat.
   */
  static createStasiunTanahAbang() {
    const group = new THREE.Group();
    const stMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const blueMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.5 });
    const canopyMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.6,
      roughness: 0.3,
      side: THREE.DoubleSide
    });
    const trackMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.6 });

    // 1. Concourse & Gedung Stasiun Utama
    const mainStation = new THREE.Mesh(new THREE.BoxGeometry(44, 15, 24), stMat);
    mainStation.position.set(0, 7.5, -8);
    mainStation.castShadow = true;
    group.add(mainStation);

    // Lis biru khas KAI Commuter
    const blueStripe = new THREE.Mesh(new THREE.BoxGeometry(44.5, 2.2, 24.5), blueMat);
    blueStripe.position.set(0, 13, -8);
    group.add(blueStripe);

    // 2. Kanopi Lengkung Peron Baja di Atas Jalur Rel
    const canopyGeo = new THREE.CylinderGeometry(14, 14, 56, 16, 1, true, 0, Math.PI);
    canopyGeo.rotateZ(Math.PI / 2);
    canopyGeo.rotateY(Math.PI / 2);
    const canopy = new THREE.Mesh(canopyGeo, canopyMat);
    canopy.position.set(0, 11, 14);
    canopy.castShadow = true;
    group.add(canopy);

    // 3. Jembatan Penyeberangan Penumpang (JPO Peron)
    const jpo = new THREE.Mesh(
      new THREE.BoxGeometry(10, 3.8, 32),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.4 })
    );
    jpo.position.set(12, 10.5, 8);
    jpo.castShadow = true;
    group.add(jpo);

    // 4. Peron & Bantalan Rel Kereta
    const platform = new THREE.Mesh(new THREE.BoxGeometry(48, 1.2, 26), trackMat);
    platform.position.set(0, 0.6, 14);
    platform.receiveShadow = true;
    group.add(platform);

    return group;
  }

  /**
   * 31. Stasiun KRL Palmerah & Menara Kompas Gramedia
   * Gerbang transit Senayan-Palmerah dengan kanopi lengkung putih & twin tower media Kompas Gramedia.
   */
  static createStasiunPalmerah() {
    const group = new THREE.Group();
    const stationMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const mediaGlassMat = new THREE.MeshStandardMaterial({
      color: 0x059669,
      metalness: 0.8,
      roughness: 0.2
    });
    const mediaMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });

    // 1. Bangunan Stasiun Palmerah Berkanopi Lengkung Modern
    const canopyGeo = new THREE.CylinderGeometry(11, 11, 42, 16, 1, true, 0, Math.PI);
    canopyGeo.rotateZ(Math.PI / 2);
    canopyGeo.rotateY(0.45);
    const stationCanopy = new THREE.Mesh(canopyGeo, stationMat);
    stationCanopy.position.set(-12, 8.5, -8);
    stationCanopy.castShadow = true;
    group.add(stationCanopy);

    const stationBase = new THREE.Mesh(new THREE.BoxGeometry(36, 6, 18), stationMat);
    stationBase.position.set(-12, 3, -8);
    stationBase.rotation.y = 0.45;
    group.add(stationBase);

    // 2. Menara Multimedia Kompas Gramedia (Tower Utama, 26 lantai)
    const kompasTower1 = new THREE.Mesh(new THREE.BoxGeometry(18, 62, 18), mediaGlassMat);
    kompasTower1.position.set(16, 31, 8);
    kompasTower1.castShadow = true;
    group.add(kompasTower1);

    // Menara Kompas Gramedia Tower 2
    const kompasTower2 = new THREE.Mesh(new THREE.BoxGeometry(16, 48, 15), mediaMat);
    kompasTower2.position.set(28, 24, -10);
    kompasTower2.castShadow = true;
    group.add(kompasTower2);

    // Skybridge Penghubung Menara Kompas
    const bridge = new THREE.Mesh(
      new THREE.BoxGeometry(15, 3.2, 4.5),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.4 })
    );
    bridge.position.set(22, 32, -1);
    bridge.rotation.y = -0.55;
    group.add(bridge);

    return group;
  }

  /**
   * 32. Kampus Utama BINUS University (Anggrek & Syahdan)
   * Kampus teknologi terkemuka dengan gedung bentuk L ikonik, aksen kuning/oranye & atrium kaca.
   */
  static createBinusUniversity() {
    const group = new THREE.Group();
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
    const orangeMat = new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.4 });
    const yellowMat = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.4 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.8, roughness: 0.18 });

    // 1. Gedung Kampus Anggrek (Bentuk L Raksasa)
    const wingA = new THREE.Mesh(new THREE.BoxGeometry(46, 38, 18), wallMat);
    wingA.position.set(0, 19, -12);
    wingA.castShadow = true;
    group.add(wingA);

    const wingB = new THREE.Mesh(new THREE.BoxGeometry(18, 38, 34), wallMat);
    wingB.position.set(14, 19, 14);
    wingB.castShadow = true;
    group.add(wingB);

    // 2. Fasad Aksen Warna Identitas BINUS (Oranye & Kuning)
    const orangeStripe = new THREE.Mesh(new THREE.BoxGeometry(46.5, 4, 2), orangeMat);
    orangeStripe.position.set(0, 32, -2.5);
    group.add(orangeStripe);

    const yellowStripe = new THREE.Mesh(new THREE.BoxGeometry(2, 4, 34.5), yellowMat);
    yellowStripe.position.set(4.5, 32, 14);
    group.add(yellowStripe);

    // 3. Atrium Kaca Transparan di Tengah Sudut L
    const atrium = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 36, 16), glassMat);
    atrium.position.set(4, 18, -2);
    atrium.castShadow = true;
    group.add(atrium);

    // 4. Gedung Kampus Syahdan (Annex Barat)
    const syahdan = new THREE.Mesh(
      new THREE.BoxGeometry(24, 26, 20),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.55 })
    );
    syahdan.position.set(-26, 13, 16);
    syahdan.castShadow = true;
    group.add(syahdan);

    return group;
  }

  /**
   * 33. Superblok Mediterania Garden Residences (Tanjung Duren)
   * Cluster 4 menara kondominium kembar bertingkat 30 lantai dengan balkon putih berundak & ruko kuliner.
   */
  static createMediteraniaTanjungDuren() {
    const group = new THREE.Group();
    const towerMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
    const terracottaMat = new THREE.MeshStandardMaterial({ color: 0xc2410c, roughness: 0.7 });
    const podiumMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const poolMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.2, metalness: 0.8 });

    // 1. Podium Komersial Ruko & Parkir
    const podium = new THREE.Mesh(new THREE.BoxGeometry(58, 10, 52), podiumMat);
    podium.position.set(0, 5, 0);
    podium.castShadow = true;
    podium.receiveShadow = true;
    group.add(podium);

    // 2. Kolam Renang Laguna Resort di Atas Podium
    const pool = new THREE.Mesh(new THREE.BoxGeometry(22, 0.4, 16), poolMat);
    pool.position.set(0, 10.3, 0);
    group.add(pool);

    // 3. Cluster 4 Menara Kembar Kondominium
    const offsets = [
      [-18, -16],
      [18, -16],
      [-18, 16],
      [18, 16]
    ];

    offsets.forEach(([ox, oz]) => {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(15, 66, 14), towerMat);
      tower.position.set(ox, 43, oz);
      tower.castShadow = true;
      group.add(tower);

      // Aksen Terakota Mahkota Atap
      const crown = new THREE.Mesh(new THREE.BoxGeometry(16, 4, 15), terracottaMat);
      crown.position.set(ox, 77, oz);
      group.add(crown);
    });

    return group;
  }

  /**
   * Kereta Rel Listrik (KRL) Commuter Line Train Consist (Series JR 205 / Tokyo Metro)
   * 4-car commuter train with stainless-steel body, signature red & yellow stripes,
   * dark tinted passenger windows, pantographs, and driver cab headlights.
   */
  static createSingleKRLCar(c, cars = 4) {
    const carLen = 17;
    const gap = 0.9;
    const stainlessMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.8,
      roughness: 0.25
    });
    const redStripeMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      roughness: 0.4
    });
    const yellowStripeMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      roughness: 0.4
    });
    const windowGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.1
    });
    const bogieMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.7,
      roughness: 0.6
    });
    const pantographMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.8,
      roughness: 0.3
    });
    const headlightMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });

    const carGroup = new THREE.Group();

    // Main Car Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(3.1, 2.9, carLen), stainlessMat);
    body.position.set(0, 2.1, 0);
    body.castShadow = true;
    body.receiveShadow = true;
    carGroup.add(body);

    // Red Stripe (KAI Commuter Red Band)
    const redBand = new THREE.Mesh(new THREE.BoxGeometry(3.15, 0.4, carLen), redStripeMat);
    redBand.position.set(0, 2.3, 0);
    carGroup.add(redBand);

    // Yellow Accent Stripe
    const yellowBand = new THREE.Mesh(new THREE.BoxGeometry(3.16, 0.15, carLen), yellowStripeMat);
    yellowBand.position.set(0, 2.05, 0);
    carGroup.add(yellowBand);

    // Passenger Windows Strip (continuous dark tinted glass)
    const winL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.75, carLen * 0.85), windowGlassMat);
    winL.position.set(1.56, 2.5, 0);
    carGroup.add(winL);

    const winR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.75, carLen * 0.85), windowGlassMat);
    winR.position.set(-1.56, 2.5, 0);
    carGroup.add(winR);

    // Wheel Bogies (front and rear)
    [-carLen * 0.32, carLen * 0.32].forEach((bz) => {
      const bogie = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.6, 3.8), bogieMat);
      bogie.position.set(0, 0.45, bz);
      carGroup.add(bogie);
    });

    // Pantograph on cars 1 and 3 (0-indexed: c === 0 || c === 2)
    if (c === 0 || c === 2) {
      const panto = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.5, 2.8), pantographMat);
      panto.position.set(0, 3.8, carLen * 0.28);
      carGroup.add(panto);
    }

    // Driver Cab for Leading (Car 0) and Trailing (Car 3)
    if (c === 0) {
      const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.9, 0.2), windowGlassMat);
      cabGlass.position.set(0, 2.5, -carLen * 0.5 - 0.05);
      carGroup.add(cabGlass);

      [-0.9, 0.9].forEach((hx) => {
        const light = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.15, 8), headlightMat);
        light.rotation.x = Math.PI / 2;
        light.position.set(hx, 1.3, -carLen * 0.5 - 0.05);
        carGroup.add(light);
      });
    } else if (c === cars - 1) {
      const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.9, 0.2), windowGlassMat);
      cabGlass.position.set(0, 2.5, carLen * 0.5 + 0.05);
      carGroup.add(cabGlass);

      [-0.9, 0.9].forEach((hx) => {
        const light = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.15, 8), headlightMat);
        light.rotation.x = Math.PI / 2;
        light.position.set(hx, 1.3, carLen * 0.5 + 0.05);
        carGroup.add(light);
      });
    }

    // Gangway bellow connector between cars
    if (c < cars - 1) {
      const gangway = new THREE.Mesh(new THREE.BoxGeometry(2.0, 2.4, gap + 0.1), bogieMat);
      gangway.position.set(0, 1.9, carLen * 0.5 + gap * 0.5);
      carGroup.add(gangway);
    }

    return carGroup;
  }

  /**
   * Kereta Rel Listrik (KRL) Commuter Line Train Consist (Series JR 205 / Tokyo Metro)
   * 4-car commuter train with stainless-steel body, signature red & yellow stripes,
   * dark tinted passenger windows, pantographs, and driver cab headlights.
   */
  static createKRLCommuterTrain(cars = 4) {
    const group = new THREE.Group();
    const carLen = 17;
    const gap = 0.9;

    for (let c = 0; c < cars; c++) {
      const car = this.createSingleKRLCar(c, cars);
      const cz = (c - (cars - 1) / 2) * (carLen + gap);
      car.position.set(0, 0, cz);
      group.add(car);
    }

    return group;
  }

  /**
   * Kereta MRT Jakarta (Ratangga - Nippon Sharyo)
   * 4-car train consist with stainless-steel body, signature MRT navy blue & sky blue livery,
   * aerodynamic cab nose, continuous dark tinted windows, and LED headlights.
   */
  static createSingleMRTRatanggaCar(c, cars = 4) {
    const carLen = 16.5;
    const gap = 0.85;

    const stainlessMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      metalness: 0.85,
      roughness: 0.25
    });
    const navyBlueMat = new THREE.MeshStandardMaterial({
      color: 0x1e3a8a,
      metalness: 0.5,
      roughness: 0.35
    });
    const skyBlueMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.4,
      roughness: 0.4
    });
    const windowGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.15,
      metalness: 0.85
    });
    const bogieMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.5,
      roughness: 0.8
    });
    const pantographMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.8,
      roughness: 0.3
    });
    const headlightMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });

    const carGroup = new THREE.Group();

    // Main Car Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(3.1, 2.8, carLen), stainlessMat);
    body.position.set(0, 2.05, 0);
    body.castShadow = true;
    body.receiveShadow = true;
    carGroup.add(body);

    // MRT Navy Blue Top Roof Band
    const roofBand = new THREE.Mesh(new THREE.BoxGeometry(3.12, 0.45, carLen), navyBlueMat);
    roofBand.position.set(0, 3.25, 0);
    carGroup.add(roofBand);

    // MRT Sky Blue Belt Line
    const skyBlueBand = new THREE.Mesh(new THREE.BoxGeometry(3.14, 0.3, carLen), skyBlueMat);
    skyBlueBand.position.set(0, 1.35, 0);
    carGroup.add(skyBlueBand);

    // Passenger Windows Strip (continuous dark tinted glass)
    const winL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.85, carLen * 0.88), windowGlassMat);
    winL.position.set(1.56, 2.3, 0);
    carGroup.add(winL);

    const winR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.85, carLen * 0.88), windowGlassMat);
    winR.position.set(-1.56, 2.3, 0);
    carGroup.add(winR);

    // Wheel Bogies (front and rear)
    [-carLen * 0.32, carLen * 0.32].forEach((bz) => {
      const bogie = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.55, 3.6), bogieMat);
      bogie.position.set(0, 0.45, bz);
      carGroup.add(bogie);
    });

    // Pantograph on cars 1 and 2
    if (c === 1 || c === 2) {
      const panto = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.45, 2.5), pantographMat);
      panto.position.set(0, 3.7, carLen * 0.25);
      carGroup.add(panto);
    }

    // Aerodynamic Sloped Driver Cab for Leading (Car 0) and Trailing (Car 3)
    if (c === 0) {
      // Sloped front nose
      const noseGeo = new THREE.BoxGeometry(3.08, 2.7, 1.8);
      const nose = new THREE.Mesh(noseGeo, navyBlueMat);
      nose.position.set(0, 2.05, -carLen * 0.5 - 0.7);
      carGroup.add(nose);

      // Curved Cab Windshield
      const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(2.7, 1.1, 0.25), windowGlassMat);
      cabGlass.position.set(0, 2.4, -carLen * 0.5 - 1.55);
      cabGlass.rotation.x = 0.2;
      carGroup.add(cabGlass);

      // Dual LED Headlights
      [-0.95, 0.95].forEach((hx) => {
        const light = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.15, 8), headlightMat);
        light.rotation.x = Math.PI / 2;
        light.position.set(hx, 1.35, -carLen * 0.5 - 1.6);
        carGroup.add(light);
      });
    } else if (c === cars - 1) {
      // Sloped rear nose
      const noseGeo = new THREE.BoxGeometry(3.08, 2.7, 1.8);
      const nose = new THREE.Mesh(noseGeo, navyBlueMat);
      nose.position.set(0, 2.05, carLen * 0.5 + 0.7);
      carGroup.add(nose);

      // Curved Cab Windshield
      const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(2.7, 1.1, 0.25), windowGlassMat);
      cabGlass.position.set(0, 2.4, carLen * 0.5 + 1.55);
      cabGlass.rotation.x = -0.2;
      carGroup.add(cabGlass);

      // Dual LED Headlights
      [-0.95, 0.95].forEach((hx) => {
        const light = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.15, 8), headlightMat);
        light.rotation.x = Math.PI / 2;
        light.position.set(hx, 1.35, carLen * 0.5 + 1.6);
        carGroup.add(light);
      });
    }

    // Gangway bellow connector between cars
    if (c < cars - 1) {
      const gangway = new THREE.Mesh(new THREE.BoxGeometry(1.9, 2.3, gap + 0.1), bogieMat);
      gangway.position.set(0, 1.85, carLen * 0.5 + gap * 0.5);
      carGroup.add(gangway);
    }

    return carGroup;
  }

  static createMRTRatanggaTrain(cars = 4) {
    const group = new THREE.Group();
    const carLen = 16.5;
    const gap = 0.85;

    for (let c = 0; c < cars; c++) {
      const car = this.createSingleMRTRatanggaCar(c, cars);
      const cz = (c - (cars - 1) / 2) * (carLen + gap);
      car.position.set(0, 0, cz);
      group.add(car);
    }

    return group;
  }

  /**
   * Kereta Api Antarkota Jarak Jauh PT KAI (Stasiun Pasar Senen)
   * Terdiri dari Lokomotif Diesel Elektrik CC 206 (General Electric CM20EMP)
   * dengan hidung ganda, striping oranye-biru khas KAI, dan rangkaian kereta
   * penumpang eksekutif/ekonomi stainless steel KAI beratap corrugated.
   */
  static createSingleKAIAntarkotaCar(c, cars = 4) {
    const locoLen = 17.5;
    const coachLen = 18.0;
    const carLen = c === 0 ? locoLen : coachLen;
    const gap = 0.9;

    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });
    const stainlessMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.88,
      roughness: 0.22
    });
    const orangeKAIMat = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      roughness: 0.4
    });
    const navyKAIMat = new THREE.MeshStandardMaterial({
      color: 0x1e3a8a,
      roughness: 0.35
    });
    const windowGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.15,
      metalness: 0.85
    });
    const bogieMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.6,
      roughness: 0.7
    });
    const headlightMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });

    const carGroup = new THREE.Group();

    if (c === 0) {
      // ==========================================
      // LOKOMOTIF CC 206 (GE CM20EMP)
      // ==========================================
      const locoBody = new THREE.Mesh(new THREE.BoxGeometry(2.9, 2.7, locoLen - 2.8), whiteMat);
      locoBody.position.set(0, 2.15, -0.6);
      locoBody.castShadow = true;
      carGroup.add(locoBody);

      // Aerodynamic Sloped Cab Noses (Front & Rear Double Cab)
      // Front Cab Nose
      const frontNose = new THREE.Mesh(new THREE.BoxGeometry(2.88, 2.3, 2.8), whiteMat);
      frontNose.position.set(0, 1.95, (locoLen - 2.8) * 0.5 + 0.8);
      frontNose.rotation.x = -0.15;
      frontNose.castShadow = true;
      carGroup.add(frontNose);

      // Signature KAI Orange & Blue Livery Stripes
      const orangeStripe = new THREE.Mesh(new THREE.BoxGeometry(2.94, 0.45, locoLen), orangeKAIMat);
      orangeStripe.position.set(0, 1.55, 0);
      carGroup.add(orangeStripe);

      const navyStripe = new THREE.Mesh(new THREE.BoxGeometry(2.94, 0.25, locoLen), navyKAIMat);
      navyStripe.position.set(0, 1.15, 0);
      carGroup.add(navyStripe);

      // Cab Windshields (Front & Rear)
      const windShieldF = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.75, 0.2), windowGlassMat);
      windShieldF.position.set(0, 2.45, locoLen * 0.5 + 0.1);
      windShieldF.rotation.x = -0.15;
      carGroup.add(windShieldF);

      // Rooftop Radiator & AC Units
      const radiator = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.45, 4.5), bogieMat);
      radiator.position.set(0, 3.65, -1.5);
      carGroup.add(radiator);

      // Dual High-Intensity LED Headlights
      [-0.8, 0.8].forEach((hx) => {
        const headlight = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.15, 8), headlightMat);
        headlight.rotation.x = Math.PI / 2;
        headlight.position.set(hx, 1.6, locoLen * 0.5 + 0.35);
        carGroup.add(headlight);
      });
    } else {
      // ==========================================
      // KERETA PENUMPANG STAINLESS STEEL KAI
      // ==========================================
      const coachBody = new THREE.Mesh(new THREE.BoxGeometry(3.0, 2.8, coachLen), stainlessMat);
      coachBody.position.set(0, 2.1, 0);
      coachBody.castShadow = true;
      coachBody.receiveShadow = true;
      carGroup.add(coachBody);

      // KAI Blue & Orange Accent Stripes along the windows
      const blueBand = new THREE.Mesh(new THREE.BoxGeometry(3.04, 0.35, coachLen), navyKAIMat);
      blueBand.position.set(0, 1.35, 0);
      carGroup.add(blueBand);

      const orangeAccent = new THREE.Mesh(new THREE.BoxGeometry(3.04, 0.18, coachLen), orangeKAIMat);
      orangeAccent.position.set(0, 1.65, 0);
      carGroup.add(orangeAccent);

      // Panoramic Tinted Passenger Windows
      const winL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.95, coachLen * 0.86), windowGlassMat);
      winL.position.set(1.52, 2.35, 0);
      carGroup.add(winL);

      const winR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.95, coachLen * 0.86), windowGlassMat);
      winR.position.set(-1.52, 2.35, 0);
      carGroup.add(winR);

      // Rooftop Corrugated Ribs & AC Units
      const acUnit = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.45, 3.8), whiteMat);
      acUnit.position.set(0, 3.65, 0);
      carGroup.add(acUnit);
    }

    // Steel Wheel Bogies (Front & Rear Bogies)
    [-carLen * 0.32, carLen * 0.32].forEach((bz) => {
      const bogieFrame = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.45, 3.8), bogieMat);
      bogieFrame.position.set(0, 0.55, bz);
      carGroup.add(bogieFrame);

      [-1.15, 1.15].forEach((wx) => {
        [-1.2, 0, 1.2].forEach((wz) => {
          const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.22, 10), bogieMat);
          wheel.rotation.z = Math.PI / 2;
          wheel.position.set(wx, 0.42, bz + wz);
          carGroup.add(wheel);
        });
      });
    });

    // Flexible rubber gangway connection
    if (c < cars - 1) {
      const gangway = new THREE.Mesh(new THREE.BoxGeometry(1.9, 2.4, gap + 0.1), bogieMat);
      gangway.position.set(0, 1.95, carLen * 0.5 + gap * 0.5);
      carGroup.add(gangway);
    }

    return carGroup;
  }

  static createKAIAntarkotaTrain(cars = 4) {
    const group = new THREE.Group();
    const coachLen = 18.0;
    const gap = 0.9;

    for (let c = 0; c < cars; c++) {
      const car = this.createSingleKAIAntarkotaCar(c, cars);
      const cz = (c - (cars - 1) / 2) * (coachLen + gap);
      car.position.set(0, 0, cz);
      group.add(car);
    }

    return group;
  }

  /**
   * Kereta LRT Jabodebek (PT INKA / PT KAI)
   * Terdiri dari rangkaian kereta ringan articulated berlivery merah marun-putih khas Jabodebek,
   * kabin aerodinamis modern, pantograf atap, dan bogie bantalan udara.
   */
  static createSingleLRTJabodebekCar(c, cars = 4) {
    const carLen = 16.5;
    const gap = 0.85;

    const redMarunMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.35 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });
    const windowGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.15,
      metalness: 0.85
    });
    const stainlessMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.85,
      roughness: 0.25
    });
    const bogieMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.6,
      roughness: 0.7
    });
    const pantographMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.8,
      roughness: 0.3
    });
    const headlightMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    const taillightMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });

    const carGroup = new THREE.Group();

    // 1. Lower Body Shell (Merah Marun Khas LRT Jabodebek)
    const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(2.85, 1.2, carLen), redMarunMat);
    lowerBody.position.set(0, 1.3, 0);
    lowerBody.castShadow = true;
    carGroup.add(lowerBody);

    // 2. White Signature Livery Stripe
    const whiteStripe = new THREE.Mesh(new THREE.BoxGeometry(2.88, 0.35, carLen), whiteMat);
    whiteStripe.position.set(0, 1.95, 0);
    carGroup.add(whiteStripe);

    // 3. Middle Window Band
    const windowBand = new THREE.Mesh(new THREE.BoxGeometry(2.86, 1.0, carLen * 0.88), windowGlassMat);
    windowBand.position.set(0, 2.5, 0);
    carGroup.add(windowBand);

    // 4. Upper Roof Cap & AC Units
    const roofCap = new THREE.Mesh(new THREE.BoxGeometry(2.82, 0.45, carLen), stainlessMat);
    roofCap.position.set(0, 3.15, 0);
    roofCap.castShadow = true;
    carGroup.add(roofCap);

    const acUnit = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.35, 3.6), whiteMat);
    acUnit.position.set(0, 3.45, 0);
    carGroup.add(acUnit);

    // 5. Aerodynamic Sloped Cabs (Front & Rear)
    if (c === 0) {
      // Front Driving Cab Nose (+Z)
      const frontNose = new THREE.Mesh(new THREE.BoxGeometry(2.82, 2.2, 2.4), redMarunMat);
      frontNose.position.set(0, 2.0, carLen * 0.5 + 0.6);
      frontNose.rotation.x = -0.22;
      frontNose.castShadow = true;
      carGroup.add(frontNose);

      const windshield = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.9, 0.2), windowGlassMat);
      windshield.position.set(0, 2.35, carLen * 0.5 + 1.25);
      windshield.rotation.x = -0.22;
      carGroup.add(windshield);

      // Dual High-Intensity LED Headlights
      [-0.8, 0.8].forEach((hx) => {
        const headlight = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.15, 8), headlightMat);
        headlight.rotation.x = Math.PI / 2;
        headlight.position.set(hx, 1.5, carLen * 0.5 + 1.5);
        carGroup.add(headlight);
      });
    } else if (c === cars - 1) {
      // Rear Driving Cab Nose (-Z)
      const rearNose = new THREE.Mesh(new THREE.BoxGeometry(2.82, 2.2, 2.4), redMarunMat);
      rearNose.position.set(0, 2.0, -carLen * 0.5 - 0.6);
      rearNose.rotation.x = 0.22;
      rearNose.castShadow = true;
      carGroup.add(rearNose);

      [-0.8, 0.8].forEach((hx) => {
        const taillight = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.15, 8), taillightMat);
        taillight.rotation.x = Math.PI / 2;
        taillight.position.set(hx, 1.5, -carLen * 0.5 - 1.5);
        carGroup.add(taillight);
      });
    }

    // 6. Rooftop Pantograph (on Car 1)
    if (c === 1) {
      const pantoBase = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.15, 1.6), bogieMat);
      pantoBase.position.set(0, 3.4, 2.5);
      carGroup.add(pantoBase);

      const arm1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.2, 6), pantographMat);
      arm1.rotation.x = Math.PI / 3.5;
      arm1.position.set(0, 3.85, 2.2);
      carGroup.add(arm1);

      const arm2 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.2, 6), pantographMat);
      arm2.rotation.x = -Math.PI / 3.5;
      arm2.position.set(0, 4.3, 2.45);
      carGroup.add(arm2);

      const head = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.06, 0.2), pantographMat);
      head.position.set(0, 4.8, 2.6);
      carGroup.add(head);
    }

    // 7. Underframe Wheelsets & Bogies
    [-5.0, 5.0].forEach((bz) => {
      const bogieFrame = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.35, 3.2), bogieMat);
      bogieFrame.position.set(0, 0.5, bz);
      carGroup.add(bogieFrame);

      [-1.1, 1.1].forEach((wx) => {
        [-0.9, 0.9].forEach((wz) => {
          const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.22, 10), bogieMat);
          wheel.rotation.z = Math.PI / 2;
          wheel.position.set(wx, 0.42, bz + wz);
          carGroup.add(wheel);
        });
      });
    });

    return carGroup;
  }

  static createLRTJabodebekTrain(cars = 4) {
    const group = new THREE.Group();
    const carLen = 16.5;
    const gap = 0.85;

    for (let c = 0; c < cars; c++) {
      const car = this.createSingleLRTJabodebekCar(c, cars);
      const cz = (c - (cars - 1) / 2) * (carLen + gap);
      car.position.set(0, 0, cz);
      group.add(car);
    }

    return group;
  }


  /**
   * 34. Gedung Sekretariat Jenderal ASEAN
   * Menara kembar ramah lingkungan 16 lantai di Jl. Sisingamangaraja dengan skybridge kaca 40m dan plaza bendera diplomatik.
   */
  static createSekretariatAsean() {
    const group = new THREE.Group();
    const emeraldGlassMat = new THREE.MeshStandardMaterial({
      color: 0x047857,
      metalness: 0.85,
      roughness: 0.18,
      emissive: 0x064e3b,
      emissiveIntensity: 0.25
    });
    const whiteConcreteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const graniteMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 });
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.85, roughness: 0.2 });

    // 1. Diplomatic Courtyard & Plaza
    const plaza = new THREE.Mesh(new THREE.BoxGeometry(48, 0.6, 36), graniteMat);
    plaza.position.set(0, 0.3, 0);
    plaza.receiveShadow = true;
    group.add(plaza);

    // Front Green Lawn Strips
    const lawn = new THREE.Mesh(new THREE.BoxGeometry(44, 0.7, 8), grassMat);
    lawn.position.set(0, 0.35, 12);
    lawn.receiveShadow = true;
    group.add(lawn);

    // Semicircular Flagpoles (11 ASEAN + Dialogue Partner Flags)
    for (let i = -5; i <= 5; i++) {
      const angle = (i / 5) * (Math.PI / 3);
      const fx = Math.sin(angle) * 16;
      const fz = 10 + Math.cos(angle) * 5;
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.12, 7, 8),
        new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9 })
      );
      pole.position.set(fx, 3.8, fz);
      pole.castShadow = true;
      group.add(pole);

      const flagColor = i === 0 ? 0x1d4ed8 : (i % 2 === 0 ? 0xdc2626 : 0xfacc15);
      const flag = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.6, 0.05), new THREE.MeshBasicMaterial({ color: flagColor }));
      flag.position.set(fx + 0.6, 6.8, fz);
      group.add(flag);
    }

    // 2. Central Podium (Lantai 1-4)
    const podium = new THREE.Mesh(new THREE.BoxGeometry(42, 8, 26), whiteConcreteMat);
    podium.position.set(0, 4.3, -2);
    podium.castShadow = true;
    podium.receiveShadow = true;
    group.add(podium);

    // Grand Entrance Glass Canopy
    const canopy = new THREE.Mesh(
      new THREE.BoxGeometry(18, 0.5, 8),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.7, roughness: 0.2, transparent: true, opacity: 0.85 })
    );
    canopy.position.set(0, 4.6, 11);
    canopy.castShadow = true;
    group.add(canopy);

    // 3. Menara Kembar (Twin Towers - 16 lantai, ~52m)
    [-13, 13].forEach((tx) => {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(13.5, 46, 17), emeraldGlassMat);
      tower.position.set(tx, 27, -2);
      tower.castShadow = true;
      tower.receiveShadow = true;
      group.add(tower);

      // White Vertical Solar Louvre Fins
      [-6, -2, 2, 6].forEach((lx) => {
        const fin = new THREE.Mesh(new THREE.BoxGeometry(0.3, 46, 0.8), whiteConcreteMat);
        fin.position.set(tx + lx, 27, 6.7);
        fin.castShadow = true;
        group.add(fin);
      });

      // Rooftop Penthouse & Solar Trellis
      const roof = new THREE.Mesh(new THREE.BoxGeometry(11, 3.5, 14), whiteConcreteMat);
      roof.position.set(tx, 51.5, -2);
      group.add(roof);
    });

    // 4. Skybridge Kaca Penghubung (Lantai 9-11)
    const skybridge = new THREE.Mesh(
      new THREE.BoxGeometry(12.5, 8.5, 10),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        metalness: 0.85,
        roughness: 0.2,
        emissive: 0x0284c7,
        emissiveIntensity: 0.35
      })
    );
    skybridge.position.set(0, 36, -2);
    skybridge.castShadow = true;
    group.add(skybridge);

    // Golden ASEAN Logo / Spire
    const logoEmblem = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.4, 16), goldMat);
    logoEmblem.rotation.x = Math.PI / 2;
    logoEmblem.position.set(0, 42, 3.2);
    group.add(logoEmblem);

    return group;
  }

  /**
   * 35. Simpang Temu CSW & Stasiun MRT ASEAN
   * Simpul integrasi transit 5 lantai berbentuk oval aerodinamis yang menyatukan MRT Layang & Halte Koridor 13 (23m).
   */
  static createCSWAseanHub() {
    const group = new THREE.Group();
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.65 });
    const tjBlueMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.6, roughness: 0.3 });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3
    });

    // 1. Central Oval Drum Hub (Bangunan Inti CSW 5 Lantai)
    const hubDrum = new THREE.Mesh(new THREE.CylinderGeometry(16, 18, 18, 32), whiteMat);
    hubDrum.position.set(0, 9, 0);
    hubDrum.scale.set(1.1, 1, 0.9);
    hubDrum.castShadow = true;
    hubDrum.receiveShadow = true;
    group.add(hubDrum);

    // Glass Bands (Jendela Melingkar Fasad CSW)
    [5, 9, 13, 17].forEach((hy) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(17, 0.35, 8, 32), glassMat);
      ring.rotation.x = Math.PI / 2;
      ring.scale.set(1.1, 0.9, 1);
      ring.position.set(0, hy, 0);
      group.add(ring);
    });

    // Central Skylight Dome on Top
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(7, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2),
      glassMat
    );
    dome.position.set(0, 18, 0);
    group.add(dome);

    // 2. Viaduk & Stasiun MRT ASEAN (Elevated Level ~10m, arah Utara-Selatan)
    const mrtTrack = new THREE.Mesh(new THREE.BoxGeometry(9.5, 2.5, 62), concreteMat);
    mrtTrack.position.set(0, 10, 0);
    mrtTrack.castShadow = true;
    group.add(mrtTrack);

    // Arched Canopy Stasiun MRT ASEAN
    const mrtCanopyGeo = new THREE.CylinderGeometry(5.8, 5.8, 38, 16, 1, true, 0, Math.PI);
    mrtCanopyGeo.rotateZ(Math.PI / 2);
    const mrtCanopy = new THREE.Mesh(mrtCanopyGeo, whiteMat);
    mrtCanopy.position.set(0, 13.5, 0);
    mrtCanopy.castShadow = true;
    group.add(mrtCanopy);

    // Single-pier Concrete Columns for MRT
    [-24, 24].forEach((pz) => {
      const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.5, 9, 12), concreteMat);
      pier.position.set(0, 4.5, pz);
      pier.castShadow = true;
      group.add(pier);
    });

    // 3. Elevated Busway Koridor 13 TransJakarta (Level 22m, arah Barat-Timur melintang tinggi)
    const brtTrack = new THREE.Mesh(new THREE.BoxGeometry(58, 2.8, 8), concreteMat);
    brtTrack.position.set(0, 21, 0);
    brtTrack.castShadow = true;
    group.add(brtTrack);

    // Elevated Halte CSW Transjakarta on Flyover
    const brtStation = new THREE.Mesh(new THREE.BoxGeometry(26, 3.8, 6.5), tjBlueMat);
    brtStation.position.set(0, 23.5, 0);
    brtStation.castShadow = true;
    group.add(brtStation);

    // High Flyover Support Piers (Pilar Raksasa 20m)
    [-22, 22].forEach((px) => {
      const highPier = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.6, 20, 12), concreteMat);
      highPier.position.set(px, 10, 0);
      highPier.castShadow = true;
      group.add(highPier);
    });

    // 4. Skywalk Pedestrian Bridges (Jembatan Lingkar Antar Sudut)
    [Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4].forEach((rad) => {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(3.5, 2.8, 14), whiteMat);
      arm.rotation.y = rad;
      arm.position.set(Math.sin(rad) * 19, 9, Math.cos(rad) * 19);
      arm.castShadow = true;
      group.add(arm);
    });

    return group;
  }

  /**
   * 36. Gedung Utama Kejaksaan Agung RI
   * Markas besar penegak hukum nasional berarsitektur neo-klasik modern 22 lantai (~85m) berhias mahkota keadilan emas.
   */
  static createKejaksaanAgung() {
    const group = new THREE.Group();
    const creamMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f4, roughness: 0.45 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35 });
    const darkGlassMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x0f172a,
      emissiveIntensity: 0.2
    });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.18 });

    // 1. Grand Base Podium & Terraced Courtyard
    const podium = new THREE.Mesh(new THREE.BoxGeometry(46, 3, 34), creamMat);
    podium.position.set(0, 1.5, 0);
    podium.receiveShadow = true;
    group.add(podium);

    // 2. Colonnaded Grand Entrance Portico
    const porticoRoof = new THREE.Mesh(new THREE.BoxGeometry(22, 1.8, 9), whiteMat);
    porticoRoof.position.set(0, 12, 13);
    porticoRoof.castShadow = true;
    group.add(porticoRoof);

    for (let c = -9; c <= 9; c += 3.6) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 9, 12), whiteMat);
      col.position.set(c, 7.5, 16.5);
      col.castShadow = true;
      group.add(col);
    }

    // 3. Main Central Tower (22 lantai, 65m tinggi scene)
    const centralTower = new THREE.Mesh(new THREE.BoxGeometry(25, 60, 20), creamMat);
    centralTower.position.set(0, 33, 0);
    centralTower.castShadow = true;
    centralTower.receiveShadow = true;
    group.add(centralTower);

    // Vertical Tinted Glass Strips on Central Facade
    [-7.5, 0, 7.5].forEach((vx) => {
      const glassStrip = new THREE.Mesh(new THREE.BoxGeometry(3.6, 52, 0.4), darkGlassMat);
      glassStrip.position.set(vx, 34, 10.2);
      group.add(glassStrip);
    });

    // 4. West & East Flanking Wings
    [-17, 17].forEach((wx) => {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(9.5, 42, 18), creamMat);
      wing.position.set(wx, 24, 0);
      wing.castShadow = true;
      wing.receiveShadow = true;
      group.add(wing);

      const wingRoof = new THREE.Mesh(new THREE.BoxGeometry(9.5, 1.5, 18), whiteMat);
      wingRoof.position.set(wx, 45.8, 0);
      group.add(wingRoof);
    });

    // 5. Tiered Classical Crown & Gold Finial Emblem
    const crown1 = new THREE.Mesh(new THREE.BoxGeometry(21, 3.5, 16), whiteMat);
    crown1.position.set(0, 64.5, 0);
    group.add(crown1);

    const crown2 = new THREE.Mesh(new THREE.BoxGeometry(15, 3.0, 11), whiteMat);
    crown2.position.set(0, 67.5, 0);
    group.add(crown2);

    // Gold Pedang & Timbangan Keadilan Spire
    const goldSpire = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.7, 7, 8), goldMat);
    goldSpire.position.set(0, 72.5, 0);
    goldSpire.castShadow = true;
    group.add(goldSpire);

    const goldEmblem = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.28, 8, 16), goldMat);
    goldEmblem.position.set(0, 73.5, 0);
    group.add(goldEmblem);

    return group;
  }

  /**
   * 37. M Bloc Space & Cagar Budaya Peruri
   * Sentra ruang kreatif urban berarsitektur tropis gaya Jengki 1950-an dengan fasad bata ekspos, atap miring pelana & amphitheater seni.
   */
  static createMBlocSpace() {
    const group = new THREE.Group();
    const brickMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.8 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xfafaf9, roughness: 0.5 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.75 });
    const alleyMat = new THREE.MeshStandardMaterial({ color: 0x57534e, roughness: 0.85 });
    const timberMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.7 });

    // 1. Creative Alleyway Pedestrian Boulevard
    const alley = new THREE.Mesh(new THREE.BoxGeometry(24, 0.4, 56), alleyMat);
    alley.position.set(0, 0.2, 0);
    alley.receiveShadow = true;
    group.add(alley);

    // 2. Deretan 4 Rumah Dinas Tropis Jengki 1950-an (Sisi Barat Alley)
    [-20, -7, 6, 19].forEach((hz) => {
      const houseGroup = new THREE.Group();

      // Lower Brick Wall
      const lowerWall = new THREE.Mesh(new THREE.BoxGeometry(8, 2.8, 9), brickMat);
      lowerWall.position.set(-6.5, 1.4, 0);
      lowerWall.castShadow = true;
      houseGroup.add(lowerWall);

      // Upper White Plastered Wall
      const upperWall = new THREE.Mesh(new THREE.BoxGeometry(8, 2.6, 9), whiteMat);
      upperWall.position.set(-6.5, 4.1, 0);
      upperWall.castShadow = true;
      houseGroup.add(upperWall);

      // Distinctive Asymmetric Angled Jengki Gabled Roof
      const roofGeo = new THREE.ConeGeometry(6.2, 3.2, 4);
      roofGeo.rotateY(Math.PI / 4);
      const roof = new THREE.Mesh(roofGeo, roofMat);
      roof.scale.set(1.1, 1, 1.4);
      roof.position.set(-6.5, 6.8, 0);
      roof.castShadow = true;
      houseGroup.add(roof);

      // Front Awning & Vintage Wooden Windows
      const awning = new THREE.Mesh(new THREE.BoxGeometry(2, 0.2, 6), timberMat);
      awning.position.set(-1.8, 3.2, 0);
      houseGroup.add(awning);

      houseGroup.position.set(0, 0, hz);
      group.add(houseGroup);
    });

    // 3. M Bloc Live House (Gedung Konser Musik & Hall Kreatif di Sisi Timur)
    const liveHouse = new THREE.Mesh(new THREE.BoxGeometry(10, 8.5, 22), whiteMat);
    liveHouse.position.set(6, 4.25, -12);
    liveHouse.castShadow = true;
    liveHouse.receiveShadow = true;
    group.add(liveHouse);

    // Colorful Artistic Mural Facade
    const mural = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 6, 18),
      new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.5, emissive: 0xbe185d, emissiveIntensity: 0.2 })
    );
    mural.position.set(0.9, 4.5, -12);
    group.add(mural);

    // 4. Outdoor Stepped Amphitheater (Ruang Terbuka Komunitas)
    for (let step = 1; step <= 4; step++) {
      const stepMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(step * 2.2, step * 2.2, 0.6, 16, 1, false, 0, Math.PI),
        timberMat
      );
      stepMesh.position.set(6, step * 0.4, 14);
      stepMesh.receiveShadow = true;
      group.add(stepMesh);
    }

    return group;
  }

  /**
   * 38. Stasiun MRT Blok M BCA & Plaza Blok M
   * Stasiun layang tersibuk MRT Jakarta dengan jalur elevated terintegrasi langsung melalui skybridge ke lantai 3 mall Plaza Blok M.
   */
  static createStasiunMRTBlokM() {
    const group = new THREE.Group();
    const mallMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.5 });
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.65 });
    const whiteCanopyMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });
    const bcaBlueMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.6,
      emissive: 0x0369a1,
      emissiveIntensity: 0.35
    });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.35
    });

    // 1. Gedung Plaza Blok M (Mall 8 Lantai di Sisi Barat)
    const mall = new THREE.Mesh(new THREE.BoxGeometry(34, 34, 38), mallMat);
    mall.position.set(-22, 17, 0);
    mall.castShadow = true;
    mall.receiveShadow = true;
    group.add(mall);

    // Atrium & Horizontal Glass Strips Mall
    [8, 16, 24].forEach((my) => {
      const mallGlass = new THREE.Mesh(new THREE.BoxGeometry(34.2, 2.5, 38.2), glassMat);
      mallGlass.position.set(-22, my, 0);
      group.add(mallGlass);
    });

    // Plaza Blok M Billboard Signage at Roof
    const sign = new THREE.Mesh(new THREE.BoxGeometry(16, 4, 1), bcaBlueMat);
    sign.position.set(-22, 36.5, 18.5);
    group.add(sign);

    // 2. Viaduk Jalur Rel Layang MRT Jakarta (Elevated Track Level ~12m)
    const track = new THREE.Mesh(new THREE.BoxGeometry(11, 2.8, 64), concreteMat);
    track.position.set(8, 12, 0);
    track.castShadow = true;
    group.add(track);

    // Arched Canopy Stasiun MRT Blok M BCA
    const stationCanopyGeo = new THREE.CylinderGeometry(7.2, 7.2, 44, 16, 1, true, 0, Math.PI);
    stationCanopyGeo.rotateZ(Math.PI / 2);
    const stationCanopy = new THREE.Mesh(stationCanopyGeo, whiteCanopyMat);
    stationCanopy.position.set(8, 16.5, 0);
    stationCanopy.castShadow = true;
    group.add(stationCanopy);

    // Signage Strip "BLOK M BCA"
    const mrtSign = new THREE.Mesh(new THREE.BoxGeometry(1, 1.8, 20), bcaBlueMat);
    mrtSign.position.set(13.8, 16, 0);
    group.add(mrtSign);

    // Concrete Pillars Supporting Elevated MRT Station
    [-22, 0, 22].forEach((pz) => {
      const colL = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.4, 11, 12), concreteMat);
      colL.position.set(4, 5.5, pz);
      colL.castShadow = true;
      group.add(colL);

      const colR = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.4, 11, 12), concreteMat);
      colR.position.set(12, 5.5, pz);
      colR.castShadow = true;
      group.add(colR);
    });

    // 3. Direct Skybridge Connection: Stasiun MRT -> Lantai 3 Plaza Blok M
    const skybridge = new THREE.Mesh(new THREE.BoxGeometry(18, 4.5, 7.5), glassMat);
    skybridge.position.set(-2, 13.5, 0);
    skybridge.castShadow = true;
    group.add(skybridge);

    return group;
  }

  /**
   * 39. Kawasan Niaga Melawai & Little Tokyo Blok M
   * Pusat ruko komersial legendaris 4-5 lantai dengan neon signage vertikal bilingual, gapura lampion merah, dan kanopi pejalan kaki.
   */
  static createDistrikMelawai() {
    const group = new THREE.Group();
    const roadMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });
    const sidewalkMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.6 });
    const awningMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.5 });
    const lanternMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      emissive: 0xef4444,
      emissiveIntensity: 0.8
    });

    // 1. Street Corridor & Sidewalk
    const street = new THREE.Mesh(new THREE.BoxGeometry(14, 0.2, 56), roadMat);
    street.position.set(0, 0.1, 0);
    street.receiveShadow = true;
    group.add(street);

    [-8, 8].forEach((sx) => {
      const sw = new THREE.Mesh(new THREE.BoxGeometry(4, 0.35, 56), sidewalkMat);
      sw.position.set(sx, 0.18, 0);
      sw.receiveShadow = true;
      group.add(sw);
    });

    // 2. Dual Shophouse Blocks (Row West & Row East)
    const rukoTones = [0xf5f5f4, 0xd6d3d1, 0xe2e8f0, 0xfef08a];
    const neonColors = [0xef4444, 0x06b6d4, 0xf59e0b, 0x8b5cf6, 0x10b981];

    [-15, 15].forEach((rx, rIdx) => {
      [-20, -7, 6, 19].forEach((rz, sIdx) => {
        const height = 16 + (sIdx % 3) * 3;
        const tone = rukoTones[(rIdx + sIdx) % rukoTones.length];
        const ruko = new THREE.Mesh(
          new THREE.BoxGeometry(10, height, 11),
          new THREE.MeshStandardMaterial({ color: tone, roughness: 0.6 })
        );
        ruko.position.set(rx, height / 2, rz);
        ruko.castShadow = true;
        ruko.receiveShadow = true;
        group.add(ruko);

        // Ground Floor Pedestrian Awning
        const awning = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.25, 10.5), awningMat);
        awning.position.set(rx + (rIdx === 0 ? 5.5 : -5.5), 3.8, rz);
        awning.castShadow = true;
        group.add(awning);

        // Vertical Blade Neon Signboards (Little Tokyo / Japanese Restaurant Vibe)
        const neonColor = neonColors[(rIdx * 2 + sIdx) % neonColors.length];
        const neonSign = new THREE.Mesh(
          new THREE.BoxGeometry(0.3, 5.5, 1.4),
          new THREE.MeshStandardMaterial({
            color: neonColor,
            emissive: neonColor,
            emissiveIntensity: 0.75,
            roughness: 0.2
          })
        );
        neonSign.position.set(rx + (rIdx === 0 ? 5.3 : -5.3), 9 + (sIdx % 2) * 2, rz);
        group.add(neonSign);
      });
    });

    // 3. Melawai Street Gate (Gapura Lampion Melawai)
    const gatePillarMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.4 });
    [-7, 7].forEach((gx) => {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(1.2, 8, 1.2), gatePillarMat);
      pillar.position.set(gx, 4, -26);
      pillar.castShadow = true;
      group.add(pillar);
    });

    const crossbeam = new THREE.Mesh(new THREE.BoxGeometry(16.5, 1.2, 1.5), gatePillarMat);
    crossbeam.position.set(0, 8.2, -26);
    crossbeam.castShadow = true;
    group.add(crossbeam);

    // Hanging Red Lanterns (Lampion)
    [-4, -1.5, 1.5, 4].forEach((lx) => {
      const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.7, 12, 12), lanternMat);
      lantern.scale.set(1, 1.2, 1);
      lantern.position.set(lx, 6.8, -26);
      group.add(lantern);
    });

    return group;
  }

  /**
   * 40. Jakarta International Expo (JIExpo Kemayoran)
   * Kompleks pameran terbesar Indonesia dengan Grand Hall lengkung, atap truss baja, JIExpo Theatre, dan pelataran PRJ.
   */
  static createJIExpoKemayoran() {
    const group = new THREE.Group();

    const hallMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.45 });
    const roofTrussMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.6, roughness: 0.3 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.8, roughness: 0.15, transparent: true, opacity: 0.85 });
    const plazaMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.9 });
    const accentRedMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.5 });

    // Grand Exhibition Plaza (Pelataran Aspal & Paviliun Terbuka)
    const plaza = new THREE.Mesh(new THREE.BoxGeometry(110, 0.4, 90), plazaMat);
    plaza.position.set(0, 0.2, 0);
    plaza.receiveShadow = true;
    group.add(plaza);

    // 1. Grand Exhibition Hall A & B (Twin Arched Barrel-Vault Halls)
    [-30, 30].forEach((hx) => {
      const hallBase = new THREE.Mesh(new THREE.BoxGeometry(44, 14, 60), hallMat);
      hallBase.position.set(hx, 7, -6);
      hallBase.castShadow = true;
      hallBase.receiveShadow = true;
      group.add(hallBase);

      // Curved Barrel Roof
      const roofGeo = new THREE.CylinderGeometry(23, 23, 60, 20, 1, false, 0, Math.PI);
      roofGeo.rotateZ(Math.PI / 2);
      roofGeo.rotateY(Math.PI / 2);
      const roof = new THREE.Mesh(roofGeo, roofTrussMat);
      roof.position.set(hx, 14, -6);
      roof.castShadow = true;
      group.add(roof);

      // Front Glass Curtain Facade
      const frontGlass = new THREE.Mesh(new THREE.BoxGeometry(40, 10, 0.5), glassMat);
      frontGlass.position.set(hx, 8, 24.2);
      group.add(frontGlass);
    });

    // 2. Central Convention Hall & JIExpo Theatre (Hall C & D)
    const centerHall = new THREE.Mesh(new THREE.BoxGeometry(32, 22, 48), hallMat);
    centerHall.position.set(0, 11, -8);
    centerHall.castShadow = true;
    group.add(centerHall);

    // Modern Curved Theatre Canopy
    const theatreCanopy = new THREE.Mesh(new THREE.BoxGeometry(36, 3, 26), accentRedMat);
    theatreCanopy.position.set(0, 22.5, 6);
    theatreCanopy.castShadow = true;
    group.add(theatreCanopy);

    // Glass Entry Atrium
    const atriumGlass = new THREE.Mesh(new THREE.BoxGeometry(28, 16, 12), glassMat);
    atriumGlass.position.set(0, 9, 18);
    group.add(atriumGlass);

    // 3. Flag Colonnade / Banner Pylons at the Main Gate
    [-36, -24, -12, 12, 24, 36].forEach((px) => {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 14, 8), new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 }));
      pole.position.set(px, 7, 36);
      pole.castShadow = true;
      group.add(pole);

      const flag = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 0.08), accentRedMat);
      flag.position.set(px + 1.2, 13, 36);
      group.add(flag);
    });

    return group;
  }

  /**
   * 41. Menara ATC Heritage Bandara Kemayoran & Monumen Ondel-Ondel
   * Menara pemandu lalu lintas udara pertama di Asia (1938) & patung Ondel-Ondel Betawi raksasa di Benyamin Sueb.
   */
  static createMenaraATCKemayoran() {
    const group = new THREE.Group();

    const whiteConcreteMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.4 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.8, roughness: 0.15 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.85, roughness: 0.25 });
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });

    // Roundabout Base & Garden Island in the Median of Benyamin Sueb
    const island = new THREE.Mesh(new THREE.CylinderGeometry(28, 28.5, 0.5, 32), grassMat);
    island.position.set(0, 0.25, 0);
    island.receiveShadow = true;
    group.add(island);

    // 1. Menara ATC Kemayoran 1938 (Air Traffic Control Tower - West Side)
    const atcGroup = new THREE.Group();
    atcGroup.position.set(-10, 0, 0);

    // Art Deco Stepped Terminal Base Pavilion
    const terminalBase = new THREE.Mesh(new THREE.BoxGeometry(18, 5, 14), whiteConcreteMat);
    terminalBase.position.set(0, 2.5, 0);
    terminalBase.castShadow = true;
    terminalBase.receiveShadow = true;
    atcGroup.add(terminalBase);

    // Circular Tower Shaft (5 storeys)
    const towerShaft = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.8, 18, 24), whiteConcreteMat);
    towerShaft.position.set(0, 14, 0);
    towerShaft.castShadow = true;
    atcGroup.add(towerShaft);

    // Wrap-around Observation Balcony
    const balcony = new THREE.Mesh(new THREE.CylinderGeometry(5.2, 5.2, 0.6, 24), metalMat);
    balcony.position.set(0, 22.5, 0);
    atcGroup.add(balcony);

    // Octagonal Glass Control Cab
    const cab = new THREE.Mesh(new THREE.CylinderGeometry(4.4, 3.6, 4.2, 8), glassMat);
    cab.position.set(0, 24.8, 0);
    cab.castShadow = true;
    atcGroup.add(cab);

    // Conical Cab Roof & Radar Mast
    const cabRoof = new THREE.Mesh(new THREE.ConeGeometry(4.8, 2.2, 8), whiteConcreteMat);
    cabRoof.position.set(0, 27.5, 0);
    atcGroup.add(cabRoof);

    const radarMast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.2, 6, 8), metalMat);
    radarMast.position.set(0, 31, 0);
    atcGroup.add(radarMast);

    group.add(atcGroup);

    // 2. Monumen Ondel-Ondel Kemayoran (East Side of Roundabout)
    const ondelGroup = new THREE.Group();
    ondelGroup.position.set(10, 0, 0);

    const statuePedestal = new THREE.Mesh(new THREE.CylinderGeometry(6, 6.5, 2.2, 16), new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 }));
    statuePedestal.position.set(0, 1.1, 0);
    statuePedestal.castShadow = true;
    ondelGroup.add(statuePedestal);

    // Ondel-Ondel Laki-Laki (Red Face, Golden Crown, Red/Black Baju Kurung)
    const maleGroup = new THREE.Group();
    maleGroup.position.set(-2.4, 2.2, 0);

    const maleBody = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 2.0, 9.5, 12), new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.6 }));
    maleBody.position.set(0, 4.75, 0);
    maleBody.castShadow = true;
    maleGroup.add(maleBody);

    const maleHead = new THREE.Mesh(new THREE.SphereGeometry(1.2, 12, 12), new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4 }));
    maleHead.position.set(0, 10.2, 0);
    maleGroup.add(maleHead);

    const maleCrown = new THREE.Mesh(new THREE.ConeGeometry(1.6, 2.8, 10), new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8, roughness: 0.2 }));
    maleCrown.position.set(0, 12.0, 0);
    maleGroup.add(maleCrown);
    ondelGroup.add(maleGroup);

    // Ondel-Ondel Perempuan (White Face, Yellow/Green Kemben & Selendang)
    const femaleGroup = new THREE.Group();
    femaleGroup.position.set(2.4, 2.2, 0);

    const femaleBody = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.9, 9.2, 12), new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.6 }));
    femaleBody.position.set(0, 4.6, 0);
    femaleBody.castShadow = true;
    femaleGroup.add(femaleBody);

    const femaleHead = new THREE.Mesh(new THREE.SphereGeometry(1.15, 12, 12), new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.35 }));
    femaleHead.position.set(0, 9.8, 0);
    femaleGroup.add(femaleHead);

    const femaleCrown = new THREE.Mesh(new THREE.ConeGeometry(1.5, 2.6, 10), new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8, roughness: 0.2 }));
    femaleCrown.position.set(0, 11.6, 0);
    femaleGroup.add(femaleCrown);
    ondelGroup.add(femaleGroup);

    group.add(ondelGroup);

    return group;
  }

  /**
   * 42. Stasiun Pasar Senen (Heritage Railway Station - J. van Gendt 1916)
   * Bangunan stasiun cagar budaya Indische Art-Deco dengan menara jam, kanopi peron baja, dan 4 jalur rel.
   */
  static createStasiunPasarSenen() {
    const group = new THREE.Group();

    const brickMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.75 });
    const whitePlasterMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const roofTileMat = new THREE.MeshStandardMaterial({ color: 0x7c2d12, roughness: 0.8 });
    const trainShedSteelMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7, roughness: 0.4 });
    const platformSlabMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.85 });

    // 1. Gedung Induk Stasiun (Grand Art-Deco Entrance Hall, J. van Gendt 1916)
    const mainHall = new THREE.Mesh(new THREE.BoxGeometry(42, 13, 16), brickMat);
    mainHall.position.set(0, 6.5, 10);
    mainHall.castShadow = true;
    mainHall.receiveShadow = true;
    group.add(mainHall);

    // Mansard / Hipped Tile Roof
    const roofGeo = new THREE.ConeGeometry(24, 7, 4);
    roofGeo.rotateY(Math.PI / 4);
    const roof = new THREE.Mesh(roofGeo, roofTileMat);
    roof.scale.set(1.2, 1, 0.75);
    roof.position.set(0, 16.5, 10);
    roof.castShadow = true;
    group.add(roof);

    // Central Portico & Clock Tower (Menara Jam Cagar Budaya)
    const clockTower = new THREE.Mesh(new THREE.BoxGeometry(10, 20, 6), whitePlasterMat);
    clockTower.position.set(0, 10, 17);
    clockTower.castShadow = true;
    group.add(clockTower);

    // Glowing Round Clock Face
    const clockFace = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 1.4, 0.3, 16),
      new THREE.MeshStandardMaterial({ color: 0xfffbeb, emissive: 0xfef08a, emissiveIntensity: 0.8 })
    );
    clockFace.rotation.x = Math.PI / 2;
    clockFace.position.set(0, 17, 20.1);
    group.add(clockFace);

    // Classical Arched Entry Porticos
    for (let x = -14; x <= 14; x += 7) {
      const arch = new THREE.Mesh(new THREE.BoxGeometry(4.5, 7, 1.5), whitePlasterMat);
      arch.position.set(x, 3.5, 18.2);
      group.add(arch);
    }

    // 2. Twin Covered Train Canopies (Overhead Steel Platform Sheds)
    [-11, 11].forEach((px) => {
      // Concrete Platform Island
      const platform = new THREE.Mesh(new THREE.BoxGeometry(9, 1.2, 95), platformSlabMat);
      platform.position.set(px, 0.6, -35);
      platform.receiveShadow = true;
      group.add(platform);

      // Curved Iron Train Shed Roof
      const shedRoofGeo = new THREE.CylinderGeometry(7.5, 7.5, 95, 16, 1, false, 0, Math.PI);
      shedRoofGeo.rotateZ(Math.PI / 2);
      shedRoofGeo.rotateY(Math.PI / 2);
      const shedRoof = new THREE.Mesh(shedRoofGeo, trainShedSteelMat);
      shedRoof.position.set(px, 7.5, -35);
      shedRoof.castShadow = true;
      group.add(shedRoof);

      // Steel Support Pillars along the platform
      for (let z = -75; z <= 5; z += 16) {
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 7.5, 8), trainShedSteelMat);
        pillar.position.set(px, 3.75, z);
        pillar.castShadow = true;
        group.add(pillar);
      }
    });

    return group;
  }

  /**
   * 43. Kompleks Pasar Senen Jaya & Simpang Lima Senen
   * Pusat grosir tertua Jakarta (sejak 1735), JPO Skybridge melengkung futuristik, dan simpang susun arteri Senen.
   */
  static createPasarSenenJaya() {
    const group = new THREE.Group();

    const facadeWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const blueGlassMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.8, roughness: 0.2 });
    const orangeAccentMat = new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.5 });
    const skybridgeMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.7, roughness: 0.2, transparent: true, opacity: 0.85 });
    const pierMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.7 });

    // 1. Pasar Senen Blok I & II (Modern 7-Storey Podium Wholesale Center)
    const block1 = new THREE.Mesh(new THREE.BoxGeometry(48, 28, 38), facadeWhiteMat);
    block1.position.set(-16, 14, 0);
    block1.castShadow = true;
    block1.receiveShadow = true;
    group.add(block1);

    // Horizontal Glazing Strips across Blok I & II
    [8, 14, 20, 25].forEach((ly) => {
      const glassBand = new THREE.Mesh(new THREE.BoxGeometry(48.5, 2.6, 38.5), blueGlassMat);
      glassBand.position.set(-16, ly, 0);
      group.add(glassBand);
    });

    // Decorative Rooftop Parapet with Modern Betawi Gigi Balang Accent
    const roofPinnacle = new THREE.Mesh(new THREE.BoxGeometry(49, 2.2, 39), orangeAccentMat);
    roofPinnacle.position.set(-16, 29, 0);
    group.add(roofPinnacle);

    // 2. Pasar Senen Blok IV (Adjacent Wholesale Wing)
    const block4 = new THREE.Mesh(new THREE.BoxGeometry(32, 22, 34), facadeWhiteMat);
    block4.position.set(28, 11, -4);
    block4.castShadow = true;
    group.add(block4);

    // 3. Ikonik JPO Skybridge Senen (Revitalisasi Modern Menyeberang Jalan Raya)
    const bridgeGeo = new THREE.BoxGeometry(36, 4.2, 5.5);
    const bridge = new THREE.Mesh(bridgeGeo, skybridgeMat);
    bridge.position.set(8, 12, 16);
    bridge.rotation.y = 0.18;
    bridge.castShadow = true;
    group.add(bridge);

    // Skybridge Piers & Support Columns
    [-6, 22].forEach((bx) => {
      const pier = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.0, 10, 10), pierMat);
      pier.position.set(bx, 5, 17);
      pier.castShadow = true;
      group.add(pier);
    });

    return group;
  }

  /**
   * 44. Taman Ismail Marzuki (TIM) & Teater Jakarta Cikini
   * Pusat kesenian ibu kota karya Andra Matin: Gedung Panjang fasad kisi-kisi terakota, Teater Besar, dan kubah Planetarium 1969.
   */
  static createTamanIsmailMarzuki() {
    const group = new THREE.Group();

    const terracottaMat = new THREE.MeshStandardMaterial({ color: 0xc2410c, roughness: 0.65 });
    const concreteGrayMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 });
    const planetariumWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35, metalness: 0.1 });
    const timberDeckMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.8 });

    // Open Plaza & Cultural Ground Stage
    const plaza = new THREE.Mesh(new THREE.BoxGeometry(75, 0.4, 65), timberDeckMat);
    plaza.position.set(0, 0.2, 0);
    plaza.receiveShadow = true;
    group.add(plaza);

    // 1. Gedung Panjang Ali Sadikin (Perpustakaan Jakarta & Wisma Seni)
    const gedungPanjang = new THREE.Mesh(new THREE.BoxGeometry(58, 26, 18), terracottaMat);
    gedungPanjang.position.set(-6, 13, -16);
    gedungPanjang.castShadow = true;
    gedungPanjang.receiveShadow = true;
    group.add(gedungPanjang);

    // Fasad Kisi-Kisi Not Balok (Louver screen stripes)
    [7, 13, 19, 24].forEach((ly) => {
      const louver = new THREE.Mesh(new THREE.BoxGeometry(59, 1.8, 18.6), concreteGrayMat);
      louver.position.set(-6, ly, -16);
      group.add(louver);
    });

    // 2. Teater Besar / Graha Bhakti Budaya (Sculptural Angled Auditorium)
    const theatreBase = new THREE.Mesh(new THREE.BoxGeometry(32, 18, 28), concreteGrayMat);
    theatreBase.position.set(16, 9, 12);
    theatreBase.castShadow = true;
    group.add(theatreBase);

    // Angled Modern Roof
    const theatreRoof = new THREE.Mesh(new THREE.BoxGeometry(34, 3, 30), terracottaMat);
    theatreRoof.position.set(16, 19, 12);
    theatreRoof.rotation.z = -0.06;
    theatreRoof.castShadow = true;
    group.add(theatreRoof);

    // 3. Kubah Bersejarah Planetarium Jakarta (1969)
    const planetariumDome = new THREE.Mesh(
      new THREE.SphereGeometry(8.5, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2),
      planetariumWhiteMat
    );
    planetariumDome.position.set(-20, 0.2, 15);
    planetariumDome.castShadow = true;
    group.add(planetariumDome);

    // Planetarium Base Ring
    const domeRing = new THREE.Mesh(new THREE.CylinderGeometry(9.2, 9.5, 1.8, 24), concreteGrayMat);
    domeRing.position.set(-20, 0.9, 15);
    group.add(domeRing);

    return group;
  }

  /**
   * 45. Gerbang Bersejarah Passer Baroe (1820) & Kawasan Sawah Besar
   * Gerbang monumental cagar budaya bergaya Tionghoa-Eropa di tepi Kali Ciliwung dengan koridor pedestrian klasik.
   */
  static createPasserBaroe() {
    const group = new THREE.Group();

    const redImperialMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.45 });
    const goldOrnamentMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.85, roughness: 0.2 });
    const greenTileMat = new THREE.MeshStandardMaterial({ color: 0x065f46, roughness: 0.5 });
    const whiteColonnadeMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const cobblestoneMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.9 });

    // Pedestrian Street Floor (Jalan Kaki Tertutup Passer Baroe)
    const walkStreet = new THREE.Mesh(new THREE.BoxGeometry(16, 0.3, 70), cobblestoneMat);
    walkStreet.position.set(0, 0.15, -20);
    walkStreet.receiveShadow = true;
    group.add(walkStreet);

    // 1. Monumental Heritage Gate Arch (Gerbang Utama 'Passer Baroe 1820')
    [-6.5, 6.5].forEach((px) => {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(2.6, 12, 2.6), redImperialMat);
      pillar.position.set(px, 6, 12);
      pillar.castShadow = true;
      group.add(pillar);

      // Gold Corinthian Capitals & Bases
      [0.6, 11.5].forEach((cy) => {
        const cap = new THREE.Mesh(new THREE.BoxGeometry(3.0, 1.0, 3.0), goldOrnamentMat);
        cap.position.set(px, cy, 12);
        group.add(cap);
      });
    });

    // Central Arch Crossbeam with Inscription Board
    const archBeam = new THREE.Mesh(new THREE.BoxGeometry(16, 3.2, 2.2), redImperialMat);
    archBeam.position.set(0, 11, 12);
    archBeam.castShadow = true;
    group.add(archBeam);

    // Golden Inscription Plaque "PASSER BAROE 1820"
    const plaque = new THREE.Mesh(
      new THREE.BoxGeometry(9.5, 1.4, 0.4),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, emissive: 0xfbbf24, emissiveIntensity: 0.6 })
    );
    plaque.position.set(0, 11, 13.2);
    group.add(plaque);

    // Multi-Tiered Chinese Hip Roof with Curved Eaves
    const roof1 = new THREE.Mesh(new THREE.BoxGeometry(18.5, 1.6, 4.5), greenTileMat);
    roof1.position.set(0, 13.2, 12);
    roof1.castShadow = true;
    group.add(roof1);

    const roof2 = new THREE.Mesh(new THREE.ConeGeometry(8, 2.5, 4), greenTileMat);
    roof2.rotateY(Math.PI / 4);
    roof2.scale.set(1.4, 1, 0.5);
    roof2.position.set(0, 15, 12);
    roof2.castShadow = true;
    group.add(roof2);

    // Golden Apex Finials
    [-8.5, 0, 8.5].forEach((fx) => {
      const finial = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 8), goldOrnamentMat);
      finial.position.set(fx, 14.5 + (fx === 0 ? 2 : 0), 12);
      group.add(finial);
    });

    // 2. Colonnaded Pedestrian Arcade along Jl. Pasar Baru
    [-8, 8].forEach((ax) => {
      for (let z = -45; z <= 0; z += 12) {
        const arcadeCol = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 7, 8), whiteColonnadeMat);
        arcadeCol.position.set(ax, 3.5, z);
        arcadeCol.castShadow = true;
        group.add(arcadeCol);
      }
    });

    return group;
  }

  /**
   * 46. Simpang Susun Pancoran & Monumen Patung Dirgantara (1966)
   * Ikon kedirgantaraan nasional karya Edhi Sunarso dengan figur perunggu 11 ton di atas pilar beton lengkung hiperbolik setinggi 27m di tengah interchange Pancoran.
   */
  static createPatungDirgantaraPancoran() {
    const group = new THREE.Group();

    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x3f3f46, roughness: 0.55, metalness: 0.8 });
    const pedestalMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.65 });
    const basinMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.8 });
    const waterMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.2, metalness: 0.8, transparent: true, opacity: 0.85 });
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });

    // 1. Central Roundabout Island & Fountain Basin
    const island = new THREE.Mesh(new THREE.CylinderGeometry(22, 22.5, 0.4, 24), grassMat);
    island.position.set(0, 0.2, 0);
    island.receiveShadow = true;
    group.add(island);

    const basin = new THREE.Mesh(new THREE.CylinderGeometry(12, 12, 0.8, 20), basinMat);
    basin.position.set(0, 0.4, 0);
    group.add(basin);

    const water = new THREE.Mesh(new THREE.CylinderGeometry(11.5, 11.5, 0.2, 20), waterMat);
    water.position.set(0, 0.75, 0);
    group.add(water);

    // 2. Hyperbolic Curved Concrete Arch Pedestal (Pilar Melengkung Setinggi 27m)
    // Pancoran arch gracefully leans northward (-Z)
    const segCount = 7;
    for (let s = 0; s < segCount; s++) {
      const t = s / segCount;
      const y = t * 27.0 + 2.0;
      const zLean = -Math.pow(t, 1.35) * 6.5;
      const w = 4.2 * (1 - t * 0.45);
      const d = 3.2 * (1 - t * 0.4);
      const h = 27.0 / segCount + 0.3;

      const seg = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), pedestalMat);
      seg.position.set(0, y, zLean);
      seg.rotation.x = -t * 0.25;
      seg.castShadow = true;
      group.add(seg);
    }

    // Top Platform Plinth atop pedestal
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.8, 2.5), pedestalMat);
    plinth.position.set(0, 27.5, -6.6);
    plinth.rotation.x = -0.25;
    group.add(plinth);

    // 3. Bronze Statue of the Soaring Aerospace Man (11-ton figure)
    const statueGroup = new THREE.Group();
    statueGroup.position.set(0, 28.2, -6.8);

    // Muscular Torso leaning boldly forward
    const torso = new THREE.Mesh(new THREE.BoxGeometry(2.0, 3.2, 1.5), bronzeMat);
    torso.position.set(0, 1.8, 0);
    torso.rotation.x = -0.3;
    torso.castShadow = true;
    statueGroup.add(torso);

    // Heroic Head looking forward
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.75, 10, 10), bronzeMat);
    head.position.set(0, 3.7, -0.6);
    statueGroup.add(head);

    // Outstretched Right Arm (pointing straight forward and up to the skies)
    const rightArm = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.22, 4.0, 8), bronzeMat);
    rightArm.rotation.x = -Math.PI / 2.8;
    rightArm.position.set(1.2, 3.2, -1.8);
    rightArm.castShadow = true;
    statueGroup.add(rightArm);

    // Sweeping Left Arm (balancing dynamically)
    const leftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.22, 3.6, 8), bronzeMat);
    leftArm.rotation.x = Math.PI / 3.5;
    leftArm.rotation.z = -0.3;
    leftArm.position.set(-1.2, 2.0, 1.2);
    leftArm.castShadow = true;
    statueGroup.add(leftArm);

    // Lunging Anchor Legs
    [-0.65, 0.65].forEach((lx) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.35, 2.2, 8), bronzeMat);
      leg.position.set(lx, 0.9, 0.2);
      leg.rotation.x = 0.15;
      statueGroup.add(leg);
    });

    group.add(statueGroup);

    return group;
  }

  /**
   * 47. Menara Saidah & Koridor Cawang-MT Haryono (2001)
   * Gedung perkantoran legendaris 28 lantai berarsitektur Neo-Klasik Romawi dengan pilar korintia kolosal, patung klasik, dan kubah tembaga megah di tepi Tol Dalam Kota.
   */
  static createMenaraSaidah() {
    const group = new THREE.Group();

    const marbleMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.55 });
    const rusticatedStoneMat = new THREE.MeshStandardMaterial({ color: 0xd4d4d8, roughness: 0.7 });
    const copperDomeMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.45, metalness: 0.65 });
    const goldAccentMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.35, metalness: 0.8 });
    const romanGlassMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.2, metalness: 0.85 });

    // 1. Rusticated Classical Stone Podium (Lantai 1-4)
    const podium = new THREE.Mesh(new THREE.BoxGeometry(38, 16, 30), rusticatedStoneMat);
    podium.position.set(0, 8, 0);
    podium.castShadow = true;
    podium.receiveShadow = true;
    group.add(podium);

    // Colossal Front Portico Colonnade (Pilar Korintia Kolosal)
    [-15, -10, -5, 0, 5, 10, 15].forEach((cx) => {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.75, 15, 12), marbleMat);
      col.position.set(cx, 8.5, 16);
      col.castShadow = true;
      group.add(col);

      // Ornate Gold Capital & Plinth
      [1.2, 15.5].forEach((cy) => {
        const cap = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.8, 1.6), goldAccentMat);
        cap.position.set(cx, cy, 16);
        group.add(cap);
      });
    });

    // Triangular Pediment over Portico
    const pedimentGeo = new THREE.ConeGeometry(18, 5, 4);
    pedimentGeo.rotateY(Math.PI / 4);
    const pediment = new THREE.Mesh(pedimentGeo, marbleMat);
    pediment.scale.set(1.1, 1, 0.3);
    pediment.position.set(0, 18.5, 15.5);
    pediment.castShadow = true;
    group.add(pediment);

    // 2. Main Tower Shaft (28 Lantai Neo-Klasik)
    const shaft = new THREE.Mesh(new THREE.BoxGeometry(28, 70, 24), marbleMat);
    shaft.position.set(0, 51, 0);
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    group.add(shaft);

    // Arched Roman Window Bands
    for (let wy = 22; wy <= 82; wy += 8) {
      [-14.1, 14.1].forEach((wx) => {
        const winSide = new THREE.Mesh(new THREE.BoxGeometry(0.3, 4.5, 18), romanGlassMat);
        winSide.position.set(wx, wy, 0);
        group.add(winSide);
      });

      const winFront = new THREE.Mesh(new THREE.BoxGeometry(20, 4.5, 0.3), romanGlassMat);
      winFront.position.set(0, wy, 12.1);
      group.add(winFront);

      // Classical Cornice Balcony Moulding
      const cornice = new THREE.Mesh(new THREE.BoxGeometry(29.5, 0.6, 25.5), rusticatedStoneMat);
      cornice.position.set(0, wy + 2.8, 0);
      group.add(cornice);
    }

    // 3. Classical Stepped Attic Crown & Copper Cupola Dome
    const attic = new THREE.Mesh(new THREE.BoxGeometry(22, 9, 18), marbleMat);
    attic.position.set(0, 90.5, 0);
    group.add(attic);

    // Arched Colonnade Cupola Rotunda
    const cupolaBase = new THREE.Mesh(new THREE.CylinderGeometry(6.5, 7.5, 5, 16), marbleMat);
    cupolaBase.position.set(0, 97.5, 0);
    group.add(cupolaBase);

    // Weathered Green Copper Roman Dome
    const dome = new THREE.Mesh(new THREE.SphereGeometry(6.2, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), copperDomeMat);
    dome.position.set(0, 100, 0);
    dome.castShadow = true;
    group.add(dome);

    // Golden Roman Spire Finial
    const finial = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.45, 6, 8), goldAccentMat);
    finial.position.set(0, 106, 0);
    group.add(finial);

    return group;
  }

  /**
   * 48. South Quarter Towers (SQ) & CBD TB Simatupang (2015)
   * Mahakarya arsitektur hijau dunia karya WS Atkins: 3 menara spiral elips berfasad kisi-kisi louvre surya terhubung dengan kanopi kubah The Dome.
   */
  static createSouthQuarterTowers() {
    const group = new THREE.Group();

    const louvreMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });
    const solarGlassMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.15, metalness: 0.88 });
    const canopyMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.7, transparent: true, opacity: 0.75 });
    const courtyardMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const waterMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.15, metalness: 0.85 });
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.85 });

    // 1. Landscaped Ground Podium & Reflective Courtyard
    const groundDeck = new THREE.Mesh(new THREE.BoxGeometry(90, 0.6, 90), courtyardMat);
    groundDeck.position.set(0, 0.3, 0);
    groundDeck.receiveShadow = true;
    group.add(groundDeck);

    // Central Circular Reflective Water Pool
    const pool = new THREE.Mesh(new THREE.CylinderGeometry(14, 14, 0.4, 24), waterMat);
    pool.position.set(0, 0.6, 0);
    group.add(pool);

    // 2. "The Dome" Organic Retail Canopy Connecting the Towers
    const theDome = new THREE.Mesh(new THREE.SphereGeometry(18, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2.2), canopyMat);
    theDome.position.set(0, 1.0, 0);
    theDome.scale.set(1.0, 0.45, 1.0);
    group.add(theDome);

    // 3. Three Distinct Elliptical Towers (WS Atkins Triple Synergy)
    // Arranged in harmonious triangular symmetry
    const towerConfigs = [
      { x: -24, z: -18, rot: 0.35, height: 82, floors: 22 },
      { x: 24, z: -18, rot: -0.35, height: 76, floors: 20 },
      { x: 0, z: 25, rot: Math.PI, height: 72, floors: 19 }
    ];

    towerConfigs.forEach((cfg) => {
      const towerGroup = new THREE.Group();

      // Elliptical Glass Core
      const coreGeo = new THREE.CylinderGeometry(11, 12, cfg.height, 24);
      coreGeo.scale(1.45, 1.0, 0.95);
      const core = new THREE.Mesh(coreGeo, solarGlassMat);
      core.position.set(0, cfg.height * 0.5, 0);
      core.castShadow = true;
      towerGroup.add(core);

      // Signature Horizontal Solar Louvre Rings (WS Atkins Parametric Sunshade)
      const ringCount = Math.floor(cfg.height / 3.8);
      for (let r = 1; r < ringCount; r++) {
        const ry = r * 3.8;
        const ringGeo = new THREE.TorusGeometry(12.2, 0.35, 6, 24);
        ringGeo.rotateX(Math.PI / 2);
        ringGeo.scale(1.48, 1.0, 0.98);
        const ring = new THREE.Mesh(ringGeo, louvreMat);
        ring.position.set(0, ry, 0);
        towerGroup.add(ring);
      }

      // Slanted Aerodynamic Crown with Integrated Louvres
      const crown = new THREE.Mesh(new THREE.CylinderGeometry(9, 11.5, 6, 20), louvreMat);
      crown.scale.set(1.45, 1.0, 0.95);
      crown.position.set(0, cfg.height + 3, 0);
      crown.rotation.x = -0.15;
      towerGroup.add(crown);

      towerGroup.position.set(cfg.x, 0, cfg.z);
      towerGroup.rotation.y = cfg.rot;
      group.add(towerGroup);
    });

    return group;
  }

  /**
   * 49. Pusat Perbelanjaan & Kompleks Pondok Indah (PIM 1-3 & Skywalk)
   * Megamall mewah Jakarta Selatan: PIM 1 beratap mediterania, PIM 2-3 modern, jembatan Skywalk kaca melintasi jalan, dan Bundaran Pondok Indah berhiaskan palem.
   */
  static createPondokIndahMall() {
    const group = new THREE.Group();

    const terracottaMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.75 });
    const beigeMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.6 });
    const modernGlassMat = new THREE.MeshStandardMaterial({ color: 0x0369a1, roughness: 0.18, metalness: 0.88 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.75, roughness: 0.35 });
    const skywalkGlassMat = new THREE.MeshStandardMaterial({ color: 0x7dd3fc, transparent: true, opacity: 0.65, roughness: 0.1, metalness: 0.9 });
    const palmTrunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const palmLeafMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.7 });

    // 1. PIM 1 Commercial Podium (Sisi Barat Boulevard, X=-28)
    const pim1 = new THREE.Mesh(new THREE.BoxGeometry(40, 16, 65), beigeMat);
    pim1.position.set(-28, 8, -10);
    pim1.castShadow = true;
    pim1.receiveShadow = true;
    group.add(pim1);

    // PIM 1 Distinctive Terracotta Gabled Roofs
    [-20, 0, 20].forEach((rz) => {
      const roof = new THREE.Mesh(new THREE.ConeGeometry(15, 6, 4), terracottaMat);
      roof.rotateY(Math.PI / 4);
      roof.scale.set(1.4, 1.0, 0.75);
      roof.position.set(-28, 19, -10 + rz);
      roof.castShadow = true;
      group.add(roof);
    });

    // PIM 1 Classic Clock Tower
    const clockTower = new THREE.Mesh(new THREE.BoxGeometry(6, 32, 6), beigeMat);
    clockTower.position.set(-28, 16, 24);
    clockTower.castShadow = true;
    group.add(clockTower);

    const clockRoof = new THREE.Mesh(new THREE.ConeGeometry(4.5, 6, 4), terracottaMat);
    clockRoof.rotateY(Math.PI / 4);
    clockRoof.position.set(-28, 35, 24);
    group.add(clockRoof);

    // 2. PIM 2 & 3 Contemporary Luxury Podium & Atrium (Sisi Timur Boulevard, X=+28)
    const pim2 = new THREE.Mesh(new THREE.BoxGeometry(42, 22, 70), modernGlassMat);
    pim2.position.set(28, 11, -5);
    pim2.castShadow = true;
    pim2.receiveShadow = true;
    group.add(pim2);

    // Menara Pondok Indah High-Rise Office Tower
    const officeTower = new THREE.Mesh(new THREE.BoxGeometry(26, 65, 26), modernGlassMat);
    officeTower.position.set(26, 32.5, -30);
    officeTower.castShadow = true;
    group.add(officeTower);

    // Curved Crown Screen
    const crown = new THREE.Mesh(new THREE.BoxGeometry(26.4, 5, 26.4), steelMat);
    crown.position.set(26, 67.5, -30);
    group.add(crown);

    // 3. The Iconic Skywalk PIM (Elevated Enclosed Pedestrian Bridge at Y=12m)
    // Spanning across the boulevard connecting PIM 1 and PIM 2
    const skywalkDeck = new THREE.Mesh(new THREE.BoxGeometry(56, 4.5, 6.5), steelMat);
    skywalkDeck.position.set(0, 11.5, 8);
    skywalkDeck.castShadow = true;
    group.add(skywalkDeck);

    const skywalkGlass = new THREE.Mesh(new THREE.BoxGeometry(55.6, 3.8, 6.8), skywalkGlassMat);
    skywalkGlass.position.set(0, 12.0, 8);
    group.add(skywalkGlass);

    // Skywalk Support Piers in the median
    const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 10, 8), steelMat);
    pier.position.set(0, 5, 8);
    group.add(pier);

    // 4. Bundaran Pondok Indah (Air Mancur & Deretan Palem di Z=48)
    const roundabout = new THREE.Mesh(new THREE.CylinderGeometry(18, 18.5, 0.4, 24), beigeMat);
    roundabout.position.set(0, 0.2, 48);
    group.add(roundabout);

    const fountain = new THREE.Mesh(new THREE.CylinderGeometry(9, 9, 1.0, 16), steelMat);
    fountain.position.set(0, 0.5, 48);
    group.add(fountain);

    // Ring of Royal Palms around Bundaran
    for (let p = 0; p < 8; p++) {
      const angle = (p / 8) * Math.PI * 2;
      const px = Math.cos(angle) * 14.5;
      const pz = 48 + Math.sin(angle) * 14.5;

      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 7, 6), palmTrunkMat);
      trunk.position.set(px, 3.5, pz);
      group.add(trunk);

      const crown = new THREE.Mesh(new THREE.SphereGeometry(1.8, 8, 6), palmLeafMat);
      crown.scale.set(1.4, 0.6, 1.4);
      crown.position.set(px, 7.2, pz);
      group.add(crown);
    }

    return group;
  }

  /**
   * 50. Stasiun MRT Elevated Fatmawati Indomaret & Dipo Lebak Bulus
   * Stasiun layang transit terbesar di selatan Jakarta dengan kanopi membran aerodinamis, viaduk tinggi Y=14m, peron pulau ganda & jembatan integrasi JPO.
   */
  static createStasiunMRTFatmawati() {
    const group = new THREE.Group();

    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.7 });
    const membraneMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35, side: THREE.DoubleSide });
    const mrtBlueMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.7, roughness: 0.35 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.2, metalness: 0.85 });

    // 1. Massive V-Shaped Portal Piers (Tiang Penyangga Viaduk Layang Y=14m)
    [-30, -10, 10, 30].forEach((pz) => {
      [-6, 6].forEach((px) => {
        const column = new THREE.Mesh(new THREE.BoxGeometry(1.8, 14, 2.2), concreteMat);
        column.position.set(px, 7, pz);
        column.castShadow = true;
        group.add(column);
      });

      // Transverse Crosshead Beam
      const crosshead = new THREE.Mesh(new THREE.BoxGeometry(18, 2.2, 3.0), concreteMat);
      crosshead.position.set(0, 13.5, pz);
      crosshead.castShadow = true;
      group.add(crosshead);
    });

    // 2. Concourse Level (Lantai Tiket & JPO di Y=7m)
    const concourse = new THREE.Mesh(new THREE.BoxGeometry(16, 5.5, 60), glassMat);
    concourse.position.set(0, 7.5, 0);
    concourse.castShadow = true;
    group.add(concourse);

    // JPO Skybridge extending across the road to the east
    const jpo = new THREE.Mesh(new THREE.BoxGeometry(22, 3.2, 4.5), steelMat);
    jpo.position.set(18, 7.5, 0);
    group.add(jpo);

    // 3. Platform Level (Lantai Peron & Jalur Rel di Y=14m)
    const platformDeck = new THREE.Mesh(new THREE.BoxGeometry(19, 2.4, 88), concreteMat);
    platformDeck.position.set(0, 14.2, 0);
    platformDeck.castShadow = true;
    platformDeck.receiveShadow = true;
    group.add(platformDeck);

    // Island Platform & PSD (Platform Screen Doors)
    const islandPlat = new THREE.Mesh(new THREE.BoxGeometry(7, 1.2, 75), mrtBlueMat);
    islandPlat.position.set(0, 15.5, 0);
    group.add(islandPlat);

    // 4. Aerodynamic Curved Tensile Wave Canopy (Atap Membran Stasiun Fatmawati)
    const canopyCurve = new THREE.CylinderGeometry(11.5, 12, 86, 24, 1, true, 0, Math.PI);
    canopyCurve.rotateZ(Math.PI / 2);
    canopyCurve.scale(0.8, 1.0, 1.0);
    const canopy = new THREE.Mesh(canopyCurve, membraneMat);
    canopy.position.set(0, 20.5, 0);
    canopy.castShadow = true;
    group.add(canopy);

    // Aerodynamic Blue End Ribs
    [-43, 43].forEach((ez) => {
      const archRib = new THREE.Mesh(new THREE.TorusGeometry(10.5, 0.45, 8, 16, Math.PI), mrtBlueMat);
      archRib.position.set(0, 20.0, ez);
      group.add(archRib);
    });

    return group;
  }

  /**
   * 51. Kawasan Gaya Hidup Kemang (Kemang Village & Avenue of the Stars)
   * Superblok terpadu di Kemang: Lippo Mall Kemang, menara hunian The Ritz & The Tiffany, serta promenade kuliner terbuka Avenue of the Stars.
   */
  static createKemangVillage() {
    const group = new THREE.Group();

    const podiumMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.55 });
    const condoGlassMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.2, metalness: 0.85 });
    const whiteBalconyMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.4 });
    const woodDeckMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.7 });
    const tensileCanopyMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4, side: THREE.DoubleSide });
    const crownMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.35 });

    // 1. Lippo Mall Kemang Multi-Tier Commercial Podium
    const podium = new THREE.Mesh(new THREE.BoxGeometry(68, 20, 52), podiumMat);
    podium.position.set(0, 10, -5);
    podium.castShadow = true;
    podium.receiveShadow = true;
    group.add(podium);

    // Upper Terraced Retail Deck with Glass Atrium
    const atrium = new THREE.Mesh(new THREE.BoxGeometry(32, 6, 24), condoGlassMat);
    atrium.position.set(0, 23, -5);
    group.add(atrium);

    // 2. High-Rise Luxury Residential Towers
    // Tower 1: The Ritz Tower (38 Lantai, H=125m)
    const towerRitz = new THREE.Mesh(new THREE.BoxGeometry(22, 105, 18), condoGlassMat);
    towerRitz.position.set(-18, 72.5, -8);
    towerRitz.castShadow = true;
    group.add(towerRitz);

    // White Balcony Bands every 4 floors
    for (let by = 26; by <= 120; by += 12) {
      const balcony = new THREE.Mesh(new THREE.BoxGeometry(22.8, 0.6, 18.8), whiteBalconyMat);
      balcony.position.set(-18, by, -8);
      group.add(balcony);
    }

    // Glowing Crown
    const ritzCrown = new THREE.Mesh(new THREE.BoxGeometry(22.4, 4, 18.4), crownMat);
    ritzCrown.position.set(-18, 127, -8);
    group.add(ritzCrown);

    // Tower 2: The Tiffany Tower (30 Lantai, H=98m)
    const towerTiffany = new THREE.Mesh(new THREE.BoxGeometry(20, 78, 18), condoGlassMat);
    towerTiffany.position.set(18, 59, -8);
    towerTiffany.castShadow = true;
    group.add(towerTiffany);

    const tiffanyCrown = new THREE.Mesh(new THREE.BoxGeometry(20.4, 3.5, 18.4), crownMat);
    tiffanyCrown.position.set(18, 99.5, -8);
    group.add(tiffanyCrown);

    // 3. "Avenue of the Stars" Outdoor Alfresco Dining Promenade
    const diningDeck = new THREE.Mesh(new THREE.BoxGeometry(50, 0.5, 26), woodDeckMat);
    diningDeck.position.set(0, 0.3, 26);
    diningDeck.receiveShadow = true;
    group.add(diningDeck);

    // Conical Tensile Shading Canopies
    [-16, 0, 16].forEach((cx) => {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 7, 8), whiteBalconyMat);
      pole.position.set(cx, 3.5, 26);
      group.add(pole);

      const shade = new THREE.Mesh(new THREE.ConeGeometry(4.5, 2.2, 12, 1, true), tensileCanopyMat);
      shade.position.set(cx, 6.5, 26);
      group.add(shade);
    });

    return group;
  }

  /**
   * 52. Jakarta International Stadium (JIS)
   * Megastruktur stadion bertaraf internasional dengan kapasitas 82.000 penonton, atap buka-tutup (retractable roof), fasad parametrik perak, dan ramp melayang.
   */
  static createJISStadium() {
    const group = new THREE.Group();

    const facadeMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.85,
      roughness: 0.35,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.12
    });
    const podiumMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.75 });
    const roofTrussMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.7, roughness: 0.3 });
    const pitchMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });
    const seatsMat = new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.65 });
    const floodlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // 1. Concrete Concourse Podium
    const podium = new THREE.Mesh(new THREE.BoxGeometry(140, 6, 110), podiumMat);
    podium.position.y = 3;
    podium.receiveShadow = true;
    group.add(podium);

    // 2. Grand Elevated Pedestrian Ramps (West & East Ramps)
    [-76, 76].forEach((rx) => {
      const rampGeo = new THREE.BoxGeometry(18, 2, 42);
      rampGeo.rotateX(0.18 * (rx < 0 ? -1 : 1));
      const ramp = new THREE.Mesh(rampGeo, podiumMat);
      ramp.position.set(rx, 4.5, 0);
      group.add(ramp);
    });

    // 3. Elliptical Stadium Outer Facade Bowl
    const bowlGeo = new THREE.CylinderGeometry(52, 44, 48, 36, 1, true);
    bowlGeo.scale(1.15, 1.0, 0.95);
    const bowl = new THREE.Mesh(bowlGeo, facadeMat);
    bowl.position.y = 30;
    bowl.castShadow = true;
    bowl.receiveShadow = true;
    group.add(bowl);

    // Facade Louver Rib Rings
    for (let ry = 12; ry <= 50; ry += 8) {
      const ringGeo = new THREE.TorusGeometry(49, 0.6, 8, 36);
      ringGeo.rotateX(Math.PI / 2);
      ringGeo.scale(1.15, 0.95, 1.0);
      const ring = new THREE.Mesh(ringGeo, roofTrussMat);
      ring.position.y = ry;
      group.add(ring);
    }

    // 4. Interior Seating Bowl & Pitch
    const pitch = new THREE.Mesh(new THREE.PlaneGeometry(62, 42), pitchMat);
    pitch.rotateX(-Math.PI / 2);
    pitch.position.y = 6.2;
    pitch.receiveShadow = true;
    group.add(pitch);

    // Tiered Lower Seating Ring
    const seatsGeo = new THREE.CylinderGeometry(38, 32, 10, 24, 1, true);
    seatsGeo.scale(1.12, 1.0, 0.94);
    const seats = new THREE.Mesh(seatsGeo, seatsMat);
    seats.position.y = 11;
    group.add(seats);

    // 5. Retractable Roof Perimeter Steel Trusses
    const roofRingGeo = new THREE.TorusGeometry(53, 1.6, 8, 36);
    roofRingGeo.rotateX(Math.PI / 2);
    roofRingGeo.scale(1.15, 0.95, 1.0);
    const roofRing = new THREE.Mesh(roofRingGeo, roofTrussMat);
    roofRing.position.y = 54;
    roofRing.castShadow = true;
    group.add(roofRing);

    // Retractable Sliding Roof Leaves
    const roofLeaf1 = new THREE.Mesh(new THREE.BoxGeometry(45, 1.2, 70), roofTrussMat);
    roofLeaf1.position.set(-20, 55.5, 0);
    group.add(roofLeaf1);

    const roofLeaf2 = new THREE.Mesh(new THREE.BoxGeometry(45, 1.2, 70), roofTrussMat);
    roofLeaf2.position.set(20, 55.5, 0);
    group.add(roofLeaf2);

    // 6. Stadium Floodlight Gantry LED Beams
    [-46, 46].forEach((fx) => {
      [-36, 36].forEach((fz) => {
        const lightGantry = new THREE.Mesh(new THREE.BoxGeometry(7, 1.2, 3), floodlightMat);
        lightGantry.position.set(fx, 56.5, fz);
        group.add(lightGantry);
      });
    });

    return group;
  }

  /**
   * 53. Taman Impian Jaya Ancol & Dunia Fantasi (Dufan)
   * Kawasan rekreasi tepi laut: Kastil Dufan, Kincir Ria Bianglala (R=20m), lintasan Halilintar Roller-Coaster, dan promenade pesisir.
   */
  static createAncolDufan() {
    const group = new THREE.Group();

    const castleWallMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.65 });
    const spireMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4, metalness: 0.3 });
    const ferrisSteelMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.8, roughness: 0.25 });
    const coasterTrackMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.7, roughness: 0.3 });
    const sandBeachMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.95 });
    const oceanWaterMat = new THREE.MeshStandardMaterial({ color: 0x0369a1, roughness: 0.15, metalness: 0.85 });

    // 1. Coastal Sand Beach & Ocean Water
    const beach = new THREE.Mesh(new THREE.PlaneGeometry(120, 50), sandBeachMat);
    beach.rotateX(-Math.PI / 2);
    beach.position.set(0, 0.1, -30);
    beach.receiveShadow = true;
    group.add(beach);

    const sea = new THREE.Mesh(new THREE.PlaneGeometry(120, 45), oceanWaterMat);
    sea.rotateX(-Math.PI / 2);
    sea.position.set(0, 0.05, -75);
    group.add(sea);

    // 2. Dunia Fantasi Fairy-tale Castle
    const castlePodium = new THREE.Mesh(new THREE.BoxGeometry(36, 12, 22), castleWallMat);
    castlePodium.position.set(-28, 6, 0);
    castlePodium.castShadow = true;
    group.add(castlePodium);

    // Central Tower with Spire
    const centralTower = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 4.0, 18, 12), castleWallMat);
    centralTower.position.set(-28, 20, 0);
    group.add(centralTower);

    const mainSpire = new THREE.Mesh(new THREE.ConeGeometry(4.2, 12, 12), spireMat);
    mainSpire.position.set(-28, 34, 0);
    group.add(mainSpire);

    // Corner Turrets
    [[-42, -7], [-42, 7], [-14, -7], [-14, 7]].forEach(([tx, tz]) => {
      const turret = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.2, 16, 8), castleWallMat);
      turret.position.set(tx, 14, tz);
      group.add(turret);

      const turretSpire = new THREE.Mesh(new THREE.ConeGeometry(2.4, 7, 8), spireMat);
      turretSpire.position.set(tx, 25.5, tz);
      group.add(turretSpire);
    });

    // 3. Bianglala Giant Ferris Wheel (Center Y=25m, Radius=19m)
    const wheelCenter = new THREE.Vector3(26, 25, 0);

    // A-frame Support Legs
    [-1, 1].forEach((dir) => {
      const legGeo = new THREE.CylinderGeometry(0.45, 0.65, 27, 8);
      legGeo.rotateZ(dir * 0.32);
      const leg = new THREE.Mesh(legGeo, ferrisSteelMat);
      leg.position.set(wheelCenter.x + dir * 5.5, 13.5, 0);
      group.add(leg);
    });

    // Dual Outer Rings
    [-0.8, 0.8].forEach((oz) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(19, 0.28, 8, 32), ferrisSteelMat);
      ring.position.set(wheelCenter.x, wheelCenter.y, oz);
      group.add(ring);
    });

    // 16 Spokes & Gondolas
    const gondolaColors = [0xef4444, 0xf59e0b, 0x10b981, 0x06b6d4, 0x8b5cf6, 0xec4899];
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 19, 6), ferrisSteelMat);
      spoke.position.set(wheelCenter.x + (Math.cos(angle) * 19) / 2, wheelCenter.y + (Math.sin(angle) * 19) / 2, 0);
      spoke.rotation.z = angle + Math.PI / 2;
      group.add(spoke);

      const gondolaMat = new THREE.MeshStandardMaterial({
        color: gondolaColors[i % gondolaColors.length],
        metalness: 0.5,
        roughness: 0.3
      });
      const gondola = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.8, 1.4), gondolaMat);
      gondola.position.set(wheelCenter.x + Math.cos(angle) * 19, wheelCenter.y + Math.sin(angle) * 19, 0);
      group.add(gondola);
    }

    // 4. Halilintar Roller Coaster Looping Steel Track
    const coasterCurvePoints = [
      new THREE.Vector3(-10, 3, 22),
      new THREE.Vector3(0, 16, 26),
      new THREE.Vector3(12, 24, 20),
      new THREE.Vector3(18, 14, 14),
      new THREE.Vector3(14, 3, 8),
      new THREE.Vector3(0, 7, 10),
      new THREE.Vector3(-8, 14, 18),
      new THREE.Vector3(-10, 3, 22)
    ];
    const coasterCurve = new THREE.CatmullRomCurve3(coasterCurvePoints, true);
    const coasterTrackGeo = new THREE.TubeGeometry(coasterCurve, 48, 0.45, 8, true);
    const coasterTrack = new THREE.Mesh(coasterTrackGeo, coasterTrackMat);
    group.add(coasterTrack);

    return group;
  }

  /**
   * 54. Pelabuhan Bersejarah Sunda Kelapa & Museum Bahari
   * Pelabuhan tertua di Jakarta: Kapal layar tradisional Pinisi, dermaga batu andesit, Menara Syahbandar miring (1839), dan gudang rempah VOC.
   */
  static createSundaKelapaPort() {
    const group = new THREE.Group();

    const wharfStoneMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.85 });
    const woodHullMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.7 });
    const woodDeckMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.8 });
    const sailCanvasMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.6, side: THREE.DoubleSide });
    const colonialStuccoMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.65 });
    const vocRoofTileMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.75 });
    const copperDomeMat = new THREE.MeshStandardMaterial({ color: 0x0d9488, metalness: 0.6, roughness: 0.35 });
    const harborWaterMat = new THREE.MeshStandardMaterial({ color: 0x0e7490, roughness: 0.2, metalness: 0.8 });

    // 1. Water Basin & Wharf Dock
    const basin = new THREE.Mesh(new THREE.PlaneGeometry(90, 48), harborWaterMat);
    basin.rotateX(-Math.PI / 2);
    basin.position.set(0, 0.1, 8);
    group.add(basin);

    const wharf = new THREE.Mesh(new THREE.BoxGeometry(92, 1.8, 22), wharfStoneMat);
    wharf.position.set(0, 0.9, -15);
    wharf.receiveShadow = true;
    group.add(wharf);

    // Mooring Bollards along dock edge
    for (let bx = -40; bx <= 40; bx += 16) {
      const bollard = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.32, 0.8, 8), wharfStoneMat);
      bollard.position.set(bx, 2.2, -4.5);
      group.add(bollard);
    }

    // 2. Two Traditional Wooden Pinisi Schooners moored along dock
    [-22, 20].forEach((px) => {
      const shipGroup = new THREE.Group();
      shipGroup.position.set(px, 1.2, 8);

      // Wooden Hull (slender with raked clipper bow)
      const hullGeo = new THREE.BoxGeometry(8, 3.2, 26);
      const hull = new THREE.Mesh(hullGeo, woodHullMat);
      hull.position.y = 1.0;
      hull.castShadow = true;
      shipGroup.add(hull);

      const deck = new THREE.Mesh(new THREE.BoxGeometry(7.4, 0.4, 25.4), woodDeckMat);
      deck.position.y = 2.7;
      shipGroup.add(deck);

      // Bowsprit pole extending forward
      const bowsprit = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 9, 6), woodHullMat);
      bowsprit.rotateX(Math.PI / 3);
      bowsprit.position.set(0, 3.8, 16);
      shipGroup.add(bowsprit);

      // Main Mast (H=22m) & Fore Mast (H=18m)
      [
        { mz: 3, h: 22 },
        { mz: -6, h: 18 }
      ].forEach((m) => {
        const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.28, m.h, 8), woodHullMat);
        mast.position.set(0, 2.7 + m.h / 2, m.mz);
        mast.rotateX(-0.06);
        shipGroup.add(mast);

        // Billowing Canvas Sails
        const sail = new THREE.Mesh(new THREE.PlaneGeometry(5.2, m.h * 0.65), sailCanvasMat);
        sail.position.set(0.1, 2.7 + m.h * 0.55, m.mz - 2.2);
        sail.rotateY(0.15);
        shipGroup.add(sail);
      });

      group.add(shipGroup);
    });

    // 3. Museum Bahari (Historic VOC Spice Warehouses)
    const warehouse = new THREE.Mesh(new THREE.BoxGeometry(55, 9, 16), colonialStuccoMat);
    warehouse.position.set(-15, 5.5, -28);
    warehouse.castShadow = true;
    group.add(warehouse);

    const whRoofGeo = new THREE.ConeGeometry(32, 6, 4);
    whRoofGeo.rotateY(Math.PI / 4);
    whRoofGeo.scale(1.0, 1.0, 0.42);
    const whRoof = new THREE.Mesh(whRoofGeo, vocRoofTileMat);
    whRoof.position.set(-15, 13, -28);
    group.add(whRoof);

    // 4. Menara Syahbandar (1839 Dutch Leaning Watchtower)
    const towerGroup = new THREE.Group();
    towerGroup.position.set(28, 0, -28);
    towerGroup.rotation.z = -0.045;

    const baseTower = new THREE.Mesh(new THREE.BoxGeometry(7, 14, 7), colonialStuccoMat);
    baseTower.position.y = 7;
    baseTower.castShadow = true;
    towerGroup.add(baseTower);

    const lanternDome = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 3.2, 4, 8), copperDomeMat);
    lanternDome.position.y = 16;
    towerGroup.add(lanternDome);

    group.add(towerGroup);

    return group;
  }

  /**
   * 55. Jembatan Angkat Kota Intan & Kawasan Kali Besar Utara
   * Jembatan jungkit kayu merah (1628) peninggalan VOC Belanda di atas Kali Besar dengan mekanisme tuas penarik kayu.
   */
  static createKotaIntanBridge() {
    const group = new THREE.Group();

    const timberRedMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.75 });
    const stoneAbutmentMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.85 });
    const chainMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.85, roughness: 0.3 });
    const canalWaterMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.2, metalness: 0.8 });

    // 1. Kali Besar Canal Water Surface
    const canal = new THREE.Mesh(new THREE.PlaneGeometry(28, 55), canalWaterMat);
    canal.rotateX(-Math.PI / 2);
    canal.position.y = 0.05;
    group.add(canal);

    // 2. Stone Abutments on Canal Banks
    [-11, 11].forEach((ax) => {
      const abutment = new THREE.Mesh(new THREE.BoxGeometry(6, 2.5, 42), stoneAbutmentMat);
      abutment.position.set(ax, 1.25, 0);
      abutment.receiveShadow = true;
      group.add(abutment);
    });

    // 3. Red Timber Bascule Deck Spans (Two leaves inclined slightly)
    const deckEast = new THREE.Mesh(new THREE.BoxGeometry(9, 0.45, 5.2), timberRedMat);
    deckEast.position.set(4.2, 2.3, 0);
    deckEast.rotation.z = -0.06;
    deckEast.castShadow = true;
    group.add(deckEast);

    const deckWest = new THREE.Mesh(new THREE.BoxGeometry(9, 0.45, 5.2), timberRedMat);
    deckWest.position.set(-4.2, 2.3, 0);
    deckWest.rotation.z = 0.06;
    deckWest.castShadow = true;
    group.add(deckWest);

    // Timber Side Railings
    [-2.5, 2.5].forEach((rz) => {
      const railEast = new THREE.Mesh(new THREE.BoxGeometry(9, 0.9, 0.15), timberRedMat);
      railEast.position.set(4.2, 3.0, rz);
      group.add(railEast);

      const railWest = new THREE.Mesh(new THREE.BoxGeometry(9, 0.9, 0.15), timberRedMat);
      railWest.position.set(-4.2, 3.0, rz);
      group.add(railWest);
    });

    // 4. Dutch Gallows Tower & Balance Lifting Beams (Rangka Tuas Angkat)
    [-7.5, 7.5].forEach((gx) => {
      // Twin vertical timber posts
      [-2.6, 2.6].forEach((gz) => {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.45, 7.5, 0.45), timberRedMat);
        post.position.set(gx, 5.8, gz);
        post.castShadow = true;
        group.add(post);
      });

      // Top Crossbeam
      const topBeam = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 5.6), timberRedMat);
      topBeam.position.set(gx, 9.6, 0);
      group.add(topBeam);

      // Diagonal Lifting Balance Levers
      [-2.6, 2.6].forEach((gz) => {
        const lever = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.35, 0.35), timberRedMat);
        lever.position.set(gx + (gx > 0 ? -1.2 : 1.2), 10.4, gz);
        lever.rotation.z = gx > 0 ? -0.25 : 0.25;
        group.add(lever);

        // Suspension Chain link
        const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 7.2, 6), chainMat);
        chain.position.set(gx + (gx > 0 ? -3.8 : 3.8), 6.5, gz);
        chain.rotation.z = gx > 0 ? 0.28 : -0.28;
        group.add(chain);
      });
    });

    return group;
  }

  /**
   * 56. Sentra Bisnis Kelapa Gading (Mall Kelapa Gading 1-5 & La Piazza)
   * Superblok komersial terbesar di utara-timur: podium mall modern bertingkat, kanopi atrium piramida kaca, dan menara jam klasik La Piazza Campanile.
   */
  static createMallKelapaGading() {
    const group = new THREE.Group();

    const mallFacadeMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.55 });
    const glassAtriumMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.15, metalness: 0.85 });
    const brickTowerMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.7 });
    const copperSpireMat = new THREE.MeshStandardMaterial({ color: 0x0d9488, metalness: 0.65, roughness: 0.3 });
    const clockFaceMat = new THREE.MeshBasicMaterial({ color: 0xfffbeb });

    // 1. Multi-Tier Commercial Podium (MKG 1 to 5)
    const podiumMain = new THREE.Mesh(new THREE.BoxGeometry(95, 18, 65), mallFacadeMat);
    podiumMain.position.set(0, 9, 0);
    podiumMain.castShadow = true;
    podiumMain.receiveShadow = true;
    group.add(podiumMain);

    // Terraced Upper Level
    const upperDeck = new THREE.Mesh(new THREE.BoxGeometry(70, 7, 45), mallFacadeMat);
    upperDeck.position.set(0, 21.5, -5);
    group.add(upperDeck);

    // 2. Central Glass Pyramid Skylight Atrium
    const pyramidGeo = new THREE.ConeGeometry(14, 9, 4);
    pyramidGeo.rotateY(Math.PI / 4);
    const pyramid = new THREE.Mesh(pyramidGeo, glassAtriumMat);
    pyramid.position.set(0, 29.5, -5);
    group.add(pyramid);

    // Glass Skywalk connecting mall wings
    const skybridge = new THREE.Mesh(new THREE.BoxGeometry(32, 4.5, 6), glassAtriumMat);
    skybridge.position.set(0, 14, 34);
    group.add(skybridge);

    // 3. La Piazza Campanile Clock Tower (H=36m)
    const towerGroup = new THREE.Group();
    towerGroup.position.set(-36, 0, 24);

    const towerBody = new THREE.Mesh(new THREE.BoxGeometry(8, 28, 8), brickTowerMat);
    towerBody.position.y = 14;
    towerBody.castShadow = true;
    towerGroup.add(towerBody);

    // 4 Illuminated Clock Faces
    [-4.05, 4.05].forEach((cx) => {
      const clock = new THREE.Mesh(new THREE.CircleGeometry(1.6, 16), clockFaceMat);
      clock.position.set(cx, 24, 0);
      clock.rotation.y = cx > 0 ? Math.PI / 2 : -Math.PI / 2;
      towerGroup.add(clock);
    });
    [-4.05, 4.05].forEach((cz) => {
      const clock = new THREE.Mesh(new THREE.CircleGeometry(1.6, 16), clockFaceMat);
      clock.position.set(0, 24, cz);
      clock.rotation.y = cz > 0 ? 0 : Math.PI;
      towerGroup.add(clock);
    });

    // Belfry Arches & Spire
    const belfry = new THREE.Mesh(new THREE.BoxGeometry(7.2, 5, 7.2), mallFacadeMat);
    belfry.position.y = 30.5;
    towerGroup.add(belfry);

    const spire = new THREE.Mesh(new THREE.ConeGeometry(4.5, 9, 4), copperSpireMat);
    spire.rotateY(Math.PI / 4);
    spire.position.y = 37.5;
    towerGroup.add(spire);

    group.add(towerGroup);

    return group;
  }

  /**
   * 57. Pelabuhan Samudera Tanjung Priok & Stasiun Bersejarah Priok
   * Pelabuhan laut terdalam tersibuk: Stasiun Art Deco 1914 kubah busur baja, Quay Container Cranes oranye-putih (H=48m), dan susunan kontainer kargo.
   */
  static createTanjungPriokPort() {
    const group = new THREE.Group();

    const quayConcreteMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.85 });
    const stationStuccoMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.65 });
    const steelArchMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8, roughness: 0.3 });
    const craneOrangeMat = new THREE.MeshStandardMaterial({ color: 0xea580c, metalness: 0.6, roughness: 0.4 });
    const craneWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.5, roughness: 0.4 });
    const oceanWaterMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.15, metalness: 0.85 });

    // 1. Deep Ocean Harbor Water & Concrete Wharf Quay
    const harbor = new THREE.Mesh(new THREE.PlaneGeometry(130, 45), oceanWaterMat);
    harbor.rotateX(-Math.PI / 2);
    harbor.position.set(0, 0.1, -40);
    group.add(harbor);

    const wharf = new THREE.Mesh(new THREE.BoxGeometry(130, 2.5, 45), quayConcreteMat);
    wharf.position.set(0, 1.25, -2);
    wharf.receiveShadow = true;
    group.add(wharf);

    // 2. 3 Quay Container Cranes (Ship-to-Shore Cranes H=46m)
    [-38, 0, 38].forEach((cx) => {
      const craneGroup = new THREE.Group();
      craneGroup.position.set(cx, 2.5, -16);

      // Gantry Lower Legs
      [-5, 5].forEach((lx) => {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(1.4, 22, 1.4), craneOrangeMat);
        leg.position.set(lx, 11, 0);
        leg.castShadow = true;
        craneGroup.add(leg);
      });

      // Upper Machine House / Cab
      const cab = new THREE.Mesh(new THREE.BoxGeometry(12, 6, 8), craneWhiteMat);
      cab.position.set(0, 25, 0);
      craneGroup.add(cab);

      // Massive Outstretched Sea Boom (Arm extending over ocean)
      const boom = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.2, 36), craneOrangeMat);
      boom.position.set(0, 28, -14);
      boom.castShadow = true;
      craneGroup.add(boom);

      // Backreach Counterweight Arm
      const backBoom = new THREE.Mesh(new THREE.BoxGeometry(2.0, 2.0, 16), craneOrangeMat);
      backBoom.position.set(0, 28, 11);
      craneGroup.add(backBoom);

      // A-frame Upper Pylon
      const pylon = new THREE.Mesh(new THREE.ConeGeometry(5, 12, 4), craneWhiteMat);
      pylon.position.set(0, 35, 0);
      craneGroup.add(pylon);

      group.add(craneGroup);
    });

    // 3. Stacks of Colorful 20ft & 40ft Shipping Containers
    const containerColors = [0x0284c7, 0x047857, 0xf97316, 0xbe123c, 0x475569];
    let colIdx = 0;
    for (let cRow = -32; cRow <= 32; cRow += 16) {
      for (let cZ = 6; cZ <= 16; cZ += 5) {
        for (let cTier = 0; cTier < 3; cTier++) {
          const cMat = new THREE.MeshStandardMaterial({
            color: containerColors[(colIdx++) % containerColors.length],
            metalness: 0.6,
            roughness: 0.4
          });
          const container = new THREE.Mesh(new THREE.BoxGeometry(12, 2.6, 4.2), cMat);
          container.position.set(cRow, 3.8 + cTier * 2.6, cZ);
          container.castShadow = true;
          group.add(container);
        }
      }
    }

    // 4. Stasiun Tanjung Priok (Art Deco 1914 Heritage Station)
    const stationGroup = new THREE.Group();
    stationGroup.position.set(0, 0, 36);

    const stationTerminal = new THREE.Mesh(new THREE.BoxGeometry(58, 12, 24), stationStuccoMat);
    stationTerminal.position.y = 6;
    stationTerminal.castShadow = true;
    stationGroup.add(stationTerminal);

    // Monumental Barrel Vault Steel-and-Glass Train Shed Roof
    const vaultGeo = new THREE.CylinderGeometry(14, 14, 52, 24, 1, false, 0, Math.PI);
    vaultGeo.rotateZ(Math.PI / 2);
    const vaultRoof = new THREE.Mesh(vaultGeo, steelArchMat);
    vaultRoof.position.set(0, 12, 0);
    vaultRoof.castShadow = true;
    stationGroup.add(vaultRoof);

    // Classical Station Facade Portico
    const portico = new THREE.Mesh(new THREE.BoxGeometry(24, 14, 4), stationStuccoMat);
    portico.position.set(0, 7, 13);
    stationGroup.add(portico);

    group.add(stationGroup);

    return group;
  }
}



