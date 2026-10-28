# Roadmap & Status — Jakarta 3D View

Status terakhir diverifikasi: **2026-10-28**  
Repo: `WinduAthallahAhmad-09/3D-View-Jakarta` (branch `main`)

## Ringkasan terverifikasi

- **87 landmark anchor** (#01 Monas s.d. #87 Kampung Makan Joglo) di `src/config/landmarks.js`.
- **88 tombol tour** (87 landmark + tampilan aerial) di `index.html`; seluruh ID landmark memiliki tombol dan builder model.
- **Satu skrip verifikasi statis** di `test_landmarks.js`, dijalankan dengan `npm test`. Saat ini menjalankan 3.954 assertion yang memeriksa data, metadata, builder, tombol tour, batas deviasi posisi, serta integrasi dataset OSM, infill, dan transit Void B. Sejak F4, skrip juga memastikan lima builder gerbong KRL/MRT/KAI/LRT memakai `bakeRailCarGroup`, PJU memakai dua `InstancedMesh` dengan pool 12 `PointLight`, 647 kendaraan memakai delapan `InstancedMesh`, shadow map berjalan statis dengan refresh terarah, dan DPR adaptif menyinkronkan renderer serta composer. Check 40 mengunci audit visual 2026-10-27: exclusion Danau Rawa Buaya, framing enam preset, material hangar Halim, metalness fasad SCBD, serta atap Stasiun Tanjung Priok. Check 41 mengunci enam anchor Void C Tahap 1: rentang posisi, deviasi GPS ≤80 unit, builder, mapping `CityScene`, tombol tour, dan minimal tiga fakta edukatif. Check 42 mengunci dataset OSM Void C Tahap 2: 185 ruas/478 titik dengan koordinat terbatas pada clip box, lisensi ODbL, proyeksi tanpa warp, tujuh nama jalan kunci, jarak maksimum 60 unit ke enam anchor, builder `buildVoidCMeruya()`, dua konektor akses, jembatan otomatis, dan minimal empat pemakaian mask `isNearVoidCRoad`. Ini **bukan 33 unit test suite** dan belum mencakup render, interaksi, atau performa.
- Kawasan inti Jakarta Pusat, Jakarta Selatan, dan Jakarta Utara selesai.
- Jakarta Timur selesai 4 tahap.
- Void A (Jakarta Barat Tengah) selesai 4 tahap.
- Void B (Jakarta Barat Laut) selesai Tahap 1–4: 6 anchor #76–#81, Kanal Mookervaart, ekstensi Daan Mogot, infill permukiman dan kawasan industri, serta integrasi halte TransJakarta Koridor 3 dan viaduk KA Bandara.
- Void C Tahap 1 (Jakarta Barat) selesai: enam anchor #82–#87 (Universitas Mercu Buana, RSUD Kembangan, Pasar Meruya, Stasiun Kembangan, Bendungan Polor, Kampung Makan Joglo) dengan model arsitektur, tombol tour, exclusion zone, dan verifikasi visual siang/malam.
- Void C Tahap 2 (Jakarta Barat) selesai 2026-10-28: dataset OSM **185 ruas jalan / 478 titik**, segmen Kali Angke, jembatan otomatis pada perpotongan jalan–air, dua konektor akses, PJU, jalur inspeksi, dan vegetasi InstancedMesh; 7 draw call tambahan tanpa `PointLight` baru.
- F4 Tahap 1 (optimasi performa) selesai: geometri 76 gerbong kereta digabung menjadi dua mesh per gerbong (badan berwarna per-vertex + kaca), menurunkan draw call pandangan Bundaran HI dari **1.531 menjadi 603** (−60,6%) pada perangkat uji.
- F4 Tahap 2 selesai: 193 tiang dan lampu PJU menjadi dua `InstancedMesh`, pool 12 `PointLight` mengikuti 12 lampu terdekat kamera, dan shadow map statis. Draw call siang di Bundaran HI turun **603 → 556**; FPS indikatif naik **10,7 → 20,6** pada viewport 531×553 (Intel UHD), dan hanya 1 `PointLight` aktif saat siang.
- **Gerbang verifikasi visual 2026-10-27 lulus**: audit 11 siang + 3 malam, 0 P0, 9 P1 diperbaiki, 14 baseline screenshot tersimpan. Void C Tahap 1 dan Tahap 2 kemudian dilaksanakan dan diverifikasi pada 2026-10-28.

### Dataset OSM

`src/data/jakarta_osm.json` berisi 2.416 segmen jalan, 1.566 bangunan, 83 jalur air, 162 taman, dan 142 segmen rel. Cakupan koordinat scene: x **-794 s.d. 597**, z **-1.343 s.d. 815**.

`src/data/void_b_osm.js` berisi 106 ruas jalan (265 titik) dan 1 jalur air Kanal Mookervaart (29 titik), diekstrak dari OpenStreetMap pada 2026-10-26 (ODbL). Geometri sudah diproyeksikan ke scene lalu diwarp ke ruang anchor Void B:

```text
x_scene = 0.4575 * x_projected - 543.7
z_scene = 0.3829 * z_projected - 242.7
```

Warp mempertahankan enam anchor yang sudah ditempatkan manual (residu 8–20 unit) sekaligus menjaga topologi OSM. Dataset ini mencakup Jalan Daan Mogot (dengan median), Bumi Cengkareng Indah, Kalideres Permai, Rusunawa Pesakih, Kembangan Utama/Utara/Baru/Raya, Duri Kosambi Raya, Terminal Rawa Buaya, dan Daan Mogot Estate. Wilayah lain di luar kedua dataset dibangun secara prosedural.

Catatan regenerasi: ambil way jalan (`highway`) dan kanal (`waterway`, termasuk way **31951163** untuk Kali Mookervaart) dari Overpass API pada bbox selatan -6,28 / barat 106,62 / utara -6,08 / timur 106,82; proyeksikan setiap titik dengan origin Bundaran HI; terapkan warp di atas; lalu tulis ulang array `roads` dan `waterways` di `src/data/void_b_osm.js`.

`src/data/void_c_osm.js` berisi **185 ruas jalan (478 titik)** untuk kawasan Meruya–Kembangan–Joglo, diekstrak dari OpenStreetMap pada 2026-10-28 (ODbL) melalui mirror Overpass `overpass.openstreetmap.fr`, bbox selatan -6,245 / barat 106,705 / utara -6,145 / timur 106,785. Berbeda dengan Void B, geometri **tidak diwarp**: titik diproyeksikan langsung dengan `projectGpsToScene()` lalu dipotong ke clip box x -1.440 s.d. -860, z -560 s.d. 580. Kelas jalan yang diambil: primary, secondary, tertiary, unclassified, dan residential dari daftar putih ruas yang relevan; koridor milik builder lain dikecualikan lewat daftar hitam nama. Dataset menyimpan metadata sumber, lisensi, tanggal ekstraksi, konstanta proyeksi, dan tingkat simplifikasi Douglas–Peucker 2,5 unit. Lebar jalan: primary 18, secondary 14, tertiary 11, unclassified 9, residential 8 unit.

Catatan regenerasi Void C: unduh way `highway` pada bbox di atas, buang ruas di luar daftar putih/kelas yang tidak dipakai, potong ke clip box, sederhanakan dengan DP 2,5, buang segmen hasil potongan yang lebih pendek dari 10 unit (kandidat mentah minimal 14 unit), dan deduplikasi way dengan nama+kelas sama bila selisih panjang <10 dan endpoint berjarak <5 unit pada salah satu orientasi. Empat tapak landmark (UMB, RSUD, Pasar Meruya, Joglo) di-carve dari polylines agar jalan tidak melintasi pelat tapak; stub depan tapak dipertahankan. Jangan menyambung (stitch) way OSM — duplikasi/dual carriageway menghasilkan polylines melingkar sendiri.

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
| Void C | Tahap 1: 6 anchor Meruya, Kembangan & Joglo | Selesai |
| Void C | Tahap 2: jalan, air & infrastruktur kawasan | Selesai |
| Void C | Tahap 3: infill urban fabric termasuk Kreo | Direncanakan |
| Void C | Tahap 4: transit kawasan | Direncanakan |
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

## Catatan Void C

Void C mencakup Meruya, Kembangan Selatan, Joglo, dan Kreo. Tahap 1 (selesai 2026-10-28) menempatkan enam anchor #82–#87 pada rentang x **-955 s.d. -1347** dan z **-437 s.d. 202**, seluruhnya di luar cakupan `jakarta_osm.json` (x minimum -794).

- **#82 Universitas Mercu Buana** (-1325, 133): menara rektorat berfasad kaca, gedung fakultas, plaza, auditorium, kantin, dan parkir.
- **#83 RSUD Kembangan** (-1347, -63): menara rawat inap berpita kaca hijau, podium poliklinik, kanopi IGD, dan parkir ambulans terpisah.
- **#84 Pasar Meruya** (-1298, 36): hall beratap metal melengkung, deret kios basah/kering, los, gerbang pasar, dan ruko kuliner.
- **#85 Stasiun Kembangan** (-955, -437): peron ganda berkanopi tosca, JPO, papan nama, dan jalur ganda yang disejajarkan dengan rel KRL eksisting pada z ≈ -442.
- **#86 Bendungan Polor** (-970, 168): pintu air, balok hoist, jembatan inspeksi, dan rumah operator di atas segmen Kali Angke yang sudah dimodelkan (z 136–200). Muka air dinaikkan ke y 1,3 agar tidak z-fighting dengan muka air sungai (y 1,2).
- **#87 Kampung Makan Joglo** (-1199, 202): gerbang, deret warung bertingkat atap seng, panggung, dan lampu gantung.
- Tiga exclusion zone mencegah bangunan prosedural menimpa anchor: badan Kali Angke (|x + 970| < 16) pada deret permukiman barat, koridor Stasiun Kembangan (|x + 955| < 52 dan |z + 437| < 34) pada deret gudang Daan Mogot, serta area Bendungan Polor (|x + 970| < 36 dan |z - 168| < 44) pada ruko Pos Pengumben.
- **Verifikasi runtime** (Chrome headless 156 SwiftShader, viewport 1280×800, DPR 1, siang + malam): 0 error konsol, keenam label masuk frame dengan opacity 1. Draw call siang: UMB **240**, RSUD **98**, Pasar **230**, Stasiun **164**, Bendungan **547**, Joglo **538**, aerial Void C **903**; triangle 87.285–218.541. Dua belas screenshot tersimpan di `docs/verification/screenshots/voidc-*.png`.
- **P1 yang diperbaiki saat verifikasi:** Bendungan Polor semula di z 207 (di luar ujung sungai) dan tertutup ruko — dipindah ke z 168 dengan kamera menyusur sungai; rumah sempat berdiri di badan Kali Angke — ditutup exclusion; Stasiun Kembangan sempat tertanam di massa gudang — disejajarkan ke rel dan koridornya dibersihkan; kamera Pasar Meruya dan Joglo semula terlalu dekat sehingga bangunan terpotong — digeser mundur.
- **P2 terbuka:** anchor baru belum terdaftar pada `nightMaterials`, sehingga pandangan malam hanya menampilkan siluet gelap dan lampu Joglo; setara dengan temuan malam audit 2026-10-27. Kandidat perbaikan bersama Tahap 4.
- **Belum diverifikasi:** interaksi klik drawer per anchor baru dan FPS pada perangkat nyata; draw call di atas diukur pada SwiftShader.

### Void C Tahap 2 — jalan, air & infrastruktur

Tahap 2 (selesai 2026-10-28) membangun jaringan jalan kawasan dari `src/data/void_c_osm.js` di dalam `buildVoidCMeruya()`, setelah Tahap 1.

- 185 ruas jalan OSM dirender sebagai slab aspal (material `0x3b4a5f`) dengan bahu beton bertekstur sidewalk (`0xb9c4d2`); lebar jalan mengikuti kelasnya. Dua konektor prosedural menambal akses yang tidak ada di OSM: **Akses Stasiun Kembangan** (lebar 10) menuju forecourt selatan tanpa melintasi rel, dan **Akses Bendungan Polor** (lebar 8).
- **Kali Angke** dimodelkan ulang sebagai jalur air lebar 21 unit pada polyline (-970, 200) → (-970, -30) → (-950, -220) → (-890, -420), dengan jalur inspeksi selebar 3,4 unit di kedua tepian pada offset 13,5 unit.
- Jembatan dibuat otomatis untuk setiap perpotongan segmen jalan dengan Kali Angke (dedupe radius 12): deck selebar jalan + 12 unit, kedalaman 24, tinggi 0,7, dan dua balok girder. Perpotongan di zona Bendungan Polor (|x + 970| < 16 dan |z - 168| < 18) dilewati karena sudah ditangani anchor #86.
- PJU dipasang dua sisi pada lima koridor utama (Jl. Meruya Ilir, Jl. Meruya Selatan, Jl. Joglo Raya, Jl. Kembangan Barat, Jl. Raya Kembangan Selatan) setiap 95 unit pada offset setengah lebar + 1,4; jalur inspeksi Kali Angke setiap 130 unit. Lampu memakai material emissive bersama `pju-bulb` yang didorong ke `glowMaterials`, tanpa `PointLight` baru.
- Vegetasi dirender sebagai dua `InstancedMesh` (trunk dan foliage): lima koridor utama dua sisi setiap 72 unit pada offset setengah lebar + 6, tepian Kali Angke setiap 54 unit pada offset setengah lebar + 12, dengan dedupe radius 7.
- Seluruh geometri statis digabung menjadi **5 mesh** (jalan, bahu, jembatan, tiang lampu, bulb lampu) ditambah **2 `InstancedMesh`** pohon, sehingga penambahan Tahap 2 adalah **7 draw call** dan **nol `PointLight`**.
- Mask koridor `isNearVoidCRoad(x, z, clearance)` menjaga bangunan prosedural lama tidak menimpa jalan baru: deret permukiman clearance 16, gudang 26, ruko Pos Pengumben 22.
- **Verifikasi runtime** (Chrome headless 156 SwiftShader, viewport 1280×800, DPR 1): 0 error konsol, ketujuh label masuk frame. Draw call siang: aerial Void C **926** (234.829 triangle), UMB **257** (106.945), RSUD **114** (126.279), Pasar **261** (128.578), Stasiun **177** (134.355), Bendungan **590** (154.724), Joglo **560** (177.683). Statistik malam tidak valid karena pass bloom menimpa `renderer.info`. Sepuluh screenshot tersimpan di `docs/verification/screenshots/voidc2-*.png`.
- **P1 yang diperbaiki saat verifikasi:** jalan awalnya terbaca seperti wireframe putih di atas tanah gelap — warna aspal dinaikkan dari `0x1e293b` ke `0x3b4a5f` dan bahu ditoning `0xb9c4d2`; jalan sempat memotong pelat tapak UMB, RSUD, Pasar Meruya, dan Joglo — diperbaiki dengan carve persegi pada dataset; penyambungan way sempat menghasilkan polylines melingkar — stitching dihapus; way duplikat menyisakan slab bertumpuk — dedupe endpoint 5 unit.
- **Belum diverifikasi:** interaksi klik drawer pada jalan baru (mask bukan objek interaktif), FPS perangkat nyata, dan kepadatan lalu lintas di jalan kawasan.

## Catatan F4 — Optimasi performa

F4 dibagi menjadi tiga tahap yang diverifikasi dan di-commit terpisah. Keputusan yang disetujui: bayangan dibuat statis dan kereta tidak lagi menjadi shadow caster.

- **Tahap 1 — konsolidasi gerbong kereta (selesai).** Lima builder gerbong (KRL, MRT Ratangga, KAI Antarkota, LRT Jabodebek, LRT Jakarta) kini memanggil `LandmarkModels.bakeRailCarGroup()`; geometri anak digabung menjadi **satu mesh badan berwarna per-vertex** dan **satu mesh kaca**, sehingga 76 gerbong pada 22 rangkaian hanya memakai **152 mesh**. Nama mesh `rail-car-body`/`rail-car-glass` dan penandaan material `rail-glass` ikut diverifikasi. Seluruh `castShadow = true` pada gerbong dihapus.
- Verifikasi runtime 2026-10-27 (Chrome, viewport 531×553, Intel UHD Graphics via ANGLE/D3D11): **603 draw call** pada pandangan Bundaran HI (sebelumnya 1.531), tiga kali render berturut-turut identik; 76/76 gerbong tepat dua mesh, 0 mesh tanpa nama, 0 shadow caster kereta, 0 `PointLight` di dalam kereta, dan konsol tanpa error. Scene tetap memuat 6.143 mesh, 1.067 shadow caster, dan 194 `PointLight`.
- **Tahap 2 — lampu dan bayangan (selesai).** `createStreetLamp` kini hanya mencatat transformasi; `buildStreetLampInstances()` membentuk **dua `InstancedMesh`** untuk 193 tiang dan 193 lampu, dan `buildPjuLightPool()` menyiapkan **12 `PointLight`**. Pool mengikuti 12 lampu terdekat kamera dan hanya diperbarui setelah kamera bergerak ≥15 unit; siang 0 lampu menyala, golden 12 × 0,6, malam 12 × 1,8. `renderer.shadowMap.autoUpdate = false`; shadow map 1024² dibakar sekali saat inisialisasi lalu diperbarui saat preset waktu, fokus bayangan (snap 40 unit), atau toggle Google Tiles berubah. Kereta dan kendaraan tidak menjadi shadow caster.
- Verifikasi runtime Tahap 2 (2026-10-27, viewport 531×553, Intel UHD): 193/193 instance per mesh, pool tepat 12 lampu terdekat (43,2–252,7 unit dari kamera), 0 lampu pool menyala saat siang (total 1 `PointLight` = Monas), 12 menyala saat golden/malam, `needsUpdate` shadow kembali `false` setelah render pertama, konsol tanpa error. Draw call siang **603 → 556**; FPS indikatif **10,7 → 20,6**.
- **Tahap 3 — kendaraan dan resolusi adaptif (selesai).** `createVehicleMesh` dihapus; 647 kendaraan (421 mobil, 190 bus, 36 truk) kini dirender oleh **delapan `InstancedMesh`**: badan mobil, badan bus, kabin/chassis/kontainer truk, dan tiga mesh lampu gabungan berwarna per-vertex. Geometri lokal dibakar ke tiap part, warna per instance untuk badan/kabin/kontainer, `DynamicDrawUsage`, `frustumCulled = false`, tanpa shadow caster maupun `PointLight` baru. `updateTraffic` menulis satu matriks per kendaraan ke seluruh part-nya. DPR kini adaptif: `applyAdaptiveResolution` menurunkan pixel ratio 0,1 saat FPS < 48 dan menaikkannya saat FPS > 57, dengan lantai 0,6 dan batas `computeBasePixelRatio()`; perubahan ratio diteruskan ke renderer dan composer bloom, dan resize memakai helper yang sama.
- Verifikasi runtime Tahap 3 (2026-10-27, viewport 531×553, Intel UHD): 647 state kendaraan (421/190/36), delapan mesh instance dengan flag benar, draw call siang **556 → 329**, bloom malam aktif (strength 1,15; pool 12 lampu @1,8; 13 `PointLight` aktif), shadow map tetap statis (`needsUpdate` kembali `false` setelah render), dan konsol tanpa error selain peringatan Tailwind CDN. Matriks, rotasi, warna per instance, serta pergerakan kendaraan diverifikasi programatik; FPS belum diklaim karena permukaan browser uji berstatus `hidden`.

## Catatan verifikasi visual 2026-10-27

Gerbang sebelum Void C: audit 11 sudut pandang siang dan 3 malam di Chrome headless 156 (SwiftShader), viewport 1280×800, DPR 1. Laporan lengkap dan tabel statistik ada di [`docs/verification/2026-10-27-visual-audit.md`](verification/2026-10-27-visual-audit.md); 14 screenshot baseline ada di [`docs/verification/screenshots/`](verification/screenshots/).

- **P0: tidak ada.** Aplikasi memuat dan merender semua sudut pandang tanpa error konsol.
- **Sembilan P1 diperbaiki dan diverifikasi ulang:** F-01 bangunan di badan Danau Rawa Buaya dihapus lewat exclusion zone; F-02–F-07 preset Monas, Daan Mogot, Kelapa Gading, Halim, Rawa Buaya, dan SCBD diperbaiki agar landmark utuh dan label terlihat; F-08 metalness fasad SCBD diturunkan 0,8 → 0,5 agar tidak hitam tanpa environment map; F-09 preset Tanjung Priok diangkat dari atap stasiun dan metalness kubah baja diturunkan 0,8 → 0,35.
- **P2 yang masih terbuka:** foreground Bundaran HI, jarak kamera Semanggi, close-up TMII tanpa label utama, serta pencahayaan malam Rawa Buaya/Kelapa Gading yang terlalu gelap.
- **P3:** artefak berkas cyan di atas campanile Kelapa Gading saat malam; aerial 2.193 draw call / 300.686 triangle sebagai kandidat optimasi F5.
- **Statistik siang final:** aerial **2.193 draw call / 300.686 triangle**; pandangan level jalan **92–775 draw call**; SCBD **1.438 draw call** karena skyline padat. Statistik malam tidak valid karena pass bloom menimpa `renderer.info`; FPS tidak diklaim karena SwiftShader.

## Kebijakan akurasi posisi

`projectGpsToScene()` adalah kerangka referensi, tetapi sebagian posisi landmark sengaja disesuaikan agar selaras dengan jalan dan geometri prosedural. Pada audit 2026-10-26:

- 27 dari 87 landmark menyimpang lebih dari 30 unit dari proyeksi GPS.
- Deviasi terbesar: Terminal Kalideres 392 unit (±3,1 km), Cengkareng Business City 344 unit, Mall Daan Mogot 338 unit.
- `npm test` menjaga deviasi maksimum 450 unit untuk menangkap kesalahan input tanpa menolak penyesuaian artistik; enam anchor Void C dibatasi lebih ketat, maksimum 80 unit.

Kebijakan ini didokumentasikan pula di header `src/config/landmarks.js`.

## Klaim yang belum terverifikasi

- **"60 FPS" belum terbukti pada perangkat uji.** Baseline runtime 2026-10-26 di Chrome (viewport 831×785, Intel UHD Graphics via ANGLE/D3D11): pandangan Danau Rawa Buaya **13,9 FPS / 411 draw call per frame**, Bundaran HI **9,8 FPS / 1.206 draw call per frame**. Baseline ini diambil sebelum Tahap 3; Tahap 2 menambah 10 draw call, Tahap 3 menambah 9 draw call, dan Tahap 4 menambah 14 draw call (6 mesh transit + 8 mesh gerbong), sehingga bukan penyebab utama. F4 Tahap 1–3 menurunkan draw call siang Bundaran HI menjadi **329** (viewport 531×553); FPS indikatif Tahap 2 sempat **20,6**, tetapi angka FPS tidak diklaim karena pengukuran pada Intel UHD sangat bervariasi dan permukaan browser uji berstatus `hidden`. DPR adaptif kini menahan resolusi minimum 0,6 untuk menjaga frame rate. Beban statis mencakup 647 kendaraan (614 rute + 33 roundabout) dalam 8 `InstancedMesh`, 193 PJU sebagai 2 `InstancedMesh` + pool 12 `PointLight`, dan 87 label DOM.
- **Verifikasi visual sudah memakai screenshot browser, tetapi belum otomatis.** Audit 2026-10-27 menangkap 14 sudut pandang, Void C Tahap 1 menangkap 12 sudut pandang (7 siang, 5 malam), dan Void C Tahap 2 menangkap 10 sudut pandang (7 siang, 3 malam) dari source final, memeriksa framing, label, serta material secara manual. Pemeriksaan programatik Tahap 3–4 tetap menjadi bukti tambahan: jumlah instance, tidak ada tumpang-tindih AABB rumah/gudang, jarak bebas terhadap jalan OSM (rumah 5,4 unit, ruko 1,4 unit, gudang 32,7 unit), enam mesh transit, dua kereta KA Bandara (2 gerbong masing-masing), panjang kurva 759 unit tanpa sampel NaN, jarak bebas viaduk ke gudang ≥2,34 unit dan ke RSUD 10,41 unit, serta papan portal bertekstur `KA BANDARA`. Belum ada diff screenshot otomatis; interaksi kamera, klik drawer, dan FPS belum diuji.
- **"33/33 unit test suites" tidak didukung repo.** Yang tersedia adalah satu skrip verifikasi statis.
- Belum ada tes otomatis untuk render, interaksi kamera, atau regresi visual; baseline screenshot masih diperiksa manual.

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
