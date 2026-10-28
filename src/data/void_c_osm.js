/**
 * Void C (Meruya-Kembangan Selatan-Joglo-Kreo) road geometry derived from OpenStreetMap.
 * Source: OpenStreetMap contributors, ODbL. Retrieved 2026-10-28 via Overpass API.
 * Coordinates are stored directly in scene units using the unscaled GPS projection:
 *   x = (lng - 106.823048) * 14100
 *   z = (lat + 6.194957) * -14180
 * Unscaled keeps the six Void C anchors aligned with their real GPS positions.
 * Corridors already built by earlier stages are excluded to avoid duplicate slabs.
 * Regenerate with the extraction notes in docs/ROADMAP.md.
 */
export const VOID_C_OSM = {
  "meta": {
    "source": "OpenStreetMap contributors (ODbL)",
    "license": "ODbL 1.0",
    "retrieved": "2026-10-28",
    "bbox": {
      "south": -6.245,
      "west": 106.705,
      "north": -6.145,
      "east": 106.785
    },
    "clipBox": {
      "minX": -1440,
      "maxX": -860,
      "minZ": -560,
      "maxZ": 580
    },
    "projection": "projectGpsToScene",
    "projectionConstants": {
      "originLng": 106.823048,
      "originLat": -6.194957,
      "scaleX": 14100,
      "scaleZ": 14180
    },
    "simplification": 2.5,
    "roadCount": 185,
    "pointCount": 478,
    "note": "Unscaled GPS projection keeps all Void C anchors intact. Duplicate corridors owned by existing builders (Daan Mogot, Jalan Panjang, Pos Pengumben, Puri Indah, Kedoya, JORR W1, Duri Kosambi, Kembangan Raya/Utara/Baru/Utama) are excluded."
  },
  "roads": [
    {
      "name": "Jalan Al Mubarok Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 158811572,
      "points": [
        [
          -1303.1,
          360.5
        ],
        [
          -1311.4,
          341.2
        ]
      ]
    },
    {
      "name": "Jalan AMD V",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30991675,
      "points": [
        [
          -1036.6,
          499.7
        ],
        [
          -1000.3,
          501.1
        ]
      ]
    },
    {
      "name": "Jalan Anggrek Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 113924552,
      "points": [
        [
          -976.9,
          513.3
        ],
        [
          -925.9,
          514.6
        ]
      ]
    },
    {
      "name": "Jalan Aries Utama I",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30970494,
      "points": [
        [
          -1022.1,
          1.6
        ],
        [
          -1061.5,
          3
        ]
      ]
    },
    {
      "name": "Jalan Aries Utama I",
      "type": "tertiary",
      "width": 11,
      "osmWay": 509714924,
      "points": [
        [
          -1063.6,
          3.4
        ],
        [
          -1084,
          5.4
        ]
      ]
    },
    {
      "name": "Jalan Aries Utama III",
      "type": "tertiary",
      "width": 11,
      "osmWay": 1095026213,
      "points": [
        [
          -1091.1,
          -35.5
        ],
        [
          -1087.6,
          5.6
        ]
      ]
    },
    {
      "name": "Jalan Aries Utama IV",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30371829,
      "points": [
        [
          -1091.1,
          -35.5
        ],
        [
          -1122.4,
          -32.7
        ]
      ]
    },
    {
      "name": "Jalan Arimbi",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30876720,
      "points": [
        [
          -1254.2,
          -376.7
        ],
        [
          -1237.1,
          -378.1
        ],
        [
          -1235.1,
          -370.8
        ]
      ]
    },
    {
      "name": "Jalan Arimbi",
      "type": "tertiary",
      "width": 11,
      "osmWay": 548362406,
      "points": [
        [
          -1235.1,
          -370.8
        ],
        [
          -1220,
          -373.1
        ]
      ]
    },
    {
      "name": "Jalan Arimbi",
      "type": "tertiary",
      "width": 11,
      "osmWay": 548362410,
      "points": [
        [
          -1220,
          -373.1
        ],
        [
          -1200.6,
          -376
        ]
      ]
    },
    {
      "name": "Jalan Basmol Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30734909,
      "points": [
        [
          -990.2,
          -492.3
        ],
        [
          -1043.2,
          -422.7
        ]
      ]
    },
    {
      "name": "Jalan Basoka Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 499781133,
      "points": [
        [
          -1326.4,
          415.4
        ],
        [
          -1437.7,
          414.7
        ]
      ]
    },
    {
      "name": "Jalan Belimbing",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30842779,
      "points": [
        [
          -1205.6,
          -493.1
        ],
        [
          -1196.4,
          -450.5
        ]
      ]
    },
    {
      "name": "Jalan Bojong Indah Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30842776,
      "points": [
        [
          -1205.6,
          -493.1
        ],
        [
          -1237.4,
          -481.5
        ],
        [
          -1277.9,
          -474.1
        ]
      ]
    },
    {
      "name": "Jalan Bojong Indah Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30876482,
      "points": [
        [
          -1264,
          -454
        ],
        [
          -1261.9,
          -441.9
        ],
        [
          -1234.6,
          -435.1
        ]
      ]
    },
    {
      "name": "Jalan Bojong Indah Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 675930665,
      "points": [
        [
          -1283.4,
          -477.7
        ],
        [
          -1271.7,
          -468.5
        ],
        [
          -1264.4,
          -454.8
        ]
      ]
    },
    {
      "name": "Jalan Bojong Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 192009721,
      "points": [
        [
          -1234.6,
          -435.1
        ],
        [
          -1240.2,
          -413.1
        ],
        [
          -1254.2,
          -386.9
        ],
        [
          -1255.6,
          -354.5
        ]
      ]
    },
    {
      "name": "Jalan Bojong Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 343574892,
      "points": [
        [
          -1336.1,
          -342.1
        ],
        [
          -1295.2,
          -335.5
        ],
        [
          -1275.3,
          -327
        ],
        [
          -1261.1,
          -351.3
        ],
        [
          -1255.6,
          -354.5
        ]
      ]
    },
    {
      "name": "Jalan Bojong Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 513554789,
      "points": [
        [
          -1315.7,
          -504.4
        ],
        [
          -1305,
          -489.7
        ],
        [
          -1284.6,
          -478.7
        ]
      ]
    },
    {
      "name": "Jalan Chairil Anwar",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30994194,
      "points": [
        [
          -1201.1,
          431.7
        ],
        [
          -1205.4,
          487.7
        ]
      ]
    },
    {
      "name": "Jalan Chairil Anwar",
      "type": "tertiary",
      "width": 11,
      "osmWay": 31893547,
      "points": [
        [
          -1205.4,
          487.7
        ],
        [
          -1205.2,
          550.5
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "osmWay": 544376537,
      "points": [
        [
          -1348.6,
          516.2
        ],
        [
          -1195.7,
          552.8
        ],
        [
          -1180.3,
          568.7
        ],
        [
          -1138.3,
          578.8
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "osmWay": 544376541,
      "points": [
        [
          -1142.8,
          576.9
        ],
        [
          -1179.6,
          569.7
        ],
        [
          -1195.8,
          553.8
        ],
        [
          -1341.7,
          519.2
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "osmWay": 668584892,
      "points": [
        [
          -1380.1,
          499.3
        ],
        [
          -1370.8,
          502.7
        ],
        [
          -1366,
          510.4
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "osmWay": 749988676,
      "points": [
        [
          -1380.8,
          517.4
        ],
        [
          -1388.7,
          502.8
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "osmWay": 770403288,
      "points": [
        [
          -1398.1,
          493.2
        ],
        [
          -1384.6,
          500.3
        ]
      ]
    },
    {
      "name": "Jalan Ciledug Raya",
      "type": "primary",
      "width": 18,
      "osmWay": 1420303815,
      "points": [
        [
          -1343.7,
          518.7
        ],
        [
          -1355.7,
          515.9
        ],
        [
          -1375.8,
          518.6
        ]
      ]
    },
    {
      "name": "Jalan Dokter Cipto Mangunkusumo",
      "type": "secondary",
      "width": 14,
      "osmWay": 159954919,
      "points": [
        [
          -1431.3,
          487.1
        ],
        [
          -1437.6,
          499.7
        ]
      ]
    },
    {
      "name": "Jalan Flamboyan",
      "type": "tertiary",
      "width": 11,
      "osmWay": 513554641,
      "points": [
        [
          -1055.1,
          -429.6
        ],
        [
          -1068.9,
          -432.9
        ]
      ]
    },
    {
      "name": "Jalan Guru Ma'mun",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30876481,
      "points": [
        [
          -1298.3,
          -559.2
        ],
        [
          -1301.7,
          -515.6
        ],
        [
          -1342.7,
          -485.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Juhri",
      "type": "tertiary",
      "width": 11,
      "osmWay": 499217347,
      "points": [
        [
          -1256.1,
          207.6
        ],
        [
          -1285.4,
          220
        ],
        [
          -1296.8,
          221
        ]
      ]
    },
    {
      "name": "Jalan Haji Kelik",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30968018,
      "points": [
        [
          -879.7,
          203.6
        ],
        [
          -860.2,
          199.8
        ]
      ]
    },
    {
      "name": "Jalan Haji Kelik",
      "type": "tertiary",
      "width": 11,
      "osmWay": 500312626,
      "points": [
        [
          -904.1,
          206.9
        ],
        [
          -890.7,
          208.3
        ],
        [
          -879.7,
          203.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Mochtar Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 354984382,
      "points": [
        [
          -1094.1,
          523.1
        ],
        [
          -1106.8,
          528.7
        ],
        [
          -1103,
          550
        ],
        [
          -1110.1,
          570.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Mochtar Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 530470845,
      "points": [
        [
          -1201.1,
          431.7
        ],
        [
          -1176,
          430.9
        ],
        [
          -1173.2,
          442.6
        ],
        [
          -1164.2,
          443
        ]
      ]
    },
    {
      "name": "Jalan Haji Muchtar",
      "type": "tertiary",
      "width": 11,
      "osmWay": 1101274721,
      "points": [
        [
          -1206.7,
          356.1
        ],
        [
          -1208.9,
          396
        ],
        [
          -1201.1,
          431.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Oemar Said Cokroaminoto",
      "type": "primary",
      "width": 18,
      "osmWay": 590025715,
      "points": [
        [
          -1436.8,
          485.3
        ],
        [
          -1406,
          491.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Sa'aba",
      "type": "tertiary",
      "width": 11,
      "osmWay": 352024478,
      "points": [
        [
          -1203.2,
          281.6
        ],
        [
          -1283.4,
          284.3
        ],
        [
          -1326.4,
          289.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Sulaiman",
      "type": "tertiary",
      "width": 11,
      "osmWay": 1213398776,
      "points": [
        [
          -1091.6,
          499.1
        ],
        [
          -1093.8,
          520.6
        ]
      ]
    },
    {
      "name": "Jalan Jagung Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 512732898,
      "points": [
        [
          -1205.7,
          -413.3
        ],
        [
          -1210.8,
          -448.4
        ]
      ]
    },
    {
      "name": "Jalan Jalur 20",
      "type": "tertiary",
      "width": 11,
      "osmWay": 573380245,
      "points": [
        [
          -1357.4,
          76.3
        ],
        [
          -1350.3,
          66.6
        ]
      ]
    },
    {
      "name": "Jalan Jeruk Joglo Timur",
      "type": "residential",
      "width": 8,
      "osmWay": 499819138,
      "points": [
        [
          -989.4,
          140.4
        ],
        [
          -929.8,
          237.3
        ]
      ]
    },
    {
      "name": "Jalan Jeruk Joglo Timur",
      "type": "residential",
      "width": 8,
      "osmWay": 499819145,
      "points": [
        [
          -1015.7,
          67.9
        ],
        [
          -1016,
          97.3
        ]
      ]
    },
    {
      "name": "Jalan Jeruk Joglo Timur",
      "type": "residential",
      "width": 8,
      "osmWay": 500346338,
      "points": [
        [
          -928.8,
          238.8
        ],
        [
          -916.4,
          259.4
        ],
        [
          -917.3,
          324.1
        ]
      ]
    },
    {
      "name": "Jalan Jeruk Joglo Timur",
      "type": "residential",
      "width": 8,
      "osmWay": 772091493,
      "points": [
        [
          -1016,
          97.3
        ],
        [
          -991.3,
          137.4
        ]
      ]
    },
    {
      "name": "Jalan Joglo Baru",
      "type": "tertiary",
      "width": 11,
      "osmWay": 158811595,
      "points": [
        [
          -1437.8,
          322.6
        ],
        [
          -1426.9,
          328.2
        ],
        [
          -1432.3,
          364.8
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 253917855,
      "points": [
        [
          -1060.6,
          320.6
        ],
        [
          -1088.9,
          326.6
        ],
        [
          -1153.2,
          360.4
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 254281024,
      "points": [
        [
          -1018,
          325.2
        ],
        [
          -993.1,
          332.5
        ],
        [
          -956.2,
          334
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 254281027,
      "points": [
        [
          -1147.6,
          355.9
        ],
        [
          -1085.2,
          322.6
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 356824934,
      "points": [
        [
          -1439.7,
          396.4
        ],
        [
          -1433.7,
          365.3
        ],
        [
          -1403.8,
          360.9
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 356824945,
      "points": [
        [
          -1315.6,
          341.3
        ],
        [
          -1284,
          340.1
        ],
        [
          -1252.9,
          354.2
        ],
        [
          -1206.7,
          356.1
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 590912074,
      "points": [
        [
          -956.2,
          334
        ],
        [
          -920.3,
          324.9
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 668588299,
      "points": [
        [
          -1344.8,
          342.4
        ],
        [
          -1326.6,
          341.8
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 668595022,
      "points": [
        [
          -1395,
          360.5
        ],
        [
          -1368.7,
          352.5
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 684720769,
      "points": [
        [
          -918.4,
          324.4
        ],
        [
          -884.9,
          318.4
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 749660069,
      "points": [
        [
          -1079.3,
          321.4
        ],
        [
          -1060.6,
          318.6
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 760438386,
      "points": [
        [
          -924.6,
          327.5
        ],
        [
          -947.7,
          335.3
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 765599137,
      "points": [
        [
          -1049.6,
          316.9
        ],
        [
          -1027.2,
          322.5
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1094339339,
      "points": [
        [
          -1178.8,
          359.1
        ],
        [
          -1206.7,
          356.1
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1298669822,
      "points": [
        [
          -1161,
          361.2
        ],
        [
          -1178.8,
          359.1
        ]
      ]
    },
    {
      "name": "Jalan Joglo Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1298669825,
      "points": [
        [
          -1178.9,
          357.6
        ],
        [
          -1157.7,
          359.5
        ],
        [
          -1147.6,
          355.9
        ]
      ]
    },
    {
      "name": "Jalan K. Haji Ahmad Dahlan",
      "type": "secondary",
      "width": 14,
      "osmWay": 675914018,
      "points": [
        [
          -1438.1,
          -217.5
        ],
        [
          -1418.3,
          -239.6
        ]
      ]
    },
    {
      "name": "Jalan Kacang Tanah",
      "type": "tertiary",
      "width": 11,
      "osmWay": 35096798,
      "points": [
        [
          -1123.8,
          -418.6
        ],
        [
          -1148.1,
          -415.1
        ]
      ]
    },
    {
      "name": "Jalan Kacang Tanah Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30876826,
      "points": [
        [
          -1076.1,
          -426.8
        ],
        [
          -1123.8,
          -418.6
        ]
      ]
    },
    {
      "name": "Jalan Karta Utama",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30952908,
      "points": [
        [
          -865.3,
          223
        ],
        [
          -865.9,
          250.4
        ]
      ]
    },
    {
      "name": "Jalan Karta Utama",
      "type": "tertiary",
      "width": 11,
      "osmWay": 500300315,
      "points": [
        [
          -865.8,
          202.2
        ],
        [
          -866.5,
          222.9
        ]
      ]
    },
    {
      "name": "Jalan Karya Utama",
      "type": "tertiary",
      "width": 11,
      "osmWay": 500299488,
      "points": [
        [
          -865.9,
          250.4
        ],
        [
          -860.1,
          266.1
        ]
      ]
    },
    {
      "name": "Jalan Kembang Kencana",
      "type": "primary",
      "width": 18,
      "osmWay": 185526827,
      "points": [
        [
          -1118.6,
          -15.6
        ],
        [
          -1112.6,
          4.1
        ],
        [
          -1110.5,
          35.4
        ]
      ]
    },
    {
      "name": "Jalan Kembang Kencana",
      "type": "primary",
      "width": 18,
      "osmWay": 972785797,
      "points": [
        [
          -1123.2,
          -37.9
        ],
        [
          -1123.3,
          -44.9
        ],
        [
          -1133.4,
          -46.1
        ]
      ]
    },
    {
      "name": "Jalan Kembang Kencana",
      "type": "primary",
      "width": 18,
      "osmWay": 1086702499,
      "points": [
        [
          -1143,
          -44.5
        ],
        [
          -1143.8,
          -34.6
        ],
        [
          -1137.1,
          -35.4
        ]
      ]
    },
    {
      "name": "Jalan Kembang Kerep",
      "type": "primary",
      "width": 18,
      "osmWay": 30880122,
      "points": [
        [
          -1164.2,
          -56.6
        ],
        [
          -1163.2,
          -84.6
        ],
        [
          -1142.3,
          -86.5
        ]
      ]
    },
    {
      "name": "Jalan Kembang Kerep",
      "type": "primary",
      "width": 18,
      "osmWay": 185526833,
      "points": [
        [
          -1135.1,
          -23.3
        ],
        [
          -1137.7,
          -43.7
        ]
      ]
    },
    {
      "name": "Jalan Kembang Kerep",
      "type": "primary",
      "width": 18,
      "osmWay": 749674287,
      "points": [
        [
          -1139,
          38.6
        ],
        [
          -1135.1,
          -5.4
        ]
      ]
    },
    {
      "name": "Jalan Kembang Kerep",
      "type": "primary",
      "width": 18,
      "osmWay": 1095025111,
      "points": [
        [
          -1135.1,
          -5.4
        ],
        [
          -1135.1,
          -23.3
        ]
      ]
    },
    {
      "name": "Jalan Kembang Wangi Timur",
      "type": "secondary",
      "width": 14,
      "osmWay": 494160896,
      "points": [
        [
          -1167.7,
          -143.6
        ],
        [
          -1166.9,
          -118.8
        ],
        [
          -1170.7,
          -116.8
        ]
      ]
    },
    {
      "name": "Jalan Kembang Wangi Timur",
      "type": "secondary",
      "width": 14,
      "osmWay": 529412708,
      "points": [
        [
          -1165.2,
          -141
        ],
        [
          -1163.7,
          -118.2
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Barat",
      "type": "primary",
      "width": 18,
      "osmWay": 185526835,
      "points": [
        [
          -1138.1,
          -52.8
        ],
        [
          -1137.1,
          -83.5
        ],
        [
          -1132.8,
          -89.3
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Barat",
      "type": "primary",
      "width": 18,
      "osmWay": 185526836,
      "points": [
        [
          -1137,
          -71.4
        ],
        [
          -1136.6,
          -53.2
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Barat",
      "type": "primary",
      "width": 18,
      "osmWay": 192666382,
      "points": [
        [
          -1127.3,
          -110.5
        ],
        [
          -1127.3,
          -95.6
        ],
        [
          -1134.5,
          -84.7
        ]
      ]
    },
    {
      "name": "Jalan Komplek Dki Joglo",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30994321,
      "points": [
        [
          -1208.9,
          396
        ],
        [
          -1257.8,
          398.6
        ]
      ]
    },
    {
      "name": "Jalan Kostrad Pusri",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30991601,
      "points": [
        [
          -928,
          576.2
        ],
        [
          -925.9,
          480.6
        ]
      ]
    },
    {
      "name": "Jalan Manggis Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 35096799,
      "points": [
        [
          -1196.4,
          -450.5
        ],
        [
          -1154.8,
          -456.5
        ]
      ]
    },
    {
      "name": "Jalan Manggis Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 1112303010,
      "points": [
        [
          -1210.8,
          -448.4
        ],
        [
          -1196.4,
          -450.5
        ]
      ]
    },
    {
      "name": "Jalan Masjid As Salam",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30994343,
      "points": [
        [
          -1327,
          407.2
        ],
        [
          -1302.6,
          404.9
        ]
      ]
    },
    {
      "name": "Jalan Masjid As Salam",
      "type": "tertiary",
      "width": 11,
      "osmWay": 1112329127,
      "points": [
        [
          -1302.6,
          404.9
        ],
        [
          -1283.1,
          403.4
        ]
      ]
    },
    {
      "name": "Jalan Masjid Darul Falah",
      "type": "tertiary",
      "width": 11,
      "osmWay": 319655737,
      "points": [
        [
          -1010.8,
          574.9
        ],
        [
          -1005.9,
          536.2
        ]
      ]
    },
    {
      "name": "Jalan Masjid Darul Fallah",
      "type": "tertiary",
      "width": 11,
      "osmWay": 698152766,
      "points": [
        [
          -979.7,
          509.4
        ],
        [
          -995.4,
          486.6
        ]
      ]
    },
    {
      "name": "Jalan Masjid Darul Fallah",
      "type": "tertiary",
      "width": 11,
      "osmWay": 834357221,
      "points": [
        [
          -995.4,
          486.6
        ],
        [
          -997,
          459.7
        ]
      ]
    },
    {
      "name": "Jalan Masjid Nurul Fallah",
      "type": "tertiary",
      "width": 11,
      "osmWay": 516546246,
      "points": [
        [
          -997,
          459.7
        ],
        [
          -989.6,
          456.3
        ],
        [
          -989.1,
          446.7
        ]
      ]
    },
    {
      "name": "Jalan Masjid Nurul Fallah",
      "type": "tertiary",
      "width": 11,
      "osmWay": 686646185,
      "points": [
        [
          -1005.9,
          536.2
        ],
        [
          -1009,
          534.6
        ],
        [
          -1008.6,
          523.5
        ],
        [
          -1002.1,
          522.7
        ],
        [
          -1001,
          512.5
        ]
      ]
    },
    {
      "name": "Jalan Masjid Nurul Fallah",
      "type": "tertiary",
      "width": 11,
      "osmWay": 686650492,
      "points": [
        [
          -1001,
          512.5
        ],
        [
          -998.9,
          493
        ],
        [
          -985.4,
          512.2
        ],
        [
          -979.7,
          509.4
        ]
      ]
    },
    {
      "name": "Jalan Merpati",
      "type": "tertiary",
      "width": 11,
      "osmWay": 31943761,
      "points": [
        [
          -1298.3,
          212
        ],
        [
          -1302.6,
          185.4
        ]
      ]
    },
    {
      "name": "Jalan Merpati",
      "type": "tertiary",
      "width": 11,
      "osmWay": 158813394,
      "points": [
        [
          -1295.8,
          246.9
        ],
        [
          -1298.3,
          212
        ]
      ]
    },
    {
      "name": "Jalan Merpati",
      "type": "tertiary",
      "width": 11,
      "osmWay": 352024479,
      "points": [
        [
          -1283.4,
          284.3
        ],
        [
          -1295.8,
          246.9
        ]
      ]
    },
    {
      "name": "Jalan Meruya Ilir",
      "type": "primary",
      "width": 18,
      "osmWay": 185526807,
      "points": [
        [
          -1111.1,
          36.4
        ],
        [
          -1136.3,
          42.3
        ]
      ]
    },
    {
      "name": "Jalan Meruya Ilir",
      "type": "primary",
      "width": 18,
      "osmWay": 240654733,
      "points": [
        [
          -942.9,
          24.8
        ],
        [
          -870.9,
          57.5
        ],
        [
          -863,
          56.7
        ]
      ]
    },
    {
      "name": "Jalan Meruya Ilir",
      "type": "primary",
      "width": 18,
      "osmWay": 355247406,
      "points": [
        [
          -953.2,
          25.4
        ],
        [
          -985.5,
          36.4
        ],
        [
          -1057.4,
          34.2
        ]
      ]
    },
    {
      "name": "Jalan Meruya Ilir",
      "type": "primary",
      "width": 18,
      "osmWay": 499819114,
      "points": [
        [
          -1084.1,
          37
        ],
        [
          -1111.1,
          36.4
        ]
      ]
    },
    {
      "name": "Jalan Meruya Ilir",
      "type": "primary",
      "width": 18,
      "osmWay": 569799799,
      "points": [
        [
          -869.6,
          59.8
        ],
        [
          -923.1,
          32
        ],
        [
          -942.7,
          25.7
        ]
      ]
    },
    {
      "name": "Jalan Meruya Ilir",
      "type": "primary",
      "width": 18,
      "osmWay": 1096421245,
      "points": [
        [
          -1082.6,
          35.7
        ],
        [
          -1065.1,
          34.2
        ]
      ]
    },
    {
      "name": "Jalan Meruya Selatan",
      "type": "secondary",
      "width": 14,
      "osmWay": 28819261,
      "points": [
        [
          -1202,
          243.2
        ],
        [
          -1208.6,
          321.7
        ],
        [
          -1206.9,
          350.5
        ]
      ]
    },
    {
      "name": "Jalan Meruya Selatan",
      "type": "primary",
      "width": 18,
      "osmWay": 30880218,
      "points": [
        [
          -1144.9,
          55.9
        ],
        [
          -1158,
          82
        ],
        [
          -1198.3,
          130.6
        ]
      ]
    },
    {
      "name": "Jalan Meruya Selatan",
      "type": "primary",
      "width": 18,
      "osmWay": 254282286,
      "points": [
        [
          -1203.6,
          141.6
        ],
        [
          -1216.9,
          115.4
        ]
      ]
    },
    {
      "name": "Jalan Meruya Selatan",
      "type": "primary",
      "width": 18,
      "osmWay": 496254102,
      "points": [
        [
          -1203.8,
          129.2
        ],
        [
          -1196.1,
          143.9
        ]
      ]
    },
    {
      "name": "Jalan Meruya Selatan",
      "type": "primary",
      "width": 18,
      "osmWay": 589733008,
      "points": [
        [
          -1196.1,
          143.9
        ],
        [
          -1187.7,
          159.5
        ]
      ]
    },
    {
      "name": "Jalan Meruya Selatan",
      "type": "primary",
      "width": 18,
      "osmWay": 589733009,
      "points": [
        [
          -1211.4,
          113
        ],
        [
          -1203.8,
          129.2
        ]
      ]
    },
    {
      "name": "Jalan Meruya Selatan",
      "type": "primary",
      "width": 18,
      "osmWay": 589733010,
      "points": [
        [
          -1193,
          160.7
        ],
        [
          -1203.6,
          141.6
        ]
      ]
    },
    {
      "name": "Jalan Meruya Utara",
      "type": "secondary",
      "width": 14,
      "osmWay": 185526805,
      "points": [
        [
          -1178,
          53.4
        ],
        [
          -1192.9,
          52.5
        ],
        [
          -1232.5,
          36.4
        ],
        [
          -1245.5,
          37.2
        ]
      ]
    },
    {
      "name": "Jalan Meruya Utara",
      "type": "secondary",
      "width": 14,
      "osmWay": 191101337,
      "points": [
        [
          -1332.9,
          -6.9
        ],
        [
          -1340.4,
          -16.1
        ]
      ]
    },
    {
      "name": "Jalan Meruya Utara",
      "type": "secondary",
      "width": 14,
      "osmWay": 681518908,
      "points": [
        [
          -1144.5,
          54
        ],
        [
          -1176.2,
          53.4
        ]
      ]
    },
    {
      "name": "Jalan Mochtar Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30994182,
      "points": [
        [
          -1164.2,
          443
        ],
        [
          -1120.8,
          442.3
        ],
        [
          -1091.9,
          437.1
        ]
      ]
    },
    {
      "name": "Jalan Mochtar Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 516546165,
      "points": [
        [
          -1067,
          433.3
        ],
        [
          -1064.6,
          444.4
        ],
        [
          -1069.2,
          462.5
        ],
        [
          -1080.1,
          489.9
        ],
        [
          -1083.4,
          490
        ]
      ]
    },
    {
      "name": "Jalan Mochtar Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 1213159800,
      "points": [
        [
          -1091.9,
          437.1
        ],
        [
          -1067,
          433.3
        ]
      ]
    },
    {
      "name": "Jalan Murni",
      "type": "tertiary",
      "width": 11,
      "osmWay": 354271231,
      "points": [
        [
          -1326.4,
          289.7
        ],
        [
          -1315.6,
          341.3
        ]
      ]
    },
    {
      "name": "Jalan Pakis",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30842767,
      "points": [
        [
          -1153.2,
          -436.6
        ],
        [
          -1156.5,
          -456.2
        ]
      ]
    },
    {
      "name": "Jalan Palem Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 113924546,
      "points": [
        [
          -925.9,
          480.6
        ],
        [
          -924.2,
          445.4
        ]
      ]
    },
    {
      "name": "Jalan Palem Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 1101190966,
      "points": [
        [
          -924.2,
          445.4
        ],
        [
          -920.3,
          444.8
        ],
        [
          -919.8,
          427.9
        ],
        [
          -911.7,
          428
        ],
        [
          -911.6,
          408.5
        ]
      ]
    },
    {
      "name": "Jalan Palem V",
      "type": "tertiary",
      "width": 11,
      "osmWay": 113925772,
      "points": [
        [
          -964.5,
          442.3
        ],
        [
          -924.2,
          445.4
        ]
      ]
    },
    {
      "name": "Jalan Palem V",
      "type": "tertiary",
      "width": 11,
      "osmWay": 517851047,
      "points": [
        [
          -989.1,
          446.7
        ],
        [
          -972.1,
          446.8
        ],
        [
          -972,
          442.3
        ],
        [
          -967.1,
          442.4
        ]
      ]
    },
    {
      "name": "Jalan Palm VII",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30991603,
      "points": [
        [
          -925.9,
          480.6
        ],
        [
          -913,
          479.6
        ],
        [
          -907.9,
          444.9
        ],
        [
          -911.7,
          442.6
        ],
        [
          -911.7,
          428
        ]
      ]
    },
    {
      "name": "Jalan Pejuangan Raya",
      "type": "primary",
      "width": 18,
      "osmWay": 688941348,
      "points": [
        [
          -926.1,
          -57.5
        ],
        [
          -868.4,
          -63.7
        ]
      ]
    },
    {
      "name": "Jalan Pejuangan Raya",
      "type": "primary",
      "width": 18,
      "osmWay": 688941350,
      "points": [
        [
          -862.4,
          -63.3
        ],
        [
          -926.1,
          -56.4
        ]
      ]
    },
    {
      "name": "Jalan Penyelesaian Tomang IV",
      "type": "tertiary",
      "width": 11,
      "osmWay": 590383849,
      "points": [
        [
          -1357.4,
          76.3
        ],
        [
          -1402.5,
          42.9
        ]
      ]
    },
    {
      "name": "Jalan Permata Meruya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30880381,
      "points": [
        [
          -1208.2,
          -43.3
        ],
        [
          -1209.2,
          -2.1
        ]
      ]
    },
    {
      "name": "Jalan Permata Meruya 1",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30880407,
      "points": [
        [
          -1177.9,
          52.4
        ],
        [
          -1177,
          0.7
        ]
      ]
    },
    {
      "name": "Jalan Permata Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30880377,
      "points": [
        [
          -1209.2,
          -2.1
        ],
        [
          -1175.1,
          -1.3
        ]
      ]
    },
    {
      "name": "Jalan Permata Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 1303365908,
      "points": [
        [
          -1145.7,
          1.6
        ],
        [
          -1177,
          0.7
        ]
      ]
    },
    {
      "name": "Jalan Pesanggrahan",
      "type": "secondary",
      "width": 14,
      "osmWay": 30811432,
      "points": [
        [
          -971.8,
          -144.5
        ],
        [
          -953.8,
          -112.4
        ],
        [
          -947.8,
          -81.5
        ]
      ]
    },
    {
      "name": "Jalan Pesanggrahan",
      "type": "secondary",
      "width": 14,
      "osmWay": 185523232,
      "points": [
        [
          -951.2,
          -40.6
        ],
        [
          -948.3,
          -76.4
        ]
      ]
    },
    {
      "name": "Jalan Pesanggrahan",
      "type": "secondary",
      "width": 14,
      "osmWay": 185523233,
      "points": [
        [
          -947.8,
          -81.5
        ],
        [
          -950.1,
          -40.6
        ]
      ]
    },
    {
      "name": "Jalan Pesanggrahan",
      "type": "secondary",
      "width": 14,
      "osmWay": 240659737,
      "points": [
        [
          -950.4,
          -37.2
        ],
        [
          -942.9,
          24.8
        ]
      ]
    },
    {
      "name": "Jalan Pesanggrahan",
      "type": "secondary",
      "width": 14,
      "osmWay": 240692395,
      "points": [
        [
          -948.3,
          -76.4
        ],
        [
          -957.1,
          -115.4
        ],
        [
          -974.4,
          -143.3
        ]
      ]
    },
    {
      "name": "Jalan Pesanggrahan Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 432989865,
      "points": [
        [
          -962.1,
          -150.1
        ],
        [
          -961.4,
          -128.6
        ]
      ]
    },
    {
      "name": "Jalan Pilar Raya",
      "type": "unclassified",
      "width": 9,
      "osmWay": 432984614,
      "points": [
        [
          -868.9,
          -160.9
        ],
        [
          -897.8,
          -163.6
        ],
        [
          -900.7,
          -170.7
        ],
        [
          -917.4,
          -170.9
        ]
      ]
    },
    {
      "name": "Jalan Pondok Randu Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 34989125,
      "points": [
        [
          -1418.3,
          -239.6
        ],
        [
          -1399.2,
          -259.1
        ],
        [
          -1384.5,
          -262.2
        ],
        [
          -1377.4,
          -286.4
        ],
        [
          -1343.7,
          -341.7
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Hamka",
      "type": "tertiary",
      "width": 11,
      "osmWay": 158667920,
      "points": [
        [
          -1315.9,
          555.9
        ],
        [
          -1321.8,
          580
        ]
      ]
    },
    {
      "name": "Jalan Profesor Doktor Hamka",
      "type": "tertiary",
      "width": 11,
      "osmWay": 1101533048,
      "points": [
        [
          -1307.4,
          527.8
        ],
        [
          -1315.9,
          555.4
        ]
      ]
    },
    {
      "name": "Jalan Puri Beta 1",
      "type": "tertiary",
      "width": 11,
      "osmWay": 568089009,
      "points": [
        [
          -1367.1,
          487.1
        ],
        [
          -1362,
          494.2
        ],
        [
          -1366,
          510.4
        ]
      ]
    },
    {
      "name": "Jalan Puri Beta 1",
      "type": "tertiary",
      "width": 11,
      "osmWay": 780107347,
      "points": [
        [
          -1380.1,
          499.3
        ],
        [
          -1378.6,
          493.2
        ],
        [
          -1367.1,
          487.1
        ]
      ]
    },
    {
      "name": "Jalan Puri Kembangan",
      "type": "secondary",
      "width": 14,
      "osmWay": 30831741,
      "points": [
        [
          -1002.2,
          -172.2
        ],
        [
          -1009.5,
          -184.9
        ],
        [
          -1046.2,
          -220
        ],
        [
          -1059.9,
          -239.2
        ],
        [
          -1059.3,
          -264.9
        ]
      ]
    },
    {
      "name": "Jalan Puri Kembangan",
      "type": "tertiary",
      "width": 11,
      "osmWay": 432983372,
      "points": [
        [
          -955.2,
          -156
        ],
        [
          -927.5,
          -172.1
        ]
      ]
    },
    {
      "name": "Jalan Puri Kembangan",
      "type": "tertiary",
      "width": 11,
      "osmWay": 432984722,
      "points": [
        [
          -921.8,
          -178.4
        ],
        [
          -921.8,
          -190.5
        ],
        [
          -927.6,
          -203.7
        ],
        [
          -926.4,
          -229.4
        ]
      ]
    },
    {
      "name": "Jalan Puri Kembangan",
      "type": "secondary",
      "width": 14,
      "osmWay": 720235846,
      "points": [
        [
          -976.9,
          -151.1
        ],
        [
          -989.8,
          -160.8
        ]
      ]
    },
    {
      "name": "Jalan Puri Kembangan",
      "type": "secondary",
      "width": 14,
      "osmWay": 772059340,
      "points": [
        [
          -989.8,
          -160.8
        ],
        [
          -1002.2,
          -172.2
        ]
      ]
    },
    {
      "name": "Jalan Puri Kencana",
      "type": "primary",
      "width": 18,
      "osmWay": 30831696,
      "points": [
        [
          -1137,
          -71.4
        ],
        [
          -1134.7,
          -55.4
        ],
        [
          -1121.3,
          -56.6
        ]
      ]
    },
    {
      "name": "Jalan Puri Kencana",
      "type": "primary",
      "width": 18,
      "osmWay": 185526809,
      "points": [
        [
          -1121.3,
          -56.6
        ],
        [
          -1088.7,
          -56.6
        ]
      ]
    },
    {
      "name": "Jalan Puri Kencana",
      "type": "primary",
      "width": 18,
      "osmWay": 317819266,
      "points": [
        [
          -1084.6,
          -56.7
        ],
        [
          -954.4,
          -63.9
        ]
      ]
    },
    {
      "name": "Jalan Puri Lingkar Luar",
      "type": "primary",
      "width": 18,
      "osmWay": 30880054,
      "points": [
        [
          -1254.3,
          -70.2
        ],
        [
          -1227.7,
          -55.6
        ],
        [
          -1170.2,
          -52.8
        ]
      ]
    },
    {
      "name": "Jalan Puri Lingkar Luar",
      "type": "primary",
      "width": 18,
      "osmWay": 504930111,
      "points": [
        [
          -1301.5,
          -120.5
        ],
        [
          -1296.6,
          -110
        ]
      ]
    },
    {
      "name": "Jalan Puri Lingkar Luar",
      "type": "primary",
      "width": 18,
      "osmWay": 686776118,
      "points": [
        [
          -1292,
          -106.5
        ],
        [
          -1284.5,
          -95.1
        ],
        [
          -1254.3,
          -70.2
        ]
      ]
    },
    {
      "name": "Jalan Puri Lingkar Luar",
      "type": "primary",
      "width": 18,
      "osmWay": 788401974,
      "points": [
        [
          -1257.4,
          -69.9
        ],
        [
          -1281.7,
          -90.1
        ]
      ]
    },
    {
      "name": "Jalan Puribeta Utara",
      "type": "tertiary",
      "width": 11,
      "osmWay": 780107346,
      "points": [
        [
          -1367.1,
          487.1
        ],
        [
          -1371,
          475.4
        ],
        [
          -1386,
          461.5
        ],
        [
          -1399.9,
          435
        ]
      ]
    },
    {
      "name": "Jalan Raden Saleh Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 755206203,
      "points": [
        [
          -1397.3,
          17.7
        ],
        [
          -1435.3,
          64.8
        ]
      ]
    },
    {
      "name": "Jalan Raden Saleh Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 780084762,
      "points": [
        [
          -1386.6,
          -16.6
        ],
        [
          -1385.6,
          -12.8
        ],
        [
          -1397.3,
          17.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Basmol",
      "type": "tertiary",
      "width": 11,
      "osmWay": 721511758,
      "points": [
        [
          -1039.8,
          -351.2
        ],
        [
          -1042.8,
          -405.4
        ]
      ]
    },
    {
      "name": "Jalan Raya Kembangan Selatan",
      "type": "secondary",
      "width": 14,
      "osmWay": 30880148,
      "points": [
        [
          -1392,
          -109.6
        ],
        [
          -1333.6,
          -147.1
        ],
        [
          -1327,
          -147.9
        ],
        [
          -1316.9,
          -140.8
        ]
      ]
    },
    {
      "name": "Jalan Safir Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30880411,
      "points": [
        [
          -1209.2,
          0.1
        ],
        [
          -1207,
          5.9
        ],
        [
          -1195.3,
          11.8
        ],
        [
          -1179,
          12.9
        ]
      ]
    },
    {
      "name": "Jalan Shinta",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30876725,
      "points": [
        [
          -1200.6,
          -376
        ],
        [
          -1205.7,
          -413.3
        ]
      ]
    },
    {
      "name": "Jalan SMU 63",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30991676,
      "points": [
        [
          -1072,
          471.1
        ],
        [
          -1049,
          479.2
        ],
        [
          -1040.2,
          488.3
        ]
      ]
    },
    {
      "name": "Jalan Srengseng Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 31891607,
      "points": [
        [
          -885.8,
          313.3
        ],
        [
          -916.6,
          135.6
        ]
      ]
    },
    {
      "name": "Jalan Srengseng Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 446689930,
      "points": [
        [
          -916.6,
          135.6
        ],
        [
          -922.1,
          126.5
        ],
        [
          -936,
          117.2
        ],
        [
          -938.2,
          105.4
        ],
        [
          -949.5,
          90.6
        ],
        [
          -942.7,
          27.9
        ]
      ]
    },
    {
      "name": "Jalan Strategi Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 356824950,
      "points": [
        [
          -1399.6,
          415
        ],
        [
          -1398.4,
          367.1
        ]
      ]
    },
    {
      "name": "Jalan Susukan Kreo",
      "type": "residential",
      "width": 8,
      "osmWay": 31893474,
      "points": [
        [
          -1106.6,
          483
        ],
        [
          -1125.5,
          521.1
        ]
      ]
    },
    {
      "name": "Jalan Swadarma Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 31891163,
      "points": [
        [
          -878.6,
          578.6
        ],
        [
          -881.5,
          445.1
        ],
        [
          -878.6,
          410.5
        ],
        [
          -884.9,
          365.2
        ],
        [
          -884.8,
          319.5
        ]
      ]
    },
    {
      "name": "Jalan Swadaya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 31929643,
      "points": [
        [
          -1303.8,
          456.3
        ],
        [
          -1306.3,
          413.9
        ]
      ]
    },
    {
      "name": "Jalan Swadaya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 345695398,
      "points": [
        [
          -1307.1,
          471.2
        ],
        [
          -1317.2,
          524.3
        ]
      ]
    },
    {
      "name": "Jalan Taman Alfa Indah",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30991552,
      "points": [
        [
          -964,
          440.9
        ],
        [
          -969.6,
          426.6
        ],
        [
          -969.9,
          397.4
        ]
      ]
    },
    {
      "name": "Jalan Taman Alfa Indah",
      "type": "tertiary",
      "width": 11,
      "osmWay": 1210806408,
      "points": [
        [
          -969.9,
          395.1
        ],
        [
          -969.4,
          365.9
        ]
      ]
    },
    {
      "name": "Jalan Taman Alfa Indah",
      "type": "tertiary",
      "width": 11,
      "osmWay": 1210806413,
      "points": [
        [
          -969.4,
          365.9
        ],
        [
          -969.4,
          336
        ]
      ]
    },
    {
      "name": "Jalan Taman Aries",
      "type": "primary",
      "width": 18,
      "osmWay": 185523236,
      "points": [
        [
          -945,
          -55.2
        ],
        [
          -959.4,
          -54.5
        ]
      ]
    },
    {
      "name": "Jalan Taman Aries",
      "type": "primary",
      "width": 18,
      "osmWay": 185523238,
      "points": [
        [
          -959.4,
          -54.5
        ],
        [
          -1087.8,
          -46.4
        ]
      ]
    },
    {
      "name": "Jalan Taman Aries",
      "type": "primary",
      "width": 18,
      "osmWay": 279961147,
      "points": [
        [
          -1120.1,
          -41.1
        ],
        [
          -1105.4,
          -40.5
        ],
        [
          -1095.1,
          -45.5
        ]
      ]
    },
    {
      "name": "Jalan Taman Aries Utama",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30970495,
      "points": [
        [
          -1020.7,
          -50.6
        ],
        [
          -1019.3,
          -19
        ],
        [
          -1014.6,
          -5.3
        ]
      ]
    },
    {
      "name": "Jalan Taman Aries Utama",
      "type": "tertiary",
      "width": 11,
      "osmWay": 744246348,
      "points": [
        [
          -1011.5,
          3.5
        ],
        [
          -1006.9,
          21.3
        ],
        [
          -1008.7,
          35.1
        ]
      ]
    },
    {
      "name": "Jalan Taman Kota",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30734776,
      "points": [
        [
          -936.4,
          -486.4
        ],
        [
          -987.1,
          -497
        ]
      ]
    },
    {
      "name": "Jalan Taman Kota Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 458241237,
      "points": [
        [
          -924.5,
          -529.6
        ],
        [
          -933.2,
          -501.7
        ]
      ]
    },
    {
      "name": "Jalan Taman Kota Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 1316474653,
      "points": [
        [
          -933.2,
          -501.7
        ],
        [
          -936.4,
          -486.4
        ]
      ]
    },
    {
      "name": "Jalan Topas Raya",
      "type": "residential",
      "width": 8,
      "osmWay": 30880898,
      "points": [
        [
          -1211.4,
          -6.8
        ],
        [
          -1234.5,
          -7.9
        ],
        [
          -1234.9,
          -13.3
        ]
      ]
    },
    {
      "name": "Jalan TPU Joglo",
      "type": "tertiary",
      "width": 11,
      "osmWay": 113924548,
      "points": [
        [
          -911.6,
          408.5
        ],
        [
          -911.8,
          380.6
        ],
        [
          -917.7,
          379
        ],
        [
          -924.6,
          327.5
        ]
      ]
    },
    {
      "name": "Jalan Ulin",
      "type": "tertiary",
      "width": 11,
      "osmWay": 573380244,
      "points": [
        [
          -1389.2,
          23.8
        ],
        [
          -1402.5,
          42.9
        ]
      ]
    },
    {
      "name": "Jeruk Joglo Barat",
      "type": "residential",
      "width": 8,
      "osmWay": 30368405,
      "points": [
        [
          -931.2,
          240.4
        ],
        [
          -991.8,
          141.8
        ]
      ]
    },
    {
      "name": "Jeruk Joglo Barat",
      "type": "residential",
      "width": 8,
      "osmWay": 772044538,
      "points": [
        [
          -993.1,
          139.8
        ],
        [
          -1018.8,
          99.2
        ]
      ]
    },
    {
      "name": "Jeruk Joglo Barat",
      "type": "residential",
      "width": 8,
      "osmWay": 1047792175,
      "points": [
        [
          -920.8,
          320.7
        ],
        [
          -918.9,
          260.4
        ],
        [
          -931.2,
          240.4
        ]
      ]
    },
    {
      "name": "Safir Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 30880896,
      "points": [
        [
          -1264.5,
          -6.8
        ],
        [
          -1264.7,
          -23.6
        ],
        [
          -1255,
          -35.6
        ],
        [
          -1240.3,
          -42.8
        ],
        [
          -1210.6,
          -43.4
        ]
      ]
    },
    {
      "name": "Safir Raya",
      "type": "tertiary",
      "width": 11,
      "osmWay": 1303365909,
      "points": [
        [
          -1208.2,
          -43.3
        ],
        [
          -1150.6,
          -43.2
        ]
      ]
    }
  ]
};
