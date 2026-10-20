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
    cameraPosition: [168, 95, -165],
    cameraTarget: [58, 65, -277],
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
    cameraPosition: [-3, 30, -145],
    cameraTarget: [-3, 10, -215],
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
    cameraPosition: [120, 24, -145],
    cameraTarget: [153, 9, -178],
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
    cameraPosition: [75, 160, 145],
    cameraTarget: [-28, 115, 58],
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
    cameraPosition: [-44, 24, 235],
    cameraTarget: [-60, 11, 272],
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
    cameraPosition: [-145, 82, 355],
    cameraTarget: [-68, 62, 311],
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
    cameraPosition: [45, 115, 490],
    cameraTarget: [135, 75, 411],
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
    cameraPosition: [-290, 108, 500],
    cameraTarget: [-198, 75, 433],
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
  },
  // =====================================================
  // ZONA 4: JAKARTA BARAT (GROGOL, TOMANG, TANJUNG DUREN & SLIPI)
  // =====================================================
  {
    id: "podomoro-city-central-park",
    name: "Superblok Podomoro City & Central Park",
    shortName: "Podomoro City",
    category: "Pusat Bisnis & Superblok",
    tagline: "Ikon Megapolitan Jakarta Barat (APL Tower, Neo Soho, Tribeca Park & Eco Skywalk)",
    height: "188 meter (APL Tower 46 lantai)",
    year: "2009",
    architect: "DP Architects & Agung Podomoro Land",
    location: "Jl. Letjen S. Parman Kav. 28, Tanjung Duren Selatan, Grogol Petamburan, Jakarta Barat",
    coordinates: { lat: -6.1775, lng: 106.7895 },
    position: [-473, 0, -247],
    labelHeight: 95,
    cameraPosition: [-473, 110, -165],
    cameraTarget: [-473, 40, -247],
    description: "Superblok terpadu termegah di Jakarta Barat yang memadukan Mall Central Park, gedung perkantoran prestisius APL Tower (188m), pusat gaya hidup Neo Soho dengan arsitektur spiral khas, taman terbuka hijau Tribeca Park, dan jembatan lengkung ikonik Eco Skywalk yang melintasi jalan raya.",
    facts: [
      "Eco Skywalk merupakan jembatan penyeberangan melengkung ikonik berkaca penuh yang menyambungkan Central Park Mall dan Neo Soho.",
      "APL Tower adalah salah satu gedung perkantoran tertinggi di koridor Jakarta Barat dengan tinggi mencapai 188 meter.",
      "Tribeca Park merupakan salah satu ruang terbuka hijau ramah hewan peliharaan paling populer di Jakarta."
    ]
  },
  {
    id: "mall-taman-anggrek",
    name: "Mall Taman Anggrek & Kondominium",
    shortName: "Taman Anggrek",
    category: "Pusat Perbelanjaan & Residensial",
    tagline: "Pionir Megamall Terbesar Indonesia dengan Rekor LED Facade Dunia",
    height: "150 meter (8 Tower Kondominium)",
    year: "1996",
    architect: "Altoon & Porter Architects (USA)",
    location: "Jl. Letjen S. Parman Kav. 21, Tanjung Duren Selatan, Jakarta Barat",
    coordinates: { lat: -6.1785, lng: 106.7925 },
    position: [-435, 0, -233],
    labelHeight: 85,
    cameraPosition: [-435, 100, -155],
    cameraTarget: [-435, 35, -233],
    description: "Salah satu pusat perbelanjaan terbesar dan paling legendaris di Indonesia yang terkenal dengan layar fasad LED raksasa bersertifikat Guinness World Record, wahana ice skating rink berstandar internasional, serta 8 menara kondominium kembar bertingkat tinggi di atas podium mall.",
    facts: [
      "Layar LED fasad Mall Taman Anggrek memecahkan Rekor Guinness World Records sebagai layar LED terpanjang dan terbesar di dunia pada fasad bangunan.",
      "Memiliki arena seluncur es indoor permanen pertama dan terbesar di Asia Tenggara (Sky Rink Jakarta).",
      "Dilengkapi dengan 8 menara kondominium kembar berkapasitas ribuan unit hunian di atas mall."
    ]
  },
  {
    id: "kawasan-pendidikan-grogol",
    name: "Kawasan Pendidikan UNTAR & Universitas Trisakti",
    shortName: "UNTAR & Trisakti",
    category: "Pendidikan & Sejarah Bangsa",
    tagline: "Sentra Kampus Bersejarah & Monumen Tragedi 12 Mei 1998 di Grogol",
    height: "65 meter (Menara Tarumanagara)",
    year: "1959 / 1965",
    architect: "Kawasan Kampus Terpadu Grogol",
    location: "Jl. Letjen S. Parman No. 1, Grogol, Grogol Petamburan, Jakarta Barat",
    coordinates: { lat: -6.1685, lng: 106.7895 },
    position: [-472, 0, -375],
    labelHeight: 48,
    cameraPosition: [-472, 65, -300],
    cameraTarget: [-472, 18, -375],
    description: "Pusat pendidikan tinggi ternama di Jakarta Barat yang menaungi Universitas Tarumanagara (UNTAR I) dengan Menara Tarumanagara berdinding bata merah ikonik dan Universitas Trisakti (Kampus Reformasi) yang menjadi saksi kunci tonggak sejarah lahirnya Reformasi Indonesia 1998.",
    facts: [
      "Universitas Trisakti dijuluki sebagai Kampus Pahlawan Reformasi untuk mengenang 4 mahasiswa yang gugur pada Tragedi 12 Mei 1998.",
      "Menara Gedung M UNTAR menjulang di samping koridor Jalan Tol Grogol - Tomang.",
      "Kawasan ini terhubung langsung dengan Mal Ciputra (Citraland) dan Flyover Simpang Grogol."
    ]
  },
  {
    id: "rs-harapan-kita-dharmais",
    name: "Pusat Jantung Harapan Kita & RS Kanker Dharmais",
    shortName: "Harapan Kita & Dharmais",
    category: "Kesehatan & Pusat Rujukan Nasional",
    tagline: "Pusat Rujukan Kardiovaskular & Kanker Terbesar Tingkat Nasional di Slipi",
    height: "75 meter (Menara Paviliun Sukaman)",
    year: "1985 / 1993",
    architect: "Kawasan Kesehatan Nasional Slipi",
    location: "Jl. Letjen S. Parman Kav. 84-87, Slipi, Palmerah, Jakarta Barat",
    coordinates: { lat: -6.1855, lng: 106.7972 },
    position: [-364, 0, -134],
    labelHeight: 46,
    cameraPosition: [-364, 60, -65],
    cameraTarget: [-364, 18, -134],
    description: "Kompleks pusat rujukan medis tertinggi nasional yang menaungi RS Jantung dan Pembuluh Darah Harapan Kita (Pusat Jantung Nasional) serta RS Kanker Dharmais (Pusat Kanker Nasional), menjadi pusat teknologi kedokteran kardiovaskular dan onkologi paling modern di Indonesia.",
    facts: [
      "RS Jantung Harapan Kita didirikan atas prakarsa Yayasan Harapan Kita dan diresmikan oleh Presiden Soeharto pada November 1985.",
      "Menjadi pusat transplantasi dan operasi bedah jantung tercanggih di Indonesia.",
      "Terletak berdampingan di koridor Jalan Letjen S. Parman dekat dengan pintu Tol Slipi."
    ]
  },
  {
    id: "wisma-barito-pacific",
    name: "Sentra Bisnis Slipi (Wisma Barito Pacific & Grand Slipi)",
    shortName: "Sentra Bisnis Slipi",
    category: "Kawasan Perkantoran & Finansial",
    tagline: "Gerbang Koridor Finansial Jakarta Barat di Simpang Slipi",
    height: "130 meter (Grand Slipi Tower 30 lantai)",
    year: "1994 / 2012",
    architect: "Kawasan Komersial Slipi",
    location: "Jl. Letjen S. Parman Kav. 62-63, Slipi, Palmerah, Jakarta Barat",
    coordinates: { lat: -6.1950, lng: 106.7995 },
    position: [-332, 0, 0],
    labelHeight: 72,
    cameraPosition: [-332, 85, 75],
    cameraTarget: [-332, 28, 0],
    description: "Pusat perkantoran dan bisnis modern di persimpangan Slipi yang didominasi oleh menara kembar kaca biru Wisma Barito Pacific (kantor pusat konglomerasi petrokimia & energi), Grand Slipi Tower berarsitektur silinder spiral, dan Hotel Menara Peninsula.",
    facts: [
      "Menandai titik temu strategis antara Jakarta Barat (Kemanggisan/Palmerah) dengan Jakarta Pusat (Tanah Abang & Senayan).",
      "Wisma Barito Pacific memiliki arsitektur mahkota piramida ganda dengan dinding tirai kaca biru reflektif.",
      "Terhubung langsung dengan akses on-off ramp Tol Dalam Kota Slipi."
    ]
  },
  // =====================================================
  // ZONA 5: ANCHOR POINTS KAWASAN TENGAH-BARAT & PALMERAH
  // =====================================================
  {
    id: "pasar-tanah-abang",
    name: "Kompleks Pasar Tanah Abang & Skybridge",
    shortName: "Pasar Tanah Abang",
    category: "Pusat Perdagangan & Niaga",
    tagline: "Pusat Grosir Tekstil Terbesar Se-Asia Tenggara & Jembatan Multiguna Jatibaru",
    height: "65 meter (Blok A 16 lantai)",
    year: "1735 / 2005",
    architect: "PD Pasar Jaya & PT Putragaya Wahana",
    location: "Jl. KH. Fakhrudin & Jl. KH. Mas Mansyur, Tanah Abang, Jakarta Pusat",
    coordinates: { lat: -6.1872, lng: 106.8142 },
    position: [-125, 0, -110],
    labelHeight: 52,
    cameraPosition: [-125, 75, -35],
    cameraTarget: [-125, 20, -110],
    description: "Pusat perdagangan dan perbelanjaan grosir tekstil serta garmen terbesar di Asia Tenggara yang berdiri sejak era kolonial (1735). Memadukan Blok A beratap kubah hijau toska ikonik, Blok B, Metro Tanah Abang, dan Jembatan Penyeberangan Multiguna (Skybridge) yang melayang di atas Jalan Jatibaru Raya.",
    facts: [
      "Didirikan pada 1 Mei 1735 oleh Yustinus Vinck dan berkembang menjadi pasar tekstil paling berpengaruh di kawasan Asia.",
      "Blok A memiliki kubah toska megah dengan luas bangunan mencapai lebih dari 160.000 m² dan menampung ribuan kios pedagang.",
      "Skybridge Tanah Abang dibangun membentang di atas jalan raya menghubungkan langsung peron Stasiun Tanah Abang ke gedung pasar grosir."
    ]
  },
  {
    id: "stasiun-tanah-abang",
    name: "Stasiun KRL Tanah Abang & Dipo Transit",
    shortName: "Stasiun Tanah Abang",
    category: "Infrastruktur & Transit Hub",
    tagline: "Simpul Pertemuan KRL Lintas Lingkar Barat & Koridor Serpong/Rangkasbitung",
    height: "22 meter (Kanopi & JPO)",
    year: "1899 / 2024",
    architect: "Staatsspoorwegen & Balai Teknik Perkeretaapian",
    location: "Jl. Jatibaru Raya, Kampung Bali, Tanah Abang, Jakarta Pusat",
    coordinates: { lat: -6.1855, lng: 106.8111 },
    position: [-168, 0, -85],
    labelHeight: 38,
    cameraPosition: [-168, 55, -15],
    cameraTarget: [-168, 12, -85],
    description: "Salah satu stasiun kereta api transit tersibuk di Indonesia yang melayani pertukaran ratusan ribu penumpang KRL Commuter Line setiap hari, menghubungkan jalur Lingkar Cikarang-Manggarai-Kampung Bandan dengan jalur Rangkasbitung-Serpong di tepi Kanal Banjir Barat.",
    facts: [
      "Dibuka pertama kali pada 1 Oktober 1899 oleh perusahaan kereta api kolonial Staatsspoorwegen (SS).",
      "Dilengkapi depo lokomotif dan jembatan layang pejalan kaki multiguna yang terintegrasi dengan moda TransJakarta.",
      "Menjadi gerbang mobilitas komuter utama bagi para pedagang dan pengunjung kawasan niaga Tanah Abang."
    ]
  },
  {
    id: "stasiun-palmerah",
    name: "Stasiun KRL Palmerah & Menara Kompas Gramedia",
    shortName: "Stasiun Palmerah",
    category: "Infrastruktur & Kawasan Media",
    tagline: "Gerbang Transit Senayan Barat & Markas Kompas Gramedia Media Tower",
    height: "82 meter (Menara Kompas 26 lantai)",
    year: "1899 / 2015",
    architect: "PT KAI & Denton Corker Marshall (Menara Kompas)",
    location: "Jl. Palmerah Timur & Jl. Tentara Pelajar, Gelora, Jakarta Pusat / Barat",
    coordinates: { lat: -6.2072, lng: 106.7978 },
    position: [-285, 0, 255],
    labelHeight: 58,
    cameraPosition: [-285, 78, 335],
    cameraTarget: [-285, 22, 255],
    description: "Kompleks stasiun transit modern berkanopi putih futuristik di barat Kompleks Parlemen DPR/MPR dan Stadion Gelora Bung Karno, berdampingan dengan Menara Kompas Gramedia (Multimedia Tower) berfasad kaca hijau metalik yang menjadi pusat konglomerasi media terbesar Indonesia.",
    facts: [
      "Stasiun Palmerah direvitalisasi menjadi stasiun bertingkat modern dua lantai pada tahun 2015 dengan fasilitas lift dan eskalator.",
      "Menara Kompas Multimedia Tower dirancang dengan sirip-sirip logam peneduh dan efisiensi energi berstandar green building.",
      "Menjadi titik sentral mobilitas komuter menuju kawasan Senayan, DPR/MPR, dan Palmerah."
    ]
  },
  {
    id: "binus-university",
    name: "Kampus Utama BINUS University (Anggrek & Syahdan)",
    shortName: "BINUS University",
    category: "Pendidikan & Kampus Teknologi",
    tagline: "Pionir Pendidikan Teknologi Informasi & Smart Campus Kemanggisan",
    height: "45 meter (Gedung L Anggrek 10 lantai)",
    year: "1981 / 1999",
    architect: "Yayasan Bina Nusantara",
    location: "Jl. Kebon Jeruk Raya No. 27 & Jl. K.H. Syahdan, Kemanggisan, Jakarta Barat",
    coordinates: { lat: -6.2008, lng: 106.7845 },
    position: [-480, 0, 25],
    labelHeight: 48,
    cameraPosition: [-480, 68, 105],
    cameraTarget: [-480, 18, 25],
    description: "Sentra kampus universitas swasta bidang komputasi dan teknologi informasi terkemuka di Indonesia. Terkenal dengan Gedung Kampus Anggrek berbentuk huruf L raksasa dengan aksen warna oranye-kuning cerah, atrium kaca megah, serta Kampus Syahdan yang legendaris di Kemanggisan.",
    facts: [
      "Bermula dari kursus komputer AT 85 pada tahun 1981 sebelum berkembang menjadi universitas teknologi kelas dunia.",
      "Gedung Kampus Anggrek memiliki aula auditorium megah dan laboratorium komputer tercanggih di Jakarta Barat.",
      "Kawasan di sekitar kampus membentuk ekosistem permukiman mahasiswa, sentra kuliner, dan indekos yang sangat dinamis."
    ]
  },
  {
    id: "mediterania-tanjung-duren",
    name: "Superblok Mediterania Garden Residences",
    shortName: "Mediterania Tanjung Duren",
    category: "Kawasan Residensial Vertikal",
    tagline: "Kompleks Apartemen & Sentra Ruko Kuliner Legendaris Tanjung Duren",
    height: "105 meter (Tower Apartemen 32 lantai)",
    year: "2004 / 2008",
    architect: "Agung Podomoro Group",
    location: "Jl. Tanjung Duren Raya & Jl. Podomoro City Ring Road, Jakarta Barat",
    coordinates: { lat: -6.1792, lng: 106.7828 },
    position: [-505, 0, -280],
    labelHeight: 75,
    cameraPosition: [-505, 95, -195],
    cameraTarget: [-505, 32, -280],
    description: "Kompleks hunian vertikal kondominium besar yang menjadi pionir apartemen modern di Jakarta Barat. Menghubungkan kawasan hunian Tanjung Duren dengan superblok Central Park, dilengkapi deretan ruko kuliner populer di lantai podium dan kolam renang bernuansa tropis.",
    facts: [
      "Terdiri dari beberapa tower kondominium kembar bertingkat 30+ lantai yang menjadi rumah bagi puluhan ribu warga Jakarta Barat.",
      "Menjadi salah satu pusat kuliner paling ramai dan hidup sepanjang malam di koridor Tanjung Duren Raya.",
      "Memiliki akses terowongan dan jembatan terpadu menuju kawasan mall dan taman Central Park."
    ]
  },
  // =====================================================
  // ZONA 6: KEBAYORAN BARU, BLOK M & CSW (JAKARTA SELATAN)
  // =====================================================
  {
    id: "sekretariat-asean",
    name: "Gedung Sekretariat Jenderal ASEAN",
    shortName: "Sekretariat ASEAN",
    category: "Diplomasi & Pemerintahan",
    tagline: "Pusat Hubungan Diplomatik Asia Tenggara di Sisingamangaraja",
    height: "65 meter (Twin Towers 16 lantai)",
    year: "1981 / Transformasi 2019",
    architect: "PT Airmas Asri",
    location: "Jl. Sisingamangaraja No. 70A, Kebayoran Baru, Jakarta Selatan",
    coordinates: { lat: -6.2372, lng: 106.7990 },
    position: [-339.1, 0, 599.0],
    labelHeight: 68,
    cameraPosition: [-339.1, 65, 665],
    cameraTarget: [-339.1, 24, 599.0],
    description: "Markas besar organisasi perhimpunan bangsa-bangsa Asia Tenggara (ASEAN) yang baru diresmikan pada 2019. Terdiri dari sepasang menara kembar modern berwawasan lingkungan (green building) dengan skybridge penghubung kaca di lantai 9-11 dan plaza bendera 10 negara anggota.",
    facts: [
      "Dirancang sebagai gedung ramah lingkungan bersertifikasi Greenship Platinum.",
      "Dilengkapi skybridge bentang 40 meter yang menghubungkan kedua menara tanpa tiang penyangga di tengah.",
      "Menjadi landmark diplomasi internasional paling prestisius di koridor Kebayoran Baru."
    ]
  },
  {
    id: "csw-asean-hub",
    name: "Simpang Temu CSW & Stasiun MRT ASEAN",
    shortName: "Simpang CSW ASEAN",
    category: "Infrastruktur Transit & Intermoda",
    tagline: "Simpul Integrasi Multimoda 5 Lantai: MRT Layang × Busway Koridor 13",
    height: "26 meter (Hub 5 Lantai)",
    year: "2021",
    architect: "Biro Arsitektur Studio Sae",
    location: "Persimpangan Jl. Sisingamangaraja, Jl. Trunojoyo & Jl. Kyai Maja, Kebayoran Baru",
    coordinates: { lat: -6.2395, lng: 106.7984 },
    position: [-347.5, 0, 631.6],
    labelHeight: 38,
    cameraPosition: [-285, 52, 690],
    cameraTarget: [-347.5, 18, 631.6],
    description: "Simpul integrasi transit (Cakra Selaras Wahana) berarsitektur silinder aerodinamis yang menghubungkan Stasiun MRT ASEAN dengan 4 halte TransJakarta, termasuk Halte CSW di jalur layang Koridor 13 setinggi 23 meter di atas tanah.",
    facts: [
      "Mengintegrasikan 5 halte busway dan 1 stasiun MRT dengan fasilitas lift panoramik dan eskalator.",
      "Bentuk bangunan menyerupai cakram bulat dinamis yang menghubungkan pertemuan 4 ruas jalan utama Kebayoran Baru.",
      "Menjadi ikon transit oriented development (TOD) percontohan modern di Indonesia."
    ]
  },
  {
    id: "kejaksaan-agung",
    name: "Gedung Utama Kejaksaan Agung RI",
    shortName: "Kejaksaan Agung RI",
    category: "Penegakan Hukum & Pemerintahan",
    tagline: "Markas Komando Penegak Hukum Nasional Berarsitektur Neo-Klasik Modern",
    height: "85 meter (22 lantai)",
    year: "2022",
    architect: "PT Hutama Karya & Biro Arsitek Negara",
    location: "Jl. Sultan Hasanuddin No. 1, Kebayoran Baru, Jakarta Selatan",
    coordinates: { lat: -6.2415, lng: 106.7981 },
    position: [-351.8, 0, 660.0],
    labelHeight: 88,
    cameraPosition: [-351.8, 75, 730],
    cameraTarget: [-351.8, 30, 660.0],
    description: "Kompleks markas besar Kejaksaan Agung Republik Indonesia yang dibangun megah kembali pasca-transformasi 2022. Memadukan fasad simetris putih krem, pilar pilar kolosal di area lobby podium, dan mahkota atap berhiaskan lambang pedang timbangan keadilan.",
    facts: [
      "Memiliki sistem smart building modern dan pengamanan perimeter tingkat tinggi.",
      "Berdiri persis di hadapan kawasan M Bloc Space dan stasiun MRT ASEAN.",
      "Memiliki aula serbaguna Sasana Bhinneka Tunggal Ika berkapasitas ribuan orang."
    ]
  },
  {
    id: "m-bloc-space",
    name: "M Bloc Space & Kompleks Peruri Heritage",
    shortName: "M Bloc Space",
    category: "Cagar Budaya & Sentra Kreatif",
    tagline: "Transformasi Rumah Dinas Percetakan Uang 1950 Menjadi Creative Hub Populer",
    height: "12 meter (Arsitektur Jengki Tropis)",
    year: "1955 / Revitalisasi 2019",
    architect: "Ruang Creative Hub & Perum Peruri",
    location: "Jl. Panglima Polim No. 37, Melawai, Kebayoran Baru, Jakarta Selatan",
    coordinates: { lat: -6.2422, lng: 106.8015 },
    position: [-303.8, 0, 669.9],
    labelHeight: 25,
    cameraPosition: [-303.8, 38, 725],
    cameraTarget: [-303.8, 10, 669.9],
    description: "Sentra ruang kreatif dan komunitas urban anak muda yang memanfaatkan bekas kompleks perumahan dinas Perum Peruri era 1950-an. Mempertahankan gaya arsitektur tropis Jengki khas awal kemerdekaan dengan bata ekspos, atap miring pelana, dan live house konser musik.",
    facts: [
      "Dahulu merupakan komplek hunian dinas karyawan Perum Percetakan Uang RI (Peruri).",
      "Melarang penggunaan plastik sekali pakai dan kantong kresek di seluruh tenantnya.",
      "Menjadi magnet sentra musik independen, pameran seni, toko piringan hitam, dan kafe lokal."
    ]
  },
  {
    id: "stasiun-mrt-blok-m",
    name: "Stasiun MRT Blok M BCA & Plaza Blok M",
    shortName: "Stasiun MRT Blok M",
    category: "Infrastruktur Transit & Komersial",
    tagline: "Stasiun Layang Terbesar MRT Jakarta & Jembatan Langsung ke Lantai Mall",
    height: "55 meter (Podium Plaza Blok M 8 lantai + Viaduk 16m)",
    year: "1990 / MRT 2019",
    architect: "MRT Jakarta & Plaza Blok M",
    location: "Jl. Panglima Polim & Jl. Mahakam, Kramat Pela, Kebayoran Baru",
    coordinates: { lat: -6.2445, lng: 106.7977 },
    position: [-357.4, 0, 702.5],
    labelHeight: 58,
    cameraPosition: [-357.4, 65, 775],
    cameraTarget: [-357.4, 22, 702.5],
    description: "Stasiun layang terpadat MRT Jakarta yang terhubung langsung dengan skybridge tertutup menuju lantai 3 pusat perbelanjaan Plaza Blok M. Memiliki 3 jalur rel layang dan peron pulau luas yang menghadap langsung ke Taman Martha Tiahahu.",
    facts: [
      "Satu-satunya stasiun MRT layang yang memiliki akses jembatan langsung terintegrasi ke dalam gedung pusat perbelanjaan.",
      "Menjadi simpul transit yang menghubungkan area perbelanjaan Blok M dengan Taman Literasi Martha Tiahahu.",
      "Dilengkapi jalur wesel simpan rangkaian kereta Ratangga."
    ]
  },
  {
    id: "distrik-melawai",
    name: "Kawasan Niaga Melawai & Little Tokyo Blok M",
    shortName: "Little Tokyo Melawai",
    category: "Kawasan Komersial & Budaya Pop",
    tagline: "Pusat Ruko Kuliner Autentik, Budaya Populer 80-an & Gerbang Lampion Melawai",
    height: "28 meter (Ruko & Hotel Butik 6 lantai)",
    year: "1975 / 1990-an",
    architect: "Kawasan Bisnis Melawai",
    location: "Jl. Melawai Raya, Kramat Pela & Melawai, Kebayoran Baru",
    coordinates: { lat: -6.2448, lng: 106.8002 },
    position: [-322.2, 0, 706.8],
    labelHeight: 35,
    cameraPosition: [-322.2, 45, 770],
    cameraTarget: [-322.2, 14, 706.8],
    description: "Distrik komersial ruko legendaris yang terkenal sebagai pusat tren budaya pemuda Jakarta era 1980-an (Lintas Melawai) dan bertransformasi menjadi Little Tokyo Jakarta dengan deretan restoran izakaya, ramen bar, neon box bilingual vertikal, dan hotel butik.",
    facts: [
      "Terkenal dengan istilah 'JJS (Jalan-Jalan Sore) Lintas Melawai' yang melegenda dalam kultur pop Indonesia dekade 80-an.",
      "Menjadi pusat komunitas ekspatriat Jepang di Jakarta Selatan dengan ratusan kedai kuliner khas.",
      "Berdampingan dengan Blok M Square dan Pasaraya Grande."
    ]
  },
  {
    id: "jiexpo-kemayoran",
    name: "Jakarta International Expo (JIExpo Kemayoran)",
    shortName: "JIExpo Kemayoran",
    category: "Pusat Pameran & Konvensi Internasional",
    tagline: "Arena Eksibisi Terbesar Indonesia & Rumah Pekan Raya Jakarta (PRJ)",
    height: "36 meter (Grand Hall & Teater JIExpo)",
    year: "2010",
    architect: "PT Jakarta International Expo / BDP Architects",
    location: "Gedung Pusat Niaga, Arena JIExpo, Kemayoran, Jakarta Pusat",
    coordinates: { lat: -6.1462, lng: 106.8450 },
    position: [309.5, 0, -691.4],
    labelHeight: 48,
    cameraPosition: [309.5, 75, -600],
    cameraTarget: [309.5, 18, -691.4],
    description: "Kompleks pameran dan konvensi MICE terbesar dan paling modern di Indonesia yang berdiri di atas eks-landasan pacu Bandara Kemayoran. Memiliki luas area 44 hektar dengan Hall A, B, C, D, Grand Ballroom, Teater JIExpo, dan pelataran terbuka raksasa tempat diselenggarakannya Jakarta Fair / Pekan Raya Jakarta (PRJ).",
    facts: [
      "Menjadi tuan rumah tahunan Pekan Raya Jakarta (Jakarta Fair Kemayoran) yang merayakan HUT Kota Jakarta sejak 1968.",
      "Dibangun di atas area bekas landasan pacu penerbangan internasional pertama Indonesia (Bandara Kemayoran).",
      "Memiliki kapasitas teater dan ruang pameran indoor lebih dari 100.000 meter persegi."
    ]
  },
  {
    id: "menara-atc-kemayoran",
    name: "Menara ATC Heritage Kemayoran & Bundaran Ondel-Ondel",
    shortName: "Menara ATC Kemayoran",
    category: "Cagar Budaya & Sejarah Penerbangan",
    tagline: "Menara Pengawas Udara Pertama di Asia (1938) & Ikon Budaya Betawi",
    height: "28 meter (Menara ATC 5 lantai) & 16 meter (Monumen Ondel-Ondel)",
    year: "1938 (ATC) / 2014 (Ondel-Ondel)",
    architect: "Departemen Pekerjaan Umum Hindia Belanda (1938)",
    location: "Boulevard Jl. Benyamin Sueb, Kebon Kosong, Kemayoran, Jakarta Pusat",
    coordinates: { lat: -6.1585, lng: 106.8420 },
    position: [267.2, 0, -517.0],
    labelHeight: 42,
    cameraPosition: [267.2, 55, -445],
    cameraTarget: [267.2, 14, -517.0],
    description: "Situs cagar budaya bersejarah nasional berupa menara pengawas lalu lintas udara (Air Traffic Control) tertua di Indonesia dan Asia Tenggara yang dibangun pada tahun 1938 untuk Bandara Internasional Kemayoran, berdampingan dengan sepasang patung Ondel-Ondel raksasa megah di bundaran tengah Boulevard Benyamin Sueb.",
    facts: [
      "Menara ATC Kemayoran merupakan cagar budaya saksi sejarah pendaratan pesawat-pesawat legendaris dunia era DC-3 Dakota dan Fokker.",
      "Bandara Kemayoran pernah diabadikan dalam komik legendaris dunia Petualangan Tintin karya Hergé ('Penerbangan 714 ke Sydney').",
      "Monumen Ondel-Ondel di median jalan menjadi simbol kebanggaan pelestarian seni dan kebudayaan asli Betawi."
    ]
  },
  {
    id: "stasiun-pasar-senen",
    name: "Stasiun Pasar Senen (Heritage Railway Station)",
    shortName: "Stasiun Pasar Senen",
    category: "Infrastruktur Transit & Cagar Budaya",
    tagline: "Stasiun Kereta Api Antarkota Terbesar Kedua Jakarta & Mahakarya Art-Deco 1916",
    height: "18 meter (Fasad Kanopi Utama & Menara Jam)",
    year: "1886 / 1916",
    architect: "J. van Gendt (Staatsspoorwegen / SS)",
    location: "Jl. Stasiun Senen No. 1, Senen, Jakarta Pusat",
    coordinates: { lat: -6.1746, lng: 106.8443 },
    position: [299.7, 0, -288.7],
    labelHeight: 45,
    cameraPosition: [299.7, 60, -215],
    cameraTarget: [299.7, 12, -288.7],
    description: "Stasiun kereta api cagar budaya kelas besar tipe A yang menjadi pintu gerbang utama layanan kereta api antarkota jarak jauh kelas ekonomi dan eksekutif dari Jakarta menuju kota-kota di Pulau Jawa. Memiliki kanopi baja lengkung bentang panjang khas arsitektur stasiun kolonial awal abad ke-20.",
    facts: [
      "Stasiun Pasar Senen pertama kali dibuka pada 31 Maret 1887 oleh Bataviasche Oosterspoorweg Maatschappij (BOS).",
      "Gedung megah bergaya Indische Empire dan Art Deco yang berdiri saat ini dirancang oleh arsitek ternama J. van Gendt dan diresmikan pada 19 Maret 1916.",
      "Melayani jutaan penumpang setiap tahunnya dan terhubung dengan halte TransJakarta dan stasiun KRL Commuter Line."
    ]
  },
  {
    id: "pasar-senen-jaya",
    name: "Kompleks Pasar Senen Jaya & Simpang Lima Senen",
    shortName: "Pasar Senen Jaya",
    category: "Pusat Perbelanjaan & Simpul Lalu Lintas",
    tagline: "Pusat Grosir Pakaian Tertua Sejak 1735, Skybridge Ikonik & Simpang Lima",
    height: "38 meter (Pasar Senen Blok I & II 7 lantai)",
    year: "1735 / Revitalisasi 2021",
    architect: "Yustinus Vinck (1735) / PT Pembangunan Jaya",
    location: "Jl. Pasar Senen Raya & Jl. Kramat Raya, Senen, Jakarta Pusat",
    coordinates: { lat: -6.1755, lng: 106.8415 },
    position: [260.2, 0, -275.9],
    labelHeight: 48,
    cameraPosition: [260.2, 65, -200],
    cameraTarget: [260.2, 16, -275.9],
    description: "Pusat perbelanjaan grosir dan tekstil tertua di Jakarta yang didirikan oleh Yustinus Vinck pada 30 Agustus 1735 (dikenal sebagai Pasar Vinck). Kini direvitalisasi dengan arsitektur modern berbalut corak ornamen Betawi, JPO Skybridge melengkung futuristik, dan terintegrasi dengan Flyover Simpang Lima Senen.",
    facts: [
      "Dahulu hanya dibuka setiap hari Senin, sehingga pasar ini kemudian dinamai Pasar Senen.",
      "JPO Simpang Senen memenangkan penghargaan desain arsitektur jembatan penyeberangan ramah disabilitas dengan tata lampu dinamis.",
      "Merupakan sentra buku bekas, pakaian impor (thrifting), dan kue subuh paling melegenda di Indonesia."
    ]
  },
  {
    id: "taman-ismail-marzuki",
    name: "Taman Ismail Marzuki (TIM) & Teater Jakarta Cikini",
    shortName: "Taman Ismail Marzuki",
    category: "Seni Budaya & Arsitektur Kontemporer",
    tagline: "Pusat Kesenian & Kebudayaan Ibu Kota dengan Fasad Kisi-Kisi Not Balok",
    height: "58 meter (Gedung Panjang Ali Sadikin & Perpustakaan Jakarta 14 lantai)",
    year: "1968 / Revitalisasi 2022",
    architect: "Andra Matin (Masterplan Revitalisasi 2022)",
    location: "Jl. Cikini Raya No. 73, Cikini, Menteng, Jakarta Pusat",
    coordinates: { lat: -6.1895, lng: 106.8385 },
    position: [217.9, 0, -77.4],
    labelHeight: 52,
    cameraPosition: [217.9, 70, -5],
    cameraTarget: [217.9, 18, -77.4],
    description: "Pusat kesenian dan kebudayaan termegah di Indonesia yang didirikan oleh Gubernur Ali Sadikin pada 10 November 1968 dan direvitalisasi secara spektakuler oleh arsitek Andra Matin. Menampilkan fasad Gedung Panjang dengan motif kisi-kisi terakota lagu 'Rayuan Pulau Kelapa', Teater Besar berstandar internasional, serta kubah bersejarah Planetarium Jakarta.",
    facts: [
      "Nama kompleks ini diambil dari komponis besar pahlawan nasional asal Betawi, Ismail Marzuki.",
      "Fasad arsitektur Gedung Panjang terinspirasi dari not balok tangga nada lagu ciptaan Ismail Marzuki yang diterjemahkan menjadi fasad kisi-kisi peneduh.",
      "Menampung Perpustakaan Jakarta berstandar dunia, Institut Kesenian Jakarta (IKJ), dan Planetarium tertua di Asia Tenggara (1969)."
    ]
  },
  {
    id: "passer-baroe",
    name: "Gerbang Bersejarah Passer Baroe (1820) & Kawasan Sawah Besar",
    shortName: "Passer Baroe 1820",
    category: "Cagar Budaya & Wisata Belanja Sejarah",
    tagline: "Pusat Belanja Neoklasik Tertua Jakarta Era Batavia di Tepian Ciliwung",
    height: "15 meter (Gerbang Utama Monumental & Arcade Jalan Pedestrian)",
    year: "1820",
    architect: "Pemerintah Kolonial Batavia / Komunitas Peranakan Tionghoa & India",
    location: "Jl. Pasar Baru & Jl. Pos, Pasar Baru, Sawah Besar, Jakarta Pusat",
    coordinates: { lat: -6.1650, lng: 106.8335 },
    position: [147.4, 0, -424.8],
    labelHeight: 38,
    cameraPosition: [147.4, 45, -360],
    cameraTarget: [147.4, 10, -424.8],
    description: "Kawasan perbelanjaan legendaris tertua di Jakarta yang dibangun pada tahun 1820 untuk melayani warga kawasan Weltevreden (Batavia baru). Ditandai dengan gerbang megah bergaya perpaduan arsitektur Tionghoa-Eropa berwarna merah marun dan emas, membentang di atas koridor pedestrian yang asri dekat aliran Kali Ciliwung.",
    facts: [
      "Didirikan pada era Gubernur Jenderal Hindia Belanda G.A.G.Ph. van der Capellen pada tahun 1820.",
      "Terkenal sebagai sentra penjahit jas klasik (tailor), toko kacamata tertua, dan kuliner multikultural percampuran Tionghoa, India, dan Betawi.",
      "Terhubung langsung dengan Gedung Kesenian Jakarta (Schouwburg Weltevreden) dan Kantor Filateli Pos Indonesia."
    ]
  },
  // =====================================================
  // ZONA 7: JAKARTA SELATAN (PANCORAN, CAWANG, SIMATUPANG, PONDOK INDAH & KEMANG)
  // =====================================================
  {
    id: "patung-dirgantara-pancoran",
    name: "Simpang Susun Pancoran & Monumen Patung Dirgantara",
    shortName: "Patung Pancoran",
    category: "Monumen Bersejarah & Simpang Susun",
    tagline: "Ikon Kedirgantaraan Nasional Mahakarya Edhi Sunarso di Simpang Susun Pancoran",
    height: "38 meter (Pilar Parabola 27m + Patung 11m)",
    year: "1966",
    architect: "Edhi Sunarso & Ir. Sutami",
    location: "Jl. Gatot Subroto & Jl. MT Haryono, Pancoran, Jakarta Selatan",
    coordinates: { lat: -6.2435, lng: 106.8430 },
    position: [248.0, 0, 492.0],
    labelHeight: 48,
    cameraPosition: [248.0, 65, 570],
    cameraTarget: [248.0, 22, 492.0],
    description: "Monumen megah kebanggaan kedirgantaraan Indonesia yang digagas Presiden Soekarno untuk melambangkan keberanian, keperkasaan, dan kejayaan penerbangan bangsa. Memiliki figur perunggu seberat 11 ton yang membentangkan tangan gagah ke arah utara di atas pilar beton lengkung hiperbolik setinggi 27 meter, di tengah perlintasan interchange bertingkat Simpang Susun Pancoran.",
    facts: [
      "Digagas langsung oleh Bung Karno dan dipahat oleh pematung legendaris Edhi Sunarso dari Keluarga Arca Yogyakarta.",
      "Berat patung perunggu mencapai 11 ton dan dirancang mampu menahan terpaan angin kencang serta gempa bumi.",
      "Menjadi titik temu strategis antara Jalan Tol Dalam Kota, Koridor Gatot Subroto, MT Haryono, dan jalur LRT Jabodebek."
    ]
  },
  {
    id: "menara-saidah",
    name: "Menara Saidah & Koridor Cawang-MT Haryono",
    shortName: "Menara Saidah",
    category: "Arsitektur Ikonik & Cagar Perkotaan",
    tagline: "Ikon Megah Neo-Klasik Romawi 28 Lantai Berpilar Korintia Kolosal di MT Haryono",
    height: "105 meter (28 lantai)",
    year: "2001",
    architect: "PT Hutama Karya & Ir. Saidah Abubakar",
    location: "Jl. MT Haryono Kav. 29, Tebet Timur / Pancoran, Jakarta Selatan",
    coordinates: { lat: -6.2440, lng: 106.8580 },
    position: [318.0, 0, 506.0],
    labelHeight: 110,
    cameraPosition: [318.0, 95, 580],
    cameraTarget: [318.0, 45, 506.0],
    description: "Gedung perkantoran legendaris berarsitektur Neo-Klasik Romawi spektakuler yang menjulang di tepi Jalan Tol Cawang-Grogol. Memiliki ciri khas deretan pilar korintia kolosal, patung-patung marmer bergaya mitologi klasik yang diimpor dari Italia, serta kubah mahkota tembaga berornamen rumit.",
    facts: [
      "Mengadopsi gaya arsitektur Romawi kuno dengan pilar-pilar batu marmer dan patung-patung klasik bernilai seni tinggi.",
      "Diresmikan pada tahun 2001 dan menjadi salah satu siluet gedung paling misterius dan ikonik di Jakarta.",
      "Berada persis di samping Stasiun KRL Cawang dan jalur layang LRT Jabodebek MT Haryono."
    ]
  },
  {
    id: "south-quarter-simatupang",
    name: "South Quarter Towers (SQ) & CBD TB Simatupang",
    shortName: "South Quarter (SQ)",
    category: "Pusat Bisnis & Mahakarya Ramah Lingkungan",
    tagline: "Mahakarya Arsitektur Hijau Dunia WS Atkins: 3 Menara Spiral Berfasad Kisi Surya",
    height: "115 meter (3 Menara 22 lantai)",
    year: "2015",
    architect: "WS Atkins (Inggris) & PT Intiland Development",
    location: "Jl. R.A. Kartini Kav. 8, Cilandak Barat, Jakarta Selatan",
    coordinates: { lat: -6.2930, lng: 106.7990 },
    position: [-330.0, 0, 1060.0],
    labelHeight: 120,
    cameraPosition: [-330.0, 105, 1150],
    cameraTarget: [-330.0, 45, 1060.0],
    description: "Kompleks superblok bisnis prestisius di koridor CBD TB Simatupang yang dirancang oleh firma arsitek kelas dunia WS Atkins. Terdiri dari 3 menara perkantoran elips yang terinspirasi dari bentuk keranjang rotan tradisional Indonesia, diselimuti selubung louvre kisi-kisi penahan panas matahari berkelanjutan (*solar shading louvers*) dan terhubung dengan kanopi kubah The Dome.",
    facts: [
      "Meraih sertifikasi Platinum Greenship dari Green Building Council Indonesia berkat efisiensi energi fasad suryanya.",
      "Bentuk elips dan kisi-kisi louvre eksterior mampu mereduksi radiasi panas matahari hingga 35 persen tanpa mengurangi pencahayaan alami.",
      "Menjadi markas perkantoran korporasi multinasional terkemuka di koridor korporat Jalan Tol Lingkar Luar (JORR)."
    ]
  },
  {
    id: "pondok-indah-mall",
    name: "Pusat Perbelanjaan & Kompleks Pondok Indah",
    shortName: "Pondok Indah Mall",
    category: "Pusat Perbelanjaan Mewah & Gaya Hidup",
    tagline: "Pionir Mall Mewah Indonesia (PIM 1-3, Skywalk Kaca, Street Gallery & Bundaran PIM)",
    height: "65 meter (Menara Pondok Indah & Kompleks Mall)",
    year: "1991 / 2005 / 2021",
    architect: "DDG (Development Design Group, USA) & PT Metropolitan Kentjana",
    location: "Jl. Metro Pondok Indah Kav. IV, Pondok Pinang, Kebayoran Lama, Jakarta Selatan",
    coordinates: { lat: -6.2655, lng: 106.7840 },
    position: [-510.0, 0, 845.0],
    labelHeight: 70,
    cameraPosition: [-510.0, 75, 930],
    cameraTarget: [-510.0, 25, 845.0],
    description: "Kompleks perbelanjaan papan atas paling terkemuka di Jakarta Selatan yang membentang di sepanjang Jalan Metro Pondok Indah. Memadukan PIM 1 berarsitektur atap pelana mediterania klasik, PIM 2 modern bertingkat, PIM 3 futuristik dengan arena waterpark, jembatan penyeberangan kaca ikonik (*Skywalk PIM*) yang melintasi jalan raya, serta Bundaran Pondok Indah berhiaskan air mancur dan deretan palem kurma.",
    facts: [
      "Merupakan salah satu mall kelas atas pertama dan paling konsisten mempertahankan predikat destinasi belanja keluarga elite Jakarta.",
      "Skywalk PIM menghubungkan PIM 1, PIM 2, PIM 3, dan Hotel InterContinental melintasi boulevard utama Pondok Indah.",
      "Berada di tengah kawasan perumahan terencana mandiri pertama di Jakarta Selatan (Kawasan Perumahan Pondok Indah)."
    ]
  },
  {
    id: "stasiun-mrt-fatmawati",
    name: "Stasiun MRT Elevated Fatmawati Indomaret & Dipo Lebak Bulus",
    shortName: "Stasiun MRT Fatmawati",
    category: "Infrastruktur Transit & Simpul Mobilitas",
    tagline: "Stasiun Layang MRT Terbesar di Selatan Jakarta & Gerbang Transit Menuju Dipo",
    height: "26 meter (Viaduk Layang Y=14m + Kanopi Membran Aerodinamis)",
    year: "2019",
    architect: "MRT Jakarta & Nippon Koei",
    location: "Jl. R.A. Kartini / Jl. RS Fatmawati, Cilandak Barat, Jakarta Selatan",
    coordinates: { lat: -6.2925, lng: 106.7930 },
    position: [-382.0, 0, 1035.0],
    labelHeight: 45,
    cameraPosition: [-382.0, 60, 1115],
    cameraTarget: [-382.0, 18, 1035.0],
    description: "Stasiun layang transit terbesar MRT Jakarta di koridor selatan yang melayang megah di atas persimpangan Jalan RS Fatmawati dan Jalan Tol JORR Simatupang. Memiliki arsitektur atap bentang lebar aerodinamis, peron pulau ganda, wesel percabangan turnback track, dan terhubung dengan Dipo MRT Lebak Bulus.",
    facts: [
      "Menjadi stasiun perpindahan penting bagi ribuan komuter dari kawasan Depok, Tangerang Selatan, dan Jakarta Selatan.",
      "Stasiun dibangun melayang pada ketinggian lebih dari 14 meter di atas permukaan jalan raya untuk melintasi simpang susun tol.",
      "Dilengkapi fasilitas park and ride serta integrasi antarmoda bus pengumpan TransJakarta."
    ]
  },
  {
    id: "kemang-village-lifestyle",
    name: "Kawasan Gaya Hidup Kemang (Kemang Village & Avenue of the Stars)",
    shortName: "Kemang Village",
    category: "Superblok Gaya Hidup & Komersial",
    tagline: "Pusat Gaya Hidup Trendi, Residensial & Kuliner Alfresco di Jantung Kemang",
    height: "145 meter (Menara Kondominium The Ritz 38 lantai)",
    year: "2012",
    architect: "DP Architects & PT Lippo Karawaci",
    location: "Jl. Pangeran Antasari No. 36, Bangka, Mampang Prapatan, Jakarta Selatan",
    coordinates: { lat: -6.2605, lng: 106.8145 },
    position: [-95.0, 0, 775.0],
    labelHeight: 115,
    cameraPosition: [-95.0, 95, 860],
    cameraTarget: [-95.0, 40, 775.0],
    description: "Superblok terpadu seluas 15 hektare yang menjadi magnet gaya hidup dan hiburan di kawasan Kemang. Memadukan Lippo Mall Kemang, menara residensial mewah (The Ritz, The Tiffany, The Empire), Sekolah Pelita Harapan, dan area kuliner terbuka semi-outdoor Avenue of the Stars yang terkenal dengan panggung musik live dan atmosfer tropis kosmopolitan.",
    facts: [
      "Avenue of the Stars merupakan salah satu area kuliner dan bersantai alfresco paling populer di kalangan ekspatriat dan anak muda Jakarta Selatan.",
      "Menara hunian Kemang Village merupakan salah satu kluster apartemen tertinggi di kawasan Jakarta Selatan bagian tengah.",
      "Terletak di tengah kantong kebudayaan, galeri seni kontemporer, dan sentra kuliner legendaris kawasan Kemang."
    ]
  },
  // =====================================================
  // ZONA 7: JAKARTA UTARA (PESISIR TELUK JAKARTA & PELABUHAN)
  // =====================================================
  {
    id: "jis-stadium",
    name: "Jakarta International Stadium (JIS)",
    shortName: "Stadion JIS",
    category: "Ikon Olahraga & Megastruktur",
    tagline: "Stadion Atap Buka-Tutup Terbesar di Asia & Mahakarya Arsitektur Pesisir Utara",
    height: "73 meter (Kapasitas 82.000 Penonton)",
    year: "2022",
    architect: "Buro Happold & PT Jakarta Propertindo (Jakpro)",
    location: "Jl. Papanggo, Tanjung Priok, Jakarta Utara",
    coordinates: { lat: -6.1248, lng: 106.8605 },
    position: [528.0, 0, -995.0],
    labelHeight: 85,
    cameraPosition: [528.0, 120, -900],
    cameraTarget: [528.0, 35, -995.0],
    description: "Megastruktur stadion multifungsi bertaraf internasional dengan kapasitas 82.000 penonton. Dilengkapi atap buka-tutup (retractable roof) terbesar di Asia, fasad berpori parametrik yang membiaskan cahaya senja, ramp concourse melayang megah di sisi barat dan timur, serta lapangan berstandar FIFA dengan rumput hibrida.",
    facts: [
      "Memiliki atap buka-tutup dengan bentang terbesar di benua Asia (bentang 120 meter).",
      "Merupakan stadion bersertifikasi Green Building Platinum pertama di Indonesia.",
      "Menjadi ikon kebanggaan baru Jakarta Utara yang menghubungkan kawasan Sunter dan Tanjung Priok."
    ]
  },
  {
    id: "ancol-dufan",
    name: "Taman Impian Jaya Ancol & Dunia Fantasi (Dufan)",
    shortName: "Dufan & Ancol",
    category: "Taman Hiburan & Rekreasi Bahari",
    tagline: "Destinasi Wisata Pesisir Bahari & Taman Hiburan Terbesar di Jakarta",
    height: "48 meter (Kincir Ria Bianglala R=20m & Menara Kastil Dufan)",
    year: "1966 / 1985",
    architect: "Ir. Soekarno, Ciputra, & Lembaga Arsitektur Dufan",
    location: "Jl. Lodan Timur No. 7, Ancol, Pademangan, Jakarta Utara",
    coordinates: { lat: -6.1245, lng: 106.8335 },
    position: [147.0, 0, -999.0],
    labelHeight: 60,
    cameraPosition: [147.0, 85, -915],
    cameraTarget: [147.0, 25, -999.0],
    description: "Kawasan resor rekreasi tepi pantai terpadu seluas 552 hektare di tepi Teluk Jakarta. Menampilkan gerbang kastil dongeng Dunia Fantasi (Dufan), kincir ria raksasa Bianglala yang berputar menghadap laut, lintasan roller-coaster Halilintar yang meliuk dramatis, pantai pasir putih Pantai Karnaval, serta dermaga Marina Ancol.",
    facts: [
      "Diresmikan sebagai kawasan rekreasi terpadu tepi laut tertua dan terbesar di Indonesia atas gagasan Presiden Soekarno.",
      "Bianglala Dufan setinggi lebih dari 45 meter memberikan pemandangan panorama Teluk Jakarta dan cakrawala gedung pencakar langit Jakarta.",
      "Menjadi pusat festival tahunan kembang api malam tahun baru terbesar di Indonesia."
    ]
  },
  {
    id: "sunda-kelapa",
    name: "Pelabuhan Bersejarah Sunda Kelapa & Museum Bahari",
    shortName: "Pelabuhan Sunda Kelapa",
    category: "Cagar Budaya Maritim & Sejarah",
    tagline: "Pelabuhan Tertua Jakarta Tempat Bersandarnya Kapal Layar Kayu Tradisional Pinisi",
    height: "18 meter (Menara Miring Syahbandar & Gudang Rempah VOC)",
    year: "1527 / Abad ke-12",
    architect: "Kerajaan Sunda Pajajaran & VOC Hindia Belanda",
    location: "Jl. Maritim No. 1, Penjaringan, Jakarta Utara",
    coordinates: { lat: -6.1265, lng: 106.8085 },
    position: [-205.0, 0, -971.0],
    labelHeight: 35,
    cameraPosition: [-205.0, 50, -895],
    cameraTarget: [-205.0, 12, -971.0],
    description: "Pelabuhan maritim legendaris berusia lebih dari lima abad tempat lahirnya kota Jakarta (Jayakarta). Ditandai dengan deretan kapal layar kayu tradisional Pinisi dari Sulawesi Selatan yang bersandar di dermaga batu andesit, Menara Syahbandar miring peninggalan 1839, serta gudang rempah VOC abad ke-17 yang kini menjadi Museum Bahari.",
    facts: [
      "Menjadi salah satu pelabuhan aktif tertua di dunia yang masih mengoperasikan bongkar muat kapal layar kayu tradisional tanpa derek otomatis.",
      "Menara Syahbandar dibangun di atas bastion benteng Culemborg dan memiliki kemiringan beberapa derajat akibat penurunan tanah di pesisir utara.",
      "Merupakan cikal bakal berdirinya kota Batavia pada tahun 1619 oleh VOC."
    ]
  },
  {
    id: "jembatan-kota-intan",
    name: "Jembatan Angkat Kota Intan & Kawasan Kali Besar Utara",
    shortName: "Jembatan Kota Intan",
    category: "Cagar Budaya & Monumen Bersejarah",
    tagline: "Jembatan Gantung Angkat Kayu Bersejarah Abad ke-17 Warisan Kolonial Belanda",
    height: "8,5 meter (Rangka Tuas Angkat Kayu Merah)",
    year: "1628",
    architect: "Pemerintah Kolonial VOC (Engelse Brug)",
    location: "Jl. Nelayan Timur, Roa Malaka, Tambora / Penjaringan, Jakarta Utara",
    coordinates: { lat: -6.1340, lng: 106.8122 },
    position: [-153.0, 0, -864.0],
    labelHeight: 28,
    cameraPosition: [-153.0, 35, -805],
    cameraTarget: [-153.0, 6, -864.0],
    description: "Satu-satunya jembatan angkat kayu peninggalan Belanda yang tersisa di Indonesia. Dibangun pada tahun 1628 dengan gaya arsitektur khas kincir air Belanda berkelir merah tua (*Engelse Brug*). Menghubungkan benteng timur dan barat Batavia melintasi Kali Besar dengan mekanisme roda gigi tuas penarik kayu untuk meloloskan perahu rempah VOC.",
    facts: [
      "Merupakan jembatan tertua di Jakarta yang masih berdiri kokoh sejak era Gubernur Jenderal VOC Jan Pieterszoon Coen.",
      "Berfungsi ganda sebagai pos pengawasan bea cukai dan pertahanan militer kota Batavia utara.",
      "Menjadi objek cagar budaya nasional dan simbol kejayaan tata air kanal Batavia lama."
    ]
  },
  {
    id: "mall-kelapa-gading",
    name: "Sentra Bisnis Kelapa Gading (Mall Kelapa Gading 1-5 & La Piazza)",
    shortName: "Mall Kelapa Gading",
    category: "Superblok Komersial & Gaya Hidup",
    tagline: "Superblok Ritel Terbesar di Pesisir Timur Laut Jakarta & Menara Jam La Piazza",
    height: "36 meter (Menara Jam Campanile La Piazza & Atrium Kaca)",
    year: "1990",
    architect: "Summarecon Agung & Wimberly Allison Tong & Goo (WATG)",
    location: "Jl. Boulevard Raya, Kelapa Gading Timur, Jakarta Utara",
    coordinates: { lat: -6.1575, lng: 106.9080 },
    position: [1198.0, 0, -531.0],
    labelHeight: 55,
    cameraPosition: [1198.0, 85, -445],
    cameraTarget: [1198.0, 20, -531.0],
    description: "Superblok pusat gaya hidup dan komersial paling prestisius di Jakarta Utara dengan luas lebih dari 150.000 m². Menghubungkan MKG 1 hingga 5 dengan jembatan penghubung layang terpadu, kanopi kubah kaca atrium piramida, koridor kuliner terbuka Gading Walk, serta menara jam bergaya Italia klasik La Piazza Campanile.",
    facts: [
      "Salah satu superblok mall terluas di Indonesia yang terintegrasi langsung dengan stasiun LRT Jakarta Boulevard Utara.",
      "Menjadi pusat kuliner multikultural paling padat dan beragam di wilayah pesisir timur laut Jakarta.",
      "Pusat penyelenggaraan Jakarta Fashion & Food Festival (JF3) tahunan berskala internasional."
    ]
  },
  {
    id: "tanjung-priok",
    name: "Pelabuhan Samudera Tanjung Priok & Stasiun Bersejarah Priok",
    shortName: "Pelabuhan Tanjung Priok",
    category: "Simpul Logistik Nasional & Pelabuhan Laut Dalam",
    tagline: "Pelabuhan Laut Tersibuk di Indonesia dengan Stasiun Megah Art Deco 1914",
    height: "48 meter (Quay Container Crane Raksasa & Kubah Baja Stasiun)",
    year: "1885 / 1914",
    architect: "Ir. C.W. Koch (Stasiun Priok) & Pelindo II",
    location: "Jl. Pelabuhan Raya, Tanjung Priok, Jakarta Utara",
    coordinates: { lat: -6.1080, lng: 106.8820 },
    position: [831.0, 0, -1233.0],
    labelHeight: 65,
    cameraPosition: [831.0, 95, -1140],
    cameraTarget: [831.0, 25, -1233.0],
    description: "Gerbang logistik maritim tersibuk dan terbesar di Indonesia yang menangani lebih dari 50% arus kargo perdagangan nasional. Menampilkan deretan derek raksasa kontainer (Quay Cranes) oranye-putih di atas dermaga laut dalam, ribuan peti kemas warna-warni, serta monumen arsitektur monumental Stasiun Tanjung Priok bergaya Art Deco dengan atap kanopi busur baja melengkung megah.",
    facts: [
      "Stasiun Tanjung Priok dibangun pada tahun 1914 dengan kubah kanopi busur baja bentang lebar tanpa tiang penyangga tengah, menjadikannya stasiun termegah di Asia Tenggara pada masanya.",
      "Menghubungkan jaringan kereta api rel logistik barang langsung dari pelabuhan ke pedalaman Pulau Jawa.",
      "Dapat disandari oleh kapal kontainer generasi ultra-large container vessel (ULCV) berkapasitas ribuan TEUs."
    ]
  },
  // =====================================================
  // ZONA 8: JAKARTA BARAT BARU (KEMBANGAN, PURI INDAH, KEBON JERUK & GLODOK)
  // =====================================================
  {
    id: "walikota-jakarta-barat",
    name: "Kompleks Kantor Walikota Jakarta Barat",
    shortName: "Kantor Walikota Jakbar",
    category: "Pusat Pemerintahan & Layanan Publik",
    tagline: "Pusat Administrasi Kota Administrasi Jakarta Barat di Kembangan",
    height: "55 meter (Gedung Utama Kubah Piramida)",
    year: "1999",
    architect: "Pemerintah Provinsi DKI Jakarta",
    location: "Jl. Raya Kembangan No. 2, Kembangan Selatan, Jakarta Barat",
    coordinates: { lat: -6.1870, lng: 106.7490 },
    position: [-1040.0, 0, -90.0],
    labelHeight: 65,
    cameraPosition: [-1040.0, 85, -15],
    cameraTarget: [-1040.0, 25, -90.0],
    description: "Kompleks pusat pemerintahan dan pelayanan publik terpadu Kota Administrasi Jakarta Barat. Menampilkan gedung balai kota bertingkat megah dengan atap kubah piramida ganda berundak, sayap perkantoran dinas, plaza upacara bendera, dan akses langsung ke interchange Tol JORR W1 dan Tol Jakarta-Tangerang.",
    facts: [
      "Menjadi pusat komando administrasi untuk 8 kecamatan dan 56 kelurahan di Jakarta Barat.",
      "Kawasan Sentra Primer Baru Barat (SPBB) Kembangan dirancang sebagai pusat pertumbuhan ekonomi baru di barat Jakarta sejak dekade 1990-an.",
      "Dilengkapi fasilitas Ruang Terbuka Hijau (RTH) dan kolam retensi penampung air hujan."
    ]
  },
  {
    id: "lippo-mall-puri",
    name: "Superblok Lippo Mall Puri & The St. Moritz",
    shortName: "Lippo Mall Puri",
    category: "Pusat Bisnis & Superblok Mewah",
    tagline: "Megasuperblok Terpadu Terbesar di Sentra Primer Baru Barat",
    height: "175 meter (6 Menara The St. Moritz 45 lantai)",
    year: "2014",
    architect: "DP Architects (Singapore) & Lippo Group",
    location: "Jl. Puri Indah Raya Blok U1, Puri Indah, Kembangan, Jakarta Barat",
    coordinates: { lat: -6.1885, lng: 106.7385 },
    position: [-1185.0, 0, -75.0],
    labelHeight: 90,
    cameraPosition: [-1185.0, 110, 10],
    cameraTarget: [-1185.0, 35, -75.0],
    description: "Superblok gaya hidup megapolitan termegah di koridor Jakarta Barat. Menggabungkan pusat perbelanjaan Lippo Mall Puri dengan 6 menara pencakar langit apartemen mewah The St. Moritz (New Amsterdam, Royal Tower, Presidential Suite), fasad modern dengan skybridge lengkung kaca, dan plaza terbuka gastronomi.",
    facts: [
      "The St. Moritz merupakan kompleks 11-in-1 pertama di Jakarta Barat yang memadukan mall, hotel bintang lima, residensial, dan helipad.",
      "Memiliki atrium kaca raksasa dengan instalasi seni dan pencahayaan parametrik modern.",
      "Merupakan salah satu destinasi belanja premium paling bergengsi di luar koridor Thamrin-Sudirman."
    ]
  },
  {
    id: "puri-indah-mall",
    name: "Puri Indah Mall & Kawasan Niaga Sentra Barat",
    shortName: "Puri Indah Mall",
    category: "Pusat Perbelanjaan & Ikon Arsitektur",
    tagline: "Ikon Legendaris Bergaya Istana Klasik Victoria dengan Kubah Toska",
    height: "38 meter (Kubah Tembaga Toska & Gerbang Kastil)",
    year: "1997",
    architect: "Pondok Indah Group (Metropolitan Kentjana)",
    location: "Jl. Puri Agung No. 1, Kembangan Selatan, Jakarta Barat",
    coordinates: { lat: -6.1865, lng: 106.7515 },
    position: [-1010.0, 0, -100.0],
    labelHeight: 52,
    cameraPosition: [-1010.0, 75, -20],
    cameraTarget: [-1010.0, 20, -100.0],
    description: "Pionir pusat perbelanjaan keluarga prestisius di Jakarta Barat yang terkenal dengan gaya arsitektur istana Victoria (*Victorian Castle*). Ditandai dengan dinding bata terakota merah, kubah-kubah tembaga berwarna toska (*copper green dome*), menara jam klasik, dan kanopi gerbang lengkung megah.",
    facts: [
      "Dirancang oleh pengembang yang sama dengan Pondok Indah Mall (PIM) di Jakarta Selatan.",
      "Telah berdiri sejak tahun 1997 dan menjadi ikon arsitektur paling dikenal di kawasan Kembangan.",
      "Terhubung dengan kawasan residensial mewah Puri Indah dan pusat kuliner legendaris pesisir barat."
    ]
  },
  {
    id: "glodok-chinatown",
    name: "Pecinan Bersejarah Glodok & Pantjoran Chinatown",
    shortName: "Pecinan Glodok",
    category: "Cagar Budaya & Sentra Perdagangan",
    tagline: "Pusat Pecinan Tertua di Indonesia, Pantjoran Tea House 1635 & Vihara Dharma Bhakti",
    height: "24 meter (Gapura Paifang & Pagoda Vihara)",
    year: "1650 / 1755",
    architect: "Masyarakat Tionghoa Batavia & Pemerintah Provinsi DKI Jakarta",
    location: "Jl. Pancoran, Glodok, Taman Sari, Jakarta Barat",
    coordinates: { lat: -6.1425, lng: 106.8145 },
    position: [-120.0, 0, -680.0],
    labelHeight: 42,
    cameraPosition: [-120.0, 60, -605],
    cameraTarget: [-120.0, 15, -680.0],
    description: "Kawasan pecinan tertua dan terbesar di Indonesia yang menjadi pusat denyut budaya Tionghoa di Batavia sejak pertengahan abad ke-17. Ditandai dengan Gapura Paifang tradisional beratap genteng merah melengkung, kedai teh bersejarah Pantjoran Tea House 1635, Vihara Dharma Bhakti (Kim Tek Ie 1650), kawasan gang legendaris Petak Sembilan, serta sentra perdagangan elektronik Glodok.",
    facts: [
      "Vihara Dharma Bhakti (Kim Tek Ie) dibangun pada tahun 1650 dan merupakan kelenteng tertua di Jakarta.",
      "Pantjoran Tea House menempati gedung apotek tua abad ke-17 peninggalan Kapitein der Chinezen Gan Djie yang menyediakan teh gratis (*Tradisi Teh Pantjoran*).",
      "Kawasan ini menjadi pusat festival perayaan Tahun Baru Imlek dan Cap Go Meh termegah di Jakarta."
    ]
  },
  {
    id: "mnc-studios-kebon-jeruk",
    name: "Sentra Penyiaran RCTI & MNC Studios Kebon Jeruk",
    shortName: "RCTI & MNC Studios",
    category: "Industri Kreatif & Penyiaran Nasional",
    tagline: "Kompleks Penyiaran Televisi Nasional Terbesar di Indonesia & Menara RCTI",
    height: "92 meter (Menara RCTI 22 lantai & Studio Hangar)",
    year: "1989",
    architect: "PT Rajawali Citra Televisi Indonesia (MNC Group)",
    location: "Jl. Raya Perjuangan No. 1, Kebon Jeruk, Jakarta Barat",
    coordinates: { lat: -6.1925, lng: 106.7675 },
    position: [-785.0, 0, 30.0],
    labelHeight: 70,
    cameraPosition: [-785.0, 85, 110],
    cameraTarget: [-785.0, 30, 30.0],
    description: "Kompleks pusat penyiaran televisi swasta pertama dan terbesar di Indonesia yang menjadi pionir industri pertelevisian nasional sejak 1989. Menampilkan Menara RCTI berkaca biru modern setinggi 92 meter, deretan studio siaran hangar berteknologi tinggi (Studio 1 hingga 14 termasuk RCTI+ Concert Hall), serta menara transmisi baja ikonik di koridor Kebon Jeruk.",
    facts: [
      "RCTI diresmikan oleh Presiden Soeharto pada 24 Agustus 1989 sebagai stasiun televisi swasta pertama di Indonesia.",
      "Studio RCTI+ di kompleks ini merupakan salah satu studio televisi indoor terbesar di Asia Tenggara dengan kapasitas ribuan penonton.",
      "Menjadikan Kebon Jeruk sebagai pusat gravitasi utama industri media dan hiburan di barat Jakarta."
    ]
  },
  {
    id: "museum-macan",
    name: "Museum MACAN & AKR Tower Gallery West",
    shortName: "Museum MACAN",
    category: "Seni Rupa Modern & Ikon Kontemporer",
    tagline: "Museum Seni Modern & Kontemporer Bertaraf Internasional Pertama di Indonesia",
    height: "145 meter (AKR Tower Gallery West 36 lantai)",
    year: "2017",
    architect: "MET Studio Design London & Arcadis",
    location: "AKR Tower Level M, Jl. Panjang No. 5, Kebon Jeruk, Jakarta Barat",
    coordinates: { lat: -6.1910, lng: 106.7680 },
    position: [-775.0, 0, 12.0],
    labelHeight: 82,
    cameraPosition: [-775.0, 95, 95],
    cameraTarget: [-775.0, 35, 12.0],
    description: "Museum seni modern dan kontemporer bertaraf internasional pertama di Indonesia yang menaungi karya mahakarya perupa terkemuka dunia dan maestro Nusantara (Raden Saleh, Affandi, Yayoi Kusama). Berlokasi di gedung pencakar langit megah AKR Tower Gallery West dengan arsitektur fasad prisma kaca diagonal yang memantulkan cakrawala barat Jakarta.",
    facts: [
      "Masuk dalam daftar 'World's 100 Greatest Places' majalah TIME pada tahun 2018.",
      "Koleksi terkenalnya mencakup karya instalasi 'Infinity Mirrored Room' karya seniman legendaris Jepang Yayoi Kusama.",
      "AKR Tower merupakan ikon arsitektur pencakar langit paling modern di sepanjang koridor Jalan Panjang."
    ]
  },
  // =====================================================
  // ZONA 8: JAKARTA TIMUR (HUB INTERMODA, SEJARAH & BUDAYA)
  // =====================================================
  {
    id: "stasiun-jatinegara",
    name: "Stasiun Hub Terbesar Jatinegara (Meester Cornelis 1910)",
    shortName: "Stasiun Jatinegara",
    category: "Cagar Budaya & Hub Kereta Api",
    tagline: "Simpul Bersejarah Meester Cornelis 1910 & Percabangan Jalur Dwiganda DDT",
    height: "28 meter (Menara Jam & Kanopi Baja Lengkung)",
    year: "1910",
    architect: "Ir. S. Snuyf (Staatsspoorwegen)",
    location: "Jl. Raya Bekasi Barat, Jatinegara, Jakarta Timur",
    coordinates: { lat: -6.2149, lng: 106.8703 },
    position: [666.1, 0, 282.6],
    labelHeight: 45,
    cameraPosition: [666.1, 65, 360],
    cameraTarget: [666.1, 15, 282.6],
    description: "Stasiun hub perkeretaapian bersejarah peninggalan era kolonial Hindia Belanda karya Ir. S. Snuyf tahun 1910 dengan gaya arsitektur Indische Art Nouveau. Memiliki atap pelana kembar dengan menara jam klasik, kanopi baja lengkung peron pulau, serta emplasemen 8 jalur rel yang melayani KRL Commuter Line Cikarang dan KA Jarak Jauh KAI.",
    facts: [
      "Dahulu bernama Stasiun Meester Cornelis dan menjadi pintu gerbang utama kereta api dari arah timur Pulau Jawa menuju Batavia.",
      "Merupakan simpul percabangan jalur dwiganda (Double-Double Track / DDT) Manggarai-Cikarang.",
      "Gedung stasiun heritage telah ditetapkan sebagai Cagar Budaya Indonesia yang dipadukan harmonis dengan bangunan stasiun modern bertingkat."
    ]
  },
  {
    id: "bandara-halim-perdanakusuma",
    name: "Bandara Internasional Halim Perdanakusuma (HLP)",
    shortName: "Bandara Halim",
    category: "Infrastruktur Penerbangan & Pertahanan",
    tagline: "Pangkalan Udara Utama TNI-AU & Gerbang Kenegaraan dengan Runway 3.000 Meter",
    height: "32 meter (Menara ATC & Hanggar Skadron 17)",
    year: "1924 / Revitalisasi 2022",
    architect: "TNI Angkatan Udara & Kementerian Perhubungan RI",
    location: "Jl. Halim Perdana Kusuma, Makasar, Jakarta Timur",
    coordinates: { lat: -6.2650, lng: 106.8864 },
    position: [893.2, 0, 993.0],
    labelHeight: 55,
    cameraPosition: [893.2, 85, 1075],
    cameraTarget: [893.2, 20, 993.0],
    description: "Pangkalan udara militer dan bandara penerbangan komersial/kenegaraan bersejarah di timur Jakarta. Menampilkan landasan pacu Runway 06/24 sepanjang 3.000 meter berorientasi 065.25°, apron pesawat kepresidenan Skadron Udara 17 VIP TNI-AU, menara pemandu lalu lintas udara (ATC Tower), serta terminal penumpang bernuansa kearifan lokal Nusantara.",
    facts: [
      "Dahulu dikenal sebagai Lapangan Terbang Tjililitan (didirikan tahun 1924) sebelum dinamai pahlawan nasional Marsekal Muda Agustinus Adisutjipto dan Abdul Halim Perdanakusuma.",
      "Menjadi gerbang kedatangan resmi kepala negara dunia, penerbangan VVIP kepresidenan RI, serta evakuasi logistik kemanusiaan darurat.",
      "Memiliki fasilitas pangkalan tempur militer terpadu dan hanggar pemeliharaan pesawat angkut berat C-130 Hercules."
    ]
  },
  {
    id: "taman-mini-indonesia-indah",
    name: "Taman Mini Indonesia Indah (TMII)",
    shortName: "Taman Mini (TMII)",
    category: "Cagar Budaya & Taman Wisata Nasional",
    tagline: "Megakompleks Miniatur Kepulauan Nusantara 150 Ha, Keong Emas & Kereta Gantung",
    height: "45 meter (Teater IMAX Keong Emas & Menara Kastel)",
    year: "1975 / Revitalisasi 2022",
    architect: "Biro Arsitektur Nusa Consult & Kementerian PUPR",
    location: "Jl. Raya Taman Mini, Ceger, Cipayung, Jakarta Timur",
    coordinates: { lat: -6.3044, lng: 106.8968 },
    position: [1040.2, 0, 1551.5],
    labelHeight: 65,
    cameraPosition: [1040.2, 90, 1635],
    cameraTarget: [1040.2, 20, 1551.5],
    description: "Megakompleks taman cagar budaya dan miniatur kepulauan Nusantara seluas 150 hektare yang merangkum kebhinekaan suku bangsa dan budaya Indonesia. Menampilkan Danau Archipelago dengan gugusan pulau miniatur NKRI di atas air, Teater IMAX Keong Emas berkubah spiral keemasan, Kastel Istana Anak-Anak Indonesia merah bata, dan lintasan Kereta Gantung.",
    facts: [
      "Gagasan pembangunannya diprakarsai oleh Ibu Tien Soeharto pada tahun 1970 untuk membangkitkan rasa bangga terhadap kebudayaan Nusantara.",
      "Teater Keong Emas merupakan teater IMAX modern pertama di Indonesia yang diresmikan pada 20 April 1984.",
      "Telah direvitalisasi total menyambut KTT G20 pada tahun 2022 dengan konsep ramah lingkungan (green park) bebas kendaraan emisi fosil."
    ]
  },
  {
    id: "jakarta-international-velodrome",
    name: "Jakarta International Velodrome Rawamangun",
    shortName: "Velodrome Rawamangun",
    category: "Olahraga Dunia & Arsitektur Ikonik",
    tagline: "Arena Balap Sepeda Indoor UCI Category 1 & Skybridge Integrasi LRT Jakarta",
    height: "35 meter (Kubah Membran Elips PTFE 120m × 80m)",
    year: "2018 (Asian Games XVIII)",
    architect: "Schurmann Architects & Cox Architecture",
    location: "Jl. Pemuda No. 6, Rawamangun, Pulo Gadung, Jakarta Timur",
    coordinates: { lat: -6.1909, lng: 106.8901 },
    position: [945.5, 0, -57.6],
    labelHeight: 52,
    cameraPosition: [945.5, 75, 25],
    cameraTarget: [945.5, 18, -57.6],
    description: "Arena balap sepeda indoor bertaraf olimpiade internasional bersertifikasi UCI Category 1 yang dibangun untuk Asian Games 2018. Memiliki atap membran melengkung elips berteknologi membran PTFE (120m x 80m), fasad kaca transparan aerodinamis, lintasan kayu pinus Siberia sepanjang 250 meter berkemiringan 42 derajat, dan jembatan layang skybridge langsung ke Stasiun LRT Velodrome.",
    facts: [
      "Diakui oleh Union Cycliste Internationale (UCI) sebagai salah satu velodrome indoor terbaik dan tercepat di belahan bumi selatan.",
      "Menggunakan kayu pinus khusus impor bersertifikasi ekologis dari hutan Siberia Rusia yang memberikan grip sempurna pada ban sepeda balap.",
      "Menjadi simpul intermodal transit awal LRT Jakarta Lin 1 menuju kawasan Kelapa Gading."
    ]
  },
  {
    id: "simpang-susun-cawang",
    name: "Simpang Susun Cawang & Cawang Intermodal Hub",
    shortName: "Simpang Susun Cawang",
    category: "Infrastruktur Tol & Transit Intermoda",
    tagline: "Spaghetti Junction 4 Tingkat Tersibuk & Simpul Percabangan LRT Jabodebek",
    height: "26 meter (Viaduk Layang 4 Tingkat & Stasiun LRT Cawang)",
    year: "1987 / LRT 2023",
    architect: "PT Jasa Marga & PT Adhi Karya",
    location: "Persimpangan Cawang, Kramat Jati, Jakarta Timur",
    coordinates: { lat: -6.2460, lng: 106.8736 },
    position: [712.3, 0, 723.8],
    labelHeight: 48,
    cameraPosition: [712.3, 75, 805],
    cameraTarget: [712.3, 18, 723.8],
    description: "Simpul pertemuan jalan tol empat tingkat (spaghetti junction) terbesar dan tersibuk di Asia Tenggara. Menghubungkan empat jalan tol arteri utama: Tol Dalam Kota (Cawang-Grogol), Tol Jagorawi (arah Bogor), Tol Jakarta-Cikampek (arah Jawa Barat/Trans Jawa), dan Tol By-Pass Ir. Wiyoto Wiyono (arah Tanjung Priok), terpadu dengan Stasiun Hub Layang LRT Jabodebek Cawang.",
    facts: [
      "Menjadi titik sentral distribusi jutaan kendaraan komuter dan angkutan logistik antarkota setiap harinya.",
      "Merupakan simpul percabangan utama LRT Jabodebek yang membagi lintas layanan menuju Lin Cibubur (Harjamukti) dan Lin Bekasi (Jatimulya).",
      "Dilengkapi jembatan lengkung lengkung beton bentang panjang yang melompati jalur tol di bawahnya."
    ]
  },
  {
    id: "monumen-pancasila-sakti",
    name: "Monumen Pancasila Sakti Lubang Buaya",
    shortName: "Pancasila Sakti",
    category: "Monumen Nasional & Memorial Sejarah",
    tagline: "Memorial 7 Pahlawan Revolusi, Burung Garuda Tembaga Raksasa & Sumur Maut",
    height: "22 meter (Dinding Relief Andesit & Garuda Tembaga)",
    year: "1969 / Peresmian 1973",
    architect: "Edhi Sunarso & Saptono (Pematung Nasional)",
    location: "Jl. Raya Pondok Gede, Lubang Buaya, Cipayung, Jakarta Timur",
    coordinates: { lat: -6.2883, lng: 106.9069 },
    position: [1182.3, 0, 1324.1],
    labelHeight: 42,
    cameraPosition: [1182.3, 60, 1395],
    cameraTarget: [1182.3, 14, 1324.1],
    description: "Kompleks monumen memorial sejarah nasional seluas 14,6 hektare yang didedikasikan untuk mengenang perjuangan dan pengorbanan para Pahlawan Revolusi. Menampilkan plaza upacara marmer dengan dinding andesit berrelief sejarah, 7 patung perunggu Pahlawan Revolusi berlatar burung Garuda raksasa setinggi 17 meter, Sumur Maut bersejarah, dan Museum Paseban.",
    facts: [
      "Patung 7 Pahlawan Revolusi dipahat oleh seniman legendaris Indonesia Saptono dan Edhi Sunarso (pembuat Patung Selamat Datang Bundaran HI).",
      "Sumur Maut asli berkedalaman 12 meter dengan diameter 75 centimeter dilestarikan di dalam cungkup cungkup marmer kehormatan.",
      "Menjadi lokasi upacara kenegaraan Hari Kesaktian Pancasila setiap tanggal 1 Oktober yang dipimpin langsung oleh Presiden Republik Indonesia."
    ]
  },
  {
    id: "rs-graha-kedoya",
    name: "Rumah Sakit Graha Kedoya",
    shortName: "RS Graha Kedoya",
    category: "Kesehatan & Rumah Sakit Umum",
    tagline: "Pusat Medis Modern Akreditasi Paripurna & Menara Kembar Layanan Terpadu",
    height: "45 meter (Menara Kembar 10 Lantai & Helipad Medis)",
    year: "2010",
    architect: "PT Megatama Mandiri & Graha Kedoya",
    location: "Jl. Panjang Arteri No. 26, Kedoya Utara, Kebon Jeruk, Jakarta Barat",
    coordinates: { lat: -6.1802, lng: 106.7645 },
    position: [-775.0, 0, -260.0],
    labelHeight: 48,
    cameraPosition: [-775.0, 65, -195.0],
    cameraTarget: [-775.0, 18, -260.0],
    description: "Rumah sakit swasta tipe B terkemuka di koridor arteri Jl. Panjang dengan fasilitas medis modern terlengkap di Jakarta Barat. Menampilkan arsitektur menara kembar modern berlantai 10 dengan fasad kaca cyan bergaris putih, instalasi gawat darurat (IGD) berkanopi luas, pusat diagnostik canggih, dan landasan helipad medis di atap menara.",
    facts: [
      "Menjadi fasilitas rujukan medis darurat utama bagi pengguna jalan tol Jakarta-Tangerang dan koridor Kebon Jeruk.",
      "Memiliki pusat keunggulan kardiovaskular, bedah ortopedi, dan pusat hemodialisis dengan teknologi mutakhir.",
      "Terletak persis di tepi arteri Jl. Panjang dengan akses langsung jalur TransJakarta Koridor 8."
    ]
  },
  {
    id: "wang-residence-kedoya",
    name: "Wang Residence & Apartemen Kedoya",
    shortName: "Wang Residence",
    category: "Residensial Mewah & Superblok Vertikal",
    tagline: "Puncak Kemewahan Hunian Vertikal Privat & Sky Garden Koridor Kebon Jeruk",
    height: "108 meter (Menara Residensial Mewah 28 Lantai)",
    year: "2017",
    architect: "Citicon Perkasa & SCDA Architects",
    location: "Jl. Panjang No. 99, Kedoya Selatan, Kebon Jeruk, Jakarta Barat",
    coordinates: { lat: -6.1895, lng: 106.7635 },
    position: [-790.0, 0, -95.0],
    labelHeight: 54,
    cameraPosition: [-790.0, 95, -25.0],
    cameraTarget: [-790.0, 40, -95.0],
    description: "Kompleks apartemen hunian privat mewah setinggi 28 lantai yang menjadi tengara vertikal paling mencolok di Kebon Jeruk. Mengusung arsitektur tropis kontemporer rancangan arsitek internasional dengan podium taman resort, kolam renang infinity elevated, kisi-kisi louvre vertikal elegan, dan penthouse sky villa berpemandangan panorama Jakarta Barat.",
    facts: [
      "Menawarkan konsep resort living dengan rasio ruang terbuka hijau privat mencapai 60% dari total lahan.",
      "Menjadi ikon pencakar langit residensial tertinggi di koridor arteri Jl. Panjang antara Kedoya dan Kebon Jeruk.",
      "Memiliki lift privat ganda langsung menuju setiap unit penthouse eksklusif."
    ]
  },
  {
    id: "ipeka-puri-greenville",
    name: "Kompleks Edukasi Kristen IPEKA Greenville",
    shortName: "Sekolah IPEKA Greenville",
    category: "Edukasi & Kampus Terpadu",
    tagline: "Kampus Terpadu Berwawasan Global, Gedung Modular Modern & Sport Hall",
    height: "24 meter (Gedung Akademik 5 Lantai & Auditorium)",
    year: "1979 / Revitalisasi 2016",
    architect: "Yayasan IPEKA & Denton Corker Marshall Associates",
    location: "Jl. Greenville Blok D No. 1, Duri Kepa, Kebon Jeruk, Jakarta Barat",
    coordinates: { lat: -6.1832, lng: 106.7695 },
    position: [-710.0, 0, -210.0],
    labelHeight: 38,
    cameraPosition: [-710.0, 50, -150.0],
    cameraTarget: [-710.0, 12, -210.0],
    description: "Kompleks kampus pendidikan Kristen terpadu unggulan di jantung permukiman asri Greenville. Terdiri dari blok gedung akademik modern 5 lantai berkanopi kisi-kisi pelindung surya, aula serbaguna auditorium besar, lapangan olahraga bertaraf internasional, serta plaza komunitas edukasi berwawasan lingkungan.",
    facts: [
      "Salah satu kampus IPEKA paling bersejarah dan menjadi perintis pendidikan berprestasi di kawasan Jakarta Barat.",
      "Memiliki fasilitas laboratorium sains, ruang musik akustik, serta lapangan basket indoor berstandar FIBA.",
      "Menjadi pusat simpul aktivitas sosial dan edukasi warga perumahan Greenville, Kedoya, dan Tanjung Duren."
    ]
  },
  {
    id: "sentra-kuliner-greenville",
    name: "Sentra Wisata Kuliner Greenville & Taman Ratu",
    shortName: "Kuliner Greenville",
    category: "Pusat Niaga, Gaya Hidup & Gastronomi",
    tagline: "Surga Gastronomi Legendaris Jakarta Barat, Ruko Kopi Alfresco & Neon Night Market",
    height: "18 meter (Kompleks Shophouse Tematik 4 Lantai)",
    year: "1985 / Revitalisasi 2021",
    architect: "Konsorsium Pengembang Kawasan Greenville",
    location: "Jl. Greenville Raya & Jl. Taman Ratu Indah, Duri Kepa, Kebon Jeruk, Jakarta Barat",
    coordinates: { lat: -6.1858, lng: 106.7715 },
    position: [-680.0, 0, -160.0],
    labelHeight: 36,
    cameraPosition: [-680.0, 45, -100.0],
    cameraTarget: [-680.0, 10, -160.0],
    description: "Kawasan kuliner legendaris paling terkenal di Jakarta Barat yang memadukan puluhan ruko gastronomi peranakan, kafe kopi spesialis alfresco, restoran seafood malam, dan jajanan tempo dulu. Menampilkan deretan ruko 4 lantai dengan fasad terakota, kanopi tenda warna-warni, pencahayaan papan reklame neon malam hari, serta pedestrian promenade yang semarak.",
    facts: [
      "Telah menjadi destinasi wisata kuliner favorit warga ibu kota selama lebih dari 4 dekade sejak era 1980-an.",
      "Terkenal dengan hidangan seafood segar khas pesisir, bakmi tradisional peranakan, hingga dessert modern artisan.",
      "Mengintegrasikan zona pedestrian rindang dengan kantong parkir komunal dan sirkulasi kendaraan santai."
    ]
  },
  {
    id: "sentra-pos-pengumben",
    name: "Sentra Niaga Pos Pengumben & Sukabumi Selatan",
    shortName: "Sentra Pos Pengumben",
    category: "Komersial, Bisnis & Arteri Distribusi",
    tagline: "Pusat Desain Interior, Showroom Keramik Terpadu & Simpul Bisnis Selatan-Barat",
    height: "28 meter (Gedung Bisnis Perbankan & Showroom 6 Lantai)",
    year: "1995 / Modernisasi 2019",
    architect: "Dinas Tata Ruang DKI & Arsitek Swasta",
    location: "Jl. Raya Pos Pengumben, Sukabumi Selatan, Kebon Jeruk, Jakarta Barat",
    coordinates: { lat: -6.2070, lng: 106.7645 },
    position: [-775.0, 0, 210.0],
    labelHeight: 42,
    cameraPosition: [-775.0, 55, 275.0],
    cameraTarget: [-775.0, 14, 210.0],
    description: "Pusat niaga dan showroom interior terkemuka yang menjadi gerbang selatan Jakarta Barat menuju Permata Hijau dan Kebayoran Lama. Memadukan gedung perkantoran perbankan 6 lantai, showroom keramik dan sanitari arsitektural terbesar, deretan ruko material modern, dan flyover persimpangan arteri strategis Jl. Panjang.",
    facts: [
      "Dikenal sebagai pusat perdagangan bahan bangunan premium, marmer, dan perlengkapan interior arsitektur nomor satu di Jakarta Barat.",
      "Menjadi titik temu mobilitas antara Jakarta Barat (Kebon Jeruk/Joglo) dan Jakarta Selatan (Kebayoran/Permata Hijau).",
      "Dilengkapi halte transit TransJakarta Koridor 8 yang menghubungkan wilayah perumahan ke pusat perkantoran Sudirman."
    ]
  },
  {
    id: "taman-cattleya-tomang",
    name: "Taman Cattleya (Taman Metropolitan Tomang Barat)",
    shortName: "Taman Cattleya",
    category: "Ruang Terbuka Hijau & Ekosistem Perkotaan",
    tagline: "Oase Hijau 3 Hektare, Danau Retensi Alami & Paru-Paru Kota Jakarta Barat",
    height: "12 meter (Plaza Monumen & Kanopi Pohon Trembesi Purba)",
    year: "2007 (Revitalisasi Taman Kota DKI)",
    architect: "Dinas Pertamanan dan Hutan Kota DKI Jakarta",
    location: "Jl. Letjen S. Parman / Simpang Tomang Barat, Palmerah, Jakarta Barat",
    coordinates: { lat: -6.1815, lng: 106.7830 },
    position: [-530.0, 0, -110.0],
    labelHeight: 32,
    cameraPosition: [-530.0, 45, -50.0],
    cameraTarget: [-530.0, 8, -110.0],
    description: "Taman kota metropolitan publik seluas 31.945 meter persegi (3,2 hektare) yang berfungsi sebagai paru-paru hijau dan daerah tangkapan air alami di pertemuan Tomang dan Tanjung Duren. Memiliki danau buatan dengan air mancur aerator, jembatan lengkung dermaga kayu, jogging track mengelilingi danau, plaza panggung terbuka, serta ratusan pohon trembesi dan bunga anggrek Cattleya.",
    facts: [
      "Dinamai dari genus bunga anggrek tropis Cattleya yang menjadi salah satu koleksi tanaman hias unggulan taman ini.",
      "Danau buatan di tengah taman berfungsi ganda sebagai pengendali banjir lokal yang menampung limpasan air hujan dari kawasan Tomang.",
      "Merupakan salah satu taman kota paling populer untuk olahraga lari pagi, rekreasi keluarga, dan pemotretan bertema alam di Jakarta Barat."
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

