import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { CityScene } from './world/CityScene.js';
import { LightingManager } from './world/Lighting.js';
import { CameraController } from './world/CameraController.js';
import { GLTFManager } from './world/GLTFManager.js';
import { InteractionManager } from './world/InteractionManager.js';
import { GoogleTilesManager } from './world/GoogleTilesManager.js';
import { GOOGLE_TILES_CONFIG } from './config/landmarks.js';
import { UIManager } from './ui/UIManager.js';

class JakartaApp {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.clock = new THREE.Clock();
    this.initialRenderFrames = 2;

    this.initRenderer();
    this.initCamera();
    this.initScene();
    this.initPostprocessing();
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
    const maxDPR = window.innerWidth > 1920 ? 1.25 : 1.5;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDPR));

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
      3000
    );
    // Initial view: Overlooking Bundaran HI & Sudirman skyline
    this.camera.position.set(55, 45, 70);
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  initPostprocessing() {
    this.composer = new EffectComposer(this.renderer);

    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    // Selective UnrealBloomPass: tuned specifically for night-time emissive elements
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.0,   // default strength (0 in day mode)
      0.45,  // bloom radius
      0.82   // bloom threshold (only HDR emissive lights pass!)
    );
    this.composer.addPass(this.bloomPass);

    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);
  }

  setTimePresetBloom(preset) {
    this.currentTimePreset = preset;
    if (this.bloomPass) {
      if (preset === 'night') {
        this.bloomPass.strength = 1.15;
        this.bloomPass.threshold = 0.82;
        this.bloomPass.radius = 0.50;
      } else if (preset === 'golden') {
        this.bloomPass.strength = 0.38;
        this.bloomPass.threshold = 0.85;
        this.bloomPass.radius = 0.35;
      } else {
        this.bloomPass.strength = 0.0;
      }
    }
  }

  initSubsystems() {
    // 1. Lighting & Atmosphere
    this.lighting = new LightingManager(this.scene);
    this.lighting.setTimeOfDay('day');

    // 2. City Environment & Landmarks
    this.city = new CityScene(this.scene);
    this.city.setTimePreset('day');

    // 3. Camera Controller with smooth flight
    this.cameraController = new CameraController(this.camera, this.renderer.domElement);
    this.cameraController.controls.target.set(0, 6, 0);

    // 4. Custom GLTF Model Manager (.glb slot & drag-and-drop)
    this.gltfManager = new GLTFManager(this.scene, this.city.interactiveObjects);

    // 5. User Interface Manager
    this.ui = new UIManager({
      onSelectPreset: (preset) => {
        if (preset.cameraPosition && preset.cameraTarget) {
          this.cameraController.flyTo(
            preset.cameraPosition,
            preset.cameraTarget,
            preset.duration || 1.6
          );
        }
      },
      onTimeChange: (preset) => {
        this.lighting.setTimeOfDay(preset);
        this.city.setTimePreset(preset);
        this.setTimePresetBloom(preset);
      },
      onResetNorth: () => {
        if (this.cameraController) {
          this.cameraController.resetToNorth();
        }
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

    // 7. Google Photorealistic 3D Tiles System
    this.googleTiles = new GoogleTilesManager({
      scene: this.scene,
      camera: this.camera,
      renderer: this.renderer,
      onStatusChange: (info) => {
        if (this.ui) {
          this.ui.updateGoogleTilesStatus(info);
        }
      }
    });

    // Ensure our custom Three.js Jakarta 3D city is always visible on startup
    this.city.setProceduralVisible(true);

    // Event listener from UI modal
    window.addEventListener('toggle-google-tiles', async (e) => {
      const { apiKey, enable } = e.detail;
      if (enable && apiKey) {
        try {
          await this.googleTiles.enable(apiKey);
          this.city.setProceduralVisible(false);
          this.ui.showToast('Google Photorealistic 3D Tiles Aktif!');
        } catch (err) {
          this.city.setProceduralVisible(true);
          this.ui.showToast('Gagal memuat Google Tiles: ' + (err.message || 'Error'));
        }
      } else {
        this.googleTiles.disable();
        this.city.setProceduralVisible(true);
        this.ui.showToast('Kembali ke mode model lokal Three.js.');
      }
    });
  }

  initEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      const maxDPR = window.innerWidth > 1920 ? 1.25 : 1.5;
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDPR));
      if (this.composer) {
        this.composer.setSize(window.innerWidth, window.innerHeight);
        this.composer.setPixelRatio(Math.min(window.devicePixelRatio, maxDPR));
      }
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // 1. Lifecycle Pause: completely suspend rendering if tab is minimized or hidden in background
    if (document.hidden) return;

    // 2. Homescreen Idle Throttle: keep GPU cold (0% load) while user reads homescreen
    if (this.ui && this.ui.isHomeActive) {
      if (this.initialRenderFrames > 0) {
        this.initialRenderFrames--;
        this.renderer.render(this.scene, this.camera);
      }
      return;
    }

    const delta = Math.min(this.clock.getDelta(), 0.1);

    // Update traffic animation
    if (this.city) {
      this.city.updateTraffic(delta);
    }

    // Update smooth camera flight
    if (this.cameraController) {
      this.cameraController.update(delta);
    }

    // Keep the shadow frustum centred on the area the user is exploring
    if (this.lighting && this.cameraController) {
      this.lighting.updateShadowFocus(this.cameraController.controls.target);
    }

    // Update Google 3D Tiles stream
    if (this.googleTiles) {
      this.googleTiles.update();
    }

    // Update interactive North compass needle
    if (this.ui && this.cameraController) {
      this.ui.updateCompass(this.cameraController.getAzimuthAngle());
    }

    // Project 3D map place labels to 2D viewport
    if (this.ui) {
      this.ui.updateMapLabels(this.camera);
    }

    // Selective Night Bloom Rendering via EffectComposer or direct WebGL rendering
    if (this.composer && this.bloomPass && this.bloomPass.strength > 0) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }
}

// Start application immediately if DOM is already parsed, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => new JakartaApp());
} else {
  new JakartaApp();
}

