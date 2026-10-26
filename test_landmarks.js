import assert from 'node:assert';
import fs from 'node:fs';
import { JAKARTA_LANDMARKS, projectGpsToScene } from './src/config/landmarks.js';
import { VOID_B_OSM } from './src/data/void_b_osm.js';

let assertionCount = 0;
['ok', 'equal', 'strictEqual', 'deepStrictEqual', 'notDeepStrictEqual', 'throws'].forEach((method) => {
  const original = assert[method];
  assert[method] = (...args) => {
    assertionCount++;
    return original.apply(assert, args);
  };
});

console.log('Running test_landmarks.js verification...');

// Check 1: Exactly 81 landmarks
assert.strictEqual(JAKARTA_LANDMARKS.length, 81, `Expected 81 landmarks, got ${JAKARTA_LANDMARKS.length}`);

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
assert.ok(citySceneContent.includes('new THREE.GridHelper(3000, 150'), 'Ground grid does not cover Void B');

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

console.log(`✅ All 81 landmarks, Quick Wins, Jakarta Timur, Void A, Tahap 1-4 Void B COMPLETED SUCCESSFULLY! (${assertionCount} assertions)`);





