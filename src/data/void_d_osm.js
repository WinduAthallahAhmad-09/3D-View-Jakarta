/**
 * Void D (Kamal Muara-PIK-Kapuk-Muara Baru) road and water geometry derived from OpenStreetMap.
 * Source: OpenStreetMap contributors, ODbL. Retrieved 2026-10-28 via the OSM main API.
 * Coordinates are stored directly in scene units using the unscaled GPS projection:
 *   x = (lng - 106.823048) * 14100
 *   z = (lat + 6.194957) * -14180
 * Corridors already built by earlier stages, the six Void D anchor pads, and
 * Kanal Banjir Barat (drawn by renderOSMLayers) are excluded to avoid duplicate slabs.
 * Regenerate with the extraction steps in docs/ROADMAP.md.
 */
export const VOID_D_OSM = {
  "meta": {
    "source": "OpenStreetMap contributors (ODbL)",
    "license": "ODbL 1.0",
    "retrieved": "2026-10-28",
    "api": "https://api.openstreetmap.org/api/0.6/map (0.02 and 0.01 degree tiles)",
    "bbox": {
      "south": -6.143,
      "west": 106.728,
      "north": -6.093,
      "east": 106.798
    },
    "clipBox": {
      "minX": -1340,
      "maxX": -360,
      "minZ": -1440,
      "maxZ": -740
    },
    "projection": "projectGpsToScene",
    "projectionConstants": {
      "originLng": 106.823048,
      "originLat": -6.194957,
      "scaleX": 14100,
      "scaleZ": 14180
    },
    "simplification": 2.0,
    "roadCount": 201,
    "roadPointCount": 590,
    "waterwayCount": 31,
    "waterPointCount": 156,
    "waterPolygonCount": 19,
    "waterPolygonPointCount": 225,
    "note": "Koridor prosedural Pluit, enam tapak anchor, dan Kanal Banjir Barat (sudah dirender renderOSMLayers) dikecualikan."
  },
  "roads": [
    {
      "name": "Golf Lake Boulevard",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1258.0,
          -910.0
        ],
        [
          -1271.1,
          -927.3
        ],
        [
          -1274.4,
          -948.9
        ],
        [
          -1308.4,
          -949.3
        ]
      ]
    },
    {
      "name": "Golf Lake Boulevard",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1259.0,
          -909.0
        ],
        [
          -1262.7,
          -914.9
        ]
      ]
    },
    {
      "name": "Golf Lake Boulevard",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1308.5,
          -950.5
        ],
        [
          -1300.5,
          -950.2
        ]
      ]
    },
    {
      "name": "Golf Lake Boulevard",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1304.3,
          -949.4
        ],
        [
          -1304.6,
          -949.4
        ]
      ]
    },
    {
      "name": "Jalan A Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -618.5,
          -831.5
        ],
        [
          -578.6,
          -835.6
        ]
      ]
    },
    {
      "name": "Jalan A Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -650.5,
          -797.5
        ],
        [
          -650.3,
          -795.7
        ]
      ]
    },
    {
      "name": "Jalan Akasia Golf I",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1045.5,
          -1283.5
        ],
        [
          -1067.3,
          -1288.6
        ],
        [
          -1068.3,
          -1283.7
        ],
        [
          -1055.5,
          -1278.6
        ]
      ]
    },
    {
      "name": "Jalan Akasia Golf I",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1025.0,
          -1267.5
        ],
        [
          -1025.8,
          -1281.2
        ],
        [
          -1054.7,
          -1277.7
        ]
      ]
    },
    {
      "name": "Jalan Akasia Golf Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1052.5,
          -1256.5
        ],
        [
          -1049.9,
          -1236.1
        ]
      ]
    },
    {
      "name": "Jalan Akasia Golf Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1031.0,
          -1240.0
        ],
        [
          -1035.8,
          -1279.7
        ]
      ]
    },
    {
      "name": "Jalan Akasia Golf Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1052.5,
          -1257.5
        ],
        [
          -1055.5,
          -1278.6
        ],
        [
          -1053.5,
          -1283.8
        ]
      ]
    },
    {
      "name": "Jalan B Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -639.5,
          -798.5
        ],
        [
          -644.3,
          -851.0
        ]
      ]
    },
    {
      "name": "Jalan B Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -584.0,
          -830.5
        ],
        [
          -597.9,
          -828.9
        ]
      ]
    },
    {
      "name": "Jalan C Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -633.5,
          -799.5
        ],
        [
          -638.9,
          -847.5
        ]
      ]
    },
    {
      "name": "Jalan C Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -617.5,
          -822.0
        ],
        [
          -583.2,
          -825.8
        ]
      ]
    },
    {
      "name": "Jalan Crown Golf Boulevard",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1149.5,
          -1175.5
        ],
        [
          -1169.4,
          -1191.9
        ],
        [
          -1180.5,
          -1192.3
        ],
        [
          -1199.8,
          -1163.4
        ]
      ]
    },
    {
      "name": "Jalan Crown Golf Boulevard",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1208.5,
          -1167.0
        ],
        [
          -1201.7,
          -1162.4
        ]
      ]
    },
    {
      "name": "Jalan Crown Golf Boulevard",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1199.5,
          -1162.0
        ],
        [
          -1193.8,
          -1155.8
        ],
        [
          -1197.1,
          -1160.2
        ]
      ]
    },
    {
      "name": "Jalan Crown Golf Boulevard",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1208.0,
          -1168.0
        ],
        [
          -1201.1,
          -1163.6
        ]
      ]
    },
    {
      "name": "Jalan Crown Golf Boulevard",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1118.5,
          -1158.5
        ],
        [
          -1134.9,
          -1161.9
        ],
        [
          -1146.8,
          -1174.0
        ]
      ]
    },
    {
      "name": "Jalan Crown Golf Boulevard",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1148.0,
          -1176.0
        ],
        [
          -1143.1,
          -1181.9
        ]
      ]
    },
    {
      "name": "Jalan Crown Golf Boulevard",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1147.0,
          -1175.0
        ],
        [
          -1142.0,
          -1180.9
        ]
      ]
    },
    {
      "name": "Jalan Crown Golf Boulevard",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1137.3,
          -1166.0
        ],
        [
          -1131.7,
          -1161.7
        ]
      ]
    },
    {
      "name": "Jalan D Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -618.5,
          -831.5
        ],
        [
          -615.4,
          -802.4
        ]
      ]
    },
    {
      "name": "Jalan D Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -635.5,
          -815.0
        ],
        [
          -615.3,
          -817.7
        ]
      ]
    },
    {
      "name": "Jalan D Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -598.5,
          -819.0
        ],
        [
          -582.7,
          -821.2
        ]
      ]
    },
    {
      "name": "Jalan D1 Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -615.5,
          -817.5
        ],
        [
          -598.4,
          -819.2
        ]
      ]
    },
    {
      "name": "Jalan Diamond Golf",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1167.5,
          -1105.0
        ],
        [
          -1180.4,
          -1110.0
        ],
        [
          -1181.6,
          -1113.0
        ],
        [
          -1166.0,
          -1137.5
        ],
        [
          -1142.3,
          -1128.8
        ],
        [
          -1144.1,
          -1108.3
        ],
        [
          -1130.3,
          -1103.6
        ]
      ]
    },
    {
      "name": "Jalan Diamond Golf",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1164.5,
          -1105.5
        ],
        [
          -1158.3,
          -1123.3
        ]
      ]
    },
    {
      "name": "Jalan Diamond Golf",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1126.0,
          -1090.5
        ],
        [
          -1147.4,
          -1098.3
        ],
        [
          -1144.1,
          -1108.3
        ]
      ]
    },
    {
      "name": "Jalan Diamond Golf",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1162.5,
          -1103.5
        ],
        [
          -1147.4,
          -1098.3
        ]
      ]
    },
    {
      "name": "Jalan Diamond Golf",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1180.4,
          -1110.0
        ],
        [
          -1183.8,
          -1111.5
        ],
        [
          -1180.9,
          -1114.9
        ]
      ]
    },
    {
      "name": "Jalan Ebony Golf Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1082.5,
          -1292.5
        ],
        [
          -1094.2,
          -1205.4
        ],
        [
          -1092.5,
          -1186.7
        ]
      ]
    },
    {
      "name": "Jalan Fajar Aladin",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -575.5,
          -806.0
        ],
        [
          -573.4,
          -782.7
        ],
        [
          -557.5,
          -739.8
        ]
      ]
    },
    {
      "name": "Jalan G Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -582.0,
          -811.5
        ],
        [
          -634.2,
          -806.4
        ]
      ]
    },
    {
      "name": "Jalan Garden House",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1234.5,
          -1188.5
        ],
        [
          -1212.9,
          -1226.9
        ]
      ]
    },
    {
      "name": "Jalan Garden House",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1211.5,
          -1226.0
        ],
        [
          -1217.3,
          -1218.0
        ]
      ]
    },
    {
      "name": "Jalan Garden Imperial",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1237.0,
          -1221.5
        ],
        [
          -1207.4,
          -1203.4
        ],
        [
          -1227.0,
          -1170.0
        ]
      ]
    },
    {
      "name": "Jalan Garden Marble 1",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1254.5,
          -1199.5
        ],
        [
          -1227.0,
          -1170.0
        ]
      ]
    },
    {
      "name": "Jalan Garden Marble 3",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1246.0,
          -1178.5
        ],
        [
          -1260.1,
          -1193.2
        ]
      ]
    },
    {
      "name": "Jalan Garden Marble 5",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1265.5,
          -1186.5
        ],
        [
          -1252.0,
          -1172.9
        ]
      ]
    },
    {
      "name": "Jalan Garden Ruby 1",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1232.0,
          -1227.5
        ],
        [
          -1225.8,
          -1233.4
        ],
        [
          -1213.2,
          -1223.8
        ]
      ]
    },
    {
      "name": "Jalan Garden Ruby 2",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1232.0,
          -1227.5
        ],
        [
          -1217.4,
          -1219.3
        ]
      ]
    },
    {
      "name": "Jalan Gardenia 1",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1228.0,
          -1161.0
        ],
        [
          -1243.8,
          -1178.1
        ]
      ]
    },
    {
      "name": "Jalan Gardenia 2",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1248.0,
          -1174.0
        ],
        [
          -1236.0,
          -1161.2
        ]
      ]
    },
    {
      "name": "Jalan Green Land",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1227.0,
          -1170.0
        ],
        [
          -1244.1,
          -1153.3
        ]
      ]
    },
    {
      "name": "Jalan Haji Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -600.0,
          -833.0
        ],
        [
          -597.0,
          -803.9
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Waduk Pluit Utara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -376.5,
          -1217.5
        ],
        [
          -367.2,
          -1197.4
        ],
        [
          -365.7,
          -1180.5
        ],
        [
          -382.3,
          -1169.1
        ],
        [
          -394.6,
          -1169.3
        ],
        [
          -396.5,
          -1173.2
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Waduk Pluit Utara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -392.5,
          -1173.5
        ],
        [
          -391.1,
          -1169.4
        ]
      ]
    },
    {
      "name": "Jalan Johar Hijau Golf I",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1121.0,
          -1252.5
        ],
        [
          -1137.0,
          -1254.2
        ],
        [
          -1138.6,
          -1249.4
        ]
      ]
    },
    {
      "name": "Jalan Johar Hijau Golf II",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1121.5,
          -1247.5
        ],
        [
          -1146.8,
          -1250.4
        ]
      ]
    },
    {
      "name": "Jalan Johar Hijau Golf Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1122.5,
          -1236.0
        ],
        [
          -1120.8,
          -1252.3
        ]
      ]
    },
    {
      "name": "Jalan Johar Hijau Golf Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1140.5,
          -1232.0
        ],
        [
          -1141.2,
          -1224.2
        ]
      ]
    },
    {
      "name": "Jalan Johar Hijau Golf Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1138.5,
          -1249.5
        ],
        [
          -1139.3,
          -1243.6
        ],
        [
          -1149.7,
          -1245.0
        ]
      ]
    },
    {
      "name": "Jalan Johar Hijau Golf Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1140.0,
          -1238.0
        ],
        [
          -1139.3,
          -1243.6
        ],
        [
          -1122.1,
          -1241.7
        ]
      ]
    },
    {
      "name": "Jalan K Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -582.0,
          -864.5
        ],
        [
          -575.5,
          -806.1
        ]
      ]
    },
    {
      "name": "Jalan Kamal Cengkareng",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1255.5,
          -912.0
        ],
        [
          -1229.6,
          -877.4
        ],
        [
          -1230.0,
          -834.2
        ],
        [
          -1232.6,
          -823.6
        ]
      ]
    },
    {
      "name": "Jalan Kamal Cengkareng",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1254.2,
          -910.2
        ],
        [
          -1254.1,
          -910.2
        ]
      ]
    },
    {
      "name": "Jalan Kamal Cengkareng",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          -1236.0,
          -886.5
        ],
        [
          -1214.4,
          -902.9
        ],
        [
          -1234.1,
          -927.5
        ]
      ]
    },
    {
      "name": "Jalan Kamal Cengkareng",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          -1215.4,
          -903.1
        ],
        [
          -1215.2,
          -902.4
        ]
      ]
    },
    {
      "name": "Jalan Kamal Muara V",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          -1047.5,
          -908.0
        ],
        [
          -1042.3,
          -918.4
        ],
        [
          -1075.9,
          -944.0
        ],
        [
          -1092.7,
          -952.6
        ],
        [
          -1094.3,
          -937.6
        ],
        [
          -1102.0,
          -920.0
        ]
      ]
    },
    {
      "name": "Jalan Kandeka",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1121.5,
          -1442.5
        ],
        [
          -1146.2,
          -1403.8
        ],
        [
          -1151.2,
          -1390.1
        ]
      ]
    },
    {
      "name": "Jalan Kandeka",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1119.0,
          -1441.0
        ],
        [
          -1139.5,
          -1406.3
        ],
        [
          -1144.0,
          -1387.3
        ]
      ]
    },
    {
      "name": "Jalan Kano Indah",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -956.0,
          -1209.5
        ],
        [
          -961.5,
          -1219.7
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Cengkareng",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1306.0,
          -874.5
        ],
        [
          -1197.9,
          -956.0
        ],
        [
          -1190.2,
          -965.8
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Muara Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -669.0,
          -798.5
        ],
        [
          -666.2,
          -808.1
        ],
        [
          -669.6,
          -816.9
        ],
        [
          -672.8,
          -918.1
        ],
        [
          -675.0,
          -936.0
        ],
        [
          -686.4,
          -973.3
        ],
        [
          -691.0,
          -1006.8
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Muara Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -670.0,
          -799.0
        ],
        [
          -666.8,
          -810.4
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Muara Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -676.5,
          -758.5
        ],
        [
          -671.8,
          -770.3
        ],
        [
          -668.8,
          -798.6
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Muara Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -670.0,
          -799.0
        ],
        [
          -671.8,
          -784.0
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Pulo",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1017.0,
          -789.0
        ],
        [
          -1028.0,
          -755.5
        ],
        [
          -1030.1,
          -730.6
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Pulo",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1021.0,
          -736.5
        ],
        [
          -1019.4,
          -753.9
        ],
        [
          -985.4,
          -849.2
        ],
        [
          -977.4,
          -880.0
        ],
        [
          -978.7,
          -932.6
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Pulo",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -957.0,
          -797.0
        ],
        [
          -987.5,
          -748.3
        ],
        [
          -1006.0,
          -763.5
        ],
        [
          -1018.8,
          -745.5
        ],
        [
          -1019.6,
          -731.4
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Pulo",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -975.0,
          -890.5
        ],
        [
          -984.1,
          -849.0
        ],
        [
          -981.8,
          -844.7
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -676.5,
          -758.5
        ],
        [
          -683.9,
          -761.0
        ],
        [
          -712.5,
          -759.0
        ],
        [
          -773.2,
          -770.2
        ],
        [
          -937.4,
          -826.8
        ],
        [
          -1022.4,
          -861.0
        ],
        [
          -1061.9,
          -892.8
        ],
        [
          -1111.4,
          -926.0
        ],
        [
          -1190.2,
          -965.8
        ],
        [
          -1255.4,
          -1014.7
        ],
        [
          -1263.1,
          -1017.5
        ],
        [
          -1285.0,
          -1038.3
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Utara I",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -778.5,
          -818.0
        ],
        [
          -786.3,
          -789.0
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Utara I",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          -790.0,
          -776.0
        ],
        [
          -786.3,
          -789.0
        ],
        [
          -803.8,
          -792.4
        ],
        [
          -795.6,
          -823.9
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Utara II",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -778.5,
          -818.0
        ],
        [
          -766.6,
          -816.8
        ]
      ]
    },
    {
      "name": "Jalan Kapuk Utara II",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          -757.5,
          -853.5
        ],
        [
          -779.8,
          -858.8
        ],
        [
          -789.1,
          -823.8
        ],
        [
          -809.1,
          -827.9
        ],
        [
          -799.6,
          -862.9
        ],
        [
          -779.8,
          -858.8
        ]
      ]
    },
    {
      "name": "Jalan Kenari Golf V",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1100.5,
          -1284.5
        ],
        [
          -1142.4,
          -1290.2
        ]
      ]
    },
    {
      "name": "Jalan Kenari Hijau Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1119.5,
          -1268.0
        ],
        [
          -1145.9,
          -1271.3
        ]
      ]
    },
    {
      "name": "Jalan L Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -567.0,
          -857.5
        ],
        [
          -573.9,
          -851.6
        ],
        [
          -572.6,
          -863.3
        ]
      ]
    },
    {
      "name": "Jalan L Teluk Gong",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -571.0,
          -820.0
        ],
        [
          -573.9,
          -851.6
        ]
      ]
    },
    {
      "name": "Jalan Layar Permai",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -968.0,
          -1219.5
        ],
        [
          -983.1,
          -1246.5
        ]
      ]
    },
    {
      "name": "Jalan Layar Permai 1",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1004.0,
          -1218.5
        ],
        [
          -989.7,
          -1220.8
        ],
        [
          -955.5,
          -1240.2
        ]
      ]
    },
    {
      "name": "Jalan Layar Permai 1",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -977.4,
          -1227.9
        ],
        [
          -981.4,
          -1221.8
        ],
        [
          -989.7,
          -1220.8
        ]
      ]
    },
    {
      "name": "Jalan Layar Permai 2",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1005.5,
          -1228.5
        ],
        [
          -993.8,
          -1230.3
        ],
        [
          -982.1,
          -1236.4
        ]
      ]
    },
    {
      "name": "Jalan Layar Permai 2",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -978.5,
          -1238.5
        ],
        [
          -959.2,
          -1249.1
        ]
      ]
    },
    {
      "name": "Jalan Layar Permai 2A",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -985.5,
          -1242.5
        ],
        [
          -1006.1,
          -1236.1
        ]
      ]
    },
    {
      "name": "Jalan Layar Permai 2B",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1006.5,
          -1241.5
        ],
        [
          -988.3,
          -1247.7
        ]
      ]
    },
    {
      "name": "Jalan Layar Permai 2C",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -990.5,
          -1252.0
        ],
        [
          -1007.5,
          -1246.2
        ]
      ]
    },
    {
      "name": "Jalan Layar Permai 3",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -986.5,
          -1244.5
        ],
        [
          -964.1,
          -1257.1
        ]
      ]
    },
    {
      "name": "Jalan Layar Permai 4",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -991.0,
          -1253.0
        ],
        [
          -967.0,
          -1266.5
        ]
      ]
    },
    {
      "name": "Jalan Layar Permai 5",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -951.0,
          -1243.0
        ],
        [
          -914.5,
          -1263.2
        ]
      ]
    },
    {
      "name": "Jalan Lingkar Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1318.5,
          -736.5
        ],
        [
          -1309.0,
          -783.8
        ],
        [
          -1306.7,
          -812.9
        ],
        [
          -1308.2,
          -984.0
        ],
        [
          -1300.2,
          -1014.9
        ],
        [
          -1282.6,
          -1042.4
        ]
      ]
    },
    {
      "name": "Jalan Lingkar Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1305.7,
          -866.1
        ],
        [
          -1305.7,
          -865.9
        ]
      ]
    },
    {
      "name": "Jalan Mandara Permai VI",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -946.0,
          -1228.0
        ],
        [
          -928.8,
          -1197.9
        ]
      ]
    },
    {
      "name": "Jalan Mandara Permai VI",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -971.5,
          -1274.0
        ],
        [
          -948.0,
          -1231.2
        ]
      ]
    },
    {
      "name": "Jalan Mandara Permai VI",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -899.0,
          -1050.0
        ],
        [
          -902.6,
          -1139.7
        ],
        [
          -924.4,
          -1188.5
        ]
      ]
    },
    {
      "name": "Jalan Mandara Permai VII",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -974.5,
          -1170.5
        ],
        [
          -952.7,
          -1144.2
        ],
        [
          -948.3,
          -1132.8
        ],
        [
          -945.6,
          -1051.1
        ]
      ]
    },
    {
      "name": "Jalan Mandara Permai VII",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -948.5,
          -1048.5
        ],
        [
          -969.2,
          -1038.8
        ],
        [
          -1001.0,
          -1039.8
        ]
      ]
    },
    {
      "name": "Jalan Mandara Permai VII",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -948.0,
          -1051.0
        ],
        [
          -950.3,
          -1132.5
        ],
        [
          -957.8,
          -1148.1
        ],
        [
          -977.1,
          -1168.3
        ]
      ]
    },
    {
      "name": "Jalan Mandara Permai VII",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -946.5,
          -1047.0
        ],
        [
          -968.9,
          -1037.7
        ],
        [
          -1000.9,
          -1038.3
        ]
      ]
    },
    {
      "name": "Jalan Marina Indah",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1091.0,
          -1172.0
        ],
        [
          -1092.4,
          -1182.1
        ]
      ]
    },
    {
      "name": "Jalan Marina Indah",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1091.0,
          -1182.5
        ],
        [
          -1089.9,
          -1171.8
        ]
      ]
    },
    {
      "name": "Jalan Marina Indah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1179.0,
          -1213.5
        ],
        [
          -1176.6,
          -1208.2
        ],
        [
          -1131.2,
          -1174.7
        ],
        [
          -1119.2,
          -1168.9
        ],
        [
          -1089.9,
          -1171.8
        ],
        [
          -1045.9,
          -1161.0
        ],
        [
          -979.2,
          -1172.9
        ]
      ]
    },
    {
      "name": "Jalan Marina Indah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1183.0,
          -1206.5
        ],
        [
          -1168.8,
          -1201.7
        ],
        [
          -1130.2,
          -1172.2
        ],
        [
          -1117.3,
          -1167.1
        ],
        [
          -1089.7,
          -1170.3
        ],
        [
          -1054.9,
          -1159.9
        ],
        [
          -1044.8,
          -1159.6
        ],
        [
          -1011.4,
          -1166.9
        ],
        [
          -979.2,
          -1169.2
        ]
      ]
    },
    {
      "name": "Jalan Marina Indah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -982.9,
          -1169.7
        ],
        [
          -983.2,
          -1169.7
        ]
      ]
    },
    {
      "name": "Jalan Marina Indah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1001.1,
          -1168.1
        ],
        [
          -1001.2,
          -1168.1
        ]
      ]
    },
    {
      "name": "Jalan Mazda II",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -571.5,
          -828.0
        ],
        [
          -551.0,
          -829.2
        ]
      ]
    },
    {
      "name": "Jalan Mediterania Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -816.0,
          -1118.5
        ],
        [
          -814.7,
          -1164.6
        ],
        [
          -819.2,
          -1181.3
        ],
        [
          -872.8,
          -1279.8
        ],
        [
          -870.0,
          -1279.5
        ],
        [
          -817.6,
          -1184.7
        ],
        [
          -811.4,
          -1158.9
        ],
        [
          -812.7,
          -1118.6
        ]
      ]
    },
    {
      "name": "Jalan Mualim Teko",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          -1227.0,
          -1236.5
        ],
        [
          -1210.2,
          -1260.5
        ],
        [
          -1207.2,
          -1269.4
        ],
        [
          -1210.3,
          -1318.6
        ],
        [
          -1206.8,
          -1338.1
        ],
        [
          -1202.2,
          -1338.3
        ],
        [
          -1163.8,
          -1316.2
        ],
        [
          -1161.5,
          -1308.7
        ]
      ]
    },
    {
      "name": "Jalan Mualim Teko",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          -1161.0,
          -1313.5
        ],
        [
          -1162.6,
          -1313.7
        ]
      ]
    },
    {
      "name": "Jalan Muara Baru Pompa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -360.0,
          -1203.0
        ],
        [
          -361.0,
          -1219.4
        ],
        [
          -376.6,
          -1217.3
        ]
      ]
    },
    {
      "name": "Jalan Muara Baru Pompa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -376.6,
          -1217.8
        ],
        [
          -376.5,
          -1218.2
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -997.0,
          -852.5
        ],
        [
          -988.1,
          -883.6
        ],
        [
          -986.6,
          -900.2
        ],
        [
          -996.4,
          -998.3
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -999.5,
          -1040.0
        ],
        [
          -996.2,
          -1002.3
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1012.5,
          -1166.5
        ],
        [
          -1012.6,
          -1168.0
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -997.5,
          -1002.5
        ],
        [
          -996.8,
          -1006.3
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1001.0,
          -1040.0
        ],
        [
          -999.5,
          -1032.6
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -998.0,
          -999.0
        ],
        [
          -996.7,
          -997.0
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1012.5,
          -1166.5
        ],
        [
          -1001.0,
          -1039.8
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -999.5,
          -1040.0
        ],
        [
          -1001.5,
          -1061.7
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Kapuk",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1151.0,
          -1390.0
        ],
        [
          -1166.0,
          -1271.6
        ],
        [
          -1172.4,
          -1246.1
        ],
        [
          -1235.4,
          -1133.2
        ],
        [
          -1235.0,
          -1128.8
        ],
        [
          -1209.4,
          -1165.6
        ],
        [
          -1165.8,
          -1247.0
        ],
        [
          -1159.9,
          -1270.3
        ],
        [
          -1144.0,
          -1387.3
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Kapuk",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1166.8,
          -1267.3
        ],
        [
          -1166.8,
          -1267.7
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Kapuk",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1161.5,
          -1308.4
        ],
        [
          -1161.5,
          -1308.7
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Kapuk",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1232.9,
          -1129.1
        ],
        [
          -1233.2,
          -1128.9
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Kapuk",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -1234.3,
          -1128.6
        ],
        [
          -1234.6,
          -1128.7
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Selatan 1",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1217.5,
          -985.5
        ],
        [
          -1191.5,
          -1015.8
        ],
        [
          -1181.1,
          -1012.3
        ],
        [
          -1111.0,
          -1008.8
        ],
        [
          -1087.9,
          -1003.0
        ],
        [
          -997.6,
          -1002.3
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Selatan 1",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1216.5,
          -984.5
        ],
        [
          -1191.6,
          -1014.3
        ],
        [
          -1181.3,
          -1011.0
        ],
        [
          -1110.8,
          -1007.5
        ],
        [
          -1088.6,
          -1001.8
        ],
        [
          -924.6,
          -996.9
        ],
        [
          -866.6,
          -998.6
        ],
        [
          -709.5,
          -1015.3
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Selatan 1",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -996.0,
          -1002.5
        ],
        [
          -992.9,
          -999.9
        ],
        [
          -897.8,
          -998.0
        ],
        [
          -800.0,
          -1006.8
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Selatan 1",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          -800.0,
          -1007.0
        ],
        [
          -726.3,
          -1014.8
        ],
        [
          -711.4,
          -1019.6
        ],
        [
          -712.5,
          -1015.2
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Selatan 1",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          -709.0,
          -1014.5
        ],
        [
          -709.5,
          -1015.3
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Selatan 2",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -978.5,
          -930.5
        ],
        [
          -929.6,
          -925.9
        ],
        [
          -904.3,
          -933.2
        ],
        [
          -879.2,
          -945.3
        ],
        [
          -869.2,
          -946.3
        ],
        [
          -801.6,
          -931.8
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Selatan 2",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -798.0,
          -932.5
        ],
        [
          -795.2,
          -959.0
        ],
        [
          -799.8,
          -1005.3
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Selatan 2",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -801.5,
          -932.5
        ],
        [
          -798.3,
          -955.8
        ],
        [
          -804.0,
          -1006.4
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Selatan 2",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -801.5,
          -931.0
        ],
        [
          -816.5,
          -934.0
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Selatan 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -800.0,
          -1007.0
        ],
        [
          -799.8,
          -1005.3
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Selatan II",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          -709.0,
          -1014.5
        ],
        [
          -700.2,
          -989.7
        ],
        [
          -697.8,
          -915.4
        ],
        [
          -756.1,
          -914.0
        ],
        [
          -798.3,
          -931.0
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Timur",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -985.0,
          -998.5
        ],
        [
          -978.7,
          -932.6
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Timur",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -983.5,
          -999.5
        ],
        [
          -987.0,
          -1039.4
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Timur",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -985.0,
          -1038.0
        ],
        [
          -986.9,
          -1033.8
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -975.0,
          -890.5
        ],
        [
          -975.9,
          -895.6
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -873.0,
          -1280.0
        ],
        [
          -908.1,
          -1280.6
        ],
        [
          -938.3,
          -1275.9
        ],
        [
          -953.3,
          -1282.2
        ],
        [
          -977.0,
          -1279.9
        ],
        [
          -1009.7,
          -1282.6
        ],
        [
          -1010.5,
          -1252.0
        ],
        [
          -1000.1,
          -1169.5
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -987.0,
          -1039.5
        ],
        [
          -1001.1,
          -1168.1
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -1009.2,
          -1283.0
        ],
        [
          -1008.9,
          -1283.0
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -999.9,
          -1173.4
        ],
        [
          -997.8,
          -1169.9
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Utara 1",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1209.5,
          -1165.5
        ],
        [
          -1206.7,
          -1157.5
        ],
        [
          -1230.5,
          -1116.4
        ],
        [
          -1226.5,
          -1107.9
        ],
        [
          -1216.1,
          -1102.3
        ],
        [
          -1201.3,
          -1086.7
        ],
        [
          -1117.3,
          -1050.7
        ],
        [
          -1085.7,
          -1042.1
        ],
        [
          -1013.1,
          -1041.2
        ],
        [
          -1007.6,
          -1045.2
        ],
        [
          -1007.9,
          -1057.8
        ],
        [
          -1000.9,
          -1059.7
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Utara 1",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1000.5,
          -1058.0
        ],
        [
          -1006.0,
          -1057.0
        ],
        [
          -1007.2,
          -1049.0
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Utara 1",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -944.5,
          -1049.5
        ],
        [
          -855.6,
          -1052.1
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Utara 1",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -712.0,
          -1068.0
        ],
        [
          -805.2,
          -1058.0
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Utara 1",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -855.8,
          -1052.1
        ],
        [
          -855.9,
          -1052.1
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Utara 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -949.5,
          -1114.0
        ],
        [
          -769.0,
          -1119.4
        ],
        [
          -719.3,
          -1110.0
        ],
        [
          -706.6,
          -1103.9
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Utara 2",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -949.5,
          -1113.0
        ],
        [
          -768.8,
          -1117.9
        ],
        [
          -720.0,
          -1108.1
        ],
        [
          -707.8,
          -1102.1
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Utara 3",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -947.5,
          -1228.0
        ],
        [
          -970.5,
          -1213.0
        ],
        [
          -969.4,
          -1183.7
        ],
        [
          -974.6,
          -1172.0
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Utara 3",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -946.0,
          -1231.0
        ],
        [
          -907.8,
          -1251.6
        ],
        [
          -945.2,
          -1229.4
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Utara 3",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -949.0,
          -1229.5
        ],
        [
          -972.2,
          -1215.6
        ],
        [
          -971.2,
          -1183.8
        ],
        [
          -978.0,
          -1173.6
        ]
      ]
    },
    {
      "name": "Jalan Pantai Indah Utara 3",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -972.2,
          -1194.6
        ],
        [
          -972.2,
          -1194.7
        ]
      ]
    },
    {
      "name": "Jalan Pantai Mutiara",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -455.5,
          -1252.5
        ],
        [
          -439.5,
          -1224.6
        ],
        [
          -437.9,
          -1193.8
        ],
        [
          -438.8,
          -1206.1
        ]
      ]
    },
    {
      "name": "Jalan Pantai Mutiara",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -438.9,
          -1215.8
        ],
        [
          -437.6,
          -1223.6
        ],
        [
          -444.6,
          -1234.3
        ]
      ]
    },
    {
      "name": "Jalan Pantai Mutiara",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -437.3,
          -1216.1
        ],
        [
          -437.1,
          -1206.2
        ]
      ]
    },
    {
      "name": "Jalan Pluit Permai",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -436.5,
          -1124.0
        ],
        [
          -437.2,
          -1172.3
        ]
      ]
    },
    {
      "name": "Jalan Pluit Permai",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -535.5,
          -1123.0
        ],
        [
          -458.7,
          -1123.8
        ]
      ]
    },
    {
      "name": "Jalan Pluit Permai",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -405.5,
          -1126.5
        ],
        [
          -408.0,
          -1124.7
        ],
        [
          -406.2,
          -1122.5
        ]
      ]
    },
    {
      "name": "Jalan Pluit Permai",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -441.0,
          -1124.0
        ],
        [
          -408.0,
          -1124.7
        ]
      ]
    },
    {
      "name": "Jalan Pluit Permai",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -406.7,
          -1125.0
        ],
        [
          -406.3,
          -1125.1
        ]
      ]
    },
    {
      "name": "Jalan Pluit Permai",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -406.1,
          -1125.3
        ],
        [
          -405.9,
          -1125.6
        ]
      ]
    },
    {
      "name": "Jalan Pluit Samudra 2",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -438.0,
          -1194.0
        ],
        [
          -437.4,
          -1173.8
        ]
      ]
    },
    {
      "name": "Jalan Pluit Samudra 3",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -445.0,
          -1195.0
        ],
        [
          -444.7,
          -1173.7
        ]
      ]
    },
    {
      "name": "Jalan Pluit Samudra 4",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -477.5,
          -1194.0
        ],
        [
          -476.9,
          -1173.3
        ]
      ]
    },
    {
      "name": "Jalan Pluit Samudra 5",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -392.0,
          -1184.0
        ],
        [
          -437.8,
          -1183.7
        ]
      ]
    },
    {
      "name": "Jalan Pluit Samudra 6",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -477.5,
          -1183.0
        ],
        [
          -444.9,
          -1183.6
        ]
      ]
    },
    {
      "name": "Jalan Pluit Samudra I",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -392.0,
          -1195.5
        ],
        [
          -392.3,
          -1173.3
        ]
      ]
    },
    {
      "name": "Jalan Pluit Samudra Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -392.0,
          -1195.5
        ],
        [
          -477.5,
          -1194.1
        ]
      ]
    },
    {
      "name": "Jalan Pluit Samudra Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -392.7,
          -1196.1
        ],
        [
          -392.3,
          -1195.8
        ]
      ]
    },
    {
      "name": "Jalan Pluit Utara Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -400.0,
          -1171.5
        ],
        [
          -563.1,
          -1172.5
        ]
      ]
    },
    {
      "name": "Jalan Pluit Utara Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -399.0,
          -1173.0
        ],
        [
          -552.9,
          -1172.4
        ]
      ]
    },
    {
      "name": "Jalan Syekh Junaid Al Batawi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1326.5,
          -735.5
        ],
        [
          -1317.1,
          -780.3
        ],
        [
          -1314.3,
          -817.0
        ],
        [
          -1312.3,
          -872.8
        ],
        [
          -1314.6,
          -988.9
        ],
        [
          -1307.1,
          -1015.3
        ],
        [
          -1290.2,
          -1049.1
        ]
      ]
    },
    {
      "name": "Jalan Teluk Gong Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -670.0,
          -799.0
        ],
        [
          -656.4,
          -796.7
        ],
        [
          -670.7,
          -797.5
        ]
      ]
    },
    {
      "name": "Jalan Teluk Gong Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -426.0,
          -819.5
        ],
        [
          -506.1,
          -811.7
        ],
        [
          -524.2,
          -802.7
        ],
        [
          -538.3,
          -809.4
        ],
        [
          -656.4,
          -796.7
        ]
      ]
    },
    {
      "name": "Jalan Teluk Gong Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -425.5,
          -816.5
        ],
        [
          -502.8,
          -811.5
        ],
        [
          -523.9,
          -802.0
        ],
        [
          -528.8,
          -804.4
        ]
      ]
    },
    {
      "name": "Jalan Teluk Gong Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -518.7,
          -805.3
        ],
        [
          -518.5,
          -805.4
        ]
      ]
    },
    {
      "name": "Jalan Teluk Gong Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -573.5,
          -806.2
        ],
        [
          -577.2,
          -805.8
        ]
      ]
    },
    {
      "name": "Jalan Town House Cordoba",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1147.5,
          -1256.5
        ],
        [
          -1155.5,
          -1230.2
        ],
        [
          -1152.9,
          -1208.8
        ],
        [
          -1118.7,
          -1181.8
        ],
        [
          -1094.3,
          -1184.0
        ]
      ]
    },
    {
      "name": "Jalan Town House Emerald",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1146.5,
          -1261.0
        ],
        [
          -1140.2,
          -1310.8
        ]
      ]
    },
    {
      "name": "Serenade Lagoon 1",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1136.5,
          -1398.5
        ],
        [
          -1116.2,
          -1398.7
        ],
        [
          -1113.6,
          -1391.0
        ]
      ]
    },
    {
      "name": "Serenade Lagoon 10",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1077.0,
          -1384.0
        ],
        [
          -1104.2,
          -1369.5
        ],
        [
          -1108.4,
          -1375.5
        ]
      ]
    },
    {
      "name": "Serenade Lagoon 2",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1140.0,
          -1391.5
        ],
        [
          -1110.3,
          -1390.9
        ]
      ]
    },
    {
      "name": "Serenade Lagoon 3",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1140.5,
          -1384.0
        ],
        [
          -1111.0,
          -1383.2
        ]
      ]
    },
    {
      "name": "Serenade Lagoon 5",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1140.5,
          -1376.0
        ],
        [
          -1108.4,
          -1375.5
        ]
      ]
    },
    {
      "name": "Serenade Lagoon 6",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1140.5,
          -1369.5
        ],
        [
          -1110.9,
          -1368.9
        ]
      ]
    },
    {
      "name": "Serenade Lagoon 7",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1112.5,
          -1362.5
        ],
        [
          -1140.3,
          -1362.9
        ]
      ]
    },
    {
      "name": "Serenade Lagoon 8",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1111.0,
          -1383.0
        ],
        [
          -1081.2,
          -1397.1
        ]
      ]
    },
    {
      "name": "Serenade Lagoon 9",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1108.5,
          -1375.5
        ],
        [
          -1078.7,
          -1390.3
        ]
      ]
    },
    {
      "name": "The Piano 2",
      "type": "residential",
      "width": 8,
      "points": [
        [
          -1087.0,
          -1418.0
        ],
        [
          -1116.1,
          -1408.5
        ],
        [
          -1122.1,
          -1411.7
        ]
      ]
    },
    {
      "name": "Transjakarta Busway Koridor 9",
      "type": "busway",
      "width": 12,
      "points": [
        [
          -426.0,
          -840.5
        ],
        [
          -430.6,
          -894.2
        ]
      ]
    },
    {
      "name": "Transjakarta Busway Koridor 9",
      "type": "busway",
      "width": 12,
      "points": [
        [
          -424.5,
          -840.0
        ],
        [
          -436.1,
          -982.4
        ]
      ]
    },
    {
      "name": "Transjakarta Busway Koridor 9, 12",
      "type": "busway",
      "width": 12,
      "points": [
        [
          -430.5,
          -894.0
        ],
        [
          -439.0,
          -979.6
        ]
      ]
    },
    {
      "name": "Transjakarta Busway Koridor 9, 12",
      "type": "busway",
      "width": 12,
      "points": [
        [
          -529.0,
          -1122.5
        ],
        [
          -458.7,
          -1123.3
        ]
      ]
    },
    {
      "name": "Transjakarta Busway Koridor 9, 12",
      "type": "busway",
      "width": 12,
      "points": [
        [
          -408.5,
          -1096.5
        ],
        [
          -436.0,
          -1094.5
        ],
        [
          -434.6,
          -997.8
        ]
      ]
    },
    {
      "name": "Transjakarta Busway Koridor 9, 12",
      "type": "busway",
      "width": 12,
      "points": [
        [
          -461.0,
          -1095.5
        ],
        [
          -542.4,
          -1094.8
        ]
      ]
    },
    {
      "name": "Transjakarta Busway Koridor 9, 12",
      "type": "busway",
      "width": 12,
      "points": [
        [
          -436.5,
          -1123.5
        ],
        [
          -407.0,
          -1124.4
        ]
      ]
    }
  ],
  "waterways": [
    {
      "name": null,
      "kind": "canal",
      "width": 8,
      "points": [
        [
          -1069.0,
          -878.5
        ],
        [
          -1190.0,
          -964.6
        ],
        [
          -1198.4,
          -954.2
        ],
        [
          -1301.7,
          -875.3
        ],
        [
          -1305.3,
          -864.7
        ],
        [
          -1311.2,
          -863.5
        ],
        [
          -1313.9,
          -790.6
        ],
        [
          -1325.1,
          -735.5
        ]
      ]
    },
    {
      "name": null,
      "kind": "canal",
      "width": 8,
      "points": [
        [
          -1167.5,
          -839.0
        ],
        [
          -1147.8,
          -854.3
        ],
        [
          -1158.4,
          -863.0
        ],
        [
          -1194.4,
          -907.8
        ],
        [
          -1210.0,
          -907.4
        ],
        [
          -1249.0,
          -878.2
        ],
        [
          -1267.8,
          -859.7
        ],
        [
          -1269.0,
          -825.6
        ],
        [
          -1186.7,
          -824.0
        ],
        [
          -1151.3,
          -794.8
        ],
        [
          -1124.7,
          -823.9
        ],
        [
          -1147.8,
          -854.3
        ]
      ]
    },
    {
      "name": null,
      "kind": "canal",
      "width": 8,
      "points": [
        [
          -1012.5,
          -785.5
        ],
        [
          -1037.8,
          -797.0
        ],
        [
          -1059.3,
          -801.3
        ],
        [
          -1085.9,
          -818.1
        ],
        [
          -1124.7,
          -823.9
        ]
      ]
    },
    {
      "name": null,
      "kind": "canal",
      "width": 8,
      "points": [
        [
          -1369.0,
          -1243.5
        ],
        [
          -1220.9,
          -1351.9
        ]
      ]
    },
    {
      "name": null,
      "kind": "canal",
      "width": 8,
      "points": [
        [
          -1269.1,
          -820.9
        ],
        [
          -1269.0,
          -825.6
        ]
      ]
    },
    {
      "name": null,
      "kind": "canal",
      "width": 8,
      "points": [
        [
          -1270.4,
          -751.9
        ],
        [
          -1269.1,
          -820.9
        ]
      ]
    },
    {
      "name": null,
      "kind": "canal",
      "width": 8,
      "points": [
        [
          -1090.5,
          -817.5
        ],
        [
          -1095.6,
          -811.3
        ],
        [
          -1088.9,
          -809.1
        ],
        [
          -1089.2,
          -804.5
        ],
        [
          -1106.2,
          -777.6
        ],
        [
          -1128.6,
          -775.1
        ],
        [
          -1137.1,
          -769.1
        ],
        [
          -1142.4,
          -772.0
        ],
        [
          -1162.0,
          -745.2
        ],
        [
          -1164.3,
          -748.2
        ],
        [
          -1270.5,
          -749.4
        ],
        [
          -1270.4,
          -751.9
        ]
      ]
    },
    {
      "name": null,
      "kind": "drain",
      "width": 6,
      "points": [
        [
          -994.5,
          -894.0
        ],
        [
          -994.8,
          -890.9
        ]
      ]
    },
    {
      "name": null,
      "kind": "drain",
      "width": 6,
      "points": [
        [
          -1157.0,
          -1315.5
        ],
        [
          -1168.7,
          -1247.1
        ],
        [
          -1210.6,
          -1170.0
        ],
        [
          -1209.1,
          -1158.1
        ],
        [
          -1230.1,
          -1126.4
        ],
        [
          -1232.6,
          -1114.4
        ],
        [
          -1229.2,
          -1104.4
        ],
        [
          -1217.9,
          -1091.2
        ],
        [
          -1198.7,
          -1079.7
        ],
        [
          -1112.1,
          -1044.1
        ],
        [
          -1070.4,
          -1036.3
        ],
        [
          -1000.6,
          -1033.9
        ]
      ]
    },
    {
      "name": null,
      "kind": "drain",
      "width": 6,
      "points": [
        [
          -1060.0,
          -1411.5
        ],
        [
          -1057.1,
          -1415.9
        ]
      ]
    },
    {
      "name": null,
      "kind": "drain",
      "width": 6,
      "points": [
        [
          -729.0,
          -1253.0
        ],
        [
          -716.7,
          -1282.1
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          -463.5,
          -746.0
        ],
        [
          -458.7,
          -746.3
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          -356.0,
          -747.5
        ],
        [
          -437.3,
          -740.9
        ],
        [
          -458.7,
          -748.0
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          -745.0,
          -1173.0
        ],
        [
          -721.1,
          -1168.8
        ],
        [
          -698.1,
          -1185.1
        ],
        [
          -683.5,
          -1206.7
        ],
        [
          -660.4,
          -1263.2
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          -850.5,
          -1054.0
        ],
        [
          -852.3,
          -1104.0
        ],
        [
          -820.8,
          -1106.8
        ],
        [
          -816.9,
          -1064.8
        ],
        [
          -838.2,
          -1062.5
        ],
        [
          -841.1,
          -1068.0
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          -843.0,
          -1090.0
        ],
        [
          -819.5,
          -1091.8
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          -698.5,
          -1037.0
        ],
        [
          -686.3,
          -1031.9
        ],
        [
          -651.3,
          -1001.2
        ],
        [
          -642.2,
          -998.8
        ],
        [
          -606.0,
          -991.7
        ],
        [
          -575.5,
          -989.6
        ],
        [
          -436.6,
          -963.2
        ],
        [
          -345.1,
          -963.0
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          -359.0,
          -1168.5
        ],
        [
          -362.1,
          -1174.3
        ],
        [
          -362.7,
          -1197.4
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          -331.5,
          -1117.0
        ],
        [
          -393.1,
          -1103.8
        ],
        [
          -472.6,
          -1102.8
        ],
        [
          -508.9,
          -1106.2
        ],
        [
          -532.8,
          -1101.6
        ],
        [
          -546.5,
          -1107.5
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 4,
      "points": [
        [
          -1341.0,
          -785.5
        ],
        [
          -1314.8,
          -783.3
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 4,
      "points": [
        [
          -984.5,
          -928.0
        ],
        [
          -924.9,
          -924.7
        ],
        [
          -871.3,
          -945.1
        ],
        [
          -799.3,
          -927.9
        ],
        [
          -754.5,
          -912.4
        ],
        [
          -697.3,
          -912.3
        ],
        [
          -695.3,
          -921.7
        ],
        [
          -663.5,
          -925.6
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 4,
      "points": [
        [
          -326.5,
          -827.5
        ],
        [
          -449.1,
          -816.1
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 4,
      "points": [
        [
          -1078.5,
          -734.0
        ],
        [
          -1053.1,
          -772.8
        ],
        [
          -1043.2,
          -776.3
        ],
        [
          -1020.7,
          -761.8
        ],
        [
          -999.5,
          -739.2
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 4,
      "points": [
        [
          -739.0,
          -1171.5
        ],
        [
          -761.3,
          -1211.3
        ],
        [
          -771.6,
          -1222.7
        ],
        [
          -774.1,
          -1233.6
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 4,
      "points": [
        [
          -336.0,
          -1181.5
        ],
        [
          -362.7,
          -1197.4
        ],
        [
          -368.7,
          -1205.6
        ],
        [
          -370.7,
          -1219.7
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 4,
      "points": [
        [
          -706.0,
          -1014.0
        ],
        [
          -697.7,
          -990.2
        ],
        [
          -695.3,
          -921.7
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 4,
      "points": [
        [
          -334.5,
          -1136.5
        ],
        [
          -394.0,
          -1123.5
        ],
        [
          -544.1,
          -1121.3
        ]
      ]
    },
    {
      "name": "Angke",
      "kind": "river",
      "width": 13,
      "points": [
        [
          -671.5,
          -739.0
        ],
        [
          -665.4,
          -762.8
        ],
        [
          -665.0,
          -793.4
        ],
        [
          -656.3,
          -812.1
        ],
        [
          -662.0,
          -846.3
        ],
        [
          -658.5,
          -853.3
        ],
        [
          -643.3,
          -861.1
        ],
        [
          -654.7,
          -889.0
        ],
        [
          -678.6,
          -976.2
        ],
        [
          -685.0,
          -1010.6
        ]
      ]
    },
    {
      "name": "Cengkareng Drain",
      "kind": "river",
      "width": 16,
      "points": [
        [
          -1026.0,
          -677.5
        ],
        [
          -1022.8,
          -756.1
        ],
        [
          -991.2,
          -849.3
        ],
        [
          -981.0,
          -892.4
        ],
        [
          -1015.8,
          -1257.4
        ],
        [
          -1016.7,
          -1343.5
        ]
      ]
    },
    {
      "name": "Kali Grogol",
      "kind": "river",
      "width": 13,
      "points": [
        [
          -491.5,
          -736.0
        ],
        [
          -496.1,
          -754.2
        ],
        [
          -532.8,
          -823.5
        ],
        [
          -527.6,
          -833.6
        ],
        [
          -518.9,
          -840.0
        ],
        [
          -550.5,
          -971.0
        ],
        [
          -552.4,
          -1067.7
        ],
        [
          -533.1,
          -1192.0
        ],
        [
          -533.9,
          -1227.9
        ]
      ]
    },
    {
      "name": "Kali Ireng",
      "kind": "river",
      "width": 10,
      "points": [
        [
          -457.5,
          -730.0
        ],
        [
          -459.4,
          -752.0
        ],
        [
          -476.1,
          -767.9
        ],
        [
          -518.9,
          -840.0
        ]
      ]
    }
  ],
  "waterPolygons": [
    {
      "name": null,
      "kind": "river",
      "points": [
        [
          -1022.5,
          -683.1
        ],
        [
          -1027.8,
          -683.4
        ],
        [
          -1027.3,
          -747.5
        ],
        [
          -1000.7,
          -829.4
        ],
        [
          -984.8,
          -900.0
        ],
        [
          -998.9,
          -1042.3
        ],
        [
          -989.1,
          -1041.9
        ],
        [
          -977.4,
          -893.2
        ],
        [
          -987.9,
          -848.3
        ],
        [
          -1022.2,
          -748.2
        ],
        [
          -1022.5,
          -683.1
        ]
      ]
    },
    {
      "name": null,
      "kind": "water",
      "points": [
        [
          -994.8,
          -893.9
        ],
        [
          -998.7,
          -894.8
        ],
        [
          -999.0,
          -933.7
        ],
        [
          -1007.5,
          -1012.8
        ],
        [
          -1017.8,
          -1012.8
        ],
        [
          -1018.1,
          -1002.9
        ],
        [
          -1091.9,
          -1006.1
        ],
        [
          -1132.4,
          -1019.1
        ],
        [
          -1241.5,
          -1075.4
        ],
        [
          -1223.7,
          -1077.1
        ],
        [
          -1114.9,
          -1031.7
        ],
        [
          -1090.0,
          -1025.6
        ],
        [
          -999.4,
          -1022.6
        ],
        [
          -988.6,
          -895.7
        ],
        [
          -994.8,
          -893.9
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "points": [
        [
          -667.0,
          -795.6
        ],
        [
          -661.8,
          -795.6
        ],
        [
          -669.3,
          -728.5
        ],
        [
          -674.3,
          -706.8
        ],
        [
          -682.7,
          -699.4
        ],
        [
          -673.9,
          -720.8
        ],
        [
          -667.0,
          -795.6
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "points": [
        [
          -673.2,
          -999.9
        ],
        [
          -529.8,
          -841.3
        ],
        [
          -507.6,
          -809.7
        ],
        [
          -513.9,
          -806.1
        ],
        [
          -528.6,
          -830.8
        ],
        [
          -660.7,
          -973.3
        ],
        [
          -678.4,
          -998.8
        ],
        [
          -669.5,
          -953.5
        ],
        [
          -674.2,
          -952.4
        ],
        [
          -685.2,
          -997.2
        ],
        [
          -694.7,
          -1018.0
        ],
        [
          -681.7,
          -1017.3
        ],
        [
          -673.2,
          -999.9
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "points": [
        [
          -531.1,
          -899.6
        ],
        [
          -548.8,
          -983.5
        ],
        [
          -553.8,
          -984.3
        ],
        [
          -542.3,
          -926.5
        ],
        [
          -535.2,
          -900.3
        ],
        [
          -531.1,
          -899.6
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "points": [
        [
          -457.4,
          -737.0
        ],
        [
          -459.9,
          -753.6
        ],
        [
          -473.9,
          -766.8
        ],
        [
          -498.6,
          -810.1
        ],
        [
          -502.6,
          -811.3
        ],
        [
          -477.8,
          -767.4
        ],
        [
          -460.4,
          -751.9
        ],
        [
          -459.6,
          -736.8
        ],
        [
          -457.4,
          -737.0
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "points": [
        [
          -529.9,
          -832.2
        ],
        [
          -531.4,
          -823.8
        ],
        [
          -495.7,
          -756.1
        ],
        [
          -498.4,
          -754.5
        ],
        [
          -533.9,
          -822.0
        ],
        [
          -534.4,
          -827.4
        ],
        [
          -529.9,
          -832.2
        ]
      ]
    },
    {
      "name": null,
      "kind": "pond",
      "points": [
        [
          -1329.2,
          -1337.0
        ],
        [
          -1324.2,
          -1333.5
        ],
        [
          -1288.8,
          -1377.6
        ],
        [
          -1293.7,
          -1381.0
        ],
        [
          -1329.2,
          -1337.0
        ]
      ]
    },
    {
      "name": null,
      "kind": "pond",
      "points": [
        [
          -1329.9,
          -1338.7
        ],
        [
          -1295.2,
          -1382.4
        ],
        [
          -1300.3,
          -1387.2
        ],
        [
          -1333.2,
          -1345.2
        ],
        [
          -1329.9,
          -1338.7
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "points": [
        [
          -1001.4,
          -1170.0
        ],
        [
          -1010.9,
          -1169.3
        ],
        [
          -1019.6,
          -1257.0
        ],
        [
          -1021.2,
          -1333.1
        ],
        [
          -1024.6,
          -1348.5
        ],
        [
          -1012.1,
          -1342.8
        ],
        [
          -1011.1,
          -1339.8
        ],
        [
          -1011.6,
          -1253.5
        ],
        [
          -1001.4,
          -1170.0
        ]
      ]
    },
    {
      "name": "Danau Hias Ebony",
      "kind": "pond",
      "points": [
        [
          -1079.0,
          -1279.4
        ],
        [
          -1060.9,
          -1272.1
        ],
        [
          -1062.3,
          -1263.0
        ],
        [
          -1058.8,
          -1255.9
        ],
        [
          -1061.6,
          -1248.5
        ],
        [
          -1057.1,
          -1231.1
        ],
        [
          -1056.9,
          -1210.5
        ],
        [
          -1086.0,
          -1206.4
        ],
        [
          -1099.1,
          -1213.3
        ],
        [
          -1110.1,
          -1212.9
        ],
        [
          -1116.5,
          -1218.3
        ],
        [
          -1117.7,
          -1224.5
        ],
        [
          -1112.4,
          -1270.3
        ],
        [
          -1109.7,
          -1275.4
        ],
        [
          -1094.7,
          -1277.1
        ],
        [
          -1093.1,
          -1288.9
        ],
        [
          -1086.2,
          -1277.2
        ],
        [
          -1090.4,
          -1274.6
        ],
        [
          -1099.8,
          -1275.6
        ],
        [
          -1105.7,
          -1270.8
        ],
        [
          -1112.7,
          -1237.8
        ],
        [
          -1111.0,
          -1222.0
        ],
        [
          -1106.7,
          -1217.1
        ],
        [
          -1093.7,
          -1212.6
        ],
        [
          -1061.7,
          -1213.3
        ],
        [
          -1062.2,
          -1230.9
        ],
        [
          -1067.9,
          -1235.3
        ],
        [
          -1064.8,
          -1251.8
        ],
        [
          -1066.3,
          -1266.3
        ],
        [
          -1070.9,
          -1272.1
        ],
        [
          -1083.8,
          -1276.4
        ],
        [
          -1079.0,
          -1279.4
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "points": [
        [
          -684.9,
          -1201.7
        ],
        [
          -674.5,
          -1224.1
        ],
        [
          -670.5,
          -1222.8
        ],
        [
          -667.5,
          -1230.4
        ],
        [
          -663.0,
          -1229.3
        ],
        [
          -662.0,
          -1232.3
        ],
        [
          -653.9,
          -1229.4
        ],
        [
          -645.4,
          -1253.1
        ],
        [
          -663.7,
          -1264.4
        ],
        [
          -670.1,
          -1248.1
        ],
        [
          -678.0,
          -1247.7
        ],
        [
          -681.5,
          -1238.5
        ],
        [
          -676.7,
          -1236.4
        ],
        [
          -687.5,
          -1208.2
        ],
        [
          -686.3,
          -1205.0
        ],
        [
          -697.6,
          -1188.5
        ],
        [
          -721.4,
          -1170.2
        ],
        [
          -739.2,
          -1173.3
        ],
        [
          -739.9,
          -1171.1
        ],
        [
          -727.7,
          -1167.4
        ],
        [
          -714.0,
          -1170.9
        ],
        [
          -690.5,
          -1191.9
        ],
        [
          -684.9,
          -1201.7
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "points": [
        [
          -761.3,
          -1205.5
        ],
        [
          -742.1,
          -1170.2
        ],
        [
          -746.8,
          -1170.0
        ],
        [
          -769.0,
          -1208.0
        ],
        [
          -785.7,
          -1222.3
        ],
        [
          -788.6,
          -1228.9
        ],
        [
          -782.9,
          -1257.0
        ],
        [
          -783.6,
          -1280.0
        ],
        [
          -797.0,
          -1326.4
        ],
        [
          -796.4,
          -1337.5
        ],
        [
          -801.5,
          -1345.3
        ],
        [
          -790.3,
          -1343.5
        ],
        [
          -789.4,
          -1325.0
        ],
        [
          -779.8,
          -1292.2
        ],
        [
          -777.6,
          -1255.4
        ],
        [
          -778.5,
          -1237.4
        ],
        [
          -782.2,
          -1235.8
        ],
        [
          -782.8,
          -1230.0
        ],
        [
          -779.0,
          -1222.6
        ],
        [
          -764.7,
          -1212.4
        ],
        [
          -761.3,
          -1205.5
        ]
      ]
    },
    {
      "name": null,
      "kind": "water",
      "points": [
        [
          -1002.3,
          -1038.0
        ],
        [
          -999.4,
          -1029.5
        ],
        [
          -1079.6,
          -1032.2
        ],
        [
          -1121.8,
          -1042.5
        ],
        [
          -1200.4,
          -1077.0
        ],
        [
          -1223.3,
          -1092.0
        ],
        [
          -1235.4,
          -1113.2
        ],
        [
          -1232.8,
          -1128.0
        ],
        [
          -1228.8,
          -1125.9
        ],
        [
          -1232.0,
          -1116.3
        ],
        [
          -1230.5,
          -1108.5
        ],
        [
          -1217.6,
          -1092.1
        ],
        [
          -1105.6,
          -1045.7
        ],
        [
          -1082.3,
          -1040.7
        ],
        [
          -1002.3,
          -1038.0
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "points": [
        [
          -1010.9,
          -1169.3
        ],
        [
          -1001.4,
          -1170.0
        ],
        [
          -989.1,
          -1041.9
        ],
        [
          -998.9,
          -1042.3
        ],
        [
          -1010.9,
          -1169.3
        ]
      ]
    },
    {
      "name": null,
      "kind": "water",
      "points": [
        [
          -974.8,
          -1009.4
        ],
        [
          -883.7,
          -1008.6
        ],
        [
          -806.9,
          -1016.5
        ],
        [
          -806.4,
          -1009.2
        ],
        [
          -858.0,
          -1002.9
        ],
        [
          -921.2,
          -1001.0
        ],
        [
          -972.7,
          -1002.6
        ],
        [
          -972.1,
          -1005.6
        ],
        [
          -979.0,
          -1005.9
        ],
        [
          -974.8,
          -1009.4
        ]
      ]
    },
    {
      "name": null,
      "kind": "water",
      "points": [
        [
          -942.1,
          -1045.1
        ],
        [
          -953.3,
          -1039.6
        ],
        [
          -871.6,
          -1040.1
        ],
        [
          -810.8,
          -1048.4
        ],
        [
          -811.4,
          -1052.8
        ],
        [
          -910.0,
          -1043.7
        ],
        [
          -942.1,
          -1045.1
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "points": [
        [
          -698.6,
          -1043.1
        ],
        [
          -714.1,
          -1046.9
        ],
        [
          -714.5,
          -1052.8
        ],
        [
          -690.0,
          -1076.9
        ],
        [
          -691.3,
          -1088.2
        ],
        [
          -701.7,
          -1108.7
        ],
        [
          -694.8,
          -1113.7
        ],
        [
          -676.5,
          -1083.0
        ],
        [
          -679.9,
          -1067.2
        ],
        [
          -699.1,
          -1051.9
        ],
        [
          -698.6,
          -1043.1
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "points": [
        [
          -745.0,
          -1170.2
        ],
        [
          -742.1,
          -1170.2
        ],
        [
          -754.2,
          -1142.0
        ],
        [
          -754.8,
          -1134.9
        ],
        [
          -752.0,
          -1130.8
        ],
        [
          -720.4,
          -1124.7
        ],
        [
          -694.8,
          -1113.7
        ],
        [
          -701.7,
          -1108.7
        ],
        [
          -718.6,
          -1118.3
        ],
        [
          -750.3,
          -1124.2
        ],
        [
          -756.6,
          -1129.4
        ],
        [
          -759.1,
          -1138.5
        ],
        [
          -757.6,
          -1147.5
        ],
        [
          -745.0,
          -1170.2
        ]
      ]
    }
  ]
};
