/**
 * Comprehensive Geospatial Configuration of Jakarta
 * Mapped using real Google Maps spatial topology as reference.
 * Coordinate Convention:
 * - Origin [0, 0, 0] = Bundaran Hotel Indonesia (Bundaran HI)
 * - North = -Z (Menuju Sarinah, Patung Kuda, Monas, Istana Merdeka, Istiqlal)
 * - South = +Z (Menuju Dukuh Atas, Wisma 46, JPO Phinisi, Semanggi, SCBD, GBK, Bundaran Senayan)
 * - East  = +X (Menuju Menteng, Cikini, Kuningan / Rasuna Said, Cawang)
 * - West  = -X (Menuju Tanah Abang, Thamrin Nine, DPR/MPR Senayan, Slipi)
 */

export const JAKARTA_LANDMARKS = [
  // ==========================================
  // ZONA 1: MEDAN MERDEKA & JAKARTA PUSAT UTARA
  // ==========================================
  {
    id: "istana-merdeka",
    name: "Istana Merdeka & Istana Negara",
    category: "Pemerintahan & Sejarah",
    tagline: "Kediaman Resmi Kepresidenan Republik Indonesia",
    height: "24 meter (2 lantai kolonial)",
    year: "1879",
    architect: "Drossaers (Biro Arsitek Hindia Belanda)",
    location: "Jl. Medan Merdeka Utara, Gambir, Jakarta Pusat",
    coordinates: { lat: -6.170166, lng: 106.824165 },
    position: [0, 0, -455],
    labelHeight: 28,
    cameraPosition: [0, 45, -390],
    cameraTarget: [0, 10, -455],
    description: "Kompleks Istana Kepresidenan RI yang menghadap langsung ke Taman Medan Merdeka (Monas). Bangunan bergaya Neo-Palladian putih bersih dengan deretan pilar Korintus megah ini menjadi lokasi upacara detik-detik Proklamasi Kemerdekaan setiap 17 Agustus.",
    facts: [
      "Kompleks ini mencakup Istana Merdeka (menghadap selatan ke Monas) dan Istana Negara (menghadap utara ke Jl. Veteran).",
      "Awalnya dibangun pada tahun 1873 sebagai kediaman Gubernur Jenderal Hindia Belanda dengan nama Istana Gambir.",
      "Nama 'Istana Merdeka' diresmikan langsung oleh Presiden Soekarno pada 28 Desember 1949."
    ]
  },
  {
    id: "masjid-istiqlal",
    name: "Masjid Istiqlal",
    category: "Ikon Religi & Nasional",
    tagline: "Masjid Terbesar di Asia Tenggara & Simbol Kemerdekaan",
    height: "96,66 meter (Menara) / 45m (Kubah)",
    year: "1978",
    architect: "Friedrich Silaban",
    location: "Jl. Taman Wijaya Kusuma, Pasar Baru, Jakarta Pusat",
    coordinates: { lat: -6.17017, lng: 106.83139 },
    position: [145, 0, -410],
    labelHeight: 52,
    cameraPosition: [95, 65, -345],
    cameraTarget: [145, 22, -410],
    description: "Masjid nasional Republik Indonesia yang berdiri di sisi timur laut lapangan Medan Merdeka. Dirancang oleh Friedrich Silaban (seorang arsitek Kristen Protestan) dengan gaya modernis tropis berlapis marmer putih dan baja tahan karat.",
    facts: [
      "Diameter kubah utamanya tepat 45 meter — melambangkan tahun kemerdekaan Indonesia 1945.",
      "Tinggi menara tunggalnya 6.666 cm (lapisan marmer) yang melambangkan jumlah ayat Al-Qur'an.",
      "Terhubung dengan Gereja Katedral di seberang jalan melalui 'Terowongan Silaturahmi' bawah tanah sebagai simbol toleransi beragama."
    ]
  },
  {
    id: "gereja-katedral",
    name: "Gereja Katedral Jakarta",
    category: "Ikon Religi & Cagar Budaya",
    tagline: "Arsitektur Neo-Gotik Bersejarah dengan Menara Kembar",
    height: "60 meter (Menara Kembar)",
    year: "1901",
    architect: "Antonius Dijkmans & M.J. Hulswit",
    location: "Jl. Katedral No. 7B, Pasar Baru, Jakarta Pusat",
    coordinates: { lat: -6.169225, lng: 106.833063 },
    position: [225, 0, -410],
    labelHeight: 48,
    cameraPosition: [185, 50, -350],
    cameraTarget: [225, 20, -410],
    description: "Gereja Katolik Roma bergaya arsitektur Neo-Gotik Eropa yang diresmikan pada tahun 1901. Terkenal dengan tiga menara besi putih yang menjulang tajam dan jendela kaca patri mawar (Rozeta) di fasad depannya.",
    facts: [
      "Kedua menara depan setinggi 60 meter dibuat dari rangka besi tuang untuk mengantisipasi gempa bumi di wilayah tropis.",
      "Menara tengah disebut 'Menara Angelus Dei', menara utara 'Turris Davidica', dan menara selatan 'Menara Gading'.",
      "Berdiri berdampingan tepat di hadapan Masjid Istiqlal sebagai lambang kerukunan umat beragama di Indonesia."
    ]
  },
  {
    id: "monas",
    name: "Monumen Nasional (Monas)",
    category: "Landmark Utama",
    tagline: "Titik Nol Spiritual Ibu Kota & Lidah Api Kemerdekaan",
    height: "132 meter",
    year: "1975",
    architect: "Friedrich Silaban & R.M. Soedarsono",
    location: "Lapangan Medan Merdeka, Jakarta Pusat",
    coordinates: { lat: -6.175392, lng: 106.827153 },
    position: [0, 0, -320],
    labelHeight: 142,
    cameraPosition: [75, 70, -230],
    cameraTarget: [0, 45, -320],
    description: "Tugu peringatan setinggi 132 meter di jantung Lapangan Medan Merdeka seluas 80 hektar. Puncak monumen dimahkotai lidah api perunggu seberat 14,5 ton yang dilapisi emas murni 50 kg.",
    facts: [
      "Bentuk cawan dan tugu obelisk melambangkan pasangan Lesung dan Alu, alat penumbuk padi tradisional Nusantara.",
      "Museum Sejarah Nasional di bagian dasar menampilkan 51 diorama perjalanan sejarah bangsa Indonesia sejak masa prasejarah.",
      "Taman Medan Merdeka di sekelilingnya dirancang dengan empat sumbu jalan diagonal yang bertemu tepat di Monas."
    ]
  },
  {
    id: "stasiun-gambir",
    name: "Stasiun Gambir",
    category: "Simpul Transportasi",
    tagline: "Stasiun Kereta Api Antar-Kota Utama Jakarta",
    height: "28 meter (Jalur Layang)",
    year: "1884 (Renovasi Layang 1992)",
    architect: "Staatsspoorwegen / PT KAI",
    location: "Jl. Medan Merdeka Timur No. 1, Jakarta Pusat",
    coordinates: { lat: -6.176655, lng: 106.830613 },
    position: [130, 0, -320],
    labelHeight: 30,
    cameraPosition: [185, 45, -270],
    cameraTarget: [130, 12, -320],
    description: "Stasiun kereta api kelas besar tipe A yang terletak tepat di sisi timur Taman Monas. Memiliki ciri khas atap joglo memanjang berwarna hijau zamrud dan jalur rel kereta api layang (elevated railway) yang membelah pusat kota.",
    facts: [
      "Pada tahun 1992, jalur rel Stasiun Gambir dinaikkan menjadi jalur layang pertama di Indonesia untuk menghilangkan kemacetan pintu perlintasan.",
      "Melayani kereta api eksekutif jarak jauh menuju Bandung, Cirebon, Semarang, Yogyakarta, Solo, Surabaya, dan Malang."
    ]
  },
  {
    id: "patung-kuda",
    name: "Bundaran Patung Kuda Arjuna Wijaya & Bank Indonesia",
    category: "Monumen & Finansial",
    tagline: "Gerbang Utara Koridor M.H. Thamrin & Kompleks Bank Sentral",
    height: "25 meter (Monumen) / 140m (Menara BI)",
    year: "1987",
    architect: "Nyoman Nuarta (Pematung)",
    location: "Persimpangan Jl. M.H. Thamrin & Jl. Medan Merdeka Barat",
    coordinates: { lat: -6.180495, lng: 106.822845 },
    position: [0, 0, -200],
    labelHeight: 32,
    cameraPosition: [45, 35, -155],
    cameraTarget: [0, 12, -200],
    description: "Monumen patung kereta perang Arjuna dan Batara Kresna yang ditarik oleh delapan ekor kuda yang sedang berlari kencang. Berdiri tepat di depan kantor pusat Bank Indonesia (BI) di ujung utara Jalan M.H. Thamrin.",
    facts: [
      "Delapan kuda melambangkan delapan filosofi kepemimpinan 'Asta Brata' dalam kebudayaan Nusantara.",
      "Dibuat dari bahan tembaga dan kuningan oleh pematung legendaris Nyoman Nuarta.",
      "Di sisi baratnya berdiri megah Menara Kembar Bank Indonesia sebagai pusat kebijakan moneter nasional."
    ]
  },

  // ==========================================
  // ZONA 2: KORIDOR M.H. THAMRIN & BUNDARAN HI
  // ==========================================
  {
    id: "gedung-sarinah",
    name: "Gedung Sarinah Thamrin",
    category: "Cagar Budaya & Ritel",
    tagline: "Pencakar Langit & Pusat Perbelanjaan Modern Pertama di Indonesia",
    height: "74 meter (15 lantai)",
    year: "1966 (Transformasi 2022)",
    architect: "Friedrich Silaban & Airmas Asri (Renovasi)",
    location: "Jl. M.H. Thamrin No. 11, Menteng, Jakarta Pusat",
    coordinates: { lat: -6.187368, lng: 106.824056 },
    position: [42, 0, -105],
    labelHeight: 65,
    cameraPosition: [-15, 50, -70],
    cameraTarget: [42, 28, -105],
    description: "Digagas oleh Presiden Soekarno sebagai etalase produk dalam negeri dan pusat ritel modern pertama di Indonesia. Telah direvitalisasi dengan amphitheater terbuka dan relief bersejarah yang dipugar kembali.",
    facts: [
      "Gedung pertama di Indonesia yang memiliki eskalator (tangga berjalan) dan sistem pendingin ruangan terpusat pada tahun 1966.",
      "Nama 'Sarinah' diambil dari nama pengasuh masa kecil Bung Karno yang mengajarkan nilai cinta kasih kepada rakyat kecil."
    ]
  },
  {
    id: "bundaran-hi",
    name: "Bundaran Hotel Indonesia & Patung Selamat Datang",
    category: "Ikon Pusat Kota",
    tagline: "Titik Sentral Jakarta & Simbol Keramahan Bangsa",
    height: "30 meter",
    year: "1962",
    architect: "Henk Ngantung & Edhi Sunarso",
    location: "Jl. M.H. Thamrin, Menteng, Jakarta Pusat",
    coordinates: { lat: -6.195034, lng: 106.823028 },
    position: [0, 0, 0],
    labelHeight: 34,
    cameraPosition: [45, 36, 52],
    cameraTarget: [0, 10, 0],
    description: "Kolam air mancur bundar raksasa dengan Monumen Selamat Datang di tengahnya. Sepasang pemuda-pemudi perunggu melambaikan tangan menyambut tamu negara yang datang dari arah utara menuju pusat Jakarta.",
    facts: [
      "Diresmikan oleh Presiden Soekarno menjelang perhelatan Asian Games IV tahun 1962.",
      "Tepat di bawah kolam Bundaran HI terdapat Stasiun MRT Bundaran HI yang menghubungkan utara dan selatan Jakarta.",
      "Dikelilingi oleh kuartet gedung megah: Hotel Indonesia Kempinski, Grand Indonesia, Plaza Indonesia, dan Mandarin Oriental."
    ]
  },
  {
    id: "menara-bca",
    name: "Menara BCA & Grand Indonesia",
    category: "Pencakar Langit Komersial",
    tagline: "Menara Perkantoran Grade-A & Megablok Ritel",
    height: "230 meter (56 lantai)",
    year: "2008",
    architect: "RTKL Associates",
    location: "Jl. M.H. Thamrin No. 1, Jakarta Pusat",
    coordinates: { lat: -6.195612, lng: 106.821389 },
    position: [-52, 0, 12],
    labelHeight: 145,
    cameraPosition: [15, 75, 65],
    cameraTarget: [-52, 55, 12],
    description: "Menara utama kantor pusat Bank Central Asia (BCA) yang terintegrasi dengan kompleks mal Grand Indonesia dan Hotel Indonesia Kempinski di sisi barat Bundaran HI.",
    facts: [
      "Puncak gedung pada lantai 56 ditempati restoran terbuka tertinggi yang menyuguhkan panorama 360 derajat kota Jakarta.",
      "Fasad kaca biru reflektifnya dilengkapi pencahayaan garis LED dinamis saat malam hari."
    ]
  },
  {
    id: "autograph-tower",
    name: "Autograph Tower (Thamrin Nine)",
    category: "Supertall Skyscraper",
    tagline: "Gedung Pencakar Langit Tertinggi di Indonesia & Belahan Bumi Selatan",
    height: "382,9 meter (75 lantai)",
    year: "2022",
    architect: "Kohn Pedersen Fox (KPF)",
    location: "Jl. M.H. Thamrin Kav. 8-9, Jakarta Pusat",
    coordinates: { lat: -6.199251, lng: 106.820612 },
    position: [-85, 0, 48],
    labelHeight: 205,
    cameraPosition: [-15, 110, 105],
    cameraTarget: [-85, 90, 48],
    description: "Memegang rekor resmi sebagai gedung tertinggi di Indonesia (382,9 meter) dan gedung pertama berstatus 'Supertall' (>300m) di Jakarta. Berdiri berdampingan dengan menara kembarannya, Luminary Tower (304m).",
    facts: [
      "Mengalahkan rekor Wisma 46 dan Gama Tower sebagai bangunan tertinggi di Indonesia sejak tahun 2022.",
      "Dilengkapi dek observasi langit bertingkat kaca (Up at Thamrin Nine) di puncak menara.",
      "Terhubung langsung dengan terowongan pejalan kaki bawah tanah menuju Stasiun MRT Dukuh Atas."
    ]
  },

  // ==========================================
  // ZONA 3: DUKUH ATAS, KARET & SUDIRMAN TENGAH
  // ==========================================
  {
    id: "wisma-46",
    name: "Wisma 46 (BNI City Tower)",
    category: "Pencakar Langit Ikonik",
    tagline: "Mahakarya Arsitektur Siluet Ujung Pena Kebanggaan Jakarta",
    height: "262 meter (50 lantai)",
    year: "1996",
    architect: "Zeidler Roberts Partnership & DP Architects",
    location: "Jl. Jend. Sudirman Kav. 1, Dukuh Atas, Jakarta Pusat",
    coordinates: { lat: -6.204561, lng: 106.821034 },
    position: [-50, 0, 125],
    labelHeight: 168,
    cameraPosition: [20, 80, 175],
    cameraTarget: [-50, 65, 125],
    description: "Berdiri tepat di tepi selatan Kanal Banjir Barat (Sungai Ciliwung) di kawasan Dukuh Atas. Puncak menara melengkung tajam menyerupai mata pena atau layar kapal menjadikannya siluet paling mudah dikenali di langit Jakarta.",
    facts: [
      "Menjadi gedung tertinggi di Indonesia selama bijna dua dekade sejak diresmikan pada tahun 1996.",
      "Berada tepat di kawasan Transit Oriented Development (TOD) Dukuh Atas yang mempertemukan MRT, LRT, KRL, Kereta Bandara, dan TransJakarta."
    ]
  },
  {
    id: "sampoerna-strategic",
    name: "Sampoerna Strategic Square & WTC Sudirman",
    category: "Arsitektur Neoklasik",
    tagline: "Menara Kembar Berkubah Megah di Koridor Karet Sudirman",
    height: "158 meter (32 lantai)",
    year: "1997",
    architect: "DP Architects",
    location: "Jl. Jend. Sudirman Kav. 45-46, Jakarta Selatan",
    coordinates: { lat: -6.214122, lng: 106.819512 },
    position: [52, 0, 175],
    labelHeight: 112,
    cameraPosition: [-15, 65, 220],
    cameraTarget: [52, 45, 175],
    description: "Sepasang menara perkantoran kembar bergaya postmodern-neoklasik yang dihubungkan oleh atrium kubah kaca besar. Sangat mencolok di antara gedung-gedung kaca modern di Jalan Jenderal Sudirman.",
    facts: [
      "Kedua menara utamanya dimahkotai kubah bulat klasik dengan iluminasi cahaya kuning hangat pada malam hari.",
      "Berdampingan langsung dengan kompleks World Trade Center (WTC) Jakarta dan Menara Astra."
    ]
  },
  {
    id: "jpo-phinisi",
    name: "JPO Phinisi Karet Sudirman",
    category: "Ikon Ruang Publik & Infrastruktur",
    tagline: "Jembatan Penyeberangan & Anjungan Pandang Berbentuk Kapal Phinisi",
    height: "16 meter (Anjungan Atas)",
    year: "2022",
    architect: "Dinas Bina Marga DKI Jakarta & Arsitek Nusantara",
    location: "Jl. Jend. Sudirman, Karet Tengsin, Jakarta Pusat",
    coordinates: { lat: -6.213456, lng: 106.819876 },
    position: [0, 0, 200],
    labelHeight: 24,
    cameraPosition: [32, 24, 235],
    cameraTarget: [0, 10, 200],
    description: "Jembatan Penyeberangan Orang (JPO) dan Sepeda (JPS) modern yang didesain menyerupai kapal layar tradisional Phinisi berwarna oranye-terakota menyala. Dilengkapi dek anjungan pandang untuk menikmati pemandangan gedung-gedung tinggi Jalan Sudirman.",
    facts: [
      "Dilengkapi galeri apresiasi khusus untuk mengenang perjuangan para tenaga medis saat pandemi.",
      "Memiliki jalur khusus sepeda dan lift aksesibilitas sehingga ramah bagi penyandang disabilitas dan pesepeda."
    ]
  },

  // ==========================================
  // ZONA 4: SIMPANG SEMANGGI, GATOT SUBROTO & KUNINGAN
  // ==========================================
  {
    id: "simpang-semanggi",
    name: "Simpang Susun Semanggi",
    category: "Infrastruktur Ikonik",
    tagline: "Jembatan Layang Melingkar Pertemuan Sudirman & Gatot Subroto",
    height: "22 meter (Flyover Melingkar)",
    year: "1962 (Simpang Susun Baru 2017)",
    architect: "Sutami (1962) & Wijaya Karya (2017)",
    location: "Pertemuan Jl. Jend. Sudirman & Jl. Gatot Subroto",
    coordinates: { lat: -6.219422, lng: 106.813215 },
    position: [0, 0, 270],
    labelHeight: 28,
    cameraPosition: [70, 65, 330],
    cameraTarget: [0, 8, 270],
    description: "Jembatan layang cloverleaf (daun semanggi) pertama di Indonesia yang dibangun tahun 1962, kini diperkuat dengan dua jalur layang melingkar penuh (Simpang Susun Semanggi) di atasnya yang menghubungkan koridor Barat-Timur Gatot Subroto dengan Utara-Selatan Sudirman.",
    facts: [
      "Filosofi daun semanggi dipilih oleh Bung Karno sebagai lambang persatuan empat penjuru mata angin ibu kota.",
      "Struktur beton box-girder melengkung di atasnya dibangun tanpa tiang di tengah jalur tol menggunakan metode balanced cantilever."
    ]
  },
  {
    id: "gedung-dpr-mpr",
    name: "Gedung MPR / DPR RI (Parlemen Senayan)",
    category: "Pemerintahan & Arsitektur Ikonik",
    tagline: "Gedung Kura-Kura Monumental Karya Soejoedi Wirjoatmodjo",
    height: "40 meter (Kubah) / 100m (Gedung Nusantara III)",
    year: "1968",
    architect: "Soejoedi Wirjoatmodjo",
    location: "Jl. Gatot Subroto, Senayan, Jakarta Pusat",
    coordinates: { lat: -6.209872, lng: 106.800156 },
    position: [-210, 0, 235],
    labelHeight: 55,
    cameraPosition: [-155, 50, 295],
    cameraTarget: [-210, 18, 235],
    description: "Kompleks lembaga legislatif Republik Indonesia yang terkenal dengan Gedung Nusantara beratap kubah lengkung parabolik berwarna hijau zamrud (sering disebut Gedung Kura-Kura atau Kepakan Sayap Burung).",
    facts: [
      "Atap lengkung beton bentang lebar Gedung Nusantara melambangkan kepakan sayap burung yang siap terbang tinggi.",
      "Dirancang oleh arsitek pelopor modernisme Indonesia, Soejoedi Wirjoatmodjo, atas penugasan Presiden Soekarno untuk CONEFO 1965."
    ]
  },
  {
    id: "mega-kuningan",
    name: "Kawasan Mega Kuningan & Rasuna Said",
    category: "Kawasan Diplomatik & Bisnis",
    tagline: "Segitiga Emas Timur: Gama Tower, Bakrie Tower & Kedutaan Besar",
    height: "285 meter (Gama Tower) / 215m (Bakrie Tower)",
    year: "1990 - Sekarang",
    architect: "Berbagai Konsorsium Arsitek Dunia",
    location: "Jl. H.R. Rasuna Said & Mega Kuningan, Jakarta Selatan",
    coordinates: { lat: -6.227123, lng: 106.828412 },
    position: [200, 0, 260],
    labelHeight: 165,
    cameraPosition: [130, 85, 330],
    cameraTarget: [200, 55, 260],
    description: "Salah satu sudut utama Segitiga Emas Jakarta di sisi timur Simpang Semanggi. Merupakan pusat kedutaan besar negara sahabat dan rumah bagi menara-menara berarsitektur unik seperti Bakrie Tower (bentuk berpilin/twist) dan Gama Tower (285m).",
    facts: [
      "Dikenal sebagai kawasan diplomatik karena menjadi lokasi Kedutaan Besar Australia, Inggris, Belanda, India, Malaysia, dan Singapura.",
      "Dilintasi oleh jalur LRT Jabodebek di sepanjang median Jalan H.R. Rasuna Said."
    ]
  },

  // ==========================================
  // ZONA 5: SCBD, SENAYAN (GBK) & BUNDARAN SENAYAN
  // ==========================================
  {
    id: "scbd-district",
    name: "SCBD (Sudirman Central Business District)",
    category: "Kawasan Finansial Modern",
    tagline: "Pusat Keuangan & Bursa Efek Indonesia (IDX)",
    height: "279 meter (Treasury Tower)",
    year: "1995 - Sekarang",
    architect: "Masterplan PT Danayasa Arthatama",
    location: "Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan",
    coordinates: { lat: -6.226845, lng: 106.809425 },
    position: [80, 0, 380],
    labelHeight: 175,
    cameraPosition: [15, 90, 450],
    cameraTarget: [80, 55, 380],
    description: "Kawasan bisnis superblok paling prestisius di Indonesia seluas 45 hektar. Dipenuhi deretan gedung pencakar langit berfasad kaca modern seperti Treasury Tower, District 8, Pacific Place, dan Gedung Bursa Efek Indonesia.",
    facts: [
      "Treasury Tower setinggi 279,5 meter di SCBD Lot 28 merupakan gedung tertinggi di kawasan Jakarta Selatan.",
      "Seluruh jaringan kabel listrik, serat optik, dan drainase di kawasan SCBD ditanam di dalam terowongan utilitas bawah tanah."
    ]
  },
  {
    id: "gbk-senayan",
    name: "Gelora Bung Karno (GBK) & Hutan Kota",
    category: "Ikon Olahraga & Ekologi",
    tagline: "Stadion Utama Temu Gelang & Paru-Paru Hijau Senayan",
    height: "35 meter",
    year: "1962 (Renovasi 2018)",
    architect: "Friedrich Silaban & Insinyur Indonesia",
    location: "Jl. Pintu Satu Senayan, Jakarta Pusat",
    coordinates: { lat: -6.218524, lng: 106.801783 },
    position: [-140, 0, 375],
    labelHeight: 38,
    cameraPosition: [-65, 65, 445],
    cameraTarget: [-140, 15, 375],
    description: "Kompleks olahraga kebanggaan bangsa yang mencakup Stadion Utama GBK dengan atap temu gelang raksasa, Istora Senayan, Stadion Akuatik, serta Hutan Kota GBK yang menjadi oase ruang terbuka hijau di tengah hutan beton Jakarta.",
    facts: [
      "Menjadi tuan rumah Asian Games 1962 dan Asian Games 2018 dengan sistem pencahayaan fasad LED 3.500 lux.",
      "Hutan Kota GBK seluas 4 hektar dilengkapi kolam ekologis dengan latar belakang megah deretan pencakar langit SCBD."
    ]
  },
  {
    id: "bundaran-senayan",
    name: "Bundaran Senayan & Patung Pemuda Membangun",
    category: "Monumen & Gerbang Selatan",
    tagline: "Simbol Semangat Generasi Muda di Ujung Selatan Sudirman",
    height: "27 meter",
    year: "1972",
    architect: "Munir Pamuncak & Tim Pematung Ama",
    location: "Ujung Selatan Jl. Jend. Sudirman / Jl. Sisingamangaraja",
    coordinates: { lat: -6.228612, lng: 106.802145 },
    position: [0, 0, 480],
    labelHeight: 34,
    cameraPosition: [45, 38, 530],
    cameraTarget: [0, 12, 480],
    description: "Bundaran air mancur di titik pertemuan Jalan Jenderal Sudirman, Jalan Sisingamangaraja (menuju Blok M), dan Jalan Pattimura (Kebayoran Baru). Di tengahnya berdiri kokoh Patung Pemuda Membangun yang menjunjung piringan api yang menyala.",
    facts: [
      "Sering dijuluki 'Patung Pizza Man' oleh warga Jakarta karena pose sang pemuda yang mengangkat cawan obor api tinggi di atas kepala.",
      "Dikelilingi oleh pusat perbelanjaan elit Plaza Senayan, Senayan City, Ratu Plaza, dan kantor pusat Panin Bank."
    ]
  }
];

export const CITY_CORRIDOR_CONFIG = {
  center: [0, 0, 0], // Bundaran HI as spatial center [0,0,0]
  roadWidth: 22,
  buswayLaneWidth: 4,
  sidewalkWidth: 6,
  corridorLength: 1080, // Membentang dari Istana Merdeka (z=-480) hingga Bundaran Senayan (z=520)
  gatotSubrotoLength: 800, // Membentang dari DPR/Slipi (x=-380) hingga Kuningan (x=+380)
  totalSkyscrapers: 160,
  trafficDensity: 64
};

export const GOOGLE_TILES_CONFIG = {
  apiKey: "",
  center: {
    lat: -6.175392,
    lng: 106.827153,
    elevation: 15.0
  }
};
