/**
 * Void H (Pasar Minggu-Kalibata-Ragunan-Jagakarsa-Lenteng Agung) road and water geometry derived from OpenStreetMap.
 * Source: OpenStreetMap contributors, ODbL. Retrieved 2026-10-31 via the Overpass API.
 * Coordinates are stored directly in scene units using the unscaled GPS projection:
 *   x = (lng - 106.823048) * 14100
 *   z = (lat + 6.194957) * -14180
 * Unscaled keeps the six Void H anchors aligned with their real GPS positions.
 * The eastern clip edge x = 380 meets the Void G clip so shared roads and rivers
 * are drawn exactly once. Elevated roads, tolls, busway ways, and unnamed roads
 * are excluded; named situ/waduk polygons are kept as closed counter-clockwise rings.
 */
export const VOID_H_OSM = {
  "meta": {
    "source": "OpenStreetMap contributors (ODbL)",
    "license": "ODbL 1.0",
    "retrieved": "2026-10-31",
    "api": "https://overpass-api.de/api/interpreter (base snapshot 2026-10-31T07:24:21Z)",
    "bbox": {
      "south": -6.357,
      "west": 106.802,
      "north": -6.268,
      "east": 106.862
    },
    "clipBox": {
      "minX": -240,
      "maxX": 380,
      "minZ": 1120,
      "maxZ": 2230
    },
    "projection": "projectGpsToScene",
    "projectionConstants": {
      "originLng": 106.823048,
      "originLat": -6.194957,
      "scaleX": 14100,
      "scaleZ": 14180
    },
    "simplification": 2,
    "roadCount": 348,
    "roadPointCount": 920,
    "roadNameCount": 91,
    "waterwayCount": 21,
    "waterPointCount": 242,
    "waterBodyCount": 3,
    "waterBodyPointCount": 143,
    "note": "Jaringan arteri, kolektor, dan lokal Pasar Minggu-Kalibata-Ragunan-Jagakarsa-Lenteng Agung serta tata air Ciliwung-Krukut-Kali Baru Barat. Batas timur x=380 menempel klip Void G agar jalan dan air tidak digambar dua kali. Jalan layang, tol, busway, dan jalan tanpa nama dikecualikan. Badan air bernama dengan luas proyeksi minimal 140 unit persegi dipertahankan sebagai polygon tertutup; polygon bertag water=river diringkas menjadi waterway, dan Situ Babakan (relasi OSM 11826829) dikeluarkan karena sudah dimodelkan sebagai danau anchor Setu Babakan."
  },
  "roads": [
    {
      "name": "Jalan AUP Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          148.2,
          1385.2
        ],
        [
          145.4,
          1416.5
        ]
      ]
    },
    {
      "name": "Jalan AUP Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          145.4,
          1416.5
        ],
        [
          142.5,
          1417.8
        ],
        [
          142.7,
          1425.1
        ]
      ]
    },
    {
      "name": "Jalan Agung Raya I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          227.1,
          1827.4
        ],
        [
          166.2,
          1832.7
        ]
      ]
    },
    {
      "name": "Jalan Agung Raya I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          236.3,
          1870.9
        ],
        [
          236.1,
          1865.3
        ],
        [
          244.8,
          1863.5
        ],
        [
          245.2,
          1854.8
        ],
        [
          232.3,
          1842.3
        ],
        [
          227.1,
          1827.4
        ]
      ]
    },
    {
      "name": "Jalan Agung Raya II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          177.1,
          1937.8
        ],
        [
          213.5,
          1936.4
        ],
        [
          234.8,
          1930.9
        ],
        [
          233.7,
          1900.4
        ],
        [
          238.6,
          1883.2
        ],
        [
          236.3,
          1870.9
        ]
      ]
    },
    {
      "name": "Jalan Ampera Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -27.6,
          1124.6
        ],
        [
          -32.9,
          1145.7
        ]
      ]
    },
    {
      "name": "Jalan Ampera Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -33.2,
          1146.8
        ],
        [
          -45,
          1204.5
        ]
      ]
    },
    {
      "name": "Jalan Ampera Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -45,
          1204.5
        ],
        [
          -63.3,
          1308.2
        ]
      ]
    },
    {
      "name": "Jalan Ampera Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -63.3,
          1308.2
        ],
        [
          -64.2,
          1316.2
        ]
      ]
    },
    {
      "name": "Jalan Ampera Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -85.1,
          1369.7
        ],
        [
          -72.4,
          1342.9
        ],
        [
          -64.2,
          1316.2
        ]
      ]
    },
    {
      "name": "Jalan Batas Dua",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          125.8,
          1793.6
        ],
        [
          90.5,
          1790.2
        ],
        [
          85.9,
          1801.9
        ]
      ]
    },
    {
      "name": "Jalan Baung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          199.2,
          1577.8
        ],
        [
          168.1,
          1570.5
        ],
        [
          166.9,
          1565.8
        ],
        [
          159.8,
          1561
        ],
        [
          139.6,
          1552.5
        ]
      ]
    },
    {
      "name": "Jalan Baung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          224.2,
          1584.5
        ],
        [
          200.5,
          1578.1
        ]
      ]
    },
    {
      "name": "Jalan Belimbing",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          57.5,
          1922.2
        ],
        [
          44.1,
          1951
        ],
        [
          25.9,
          1961.3
        ],
        [
          15.4,
          1992.9
        ]
      ]
    },
    {
      "name": "Jalan Benda Dalam",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -240,
          1865.3
        ],
        [
          -238.7,
          1847.4
        ]
      ]
    },
    {
      "name": "Jalan Benda Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -121,
          1192.3
        ],
        [
          -152.4,
          1186.1
        ]
      ]
    },
    {
      "name": "Jalan Benda Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -109.2,
          1194
        ],
        [
          -103.6,
          1192.9
        ],
        [
          -95.5,
          1120
        ]
      ]
    },
    {
      "name": "Jalan Benda Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -109.2,
          1194
        ],
        [
          -121,
          1192.3
        ]
      ]
    },
    {
      "name": "Jalan Buncit Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          104,
          1120
        ],
        [
          102.9,
          1163.2
        ],
        [
          99.2,
          1177.3
        ],
        [
          91.3,
          1190.4
        ]
      ]
    },
    {
      "name": "Jalan Buncit Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          87.7,
          1191.6
        ],
        [
          99.8,
          1168.9
        ],
        [
          101.9,
          1120
        ]
      ]
    },
    {
      "name": "Jalan Buncit Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          41.6,
          1295.4
        ],
        [
          38.6,
          1303.3
        ]
      ]
    },
    {
      "name": "Jalan Buncit Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          36.5,
          1302.5
        ],
        [
          40,
          1294.4
        ]
      ]
    },
    {
      "name": "Jalan Buncit Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          36.8,
          1307.6
        ],
        [
          30.2,
          1321
        ]
      ]
    },
    {
      "name": "Jalan Buncit Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          28.3,
          1320.1
        ],
        [
          34.4,
          1307.5
        ]
      ]
    },
    {
      "name": "Jalan Buncit Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          27.1,
          1326.9
        ],
        [
          -0.4,
          1384.8
        ]
      ]
    },
    {
      "name": "Jalan Buncit Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -2.6,
          1384.5
        ],
        [
          25.4,
          1326
        ]
      ]
    },
    {
      "name": "Jalan Buncit Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -1.5,
          1387.5
        ],
        [
          -6.4,
          1399.4
        ]
      ]
    },
    {
      "name": "Jalan Buncit Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -8.2,
          1398.6
        ],
        [
          -4.3,
          1388.5
        ]
      ]
    },
    {
      "name": "Jalan Caraka Buana II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          319.8,
          1969
        ],
        [
          348.7,
          1969.7
        ],
        [
          359.2,
          1978.5
        ],
        [
          363.9,
          1988
        ]
      ]
    },
    {
      "name": "Jalan Cilandak KKO",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -84.6,
          1385
        ],
        [
          -92.8,
          1388.7
        ]
      ]
    },
    {
      "name": "Jalan Cilandak KKO",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -92.8,
          1388.7
        ],
        [
          -107.8,
          1440.5
        ]
      ]
    },
    {
      "name": "Jalan Cilandak KKO",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -100,
          1409.4
        ],
        [
          -95.5,
          1394.8
        ]
      ]
    },
    {
      "name": "Jalan Cilandak KKO",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -107.8,
          1440.5
        ],
        [
          -113.6,
          1463.9
        ]
      ]
    },
    {
      "name": "Jalan Cilandak KKO",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -113.6,
          1463.9
        ],
        [
          -118.2,
          1488.9
        ]
      ]
    },
    {
      "name": "Jalan Cilandak KKO",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -118.2,
          1488.9
        ],
        [
          -123.2,
          1528.5
        ]
      ]
    },
    {
      "name": "Jalan Cilandak KKO",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -124,
          1528.4
        ],
        [
          -117.6,
          1478
        ],
        [
          -101.3,
          1414.1
        ]
      ]
    },
    {
      "name": "Jalan Cilandak KKO",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -123.2,
          1529.8
        ],
        [
          -125.6,
          1550.9
        ]
      ]
    },
    {
      "name": "Jalan Cilandak KKO",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -125.6,
          1550.9
        ],
        [
          -128.6,
          1587.3
        ]
      ]
    },
    {
      "name": "Jalan Cilandak KKO",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -129.5,
          1587.2
        ],
        [
          -124,
          1529.8
        ]
      ]
    },
    {
      "name": "Jalan Cilandak KKO",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -128.6,
          1587.3
        ],
        [
          -131,
          1642.3
        ]
      ]
    },
    {
      "name": "Jalan Cilandak KKO",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -133.5,
          1642.2
        ],
        [
          -129.5,
          1587.2
        ]
      ]
    },
    {
      "name": "Jalan Cipete Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -240,
          1178.1
        ],
        [
          -229.6,
          1178.8
        ]
      ]
    },
    {
      "name": "Jalan Cipete Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -229.6,
          1178.8
        ],
        [
          -217.7,
          1179.6
        ]
      ]
    },
    {
      "name": "Jalan Delima I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          117.2,
          2043.2
        ],
        [
          78.1,
          2038
        ]
      ]
    },
    {
      "name": "Jalan Desa Putra",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          110,
          2001.4
        ],
        [
          89.7,
          2021
        ]
      ]
    },
    {
      "name": "Jalan Desa Putra",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          88.5,
          2022
        ],
        [
          82.5,
          2026.7
        ],
        [
          76.2,
          2044
        ]
      ]
    },
    {
      "name": "Jalan Desa Putra",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          76.2,
          2044
        ],
        [
          58.8,
          2085.7
        ]
      ]
    },
    {
      "name": "Jalan Desa Putra",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          58.8,
          2085.7
        ],
        [
          63.4,
          2096.8
        ],
        [
          62.3,
          2105.8
        ],
        [
          58.1,
          2111.3
        ]
      ]
    },
    {
      "name": "Jalan Desa Putra",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          58.1,
          2111.3
        ],
        [
          43.8,
          2119.1
        ],
        [
          42.9,
          2138.7
        ]
      ]
    },
    {
      "name": "Jalan Durian",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -101.1,
          1750.1
        ],
        [
          -97.9,
          1733.6
        ],
        [
          -93.7,
          1728.5
        ]
      ]
    },
    {
      "name": "Jalan Durian",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -95.9,
          1872.7
        ],
        [
          -105.4,
          1831
        ],
        [
          -124.4,
          1798.7
        ],
        [
          -125.7,
          1774.1
        ],
        [
          -110.3,
          1759.2
        ],
        [
          -103.3,
          1758.5
        ],
        [
          -101.1,
          1750.1
        ]
      ]
    },
    {
      "name": "Jalan Gardu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          380,
          1260
        ],
        [
          372.1,
          1256
        ],
        [
          371,
          1238.9
        ]
      ]
    },
    {
      "name": "Jalan Garuda",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          371,
          2101.5
        ],
        [
          380,
          2080.2
        ]
      ]
    },
    {
      "name": "Jalan Garuda II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          288.5,
          2088
        ],
        [
          311.2,
          2087.3
        ],
        [
          317.1,
          2084
        ],
        [
          339.9,
          2088
        ],
        [
          356.3,
          2097.7
        ],
        [
          371,
          2101.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Hasan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          354.4,
          1803.6
        ],
        [
          357,
          1811.3
        ]
      ]
    },
    {
      "name": "Jalan Haji Hasan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          357,
          1811.3
        ],
        [
          345.5,
          1812.3
        ]
      ]
    },
    {
      "name": "Jalan Haji Hasan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          360.6,
          1814.3
        ],
        [
          380,
          1820.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Montong",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -232.6,
          1993.2
        ],
        [
          -216.3,
          1996.8
        ],
        [
          -214.1,
          2000.2
        ],
        [
          -187.5,
          2009.3
        ]
      ]
    },
    {
      "name": "Jalan Haji Montong",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -187.5,
          2009.3
        ],
        [
          -156.2,
          2017.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Montong",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -156.2,
          2017.4
        ],
        [
          -135.1,
          2022.3
        ]
      ]
    },
    {
      "name": "Jalan Haji Montong",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -135.1,
          2022.3
        ],
        [
          -116.1,
          2024
        ],
        [
          -112.3,
          2020.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Mursid",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          31,
          1794.5
        ],
        [
          64,
          1800.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Mursid",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          64,
          1800.1
        ],
        [
          85.9,
          1801.9
        ]
      ]
    },
    {
      "name": "Jalan Holtikultura",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          208.8,
          1280.3
        ],
        [
          200.6,
          1304
        ]
      ]
    },
    {
      "name": "Jalan Holtikultura",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          200.3,
          1305.1
        ],
        [
          193.1,
          1324.4
        ]
      ]
    },
    {
      "name": "Jalan Jagakarsa",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          9.7,
          1869.9
        ],
        [
          -53.5,
          1865.6
        ],
        [
          -60.5,
          1879.7
        ],
        [
          -71.2,
          1882.1
        ],
        [
          -83.7,
          1877.1
        ]
      ]
    },
    {
      "name": "Jalan Jagakarsa",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -83.7,
          1877.1
        ],
        [
          -94.4,
          1876.4
        ],
        [
          -100.9,
          1870.4
        ],
        [
          -120.1,
          1874.2
        ],
        [
          -171.7,
          1871.9
        ]
      ]
    },
    {
      "name": "Jalan Jagakarsa",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          17,
          1886.9
        ],
        [
          13.4,
          1880.5
        ],
        [
          13.8,
          1873
        ],
        [
          9.7,
          1869.9
        ]
      ]
    },
    {
      "name": "Jalan Jagakarsa",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          79.3,
          1925.8
        ],
        [
          44.9,
          1915.7
        ],
        [
          34.7,
          1909.8
        ],
        [
          17,
          1886.9
        ]
      ]
    },
    {
      "name": "Jalan Jagakarsa",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          87.4,
          1928.7
        ],
        [
          79.3,
          1925.8
        ]
      ]
    },
    {
      "name": "Jalan Jagakarsa",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          163.1,
          1930.9
        ],
        [
          146.7,
          1928.7
        ],
        [
          104.9,
          1932.2
        ],
        [
          87.4,
          1928.7
        ]
      ]
    },
    {
      "name": "Jalan Jagakarsa I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -48,
          1979.3
        ],
        [
          -47.8,
          1970.2
        ],
        [
          -28.1,
          1916.3
        ],
        [
          -27.9,
          1912.9
        ],
        [
          -44.3,
          1908
        ],
        [
          -37.8,
          1866.4
        ]
      ]
    },
    {
      "name": "Jalan Jagakarsa II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -7.5,
          1867.2
        ],
        [
          -17.8,
          1911.7
        ],
        [
          -19.7,
          1915.6
        ],
        [
          -27.9,
          1912.9
        ]
      ]
    },
    {
      "name": "Jalan Jati Murni",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          86.8,
          1291.2
        ],
        [
          87.7,
          1257.8
        ],
        [
          92.7,
          1254.2
        ],
        [
          113.4,
          1253
        ]
      ]
    },
    {
      "name": "Jalan Jati Padang Poncol",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          117.3,
          1429.3
        ],
        [
          117.5,
          1462.5
        ]
      ]
    },
    {
      "name": "Jalan Jati Padang Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          62.1,
          1430.3
        ],
        [
          63.3,
          1416.8
        ],
        [
          76.4,
          1402
        ],
        [
          79.1,
          1391.9
        ],
        [
          81.5,
          1348
        ],
        [
          87.5,
          1325.2
        ],
        [
          86.8,
          1291.2
        ]
      ]
    },
    {
      "name": "Jalan Jati Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          148.2,
          1385.2
        ],
        [
          148.2,
          1372.3
        ],
        [
          151.6,
          1371.6
        ],
        [
          152.4,
          1367.4
        ],
        [
          170.4,
          1366
        ],
        [
          170.7,
          1346.9
        ],
        [
          176.3,
          1332.6
        ],
        [
          189.2,
          1330.4
        ],
        [
          193.1,
          1324.4
        ]
      ]
    },
    {
      "name": "Jalan Jatipadang Poncol III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          136.4,
          1426.6
        ],
        [
          132.8,
          1430.4
        ],
        [
          117.3,
          1429.3
        ]
      ]
    },
    {
      "name": "Jalan Jatipadang Utara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          113.4,
          1253
        ],
        [
          116.4,
          1222.6
        ],
        [
          129.4,
          1219.3
        ],
        [
          130.5,
          1201.8
        ],
        [
          127.2,
          1188.8
        ]
      ]
    },
    {
      "name": "Jalan Jeruk",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          87.4,
          1928.7
        ],
        [
          78.6,
          1944
        ],
        [
          69.2,
          1972.2
        ],
        [
          60.4,
          1985.7
        ],
        [
          45.5,
          1998.1
        ]
      ]
    },
    {
      "name": "Jalan Joe",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          171.3,
          1750.3
        ],
        [
          157.2,
          1746.2
        ],
        [
          150.3,
          1752.2
        ]
      ]
    },
    {
      "name": "Jalan Joe",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          150.3,
          1752.2
        ],
        [
          140.4,
          1771.2
        ]
      ]
    },
    {
      "name": "Jalan Joe",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          140.4,
          1771.2
        ],
        [
          117.3,
          1810.4
        ],
        [
          106.6,
          1814.4
        ],
        [
          97.8,
          1839.4
        ],
        [
          96.6,
          1860.4
        ],
        [
          90.2,
          1872.8
        ]
      ]
    },
    {
      "name": "Jalan Kebagusan I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          45.4,
          1491.6
        ],
        [
          75.9,
          1497.4
        ]
      ]
    },
    {
      "name": "Jalan Kebagusan I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          77.4,
          1497.6
        ],
        [
          129.1,
          1505.3
        ]
      ]
    },
    {
      "name": "Jalan Kebagusan I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          130.6,
          1500.4
        ],
        [
          137.6,
          1483.5
        ]
      ]
    },
    {
      "name": "Jalan Kebagusan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          58.3,
          1441.2
        ],
        [
          44.9,
          1450.6
        ],
        [
          45.1,
          1510.4
        ],
        [
          50.4,
          1536.2
        ],
        [
          65.1,
          1576.7
        ],
        [
          64.9,
          1592.4
        ],
        [
          58.1,
          1608.2
        ],
        [
          50.5,
          1650.9
        ],
        [
          38.5,
          1651.7
        ],
        [
          25.2,
          1742.4
        ],
        [
          29.8,
          1770.6
        ],
        [
          33.4,
          1773.9
        ],
        [
          32.2,
          1791.8
        ],
        [
          25.2,
          1795.8
        ],
        [
          20,
          1806.3
        ],
        [
          19.8,
          1831.1
        ],
        [
          9.7,
          1865.9
        ]
      ]
    },
    {
      "name": "Jalan Kebembem",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -62.1,
          2007.6
        ],
        [
          -13.6,
          2026.5
        ],
        [
          -5.2,
          2033.1
        ]
      ]
    },
    {
      "name": "Jalan Kecapi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -11.8,
          1819.6
        ],
        [
          -24.4,
          1814.1
        ],
        [
          -24,
          1805.7
        ],
        [
          -60.2,
          1801.8
        ]
      ]
    },
    {
      "name": "Jalan Kecapi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -3.8,
          1822.1
        ],
        [
          -11.8,
          1819.6
        ]
      ]
    },
    {
      "name": "Jalan Kecapi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -11.6,
          1866.7
        ],
        [
          -3.8,
          1822.1
        ]
      ]
    },
    {
      "name": "Jalan Kedondong",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -77,
          1824
        ],
        [
          -78.7,
          1813.3
        ],
        [
          -86.5,
          1808.9
        ],
        [
          -119,
          1807.7
        ]
      ]
    },
    {
      "name": "Jalan Kedondong",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -52.9,
          1825
        ],
        [
          -77,
          1824
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Hijau",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          9.7,
          1865.9
        ],
        [
          38,
          1866
        ],
        [
          90.2,
          1872.8
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Tiga",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          90.2,
          1872.8
        ],
        [
          85.4,
          1914.8
        ],
        [
          79.3,
          1925.8
        ]
      ]
    },
    {
      "name": "Jalan Kemang Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -46.5,
          1120
        ],
        [
          -36.3,
          1122.6
        ]
      ]
    },
    {
      "name": "Jalan Kemang Selatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -36.3,
          1122.6
        ],
        [
          -27.6,
          1124.6
        ]
      ]
    },
    {
      "name": "Jalan Kolonel Polisi Pranoti",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          371,
          2101.5
        ],
        [
          368.9,
          2113.4
        ],
        [
          373.8,
          2121.8
        ],
        [
          380,
          2124
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          204.7,
          1635
        ],
        [
          212.2,
          1617.2
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          180,
          1749.6
        ],
        [
          204.7,
          1635
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          182.4,
          1790
        ],
        [
          180,
          1749.6
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          132.1,
          2130.1
        ],
        [
          140.7,
          2117.1
        ],
        [
          144.2,
          2102.4
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          128.9,
          2143.2
        ],
        [
          132.1,
          2130.1
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Barat",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          138.5,
          2154
        ],
        [
          128.9,
          2143.2
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          126.4,
          2230
        ],
        [
          138.5,
          2154
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          237.2,
          1540.9
        ],
        [
          230.8,
          1575.2
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          230.8,
          1575.2
        ],
        [
          219.6,
          1643.7
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          225.6,
          1576.3
        ],
        [
          231.3,
          1543.7
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          226.5,
          1576.6
        ],
        [
          231.3,
          1543.7
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          224.5,
          1585.7
        ],
        [
          226.5,
          1576.6
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          224.5,
          1585.7
        ],
        [
          225.6,
          1576.3
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          212.2,
          1617.2
        ],
        [
          223.7,
          1590.6
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          213.4,
          1639.7
        ],
        [
          212.2,
          1617.2
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          219.6,
          1643.7
        ],
        [
          210.5,
          1697.5
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          206.5,
          1696.6
        ],
        [
          214.1,
          1651
        ],
        [
          213.4,
          1639.7
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          210.5,
          1697.5
        ],
        [
          199.1,
          1766.9
        ],
        [
          191.3,
          1791.3
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          196.8,
          1753
        ],
        [
          206.5,
          1696.6
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          191.8,
          1777.1
        ],
        [
          196.8,
          1753
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          191.3,
          1791.3
        ],
        [
          180.9,
          1810.9
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          182.7,
          1795.6
        ],
        [
          191.8,
          1777.1
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          180.9,
          1810.9
        ],
        [
          172.1,
          1824
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          170.8,
          1813
        ],
        [
          178.8,
          1800.8
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          172.1,
          1824
        ],
        [
          158.9,
          1844.1
        ],
        [
          153.1,
          1864.4
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          145.4,
          1852
        ],
        [
          170.8,
          1813
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          153.1,
          1864.4
        ],
        [
          154.2,
          1890.2
        ],
        [
          167.2,
          1914
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          167.2,
          1914
        ],
        [
          177.8,
          1941.3
        ],
        [
          177.6,
          1976.5
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          166.8,
          1939.7
        ],
        [
          145.9,
          1891.9
        ],
        [
          145.4,
          1852
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          177.6,
          1976.5
        ],
        [
          154.8,
          2070.4
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          168.7,
          1988.1
        ],
        [
          172,
          1962.2
        ],
        [
          168.3,
          1943.7
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          166.3,
          1998.5
        ],
        [
          168.7,
          1988.1
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          153.3,
          2052.7
        ],
        [
          166.3,
          1998.5
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          154.8,
          2070.4
        ],
        [
          148.2,
          2111.9
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          146.3,
          2087.9
        ],
        [
          153.3,
          2052.7
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          144.2,
          2102.4
        ],
        [
          146.3,
          2087.9
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          143,
          2114.6
        ],
        [
          144.2,
          2102.4
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          146.7,
          2124.9
        ],
        [
          132.6,
          2230
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          138.5,
          2154
        ],
        [
          143,
          2114.6
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Timur",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          177.6,
          1976.5
        ],
        [
          180.2,
          2014.2
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Timur",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          180.2,
          2014.2
        ],
        [
          178.7,
          2045.7
        ],
        [
          168.8,
          2073.8
        ]
      ]
    },
    {
      "name": "Jalan Lenteng Agung Timur",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          168.8,
          2073.8
        ],
        [
          147.2,
          2119.5
        ]
      ]
    },
    {
      "name": "Jalan Madrasah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -109.5,
          1199.5
        ],
        [
          -96.4,
          1202.9
        ],
        [
          -45,
          1204.5
        ]
      ]
    },
    {
      "name": "Jalan Mangga",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          87.8,
          2127.5
        ],
        [
          121.8,
          2044.4
        ]
      ]
    },
    {
      "name": "Jalan Manggis",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -240,
          1847.3
        ],
        [
          -218.4,
          1843.5
        ],
        [
          -163.7,
          1845.7
        ]
      ]
    },
    {
      "name": "Jalan Margasatwa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -240,
          1640.4
        ],
        [
          -213,
          1645.7
        ]
      ]
    },
    {
      "name": "Jalan Margasatwa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -151.8,
          1641.4
        ],
        [
          -138.9,
          1642.1
        ]
      ]
    },
    {
      "name": "Jalan Margasatwa",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -131,
          1642.3
        ],
        [
          -97.3,
          1640.3
        ]
      ]
    },
    {
      "name": "Jalan Margasatwa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -173.9,
          1642.8
        ],
        [
          -151.8,
          1641.4
        ]
      ]
    },
    {
      "name": "Jalan Margasatwa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -211.3,
          1646.2
        ],
        [
          -195.2,
          1655.3
        ],
        [
          -189.4,
          1644.8
        ],
        [
          -173.9,
          1642.8
        ]
      ]
    },
    {
      "name": "Jalan Mayjen TNI Profesor Dokter Moestopo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -202.3,
          1120
        ],
        [
          -207.3,
          1173.1
        ],
        [
          -219.6,
          1197.6
        ]
      ]
    },
    {
      "name": "Jalan Mayjen TNI Profesor Dokter Moestopo",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -207.3,
          1167.8
        ],
        [
          -203.2,
          1120
        ]
      ]
    },
    {
      "name": "Jalan Mohamad Kafi II",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          163.8,
          1944
        ],
        [
          119.9,
          1991.7
        ]
      ]
    },
    {
      "name": "Jalan Mohamad Kafi II",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          119.9,
          1991.7
        ],
        [
          110.9,
          2000.9
        ],
        [
          101.9,
          2003.8
        ],
        [
          94.2,
          2003.4
        ],
        [
          78.5,
          1993.5
        ],
        [
          45.5,
          1998.1
        ]
      ]
    },
    {
      "name": "Jalan Mohamad Kafi II",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          45.5,
          1998.1
        ],
        [
          36.7,
          2000.8
        ],
        [
          13.6,
          2020.9
        ]
      ]
    },
    {
      "name": "Jalan Mohamad Kafi II",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          13.6,
          2020.9
        ],
        [
          -29.8,
          2052.4
        ],
        [
          -56,
          2083.6
        ],
        [
          -78.8,
          2099.7
        ],
        [
          -124,
          2152.6
        ],
        [
          -160.1,
          2230
        ]
      ]
    },
    {
      "name": "Jalan Mohammad Kahfi I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -138.9,
          1651.8
        ],
        [
          -138.9,
          1642.1
        ]
      ]
    },
    {
      "name": "Jalan Mohammad Kahfi I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -160.2,
          1712.7
        ],
        [
          -159.2,
          1701.9
        ],
        [
          -148.5,
          1698.7
        ],
        [
          -144.8,
          1672.8
        ],
        [
          -138.9,
          1670.2
        ],
        [
          -138.9,
          1651.8
        ]
      ]
    },
    {
      "name": "Jalan Mohammad Kahfi I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -159.7,
          1727.6
        ],
        [
          -160.2,
          1712.7
        ]
      ]
    },
    {
      "name": "Jalan Mohammad Kahfi I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -163.9,
          1836
        ],
        [
          -167.3,
          1796.9
        ],
        [
          -173.9,
          1766.5
        ],
        [
          -166.8,
          1743.8
        ],
        [
          -160.9,
          1738.5
        ],
        [
          -159.7,
          1727.6
        ]
      ]
    },
    {
      "name": "Jalan Mohammad Kahfi I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -229.9,
          1981.7
        ],
        [
          -187.8,
          1882
        ],
        [
          -176.9,
          1877
        ],
        [
          -169.3,
          1868.2
        ],
        [
          -163.9,
          1836
        ]
      ]
    },
    {
      "name": "Jalan Mohammad Kahfi I",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -240,
          2014
        ],
        [
          -233.3,
          1999.6
        ],
        [
          -229.9,
          1981.7
        ]
      ]
    },
    {
      "name": "Jalan Nangka I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          329.7,
          1539
        ],
        [
          380,
          1522.6
        ]
      ]
    },
    {
      "name": "Jalan Nangka Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          311.7,
          1550.7
        ],
        [
          302.6,
          1554.8
        ],
        [
          250.4,
          1559.9
        ]
      ]
    },
    {
      "name": "Jalan Nangka Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          250.4,
          1559.9
        ],
        [
          237.2,
          1564.9
        ]
      ]
    },
    {
      "name": "Jalan Nangka Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          239,
          1560.8
        ],
        [
          250.4,
          1559.9
        ]
      ]
    },
    {
      "name": "Jalan Nusantara",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          276.1,
          2230
        ],
        [
          269.1,
          2184.1
        ],
        [
          252.9,
          2155.7
        ],
        [
          287.4,
          2088.1
        ],
        [
          287,
          2066.9
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -201.8,
          1120
        ],
        [
          -202.4,
          1131.3
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -204.5,
          1131.1
        ],
        [
          -203.7,
          1120
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -202.4,
          1131.3
        ],
        [
          -208.6,
          1180.1
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -207.8,
          1169.8
        ],
        [
          -204.5,
          1131.1
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -213.7,
          1187.8
        ],
        [
          -219.6,
          1200.7
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -220.8,
          1197.5
        ],
        [
          -211.7,
          1181.1
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -219.6,
          1200.7
        ],
        [
          -221.7,
          1253.7
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -223.1,
          1253.7
        ],
        [
          -220.8,
          1197.5
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -221.7,
          1253.7
        ],
        [
          -226,
          1317.7
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -229,
          1323.7
        ],
        [
          -223.1,
          1253.7
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -232.8,
          1332
        ],
        [
          -229,
          1323.7
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -231.9,
          1334.9
        ],
        [
          -236.2,
          1345.4
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -240,
          1342.6
        ],
        [
          -233.7,
          1333.6
        ]
      ]
    },
    {
      "name": "Jalan Pangeran Antasari",
      "type": "primary",
      "width": 18,
      "points": [
        [
          -236.2,
          1345.4
        ],
        [
          -240,
          1352.6
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          330.1,
          1120
        ],
        [
          303.4,
          1250.9
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          314.8,
          1186.9
        ],
        [
          329.1,
          1120
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          305.1,
          1235.7
        ],
        [
          314.8,
          1186.9
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          302.1,
          1247.4
        ],
        [
          305.1,
          1235.7
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          303.4,
          1250.9
        ],
        [
          300.1,
          1276.4
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          302.5,
          1256.7
        ],
        [
          299,
          1276.5
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          301.4,
          1256.8
        ],
        [
          303.9,
          1242.5
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          296.8,
          1275.8
        ],
        [
          301.2,
          1251.9
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          298.1,
          1276.4
        ],
        [
          301.4,
          1256.8
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          298,
          1282.4
        ],
        [
          293.7,
          1299
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          298.8,
          1282.6
        ],
        [
          293.7,
          1302.7
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          292.6,
          1298.8
        ],
        [
          297.1,
          1282.1
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          291.8,
          1301.5
        ],
        [
          294.8,
          1285.7
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          292.8,
          1302.6
        ],
        [
          289.7,
          1317
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          293.7,
          1302.7
        ],
        [
          290.2,
          1317.6
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          288.9,
          1315.1
        ],
        [
          291.8,
          1301.5
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          250,
          1415.4
        ],
        [
          287.5,
          1317.7
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          248.6,
          1422.7
        ],
        [
          288.4,
          1317.9
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          241.3,
          1463.5
        ],
        [
          248.6,
          1422.7
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          238,
          1502.7
        ],
        [
          240.2,
          1476.6
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          234.8,
          1525.6
        ],
        [
          237.2,
          1508.3
        ]
      ]
    },
    {
      "name": "Jalan Pasar Minggu Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          232,
          1540.9
        ],
        [
          234.1,
          1530
        ]
      ]
    },
    {
      "name": "Jalan Paso",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -94.9,
          1716.3
        ],
        [
          -110.2,
          1714.8
        ],
        [
          -111.8,
          1720.8
        ],
        [
          -117.8,
          1720.5
        ]
      ]
    },
    {
      "name": "Jalan Paso",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -91.7,
          1717.2
        ],
        [
          -93.7,
          1728.5
        ]
      ]
    },
    {
      "name": "Jalan Paso",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -117.8,
          1720.5
        ],
        [
          -160.2,
          1712.7
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Barat Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -32.9,
          1145.7
        ],
        [
          -1.4,
          1155.7
        ],
        [
          22,
          1159.1
        ],
        [
          29,
          1163.5
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Barat Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          29,
          1163.5
        ],
        [
          -33.2,
          1146.8
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Barat Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          37.4,
          1168.3
        ],
        [
          47.1,
          1169.8
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Barat Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          48.1,
          1169.5
        ],
        [
          65,
          1172.7
        ],
        [
          74.9,
          1188.6
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Barat Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          62.9,
          1173.1
        ],
        [
          48,
          1170.5
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Barat Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          68.8,
          1181
        ],
        [
          62.9,
          1173.1
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Barat Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          74.9,
          1188.6
        ],
        [
          68.8,
          1181
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          245.8,
          1161.2
        ],
        [
          248,
          1152.9
        ],
        [
          260.3,
          1153.7
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          245.8,
          1161.2
        ],
        [
          237.4,
          1190.2
        ],
        [
          231.7,
          1195
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          264.1,
          1163.3
        ],
        [
          260.3,
          1153.7
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          125.9,
          1186.1
        ],
        [
          93.5,
          1199.9
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          311,
          1186.1
        ],
        [
          272.3,
          1176.3
        ],
        [
          264.1,
          1163.3
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          138,
          1191
        ],
        [
          125.9,
          1186.1
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          231.7,
          1195
        ],
        [
          166.4,
          1203.1
        ]
      ]
    },
    {
      "name": "Jalan Pejaten Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          158.1,
          1201.4
        ],
        [
          142.6,
          1193.9
        ]
      ]
    },
    {
      "name": "Jalan Pepaya Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -38.3,
          1866.4
        ],
        [
          -44.1,
          1853.7
        ],
        [
          -44.9,
          1827.2
        ],
        [
          -52.9,
          1825
        ],
        [
          -57,
          1807.1
        ],
        [
          -64,
          1796.3
        ],
        [
          -63.9,
          1774.5
        ],
        [
          -54.8,
          1734.2
        ]
      ]
    },
    {
      "name": "Jalan Persahabatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -217.6,
          2212.6
        ],
        [
          -196.6,
          2193.5
        ],
        [
          -181.9,
          2151.2
        ],
        [
          -173,
          2138.2
        ]
      ]
    },
    {
      "name": "Jalan Poltangan Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          305.3,
          1445.2
        ],
        [
          291.5,
          1434.2
        ],
        [
          254.7,
          1423.7
        ]
      ]
    },
    {
      "name": "Jalan Poltangan Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          365.8,
          1457.8
        ],
        [
          305.3,
          1445.2
        ]
      ]
    },
    {
      "name": "Jalan Poltangan Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          380,
          1504.5
        ],
        [
          369.1,
          1489.9
        ],
        [
          365.8,
          1457.8
        ]
      ]
    },
    {
      "name": "Jalan Pucung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          371,
          1238.9
        ],
        [
          380,
          1228
        ]
      ]
    },
    {
      "name": "Jalan Puri Mutiara Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -208.6,
          1180.1
        ],
        [
          -154,
          1185.8
        ]
      ]
    },
    {
      "name": "Jalan Puskesmas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          368.2,
          1988.1
        ],
        [
          380,
          1982.9
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          380,
          1780.3
        ],
        [
          360.9,
          1797.7
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          359.9,
          1796.6
        ],
        [
          380,
          1778.1
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          360.9,
          1797.7
        ],
        [
          354.4,
          1803.6
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          354.4,
          1803.6
        ],
        [
          344.8,
          1811.7
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          340.8,
          1813.9
        ],
        [
          316.7,
          1837.3
        ],
        [
          306,
          1867.6
        ],
        [
          307.4,
          1887.3
        ],
        [
          319.9,
          1929.8
        ],
        [
          319.8,
          1969
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          340.8,
          1813.9
        ],
        [
          359.9,
          1796.6
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          293.5,
          2014.5
        ],
        [
          313.7,
          2013
        ],
        [
          319.5,
          1985.8
        ],
        [
          319.8,
          1969
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          284,
          2037.3
        ],
        [
          293.5,
          2014.5
        ]
      ]
    },
    {
      "name": "Jalan RM Harsono",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -8.9,
          1406.1
        ],
        [
          -25.9,
          1449.1
        ],
        [
          -26.1,
          1464.2
        ]
      ]
    },
    {
      "name": "Jalan RM Harsono",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -28.3,
          1463.7
        ],
        [
          -27.9,
          1448.6
        ],
        [
          -13.1,
          1410.6
        ]
      ]
    },
    {
      "name": "Jalan RM Harsono",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -26.5,
          1474.3
        ],
        [
          -26.2,
          1490.8
        ]
      ]
    },
    {
      "name": "Jalan RM Harsono",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -28,
          1482.6
        ],
        [
          -28.2,
          1473.4
        ]
      ]
    },
    {
      "name": "Jalan RM Harsono",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -25.1,
          1495.7
        ],
        [
          -25.3,
          1519.6
        ]
      ]
    },
    {
      "name": "Jalan RM Harsono",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -25.3,
          1519.6
        ],
        [
          -26.9,
          1531.3
        ]
      ]
    },
    {
      "name": "Jalan RM Harsono",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -28.4,
          1531.1
        ],
        [
          -26.1,
          1495.6
        ]
      ]
    },
    {
      "name": "Jalan RM Harsono",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -27.8,
          1537.1
        ],
        [
          -33.7,
          1571
        ]
      ]
    },
    {
      "name": "Jalan RM Harsono",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -34.6,
          1568.7
        ],
        [
          -28.8,
          1533.8
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          193.2,
          1278.3
        ],
        [
          207,
          1279
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          207,
          1279
        ],
        [
          236.2,
          1283.8
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          183.6,
          1279.4
        ],
        [
          172.3,
          1285.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          206.9,
          1279.9
        ],
        [
          190.3,
          1279.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          288.2,
          1280
        ],
        [
          279.8,
          1280.1
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          279.8,
          1280.1
        ],
        [
          270,
          1281.5
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          269.9,
          1281
        ],
        [
          286.4,
          1279
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          269,
          1281.3
        ],
        [
          257.4,
          1283.3
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          257.4,
          1283.3
        ],
        [
          249.4,
          1284.5
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          172,
          1285.1
        ],
        [
          181.7,
          1279.1
        ],
        [
          190.2,
          1278.3
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          240.4,
          1285.2
        ],
        [
          208.8,
          1280.3
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          169.7,
          1287.4
        ],
        [
          157.6,
          1293.4
        ],
        [
          103.3,
          1292.4
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          103.4,
          1291.6
        ],
        [
          120,
          1292
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          120,
          1292
        ],
        [
          159.1,
          1292.5
        ],
        [
          169.4,
          1286.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          71.7,
          1292.1
        ],
        [
          86.8,
          1291.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          87,
          1292.1
        ],
        [
          71.8,
          1292.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          67.5,
          1293.1
        ],
        [
          43.7,
          1294.3
        ]
      ]
    },
    {
      "name": "Jalan Raya Ragunan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          44.9,
          1293.5
        ],
        [
          67.4,
          1292.3
        ]
      ]
    },
    {
      "name": "Jalan Raya Tanjung Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          248.6,
          1544.2
        ],
        [
          243.7,
          1554.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Tanjung Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          243.7,
          1554.2
        ],
        [
          231.4,
          1581.8
        ]
      ]
    },
    {
      "name": "Jalan Raya Tanjung Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          231.4,
          1581.8
        ],
        [
          210.5,
          1697.5
        ]
      ]
    },
    {
      "name": "Jalan Rusli Hakim",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          264.1,
          1163.3
        ],
        [
          245.8,
          1161.2
        ]
      ]
    },
    {
      "name": "Jalan Saco",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -35,
          1570.8
        ],
        [
          -95.8,
          1560.7
        ],
        [
          -95.8,
          1573.5
        ],
        [
          -87.8,
          1585.8
        ]
      ]
    },
    {
      "name": "Jalan Saco",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -87.8,
          1585.8
        ],
        [
          -85.8,
          1590.4
        ],
        [
          -90.2,
          1599.2
        ],
        [
          -101.2,
          1606.6
        ],
        [
          -104,
          1622.5
        ],
        [
          -102.3,
          1631.1
        ]
      ]
    },
    {
      "name": "Jalan Saco",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -102.3,
          1631.1
        ],
        [
          -97.3,
          1640.3
        ]
      ]
    },
    {
      "name": "Jalan Saco",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          -97.3,
          1640.3
        ],
        [
          -94.9,
          1716.3
        ]
      ]
    },
    {
      "name": "Jalan Sadar Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -131.3,
          1874.3
        ],
        [
          -130.7,
          1888.6
        ],
        [
          -135,
          1891.9
        ],
        [
          -137.2,
          1902.6
        ],
        [
          -127.1,
          1922.7
        ],
        [
          -129.7,
          1939.2
        ]
      ]
    },
    {
      "name": "Jalan Sadar Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -129.7,
          1939.2
        ],
        [
          -137.2,
          1960.5
        ],
        [
          -138.5,
          1981.8
        ]
      ]
    },
    {
      "name": "Jalan Sadar Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -138.5,
          1981.8
        ],
        [
          -141.7,
          2008.6
        ],
        [
          -135.1,
          2022.3
        ]
      ]
    },
    {
      "name": "Jalan Sadar Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -135.1,
          2022.3
        ],
        [
          -133.8,
          2045.6
        ],
        [
          -148.2,
          2065.1
        ],
        [
          -145.8,
          2081.2
        ],
        [
          -150.6,
          2113.4
        ]
      ]
    },
    {
      "name": "Jalan Sagu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -93.7,
          1728.5
        ],
        [
          -74.5,
          1733.7
        ],
        [
          -54.8,
          1734.2
        ]
      ]
    },
    {
      "name": "Jalan Sagu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -54.8,
          1734.2
        ],
        [
          -27.8,
          1738
        ],
        [
          6.1,
          1735.6
        ],
        [
          9.2,
          1736.4
        ],
        [
          9.2,
          1741.2
        ],
        [
          25.2,
          1742.4
        ]
      ]
    },
    {
      "name": "Jalan Salihara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          220.1,
          1211.3
        ],
        [
          207,
          1279
        ]
      ]
    },
    {
      "name": "Jalan Sawo Manila",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          231.7,
          1195
        ],
        [
          224.7,
          1208.8
        ],
        [
          220.1,
          1211.3
        ]
      ]
    },
    {
      "name": "Jalan Sepat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          139.6,
          1552.5
        ],
        [
          133.9,
          1553.2
        ],
        [
          121.1,
          1547.2
        ],
        [
          122,
          1537.9
        ],
        [
          111.6,
          1530.9
        ],
        [
          112.5,
          1521.6
        ],
        [
          120.3,
          1505.9
        ]
      ]
    },
    {
      "name": "Jalan Siaga II",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          261.3,
          1143.2
        ],
        [
          260.3,
          1153.7
        ]
      ]
    },
    {
      "name": "Jalan Siaga Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          235.7,
          1120
        ],
        [
          255.7,
          1139
        ]
      ]
    },
    {
      "name": "Jalan Sirsak",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -48,
          1979.3
        ],
        [
          -19.5,
          1979.8
        ],
        [
          36.7,
          2000.8
        ]
      ]
    },
    {
      "name": "Jalan Sirsak Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -74.9,
          2036.1
        ],
        [
          -48,
          1979.3
        ]
      ]
    },
    {
      "name": "Jalan Sirsak Ujung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -112.3,
          2020.1
        ],
        [
          -74.9,
          2036.1
        ]
      ]
    },
    {
      "name": "Jalan Srengseng Sawah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -26.8,
          2134.3
        ],
        [
          -44.4,
          2188.9
        ],
        [
          -46.1,
          2214.6
        ],
        [
          -57.2,
          2230
        ]
      ]
    },
    {
      "name": "Jalan Srengseng Sawah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          42.9,
          2138.7
        ],
        [
          55.1,
          2142
        ],
        [
          59.7,
          2134.2
        ],
        [
          73.6,
          2122.5
        ],
        [
          100,
          2132.2
        ],
        [
          117.6,
          2127.9
        ],
        [
          132.1,
          2130.1
        ]
      ]
    },
    {
      "name": "Jalan Srengseng Sawah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          42.9,
          2138.7
        ],
        [
          38,
          2149.2
        ],
        [
          10.9,
          2140.6
        ]
      ]
    },
    {
      "name": "Jalan Srengseng Sawah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          10.9,
          2140.6
        ],
        [
          -13.8,
          2139.9
        ],
        [
          -26.8,
          2134.3
        ]
      ]
    },
    {
      "name": "Jalan Swadaya Gudang Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -74.9,
          2036.1
        ],
        [
          -90.5,
          2060.2
        ],
        [
          -116.6,
          2122.6
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -120.8,
          1375.4
        ],
        [
          -103.9,
          1375.8
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -183.5,
          1375.5
        ],
        [
          -122.9,
          1375.4
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -103.9,
          1375.8
        ],
        [
          -88.3,
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
          -240,
          1376.1
        ],
        [
          -201.9,
          1376.1
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -201.9,
          1376.1
        ],
        [
          -183.5,
          1375.5
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -74.1,
          1377.7
        ],
        [
          -27.9,
          1389.1
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -152.5,
          1381.6
        ],
        [
          -199.7,
          1384.5
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -114.4,
          1383.4
        ],
        [
          -152.5,
          1381.6
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -105.7,
          1383.8
        ],
        [
          -114.4,
          1383.4
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -92,
          1384.4
        ],
        [
          -100.8,
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
          -200.9,
          1384.6
        ],
        [
          -222.1,
          1385.2
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -222.1,
          1385.2
        ],
        [
          -240,
          1385.3
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -73.2,
          1385.9
        ],
        [
          -83.2,
          1385.1
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -23.7,
          1390.9
        ],
        [
          -13,
          1396.5
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          -30.5,
          1397.2
        ],
        [
          -73.2,
          1385.9
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          3,
          1403.7
        ],
        [
          11.3,
          1407.5
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          17.9,
          1410.7
        ],
        [
          28.7,
          1415.8
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          3.7,
          1411
        ],
        [
          -4.5,
          1407.9
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          28.7,
          1415.8
        ],
        [
          62.4,
          1432.4
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          19.3,
          1416.9
        ],
        [
          3.7,
          1411
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          27.6,
          1421
        ],
        [
          19.3,
          1416.9
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          62.4,
          1432.4
        ],
        [
          112.8,
          1459.6
        ],
        [
          188.9,
          1509
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          56.2,
          1436.6
        ],
        [
          34.5,
          1424.7
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          90.2,
          1454.9
        ],
        [
          62.7,
          1440.2
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          144.1,
          1487.9
        ],
        [
          90.2,
          1454.9
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          192.1,
          1511.3
        ],
        [
          199.3,
          1515.2
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          189.5,
          1516.9
        ],
        [
          144.1,
          1487.9
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          205,
          1517.4
        ],
        [
          237.7,
          1528.3
        ],
        [
          266.6,
          1533.9
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          200.4,
          1523.1
        ],
        [
          193.4,
          1519.2
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          266.6,
          1533.9
        ],
        [
          275.6,
          1535.5
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          275.6,
          1535.5
        ],
        [
          292.2,
          1538.3
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          292.2,
          1538.3
        ],
        [
          348.4,
          1544.9
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          262.8,
          1540.6
        ],
        [
          230.8,
          1534
        ],
        [
          202.7,
          1524.2
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          278.2,
          1543.3
        ],
        [
          262.8,
          1540.6
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          348.4,
          1544.9
        ],
        [
          380,
          1546.9
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          291.6,
          1545.2
        ],
        [
          280.7,
          1543.6
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          311.9,
          1548.2
        ],
        [
          291.6,
          1545.2
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          322,
          1549.1
        ],
        [
          311.9,
          1548.2
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          360.5,
          1552.2
        ],
        [
          322,
          1549.1
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          380,
          1553.6
        ],
        [
          360.5,
          1552.2
        ]
      ]
    },
    {
      "name": "Jalan Tanjung Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          289.5,
          1326.3
        ],
        [
          253.7,
          1419.6
        ]
      ]
    },
    {
      "name": "Jalan Tanjung Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          252.4,
          1424.5
        ],
        [
          247.1,
          1457.6
        ]
      ]
    },
    {
      "name": "Jalan Tanjung Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          247.1,
          1457.6
        ],
        [
          245.8,
          1467.7
        ]
      ]
    },
    {
      "name": "Jalan Tanjung Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          245.8,
          1467.7
        ],
        [
          244.9,
          1476.6
        ]
      ]
    },
    {
      "name": "Jalan Tanjung Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          244.9,
          1476.6
        ],
        [
          237.5,
          1539
        ]
      ]
    },
    {
      "name": "Jalan Tanjung Barat Lama",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          247.1,
          1457.6
        ],
        [
          247.9,
          1467.8
        ]
      ]
    },
    {
      "name": "Jalan Tanjung Barat Lama",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          247.9,
          1467.8
        ],
        [
          255.3,
          1517.1
        ],
        [
          254.4,
          1530.3
        ]
      ]
    },
    {
      "name": "Jalan Timbul Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -240,
          2209.9
        ],
        [
          -217.6,
          2212.6
        ]
      ]
    },
    {
      "name": "Jalan Timbul Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -217.6,
          2212.6
        ],
        [
          -208.3,
          2215.9
        ],
        [
          -199.9,
          2214.4
        ],
        [
          -159.7,
          2229.1
        ]
      ]
    },
    {
      "name": "Jalan Warung Jati Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          81.4,
          1204.4
        ],
        [
          73,
          1220.6
        ]
      ]
    },
    {
      "name": "Jalan Warung Jati Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          76.7,
          1204.9
        ],
        [
          83.1,
          1197.6
        ]
      ]
    },
    {
      "name": "Jalan Warung Jati Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          73,
          1220.6
        ],
        [
          43.6,
          1290.5
        ]
      ]
    },
    {
      "name": "Jalan Warung Jati Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          67.6,
          1227.3
        ],
        [
          76.7,
          1204.9
        ]
      ]
    },
    {
      "name": "Jalan Warung Jati Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          67.6,
          1227.3
        ],
        [
          83.1,
          1197.6
        ]
      ]
    },
    {
      "name": "Jalan Warung Jati Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          57.3,
          1246.9
        ],
        [
          67.6,
          1227.3
        ]
      ]
    },
    {
      "name": "Jalan Warung Jati Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          40.3,
          1293.7
        ],
        [
          57.3,
          1246.9
        ]
      ]
    },
    {
      "name": "Jalan Warung Silah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -150.6,
          2113.4
        ],
        [
          -129.1,
          2117.5
        ],
        [
          -103.8,
          2129.5
        ]
      ]
    },
    {
      "name": "Jalan Warung Silah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -240,
          2128.1
        ],
        [
          -236.5,
          2126
        ],
        [
          -212.7,
          2129.3
        ],
        [
          -200.7,
          2127.2
        ],
        [
          -162.1,
          2142
        ]
      ]
    },
    {
      "name": "Jalan Warung Silah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          -162.1,
          2142
        ],
        [
          -150.6,
          2113.4
        ]
      ]
    }
  ],
  "waterways": [
    {
      "name": "Ci Liwung",
      "kind": "river",
      "width": 16,
      "points": [
        [
          380,
          1198.7
        ],
        [
          349.5,
          1206.3
        ],
        [
          341.4,
          1202.7
        ],
        [
          334.8,
          1192.4
        ],
        [
          359.9,
          1172.1
        ],
        [
          369.2,
          1158.1
        ],
        [
          380,
          1157.6
        ]
      ]
    },
    {
      "name": "Ci Liwung",
      "kind": "river",
      "width": 16,
      "points": [
        [
          380,
          1321.5
        ],
        [
          371.8,
          1326.7
        ],
        [
          358.8,
          1320
        ],
        [
          345.8,
          1302.8
        ],
        [
          342.8,
          1285
        ],
        [
          364.7,
          1257.5
        ],
        [
          360.2,
          1252.7
        ],
        [
          348.3,
          1254.1
        ],
        [
          347.2,
          1247.2
        ],
        [
          371.6,
          1214.8
        ],
        [
          380,
          1208.8
        ]
      ]
    },
    {
      "name": "Ci Liwung",
      "kind": "river",
      "width": 16,
      "points": [
        [
          380,
          1376
        ],
        [
          371.3,
          1356.2
        ],
        [
          372.9,
          1350.2
        ],
        [
          380,
          1348.8
        ]
      ]
    },
    {
      "name": "Ci Liwung",
      "kind": "river",
      "width": 16,
      "points": [
        [
          380,
          1486.7
        ],
        [
          375.1,
          1475.3
        ],
        [
          380,
          1470.9
        ]
      ]
    },
    {
      "name": "Ci Liwung",
      "kind": "river",
      "width": 16,
      "points": [
        [
          368,
          1754.6
        ],
        [
          373.1,
          1749.9
        ],
        [
          372.1,
          1739
        ],
        [
          380,
          1732
        ]
      ]
    },
    {
      "name": "Ciliwung",
      "kind": "river",
      "width": 16,
      "points": [
        [
          176,
          2230
        ],
        [
          175.2,
          2226.5
        ],
        [
          180.1,
          2223.4
        ],
        [
          223.2,
          2226.8
        ],
        [
          230.5,
          2218.1
        ],
        [
          211.5,
          2181.5
        ],
        [
          213.4,
          2172.5
        ],
        [
          207.9,
          2156
        ],
        [
          211.8,
          2151.4
        ],
        [
          228.4,
          2144.4
        ],
        [
          237.9,
          2122.1
        ],
        [
          235.7,
          2109.3
        ],
        [
          219.2,
          2102
        ],
        [
          210.3,
          2103.4
        ],
        [
          191.7,
          2123.6
        ],
        [
          179,
          2120
        ],
        [
          176,
          2113.2
        ],
        [
          195.3,
          2085
        ],
        [
          214.5,
          2073.3
        ],
        [
          218.4,
          2074.2
        ],
        [
          221.8,
          2081.9
        ],
        [
          231.9,
          2089.6
        ],
        [
          240.7,
          2092.9
        ],
        [
          250.2,
          2091.8
        ],
        [
          254.1,
          2082.2
        ],
        [
          253.2,
          2074.9
        ],
        [
          243.3,
          2067.3
        ],
        [
          232.7,
          2068.3
        ],
        [
          230.2,
          2059.2
        ],
        [
          244.5,
          2039.2
        ],
        [
          245.4,
          2032
        ],
        [
          243.4,
          2019.1
        ],
        [
          246.8,
          2002.4
        ],
        [
          240.1,
          1997.6
        ],
        [
          235,
          1985.3
        ],
        [
          238.1,
          1952.1
        ],
        [
          243.9,
          1944.5
        ],
        [
          260.8,
          1946.4
        ],
        [
          287.7,
          1940
        ],
        [
          285.9,
          1933.7
        ],
        [
          266,
          1929.1
        ],
        [
          246.3,
          1911.6
        ],
        [
          243.6,
          1905.5
        ],
        [
          260,
          1865.3
        ],
        [
          267.2,
          1880.2
        ],
        [
          274,
          1879.9
        ],
        [
          281.1,
          1873
        ],
        [
          284.4,
          1863.5
        ],
        [
          280.2,
          1850.8
        ],
        [
          258.8,
          1821.5
        ],
        [
          239.7,
          1810.1
        ],
        [
          240.6,
          1801
        ],
        [
          253,
          1796.1
        ],
        [
          250.9,
          1789.4
        ],
        [
          233.1,
          1795.6
        ],
        [
          223.3,
          1795.4
        ],
        [
          216.1,
          1787.9
        ],
        [
          216,
          1781.1
        ],
        [
          224.9,
          1766.9
        ],
        [
          240.3,
          1752.5
        ],
        [
          273.3,
          1743.8
        ],
        [
          289,
          1751.6
        ],
        [
          296.3,
          1747.7
        ],
        [
          300.2,
          1724.4
        ],
        [
          308.9,
          1722.8
        ],
        [
          324.4,
          1730.2
        ],
        [
          330.6,
          1726.5
        ],
        [
          342,
          1709.4
        ],
        [
          356.7,
          1702.1
        ],
        [
          363,
          1705.3
        ],
        [
          366,
          1710.9
        ],
        [
          358.8,
          1732.7
        ],
        [
          356.4,
          1736.5
        ],
        [
          339.2,
          1739.8
        ],
        [
          336.5,
          1743.5
        ],
        [
          338.9,
          1746.7
        ],
        [
          352.5,
          1747.4
        ],
        [
          368,
          1754.6
        ]
      ]
    },
    {
      "name": "Kali Baru Barat",
      "kind": "canal",
      "width": 9,
      "points": [
        [
          189.5,
          1508
        ],
        [
          183.4,
          1447.4
        ],
        [
          209.9,
          1412.9
        ],
        [
          234.5,
          1401.4
        ],
        [
          256.5,
          1383.6
        ],
        [
          282.5,
          1323.8
        ],
        [
          291.7,
          1263.5
        ],
        [
          297.1,
          1253.2
        ],
        [
          305.9,
          1206.9
        ],
        [
          320.8,
          1157
        ],
        [
          325.6,
          1120
        ]
      ]
    },
    {
      "name": "Kali Baru Barat",
      "kind": "canal",
      "width": 9,
      "points": [
        [
          192.2,
          1519.3
        ],
        [
          189.5,
          1508
        ]
      ]
    },
    {
      "name": "Kali Baru Barat",
      "kind": "canal",
      "width": 9,
      "points": [
        [
          174.7,
          1773.8
        ],
        [
          171.2,
          1756.3
        ],
        [
          173.4,
          1736.1
        ],
        [
          181.4,
          1718.7
        ],
        [
          199.7,
          1592.2
        ],
        [
          200.9,
          1548
        ],
        [
          199,
          1533.4
        ],
        [
          192.2,
          1519.3
        ]
      ]
    },
    {
      "name": "Kali Baru Barat",
      "kind": "canal",
      "width": 9,
      "points": [
        [
          168.5,
          1939.2
        ],
        [
          166.2,
          1927.7
        ],
        [
          146.9,
          1889.9
        ],
        [
          146.5,
          1860.2
        ],
        [
          149.1,
          1850.2
        ],
        [
          179.8,
          1801.6
        ],
        [
          181.5,
          1790.6
        ],
        [
          174.8,
          1774.3
        ]
      ]
    },
    {
      "name": "Kali Baru Barat",
      "kind": "canal",
      "width": 9,
      "points": [
        [
          120.8,
          2014.7
        ],
        [
          132.2,
          2010
        ],
        [
          153.5,
          2010.5
        ],
        [
          153.5,
          1993.3
        ],
        [
          164.1,
          1965.3
        ],
        [
          167.9,
          1945.5
        ]
      ]
    },
    {
      "name": "Kali Baru Barat",
      "kind": "canal",
      "width": 9,
      "points": [
        [
          -53.8,
          2082.1
        ],
        [
          -33.8,
          2057.3
        ],
        [
          26.1,
          2012.8
        ],
        [
          45.7,
          2022.5
        ],
        [
          57.5,
          2017.7
        ],
        [
          76.9,
          1999.3
        ],
        [
          80.6,
          1999.2
        ],
        [
          88.3,
          2009.4
        ],
        [
          84.7,
          2013.5
        ],
        [
          91.4,
          2023.3
        ],
        [
          102.1,
          2023.3
        ],
        [
          120.8,
          2014.7
        ]
      ]
    },
    {
      "name": "Kali Baru Barat",
      "kind": "canal",
      "width": 9,
      "points": [
        [
          -159.2,
          2230
        ],
        [
          -124.7,
          2155.1
        ],
        [
          -79,
          2100.2
        ],
        [
          -53.8,
          2082.1
        ]
      ]
    },
    {
      "name": "Kali Krukut",
      "kind": "river",
      "width": 10,
      "points": [
        [
          -236.7,
          1358.1
        ],
        [
          -224.8,
          1353.5
        ],
        [
          -221.8,
          1348.5
        ],
        [
          -212.7,
          1350.7
        ],
        [
          -207,
          1344
        ],
        [
          -202.5,
          1332.2
        ],
        [
          -204.6,
          1311.8
        ],
        [
          -197.5,
          1304.8
        ],
        [
          -195.4,
          1288.5
        ],
        [
          -187.5,
          1288.1
        ],
        [
          -188.1,
          1269.4
        ],
        [
          -192.4,
          1260.2
        ],
        [
          -189.4,
          1253.7
        ],
        [
          -193.2,
          1239.9
        ],
        [
          -187.7,
          1228.3
        ],
        [
          -176.9,
          1218.6
        ],
        [
          -172.5,
          1200.6
        ],
        [
          -159.3,
          1197.4
        ],
        [
          -152.1,
          1184.4
        ],
        [
          -145.8,
          1180.3
        ],
        [
          -140.9,
          1168.3
        ],
        [
          -143.4,
          1155.4
        ],
        [
          -135.7,
          1148.4
        ],
        [
          -126.6,
          1148
        ],
        [
          -124.5,
          1138
        ],
        [
          -129.1,
          1120
        ]
      ]
    },
    {
      "name": "Krukut",
      "kind": "river",
      "width": 10,
      "points": [
        [
          -240,
          1438.6
        ],
        [
          -227.9,
          1428.4
        ],
        [
          -240,
          1409.9
        ]
      ]
    },
    {
      "name": "Krukut",
      "kind": "river",
      "width": 10,
      "points": [
        [
          -197.9,
          1694.1
        ],
        [
          -199.4,
          1687.2
        ],
        [
          -213.2,
          1676.9
        ],
        [
          -208.4,
          1665.8
        ],
        [
          -213.5,
          1651.3
        ],
        [
          -204.7,
          1637
        ],
        [
          -215.5,
          1620.3
        ],
        [
          -221.4,
          1622
        ],
        [
          -228.3,
          1616.6
        ],
        [
          -225.9,
          1612.7
        ],
        [
          -203.6,
          1605.4
        ],
        [
          -208.5,
          1584.9
        ],
        [
          -202.6,
          1583.7
        ],
        [
          -204.9,
          1571.5
        ],
        [
          -194.6,
          1567.9
        ],
        [
          -195,
          1561.4
        ],
        [
          -199.6,
          1546.2
        ],
        [
          -205.7,
          1544.5
        ],
        [
          -210.2,
          1534.1
        ],
        [
          -217.8,
          1534.9
        ],
        [
          -225.3,
          1527.9
        ],
        [
          -236.1,
          1495.4
        ],
        [
          -236.3,
          1480
        ],
        [
          -240,
          1472.2
        ]
      ]
    },
    {
      "name": "Krukut",
      "kind": "river",
      "width": 10,
      "points": [
        [
          -220.8,
          1785.6
        ],
        [
          -221.8,
          1776.8
        ],
        [
          -218.5,
          1772.9
        ],
        [
          -222.8,
          1765.9
        ],
        [
          -217.7,
          1758.7
        ],
        [
          -211,
          1755.5
        ],
        [
          -216.6,
          1740.2
        ],
        [
          -208.4,
          1728.5
        ],
        [
          -201.2,
          1727.3
        ],
        [
          -203.1,
          1717.6
        ],
        [
          -196.9,
          1717.1
        ],
        [
          -195,
          1710.6
        ],
        [
          -197.9,
          1694.1
        ]
      ]
    },
    {
      "name": "Mampang",
      "kind": "river",
      "width": 8,
      "points": [
        [
          82.9,
          1190.8
        ],
        [
          74.7,
          1171.8
        ],
        [
          76.8,
          1163.2
        ],
        [
          83.6,
          1157.3
        ],
        [
          84.5,
          1142.8
        ],
        [
          81.3,
          1131.4
        ],
        [
          85.6,
          1125.2
        ],
        [
          82.7,
          1120
        ]
      ]
    },
    {
      "name": "Sungai Krukut",
      "kind": "river",
      "width": 10,
      "points": [
        [
          -223.5,
          1804.7
        ],
        [
          -223.5,
          1800.6
        ],
        [
          -233.4,
          1795
        ],
        [
          -231.3,
          1790.1
        ],
        [
          -220.8,
          1785.6
        ]
      ]
    },
    {
      "name": "Sungai Krukut",
      "kind": "river",
      "width": 10,
      "points": [
        [
          -238.4,
          1810.9
        ],
        [
          -225.9,
          1807.4
        ]
      ]
    },
    {
      "name": "Sungai Krukut",
      "kind": "river",
      "width": 10,
      "points": [
        [
          -240,
          1827
        ],
        [
          -235.1,
          1824.2
        ],
        [
          -240,
          1817.1
        ]
      ]
    }
  ],
  "waterBodies": [
    {
      "name": "Waduk Cilandak",
      "kind": "lake",
      "points": [
        [
          -232,
          1436.7
        ],
        [
          -237.7,
          1440.6
        ],
        [
          -240,
          1442
        ],
        [
          -240,
          1451.3
        ],
        [
          -239.1,
          1451.8
        ],
        [
          -237.1,
          1453.1
        ],
        [
          -234.2,
          1454.4
        ],
        [
          -229.6,
          1455.6
        ],
        [
          -221.1,
          1454.9
        ],
        [
          -218.2,
          1453.8
        ],
        [
          -217,
          1452.6
        ],
        [
          -216.9,
          1450.9
        ],
        [
          -216,
          1448.3
        ],
        [
          -211.7,
          1441.5
        ],
        [
          -210.2,
          1437.9
        ],
        [
          -220.5,
          1437.8
        ],
        [
          -222.4,
          1439.1
        ],
        [
          -223.4,
          1440.8
        ],
        [
          -224.7,
          1440.6
        ],
        [
          -232,
          1436.7
        ]
      ]
    },
    {
      "name": "Situ Mangga Bolong",
      "kind": "lake",
      "points": [
        [
          -18.4,
          2219.5
        ],
        [
          -16.6,
          2220.3
        ],
        [
          -15.6,
          2220.3
        ],
        [
          -15.2,
          2219.5
        ],
        [
          -14.7,
          2218.7
        ],
        [
          -14.3,
          2218.5
        ],
        [
          -13.9,
          2218.5
        ],
        [
          -12.7,
          2219.1
        ],
        [
          -12.2,
          2219.2
        ],
        [
          -11.5,
          2219.1
        ],
        [
          -11,
          2218.5
        ],
        [
          -6.9,
          2206.9
        ],
        [
          -3.7,
          2195
        ],
        [
          -3.9,
          2194
        ],
        [
          -4.1,
          2192.8
        ],
        [
          -4,
          2191.6
        ],
        [
          -3.8,
          2189.9
        ],
        [
          -2.8,
          2187.5
        ],
        [
          -2,
          2186.1
        ],
        [
          -0.9,
          2185.5
        ],
        [
          0,
          2183.8
        ],
        [
          3.4,
          2172.2
        ],
        [
          3.7,
          2171.3
        ],
        [
          3.4,
          2170.8
        ],
        [
          2.9,
          2170.5
        ],
        [
          -11.9,
          2169.1
        ],
        [
          -18.9,
          2168.2
        ],
        [
          -19.7,
          2168.3
        ],
        [
          -20.5,
          2168.7
        ],
        [
          -21,
          2169.3
        ],
        [
          -21.9,
          2171
        ],
        [
          -22.7,
          2173.4
        ],
        [
          -23.3,
          2177.2
        ],
        [
          -23.5,
          2183.5
        ],
        [
          -23.4,
          2189.4
        ],
        [
          -23.7,
          2195
        ],
        [
          -23.9,
          2204.9
        ],
        [
          -23.6,
          2206.7
        ],
        [
          -23.7,
          2209.7
        ],
        [
          -23.9,
          2211
        ],
        [
          -24.2,
          2213.1
        ],
        [
          -24.2,
          2213.7
        ],
        [
          -23.7,
          2214.6
        ],
        [
          -23.8,
          2215
        ],
        [
          -24.3,
          2216.7
        ],
        [
          -24.2,
          2217.2
        ],
        [
          -24,
          2217.5
        ],
        [
          -23.3,
          2217.9
        ],
        [
          -20.7,
          2218.9
        ],
        [
          -18.4,
          2219.5
        ]
      ]
    },
    {
      "name": "Danau Salam",
      "kind": "lake",
      "points": [
        [
          92.4,
          2230
        ],
        [
          92.5,
          2229.5
        ],
        [
          93,
          2228
        ],
        [
          94.4,
          2223.3
        ],
        [
          95.7,
          2220.7
        ],
        [
          97.9,
          2218.5
        ],
        [
          99.7,
          2215
        ],
        [
          100.9,
          2213.1
        ],
        [
          102,
          2211.8
        ],
        [
          103.2,
          2210.9
        ],
        [
          105.7,
          2210
        ],
        [
          108.1,
          2208.9
        ],
        [
          109.5,
          2207.8
        ],
        [
          109.7,
          2207.1
        ],
        [
          109.8,
          2205.1
        ],
        [
          109.6,
          2200.2
        ],
        [
          109.3,
          2197.9
        ],
        [
          109.2,
          2196
        ],
        [
          109.9,
          2194.2
        ],
        [
          113.8,
          2188.8
        ],
        [
          112.2,
          2188
        ],
        [
          104.7,
          2184.9
        ],
        [
          103.8,
          2184.7
        ],
        [
          102.9,
          2185.2
        ],
        [
          100.6,
          2188.5
        ],
        [
          97.8,
          2192.3
        ],
        [
          97,
          2193.5
        ],
        [
          96.8,
          2194.1
        ],
        [
          97.2,
          2194.8
        ],
        [
          97.4,
          2195.9
        ],
        [
          97,
          2198.6
        ],
        [
          96.3,
          2201.3
        ],
        [
          94.5,
          2204.4
        ],
        [
          92.7,
          2207.4
        ],
        [
          92.1,
          2208.1
        ],
        [
          90.9,
          2208.9
        ],
        [
          90.7,
          2209.7
        ],
        [
          90.2,
          2209.9
        ],
        [
          89.6,
          2209.5
        ],
        [
          89.1,
          2208.8
        ],
        [
          88.1,
          2208
        ],
        [
          85.5,
          2206.8
        ],
        [
          84.3,
          2206.2
        ],
        [
          83.1,
          2204.5
        ],
        [
          82.5,
          2202.5
        ],
        [
          81.6,
          2201.1
        ],
        [
          80.1,
          2199.1
        ],
        [
          79.4,
          2198.1
        ],
        [
          77.9,
          2197.5
        ],
        [
          76.4,
          2197.7
        ],
        [
          75.6,
          2198.3
        ],
        [
          74.7,
          2200.3
        ],
        [
          74.3,
          2201.1
        ],
        [
          73.3,
          2203.4
        ],
        [
          73.4,
          2204.9
        ],
        [
          74,
          2206.3
        ],
        [
          74.9,
          2207
        ],
        [
          76.7,
          2207.9
        ],
        [
          79.5,
          2208.8
        ],
        [
          83.6,
          2210
        ],
        [
          84.9,
          2211
        ],
        [
          86,
          2212.8
        ],
        [
          86.4,
          2215.7
        ],
        [
          86.2,
          2218.2
        ],
        [
          84.4,
          2221.5
        ],
        [
          83.2,
          2223.6
        ],
        [
          82.8,
          2224.8
        ],
        [
          82.9,
          2225.9
        ],
        [
          83.4,
          2227.3
        ],
        [
          82.9,
          2229
        ],
        [
          81.8,
          2229.4
        ],
        [
          81.5,
          2230
        ],
        [
          92.4,
          2230
        ]
      ]
    }
  ]
};
