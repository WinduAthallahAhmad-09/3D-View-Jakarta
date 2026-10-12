import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class CameraController {
  constructor(camera, domElement) {
    this.camera = camera;
    this.controls = new OrbitControls(camera, domElement);

    // Orbit controls settings
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enableZoom = false; // Replaced by smooth damped wheel zoom below
    this.controls.maxPolarAngle = Math.PI / 2 - 0.04; // Don't go below ground
    this.controls.minDistance = 12;
    this.controls.maxDistance = 1200;

    // Smooth wheel zoom state (OrbitControls does not damp zoom scale in Three r160)
    this.zoomDelta = 0;
    this.zoomOffset = new THREE.Vector3();
    domElement.addEventListener(
      'wheel',
      (e) => {
        if (this.isFlying || !this.controls.enabled) return;
        e.preventDefault();
        const raw = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
        const step = THREE.MathUtils.clamp(raw, -120, 120) / 120;
        this.zoomDelta = THREE.MathUtils.clamp(this.zoomDelta + step * 0.075, -0.4, 0.4);
      },
      { passive: false }
    );

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
    } else if (Math.abs(this.zoomDelta) > 0.0005) {
      const alpha = 1 - Math.exp(-12 * Math.min(delta, 0.1));
      const apply = this.zoomDelta * alpha;
      this.zoomDelta -= apply;

      this.zoomOffset.copy(this.camera.position).sub(this.controls.target);
      const dist = this.zoomOffset.length();
      if (dist > 0.001) {
        const nextDist = THREE.MathUtils.clamp(
          dist * Math.exp(apply),
          this.controls.minDistance,
          this.controls.maxDistance
        );
        this.zoomOffset.multiplyScalar(nextDist / dist);
        this.camera.position.copy(this.controls.target).add(this.zoomOffset);
      }
    }

    this.controls.update();
  }

  /**
   * Fly camera to target position and lookAt
   */
  flyTo(targetPos, lookAtPos, duration = 1.6) {
    this.isFlying = true;
    this.zoomDelta = 0;
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
