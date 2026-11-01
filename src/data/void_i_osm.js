/**
 * Void I (Bintaro-Jurangmangu-Petukangan-Ulujami-Gandaria Selatan) road, water and
 * KRL rail geometry derived from OpenStreetMap.
 * Source: OpenStreetMap contributors, ODbL. Retrieved 2026-10-31 via the Overpass API.
 * Coordinates are stored directly in scene units using the unscaled GPS projection:
 *   x = (lng - 106.823048) * 14100
 *   z = (lat + 6.194957) * -14180
 * Unscaled keeps the six Void I anchors aligned with their real GPS positions.
 * Polylines are clipped to the box x=-1520..-240, z=535..1460 (rail z=270..1460) so the
 * shared edges with the Void C, Void H and central Jakarta datasets draw nothing twice.
 * Unnamed roads, flyovers, tunnels, and the hand-built MRT, Pondok Indah and JORR
 * corridors are excluded; named situ polygons are kept as closed rings facing up.
 */
export const VOID_I_OSM = {
  "meta": {
    "source": "OpenStreetMap contributors (ODbL)",
    "license": "ODbL 1.0",
    "retrieved": "2026-10-31",
    "api": "https://overpass-api.de/api/interpreter (base snapshot 2026-10-31T13:22:19Z)",
    "bbox": {
      "south": -6.305,
      "west": 106.705,
      "north": -6.232,
      "east": 106.802
    },
    "clipBox": {
      "minX": -1520,
      "maxX": -240,
      "minZ": 535,
      "maxZ": 1460
    },
    "railClipBox": {
      "minX": -1520,
      "maxX": -240,
      "minZ": 270,
      "maxZ": 1460
    },
    "projection": "projectGpsToScene",
    "projectionConstants": {
      "originLng": 106.823048,
      "originLat": -6.194957,
      "scaleX": 14100,
      "scaleZ": 14180
    },
    "simplification": 2,
    "roadCount": 704,
    "roadPointCount": 1789,
    "roadNameCount": 188,
    "waterwayCount": 19,
    "waterPointCount": 259,
    "waterBodyCount": 3,
    "waterBodyPointCount": 30,
    "railCount": 30,
    "railPointCount": 98,
    "note": "Jaringan arteri, kolektor, dan lokal Bintaro-Jurangmangu-Petukangan-Ulujami-Gandaria Selatan berikut tata air Pesanggrahan-Kali Grogol-Kali Ciputat dan rel KRL Tanah Abang-Merak. Batas timur x=-240 menempel klip Void H dan batas utara z=535 menempel klip inti Jakarta Selatan agar jalan dan air tidak digambar dua kali; cara yang sama dipakai untuk persegi Void C di x=-1440..-860, z<=580. Rel memakai klip z=270 supaya koridor KRL tersambung ke jaringan inti. Jalan tanpa nama, jalan layang, terowongan Kartini, koridor MRT Fatmawati, boulevard Metro Pondok Indah, dan JORR bangun-tangan dikecualikan karena sudah dimodelkan lebih dulu. Badan air bernama dengan luas minimal 140 unit persegi disimpan sebagai ring tertutup yang menghadap ke atas; polygon bertag water=river diringkas menjadi waterway."
  },
  "roads": [
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -586.2,
          1352.7
        ],
        [
          -544.7,
          1367.5
        ]
      ]
    },
    {
      "name": "Jalan Sekolah Duta Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -507.5,
          1266.7
        ],
        [
          -539.6,
          1232.1
        ],
        [
          -592.9,
          1210.6
        ]
      ]
    },
    {
      "name": "Jalan Metro Alam III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -569.8,
          1110.2
        ],
        [
          -580.1,
          1107.4
        ]
      ]
    },
    {
      "name": "Jalan Kartika Utama",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -558.3,
          976.2
        ],
        [
          -573.1,
          984.9
        ],
        [
          -579,
          992.3
        ]
      ]
    },
    {
      "name": "Jalan Niaga Hijau Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -674.2,
          1237.8
        ],
        [
          -644.8,
          1269
        ]
      ]
    },
    {
      "name": "Jalan Niaga Hijau Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -620.9,
          1297.1
        ],
        [
          -678,
          1235.4
        ]
      ]
    },
    {
      "name": "Jalan Melawai Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -404.4,
          720.7
        ],
        [
          -353.2,
          722.1
        ]
      ]
    },
    {
      "name": "Jalan Barito",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -409.3,
          713.4
        ],
        [
          -420.5,
          694
        ],
        [
          -425,
          666.7
        ]
      ]
    },
    {
      "name": "Jalan Kramat Pela",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -405.9,
          781.1
        ],
        [
          -392.7,
          781.3
        ],
        [
          -382.5,
          772.4
        ]
      ]
    },
    {
      "name": "Jalan Trunojoyo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -311.8,
          638.3
        ],
        [
          -341,
          638.1
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -379.9,
          638.1
        ],
        [
          -409.3,
          639.9
        ],
        [
          -425.5,
          663.1
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -474,
          655.8
        ],
        [
          -485.4,
          651.9
        ]
      ]
    },
    {
      "name": "Jalan Kyai Haji Ahmad Dahlan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -442.6,
          667.7
        ],
        [
          -438.4,
          732.3
        ]
      ]
    },
    {
      "name": "Jalan Sekolah Duta Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -550.7,
          1224.4
        ],
        [
          -534.4,
          1234
        ],
        [
          -506.7,
          1265.4
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -689.9,
          1267.3
        ],
        [
          -702.2,
          1249.8
        ]
      ]
    },
    {
      "name": "Jalan Petogogan I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -397.7,
          811.4
        ],
        [
          -407.1,
          793.3
        ],
        [
          -409.1,
          779.9
        ]
      ]
    },
    {
      "name": "Jalan Dharmawangsa IX",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -295.8,
          833.8
        ],
        [
          -298.3,
          846.4
        ]
      ]
    },
    {
      "name": "Jalan Prapanca Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -307,
          868.8
        ],
        [
          -315.6,
          869
        ]
      ]
    },
    {
      "name": "Jalan Dharmawangsa XI",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -316.1,
          886.9
        ],
        [
          -318,
          847.9
        ]
      ]
    },
    {
      "name": "Jalan Kebayoran Baru",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -572.6,
          622.4
        ],
        [
          -553.5,
          626.6
        ]
      ]
    },
    {
      "name": "Jalan Baru",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -595.3,
          656.5
        ],
        [
          -578.4,
          624.1
        ]
      ]
    },
    {
      "name": "Jalan Lauser Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -439.9,
          626.9
        ],
        [
          -436,
          661.2
        ]
      ]
    },
    {
      "name": "Jalan Cipete Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -357,
          1164.9
        ],
        [
          -328.2,
          1172.6
        ],
        [
          -240,
          1178.1
        ]
      ]
    },
    {
      "name": "Jalan Wijaya II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -297.6,
          811.3
        ],
        [
          -277.8,
          796.3
        ],
        [
          -269.3,
          776.9
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -366.9,
          1194.1
        ],
        [
          -360.6,
          1172
        ]
      ]
    },
    {
      "name": "Jalan Bulungan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -379.5,
          666.8
        ],
        [
          -369.1,
          690.3
        ]
      ]
    },
    {
      "name": "Jalan Melawai Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -325,
          722.2
        ],
        [
          -284.4,
          722.3
        ],
        [
          -271.9,
          719.1
        ]
      ]
    },
    {
      "name": "Jalan Lebak Bulus Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -691.3,
          1458.7
        ],
        [
          -703.9,
          1435.3
        ],
        [
          -714.4,
          1423.8
        ],
        [
          -721.2,
          1390.7
        ],
        [
          -734.9,
          1357.6
        ],
        [
          -734.6,
          1342.9
        ]
      ]
    },
    {
      "name": "Jalan Adhyaksa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -657.7,
          1453.1
        ],
        [
          -617,
          1424.7
        ],
        [
          -606,
          1387.5
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -688.3,
          1253.5
        ],
        [
          -637.1,
          1317.1
        ]
      ]
    },
    {
      "name": "Jalan Mawar I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -832,
          1272.3
        ],
        [
          -802.2,
          1274.8
        ]
      ]
    },
    {
      "name": "Jalan RC. Veteran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -843.9,
          1131.4
        ],
        [
          -852.2,
          1150
        ],
        [
          -856.8,
          1171.2
        ]
      ]
    },
    {
      "name": "Jalan Cempaka V",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -867.4,
          1113.7
        ],
        [
          -902.4,
          1107.7
        ],
        [
          -916.6,
          1111.8
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -854.2,
          1156.5
        ],
        [
          -865.7,
          1140.9
        ],
        [
          -867.4,
          1113.7
        ]
      ]
    },
    {
      "name": "Jalan Kesehatan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -825.9,
          1078.1
        ],
        [
          -859.4,
          1069.3
        ],
        [
          -875.6,
          1070.6
        ],
        [
          -880,
          1076.5
        ],
        [
          -901.1,
          1074.1
        ],
        [
          -919.9,
          1077.1
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Permai IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -933.5,
          997.4
        ],
        [
          -888.1,
          965.6
        ],
        [
          -873.7,
          944.9
        ],
        [
          -864.4,
          910.1
        ]
      ]
    },
    {
      "name": "Jalan Puspita Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -940.5,
          943.7
        ],
        [
          -937.2,
          955.4
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Permai",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -893.3,
          867.1
        ],
        [
          -893,
          909.6
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Permai",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -892.3,
          866.6
        ],
        [
          -878,
          866.5
        ]
      ]
    },
    {
      "name": "Jalan Kodam Bintaro",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -893,
          909.6
        ],
        [
          -914.9,
          916.8
        ],
        [
          -944,
          920.1
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Puspita Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -933.5,
          997.4
        ],
        [
          -935.6,
          972.4
        ]
      ]
    },
    {
      "name": "Jalan Pesanggrahan Indah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -938.7,
          846.8
        ],
        [
          -944,
          920.1
        ]
      ]
    },
    {
      "name": "Jalan Garuda",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -936.3,
          776.7
        ],
        [
          -941.6,
          793.6
        ],
        [
          -938.7,
          846.8
        ]
      ]
    },
    {
      "name": "Jalan Damai Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -934.2,
          758.9
        ],
        [
          -976.3,
          758.8
        ]
      ]
    },
    {
      "name": "Jalan Kemajuan Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -963.6,
          587
        ],
        [
          -972.5,
          624.7
        ],
        [
          -967.2,
          643.1
        ],
        [
          -972.6,
          659.3
        ]
      ]
    },
    {
      "name": "Jalan Kebayoran Baru",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -520.9,
          631.9
        ],
        [
          -535.4,
          631.2
        ]
      ]
    },
    {
      "name": "Jalan Kebayoran Baru",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -520.1,
          628.4
        ],
        [
          -514.4,
          620.9
        ]
      ]
    },
    {
      "name": "Jalan Baru",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -574.1,
          623.9
        ],
        [
          -577.7,
          625.9
        ],
        [
          -595.8,
          664.4
        ]
      ]
    },
    {
      "name": "Jalan KH. M. Syafi'i Hadzami",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -572.7,
          723.6
        ],
        [
          -582,
          728.3
        ]
      ]
    },
    {
      "name": "Jalan Al Mubarok",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -731.9,
          630.3
        ],
        [
          -719.8,
          629.6
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -949.3,
          1088.3
        ],
        [
          -957.2,
          1096.3
        ],
        [
          -1010,
          1098.2
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1041.9,
          1092.9
        ],
        [
          -1029.6,
          1087.9
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -976.4,
          1047.8
        ],
        [
          -956.9,
          1067.6
        ],
        [
          -954.9,
          1083.1
        ]
      ]
    },
    {
      "name": "Jalan Taman Bintaro Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -949.3,
          1088.3
        ],
        [
          -937.9,
          1105.3
        ]
      ]
    },
    {
      "name": "GSSJ Samratulangi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1371.5,
          1121
        ],
        [
          -1403.9,
          1144
        ]
      ]
    },
    {
      "name": "Jalan Tegal Rotan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1353.9,
          1255.1
        ],
        [
          -1359.1,
          1263.8
        ],
        [
          -1368.1,
          1270.3
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -572.1,
          949.1
        ],
        [
          -560.2,
          959.1
        ],
        [
          -555.1,
          969.7
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -562.1,
          626.8
        ],
        [
          -566.1,
          653
        ]
      ]
    },
    {
      "name": "Jalan Pondok Indah",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -599.9,
          1211.5
        ],
        [
          -600.8,
          1207.1
        ],
        [
          -597.3,
          1204.3
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -557.3,
          1003.5
        ],
        [
          -556.8,
          979.1
        ]
      ]
    },
    {
      "name": "Jalan Terogong Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -495.8,
          1272.7
        ],
        [
          -490.7,
          1273.3
        ],
        [
          -448.9,
          1248.5
        ],
        [
          -442.3,
          1238.6
        ]
      ]
    },
    {
      "name": "Jalan Taman Pendidikan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -381.2,
          1239.5
        ],
        [
          -401.3,
          1235.7
        ],
        [
          -404.1,
          1229.7
        ]
      ]
    },
    {
      "name": "Jalan Terogong Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -404.1,
          1229.7
        ],
        [
          -394.6,
          1205.5
        ],
        [
          -369.9,
          1202.4
        ]
      ]
    },
    {
      "name": "Jalan Lebak Bulus I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -534.9,
          1448.4
        ],
        [
          -581.9,
          1458
        ],
        [
          -587.7,
          1460
        ]
      ]
    },
    {
      "name": "Jalan Haji Junaedi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -313.5,
          1094.4
        ],
        [
          -317.9,
          1149.8
        ],
        [
          -316.2,
          1161.9
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -716,
          1208.9
        ],
        [
          -708.8,
          1164.7
        ],
        [
          -699,
          1134.7
        ]
      ]
    },
    {
      "name": "Jalan Cipete III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -328.2,
          1172.6
        ],
        [
          -331.8,
          1195.1
        ]
      ]
    },
    {
      "name": "Jalan Gaharu I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -331.8,
          1195.1
        ],
        [
          -291.1,
          1196.6
        ]
      ]
    },
    {
      "name": "Jalan BDN Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -331.8,
          1195.1
        ],
        [
          -365.6,
          1196.1
        ]
      ]
    },
    {
      "name": "Jalan BDN II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -332.9,
          1269.8
        ],
        [
          -331.8,
          1195.1
        ]
      ]
    },
    {
      "name": "Cilandak Tengah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -314.9,
          1308.1
        ],
        [
          -319.1,
          1295.1
        ],
        [
          -329.6,
          1292
        ]
      ]
    },
    {
      "name": "Jalan Cilandak Tengah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -292.3,
          1307.4
        ],
        [
          -291.4,
          1326.8
        ],
        [
          -295.3,
          1328.4
        ],
        [
          -300.3,
          1352.7
        ],
        [
          -298.3,
          1367.7
        ]
      ]
    },
    {
      "name": "Jalan Kyai Haji Muhasim Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -455.7,
          1313.3
        ],
        [
          -448.8,
          1375.3
        ]
      ]
    },
    {
      "name": "Jalan Tegal Rotan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1468.5,
          1213.3
        ],
        [
          -1472.2,
          1197.8
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Sudirman",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1520,
          1210
        ],
        [
          -1498.2,
          1205
        ],
        [
          -1472.7,
          1194.4
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3A",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1256.5,
          1059.9
        ],
        [
          -1229.2,
          1045.3
        ],
        [
          -1203.8,
          1055.2
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1073.7,
          1099.3
        ],
        [
          -1086.1,
          1109
        ],
        [
          -1097.4,
          1109.5
        ],
        [
          -1106.4,
          1115.2
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1048.2,
          1093.8
        ],
        [
          -1054.6,
          1085.2
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1053.5,
          1083.9
        ],
        [
          -1046.1,
          1092.2
        ]
      ]
    },
    {
      "name": "Jalan Pondok Betung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1106.4,
          1115.2
        ],
        [
          -1096.3,
          1137.8
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -734.2,
          1327.5
        ],
        [
          -729.8,
          1297.4
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -795.5,
          1359.1
        ],
        [
          -805.9,
          1373
        ],
        [
          -814.8,
          1399
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Jumat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -718.1,
          1335.8
        ],
        [
          -732.7,
          1337.2
        ]
      ]
    },
    {
      "name": "Jalan Palem Indah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1468.5,
          1213.3
        ],
        [
          -1483.6,
          1222.3
        ],
        [
          -1495.7,
          1250.5
        ],
        [
          -1499,
          1268.9
        ],
        [
          -1513.9,
          1279.9
        ]
      ]
    },
    {
      "name": "Jalan Pengairan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1075.7,
          1194.5
        ],
        [
          -1046.6,
          1193.4
        ]
      ]
    },
    {
      "name": "Jalan Kenari IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1046.6,
          1193.4
        ],
        [
          -1037.5,
          1190.3
        ],
        [
          -1031.1,
          1183.5
        ],
        [
          -1018.5,
          1183.1
        ]
      ]
    },
    {
      "name": "Jalan Merpati Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1259.5,
          1460
        ],
        [
          -1246.9,
          1422.7
        ]
      ]
    },
    {
      "name": "Jalan Teuku Umar",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1341.9,
          1233.7
        ],
        [
          -1335,
          1232.5
        ],
        [
          -1314.7,
          1213.1
        ],
        [
          -1315.1,
          1207.3
        ],
        [
          -1328.4,
          1187.8
        ]
      ]
    },
    {
      "name": "Jalan Raya Pondok Jaya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1491.7,
          1116
        ],
        [
          -1493.1,
          1107.7
        ],
        [
          -1480.9,
          1087.6
        ],
        [
          -1488.3,
          1057.9
        ],
        [
          -1489.2,
          1032.3
        ],
        [
          -1482.9,
          1009.6
        ]
      ]
    },
    {
      "name": "Jalan Tegal Rotan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1368.3,
          1269.2
        ],
        [
          -1360,
          1263.4
        ],
        [
          -1346.8,
          1243.6
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pucung Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1473.3,
          1192.5
        ],
        [
          -1490,
          1123
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -827.6,
          822.8
        ],
        [
          -825.1,
          832.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -793.9,
          940.8
        ],
        [
          -810.8,
          894.6
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -805.7,
          905.8
        ],
        [
          -792.5,
          939.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1495.3,
          1404
        ],
        [
          -1475.5,
          1401.4
        ],
        [
          -1460.4,
          1395.7
        ],
        [
          -1448.9,
          1387.7
        ],
        [
          -1428.2,
          1364.9
        ],
        [
          -1413.1,
          1354.4
        ]
      ]
    },
    {
      "name": "Jalan Menjangan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1228.3,
          1393.3
        ],
        [
          -1246.9,
          1422.7
        ]
      ]
    },
    {
      "name": "Jalan HR Rasuna Said",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1463.7,
          1191.5
        ],
        [
          -1477.4,
          1133.3
        ]
      ]
    },
    {
      "name": "Jalan HR Rasuna Said",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1475,
          1133
        ],
        [
          -1461.7,
          1191
        ]
      ]
    },
    {
      "name": "Jalan Teuku Umar",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1327.6,
          1187.2
        ],
        [
          -1313.4,
          1208.6
        ],
        [
          -1318.3,
          1219.7
        ]
      ]
    },
    {
      "name": "Jalan RC. Veteran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -821.1,
          1082.4
        ],
        [
          -827.3,
          1096.3
        ]
      ]
    },
    {
      "name": "Jalan Wijaya XIII",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -270.6,
          776.3
        ],
        [
          -304.8,
          776.2
        ]
      ]
    },
    {
      "name": "Jalan Inpres",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1001.4,
          676.8
        ],
        [
          -1043.8,
          671.3
        ],
        [
          -1049.2,
          693.4
        ]
      ]
    },
    {
      "name": "Jalan Ulujami Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -851.3,
          873.7
        ],
        [
          -844.3,
          863.2
        ],
        [
          -838.2,
          836.8
        ],
        [
          -828.8,
          837.3
        ],
        [
          -823.5,
          853.7
        ],
        [
          -817.6,
          850.3
        ]
      ]
    },
    {
      "name": "Jalan Adhyaksa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -594.9,
          1359.5
        ],
        [
          -615,
          1424.9
        ],
        [
          -649.1,
          1449.8
        ]
      ]
    },
    {
      "name": "Jalan Bungur",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -616,
          740.7
        ],
        [
          -599.1,
          745.3
        ],
        [
          -589.2,
          744.2
        ]
      ]
    },
    {
      "name": "Jalan Bendi Besar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -707.2,
          817.4
        ],
        [
          -706.7,
          795.2
        ],
        [
          -688.1,
          771.7
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -641.3,
          829.6
        ],
        [
          -698,
          825.2
        ]
      ]
    },
    {
      "name": "Jalan Taman Asri Lama",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1180.2,
          713.3
        ],
        [
          -1207.9,
          710
        ],
        [
          -1242.5,
          717.6
        ],
        [
          -1266.7,
          715.5
        ],
        [
          -1288.7,
          717.6
        ]
      ]
    },
    {
      "name": "Jalan Bonjol Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1124.8,
          1030.6
        ],
        [
          -1182,
          1028.1
        ]
      ]
    },
    {
      "name": "Jalan Jurang Mangu Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1405.3,
          1009.3
        ],
        [
          -1406.3,
          998.4
        ],
        [
          -1415.8,
          997.1
        ],
        [
          -1415.5,
          979.7
        ],
        [
          -1419.9,
          957.1
        ]
      ]
    },
    {
      "name": "Jalan Pesantren",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1323.9,
          826.9
        ],
        [
          -1306.9,
          822.6
        ],
        [
          -1290.8,
          822.5
        ],
        [
          -1289.5,
          829.8
        ],
        [
          -1284.8,
          830.1
        ],
        [
          -1276.3,
          868.4
        ],
        [
          -1275.2,
          897.4
        ],
        [
          -1270.7,
          918.8
        ],
        [
          -1264.9,
          930.2
        ]
      ]
    },
    {
      "name": "Jalan Bendi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -681.9,
          776.2
        ],
        [
          -699.6,
          800.3
        ],
        [
          -698,
          825.2
        ]
      ]
    },
    {
      "name": "Jalan RC. Veteran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -792.7,
          950
        ],
        [
          -798.8,
          967.1
        ],
        [
          -805.1,
          1030.3
        ]
      ]
    },
    {
      "name": "Jalan Dahlia",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -800.7,
          988.2
        ],
        [
          -783.3,
          991.3
        ]
      ]
    },
    {
      "name": "Jalan Anggrek",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -783.4,
          1002.2
        ],
        [
          -801.5,
          999.1
        ]
      ]
    },
    {
      "name": "Jalan Praja Dalam E",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -564.7,
          822.7
        ],
        [
          -549.5,
          825.3
        ],
        [
          -543.8,
          830.4
        ]
      ]
    },
    {
      "name": "Jalan RC. Veteran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -777.2,
          901.9
        ],
        [
          -779,
          923.5
        ],
        [
          -788.7,
          942.7
        ]
      ]
    },
    {
      "name": "Jalan KH. Wahid Hasyim",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1217.3,
          961.7
        ],
        [
          -1221.9,
          937.3
        ],
        [
          -1220.5,
          894.7
        ],
        [
          -1215.8,
          868
        ],
        [
          -1199.5,
          814.6
        ],
        [
          -1204.4,
          811.2
        ],
        [
          -1199.1,
          775.3
        ]
      ]
    },
    {
      "name": "Jalan Caraka Buana Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1201.6,
          791.8
        ],
        [
          -1189.3,
          791.7
        ],
        [
          -1177.7,
          787.1
        ],
        [
          -1158,
          787.4
        ]
      ]
    },
    {
      "name": "Jalan Pesantren",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1245.9,
          962.2
        ],
        [
          -1249.6,
          941.4
        ],
        [
          -1264.9,
          930.2
        ]
      ]
    },
    {
      "name": "Jalan Duta VII",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1116,
          779.6
        ],
        [
          -1103.9,
          782.2
        ]
      ]
    },
    {
      "name": "Jalan Camar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1124.8,
          1030.6
        ],
        [
          -1112.8,
          1034.5
        ],
        [
          -1093.8,
          1034.9
        ]
      ]
    },
    {
      "name": "Jalan Pinguin",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1093.8,
          1034.9
        ],
        [
          -1053.5,
          1083.9
        ]
      ]
    },
    {
      "name": "Jalan Peninggaran Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -709.7,
          727.1
        ],
        [
          -713.9,
          685.2
        ]
      ]
    },
    {
      "name": "Jalan Al Mubarok Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -729.8,
          661.8
        ],
        [
          -725,
          662.2
        ],
        [
          -720.3,
          685.3
        ],
        [
          -713.9,
          685.2
        ]
      ]
    },
    {
      "name": "Jalan Taman Asri Utama",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1298.4,
          629.6
        ],
        [
          -1288.7,
          717.6
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Hamka",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1319.3,
          724.4
        ],
        [
          -1324.1,
          690.7
        ]
      ]
    },
    {
      "name": "Jalan Pahlawan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -911,
          1386.1
        ],
        [
          -921.6,
          1435.4
        ],
        [
          -893.8,
          1444.4
        ],
        [
          -875.9,
          1455
        ],
        [
          -872.7,
          1460
        ]
      ]
    },
    {
      "name": "Jalan Pahlawan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -895.8,
          1326.6
        ],
        [
          -911,
          1386.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Abdul Gani",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -925.3,
          1460
        ],
        [
          -927.1,
          1438.5
        ]
      ]
    },
    {
      "name": "Jalan WR Supratman",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1055.8,
          1460
        ],
        [
          -1059,
          1450.8
        ],
        [
          -1059.7,
          1432
        ],
        [
          -1074.5,
          1407.7
        ],
        [
          -1078.5,
          1386.5
        ],
        [
          -1083.8,
          1378.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -557,
          1368.4
        ],
        [
          -603.7,
          1351.8
        ]
      ]
    },
    {
      "name": "Jalan RC. Veteran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -758.5,
          846.2
        ],
        [
          -777.2,
          901.9
        ]
      ]
    },
    {
      "name": "Jalan Pondok Betung Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1061.4,
          924.6
        ],
        [
          -1065.1,
          933.2
        ],
        [
          -1104.6,
          965
        ],
        [
          -1108.8,
          977.9
        ],
        [
          -1106.2,
          1002.7
        ],
        [
          -1124.8,
          1030.6
        ]
      ]
    },
    {
      "name": "Jalan Masjid Baiturrahim",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1180.3,
          968.9
        ],
        [
          -1177.1,
          983.2
        ],
        [
          -1182,
          1028.1
        ]
      ]
    },
    {
      "name": "Jalan Panglima Polim Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -345.5,
          642.1
        ],
        [
          -345.4,
          669.2
        ]
      ]
    },
    {
      "name": "Jalan Dharmawangsa X",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -251.9,
          884.4
        ],
        [
          -316.1,
          886.9
        ]
      ]
    },
    {
      "name": "Jalan Barito II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -404.4,
          721.3
        ],
        [
          -399,
          732.6
        ]
      ]
    },
    {
      "name": "Jalan Panglima Polim Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -345.4,
          671.7
        ],
        [
          -350.2,
          684.8
        ],
        [
          -351.3,
          722.2
        ]
      ]
    },
    {
      "name": "Jalan Dokter Cipto Mangunkusumo",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1506.1,
          689
        ],
        [
          -1520,
          687.5
        ]
      ]
    },
    {
      "name": "Jalan Pondok Betung Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -997.3,
          950.5
        ],
        [
          -1009.3,
          947
        ],
        [
          -1008.1,
          940.1
        ],
        [
          -1013.9,
          935.7
        ]
      ]
    },
    {
      "name": "Jalan Ciputat Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -641.3,
          869.6
        ],
        [
          -642.6,
          846.1
        ],
        [
          -639.9,
          831.7
        ]
      ]
    },
    {
      "name": "Jalan Bungur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -585.2,
          746
        ],
        [
          -542.1,
          753.1
        ]
      ]
    },
    {
      "name": "Jalan Cendrawasih",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -585.9,
          866.6
        ],
        [
          -598.3,
          870.7
        ],
        [
          -641.9,
          870.8
        ]
      ]
    },
    {
      "name": "Jalan Bungur II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -555.9,
          772
        ],
        [
          -579.4,
          767.8
        ],
        [
          -580.5,
          762.8
        ],
        [
          -588.1,
          762.4
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Sudirman",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1466.8,
          1194
        ],
        [
          -1497.3,
          1206.8
        ],
        [
          -1520,
          1211.4
        ]
      ]
    },
    {
      "name": "Jalan Ceger Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1441.6,
          951.2
        ],
        [
          -1458.3,
          950.2
        ],
        [
          -1463.7,
          957.7
        ],
        [
          -1470.8,
          959.6
        ],
        [
          -1478.1,
          974.5
        ],
        [
          -1485.8,
          976.5
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Permai",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -893,
          909.6
        ],
        [
          -893.6,
          920.5
        ],
        [
          -902.9,
          930.5
        ],
        [
          -940.5,
          943.7
        ]
      ]
    },
    {
      "name": "Jalan Ciputat Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -639,
          828.5
        ],
        [
          -630.9,
          802
        ],
        [
          -634,
          763.6
        ],
        [
          -626,
          745.6
        ],
        [
          -605.6,
          722.6
        ],
        [
          -599.6,
          697.9
        ],
        [
          -595.3,
          656.5
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -582,
          728.3
        ],
        [
          -587.7,
          748.1
        ]
      ]
    },
    {
      "name": "Jalan Gandaria I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -494.3,
          683.4
        ],
        [
          -489.2,
          699.9
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -817,
          1402.8
        ],
        [
          -807,
          1372.9
        ],
        [
          -796.1,
          1358.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -900.3,
          951.1
        ],
        [
          -888.8,
          939.7
        ],
        [
          -878.7,
          919
        ],
        [
          -880.7,
          873.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -872.8,
          840.5
        ],
        [
          -877.6,
          859.9
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -878.9,
          872.8
        ],
        [
          -875.7,
          910.2
        ],
        [
          -881.2,
          931.2
        ],
        [
          -895.1,
          949.4
        ],
        [
          -926.5,
          966.5
        ]
      ]
    },
    {
      "name": "Jalan Pahlawan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -869,
          1236.3
        ],
        [
          -857.4,
          1175.5
        ]
      ]
    },
    {
      "name": "Jalan Deplu Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -687,
          1117.2
        ],
        [
          -699.2,
          1108.2
        ]
      ]
    },
    {
      "name": "Jalan RC. Veteran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -827.3,
          1096.3
        ],
        [
          -843.9,
          1131.4
        ]
      ]
    },
    {
      "name": "Jalan Damai Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -976.3,
          758.8
        ],
        [
          -983.7,
          758.7
        ],
        [
          -984.5,
          756
        ],
        [
          -1002.2,
          756.3
        ],
        [
          -1001.4,
          676.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -829.1,
          826
        ],
        [
          -836.5,
          808.2
        ],
        [
          -851.8,
          788.1
        ]
      ]
    },
    {
      "name": "Jalan Ulujami Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -817.6,
          850.3
        ],
        [
          -826.7,
          811.7
        ],
        [
          -826.5,
          789.2
        ],
        [
          -836.3,
          781.2
        ],
        [
          -842.1,
          766.1
        ],
        [
          -850.8,
          718.5
        ],
        [
          -843.4,
          697.6
        ],
        [
          -847.3,
          683.4
        ],
        [
          -849.4,
          640.2
        ],
        [
          -841.5,
          630.8
        ],
        [
          -839,
          612.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -851.8,
          788.1
        ],
        [
          -858.1,
          780.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -858.1,
          780.4
        ],
        [
          -875.8,
          760.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -848.8,
          789.3
        ],
        [
          -827.6,
          822.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -875.8,
          760.2
        ],
        [
          -884.4,
          748.8
        ]
      ]
    },
    {
      "name": "Jalan Unta Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1156.1,
          1131.3
        ],
        [
          -1168.7,
          1139.3
        ],
        [
          -1242.1,
          1148.4
        ],
        [
          -1241.4,
          1161.7
        ],
        [
          -1292.6,
          1164.5
        ]
      ]
    },
    {
      "name": "Jalan Bendi Utama",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -688.1,
          771.7
        ],
        [
          -694.9,
          761.1
        ]
      ]
    },
    {
      "name": "Jalan Caraka Buana Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1141.8,
          784.6
        ],
        [
          -1135,
          783.1
        ],
        [
          -1117.4,
          787.1
        ]
      ]
    },
    {
      "name": "Jalan Akses Bintaro Xchange",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1308.6,
          1230.4
        ],
        [
          -1302,
          1245.6
        ],
        [
          -1309.9,
          1258.8
        ]
      ]
    },
    {
      "name": "Jalan Lingkar Bintaro Xchange",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1349.4,
          1283.7
        ],
        [
          -1366,
          1284.3
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1425.9,
          1163.6
        ],
        [
          -1398.1,
          1197.3
        ]
      ]
    },
    {
      "name": "Jalan Akses Bintaro Xchange",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1310.7,
          1258.1
        ],
        [
          -1302.9,
          1245.6
        ],
        [
          -1309.5,
          1231.3
        ]
      ]
    },
    {
      "name": "Jalan Adam Malik",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1055.6,
          641.4
        ],
        [
          -1056.2,
          648
        ],
        [
          -1066.6,
          647.1
        ]
      ]
    },
    {
      "name": "Jalan Adam Malik",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1084.8,
          689.7
        ],
        [
          -1095.3,
          740.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -966.2,
          971.7
        ],
        [
          -984.7,
          967.2
        ],
        [
          -996.3,
          967.6
        ],
        [
          -1012.1,
          974.8
        ],
        [
          -1022.5,
          986.8
        ],
        [
          -1026.7,
          999.5
        ],
        [
          -1031,
          1061.8
        ],
        [
          -1040.6,
          1088
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -926.5,
          966.5
        ],
        [
          -939.3,
          970.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -934.8,
          967.5
        ],
        [
          -926.8,
          964.8
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -976.6,
          1045.5
        ],
        [
          -933.3,
          998.6
        ]
      ]
    },
    {
      "name": "Jalan Praja Dalam K",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -557.4,
          793.9
        ],
        [
          -564.7,
          822.7
        ]
      ]
    },
    {
      "name": "Jalan Kramat Pela",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -383.1,
          774.3
        ],
        [
          -393.1,
          782.3
        ],
        [
          -405.9,
          781.1
        ]
      ]
    },
    {
      "name": "Jalan Kramat Pela",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -439.6,
          770.6
        ],
        [
          -428.9,
          774.1
        ]
      ]
    },
    {
      "name": "Jalan Margaguna Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -554.7,
          972.6
        ],
        [
          -536.7,
          963.8
        ]
      ]
    },
    {
      "name": "Jalan Radio Dalam",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -480.6,
          930.4
        ],
        [
          -490.4,
          972
        ]
      ]
    },
    {
      "name": "Jalan Kartika Utama",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -582.3,
          992.9
        ],
        [
          -563.7,
          977.4
        ]
      ]
    },
    {
      "name": "Jalan Kartika Utama",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -605.3,
          1006.9
        ],
        [
          -615.5,
          1017.8
        ],
        [
          -622.5,
          1035.3
        ],
        [
          -628.4,
          1128.7
        ],
        [
          -636.4,
          1143.6
        ],
        [
          -649.2,
          1154.3
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -558.5,
          970.7
        ],
        [
          -561.6,
          962.9
        ],
        [
          -574.1,
          950.4
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -580.4,
          936.6
        ],
        [
          -583.9,
          868.1
        ]
      ]
    },
    {
      "name": "Jalan Abdul Majid Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -333.4,
          1004.1
        ],
        [
          -322.6,
          1006.7
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -708,
          824.4
        ],
        [
          -750.5,
          824.2
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -698,
          825.2
        ],
        [
          -707.5,
          824.4
        ]
      ]
    },
    {
      "name": "Jalan Bendi Utama",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -708.6,
          749.5
        ],
        [
          -694.9,
          761.1
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -467.6,
          653.4
        ],
        [
          -464.5,
          663
        ],
        [
          -442.6,
          666.5
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1520,
          1101.1
        ],
        [
          -1518.4,
          1101.7
        ],
        [
          -1502.4,
          1115.4
        ],
        [
          -1467.4,
          1128.4
        ],
        [
          -1428.9,
          1159.8
        ]
      ]
    },
    {
      "name": "MH Thamrin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1405.6,
          1167.6
        ],
        [
          -1407.6,
          1126.6
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1347.3,
          1235.6
        ],
        [
          -1356,
          1231.9
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1006.8,
          1128.3
        ],
        [
          -968.2,
          1127.1
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -968.2,
          1128.4
        ],
        [
          -1006.6,
          1129.6
        ]
      ]
    },
    {
      "name": "Jalan Pondok Aren Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1485.8,
          976.5
        ],
        [
          -1501.8,
          969.8
        ],
        [
          -1520,
          969
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -935,
          580.2
        ],
        [
          -922.2,
          585.5
        ],
        [
          -908.9,
          599.3
        ],
        [
          -881.9,
          602.6
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -586.8,
          776.5
        ],
        [
          -582.7,
          820.5
        ],
        [
          -579.6,
          931.7
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -589.9,
          747.9
        ],
        [
          -581.2,
          719.2
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -574.3,
          708.1
        ],
        [
          -579,
          720
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -576.6,
          707.3
        ],
        [
          -571.6,
          691.2
        ],
        [
          -567.6,
          646.6
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -566.2,
          654.7
        ],
        [
          -568.9,
          686.8
        ],
        [
          -574.3,
          708.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -785,
          960.5
        ],
        [
          -793.9,
          940.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -792.5,
          939.7
        ],
        [
          -783.4,
          960
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -810.8,
          894.6
        ],
        [
          -822.2,
          851.6
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -809,
          894.2
        ],
        [
          -805.7,
          905.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -713.6,
          1230
        ],
        [
          -669.4,
          1281.7
        ]
      ]
    },
    {
      "name": "Jalan Puspita Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -936.8,
          957.4
        ],
        [
          -934.9,
          971.6
        ]
      ]
    },
    {
      "name": "Cut Mutia II",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1384.4,
          1098.5
        ],
        [
          -1369,
          1101.4
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 5",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1298.2,
          1066.2
        ],
        [
          -1340.5,
          1087.9
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -919.9,
          1077.1
        ],
        [
          -938.4,
          1078.6
        ],
        [
          -943.7,
          1082.4
        ]
      ]
    },
    {
      "name": "Jalan Menteng Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1340.5,
          1087.9
        ],
        [
          -1362.3,
          1099.3
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1029.5,
          1089.6
        ],
        [
          -1039.8,
          1094.8
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1010.4,
          1081.9
        ],
        [
          -978.6,
          1047.5
        ]
      ]
    },
    {
      "name": "Jalan Ciputat Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -657.4,
          929.5
        ],
        [
          -647.9,
          923.5
        ],
        [
          -641.4,
          911.7
        ],
        [
          -641.9,
          870.8
        ]
      ]
    },
    {
      "name": "Jalan Deplu Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -813.5,
          1099.7
        ],
        [
          -797,
          1106
        ]
      ]
    },
    {
      "name": "Jalan Palem Puri Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1513.9,
          1279.9
        ],
        [
          -1516.8,
          1286.5
        ],
        [
          -1513.1,
          1300.8
        ],
        [
          -1515.4,
          1332.4
        ],
        [
          -1520,
          1349.8
        ]
      ]
    },
    {
      "name": "Jalan Palem Puri Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1520,
          1364.9
        ],
        [
          -1519.1,
          1371.8
        ],
        [
          -1510,
          1384.7
        ]
      ]
    },
    {
      "name": "Jalan Riau Palem Puri",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1510,
          1384.7
        ],
        [
          -1520,
          1390
        ]
      ]
    },
    {
      "name": "Jalan Radio Dalam",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -493.3,
          970.2
        ],
        [
          -489.2,
          968
        ],
        [
          -480.6,
          930.4
        ]
      ]
    },
    {
      "name": "Jalan Anggrek II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -757.5,
          1016
        ],
        [
          -772.8,
          1015.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -647.8,
          1307.8
        ],
        [
          -615.5,
          1342.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -615.5,
          1342.5
        ],
        [
          -594.3,
          1353.9
        ],
        [
          -550.3,
          1368.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -616.5,
          1343.9
        ],
        [
          -649.3,
          1309
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -670.6,
          1283.8
        ],
        [
          -715.2,
          1231.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -778.6,
          1100.7
        ],
        [
          -771.1,
          1056.5
        ],
        [
          -778.6,
          1017.8
        ],
        [
          -780.1,
          976.4
        ],
        [
          -785,
          960.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -772.6,
          1038.4
        ],
        [
          -770.1,
          1065.1
        ],
        [
          -776.7,
          1100.9
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -750.5,
          824.2
        ],
        [
          -756,
          828.8
        ],
        [
          -758.4,
          841.1
        ]
      ]
    },
    {
      "name": "Jalan Cendrawasih Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1246.9,
          1422.7
        ],
        [
          -1252,
          1415.3
        ],
        [
          -1263.8,
          1407.4
        ],
        [
          -1281.6,
          1372.9
        ],
        [
          -1286.5,
          1368.7
        ],
        [
          -1305,
          1365
        ],
        [
          -1315.3,
          1351.7
        ],
        [
          -1318.2,
          1341
        ]
      ]
    },
    {
      "name": "Jalan Camat Pondok Aren",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1520,
          1128.7
        ],
        [
          -1507,
          1134.5
        ],
        [
          -1487.1,
          1134.8
        ]
      ]
    },
    {
      "name": "Cikini",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1361.1,
          1098.7
        ],
        [
          -1366.2,
          1083
        ]
      ]
    },
    {
      "name": "Cikini",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1369.1,
          1057.7
        ],
        [
          -1366.3,
          1080.7
        ]
      ]
    },
    {
      "name": "Jalan Gapura Menteng 1",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1325.3,
          1122.9
        ],
        [
          -1324,
          1106.5
        ],
        [
          -1333.7,
          1103.7
        ],
        [
          -1340.5,
          1087.9
        ]
      ]
    },
    {
      "name": "Jalan Manyar Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1006.6,
          1129.6
        ],
        [
          -1007.9,
          1104.6
        ]
      ]
    },
    {
      "name": "Jalan Perkutut",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1003,
          1182.8
        ],
        [
          -1007.4,
          1167.1
        ],
        [
          -1003.2,
          1154.6
        ],
        [
          -1006.6,
          1129.6
        ]
      ]
    },
    {
      "name": "MH Thamrin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1403.9,
          1144
        ],
        [
          -1403.7,
          1170.8
        ]
      ]
    },
    {
      "name": "Wahid Hasyim",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1407.9,
          1115.4
        ],
        [
          -1386.8,
          1100.2
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1071.1,
          586.6
        ],
        [
          -1052.3,
          588.8
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1084.6,
          586.9
        ],
        [
          -1114.8,
          588.8
        ]
      ]
    },
    {
      "name": "Jalan Deplu Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -730.1,
          1108.7
        ],
        [
          -705.3,
          1106.9
        ]
      ]
    },
    {
      "name": "Jalan Deplu Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -769.3,
          1102.8
        ],
        [
          -780.5,
          1102.5
        ]
      ]
    },
    {
      "name": "Jalan Deplu Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -769.3,
          1102.8
        ],
        [
          -745.1,
          1106.6
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -363.4,
          1376.6
        ],
        [
          -308.3,
          1377
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -507.5,
          1382.7
        ],
        [
          -546.9,
          1374.4
        ]
      ]
    },
    {
      "name": "Jalan Camar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1055.7,
          1084
        ],
        [
          -1093.8,
          1034.9
        ]
      ]
    },
    {
      "name": "Jalan Taman Bintaro",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -915.8,
          1111.4
        ],
        [
          -919.9,
          1077.1
        ]
      ]
    },
    {
      "name": "Jalan Gedung Hijau I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -653.1,
          1156.5
        ],
        [
          -664.6,
          1164.4
        ],
        [
          -670.2,
          1175.3
        ],
        [
          -668.9,
          1209.7
        ],
        [
          -678,
          1235.4
        ]
      ]
    },
    {
      "name": "Jalan Gedung Hijau Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -654.4,
          1145.3
        ],
        [
          -660.3,
          1134.2
        ],
        [
          -673.6,
          1124.3
        ]
      ]
    },
    {
      "name": "Jalan Deplu Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -705.3,
          1106.9
        ],
        [
          -698.4,
          1107.3
        ],
        [
          -686.3,
          1116.2
        ]
      ]
    },
    {
      "name": "Jalan Gedung Hijau Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -649.7,
          1156.6
        ],
        [
          -643.5,
          1180.7
        ],
        [
          -635.8,
          1191.5
        ],
        [
          -600.4,
          1206.4
        ]
      ]
    },
    {
      "name": "Jalan Gedung Hijau Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -601,
          1207.9
        ],
        [
          -636.4,
          1192.9
        ],
        [
          -644.7,
          1181.3
        ],
        [
          -652.3,
          1157.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Muhi Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -754.2,
          1016
        ],
        [
          -677.3,
          1013.2
        ]
      ]
    },
    {
      "name": "Jalan KH. Muhammad Syafi'i Hadzami",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -574.8,
          721.9
        ],
        [
          -556.1,
          718.8
        ],
        [
          -529,
          720.3
        ],
        [
          -495.9,
          717.6
        ]
      ]
    },
    {
      "name": "Jalan KH. Muhammad Syafi'i Hadzami",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -495.6,
          718.8
        ],
        [
          -529.7,
          721.5
        ],
        [
          -555.2,
          719.9
        ],
        [
          -572.7,
          723.6
        ]
      ]
    },
    {
      "name": "Jalan Radio Dalam",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -480.6,
          930.4
        ],
        [
          -464.4,
          868.3
        ],
        [
          -451.4,
          835.5
        ],
        [
          -441.4,
          780.5
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1387.4,
          1205.9
        ],
        [
          -1366,
          1223.1
        ],
        [
          -1341.9,
          1233.7
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1430.7,
          1161.7
        ],
        [
          -1472.5,
          1129
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1398.9,
          1198
        ],
        [
          -1426.7,
          1164.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -822.2,
          851.6
        ],
        [
          -826.4,
          836.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -816.3,
          866.2
        ],
        [
          -809,
          894.2
        ]
      ]
    },
    {
      "name": "Jalan Ceger Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1217.3,
          961.7
        ],
        [
          -1234.6,
          963.7
        ],
        [
          -1273.7,
          956.8
        ],
        [
          -1319.8,
          957.8
        ],
        [
          -1357.2,
          969.2
        ],
        [
          -1365.8,
          965
        ],
        [
          -1401.1,
          959.7
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Permai",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -816.3,
          888.1
        ],
        [
          -779,
          900.4
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3A",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1131.8,
          1115.3
        ],
        [
          -1141.1,
          1116.6
        ],
        [
          -1155.1,
          1112.4
        ],
        [
          -1158.9,
          1086
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3A",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1154.3,
          1084.3
        ],
        [
          -1136.1,
          1096.1
        ],
        [
          -1129.6,
          1109.6
        ]
      ]
    },
    {
      "name": "Jalan Panda Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1277.5,
          1266.8
        ],
        [
          -1273.1,
          1275
        ]
      ]
    },
    {
      "name": "Jalan Rusa Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1254.8,
          1279.9
        ],
        [
          -1246.1,
          1288.3
        ],
        [
          -1239.4,
          1316.3
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1107.1,
          1114.3
        ],
        [
          -1097.6,
          1108.6
        ],
        [
          -1086.9,
          1108.5
        ],
        [
          -1055.7,
          1084
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1040.6,
          1088
        ],
        [
          -1046,
          1097.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1042.3,
          1087.6
        ],
        [
          -1032.8,
          1062
        ],
        [
          -1028.3,
          1000
        ],
        [
          -1022,
          982.6
        ],
        [
          -1013.4,
          973.4
        ],
        [
          -997.2,
          965.9
        ],
        [
          -983.8,
          965.5
        ],
        [
          -965.8,
          970.3
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1307.6,
          1293.2
        ],
        [
          -1356.8,
          1338.7
        ],
        [
          -1416.1,
          1358
        ],
        [
          -1449.3,
          1390.3
        ],
        [
          -1474.6,
          1402.8
        ]
      ]
    },
    {
      "name": "Jalan Taman Bintaro Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -932.8,
          1110.8
        ],
        [
          -927.5,
          1115.4
        ],
        [
          -918.7,
          1112.4
        ]
      ]
    },
    {
      "name": "Jalan Taman Bintaro Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -918.5,
          1113.1
        ],
        [
          -927.5,
          1116.2
        ],
        [
          -933.4,
          1111.3
        ]
      ]
    },
    {
      "name": "Jalan Menjangan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1134.2,
          1387.5
        ],
        [
          -1142,
          1388.2
        ],
        [
          -1171.3,
          1368.4
        ],
        [
          -1205.7,
          1374.8
        ],
        [
          -1223.4,
          1369.6
        ],
        [
          -1228.3,
          1377.3
        ],
        [
          -1228,
          1391.9
        ]
      ]
    },
    {
      "name": "Jalan WR Supratman",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1083.8,
          1378.4
        ],
        [
          -1085.8,
          1353.5
        ],
        [
          -1081.5,
          1273.4
        ],
        [
          -1075.3,
          1238.5
        ],
        [
          -1075.4,
          1188.9
        ],
        [
          -1093.7,
          1144.8
        ]
      ]
    },
    {
      "name": "Jalan Tegal Rotan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1381.6,
          1229.9
        ],
        [
          -1383.2,
          1225
        ],
        [
          -1390.9,
          1224.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -450.1,
          1377.8
        ],
        [
          -328.7,
          1379.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -328.7,
          1381.6
        ],
        [
          -450,
          1380.2
        ]
      ]
    },
    {
      "name": "Jalan Cenderawasih Nandjar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1350.8,
          1324.9
        ],
        [
          -1371.8,
          1334.5
        ]
      ]
    },
    {
      "name": "Jalan Cenderawasih Nandjar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1394.6,
          1344.2
        ],
        [
          -1391.3,
          1362.6
        ]
      ]
    },
    {
      "name": "Jalan Pondok Betung Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1124.8,
          1030.6
        ],
        [
          -1136.2,
          1062
        ],
        [
          -1135.1,
          1072.7
        ],
        [
          -1107.1,
          1114.3
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -884.4,
          748.8
        ],
        [
          -893.2,
          732.8
        ],
        [
          -900.1,
          709.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -898.4,
          709
        ],
        [
          -891.6,
          732.3
        ],
        [
          -882.9,
          747.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -882.9,
          747.8
        ],
        [
          -870.3,
          763.4
        ]
      ]
    },
    {
      "name": "Jalan Saidi Arteri",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -901.6,
          712.2
        ],
        [
          -918.6,
          628.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -926.4,
          597.3
        ],
        [
          -913.4,
          632.4
        ],
        [
          -903.7,
          681.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -910.9,
          657
        ],
        [
          -918.4,
          620.1
        ],
        [
          -927.7,
          598.4
        ]
      ]
    },
    {
      "name": "Jalan Panglima Polim Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -352.7,
          719.5
        ],
        [
          -348.3,
          658.3
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -572.1,
          949.1
        ],
        [
          -561,
          959.7
        ],
        [
          -556.2,
          969.1
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -555.7,
          979.1
        ],
        [
          -554,
          1004.1
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -557.4,
          969.4
        ],
        [
          -562.2,
          960.2
        ],
        [
          -574.1,
          950.4
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -737.7,
          1335.9
        ],
        [
          -755.9,
          1337.5
        ]
      ]
    },
    {
      "name": "Jalan Guru Kojar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1449.8,
          850.9
        ],
        [
          -1444.4,
          863
        ],
        [
          -1449.3,
          897.7
        ],
        [
          -1426.6,
          906.4
        ]
      ]
    },
    {
      "name": "Jalan Panda Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1286.2,
          1165.2
        ],
        [
          -1281.6,
          1188.7
        ],
        [
          -1274.9,
          1193.9
        ],
        [
          -1270.7,
          1213.9
        ],
        [
          -1261.2,
          1227.6
        ],
        [
          -1257.2,
          1250.9
        ],
        [
          -1277.5,
          1266.8
        ]
      ]
    },
    {
      "name": "Jalan Panjang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -719.8,
          609.2
        ],
        [
          -720.3,
          535
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -792.8,
          1355
        ],
        [
          -765.2,
          1339.3
        ],
        [
          -751.4,
          1335.5
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -755.9,
          1337.5
        ],
        [
          -792,
          1356.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -753.6,
          1185.9
        ],
        [
          -760,
          1177.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -724.1,
          1221.8
        ],
        [
          -753.6,
          1185.9
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -752.2,
          1184.4
        ],
        [
          -722,
          1221
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -758.4,
          1176.2
        ],
        [
          -752.2,
          1184.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Batong Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -455.7,
          1313.3
        ],
        [
          -459.6,
          1313
        ],
        [
          -460.7,
          1301.6
        ],
        [
          -465.9,
          1298.4
        ],
        [
          -459.9,
          1253.6
        ]
      ]
    },
    {
      "name": "Jalan Lebak Bulus I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -395.5,
          1440.4
        ],
        [
          -421.8,
          1444.4
        ],
        [
          -474.2,
          1437.8
        ],
        [
          -529.5,
          1447.4
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -358.9,
          1172.5
        ],
        [
          -365.1,
          1194.6
        ]
      ]
    },
    {
      "name": "Jalan Dharmawangsa XIV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -315.6,
          869
        ],
        [
          -316.1,
          886.9
        ]
      ]
    },
    {
      "name": "Jalan Petogogan I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -406.5,
          837.1
        ],
        [
          -397.7,
          811.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -309.3,
          1382
        ],
        [
          -319.4,
          1381.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -310.5,
          1379.7
        ],
        [
          -296.1,
          1380
        ]
      ]
    },
    {
      "name": "Jalan Wijaya II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -338.6,
          820.7
        ],
        [
          -312.1,
          815.5
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -873.8,
          603.2
        ],
        [
          -852.6,
          605.3
        ],
        [
          -839.2,
          611.2
        ]
      ]
    },
    {
      "name": "Jalan Adam Malik",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1055.6,
          641.4
        ],
        [
          -1060.5,
          629.3
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -881.8,
          604.3
        ],
        [
          -910.7,
          600.6
        ],
        [
          -926.3,
          585.7
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -839.9,
          612.6
        ],
        [
          -854.4,
          606
        ],
        [
          -879.5,
          604.4
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -835.6,
          608.8
        ],
        [
          -827.7,
          606.3
        ]
      ]
    },
    {
      "name": "Jalan Ciputat Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -641.1,
          871.3
        ],
        [
          -640.5,
          911.8
        ],
        [
          -646.2,
          923.2
        ],
        [
          -656.4,
          930.5
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 1",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1011.7,
          1098.2
        ],
        [
          -1021.2,
          1095.5
        ]
      ]
    },
    {
      "name": "Jalan KH. Muhammad Syafi'i Hadzami",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -482.1,
          712
        ],
        [
          -494,
          717.9
        ]
      ]
    },
    {
      "name": "Jalan KH. Muhammad Syafi'i Hadzami",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -494.6,
          717
        ],
        [
          -482.5,
          711.2
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -567.6,
          646.6
        ],
        [
          -567.3,
          625.2
        ]
      ]
    },
    {
      "name": "Jalan Delman Utama I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -709.7,
          727.1
        ],
        [
          -708.6,
          749.5
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -814.7,
          606.5
        ],
        [
          -784.2,
          607.7
        ]
      ]
    },
    {
      "name": "Jalan Laut Ambon",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -719.3,
          612
        ],
        [
          -718.7,
          629.5
        ]
      ]
    },
    {
      "name": "Jalan Laut Ambon",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -719.9,
          628.7
        ],
        [
          -720.2,
          612
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -659.5,
          931.7
        ],
        [
          -668.5,
          934.3
        ],
        [
          -675.2,
          947.3
        ],
        [
          -676.3,
          1040.3
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -442.6,
          667.7
        ],
        [
          -464.7,
          664.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -778.4,
          1114.1
        ],
        [
          -775.1,
          1143.9
        ],
        [
          -761.8,
          1171.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -760,
          1177.2
        ],
        [
          -775.9,
          1148.4
        ],
        [
          -780.3,
          1118.3
        ]
      ]
    },
    {
      "name": "Jalan Renggas Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -931.1,
          1122.7
        ],
        [
          -933.9,
          1125.3
        ],
        [
          -958.2,
          1127
        ]
      ]
    },
    {
      "name": "Jalan Renggas Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -918.5,
          1113.1
        ],
        [
          -919.6,
          1120.4
        ],
        [
          -930.1,
          1122.1
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Puspita Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -934.9,
          971.6
        ],
        [
          -932.7,
          996.7
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -472.5,
          655.3
        ],
        [
          -484,
          650.8
        ]
      ]
    },
    {
      "name": "Jalan M. Saidi Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -930.6,
          607.8
        ],
        [
          -935.5,
          622.2
        ],
        [
          -939.3,
          652.2
        ],
        [
          -929.5,
          705.1
        ],
        [
          -934.2,
          758.9
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -394.8,
          1423
        ],
        [
          -393.4,
          1388.5
        ]
      ]
    },
    {
      "name": "Jalan Metro Alam III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -580.1,
          1107.4
        ],
        [
          -609.9,
          1105.7
        ]
      ]
    },
    {
      "name": "Jalan Metro Alam III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -609.9,
          1105.7
        ],
        [
          -624.7,
          1105.2
        ]
      ]
    },
    {
      "name": "Jalan Metro Alam III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -617.8,
          1104.4
        ],
        [
          -569.5,
          1109
        ]
      ]
    },
    {
      "name": "Jalan Haji Nawi Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -435.1,
          978.6
        ],
        [
          -490.4,
          972
        ]
      ]
    },
    {
      "name": "Jalan Adhyaksa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -656.5,
          1454.4
        ],
        [
          -667.9,
          1460
        ]
      ]
    },
    {
      "name": "Jalan Kenari Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1018.5,
          1183.1
        ],
        [
          -1005.4,
          1182.9
        ]
      ]
    },
    {
      "name": "Jalan Kompas",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1083.8,
          1378.4
        ],
        [
          -1122.6,
          1371.8
        ],
        [
          -1129.7,
          1376.2
        ],
        [
          -1134.2,
          1387.5
        ]
      ]
    },
    {
      "name": "Jalan Teuku Umar",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1370.1,
          1119.5
        ],
        [
          -1326.1,
          1182.5
        ]
      ]
    },
    {
      "name": "Jalan Akses Bintaro Xchange",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1311.3,
          1228.8
        ],
        [
          -1318.3,
          1219.7
        ]
      ]
    },
    {
      "name": "Jalan Akses Bintaro Xchange",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1317.9,
          1218
        ],
        [
          -1310.5,
          1227.9
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1131.5,
          1172.8
        ],
        [
          -1108.1,
          1150
        ],
        [
          -1069.1,
          1123.3
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1046,
          1097.1
        ],
        [
          -1067.3,
          1123.9
        ],
        [
          -1106.9,
          1151.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -939.3,
          970.8
        ],
        [
          -961.2,
          972.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -959.4,
          971.5
        ],
        [
          -934.8,
          967.5
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -426,
          661.4
        ],
        [
          -416.3,
          643.7
        ],
        [
          -410.3,
          638.5
        ],
        [
          -380,
          636.3
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Hamka",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1332.2,
          686.9
        ],
        [
          -1331.1,
          689.8
        ],
        [
          -1324.1,
          690.7
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Hamka",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1360.7,
          660
        ],
        [
          -1359.7,
          664.6
        ],
        [
          -1353.5,
          666.3
        ],
        [
          -1354.7,
          686.9
        ]
      ]
    },
    {
      "name": "Jalan KH. Muhammad Saleh",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1354.7,
          686.9
        ],
        [
          -1332.2,
          686.9
        ]
      ]
    },
    {
      "name": "Jalan Akses Bintaro Xchange",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1330.9,
          1245.2
        ],
        [
          -1312.1,
          1263
        ],
        [
          -1310.7,
          1274.5
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1419.3,
          1173.9
        ],
        [
          -1430.7,
          1161.7
        ]
      ]
    },
    {
      "name": "Jalan Guru Kojar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1484.2,
          799.6
        ],
        [
          -1481,
          812.5
        ],
        [
          -1475.5,
          813.8
        ],
        [
          -1465.6,
          834.2
        ],
        [
          -1457.6,
          835.4
        ],
        [
          -1454.9,
          850
        ]
      ]
    },
    {
      "name": "Jalan Panti Asuhan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1302.9,
          959.3
        ],
        [
          -1308.6,
          927.3
        ],
        [
          -1305.4,
          894.9
        ],
        [
          -1322,
          843.1
        ],
        [
          -1319.6,
          839.9
        ],
        [
          -1324.9,
          824.1
        ],
        [
          -1328.9,
          824.1
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Hamka",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1324,
          795
        ],
        [
          -1326.4,
          726.2
        ],
        [
          -1319.3,
          724.4
        ]
      ]
    },
    {
      "name": "Jalan Panti Asuhan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1328.9,
          824.1
        ],
        [
          -1331.4,
          796.2
        ]
      ]
    },
    {
      "name": "Jalan Ceger Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1135,
          912.3
        ],
        [
          -1169.2,
          927.7
        ],
        [
          -1214.2,
          960
        ]
      ]
    },
    {
      "name": "Jalan Masjid Baiturrahim",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1185.9,
          957.1
        ],
        [
          -1186.5,
          939.7
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3A",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1160.5,
          1078.8
        ],
        [
          -1163.5,
          1069.6
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3A",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1278.6,
          1065.9
        ],
        [
          -1256.5,
          1059.9
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3A",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1256.5,
          1059.9
        ],
        [
          -1278.7,
          1066.9
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Permai",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -875.5,
          866.6
        ],
        [
          -851.3,
          873.7
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Permai",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -848.4,
          876.4
        ],
        [
          -823.9,
          885.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -877.6,
          859.9
        ],
        [
          -878.9,
          872.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -880.7,
          873.1
        ],
        [
          -879.3,
          859.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -877.5,
          851.7
        ],
        [
          -874.1,
          839.1
        ]
      ]
    },
    {
      "name": "Jalan Akses Bintaro Xchange",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1349.2,
          1254.3
        ],
        [
          -1341.8,
          1244.4
        ],
        [
          -1330.9,
          1245.2
        ]
      ]
    },
    {
      "name": "Jalan Rusa Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1273.1,
          1275
        ],
        [
          -1258.6,
          1271.1
        ]
      ]
    },
    {
      "name": "Jalan Cilandak Bawah III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -332.9,
          1269.8
        ],
        [
          -329.6,
          1292
        ]
      ]
    },
    {
      "name": "Jalan Saidi Arteri",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -919.3,
          607.7
        ],
        [
          -910.7,
          626
        ],
        [
          -906.7,
          654.8
        ]
      ]
    },
    {
      "name": "Jalan Saidi Arteri",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -926.3,
          585.7
        ],
        [
          -928.1,
          588.6
        ],
        [
          -919.3,
          607.7
        ]
      ]
    },
    {
      "name": "Jalan Gandaria I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -494.3,
          683.4
        ],
        [
          -500.8,
          649.5
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -744.2,
          1334.6
        ],
        [
          -735.1,
          1329.8
        ]
      ]
    },
    {
      "name": "Jalan Inpres",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1073.1,
          691.3
        ],
        [
          -1084.8,
          689.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Jumat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -640,
          1330.5
        ],
        [
          -648.6,
          1335.2
        ]
      ]
    },
    {
      "name": "Jalan Cenderawasih Nandjar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1379.5,
          1340.4
        ],
        [
          -1394.4,
          1343.1
        ]
      ]
    },
    {
      "name": "Jalan Darma Putra Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -580.5,
          864.1
        ],
        [
          -555.3,
          852.3
        ],
        [
          -543.8,
          830.4
        ]
      ]
    },
    {
      "name": "Jalan Barito",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -405.8,
          720.6
        ],
        [
          -409.3,
          713.4
        ]
      ]
    },
    {
      "name": "Jalan Adam Malik",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1066.6,
          647.1
        ],
        [
          -1084.8,
          689.7
        ]
      ]
    },
    {
      "name": "Jalan Adam Malik",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1095.3,
          740.2
        ],
        [
          -1103.9,
          782.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Jumat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -646.5,
          1333.4
        ],
        [
          -661.6,
          1336.8
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Permai",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -823.9,
          885.1
        ],
        [
          -848.4,
          876.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -504.3,
          1380.3
        ],
        [
          -530.8,
          1376.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -516.8,
          1376.8
        ],
        [
          -487,
          1378.4
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -542.1,
          1368.3
        ],
        [
          -505.6,
          1375.3
        ],
        [
          -432.8,
          1375.6
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -613.6,
          1349.4
        ],
        [
          -623.8,
          1341
        ]
      ]
    },
    {
      "name": "Jalan Gandaria I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -496.8,
          650.5
        ],
        [
          -499.3,
          654.6
        ],
        [
          -496.9,
          665.5
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -500.8,
          649.5
        ],
        [
          -514.7,
          635.6
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -342.5,
          1384
        ],
        [
          -358.5,
          1383.4
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -762.4,
          610.5
        ],
        [
          -814.8,
          608.6
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -719.3,
          610.3
        ],
        [
          -705,
          610.9
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Permai",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -851.3,
          873.7
        ],
        [
          -876.4,
          867.2
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -686.4,
          1117.8
        ],
        [
          -697.4,
          1132.6
        ],
        [
          -701.4,
          1144
        ],
        [
          -708.1,
          1164.9
        ],
        [
          -714.7,
          1205.3
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -676.6,
          1046.5
        ],
        [
          -678.5,
          1025.4
        ],
        [
          -674.7,
          968.9
        ]
      ]
    },
    {
      "name": "Jalan Gedung Hijau Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -663.8,
          1128.7
        ],
        [
          -653.3,
          1144.7
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -386.8,
          1305.7
        ],
        [
          -391.4,
          1355.6
        ]
      ]
    },
    {
      "name": "Jalan Abdul Majid Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -361.1,
          1003.3
        ],
        [
          -333.4,
          1004.1
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -398.5,
          1460
        ],
        [
          -394.8,
          1423
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -393.7,
          1422.6
        ],
        [
          -398.4,
          1460
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -360.5,
          1383.3
        ],
        [
          -385.9,
          1382.6
        ]
      ]
    },
    {
      "name": "Jalan Adhyaksa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -649.1,
          1449.8
        ],
        [
          -656.5,
          1454.4
        ]
      ]
    },
    {
      "name": "Jalan Adhyaksa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -672.5,
          1460
        ],
        [
          -657.7,
          1453.1
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Jumat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -666.8,
          1336.8
        ],
        [
          -693.2,
          1336.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Jumat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -705.9,
          1337.8
        ],
        [
          -715.3,
          1335.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Jumat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -667,
          1338.6
        ],
        [
          -676.9,
          1338.4
        ]
      ]
    },
    {
      "name": "Jurang Mangu Barat Utama",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1369.1,
          1057.7
        ],
        [
          -1377.6,
          1057.2
        ],
        [
          -1385.9,
          1049.8
        ],
        [
          -1396.7,
          1049
        ],
        [
          -1406,
          1024.7
        ],
        [
          -1405.3,
          1009.3
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -705,
          610.9
        ],
        [
          -684.2,
          611.6
        ],
        [
          -672.8,
          601.3
        ],
        [
          -664,
          600.1
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -663.5,
          601.5
        ],
        [
          -671.5,
          602
        ],
        [
          -683.5,
          612.8
        ],
        [
          -719.3,
          612
        ]
      ]
    },
    {
      "name": "Jalan Deplu Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -797,
          1106
        ],
        [
          -791.6,
          1101.4
        ],
        [
          -769.3,
          1102.8
        ]
      ]
    },
    {
      "name": "Jalan Deplu Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -780.5,
          1102.5
        ],
        [
          -791.4,
          1102.3
        ],
        [
          -797,
          1106
        ]
      ]
    },
    {
      "name": "Jalan Deplu Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -826.4,
          1094.3
        ],
        [
          -818.3,
          1098.2
        ]
      ]
    },
    {
      "name": "Jalan Deplu Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -818.3,
          1098.2
        ],
        [
          -826.7,
          1095
        ]
      ]
    },
    {
      "name": "Jalan Deplu Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -706.1,
          1108
        ],
        [
          -730.2,
          1109.6
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -500.8,
          647.4
        ],
        [
          -513.4,
          634.3
        ]
      ]
    },
    {
      "name": "Jalan Radio Dalam",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -441.7,
          778.5
        ],
        [
          -439.7,
          769.3
        ]
      ]
    },
    {
      "name": "Jalan Barito II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -382.3,
          764.3
        ],
        [
          -395.8,
          750
        ],
        [
          -399,
          732.6
        ]
      ]
    },
    {
      "name": "Jalan Barito II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -399,
          732.6
        ],
        [
          -405.1,
          721.6
        ]
      ]
    },
    {
      "name": "Jalan Kramat Pela",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -428.9,
          774.1
        ],
        [
          -413.2,
          778.5
        ]
      ]
    },
    {
      "name": "Jalan Gandaria I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -440.5,
          771.5
        ],
        [
          -453.1,
          767
        ]
      ]
    },
    {
      "name": "Jalan Gandaria I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -453.1,
          767
        ],
        [
          -439.6,
          770.6
        ]
      ]
    },
    {
      "name": "Jalan Kramat Pela",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -428.9,
          774.1
        ],
        [
          -439.6,
          771.6
        ]
      ]
    },
    {
      "name": "Jalan Gandaria I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -482.9,
          712.5
        ],
        [
          -489.2,
          699.9
        ]
      ]
    },
    {
      "name": "Jalan Gandaria I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -489.2,
          699.9
        ],
        [
          -482.1,
          712
        ]
      ]
    },
    {
      "name": "Jalan Bulungan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -354.9,
          716.2
        ],
        [
          -368.1,
          692.3
        ]
      ]
    },
    {
      "name": "Jalan Pati Unus",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -377.1,
          622.1
        ],
        [
          -379.1,
          636.3
        ]
      ]
    },
    {
      "name": "Jalan Bulungan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -379,
          638.1
        ],
        [
          -379,
          657.6
        ]
      ]
    },
    {
      "name": "Jalan RC. Veteran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -807.7,
          1052.3
        ],
        [
          -805.1,
          1030.3
        ]
      ]
    },
    {
      "name": "Jalan RC. Veteran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -805.1,
          1030.3
        ],
        [
          -806.8,
          1052.4
        ]
      ]
    },
    {
      "name": "Jalan Mawar Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -833.3,
          1284.7
        ],
        [
          -847.6,
          1283.2
        ],
        [
          -871,
          1275.1
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -675.9,
          1046.5
        ],
        [
          -671.9,
          1082
        ],
        [
          -679,
          1106
        ],
        [
          -685.6,
          1116.7
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -686.3,
          1116.2
        ],
        [
          -679.7,
          1105.8
        ],
        [
          -672.9,
          1082.9
        ],
        [
          -676.4,
          1059
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1253.2,
          1262.4
        ],
        [
          -1292.6,
          1282.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1295,
          1281.9
        ],
        [
          -1270.6,
          1267.2
        ]
      ]
    },
    {
      "name": "Jalan Adhyaksa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -603.5,
          1377.4
        ],
        [
          -598.3,
          1358
        ]
      ]
    },
    {
      "name": "Jalan Deplu Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -745.1,
          1106.6
        ],
        [
          -736.1,
          1108.5
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -467.8,
          662.1
        ],
        [
          -474,
          655.8
        ]
      ]
    },
    {
      "name": "Jalan Gedung Hijau Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -673.6,
          1124.3
        ],
        [
          -686.4,
          1117.8
        ]
      ]
    },
    {
      "name": "Jalan Gedung Hijau Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -685.6,
          1116.7
        ],
        [
          -673.1,
          1123.1
        ]
      ]
    },
    {
      "name": "Jalan Gedung Hijau Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -652.9,
          1153.4
        ],
        [
          -654.4,
          1145.3
        ]
      ]
    },
    {
      "name": "Jalan Gedung Hijau Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -653.3,
          1144.7
        ],
        [
          -651.2,
          1152.8
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -327.2,
          1384.1
        ],
        [
          -342.5,
          1384
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -312.2,
          1384.2
        ],
        [
          -327.2,
          1384.1
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -297.5,
          1384.2
        ],
        [
          -312.2,
          1384.2
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -618.2,
          1337.3
        ],
        [
          -602.3,
          1347.7
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -630.7,
          1324.4
        ],
        [
          -619.5,
          1336
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -903.2,
          684.3
        ],
        [
          -898.4,
          709
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -909.1,
          665.6
        ],
        [
          -910.9,
          657
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -900.1,
          709.4
        ],
        [
          -907.7,
          672.1
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3A",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1117.3,
          1117.2
        ],
        [
          -1126.6,
          1115.3
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -638.4,
          1327.9
        ],
        [
          -643.4,
          1321.4
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -702.2,
          1249.8
        ],
        [
          -717.6,
          1231.9
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -643.4,
          1321.4
        ],
        [
          -685.3,
          1273.1
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -712.8,
          1226
        ],
        [
          -704.5,
          1235.7
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -704.5,
          1235.7
        ],
        [
          -693.6,
          1247.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1292.6,
          1282.2
        ],
        [
          -1304.9,
          1291.1
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Jumat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -693.2,
          1336.2
        ],
        [
          -702.2,
          1336
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1306.4,
          1290
        ],
        [
          -1295,
          1281.9
        ]
      ]
    },
    {
      "name": "Jalan Haji Junaedi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -316.2,
          1161.9
        ],
        [
          -315.5,
          1173.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1222.4,
          1244.6
        ],
        [
          -1204.4,
          1232.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -825.1,
          832.1
        ],
        [
          -821.6,
          845.8
        ]
      ]
    },
    {
      "name": "Jalan Niaga Hijau Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -629.6,
          1285.8
        ],
        [
          -612.6,
          1304.6
        ]
      ]
    },
    {
      "name": "Jalan Niaga Hijau Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -644.8,
          1269
        ],
        [
          -634.1,
          1280.8
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -721.4,
          1247.4
        ],
        [
          -719.3,
          1230.2
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -725.8,
          1274.5
        ],
        [
          -721.4,
          1247.4
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Jumat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -638.4,
          1327.9
        ],
        [
          -646.5,
          1333.4
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -386.2,
          1376
        ],
        [
          -363.4,
          1376.6
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -297.6,
          1376.7
        ],
        [
          -289.4,
          1376.5
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -811.4,
          1441.6
        ],
        [
          -814.4,
          1450.1
        ],
        [
          -823.3,
          1460
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -825.1,
          1460
        ],
        [
          -817.1,
          1451.1
        ],
        [
          -812.3,
          1440.9
        ]
      ]
    },
    {
      "name": "Jalan Boulevard UPJ",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1366.9,
          1389.4
        ],
        [
          -1375.1,
          1419.2
        ],
        [
          -1376.7,
          1460
        ]
      ]
    },
    {
      "name": "Jalan Boulevard UPJ",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1378.3,
          1460
        ],
        [
          -1376.8,
          1419.4
        ],
        [
          -1368.2,
          1388.9
        ]
      ]
    },
    {
      "name": "Jalan Mawar Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -871,
          1275.1
        ],
        [
          -880,
          1273.2
        ]
      ]
    },
    {
      "name": "Jalan Cilandak Tengah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -292.3,
          1307.4
        ],
        [
          -314.9,
          1308.1
        ]
      ]
    },
    {
      "name": "Jalan Intan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -342.5,
          1384
        ],
        [
          -347.5,
          1415.8
        ],
        [
          -331.7,
          1439.7
        ],
        [
          -330.2,
          1450.7
        ],
        [
          -333.2,
          1460
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Sudirman",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1472.7,
          1194.4
        ],
        [
          -1451.5,
          1189.1
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Hamka",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1343.1,
          607.9
        ],
        [
          -1348.8,
          650.2
        ],
        [
          -1360.7,
          660
        ]
      ]
    },
    {
      "name": "Jalan Dokter Cipto Mangunkusumo",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1494.3,
          605.1
        ],
        [
          -1495,
          623.5
        ],
        [
          -1503.1,
          653.4
        ],
        [
          -1506.1,
          689
        ]
      ]
    },
    {
      "name": "Jalan Pahlawan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -880.2,
          1273.8
        ],
        [
          -887.6,
          1298.6
        ]
      ]
    },
    {
      "name": "Jalan Teuku Umar",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1328.6,
          1186.6
        ],
        [
          -1372.1,
          1121.5
        ]
      ]
    },
    {
      "name": "Jalan Ki Hajar Dewantara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1193.2,
          1460
        ],
        [
          -1210.2,
          1436.9
        ],
        [
          -1223.7,
          1428.4
        ],
        [
          -1235.3,
          1433.1
        ],
        [
          -1246.9,
          1422.7
        ]
      ]
    },
    {
      "name": "Jalan Gandaria I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -495.3,
          674.8
        ],
        [
          -494.3,
          683.4
        ]
      ]
    },
    {
      "name": "Jalan Asem II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -281.7,
          1098.5
        ],
        [
          -358.3,
          1089.3
        ]
      ]
    },
    {
      "name": "Jalan Hang Tuah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -360,
          636.2
        ],
        [
          -360,
          622
        ]
      ]
    },
    {
      "name": "Jalan Dharmawangsa Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -270.6,
          846.1
        ],
        [
          -298.3,
          846.4
        ]
      ]
    },
    {
      "name": "Jalan Tegal Rotan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1356.3,
          1305.9
        ],
        [
          -1363.2,
          1295.6
        ],
        [
          -1366,
          1284.3
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1054.6,
          1085.2
        ],
        [
          -1073.7,
          1099.3
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -717.7,
          1220.1
        ],
        [
          -716,
          1208.9
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -567.6,
          646.6
        ],
        [
          -565.5,
          625.7
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1341.9,
          1233.7
        ],
        [
          -1330.3,
          1238.8
        ]
      ]
    },
    {
      "name": "Jalan Pahlawan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -887.6,
          1298.6
        ],
        [
          -893.8,
          1319.7
        ]
      ]
    },
    {
      "name": "Jalan Kemajuan Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -976.3,
          676.7
        ],
        [
          -1001.4,
          676.8
        ]
      ]
    },
    {
      "name": "Jalan Inpres",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1049.2,
          693.4
        ],
        [
          -1070.8,
          691.5
        ]
      ]
    },
    {
      "name": "Jalan Adam Malik",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1063.3,
          622.9
        ],
        [
          -1072.8,
          587.4
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1029.6,
          590.5
        ],
        [
          -1060.7,
          589.2
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1052.3,
          588.8
        ],
        [
          -1012.1,
          589.8
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1060.7,
          589.2
        ],
        [
          -1071.2,
          587.8
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1099.1,
          588.3
        ],
        [
          -1084.8,
          586.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1339.4,
          1321.5
        ],
        [
          -1308.7,
          1291.9
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1520,
          1408.3
        ],
        [
          -1495.3,
          1404
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1392.1,
          1347.4
        ],
        [
          -1363.1,
          1339.8
        ],
        [
          -1339.4,
          1321.5
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1472.5,
          1129
        ],
        [
          -1504.4,
          1117.4
        ],
        [
          -1520,
          1103.8
        ]
      ]
    },
    {
      "name": "Jalan Ceger Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1061.4,
          924.6
        ],
        [
          -1106.5,
          914.1
        ],
        [
          -1133.6,
          912
        ]
      ]
    },
    {
      "name": "Jalan Pondok Betung Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -940.5,
          943.7
        ],
        [
          -953.7,
          949.6
        ],
        [
          -978.8,
          954.3
        ],
        [
          -997.3,
          950.5
        ]
      ]
    },
    {
      "name": "Jalan M. Saidi Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -934.2,
          758.9
        ],
        [
          -936.3,
          776.7
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1012.1,
          589.8
        ],
        [
          -990,
          591
        ]
      ]
    },
    {
      "name": "Jalan Kemajuan Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -972.6,
          659.3
        ],
        [
          -976.5,
          665.6
        ],
        [
          -976.3,
          676.7
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -989.9,
          592.9
        ],
        [
          -1005,
          592
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1005,
          592
        ],
        [
          -1022.2,
          590.8
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1393.9,
          1203.8
        ],
        [
          -1402.8,
          1196.5
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1399.3,
          1193.6
        ],
        [
          -1393.2,
          1200.6
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1409.2,
          1180
        ],
        [
          -1399.3,
          1193.6
        ]
      ]
    },
    {
      "name": "MH Thamrin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1403.7,
          1170.8
        ],
        [
          -1409.2,
          1180
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1420.8,
          1167
        ],
        [
          -1414.7,
          1173.2
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1413.8,
          1181.2
        ],
        [
          -1419.3,
          1173.9
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1428.9,
          1159.8
        ],
        [
          -1420.8,
          1167
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Sudirman",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1420.1,
          1184.7
        ],
        [
          -1451.3,
          1190.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Sudirman",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1422.1,
          1183.6
        ],
        [
          -1413.8,
          1181.2
        ]
      ]
    },
    {
      "name": "Jalan Kebayoran Baru",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -535.1,
          628.7
        ],
        [
          -522.8,
          629.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1232,
          1253.4
        ],
        [
          -1243.8,
          1260
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1212.9,
          1241.2
        ],
        [
          -1224.9,
          1249
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1130.3,
          1173.9
        ],
        [
          -1203.3,
          1234.1
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3A",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1163.5,
          1069.6
        ],
        [
          -1160,
          1077.5
        ]
      ]
    },
    {
      "name": "Jalan Tegal Rotan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1345.5,
          1316.1
        ],
        [
          -1351.6,
          1310.9
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1364.6,
          1226.1
        ],
        [
          -1389.2,
          1207.4
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1337.6,
          1238.1
        ],
        [
          -1347.3,
          1235.6
        ]
      ]
    },
    {
      "name": "Jalan Boulevard Bintaro Jaya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1356,
          1231.9
        ],
        [
          -1364.6,
          1226.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1224.9,
          1249
        ],
        [
          -1232,
          1253.4
        ]
      ]
    },
    {
      "name": "Cut Mutia I",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1367.4,
          1103.2
        ],
        [
          -1370.4,
          1120.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -868.9,
          825.9
        ],
        [
          -872.8,
          840.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1232.7,
          1249.4
        ],
        [
          -1222.4,
          1244.6
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1267.2,
          1265.3
        ],
        [
          -1259.9,
          1260.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1253.9,
          1257.2
        ],
        [
          -1240.5,
          1251.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1204.4,
          1232.8
        ],
        [
          -1143.6,
          1183.9
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1062.4,
          1116.8
        ],
        [
          -1047.8,
          1096.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -926.8,
          964.8
        ],
        [
          -900.3,
          951.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -826.4,
          836.5
        ],
        [
          -829.1,
          826
        ]
      ]
    },
    {
      "name": "Jalan RC. Veteran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -788.7,
          942.7
        ],
        [
          -792.7,
          950
        ]
      ]
    },
    {
      "name": "Jalan Dharmawangsa VI",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -305.2,
          838.9
        ],
        [
          -308.6,
          817.4
        ]
      ]
    },
    {
      "name": "Jalan Kebayoran Baru",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -553.5,
          626.6
        ],
        [
          -542.7,
          628.8
        ]
      ]
    },
    {
      "name": "Jalan Dharmawangsa IX",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -299.3,
          814.8
        ],
        [
          -295.8,
          833.8
        ]
      ]
    },
    {
      "name": "Jalan Akses Bintaro Xchange",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1334.6,
          1309.5
        ],
        [
          -1346.3,
          1306.1
        ],
        [
          -1348.8,
          1291.8
        ]
      ]
    },
    {
      "name": "Jalan Akses Bintaro Xchange",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1348.8,
          1291.8
        ],
        [
          -1349.4,
          1283.7
        ]
      ]
    },
    {
      "name": "Jalan Akses Bintaro Xchange",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1349.2,
          1271.7
        ],
        [
          -1349.5,
          1256
        ]
      ]
    },
    {
      "name": "Jalan Gandaria Tengah III",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -430.3,
          730.9
        ],
        [
          -438.4,
          732.3
        ]
      ]
    },
    {
      "name": "Jalan Gandaria Tengah III",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -413.3,
          725.2
        ],
        [
          -430.3,
          730.9
        ]
      ]
    },
    {
      "name": "Jalan Dharmawangsa IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -307.6,
          850.7
        ],
        [
          -307,
          868.8
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -361.2,
          991.8
        ],
        [
          -361.1,
          1003.3
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -438.6,
          666.1
        ],
        [
          -430.8,
          664.2
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -430.6,
          665
        ],
        [
          -442.6,
          667.7
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -484,
          650.8
        ],
        [
          -495.7,
          649.5
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -485.4,
          651.9
        ],
        [
          -496.8,
          650.5
        ]
      ]
    },
    {
      "name": "Jalan Gandaria I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -496.9,
          665.5
        ],
        [
          -495.3,
          674.8
        ]
      ]
    },
    {
      "name": "Jalan Dharmawangsa Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -333.7,
          848.8
        ],
        [
          -318,
          847.9
        ]
      ]
    },
    {
      "name": "Jalan Trunojoyo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -341.3,
          636
        ],
        [
          -318.6,
          635.8
        ]
      ]
    },
    {
      "name": "Jalan Panglima Polim Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -348.3,
          651
        ],
        [
          -348.3,
          642.3
        ]
      ]
    },
    {
      "name": "Jalan Rusa Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1239.4,
          1316.3
        ],
        [
          -1225.1,
          1370.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1413.1,
          1354.4
        ],
        [
          -1392.1,
          1347.4
        ]
      ]
    },
    {
      "name": "MH Thamrin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1407.8,
          1123.7
        ],
        [
          -1407.9,
          1115.4
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -714.7,
          1205.3
        ],
        [
          -715.2,
          1223
        ]
      ]
    },
    {
      "name": "Jalan Kartika Utama",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -579,
          992.3
        ],
        [
          -586.3,
          997.2
        ]
      ]
    },
    {
      "name": "Jalan Kyai Haji Ahmad Dahlan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -438.4,
          732.3
        ],
        [
          -439.7,
          769.3
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -588.8,
          776.8
        ],
        [
          -589.9,
          747.9
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -587.7,
          748.1
        ],
        [
          -586.8,
          776.5
        ]
      ]
    },
    {
      "name": "Jalan Tegal Rotan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1390.9,
          1224.8
        ],
        [
          -1422.9,
          1204.5
        ],
        [
          -1452,
          1207.8
        ],
        [
          -1468.5,
          1213.3
        ]
      ]
    },
    {
      "name": "Jalan Tegal Rotan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1368.1,
          1270.3
        ],
        [
          -1381.6,
          1229.9
        ]
      ]
    },
    {
      "name": "Jalan Bulungan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -379.9,
          659.5
        ],
        [
          -379.9,
          638.1
        ]
      ]
    },
    {
      "name": "Jalan Bulungan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -379,
          657.6
        ],
        [
          -379.5,
          666.8
        ]
      ]
    },
    {
      "name": "Jalan Cenderawasih Nandjar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1344.7,
          1319.4
        ],
        [
          -1350.8,
          1324.9
        ]
      ]
    },
    {
      "name": "Jalan Cenderawasih Nandjar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1371.8,
          1334.5
        ],
        [
          -1378.3,
          1340
        ]
      ]
    },
    {
      "name": "Jalan Boulevard UPJ",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1368.2,
          1388.9
        ],
        [
          -1358.3,
          1364.1
        ]
      ]
    },
    {
      "name": "Jalan Boulevard UPJ",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1356.8,
          1366.8
        ],
        [
          -1366.9,
          1389.4
        ]
      ]
    },
    {
      "name": "Jalan Cenderawasih Nandjar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1334.6,
          1309.5
        ],
        [
          -1340.5,
          1316.7
        ]
      ]
    },
    {
      "name": "Jalan Ceger Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1402.3,
          959.3
        ],
        [
          -1439.9,
          951.6
        ]
      ]
    },
    {
      "name": "Jalan Abdul Majid Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -322.6,
          1006.7
        ],
        [
          -321.5,
          1017.8
        ],
        [
          -298.2,
          1020.4
        ],
        [
          -261.5,
          1016.3
        ]
      ]
    },
    {
      "name": "Jalan Cilandak Tengah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -298.3,
          1367.7
        ],
        [
          -298.2,
          1376.8
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -356.8,
          1120.3
        ],
        [
          -357,
          1164.9
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3A",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1203.8,
          1055.2
        ],
        [
          -1182.4,
          1065.1
        ],
        [
          -1169.3,
          1066.7
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 3A",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1129.6,
          1109.6
        ],
        [
          -1120.6,
          1115.8
        ]
      ]
    },
    {
      "name": "Jalan Saidi Arteri",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -918.6,
          628.5
        ],
        [
          -923.9,
          612.3
        ]
      ]
    },
    {
      "name": "Jalan Saidi Arteri",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -906.7,
          654.8
        ],
        [
          -896.5,
          711.6
        ]
      ]
    },
    {
      "name": "Jalan Saidi Arteri",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -928.8,
          600.6
        ],
        [
          -936.3,
          585.9
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Permai IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -858.9,
          890.7
        ],
        [
          -848.4,
          876.4
        ]
      ]
    },
    {
      "name": "Jalan Al Mubarok Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -729.8,
          661.8
        ],
        [
          -731.9,
          630.3
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -596.1,
          1359
        ],
        [
          -625.7,
          1337.5
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -549.3,
          1373.7
        ],
        [
          -596.1,
          1359
        ]
      ]
    },
    {
      "name": "Jalan Pondok Jati",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1420.5,
          957
        ],
        [
          -1426.6,
          906.4
        ]
      ]
    },
    {
      "name": "Jalan Mawar III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -832,
          1272.3
        ],
        [
          -833.3,
          1284.7
        ]
      ]
    },
    {
      "name": "Jalan Trunojoyo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -296.6,
          637.9
        ],
        [
          -307.9,
          638.2
        ]
      ]
    },
    {
      "name": "Jalan Trunojoyo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -318.6,
          635.8
        ],
        [
          -296.2,
          635.7
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -392.7,
          1366.5
        ],
        [
          -390.7,
          1319.1
        ],
        [
          -384.7,
          1284.4
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -379.4,
          1236.2
        ],
        [
          -383.2,
          1284.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Saikin",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -800.1,
          1271.3
        ],
        [
          -796.2,
          1267.6
        ],
        [
          -751.2,
          1274.8
        ],
        [
          -725.8,
          1274.5
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -812.3,
          1440.9
        ],
        [
          -812.2,
          1430.9
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -811.2,
          1430.9
        ],
        [
          -811.4,
          1441.6
        ]
      ]
    },
    {
      "name": "Jalan Tegal Rotan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1366,
          1284.3
        ],
        [
          -1368.1,
          1270.3
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -391.4,
          1355.6
        ],
        [
          -391.6,
          1371.2
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -812.2,
          1430.9
        ],
        [
          -817.6,
          1412.3
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -816.7,
          1412.3
        ],
        [
          -811.2,
          1430.9
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -431.9,
          1375.6
        ],
        [
          -416.1,
          1376.1
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -391.8,
          1388.2
        ],
        [
          -393.7,
          1422.6
        ]
      ]
    },
    {
      "name": "Jalan Terogong Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -436.2,
          1242.6
        ],
        [
          -404.1,
          1229.7
        ]
      ]
    },
    {
      "name": "Jalan Teuku Umar",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1318.3,
          1219.7
        ],
        [
          -1331.6,
          1231.5
        ],
        [
          -1330.3,
          1238.8
        ]
      ]
    },
    {
      "name": "Jalan Akses Bintaro Xchange",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1348.8,
          1291.8
        ],
        [
          -1349.1,
          1280.5
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -397,
          1382.7
        ],
        [
          -413.7,
          1383.3
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -604.7,
          1354.6
        ],
        [
          -613.6,
          1349.4
        ]
      ]
    },
    {
      "name": "Jalan Adhyaksa Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -606,
          1387.5
        ],
        [
          -603.5,
          1377.4
        ]
      ]
    },
    {
      "name": "Jalan Pondok Betung Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1013.9,
          935.7
        ],
        [
          -1030.3,
          928.6
        ],
        [
          -1061.4,
          924.6
        ]
      ]
    },
    {
      "name": "Jalan Masjid Baiturrahim",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1185.9,
          957.1
        ],
        [
          -1180.3,
          968.9
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -777.4,
          1007.3
        ],
        [
          -772.6,
          1038.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -783.4,
          960
        ],
        [
          -778.5,
          975.9
        ],
        [
          -777.4,
          1007.3
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -699,
          1134.7
        ],
        [
          -687,
          1117.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -870.3,
          763.4
        ],
        [
          -851.6,
          786
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -676.4,
          1059
        ],
        [
          -676.6,
          1046.5
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -827.7,
          607.7
        ],
        [
          -839.9,
          612.6
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -835.6,
          608.8
        ],
        [
          -827.7,
          605.5
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -583.9,
          868.1
        ],
        [
          -585,
          809.9
        ],
        [
          -588.8,
          776.8
        ]
      ]
    },
    {
      "name": "Jalan Pahlawan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -880,
          1273.2
        ],
        [
          -869,
          1236.3
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -762.5,
          608.8
        ],
        [
          -750.7,
          609.3
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -750.8,
          611.1
        ],
        [
          -762.4,
          610.5
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -744.4,
          609.4
        ],
        [
          -720.2,
          610.3
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -720.2,
          612
        ],
        [
          -744.4,
          611.3
        ]
      ]
    },
    {
      "name": "Jalan Kebayoran Baru",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -582.1,
          621.4
        ],
        [
          -572.6,
          622.4
        ]
      ]
    },
    {
      "name": "Jalan Gedung Hijau Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -673.1,
          1123.1
        ],
        [
          -663.8,
          1128.7
        ]
      ]
    },
    {
      "name": "Jalan Kartika Utama",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -586.3,
          997.2
        ],
        [
          -604.7,
          1006.6
        ]
      ]
    },
    {
      "name": "Jalan Sekolah Duta Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -558.3,
          1221.1
        ],
        [
          -550.7,
          1224.4
        ]
      ]
    },
    {
      "name": "Jalan Sekolah Duta Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -592.4,
          1209.2
        ],
        [
          -558.3,
          1221.1
        ]
      ]
    },
    {
      "name": "Jalan Nusa Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1096.5,
          1137.4
        ],
        [
          -1129.4,
          1141.2
        ],
        [
          -1137.2,
          1138.1
        ],
        [
          -1138.3,
          1129.7
        ],
        [
          -1156.1,
          1131.3
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Jumat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -642.5,
          1333.4
        ],
        [
          -657.3,
          1338
        ]
      ]
    },
    {
      "name": "Jalan Praja Dalam K",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -555.9,
          772
        ],
        [
          -557.4,
          793.9
        ]
      ]
    },
    {
      "name": "Jalan Bungur II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -547.8,
          766.2
        ],
        [
          -550.2,
          772.5
        ],
        [
          -555.9,
          772
        ]
      ]
    },
    {
      "name": "Jalan Bungur II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -542.1,
          753.1
        ],
        [
          -547.8,
          766.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -780.3,
          1118.3
        ],
        [
          -779,
          1103.8
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -412.8,
          1376.2
        ],
        [
          -398.7,
          1376.2
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Permai IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -864.4,
          910.1
        ],
        [
          -858.9,
          890.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -820.3,
          851
        ],
        [
          -816.3,
          866.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1143.6,
          1183.9
        ],
        [
          -1131.5,
          1172.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1106.9,
          1151.5
        ],
        [
          -1130.3,
          1173.9
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -879.3,
          859.5
        ],
        [
          -877.5,
          851.7
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -630.7,
          1335.6
        ],
        [
          -637.1,
          1329.9
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -466.3,
          1383.1
        ],
        [
          -507.5,
          1382.7
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -729.8,
          1297.4
        ],
        [
          -727,
          1281.8
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Jumat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -718.1,
          1335.8
        ],
        [
          -733.3,
          1335.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Jumat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -702.2,
          1336
        ],
        [
          -715.3,
          1335.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Jumat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -679.7,
          1338.4
        ],
        [
          -692.9,
          1338.3
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -462,
          1378
        ],
        [
          -450.1,
          1377.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -450,
          1380.2
        ],
        [
          -469,
          1380.3
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -320.6,
          1381.8
        ],
        [
          -328.7,
          1381.6
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -328.7,
          1379.4
        ],
        [
          -315.7,
          1379.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -469.9,
          1380.3
        ],
        [
          -489.2,
          1380.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -489.2,
          1380.5
        ],
        [
          -504.3,
          1380.3
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -530.2,
          1374.3
        ],
        [
          -516.8,
          1376.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -533.7,
          1375.8
        ],
        [
          -544.5,
          1372.7
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -543.5,
          1370.6
        ],
        [
          -533.1,
          1373.6
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -603.7,
          1351.8
        ],
        [
          -616.5,
          1343.9
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -663.3,
          1292.4
        ],
        [
          -670.6,
          1283.8
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -649.3,
          1309
        ],
        [
          -663.3,
          1292.4
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -662.7,
          1289.8
        ],
        [
          -647.8,
          1307.8
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 5",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1295.6,
          1065
        ],
        [
          -1287.2,
          1065.7
        ]
      ]
    },
    {
      "name": "Jalan Niaga Hijau Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -613.3,
          1305.4
        ],
        [
          -620.7,
          1297.4
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -629.2,
          1336.3
        ],
        [
          -635,
          1329.5
        ]
      ]
    },
    {
      "name": "Jalan Caraka Buana Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1158,
          787.4
        ],
        [
          -1142.9,
          784.9
        ]
      ]
    },
    {
      "name": "Jalan Sunan Gunung Jati Japos",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1496.4,
          801.9
        ],
        [
          -1514.1,
          802.8
        ]
      ]
    },
    {
      "name": "Jalan RC. Veteran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -814,
          1069
        ],
        [
          -819.3,
          1079.4
        ]
      ]
    },
    {
      "name": "Jalan RC. Veteran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -819.8,
          1078.5
        ],
        [
          -814.8,
          1068.5
        ]
      ]
    },
    {
      "name": "Jalan Raya Pondok Jaya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1482.6,
          1007.9
        ],
        [
          -1482.4,
          986.5
        ],
        [
          -1485.8,
          976.5
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -547.8,
          1371.5
        ],
        [
          -557,
          1368.4
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -602.3,
          1347.7
        ],
        [
          -594.9,
          1351.2
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -308.3,
          1377
        ],
        [
          -297.6,
          1376.7
        ]
      ]
    },
    {
      "name": "Jalan Nusa Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1293.5,
          1149.2
        ],
        [
          -1305.2,
          1150.2
        ]
      ]
    },
    {
      "name": "Jalan Nusa Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1292.6,
          1164.5
        ],
        [
          -1293.5,
          1149.2
        ]
      ]
    },
    {
      "name": "Jalan Nusa Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1305.2,
          1150.2
        ],
        [
          -1315.8,
          1128.1
        ],
        [
          -1323.7,
          1127.8
        ],
        [
          -1325.3,
          1122.9
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1485.6,
          1404.7
        ],
        [
          -1520,
          1409.9
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1474.6,
          1402.8
        ],
        [
          -1485.6,
          1404.7
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -734.2,
          1337.2
        ],
        [
          -755.9,
          1337.5
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -817.6,
          1412.3
        ],
        [
          -817.1,
          1403.3
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -816,
          1403.2
        ],
        [
          -816.7,
          1412.3
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -381.2,
          1239.5
        ],
        [
          -367.2,
          1195.1
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -380,
          636.3
        ],
        [
          -360,
          636.2
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -784.2,
          607.7
        ],
        [
          -762.5,
          608.8
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -579,
          720
        ],
        [
          -582,
          728.3
        ]
      ]
    },
    {
      "name": "Jalan Sultan Iskandar Muda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -581.2,
          719.2
        ],
        [
          -576.6,
          707.3
        ]
      ]
    },
    {
      "name": "Jalan Bumi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -462.9,
          629.8
        ],
        [
          -467.6,
          653.4
        ]
      ]
    },
    {
      "name": "Jalan Kyai Maja",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -352.6,
          638.1
        ],
        [
          -379.9,
          638.1
        ]
      ]
    },
    {
      "name": "Jalan Tol Ulujami–Serpong",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -1203.3,
          1234.1
        ],
        [
          -1212.9,
          1241.2
        ]
      ]
    },
    {
      "name": "Jalan Tol Lingkar Luar Jakarta",
      "type": "motorway",
      "width": 20,
      "points": [
        [
          -669.4,
          1281.7
        ],
        [
          -662.7,
          1289.8
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -382,
          1253
        ],
        [
          -381.2,
          1239.5
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -365.4,
          1195.6
        ],
        [
          -379.4,
          1236.2
        ]
      ]
    },
    {
      "name": "Jalan Raden Ajeng Kartini",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -443.6,
          1383.1
        ],
        [
          -466.3,
          1383.1
        ]
      ]
    },
    {
      "name": "Jalan Melawai Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -345.2,
          722.2
        ],
        [
          -325,
          722.2
        ]
      ]
    },
    {
      "name": "Jalan Pondok Pinang Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -674.7,
          968.9
        ],
        [
          -675.5,
          945.6
        ],
        [
          -669.1,
          933.6
        ],
        [
          -659.8,
          930.4
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -383.2,
          1284.7
        ],
        [
          -386.8,
          1305.7
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -384.7,
          1284.4
        ],
        [
          -382.3,
          1259.2
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -358.7,
          1164.6
        ],
        [
          -358.4,
          1120.2
        ]
      ]
    },
    {
      "name": "Jalan RS Fatmawati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -358.3,
          1089.3
        ],
        [
          -356.8,
          1120.3
        ]
      ]
    },
    {
      "name": "Jalan Tegal Rotan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1343,
          1241.5
        ],
        [
          -1353.9,
          1255.1
        ]
      ]
    },
    {
      "name": "Jalan Akses Bintaro Xchange",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1310.7,
          1274.5
        ],
        [
          -1314,
          1289.3
        ],
        [
          -1334.6,
          1309.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Sudirman",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1451.3,
          1190.5
        ],
        [
          -1466.8,
          1194
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Sudirman",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1451.5,
          1189.1
        ],
        [
          -1422.1,
          1183.6
        ]
      ]
    },
    {
      "name": "Jalan RC. Veteran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -806.8,
          1052.4
        ],
        [
          -814,
          1069
        ]
      ]
    },
    {
      "name": "Jalan RC. Veteran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -814.8,
          1068.5
        ],
        [
          -807.7,
          1052.3
        ]
      ]
    },
    {
      "name": "MH Thamrin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1410.3,
          1178.5
        ],
        [
          -1405.6,
          1167.6
        ]
      ]
    },
    {
      "name": "Jalan Bintaro Utama 1",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1029.6,
          1087.9
        ],
        [
          -1019.4,
          1091.1
        ]
      ]
    }
  ],
  "waterways": [
    {
      "name": "Pesanggrahan",
      "kind": "river",
      "width": 14,
      "points": [
        [
          -803.4,
          1270.5
        ],
        [
          -808.4,
          1261.8
        ],
        [
          -793.9,
          1253.1
        ],
        [
          -778.2,
          1230.3
        ],
        [
          -767.3,
          1226.6
        ],
        [
          -761.1,
          1231.4
        ],
        [
          -753.6,
          1226.8
        ],
        [
          -755.8,
          1221.9
        ],
        [
          -775.4,
          1210.3
        ],
        [
          -775.2,
          1203.8
        ],
        [
          -782.8,
          1194.3
        ],
        [
          -754.7,
          1177
        ],
        [
          -746.9,
          1180.2
        ],
        [
          -743.7,
          1178.4
        ],
        [
          -743.6,
          1169.7
        ],
        [
          -751.2,
          1155.6
        ],
        [
          -757.7,
          1150.1
        ],
        [
          -756.3,
          1141.9
        ],
        [
          -771.8,
          1129
        ],
        [
          -770.9,
          1123.1
        ],
        [
          -767.4,
          1117.7
        ],
        [
          -760.6,
          1115.5
        ],
        [
          -746.7,
          1124.7
        ],
        [
          -737.9,
          1123.7
        ],
        [
          -724.7,
          1093.8
        ],
        [
          -735,
          1083.2
        ],
        [
          -730.9,
          1066.1
        ],
        [
          -749.1,
          1058.7
        ],
        [
          -753.5,
          1051.9
        ],
        [
          -758.4,
          1032.6
        ],
        [
          -752.2,
          1022.5
        ],
        [
          -758.8,
          1007.5
        ],
        [
          -755.1,
          991.8
        ],
        [
          -746.7,
          983.8
        ],
        [
          -728.2,
          996.9
        ],
        [
          -727.6,
          986.8
        ],
        [
          -740.5,
          970
        ],
        [
          -738.8,
          966.6
        ],
        [
          -723,
          957.6
        ],
        [
          -715.8,
          965.4
        ],
        [
          -704.1,
          957
        ],
        [
          -709.6,
          937.8
        ],
        [
          -711.6,
          921.5
        ],
        [
          -709.5,
          912.6
        ],
        [
          -713.5,
          897.6
        ],
        [
          -723.3,
          893
        ],
        [
          -739.4,
          904.6
        ],
        [
          -746.2,
          896.2
        ],
        [
          -753.7,
          895.1
        ],
        [
          -756.5,
          891.3
        ],
        [
          -743.2,
          866.2
        ],
        [
          -729.6,
          868.7
        ],
        [
          -721.9,
          863.3
        ],
        [
          -718.9,
          858.1
        ],
        [
          -720.8,
          850
        ],
        [
          -740.8,
          846.8
        ],
        [
          -746.1,
          841.4
        ],
        [
          -760.2,
          842.2
        ],
        [
          -766.8,
          844.8
        ],
        [
          -772.2,
          855.6
        ],
        [
          -781.9,
          841.1
        ],
        [
          -777,
          823.9
        ],
        [
          -794.5,
          819.8
        ],
        [
          -802.3,
          812.7
        ],
        [
          -799.2,
          801.7
        ],
        [
          -788.8,
          796.1
        ],
        [
          -782.6,
          783.3
        ],
        [
          -790.6,
          773.1
        ],
        [
          -796.2,
          757.7
        ],
        [
          -783.4,
          743.2
        ],
        [
          -774.8,
          738.3
        ],
        [
          -762.6,
          719.7
        ],
        [
          -773.3,
          701.1
        ],
        [
          -772.4,
          689.8
        ],
        [
          -783.5,
          673.6
        ],
        [
          -809.9,
          661.1
        ],
        [
          -805.7,
          641.5
        ],
        [
          -799.1,
          638.9
        ],
        [
          -797.6,
          633.2
        ],
        [
          -805.3,
          622.5
        ],
        [
          -803.3,
          612.5
        ],
        [
          -807.3,
          612.3
        ],
        [
          -810.5,
          620.9
        ],
        [
          -817.7,
          623.3
        ],
        [
          -824.5,
          619.5
        ],
        [
          -825.2,
          601.2
        ],
        [
          -821.6,
          596.5
        ],
        [
          -817.1,
          591.1
        ],
        [
          -789.9,
          590.4
        ],
        [
          -786.5,
          573.6
        ],
        [
          -792.5,
          557.8
        ],
        [
          -800.3,
          549.6
        ],
        [
          -806.5,
          550.4
        ],
        [
          -811.7,
          564.4
        ],
        [
          -823.4,
          566.4
        ],
        [
          -830.7,
          541.8
        ],
        [
          -826.2,
          535
        ]
      ]
    },
    {
      "name": "Grogol",
      "kind": "river",
      "width": 12,
      "points": [
        [
          -534.1,
          941.6
        ],
        [
          -529.4,
          934.6
        ],
        [
          -537.6,
          928.1
        ],
        [
          -531.9,
          922.8
        ],
        [
          -529.2,
          911.5
        ],
        [
          -533.9,
          909.2
        ],
        [
          -532.6,
          903.1
        ],
        [
          -538.7,
          900.8
        ],
        [
          -534.1,
          881.9
        ]
      ]
    },
    {
      "name": "Kali Ciputat",
      "kind": "river",
      "width": 10,
      "points": [
        [
          -1123.4,
          1440.4
        ],
        [
          -1129.1,
          1427.9
        ],
        [
          -1159.1,
          1422.2
        ],
        [
          -1160.7,
          1415.8
        ],
        [
          -1171.3,
          1404.3
        ],
        [
          -1181.4,
          1403.8
        ],
        [
          -1186,
          1398.3
        ],
        [
          -1196,
          1399.5
        ],
        [
          -1201.7,
          1395.3
        ],
        [
          -1212.3,
          1394
        ],
        [
          -1215.8,
          1396
        ],
        [
          -1215.4,
          1402.8
        ],
        [
          -1220.2,
          1405.8
        ],
        [
          -1228.6,
          1402.2
        ],
        [
          -1224.4,
          1397.5
        ],
        [
          -1226.3,
          1393
        ],
        [
          -1237.2,
          1393.4
        ],
        [
          -1240.9,
          1390.2
        ],
        [
          -1247.1,
          1392
        ],
        [
          -1252,
          1388
        ],
        [
          -1255.1,
          1378.1
        ],
        [
          -1252.1,
          1364.8
        ],
        [
          -1261.6,
          1357.2
        ],
        [
          -1257.4,
          1347.4
        ],
        [
          -1268.6,
          1342.7
        ],
        [
          -1276.8,
          1329.6
        ],
        [
          -1288.9,
          1323.4
        ]
      ]
    },
    {
      "name": "Kali Ciputat",
      "kind": "canal",
      "width": 10,
      "points": [
        [
          -1110.8,
          1460
        ],
        [
          -1112.3,
          1451.7
        ],
        [
          -1123.4,
          1440.4
        ]
      ]
    },
    {
      "name": "Pesanggrahan",
      "kind": "river",
      "width": 14,
      "points": [
        [
          -734.3,
          1460
        ],
        [
          -736.1,
          1452.9
        ],
        [
          -738.8,
          1451.5
        ],
        [
          -746.4,
          1455.7
        ],
        [
          -750.3,
          1453.5
        ],
        [
          -750.2,
          1441.8
        ],
        [
          -744.7,
          1427.6
        ],
        [
          -752.3,
          1425.1
        ],
        [
          -763.9,
          1431
        ],
        [
          -772.6,
          1430.4
        ],
        [
          -779.3,
          1428.3
        ],
        [
          -787.3,
          1420.2
        ],
        [
          -772,
          1394.3
        ],
        [
          -782.4,
          1380.4
        ],
        [
          -773.2,
          1374.3
        ],
        [
          -776,
          1369.1
        ],
        [
          -788.8,
          1367
        ],
        [
          -796.6,
          1351.7
        ],
        [
          -797.4,
          1339.1
        ],
        [
          -802.9,
          1334.8
        ],
        [
          -788.1,
          1323.7
        ],
        [
          -796.9,
          1300.1
        ],
        [
          -795.6,
          1295.4
        ],
        [
          -787.7,
          1292.4
        ],
        [
          -777.4,
          1297.2
        ],
        [
          -776,
          1294.2
        ],
        [
          -785.2,
          1277.3
        ],
        [
          -803.4,
          1270.5
        ]
      ]
    },
    {
      "name": "Sodetan Kali Grogol",
      "kind": "river",
      "width": 8,
      "points": [
        [
          -535.2,
          942
        ],
        [
          -531.9,
          944.7
        ],
        [
          -534.2,
          978.6
        ],
        [
          -531.3,
          999.2
        ],
        [
          -517.8,
          1007.5
        ],
        [
          -513,
          1017.1
        ],
        [
          -463.3,
          1030.9
        ],
        [
          -448.4,
          1065.9
        ],
        [
          -444.9,
          1087.4
        ],
        [
          -445.4,
          1110.4
        ],
        [
          -470.3,
          1139.9
        ],
        [
          -471.2,
          1172
        ],
        [
          -462.6,
          1188.1
        ],
        [
          -461.2,
          1203.8
        ],
        [
          -465.4,
          1214.5
        ],
        [
          -464.2,
          1227.8
        ],
        [
          -488.3,
          1266
        ],
        [
          -496.1,
          1271.1
        ]
      ]
    },
    {
      "name": "Jelawe",
      "kind": "river",
      "width": 8,
      "points": [
        [
          -450.8,
          883
        ],
        [
          -441.9,
          868.2
        ],
        [
          -437.3,
          868.9
        ],
        [
          -432,
          862.3
        ],
        [
          -423.2,
          838.5
        ],
        [
          -416,
          831.3
        ],
        [
          -413,
          821.7
        ],
        [
          -417.6,
          820
        ],
        [
          -415.8,
          795.6
        ],
        [
          -406.8,
          743.4
        ],
        [
          -427.6,
          691.5
        ],
        [
          -430.2,
          666.4
        ]
      ]
    },
    {
      "name": "Kali Grogol",
      "kind": "river",
      "width": 12,
      "points": [
        [
          -493.2,
          820.8
        ],
        [
          -489.5,
          819.2
        ],
        [
          -484.1,
          807
        ],
        [
          -486.4,
          803.8
        ],
        [
          -481.1,
          796.6
        ],
        [
          -483.5,
          783.3
        ]
      ]
    },
    {
      "name": "Kali Grogol",
      "kind": "river",
      "width": 12,
      "points": [
        [
          -537.1,
          1460
        ],
        [
          -538.5,
          1457
        ],
        [
          -529.7,
          1441.2
        ],
        [
          -537.6,
          1430
        ],
        [
          -541,
          1414.8
        ],
        [
          -554.9,
          1404.8
        ],
        [
          -548.8,
          1376.1
        ]
      ]
    },
    {
      "name": "Kali Grogol",
      "kind": "river",
      "width": 12,
      "points": [
        [
          -536.8,
          627.4
        ],
        [
          -530.4,
          618.8
        ]
      ]
    },
    {
      "name": "Kali Grogol",
      "kind": "river",
      "width": 12,
      "points": [
        [
          -483.5,
          783.3
        ],
        [
          -488.7,
          778.7
        ],
        [
          -481.5,
          762.4
        ],
        [
          -486.2,
          757.2
        ],
        [
          -479.1,
          755.4
        ],
        [
          -481.1,
          748.9
        ],
        [
          -477.4,
          742.6
        ],
        [
          -484.7,
          742
        ],
        [
          -484.2,
          734.5
        ],
        [
          -498.7,
          710.2
        ],
        [
          -498.6,
          699.2
        ],
        [
          -509.7,
          698.8
        ],
        [
          -512.2,
          687.3
        ],
        [
          -520.5,
          687.2
        ],
        [
          -533.2,
          678.9
        ],
        [
          -538.9,
          678.5
        ],
        [
          -547.7,
          664.8
        ],
        [
          -546.3,
          656.9
        ],
        [
          -539.7,
          655.3
        ],
        [
          -539.7,
          640.1
        ],
        [
          -536.5,
          632.4
        ]
      ]
    },
    {
      "name": "Pesanggrahan",
      "kind": "river",
      "width": 14,
      "points": [
        [
          -750.4,
          984.6
        ],
        [
          -740.5,
          970
        ]
      ]
    },
    {
      "name": "Kali Grogol",
      "kind": "river",
      "width": 12,
      "points": [
        [
          -528.9,
          881.4
        ],
        [
          -518.5,
          880.1
        ]
      ]
    },
    {
      "name": "Kali Sekretaris",
      "kind": "river",
      "width": 10,
      "points": [
        [
          -657.4,
          615.1
        ],
        [
          -663,
          609.3
        ],
        [
          -664,
          601.9
        ]
      ]
    },
    {
      "name": "Kali Sekretaris",
      "kind": "river",
      "width": 10,
      "points": [
        [
          -651.8,
          631.4
        ],
        [
          -656.1,
          625
        ],
        [
          -656.7,
          616.9
        ]
      ]
    },
    {
      "name": "Jelawe",
      "kind": "river",
      "width": 8,
      "points": [
        [
          -430.5,
          662.5
        ],
        [
          -433.6,
          612
        ],
        [
          -429.8,
          605.1
        ],
        [
          -414.8,
          593.1
        ],
        [
          -414.2,
          535
        ]
      ]
    },
    {
      "name": "Kali Grogol",
      "kind": "river",
      "width": 12,
      "points": [
        [
          -543.5,
          1367.8
        ],
        [
          -526.6,
          1342.6
        ],
        [
          -529.3,
          1327
        ],
        [
          -534.9,
          1319.9
        ],
        [
          -496.1,
          1271.1
        ]
      ]
    },
    {
      "name": "Kali Grogol",
      "kind": "river",
      "width": 12,
      "points": [
        [
          -548.8,
          1376.1
        ],
        [
          -543.5,
          1367.8
        ]
      ]
    },
    {
      "name": "Kali Grogol",
      "kind": "river",
      "width": 12,
      "points": [
        [
          -517.5,
          878
        ],
        [
          -517.7,
          873.1
        ],
        [
          -522.2,
          872.2
        ],
        [
          -524.5,
          858.9
        ],
        [
          -518.7,
          836.8
        ],
        [
          -497,
          829.3
        ],
        [
          -493.3,
          821.6
        ]
      ]
    }
  ],
  "waterBodies": [
    {
      "name": "Situ Bungur",
      "kind": "lake",
      "points": [
        [
          -1175,
          1351
        ],
        [
          -1175,
          1351
        ],
        [
          -1170.8,
          1364
        ],
        [
          -1160.6,
          1367.1
        ],
        [
          -1147.1,
          1376.9
        ],
        [
          -1142,
          1376.4
        ],
        [
          -1139.9,
          1368
        ],
        [
          -1149.3,
          1363.7
        ],
        [
          -1150.6,
          1355.6
        ],
        [
          -1175,
          1351
        ]
      ]
    },
    {
      "name": "Situ Rompang",
      "kind": "lake",
      "points": [
        [
          -966.7,
          1417.2
        ],
        [
          -966.7,
          1417.2
        ],
        [
          -963.8,
          1422.7
        ],
        [
          -965.2,
          1429.6
        ],
        [
          -960.9,
          1436.5
        ],
        [
          -964.2,
          1443.1
        ],
        [
          -958.6,
          1438
        ],
        [
          -948.3,
          1436.9
        ],
        [
          -950.1,
          1422.2
        ],
        [
          -966.7,
          1417.2
        ]
      ]
    },
    {
      "name": "Situ Rawa Lindung",
      "kind": "lake",
      "points": [
        [
          -952.9,
          672.4
        ],
        [
          -949.1,
          678.3
        ],
        [
          -951.4,
          660.5
        ],
        [
          -954.2,
          660.2
        ],
        [
          -957.5,
          665.5
        ],
        [
          -963,
          666.8
        ],
        [
          -962.7,
          679.5
        ],
        [
          -949.1,
          679.2
        ],
        [
          -951.8,
          660.4
        ],
        [
          -952.9,
          672.4
        ]
      ]
    }
  ],
  "railways": [
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -1293.9,
          1306.8
        ],
        [
          -1234.5,
          1264.3
        ],
        [
          -1139.8,
          1187.9
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -551.3,
          554.1
        ],
        [
          -470.2,
          416.4
        ],
        [
          -430.9,
          324
        ],
        [
          -411.3,
          295.7
        ],
        [
          -387.3,
          272.8
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -1354.8,
          1350.1
        ],
        [
          -1318,
          1323.9
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -1140.1,
          1187.3
        ],
        [
          -1235.7,
          1264.6
        ],
        [
          -1295.1,
          1306.8
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -1318.3,
          1323.3
        ],
        [
          -1355.4,
          1349.6
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -1357.6,
          1351
        ],
        [
          -1374.4,
          1357.8
        ],
        [
          -1414.9,
          1366.7
        ],
        [
          -1461.4,
          1404.1
        ],
        [
          -1509.9,
          1418.9
        ],
        [
          -1520,
          1424
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -1520,
          1424.5
        ],
        [
          -1509.9,
          1419.3
        ],
        [
          -1463.1,
          1405.6
        ],
        [
          -1414.6,
          1367.1
        ],
        [
          -1357.3,
          1351.6
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -969.3,
          1033.2
        ],
        [
          -933.6,
          996.7
        ],
        [
          -883.7,
          959.1
        ],
        [
          -873.4,
          941.8
        ],
        [
          -859.3,
          890.2
        ],
        [
          -849.9,
          876.9
        ],
        [
          -823.5,
          860.6
        ],
        [
          -783.6,
          842.5
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -783.8,
          841.6
        ],
        [
          -824.9,
          860.7
        ],
        [
          -850.2,
          876.5
        ],
        [
          -859.7,
          890
        ],
        [
          -872.4,
          937.4
        ],
        [
          -882.9,
          957.1
        ],
        [
          -895.1,
          969.2
        ],
        [
          -933.7,
          996.2
        ],
        [
          -969.7,
          1032.7
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -387.4,
          271.9
        ],
        [
          -414.9,
          299
        ],
        [
          -431,
          322.5
        ],
        [
          -471.2,
          416.7
        ],
        [
          -544.2,
          541.1
        ]
      ]
    },
    {
      "name": "",
      "kind": "rail",
      "points": [
        [
          -568,
          593
        ],
        [
          -551.3,
          554.1
        ]
      ],
      "service": "siding"
    },
    {
      "name": "",
      "kind": "rail",
      "points": [
        [
          -573.2,
          608.2
        ],
        [
          -568,
          593
        ]
      ],
      "service": "siding"
    },
    {
      "name": "",
      "kind": "rail",
      "points": [
        [
          -578.2,
          619.8
        ],
        [
          -573.2,
          608.2
        ]
      ],
      "service": "siding"
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -778.6,
          840.6
        ],
        [
          -765.1,
          833.9
        ],
        [
          -737.9,
          812.3
        ],
        [
          -693.4,
          770.3
        ],
        [
          -594.1,
          650.9
        ],
        [
          -578.2,
          619.8
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -569.1,
          592.8
        ],
        [
          -574.2,
          607.9
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -605.5,
          664.1
        ],
        [
          -708.5,
          785.6
        ],
        [
          -761.4,
          830.2
        ],
        [
          -779.2,
          839.8
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -569.5,
          592.6
        ],
        [
          -574.7,
          607.6
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -1315.3,
          1321.9
        ],
        [
          -1296.4,
          1308.5
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -1296.1,
          1307.5
        ],
        [
          -1315.7,
          1321.4
        ]
      ]
    },
    {
      "name": "",
      "kind": "rail",
      "points": [
        [
          -544.2,
          541.1
        ],
        [
          -548.1,
          548.7
        ]
      ],
      "service": "crossover"
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -544.2,
          541.1
        ],
        [
          -560.8,
          569.7
        ],
        [
          -569.5,
          592.6
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -569.1,
          592.8
        ],
        [
          -551.3,
          554.1
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -574.7,
          607.6
        ],
        [
          -585.4,
          636.3
        ],
        [
          -605.5,
          664.1
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -578.2,
          619.8
        ],
        [
          -574.2,
          607.9
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -1097.5,
          1153.9
        ],
        [
          -1053.7,
          1118.6
        ],
        [
          -1026.4,
          1092.1
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -1026.8,
          1091.7
        ],
        [
          -1055.1,
          1119.2
        ],
        [
          -1097.9,
          1153.5
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -1097.9,
          1153.5
        ],
        [
          -1140.1,
          1187.3
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -1139.8,
          1187.9
        ],
        [
          -1097.5,
          1153.9
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -1023.3,
          1088.8
        ],
        [
          -971.3,
          1035.2
        ]
      ]
    },
    {
      "name": "Jalur Kereta Api Tanah Abang–Merak",
      "kind": "rail",
      "points": [
        [
          -971,
          1034.1
        ],
        [
          -1023.7,
          1088.5
        ]
      ]
    }
  ]
};
