import * as THREE from 'three';
import { CityScene } from './world/CityScene.js';
import { LightingManager } from './world/Lighting.js';
import { CameraController } from './world/CameraController.js';
import { GLTFManager } from './world/GLTFManager.js';
import { InteractionManager } from './world/InteractionManager.js';
import { UIManager } from './ui/UIManager.js';

class JakartaApp {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.clock = new THREE.Clock();

    this.initRenderer();
    this.initCamera();
    this.initScene();
    this.initSubsystems();
    this.initEvents();

    this.animate();
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Realistic Tone Mapping & Shadows
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.appendChild(this.renderer.domElement);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      48,
      window.innerWidth / window.innerHeight,
      0.5,
      1500
    );
    // Initial view: Overlooking Bundaran HI & Sudirman skyline
    this.camera.position.set(45, 38, 55);
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  initSubsystems() {
    // 1. Lighting & Atmosphere
    this.lighting = new LightingManager(this.scene);
    this.lighting.setTimeOfDay('day');

    // 2. City Environment & Landmarks
    this.city = new CityScene(this.scene);

    // 3. Camera Controller with smooth flight
    this.cameraController = new CameraController(this.camera, this.renderer.domElement);
    this.cameraController.controls.target.set(0, 6, 0);

    // 4. Custom GLTF Model Manager (.glb slot & drag-and-drop)
    this.gltfManager = new GLTFManager(this.scene, this.city.interactiveObjects);

    // 5. User Interface Manager
    this.ui = new UIManager({
      onSelectPreset: (preset) => {
        if (preset.cameraPosition && preset.cameraTarget) {
          this.cameraController.flyTo(preset.cameraPosition, preset.cameraTarget);
        }
      },
      onTimeChange: (preset) => {
        this.lighting.setTimeOfDay(preset);
        this.city.setNightMode(preset === 'night');
      }
    });

    // 6. Raycaster & Interactive Selection
    this.interaction = new InteractionManager(
      this.camera,
      this.scene,
      this.city.interactiveObjects,
      (landmarkData) => {
        this.ui.showLandmarkDetails(landmarkData);
      }
    );
  }

  initEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();

    // Update traffic animation
    if (this.city) {
      this.city.updateTraffic(delta);
    }

    // Update smooth camera flight
    if (this.cameraController) {
      this.cameraController.update(delta);
    }

    this.renderer.render(this.scene, this.camera);
  }
}

// Start application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  new JakartaApp();
});
