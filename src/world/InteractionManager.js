import * as THREE from 'three';

export class InteractionManager {
  constructor(camera, scene, interactiveObjects, onSelectLandmark) {
    this.camera = camera;
    this.scene = scene;
    this.interactiveObjects = interactiveObjects;
    this.onSelectLandmark = onSelectLandmark;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.pointerDownPos = { x: 0, y: 0 };
    this.setupEvents();
  }

  setupEvents() {
    window.addEventListener('pointerdown', (e) => {
      this.pointerDownPos = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointerup', (e) => {
      // Ignore click if user was dragging/rotating camera
      const dx = Math.abs(e.clientX - this.pointerDownPos.x);
      const dy = Math.abs(e.clientY - this.pointerDownPos.y);
      if (dx > 5 || dy > 5) return;

      // Don't trigger if clicked on UI elements or Homescreen
      if (
        e.target.closest('#homescreen-overlay') ||
        e.target.closest('#detail-drawer') ||
        e.target.closest('#ui-overlay') ||
        e.target.closest('button') ||
        e.target.closest('.interactive-ui')
      ) {
        return;
      }

      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.interactiveObjects, true);

      if (intersects.length > 0) {
        // Find topmost object with landmarkData
        let hit = intersects[0].object;
        while (hit && !hit.userData?.landmarkData && hit.parent) {
          hit = hit.parent;
        }

        if (hit?.userData?.landmarkData) {
          this.onSelectLandmark(hit.userData.landmarkData);
        }
      }
    });
  }
}
