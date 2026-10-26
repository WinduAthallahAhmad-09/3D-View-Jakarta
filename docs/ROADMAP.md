# Roadmap & Status — Jakarta 3D View

Status terakhir diverifikasi: **2026-10-26**  
Repo: `WinduAthallahAhmad-09/3D-View-Jakarta` (branch `main`)

## Ringkasan terverifikasi

- **81 landmark anchor** (#01 Monas s.d. #81 Cengkareng Business City) di `src/config/landmarks.js`.
- **82 tombol tour** (81 landmark + tampilan aerial) di `index.html`; seluruh ID landmark memiliki tombol dan builder model.
- **Satu skrip verifikasi statis** di `test_landmarks.js`, dijalankan dengan `npm test`. Saat ini menjalankan 1.229 assertion yang memeriksa data, metadata, builder, tombol tour, dan batas deviasi posisi. Ini **bukan 33 unit test suite** dan belum mencakup render, interaksi, atau performa.
- Kawasan inti Jakarta Pusat, Jakarta Selatan, dan Jakarta Utara selesai.
- Jakarta Timur selesai 4 tahap.
- Void A (Jakarta Barat Tengah) selesai 4 tahap.
- Void B (Jakarta Barat Laut) selesai Tahap 1: 6 anchor #76–#81.

### Dataset OSM

`src/data/jakarta_osm.json` berisi 2.416 segmen jalan, 1.566 bangunan, 83 jalur air, 162 taman, dan 142 segmen rel. Cakupan koordinat scene: x **-794 s.d. 597**, z **-1.343 s.d. 815**. Wilayah di luar cakupan tersebut dibangun secara prosedural.

## Master roadmap 9 Voids

| Wilayah | Cakupan | Status |
|---|---|---|
| Inti | Jakarta Pusat, Jakarta Selatan, Jakarta Utara | Selesai |
| Jakarta Timur | Halim/TMII/Velodrome/Cawang/Lubang Buaya, KBT, infill, transit | Selesai 4 tahap |
| Void A | Kedoya, Greenville, Pos Pengumben, Koridor 8 TransJakarta | Selesai 4 tahap |
| Void B | Tahap 1: 6 anchor Kalideres–Cengkareng | Selesai |
| Void B | Tahap 2: Kanal Mookervaart & Daan Mogot | Direncanakan |
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

- Enam anchor berada di x **-1.050 s.d. -1.320**, di luar cakupan geometri OSM (x minimum -794).
- Koridor Jl. Daan Mogot sudah dibangun hingga x -1.250 dan rute TransJakarta Koridor 3 sudah melintas Grogol–Kalideres. Tahap 2 dan 4 harus memperluas/mengintegrasikan koridor ini, bukan membuatnya ulang.
- Empat dari enam anchor belum memiliki jaringan jalan dan urban fabric di sekitarnya; statusnya adalah anchor dalam konteks terbatas, bukan kawasan lengkap.
- Shadow frustum (±480) dan grid (±1.200) belum mencakup area Void B, sehingga bayangan dan garis koordinat tidak konsisten di sana.

## Kebijakan akurasi posisi

`projectGpsToScene()` adalah kerangka referensi, tetapi sebagian posisi landmark sengaja disesuaikan agar selaras dengan jalan dan geometri prosedural. Pada audit 2026-10-26:

- 25 dari 81 landmark menyimpang lebih dari 30 unit dari proyeksi GPS.
- Deviasi terbesar: Terminal Kalideres 392 unit (±3,1 km), Cengkareng Business City 344 unit, Mall Daan Mogot 338 unit.
- `npm test` menjaga deviasi maksimum 450 unit untuk menangkap kesalahan input tanpa menolak penyesuaian artistik.

Kebijakan ini didokumentasikan pula di header `src/config/landmarks.js`.

## Klaim yang belum terverifikasi

- **"60 FPS" belum diukur** dengan benchmark runtime. Beban statis saat ini mencakup 647 kendaraan (614 rute + 33 roundabout) dengan 3–5 mesh per kendaraan dan material unik, sekitar 192 PointLight PJU, serta 81 label DOM.
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
