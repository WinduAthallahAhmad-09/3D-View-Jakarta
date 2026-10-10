import * as THREE from 'three';

export class LightingManager {
  constructor(scene) {
    this.scene = scene;
    this.init();
  }

  init() {
    // 1. Ambient & Hemisphere Light
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    this.scene.add(this.ambientLight);

    this.hemiLight = new THREE.HemisphereLight(0xbae6fd, 0x1e293b, 0.5);
    this.hemiLight.position.set(0, 100, 0);
    this.scene.add(this.hemiLight);

    // 2. Main Directional Sun Light
    this.sunLight = new THREE.DirectionalLight(0xfffbeb, 1.6);
    this.sunLight.position.set(120, 180, 90);
    this.sunLight.castShadow = true;

    // High quality shadow configuration
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 1200;

    const d = 480;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0005;

    this.scene.add(this.sunLight);

    // 3. Atmospheric Fog (Tropical Jakarta Haze)
    this.scene.fog = new THREE.FogExp2(0x93c5fd, 0.00055);
  }

  /**
   * Smoothly apply time-of-day presets: 'day', 'golden', 'night'
   */
  setTimeOfDay(timePreset) {
    if (timePreset === 'day') {
      // Tropis Cerah
      this.sunLight.color.setHex(0xffffff);
      this.sunLight.intensity = 1.7;
      this.sunLight.position.set(220, 320, 150);

      this.ambientLight.color.setHex(0xffffff);
      this.ambientLight.intensity = 0.55;

      this.hemiLight.color.setHex(0xbae6fd);
      this.hemiLight.groundColor.setHex(0x334155);
      this.hemiLight.intensity = 0.6;

      this.scene.background = new THREE.Color(0x7dd3fc);
      this.scene.fog.color.setHex(0xbae6fd);
      this.scene.fog.density = 0.0005;
    } else if (timePreset === 'golden') {
      // Golden Hour / Senja Jakarta
      this.sunLight.color.setHex(0xf97316);
      this.sunLight.intensity = 2.0;
      this.sunLight.position.set(280, 95, 180);

      this.ambientLight.color.setHex(0xfde047);
      this.ambientLight.intensity = 0.35;

      this.hemiLight.color.setHex(0xfb923c);
      this.hemiLight.groundColor.setHex(0x431407);
      this.hemiLight.intensity = 0.45;

      this.scene.background = new THREE.Color(0xc2410c);
      this.scene.fog.color.setHex(0x9a3412);
      this.scene.fog.density = 0.0008;
    } else if (timePreset === 'night') {
      // Malam Hari (City Lights)
      this.sunLight.color.setHex(0x38bdf8);
      this.sunLight.intensity = 0.18;
      this.sunLight.position.set(-100, 200, -120);

      this.ambientLight.color.setHex(0x0f172a);
      this.ambientLight.intensity = 0.18;

      this.hemiLight.color.setHex(0x1e293b);
      this.hemiLight.groundColor.setHex(0x020617);
      this.hemiLight.intensity = 0.2;

      this.scene.background = new THREE.Color(0x030712);
      this.scene.fog.color.setHex(0x030712);
      this.scene.fog.density = 0.0028;
    }
  }
}
