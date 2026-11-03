/**
 * Void M (Jatiwaringin-Pondok Gede) road and water geometry derived from OpenStreetMap.
 * Source: OpenStreetMap contributors, ODbL. Retrieved 2026-11-03 via the Overpass API.
 * Coordinates are stored directly in scene units using the unscaled GPS projection:
 *   x = (lng - 106.823048) * 14100
 *   z = (lat + 6.194957) * -14180
 * Coverage is clipped to x 960-1800 / z 960-1375 so the north edge meets Void L at z=960.
 * Curated to named arterial ways plus the 120 longest named residential corridors; unnamed roads,
 * footways, service roads, and flyovers are excluded. Japek toll ways and ways duplicating the
 * procedural Halim-Monumen corridor are dropped. Terminal Pinang Ranti lies west of the clip and
 * is served by the Tahap 2 access link in CityScene.js.
 */
export const VOID_M_OSM = {
  "meta": {
    "source": "OpenStreetMap contributors (ODbL)",
    "license": "ODbL 1.0",
    "retrieved": "2026-11-03",
    "api": "https://overpass-api.de/api/interpreter",
    "bbox": {
      "south": -6.2919,
      "west": 106.8911,
      "north": -6.2627,
      "east": 106.9507
    },
    "clipBox": {
      "minX": 960,
      "maxX": 1800,
      "minZ": 960,
      "maxZ": 1375
    },
    "projection": "projectGpsToScene",
    "projectionConstants": {
      "originLng": 106.823048,
      "originLat": -6.194957,
      "scaleX": 14100,
      "scaleZ": 14180
    },
    "simplification": 2,
    "roadCount": 252,
    "roadPointCount": 703,
    "waterwayCount": 27,
    "waterPointCount": 178,
    "waterBodyCount": 10,
    "note": "Jaringan jalan Jatiwaringin-Pondok Gede dan tata air Kali Sunter-Buaran-Kali Cakung pada klip x 960-1800 / z 960-1375. Kurasi: seluruh way arteri bernama dan 120 nama koridor permukiman terpanjang; jalan tanpa nama, footway, service, dan jalan layang dikecualikan. Way tol Japek serta duplikat koridor prosedural Halim-Monumen (>=60% panjang berjarak <12 unit) dibuang. Badan air bernama atau luas proyeksi minimal 80 unit persegi dipertahankan. Terminal Pinang Ranti di barat klip dilayani konektor akses Tahap 2."
  },
  "roads": [
    {
      "name": "Gang Mangga 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1345.5,
          1149.8
        ],
        [
          1341.4,
          1149
        ],
        [
          1339,
          1153
        ],
        [
          1317.6,
          1148.3
        ]
      ]
    },
    {
      "name": "Gang Sarin",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1535,
          1100.3
        ],
        [
          1551.5,
          1100.1
        ],
        [
          1552.5,
          1105.1
        ],
        [
          1586.9,
          1127.6
        ]
      ]
    },
    {
      "name": "Jalan Anggrek",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1516.5,
          983.7
        ],
        [
          1516.1,
          1005
        ]
      ]
    },
    {
      "name": "Jalan Anggrek",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1516.9,
          966.9
        ],
        [
          1516.5,
          983.7
        ]
      ]
    },
    {
      "name": "Jalan Anggrek",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1786.9,
          1371.7
        ],
        [
          1796,
          1351.6
        ]
      ]
    },
    {
      "name": "Jalan Angkatan Laut",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1482.7,
          1202.5
        ],
        [
          1485.8,
          1187.3
        ],
        [
          1490.6,
          1186.3
        ]
      ]
    },
    {
      "name": "Jalan Angkatan Laut",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1482.8,
          1252.4
        ],
        [
          1486.7,
          1232.6
        ],
        [
          1482.7,
          1202.5
        ]
      ]
    },
    {
      "name": "Jalan Angkatan Laut",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1490.6,
          1186.3
        ],
        [
          1493.8,
          1153.7
        ]
      ]
    },
    {
      "name": "Jalan Antara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1528.6,
          1214.9
        ],
        [
          1524.1,
          1209.1
        ],
        [
          1509.3,
          1201.9
        ],
        [
          1516.8,
          1180.7
        ]
      ]
    },
    {
      "name": "Jalan Antaran IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1516.8,
          1180.7
        ],
        [
          1523.2,
          1180.9
        ],
        [
          1525.7,
          1167.9
        ]
      ]
    },
    {
      "name": "Jalan Anyelir",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1783.7,
          1341.1
        ],
        [
          1780.4,
          1337.4
        ],
        [
          1785.9,
          1324.6
        ],
        [
          1800,
          1310.1
        ]
      ]
    },
    {
      "name": "Jalan Aradini Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1210.1,
          1267.6
        ],
        [
          1207.6,
          1251.7
        ],
        [
          1210.9,
          1229.7
        ]
      ]
    },
    {
      "name": "Jalan Aradini Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1210.9,
          1229.7
        ],
        [
          1213.6,
          1218.8
        ],
        [
          1230.4,
          1218.9
        ]
      ]
    },
    {
      "name": "Jalan Arjuna",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1698.6,
          1281.2
        ],
        [
          1704.7,
          1275.2
        ],
        [
          1705,
          1266
        ]
      ]
    },
    {
      "name": "Jalan Arjuna",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1705,
          1264.8
        ],
        [
          1704.6,
          1249.1
        ]
      ]
    },
    {
      "name": "Jalan Bacang",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1043.4,
          1332.5
        ],
        [
          1053.8,
          1340.2
        ],
        [
          1067.3,
          1343.2
        ]
      ]
    },
    {
      "name": "Jalan Bacang",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1067.3,
          1343.2
        ],
        [
          1105.7,
          1337.5
        ]
      ]
    },
    {
      "name": "Jalan Bahagia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1463.3,
          1323.4
        ],
        [
          1454.8,
          1348.1
        ],
        [
          1447.4,
          1358.4
        ]
      ]
    },
    {
      "name": "Jalan Balongan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1426.6,
          1151.9
        ],
        [
          1440.6,
          1109.7
        ]
      ]
    },
    {
      "name": "Jalan Berlian Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1690.2,
          1206.8
        ],
        [
          1689.1,
          1201.6
        ],
        [
          1698,
          1192.5
        ]
      ]
    },
    {
      "name": "Jalan Berlian Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1698,
          1192.5
        ],
        [
          1709.5,
          1169.3
        ]
      ]
    },
    {
      "name": "Jalan Bima",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1117,
          1170.7
        ],
        [
          1100.7,
          1175.3
        ],
        [
          1106.4,
          1225.6
        ]
      ]
    },
    {
      "name": "Jalan Bima",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1684.8,
          1318.6
        ],
        [
          1686.6,
          1294
        ],
        [
          1698.1,
          1282.4
        ]
      ]
    },
    {
      "name": "Jalan Bina Lontar",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1250.9,
          1053.8
        ],
        [
          1204.8,
          1059.1
        ]
      ]
    },
    {
      "name": "Jalan Bina Masa",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1183.5,
          1068.6
        ],
        [
          1170.5,
          1074.5
        ],
        [
          1168.9,
          1069.9
        ]
      ]
    },
    {
      "name": "Jalan Bina Masa",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1204.8,
          1059.1
        ],
        [
          1183.5,
          1068.6
        ]
      ]
    },
    {
      "name": "Jalan Bina Yasa",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1168.9,
          1069.9
        ],
        [
          1200.5,
          1055.8
        ]
      ]
    },
    {
      "name": "Jalan Bintan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1764.9,
          1027.1
        ],
        [
          1775.4,
          988.2
        ]
      ]
    },
    {
      "name": "Jalan Birun Indah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1248.7,
          1034.5
        ],
        [
          1217.6,
          1040.1
        ]
      ]
    },
    {
      "name": "Jalan Bongas Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1439.5,
          1139.9
        ],
        [
          1448.3,
          1107.7
        ]
      ]
    },
    {
      "name": "Jalan Bontang",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1431.7,
          1137.7
        ],
        [
          1398.8,
          1130.6
        ]
      ]
    },
    {
      "name": "Jalan Bougenvile",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1310.6,
          1214.8
        ],
        [
          1311.5,
          1235.2
        ]
      ]
    },
    {
      "name": "Jalan Bougenvile",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1533.6,
          973.8
        ],
        [
          1516.8,
          973.7
        ]
      ]
    },
    {
      "name": "Jalan Bukit Dago",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1579.4,
          1098.3
        ],
        [
          1584.5,
          1065.9
        ],
        [
          1581.9,
          1038.6
        ],
        [
          1587.5,
          1020.9
        ],
        [
          1579.7,
          1016.6
        ]
      ]
    },
    {
      "name": "Jalan Bukit Kemuning",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1553.3,
          1044.6
        ],
        [
          1570.6,
          1021.8
        ],
        [
          1577.4,
          1020.8
        ]
      ]
    },
    {
      "name": "Jalan Bumi Jatiwaringin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1272.4,
          1136.8
        ],
        [
          1302.8,
          1138.6
        ]
      ]
    },
    {
      "name": "Jalan Bumi Jatiwaringin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1277.1,
          1132.1
        ],
        [
          1298.7,
          1133.9
        ]
      ]
    },
    {
      "name": "Jalan Bumi Jatiwaringin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1277.6,
          1128.4
        ],
        [
          1299.3,
          1129.7
        ]
      ]
    },
    {
      "name": "Jalan Bumi Jatiwaringin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1278.1,
          1124.4
        ],
        [
          1299.7,
          1125.9
        ]
      ]
    },
    {
      "name": "Jalan Bumi Jatiwaringin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1298.6,
          1116.7
        ],
        [
          1302.4,
          1116.7
        ],
        [
          1303.6,
          1122
        ],
        [
          1302.8,
          1138.6
        ]
      ]
    },
    {
      "name": "Jalan Caman Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1737,
          960
        ],
        [
          1721.4,
          979.7
        ]
      ]
    },
    {
      "name": "Jalan Celepuk I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1538.9,
          1375
        ],
        [
          1573.9,
          1283
        ]
      ]
    },
    {
      "name": "Jalan Celepuk II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1569.7,
          1347.5
        ],
        [
          1563.6,
          1357.3
        ],
        [
          1559,
          1375
        ]
      ]
    },
    {
      "name": "Jalan Celepuk II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1576.8,
          1318.4
        ],
        [
          1573.3,
          1329.2
        ],
        [
          1576.3,
          1333.2
        ],
        [
          1569.7,
          1347.5
        ]
      ]
    },
    {
      "name": "Jalan Celepuk II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1580.7,
          1284.5
        ],
        [
          1574.8,
          1309.2
        ]
      ]
    },
    {
      "name": "Jalan Cempaka Jaya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1240.3,
          965.4
        ],
        [
          1276.5,
          962.8
        ]
      ]
    },
    {
      "name": "Jalan Cendrawasih",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1347.1,
          1272
        ],
        [
          1357.2,
          1265.4
        ],
        [
          1362.2,
          1253
        ]
      ]
    },
    {
      "name": "Jalan Cendrawasih",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1349.6,
          1268.9
        ],
        [
          1343.2,
          1282.6
        ]
      ]
    },
    {
      "name": "Jalan Cendrawasih",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1362.2,
          1253
        ],
        [
          1370.3,
          1234.4
        ]
      ]
    },
    {
      "name": "Jalan Cendrawasih",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1370.3,
          1234.4
        ],
        [
          1379.8,
          1213.2
        ]
      ]
    },
    {
      "name": "Jalan Cendrawasih",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1379.5,
          1214.3
        ],
        [
          1357.9,
          1265.8
        ],
        [
          1346.6,
          1272.8
        ]
      ]
    },
    {
      "name": "Jalan Dahlia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1540.9,
          987.2
        ],
        [
          1525.4,
          987
        ]
      ]
    },
    {
      "name": "Jalan Dahlia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1793.4,
          1325.9
        ],
        [
          1779.9,
          1365.1
        ]
      ]
    },
    {
      "name": "Jalan Delta Zamrud",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1401,
          1041
        ],
        [
          1405.9,
          1060.7
        ]
      ]
    },
    {
      "name": "Jalan Delta Zamrud",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1405.9,
          1060.7
        ],
        [
          1404.9,
          1081.1
        ]
      ]
    },
    {
      "name": "Jalan Destoroto",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1121.9,
          1225.2
        ],
        [
          1119.1,
          1195.4
        ],
        [
          1124.2,
          1194.8
        ]
      ]
    },
    {
      "name": "Jalan Dokter Ratna",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1776.9,
          1300.9
        ],
        [
          1780,
          1285.3
        ],
        [
          1790.7,
          1267.2
        ],
        [
          1800,
          1212.3
        ]
      ]
    },
    {
      "name": "Jalan Dokter Ratna",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1800,
          1080.5
        ],
        [
          1786.9,
          1047.3
        ],
        [
          1786.5,
          1031.1
        ],
        [
          1793.5,
          983.7
        ],
        [
          1800,
          961.3
        ]
      ]
    },
    {
      "name": "Jalan Dokter Ratna",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1800,
          1207.3
        ],
        [
          1764.5,
          1197.5
        ]
      ]
    },
    {
      "name": "Jalan Dupa Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1557.2,
          1177.1
        ],
        [
          1577.3,
          1181.3
        ],
        [
          1579.1,
          1178.3
        ]
      ]
    },
    {
      "name": "Jalan Dupa Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1579.1,
          1178.3
        ],
        [
          1587,
          1180
        ],
        [
          1589.2,
          1177.5
        ],
        [
          1603.3,
          1182
        ],
        [
          1619.8,
          1177.1
        ]
      ]
    },
    {
      "name": "Jalan Dupa Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1620.8,
          1176.7
        ],
        [
          1639.9,
          1178.6
        ]
      ]
    },
    {
      "name": "Jalan Duta Indah Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1594.3,
          1286
        ],
        [
          1597.4,
          1279.2
        ],
        [
          1623.5,
          1259
        ],
        [
          1624.8,
          1251.3
        ]
      ]
    },
    {
      "name": "Jalan Fisika 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1644.7,
          1109.1
        ],
        [
          1665.6,
          1082.3
        ]
      ]
    },
    {
      "name": "Jalan Gampit Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1268.1,
          1158.5
        ],
        [
          1288.4,
          1159.2
        ],
        [
          1306.6,
          1163.6
        ]
      ]
    },
    {
      "name": "Jalan Gampit Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1306.6,
          1163.6
        ],
        [
          1340.6,
          1169.3
        ],
        [
          1348.9,
          1174.8
        ]
      ]
    },
    {
      "name": "Jalan Gampit Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1354.5,
          1178
        ],
        [
          1371.2,
          1183.1
        ]
      ]
    },
    {
      "name": "Jalan Gatotkaca Dirgantara II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1046.4,
          1304
        ],
        [
          1072.2,
          1269.1
        ],
        [
          1082,
          1264.6
        ],
        [
          1117.6,
          1258.7
        ]
      ]
    },
    {
      "name": "Jalan Gorda",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1025.1,
          1342.3
        ],
        [
          1025.2,
          1366.9
        ],
        [
          1030.4,
          1375
        ]
      ]
    },
    {
      "name": "Jalan Guntur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1558.7,
          1230.4
        ],
        [
          1554.2,
          1245
        ]
      ]
    },
    {
      "name": "Jalan Guntur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1563.4,
          1212.9
        ],
        [
          1559.2,
          1230
        ]
      ]
    },
    {
      "name": "Jalan Haji D' Jain",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1778.4,
          1103.7
        ],
        [
          1797.9,
          1102.3
        ],
        [
          1800,
          1098.9
        ]
      ]
    },
    {
      "name": "Jalan Haji D' Jain",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1778.4,
          1103.7
        ],
        [
          1781.3,
          1124.9
        ]
      ]
    },
    {
      "name": "Jalan Haji Gemin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1729.3,
          1302.6
        ],
        [
          1729,
          1286.3
        ],
        [
          1733.7,
          1265.9
        ],
        [
          1742.1,
          1259.6
        ],
        [
          1748.2,
          1234
        ],
        [
          1753.3,
          1235.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Gemin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1753.3,
          1235.7
        ],
        [
          1764.5,
          1197.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Gemin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1764.5,
          1197.5
        ],
        [
          1770.6,
          1183.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Harun",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1385.4,
          1334.4
        ],
        [
          1384.3,
          1339.6
        ],
        [
          1380.3,
          1339.8
        ],
        [
          1375.7,
          1361.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Makmur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1025.3,
          1363.2
        ],
        [
          1051.6,
          1359.6
        ],
        [
          1060,
          1362.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Mean Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1435.9,
          1043.8
        ],
        [
          1460.7,
          1043.6
        ],
        [
          1462.8,
          1046.4
        ],
        [
          1469,
          1046.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Mean Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1460.7,
          1062.2
        ],
        [
          1466.1,
          1061.9
        ],
        [
          1469,
          1046.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Mean Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1469,
          1046.4
        ],
        [
          1467.9,
          1026.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Mughni",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1655.1,
          1353.7
        ],
        [
          1704,
          1372.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Muhyin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1241.1,
          979.7
        ],
        [
          1275,
          981.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Muhyin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1275,
          981.4
        ],
        [
          1299.9,
          979.1
        ],
        [
          1303.9,
          971.6
        ],
        [
          1309.2,
          972
        ]
      ]
    },
    {
      "name": "Jalan Haji Muhyin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1287.3,
          997.7
        ],
        [
          1287,
          981
        ]
      ]
    },
    {
      "name": "Jalan Haji Muhyin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1311,
          960.9
        ],
        [
          1328.7,
          962.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Nawin Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1327.9,
          966.3
        ],
        [
          1344.4,
          969.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Nawin Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1344.4,
          969.6
        ],
        [
          1384.3,
          977.2
        ]
      ]
    },
    {
      "name": "Jalan Haji Rijin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1460.7,
          1200.9
        ],
        [
          1467,
          1215.3
        ],
        [
          1485.3,
          1229.3
        ]
      ]
    },
    {
      "name": "Jalan Haji Sulaiman",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1679.7,
          1094.9
        ],
        [
          1667.1,
          1120.9
        ],
        [
          1661.3,
          1120.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Sulaiman",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1689.4,
          1082.3
        ],
        [
          1682.6,
          1095.4
        ],
        [
          1679.7,
          1094.9
        ]
      ]
    },
    {
      "name": "Jalan Haji Toha",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1371.2,
          1183.1
        ],
        [
          1402.5,
          1198.9
        ]
      ]
    },
    {
      "name": "Jalan Haji Toha",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1429.9,
          1207.8
        ],
        [
          1402.5,
          1198.9
        ]
      ]
    },
    {
      "name": "Jalan Haji Toha",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1429.9,
          1207.8
        ],
        [
          1432.7,
          1242.2
        ],
        [
          1439.2,
          1244.5
        ],
        [
          1440.1,
          1266
        ]
      ]
    },
    {
      "name": "Jalan Hankam Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1262.9,
          1280.9
        ],
        [
          1316.2,
          1346.3
        ]
      ]
    },
    {
      "name": "Jalan Hankam Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1318.4,
          1349
        ],
        [
          1337.1,
          1375
        ]
      ]
    },
    {
      "name": "Jalan Ikan Paus Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1744.1,
          1067.1
        ],
        [
          1742.2,
          1072.9
        ],
        [
          1745.9,
          1083.7
        ]
      ]
    },
    {
      "name": "Jalan Ikan Paus Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1745.9,
          1083.7
        ],
        [
          1758.6,
          1117.6
        ]
      ]
    },
    {
      "name": "Jalan Indrajid",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1111.7,
          1172.1
        ],
        [
          1113,
          1186.3
        ],
        [
          1107.9,
          1187.1
        ]
      ]
    },
    {
      "name": "Jalan Indrajid",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1111.8,
          1226.1
        ],
        [
          1107.9,
          1187.1
        ]
      ]
    },
    {
      "name": "Jalan Irian Jaya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1744.1,
          1067.1
        ],
        [
          1753.3,
          1033.5
        ]
      ]
    },
    {
      "name": "Jalan Jati Kramat Indah II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1652.1,
          1318.8
        ],
        [
          1666.1,
          1283.5
        ],
        [
          1677.6,
          1222.5
        ],
        [
          1690.2,
          1206.8
        ]
      ]
    },
    {
      "name": "Jalan Jati Luhur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1390.6,
          997.5
        ],
        [
          1392.6,
          1012.6
        ]
      ]
    },
    {
      "name": "Jalan Jati Luhur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1392.6,
          1012.6
        ],
        [
          1394.6,
          1031.5
        ]
      ]
    },
    {
      "name": "Jalan Jati Makmur",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1532.7,
          1209.7
        ],
        [
          1506.1,
          1245
        ],
        [
          1498.1,
          1249.4
        ]
      ]
    },
    {
      "name": "Jalan Jati Utama Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1707.5,
          977
        ],
        [
          1691.9,
          960
        ]
      ]
    },
    {
      "name": "Jalan Jati Waringin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1243.8,
          997.4
        ],
        [
          1238.2,
          960
        ]
      ]
    },
    {
      "name": "Jalan Jati Waringin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1280.1,
          1242.1
        ],
        [
          1243.8,
          997.4
        ]
      ]
    },
    {
      "name": "Jalan Jati Waringin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1280.1,
          1242.1
        ],
        [
          1282.8,
          1264
        ]
      ]
    },
    {
      "name": "Jalan Jatianom",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1399.9,
          980.2
        ],
        [
          1401.9,
          996.9
        ]
      ]
    },
    {
      "name": "Jalan Jatianom",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1401.9,
          996.9
        ],
        [
          1404.3,
          1019.4
        ]
      ]
    },
    {
      "name": "Jalan Jatibening",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1725.4,
          974.6
        ],
        [
          1718.5,
          960
        ]
      ]
    },
    {
      "name": "Jalan Jatikramat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1679.5,
          1145.7
        ],
        [
          1687.7,
          1115.9
        ]
      ]
    },
    {
      "name": "Jalan Jatikramat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1688,
          1114.9
        ],
        [
          1693.4,
          1100.4
        ]
      ]
    },
    {
      "name": "Jalan Jatiwangi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1406.2,
          996.8
        ],
        [
          1404.1,
          980
        ]
      ]
    },
    {
      "name": "Jalan Jatiwangi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1411.2,
          1036.9
        ],
        [
          1406.2,
          996.8
        ]
      ]
    },
    {
      "name": "Jalan K. H. Ahmad Madani",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1459.1,
          1222.6
        ],
        [
          1469.1,
          1224
        ],
        [
          1479.1,
          1237.7
        ],
        [
          1486.6,
          1237
        ]
      ]
    },
    {
      "name": "Jalan K.H. Mohammad Seman",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1795.6,
          1071.1
        ],
        [
          1786.3,
          1072.2
        ],
        [
          1749.9,
          1064.6
        ],
        [
          1745.5,
          1067.6
        ]
      ]
    },
    {
      "name": "Jalan Kalimantan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1775.7,
          970.6
        ],
        [
          1763.6,
          1013.7
        ]
      ]
    },
    {
      "name": "Jalan Kaput",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1527.8,
          1258.2
        ],
        [
          1525.7,
          1221.2
        ]
      ]
    },
    {
      "name": "Jalan Karmila Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1413.3,
          1080.3
        ],
        [
          1443.7,
          1083.3
        ]
      ]
    },
    {
      "name": "Jalan Karmila Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1443.7,
          1083.3
        ],
        [
          1443.7,
          1098.9
        ]
      ]
    },
    {
      "name": "Jalan Katelia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1511.7,
          1001
        ],
        [
          1512.2,
          983.6
        ]
      ]
    },
    {
      "name": "Jalan Katelia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1512.2,
          983.6
        ],
        [
          1512.6,
          966.7
        ]
      ]
    },
    {
      "name": "Jalan Kelud Kiri Atas Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1495.2,
          1015.3
        ],
        [
          1494.8,
          990.1
        ],
        [
          1490.9,
          989.1
        ],
        [
          1491.3,
          983.9
        ]
      ]
    },
    {
      "name": "Jalan Kelud Kiri Atas Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1495.2,
          1015.3
        ],
        [
          1495.6,
          1030.8
        ]
      ]
    },
    {
      "name": "Jalan Kemang Sari II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1638.3,
          1064.2
        ],
        [
          1603.2,
          1053.8
        ]
      ]
    },
    {
      "name": "Jalan Kemang Sari Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1532.7,
          1209.7
        ],
        [
          1557.2,
          1177.1
        ],
        [
          1579.7,
          1136.7
        ],
        [
          1608,
          1099.4
        ],
        [
          1667.7,
          1034.7
        ]
      ]
    },
    {
      "name": "Jalan Klamono",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1371.2,
          1183.1
        ],
        [
          1387.7,
          1158.6
        ],
        [
          1402,
          1119.4
        ]
      ]
    },
    {
      "name": "Jalan Klamono",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1402.7,
          1119.2
        ],
        [
          1412,
          1097.3
        ],
        [
          1413.4,
          1060
        ],
        [
          1429.2,
          1057.8
        ],
        [
          1429.7,
          1054.8
        ]
      ]
    },
    {
      "name": "Jalan Klamono",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1429.9,
          1053.6
        ],
        [
          1430.8,
          1049.7
        ],
        [
          1435.6,
          1047.9
        ],
        [
          1435,
          1039.7
        ]
      ]
    },
    {
      "name": "Jalan Klayan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1475.3,
          1120
        ],
        [
          1453.8,
          1129.5
        ],
        [
          1444.4,
          1140.5
        ],
        [
          1432.7,
          1137.9
        ]
      ]
    },
    {
      "name": "Jalan Kokrosono",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1148.3,
          1274.5
        ],
        [
          1143.5,
          1223.3
        ]
      ]
    },
    {
      "name": "Jalan Kramat Pangeran Syarif",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1108,
          1287.5
        ],
        [
          1101,
          1323.7
        ],
        [
          1104.9,
          1332.7
        ]
      ]
    },
    {
      "name": "Jalan Kukila Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1184.9,
          1266.1
        ],
        [
          1188.3,
          1227.7
        ]
      ]
    },
    {
      "name": "Jalan Kukila Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1188.3,
          1227.7
        ],
        [
          1200.1,
          1204.3
        ],
        [
          1207.7,
          1176.7
        ]
      ]
    },
    {
      "name": "Jalan Kumboyomo",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1147.4,
          1263.8
        ],
        [
          1163.6,
          1261.8
        ],
        [
          1158.5,
          1222
        ]
      ]
    },
    {
      "name": "Jalan Kusuma Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1281.3,
          1332.8
        ],
        [
          1284,
          1349.3
        ],
        [
          1282.3,
          1366.7
        ]
      ]
    },
    {
      "name": "Jalan Kutilang",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1354.2,
          1274
        ],
        [
          1363.1,
          1276.6
        ],
        [
          1366.1,
          1269.1
        ]
      ]
    },
    {
      "name": "Jalan Kutilang",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1366.1,
          1269.1
        ],
        [
          1372.1,
          1254.4
        ]
      ]
    },
    {
      "name": "Jalan Lawi Lawi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1442.2,
          1100.1
        ],
        [
          1411.7,
          1098.1
        ]
      ]
    },
    {
      "name": "Jalan Lubang Buaya Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1164.8,
          1375
        ],
        [
          1184.6,
          1346
        ],
        [
          1185.9,
          1339.8
        ],
        [
          1156.2,
          1295.9
        ]
      ]
    },
    {
      "name": "Jalan Makom Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1636.2,
          1201.1
        ],
        [
          1633.6,
          1200.1
        ],
        [
          1639.9,
          1178.6
        ]
      ]
    },
    {
      "name": "Jalan Makom Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1639.9,
          1178.6
        ],
        [
          1644.1,
          1157.8
        ]
      ]
    },
    {
      "name": "Jalan Manunggal",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1467.2,
          1262.1
        ],
        [
          1448.8,
          1301.3
        ]
      ]
    },
    {
      "name": "Jalan Masjid",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1714.2,
          1059.3
        ],
        [
          1714.8,
          1050
        ],
        [
          1707.8,
          1046.9
        ],
        [
          1708.9,
          1039.4
        ],
        [
          1692.4,
          1036.6
        ]
      ]
    },
    {
      "name": "Jalan Masjid",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1728.4,
          1135.3
        ],
        [
          1729.3,
          1128.9
        ],
        [
          1724.3,
          1126.5
        ],
        [
          1729,
          1096.2
        ],
        [
          1721.2,
          1093.6
        ],
        [
          1722,
          1079.3
        ],
        [
          1712.5,
          1076.7
        ],
        [
          1713.3,
          1068
        ]
      ]
    },
    {
      "name": "Jalan Masjid 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1246.1,
          1239.8
        ],
        [
          1244.2,
          1179.2
        ]
      ]
    },
    {
      "name": "Jalan Masjid Al Muhajirin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1776.1,
          1179.3
        ],
        [
          1770.6,
          1183.6
        ],
        [
          1740.9,
          1178.4
        ]
      ]
    },
    {
      "name": "Jalan Masjid Al Muhajirin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1800,
          1193.3
        ],
        [
          1792.9,
          1193.5
        ],
        [
          1788,
          1180.9
        ],
        [
          1778.1,
          1179.4
        ]
      ]
    },
    {
      "name": "Jalan Masjid Al Umar",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1184,
          1319
        ],
        [
          1181.6,
          1315.7
        ],
        [
          1185.7,
          1304.3
        ],
        [
          1197.5,
          1291
        ],
        [
          1191.7,
          1286
        ],
        [
          1198,
          1274.4
        ]
      ]
    },
    {
      "name": "Jalan Masjid Al Umar 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1209.7,
          1274.5
        ],
        [
          1211,
          1289.9
        ],
        [
          1220.1,
          1295.2
        ],
        [
          1218.2,
          1298.3
        ],
        [
          1223.1,
          1302.1
        ],
        [
          1225.3,
          1319.2
        ],
        [
          1220,
          1331.1
        ],
        [
          1194.3,
          1328.9
        ],
        [
          1188.5,
          1326.7
        ],
        [
          1185.6,
          1320.3
        ]
      ]
    },
    {
      "name": "Jalan Masjid Hudal Islam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1390.2,
          1314.8
        ],
        [
          1385.4,
          1334.4
        ]
      ]
    },
    {
      "name": "Jalan Masjid Hudal Islam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1405,
          1312.5
        ],
        [
          1401.6,
          1322.9
        ],
        [
          1411.9,
          1325.7
        ]
      ]
    },
    {
      "name": "Jalan Masjid Nurul Ihsan",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1227,
          1265
        ],
        [
          1232.2,
          1260.1
        ],
        [
          1235.8,
          1248.3
        ],
        [
          1248.9,
          1243.8
        ],
        [
          1280.1,
          1242.1
        ]
      ]
    },
    {
      "name": "Jalan Masjid Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1444,
          1023.7
        ],
        [
          1445.9,
          971.7
        ],
        [
          1440.5,
          960
        ]
      ]
    },
    {
      "name": "Jalan Masjid VI",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1504.9,
          1030
        ],
        [
          1498.2,
          1031.5
        ],
        [
          1488.9,
          1027.7
        ],
        [
          1467.9,
          1026.6
        ],
        [
          1466,
          1022.4
        ],
        [
          1458,
          1023.4
        ]
      ]
    },
    {
      "name": "Jalan Masjid VI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1556.7,
          1021.4
        ],
        [
          1550.6,
          1026.2
        ],
        [
          1547.5,
          1035.9
        ],
        [
          1526.7,
          1035.1
        ],
        [
          1524.9,
          1031.5
        ],
        [
          1512.5,
          1029.4
        ]
      ]
    },
    {
      "name": "Jalan Mawar Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1486,
          1359
        ],
        [
          1542.1,
          1360.8
        ]
      ]
    },
    {
      "name": "Jalan Melati Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1476.6,
          1372.6
        ],
        [
          1479.5,
          1359.8
        ],
        [
          1485.5,
          1359
        ]
      ]
    },
    {
      "name": "Jalan Melati Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1606.5,
          1240.5
        ],
        [
          1621.2,
          1260.7
        ]
      ]
    },
    {
      "name": "Jalan Melati Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1706.3,
          1249
        ],
        [
          1705.8,
          1223
        ]
      ]
    },
    {
      "name": "Jalan Melur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1776,
          1363.3
        ],
        [
          1786.8,
          1332.4
        ]
      ]
    },
    {
      "name": "Jalan Merbabu",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1516.9,
          966.9
        ],
        [
          1483.9,
          966.1
        ]
      ]
    },
    {
      "name": "Jalan Mesjid Jati Cempaka",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1444,
          1023.7
        ],
        [
          1443.3,
          1027.2
        ],
        [
          1435.8,
          1028
        ],
        [
          1435,
          1039.7
        ]
      ]
    },
    {
      "name": "Jalan Ontorejo",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1063.2,
          1291.4
        ],
        [
          1082.4,
          1272.4
        ],
        [
          1095.9,
          1270.3
        ],
        [
          1098.2,
          1280.1
        ]
      ]
    },
    {
      "name": "Jalan Palan Palan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1596.8,
          1162.3
        ],
        [
          1616.5,
          1175.5
        ]
      ]
    },
    {
      "name": "Jalan Palan Palan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1615.1,
          1138.9
        ],
        [
          1596.8,
          1162.3
        ]
      ]
    },
    {
      "name": "Jalan Palan Palan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1616.5,
          1175.5
        ],
        [
          1621.4,
          1143
        ]
      ]
    },
    {
      "name": "Jalan Pangrango",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1527.3,
          960
        ],
        [
          1548.5,
          971.8
        ],
        [
          1557.7,
          972.2
        ]
      ]
    },
    {
      "name": "Jalan Pembangunan III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1531.4,
          1013.2
        ],
        [
          1515,
          1014.1
        ]
      ]
    },
    {
      "name": "Jalan Pembangunan III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1535.4,
          1013.3
        ],
        [
          1537.6,
          1028.1
        ]
      ]
    },
    {
      "name": "Jalan Pendidikan Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1678.8,
          1036
        ],
        [
          1677.4,
          1045.1
        ],
        [
          1661.6,
          1068.3
        ]
      ]
    },
    {
      "name": "Jalan Permadi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          960,
          1267.8
        ],
        [
          976.1,
          1299.8
        ],
        [
          977.4,
          1322.1
        ]
      ]
    },
    {
      "name": "Jalan Permadi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          966.3,
          1216.3
        ],
        [
          960,
          1237.5
        ]
      ]
    },
    {
      "name": "Jalan Permadi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          973.9,
          1159
        ],
        [
          968.2,
          1201.7
        ]
      ]
    },
    {
      "name": "Jalan Permadi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          977.5,
          1323
        ],
        [
          979.6,
          1343.6
        ]
      ]
    },
    {
      "name": "Jalan Permata Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1702.4,
          1194.6
        ],
        [
          1728.4,
          1135.3
        ]
      ]
    },
    {
      "name": "Jalan Pondok Gede",
      "type": "primary",
      "width": 18,
      "points": [
        [
          980,
          1347.3
        ],
        [
          960,
          1349.3
        ]
      ]
    },
    {
      "name": "Jalan Pondok Gede",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1054.3,
          1320.6
        ],
        [
          1040.5,
          1335.2
        ],
        [
          1030.4,
          1340.8
        ],
        [
          991.5,
          1346
        ]
      ]
    },
    {
      "name": "Jalan Pondok Gede",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1136.1,
          1275.9
        ],
        [
          1083.6,
          1283
        ],
        [
          1054.3,
          1320.6
        ]
      ]
    },
    {
      "name": "Jalan Pondok Gede",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1181.6,
          1270.6
        ],
        [
          1153.1,
          1273.9
        ]
      ]
    },
    {
      "name": "Jalan Pondok Gede",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1206.9,
          1268
        ],
        [
          1185.2,
          1270.5
        ]
      ]
    },
    {
      "name": "Jalan Pondok Gede",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1243.2,
          1283.4
        ],
        [
          1226.6,
          1268.8
        ]
      ]
    },
    {
      "name": "Jalan Pondok Gede",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1258.3,
          1282.5
        ],
        [
          1247.5,
          1285.6
        ],
        [
          1243.2,
          1283.4
        ]
      ]
    },
    {
      "name": "Jalan Pulau Pejaba",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1447.9,
          1149.7
        ],
        [
          1475.2,
          1133.1
        ]
      ]
    },
    {
      "name": "Jalan Pulau Tanabala",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1455,
          1160.8
        ],
        [
          1485.5,
          1141.7
        ]
      ]
    },
    {
      "name": "Jalan Punto Dewo",
      "type": "residential",
      "width": 10,
      "points": [
        [
          991.2,
          1342.6
        ],
        [
          1026.1,
          1338.7
        ]
      ]
    },
    {
      "name": "Jalan Punto Dewo",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1026.1,
          1338.7
        ],
        [
          1045.2,
          1328.7
        ],
        [
          1081.4,
          1281.1
        ],
        [
          1097.5,
          1276.8
        ]
      ]
    },
    {
      "name": "Jalan Raflesia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1478,
          1367.2
        ],
        [
          1510.4,
          1372.6
        ]
      ]
    },
    {
      "name": "Jalan Rajawali",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1373.7,
          1230.9
        ],
        [
          1389.3,
          1237.7
        ]
      ]
    },
    {
      "name": "Jalan Rajawali",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1394.9,
          1224.1
        ],
        [
          1382.7,
          1252.4
        ]
      ]
    },
    {
      "name": "Jalan Rambutan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1570.8,
          1213.2
        ],
        [
          1573.4,
          1180.8
        ]
      ]
    },
    {
      "name": "Jalan Rawa Indah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1246.4,
          1015.5
        ],
        [
          1272.8,
          1019.1
        ]
      ]
    },
    {
      "name": "Jalan Rawa Indah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1256.4,
          1016.5
        ],
        [
          1262.4,
          1007.2
        ],
        [
          1279.5,
          1000.5
        ]
      ]
    },
    {
      "name": "Jalan Rawa Indah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1279.5,
          1000.5
        ],
        [
          1280.4,
          997.6
        ],
        [
          1308.1,
          998.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Al Ihsan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1582,
          1010.7
        ],
        [
          1566.1,
          1007.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Al Ihsan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1667.7,
          1034.7
        ],
        [
          1631.4,
          1024.1
        ],
        [
          1598.1,
          1010
        ],
        [
          1583.5,
          1010.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Jati Makmur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1384.2,
          1300.2
        ],
        [
          1367.7,
          1298.6
        ],
        [
          1332.3,
          1277.9
        ],
        [
          1284.1,
          1268.4
        ]
      ]
    },
    {
      "name": "Jalan Raya Jati Makmur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1440.1,
          1266
        ],
        [
          1384.2,
          1300.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Jati Makmur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1467.2,
          1262.1
        ],
        [
          1440.1,
          1266
        ]
      ]
    },
    {
      "name": "Jalan Raya Jati Makmur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1487.9,
          1251
        ],
        [
          1467.2,
          1262.1
        ]
      ]
    },
    {
      "name": "Jalan Raya Jati Makmur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1545.6,
          1269.7
        ],
        [
          1493.7,
          1250.8
        ]
      ]
    },
    {
      "name": "Jalan Raya Jati Makmur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1563.2,
          1278.7
        ],
        [
          1545.6,
          1269.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Jati Makmur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1591.1,
          1289.6
        ],
        [
          1563.2,
          1278.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Jati Makmur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1592.2,
          1290.3
        ],
        [
          1604.9,
          1291.7
        ],
        [
          1646.3,
          1316.3
        ],
        [
          1666.5,
          1321.3
        ]
      ]
    },
    {
      "name": "Jalan Raya Jatibening",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1692.4,
          1036.6
        ],
        [
          1706.4,
          998.3
        ],
        [
          1721.4,
          979.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Jatikramat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1666.5,
          1321.3
        ],
        [
          1684.8,
          1318.6
        ],
        [
          1753,
          1296.4
        ],
        [
          1762.9,
          1295.7
        ],
        [
          1776.9,
          1300.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Jatimekar",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1776.9,
          1300.9
        ],
        [
          1792,
          1306.6
        ],
        [
          1800,
          1306.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Kodau",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1647.8,
          1375
        ],
        [
          1666.5,
          1321.3
        ]
      ]
    },
    {
      "name": "Jalan Resibismo",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1128.9,
          1194.1
        ],
        [
          1132.6,
          1224.3
        ]
      ]
    },
    {
      "name": "Jalan Sawo",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1675.4,
          1178.8
        ],
        [
          1658.5,
          1174.8
        ],
        [
          1658,
          1178.1
        ],
        [
          1639.9,
          1178.6
        ]
      ]
    },
    {
      "name": "Jalan Sejati Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1521.1,
          1099.4
        ],
        [
          1505.4,
          1041
        ],
        [
          1504.9,
          1030
        ]
      ]
    },
    {
      "name": "Jalan Sejati Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1525.7,
          1167.9
        ],
        [
          1529.8,
          1160.9
        ],
        [
          1531.8,
          1130.6
        ],
        [
          1530.7,
          1112.7
        ],
        [
          1526.7,
          1112
        ]
      ]
    },
    {
      "name": "Jalan Sejati Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1526.7,
          1112
        ],
        [
          1525.8,
          1100.7
        ],
        [
          1521.1,
          1099.4
        ]
      ]
    },
    {
      "name": "Jalan Semar I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1112.8,
          1244.8
        ],
        [
          1161.4,
          1240.1
        ]
      ]
    },
    {
      "name": "Jalan Semar II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1110.7,
          1226.2
        ],
        [
          1158.5,
          1222
        ]
      ]
    },
    {
      "name": "Jalan Semeru",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1483.6,
          983.6
        ],
        [
          1484,
          960
        ]
      ]
    },
    {
      "name": "Jalan Semeru",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1553.8,
          1230.3
        ],
        [
          1549.7,
          1243.6
        ],
        [
          1554.2,
          1245
        ]
      ]
    },
    {
      "name": "Jalan Sengkuni",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1155.7,
          1262.9
        ],
        [
          1151.9,
          1222.6
        ]
      ]
    },
    {
      "name": "Jalan Setia 1",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1250.9,
          1053.8
        ],
        [
          1280.5,
          1052.6
        ],
        [
          1299.8,
          1056.2
        ],
        [
          1302.9,
          1065.4
        ],
        [
          1318.1,
          1042.3
        ],
        [
          1329.5,
          1044.4
        ],
        [
          1352,
          1041.1
        ],
        [
          1365.9,
          1043.6
        ],
        [
          1405.2,
          1039.7
        ]
      ]
    },
    {
      "name": "Jalan Setia 1",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1435,
          1039.7
        ],
        [
          1406,
          1039.6
        ]
      ]
    },
    {
      "name": "Jalan Setia 2A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1302,
          1072.5
        ],
        [
          1316.8,
          1075.2
        ],
        [
          1339.6,
          1085
        ]
      ]
    },
    {
      "name": "Jalan Sigma",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1574.9,
          1283.3
        ],
        [
          1579.6,
          1266.7
        ]
      ]
    },
    {
      "name": "Jalan Sigma",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1578.2,
          1237.9
        ],
        [
          1583.2,
          1236.8
        ],
        [
          1597.8,
          1241.7
        ],
        [
          1595,
          1251.9
        ]
      ]
    },
    {
      "name": "Jalan SPG 7",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1107,
          1375
        ],
        [
          1107.6,
          1371.2
        ],
        [
          1113,
          1372.6
        ],
        [
          1130.6,
          1338.4
        ],
        [
          1142.8,
          1335.1
        ],
        [
          1149.7,
          1328.8
        ],
        [
          1156.6,
          1296.6
        ]
      ]
    },
    {
      "name": "Jalan Suci",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1767.3,
          1297.2
        ],
        [
          1761.8,
          1311.9
        ],
        [
          1748,
          1308.1
        ],
        [
          1746.3,
          1312.4
        ]
      ]
    },
    {
      "name": "Jalan Sumatera",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1766.4,
          968
        ],
        [
          1755.4,
          1005.9
        ]
      ]
    },
    {
      "name": "Jalan Telaga Said",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1357.1,
          1096.1
        ],
        [
          1366.2,
          1091.4
        ],
        [
          1370.5,
          1084.7
        ]
      ]
    },
    {
      "name": "Jalan Telaga Said",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1387.7,
          1089.2
        ],
        [
          1370.5,
          1084.7
        ]
      ]
    },
    {
      "name": "Jalan Teman Pembangunan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1525.1,
          999.8
        ],
        [
          1540.7,
          1000.5
        ]
      ]
    },
    {
      "name": "Jalan Teman Pembangunan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1540.6,
          1001.6
        ],
        [
          1525.1,
          999.8
        ]
      ]
    },
    {
      "name": "Jalan Teratai",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1540.6,
          1001.6
        ],
        [
          1541.1,
          982.9
        ],
        [
          1538.4,
          982.8
        ]
      ]
    },
    {
      "name": "Jalan Teratai",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1627.2,
          1111.6
        ],
        [
          1616.2,
          1134.2
        ]
      ]
    },
    {
      "name": "Jalan Teratai",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1777.7,
          1358.5
        ],
        [
          1770.3,
          1356
        ],
        [
          1772.4,
          1351.7
        ],
        [
          1780.2,
          1351.2
        ]
      ]
    },
    {
      "name": "Jalan Teratai Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1610,
          1233.7
        ],
        [
          1626.7,
          1235.8
        ]
      ]
    },
    {
      "name": "Jalan Teratai Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1719.8,
          1248.6
        ],
        [
          1718.6,
          1217.6
        ]
      ]
    },
    {
      "name": "Jalan Teratai V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1614.3,
          1200
        ],
        [
          1610,
          1233.7
        ]
      ]
    },
    {
      "name": "Jalan Tugu",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1250.4,
          1039.3
        ],
        [
          1271,
          1040.5
        ]
      ]
    },
    {
      "name": "Jalan Tugu",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1275.7,
          1037.5
        ],
        [
          1277.4,
          1014.9
        ]
      ]
    },
    {
      "name": "Jalan Tugu",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1785.6,
          1135.7
        ],
        [
          1779.5,
          1162.1
        ]
      ]
    },
    {
      "name": "Jalan Vanda",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1508.3,
          1001.2
        ],
        [
          1508,
          966.6
        ]
      ]
    },
    {
      "name": "Jalan Wadas Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1321,
          994.5
        ],
        [
          1329.3,
          960
        ]
      ]
    },
    {
      "name": "Jalan Wali Istana",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1553.3,
          999.6
        ],
        [
          1557.7,
          972.2
        ]
      ]
    },
    {
      "name": "Jalan Werkudoro",
      "type": "residential",
      "width": 10,
      "points": [
        [
          978.4,
          1330.5
        ],
        [
          1023.8,
          1325.6
        ],
        [
          1026.1,
          1338.7
        ]
      ]
    },
    {
      "name": "Jalan Wibawa Mukti",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1709.9,
          1370.8
        ],
        [
          1728.7,
          1324.1
        ],
        [
          1732.4,
          1301.7
        ]
      ]
    },
    {
      "name": "Jalan Wibawa Mukti IV Gang Masjid",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1731,
          1316.7
        ],
        [
          1748.8,
          1322.8
        ]
      ]
    },
    {
      "name": "Jalan Wibawa Mukti IV Gang Masjid",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1748.8,
          1322.8
        ],
        [
          1765.5,
          1331.6
        ]
      ]
    },
    {
      "name": "Jalan Wijaya Kusuma",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1485.5,
          1359
        ],
        [
          1486.7,
          1322.3
        ],
        [
          1495.3,
          1287.8
        ],
        [
          1506.2,
          1269.2
        ],
        [
          1507,
          1255
        ]
      ]
    },
    {
      "name": "Jalan Wisma Kusuma Indah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1300.2,
          1329.4
        ],
        [
          1269.3,
          1334.2
        ]
      ]
    },
    {
      "name": "Jalan Yusufiyah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1061.5,
          1312.1
        ],
        [
          1065.9,
          1314.9
        ],
        [
          1079.9,
          1314.8
        ],
        [
          1078.5,
          1336.9
        ],
        [
          1104.9,
          1332.7
        ]
      ]
    },
    {
      "name": "Jalan Zamrud 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1720.1,
          1191.5
        ],
        [
          1707.3,
          1205.3
        ],
        [
          1700.9,
          1220.8
        ],
        [
          1697.6,
          1221
        ]
      ]
    }
  ],
  "waterways": [
    {
      "name": "Buaran",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1388.8,
          1158
        ],
        [
          1409.2,
          1102.6
        ]
      ]
    },
    {
      "name": "Buaran",
      "kind": "river",
      "width": 14,
      "points": [
        [
          1398.7,
          981.1
        ],
        [
          1390.6,
          977.1
        ],
        [
          1389.1,
          960
        ]
      ]
    },
    {
      "name": "Buaran",
      "kind": "river",
      "width": 14,
      "points": [
        [
          1403.7,
          1019.6
        ],
        [
          1398.8,
          981.9
        ]
      ]
    },
    {
      "name": "Buaran",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1409.2,
          1102.6
        ],
        [
          1411.5,
          1094
        ]
      ]
    },
    {
      "name": "Buaran",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1411.5,
          1094
        ],
        [
          1412.6,
          1078.4
        ],
        [
          1408.1,
          1073.6
        ],
        [
          1409.6,
          1056.2
        ],
        [
          1405.6,
          1051.4
        ],
        [
          1403.7,
          1019.6
        ]
      ]
    },
    {
      "name": "Kali Cakung",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1761.7,
          1375
        ],
        [
          1768.8,
          1353.7
        ],
        [
          1779.4,
          1346.7
        ],
        [
          1779.8,
          1336.5
        ],
        [
          1785.4,
          1324.4
        ],
        [
          1800,
          1308.5
        ]
      ]
    },
    {
      "name": "Kali Sunter",
      "kind": "river",
      "width": 14,
      "points": [
        [
          1163.8,
          1033
        ],
        [
          1155,
          1033
        ],
        [
          1156.6,
          1014.2
        ],
        [
          1150.5,
          1012
        ],
        [
          1149.4,
          1008.3
        ],
        [
          1156.1,
          1000.3
        ],
        [
          1151.8,
          993.7
        ],
        [
          1152.4,
          988.5
        ],
        [
          1160,
          985.9
        ],
        [
          1156.1,
          980.1
        ],
        [
          1156.2,
          969.7
        ],
        [
          1163.4,
          969.1
        ],
        [
          1154.5,
          960
        ]
      ]
    },
    {
      "name": "Kali Sunter",
      "kind": "river",
      "width": 14,
      "points": [
        [
          1227.5,
          1341.7
        ],
        [
          1228.1,
          1336.4
        ],
        [
          1222.2,
          1326.4
        ],
        [
          1227.4,
          1318.8
        ],
        [
          1226.5,
          1311.7
        ],
        [
          1233.2,
          1304.5
        ],
        [
          1219.8,
          1298.8
        ],
        [
          1227.2,
          1291.1
        ],
        [
          1211.8,
          1283.6
        ],
        [
          1205.4,
          1245.6
        ],
        [
          1197.6,
          1240.5
        ],
        [
          1208.1,
          1228.8
        ],
        [
          1212.8,
          1215.1
        ],
        [
          1207.5,
          1208.9
        ],
        [
          1206.4,
          1190.9
        ],
        [
          1211.5,
          1180.8
        ],
        [
          1208.7,
          1170.9
        ],
        [
          1214.2,
          1164.2
        ],
        [
          1217.6,
          1146.2
        ],
        [
          1215.4,
          1142.2
        ],
        [
          1218.4,
          1137.5
        ],
        [
          1213.4,
          1127.3
        ],
        [
          1216.5,
          1115.1
        ],
        [
          1226.9,
          1103.3
        ],
        [
          1221.2,
          1095.8
        ],
        [
          1215,
          1103.4
        ],
        [
          1206.2,
          1104.7
        ],
        [
          1202.8,
          1091.9
        ],
        [
          1183.8,
          1095.8
        ],
        [
          1177.4,
          1086.2
        ],
        [
          1170.5,
          1088.5
        ],
        [
          1165.8,
          1083.3
        ],
        [
          1163.4,
          1068.5
        ],
        [
          1149.8,
          1066.6
        ],
        [
          1144.8,
          1069.3
        ],
        [
          1154.3,
          1053.1
        ],
        [
          1164.1,
          1048.5
        ],
        [
          1161.5,
          1040.7
        ],
        [
          1163.6,
          1035.2
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1048.7,
          1375
        ],
        [
          1066.8,
          1364.1
        ],
        [
          1069.2,
          1359.1
        ],
        [
          1083.8,
          1353.6
        ],
        [
          1088,
          1348.6
        ],
        [
          1113.2,
          1336
        ],
        [
          1115.1,
          1331.4
        ],
        [
          1122.7,
          1329.5
        ],
        [
          1123.8,
          1321.3
        ],
        [
          1133.8,
          1316.5
        ],
        [
          1136.8,
          1304.7
        ],
        [
          1145.8,
          1306.3
        ],
        [
          1151.9,
          1295
        ],
        [
          1169,
          1294.6
        ],
        [
          1196,
          1274.3
        ],
        [
          1210.6,
          1273.7
        ]
      ]
    },
    {
      "name": "",
      "kind": "river",
      "width": 10,
      "points": [
        [
          1234.4,
          1375
        ],
        [
          1234.2,
          1365.8
        ],
        [
          1243.7,
          1361.9
        ],
        [
          1252.2,
          1352
        ],
        [
          1246.2,
          1350.3
        ],
        [
          1239.1,
          1359.3
        ],
        [
          1234.4,
          1354.3
        ],
        [
          1235.6,
          1344
        ],
        [
          1224.8,
          1356
        ],
        [
          1219.2,
          1357.9
        ],
        [
          1219.4,
          1351.6
        ],
        [
          1227.5,
          1341.7
        ]
      ]
    },
    {
      "name": "",
      "kind": "river",
      "width": 10,
      "points": [
        [
          1250.9,
          1375
        ],
        [
          1244.5,
          1367.7
        ],
        [
          1242.6,
          1375
        ]
      ]
    },
    {
      "name": "",
      "kind": "drain",
      "width": 6,
      "points": [
        [
          1292.2,
          1086.7
        ],
        [
          1272.8,
          1053.6
        ]
      ]
    },
    {
      "name": "",
      "kind": "canal",
      "width": 14,
      "points": [
        [
          1294.3,
          1160.1
        ],
        [
          1291.5,
          1170.4
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1298.4,
          1247.1
        ],
        [
          1298.3,
          1240.3
        ],
        [
          1293.4,
          1235.7
        ],
        [
          1293.6,
          1222.8
        ],
        [
          1288.3,
          1204.9
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1303.5,
          1272.9
        ],
        [
          1296.9,
          1267.3
        ],
        [
          1298.3,
          1248
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1306.6,
          1305.4
        ],
        [
          1303.8,
          1273.8
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1371.7,
          1084.2
        ],
        [
          1388.6,
          1088.5
        ],
        [
          1391.3,
          1082.7
        ],
        [
          1404.2,
          1082.6
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1404.2,
          1082.6
        ],
        [
          1412.3,
          1083.6
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1426.3,
          1151.4
        ],
        [
          1443.1,
          1099.2
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1465.5,
          1100
        ],
        [
          1412.5,
          1097.2
        ]
      ]
    },
    {
      "name": "",
      "kind": "drain",
      "width": 6,
      "points": [
        [
          1552.7,
          1222.2
        ],
        [
          1566.2,
          1236.8
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1589.6,
          1375
        ],
        [
          1597.5,
          1349.4
        ],
        [
          1593.5,
          1321.5
        ],
        [
          1595.4,
          1307.8
        ],
        [
          1592.2,
          1304.9
        ],
        [
          1590.9,
          1294.1
        ],
        [
          1593.1,
          1281
        ],
        [
          1604.4,
          1271.3
        ],
        [
          1604.4,
          1263.1
        ],
        [
          1598.3,
          1252.5
        ],
        [
          1603.9,
          1247.4
        ],
        [
          1606.3,
          1239.3
        ],
        [
          1605.3,
          1231.6
        ],
        [
          1594.6,
          1229.4
        ],
        [
          1590.7,
          1222.2
        ],
        [
          1615.4,
          1197.7
        ],
        [
          1621.8,
          1180.9
        ],
        [
          1619.6,
          1174.3
        ],
        [
          1624,
          1140.1
        ],
        [
          1631.7,
          1125.9
        ],
        [
          1668,
          1080.2
        ],
        [
          1686.7,
          1071
        ],
        [
          1688.7,
          1060.8
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1633.5,
          1216.2
        ],
        [
          1613.4,
          1214.9
        ],
        [
          1615.4,
          1197.7
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1684.3,
          1052.8
        ],
        [
          1679.8,
          1039.1
        ],
        [
          1679.7,
          1024
        ],
        [
          1676.5,
          1021.7
        ],
        [
          1685.9,
          1007.8
        ],
        [
          1686.9,
          997.9
        ],
        [
          1709.2,
          990.3
        ],
        [
          1712.9,
          986.1
        ],
        [
          1714.6,
          980.5
        ],
        [
          1708.6,
          978.2
        ],
        [
          1710,
          960
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1688.7,
          1060.8
        ],
        [
          1684.3,
          1052.8
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1751,
          1093.8
        ],
        [
          1742.9,
          1072.6
        ],
        [
          1751.4,
          1060
        ],
        [
          1755.4,
          1060.4
        ],
        [
          1763.1,
          1043
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1763.8,
          1041.6
        ],
        [
          1780.1,
          1005.1
        ],
        [
          1775.9,
          975.8
        ],
        [
          1784.5,
          960
        ]
      ]
    }
  ],
  "waterBodies": [
    {
      "name": "Danau",
      "points": [
        [
          1213.9,
          1112.2
        ],
        [
          1212.8,
          1109.4
        ],
        [
          1198,
          1108.4
        ],
        [
          1195.6,
          1109.4
        ],
        [
          1181.1,
          1124.4
        ],
        [
          1181.2,
          1126.4
        ],
        [
          1190.1,
          1137.9
        ],
        [
          1194.8,
          1140.3
        ],
        [
          1200,
          1138.6
        ],
        [
          1211.5,
          1141.2
        ],
        [
          1213.9,
          1138.6
        ],
        [
          1211.3,
          1128.6
        ],
        [
          1210.4,
          1124.4
        ],
        [
          1213.9,
          1112.2
        ],
        [
          1213.9,
          1112.2
        ]
      ]
    },
    {
      "name": "Danau",
      "points": [
        [
          1200.9,
          1191.4
        ],
        [
          1197.7,
          1181.4
        ],
        [
          1193.6,
          1176.4
        ],
        [
          1190.6,
          1173.3
        ],
        [
          1188.5,
          1160.4
        ],
        [
          1189.7,
          1154.2
        ],
        [
          1191.5,
          1152.1
        ],
        [
          1211.5,
          1151.8
        ],
        [
          1211.2,
          1155.4
        ],
        [
          1208.6,
          1164.6
        ],
        [
          1205.9,
          1167.8
        ],
        [
          1204.5,
          1171.4
        ],
        [
          1204.7,
          1174.2
        ],
        [
          1205.4,
          1178.2
        ],
        [
          1205.3,
          1183.5
        ],
        [
          1203.1,
          1187.9
        ],
        [
          1200.9,
          1191.4
        ],
        [
          1200.9,
          1191.4
        ]
      ]
    },
    {
      "name": "Folder Air IKIP",
      "points": [
        [
          1644.5,
          1090.4
        ],
        [
          1636.7,
          1102.2
        ],
        [
          1643.4,
          1106.5
        ],
        [
          1653.2,
          1094.7
        ],
        [
          1652.8,
          1094.5
        ],
        [
          1653.7,
          1093.2
        ],
        [
          1653.6,
          1092.4
        ],
        [
          1652.5,
          1091.6
        ],
        [
          1650.2,
          1092.5
        ],
        [
          1648.9,
          1091.7
        ],
        [
          1648.2,
          1092.8
        ],
        [
          1644.5,
          1090.4
        ],
        [
          1644.5,
          1090.4
        ]
      ]
    },
    {
      "name": "",
      "points": [
        [
          997.6,
          1160.5
        ],
        [
          1006.1,
          1163
        ],
        [
          1006.8,
          1166.3
        ],
        [
          1005.2,
          1169.6
        ],
        [
          1006.1,
          1173.6
        ],
        [
          1005.2,
          1176.3
        ],
        [
          1000.7,
          1177.2
        ],
        [
          996.7,
          1177.2
        ],
        [
          993.5,
          1176
        ],
        [
          997.6,
          1160.5
        ],
        [
          997.6,
          1160.5
        ]
      ]
    },
    {
      "name": "",
      "points": [
        [
          1111.5,
          1048.4
        ],
        [
          1110.6,
          1050
        ],
        [
          1109.7,
          1050
        ],
        [
          1109,
          1048.9
        ],
        [
          1109.4,
          1046.6
        ],
        [
          1107.9,
          1043.3
        ],
        [
          1110,
          1034.9
        ],
        [
          1113.1,
          1030
        ],
        [
          1113.4,
          1027.5
        ],
        [
          1113.4,
          1025.7
        ],
        [
          1112.3,
          1022.6
        ],
        [
          1112.6,
          1020.4
        ],
        [
          1113.1,
          1019.2
        ],
        [
          1119.6,
          1014.3
        ],
        [
          1123,
          1011.4
        ],
        [
          1124.8,
          1008.7
        ],
        [
          1126.4,
          1007.6
        ],
        [
          1127.7,
          1007.7
        ],
        [
          1128.1,
          1009.2
        ],
        [
          1126.7,
          1011.4
        ],
        [
          1125.7,
          1013.3
        ],
        [
          1125.1,
          1015.1
        ],
        [
          1124,
          1017.6
        ],
        [
          1124.1,
          1021.2
        ],
        [
          1125.2,
          1023.2
        ],
        [
          1124.9,
          1025.1
        ],
        [
          1124.6,
          1026.3
        ],
        [
          1123,
          1028.7
        ],
        [
          1122.8,
          1031.4
        ],
        [
          1122.4,
          1034.8
        ],
        [
          1122.4,
          1036.1
        ],
        [
          1123.9,
          1036.8
        ],
        [
          1123.3,
          1038.1
        ],
        [
          1121.4,
          1037.3
        ],
        [
          1120.1,
          1038.2
        ],
        [
          1118.7,
          1039.4
        ],
        [
          1117.1,
          1040.1
        ],
        [
          1115.9,
          1042
        ],
        [
          1112,
          1042.3
        ],
        [
          1111.5,
          1043
        ],
        [
          1112.1,
          1045.5
        ],
        [
          1111.5,
          1048.4
        ],
        [
          1111.5,
          1048.4
        ]
      ]
    },
    {
      "name": "",
      "points": [
        [
          1132.3,
          964.7
        ],
        [
          1132.1,
          963.4
        ],
        [
          1132.5,
          961.7
        ],
        [
          1133.4,
          960.9
        ],
        [
          1136.4,
          960.9
        ],
        [
          1137.7,
          960.3
        ],
        [
          1138.7,
          960
        ],
        [
          1148,
          960
        ],
        [
          1149.1,
          962.3
        ],
        [
          1149.1,
          964.9
        ],
        [
          1148.2,
          966.7
        ],
        [
          1148.3,
          968.6
        ],
        [
          1149.1,
          969.6
        ],
        [
          1150,
          970.8
        ],
        [
          1149.6,
          973.6
        ],
        [
          1148.8,
          975.4
        ],
        [
          1148.8,
          977.6
        ],
        [
          1146.6,
          980.9
        ],
        [
          1144.4,
          981.7
        ],
        [
          1143.3,
          982.6
        ],
        [
          1142.3,
          982
        ],
        [
          1140.6,
          978.9
        ],
        [
          1139.4,
          977.6
        ],
        [
          1137.6,
          977.2
        ],
        [
          1136.7,
          976.3
        ],
        [
          1136.7,
          974.8
        ],
        [
          1136.3,
          973.4
        ],
        [
          1137,
          971.5
        ],
        [
          1138.4,
          971.4
        ],
        [
          1140.4,
          972.6
        ],
        [
          1141.1,
          974.1
        ],
        [
          1142.2,
          974.4
        ],
        [
          1143.2,
          973.6
        ],
        [
          1143.5,
          972.1
        ],
        [
          1143.8,
          970.6
        ],
        [
          1144.8,
          970.2
        ],
        [
          1145.1,
          968.5
        ],
        [
          1143.9,
          967.1
        ],
        [
          1142.8,
          966.3
        ],
        [
          1141.2,
          966.4
        ],
        [
          1139.4,
          965.6
        ],
        [
          1137.7,
          964.4
        ],
        [
          1136.7,
          964.3
        ],
        [
          1135.1,
          964.6
        ],
        [
          1133.6,
          965.2
        ],
        [
          1132.3,
          964.7
        ],
        [
          1132.3,
          964.7
        ]
      ]
    },
    {
      "name": "",
      "points": [
        [
          1022.6,
          1175.1
        ],
        [
          1022.2,
          1173.9
        ],
        [
          1022.2,
          1172.7
        ],
        [
          1022.3,
          1171.6
        ],
        [
          1021.9,
          1170.5
        ],
        [
          1020.5,
          1169.5
        ],
        [
          1018.1,
          1168
        ],
        [
          1015.5,
          1165.5
        ],
        [
          1013,
          1163.4
        ],
        [
          1013.5,
          1162.9
        ],
        [
          1016.4,
          1162.8
        ],
        [
          1018.3,
          1162.3
        ],
        [
          1021.5,
          1161.5
        ],
        [
          1026.6,
          1161.5
        ],
        [
          1034.7,
          1161.5
        ],
        [
          1038.1,
          1161.9
        ],
        [
          1040.9,
          1163.3
        ],
        [
          1042.4,
          1164
        ],
        [
          1043.9,
          1164
        ],
        [
          1045.7,
          1164.5
        ],
        [
          1047,
          1165.7
        ],
        [
          1048.7,
          1167.5
        ],
        [
          1051.7,
          1165.8
        ],
        [
          1053.4,
          1165.6
        ],
        [
          1054.5,
          1166
        ],
        [
          1054,
          1167.2
        ],
        [
          1052.6,
          1167.8
        ],
        [
          1048.9,
          1168.4
        ],
        [
          1046.7,
          1168.5
        ],
        [
          1044.2,
          1168.1
        ],
        [
          1042.7,
          1168.1
        ],
        [
          1041.4,
          1168.8
        ],
        [
          1039.9,
          1170.3
        ],
        [
          1037.6,
          1171
        ],
        [
          1034.5,
          1171
        ],
        [
          1030.6,
          1169.8
        ],
        [
          1028.6,
          1170.1
        ],
        [
          1026.9,
          1170.8
        ],
        [
          1025.4,
          1171.1
        ],
        [
          1023.9,
          1171.4
        ],
        [
          1023.3,
          1172.3
        ],
        [
          1023.2,
          1172.9
        ],
        [
          1023,
          1174.2
        ],
        [
          1024.3,
          1177
        ],
        [
          1024.4,
          1178.6
        ],
        [
          1024.5,
          1180.1
        ],
        [
          1024.8,
          1181.4
        ],
        [
          1025.6,
          1182.5
        ],
        [
          1026.5,
          1183.8
        ],
        [
          1027,
          1185.6
        ],
        [
          1027.4,
          1188.7
        ],
        [
          1028.1,
          1189.7
        ],
        [
          1031,
          1192
        ],
        [
          1032.4,
          1193.2
        ],
        [
          1034.5,
          1195.3
        ],
        [
          1035,
          1197.1
        ],
        [
          1035,
          1198.4
        ],
        [
          1034.2,
          1199.8
        ],
        [
          1033.5,
          1201
        ],
        [
          1032.9,
          1201.8
        ],
        [
          1031.9,
          1202.6
        ],
        [
          1030.8,
          1203.3
        ],
        [
          1029.8,
          1203.9
        ],
        [
          1029,
          1204.1
        ],
        [
          1028.1,
          1204.5
        ],
        [
          1027.7,
          1204.4
        ],
        [
          1027.4,
          1203.7
        ],
        [
          1027.4,
          1203.1
        ],
        [
          1027.8,
          1202.6
        ],
        [
          1028.5,
          1202.1
        ],
        [
          1029.1,
          1201.5
        ],
        [
          1029.8,
          1200.9
        ],
        [
          1030.2,
          1200.4
        ],
        [
          1030.1,
          1199.7
        ],
        [
          1030,
          1199.1
        ],
        [
          1029.7,
          1198.4
        ],
        [
          1029.3,
          1197.8
        ],
        [
          1028.8,
          1197.7
        ],
        [
          1028.3,
          1197.9
        ],
        [
          1027.5,
          1198
        ],
        [
          1026.4,
          1197.9
        ],
        [
          1024.5,
          1199.6
        ],
        [
          1024.2,
          1200.8
        ],
        [
          1024.3,
          1201.7
        ],
        [
          1024.7,
          1202.5
        ],
        [
          1025.6,
          1203.4
        ],
        [
          1026.2,
          1203.9
        ],
        [
          1026.7,
          1204.2
        ],
        [
          1027.7,
          1205.6
        ],
        [
          1028.2,
          1206.4
        ],
        [
          1029,
          1207.5
        ],
        [
          1030,
          1208.4
        ],
        [
          1031,
          1209.2
        ],
        [
          1031.9,
          1209.7
        ],
        [
          1033.6,
          1209.4
        ],
        [
          1035,
          1209.2
        ],
        [
          1036.3,
          1208.9
        ],
        [
          1037.8,
          1208.5
        ],
        [
          1039.2,
          1208.5
        ],
        [
          1040.8,
          1209.6
        ],
        [
          1042.3,
          1210.7
        ],
        [
          1043.1,
          1211.9
        ],
        [
          1044.2,
          1213.5
        ],
        [
          1044.9,
          1215
        ],
        [
          1045.3,
          1216.4
        ],
        [
          1045.4,
          1217.6
        ],
        [
          1045.4,
          1218.5
        ],
        [
          1045.2,
          1219.2
        ],
        [
          1044.6,
          1219.5
        ],
        [
          1044.3,
          1219.2
        ],
        [
          1044.2,
          1218.5
        ],
        [
          1044.2,
          1217.5
        ],
        [
          1044.1,
          1216.2
        ],
        [
          1043.9,
          1215.1
        ],
        [
          1043.3,
          1213.8
        ],
        [
          1042.6,
          1212.5
        ],
        [
          1041.4,
          1211
        ],
        [
          1040.6,
          1209.9
        ],
        [
          1039.5,
          1209.2
        ],
        [
          1038.2,
          1209.1
        ],
        [
          1036.9,
          1209.4
        ],
        [
          1035.9,
          1209.9
        ],
        [
          1034.8,
          1210.4
        ],
        [
          1033.8,
          1210.5
        ],
        [
          1032.9,
          1210.4
        ],
        [
          1031.9,
          1210.1
        ],
        [
          1030.8,
          1209.6
        ],
        [
          1029.5,
          1209.1
        ],
        [
          1028.8,
          1209.1
        ],
        [
          1028.2,
          1209.7
        ],
        [
          1027.7,
          1210.5
        ],
        [
          1027.1,
          1210.9
        ],
        [
          1026.5,
          1211.2
        ],
        [
          1025.9,
          1211.6
        ],
        [
          1025.2,
          1211.3
        ],
        [
          1025.1,
          1210.7
        ],
        [
          1025,
          1209.7
        ],
        [
          1025.4,
          1208.5
        ],
        [
          1025.5,
          1207.1
        ],
        [
          1025.5,
          1206.5
        ],
        [
          1025.3,
          1205.5
        ],
        [
          1024.5,
          1204.1
        ],
        [
          1023.6,
          1203.1
        ],
        [
          1023.2,
          1202.6
        ],
        [
          1023.1,
          1201.4
        ],
        [
          1023.1,
          1200
        ],
        [
          1023.4,
          1198.6
        ],
        [
          1024.5,
          1197.6
        ],
        [
          1025.7,
          1196.8
        ],
        [
          1026.9,
          1196.2
        ],
        [
          1027.9,
          1195.7
        ],
        [
          1028.2,
          1195.1
        ],
        [
          1028.3,
          1194.3
        ],
        [
          1028,
          1193.2
        ],
        [
          1027.7,
          1192
        ],
        [
          1027.4,
          1191.2
        ],
        [
          1026.9,
          1189.7
        ],
        [
          1026.6,
          1188.3
        ],
        [
          1026.9,
          1186.8
        ],
        [
          1026.7,
          1185.7
        ],
        [
          1025.9,
          1184.2
        ],
        [
          1024.9,
          1182.9
        ],
        [
          1024.2,
          1181.8
        ],
        [
          1023.7,
          1180.3
        ],
        [
          1023.6,
          1178.7
        ],
        [
          1023.3,
          1176.9
        ],
        [
          1022.6,
          1175.1
        ],
        [
          1022.6,
          1175.1
        ]
      ]
    },
    {
      "name": "",
      "points": [
        [
          1018.5,
          1128.6
        ],
        [
          1017.5,
          1129.2
        ],
        [
          1016.3,
          1129.9
        ],
        [
          1016.2,
          1130.6
        ],
        [
          1016.9,
          1131.3
        ],
        [
          1018.5,
          1131.7
        ],
        [
          1020.5,
          1132.2
        ],
        [
          1021.3,
          1132.8
        ],
        [
          1022.4,
          1134.4
        ],
        [
          1024,
          1134.9
        ],
        [
          1026.6,
          1133.9
        ],
        [
          1029.8,
          1132.2
        ],
        [
          1031.1,
          1130.6
        ],
        [
          1033,
          1130.1
        ],
        [
          1034.2,
          1130.2
        ],
        [
          1034.7,
          1130.3
        ],
        [
          1036,
          1129.9
        ],
        [
          1037.2,
          1128.9
        ],
        [
          1038.6,
          1128.8
        ],
        [
          1039.8,
          1128.9
        ],
        [
          1041.5,
          1129.8
        ],
        [
          1043.6,
          1130.4
        ],
        [
          1044.5,
          1130.2
        ],
        [
          1045.9,
          1129
        ],
        [
          1046.8,
          1128.5
        ],
        [
          1047.2,
          1127.8
        ],
        [
          1048,
          1126.8
        ],
        [
          1048.4,
          1125.3
        ],
        [
          1049.6,
          1123.9
        ],
        [
          1050,
          1123.5
        ],
        [
          1050.6,
          1122.1
        ],
        [
          1050.5,
          1121.2
        ],
        [
          1049.9,
          1120.3
        ],
        [
          1049.6,
          1119.2
        ],
        [
          1047.9,
          1118.5
        ],
        [
          1045.6,
          1118.2
        ],
        [
          1044.2,
          1116.8
        ],
        [
          1044,
          1116.2
        ],
        [
          1043.8,
          1113.3
        ],
        [
          1044.1,
          1111.1
        ],
        [
          1045.4,
          1109.1
        ],
        [
          1045.5,
          1107.9
        ],
        [
          1043.8,
          1105.8
        ],
        [
          1043.3,
          1104.3
        ],
        [
          1043.1,
          1103.3
        ],
        [
          1042.2,
          1103
        ],
        [
          1041,
          1103.3
        ],
        [
          1039.7,
          1102.4
        ],
        [
          1038.7,
          1102.4
        ],
        [
          1037.3,
          1103.2
        ],
        [
          1036.2,
          1104.9
        ],
        [
          1036,
          1106
        ],
        [
          1034.8,
          1106.8
        ],
        [
          1033.1,
          1107.4
        ],
        [
          1032.4,
          1107.1
        ],
        [
          1031.9,
          1106.5
        ],
        [
          1031.4,
          1104.3
        ],
        [
          1030.9,
          1103.7
        ],
        [
          1029.2,
          1103.7
        ],
        [
          1028.6,
          1104.1
        ],
        [
          1028.7,
          1104.8
        ],
        [
          1030.1,
          1106.1
        ],
        [
          1030.3,
          1106.9
        ],
        [
          1029.8,
          1107.8
        ],
        [
          1028.1,
          1110.8
        ],
        [
          1027.9,
          1111.9
        ],
        [
          1028.3,
          1114
        ],
        [
          1027.9,
          1115.8
        ],
        [
          1027.6,
          1117.4
        ],
        [
          1027.9,
          1118.7
        ],
        [
          1028.3,
          1118.9
        ],
        [
          1028.7,
          1118.5
        ],
        [
          1030,
          1114.9
        ],
        [
          1031.7,
          1112.6
        ],
        [
          1033.3,
          1111.8
        ],
        [
          1036.2,
          1111
        ],
        [
          1038.1,
          1111
        ],
        [
          1039.3,
          1111.4
        ],
        [
          1040.5,
          1113
        ],
        [
          1041.9,
          1113.6
        ],
        [
          1042.1,
          1114
        ],
        [
          1041.9,
          1114.8
        ],
        [
          1041.5,
          1115.4
        ],
        [
          1040.6,
          1115.7
        ],
        [
          1039,
          1115.8
        ],
        [
          1038.7,
          1116.3
        ],
        [
          1037.6,
          1118.9
        ],
        [
          1037.5,
          1119.7
        ],
        [
          1037.9,
          1120.7
        ],
        [
          1037.8,
          1122.1
        ],
        [
          1037.5,
          1123.3
        ],
        [
          1036.8,
          1123.6
        ],
        [
          1035.6,
          1123.6
        ],
        [
          1033.9,
          1123.2
        ],
        [
          1032.9,
          1123.2
        ],
        [
          1032.3,
          1124
        ],
        [
          1030.7,
          1124.9
        ],
        [
          1028.3,
          1125.5
        ],
        [
          1026.5,
          1126.7
        ],
        [
          1025.4,
          1126.7
        ],
        [
          1024.5,
          1126.4
        ],
        [
          1023.4,
          1125.8
        ],
        [
          1021.7,
          1125.6
        ],
        [
          1020.8,
          1125.9
        ],
        [
          1018.5,
          1128.6
        ],
        [
          1018.5,
          1128.6
        ]
      ]
    },
    {
      "name": "",
      "points": [
        [
          1039.3,
          1158.7
        ],
        [
          1036,
          1158.7
        ],
        [
          1036.4,
          1159.2
        ],
        [
          1042.8,
          1159.8
        ],
        [
          1045.8,
          1159.5
        ],
        [
          1047.9,
          1160.2
        ],
        [
          1048.9,
          1161.8
        ],
        [
          1050.1,
          1163.8
        ],
        [
          1051.7,
          1164.3
        ],
        [
          1053.4,
          1164.4
        ],
        [
          1054.8,
          1163.8
        ],
        [
          1055.8,
          1163.2
        ],
        [
          1057.3,
          1161.9
        ],
        [
          1059.5,
          1160.9
        ],
        [
          1060.5,
          1161
        ],
        [
          1061.8,
          1160.5
        ],
        [
          1063.3,
          1161.1
        ],
        [
          1064.8,
          1160.9
        ],
        [
          1067.1,
          1160
        ],
        [
          1069.4,
          1159.8
        ],
        [
          1071.3,
          1158.5
        ],
        [
          1072.4,
          1158.6
        ],
        [
          1073.5,
          1157.4
        ],
        [
          1075.7,
          1155.3
        ],
        [
          1075.5,
          1153.3
        ],
        [
          1076.3,
          1151.2
        ],
        [
          1078.4,
          1149.5
        ],
        [
          1079,
          1148.4
        ],
        [
          1079.6,
          1145
        ],
        [
          1079.5,
          1143.9
        ],
        [
          1078.8,
          1143.3
        ],
        [
          1077.6,
          1143.3
        ],
        [
          1076.9,
          1142.7
        ],
        [
          1076.9,
          1141.6
        ],
        [
          1077.3,
          1141.3
        ],
        [
          1078.7,
          1141.2
        ],
        [
          1081,
          1139.8
        ],
        [
          1081.5,
          1138.9
        ],
        [
          1081.7,
          1136.5
        ],
        [
          1082.7,
          1134.7
        ],
        [
          1082.9,
          1133.6
        ],
        [
          1082.9,
          1132.3
        ],
        [
          1085.5,
          1129.7
        ],
        [
          1087.1,
          1126.8
        ],
        [
          1088,
          1126.1
        ],
        [
          1088.8,
          1124.8
        ],
        [
          1088.5,
          1122.6
        ],
        [
          1089,
          1121.1
        ],
        [
          1090.2,
          1119.8
        ],
        [
          1091.7,
          1117.8
        ],
        [
          1092.8,
          1115.3
        ],
        [
          1093.8,
          1114.6
        ],
        [
          1095.6,
          1114
        ],
        [
          1096.6,
          1113.4
        ],
        [
          1098.9,
          1112.8
        ],
        [
          1100.6,
          1111.9
        ],
        [
          1102.1,
          1111.1
        ],
        [
          1103.5,
          1110.2
        ],
        [
          1104.3,
          1109.4
        ],
        [
          1105.8,
          1109.1
        ],
        [
          1106.5,
          1108.7
        ],
        [
          1107.3,
          1106.6
        ],
        [
          1108.8,
          1105
        ],
        [
          1110.7,
          1104.2
        ],
        [
          1111.1,
          1102.3
        ],
        [
          1112.7,
          1099.6
        ],
        [
          1114.1,
          1098.8
        ],
        [
          1117.1,
          1097.9
        ],
        [
          1120.1,
          1097
        ],
        [
          1121,
          1097.1
        ],
        [
          1122.9,
          1097.9
        ],
        [
          1124.6,
          1097.8
        ],
        [
          1125.3,
          1096.4
        ],
        [
          1126,
          1096.1
        ],
        [
          1127.5,
          1094.5
        ],
        [
          1129.1,
          1094
        ],
        [
          1130.6,
          1094.3
        ],
        [
          1132.1,
          1094.1
        ],
        [
          1133.4,
          1093.3
        ],
        [
          1135.1,
          1093.4
        ],
        [
          1136.6,
          1093.3
        ],
        [
          1138.6,
          1092.6
        ],
        [
          1139.4,
          1091.7
        ],
        [
          1139.3,
          1089.8
        ],
        [
          1139.9,
          1088.6
        ],
        [
          1141.1,
          1088.1
        ],
        [
          1142.6,
          1085.5
        ],
        [
          1144,
          1084.6
        ],
        [
          1145.7,
          1082.6
        ],
        [
          1145.4,
          1082.4
        ],
        [
          1144,
          1084.1
        ],
        [
          1142.1,
          1085.2
        ],
        [
          1140.6,
          1087.4
        ],
        [
          1139.6,
          1088.2
        ],
        [
          1138.9,
          1088.8
        ],
        [
          1138.7,
          1090.6
        ],
        [
          1138.1,
          1091.7
        ],
        [
          1137.5,
          1091.9
        ],
        [
          1135.1,
          1092
        ],
        [
          1134.6,
          1092.3
        ],
        [
          1133.5,
          1092
        ],
        [
          1132.9,
          1092.3
        ],
        [
          1132.4,
          1093.2
        ],
        [
          1130.9,
          1093.5
        ],
        [
          1129.2,
          1093.2
        ],
        [
          1127.7,
          1093.2
        ],
        [
          1125.5,
          1094.7
        ],
        [
          1121.6,
          1095.5
        ],
        [
          1117.8,
          1095.8
        ],
        [
          1116.2,
          1095.7
        ],
        [
          1115.1,
          1096.2
        ],
        [
          1114.4,
          1097
        ],
        [
          1113.3,
          1097.2
        ],
        [
          1112.9,
          1097.6
        ],
        [
          1112.5,
          1098.2
        ],
        [
          1111.9,
          1098.5
        ],
        [
          1111.2,
          1099.7
        ],
        [
          1110.6,
          1100.9
        ],
        [
          1109.7,
          1101.6
        ],
        [
          1108.4,
          1102.7
        ],
        [
          1107.3,
          1105.1
        ],
        [
          1106.6,
          1105.7
        ],
        [
          1106.3,
          1106.3
        ],
        [
          1105.8,
          1107.7
        ],
        [
          1105.2,
          1108.2
        ],
        [
          1103.9,
          1108.3
        ],
        [
          1100.9,
          1109.9
        ],
        [
          1099.3,
          1111.2
        ],
        [
          1097.8,
          1111.9
        ],
        [
          1096.6,
          1111.9
        ],
        [
          1095.7,
          1111.2
        ],
        [
          1095.5,
          1110.6
        ],
        [
          1096.7,
          1108.6
        ],
        [
          1096.6,
          1106.6
        ],
        [
          1096,
          1104.5
        ],
        [
          1096.2,
          1103.4
        ],
        [
          1096.2,
          1102.3
        ],
        [
          1095.5,
          1100.6
        ],
        [
          1095.1,
          1098.5
        ],
        [
          1094.4,
          1098
        ],
        [
          1093.1,
          1097.7
        ],
        [
          1090.1,
          1097.4
        ],
        [
          1089.3,
          1097.6
        ],
        [
          1088.1,
          1098.6
        ],
        [
          1086.1,
          1101.4
        ],
        [
          1085.7,
          1102.5
        ],
        [
          1085.7,
          1103.5
        ],
        [
          1085.9,
          1105.1
        ],
        [
          1085.7,
          1106.5
        ],
        [
          1084.4,
          1108.2
        ],
        [
          1082.8,
          1110.8
        ],
        [
          1082.6,
          1112.1
        ],
        [
          1081.7,
          1113.5
        ],
        [
          1080.2,
          1114.9
        ],
        [
          1079.7,
          1116.5
        ],
        [
          1079.4,
          1118.2
        ],
        [
          1078.8,
          1120.1
        ],
        [
          1078.6,
          1121.7
        ],
        [
          1078.6,
          1123.2
        ],
        [
          1078.3,
          1124.1
        ],
        [
          1077.6,
          1124.9
        ],
        [
          1076.5,
          1127.2
        ],
        [
          1076.4,
          1129.2
        ],
        [
          1076,
          1130.3
        ],
        [
          1074.5,
          1131.4
        ],
        [
          1073.9,
          1132.2
        ],
        [
          1073,
          1134.1
        ],
        [
          1072.4,
          1135.1
        ],
        [
          1071.2,
          1136
        ],
        [
          1070.5,
          1137.1
        ],
        [
          1070,
          1138.6
        ],
        [
          1070.1,
          1139.4
        ],
        [
          1070.8,
          1140.7
        ],
        [
          1071.9,
          1141.6
        ],
        [
          1072.9,
          1141.9
        ],
        [
          1073.9,
          1141.8
        ],
        [
          1074.2,
          1142.1
        ],
        [
          1074.1,
          1143.3
        ],
        [
          1073.5,
          1143.5
        ],
        [
          1071.5,
          1143.5
        ],
        [
          1069.6,
          1144.7
        ],
        [
          1068.4,
          1146
        ],
        [
          1068,
          1147.4
        ],
        [
          1068.5,
          1148.8
        ],
        [
          1068.5,
          1149.8
        ],
        [
          1068.1,
          1151
        ],
        [
          1068.1,
          1152.9
        ],
        [
          1068.1,
          1154
        ],
        [
          1067.3,
          1155.2
        ],
        [
          1066,
          1155.8
        ],
        [
          1065.4,
          1156.6
        ],
        [
          1064.7,
          1157.7
        ],
        [
          1063.6,
          1158.1
        ],
        [
          1062.4,
          1157.8
        ],
        [
          1061,
          1157.8
        ],
        [
          1060.3,
          1158.2
        ],
        [
          1059.8,
          1159
        ],
        [
          1059.3,
          1160.1
        ],
        [
          1057.8,
          1160.4
        ],
        [
          1057,
          1160
        ],
        [
          1056.3,
          1160.3
        ],
        [
          1055.6,
          1160.6
        ],
        [
          1054.6,
          1160
        ],
        [
          1053.6,
          1160.5
        ],
        [
          1052.3,
          1160.6
        ],
        [
          1051.2,
          1160.3
        ],
        [
          1047.9,
          1158
        ],
        [
          1046.9,
          1157.8
        ],
        [
          1045,
          1158.6
        ],
        [
          1042.3,
          1159.1
        ],
        [
          1039.3,
          1158.7
        ],
        [
          1039.3,
          1158.7
        ]
      ]
    },
    {
      "name": "",
      "points": [
        [
          1153.2,
          960
        ],
        [
          1158.6,
          964
        ],
        [
          1160.4,
          965.6
        ],
        [
          1161.5,
          966.4
        ],
        [
          1162.4,
          968.2
        ],
        [
          1162.3,
          969.2
        ],
        [
          1161.2,
          969.3
        ],
        [
          1158.6,
          967.9
        ],
        [
          1156.5,
          968.4
        ],
        [
          1155.5,
          969.5
        ],
        [
          1155.5,
          971.5
        ],
        [
          1156,
          973.5
        ],
        [
          1156.3,
          974.7
        ],
        [
          1156.7,
          976.3
        ],
        [
          1156,
          977.4
        ],
        [
          1156,
          977.5
        ],
        [
          1155.2,
          979.4
        ],
        [
          1155,
          982.6
        ],
        [
          1155.9,
          983.1
        ],
        [
          1157.5,
          984.1
        ],
        [
          1158.2,
          984.4
        ],
        [
          1158.7,
          984.7
        ],
        [
          1158.9,
          985.6
        ],
        [
          1157.8,
          986.2
        ],
        [
          1153.9,
          986.1
        ],
        [
          1152.1,
          987.5
        ],
        [
          1151.2,
          989.6
        ],
        [
          1150.9,
          993.7
        ],
        [
          1152.4,
          996.1
        ],
        [
          1155.1,
          999.8
        ],
        [
          1154.1,
          1001.7
        ],
        [
          1152.2,
          1002.8
        ],
        [
          1150.6,
          1003.8
        ],
        [
          1149.2,
          1005.8
        ],
        [
          1148.8,
          1007.9
        ],
        [
          1148.8,
          1009.9
        ],
        [
          1149,
          1009.9
        ],
        [
          1151.2,
          1010.5
        ],
        [
          1150.9,
          1010
        ],
        [
          1150.7,
          1009.4
        ],
        [
          1150.8,
          1008.6
        ],
        [
          1151.2,
          1007.6
        ],
        [
          1151.5,
          1007.3
        ],
        [
          1151.9,
          1007
        ],
        [
          1152.4,
          1006.2
        ],
        [
          1152.8,
          1005.8
        ],
        [
          1153.7,
          1004.9
        ],
        [
          1156,
          1002.8
        ],
        [
          1156.7,
          1001.9
        ],
        [
          1157.1,
          1001
        ],
        [
          1157.2,
          1000
        ],
        [
          1157.1,
          999.2
        ],
        [
          1156.8,
          998.4
        ],
        [
          1155.4,
          996.7
        ],
        [
          1152.5,
          993
        ],
        [
          1152.9,
          989.1
        ],
        [
          1154.6,
          988.1
        ],
        [
          1156.8,
          988.2
        ],
        [
          1159.1,
          987.9
        ],
        [
          1160.6,
          987.3
        ],
        [
          1161.2,
          985.3
        ],
        [
          1159.4,
          983.5
        ],
        [
          1158.5,
          982.7
        ],
        [
          1157.4,
          981.7
        ],
        [
          1157,
          980.9
        ],
        [
          1157.1,
          979.9
        ],
        [
          1157.4,
          978.5
        ],
        [
          1158,
          977.4
        ],
        [
          1158.6,
          975.9
        ],
        [
          1158.2,
          974.4
        ],
        [
          1158,
          972.9
        ],
        [
          1157.5,
          971.4
        ],
        [
          1157.3,
          970.3
        ],
        [
          1157.9,
          969.8
        ],
        [
          1158.4,
          969.7
        ],
        [
          1159.5,
          970.3
        ],
        [
          1161.5,
          971.1
        ],
        [
          1163.3,
          970.9
        ],
        [
          1164.1,
          970.1
        ],
        [
          1164.1,
          968.8
        ],
        [
          1163.2,
          967.3
        ],
        [
          1162.5,
          965.1
        ],
        [
          1162,
          963.8
        ],
        [
          1161.3,
          962.6
        ],
        [
          1157.6,
          960.9
        ],
        [
          1155.9,
          960
        ],
        [
          1153.2,
          960
        ]
      ]
    }
  ]
};
