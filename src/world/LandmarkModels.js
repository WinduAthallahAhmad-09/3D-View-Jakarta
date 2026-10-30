import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { TextureGenerator } from './TextureGenerator.js';

/**
 * Geometrically faithful 3D architectural models of Jakarta's 81 landmarks
 * designed using real-world Google Maps & architectural references.
 */
export class LandmarkModels {
  /**
   * Menandai material kaca/jendela agar CityScene mendaftarkannya ke
   * nightMaterials saat model dipasang; intensitas malam bisa dibedakan
   * per material tanpa PointLight tambahan.
   */
  static tagNightWindow(material, nightIntensity = 0.62, nightEmissive = 0xffc46b) {
    if (!material) return material;
    material.userData = material.userData || {};
    material.userData.nightWindow = true;
    material.userData.nightIntensity = nightIntensity;
    material.userData.nightEmissive = nightEmissive;
    return material;
  }

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
   * Bake every mesh in a rail car group into two vertex-colored meshes:
   * one opaque body and one tinted glass shell. Builders keep constructing
   * cars from primitives, then call this so each car costs two draw calls.
   */
  static bakeRailCarGroup(carGroup) {
    const opaqueGeos = [];
    const glassGeos = [];
    const color = new THREE.Color();

    carGroup.children.slice().forEach((mesh) => {
      if (!mesh.isMesh) return;
      const mat = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
      if (!mat) return;

      const geo = mesh.geometry.clone();
      mesh.updateMatrix();
      geo.applyMatrix4(mesh.matrix);

      if (mat.name === 'rail-glass') {
        glassGeos.push(geo);
      } else {
        color.copy(mat.color || new THREE.Color(0xffffff));
        const count = geo.attributes.position.count;
        const colors = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
          colors[i * 3] = color.r;
          colors[i * 3 + 1] = color.g;
          colors[i * 3 + 2] = color.b;
        }
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        opaqueGeos.push(geo);
      }

      carGroup.remove(mesh);
    });

    if (opaqueGeos.length > 0) {
      const body = new THREE.Mesh(
        BufferGeometryUtils.mergeGeometries(opaqueGeos, false),
        new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.45, roughness: 0.38 })
      );
      body.name = 'rail-car-body';
      body.receiveShadow = true;
      carGroup.add(body);
    }

    if (glassGeos.length > 0) {
      const glass = new THREE.Mesh(
        BufferGeometryUtils.mergeGeometries(glassGeos, false),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9, roughness: 0.12 })
      );
      glass.name = 'rail-car-glass';
      glass.receiveShadow = true;
      carGroup.add(glass);
    }

    return carGroup;
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
    windowGlassMat.name = 'rail-glass';
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

    return this.bakeRailCarGroup(carGroup);
  }

  /**
   * KA Bandara Soekarno-Hatta (Railink) car
   * Two-car airport express set with white-blue livery, red accent line,
   * dark tinted windows, and a pantograph on the leading car.
   * Opaque details are merged into one vertex-colored mesh per car to keep
   * the whole consist at two draw calls per car.
   */
  static createSingleKABandaraCar(c, cars = 2) {
    const carLen = 18.8;
    const gap = 1.0;

    const opaqueGeos = [];
    const glassGeos = [];

    const paint = (geo, hex, x, y, z, target = opaqueGeos) => {
      const color = new THREE.Color(hex);
      const count = geo.attributes.position.count;
      const colors = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geo.translate(x, y, z);
      target.push(geo);
    };

    const box = (w, h, d, hex, x, y, z, target) => {
      paint(new THREE.BoxGeometry(w, h, d), hex, x, y, z, target);
    };

    // White body, roof cap, and air-conditioning pod
    box(3.1, 2.9, carLen, 0xf8fafc, 0, 2.25, 0);
    box(3.0, 0.24, carLen * 0.98, 0xe2e8f0, 0, 3.82, 0);
    box(2.4, 0.32, carLen * 0.28, 0xdbeafe, 0, 4.1, 0);

    // Railink blue band and red pinstripe
    box(3.16, 0.55, carLen * 0.99, 0x1d4ed8, 0, 1.55, 0);
    box(3.17, 0.14, carLen * 0.99, 0xdc2626, 0, 1.92, 0);

    // Blue passenger doors on both sides
    [-1, 1].forEach((side) => {
      [-carLen * 0.28, carLen * 0.28].forEach((dz) => {
        box(0.06, 2.1, 2.2, 0x1e40af, side * 1.57, 2.15, dz);
      });
    });

    // Bogies
    [-carLen * 0.32, carLen * 0.32].forEach((bz) => {
      box(2.6, 0.7, 3.6, 0x1e293b, 0, 0.55, bz);
    });

    // Pantograph on the leading car
    if (c === 0) {
      [-0.8, 0.8].forEach((px) => {
        box(0.12, 2.0, 0.12, 0x475569, px, 4.6, carLen * 0.22);
      });
      box(2.0, 0.12, 0.12, 0x475569, 0, 5.6, carLen * 0.22);
    }

    // Driver cab glazing and headlights
    const cabZ = c === 0 ? -carLen * 0.5 - 0.05 : (c === cars - 1 ? carLen * 0.5 + 0.05 : null);
    if (cabZ !== null) {
      paint(new THREE.BoxGeometry(2.5, 1.0, 0.1), 0x0f172a, 0, 2.62, cabZ, glassGeos);
      [-0.9, 0.9].forEach((hx) => {
        box(0.42, 0.22, 0.08, 0xfef08a, hx, 1.2, cabZ);
      });
    }

    // Gangway bellow between the two cars
    if (c < cars - 1) {
      box(2.0, 2.5, gap + 0.1, 0x334155, 0, 1.95, carLen * 0.5 + gap * 0.5);
    }

    // Continuous tinted side windows
    [-1, 1].forEach((side) => {
      paint(new THREE.BoxGeometry(0.08, 0.8, carLen * 0.8), 0x0f172a, side * 1.56, 2.62, 0, glassGeos);
    });

    const carGroup = new THREE.Group();

    const body = new THREE.Mesh(
      BufferGeometryUtils.mergeGeometries(opaqueGeos, false),
      new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.35, roughness: 0.42 })
    );
    body.name = 'rail-car-body';
    body.receiveShadow = true;
    carGroup.add(body);

    const glass = new THREE.Mesh(
      BufferGeometryUtils.mergeGeometries(glassGeos, false),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9, roughness: 0.12 })
    );
    glass.name = 'rail-car-glass';
    glass.receiveShadow = true;
    carGroup.add(glass);

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
    windowGlassMat.name = 'rail-glass';
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

    return this.bakeRailCarGroup(carGroup);
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
    windowGlassMat.name = 'rail-glass';
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
      carGroup.add(locoBody);

      // Aerodynamic Sloped Cab Noses (Front & Rear Double Cab)
      // Front Cab Nose
      const frontNose = new THREE.Mesh(new THREE.BoxGeometry(2.88, 2.3, 2.8), whiteMat);
      frontNose.position.set(0, 1.95, (locoLen - 2.8) * 0.5 + 0.8);
      frontNose.rotation.x = -0.15;
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

    return this.bakeRailCarGroup(carGroup);
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
    windowGlassMat.name = 'rail-glass';
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

    return this.bakeRailCarGroup(carGroup);
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
   * Single car for LRT Jakarta (Lin 1 Kelapa Gading - Velodrome)
   * Modern Hyundai Rotem light-rail EMU with distinctive white & scarlet red livery,
   * smoked aerodynamic panoramic glass, roof-mounted HVAC, pantograph, and LED destination screen.
   */
  static createSingleLRTJakartaCar(c, cars = 2) {
    const carLen = 15.5;

    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });
    const scarletRedMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.35 });
    const darkGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.15,
      metalness: 0.85
    });
    darkGlassMat.name = 'rail-glass';
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

    // 1. Sleek Lower Carbody (Stainless steel skirt)
    const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(2.65, 0.75, carLen), stainlessMat);
    lowerBody.position.set(0, 0.85, 0);
    carGroup.add(lowerBody);

    // 2. Main Cabin Body (Pearl white with bold scarlet red accent band)
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.65, 1.85, carLen), whiteMat);
    cabin.position.set(0, 2.15, 0);
    carGroup.add(cabin);

    // Scarlet Red Belt Stripe (Livery LRT Jakarta)
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.68, 0.42, carLen), scarletRedMat);
    stripe.position.set(0, 1.48, 0);
    carGroup.add(stripe);

    // 3. Panoramic Tinted Passenger Windows (continuous smoked ribbon)
    [-1.34, 1.34].forEach((sideX) => {
      const windowStrip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.85, carLen - 2.8), darkGlassMat);
      windowStrip.position.set(sideX, 2.25, 0);
      carGroup.add(windowStrip);

      // Automated sliding plug doors (4 per side)
      for (let d = -4.5; d <= 4.5; d += 3.0) {
        const door = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.7, 1.35), scarletRedMat);
        door.position.set(sideX, 1.95, d);
        carGroup.add(door);
      }
    });

    // 4. Roof Profile with HVAC pods
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(1.33, 1.33, carLen, 16, 1, false, 0, Math.PI), whiteMat);
    roof.rotation.z = Math.PI;
    roof.rotation.y = Math.PI / 2;
    roof.position.set(0, 3.05, 0);
    carGroup.add(roof);

    // Rooftop Air Conditioning pods
    [-3.8, 3.8].forEach((rz) => {
      const hvac = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.42, 3.2), stainlessMat);
      hvac.position.set(0, 3.25, rz);
      carGroup.add(hvac);
    });

    // 5. Driver Cab ends (Lead car c === 0 or End car c === cars - 1)
    const isFront = (c === 0);
    const isRear = (c === cars - 1);

    if (isFront || isRear) {
      const cabDir = isFront ? 1 : -1;
      const cabZ = (carLen * 0.5 + 0.5) * cabDir;

      // Aerodynamic sloped nose
      const nose = new THREE.Mesh(new THREE.BoxGeometry(2.65, 2.2, 1.2), scarletRedMat);
      nose.position.set(0, 2.05, cabZ);
      carGroup.add(nose);

      // Curved panoramic front windshield
      const frontWindshield = new THREE.Mesh(new THREE.BoxGeometry(2.35, 1.05, 0.25), darkGlassMat);
      frontWindshield.position.set(0, 2.45, cabZ + 0.55 * cabDir);
      carGroup.add(frontWindshield);

      // Headlights & Taillights
      [-0.85, 0.85].forEach((lx) => {
        const light = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.18, 0.15), isFront ? headlightMat : taillightMat);
        light.position.set(lx, 1.35, cabZ + 0.62 * cabDir);
        carGroup.add(light);
      });
    }

    // 6. Single-arm Pantograph on roof of lead car
    if (c === 0) {
      const pantoBase = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.2, 1.2), pantographMat);
      pantoBase.position.set(0, 3.48, 1.2);
      carGroup.add(pantoBase);

      const pantoArm = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.4), pantographMat);
      pantoArm.rotation.x = 0.55;
      pantoArm.position.set(0, 4.05, 1.55);
      carGroup.add(pantoArm);

      const pantoHead = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.06, 0.25), pantographMat);
      pantoHead.position.set(0, 4.65, 1.95);
      carGroup.add(pantoHead);
    }

    // 7. Bogies & Steel Wheel Sets
    [-4.8, 4.8].forEach((bz) => {
      const bogieFrame = new THREE.Mesh(new THREE.BoxGeometry(2.35, 0.35, 2.8), bogieMat);
      bogieFrame.position.set(0, 0.45, bz);
      carGroup.add(bogieFrame);

      [-1.15, 1.15].forEach((wx) => {
        [-0.85, 0.85].forEach((wz) => {
          const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.22, 16), stainlessMat);
          wheel.rotation.z = Math.PI / 2;
          wheel.position.set(wx, 0.38, bz + wz);
          carGroup.add(wheel);
        });
      });
    });

    return this.bakeRailCarGroup(carGroup);
  }

  static createLRTJakartaTrain(cars = 2) {
    const group = new THREE.Group();
    const carLen = 15.5;
    const gap = 0.85;

    for (let c = 0; c < cars; c++) {
      const car = this.createSingleLRTJakartaCar(c, cars);
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
    const glassAtriumMat = LandmarkModels.tagNightWindow(
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.15, metalness: 0.85 }),
      0.38,
      0x38bdf8
    );
    const brickTowerMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.7 });
    // Metalness tinggi tanpa env map memantulkan lampu bulan sebagai bilah
    // cyan di atas campanile; patina tembaga harus matte.
    const copperSpireMat = new THREE.MeshStandardMaterial({ color: 0x0d9488, metalness: 0.28, roughness: 0.55 });
    const clockFaceMat = LandmarkModels.tagNightWindow(
      new THREE.MeshStandardMaterial({ color: 0xfff7e0, roughness: 0.45 }),
      0.85,
      0xffe9a8
    );
    const mallWindowMat = LandmarkModels.tagNightWindow(
      new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.1, roughness: 0.5 }),
      0.5
    );

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

    // Pita jendela malam: sepuluh bilah digabung menjadi satu mesh.
    const bandGeos = [];
    const addWindowBand = (length, x, y, z, rotationY = 0) => {
      const bandGeo = new THREE.BoxGeometry(length, 1.25, 0.3);
      if (rotationY) bandGeo.rotateY(rotationY);
      bandGeo.translate(x, y, z);
      bandGeos.push(bandGeo);
    };
    [5.5, 9.5].forEach((y) => {
      addWindowBand(92, 0, y, 32.65);
      addWindowBand(92, 0, y, -32.65);
      addWindowBand(62, 47.65, y, 0, Math.PI / 2);
      addWindowBand(62, -47.65, y, 0, Math.PI / 2);
    });
    addWindowBand(66, 0, 22, 17.65);
    addWindowBand(66, 0, 22, -27.65);
    const windowBands = new THREE.Mesh(BufferGeometryUtils.mergeGeometries(bandGeos), mallWindowMat);
    windowBands.name = 'mall-window-bands';
    group.add(windowBands);

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
    const steelArchMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.35, roughness: 0.4 });
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

  /**
   * 58. Kantor Walikota Jakarta Barat & Kompleks Pemerintahan Kembangan
   * Balai kota terpadu: sayap bertingkat simetris, atap limasan piramida tembaga toska,
   * tangga kolosal, lapangan upacara bendera Merah Putih, dan taman hijau.
   */
  static createKantorWalikotaJakbar() {
    const group = new THREE.Group();

    const facadeMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5 });
    const darkGlassMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.15, metalness: 0.85 });
    const copperRoofMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.45, metalness: 0.4 });
    const plazaPavingMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.8 });
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 });
    const flagPoleMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.2 });
    const flagRedMat = new THREE.MeshBasicMaterial({ color: 0xdc2626 });
    const flagWhiteMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });

    // 1. Plaza Upacara & Taman Hijau Dasar (64m x 74m)
    const basePlaza = new THREE.Mesh(new THREE.BoxGeometry(64, 1.2, 74), plazaPavingMat);
    basePlaza.position.set(0, 0.6, 5);
    basePlaza.receiveShadow = true;
    group.add(basePlaza);

    // Front Green Lawns
    [-18, 18].forEach((lx) => {
      const lawn = new THREE.Mesh(new THREE.BoxGeometry(22, 1.3, 20), grassMat);
      lawn.position.set(lx, 0.65, 25);
      lawn.receiveShadow = true;
      group.add(lawn);
    });

    // 2. Central Municipal Hall (Main Tower Block H=38m)
    const mainBlock = new THREE.Mesh(new THREE.BoxGeometry(32, 28, 26), facadeMat);
    mainBlock.position.set(0, 14.6, -8);
    mainBlock.castShadow = true;
    mainBlock.receiveShadow = true;
    group.add(mainBlock);

    // Glass Window Bands across Main Hall
    for (let f = 5; f <= 25; f += 4) {
      const windowBand = new THREE.Mesh(new THREE.BoxGeometry(32.4, 1.8, 22), darkGlassMat);
      windowBand.position.set(0, f, -8);
      group.add(windowBand);
    }

    // 3. Symmetrical East and West Wings (H=20m)
    [-27, 27].forEach((wx) => {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(22, 18, 20), facadeMat);
      wing.position.set(wx, 9.6, -5);
      wing.castShadow = true;
      wing.receiveShadow = true;
      group.add(wing);

      // Ribbon windows on wings
      for (let wf = 4; wf <= 16; wf += 4) {
        const wingWindow = new THREE.Mesh(new THREE.BoxGeometry(22.4, 1.5, 16), darkGlassMat);
        wingWindow.position.set(wx, wf, -5);
        group.add(wingWindow);
      }
    });

    // 4. Stepped Pyramidal Copper Hipped Roof
    const roofTier1 = new THREE.Mesh(new THREE.ConeGeometry(24, 7, 4), copperRoofMat);
    roofTier1.rotateY(Math.PI / 4);
    roofTier1.position.set(0, 31.6, -8);
    roofTier1.castShadow = true;
    group.add(roofTier1);

    const roofTier2 = new THREE.Mesh(new THREE.ConeGeometry(14, 6, 4), copperRoofMat);
    roofTier2.rotateY(Math.PI / 4);
    roofTier2.position.set(0, 37.6, -8);
    roofTier2.castShadow = true;
    group.add(roofTier2);

    // Spire Finial
    const finial = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.8, 5, 8), flagPoleMat);
    finial.position.set(0, 42.6, -8);
    group.add(finial);

    // 5. Monumental Front Entrance Portico & Grand Stairs
    const stairs = new THREE.Mesh(new THREE.BoxGeometry(18, 2.5, 10), facadeMat);
    stairs.position.set(0, 1.85, 8);
    group.add(stairs);

    // 4 Entrance Pillars
    for (let px = -6; px <= 6; px += 4) {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 10, 8), facadeMat);
      pillar.position.set(px, 7.6, 6.5);
      pillar.castShadow = true;
      group.add(pillar);
    }
    const porticoCanopy = new THREE.Mesh(new THREE.BoxGeometry(18, 1.5, 6), facadeMat);
    porticoCanopy.position.set(0, 12.8, 6.5);
    group.add(porticoCanopy);

    // 6. Tiang Bendera Upacara Merah Putih
    const flagPole = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 16, 8), flagPoleMat);
    flagPole.position.set(0, 8.6, 26);
    group.add(flagPole);

    const flagRed = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.2, 2.4), flagRedMat);
    flagRed.position.set(0, 15.6, 27.2);
    group.add(flagRed);

    const flagWhite = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.2, 2.4), flagWhiteMat);
    flagWhite.position.set(0, 14.4, 27.2);
    group.add(flagWhite);

    return group;
  }

  /**
   * 59. Superblok Lippo Mall Puri & The St. Moritz
   * Megasuperblok Sentra Primer Baru Barat: podium mall bertingkat luas,
   * 6 menara pencakar langit apartemen The St. Moritz (H=120-175m), skybridge lengkung kaca, dan helipad.
   */
  static createLippoMallPuri() {
    const group = new THREE.Group();

    const podiumMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.45 });
    const glassTowerMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.15, metalness: 0.88 });
    const silverTrimMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.35, metalness: 0.6 });
    const darkPodiumMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.6 });
    const skybridgeGlassMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.8, transparent: true, opacity: 0.85 });
    const helipadMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.7 });
    const helipadYellowMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });

    // 1. Sprawling Commercial Mall Podium (94m x 84m x 24m)
    const podiumBase = new THREE.Mesh(new THREE.BoxGeometry(94, 16, 84), podiumMat);
    podiumBase.position.set(0, 8, 0);
    podiumBase.castShadow = true;
    podiumBase.receiveShadow = true;
    group.add(podiumBase);

    // Stepped Upper Terrace
    const podiumUpper = new THREE.Mesh(new THREE.BoxGeometry(76, 8, 68), darkPodiumMat);
    podiumUpper.position.set(0, 20, -2);
    group.add(podiumUpper);

    // Skylight Glass Strip
    const skylight = new THREE.Mesh(new THREE.BoxGeometry(40, 2.5, 18), glassTowerMat);
    skylight.position.set(0, 24.5, 0);
    group.add(skylight);

    // 2. 6 Skyscraper Residential Towers of The St. Moritz
    const towerConfigs = [
      { x: -30, z: -26, w: 18, d: 18, h: 172, label: "Presidential Tower" },
      { x: -30, z: 18, w: 17, d: 17, h: 148, label: "Royal Tower" },
      { x: 0, z: -28, w: 19, d: 18, h: 162, label: "New Amsterdam" },
      { x: 30, z: -26, w: 18, d: 17, h: 154, label: "Amber Tower" },
      { x: 30, z: 18, w: 17, d: 17, h: 135, label: "Ambassador Tower" },
      { x: 0, z: 24, w: 16, d: 16, h: 120, label: "Beverly Tower" }
    ];

    towerConfigs.forEach((t, idx) => {
      const towerGroup = new THREE.Group();
      towerGroup.position.set(t.x, 0, t.z);

      // Main Glass Shaft
      const towerBody = new THREE.Mesh(new THREE.BoxGeometry(t.w, t.h, t.d), glassTowerMat);
      towerBody.position.y = t.h * 0.5;
      towerBody.castShadow = true;
      towerBody.receiveShadow = true;
      towerGroup.add(towerBody);

      // Architectural Balcony/Mullion Bands every 12m
      for (let y = 26; y < t.h - 10; y += 12) {
        const floorBand = new THREE.Mesh(new THREE.BoxGeometry(t.w + 0.8, 1.2, t.d + 0.8), silverTrimMat);
        floorBand.position.y = y;
        towerGroup.add(floorBand);
      }

      // Sculpted Crown
      const crown = new THREE.Mesh(new THREE.BoxGeometry(t.w * 0.85, 6, t.d * 0.85), silverTrimMat);
      crown.position.y = t.h + 3;
      towerGroup.add(crown);

      // Helipad on the tallest tower (#0 Presidential Tower)
      if (idx === 0) {
        const heliBase = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 1.2, 16), helipadMat);
        heliBase.position.y = t.h + 6.6;
        towerGroup.add(heliBase);

        const heliRing = new THREE.Mesh(new THREE.RingGeometry(4.5, 5.2, 16), helipadYellowMat);
        heliRing.rotateX(-Math.PI / 2);
        heliRing.position.y = t.h + 7.3;
        towerGroup.add(heliRing);
      }

      group.add(towerGroup);
    });

    // 3. Elevated Glass Skybridges Connecting Towers & Podium
    const bridge1 = new THREE.Mesh(new THREE.BoxGeometry(24, 4, 4.5), skybridgeGlassMat);
    bridge1.position.set(-15, 26, -26);
    group.add(bridge1);

    const bridge2 = new THREE.Mesh(new THREE.BoxGeometry(24, 4, 4.5), skybridgeGlassMat);
    bridge2.position.set(15, 26, -26);
    group.add(bridge2);

    return group;
  }

  /**
   * 60. Puri Indah Mall & Kawasan Niaga Sentra Barat
   * Ikonik bergaya Istana Victoria (Victorian Castle): dinding bata terakota merah,
   * kubah-kubah tembaga berwarna toska (copper green), menara jam klasik, dan gerbang lengkung.
   */
  static createPuriIndahMall() {
    const group = new THREE.Group();

    const brickMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.75 });
    const trimStoneMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.6 });
    const toskaDomeMat = new THREE.MeshStandardMaterial({ color: 0x0d9488, metalness: 0.55, roughness: 0.35 });
    const goldFinialMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.85, roughness: 0.2 });
    const clockMat = new THREE.MeshBasicMaterial({ color: 0xfffbeb });
    const plazaMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.8 });

    // 1. Mall Podium & Paved Courtyard
    const basePlaza = new THREE.Mesh(new THREE.BoxGeometry(84, 1.2, 70), plazaMat);
    basePlaza.position.set(0, 0.6, 0);
    basePlaza.receiveShadow = true;
    group.add(basePlaza);

    // Main Victorian Brick Mall Building (72m x 56m x 18m)
    const mainBody = new THREE.Mesh(new THREE.BoxGeometry(72, 18, 56), brickMat);
    mainBody.position.set(0, 9.6, -2);
    mainBody.castShadow = true;
    mainBody.receiveShadow = true;
    group.add(mainBody);

    // Decorative Stone Stringcourses (Bands)
    [6, 12, 18].forEach((by) => {
      const band = new THREE.Mesh(new THREE.BoxGeometry(73, 0.8, 57), trimStoneMat);
      band.position.set(0, by, -2);
      group.add(band);
    });

    // 2. Grand Central Copper Dome (Toska Dome H=36m)
    const centralDrum = new THREE.Mesh(new THREE.CylinderGeometry(9.5, 9.5, 6, 16), trimStoneMat);
    centralDrum.position.set(0, 21.6, -2);
    centralDrum.castShadow = true;
    group.add(centralDrum);

    const mainDome = new THREE.Mesh(new THREE.SphereGeometry(9.5, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), toskaDomeMat);
    mainDome.position.set(0, 24.6, -2);
    mainDome.castShadow = true;
    group.add(mainDome);

    const mainSpire = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.6, 6, 8), goldFinialMat);
    mainSpire.position.set(0, 37.1, -2);
    group.add(mainSpire);

    // 3. 4 Corner Castle Turrets with Toska Domes
    const turretOffsets = [
      [-32, -26],
      [32, -26],
      [-32, 22],
      [32, 22]
    ];

    turretOffsets.forEach(([tx, tz]) => {
      const turret = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.5, 24, 12), brickMat);
      turret.position.set(tx, 12.6, tz);
      turret.castShadow = true;
      group.add(turret);

      const turretBand = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.6, 1.2, 12), trimStoneMat);
      turretBand.position.set(tx, 24.6, tz);
      group.add(turretBand);

      const turretDome = new THREE.Mesh(new THREE.ConeGeometry(4.6, 7.5, 12), toskaDomeMat);
      turretDome.position.set(tx, 28.8, tz);
      turretDome.castShadow = true;
      group.add(turretDome);

      const turretFinial = new THREE.Mesh(new THREE.SphereGeometry(0.6, 8, 8), goldFinialMat);
      turretFinial.position.set(tx, 33.1, tz);
      group.add(turretFinial);
    });

    // 4. Central Entrance Clock Tower (Front Entrance Portico)
    const clockTower = new THREE.Mesh(new THREE.BoxGeometry(16, 28, 12), brickMat);
    clockTower.position.set(0, 14.6, 26);
    clockTower.castShadow = true;
    group.add(clockTower);

    // Grand Arched Entry Portal
    const archPortal = new THREE.Mesh(new THREE.BoxGeometry(8, 7, 2), trimStoneMat);
    archPortal.position.set(0, 4.1, 32.1);
    group.add(archPortal);

    // 3 Illuminated Clock Faces
    const clockFront = new THREE.Mesh(new THREE.CircleGeometry(1.8, 16), clockMat);
    clockFront.position.set(0, 24, 32.1);
    group.add(clockFront);

    [-8.1, 8.1].forEach((cx) => {
      const sideClock = new THREE.Mesh(new THREE.CircleGeometry(1.6, 16), clockMat);
      sideClock.position.set(cx, 24, 26);
      sideClock.rotation.y = cx > 0 ? Math.PI / 2 : -Math.PI / 2;
      group.add(sideClock);
    });

    // Clock Tower Spire
    const towerRoof = new THREE.Mesh(new THREE.ConeGeometry(7, 9, 4), toskaDomeMat);
    towerRoof.rotateY(Math.PI / 4);
    towerRoof.position.set(0, 32.6, 26);
    towerRoof.castShadow = true;
    group.add(towerRoof);

    return group;
  }

  /**
   * 61. Pecinan Bersejarah Glodok & Pantjoran Chinatown
   * Pusat pecinan Batavia: Gerbang Paifang beratap genteng merah melengkung dengan ornamen emas & lentera,
   * Pantjoran Tea House 1635 bersejarah, dan Vihara Dharma Bhakti pagoda kelenteng Kim Tek Ie.
   */
  static createGlodokChinatown() {
    const group = new THREE.Group();

    const redLacquerMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.35 });
    const brightRedMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4 });
    const goldOrnamentMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.8, roughness: 0.25 });
    const stonePavingMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.85 });
    const heritageWallMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.7 });
    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.8 });
    const lanternMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 0.6
    });

    // 1. Street Pavement (Jl. Pancoran / Glodok Walk)
    const streetBase = new THREE.Mesh(new THREE.BoxGeometry(60, 0.8, 55), stonePavingMat);
    streetBase.position.set(0, 0.4, 0);
    streetBase.receiveShadow = true;
    group.add(streetBase);

    // 2. Monumental Paifang Chinese Archway (Gate H=18m)
    const paifangGroup = new THREE.Group();
    paifangGroup.position.set(0, 0.8, 16);

    // 4 Red Lacquer Pillars
    [-8, -2.8, 2.8, 8].forEach((px) => {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 12, 12), redLacquerMat);
      pillar.position.set(px, 6, 0);
      pillar.castShadow = true;
      paifangGroup.add(pillar);

      // Stone Base Plinth
      const plinth = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, 1.6), stonePavingMat);
      plinth.position.set(px, 0.6, 0);
      paifangGroup.add(plinth);
    });

    // Cross Beams & Golden Architraves
    const lowerBeam = new THREE.Mesh(new THREE.BoxGeometry(19, 0.9, 1.4), brightRedMat);
    lowerBeam.position.set(0, 10.5, 0);
    paifangGroup.add(lowerBeam);

    const upperBeam = new THREE.Mesh(new THREE.BoxGeometry(13, 0.9, 1.4), brightRedMat);
    upperBeam.position.set(0, 13.5, 0);
    paifangGroup.add(upperBeam);

    // Central Golden Plaque (Papan Nama Pantjoran Chinatown)
    const plaque = new THREE.Mesh(new THREE.BoxGeometry(6.5, 1.8, 0.3), goldOrnamentMat);
    plaque.position.set(0, 12, 0.8);
    paifangGroup.add(plaque);

    // Central Main Roof (Curved Chinese Gable Roof)
    const mainRoof = new THREE.Mesh(new THREE.ConeGeometry(9.5, 3.2, 4), brightRedMat);
    mainRoof.rotateY(Math.PI / 4);
    mainRoof.scale.set(1.4, 0.8, 0.9);
    mainRoof.position.set(0, 15.2, 0);
    mainRoof.castShadow = true;
    paifangGroup.add(mainRoof);

    // Golden Roof Ridge & Upturned Horns
    const roofRidge = new THREE.Mesh(new THREE.BoxGeometry(12, 0.4, 0.4), goldOrnamentMat);
    roofRidge.position.set(0, 16.7, 0);
    paifangGroup.add(roofRidge);

    // Side Eaves Roofs
    [-6.5, 6.5].forEach((sx) => {
      const sideRoof = new THREE.Mesh(new THREE.ConeGeometry(4.2, 2.0, 4), brightRedMat);
      sideRoof.rotateY(Math.PI / 4);
      sideRoof.scale.set(1.3, 0.8, 0.9);
      sideRoof.position.set(sx, 11.5, 0);
      paifangGroup.add(sideRoof);
    });

    // Hanging Glowing Red Lanterns
    [-5.5, -2, 2, 5.5].forEach((lx) => {
      const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 8), lanternMat);
      lantern.scale.set(1, 1.3, 1);
      lantern.position.set(lx, 9.2, 0);
      paifangGroup.add(lantern);
    });

    group.add(paifangGroup);

    // 3. Pantjoran Tea House 1635 (Colonial Dutch-Chinese Heritage Building)
    const teaHouse = new THREE.Group();
    teaHouse.position.set(-18, 0.8, -10);

    const teaHouseBody = new THREE.Mesh(new THREE.BoxGeometry(16, 10, 20), heritageWallMat);
    teaHouseBody.position.y = 5;
    teaHouseBody.castShadow = true;
    teaHouse.add(teaHouseBody);

    // Dark Timber Veranda & Louvred Windows
    const veranda = new THREE.Mesh(new THREE.BoxGeometry(16.4, 1.2, 20.4), darkWoodMat);
    veranda.position.y = 5.2;
    teaHouse.add(veranda);

    const teaHouseRoof = new THREE.Mesh(new THREE.ConeGeometry(14, 4.5, 4), brightRedMat);
    teaHouseRoof.rotateY(Math.PI / 4);
    teaHouseRoof.scale.set(1.1, 1, 1.4);
    teaHouseRoof.position.y = 12.2;
    teaHouse.add(teaHouseRoof);

    group.add(teaHouse);

    // 4. Vihara Dharma Bhakti (Kim Tek Ie 1650) & Pagoda Temple
    const viharaGroup = new THREE.Group();
    viharaGroup.position.set(18, 0.8, -10);

    const viharaBase = new THREE.Mesh(new THREE.BoxGeometry(18, 6, 20), brightRedMat);
    viharaBase.position.y = 3;
    viharaBase.castShadow = true;
    viharaGroup.add(viharaBase);

    // 3-Tiered Pagoda Shrine Roofs
    [6.5, 9.5, 12.5].forEach((ry, tier) => {
      const tierScale = 1.0 - tier * 0.22;
      const pagodaTier = new THREE.Mesh(new THREE.ConeGeometry(12 * tierScale, 2.5, 6), brightRedMat);
      pagodaTier.position.y = ry;
      pagodaTier.castShadow = true;
      viharaGroup.add(pagodaTier);

      // Gold Trim
      const goldTrim = new THREE.Mesh(new THREE.CylinderGeometry(12.2 * tierScale, 12.2 * tierScale, 0.2, 6), goldOrnamentMat);
      goldTrim.position.y = ry - 1.2;
      viharaGroup.add(goldTrim);
    });

    const pagodaSpire = new THREE.Mesh(new THREE.ConeGeometry(0.8, 3.5, 8), goldOrnamentMat);
    pagodaSpire.position.y = 15.2;
    viharaGroup.add(pagodaSpire);

    group.add(viharaGroup);

    return group;
  }

  /**
   * 62. Sentra Penyiaran RCTI & MNC Studios Kebon Jeruk
   * Kompleks penyiaran televisi swasta pertama dan terbesar: Menara RCTI (H=92m) kaca biru,
   * deretan studio siaran hangar (Studio RCTI+), piringan satelit uplink, dan menara pemancar baja merah-putih.
   */
  static createMNCStudiosKebonJeruk() {
    const group = new THREE.Group();

    const blueGlassMat = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      metalness: 0.88,
      roughness: 0.15,
      emissive: 0x1e3a8a,
      emissiveIntensity: 0.18
    });
    const whiteFacadeMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const hangarMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.65 });
    const steelTowerMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, metalness: 0.8, roughness: 0.3 });
    const whiteSteelMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.7, roughness: 0.3 });
    const satelliteDishMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.6, roughness: 0.3 });
    const redBeaconMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const corporateBlueMat = new THREE.MeshBasicMaterial({ color: 0x2563eb });

    // 1. Menara RCTI (Main Commercial & Broadcasting Office Tower H=92m)
    const towerGroup = new THREE.Group();
    towerGroup.position.set(-18, 0, 0);

    const towerBody = new THREE.Mesh(new THREE.BoxGeometry(22, 92, 22), blueGlassMat);
    towerBody.position.y = 46;
    towerBody.castShadow = true;
    towerBody.receiveShadow = true;
    towerGroup.add(towerBody);

    // Architectural White Chamfer & Mullions
    [-11.2, 11.2].forEach((cx) => {
      const cornerPillar = new THREE.Mesh(new THREE.BoxGeometry(1.2, 94, 1.2), whiteFacadeMat);
      cornerPillar.position.set(cx, 47, 0);
      towerGroup.add(cornerPillar);
    });

    // MNC Corporate Brand Band (Upper floors)
    const brandBand = new THREE.Mesh(new THREE.BoxGeometry(22.8, 4.5, 22.8), corporateBlueMat);
    brandBand.position.y = 82;
    towerGroup.add(brandBand);

    // Tower Sculpted Crown
    const crown = new THREE.Mesh(new THREE.BoxGeometry(18, 5, 18), whiteFacadeMat);
    crown.position.y = 94.5;
    towerGroup.add(crown);

    group.add(towerGroup);

    // 2. Broadcast Production Soundstages & Hangars (Studio RCTI+ Concert Hall)
    const hangarGroup = new THREE.Group();
    hangarGroup.position.set(18, 0, 0);

    // Main Mega Studio RCTI+ Hangar (42m x 22m x 52m)
    const mainHangar = new THREE.Mesh(new THREE.BoxGeometry(42, 22, 52), hangarMat);
    mainHangar.position.y = 11;
    mainHangar.castShadow = true;
    mainHangar.receiveShadow = true;
    hangarGroup.add(mainHangar);

    // Barrel Vaulted Roof Profile for Studio Acoustics
    const vaultGeo = new THREE.CylinderGeometry(21, 21, 52, 16, 1, false, 0, Math.PI);
    vaultGeo.rotateZ(Math.PI / 2);
    vaultGeo.rotateY(Math.PI / 2);
    const vaultRoof = new THREE.Mesh(vaultGeo, whiteFacadeMat);
    vaultRoof.position.set(0, 22, 0);
    vaultRoof.castShadow = true;
    hangarGroup.add(vaultRoof);

    // Adjacent Production Annex
    const annex = new THREE.Mesh(new THREE.BoxGeometry(32, 12, 20), whiteFacadeMat);
    annex.position.set(0, 6, 32);
    hangarGroup.add(annex);

    group.add(hangarGroup);

    // 3. Satellite Earth Station Uplink Parabolic Dishes
    const dishPositions = [
      [2, 23, 20],
      [-8, 23, 22],
      [12, 23, 22]
    ];
    dishPositions.forEach(([dx, dy, dz]) => {
      const dishGroup = new THREE.Group();
      dishGroup.position.set(dx, dy, dz);

      const dishPylon = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 2.5, 8), whiteFacadeMat);
      dishPylon.position.y = 1.25;
      dishGroup.add(dishPylon);

      // Angled Dish Bowl facing geosynchronous satellite
      const dish = new THREE.Mesh(new THREE.SphereGeometry(2.4, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), satelliteDishMat);
      dish.rotation.x = -Math.PI / 3;
      dish.position.y = 2.8;
      dishGroup.add(dish);

      group.add(dishGroup);
    });

    // 4. Steel Lattice Transmission Tower (Antena Pemancar TV H=72m)
    const mastGroup = new THREE.Group();
    mastGroup.position.set(-35, 0, 20);

    // Alternating Red & White Segments
    for (let s = 0; s < 6; s++) {
      const segH = 11;
      const rBot = 3.6 - s * 0.48;
      const rTop = 3.6 - (s + 1) * 0.48;
      const mat = s % 2 === 0 ? steelTowerMat : whiteSteelMat;

      const seg = new THREE.Mesh(new THREE.CylinderGeometry(Math.max(0.6, rTop), rBot, segH, 4), mat);
      seg.rotateY(Math.PI / 4);
      seg.position.y = s * segH + segH * 0.5;
      seg.castShadow = true;
      mastGroup.add(seg);
    }

    // Top Antenna Spire & Red Aviation Warning Beacon
    const mastSpire = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.4, 8, 8), whiteSteelMat);
    mastSpire.position.y = 70;
    mastGroup.add(mastSpire);

    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.6, 8, 8), redBeaconMat);
    beacon.position.y = 74.2;
    mastGroup.add(beacon);

    group.add(mastGroup);

    return group;
  }

  /**
   * 63. Museum MACAN & AKR Tower Gallery West
   * Museum seni rupa modern & kontemporer pertama di Indonesia:
   * Menara AKR Tower (H=145m) berfasad prisma diagonal modern, podium galeri museum, dan instalasi seni patung plaza.
   */
  static createMuseumMACAN() {
    const group = new THREE.Group();

    const cyanGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.9,
      roughness: 0.14,
      emissive: 0x0369a1,
      emissiveIntensity: 0.2
    });
    const whiteArtMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });
    const darkBasementMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 });
    const sculptureGoldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8, roughness: 0.25 });
    const pumpkinYellowMat = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.4 });
    const blackDotMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    const plazaPavingMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.85 });

    // 1. Paved Contemporary Sculpture Courtyard
    const basePlaza = new THREE.Mesh(new THREE.BoxGeometry(64, 1.2, 58), plazaPavingMat);
    basePlaza.position.set(0, 0.6, 0);
    basePlaza.receiveShadow = true;
    group.add(basePlaza);

    // 2. AKR Tower Gallery West (High-rise Office & Residence H=145m)
    const tower = new THREE.Mesh(new THREE.BoxGeometry(26, 142, 24), cyanGlassMat);
    tower.position.set(-12, 71.6, -8);
    tower.castShadow = true;
    tower.receiveShadow = true;
    group.add(tower);

    // Diagonal Geometric Faceted Fins on AKR Tower
    for (let f = 30; f < 135; f += 20) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(26.8, 1.4, 24.8), whiteArtMat);
      fin.position.set(-12, f, -8);
      group.add(fin);
    }

    // Sculpted Angled Crown (Prismatic Glass Peak)
    const prismCrown = new THREE.Mesh(new THREE.ConeGeometry(17, 10, 4), cyanGlassMat);
    prismCrown.rotateY(Math.PI / 4);
    prismCrown.position.set(-12, 147.6, -8);
    group.add(prismCrown);

    // 3. Museum MACAN Cultural Gallery Podium (Levels 1 to 5)
    const museumPodium = new THREE.Mesh(new THREE.BoxGeometry(32, 22, 34), whiteArtMat);
    museumPodium.position.set(14, 11.6, 6);
    museumPodium.castShadow = true;
    museumPodium.receiveShadow = true;
    group.add(museumPodium);

    // Cantilevered Upper Exhibition Gallery
    const cantileverGallery = new THREE.Mesh(new THREE.BoxGeometry(28, 9, 30), darkBasementMat);
    cantileverGallery.position.set(16, 26.6, 8);
    cantileverGallery.castShadow = true;
    group.add(cantileverGallery);

    // Panoramic Museum Glass Wall
    const galleryWindow = new THREE.Mesh(new THREE.BoxGeometry(28.4, 4.5, 12), cyanGlassMat);
    galleryWindow.position.set(16, 26.6, 17);
    group.add(galleryWindow);

    // 4. Outdoor Modern Sculpture Installation & Yayoi Kusama Pumpkin Homage
    const sculptureGroup = new THREE.Group();
    sculptureGroup.position.set(14, 1.2, -14);

    // Plinth
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(6, 1.2, 6), darkBasementMat);
    plinth.position.y = 0.6;
    sculptureGroup.add(plinth);

    // Pumpkin Bulb Body (Homage to Yayoi Kusama)
    const pumpkin = new THREE.Mesh(new THREE.SphereGeometry(2.2, 16, 12), pumpkinYellowMat);
    pumpkin.scale.set(1.2, 0.85, 1.2);
    pumpkin.position.y = 2.4;
    pumpkin.castShadow = true;
    sculptureGroup.add(pumpkin);

    // Pumpkin Stem
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 1.2, 8), blackDotMat);
    stem.position.y = 4.2;
    sculptureGroup.add(stem);

    // Abstract Steel Ring Sculpture
    const ring = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.45, 12, 24), sculptureGoldMat);
    ring.rotation.x = Math.PI / 3;
    ring.position.set(-18, 4.5, 14);
    ring.castShadow = true;
    group.add(ring);

    group.add(sculptureGroup);

    return group;
  }

  /**
   * 64. Stasiun Hub Terbesar Jatinegara (Meester Cornelis 1910)
   * Arsitektur Indische Art Nouveau karya Ir. S. Snuyf: Menara jam kembar, kanopi baja lengkung peron,
   * emplasemen jalur dwiganda DDT, dan integrasi gedung baru.
   */
  static createStasiunJatinegara() {
    const group = new THREE.Group();

    const stuccoMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.65 });
    const stonePavingMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.85 });
    const terracottaMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.75 });
    const steelArchMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.3 });
    const zincRoofMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.5, roughness: 0.4 });
    const clockMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, emissive: 0xfef08a, emissiveIntensity: 0.35 });
    const ballastMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.9 });
    const steelRailMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.25 });
    const modernGlassMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.15, metalness: 0.9 });

    // 1. Station Forecourt Plaza & Pavement
    const basePavement = new THREE.Mesh(new THREE.BoxGeometry(72, 1.0, 56), stonePavingMat);
    basePavement.position.set(0, 0.5, 0);
    basePavement.receiveShadow = true;
    group.add(basePavement);

    // 2. Central Heritage Station Hall (Meester Cornelis 1910)
    const centralHall = new THREE.Mesh(new THREE.BoxGeometry(36, 12, 18), stuccoMat);
    centralHall.position.set(0, 6.5, 10);
    centralHall.castShadow = true;
    centralHall.receiveShadow = true;
    group.add(centralHall);

    // Steep Art Nouveau Gambrel/Dutch Gabled Roof
    const hallRoof = new THREE.Mesh(new THREE.ConeGeometry(24, 6.5, 4), terracottaMat);
    hallRoof.rotateY(Math.PI / 4);
    hallRoof.scale.set(1.15, 0.9, 0.65);
    hallRoof.position.set(0, 15.5, 10);
    hallRoof.castShadow = true;
    group.add(hallRoof);

    // Front Arched Portico Concourse
    const portico = new THREE.Mesh(new THREE.BoxGeometry(22, 7.5, 6), stuccoMat);
    portico.position.set(0, 4.25, 20);
    portico.castShadow = true;
    group.add(portico);

    // 3. Twin Symmetrical Clock Towers on Left & Right Wings
    [-18, 18].forEach((tx) => {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(9, 22, 12), stuccoMat);
      tower.position.set(tx, 11.5, 10);
      tower.castShadow = true;
      tower.receiveShadow = true;
      group.add(tower);

      // Pyramid Gable Roof on Towers
      const towerRoof = new THREE.Mesh(new THREE.ConeGeometry(7.5, 6, 4), terracottaMat);
      towerRoof.rotateY(Math.PI / 4);
      towerRoof.position.set(tx, 25.5, 10);
      towerRoof.castShadow = true;
      group.add(towerRoof);

      // Classic Round Clock Face
      const clock = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.4, 16), clockMat);
      clock.rotateX(Math.PI / 2);
      clock.position.set(tx, 18.5, 16.2);
      group.add(clock);
    });

    // 4. Arched Steel Train Shed Platform Canopies (Over Island Platforms)
    [-10, 10].forEach((px) => {
      // Curved train shed canopy
      const archGeo = new THREE.CylinderGeometry(8.5, 8.5, 50, 16, 1, true, 0, Math.PI);
      archGeo.rotateZ(Math.PI / 2);
      archGeo.rotateY(Math.PI / 2);
      const canopy = new THREE.Mesh(archGeo, zincRoofMat);
      canopy.position.set(px, 12.0, -12);
      canopy.castShadow = true;
      group.add(canopy);

      // Support Arch Trusses
      for (let z = -32; z <= 8; z += 12) {
        const truss = new THREE.Mesh(new THREE.TorusGeometry(8.4, 0.35, 6, 16, Math.PI), steelArchMat);
        truss.rotateZ(Math.PI / 2);
        truss.rotateY(Math.PI / 2);
        truss.position.set(px, 12.0, z);
        group.add(truss);
      }
    });

    // 5. Double-Double Track (DDT) Rail Emplacement with 6 Parallel Steel Tracks
    const ballastBed = new THREE.Mesh(new THREE.BoxGeometry(48, 0.4, 54), ballastMat);
    ballastBed.position.set(0, 0.8, -12);
    ballastBed.receiveShadow = true;
    group.add(ballastBed);

    [-18, -12, -6, 6, 12, 18].forEach((rx) => {
      [-0.7, 0.7].forEach((subOffset) => {
        const rail = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.22, 54), steelRailMat);
        rail.position.set(rx + subOffset, 1.1, -12);
        group.add(rail);
      });
    });

    // 6. Modern Elevated Concourse Bridge (Integrasi Gedung Baru Jatinegara 2 Lantai)
    const modernConcourse = new THREE.Mesh(new THREE.BoxGeometry(42, 6, 12), modernGlassMat);
    modernConcourse.position.set(0, 14.5, -4);
    modernConcourse.castShadow = true;
    group.add(modernConcourse);

    return group;
  }

  /**
   * 65. Bandara Internasional Halim Perdanakusuma (HLP)
   * Pangkalan udara TNI-AU & gerbang kenegaraan: Terminal VIP bernuansa Nusantara,
   * Menara ATC dengan radome radar, hanggar Skadron 17, pesawat kepresidenan di apron, dan Runway 06/24 berarah 065.25°.
   */
  static createBandaraHalim() {
    const group = new THREE.Group();

    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8, metalness: 0.1 });
    const terminalWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const roofNusantaraMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.5, metalness: 0.3 });
    const atcGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.15,
      metalness: 0.88,
      emissive: 0x0369a1,
      emissiveIntensity: 0.25
    });
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.7 });
    const hangarMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.25, roughness: 0.5 });
    const airplaneWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.6, roughness: 0.2 });
    const flagRedMat = new THREE.MeshBasicMaterial({ color: 0xdc2626 });
    const runwayMarkingMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });

    // 1. Apron Ground Plane
    const apron = new THREE.Mesh(new THREE.BoxGeometry(110, 0.6, 90), asphaltMat);
    apron.position.set(0, 0.3, 0);
    apron.receiveShadow = true;
    group.add(apron);

    // 2. Runway 06/24 Strip (Heading 065.25°)
    const runwayGroup = new THREE.Group();
    runwayGroup.position.set(24, 0.4, 28);
    runwayGroup.rotation.y = -0.42; // Corresponds to ~065.25 heading

    const runwayMesh = new THREE.Mesh(new THREE.BoxGeometry(22, 0.4, 130), asphaltMat);
    runwayMesh.receiveShadow = true;
    runwayGroup.add(runwayMesh);

    // White Centerline Dashes
    for (let z = -55; z <= 55; z += 12) {
      const dash = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.1, 7), runwayMarkingMat);
      dash.position.set(0, 0.22, z);
      runwayGroup.add(dash);
    }

    // Threshold Piano Key Stripes
    [-58, 58].forEach((tz) => {
      for (let x = -8; x <= 8; x += 2.2) {
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.1, 6), runwayMarkingMat);
        stripe.position.set(x, 0.22, tz);
        runwayGroup.add(stripe);
      }
    });

    group.add(runwayGroup);

    // 3. Passenger & VIP Presidential Terminal
    const terminalGroup = new THREE.Group();
    terminalGroup.position.set(-22, 0.6, -18);

    const terminalBody = new THREE.Mesh(new THREE.BoxGeometry(52, 9, 26), terminalWhiteMat);
    terminalBody.position.y = 4.5;
    terminalBody.castShadow = true;
    terminalBody.receiveShadow = true;
    terminalGroup.add(terminalBody);

    // Slanted Nusantara Pitched Roof
    const roof1 = new THREE.Mesh(new THREE.ConeGeometry(32, 6, 4), roofNusantaraMat);
    roof1.rotateY(Math.PI / 4);
    roof1.scale.set(1.2, 0.8, 0.7);
    roof1.position.set(-12, 11.5, 0);
    roof1.castShadow = true;
    terminalGroup.add(roof1);

    const roof2 = new THREE.Mesh(new THREE.ConeGeometry(24, 5.5, 4), roofNusantaraMat);
    roof2.rotateY(Math.PI / 4);
    roof2.scale.set(1.1, 0.8, 0.7);
    roof2.position.set(14, 11.2, 0);
    roof2.castShadow = true;
    terminalGroup.add(roof2);

    // Boarding Gate Canopies & Jet Bridges
    [-14, 2, 18].forEach((gx) => {
      const jetBridge = new THREE.Mesh(new THREE.BoxGeometry(4.5, 3.2, 12), concreteMat);
      jetBridge.position.set(gx, 4.5, 15);
      terminalGroup.add(jetBridge);
    });

    group.add(terminalGroup);

    // 4. Air Traffic Control (ATC) Tower (H=32m)
    const atcGroup = new THREE.Group();
    atcGroup.position.set(22, 0.6, -26);

    // Tower Shaft
    const towerShaft = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 3.2, 26, 8), concreteMat);
    towerShaft.position.y = 13;
    towerShaft.castShadow = true;
    atcGroup.add(towerShaft);

    // Control Cab Room (Glazed Hexagon)
    const cab = new THREE.Mesh(new THREE.CylinderGeometry(4.8, 3.8, 4.5, 8), atcGlassMat);
    cab.position.y = 28;
    cab.castShadow = true;
    atcGroup.add(cab);

    // Roof & Spherical Radome
    const cabRoof = new THREE.Mesh(new THREE.CylinderGeometry(5.2, 5.2, 0.6, 8), concreteMat);
    cabRoof.position.y = 30.5;
    atcGroup.add(cabRoof);

    const radome = new THREE.Mesh(new THREE.SphereGeometry(1.6, 12, 12), terminalWhiteMat);
    radome.position.y = 32.2;
    atcGroup.add(radome);

    const atcBeacon = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), beaconMat);
    atcBeacon.position.y = 34.0;
    atcGroup.add(atcBeacon);

    group.add(atcGroup);

    // 5. Skadron 17 VIP Presidential Hangar
    const hangar = new THREE.Mesh(new THREE.BoxGeometry(32, 14, 28), hangarMat);
    hangar.position.set(-42, 7.6, 15);
    hangar.castShadow = true;
    group.add(hangar);

    const hangarArchGeo = new THREE.CylinderGeometry(16, 16, 28, 16, 1, false, 0, Math.PI);
    hangarArchGeo.rotateZ(Math.PI / 2);
    hangarArchGeo.rotateY(Math.PI / 2);
    const hangarArch = new THREE.Mesh(hangarArchGeo, hangarMat);
    hangarArch.position.set(-42, 14.6, 15);
    group.add(hangarArch);

    // 6. VIP Presidential Aircraft (Boeing 737 / BBJ Indonesia One) on Apron
    const plane = new THREE.Group();
    plane.position.set(-8, 2.5, 4);
    plane.rotation.y = 0.25;

    // Fuselage
    const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 19, 12), airplaneWhiteMat);
    fuselage.rotateX(Math.PI / 2);
    fuselage.castShadow = true;
    plane.add(fuselage);

    // Nose Cone
    const nose = new THREE.Mesh(new THREE.ConeGeometry(1.3, 3.5, 12), airplaneWhiteMat);
    nose.rotateX(-Math.PI / 2);
    nose.position.set(0, 0, 11);
    plane.add(nose);

    // Red-White Republic of Indonesia Stripe
    const redStripe = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.35, 12), flagRedMat);
    redStripe.position.set(0, 0.4, 1);
    plane.add(redStripe);

    // Swept Wings
    const wings = new THREE.Mesh(new THREE.BoxGeometry(17, 0.25, 3.8), airplaneWhiteMat);
    wings.position.set(0, -0.2, 0);
    wings.castShadow = true;
    plane.add(wings);

    // Tail Fin (Vertical Stabilizer)
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.25, 4.2, 3.0), flagRedMat);
    tail.position.set(0, 2.2, -8.5);
    plane.add(tail);

    group.add(plane);

    return group;
  }

  /**
   * 66. Taman Mini Indonesia Indah (TMII)
   * Megakompleks miniatur kebudayaan Nusantara 150 Ha: Danau Archipelago dengan gugusan miniatur pulau NKRI,
   * Teater IMAX Keong Emas berkubah spiral keemasan, Kastel Istana Anak-Anak merah bata, dan pilon kereta gantung.
   */
  static createTamanMiniIndonesiaIndah() {
    const group = new THREE.Group();

    const parkGreenMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });
    const waterBlueMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.15,
      metalness: 0.85,
      side: THREE.DoubleSide
    });
    const islandGreenMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.8 });
    const goldShellMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0xb45309,
      emissiveIntensity: 0.2
    });
    const brickRedMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.65 });
    const spireMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.45 });
    const cableSteelMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8, roughness: 0.3 });
    const gondolaMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.35 });

    // 1. Lush Green Parkland Base
    const parkBase = new THREE.Mesh(new THREE.BoxGeometry(110, 0.6, 95), parkGreenMat);
    parkBase.position.set(0, 0.3, 0);
    parkBase.receiveShadow = true;
    group.add(parkBase);

    // 2. Danau Miniatur Kepulauan Indonesia (Archipelago Lake)
    const lake = new THREE.Mesh(new THREE.CylinderGeometry(36, 36, 0.4, 32), waterBlueMat);
    lake.scale.set(1.35, 1.0, 0.95);
    lake.position.set(6, 0.55, 6);
    group.add(lake);

    // Miniatur 5 Pulau Besar Nusantara (NKRI Islands)
    // Pulau Sumatra
    const sumatra = new THREE.Mesh(new THREE.BoxGeometry(5, 0.6, 20), islandGreenMat);
    sumatra.position.set(-24, 0.85, 4);
    sumatra.rotation.y = 0.45;
    group.add(sumatra);

    // Pulau Jawa
    const jawa = new THREE.Mesh(new THREE.BoxGeometry(19, 0.6, 4.5), islandGreenMat);
    jawa.position.set(-6, 0.85, 18);
    jawa.rotation.y = -0.15;
    group.add(jawa);

    // Pulau Kalimantan
    const kalimantan = new THREE.Mesh(new THREE.BoxGeometry(11, 0.6, 11), islandGreenMat);
    kalimantan.position.set(-4, 0.85, 2);
    kalimantan.rotation.y = 0.2;
    group.add(kalimantan);

    // Pulau Sulawesi
    const sulawesi = new THREE.Mesh(new THREE.BoxGeometry(6, 0.6, 12), islandGreenMat);
    sulawesi.position.set(12, 0.85, 5);
    sulawesi.rotation.y = -0.3;
    group.add(sulawesi);

    // Pulau Papua
    const papua = new THREE.Mesh(new THREE.BoxGeometry(14, 0.6, 8), islandGreenMat);
    papua.position.set(32, 0.85, 6);
    papua.rotation.y = 0.15;
    group.add(papua);

    // 3. Teater IMAX Keong Emas (Golden Snail Dome) at [-34, 0, -22]
    const keongGroup = new THREE.Group();
    keongGroup.position.set(-34, 0.6, -22);

    // Spiral Golden Snail Shell Geometries
    const shellBase = new THREE.Mesh(new THREE.SphereGeometry(12, 24, 16, 0, Math.PI * 1.6, 0, Math.PI * 0.55), goldShellMat);
    shellBase.scale.set(1.4, 0.9, 1.1);
    shellBase.position.y = 0;
    shellBase.castShadow = true;
    keongGroup.add(shellBase);

    // Inner Spiral Crest
    const crest = new THREE.Mesh(new THREE.TorusGeometry(8, 2.2, 8, 24, Math.PI * 1.2), goldShellMat);
    crest.rotation.x = Math.PI / 2.4;
    crest.position.set(2, 6.5, -1);
    crest.castShadow = true;
    keongGroup.add(crest);

    // IMAX Entrance Portico
    const imaxEntry = new THREE.Mesh(new THREE.BoxGeometry(12, 3.5, 7), parkGreenMat);
    imaxEntry.position.set(-8, 1.75, 10);
    keongGroup.add(imaxEntry);

    group.add(keongGroup);

    // 4. Istana Anak-Anak Indonesia (Red Brick Fairy-Tale Castle) at [32, 0, -20]
    const castleGroup = new THREE.Group();
    castleGroup.position.set(32, 0.6, -20);

    const castleMain = new THREE.Mesh(new THREE.BoxGeometry(22, 11, 16), brickRedMat);
    castleMain.position.y = 5.5;
    castleMain.castShadow = true;
    castleMain.receiveShadow = true;
    castleGroup.add(castleMain);

    // Central Castle Keep Tower
    const keepTower = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 4.0, 16, 12), brickRedMat);
    keepTower.position.set(0, 16, 0);
    keepTower.castShadow = true;
    castleGroup.add(keepTower);

    const keepSpire = new THREE.Mesh(new THREE.ConeGeometry(4.2, 10, 12), spireMat);
    keepSpire.position.set(0, 29, 0);
    keepSpire.castShadow = true;
    castleGroup.add(keepSpire);

    // 4 Corner Turrets
    [[-11, -8], [-11, 8], [11, -8], [11, 8]].forEach(([cx, cz]) => {
      const turret = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.0, 14, 8), brickRedMat);
      turret.position.set(cx, 10, cz);
      turret.castShadow = true;
      castleGroup.add(turret);

      const turretSpire = new THREE.Mesh(new THREE.ConeGeometry(2.2, 6, 8), spireMat);
      turretSpire.position.set(cx, 20, cz);
      castleGroup.add(turretSpire);
    });

    group.add(castleGroup);

    // 5. Kereta Gantung (Cable Car) Pylons & Cabin traversing Archipelago Lake
    [-38, 38].forEach((px) => {
      const pylon = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.7, 24, 6), cableSteelMat);
      pylon.position.set(px, 12, 6);
      pylon.castShadow = true;
      group.add(pylon);

      const crossArm = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.5, 0.5), cableSteelMat);
      crossArm.position.set(px, 23.5, 6);
      group.add(crossArm);
    });

    // Cable Line across Lake
    const cable = new THREE.Mesh(new THREE.BoxGeometry(76, 0.08, 0.08), cableSteelMat);
    cable.position.set(0, 23.5, 6);
    group.add(cable);

    // Suspended Gondola Cabins
    [-12, 14].forEach((gx) => {
      const hanger = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.2, 4), cableSteelMat);
      hanger.position.set(gx, 22.4, 6);
      group.add(hanger);

      const gondola = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.8, 1.5), gondolaMat);
      gondola.position.set(gx, 20.8, 6);
      group.add(gondola);
    });

    return group;
  }

  /**
   * 67. Jakarta International Velodrome Rawamangun
   * Arena balap sepeda indoor UCI Category 1: Atap membran elips PTFE lengkung aerodinamis,
   * fasad kaca transparan, trek kayu pinus Siberia, dan skybridge integrasi ke Stasiun LRT Velodrome.
   */
  static createVelodromeRawamangun() {
    const group = new THREE.Group();

    const plazaMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.75 });
    const membraneRoofMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.32,
      metalness: 0.15,
      side: THREE.DoubleSide
    });
    const aeroGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.12,
      metalness: 0.9,
      transparent: true,
      opacity: 0.78
    });
    const siberianPineMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.65 });
    const steelTrussMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8, roughness: 0.3 });
    const lrtStationMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.45 });

    // 1. Olympic Plaza Pedestrian Ground
    const plaza = new THREE.Mesh(new THREE.BoxGeometry(84, 0.8, 68), plazaMat);
    plaza.position.set(0, 0.4, 0);
    plaza.receiveShadow = true;
    group.add(plaza);

    // 2. Velodrome Elliptic Outer Bowl (Podium & Aero Glazed Facade)
    const veloGroup = new THREE.Group();
    veloGroup.position.set(-6, 0, 0);

    // Lower Concrete Incline Podium
    const bowlPodium = new THREE.Mesh(new THREE.CylinderGeometry(29, 31, 7, 32), plazaMat);
    bowlPodium.scale.set(1.42, 1.0, 0.95);
    bowlPodium.position.y = 3.9;
    bowlPodium.receiveShadow = true;
    veloGroup.add(bowlPodium);

    // Aerodynamic Glazed Curtain Wall
    const glassCurtain = new THREE.Mesh(new THREE.CylinderGeometry(30, 29, 14, 32), aeroGlassMat);
    glassCurtain.scale.set(1.42, 1.0, 0.95);
    glassCurtain.position.y = 13.5;
    glassCurtain.castShadow = true;
    veloGroup.add(glassCurtain);

    // 3. Signature PTFE Membrane Elliptic Saddle Roof
    const roofGeo = new THREE.CylinderGeometry(31, 30.5, 4.5, 32, 1, false);
    roofGeo.scale(1.44, 0.65, 0.96);
    const roof = new THREE.Mesh(roofGeo, membraneRoofMat);
    roof.position.y = 21.0;
    roof.castShadow = true;
    veloGroup.add(roof);

    // Sweeping Aerodynamic Roof Truss Arch
    const archTruss = new THREE.Mesh(new THREE.TorusGeometry(32, 0.6, 8, 32, Math.PI), steelTrussMat);
    archTruss.rotateZ(Math.PI / 2);
    archTruss.scale.set(0.35, 1.44, 0.95);
    archTruss.position.set(0, 21.5, 0);
    veloGroup.add(archTruss);

    // 4. Interior Banked Siberian Pine Cycling Track (Visible through glass)
    const trackRing = new THREE.Mesh(new THREE.TorusGeometry(20, 2.2, 6, 24), siberianPineMat);
    trackRing.rotateX(Math.PI / 2);
    trackRing.scale.set(1.35, 0.85, 1.0);
    trackRing.position.set(0, 7.8, 0);
    veloGroup.add(trackRing);

    group.add(veloGroup);

    // 5. Skybridge Integrasi ke Stasiun LRT Jakarta Velodrome (Sisi Timur)
    const skybridge = new THREE.Mesh(new THREE.BoxGeometry(32, 3.2, 4.8), steelTrussMat);
    skybridge.position.set(24, 8.5, 8);
    skybridge.castShadow = true;
    group.add(skybridge);

    const bridgeGlass = new THREE.Mesh(new THREE.BoxGeometry(31.6, 2.6, 5.0), aeroGlassMat);
    bridgeGlass.position.set(24, 8.8, 8);
    group.add(bridgeGlass);

    // Stasiun LRT Velodrome Elevated Box
    const lrtStation = new THREE.Mesh(new THREE.BoxGeometry(16, 7.5, 36), lrtStationMat);
    lrtStation.position.set(40, 8.5, 8);
    lrtStation.castShadow = true;
    group.add(lrtStation);

    // LRT Viaduct Columns
    [-10, 10].forEach((sz) => {
      const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 9, 8), plazaMat);
      pier.position.set(40, 4.5, 8 + sz);
      group.add(pier);
    });

    return group;
  }

  /**
   * 68. Simpang Susun Cawang & Cawang Intermodal Hub
   * Spaghetti junction 4 tingkat tersibuk di Asia Tenggara: Pertemuan 4 jalan tol utama
   * (Tol Dalam Kota, Tol Jagorawi, Tol Jakarta-Cikampek, Tol Ir. Wiyoto Wiyono) dan Stasiun Hub Layang LRT Jabodebek.
   */
  static createSimpangSusunCawang() {
    const group = new THREE.Group();

    const roadMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8, metalness: 0.1 });
    const viaductDeckMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.65 });
    const pierMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.7 });
    const grassIslandMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });
    const lrtBoxMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const lrtRedStripeMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.45 });
    const railMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85 });

    // 1. Ground Level Intersection & Green Cloverleaf Islands
    const groundInterchange = new THREE.Mesh(new THREE.BoxGeometry(86, 0.6, 86), grassIslandMat);
    groundInterchange.position.set(0, 0.3, 0);
    groundInterchange.receiveShadow = true;
    group.add(groundInterchange);

    // Ground Arterial Roads (Jl. MT Haryono & Jl. DI Panjaitan)
    const atGradeEW = new THREE.Mesh(new THREE.BoxGeometry(86, 0.2, 22), roadMat);
    atGradeEW.position.set(0, 0.42, 0);
    group.add(atGradeEW);

    const atGradeNS = new THREE.Mesh(new THREE.BoxGeometry(22, 0.22, 86), roadMat);
    atGradeNS.position.set(0, 0.43, 0);
    group.add(atGradeNS);

    // 2. Level 2 Elevated Highway (Tol Dalam Kota Cawang - Grogol, Y=6.5m)
    const lvl2Deck = new THREE.Mesh(new THREE.BoxGeometry(86, 1.4, 12), viaductDeckMat);
    lvl2Deck.position.set(0, 6.5, -4);
    lvl2Deck.castShadow = true;
    group.add(lvl2Deck);

    [-30, 0, 30].forEach((px) => {
      const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.6, 6.5, 8), pierMat);
      pier.position.set(px, 3.25, -4);
      group.add(pier);
    });

    // 3. Level 3 Elevated Highway (Tol Jagorawi arah Bogor <-> Tol Wiyoto Wiyono arah Priok, Y=12.5m)
    const lvl3Deck = new THREE.Mesh(new THREE.BoxGeometry(12, 1.4, 86), viaductDeckMat);
    lvl3Deck.position.set(4, 12.5, 0);
    lvl3Deck.castShadow = true;
    group.add(lvl3Deck);

    [-30, 0, 30].forEach((pz) => {
      const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.6, 12.5, 8), pierMat);
      pier.position.set(4, 6.25, pz);
      group.add(pier);
    });

    // 4. Level 4 Sweeping Curved Interchange Ramp (Flyover Melingkar Y=18m)
    const rampCurvePoints = [
      new THREE.Vector3(-38, 7, 24),
      new THREE.Vector3(-18, 13, 26),
      new THREE.Vector3(12, 18, 14),
      new THREE.Vector3(26, 15, -12),
      new THREE.Vector3(38, 10, -32)
    ];
    const rampCurve = new THREE.CatmullRomCurve3(rampCurvePoints);
    const rampGeo = new THREE.TubeGeometry(rampCurve, 32, 3.2, 8, false);
    rampGeo.scale(1.0, 0.25, 1.0);
    const curvedRamp = new THREE.Mesh(rampGeo, viaductDeckMat);
    curvedRamp.castShadow = true;
    group.add(curvedRamp);

    // High Piers supporting Ramp Curve
    [[-18, 13, 26], [12, 18, 14], [26, 15, -12]].forEach(([px, py, pz]) => {
      const pier = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.5, py, 8), pierMat);
      pier.position.set(px, py * 0.5, pz);
      group.add(pier);
    });

    // 5. Stasiun LRT Jabodebek Cawang Intermodal Hub (Y=15.0m Elevated Box)
    const lrtStationGroup = new THREE.Group();
    lrtStationGroup.position.set(-24, 15.0, -18);

    const stationBox = new THREE.Mesh(new THREE.BoxGeometry(46, 7.5, 16), lrtBoxMat);
    stationBox.castShadow = true;
    lrtStationGroup.add(stationBox);

    // Red Accent Line
    const redStripe = new THREE.Mesh(new THREE.BoxGeometry(46.4, 0.9, 16.4), lrtRedStripeMat);
    redStripe.position.y = 1.8;
    lrtStationGroup.add(redStripe);

    // Track Deck passing through station
    const trackDeck = new THREE.Mesh(new THREE.BoxGeometry(54, 1.2, 7.5), viaductDeckMat);
    trackDeck.position.y = -1.2;
    lrtStationGroup.add(trackDeck);

    [-2, 2].forEach((tx) => {
      const track = new THREE.Mesh(new THREE.BoxGeometry(54, 0.25, 1.0), railMat);
      track.position.set(0, -0.5, tx);
      lrtStationGroup.add(track);
    });

    // Massive Portal Pillars for LRT Station
    [-16, 16].forEach((cx) => {
      const col = new THREE.Mesh(new THREE.BoxGeometry(2.5, 15, 14), pierMat);
      col.position.set(cx, -7.5, 0);
      lrtStationGroup.add(col);
    });

    group.add(lrtStationGroup);

    return group;
  }

  /**
   * 69. Monumen Pancasila Sakti Lubang Buaya
   * Memorial 7 Pahlawan Revolusi: Plaza upacara marmer, dinding relief andesit sejarah 1965,
   * 7 patung perunggu pahlawan berlatar Burung Garuda raksasa 17m tembaga, dan cungkup Sumur Maut.
   */
  static createMonumenPancasilaSakti() {
    const group = new THREE.Group();

    const plazaStoneMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.85 });
    const blackGraniteMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4, metalness: 0.8 });
    const andesiteReliefMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.8 });
    const copperGarudaMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.88,
      roughness: 0.22,
      emissive: 0xb45309,
      emissiveIntensity: 0.18
    });
    const bronzeHeroMat = new THREE.MeshStandardMaterial({ color: 0x451a03, metalness: 0.75, roughness: 0.4 });
    const whiteMarbleMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });
    const roofTileMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.75 });
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });

    // 1. Memorial Park Lawn & Ceremonial Plaza
    const memorialBase = new THREE.Mesh(new THREE.BoxGeometry(70, 0.6, 58), lawnMat);
    memorialBase.position.set(0, 0.3, 0);
    memorialBase.receiveShadow = true;
    group.add(memorialBase);

    // Granite Ceremonial Parade Plaza
    const plaza = new THREE.Mesh(new THREE.BoxGeometry(54, 0.8, 38), plazaStoneMat);
    plaza.position.set(0, 0.5, 4);
    plaza.receiveShadow = true;
    group.add(plaza);

    // Stepped Black Granite Plinth for the Statues
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(38, 1.6, 12), blackGraniteMat);
    plinth.position.set(0, 1.4, -4);
    plinth.castShadow = true;
    plinth.receiveShadow = true;
    group.add(plinth);

    // 2. Andesite Historical Relief Wall (Dinding Relief Sejarah G30S/PKI)
    const reliefWall = new THREE.Mesh(new THREE.BoxGeometry(36, 10, 2.4), andesiteReliefMat);
    reliefWall.position.set(0, 6.5, -9);
    reliefWall.castShadow = true;
    group.add(reliefWall);

    // Relief Wall Carved Frieze Mouldings
    const wallCap = new THREE.Mesh(new THREE.BoxGeometry(37, 0.8, 2.8), andesiteReliefMat);
    wallCap.position.set(0, 11.8, -9);
    group.add(wallCap);

    // 3. Central Pylon & Giant Copper Garuda Pancasila (H=17m)
    const pylon = new THREE.Mesh(new THREE.BoxGeometry(3.6, 18, 2.4), whiteMarbleMat);
    pylon.position.set(0, 10.5, -8.5);
    pylon.castShadow = true;
    group.add(pylon);

    // Giant Copper Garuda Sculpture atop/in-front of pylon
    const garudaGroup = new THREE.Group();
    garudaGroup.position.set(0, 15.5, -7.0);

    // Garuda Body & Heraldic Shield (Pancasila)
    const garudaBody = new THREE.Mesh(new THREE.BoxGeometry(3.2, 4.2, 1.4), copperGarudaMat);
    garudaBody.castShadow = true;
    garudaGroup.add(garudaBody);

    // Proud Eagle Head facing East (right)
    const eagleHead = new THREE.Mesh(new THREE.ConeGeometry(1.0, 2.0, 8), copperGarudaMat);
    eagleHead.rotateZ(-Math.PI / 3);
    eagleHead.position.set(1.4, 2.6, 0);
    garudaGroup.add(eagleHead);

    // Sweeping Wings (17 Sacred Flight Feathers Wingspan ~14m)
    [-1, 1].forEach((dir) => {
      const wingGeo = new THREE.BoxGeometry(6.5, 2.8, 0.6);
      wingGeo.rotateZ(dir * 0.35);
      const wing = new THREE.Mesh(wingGeo, copperGarudaMat);
      wing.position.set(dir * 4.2, 1.6, -0.2);
      wing.castShadow = true;
      garudaGroup.add(wing);
    });

    // Tail Feathers (8 Sacred Tail Feathers)
    const tailFeathers = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.2, 0.5), copperGarudaMat);
    tailFeathers.position.set(0, -2.8, -0.2);
    garudaGroup.add(tailFeathers);

    group.add(garudaGroup);

    // 4. Seven Bronze Statues of the Revolutionary Heroes (7 Pahlawan Revolusi)
    // Ahmad Yani in center (taller, in front), flanked by 6 comrades
    const heroPositions = [
      { x: 0, z: -2.5, isCommander: true },   // Jenderal TNI Anumerta Ahmad Yani (Center)
      { x: -5, z: -3.2, isCommander: false },  // Letjen Suprapto
      { x: 5, z: -3.2, isCommander: false },   // Letjen S. Parman
      { x: -10, z: -3.8, isCommander: false }, // Letjen M.T. Haryono
      { x: 10, z: -3.8, isCommander: false },  // Mayjen D.I. Panjaitan
      { x: -14, z: -4.4, isCommander: false }, // Mayjen Sutoyo Siswomiharjo
      { x: 14, z: -4.4, isCommander: false }   // Kapten Pierre Tendean
    ];

    heroPositions.forEach((h) => {
      const heroGroup = new THREE.Group();
      heroGroup.position.set(h.x, 2.2, h.z);

      const hScale = h.isCommander ? 1.15 : 1.0;

      // Small Bronze Plinth
      const baseBox = new THREE.Mesh(new THREE.BoxGeometry(1.6 * hScale, 0.4, 1.6 * hScale), blackGraniteMat);
      baseBox.position.y = 0.2;
      heroGroup.add(baseBox);

      // Hero Figure (Military Uniformed Torso & Head)
      const torso = new THREE.Mesh(new THREE.BoxGeometry(1.2 * hScale, 2.4 * hScale, 0.8 * hScale), bronzeHeroMat);
      torso.position.y = 1.5 * hScale;
      torso.castShadow = true;
      heroGroup.add(torso);

      const head = new THREE.Mesh(new THREE.SphereGeometry(0.38 * hScale, 8, 8), bronzeHeroMat);
      head.position.y = 2.9 * hScale;
      heroGroup.add(head);

      // Military Officer Cap
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.55 * hScale, 0.45 * hScale, 0.3 * hScale, 8), bronzeHeroMat);
      cap.position.y = 3.2 * hScale;
      heroGroup.add(cap);

      group.add(heroGroup);
    });

    // 5. Cungkup Sumur Maut (Historic Well Shrine Pavilion at [22, 0, 12])
    const wellShrine = new THREE.Group();
    wellShrine.position.set(22, 0.5, 12);

    // Marble Base
    const wellBase = new THREE.Mesh(new THREE.BoxGeometry(12, 0.6, 12), whiteMarbleMat);
    wellBase.position.y = 0.3;
    wellShrine.add(wellBase);

    // Sumur Maut Well Opening (Diameter 1.5m)
    const wellCylinder = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 1.2, 16), whiteMarbleMat);
    wellCylinder.position.y = 0.9;
    wellShrine.add(wellCylinder);

    // Cungkup Pavilion Octagonal Roof
    const pavilionRoof = new THREE.Mesh(new THREE.ConeGeometry(5.5, 3.2, 8), roofTileMat);
    pavilionRoof.position.y = 6.2;
    pavilionRoof.castShadow = true;
    wellShrine.add(pavilionRoof);

    // 4 Corner Wooden/Stone Pillars
    [[-3.5, -3.5], [-3.5, 3.5], [3.5, -3.5], [3.5, 3.5]].forEach(([px, pz]) => {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 4.8, 8), whiteMarbleMat);
      col.position.set(px, 2.7, pz);
      wellShrine.add(col);
    });

    group.add(wellShrine);

    return group;
  }

  /**
   * 70. Rumah Sakit Graha Kedoya
   * Menara kembar rumah sakit modern 10 lantai: Podium IGD berkanopi drop-off,
   * fasad kaca cyan bergaris putih, pusat diagnostik, dan landasan helipad medis di atap.
   */
  static createRSGrahaKedoya() {
    const group = new THREE.Group();

    const whiteWallMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.45 });
    const cyanGlassMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.15, metalness: 0.85, transparent: true, opacity: 0.82 });
    const medicalRedMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.35 });
    const steelDarkMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const tarmacMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.85 });
    const yellowStripeMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.4 });
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });

    // 1. Ground Plaza & Perimeter Driveway
    const ground = new THREE.Mesh(new THREE.BoxGeometry(64, 0.6, 56), tarmacMat);
    ground.position.set(0, 0.3, 0);
    ground.receiveShadow = true;
    group.add(ground);

    const greenPatch = new THREE.Mesh(new THREE.BoxGeometry(60, 0.7, 10), lawnMat);
    greenPatch.position.set(0, 0.35, -20);
    group.add(greenPatch);

    // 2. Podium IGD & Diagnostic Center (Lantai 1-3)
    const podium = new THREE.Mesh(new THREE.BoxGeometry(54, 8, 42), whiteWallMat);
    podium.position.set(0, 4.3, 0);
    podium.castShadow = true;
    podium.receiveShadow = true;
    group.add(podium);

    // Glass curtain on podium front
    const podiumGlass = new THREE.Mesh(new THREE.BoxGeometry(50, 5, 1.2), cyanGlassMat);
    podiumGlass.position.set(0, 4.5, 21.2);
    group.add(podiumGlass);

    // Emergency Drop-off Canopy (Kanopi IGD)
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(22, 1.2, 12), whiteWallMat);
    canopy.position.set(0, 5.2, 26);
    canopy.castShadow = true;
    group.add(canopy);

    [-9, 9].forEach((px) => {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 5.2, 8), steelDarkMat);
      post.position.set(px, 2.6, 31);
      group.add(post);
    });

    // Red Emergency Sign Slab
    const emergencySign = new THREE.Mesh(new THREE.BoxGeometry(16, 1.4, 0.4), medicalRedMat);
    emergencySign.position.set(0, 5.9, 26.5);
    group.add(emergencySign);

    // 3. Twin Hospital Towers (East & West Wings, 10 Floors)
    [-14, 14].forEach((tx, idx) => {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(22, 28, 30), whiteWallMat);
      tower.position.set(tx, 22.0, 0);
      tower.castShadow = true;
      group.add(tower);

      // Vertical Window Strips (Cyan Glass)
      const windowStrip = new THREE.Mesh(new THREE.BoxGeometry(18, 24, 30.6), cyanGlassMat);
      windowStrip.position.set(tx, 22.0, 0);
      group.add(windowStrip);

      // Parapet trim on tower top
      const trim = new THREE.Mesh(new THREE.BoxGeometry(22.8, 1.0, 30.8), steelDarkMat);
      trim.position.set(tx, 36.5, 0);
      group.add(trim);
    });

    // 4. Central Connecting Skybridge Atrium
    const skybridge = new THREE.Mesh(new THREE.BoxGeometry(10, 18, 18), cyanGlassMat);
    skybridge.position.set(0, 20.0, 0);
    skybridge.castShadow = true;
    group.add(skybridge);

    // 5. Red Cross Medical Emblem on Center Bridge
    const crossV = new THREE.Mesh(new THREE.BoxGeometry(1.6, 6.0, 0.4), medicalRedMat);
    crossV.position.set(0, 20.0, 9.3);
    group.add(crossV);

    const crossH = new THREE.Mesh(new THREE.BoxGeometry(6.0, 1.6, 0.4), medicalRedMat);
    crossH.position.set(0, 20.0, 9.3);
    group.add(crossH);

    // 6. Helipad Medis di Atap Menara Timur (tx = 14)
    const helipadPlatform = new THREE.Mesh(new THREE.CylinderGeometry(8.5, 9.0, 1.2, 16), steelDarkMat);
    helipadPlatform.position.set(14, 37.5, 0);
    helipadPlatform.castShadow = true;
    group.add(helipadPlatform);

    // Helipad Yellow Circle Ring
    const heliRing = new THREE.Mesh(new THREE.RingGeometry(6.5, 7.2, 24), yellowStripeMat);
    heliRing.rotateX(-Math.PI / 2);
    heliRing.position.set(14, 38.12, 0);
    group.add(heliRing);

    // Helipad White "H" Letter
    const hBar1 = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 5.0), whiteWallMat);
    hBar1.rotateX(-Math.PI / 2);
    hBar1.position.set(12.5, 38.14, 0);
    group.add(hBar1);

    const hBar2 = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 5.0), whiteWallMat);
    hBar2.rotateX(-Math.PI / 2);
    hBar2.position.set(15.5, 38.14, 0);
    group.add(hBar2);

    const hCross = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 1.0), whiteWallMat);
    hCross.rotateX(-Math.PI / 2);
    hCross.position.set(14, 38.15, 0);
    group.add(hCross);

    return group;
  }

  /**
   * 71. Wang Residence & Apartemen Kedoya
   * Pencakar langit residensial mewah 28 lantai: Arsitektur kontemporer tropis,
   * podium taman resort, elevated infinity pool, balkon kaca bertingkat, dan penthouse sky villa.
   */
  static createWangResidenceKedoya() {
    const group = new THREE.Group();

    const towerWallMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.35, metalness: 0.1 });
    const tintedGlassMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.88 });
    const timberFinMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.65 });
    const bronzeMetalMat = new THREE.MeshStandardMaterial({ color: 0x78350f, metalness: 0.8, roughness: 0.3 });
    const poolWaterMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1, metalness: 0.85, transparent: true, opacity: 0.85 });
    const grassLawnMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });
    const pavingMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.75 });

    // 1. Ground Plaza & Resort Landscape
    const ground = new THREE.Mesh(new THREE.BoxGeometry(56, 0.8, 52), pavingMat);
    ground.position.set(0, 0.4, 0);
    ground.receiveShadow = true;
    group.add(ground);

    // Green Landscape Garden Berm
    const gardenBerm = new THREE.Mesh(new THREE.BoxGeometry(52, 1.2, 16), grassLawnMat);
    gardenBerm.position.set(0, 0.6, 16);
    group.add(gardenBerm);

    // 2. Multi-tier Resort Lifestyle Podium (Lantai 1-4, H=12m)
    const podium = new THREE.Mesh(new THREE.BoxGeometry(44, 12, 38), towerWallMat);
    podium.position.set(0, 6.4, -4);
    podium.castShadow = true;
    podium.receiveShadow = true;
    group.add(podium);

    // Timber Louvres on Podium Facade
    for (let fz = -18; fz <= 12; fz += 6) {
      const louvre = new THREE.Mesh(new THREE.BoxGeometry(44.4, 0.6, 1.2), timberFinMat);
      louvre.position.set(0, 8.5, fz);
      group.add(louvre);
    }

    // Elevated Infinity Pool Deck on Podium Roof
    const pool = new THREE.Mesh(new THREE.BoxGeometry(24, 0.4, 10), poolWaterMat);
    pool.position.set(6, 12.6, 6);
    group.add(pool);

    const poolDeck = new THREE.Mesh(new THREE.BoxGeometry(28, 0.2, 14), timberFinMat);
    poolDeck.position.set(6, 12.4, 6);
    group.add(poolDeck);

    // 3. Main Luxury Tower Shaft (28 Floors, H=88m)
    const towerShaft = new THREE.Mesh(new THREE.BoxGeometry(26, 76, 22), towerWallMat);
    towerShaft.position.set(0, 50.0, -6);
    towerShaft.castShadow = true;
    group.add(towerShaft);

    // Central Tinted Curtain Glass Core
    const glassCore = new THREE.Mesh(new THREE.BoxGeometry(24, 78, 20.4), tintedGlassMat);
    glassCore.position.set(0, 50.0, -6);
    group.add(glassCore);

    // Vertical Bronze Architectural Fins
    [-11, -3.5, 3.5, 11].forEach((fx) => {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.8, 82, 23.2), bronzeMetalMat);
      fin.position.set(fx, 52.0, -6);
      fin.castShadow = true;
      group.add(fin);
    });

    // Cantilevered Private Balconies on Front Facade
    for (let by = 20; by <= 80; by += 8) {
      const balcony = new THREE.Mesh(new THREE.BoxGeometry(22, 0.6, 3.2), towerWallMat);
      balcony.position.set(0, by, 5.5);
      balcony.castShadow = true;
      group.add(balcony);

      const glassRail = new THREE.Mesh(new THREE.BoxGeometry(22, 1.1, 0.2), tintedGlassMat);
      glassRail.position.set(0, by + 0.6, 7.0);
      group.add(glassRail);
    }

    // 4. Stepped Penthouse Sky Villa & Rooftop Crown (H=95m s.d. 104m)
    const penthouse = new THREE.Mesh(new THREE.BoxGeometry(22, 8, 18), towerWallMat);
    penthouse.position.set(0, 92.0, -6);
    penthouse.castShadow = true;
    group.add(penthouse);

    const penthouseGlass = new THREE.Mesh(new THREE.BoxGeometry(20, 6, 18.4), tintedGlassMat);
    penthouseGlass.position.set(0, 92.0, -6);
    group.add(penthouseGlass);

    // Rooftop Sky Garden Pergola Beams
    [-8, -4, 0, 4, 8].forEach((px) => {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.2, 16), bronzeMetalMat);
      beam.position.set(px, 97.0, -6);
      group.add(beam);
    });

    return group;
  }

  /**
   * 72. Kompleks Edukasi Kristen IPEKA Greenville
   * Kampus pendidikan terpadu 5 lantai: Sayap akademik modular, atap pelana modern,
   * aula auditorium serbaguna, dan lapangan olahraga FIBA di halaman terbuka.
   */
  static createIPEKAGreenville() {
    const group = new THREE.Group();

    const academicWallMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5 });
    const roofTerracottaMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.7 });
    const blueTrimMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.4 });
    const windowGlassMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.7 });
    const courtMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.75 });
    const courtLinesMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
    const plazaPavingMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.8 });

    // 1. Campus Paved Base
    const ground = new THREE.Mesh(new THREE.BoxGeometry(68, 0.6, 56), plazaPavingMat);
    ground.position.set(0, 0.3, 0);
    ground.receiveShadow = true;
    group.add(ground);

    // 2. Main Academic Wing (L-Shape Building, 5 Floors, H=18m)
    // Wing North-South
    const wingA = new THREE.Mesh(new THREE.BoxGeometry(16, 16, 42), academicWallMat);
    wingA.position.set(-18, 8.3, 0);
    wingA.castShadow = true;
    wingA.receiveShadow = true;
    group.add(wingA);

    // Continuous Window Ribbons Wing A
    const windowsA = new THREE.Mesh(new THREE.BoxGeometry(16.4, 12, 38), windowGlassMat);
    windowsA.position.set(-18, 8.5, 0);
    group.add(windowsA);

    // Gabled Roof Wing A
    const roofA = new THREE.Mesh(new THREE.ConeGeometry(12, 4.5, 4), roofTerracottaMat);
    roofA.rotateY(Math.PI / 4);
    roofA.scale.set(1.0, 1.0, 3.5);
    roofA.position.set(-18, 18.5, 0);
    roofA.castShadow = true;
    group.add(roofA);

    // Wing East-West
    const wingB = new THREE.Mesh(new THREE.BoxGeometry(34, 16, 14), academicWallMat);
    wingB.position.set(6, 8.3, -14);
    wingB.castShadow = true;
    group.add(wingB);

    const windowsB = new THREE.Mesh(new THREE.BoxGeometry(30, 12, 14.4), windowGlassMat);
    windowsB.position.set(6, 8.5, -14);
    group.add(windowsB);

    const roofB = new THREE.Mesh(new THREE.ConeGeometry(10, 4.5, 4), roofTerracottaMat);
    roofB.rotateY(Math.PI / 4);
    roofB.scale.set(3.0, 1.0, 1.0);
    roofB.position.set(6, 18.5, -14);
    roofB.castShadow = true;
    group.add(roofB);

    // 3. Multi-Purpose Auditorium & Sports Hall
    const hall = new THREE.Mesh(new THREE.BoxGeometry(22, 12, 20), academicWallMat);
    hall.position.set(12, 6.3, 12);
    hall.castShadow = true;
    group.add(hall);

    // Curved Barrel Arch Roof for Hall
    const hallRoof = new THREE.Mesh(new THREE.CylinderGeometry(11, 11, 22, 16, 1, false, 0, Math.PI), blueTrimMat);
    hallRoof.rotateZ(Math.PI / 2);
    hallRoof.position.set(12, 12.3, 12);
    hallRoof.castShadow = true;
    group.add(hallRoof);

    // 4. Central Open-Air Synthetic Sports Court
    const court = new THREE.Mesh(new THREE.BoxGeometry(18, 0.15, 26), courtMat);
    court.position.set(3, 0.68, 6);
    court.receiveShadow = true;
    group.add(court);

    // Court White Perimeter Line
    const courtBorder = new THREE.Mesh(new THREE.BoxGeometry(16.5, 0.16, 24.5), courtLinesMat);
    courtBorder.position.set(3, 0.69, 6);
    group.add(courtBorder);

    const courtInner = new THREE.Mesh(new THREE.BoxGeometry(15.5, 0.17, 23.5), courtMat);
    courtInner.position.set(3, 0.70, 6);
    group.add(courtInner);

    // Basketball Hoops
    [-5, 5].forEach((hz) => {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 3.6, 8), blueTrimMat);
      pole.position.set(3, 2.4, 6 + hz * 2.2);
      group.add(pole);

      const board = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.0, 0.1), courtLinesMat);
      board.position.set(3, 3.8, 6 + hz * 2.2);
      group.add(board);
    });

    return group;
  }

  /**
   * 73. Sentra Wisata Kuliner Greenville & Taman Ratu
   * Kawasan gastronomi legendaris 4 lantai: Deretan ruko kuliner tematik,
   * kafe alfresco, kanopi tenda warna-warni, neon signage malam, dan promenade pejalan kaki.
   */
  static createSentraKulinerGreenville() {
    const group = new THREE.Group();

    const pavingMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.8 });
    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });
    const wallColors = [0xfef08a, 0xfecdd3, 0xa7f3d0, 0xe0e7ff, 0xfde047, 0xfbcfe8];
    const awningColors = [0xdc2626, 0x16a34a, 0xd97706, 0x0284c7, 0x7c3aed];
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.65 });
    const neonGlowMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.6 });

    // 1. Street & Pedestrian Promenade Base
    const ground = new THREE.Mesh(new THREE.BoxGeometry(66, 0.5, 50), asphaltMat);
    ground.position.set(0, 0.25, 0);
    ground.receiveShadow = true;
    group.add(ground);

    const promenade = new THREE.Mesh(new THREE.BoxGeometry(66, 0.65, 14), pavingMat);
    promenade.position.set(0, 0.32, 0);
    promenade.receiveShadow = true;
    group.add(promenade);

    // 2. North Shophouse Row (4 Interconnected Gastronomy Buildings)
    [-24, -8, 8, 24].forEach((rx, idx) => {
      const wallMat = new THREE.MeshStandardMaterial({ color: wallColors[idx % wallColors.length], roughness: 0.55 });
      const awningMat = new THREE.MeshStandardMaterial({ color: awningColors[idx % awningColors.length], roughness: 0.4 });

      // Shophouse Box (3-4 Floors, H=14m)
      const shop = new THREE.Mesh(new THREE.BoxGeometry(14, 14, 14), wallMat);
      shop.position.set(rx, 7.3, -15);
      shop.castShadow = true;
      group.add(shop);

      // Pitched Tile Roof
      const roof = new THREE.Mesh(new THREE.ConeGeometry(10, 3.5, 4), roofMat);
      roof.rotateY(Math.PI / 4);
      roof.scale.set(1.4, 0.8, 1.4);
      roof.position.set(rx, 15.5, -15);
      roof.castShadow = true;
      group.add(roof);

      // Colorful Fabric Awning Canopy over Alfresco Entrance
      const awning = new THREE.Mesh(new THREE.BoxGeometry(12, 0.3, 3.5), awningMat);
      awning.position.set(rx, 4.2, -6.5);
      awning.rotateX(0.2);
      awning.castShadow = true;
      group.add(awning);

      // Glowing Neon Signboard
      const sign = new THREE.Mesh(new THREE.BoxGeometry(8, 1.4, 0.4), neonGlowMat);
      sign.position.set(rx, 6.0, -7.8);
      group.add(sign);

      // Outdoor Cafe Table & Umbrella
      const table = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.8, 8), roofMat);
      table.position.set(rx, 0.72, -4);
      group.add(table);

      const umbrella = new THREE.Mesh(new THREE.ConeGeometry(1.8, 1.0, 8), awningMat);
      umbrella.position.set(rx, 2.4, -4);
      group.add(umbrella);
    });

    // 3. South Shophouse Row (Facing Promenade)
    [-24, -8, 8, 24].forEach((rx, idx) => {
      const wallMat = new THREE.MeshStandardMaterial({ color: wallColors[(idx + 2) % wallColors.length], roughness: 0.55 });
      const awningMat = new THREE.MeshStandardMaterial({ color: awningColors[(idx + 3) % awningColors.length], roughness: 0.4 });

      const shop = new THREE.Mesh(new THREE.BoxGeometry(14, 14, 14), wallMat);
      shop.position.set(rx, 7.3, 15);
      shop.castShadow = true;
      group.add(shop);

      const roof = new THREE.Mesh(new THREE.ConeGeometry(10, 3.5, 4), roofMat);
      roof.rotateY(Math.PI / 4);
      roof.scale.set(1.4, 0.8, 1.4);
      roof.position.set(rx, 15.5, 15);
      roof.castShadow = true;
      group.add(roof);

      const awning = new THREE.Mesh(new THREE.BoxGeometry(12, 0.3, 3.5), awningMat);
      awning.position.set(rx, 4.2, 6.5);
      awning.rotateX(-0.2);
      awning.castShadow = true;
      group.add(awning);

      const sign = new THREE.Mesh(new THREE.BoxGeometry(8, 1.4, 0.4), neonGlowMat);
      sign.position.set(rx, 6.0, 7.8);
      group.add(sign);
    });

    return group;
  }

  /**
   * 74. Sentra Niaga Pos Pengumben & Sukabumi Selatan
   * Pusat desain interior, marmer & perbankan 6 lantai: Double-height glass showroom,
   * corporate banking wing, gerbang kanopi arsitektural, dan simpul arteri strategis.
   */
  static createSentraPosPengumben() {
    const group = new THREE.Group();

    const corporateMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.3 });
    const whitePanelMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const blueGlassMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.12, metalness: 0.85, transparent: true, opacity: 0.85 });
    const goldAccentMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.75, roughness: 0.3 });
    const pavingMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.8 });

    // 1. Commercial Base Plaza
    const base = new THREE.Mesh(new THREE.BoxGeometry(56, 0.6, 46), pavingMat);
    base.position.set(0, 0.3, 0);
    base.receiveShadow = true;
    group.add(base);

    // 2. Double-Height Interior Showroom Podium (Lantai 1-2, H=9m)
    const showroomPodium = new THREE.Mesh(new THREE.BoxGeometry(46, 9, 34), whitePanelMat);
    showroomPodium.position.set(0, 4.8, 0);
    showroomPodium.castShadow = true;
    group.add(showroomPodium);

    // Expansive Panoramic Glass Showroom Windows
    const showroomGlass = new THREE.Mesh(new THREE.BoxGeometry(44, 7, 34.4), blueGlassMat);
    showroomGlass.position.set(0, 4.8, 0);
    group.add(showroomGlass);

    // Interior Marble / Ceramic Displays visible through glass
    [-12, 0, 12].forEach((dx) => {
      const pedestal = new THREE.Mesh(new THREE.BoxGeometry(4, 2, 4), goldAccentMat);
      pedestal.position.set(dx, 1.8, 10);
      group.add(pedestal);
    });

    // 3. Corporate Banking & Business Wing (Lantai 3-6, H=24m)
    const upperTower = new THREE.Mesh(new THREE.BoxGeometry(36, 15, 26), corporateMat);
    upperTower.position.set(0, 16.8, -2);
    upperTower.castShadow = true;
    group.add(upperTower);

    // Vertical Blue Glass Ribbon Windows
    const towerGlass = new THREE.Mesh(new THREE.BoxGeometry(32, 12, 26.6), blueGlassMat);
    towerGlass.position.set(0, 16.8, -2);
    group.add(towerGlass);

    // Architectural Gold Crown Fin
    const crown = new THREE.Mesh(new THREE.BoxGeometry(37, 1.2, 27), goldAccentMat);
    crown.position.set(0, 24.8, -2);
    group.add(crown);

    // 4. Cantilevered Entrance Portico / Drop-Off Canopy
    const portico = new THREE.Mesh(new THREE.BoxGeometry(18, 1.0, 10), whitePanelMat);
    portico.position.set(0, 5.5, 20);
    portico.castShadow = true;
    group.add(portico);

    [-8, 8].forEach((px) => {
      const col = new THREE.Mesh(new THREE.BoxGeometry(0.8, 5.5, 0.8), goldAccentMat);
      col.position.set(px, 2.75, 24);
      group.add(col);
    });

    return group;
  }

  /**
   * 75. Taman Cattleya (Taman Metropolitan Tomang Barat)
   * Paru-paru kota 3 hektare: Danau retensi air melingkar dengan air mancur aerator,
   * jembatan kayu promenade, plaza amfiteater bundar, pepohonan trembesi purba, dan bunga Cattleya.
   */
  static createTamanCattleyaTomang() {
    const group = new THREE.Group();

    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });
    const waterMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.12, metalness: 0.85, transparent: true, opacity: 0.88 });
    const stoneRevetmentMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.8 });
    const woodBridgeMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.7 });
    const fountainSprayMat = new THREE.MeshStandardMaterial({ color: 0xe0f2fe, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.92 });
    const treeTrunkMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.9 });
    const treeLeavesMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.75 });
    const flowerPinkMat = new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.6 });
    const plazaPavingMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.75 });

    // 1. Expansive 3-Hectare Park Lawn Base
    const parkBase = new THREE.Mesh(new THREE.BoxGeometry(78, 0.6, 70), lawnMat);
    parkBase.position.set(0, 0.3, 0);
    parkBase.receiveShadow = true;
    group.add(parkBase);

    // 2. Natural Organic Retention Lake (Danau Cattleya)
    const lakeGeo = new THREE.CylinderGeometry(18, 20, 0.35, 24);
    lakeGeo.scale(1.35, 1.0, 0.95);
    const lake = new THREE.Mesh(lakeGeo, waterMat);
    lake.position.set(-6, 0.5, 0);
    group.add(lake);

    // Stone Revetment Rim around Lake
    const lakeRim = new THREE.Mesh(new THREE.TorusGeometry(19, 0.6, 6, 24), stoneRevetmentMat);
    lakeRim.rotateX(Math.PI / 2);
    lakeRim.scale.set(1.35, 0.95, 1.0);
    lakeRim.position.set(-6, 0.6, 0);
    group.add(lakeRim);

    // 3. Central Water Fountain Aerator (Air Mancur Danau)
    const fountainPlume = new THREE.Mesh(new THREE.ConeGeometry(1.2, 7.5, 8), fountainSprayMat);
    fountainPlume.position.set(-6, 4.0, 0);
    group.add(fountainPlume);

    const fountainRing = new THREE.Mesh(new THREE.TorusGeometry(3.5, 0.4, 6, 16), fountainSprayMat);
    fountainRing.rotateX(Math.PI / 2);
    fountainRing.position.set(-6, 1.2, 0);
    group.add(fountainRing);

    // 4. Curved Wooden Promenade Bridge crossing Lake Bay
    const bridgeCurvePoints = [
      new THREE.Vector3(-24, 0.7, -10),
      new THREE.Vector3(-18, 1.8, -14),
      new THREE.Vector3(-10, 0.7, -15)
    ];
    const bridgeCurve = new THREE.CatmullRomCurve3(bridgeCurvePoints);
    const bridgeGeo = new THREE.TubeGeometry(bridgeCurve, 16, 1.4, 6, false);
    bridgeGeo.scale(1.0, 0.2, 1.0);
    const bridge = new THREE.Mesh(bridgeGeo, woodBridgeMat);
    bridge.position.y = 0.4;
    bridge.castShadow = true;
    group.add(bridge);

    // 5. Circular Amphitheater Plaza
    const plaza = new THREE.Mesh(new THREE.CylinderGeometry(8, 8.5, 0.4, 20), plazaPavingMat);
    plaza.position.set(22, 0.5, 8);
    plaza.receiveShadow = true;
    group.add(plaza);

    const plazaMonument = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.6, 6, 8), stoneRevetmentMat);
    plazaMonument.position.set(22, 3.5, 8);
    plazaMonument.castShadow = true;
    group.add(plazaMonument);

    // 6. Ancient Rain Trees (Pohon Trembesi Rindang)
    const treePositions = [
      [-26, 18], [-28, -20], [-8, 22], [14, 22], [28, -8], [24, -22], [6, -24], [-6, -26]
    ];

    treePositions.forEach(([tx, tz]) => {
      // Trunk
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.8, 5.5, 8), treeTrunkMat);
      trunk.position.set(tx, 2.75, tz);
      trunk.castShadow = true;
      group.add(trunk);

      // Wide Umbrella Canopy
      const canopy = new THREE.Mesh(new THREE.SphereGeometry(4.2, 8, 8), treeLeavesMat);
      canopy.scale.set(1.4, 0.75, 1.4);
      canopy.position.set(tx, 6.8, tz);
      canopy.castShadow = true;
      group.add(canopy);
    });

    // 7. Cattleya Orchid Flower Beds (Pink & Purple Patches)
    [[-14, 16], [16, -14], [22, -2], [4, 18]].forEach(([fx, fz]) => {
      const flowerBed = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.8, 0.3, 12), flowerPinkMat);
      flowerBed.position.set(fx, 0.65, fz);
      group.add(flowerBed);
    });

    return group;
  }
  /**
   * 76. Terminal Bus Terpadu Kalideres
   * Terminal AKAP Tipe A gerbang barat Jakarta menuju Sumatera & halte awal TransJakarta Koridor 3.
   */
  static createTerminalBusKalideres() {
    const group = new THREE.Group();

    const apronMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.85 });
    const concourseMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.6 });
    const canopyMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4, side: THREE.DoubleSide });
    const towerMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.8, transparent: true, opacity: 0.85 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.5, metalness: 0.7 });
    const busBodyMat1 = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.4 });
    const busBodyMat2 = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4 });
    const busBodyMat3 = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.4 });
    const tjBusMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 });
    const tjStripeMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.4 });
    const curbMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.7 });

    // 1. Terminal Bus Apron Base
    const apron = new THREE.Mesh(new THREE.BoxGeometry(84, 0.5, 68), apronMat);
    apron.position.set(0, 0.25, 0);
    apron.receiveShadow = true;
    group.add(apron);

    // 2. Main Concourse & Ticket Hall Building
    const concourse = new THREE.Mesh(new THREE.BoxGeometry(48, 7.5, 18), concourseMat);
    concourse.position.set(0, 4.0, -18);
    concourse.castShadow = true;
    concourse.receiveShadow = true;
    group.add(concourse);

    // Glass Facade on Concourse
    const concourseGlass = new THREE.Mesh(new THREE.BoxGeometry(46, 5.0, 1.2), glassMat);
    concourseGlass.position.set(0, 4.0, -9.0);
    group.add(concourseGlass);

    // Concourse Overhang Eaves
    const eave = new THREE.Mesh(new THREE.BoxGeometry(52, 0.8, 22), steelMat);
    eave.position.set(0, 8.0, -18);
    eave.castShadow = true;
    group.add(eave);

    // 3. Dishub Air Traffic / Bus Dispatch Control Tower
    const tower = new THREE.Mesh(new THREE.BoxGeometry(8, 18, 8), concourseMat);
    tower.position.set(-20, 9.0, -18);
    tower.castShadow = true;
    group.add(tower);

    // Observation Cab
    const cab = new THREE.Mesh(new THREE.CylinderGeometry(5.2, 4.2, 4, 12), towerMat);
    cab.position.set(-20, 19.5, -18);
    cab.castShadow = true;
    group.add(cab);

    const cabGlass = new THREE.Mesh(new THREE.CylinderGeometry(5.0, 4.8, 2.2, 12), glassMat);
    cabGlass.position.set(-20, 19.5, -18);
    group.add(cabGlass);

    // Antenna Mast
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.3, 7, 6), steelMat);
    mast.position.set(-20, 24.5, -18);
    group.add(mast);

    // 4. Tensile Membrane / Arched Canopy over Bus Departure Platforms
    const platformCurb = new THREE.Mesh(new THREE.BoxGeometry(60, 0.6, 6), curbMat);
    platformCurb.position.set(2, 0.6, 2);
    group.add(platformCurb);

    [-18, -6, 6, 18, 30].forEach((px) => {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 6.5, 8), steelMat);
      pillar.position.set(px, 3.5, 2);
      pillar.castShadow = true;
      group.add(pillar);
    });

    const canopyRoof = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 62, 16, 1, false, 0, Math.PI), canopyMat);
    canopyRoof.rotation.z = Math.PI / 2;
    canopyRoof.scale.set(0.18, 1.0, 0.55);
    canopyRoof.position.set(6, 6.8, 2);
    canopyRoof.castShadow = true;
    group.add(canopyRoof);

    // Second Island Platform Canopy
    const platformCurb2 = new THREE.Mesh(new THREE.BoxGeometry(60, 0.6, 6), curbMat);
    platformCurb2.position.set(2, 0.6, 18);
    group.add(platformCurb2);

    [-18, -6, 6, 18, 30].forEach((px) => {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 6.5, 8), steelMat);
      pillar.position.set(px, 3.5, 18);
      pillar.castShadow = true;
      group.add(pillar);
    });

    const canopyRoof2 = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 62, 16, 1, false, 0, Math.PI), canopyMat);
    canopyRoof2.rotation.z = Math.PI / 2;
    canopyRoof2.scale.set(0.18, 1.0, 0.55);
    canopyRoof2.position.set(6, 6.8, 18);
    canopyRoof2.castShadow = true;
    group.add(canopyRoof2);

    // 5. Representative Buses
    const busConfigs = [
      { x: -14, z: -5, mat: busBodyMat1 },
      { x: 4, z: -5, mat: busBodyMat2 },
      { x: 22, z: -5, mat: busBodyMat3 },
      { x: -8, z: 10, mat: tjBusMat, isTJ: true },
      { x: 16, z: 10, mat: busBodyMat1 },
      { x: 0, z: 25, mat: busBodyMat2 }
    ];

    busConfigs.forEach((b) => {
      const bus = new THREE.Mesh(new THREE.BoxGeometry(11, 3.2, 3.2), b.mat);
      bus.position.set(b.x, 2.1, b.z);
      bus.castShadow = true;
      group.add(bus);

      const busGlass = new THREE.Mesh(new THREE.BoxGeometry(11.2, 1.3, 3.25), glassMat);
      busGlass.position.set(b.x, 2.6, b.z);
      group.add(busGlass);

      if (b.isTJ) {
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(11.3, 0.5, 3.3), tjStripeMat);
        stripe.position.set(b.x, 1.5, b.z);
        group.add(stripe);
      }
    });

    return group;
  }

  /**
   * 77. RSUD Cengkareng
   * Pusat Rujukan Medis Paripurna Jakarta Barat, Fasilitas 8 Lantai, IGD Modern & Helipad Medis.
   */
  static createRSUDCengkareng() {
    const group = new THREE.Group();

    const siteMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 });
    const wallWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.45 });
    const podiumMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.5 });
    const emeraldGlassMat = new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.25, metalness: 0.8, transparent: true, opacity: 0.88 });
    const redCrossMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.3 });
    const helipadMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.6 });
    const helipadMarkMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.4 });
    const canopyMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 });
    const greenLawnMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });

    // 1. Site Base & Landscaping
    const site = new THREE.Mesh(new THREE.BoxGeometry(78, 0.5, 68), siteMat);
    site.position.set(0, 0.25, 0);
    site.receiveShadow = true;
    group.add(site);

    const lawn = new THREE.Mesh(new THREE.BoxGeometry(74, 0.55, 20), greenLawnMat);
    lawn.position.set(0, 0.28, 22);
    group.add(lawn);

    // 2. 3-Storey Podium (IGD Emergency Department & Poliklinik)
    const podium = new THREE.Mesh(new THREE.BoxGeometry(64, 12, 42), podiumMat);
    podium.position.set(0, 6.0, -4);
    podium.castShadow = true;
    podium.receiveShadow = true;
    group.add(podium);

    const podiumGlass = new THREE.Mesh(new THREE.BoxGeometry(64.6, 2.5, 42.6), emeraldGlassMat);
    podiumGlass.position.set(0, 7.5, -4);
    group.add(podiumGlass);

    // 3. 8-Storey Main Inpatient Tower
    const tower = new THREE.Mesh(new THREE.BoxGeometry(44, 26, 26), wallWhiteMat);
    tower.position.set(0, 24.0, -6);
    tower.castShadow = true;
    tower.receiveShadow = true;
    group.add(tower);

    // Tower Glass Bands
    for (let fl = 0; fl < 5; fl++) {
      const band = new THREE.Mesh(new THREE.BoxGeometry(44.6, 2.4, 26.6), emeraldGlassMat);
      band.position.set(0, 15 + fl * 4.5, -6);
      group.add(band);
    }

    // 4. Rooftop Plant Room & Helipad
    const roofBase = new THREE.Mesh(new THREE.BoxGeometry(22, 2.5, 22), helipadMat);
    roofBase.position.set(0, 38.25, -6);
    roofBase.castShadow = true;
    group.add(roofBase);

    // Helipad Landing Circle & Cross 'H'
    const heliRing = new THREE.Mesh(new THREE.RingGeometry(6.5, 7.5, 24), helipadMarkMat);
    heliRing.rotateX(-Math.PI / 2);
    heliRing.position.set(0, 39.52, -6);
    group.add(heliRing);

    const hBar1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.1, 8), helipadMarkMat);
    hBar1.position.set(-2.5, 39.53, -6);
    group.add(hBar1);
    const hBar2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.1, 8), helipadMarkMat);
    hBar2.position.set(2.5, 39.53, -6);
    group.add(hBar2);
    const hBar3 = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.1, 1.2), helipadMarkMat);
    hBar3.position.set(0, 39.53, -6);
    group.add(hBar3);

    // 5. Medical Red Cross Signage
    [1, -1].forEach((dir) => {
      const crossV = new THREE.Mesh(new THREE.BoxGeometry(1.8, 5.5, 0.6), redCrossMat);
      crossV.position.set(16 * dir, 32.5, -6 + 13.5 * dir);
      group.add(crossV);

      const crossH = new THREE.Mesh(new THREE.BoxGeometry(5.5, 1.8, 0.6), redCrossMat);
      crossH.position.set(16 * dir, 32.5, -6 + 13.5 * dir);
      group.add(crossH);
    });

    // 6. IGD Emergency Drop-Off Portico
    const igdCanopy = new THREE.Mesh(new THREE.BoxGeometry(22, 1.2, 12), canopyMat);
    igdCanopy.position.set(-16, 5.0, 20);
    igdCanopy.castShadow = true;
    group.add(igdCanopy);

    const igdColumn1 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 5, 8), wallWhiteMat);
    igdColumn1.position.set(-25, 2.5, 24);
    group.add(igdColumn1);
    const igdColumn2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 5, 8), wallWhiteMat);
    igdColumn2.position.set(-7, 2.5, 24);
    group.add(igdColumn2);

    // Ambulances parked
    [-18, -12].forEach((ax) => {
      const amb = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.4, 6.5), wallWhiteMat);
      amb.position.set(ax, 1.2, 21);
      amb.castShadow = true;
      group.add(amb);

      const ambLight = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.4, 0.6), redCrossMat);
      ambLight.position.set(ax, 2.6, 21);
      group.add(ambLight);
    });

    return group;
  }

  /**
   * 78. Daan Mogot Mall & Superblok
   * Pusat Belanja & Hiburan Legendaris Kalideres-Cengkareng, Atrium Kaca, Bioskop & Ramp Spiral.
   */
  static createDaanMogotMall() {
    const group = new THREE.Group();

    const siteMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 });
    const terracottaMat = new THREE.MeshStandardMaterial({ color: 0xca8a04, roughness: 0.55 });
    const sandStoneMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.5 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.85, transparent: true, opacity: 0.88 });
    const skylightFrameMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 });
    const cinemaCubeMat = new THREE.MeshStandardMaterial({ color: 0x1e1b4b, roughness: 0.6 });
    const cinemaSignMat = new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.3 });
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.7 });

    // 1. Site Base
    const site = new THREE.Mesh(new THREE.BoxGeometry(82, 0.5, 72), siteMat);
    site.position.set(0, 0.25, 0);
    site.receiveShadow = true;
    group.add(site);

    // 2. 5-Storey Main Mall Complex
    const mallBody = new THREE.Mesh(new THREE.BoxGeometry(66, 18, 52), sandStoneMat);
    mallBody.position.set(0, 9.0, -2);
    mallBody.castShadow = true;
    mallBody.receiveShadow = true;
    group.add(mallBody);

    // Terracotta Architectural Bands
    for (let i = 0; i < 3; i++) {
      const band = new THREE.Mesh(new THREE.BoxGeometry(67, 1.4, 53), terracottaMat);
      band.position.set(0, 5 + i * 5, -2);
      group.add(band);
    }

    // 3. Central Grand Glass Atrium Skylight
    const skylightBase = new THREE.Mesh(new THREE.BoxGeometry(26, 2.5, 26), skylightFrameMat);
    skylightBase.position.set(0, 19.25, -2);
    group.add(skylightBase);

    const skylightPyramid = new THREE.Mesh(new THREE.ConeGeometry(16, 8, 4), glassMat);
    skylightPyramid.rotation.y = Math.PI / 4;
    skylightPyramid.position.set(0, 24.5, -2);
    skylightPyramid.castShadow = true;
    group.add(skylightPyramid);

    // 4. Rooftop Cineplex Cinema Volume
    const cineplex = new THREE.Mesh(new THREE.BoxGeometry(28, 8, 20), cinemaCubeMat);
    cineplex.position.set(-18, 22.0, -16);
    cineplex.castShadow = true;
    group.add(cineplex);

    const cinemaSign = new THREE.Mesh(new THREE.BoxGeometry(16, 3, 0.6), cinemaSignMat);
    cinemaSign.position.set(-18, 23.5, -5.7);
    group.add(cinemaSign);

    // 5. Signature Spiral Parking Ramp
    const spiralRadius = 10;
    const spiralTower = new THREE.Mesh(new THREE.CylinderGeometry(spiralRadius, spiralRadius, 18, 24), concreteMat);
    spiralTower.position.set(33, 9.0, 16);
    spiralTower.castShadow = true;
    group.add(spiralTower);

    for (let sr = 0; sr < 4; sr++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(spiralRadius + 0.8, 0.45, 6, 24), terracottaMat);
      ring.rotateX(Math.PI / 2);
      ring.position.set(33, 3 + sr * 4.5, 16);
      group.add(ring);
    }

    // 6. Grand Main Entrance Canopy & Portico
    const portico = new THREE.Mesh(new THREE.BoxGeometry(28, 2.0, 12), terracottaMat);
    portico.position.set(0, 6.0, 26);
    portico.castShadow = true;
    group.add(portico);

    [-11, 11].forEach((px) => {
      const col = new THREE.Mesh(new THREE.BoxGeometry(2, 6, 2), sandStoneMat);
      col.position.set(px, 3.0, 29);
      col.castShadow = true;
      group.add(col);
    });

    const entranceGlass = new THREE.Mesh(new THREE.BoxGeometry(24, 5.0, 1.2), glassMat);
    entranceGlass.position.set(0, 3.0, 24.2);
    group.add(entranceGlass);

    return group;
  }

  /**
   * 79. Stasiun Transit Rawa Buaya & KA Bandara
   * Simpul Rel Ganda KRL Tangerang Line, Percabangan KA Bandara Soetta, Atap Lengkung & JPO Transit.
   */
  static createStasiunRawaBuayaHub() {
    const group = new THREE.Group();

    const gravelBallastMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.9 });
    const steelBlueRoofMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4, side: THREE.DoubleSide });
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.65 });
    const steelGantryMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.5, metalness: 0.7 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.8, transparent: true, opacity: 0.85 });
    const railSteelMat = new THREE.MeshStandardMaterial({ color: 0xcfecff, metalness: 0.9, roughness: 0.2 });
    const krlTrainMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });

    // 1. Ballast Trackbed Base
    const trackbed = new THREE.Mesh(new THREE.BoxGeometry(92, 0.6, 56), gravelBallastMat);
    trackbed.position.set(0, 0.3, 0);
    trackbed.receiveShadow = true;
    group.add(trackbed);

    // 2. Elevated Concourse Level 2 Station Building
    const concourse = new THREE.Mesh(new THREE.BoxGeometry(26, 7.5, 48), concreteMat);
    concourse.position.set(0, 8.5, 0);
    concourse.castShadow = true;
    group.add(concourse);

    const concourseGlass = new THREE.Mesh(new THREE.BoxGeometry(26.6, 4.0, 44), glassMat);
    concourseGlass.position.set(0, 8.5, 0);
    group.add(concourseGlass);

    // 3. Dual Platform Canopies
    [-15, 15].forEach((pz) => {
      const plat = new THREE.Mesh(new THREE.BoxGeometry(84, 1.2, 7.5), concreteMat);
      plat.position.set(0, 1.8, pz);
      plat.castShadow = true;
      group.add(plat);

      [-32, -16, 0, 16, 32].forEach((cx) => {
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 5.5, 8), steelGantryMat);
        pillar.position.set(cx, 4.8, pz);
        pillar.castShadow = true;
        group.add(pillar);
      });

      const roof = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 84, 16, 1, false, 0, Math.PI), steelBlueRoofMat);
      roof.rotation.z = Math.PI / 2;
      roof.scale.set(0.3, 1.0, 0.6);
      roof.position.set(0, 8.0, pz);
      roof.castShadow = true;
      group.add(roof);
    });

    // 4. Double Tracks & KA Bandara Branch Rails
    [-8, -2, 4, 8].forEach((tz) => {
      [-0.7, 0.7].forEach((ro) => {
        const rail = new THREE.Mesh(new THREE.BoxGeometry(92, 0.25, 0.2), railSteelMat);
        rail.position.set(0, 0.72, tz + ro);
        group.add(rail);
      });
    });

    // Overhead Electrification Catenary Gantries
    [-30, -10, 10, 30].forEach((gx) => {
      const gantryPole1 = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 8.5, 8), steelGantryMat);
      gantryPole1.position.set(gx, 4.5, -24);
      group.add(gantryPole1);
      const gantryPole2 = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 8.5, 8), steelGantryMat);
      gantryPole2.position.set(gx, 4.5, 24);
      group.add(gantryPole2);

      const gantryBeam = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 48), steelGantryMat);
      gantryBeam.position.set(gx, 8.5, 0);
      group.add(gantryBeam);
    });

    // 5. Stationary KRL Commuter Train Set
    const trainBody = new THREE.Mesh(new THREE.BoxGeometry(42, 3.4, 3.2), whiteMat);
    trainBody.position.set(-10, 3.8, -8);
    trainBody.castShadow = true;
    group.add(trainBody);

    const trainStripe = new THREE.Mesh(new THREE.BoxGeometry(42.2, 0.7, 3.25), krlTrainMat);
    trainStripe.position.set(-10, 3.4, -8);
    group.add(trainStripe);

    const trainGlass = new THREE.Mesh(new THREE.BoxGeometry(42.2, 1.1, 3.28), glassMat);
    trainGlass.position.set(-10, 4.4, -8);
    group.add(trainGlass);

    // 6. Integrated Pedestrian Bridge (JPO Transit)
    const jpo = new THREE.Mesh(new THREE.BoxGeometry(6, 3.2, 36), concreteMat);
    jpo.position.set(0, 9.5, 24);
    jpo.castShadow = true;
    group.add(jpo);

    const jpoGlass = new THREE.Mesh(new THREE.BoxGeometry(6.4, 1.8, 34), glassMat);
    jpoGlass.position.set(0, 9.5, 24);
    group.add(jpoGlass);

    return group;
  }

  /**
   * 80. Danau Retensi & Polder Rawa Buaya
   * Waduk Retensi 4 Hektare, Stasiun Pompa Polder Hidrolik & Pengendali Banjir Cengkareng.
   */
  static createDanauRawaBuaya() {
    const group = new THREE.Group();

    const grassMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });
    const waterMat = new THREE.MeshStandardMaterial({ color: 0x0369a1, roughness: 0.15, metalness: 0.85, transparent: true, opacity: 0.88 });
    const sheetpileMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.75, metalness: 0.2 });
    const pumpBuildingMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.5 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.6 });
    const dischargePipeMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8, roughness: 0.3 });
    const sluiceGateMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.6, roughness: 0.4 });
    const joggingTrackMat = new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.8 });
    const treeLeavesMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.75 });
    const treeTrunkMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.9 });

    // 1. Surrounding Green Embankment Base
    const base = new THREE.Mesh(new THREE.BoxGeometry(86, 0.6, 76), grassMat);
    base.position.set(0, 0.3, 0);
    base.receiveShadow = true;
    group.add(base);

    // 2. Retention Water Basin
    const lake = new THREE.Mesh(new THREE.CylinderGeometry(28, 30, 0.35, 24), waterMat);
    lake.scale.set(1.15, 1.0, 0.85);
    lake.position.set(-8, 0.52, 0);
    group.add(lake);

    // Concrete Sheetpile Rim Wall
    const rimWall = new THREE.Mesh(new THREE.TorusGeometry(29, 0.8, 6, 24), sheetpileMat);
    rimWall.rotateX(Math.PI / 2);
    rimWall.scale.set(1.15, 0.85, 1.0);
    rimWall.position.set(-8, 0.7, 0);
    group.add(rimWall);

    // 3. Jogging Track Belt
    const track = new THREE.Mesh(new THREE.TorusGeometry(32.5, 1.4, 4, 24), joggingTrackMat);
    track.rotateX(Math.PI / 2);
    track.scale.set(1.15, 0.85, 1.0);
    track.position.set(-8, 0.62, 0);
    group.add(track);

    // 4. Stasiun Pompa Polder Hidrolik
    const pumpHouse = new THREE.Mesh(new THREE.BoxGeometry(18, 9, 24), pumpBuildingMat);
    pumpHouse.position.set(28, 4.8, 0);
    pumpHouse.castShadow = true;
    pumpHouse.receiveShadow = true;
    group.add(pumpHouse);

    const pumpRoof = new THREE.Mesh(new THREE.BoxGeometry(20, 1.5, 26), roofMat);
    pumpRoof.position.set(28, 9.8, 0);
    pumpRoof.castShadow = true;
    group.add(pumpRoof);

    // Discharge Pipes
    [-5, 0, 5].forEach((pz) => {
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 12, 12), dischargePipeMat);
      pipe.rotateZ(Math.PI / 2);
      pipe.position.set(18, 3.2, pz);
      pipe.castShadow = true;
      group.add(pipe);
    });

    // 5. Hydraulic Sluice Gates
    const gateTower1 = new THREE.Mesh(new THREE.BoxGeometry(2.5, 12, 2.5), sheetpileMat);
    gateTower1.position.set(16, 6.0, 14);
    group.add(gateTower1);
    const gateTower2 = new THREE.Mesh(new THREE.BoxGeometry(2.5, 12, 2.5), sheetpileMat);
    gateTower2.position.set(16, 6.0, 20);
    group.add(gateTower2);

    const gateDoor = new THREE.Mesh(new THREE.BoxGeometry(1.2, 8, 4), sluiceGateMat);
    gateDoor.position.set(16, 5.0, 17);
    gateDoor.castShadow = true;
    group.add(gateDoor);

    const gateBridge = new THREE.Mesh(new THREE.BoxGeometry(3, 1.2, 8), sheetpileMat);
    gateBridge.position.set(16, 11.5, 17);
    group.add(gateBridge);

    // 6. Perimeter Greenery & Shade Trees
    const treePoints = [
      [-36, -24], [-38, 0], [-36, 24], [-18, 30], [2, 30], [22, 26], [32, -22], [14, -28], [-8, -28]
    ];
    treePoints.forEach(([tx, tz]) => {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.6, 4.5, 8), treeTrunkMat);
      trunk.position.set(tx, 2.25, tz);
      trunk.castShadow = true;
      group.add(trunk);

      const foliage = new THREE.Mesh(new THREE.SphereGeometry(3.2, 8, 8), treeLeavesMat);
      foliage.scale.set(1.2, 0.8, 1.2);
      foliage.position.set(tx, 5.5, tz);
      foliage.castShadow = true;
      group.add(foliage);
    });

    return group;
  }

  /**
   * 81. Cengkareng Business City & Sentra Logistik
   * Pusat Bisnis Kargo Bandara Soetta, Gedung Manajemen, Pergudangan Terpadu & Container Yard.
   */
  static createCengkarengBusinessCity() {
    const group = new THREE.Group();

    const siteMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 });
    const blueGlassMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.2, metalness: 0.85, transparent: true, opacity: 0.85 });
    const officeFacadeMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.4 });
    const warehouseWallMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.7, metalness: 0.3 });
    const warehouseRoofMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.5 });
    const containerRedMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.5 });
    const containerBlueMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.5 });
    const containerOrangeMat = new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.5 });
    const loadingBayMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 });
    const truckCabinMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.4 });

    // 1. Staging Site & Concrete Paving Base
    const site = new THREE.Mesh(new THREE.BoxGeometry(86, 0.5, 72), siteMat);
    site.position.set(0, 0.25, 0);
    site.receiveShadow = true;
    group.add(site);

    // 2. Corporate Management Office Tower
    const office = new THREE.Mesh(new THREE.BoxGeometry(26, 22, 22), officeFacadeMat);
    office.position.set(-24, 11.0, -18);
    office.castShadow = true;
    office.receiveShadow = true;
    group.add(office);

    for (let fl = 0; fl < 5; fl++) {
      const band = new THREE.Mesh(new THREE.BoxGeometry(26.6, 2.5, 22.6), blueGlassMat);
      band.position.set(-24, 6.0 + fl * 3.6, -18);
      group.add(band);
    }

    // 3. Modular Modern Logistics Cargo Warehouses
    [-8, 18].forEach((wx) => {
      const wh = new THREE.Mesh(new THREE.BoxGeometry(20, 9, 44), warehouseWallMat);
      wh.position.set(wx, 4.5, 0);
      wh.castShadow = true;
      wh.receiveShadow = true;
      group.add(wh);

      const roof = new THREE.Mesh(new THREE.CylinderGeometry(11, 11, 44, 16, 1, false, 0, Math.PI), warehouseRoofMat);
      roof.rotation.x = Math.PI / 2;
      roof.scale.set(0.9, 0.35, 1.0);
      roof.position.set(wx, 9.0, 0);
      roof.castShadow = true;
      group.add(roof);

      [-14, -6, 2, 10].forEach((dz) => {
        const door = new THREE.Mesh(new THREE.BoxGeometry(0.6, 5.0, 4.2), loadingBayMat);
        door.position.set(wx - 10.1, 2.7, dz);
        group.add(door);
      });
    });

    // 4. Stacks of ISO Cargo Containers
    const containerConfigs = [
      { x: -26, y: 1.5, z: 8, l: 12, mat: containerRedMat },
      { x: -26, y: 4.1, z: 8, l: 12, mat: containerBlueMat },
      { x: -26, y: 1.5, z: 18, l: 12, mat: containerOrangeMat },
      { x: -26, y: 4.1, z: 18, l: 12, mat: containerRedMat },
      { x: 34, y: 1.5, z: -16, l: 12, mat: containerBlueMat },
      { x: 34, y: 4.1, z: -16, l: 12, mat: containerOrangeMat },
      { x: 34, y: 1.5, z: -4, l: 12, mat: containerRedMat }
    ];

    containerConfigs.forEach((c) => {
      const box = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.6, c.l), c.mat);
      box.position.set(c.x, c.y, c.z);
      box.castShadow = true;
      group.add(box);
    });

    // 5. Container Hauler Trucks
    const truckZ = [6, -10];
    truckZ.forEach((tz) => {
      const cab = new THREE.Mesh(new THREE.BoxGeometry(3.5, 3.2, 4), truckCabinMat);
      cab.position.set(34, 1.7, tz);
      cab.castShadow = true;
      group.add(cab);

      const tr = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.8, 12), containerRedMat);
      tr.position.set(34, 2.0, tz + 9);
      tr.castShadow = true;
      group.add(tr);
    });

    return group;
  }

  /**
   * 82. Universitas Mercu Buana Kampus Meruya
   * Menara rektorat, fakultas, auditorium, plaza upacara & kantin mahasiswa.
   */
  static createUniversitasMercuBuana() {
    const group = new THREE.Group();

    const siteMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.85 });
    const plazaMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.8 });
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 });
    const towerMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.45 });
    const glassMat = LandmarkModels.tagNightWindow(
      new THREE.MeshStandardMaterial({ color: 0x0369a1, roughness: 0.25, metalness: 0.3, transparent: true, opacity: 0.88 })
    );
    const accentMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.5 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.6, metalness: 0.2 });
    const canopyMat = new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.4 });
    const signMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.45 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 });

    // 1. Kampus Site, Plaza & Lawn
    const site = new THREE.Mesh(new THREE.BoxGeometry(118, 0.6, 96), siteMat);
    site.position.y = 0.3;
    site.receiveShadow = true;
    group.add(site);

    const plaza = new THREE.Mesh(new THREE.BoxGeometry(84, 0.62, 18), plazaMat);
    plaza.position.set(0, 0.35, 32);
    plaza.receiveShadow = true;
    group.add(plaza);

    [-34, 34].forEach((lx) => {
      const lawn = new THREE.Mesh(new THREE.BoxGeometry(22, 0.64, 16), lawnMat);
      lawn.position.set(lx, 0.34, 32);
      group.add(lawn);
    });

    // 2. Menara Rektorat 12 Lantai
    const tower = new THREE.Mesh(new THREE.BoxGeometry(34, 46, 24), towerMat);
    tower.position.set(0, 23.6, -18);
    tower.castShadow = true;
    tower.receiveShadow = true;
    group.add(tower);

    for (let fl = 0; fl < 5; fl++) {
      const band = new THREE.Mesh(new THREE.BoxGeometry(34.6, 2.6, 24.6), glassMat);
      band.position.set(0, 8 + fl * 7.2, -18);
      group.add(band);
    }

    const roofPlant = new THREE.Mesh(new THREE.BoxGeometry(16, 3.4, 12), roofMat);
    roofPlant.position.set(0, 48.3, -18);
    roofPlant.castShadow = true;
    group.add(roofPlant);

    const towerFin = new THREE.Mesh(new THREE.BoxGeometry(2.6, 46.4, 24.4), accentMat);
    towerFin.position.set(17.6, 23.6, -18);
    group.add(towerFin);

    // 3. Dua Sayap Fakultas
    [-42, 42].forEach((wx) => {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(30, 26, 20), towerMat);
      wing.position.set(wx, 13.6, -10);
      wing.castShadow = true;
      group.add(wing);

      [0, 1].forEach((fl) => {
        const band = new THREE.Mesh(new THREE.BoxGeometry(30.6, 2.4, 20.6), glassMat);
        band.position.set(wx, 8 + fl * 8, -10);
        group.add(band);
      });

      const wingRoof = new THREE.Mesh(new THREE.BoxGeometry(31, 1.2, 21), roofMat);
      wingRoof.position.set(wx, 27.1, -10);
      group.add(wingRoof);
    });

    // 4. Auditorium berkubah kaca
    const auditorium = new THREE.Mesh(new THREE.BoxGeometry(42, 13, 22), towerMat);
    auditorium.position.set(0, 7.1, 12);
    auditorium.castShadow = true;
    group.add(auditorium);

    const audGlass = new THREE.Mesh(new THREE.BoxGeometry(42.6, 3.6, 22.6), glassMat);
    audGlass.position.set(0, 6.4, 12);
    group.add(audGlass);

    const audRoofGeo = new THREE.CylinderGeometry(11, 11, 42, 16, 1, false, 0, Math.PI);
    audRoofGeo.rotateZ(Math.PI / 2);
    const audRoof = new THREE.Mesh(audRoofGeo, roofMat);
    audRoof.scale.set(0.32, 1.0, 0.9);
    audRoof.position.set(0, 13.8, 12);
    audRoof.castShadow = true;
    group.add(audRoof);

    // 5. Kanopi Gerbang & Signage Kampus
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(28, 1.1, 10), canopyMat);
    canopy.position.set(0, 6.6, 40);
    canopy.castShadow = true;
    group.add(canopy);

    [-10, 10].forEach((cx) => {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.5, 6.6, 8), whiteMat);
      col.position.set(cx, 3.3, 43);
      group.add(col);
    });

    const signBoard = new THREE.Mesh(new THREE.BoxGeometry(18, 4.4, 1.2), signMat);
    signBoard.position.set(-34, 6.4, 44);
    signBoard.castShadow = true;
    group.add(signBoard);

    [-7, -2.5, 2, 6.5].forEach((sx) => {
      const letter = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.2, 0.3), whiteMat);
      letter.position.set(-34 + sx, 6.4, 44.7);
      group.add(letter);
    });

    // 6. Tiang Bendera & Parkir
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.3, 24, 8), whiteMat);
    pole.position.set(-14, 12.6, 30);
    group.add(pole);

    const flagRed = new THREE.Mesh(new THREE.BoxGeometry(4.2, 1.4, 0.12), new THREE.MeshBasicMaterial({ color: 0xdc2626 }));
    flagRed.position.set(-11.9, 23.2, 30);
    group.add(flagRed);
    const flagWhite = new THREE.Mesh(new THREE.BoxGeometry(4.2, 1.4, 0.12), new THREE.MeshBasicMaterial({ color: 0xf8fafc }));
    flagWhite.position.set(-11.9, 21.8, 30);
    group.add(flagWhite);

    const parking = new THREE.Mesh(new THREE.BoxGeometry(56, 0.1, 18), new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 }));
    parking.position.set(28, 0.67, 30);
    group.add(parking);

    for (let px = 4; px <= 52; px += 8) {
      const line = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 14), whiteMat);
      line.position.set(px, 0.74, 30);
      group.add(line);
    }

    // 7. Pohon Peneduh
    [-52, -40, 40, 52].forEach((tx) => {
      [38, 22].forEach((tz) => {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 4.5, 6), trunkMat);
        trunk.position.set(tx, 2.9, tz);
        trunk.castShadow = true;
        group.add(trunk);
        const foliage = new THREE.Mesh(new THREE.ConeGeometry(3.6, 8, 7), foliageMat);
        foliage.position.set(tx, 8, tz);
        foliage.castShadow = true;
        group.add(foliage);
      });
    });

    return group;
  }

  /**
   * 83. RSUD Kembangan
   * Menara rawat inap, podium poliklinik, IGD berkanopi & helipad evakuasi.
   */
  static createRSUDKembangan() {
    const group = new THREE.Group();

    const siteMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.45 });
    const podiumMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.5 });
    const greenGlassMat = LandmarkModels.tagNightWindow(
      new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.25, metalness: 0.3, transparent: true, opacity: 0.88 })
    );
    const redMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.35 });
    const canopyMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 });
    const helipadMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.65 });
    const helipadMarkMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.4 });
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 });

    // 1. Site, Taman & Parkir
    const site = new THREE.Mesh(new THREE.BoxGeometry(100, 0.6, 84), siteMat);
    site.position.y = 0.3;
    site.receiveShadow = true;
    group.add(site);

    [-38, 38].forEach((lx) => {
      const lawn = new THREE.Mesh(new THREE.BoxGeometry(18, 0.64, 20), lawnMat);
      lawn.position.set(lx, 0.34, 24);
      group.add(lawn);
    });

    const parking = new THREE.Mesh(new THREE.BoxGeometry(46, 0.1, 18), new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 }));
    parking.position.set(22, 0.67, 26);
    group.add(parking);

    // 2. Menara Rawat Inap Utama
    const tower = new THREE.Mesh(new THREE.BoxGeometry(34, 32, 26), whiteMat);
    tower.position.set(-4, 16.6, -12);
    tower.castShadow = true;
    tower.receiveShadow = true;
    group.add(tower);

    for (let fl = 0; fl < 4; fl++) {
      const band = new THREE.Mesh(new THREE.BoxGeometry(34.6, 2.2, 26.6), greenGlassMat);
      band.position.set(-4, 9 + fl * 6.4, -12);
      group.add(band);
    }

    // 3. Sayap Rawat Inap Kedua
    const wing = new THREE.Mesh(new THREE.BoxGeometry(24, 24, 20), whiteMat);
    wing.position.set(28, 12.6, -8);
    wing.castShadow = true;
    group.add(wing);

    [0, 1, 2].forEach((fl) => {
      const band = new THREE.Mesh(new THREE.BoxGeometry(24.6, 2.0, 20.6), greenGlassMat);
      band.position.set(28, 8 + fl * 6.4, -8);
      group.add(band);
    });

    // 4. Podium Poliklinik & Vestibule
    const podium = new THREE.Mesh(new THREE.BoxGeometry(62, 10, 32), podiumMat);
    podium.position.set(0, 5.3, 12);
    podium.castShadow = true;
    podium.receiveShadow = true;
    group.add(podium);

    const podiumGlass = new THREE.Mesh(new THREE.BoxGeometry(62.6, 2.6, 32.6), greenGlassMat);
    podiumGlass.position.set(0, 6.4, 12);
    group.add(podiumGlass);

    const entrance = new THREE.Mesh(new THREE.BoxGeometry(18, 8, 6), podiumMat);
    entrance.position.set(-14, 4.3, 30);
    group.add(entrance);

    // 5. IGD & Kanopi Ambulans
    const igdCanopy = new THREE.Mesh(new THREE.BoxGeometry(22, 1.2, 11), canopyMat);
    igdCanopy.position.set(22, 5.2, 30);
    igdCanopy.castShadow = true;
    group.add(igdCanopy);

    [13, 31].forEach((cx) => {
      [26, 34].forEach((cz) => {
        const col = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 5, 8), whiteMat);
        col.position.set(cx, 2.6, cz);
        group.add(col);
      });
    });

    [18, 26].forEach((ax) => {
      const amb = new THREE.Mesh(new THREE.BoxGeometry(3.0, 2.2, 6.2), whiteMat);
      amb.position.set(ax, 1.2, 31);
      amb.castShadow = true;
      group.add(amb);
      const ambStripe = new THREE.Mesh(new THREE.BoxGeometry(3.06, 0.4, 6.26), redMat);
      ambStripe.position.set(ax, 1.7, 31);
      group.add(ambStripe);
    });

    // 6. Helipad atap
    const roofBase = new THREE.Mesh(new THREE.BoxGeometry(16, 2.4, 16), helipadMat);
    roofBase.position.set(-4, 33.8, -12);
    roofBase.castShadow = true;
    group.add(roofBase);

    const heliRing = new THREE.Mesh(new THREE.RingGeometry(5.2, 6.0, 24), helipadMarkMat);
    heliRing.rotateX(-Math.PI / 2);
    heliRing.position.set(-4, 35.06, -12);
    group.add(heliRing);

    [-6.5, -1.5].forEach((hx) => {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.1, 6), helipadMarkMat);
      bar.position.set(-4 + hx, 35.07, -12);
      group.add(bar);
    });
    const barH = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.1, 0.9), helipadMarkMat);
    barH.position.set(-4, 35.07, -12);
    group.add(barH);

    // 7. Palang Merah & Signage
    [[-4, 24, -25.4], [28, 20.5, -18.4]].forEach(([cx, cy, cz]) => {
      const crossV = new THREE.Mesh(new THREE.BoxGeometry(1.4, 4.4, 0.5), redMat);
      crossV.position.set(cx, cy, cz);
      group.add(crossV);
      const crossH = new THREE.Mesh(new THREE.BoxGeometry(4.4, 1.4, 0.5), redMat);
      crossH.position.set(cx, cy, cz);
      group.add(crossH);
    });

    // 8. Pohon Peneduh
    [-44, 44].forEach((tx) => {
      [8, 22].forEach((tz) => {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.65, 4.2, 6), trunkMat);
        trunk.position.set(tx, 2.8, tz);
        trunk.castShadow = true;
        group.add(trunk);
        const foliage = new THREE.Mesh(new THREE.ConeGeometry(3.2, 7.4, 7), foliageMat);
        foliage.position.set(tx, 7.6, tz);
        foliage.castShadow = true;
        group.add(foliage);
      });
    });

    return group;
  }

  /**
   * 84. Pasar Meruya & Sentra Niaga Meruya Ilir
   * Bangunan pasar beratap lengkung, los basah-kering, kios & area bongkar muat.
   */
  static createPasarMeruya() {
    const group = new THREE.Group();

    const siteMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.85 });
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.55 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.5, metalness: 0.2 });
    const awningMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.6 });
    const awningAltMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.6 });
    const wetMat = new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.35, metalness: 0.15 });
    const stallMat = new THREE.MeshStandardMaterial({ color: 0xd6d3d1, roughness: 0.7 });
    const signMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.5 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 });

    // 1. Site & Plaza Bongkar Muat
    const site = new THREE.Mesh(new THREE.BoxGeometry(96, 0.6, 76), siteMat);
    site.position.y = 0.3;
    site.receiveShadow = true;
    group.add(site);

    const plaza = new THREE.Mesh(new THREE.BoxGeometry(80, 0.64, 16), new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.85 }));
    plaza.position.set(0, 0.34, 26);
    group.add(plaza);

    // 2. Bangunan Pasar Utama
    const hall = new THREE.Mesh(new THREE.BoxGeometry(66, 9.5, 34), wallMat);
    hall.position.set(0, 5.4, -6);
    hall.castShadow = true;
    hall.receiveShadow = true;
    group.add(hall);

    const hallBase = new THREE.Mesh(new THREE.BoxGeometry(66.6, 2.2, 34.6), wetMat);
    hallBase.position.set(0, 1.8, -6);
    group.add(hallBase);

    const roofGeo = new THREE.CylinderGeometry(19, 19, 66, 18, 1, false, 0, Math.PI);
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.rotation.z = Math.PI / 2;
    roof.scale.set(0.35, 1.0, 1.0);
    roof.position.set(0, 10.2, -6);
    roof.castShadow = true;
    group.add(roof);

    // 3. Skylight & Ventilasi Atap
    [-20, 0, 20].forEach((sx) => {
      const skylight = new THREE.Mesh(new THREE.BoxGeometry(10, 0.5, 26), whiteMat);
      skylight.position.set(sx, 15.6, -6);
      group.add(skylight);
    });

    [-26, 26].forEach((ex) => {
      const vent = new THREE.Mesh(new THREE.BoxGeometry(0.5, 3.2, 20), whiteMat);
      vent.position.set(ex, 10.6, -6);
      group.add(vent);
    });

    // 4. Deretan Kios & Los
    for (let kx = -28; kx <= 28; kx += 8) {
      [-22, 10].forEach((kz, kIdx) => {
        const kios = new THREE.Mesh(new THREE.BoxGeometry(6, 3.4, 4.2), stallMat);
        kios.position.set(kx, 2.4, kz);
        kios.castShadow = true;
        group.add(kios);

        const awning = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.4, 4.6), kIdx === 0 ? awningMat : awningAltMat);
        awning.position.set(kx, 4.3, kz);
        group.add(awning);
      });
    }

    // 5. Los Basah di Sisi Barat
    const wetStalls = new THREE.Mesh(new THREE.BoxGeometry(10, 1.0, 26), wetMat);
    wetStalls.position.set(-28, 1.0, -6);
    group.add(wetStalls);

    // 6. Gerbang & Papan Nama Pasar
    [-1, 1].forEach((dir) => {
      const gateCol = new THREE.Mesh(new THREE.BoxGeometry(1.2, 7.5, 1.2), whiteMat);
      gateCol.position.set(dir * 18, 4, 34);
      gateCol.castShadow = true;
      group.add(gateCol);
    });

    const gateBeam = new THREE.Mesh(new THREE.BoxGeometry(38, 1.2, 1.4), signMat);
    gateBeam.position.set(0, 7.6, 34);
    group.add(gateBeam);

    const signText = new THREE.Mesh(new THREE.BoxGeometry(22, 3.2, 0.4), whiteMat);
    signText.position.set(0, 7.6, 34.8);
    group.add(signText);

    // 7. Kendaraan Pengangkut
    const truckBody = new THREE.Mesh(new THREE.BoxGeometry(3.0, 2.8, 7.2), stallMat);
    truckBody.position.set(-34, 1.9, 26);
    truckBody.castShadow = true;
    group.add(truckBody);

    const truckCab = new THREE.Mesh(new THREE.BoxGeometry(3.0, 2.4, 3.0), awningMat);
    truckCab.position.set(-34, 1.7, 31.2);
    truckCab.castShadow = true;
    group.add(truckCab);

    // 8. Pohon & Pohon Pot
    [-42, 42].forEach((tx) => {
      [-24, 34].forEach((tz) => {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 4.5, 6), trunkMat);
        trunk.position.set(tx, 2.9, tz);
        trunk.castShadow = true;
        group.add(trunk);
        const foliage = new THREE.Mesh(new THREE.ConeGeometry(3.4, 8, 7), foliageMat);
        foliage.position.set(tx, 8.0, tz);
        foliage.castShadow = true;
        group.add(foliage);
      });
    });

    return group;
  }

  /**
   * 85. Stasiun Kembangan
   * Peron ganda KRL Lintas Tangerang, kanopi baja toska & JPO penyeberangan.
   */
  static createStasiunKembangan() {
    const group = new THREE.Group();

    const ballastMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.9 });
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.65 });
    const tealRoofMat = new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.4, side: THREE.DoubleSide });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.5, metalness: 0.5 });
    const glassMat = LandmarkModels.tagNightWindow(
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.3, transparent: true, opacity: 0.85 })
    );
    const railSteelMat = new THREE.MeshStandardMaterial({ color: 0xcfecff, metalness: 0.6, roughness: 0.25 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4 });
    const signMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.5 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 });

    // 1. Ballast & Rel Ganda
    const trackbed = new THREE.Mesh(new THREE.BoxGeometry(64, 0.6, 44), ballastMat);
    trackbed.position.y = 0.3;
    trackbed.receiveShadow = true;
    group.add(trackbed);

    [-5.5, 5.5].forEach((tz) => {
      [-0.75, 0.75].forEach((ro) => {
        const rail = new THREE.Mesh(new THREE.BoxGeometry(64, 0.22, 0.18), railSteelMat);
        rail.position.set(0, 0.7, tz + ro);
        group.add(rail);
      });
    });

    // 2. Peron Ganda
    [-12, 12].forEach((pz) => {
      const plat = new THREE.Mesh(new THREE.BoxGeometry(58, 1.1, 7), concreteMat);
      plat.position.set(0, 1.25, pz);
      plat.receiveShadow = true;
      group.add(plat);

      [-20, 0, 20].forEach((cx) => {
        const col = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.36, 5.2, 8), steelMat);
        col.position.set(cx, 4.4, pz);
        col.castShadow = true;
        group.add(col);
      });

      const roofGeo = new THREE.CylinderGeometry(6, 6, 58, 14, 1, false, 0, Math.PI);
      const roof = new THREE.Mesh(roofGeo, tealRoofMat);
      roof.rotation.z = Math.PI / 2;
      roof.scale.set(0.32, 1.0, 0.8);
      roof.position.set(0, 7.1, pz);
      roof.castShadow = true;
      group.add(roof);
    });

    // 3. Gedung Stasiun
    const station = new THREE.Mesh(new THREE.BoxGeometry(24, 7.5, 10), concreteMat);
    station.position.set(-16, 4.4, -17.5);
    station.castShadow = true;
    group.add(station);

    const stationGlass = new THREE.Mesh(new THREE.BoxGeometry(24.6, 3.2, 10.6), glassMat);
    stationGlass.position.set(-16, 4.8, -17.5);
    group.add(stationGlass);

    const stationRoof = new THREE.Mesh(new THREE.BoxGeometry(25.5, 0.8, 11.5), tealRoofMat);
    stationRoof.position.set(-16, 8.5, -17.5);
    group.add(stationRoof);

    // 4. JPO Penyeberangan
    const jpo = new THREE.Mesh(new THREE.BoxGeometry(5, 2.8, 34), concreteMat);
    jpo.position.set(20, 8.0, 0);
    jpo.castShadow = true;
    group.add(jpo);

    const jpoGlass = new THREE.Mesh(new THREE.BoxGeometry(5.4, 1.5, 30), glassMat);
    jpoGlass.position.set(20, 8.0, 0);
    group.add(jpoGlass);

    const stair = new THREE.Mesh(new THREE.BoxGeometry(4, 6.5, 5), concreteMat);
    stair.position.set(20, 3.6, 20);
    stair.castShadow = true;
    group.add(stair);

    // 5. Kereta KRL di Jalur Ganda
    const trainBody = new THREE.Mesh(new THREE.BoxGeometry(38, 3.0, 2.9), whiteMat);
    trainBody.position.set(-4, 3.4, 5.5);
    trainBody.castShadow = true;
    group.add(trainBody);

    const trainStripe = new THREE.Mesh(new THREE.BoxGeometry(38.2, 0.6, 2.95), redMat);
    trainStripe.position.set(-4, 3.0, 5.5);
    group.add(trainStripe);

    const trainGlass = new THREE.Mesh(new THREE.BoxGeometry(38.2, 0.9, 2.98), glassMat);
    trainGlass.position.set(-4, 4.0, 5.5);
    group.add(trainGlass);

    // 6. Katener & Papan Nama Stasiun
    [-24, -8, 8, 24].forEach((gx) => {
      const pole1 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 7.5, 8), steelMat);
      pole1.position.set(gx, 4.0, -20);
      group.add(pole1);
      const pole2 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 7.5, 8), steelMat);
      pole2.position.set(gx, 4.0, 20);
      group.add(pole2);
      const beam = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 40), steelMat);
      beam.position.set(gx, 7.7, 0);
      group.add(beam);
    });

    const nameBoard = new THREE.Mesh(new THREE.BoxGeometry(16, 2.8, 0.5), signMat);
    nameBoard.position.set(-16, 10.2, -17.5);
    group.add(nameBoard);

    const nameText = new THREE.Mesh(new THREE.BoxGeometry(11, 1.2, 0.2), whiteMat);
    nameText.position.set(-16, 10.2, -17.15);
    group.add(nameText);

    // 7. Vegetasi Tepi Rel
    [-30, 30].forEach((tx) => {
      [-22, 22].forEach((tz) => {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.55, 3.8, 6), trunkMat);
        trunk.position.set(tx, 2.5, tz);
        trunk.castShadow = true;
        group.add(trunk);
        const foliage = new THREE.Mesh(new THREE.ConeGeometry(2.8, 6.6, 7), foliageMat);
        foliage.position.set(tx, 7.0, tz);
        foliage.castShadow = true;
        group.add(foliage);
      });
    });

    return group;
  }

  /**
   * 86. Bendungan Polor Kali Angke
   * Pintu air hidrolik, pilar beton, rumah operator & jembatan inspeksi.
   */
  static createBendunganPolor() {
    const group = new THREE.Group();

    const waterMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.2, metalness: 0.1 });
    const bankMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.85 });
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.7 });
    const gateMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.45, metalness: 0.4 });
    const hoistMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.5 });
    const houseMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.5 });
    const railingMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.4, metalness: 0.3 });
    const signMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.5 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 });

    // 1. Badan Air Kali Angke
    const water = new THREE.Mesh(new THREE.PlaneGeometry(24, 64), waterMat);
    water.rotateX(-Math.PI / 2);
    // Sedikit di atas muka air Kali Angke (y = 1,2) agar tidak z-fighting.
    water.position.set(0, 1.3, 0);
    group.add(water);

    // 2. Tanggul & Dinding Penahan Beton
    [-24, 24].forEach((bx) => {
      const bank = new THREE.Mesh(new THREE.BoxGeometry(26, 1.4, 64), bankMat);
      bank.position.set(bx, 0.7, 0);
      bank.receiveShadow = true;
      group.add(bank);
    });

    [-12.2, 12.2].forEach((wx) => {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(1.4, 3.4, 64), concreteMat);
      wall.position.set(wx, 1.6, 0);
      wall.castShadow = true;
      group.add(wall);
    });

    // 3. Pilar & Gerbang Baja Hidrolik
    [-12, -4, 4, 12].forEach((px) => {
      const pier = new THREE.Mesh(new THREE.BoxGeometry(2.2, 6.2, 8), concreteMat);
      pier.position.set(px, 3.1, 0);
      pier.castShadow = true;
      pier.receiveShadow = true;
      group.add(pier);
    });

    [-8, 0, 8].forEach((gx) => {
      const gate = new THREE.Mesh(new THREE.BoxGeometry(6.4, 4.8, 0.7), gateMat);
      gate.position.set(gx, 2.9, 0.2);
      gate.rotation.x = -0.12;
      gate.castShadow = true;
      group.add(gate);

      [-1, 1].forEach((dir) => {
        const hoistCol = new THREE.Mesh(new THREE.BoxGeometry(0.4, 3.0, 0.4), hoistMat);
        hoistCol.position.set(gx + dir * 3.4, 7.4, 0);
        group.add(hoistCol);
      });

      const hoistBeam = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.5, 0.5), hoistMat);
      hoistBeam.position.set(gx, 8.9, 0);
      group.add(hoistBeam);

      const hoistBox = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.1, 1.0), hoistMat);
      hoistBox.position.set(gx, 8.2, 0);
      group.add(hoistBox);
    });

    // 4. Jembatan Inspeksi & Railing
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(50, 0.8, 5), concreteMat);
    bridge.position.set(0, 6.6, -4.6);
    bridge.castShadow = true;
    group.add(bridge);

    [-2, -1, 0, 1, 2].forEach((ri) => {
      [-7, -2.2].forEach((rz) => {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.2, 0.15), railingMat);
        post.position.set(ri * 8.4, 7.6, rz);
        group.add(post);
      });
      const topRail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 4.8), railingMat);
      topRail.position.set(ri * 8.4, 8.2, -4.6);
      group.add(topRail);
    });

    // 5. Rumah Operator di Tepi Timur
    const house = new THREE.Mesh(new THREE.BoxGeometry(13, 6.4, 11), houseMat);
    house.position.set(28, 3.6, -12);
    house.castShadow = true;
    group.add(house);

    const houseGlass = new THREE.Mesh(
      new THREE.BoxGeometry(13.6, 1.8, 11.6),
      LandmarkModels.tagNightWindow(
        new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.25, metalness: 0.2, transparent: true, opacity: 0.85 })
      )
    );
    houseGlass.position.set(28, 4.2, -12);
    group.add(houseGlass);

    const houseRoof = new THREE.Mesh(new THREE.BoxGeometry(14, 0.7, 12), roofMat);
    houseRoof.position.set(28, 7.0, -12);
    group.add(houseRoof);

    // 6. Papan Peringatan & Pengukur Muka Air
    const signBoard = new THREE.Mesh(new THREE.BoxGeometry(5.2, 3.0, 0.4), signMat);
    signBoard.position.set(-28, 4.6, 18);
    signBoard.rotation.y = 0.25;
    group.add(signBoard);

    const gaugePost = new THREE.Mesh(new THREE.BoxGeometry(0.4, 5.5, 0.4), whiteMat);
    gaugePost.position.set(15, 2.9, 14);
    group.add(gaugePost);

    [-1.5, 0, 1.5].forEach((gy) => {
      const mark = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.25, 0.45), new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.5 }));
      mark.position.set(15, 4.2 + gy, 14);
      group.add(mark);
    });

    // 7. Vegetasi Tepi Sungai
    [-30, 30].forEach((tx) => {
      [-26, 26].forEach((tz) => {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.6, 4.0, 6), trunkMat);
        trunk.position.set(tx, 2.6, tz);
        trunk.castShadow = true;
        group.add(trunk);
        const foliage = new THREE.Mesh(new THREE.ConeGeometry(3.0, 7, 7), foliageMat);
        foliage.position.set(tx, 7.3, tz);
        foliage.castShadow = true;
        group.add(foliage);
      });
    });

    return group;
  }

  /**
   * 87. Kampung Makan Joglo 21
   * Pendopo joglo bertingkat, tenant kuliner, lesehan & panggung komunal.
   */
  static createKampungMakanJoglo() {
    const group = new THREE.Group();

    const siteMat = new THREE.MeshStandardMaterial({ color: 0x57534e, roughness: 0.85 });
    const pavingMat = new THREE.MeshStandardMaterial({ color: 0xa8a29e, roughness: 0.8 });
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x7c2d12, roughness: 0.7 });
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.75 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.7 });
    const roofAltMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.7 });
    const stallMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.6 });
    const awningMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.6 });
    const awningAltMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.6 });
    const lampMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, emissive: 0xf59e0b, emissiveIntensity: 0.8, roughness: 0.4 });
    const signMat = new THREE.MeshStandardMaterial({ color: 0x14532d, roughness: 0.5 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 });

    // 1. Site, Paving & Taman
    const site = new THREE.Mesh(new THREE.BoxGeometry(92, 0.6, 74), siteMat);
    site.position.y = 0.3;
    site.receiveShadow = true;
    group.add(site);

    const paving = new THREE.Mesh(new THREE.BoxGeometry(62, 0.62, 50), pavingMat);
    paving.position.set(0, 0.34, 4);
    paving.receiveShadow = true;
    group.add(paving);

    [-34, 34].forEach((lx) => {
      const lawn = new THREE.Mesh(new THREE.BoxGeometry(18, 0.64, 26), lawnMat);
      lawn.position.set(lx, 0.34, 6);
      group.add(lawn);
    });

    // 2. Pendopo Joglo Utama
    const platform = new THREE.Mesh(new THREE.BoxGeometry(34, 1.2, 26), woodMat);
    platform.position.set(0, 1.0, -4);
    platform.castShadow = true;
    group.add(platform);

    [-13, 13].forEach((px) => {
      [-9, 9].forEach((pz) => {
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 6.2, 8), pillarMat);
        pillar.position.set(px, 4.6, -4 + pz);
        pillar.castShadow = true;
        group.add(pillar);
      });
    });

    [-6.5, 6.5].forEach((px) => {
      [-4, 4].forEach((pz) => {
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 6.0, 8), pillarMat);
        pillar.position.set(px, 4.5, -4 + pz);
        group.add(pillar);
      });
    });

    const roofLower = new THREE.Mesh(new THREE.ConeGeometry(25, 5.4, 4), roofMat);
    roofLower.rotation.y = Math.PI / 4;
    roofLower.scale.z = 0.82;
    roofLower.position.set(0, 10.2, -4);
    roofLower.castShadow = true;
    group.add(roofLower);

    const roofUpper = new THREE.Mesh(new THREE.ConeGeometry(16, 4.2, 4), roofAltMat);
    roofUpper.rotation.y = Math.PI / 4;
    roofUpper.scale.z = 0.82;
    roofUpper.position.set(0, 14.4, -4);
    roofUpper.castShadow = true;
    group.add(roofUpper);

    const finial = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.45, 3.0, 8), pillarMat);
    finial.position.set(0, 17.4, -4);
    group.add(finial);

    // 3. Deretan Tenant Kuliner
    for (let sx = -26; sx <= 26; sx += 13) {
      [-26, 26].forEach((sz, sIdx) => {
        const stall = new THREE.Mesh(new THREE.BoxGeometry(9, 3.2, 5), stallMat);
        stall.position.set(sx, 2.2, sz);
        stall.castShadow = true;
        group.add(stall);

        const awning = new THREE.Mesh(new THREE.BoxGeometry(9.6, 0.4, 5.6), sIdx === 0 ? awningMat : awningAltMat);
        awning.position.set(sx, 4.0, sz);
        group.add(awning);

        const counter = new THREE.Mesh(new THREE.BoxGeometry(7, 0.9, 1.2), woodMat);
        counter.position.set(sx, 1.2, sz + (sz > 0 ? -2.5 : 2.5));
        group.add(counter);
      });
    }

    // 4. Area Lesehan & Meja
    [-18, -6, 6, 18].forEach((lx) => {
      [-10, 10].forEach((lz) => {
        const mat = new THREE.Mesh(new THREE.BoxGeometry(6, 0.25, 4), woodMat);
        mat.position.set(lx, 0.75, lz + 4);
        group.add(mat);

        const table = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.2, 10), pillarMat);
        table.position.set(lx, 1.35, lz + 4);
        group.add(table);
      });
    });

    // 5. Panggung Kecil & Langit-langit Lampu
    const stage = new THREE.Mesh(new THREE.BoxGeometry(14, 1.0, 7), woodMat);
    stage.position.set(0, 0.95, 28);
    stage.castShadow = true;
    group.add(stage);

    for (let lx = -30; lx <= 30; lx += 10) {
      [-16, 16].forEach((lz) => {
        const lampPole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 5.2, 6), pillarMat);
        lampPole.position.set(lx, 3.1, lz);
        group.add(lampPole);
        const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.42, 8, 6), lampMat);
        lamp.position.set(lx, 5.7, lz);
        group.add(lamp);
      });
    }

    // 6. Papan Nama & Gerbang Masuk
    [-1, 1].forEach((dir) => {
      const gateCol = new THREE.Mesh(new THREE.BoxGeometry(0.8, 6.0, 0.8), woodMat);
      gateCol.position.set(dir * 14, 3.4, 36);
      gateCol.castShadow = true;
      group.add(gateCol);
    });

    const gateBeam = new THREE.Mesh(new THREE.BoxGeometry(30, 1.0, 1.0), signMat);
    gateBeam.position.set(0, 6.4, 36);
    group.add(gateBeam);

    const gateSign = new THREE.Mesh(new THREE.BoxGeometry(20, 2.4, 0.3), whiteMat);
    gateSign.position.set(0, 6.4, 36.55);
    group.add(gateSign);

    // 7. Pohon Tepi Kawasan
    [-40, 40].forEach((tx) => {
      [-20, 24].forEach((tz) => {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.6, 4.2, 6), trunkMat);
        trunk.position.set(tx, 2.7, tz);
        trunk.castShadow = true;
        group.add(trunk);
        const foliage = new THREE.Mesh(new THREE.ConeGeometry(3.2, 7.2, 7), foliageMat);
        foliage.position.set(tx, 7.6, tz);
        foliage.castShadow = true;
        group.add(foliage);
      });
    });

    return group;
  }

  /**
   * 88. PIK Avenue & Pusat Niaga Pantai Indah Kapuk
   * Mal pesisir berfasad kaca lengkung, plaza drop-off, atap taman & parkir.
   */
  static createPIKAvenue() {
    const group = new THREE.Group();

    const siteMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.85 });
    const plazaMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.75 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const glassMat = LandmarkModels.tagNightWindow(new THREE.MeshStandardMaterial({
      color: 0x7dd3fc, roughness: 0.15, metalness: 0.35, transparent: true, opacity: 0.82, side: THREE.DoubleSide
    }));
    const darkGlassMat = LandmarkModels.tagNightWindow(
      new THREE.MeshStandardMaterial({ color: 0x155e75, roughness: 0.3, metalness: 0.15 })
    );
    const accentMat = new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.45 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.35, metalness: 0.5 });
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 });
    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const palmMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 });

    // 1. Tapak, plaza & parkir
    const site = new THREE.Mesh(new THREE.BoxGeometry(110, 0.6, 90), siteMat);
    site.position.y = 0.3;
    site.receiveShadow = true;
    group.add(site);

    const plaza = new THREE.Mesh(new THREE.BoxGeometry(102, 0.14, 32), plazaMat);
    plaza.position.set(0, 0.68, 27);
    plaza.receiveShadow = true;
    group.add(plaza);

    const parking = new THREE.Mesh(new THREE.BoxGeometry(46, 0.1, 22), asphaltMat);
    parking.position.set(-30, 0.72, 20);
    group.add(parking);

    for (let i = -4; i <= 4; i++) {
      const line = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 16), whiteMat);
      line.position.set(-30 + i * 5, 0.78, 20);
      group.add(line);
    }

    // 2. Podium mal & massa utama
    const podium = new THREE.Mesh(new THREE.BoxGeometry(78, 10, 42), whiteMat);
    podium.position.set(8, 5.6, -6);
    podium.castShadow = true;
    podium.receiveShadow = true;
    group.add(podium);

    const podiumGlass = new THREE.Mesh(new THREE.BoxGeometry(78.6, 3.2, 42.6), glassMat);
    podiumGlass.position.set(8, 4.2, -6);
    group.add(podiumGlass);

    const upper = new THREE.Mesh(new THREE.BoxGeometry(66, 12, 34), whiteMat);
    upper.position.set(8, 16.6, -9);
    upper.castShadow = true;
    group.add(upper);

    const upperGlass = new THREE.Mesh(new THREE.BoxGeometry(66.6, 6.4, 34.6), darkGlassMat);
    upperGlass.position.set(8, 16.2, -9);
    group.add(upperGlass);

    // 3. Atrium kaca lengkung menghadap plaza
    const atrium = new THREE.Mesh(
      new THREE.CylinderGeometry(17, 17, 20, 24, 1, true, -Math.PI / 2, Math.PI),
      glassMat
    );
    atrium.position.set(8, 11, 16);
    atrium.castShadow = true;
    group.add(atrium);

    const atriumRim = new THREE.Mesh(new THREE.TorusGeometry(17, 0.3, 6, 24, Math.PI), whiteMat);
    atriumRim.rotation.x = Math.PI / 2;
    atriumRim.rotation.z = 0;
    atriumRim.position.set(8, 21, 16);
    group.add(atriumRim);

    // 4. Kanopi drop-off & signage
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(56, 0.9, 12), whiteMat);
    canopy.position.set(8, 6.2, 34);
    canopy.castShadow = true;
    group.add(canopy);

    [-16, 32].forEach((cx) => {
      [30, 38].forEach((cz) => {
        const col = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 5.6, 8), whiteMat);
        col.position.set(cx, 3.4, cz);
        group.add(col);
      });
    });

    const signBand = new THREE.Mesh(new THREE.BoxGeometry(34, 2.6, 0.6), whiteMat);
    signBand.position.set(8, 24.2, 9);
    group.add(signBand);

    const signStripe = new THREE.Mesh(new THREE.BoxGeometry(34, 0.4, 0.66), goldMat);
    signStripe.position.set(8, 23.2, 9);
    group.add(signStripe);

    const nameMesh = new THREE.Mesh(new THREE.BoxGeometry(28, 1.4, 0.2), accentMat);
    nameMesh.name = 'pik-avenue-mall';
    nameMesh.position.set(8, 24.2, 9.36);
    group.add(nameMesh);

    // 5. Atap taman & skylight
    const roofGarden = new THREE.Mesh(new THREE.BoxGeometry(52, 0.4, 22), lawnMat);
    roofGarden.position.set(8, 23.0, -12);
    group.add(roofGarden);

    [-14, 8, 30].forEach((sx) => {
      const skylight = new THREE.Mesh(new THREE.BoxGeometry(8, 0.5, 10), glassMat);
      skylight.position.set(sx, 23.4, -12);
      group.add(skylight);
    });

    // 6. Menara tanda & vegetasi palem
    const totem = new THREE.Mesh(new THREE.BoxGeometry(2.2, 16, 2.2), whiteMat);
    totem.position.set(-50, 8.6, 34);
    totem.castShadow = true;
    group.add(totem);

    const totemHead = new THREE.Mesh(new THREE.BoxGeometry(3.4, 5, 1.2), accentMat);
    totemHead.position.set(-50, 18.5, 34);
    group.add(totemHead);

    [-46, -30, 44, 48].forEach((tx) => {
      [40, 24].forEach((tz) => {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.4, 6.2, 6), trunkMat);
        trunk.position.set(tx, 3.7, tz);
        trunk.castShadow = true;
        group.add(trunk);
        const crown = new THREE.Mesh(new THREE.ConeGeometry(2.6, 4.4, 7), palmMat);
        crown.position.set(tx, 8.6, tz);
        crown.castShadow = true;
        group.add(crown);
      });
    });

    return group;
  }

  /**
   * 89. Pantai Maju PIK & Promenade Pesisir
   * Pantai reklamasi, promenade berpaguan, menara lifeguard & kafe tepi laut.
   */
  static createPantaiMajuPIK() {
    const group = new THREE.Group();

    const sandMat = new THREE.MeshStandardMaterial({ color: 0xe7d3a8, roughness: 0.95 });
    const seaMat = new THREE.MeshStandardMaterial({
      color: 0x075985, roughness: 0.2, metalness: 0.5, transparent: true, opacity: 0.95
    });
    const pavingMat = new THREE.MeshStandardMaterial({ color: 0xd6d3d1, roughness: 0.85 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.5 });
    const yellowMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.5 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.85 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const palmMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 });
    const kioskMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5 });
    const awningMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.5 });

    // 1. Tapak pasir & laut
    const sand = new THREE.Mesh(new THREE.BoxGeometry(120, 0.5, 80), sandMat);
    sand.position.y = 0.25;
    sand.receiveShadow = true;
    group.add(sand);

    const sea = new THREE.Mesh(new THREE.PlaneGeometry(120, 34), seaMat);
    sea.rotation.x = -Math.PI / 2;
    sea.position.set(0, 0.56, -45);
    group.add(sea);

    // 2. Promenade & pagar
    const promenade = new THREE.Mesh(new THREE.BoxGeometry(120, 0.24, 9), pavingMat);
    promenade.name = 'pantai-maju-promenade';
    promenade.position.set(0, 0.62, -26);
    promenade.receiveShadow = true;
    group.add(promenade);

    for (let x = -56; x <= 56; x += 8) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.1, 0.16), whiteMat);
      post.position.set(x, 1.3, -30.2);
      group.add(post);
    }
    const rail = new THREE.Mesh(new THREE.BoxGeometry(116, 0.12, 0.12), whiteMat);
    rail.position.set(0, 1.8, -30.2);
    group.add(rail);

    // 3. Menara lifeguard
    const towerBase = new THREE.Mesh(new THREE.BoxGeometry(6, 2.2, 6), whiteMat);
    towerBase.position.set(24, 1.7, -8);
    towerBase.castShadow = true;
    group.add(towerBase);

    const towerCabin = new THREE.Mesh(new THREE.BoxGeometry(4.6, 3.2, 4.6), redMat);
    towerCabin.position.set(24, 4.6, -8);
    towerCabin.castShadow = true;
    group.add(towerCabin);

    const towerRoof = new THREE.Mesh(new THREE.BoxGeometry(6, 0.5, 6), whiteMat);
    towerRoof.position.set(24, 6.5, -8);
    group.add(towerRoof);

    // 4. Payung, kursi & kafe
    [-36, -18].forEach((ux) => {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 4.2, 6), woodMat);
      pole.position.set(ux, 2.6, -4);
      group.add(pole);
      const canopy = new THREE.Mesh(new THREE.ConeGeometry(4.2, 1.8, 8), yellowMat);
      canopy.position.set(ux, 5.0, -4);
      canopy.castShadow = true;
      group.add(canopy);
      const chair = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.8, 2.2), whiteMat);
      chair.position.set(ux + 4.4, 1.1, -4);
      group.add(chair);
    });

    const kiosk = new THREE.Mesh(new THREE.BoxGeometry(22, 4.4, 8), kioskMat);
    kiosk.position.set(-32, 2.8, 8);
    kiosk.castShadow = true;
    group.add(kiosk);

    const kioskAwning = new THREE.Mesh(new THREE.BoxGeometry(23, 0.5, 9), awningMat);
    kioskAwning.position.set(-32, 5.2, 8);
    group.add(kioskAwning);

    // 5. Gerbang & papan nama pantai
    [-16, 16].forEach((gx) => {
      const gate = new THREE.Mesh(new THREE.BoxGeometry(1.2, 7, 1.2), whiteMat);
      gate.position.set(gx, 3.9, 34);
      gate.castShadow = true;
      group.add(gate);
    });
    const gateSign = new THREE.Mesh(new THREE.BoxGeometry(34, 2.8, 0.6), awningMat);
    gateSign.position.set(0, 7.6, 34);
    group.add(gateSign);

    const gateLabel = new THREE.Mesh(new THREE.BoxGeometry(26, 1.2, 0.2), whiteMat);
    gateLabel.position.set(0, 7.6, 34.36);
    group.add(gateLabel);

    // 6. Vegetasi palem pantai
    [-52, -42, 40, 50].forEach((tx) => {
      [26, 14].forEach((tz) => {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 6.4, 6), trunkMat);
        trunk.position.set(tx, 3.8, tz);
        trunk.castShadow = true;
        group.add(trunk);
        const crown = new THREE.Mesh(new THREE.ConeGeometry(2.8, 4.6, 7), palmMat);
        crown.position.set(tx, 8.9, tz);
        crown.castShadow = true;
        group.add(crown);
      });
    });

    return group;
  }

  /**
   * 90. Taman Wisata Alam Angke Kapuk
   * Boardwalk mangrove, menara observasi, pusat pengunjung & perahu.
   */
  static createTWAAngkeKapuk() {
    const group = new THREE.Group();

    const soilMat = new THREE.MeshStandardMaterial({ color: 0x365314, roughness: 0.95 });
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0f766e, roughness: 0.2, metalness: 0.35, transparent: true, opacity: 0.9
    });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x7c2d12, roughness: 0.85 });
    const plankMat = new THREE.MeshStandardMaterial({ color: 0xa16207, roughness: 0.8 });
    const thatchMat = new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.9 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
    const greenMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.6 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.95 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x14532d, roughness: 0.9 });
    const boatMat = new THREE.MeshStandardMaterial({ color: 0x0e7490, roughness: 0.6 });

    // 1. Tapak rawa & kolam
    const site = new THREE.Mesh(new THREE.BoxGeometry(120, 0.5, 100), soilMat);
    site.position.y = 0.25;
    site.receiveShadow = true;
    group.add(site);

    const poolA = new THREE.Mesh(new THREE.PlaneGeometry(74, 34), waterMat);
    poolA.rotation.x = -Math.PI / 2;
    poolA.position.set(-8, 0.54, -20);
    group.add(poolA);

    const poolB = new THREE.Mesh(new THREE.PlaneGeometry(34, 26), waterMat);
    poolB.rotation.x = -Math.PI / 2;
    poolB.position.set(38, 0.54, 8);
    group.add(poolB);

    // 2. Boardwalk kayu
    const boardwalk = new THREE.Mesh(new THREE.BoxGeometry(8, 0.35, 78), plankMat);
    boardwalk.name = 'twa-angke-boardwalk';
    boardwalk.position.set(-8, 1.0, -8);
    boardwalk.castShadow = true;
    group.add(boardwalk);

    const crosswalk = new THREE.Mesh(new THREE.BoxGeometry(58, 0.35, 6), plankMat);
    crosswalk.position.set(-6, 1.0, -38);
    group.add(crosswalk);

    for (let z = -44; z <= 28; z += 8) {
      [-11.6, -4.4].forEach((px) => {
        const pile = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 1.6, 6), woodMat);
        pile.position.set(px, 0.5, z);
        group.add(pile);
      });
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.2, 0.14), woodMat);
      post.position.set(-11.6, 1.8, z);
      group.add(post);
      const postRight = post.clone();
      postRight.position.x = -4.4;
      group.add(postRight);
    }

    // 3. Menara observasi
    const towerX = 30;
    const towerZ = -8;
    [[-3, -3], [3, -3], [-3, 3], [3, 3]].forEach(([dx, dz]) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 16, 6), woodMat);
      leg.position.set(towerX + dx, 8.4, towerZ + dz);
      leg.castShadow = true;
      group.add(leg);
    });

    const deck = new THREE.Mesh(new THREE.BoxGeometry(9, 0.5, 9), plankMat);
    deck.position.set(towerX, 16.6, towerZ);
    deck.castShadow = true;
    group.add(deck);

    const railing = new THREE.Mesh(new THREE.BoxGeometry(9.4, 1.1, 9.4), whiteMat);
    railing.position.set(towerX, 17.4, towerZ);
    group.add(railing);

    const roof = new THREE.Mesh(new THREE.ConeGeometry(7.4, 3.4, 4), thatchMat);
    roof.rotation.y = Math.PI / 4;
    roof.position.set(towerX, 19.9, towerZ);
    roof.castShadow = true;
    group.add(roof);

    // 4. Pusat pengunjung
    const visitor = new THREE.Mesh(new THREE.BoxGeometry(24, 5, 16), whiteMat);
    visitor.position.set(-38, 3.1, 24);
    visitor.castShadow = true;
    group.add(visitor);

    const visitorRoof = new THREE.Mesh(new THREE.ConeGeometry(17, 6, 4), thatchMat);
    visitorRoof.rotation.y = Math.PI / 4;
    visitorRoof.position.set(-38, 8.6, 24);
    visitorRoof.castShadow = true;
    group.add(visitorRoof);

    const visitorSign = new THREE.Mesh(new THREE.BoxGeometry(14, 1.6, 0.2), greenMat);
    visitorSign.position.set(-38, 5.6, 32.1);
    group.add(visitorSign);

    // 5. Perahu & dermaga kecil
    const dock = new THREE.Mesh(new THREE.BoxGeometry(14, 0.3, 4), plankMat);
    dock.position.set(-38, 1.0, -14);
    group.add(dock);

    [[-46, -20], [-30, -24], [-20, -14]].forEach(([bx, bz], idx) => {
      const hull = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.0, 8), boatMat);
      hull.position.set(bx, 0.9, bz);
      hull.rotation.y = idx * 0.18;
      hull.castShadow = true;
      group.add(hull);
      const bow = new THREE.Mesh(new THREE.ConeGeometry(1.3, 2.4, 4), boatMat);
      bow.rotation.x = Math.PI / 2;
      bow.position.set(bx, 0.9, bz - 5);
      group.add(bow);
    });

    // 6. Klaster mangrove
    for (let i = 0; i < 34; i++) {
      const angle = (i / 34) * Math.PI * 2;
      const radius = 26 + (i % 5) * 6;
      const mx = Math.cos(angle) * radius - 4;
      const mz = Math.sin(angle) * radius - 4;
      if (Math.abs(mx + 8) < 8 && Math.abs(mz + 8) < 42) continue;
      if (mx > 18 && mx < 50 && mz > -22 && mz < 14) continue;
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.3, 2.4, 5), trunkMat);
      trunk.position.set(mx, 1.5, mz);
      group.add(trunk);
      const crown = new THREE.Mesh(new THREE.ConeGeometry(1.8, 3.2, 6), leafMat);
      crown.position.set(mx, 3.8, mz);
      crown.castShadow = true;
      group.add(crown);
    }

    return group;
  }

  /**
   * 91. Kampung Nelayan Kamal Muara
   * Rumah panggung, dermaga kayu, perahu nelayan & musala berkubah.
   */
  static createKampungNelayanKamalMuara() {
    const group = new THREE.Group();

    const groundMat = new THREE.MeshStandardMaterial({ color: 0x57534e, roughness: 0.95 });
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0c4a6e, roughness: 0.25, metalness: 0.4, transparent: true, opacity: 0.92
    });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const plankMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.85 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.75 });
    const roofAltMat = new THREE.MeshStandardMaterial({ color: 0x0369a1, roughness: 0.75 });
    const creamMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.7 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
    const boatColors = [0x0ea5e9, 0xf97316, 0x22c55e, 0xfacc15];
    const domeMat = new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.4, metalness: 0.3 });

    // 1. Tapak & muka air muara
    const site = new THREE.Mesh(new THREE.BoxGeometry(90, 0.5, 70), groundMat);
    site.position.y = 0.25;
    site.receiveShadow = true;
    group.add(site);

    const water = new THREE.Mesh(new THREE.PlaneGeometry(90, 26), waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.set(0, 0.54, -22);
    group.add(water);

    // 2. Deret rumah panggung
    const houses = new THREE.Group();
    houses.name = 'kamal-muara-stilt-houses';
    const houseSpecs = [
      { x: -30, z: -6, roof: roofMat }, { x: -18, z: -2, roof: roofAltMat },
      { x: -6, z: -6, roof: roofMat }, { x: 12, z: -2, roof: roofAltMat },
      { x: 24, z: -6, roof: roofMat }, { x: 34, z: 2, roof: roofAltMat }
    ];

    houseSpecs.forEach((spec, idx) => {
      const deck = new THREE.Mesh(new THREE.BoxGeometry(9, 0.4, 8), plankMat);
      deck.position.set(spec.x, 1.4, spec.z);
      deck.castShadow = true;
      houses.add(deck);

      [[-3.6, -3.2], [3.6, -3.2], [-3.6, 3.2], [3.6, 3.2]].forEach(([dx, dz]) => {
        const pile = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 2.6, 5), woodMat);
        pile.position.set(spec.x + dx, 0.7, spec.z + dz);
        houses.add(pile);
      });

      const body = new THREE.Mesh(new THREE.BoxGeometry(8, 4.2, 7), idx % 2 === 0 ? creamMat : whiteMat);
      body.position.set(spec.x, 3.7, spec.z);
      body.castShadow = true;
      houses.add(body);

      [-1.8, 1.8].forEach((rz) => {
        const slope = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.3, 7.8), spec.roof);
        slope.rotation.z = rz > 0 ? -0.5 : 0.5;
        slope.position.set(spec.x + rz, 6.4, spec.z);
        slope.castShadow = true;
        houses.add(slope);
      });

      const door = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.4, 0.18), woodMat);
      door.position.set(spec.x, 2.9, spec.z + 3.55);
      houses.add(door);
    });
    group.add(houses);

    // 3. Dermaga & perahu
    const pier = new THREE.Mesh(new THREE.BoxGeometry(6, 0.3, 30), plankMat);
    pier.position.set(0, 1.0, -16);
    pier.castShadow = true;
    group.add(pier);

    [[-28, -22], [-10, -26], [8, -22], [26, -26]].forEach(([bx, bz], idx) => {
      const hull = new THREE.Mesh(
        new THREE.BoxGeometry(3.2, 1.1, 9),
        new THREE.MeshStandardMaterial({ color: boatColors[idx], roughness: 0.6 })
      );
      hull.position.set(bx, 0.9, bz);
      hull.rotation.y = idx * 0.12 - 0.2;
      hull.castShadow = true;
      group.add(hull);

      const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.4, 2.4), whiteMat);
      cabin.position.set(bx, 1.8, bz + 1.2);
      group.add(cabin);
    });

    // 4. Musala berkubah
    const mosque = new THREE.Mesh(new THREE.BoxGeometry(14, 5, 12), creamMat);
    mosque.position.set(28, 3.1, 22);
    mosque.castShadow = true;
    group.add(mosque);

    const dome = new THREE.Mesh(new THREE.SphereGeometry(4.2, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
    dome.position.set(28, 5.7, 22);
    dome.castShadow = true;
    group.add(dome);

    const minaret = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.9, 10, 8), whiteMat);
    minaret.position.set(37, 5.2, 22);
    minaret.castShadow = true;
    group.add(minaret);

    // 5. Jaring & rak jemuran ikan
    [-34, -16, 4].forEach((nx) => {
      const netFrame = new THREE.Mesh(new THREE.BoxGeometry(10, 0.2, 5), woodMat);
      netFrame.position.set(nx, 3.4, 12);
      group.add(netFrame);
      [-4.6, 4.6].forEach((dx) => {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 3.8, 5), woodMat);
        pole.position.set(nx + dx, 1.9, 12);
        group.add(pole);
      });
    });

    // 6. Pohon kelapa
    [-38, 42].forEach((tx) => {
      [4, 28].forEach((tz) => {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.45, 6.6, 6), woodMat);
        trunk.position.set(tx, 3.8, tz);
        trunk.castShadow = true;
        group.add(trunk);
        const crown = new THREE.Mesh(new THREE.ConeGeometry(2.8, 4.6, 7), new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 }));
        crown.position.set(tx, 9.0, tz);
        crown.castShadow = true;
        group.add(crown);
      });
    });

    return group;
  }

  /**
   * 92. Pecinan Teluk Gong & Waduk Teluk Gong
   * Gerbang paifang, ruko merah, lampion, waduk retensi & lapak kuliner.
   */
  static createTelukGong() {
    const group = new THREE.Group();

    const siteMat = new THREE.MeshStandardMaterial({ color: 0x57534e, roughness: 0.9 });
    const pavingMat = new THREE.MeshStandardMaterial({ color: 0xd6d3d1, roughness: 0.85 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.55 });
    const darkRedMat = new THREE.MeshStandardMaterial({ color: 0x7f1d1d, roughness: 0.6 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.35, metalness: 0.5 });
    const greenRoofMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.5 });
    const creamMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.7 });
    const waterMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.2, metalness: 0.4 });
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.85 });
    const lanternMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.5, emissive: 0x7f1d1d, emissiveIntensity: 0.5 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });

    // 1. Tapak & jalan masuk
    const site = new THREE.Mesh(new THREE.BoxGeometry(100, 0.5, 70), siteMat);
    site.position.y = 0.25;
    site.receiveShadow = true;
    group.add(site);

    const street = new THREE.Mesh(new THREE.BoxGeometry(100, 0.12, 16), pavingMat);
    street.position.set(0, 0.62, 20);
    group.add(street);

    // 2. Gerbang paifang
    const gateBeam = new THREE.Mesh(new THREE.BoxGeometry(34, 1.2, 1.6), redMat);
    gateBeam.name = 'teluk-gong-paifang';
    gateBeam.position.set(0, 7.2, 28);
    gateBeam.castShadow = true;
    group.add(gateBeam);

    [-13, 13].forEach((gx) => {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 1.0, 7, 8), redMat);
      col.position.set(gx, 3.7, 28);
      col.castShadow = true;
      group.add(col);

      const base = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.8, 2.6), stoneMat);
      base.position.set(gx, 0.8, 28);
      group.add(base);
    });

    const gateRoof = new THREE.Mesh(new THREE.BoxGeometry(40, 0.9, 5), greenRoofMat);
    gateRoof.position.set(0, 8.0, 28);
    gateRoof.castShadow = true;
    group.add(gateRoof);

    const gateRoofTop = new THREE.Mesh(new THREE.BoxGeometry(30, 0.7, 3.6), greenRoofMat);
    gateRoofTop.position.set(0, 9.4, 28);
    group.add(gateRoofTop);

    const gateSign = new THREE.Mesh(new THREE.BoxGeometry(20, 2.2, 0.3), goldMat);
    gateSign.position.set(0, 7.3, 28.86);
    group.add(gateSign);

    // 3. Ruko merah dua sisi
    const rukoZs = [12, 2, -8];
    [-1, 1].forEach((side) => {
      rukoZs.forEach((rz, idx) => {
        const ruko = new THREE.Mesh(new THREE.BoxGeometry(18, 8 + (idx % 2) * 2, 8), idx % 2 === 0 ? creamMat : redMat);
        ruko.position.set(side * 34, 4.6 + (idx % 2), rz);
        ruko.castShadow = true;
        group.add(ruko);

        const awning = new THREE.Mesh(new THREE.BoxGeometry(18.6, 0.4, 3), redMat);
        awning.position.set(side * 34, 4.2, rz + 5.2);
        group.add(awning);

        const sign = new THREE.Mesh(new THREE.BoxGeometry(12, 1.4, 0.24), goldMat);
        sign.position.set(side * 34, 7.0 + (idx % 2), rz + 4.1);
        group.add(sign);

        [-6, 0, 6].forEach((lz) => {
          const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.55, 10, 8), lanternMat);
          lantern.position.set(side * 34 + lz, 3.6, rz + 5.3);
          group.add(lantern);
        });
      });
    });

    // 4. Waduk retensi
    const pond = new THREE.Mesh(new THREE.PlaneGeometry(34, 20), waterMat);
    pond.rotation.x = -Math.PI / 2;
    pond.position.set(0, 0.64, -24);
    group.add(pond);

    const pondEdge = new THREE.Mesh(new THREE.BoxGeometry(36, 0.5, 22), stoneMat);
    pondEdge.position.set(0, 0.4, -24);
    group.add(pondEdge);
    pond.position.y = 0.68;

    [-1, 1].forEach((side) => {
      [-30, -18].forEach((pz) => {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.3, 0.2), woodMat);
        post.position.set(side * 18.4, 1.2, pz - 4);
        group.add(post);
      });
    });

    // 5. Lapak kuliner & meja
    [-20, 0, 20].forEach((sx) => {
      const stall = new THREE.Mesh(new THREE.BoxGeometry(10, 3.2, 6), creamMat);
      stall.position.set(sx, 2.2, 22);
      stall.castShadow = true;
      group.add(stall);

      const stallRoof = new THREE.Mesh(new THREE.BoxGeometry(11, 0.3, 7), redMat);
      stallRoof.position.set(sx, 4.0, 22);
      group.add(stallRoof);

      const table = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 0.2, 10), woodMat);
      table.position.set(sx, 1.4, 17);
      group.add(table);
    });

    // 6. Pohon peneduh
    [-46, 46].forEach((tx) => {
      [8, -14].forEach((tz) => {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.55, 4.6, 6), woodMat);
        trunk.position.set(tx, 2.9, tz);
        trunk.castShadow = true;
        group.add(trunk);
        const crown = new THREE.Mesh(new THREE.ConeGeometry(3.0, 6.4, 7), new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 }));
        crown.position.set(tx, 8.2, tz);
        crown.castShadow = true;
        group.add(crown);
      });
    });

    return group;
  }

  /**
   * 93. Pelabuhan Perikanan Samudera Nizam Zachman
   * Dermaga beton, breakwater, kapal ikan, lelang, cold storage & kran.
   */
  static createPPSNizamZachman() {
    const group = new THREE.Group();

    const quayMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.85 });
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.8 });
    const buildingMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.55 });
    const blueMat = new THREE.MeshStandardMaterial({ color: 0x0369a1, roughness: 0.5, metalness: 0.3 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.55 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4, metalness: 0.6 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.45 });
    const hullMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.55 });
    const cabinMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.5 });
    const iceMat = new THREE.MeshStandardMaterial({ color: 0xbae6fd, roughness: 0.3, metalness: 0.2 });
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.95 });

    // 1. Dermaga utama & pier
    const platform = new THREE.Mesh(new THREE.BoxGeometry(130, 1.2, 58), quayMat);
    platform.name = 'pps-nizam-quay';
    platform.position.set(0, 0.6, 14);
    platform.receiveShadow = true;
    platform.castShadow = true;
    group.add(platform);

    [-34, 34].forEach((px) => {
      const pier = new THREE.Mesh(new THREE.BoxGeometry(16, 0.9, 40), concreteMat);
      pier.position.set(px, 0.55, -22);
      pier.castShadow = true;
      group.add(pier);
    });

    // 2. Breakwater batu
    for (let i = 0; i < 12; i++) {
      const rock = new THREE.Mesh(new THREE.BoxGeometry(9 + (i % 3) * 2, 3.2, 6), rockMat);
      rock.position.set(-56 + i * 10, 1.1, -47 + (i % 2) * 2);
      rock.rotation.y = i * 0.22;
      group.add(rock);
    }

    const lighthouse = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 3.0, 18, 10), whiteMat);
    lighthouse.position.set(58, 9.8, -44);
    lighthouse.castShadow = true;
    group.add(lighthouse);

    const lighthouseTop = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 2.8, 2.4, 10), redMat);
    lighthouseTop.position.set(58, 19.8, -44);
    group.add(lighthouseTop);

    // 3. Gedung lelang, cold storage & pabrik es
    const auction = new THREE.Mesh(new THREE.BoxGeometry(44, 10, 22), buildingMat);
    auction.position.set(0, 6.8, 30);
    auction.castShadow = true;
    group.add(auction);

    const auctionRoof = new THREE.Mesh(new THREE.BoxGeometry(46, 0.8, 24), blueMat);
    auctionRoof.position.set(0, 12.2, 30);
    group.add(auctionRoof);

    const coldStorage = new THREE.Mesh(new THREE.BoxGeometry(28, 14, 18), buildingMat);
    coldStorage.position.set(-44, 8.8, 30);
    coldStorage.castShadow = true;
    group.add(coldStorage);

    const coldDoor = new THREE.Mesh(new THREE.BoxGeometry(6, 5, 0.3), steelMat);
    coldDoor.position.set(-44, 4.1, 39.2);
    group.add(coldDoor);

    const iceFactory = new THREE.Mesh(new THREE.BoxGeometry(22, 12, 16), iceMat);
    iceFactory.position.set(44, 7.8, 30);
    iceFactory.castShadow = true;
    group.add(iceFactory);

    // 4. Kapal ikan
    [[-34, -30], [-12, -36], [14, -30], [38, -36]].forEach(([bx, bz], idx) => {
      const hull = new THREE.Mesh(new THREE.BoxGeometry(7, 3.2, 20), hullMat);
      hull.position.set(bx, 1.8, bz);
      hull.rotation.y = idx % 2 === 0 ? 0.06 : -0.06;
      hull.castShadow = true;
      group.add(hull);

      const bow = new THREE.Mesh(new THREE.ConeGeometry(3.6, 6, 4), hullMat);
      bow.rotation.x = Math.PI / 2;
      bow.position.set(bx, 1.8, bz - 13);
      group.add(bow);

      const cabin = new THREE.Mesh(new THREE.BoxGeometry(5, 3.4, 6), cabinMat);
      cabin.position.set(bx, 4.6, bz + 4);
      cabin.castShadow = true;
      group.add(cabin);

      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 9, 6), steelMat);
      mast.position.set(bx, 8.0, bz - 1);
      group.add(mast);
    });

    // 5. Kran dermaga
    [-20, 20].forEach((cx) => {
      const base = new THREE.Mesh(new THREE.BoxGeometry(5, 2, 5), steelMat);
      base.position.set(cx, 1.8, -8);
      group.add(base);

      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 16, 8), steelMat);
      mast.position.set(cx, 10, -8);
      mast.castShadow = true;
      group.add(mast);

      const jib = new THREE.Mesh(new THREE.BoxGeometry(22, 0.7, 0.9), steelMat);
      jib.position.set(cx + 7, 17.6, -8);
      jib.rotation.z = -0.14;
      group.add(jib);

      const cable = new THREE.Mesh(new THREE.BoxGeometry(0.12, 6, 0.12), steelMat);
      cable.position.set(cx + 16, 14.2, -8);
      group.add(cable);
    });

    // 6. Kontainer & papan nama
    [[-56, 4], [-56, 10], [56, 4], [56, 10]].forEach(([bx, bz], idx) => {
      const container = new THREE.Mesh(
        new THREE.BoxGeometry(12, 3, 2.6),
        idx % 2 === 0
          ? new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.6 })
          : new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.6 })
      );
      container.position.set(bx, 2.4, bz);
      group.add(container);
    });

    const sign = new THREE.Mesh(new THREE.BoxGeometry(30, 2.6, 0.5), blueMat);
    sign.position.set(0, 5.4, 44.4);
    group.add(sign);

    [-30, 30].forEach((sx) => {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 5.4, 6), whiteMat);
      pole.position.set(sx, 2.9, 44.4);
      group.add(pole);
    });

    return group;
  }

  /**
   * 94. Rusunawa Marunda & Kampung Pesisir Marunda
   * Lima menara rusun 16 lantai, plaza bersama & musala di tepi pantai Marunda.
   */
  static createRusunawaMarunda() {
    const group = new THREE.Group();

    const siteMat = new THREE.MeshStandardMaterial({ color: 0xd6d3d1, roughness: 0.92 });
    const plazaMat = new THREE.MeshStandardMaterial({ color: 0xe7e5e4, roughness: 0.8 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x57534e, roughness: 0.75 });
    const windowMat = LandmarkModels.tagNightWindow(
      new THREE.MeshStandardMaterial({ color: 0x1e3a5f, roughness: 0.35, metalness: 0.2 })
    );
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xfafaf9, roughness: 0.5 });
    const domeMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.45, metalness: 0.3 });
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x4d7c0f, roughness: 0.95 });
    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.9 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 });
    const towerColors = [0x0ea5e9, 0xf59e0b, 0x10b981, 0xec4899, 0xfacc15];

    // 1. Tapak, plaza & area parkir
    const site = new THREE.Mesh(new THREE.BoxGeometry(146, 0.6, 118), siteMat);
    site.position.y = 0.3;
    site.receiveShadow = true;
    group.add(site);

    const plaza = new THREE.Mesh(new THREE.BoxGeometry(126, 0.12, 40), plazaMat);
    plaza.position.set(0, 0.66, 12);
    plaza.receiveShadow = true;
    group.add(plaza);

    const parking = new THREE.Mesh(new THREE.BoxGeometry(44, 0.1, 18), asphaltMat);
    parking.position.set(-46, 0.72, 30);
    group.add(parking);

    for (let i = -3; i <= 3; i++) {
      const line = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.04, 14), whiteMat);
      line.position.set(-46 + i * 6, 0.78, 30);
      group.add(line);
    }

    // 2. Lima menara 16 lantai berjajar menghadap plaza
    const towers = new THREE.Group();
    towers.name = 'rusunawa-marunda-towers';

    towerColors.forEach((color, index) => {
      const towerMat = new THREE.MeshStandardMaterial({ color, roughness: 0.68 });
      const tx = -56 + index * 28;
      const tz = -28;

      const tower = new THREE.Mesh(new THREE.BoxGeometry(18, 40, 14), towerMat);
      tower.position.set(tx, 20.6, tz);
      tower.castShadow = true;
      tower.receiveShadow = true;
      towers.add(tower);

      const roof = new THREE.Mesh(new THREE.BoxGeometry(19, 0.8, 15), roofMat);
      roof.position.set(tx, 41, tz);
      towers.add(roof);

      for (let floor = 3; floor <= 15; floor += 4) {
        const band = new THREE.Mesh(new THREE.BoxGeometry(18.3, 1.2, 14.3), windowMat);
        band.position.set(tx, floor * 2.4, tz);
        towers.add(band);
      }

      const core = new THREE.Mesh(new THREE.BoxGeometry(3.2, 41, 3.2), whiteMat);
      core.position.set(tx + 6.8, 21, tz + 4.6);
      towers.add(core);

      const entrance = new THREE.Mesh(new THREE.BoxGeometry(8, 0.3, 4.6), whiteMat);
      entrance.position.set(tx, 3.4, tz + 9.2);
      towers.add(entrance);
    });
    group.add(towers);

    // 3. Musala, taman bermain & warung
    const musala = new THREE.Mesh(new THREE.BoxGeometry(11, 4.2, 9), whiteMat);
    musala.position.set(52, 2.7, 20);
    musala.castShadow = true;
    group.add(musala);

    const dome = new THREE.Mesh(new THREE.SphereGeometry(3.1, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
    dome.position.set(52, 4.9, 20);
    group.add(dome);

    const playground = new THREE.Mesh(new THREE.BoxGeometry(20, 0.08, 12), lawnMat);
    playground.position.set(18, 0.74, 30);
    group.add(playground);

    [-50, -14, 22, 54].forEach((wx) => {
      const stall = new THREE.Mesh(new THREE.BoxGeometry(6, 2.6, 4), whiteMat);
      stall.position.set(wx, 1.9, 42);
      stall.castShadow = true;
      group.add(stall);
      const awning = new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.2, 4.6), domeMat);
      awning.position.set(wx, 3.3, 42);
      group.add(awning);
    });

    // 4. Pohon peneduh di tepi tapak
    [[-66, 44], [-30, 46], [34, 46], [66, 40], [-66, -46], [66, -46]].forEach(([tx, tz]) => {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 5.4, 6), trunkMat);
      trunk.position.set(tx, 3.2, tz);
      group.add(trunk);
      const crown = new THREE.Mesh(new THREE.ConeGeometry(2.8, 4.6, 7), leafMat);
      crown.position.set(tx, 7.6, tz);
      crown.castShadow = true;
      group.add(crown);
    });

    return group;
  }

  /**
   * 95. Rumah Si Pitung & Kampung Betawi Marunda
   * Rumah panggung kayu Betawi, museum kecil & pekarangan bertradisi.
   */
  static createRumahSiPitung() {
    const group = new THREE.Group();

    const groundMat = new THREE.MeshStandardMaterial({ color: 0x4b4636, roughness: 0.95 });
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x3f6212, roughness: 0.95 });
    const gravelMat = new THREE.MeshStandardMaterial({ color: 0xa8a29e, roughness: 0.9 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.85 });
    const darkWoodMat = new THREE.MeshStandardMaterial({ color: 0x5c3a1e, roughness: 0.9 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.8 });
    const creamMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.75 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.6 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.7 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 });

    // 1. Tapak, pekarangan & jalan masuk
    const site = new THREE.Mesh(new THREE.BoxGeometry(66, 0.5, 52), groundMat);
    site.position.y = 0.25;
    site.receiveShadow = true;
    group.add(site);

    const yard = new THREE.Mesh(new THREE.BoxGeometry(40, 0.08, 26), lawnMat);
    yard.position.set(-2, 0.54, 8);
    group.add(yard);

    const path = new THREE.Mesh(new THREE.BoxGeometry(6, 0.08, 20), gravelMat);
    path.position.set(0, 0.56, 16);
    group.add(path);

    // 2. Rumah panggung utama berukir
    const house = new THREE.Group();
    house.name = 'si-pitung-rumah-panggung';

    [[-8, -4.4], [0, -4.4], [8, -4.4], [-8, 4.4], [0, 4.4], [8, 4.4]].forEach(([dx, dz]) => {
      const pile = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.4, 3.4, 6), darkWoodMat);
      pile.position.set(dx, 2.2, dz);
      pile.castShadow = true;
      house.add(pile);
    });

    const deck = new THREE.Mesh(new THREE.BoxGeometry(20, 0.5, 12), woodMat);
    deck.position.set(0, 3.9, 0);
    deck.castShadow = true;
    house.add(deck);

    const body = new THREE.Mesh(new THREE.BoxGeometry(18, 6.2, 10.4), creamMat);
    body.position.set(0, 7.2, -0.4);
    body.castShadow = true;
    house.add(body);

    [-4.6, 4.6].forEach((rx) => {
      const slope = new THREE.Mesh(new THREE.BoxGeometry(10.4, 0.32, 12.4), roofMat);
      slope.rotation.z = rx > 0 ? -0.3 : 0.3;
      slope.position.set(rx, 11.5, -0.4);
      slope.castShadow = true;
      house.add(slope);
    });

    const gableFront = new THREE.Mesh(new THREE.BoxGeometry(17.6, 2.6, 0.3), creamMat);
    gableFront.position.set(0, 11.2, 4.85);
    house.add(gableFront);

    const porch = new THREE.Mesh(new THREE.BoxGeometry(12, 0.3, 3.4), woodMat);
    porch.position.set(0, 4.1, 6.6);
    house.add(porch);

    [-5.6, 5.6].forEach((px) => {
      [5.1, 8.0].forEach((pz) => {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 3.4, 6), darkWoodMat);
        post.position.set(px, 5.7, pz);
        house.add(post);
      });
    });

    const railing = new THREE.Mesh(new THREE.BoxGeometry(12, 0.9, 0.18), darkWoodMat);
    railing.position.set(0, 4.7, 8.25);
    house.add(railing);

    for (let step = 0; step < 4; step++) {
      const stair = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.4, 0.9), woodMat);
      stair.position.set(0, 1.0 + step * 0.75, 9.4 + step * 0.8);
      house.add(stair);
    }

    const door = new THREE.Mesh(new THREE.BoxGeometry(2.4, 4.2, 0.2), darkWoodMat);
    door.position.set(0, 7.1, 4.9);
    house.add(door);

    [-4.6, 4.6].forEach((wx) => {
      const shutter = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.6, 0.2), redMat);
      shutter.position.set(wx, 7.6, 4.9);
      house.add(shutter);
    });
    group.add(house);

    // 3. Rumah museum & gerbang pekarangan
    const museum = new THREE.Mesh(new THREE.BoxGeometry(13, 4.6, 9), whiteMat);
    museum.position.set(24, 2.9, 6);
    museum.castShadow = true;
    group.add(museum);

    const museumRoof = new THREE.Mesh(new THREE.BoxGeometry(14, 0.7, 10), roofMat);
    museumRoof.position.set(24, 5.4, 6);
    group.add(museumRoof);

    const museumSign = new THREE.Mesh(new THREE.BoxGeometry(8, 1.2, 0.3), redMat);
    museumSign.position.set(24, 4.1, 10.7);
    group.add(museumSign);

    [-31, 31].forEach((fx) => {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.8, 3.4, 0.8), darkWoodMat);
      post.position.set(fx, 2.2, 24);
      group.add(post);
    });

    const fenceRail = new THREE.Mesh(new THREE.BoxGeometry(62, 0.4, 0.3), darkWoodMat);
    fenceRail.position.set(0, 3.4, 24);
    group.add(fenceRail);

    [-8, 8].forEach((gx) => {
      const gatePost = new THREE.Mesh(new THREE.BoxGeometry(1.2, 4.6, 1.2), redMat);
      gatePost.position.set(gx, 2.8, 24);
      group.add(gatePost);
    });

    // 4. Pohon & sumur pekarangan
    [[-24, 14], [-22, -14], [28, -12]].forEach(([tx, tz]) => {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.45, 6, 6), trunkMat);
      trunk.position.set(tx, 3.5, tz);
      trunk.castShadow = true;
      group.add(trunk);
      const crown = new THREE.Mesh(new THREE.SphereGeometry(3.2, 8, 6), leafMat);
      crown.position.set(tx, 7.8, tz);
      crown.castShadow = true;
      group.add(crown);
    });

    const well = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, 1.1, 10), gravelMat);
    well.position.set(-16, 0.9, 4);
    group.add(well);

    return group;
  }

  /**
   * 96. Kawasan Logistik Marunda
   * Gudang logistik, lapangan kontainer & gerbang kargo penunjang Pelabuhan Marunda.
   */
  static createKawasanLogistikMarunda() {
    const group = new THREE.Group();

    const siteMat = new THREE.MeshStandardMaterial({ color: 0x9ca3af, roughness: 0.9 });
    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x374151, roughness: 0.92 });
    const warehouseMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.7, metalness: 0.25 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.75, metalness: 0.3 });
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.8 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.5 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.55, metalness: 0.4 });
    const containerColors = [0xb91c1c, 0x1d4ed8, 0x15803d, 0xf59e0b];
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 });

    // 1. Tapak, halaman & jalan masuk
    const site = new THREE.Mesh(new THREE.BoxGeometry(136, 0.5, 104), siteMat);
    site.position.y = 0.25;
    site.receiveShadow = true;
    group.add(site);

    const yard = new THREE.Mesh(new THREE.BoxGeometry(120, 0.1, 58), asphaltMat);
    yard.position.set(0, 0.56, -6);
    yard.receiveShadow = true;
    group.add(yard);

    const access = new THREE.Mesh(new THREE.BoxGeometry(20, 0.12, 22), asphaltMat);
    access.position.set(0, 0.58, 40);
    group.add(access);

    // 2. Tiga gudang berjajar dengan dermaga bongkar muat
    const warehouses = new THREE.Group();
    warehouses.name = 'logistik-marunda-warehouses';

    [-42, 0, 42].forEach((wx) => {
      const body = new THREE.Mesh(new THREE.BoxGeometry(38, 10, 24), warehouseMat);
      body.position.set(wx, 5.6, -14);
      body.castShadow = true;
      body.receiveShadow = true;
      warehouses.add(body);

      [-9.5, 9.5].forEach((rz) => {
        const slope = new THREE.Mesh(new THREE.BoxGeometry(22, 0.4, 25), roofMat);
        slope.rotation.z = rz > 0 ? -0.32 : 0.32;
        slope.position.set(wx + rz, 13.9, -14);
        slope.castShadow = true;
        warehouses.add(slope);
      });

      [-11, 0, 11].forEach((dx) => {
        const shutter = new THREE.Mesh(new THREE.BoxGeometry(6.4, 6.2, 0.3), doorMat);
        shutter.position.set(wx + dx, 3.7, -1.8);
        warehouses.add(shutter);
      });

      const dock = new THREE.Mesh(new THREE.BoxGeometry(38, 1.1, 3), whiteMat);
      dock.position.set(wx, 0.9, 0.2);
      warehouses.add(dock);
    });
    group.add(warehouses);

    // 3. Lapangan kontainer bertumpuk
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 4; col++) {
        const stackHeight = (row + col) % 2 === 0 ? 2 : 1;
        for (let level = 0; level < stackHeight; level++) {
          const container = new THREE.Mesh(
            new THREE.BoxGeometry(12, 2.6, 2.8),
            new THREE.MeshStandardMaterial({ color: containerColors[(row * 4 + col) % containerColors.length], roughness: 0.65, metalness: 0.3 })
          );
          container.position.set(-30 + col * 15, 2.0 + level * 2.7, -44 + row * 5);
          container.castShadow = true;
          group.add(container);
        }
      }
    }

    // 4. Gerbang, kantor & pos timbang
    [-10, 10].forEach((px) => {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(2.4, 8.4, 2.4), whiteMat);
      pillar.position.set(px, 4.7, 44);
      pillar.castShadow = true;
      group.add(pillar);
    });

    const gateCanopy = new THREE.Mesh(new THREE.BoxGeometry(24, 1.2, 6), accentMat);
    gateCanopy.position.set(0, 9.2, 44);
    gateCanopy.castShadow = true;
    group.add(gateCanopy);

    const gateSign = new THREE.Mesh(new THREE.BoxGeometry(18, 2.2, 0.4), whiteMat);
    gateSign.position.set(0, 9.2, 47.2);
    group.add(gateSign);

    const office = new THREE.Mesh(new THREE.BoxGeometry(24, 6.4, 12), whiteMat);
    office.position.set(-50, 3.7, 36);
    office.castShadow = true;
    group.add(office);

    const officeGlassMat = LandmarkModels.tagNightWindow(
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.35, metalness: 0.2 })
    );
    const officeGlass = new THREE.Mesh(new THREE.BoxGeometry(24.4, 1.6, 12.4), officeGlassMat);
    officeGlass.position.set(-50, 5.4, 36);
    group.add(officeGlass);

    const weighbridge = new THREE.Mesh(new THREE.BoxGeometry(6, 0.4, 16), steelMat);
    weighbridge.position.set(24, 0.78, 34);
    group.add(weighbridge);

    // 5. Derrick kontainer & truk
    const derrickMast = new THREE.Mesh(new THREE.BoxGeometry(1.4, 20, 1.4), steelMat);
    derrickMast.position.set(52, 10.6, -40);
    derrickMast.castShadow = true;
    group.add(derrickMast);

    const derrickArm = new THREE.Mesh(new THREE.BoxGeometry(16, 1.0, 1.2), steelMat);
    derrickArm.position.set(46, 19, -40);
    group.add(derrickArm);

    [[-20, 26], [18, 26]].forEach(([tx, tz]) => {
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.8, 2.6), accentMat);
      cabin.position.set(tx, 2.2, tz);
      group.add(cabin);
      const trailer = new THREE.Mesh(new THREE.BoxGeometry(9, 3.0, 2.8), whiteMat);
      trailer.position.set(tx + 5.6, 2.3, tz);
      group.add(trailer);
    });

    // 6. Pohon tepi kawasan
    [[-62, 46], [62, 46], [-62, -46], [62, -46]].forEach(([tx, tz]) => {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 5.6, 6), trunkMat);
      trunk.position.set(tx, 3.1, tz);
      group.add(trunk);
      const crown = new THREE.Mesh(new THREE.ConeGeometry(2.7, 4.6, 7), leafMat);
      crown.position.set(tx, 7.6, tz);
      group.add(crown);
    });

    return group;
  }

  /**
   * 97. Rusunawa Nagrak Cilincing
   * Dua menara rusun 12 lantai dengan podium penghubung di Cilincing.
   */
  static createRusunawaNagrak() {
    const group = new THREE.Group();

    const siteMat = new THREE.MeshStandardMaterial({ color: 0xd6d3d1, roughness: 0.92 });
    const plazaMat = new THREE.MeshStandardMaterial({ color: 0xe7e5e4, roughness: 0.8 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x57534e, roughness: 0.75 });
    const windowMat = LandmarkModels.tagNightWindow(
      new THREE.MeshStandardMaterial({ color: 0x1e3a5f, roughness: 0.35, metalness: 0.2 })
    );
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xfafaf9, roughness: 0.5 });
    const domeMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.45, metalness: 0.3 });
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x4d7c0f, roughness: 0.95 });
    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.9 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 });

    const site = new THREE.Mesh(new THREE.BoxGeometry(104, 0.6, 82), siteMat);
    site.position.y = 0.3;
    site.receiveShadow = true;
    group.add(site);

    const plaza = new THREE.Mesh(new THREE.BoxGeometry(78, 0.12, 30), plazaMat);
    plaza.position.set(0, 0.66, 20);
    plaza.receiveShadow = true;
    group.add(plaza);

    // 1. Dua menara 12 lantai & podium penghubung
    const towers = new THREE.Group();
    towers.name = 'rusunawa-nagrak-towers';

    [-26, 26].forEach((tx, index) => {
      const towerMat = new THREE.MeshStandardMaterial({ color: index === 0 ? 0x0ea5e9 : 0xf59e0b, roughness: 0.68 });
      const tower = new THREE.Mesh(new THREE.BoxGeometry(17, 36, 14), towerMat);
      tower.position.set(tx, 18.6, -14);
      tower.castShadow = true;
      tower.receiveShadow = true;
      towers.add(tower);

      const roof = new THREE.Mesh(new THREE.BoxGeometry(18, 0.8, 15), roofMat);
      roof.position.set(tx, 37, -14);
      towers.add(roof);

      for (let floor = 2; floor <= 11; floor += 3) {
        const band = new THREE.Mesh(new THREE.BoxGeometry(17.3, 1.1, 14.3), windowMat);
        band.position.set(tx, floor * 3, -14);
        towers.add(band);
      }

      const core = new THREE.Mesh(new THREE.BoxGeometry(3.0, 37, 3.0), whiteMat);
      core.position.set(tx + 6.4, 19, -10.2);
      towers.add(core);
    });

    const podium = new THREE.Mesh(new THREE.BoxGeometry(54, 9, 16), whiteMat);
    podium.position.set(0, 5.1, 2);
    podium.castShadow = true;
    towers.add(podium);

    const podiumGlass = new THREE.Mesh(new THREE.BoxGeometry(54.4, 1.7, 16.4), windowMat);
    podiumGlass.position.set(0, 4.4, 2);
    towers.add(podiumGlass);
    group.add(towers);

    // 2. Musala, taman & parkir
    const musala = new THREE.Mesh(new THREE.BoxGeometry(9, 3.8, 8), whiteMat);
    musala.position.set(38, 2.4, 26);
    group.add(musala);

    const dome = new THREE.Mesh(new THREE.SphereGeometry(2.7, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
    dome.position.set(38, 4.3, 26);
    group.add(dome);

    const playground = new THREE.Mesh(new THREE.BoxGeometry(18, 0.08, 10), lawnMat);
    playground.position.set(-24, 0.74, 26);
    group.add(playground);

    const parking = new THREE.Mesh(new THREE.BoxGeometry(30, 0.1, 12), asphaltMat);
    parking.position.set(6, 0.72, 34);
    group.add(parking);

    // 3. Pohon tepi
    [[-46, 34], [-12, 36], [22, 36], [46, 34], [-46, -34], [46, -34]].forEach(([tx, tz]) => {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.4, 5.2, 6), trunkMat);
      trunk.position.set(tx, 3.1, tz);
      group.add(trunk);
      const crown = new THREE.Mesh(new THREE.ConeGeometry(2.6, 4.4, 7), leafMat);
      crown.position.set(tx, 7.4, tz);
      group.add(crown);
    });

    return group;
  }

  /**
   * 98. Kawasan Berikat Nusantara Cakung
   * Gerbang kawasan berikat, pabrik, gudang & menara air di Cakung.
   */
  static createKBNCakung() {
    const group = new THREE.Group();

    const siteMat = new THREE.MeshStandardMaterial({ color: 0x9ca3af, roughness: 0.9 });
    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x374151, roughness: 0.92 });
    const factoryMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, roughness: 0.72, metalness: 0.2 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.75 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
    const navyMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.55 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.45, metalness: 0.4 });
    const containerColors = [0x1d4ed8, 0xb91c1c, 0x15803d];
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.9 });

    // 1. Tapak & jalan akses utama
    const site = new THREE.Mesh(new THREE.BoxGeometry(148, 0.5, 108), siteMat);
    site.position.y = 0.25;
    site.receiveShadow = true;
    group.add(site);

    const access = new THREE.Mesh(new THREE.BoxGeometry(24, 0.12, 76), asphaltMat);
    access.position.set(0, 0.58, 12);
    access.receiveShadow = true;
    group.add(access);

    // 2. Gerbang kawasan berikat
    const gate = new THREE.Group();
    gate.name = 'kbn-cakung-gate';

    [-13, 13].forEach((px) => {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(2.6, 9, 2.6), whiteMat);
      pillar.position.set(px, 5, 42);
      pillar.castShadow = true;
      gate.add(pillar);
    });

    const gateBeam = new THREE.Mesh(new THREE.BoxGeometry(30, 1.6, 6), navyMat);
    gateBeam.position.set(0, 10.2, 42);
    gateBeam.castShadow = true;
    gate.add(gateBeam);

    const gateSign = new THREE.Mesh(new THREE.BoxGeometry(22, 2.4, 0.5), goldMat);
    gateSign.position.set(0, 10.2, 45.2);
    gate.add(gateSign);

    const gateBase = new THREE.Mesh(new THREE.BoxGeometry(6, 2.4, 5), whiteMat);
    gateBase.position.set(19, 1.8, 42);
    gate.add(gateBase);
    group.add(gate);

    // 3. Pabrik, gudang & kantor pengelola
    [-48, 46].forEach((wx) => {
      const factory = new THREE.Mesh(new THREE.BoxGeometry(42, 11, 26), factoryMat);
      factory.position.set(wx, 5.9, -18);
      factory.castShadow = true;
      factory.receiveShadow = true;
      group.add(factory);

      [-10.7, 10.7].forEach((rz) => {
        const slope = new THREE.Mesh(new THREE.BoxGeometry(24, 0.4, 27), roofMat);
        slope.rotation.z = rz > 0 ? -0.3 : 0.3;
        slope.position.set(wx + rz, 14.7, -18);
        slope.castShadow = true;
        group.add(slope);
      });

      [-12, 0, 12].forEach((dx) => {
        const vent = new THREE.Mesh(new THREE.BoxGeometry(4.4, 1.6, 0.4), navyMat);
        vent.position.set(wx + dx, 8.4, -4.8);
        group.add(vent);
      });
    });

    const office = new THREE.Mesh(new THREE.BoxGeometry(30, 12.4, 16), whiteMat);
    office.position.set(0, 6.7, -34);
    office.castShadow = true;
    group.add(office);

    const officeGlassMat = LandmarkModels.tagNightWindow(
      new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.35, metalness: 0.2 })
    );
    const officeBand = new THREE.Mesh(new THREE.BoxGeometry(30.4, 1.5, 16.4), officeGlassMat);
    officeBand.position.set(0, 9.6, -34);
    group.add(officeBand);

    // 4. Menara air & lapangan kontainer
    const towerLeg = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 2.0, 16, 8), whiteMat);
    towerLeg.position.set(-62, 8.5, 24);
    towerLeg.castShadow = true;
    group.add(towerLeg);

    const tank = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 6, 12), navyMat);
    tank.position.set(-62, 19, 24);
    tank.castShadow = true;
    group.add(tank);

    const tankRoof = new THREE.Mesh(new THREE.ConeGeometry(5.2, 2.4, 12), roofMat);
    tankRoof.position.set(-62, 23.2, 24);
    group.add(tankRoof);

    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 3; col++) {
        const stackHeight = (row + col) % 2 === 0 ? 2 : 1;
        for (let level = 0; level < stackHeight; level++) {
          const container = new THREE.Mesh(
            new THREE.BoxGeometry(12, 2.6, 2.8),
            new THREE.MeshStandardMaterial({ color: containerColors[(row * 3 + col) % containerColors.length], roughness: 0.65, metalness: 0.3 })
          );
          container.position.set(40 + col * 15, 2.0 + level * 2.7, 22 + row * 5);
          container.castShadow = true;
          group.add(container);
        }
      }
    }

    // 5. Pohon tepi jalan akses
    [-30, 30].forEach((tx) => {
      [26, 8, -10].forEach((tz) => {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 5.2, 6), trunkMat);
        trunk.position.set(tx, 3.1, tz);
        group.add(trunk);
        const crown = new THREE.Mesh(new THREE.ConeGeometry(2.6, 4.4, 7), leafMat);
        crown.position.set(tx, 7.4, tz);
        group.add(crown);
      });
    });

    return group;
  }

  /**
   * 99. Kampung Rorotan & Rusunawa Rorotan
   * Kampung padat tepi Cakung Drain, rusunawa baru & lahan basah sisa.
   */
  static createKampungRorotan() {
    const group = new THREE.Group();

    const groundMat = new THREE.MeshStandardMaterial({ color: 0x57534e, roughness: 0.95 });
    const laneMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.9 });
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0c4a6e, roughness: 0.25, metalness: 0.4, transparent: true, opacity: 0.92
    });
    const dikeMat = new THREE.MeshStandardMaterial({ color: 0xa8a29e, roughness: 0.9 });
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.8 });
    const wallAltMat = new THREE.MeshStandardMaterial({ color: 0xdbeafe, roughness: 0.8 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.8 });
    const roofAltMat = new THREE.MeshStandardMaterial({ color: 0x0369a1, roughness: 0.8 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
    const domeMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.45, metalness: 0.3 });
    const windowMat = LandmarkModels.tagNightWindow(
      new THREE.MeshStandardMaterial({ color: 0x1e3a5f, roughness: 0.35, metalness: 0.2 })
    );
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x4d7c0f, roughness: 0.95 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 });

    // 1. Tapak, Cakung Drain & tanggul
    const site = new THREE.Mesh(new THREE.BoxGeometry(134, 0.5, 98), groundMat);
    site.position.y = 0.25;
    site.receiveShadow = true;
    group.add(site);

    const water = new THREE.Mesh(new THREE.PlaneGeometry(134, 16), waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.set(0, 0.56, -36);
    group.add(water);

    [-46, -26].forEach((dz) => {
      const dike = new THREE.Mesh(new THREE.BoxGeometry(134, 1.6, 3), dikeMat);
      dike.position.set(0, 0.8, dz);
      dike.receiveShadow = true;
      group.add(dike);
    });

    const bridge = new THREE.Mesh(new THREE.BoxGeometry(12, 0.5, 24), laneMat);
    bridge.position.set(18, 1.0, -36);
    bridge.castShadow = true;
    group.add(bridge);

    // 2. Deret rumah kampung
    const kampung = new THREE.Group();
    kampung.name = 'rorotan-kampung-houses';

    const houseSpecs = [
      { x: -50, z: -8, roof: roofMat, wall: wallMat }, { x: -34, z: -8, roof: roofAltMat, wall: wallAltMat },
      { x: -18, z: -8, roof: roofMat, wall: wallMat }, { x: 2, z: -8, roof: roofAltMat, wall: wallAltMat },
      { x: 30, z: -8, roof: roofMat, wall: wallMat }, { x: 46, z: -8, roof: roofAltMat, wall: wallAltMat },
      { x: -42, z: 8, roof: roofAltMat, wall: wallAltMat }, { x: -26, z: 8, roof: roofMat, wall: wallMat },
      { x: -10, z: 8, roof: roofAltMat, wall: wallAltMat }, { x: 10, z: 8, roof: roofMat, wall: wallMat },
      { x: 26, z: 8, roof: roofAltMat, wall: wallAltMat }, { x: 42, z: 8, roof: roofMat, wall: wallMat }
    ];

    houseSpecs.forEach((spec) => {
      const body = new THREE.Mesh(new THREE.BoxGeometry(9, 4.4, 7), spec.wall);
      body.position.set(spec.x, 2.7, spec.z);
      body.castShadow = true;
      kampung.add(body);

      [-2.2, 2.2].forEach((rx) => {
        const slope = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.3, 7.6), spec.roof);
        slope.rotation.z = rx > 0 ? -0.5 : 0.5;
        slope.position.set(spec.x + rx, 6.0, spec.z);
        slope.castShadow = true;
        kampung.add(slope);
      });

      const door = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.4, 0.2), roofMat);
      door.position.set(spec.x, 2.1, spec.z + 3.6);
      kampung.add(door);
    });
    group.add(kampung);

    // 3. Masjid kampung & rusunawa di sisi utara
    const mosque = new THREE.Mesh(new THREE.BoxGeometry(12, 5, 10), whiteMat);
    mosque.position.set(-58, 3, 24);
    mosque.castShadow = true;
    group.add(mosque);

    const dome = new THREE.Mesh(new THREE.SphereGeometry(3.2, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
    dome.position.set(-58, 5.6, 24);
    group.add(dome);

    const minaret = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.1, 13, 8), whiteMat);
    minaret.position.set(-51, 7, 29);
    minaret.castShadow = true;
    group.add(minaret);

    const rusun = new THREE.Mesh(new THREE.BoxGeometry(15, 28, 12), wallAltMat);
    rusun.position.set(48, 14.6, 26);
    rusun.castShadow = true;
    group.add(rusun);

    for (let floor = 2; floor <= 9; floor += 2) {
      const band = new THREE.Mesh(new THREE.BoxGeometry(15.2, 1.0, 12.3), windowMat);
      band.position.set(48, floor * 2.8, 26);
      group.add(band);
    }

    const rusunRoof = new THREE.Mesh(new THREE.BoxGeometry(16, 0.7, 13), roofAltMat);
    rusunRoof.position.set(48, 28.9, 26);
    group.add(rusunRoof);

    // 4. Lahan basah sisa & pohon
    const field = new THREE.Mesh(new THREE.BoxGeometry(34, 0.08, 18), lawnMat);
    field.position.set(-36, 0.56, 32);
    group.add(field);

    [[-64, 40], [-6, 40], [22, 40], [64, 40]].forEach(([tx, tz]) => {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.4, 5.4, 6), trunkMat);
      trunk.position.set(tx, 3.2, tz);
      group.add(trunk);
      const crown = new THREE.Mesh(new THREE.SphereGeometry(2.9, 8, 6), leafMat);
      crown.position.set(tx, 7.2, tz);
      crown.castShadow = true;
      group.add(crown);
    });

    return group;
  }
}



