# 🏙️ JAKARTA 3D VIEW — Digital Twin & Eksplorasi 3D Kota Jakarta

Website eksplorasi interaktif 3D Kota Jakarta dengan bangunan-bangunan yang mirip kondisi nyata saat ini. Dibangun menggunakan teknologi WebGL modern (**Three.js**), **100% gratis** tanpa memerlukan API key berbayar ataupun pendaftaran kartu kredit.

**Status saat ini:** 99 landmark anchor dengan verifikasi statis, 9 Voids dalam roadmap. Void C Tahap 1 menambahkan enam anchor Meruya–Kembangan–Joglo (#82–#87); Tahap 2 menambahkan jaringan jalan OSM kawasan Meruya–Kembangan–Joglo beserta Kali Angke, jembatan otomatis, PJU, dan vegetasi; Tahap 3 mengisi urban fabric di lima zona (termasuk Kreo) dengan rumah, ruko, dan gudang; Tahap 4 melengkapi transit kawasan berupa Park-and-Ride Kembangan dan empat feeder halte di koridor Meruya Ilir, Joglo Raya, Ciledug Raya, dan Puri Kembangan. Void D Tahap 1 menambahkan enam anchor kawasan Kamal Muara, Pantai Maju PIK, Angke Kapuk, Teluk Gong, dan Muara Baru (#88–#93); Tahap 2 menghubungkannya dengan 201 ruas jalan OSM, 31 waterway (termasuk Cengkareng Drain dan Kali Angke), 19 poligon air, jembatan otomatis, PJU, dan vegetasi; Tahap 3 mengisi urban fabric kawasan dengan 237 rumah, 127 ruko, dan 31 gudang dalam lima `InstancedMesh` (+5 draw call); Tahap 4 melengkapi transit kawasan berupa Park-and-Ride TWA Angke Kapuk dan enam feeder halte di Pantai Indah Kapuk, TWA, Kapuk Raya, Kapuk Muara, Teluk Gong, dan Muara Baru (+5 draw call). Void E Tahap 1 menambahkan enam anchor kawasan Cilincing, Marunda, Rorotan, dan KBN Cakung (#94–#99) sebagai pulau tapak mandiri, bersama perluasan ground plane 3.600→4.800 unit dan grid 3.000→4.400 unit agar cakupan timur tetap tertutup; Tahap 2 membangun jaringan OSM **148 ruas jalan / 640 titik** dan **23 waterway / 252 titik** (Kanal Banjir Timur, Cakung, Blencong, Tiram, Rawa Malang) dengan **14 jembatan otomatis**, konektor Akses Rusunawa Nagrak yang memotong jarak tapak ke jalan dari 79,8 ke 58,2 unit, 38 PJU, dan 107 pohon dalam delapan mesh gabungan (+8 draw call); Tahap 3 mengisi urban fabric kawasan dengan **167 rumah kampung, 71 ruko, dan 76 gudang** dalam lima `InstancedMesh` (+5 draw call) yang dimask terhadap jalan OSM, waterway, dan enam tapak anchor; Tahap 4 melengkapi transit kawasan berupa **Park-and-Ride Marunda** (plaza 44×22, 8 lajur parkir, dua shelter, totem, enam pohon, driveway) dan **enam feeder halte** di gerbang Rusunawa Marunda, Rumah Si Pitung, Logistik Marunda, Rusunawa Nagrak, KBN Cakung, dan Kampung Rorotan (+5 draw call), dengan tiga ruko koridor Marunda Makmur digeser agar lahan plaza tetap kosong (ruko kini **68**), ditambah **tujuh label DOM transit** — satu `P&R Marunda` dan enam halte, badge `P`/`H`, LOD 520 unit, non-interaktif. Screenshot verifikasi Tahap 1–4 ada di [`docs/verification/screenshots/`](docs/verification/screenshots/). Lihat [docs/ROADMAP.md](docs/ROADMAP.md) untuk status per wilayah dan catatan batasan.

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

Perintah ini menjalankan satu skrip verifikasi statis (9.144 assertion) untuk 99 landmark: jumlah dan ID unik, kelengkapan metadata, ketersediaan builder, kelengkapan tombol tour, batas penyimpangan posisi terhadap proyeksi GPS, serta integritas dataset OSM, infill, dan transit Void B. Sejak F4, verifikasi juga mengunci gerbong kereta dua mesh tanpa bayangan dinamis, 193 tiang/lampu PJU sebagai dua `InstancedMesh`, pool 12 `PointLight`, shadow map statis, 647 kendaraan dalam delapan `InstancedMesh`, serta DPR adaptif yang menyinkronkan renderer dan composer. Check 40 mengunci perbaikan audit visual 2026-10-27: exclusion Danau Rawa Buaya, framing enam preset, material hangar Halim, fasad SCBD, dan atap Stasiun Tanjung Priok. Check 41 mengunci enam anchor Void C Tahap 1: rentang posisi, deviasi GPS ≤80 unit, builder, mapping `CityScene`, tombol tour, dan metadata edukatif. Check 42 mengunci dataset OSM Void C Tahap 2 (185 ruas, 478 titik, lisensi ODbL, proyeksi tanpa warp), tujuh nama jalan kunci, jarak maksimum 60 unit ke anchor, builder `buildVoidCMeruya()`, konektor akses, jembatan otomatis, dan mask koridor `isNearVoidCRoad`. Check 43 mengunci infill Tahap 3: urutan `buildVoidCInfill()` setelah jaringan jalan, lima `InstancedMesh` (rumah, ruko, atap, gudang, atap gudang), koridor ruko Ciledug/Joglo/Bojong, zona Kreo, mask dataset OSM, dan larangan `PointLight` serta material malam baru. Check 44 mengunci transit Void C Tahap 4: urutan `buildVoidCTransit()` setelah infill, Park-and-Ride Kembangan, empat feeder halte yang berlabuh pada jalan OSM (Meruya Ilir, Joglo Raya, Ciledug Raya, Puri Kembangan), tiga mesh gabungan + dua `InstancedMesh` pohon, serta larangan `PointLight` dan material malam baru. Check 45 mengunci enam anchor Void D Tahap 1: rentang posisi x/z, deviasi GPS ≤80 unit, builder dengan marker mesh, mapping `CityScene`, tombol tour, minimal tiga fakta edukatif, dan jarak minimum 70 unit antaranchor. Check 46 mengunci dataset OSM Void D Tahap 2: 201 ruas/590 titik, 31 waterway/156 titik, 19 poligon air/225 titik, lisensi ODbL, proyeksi tanpa warp, tujuh nama jalan kunci, jarak maksimum 60 unit ke keenam anchor, builder `buildVoidDPenjaringan()`, jembatan otomatis, delapan mesh `voidd-*`, serta larangan `PointLight` dan material malam baru. Check 47 mengunci infill Void D Tahap 3: urutan `buildVoidDInfill()` setelah jaringan, lima `InstancedMesh` (rumah, ruko, atap rumah, gudang, atap gudang), tujuh koridor ruko, 13 zona permukiman, dua klaster gudang, mask jalan/air/anchor/Pluit, batas koridor ruko sendiri, serta larangan `PointLight` dan material malam baru. Check 48 mengunci transit Void D Tahap 4: urutan `buildVoidDTransit()` setelah infill, Park-and-Ride TWA Angke Kapuk, enam feeder halte yang berlabuh pada jalan OSM (Pantai Indah Kapuk, TWA, Kapuk Raya, Kapuk Muara, Teluk Gong, Pluit Utara), tiga mesh gabungan + dua `InstancedMesh` pohon, serta larangan `PointLight` dan material malam baru. Check 49 mengunci enam anchor Void E Tahap 1: rentang posisi x/y/z, deviasi GPS ≤80 unit, builder dengan marker mesh, mapping `CityScene`, tombol tour #94–#99, minimal tiga fakta edukatif, jarak minimum 70 unit antaranchor, perluasan ground plane 4.800 unit, grid 4.400 unit/220 divisi, serta larangan `PointLight`. Check 50 mengunci dataset OSM Void E Tahap 2: 148 ruas/640 titik dan 23 waterway/252 titik dengan koordinat terbatas pada clip box, lisensi ODbL, proyeksi tanpa warp, sepuluh nama jalan kunci, lima nama waterway, lebar jalan per kelas, jarak maksimum 60 unit ke lima anchor (<85 unit untuk Rusunawa Nagrak), eksklusi jalur inspeksi Kanal Banjir Timur, serta larangan ruas yang menumpang badan kanal. Check 51 mengunci builder jaringan Void E Tahap 2: urutan `buildVoidECilincing()` setelah `buildVoidDTransit()`, impor dataset OSM, delapan mesh `voide-*`, konektor `Akses Rusunawa Nagrak` ke Jalan Komplek Militer, jembatan otomatis, PJU dan pohon tanpa `PointLight` serta material malam baru, statistik `voidEOsmStats` delapan draw call, dan mask `isNearVoidERoad` untuk infill Tahap 3. Check 52 mengunci infill Void E Tahap 3: urutan `buildVoidEInfill()` setelah jaringan, lima `InstancedMesh` `voide-*` (rumah, ruko, atap, gudang, atap gudang), empat koridor ruko, zona Cilincing/Kebantenan/Marunda/Rorotan/Sungai Tiram, klaster gudang KBN Cakung/Marunda/Cilincing industri, mask jalan/air/enam anchor, batas koridor ruko sendiri, statistik `voidEInfillStats` lima draw call, serta larangan `PointLight` dan material malam baru. Check 53 mengunci transit Void E Tahap 4: urutan `buildVoidETransit()` setelah infill dan sebelum `buildVoidBInfillAndIndustry()`, Park-and-Ride Marunda, enam feeder halte yang berlabuh pada jalan OSM (Marunda Empang, Jayapura, Medan, Komplek Militer, Cakung Cilincing Timur, Malaka IV HB), lima mesh `voide-transit-*`, statistik `voidETransitStats` lima draw call, reservasi lahan `transitReservations` pada infill, serta larangan `PointLight` dan material malam baru. Check 54 mengunci tujuh label DOM transit Void E: anchor P&R dan enam halte, badge `P`/`H`, rentang tampil 520 unit, gaya `.transit-pin` non-interaktif, dan penerusan `transitLabels` dari `main.js` ke `UIManager`. Ini bukan pengganti pengujian render atau performa di browser.

Hasil audit visual, statistik draw call per sudut pandang, dan daftar temuan P2/P3 ada di [docs/verification/2026-10-27-visual-audit.md](docs/verification/2026-10-27-visual-audit.md).

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
│   ├── ROADMAP.md              # Status terverifikasi & roadmap 9 Voids
│   └── verification/           # Audit visual 2026-10-27 & screenshot Void C Tahap 1–4, Void D Tahap 1–4, Void E Tahap 1–4
├── public/
│   └── models/                 # Slot folder untuk menyimpan file 3D .glb kustom
└── src/
    ├── main.js                 # Entry point & inisialisasi aplikasi
    ├── config/
    │   └── landmarks.js        # Konfigurasi koordinat spasial & metadata 99 landmark
    ├── data/
    │   ├── jakarta_osm.json    # Geometri OSM Jakarta (jalan, bangunan, air, taman, rel)
    │   ├── void_b_osm.js       # Jalan & Kanal Mookervaart OSM untuk Void B (ter-warp)
    │   ├── void_c_osm.js       # Jalan & Kali Angke OSM untuk Void C
    │   ├── void_d_osm.js       # Jalan, waterway & poligon air OSM untuk Void D
    │   └── void_e_osm.js       # Jalan & waterway OSM Cilincing–Marunda untuk Void E
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
