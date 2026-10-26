# 🏙️ JAKARTA 3D VIEW — Digital Twin & Eksplorasi 3D Kota Jakarta

Website eksplorasi interaktif 3D Kota Jakarta dengan bangunan-bangunan yang mirip kondisi nyata saat ini. Dibangun menggunakan teknologi WebGL modern (**Three.js**), **100% gratis** tanpa memerlukan API key berbayar ataupun pendaftaran kartu kredit.

**Status saat ini:** 81 landmark anchor dengan verifikasi statis, 9 Voids dalam roadmap. Lihat [docs/ROADMAP.md](docs/ROADMAP.md) untuk status per wilayah dan catatan batasan.

---

## 🌟 Fitur Utama

1. **Model Bangunan Ikonik Jakarta Akurat**:
   - 🏛️ **Monas (Monumen Nasional)**: Obelisk marmer putih 132m, pelataran cawan Lesung-Alu, relief kemerdekaan, dan lidah api kemerdekaan dilapisi emas murni 50 kg dengan pencahayaan dinamis.
   - ⛲ **Bundaran Hotel Indonesia (Bundaran HI)**: Kolam air mancur bundar bertingkat dengan **Patung Selamat Datang** (sepasang pemuda-pemudi perunggu menyambut menghadap utara) serta jalan melingkar.
   - 🏢 **Wisma 46 (BNI City)**: Pencakar langit dekonstruktivis dengan siluet puncak pena melengkung (curved spire), fasad kaca ganda hijau toska, dan lampu suar penerbangan merah.
   - 🏙️ **Menara BCA & Grand Indonesia**: Kompleks megablok modern Sudirman dengan mahkota restoran langit dan helipad.
   - 💼 **SCBD Financial District**: Kepadatan gedung pencakar langit modern (Treasury Tower, Pacific Place, IDX, District 8).
   - 🏟️ **Gelora Bung Karno (GBK Senayan)**: Stadion kebanggaan nasional dengan arsitektur atap temu gelang oval yang monumental.
   - 🚗 **Koridor Sudirman - M.H. Thamrin**: Lengkap dengan jalur busway **TransJakarta** khusus, trotoar pedestrian revitalisasi Jakarta, pepohonan tropis rindang, lampu jalan PJU, serta animasi lalu lintas mobil & bus TransJakarta bergerak secara dinamis.

2. **Siklus Waktu Dinamis (Day / Golden Hour / Night)**:
   - ☀️ **Siang**: Pencahayaan tropis cerah dengan bayangan gedung tajam realistis.
   - 🌅 **Senja / Golden Hour**: Cahaya matahari terbenam oranye keemasan dengan bayangan panjang khas sore hari di Jakarta.
   - 🌙 **Malam (City Lights)**: Suasana malam metropolitan Jakarta, kisi-kisi jendela gedung menyala (emissive window grids), lampu jalan PJU menyinari aspal, dan 4 lampu sorot Monas menembus langit malam.

3. **Tur Sinematik & Interaktivitas Penuh**:
   - Navigasi kamera bebas: Orbit (klik kiri tahan), Zoom (scroll mouse), Panning (klik kanan tahan).
   - Tombol **Tour Cepat** di dock bawah untuk terbang halus (*cinematic fly-to*) ke setiap landmark.
   - Klik pada gedung mana saja untuk membuka **Detail Drawer** berisi sejarah, tinggi gedung, tahun peresmian, arsitek, dan fakta unik.

4. **Slot & Dukungan Model Kustom (.GLB / .GLTF)**:
   - **Tarik & Lepas Langsung (Drag & Drop)**: Tarik file `.glb` gedung apa saja dari komputer Anda langsung ke layar browser, dan model akan langsung dirender seketika!
   - **Slot Permanen**: Simpan file di folder `public/models/` dan daftarkan di `src/config/landmarks.js`.

---

## 🚀 Cara Menjalankan Website

Proyek ini memakai ES Modules dan tidak memerlukan build step. Three.js dimuat melalui CDN.

```bash
# Jalankan server lokal (Node.js)
npm run dev
```
Buka `http://localhost:8000`.

Alternatif tanpa Node.js:
```bash
python -m http.server 8000
```

## ✅ Verifikasi

```bash
npm test
```

Perintah ini menjalankan satu skrip verifikasi statis (2.136 assertion) untuk 81 landmark: jumlah dan ID unik, kelengkapan metadata, ketersediaan builder, kelengkapan tombol tour, batas penyimpangan posisi terhadap proyeksi GPS, serta integritas dataset OSM Void B. Ini bukan pengganti pengujian render atau performa di browser.

---

## 🗺️ Panduan: Cara Mendapatkan Model 3D Gedung Jakarta Gratis

Jika Anda ingin menambahkan lebih banyak gedung nyata Jakarta (seperti Menara Astra, Gedung Sarinah, Istana Merdeka, Masjid Istiqlal, Katedral Jakarta):

### 1. Unduh dari Komunitas 3D (Sketchfab / Poly Pizza)
- Kunjungi [Sketchfab.com](https://sketchfab.com/search?q=jakarta+building&type=models)
- Centang filter **Downloadable** dan lisensi **CC-BY (Gratis)**.
- Unduh dalam format **glTF / GLB**.
- Tarik langsung file tersebut ke website ini!

### 2. Ekstrak Data Nyata OpenStreetMap Menggunakan BlenderGIS (100% Akurat)
- Unduh software gratis **Blender** (blender.org).
- Pasang add-on gratis **BlenderGIS** atau **OSM for Blender**.
- Cari area Jakarta (misal Sudirman, Kuningan, atau Thamrin).
- Klik tombol **Import 3D Buildings & Terrain** (Blender akan otomatis mengunduh tapak dan ketinggian gedung asli dari satelit OSM).
- Ekspor sebagai `.glb` dan masukkan ke folder `public/models/`.

---

## 📁 Struktur Direktori

```
JAKARTA 3D VIEW/
├── index.html                  # Antarmuka utama (Glassmorphism UI, 3D Canvas, Dock)
├── package.json                # Konfigurasi proyek & scripts (dev, test)
├── server.js                   # HTTP server statis lokal (port 8000)
├── test_landmarks.js           # Verifikasi statis data & integrasi landmark
├── README.md                   # Dokumentasi lengkap
├── docs/
│   └── ROADMAP.md              # Status terverifikasi & roadmap 9 Voids
├── public/
│   └── models/                 # Slot folder untuk menyimpan file 3D .glb kustom
└── src/
    ├── main.js                 # Entry point & inisialisasi aplikasi
    ├── config/
    │   └── landmarks.js        # Konfigurasi koordinat spasial & metadata 81 landmark
    ├── data/
    │   ├── jakarta_osm.json    # Geometri OSM Jakarta (jalan, bangunan, air, taman, rel)
    │   └── void_b_osm.js       # Jalan & Kanal Mookervaart OSM untuk Void B (ter-warp)
    ├── world/
    │   ├── CityScene.js        # Perakitan lanskap koridor jalan, gedung, lalu lintas, & vegetasi
    │   ├── LandmarkModels.js   # Geometri arsitektur 3D seluruh landmark
    │   ├── TextureGenerator.js # Generator tekstur prosedural PBR (fasad kaca, aspal, trotoar)
    │   ├── Lighting.js         # Pengatur matahari, bayangan lembut, & siklus siang/malam
    │   ├── CameraController.js # Kontrol orbit & animasi terbang sinematik
    │   ├── GLTFManager.js      # Loader model .glb/.gltf & fitur drag-and-drop
    │   └── InteractionManager.js# Raycaster pendeteksi klik pada gedung & landmark
    └── ui/
        └── UIManager.js        # Pengendali drawer detail, tombol tour, dan notifikasi
```
