import * as THREE from 'three';

export class GoogleTilesManager {
  constructor({ scene, camera, renderer, onStatusChange }) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.onStatusChange = onStatusChange || (() => {});

    this.tilesRenderer = null;
    this.group = new THREE.Group();
    this.group.name = "google-3d-tiles-group";
    this.scene.add(this.group);

    this.isActive = false;
    this.apiKey = localStorage.getItem('google_3d_tiles_api_key') || '';
  }

  /**
   * Calculate exact WGS84 ECEF -> ENU transformation matrix for Jakarta
   * Centers Jakarta at (0, 0, 0) with +Y = Up, -Z = North, +X = East.
   */
  getJakartaTransformMatrix() {
    const lat = -6.175392 * (Math.PI / 180); // Monas / Pusat Jakarta
    const lon = 106.827153 * (Math.PI / 180);

    // WGS84 Ellipsoid constants
    const a = 6378137.0;
    const f = 1.0 / 298.257223563;
    const e2 = 2 * f - f * f;

    const sinLat = Math.sin(lat);
    const cosLat = Math.cos(lat);
    const sinLon = Math.sin(lon);
    const cosLon = Math.cos(lon);

    const N = a / Math.sqrt(1.0 - e2 * sinLat * sinLat);
    const height = 15.0; // average elevation of Jakarta in meters

    // ECEF coordinates of Jakarta
    const X = (N + height) * cosLat * cosLon;
    const Y = (N + height) * cosLat * sinLon;
    const Z = (N * (1.0 - e2) + height) * sinLat;

    // ENU Basis vectors
    // East: (+X in Three.js)
    const east = new THREE.Vector3(-sinLon, cosLon, 0);
    // Up / Surface Normal: (+Y in Three.js)
    const up = new THREE.Vector3(cosLat * cosLon, cosLat * sinLon, sinLat);
    // North: (-Z in Three.js)
    const north = new THREE.Vector3(-sinLat * cosLon, -sinLat * sinLon, cosLat);

    // Matrix to transform ECEF to local Three.js (East = +X, Up = +Y, South = +Z -> North = -Z)
    const mat = new THREE.Matrix4();
    mat.set(
      east.x, east.y, east.z, 0,
      up.x, up.y, up.z, 0,
      -north.x, -north.y, -north.z, 0,
      0, 0, 0, 1
    );

    const transMat = new THREE.Matrix4().makeTranslation(-X, -Y, -Z);
    mat.multiply(transMat);

    return mat;
  }

  /**
   * Initialize and stream Google Photorealistic 3D Tiles
   */
  async enable(apiKey) {
    if (!apiKey) {
      throw new Error("API Key Google Maps Platform diperlukan.");
    }

    this.apiKey = apiKey.trim();
    localStorage.setItem('google_3d_tiles_api_key', this.apiKey);

    this.onStatusChange({ status: 'loading', message: 'Menghubungkan ke Google Photorealistic 3D Tiles...' });

    try {
      if (this.tilesRenderer) {
        this.tilesRenderer.dispose();
        this.group.clear();
      }

      const { TilesRenderer } = await import('3d-tiles-renderer');
      const url = `https://tile.googleapis.com/v1/3dtiles/root.json?key=${this.apiKey}`;

      this.tilesRenderer = new TilesRenderer(url);
      this.tilesRenderer.setCamera(this.camera);
      this.tilesRenderer.setResolutionFromRenderer(this.camera, this.renderer);

      // Max error tolerance for streaming quality / performance
      this.tilesRenderer.errorTarget = 8;
      this.tilesRenderer.maxDepth = 25;

      // Apply Jakarta spatial transformation
      const transformMatrix = this.getJakartaTransformMatrix();
      this.tilesRenderer.group.applyMatrix4(transformMatrix);

      this.group.add(this.tilesRenderer.group);

      this.isActive = true;
      this.onStatusChange({ status: 'active', message: 'Google 3D Tiles Aktif (Kota Jakarta Asli)' });
      return true;
    } catch (err) {
      console.error("[GoogleTilesManager] Gagal memuat tiles:", err);
      this.isActive = false;
      this.onStatusChange({ status: 'error', message: err.message || 'Gagal memuat Google 3D Tiles' });
      throw err;
    }
  }

  /**
   * Disable Google 3D Tiles and switch back to local procedural city
   */
  disable() {
    if (this.tilesRenderer) {
      this.tilesRenderer.dispose();
      this.group.clear();
      this.tilesRenderer = null;
    }
    this.isActive = false;
    this.onStatusChange({ status: 'inactive', message: 'Mode Model Lokal Three.js Aktif' });
  }

  update() {
    if (this.isActive && this.tilesRenderer) {
      this.tilesRenderer.setCamera(this.camera);
      this.tilesRenderer.setResolutionFromRenderer(this.camera, this.renderer);
      this.tilesRenderer.update();
    }
  }
}
