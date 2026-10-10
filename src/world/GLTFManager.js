import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class GLTFManager {
  constructor(scene, interactiveObjects) {
    this.scene = scene;
    this.interactiveObjects = interactiveObjects;
    this.loader = new GLTFLoader();
    this.customModels = [];

    this.setupDragAndDrop();
  }

  /**
   * Load registered custom model from URL or local public path
   */
  loadModel({
    id,
    name,
    url,
    position = [0, 0, 0],
    scale = [1, 1, 1],
    rotation = [0, 0, 0],
    category = "Model Kustom Pengguna",
    description = "Model 3D yang ditambahkan oleh pengguna ke kota Jakarta."
  }) {
    return new Promise((resolve, reject) => {
      this.loader.load(
        url,
        (gltf) => {
          const model = gltf.scene;
          model.position.set(...position);
          model.scale.set(...scale);
          model.rotation.set(...rotation);

          model.userData = {
            landmarkData: {
              id,
              name,
              category,
              tagline: "Model 3D Eksternal",
              height: "Sesuai Model .GLB",
              year: "2026",
              architect: "User Uploaded",
              location: "Jakarta 3D Space",
              description,
              facts: ["Model dimuat dari file .glb / .gltf kustom."]
            },
            isClickable: true
          };

          model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              child.userData = model.userData;
              this.interactiveObjects.push(child);
            }
          });

          this.scene.add(model);
          this.customModels.push(model);
          resolve(model);
        },
        undefined,
        (error) => {
          console.warn(`[GLTFManager] Could not load model from ${url}:`, error);
          reject(error);
        }
      );
    });
  }

  /**
   * Setup Drag & Drop directly onto browser window to instantly inspect any .glb/.gltf file
   */
  setupDragAndDrop() {
    window.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });

    window.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        const file = files[0];
        if (file.name.endsWith('.glb') || file.name.endsWith('.gltf')) {
          this.loadDroppedFile(file);
        } else {
          alert('Silakan tarik dan lepas file dengan format .glb atau .gltf');
        }
      }
    });
  }

  loadDroppedFile(file) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = (e) => {
      const contents = e.target.result;
      this.loader.parse(
        contents,
        '',
        (gltf) => {
          const model = gltf.scene;

          // Auto-scale model if too huge or too tiny
          const box = new THREE.Box3().setFromObject(model);
          const size = new THREE.Vector3();
          box.getSize(size);
          const maxDim = Math.max(size.x, size.y, size.z);

          if (maxDim > 200) {
            const scaleFactor = 60 / maxDim;
            model.scale.setScalar(scaleFactor);
          } else if (maxDim < 2) {
            model.scale.setScalar(20);
          }

          // Place near origin / Bundaran HI
          model.position.set(0, 0, 40);

          model.userData = {
            landmarkData: {
              id: 'uploaded-' + Date.now(),
              name: file.name.replace(/\.[^/.]+$/, ""),
              category: "Model Baru (Diunggah)",
              tagline: "Model 3D yang baru saja Anda impor",
              height: `${Math.round(size.y)}m (estimasi)`,
              year: "Baru saja",
              architect: "File Kustom Pengguna",
              location: "Titik Drop (Dekat Bundaran HI)",
              description: `File model 3D '${file.name}' berhasil dimuat ke dalam scene Jakarta 3D.`,
              facts: [
                "Untuk menyimpan model ini secara permanen, letakkan file di folder public/models/",
                "Daftarkan model di src/config/landmarks.js agar muncul otomatis saat website dibuka."
              ]
            },
            isClickable: true
          };

          model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              child.userData = model.userData;
              this.interactiveObjects.push(child);
            }
          });

          this.scene.add(model);
          this.customModels.push(model);

          // Dispatch event to show notification in UI
          window.dispatchEvent(
            new CustomEvent('model-imported', {
              detail: { name: file.name, model }
            })
          );
        },
        (error) => {
          console.error("Gagal memproses file 3D:", error);
          alert("Gagal membaca file .glb: " + error.message);
        }
      );
    };
  }
}
