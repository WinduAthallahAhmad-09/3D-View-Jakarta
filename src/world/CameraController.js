import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class CameraController {
  constructor(camera, domElement) {
    this.camera = camera;
    this.controls = new OrbitControls(camera, domElement);

    // Orbit controls settings
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.04; // Don't go below ground
    this.controls.minDistance = 10;
    this.controls.maxDistance = 1200;

    // Flight animation state
    this.isFlying = false;
    this.flightStartPos = new THREE.Vector3();
    this.flightEndPos = new THREE.Vector3();
    this.flightStartTarget = new THREE.Vector3();
    this.flightEndTarget = new THREE.Vector3();
    this.flightProgress = 0;
    this.flightDuration = 1.6; // seconds
  }

  update(delta) {
    if (this.isFlying) {
      this.flightProgress += delta / this.flightDuration;
      if (this.flightProgress >= 1.0) {
        this.flightProgress = 1.0;
        this.isFlying = false;
        this.controls.enabled = true;
      }

      // Smooth ease-in-out cubic interpolation
      const t = this.easeInOutCubic(this.flightProgress);

      this.camera.position.lerpVectors(this.flightStartPos, this.flightEndPos, t);
      this.controls.target.lerpVectors(this.flightStartTarget, this.flightEndTarget, t);
    }

    this.controls.update();
  }

  /**
   * Fly camera to target position and lookAt
   */
  flyTo(targetPos, lookAtPos, duration = 1.6) {
    this.isFlying = true;
    this.controls.enabled = false;
    this.flightProgress = 0;
    this.flightDuration = duration;

    this.flightStartPos.copy(this.camera.position);
    this.flightEndPos.set(...targetPos);

    this.flightStartTarget.copy(this.controls.target);
    this.flightEndTarget.set(...lookAtPos);
  }

  easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }
}
