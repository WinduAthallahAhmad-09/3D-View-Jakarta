import assert from 'node:assert';
import fs from 'node:fs';
import { JAKARTA_LANDMARKS, projectGpsToScene } from './src/config/landmarks.js';
import { VOID_B_OSM } from './src/data/void_b_osm.js';
import { VOID_C_OSM } from './src/data/void_c_osm.js';
import { VOID_D_OSM } from './src/data/void_d_osm.js';
import { VOID_E_OSM } from './src/data/void_e_osm.js';

let assertionCount = 0;
['ok', 'equal', 'strictEqual', 'deepStrictEqual', 'notDeepStrictEqual', 'throws'].forEach((method) => {
  const original = assert[method];
  assert[method] = (...args) => {
    assertionCount++;
    return original.apply(assert, args);
  };
});

console.log('Running test_landmarks.js verification...');

// Check 1: Exactly 99 landmarks
assert.strictEqual(JAKARTA_LANDMARKS.length, 99, `Expected 99 landmarks, got ${JAKARTA_LANDMARKS.length}`);

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
assert.ok(citySceneContent.includes('new THREE.GridHelper(4400, 220'), 'Ground grid does not cover Void B');

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

const lampStart = citySceneContent.indexOf('createStreetLamp(x, z, facingEast) {');
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
  JAKARTA_LANDMARKS.slice(93).map((l) => l.id),
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

// Rusunawa Marunda di x 1985 menuntut pelat tanah dan grid yang lebih luas dari 3.000 unit.
assert.ok(citySceneContent.includes('new THREE.PlaneGeometry(4800, 4800)'), 'Ground plane must expand to 4800 units for Void E');
assert.ok(citySceneContent.includes('new THREE.GridHelper(4400, 220'), 'Ground grid must expand to 4400 units for Void E');
voidEAnchors.forEach(({ id, position }) => {
  assert.ok(Math.abs(position[0]) + 80 <= 2200, `Void E landmark ${id} sits outside the 4400-unit grid`);
  assert.ok(Math.abs(position[2]) + 80 <= 2200, `Void E landmark ${id} sits outside the 4400-unit grid`);
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
  14,
  'Expected 14 tagged window/glass materials across the Void C/D/E anchors and Mall Kelapa Gading'
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

console.log(`✅ All 99 landmarks, Quick Wins, Jakarta Timur, Void A, Tahap 1-4 Void B, Tahap 1-4 Void C, Void D Tahap 1-4, Void E Tahap 1-4, F4 Tahap 1-3, Material Malam Void C/D/E, Label Transit Void C/D, Atap Infill Void B/C/D/E, Peron KBN Cakung, Malam Mall Kelapa Gading, Visual P1 COMPLETED SUCCESSFULLY! (${assertionCount} assertions)`);





