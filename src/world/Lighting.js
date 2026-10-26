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
    this.sunOffset = new THREE.Vector3(120, 180, 90);
    this.shadowFocusX = 0;
    this.shadowFocusZ = 0;
    this.sunLight.position.copy(this.sunOffset);
    this.sunLight.castShadow = true;
    this.sunLight.target.position.set(0, 0, 0);
    this.scene.add(this.sunLight.target);

    // High performance shadow configuration (optimized for 60 FPS)
    this.sunLight.shadow.mapSize.width = 1024;
    this.sunLight.shadow.mapSize.height = 1024;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 1200;

    const d = 480;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0003;

    this.scene.add(this.sunLight);

    // 3. Atmospheric Fog (Tropical Jakarta Haze)
    this.scene.fog = new THREE.FogExp2(0x93c5fd, 0.00055);
  }

  /**
   * Keep the sun offset fixed while moving the shadow frustum to the camera target.
   * The 40-unit snap avoids shadow shimmer when the camera drifts slowly.
   */
  updateShadowFocus(target) {
    const sx = Math.round(target.x / 40) * 40;
    const sz = Math.round(target.z / 40) * 40;
    if (sx === this.shadowFocusX && sz === this.shadowFocusZ) return;
    this.shadowFocusX = sx;
    this.shadowFocusZ = sz;
    this.applySunPosition();
  }

  applySunPosition() {
    this.sunLight.position.set(
      this.shadowFocusX + this.sunOffset.x,
      this.sunOffset.y,
      this.shadowFocusZ + this.sunOffset.z
    );
    this.sunLight.target.position.set(this.shadowFocusX, 0, this.shadowFocusZ);
    this.sunLight.target.updateMatrixWorld();
  }

  /**
   * Smoothly apply time-of-day presets: 'day', 'golden', 'night'
   */
  setTimeOfDay(timePreset) {
    if (timePreset === 'day') {
      // Natural Daylight with Muted Slate Horizon Harmony
      this.sunLight.color.setHex(0xfffdf9);
      this.sunLight.intensity = 1.75;
      this.sunOffset.set(220, 320, 150);

      this.ambientLight.color.setHex(0xffffff);
      this.ambientLight.intensity = 0.65;

      this.hemiLight.color.setHex(0xdbeafe);
      this.hemiLight.groundColor.setHex(0x1e293b);
      this.hemiLight.intensity = 0.65;

      this.scene.background = new THREE.Color(0xdce5ef);
      this.scene.fog.color.setHex(0xdce5ef);
      this.scene.fog.density = 0.00042;
    } else if (timePreset === 'golden') {
      // Golden Hour / Senja Jakarta (Warm sunset glow, soft atmospheric twilight)
      this.sunLight.color.setHex(0xf59e0b);
      this.sunLight.intensity = 1.9;
      this.sunOffset.set(280, 95, 180);

      this.ambientLight.color.setHex(0xfde047);
      this.ambientLight.intensity = 0.45;

      this.hemiLight.color.setHex(0xf472b6);
      this.hemiLight.groundColor.setHex(0x271924);
      this.hemiLight.intensity = 0.52;

      this.scene.background = new THREE.Color(0x663c46);
      this.scene.fog.color.setHex(0x663c46);
      this.scene.fog.density = 0.00052;
    } else if (timePreset === 'night') {
      // Malam Hari (Luminous city lights under clear indigo moonlight)
      this.sunLight.color.setHex(0x93c5fd);
      this.sunLight.intensity = 0.45;
      this.sunOffset.set(-120, 240, -100);

      this.ambientLight.color.setHex(0x1e293b);
      this.ambientLight.intensity = 0.42;

      this.hemiLight.color.setHex(0x334155);
      this.hemiLight.groundColor.setHex(0x090d16);
      this.hemiLight.intensity = 0.40;

      this.scene.background = new THREE.Color(0x0b1120);
      this.scene.fog.color.setHex(0x0b1120);
      this.scene.fog.density = 0.00065;
    }
    this.applySunPosition();
  }
}
