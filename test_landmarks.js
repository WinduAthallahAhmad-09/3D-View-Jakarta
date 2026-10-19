import assert from 'node:assert';
import fs from 'node:fs';
import { JAKARTA_LANDMARKS } from './src/config/landmarks.js';

console.log('Running test_landmarks.js verification...');

// Check 1: Exactly 57 landmarks
assert.strictEqual(JAKARTA_LANDMARKS.length, 57, `Expected 57 landmarks, got ${JAKARTA_LANDMARKS.length}`);

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

// Check 4: Check that CityScene.js maps builders for all landmarks
const citySceneContent = fs.readFileSync('./src/world/CityScene.js', 'utf-8');
JAKARTA_LANDMARKS.forEach((lm) => {
  assert.ok(
    citySceneContent.includes(`"${lm.id}":`),
    `CityScene.js missing builder mapping for landmark "${lm.id}"`
  );
});

// Check 5: Check that index.html includes tour buttons for all anchors
const indexHtmlContent = fs.readFileSync('./index.html', 'utf-8');
[...southAnchors, ...jakpusEastAnchors, ...southTahap1Anchors, ...jakutTahap1Anchors].forEach((id) => {
  assert.ok(
    indexHtmlContent.includes(`data-tour-id="${id}"`),
    `index.html missing tour button for "${id}"`
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

console.log('✅ All 57 landmarks, Quick Wins & Tahap 1 + 2 + 3 Jakarta Utara verified successfully!');
