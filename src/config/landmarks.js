/**
 * Comprehensive Geospatial Configuration of Central & South Jakarta (Jakarta Pusat & Segitiga Emas)
 * Mapped using real OpenStreetMap & Google Maps spatial topology as reference:
 *
 * 1. Straight North-South Central Spine (X = 0):
 *    Istana Merdeka (Z=-455) -> Monas (Z=-320) -> Patung Kuda (Z=-215) ->
 *    Kebon Sirih -> Sarinah (Z=-105) -> Bundaran HI (Z=0) -> Dukuh Atas Bridge (Z=+90).
 *
 * 2. The Real 23° SSW Bend of Jl. Jenderal Sudirman at Dukuh Atas (Z > +90):
 *    From Dukuh Atas (0, 0, 90), Jl. Jenderal Sudirman angles ~23° Southwest (bearing 203° SSW)
 *    along direction vector (-sin 23°, +cos 23°) = (-0.39, +0.92):
 *    - Wisma 46 (-52, 0, 145)
 *    - Sampoerna Strategic (-38, 0, 205)
 *    - JPO Phinisi (-90, 0, 230)
 *    - Simpang Susun Semanggi (-125, 0, 310)
 *    - SCBD (-68, 0, 385)
 *    - GBK Senayan (-225, 0, 410)
 *    - Bundaran Senayan (-195, 0, 475)
 *
 * 3. Segitiga Emas (Golden Triangle) East Spine:
 *    Jl. HOS Cokroaminoto (Menteng) -> Taman Suropati -> Jl. HR Rasuna Said (Kuningan)
 *    connected across the south by Jl. Gatot Subroto & Jl. Prof. Dr. Satrio.
 */

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
    coordinates: { lat: -6.170166, lng: 106.824165 },
    position: [-25, 0, -455],
    labelHeight: 28,
    cameraPosition: [-25, 48, -385],
    cameraTarget: [-25, 10, -455],
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
    position: [135, 0, -420],
    rotationY: Math.PI / 4, // Rotated ~45° NW-SE aligned with Qibla as in real map
    labelHeight: 52,
    cameraPosition: [85, 65, -350],
    cameraTarget: [135, 22, -420],
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
    coordinates: { lat: -6.169225, lng: 106.833063 },
    position: [195, 0, -445],
    labelHeight: 48,
    cameraPosition: [165, 45, -380],
    cameraTarget: [195, 20, -445],
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
    coordinates: { lat: -6.1704, lng: 106.8355 },
    position: [265, 0, -415],
    rotationY: 0.48, // Tilted ~28° CCW (WSW-ENE axis) as in real Jakarta map
    labelHeight: 38,
    cameraPosition: [230, 52, -345],
    cameraTarget: [265, 14, -415],
    description: "Taman bersejarah di sebelah timur Katedral dan Istiqlal yang pada masa kolonial dikenal sebagai Waterlooplein. Di tengahnya berdiri Monumen Pembebasan Irian Barat berupa patung manusia memutus rantai belenggu di atas menara kembar dengan kolam air mengapitnya.",
    facts: [
      "Sumbu taman Lapangan Banteng miring sekitar 28° terhadap utara mengikuti tata kota lama Weltevreden.",
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
    coordinates: { lat: -6.175392, lng: 106.827153 },
    position: [0, 0, -320],
    labelHeight: 142,
    cameraPosition: [95, 78, -225],
    cameraTarget: [0, 48, -320],
    description: "Monumen peringatan setinggi 132 meter di jantung Lapangan Medan Merdeka seluas 80 hektare. Taman Medan Merdeka memiliki bentuk trapesium asimetris (sisi Jl. Medan Merdeka Timur miring 13° ke arah tenggara) dengan empat jalur diagonal X-Paths, Taman Rusa di tenggara, dan Kolam Air Mancur Menari di sisi barat.",
    facts: [
      "Lidah api di puncak obelisk dilapisi emas murni seberat 50 kilogram.",
      "Bentuk taman Medan Merdeka melebar di sisi selatan karena Jl. Medan Merdeka Timur dan jalur rel Gambir miring 167° SSE."
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
    coordinates: { lat: -6.176655, lng: 106.830618 },
    position: [98, 0, -305],
    rotationY: 0.22, // 13° SSE angle matching Medan Merdeka Timur & elevated rail line
    labelHeight: 28,
    cameraPosition: [155, 42, -265],
    cameraTarget: [98, 12, -305],
    description: "Stasiun kereta api utama Jakarta Pusat yang berdiri di atas jalur rel layang (elevated railway viaduct) sepanjang sisi timur Taman Monas. Jalur rel layang ini membentang miring 167° SSE dari Juanda melewati Gambir, Gondangdia, dan Cikini menuju Manggarai.",
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
    position: [0, 0, -215],
    labelHeight: 32,
    cameraPosition: [55, 35, -168],
    cameraTarget: [-15, 14, -215],
    description: "Titik nol koridor Jalan M.H. Thamrin di sudut barat daya Monas. Di bundaran ini terdapat air mancur Patung Kuda Arjuna Wijaya (delapan kuda menarik kereta perang Arjuna & Batara Kresna) yang diapit oleh kompleks Menara Kembar Bank Indonesia dan Kementerian Pariwisata.",
    facts: [
      "Delapan patung kuda melambangkan delapan filosofi kepemimpinan Hasta Brata.",
      "Kompleks kantor pusat Bank Indonesia berdiri megah di sudut barat daya persimpangan ini hingga Jl. Kebon Sirih."
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
    position: [155, 0, -165],
    labelHeight: 26,
    cameraPosition: [125, 35, -125],
    cameraTarget: [155, 10, -165],
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
    location: "Persimpangan Jl. M.H. Thamrin & Jl. K.H. Wahid Hasyim",
    coordinates: { lat: -6.187311, lng: 106.824092 },
    position: [32, 0, -105],
    labelHeight: 66,
    cameraPosition: [-35, 45, -65],
    cameraTarget: [32, 26, -105],
    description: "Berdiri tepat di persimpangan lampu merah Jl. M.H. Thamrin dan Jl. K.H. Wahid Hasyim (dekat Jl. Sabang / H. Agus Salim). Sarinah adalah gedung pencakar langit dan pusat perbelanjaan modern pertama di Indonesia yang kini memiliki amphitheater budaya dan relief bersejarah.",
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
    description: "Jantung ruang publik Jakarta tempat berakhirnya Jl. M.H. Thamrin dan dimulainya Jl. Jenderal Sudirman. Dari bundaran berdiameter 120 meter ini, Jl. Imam Bonjol dan Jl. Sutan Syahrir memancar secara diagonal ke arah tenggara menuju kawasan Menteng dan Taman Suropati.",
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
    tagline: "Superblok Ikonik di Sisi Barat Bundaran HI",
    height: "230 meter (56 lantai)",
    year: "2008",
    architect: "RTKL Associates",
    location: "Jl. M.H. Thamrin No.1, Menteng, Jakarta Pusat",
    coordinates: { lat: -6.195924, lng: 106.821388 },
    position: [-46, 0, 12],
    labelHeight: 145,
    cameraPosition: [42, 82, 68],
    cameraTarget: [-46, 65, 12],
    description: "Kompleks terpadu Grand Indonesia yang mengintegrasikan gedung cagar budaya Hotel Indonesia Kempinski (1962), mal West & East Mall yang dihubungkan jembatan kaca bertingkat, Kempinski Private Residences, dan Menara BCA setinggi 230 meter.",
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
    coordinates: { lat: -6.199444, lng: 106.821667 },
    position: [-48, 0, 56],
    labelHeight: 205,
    cameraPosition: [55, 128, 108],
    cameraTarget: [-48, 95, 56],
    description: "Kompleks superblok Thamrin Nine di antara Bundaran HI dan Dukuh Atas (tepat di sebelah timur Waduk Melati). Autograph Tower setinggi 382,9 meter adalah gedung tertinggi di Indonesia, berdampingan dengan Luminary Tower (304m) dan mal Agora.",
    facts: [
      "Gedung tertinggi pertama di Indonesia yang melampaui kategori 'Supertall' (>300 meter).",
      "Berdampingan langsung dengan Waduk Melati di sisi baratnya."
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
    coordinates: { lat: -6.1994, lng: 106.8326 },
    position: [135, 0, 52],
    labelHeight: 28,
    cameraPosition: [88, 45, 95],
    cameraTarget: [135, 8, 52],
    description: "Jantung kawasan *Garden City* Menteng (Nieuw Gondangdia) yang menjadi titik simpul pertemuan boulevard diagonal Jl. Imam Bonjol (dari Bundaran HI), Jl. Pangeran Diponegoro (menuju Cikini/Salemba), dan Jl. Teuku Umar (menuju Tugu Tani & Situ Lembang). Di sekitarnya berdiri rumah dinas pejabat negara, kedutaan besar, dan Bappenas.",
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
    tagline: "Titik Belok 23° Jl. Jenderal Sudirman & Pertemuan 5 Moda Transportasi",
    height: "28 meter (Jembatan & Stasiun)",
    year: "2019 (TOD Terpadu)",
    architect: "MRT Jakarta & Pemprov DKI",
    location: "Jl. Jenderal Sudirman & Kanal Banjir Barat, Jakarta Pusat",
    coordinates: { lat: -6.2018, lng: 106.82295 },
    position: [0, 0, 90],
    labelHeight: 34,
    cameraPosition: [58, 42, 132],
    cameraTarget: [0, 10, 90],
    description: "Titik geografi paling krusial di poros utama Jakarta: tepat saat melintasi jembatan Kanal Banjir Barat dan jalur KRL di Dukuh Atas, jalan raya lurus dari Thamrin berbelok 23° ke arah Barat Daya (203° SSW) menjadi koridor diagonal Jalan Jenderal Sudirman.",
    facts: [
      "Titik pertemuan 5 moda transportasi: MRT Jakarta, KRL Commuter Line (Stasiun Sudirman), KA Bandara (Stasiun BNI City), LRT Jabodebek, dan TransJakarta.",
      "Tepat di titik inilah Jalan Jenderal Sudirman mulai membelok 23° ke arah barat daya menuju Semanggi dan Senayan."
    ]
  },

  // =====================================================
  // ZONA 4: POROS DIAGONAL SUDIRMAN (23° SSW), SEMANGGI & SENAYAN
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
    coordinates: { lat: -6.203647, lng: 106.819975 },
    position: [-52, 0, 145],
    rotationY: -0.4, // Aligned with 23° SSW Sudirman diagonal
    labelHeight: 175,
    cameraPosition: [25, 92, 195],
    cameraTarget: [-52, 75, 145],
    description: "Menara perkantoran setinggi 262 meter dengan puncak melengkung menyerupai mata pena atau layar phinisi. Berdiri tepat di sisi selatan Kanal Banjir Barat dan Stasiun BNI City pada awal segmen diagonal Jalan Jenderal Sudirman.",
    facts: [
      "Pernah memegang rekor gedung tertinggi di Indonesia selama hampir 20 tahun (1996–2015)."
    ]
  },
  {
    id: "sampoerna-strategic",
    name: "Sampoerna Strategic Square & Flyover Karet",
    shortName: "Sampoerna Strategic",
    category: "Arsitektur Neo-Klasik Kembar",
    tagline: "Menara Kembar Berkubah di Persimpangan Sudirman – Prof. Dr. Satrio",
    height: "158 meter (32 lantai)",
    year: "1997",
    architect: "HOK (Hellmuth, Obata + Kassabaum)",
    location: "Jl. Jend. Sudirman Kav. 45-46, Bendungan Hilir / Karet",
    coordinates: { lat: -6.216521, lng: 106.819512 },
    position: [-38, 0, 205],
    rotationY: -0.4,
    labelHeight: 112,
    cameraPosition: [-110, 68, 235],
    cameraTarget: [-38, 52, 205],
    description: "Kompleks menara kembar bergaya Neo-Klasik dengan atap kubah berlapis kaca emas yang berdiri di titik pertemuan Jalan Jenderal Sudirman dan jalan layang Jl. Prof. Dr. Satrio (Casablanca – Karet).",
    facts: [
      "Tepat di depannya melintas Flyover Karet yang menghubungkan Tanah Abang/Mas Mansyur dengan Kuningan/Casablanca."
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
    coordinates: { lat: -6.214122, lng: 106.819844 },
    position: [-90, 0, 235],
    rotationY: -0.4, // Orthogonal across the 23° SSW Sudirman road
    labelHeight: 24,
    cameraPosition: [-50, 28, 272],
    cameraTarget: [-90, 10, 235],
    description: "Jembatan Penyeberangan Orang (JPO) dan Sepeda (JPS) berbentuk haluan kapal Phinisi berwarna oranye terakota yang melintang tegak lurus di atas koridor diagonal Jalan Jenderal Sudirman.",
    facts: [
      "Dilengkapi anjungan pandang terbuka untuk menikmati panorama garis langit Sudirman."
    ]
  },
  {
    id: "simpang-semanggi",
    name: "Simpang Susun Semanggi",
    shortName: "Simpang Semanggi",
    category: "Infrastruktur & Landmark Nasional",
    tagline: "Persimpangan Daun Semanggi Sudirman (203° SSW) × Gatot Subroto (145° SE)",
    height: "18 meter (2 Tingkat Jalan Layang)",
    year: "1962 / 2017 (Simpang Susun)",
    architect: "Ir. Sutami (1962) & Wijaya Karya (2017)",
    location: "Pertemuan Jl. Jend. Sudirman & Jl. Gatot Subroto",
    coordinates: { lat: -6.219582, lng: 106.813142 },
    position: [-125, 0, 310],
    rotationY: -0.4,
    labelHeight: 28,
    cameraPosition: [-45, 78, 375],
    cameraTarget: [-125, 10, 310],
    description: "Jembatan daun semanggi legendaris yang dirancang Ir. Sutami pada 1962 dan diperkuat dengan dua jalan layang melingkar (Simpang Susun Semanggi) pada 2017. Mempertemukan koridor diagonal Jl. Jenderal Sudirman (203° SSW) dengan Jl. Gatot Subroto / Tol Dalam Kota secara hampir tegak lurus.",
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
    tagline: "Kubah Sayap Garuda ('Gedung Kura-Kura') di Koridor Gatot Subroto Barat",
    height: "100 meter (Gedung Nusantara I)",
    year: "1968",
    architect: "Soejoedi Wirjoatmodjo",
    location: "Jl. Gatot Subroto, Senayan, Jakarta Pusat",
    coordinates: { lat: -6.210278, lng: 106.800278 },
    position: [-265, 0, 245],
    rotationY: 0.4,
    labelHeight: 48,
    cameraPosition: [-215, 58, 310],
    cameraTarget: [-265, 18, 245],
    description: "Kompleks Parlemen Republik Indonesia di sisi barat laut Simpang Semanggi pada koridor Jl. Gatot Subroto. Gedung Nusantara memiliki atap kubah parabolik hijau terbelah dua yang melambangkan kepakan sayap burung Garuda.",
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
    coordinates: { lat: -6.227512, lng: 106.826912 },
    position: [155, 0, 295],
    labelHeight: 165,
    cameraPosition: [72, 95, 365],
    cameraTarget: [155, 65, 295],
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
    coordinates: { lat: -6.224812, lng: 106.809143 },
    position: [-82, 0, 388],
    rotationY: -0.4,
    labelHeight: 175,
    cameraPosition: [-175, 92, 435],
    cameraTarget: [-82, 68, 388],
    description: "Distrik bisnis super-modern seluas 45 hektare di kuadran tenggara Simpang Semanggi. Merupakan pusat keuangan pasar modal Indonesia tempat berdirinya Gedung Bursa Efek Indonesia (IDX), Treasury Tower, District 8, dan Pacific Place.",
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
    position: [-235, 0, 395],
    labelHeight: 34,
    cameraPosition: [-150, 75, 475],
    cameraTarget: [-235, 14, 395],
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
    coordinates: { lat: -6.228612, lng: 106.802145 },
    position: [-190, 0, 475],
    labelHeight: 34,
    cameraPosition: [-135, 42, 530],
    cameraTarget: [-190, 12, 475],
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
    lat: -6.175392,
    lng: 106.827153,
    elevation: 15.0
  }
};
