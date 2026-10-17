import assert from 'node:assert';
import fs from 'node:fs';
import { JAKARTA_LANDMARKS } from './src/config/landmarks.js';

console.log('Running test_landmarks.js verification...');

// Check 1: Exactly 45 landmarks
assert.strictEqual(JAKARTA_LANDMARKS.length, 45, `Expected 45 landmarks, got ${JAKARTA_LANDMARKS.length}`);

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

// Check 4: Check that CityScene.js maps builders for all 45 landmarks
const citySceneContent = fs.readFileSync('./src/world/CityScene.js', 'utf-8');
JAKARTA_LANDMARKS.forEach((lm) => {
  assert.ok(
    citySceneContent.includes(`"${lm.id}":`),
    `CityScene.js missing builder mapping for landmark "${lm.id}"`
  );
});

// Check 5: Check that index.html includes tour buttons for all anchors
const indexHtmlContent = fs.readFileSync('./index.html', 'utf-8');
[...southAnchors, ...jakpusEastAnchors].forEach((id) => {
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

console.log('✅ All 45 landmarks, Central Jakarta East builders, South Jakarta builders, MRT Ratangga, Koridor 13, Aerial View, and Selective Bloom Effect verified successfully!');
