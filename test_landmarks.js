import assert from 'node:assert';
import fs from 'node:fs';
import { JAKARTA_LANDMARKS, projectGpsToScene } from './src/config/landmarks.js';
import { VOID_B_OSM } from './src/data/void_b_osm.js';
import { VOID_C_OSM } from './src/data/void_c_osm.js';
import { VOID_D_OSM } from './src/data/void_d_osm.js';
import { VOID_E_OSM } from './src/data/void_e_osm.js';
import { VOID_F_OSM } from './src/data/void_f_osm.js';
import { VOID_G_OSM } from './src/data/void_g_osm.js';
import { VOID_H_OSM } from './src/data/void_h_osm.js';
import { VOID_I_OSM } from './src/data/void_i_osm.js';
import { VOID_J_OSM } from './src/data/void_j_osm.js';

let assertionCount = 0;
['ok', 'equal', 'strictEqual', 'deepStrictEqual', 'notDeepStrictEqual', 'throws'].forEach((method) => {
  const original = assert[method];
  assert[method] = (...args) => {
    assertionCount++;
    return original.apply(assert, args);
  };
});

console.log('Running test_landmarks.js verification...');

// Check 1: Exactly 143 landmarks
assert.strictEqual(JAKARTA_LANDMARKS.length, 143, `Expected 143 landmarks, got ${JAKARTA_LANDMARKS.length}`);

// Check 2: Unique IDs and valid properties
const seenIds = new Set();
JAKARTA_LANDMARKS.forEach((l, index) => {
  assert.ok(l.id, `Landmark at index ${index} missing id`);
  assert.ok(!seenIds.has(l.id), `Duplicate landmark id found: ${l.id}`);
  seenIds.add(l.id);

  assert.ok(l.name, `Landmark ${l.id} missing name`);
  assert.ok(Array.isArray(l.position) && l.position.length === 3, `Landmark ${l.id} invalid position`);
  assert.ok(l.coordinates && typeof l.coordinates.lat === 'number' && typeof l.coordinates.lng === 'number', `Landmark ${l.id} invalid GPS coordinates`);
  assert.ok(Array.isArray(l.cameraPosition) && l.cameraPosition.length === 3, `Landmark ${l.id} invalid cameraPosition`);
  assert.ok(Array.isArray(l.cameraTarget) && l.cameraTarget.length === 3, `Landmark ${l.id} invalid cameraTarget`);
});

// Check 3: Check South Jakarta anchors specifically
const southAnchors = [
  'sekretariat-asean',
  'csw-asean-hub',
  'kejaksaan-agung',
  'm-bloc-space',
  'stasiun-mrt-blok-m',
  'distrik-melawai'
];

southAnchors.forEach((id) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Missing South Jakarta anchor landmark: ${id}`);
  assert.ok(lm.position[2] > 550, `Landmark ${id} Z position ${lm.position[2]} should be in Kebayoran Baru (Z > 550)`);
});

// Check 3b: Check Central Jakarta East / Kemayoran anchors specifically
const jakpusEastAnchors = [
  'jiexpo-kemayoran',
  'menara-atc-kemayoran',
  'stasiun-pasar-senen',
  'pasar-senen-jaya',
  'taman-ismail-marzuki',
  'passer-baroe'
];

jakpusEastAnchors.forEach((id) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Missing Central Jakarta East anchor landmark: ${id}`);
  assert.ok(lm.position[0] > 100, `Landmark ${id} X position ${lm.position[0]} should be east of Monas/Thamrin (X > 100)`);
});

// South Jakarta Tahap 1 anchors (#46 s.d. #51)
const southTahap1Anchors = [
  'patung-dirgantara-pancoran',
  'menara-saidah',
  'south-quarter-simatupang',
  'pondok-indah-mall',
  'stasiun-mrt-fatmawati',
  'kemang-village-lifestyle'
];

// North Jakarta Tahap 1 anchors (#52 s.d. #57)
const jakutTahap1Anchors = [
  'jis-stadium',
  'ancol-dufan',
  'sunda-kelapa',
  'jembatan-kota-intan',
  'mall-kelapa-gading',
  'tanjung-priok'
];

// West Jakarta Tahap 1 anchors (#58 s.d. #63)
const jakbarTahap1Anchors = [
  'walikota-jakarta-barat',
  'lippo-mall-puri',
  'puri-indah-mall',
  'glodok-chinatown',
  'mnc-studios-kebon-jeruk',
  'museum-macan'
];

// East Jakarta Tahap 1 anchors (#64 s.d. #69)
const jaktimTahap1Anchors = [
  'stasiun-jatinegara',
  'bandara-halim-perdanakusuma',
  'taman-mini-indonesia-indah',
  'jakarta-international-velodrome',
  'simpang-susun-cawang',
  'monumen-pancasila-sakti'
];

// Check 4: Check that CityScene.js maps builders for all landmarks
const citySceneContent = fs.readFileSync('./src/world/CityScene.js', 'utf-8');
JAKARTA_LANDMARKS.forEach((lm) => {
  assert.ok(
    citySceneContent.includes(`"${lm.id}":`),
    `CityScene.js missing builder mapping for landmark "${lm.id}"`
  );
});

// Check 5: Every landmark has exactly one tour button, plus the aerial view
const indexHtmlContent = fs.readFileSync('./index.html', 'utf-8');
const tourIds = [...indexHtmlContent.matchAll(/data-tour-id="([^"]+)"/g)].map((m) => m[1]);
JAKARTA_LANDMARKS.forEach((lm) => {
  assert.ok(
    tourIds.includes(lm.id),
    `index.html missing tour button for "${lm.id}"`
  );
});
assert.ok(tourIds.includes('aerial'), 'index.html missing aerial tour button');
assert.strictEqual(
  tourIds.length,
  JAKARTA_LANDMARKS.length + 1,
  `Expected ${JAKARTA_LANDMARKS.length + 1} tour buttons, got ${tourIds.length}`
);

// Check 5b: Scene positions stay within the documented artistic adjustment tolerance
const MAX_GPS_DEVIATION = 450;
JAKARTA_LANDMARKS.forEach((lm) => {
  const [projectedX, projectedZ] = projectGpsToScene(lm.coordinates.lat, lm.coordinates.lng);
  const deviation = Math.hypot(lm.position[0] - projectedX, lm.position[2] - projectedZ);
  assert.ok(
    deviation <= MAX_GPS_DEVIATION,
    `Landmark "${lm.id}" deviates ${deviation.toFixed(1)} units from GPS projection (max ${MAX_GPS_DEVIATION})`
  );
});

// Check 6: Tahap 4 Dynamic Mobility & MRT Ratangga Train Animation
const landmarkModelsContent = fs.readFileSync('./src/world/LandmarkModels.js', 'utf-8');
assert.ok(
  landmarkModelsContent.includes('createSingleMRTRatanggaCar'),
  'LandmarkModels.js missing createSingleMRTRatanggaCar'
);
assert.ok(
  landmarkModelsContent.includes('createMRTRatanggaTrain'),
  'LandmarkModels.js missing createMRTRatanggaTrain'
);
assert.ok(
  citySceneContent.includes('mrtCurve = new THREE.CatmullRomCurve3'),
  'CityScene.js missing mrtCurve definition'
);
assert.ok(
  citySceneContent.includes("'mrt-southbound'"),
  'CityScene.js missing mrt-southbound train config'
);
assert.ok(
  citySceneContent.includes("'mrt-northbound'"),
  'CityScene.js missing mrt-northbound train config'
);
assert.ok(
  citySceneContent.includes('Koridor 13 TransJakarta Elevated Flyover'),
  'CityScene.js missing Koridor 13 TransJakarta route'
);

const uiManagerContent = fs.readFileSync('./src/ui/UIManager.js', 'utf-8');
assert.ok(
  uiManagerContent.includes('cameraPosition: [-180, 520, 920]'),
  'UIManager.js missing expanded aerial cameraPosition'
);

// Check 7: Poin 8 Selective Bloom Effect (Malam)
const mainJsContent = fs.readFileSync('./src/main.js', 'utf-8');
assert.ok(mainJsContent.includes('UnrealBloomPass'), 'src/main.js missing UnrealBloomPass import');
assert.ok(mainJsContent.includes('EffectComposer'), 'src/main.js missing EffectComposer import');
assert.ok(mainJsContent.includes('OutputPass'), 'src/main.js missing OutputPass import');
assert.ok(mainJsContent.includes('initPostprocessing()'), 'src/main.js missing initPostprocessing()');
assert.ok(mainJsContent.includes('setTimePresetBloom'), 'src/main.js missing setTimePresetBloom');

assert.ok(citySceneContent.includes("'pju-bulb'"), 'CityScene.js missing pju-bulb');
assert.ok(citySceneContent.includes('glowMaterials'), 'CityScene.js missing glowMaterials');
assert.ok(citySceneContent.includes('collectGlowMaterials'), 'CityScene.js missing collectGlowMaterials');

assert.ok(landmarkModelsContent.includes("'monas-flame'"), 'LandmarkModels.js missing monas-flame');
assert.ok(landmarkModelsContent.includes("'menara-bca-crown'"), 'LandmarkModels.js missing menara-bca-crown');
assert.ok(landmarkModelsContent.includes("'led-taman-anggrek'"), 'LandmarkModels.js missing led-taman-anggrek');

// Check 8: Tahap 2 Jaringan Jalan Arteri & Jalur Rel Kereta Api Jakarta Pusat Bagian Timur
assert.ok(
  citySceneContent.includes('this.buildCentralJakartaEastCorridor()'),
  'CityScene.js missing buildCentralJakartaEastCorridor call in init'
);
assert.ok(
  citySceneContent.includes('buildCentralJakartaEastCorridor()'),
  'CityScene.js missing buildCentralJakartaEastCorridor method'
);
assert.ok(
  citySceneContent.includes('Benyamin Sueb Dual Carriageway'),
  'CityScene.js missing Benyamin Sueb Dual Carriageway'
);
assert.ok(
  citySceneContent.includes('Double Track Railway Senen'),
  'CityScene.js missing Double Track Railway Senen'
);
assert.ok(
  citySceneContent.includes('Simpang Lima Senen Interchange'),
  'CityScene.js missing Simpang Lima Senen Interchange'
);
assert.ok(
  citySceneContent.includes('Flyover Simpang Lima Senen'),
  'CityScene.js missing Flyover Simpang Lima Senen'
);
assert.ok(
  citySceneContent.includes('Kali Ciliwung Kwitang'),
  'CityScene.js missing Kali Ciliwung Kwitang'
);
assert.ok(
  citySceneContent.includes('this.addRoundaboutRing(267.2, -517.0'),
  'CityScene.js missing Bundaran Ondel-Ondel roundabout ring'
);

// Check 9: Tahap 3 Infill Urban Fabric, Distrik Komersial & Permukiman Jakarta Pusat Timur
assert.ok(
  citySceneContent.includes('this.buildCentralJakartaEastInfillAndDistricts()'),
  'CityScene.js missing buildCentralJakartaEastInfillAndDistricts call in init'
);
assert.ok(
  citySceneContent.includes('buildCentralJakartaEastInfillAndDistricts()'),
  'CityScene.js missing buildCentralJakartaEastInfillAndDistricts method'
);
assert.ok(
  citySceneContent.includes('Wisma Atlet Kemayoran'),
  'CityScene.js missing Wisma Atlet Kemayoran'
);
assert.ok(
  citySceneContent.includes('RSPAD Gatot Soebroto'),
  'CityScene.js missing RSPAD Gatot Soebroto'
);
assert.ok(
  citySceneContent.includes('Metropole XXI'),
  'CityScene.js missing Metropole XXI'
);
assert.ok(
  citySceneContent.includes('Gedung Kesenian Jakarta (GKJ 1821)'),
  'CityScene.js missing Gedung Kesenian Jakarta'
);
assert.ok(
  citySceneContent.includes('Kompleks FKUI & RSCM Salemba'),
  'CityScene.js missing Kompleks FKUI & RSCM Salemba'
);

// Check 10: Tahap 4 Integrasi Transit & Mobilitas Kereta Api Antarkota Stasiun Pasar Senen
assert.ok(
  landmarkModelsContent.includes('createSingleKAIAntarkotaCar'),
  'LandmarkModels.js missing createSingleKAIAntarkotaCar'
);
assert.ok(
  landmarkModelsContent.includes('createKAIAntarkotaTrain'),
  'LandmarkModels.js missing createKAIAntarkotaTrain'
);
assert.ok(
  citySceneContent.includes('this.senenRailCurve = new THREE.CatmullRomCurve3'),
  'CityScene.js missing senenRailCurve'
);
assert.ok(
  citySceneContent.includes("'kai-antarkota-northbound'"),
  'CityScene.js missing kai-antarkota-northbound'
);
assert.ok(
  citySceneContent.includes("'kai-antarkota-southbound'"),
  'CityScene.js missing kai-antarkota-southbound'
);
assert.ok(
  citySceneContent.includes('LandmarkModels.createSingleKAIAntarkotaCar(c, 4)'),
  'CityScene.js missing call to LandmarkModels.createSingleKAIAntarkotaCar'
);
assert.ok(
  citySceneContent.includes('TransJakarta Koridor 2 & 5 (Simpang Lima Senen Hub)'),
  'CityScene.js missing TransJakarta Koridor 2 & 5 route'
);

// Check 11: Tahap 1 Anchor Landmarks Jakarta Selatan (#46 s.d. #51)
southTahap1Anchors.forEach((id) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Missing South Jakarta Tahap 1 anchor landmark: ${id}`);
  assert.ok(lm.name, `Missing name for ${id}`);
  assert.ok(lm.position && lm.position.length === 3, `Invalid position for ${id}`);
  assert.ok(citySceneContent.includes(`"${id}": () =>`), `CityScene.js missing builder mapping for ${id}`);
});

assert.ok(landmarkModelsContent.includes('createPatungDirgantaraPancoran'), 'LandmarkModels.js missing createPatungDirgantaraPancoran');
assert.ok(landmarkModelsContent.includes('createMenaraSaidah'), 'LandmarkModels.js missing createMenaraSaidah');
assert.ok(landmarkModelsContent.includes('createSouthQuarterTowers'), 'LandmarkModels.js missing createSouthQuarterTowers');
assert.ok(landmarkModelsContent.includes('createPondokIndahMall'), 'LandmarkModels.js missing createPondokIndahMall');
assert.ok(landmarkModelsContent.includes('createStasiunMRTFatmawati'), 'LandmarkModels.js missing createStasiunMRTFatmawati');
assert.ok(landmarkModelsContent.includes('createKemangVillage'), 'LandmarkModels.js missing createKemangVillage');

// Check 12: Tahap 2 Infrastruktur Jalan Tol JORR, Simpang Susun & Viaduk Transit Jakarta Selatan
assert.ok(
  citySceneContent.includes('Jalan Tol Lingkar Luar Jakarta (Tol JORR TB Simatupang)'),
  'CityScene.js missing Tol JORR TB Simatupang'
);
assert.ok(
  citySceneContent.includes('Simpang Susun Pancoran & Koridor MT Haryono'),
  'CityScene.js missing Simpang Susun Pancoran corridor'
);
assert.ok(
  citySceneContent.includes('Perpanjangan Viaduk Layang MRT Fase 1 (Fatmawati - Lebak Bulus)'),
  'CityScene.js missing MRT southern viaduct extension'
);
assert.ok(
  citySceneContent.includes('Viaduk Layang Jalur LRT Jabodebek (MT Haryono - Pancoran - Kuningan)'),
  'CityScene.js missing LRT Jabodebek viaduct'
);
assert.ok(
  citySceneContent.includes('Underpass Mampang-Kuningan'),
  'CityScene.js missing Underpass Mampang-Kuningan'
);
assert.ok(
  citySceneContent.includes('Flyover Non-Tol Pangeran Antasari'),
  'CityScene.js missing Flyover Non-Tol Pangeran Antasari'
);
assert.ok(
  citySceneContent.includes('Boulevard Jl. Metro Pondok Indah & Bundaran PIM'),
  'CityScene.js missing Boulevard Jl. Metro Pondok Indah'
);
assert.ok(
  citySceneContent.includes('this.addRoundaboutRing(-515.0, 915.0'),
  'CityScene.js missing Bundaran Pondok Indah roundabout ring'
);

// Check 13: Tahap 3 Infill Urban Fabric, Distrik Residensial Elite & Sentra Hijau Jakarta Selatan
assert.ok(
  citySceneContent.includes('DISTRIK RESIDENSIAL ELITE PONDOK INDAH'),
  'CityScene.js missing Pondok Indah residential villas'
);
assert.ok(
  citySceneContent.includes('KAWASAN KOMERSIAL & PERKANTORAN CBD TB SIMATUPANG'),
  'CityScene.js missing TB Simatupang CBD'
);
assert.ok(
  citySceneContent.includes('Talavera Office Park'),
  'CityScene.js missing Talavera Office Park'
);
assert.ok(
  citySceneContent.includes('Cilandak Town Square (Citos)'),
  'CityScene.js missing Cilandak Town Square (Citos)'
);
assert.ok(
  citySceneContent.includes('Arkadia Green Park & Talavera Office Park'),
  'CityScene.js missing Arkadia Green Park'
);
assert.ok(
  citySceneContent.includes('KAWASAN RESIDENSIAL & KREATIF KEMANG'),
  'CityScene.js missing Kemang boutique & residential district'
);
assert.ok(
  citySceneContent.includes('KOMPLEKS PUSAT MEDIS RSUP FATMAWATI'),
  'CityScene.js missing RSUP Fatmawati'
);
assert.ok(
  citySceneContent.includes('HUTAN KOTA TAMAN MARGASATWA RAGUNAN'),
  'CityScene.js missing Taman Margasatwa Ragunan forest & lake'
);
assert.ok(
  citySceneContent.includes('SMESCO INDONESIA (SME TOWER) & KOMPLEKS BIDAKARA'),
  'CityScene.js missing Smesco SME Tower & Menara Bidakara'
);

// Check 14: Tahap 4 Integrasi Transit Dinamis & Mobilitas Terpadu Jakarta Selatan
assert.ok(
  landmarkModelsContent.includes('createSingleLRTJabodebekCar'),
  'LandmarkModels.js missing createSingleLRTJabodebekCar'
);
assert.ok(
  landmarkModelsContent.includes('createLRTJabodebekTrain'),
  'LandmarkModels.js missing createLRTJabodebekTrain'
);
assert.ok(
  citySceneContent.includes('this.lrtCurve = new THREE.CatmullRomCurve3'),
  'CityScene.js missing lrtCurve'
);
assert.ok(
  citySceneContent.includes("'lrt-eastbound'"),
  'CityScene.js missing lrt-eastbound'
);
assert.ok(
  citySceneContent.includes("'lrt-westbound'"),
  'CityScene.js missing lrt-westbound'
);
assert.ok(
  citySceneContent.includes('LandmarkModels.createSingleLRTJabodebekCar(c, 4)'),
  'CityScene.js missing call to LandmarkModels.createSingleLRTJabodebekCar'
);
assert.ok(
  citySceneContent.includes('-465.0, 12.0, 1075.0'),
  'CityScene.js missing MRT extension to Dipo Lebak Bulus'
);
assert.ok(
  citySceneContent.includes('TransJakarta Koridor 6 (Ragunan - Mampang - Rasuna Said Hub)'),
  'CityScene.js missing TransJakarta Koridor 6'
);
assert.ok(
  citySceneContent.includes('TransJakarta Koridor 9 (Pinang Ranti - Pancoran - Semanggi)'),
  'CityScene.js missing TransJakarta Koridor 9'
);
assert.ok(
  citySceneContent.includes('Jalan Tol JORR TB Simatupang - Jalur Cepat Timur & Barat'),
  'CityScene.js missing Tol JORR traffic route'
);
assert.ok(
  citySceneContent.includes('cx: 248, cz: 492, radius: 21.0'),
  'CityScene.js missing Simpang Pancoran roundabout traffic'
);
assert.ok(
  citySceneContent.includes('cx: -515, cz: 915, radius: 19.5'),
  'CityScene.js missing Bundaran PIM roundabout traffic'
);

// Check 15: Quick Wins Performance Optimization verification
const mainContent = fs.readFileSync('./src/main.js', 'utf-8');
const lightingContent = fs.readFileSync('./src/world/Lighting.js', 'utf-8');

assert.ok(mainContent.includes('const maxDPR = window.innerWidth > 1920 ? 1.25 : 1.5;'), 'main.js missing capped maxDPR');
assert.ok(mainContent.includes('if (document.hidden) return;'), 'main.js missing tab visibility throttling');
assert.ok(mainContent.includes('if (this.ui && this.ui.isHomeActive)'), 'main.js missing homescreen idle pause');
assert.ok(lightingContent.includes('this.sunLight.shadow.mapSize.width = 1024;'), 'Lighting.js missing 1024 shadow map width');
assert.ok(lightingContent.includes('this.sunLight.shadow.mapSize.height = 1024;'), 'Lighting.js missing 1024 shadow map height');
assert.ok(uiManagerContent.includes('// Dirty checking: Skip expensive DOM reflow when camera is stationary'), 'UIManager.js missing label dirty checking');

// Check 16: Tahap 2 Geometry Merging & Instancing Optimization verification
assert.ok(citySceneContent.includes('BufferGeometryUtils'), 'CityScene.js missing BufferGeometryUtils import');
assert.ok(citySceneContent.includes('buildMergedBuildingWallsGeometry(buildings)'), 'CityScene.js missing buildMergedBuildingWallsGeometry');
assert.ok(citySceneContent.includes('BufferGeometryUtils.mergeGeometries(parkGeos, false)'), 'CityScene.js missing merged OSM parks');
assert.ok(citySceneContent.includes('BufferGeometryUtils.mergeGeometries(waterGeos, false)'), 'CityScene.js missing merged OSM water bodies');
assert.ok(citySceneContent.includes('BufferGeometryUtils.mergeGeometries(roofGeos, false)'), 'CityScene.js missing merged OSM roofs');
assert.ok(citySceneContent.includes('new THREE.InstancedMesh(trunkGeo, trunkMat, treeTransforms.length)'), 'CityScene.js missing trunk InstancedMesh');
assert.ok(citySceneContent.includes('new THREE.InstancedMesh(foliageGeo, foliageMat, treeTransforms.length)'), 'CityScene.js missing foliage InstancedMesh');

// Check 17: Tahap 1 Anchor Landmarks Jakarta Utara (#52 s.d. #57)
jakutTahap1Anchors.forEach((id) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Missing North Jakarta Tahap 1 anchor landmark: ${id}`);
  assert.ok(lm.name, `Missing name for ${id}`);
  assert.ok(lm.position && lm.position.length === 3, `Invalid position for ${id}`);
  assert.ok(lm.position[2] < -500, `Landmark ${id} Z position ${lm.position[2]} should be in Jakarta Utara (Z < -500)`);
  assert.ok(citySceneContent.includes(`"${id}": () =>`), `CityScene.js missing builder mapping for ${id}`);
});

assert.ok(landmarkModelsContent.includes('createJISStadium'), 'LandmarkModels.js missing createJISStadium');
assert.ok(landmarkModelsContent.includes('createAncolDufan'), 'LandmarkModels.js missing createAncolDufan');
assert.ok(landmarkModelsContent.includes('createSundaKelapaPort'), 'LandmarkModels.js missing createSundaKelapaPort');
assert.ok(landmarkModelsContent.includes('createKotaIntanBridge'), 'LandmarkModels.js missing createKotaIntanBridge');
assert.ok(landmarkModelsContent.includes('createMallKelapaGading'), 'LandmarkModels.js missing createMallKelapaGading');
assert.ok(landmarkModelsContent.includes('createTanjungPriokPort'), 'LandmarkModels.js missing createTanjungPriokPort');

// Check 18: Tahap 2 Infrastruktur Jalan Tol Layang Pelabuhan, Pesisir Teluk Jakarta, Danau Sunter & Waduk Pluit
assert.ok(
  citySceneContent.includes('this.buildNorthJakartaInfrastructure()'),
  'CityScene.js missing buildNorthJakartaInfrastructure call in init'
);
assert.ok(
  citySceneContent.includes('buildNorthJakartaInfrastructure()'),
  'CityScene.js missing buildNorthJakartaInfrastructure method'
);
assert.ok(
  citySceneContent.includes('Laut Jawa & Perairan Teluk Jakarta'),
  'CityScene.js missing Laut Jawa & Perairan Teluk Jakarta'
);
assert.ok(
  citySceneContent.includes('Taman Waduk Pluit'),
  'CityScene.js missing Taman Waduk Pluit'
);
assert.ok(
  citySceneContent.includes('Danau Sunter Barat'),
  'CityScene.js missing Danau Sunter Barat'
);
assert.ok(
  citySceneContent.includes('Danau Sunter Selatan / Timur'),
  'CityScene.js missing Danau Sunter Selatan / Timur'
);
assert.ok(
  citySceneContent.includes('JALAN TOL LAYANG PELABUHAN'),
  'CityScene.js missing JALAN TOL LAYANG PELABUHAN'
);
assert.ok(
  citySceneContent.includes('Jl. RE Martadinata & Jl. Lodan Raya'),
  'CityScene.js missing Jl. RE Martadinata & Jl. Lodan Raya'
);
assert.ok(
  citySceneContent.includes('Perpanjangan Boulevard Benyamin Sueb'),
  'CityScene.js missing Perpanjangan Boulevard Benyamin Sueb'
);
assert.ok(
  citySceneContent.includes('Jl. Boulevard Raya Kelapa Gading'),
  'CityScene.js missing Jl. Boulevard Raya Kelapa Gading'
);

// Check 19: Tahap 3 Infill Urban Fabric, Distrik Logistik Tanjung Priok & Hutan Mangrove Pesisir
assert.ok(
  citySceneContent.includes('this.buildNorthJakartaInfillAndLogistics()'),
  'CityScene.js missing buildNorthJakartaInfillAndLogistics call in init'
);
assert.ok(
  citySceneContent.includes('buildNorthJakartaInfillAndLogistics()'),
  'CityScene.js missing buildNorthJakartaInfillAndLogistics method'
);
assert.ok(
  citySceneContent.includes('TERMINAL PETI KEMAS KONTAINER PELABUHAN TANJUNG PRIOK'),
  'CityScene.js missing TERMINAL PETI KEMAS KONTAINER PELABUHAN TANJUNG PRIOK'
);
assert.ok(
  citySceneContent.includes('INFILL RUKO KOMERSIAL & RESIDENSIAL MODERN KELAPA GADING & SUNTER'),
  'CityScene.js missing INFILL RUKO KOMERSIAL & RESIDENSIAL MODERN KELAPA GADING & SUNTER'
);
assert.ok(
  citySceneContent.includes('KOMPLEKS PERGUDANGAN LOGISTIK PELABUHAN PRIOK'),
  'CityScene.js missing KOMPLEKS PERGUDANGAN LOGISTIK PELABUHAN PRIOK'
);
assert.ok(
  citySceneContent.includes('VEGETASI HUTAN MANGROVE & CEMARA UDANG PESISIR TELUK JAKARTA'),
  'CityScene.js missing VEGETASI HUTAN MANGROVE & CEMARA UDANG PESISIR TELUK JAKARTA'
);

// Check 20: Tahap 4 Transit Dinamis & Sirkulasi Multimoda Jakarta Utara
assert.ok(
  landmarkModelsContent.includes('createSingleLRTJakartaCar'),
  'LandmarkModels.js missing createSingleLRTJakartaCar'
);
assert.ok(
  landmarkModelsContent.includes('createLRTJakartaTrain'),
  'LandmarkModels.js missing createLRTJakartaTrain'
);
assert.ok(
  citySceneContent.includes('this.lrtJakartaCurve = new THREE.CatmullRomCurve3'),
  'CityScene.js missing lrtJakartaCurve'
);
assert.ok(
  citySceneContent.includes('this.priokRailCurve = new THREE.CatmullRomCurve3'),
  'CityScene.js missing priokRailCurve'
);
assert.ok(
  citySceneContent.includes("'lrt-jkt-northbound'"),
  'CityScene.js missing lrt-jkt-northbound'
);
assert.ok(
  citySceneContent.includes("'lrt-jkt-southbound'"),
  'CityScene.js missing lrt-jkt-southbound'
);
assert.ok(
  citySceneContent.includes("'krl-priok-eastbound'"),
  'CityScene.js missing krl-priok-eastbound'
);
assert.ok(
  citySceneContent.includes("'krl-priok-westbound'"),
  'CityScene.js missing krl-priok-westbound'
);
assert.ok(
  citySceneContent.includes('LandmarkModels.createSingleLRTJakartaCar(c, 2)'),
  'CityScene.js missing call to LandmarkModels.createSingleLRTJakartaCar'
);
assert.ok(
  citySceneContent.includes('TransJakarta Koridor 5 (Ancol Hub <-> Benyamin Sueb / Kemayoran)'),
  'CityScene.js missing TransJakarta Koridor 5 route'
);
assert.ok(
  citySceneContent.includes('TransJakarta Koridor 12 (Pluit <-> Ancol <-> Tanjung Priok)'),
  'CityScene.js missing TransJakarta Koridor 12 route'
);
assert.ok(
  citySceneContent.includes('Tol Pelabuhan Viaduct - Armada Truk Trailer Kontainer'),
  'CityScene.js missing Tol Pelabuhan container truck route'
);
assert.ok(
  citySceneContent.includes('Jl. RE Martadinata - Armada Truk Logistik Pelabuhan'),
  'CityScene.js missing RE Martadinata port logistics truck route'
);

// Check 21: Tahap 1 Jakarta Barat Anchor Landmarks (#58 s.d. #63)
jakbarTahap1Anchors.forEach((id) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Missing West Jakarta Tahap 1 anchor landmark: ${id}`);
  assert.ok(lm.position[0] < -100, `Landmark ${id} X position ${lm.position[0]} should be west of Thamrin/Bundaran HI (X < -100)`);
});

// Specific checks for Kembangan & Kebon Jeruk western coordinates
['walikota-jakarta-barat', 'lippo-mall-puri', 'puri-indah-mall'].forEach((id) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm.position[0] < -900, `Landmark ${id} X position ${lm.position[0]} should be in Sentra Primer Barat / Kembangan (X < -900)`);
});

['mnc-studios-kebon-jeruk', 'museum-macan'].forEach((id) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm.position[0] < -700, `Landmark ${id} X position ${lm.position[0]} should be in Kebon Jeruk (X < -700)`);
});

// Check builder methods in LandmarkModels.js
assert.ok(landmarkModelsContent.includes('createKantorWalikotaJakbar'), 'LandmarkModels.js missing createKantorWalikotaJakbar');
assert.ok(landmarkModelsContent.includes('createLippoMallPuri'), 'LandmarkModels.js missing createLippoMallPuri');
assert.ok(landmarkModelsContent.includes('createPuriIndahMall'), 'LandmarkModels.js missing createPuriIndahMall');
assert.ok(landmarkModelsContent.includes('createGlodokChinatown'), 'LandmarkModels.js missing createGlodokChinatown');
assert.ok(landmarkModelsContent.includes('createMNCStudiosKebonJeruk'), 'LandmarkModels.js missing createMNCStudiosKebonJeruk');
assert.ok(landmarkModelsContent.includes('createMuseumMACAN'), 'LandmarkModels.js missing createMuseumMACAN');

// Check 22: Tahap 2 Jaringan Jalan Tol, Arteri Utama & Koridor Tata Air Jakarta Barat
assert.ok(
  citySceneContent.includes('this.buildWestJakartaInfrastructure()'),
  'CityScene.js missing buildWestJakartaInfrastructure call in init'
);
assert.ok(
  citySceneContent.includes('buildWestJakartaInfrastructure()'),
  'CityScene.js missing buildWestJakartaInfrastructure method'
);
assert.ok(
  citySceneContent.includes('JALAN TOL JAKARTA - TANGERANG'),
  'CityScene.js missing JALAN TOL JAKARTA - TANGERANG'
);
assert.ok(
  citySceneContent.includes('JALAN TOL LINGKAR LUAR JAKARTA BARAT'),
  'CityScene.js missing JALAN TOL LINGKAR LUAR JAKARTA BARAT'
);
assert.ok(
  citySceneContent.includes('SIMPANG SUSUN KEMBANGAN'),
  'CityScene.js missing SIMPANG SUSUN KEMBANGAN'
);
assert.ok(
  citySceneContent.includes('Jl. Daan Mogot'),
  'CityScene.js missing Jl. Daan Mogot'
);
assert.ok(
  citySceneContent.includes('Flyover Pesing'),
  'CityScene.js missing Flyover Pesing'
);
assert.ok(
  citySceneContent.includes('Koridor Jalan Panjang'),
  'CityScene.js missing Koridor Jalan Panjang'
);
assert.ok(
  citySceneContent.includes('Jl. Puri Indah Raya & Boulevard Kembangan'),
  'CityScene.js missing Jl. Puri Indah Raya & Boulevard Kembangan'
);
assert.ok(
  citySceneContent.includes('Kali Angke & Cengkareng Drain'),
  'CityScene.js missing Kali Angke & Cengkareng Drain'
);
assert.ok(
  citySceneContent.includes('Kali Pesanggrahan'),
  'CityScene.js missing Kali Pesanggrahan'
);

// Check 23: Tahap 3 Infill Urban Fabric, Distrik Residensial & Pecinan Jakarta Barat
assert.ok(
  citySceneContent.includes('this.buildWestJakartaInfillAndDistricts()'),
  'CityScene.js missing buildWestJakartaInfillAndDistricts call in init'
);
assert.ok(
  citySceneContent.includes('buildWestJakartaInfillAndDistricts()'),
  'CityScene.js missing buildWestJakartaInfillAndDistricts method'
);
assert.ok(
  citySceneContent.includes('RUKO PERANAKAN TIONGHOA GLODOK'),
  'CityScene.js missing RUKO PERANAKAN TIONGHOA GLODOK'
);
assert.ok(
  citySceneContent.includes('RESIDENSIAL KLUSTER MODERN PURI INDAH & KEMBANGAN'),
  'CityScene.js missing RESIDENSIAL KLUSTER MODERN PURI INDAH & KEMBANGAN'
);
assert.ok(
  citySceneContent.includes('SENTRA RUKO & PERKANTORAN MODERN KEBON JERUK'),
  'CityScene.js missing SENTRA RUKO & PERKANTORAN MODERN KEBON JERUK'
);
assert.ok(
  citySceneContent.includes('VEGETASI PERKOTAAN TROPIS JAKARTA BARAT'),
  'CityScene.js missing VEGETASI PERKOTAAN TROPIS JAKARTA BARAT'
);

// Check 24: Tahap 4 Transit Dinamis & Sirkulasi Multimoda Jakarta Barat
assert.ok(
  citySceneContent.includes('this.tangerangRailCurve = new THREE.CatmullRomCurve3'),
  'CityScene.js missing tangerangRailCurve'
);
assert.ok(
  citySceneContent.includes("'krl-tangerang-westbound'"),
  'CityScene.js missing krl-tangerang-westbound'
);
assert.ok(
  citySceneContent.includes("'krl-tangerang-eastbound'"),
  'CityScene.js missing krl-tangerang-eastbound'
);
assert.ok(
  citySceneContent.includes('TransJakarta Koridor 3 (Kalideres <-> Grogol <-> Monas via Jl. Daan Mogot)'),
  'CityScene.js missing TransJakarta Koridor 3 route'
);
assert.ok(
  citySceneContent.includes('TransJakarta Koridor 8 (Lebak Bulus <-> Kebon Jeruk <-> Harmoni via Jl. Panjang)'),
  'CityScene.js missing TransJakarta Koridor 8 route'
);
assert.ok(
  citySceneContent.includes('Tol Jakarta - Tangerang Express Viaduct (Tomang <-> Kebon Jeruk <-> Kembangan'),
  'CityScene.js missing Tol Jakarta - Tangerang route'
);
assert.ok(
  citySceneContent.includes('Tol Lingkar Luar Barat (JORR W1 Viaduct'),
  'CityScene.js missing Tol JORR W1 route'
);

// Check 25: Tahap 1 Jakarta Timur Anchor Landmarks (#64 s.d. #69)
jaktimTahap1Anchors.forEach((id) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Missing East Jakarta Tahap 1 anchor landmark: ${id}`);
  assert.ok(lm.position[0] > 500, `Landmark ${id} X position ${lm.position[0]} should be in Jakarta Timur (X > 500)`);
  assert.ok(citySceneContent.includes(`"${id}": () =>`), `CityScene.js missing builder mapping for ${id}`);
});

// Check builder methods in LandmarkModels.js
assert.ok(landmarkModelsContent.includes('createStasiunJatinegara'), 'LandmarkModels.js missing createStasiunJatinegara');
assert.ok(landmarkModelsContent.includes('createBandaraHalim'), 'LandmarkModels.js missing createBandaraHalim');
assert.ok(landmarkModelsContent.includes('createTamanMiniIndonesiaIndah'), 'LandmarkModels.js missing createTamanMiniIndonesiaIndah');
assert.ok(landmarkModelsContent.includes('createVelodromeRawamangun'), 'LandmarkModels.js missing createVelodromeRawamangun');
assert.ok(landmarkModelsContent.includes('createSimpangSusunCawang'), 'LandmarkModels.js missing createSimpangSusunCawang');
assert.ok(landmarkModelsContent.includes('createMonumenPancasilaSakti'), 'LandmarkModels.js missing createMonumenPancasilaSakti');

// Check 26: Tahap 2 Jaringan Jalan Tol, Arteri Utama & Koridor Tata Air KBT Jakarta Timur
assert.ok(
  citySceneContent.includes('this.buildEastJakartaInfrastructure()'),
  'CityScene.js missing buildEastJakartaInfrastructure call in init'
);
assert.ok(
  citySceneContent.includes('buildEastJakartaInfrastructure()'),
  'CityScene.js missing buildEastJakartaInfrastructure method'
);
assert.ok(
  citySceneContent.includes('JALAN TOL JAGORAWI'),
  'CityScene.js missing JALAN TOL JAGORAWI'
);
assert.ok(
  citySceneContent.includes('JALAN TOL JAKARTA - CIKAMPEK'),
  'CityScene.js missing JALAN TOL JAKARTA - CIKAMPEK'
);
assert.ok(
  citySceneContent.includes('JALAN TOL BECAKAYU'),
  'CityScene.js missing JALAN TOL BECAKAYU'
);
assert.ok(
  citySceneContent.includes('JALAN TOL IR. WIYOTO WIYONO'),
  'CityScene.js missing JALAN TOL IR. WIYOTO WIYONO'
);
assert.ok(
  citySceneContent.includes('SIMPANG SUSUN CAWANG LOOPS'),
  'CityScene.js missing SIMPANG SUSUN CAWANG LOOPS'
);
assert.ok(
  citySceneContent.includes('Jl. Matraman Raya'),
  'CityScene.js missing Jl. Matraman Raya'
);
assert.ok(
  citySceneContent.includes('Jl. Pemuda & Jl. Pramuka'),
  'CityScene.js missing Jl. Pemuda & Jl. Pramuka'
);
assert.ok(
  citySceneContent.includes('Jl. Kolonel Sugiono & Jl. Basuki Rahmat'),
  'CityScene.js missing Jl. Kolonel Sugiono & Jl. Basuki Rahmat'
);
assert.ok(
  citySceneContent.includes('Kanal Banjir Timur'),
  'CityScene.js missing Kanal Banjir Timur'
);
assert.ok(
  citySceneContent.includes('Kali Malang'),
  'CityScene.js missing Kali Malang'
);
assert.ok(
  citySceneContent.includes('Kali Ciliwung Timur'),
  'CityScene.js missing Kali Ciliwung Timur'
);
assert.ok(
  citySceneContent.includes('Waduk Ria Rio'),
  'CityScene.js missing Waduk Ria Rio'
);

// Check 27: Tahap 3 Infill Urban Fabric, Distrik Residensial & Sentra Budaya/Komersial Jakarta Timur
assert.ok(
  citySceneContent.includes('this.buildEastJakartaInfillAndDistricts()'),
  'CityScene.js missing buildEastJakartaInfillAndDistricts call in init'
);
assert.ok(
  citySceneContent.includes('buildEastJakartaInfillAndDistricts()'),
  'CityScene.js missing buildEastJakartaInfillAndDistricts method'
);
assert.ok(
  citySceneContent.includes('RUKO KOMERSIAL & SENTRA USAHA RAWAMANGUN'),
  'CityScene.js missing RUKO KOMERSIAL & SENTRA USAHA RAWAMANGUN'
);
assert.ok(
  citySceneContent.includes('DISTRIK RESIDENSIAL MODERN DUREN SAWIT'),
  'CityScene.js missing DISTRIK RESIDENSIAL MODERN DUREN SAWIT'
);
assert.ok(
  citySceneContent.includes('KAWASAN INDUSTRI PULOGADUNG'),
  'CityScene.js missing KAWASAN INDUSTRI PULOGADUNG'
);
assert.ok(
  citySceneContent.includes('VEGETASI PERKOTAAN TROPIS JAKARTA TIMUR'),
  'CityScene.js missing VEGETASI PERKOTAAN TROPIS JAKARTA TIMUR'
);
assert.ok(
  citySceneContent.includes('Sabuk Hijau Tanggul Kanal Banjir Timur'),
  'CityScene.js missing Sabuk Hijau Tanggul Kanal Banjir Timur'
);

// Check 28: Tahap 4 Transit Dinamis & Sirkulasi Multimoda Jakarta Timur
assert.ok(
  citySceneContent.includes('this.cikarangRailCurve'),
  'CityScene.js missing cikarangRailCurve'
);
assert.ok(
  citySceneContent.includes('this.lrtCibuburCurve'),
  'CityScene.js missing lrtCibuburCurve'
);
assert.ok(
  citySceneContent.includes('this.velodromeLrtCurve'),
  'CityScene.js missing velodromeLrtCurve'
);
assert.ok(
  citySceneContent.includes("'krl-cikarang-eastbound'"),
  'CityScene.js missing krl-cikarang-eastbound'
);
assert.ok(
  citySceneContent.includes("'krl-cikarang-westbound'"),
  'CityScene.js missing krl-cikarang-westbound'
);
assert.ok(
  citySceneContent.includes("'lrt-cibubur-southbound'"),
  'CityScene.js missing lrt-cibubur-southbound'
);
assert.ok(
  citySceneContent.includes("'lrt-cibubur-northbound'"),
  'CityScene.js missing lrt-cibubur-northbound'
);
assert.ok(
  citySceneContent.includes("'lrt-velodrome-northbound'"),
  'CityScene.js missing lrt-velodrome-northbound'
);
assert.ok(
  citySceneContent.includes("'lrt-velodrome-southbound'"),
  'CityScene.js missing lrt-velodrome-southbound'
);
assert.ok(
  citySceneContent.includes('TransJakarta Koridor 5 (Kampung Melayu <-> Jatinegara <-> Salemba <-> Ancol)'),
  'CityScene.js missing TransJakarta Koridor 5 East Jakarta route'
);
assert.ok(
  citySceneContent.includes('TransJakarta Koridor 7 (Kampung Rambutan <-> TMII <-> Cililitan <-> Cawang <-> Kampung Melayu)'),
  'CityScene.js missing TransJakarta Koridor 7 route'
);
assert.ok(
  citySceneContent.includes('TransJakarta Koridor 9 (Pinang Ranti <-> Garuda Tamini <-> Cawang Hub <-> Pancoran)'),
  'CityScene.js missing TransJakarta Koridor 9 East Jakarta route'
);
assert.ok(
  citySceneContent.includes('TransJakarta Koridor 11 (Kampung Melayu <-> Jatinegara <-> Klender <-> Buaran <-> Pulogebang)'),
  'CityScene.js missing TransJakarta Koridor 11 route'
);
assert.ok(
  citySceneContent.includes('Jalan Tol Jagorawi Express'),
  'CityScene.js missing Jalan Tol Jagorawi Express route'
);
assert.ok(
  citySceneContent.includes('Tol Jakarta - Cikampek Express & Truk Logistik'),
  'CityScene.js missing Tol Jakarta - Cikampek Express & Truk Logistik route'
);
assert.ok(
  citySceneContent.includes('Tol Becakayu Viaduct Layang'),
  'CityScene.js missing Tol Becakayu Viaduct Layang route'
);
assert.ok(
  citySceneContent.includes('Tol Ir. Wiyoto Wiyono (By-Pass Cawang -> Jatinegara -> Rawamangun -> Priok'),
  'CityScene.js missing Tol Ir. Wiyoto Wiyono East Jakarta route'
);

// Check 29: Tahap 1 Void A (Jakarta Barat Tengah) Anchor Landmarks (#70 s.d. #75)
const voidAAnchors = [
  'rs-graha-kedoya',
  'wang-residence-kedoya',
  'ipeka-puri-greenville',
  'sentra-kuliner-greenville',
  'sentra-pos-pengumben',
  'taman-cattleya-tomang'
];

voidAAnchors.forEach((id) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Missing Void A Tahap 1 anchor landmark: ${id}`);
  assert.ok(lm.position[0] < -500, `Landmark ${id} X position ${lm.position[0]} should be in West Jakarta Void A (X < -500)`);
  assert.ok(lm.position[2] >= -300 && lm.position[2] <= 300, `Landmark ${id} Z position ${lm.position[2]} should be in Void A range (-300 <= Z <= 300)`);
});

// Specific position checks
const graha = JAKARTA_LANDMARKS.find((l) => l.id === 'rs-graha-kedoya');
assert.deepStrictEqual(graha.position, [-775.0, 0, -260.0], 'rs-graha-kedoya invalid position');

const wang = JAKARTA_LANDMARKS.find((l) => l.id === 'wang-residence-kedoya');
assert.deepStrictEqual(wang.position, [-790.0, 0, -95.0], 'wang-residence-kedoya invalid position');

const ipeka = JAKARTA_LANDMARKS.find((l) => l.id === 'ipeka-puri-greenville');
assert.deepStrictEqual(ipeka.position, [-710.0, 0, -210.0], 'ipeka-puri-greenville invalid position');

const kuliner = JAKARTA_LANDMARKS.find((l) => l.id === 'sentra-kuliner-greenville');
assert.deepStrictEqual(kuliner.position, [-680.0, 0, -160.0], 'sentra-kuliner-greenville invalid position');

const posPengumben = JAKARTA_LANDMARKS.find((l) => l.id === 'sentra-pos-pengumben');
assert.deepStrictEqual(posPengumben.position, [-775.0, 0, 210.0], 'sentra-pos-pengumben invalid position');

const cattleya = JAKARTA_LANDMARKS.find((l) => l.id === 'taman-cattleya-tomang');
assert.deepStrictEqual(cattleya.position, [-530.0, 0, -110.0], 'taman-cattleya-tomang invalid position');

// Check builder methods in LandmarkModels.js
assert.ok(landmarkModelsContent.includes('createRSGrahaKedoya'), 'LandmarkModels.js missing createRSGrahaKedoya');
assert.ok(landmarkModelsContent.includes('createWangResidenceKedoya'), 'LandmarkModels.js missing createWangResidenceKedoya');
assert.ok(landmarkModelsContent.includes('createIPEKAGreenville'), 'LandmarkModels.js missing createIPEKAGreenville');
assert.ok(landmarkModelsContent.includes('createSentraKulinerGreenville'), 'LandmarkModels.js missing createSentraKulinerGreenville');
assert.ok(landmarkModelsContent.includes('createSentraPosPengumben'), 'LandmarkModels.js missing createSentraPosPengumben');
assert.ok(landmarkModelsContent.includes('createTamanCattleyaTomang'), 'LandmarkModels.js missing createTamanCattleyaTomang');

// Check builders in CityScene.js
assert.ok(citySceneContent.includes('"rs-graha-kedoya": () => LandmarkModels.createRSGrahaKedoya()'), 'CityScene.js missing rs-graha-kedoya builder');
assert.ok(citySceneContent.includes('"wang-residence-kedoya": () => LandmarkModels.createWangResidenceKedoya()'), 'CityScene.js missing wang-residence-kedoya builder');
assert.ok(citySceneContent.includes('"ipeka-puri-greenville": () => LandmarkModels.createIPEKAGreenville()'), 'CityScene.js missing ipeka-puri-greenville builder');
assert.ok(citySceneContent.includes('"sentra-kuliner-greenville": () => LandmarkModels.createSentraKulinerGreenville()'), 'CityScene.js missing sentra-kuliner-greenville builder');
assert.ok(citySceneContent.includes('"sentra-pos-pengumben": () => LandmarkModels.createSentraPosPengumben()'), 'CityScene.js missing sentra-pos-pengumben builder');
assert.ok(citySceneContent.includes('"taman-cattleya-tomang": () => LandmarkModels.createTamanCattleyaTomang()'), 'CityScene.js missing taman-cattleya-tomang builder');

// Check 30: Tahap 2 Jaringan Jalan Sekunder & Tata Air Void A (Jakarta Barat Tengah)
assert.ok(
  citySceneContent.includes('Jl. Greenville Raya & Jl. Taman Ratu Indah'),
  'CityScene.js missing Jl. Greenville Raya & Jl. Taman Ratu Indah'
);
assert.ok(
  citySceneContent.includes('Jl. Kedoya Raya & Sunrise Garden'),
  'CityScene.js missing Jl. Kedoya Raya & Sunrise Garden'
);
assert.ok(
  citySceneContent.includes('Jl. Pos Pengumben Raya'),
  'CityScene.js missing Jl. Pos Pengumben Raya'
);
assert.ok(
  citySceneContent.includes('Jl. Perjuangan & Akses Underpass Tol Kebon Jeruk'),
  'CityScene.js missing Jl. Perjuangan & Akses Underpass Tol Kebon Jeruk'
);
assert.ok(
  citySceneContent.includes('Jl. Kebon Jeruk Raya / Kemanggisan Ilir'),
  'CityScene.js missing Jl. Kebon Jeruk Raya / Kemanggisan Ilir'
);
assert.ok(
  citySceneContent.includes('Akses Lingkar Taman Cattleya & Simpang Tomang Barat'),
  'CityScene.js missing Akses Lingkar Taman Cattleya & Simpang Tomang Barat'
);
assert.ok(
  citySceneContent.includes('Kali Sekretaris (Sungai Pengendali Banjir Tanjung Duren -> Greenville -> Kedoya)'),
  'CityScene.js missing Kali Sekretaris'
);
assert.ok(
  citySceneContent.includes('Danau Retensi Taman Cattleya Tomang Barat'),
  'CityScene.js missing Danau Retensi Taman Cattleya Tomang Barat'
);
assert.ok(
  citySceneContent.includes('Jembatan Jl. Greenville Raya atas Kali Sekretaris'),
  'CityScene.js missing Jembatan Jl. Greenville Raya atas Kali Sekretaris'
);
assert.ok(
  citySceneContent.includes('Jembatan Jl. Pos Pengumben atas Kali Sekretaris'),
  'CityScene.js missing Jembatan Jl. Pos Pengumben atas Kali Sekretaris'
);
assert.ok(
  citySceneContent.includes('Jembatan Jl. Kedoya Raya atas Kali Pesanggrahan'),
  'CityScene.js missing Jembatan Jl. Kedoya Raya atas Kali Pesanggrahan'
);

// Check 31: Tahap 3 Infill Macro Urban Fabric, Residensial & Sabuk Hijau Void A
assert.ok(
  citySceneContent.includes('Zona 5 (Void A): Greenville & Taman Ratu Indah'),
  'CityScene.js missing Greenville & Taman Ratu residential zone'
);
assert.ok(
  citySceneContent.includes('Zona 6 (Void A): Sunrise Garden & Kedoya Baru'),
  'CityScene.js missing Sunrise Garden & Kedoya Baru residential zone'
);
assert.ok(
  citySceneContent.includes('Zona 7 (Void A): Kedoya Selatan & Sukabumi Utara'),
  'CityScene.js missing Kedoya Selatan & Sukabumi Utara residential zone'
);
assert.ok(
  citySceneContent.includes('Zona 8 (Void A): Sukabumi Selatan & Pos Pengumben Timur/Barat'),
  'CityScene.js missing Pos Pengumben residential zone'
);
assert.ok(
  citySceneContent.includes('Koridor Ruko Modern Void A (Jl. Panjang & Sentra Pos Pengumben)'),
  'CityScene.js missing Jl. Panjang modern shophouse corridor'
);
assert.ok(
  citySceneContent.includes('Ruko Sepanjang Koridor Jl. Pos Pengumben Raya'),
  'CityScene.js missing Pos Pengumben shophouse corridor'
);
assert.ok(
  citySceneContent.includes('Pohon Peneduh Void A (Jl. Greenville Raya, Jl. Pos Pengumben & Kali Sekretaris)'),
  'CityScene.js missing Void A street trees'
);

// Check 32: Tahap 4 Transit Dinamis & Sirkulasi Multimoda Void A
assert.ok(
  citySceneContent.includes('Feeder Mikrotrans & Arteri Jl. Greenville Raya'),
  'CityScene.js missing Greenville Raya feeder route'
);
assert.ok(
  citySceneContent.includes('Koridor Arteri Jl. Kedoya Raya & Sunrise Garden'),
  'CityScene.js missing Kedoya Raya & Sunrise Garden route'
);
assert.ok(
  citySceneContent.includes('TransJakarta Feeder & Arteri 4-Lajur Jl. Pos Pengumben Raya'),
  'CityScene.js missing Pos Pengumben 4-lane feeder route'
);
assert.ok(
  citySceneContent.includes('Sirkulasi Arteri Jl. Perjuangan & Akses Underpass Tol Kebon Jeruk'),
  'CityScene.js missing Jl. Perjuangan underpass route'
);
assert.ok(
  citySceneContent.includes('Sirkulasi Jl. Kebon Jeruk Raya / Kemanggisan Ilir'),
  'CityScene.js missing Jl. Kebon Jeruk Raya route'
);
assert.ok(
  citySceneContent.includes('Sirkulasi Lingkar Taman Cattleya & Simpang Tomang Barat'),
  'CityScene.js missing Lingkar Taman Cattleya route'
);
assert.ok(
  citySceneContent.includes('Halte Busway TransJakarta Koridor 8 di Sepanjang Koridor Jl. Panjang (Void A)'),
  'CityScene.js missing TransJakarta Koridor 8 shelters'
);
assert.ok(
  citySceneContent.includes('Halte Kedoya Green Garden'),
  'CityScene.js missing Halte Kedoya Green Garden'
);
assert.ok(
  citySceneContent.includes('Halte Kebon Jeruk (MACAN)'),
  'CityScene.js missing Halte Kebon Jeruk (MACAN)'
);
assert.ok(
  citySceneContent.includes('Halte Pos Pengumben'),
  'CityScene.js missing Halte Pos Pengumben'
);


// Check 33: Tahap 1 Void B Anchor Landmarks (Jakarta Barat Laut: Kalideres, Cengkareng, Rawa Buaya)
const voidBLandmarkIds = [
  'terminal-bus-kalideres',
  'rsud-cengkareng',
  'daan-mogot-mall',
  'stasiun-rawa-buaya-hub',
  'danau-rawa-buaya',
  'cengkareng-business-city'
];

voidBLandmarkIds.forEach(id => {
  const lm = JAKARTA_LANDMARKS.find(l => l.id === id);
  assert.ok(lm, `Void B landmark ${id} not found in JAKARTA_LANDMARKS`);
  assert.ok(lm.position[0] <= -1000 && lm.position[0] >= -1350, `Landmark ${id} X position ${lm.position[0]} outside Void B range [-1350, -1000]`);
  assert.ok(lm.position[2] <= -350 && lm.position[2] >= -600, `Landmark ${id} Z position ${lm.position[2]} outside Void B range [-600, -350]`);
  assert.ok(lm.facts && lm.facts.length >= 3, `Landmark ${id} must have at least 3 educational facts`);
});

const landmarkModelsFresh = fs.readFileSync('src/world/LandmarkModels.js', 'utf8');
assert.ok(landmarkModelsFresh.includes('static createTerminalBusKalideres()'), 'LandmarkModels missing createTerminalBusKalideres');
assert.ok(landmarkModelsFresh.includes('static createRSUDCengkareng()'), 'LandmarkModels missing createRSUDCengkareng');
assert.ok(landmarkModelsFresh.includes('static createDaanMogotMall()'), 'LandmarkModels missing createDaanMogotMall');
assert.ok(landmarkModelsFresh.includes('static createStasiunRawaBuayaHub()'), 'LandmarkModels missing createStasiunRawaBuayaHub');
assert.ok(landmarkModelsFresh.includes('static createDanauRawaBuaya()'), 'LandmarkModels missing createDanauRawaBuaya');
assert.ok(landmarkModelsFresh.includes('static createCengkarengBusinessCity()'), 'LandmarkModels missing createCengkarengBusinessCity');

voidBLandmarkIds.forEach(id => {
  assert.ok(citySceneContent.includes(`"${id}":`), `CityScene.js missing builder mapping for ${id}`);
});

const indexHtmlFresh = fs.readFileSync('index.html', 'utf8');
voidBLandmarkIds.forEach(id => {
  assert.ok(indexHtmlFresh.includes(`data-tour-id="${id}"`), `index.html missing tour button for ${id}`);
});

// Check 34: Void B Tahap 2 — OSM Daan Mogot, Mookervaart, and anchor access
assert.ok(VOID_B_OSM.meta.source.includes('OpenStreetMap'), 'Void B OSM dataset missing OSM attribution');
assert.strictEqual(VOID_B_OSM.meta.voidBWarp.xScale, 0.4575, 'Void B warp xScale changed unexpectedly');
assert.strictEqual(VOID_B_OSM.meta.voidBWarp.zScale, 0.3829, 'Void B warp zScale changed unexpectedly');

const voidBRoadNames = new Set(VOID_B_OSM.roads.map((road) => road.name));
[
  'Jalan Daan Mogot',
  'Jalan Bumi Cengkareng Indah',
  'Jalan Kembangan Utama',
  'Jalan Kembangan Baru',
  'Jalan Duri Kosambi Raya',
  'Jalan Kalideres Permai',
  'Jalan Rusunawa Pesakih'
].forEach((name) => {
  assert.ok(voidBRoadNames.has(name), `Void B OSM dataset missing ${name}`);
});

const allVoidBPoints = [
  ...VOID_B_OSM.roads.flatMap((road) => road.points),
  ...VOID_B_OSM.waterways.flatMap((waterway) => waterway.points)
];
allVoidBPoints.forEach(([x, z]) => {
  assert.ok(Number.isFinite(x) && Number.isFinite(z), 'Void B OSM contains a non-finite coordinate');
  assert.ok(x <= -850 && x >= -1550, `Void B OSM x=${x} outside expected west corridor`);
  assert.ok(z <= -250 && z >= -620, `Void B OSM z=${z} outside expected west corridor`);
});

const distanceToSegment = (p, a, b) => {
  const dx = b[0] - a[0];
  const dz = b[1] - a[1];
  const len2 = dx * dx + dz * dz;
  if (len2 === 0) return Math.hypot(p[0] - a[0], p[1] - a[1]);
  let t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / len2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dz));
};
const distanceToRoad = (point, name) => {
  let best = Infinity;
  VOID_B_OSM.roads.filter((road) => road.name === name).forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      best = Math.min(best, distanceToSegment(point, road.points[i], road.points[i + 1]));
    }
  });
  return best;
};

assert.ok(distanceToRoad([-1320, -450], 'Jalan Daan Mogot') < 40, 'Terminal Kalideres is detached from the OSM Daan Mogot extension');
assert.ok(distanceToRoad([-1260, -460], 'Jalan Daan Mogot') < 40, 'Mall Daan Mogot is detached from the OSM Daan Mogot extension');
assert.ok(distanceToRoad([-1140, -520], 'Jalan Bumi Cengkareng Indah') < 30, 'RSUD Cengkareng is detached from Jalan Bumi Cengkareng Indah');
assert.ok(distanceToRoad([-1080, -400], 'Jalan Kembangan Utama') < 30, 'Danau Rawa Buaya is detached from Jalan Kembangan Utama');

const waterwayNames = VOID_B_OSM.waterways.map((waterway) => waterway.name);
assert.ok(waterwayNames.includes('Kali Mookervaart'), 'Void B OSM dataset missing Kali Mookervaart');
assert.ok(citySceneContent.includes('buildVoidBDaanMogot()'), 'CityScene.js missing buildVoidBDaanMogot');
assert.ok(citySceneContent.includes('this.buildVoidBDaanMogot();'), 'CityScene.js does not call buildVoidBDaanMogot');
assert.ok(citySceneContent.includes('Akses Cengkareng Business City'), 'CityScene.js missing CBC access road');
assert.ok(citySceneContent.includes('new THREE.GridHelper(5600, 280'), 'Ground grid does not cover Void B');

const voidBMethodStart = citySceneContent.indexOf('buildVoidBDaanMogot() {');
const voidBMethodEnd = citySceneContent.indexOf('Tahap 3 Jakarta Timur', voidBMethodStart);
const voidBMethod = citySceneContent.slice(voidBMethodStart, voidBMethodEnd);
assert.ok(voidBMethodStart > 0 && voidBMethodEnd > voidBMethodStart, 'Cannot isolate buildVoidBDaanMogot');
assert.ok(!voidBMethod.includes('new THREE.PointLight'), 'Void B lamps must not add PointLights');
assert.ok(voidBMethod.includes('VOID_B_OSM'), 'Void B builder does not consume the OSM dataset');

const voidBLightingContent = fs.readFileSync('src/world/Lighting.js', 'utf8');
assert.ok(voidBLightingContent.includes('updateShadowFocus(target)'), 'Lighting.js missing updateShadowFocus');
const voidBMainJsContent = fs.readFileSync('src/main.js', 'utf8');
assert.ok(voidBMainJsContent.includes('updateShadowFocus(this.cameraController.controls.target)'), 'main.js does not follow the camera with the shadow frustum');

const tangerangRouteContent = citySceneContent.includes('x2: -1320.0, z2: -450.0');
assert.ok(tangerangRouteContent, 'TransJakarta Koridor 3 route does not reach Terminal Kalideres');

// Check 35: Void B Tahap 3 — infill permukiman & kawasan industri
assert.ok(citySceneContent.includes('buildVoidBInfillAndIndustry()'), 'CityScene.js missing buildVoidBInfillAndIndustry');
assert.ok(citySceneContent.includes('this.buildVoidBInfillAndIndustry();'), 'CityScene.js does not call buildVoidBInfillAndIndustry');

const infillMethodStart = citySceneContent.indexOf('buildVoidBInfillAndIndustry() {');
const infillMethodEnd = citySceneContent.indexOf('Tahap 3 Jakarta Timur', infillMethodStart);
assert.ok(infillMethodStart > 0 && infillMethodEnd > infillMethodStart, 'Cannot isolate buildVoidBInfillAndIndustry');
const infillMethod = citySceneContent.slice(infillMethodStart, infillMethodEnd);

assert.ok(!infillMethod.includes('new THREE.PointLight'), 'Void B infill must not add PointLights');
assert.ok(infillMethod.includes('VOID_B_OSM.roads'), 'Void B infill does not consume OSM roads');
assert.ok(infillMethod.includes('new THREE.InstancedMesh'), 'Void B infill does not use InstancedMesh');
assert.ok(infillMethod.includes('voidBInfillStats'), 'Void B infill does not record placement stats');
assert.ok(infillMethod.includes('drawCalls: 9'), 'Void B infill draw-call budget changed unexpectedly');
assert.ok(infillMethod.includes('isBlocked'), 'Void B infill is missing corridor collision masking');
assert.ok(infillMethod.includes('createSidewalkTexture'), 'Void B industrial access shoulders must reuse the sidewalk texture');
assert.ok(infillMethod.includes('buildRoadChains'), 'Void B infill must stitch fragmented OSM shophouse corridors');
assert.ok(infillMethod.includes('placeShophouseRow'), 'Void B infill must share the shophouse row builder between OSM and access roads');

[
  'voidb-houses',
  'voidb-shophouses',
  'voidb-house-roofs',
  'voidb-warehouses',
  'voidb-warehouse-roofs'
].forEach(name => {
  assert.ok(infillMethod.includes(`'${name}'`), `Void B infill missing named instanced mesh ${name}`);
});

voidBLandmarkIds.forEach(id => {
  assert.ok(infillMethod.includes(`id: '${id}'`), `Void B infill missing exclusion for ${id}`);
});

[
  'Akses Kawasan Industri Kalideres',
  'Akses Logistik Cengkareng'
].forEach(name => {
  assert.ok(infillMethod.includes(name), `Void B infill missing access road ${name}`);
});

[
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
].forEach(name => {
  assert.ok(voidBRoadNames.has(name), `Void B shophouse corridor ${name} is absent from the OSM dataset`);
  assert.ok(infillMethod.includes(`'${name}'`), `Void B infill missing shophouse corridor ${name}`);
});

// Check 36: Void B Tahap 4 — halte TransJakarta Koridor 3 & percabangan KA Bandara
assert.ok(citySceneContent.includes('this.buildVoidBTransit();'), 'CityScene.js does not call buildVoidBTransit');
assert.ok(citySceneContent.includes('buildVoidBTransit() {'), 'CityScene.js missing buildVoidBTransit');

const transitMethodStart = citySceneContent.indexOf('buildVoidBTransit() {');
const transitMethodEnd = citySceneContent.indexOf('Tahap 3 Jakarta Timur', transitMethodStart);
assert.ok(transitMethodStart > 0 && transitMethodEnd > transitMethodStart, 'Cannot isolate buildVoidBTransit');
const transitMethod = citySceneContent.slice(transitMethodStart, transitMethodEnd);

assert.ok(!transitMethod.includes('new THREE.PointLight'), 'Void B transit must not add PointLights');
assert.ok(transitMethod.includes('VOID_B_OSM.waterways'), 'Void B transit does not use the OSM canal geometry');
assert.ok(transitMethod.includes('mergeGeometries'), 'Void B transit must merge static geometry');
assert.ok(transitMethod.includes('voidBTransitStats'), 'Void B transit does not record stats');
assert.ok(transitMethod.includes('halte: halteStops.length'), 'Void B transit stats must count both halte');
assert.ok(transitMethod.includes('bandaraCars: 2'), 'Void B transit stats must record the two-car Railink consist');
assert.ok(transitMethod.includes('Halte Rawa Buaya'), 'Void B transit missing Halte Rawa Buaya');
assert.ok(transitMethod.includes('Halte Pesakih'), 'Void B transit missing Halte Pesakih');
assert.ok(transitMethod.includes('this.bandaraRailCurve = new THREE.CatmullRomCurve3'), 'Void B transit missing KA Bandara curve');
assert.ok(transitMethod.includes('this.bandaraRailCurveLength = this.bandaraRailCurve.getLength()'), 'Void B transit missing KA Bandara curve length');
assert.ok(transitMethod.includes('new THREE.Vector3(-1090, 0.6, -438)'), 'KA Bandara branch must start at Stasiun Rawa Buaya');
assert.ok(transitMethod.includes('new THREE.Vector3(-1020, 8.0, -680)'), 'KA Bandara branch must use the clear corridor east of the F2 industrial cluster');
assert.ok(transitMethod.includes('new THREE.Vector3(-1480, 8.0, -770)'), 'KA Bandara branch must end at the northwest portal');
assert.ok(transitMethod.includes('KA BANDARA'), 'KA Bandara portal is missing its sign');
assert.ok(landmarkModelsFresh.includes('static createSingleKABandaraCar(c, cars = 2)'), 'LandmarkModels missing createSingleKABandaraCar');
assert.ok(citySceneContent.includes('LandmarkModels.createSingleKABandaraCar(c, 2)'), 'CityScene.js does not create KA Bandara cars');
assert.ok(citySceneContent.includes("type: 'ka-bandara'"), 'buildTraffic missing ka-bandara train type');
assert.ok(citySceneContent.includes("id: 'ka-bandara-outbound'"), 'buildTraffic missing ka-bandara outbound consist');
assert.ok(citySceneContent.includes("id: 'ka-bandara-inbound'"), 'buildTraffic missing ka-bandara inbound consist');

// Check 37: F4 Tahap 1 — gerbong kereta digabung menjadi badan + kaca (2 mesh/gerbong)
assert.ok(landmarkModelsFresh.includes('static bakeRailCarGroup(carGroup)'), 'LandmarkModels missing bakeRailCarGroup');

const railCarBuilders = [
  'static createSingleKRLCar(c, cars = 4)',
  'static createSingleMRTRatanggaCar(c, cars = 4)',
  'static createSingleKAIAntarkotaCar(c, cars = 4)',
  'static createSingleLRTJabodebekCar(c, cars = 4)',
  'static createSingleLRTJakartaCar(c, cars = 2)'
];

railCarBuilders.forEach((signature) => {
  const start = landmarkModelsFresh.indexOf(signature);
  assert.ok(start > 0, `Missing rail car builder: ${signature}`);
  const end = landmarkModelsFresh.indexOf('\n  static ', start + signature.length);
  assert.ok(end > start, `Cannot isolate rail car builder: ${signature}`);
  const builder = landmarkModelsFresh.slice(start, end);
  assert.ok(builder.includes('return this.bakeRailCarGroup(carGroup);'), `${signature} does not merge its car geometry`);
  assert.ok(builder.includes(".name = 'rail-glass';"), `${signature} does not tag its glass material`);
  assert.ok(!builder.includes('.castShadow = true'), `${signature} still opts into dynamic shadows`);
});

const bakeStart = landmarkModelsFresh.indexOf('static bakeRailCarGroup(carGroup)');
const bakeEnd = landmarkModelsFresh.indexOf('\n  static ', bakeStart + 1);
assert.ok(bakeStart > 0 && bakeEnd > bakeStart, 'Cannot isolate bakeRailCarGroup');
const bakeMethod = landmarkModelsFresh.slice(bakeStart, bakeEnd);
assert.ok(bakeMethod.includes("mat.name === 'rail-glass'"), 'bakeRailCarGroup cannot identify glass materials');
assert.ok(bakeMethod.includes('BufferGeometryUtils.mergeGeometries(opaqueGeos, false)'), 'bakeRailCarGroup must merge the opaque body');
assert.ok(bakeMethod.includes('BufferGeometryUtils.mergeGeometries(glassGeos, false)'), 'bakeRailCarGroup must merge the glass');
assert.ok(bakeMethod.includes("body.name = 'rail-car-body'"), 'Merged rail car body mesh is not named');
assert.ok(bakeMethod.includes("glass.name = 'rail-car-glass'"), 'Merged rail car glass mesh is not named');
assert.ok(!bakeMethod.includes('.castShadow = true'), 'Merged rail car meshes must not cast dynamic shadows');

const bandaraStart = landmarkModelsFresh.indexOf('static createSingleKABandaraCar(c, cars = 2)');
const bandaraEnd = landmarkModelsFresh.indexOf('\n  static ', bandaraStart + 1);
assert.ok(bandaraStart > 0 && bandaraEnd > bandaraStart, 'Cannot isolate createSingleKABandaraCar');
const bandaraBuilder = landmarkModelsFresh.slice(bandaraStart, bandaraEnd);
assert.ok(!bandaraBuilder.includes('.castShadow = true'), 'KA Bandara car must not cast dynamic shadows');
assert.ok(bandaraBuilder.includes("body.name = 'rail-car-body'"), 'KA Bandara body mesh is not named');
assert.ok(bandaraBuilder.includes("glass.name = 'rail-car-glass'"), 'KA Bandara glass mesh is not named');

// Check 38: F4 Tahap 2 — PJU instanced, pool PointLight, dan shadow map statis
assert.ok(citySceneContent.includes('this.pjuLampTransforms = [];'), 'CityScene.js missing pjuLampTransforms collector');
assert.ok(citySceneContent.includes('this.pjuLightPool = [];'), 'CityScene.js missing pjuLightPool');
assert.ok(citySceneContent.includes('this.pjuLightPoolSize = 12;'), 'PJU light pool must be capped at 12 lights');
assert.ok(citySceneContent.includes('this.buildStreetLampInstances();'), 'CityScene.js does not build instanced PJU lamps');
assert.ok(citySceneContent.includes('this.buildPjuLightPool();'), 'CityScene.js does not build the PJU light pool');
assert.ok(!citySceneContent.includes('this.streetLights'), 'CityScene.js still creates per-lamp PointLights');

const lampStart = citySceneContent.indexOf('createStreetLamp(x, z, facingEast, arm = null) {');
const lampEnd = citySceneContent.indexOf('\n  buildStreetLampInstances() {', lampStart);
assert.ok(lampStart > 0 && lampEnd > lampStart, 'Cannot isolate createStreetLamp');
const lampMethod = citySceneContent.slice(lampStart, lampEnd);
assert.ok(lampMethod.includes('this.pjuLampTransforms.push'), 'createStreetLamp must record lamp transforms');
assert.ok(!lampMethod.includes('new THREE.Mesh'), 'createStreetLamp must not create per-lamp meshes');
assert.ok(!lampMethod.includes('new THREE.PointLight'), 'createStreetLamp must not create per-lamp PointLights');
assert.ok(!lampMethod.includes('proceduralGroup.add'), 'createStreetLamp must not add per-lamp groups');

const instancedLampStart = citySceneContent.indexOf('buildStreetLampInstances() {');
const instancedLampEnd = citySceneContent.indexOf('\n  buildPjuLightPool() {', instancedLampStart);
assert.ok(instancedLampStart > 0 && instancedLampEnd > instancedLampStart, 'Cannot isolate buildStreetLampInstances');
const instancedLampMethod = citySceneContent.slice(instancedLampStart, instancedLampEnd);
assert.ok(instancedLampMethod.includes('new THREE.InstancedMesh(poleGeo, poleMat, count)'), 'PJU poles are not instanced');
assert.ok(instancedLampMethod.includes('new THREE.InstancedMesh(bulbGeo, this.pjuBulbMat, count)'), 'PJU bulbs are not instanced');
assert.ok(instancedLampMethod.includes("poleMesh.name = 'pju-pole'"), 'Instanced PJU pole mesh is not named');
assert.ok(instancedLampMethod.includes("bulbMesh.name = 'pju-bulb-instanced'"), 'Instanced PJU bulb mesh is not named');
assert.ok(instancedLampMethod.includes('setMatrixAt'), 'Instanced PJU meshes do not write instance matrices');
assert.ok(!instancedLampMethod.includes('new THREE.PointLight'), 'Instanced PJU builder must not add PointLights');

const poolStart = citySceneContent.indexOf('buildPjuLightPool() {');
const poolEnd = citySceneContent.indexOf('\n  updatePjuLights(cameraPosition) {', poolStart);
assert.ok(poolStart > 0 && poolEnd > poolStart, 'Cannot isolate buildPjuLightPool');
const poolMethod = citySceneContent.slice(poolStart, poolEnd);
assert.ok(poolMethod.includes('new THREE.PointLight(0xfffbeb, 0, 22, 1.5)'), 'PJU pool light configuration changed');
assert.ok(poolMethod.includes("light.name = 'pju-pool-light'"), 'PJU pool light is not named');
assert.ok(poolMethod.includes('light.visible = false'), 'PJU pool must start hidden during the day');
assert.ok(poolMethod.includes('this.pjuLightPool.push(light)'), 'PJU pool does not collect its lights');

const pjuUpdateStart = citySceneContent.indexOf('updatePjuLights(cameraPosition) {');
const pjuUpdateEnd = citySceneContent.indexOf('\n  buildNorthJakartaInfrastructure() {', pjuUpdateStart);
assert.ok(pjuUpdateStart > 0 && pjuUpdateEnd > pjuUpdateStart, 'Cannot isolate updatePjuLights');
const pjuUpdateMethod = citySceneContent.slice(pjuUpdateStart, pjuUpdateEnd);
assert.ok(pjuUpdateMethod.includes('this.currentTimePreset'), 'updatePjuLights ignores the time preset');
assert.ok(pjuUpdateMethod.includes('this.pjuLampTransforms'), 'updatePjuLights does not read the lamp transforms');
assert.ok(pjuUpdateMethod.includes('sort((a, b) => a.d - b.d)'), 'updatePjuLights does not rank lamps by distance');
assert.ok(pjuUpdateMethod.includes('this.pjuLightPool.forEach'), 'updatePjuLights does not drive the light pool');
assert.ok(pjuUpdateMethod.includes("this.currentTimePreset === 'night' ? 1.8 : 0.6"), 'PJU pool intensity no longer matches the presets');
assert.ok(pjuUpdateMethod.includes('dx * dx + dz * dz < 225'), 'updatePjuLights is missing its camera-move throttle');
assert.ok(!pjuUpdateMethod.includes('new THREE.PointLight'), 'updatePjuLights must not allocate PointLights');

const presetStart = citySceneContent.indexOf('setTimePreset(preset) {');
const presetEnd = citySceneContent.indexOf('setNightMode(', presetStart);
assert.ok(presetStart > 0 && presetEnd > presetStart, 'Cannot isolate setTimePreset');
const presetMethod = citySceneContent.slice(presetStart, presetEnd);
assert.ok(presetMethod.includes('this.currentTimePreset = preset;'), 'setTimePreset does not record the active preset');
assert.ok(presetMethod.includes('this.lastPjuLightPosition.set(Infinity, Infinity, Infinity);'), 'setTimePreset does not force a PJU pool refresh');
assert.ok(presetMethod.includes('this.pjuLightPool.forEach'), 'setTimePreset does not drive the PJU light pool');

assert.ok(mainJsContent.includes('this.renderer.shadowMap.autoUpdate = false;'), 'main.js still rebuilds the shadow map every frame');
const shadowRefreshCount = (mainJsContent.match(/this\.renderer\.shadowMap\.needsUpdate = true;/g) || []).length;
assert.ok(shadowRefreshCount >= 3, 'main.js does not request shadow refreshes on init, time, and focus changes');
assert.ok(mainJsContent.includes('if (this.lighting.updateShadowFocus(this.cameraController.controls.target))'), 'main.js does not refresh static shadows when the focus moves');
assert.ok(mainJsContent.includes('this.city.updatePjuLights(this.camera.position);'), 'main.js does not update the PJU light pool with the camera');

const shadowFocusStart = lightingContent.indexOf('updateShadowFocus(target) {');
const shadowFocusEnd = lightingContent.indexOf('applySunPosition() {', shadowFocusStart);
assert.ok(shadowFocusStart > 0 && shadowFocusEnd > shadowFocusStart, 'Cannot isolate updateShadowFocus');
const shadowFocusMethod = lightingContent.slice(shadowFocusStart, shadowFocusEnd);
assert.ok(shadowFocusMethod.includes('return false;'), 'updateShadowFocus must report unchanged focus');
assert.ok(shadowFocusMethod.includes('return true;'), 'updateShadowFocus must report a moved focus');

// Check 39: F4 Tahap 3 — kendaraan instanced dan resolusi adaptif
assert.ok(citySceneContent.includes('this.vehicleMeshes = null;'), 'CityScene.js missing vehicleMeshes registry');
assert.ok(citySceneContent.includes('this.vehicleDummy = new THREE.Object3D();'), 'CityScene.js missing reusable vehicle transform');
assert.ok(!citySceneContent.includes('createVehicleMesh'), 'CityScene.js still builds per-vehicle mesh groups');
assert.ok(!citySceneContent.includes('this.proceduralGroup.add(vehicle);'), 'buildTraffic still adds vehicle groups instead of instances');
assert.ok(citySceneContent.includes('this.buildVehicleInstances(vehicleSpecs);'), 'buildTraffic does not delegate vehicle rendering to instancing');
assert.ok(!citySceneContent.includes('v.mesh'), 'Vehicle updates still drive per-vehicle mesh groups');

const vehiclePartStart = citySceneContent.indexOf('createVehiclePartGeometry(');
const vehiclePartEnd = citySceneContent.indexOf('\n  createVehicleInstancedMesh(', vehiclePartStart);
assert.ok(vehiclePartStart > 0 && vehiclePartEnd > vehiclePartStart, 'Cannot isolate createVehiclePartGeometry');
const vehiclePartMethod = citySceneContent.slice(vehiclePartStart, vehiclePartEnd);
assert.ok(vehiclePartMethod.includes('geo.translate(x, y, z);'), 'Vehicle part geometry must bake its local offset');
assert.ok(vehiclePartMethod.includes("geo.setAttribute('color'"), 'Vehicle light geometry must bake vertex colors');

const vehicleNodeStart = citySceneContent.indexOf('createVehicleInstancedMesh(');
const vehicleNodeEnd = citySceneContent.indexOf('\n  writeVehicleInstance(', vehicleNodeStart);
assert.ok(vehicleNodeStart > 0 && vehicleNodeEnd > vehicleNodeStart, 'Cannot isolate createVehicleInstancedMesh');
const vehicleNodeMethod = citySceneContent.slice(vehicleNodeStart, vehicleNodeEnd);
assert.ok(vehicleNodeMethod.includes('new THREE.InstancedMesh(geometry, material, count)'), 'Vehicle parts are not instanced');
assert.ok(vehicleNodeMethod.includes('mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)'), 'Vehicle instance matrices are not dynamic');
assert.ok(vehicleNodeMethod.includes('mesh.frustumCulled = false'), 'Vehicle instances must skip frustum culling');
assert.ok(vehicleNodeMethod.includes('mesh.name = name;'), 'Vehicle instanced mesh is not named');
assert.ok(!vehicleNodeMethod.includes('.castShadow = true'), 'Vehicle instances must not cast dynamic shadows');

const vehicleWriteStart = citySceneContent.indexOf('writeVehicleInstance(v) {');
const vehicleWriteEnd = citySceneContent.indexOf('\n  buildVehicleInstances(', vehicleWriteStart);
assert.ok(vehicleWriteStart > 0 && vehicleWriteEnd > vehicleWriteStart, 'Cannot isolate writeVehicleInstance');
const vehicleWriteMethod = citySceneContent.slice(vehicleWriteStart, vehicleWriteEnd);
assert.ok(vehicleWriteMethod.includes('this.vehicleDummy'), 'writeVehicleInstance must reuse the shared dummy transform');
assert.ok(vehicleWriteMethod.includes('dummy.updateMatrix()'), 'writeVehicleInstance must recompose the instance matrix');
assert.ok(vehicleWriteMethod.includes('.setMatrixAt(v.instanceIndex, dummy.matrix)'), 'writeVehicleInstance does not write instance matrices');

const vehicleBuildStart = citySceneContent.indexOf('buildVehicleInstances(vehicleSpecs) {');
const vehicleBuildEnd = citySceneContent.indexOf('\n  buildTraffic() {', vehicleBuildStart);
assert.ok(vehicleBuildStart > 0 && vehicleBuildEnd > vehicleBuildStart, 'Cannot isolate buildVehicleInstances');
const vehicleBuildMethod = citySceneContent.slice(vehicleBuildStart, vehicleBuildEnd);
['vehicle-car-body', 'vehicle-bus-body', 'vehicle-truck-cab', 'vehicle-truck-chassis', 'vehicle-truck-container', 'vehicle-car-lights', 'vehicle-bus-lights', 'vehicle-truck-lights'].forEach((name) => {
  assert.ok(vehicleBuildMethod.includes(`'${name}'`), `Missing instanced vehicle part: ${name}`);
});
assert.ok(vehicleBuildMethod.includes('setColorAt('), 'Vehicle bodies must carry per-instance colors');
assert.ok(vehicleBuildMethod.includes('vertexColors: true'), 'Merged vehicle lights must use baked vertex colors');
assert.ok(vehicleBuildMethod.includes('BufferGeometryUtils.mergeGeometries'), 'Vehicle lights must be merged per kind');
assert.ok(vehicleBuildMethod.includes('this.writeVehicleInstance('), 'Vehicle instances are not seeded with matrices');
assert.ok(!vehicleBuildMethod.includes('new THREE.PointLight'), 'Vehicle instances must not add lights');
assert.ok(!vehicleBuildMethod.includes('.castShadow = true'), 'Vehicle instances must not cast dynamic shadows');

const trafficUpdateStart = citySceneContent.indexOf('updateTraffic(delta) {');
const trafficUpdateEnd = citySceneContent.indexOf('\n  collectGlowMaterials() {', trafficUpdateStart);
assert.ok(trafficUpdateStart > 0 && trafficUpdateEnd > trafficUpdateStart, 'Cannot isolate updateTraffic');
const trafficUpdateMethod = citySceneContent.slice(trafficUpdateStart, trafficUpdateEnd);
assert.ok(trafficUpdateMethod.includes('this.writeVehicleInstance(v)'), 'updateTraffic does not refresh instance matrices');
assert.ok(trafficUpdateMethod.includes('mesh.instanceMatrix.needsUpdate = true;'), 'updateTraffic does not flag instance matrices as dirty');
assert.ok(!trafficUpdateMethod.includes('.mesh.position'), 'updateTraffic still positions per-vehicle groups');

assert.ok(mainJsContent.includes('this.pixelRatioFloor = 0.6;'), 'Adaptive resolution floor is missing');
assert.ok(mainJsContent.includes('this.fpsReduceThreshold = 48;'), 'Adaptive resolution reduce threshold is missing');
assert.ok(mainJsContent.includes('this.fpsRaiseThreshold = 57;'), 'Adaptive resolution raise threshold is missing');
assert.ok(mainJsContent.includes('this.basePixelRatio = this.computeBasePixelRatio();'), 'main.js does not compute a base pixel ratio');
assert.ok(mainJsContent.includes('this.renderer.setPixelRatio(this.basePixelRatio);'), 'initRenderer does not apply the computed base ratio');
assert.ok(mainJsContent.includes('this.updateAdaptiveResolution();'), 'animate loop does not sample the adaptive resolution');
assert.strictEqual((mainJsContent.match(/const maxDPR/g) || []).length, 1, 'DPR cap must live in a single helper');

const adaptiveStart = mainJsContent.indexOf('applyAdaptiveResolution(fps) {');
const adaptiveEnd = mainJsContent.indexOf('\n  updateAdaptiveResolution() {', adaptiveStart);
assert.ok(adaptiveStart > 0 && adaptiveEnd > adaptiveStart, 'Cannot isolate applyAdaptiveResolution');
const adaptiveMethod = mainJsContent.slice(adaptiveStart, adaptiveEnd);
assert.ok(adaptiveMethod.includes('fps < this.fpsReduceThreshold'), 'Adaptive resolution ignores low FPS');
assert.ok(adaptiveMethod.includes('Math.max(this.pixelRatioFloor, this.pixelRatio - 0.1)'), 'Adaptive resolution must lower the pixel ratio gradually');
assert.ok(adaptiveMethod.includes('fps > this.fpsRaiseThreshold'), 'Adaptive resolution ignores high FPS');
assert.ok(adaptiveMethod.includes('Math.min(this.basePixelRatio, this.pixelRatio + 0.1)'), 'Adaptive resolution must raise the pixel ratio gradually');
assert.ok(adaptiveMethod.includes('this.setPixelRatio(target)'), 'Adaptive resolution bypasses the shared pixel ratio setter');

const ratioSetterStart = mainJsContent.indexOf('setPixelRatio(ratio) {');
const ratioSetterEnd = mainJsContent.indexOf('\n  applyAdaptiveResolution(', ratioSetterStart);
assert.ok(ratioSetterStart > 0 && ratioSetterEnd > ratioSetterStart, 'Cannot isolate setPixelRatio');
const ratioSetterMethod = mainJsContent.slice(ratioSetterStart, ratioSetterEnd);
assert.ok(ratioSetterMethod.includes('this.renderer.setPixelRatio(ratio);'), 'Pixel ratio changes do not reach the renderer');
assert.ok(ratioSetterMethod.includes('this.composer.setPixelRatio(ratio);'), 'Pixel ratio changes do not reach the bloom composer');

const ratioUpdateStart = mainJsContent.indexOf('updateAdaptiveResolution() {');
const ratioUpdateEnd = mainJsContent.indexOf('\n  initCamera() {', ratioUpdateStart);
assert.ok(ratioUpdateStart > 0 && ratioUpdateEnd > ratioUpdateStart, 'Cannot isolate updateAdaptiveResolution');
const ratioUpdateMethod = mainJsContent.slice(ratioUpdateStart, ratioUpdateEnd);
assert.ok(ratioUpdateMethod.includes('performance.now()'), 'Adaptive resolution must sample wall-clock time');
assert.ok(ratioUpdateMethod.includes('this.applyAdaptiveResolution(fps)'), 'Adaptive resolution never applies its sample');

const resizeStart = mainJsContent.indexOf("window.addEventListener('resize'");
const resizeEnd = mainJsContent.indexOf('\n  animate() {', resizeStart);
assert.ok(resizeStart > 0 && resizeEnd > resizeStart, 'Cannot isolate the resize handler');
const resizeHandler = mainJsContent.slice(resizeStart, resizeEnd);
assert.ok(resizeHandler.includes('this.basePixelRatio = this.computeBasePixelRatio();'), 'Resize does not refresh the base pixel ratio');
assert.ok(resizeHandler.includes('this.setPixelRatio(this.pixelRatio);'), 'Resize bypasses the shared pixel ratio setter');

// Check 40: Verifikasi visual 2026-10-27 — perbaikan P1
const westJakartaStart = citySceneContent.indexOf('buildWestJakartaInfillAndDistricts() {');
const westJakartaEnd = citySceneContent.indexOf('\n  buildVoidBDaanMogot(', westJakartaStart);
assert.ok(westJakartaStart > 0 && westJakartaEnd > westJakartaStart, 'Cannot isolate buildWestJakartaInfillAndDistricts');
const westJakartaMethod = citySceneContent.slice(westJakartaStart, westJakartaEnd);

const daanMogotStart = westJakartaMethod.indexOf('// Koridor Gudang & Niaga Daan Mogot Pesing');
const daanMogotEnd = westJakartaMethod.indexOf('// Koridor Ruko Modern Void A', daanMogotStart);
assert.ok(daanMogotStart > 0 && daanMogotEnd > daanMogotStart, 'Cannot isolate the Daan Mogot commercial corridor');
const daanMogotCorridor = westJakartaMethod.slice(daanMogotStart, daanMogotEnd);
assert.ok(daanMogotCorridor.includes('Math.abs(x - (-1080)) < 52'), 'Daan Mogot corridor must exclude the Danau Rawa Buaya footprint (X)');
assert.ok(daanMogotCorridor.includes('Math.abs(z - (-400)) < 46'), 'Daan Mogot corridor must exclude the Danau Rawa Buaya footprint (Z)');

const landmarkById = (id) => JAKARTA_LANDMARKS.find((l) => l.id === id);
assert.deepStrictEqual(landmarkById('monas').cameraPosition, [219, 115, -113], 'Monas preset must frame the full flame');
assert.deepStrictEqual(landmarkById('daan-mogot-mall').cameraPosition, [-1260, 85, -310], 'Daan Mogot Mall preset must show the facade, not the roof');
assert.deepStrictEqual(landmarkById('mall-kelapa-gading').cameraPosition, [1100, 70, -660], 'Mall Kelapa Gading preset must show the pyramid skylight and campanile');
assert.deepStrictEqual(landmarkById('mall-kelapa-gading').cameraTarget, [1198, 18, -531], 'Mall Kelapa Gading preset must aim at the podium');
assert.deepStrictEqual(landmarkById('bandara-halim-perdanakusuma').cameraPosition, [773, 120, 1163], 'Bandara Halim preset must clear the hangar foreground');
assert.deepStrictEqual(landmarkById('bandara-halim-perdanakusuma').cameraTarget, [893, 8, 993], 'Bandara Halim preset must aim at the apron');
assert.deepStrictEqual(landmarkById('danau-rawa-buaya').cameraPosition, [-1080, 90, -250], 'Danau Rawa Buaya preset must show the full retention basin');
assert.deepStrictEqual(landmarkById('danau-rawa-buaya').cameraTarget, [-1080, 4, -400], 'Danau Rawa Buaya preset must aim at the water body');
assert.deepStrictEqual(landmarkById('scbd-district').cameraPosition, [-420, 190, 620], 'SCBD preset must not sit behind a tower');
assert.deepStrictEqual(landmarkById('scbd-district').cameraTarget, [-198, 110, 433], 'SCBD preset must keep the skyline and its label in frame');

const modelSourceContent = fs.readFileSync('./src/world/LandmarkModels.js', 'utf-8');
const halimModelStart = modelSourceContent.indexOf('static createBandaraHalim() {');
const halimModelEnd = modelSourceContent.indexOf('\n  static create', halimModelStart + 1);
assert.ok(halimModelStart > 0 && halimModelEnd > halimModelStart, 'Cannot isolate createBandaraHalim');
const halimModel = modelSourceContent.slice(halimModelStart, halimModelEnd);
assert.ok(halimModel.includes('color: 0x64748b, metalness: 0.25'), 'Halim hangar must read as slate instead of rendering black');

const scbdClusterStart = citySceneContent.indexOf('createSCBDCluster() {');
const scbdClusterEnd = citySceneContent.indexOf('\n  /**', scbdClusterStart);
assert.ok(scbdClusterStart > 0 && scbdClusterEnd > scbdClusterStart, 'Cannot isolate createSCBDCluster');
const scbdCluster = citySceneContent.slice(scbdClusterStart, scbdClusterEnd);
assert.ok(
  scbdCluster.includes('metalness: 0.5') && scbdCluster.includes('roughness: 0.25'),
  'SCBD facade must stay below 0.8 metalness so it does not render black without an environment map'
);

assert.deepStrictEqual(landmarkById('tanjung-priok').cameraPosition, [940, 150, -1070], 'Tanjung Priok preset must clear the station vault roof');
assert.deepStrictEqual(landmarkById('tanjung-priok').cameraTarget, [831, 25, -1233], 'Tanjung Priok preset must frame the cranes and station');

const tanjungModelStart = modelSourceContent.indexOf('static createTanjungPriokPort() {');
const tanjungModelEnd = modelSourceContent.indexOf('\n  /**', tanjungModelStart);
assert.ok(tanjungModelStart > 0 && tanjungModelEnd > tanjungModelStart, 'Cannot isolate createTanjungPriokPort');
const tanjungModel = modelSourceContent.slice(tanjungModelStart, tanjungModelEnd);
assert.ok(
  tanjungModel.includes('color: 0x334155, metalness: 0.35, roughness: 0.4'),
  'Tanjung Priok vault roof must read as steel instead of rendering black'
);

// Check 41: Void C Tahap 1 — 6 anchor Meruya, Kembangan Selatan, Joglo & Kreo
const voidCAnchors = [
  { id: 'universitas-mercu-buana', builder: 'createUniversitasMercuBuana' },
  { id: 'rsud-kembangan', builder: 'createRSUDKembangan' },
  { id: 'pasar-meruya', builder: 'createPasarMeruya' },
  { id: 'stasiun-kembangan', builder: 'createStasiunKembangan' },
  { id: 'bendungan-polor', builder: 'createBendunganPolor' },
  { id: 'kampung-makan-joglo', builder: 'createKampungMakanJoglo' }
];

assert.deepStrictEqual(
  JAKARTA_LANDMARKS.slice(81, 87).map((l) => l.id),
  voidCAnchors.map((a) => a.id),
  'Void C anchors must follow Cengkareng Business City as landmarks #82-#87'
);

const voidCModelSource = fs.readFileSync('src/world/LandmarkModels.js', 'utf8');
voidCAnchors.forEach(({ id, builder }) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Void C landmark ${id} not found in JAKARTA_LANDMARKS`);
  assert.ok(lm.position[0] <= -900 && lm.position[0] >= -1450, `Landmark ${id} X position ${lm.position[0]} outside Void C range [-1450, -900]`);
  assert.ok(lm.position[2] >= -500 && lm.position[2] <= 400, `Landmark ${id} Z position ${lm.position[2]} outside Void C range [-500, 400]`);
  assert.ok(lm.facts && lm.facts.length >= 3, `Landmark ${id} must have at least 3 educational facts`);
  assert.ok(lm.labelHeight >= 20, `Landmark ${id} labelHeight ${lm.labelHeight} is too low for a Void C anchor`);
  assert.ok(lm.cameraPosition[1] > 30, `Landmark ${id} camera must be elevated above street level`);
  assert.ok(lm.cameraTarget[1] < lm.cameraPosition[1], `Landmark ${id} camera must look downward at the anchor`);

  const [projectedX, projectedZ] = projectGpsToScene(lm.coordinates.lat, lm.coordinates.lng);
  const gpsDeviation = Math.hypot(lm.position[0] - projectedX, lm.position[2] - projectedZ);
  assert.ok(gpsDeviation <= 80, `Landmark ${id} deviates ${gpsDeviation.toFixed(1)} units from its GPS projection`);

  assert.ok(voidCModelSource.includes(`static ${builder}()`), `LandmarkModels missing ${builder}`);
  assert.ok(citySceneContent.includes(`"${id}":`), `CityScene.js missing builder mapping for ${id}`);
  assert.ok(indexHtmlContent.includes(`data-tour-id="${id}"`), `index.html missing tour button for ${id}`);
});

// Check 42: Void C Tahap 2 — jaringan jalan OSM, Kali Angke & infrastruktur kawasan
assert.ok(VOID_C_OSM.meta.source.includes('OpenStreetMap'), 'Void C OSM dataset missing OSM attribution');
assert.ok(VOID_C_OSM.meta.license.includes('ODbL'), 'Void C OSM dataset missing ODbL license');
assert.strictEqual(VOID_C_OSM.meta.projection, 'projectGpsToScene', 'Void C dataset must use the unscaled GPS projection');
assert.ok(VOID_C_OSM.roads.length >= 60, `Void C OSM dataset too small: ${VOID_C_OSM.roads.length} roads`);
assert.strictEqual(VOID_C_OSM.meta.roadCount, VOID_C_OSM.roads.length, 'Void C roadCount does not match roads array');

const allVoidCPoints = VOID_C_OSM.roads.flatMap((road) => road.points);
assert.strictEqual(VOID_C_OSM.meta.pointCount, allVoidCPoints.length, 'Void C pointCount does not match dataset');
allVoidCPoints.forEach(([x, z]) => {
  assert.ok(Number.isFinite(x) && Number.isFinite(z), 'Void C OSM contains a non-finite coordinate');
  assert.ok(x <= -850 && x >= -1450, `Void C OSM x=${x} outside expected Meruya/Joglo/Kreo corridor`);
  assert.ok(z <= 590 && z >= -570, `Void C OSM z=${z} outside expected Meruya/Joglo/Kreo corridor`);
});

const voidCRoadNames = new Set(VOID_C_OSM.roads.map((road) => road.name));
[
  'Jalan Meruya Ilir',
  'Jalan Meruya Selatan',
  'Jalan Meruya Utara',
  'Jalan Joglo Raya',
  'Jalan Raya Kembangan Selatan',
  'Jalan Kembangan Barat',
  'Jalan Topas Raya'
].forEach((name) => {
  assert.ok(voidCRoadNames.has(name), `Void C OSM dataset missing ${name}`);
});

const distanceToVoidCRoad = (point) => {
  let best = Infinity;
  VOID_C_OSM.roads.forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      best = Math.min(best, distanceToSegment(point, road.points[i], road.points[i + 1]));
    }
  });
  return best;
};
[
  'universitas-mercu-buana',
  'rsud-kembangan',
  'pasar-meruya',
  'kampung-makan-joglo'
].forEach((id) => {
  const lm = JAKARTA_LANDMARKS.find((landmark) => landmark.id === id);
  const distance = distanceToVoidCRoad([lm.position[0], lm.position[2]]);
  assert.ok(distance < 60, `Void C landmark ${id} is ${distance.toFixed(1)} units from the nearest OSM road`);
});

assert.ok(citySceneContent.includes('buildVoidCMeruya()'), 'CityScene.js missing buildVoidCMeruya');
assert.ok(citySceneContent.includes('this.buildVoidCMeruya();'), 'CityScene.js does not call buildVoidCMeruya');

const voidCMethodStart = citySceneContent.indexOf('buildVoidCMeruya() {');
const voidCMethodEnd = citySceneContent.indexOf('buildVoidBInfillAndIndustry() {', voidCMethodStart);
assert.ok(voidCMethodStart > 0 && voidCMethodEnd > voidCMethodStart, 'Cannot isolate buildVoidCMeruya');
const voidCMethod = citySceneContent.slice(voidCMethodStart, voidCMethodEnd);
assert.ok(!voidCMethod.includes('new THREE.PointLight'), 'Void C lamps must not add PointLights');
assert.ok(voidCMethod.includes('VOID_C_OSM'), 'Void C builder does not consume the OSM dataset');
assert.ok(voidCMethod.includes('Akses Stasiun Kembangan'), 'Void C builder missing the station access road');
assert.ok(voidCMethod.includes('Akses Bendungan Polor'), 'Void C builder missing the Bendungan Polor access road');
assert.ok(voidCMethod.includes('segmentIntersection'), 'Void C builder missing automatic bridges');
assert.ok(voidCMethod.includes('Kali Angke'), 'Void C builder missing Kali Angke inspection path');
assert.ok(voidCMethod.includes('pjuBulbMat'), 'Void C builder must share the pju-bulb material');
assert.ok(citySceneContent.includes('isNearVoidCRoad'), 'CityScene.js missing the Void C road corridor mask');
assert.ok(
  (citySceneContent.match(/isNearVoidCRoad\(/g) || []).length >= 4,
  'Void C road mask must be applied to the residential, warehouse, and ruko builders'
);

// Check 43: Void C Tahap 3 — infill urban fabric Meruya-Kembangan-Joglo-Kreo
assert.ok(citySceneContent.includes('buildVoidCInfill()'), 'CityScene.js missing buildVoidCInfill');

const voidCInfillCall = citySceneContent.indexOf('this.buildVoidCInfill();');
const voidCMeruyaCall = citySceneContent.indexOf('this.buildVoidCMeruya();');
assert.ok(
  voidCMeruyaCall > 0 && voidCInfillCall > voidCMeruyaCall,
  'buildVoidCInfill must run after buildVoidCMeruya'
);

const voidCInfillStart = citySceneContent.indexOf('buildVoidCInfill() {');
const voidCInfillEnd = citySceneContent.indexOf('buildVoidBInfillAndIndustry() {', voidCInfillStart);
assert.ok(voidCInfillStart > 0 && voidCInfillEnd > voidCInfillStart, 'Cannot isolate buildVoidCInfill');
const voidCInfillMethod = citySceneContent.slice(voidCInfillStart, voidCInfillEnd);
assert.ok(!voidCInfillMethod.includes('new THREE.PointLight'), 'Void C infill must not add PointLights');

[
  'voidc-houses',
  'voidc-shophouses',
  'voidc-house-roofs',
  'voidc-warehouses',
  'voidc-warehouse-roofs'
].forEach((name) => {
  assert.ok(voidCInfillMethod.includes(name), `Void C infill missing the ${name} instanced mesh`);
});

['Jalan Ciledug Raya', 'Jalan Joglo Raya', 'Jalan Bojong Raya'].forEach((name) => {
  assert.ok(voidCInfillMethod.includes(name), `Void C infill missing the ${name} shophouse corridor`);
});
assert.ok(voidCInfillMethod.includes('Kreo'), 'Void C infill missing the Kreo/Ciledug residential zone');
assert.ok(voidCInfillMethod.includes('VOID_C_OSM'), 'Void C infill must mask against the OSM road dataset');
assert.ok(voidCInfillMethod.includes('voidCInfillStats'), 'Void C infill must expose runtime stats');
assert.ok(voidCInfillMethod.includes('drawCalls: 6'), 'Void C infill should add six instanced draw calls');
assert.ok(voidCInfillMethod.includes('voidc-night-windows'), 'Void C infill missing the night window mesh');
assert.ok(voidCInfillMethod.includes('addInfillNightWindows'), 'Void C infill must reuse the shared night window helper');

// Check 44: Void C Tahap 4 — transit kawasan (park-and-ride + 4 feeder halte)
assert.ok(citySceneContent.includes('buildVoidCTransit()'), 'CityScene.js missing buildVoidCTransit');

const voidCTransitCall = citySceneContent.indexOf('this.buildVoidCTransit();');
assert.ok(
  voidCInfillCall > 0 && voidCTransitCall > voidCInfillCall,
  'buildVoidCTransit must run after buildVoidCInfill'
);

const voidCTransitStart = citySceneContent.indexOf('buildVoidCTransit() {');
const voidCTransitEnd = citySceneContent.indexOf('buildVoidBInfillAndIndustry() {', voidCTransitStart);
assert.ok(voidCTransitStart > 0 && voidCTransitEnd > voidCTransitStart, 'Cannot isolate buildVoidCTransit');
const voidCTransitMethod = citySceneContent.slice(voidCTransitStart, voidCTransitEnd);
assert.ok(!voidCTransitMethod.includes('new THREE.PointLight'), 'Void C transit must not add PointLights');

[
  'Halte Meruya Ilir',
  'Halte Joglo Raya',
  'Halte Ciledug Raya',
  'Halte Puri Kembangan',
  'Park and Ride Kembangan'
].forEach((name) => {
  assert.ok(voidCTransitMethod.includes(name), `Void C transit missing ${name}`);
});

['Jalan Meruya Ilir', 'Jalan Joglo Raya', 'Jalan Ciledug Raya', 'Jalan Puri Kembangan'].forEach((name) => {
  assert.ok(voidCTransitMethod.includes(name), `Void C transit feeder is not anchored to ${name}`);
});

[
  'voidc-transit-concrete',
  'voidc-transit-steel',
  'voidc-transit-sign',
  'voidc-transit-tree-trunks',
  'voidc-transit-tree-foliage'
].forEach((name) => {
  assert.ok(voidCTransitMethod.includes(name), `Void C transit missing the ${name} mesh`);
});

assert.ok(voidCTransitMethod.includes('VOID_C_OSM'), 'Void C transit must consume the OSM road dataset');
assert.ok(voidCTransitMethod.includes('voidCTransitStats'), 'Void C transit must expose runtime stats');
assert.ok(voidCTransitMethod.includes('drawCalls: 5'), 'Void C transit should add five draw calls');
assert.ok(
  voidCTransitMethod.includes('registerNightMaterial') && voidCTransitMethod.includes('voidc-transit-sign'),
  'Void C transit sign must glow at night without new draw calls'
);

// Check 45: Void D Tahap 1 — 6 anchor pesisir Kamal Muara, Kapuk, Teluk Gong & Muara Baru
const voidDAnchors = [
  { id: 'pik-avenue', builder: 'createPIKAvenue', position: [-1110, 0, -1290], marker: 'pik-avenue-mall' },
  { id: 'pantai-maju-pik', builder: 'createPantaiMajuPIK', position: [-1130, 0, -1385], marker: 'pantai-maju-promenade' },
  { id: 'twa-angke-kapuk', builder: 'createTWAAngkeKapuk', position: [-975, 0, -1235], marker: 'twa-angke-boardwalk' },
  { id: 'kampung-nelayan-kamal-muara', builder: 'createKampungNelayanKamalMuara', position: [-1230, 0, -1215], marker: 'kamal-muara-stilt-houses' },
  { id: 'teluk-gong', builder: 'createTelukGong', position: [-578, 0, -815], marker: 'teluk-gong-paifang' },
  { id: 'pps-nizam-zachman', builder: 'createPPSNizamZachman', position: [-430, 0, -1255], marker: 'pps-nizam-quay' }
];

assert.deepStrictEqual(
  JAKARTA_LANDMARKS.slice(87, 93).map((l) => l.id),
  voidDAnchors.map((a) => a.id),
  'Void D anchors must follow Kampung Makan Joglo as landmarks #88-#93'
);

const voidDModelSource = fs.readFileSync('src/world/LandmarkModels.js', 'utf8');
voidDAnchors.forEach(({ id, builder, position, marker }) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Void D landmark ${id} not found in JAKARTA_LANDMARKS`);
  assert.deepStrictEqual(lm.position, position, `Void D landmark ${id} position changed without updating the layout`);
  assert.ok(lm.position[0] <= -350 && lm.position[0] >= -1300, `Landmark ${id} X position ${lm.position[0]} outside Void D range [-1300, -350]`);
  assert.ok(lm.position[2] >= -1450 && lm.position[2] <= -780, `Landmark ${id} Z position ${lm.position[2]} outside Void D range [-1450, -780]`);
  assert.ok(lm.facts && lm.facts.length >= 3, `Landmark ${id} must have at least 3 educational facts`);
  assert.ok(lm.labelHeight >= 20, `Landmark ${id} labelHeight ${lm.labelHeight} is too low for a Void D anchor`);
  assert.ok(lm.cameraPosition[1] > 30, `Landmark ${id} camera must be elevated above street level`);
  assert.ok(lm.cameraTarget[1] < lm.cameraPosition[1], `Landmark ${id} camera must look downward at the anchor`);

  const [projectedX, projectedZ] = projectGpsToScene(lm.coordinates.lat, lm.coordinates.lng);
  const gpsDeviation = Math.hypot(lm.position[0] - projectedX, lm.position[2] - projectedZ);
  assert.ok(gpsDeviation <= 80, `Landmark ${id} deviates ${gpsDeviation.toFixed(1)} units from its GPS projection`);

  const builderStart = voidDModelSource.indexOf(`static ${builder}()`);
  const builderEnd = voidDModelSource.indexOf('static ', builderStart + 10);
  assert.ok(builderStart > 0, `LandmarkModels missing ${builder}`);
  const builderSource = voidDModelSource.slice(builderStart, builderEnd > builderStart ? builderEnd : undefined);
  assert.ok(builderSource.includes(marker), `LandmarkModels ${builder} missing the ${marker} mesh`);
  assert.ok(!builderSource.includes('new THREE.PointLight'), `${builder} must not add PointLights`);

  assert.ok(citySceneContent.includes(`"${id}":`), `CityScene.js missing builder mapping for ${id}`);
  assert.ok(indexHtmlContent.includes(`data-tour-id="${id}"`), `index.html missing tour button for ${id}`);
});

for (let i = 0; i < voidDAnchors.length; i++) {
  for (let j = i + 1; j < voidDAnchors.length; j++) {
    const a = voidDAnchors[i].position;
    const b = voidDAnchors[j].position;
    const gap = Math.hypot(a[0] - b[0], a[2] - b[2]);
    assert.ok(gap >= 70, `Void D anchors ${voidDAnchors[i].id} and ${voidDAnchors[j].id} are only ${gap.toFixed(0)} units apart`);
  }
}

// Check 46: Void D Tahap 2 — jaringan jalan OSM, tata air & infrastruktur pesisir
assert.ok(VOID_D_OSM.meta.source.includes('OpenStreetMap'), 'Void D OSM dataset missing OSM attribution');
assert.ok(VOID_D_OSM.meta.license.includes('ODbL'), 'Void D OSM dataset missing ODbL license');
assert.strictEqual(VOID_D_OSM.meta.projection, 'projectGpsToScene', 'Void D dataset must use the unscaled GPS projection');
assert.deepStrictEqual(
  VOID_D_OSM.meta.clipBox,
  { minX: -1340, maxX: -360, minZ: -1440, maxZ: -740 },
  'Void D clip box changed without updating the layout'
);
assert.strictEqual(VOID_D_OSM.roads.length, 201, `Void D OSM dataset changed size: ${VOID_D_OSM.roads.length} roads`);
assert.strictEqual(VOID_D_OSM.meta.roadCount, VOID_D_OSM.roads.length, 'Void D roadCount does not match roads array');

const allVoidDPoints = VOID_D_OSM.roads.flatMap((road) => road.points);
assert.strictEqual(VOID_D_OSM.meta.roadPointCount, allVoidDPoints.length, 'Void D roadPointCount does not match dataset');
assert.strictEqual(allVoidDPoints.length, 590, `Void D road point count changed: ${allVoidDPoints.length}`);
assert.strictEqual(new Set(VOID_D_OSM.roads.map((road) => road.name)).size, 94, 'Void D road name coverage changed');
allVoidDPoints.forEach(([x, z]) => {
  assert.ok(Number.isFinite(x) && Number.isFinite(z), 'Void D OSM contains a non-finite coordinate');
  assert.ok(x <= -355 && x >= -1345, `Void D OSM x=${x} outside the Penjaringan corridor`);
  assert.ok(z <= -725 && z >= -1445, `Void D OSM z=${z} outside the Penjaringan corridor`);
});

const voidDRoadNames = new Set(VOID_D_OSM.roads.map((road) => road.name));
[
  'Jalan Pantai Indah Kapuk',
  'Jalan Pantai Indah Selatan 1',
  'Jalan Kapuk Raya',
  'Jalan Teluk Gong Raya',
  'Jalan Marina Indah',
  'Jalan Pantai Indah Utara 1',
  'Jalan Muara Baru Pompa'
].forEach((name) => {
  assert.ok(voidDRoadNames.has(name), `Void D OSM dataset missing ${name}`);
});

const distanceToVoidDRoad = (point) => {
  let best = Infinity;
  VOID_D_OSM.roads.forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      best = Math.min(best, distanceToSegment(point, road.points[i], road.points[i + 1]));
    }
  });
  return best;
};
voidDAnchors.forEach(({ id }) => {
  const lm = JAKARTA_LANDMARKS.find((landmark) => landmark.id === id);
  const distance = distanceToVoidDRoad([lm.position[0], lm.position[2]]);
  assert.ok(distance < 60, `Void D landmark ${id} is ${distance.toFixed(1)} units from the nearest OSM road`);
});

assert.strictEqual(VOID_D_OSM.waterways.length, 31, `Void D waterway count changed: ${VOID_D_OSM.waterways.length}`);
assert.strictEqual(VOID_D_OSM.meta.waterwayCount, VOID_D_OSM.waterways.length, 'Void D waterwayCount mismatch');
const allVoidDWaterPoints = VOID_D_OSM.waterways.flatMap((waterway) => waterway.points);
assert.strictEqual(allVoidDWaterPoints.length, 156, `Void D waterway point count changed: ${allVoidDWaterPoints.length}`);
assert.strictEqual(VOID_D_OSM.meta.waterPointCount, allVoidDWaterPoints.length, 'Void D waterPointCount mismatch');
VOID_D_OSM.waterways.forEach((waterway) => {
  assert.ok(['river', 'canal', 'stream', 'drain'].includes(waterway.kind), `Unexpected Void D waterway kind ${waterway.kind}`);
  assert.ok(waterway.name !== 'Kanal Banjir Barat', 'Kanal Banjir Barat is already rendered by renderOSMLayers');
  assert.ok(waterway.width > 0, 'Void D waterway must have a positive width');
});

assert.strictEqual(VOID_D_OSM.waterPolygons.length, 19, `Void D water polygon count changed: ${VOID_D_OSM.waterPolygons.length}`);
assert.strictEqual(VOID_D_OSM.meta.waterPolygonCount, VOID_D_OSM.waterPolygons.length, 'Void D waterPolygonCount mismatch');
const allVoidDPolygonPoints = VOID_D_OSM.waterPolygons.flatMap((polygon) => polygon.points);
assert.strictEqual(allVoidDPolygonPoints.length, 225, `Void D water polygon point count changed: ${allVoidDPolygonPoints.length}`);
assert.strictEqual(VOID_D_OSM.meta.waterPolygonPointCount, allVoidDPolygonPoints.length, 'Void D waterPolygonPointCount mismatch');
allVoidDPolygonPoints.forEach(([x, z]) => {
  assert.ok(Number.isFinite(x) && Number.isFinite(z), 'Void D water polygon contains a non-finite coordinate');
});
assert.ok(
  !VOID_D_OSM.waterPolygons.some((polygon) => polygon.name === 'Waduk Pluit'),
  'Waduk Pluit is already built by buildNorthJakartaInfrastructure'
);

assert.ok(citySceneContent.includes("from '../data/void_d_osm.js'"), 'CityScene.js does not import the Void D OSM dataset');
assert.ok(citySceneContent.includes('buildVoidDPenjaringan()'), 'CityScene.js missing buildVoidDPenjaringan');

const voidDNetworkCall = citySceneContent.indexOf('this.buildVoidDPenjaringan();');
const voidCTransitCallIndex = citySceneContent.indexOf('this.buildVoidCTransit();');
assert.ok(voidDNetworkCall > 0, 'CityScene.js does not call buildVoidDPenjaringan');
assert.ok(
  voidDNetworkCall > voidCTransitCallIndex,
  'buildVoidDPenjaringan must run after buildVoidCTransit'
);

const voidDNetworkStart = citySceneContent.indexOf('buildVoidDPenjaringan() {');
const voidDNetworkEnd = citySceneContent.indexOf('buildVoidBInfillAndIndustry() {', voidDNetworkStart);
assert.ok(voidDNetworkStart > 0 && voidDNetworkEnd > voidDNetworkStart, 'Cannot isolate buildVoidDPenjaringan');
const voidDNetworkMethod = citySceneContent.slice(voidDNetworkStart, voidDNetworkEnd);
assert.ok(voidDNetworkMethod.includes('VOID_D_OSM'), 'Void D builder does not consume the OSM dataset');
assert.ok(voidDNetworkMethod.includes('segmentIntersection'), 'Void D builder missing automatic bridges');
assert.ok(voidDNetworkMethod.includes('pjuBulbMat'), 'Void D builder must share the pju-bulb material');
assert.ok(voidDNetworkMethod.includes('voidDOsmStats'), 'Void D builder must expose runtime stats');
assert.ok(!voidDNetworkMethod.includes('new THREE.PointLight'), 'Void D network must not add PointLights');
assert.ok(!voidDNetworkMethod.includes('nightMaterials.push'), 'Void D network must not register new night materials');

[
  'voidd-roads',
  'voidd-sidewalks',
  'voidd-water',
  'voidd-bridges',
  'voidd-pju-poles',
  'voidd-pju-bulbs',
  'voidd-tree-trunks',
  'voidd-tree-foliage'
].forEach((name) => {
  assert.ok(voidDNetworkMethod.includes(name), `Void D builder missing the ${name} mesh`);
});

assert.ok(citySceneContent.includes('isNearVoidDRoad(x, z, clearance = 12)'), 'CityScene.js missing the Void D road corridor mask');

// Check 47: Void D Tahap 3 — infill urban fabric Kawasan Penjaringan
assert.ok(citySceneContent.includes('buildVoidDInfill()'), 'CityScene.js missing buildVoidDInfill');

const voidDInfillCall = citySceneContent.indexOf('this.buildVoidDInfill();');
assert.ok(
  voidDInfillCall > voidDNetworkCall,
  'buildVoidDInfill must run after buildVoidDPenjaringan'
);

const voidDInfillStart = citySceneContent.indexOf('buildVoidDInfill() {');
const voidDInfillEnd = citySceneContent.indexOf('buildVoidBInfillAndIndustry() {', voidDInfillStart);
assert.ok(voidDInfillStart > 0 && voidDInfillEnd > voidDInfillStart, 'Cannot isolate buildVoidDInfill');
const voidDInfillMethod = citySceneContent.slice(voidDInfillStart, voidDInfillEnd);
assert.ok(!voidDInfillMethod.includes('new THREE.PointLight'), 'Void D infill must not add PointLights');
assert.ok(voidDInfillMethod.includes('addInfillNightWindows'), 'Void D infill must reuse the shared night window helper');
assert.ok(voidDInfillMethod.includes('voidd-night-windows'), 'Void D infill missing the night window mesh');
assert.ok(voidDInfillMethod.includes('VOID_D_OSM'), 'Void D infill must mask against the OSM road dataset');
assert.ok(voidDInfillMethod.includes('isNearVoidDRoad'), 'Void D infill missing the road corridor mask');
assert.ok(voidDInfillMethod.includes('waterPolygons'), 'Void D infill must exclude water polygons');
assert.ok(voidDInfillMethod.includes('pointInWaterPolygon'), 'Void D infill missing the water polygon test');
assert.ok(voidDInfillMethod.includes('anchorExclusions'), 'Void D infill must exclude the six anchor pads');
assert.ok(voidDInfillMethod.includes('pluitExclusion'), 'Void D infill must exclude the Pluit procedural block');
assert.ok(voidDInfillMethod.includes('voidDInfillStats'), 'Void D infill must expose runtime stats');
assert.ok(voidDInfillMethod.includes('drawCalls: 6'), 'Void D infill should add six instanced draw calls');
assert.ok(
  voidDInfillMethod.includes('ignoreWays') &&
    voidDInfillMethod.includes('placeShophouseRow(roadWidth, chain.points, chain.ways)'),
  'Void D shophouse rows must ignore their own road corridor'
);

[
  'voidd-houses',
  'voidd-shophouses',
  'voidd-house-roofs',
  'voidd-warehouses',
  'voidd-warehouse-roofs'
].forEach((name) => {
  assert.ok(voidDInfillMethod.includes(name), `Void D infill missing the ${name} instanced mesh`);
});

['Kamal Muara', 'Cordoba', 'Kapuk Muara', 'Kapuk Utara', 'Teluk Gong'].forEach((zone) => {
  assert.ok(voidDInfillMethod.includes(zone), `Void D infill missing the ${zone} residential zone`);
});

[
  'Jalan Kapuk Raya',
  'Jalan Teluk Gong Raya',
  'Jalan Pantai Indah Selatan 1',
  'Jalan Pantai Indah Utara 1',
  'Jalan Kapuk Muara Raya',
  'Jalan Pluit Utara Raya',
  'Jalan Pantai Indah Kapuk'
].forEach((name) => {
  assert.ok(voidDInfillMethod.includes(name), `Void D infill missing the ${name} shophouse corridor`);
});

['Kamal Cengkareng', 'Muara Baru'].forEach((zone) => {
  assert.ok(voidDInfillMethod.includes(zone), `Void D infill missing the ${zone} warehouse cluster`);
});

// Check 48: Void D Tahap 4 — hub transit TWA Angke Kapuk & enam feeder halte
assert.ok(citySceneContent.includes('buildVoidDTransit()'), 'CityScene.js missing buildVoidDTransit');

const voidDTransitCall = citySceneContent.indexOf('this.buildVoidDTransit();');
assert.ok(
  voidDTransitCall > voidDInfillCall,
  'buildVoidDTransit must run after buildVoidDInfill'
);

const voidDTransitStart = citySceneContent.indexOf('buildVoidDTransit() {');
const voidDTransitEnd = citySceneContent.indexOf('buildVoidBInfillAndIndustry() {', voidDTransitStart);
assert.ok(voidDTransitStart > 0 && voidDTransitEnd > voidDTransitStart, 'Cannot isolate buildVoidDTransit');
const voidDTransitMethod = citySceneContent.slice(voidDTransitStart, voidDTransitEnd);
assert.ok(!voidDTransitMethod.includes('new THREE.PointLight'), 'Void D transit must not add PointLights');
assert.ok(
  voidDTransitMethod.includes('registerNightMaterial') && voidDTransitMethod.includes('voidd-transit-sign'),
  'Void D transit sign must glow at night without new draw calls'
);
assert.ok(voidDTransitMethod.includes('VOID_D_OSM'), 'Void D transit must anchor halte to the OSM road dataset');
assert.ok(voidDTransitMethod.includes('findRoadPoint'), 'Void D transit missing the nearest-road helper');
assert.ok(
  voidDTransitMethod.includes('Park and Ride TWA Angke Kapuk'),
  'Void D transit missing the TWA Angke Kapuk park-and-ride'
);
assert.ok(
  voidDTransitMethod.includes('Jalan Pantai Indah Utara 2'),
  'Void D transit park-and-ride must use Jalan Pantai Indah Utara 2 access'
);
assert.ok(voidDTransitMethod.includes('voidDTransitStats'), 'Void D transit must expose runtime stats');
assert.ok(voidDTransitMethod.includes('drawCalls: 5'), 'Void D transit should add five draw calls');

[
  'voidd-transit-concrete',
  'voidd-transit-steel',
  'voidd-transit-sign',
  'voidd-transit-tree-trunks',
  'voidd-transit-tree-foliage'
].forEach((name) => {
  assert.ok(voidDTransitMethod.includes(name), `Void D transit missing the ${name} mesh`);
});

[
  'Halte PIK Avenue',
  'Halte TWA Angke Kapuk',
  'Halte Kapuk Raya',
  'Halte Kapuk Muara',
  'Halte Teluk Gong',
  'Halte Muara Baru'
].forEach((name) => {
  assert.ok(voidDTransitMethod.includes(name), `Void D transit missing the ${name} feeder`);
});

// Check 49: Void E Tahap 1 — 6 anchor Cilincing, Marunda, Rorotan & KBN Cakung
const voidEAnchors = [
  { id: 'rusunawa-marunda', builder: 'createRusunawaMarunda', position: [1985, 0, -1415], marker: 'rusunawa-marunda-towers' },
  { id: 'rumah-si-pitung', builder: 'createRumahSiPitung', position: [1870, 0, -1438], marker: 'si-pitung-rumah-panggung' },
  { id: 'kawasan-logistik-marunda', builder: 'createKawasanLogistikMarunda', position: [1720, 0, -1125], marker: 'logistik-marunda-warehouses' },
  { id: 'rusunawa-nagrak-cilincing', builder: 'createRusunawaNagrak', position: [1765, 0, -995], marker: 'rusunawa-nagrak-towers' },
  { id: 'kbn-cakung', builder: 'createKBNCakung', position: [1560, 0, -720], marker: 'kbn-cakung-gate' },
  { id: 'kampung-rorotan', builder: 'createKampungRorotan', position: [1885, 0, -700], marker: 'rorotan-kampung-houses' }
];

assert.deepStrictEqual(
  JAKARTA_LANDMARKS.slice(93, 99).map((l) => l.id),
  voidEAnchors.map((a) => a.id),
  'Void E anchors must follow PPS Nizam Zachman as landmarks #94-#99'
);

const voidEModelSource = fs.readFileSync('src/world/LandmarkModels.js', 'utf8');
voidEAnchors.forEach(({ id, builder, position, marker }) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Void E landmark ${id} not found in JAKARTA_LANDMARKS`);
  assert.deepStrictEqual(lm.position, position, `Void E landmark ${id} position changed without updating the layout`);
  assert.ok(lm.position[0] >= 1500 && lm.position[0] <= 2050, `Landmark ${id} X position ${lm.position[0]} outside Void E range [1500, 2050]`);
  assert.ok(lm.position[2] >= -1460 && lm.position[2] <= -660, `Landmark ${id} Z position ${lm.position[2]} outside Void E range [-1460, -660]`);
  assert.ok(lm.facts && lm.facts.length >= 3, `Landmark ${id} must have at least 3 educational facts`);
  assert.ok(lm.labelHeight >= 20, `Landmark ${id} labelHeight ${lm.labelHeight} is too low for a Void E anchor`);
  assert.ok(lm.cameraPosition[1] > 30, `Landmark ${id} camera must be elevated above street level`);
  assert.ok(lm.cameraTarget[1] < lm.cameraPosition[1], `Landmark ${id} camera must look downward at the anchor`);

  const [projectedX, projectedZ] = projectGpsToScene(lm.coordinates.lat, lm.coordinates.lng);
  const gpsDeviation = Math.hypot(lm.position[0] - projectedX, lm.position[2] - projectedZ);
  assert.ok(gpsDeviation <= 80, `Landmark ${id} deviates ${gpsDeviation.toFixed(1)} units from its GPS projection`);

  const builderStart = voidEModelSource.indexOf(`static ${builder}()`);
  const builderEnd = voidEModelSource.indexOf('static ', builderStart + 10);
  assert.ok(builderStart > 0, `LandmarkModels missing ${builder}`);
  const builderSource = voidEModelSource.slice(builderStart, builderEnd > builderStart ? builderEnd : undefined);
  assert.ok(builderSource.includes(marker), `LandmarkModels ${builder} missing the ${marker} mesh`);
  assert.ok(!builderSource.includes('new THREE.PointLight'), `${builder} must not add PointLights`);

  assert.ok(citySceneContent.includes(`"${id}":`), `CityScene.js missing builder mapping for ${id}`);
  assert.ok(indexHtmlContent.includes(`data-tour-id="${id}"`), `index.html missing tour button for ${id}`);
});

for (let i = 0; i < voidEAnchors.length; i++) {
  for (let j = i + 1; j < voidEAnchors.length; j++) {
    const a = voidEAnchors[i].position;
    const b = voidEAnchors[j].position;
    const gap = Math.hypot(a[0] - b[0], a[2] - b[2]);
    assert.ok(gap >= 70, `Void E anchors ${voidEAnchors[i].id} and ${voidEAnchors[j].id} are only ${gap.toFixed(0)} units apart`);
  }
}

// Rusunawa Marunda di x 1985 dan Cibubur di z 2508 menuntut pelat tanah
// dan grid yang lebih luas dari 5.000 unit.
assert.ok(citySceneContent.includes('new THREE.PlaneGeometry(5800, 5800)'), 'Ground plane must expand to 5800 units for Void E and Void G');
assert.ok(citySceneContent.includes('new THREE.GridHelper(5600, 280'), 'Ground grid must expand to 5600 units for Void E and Void G');
voidEAnchors.forEach(({ id, position }) => {
  assert.ok(Math.abs(position[0]) + 80 <= 2800, `Void E landmark ${id} sits outside the 5600-unit grid`);
  assert.ok(Math.abs(position[2]) + 80 <= 2800, `Void E landmark ${id} sits outside the 5600-unit grid`);
});

// Check 50: Void E Tahap 2 — dataset OSM jalan & waterway Cilincing–Marunda
assert.ok(VOID_E_OSM.meta.source.includes('OpenStreetMap'), 'Void E OSM dataset missing OSM attribution');
assert.ok(VOID_E_OSM.meta.license.includes('ODbL'), 'Void E OSM dataset missing ODbL license');
assert.strictEqual(VOID_E_OSM.meta.retrieved, '2026-10-29', 'Void E dataset retrieval date changed');
assert.ok(VOID_E_OSM.meta.api.includes('overpass.openstreetmap.fr'), 'Void E dataset must record the Overpass mirror');
assert.ok(VOID_E_OSM.meta.api.includes('2026-08-10'), 'Void E dataset must record the OSM base snapshot');
assert.strictEqual(VOID_E_OSM.meta.projection, 'projectGpsToScene', 'Void E dataset must use the unscaled GPS projection');
assert.deepStrictEqual(
  VOID_E_OSM.meta.projectionConstants,
  { originLng: 106.823048, originLat: -6.194957, scaleX: 14100, scaleZ: 14180 },
  'Void E projection constants drifted from projectGpsToScene'
);
assert.deepStrictEqual(
  VOID_E_OSM.meta.bbox,
  { south: -6.163, west: 106.915, north: -6.079, east: 106.988 },
  'Void E source bbox changed without re-downloading the extract'
);
assert.deepStrictEqual(
  VOID_E_OSM.meta.clipBox,
  { minX: 1330, maxX: 2300, minZ: -1620, maxZ: -470 },
  'Void E clip box changed without updating the layout'
);
assert.strictEqual(VOID_E_OSM.meta.simplification, 2, 'Void E simplification must stay at Douglas–Peucker 2.0');
assert.ok(VOID_E_OSM.meta.note.includes('konektor akses'), 'Void E dataset must note the Nagrak access connector plan');

assert.strictEqual(VOID_E_OSM.roads.length, 148, `Void E OSM dataset changed size: ${VOID_E_OSM.roads.length} roads`);
assert.strictEqual(VOID_E_OSM.meta.roadCount, VOID_E_OSM.roads.length, 'Void E roadCount does not match roads array');
const allVoidEPoints = VOID_E_OSM.roads.flatMap((road) => road.points);
assert.strictEqual(VOID_E_OSM.meta.roadPointCount, allVoidEPoints.length, 'Void E roadPointCount does not match dataset');
assert.strictEqual(allVoidEPoints.length, 640, `Void E road point count changed: ${allVoidEPoints.length}`);
assert.strictEqual(new Set(VOID_E_OSM.roads.map((road) => road.name)).size, 102, 'Void E road name coverage changed');

const voidEWidths = {
  trunk: 16,
  primary: 18,
  secondary: 14,
  tertiary: 11,
  unclassified: 9,
  residential: 8,
  living_street: 7,
  service: 6
};
VOID_E_OSM.roads.forEach((road) => {
  assert.ok(road.name && road.name.trim().length > 0, 'Void E road missing a name');
  assert.ok(voidEWidths[road.type] === road.width, `Void E road ${road.name} has unexpected type/width ${road.type}/${road.width}`);
  assert.ok(road.points.length >= 2, `Void E road ${road.name} has fewer than two points`);
  road.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), `Void E road ${road.name} contains a non-finite coordinate`);
    assert.ok(x >= 1330 && x <= 2300 && z >= -1620 && z <= -470, `Void E road ${road.name} point ${x}/${z} outside the clip box`);
  });
});

const voidERoadNames = new Set(VOID_E_OSM.roads.map((road) => road.name));
[
  'Jalan Raya Cilincing',
  'Jalan Cakung Cilincing Timur',
  'Jalan Cakung Cilincing Barat',
  'Jalan Raya Cilincing Koja',
  'Jalan Rusun Marunda',
  'Jalan Marunda Kongsi',
  'Jalan Jayapura',
  'Jalan Rorotan XI',
  'Jalan Komplek Militer',
  'Jalan Sungai Tiram'
].forEach((name) => {
  assert.ok(voidERoadNames.has(name), `Void E OSM dataset missing ${name}`);
});
['Jalan Inspeksi BKT', 'Jalan Inspeksi Marunda Kepu', 'Jalan Pinggir Dermaga'].forEach((name) => {
  assert.ok(!voidERoadNames.has(name), `${name} rides the Kanal Banjir Timur centerline and must stay excluded`);
});

const distanceToVoidERoad = (point) => {
  let best = Infinity;
  VOID_E_OSM.roads.forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      best = Math.min(best, distanceToSegment(point, road.points[i], road.points[i + 1]));
    }
  });
  return best;
};
voidEAnchors.forEach(({ id }) => {
  const lm = JAKARTA_LANDMARKS.find((landmark) => landmark.id === id);
  const distance = distanceToVoidERoad([lm.position[0], lm.position[2]]);
  const limit = id === 'rusunawa-nagrak-cilincing' ? 85 : 60;
  assert.ok(distance < limit, `Void E landmark ${id} is ${distance.toFixed(1)} units from the nearest OSM road`);
});

assert.strictEqual(VOID_E_OSM.waterways.length, 23, `Void E waterway count changed: ${VOID_E_OSM.waterways.length}`);
assert.strictEqual(VOID_E_OSM.meta.waterwayCount, VOID_E_OSM.waterways.length, 'Void E waterwayCount mismatch');
const allVoidEWaterPoints = VOID_E_OSM.waterways.flatMap((waterway) => waterway.points);
assert.strictEqual(allVoidEWaterPoints.length, 252, `Void E waterway point count changed: ${allVoidEWaterPoints.length}`);
assert.strictEqual(VOID_E_OSM.meta.waterPointCount, allVoidEWaterPoints.length, 'Void E waterPointCount mismatch');
VOID_E_OSM.waterways.forEach((waterway) => {
  assert.ok(['canal', 'river', 'stream'].includes(waterway.kind), `Unexpected Void E waterway kind ${waterway.kind}`);
  assert.ok(waterway.width > 0, 'Void E waterway must have a positive width');
  assert.ok(waterway.points.length >= 2, 'Void E waterway has fewer than two points');
  waterway.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), 'Void E waterway contains a non-finite coordinate');
    assert.ok(x >= 1330 && x <= 2300 && z >= -1620 && z <= -470, `Void E waterway point ${x}/${z} outside the clip box`);
  });
});

const voidEWaterNames = new Set(VOID_E_OSM.waterways.map((waterway) => waterway.name));
['Kanal Banjir Timur', 'Cakung', 'Blencong', 'Tiram', 'Rawa Malang'].forEach((name) => {
  assert.ok(voidEWaterNames.has(name), `Void E OSM dataset missing ${name} waterway`);
});
const voidEKbt = VOID_E_OSM.waterways.filter((waterway) => waterway.name === 'Kanal Banjir Timur');
assert.ok(voidEKbt.length > 0, 'Void E dataset missing the Kanal Banjir Timur segment');
voidEKbt.forEach((waterway) => {
  assert.ok(waterway.width === 24, `Kanal Banjir Timur width changed to ${waterway.width}`);
  waterway.points.forEach(([, z]) => {
    assert.ok(z <= -470, 'Kanal Banjir Timur in Void E must stay south of the procedural segment that ends at z -250');
  });
});

const voidEKbtWidth = Math.max(...voidEKbt.map((waterway) => waterway.width));
VOID_E_OSM.roads.forEach((road) => {
  const clearance = voidEKbtWidth / 2 + road.width / 2 + 1;
  const samples = road.points.filter(([x, z]) => {
    return voidEKbt.some((waterway) => {
      for (let i = 0; i < waterway.points.length - 1; i++) {
        if (distanceToSegment([x, z], waterway.points[i], waterway.points[i + 1]) < clearance) return true;
      }
      return false;
    });
  });
  assert.ok(
    samples.length / road.points.length < 0.6,
    `Void E road ${road.name} rides the Kanal Banjir Timur centerline`
  );
});

// Check 51: Void E Tahap 2 — builder jaringan jalan, air & infrastruktur Cilincing–Marunda
assert.ok(citySceneContent.includes("from '../data/void_e_osm.js'"), 'CityScene.js does not import the Void E OSM dataset');
assert.ok(citySceneContent.includes('this.buildVoidECilincing();'), 'CityScene.js does not call buildVoidECilincing');

const voidENetworkCallIndex = citySceneContent.indexOf('this.buildVoidECilincing();');
const voidDTransitCallIndex = citySceneContent.indexOf('this.buildVoidDTransit();');
assert.ok(voidENetworkCallIndex > 0, 'CityScene.js does not call buildVoidECilincing');
assert.ok(
  voidENetworkCallIndex > voidDTransitCallIndex,
  'buildVoidECilincing must run after buildVoidDTransit'
);

const voidENetworkStart = citySceneContent.indexOf('buildVoidECilincing() {');
const voidENetworkEnd = citySceneContent.indexOf('buildVoidDInfill() {', voidENetworkStart);
assert.ok(voidENetworkStart > 0 && voidENetworkEnd > voidENetworkStart, 'Cannot isolate buildVoidECilincing');
const voidENetworkMethod = citySceneContent.slice(voidENetworkStart, voidENetworkEnd);
assert.ok(voidENetworkMethod.includes('VOID_E_OSM'), 'Void E builder does not consume the OSM dataset');
assert.ok(voidENetworkMethod.includes('segmentIntersection'), 'Void E builder missing automatic bridges');
assert.ok(voidENetworkMethod.includes('insideAnchorSite'), 'Void E builder must mask bridges and props inside anchor sites');
assert.ok(voidENetworkMethod.includes('pjuBulbMat'), 'Void E builder must share the pju-bulb material');
assert.ok(voidENetworkMethod.includes('Akses Rusunawa Nagrak'), 'Void E builder missing the Nagrak access connector');
assert.ok(
  voidENetworkMethod.includes('Jalan Komplek Militer'),
  'Nagrak access connector must anchor on Jalan Komplek Militer'
);
assert.ok(voidENetworkMethod.includes('voidEOsmStats'), 'Void E builder must expose runtime stats');
assert.ok(voidENetworkMethod.includes('drawCalls: 8'), 'Void E network should add eight draw calls');
assert.ok(!voidENetworkMethod.includes('new THREE.PointLight'), 'Void E network must not add PointLights');
assert.ok(!voidENetworkMethod.includes('nightMaterials.push'), 'Void E network must not register new night materials');

[
  'voide-roads',
  'voide-sidewalks',
  'voide-water',
  'voide-bridges',
  'voide-pju-poles',
  'voide-pju-bulbs',
  'voide-tree-trunks',
  'voide-tree-foliage'
].forEach((name) => {
  assert.ok(voidENetworkMethod.includes(name), `Void E builder missing the ${name} mesh`);
});

[
  'Jalan Raya Cilincing',
  'Jalan Cakung Cilincing Timur',
  'Jalan Cakung Cilincing Barat',
  'Jalan Raya Cilincing Koja',
  'Jalan Rusun Marunda',
  'Jalan Rorotan XI',
  'Jalan Komplek Militer'
].forEach((name) => {
  assert.ok(voidENetworkMethod.includes(name), `Void E PJU corridor list missing ${name}`);
});

['Kanal Banjir Timur', 'Cakung'].forEach((name) => {
  assert.ok(voidENetworkMethod.includes(name), `Void E tree bank list missing ${name}`);
});

assert.ok(citySceneContent.includes('getVoidERoadSegments()'), 'CityScene.js missing the Void E road segment cache');
assert.ok(citySceneContent.includes('isNearVoidERoad(x, z, clearance = 12)'), 'CityScene.js missing the Void E road corridor mask');

// Check 52: Void E Tahap 3 — infill urban fabric Cilincing–Marunda–Rorotan–KBN Cakung
assert.ok(citySceneContent.includes('buildVoidEInfill()'), 'CityScene.js missing buildVoidEInfill');

const voidEInfillCall = citySceneContent.indexOf('this.buildVoidEInfill();');
assert.ok(
  voidEInfillCall > voidENetworkCallIndex,
  'buildVoidEInfill must run after buildVoidECilincing'
);
assert.ok(
  voidEInfillCall < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidEInfill must run before buildVoidBInfillAndIndustry'
);

const voidEInfillStart = citySceneContent.indexOf('buildVoidEInfill() {');
const voidEInfillEnd = citySceneContent.indexOf('buildVoidDInfill() {', voidEInfillStart);
assert.ok(voidEInfillStart > 0 && voidEInfillEnd > voidEInfillStart, 'Cannot isolate buildVoidEInfill');
const voidEInfillMethod = citySceneContent.slice(voidEInfillStart, voidEInfillEnd);
assert.ok(!voidEInfillMethod.includes('new THREE.PointLight'), 'Void E infill must not add PointLights');
assert.ok(voidEInfillMethod.includes('addInfillNightWindows'), 'Void E infill must reuse the shared night window helper');
assert.ok(voidEInfillMethod.includes('voide-night-windows'), 'Void E infill missing the night window mesh');
assert.ok(voidEInfillMethod.includes('VOID_E_OSM'), 'Void E infill must mask against the OSM water dataset');
assert.ok(voidEInfillMethod.includes('isNearVoidERoad'), 'Void E infill missing the road corridor mask');
assert.ok(voidEInfillMethod.includes('isNearVoidEWater'), 'Void E infill missing the waterway mask');
assert.ok(voidEInfillMethod.includes('anchorExclusions'), 'Void E infill must exclude the six anchor pads');
assert.ok(voidEInfillMethod.includes('insideAnchorExclusion'), 'Void E infill missing the anchor exclusion test');
assert.ok(voidEInfillMethod.includes('voidEInfillStats'), 'Void E infill must expose runtime stats');
assert.ok(voidEInfillMethod.includes('drawCalls: 6'), 'Void E infill should add six instanced draw calls');
assert.ok(
  voidEInfillMethod.includes('ignoreWays') &&
    voidEInfillMethod.includes('placeShophouseRow(roadWidth, chain.points, chain.ways)'),
  'Void E shophouse rows must ignore their own road corridor'
);

[
  'voide-houses',
  'voide-shophouses',
  'voide-house-roofs',
  'voide-warehouses',
  'voide-warehouse-roofs'
].forEach((name) => {
  assert.ok(voidEInfillMethod.includes(name), `Void E infill missing the ${name} instanced mesh`);
});

['Cilincing', 'Kebantenan', 'Marunda Pulo', 'Rorotan', 'Sungai Tiram'].forEach((zone) => {
  assert.ok(voidEInfillMethod.includes(zone), `Void E infill missing the ${zone} residential zone`);
});

[
  'Jalan Raya Cilincing',
  'Jalan Cakung Cilincing Timur',
  'Jalan Cakung Cilincing Barat',
  'Jalan Marunda Makmur'
].forEach((name) => {
  assert.ok(voidEInfillMethod.includes(name), `Void E infill missing the ${name} shophouse corridor`);
});

['KBN Cakung', 'Marunda', 'Cilincing industri'].forEach((zone) => {
  assert.ok(voidEInfillMethod.includes(zone), `Void E infill missing the ${zone} warehouse cluster`);
});

// Check 53: Void E Tahap 4 — transit kawasan Cilincing–Marunda–Rorotan–KBN Cakung
assert.ok(citySceneContent.includes('buildVoidETransit()'), 'CityScene.js missing buildVoidETransit');

const voidETransitCall = citySceneContent.indexOf('this.buildVoidETransit();');
assert.ok(
  voidETransitCall > voidEInfillCall,
  'buildVoidETransit must run after buildVoidEInfill'
);
assert.ok(
  voidETransitCall < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidETransit must run before buildVoidBInfillAndIndustry'
);

const voidETransitStart = citySceneContent.indexOf('buildVoidETransit() {');
const voidETransitEnd = citySceneContent.indexOf('buildVoidBInfillAndIndustry() {', voidETransitStart);
assert.ok(voidETransitStart > 0 && voidETransitEnd > voidETransitStart, 'Cannot isolate buildVoidETransit');
const voidETransitMethod = citySceneContent.slice(voidETransitStart, voidETransitEnd);
assert.ok(!voidETransitMethod.includes('new THREE.PointLight'), 'Void E transit must not add PointLights');
assert.ok(
  voidETransitMethod.includes('registerNightMaterial') && voidETransitMethod.includes('voide-transit-sign'),
  'Void E transit sign must glow at night without new draw calls'
);
assert.ok(voidETransitMethod.includes('VOID_E_OSM'), 'Void E transit must anchor halte on the OSM dataset');
assert.ok(voidETransitMethod.includes('findRoadPoint'), 'Void E halte must derive from the nearest OSM segment');
assert.ok(voidETransitMethod.includes('voidETransitStats'), 'Void E transit must expose runtime stats');
assert.ok(voidETransitMethod.includes('drawCalls: 5'), 'Void E transit should add five draw calls');
assert.ok(voidETransitMethod.includes('Park and Ride Marunda'), 'Void E transit missing the Marunda park-and-ride hub');
assert.ok(voidETransitMethod.includes('parkingBays'), 'Void E transit stats must report parking bays');

[
  'voide-transit-concrete',
  'voide-transit-steel',
  'voide-transit-sign',
  'voide-transit-tree-trunks',
  'voide-transit-tree-foliage'
].forEach((name) => {
  assert.ok(voidETransitMethod.includes(name), `Void E transit missing the ${name} mesh`);
});

[
  'Halte Rusunawa Marunda',
  'Halte Rumah Si Pitung',
  'Halte Kawasan Logistik Marunda',
  'Halte Rusunawa Nagrak',
  'Halte KBN Cakung',
  'Halte Kampung Rorotan'
].forEach((name) => {
  assert.ok(voidETransitMethod.includes(name), `Void E transit missing the ${name} feeder`);
});

[
  'Jalan Marunda Empang',
  'Jalan Jayapura',
  'Medan',
  'Jalan Komplek Militer',
  'Jalan Cakung Cilincing Barat',
  'Jalan Malaka IV HB'
].forEach((name) => {
  assert.ok(voidETransitMethod.includes(name), `Void E transit missing the ${name} halte corridor`);
});

assert.ok(
  voidETransitMethod.includes('near: [1907.1, -639.8]'),
  'Halte Kampung Rorotan must stand clear of the Kampung Rorotan site slab'
);

assert.ok(voidEInfillMethod.includes('transitReservations'), 'Void E infill must reserve the transit hub footprint');
assert.ok(voidEInfillMethod.includes('insideTransitReservation'), 'Void E infill missing the transit reservation test');

// Check 54: Void E — label DOM untuk halte dan park-and-ride
assert.ok(
  citySceneContent.includes('this.voidETransitLabels = [];'),
  'CityScene constructor must initialise the Void E transit label list'
);
assert.ok(voidETransitMethod.includes('halteLabels.push'), 'Void E transit must collect a label anchor per halte');
assert.ok(voidETransitMethod.includes('this.voidETransitLabels = ['), 'Void E transit must publish the label anchors');
assert.ok(voidETransitMethod.includes("shortName: 'P&R Marunda'"), 'Park-and-ride label needs a short name');
assert.ok(voidETransitMethod.includes("kind: 'park'"), 'Park-and-ride label must carry the park kind');
assert.ok(voidETransitMethod.includes("kind: 'halte'"), 'Halte labels must carry the halte kind');
assert.ok(voidETransitMethod.includes('position: [prCenterX, 7.6, prCenterZ]'), 'Park-and-ride label anchor missing');

[
  'Rusunawa Marunda',
  'Rumah Si Pitung',
  'Logistik Marunda',
  'Rusunawa Nagrak',
  'KBN Cakung',
  'Kampung Rorotan'
].forEach((name) => {
  assert.ok(
    voidETransitMethod.includes(`shortName: '${name}'`),
    `Void E halte label missing the ${name} short name`
  );
});

assert.ok(uiManagerContent.includes('transitLabels = []'), 'UIManager constructor must accept transit labels');
assert.ok(uiManagerContent.includes('this.initTransitLabels();'), 'UIManager.init must build the transit labels');
assert.ok(uiManagerContent.includes('this.transitLabelElements.length'), 'Label update must include transit pins');
assert.ok(uiManagerContent.includes("label.kind === 'park' ? 'P' : 'H'"), 'Transit pins must distinguish P and H badges');
assert.ok(uiManagerContent.includes('dist > 520 || dist < 12'), 'Transit pins need their own visibility range');
assert.ok(uiManagerContent.includes('zIndex = Math.round(1400 - dist)'), 'Transit pins need depth sorting');

const transitCssStart = indexHtmlContent.indexOf('/* Secondary transit pins');
const transitCssEnd = indexHtmlContent.indexOf('</style>', transitCssStart);
assert.ok(transitCssStart > 0 && transitCssEnd > transitCssStart, 'index.html missing the transit pin styles');
const transitCss = indexHtmlContent.slice(transitCssStart, transitCssEnd);
assert.ok(transitCss.includes('pointer-events: none;'), 'Transit pins must stay non-interactive');
assert.ok(transitCss.includes('.transit-badge {'), 'Transit pin badge style missing');
assert.ok(transitCss.includes('.transit-pin.is-park .transit-badge'), 'Park-and-ride badge style missing');
assert.ok(transitCss.includes('.transit-pin.is-compact .transit-text'), 'Transit pin compact mode missing');
assert.ok(
  mainJsContent.includes('...this.city.voidETransitLabels'),
  'main.js must pass the transit label anchors to UIManager'
);

// Check 55: material malam Void C/D/E — helper, jendela infill, transit, anchor
assert.ok(
  citySceneContent.includes('registerNightMaterial(material, { emissive = 0xffc46b, nightIntensity = 0.88 } = {})'),
  'CityScene missing the shared night material helper'
);
assert.ok(
  citySceneContent.includes('material.userData.nightIntensity = nightIntensity;'),
  'Night material helper must store the per-material intensity'
);
assert.ok(
  citySceneContent.includes('this.nightMaterials.push(material);'),
  'Night material helper must register into nightMaterials'
);
assert.ok(
  citySceneContent.includes('const intensity = m.userData?.nightIntensity ?? 0.88;'),
  'setTimePreset must honour the per-material night intensity'
);
assert.ok(
  citySceneContent.includes('isGolden ? intensity * 0.4 : 0'),
  'Golden preset must scale the per-material intensity'
);

const nightHelperStart = citySceneContent.indexOf('addInfillNightWindows(items, name) {');
const nightHelperEnd = citySceneContent.indexOf('buildVoidCInfill() {', nightHelperStart);
assert.ok(
  nightHelperStart > 0 && nightHelperEnd > nightHelperStart,
  'Cannot isolate addInfillNightWindows'
);
const nightHelperMethod = citySceneContent.slice(nightHelperStart, nightHelperEnd);
assert.ok(nightHelperMethod.includes('new THREE.InstancedMesh'), 'Night windows must be instanced');
assert.ok(nightHelperMethod.includes('this.registerNightMaterial('), 'Night window material must register for night');
assert.ok(nightHelperMethod.includes('nightIntensity: 0.72'), 'Night window intensity drifted');
assert.ok(nightHelperMethod.includes('hash < 0.22'), 'Night windows need the deterministic dark-house skip');
assert.ok(nightHelperMethod.includes('mesh.instanceMatrix.needsUpdate = true'), 'Night window matrices must upload');
assert.ok(nightHelperMethod.includes('mesh.computeBoundingSphere()'), 'Night window mesh needs a bounding sphere for culling');
assert.ok(nightHelperMethod.includes('this.proceduralGroup.add(mesh)'), 'Night window mesh must join the procedural group');
assert.ok(!nightHelperMethod.includes('new THREE.PointLight'), 'Night windows must not add PointLights');

['voidc-night-windows', 'voidd-night-windows', 'voide-night-windows'].forEach((name) => {
  assert.ok(citySceneContent.includes(`'${name}'`), `Missing ${name} instanced mesh`);
});

['voidCInfillStats', 'voidDInfillStats', 'voidEInfillStats'].forEach((name) => {
  const idx = citySceneContent.indexOf(`${name} = {`);
  assert.ok(idx > 0, `Missing ${name}`);
  assert.ok(citySceneContent.slice(idx, idx + 320).includes('nightWindows,'), `${name} must report night window count`);
});

[
  ['Void C', voidCTransitMethod, 'voidc-transit-sign'],
  ['Void D', voidDTransitMethod, 'voidd-transit-sign'],
  ['Void E', voidETransitMethod, 'voide-transit-sign']
].forEach(([label, method, mesh]) => {
  const idx = method.indexOf(`'${mesh}'`);
  assert.ok(idx > 0, `${label} transit missing the ${mesh} mesh`);
  const block = method.slice(Math.max(0, idx - 420), idx);
  assert.ok(block.includes('registerNightMaterial'), `${label} transit sign must register for night`);
  assert.ok(block.includes('emissive: 0xfff4d6'), `${label} transit sign missing the warm white emissive`);
  assert.ok(block.includes('nightIntensity: 0.55'), `${label} transit sign night intensity drifted`);
});

assert.ok(
  landmarkModelsContent.includes('static tagNightWindow(material, nightIntensity = 0.62, nightEmissive = 0xffc46b)'),
  'LandmarkModels missing the night window tagger'
);
assert.ok(
  landmarkModelsContent.includes('material.userData.nightWindow = true;'),
  'Night window tagger must flag the material'
);
assert.ok(
  landmarkModelsContent.includes('material.userData.nightEmissive = nightEmissive;'),
  'Night window tagger must store the per-material emissive colour'
);
assert.strictEqual(
  (landmarkModelsContent.match(/LandmarkModels\.tagNightWindow\(/g) || []).length,
  77,
  'Expected 77 tagged night materials across the Void C/D/E/F/G/H/I/J/K/L/M anchors, Mall Kelapa Gading, Danau Rawa Buaya and the RSUD Koja helipad'
);
assert.ok(
  landmarkModelsContent.includes('createUniversitasMercuBuana') &&
    landmarkModelsContent.includes('createRusunawaMarunda') &&
    landmarkModelsContent.includes('createRusunawaNagrak') &&
    landmarkModelsContent.includes('createKampungRorotan'),
  'Night window tagging must cover the Void C and Void E towers'
);
assert.ok(
  citySceneContent.includes('mat.userData?.nightWindow'),
  'buildLandmarks must register tagged window materials'
);
assert.ok(
  citySceneContent.includes('nightIntensity: mat.userData.nightIntensity ?? 0.62'),
  'buildLandmarks must forward the tagged night intensity'
);

// Check 56: label DOM transit Void C dan D — paritas dengan tujuh pin Void E
assert.ok(
  citySceneContent.includes('this.voidCTransitLabels = [];') &&
    citySceneContent.includes('this.voidDTransitLabels = [];'),
  'CityScene must initialise the Void C/D transit label arrays'
);

assert.ok(voidCTransitMethod.includes('const halteLabels = [];'), 'Void C transit must collect halte labels');
assert.ok(voidCTransitMethod.includes('halteLabels.push({'), 'Void C transit must emit one label per halte');
assert.ok(
  voidCTransitMethod.includes('position: [hx, 6.4, hz]'),
  'Void C halte labels must float above the canopy'
);
assert.ok(
  voidCTransitMethod.includes('shortName: spec.shortName,'),
  'Void C halte labels must forward the short name'
);
assert.ok(
  voidCTransitMethod.includes('this.voidCTransitLabels = ['),
  'Void C transit must publish its label anchors'
);
assert.ok(
  voidCTransitMethod.includes("shortName: 'P&R Kembangan'"),
  'Void C park-and-ride label missing the short name'
);
assert.ok(
  voidCTransitMethod.includes('position: [prCenterX, 7.6, prCenterZ]'),
  'Void C park-and-ride label must clear the shelter roof'
);
assert.ok(
  voidCTransitMethod.includes("kind: 'park'"),
  'Void C park-and-ride label must use the P badge'
);
['Meruya Ilir', 'Joglo Raya', 'Ciledug Raya', 'Puri Kembangan'].forEach((name) => {
  assert.ok(
    voidCTransitMethod.includes(`shortName: '${name}'`),
    `Void C halte label missing the ${name} short name`
  );
});

assert.ok(voidDTransitMethod.includes('const halteLabels = [];'), 'Void D transit must collect halte labels');
assert.ok(voidDTransitMethod.includes('halteLabels.push({'), 'Void D transit must emit one label per halte');
assert.ok(
  voidDTransitMethod.includes('position: [hx, 6.4, hz]'),
  'Void D halte labels must float above the canopy'
);
assert.ok(
  voidDTransitMethod.includes('shortName: spec.shortName,'),
  'Void D halte labels must forward the short name'
);
assert.ok(
  voidDTransitMethod.includes('this.voidDTransitLabels = ['),
  'Void D transit must publish its label anchors'
);
assert.ok(
  voidDTransitMethod.includes("name: 'Park and Ride TWA Angke Kapuk'"),
  'Void D park-and-ride label missing the full name'
);
assert.ok(
  voidDTransitMethod.includes("shortName: 'P&R TWA Angke Kapuk'"),
  'Void D park-and-ride label missing the short name'
);
assert.ok(
  voidDTransitMethod.includes('position: [prCenterX, 7.6, prCenterZ]'),
  'Void D park-and-ride label must clear the shelter roof'
);
['PIK Avenue', 'TWA Angke Kapuk', 'Kapuk Raya', 'Kapuk Muara', 'Teluk Gong', 'Muara Baru'].forEach(
  (name) => {
    assert.ok(
      voidDTransitMethod.includes(`shortName: '${name}'`),
      `Void D halte label missing the ${name} short name`
    );
  }
);

assert.ok(
  mainJsContent.includes('transitLabels: [') &&
    mainJsContent.includes('...this.city.voidCTransitLabels') &&
    mainJsContent.includes('...this.city.voidDTransitLabels') &&
    mainJsContent.includes('...this.city.voidETransitLabels'),
  'main.js must forward all three transit label arrays to UIManager'
);

// Check 57: atap infill Void B/C/D/E — eave terpangkas dan okupansi OBB atap
assert.ok(
  citySceneContent.includes('const INFILL_ROOF_EAVE = 0.6;'),
  'CityScene missing the shared infill roof eave constant'
);
assert.ok(
  citySceneContent.includes('const INFILL_ROOF_TOLERANCE = 0.05;'),
  'CityScene missing the infill roof overlap tolerance'
);
const roofOverlapStart = citySceneContent.indexOf('const roofRectsOverlap = (a, b, tolerance) => {');
const roofOverlapEnd = citySceneContent.indexOf('\n};', roofOverlapStart);
assert.ok(
  roofOverlapStart > 0 && roofOverlapEnd > roofOverlapStart,
  'Cannot isolate roofRectsOverlap'
);
const roofOverlapHelper = citySceneContent.slice(roofOverlapStart, roofOverlapEnd);
assert.ok(roofOverlapHelper.includes('const axes = ['), 'Roof overlap must test both rectangle axes');
assert.ok(
  roofOverlapHelper.includes('if (reachA + reachB - distance <= tolerance) return false;'),
  'Roof overlap must treat small penetrations as separation'
);
assert.ok(
  roofOverlapHelper.includes('return true;'),
  'Roof overlap must report deep interpenetration'
);
assert.ok(!citySceneContent.includes('d * 0.45'), 'Shophouse occupancy must not use the shallow facade radius');
assert.ok(!citySceneContent.includes('w: w + 1.3'), 'Shophouse roofs must use the shared eave constant');
assert.ok(!citySceneContent.includes('w: w + 1.2'), 'House roofs must use the shared eave constant');

const voidCRoofInfill = citySceneContent.slice(
  citySceneContent.indexOf('buildVoidCInfill() {'),
  citySceneContent.indexOf('buildVoidCTransit() {')
);
const voidDRoofInfill = citySceneContent.slice(
  citySceneContent.indexOf('buildVoidDInfill() {'),
  citySceneContent.indexOf('buildVoidDTransit() {')
);
const voidERoofInfill = citySceneContent.slice(
  citySceneContent.indexOf('buildVoidEInfill() {'),
  citySceneContent.indexOf('buildVoidDInfill() {')
);
const voidBRoofInfill = citySceneContent.slice(
  citySceneContent.indexOf('buildVoidBInfillAndIndustry() {'),
  citySceneContent.indexOf('buildVoidBTransit() {')
);
[
  ['Void B', voidBRoofInfill],
  ['Void C', voidCRoofInfill],
  ['Void D', voidDRoofInfill],
  ['Void E', voidERoofInfill]
].forEach(([label, method]) => {
  assert.ok(
    method.includes('const isRoofOccupied = (x, z, rw, rd, rotY) => {'),
    `${label} infill missing the roof OBB occupancy test`
  );
  assert.ok(
    method.includes('const putRoof = (x, z, rw, rd, rotY = 0) => {'),
    `${label} infill must register placed roof footprints`
  );
  assert.ok(
    method.includes('roofRectsOverlap(p, { x, z, rw, rd, rotY }, INFILL_ROOF_TOLERANCE)'),
    `${label} infill occupancy must use the shared roof overlap helper`
  );
  assert.ok(!method.includes('isOccupied('), `${label} infill must drop the circle-only occupancy test`);
  assert.strictEqual(
    (method.match(/isRoofOccupied\(px, pz/g) || []).length,
    3,
    `${label} must test roof occupancy for house, shophouse and warehouse masses`
  );
  assert.strictEqual(
    (method.match(/putRoof\(px, pz/g) || []).length,
    3,
    `${label} must register all three roof footprints`
  );
  assert.strictEqual(
    (method.match(/const roofW = w \+ INFILL_ROOF_EAVE \* 2;/g) || []).length,
    2,
    `${label} house and shophouse roofs must share the eave constant`
  );
  assert.ok(
    method.includes('const roofW = w + 1.4;'),
    `${label} warehouse roofs must keep their 1.4 overhang`
  );
  assert.strictEqual(
    (method.match(/w: roofW,/g) || []).length,
    3,
    `${label} must emit three roof footprints from the shared widths`
  );
  assert.strictEqual(
    (method.match(/d: roofD,/g) || []).length,
    2,
    `${label} house and warehouse roofs must emit the shared depths`
  );
  const shophouseRoofStart = method.indexOf('const roofH = 1.8 + hash * 0.8;');
  assert.ok(shophouseRoofStart > 0, `${label} missing the shophouse roof height`);
  const shophouseRoofBlock = method.slice(shophouseRoofStart, shophouseRoofStart + 260);
  assert.ok(shophouseRoofBlock.includes('w: roofW,'), `${label} shophouse roof must use the trimmed width`);
  assert.ok(
    shophouseRoofBlock.includes('d,'),
    `${label} shophouse roofs must sit flush at the party walls`
  );
});

// Check 58: peron Halte KBN Cakung di bahu luar barat, bukan di jahitan dua koridor
assert.ok(
  voidETransitMethod.includes(
    "{ name: 'Halte KBN Cakung', shortName: 'KBN Cakung', road: 'Jalan Cakung Cilincing Barat', near: [1640, -700], side: 1 }"
  ),
  'Halte KBN Cakung must anchor to the west shoulder of Jalan Cakung Cilincing Barat'
);
assert.ok(
  !voidETransitMethod.includes("road: 'Jalan Cakung Cilincing Timur'"),
  'Halte KBN Cakung must not return to the Cilincing Timur carriageway seam'
);

// Check 59: malam Mall Kelapa Gading — bilah cyan campanile & aksen fasad
const mallMethodStart = landmarkModelsContent.indexOf('static createMallKelapaGading() {');
assert.ok(mallMethodStart > 0, 'Cannot isolate createMallKelapaGading');
const mallMethodEnd = landmarkModelsContent.indexOf('static createTanjungPriokPort()', mallMethodStart);
assert.ok(mallMethodEnd > mallMethodStart, 'Cannot delimit createMallKelapaGading');
const mallMethod = landmarkModelsContent.slice(mallMethodStart, mallMethodEnd);

assert.ok(
  /copperSpireMat = new THREE\.MeshStandardMaterial\(\{ color: 0x0d9488, metalness: 0\.28, roughness: 0\.55 \}\)/.test(mallMethod),
  'Campanile spire must stay matte so the moon light cannot smear a cyan blade'
);
assert.ok(
  !mallMethod.includes('new THREE.MeshBasicMaterial({ color: 0xfffbeb })'),
  'Clock faces must not remain a full-bright basic material'
);
assert.ok(
  /clockFaceMat = LandmarkModels\.tagNightWindow\(\s*new THREE\.MeshStandardMaterial\(\{ color: 0xfff7e0, roughness: 0\.45 \}\),\s*0\.85,\s*0xffe9a8\s*\)/.test(mallMethod),
  'Clock faces must become warm standard material with a registered night glow'
);
assert.ok(
  /glassAtriumMat = LandmarkModels\.tagNightWindow\(\s*new THREE\.MeshStandardMaterial\(\{ color: 0x0284c7, roughness: 0\.15, metalness: 0\.85 \}\),\s*0\.38,\s*0x38bdf8\s*\)/.test(mallMethod),
  'Atrium glass must glow cool cyan at night instead of reading as a black hole'
);
assert.ok(
  /mallWindowMat = LandmarkModels\.tagNightWindow\(\s*new THREE\.MeshStandardMaterial\(\{ color: 0x0f172a, metalness: 0\.1, roughness: 0\.5 \}\),\s*0\.5\s*\)/.test(mallMethod),
  'Mall window bands must register a warm night glow'
);
assert.ok(
  mallMethod.includes('[5.5, 9.5].forEach((y) => {'),
  'Mall window bands must wrap both podium rows'
);
assert.ok(
  mallMethod.includes('BufferGeometryUtils.mergeGeometries(bandGeos)'),
  'Mall window bands must merge into a single geometry'
);
assert.ok(
  mallMethod.includes("windowBands.name = 'mall-window-bands';"),
  'Merged window band mesh must be named for verification'
);
assert.ok(
  !mallMethod.includes('PointLight'),
  'Mall night accents must not add PointLights'
);
assert.ok(
  citySceneContent.includes('emissive: mat.userData.nightEmissive ?? 0xffc46b,'),
  'buildLandmarks must forward the tagged night emissive colour'
);

// Check 60: PJU malam distrik — boulevard Kelapa Gading & ring Danau Rawa Buaya
const districtPjuStart = citySceneContent.indexOf('buildDistrictPju() {');
assert.ok(districtPjuStart > 0, 'CityScene.js missing buildDistrictPju');
const districtPjuEnd = citySceneContent.indexOf('\n  buildStreetLampInstances() {', districtPjuStart);
assert.ok(districtPjuEnd > districtPjuStart, 'Cannot isolate buildDistrictPju');
const districtPjuMethod = citySceneContent.slice(districtPjuStart, districtPjuEnd);

assert.ok(
  citySceneContent.indexOf('this.buildDistrictPju();') > citySceneContent.indexOf('this.buildUrbanDistricts();'),
  'buildDistrictPju must run after the urban districts'
);
assert.ok(
  citySceneContent.indexOf('this.buildDistrictPju();') < citySceneContent.indexOf('this.buildStreetLampInstances();'),
  'buildDistrictPju must run before the PJU instances are baked'
);
for (const token of [
  'for (let z = -250; z >= -760; z -= 38)',
  'Math.abs(z + 531) < 65',
  'addLamp(1184.5, z, 2, 0);',
  'addLamp(1211.5, z, -2, 0);',
  'for (let x = 956; x <= 1344; x += 42)',
  'if (x > 1140 && x < 1255) continue;',
  'addLamp(x, -519.5, 0, -2);',
  'addLamp(x, -542.5, 0, 2);',
  '[-1112, -366, 0, -2]',
  '[-1072, -434, 0, 2]',
  '[-1128, -384, 2, 0]',
  'lakeLamps.forEach(([x, z, armX, armZ]) => addLamp(x, z, armX, armZ));'
]) {
  assert.ok(districtPjuMethod.includes(token), `buildDistrictPju missing ${token}`);
}
assert.ok(!districtPjuMethod.includes('PointLight'), 'District PJU must not add PointLights');

assert.ok(
  lampMethod.includes('armX: arm ? arm.x : (facingEast ? 2 : -2),') &&
    lampMethod.includes('armZ: arm ? arm.z : 0'),
  'createStreetLamp must store an optional arm vector'
);
assert.ok(
  instancedLampMethod.includes('lamp.x + lamp.armX') && instancedLampMethod.includes('lamp.z + lamp.armZ'),
  'Instanced PJU bulbs must use the stored arm vector'
);
assert.ok(
  pjuUpdateMethod.includes('lamp.x + lamp.armX') && pjuUpdateMethod.includes('lamp.z + lamp.armZ'),
  'PJU light pool must follow the stored arm vector'
);
assert.ok(
  citySceneContent.includes('this.pjuLightPoolSize = 12;'),
  'District PJU must reuse the capped 12-light pool'
);

// Check 61: material malam badan air — emissive teal tanpa mesh/PointLight baru
assert.ok(
  citySceneContent.includes('const WATER_NIGHT_EMISSIVE = 0x0e7490;'),
  'CityScene.js must define the water night emissive colour'
);
assert.ok(
  citySceneContent.includes('const WATER_NIGHT_INTENSITY = 0.34;'),
  'CityScene.js must define the inland water night intensity'
);
assert.ok(
  citySceneContent.includes('const SEA_NIGHT_INTENSITY = 0.22;'),
  'CityScene.js must define the dimmer sea night intensity'
);

const sliceCityBuilder = (token) => {
  const start = citySceneContent.indexOf(token);
  assert.ok(start > 0, `CityScene.js missing ${token}`);
  const rest = citySceneContent.slice(start + token.length);
  const next = rest.match(/\n  [a-zA-Z_$][\w$]*\([^)\n]*\) \{/);
  return citySceneContent.slice(start, next ? start + token.length + next.index : undefined);
};

const inlandWaterBuilders = [
  ['buildCentralJakartaEastCorridor() {', 'Kali Ciliwung Kwitang'],
  ['buildSouthJakartaInfillAndParks() {', 'Danau Ayodya dan kolam taman selatan'],
  ['buildWestJakartaInfrastructure() {', 'Kali Angke dan koridor tata air barat'],
  ['buildEastJakartaInfrastructure() {', 'Kanal Banjir Timur dan waduk timur'],
  ['buildVoidBDaanMogot() {', 'Kali Mookervaart'],
  ['buildVoidDPenjaringan() {', 'waterway dan polygon air Void D'],
  ['buildVoidECilincing() {', 'waterway Void E'],
  ['renderOSMLayers(osm, sharedMaterials, bldMats) {', 'badan air OSM inti']
];
for (const [token, label] of inlandWaterBuilders) {
  const body = sliceCityBuilder(`  ${token}`);
  assert.ok(
    body.includes('this.registerNightMaterial(waterMat, {') &&
      body.includes('emissive: WATER_NIGHT_EMISSIVE') &&
      body.includes('nightIntensity: WATER_NIGHT_INTENSITY'),
    `${label} must register the inland water night glow`
  );
  assert.ok(!body.includes('new THREE.PointLight('), `${label} must not add PointLights`);
  assert.ok(
    !/waterMat\.(color|metalness|roughness|opacity)/.test(body),
    `${label} must keep its day water material parameters`
  );
}

const northWaterBody = sliceCityBuilder('  buildNorthJakartaInfrastructure() {');
assert.ok(
  northWaterBody.includes('this.registerNightMaterial(waterMat, {') &&
    northWaterBody.includes('emissive: WATER_NIGHT_EMISSIVE') &&
    northWaterBody.includes('nightIntensity: SEA_NIGHT_INTENSITY'),
  'Sea and harbour water must use the dimmer sea night intensity'
);
assert.ok(
  !northWaterBody.includes('new THREE.PointLight('),
  'Sea and harbour water must not add PointLights'
);

const golfPondBody = sliceCityBuilder('  buildCentralJakartaEastInfillAndDistricts() {');
assert.ok(
  golfPondBody.includes('const golfPondMat = this.registerNightMaterial(') &&
    golfPondBody.includes('emissive: WATER_NIGHT_EMISSIVE') &&
    golfPondBody.includes('nightIntensity: WATER_NIGHT_INTENSITY'),
  'Danau Golf Kemayoran must register the inland water night glow'
);
assert.ok(
  golfPondBody.includes(
    'new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.15, metalness: 0.8 })'
  ),
  'Golf pond must keep its day water material parameters'
);
assert.ok(
  !golfPondBody.includes('new THREE.PointLight('),
  'Danau Golf Kemayoran must not add PointLights'
);
assert.strictEqual(
  (citySceneContent.match(/new THREE\.PointLight\(/g) || []).length,
  1,
  'Water night materials must reuse the existing light pool instead of adding PointLights'
);

assert.ok(
  !/const waterMat = new THREE\.MeshStandardMaterial\(\{[^}]*emissive:/.test(citySceneContent),
  'Water materials must not bake emissive into the day material'
);

const rawaWaterStart = landmarkModelsContent.indexOf('static createDanauRawaBuaya() {');
assert.ok(rawaWaterStart > 0, 'Cannot isolate createDanauRawaBuaya');
const rawaWaterEnd = landmarkModelsContent.indexOf('static createCengkarengBusinessCity()', rawaWaterStart);
assert.ok(rawaWaterEnd > rawaWaterStart, 'Cannot delimit createDanauRawaBuaya');
const rawaWaterMethod = landmarkModelsContent.slice(rawaWaterStart, rawaWaterEnd);
assert.ok(
  /const waterMat = LandmarkModels\.tagNightWindow\(\s*new THREE\.MeshStandardMaterial\(\{ color: 0x0369a1, roughness: 0\.15, metalness: 0\.85, transparent: true, opacity: 0\.88 \}\),\s*0\.38,\s*0x0e7490\s*\)/.test(rawaWaterMethod),
  'Danau Rawa Buaya water must register a teal night glow'
);
assert.ok(!rawaWaterMethod.includes('PointLight'), 'Danau Rawa Buaya water must not add PointLights');

// Check 62: PJU gabungan Void B/C/D/E/F/G/H/I/J/K/L/M memberi makan pool 12 PointLight
assert.ok(
  citySceneContent.includes('this.mergedPjuLampTransforms = [];'),
  'CityScene.js must keep merged PJU lamp heads in a dedicated transform array'
);
assert.strictEqual(
  (citySceneContent.match(/this\.recordMergedPjuLamp\(/g) || []).length,
  12,
  'Each merged PJU builder (Void B/C/D/E/F/G/H/I/J/K/L/M) must record its lamp heads exactly once'
);
const mergedLampHelperStart = citySceneContent.indexOf('recordMergedPjuLamp(x, z, angle, side) {');
assert.ok(mergedLampHelperStart > 0, 'CityScene.js missing the recordMergedPjuLamp helper');
const mergedLampHelper = citySceneContent.slice(mergedLampHelperStart, mergedLampHelperStart + 400);
assert.ok(
  mergedLampHelper.includes('x - Math.cos(angle) * 3.2 * side') &&
    mergedLampHelper.includes('z + Math.sin(angle) * 3.2 * side') &&
    mergedLampHelper.includes('armX: 0') &&
    mergedLampHelper.includes('armZ: 0'),
  'Merged PJU heads must sit at the bulb offset with zero arm so the pool can rank them'
);
const mergedPjuBuilders = [
  ['buildVoidBDaanMogot() {', 'Void B Daan Mogot'],
  ['buildVoidCMeruya() {', 'Void C Meruya'],
  ['buildVoidDPenjaringan() {', 'Void D Penjaringan'],
  ['buildVoidECilincing() {', 'Void E Cilincing'],
  ['buildVoidFCakung() {', 'Void F Cakung'],
  ['buildVoidGPasarRebo() {', 'Void G Pasar Rebo'],
  ['buildVoidHPasarMinggu() {', 'Void H Pasar Minggu']
];
for (const [token, label] of mergedPjuBuilders) {
  const body = sliceCityBuilder(`  ${token}`);
  assert.ok(
    body.includes('this.recordMergedPjuLamp(x, z, angle, side);'),
    `${label} must feed the PJU light pool`
  );
  assert.ok(!body.includes('new THREE.PointLight('), `${label} must not add PointLights`);
}
const poolUpdateBody = sliceCityBuilder('  updatePjuLights(cameraPosition) {');
assert.ok(
  poolUpdateBody.includes('this.pjuLampTransforms') &&
    poolUpdateBody.includes('.concat(this.mergedPjuLampTransforms)'),
  'PJU light pool must consider both core and merged district lamps'
);
assert.ok(
  poolUpdateBody.includes("this.currentTimePreset === 'night' ? 1.8 : 0.6"),
  'Pool intensities must stay unchanged'
);
assert.ok(
  citySceneContent.includes('this.pjuLightPoolSize = 12;'),
  'PJU pool size must remain 12 lights'
);
assert.ok(
  !sliceCityBuilder('  buildStreetLampInstances() {').includes('mergedPjuLampTransforms'),
  'Merged PJU lamps must not be instanced twice'
);

// Check 63: Void F Tahap 1 — 6 anchor Cakung, Klender, Duren Sawit & Buaran
const voidFAnchors = [
  { id: 'stasiun-klender', builder: 'createStasiunKlender', position: [1081, 0, 261], marker: 'stasiun-klender-island-platform', rotationY: -0.011 },
  { id: 'stasiun-buaran', builder: 'createStasiunBuaran', position: [1411, 0, 291], marker: 'stasiun-buaran-island-platform', rotationY: -0.101 },
  { id: 'stasiun-klender-baru', builder: 'createStasiunKlenderBaru', position: [1586, 0, 312], marker: 'stasiun-klender-baru-island-platform', rotationY: -0.121 },
  { id: 'terminal-pulo-gebang', builder: 'createTerminalPuloGebang', position: [1825, 0, 239], marker: 'terminal-pulo-gebang-canopy', rotationY: null },
  { id: 'kawasan-industri-pulogadung', builder: 'createKawasanIndustriPulogadung', position: [1241, 0, -2], marker: 'kawasan-industri-pulogadung-gate', rotationY: null },
  { id: 'rusun-klender', builder: 'createRusunKlender', position: [1489, 0, 385], marker: 'rusun-klender-blocks', rotationY: null }
];

assert.deepStrictEqual(
  JAKARTA_LANDMARKS.slice(99, 105).map((l) => l.id),
  voidFAnchors.map((a) => a.id),
  'Void F anchors must follow Kampung Rorotan as landmarks #100-#105'
);

const sliceLandmarkBuilder = (token) => {
  const start = landmarkModelsContent.indexOf(token);
  assert.ok(start > 0, `LandmarkModels.js missing ${token}`);
  const rest = landmarkModelsContent.slice(start + token.length);
  const next = rest.match(/\n  static [a-zA-Z_$][\w$]*\(/);
  return landmarkModelsContent.slice(start, next ? start + token.length + next.index : undefined);
};

voidFAnchors.forEach(({ id, builder, position, marker, rotationY }) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Void F landmark ${id} not found in JAKARTA_LANDMARKS`);
  assert.deepStrictEqual(lm.position, position, `Void F landmark ${id} position changed without updating the layout`);
  assert.ok(lm.position[0] >= 1050 && lm.position[0] <= 1900, `Landmark ${id} X position ${lm.position[0]} outside Void F range [1050, 1900]`);
  assert.ok(lm.position[2] >= -20 && lm.position[2] <= 700, `Landmark ${id} Z position ${lm.position[2]} outside Void F range [-20, 700]`);
  assert.ok(lm.facts && lm.facts.length >= 3, `Landmark ${id} must have at least 3 educational facts`);
  assert.ok(lm.labelHeight >= 20, `Landmark ${id} labelHeight ${lm.labelHeight} is too low for a Void F anchor`);
  assert.ok(lm.cameraPosition[1] > 30, `Landmark ${id} camera must be elevated above street level`);
  assert.ok(lm.cameraTarget[1] < lm.cameraPosition[1], `Landmark ${id} camera must look downward at the anchor`);
  assert.ok(
    Math.abs(lm.position[0]) + 80 <= 2900 && Math.abs(lm.position[2]) + 80 <= 2900,
    `Landmark ${id} must stay inside the expanded 5800-unit ground plane`
  );
  if (rotationY === null) {
    assert.ok(lm.rotationY === undefined || lm.rotationY === 0, `Landmark ${id} must not add an unplanned rotation`);
  } else {
    assert.strictEqual(lm.rotationY, rotationY, `Landmark ${id} rotation must align the station with the Cikarang rail tangent`);
  }
  const [projectedX, projectedZ] = projectGpsToScene(lm.coordinates.lat, lm.coordinates.lng);
  const deviation = Math.hypot(lm.position[0] - projectedX, lm.position[2] - projectedZ);
  assert.ok(deviation <= 80, `Void F landmark ${id} deviates ${deviation.toFixed(1)} units from GPS projection (max 80)`);

  const body = sliceLandmarkBuilder(`static ${builder}() {`);
  assert.ok(body.includes(`name = '${marker}'`), `Builder ${builder} must name its landmark mesh '${marker}'`);
  assert.ok(body.includes('LandmarkModels.tagNightWindow('), `Builder ${builder} must register glass for night glow`);
  assert.ok(!body.includes('new THREE.PointLight('), `Builder ${builder} must not add PointLights`);
  assert.ok(
    citySceneContent.includes(`"${id}": () => LandmarkModels.${builder}()`),
    `CityScene.js missing Void F dispatch mapping for "${id}"`
  );
});

const voidFModels = JAKARTA_LANDMARKS.slice(99, 105);
voidFModels.forEach((a, i) => {
  voidFModels.slice(i + 1).forEach((b) => {
    const distance = Math.hypot(a.position[0] - b.position[0], a.position[2] - b.position[2]);
    assert.ok(distance >= 70, `Void F anchors ${a.id} and ${b.id} are only ${distance.toFixed(1)} units apart`);
  });
  JAKARTA_LANDMARKS.slice(0, 99).forEach((b) => {
    const distance = Math.hypot(a.position[0] - b.position[0], a.position[2] - b.position[2]);
    assert.ok(distance >= 70, `Void F anchor ${a.id} crowds existing anchor ${b.id} (${distance.toFixed(1)} units)`);
  });
});

voidFAnchors.forEach(({ id }, index) => {
  const label = String(100 + index);
  assert.ok(indexHtmlContent.includes(`data-tour-id="${id}"`), `index.html missing Void F tour button for "${id}"`);
  assert.ok(
    new RegExp(`data-tour-id="${id}"[\\s\\S]{0,400}?>${label}</span>`).test(indexHtmlContent),
    `Tour button for "${id}" must carry index ${label}`
  );
});
assert.strictEqual(
  (indexHtmlContent.match(/data-landmark-count>137</g) || []).length,
  3,
  'All three landmark counters must read 137'
);

const citySceneModuleScope = citySceneContent.slice(0, citySceneContent.indexOf('export class CityScene'));
const cikarangCorridor = [
  [420, 200],
  [540, 240],
  [666.1, 282.6],
  [1081, 261],
  [1411, 291],
  [1586, 312],
  [1824, 341]
];
assert.ok(
  /const CIKARANG_RAIL_CORRIDOR = \[/.test(citySceneModuleScope),
  'CityScene.js must expose CIKARANG_RAIL_CORRIDOR at module scope'
);
cikarangCorridor.forEach(([x, z]) => {
  assert.ok(
    citySceneModuleScope.includes(`[${x}, ${z}]`),
    `CIKARANG_RAIL_CORRIDOR missing waypoint [${x}, ${z}]`
  );
});
assert.ok(
  citySceneModuleScope.includes('const distanceToCikarangRail = (x, z) =>'),
  'CityScene.js must expose distanceToCikarangRail for corridor clearance checks'
);

const trafficBody = sliceCityBuilder('  buildTraffic() {');
assert.ok(
  trafficBody.includes('CIKARANG_RAIL_CORRIDOR.map'),
  'Cikarang rail curve must be driven from CIKARANG_RAIL_CORRIDOR so tree clearance stays in sync'
);
[
  'new THREE.Vector3(950.0, 0.48, 290.0)',
  'new THREE.Vector3(1200.0, 0.48, 295.0)',
  'new THREE.Vector3(1450.0, 0.48, 300.0)'
].forEach((waypoint) => {
  assert.ok(!trafficBody.includes(waypoint), `Cikarang rail must retire schematic waypoint ${waypoint}`);
});
assert.ok(
  !trafficBody.includes('new THREE.BoxGeometry(1050, 0.22, 5.5)'),
  'Cikarang ballast box must be replaced by the curve-following ribbon'
);
assert.ok(!trafficBody.includes('cikarangBallastMesh'), 'Cikarang ballast must stop using a rotated box');
assert.ok(
  trafficBody.includes('this.addCurveBallastRibbon(this.cikarangRailCurve, 21.5, ballastMat);'),
  'Cikarang rail must build a four-track ballast ribbon from the driven curve'
);
assert.strictEqual(
  (citySceneContent.match(/this\.addCurveBallastRibbon\(/g) || []).length,
  1,
  'Curve ballast ribbon must be used exactly once so draw calls stay neutral'
);
const ribbonHelper = sliceCityBuilder('  addCurveBallastRibbon(curve, width, material) {');
assert.ok(ribbonHelper.includes('computeVertexNormals'), 'Ballast ribbon must compute normals across the curve');
assert.ok(ribbonHelper.includes('setIndex('), 'Ballast ribbon must build indexed top and side faces');
assert.ok(
  trafficBody.includes("'krl-cikarang-eastbound'") && trafficBody.includes("'krl-cikarang-westbound'"),
  'Both Cikarang KRL trains must keep running on the extended curve'
);
assert.ok(
  trafficBody.includes('trackOffset: 5.0') && trafficBody.includes('trackOffset: -5.0'),
  'Cikarang KRL trains must run on the outer ±5 tracks so the island platform stays clear'
);

// Void F visual P1: tapak JIEP tidak boleh tertimbun grid pabrik lama
const voidFCameraFraming = [
  ['stasiun-klender', [1081, 52, 361], [1081, 7, 261]],
  ['stasiun-buaran', [1411, 48, 391], [1411, 6, 291]],
  ['stasiun-klender-baru', [1586, 52, 414], [1586, 7, 312]],
  ['terminal-pulo-gebang', [1825, 150, 430], [1825, 8, 239]],
  ['kawasan-industri-pulogadung', [1241, 90, 150], [1241, 5, -2]],
  ['rusun-klender', [1489, 42, 485], [1489, 5, 385]]
];
voidFCameraFraming.forEach(([id, cameraPosition, cameraTarget]) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.deepStrictEqual(lm.cameraPosition, cameraPosition, `Landmark ${id} tour camera must clear surrounding massing`);
  assert.deepStrictEqual(lm.cameraTarget, cameraTarget, `Landmark ${id} tour target must sit on the anchor`);
});

const eastJakartaBody = sliceCityBuilder('  buildEastJakartaInfillAndDistricts() {');
assert.ok(
  eastJakartaBody.includes("JAKARTA_LANDMARKS.find((l) => l.id === 'kawasan-industri-pulogadung')"),
  'JIEP clear zone must derive from the kawasan-industri-pulogadung anchor'
);
assert.ok(
  eastJakartaBody.includes('const insideJiepAnchor = (x, z) =>'),
  'JIEP clear zone predicate must exist in the east Jakarta infill builder'
);
assert.ok(
  eastJakartaBody.includes('if (insideJiepAnchor(x, z)) continue;'),
  'Legacy JIEP factory grid must skip every instance inside the detailed anchor site'
);
{
  const jiepAnchor = JAKARTA_LANDMARKS.find((l) => l.id === 'kawasan-industri-pulogadung');
  const site = {
    minX: jiepAnchor.position[0] - 90,
    maxX: jiepAnchor.position[0] + 90,
    minZ: jiepAnchor.position[2] - 70,
    maxZ: jiepAnchor.position[2] + 70
  };
  let keptOverlaps = 0;
  for (let x = 1200; x <= 1450; x += 45) {
    for (let z = -140; z <= 40; z += 45) {
      if (Math.abs(z - (-30)) < 16) continue;
      const hash = Math.abs(Math.sin(x * 51.23 + z * 19.87));
      const w = 32 + hash * 12;
      const d = 34 + (1 - hash) * 12;
      const cx = x + (hash - 0.5) * 5;
      const cz = z + (hash - 0.5) * 5;
      const excluded =
        cx > jiepAnchor.position[0] - 100 && cx < jiepAnchor.position[0] + 100 &&
        cz > jiepAnchor.position[2] - 76 && cz < jiepAnchor.position[2] + 76;
      if (excluded) continue;
      const overlaps =
        cx + w / 2 > site.minX && cx - w / 2 < site.maxX &&
        cz + d / 2 > site.minZ && cz - d / 2 < site.maxZ;
      if (overlaps) keptOverlaps++;
    }
  }
  assert.strictEqual(keptOverlaps, 0, 'JIEP clear zone must remove every legacy factory footprint overlapping the 180x140 site');
}

// Void F visual P1: sabuk pohon KBT harus bersih dari badan rel Cikarang
assert.ok(
  eastJakartaBody.includes('const addKbtTree = (x, z) =>'),
  'KBT tree belt must funnel both banks through addKbtTree'
);
assert.ok(
  /const addKbtTree = \(x, z\) => \{\s*if \(distanceToCikarangRail\(x, z\) < 14\) return;/.test(eastJakartaBody),
  'KBT trees within 14 units of the Cikarang rail corridor must be skipped'
);
assert.ok(
  eastJakartaBody.includes('addKbtTree(tx + perpX, tz + perpZ)') &&
    eastJakartaBody.includes('addKbtTree(tx - perpX, tz - perpZ)'),
  'Both KBT banks must be routed through the rail clearance helper'
);
assert.ok(
  /for \(let z = 60; z <= 700; z \+= 24\) \{\s*if \(distanceToCikarangRail\(712, z\) < 14\) continue;/.test(eastJakartaBody),
  'DI Panjaitan palm row must skip palms standing in the Cikarang rail corridor'
);

// Check 64: Void F Tahap 2 — dataset OSM & builder jaringan Cakung–Klender–Duren Sawit–Pulo Gebang
assert.ok(VOID_F_OSM.meta.source.includes('OpenStreetMap'), 'Void F OSM dataset missing OSM attribution');
assert.ok(VOID_F_OSM.meta.license.includes('ODbL'), 'Void F OSM dataset missing ODbL license');
assert.strictEqual(VOID_F_OSM.meta.retrieved, '2026-10-30', 'Void F dataset retrieval date changed');
assert.ok(VOID_F_OSM.meta.api.includes('overpass.openstreetmap.fr'), 'Void F dataset must record the Overpass mirror');
assert.ok(VOID_F_OSM.meta.api.includes('2026-08-10'), 'Void F dataset must record the OSM base snapshot');
assert.strictEqual(VOID_F_OSM.meta.projection, 'projectGpsToScene', 'Void F dataset must use the unscaled GPS projection');
assert.deepStrictEqual(
  VOID_F_OSM.meta.projectionConstants,
  { originLng: 106.823048, originLat: -6.194957, scaleX: 14100, scaleZ: 14180 },
  'Void F projection constants drifted from projectGpsToScene'
);
assert.deepStrictEqual(
  VOID_F_OSM.meta.bbox,
  { south: -6.234, west: 106.891, north: -6.184, east: 106.965 },
  'Void F source bbox changed without re-downloading the extract'
);
assert.deepStrictEqual(
  VOID_F_OSM.meta.clipBox,
  { minX: 960, maxX: 1995, minZ: -150, maxZ: 560 },
  'Void F clip box changed without updating the layout'
);
assert.strictEqual(VOID_F_OSM.meta.simplification, 2, 'Void F simplification must stay at Douglas–Peucker 2.0');
assert.ok(VOID_F_OSM.meta.note.includes('Jalan Layang Cakung'), 'Void F dataset must note the excluded Cakung flyover');
assert.ok(VOID_F_OSM.meta.note.includes('busway'), 'Void F dataset must note the excluded Transjakarta busway ways');
assert.ok(VOID_F_OSM.meta.note.includes('konektor'), 'Void F dataset must note the anchor connector decision');

assert.strictEqual(VOID_F_OSM.roads.length, 91, `Void F OSM dataset changed size: ${VOID_F_OSM.roads.length} roads`);
assert.strictEqual(VOID_F_OSM.meta.roadCount, VOID_F_OSM.roads.length, 'Void F roadCount does not match roads array');
const allVoidFPoints = VOID_F_OSM.roads.flatMap((road) => road.points);
assert.strictEqual(allVoidFPoints.length, 439, `Void F road point count changed: ${allVoidFPoints.length}`);
assert.strictEqual(VOID_F_OSM.meta.roadPointCount, allVoidFPoints.length, 'Void F roadPointCount does not match dataset');
assert.strictEqual(new Set(VOID_F_OSM.roads.map((road) => road.name)).size, 68, 'Void F road name coverage changed');

const voidFWidths = { trunk: 16, primary: 18, secondary: 14, tertiary: 11 };
VOID_F_OSM.roads.forEach((road) => {
  assert.ok(road.name && road.name.trim().length > 0, 'Void F road missing a name');
  assert.ok(voidFWidths[road.type] === road.width, `Void F road ${road.name} has unexpected type/width ${road.type}/${road.width}`);
  assert.ok(road.points.length >= 2, `Void F road ${road.name} has fewer than two points`);
  road.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), `Void F road ${road.name} contains a non-finite coordinate`);
    assert.ok(x >= 960 && x <= 1995 && z >= -150 && z <= 560, `Void F road ${road.name} point ${x}/${z} outside the clip box`);
  });
});

const voidFRoadNames = new Set(VOID_F_OSM.roads.map((road) => road.name));
[
  'Jalan Bekasi Raya',
  'Jalan Kolonel Soegiono',
  'Jalan Dokter KRT Radjiman Widyodiningrat',
  'Jalan Pangeran Komarudin',
  'Jalan Raya Penggilingan',
  'Jalan Pulokambing Raya',
  'Jalan Radin Inten',
  'Jalan Nusa Indah Raya',
  'Jalan Delima Raya',
  'Jalan Haji Darip'
].forEach((name) => {
  assert.ok(voidFRoadNames.has(name), `Void F OSM dataset missing ${name}`);
});
[
  'Jalan Layang Cakung',
  'Jalan Inspeksi Kanal Timur',
  'Jalur Sependa Kanal Banjir Tim.',
  'Transjakarta Busway Koridor 11',
  'Transjakarta Busway Koridor 4'
].forEach((name) => {
  assert.ok(!voidFRoadNames.has(name), `${name} must stay excluded from the at-grade Void F network`);
});
assert.ok(
  !VOID_F_OSM.roads.some((road) => road.type === 'busway'),
  'Void F dataset must not include busway ways that duplicate the carriageway'
);

const voidFRailCorridor = [
  [420, 200],
  [540, 240],
  [666.1, 282.6],
  [1081, 261],
  [1411, 291],
  [1586, 312],
  [1824, 341]
];
const distanceToVoidFRail = (point) => {
  let best = Infinity;
  for (let i = 0; i < voidFRailCorridor.length - 1; i++) {
    best = Math.min(best, distanceToSegment(point, voidFRailCorridor[i], voidFRailCorridor[i + 1]));
  }
  return best;
};
let voidFRailClearance = Infinity;
VOID_F_OSM.roads.forEach((road) => {
  road.points.forEach((point) => {
    voidFRailClearance = Math.min(voidFRailClearance, distanceToVoidFRail(point));
  });
});
assert.ok(voidFRailClearance >= 8, `Void F roads intrude ${voidFRailClearance.toFixed(2)} units into the Cikarang rail corridor`);

const distanceToVoidFRoad = (point) => {
  let best = Infinity;
  VOID_F_OSM.roads.forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      best = Math.min(best, distanceToSegment(point, road.points[i], road.points[i + 1]));
    }
  });
  return best;
};
voidFAnchors.forEach(({ id }) => {
  const lm = JAKARTA_LANDMARKS.find((landmark) => landmark.id === id);
  const distance = distanceToVoidFRoad([lm.position[0], lm.position[2]]);
  assert.ok(distance < 60, `Void F landmark ${id} is ${distance.toFixed(1)} units from the nearest OSM road`);
});

const voidFKbtCorridor = [
  [850, 580], [1150, 350], [1320, 100], [1500, -250],
  [1620, -300], [1760, -330], [1900, -390], [2000, -430], [2088.6, -478.4]
];
const distanceToVoidFKbt = (point) => {
  let best = Infinity;
  for (let i = 0; i < voidFKbtCorridor.length - 1; i++) {
    best = Math.min(best, distanceToSegment(point, voidFKbtCorridor[i], voidFKbtCorridor[i + 1]));
  }
  return best;
};
VOID_F_OSM.roads.forEach((road) => {
  const clearance = 26 / 2 + road.width / 2 + 1;
  let length = 0;
  let riding = 0;
  for (let i = 0; i < road.points.length - 1; i++) {
    const [ax, az] = road.points[i];
    const [bx, bz] = road.points[i + 1];
    const segmentLength = Math.hypot(bx - ax, bz - az);
    if (segmentLength === 0) continue;
    length += segmentLength;
    if (distanceToVoidFKbt([(ax + bx) / 2, (az + bz) / 2]) < clearance) riding += segmentLength;
  }
  assert.ok(
    length === 0 || riding / length < 0.6,
    `Void F road ${road.name} rides the procedural Kanal Banjir Timur centerline`
  );
});

assert.strictEqual(VOID_F_OSM.waterways.length, 32, `Void F waterway count changed: ${VOID_F_OSM.waterways.length}`);
assert.strictEqual(VOID_F_OSM.meta.waterwayCount, VOID_F_OSM.waterways.length, 'Void F waterwayCount mismatch');
const allVoidFWaterPoints = VOID_F_OSM.waterways.flatMap((waterway) => waterway.points);
assert.strictEqual(allVoidFWaterPoints.length, 213, `Void F waterway point count changed: ${allVoidFWaterPoints.length}`);
assert.strictEqual(VOID_F_OSM.meta.waterPointCount, allVoidFWaterPoints.length, 'Void F waterPointCount mismatch');
VOID_F_OSM.waterways.forEach((waterway) => {
  assert.ok(['river', 'stream'].includes(waterway.kind), `Unexpected Void F waterway kind ${waterway.kind}`);
  const expectedWidth = waterway.name === 'Sunter' ? 14 : waterway.name === 'Buaran' ? 10 : waterway.kind === 'river' ? 9 : 5;
  assert.strictEqual(waterway.width, expectedWidth, `Void F waterway ${waterway.name || '(unnamed)'} width drifted to ${waterway.width}`);
  assert.ok(waterway.points.length >= 2, 'Void F waterway has fewer than two points');
  waterway.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), 'Void F waterway contains a non-finite coordinate');
    assert.ok(x >= 960 && x <= 1995 && z >= -150 && z <= 560, `Void F waterway point ${x}/${z} outside the clip box`);
  });
});
const voidFWaterNames = new Set(VOID_F_OSM.waterways.map((waterway) => waterway.name));
['Buaran', 'Sunter', 'Cipinang', 'Ci Pinang'].forEach((name) => {
  assert.ok(voidFWaterNames.has(name), `Void F OSM dataset missing ${name} waterway`);
});
assert.ok(!voidFWaterNames.has('Kanal Banjir Timur'), 'Kanal Banjir Timur must stay on the procedural Void F builder');

assert.ok(citySceneContent.includes("from '../data/void_f_osm.js'"), 'CityScene.js does not import the Void F OSM dataset');
assert.ok(citySceneContent.includes('this.buildVoidFCakung();'), 'CityScene.js does not call buildVoidFCakung');

const voidFNetworkCallIndex = citySceneContent.indexOf('this.buildVoidFCakung();');
assert.ok(voidFNetworkCallIndex > 0, 'CityScene.js does not call buildVoidFCakung');
assert.ok(
  voidFNetworkCallIndex > citySceneContent.indexOf('this.buildVoidETransit();'),
  'buildVoidFCakung must run after buildVoidETransit'
);
assert.ok(
  voidFNetworkCallIndex < citySceneContent.indexOf('this.buildEastJakartaInfillAndDistricts();'),
  'buildVoidFCakung must run before buildEastJakartaInfillAndDistricts so the road masks are available'
);

const voidFNetworkStart = citySceneContent.indexOf('buildVoidFCakung() {');
const voidFNetworkEnd = citySceneContent.indexOf('getVoidERoadSegments() {', voidFNetworkStart);
assert.ok(voidFNetworkStart > 0 && voidFNetworkEnd > voidFNetworkStart, 'Cannot isolate buildVoidFCakung');
const voidFNetworkMethod = citySceneContent.slice(voidFNetworkStart, voidFNetworkEnd);
assert.ok(voidFNetworkMethod.includes('VOID_F_OSM'), 'Void F builder does not consume the OSM dataset');
assert.ok(voidFNetworkMethod.includes('segmentIntersection'), 'Void F builder missing automatic bridges');
assert.ok(voidFNetworkMethod.includes('insideAnchorSite'), 'Void F builder must mask bridges and props inside anchor sites');
assert.ok(voidFNetworkMethod.includes('VOID_F_KBT_CORRIDOR'), 'Void F builder must bridge the procedural Kanal Banjir Timur');
assert.ok(voidFNetworkMethod.includes('distanceToCikarangRail'), 'Void F builder must respect the Cikarang rail corridor');
assert.ok(voidFNetworkMethod.includes('pjuBulbMat'), 'Void F builder must share the pju-bulb material');
assert.ok(voidFNetworkMethod.includes('recordMergedPjuLamp'), 'Void F PJU lamps must feed the shared light pool');
assert.ok(voidFNetworkMethod.includes('voidFOsmStats'), 'Void F builder must expose runtime stats');
assert.ok(voidFNetworkMethod.includes('connectors: 0'), 'All six Void F anchors must be served without access connectors');
assert.ok(voidFNetworkMethod.includes('drawCalls: 8'), 'Void F network should add eight draw calls');
assert.ok(!voidFNetworkMethod.includes('new THREE.PointLight'), 'Void F network must not add PointLights');
assert.ok(!voidFNetworkMethod.includes('nightMaterials.push'), 'Void F network must not register new night materials');

[
  'voidf-roads',
  'voidf-sidewalks',
  'voidf-water',
  'voidf-bridges',
  'voidf-pju-poles',
  'voidf-pju-bulbs',
  'voidf-tree-trunks',
  'voidf-tree-foliage'
].forEach((name) => {
  assert.ok(voidFNetworkMethod.includes(name), `Void F builder missing the ${name} mesh`);
});

[
  'Jalan Dokter KRT Radjiman Widyodiningrat',
  'Jalan Pangeran Komarudin',
  'Jalan Bekasi Raya',
  'Jalan Kolonel Soegiono',
  'Jalan Pulokambing Raya',
  'Jalan Jenderal Polisi RS. Soekanto'
].forEach((name) => {
  assert.ok(voidFNetworkMethod.includes(name), `Void F PJU corridor list missing ${name}`);
});
['Buaran', 'Sunter'].forEach((name) => {
  assert.ok(voidFNetworkMethod.includes(name), `Void F tree bank list missing ${name}`);
});

assert.ok(citySceneContent.includes('getVoidFRoadSegments()'), 'CityScene.js missing the Void F road segment cache');
assert.ok(citySceneContent.includes('isNearVoidFRoad(x, z, clearance = 12)'), 'CityScene.js missing the Void F road corridor mask');
assert.ok(citySceneContent.includes('isInsideVoidFAnchorSite(x, z)'), 'CityScene.js missing the Void F anchor pad mask');

assert.ok(eastJakartaBody.includes('isNearVoidFRoad('), 'East Jakarta infill must mask buildings against the Void F road corridors');
assert.ok(eastJakartaBody.includes('isInsideVoidFAnchorSite('), 'East Jakarta infill must clear the six Void F anchor pads');
assert.ok(
  eastJakartaBody.includes('distanceToCikarangRail(') && eastJakartaBody.includes('< 16'),
  'Duren Sawit houses must be cleared from the Cikarang rail ballast'
);

// Check 65: Void F Tahap 3 — infill urban fabric Cakung–Klender–Duren Sawit–Pulo Gebang
assert.ok(citySceneContent.includes('buildVoidFInfill()'), 'CityScene.js missing buildVoidFInfill');

const voidFInfillCall = citySceneContent.indexOf('this.buildVoidFInfill();');
assert.ok(voidFInfillCall > 0, 'CityScene.js does not call buildVoidFInfill');
assert.ok(
  voidFInfillCall > citySceneContent.indexOf('this.buildVoidFCakung();'),
  'buildVoidFInfill must run after buildVoidFCakung so the OSM network exists'
);
assert.ok(
  voidFInfillCall < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidFInfill must run before buildVoidBInfillAndIndustry'
);
assert.ok(
  voidFInfillCall < citySceneContent.indexOf('this.buildEastJakartaInfillAndDistricts();'),
  'buildVoidFInfill must run before the legacy east Jakarta infill'
);

const voidFInfillBody = sliceCityBuilder('  buildVoidFInfill() {');
assert.ok(!voidFInfillBody.includes('new THREE.PointLight'), 'Void F infill must not add PointLights');
assert.ok(!voidFInfillBody.includes('nightMaterials.push'), 'Void F infill must register night windows through the shared helper');
assert.ok(voidFInfillBody.includes('addInfillNightWindows'), 'Void F infill must reuse the shared night window helper');
assert.ok(voidFInfillBody.includes('voidf-night-windows'), 'Void F infill missing the night window mesh');
assert.ok(voidFInfillBody.includes('VOID_F_OSM'), 'Void F infill must mask against the OSM roads and waterways');
assert.ok(voidFInfillBody.includes('isNearVoidFRoad'), 'Void F infill missing the road corridor mask');
assert.ok(voidFInfillBody.includes('isNearVoidFWater'), 'Void F infill missing the waterway mask');
assert.ok(voidFInfillBody.includes('width * 0.5 + 4'), 'Void F water mask must add a four-unit bank buffer');
assert.ok(voidFInfillBody.includes('VOID_F_ANCHOR_SITES'), 'Void F infill must exclude the six anchor pads');
assert.ok(voidFInfillBody.includes('existingInfillExclusions'), 'Void F infill must clear the existing east Jakarta infill blocks');
assert.ok(voidFInfillBody.includes('distanceToCikarangRail(x, z) < 16'), 'Void F infill must clear the Cikarang rail ballast');
assert.ok(voidFInfillBody.includes('distanceToVoidFKbt(x, z) < 24'), 'Void F infill must clear the Kanal Banjir Timur');
assert.ok(voidFInfillBody.includes('voidFInfillStats'), 'Void F infill must expose runtime stats');
assert.ok(voidFInfillBody.includes('drawCalls: 6'), 'Void F infill should add six instanced draw calls');
assert.ok(
  voidFInfillBody.includes('INFILL_ROOF_EAVE') && voidFInfillBody.includes('INFILL_ROOF_TOLERANCE'),
  'Void F infill must reuse the shared eave trim and roof occupancy constants'
);
assert.ok(
  voidFInfillBody.includes('ignoreWays') &&
    voidFInfillBody.includes('placeShophouseRow(roadWidth, chain.points, chain.ways)'),
  'Void F shophouse rows must ignore their own road corridor'
);

[
  'voidf-infill-houses',
  'voidf-infill-shophouses',
  'voidf-infill-house-roofs',
  'voidf-infill-warehouses',
  'voidf-infill-warehouse-roofs'
].forEach((name) => {
  assert.ok(voidFInfillBody.includes(name), `Void F infill missing the ${name} instanced mesh`);
});

[
  'Jalan Bekasi Raya',
  'Jalan Pangeran Komarudin',
  'Jalan Dokter KRT Radjiman Widyodiningrat',
  'Jalan Jenderal Polisi RS. Soekanto',
  'Jalan Raya Penggilingan',
  'Jalan Pulo Gebang',
  'Jalan Bintara Raya',
  'Jalan Raya Pondok Kopi'
].forEach((name) => {
  assert.ok(voidFInfillBody.includes(name), `Void F infill missing the ${name} shophouse corridor`);
});

[
  'R1 Cakung barat',
  'R2 Jatinegara Kaum',
  'R3 Pulogadung selatan',
  'R4 Cipinang Muara',
  'R5 Malaka Sari selatan',
  'R6 Pondok Kopi',
  'R7 Bintara',
  'R8 Pulo Gebang utara',
  'R9 Cakung timur',
  'R10 Buaran utara'
].forEach((zone) => {
  assert.ok(voidFInfillBody.includes(zone), `Void F infill missing the ${zone} residential zone`);
});

[
  'W1 Cakung industri utara',
  'W2 Pulo Gebang logistik utara',
  'W3 Pulo Gebang hinterland'
].forEach((zone) => {
  assert.ok(voidFInfillBody.includes(zone), `Void F infill missing the ${zone} warehouse cluster`);
});

assert.ok(citySceneContent.includes('const VOID_F_KBT_CORRIDOR ='), 'Void F KBT corridor must live at module scope');
assert.ok(citySceneContent.includes('const distanceToVoidFKbt = (x, z) =>'), 'CityScene.js missing the KBT distance helper');

// Check 66: Void F Tahap 4 — Park-and-Ride Klender dan enam feeder halte
assert.ok(citySceneContent.includes('buildVoidFTransit()'), 'CityScene.js missing buildVoidFTransit');

const voidFTransitCall = citySceneContent.indexOf('this.buildVoidFTransit();');
assert.ok(voidFTransitCall > 0, 'CityScene.js does not call buildVoidFTransit');
assert.ok(
  voidFTransitCall > citySceneContent.indexOf('this.buildVoidFInfill();'),
  'buildVoidFTransit must run after buildVoidFInfill so the P&R plot is reserved'
);
assert.ok(
  voidFTransitCall < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidFTransit must run before buildVoidBInfillAndIndustry'
);

assert.ok(
  citySceneContent.includes('const VOID_F_PR_PLOT ='),
  'Void F P&R plot must live at module scope so infill and transit share it'
);
assert.ok(
  citySceneContent.includes('this.voidFTransitLabels = [];'),
  'CityScene constructor must initialise the Void F transit label list'
);
assert.ok(
  voidFInfillBody.includes('VOID_F_PR_PLOT') &&
    voidFInfillBody.includes('transitReservations') &&
    voidFInfillBody.includes('insideTransitReservation(x, z, radius)'),
  'Void F infill must reserve the shared P&R plot before placing buildings'
);

const voidFTransitBody = sliceCityBuilder('  buildVoidFTransit() {');
assert.ok(!voidFTransitBody.includes('new THREE.PointLight'), 'Void F transit must not add PointLights');
assert.ok(voidFTransitBody.includes('VOID_F_OSM'), 'Void F transit must anchor halte to the OSM road network');
assert.ok(voidFTransitBody.includes('findRoadPoint'), 'Void F transit missing the road anchor helper');
assert.ok(voidFTransitBody.includes('const halteLabels = [];'), 'Void F transit must collect halte labels');
assert.ok(voidFTransitBody.includes('halteLabels.push({'), 'Void F transit must emit one label per halte');
assert.ok(
  voidFTransitBody.includes('position: [hx, 6.4, hz]'),
  'Void F halte labels must float above the canopy'
);
assert.ok(
  voidFTransitBody.includes('shortName: spec.shortName,'),
  'Void F halte labels must forward the short name'
);
assert.ok(voidFTransitBody.includes("kind: 'halte'"), 'Void F halte labels must carry the halte kind');
assert.ok(
  voidFTransitBody.includes('this.voidFTransitLabels = ['),
  'Void F transit must publish its label anchors'
);

assert.ok(voidFTransitBody.includes('VOID_F_PR_PLOT'), 'Void F transit must read the shared P&R plot');
assert.ok(
  voidFTransitBody.includes('const prCenterX = VOID_F_PR_PLOT.x;'),
  'Void F P&R centre must come from the shared plot'
);
assert.ok(
  voidFTransitBody.includes("name: 'Park and Ride Klender'"),
  'Void F P&R label missing the full name'
);
assert.ok(voidFTransitBody.includes("shortName: 'P&R Klender'"), 'Void F P&R label missing the short name');
assert.ok(voidFTransitBody.includes("kind: 'park'"), 'Void F P&R label must use the P badge');
assert.ok(
  voidFTransitBody.includes('position: [prCenterX, 7.6, prCenterZ]'),
  'Void F P&R label must clear the shelter roof'
);
assert.ok(voidFTransitBody.includes('const bayCount = 8;'), 'Void F P&R must keep eight parking bays');
assert.ok(voidFTransitBody.includes('parkingBays: bayCount'), 'Void F transit stats missing the bay count');

[
  'Halte Stasiun Klender',
  'Halte Stasiun Buaran',
  'Halte Stasiun Klender Baru',
  'Halte Terminal Pulo Gebang',
  'Halte Kawasan Industri Pulogadung',
  'Halte Rusun Klender'
].forEach((name) => {
  assert.ok(voidFTransitBody.includes(`name: '${name}'`), `Void F transit missing ${name}`);
});

[
  ['Stasiun Klender', 'Jalan Pahlawan Revolusi'],
  ['Stasiun Buaran', 'Jalan Radin Inten'],
  ['Klender Baru', 'Jalan Raya Pondok Kopi'],
  ['Terminal Pulo Gebang', 'Jalan Pangeran Komarudin'],
  ['Kawasan Industri Pulogadung', 'Jalan Puloayang Raya'],
  ['Rusun Klender', 'Jalan Delima Raya']
].forEach(([shortName, road]) => {
  assert.ok(
    voidFTransitBody.includes(`shortName: '${shortName}'`),
    `Void F halte label missing the ${shortName} short name`
  );
  assert.ok(voidFTransitBody.includes(`road: '${road}'`), `Void F halte missing the ${road} anchor`);
});

[
  'voidf-transit-concrete',
  'voidf-transit-steel',
  'voidf-transit-sign',
  'voidf-transit-tree-trunks',
  'voidf-transit-tree-foliage'
].forEach((name) => {
  assert.ok(voidFTransitBody.includes(name), `Void F transit missing the ${name} mesh`);
});

assert.ok(voidFTransitBody.includes('registerNightMaterial'), 'Void F transit sign must register for night');
assert.ok(voidFTransitBody.includes('emissive: 0xfff4d6'), 'Void F transit sign night emissive drifted');
assert.ok(voidFTransitBody.includes('nightIntensity: 0.55'), 'Void F transit sign night intensity drifted');
assert.ok(voidFTransitBody.includes('voidFTransitStats'), 'Void F transit must expose runtime stats');
assert.ok(voidFTransitBody.includes('drawCalls: 5'), 'Void F transit should add five draw calls');

assert.ok(
  mainJsContent.includes('...this.city.voidCTransitLabels') &&
    mainJsContent.includes('...this.city.voidDTransitLabels') &&
    mainJsContent.includes('...this.city.voidETransitLabels') &&
    mainJsContent.includes('...this.city.voidFTransitLabels'),
  'main.js must forward all four transit label arrays to UIManager'
);

// Check 67: Void G Tahap 1 — 6 anchor Pasar Rebo, Ciracas, Cipayung & Cibubur
const voidGAnchors = [
  { id: 'terminal-kampung-rambutan', builder: 'createTerminalKampungRambutan', position: [860, 0, 1634], marker: 'terminal-kampung-rambutan-hall' },
  { id: 'rsud-pasar-rebo', builder: 'createRsudPasarRebo', position: [552, 0, 1541], marker: 'rsud-pasar-rebo-tower' },
  { id: 'stasiun-lrt-ciracas', builder: 'createStasiunLrtCiracas', position: [896, 0, 1827], marker: 'stasiun-lrt-ciracas-platform' },
  { id: 'rusun-ciracas', builder: 'createRusunCiracas', position: [639, 0, 1860], marker: 'rusun-ciracas-blocks' },
  { id: 'mabes-tni-cilangkap', builder: 'createMabesTniCilangkap', position: [1276, 0, 1891], marker: 'mabes-tni-cilangkap-gate' },
  { id: 'cibubur-junction', builder: 'createCibuburJunction', position: [1013, 0, 2508], marker: 'cibubur-junction-mall' }
];

assert.deepStrictEqual(
  JAKARTA_LANDMARKS.slice(105, 111).map((l) => l.id),
  voidGAnchors.map((a) => a.id),
  'Void G anchors must follow Rusun Klender as landmarks #106-#111'
);

voidGAnchors.forEach(({ id, builder, position, marker }) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Void G landmark ${id} not found in JAKARTA_LANDMARKS`);
  assert.deepStrictEqual(lm.position, position, `Void G landmark ${id} position changed without updating the layout`);
  assert.ok(lm.position[0] >= 300 && lm.position[0] <= 1350, `Landmark ${id} X position ${lm.position[0]} outside Void G range [300, 1350]`);
  assert.ok(lm.position[2] >= 1450 && lm.position[2] <= 2600, `Landmark ${id} Z position ${lm.position[2]} outside Void G range [1450, 2600]`);
  assert.ok(lm.facts && lm.facts.length >= 3, `Landmark ${id} must have at least 3 educational facts`);
  assert.ok(lm.labelHeight >= 20, `Landmark ${id} labelHeight ${lm.labelHeight} is too low for a Void G anchor`);
  assert.ok(lm.cameraPosition[1] > 30, `Landmark ${id} camera must be elevated above street level`);
  assert.ok(lm.cameraTarget[1] < lm.cameraPosition[1], `Landmark ${id} camera must look downward at the anchor`);
  assert.ok(
    Math.abs(lm.position[0]) + 160 <= 2900 && Math.abs(lm.position[2]) + 160 <= 2900,
    `Landmark ${id} must stay inside the expanded 5800-unit ground plane`
  );
  const [projectedX, projectedZ] = projectGpsToScene(lm.coordinates.lat, lm.coordinates.lng);
  const deviation = Math.hypot(lm.position[0] - projectedX, lm.position[2] - projectedZ);
  assert.ok(deviation <= 80, `Void G landmark ${id} deviates ${deviation.toFixed(1)} units from GPS projection (max 80)`);

  const body = sliceLandmarkBuilder(`static ${builder}() {`);
  assert.ok(body.includes(`name = '${marker}'`), `Builder ${builder} must name its landmark mesh '${marker}'`);
  assert.ok(body.includes('LandmarkModels.tagNightWindow('), `Builder ${builder} must register glass for night glow`);
  assert.ok(!body.includes('new THREE.PointLight('), `Builder ${builder} must not add PointLights`);
  assert.ok(
    citySceneContent.includes(`"${id}": () => LandmarkModels.${builder}()`),
    `CityScene.js missing Void G dispatch mapping for "${id}"`
  );
});

const voidGModels = JAKARTA_LANDMARKS.slice(105, 111);
voidGModels.forEach((a, i) => {
  voidGModels.slice(i + 1).forEach((b) => {
    const distance = Math.hypot(a.position[0] - b.position[0], a.position[2] - b.position[2]);
    assert.ok(distance >= 70, `Void G anchors ${a.id} and ${b.id} are only ${distance.toFixed(1)} units apart`);
  });
  JAKARTA_LANDMARKS.slice(0, 105).forEach((b) => {
    const distance = Math.hypot(a.position[0] - b.position[0], a.position[2] - b.position[2]);
    assert.ok(distance >= 70, `Void G anchor ${a.id} crowds existing anchor ${b.id} (${distance.toFixed(1)} units)`);
  });
});

voidGAnchors.forEach(({ id }, index) => {
  const label = String(106 + index);
  assert.ok(indexHtmlContent.includes(`data-tour-id="${id}"`), `index.html missing Void G tour button for "${id}"`);
  assert.ok(
    new RegExp(`data-tour-id="${id}"[\\s\\S]{0,400}?>${label}</span>`).test(indexHtmlContent),
    `Tour button for "${id}" must carry index ${label}`
  );
});

assert.ok(
  citySceneContent.includes('new THREE.PlaneGeometry(5800, 5800)'),
  'The ground plane must expand to 5800 units so the Cibubur corner is not floating in the void'
);
assert.ok(
  citySceneContent.includes('new THREE.GridHelper(5600, 280,'),
  'The coordinate grid must expand to 5600 units while keeping 20-unit spacing'
);

const lrtCibuburCorridor = [
  [712.3, 723.8],
  [640, 900],
  [660, 1150],
  [798, 1385],
  [864, 1625],
  [896, 1828],
  [1003, 2477],
  [1022, 2539]
];
assert.ok(
  /const LRT_CIBUBUR_CORRIDOR = \[/.test(citySceneModuleScope),
  'CityScene.js must expose LRT_CIBUBUR_CORRIDOR at module scope'
);
lrtCibuburCorridor.forEach(([x, z]) => {
  assert.ok(
    citySceneModuleScope.includes(`[${x}, ${z}]`),
    `LRT_CIBUBUR_CORRIDOR missing waypoint [${x}, ${z}]`
  );
});

assert.ok(
  trafficBody.includes('LRT_CIBUBUR_CORRIDOR.map'),
  'The LRT Cibubur train curve must be built from the shared corridor'
);
assert.ok(
  trafficBody.includes('new THREE.Vector3(x, 15.0, z)'),
  'LRT Cibubur trains must stay on the 15-metre viaduct deck'
);
assert.ok(
  !trafficBody.includes('new THREE.Vector3(1120.0, 15.0, 1820.0)'),
  'The retired inline LRT Cibubur curve must not survive next to the shared corridor'
);

const viaductCall = citySceneContent.indexOf('this.buildLrtCibuburViaduct();');
assert.ok(viaductCall > 0, 'CityScene.js does not call buildLrtCibuburViaduct');
assert.ok(
  viaductCall > citySceneContent.indexOf('this.buildElevatedRailway();'),
  'buildLrtCibuburViaduct must run after the elevated railway hub exists'
);
assert.ok(
  viaductCall < citySceneContent.indexOf('this.buildLandmarks();'),
  'buildLrtCibuburViaduct must run before buildLandmarks'
);

const viaductBody = sliceCityBuilder('  buildLrtCibuburViaduct() {');
assert.ok(viaductBody.includes('LRT_CIBUBUR_CORRIDOR'), 'The viaduct must follow the shared LRT Cibubur corridor');
assert.ok(viaductBody.includes('mergeGeometries'), 'The LRT Cibubur viaduct must merge its geometry into a few draw calls');
assert.ok(!viaductBody.includes('new THREE.PointLight'), 'The LRT Cibubur viaduct must not add PointLights');
['lrtcibubur-deck', 'lrtcibubur-flange', 'lrtcibubur-track', 'lrtcibubur-piers'].forEach((name) => {
  assert.ok(viaductBody.includes(name), `LRT Cibubur viaduct missing the ${name} merged mesh`);
});
['lrtcibubur-terminus-platform', 'lrtcibubur-terminus-canopy', 'lrtcibubur-terminus-buffer'].forEach((name) => {
  assert.ok(viaductBody.includes(name), `Viaduk LRT Cibubur harus menutup ujung rel dengan ${name} (Stasiun Harjamukti)`);
});
assert.ok(
  viaductBody.includes('LRT_CIBUBUR_CORRIDOR[LRT_CIBUBUR_CORRIDOR.length - 1]'),
  'Terminus Harjamukti harus berjangkar pada waypoint terakhir koridor LRT Cibubur'
);

// Check 68: Void G Tahap 2 — dataset OSM & builder jaringan Pasar Rebo–Ciracas–Cipayung–Cibubur
assert.ok(VOID_G_OSM.meta.source.includes('OpenStreetMap'), 'Void G OSM dataset missing OSM attribution');
assert.ok(VOID_G_OSM.meta.license.includes('ODbL'), 'Void G OSM dataset missing ODbL license');
assert.strictEqual(VOID_G_OSM.meta.retrieved, '2026-10-30', 'Void G dataset retrieval date changed');
assert.ok(VOID_G_OSM.meta.api.includes('overpass-api.de'), 'Void G dataset must record the Overpass endpoint');
assert.ok(VOID_G_OSM.meta.api.includes('2026-10-30T07:31:25Z'), 'Void G dataset must record the OSM base snapshot');
assert.strictEqual(VOID_G_OSM.meta.projection, 'projectGpsToScene', 'Void G dataset must use the unscaled GPS projection');
assert.deepStrictEqual(
  VOID_G_OSM.meta.projectionConstants,
  { originLng: 106.823048, originLat: -6.194957, scaleX: 14100, scaleZ: 14180 },
  'Void G projection constants drifted from projectGpsToScene'
);
assert.deepStrictEqual(
  VOID_G_OSM.meta.bbox,
  { south: -6.386, west: 106.85, north: -6.292, east: 106.926 },
  'Void G source bbox changed without re-downloading the extract'
);
assert.deepStrictEqual(
  VOID_G_OSM.meta.clipBox,
  { minX: 380, maxX: 1450, minZ: 1375, maxZ: 2710 },
  'Void G clip box changed without updating the layout'
);
assert.strictEqual(VOID_G_OSM.meta.simplification, 2, 'Void G simplification must stay at Douglas–Peucker 2.0');
['Situ Jambore Cibubur', 'Rawa Gede', 'Waduk Giri Kencana'].forEach((name) => {
  assert.ok(VOID_G_OSM.meta.note.includes(name), `Void G dataset must note the excluded ${name} water body`);
});
assert.ok(VOID_G_OSM.meta.note.includes('konektor'), 'Void G dataset must note the Mabes TNI access connector');

assert.strictEqual(VOID_G_OSM.roads.length, 293, `Void G OSM dataset changed size: ${VOID_G_OSM.roads.length} roads`);
assert.strictEqual(VOID_G_OSM.meta.roadCount, VOID_G_OSM.roads.length, 'Void G roadCount does not match roads array');
const allVoidGPoints = VOID_G_OSM.roads.flatMap((road) => road.points);
assert.strictEqual(allVoidGPoints.length, 1039, `Void G road point count changed: ${allVoidGPoints.length}`);
assert.strictEqual(VOID_G_OSM.meta.roadPointCount, allVoidGPoints.length, 'Void G roadPointCount does not match dataset');
assert.strictEqual(new Set(VOID_G_OSM.roads.map((road) => road.name)).size, 126, 'Void G road name coverage changed');
assert.deepStrictEqual(
  VOID_G_OSM.roads.reduce((counts, road) => {
    counts[road.type] = (counts[road.type] || 0) + 1;
    return counts;
  }, {}),
  { trunk: 58, primary: 27, secondary: 46, tertiary: 162 },
  'Void G road class mix changed'
);

const voidGWidths = { trunk: 16, primary: 18, secondary: 14, tertiary: 11 };
VOID_G_OSM.roads.forEach((road) => {
  assert.ok(road.name && road.name.trim().length > 0, 'Void G road missing a name');
  assert.ok(voidGWidths[road.type] === road.width, `Void G road ${road.name} has unexpected type/width ${road.type}/${road.width}`);
  assert.ok(road.points.length >= 2, `Void G road ${road.name} has fewer than two points`);
  road.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), `Void G road ${road.name} contains a non-finite coordinate`);
    assert.ok(x >= 380 && x <= 1450 && z >= 1375 && z <= 2710, `Void G road ${road.name} point ${x}/${z} outside the clip box`);
  });
});

const voidGRoadNames = new Set(VOID_G_OSM.roads.map((road) => road.name));
[
  'Jalan Raya Bogor',
  'Jalan Transyogi',
  'Jalan Tahi Bonar Simatupang',
  'Jalan Suprijadi',
  'Jalan Jambore Raya',
  'Jalan Mabes Hankam',
  'Jalan Bina Marga',
  'Jalan Hankam Cilangkap',
  'Jalan Kranggan',
  'Jalan Insinyur Haji Juanda',
  'Jalan Setu Cipayung',
  'Jalan Cilangkap Raya',
  'Jalan Raya Cipayung'
].forEach((name) => {
  assert.ok(voidGRoadNames.has(name), `Void G OSM dataset missing ${name}`);
});
['Jalan Taman Mini', 'Jalan Raya Pondok Gede', 'Jalan Pintu II TMII'].forEach((prefix) => {
  assert.ok(
    !VOID_G_OSM.roads.some((road) => road.name.startsWith(prefix)),
    `${prefix} ways must stay excluded from the at-grade Void G network`
  );
});
assert.ok(
  !VOID_G_OSM.roads.some((road) => road.type === 'busway' || road.type === 'motorway'),
  'Void G dataset must not include busway or toll ways'
);

const distanceToVoidGRoad = (point) => {
  let best = Infinity;
  VOID_G_OSM.roads.forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      best = Math.min(best, distanceToSegment(point, road.points[i], road.points[i + 1]));
    }
  });
  return best;
};
voidGAnchors.forEach(({ id }) => {
  const lm = JAKARTA_LANDMARKS.find((landmark) => landmark.id === id);
  const distance = distanceToVoidGRoad([lm.position[0], lm.position[2]]);
  assert.ok(distance < 80, `Void G landmark ${id} is ${distance.toFixed(1)} units from the nearest OSM road`);
  if (id === 'mabes-tni-cilangkap') {
    assert.ok(distance > 60, `Mabes TNI should rely on the access connector, not a road at ${distance.toFixed(1)} units`);
  }
});

assert.strictEqual(VOID_G_OSM.waterways.length, 19, `Void G waterway count changed: ${VOID_G_OSM.waterways.length}`);
assert.strictEqual(VOID_G_OSM.meta.waterwayCount, VOID_G_OSM.waterways.length, 'Void G waterwayCount mismatch');
const allVoidGWaterPoints = VOID_G_OSM.waterways.flatMap((waterway) => waterway.points);
assert.strictEqual(allVoidGWaterPoints.length, 287, `Void G waterway point count changed: ${allVoidGWaterPoints.length}`);
assert.strictEqual(VOID_G_OSM.meta.waterPointCount, allVoidGWaterPoints.length, 'Void G waterPointCount mismatch');
const voidGWaterWidths = {
  'Ci Liwung': 16,
  'Kali Baru': 10,
  Kalibaru: 9,
  'Kali Cipinang': 9,
  'Kali Cijantung': 5
};
VOID_G_OSM.waterways.forEach((waterway) => {
  assert.ok(['river', 'stream'].includes(waterway.kind), `Unexpected Void G waterway kind ${waterway.kind}`);
  assert.strictEqual(
    waterway.width,
    voidGWaterWidths[waterway.name],
    `Void G waterway ${waterway.name || '(unnamed)'} width drifted to ${waterway.width}`
  );
  assert.ok(waterway.points.length >= 2, 'Void G waterway has fewer than two points');
  waterway.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), 'Void G waterway contains a non-finite coordinate');
    assert.ok(x >= 380 && x <= 1450 && z >= 1375 && z <= 2710, `Void G waterway point ${x}/${z} outside the clip box`);
  });
});
const voidGWaterNames = new Set(VOID_G_OSM.waterways.map((waterway) => waterway.name));
['Ci Liwung', 'Kali Baru', 'Kalibaru', 'Kali Cipinang', 'Kali Cijantung'].forEach((name) => {
  assert.ok(voidGWaterNames.has(name), `Void G OSM dataset missing ${name} waterway`);
});

assert.strictEqual(VOID_G_OSM.waterBodies.length, 15, `Void G water body count changed: ${VOID_G_OSM.waterBodies.length}`);
assert.strictEqual(VOID_G_OSM.meta.waterBodyCount, VOID_G_OSM.waterBodies.length, 'Void G waterBodyCount mismatch');
const allVoidGWaterBodyPoints = VOID_G_OSM.waterBodies.flatMap((body) => body.points);
assert.strictEqual(allVoidGWaterBodyPoints.length, 161, `Void G water body point count changed: ${allVoidGWaterBodyPoints.length}`);
assert.strictEqual(VOID_G_OSM.meta.waterBodyPointCount, allVoidGWaterBodyPoints.length, 'Void G waterBodyPointCount mismatch');
const voidGWaterBodyNames = VOID_G_OSM.waterBodies.map((body) => body.name);
[
  'Situ Rawa Dongkal',
  'Situ Tipar',
  'Situ Pedongkelan',
  'Kolam Pemancingan Telaga Mina',
  'Waduk Sunter Hulu',
  'Waduk Surilang',
  'Embung Pekayon',
  'Situ Pangarengan',
  'Situ Gadog',
  'Situ Rawa Babon',
  'Waduk Pondok Ranggon',
  'Waduk Setu',
  'Waduk Kampung Rambutan 2',
  'Waduk Dukuh 1',
  'Waduk Dukuh 2'
].forEach((name) => {
  assert.ok(voidGWaterBodyNames.includes(name), `Void G OSM dataset missing ${name} water body`);
});
['Situ Jambore Cibubur', 'Rawa Gede', 'Waduk Giri Kencana'].forEach((name) => {
  assert.ok(!voidGWaterBodyNames.includes(name), `${name} must stay excluded from the Void G dataset`);
});
const polygonArea = (points) => {
  let sum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    sum += points[i][0] * points[i + 1][1] - points[i + 1][0] * points[i][1];
  }
  return Math.abs(sum) / 2;
};
const waterShapeArea = (points) => {
  let sum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    sum += points[i][0] * -points[i + 1][1] - points[i + 1][0] * -points[i][1];
  }
  return sum / 2;
};
VOID_G_OSM.waterBodies.forEach((body) => {
  assert.ok(['lake', 'water', 'reservoir'].includes(body.kind), `Unexpected Void G water body kind ${body.kind}`);
  assert.ok(body.points.length >= 5, `Void G water body ${body.name} has fewer than five points`);
  assert.deepStrictEqual(
    body.points[0],
    body.points[body.points.length - 1],
    `Void G water body ${body.name} ring must be closed`
  );
  assert.ok(polygonArea(body.points) >= 100, `Void G water body ${body.name} is too small to model`);
  assert.ok(
    waterShapeArea(body.points) > 0,
    `Void G water body ${body.name} must wind counter-clockwise so the situ face points up`
  );
  body.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), `Void G water body ${body.name} contains a non-finite coordinate`);
    assert.ok(x >= 380 && x <= 1450 && z >= 1375 && z <= 2710, `Void G water body ${body.name} point ${x}/${z} outside the clip box`);
  });
});

assert.ok(citySceneContent.includes("from '../data/void_g_osm.js'"), 'CityScene.js does not import the Void G OSM dataset');
const voidGNetworkCallIndex = citySceneContent.indexOf('this.buildVoidGPasarRebo();');
assert.ok(voidGNetworkCallIndex > 0, 'CityScene.js does not call buildVoidGPasarRebo');
assert.ok(
  voidGNetworkCallIndex > citySceneContent.indexOf('this.buildVoidFTransit();'),
  'buildVoidGPasarRebo must run after buildVoidFTransit'
);
assert.ok(
  voidGNetworkCallIndex < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidGPasarRebo must run before buildVoidBInfillAndIndustry'
);
assert.ok(
  citySceneContent.includes('isInsideVoidGAnchorSite(x, z)'),
  'CityScene.js missing the Void G anchor pad mask'
);

const voidGNetworkMethod = sliceCityBuilder('  buildVoidGPasarRebo() {');
assert.ok(voidGNetworkMethod.includes('VOID_G_OSM'), 'Void G builder does not consume the OSM dataset');
assert.ok(voidGNetworkMethod.includes('segmentIntersection'), 'Void G builder missing automatic bridges');
assert.ok(voidGNetworkMethod.includes('insideAnchorSite'), 'Void G builder must mask bridges and props inside anchor sites');
assert.ok(voidGNetworkMethod.includes('new THREE.Shape'), 'Void G builder must triangulate the situ polygons');
assert.ok(
  voidGNetworkMethod.includes('this.registerNightMaterial(waterMat, {'),
  'Void G water must join the night material registry'
);
assert.ok(
  voidGNetworkMethod.includes('emissive: WATER_NIGHT_EMISSIVE'),
  'Void G water must reuse the shared teal night emissive'
);
assert.ok(voidGNetworkMethod.includes('pjuBulbMat'), 'Void G builder must share the pju-bulb material');
assert.ok(voidGNetworkMethod.includes('recordMergedPjuLamp'), 'Void G PJU lamps must feed the shared light pool');
assert.ok(voidGNetworkMethod.includes('voidGOsmStats'), 'Void G builder must expose runtime stats');
assert.ok(voidGNetworkMethod.includes('connectors: 1'), 'Void G must record the single Mabes TNI connector');
assert.ok(voidGNetworkMethod.includes('drawCalls: 9'), 'Void G network should add nine draw calls');
assert.ok(!voidGNetworkMethod.includes('new THREE.PointLight'), 'Void G network must not add PointLights');
assert.ok(!voidGNetworkMethod.includes('nightMaterials.push'), 'Void G network must not register new night materials');
assert.ok(
  voidGNetworkMethod.includes('[[1204.5, 1925.2], [1276, 1949]]'),
  'Void G must route the Mabes TNI connector from Jalan Hankam Cilangkap to the gate'
);

[
  'voidg-roads',
  'voidg-sidewalks',
  'voidg-water',
  'voidg-water-bodies',
  'voidg-bridges',
  'voidg-pju-poles',
  'voidg-pju-bulbs',
  'voidg-tree-trunks',
  'voidg-tree-foliage'
].forEach((name) => {
  assert.ok(voidGNetworkMethod.includes(name), `Void G builder missing the ${name} mesh`);
});

[
  'Jalan Raya Bogor',
  'Jalan Transyogi',
  'Jalan Tahi Bonar Simatupang',
  'Jalan Suprijadi',
  'Jalan Jambore Raya',
  'Jalan Mabes Hankam'
].forEach((name) => {
  assert.ok(voidGNetworkMethod.includes(name), `Void G PJU corridor list missing ${name}`);
});
['Kali Cipinang', 'Kali Baru'].forEach((name) => {
  assert.ok(voidGNetworkMethod.includes(name), `Void G tree bank list missing ${name}`);
});

// Check 69: Void G Tahap 3 — infill urban fabric Pasar Rebo–Ciracas–Cipayung–Cibubur
assert.ok(citySceneContent.includes('buildVoidGInfill()'), 'CityScene.js missing buildVoidGInfill');

const voidGInfillCall = citySceneContent.indexOf('this.buildVoidGInfill();');
assert.ok(voidGInfillCall > 0, 'CityScene.js does not call buildVoidGInfill');
assert.ok(
  voidGInfillCall > citySceneContent.indexOf('this.buildVoidGPasarRebo();'),
  'buildVoidGInfill must run after buildVoidGPasarRebo so the OSM network exists'
);
assert.ok(
  voidGInfillCall < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidGInfill must run before buildVoidBInfillAndIndustry'
);

const voidGInfillBody = sliceCityBuilder('  buildVoidGInfill() {');
assert.ok(!voidGInfillBody.includes('new THREE.PointLight'), 'Void G infill must not add PointLights');
assert.ok(!voidGInfillBody.includes('nightMaterials.push'), 'Void G infill must register night windows through the shared helper');
assert.ok(voidGInfillBody.includes('addInfillNightWindows'), 'Void G infill must reuse the shared night window helper');
assert.ok(voidGInfillBody.includes('voidg-night-windows'), 'Void G infill missing the night window mesh');
assert.ok(voidGInfillBody.includes('VOID_G_OSM'), 'Void G infill must mask against the OSM roads, waterways and situ');
assert.ok(voidGInfillBody.includes('isNearVoidGRoad'), 'Void G infill missing the road corridor mask');
assert.ok(voidGInfillBody.includes('isNearVoidGWater'), 'Void G infill missing the waterway mask');
assert.ok(voidGInfillBody.includes('width * 0.5 + 4'), 'Void G water mask must add a four-unit bank buffer');
assert.ok(voidGInfillBody.includes('isInsideVoidGWaterBody'), 'Void G infill must keep buildings out of the situ polygons');
assert.ok(voidGInfillBody.includes('isInsideVoidGTMII'), 'Void G infill must clear the Taman Mini Indonesia Indah plate and tree ring');
assert.ok(voidGInfillBody.includes('VOID_G_ANCHOR_SITES'), 'Void G infill must exclude the six anchor pads');
assert.ok(voidGInfillBody.includes('VOID_G_PR_PLOT'), 'Void G infill must reserve the shared P&R plot');
assert.ok(voidGInfillBody.includes('transitReservations'), 'Void G infill missing the transit reservation list');
assert.ok(voidGInfillBody.includes('insideTransitReservation(x, z, radius)'), 'Void G infill must carve the P&R plot out of the building masks');
assert.ok(voidGInfillBody.includes('LRT_CIBUBUR_CORRIDOR'), 'Void G infill must clear the LRT Cibubur viaduct corridor');
assert.ok(voidGInfillBody.includes('voidGInfillStats'), 'Void G infill must expose runtime stats');
assert.ok(voidGInfillBody.includes('drawCalls: 6'), 'Void G infill should add six instanced draw calls');
assert.ok(
  voidGInfillBody.includes('INFILL_ROOF_EAVE') && voidGInfillBody.includes('INFILL_ROOF_TOLERANCE'),
  'Void G infill must reuse the shared eave trim and roof occupancy constants'
);
assert.ok(
  voidGInfillBody.includes('ignoreWays') &&
    voidGInfillBody.includes('placeShophouseRow(roadWidth, chain.points, chain.ways)'),
  'Void G shophouse rows must ignore their own road corridor'
);

[
  'voidg-infill-houses',
  'voidg-infill-shophouses',
  'voidg-infill-house-roofs',
  'voidg-infill-warehouses',
  'voidg-infill-warehouse-roofs'
].forEach((name) => {
  assert.ok(voidGInfillBody.includes(name), `Void G infill missing the ${name} instanced mesh`);
});

[
  'Jalan Raya Bogor',
  'Jalan Ciracas',
  'Jalan Kelapa Dua Wetan',
  'Jalan Setu Cipayung',
  'Jalan Cilangkap Raya',
  'Jalan Jambore Raya',
  'Jalan Transyogi'
].forEach((name) => {
  assert.ok(voidGInfillBody.includes(name), `Void G infill missing the ${name} shophouse corridor`);
});

[
  'R1 Pasar Rebo barat',
  'R2 Cibubur barat',
  'R3 Cibubur barat daya',
  'R4 Ciracas',
  'R5 Cibubur utara',
  'R6 Cibubur tengah',
  'R7 Cipayung barat',
  'R8 Cipayung timur',
  'R9 Cibubur selatan',
  'R10 Cibubur tenggara'
].forEach((zone) => {
  assert.ok(voidGInfillBody.includes(zone), `Void G infill missing the ${zone} residential zone`);
});

['W1 Pasar Rebo logistik', 'W2 Cibubur logistik'].forEach((zone) => {
  assert.ok(voidGInfillBody.includes(zone), `Void G infill missing the ${zone} warehouse cluster`);
});

assert.ok(citySceneContent.includes('const VOID_G_PR_PLOT ='), 'Void G P&R plot must live at module scope so infill and transit share it');
assert.ok(citySceneContent.includes('isInsideVoidGWaterBody(x, z, margin = 6)'), 'CityScene.js missing the situ polygon mask');
assert.ok(citySceneContent.includes('isInsideVoidGTMII(x, z, margin = 0)'), 'CityScene.js missing the TMII exclusion mask');
assert.ok(citySceneContent.includes('getVoidGRoadSegments() {'), 'CityScene.js missing the Void G road segment cache');
assert.ok(citySceneContent.includes('isNearVoidGRoad(x, z, clearance = 12) {'), 'CityScene.js missing the Void G road clearance helper');
assert.ok(citySceneContent.includes('const pointInPolygon = (x, z, points) =>'), 'CityScene.js missing the polygon containment helper');
assert.ok(citySceneContent.includes('const distanceToLrtCibubur = (x, z) =>'), 'CityScene.js missing the LRT Cibubur distance helper');

const voidGPrPlotMatch = citySceneContent.match(/const VOID_G_PR_PLOT = \{([^}]*)\};/);
assert.ok(voidGPrPlotMatch, 'Void G P&R plot constant unreadable');
assert.ok(
  voidGPrPlotMatch[1].includes('x: 980') &&
    voidGPrPlotMatch[1].includes('z: 1823') &&
    voidGPrPlotMatch[1].includes('w: 40') &&
    voidGPrPlotMatch[1].includes('d: 22'),
  'Void G P&R plot drifted from the audited Stasiun LRT Ciracas parcel'
);

// Check 70: Void G Tahap 4 — Park-and-Ride Ciracas dan enam feeder halte
assert.ok(citySceneContent.includes('buildVoidGTransit()'), 'CityScene.js missing buildVoidGTransit');

const voidGTransitCall = citySceneContent.indexOf('this.buildVoidGTransit();');
assert.ok(voidGTransitCall > 0, 'CityScene.js does not call buildVoidGTransit');
assert.ok(
  voidGTransitCall > citySceneContent.indexOf('this.buildVoidGInfill();'),
  'buildVoidGTransit must run after buildVoidGInfill so the P&R plot is reserved'
);
assert.ok(
  voidGTransitCall < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidGTransit must run before buildVoidBInfillAndIndustry'
);

assert.ok(
  citySceneContent.includes('this.voidGTransitLabels = [];'),
  'CityScene constructor must initialise the Void G transit label list'
);

const voidGDrivewayMatch = citySceneContent.match(/const VOID_G_PR_DRIVEWAY = \{([^}]*)\};/);
assert.ok(voidGDrivewayMatch, 'Void G P&R driveway constant unreadable');
assert.ok(
  voidGDrivewayMatch[1].includes('x: 991') &&
    voidGDrivewayMatch[1].includes('z: 1800.5') &&
    voidGDrivewayMatch[1].includes('w: 14') &&
    voidGDrivewayMatch[1].includes('d: 23'),
  'Void G P&R driveway drifted from the audited Jalam Beringin Raya access strip'
);
assert.ok(
  voidGInfillBody.includes('VOID_G_PR_DRIVEWAY'),
  'Void G infill must reserve the P&R driveway so houses do not block access'
);

const voidGTransitBody = sliceCityBuilder('  buildVoidGTransit() {');
assert.ok(!voidGTransitBody.includes('new THREE.PointLight'), 'Void G transit must not add PointLights');
assert.ok(voidGTransitBody.includes('VOID_G_OSM'), 'Void G transit must anchor halte to the OSM road network');
assert.ok(voidGTransitBody.includes('findRoadPoint'), 'Void G transit missing the road anchor helper');
assert.ok(voidGTransitBody.includes('const halteLabels = [];'), 'Void G transit must collect halte labels');
assert.ok(voidGTransitBody.includes('halteLabels.push({'), 'Void G transit must emit one label per halte');
assert.ok(
  voidGTransitBody.includes('position: [hx, 6.4, hz]'),
  'Void G halte labels must float above the canopy'
);
assert.ok(
  voidGTransitBody.includes('shortName: spec.shortName,'),
  'Void G halte labels must forward the short name'
);
assert.ok(voidGTransitBody.includes("kind: 'halte'"), 'Void G halte labels must carry the halte kind');
assert.ok(
  voidGTransitBody.includes('this.voidGTransitLabels = ['),
  'Void G transit must publish its label anchors'
);

assert.ok(voidGTransitBody.includes('VOID_G_PR_PLOT'), 'Void G transit must read the shared P&R plot');
assert.ok(
  voidGTransitBody.includes('const prCenterX = VOID_G_PR_PLOT.x;'),
  'Void G P&R centre must come from the shared plot'
);
assert.ok(
  voidGTransitBody.includes('VOID_G_PR_DRIVEWAY.w') && voidGTransitBody.includes('VOID_G_PR_DRIVEWAY.d'),
  'Void G P&R driveway must use the shared access strip so infill and transit stay aligned'
);
assert.ok(
  voidGTransitBody.includes("name: 'Park and Ride Ciracas'"),
  'Void G P&R label missing the full name'
);
assert.ok(voidGTransitBody.includes("shortName: 'P&R Ciracas'"), 'Void G P&R label missing the short name');
assert.ok(voidGTransitBody.includes("kind: 'park'"), 'Void G P&R label must use the P badge');
assert.ok(
  voidGTransitBody.includes('position: [prCenterX, 7.6, prCenterZ]'),
  'Void G P&R label must clear the shelter roof'
);
assert.ok(voidGTransitBody.includes('const bayCount = 8;'), 'Void G P&R must keep eight parking bays');
assert.ok(voidGTransitBody.includes('parkingBays: bayCount'), 'Void G transit stats missing the bay count');

[
  'Halte Terminal Kampung Rambutan',
  'Halte RSUD Pasar Rebo',
  'Halte Stasiun LRT Ciracas',
  'Halte Rusun Ciracas',
  'Halte Mabes TNI Cilangkap',
  'Halte Cibubur Junction'
].forEach((name) => {
  assert.ok(voidGTransitBody.includes(`name: '${name}'`), `Void G transit missing ${name}`);
});

[
  ['Terminal Kampung Rambutan', 'Jalan Mabes Hankam', 'near: [901.4, 1561.5], side: 1'],
  ['RSUD Pasar Rebo', 'Jalan Raya Tengah', 'near: [516.0, 1477.4], side: 1'],
  ['Stasiun LRT Ciracas', 'Jalan Bina Marga', 'near: [914.5, 1869.5], side: 1'],
  ['Rusun Ciracas', 'Jalan Ciracas', 'near: [713.7, 1913.4], side: 1'],
  ['Mabes TNI Cilangkap', 'Jalan Hankam Cilangkap', 'near: [1186.0, 1925.1], side: 1'],
  ['Cibubur Junction', 'Jalan Transyogi', 'near: [1042.4, 2570.3], side: 1']
].forEach(([shortName, road, anchor]) => {
  assert.ok(
    voidGTransitBody.includes(`shortName: '${shortName}'`),
    `Void G halte label missing the ${shortName} short name`
  );
  assert.ok(voidGTransitBody.includes(`road: '${road}'`), `Void G halte missing the ${road} anchor`);
  assert.ok(
    voidGTransitBody.includes(anchor),
    `Void G halte ${shortName} drifted from its audited shoulder point`
  );
});

[
  'voidg-transit-concrete',
  'voidg-transit-steel',
  'voidg-transit-sign',
  'voidg-transit-tree-trunks',
  'voidg-transit-tree-foliage'
].forEach((name) => {
  assert.ok(voidGTransitBody.includes(name), `Void G transit missing the ${name} mesh`);
});

assert.ok(voidGTransitBody.includes('registerNightMaterial'), 'Void G transit sign must register for night');
assert.ok(voidGTransitBody.includes('emissive: 0xfff4d6'), 'Void G transit sign night emissive drifted');
assert.ok(voidGTransitBody.includes('nightIntensity: 0.55'), 'Void G transit sign night intensity drifted');
assert.ok(voidGTransitBody.includes('voidGTransitStats'), 'Void G transit must expose runtime stats');
assert.ok(voidGTransitBody.includes('drawCalls: 5'), 'Void G transit should add five draw calls');

assert.ok(
  mainJsContent.includes('...this.city.voidGTransitLabels'),
  'main.js must forward the Void G transit labels to UIManager'
);

// Check 71: Visual P2 — jembatan girder rel Cikarang di KBT & konektor KBT–Void E
const eastInfraBody = sliceCityBuilder('  buildEastJakartaInfrastructure() {');
const eastDistrictBody = sliceCityBuilder('  buildEastJakartaInfillAndDistricts() {');

assert.ok(
  citySceneModuleScope.includes('const CIKARANG_RAIL_KBT_CROSSING ='),
  'CityScene.js must expose the audited rail x KBT crossing'
);
assert.ok(
  citySceneModuleScope.includes('const KBT_RAIL_BRIDGE_GAP = 23;'),
  'KBT rail bridge gap must clear the full 48-unit deck at its skewed crossing'
);

const railKbtCrossingMatch = citySceneModuleScope.match(
  /const CIKARANG_RAIL_KBT_CROSSING = \{ x: (-?[\d.]+), z: (-?[\d.]+), angle: (-?[\d.]+) \};/
);
assert.ok(railKbtCrossingMatch, 'CIKARANG_RAIL_KBT_CROSSING must keep an audited literal');

const railKbtCrossing = (() => {
  const tension = 0.15;
  const cubic = (a, b, c, d, w) => {
    const t0 = tension * (c - a);
    const t1 = tension * (d - b);
    return b + t0 * w + (-3 * b + 3 * c - 2 * t0 - t1) * w * w + (2 * b - 2 * c + t0 + t1) * w * w * w;
  };
  const pointAt = (u) => {
    const l = cikarangCorridor.length;
    const p = (l - 1) * u;
    let i = Math.floor(p);
    let w = p - i;
    if (w === 0 && i === l - 1) {
      i = l - 2;
      w = 1;
    }
    const p0 = i > 0
      ? cikarangCorridor[i - 1]
      : [2 * cikarangCorridor[0][0] - cikarangCorridor[1][0], 2 * cikarangCorridor[0][1] - cikarangCorridor[1][1]];
    const p1 = cikarangCorridor[i];
    const p2 = cikarangCorridor[i + 1];
    const p3 = i + 2 < l
      ? cikarangCorridor[i + 2]
      : [2 * cikarangCorridor[l - 1][0] - cikarangCorridor[l - 2][0], 2 * cikarangCorridor[l - 1][1] - cikarangCorridor[l - 2][1]];
    return [cubic(p0[0], p1[0], p2[0], p3[0], w), cubic(p0[1], p1[1], p2[1], p3[1], w)];
  };
  const [ax, az, bx, bz] = [1150, 350, 1320, 100];
  const side = ([x, z]) => (x - ax) * (bz - az) - (z - az) * (bx - ax);
  let lo = 0;
  let hi = 1;
  let prev = side(pointAt(0));
  for (let i = 1; i <= 2000; i++) {
    const u = i / 2000;
    const next = side(pointAt(u));
    if (prev * next <= 0) {
      lo = (i - 1) / 2000;
      hi = u;
      break;
    }
    prev = next;
  }
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (side(pointAt(lo)) * side(pointAt(mid)) <= 0) hi = mid;
    else lo = mid;
  }
  const u = (lo + hi) / 2;
  const point = pointAt(u);
  const before = pointAt(u - 1e-6);
  const after = pointAt(u + 1e-6);
  return {
    x: point[0],
    z: point[1],
    angle: Math.atan2(after[0] - before[0], after[1] - before[1])
  };
})();

assert.ok(
  Math.abs(railKbtCrossing.x - Number(railKbtCrossingMatch[1])) < 0.5 &&
    Math.abs(railKbtCrossing.z - Number(railKbtCrossingMatch[2])) < 0.5,
  'CIKARANG_RAIL_KBT_CROSSING drifted from the driven Cikarang curve'
);
assert.ok(
  Math.abs(railKbtCrossing.angle - Number(railKbtCrossingMatch[3])) < 0.01,
  'CIKARANG_RAIL_KBT_CROSSING angle drifted from the driven Cikarang curve'
);

assert.ok(
  eastInfraBody.includes(
    'const addRiverSegment = (x1, z1, x2, z2, width = 26, depth = 1.4, drawWalls = true) => {'
  ),
  'KBT river helper must support a wall-free segment under the rail bridge'
);
assert.ok(eastInfraBody.includes('if (drawWalls) {'), 'KBT rail bridge gap must skip canal walls');
assert.ok(
  eastInfraBody.includes('const kbtSeg2DirX = 170 / kbtSeg2Length;') &&
    eastInfraBody.includes('const kbtSeg2DirZ = -250 / kbtSeg2Length;'),
  'KBT segmen 2 split must follow the audited canal direction'
);
[
  'x - kbtSeg2DirX * KBT_RAIL_BRIDGE_GAP',
  'z - kbtSeg2DirZ * KBT_RAIL_BRIDGE_GAP',
  'x + kbtSeg2DirX * KBT_RAIL_BRIDGE_GAP',
  'z + kbtSeg2DirZ * KBT_RAIL_BRIDGE_GAP'
].forEach((token) => {
  assert.ok(eastInfraBody.includes(token), `KBT rail gap must be centred on the crossing via ${token}`);
});

[
  'addRiverSegment(1150, 350, kbtRailGapBefore[0], kbtRailGapBefore[1], 26, 1.4);',
  'addRiverSegment(kbtRailGapBefore[0], kbtRailGapBefore[1], kbtRailGapAfter[0], kbtRailGapAfter[1], 26, 1.4, false);',
  'addRiverSegment(kbtRailGapAfter[0], kbtRailGapAfter[1], 1320, 100, 26, 1.4);'
].forEach((call) => {
  assert.ok(eastInfraBody.includes(call), `KBT segmen 2 must be split for the rail bridge: ${call}`);
});

[
  'addRiverSegment(1500, -250, 1620, -300, 26, 1.4);',
  'addRiverSegment(1620, -300, 1760, -330, 26, 1.4);',
  'addRiverSegment(1760, -330, 1900, -390, 26, 1.4);',
  'addRiverSegment(1900, -390, 2000, -430, 26, 1.4);',
  'addRiverSegment(2000, -430, 2088.6, -478.4, 26, 1.4);'
].forEach((call) => {
  assert.ok(eastInfraBody.includes(call), `KBT connector missing ${call}`);
});

const voidFKbtMatch = citySceneModuleScope.match(/const VOID_F_KBT_CORRIDOR = \[([\s\S]*?)\];/);
assert.ok(voidFKbtMatch, 'VOID_F_KBT_CORRIDOR must keep an inline waypoint list');
[
  [850, 580], [1150, 350], [1320, 100], [1500, -250],
  [1620, -300], [1760, -330], [1900, -390], [2000, -430], [2088.6, -478.4]
].forEach(([x, z]) => {
  assert.ok(
    voidFKbtMatch[1].includes(`[${x}, ${z}]`),
    `VOID_F_KBT_CORRIDOR missing connector waypoint [${x}, ${z}]`
  );
});

const voidEKbtHead = VOID_E_OSM.waterways.find((waterway) => waterway.name === 'Kanal Banjir Timur');
assert.ok(voidEKbtHead, 'Void E dataset missing the Kanal Banjir Timur head');
assert.deepStrictEqual(
  voidEKbtHead.points[0],
  [2088.6, -478.4],
  'KBT connector must meet the Void E OSM canal head'
);

const railBridgeHelperIndex = eastInfraBody.indexOf('const addRailBridgeOverKbt = (x, z, angle) => {');
assert.ok(railBridgeHelperIndex > 0, 'East Jakarta infrastructure missing the rail bridge helper');
[
  'const width = 24;',
  'const length = 48;',
  'bridgeGeos.push(makeBox(width, 0.6, length, x, 0.0, z, angle));',
  'bridgeGeos.push(makeBox(0.7, 1.35, length, x + px, 0.95, z + pz, angle));',
  'bridgeGeos.push(makeBox(width, 1.25, 2.6, ax, -0.35, az, angle));'
].forEach((token) => {
  assert.ok(eastInfraBody.includes(token), `Rail bridge over KBT missing ${token}`);
});

const railBridgeCallIndex = eastInfraBody.indexOf('addRailBridgeOverKbt(\n');
assert.ok(railBridgeCallIndex > railBridgeHelperIndex, 'Rail bridge helper must be called for the KBT crossing');
assert.ok(
  railBridgeCallIndex < eastInfraBody.indexOf('mergeAndAdd(bridgeGeos'),
  'Rail bridge must be pushed before the bridge geometries are merged'
);
assert.ok(
  eastInfraBody
    .slice(railBridgeCallIndex, railBridgeCallIndex + 220)
    .includes('CIKARANG_RAIL_KBT_CROSSING.angle'),
  'Rail bridge must be anchored to the audited crossing constant'
);

assert.strictEqual(
  (eastInfraBody.match(/mergeAndAdd\(/g) || []).length,
  9,
  'P2 must merge the bridge and connector into the existing nine procedural meshes'
);
assert.ok(!eastInfraBody.includes('new THREE.PointLight'), 'P2 must not add PointLights');

[[1620, -300], [1760, -330], [1900, -390], [2000, -430], [2088.6, -478.4]].forEach(([x, z]) => {
  assert.ok(
    eastDistrictBody.includes(`[${x}, ${z}]`),
    `KBT tree belt must follow the connector through [${x}, ${z}]`
  );
});

// Check 72: retrofit infill lama Jakarta Timur — atap pelana + jendela malam
assert.ok(
  eastDistrictBody.includes('const roofGeo = new THREE.BufferGeometry();'),
  'East Jakarta infill must build a shared prism roof geometry'
);
[
  '-0.5, 0, -0.5, 0.5, 0, -0.5, -0.5, 0, 0.5, 0.5, 0, 0.5,',
  '0, 1, -0.5, 0, 1, 0.5'
].forEach((token) => {
  assert.ok(eastDistrictBody.includes(token), `East Jakarta roof prism missing ${token}`);
});
assert.ok(
  eastDistrictBody.includes('0, 2, 5, 0, 5, 4,') &&
    eastDistrictBody.includes('0, 1, 3, 0, 3, 2'),
  'East Jakarta roof prism must reuse the audited Void C/F/G index set'
);
assert.ok(eastDistrictBody.includes('const roofColors = ['), 'East Jakarta infill missing the residential roof palette');
assert.ok(
  eastDistrictBody.includes('const industrialRoofColors = ['),
  'East Jakarta infill missing the industrial roof palette'
);
assert.ok(
  eastDistrictBody.includes('const isRoofOccupied = (x, z, rw, rd, rotY) => {') &&
    eastDistrictBody.includes('const putRoof = (x, z, rw, rd, rotY = 0) => {'),
  'East Jakarta infill must dedupe roofs with the shared OBB occupancy helpers'
);
assert.ok(
  eastDistrictBody.includes('INFILL_ROOF_EAVE') && eastDistrictBody.includes('INFILL_ROOF_TOLERANCE'),
  'East Jakarta infill must reuse the shared eave trim and roof tolerance'
);
assert.strictEqual(
  (eastDistrictBody.match(/const roofW = w \+ INFILL_ROOF_EAVE \* 2;/g) || []).length,
  7,
  'All seven East Jakarta mass loops must expand the footprint by the shared eave'
);
assert.strictEqual(
  (eastDistrictBody.match(/if \(isRoofOccupied\(px, pz, roofW, roofD, 0\)\) continue;/g) || []).length,
  7,
  'All seven East Jakarta mass loops must skip overlapping roofs'
);
assert.strictEqual(
  (eastDistrictBody.match(/putRoof\(px, pz, roofW, roofD, 0\);/g) || []).length,
  7,
  'All seven East Jakarta mass loops must record their roof footprint'
);
assert.strictEqual(
  (eastDistrictBody.match(/roofItems\.push\(\{/g) || []).length,
  7,
  'East Jakarta must emit one roof per placed mass'
);
assert.strictEqual(
  (eastDistrictBody.match(/^ +y: h,$/gm) || []).length,
  7,
  'East Jakarta roofs must sit exactly on top of each mass'
);
assert.ok(
  eastDistrictBody.includes('h: 1.8 + hash * 1.0,') &&
    eastDistrictBody.includes('h: 1.5 + hash * 0.9,') &&
    eastDistrictBody.includes('h: 1.6 + hash * 1.2,'),
  'East Jakarta roof heights drifted from the commercial, residential and industrial profiles'
);
assert.ok(
  eastDistrictBody.includes("commMesh.name = 'eastjakarta-comm';"),
  'East Jakarta commercial mass mesh must be named for runtime audits'
);
assert.ok(
  eastDistrictBody.includes("resMesh.name = 'eastjakarta-res';"),
  'East Jakarta residential mass mesh must be named for runtime audits'
);
assert.ok(
  eastDistrictBody.includes("factMesh.name = 'eastjakarta-factory';"),
  'East Jakarta industrial mass mesh must be named for runtime audits'
);
assert.ok(
  eastDistrictBody.includes('new THREE.InstancedMesh(roofGeo, roofMaterial, roofItems.length)'),
  'East Jakarta must merge every gable roof into one instanced mesh'
);
assert.ok(
  eastDistrictBody.includes("roofMesh.name = 'eastjakarta-infill-roofs';"),
  'East Jakarta roof mesh must be named for runtime audits'
);
assert.ok(
  eastDistrictBody.includes('roofMesh.setColorAt(idx, r.color)'),
  'East Jakarta roofs must keep their per-instance colours'
);
assert.ok(
  eastDistrictBody.includes('this.addInfillNightWindows(') &&
    eastDistrictBody.includes('[...commItems, ...resItems],') &&
    eastDistrictBody.includes("'eastjakarta-night-windows'"),
  'East Jakarta infill must add night windows for the commercial and residential masses'
);
assert.ok(
  eastDistrictBody.includes('this.eastJakartaInfillStats = {'),
  'East Jakarta infill must expose runtime stats'
);
['comm: commItems.length,', 'residential: resItems.length,', 'factories: factoryItems.length,', 'roofs: roofItems.length,', 'nightWindows,'].forEach(
  (key) => {
    assert.ok(eastDistrictBody.includes(key), `East Jakarta infill stats missing ${key}`);
  }
);
assert.ok(
  eastDistrictBody.includes('drawCalls: 5'),
  'East Jakarta infill retrofit should total three mass meshes plus roofs and night windows'
);
assert.strictEqual(
  (eastDistrictBody.match(/new THREE\.InstancedMesh\(/g) || []).length,
  6,
  'East Jakarta builder must keep three mass meshes, one roof mesh and two vegetation meshes'
);

assert.ok(!eastDistrictBody.includes('new THREE.PointLight'), 'East Jakarta retrofit must not add PointLights');

// Check 73: sambungan KBT–Void E memakai satu material air di (2.088,6; -478,4)
assert.ok(
  citySceneModuleScope.includes('const createCanalWaterMaterial = () => new THREE.MeshStandardMaterial({'),
  'CityScene.js must define one canal water factory for the KBT and Void E'
);
[
  'color: 0x0369a1,',
  'roughness: 0.15,',
  'metalness: 0.85,',
  'side: THREE.DoubleSide'
].forEach((token) => {
  assert.ok(citySceneModuleScope.includes(token), `Canal water factory missing ${token}`);
});
const eastWaterBody = sliceCityBuilder('  buildEastJakartaInfrastructure() {');
const voidEWaterBody = sliceCityBuilder('  buildVoidECilincing() {');
[eastWaterBody, voidEWaterBody].forEach((body, idx) => {
  const label = idx === 0 ? 'East Jakarta' : 'Void E';
  assert.ok(
    body.includes('const waterMat = createCanalWaterMaterial();'),
    `${label} must reuse the shared canal water material`
  );
  assert.ok(
    !body.includes('const waterMat = new THREE.MeshStandardMaterial({'),
    `${label} must not inline a diverging water material`
  );
  assert.ok(
    body.includes('this.registerNightMaterial(waterMat, {') &&
      body.includes('emissive: WATER_NIGHT_EMISSIVE') &&
      body.includes('nightIntensity: WATER_NIGHT_INTENSITY'),
    `${label} canal water must keep the shared night glow registration`
  );
});
assert.strictEqual(
  (citySceneContent.match(/= createCanalWaterMaterial\(\);/g) || []).length,
  2,
  'Canal water factory must serve exactly the KBT and Void E builders'
);
assert.ok(
  !voidEWaterBody.includes('color: 0x075985') &&
    !voidEWaterBody.includes('transparent: true') &&
    !voidEWaterBody.includes('opacity: 0.95'),
  'Void E water must drop the old diverging colour and transparency'
);
assert.ok(
  eastWaterBody.includes("mergeAndAdd(waterGeos, waterMat, false, false, 'eastjakarta-water');"),
  'East Jakarta water mesh must be named for runtime audits'
);
assert.ok(
  voidEWaterBody.includes("mergeAndAdd(waterGeos, waterMat, 'voide-water', false, false);"),
  'Void E water mesh must keep its runtime name'
);
assert.ok(
  citySceneModuleScope.includes('[2000, -430], [2088.6, -478.4]'),
  'KBT must still end exactly at the Void E canal head'
);

// Check 74: enam model detail Void F di-bake per material, penanda tetap hidup
assert.ok(
  landmarkModelsContent.includes('static mergeLandmarkMeshesByMaterial(group) {'),
  'LandmarkModels.js must expose mergeLandmarkMeshesByMaterial for the six Void F models'
);
const mergeLandmarkBody = sliceLandmarkBuilder('static mergeLandmarkMeshesByMaterial(group) {');
assert.ok(
  mergeLandmarkBody.includes('if (mesh.name) return;'),
  'Merge helper must keep named marker meshes unmerged'
);
assert.ok(
  mergeLandmarkBody.includes('mesh.matrixWorld'),
  'Merge helper must bake transforms of meshes nested in marker groups'
);
assert.ok(
  mergeLandmarkBody.includes('BufferGeometryUtils.mergeGeometries('),
  'Merge helper must merge geometries per material bucket'
);
voidFAnchors.forEach(({ builder, marker }) => {
  const body = sliceLandmarkBuilder(`static ${builder}() {`);
  assert.ok(
    body.includes('return LandmarkModels.mergeLandmarkMeshesByMaterial(group);'),
    `Builder ${builder} must bake unnamed meshes before returning`
  );
  assert.ok(
    body.includes(`'${marker}'`),
    `Builder ${builder} must keep its ${marker} marker`
  );
});
assert.strictEqual(
  (landmarkModelsContent.match(/LandmarkModels\.mergeLandmarkMeshesByMaterial\(group\)/g) || []).length,
  6,
  'Exactly the six Void F builders must use the landmark merge helper'
);
assert.ok(
  !sliceLandmarkBuilder('static createTerminalKampungRambutan() {').includes('mergeLandmarkMeshesByMaterial'),
  'Void G models must stay out of this merge stage'
);

// Check 75: preset kamera DPR/MPR bebas dari tapak Stasiun Palmerah
const dprPreset = JAKARTA_LANDMARKS.find((l) => l.id === 'gedung-dpr-mpr');
const palmerahFootprint = { min: [-320.7, 0, 227.9], max: [-249, 62, 272] };
const gbkFootprint = { min: [-342, 0, 291], max: [-250, 14.5, 381] };
const isInsideAabb = (p, box) =>
  p[0] >= box.min[0] && p[0] <= box.max[0] &&
  p[1] >= box.min[1] && p[1] <= box.max[1] &&
  p[2] >= box.min[2] && p[2] <= box.max[2];
const segmentHitsAabb = (a, b, box) => {
  let tMin = 0;
  let tMax = 1;
  for (let axis = 0; axis < 3; axis++) {
    const delta = b[axis] - a[axis];
    if (Math.abs(delta) < 1e-9) {
      if (a[axis] < box.min[axis] || a[axis] > box.max[axis]) return false;
      continue;
    }
    const inv = 1 / delta;
    let t1 = (box.min[axis] - a[axis]) * inv;
    let t2 = (box.max[axis] - a[axis]) * inv;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tMin = Math.max(tMin, t1);
    tMax = Math.min(tMax, t2);
    if (tMin > tMax) return false;
  }
  return true;
};
assert.ok(dprPreset, 'Missing DPR/MPR anchor for camera preset check');
assert.ok(
  !isInsideAabb(dprPreset.cameraPosition, palmerahFootprint),
  'DPR/MPR camera preset must stay outside the Stasiun Palmerah footprint'
);
assert.ok(
  !segmentHitsAabb(dprPreset.cameraPosition, dprPreset.cameraTarget, palmerahFootprint),
  'DPR/MPR sightline must not cross the Stasiun Palmerah footprint'
);
assert.ok(
  !isInsideAabb(dprPreset.cameraPosition, gbkFootprint),
  'DPR/MPR camera preset must stay outside the GBK roof footprint'
);
assert.ok(
  dprPreset.cameraPosition[0] <= dprPreset.position[0] - 10,
  'DPR/MPR camera must frame the dome from the southwest corridor'
);
assert.ok(
  dprPreset.cameraPosition[2] >= dprPreset.position[2] + 80,
  'DPR/MPR camera must stay south of the dome'
);
assert.ok(
  Math.hypot(
    dprPreset.cameraTarget[0] - dprPreset.position[0],
    dprPreset.cameraTarget[2] - dprPreset.position[2]
  ) <= 10,
  'DPR/MPR camera target must stay on the landmark anchor'
);
const dprFocusDistance = Math.hypot(
  dprPreset.cameraPosition[0] - dprPreset.cameraTarget[0],
  dprPreset.cameraPosition[1] - dprPreset.cameraTarget[1],
  dprPreset.cameraPosition[2] - dprPreset.cameraTarget[2]
);
assert.ok(
  dprFocusDistance >= 105 && dprFocusDistance <= 150,
  `DPR/MPR focus distance ${dprFocusDistance.toFixed(1)} must keep the 68-unit tower inside the frame`
);
assert.ok(
  dprPreset.cameraPosition[1] >= 40 && dprPreset.cameraPosition[1] <= 70,
  'DPR/MPR camera height must stay between 40 and 70'
);
assert.ok(
  dprPreset.cameraTarget[1] >= 20 && dprPreset.cameraTarget[1] <= 30,
  'DPR/MPR target height must stay between 20 and 30'
);

// Check 76: Void H Tahap 1 — 6 anchor Pasar Minggu, Kalibata, Ragunan & Lenteng Agung
const voidHAnchors = [
  { id: 'stasiun-pasar-minggu', builder: 'createStasiunPasarMinggu', position: [301.6, 0, 1265.0], marker: 'stasiun-pasar-minggu-platform' },
  { id: 'tmp-kalibata', builder: 'createTmpKalibata', position: [330.7, 0, 1461.1], marker: 'tmp-kalibata-monument' },
  { id: 'taman-margasatwa-ragunan', builder: 'createTamanMargasatwaRagunan', position: [-43.0, 0, 1655.0], marker: 'ragunan-gateway' },
  { id: 'stasiun-lenteng-agung', builder: 'createStasiunLentengAgung', position: [144.6, 0, 1985.8], marker: 'stasiun-lenteng-agung-platform' },
  { id: 'universitas-pancasila', builder: 'createUniversitasPancasila', position: [114.9, 0, 2059.5], marker: 'universitas-pancasila-tower' },
  { id: 'setu-babakan', builder: 'createSetuBabakan', position: [12.0, 0, 2048.2], marker: 'setu-babakan-lake' }
];

assert.deepStrictEqual(
  JAKARTA_LANDMARKS.slice(111, 117).map((l) => l.id),
  voidHAnchors.map((a) => a.id),
  'Void H anchors must follow Cibubur Junction as landmarks #112-#117'
);

voidHAnchors.forEach(({ id, builder, position, marker }) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Void H landmark ${id} not found in JAKARTA_LANDMARKS`);
  assert.deepStrictEqual(lm.position, position, `Void H landmark ${id} position changed without updating the layout`);
  assert.ok(lm.position[0] >= -120 && lm.position[0] <= 420, `Landmark ${id} X position ${lm.position[0]} outside Void H range [-120, 420]`);
  assert.ok(lm.position[2] >= 1150 && lm.position[2] <= 2150, `Landmark ${id} Z position ${lm.position[2]} outside Void H range [1150, 2150]`);
  assert.ok(lm.facts && lm.facts.length >= 3, `Landmark ${id} must have at least 3 educational facts`);
  assert.ok(lm.labelHeight >= 20, `Landmark ${id} labelHeight ${lm.labelHeight} is too low for a Void H anchor`);
  assert.ok(lm.cameraPosition[1] > 30, `Landmark ${id} camera must be elevated above street level`);
  assert.ok(lm.cameraTarget[1] < lm.cameraPosition[1], `Landmark ${id} camera must look downward at the anchor`);
  assert.ok(
    Math.abs(lm.position[0]) + 160 <= 2900 && Math.abs(lm.position[2]) + 160 <= 2900,
    `Landmark ${id} must stay inside the expanded 5800-unit ground plane`
  );
  const [projectedX, projectedZ] = projectGpsToScene(lm.coordinates.lat, lm.coordinates.lng);
  const deviation = Math.hypot(lm.position[0] - projectedX, lm.position[2] - projectedZ);
  assert.ok(deviation <= 80, `Void H landmark ${id} deviates ${deviation.toFixed(1)} units from GPS projection (max 80)`);

  const body = sliceLandmarkBuilder(`static ${builder}() {`);
  assert.ok(body.includes(`name = '${marker}'`), `Builder ${builder} must name its landmark mesh '${marker}'`);
  assert.ok(body.includes('LandmarkModels.tagNightWindow('), `Builder ${builder} must register glass for night glow`);
  assert.ok(!body.includes('new THREE.PointLight('), `Builder ${builder} must not add PointLights`);
  assert.ok(
    citySceneContent.includes(`"${id}": () => LandmarkModels.${builder}()`),
    `CityScene.js missing Void H dispatch mapping for "${id}"`
  );
});

const voidHModels = JAKARTA_LANDMARKS.slice(111, 117);
voidHModels.forEach((a, i) => {
  voidHModels.slice(i + 1).forEach((b) => {
    const distance = Math.hypot(a.position[0] - b.position[0], a.position[2] - b.position[2]);
    assert.ok(distance >= 70, `Void H anchors ${a.id} and ${b.id} are only ${distance.toFixed(1)} units apart`);
  });
  JAKARTA_LANDMARKS.slice(0, 111).forEach((b) => {
    const distance = Math.hypot(a.position[0] - b.position[0], a.position[2] - b.position[2]);
    assert.ok(distance >= 70, `Void H anchor ${a.id} crowds existing anchor ${b.id} (${distance.toFixed(1)} units)`);
  });
});

voidHAnchors.forEach(({ id }, index) => {
  const label = String(112 + index);
  assert.ok(indexHtmlContent.includes(`data-tour-id="${id}"`), `index.html missing Void H tour button for "${id}"`);
  assert.ok(
    new RegExp(`data-tour-id="${id}"[\\s\\S]{0,400}?>${label}</span>`).test(indexHtmlContent),
    `Tour button for "${id}" must carry index ${label}`
  );
});

// Check 77: Void H Tahap 2 — dataset OSM & builder jaringan Pasar Minggu–Kalibata–Ragunan–Jagakarsa–Lenteng Agung
assert.ok(VOID_H_OSM.meta.source.includes('OpenStreetMap'), 'Void H OSM dataset missing OSM attribution');
assert.ok(VOID_H_OSM.meta.license.includes('ODbL'), 'Void H OSM dataset missing ODbL license');
assert.strictEqual(VOID_H_OSM.meta.retrieved, '2026-10-31', 'Void H dataset retrieval date changed');
assert.ok(VOID_H_OSM.meta.api.includes('overpass-api.de'), 'Void H dataset must record the Overpass endpoint');
assert.ok(VOID_H_OSM.meta.api.includes('2026-10-31T07:24:21Z'), 'Void H dataset must record the OSM base snapshot');
assert.strictEqual(VOID_H_OSM.meta.projection, 'projectGpsToScene', 'Void H dataset must use the unscaled GPS projection');
assert.deepStrictEqual(
  VOID_H_OSM.meta.projectionConstants,
  { originLng: 106.823048, originLat: -6.194957, scaleX: 14100, scaleZ: 14180 },
  'Void H projection constants drifted from projectGpsToScene'
);
assert.deepStrictEqual(
  VOID_H_OSM.meta.bbox,
  { south: -6.357, west: 106.802, north: -6.268, east: 106.862 },
  'Void H source bbox changed without re-downloading the extract'
);
assert.deepStrictEqual(
  VOID_H_OSM.meta.clipBox,
  { minX: -240, maxX: 380, minZ: 1120, maxZ: 2230 },
  'Void H clip box changed without updating the layout'
);
assert.strictEqual(VOID_H_OSM.meta.simplification, 2, 'Void H simplification must stay at Douglas–Peucker 2.0');
assert.ok(VOID_H_OSM.meta.note.includes('x=380'), 'Void H dataset must note the shared Void G clip edge');
assert.ok(VOID_H_OSM.meta.note.includes('Situ Babakan'), 'Void H dataset must note the excluded Situ Babakan relation');
assert.ok(VOID_H_OSM.meta.note.includes('water=river'), 'Void H dataset must explain that river polygons are drawn as waterways');

assert.strictEqual(VOID_H_OSM.roads.length, 348, `Void H OSM dataset changed size: ${VOID_H_OSM.roads.length} roads`);
assert.strictEqual(VOID_H_OSM.meta.roadCount, VOID_H_OSM.roads.length, 'Void H roadCount does not match roads array');
const allVoidHPoints = VOID_H_OSM.roads.flatMap((road) => road.points);
assert.strictEqual(allVoidHPoints.length, 920, `Void H road point count changed: ${allVoidHPoints.length}`);
assert.strictEqual(VOID_H_OSM.meta.roadPointCount, allVoidHPoints.length, 'Void H roadPointCount does not match dataset');
const voidHRoadNames = new Set(VOID_H_OSM.roads.map((road) => road.name));
assert.strictEqual(voidHRoadNames.size, 91, 'Void H road name coverage changed');
assert.strictEqual(VOID_H_OSM.meta.roadNameCount, voidHRoadNames.size, 'Void H roadNameCount mismatch');
assert.deepStrictEqual(
  VOID_H_OSM.roads.reduce((counts, road) => {
    counts[road.type] = (counts[road.type] || 0) + 1;
    return counts;
  }, {}),
  { tertiary: 138, primary: 95, secondary: 75, trunk: 40 },
  'Void H road class mix changed'
);

const voidHWidths = { trunk: 16, primary: 18, secondary: 14, tertiary: 11 };
VOID_H_OSM.roads.forEach((road) => {
  assert.ok(road.name && road.name.trim().length > 0, 'Void H road missing a name');
  assert.ok(voidHWidths[road.type] === road.width, `Void H road ${road.name} has unexpected type/width ${road.type}/${road.width}`);
  assert.ok(road.points.length >= 2, `Void H road ${road.name} has fewer than two points`);
  road.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), `Void H road ${road.name} contains a non-finite coordinate`);
    assert.ok(x >= -240 && x <= 380 && z >= 1120 && z <= 2230, `Void H road ${road.name} point ${x}/${z} outside the clip box`);
  });
});

[
  'Jalan Pasar Minggu Raya',
  'Jalan Poltangan Raya',
  'Jalan Raya Ragunan',
  'Jalan Saco',
  'Jalan Margasatwa',
  'Jalan RM Harsono',
  'Jalan Ampera Raya',
  'Jalan Cilandak KKO',
  'Jalan Warung Jati Barat',
  'Jalan Mohamad Kafi II',
  'Jalan Lenteng Agung Raya',
  'Jalan Tahi Bonar Simatupang'
].forEach((name) => {
  assert.ok(voidHRoadNames.has(name), `Void H OSM dataset missing ${name}`);
});
assert.ok(
  !VOID_H_OSM.roads.some((road) => road.type === 'motorway' || road.type === 'busway'),
  'Void H dataset must not include toll or busway ways'
);
VOID_H_OSM.roads.forEach((road) => {
  assert.ok(!/layang|flyover|tol\b|toll|busway/i.test(road.name), `Void H dataset must exclude elevated/toll way ${road.name}`);
});

const distanceToVoidHRoad = (point) => {
  let best = Infinity;
  VOID_H_OSM.roads.forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      best = Math.min(best, distanceToSegment(point, road.points[i], road.points[i + 1]));
    }
  });
  return best;
};
voidHAnchors.forEach(({ id, position }) => {
  const distance = distanceToVoidHRoad([position[0], position[2]]);
  assert.ok(distance < 60, `Void H landmark ${id} is ${distance.toFixed(1)} units from the nearest OSM road`);
});

assert.strictEqual(VOID_H_OSM.waterways.length, 21, `Void H waterway count changed: ${VOID_H_OSM.waterways.length}`);
assert.strictEqual(VOID_H_OSM.meta.waterwayCount, VOID_H_OSM.waterways.length, 'Void H waterwayCount mismatch');
const allVoidHWaterPoints = VOID_H_OSM.waterways.flatMap((waterway) => waterway.points);
assert.strictEqual(allVoidHWaterPoints.length, 242, `Void H waterway point count changed: ${allVoidHWaterPoints.length}`);
assert.strictEqual(VOID_H_OSM.meta.waterPointCount, allVoidHWaterPoints.length, 'Void H waterPointCount mismatch');
const voidHWaterWidths = {
  'Ci Liwung': 16,
  Ciliwung: 16,
  'Kali Baru Barat': 9,
  'Kali Krukut': 10,
  Krukut: 10,
  Mampang: 8,
  'Sungai Krukut': 10
};
VOID_H_OSM.waterways.forEach((waterway) => {
  assert.ok(['river', 'canal'].includes(waterway.kind), `Unexpected Void H waterway kind ${waterway.kind}`);
  assert.ok(waterway.name && waterway.name.trim().length > 0, 'Void H waterway must stay named');
  assert.strictEqual(
    waterway.width,
    voidHWaterWidths[waterway.name],
    `Void H waterway ${waterway.name} width drifted to ${waterway.width}`
  );
  assert.ok(waterway.points.length >= 2, 'Void H waterway has fewer than two points');
  waterway.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), 'Void H waterway contains a non-finite coordinate');
    assert.ok(x >= -240 && x <= 380 && z >= 1120 && z <= 2230, `Void H waterway point ${x}/${z} outside the clip box`);
  });
});
const voidHWaterNames = new Set(VOID_H_OSM.waterways.map((waterway) => waterway.name));
['Ci Liwung', 'Ciliwung', 'Kali Baru Barat', 'Kali Krukut', 'Krukut', 'Mampang', 'Sungai Krukut'].forEach((name) => {
  assert.ok(voidHWaterNames.has(name), `Void H OSM dataset missing ${name} waterway`);
});

assert.strictEqual(VOID_H_OSM.waterBodies.length, 3, `Void H water body count changed: ${VOID_H_OSM.waterBodies.length}`);
assert.strictEqual(VOID_H_OSM.meta.waterBodyCount, VOID_H_OSM.waterBodies.length, 'Void H waterBodyCount mismatch');
const allVoidHWaterBodyPoints = VOID_H_OSM.waterBodies.flatMap((body) => body.points);
assert.strictEqual(allVoidHWaterBodyPoints.length, 143, `Void H water body point count changed: ${allVoidHWaterBodyPoints.length}`);
assert.strictEqual(VOID_H_OSM.meta.waterBodyPointCount, allVoidHWaterBodyPoints.length, 'Void H waterBodyPointCount mismatch');
const voidHWaterBodyNames = VOID_H_OSM.waterBodies.map((body) => body.name);
['Waduk Cilandak', 'Situ Mangga Bolong', 'Danau Salam'].forEach((name) => {
  assert.ok(voidHWaterBodyNames.includes(name), `Void H OSM dataset missing ${name} water body`);
});
['Situ Babakan', 'Sungai Ciliwung'].forEach((name) => {
  assert.ok(!voidHWaterBodyNames.includes(name), `${name} must stay excluded from the Void H polygon set`);
});
VOID_H_OSM.waterBodies.forEach((body) => {
  assert.strictEqual(body.kind, 'lake', `Unexpected Void H water body kind ${body.kind}`);
  assert.ok(body.points.length >= 5, `Void H water body ${body.name} has fewer than five points`);
  assert.deepStrictEqual(
    body.points[0],
    body.points[body.points.length - 1],
    `Void H water body ${body.name} ring must be closed`
  );
  assert.ok(polygonArea(body.points) >= 140, `Void H water body ${body.name} is too small to model`);
  assert.ok(
    waterShapeArea(body.points) > 0,
    `Void H water body ${body.name} must wind counter-clockwise so the situ face points up`
  );
  body.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), `Void H water body ${body.name} contains a non-finite coordinate`);
    assert.ok(x >= -240 && x <= 380 && z >= 1120 && z <= 2230, `Void H water body ${body.name} point ${x}/${z} outside the clip box`);
  });
});

assert.ok(citySceneContent.includes("from '../data/void_h_osm.js'"), 'CityScene.js does not import the Void H OSM dataset');
const voidHNetworkCallIndex = citySceneContent.indexOf('this.buildVoidHPasarMinggu();');
assert.ok(voidHNetworkCallIndex > 0, 'CityScene.js does not call buildVoidHPasarMinggu');
assert.ok(
  voidHNetworkCallIndex > citySceneContent.indexOf('this.buildVoidGTransit();'),
  'buildVoidHPasarMinggu must run after buildVoidGTransit'
);
assert.ok(
  voidHNetworkCallIndex < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidHPasarMinggu must run before buildVoidBInfillAndIndustry'
);

const voidHAnchorSitesMatch = citySceneContent.match(/const VOID_H_ANCHOR_SITES = \[([\s\S]*?)\n\];/);
assert.ok(voidHAnchorSitesMatch, 'CityScene.js missing the Void H anchor site list');
[
  [276, 327, 1236, 1294],
  [299, 362, 1434, 1489],
  [-89, 3, 1620, 1690],
  [122, 167, 1960, 2011],
  [85, 144, 2034, 2085],
  [-23, 47, 2021, 2076]
].forEach(([x1, x2, z1, z2]) => {
  assert.ok(
    voidHAnchorSitesMatch[1].includes(`[${x1}, ${x2}, ${z1}, ${z2}]`),
    `Void H anchor site [${x1}, ${x2}, ${z1}, ${z2}] missing from the mask`
  );
});

const voidHNetworkMethod = sliceCityBuilder('  buildVoidHPasarMinggu() {');
assert.ok(voidHNetworkMethod.includes('VOID_H_OSM'), 'Void H builder does not consume the OSM dataset');
assert.ok(voidHNetworkMethod.includes('segmentIntersection'), 'Void H builder missing automatic bridges');
assert.ok(voidHNetworkMethod.includes('insideAnchorSite'), 'Void H builder must mask bridges and props inside anchor sites');
assert.ok(voidHNetworkMethod.includes('new THREE.Shape'), 'Void H builder must triangulate the situ polygons');
assert.ok(
  voidHNetworkMethod.includes('this.registerNightMaterial(waterMat, {'),
  'Void H water must join the night material registry'
);
assert.ok(
  voidHNetworkMethod.includes('emissive: WATER_NIGHT_EMISSIVE'),
  'Void H water must reuse the shared teal night emissive'
);
assert.ok(voidHNetworkMethod.includes('pjuBulbMat'), 'Void H builder must share the pju-bulb material');
assert.ok(voidHNetworkMethod.includes('recordMergedPjuLamp'), 'Void H PJU lamps must feed the shared light pool');
assert.ok(voidHNetworkMethod.includes('voidHOsmStats'), 'Void H builder must expose runtime stats');
assert.ok(voidHNetworkMethod.includes('connectors: 0'), 'Void H needs no access connector because all anchors sit on OSM roads');
assert.ok(voidHNetworkMethod.includes('drawCalls: 9'), 'Void H network should add nine draw calls');
assert.ok(!voidHNetworkMethod.includes('new THREE.PointLight'), 'Void H network must not add PointLights');
assert.ok(!voidHNetworkMethod.includes('nightMaterials.push'), 'Void H network must not register new night materials');

[
  'voidh-roads',
  'voidh-sidewalks',
  'voidh-water',
  'voidh-water-bodies',
  'voidh-bridges',
  'voidh-pju-poles',
  'voidh-pju-bulbs',
  'voidh-tree-trunks',
  'voidh-tree-foliage'
].forEach((name) => {
  assert.ok(voidHNetworkMethod.includes(name), `Void H builder missing the ${name} mesh`);
});

[
  'Jalan Pasar Minggu Raya',
  'Jalan Raya Ragunan',
  'Jalan Lenteng Agung Raya',
  'Jalan Tahi Bonar Simatupang',
  'Jalan Warung Jati Barat',
  'Jalan Mohamad Kafi II'
].forEach((name) => {
  assert.ok(voidHNetworkMethod.includes(name), `Void H PJU corridor list missing ${name}`);
});
['Ciliwung', 'Kali Krukut'].forEach((name) => {
  assert.ok(voidHNetworkMethod.includes(name), `Void H tree bank list missing ${name}`);
});

assert.ok(citySceneContent.includes('isInsideVoidHAnchorSite(x, z)'), 'CityScene.js missing the Void H anchor pad mask');
assert.ok(citySceneContent.includes('getVoidHRoadSegments() {'), 'CityScene.js missing the Void H road segment cache');
assert.ok(citySceneContent.includes('isNearVoidHRoad(x, z, clearance = 12) {'), 'CityScene.js missing the Void H road clearance helper');
assert.ok(citySceneContent.includes('isInsideVoidHWaterBody(x, z, margin = 6)'), 'CityScene.js missing the Void H situ polygon mask');

// Check 78: Void H Tahap 3 — infill urban fabric Pasar Minggu–Kalibata–Ragunan–Lenteng Agung
assert.ok(citySceneContent.includes('buildVoidHInfill()'), 'CityScene.js missing buildVoidHInfill');

const voidHInfillCall = citySceneContent.indexOf('this.buildVoidHInfill();');
assert.ok(voidHInfillCall > 0, 'CityScene.js does not call buildVoidHInfill');
assert.ok(
  voidHInfillCall > citySceneContent.indexOf('this.buildVoidHPasarMinggu();'),
  'buildVoidHInfill must run after buildVoidHPasarMinggu so the OSM network exists'
);
assert.ok(
  voidHInfillCall < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidHInfill must run before buildVoidBInfillAndIndustry'
);

const voidHInfillBody = sliceCityBuilder('  buildVoidHInfill() {');
assert.ok(!voidHInfillBody.includes('new THREE.PointLight'), 'Void H infill must not add PointLights');
assert.ok(!voidHInfillBody.includes('nightMaterials.push'), 'Void H infill must register night windows through the shared helper');
assert.ok(voidHInfillBody.includes('addInfillNightWindows'), 'Void H infill must reuse the shared night window helper');
assert.ok(voidHInfillBody.includes('voidh-night-windows'), 'Void H infill missing the night window mesh');
assert.ok(voidHInfillBody.includes('VOID_H_OSM'), 'Void H infill must mask against the OSM roads, waterways and situ');
assert.ok(voidHInfillBody.includes('isNearVoidHRoad'), 'Void H infill missing the road corridor mask');
assert.ok(voidHInfillBody.includes('isNearVoidHWater'), 'Void H infill missing the waterway mask');
assert.ok(voidHInfillBody.includes('width * 0.5 + 4'), 'Void H water mask must add a four-unit bank buffer');
assert.ok(voidHInfillBody.includes('isInsideVoidHWaterBody'), 'Void H infill must keep buildings out of the situ polygons');
assert.ok(voidHInfillBody.includes('VOID_H_ANCHOR_SITES'), 'Void H infill must exclude the six anchor pads');
assert.ok(voidHInfillBody.includes('VOID_H_PR_PLOT'), 'Void H infill must reserve the shared P&R plot');
assert.ok(voidHInfillBody.includes('VOID_H_PR_DRIVEWAY'), 'Void H infill must reserve the P&R driveway');
assert.ok(voidHInfillBody.includes('transitReservations'), 'Void H infill missing the transit reservation list');
assert.ok(voidHInfillBody.includes('insideTransitReservation(x, z, radius)'), 'Void H infill must carve the P&R plot out of the building masks');
assert.ok(voidHInfillBody.includes('voidHInfillStats'), 'Void H infill must expose runtime stats');
assert.ok(voidHInfillBody.includes('drawCalls: 6'), 'Void H infill should add six instanced draw calls');
assert.ok(
  voidHInfillBody.includes('INFILL_ROOF_EAVE') && voidHInfillBody.includes('INFILL_ROOF_TOLERANCE'),
  'Void H infill must reuse the shared eave trim and roof occupancy constants'
);
assert.ok(
  voidHInfillBody.includes('ignoreWays') &&
    voidHInfillBody.includes('placeShophouseRow(roadWidth, chain.points, chain.ways)'),
  'Void H shophouse rows must ignore their own road corridor'
);

[
  'voidh-infill-houses',
  'voidh-infill-shophouses',
  'voidh-infill-house-roofs',
  'voidh-infill-warehouses',
  'voidh-infill-warehouse-roofs'
].forEach((name) => {
  assert.ok(voidHInfillBody.includes(name), `Void H infill missing the ${name} instanced mesh`);
});

[
  'Jalan Pasar Minggu Raya',
  'Jalan Lenteng Agung Raya',
  'Jalan Raya Ragunan',
  'Jalan Warung Jati Barat',
  'Jalan Mohamad Kafi II',
  'Jalan Jagakarsa',
  'Jalan Buncit Raya',
  'Jalan RA. Fadillah',
  'Jalan Kebagusan Raya',
  'Jalan Tanjung Barat'
].forEach((name) => {
  assert.ok(voidHInfillBody.includes(name), `Void H infill missing the ${name} shophouse corridor`);
});

[
  'R1 Pasar Minggu barat',
  'R2 Pasar Minggu timur',
  'R3 Pejaten',
  'R4 Cilandak KKO utara',
  'R5 Cilandak KKO selatan',
  'R6 Kalibata',
  'R7 Ragunan barat',
  'R8 Ragunan selatan',
  'R9 Jagakarsa',
  'R10 Srengseng Sawah',
  'R11 Lenteng Agung timur',
  'R12 Lenteng Agung barat'
].forEach((zone) => {
  assert.ok(voidHInfillBody.includes(zone), `Void H infill missing the ${zone} residential zone`);
});

['W1 Kalibata timur', 'W2 Pasar Minggu pasar'].forEach((zone) => {
  assert.ok(voidHInfillBody.includes(zone), `Void H infill missing the ${zone} warehouse cluster`);
});

assert.ok(citySceneContent.includes('const VOID_H_PR_PLOT ='), 'Void H P&R plot must live at module scope so infill and transit share it');
assert.ok(citySceneContent.includes('const VOID_H_PR_DRIVEWAY ='), 'Void H P&R driveway must live at module scope');

const voidHPrPlotMatch = citySceneContent.match(/const VOID_H_PR_PLOT = \{([^}]*)\};/);
assert.ok(voidHPrPlotMatch, 'Void H P&R plot constant unreadable');
assert.ok(
  voidHPrPlotMatch[1].includes('x: 256') &&
    voidHPrPlotMatch[1].includes('z: 1256') &&
    voidHPrPlotMatch[1].includes('w: 30') &&
    voidHPrPlotMatch[1].includes('d: 18'),
  'Void H P&R plot drifted from the audited Stasiun Pasar Minggu parcel'
);
const voidHPrDrivewayMatch = citySceneContent.match(/const VOID_H_PR_DRIVEWAY = \{([^}]*)\};/);
assert.ok(voidHPrDrivewayMatch, 'Void H P&R driveway constant unreadable');
assert.ok(
  voidHPrDrivewayMatch[1].includes('x: 257') &&
    voidHPrDrivewayMatch[1].includes('z: 1271') &&
    voidHPrDrivewayMatch[1].includes('w: 12') &&
    voidHPrDrivewayMatch[1].includes('d: 10'),
  'Void H P&R driveway drifted from the audited Jalan Raya Ragunan access'
);

const voidHRoadClearance = (x, z) => {
  let best = Infinity;
  VOID_H_OSM.roads.forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      best = Math.min(best, distanceToSegment([x, z], road.points[i], road.points[i + 1]) - road.width * 0.5);
    }
  });
  return best;
};
[
  [256 - 15, 1256 - 9],
  [256 + 15, 1256 - 9],
  [256 - 15, 1256 + 9],
  [256 + 15, 1256 + 9],
  [256, 1256]
].forEach(([x, z]) => {
  assert.ok(voidHRoadClearance(x, z) > 0, `Void H P&R plot point ${x}/${z} overlaps the OSM roadway`);
});
[
  [276, 327, 1236, 1294],
  [299, 362, 1434, 1489],
  [-89, 3, 1620, 1690],
  [122, 167, 1960, 2011],
  [85, 144, 2034, 2085],
  [-23, 47, 2021, 2076]
].forEach(([x1, x2, z1, z2]) => {
  assert.ok(
    256 + 15 <= x1 || 256 - 15 >= x2 || 1256 + 9 <= z1 || 1256 - 9 >= z2,
    `Void H P&R plot intersects the anchor pad [${x1}, ${x2}, ${z1}, ${z2}]`
  );
});

// Check 79: Void H Tahap 4 — Park-and-Ride Pasar Minggu dan enam feeder halte
assert.ok(citySceneContent.includes('buildVoidHTransit()'), 'CityScene.js missing buildVoidHTransit');

const voidHTransitCall = citySceneContent.indexOf('this.buildVoidHTransit();');
assert.ok(voidHTransitCall > 0, 'CityScene.js does not call buildVoidHTransit');
assert.ok(
  voidHTransitCall > citySceneContent.indexOf('this.buildVoidHInfill();'),
  'buildVoidHTransit must run after buildVoidHInfill so the P&R plot is reserved'
);
assert.ok(
  voidHTransitCall < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidHTransit must run before buildVoidBInfillAndIndustry'
);

assert.ok(
  citySceneContent.includes('this.voidHTransitLabels = [];'),
  'CityScene constructor must initialise the Void H transit label list'
);

const voidHTransitBody = sliceCityBuilder('  buildVoidHTransit() {');
assert.ok(!voidHTransitBody.includes('new THREE.PointLight'), 'Void H transit must not add PointLights');
assert.ok(voidHTransitBody.includes('VOID_H_OSM'), 'Void H transit must anchor halte to the OSM road network');
assert.ok(voidHTransitBody.includes('findRoadPoint'), 'Void H transit missing the road anchor helper');
assert.ok(voidHTransitBody.includes('const halteLabels = [];'), 'Void H transit must collect halte labels');
assert.ok(voidHTransitBody.includes('halteLabels.push({'), 'Void H transit must emit one label per halte');
assert.ok(
  voidHTransitBody.includes('position: [hx, 6.4, hz]'),
  'Void H halte labels must float above the canopy'
);
assert.ok(
  voidHTransitBody.includes('shortName: spec.shortName,'),
  'Void H halte labels must forward the short name'
);
assert.ok(voidHTransitBody.includes("kind: 'halte'"), 'Void H halte labels must carry the halte kind');
assert.ok(
  voidHTransitBody.includes('this.voidHTransitLabels = ['),
  'Void H transit must publish its label anchors'
);

assert.ok(voidHTransitBody.includes('VOID_H_PR_PLOT'), 'Void H transit must read the shared P&R plot');
assert.ok(
  voidHTransitBody.includes('const prCenterX = VOID_H_PR_PLOT.x;'),
  'Void H P&R centre must come from the shared plot'
);
assert.ok(
  voidHTransitBody.includes('VOID_H_PR_DRIVEWAY.w') && voidHTransitBody.includes('VOID_H_PR_DRIVEWAY.d'),
  'Void H P&R driveway must use the shared access strip so infill and transit stay aligned'
);
assert.ok(
  voidHTransitBody.includes("name: 'Park and Ride Pasar Minggu'"),
  'Void H P&R label missing the full name'
);
assert.ok(voidHTransitBody.includes("shortName: 'P&R Pasar Minggu'"), 'Void H P&R label missing the short name');
assert.ok(voidHTransitBody.includes("kind: 'park'"), 'Void H P&R label must use the P badge');
assert.ok(
  voidHTransitBody.includes('position: [prCenterX, 7.6, prCenterZ]'),
  'Void H P&R label must clear the shelter roof'
);
assert.ok(voidHTransitBody.includes('const bayCount = 8;'), 'Void H P&R must keep eight parking bays');
assert.ok(voidHTransitBody.includes('parkingBays: bayCount'), 'Void H transit stats missing the bay count');

const voidHHalteSpecs = [
  ['Halte Stasiun Pasar Minggu', 'Stasiun Pasar Minggu', 'Jalan Raya Ragunan', [265.7, 1281.9], 1, [301.6, 1265.0]],
  ['Halte TMP Kalibata', 'TMP Kalibata', 'Jalan Poltangan Raya', [366.0, 1460.2], -1, [330.7, 1461.1]],
  ['Halte Taman Margasatwa Ragunan', 'Taman Margasatwa Ragunan', 'Jalan Margasatwa', [-98.1, 1640.3], -1, [-43.0, 1655.0]],
  ['Halte Stasiun Lenteng Agung', 'Stasiun Lenteng Agung', 'Jalan Lenteng Agung Raya', [168.3, 1989.7], -1, [144.6, 1985.8]],
  ['Halte Universitas Pancasila', 'Universitas Pancasila', 'Jalan Lenteng Agung Raya', [157.7, 2058.7], -1, [114.9, 2059.5]],
  ['Halte Setu Babakan', 'Setu Babakan', 'Jalan Mohamad Kafi II', [29.5, 2007.1], -1, [12.0, 2048.2]]
];

voidHHalteSpecs.forEach(([name, shortName, road, near, side]) => {
  assert.ok(voidHTransitBody.includes(`name: '${name}'`), `Void H transit missing ${name}`);
  assert.ok(voidHTransitBody.includes(`shortName: '${shortName}'`), `Void H halte label missing the ${shortName} short name`);
  assert.ok(voidHTransitBody.includes(`road: '${road}'`), `Void H halte missing the ${road} anchor`);
  assert.ok(
    voidHTransitBody.includes(`near: [${near[0]}, ${near[1]}], side: ${side}`),
    `Void H halte ${shortName} drifted from its audited shoulder point`
  );
});

[
  'voidh-transit-concrete',
  'voidh-transit-steel',
  'voidh-transit-sign',
  'voidh-transit-tree-trunks',
  'voidh-transit-tree-foliage'
].forEach((name) => {
  assert.ok(voidHTransitBody.includes(name), `Void H transit missing the ${name} mesh`);
});

assert.ok(voidHTransitBody.includes('registerNightMaterial'), 'Void H transit sign must register for night');
assert.ok(voidHTransitBody.includes('emissive: 0xfff4d6'), 'Void H transit sign night emissive drifted');
assert.ok(voidHTransitBody.includes('nightIntensity: 0.55'), 'Void H transit sign night intensity drifted');
assert.ok(voidHTransitBody.includes('voidHTransitStats'), 'Void H transit must expose runtime stats');
assert.ok(voidHTransitBody.includes('drawCalls: 5'), 'Void H transit should add five draw calls');

assert.ok(
  mainJsContent.includes('...this.city.voidHTransitLabels'),
  'main.js must forward the Void H transit labels to UIManager'
);

const voidHFindRoadPoint = (roadName, near) => {
  let best = null;
  VOID_H_OSM.roads.forEach((road) => {
    if (road.name !== roadName) return;
    for (let i = 0; i < road.points.length - 1; i++) {
      const a = road.points[i];
      const b = road.points[i + 1];
      const dx = b[0] - a[0];
      const dz = b[1] - a[1];
      const len2 = dx * dx + dz * dz;
      let t = len2 ? ((near[0] - a[0]) * dx + (near[1] - a[1]) * dz) / len2 : 0;
      t = Math.max(0, Math.min(1, t));
      const x = a[0] + dx * t;
      const z = a[1] + dz * t;
      const d = Math.hypot(near[0] - x, near[1] - z);
      if (!best || d < best.d) best = { x, z, d, angle: Math.atan2(dx, dz), width: road.width };
    }
  });
  return best;
};

const voidHAnchorPads = [
  [276, 327, 1236, 1294],
  [299, 362, 1434, 1489],
  [-89, 3, 1620, 1690],
  [122, 167, 1960, 2011],
  [85, 144, 2034, 2085],
  [-23, 47, 2021, 2076]
];
const voidHRectClearance = (rect, x, z) =>
  Math.hypot(Math.max(rect[0] - x, 0, x - rect[1]), Math.max(rect[2] - z, 0, z - rect[3]));
const voidHKissRide = [284.6, 318.6, 1294.5, 1303.5];
const voidHWaterBodyAt = (x, z) =>
  VOID_H_OSM.waterBodies.some((body) => {
    const pts = body.points;
    let inside = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const xi = pts[i][0];
      const zi = pts[i][1];
      const xj = pts[j][0];
      const zj = pts[j][1];
      if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
    }
    return inside;
  });

const voidHHalteCenters = voidHHalteSpecs.map(([name, shortName, road, near, side, anchor]) => {
  const snapped = voidHFindRoadPoint(road, near);
  assert.ok(snapped, `Void H halte ${shortName} lost its ${road} anchor`);
  assert.ok(snapped.d <= 1, `Void H halte ${shortName} near point must sit on ${road}`);
  const nx = Math.cos(snapped.angle);
  const nz = -Math.sin(snapped.angle);
  const ux = Math.sin(snapped.angle);
  const uz = Math.cos(snapped.angle);
  const offset = snapped.width * 0.5 - 0.2;
  const hx = snapped.x + nx * offset * side;
  const hz = snapped.z + nz * offset * side;

  let minPad = Infinity;
  let minWater = Infinity;
  let minKiss = Infinity;
  [-6, 0, 6].forEach((lz) => {
    [-1.3, 0, 1.3].forEach((lx) => {
      const cx = hx + lx * nx + lz * ux;
      const cz = hz + lx * nz + lz * uz;
      voidHAnchorPads.forEach((pad) => {
        minPad = Math.min(minPad, voidHRectClearance(pad, cx, cz));
      });
      VOID_H_OSM.waterways.forEach((waterway) => {
        for (let i = 0; i < waterway.points.length - 1; i++) {
          const edge = distanceToSegment([cx, cz], waterway.points[i], waterway.points[i + 1]) -
            waterway.width * 0.5;
          minWater = Math.min(minWater, edge);
        }
      });
      minKiss = Math.min(minKiss, voidHRectClearance(voidHKissRide, cx, cz));
    });
  });

  assert.ok(minPad >= 1.5, `Void H halte ${shortName} peron must clear all anchor pads (min ${minPad.toFixed(2)})`);
  assert.ok(minWater >= 0, `Void H halte ${shortName} peron must stay off the waterways (min ${minWater.toFixed(2)})`);
  assert.ok(minKiss >= 1.5, `Void H halte ${shortName} peron must clear the station kiss-and-ride`);
  assert.ok(!voidHWaterBodyAt(hx, hz), `Void H halte ${shortName} must not sit inside a situ/waduk`);
  assert.ok(
    Math.hypot(hx - anchor[0], hz - anchor[1]) <= 65,
    `Void H halte ${shortName} drifted too far from its anchor`
  );
  assert.ok(
    hx >= VOID_H_OSM.meta.clipBox.minX &&
      hx <= VOID_H_OSM.meta.clipBox.maxX &&
      hz >= VOID_H_OSM.meta.clipBox.minZ &&
      hz <= VOID_H_OSM.meta.clipBox.maxZ,
    `Void H halte ${shortName} fell outside the OSM clip box`
  );
  return [hx, hz];
});

for (let i = 0; i < voidHHalteCenters.length; i++) {
  for (let j = i + 1; j < voidHHalteCenters.length; j++) {
    const gap = Math.hypot(
      voidHHalteCenters[i][0] - voidHHalteCenters[j][0],
      voidHHalteCenters[i][1] - voidHHalteCenters[j][1]
    );
    assert.ok(gap >= 25, `Void H transit haltes ${i} and ${j} are only ${gap.toFixed(1)} units apart`);
  }
}

const voidHPrRect = [256 - 15, 256 + 15, 1256 - 9, 1256 + 9];
const voidHPrDriveRect = [257 - 6, 257 + 6, 1271 - 5, 1271 + 5];
assert.ok(
  voidHPrDriveRect[2] - voidHPrRect[3] <= 1.5,
  'Void H P&R driveway must meet the plaza edge'
);
let voidHDrivewayRoadEdge = Infinity;
[
  [voidHPrDriveRect[0], voidHPrDriveRect[2]],
  [voidHPrDriveRect[1], voidHPrDriveRect[2]],
  [voidHPrDriveRect[0], voidHPrDriveRect[3]],
  [voidHPrDriveRect[1], voidHPrDriveRect[3]]
].forEach(([cx, cz]) => {
  VOID_H_OSM.roads.forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      voidHDrivewayRoadEdge = Math.min(
        voidHDrivewayRoadEdge,
        distanceToSegment([cx, cz], road.points[i], road.points[i + 1]) - road.width * 0.5
      );
    }
  });
});
assert.ok(
  voidHDrivewayRoadEdge <= 1.5,
  `Void H P&R driveway must reach a road edge (gap ${voidHDrivewayRoadEdge.toFixed(2)})`
);
[
  [voidHPrDriveRect[0], voidHPrDriveRect[2]],
  [voidHPrDriveRect[1], voidHPrDriveRect[2]],
  [voidHPrDriveRect[0], voidHPrDriveRect[3]],
  [voidHPrDriveRect[1], voidHPrDriveRect[3]]
].forEach(([cx, cz]) => {
  voidHAnchorPads.forEach((pad) => {
    assert.ok(
      voidHRectClearance(pad, cx, cz) >= 0.5,
      `Void H P&R driveway corner ${cx}/${cz} crowds an anchor pad`
    );
  });
});

// Check 80: Void I Tahap 1 — 6 anchor Bintaro, Jurangmangu, Budi Luhur, Ulujami, Gandaria & Haji Nawi
const voidIAnchors = [
  { id: 'bintaro-jaya-xchange', builder: 'createBintaroJayaXchange', position: [-1352.0, 0, 1244.0], marker: 'bintaro-jaya-xchange-atrium' },
  { id: 'stasiun-jurangmangu', builder: 'createStasiunJurangmangu', position: [-1323.9, 0, 1328.0], marker: 'stasiun-jurangmangu-platform' },
  { id: 'universitas-budi-luhur', builder: 'createUniversitasBudiLuhur', position: [-1068.1, 0, 583.9], marker: 'universitas-budi-luhur-tower' },
  { id: 'pasar-ulujami', builder: 'createPasarUlujami', position: [-835.4, 0, 610.4], marker: 'pasar-ulujami-hall' },
  { id: 'gandaria-city', builder: 'createGandariaCity', position: [-553.4, 0, 702.5], marker: 'gandaria-city-atrium' },
  { id: 'stasiun-mrt-haji-nawi', builder: 'createStasiunMrtHajiNawi', position: [-372.0, 0, 885.0], marker: 'stasiun-mrt-haji-nawi-platform' }
];

assert.deepStrictEqual(
  JAKARTA_LANDMARKS.slice(117, 123).map((l) => l.id),
  voidIAnchors.map((a) => a.id),
  'Void I anchors must follow Setu Babakan as landmarks #118-#123'
);

voidIAnchors.forEach(({ id, builder, position, marker }) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Void I landmark ${id} not found in JAKARTA_LANDMARKS`);
  assert.deepStrictEqual(lm.position, position, `Void I landmark ${id} position changed without updating the layout`);
  assert.ok(lm.position[0] >= -1420 && lm.position[0] <= -300, `Landmark ${id} X position ${lm.position[0]} outside Void I range [-1420, -300]`);
  assert.ok(lm.position[2] >= 500 && lm.position[2] <= 1400, `Landmark ${id} Z position ${lm.position[2]} outside Void I range [500, 1400]`);
  assert.ok(lm.facts && lm.facts.length >= 3, `Landmark ${id} must have at least 3 educational facts`);
  assert.ok(lm.labelHeight >= 20, `Landmark ${id} labelHeight ${lm.labelHeight} is too low for a Void I anchor`);
  assert.ok(lm.cameraPosition[1] > 30, `Landmark ${id} camera must be elevated above street level`);
  assert.ok(lm.cameraTarget[1] < lm.cameraPosition[1], `Landmark ${id} camera must look downward at the anchor`);
  assert.ok(
    Math.abs(lm.position[0]) + 160 <= 2900 && Math.abs(lm.position[2]) + 160 <= 2900,
    `Landmark ${id} must stay inside the expanded 5800-unit ground plane`
  );
  const [projectedX, projectedZ] = projectGpsToScene(lm.coordinates.lat, lm.coordinates.lng);
  const deviation = Math.hypot(lm.position[0] - projectedX, lm.position[2] - projectedZ);
  // Haji Nawi sits on the compressed modelled MRT viaduct; its real GPS falls inside the
  // hand-shifted Fatmawati anchor, so the documented allowance is 150 instead of 80.
  const maxDeviation = id === 'stasiun-mrt-haji-nawi' ? 150 : 80;
  assert.ok(deviation <= maxDeviation, `Void I landmark ${id} deviates ${deviation.toFixed(1)} units from GPS projection (max ${maxDeviation})`);

  const body = sliceLandmarkBuilder(`static ${builder}() {`);
  assert.ok(body.includes(`name = '${marker}'`), `Builder ${builder} must name its landmark mesh '${marker}'`);
  assert.ok(body.includes('LandmarkModels.tagNightWindow('), `Builder ${builder} must register glass for night glow`);
  assert.ok(!body.includes('new THREE.PointLight('), `Builder ${builder} must not add PointLights`);
  assert.ok(
    citySceneContent.includes(`"${id}": () => LandmarkModels.${builder}()`),
    `CityScene.js missing Void I dispatch mapping for "${id}"`
  );
});

const voidIModels = JAKARTA_LANDMARKS.slice(117);
voidIModels.forEach((a, i) => {
  voidIModels.slice(i + 1).forEach((b) => {
    const distance = Math.hypot(a.position[0] - b.position[0], a.position[2] - b.position[2]);
    assert.ok(distance >= 70, `Void I anchors ${a.id} and ${b.id} are only ${distance.toFixed(1)} units apart`);
  });
  JAKARTA_LANDMARKS.slice(0, 117).forEach((b) => {
    const distance = Math.hypot(a.position[0] - b.position[0], a.position[2] - b.position[2]);
    assert.ok(distance >= 70, `Void I anchor ${a.id} crowds existing anchor ${b.id} (${distance.toFixed(1)} units)`);
  });
});

voidIAnchors.forEach(({ id }, index) => {
  const label = String(118 + index);
  assert.ok(indexHtmlContent.includes(`data-tour-id="${id}"`), `index.html missing Void I tour button for "${id}"`);
  assert.ok(
    new RegExp(`data-tour-id="${id}"[\\s\\S]{0,400}?>${label}</span>`).test(indexHtmlContent),
    `Tour button for "${id}" must carry index ${label}`
  );
});

// Check 81: Void I Tahap 2 — dataset OSM & builder jaringan Bintaro-Petukangan-Ulujami-Gandaria Selatan
assert.ok(VOID_I_OSM.meta.source.includes('OpenStreetMap'), 'Void I OSM dataset missing OSM attribution');
assert.ok(VOID_I_OSM.meta.license.includes('ODbL'), 'Void I OSM dataset missing ODbL license');
assert.strictEqual(VOID_I_OSM.meta.retrieved, '2026-10-31', 'Void I dataset retrieval date changed');
assert.ok(VOID_I_OSM.meta.api.includes('overpass-api.de'), 'Void I dataset must record the Overpass endpoint');
assert.ok(VOID_I_OSM.meta.api.includes('2026-10-31T13:22:19Z'), 'Void I dataset must record the OSM base snapshot');
assert.strictEqual(VOID_I_OSM.meta.projection, 'projectGpsToScene', 'Void I dataset must use the unscaled GPS projection');
assert.deepStrictEqual(
  VOID_I_OSM.meta.projectionConstants,
  { originLng: 106.823048, originLat: -6.194957, scaleX: 14100, scaleZ: 14180 },
  'Void I projection constants drifted from projectGpsToScene'
);
assert.deepStrictEqual(
  VOID_I_OSM.meta.bbox,
  { south: -6.305, west: 106.705, north: -6.232, east: 106.802 },
  'Void I source bbox changed without re-downloading the extract'
);
assert.deepStrictEqual(
  VOID_I_OSM.meta.clipBox,
  { minX: -1520, maxX: -240, minZ: 535, maxZ: 1460 },
  'Void I clip box changed without updating the layout'
);
assert.deepStrictEqual(
  VOID_I_OSM.meta.railClipBox,
  { minX: -1520, maxX: -240, minZ: 270, maxZ: 1460 },
  'Void I rail clip changed; the KRL corridor must reach the central Jakarta rail seam'
);
assert.strictEqual(VOID_I_OSM.meta.simplification, 2, 'Void I simplification must stay at Douglas–Peucker 2.0');
assert.ok(VOID_I_OSM.meta.note.includes('x=-240'), 'Void I dataset must note the shared Void H clip edge');
assert.ok(VOID_I_OSM.meta.note.includes('Void C'), 'Void I dataset must note the Void C overlap exclusion');
assert.ok(VOID_I_OSM.meta.note.includes('water=river'), 'Void I dataset must explain that river polygons are drawn as waterways');

assert.strictEqual(VOID_I_OSM.roads.length, 704, `Void I OSM dataset changed size: ${VOID_I_OSM.roads.length} roads`);
assert.strictEqual(VOID_I_OSM.meta.roadCount, VOID_I_OSM.roads.length, 'Void I roadCount does not match roads array');
const allVoidIPoints = VOID_I_OSM.roads.flatMap((road) => road.points);
assert.strictEqual(allVoidIPoints.length, 1789, `Void I road point count changed: ${allVoidIPoints.length}`);
assert.strictEqual(VOID_I_OSM.meta.roadPointCount, allVoidIPoints.length, 'Void I roadPointCount does not match dataset');
const voidIRoadNames = new Set(VOID_I_OSM.roads.map((road) => road.name));
assert.strictEqual(voidIRoadNames.size, 188, 'Void I road name coverage changed');
assert.strictEqual(VOID_I_OSM.meta.roadNameCount, voidIRoadNames.size, 'Void I roadNameCount mismatch');
assert.deepStrictEqual(
  VOID_I_OSM.roads.reduce((counts, road) => {
    counts[road.type] = (counts[road.type] || 0) + 1;
    return counts;
  }, {}),
  { motorway: 107, trunk: 85, primary: 120, secondary: 186, tertiary: 206 },
  'Void I road class mix changed'
);

const voidIWidths = { motorway: 20, trunk: 16, primary: 18, secondary: 14, tertiary: 11 };
const voidIClip = VOID_I_OSM.meta.clipBox;
VOID_I_OSM.roads.forEach((road) => {
  assert.ok(road.name && road.name.trim().length > 0, 'Void I road missing a name');
  assert.strictEqual(
    voidIWidths[road.type],
    road.width,
    `Void I road ${road.name} has unexpected type/width ${road.type}/${road.width}`
  );
  assert.ok(road.points.length >= 2, `Void I road ${road.name} has fewer than two points`);
  road.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), `Void I road ${road.name} contains a non-finite coordinate`);
    assert.ok(
      x >= voidIClip.minX && x <= voidIClip.maxX && z >= voidIClip.minZ && z <= voidIClip.maxZ,
      `Void I road ${road.name} point ${x}/${z} outside the clip box`
    );
  });
});

[
  'Jalan Sultan Iskandar Muda',
  'Jalan RS Fatmawati',
  'Jalan Ciledug Raya',
  'Jalan Boulevard Bintaro Jaya',
  'Jalan RC. Veteran',
  'Jalan Kyai Maja',
  'Jalan Bintaro Utama 3A',
  'Jalan Raya Pasar Jumat',
  'Jalan Pahlawan',
  'Jalan Ulujami Raya',
  'Jalan Tol Lingkar Luar Jakarta',
  'Jalan Tegal Rotan Raya',
  "Jalan KH. Muhammad Syafi'i Hadzami"
].forEach((name) => {
  assert.ok(voidIRoadNames.has(name), `Void I OSM dataset missing ${name}`);
});

// Corridors already modelled by hand must never be duplicated by the dataset.
assert.ok(
  !voidIRoadNames.has('Jalan Metro Pondok Indah'),
  'Void I dataset must exclude Jalan Metro Pondok Indah; the boulevard is hand-built'
);
VOID_I_OSM.roads.forEach((road) => {
  assert.ok(
    !/layang|flyover|terowongan|busway/i.test(road.name),
    `Void I dataset must exclude elevated, tunnel or busway way ${road.name}`
  );
  assert.ok(
    !['residential', 'unclassified', 'service', 'living_street', 'busway', 'footway'].includes(road.type),
    `Void I dataset must stay on arterials, collectors and tolls; found ${road.type} in ${road.name}`
  );
});

// Void C and the central Jakarta OSM extract already own their rectangles.
VOID_I_OSM.roads.forEach((road) => {
  road.points.forEach(([x, z]) => {
    assert.ok(!(x >= -1440 && x <= -860 && z <= 580), `Void I road ${road.name} point ${x}/${z} re-enters the Void C clip`);
    assert.ok(!(x >= -660 && x <= 317 && z <= 620), `Void I road ${road.name} point ${x}/${z} re-enters the central Jakarta clip`);
  });
});

const distanceToVoidIRoad = (point) => {
  let best = Infinity;
  VOID_I_OSM.roads.forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      best = Math.min(best, distanceToSegment(point, road.points[i], road.points[i + 1]));
    }
  });
  return best;
};
voidIAnchors.forEach(({ id, position }) => {
  const distance = distanceToVoidIRoad([position[0], position[2]]);
  assert.ok(distance < 60, `Void I landmark ${id} is ${distance.toFixed(1)} units from the nearest OSM road`);
});

assert.strictEqual(VOID_I_OSM.waterways.length, 19, `Void I waterway count changed: ${VOID_I_OSM.waterways.length}`);
assert.strictEqual(VOID_I_OSM.meta.waterwayCount, VOID_I_OSM.waterways.length, 'Void I waterwayCount mismatch');
const allVoidIWaterPoints = VOID_I_OSM.waterways.flatMap((waterway) => waterway.points);
assert.strictEqual(allVoidIWaterPoints.length, 259, `Void I waterway point count changed: ${allVoidIWaterPoints.length}`);
assert.strictEqual(VOID_I_OSM.meta.waterPointCount, allVoidIWaterPoints.length, 'Void I waterPointCount mismatch');
const voidIWaterWidths = {
  Pesanggrahan: 14,
  'Kali Grogol': 12,
  Grogol: 12,
  'Kali Ciputat': 10,
  'Kali Sekretaris': 10,
  'Sodetan Kali Grogol': 8,
  Jelawe: 8
};
VOID_I_OSM.waterways.forEach((waterway) => {
  assert.ok(['river', 'canal'].includes(waterway.kind), `Unexpected Void I waterway kind ${waterway.kind}`);
  assert.ok(waterway.name && waterway.name.trim().length > 0, 'Void I waterway must stay named');
  assert.strictEqual(
    waterway.width,
    voidIWaterWidths[waterway.name],
    `Void I waterway ${waterway.name} width drifted to ${waterway.width}`
  );
  assert.ok(waterway.points.length >= 2, 'Void I waterway has fewer than two points');
  waterway.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), 'Void I waterway contains a non-finite coordinate');
    assert.ok(
      x >= voidIClip.minX && x <= voidIClip.maxX && z >= voidIClip.minZ && z <= voidIClip.maxZ,
      `Void I waterway point ${x}/${z} outside the clip box`
    );
  });
});
const voidIWaterNames = new Set(VOID_I_OSM.waterways.map((waterway) => waterway.name));
assert.strictEqual(voidIWaterNames.size, 7, 'Void I river name coverage changed');
['Pesanggrahan', 'Kali Grogol', 'Grogol', 'Kali Ciputat', 'Kali Sekretaris', 'Sodetan Kali Grogol', 'Jelawe'].forEach((name) => {
  assert.ok(voidIWaterNames.has(name), `Void I OSM dataset missing ${name} waterway`);
});

// Rivers already drawn by the central Jakarta extract must not be traced twice.
const coreOsmWater = JSON.parse(fs.readFileSync('./src/data/jakarta_osm.json', 'utf8')).waterways;
const normalizeWaterName = (name) => name.toLowerCase().replace(/^(kali|sungai|ci)\s+/, '').trim();
VOID_I_OSM.waterways.forEach((waterway) => {
  const twins = coreOsmWater.filter((water) => water.n && normalizeWaterName(water.n) === normalizeWaterName(waterway.name));
  if (twins.length === 0) return;
  waterway.points.forEach((point) => {
    let nearest = Infinity;
    twins.forEach((water) => {
      for (let i = 0; i < water.p.length - 1; i++) {
        nearest = Math.min(nearest, distanceToSegment(point, water.p[i], water.p[i + 1]));
      }
    });
    assert.ok(
      nearest >= 8,
      `Void I waterway ${waterway.name} point ${point[0]}/${point[1]} duplicates the central Jakarta river by ${nearest.toFixed(1)} units`
    );
  });
});

assert.strictEqual(VOID_I_OSM.waterBodies.length, 3, `Void I water body count changed: ${VOID_I_OSM.waterBodies.length}`);
assert.strictEqual(VOID_I_OSM.meta.waterBodyCount, VOID_I_OSM.waterBodies.length, 'Void I waterBodyCount mismatch');
const allVoidIBodyPoints = VOID_I_OSM.waterBodies.flatMap((body) => body.points);
assert.strictEqual(allVoidIBodyPoints.length, 30, `Void I water body point count changed: ${allVoidIBodyPoints.length}`);
assert.strictEqual(VOID_I_OSM.meta.waterBodyPointCount, allVoidIBodyPoints.length, 'Void I waterBodyPointCount mismatch');
const voidIBodyNames = VOID_I_OSM.waterBodies.map((body) => body.name);
['Situ Bungur', 'Situ Rompang', 'Situ Rawa Lindung'].forEach((name) => {
  assert.ok(voidIBodyNames.includes(name), `Void I OSM dataset missing ${name} water body`);
});
VOID_I_OSM.waterBodies.forEach((body) => {
  assert.strictEqual(body.kind, 'lake', `Unexpected Void I water body kind ${body.kind}`);
  assert.ok(body.points.length >= 5, `Void I water body ${body.name} has fewer than five points`);
  assert.deepStrictEqual(
    body.points[0],
    body.points[body.points.length - 1],
    `Void I water body ${body.name} ring must be closed`
  );
  assert.ok(polygonArea(body.points) >= 140, `Void I water body ${body.name} is too small to model`);
  assert.ok(
    waterShapeArea(body.points) > 0,
    `Void I water body ${body.name} must wind counter-clockwise so the situ face points up`
  );
  body.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), `Void I water body ${body.name} contains a non-finite coordinate`);
    assert.ok(
      x >= voidIClip.minX && x <= voidIClip.maxX && z >= voidIClip.minZ && z <= voidIClip.maxZ,
      `Void I water body ${body.name} point ${x}/${z} outside the clip box`
    );
  });
});

// Void I is the first void to carry rail; only the at-grade KRL line is modelled.
assert.strictEqual(VOID_I_OSM.railways.length, 30, `Void I rail way count changed: ${VOID_I_OSM.railways.length}`);
assert.strictEqual(VOID_I_OSM.meta.railCount, VOID_I_OSM.railways.length, 'Void I railCount mismatch');
const allVoidIRailPoints = VOID_I_OSM.railways.flatMap((rail) => rail.points);
assert.strictEqual(allVoidIRailPoints.length, 98, `Void I rail point count changed: ${allVoidIRailPoints.length}`);
assert.strictEqual(VOID_I_OSM.meta.railPointCount, allVoidIRailPoints.length, 'Void I railPointCount mismatch');
const voidIRailClip = VOID_I_OSM.meta.railClipBox;
VOID_I_OSM.railways.forEach((rail) => {
  assert.strictEqual(rail.kind, 'rail', `Void I rail ${rail.name || rail.service} must be an at-grade railway`);
  assert.ok(rail.name || ['siding', 'crossover'].includes(rail.service), `Void I unnamed rail way must be a siding or crossover`);
  assert.ok(!rail.name || rail.name === 'Jalur Kereta Api Tanah Abang–Merak', `Unexpected Void I rail line ${rail.name}`);
  assert.ok(rail.points.length >= 2, 'Void I rail way has fewer than two points');
  rail.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), 'Void I rail way contains a non-finite coordinate');
    assert.ok(
      x >= voidIRailClip.minX && x <= voidIRailClip.maxX && z >= voidIRailClip.minZ && z <= voidIRailClip.maxZ,
      `Void I rail point ${x}/${z} outside the rail clip box`
    );
  });
});
const voidIKrl = VOID_I_OSM.railways.filter((rail) => rail.name);
assert.strictEqual(voidIKrl.length, 26, 'Void I must keep the named KRL Tanah Abang-Merak segments');
const distanceToVoidIRail = (point) => {
  let best = Infinity;
  VOID_I_OSM.railways.forEach((rail) => {
    for (let i = 0; i < rail.points.length - 1; i++) {
      best = Math.min(best, distanceToSegment(point, rail.points[i], rail.points[i + 1]));
    }
  });
  return best;
};
const jurangmangu = JAKARTA_LANDMARKS.find((l) => l.id === 'stasiun-jurangmangu');
const jurangmanguRailDistance = distanceToVoidIRail([jurangmangu.position[0], jurangmangu.position[2]]);
assert.ok(
  jurangmanguRailDistance < 8,
  `Stasiun Jurangmangu must sit on the KRL line but is ${jurangmanguRailDistance.toFixed(1)} units away`
);
const bintaroXchange = JAKARTA_LANDMARKS.find((l) => l.id === 'bintaro-jaya-xchange');
assert.ok(
  distanceToVoidIRail([bintaroXchange.position[0], bintaroXchange.position[2]]) > 40,
  'Bintaro Jaya Xchange must stay clear of the rail corridor, not overlap it'
);
// The dataset stops short of the central Jakarta rail network; the builder owns the seam.
const voidIRailNorthTip = [-387.4, 271.9];
assert.ok(
  voidIKrl.some((rail) => rail.points.some(([x, z]) => x === voidIRailNorthTip[0] && z === voidIRailNorthTip[1])),
  'Void I KRL line must end at the documented northern seam point'
);

assert.ok(citySceneContent.includes("from '../data/void_i_osm.js'"), 'CityScene.js does not import the Void I OSM dataset');
const voidINetworkCallIndex = citySceneContent.indexOf('this.buildVoidIBintaro();');
assert.ok(voidINetworkCallIndex > 0, 'CityScene.js does not call buildVoidIBintaro');
assert.ok(
  voidINetworkCallIndex > citySceneContent.indexOf('this.buildVoidHTransit();'),
  'buildVoidIBintaro must run after buildVoidHTransit'
);
assert.ok(
  voidINetworkCallIndex < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidIBintaro must run before buildVoidBInfillAndIndustry'
);

const voidIAnchorSitesMatch = citySceneContent.match(/const VOID_I_ANCHOR_SITES = \[([\s\S]*?)\n\];/);
assert.ok(voidIAnchorSitesMatch, 'CityScene.js missing the Void I anchor site list');
[
  [-1402, -1302, 1194, 1294],
  [-1360, -1288, 1298, 1358],
  [-1114, -1022, 544, 626],
  [-872, -798, 576, 644],
  [-602, -504, 658, 748],
  [-400, -344, 856, 916]
].forEach(([x1, x2, z1, z2]) => {
  assert.ok(
    voidIAnchorSitesMatch[1].includes(`[${x1}, ${x2}, ${z1}, ${z2}]`),
    `Void I anchor site [${x1}, ${x2}, ${z1}, ${z2}] missing from the mask`
  );
});

const voidINetworkMethod = sliceCityBuilder('  buildVoidIBintaro() {');
assert.ok(voidINetworkMethod.includes('VOID_I_OSM'), 'Void I builder does not consume the OSM dataset');
assert.ok(voidINetworkMethod.includes('segmentIntersection'), 'Void I builder missing automatic bridges');
assert.ok(voidINetworkMethod.includes('insideAnchorSite'), 'Void I builder must mask bridges and props inside anchor sites');
assert.ok(voidINetworkMethod.includes('new THREE.Shape'), 'Void I builder must triangulate the situ polygons');
assert.ok(
  voidINetworkMethod.includes('this.registerNightMaterial(waterMat, {'),
  'Void I water must join the night material registry'
);
assert.ok(
  voidINetworkMethod.includes('emissive: WATER_NIGHT_EMISSIVE'),
  'Void I water must reuse the shared teal night emissive'
);
assert.ok(voidINetworkMethod.includes('pjuBulbMat'), 'Void I builder must share the pju-bulb material');
assert.ok(voidINetworkMethod.includes('recordMergedPjuLamp'), 'Void I PJU lamps must feed the shared light pool');
assert.ok(voidINetworkMethod.includes('voidIOsmStats'), 'Void I builder must expose runtime stats');
assert.ok(voidINetworkMethod.includes('drawCalls: 13'), 'Void I network should add thirteen draw calls');
assert.ok(voidINetworkMethod.includes('connectors: 1'), 'Void I builder must count the KRL seam connector');
assert.ok(!voidINetworkMethod.includes('new THREE.PointLight'), 'Void I network must not add PointLights');
assert.ok(!voidINetworkMethod.includes('nightMaterials.push'), 'Void I network must not register new night materials');

[
  'voidi-roads',
  'voidi-sidewalks',
  'voidi-water',
  'voidi-water-bodies',
  'voidi-bridges',
  'voidi-pju-poles',
  'voidi-pju-bulbs',
  'voidi-tree-trunks',
  'voidi-tree-foliage',
  'voidi-rail-ballast',
  'voidi-rail-tracks',
  'voidi-rail-sleepers',
  'voidi-rail-catenary'
].forEach((name) => {
  assert.ok(voidINetworkMethod.includes(name), `Void I builder missing the ${name} mesh`);
});

[
  'Jalan Sultan Iskandar Muda',
  'Jalan RS Fatmawati',
  'Jalan Ciledug Raya',
  'Jalan Boulevard Bintaro Jaya',
  'Jalan RC. Veteran',
  'Jalan Kyai Maja'
].forEach((name) => {
  assert.ok(voidINetworkMethod.includes(name), `Void I PJU corridor list missing ${name}`);
});
['Pesanggrahan', 'Kali Grogol', 'Kali Ciputat'].forEach((name) => {
  assert.ok(voidINetworkMethod.includes(name), `Void I tree bank list missing ${name}`);
});

// KRL seam between the Void I dataset and the central Jakarta rail network.
const voidIRailConnectorMatch = citySceneContent.match(/const VOID_I_RAIL_CONNECTOR = \[([\s\S]*?)\n\];/);
assert.ok(voidIRailConnectorMatch, 'CityScene.js missing the Void I KRL seam connector');
assert.ok(
  voidIRailConnectorMatch[1].includes('[-387.4, 271.9]') && voidIRailConnectorMatch[1].includes('[-373.6, 205.1]'),
  'Void I rail connector must join the dataset seam to the central Jakarta rail end point'
);
assert.ok(voidINetworkMethod.includes('VOID_I_RAIL_CONNECTOR'), 'Void I builder must draw the KRL seam connector');
assert.ok(voidINetworkMethod.includes('isNearVoidIRoad'), 'Void I builder must expose the road clearance helper');

assert.ok(citySceneContent.includes('isInsideVoidIAnchorSite(x, z)'), 'CityScene.js missing the Void I anchor pad mask');
assert.ok(citySceneContent.includes('getVoidIRoadSegments() {'), 'CityScene.js missing the Void I road segment cache');
assert.ok(citySceneContent.includes('isNearVoidIRoad(x, z, clearance = 12) {'), 'CityScene.js missing the Void I road clearance helper');
assert.ok(citySceneContent.includes('isInsideVoidIWaterBody(x, z, margin = 6)'), 'CityScene.js missing the Void I situ polygon mask');
assert.ok(citySceneContent.includes('getVoidIRailSegments() {'), 'CityScene.js missing the Void I rail segment cache');

// Check 82: Void I Tahap 3 — infill urban fabric Bintaro-Petukangan-Ulujami-Gandaria Selatan
assert.ok(citySceneContent.includes('buildVoidIInfill()'), 'CityScene.js missing buildVoidIInfill');

const voidIInfillCall = citySceneContent.indexOf('this.buildVoidIInfill();');
assert.ok(voidIInfillCall > 0, 'CityScene.js does not call buildVoidIInfill');
assert.ok(
  voidIInfillCall > citySceneContent.indexOf('this.buildVoidIBintaro();'),
  'buildVoidIInfill must run after buildVoidIBintaro so the OSM network exists'
);
assert.ok(
  voidIInfillCall < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidIInfill must run before buildVoidBInfillAndIndustry'
);

const voidIInfillBody = sliceCityBuilder('  buildVoidIInfill() {');
assert.ok(!voidIInfillBody.includes('new THREE.PointLight'), 'Void I infill must not add PointLights');
assert.ok(!voidIInfillBody.includes('nightMaterials.push'), 'Void I infill must register night windows through the shared helper');
assert.ok(voidIInfillBody.includes('addInfillNightWindows'), 'Void I infill must reuse the shared night window helper');
assert.ok(voidIInfillBody.includes('voidi-night-windows'), 'Void I infill missing the night window mesh');
assert.ok(voidIInfillBody.includes('VOID_I_OSM'), 'Void I infill must mask against the OSM roads, waterways and situ');
assert.ok(voidIInfillBody.includes('isNearVoidIRoad'), 'Void I infill missing the road corridor mask');
assert.ok(voidIInfillBody.includes('getVoidIRoadSegments'), 'Void I shophouse rows must ignore their own road corridor via the segment cache');
assert.ok(voidIInfillBody.includes('isNearVoidIRail'), 'Void I infill missing the KRL corridor mask');
assert.ok(voidIInfillBody.includes('isInsideVoidIWaterBody'), 'Void I infill must keep buildings out of the situ polygons');
assert.ok(voidIInfillBody.includes('isInsideVoidIAnchorSite'), 'Void I infill must exclude the six anchor pads');
assert.ok(voidIInfillBody.includes('VOID_I_LEGACY_INFILL_RECTS'), 'Void I infill must exclude the central Jakarta and Void C rects');
assert.ok(voidIInfillBody.includes('width * 0.5 + 4'), 'Void I water mask must add a four-unit bank buffer');
assert.ok(voidIInfillBody.includes('voidIInfillStats'), 'Void I infill must expose runtime stats');
assert.ok(voidIInfillBody.includes('drawCalls: 6'), 'Void I infill should add six instanced draw calls');
assert.ok(
  voidIInfillBody.includes('INFILL_ROOF_EAVE') && voidIInfillBody.includes('INFILL_ROOF_TOLERANCE'),
  'Void I infill must reuse the shared eave trim and roof occupancy constants'
);
assert.ok(
  voidIInfillBody.includes('ignoreWays') &&
    voidIInfillBody.includes('placeShophouseRow(roadWidth, chain.points, chain.ways)'),
  'Void I shophouse rows must ignore their own road corridor'
);

[
  'voidi-infill-houses',
  'voidi-infill-shophouses',
  'voidi-infill-house-roofs',
  'voidi-infill-warehouses',
  'voidi-infill-warehouse-roofs'
].forEach((name) => {
  assert.ok(voidIInfillBody.includes(name), `Void I infill missing the ${name} instanced mesh`);
});

[
  'Jalan Boulevard Bintaro Jaya',
  'Jalan Ciledug Raya',
  'Jalan Raden Ajeng Kartini',
  'Jalan RC. Veteran',
  'Jalan Raya Pasar Jumat',
  'Jalan Tegal Rotan Raya',
  'Jalan Bintaro Utama 3A',
  'Jalan Gedung Hijau Raya',
  'Jalan Bintaro Permai',
  'Jalan Ceger Raya'
].forEach((name) => {
  assert.ok(voidIInfillBody.includes(name), `Void I shophouse corridor list missing ${name}`);
});

const voidILegacyRectsMatch = citySceneContent.match(/const VOID_I_LEGACY_INFILL_RECTS = \[([\s\S]*?)\n\];/);
assert.ok(voidILegacyRectsMatch, 'CityScene.js missing the Void I legacy infill exclusion rects');
assert.ok(
  voidILegacyRectsMatch[1].includes('[-600, -50, 470, 1010]'),
  'Void I infill must exclude the central Jakarta Selatan building clusters'
);
assert.ok(
  voidILegacyRectsMatch[1].includes('[-1428, -1092, 422, 583]'),
  'Void I infill must exclude the southern Void C building strip'
);

// Check 83: Void I Tahap 4 — lima feeder halte Bintaro–Gandaria Selatan
assert.ok(citySceneContent.includes('buildVoidITransit()'), 'CityScene.js missing buildVoidITransit');
const voidITransitCall = citySceneContent.indexOf('this.buildVoidITransit();');
assert.ok(voidITransitCall > 0, 'CityScene.js does not call buildVoidITransit');
assert.ok(
  voidITransitCall > citySceneContent.indexOf('this.buildVoidIInfill();'),
  'buildVoidITransit must run after buildVoidIInfill'
);
assert.ok(
  voidITransitCall < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidITransit must run before buildVoidBInfillAndIndustry'
);
assert.ok(
  citySceneContent.includes('this.voidITransitLabels = [];'),
  'CityScene constructor must initialise the Void I transit label list'
);

const voidITransitBody = sliceCityBuilder('  buildVoidITransit() {');
assert.ok(!voidITransitBody.includes('new THREE.PointLight'), 'Void I transit must not add PointLights');
assert.ok(voidITransitBody.includes('VOID_I_OSM'), 'Void I transit must anchor halte to the OSM road network');
assert.ok(voidITransitBody.includes('findRoadPoint'), 'Void I transit missing the road anchor helper');
assert.ok(voidITransitBody.includes('const halteLabels = [];'), 'Void I transit must collect halte labels');
assert.ok(voidITransitBody.includes('halteLabels.push({'), 'Void I transit must emit one label per halte');
assert.ok(
  voidITransitBody.includes('position: [hx, 6.4, hz]'),
  'Void I halte labels must float above the canopy'
);
assert.ok(voidITransitBody.includes("kind: 'halte'"), 'Void I halte labels must carry the halte kind');
assert.ok(
  voidITransitBody.includes('this.voidITransitLabels = ['),
  'Void I transit must publish its label anchors'
);
assert.ok(voidITransitBody.includes('registerNightMaterial'), 'Void I transit sign must register for night');
assert.ok(voidITransitBody.includes('emissive: 0xfff4d6'), 'Void I transit sign night emissive drifted');
assert.ok(voidITransitBody.includes('nightIntensity: 0.55'), 'Void I transit sign night intensity drifted');
assert.ok(voidITransitBody.includes('voidITransitStats'), 'Void I transit must expose runtime stats');
assert.ok(voidITransitBody.includes('drawCalls: 9'), 'Void I transit should add nine draw calls');
assert.ok(voidITransitBody.includes('halte: halteSpecs.map'), 'Void I transit stats missing the halte list');

const voidITransitSpecs = [
  ['Halte Bintaro Jaya Xchange', 'Bintaro Jaya Xchange', 'Jalan Lingkar Bintaro Xchange', [-1350.6, 1283.7], -1],
  ['Halte Stasiun Jurangmangu', 'Stasiun Jurangmangu', 'Jalan Tegal Rotan Raya', [-1345.5, 1316.1], 1],
  ['Halte Universitas Budi Luhur', 'Universitas Budi Luhur', 'Jalan Ciledug Raya', [-1068.3, 586.9], -1],
  ['Halte Pasar Ulujami', 'Pasar Ulujami', 'Jalan Ciledug Raya', [-814.7, 606.5], -1],
  ['Halte Gandaria City', 'Gandaria City', "Jalan KH. Muhammad Syafi'i Hadzami", [-553.9, 718.9], -1]
];

voidITransitSpecs.forEach(([name, shortName, road, near, side]) => {
  assert.ok(voidITransitBody.includes(`name: '${name}'`), `Void I transit missing ${name}`);
  assert.ok(voidITransitBody.includes(`shortName: '${shortName}'`), `Void I halte label missing the ${shortName} short name`);
  assert.ok(voidITransitBody.includes(road), `Void I halte missing the ${road} anchor`);
  assert.ok(
    voidITransitBody.includes(`near: [${near[0]}, ${near[1]}], side: ${side}`),
    `Void I halte ${shortName} drifted from its audited shoulder point`
  );
});

[
  'voidi-transit-concrete',
  'voidi-transit-steel',
  'voidi-transit-sign',
  'voidi-transit-glass',
  'voidi-transit-paving',
  'voidi-transit-walkways',
  'voidi-transit-crosswalks',
  'voidi-transit-bollards'
].forEach((name) => {
  assert.ok(voidITransitBody.includes(name), `Void I transit missing the ${name} mesh`);
});

const voidIFindRoadPoint = (roadName, near) => {
  let best = null;
  VOID_I_OSM.roads.forEach((road) => {
    if (road.name !== roadName) return;
    for (let i = 0; i < road.points.length - 1; i++) {
      const a = road.points[i];
      const b = road.points[i + 1];
      const dx = b[0] - a[0];
      const dz = b[1] - a[1];
      const len2 = dx * dx + dz * dz;
      let t = len2 ? ((near[0] - a[0]) * dx + (near[1] - a[1]) * dz) / len2 : 0;
      t = Math.max(0, Math.min(1, t));
      const x = a[0] + dx * t;
      const z = a[1] + dz * t;
      const d = Math.hypot(near[0] - x, near[1] - z);
      if (!best || d < best.d) best = { x, z, d, angle: Math.atan2(dx, dz), width: road.width };
    }
  });
  return best;
};

voidITransitSpecs.forEach(([, shortName, road, near, side]) => {
  const snapped = voidIFindRoadPoint(road, near);
  assert.ok(snapped, `Void I halte ${shortName} lost its ${road} anchor`);
  assert.ok(snapped.d <= 1, `Void I halte ${shortName} near point must sit on ${road}`);
  const nx = Math.cos(snapped.angle);
  const nz = -Math.sin(snapped.angle);
  const offset = snapped.width * 0.5 - 0.2;
  const hx = snapped.x + nx * offset * side;
  const hz = snapped.z + nz * offset * side;
  assert.ok(
    hx > -1520 && hx < -240 && hz > 535 && hz < 1460,
    `Void I halte ${shortName} centre must stay inside the Void I clip box`
  );
});

assert.ok(
  mainJsContent.includes('...this.city.voidITransitLabels'),
  'main.js must forward the Void I transit labels to UIManager'
);

// Check 84: Void I Tahap 5 — fasad atrium, taktil Haji Nawi, walkway halte
const voidIBintaroSlice = landmarkModelsContent.slice(
  landmarkModelsContent.indexOf('static createBintaroJayaXchange()'),
  landmarkModelsContent.indexOf('static createStasiunJurangmangu()')
);
assert.ok(
  voidIBintaroSlice.includes("'bintaro-jaya-xchange-facade-ribs'"),
  'Bintaro Jaya Xchange missing the facade rib mesh'
);
assert.ok(
  voidIBintaroSlice.includes("'bintaro-jaya-xchange-facade-bands'"),
  'Bintaro Jaya Xchange missing the facade band mesh'
);
assert.ok(
  voidIBintaroSlice.includes('const ribCount = 24;'),
  'Bintaro Jaya Xchange atrium must keep 24 vertical ribs'
);
assert.ok(
  voidIBintaroSlice.includes('BufferGeometryUtils.mergeGeometries(ribGeos'),
  'Bintaro Jaya Xchange ribs must merge into one draw call'
);

const voidIGandariaSlice = landmarkModelsContent.slice(
  landmarkModelsContent.indexOf('static createGandariaCity()'),
  landmarkModelsContent.indexOf('static createStasiunMrtHajiNawi()')
);
assert.ok(
  voidIGandariaSlice.includes("'gandaria-city-facade-ribs'"),
  'Gandaria City missing the facade rib mesh'
);
assert.ok(
  voidIGandariaSlice.includes("'gandaria-city-facade-bands'"),
  'Gandaria City missing the facade band mesh'
);
assert.ok(
  voidIGandariaSlice.includes('const ribCount = 28;'),
  'Gandaria City atrium must keep 28 vertical ribs'
);
assert.ok(
  voidIGandariaSlice.includes('BufferGeometryUtils.mergeGeometries(ribGeos'),
  'Gandaria City ribs must merge into one draw call'
);

const voidIHajiNawiSlice = landmarkModelsContent.slice(
  landmarkModelsContent.indexOf('static createStasiunMrtHajiNawi()'),
  landmarkModelsContent.indexOf('static createStasiunMrtHajiNawi()') + 12000
);
assert.ok(
  voidIHajiNawiSlice.includes("'stasiun-mrt-haji-nawi-tactile'"),
  'Stasiun MRT Haji Nawi missing the tactile platform mesh'
);
assert.ok(
  voidIHajiNawiSlice.includes('0xeab308'),
  'Stasiun MRT Haji Nawi tactile strip must use the yellow tactile colour'
);
assert.ok(
  voidIHajiNawiSlice.includes('tactileGeos'),
  'Stasiun MRT Haji Nawi tactile strips must merge into one geometry'
);

assert.ok(
  voidITransitBody.includes('walkwayGeos'),
  'Void I transit must collect pedestrian walkway geometry'
);
assert.ok(
  voidITransitBody.includes('VOID_I_ANCHOR_SITES'),
  'Void I walkways must aim at the anchor sites'
);
assert.ok(
  voidITransitBody.includes('Math.min(18'),
  'Void I walkways must stay capped at 18 scene units'
);
assert.ok(
  voidITransitBody.includes('walkways: halteSpecs.length'),
  'Void I transit stats must report the walkway count'
);

// Check 85: Void I Tahap 6 — zebra penyeberangan & bollard walkway
assert.ok(
  voidITransitBody.includes('const crosswalkGeos = [];'),
  'Void I transit must collect zebra crosswalk geometry'
);
assert.ok(
  voidITransitBody.includes('const bollardGeos = [];'),
  'Void I transit must collect walkway bollard geometry'
);
assert.ok(
  voidITransitBody.includes('road.width - 2.4'),
  'Void I zebra stripes must span the carriageway with a shoulder margin'
);
assert.ok(
  voidITransitBody.includes('for (let i = 0; i < 5; i++)'),
  'Void I zebra crossing must keep five white stripes'
);
assert.ok(
  voidITransitBody.includes("'voidi-transit-crosswalks'"),
  'Void I transit missing the merged zebra crosswalk mesh'
);
assert.ok(
  voidITransitBody.includes("'voidi-transit-bollards'"),
  'Void I transit missing the merged bollard mesh'
);
assert.ok(
  voidITransitBody.includes('crosswalks: halteSpecs.length'),
  'Void I transit stats must report the crosswalk count'
);
assert.ok(
  voidITransitBody.includes('bollards: halteSpecs.length * 5'),
  'Void I transit stats must report three walkway bollards plus two refuge bollards per halte'
);
assert.ok(
  voidITransitBody.includes('emissive: 0xfde68a'),
  'Void I walkway bollards must glow warm at night'
);
assert.ok(
  voidITransitBody.includes('nightIntensity: 0.6'),
  'Void I walkway bollard night intensity drifted'
);
assert.ok(
  voidITransitBody.indexOf('voidi-transit-bollards') > voidITransitBody.indexOf('registerNightMaterial'),
  'Void I bollard material must be registered for night'
);
assert.ok(!voidITransitBody.includes('new THREE.PointLight'), 'Void I crosswalk and bollards must not add PointLights');

// Check 86: Void I Tahap 7 — marka tepi/tengah & median jalan OSM
assert.ok(
  voidINetworkMethod.includes('const markingGeos = [];'),
  'Void I road network must collect lane marking geometry'
);
assert.ok(
  voidINetworkMethod.includes('const medianGeos = [];'),
  'Void I road network must collect median geometry'
);
assert.ok(
  voidINetworkMethod.includes("'voidi-road-markings'"),
  'Void I road network missing the merged marking mesh'
);
assert.ok(
  voidINetworkMethod.includes("'voidi-road-medians'"),
  'Void I road network missing the merged median mesh'
);
assert.ok(
  voidINetworkMethod.includes("r.type === 'motorway' || r.type === 'trunk'"),
  'Void I median must be limited to motorway and trunk roads'
);
assert.ok(
  voidINetworkMethod.includes('r.width >= 16'),
  'Void I median must require a wide carriageway'
);
assert.ok(
  voidINetworkMethod.includes('const DASH_LEN = 3.5;') && voidINetworkMethod.includes('const DASH_STEP = 9;'),
  'Void I dashed center line spacing drifted'
);
assert.ok(
  voidINetworkMethod.includes('width * 0.5 - EDGE_INSET'),
  'Void I edge line must inset from the carriageway edge'
);
assert.ok(
  voidINetworkMethod.includes('new THREE.MeshBasicMaterial') &&
  voidINetworkMethod.includes('0x94a3b8'),
  'Void I lane markings must use the neutral basic material'
);
assert.ok(
  voidINetworkMethod.includes('0x15803d'),
  'Void I green median material drifted'
);
assert.ok(
  voidINetworkMethod.includes('voidIMarkingStats') &&
  voidINetworkMethod.includes('dashedStrokes') &&
  voidINetworkMethod.includes('edgeStrokes') &&
  voidINetworkMethod.includes('medians') &&
  voidINetworkMethod.includes('drawCalls: 7'),
  'Void I marking stats must report strokes, medians, and seven draw calls'
);
assert.ok(
  !voidINetworkMethod.includes('registerNightMaterial(markingMat') &&
  !voidINetworkMethod.includes('registerNightMaterial(medianMat'),
  'Void I lane markings must stay out of nightMaterials'
);
assert.ok(
  !voidINetworkMethod.includes('new THREE.PointLight'),
  'Void I lane markings must not add PointLights'
);

// Check 87: Void I Tahap 8 — pulau penyeberangan & pemutus median di simpang
assert.ok(
  voidITransitBody.includes('const refugeGeos = [];'),
  'Void I transit must collect pedestrian refuge geometry'
);
assert.ok(
  voidITransitBody.includes("'voidi-transit-refuges'"),
  'Void I transit missing the merged refuge island mesh'
);
assert.ok(
  voidITransitBody.includes('ISLAND_WIDTH') && voidITransitBody.includes('ISLAND_CLEARANCE'),
  'Void I refuge island dimensions drifted'
);
assert.ok(
  voidITransitBody.includes('road.width - 2.4 - ISLAND_CLEARANCE'),
  'Void I zebra must split around the refuge island'
);
assert.ok(
  voidITransitBody.includes('refuges: halteSpecs.length'),
  'Void I transit stats must report the refuge count'
);
assert.ok(
  voidITransitBody.includes('bollards: halteSpecs.length * 5'),
  'Void I stats must count three walkway bollards plus two refuge bollards'
);
assert.ok(
  voidITransitBody.includes('drawCalls: 9'),
  'Void I transit should add nine draw calls after the refuge mesh'
);
assert.ok(
  voidINetworkMethod.includes('const junctionPoints = [];'),
  'Void I road network must collect OSM junction points'
);
assert.ok(
  voidINetworkMethod.includes('findMedianGap'),
  'Void I median must query junction gaps'
);
assert.ok(
  voidINetworkMethod.includes('gapHalf'),
  'Void I median must leave a gap at junctions'
);
assert.ok(
  voidINetworkMethod.includes('junctionGaps'),
  'Void I marking stats must report junction median gaps'
);
assert.ok(
  voidINetworkMethod.includes('ra.name === rb.name'),
  'Void I junction scan must ignore way self-intersections'
);
assert.ok(
  !voidINetworkMethod.includes('new THREE.PointLight') && !voidITransitBody.includes('new THREE.PointLight'),
  'Void I refuge and median gaps must not add PointLights'
);

// Check 88: Void I Tahap 9 — marka simpang, panah pendekat & median primary
assert.ok(
  voidINetworkMethod.includes('const junctionArms = junctionPoints.map('),
  'Void I road network must derive junction arms once'
);
assert.ok(
  voidINetworkMethod.includes('arms.length < 3'),
  'Void I junction markings must require at least three arms'
);
assert.ok(
  voidINetworkMethod.includes('arm.len < arm.width * 0.5 + 8'),
  'Void I junction zebra must skip arms too short for the band'
);
assert.ok(
  voidINetworkMethod.includes('arm.width - 2.4'),
  'Void I junction zebra must span the approach width'
);
assert.ok(
  voidINetworkMethod.includes("'voidi-road-junction-zebras'"),
  'Void I junction zebra mesh missing'
);
assert.ok(
  voidINetworkMethod.includes('const arrowGeos = [];') &&
  voidINetworkMethod.includes("'voidi-road-arrows'"),
  'Void I approach arrows must merge into their own mesh'
);
assert.ok(
  voidINetworkMethod.includes('arm.len < 24'),
  'Void I arrows must skip short approaches'
);
assert.ok(
  voidINetworkMethod.includes('arm.width * 0.5 + 9'),
  'Void I arrows must sit beyond the junction zebra band'
);
assert.ok(
  voidINetworkMethod.includes('Math.sin(arm.angle + tilt) * arm.away * 0.6') &&
  voidINetworkMethod.includes('headX + hx'),
  'Void I arrowheads must fan out into a V from the tip, not cross at one point'
);
assert.ok(
  voidINetworkMethod.includes("r.type === 'primary'"),
  'Void I median must extend to primary roads'
);
assert.ok(
  voidINetworkMethod.includes('junctionCrosswalks') && voidINetworkMethod.includes('arrows'),
  'Void I marking stats must report junction zebras and arrows'
);
assert.ok(
  voidINetworkMethod.includes('drawCalls: 7'),
  'Void I markings should add seven draw calls after junction refuge islands'
);
assert.ok(
  !voidINetworkMethod.includes("registerNightMaterial(markingMat"),
  'Void I lane markings must stay out of nightMaterials'
);
assert.ok(
  !voidINetworkMethod.includes('new THREE.PointLight'),
  'Void I junction markings must not add PointLights'
);
assert.ok(
  voidINetworkMethod.includes('const junctionLampGeos = [];') &&
  voidINetworkMethod.includes("'voidi-junction-lamps'"),
  'Void I junction pedestrian lamps must merge into their own mesh'
);
assert.ok(
  voidINetworkMethod.includes('registerNightMaterial(junctionZebraMat') &&
  voidINetworkMethod.includes('emissive: 0xe5e7eb') &&
  voidINetworkMethod.includes('nightIntensity: 0.45'),
  'Void I junction zebra must glow at night'
);
assert.ok(
  voidINetworkMethod.includes('emissive: 0xfde68a') &&
  voidINetworkMethod.includes('nightIntensity: 0.6'),
  'Void I pedestrian lamps must use the warm bollard emissive'
);
assert.ok(
  voidINetworkMethod.includes('arm.width * 0.5 - 1'),
  'Void I pedestrian lamps must stand at both zebra ends'
);
assert.ok(
  voidINetworkMethod.includes('junctionLamps'),
  'Void I marking stats must report pedestrian lamps'
);
assert.ok(
  voidINetworkMethod.includes('const junctionRefugeGeos = [];') &&
  voidINetworkMethod.includes('const junctionTactileGeos = [];') &&
  voidINetworkMethod.includes("'voidi-junction-refuges'") &&
  voidINetworkMethod.includes("'voidi-junction-tactile'"),
  'Void I junction crossings with width 14 must get refuge islands and tactile plates'
);
assert.ok(
  voidINetworkMethod.includes('arm.width === 14') &&
  voidINetworkMethod.includes('JUNCTION_REFUGE_WIDTH') &&
  voidINetworkMethod.includes('JUNCTION_REFUGE_CLEARANCE'),
  'Void I refuge islands must stay on median-free width 14 arms'
);
assert.ok(
  voidINetworkMethod.includes('junctionRefuges') &&
  voidINetworkMethod.includes('drawCalls: 7'),
  'Void I marking stats must report junction refuge islands and seven draw calls'
);
assert.ok(
  !voidINetworkMethod.includes('registerNightMaterial(junctionRefuge') &&
  !voidINetworkMethod.includes('registerNightMaterial(junctionTactile'),
  'Void I junction refuge islands must stay out of nightMaterials'
);

// Check 91: Void J Tahap 1 — tiga anchor baru mengisi lubang Jakarta Utara Tengah
const voidJAnchors = [
  { id: 'stasiun-ancol', builder: 'createStasiunAncol', position: [211.0, 0, -951.0], marker: 'stasiun-ancol-platform' },
  { id: 'rusunawa-sunter', builder: 'createRusunawaSunter', position: [648.0, 0, -751.0], marker: 'rusunawa-sunter-tower' },
  { id: 'rsud-koja', builder: 'createRSUDKoja', position: [1094.0, 0, -942.0], marker: 'rsud-koja-emergency' },
  { id: 'pasar-pademangan', builder: 'createPasarPademangan', position: [242.2, 0, -851.2], marker: 'pasar-pademangan-hall' },
  { id: 'wisma-atlet-kemayoran', builder: 'createWismaAtletKemayoran', position: [520.7, 0, -608.4], marker: 'wisma-atlet-tower' }
];

assert.deepStrictEqual(
  JAKARTA_LANDMARKS.slice(123, 128).map((l) => l.id),
  voidJAnchors.map((a) => a.id),
  'Void J anchors must follow Stasiun MRT Haji Nawi as landmarks #124-#128'
);

voidJAnchors.forEach(({ id, builder, position, marker }, index) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Void J landmark ${id} not found in JAKARTA_LANDMARKS`);
  assert.deepStrictEqual(lm.position, position, `Void J landmark ${id} position changed without updating the layout`);
  assert.ok(lm.position[0] >= -470 && lm.position[0] <= 1440, `Landmark ${id} X position ${lm.position[0]} outside Void J range [-470, 1440]`);
  assert.ok(lm.position[2] >= -1560 && lm.position[2] <= -285, `Landmark ${id} Z position ${lm.position[2]} outside Void J range [-1560, -285]`);
  assert.ok(lm.facts && lm.facts.length >= 3, `Landmark ${id} must have at least 3 educational facts`);
  assert.ok(lm.labelHeight >= 30, `Landmark ${id} labelHeight ${lm.labelHeight} is too low for a Void J anchor`);
  assert.ok(lm.cameraPosition[1] > 30, `Landmark ${id} camera must be elevated above street level`);
  assert.ok(lm.cameraTarget[1] < lm.cameraPosition[1], `Landmark ${id} camera must look downward at the anchor`);

  const projected = projectGpsToScene(lm.coordinates.lat, lm.coordinates.lng);
  assert.ok(
    Math.abs(projected[0] - lm.position[0]) <= 12 && Math.abs(projected[1] - lm.position[2]) <= 12,
    `Landmark ${id} coordinates must project within 12 units of its scene position`
  );

  assert.ok(
    citySceneContent.includes(`"${id}": () => LandmarkModels.${builder}()`),
    `CityScene must dispatch ${id} to ${builder}`
  );
  assert.ok(landmarkModelsContent.includes(`static ${builder}()`), `LandmarkModels missing ${builder}`);

  const factoryStart = landmarkModelsContent.indexOf(`static ${builder}()`);
  const factoryEnd = landmarkModelsContent.indexOf('static create', factoryStart + 10);
  const factory = landmarkModelsContent.slice(factoryStart, factoryEnd === -1 ? undefined : factoryEnd);
  assert.ok(factory.includes(`'${marker}'`), `${builder} must expose the ${marker} mesh for clicking and labels`);
  assert.ok(factory.includes('LandmarkModels.tagNightWindow('), `${builder} must tag a glass material for night windows`);
  assert.ok(!factory.includes('new THREE.PointLight'), `${builder} must not add PointLights`);

  assert.ok(indexHtmlContent.includes(`data-tour-id="${id}"`), `index.html missing Void J tour button for "${id}"`);
  const labelIndex = 124 + index;
  assert.ok(
    new RegExp(`data-tour-id="${id}"[\\s\\S]{0,400}?>${labelIndex}</span>`).test(indexHtmlContent),
    `Tour button for "${id}" must carry index ${labelIndex}`
  );
});

assert.strictEqual(
  (indexHtmlContent.match(/data-landmark-count>137</g) || []).length,
  3,
  'All three landmark counters must read 137 after Void K Tahap 1'
);

// Check 92: Void J Tahap 2 — dataset OSM & builder jaringan Sunter-Ancol-Koja
assert.ok(VOID_J_OSM.meta.source.includes('OpenStreetMap'), 'Void J OSM dataset missing OSM attribution');
assert.ok(VOID_J_OSM.meta.license.includes('ODbL'), 'Void J OSM dataset missing ODbL license');
assert.strictEqual(VOID_J_OSM.meta.retrieved, '2026-11-01', 'Void J dataset retrieval date changed');
assert.ok(VOID_J_OSM.meta.api.includes('overpass-api.de'), 'Void J dataset must record the Overpass endpoint');
assert.ok(VOID_J_OSM.meta.api.includes('2026-11-01T23:06:27Z'), 'Void J dataset must record the OSM base snapshot');
assert.strictEqual(VOID_J_OSM.meta.projection, 'projectGpsToScene', 'Void J dataset must use the unscaled GPS projection');
assert.deepStrictEqual(
  VOID_J_OSM.meta.projectionConstants,
  { originLng: 106.823048, originLat: -6.194957, scaleX: 14100, scaleZ: 14180 },
  'Void J projection constants drifted from projectGpsToScene'
);
assert.deepStrictEqual(
  VOID_J_OSM.meta.bbox,
  { south: -6.16, west: 106.828, north: -6.11, east: 106.921 },
  'Void J source bbox changed without re-downloading the extract'
);
assert.deepStrictEqual(
  VOID_J_OSM.meta.clipBox,
  { minX: 60, maxX: 1330, minZ: -1105, maxZ: -615 },
  'Void J clip box changed without updating the layout'
);
assert.deepStrictEqual(
  VOID_J_OSM.meta.railClipBox,
  { minX: -160, maxX: 900, minZ: -1280, maxZ: -615 },
  'Void J rail clip changed; the KRL corridor must reach Jakarta Kota and Tanjung Priok'
);
assert.strictEqual(VOID_J_OSM.meta.simplification, 2, 'Void J simplification must stay at Douglas–Peucker 2.0');
assert.ok(VOID_J_OSM.meta.note.includes('x=1330'), 'Void J dataset must note the shared Void E clip edge');
assert.ok(VOID_J_OSM.meta.note.includes('z=-615'), 'Void J dataset must note the central Jakarta clearance');
assert.ok(VOID_J_OSM.meta.note.includes('light_rail'), 'Void J dataset must explain that LRT Jakarta is excluded');

assert.strictEqual(VOID_J_OSM.roads.length, 694, `Void J OSM dataset changed size: ${VOID_J_OSM.roads.length} roads`);
assert.strictEqual(VOID_J_OSM.meta.roadCount, VOID_J_OSM.roads.length, 'Void J roadCount does not match roads array');
const allVoidJPoints = VOID_J_OSM.roads.flatMap((road) => road.points);
assert.strictEqual(allVoidJPoints.length, 1604, `Void J road point count changed: ${allVoidJPoints.length}`);
assert.strictEqual(VOID_J_OSM.meta.roadPointCount, allVoidJPoints.length, 'Void J roadPointCount does not match dataset');
const voidJRoadNames = new Set(VOID_J_OSM.roads.map((road) => road.name));
assert.strictEqual(voidJRoadNames.size, 467, 'Void J road name coverage changed');
assert.strictEqual(VOID_J_OSM.meta.roadNameCount, voidJRoadNames.size, 'Void J roadNameCount mismatch');
assert.deepStrictEqual(
  VOID_J_OSM.roads.reduce((counts, road) => {
    counts[road.type] = (counts[road.type] || 0) + 1;
    return counts;
  }, {}),
  { trunk: 23, primary: 14, secondary: 74, tertiary: 190, residential: 372, unclassified: 21 },
  'Void J road class mix changed'
);

const voidJWidths = { trunk: 16, primary: 18, secondary: 14, tertiary: 11, residential: 10, unclassified: 10 };
const voidJClip = VOID_J_OSM.meta.clipBox;
VOID_J_OSM.roads.forEach((road) => {
  assert.ok(road.name && road.name.trim().length > 0, 'Void J road missing a name');
  assert.strictEqual(
    voidJWidths[road.type],
    road.width,
    `Void J road ${road.name} has unexpected type/width ${road.type}/${road.width}`
  );
  assert.ok(road.points.length >= 2, `Void J road ${road.name} has fewer than two points`);
  road.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), `Void J road ${road.name} contains a non-finite coordinate`);
    assert.ok(
      x >= voidJClip.minX && x <= voidJClip.maxX && z >= voidJClip.minZ && z <= voidJClip.maxZ,
      `Void J road ${road.name} point ${x}/${z} outside the clip box`
    );
  });
});

[
  'Jalan Yos Sudarso',
  'Jalan Sunter Karya',
  'Jalan Sunter Muara Raya',
  'Jalan Kawasan Wisata Ancol',
  'Jalan Raya Gading Nirwana',
  'Jalan Inspeksi Kali Sunter',
  'Jalan Mangga Besar Raya'
].forEach((name) => {
  assert.ok(voidJRoadNames.has(name), `Void J OSM dataset missing ${name}`);
});

// Koridor yang sudah dibangun tangan tidak boleh digambar ulang oleh dataset.
VOID_J_OSM.roads.forEach((road) => {
  assert.ok(
    !/Martadinata|Lodan|Benyamin Sueb|Danau Sunter|Boulevard Raya Kelapa Gading|Boulevard Barat Raya|Pelabuhan Raya|Jalan Tol/i.test(road.name),
    `Void J dataset must exclude hand-built corridor ${road.name}`
  );
  assert.ok(
    !['motorway', 'service', 'living_street', 'busway', 'footway'].includes(road.type),
    `Void J dataset must stay on named arterials and locals; found ${road.type} in ${road.name}`
  );
});

const distanceToVoidJRoad = (point) => {
  let best = Infinity;
  VOID_J_OSM.roads.forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      best = Math.min(best, distanceToSegment(point, road.points[i], road.points[i + 1]));
    }
  });
  return best;
};
voidJAnchors.forEach(({ id, position }) => {
  const distance = distanceToVoidJRoad([position[0], position[2]]);
  assert.ok(distance < 60, `Void J landmark ${id} is ${distance.toFixed(1)} units from the nearest OSM road`);
});

assert.strictEqual(VOID_J_OSM.waterways.length, 28, `Void J waterway count changed: ${VOID_J_OSM.waterways.length}`);
assert.strictEqual(VOID_J_OSM.meta.waterwayCount, VOID_J_OSM.waterways.length, 'Void J waterwayCount mismatch');
const allVoidJWaterPoints = VOID_J_OSM.waterways.flatMap((waterway) => waterway.points);
assert.strictEqual(allVoidJWaterPoints.length, 110, `Void J waterway point count changed: ${allVoidJWaterPoints.length}`);
assert.strictEqual(VOID_J_OSM.meta.waterPointCount, allVoidJWaterPoints.length, 'Void J waterPointCount mismatch');
const voidJWaterWidths = { river: 14, canal: 12, stream: 10 };
VOID_J_OSM.waterways.forEach((waterway) => {
  assert.ok(Object.prototype.hasOwnProperty.call(voidJWaterWidths, waterway.kind), `Unexpected Void J waterway kind ${waterway.kind}`);
  assert.ok(waterway.name && waterway.name.trim().length > 0, 'Void J waterway must stay named');
  assert.strictEqual(
    waterway.width,
    voidJWaterWidths[waterway.kind],
    `Void J waterway ${waterway.name} width drifted to ${waterway.width}`
  );
  assert.ok(waterway.points.length >= 2, 'Void J waterway has fewer than two points');
  waterway.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), 'Void J waterway contains a non-finite coordinate');
    assert.ok(
      x >= voidJClip.minX && x <= voidJClip.maxX && z >= voidJClip.minZ && z <= voidJClip.maxZ,
      `Void J waterway point ${x}/${z} outside the clip box`
    );
  });
});
const voidJWaterNames = new Set(VOID_J_OSM.waterways.map((waterway) => waterway.name));
['Sunter River', 'Ancol', 'Cakung', 'Ciliwung', 'Kali Betik', 'Ci Liwung', 'Sunter'].forEach((name) => {
  assert.ok(voidJWaterNames.has(name), `Void J OSM dataset missing ${name} waterway`);
});
assert.ok(voidJWaterNames.has('(river)'), 'Void J dataset must keep unnamed river ways as (river)');
assert.ok(voidJWaterNames.has('(canal)'), 'Void J dataset must keep unnamed canal ways as (canal)');

assert.strictEqual(VOID_J_OSM.waterBodies.length, 19, `Void J water body count changed: ${VOID_J_OSM.waterBodies.length}`);
assert.strictEqual(VOID_J_OSM.meta.waterBodyCount, VOID_J_OSM.waterBodies.length, 'Void J waterBodyCount mismatch');
const allVoidJBodyPoints = VOID_J_OSM.waterBodies.flatMap((body) => body.points);
assert.strictEqual(allVoidJBodyPoints.length, 177, `Void J water body point count changed: ${allVoidJBodyPoints.length}`);
assert.strictEqual(VOID_J_OSM.meta.waterBodyPointCount, allVoidJBodyPoints.length, 'Void J waterBodyPointCount mismatch');
const voidJBodyNames = VOID_J_OSM.waterBodies.map((body) => body.name);
['Waduk Cincin', 'Sunter Timur Reservoir'].forEach((name) => {
  assert.ok(voidJBodyNames.includes(name), `Void J OSM dataset missing ${name} water body`);
});
VOID_J_OSM.waterBodies.forEach((body) => {
  assert.strictEqual(body.kind, 'lake', `Unexpected Void J water body kind ${body.kind}`);
  assert.ok(!/Danau Sunter|Waduk Pluit|Pluit/i.test(body.name), 'Void J must not duplicate the hand-built Danau Sunter or Waduk Pluit');
  assert.ok(body.points.length >= 5, `Void J water body ${body.name} has fewer than five points`);
  assert.deepStrictEqual(
    body.points[0],
    body.points[body.points.length - 1],
    `Void J water body ${body.name} ring must be closed`
  );
  assert.ok(polygonArea(body.points) >= 140, `Void J water body ${body.name} is too small to model`);
  assert.ok(
    waterShapeArea(body.points) > 0,
    `Void J water body ${body.name} must wind counter-clockwise so the water face points up`
  );
  body.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), `Void J water body ${body.name} contains a non-finite coordinate`);
    assert.ok(
      x >= voidJClip.minX && x <= voidJClip.maxX && z >= voidJClip.minZ && z <= voidJClip.maxZ,
      `Void J water body ${body.name} point ${x}/${z} outside the clip box`
    );
  });
});

assert.strictEqual(VOID_J_OSM.railways.length, 32, `Void J rail way count changed: ${VOID_J_OSM.railways.length}`);
assert.strictEqual(VOID_J_OSM.meta.railCount, VOID_J_OSM.railways.length, 'Void J railCount mismatch');
const allVoidJRailPoints = VOID_J_OSM.railways.flatMap((rail) => rail.points);
assert.strictEqual(allVoidJRailPoints.length, 100, `Void J rail point count changed: ${allVoidJRailPoints.length}`);
assert.strictEqual(VOID_J_OSM.meta.railPointCount, allVoidJRailPoints.length, 'Void J railPointCount mismatch');
const voidJRailClip = VOID_J_OSM.meta.railClipBox;
const voidJRailNameCounts = {};
VOID_J_OSM.railways.forEach((rail) => {
  assert.strictEqual(rail.kind, 'rail', `Void J rail ${rail.name} must be an at-grade railway`);
  assert.ok(
    ['Jalur Kereta Api Jakarta Kota–Tanjung Priuk', 'Jalur Kereta Api Tanjung Priuk–Kemayoran'].includes(rail.name),
    `Unexpected Void J rail line ${rail.name}`
  );
  assert.ok(rail.points.length >= 2, 'Void J rail way has fewer than two points');
  voidJRailNameCounts[rail.name] = (voidJRailNameCounts[rail.name] || 0) + 1;
  rail.points.forEach(([x, z]) => {
    assert.ok(Number.isFinite(x) && Number.isFinite(z), 'Void J rail way contains a non-finite coordinate');
    assert.ok(
      x >= voidJRailClip.minX && x <= voidJRailClip.maxX && z >= voidJRailClip.minZ && z <= voidJRailClip.maxZ,
      `Void J rail point ${x}/${z} outside the rail clip box`
    );
  });
});
assert.deepStrictEqual(
  voidJRailNameCounts,
  {
    'Jalur Kereta Api Jakarta Kota–Tanjung Priuk': 19,
    'Jalur Kereta Api Tanjung Priuk–Kemayoran': 13
  },
  'Void J rail corridor mix changed'
);
const voidJAncol = JAKARTA_LANDMARKS.find((l) => l.id === 'stasiun-ancol');
const distanceToVoidJRail = (point) => {
  let best = Infinity;
  VOID_J_OSM.railways.forEach((rail) => {
    for (let i = 0; i < rail.points.length - 1; i++) {
      best = Math.min(best, distanceToSegment(point, rail.points[i], rail.points[i + 1]));
    }
  });
  return best;
};
const ancolRailDistance = distanceToVoidJRail([voidJAncol.position[0], voidJAncol.position[2]]);
assert.ok(
  ancolRailDistance < 30,
  `Stasiun Ancol must sit beside the KRL line but is ${ancolRailDistance.toFixed(1)} units away`
);
const voidJRailSouthTips = VOID_J_OSM.railways
  .flatMap((rail) => [rail.points[0], rail.points[rail.points.length - 1]])
  .filter(([, z]) => z >= -616 && z <= -614);
assert.ok(voidJRailSouthTips.length >= 2, 'Void J rail must stop at the documented southern seam z=-615');

const voidJConnectorMatch = citySceneContent.match(/const VOID_J_RAIL_CONNECTOR = \[([\s\S]*?)\n\];/);
assert.ok(voidJConnectorMatch, 'CityScene.js missing the Void J KRL seam connector');
assert.ok(voidJConnectorMatch[1].includes('[255.0, -670.0]'), 'Void J connector must start at the hand-built Kemayoran rail tip');
assert.ok(voidJConnectorMatch[1].includes('[222.6, -615.2]'), 'Void J connector must meet the dataset southern seam');

assert.ok(citySceneContent.includes("from '../data/void_j_osm.js'"), 'CityScene.js does not import the Void J OSM dataset');
const voidJNetworkCallIndex = citySceneContent.indexOf('this.buildVoidJNorthJakarta();');
assert.ok(voidJNetworkCallIndex > 0, 'CityScene.js does not call buildVoidJNorthJakarta');
assert.ok(
  voidJNetworkCallIndex > citySceneContent.indexOf('this.buildVoidITransit();'),
  'buildVoidJNorthJakarta must run after buildVoidITransit'
);
assert.ok(
  voidJNetworkCallIndex < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidJNorthJakarta must run before the second Void B pass'
);

const voidJAnchorSitesMatch = citySceneContent.match(/const VOID_J_ANCHOR_SITES = \[([\s\S]*?)\n\];/);
assert.ok(voidJAnchorSitesMatch, 'CityScene.js missing the Void J anchor site list');
[211, 648, 1094].forEach((x) => {
  assert.ok(voidJAnchorSitesMatch[1].includes(`${x}`), `Void J anchor site mask missing x=${x}`);
});

const voidJNetworkMethod = sliceCityBuilder('  buildVoidJNorthJakarta() {');
assert.ok(voidJNetworkMethod.includes('VOID_J_OSM'), 'Void J builder does not consume the OSM dataset');
assert.ok(voidJNetworkMethod.includes('segmentIntersection'), 'Void J builder missing automatic bridges');
assert.ok(voidJNetworkMethod.includes('insideAnchorSite'), 'Void J builder must mask bridges and props inside anchor sites');
assert.ok(voidJNetworkMethod.includes('new THREE.Shape'), 'Void J builder must triangulate the water body polygons');
assert.ok(
  voidJNetworkMethod.includes('this.registerNightMaterial(waterMat, {'),
  'Void J water must join the night material registry'
);
assert.ok(
  voidJNetworkMethod.includes('emissive: WATER_NIGHT_EMISSIVE'),
  'Void J water must reuse the shared teal night emissive'
);
assert.ok(voidJNetworkMethod.includes('pjuBulbMat'), 'Void J builder must share the pju-bulb material');
assert.ok(voidJNetworkMethod.includes('recordMergedPjuLamp'), 'Void J PJU lamps must feed the shared light pool');
assert.ok(voidJNetworkMethod.includes('VOID_J_RAIL_CONNECTOR'), 'Void J builder must draw the KRL seam connector');
assert.ok(voidJNetworkMethod.includes('voidJOsmStats'), 'Void J builder must expose runtime stats');
assert.ok(voidJNetworkMethod.includes('drawCalls: 13'), 'Void J network should add thirteen draw calls');
assert.ok(voidJNetworkMethod.includes('connectors: 1'), 'Void J builder must count the KRL seam connector');
assert.ok(!voidJNetworkMethod.includes('new THREE.PointLight'), 'Void J network must not add PointLights');
assert.ok(!voidJNetworkMethod.includes('nightMaterials.push'), 'Void J network must not register new night materials');

[
  'voidj-roads',
  'voidj-sidewalks',
  'voidj-water',
  'voidj-water-bodies',
  'voidj-bridges',
  'voidj-pju-poles',
  'voidj-pju-bulbs',
  'voidj-tree-trunks',
  'voidj-tree-foliage',
  'voidj-rail-ballast',
  'voidj-rail-tracks',
  'voidj-rail-sleepers',
  'voidj-rail-catenary'
].forEach((name) => {
  assert.ok(voidJNetworkMethod.includes(name), `Void J builder missing the ${name} mesh`);
});

[
  'Jalan Yos Sudarso',
  'Jalan Sunter Karya',
  'Jalan Sunter Muara Raya',
  'Jalan Kawasan Wisata Ancol',
  'Jalan Raya Gading Nirwana',
  'Jalan Inspeksi Kali Sunter'
].forEach((name) => {
  assert.ok(voidJNetworkMethod.includes(name), `Void J PJU corridor list missing ${name}`);
});
['Sunter River', 'Ancol', 'Cakung'].forEach((name) => {
  assert.ok(voidJNetworkMethod.includes(name), `Void J tree bank list missing ${name}`);
});

// Check 93: Void J Tahap 3 — urban fabric Sunter-Ancol-Koja
const voidJInfillMethod = sliceCityBuilder('  buildVoidJInfill() {');
const voidJInfillCallIndex = citySceneContent.indexOf('this.buildVoidJInfill();');
assert.ok(voidJInfillCallIndex > 0, 'CityScene.js does not call buildVoidJInfill');
assert.ok(
  voidJInfillCallIndex > voidJNetworkCallIndex,
  'buildVoidJInfill must run after buildVoidJNorthJakarta'
);
assert.ok(
  voidJInfillCallIndex < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidJInfill must run before the second Void B pass'
);

[
  'voidj-infill-houses',
  'voidj-infill-shophouses',
  'voidj-infill-house-roofs',
  'voidj-infill-warehouses',
  'voidj-infill-warehouse-roofs',
  'voidj-night-windows'
].forEach((name) => {
  assert.ok(voidJInfillMethod.includes(name), `Void J infill builder missing the ${name} mesh`);
});

assert.ok(voidJInfillMethod.includes('VOID_J_OSM'), 'Void J infill must consume the OSM road graph');
assert.ok(voidJInfillMethod.includes('getVoidJRoadSegments'), 'Void J infill must mask ruko against their own corridors');
assert.ok(voidJInfillMethod.includes('isNearVoidJRoad'), 'Void J infill must clear all OSM roads');
assert.ok(voidJInfillMethod.includes('isInsideVoidJWaterBody'), 'Void J infill must clear the OSM water bodies');
assert.ok(voidJInfillMethod.includes('isNearVoidJRail'), 'Void J infill must clear the KRL corridor');
assert.ok(voidJInfillMethod.includes('isInsideVoidJAnchorSite'), 'Void J infill must clear the three J anchor sites');
assert.ok(voidJInfillMethod.includes('VOID_J_NEIGHBOR_SITES'), 'Void J infill must clear the JIS, Dufan, and JIExpo footprints');
assert.ok(voidJInfillMethod.includes('VOID_J_LEGACY_INFILL_RECTS'), 'Void J infill must clear the pre-existing Sunter and Kelapa Gading masses');
assert.ok(voidJInfillMethod.includes('VOID_J_PR_PLOT'), 'Void J infill must reserve the future Park-and-Ride plot');
assert.ok(voidJInfillMethod.includes('VOID_J_PR_DRIVEWAY'), 'Void J infill must reserve the future Park-and-Ride driveway');
assert.ok(voidJInfillMethod.includes('addInfillNightWindows'), 'Void J infill must add night windows');
assert.ok(voidJInfillMethod.includes('voidJInfillStats'), 'Void J infill must expose runtime stats');
assert.ok(voidJInfillMethod.includes('drawCalls: 6'), 'Void J infill should add six draw calls');
assert.ok(!voidJInfillMethod.includes('new THREE.PointLight'), 'Void J infill must not add PointLights');

const voidJResidentialZones = voidJInfillMethod.match(/const residentialZones = \[([\s\S]*?)\n    \];/);
assert.ok(voidJResidentialZones, 'Void J infill missing the residential zone list');
assert.strictEqual(
  (voidJResidentialZones[1].match(/minX:/g) || []).length,
  9,
  'Void J infill must keep nine residential zones'
);
const voidJWarehouseZones = voidJInfillMethod.match(/const warehouseZones = \[([\s\S]*?)\n    \];/);
assert.ok(voidJWarehouseZones, 'Void J infill missing the warehouse zone list');
assert.strictEqual(
  (voidJWarehouseZones[1].match(/minX:/g) || []).length,
  3,
  'Void J infill must keep three warehouse zones'
);
[
  'Jalan Yos Sudarso',
  'Jalan Gunung Sahari Raya',
  'Jalan Industri Raya',
  'Jalan Griya Utama',
  'Jalan Pesanggrahan Raya',
  'Jalan Pangeran Jayakarta',
  'Jalan Sunter Permai Raya',
  'Jalan Bisma Raya',
  'Jalan Artha Gading Boulevard',
  'Jalan Mitra Sunter Boulevard'
].forEach((name) => {
  assert.ok(voidJInfillMethod.includes(name), `Void J shophouse corridor list missing ${name}`);
});

const voidJNeighborSitesMatch = citySceneContent.match(/const VOID_J_NEIGHBOR_SITES = \[([\s\S]*?)\n\];/);
assert.ok(voidJNeighborSitesMatch, 'CityScene.js missing the Void J neighbor anchor footprints');
['jis-stadium', 'ancol-dufan', 'jiexpo-kemayoran'].forEach((id) => {
  assert.ok(voidJNeighborSitesMatch[1].includes(id), `Void J neighbor site mask missing ${id}`);
});
const voidJLegacyRectsMatch = citySceneContent.match(/const VOID_J_LEGACY_INFILL_RECTS = \[([\s\S]*?)\n\];/);
assert.ok(voidJLegacyRectsMatch, 'CityScene.js missing the Void J legacy infill rects');
assert.strictEqual(
  (voidJLegacyRectsMatch[1].match(/\[/g) || []).length,
  4,
  'Void J must clear four pre-existing mass strips'
);
assert.ok(citySceneContent.includes('const VOID_J_PR_PLOT'), 'CityScene.js missing the Void J P&R plot reservation');
assert.ok(citySceneContent.includes('const VOID_J_PR_DRIVEWAY'), 'CityScene.js missing the Void J P&R driveway reservation');

// Check 94: Void J Tahap 4 — Park-and-Ride Ancol dan enam feeder halte
assert.ok(citySceneContent.includes('buildVoidJTransit()'), 'CityScene.js missing buildVoidJTransit');

const voidJTransitCall = citySceneContent.indexOf('this.buildVoidJTransit();');
assert.ok(voidJTransitCall > 0, 'CityScene.js does not call buildVoidJTransit');
assert.ok(
  voidJTransitCall > citySceneContent.indexOf('this.buildVoidJInfill();'),
  'buildVoidJTransit must run after buildVoidJInfill so the P&R plot is reserved'
);
assert.ok(
  voidJTransitCall < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidJTransit must run before buildVoidBInfillAndIndustry'
);
assert.ok(
  citySceneContent.includes('this.voidJTransitLabels = [];'),
  'CityScene constructor must initialise the Void J transit label list'
);

const voidJPrPlotObject = citySceneContent.match(/const VOID_J_PR_PLOT = \{([^}]*)\};/);
assert.ok(voidJPrPlotObject, 'Void J P&R plot must use the shared {x,z,w,d} shape');
assert.ok(
  voidJPrPlotObject[1].includes('x: 299') &&
    voidJPrPlotObject[1].includes('z: -911') &&
    voidJPrPlotObject[1].includes('w: 30') &&
    voidJPrPlotObject[1].includes('d: 18'),
  'Void J P&R plot drifted from the audited Pademangan parcel'
);
const voidJPrDrivewayObject = citySceneContent.match(/const VOID_J_PR_DRIVEWAY = \{([^}]*)\};/);
assert.ok(voidJPrDrivewayObject, 'Void J P&R driveway must use the shared {x,z,w,d} shape');
assert.ok(
  voidJPrDrivewayObject[1].includes('x: 309') &&
    voidJPrDrivewayObject[1].includes('z: -903') &&
    voidJPrDrivewayObject[1].includes('w: 6') &&
    voidJPrDrivewayObject[1].includes('d: 6'),
  'Void J P&R driveway drifted from the audited Jalan Pademangan VI apron'
);

const voidJTransitBody = sliceCityBuilder('  buildVoidJTransit() {');
assert.ok(!voidJTransitBody.includes('new THREE.PointLight'), 'Void J transit must not add PointLights');
assert.ok(voidJTransitBody.includes('VOID_J_OSM'), 'Void J transit must anchor halte to the OSM road network');
assert.ok(voidJTransitBody.includes('findRoadPoint'), 'Void J transit missing the road anchor helper');
assert.ok(voidJTransitBody.includes('const halteLabels = [];'), 'Void J transit must collect halte labels');
assert.ok(voidJTransitBody.includes('halteLabels.push({'), 'Void J transit must emit one label per halte');
assert.ok(
  voidJTransitBody.includes('position: [hx, 6.4, hz]'),
  'Void J halte labels must float above the canopy'
);
assert.ok(
  voidJTransitBody.includes('shortName: spec.shortName,'),
  'Void J halte labels must forward the short name'
);
assert.ok(voidJTransitBody.includes("kind: 'halte'"), 'Void J halte labels must carry the halte kind');
assert.ok(
  voidJTransitBody.includes('this.voidJTransitLabels = ['),
  'Void J transit must publish its label anchors'
);

assert.ok(voidJTransitBody.includes('VOID_J_PR_PLOT'), 'Void J transit must read the shared P&R plot');
assert.ok(
  voidJTransitBody.includes('const prCenterX = VOID_J_PR_PLOT.x;'),
  'Void J P&R centre must come from the shared plot'
);
assert.ok(
  voidJTransitBody.includes('VOID_J_PR_DRIVEWAY.w') && voidJTransitBody.includes('VOID_J_PR_DRIVEWAY.d'),
  'Void J P&R driveway must use the shared access strip so infill and transit stay aligned'
);
assert.ok(
  voidJTransitBody.includes("name: 'Park and Ride Ancol'"),
  'Void J P&R label missing the full name'
);
assert.ok(voidJTransitBody.includes("shortName: 'P&R Ancol'"), 'Void J P&R label missing the short name');
assert.ok(voidJTransitBody.includes("kind: 'park'"), 'Void J P&R label must use the P badge');
assert.ok(
  voidJTransitBody.includes('position: [prCenterX, 7.6, prCenterZ]'),
  'Void J P&R label must clear the shelter roof'
);
assert.ok(voidJTransitBody.includes('const bayCount = 8;'), 'Void J P&R must keep eight parking bays');
assert.ok(voidJTransitBody.includes('parkingBays: bayCount'), 'Void J transit stats missing the bay count');
assert.ok(voidJTransitBody.includes('trees: treePositions.length'), 'Void J transit stats missing the tree count');

const voidJHalteSpecs = [
  ['Halte Stasiun Ancol', 'Stasiun Ancol', 'Jalan Budi Mulya Utara Raya', [230.7, -894.0], 1, [235.9, -894.9], [211, -951]],
  ['Halte Taman Impian Jaya Ancol', 'Taman Impian Jaya Ancol', 'Pantai Indah', [160.3, -1021.0], 1, [155.0, -1020.2], [147, -999]],
  ['Halte JIS', 'JIS', 'Jalan Sunter Permai Raya', [530.0, -925.4], 1, [526.0, -921.9], [528, -995]],
  ['Halte Rusunawa Sunter Jaya', 'Rusunawa Sunter Jaya', 'Jalan Sunter Karya', [651.3, -752.1], -1, [646.6, -751.1], [648, -751]],
  ['Halte RSUD Koja', 'RSUD Koja', 'Jalan Alur Laut', [1073.7, -942.0], 1, [1079.0, -942.0], [1094, -942]],
  ['Halte Pademangan', 'Pademangan', 'Jalan Pademangan VI', [305.0, -888.2], 1, [300.4, -891.0], [299, -911]]
];

voidJHalteSpecs.forEach(([name, shortName, road, near, side]) => {
  assert.ok(voidJTransitBody.includes(`name: '${name}'`), `Void J transit missing ${name}`);
  assert.ok(voidJTransitBody.includes(`shortName: '${shortName}'`), `Void J halte label missing the ${shortName} short name`);
  assert.ok(voidJTransitBody.includes(`road: '${road}'`), `Void J halte missing the ${road} anchor`);
  assert.ok(
    voidJTransitBody.includes(`near: [${near[0]}, ${near[1]}], side: ${side}`),
    `Void J halte ${shortName} drifted from its audited shoulder point`
  );
});

[
  'voidj-transit-concrete',
  'voidj-transit-steel',
  'voidj-transit-sign',
  'voidj-transit-tree-trunks',
  'voidj-transit-tree-foliage'
].forEach((name) => {
  assert.ok(voidJTransitBody.includes(name), `Void J transit missing the ${name} mesh`);
});

assert.ok(voidJTransitBody.includes('registerNightMaterial'), 'Void J transit sign must register for night');
assert.ok(voidJTransitBody.includes('emissive: 0xfff4d6'), 'Void J transit sign night emissive drifted');
assert.ok(voidJTransitBody.includes('nightIntensity: 0.55'), 'Void J transit sign night intensity drifted');
assert.ok(voidJTransitBody.includes('voidJTransitStats'), 'Void J transit must expose runtime stats');
assert.ok(voidJTransitBody.includes('drawCalls: 5'), 'Void J transit should add five draw calls');
assert.ok(
  mainJsContent.includes('...this.city.voidJTransitLabels'),
  'main.js must forward the Void J transit labels to UIManager'
);

const voidJFindRoadPoint = (roadName, near) => {
  let best = null;
  VOID_J_OSM.roads.forEach((road) => {
    if (road.name !== roadName) return;
    for (let i = 0; i < road.points.length - 1; i++) {
      const a = road.points[i];
      const b = road.points[i + 1];
      const dx = b[0] - a[0];
      const dz = b[1] - a[1];
      const len2 = dx * dx + dz * dz;
      let t = len2 ? ((near[0] - a[0]) * dx + (near[1] - a[1]) * dz) / len2 : 0;
      t = Math.max(0, Math.min(1, t));
      const x = a[0] + dx * t;
      const z = a[1] + dz * t;
      const d = Math.hypot(near[0] - x, near[1] - z);
      if (!best || d < best.d) best = { x, z, d, angle: Math.atan2(dx, dz), width: road.width };
    }
  });
  return best;
};

const voidJWaterEdge = (x, z) => {
  let best = Infinity;
  VOID_J_OSM.waterways.forEach((waterway) => {
    for (let i = 0; i < waterway.points.length - 1; i++) {
      best = Math.min(
        best,
        distanceToSegment([x, z], waterway.points[i], waterway.points[i + 1]) - waterway.width * 0.5
      );
    }
  });
  return best;
};
const voidJBodyAt = (x, z) =>
  VOID_J_OSM.waterBodies.some((body) => {
    const pts = body.points;
    let inside = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const xi = pts[i][0];
      const zi = pts[i][1];
      const xj = pts[j][0];
      const zj = pts[j][1];
      if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
    }
    return inside;
  });
const voidJRectClear = (rect, x, z) =>
  Math.hypot(Math.max(rect[0] - x, 0, x - rect[1]), Math.max(rect[2] - z, 0, z - rect[3]));
const voidJMasks = [
  [150, 272, -985, -905],
  [586, 710, -797, -705],
  [1018, 1170, -1001, -883],
  [440, 616, -1055, -935],
  [80, 215, -1080, -930],
  [248, 372, -750, -638],
  [491, 519, -866, -638],
  [641, 669, -866, -638],
  [781, 809, -866, -638],
  [1098, 1302, -775, -612]
];
const voidJLandmarkMasses = [
  [155, 267, -978, -924],
  [101, 137, -1010, -988],
  [458, 598, -1050, -940],
  [610, 686, -775, -763],
  [1069, 1099, -973, -951],
  [1037, 1067, -951, -933]
];

const voidJPrRect = [299 - 15, 299 + 15, -911 - 9, -911 + 9];
const voidJDriveRect = [309 - 3, 309 + 3, -903 - 3, -903 + 3];
voidJMasks.forEach((mask) => {
  assert.ok(
    !(voidJPrRect[0] < mask[1] && voidJPrRect[1] > mask[0] && voidJPrRect[2] < mask[3] && voidJPrRect[3] > mask[2]),
    `Void J P&R plot intersects the reserved mask [${mask}]`
  );
});
assert.ok(
  voidJPrRect[0] < voidJDriveRect[1] &&
    voidJPrRect[1] > voidJDriveRect[0] &&
    voidJPrRect[2] < voidJDriveRect[3] &&
    voidJPrRect[3] > voidJDriveRect[2],
  'Void J P&R driveway must meet the plaza edge'
);
[[voidJPrRect[0], voidJPrRect[2]], [voidJPrRect[1], voidJPrRect[2]], [voidJPrRect[0], voidJPrRect[3]], [voidJPrRect[1], voidJPrRect[3]]]
  .forEach(([cx, cz]) => {
    let roadEdge = Infinity;
    VOID_J_OSM.roads.forEach((road) => {
      for (let i = 0; i < road.points.length - 1; i++) {
        roadEdge = Math.min(roadEdge, distanceToSegment([cx, cz], road.points[i], road.points[i + 1]) - road.width * 0.5);
      }
    });
    assert.ok(roadEdge >= 0, `Void J P&R plot corner ${cx}/${cz} overlaps the roadway (${roadEdge.toFixed(2)})`);
    assert.ok(voidJWaterEdge(cx, cz) >= 0, `Void J P&R plot corner ${cx}/${cz} overlaps a waterway`);
    assert.ok(!voidJBodyAt(cx, cz), `Void J P&R plot corner ${cx}/${cz} sits in a water body`);
  });
let voidJDrivewayRoadEdge = Infinity;
[[voidJDriveRect[0], voidJDriveRect[2]], [voidJDriveRect[1], voidJDriveRect[2]], [voidJDriveRect[0], voidJDriveRect[3]], [voidJDriveRect[1], voidJDriveRect[3]]]
  .forEach(([cx, cz]) => {
    VOID_J_OSM.roads.forEach((road) => {
      for (let i = 0; i < road.points.length - 1; i++) {
        voidJDrivewayRoadEdge = Math.min(
          voidJDrivewayRoadEdge,
          distanceToSegment([cx, cz], road.points[i], road.points[i + 1]) - road.width * 0.5
        );
      }
    });
  });
assert.ok(
  voidJDrivewayRoadEdge <= 0.5 && voidJDrivewayRoadEdge >= -0.5,
  `Void J P&R driveway must end on a road edge (gap ${voidJDrivewayRoadEdge.toFixed(2)})`
);
assert.ok(voidJWaterEdge(309, -903) >= 0, 'Void J P&R driveway must stay off the waterways');
assert.ok(!voidJBodyAt(309, -903), 'Void J P&R driveway must not sit in a water body');

const voidJHalteCenters = voidJHalteSpecs.map(([name, shortName, road, near, side, expected, anchor]) => {
  const snapped = voidJFindRoadPoint(road, near);
  assert.ok(snapped, `Void J halte ${shortName} lost its ${road} anchor`);
  assert.ok(snapped.d <= 1, `Void J halte ${shortName} near point must sit on ${road}`);
  const nx = Math.cos(snapped.angle);
  const nz = -Math.sin(snapped.angle);
  const ux = Math.sin(snapped.angle);
  const uz = Math.cos(snapped.angle);
  const offset = snapped.width * 0.5 - 0.2;
  const hx = snapped.x + nx * offset * side;
  const hz = snapped.z + nz * offset * side;

  assert.ok(
    Math.abs(hx - expected[0]) <= 0.15 && Math.abs(hz - expected[1]) <= 0.15,
    `Void J halte ${shortName} drifted to ${hx.toFixed(1)}/${hz.toFixed(1)}`
  );

  let minMass = Infinity;
  let minWater = Infinity;
  [-6, 0, 6].forEach((lz) => {
    [-1.3, 0, 1.3].forEach((lx) => {
      const cx = hx + lx * nx + lz * ux;
      const cz = hz + lx * nz + lz * uz;
      voidJLandmarkMasses.forEach((mass) => {
        minMass = Math.min(minMass, voidJRectClear(mass, cx, cz));
      });
      minWater = Math.min(minWater, voidJWaterEdge(cx, cz));
      assert.ok(!voidJBodyAt(cx, cz), `Void J halte ${shortName} peron must stay out of water bodies`);
    });
  });

  assert.ok(minMass >= 1, `Void J halte ${shortName} peron must clear the anchor masses (min ${minMass.toFixed(2)})`);
  assert.ok(minWater >= 0, `Void J halte ${shortName} peron must stay off the waterways (min ${minWater.toFixed(2)})`);
  assert.ok(
    Math.hypot(hx - anchor[0], hz - anchor[1]) <= 80,
    `Void J halte ${shortName} drifted too far from its anchor`
  );
  assert.ok(
    hx >= VOID_J_OSM.meta.clipBox.minX &&
      hx <= VOID_J_OSM.meta.clipBox.maxX &&
      hz >= VOID_J_OSM.meta.clipBox.minZ &&
      hz <= VOID_J_OSM.meta.clipBox.maxZ,
    `Void J halte ${shortName} fell outside the OSM clip box`
  );
  return [hx, hz];
});

for (let i = 0; i < voidJHalteCenters.length; i++) {
  for (let j = i + 1; j < voidJHalteCenters.length; j++) {
    const gap = Math.hypot(
      voidJHalteCenters[i][0] - voidJHalteCenters[j][0],
      voidJHalteCenters[i][1] - voidJHalteCenters[j][1]
    );
    assert.ok(gap >= 25, `Void J transit haltes ${i} and ${j} are only ${gap.toFixed(1)} units apart`);
  }
}

// Check 95: P2 visual Void J — fasad rusunawa, lampu helipad, ujung waterway,
// lampu taman P&R, dan declutter label Tanjung Priok
const voidJOsmBody = sliceCityBuilder('  buildVoidJNorthJakarta() {');
const rusunawaBody = sliceLandmarkBuilder('static createRusunawaSunter() {');
assert.ok(!rusunawaBody.includes('new THREE.PointLight'), 'Rusunawa Sunter must not add PointLights');
assert.ok(rusunawaBody.includes('const facadeStyles'), 'Rusunawa Sunter must declare per-tower facade styles');
assert.ok(
  (rusunawaBody.match(/facadeStyles = \[/g) || []).length === 1 &&
    rusunawaBody.includes("'fins'") &&
    rusunawaBody.includes("'bands'") &&
    rusunawaBody.includes("'pairs'"),
  'Rusunawa Sunter must differentiate all three towers'
);
assert.ok(rusunawaBody.includes("'rusunawa-sunter-fins'"), 'Rusunawa Sunter missing the western fin mesh');
assert.ok(
  rusunawaBody.includes("'rusunawa-sunter-balconies'"),
  'Rusunawa Sunter missing the western balcony mesh'
);
assert.ok(
  rusunawaBody.includes("'rusunawa-sunter-pair-windows'"),
  'Rusunawa Sunter missing the eastern paired-window mesh'
);
assert.ok(
  rusunawaBody.includes("tower.name = 'rusunawa-sunter-tower'"),
  'Rusunawa Sunter must keep the middle-tower audit marker'
);
assert.ok(
  rusunawaBody.includes('BufferGeometryUtils.mergeGeometries'),
  'Rusunawa facade details must merge to limit draw calls'
);

const rsudKojaBody = sliceLandmarkBuilder('static createRSUDKoja() {');
assert.ok(!rsudKojaBody.includes('new THREE.PointLight'), 'RSUD Koja must not add PointLights');
assert.ok(
  rsudKojaBody.includes("'rsud-koja-helipad-lights'"),
  'RSUD Koja missing the helipad perimeter light mesh'
);
assert.ok(
  rsudKojaBody.includes('for (let i = 0; i < 12; i++)'),
  'RSUD Koja helipad must carry twelve perimeter lights'
);
assert.ok(
  rsudKojaBody.includes('Math.cos(angle) * 6.9') && rsudKojaBody.includes('Math.sin(angle) * 6.9'),
  'RSUD Koja helipad lights must sit on the pad rim'
);
assert.ok(
  rsudKojaBody.includes('tagNightWindow') && rsudKojaBody.includes('0.72'),
  'RSUD Koja helipad lights must glow at night without new PointLights'
);

assert.ok(
  citySceneContent.includes('let waterwayCaps = 0;'),
  'Void J waterway builder must count rounded caps'
);
assert.ok(
  voidJOsmBody.includes('new THREE.CircleGeometry'),
  'Void J waterway ends must use a rounded cap instead of a squared box'
);
assert.ok(voidJOsmBody.includes('waterwayCaps++'), 'Void J waterway cap counter never increments');
assert.ok(
  voidJOsmBody.includes('waterwayCaps'),
  'Void J OSM stats must report the rounded waterway caps'
);
assert.ok(
  voidJOsmBody.includes("mergeAndAdd(waterGeos, waterMat, 'voidj-water'"),
  'Void J caps must merge into the existing water mesh'
);

assert.ok(
  voidJTransitBody.includes('const bollardCount = 8;'),
  'Void J P&R must carry eight garden lights'
);
assert.ok(
  voidJTransitBody.includes('gardenLights: bollardCount'),
  'Void J transit stats missing the garden light count'
);
assert.ok(
  voidJTransitBody.includes('makeBox(0.34, 0.22, 0.34'),
  'Void J P&R garden light heads must merge into the night sign mesh'
);
assert.ok(
  voidJTransitBody.includes('makeBox(0.18, 1.3, 0.18'),
  'Void J P&R garden light posts must merge into the steel mesh'
);
assert.ok(
  !voidJTransitBody.includes('new THREE.PointLight'),
  'Void J P&R garden lights must not add PointLights'
);

assert.ok(
  uiManagerContent.includes('LABEL_DECLUTTER_PADDING'),
  'UIManager must declare the compact-label declutter padding'
);
assert.ok(
  uiManagerContent.includes('labelRectsOverlap'),
  'UIManager missing the compact-label overlap test'
);
assert.ok(
  uiManagerContent.includes('labelCandidates.sort'),
  'UIManager must declutter compact labels nearest-first'
);
assert.ok(
  uiManagerContent.includes('placedLabelRects'),
  'UIManager must track placed compact labels before hiding overlaps'
);

// Check 96: P2 Void J Tahap 5 — Pasar Pademangan Barat dan Wisma Atlet
// Kemayoran mengisi dua kantong permukiman yang masih kosong.
assert.ok(
  citySceneContent.includes('[200, 284, -879, -823]'),
  'VOID_J_ANCHOR_SITES missing the Pasar Pademangan protection mask'
);
assert.ok(
  citySceneContent.includes('[470, 590, -612, -540]'),
  'VOID_J_ANCHOR_SITES missing the Wisma Atlet mask north of the Kemayoran river'
);

const pasarPademanganBody = sliceLandmarkBuilder('static createPasarPademangan() {');
assert.ok(
  pasarPademanganBody.includes("'pasar-pademangan-hall'"),
  'Pasar Pademangan must expose the market-hall audit marker'
);
assert.ok(
  pasarPademanganBody.includes('BufferGeometryUtils.mergeGeometries'),
  'Pasar Pademangan kiosk and sign details must merge to limit draw calls'
);
assert.ok(
  !pasarPademanganBody.includes('new THREE.PointLight'),
  'Pasar Pademangan must not add PointLights'
);

const wismaAtletBody = sliceLandmarkBuilder('static createWismaAtletKemayoran() {');
assert.ok(
  wismaAtletBody.includes("'wisma-atlet-tower'"),
  'Wisma Atlet must expose the tower audit marker'
);
assert.ok(
  wismaAtletBody.includes('const towerCount = 10;'),
  'Wisma Atlet must model all ten residential towers'
);
assert.ok(
  wismaAtletBody.includes('BufferGeometryUtils.mergeGeometries'),
  'Wisma Atlet window bands must merge to limit draw calls'
);
assert.ok(
  !wismaAtletBody.includes('new THREE.PointLight'),
  'Wisma Atlet must not add PointLights'
);

['pasar-pademangan', 'wisma-atlet-kemayoran'].forEach((id) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  JAKARTA_LANDMARKS.forEach((other) => {
    if (other.id === id) return;
    const distance = Math.hypot(lm.position[0] - other.position[0], lm.position[2] - other.position[2]);
    assert.ok(distance >= 70, `Anchor ${id} is only ${distance.toFixed(1)} units from ${other.id}`);
  });
});

assert.ok(
  JAKARTA_LANDMARKS.find((l) => l.id === 'pasar-pademangan').description.includes('441'),
  'Pasar Pademangan description must record the 441-unit market size'
);

// Check 97: Void K Tahap 1 — tiga anchor mengisi lubang Cakung–Pulo Gebang
const voidKAnchors = [
  { id: 'pasar-cakung', builder: 'createPasarCakung', position: [1571.2, 0, -168.0], marker: 'pasar-cakung-hall' },
  { id: 'rusun-pinus-elok', builder: 'createRusunPinusElok', position: [1639.4, 0, 54.0], marker: 'rusun-pinus-elok-tower' },
  { id: 'pasar-ujung-menteng', builder: 'createPasarUjungMenteng', position: [2028.2, 0, -68.7], marker: 'pasar-ujung-menteng-hall' }
];

assert.deepStrictEqual(
  JAKARTA_LANDMARKS.slice(128, 131).map((l) => l.id),
  voidKAnchors.map((a) => a.id),
  'Void K anchors must follow Wisma Atlet as landmarks #129-#131'
);

voidKAnchors.forEach(({ id, builder, position, marker }, index) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Void K landmark ${id} not found in JAKARTA_LANDMARKS`);
  assert.deepStrictEqual(lm.position, position, `Void K landmark ${id} position changed without updating the layout`);
  assert.ok(lm.position[0] >= 1250 && lm.position[0] <= 2100, `Landmark ${id} X position ${lm.position[0]} outside Void K range [1250, 2100]`);
  assert.ok(lm.position[2] >= -500 && lm.position[2] <= 350, `Landmark ${id} Z position ${lm.position[2]} outside Void K range [-500, 350]`);
  assert.ok(lm.facts && lm.facts.length >= 3, `Landmark ${id} must have at least 3 educational facts`);
  assert.ok(lm.labelHeight >= 30, `Landmark ${id} labelHeight ${lm.labelHeight} is too low for a Void K anchor`);
  assert.ok(lm.cameraPosition[1] > 30, `Landmark ${id} camera must be elevated above street level`);
  assert.ok(lm.cameraTarget[1] < lm.cameraPosition[1], `Landmark ${id} camera must look downward at the anchor`);

  const projected = projectGpsToScene(lm.coordinates.lat, lm.coordinates.lng);
  assert.ok(
    Math.abs(projected[0] - lm.position[0]) <= 12 && Math.abs(projected[1] - lm.position[2]) <= 12,
    `Landmark ${id} coordinates must project within 12 units of its scene position`
  );

  assert.ok(
    citySceneContent.includes(`"${id}": () => LandmarkModels.${builder}()`),
    `CityScene must dispatch ${id} to ${builder}`
  );
  assert.ok(landmarkModelsContent.includes(`static ${builder}()`), `LandmarkModels missing ${builder}`);

  const factoryStart = landmarkModelsContent.indexOf(`static ${builder}()`);
  const factoryEnd = landmarkModelsContent.indexOf('static create', factoryStart + 10);
  const factory = landmarkModelsContent.slice(factoryStart, factoryEnd === -1 ? undefined : factoryEnd);
  assert.ok(factory.includes(`'${marker}'`), `${builder} must expose the ${marker} mesh for clicking and labels`);
  assert.ok(factory.includes('BufferGeometryUtils.mergeGeometries'), `${builder} must merge detail geometry`);
  assert.ok(factory.includes('LandmarkModels.tagNightWindow('), `${builder} must tag a glass material for night windows`);
  assert.ok(!factory.includes('new THREE.PointLight'), `${builder} must not add PointLights`);

  assert.ok(indexHtmlContent.includes(`data-tour-id="${id}"`), `index.html missing Void K tour button for "${id}"`);
  const labelIndex = 129 + index;
  assert.ok(
    new RegExp(`data-tour-id="${id}"[\\s\\S]{0,400}?>${labelIndex}</span>`).test(indexHtmlContent),
    `Tour button for "${id}" must carry index ${labelIndex}`
  );
});

voidKAnchors.forEach(({ id }) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  JAKARTA_LANDMARKS.forEach((other) => {
    if (other.id === id) return;
    const distance = Math.hypot(lm.position[0] - other.position[0], lm.position[2] - other.position[2]);
    assert.ok(distance >= 70, `Anchor ${id} is only ${distance.toFixed(1)} units from ${other.id}`);
  });
});

// Check 98: Void K Tahap 2 — jaringan OSM Cakung–Ujung Menteng–Pulo Gebang
const voidKPath = './src/data/void_k_osm.js';
assert.ok(fs.existsSync(voidKPath), 'Void K Tahap 2 must ship src/data/void_k_osm.js');
const { VOID_K_OSM } = await import('./src/data/void_k_osm.js');

assert.ok(VOID_K_OSM.meta.source.includes('OpenStreetMap'), 'Void K OSM dataset missing OSM attribution');
assert.ok(VOID_K_OSM.meta.license.includes('ODbL'), 'Void K OSM dataset missing ODbL license');
assert.strictEqual(VOID_K_OSM.meta.retrieved, '2026-11-02', 'Void K dataset retrieval date changed');
assert.ok(VOID_K_OSM.meta.api.includes('overpass.openstreetmap.fr'), 'Void K dataset must record the Overpass mirror');
assert.ok(VOID_K_OSM.meta.api.includes('2026-08-10'), 'Void K dataset must record the OSM base snapshot');
assert.strictEqual(VOID_K_OSM.meta.projection, 'projectGpsToScene', 'Void K dataset must use the unscaled GPS projection');
assert.deepStrictEqual(
  VOID_K_OSM.meta.projectionConstants,
  { originLng: 106.823048, originLat: -6.194957, scaleX: 14100, scaleZ: 14180 },
  'Void K projection constants must match the scene projection'
);
assert.deepStrictEqual(
  VOID_K_OSM.meta.bbox,
  { south: -6.2345, west: 106.9174, north: -6.1618, east: 106.9752 },
  'Void K dataset bbox must cover Cakung, Penggilingan, and Ujung Menteng'
);
assert.deepStrictEqual(
  VOID_K_OSM.meta.clipBoxes,
  [
    { name: 'barat', minX: 1330, maxX: 1995, minZ: -470, maxZ: -150 },
    { name: 'timur', minX: 1995, maxX: 2145, minZ: -470, maxZ: 560 }
  ],
  'Void K clip boxes must form the L-shaped gap between Void E and Void F'
);
assert.strictEqual(VOID_K_OSM.meta.simplification, 2, 'Void K simplification must stay at Douglas–Peucker 2.0');
assert.ok(VOID_K_OSM.roads.length >= 350 && VOID_K_OSM.roads.length <= 420, `Void K roads expected 350-420, got ${VOID_K_OSM.roads.length}`);
const voidKRoadPoints = VOID_K_OSM.roads.reduce((sum, road) => sum + road.points.length, 0);
assert.ok(voidKRoadPoints >= 900 && voidKRoadPoints <= 3200, `Void K road points expected 900-3200 after Douglas–Peucker 2.0, got ${voidKRoadPoints}`);
const voidKNames = new Set(VOID_K_OSM.roads.map((road) => road.name));
assert.ok(voidKNames.size >= 150, `Void K dataset expected at least 150 unique road names, got ${voidKNames.size}`);
['Jalan Bekasi Raya', 'Jalan Sultan Agung', 'Jalan I Gusti Ngurah Rai', 'Jalan Jakarta Garden City Boulevard', 'Jalan Tipar Cakung', 'Jalan Cakung Cilincing Barat'].forEach((name) => {
  assert.ok(voidKNames.has(name), `Void K dataset missing key corridor ${name}`);
});
const voidKWidths = { trunk: 16, primary: 18, secondary: 14, tertiary: 11, residential: 10, unclassified: 10 };
VOID_K_OSM.roads.forEach((road) => {
  assert.strictEqual(road.width, voidKWidths[road.type], `Void K road ${road.name} has unexpected width for ${road.type}`);
  road.points.forEach(([x, z]) => {
    const inside = VOID_K_OSM.meta.clipBoxes.some((box) => x >= box.minX - 0.5 && x <= box.maxX + 0.5 && z >= box.minZ - 0.5 && z <= box.maxZ + 0.5);
    assert.ok(inside, `Void K road ${road.name} has point ${x},${z} outside both clip boxes`);
  });
});
assert.ok(VOID_K_OSM.waterways.length >= 10 && VOID_K_OSM.waterways.length <= 25, `Void K waterways expected 10-25, got ${VOID_K_OSM.waterways.length}`);
const voidKWaterNames = new Set(VOID_K_OSM.waterways.map((waterway) => waterway.name));
assert.ok(voidKWaterNames.has('Cakung'), 'Void K dataset missing Kali Cakung');
assert.ok(voidKWaterNames.has('Rawa Malang'), 'Void K dataset missing Kali Rawa Malang');
assert.ok(!voidKWaterNames.has('Kanal Banjir Timur'), 'Void K must not duplicate the procedural Kanal Banjir Timur');
VOID_K_OSM.waterways.forEach((waterway) => {
  assert.ok(['river', 'canal', 'stream'].includes(waterway.kind), `Void K waterway ${waterway.name} has unexpected kind ${waterway.kind}`);
  assert.ok(waterway.width >= 10, `Void K waterway ${waterway.name} is too narrow`);
});
assert.ok(VOID_K_OSM.waterBodies.length >= 2 && VOID_K_OSM.waterBodies.length <= 10, `Void K water bodies expected 2-10, got ${VOID_K_OSM.waterBodies.length}`);
VOID_K_OSM.waterBodies.forEach((body) => {
  const first = body.points[0];
  const last = body.points[body.points.length - 1];
  assert.ok(first[0] === last[0] && first[1] === last[1], `Void K water body ${body.name} ring must be closed`);
  let area = 0;
  for (let i = 0; i < body.points.length - 1; i++) {
    area += body.points[i][0] * body.points[i + 1][1] - body.points[i + 1][0] * body.points[i][1];
  }
  assert.ok(area > 0, `Void K water body ${body.name} must wind counter-clockwise`);
});

const voidKRoadsNearAnchors = [...VOID_K_OSM.roads, ...VOID_F_OSM.roads];
const voidKAnchorDistances = [
  ['pasar-cakung', 1571.2, -168.0, 10],
  ['rusun-pinus-elok', 1639.4, 54.0, 60],
  ['pasar-ujung-menteng', 2028.2, -68.7, 10]
];
voidKAnchorDistances.forEach(([id, ax, az, limit]) => {
  let best = Infinity;
  // Rusun Pinus Elok sits inside Void F's clip box, so its access street comes from that dataset.
  voidKRoadsNearAnchors.forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      const [x1, z1] = road.points[i];
      const [x2, z2] = road.points[i + 1];
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len2 = dx * dx + dz * dz;
      let t = len2 ? ((ax - x1) * dx + (az - z1) * dz) / len2 : 0;
      t = Math.max(0, Math.min(1, t));
      best = Math.min(best, Math.hypot(ax - (x1 + t * dx), az - (z1 + t * dz)));
    }
  });
  assert.ok(best <= limit, `Void K anchor ${id} is ${best.toFixed(1)} units from the nearest OSM road (limit ${limit})`);
});

assert.ok(citySceneContent.includes("import { VOID_K_OSM } from '../data/void_k_osm.js';"), 'CityScene must import the Void K dataset');
const voidKBuilder = sliceCityBuilder('buildVoidK() {');
['voidk-roads', 'voidk-sidewalks', 'voidk-waterways', 'voidk-water-bodies', 'voidk-bridges', 'voidk-pju-poles', 'voidk-pju-bulbs', 'voidk-tree-trunks', 'voidk-tree-foliage'].forEach((meshName) => {
  assert.ok(voidKBuilder.includes(`'${meshName}'`), `Void K builder missing mesh ${meshName}`);
});
assert.ok(voidKBuilder.includes('registerNightMaterial'), 'Void K water materials must register for night emissive');
assert.ok(voidKBuilder.includes('WATER_NIGHT_EMISSIVE'), 'Void K water must use the shared night emissive colour');
assert.ok(voidKBuilder.includes('recordMergedPjuLamp'), 'Void K PJU lamps must join the merged PointLight candidate pool');
assert.ok(voidKBuilder.includes('segmentIntersection'), 'Void K must build automatic bridges from road-waterway crossings');
assert.ok(voidKBuilder.includes('drawCalls: 9'), 'Void K stats must report nine draw calls');
assert.ok(!voidKBuilder.includes('new THREE.PointLight'), 'Void K must not add PointLights');
assert.ok(citySceneContent.includes('isNearVoidKRoad('), 'CityScene must expose isNearVoidKRoad for Void K infill');
assert.ok(citySceneContent.includes('isInsideVoidKAnchorSite('), 'CityScene must expose isInsideVoidKAnchorSite for Void K infill');
assert.ok(citySceneContent.includes('isInsideVoidKWaterBody('), 'CityScene must expose isInsideVoidKWaterBody for Void K infill');
assert.ok(citySceneContent.includes('const VOID_K_ANCHOR_SITES = ['), 'CityScene must protect the three Void K anchor sites');
const voidKCallIndex = citySceneContent.indexOf('this.buildVoidK();');
assert.ok(voidKCallIndex > citySceneContent.indexOf('this.buildVoidJTransit();'), 'buildVoidK must run after Void J transit');
assert.ok(voidKCallIndex < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'), 'buildVoidK must run before the legacy Jakarta infill');

// Check 99: Void K Tahap 3 — infill urban fabric Cakung–Penggilingan–Pulo Gebang
const voidKInfillMethod = sliceCityBuilder('  buildVoidKInfill() {');
const voidKInfillCallIndex = citySceneContent.indexOf('this.buildVoidKInfill();');
assert.ok(voidKInfillCallIndex > 0, 'CityScene.js does not call buildVoidKInfill');
assert.ok(
  voidKInfillCallIndex > voidKCallIndex,
  'buildVoidKInfill must run after buildVoidK so the OSM masks exist'
);
assert.ok(
  voidKInfillCallIndex < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidKInfill must run before the legacy Jakarta infill'
);

[
  'voidk-infill-houses',
  'voidk-infill-shophouses',
  'voidk-infill-house-roofs',
  'voidk-infill-warehouses',
  'voidk-infill-warehouse-roofs',
  'voidk-night-windows'
].forEach((name) => {
  assert.ok(voidKInfillMethod.includes(name), `Void K infill builder missing the ${name} mesh`);
});

assert.ok(voidKInfillMethod.includes('VOID_K_OSM'), 'Void K infill must consume the OSM road graph');
assert.ok(voidKInfillMethod.includes('getVoidKRoadSegments'), 'Void K infill must mask ruko against their own corridors');
assert.ok(voidKInfillMethod.includes('isNearVoidKRoad'), 'Void K infill must clear all OSM roads');
assert.ok(voidKInfillMethod.includes('VOID_K_OSM.waterways'), 'Void K infill must clear the OSM waterways');
assert.ok(voidKInfillMethod.includes('isInsideVoidKWaterBody'), 'Void K infill must clear the OSM water bodies');
assert.ok(voidKInfillMethod.includes('isInsideVoidKAnchorSite'), 'Void K infill must clear the three K anchor sites');
assert.ok(voidKInfillMethod.includes('VOID_K_LEGACY_INFILL_RECTS'), 'Void K infill must clear the Void F seam strip');
assert.ok(voidKInfillMethod.includes('VOID_K_PR_PLOT'), 'Void K infill must reserve the future Park-and-Ride plot');
assert.ok(voidKInfillMethod.includes('VOID_K_PR_DRIVEWAY'), 'Void K infill must reserve the future Park-and-Ride driveway');
assert.ok(voidKInfillMethod.includes('addInfillNightWindows'), 'Void K infill must add night windows');
assert.ok(voidKInfillMethod.includes('roofRectsOverlap'), 'Void K infill must reject overlapping roofs');
assert.ok(voidKInfillMethod.includes('INFILL_ROOF_EAVE'), 'Void K infill must use the shared roof eave');
assert.ok(voidKInfillMethod.includes('INFILL_ROOF_TOLERANCE'), 'Void K infill must use the shared roof tolerance');
assert.ok(voidKInfillMethod.includes('voidKInfillStats'), 'Void K infill must expose runtime stats');
assert.ok(voidKInfillMethod.includes('drawCalls: 6'), 'Void K infill should add six draw calls');
assert.ok(!voidKInfillMethod.includes('new THREE.PointLight'), 'Void K infill must not add PointLights');

const voidKResidentialZones = voidKInfillMethod.match(/const residentialZones = \[([\s\S]*?)\n    \];/);
assert.ok(voidKResidentialZones, 'Void K infill missing the residential zone list');
assert.strictEqual(
  (voidKResidentialZones[1].match(/minX:/g) || []).length,
  10,
  'Void K infill must keep ten residential zones'
);
const voidKWarehouseZones = voidKInfillMethod.match(/const warehouseZones = \[([\s\S]*?)\n    \];/);
assert.ok(voidKWarehouseZones, 'Void K infill missing the warehouse zone list');
assert.strictEqual(
  (voidKWarehouseZones[1].match(/minX:/g) || []).length,
  2,
  'Void K infill must keep two warehouse zones'
);
[
  'Jalan Bekasi Raya',
  'Jalan Sultan Agung',
  'Jalan I Gusti Ngurah Rai',
  'Jalan Tipar Cakung',
  'Jalan Jakarta Garden City Boulevard',
  'Jalan Harapan Indah Bulevar',
  'Jalan Valeria Boulevard',
  'Jalan Bintara Raya',
  'Jalan Rawa Bebek',
  'Jalan Syech Nawawi Al Bantani',
  'Jalan Menteng Niaga',
  'Jalan Balai Rakyat',
  'Jalan Metland Ujung Menteng'
].forEach((name) => {
  assert.ok(voidKInfillMethod.includes(name), `Void K shophouse corridor list missing ${name}`);
});

const voidKLegacyRectsMatch = citySceneContent.match(/const VOID_K_LEGACY_INFILL_RECTS = \[([\s\S]*?)\n\];/);
assert.ok(voidKLegacyRectsMatch, 'CityScene.js missing the Void K legacy infill rects');
assert.strictEqual(
  (voidKLegacyRectsMatch[1].match(/\[/g) || []).length,
  1,
  'Void K must clear the single Void F seam strip'
);
assert.ok(
  citySceneContent.includes('const VOID_K_PR_PLOT = { x: 2050, z: -160, w: 30, d: 18 };'),
  'CityScene.js missing the Void K P&R plot reservation'
);
assert.ok(
  citySceneContent.includes('const VOID_K_PR_DRIVEWAY = { x: 2050, z: -148, w: 6, d: 6 };'),
  'CityScene.js missing the Void K P&R driveway reservation'
);

// Check 100: Void K Tahap 4 — Park-and-Ride Ujung Menteng + feeder halte Cakung
const voidKTransitMethod = sliceCityBuilder('  buildVoidKTransit() {');
const voidKTransitCallIndex = citySceneContent.indexOf('this.buildVoidKTransit();');
assert.ok(voidKTransitCallIndex > 0, 'CityScene.js does not call buildVoidKTransit');
assert.ok(
  voidKTransitCallIndex > citySceneContent.indexOf('this.buildVoidKInfill();'),
  'buildVoidKTransit must run after buildVoidKInfill'
);
assert.ok(
  voidKTransitCallIndex < citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();'),
  'buildVoidKTransit must run before the legacy Jakarta infill'
);
assert.ok(
  citySceneContent.includes('this.voidKTransitLabels = [];'),
  'CityScene constructor must initialise the Void K transit label list'
);

assert.ok(!voidKTransitMethod.includes('new THREE.PointLight'), 'Void K transit must not add PointLights');
assert.ok(voidKTransitMethod.includes('VOID_K_OSM'), 'Void K transit must anchor halte to the K road network');
assert.ok(voidKTransitMethod.includes('VOID_F_OSM'), 'Void K transit must include the Void F road that serves Rusun Pinus Elok');
assert.ok(voidKTransitMethod.includes('findRoadPoint'), 'Void K transit missing the road anchor helper');
assert.ok(voidKTransitMethod.includes('const halteLabels = [];'), 'Void K transit must collect halte labels');
assert.ok(voidKTransitMethod.includes('halteLabels.push({'), 'Void K transit must emit one label per halte');
assert.ok(
  voidKTransitMethod.includes('position: [hx, 6.4, hz]'),
  'Void K halte labels must float above the canopy'
);
assert.ok(
  voidKTransitMethod.includes('shortName: spec.shortName,'),
  'Void K halte labels must forward the short name'
);
assert.ok(voidKTransitMethod.includes("kind: 'halte'"), 'Void K halte labels must carry the halte kind');
assert.ok(
  voidKTransitMethod.includes('this.voidKTransitLabels = ['),
  'Void K transit must publish its label anchors'
);

assert.ok(voidKTransitMethod.includes('VOID_K_PR_PLOT'), 'Void K transit must read the shared P&R plot');
assert.ok(
  voidKTransitMethod.includes('const prCenterX = VOID_K_PR_PLOT.x;'),
  'Void K P&R centre must come from the shared plot'
);
assert.ok(
  voidKTransitMethod.includes('VOID_K_PR_DRIVEWAY.w') && voidKTransitMethod.includes('VOID_K_PR_DRIVEWAY.d'),
  'Void K P&R driveway must use the shared access strip so infill and transit stay aligned'
);
assert.ok(
  voidKTransitMethod.includes("name: 'Park and Ride Ujung Menteng'"),
  'Void K P&R label missing the full name'
);
assert.ok(
  voidKTransitMethod.includes("shortName: 'P&R Ujung Menteng'"),
  'Void K P&R label missing the short name'
);
assert.ok(voidKTransitMethod.includes("kind: 'park'"), 'Void K P&R label must use the P badge');
assert.ok(
  voidKTransitMethod.includes('position: [prCenterX, 7.6, prCenterZ]'),
  'Void K P&R label must clear the shelter roof'
);
assert.ok(voidKTransitMethod.includes('const bayCount = 8;'), 'Void K P&R must keep eight parking bays');
assert.ok(voidKTransitMethod.includes('parkingBays: bayCount'), 'Void K transit stats missing the bay count');
assert.ok(voidKTransitMethod.includes('trees: treePositions.length'), 'Void K transit stats missing the tree count');
assert.ok(
  voidKTransitMethod.includes('gardenLights: bollardCount'),
  'Void K transit stats missing the garden light count'
);

const voidKTransitHalteSpecs = [
  ['Halte Pasar Cakung', 'Pasar Cakung', 'Jalan Tipar Cakung', [1580.924, -206.31], 1, [1575.633, -206.007], [1571.2, -168.0]],
  ['Halte Rusun Pinus Elok', 'Rusun Pinus Elok', 'Jalan Komarudin Lama', [1693.004, 52.013], 1, [1698.268, 51.403], [1639.4, 54.0]],
  ['Halte Pasar Ujung Menteng', 'Pasar Ujung Menteng', 'Jalan Satria', [2042.781, -107.414], 1, [2038.128, -108.593], [2028.2, -68.7]],
  ['Halte Penggilingan', 'Penggilingan', 'Jalan Jakarta Garden City', [1851.488, -248.956], 1, [1847.133, -251.978], [1850, -250]],
  ['Halte Cakung Tengah', 'Cakung Tengah', 'Jalan Kayu Tinggi', [1780.46, -288.382], 1, [1785.413, -286.495], [1750, -300]],
  ['Halte Pulo Gebang', 'Pulo Gebang', 'Jalan Menteng Kencana', [2044.718, -266.467], -1, [2040.324, -264.535], [2050, -300]]
];

voidKTransitHalteSpecs.forEach(([name, shortName, road, near, side]) => {
  assert.ok(voidKTransitMethod.includes(`name: '${name}'`), `Void K transit missing ${name}`);
  assert.ok(
    voidKTransitMethod.includes(`shortName: '${shortName}'`),
    `Void K halte label missing the ${shortName} short name`
  );
  assert.ok(voidKTransitMethod.includes(`road: '${road}'`), `Void K halte missing the ${road} anchor`);
  assert.ok(
    voidKTransitMethod.includes(`near: [${near[0]}, ${near[1]}], side: ${side}`),
    `Void K halte ${shortName} drifted from its audited shoulder point`
  );
});

[
  'voidk-transit-concrete',
  'voidk-transit-steel',
  'voidk-transit-sign',
  'voidk-transit-tree-trunks',
  'voidk-transit-tree-foliage'
].forEach((name) => {
  assert.ok(voidKTransitMethod.includes(name), `Void K transit missing the ${name} mesh`);
});

assert.ok(voidKTransitMethod.includes('registerNightMaterial'), 'Void K transit sign must register for night');
assert.ok(voidKTransitMethod.includes('emissive: 0xfff4d6'), 'Void K transit sign night emissive drifted');
assert.ok(voidKTransitMethod.includes('nightIntensity: 0.55'), 'Void K transit sign night intensity drifted');
assert.ok(voidKTransitMethod.includes('voidKTransitStats'), 'Void K transit must expose runtime stats');
assert.ok(voidKTransitMethod.includes('drawCalls: 5'), 'Void K transit should add five draw calls');
assert.ok(
  mainJsContent.includes('...this.city.voidKTransitLabels'),
  'main.js must forward the Void K transit labels to UIManager'
);

const voidKTransitFindRoadPoint = (roadName, near) => {
  let best = null;
  [...VOID_K_OSM.roads, ...VOID_F_OSM.roads].forEach((road) => {
    if (road.name !== roadName) return;
    for (let i = 0; i < road.points.length - 1; i++) {
      const a = road.points[i];
      const b = road.points[i + 1];
      const dx = b[0] - a[0];
      const dz = b[1] - a[1];
      const len2 = dx * dx + dz * dz;
      let t = len2 ? ((near[0] - a[0]) * dx + (near[1] - a[1]) * dz) / len2 : 0;
      t = Math.max(0, Math.min(1, t));
      const x = a[0] + dx * t;
      const z = a[1] + dz * t;
      const d = Math.hypot(near[0] - x, near[1] - z);
      if (!best || d < best.d) best = { x, z, d, angle: Math.atan2(dx, dz), width: road.width };
    }
  });
  return best;
};

const voidKWaterEdge = (x, z) => {
  let best = Infinity;
  VOID_K_OSM.waterways.forEach((waterway) => {
    for (let i = 0; i < waterway.points.length - 1; i++) {
      best = Math.min(
        best,
        distanceToSegment([x, z], waterway.points[i], waterway.points[i + 1]) - waterway.width * 0.5
      );
    }
  });
  return best;
};
const voidKBodyAt = (x, z) =>
  VOID_K_OSM.waterBodies.some((body) => {
    const pts = body.points;
    let inside = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const xi = pts[i][0];
      const zi = pts[i][1];
      const xj = pts[j][0];
      const zj = pts[j][1];
      if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
    }
    return inside;
  });
const voidKRectClear = (rect, x, z) =>
  Math.hypot(Math.max(rect[0] - x, 0, x - rect[1]), Math.max(rect[2] - z, 0, z - rect[3]));
const voidKAnchorRects = [
  [1529, 1613, -197, -139],
  [1583, 1695, 13, 95],
  [1990, 2066, -95, -43]
];
const voidKRoadEdge = (x, z) => {
  let best = Infinity;
  [...VOID_K_OSM.roads, ...VOID_F_OSM.roads].forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      best = Math.min(best, distanceToSegment([x, z], road.points[i], road.points[i + 1]) - road.width * 0.5);
    }
  });
  return best;
};

const voidKHalteCenters = voidKTransitHalteSpecs.map(([name, shortName, road, near, side, expected, anchor]) => {
  const snapped = voidKTransitFindRoadPoint(road, near);
  assert.ok(snapped, `Void K halte ${shortName} lost its ${road} anchor`);
  assert.ok(snapped.d <= 0.05, `Void K halte ${shortName} near point must sit on ${road}`);
  const nx = Math.cos(snapped.angle);
  const nz = -Math.sin(snapped.angle);
  const ux = Math.sin(snapped.angle);
  const uz = Math.cos(snapped.angle);
  const offset = snapped.width * 0.5 - 0.2;
  const hx = snapped.x + nx * offset * side;
  const hz = snapped.z + nz * offset * side;

  assert.ok(
    Math.abs(hx - expected[0]) <= 0.05 && Math.abs(hz - expected[1]) <= 0.05,
    `Void K halte ${shortName} drifted to ${hx.toFixed(3)}/${hz.toFixed(3)}`
  );

  let minSite = Infinity;
  let minWater = Infinity;
  [-6, 0, 6].forEach((lz) => {
    [-1.3, 0, 1.3].forEach((lx) => {
      const cx = hx + lx * nx + lz * ux;
      const cz = hz + lx * nz + lz * uz;
      voidKAnchorRects.forEach((rect) => {
        minSite = Math.min(minSite, voidKRectClear(rect, cx, cz));
      });
      minWater = Math.min(minWater, voidKWaterEdge(cx, cz));
      assert.ok(!voidKBodyAt(cx, cz), `Void K halte ${shortName} peron must stay out of water bodies`);
    });
  });

  assert.ok(minSite >= 1, `Void K halte ${shortName} peron must clear the anchor sites (min ${minSite.toFixed(2)})`);
  assert.ok(minWater >= 0, `Void K halte ${shortName} peron must stay off the waterways (min ${minWater.toFixed(2)})`);
  assert.ok(
    Math.hypot(hx - anchor[0], hz - anchor[1]) <= 80,
    `Void K halte ${shortName} drifted too far from its anchor`
  );
  return { name, hx, hz };
});

const voidKPrRect = [2035, 2065, -169, -151];
const voidKDriveRect = [2047, 2053, -151, -145];
assert.ok(
  voidKPrRect[0] < voidKDriveRect[1] &&
    voidKPrRect[1] > voidKDriveRect[0] &&
    voidKPrRect[2] < voidKDriveRect[3] &&
    voidKPrRect[3] >= voidKDriveRect[2],
  'Void K P&R driveway must meet the plaza edge'
);
[[voidKPrRect[0], voidKPrRect[2]], [voidKPrRect[1], voidKPrRect[2]], [voidKPrRect[0], voidKPrRect[3]], [voidKPrRect[1], voidKPrRect[3]]]
  .forEach(([cx, cz]) => {
    assert.ok(voidKRoadEdge(cx, cz) >= 0, `Void K P&R plot corner ${cx}/${cz} overlaps the roadway`);
    assert.ok(voidKWaterEdge(cx, cz) >= 0, `Void K P&R plot corner ${cx}/${cz} overlaps a waterway`);
    assert.ok(!voidKBodyAt(cx, cz), `Void K P&R plot corner ${cx}/${cz} sits in a water body`);
  });
let voidKDrivewayRoadEdge = Infinity;
[[voidKDriveRect[0], voidKDriveRect[2]], [voidKDriveRect[1], voidKDriveRect[2]], [voidKDriveRect[0], voidKDriveRect[3]], [voidKDriveRect[1], voidKDriveRect[3]]]
  .forEach(([cx, cz]) => {
    voidKDrivewayRoadEdge = Math.min(voidKDrivewayRoadEdge, voidKRoadEdge(cx, cz));
  });
assert.ok(
  voidKDrivewayRoadEdge <= 0.5 && voidKDrivewayRoadEdge >= -3,
  `Void K P&R driveway must end on a road edge (gap ${voidKDrivewayRoadEdge.toFixed(2)})`
);
assert.ok(voidKWaterEdge(2050, -148) >= 0, 'Void K P&R driveway must stay off the waterways');
assert.ok(!voidKBodyAt(2050, -148), 'Void K P&R driveway must not sit in a water body');

// Check 101: Jahitan antar-void S1–S3 — sambung jalan/air yang berhenti di garis seam
[
  "const SEAM_EJ = { axis: 'x', value: 1330, min: -1105, max: -615 };",
  "const SEAM_EK = { axis: 'z', value: -470, min: 1330, max: 2145 };",
  "const SEAM_KF_HORIZONTAL = { axis: 'z', value: -150, min: 1330, max: 1995 };",
  "const SEAM_KF_VERTICAL = { axis: 'x', value: 1995, min: -150, max: 560 };"
].forEach((definition) => {
  assert.ok(citySceneContent.includes(definition), `CityScene.js missing seam definition: ${definition}`);
});
assert.ok(
  citySceneContent.includes('const nearestPointOnFeatures = (features, x, z) =>'),
  'CityScene.js missing the seam nearest-point helper'
);
assert.ok(
  citySceneContent.includes('const collectSeamConnectors = (sideA, sideB, seam, maxGap, skipNames = []) =>'),
  'CityScene.js missing the seam connector helper'
);
assert.ok(
  citySceneContent.includes('SEAM_SELF_JOIN_EPS') &&
    citySceneContent.includes('nearestPointOnFeatures([other], endpoint[0], endpoint[1])'),
  'Seam stitching must skip endpoints that already join another way in the same dataset'
);
assert.ok(
  citySceneContent.includes('SEAM_ROAD_STITCH_MAX') && citySceneContent.includes('SEAM_WATER_STITCH_MAX'),
  'Seam stitching must keep separate road and waterway gap limits'
);

const seamJBuilder = sliceCityBuilder('  buildVoidJNorthJakarta() {');
assert.ok(
  seamJBuilder.includes(
    'collectSeamConnectors(VOID_E_OSM.roads, VOID_J_OSM.roads, SEAM_EJ, SEAM_ROAD_STITCH_MAX)'
  ),
  'Void J builder must stitch the S1 E–J seam'
);
assert.ok(seamJBuilder.includes('const seamRoadConnectors'), 'Void J builder must collect seam road connectors');
assert.ok(
  seamJBuilder.includes('seamRoads: seamRoadConnectors.length'),
  'Void J stats must record the seam road connector count'
);

const seamKBuilder = sliceCityBuilder('  buildVoidK() {');
[
  'collectSeamConnectors(VOID_E_OSM.roads, VOID_K_OSM.roads, SEAM_EK, SEAM_ROAD_STITCH_MAX)',
  'collectSeamConnectors(VOID_K_OSM.roads, VOID_F_OSM.roads, SEAM_KF_HORIZONTAL, SEAM_ROAD_STITCH_MAX)',
  'collectSeamConnectors(VOID_F_OSM.roads, VOID_K_OSM.roads, SEAM_KF_VERTICAL, SEAM_ROAD_STITCH_MAX)',
  'collectSeamConnectors(VOID_K_OSM.waterways, VOID_E_OSM.waterways, SEAM_EK, SEAM_WATER_STITCH_MAX)',
  'collectSeamConnectors(VOID_K_OSM.waterways, VOID_F_OSM.waterways, SEAM_KF_HORIZONTAL, SEAM_WATER_STITCH_MAX)',
  'collectSeamConnectors(VOID_F_OSM.waterways, VOID_K_OSM.waterways, SEAM_KF_VERTICAL, SEAM_WATER_STITCH_MAX)'
].forEach((call) => {
  assert.ok(seamKBuilder.includes(call), `Void K builder missing seam stitch: ${call}`);
});
assert.ok(
  seamKBuilder.includes('const seamRoadConnectors') && seamKBuilder.includes('const seamWaterConnectors'),
  'Void K builder must collect both road and waterway seam connectors'
);
assert.ok(
  seamKBuilder.includes('seamRoads: seamRoadConnectors.length') &&
    seamKBuilder.includes('seamWaterways: seamWaterConnectors.length'),
  'Void K stats must record both seam connector counts'
);
assert.ok(!seamKBuilder.includes('new THREE.PointLight'), 'Seam stitching must not add PointLights');

// Check 102: Void L Tahap 1 — enam anchor Cipinang Melayu–Pondok Kelapa
const voidLAnchors = [
  { id: 'universitas-borobudur', builder: 'createUniversitasBorobudur', position: [1052.7, 0, 694.9], marker: 'univ-borobudur-main' },
  { id: 'rs-harum-sisma-medika', builder: 'createRSHarumSismaMedika', position: [1220.4, 0, 754.1], marker: 'rs-harum-tower' },
  { id: 'puskesmas-duren-sawit', builder: 'createPuskesmasDurenSawit', position: [1241.5, 0, 668.2], marker: 'puskesmas-duren-sawit-main' },
  { id: 'pasar-tradisional-kodam', builder: 'createPasarTradisionalKodam', position: [1316.8, 0, 816.0], marker: 'pasar-kodam-hall' },
  { id: 'kantor-pondok-kelapa', builder: 'createKantorKelurahanPondokKelapa', position: [1576.3, 0, 633.3], marker: 'kantor-pondok-kelapa-main' },
  { id: 'nuansa-pondok-kelapa', builder: 'createNuansaPondokKelapa', position: [1662.5, 0, 608.7], marker: 'nuansa-pondok-kelapa-block' }
];

assert.deepStrictEqual(
  JAKARTA_LANDMARKS.slice(131, 137).map((l) => l.id),
  voidLAnchors.map((a) => a.id),
  'Void L anchors must follow Pasar Ujung Menteng as landmarks #132-#137'
);

voidLAnchors.forEach(({ id, builder, position, marker }, index) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Void L landmark ${id} not found in JAKARTA_LANDMARKS`);
  assert.deepStrictEqual(lm.position, position, `Void L landmark ${id} position changed without updating the layout`);
  assert.ok(lm.position[0] >= 960 && lm.position[0] <= 1800, `Landmark ${id} X position ${lm.position[0]} outside Void L range [960, 1800]`);
  assert.ok(lm.position[2] >= 560 && lm.position[2] <= 960, `Landmark ${id} Z position ${lm.position[2]} outside Void L range [560, 960]`);
  assert.ok(lm.facts && lm.facts.length >= 3, `Landmark ${id} must have at least 3 educational facts`);
  assert.ok(lm.labelHeight >= 30, `Landmark ${id} labelHeight ${lm.labelHeight} is too low for a Void L anchor`);
  assert.ok(lm.cameraPosition[1] > 30, `Landmark ${id} camera must be elevated above street level`);
  assert.ok(lm.cameraTarget[1] < lm.cameraPosition[1], `Landmark ${id} camera must look downward at the anchor`);

  const projected = projectGpsToScene(lm.coordinates.lat, lm.coordinates.lng);
  assert.ok(
    Math.abs(projected[0] - lm.position[0]) <= 12 && Math.abs(projected[1] - lm.position[2]) <= 12,
    `Landmark ${id} coordinates must project within 12 units of its scene position`
  );

  assert.ok(
    citySceneContent.includes(`"${id}": () => LandmarkModels.${builder}()`),
    `CityScene must dispatch ${id} to ${builder}`
  );
  assert.ok(landmarkModelsContent.includes(`static ${builder}()`), `LandmarkModels missing ${builder}`);

  const factoryStart = landmarkModelsContent.indexOf(`static ${builder}()`);
  const factoryEnd = landmarkModelsContent.indexOf('static create', factoryStart + 10);
  const factory = landmarkModelsContent.slice(factoryStart, factoryEnd === -1 ? undefined : factoryEnd);
  assert.ok(factory.includes(`'${marker}'`), `${builder} must expose the ${marker} mesh for clicking and labels`);
  assert.ok(factory.includes('BufferGeometryUtils.mergeGeometries'), `${builder} must merge detail geometry`);
  assert.ok(factory.includes('LandmarkModels.tagNightWindow('), `${builder} must tag a glass material for night windows`);
  assert.ok(!factory.includes('new THREE.PointLight'), `${builder} must not add PointLights`);

  assert.ok(indexHtmlContent.includes(`data-tour-id="${id}"`), `index.html missing Void L tour button for "${id}"`);
  const labelIndex = 132 + index;
  assert.ok(
    new RegExp(`data-tour-id="${id}"[\\s\\S]{0,400}?>${labelIndex}</span>`).test(indexHtmlContent),
    `Tour button for "${id}" must carry index ${labelIndex}`
  );
});

voidLAnchors.forEach(({ id }) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  JAKARTA_LANDMARKS.forEach((other) => {
    if (other.id === id) return;
    const distance = Math.hypot(lm.position[0] - other.position[0], lm.position[2] - other.position[2]);
    assert.ok(distance >= 70, `Anchor ${id} is only ${distance.toFixed(1)} units from ${other.id}`);
  });
});

assert.ok(
  citySceneContent.includes('const VOID_L_CLIP_BOX = { minX: 960, maxX: 1800, minZ: 560, maxZ: 960 };'),
  'CityScene.js missing the Void L clip box for the OSM stage'
);
assert.ok(
  citySceneContent.includes('const VOID_L_ANCHOR_SITES = ['),
  'CityScene must protect the six Void L anchor sites'
);
const voidLSitesMatch = citySceneContent.match(/const VOID_L_ANCHOR_SITES = \[([\s\S]*?)\n\];/);
assert.ok(voidLSitesMatch, 'CityScene.js missing the Void L anchor site rectangles');
assert.strictEqual(
  (voidLSitesMatch[1].match(/\[/g) || []).length,
  6,
  'Void L must protect exactly six anchor sites'
);
assert.ok(
  citySceneContent.includes('isInsideVoidLAnchorSite('),
  'CityScene must expose isInsideVoidLAnchorSite for Void L infill'
);

// Check 103: Void L Tahap 2 — jaringan jalan, air, dan seam F–L Cipinang Melayu–Pondok Kelapa
const voidLDatasetFile = new URL('./src/data/void_l_osm.js', import.meta.url);
assert.ok(fs.existsSync(voidLDatasetFile), 'Void L OSM dataset src/data/void_l_osm.js is missing');
const { VOID_L_OSM } = await import('./src/data/void_l_osm.js');

assert.ok(VOID_L_OSM.meta.source.includes('OpenStreetMap'), 'Void L dataset missing OSM attribution');
assert.ok(VOID_L_OSM.meta.license.includes('ODbL'), 'Void L dataset missing ODbL license');
assert.strictEqual(VOID_L_OSM.meta.retrieved, '2026-11-02', 'Void L dataset retrieval date changed');
assert.ok(VOID_L_OSM.meta.api.includes('overpass'), 'Void L dataset must record the Overpass endpoint');
assert.strictEqual(VOID_L_OSM.meta.projection, 'projectGpsToScene', 'Void L dataset must use the unscaled GPS projection');
assert.deepStrictEqual(
  VOID_L_OSM.meta.projectionConstants,
  { originLng: 106.823048, originLat: -6.194957, scaleX: 14100, scaleZ: 14180 },
  'Void L dataset projection constants drifted'
);
assert.deepStrictEqual(
  VOID_L_OSM.meta.bbox,
  { south: -6.2627, west: 106.8911, north: -6.2345, east: 106.9507 },
  'Void L dataset bbox must cover x 960-1800 / z 560-960'
);
assert.deepStrictEqual(
  VOID_L_OSM.meta.clipBox,
  { minX: 960, maxX: 1800, minZ: 560, maxZ: 960 },
  'Void L dataset clip box must match VOID_L_CLIP_BOX'
);
assert.strictEqual(VOID_L_OSM.meta.simplification, 2, 'Void L dataset must simplify geometry to 2 units');
assert.strictEqual(VOID_L_OSM.meta.roadCount, VOID_L_OSM.roads.length, 'Void L meta roadCount mismatch');
assert.strictEqual(VOID_L_OSM.meta.waterwayCount, VOID_L_OSM.waterways.length, 'Void L meta waterwayCount mismatch');
assert.strictEqual(VOID_L_OSM.meta.waterBodyCount, VOID_L_OSM.waterBodies.length, 'Void L meta waterBodyCount mismatch');
assert.ok(VOID_L_OSM.roads.length >= 250, `Void L dataset must carry at least 250 curated roads, got ${VOID_L_OSM.roads.length}`);
assert.ok(
  new Set(VOID_L_OSM.roads.map((road) => road.name)).size >= 60,
  'Void L dataset must cover at least 60 named corridors'
);
assert.ok(VOID_L_OSM.waterways.length >= 20, `Void L dataset must carry at least 20 waterways, got ${VOID_L_OSM.waterways.length}`);
assert.ok(VOID_L_OSM.waterBodies.length >= 5, `Void L dataset must carry at least 5 water bodies, got ${VOID_L_OSM.waterBodies.length}`);

const voidLRoadTypes = new Set(['primary', 'secondary', 'tertiary', 'residential', 'unclassified']);
const voidLClip = VOID_L_OSM.meta.clipBox;
let voidLRoadPoints = 0;
VOID_L_OSM.roads.forEach((road, index) => {
  assert.ok(road.name, `Void L road #${index} must be named`);
  assert.ok(voidLRoadTypes.has(road.type), `Void L road ${road.name} has unexpected type ${road.type}`);
  assert.ok(road.width >= 9 && road.width <= 18, `Void L road ${road.name} width ${road.width} outside 9-18`);
  assert.ok(road.points.length >= 2, `Void L road ${road.name} needs at least two points`);
  road.points.forEach(([x, z]) => {
    assert.ok(
      x >= voidLClip.minX - 0.2 && x <= voidLClip.maxX + 0.2 && z >= voidLClip.minZ - 0.2 && z <= voidLClip.maxZ + 0.2,
      `Void L road ${road.name} point ${x}/${z} escapes the clip box`
    );
  });
  voidLRoadPoints += road.points.length;
});
assert.ok(voidLRoadPoints >= 600, `Void L road network only has ${voidLRoadPoints} points`);

VOID_L_OSM.waterways.forEach((waterway, index) => {
  assert.ok(waterway.points.length >= 2, `Void L waterway #${index} needs at least two points`);
  assert.ok(waterway.width >= 5 && waterway.width <= 24, `Void L waterway #${index} width ${waterway.width} outside 5-24`);
  waterway.points.forEach(([x, z]) => {
    assert.ok(
      x >= voidLClip.minX - 0.2 && x <= voidLClip.maxX + 0.2 && z >= voidLClip.minZ - 0.2 && z <= voidLClip.maxZ + 0.2,
      `Void L waterway point ${x}/${z} escapes the clip box`
    );
  });
});
VOID_L_OSM.waterBodies.forEach((body, index) => {
  assert.ok(body.points.length >= 4, `Void L water body #${index} needs a closed ring`);
  const first = body.points[0];
  const last = body.points[body.points.length - 1];
  assert.ok(
    Math.abs(first[0] - last[0]) <= 0.2 && Math.abs(first[1] - last[1]) <= 0.2,
    `Void L water body #${index} ring is not closed`
  );
});

const voidLDistanceToRoad = (x, z) => {
  let best = Infinity;
  VOID_L_OSM.roads.forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      const [ax, az] = road.points[i];
      const [bx, bz] = road.points[i + 1];
      const dx = bx - ax;
      const dz = bz - az;
      const len2 = dx * dx + dz * dz;
      let t = len2 ? ((x - ax) * dx + (z - az) * dz) / len2 : 0;
      t = Math.max(0, Math.min(1, t));
      best = Math.min(best, Math.hypot(x - (ax + dx * t), z - (az + dz * t)));
    }
  });
  return best;
};
voidLAnchors.forEach(({ id, position }) => {
  const distance = voidLDistanceToRoad(position[0], position[2]);
  assert.ok(distance <= 80, `Void L anchor ${id} sits ${distance.toFixed(1)} units from the nearest OSM road`);
});

const voidLSeamEndpoints = VOID_L_OSM.roads.reduce((count, road) => {
  return count + [road.points[0], road.points[road.points.length - 1]]
    .filter(([, z]) => Math.abs(z - 560) <= 0.2).length;
}, 0);
assert.ok(voidLSeamEndpoints >= 3, 'Void L must expose at least three road endpoints on the F-L seam at z=560');

assert.ok(
  citySceneContent.includes("import { VOID_L_OSM } from '../data/void_l_osm.js';"),
  'CityScene.js must import the Void L OSM dataset'
);
assert.ok(
  citySceneContent.includes("const SEAM_FL = { axis: 'z', value: 560, min: 960, max: 1800 };"),
  'CityScene.js missing the F-L seam definition'
);
const voidLKTransitCall = citySceneContent.indexOf('this.buildVoidKTransit();');
const voidLCall = citySceneContent.indexOf('this.buildVoidL();');
const voidLBInfillCall = citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();');
assert.ok(voidLKTransitCall > 0 && voidLCall > voidLKTransitCall, 'buildVoidL() must run after buildVoidKTransit()');
assert.ok(voidLBInfillCall > voidLCall, 'buildVoidL() must run before the legacy Void B infill pass');

const voidLBuilder = sliceCityBuilder('buildVoidL() {');
[
  'voidl-roads',
  'voidl-sidewalks',
  'voidl-waterways',
  'voidl-water-bodies',
  'voidl-bridges',
  'voidl-pju-poles',
  'voidl-pju-bulbs',
  'voidl-tree-trunks',
  'voidl-tree-foliage'
].forEach((meshName) => {
  assert.ok(voidLBuilder.includes(`'${meshName}'`), `buildVoidL must create the ${meshName} mesh`);
});
assert.ok(
  voidLBuilder.includes('collectSeamConnectors(VOID_F_OSM.roads, VOID_L_OSM.roads, SEAM_FL, SEAM_ROAD_STITCH_MAX)'),
  'buildVoidL must stitch F-L road endpoints'
);
assert.ok(
  voidLBuilder.includes('collectSeamConnectors(VOID_F_OSM.waterways, VOID_L_OSM.waterways, SEAM_FL, SEAM_WATER_STITCH_MAX)'),
  'buildVoidL must stitch F-L waterway endpoints'
);
assert.ok(voidLBuilder.includes('this.isInsideVoidLAnchorSite('), 'buildVoidL must mask PJU, trees, and bridges against anchor sites');
assert.ok(voidLBuilder.includes('voidLOsmStats'), 'buildVoidL must expose voidLOsmStats');
assert.ok(voidLBuilder.includes('seamRoads: seamRoadConnectors.length'), 'Void L stats must record seam road connectors');
assert.ok(voidLBuilder.includes('seamWaterways: seamWaterConnectors.length'), 'Void L stats must record seam waterway connectors');
assert.ok(voidLBuilder.includes('registerNightMaterial'), 'Void L water material must register for the night preset');
assert.ok(!voidLBuilder.includes('new THREE.PointLight'), 'buildVoidL must not add PointLights');

// Check 104: Void L Tahap 3 — infill urban fabric Cipinang Melayu–Pondok Kelapa
assert.ok(
  citySceneContent.includes('const VOID_L_PR_PLOT = { x: 1660, z: 700, w: 30, d: 18 };'),
  'CityScene.js missing the Void L Park-and-Ride plot'
);
assert.ok(
  citySceneContent.includes('const VOID_L_PR_DRIVEWAY = { x: 1677, z: 700, w: 6, d: 6 };'),
  'CityScene.js missing the Void L Park-and-Ride driveway'
);

const voidLInfillCall = citySceneContent.indexOf('this.buildVoidLInfill();');
assert.ok(voidLInfillCall > voidLCall, 'buildVoidLInfill() must run after buildVoidL()');
assert.ok(voidLBInfillCall > voidLInfillCall, 'buildVoidLInfill() must run before the legacy Void B infill pass');

const voidLInfillBuilder = sliceCityBuilder('buildVoidLInfill() {');
[
  'voidl-infill-houses',
  'voidl-infill-shophouses',
  'voidl-infill-house-roofs',
  'voidl-infill-warehouses',
  'voidl-infill-warehouse-roofs',
  'voidl-night-windows'
].forEach((meshName) => {
  assert.ok(voidLInfillBuilder.includes(`'${meshName}'`), `buildVoidLInfill must create the ${meshName} mesh`);
});

[
  'Jalan Laksamana Malahayati',
  'Jalan Raya Kalimalang',
  'Jalan Jati Waringin',
  'Jalan Radin Inten II',
  'Jalan Jati Utama Raya',
  'Jalan Swadaya Raya',
  'Jalan Pondok Kelapa Timur',
  'Jalan Bintara Jaya',
  'Jalan Taman Duren Sawit'
].forEach((name) => {
  assert.ok(voidLInfillBuilder.includes(`'${name}'`), `Void L infill missing shophouse corridor ${name}`);
});

const voidLZoneMatch = voidLInfillBuilder.match(/const residentialZones = \[([\s\S]*?)\n    \];/);
assert.ok(voidLZoneMatch, 'buildVoidLInfill must declare residentialZones');
assert.strictEqual(
  (voidLZoneMatch[1].match(/\{ minX:/g) || []).length,
  12,
  'Void L infill must define 12 residential zones'
);
assert.ok(
  voidLZoneMatch[1].includes('{ minX: 970, maxX: 1120, minZ: 820, maxZ: 955, step: 13 }'),
  'Void L infill zone R1 Cipinang Melayu selatan drifted'
);
assert.ok(
  voidLZoneMatch[1].includes('{ minX: 1180, maxX: 1360, minZ: 560, maxZ: 640, step: 13 }'),
  'Void L infill zone R10 Cipinang Melayu timur drifted'
);

const voidLWarehouseMatch = voidLInfillBuilder.match(/const warehouseZones = \[([\s\S]*?)\n    \];/);
assert.ok(voidLWarehouseMatch, 'buildVoidLInfill must declare warehouseZones');
assert.strictEqual(
  (voidLWarehouseMatch[1].match(/\{ minX:/g) || []).length,
  1,
  'Void L infill must define one warehouse cluster'
);
assert.ok(
  voidLWarehouseMatch[1].includes('{ minX: 970, maxX: 1060, minZ: 780, maxZ: 820, stepX: 28, stepZ: 26 }'),
  'Void L warehouse cluster W1 Cipinang Melayu barat drifted'
);

assert.ok(voidLInfillBuilder.includes('isNearVoidLWater('), 'Void L infill must mask waterways');
assert.ok(voidLInfillBuilder.includes('VOID_L_OSM.waterBodies'), 'Void L infill must mask water body polygons');
assert.ok(voidLInfillBuilder.includes('this.isInsideVoidLAnchorSite('), 'Void L infill must mask the six anchor sites');
assert.ok(
  voidLInfillBuilder.includes('VOID_L_PR_PLOT') && voidLInfillBuilder.includes('VOID_L_PR_DRIVEWAY'),
  'Void L infill must reserve the Park-and-Ride plot and driveway'
);
assert.ok(
  voidLInfillBuilder.includes('z - radius < SEAM_FL.value + 12'),
  'Void L infill must keep a 12-unit buffer from the F-L seam'
);
assert.ok(voidLInfillBuilder.includes('isRoofOccupied(') && voidLInfillBuilder.includes('putRoof('), 'Void L infill must share OBB roof occupancy');
assert.ok(voidLInfillBuilder.includes('INFILL_ROOF_EAVE'), 'Void L infill must use the shared roof eave');
assert.ok(voidLInfillBuilder.includes('addInfillNightWindows('), 'Void L infill must add night windows');
assert.ok(voidLInfillBuilder.includes('voidLInfillStats'), 'buildVoidLInfill must expose voidLInfillStats');
assert.ok(voidLInfillBuilder.includes('drawCalls: 6'), 'Void L infill stats must report six draw calls');
assert.ok(!voidLInfillBuilder.includes('new THREE.PointLight'), 'buildVoidLInfill must not add PointLights');

// Check 105: Void L Tahap 4 — Park-and-Ride Cipinang Melayu dan enam feeder halte
const voidLTransitCall = citySceneContent.indexOf('this.buildVoidLTransit();');
assert.ok(voidLTransitCall > voidLInfillCall, 'buildVoidLTransit() must run after buildVoidLInfill()');
assert.ok(voidLBInfillCall > voidLTransitCall, 'buildVoidLTransit() must run before the legacy Void B infill pass');
assert.ok(citySceneContent.includes('this.voidLTransitLabels = [];'), 'CityScene.js missing the Void L transit label registry');
assert.ok(mainJsContent.includes('...this.city.voidLTransitLabels'), 'main.js must pass Void L transit labels to UIManager');

const voidLTransitBuilder = sliceCityBuilder('buildVoidLTransit() {');
[
  'voidl-transit-concrete',
  'voidl-transit-steel',
  'voidl-transit-sign',
  'voidl-transit-tree-trunks',
  'voidl-transit-tree-foliage'
].forEach((meshName) => {
  assert.ok(voidLTransitBuilder.includes(`'${meshName}'`), `buildVoidLTransit must create the ${meshName} mesh`);
});

assert.ok(
  voidLTransitBuilder.includes('VOID_L_PR_PLOT') && voidLTransitBuilder.includes('VOID_L_PR_DRIVEWAY'),
  'buildVoidLTransit must build on the reserved Park-and-Ride plot and driveway'
);
assert.ok(voidLTransitBuilder.includes('const bayCount = 8;'), 'Void L Park-and-Ride must provide eight parking bays');
assert.ok(voidLTransitBuilder.includes('const bollardCount = 8;'), 'Void L Park-and-Ride must provide eight bollards');

[
  'Halte Universitas Borobudur',
  'Halte RS Harum Sisma Medika',
  'Halte Puskesmas Duren Sawit',
  'Halte Jati Waringin',
  'Halte Radin Inten II',
  'Halte Pondok Kelapa Timur'
].forEach((name) => {
  assert.ok(voidLTransitBuilder.includes(`'${name}'`), `Void L transit missing feeder ${name}`);
});

[
  'Jalan Inspeksi Tarum Barat',
  'Jalan Haji Dogol',
  'Jalan Jati Waringin',
  'Jalan Radin Inten II',
  'Jalan Pondok Kelapa Timur'
].forEach((name) => {
  assert.ok(voidLTransitBuilder.includes(`'${name}'`), `Void L transit missing corridor ${name}`);
});

[
  'near: [1110.6, 713.4], side: 1',
  'near: [1177.3, 737.1], side: 1',
  'near: [1228.3, 698.1], side: -1',
  'near: [1215.1, 819.7], side: -1',
  'near: [1387.8, 647.4], side: -1',
  'near: [1595.1, 680.2], side: -1'
].forEach((spec) => {
  assert.ok(voidLTransitBuilder.includes(spec), `Void L halte anchor drifted: ${spec}`);
});

assert.ok(
  voidLTransitBuilder.includes('emissive: 0xfff4d6') && voidLTransitBuilder.includes('nightIntensity: 0.55'),
  'Void L transit signage must register its night glow'
);
assert.ok(voidLTransitBuilder.includes("kind: 'park'"), 'Void L transit labels must mark the Park-and-Ride pin');
assert.ok(voidLTransitBuilder.includes('voidLTransitStats'), 'buildVoidLTransit must expose voidLTransitStats');
assert.ok(voidLTransitBuilder.includes('drawCalls: 5'), 'Void L transit stats must report five draw calls');
assert.ok(!voidLTransitBuilder.includes('new THREE.PointLight'), 'buildVoidLTransit must not add PointLights');

// Check 106: Void M Tahap 1 — enam anchor Jatiwaringin–Pondok Gede
const voidMAnchors = [
  { id: 'universitas-krisnadwipayana', builder: 'createUniversitasKrisnadwipayana', position: [1189.6, 0, 970.1], marker: 'unkris-main' },
  { id: 'terminal-pinang-ranti', builder: 'createTerminalPinangRanti', position: [885.9, 0, 1366.0], marker: 'terminal-pinang-ranti-hall' },
  { id: 'pasar-gardu', builder: 'createPasarGardu', position: [988.6, 0, 1347.4], marker: 'pasar-gardu-hall' },
  { id: 'kantor-kecamatan-pondokgede', builder: 'createKantorKecamatanPondokGede', position: [1274.3, 0, 1221.9], marker: 'kecamatan-pondokgede-main' },
  { id: 'puskesmas-jati-makmur', builder: 'createPuskesmasJatiMakmur', position: [1441.8, 0, 1138.2], marker: 'puskesmas-jati-makmur-main' },
  { id: 'kantor-kelurahan-jatimakmur', builder: 'createKantorKelurahanJatimakmur', position: [1521.7, 0, 1216.9], marker: 'kelurahan-jatimakmur-main' }
];

assert.deepStrictEqual(
  JAKARTA_LANDMARKS.slice(137).map((l) => l.id),
  voidMAnchors.map((a) => a.id),
  'Void M anchors must follow Nuansa Pondok Kelapa as landmarks #138-#143'
);

voidMAnchors.forEach(({ id, builder, position, marker }, index) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  assert.ok(lm, `Void M landmark ${id} not found in JAKARTA_LANDMARKS`);
  assert.deepStrictEqual(lm.position, position, `Void M landmark ${id} position changed without updating the layout`);
  if (id === 'terminal-pinang-ranti') {
    assert.ok(lm.position[0] < 960, 'Terminal Pinang Ranti must stay west of the Void M clip to clear the Halim runway');
  } else {
    assert.ok(lm.position[0] >= 960 && lm.position[0] <= 1800, `Landmark ${id} X position ${lm.position[0]} outside Void M range [960, 1800]`);
  }
  assert.ok(lm.position[2] >= 960 && lm.position[2] <= 1375, `Landmark ${id} Z position ${lm.position[2]} outside Void M range [960, 1375]`);
  assert.ok(lm.facts && lm.facts.length >= 3, `Landmark ${id} must have at least 3 educational facts`);
  assert.ok(lm.labelHeight >= 30, `Landmark ${id} labelHeight ${lm.labelHeight} is too low for a Void M anchor`);
  assert.ok(lm.cameraPosition[1] > 30, `Landmark ${id} camera must be elevated above street level`);
  assert.ok(lm.cameraTarget[1] < lm.cameraPosition[1], `Landmark ${id} camera must look downward at the anchor`);

  const projected = projectGpsToScene(lm.coordinates.lat, lm.coordinates.lng);
  assert.ok(
    Math.abs(projected[0] - lm.position[0]) <= 12 && Math.abs(projected[1] - lm.position[2]) <= 12,
    `Landmark ${id} coordinates must project within 12 units of its scene position`
  );

  assert.ok(
    citySceneContent.includes(`"${id}": () => LandmarkModels.${builder}()`),
    `CityScene must dispatch ${id} to ${builder}`
  );
  assert.ok(landmarkModelsContent.includes(`static ${builder}()`), `LandmarkModels missing ${builder}`);

  const factoryStart = landmarkModelsContent.indexOf(`static ${builder}()`);
  const factoryEnd = landmarkModelsContent.indexOf('static create', factoryStart + 10);
  const factory = landmarkModelsContent.slice(factoryStart, factoryEnd === -1 ? undefined : factoryEnd);
  assert.ok(factory.includes(`'${marker}'`), `${builder} must expose the ${marker} mesh for clicking and labels`);
  assert.ok(factory.includes('BufferGeometryUtils.mergeGeometries'), `${builder} must merge detail geometry`);
  assert.ok(factory.includes('LandmarkModels.tagNightWindow('), `${builder} must tag a glass material for night windows`);
  assert.ok(!factory.includes('new THREE.PointLight'), `${builder} must not add PointLights`);

  assert.ok(indexHtmlContent.includes(`data-tour-id="${id}"`), `index.html missing Void M tour button for "${id}"`);
  const labelIndex = 138 + index;
  assert.ok(
    new RegExp(`data-tour-id="${id}"[\\s\\S]{0,400}?>${labelIndex}</span>`).test(indexHtmlContent),
    `Tour button for "${id}" must carry index ${labelIndex}`
  );
});

voidMAnchors.forEach(({ id }) => {
  const lm = JAKARTA_LANDMARKS.find((l) => l.id === id);
  JAKARTA_LANDMARKS.forEach((other) => {
    if (other.id === id) return;
    const distance = Math.hypot(lm.position[0] - other.position[0], lm.position[2] - other.position[2]);
    assert.ok(distance >= 70, `Anchor ${id} is only ${distance.toFixed(1)} units from ${other.id}`);
  });
});

assert.ok(
  citySceneContent.includes('const VOID_M_CLIP_BOX = { minX: 960, maxX: 1800, minZ: 960, maxZ: 1375 };'),
  'CityScene.js missing the Void M clip box for the OSM stage'
);
assert.ok(
  citySceneContent.includes('const VOID_M_ANCHOR_SITES = ['),
  'CityScene must protect the six Void M anchor sites'
);
const voidMSitesMatch = citySceneContent.match(/const VOID_M_ANCHOR_SITES = \[([\s\S]*?)\n\];/);
assert.ok(voidMSitesMatch, 'CityScene.js missing the Void M anchor site rectangles');
assert.strictEqual(
  (voidMSitesMatch[1].match(/\[/g) || []).length,
  6,
  'Void M must protect exactly six anchor sites'
);
[
  '[1150, 1230, 936, 1004]',
  '[850, 920, 1332, 1374]',
  '[952, 1026, 1318, 1372]',
  '[1236, 1314, 1190, 1254]',
  '[1404, 1480, 1108, 1168]',
  '[1482, 1562, 1184, 1250]'
].forEach((rect) => {
  assert.ok(voidMSitesMatch[1].includes(rect), `Void M anchor site rect drifted: ${rect}`);
});
assert.ok(
  citySceneContent.includes('isInsideVoidMAnchorSite('),
  'CityScene must expose isInsideVoidMAnchorSite for Void M infill'
);

// Check 107: Void M Tahap 2 — jaringan OSM, seam L-M/M-G, konektor Terminal Pinang Ranti
const voidMDatasetFile = new URL('./src/data/void_m_osm.js', import.meta.url);
assert.ok(fs.existsSync(voidMDatasetFile), 'Void M OSM dataset src/data/void_m_osm.js is missing');
const { VOID_M_OSM } = await import('./src/data/void_m_osm.js');

assert.ok(VOID_M_OSM.meta.source.includes('OpenStreetMap'), 'Void M dataset missing OSM attribution');
assert.ok(VOID_M_OSM.meta.license.includes('ODbL'), 'Void M dataset missing ODbL license');
assert.strictEqual(VOID_M_OSM.meta.retrieved, '2026-11-03', 'Void M dataset retrieval date changed');
assert.ok(VOID_M_OSM.meta.api.includes('overpass'), 'Void M dataset must record the Overpass endpoint');
assert.strictEqual(VOID_M_OSM.meta.projection, 'projectGpsToScene', 'Void M dataset must use the unscaled GPS projection');
assert.deepStrictEqual(
  VOID_M_OSM.meta.projectionConstants,
  { originLng: 106.823048, originLat: -6.194957, scaleX: 14100, scaleZ: 14180 },
  'Void M dataset projection constants drifted'
);
assert.deepStrictEqual(
  VOID_M_OSM.meta.bbox,
  { south: -6.2919, west: 106.8911, north: -6.2627, east: 106.9507 },
  'Void M dataset bbox must cover x 960-1800 / z 960-1375'
);
assert.deepStrictEqual(
  VOID_M_OSM.meta.clipBox,
  { minX: 960, maxX: 1800, minZ: 960, maxZ: 1375 },
  'Void M dataset clip box must match VOID_M_CLIP_BOX'
);
assert.strictEqual(VOID_M_OSM.meta.simplification, 2, 'Void M dataset must simplify geometry to 2 units');
assert.strictEqual(VOID_M_OSM.meta.roadCount, VOID_M_OSM.roads.length, 'Void M meta roadCount mismatch');
assert.strictEqual(VOID_M_OSM.meta.waterwayCount, VOID_M_OSM.waterways.length, 'Void M meta waterwayCount mismatch');
assert.strictEqual(VOID_M_OSM.meta.waterBodyCount, VOID_M_OSM.waterBodies.length, 'Void M meta waterBodyCount mismatch');
assert.ok(VOID_M_OSM.roads.length >= 250, `Void M dataset must carry at least 250 curated roads, got ${VOID_M_OSM.roads.length}`);
assert.ok(
  new Set(VOID_M_OSM.roads.map((road) => road.name)).size >= 60,
  'Void M dataset must cover at least 60 named corridors'
);
assert.ok(VOID_M_OSM.waterways.length >= 15, `Void M dataset must carry at least 15 waterways, got ${VOID_M_OSM.waterways.length}`);
assert.ok(VOID_M_OSM.waterBodies.length >= 1, 'Void M dataset must keep at least one named water body');
assert.ok(VOID_M_OSM.meta.note.includes('Japek'), 'Void M note must document the excluded Japek toll');
assert.ok(VOID_M_OSM.meta.note.includes('Monumen'), 'Void M note must document the Halim-Monumen duplicate exclusion');

const voidMRoadTypes = new Set(['primary', 'secondary', 'tertiary', 'residential', 'unclassified']);
const voidMClip = VOID_M_OSM.meta.clipBox;
let voidMRoadPoints = 0;
VOID_M_OSM.roads.forEach((road, index) => {
  assert.ok(road.name, `Void M road #${index} must be named`);
  assert.ok(voidMRoadTypes.has(road.type), `Void M road ${road.name} has unexpected type ${road.type}`);
  assert.ok(road.width >= 9 && road.width <= 18, `Void M road ${road.name} width ${road.width} outside 9-18`);
  assert.ok(road.points.length >= 2, `Void M road ${road.name} needs at least two points`);
  road.points.forEach(([x, z]) => {
    assert.ok(
      x >= voidMClip.minX - 0.2 && x <= voidMClip.maxX + 0.2 && z >= voidMClip.minZ - 0.2 && z <= voidMClip.maxZ + 0.2,
      `Void M road ${road.name} point ${x}/${z} escapes the clip box`
    );
  });
  voidMRoadPoints += road.points.length;
});
assert.ok(voidMRoadPoints >= 600, `Void M road network only has ${voidMRoadPoints} points`);

VOID_M_OSM.waterways.forEach((waterway, index) => {
  assert.ok(waterway.points.length >= 2, `Void M waterway #${index} needs at least two points`);
  assert.ok(waterway.width >= 5 && waterway.width <= 24, `Void M waterway #${index} width ${waterway.width} outside 5-24`);
  waterway.points.forEach(([x, z]) => {
    assert.ok(
      x >= voidMClip.minX - 0.2 && x <= voidMClip.maxX + 0.2 && z >= voidMClip.minZ - 0.2 && z <= voidMClip.maxZ + 0.2,
      `Void M waterway point ${x}/${z} escapes the clip box`
    );
  });
});
VOID_M_OSM.waterBodies.forEach((body, index) => {
  assert.ok(body.points.length >= 4, `Void M water body #${index} needs a closed ring`);
  const first = body.points[0];
  const last = body.points[body.points.length - 1];
  assert.ok(
    Math.abs(first[0] - last[0]) <= 0.2 && Math.abs(first[1] - last[1]) <= 0.2,
    `Void M water body #${index} ring is not closed`
  );
});

const voidMDistanceToRoad = (x, z) => {
  let best = Infinity;
  VOID_M_OSM.roads.forEach((road) => {
    for (let i = 0; i < road.points.length - 1; i++) {
      const [ax, az] = road.points[i];
      const [bx, bz] = road.points[i + 1];
      const dx = bx - ax;
      const dz = bz - az;
      const len2 = dx * dx + dz * dz;
      let t = len2 ? ((x - ax) * dx + (z - az) * dz) / len2 : 0;
      t = Math.max(0, Math.min(1, t));
      best = Math.min(best, Math.hypot(x - (ax + dx * t), z - (az + dz * t)));
    }
  });
  return best;
};
voidMAnchors.filter((anchor) => anchor.id !== 'terminal-pinang-ranti').forEach(({ id, position }) => {
  const distance = voidMDistanceToRoad(position[0], position[2]);
  assert.ok(distance <= 60, `Void M anchor ${id} sits ${distance.toFixed(1)} units from the nearest OSM road`);
});

const voidMDiagonal = [[893, 993], [1182, 1324], [1150, 1375]];
const voidMDistanceToDiagonal = (x, z) => {
  let best = Infinity;
  for (let i = 0; i < voidMDiagonal.length - 1; i++) {
    const [ax, az] = voidMDiagonal[i];
    const [bx, bz] = voidMDiagonal[i + 1];
    const dx = bx - ax;
    const dz = bz - az;
    const len2 = dx * dx + dz * dz;
    let t = len2 ? ((x - ax) * dx + (z - az) * dz) / len2 : 0;
    t = Math.max(0, Math.min(1, t));
    best = Math.min(best, Math.hypot(x - (ax + dx * t), z - (az + dz * t)));
  }
  return best;
};
VOID_M_OSM.roads.forEach((road) => {
  let near = 0;
  let total = 0;
  for (let i = 0; i < road.points.length - 1; i++) {
    const [ax, az] = road.points[i];
    const [bx, bz] = road.points[i + 1];
    const length = Math.hypot(bx - ax, bz - az);
    total += length;
    if (voidMDistanceToDiagonal((ax + bx) * 0.5, (az + bz) * 0.5) < 12) near += length;
  }
  assert.ok(
    total === 0 || near / total < 0.6,
    `Void M road ${road.name} duplicates the procedural Halim-Monumen corridor`
  );
});

const voidMLSeamEndpoints = VOID_M_OSM.roads.reduce((count, road) => {
  return count + [road.points[0], road.points[road.points.length - 1]]
    .filter(([, z]) => Math.abs(z - 960) <= 0.2).length;
}, 0);
assert.ok(voidMLSeamEndpoints >= 3, 'Void M must expose at least three road endpoints on the L-M seam at z=960');
const voidMGSeamEndpoints = VOID_M_OSM.roads.reduce((count, road) => {
  return count + [road.points[0], road.points[road.points.length - 1]]
    .filter(([x, z]) => Math.abs(z - 1375) <= 0.2 && x >= 960 && x <= 1450).length;
}, 0);
assert.ok(voidMGSeamEndpoints >= 1, 'Void M must expose a road endpoint on the M-G seam at z=1375');

assert.ok(
  citySceneContent.includes("import { VOID_M_OSM } from '../data/void_m_osm.js';"),
  'CityScene.js must import the Void M OSM dataset'
);
assert.ok(
  citySceneContent.includes("const SEAM_LM = { axis: 'z', value: 960, min: 960, max: 1800 };"),
  'CityScene.js missing the L-M seam definition'
);
assert.ok(
  citySceneContent.includes("const SEAM_MG = { axis: 'z', value: 1375, min: 960, max: 1450 };"),
  'CityScene.js missing the M-G seam definition (Void G clip stops at x=1450)'
);
const voidMCall = citySceneContent.indexOf('this.buildVoidM();');
const voidLTransitCallIndex = citySceneContent.indexOf('this.buildVoidLTransit();');
const voidMLegacyCall = citySceneContent.indexOf('this.buildVoidBInfillAndIndustry();');
assert.ok(voidMCall > voidLTransitCallIndex, 'buildVoidM() must run after buildVoidLTransit()');
assert.ok(voidMLegacyCall > voidMCall, 'buildVoidM() must run before the legacy Void B infill pass');

const voidMBuilder = sliceCityBuilder('buildVoidM() {');
[
  'voidm-roads',
  'voidm-sidewalks',
  'voidm-waterways',
  'voidm-water-bodies',
  'voidm-bridges',
  'voidm-pju-poles',
  'voidm-pju-bulbs',
  'voidm-tree-trunks',
  'voidm-tree-foliage'
].forEach((meshName) => {
  assert.ok(voidMBuilder.includes(`'${meshName}'`), `buildVoidM must create the ${meshName} mesh`);
});
assert.ok(
  voidMBuilder.includes('collectSeamConnectors(VOID_L_OSM.roads, VOID_M_OSM.roads, SEAM_LM, SEAM_ROAD_STITCH_MAX)'),
  'buildVoidM must stitch L-M road endpoints'
);
assert.ok(
  voidMBuilder.includes('collectSeamConnectors(VOID_L_OSM.waterways, VOID_M_OSM.waterways, SEAM_LM, SEAM_WATER_STITCH_MAX)'),
  'buildVoidM must stitch L-M waterway endpoints'
);
assert.ok(
  voidMBuilder.includes('collectSeamConnectors(VOID_M_OSM.roads, VOID_G_OSM.roads, SEAM_MG, SEAM_ROAD_STITCH_MAX)'),
  'buildVoidM must stitch M-G road endpoints'
);
assert.ok(
  voidMBuilder.includes('collectSeamConnectors(VOID_M_OSM.waterways, VOID_G_OSM.waterways, SEAM_MG, SEAM_WATER_STITCH_MAX)'),
  'buildVoidM must stitch M-G waterway endpoints'
);
assert.ok(voidMBuilder.includes('VOID_M_TERMINAL_LINK'), 'buildVoidM must draw the Terminal Pinang Ranti access link');
assert.ok(voidMBuilder.includes('this.isInsideVoidMAnchorSite('), 'buildVoidM must mask PJU, trees, and bridges against anchor sites');
assert.ok(voidMBuilder.includes('recordMergedPjuLamp('), 'buildVoidM PJU must feed the shared PointLight pool');
assert.ok(voidMBuilder.includes('voidMOsmStats'), 'buildVoidM must expose voidMOsmStats');
assert.ok(voidMBuilder.includes('seamRoads: seamRoadConnectors.length'), 'Void M stats must record seam road connectors');
assert.ok(voidMBuilder.includes('seamWaterways: seamWaterConnectors.length'), 'Void M stats must record seam waterway connectors');
assert.ok(voidMBuilder.includes('terminalLinks: 1'), 'Void M stats must record the terminal access link');
assert.ok(voidMBuilder.includes('drawCalls: 9'), 'Void M stats must report nine draw calls');
assert.ok(voidMBuilder.includes('registerNightMaterial'), 'Void M water material must register for the night preset');
assert.ok(!voidMBuilder.includes('new THREE.PointLight'), 'buildVoidM must not add PointLights');

const voidMTerminalMatch = citySceneContent.match(/const VOID_M_TERMINAL_LINK = \[([\s\S]*?)\n\];/);
assert.ok(voidMTerminalMatch, 'CityScene.js missing the Void M Terminal Pinang Ranti access link constant');
const voidMTerminalLink = [...voidMTerminalMatch[1].matchAll(/\[(-?\d+(?:\.\d+)?), (-?\d+(?:\.\d+)?)\]/g)]
  .map((match) => [Number(match[1]), Number(match[2])]);
assert.ok(voidMTerminalLink.length >= 2, 'Void M terminal access link needs at least two points');
const voidMDistanceToTerminalLink = (x, z) => {
  let best = Infinity;
  for (let i = 0; i < voidMTerminalLink.length - 1; i++) {
    const [ax, az] = voidMTerminalLink[i];
    const [bx, bz] = voidMTerminalLink[i + 1];
    const dx = bx - ax;
    const dz = bz - az;
    const len2 = dx * dx + dz * dz;
    let t = len2 ? ((x - ax) * dx + (z - az) * dz) / len2 : 0;
    t = Math.max(0, Math.min(1, t));
    best = Math.min(best, Math.hypot(x - (ax + dx * t), z - (az + dz * t)));
  }
  return best;
};
assert.ok(
  voidMDistanceToTerminalLink(885.9, 1366.0) <= 60,
  'Terminal Pinang Ranti must sit within 60 units of its access link'
);
const voidMTerminalTouchesRoad = Math.min(
  voidMDistanceToRoad(voidMTerminalLink[0][0], voidMTerminalLink[0][1]),
  voidMDistanceToRoad(voidMTerminalLink[voidMTerminalLink.length - 1][0], voidMTerminalLink[voidMTerminalLink.length - 1][1])
);
assert.ok(voidMTerminalTouchesRoad <= 4, `Terminal access link must touch an OSM road, got ${voidMTerminalTouchesRoad.toFixed(1)}`);

console.log(`✅ All 143 landmarks, Quick Wins, Jakarta Timur, Void A, Tahap 1-4 Void B, Tahap 1-4 Void C, Void D Tahap 1-4, Void E Tahap 1-4, F4 Tahap 1-3, Material Malam Void C/D/E, Label Transit Void C/D, Atap Infill Void B/C/D/E, Peron KBN Cakung, Malam Mall Kelapa Gading, PJU Malam Distrik, Material Malam Badan Air, PJU Gabungan Void B/C/D/E, Void F Tahap 1, Void F Tahap 2, Void F Tahap 3, Void F Tahap 4, Viaduk LRT Cibubur, Void G Tahap 1, Void G Tahap 2, Void G Tahap 3, Void G Tahap 4, Visual P1, Visual P2, Retrofit Infill Jakarta Timur, Sambungan Air KBT-Void E, Kamera DPR/MPR, Void H Tahap 1, Void H Tahap 2, Void H Tahap 3, Void H Tahap 4, Void I Tahap 1, Void I Tahap 2, Void I Tahap 3, Void I Tahap 4, Void I Tahap 5, Void I Tahap 6, Void I Tahap 7, Void I Tahap 8, Void I Tahap 9, Void I Tahap 10, Void I Tahap 11, Void J Tahap 1, Void J Tahap 2, Void J Tahap 3, Void J Tahap 4, P2 Visual Void J, Void J Tahap 5, Void K Tahap 1, Void K Tahap 2, Void K Tahap 3, Void K Tahap 4, Jahitan S1-S3, Void L Tahap 1, Void L Tahap 2, Void L Tahap 3, Void L Tahap 4, Void M Tahap 1, Void M Tahap 2 COMPLETED SUCCESSFULLY! (${assertionCount} assertions)`);





