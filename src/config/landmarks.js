/**
 * Comprehensive Geospatial Configuration of Central & South Jakarta (Jakarta Pusat & Segitiga Emas)
 * Strictly projected from real OpenStreetMap GPS coordinates using a uniform metric projection
 * centered at Bundaran Hotel Indonesia (-6.194957°, 106.823048° -> [0, 0, 0]):
 *   X = (lng - 106.823048) * 14100.0   (~7.81 meters per scene unit)
 *   Z = (lat - (-6.194957)) * -14180.0 (~7.81 meters per scene unit)
 */

export const MAP_PROJECTION = {
  centerLat: -6.194957,
  centerLng: 106.823048,
  scaleLat: -14180.0,
  scaleLng: 14100.0,
  metersPerUnit: 7.814
};

export function projectGpsToScene(lat, lng) {
  const x = Math.round((lng - MAP_PROJECTION.centerLng) * MAP_PROJECTION.scaleLng * 10) / 10;
  const z = Math.round((lat - MAP_PROJECTION.centerLat) * MAP_PROJECTION.scaleLat * 10) / 10;
  return [x, z];
}

export const JAKARTA_LANDMARKS = [
  // =====================================================
  // ZONA 1: MEDAN MERDEKA, HARMONI & LAPANGAN BANTENG
  // =====================================================
  {
    id: "istana-merdeka",
    name: "Istana Merdeka & Istana Negara",
    shortName: "Istana Merdeka",
    category: "Pemerintahan & Sejarah",
    tagline: "Kediaman Resmi Kepresidenan RI di Medan Merdeka Utara",
    height: "24 meter (2 lantai kolonial)",
    year: "1879",
    architect: "Drossaers (Biro Arsitek Hindia Belanda)",
    location: "Jl. Medan Merdeka Utara, Gambir, Jakarta Pusat",
    coordinates: { lat: -6.170142, lng: 106.82419 },
    position: [16, 0, -352],
    labelHeight: 28,
    cameraPosition: [16, 48, -285],
    cameraTarget: [16, 10, -352],
    description: "Kompleks Istana Kepresidenan RI yang menghadap langsung ke Taman Medan Merdeka (Monas) di selatan dan menghadap kanal Kali Ciliwung (Jl. Veteran) di utara. Mencakup Istana Merdeka, Istana Negara, Bina Graha, dan Kantor Presiden.",
    facts: [
      "Istana Merdeka menghadap ke selatan (Monas), sementara Istana Negara menghadap ke utara (Jl. Veteran & kanal Ciliwung).",
      "Di sebelah baratnya jalan bercabang menuju Jl. Majapahit dan Simpang Harmoni.",
      "Lokasi upacara kenegaraan Detik-Detik Proklamasi Kemerdekaan RI setiap 17 Agustus."
    ]
  },
  {
    id: "masjid-istiqlal",
    name: "Masjid Istiqlal",
    shortName: "Masjid Istiqlal",
    category: "Ikon Religi & Nasional",
    tagline: "Masjid Terbesar di Asia Tenggara (Orientasi Kiblat 45°)",
    height: "96,66 meter (Menara) / 45m (Kubah)",
    year: "1978",
    architect: "Friedrich Silaban",
    location: "Jl. Taman Wijaya Kusuma, Pasar Baru, Jakarta Pusat",
    coordinates: { lat: -6.17017, lng: 106.83139 },
    position: [118, 0, -351],
    rotationY: Math.PI / 4, // Rotated ~45° NW-SE aligned with Qibla as in real map
    labelHeight: 52,
    cameraPosition: [72, 65, -285],
    cameraTarget: [118, 22, -351],
    description: "Masjid nasional Republik Indonesia di sudut timur laut Medan Merdeka yang dikelilingi percabangan Sungai Ciliwung. Massa bangunan utamanya berorientasi miring ~45° mengikuti arah Kiblat dan berseberangan langsung dengan Gereja Katedral Jakarta.",
    facts: [
      "Orientasi bangunan utama diputar ~45° terhadap grid jalan Medan Merdeka agar menghadap presisi ke arah Kiblat.",
      "Diameter kubah utamanya tepat 45 meter (melambangkan tahun kemerdekaan 1945).",
      "Dikelilingi langsung oleh aliran Sungai Ciliwung yang bercabang menuju Harmoni dan Pasar Baru."
    ]
  },
  {
    id: "gereja-katedral",
    name: "Gereja Katedral Jakarta",
    shortName: "Gereja Katedral",
    category: "Cagar Budaya & Religi",
    tagline: "Arsitektur Neo-Gotik Kembar di Seberang Masjid Istiqlal",
    height: "60 meter (Menara Kembar)",
    year: "1901",
    architect: "Antonius Dijkmans & M.J. Hulswit",
    location: "Jl. Katedral No.7B, Pasar Baru, Jakarta Pusat",
    coordinates: { lat: -6.169184, lng: 106.833309 },
    position: [145, 0, -365],
    labelHeight: 48,
    cameraPosition: [115, 45, -305],
    cameraTarget: [145, 20, -365],
    description: "Gereja Katolik bergaya Neo-Gotik Eropa dengan tiga menara besi tempa putih yang berhadapan langsung dengan Masjid Istiqlal di persimpangan Jl. Katedral dan Jl. Pos.",
    facts: [
      "Memiliki tiga menara ikonik: Menara Daud, Menara Gading (masing-masing 60m), dan Menara Angelus Dei di tengah.",
      "Terhubung dengan Masjid Istiqlal melalui Terowongan Silaturahmi bawah tanah."
    ]
  },
  {
    id: "lapangan-banteng",
    name: "Lapangan Banteng & Monumen Irian Barat",
    shortName: "Lapangan Banteng",
    category: "Taman Kota & Monumen",
    tagline: "Poros Historis Weltevreden & Monumen Pembebasan Irian Barat",
    height: "35 meter (Tugu Patung)",
    year: "1963",
    architect: "Friedrich Silaban & Edhi Sunarso",
    location: "Pasar Baru, Sawah Besar, Jakarta Pusat",
    coordinates: { lat: -6.170495, lng: 106.83486 },
    position: [167, 0, -347],
    rotationY: 0.15,
    labelHeight: 38,
    cameraPosition: [130, 52, -280],
    cameraTarget: [167, 14, -347],
    description: "Taman bersejarah di sebelah tenggara Katedral dan Istiqlal yang pada masa kolonial dikenal sebagai Waterlooplein. Di tengahnya berdiri Monumen Pembebasan Irian Barat berupa patung manusia memutus rantai belenggu di atas menara kembar dengan kolam air mengapitnya.",
    facts: [
      "Sumbu taman Lapangan Banteng mengikuti tata kota bersejarah Weltevreden.",
      "Dikelilingi oleh Gedung Kementerian Keuangan (Istana Daendels), Kantor Pos Filateli, dan Hotel Borobudur."
    ]
  },
  {
    id: "monas",
    name: "Monumen Nasional (Monas)",
    shortName: "Monas",
    category: "Monumen & Simbol Negara",
    tagline: "Titik Pusat Tata Ruang Medan Merdeka Jakarta Pusat",
    height: "132 meter",
    year: "1975",
    architect: "Friedrich Silaban & R.M. Soedarsono",
    location: "Lapangan Medan Merdeka, Gambir, Jakarta Pusat",
    coordinates: { lat: -6.175397, lng: 106.827161 },
    position: [58, 0, -277],
    labelHeight: 142,
    cameraPosition: [145, 78, -185],
    cameraTarget: [58, 48, -277],
    description: "Monumen peringatan setinggi 132 meter di jantung Lapangan Medan Merdeka seluas 80 hektare yang membentang di sebelah timur poros Jl. M.H. Thamrin – Jl. Medan Merdeka Barat. Memiliki empat jalur diagonal X-Paths, Taman Rusa di tenggara, dan Kolam Air Mancur Menari di sisi barat.",
    facts: [
      "Lidah api di puncak obelisk dilapisi emas murni seberat 50 kilogram.",
      "Berada di sebelah timur poros lurus Jl. M.H. Thamrin – Jl. Medan Merdeka Barat (X = 0)."
    ]
  },
  {
    id: "stasiun-gambir",
    name: "Stasiun Gambir & Jalur Rel Layang",
    shortName: "Stasiun Gambir",
    category: "Infrastruktur Transportasi",
    tagline: "Simpul Kereta Api Antarkota di Sisi Timur Monas",
    height: "22 meter (Viaduk Layang)",
    year: "1992 (Revitalisasi Layang)",
    architect: "PJKA / Kereta Api Indonesia",
    location: "Jl. Medan Merdeka Timur No.1, Gambir, Jakarta Pusat",
    coordinates: { lat: -6.176724, lng: 106.830614 },
    position: [107, 0, -259],
    rotationY: 0.08,
    labelHeight: 28,
    cameraPosition: [160, 42, -215],
    cameraTarget: [107, 12, -259],
    description: "Stasiun kereta api utama Jakarta Pusat yang berdiri di atas jalur rel layang (elevated railway viaduct) sepanjang sisi timur Taman Monas. Jalur rel layang ini membentang dari Juanda melewati Gambir, Gondangdia, dan Cikini menuju Manggarai.",
    facts: [
      "Ciri khas arsitekturnya adalah atap limasan hijau zamrud memanjang di atas struktur beton layang.",
      "Melayani kereta api eksekutif jarak jauh ke Bandung, Yogyakarta, Semarang, Solo, Surabaya, dan Malang."
    ]
  },

  // =====================================================
  // ZONA 2: PATUNG KUDA, KEBON SIRIH, TUGU TANI & THAMRIN
  // =====================================================
  {
    id: "patung-kuda",
    name: "Patung Kuda Arjuna Wijaya & Bank Indonesia",
    shortName: "Patung Kuda & BI",
    category: "Monumen & Keuangan Negara",
    tagline: "Simpul Pertemuan Medan Merdeka Barat, Selatan, dan MH Thamrin",
    height: "85 meter (Menara Kembar BI)",
    year: "1987",
    architect: "Nyoman Nuarta (Patung) & Arsitek BI",
    location: "Persimpangan Jl. M.H. Thamrin & Jl. Medan Merdeka, Jakarta Pusat",
    coordinates: { lat: -6.179814, lng: 106.822849 },
    position: [-3, 0, -215],
    labelHeight: 32,
    cameraPosition: [52, 35, -168],
    cameraTarget: [-15, 14, -215],
    description: "Titik nol koridor Jalan M.H. Thamrin tepat di sudut barat daya Lapangan Medan Merdeka (Monas). Di bundaran ini terdapat air mancur Patung Kuda Arjuna Wijaya yang menjadi titik temu lurus Jl. M.H. Thamrin dengan Jl. Medan Merdeka Barat.",
    facts: [
      "Delapan patung kuda melambangkan delapan filosofi kepemimpinan Hasta Brata.",
      "Kompleks kantor pusat Bank Indonesia berdiri megah di sudut barat daya persimpangan ini."
    ]
  },
  {
    id: "tugu-tani",
    name: "Tugu Tani (Patung Pahlawan) & Menteng Raya",
    shortName: "Tugu Tani",
    category: "Monumen & Simpul Kota",
    tagline: "Pertemuan Jl. Kebon Sirih, Kwitang, dan Jl. Menteng Raya",
    height: "18 meter",
    year: "1963",
    architect: "Matvey Manizer & Ossip Manizer",
    location: "Persimpangan Jl. Menteng Raya & Jl. Kebon Sirih, Jakarta Pusat",
    coordinates: { lat: -6.1824, lng: 106.8339 },
    position: [153, 0, -178],
    labelHeight: 26,
    cameraPosition: [120, 35, -135],
    cameraTarget: [153, 10, -178],
    description: "Simpul persimpangan bersejarah di ujung timur Jalan Kebon Sirih tempat bertemunya Jalan Menteng Raya, Jalan Prapatan, dan Jalan Kwitang (Senen). Patung perunggu seorang ibu yang melepas putranya berjuang ini menjadi gerbang utara menuju kawasan Menteng dan Cikini.",
    facts: [
      "Nama resminya adalah Patung Pahlawan, hadiah persahabatan pemerintah Uni Soviet pada tahun 1963.",
      "Terletak tepat di sebelah timur jalur rel layang antara Stasiun Gambir dan Stasiun Gondangdia."
    ]
  },
  {
    id: "gedung-sarinah",
    name: "Gedung Sarinah Thamrin",
    shortName: "Sarinah",
    category: "Sejarah & Ritel Modern",
    tagline: "Pencakar Langit & Pusat Perbelanjaan Pertama di Indonesia",
    height: "74 meter (15 lantai)",
    year: "1966 (Transformasi 2022)",
    architect: "Gagas Presiden Soekarno",
    location: "Sudut Tenggara Persimpangan Jl. M.H. Thamrin & Jl. K.H. Wahid Hasyim",
    coordinates: { lat: -6.18805, lng: 106.82435 },
    position: [24, 0, -92],
    labelHeight: 66,
    cameraPosition: [-35, 45, -55],
    cameraTarget: [24, 26, -92],
    description: "Berdiri di sudut tenggara persimpangan lampu merah Jl. M.H. Thamrin dan Jl. K.H. Wahid Hasyim. Sarinah adalah gedung pencakar langit dan pusat perbelanjaan modern pertama di Indonesia yang kini memiliki amphitheater budaya dan relief bersejarah.",
    facts: [
      "Persimpangan Sarinah mempertemukan poros Utara-Selatan Thamrin dengan poros Barat-Timur Jl. Wahid Hasyim (Tanah Abang - Sabang - Gondangdia).",
      "Memiliki eskalator pertama di Indonesia saat diresmikan pada tahun 1966."
    ]
  },
  {
    id: "bundaran-hi",
    name: "Bundaran Hotel Indonesia (Bundaran HI)",
    shortName: "Bundaran HI",
    category: "Jantung Kota Jakarta",
    tagline: "Patung Selamat Datang & Titik Simpul Thamrin – Sudirman – Menteng",
    height: "30 meter",
    year: "1962",
    architect: "Henk Ngantung & Edhi Sunarso",
    location: "Pertemuan Jl. M.H. Thamrin, Jl. Jend. Sudirman, Jl. Imam Bonjol & Jl. Kebon Kacang",
    coordinates: { lat: -6.194957, lng: 106.823048 },
    position: [0, 0, 0],
    labelHeight: 32,
    cameraPosition: [52, 34, 48],
    cameraTarget: [0, 12, 0],
    description: "Jantung ruang publik Jakarta tempat berakhirnya Jl. M.H. Thamrin dan dimulainya Jl. Jenderal Sudirman. Dari bundaran ini, Jl. Imam Bonjol dan Jl. Sutan Syahrir memancar secara diagonal ke arah tenggara menuju kawasan Menteng dan Taman Suropati.",
    facts: [
      "Patung Selamat Datang menghadap ke utara menyambut tamu negara dari arah Monas.",
      "Dikelilingi oleh Hotel Indonesia Kempinski, Menara BCA, Grand Indonesia, The Plaza, dan Mandarin Oriental."
    ]
  },
  {
    id: "menara-bca",
    name: "Menara BCA, Grand Indonesia & Kempinski",
    shortName: "Grand Indonesia",
    category: "Pencakar Langit & Superblok",
    tagline: "Superblok Ikonik di Sudut Barat Daya Bundaran HI",
    height: "230 meter (56 lantai)",
    year: "2008",
    architect: "RTKL Associates",
    location: "Jl. M.H. Thamrin No.1, Menteng, Jakarta Pusat",
    coordinates: { lat: -6.19678, lng: 106.821388 },
    position: [-34, 0, 26],
    labelHeight: 145,
    cameraPosition: [42, 82, 75],
    cameraTarget: [-34, 65, 26],
    description: "Kompleks terpadu Grand Indonesia di sudut barat daya Bundaran HI yang mengintegrasikan gedung cagar budaya Hotel Indonesia Kempinski (1962), mal West & East Mall, Kempinski Private Residences, dan Menara BCA setinggi 230 meter.",
    facts: [
      "Di belakang kompleks Grand Indonesia mengalir kanal Kali Cideng dan kawasan Kebon Kacang menuju Thamrin City."
    ]
  },
  {
    id: "autograph-tower",
    name: "Autograph Tower & Luminary Tower (Thamrin Nine)",
    shortName: "Autograph Tower",
    category: "Supertall Skyscraper",
    tagline: "Gedung Tertinggi di Indonesia & Belahan Bumi Selatan (382,9m)",
    height: "382,9 meter (75 lantai)",
    year: "2022",
    architect: "Kohn Pedersen Fox (KPF)",
    location: "Jl. M.H. Thamrin No.10 (Dekat Waduk Melati & Dukuh Atas)",
    coordinates: { lat: -6.198991, lng: 106.821213 },
    position: [-28, 0, 58],
    labelHeight: 205,
    cameraPosition: [55, 128, 108],
    cameraTarget: [-28, 95, 58],
    description: "Kompleks superblok Thamrin Nine di sisi barat Jl. M.H. Thamrin antara Bundaran HI dan Dukuh Atas. Autograph Tower setinggi 382,9 meter adalah gedung tertinggi di Indonesia, berdampingan dengan Luminary Tower (304m) dan mal Agora.",
    facts: [
      "Gedung tertinggi pertama di Indonesia yang melampaui kategori 'Supertall' (>300 meter).",
      "Berdampingan dengan kawasan Kebon Melati dan Waduk Melati di sisi barat daya."
    ]
  },

  // =====================================================
  // ZONA 3: MENTENG, TAMAN SUROPATI & DUKUH ATAS TRANSIT
  // =====================================================
  {
    id: "taman-suropati",
    name: "Taman Suropati & Kawasan Cagar Budaya Menteng",
    shortName: "Taman Suropati Menteng",
    category: "Taman Kota & Cagar Budaya",
    tagline: "Titik Temu Radial Jl. Imam Bonjol, Jl. Diponegoro & Jl. Teuku Umar",
    height: "16 meter (Pohon Mahoni & Monumen ASEAN)",
    year: "1920",
    architect: "P.A.J. Moojen & F.J. Kubatz (Nieuw Gondangdia)",
    location: "Pertemuan Jl. Imam Bonjol, Jl. Diponegoro & Jl. Teuku Umar, Menteng",
    coordinates: { lat: -6.198854, lng: 106.832657 },
    position: [135, 0, 55],
    labelHeight: 28,
    cameraPosition: [88, 45, 95],
    cameraTarget: [135, 8, 55],
    description: "Jantung kawasan Garden City Menteng (Nieuw Gondangdia) yang menjadi titik simpul pertemuan boulevard diagonal Jl. Imam Bonjol (dari Bundaran HI), Jl. Pangeran Diponegoro (menuju Cikini/Salemba), dan Jl. Teuku Umar. Di sisi utaranya berdiri Gedung Bappenas.",
    facts: [
      "Dirancang pada tahun 1920 sebagai pusat kota taman kolonial pertama di Hindia Belanda.",
      "Dihiasi enam monumen patung karya seniman negara-negara pendiri ASEAN."
    ]
  },
  {
    id: "dukuh-atas",
    name: "Kawasan Transit Terpadu Dukuh Atas & BNI City",
    shortName: "Dukuh Atas Hub",
    category: "Simpul Transit & Jembatan Kanal",
    tagline: "Simpul Pertemuan 5 Moda Transportasi di Atas Kanal Banjir Barat",
    height: "28 meter (Jembatan & Stasiun)",
    year: "2019 (TOD Terpadu)",
    architect: "MRT Jakarta & Pemprov DKI",
    location: "Jl. Jenderal Sudirman & Kanal Banjir Barat, Jakarta Pusat",
    coordinates: { lat: -6.202, lng: 106.82285 },
    position: [-3, 0, 100],
    labelHeight: 34,
    cameraPosition: [55, 42, 142],
    cameraTarget: [-3, 10, 100],
    description: "Simpul transit utama tempat koridor Jl. M.H. Thamrin – Jl. Jenderal Sudirman melintasi jembatan Kanal Banjir Barat dan jalur KRL Commuter Line di Stasiun Sudirman / BNI City.",
    facts: [
      "Titik pertemuan 5 moda transportasi: MRT Jakarta, KRL Commuter Line (Stasiun Sudirman), KA Bandara (Stasiun BNI City), LRT Jabodebek, dan TransJakarta.",
      "Menghubungkan ruang pejalan kaki Terowongan Kendal dengan JPM Dukuh Atas di atas Kanal Banjir Barat."
    ]
  },

  // =====================================================
  // ZONA 4: KORIDOR SUDIRMAN, KARET, SEMANGGI, KUNINGAN & SENAYAN
  // =====================================================
  {
    id: "wisma-46",
    name: "Wisma 46 — Kota BNI",
    shortName: "Wisma 46",
    category: "Ikon Arsitektur Postmodern",
    tagline: "Siluet Puncak Pena Legendaris di Selatan Kanal Dukuh Atas",
    height: "262 meter (46 lantai)",
    year: "1996",
    architect: "Zeidler Roberts Partnership & DP Architects",
    location: "Jl. Jend. Sudirman Kav. 1 (Selatan Kanal Banjir Barat)",
    coordinates: { lat: -6.203751, lng: 106.820402 },
    position: [-37, 0, 125],
    rotationY: -0.22,
    labelHeight: 175,
    cameraPosition: [25, 92, 175],
    cameraTarget: [-37, 75, 125],
    description: "Menara perkantoran setinggi 262 meter dengan puncak melengkung menyerupai mata pena atau layar phinisi. Berdiri tepat di sisi barat daya Kanal Banjir Barat dan Stasiun BNI City pada koridor Jalan Jenderal Sudirman.",
    facts: [
      "Pernah memegang rekor gedung tertinggi di Indonesia selama hampir 20 tahun (1996–2015)."
    ]
  },
  {
    id: "jpo-phinisi",
    name: "JPO Phinisi Karet Sudirman",
    shortName: "JPO Phinisi",
    category: "Infrastruktur Publik Ikonik",
    tagline: "Jembatan Penyeberangan Kapal Phinisi Melintang di Atas Sudirman",
    height: "16 meter (Anjungan Pandang)",
    year: "2022",
    architect: "Firman Ichsan & Pemprov DKI Jakarta",
    location: "Jl. Jend. Sudirman (Karet), Jakarta Pusat",
    coordinates: { lat: -6.214122, lng: 106.8188 },
    position: [-60, 0, 272],
    rotationY: -0.72, // Orthogonal across the real OSM curve of Jl. Jend. Sudirman at Karet
    labelHeight: 24,
    cameraPosition: [-15, 28, 308],
    cameraTarget: [-60, 10, 272],
    description: "Jembatan Penyeberangan Orang (JPO) dan Sepeda (JPS) berbentuk haluan kapal Phinisi berwarna oranye terakota yang melintang tegak lurus di atas koridor Jalan Jenderal Sudirman di sebelah utara Flyover Karet.",
    facts: [
      "Dilengkapi anjungan pandang terbuka untuk menikmati panorama garis langit Sudirman."
    ]
  },
  {
    id: "sampoerna-strategic",
    name: "Sampoerna Strategic Square & Flyover Karet",
    shortName: "Sampoerna Strategic",
    category: "Arsitektur Neo-Klasik Kembar",
    tagline: "Menara Kembar Berkubah di Sisi Timur Sudirman – Prof. Dr. Satrio",
    height: "158 meter (32 lantai)",
    year: "1997",
    architect: "HOK (Hellmuth, Obata + Kassabaum)",
    location: "Jl. Jend. Sudirman Kav. 45-46 (Sisi Timur Sudirman, Selatan Flyover Karet)",
    coordinates: { lat: -6.21692, lng: 106.818215 },
    position: [-68, 0, 311],
    rotationY: -0.68,
    labelHeight: 112,
    cameraPosition: [-135, 68, 345],
    cameraTarget: [-68, 52, 311],
    description: "Kompleks menara kembar bergaya Neo-Klasik dengan atap kubah berlapis kaca emas yang berdiri di sisi timur Jalan Jenderal Sudirman tepat di selatan simpang jalan layang Jl. Prof. Dr. Satrio (Casablanca – Karet).",
    facts: [
      "Berada di sebelah selatan JPO Phinisi dan Flyover Karet yang menghubungkan Tanah Abang dengan Kuningan/Casablanca."
    ]
  },
  {
    id: "simpang-semanggi",
    name: "Simpang Susun Semanggi",
    shortName: "Simpang Semanggi",
    category: "Infrastruktur & Landmark Nasional",
    tagline: "Persimpangan Daun Semanggi Jl. Jend. Sudirman × Jl. Gatot Subroto",
    height: "18 meter (2 Tingkat Jalan Layang)",
    year: "1962 / 2017 (Simpang Susun)",
    architect: "Ir. Sutami (1962) & Wijaya Karya (2017)",
    location: "Pertemuan Jl. Jend. Sudirman & Jl. Gatot Subroto",
    coordinates: { lat: -6.21965, lng: 106.81315 },
    position: [-140, 0, 350],
    rotationY: -0.68,
    labelHeight: 28,
    cameraPosition: [-60, 78, 415],
    cameraTarget: [-140, 10, 350],
    description: "Jembatan daun semanggi legendaris yang dirancang Ir. Sutami pada 1962 dan diperkuat dengan dua jalan layang melingkar (Simpang Susun Semanggi) pada 2017. Mempertemukan koridor diagonal Jl. Jenderal Sudirman dengan Jl. Gatot Subroto / Tol Dalam Kota secara tegak lurus.",
    facts: [
      "Titik pertemuan dua poros raksasa: Jl. Jenderal Sudirman dan Jl. Gatot Subroto.",
      "Bentang melingkar Simpang Susun Semanggi dibangun menggunakan box girder pracetak tanpa tiang di tengah jalur tol."
    ]
  },
  {
    id: "gedung-dpr-mpr",
    name: "Gedung MPR / DPR / DPD RI (Senayan)",
    shortName: "Gedung DPR/MPR",
    category: "Parlemen & Pemerintahan",
    tagline: "Kubah Sayap Garuda ('Gedung Kura-Kura') di Sisi Barat Daya Gatot Subroto",
    height: "100 meter (Gedung Nusantara I)",
    year: "1968",
    architect: "Soejoedi Wirjoatmodjo",
    location: "Jl. Gatot Subroto, Senayan, Jakarta Pusat",
    coordinates: { lat: -6.210317, lng: 106.800119 },
    position: [-323, 0, 218],
    rotationY: 0.52,
    labelHeight: 48,
    cameraPosition: [-265, 58, 280],
    cameraTarget: [-323, 18, 218],
    description: "Kompleks Parlemen Republik Indonesia di sisi barat daya koridor Jl. Gatot Subroto (barat laut Simpang Semanggi). Gedung Nusantara memiliki atap kubah parabolik hijau terbelah dua yang melambangkan kepakan sayap burung Garuda.",
    facts: [
      "Dirancang oleh Soejoedi Wirjoatmodjo pada tahun 1965 atas mandat Presiden Soekarno."
    ]
  },
  {
    id: "mega-kuningan",
    name: "Kawasan Mega Kuningan & Jl. H.R. Rasuna Said",
    shortName: "Mega Kuningan",
    category: "Distrik Bisnis & Diplomatik",
    tagline: "Sisi Timur Segitiga Emas Jakarta (Gama Tower & Bakrie Tower)",
    height: "285,5 meter (Gama Tower)",
    year: "1995–2016",
    architect: "Masterplan Segitiga Emas Kuningan",
    location: "Jl. H.R. Rasuna Said & Mega Kuningan, Jakarta Selatan",
    coordinates: { lat: -6.223948, lng: 106.83265 },
    position: [135, 0, 411],
    labelHeight: 165,
    cameraPosition: [55, 95, 470],
    cameraTarget: [135, 65, 411],
    description: "Kawasan pusat bisnis dan kedutaan besar di sisi timur Segitiga Emas Jakarta. Koridor Jl. H.R. Rasuna Said merupakan kelanjutan lurus ke selatan dari Jl. HOS Cokroaminoto (Menteng) dan terhubung ke Semanggi melalui Jl. Gatot Subroto dan Jl. Prof. Dr. Satrio.",
    facts: [
      "Membentuk sudut timur 'Segitiga Emas Jakarta' bersama koridor Sudirman-Thamrin dan Gatot Subroto.",
      "Rumah bagi Gama Tower (285,5m) dan Bakrie Tower yang berfasad geometris terpilin."
    ]
  },
  {
    id: "scbd-district",
    name: "Kawasan SCBD (Sudirman Central Business District)",
    shortName: "SCBD",
    category: "Distrik Keuangan Modern",
    tagline: "Pusat Finansial, Bursa Efek Indonesia & Treasury Tower (279,5m)",
    height: "279,5 meter (Treasury Tower)",
    year: "1992–Sekarang",
    architect: "KPF, Pei Partnership & Nikken Sekkei",
    location: "Jl. Jend. Sudirman Kav. 52-53 (Tenggara Semanggi)",
    coordinates: { lat: -6.2255, lng: 106.809 },
    position: [-198, 0, 433],
    rotationY: -0.68,
    labelHeight: 175,
    cameraPosition: [-280, 92, 480],
    cameraTarget: [-198, 68, 433],
    description: "Distrik bisnis super-modern seluas 45 hektare di kuadran tenggara Simpang Semanggi (sisi timur Jl. Jenderal Sudirman). Merupakan pusat keuangan pasar modal Indonesia tempat berdirinya Gedung Bursa Efek Indonesia (IDX), Treasury Tower, District 8, dan Pacific Place.",
    facts: [
      "Treasury Tower di kompleks District 8 mencapai tinggi 279,5 meter."
    ]
  },
  {
    id: "gbk-senayan",
    name: "Stadion Utama Gelora Bung Karno (GBK) & Hutan Kota",
    shortName: "GBK Senayan",
    category: "Kompleks Olahraga & Taman Kota",
    tagline: "Stadion Kebanggaan Nasional Atap Temu Gelang di Barat Sudirman",
    height: "62 meter",
    year: "1962 (Renovasi 2018)",
    architect: "Frederich Silaban",
    location: "Jl. Pintu Satu Senayan (Barat Daya Semanggi)",
    coordinates: { lat: -6.218611, lng: 106.801944 },
    position: [-298, 0, 335],
    labelHeight: 34,
    cameraPosition: [-215, 75, 415],
    cameraTarget: [-298, 14, 335],
    description: "Kompleks olahraga terbesar di Indonesia di kuadran barat daya Simpang Semanggi (seberang SCBD). Mencakup Stadion Utama GBK beratap temu gelang raksasa, Istora Senayan, dan Hutan Kota GBK.",
    facts: [
      "Dibangun untuk Asian Games IV tahun 1962 dan direvitalisasi untuk Asian Games 2018."
    ]
  },
  {
    id: "bundaran-senayan",
    name: "Bundaran Senayan & Patung Pemuda Membangun",
    shortName: "Bundaran Senayan",
    category: "Monumen & Gerbang Selatan",
    tagline: "Ujung Selatan Koridor Diagonal Jl. Jenderal Sudirman",
    height: "27 meter",
    year: "1972",
    architect: "Munir Pamuncak & Tim Pematung Ama",
    location: "Ujung Selatan Jl. Jend. Sudirman / Jl. Sisingamangaraja",
    coordinates: { lat: -6.22865, lng: 106.80065 },
    position: [-316, 0, 478],
    labelHeight: 34,
    cameraPosition: [-255, 42, 535],
    cameraTarget: [-316, 12, 478],
    description: "Bundaran air mancur di ujung selatan koridor diagonal Jalan Jenderal Sudirman sebelum memasuki Jalan Sisingamangaraja (Kebayoran Baru / Blok M). Di tengahnya berdiri Patung Pemuda Membangun yang dikelilingi Plaza Senayan, Senayan City, dan Ratu Plaza.",
    facts: [
      "Menandai ujung selatan poros Medan Merdeka – Thamrin – Sudirman."
    ]
  }
];

export const CITY_CORRIDOR_CONFIG = {
  center: [0, 0, 0], // Bundaran HI as spatial center [0,0,0]
  roadWidth: 22,
  buswayLaneWidth: 4,
  sidewalkWidth: 6,
  corridorLength: 1080,
  gatotSubrotoLength: 800,
  totalSkyscrapers: 160,
  trafficDensity: 72
};

export const GOOGLE_TILES_CONFIG = {
  apiKey: "",
  center: {
    lat: -6.194957,
    lng: 106.823048,
    elevation: 15.0
  }
};

