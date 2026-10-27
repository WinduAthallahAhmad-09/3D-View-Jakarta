# Roadmap & Status — Jakarta 3D View

Status terakhir diverifikasi: **2026-10-27**  
Repo: `WinduAthallahAhmad-09/3D-View-Jakarta` (branch `main`)

## Ringkasan terverifikasi

- **81 landmark anchor** (#01 Monas s.d. #81 Cengkareng Business City) di `src/config/landmarks.js`.
- **82 tombol tour** (81 landmark + tampilan aerial) di `index.html`; seluruh ID landmark memiliki tombol dan builder model.
- **Satu skrip verifikasi statis** di `test_landmarks.js`, dijalankan dengan `npm test`. Saat ini menjalankan 2.282 assertion yang memeriksa data, metadata, builder, tombol tour, batas deviasi posisi, serta integrasi dataset OSM, infill, dan transit Void B. Sejak F4, skrip juga memastikan lima builder gerbong KRL/MRT/KAI/LRT memakai `bakeRailCarGroup`, PJU memakai dua `InstancedMesh` dengan pool 12 `PointLight`, dan shadow map berjalan statis dengan refresh terarah. Ini **bukan 33 unit test suite** dan belum mencakup render, interaksi, atau performa.
- Kawasan inti Jakarta Pusat, Jakarta Selatan, dan Jakarta Utara selesai.
- Jakarta Timur selesai 4 tahap.
- Void A (Jakarta Barat Tengah) selesai 4 tahap.
- Void B (Jakarta Barat Laut) selesai Tahap 1–4: 6 anchor #76–#81, Kanal Mookervaart, ekstensi Daan Mogot, infill permukiman dan kawasan industri, serta integrasi halte TransJakarta Koridor 3 dan viaduk KA Bandara.
- F4 Tahap 1 (optimasi performa) selesai: geometri 76 gerbong kereta digabung menjadi dua mesh per gerbong (badan berwarna per-vertex + kaca), menurunkan draw call pandangan Bundaran HI dari **1.531 menjadi 603** (−60,6%) pada perangkat uji.
- F4 Tahap 2 selesai: 193 tiang dan lampu PJU menjadi dua `InstancedMesh`, pool 12 `PointLight` mengikuti 12 lampu terdekat kamera, dan shadow map statis. Draw call siang di Bundaran HI turun **603 → 556**; FPS indikatif naik **10,7 → 20,6** pada viewport 531×553 (Intel UHD), dan hanya 1 `PointLight` aktif saat siang.

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
| Void B | Tahap 3: infill permukiman & industri | Selesai |
| Void B | Tahap 4: TransJakarta Koridor 3 & KA Bandara | Selesai |
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
- Keenam anchor kini memiliki akses jalan. Tahap 3 mengisi urban fabric di sekitarnya: **134 rumah** kampung/perumahan beratap pelana, **73 ruko** di koridor sekunder dan akses industri, serta **23 gudang** logistik di klaster industri Kalideres–Cengkareng.
- Dua akses kawasan industri ditambahkan: **Akses Kawasan Industri Kalideres** (x -1.440, z -446 s.d. -700) dan **Akses Logistik Cengkareng** (x -1.200 lalu ke timur hingga -1.030 pada z -690). Keduanya memakai aspal, bahu beton, dan pohon peneduh.
- Penempatan bangunan memakai mask koridor seluruh jalan OSM, kanal, konektor Tahap 2, dan akses industri, ditambah enam exclusion zone anchor. Ruko di sepanjang jalan OSM mengikuti rantai way yang disambung terlebih dahulu agar deret tidak terputus di setiap persimpangan.
- Seluruh massa bangunan dirender sebagai lima `InstancedMesh` (badan rumah, ruko, atap rumah+ruko, gudang, atap gudang), ditambah dua mesh jalan/bahu hasil merge dan dua `InstancedMesh` pohon. Total penambahan Tahap 3 adalah **9 draw call** tanpa `PointLight` baru.
- PJU Tahap 2 memakai material emissive bersama dan digabung ke dalam mesh, tanpa `PointLight` tambahan. Vegetasi Tahap 2 dirender sebagai dua `InstancedMesh`; total penambahan Tahap 2 adalah 10 draw call.
- Tahap 4 menambahkan **Halte Rawa Buaya** (x ≈ -1.140) dan **Halte Pesakih** (x ≈ -1.190) di bahu selatan Jl. Daan Mogot, masing-masing berupa peron, kanopi, dinding kaca, dan empat kolom baja yang digabung ke lima mesh.
- Viaduk **KA Bandara** bercabang dari Stasiun Rawa Buaya sepanjang **759 unit** dengan kemiringan bertahap y 0,6 → 8,0, melintasi Kali Mookervaart lewat jembatan girder, dan berakhir di portal gerbang setinggi 15 unit bertanda `KA BANDARA`. Jalur dirender dari sampel kurva: deck, rel, kabel kontak, tiang katener, dan pier yang otomatis menghindari kanal. Dua kereta Railink dua gerbong berjalan bolak-balik di jalur ganda.
- Seluruh elemen transit Tahap 4 digabung menjadi **6 mesh statis** (beton, kanopi, kaca, baja halte, baja viaduk, papan portal) ditambah **8 mesh gerbong** (2 kereta × 2 gerbong × badan+kaca), sehingga penambahannya **14 draw call** dan **nol `PointLight`**. Setiap gerbong memakai geometri gabungan dengan warna per-vertex.
- Jarak bebas viaduk terverifikasi programatik: minimum **2,34 unit** ke atap gudang kawasan industri (koridor x ≈ -1.040 s.d. -1.022) dan **10,41 unit** ke RSUD Cengkareng; halte berjarak lebih dari 8 unit dari Danau Rawa Buaya dan 25 unit dari Mall Daan Mogot.
- Shadow frustum kini mengikuti target kamera dengan snapping 40 unit, sehingga cakupan bayangan konsisten di seluruh kota. Grid diperluas menjadi **3.000 unit / 150 divisi** (±1.500) untuk mencakup Void B.

## Catatan F4 — Optimasi performa

F4 dibagi menjadi tiga tahap yang diverifikasi dan di-commit terpisah. Keputusan yang disetujui: bayangan dibuat statis dan kereta tidak lagi menjadi shadow caster.

- **Tahap 1 — konsolidasi gerbong kereta (selesai).** Lima builder gerbong (KRL, MRT Ratangga, KAI Antarkota, LRT Jabodebek, LRT Jakarta) kini memanggil `LandmarkModels.bakeRailCarGroup()`; geometri anak digabung menjadi **satu mesh badan berwarna per-vertex** dan **satu mesh kaca**, sehingga 76 gerbong pada 22 rangkaian hanya memakai **152 mesh**. Nama mesh `rail-car-body`/`rail-car-glass` dan penandaan material `rail-glass` ikut diverifikasi. Seluruh `castShadow = true` pada gerbong dihapus.
- Verifikasi runtime 2026-10-27 (Chrome, viewport 531×553, Intel UHD Graphics via ANGLE/D3D11): **603 draw call** pada pandangan Bundaran HI (sebelumnya 1.531), tiga kali render berturut-turut identik; 76/76 gerbong tepat dua mesh, 0 mesh tanpa nama, 0 shadow caster kereta, 0 `PointLight` di dalam kereta, dan konsol tanpa error. Scene tetap memuat 6.143 mesh, 1.067 shadow caster, dan 194 `PointLight`.
- **Tahap 2 — lampu dan bayangan (selesai).** `createStreetLamp` kini hanya mencatat transformasi; `buildStreetLampInstances()` membentuk **dua `InstancedMesh`** untuk 193 tiang dan 193 lampu, dan `buildPjuLightPool()` menyiapkan **12 `PointLight`**. Pool mengikuti 12 lampu terdekat kamera dan hanya diperbarui setelah kamera bergerak ≥15 unit; siang 0 lampu menyala, golden 12 × 0,6, malam 12 × 1,8. `renderer.shadowMap.autoUpdate = false`; shadow map 1024² dibakar sekali saat inisialisasi lalu diperbarui saat preset waktu, fokus bayangan (snap 40 unit), atau toggle Google Tiles berubah. Kereta dan kendaraan tidak menjadi shadow caster.
- Verifikasi runtime Tahap 2 (2026-10-27, viewport 531×553, Intel UHD): 193/193 instance per mesh, pool tepat 12 lampu terdekat (43,2–252,7 unit dari kamera), 0 lampu pool menyala saat siang (total 1 `PointLight` = Monas), 12 menyala saat golden/malam, `needsUpdate` shadow kembali `false` setelah render pertama, konsol tanpa error. Draw call siang **603 → 556**; FPS indikatif **10,7 → 20,6**.
- **Tahap 3 — kendaraan dan resolusi adaptif (belum dikerjakan).** Rencana: `InstancedMesh` untuk 647 kendaraan, DPR adaptif menuju target 60 FPS, lalu verifikasi mode malam dan bloom.

## Kebijakan akurasi posisi

`projectGpsToScene()` adalah kerangka referensi, tetapi sebagian posisi landmark sengaja disesuaikan agar selaras dengan jalan dan geometri prosedural. Pada audit 2026-10-26:

- 25 dari 81 landmark menyimpang lebih dari 30 unit dari proyeksi GPS.
- Deviasi terbesar: Terminal Kalideres 392 unit (±3,1 km), Cengkareng Business City 344 unit, Mall Daan Mogot 338 unit.
- `npm test` menjaga deviasi maksimum 450 unit untuk menangkap kesalahan input tanpa menolak penyesuaian artistik.

Kebijakan ini didokumentasikan pula di header `src/config/landmarks.js`.

## Klaim yang belum terverifikasi

- **"60 FPS" belum tercapai pada perangkat uji.** Baseline runtime 2026-10-26 di Chrome (viewport 831×785, Intel UHD Graphics via ANGLE/D3D11): pandangan Danau Rawa Buaya **13,9 FPS / 411 draw call per frame**, Bundaran HI **9,8 FPS / 1.206 draw call per frame**. Baseline ini diambil sebelum Tahap 3; Tahap 2 menambah 10 draw call, Tahap 3 menambah 9 draw call, dan Tahap 4 menambah 14 draw call (6 mesh transit + 8 mesh gerbong), sehingga bukan penyebab utama. F4 Tahap 1–2 menurunkan draw call siang Bundaran HI menjadi **556** dan FPS indikatif menjadi **20,6** (viewport 531×553). Angka FPS belum diklaim karena pengukuran pada Intel UHD sangat bervariasi antar-run; Tahap 3 masih diperlukan. Beban statis mencakup 647 kendaraan (614 rute + 33 roundabout), 193 PJU sebagai 2 `InstancedMesh` + pool 12 `PointLight`, dan 81 label DOM.
- **Verifikasi visual Tahap 3–4 belum dilakukan lewat screenshot browser.** Permukaan in-app browser berstatus `hidden` saat verifikasi, sehingga penempatan diperiksa secara programatik di dalam halaman. Tahap 3: jumlah instance, tidak ada tumpang-tindih AABB rumah/gudang, dan jarak bebas terhadap jalan OSM (rumah 5,4 unit, ruko 1,4 unit, gudang 32,7 unit). Tahap 4: enam mesh transit, dua kereta KA Bandara (2 gerbong masing-masing), panjang kurva 759 unit tanpa sampel NaN, jarak bebas viaduk ke gudang ≥2,34 unit dan ke RSUD 10,41 unit, serta papan portal bertekstur `KA BANDARA`. Pemeriksaan visual manual masih diperlukan.
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
