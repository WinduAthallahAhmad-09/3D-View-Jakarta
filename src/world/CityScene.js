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
    this.buildGround();
    this.buildRoadNetwork();
    this.buildLandmarks();
    this.buildSurroundingSkyscrapers();
    this.buildStreetVegetation();
    this.buildTraffic();
  }

  /**
   * Ground plane of Jakarta
   */
  buildGround() {
    const groundGeo = new THREE.PlaneGeometry(1200, 1200);
    groundGeo.rotateX(-Math.PI / 2);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.9,
      metalness: 0.1
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.receiveShadow = true;
    ground.position.y = -0.1;
    this.proceduralGroup.add(ground);
  }

  /**
   * Sudirman-Thamrin Grand Avenue corridor
   */
  buildRoadNetwork() {
    const { roadWidth, corridorLength } = CITY_CORRIDOR_CONFIG;

    // Main Avenue (Thamrin - Sudirman)
    const roadGeo = new THREE.PlaneGeometry(roadWidth * 2, corridorLength);
    roadGeo.rotateX(-Math.PI / 2);
    const roadMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createRoadTexture(),
      roughness: 0.75,
      metalness: 0.15
    });
    const road = new THREE.Mesh(roadGeo, roadMat);
    road.position.set(0, 0.02, 30);
    road.receiveShadow = true;
    this.proceduralGroup.add(road);

    // Sidewalks on West and East sides
    const swWidth = CITY_CORRIDOR_CONFIG.sidewalkWidth;
    const swMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createSidewalkTexture(),
      roughness: 0.8
    });

    // West Sidewalk
    const westSwGeo = new THREE.PlaneGeometry(swWidth, corridorLength);
    westSwGeo.rotateX(-Math.PI / 2);
    const westSw = new THREE.Mesh(westSwGeo, swMat);
    westSw.position.set(-(roadWidth + swWidth / 2), 0.15, 30);
    westSw.receiveShadow = true;
    this.proceduralGroup.add(westSw);

    // East Sidewalk
    const eastSwGeo = new THREE.PlaneGeometry(swWidth, corridorLength);
    eastSwGeo.rotateX(-Math.PI / 2);
    const eastSw = new THREE.Mesh(eastSwGeo, swMat);
    eastSw.position.set(roadWidth + swWidth / 2, 0.15, 30);
    eastSw.receiveShadow = true;
    this.proceduralGroup.add(eastSw);

    // Street Lamps (PJU) along corridor
    for (let z = -220; z <= 260; z += 35) {
      if (Math.abs(z) < 25) continue; // Skip inside Bundaran HI
      this.createStreetLamp(-(roadWidth + 1), z, true);
      this.createStreetLamp(roadWidth + 1, z, false);
    }
  }

  createStreetLamp(x, z, facingEast) {
    const poleGroup = new THREE.Group();
    poleGroup.position.set(x, 0, z);

    const poleMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.7 });
    const poleGeo = new THREE.CylinderGeometry(0.2, 0.3, 9, 8);
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.y = 4.5;
    poleGroup.add(pole);

    const armGeo = new THREE.CylinderGeometry(0.1, 0.1, 3, 6);
    armGeo.rotateZ(facingEast ? -Math.PI / 3 : Math.PI / 3);
    const arm = new THREE.Mesh(armGeo, poleMat);
    arm.position.set(facingEast ? 1.2 : -1.2, 8.8, 0);
    poleGroup.add(arm);

    // Light bulb mesh
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    const bulbGeo = new THREE.SphereGeometry(0.3, 8, 8);
    const bulb = new THREE.Mesh(bulbGeo, bulbMat);
    bulb.position.set(facingEast ? 2.3 : -2.3, 8.2, 0);
    poleGroup.add(bulb);

    // Night spot light
    const lampLight = new THREE.PointLight(0xfffbeb, 0, 18, 1.5);
    lampLight.position.set(facingEast ? 2.3 : -2.3, 7.8, 0);
    lampLight.name = "street-lamp-light";
    poleGroup.add(lampLight);
    this.streetLights.push(lampLight);

    this.proceduralGroup.add(poleGroup);
  }

  /**
   * Builds the official landmarks and binds interactive metadata
   */
  buildLandmarks() {
    JAKARTA_LANDMARKS.forEach(item => {
      let model;
      if (item.id === "monas") {
        model = LandmarkModels.createMonas();
      } else if (item.id === "bundaran-hi") {
        model = LandmarkModels.createBundaranHI();
      } else if (item.id === "wisma-46") {
        model = LandmarkModels.createWisma46();
      } else if (item.id === "menara-bca") {
        model = LandmarkModels.createMenaraBCA();
      } else if (item.id === "gbk-senayan") {
        model = LandmarkModels.createGBK();
      } else if (item.id === "scbd-district") {
        model = this.createSCBDCluster();
      }

      if (model) {
        model.position.set(...item.position);
        model.userData = {
          landmarkData: item,
          isClickable: true
        };

        // Tag all child meshes with parent metadata for raycasting
        model.traverse(child => {
          if (child.isMesh) {
            child.userData = model.userData;
            this.interactiveObjects.push(child);
          }
        });

        this.proceduralGroup.add(model);
      }
    });
  }

  /**
   * Cluster of modern skyscrapers for SCBD District
   */
  createSCBDCluster() {
    const group = new THREE.Group();
    group.name = "landmark-scbd-district";

    const buildings = [
      { x: -20, z: -10, w: 26, d: 24, h: 160, style: 'dark-minimal' }, // Treasury Tower style
      { x: 18, z: -15, w: 22, d: 22, h: 130, style: 'modern-blue' },  // Pacific Place style
      { x: -15, z: 25, w: 20, d: 20, h: 145, style: 'bronze-glass' }, // District 8 Tower
      { x: 25, z: 20, w: 24, d: 22, h: 110, style: 'modern-blue' },  // IDX Indonesia Stock Exchange
      { x: 0, z: 45, w: 28, d: 24, h: 155, style: 'wisma-teal' }     // Sudirman 7.8
    ];

    buildings.forEach(b => {
      const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
        style: b.style,
        floors: Math.floor(b.h / 3.5),
        windowsAcross: 14
      });

      const mat = new THREE.MeshStandardMaterial({
        map: diffuseTexture,
        emissiveMap: emissiveTexture,
        emissive: 0x0284c7,
        emissiveIntensity: 0.25,
        roughness: 0.2,
        metalness: 0.8
      });
      this.nightMaterials.push(mat);

      const geo = new THREE.BoxGeometry(b.w, b.h, b.d);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(b.x, b.h / 2, b.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);

      // Rooftop structure
      const roofGeo = new THREE.BoxGeometry(b.w * 0.6, 6, b.d * 0.6);
      const roofMat = new THREE.MeshStandardMaterial({ color: 0x334155 });
      const roof = new THREE.Mesh(roofGeo, roofMat);
      roof.position.set(b.x, b.h + 3, b.z);
      group.add(roof);
    });

    return group;
  }

  /**
   * Sudirman-Thamrin surrounding skyscrapers to give Jakarta its dense skyline feeling
   */
  buildSurroundingSkyscrapers() {
    const count = 45;
    const styles = ['modern-blue', 'bronze-glass', 'dark-minimal'];

    for (let i = 0; i < count; i++) {
      const isWestSide = Math.random() > 0.5;
      const xOffset = isWestSide 
        ? -(35 + Math.random() * 85) 
        : (35 + Math.random() * 85);
      
      const z = -240 + Math.random() * 520;

      // Don't collide with existing landmark locations
      if (Math.abs(z) < 35 && Math.abs(xOffset) < 55) continue; // Bundaran HI area
      if (z < -130 && Math.abs(xOffset) < 50) continue; // Monas area
      if (z > 170 && Math.abs(xOffset) < 45) continue; // SCBD center

      const height = 45 + Math.random() * 110;
      const width = 16 + Math.random() * 18;
      const depth = 16 + Math.random() * 18;
      const style = styles[Math.floor(Math.random() * styles.length)];

      const { diffuseTexture, emissiveTexture } = TextureGenerator.createFacadeTexture({
        style,
        floors: Math.floor(height / 3.8),
        windowsAcross: 10
      });

      const mat = new THREE.MeshStandardMaterial({
        map: diffuseTexture,
        emissiveMap: emissiveTexture,
        emissive: style === 'bronze-glass' ? 0xd97706 : 0x0284c7,
        emissiveIntensity: 0.2,
        roughness: 0.25,
        metalness: 0.75
      });
      this.nightMaterials.push(mat);

      const geo = new THREE.BoxGeometry(width, height, depth);
      const bldg = new THREE.Mesh(geo, mat);
      bldg.position.set(xOffset, height / 2, z);
      bldg.castShadow = true;
      bldg.receiveShadow = true;

      // Clickable as generic Jakarta Skyscraper
      bldg.userData = {
        landmarkData: {
          id: `sky-${i}`,
          name: `Menara Perkantoran Sudirman #${i + 1}`,
          category: "Pencakar Langit Komersial",
          tagline: "Gedung Perkantoran Koridor Bisnis Jakarta",
          height: `${Math.round(height * 2.2)} meter (${Math.floor(height / 3.5)} lantai)`,
          year: `${1998 + (i % 25)}`,
          architect: "Konsorsium Arsitektur Internasional",
          location: isWestSide ? "Sisi Barat Koridor Sudirman-Thamrin" : "Sisi Timur Koridor Sudirman-Thamrin",
          description: "Gedung perkantoran modern bertingkat tinggi dengan efisiensi energi kaca ganda, menunjang denyut perekonomian dan jasa keuangan ibu kota.",
          facts: [
            "Fasad berteknologi peredam panas matahari tropis.",
            "Dilengkapi fasilitas lobi modern dan sistem keamanan pintar."
          ]
        },
        isClickable: true
      };
      this.interactiveObjects.push(bldg);
      this.proceduralGroup.add(bldg);

      // Rooftop HVAC unit
      const hvacGeo = new THREE.BoxGeometry(width * 0.4, 3, depth * 0.4);
      const hvac = new THREE.Mesh(hvacGeo, new THREE.MeshStandardMaterial({ color: 0x475569 }));
      hvac.position.set(xOffset, height + 1.5, z);
      this.proceduralGroup.add(hvac);
    }
  }

  /**
   * Tropical trees along the sidewalks
   */
  buildStreetVegetation() {
    const treeMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.7 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });

    for (let z = -230; z <= 250; z += 18) {
      if (Math.abs(z) < 26) continue;
      this.createTree(-23, z, treeMat, trunkMat);
      this.createTree(23, z, treeMat, trunkMat);
    }
  }

  createTree(x, z, foliageMat, trunkMat) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const trunkGeo = new THREE.CylinderGeometry(0.3, 0.4, 4, 6);
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 2;
    group.add(trunk);

    const foliageGeo = new THREE.ConeGeometry(2.5, 6, 8);
    const foliage = new THREE.Mesh(foliageGeo, foliageMat);
    foliage.position.y = 6;
    foliage.castShadow = true;
    group.add(foliage);

    this.proceduralGroup.add(group);
  }

  /**
   * Animated vehicle traffic: TransJakarta articulated buses & cars
   */
  buildTraffic() {
    const colors = [0x0284c7, 0xf8fafc, 0x0f172a, 0x94a3b8, 0xef4444, 0xf59e0b];

    for (let i = 0; i < CITY_CORRIDOR_CONFIG.trafficDensity; i++) {
      const isBus = i % 5 === 0;
      const isNorthbound = i % 2 === 0;
      
      const vehicle = new THREE.Group();

      let bodyGeo, bodyMat;
      if (isBus) {
        // TransJakarta Articulated Bus (Biru Khas TransJakarta)
        bodyGeo = new THREE.BoxGeometry(2.6, 2.6, 9.5);
        bodyMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.5, roughness: 0.3 });
      } else {
        // Private car / Taxi
        bodyGeo = new THREE.BoxGeometry(2.0, 1.4, 4.2);
        bodyMat = new THREE.MeshStandardMaterial({
          color: colors[i % colors.length],
          metalness: 0.7,
          roughness: 0.25
        });
      }

      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = isBus ? 1.4 : 0.8;
      body.castShadow = true;
      vehicle.add(body);

      // Headlights (depan)
      const headLightMat = new THREE.MeshBasicMaterial({ color: 0xffedd5 });
      const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, 0.1), headLightMat);
      hlLeft.position.set(-0.7, isBus ? 1.0 : 0.7, isBus ? 4.8 : 2.15);
      vehicle.add(hlLeft);

      const hlRight = hlLeft.clone();
      hlRight.position.x = 0.7;
      vehicle.add(hlRight);

      // Taillights (belakang - merah)
      const tailLightMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
      const tlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, 0.1), tailLightMat);
      tlLeft.position.set(-0.7, isBus ? 1.0 : 0.7, -(isBus ? 4.8 : 2.15));
      vehicle.add(tlLeft);

      const tlRight = tlLeft.clone();
      tlRight.position.x = 0.7;
      vehicle.add(tlRight);

      // Lane positioning
      let laneX;
      if (isBus) {
        // Dedicated TransJakarta lane
        laneX = isNorthbound ? 7.5 : -7.5;
      } else {
        // Regular lanes
        const laneOffset = 11 + (i % 3) * 3.5;
        laneX = isNorthbound ? laneOffset : -laneOffset;
      }

      const initialZ = -260 + (i * 15);
      vehicle.position.set(laneX, 0, initialZ);

      if (isNorthbound) {
        vehicle.rotation.y = Math.PI;
      }

      this.proceduralGroup.add(vehicle);

      this.vehicles.push({
        mesh: vehicle,
        speed: (isBus ? 0.35 : 0.5) + Math.random() * 0.15,
        isNorthbound,
        laneX
      });
    }
  }

  /**
   * Per-frame traffic animation loop
   */
  updateTraffic(delta) {
    const minZ = -280;
    const maxZ = 280;

    this.vehicles.forEach(v => {
      const step = v.speed * delta * 50;
      if (v.isNorthbound) {
        v.mesh.position.z -= step;
        if (v.mesh.position.z < minZ) {
          v.mesh.position.z = maxZ;
        }
      } else {
        v.mesh.position.z += step;
        if (v.mesh.position.z > maxZ) {
          v.mesh.position.z = minZ;
        }
      }
    });
  }

  /**
   * Updates emissive light intensity when shifting from Day to Night
   */
  setNightMode(isNight, nightFactor = 1.0) {
    // Street lights toggle
    this.streetLights.forEach(light => {
      light.intensity = isNight ? 1.8 * nightFactor : 0;
    });

    // Monas spotlights toggle
    const monasSpots = this.scene.getObjectsByProperty("name", "monas-spotlight");
    monasSpots.forEach(s => {
      s.intensity = isNight ? 3.5 * nightFactor : 0;
    });

    // Emissive skyscraper windows intensity boost
    this.nightMaterials.forEach(m => {
      m.emissiveIntensity = isNight ? 0.85 * nightFactor : 0.15;
    });
  }
}
