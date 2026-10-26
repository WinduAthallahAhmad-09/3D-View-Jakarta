# Roadmap & Status — Jakarta 3D View

Status terakhir diverifikasi: **2026-10-26**  
Repo: `WinduAthallahAhmad-09/3D-View-Jakarta` (branch `main`)

## Ringkasan terverifikasi

- **81 landmark anchor** (#01 Monas s.d. #81 Cengkareng Business City) di `src/config/landmarks.js`.
- **82 tombol tour** (81 landmark + tampilan aerial) di `index.html`; seluruh ID landmark memiliki tombol dan builder model.
- **Satu skrip verifikasi statis** di `test_landmarks.js`, dijalankan dengan `npm test`. Saat ini menjalankan 2.136 assertion yang memeriksa data, metadata, builder, tombol tour, batas deviasi posisi, serta integrasi dataset OSM Void B. Ini **bukan 33 unit test suite** dan belum mencakup render, interaksi, atau performa.
- Kawasan inti Jakarta Pusat, Jakarta Selatan, dan Jakarta Utara selesai.
- Jakarta Timur selesai 4 tahap.
- Void A (Jakarta Barat Tengah) selesai 4 tahap.
- Void B (Jakarta Barat Laut) selesai Tahap 1–2: 6 anchor #76–#81, Kanal Mookervaart, dan ekstensi Daan Mogot.

### Dataset OSM

`src/data/jakarta_osm.json` berisi 2.416 segmen jalan, 1.566 bangunan, 83 jalur air, 162 taman, dan 142 segmen rel. Cakupan koordinat scene: x **-794 s.d. 597**, z **-1.343 s.d. 815**.

`src/data/void_b_osm.js` berisi 106 ruas jalan (265 titik) dan 1 jalur air Kanal Mookervaart (29 titik), diekstrak dari OpenStreetMap pada 2026-10-26 (ODbL). Geometri sudah diproyeksikan ke scene lalu diwarp ke ruang anchor Void B:

```text
x_scene = 0.4575 * x_projected - 543.7
z_scene = 0.3829 * z_projected - 242.7
```

Warp mempertahankan enam anchor yang sudah ditempatkan manual (residu 8–20 unit) sekaligus menjaga topologi OSM. Dataset ini mencakup Jalan Daan Mogot (dengan median), Bumi Cengkareng Indah, Kalideres Permai, Rusunawa Pesakih, Kembangan Utama/Utara/Baru/Raya, Duri Kosambi Raya, Terminal Rawa Buaya, dan Daan Mogot Estate. Wilayah lain di luar kedua dataset dibangun secara prosedural.

Catatan regenerasi: ambil way jalan (`highway`) dan kanal (`waterway`, termasuk way **31951163** untuk Kali Mookervaart) dari Overpass API pada bbox selatan -6,28 / barat 106,62 / utara -6,08 / timur 106,82; proyeksikan setiap titik dengan origin Bundaran HI; terapkan warp di atas; lalu tulis ulang array `roads` dan `waterways` di `src/data/void_b_osm.js`.

## Master roadmap 9 Voids

| Wilayah | Cakupan | Status |
|---|---|---|
| Inti | Jakarta Pusat, Jakarta Selatan, Jakarta Utara | Selesai |
| Jakarta Timur | Halim/TMII/Velodrome/Cawang/Lubang Buaya, KBT, infill, transit | Selesai 4 tahap |
| Void A | Kedoya, Greenville, Pos Pengumben, Koridor 8 TransJakarta | Selesai 4 tahap |
| Void B | Tahap 1: 6 anchor Kalideres–Cengkareng | Selesai |
| Void B | Tahap 2: Kanal Mookervaart & Daan Mogot | Selesai |
| Void B | Tahap 3: infill permukiman & industri | Direncanakan |
| Void B | Tahap 4: TransJakarta Koridor 3 & KA Bandara | Direncanakan |
| Void C | Meruya, Kembangan Selatan, Joglo, Kreo | Direncanakan |
| Void D | Kamal Muara, Teluk Gong, Kapuk, Muara Baru | Direncanakan |
| Void E | Cilincing, Marunda, Rorotan, KBN Cakung | Direncanakan |
| Void F | Cakung, Klender, Duren Sawit, Buaran | Direncanakan |
| Void G | Pasar Rebo, Ciracas, Cipayung, Cibubur | Direncanakan |
| Void H | Pasar Minggu, Lenteng Agung, Jagakarsa, Ragunan | Direncanakan |
| Void I | Bintaro, Petukangan, Ulujami, Gandaria Selatan | Direncanakan |

## Catatan Void B

- Enam anchor berada di x **-1.050 s.d. -1.320**, di luar cakupan `jakarta_osm.json` (x minimum -794). Sejak Tahap 2, kawasan ini memakai dataset terpisah `void_b_osm.js` yang diwarp ke ruang anchor.
- Koridor Jl. Daan Mogot prosedural berakhir di x sekitar -1.250; ekstensi OSM menyambungnya hingga x **-1.500** dengan median. Rute TransJakarta Koridor 3 kini mencapai **(-1.320, -450)**.
- Kanal Mookervaart dibangun dari way OSM 31951163, lebar 20 unit, dengan dinding beton, jalur inspeksi tepian, PJU, dan vegetasi. Ujung timurnya disambungkan ke Kali Angke.
- Jembatan dibuat otomatis pada setiap perpotongan jalan dengan kanal (deck selebar jalan + 12 unit). Tiga konektor prosedural melengkapi akses RSUD Cengkareng, Cengkareng Business City, dan Danau Rawa Buaya karena OSM tidak menyediakan jalan penghubung di titik tersebut.
- Keenam anchor kini memiliki akses jalan; urban fabric permukiman/industri di sekitarnya tetap menjadi pekerjaan Tahap 3.
- PJU baru memakai material emissive bersama dan digabung ke dalam mesh, tanpa `PointLight` tambahan. Vegetasi dirender sebagai dua `InstancedMesh`; total penambahan Tahap 2 adalah 10 draw call.
- Shadow frustum kini mengikuti target kamera dengan snapping 40 unit, sehingga cakupan bayangan konsisten di seluruh kota. Grid diperluas menjadi **3.000 unit / 150 divisi** (±1.500) untuk mencakup Void B.

## Kebijakan akurasi posisi

`projectGpsToScene()` adalah kerangka referensi, tetapi sebagian posisi landmark sengaja disesuaikan agar selaras dengan jalan dan geometri prosedural. Pada audit 2026-10-26:

- 25 dari 81 landmark menyimpang lebih dari 30 unit dari proyeksi GPS.
- Deviasi terbesar: Terminal Kalideres 392 unit (±3,1 km), Cengkareng Business City 344 unit, Mall Daan Mogot 338 unit.
- `npm test` menjaga deviasi maksimum 450 unit untuk menangkap kesalahan input tanpa menolak penyesuaian artistik.

Kebijakan ini didokumentasikan pula di header `src/config/landmarks.js`.

## Klaim yang belum terverifikasi

- **"60 FPS" belum tercapai pada perangkat uji.** Baseline runtime 2026-10-26 di Chrome (viewport 831×785, Intel UHD Graphics via ANGLE/D3D11): pandangan Danau Rawa Buaya **13,9 FPS / 411 draw call per frame**, Bundaran HI **9,8 FPS / 1.206 draw call per frame**. Penambahan Tahap 2 hanya 10 draw call, sehingga bukan penyebab utama; optimasi menyeluruh tetap menjadi gerbang performa F4. Beban statis mencakup 647 kendaraan (614 rute + 33 roundabout), sekitar 192 PointLight PJU, dan 81 label DOM.
- **"33/33 unit test suites" tidak didukung repo.** Yang tersedia adalah satu skrip verifikasi statis.
- Belum ada tes render, interaksi kamera, atau regresi visual.

## Utang teknis lintas-cutting

Catatan ini di luar cakupan pass fondasi dan belum diperbaiki:

- Origin Google 3D Tiles memakai Monas, sedangkan origin kota memakai Bundaran HI (selisih ±2,2 km).
- Zoom pinch di perangkat sentuh nonaktif karena `OrbitControls.enableZoom = false` dan zoom hanya ditangani lewat event wheel.
- Server statis lokal belum memvalidasi path hasil `decodeURI` dan belum membatasi akses ke root proyek.
- Pembangunan kota awal berjalan sinkron tanpa indikator progres.

## Cara verifikasi

```bash
npm test
npm run dev   # http://localhost:8000
```

Tes hanya memvalidasi konsistensi data dan integrasi statis. Verifikasi visual dan performa harus dilakukan di browser pada perangkat target.
