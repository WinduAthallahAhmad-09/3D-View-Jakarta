/**
 * Void F (Cakung-Klender-Duren Sawit-Pulo Gebang) road and water geometry derived from OpenStreetMap.
 * Source: OpenStreetMap contributors, ODbL. Retrieved 2026-10-30 via the Overpass API.
 * Coordinates are stored directly in scene units using the unscaled GPS projection:
 *   x = (lng - 106.823048) * 14100
 *   z = (lat + 6.194957) * -14180
 * Unscaled keeps the six Void F anchors aligned with their real GPS positions.
 * Toll motorways, Transjakarta busway ways, elevated flyovers, unnamed roads, and
 * canal inspection lanes are excluded to keep the dataset focused on the at-grade
 * public street network; Kanal Banjir Timur stays procedural.
 */
export const VOID_F_OSM = {
  "meta": {
    "source": "OpenStreetMap contributors (ODbL)",
    "license": "ODbL 1.0",
    "retrieved": "2026-10-30",
    "api": "https://overpass.openstreetmap.fr/api/interpreter (base snapshot 2026-08-10)",
    "bbox": {
      "south": -6.234,
      "west": 106.891,
      "north": -6.184,
      "east": 106.965
    },
    "clipBox": {
      "minX": 960,
      "maxX": 1995,
      "minZ": -150,
      "maxZ": 560
    },
    "projection": "projectGpsToScene",
    "projectionConstants": {
      "originLng": 106.823048,
      "originLat": -6.194957,
      "scaleX": 14100,
      "scaleZ": 14180
    },
    "simplification": 2,
    "roadCount": 91,
    "roadPointCount": 439,
    "waterwayCount": 32,
    "waterPointCount": 213,
    "note": "Jaringan arteri Cakung-Klender-Duren Sawit-Pulo Gebang dan tata air Buaran-Sunter-Cipinang. Jalan Layang Cakung (flyover), way busway Transjakarta, jalan tanpa nama, gang kecil tak terpilih, serta jalur inspeksi dan fragmen jalan yang menumpang badan Kanal Banjir Timur dikecualikan; Kanal Banjir Timur tetap dimodelkan prosedural. Keenam anchor Void F terlayani jalan OSM terdekat (maksimum 41,1 unit), sehingga tidak diperlukan konektor akses."
  },
  "roads": [
    {
      "name": "Jalan Jenderal Polisi RS. Soekanto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1585.4,
          458
        ],
        [
          1474.2,
          469.2
        ],
        [
          1445.4,
          466
        ],
        [
          1473.5,
          468.4
        ],
        [
          1585.4,
          458
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Polisi RS. Soekanto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1604.2,
          456.3
        ],
        [
          1633.7,
          452.2
        ],
        [
          1652.9,
          445.9
        ],
        [
          1670,
          436.2
        ],
        [
          1686.6,
          421.3
        ],
        [
          1653.3,
          444.8
        ],
        [
          1631.3,
          452.8
        ],
        [
          1604.5,
          457.6
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Polisi RS. Soekanto",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1425.9,
          464.2
        ],
        [
          1445.4,
          466
        ],
        [
          1426.7,
          463.5
        ]
      ]
    },
    {
      "name": "Jalan Raya Pondok Kopi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1685.3,
          416.7
        ],
        [
          1669.9,
          365.6
        ],
        [
          1650.5,
          355.8
        ],
        [
          1642.3,
          329.4
        ]
      ]
    },
    {
      "name": "Jalan Nusa Indah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1623.3,
          329.2
        ],
        [
          1622.8,
          332.9
        ],
        [
          1633.7,
          334.9
        ],
        [
          1635.6,
          357.4
        ]
      ]
    },
    {
      "name": "Jalan Mawar Merah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1635.6,
          357.4
        ],
        [
          1632.7,
          452.5
        ]
      ]
    },
    {
      "name": "Jalan Bunga Rampai Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1546.9,
          418.3
        ],
        [
          1602,
          420.5
        ],
        [
          1618.5,
          416
        ],
        [
          1633.5,
          403.1
        ]
      ]
    },
    {
      "name": "Jalan Teratai Putih Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1541.6,
          389.1
        ],
        [
          1524.4,
          341.8
        ],
        [
          1526.6,
          313.6
        ]
      ]
    },
    {
      "name": "Jalan Malaka Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1539,
          426.4
        ],
        [
          1540.2,
          418.6
        ],
        [
          1535.4,
          432.7
        ],
        [
          1499,
          456.2
        ],
        [
          1477.1,
          459.1
        ],
        [
          1466,
          449.2
        ],
        [
          1459.7,
          412.1
        ]
      ]
    },
    {
      "name": "Jalan Delima Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1459.7,
          412.1
        ],
        [
          1457.9,
          393.6
        ],
        [
          1468.3,
          306.6
        ]
      ]
    },
    {
      "name": "Jalan Bintara Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1995,
          536
        ],
        [
          1951.4,
          519.1
        ],
        [
          1907.8,
          508
        ],
        [
          1850.8,
          478
        ],
        [
          1838.4,
          478.5
        ],
        [
          1810.6,
          463.2
        ],
        [
          1797.5,
          442.4
        ],
        [
          1756.9,
          427.3
        ]
      ]
    },
    {
      "name": "Jalan Malaka Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1756.9,
          427.3
        ],
        [
          1771.4,
          386.7
        ],
        [
          1791.2,
          358.8
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Komarudin",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1827.1,
          287.7
        ],
        [
          1816.8,
          251.1
        ],
        [
          1785.3,
          198.7
        ],
        [
          1713.4,
          59.9
        ],
        [
          1706.3,
          30.7
        ],
        [
          1700.5,
          -47.9
        ],
        [
          1713.2,
          -65.9
        ],
        [
          1715.1,
          -74.6
        ],
        [
          1710,
          -83.2
        ],
        [
          1697.5,
          -90.1
        ],
        [
          1695.3,
          -129.5
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Komarudin",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1785.3,
          211.4
        ],
        [
          1707.5,
          63.3
        ],
        [
          1700.5,
          36.4
        ],
        [
          1695.5,
          -14.3
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Komarudin",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1678.3,
          -83.8
        ],
        [
          1688,
          -105.6
        ],
        [
          1687.4,
          -129.5
        ]
      ]
    },
    {
      "name": "Jalan Kolonel Soegiono",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1088.1,
          490.5
        ],
        [
          1237,
          492
        ],
        [
          1360.1,
          465.5
        ],
        [
          1409.3,
          463.4
        ],
        [
          1360.1,
          466.3
        ],
        [
          1237.1,
          493.1
        ],
        [
          1101.7,
          489.7
        ],
        [
          1061.3,
          493.1
        ],
        [
          1061.1,
          490.5
        ],
        [
          1092.1,
          490
        ]
      ]
    },
    {
      "name": "Flyover",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1087.8,
          491.8
        ],
        [
          1034.4,
          492.3
        ],
        [
          1088.1,
          490.5
        ]
      ]
    },
    {
      "name": "Jalan Jenderal Basuki Rahmat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1058,
          493.1
        ],
        [
          1033,
          492.5
        ],
        [
          1029.7,
          489.6
        ],
        [
          1059.3,
          490.5
        ]
      ]
    },
    {
      "name": "Jalan Pulo Asem Utara Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1069.4,
          -105.7
        ],
        [
          961.2,
          -85.5
        ]
      ]
    },
    {
      "name": "Jalan Kayu Putih Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          961,
          -89.7
        ],
        [
          1069.4,
          -105.7
        ]
      ]
    },
    {
      "name": "Jalan Kayu Mas Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1065.9,
          -150
        ],
        [
          1061.1,
          -106.3
        ]
      ]
    },
    {
      "name": "Jalan Pulo Gebang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1832.1,
          312.6
        ],
        [
          1831.2,
          308.5
        ],
        [
          1863.5,
          288.2
        ],
        [
          1875.6,
          231.6
        ],
        [
          1887.3,
          210.4
        ],
        [
          1885.8,
          186.8
        ],
        [
          1860.4,
          167.7
        ]
      ]
    },
    {
      "name": "Jalan Rawa Kuning",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1901,
          246.2
        ],
        [
          1906.3,
          218.6
        ],
        [
          1919.1,
          191.4
        ],
        [
          1938.9,
          88.6
        ],
        [
          1952,
          52.1
        ],
        [
          1995,
          -3.4
        ]
      ]
    },
    {
      "name": "Jalan Raya Pulo Gebang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1826.9,
          200.8
        ],
        [
          1847.7,
          174.6
        ],
        [
          1860.4,
          167.7
        ],
        [
          1847.9,
          176.4
        ],
        [
          1833.3,
          195.8
        ]
      ]
    },
    {
      "name": "Jalan Raya Pulo Gebang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1884.1,
          3
        ],
        [
          1889.7,
          -2
        ],
        [
          1893.6,
          -13.9
        ],
        [
          1905.5,
          -27.9
        ],
        [
          1912.1,
          -42
        ],
        [
          1922.9,
          -107.1
        ]
      ]
    },
    {
      "name": "Jalan Pulo Gadung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1324,
          -150
        ],
        [
          1326.8,
          -80.6
        ],
        [
          1323.4,
          -128.5
        ]
      ]
    },
    {
      "name": "Jalan Pulo Gadung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1327,
          -28.8
        ],
        [
          1334,
          95.2
        ],
        [
          1328.5,
          -30.3
        ]
      ]
    },
    {
      "name": "Jalan Pulo Lentut",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1326.9,
          -78.8
        ],
        [
          1175.2,
          -80.1
        ],
        [
          1326.8,
          -80.6
        ]
      ]
    },
    {
      "name": "Jalan Pulolio",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1173.7,
          -37.1
        ],
        [
          1184.5,
          -17.4
        ],
        [
          1190.4,
          -12.4
        ],
        [
          1237.7,
          -11.6
        ],
        [
          1190.7,
          -10.9
        ],
        [
          1182.8,
          -16.8
        ],
        [
          1177.2,
          -30.2
        ],
        [
          1169.1,
          -38.1
        ],
        [
          1172.8,
          -35.7
        ]
      ]
    },
    {
      "name": "Jalan Pulokambing Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1206.9,
          86.4
        ],
        [
          1237.3,
          35.3
        ],
        [
          1237.6,
          -78.8
        ],
        [
          1236,
          35.5
        ],
        [
          1217.7,
          67.6
        ]
      ]
    },
    {
      "name": "Jalan Puloayang Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1206.9,
          86.4
        ],
        [
          1248.2,
          112.3
        ],
        [
          1272.6,
          156.6
        ],
        [
          1330.9,
          191.4
        ],
        [
          1335.6,
          191.5
        ],
        [
          1292.1,
          167.3
        ]
      ]
    },
    {
      "name": "Jalan Raya Penggilingan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1562.9,
          -96.4
        ],
        [
          1578.9,
          -72.9
        ],
        [
          1571.9,
          -47.9
        ],
        [
          1588,
          -37.9
        ],
        [
          1579.1,
          51.1
        ],
        [
          1581.8,
          109
        ],
        [
          1579.2,
          161.6
        ],
        [
          1590.6,
          194.8
        ],
        [
          1635.7,
          222.7
        ],
        [
          1641.8,
          236.1
        ],
        [
          1652.8,
          245.6
        ]
      ]
    },
    {
      "name": "Jalan Doktor Sumarno",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1644.4,
          247.2
        ],
        [
          1730.1,
          246.6
        ],
        [
          1754.2,
          240.3
        ],
        [
          1798.2,
          216.7
        ]
      ]
    },
    {
      "name": "Jalan Doktor Sumarno",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1776.5,
          237.7
        ],
        [
          1769.1,
          236.3
        ],
        [
          1754.3,
          243.7
        ],
        [
          1729,
          250.2
        ],
        [
          1653,
          248.9
        ],
        [
          1644.3,
          258.1
        ]
      ]
    },
    {
      "name": "Jalan Alu-Alu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          960,
          100.5
        ],
        [
          1043.2,
          106
        ]
      ]
    },
    {
      "name": "Jalan Tenggiri",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          966.2,
          34.4
        ],
        [
          974.2,
          45
        ],
        [
          976.2,
          55.3
        ],
        [
          983.7,
          57.7
        ],
        [
          999.4,
          82.8
        ],
        [
          1004,
          106.3
        ]
      ]
    },
    {
      "name": "Jalan Tawes",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          999.4,
          82.8
        ],
        [
          1020.3,
          76.8
        ],
        [
          1047.5,
          78.4
        ]
      ]
    },
    {
      "name": "Jalan Layur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1066.3,
          -12.7
        ],
        [
          1043.4,
          93.9
        ],
        [
          1043.1,
          108.1
        ]
      ]
    },
    {
      "name": "Jalan Jatinegara Kaum",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1144.3,
          114.2
        ],
        [
          1096.8,
          105.8
        ],
        [
          1058.8,
          107.8
        ],
        [
          1095.7,
          104.7
        ],
        [
          1144.8,
          113.1
        ]
      ]
    },
    {
      "name": "Jalan Persahabatan Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1050.1,
          110.8
        ],
        [
          960,
          103.2
        ]
      ]
    },
    {
      "name": "Jalan P. Komarudin",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1695.5,
          -14.3
        ],
        [
          1691.1,
          -67
        ],
        [
          1678.3,
          -83.8
        ]
      ]
    },
    {
      "name": "Jalan Robusta Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1756.9,
          427.3
        ],
        [
          1718,
          422.3
        ],
        [
          1713.3,
          418.2
        ],
        [
          1703.7,
          426.1
        ]
      ]
    },
    {
      "name": "Jalan Komarudin Lama",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1695.5,
          -14.3
        ],
        [
          1690.2,
          27.8
        ],
        [
          1693.5,
          56.3
        ],
        [
          1684.1,
          121
        ],
        [
          1690.2,
          166.2
        ],
        [
          1685.9,
          179.3
        ],
        [
          1678.4,
          187.3
        ],
        [
          1672.3,
          221.1
        ],
        [
          1637.9,
          224.8
        ]
      ]
    },
    {
      "name": "Jalan Pahlawan Revolusi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1037.4,
          560
        ],
        [
          1036.3,
          543.8
        ],
        [
          1047.2,
          527.1
        ],
        [
          1058,
          493.1
        ],
        [
          1054.1,
          508.2
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Muara II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          996.2,
          400
        ],
        [
          1056,
          399
        ],
        [
          1074.9,
          401.8
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Muara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          972.1,
          375.7
        ],
        [
          961.1,
          412.8
        ],
        [
          962.8,
          418.8
        ],
        [
          960,
          427.6
        ]
      ]
    },
    {
      "name": "Jalan Pahlawan Revolusi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1088,
          300.4
        ],
        [
          1079.5,
          346.8
        ],
        [
          1078.9,
          377.8
        ],
        [
          1068.2,
          441.1
        ],
        [
          1067.4,
          469.9
        ],
        [
          1059.8,
          493.1
        ]
      ]
    },
    {
      "name": "Jalan Radin Inten",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1411.6,
          456.8
        ],
        [
          1412.9,
          386.4
        ],
        [
          1416.1,
          360.8
        ],
        [
          1414.5,
          439.9
        ],
        [
          1411.6,
          456.8
        ]
      ]
    },
    {
      "name": "Jalan Radin Inten",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1415.8,
          346.4
        ],
        [
          1418.9,
          326
        ],
        [
          1416.1,
          360.8
        ],
        [
          1415.8,
          346.4
        ]
      ]
    },
    {
      "name": "Jalan I Gusti Ngurah Rai",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1862.4,
          350.1
        ],
        [
          1995,
          365.1
        ],
        [
          1861.7,
          351.8
        ]
      ]
    },
    {
      "name": "Jalan Cipinang Muara III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          972.1,
          375.7
        ],
        [
          981.9,
          377.8
        ],
        [
          992.5,
          360.2
        ],
        [
          1025.7,
          357.8
        ],
        [
          1028.2,
          354.9
        ],
        [
          1079,
          357.6
        ]
      ]
    },
    {
      "name": "Jalan Duren Sawit Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1235.8,
          370
        ],
        [
          1268.8,
          369.4
        ],
        [
          1277,
          376.2
        ],
        [
          1269,
          371.3
        ],
        [
          1235.8,
          370
        ],
        [
          1156.1,
          373.8
        ],
        [
          1130.8,
          356.3
        ],
        [
          1101.1,
          341.4
        ],
        [
          1081.3,
          338.8
        ]
      ]
    },
    {
      "name": "Jalan Lingkar Duren Sawit",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1315.9,
          450.2
        ],
        [
          1324.2,
          440.2
        ],
        [
          1337.5,
          399.5
        ],
        [
          1336.6,
          395.9
        ],
        [
          1315,
          377.4
        ],
        [
          1315.4,
          374.7
        ]
      ]
    },
    {
      "name": "Jalan Lingkar Duren Sawit",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1298.7,
          376.5
        ],
        [
          1268.8,
          412.1
        ]
      ]
    },
    {
      "name": "Jalan Dokter KRT Radjiman Widyodiningrat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1412.1,
          241.3
        ],
        [
          1405.8,
          218.7
        ],
        [
          1407.6,
          111.8
        ],
        [
          1405.4,
          93.4
        ],
        [
          1396.2,
          64.1
        ],
        [
          1394.8,
          47.6
        ],
        [
          1396.9,
          44.8
        ],
        [
          1399.5,
          71.1
        ],
        [
          1409,
          111.1
        ],
        [
          1407,
          220.4
        ],
        [
          1423.2,
          273.1
        ],
        [
          1418.9,
          326
        ],
        [
          1421.9,
          271.8
        ],
        [
          1412.1,
          241.3
        ]
      ]
    },
    {
      "name": "Jalan Dokter KRT Radjiman Widyodiningrat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1397.1,
          43.3
        ],
        [
          1400.8,
          2.3
        ],
        [
          1397.1,
          43.3
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1149.9,
          96.9
        ],
        [
          1165.5,
          -24.5
        ],
        [
          1152,
          93.1
        ],
        [
          1143.4,
          112.4
        ],
        [
          1149.9,
          96.9
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1167.6,
          -38.6
        ],
        [
          1164.4,
          -24.6
        ],
        [
          1166,
          -40.8
        ],
        [
          1176.6,
          -83.5
        ],
        [
          1168.4,
          -110.6
        ],
        [
          1176.4,
          -80.2
        ],
        [
          1166.2,
          -42.7
        ]
      ]
    },
    {
      "name": "Penggilingan Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1644.3,
          258.1
        ],
        [
          1643.7,
          281.8
        ],
        [
          1642,
          278
        ],
        [
          1644.4,
          247.2
        ]
      ]
    },
    {
      "name": "Jalan Radin Inten II",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1400.4,
          512.5
        ],
        [
          1408.3,
          476.7
        ],
        [
          1401.7,
          510.7
        ],
        [
          1408.6,
          560
        ],
        [
          1400.4,
          512.5
        ]
      ]
    },
    {
      "name": "Jalan Pendidikan Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1327.1,
          487
        ],
        [
          1341.9,
          486.1
        ],
        [
          1401,
          502.7
        ]
      ]
    },
    {
      "name": "Jalan Taman Malaka Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1401,
          502.7
        ],
        [
          1415.7,
          506
        ],
        [
          1447,
          504.4
        ],
        [
          1465.1,
          512.9
        ],
        [
          1484.5,
          514.1
        ],
        [
          1507,
          531.1
        ],
        [
          1575.9,
          533.8
        ]
      ]
    },
    {
      "name": "Jalan Raya Pondok Kopi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1695.4,
          560
        ],
        [
          1688.3,
          541.7
        ],
        [
          1693.3,
          507.6
        ],
        [
          1702.4,
          487
        ],
        [
          1704.5,
          472.2
        ],
        [
          1696,
          432.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Pondok Kopi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1689.1,
          422.3
        ],
        [
          1697,
          431.6
        ],
        [
          1689.1,
          422.3
        ]
      ]
    },
    {
      "name": "Jalan Sentra Primer Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1834.1,
          200.4
        ],
        [
          1830.6,
          199.2
        ],
        [
          1836.4,
          202.7
        ],
        [
          1835.1,
          209.9
        ],
        [
          1802.5,
          227.2
        ]
      ]
    },
    {
      "name": "Jalan Radin Inten",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1422.4,
          302.6
        ],
        [
          1417.5,
          330.4
        ],
        [
          1419.1,
          304
        ]
      ]
    },
    {
      "name": "Jalan Swadaya Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1326.8,
          485.8
        ],
        [
          1327.3,
          539.4
        ],
        [
          1320.4,
          549.7
        ],
        [
          1319.3,
          560
        ]
      ]
    },
    {
      "name": "Jalan Stasiun Cakung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1827.1,
          287.7
        ],
        [
          1835.5,
          336.6
        ]
      ]
    },
    {
      "name": "Jalan Rawa Bebek",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1995,
          140
        ],
        [
          1973.7,
          194.8
        ],
        [
          1973.5,
          205.4
        ],
        [
          1965.7,
          220.7
        ],
        [
          1951.8,
          276.1
        ],
        [
          1950.3,
          290.5
        ],
        [
          1960,
          291.3
        ],
        [
          1959.7,
          304.7
        ],
        [
          1968.5,
          306.9
        ],
        [
          1969.9,
          337
        ]
      ]
    },
    {
      "name": "Jalan Rawa Bebek",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1995,
          126.2
        ],
        [
          1952.3,
          204.9
        ],
        [
          1937,
          219.9
        ]
      ]
    },
    {
      "name": "Jalan Buaran Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1412.6,
          360.9
        ],
        [
          1336.7,
          365.6
        ],
        [
          1320.3,
          368.2
        ],
        [
          1315.4,
          374.7
        ]
      ]
    },
    {
      "name": "Jalan Duren Sawit Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1220.1,
          508.6
        ],
        [
          1228.4,
          513.2
        ],
        [
          1228.3,
          547.3
        ]
      ]
    },
    {
      "name": "Jalan Bintara IX",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1901.1,
          504.8
        ],
        [
          1898.7,
          513.1
        ],
        [
          1893,
          516.7
        ],
        [
          1889.3,
          525.2
        ],
        [
          1881.7,
          560
        ]
      ]
    },
    {
      "name": "Jalan PAM Rawa Badung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1361.5,
          189.9
        ],
        [
          1374.5,
          189.7
        ],
        [
          1384.5,
          182.9
        ],
        [
          1407.5,
          185.2
        ]
      ]
    },
    {
      "name": "Jalan Pondok Kelapa Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1592.9,
          457
        ],
        [
          1594.7,
          461
        ],
        [
          1582.4,
          480
        ],
        [
          1572.8,
          560
        ]
      ]
    },
    {
      "name": "Jalan Perumnas Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1461.9,
          362.5
        ],
        [
          1416.1,
          360.8
        ]
      ]
    },
    {
      "name": "Jalan BB1",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1016.3,
          316.4
        ],
        [
          1013.6,
          330.1
        ],
        [
          979.5,
          339
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1051.8,
          250.9
        ],
        [
          1044.1,
          243.3
        ],
        [
          1056.8,
          251.2
        ],
        [
          1095.8,
          249.9
        ],
        [
          1103.5,
          218.9
        ],
        [
          1107.1,
          216.9
        ],
        [
          1100.4,
          251.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Darip",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1036.7,
          239.6
        ],
        [
          1004.3,
          214.4
        ],
        [
          986,
          212.2
        ],
        [
          966.9,
          219.2
        ],
        [
          986.7,
          214.4
        ],
        [
          1003.8,
          216.2
        ],
        [
          1037.6,
          238.6
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1111.4,
          -21.3
        ],
        [
          1123.2,
          -22
        ],
        [
          1135.9,
          -27.6
        ],
        [
          1126.1,
          -20
        ],
        [
          1111.1,
          -19
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1153.5,
          -37.5
        ],
        [
          1166.1,
          -41.3
        ],
        [
          1167.6,
          -38.6
        ],
        [
          1151.4,
          -36.5
        ],
        [
          1136.2,
          -24.8
        ],
        [
          1136.6,
          -28
        ],
        [
          1156,
          -36.1
        ]
      ]
    },
    {
      "name": "Jalan Pemuda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1015.9,
          -19.5
        ],
        [
          963.2,
          -19.6
        ],
        [
          961.7,
          -22.1
        ],
        [
          1094.4,
          -21.4
        ],
        [
          1084.6,
          -19.1
        ],
        [
          1015.9,
          -19.5
        ]
      ]
    },
    {
      "name": "Jalan Taruna",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1168,
          -122.5
        ],
        [
          1143.1,
          -121.3
        ],
        [
          1133.7,
          -116.7
        ],
        [
          1107.4,
          -114.3
        ],
        [
          1069.4,
          -105.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Penggilingan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1540.8,
          -150
        ],
        [
          1553.7,
          -110.9
        ],
        [
          1562.9,
          -96.4
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1995,
          -82.9
        ],
        [
          1922.9,
          -107.1
        ],
        [
          1826,
          -128.2
        ],
        [
          1930.1,
          -105.3
        ],
        [
          1995,
          -84.1
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1129.2,
          146
        ],
        [
          1118.4,
          171.7
        ],
        [
          1107.1,
          216.9
        ],
        [
          1117.2,
          170.8
        ],
        [
          1144.8,
          113.1
        ],
        [
          1128,
          145.5
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Timur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1107.1,
          216.9
        ],
        [
          1100.1,
          246.9
        ],
        [
          1106,
          215.4
        ]
      ]
    },
    {
      "name": "Jalan Pulo Gebang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1860.4,
          167.7
        ],
        [
          1858.7,
          161.8
        ],
        [
          1872.1,
          117.6
        ],
        [
          1868.8,
          98.9
        ],
        [
          1876.4,
          78.4
        ],
        [
          1873.4,
          26
        ],
        [
          1884.1,
          3
        ]
      ]
    },
    {
      "name": "Jalan Asam",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1937,
          219.9
        ],
        [
          1900.2,
          248.8
        ],
        [
          1869.2,
          266.2
        ]
      ]
    },
    {
      "name": "Jalan Bintara Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1733.4,
          560
        ],
        [
          1748.3,
          494.9
        ],
        [
          1745.8,
          473.9
        ],
        [
          1756.9,
          427.3
        ]
      ]
    },
    {
      "name": "Jalan Pulo Buaran",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1335.2,
          102.7
        ],
        [
          1337.3,
          191.4
        ],
        [
          1332.3,
          102.5
        ]
      ]
    }
  ],
  "waterways": [
    {
      "name": "Ci Pinang",
      "kind": "river",
      "width": 9,
      "points": [
        [
          960.6,
          306.5
        ],
        [
          971.9,
          288.4
        ],
        [
          979,
          286.1
        ],
        [
          977.4,
          263.6
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          1728,
          -22
        ],
        [
          1746,
          40.1
        ],
        [
          1760.5,
          75
        ],
        [
          1812.2,
          161.8
        ],
        [
          1809.2,
          168.5
        ],
        [
          1779,
          184.3
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          1064.1,
          -148.2
        ],
        [
          1056.7,
          -103.6
        ],
        [
          961.8,
          -87.2
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          1026.4,
          -20.1
        ],
        [
          1093.9,
          -19.5
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          979.9,
          103.1
        ],
        [
          1053.1,
          108.3
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1691.8,
          -33.3
        ],
        [
          1660.2,
          -22
        ],
        [
          1637.2,
          -28.8
        ],
        [
          1639.4,
          -38.8
        ],
        [
          1627.1,
          -81
        ],
        [
          1619.9,
          -89.9
        ],
        [
          1620.8,
          -96.2
        ],
        [
          1614.5,
          -111.3
        ],
        [
          1599.6,
          -119.5
        ],
        [
          1569.7,
          -124.1
        ],
        [
          1565.5,
          -118.6
        ],
        [
          1567,
          -97.7
        ],
        [
          1560.3,
          -91.9
        ],
        [
          1551.8,
          -95.6
        ],
        [
          1536.1,
          -95
        ],
        [
          1504.5,
          -107.3
        ],
        [
          1498.1,
          -116.2
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1381.7,
          -31.9
        ],
        [
          1331.1,
          -29.4
        ],
        [
          1240.1,
          -31
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1498.1,
          -116.2
        ],
        [
          1491.8,
          -111
        ],
        [
          1477.1,
          -107.6
        ],
        [
          1435.1,
          -120.7
        ],
        [
          1405.2,
          -123.4
        ],
        [
          1401.8,
          -121
        ],
        [
          1405.4,
          -106.5
        ],
        [
          1403,
          -93.5
        ],
        [
          1405.9,
          -75.5
        ],
        [
          1387.9,
          -57.7
        ],
        [
          1382,
          -42.5
        ],
        [
          1382.3,
          -27.4
        ],
        [
          1387.7,
          -17.3
        ],
        [
          1387.2,
          -5.9
        ],
        [
          1375,
          21.8
        ],
        [
          1373.5,
          33.7
        ],
        [
          1352.3,
          46.1
        ],
        [
          1353.5,
          63.9
        ],
        [
          1335.1,
          93.8
        ]
      ]
    },
    {
      "name": "Buaran",
      "kind": "river",
      "width": 10,
      "points": [
        [
          1423.8,
          462.6
        ],
        [
          1432.2,
          443
        ],
        [
          1425.8,
          360.7
        ],
        [
          1435.3,
          342.6
        ],
        [
          1433.5,
          299.3
        ],
        [
          1437.5,
          244.4
        ],
        [
          1433.7,
          232.6
        ],
        [
          1447.8,
          198.7
        ],
        [
          1476.2,
          168.3
        ],
        [
          1477.7,
          153.4
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1635.1,
          53.7
        ],
        [
          1637.2,
          -28.8
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          972.9,
          559.5
        ],
        [
          963,
          529.6
        ],
        [
          965.3,
          476.6
        ],
        [
          968.7,
          474.3
        ],
        [
          963.2,
          468.2
        ],
        [
          964.1,
          458.9
        ],
        [
          972.8,
          450.7
        ],
        [
          984,
          447.6
        ],
        [
          986.3,
          436.8
        ],
        [
          993,
          428.9
        ],
        [
          990.4,
          423.8
        ],
        [
          996.1,
          392.5
        ],
        [
          1007.7,
          380.9
        ],
        [
          1024.2,
          373.9
        ],
        [
          1031.3,
          349.2
        ],
        [
          1028,
          339.2
        ],
        [
          1016.7,
          333
        ],
        [
          1014.9,
          326.4
        ],
        [
          1019.3,
          312.4
        ],
        [
          1027.3,
          312.5
        ],
        [
          1029.2,
          306.3
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1235.4,
          -95.6
        ],
        [
          1234.2,
          -55.2
        ],
        [
          1201.5,
          -54.9
        ],
        [
          1173.9,
          -63.9
        ]
      ]
    },
    {
      "name": "Cipinang",
      "kind": "river",
      "width": 9,
      "points": [
        [
          980.4,
          252.3
        ],
        [
          1000.1,
          247.2
        ],
        [
          1025.7,
          249
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1151,
          415.6
        ],
        [
          1178,
          368.5
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1503,
          394.4
        ],
        [
          1503.4,
          426.1
        ],
        [
          1512,
          446
        ],
        [
          1526.9,
          437.1
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1503.6,
          392.8
        ],
        [
          1487.4,
          407.5
        ],
        [
          1460.6,
          411.3
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1727,
          430.9
        ],
        [
          1728.6,
          423.7
        ],
        [
          1739.6,
          410.2
        ],
        [
          1738,
          399.8
        ],
        [
          1731.3,
          390.5
        ],
        [
          1730.1,
          379.7
        ],
        [
          1722.3,
          372
        ],
        [
          1721.3,
          366
        ],
        [
          1725.9,
          325.3
        ],
        [
          1726.4,
          278.5
        ],
        [
          1733.4,
          278.6
        ],
        [
          1733.4,
          261.9
        ],
        [
          1725.5,
          261.9
        ],
        [
          1725.5,
          251.6
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1977.1,
          80.7
        ],
        [
          1985.8,
          45.8
        ],
        [
          1993.8,
          27.8
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1519.5,
          558.7
        ],
        [
          1507.4,
          539.9
        ],
        [
          1496.6,
          533
        ],
        [
          1484.7,
          518.3
        ],
        [
          1463.5,
          514.7
        ],
        [
          1454,
          508.7
        ],
        [
          1458.1,
          495.1
        ],
        [
          1455,
          482.5
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1942.6,
          16.1
        ],
        [
          1960.7,
          9.4
        ],
        [
          1969.3,
          -8.1
        ],
        [
          1982,
          -16.1
        ],
        [
          1992.9,
          -30
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          1872.6,
          403.6
        ],
        [
          1871.3,
          430.1
        ],
        [
          1880.1,
          463.6
        ]
      ]
    },
    {
      "name": "Buaran",
      "kind": "river",
      "width": 10,
      "points": [
        [
          1477.7,
          152.4
        ],
        [
          1478.5,
          103.6
        ],
        [
          1485.4,
          90.6
        ],
        [
          1522.5,
          67.1
        ],
        [
          1543.4,
          65.6
        ],
        [
          1550.8,
          45.5
        ],
        [
          1551.5,
          24.2
        ],
        [
          1539.1,
          7.8
        ],
        [
          1543.1,
          -29.4
        ],
        [
          1538.8,
          -52.2
        ],
        [
          1532.6,
          -69.4
        ],
        [
          1517.3,
          -84.7
        ],
        [
          1504.5,
          -107.3
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1703.7,
          -24.2
        ],
        [
          1709.8,
          -21
        ],
        [
          1728,
          -22
        ],
        [
          1773.9,
          -16.5
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1773.9,
          -16.5
        ],
        [
          1800.3,
          -15.1
        ],
        [
          1834.7,
          -19.2
        ],
        [
          1876.6,
          -3.8
        ],
        [
          1890.7,
          7.1
        ],
        [
          1909.1,
          4.2
        ],
        [
          1942.6,
          16.1
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1740.2,
          212.1
        ],
        [
          1742.3,
          223.5
        ],
        [
          1739.2,
          239.9
        ],
        [
          1725.7,
          245.1
        ]
      ]
    },
    {
      "name": "Buaran",
      "kind": "river",
      "width": 10,
      "points": [
        [
          1421.4,
          557.3
        ],
        [
          1412.6,
          489.7
        ],
        [
          1421.9,
          467.5
        ]
      ]
    },
    {
      "name": "Sunter",
      "kind": "river",
      "width": 14,
      "points": [
        [
          1025.7,
          249
        ],
        [
          1042.9,
          234.2
        ],
        [
          1052.4,
          220.1
        ],
        [
          1050.2,
          215.4
        ],
        [
          1039.6,
          214.4
        ],
        [
          1042.4,
          200.8
        ],
        [
          1039.2,
          185.8
        ],
        [
          1045,
          174.9
        ],
        [
          1038,
          148.3
        ],
        [
          1050.8,
          112.2
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1236.9,
          260.4
        ],
        [
          1232.8,
          267.5
        ],
        [
          1229,
          267.8
        ],
        [
          1210.8,
          305.7
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1934.3,
          253.4
        ],
        [
          1941,
          255.1
        ],
        [
          1942.9,
          278.2
        ],
        [
          1932.9,
          289.1
        ],
        [
          1933.5,
          296.1
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1329.6,
          103.2
        ],
        [
          1237.9,
          258.5
        ]
      ]
    },
    {
      "name": "Sunter",
      "kind": "river",
      "width": 14,
      "points": [
        [
          1106.5,
          57.6
        ],
        [
          1107.9,
          53.8
        ],
        [
          1103,
          40.6
        ],
        [
          1105.5,
          20.1
        ],
        [
          1114.2,
          18.2
        ],
        [
          1121.9,
          6.4
        ],
        [
          1119.8,
          -1.5
        ],
        [
          1109.2,
          -15.8
        ],
        [
          1110.9,
          -35.8
        ],
        [
          1112.5,
          -38.7
        ],
        [
          1127.6,
          -40.4
        ],
        [
          1147,
          -50.5
        ],
        [
          1150,
          -81.3
        ],
        [
          1157.1,
          -100.7
        ],
        [
          1155.3,
          -113.8
        ],
        [
          1157.9,
          -120.5
        ]
      ]
    },
    {
      "name": "Sunter",
      "kind": "river",
      "width": 14,
      "points": [
        [
          1053.1,
          108.3
        ],
        [
          1059.6,
          102
        ],
        [
          1074.6,
          102.1
        ],
        [
          1094.6,
          96.9
        ],
        [
          1098.4,
          87.2
        ],
        [
          1095,
          77.7
        ],
        [
          1105,
          59.8
        ]
      ]
    }
  ]
};
