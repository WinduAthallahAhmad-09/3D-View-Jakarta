# Folder Model 3D Kustom Jakarta (.GLB / .GLTF)

Folder ini disediakan sebagai slot khusus untuk menyimpan file model 3D bangunan Kota Jakarta format `.glb` atau `.gltf` yang Anda miliki.

## Cara Menambahkan Model Baru:
1. Letakkan file `.glb` Anda di folder ini (misalnya `monas-ultra-detail.glb` atau `wisma-46.glb`).
2. Buka file `src/config/landmarks.js`.
3. Tambahkan objek konfigurasi baru pada array `JAKARTA_LANDMARKS`, contoh:
```javascript
{
  id: "gedung-kustom-saya",
  name: "Nama Gedung Jakarta",
  category: "Pencakar Langit",
  tagline: "Gedung Ikonik",
  height: "210 meter",
  year: "2024",
  architect: "Arsitek Terkenal",
  location: "Jl. Jend. Sudirman, Jakarta",
  modelUrl: "/models/gedung-kustom-saya.glb",
  position: [-25, 0, 50],
  cameraPosition: [-5, 40, 80],
  cameraTarget: [-25, 20, 50],
  description: "Deskripsi arsitektur gedung...",
  facts: [
    "Fakta menarik tentang gedung ini."
  ]
}
```

## Fitur Drag & Drop Langsung di Browser
Anda juga tidak harus mengedit kode jika hanya ingin melihat pratinjau cepat:
Cukup tarik (drag) file `.glb` dari File Explorer Windows Anda dan lepas (drop) langsung ke dalam tampilan 3D browser! Model akan langsung muncul di sekitar Bundaran HI.
