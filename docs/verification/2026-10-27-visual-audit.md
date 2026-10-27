# Audit Visual & Performa — 2026-10-27

Gerbang verifikasi visual untuk kota yang sudah ada (Inti, Jakarta Timur, Void A, Void B, F4). Tujuannya menemukan cacat tampilan dan mengukur beban render per sudut pandang sebelum pembangunan **Void C** dimulai.

## Lingkup & metode

- **11 sudut pandang siang**: aerial kota + 10 landmark yang mewakili seluruh wilayah (Bundaran HI, Monas, Simpang Semanggi, SCBD, Danau Rawa Buaya, Mall Daan Mogot, Tanjung Priok, Mall Kelapa Gading, Bandara Halim, TMII).
- **3 sudut pandang malam**: Bundaran HI, Danau Rawa Buaya, Mall Kelapa Gading.
- Aplikasi dimuat dari `http://localhost:8000` di **Chrome headless 156 (SwiftShader/ANGLE)**, viewport **1280×800**, DPR dipaksa **1**, cache dinonaktifkan.
- Masuk ke peta lewat tombol Beranda, preset waktu dipilih lewat UI, lalu kamera diarahkan ke `cameraPosition`/`cameraTarget` landmark. Animasi `flyTo` dimatikan agar posisi tidak tertimpa.
- Fokus shadow diperbarui ke target kamera, lalu render ditunggu 4,5 detik sebelum `Page.captureScreenshot` dan pembacaan `renderer.info.render`.
- Framing diperiksa dengan memproyeksikan delapan sudut bounding box landmark ke NDC; nilai di luar ±1 berarti terpotong. Posisi label utama juga diproyeksikan untuk memastikan tidak tersembunyi di balik toolbar.

### Batasan pengukuran

- **FPS tidak diukur.** SwiftShader adalah renderer perangkat lunak (~1–2,4 FPS) sehingga angka FPS tidak mewakili perangkat nyata; laporan ini tidak mengklaim FPS.
- **Statistik malam tidak valid.** Pass bloom terakhir dari `EffectComposer` menimpa `renderer.info.render`, sehingga terbaca `1 call / 1 triangle`. Untuk malam hanya screenshot yang dipakai.
- **Draw call bergantung sudut pandang** karena frustum culling. Tidak ada satu angka global; bandingkan per baris tabel.
- Label landmark adalah elemen DOM di atas canvas, bukan objek WebGL; visibilitasnya diperiksa secara visual.

## Baseline

14 screenshot tersimpan di [`docs/verification/screenshots/`](screenshots/):

`day-00-aerial`, `day-01-bundaran-hi`, `day-02-monas`, `day-03-semanggi`, `day-04-scbd`, `day-05-rawa-buaya`, `day-06-daan-mogot`, `day-07-tanjung-priok`, `day-08-kelapa-gading`, `day-09-halim`, `day-10-tmii`, `night-01-bundaran-hi`, `night-02-rawa-buaya`, `night-03-kelapa-gading`.

## Statistik siang (final)

| # | Sudut pandang | Kamera | Target | Draw call | Triangle |
|---|---|---|---|---|---:|---:|
| 1 | Aerial kota | -180, 520, 920 | -190, 20, 180 | 2.193 | 300.686 |
| 2 | Bundaran HI | 52, 34, 48 | 0, 12, 0 | 775 | 223.101 |
| 3 | Monas | 219, 115, -113 | 58, 65, -277 | 671 | 218.045 |
| 4 | Simpang Semanggi | -60, 78, 415 | -140, 10, 350 | 155 | 228.043 |
| 5 | SCBD | -420, 190, 620 | -198, 110, 433 | 1.438 | 238.336 |
| 6 | Danau Rawa Buaya | -1.080, 90, -250 | -1.080, 4, -400 | 214 | 123.079 |
| 7 | Mall Daan Mogot | -1.260, 85, -310 | -1.260, 10, -460 | 168 | 88.540 |
| 8 | Tanjung Priok | 940, 150, -1.070 | 831, 25, -1.233 | 92 | 33.981 |
| 9 | Mall Kelapa Gading | 1.100, 70, -660 | 1.198, 18, -531 | 116 | 66.326 |
| 10 | Bandara Halim | 773, 120, 1.163 | 893, 8, 993 | 150 | 102.465 |
| 11 | TMII | 1.040,2, 90, 1.635 | 1.040,2, 20, 1.551,5 | 114 | 175.285 |

Pandangan aerial adalah yang terberat (2.193 draw call, 300.686 triangle) karena hampir seluruh kota masuk frustum. Pandangan level jalan berkisar 92–775 draw call. SCBD tinggi (1.438) karena skyline padat dan berada dekat Semanggi; hal ini wajar untuk distrik terpadat, bukan regresi.

## Temuan

### P0 — tidak ada

Aplikasi memuat, masuk ke peta, berpindah waktu, dan merender seluruh 14 sudut pandang tanpa error konsol.

### P1 — diperbaiki (9)

| ID | Gejala | Akar masalah | Perbaikan | Bukti |
|---|---|---|---|---|
| F-01 | Bangunan komersial berdiri di dalam badan Danau Rawa Buaya | Koridor Daan Mogot Pesing tidak memakai exclusion zone danau | Guard `|x + 1080| < 52` dan `|z + 400| < 46` di `CityScene.js` | Raycast vertikal di pusat danau kini mengenai air/basin (y 0,25–0,69), bukan atap gedung (y 15,6); `day-05` menunjukkan basin kosong |
| F-02 | Lidah api Monas terpotong di tepi atas frame | Preset terlalu dekat dan rendah | `cameraPosition` Monas → `[219, 115, -113]` | `day-02` menampilkan obelisk dan lidah api utuh |
| F-03 | Preset Mall Daan Mogot hanya memperlihatkan atap | Kamera terlalu tinggi | `cameraPosition` → `[-1260, 85, -310]` | `day-06` menampilkan fasad, skylight biru, kanopi, dan menara silinder |
| F-04 | Preset Mall Kelapa Gading hanya atap | Kamera terlalu tinggi dan target di atas podium | Kamera → `[1100, 70, -660]`, target → `[1198, 18, -531]` | `day-08` menampilkan podium, skylight piramida, dan campanile |
| F-05 | Hangar Bandara Halim tampak hitam pekat dan menutupi apron | Material metalness 0,7 tanpa environment map | Material hangar → slate `0x64748b`, metalness 0,25, roughness 0,5; target → `[893, 8, 993]` | `day-09` menampilkan hangar, menara ATC, runway, dan apron |
| F-06 | Preset Danau Rawa Buaya terlalu dekat | Kamera berada di tepi basin | Kamera → `[-1080, 90, -250]`, target → `[-1080, 4, -400]` | `day-05` menampilkan seluruh basin dan ring jalan |
| F-07 | Preset SCBD menghadap punggung menara; label "21 SCBD" tidak terlihat | Kamera lama berada di balik gedung | Kamera → `[-420, 190, 620]`, target → `[-198, 110, 433]` | `day-04` menampilkan skyline SCBD dan label |
| F-08 | Fasad menara SCBD tampak hitam pada sisi yang teduh | Metalness 0,8 tanpa environment map mematikan komponen difus tekstur | Metalness → 0,5, roughness → 0,25 pada `createSCBDCluster` | `day-04` menampilkan fasad bronze/teal dengan jendela |
| F-09 | Kubah baja Stasiun Tanjung Priok tampak hitam dan memenuhi foreground | Kamera tepat di atas atap + metalness 0,8 tanpa environment map | Kamera → `[940, 150, -1070]`; `steelArchMat` metalness 0,35, roughness 0,4 | `day-07` menampilkan derek, kontainer, kubah, dan label dalam satu frame; bbox NDC x ±0,47, y -0,79…0,48 (tidak terpotong) |

Semua perbaikan dikunci oleh **Check 40** di `test_landmarks.js`: posisi kamera enam landmark, guard danau, material hangar Halim, metalness fasad SCBD, serta posisi kamera dan material atap Tanjung Priok. Total assertion kini **2.364**.

### P2 — diketahui, belum diperbaiki

- **Bundaran HI**: menara dan vegetasi di foreground menutupi sebagian kolam; monumen tetap terbaca, tetapi komposisi bisa lebih bersih.
- **Simpang Semanggi**: kamera sangat dekat dengan ring flyover sehingga ring mendominasi frame dan sisi timurnya terpotong gedung. Label tetap terlihat.
- **TMII**: preset masih berupa close-up dua kolam miniatur; label utama (setinggi 65 unit) berada di luar frame. Perbaikan yang disarankan: tarik kamera ke belakang ±150 unit dan naikkan target agar label masuk.
- **Malam Danau Rawa Buaya & Kelapa Gading**: pemandangan sangat gelap; lampu taman/pJU dan aksen fasad minim. Perlu pass pencahayaan malam khusus, bukan sekadar perbaikan kamera.

### P3 — catatan kecil

- **Berkas cyan di atas campanile Kelapa Gading (malam)**: kemungkinan artefak bloom atau sorot lampu; tidak mengganggu pembacaan.
- **Aerial 2.193 draw call / 300.686 triangle**: kandidat optimasi F5 (LOD/merge lanjutan) bila target perangkat menuntut. Tidak ada klaim FPS.
- **Bayangan statis**: fokus shadow di-snap per 40 unit; pada perpindahan kamera cepat, tepi bayangan dapat bergeser halus. Tidak terlihat sebagai cacat pada baseline.

## Rekomendasi

1. **Void C boleh dimulai.** Tidak ada P0; seluruh P1 sudah diperbaiki dan diverifikasi lewat screenshot dari source final.
2. Tambahkan **regresi visual otomatis** (diff screenshot terhadap baseline ini) saat ada GPU/lingkungan headless yang stabil; baseline saat ini adalah referensi manual.
3. Jadwalkan **pass pencahayaan malam** untuk Void B dan koridor Kelapa Gading bersamaan dengan pengembangan Void D/E.
4. Perbaiki komposisi **TMII** (P2) pada kesempatan berikutnya; tidak menghalangi Void C.
5. Gunakan statistik **per sudut pandang** dalam klaim performa; jangan menyebut satu angka draw call global.
