/**
 * Void G (Pasar Rebo-Ciracas-Cipayung-Cibubur) road and water geometry derived from OpenStreetMap.
 * Source: OpenStreetMap contributors, ODbL. Retrieved 2026-10-30 via the Overpass API.
 * Coordinates are stored directly in scene units using the unscaled GPS projection:
 *   x = (lng - 106.823048) * 14100
 *   z = (lat + 6.194957) * -14180
 * Unscaled keeps the six Void G anchors aligned with their real GPS positions.
 * Toll motorways, Transjakarta busway ways, unnamed roads, and the already-modelled
 * Taman Mini / Pondok Gede ways are excluded. Three water bodies overlapping the
 * Tahap 1 anchor pads are dropped; named situ/waduk polygons are kept as closed rings.
 */
export const VOID_G_OSM = {
  "meta": {
    "source": "OpenStreetMap contributors (ODbL)",
    "license": "ODbL 1.0",
    "retrieved": "2026-10-30",
    "api": "https://overpass-api.de/api/interpreter (base snapshot 2026-10-30T07:31:25Z)",
    "bbox": {
      "south": -6.386,
      "west": 106.85,
      "north": -6.292,
      "east": 106.926
    },
    "clipBox": {
      "minX": 380,
      "maxX": 1450,
      "minZ": 1375,
      "maxZ": 2710
    },
    "projection": "projectGpsToScene",
    "projectionConstants": {
      "originLng": 106.823048,
      "originLat": -6.194957,
      "scaleX": 14100,
      "scaleZ": 14180
    },
    "simplification": 2,
    "roadCount": 293,
    "roadPointCount": 1039,
    "waterwayCount": 19,
    "waterPointCount": 287,
    "waterBodyCount": 15,
    "waterBodyPointCount": 161,
    "note": "Jaringan arteri, kolektor, dan lokal Pasar Rebo-Ciracas-Cipayung-Cibubur serta tata air Ci Liwung-Kali Cipinang-Kali Baru. Jalan tol Jagorawi, way busway, jalan tanpa nama, serta duplikat Jalan Taman Mini, Jalan Raya Pondok Gede, dan Jalan Pintu II TMII dikecualikan. Enam anchor terlayani jalan OSM terdekat (maksimum 27,2 unit); Mabes TNI Cilangkap memakai konektor akses 7 unit dari Jalan Hankam Cilangkap ke gerbang sehingga jaraknya turun menjadi 55,0 unit. Tiga badan air yang menabrak pad anchor Tahap 1 (Situ Jambore Cibubur, Rawa Gede, Waduk Giri Kencana) dikeluarkan; situ, waduk, embung, dan kolam bernama dengan luas proyeksi minimal 143 unit persegi dipertahankan sebagai polygon tertutup."
  },
  "roads": [
    {
      "name": "Jalan Komjen Polisi Mohammad Jasin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          422.1,
          2276.1
        ],
        [
          380.2,
          2275.3
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          437.3,
          1527.4
        ],
        [
          415.5,
          1532.6
        ],
        [
          398.3,
          1546.7
        ]
      ]
    },
    {
      "name": "Jalan Mabes Hankam",
      "type": "primary",
      "width": 18,
      "points": [
        [
          898.8,
          1579.6
        ],
        [
          879.8,
          1598.1
        ]
      ]
    },
    {
      "name": "Jalan Mabes Hankam",
      "type": "primary",
      "width": 18,
      "points": [
        [
          972.8,
          1574.7
        ],
        [
          1025,
          1588.1
        ],
        [
          1062.8,
          1605.1
        ]
      ]
    },
    {
      "name": "Jalan Mabes Hankam",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1014.9,
          1595.5
        ],
        [
          956.9,
          1581
        ]
      ]
    },
    {
      "name": "Jalan Mabes Hankam",
      "type": "primary",
      "width": 18,
      "points": [
        [
          894.5,
          1557.6
        ],
        [
          861.9,
          1532.4
        ]
      ]
    },
    {
      "name": "Jalan Mabes Hankam",
      "type": "primary",
      "width": 18,
      "points": [
        [
          932.8,
          1567.4
        ],
        [
          908.3,
          1565.4
        ],
        [
          894.5,
          1557.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          566.5,
          1622.9
        ],
        [
          582.9,
          1592.5
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1027.5,
          2459.3
        ],
        [
          1031.5,
          2482.3
        ]
      ]
    },
    {
      "name": "Jalan Jambore Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1036.2,
          2516.2
        ],
        [
          1044.4,
          2520.6
        ],
        [
          1048.7,
          2514.4
        ],
        [
          1035.9,
          2507.2
        ]
      ]
    },
    {
      "name": "Jalan Cibubur II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          756.2,
          2194.8
        ],
        [
          718.3,
          2175.6
        ]
      ]
    },
    {
      "name": "Jalan Jambore Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          910.6,
          2422.3
        ],
        [
          901.7,
          2405.7
        ],
        [
          946.7,
          2295.7
        ],
        [
          946.9,
          2291.6
        ],
        [
          942.5,
          2288.1
        ]
      ]
    },
    {
      "name": "Jalan Lapangan Tembak",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          960.9,
          2219
        ],
        [
          936.2,
          2229.2
        ],
        [
          922.3,
          2229.7
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          484.2,
          2636.8
        ],
        [
          432.9,
          2624.6
        ],
        [
          402.6,
          2624.1
        ],
        [
          387.3,
          2617.5
        ]
      ]
    },
    {
      "name": "Jalan Tanah Merdeka",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          622,
          1533.6
        ],
        [
          638.9,
          1540.9
        ],
        [
          675.9,
          1543.6
        ],
        [
          688.8,
          1549
        ],
        [
          702.7,
          1564.7
        ],
        [
          709.3,
          1598
        ]
      ]
    },
    {
      "name": "Jalan Lubang Buaya Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1125.1,
          1450.4
        ],
        [
          1163.8,
          1376.8
        ]
      ]
    },
    {
      "name": "Jalan Pagelarang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1306.4,
          1590.4
        ],
        [
          1319.7,
          1569.8
        ],
        [
          1325.3,
          1550.8
        ],
        [
          1332.6,
          1544.4
        ]
      ]
    },
    {
      "name": "Jalan Rawa Binong",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1253.9,
          1509.6
        ],
        [
          1223.4,
          1482.7
        ],
        [
          1155.9,
          1464.5
        ],
        [
          1154.2,
          1461.6
        ]
      ]
    },
    {
      "name": "Jalan Setu",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1279.5,
          1651.5
        ],
        [
          1303.3,
          1600.4
        ]
      ]
    },
    {
      "name": "Jalan Pagelarang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1295.3,
          1522.2
        ],
        [
          1305.8,
          1527.3
        ],
        [
          1336.2,
          1526.2
        ]
      ]
    },
    {
      "name": "Jalan Swadaya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1246,
          1553.1
        ],
        [
          1257.8,
          1518
        ]
      ]
    },
    {
      "name": "Jalan Mabes Hankam",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1076.4,
          1613.8
        ],
        [
          1104.9,
          1637.8
        ]
      ]
    },
    {
      "name": "Jalan Al Baidho I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1097.3,
          1384.7
        ],
        [
          1116.3,
          1387.7
        ],
        [
          1148.7,
          1404.5
        ]
      ]
    },
    {
      "name": "Jalan Albaidho",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1043.8,
          1456.1
        ],
        [
          1049.6,
          1425.9
        ],
        [
          1053.7,
          1424.5
        ],
        [
          1085,
          1431.7
        ]
      ]
    },
    {
      "name": "Jalan Al Baidho II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1081.7,
          1444.8
        ],
        [
          1121.2,
          1455.9
        ],
        [
          1125.1,
          1450.4
        ]
      ]
    },
    {
      "name": "Jalan Gema Insani",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          410.2,
          2653.9
        ],
        [
          394.4,
          2619.9
        ]
      ]
    },
    {
      "name": "Jalan Kalisari II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          429.4,
          1996.2
        ],
        [
          437.1,
          2027.5
        ],
        [
          448.7,
          2039.9
        ],
        [
          476.6,
          2060.7
        ]
      ]
    },
    {
      "name": "Jalan Kalisari",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          648.2,
          2065.2
        ],
        [
          625,
          2063.4
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          381.7,
          2615.7
        ],
        [
          403.1,
          2623
        ],
        [
          432.8,
          2623.4
        ],
        [
          484.6,
          2635.8
        ]
      ]
    },
    {
      "name": "Jalan Munjul Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1097.3,
          2226.2
        ],
        [
          1091.8,
          2222.1
        ],
        [
          1078.9,
          2220.1
        ],
        [
          1062.8,
          2206.3
        ],
        [
          1037.5,
          2202.9
        ],
        [
          998.1,
          2189.3
        ],
        [
          984.3,
          2191.8
        ]
      ]
    },
    {
      "name": "Jalan Cilangkap Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1012.8,
          1965.7
        ],
        [
          1031.3,
          1967.1
        ],
        [
          1048.2,
          1977.2
        ],
        [
          1051.9,
          2009.9
        ],
        [
          1058.2,
          2024.6
        ],
        [
          1108.2,
          2055.5
        ]
      ]
    },
    {
      "name": "Jalan Assyafi'iyah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1140.7,
          1948
        ],
        [
          1131.2,
          1961.8
        ],
        [
          1102.3,
          1986.5
        ],
        [
          1089.6,
          2015.5
        ],
        [
          1065.4,
          2028.4
        ]
      ]
    },
    {
      "name": "Jalan Raya Setu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1012.8,
          1965.7
        ],
        [
          1032.1,
          1951.8
        ],
        [
          1048.3,
          1948.4
        ],
        [
          1064.1,
          1930.5
        ],
        [
          1084.4,
          1930.3
        ]
      ]
    },
    {
      "name": "Jalan Hankam Cilangkap",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1084.4,
          1930.3
        ],
        [
          1099.7,
          1930.6
        ],
        [
          1126.2,
          1924
        ],
        [
          1173.8,
          1924.9
        ]
      ]
    },
    {
      "name": "Jalan Setu Cipayung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1084.4,
          1930.3
        ],
        [
          1094,
          1908.3
        ],
        [
          1113.2,
          1880.3
        ],
        [
          1175.9,
          1832.6
        ],
        [
          1182.9,
          1819.6
        ],
        [
          1191.8,
          1778.7
        ],
        [
          1199.7,
          1763.4
        ],
        [
          1207.2,
          1757.3
        ],
        [
          1227.7,
          1754.1
        ],
        [
          1241.3,
          1744
        ],
        [
          1251.7,
          1689.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Baping",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          669.8,
          1776.4
        ],
        [
          675.9,
          1766.8
        ],
        [
          697.5,
          1773.1
        ],
        [
          709,
          1716.9
        ],
        [
          738,
          1672.7
        ],
        [
          725.5,
          1652.2
        ],
        [
          709.3,
          1638.7
        ]
      ]
    },
    {
      "name": "Jalan Suci",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          588.5,
          1757.7
        ],
        [
          608.4,
          1753.2
        ],
        [
          641.3,
          1686.1
        ],
        [
          657.7,
          1663.2
        ],
        [
          671,
          1667.7
        ],
        [
          689.6,
          1658.9
        ],
        [
          731.6,
          1613.4
        ]
      ]
    },
    {
      "name": "Jalan Bantar Jati",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1371.4,
          1556.7
        ],
        [
          1373,
          1562.3
        ],
        [
          1361.3,
          1578.5
        ],
        [
          1358.4,
          1600.4
        ],
        [
          1350.3,
          1617.3
        ],
        [
          1349.5,
          1622.7
        ],
        [
          1352.8,
          1624.7
        ],
        [
          1346.7,
          1652.4
        ]
      ]
    },
    {
      "name": "Jalan Raya Mabes Hankkam",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1251.7,
          1689.6
        ],
        [
          1187.7,
          1689.2
        ],
        [
          1160.7,
          1681.5
        ]
      ]
    },
    {
      "name": "Jalan Bina Marga",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          946.3,
          1762.6
        ],
        [
          960.5,
          1737.6
        ],
        [
          985,
          1707.4
        ]
      ]
    },
    {
      "name": "Jalam Beringin Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          995.1,
          1786.5
        ],
        [
          1021.6,
          1752.4
        ]
      ]
    },
    {
      "name": "Jalan Gempol Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1015.4,
          1598
        ],
        [
          1005.7,
          1621.7
        ],
        [
          1000.2,
          1696.8
        ]
      ]
    },
    {
      "name": "Jalan Mandor Hasan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          946.3,
          1762.6
        ],
        [
          992.5,
          1785
        ]
      ]
    },
    {
      "name": "Jalan Mpok Nori",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1000.2,
          1696.8
        ],
        [
          1068,
          1705.8
        ],
        [
          1089.3,
          1702
        ]
      ]
    },
    {
      "name": "Jalan Ceger Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          923.6,
          1584.3
        ],
        [
          927.7,
          1604.8
        ],
        [
          924.3,
          1637.5
        ],
        [
          926.9,
          1649.3
        ],
        [
          960.2,
          1669.8
        ],
        [
          985,
          1707.4
        ]
      ]
    },
    {
      "name": "Jalan Ciracas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          742.3,
          1907.9
        ],
        [
          731.5,
          1912.5
        ],
        [
          631.9,
          1917.8
        ],
        [
          618.4,
          1922.3
        ]
      ]
    },
    {
      "name": "Jalan Swadaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1107.5,
          1928.7
        ],
        [
          1127.4,
          1933.8
        ],
        [
          1128.1,
          1937.2
        ],
        [
          1138.7,
          1942.2
        ],
        [
          1140.7,
          1948
        ]
      ]
    },
    {
      "name": "Jalan Raya Tengah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          510.3,
          1522.5
        ],
        [
          507.7,
          1481.2
        ],
        [
          532.1,
          1470.3
        ],
        [
          539.8,
          1462.8
        ],
        [
          537.8,
          1419.9
        ],
        [
          514.6,
          1388.1
        ],
        [
          515.5,
          1376.4
        ]
      ]
    },
    {
      "name": "Jalan Penganten Ali",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          854.7,
          1757.4
        ],
        [
          842.1,
          1780.9
        ],
        [
          854.3,
          1798.2
        ],
        [
          859.7,
          1830.8
        ],
        [
          844.7,
          1855.2
        ],
        [
          837.1,
          1890.6
        ]
      ]
    },
    {
      "name": "Jalan Tanah Merdeka",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          725.2,
          1609.3
        ],
        [
          765.8,
          1624.3
        ],
        [
          785.9,
          1621.6
        ],
        [
          791.5,
          1623.5
        ],
        [
          799,
          1713.1
        ],
        [
          796.8,
          1722.3
        ]
      ]
    },
    {
      "name": "Jalan Masjid Al Taufiq",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          825.4,
          1971.8
        ],
        [
          829.1,
          1932.8
        ],
        [
          834.8,
          1923.5
        ],
        [
          841.1,
          1892.2
        ]
      ]
    },
    {
      "name": "Jalan Haji Hasan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          382.9,
          1863.9
        ],
        [
          383.3,
          1888.2
        ],
        [
          398.6,
          1890.5
        ],
        [
          401.4,
          1900.2
        ],
        [
          411.8,
          1903.5
        ],
        [
          414.1,
          1913.1
        ]
      ]
    },
    {
      "name": "Jalan Kalisari III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          425,
          1986.9
        ],
        [
          425.4,
          1931.6
        ],
        [
          431.4,
          1926.7
        ],
        [
          448.5,
          1923
        ],
        [
          457.6,
          1878.8
        ],
        [
          464,
          1866.1
        ]
      ]
    },
    {
      "name": "Jalan Pertengahan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          470.8,
          1837
        ],
        [
          482,
          1835.8
        ],
        [
          486.5,
          1830.4
        ],
        [
          488.9,
          1821.9
        ],
        [
          487.5,
          1806
        ],
        [
          494.5,
          1783.4
        ],
        [
          498.4,
          1754.8
        ],
        [
          507.1,
          1743.8
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          457.6,
          1738
        ],
        [
          414.9,
          1750.6
        ],
        [
          381.4,
          1779
        ]
      ]
    },
    {
      "name": "Jalan Kramat Ganceng",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1287.4,
          2160
        ],
        [
          1294,
          2144.5
        ],
        [
          1301.6,
          2141.7
        ],
        [
          1308.5,
          2129.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Abdul Rahman",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          811,
          2386.4
        ],
        [
          810.6,
          2376.5
        ],
        [
          804.9,
          2372.4
        ],
        [
          806.1,
          2365.2
        ],
        [
          815.2,
          2353.4
        ],
        [
          816.1,
          2342.9
        ],
        [
          809.4,
          2319.7
        ],
        [
          799.4,
          2315.6
        ],
        [
          797.5,
          2306.4
        ]
      ]
    },
    {
      "name": "Jalan Kalisari Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          414.1,
          1913.1
        ],
        [
          420.8,
          1956.2
        ],
        [
          413.2,
          1982.9
        ]
      ]
    },
    {
      "name": "Jalan Gongseng Barat Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          384.8,
          1843.8
        ],
        [
          402.9,
          1848.5
        ],
        [
          412.9,
          1863.9
        ],
        [
          419.7,
          1868
        ],
        [
          458.2,
          1863.6
        ],
        [
          464,
          1866.1
        ]
      ]
    },
    {
      "name": "Jalan Bina Marga",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          925.3,
          1804.2
        ],
        [
          921.5,
          1847
        ],
        [
          913.3,
          1875.3
        ],
        [
          918.1,
          1937.9
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Dua Wetan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          869.8,
          2162.2
        ],
        [
          845.1,
          2157.7
        ],
        [
          840.1,
          2140.3
        ],
        [
          843.3,
          2128.5
        ],
        [
          850.9,
          2120.5
        ],
        [
          874.1,
          2109.5
        ],
        [
          893.1,
          2089.3
        ],
        [
          918.8,
          2044.4
        ],
        [
          898,
          1939.6
        ],
        [
          894.1,
          1905.2
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          500.1,
          1708.5
        ],
        [
          515,
          1696.3
        ],
        [
          529.8,
          1675.6
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Dua Wetan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          937.4,
          2125.8
        ],
        [
          933.2,
          2128.3
        ],
        [
          931.1,
          2147
        ],
        [
          924,
          2153.8
        ],
        [
          914,
          2173
        ],
        [
          869.8,
          2162.2
        ]
      ]
    },
    {
      "name": "Jalan Cibubur I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          719.2,
          2116.7
        ],
        [
          715,
          2094.5
        ],
        [
          717.2,
          2064
        ]
      ]
    },
    {
      "name": "Jalan Centex",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          796.8,
          1722.3
        ],
        [
          769.6,
          1758.7
        ],
        [
          762.4,
          1790.6
        ],
        [
          760.5,
          1819.5
        ],
        [
          754.4,
          1840.1
        ],
        [
          756.9,
          1857.1
        ],
        [
          742.3,
          1907.9
        ]
      ]
    },
    {
      "name": "Jalan PPA",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1030.6,
          1701.5
        ],
        [
          1028.6,
          1711.5
        ],
        [
          1032.8,
          1724.5
        ],
        [
          1021.6,
          1752.4
        ]
      ]
    },
    {
      "name": "Jalan Cibubur III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          749.7,
          2172
        ],
        [
          750.3,
          2159.6
        ],
        [
          744,
          2148.9
        ],
        [
          744.8,
          2135.6
        ]
      ]
    },
    {
      "name": "Jalan Bulak Ringin Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          697.7,
          2225.3
        ],
        [
          700.4,
          2219.9
        ],
        [
          698.3,
          2207.1
        ],
        [
          704.2,
          2193.7
        ],
        [
          714.2,
          2186.6
        ],
        [
          718.3,
          2175.6
        ]
      ]
    },
    {
      "name": "Jalan Poncol",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          643.9,
          1859.3
        ],
        [
          657.1,
          1827.6
        ],
        [
          665.3,
          1785.2
        ],
        [
          669.8,
          1776.4
        ]
      ]
    },
    {
      "name": "Jalan Ganceng",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1403.2,
          2131.4
        ],
        [
          1393.3,
          2131.8
        ],
        [
          1372.1,
          2125.4
        ],
        [
          1350.9,
          2132.7
        ],
        [
          1327.9,
          2129.2
        ]
      ]
    },
    {
      "name": "Jalan Cilangkap Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1218.4,
          2100.9
        ],
        [
          1210.7,
          2106.4
        ],
        [
          1191.7,
          2111.3
        ],
        [
          1164.9,
          2155.3
        ],
        [
          1143.9,
          2209.3
        ],
        [
          1131.1,
          2230.5
        ]
      ]
    },
    {
      "name": "Jalan Pondok Ranggon",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1287.4,
          2160
        ],
        [
          1261.1,
          2196.8
        ],
        [
          1245.3,
          2228.5
        ],
        [
          1240.6,
          2246.9
        ],
        [
          1242.8,
          2259.3
        ],
        [
          1237.3,
          2279.4
        ],
        [
          1228.2,
          2297.6
        ]
      ]
    },
    {
      "name": "Jalan Keadilan Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          417,
          2681.1
        ],
        [
          413.9,
          2709.8
        ]
      ]
    },
    {
      "name": "Jalan Rasamala Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          388.1,
          2692.6
        ],
        [
          415.4,
          2695.1
        ]
      ]
    },
    {
      "name": "Raya Pondok Duta",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          384,
          2514.5
        ],
        [
          430.6,
          2515
        ],
        [
          473.5,
          2526.4
        ],
        [
          488.4,
          2522.2
        ],
        [
          495.6,
          2524.2
        ],
        [
          505.8,
          2518.8
        ]
      ]
    },
    {
      "name": "Jalan Gas Alam",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          871,
          2695.4
        ],
        [
          936.9,
          2709.8
        ]
      ]
    },
    {
      "name": "Jalan Gas Alam",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          871,
          2695.4
        ],
        [
          806.8,
          2682.5
        ]
      ]
    },
    {
      "name": "Jalan Radar Auri",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          829.1,
          2501.8
        ],
        [
          809.7,
          2516.9
        ],
        [
          798.8,
          2518.3
        ],
        [
          785.3,
          2517
        ],
        [
          781.1,
          2511.7
        ],
        [
          763.5,
          2503.4
        ],
        [
          750.9,
          2502.9
        ],
        [
          731.5,
          2494
        ],
        [
          713.9,
          2503.3
        ],
        [
          701.1,
          2516.5
        ],
        [
          552.1,
          2514.5
        ]
      ]
    },
    {
      "name": "Jalan Putri Tunggal",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          928.8,
          2453.5
        ],
        [
          913,
          2495.7
        ],
        [
          905.6,
          2526.7
        ],
        [
          901.9,
          2528.5
        ],
        [
          901.3,
          2561.8
        ],
        [
          906.9,
          2579.8
        ],
        [
          914.1,
          2582.6
        ],
        [
          913.8,
          2603.9
        ],
        [
          904.6,
          2614.4
        ],
        [
          877.8,
          2685.4
        ]
      ]
    },
    {
      "name": "Jalan Menpor",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          382.5,
          2278.6
        ],
        [
          395.2,
          2287.2
        ],
        [
          408.4,
          2289.4
        ],
        [
          418.3,
          2299.1
        ]
      ]
    },
    {
      "name": "Jalan Menpor",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          505.7,
          2318.9
        ],
        [
          465.7,
          2312.4
        ],
        [
          448.9,
          2298.6
        ],
        [
          419.8,
          2299.1
        ]
      ]
    },
    {
      "name": "Jalan Terusan Mabes Hankam",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1292.6,
          1707.1
        ],
        [
          1330.4,
          1718.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Ujung Aspal",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1415.8,
          2001.4
        ],
        [
          1449.9,
          2018.8
        ]
      ]
    },
    {
      "name": "Jalan Bukit Cengkeh",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          434.9,
          2341.5
        ],
        [
          446.3,
          2355.8
        ],
        [
          451,
          2411.4
        ]
      ]
    },
    {
      "name": "Jalan Kapitan Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          734.2,
          2708.7
        ],
        [
          739.1,
          2701.6
        ],
        [
          745.8,
          2702.4
        ],
        [
          757.8,
          2693.7
        ],
        [
          764.5,
          2698.2
        ],
        [
          777.4,
          2694.1
        ],
        [
          784.2,
          2696.9
        ]
      ]
    },
    {
      "name": "Jalan Sapi Perah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1171.8,
          2281.7
        ],
        [
          1187.8,
          2293.1
        ],
        [
          1212.7,
          2299.5
        ],
        [
          1218.4,
          2294.5
        ],
        [
          1228.2,
          2297.6
        ]
      ]
    },
    {
      "name": "Jalan Mekar Sari",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          601.8,
          2409.8
        ],
        [
          609.9,
          2411.3
        ],
        [
          621.4,
          2393.2
        ],
        [
          649.3,
          2374.6
        ],
        [
          654.5,
          2365.8
        ],
        [
          657.7,
          2350.6
        ]
      ]
    },
    {
      "name": "Jalan Bungur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          854.7,
          1757.4
        ],
        [
          864.8,
          1740.8
        ],
        [
          872.8,
          1715.5
        ],
        [
          868.2,
          1703.3
        ],
        [
          866.8,
          1681.8
        ],
        [
          873.5,
          1655.4
        ],
        [
          864.7,
          1628.9
        ]
      ]
    },
    {
      "name": "Jalan Taruna Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          798.2,
          2287.1
        ],
        [
          810.3,
          2290.3
        ],
        [
          809.2,
          2297.7
        ],
        [
          819.1,
          2304.5
        ],
        [
          822.2,
          2314.1
        ],
        [
          846.6,
          2338.8
        ],
        [
          866.5,
          2350.3
        ],
        [
          868.5,
          2360.8
        ],
        [
          860.7,
          2384
        ],
        [
          862.5,
          2392.2
        ],
        [
          888.8,
          2399.1
        ],
        [
          886.6,
          2414.6
        ],
        [
          892.1,
          2421.3
        ],
        [
          910.6,
          2422.3
        ]
      ]
    },
    {
      "name": "Jalan Pusdika",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          929.7,
          2431.3
        ],
        [
          941.4,
          2462.3
        ],
        [
          987.5,
          2479.1
        ],
        [
          992.8,
          2475.9
        ]
      ]
    },
    {
      "name": "Jalan TPU Pondok Ranggon",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1283.3,
          2417.3
        ],
        [
          1267.5,
          2404.3
        ],
        [
          1247.2,
          2399.9
        ],
        [
          1231.3,
          2392.7
        ],
        [
          1220.9,
          2379.5
        ]
      ]
    },
    {
      "name": "Jalan Kranggan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1327.1,
          2542.3
        ],
        [
          1317.9,
          2561.9
        ]
      ]
    },
    {
      "name": "Jalan Rawa Dolar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1403.6,
          2150.2
        ],
        [
          1446.7,
          2153.2
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          397.4,
          1545.7
        ],
        [
          415,
          1531.9
        ],
        [
          436.8,
          1526.2
        ]
      ]
    },
    {
      "name": "Jalan Gama Setia Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          431,
          2610.9
        ],
        [
          427.2,
          2581.1
        ],
        [
          449.5,
          2518.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Duta Pelni",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          519.9,
          2519.5
        ],
        [
          544.7,
          2519.2
        ],
        [
          552.2,
          2516.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          616,
          1540.5
        ],
        [
          570.9,
          1619.1
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1404.3,
          2619.5
        ],
        [
          1435.3,
          2647.6
        ],
        [
          1449.5,
          2652.3
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1449.3,
          2654.1
        ],
        [
          1427.3,
          2643.9
        ],
        [
          1406.5,
          2624
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1316.9,
          2563.1
        ],
        [
          1295.5,
          2558.3
        ],
        [
          1194.1,
          2560.4
        ],
        [
          1174.4,
          2564.8
        ],
        [
          1116.9,
          2566.6
        ]
      ]
    },
    {
      "name": "Jalan Mpok Nori",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1178.6,
          1646.8
        ],
        [
          1201.7,
          1603
        ],
        [
          1218.6,
          1580.4
        ]
      ]
    },
    {
      "name": "Jalan Bukit Cengkeh",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          434.9,
          2341.5
        ],
        [
          424.4,
          2323.5
        ],
        [
          421.7,
          2305.1
        ]
      ]
    },
    {
      "name": "Jalan Gema Insani",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          417,
          2681.1
        ],
        [
          410.2,
          2653.9
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          507.3,
          1523.4
        ],
        [
          481,
          1525.1
        ]
      ]
    },
    {
      "name": "Auri",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          600.3,
          2417.7
        ],
        [
          588.9,
          2498.7
        ],
        [
          586.8,
          2505.6
        ],
        [
          580.6,
          2510.9
        ]
      ]
    },
    {
      "name": "Jalan Satelit Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          605.4,
          2378.7
        ],
        [
          610.5,
          2338.8
        ],
        [
          614.5,
          2331.2
        ],
        [
          623.7,
          2326.1
        ],
        [
          659.1,
          2331.7
        ]
      ]
    },
    {
      "name": "Jalan SMP 258",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          697.7,
          2225.3
        ],
        [
          700,
          2237.8
        ],
        [
          710.5,
          2254.2
        ],
        [
          716.3,
          2257.5
        ],
        [
          724.8,
          2275.3
        ],
        [
          725.4,
          2297.1
        ],
        [
          716.1,
          2342.6
        ]
      ]
    },
    {
      "name": "Jalan Kesehatan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          509.2,
          1565.2
        ],
        [
          507.3,
          1523.4
        ]
      ]
    },
    {
      "name": "Jalan Suprijadi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          668.6,
          1615.6
        ],
        [
          648.7,
          1613.2
        ]
      ]
    },
    {
      "name": "Jalan Suprijadi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          626.6,
          1592.9
        ],
        [
          653.8,
          1605.9
        ],
        [
          674.5,
          1608.5
        ]
      ]
    },
    {
      "name": "Jalan Jati",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          388.1,
          2692.6
        ],
        [
          390.8,
          2665.7
        ]
      ]
    },
    {
      "name": "Jalan Kapitan Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          848.1,
          2708.4
        ],
        [
          854.8,
          2698.5
        ],
        [
          863.1,
          2702.5
        ],
        [
          871,
          2695.4
        ]
      ]
    },
    {
      "name": "Jalan Kenanga I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          448.3,
          2064
        ],
        [
          439.2,
          2080.8
        ],
        [
          421.1,
          2075.5
        ]
      ]
    },
    {
      "name": "Jalan Cibubur I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          719.2,
          2116.7
        ],
        [
          708.2,
          2151
        ]
      ]
    },
    {
      "name": "Jalan Cibubur III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          744.8,
          2135.6
        ],
        [
          719.2,
          2116.7
        ]
      ]
    },
    {
      "name": "Jalan Manunggal",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          770.3,
          2140.4
        ],
        [
          744.8,
          2135.6
        ]
      ]
    },
    {
      "name": "Jalan Manunggal Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          770.3,
          2140.4
        ],
        [
          792.7,
          2054.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Kiwi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          701.6,
          2050.4
        ],
        [
          677.5,
          2033.7
        ],
        [
          640.7,
          2023.3
        ]
      ]
    },
    {
      "name": "Jalan Safamarwah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          687.5,
          2331
        ],
        [
          669,
          2317.4
        ]
      ]
    },
    {
      "name": "Jalan Blok Duku",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          794.2,
          2305.6
        ],
        [
          783.3,
          2306.5
        ],
        [
          780.3,
          2309.8
        ],
        [
          759.7,
          2305.2
        ],
        [
          750.4,
          2308.4
        ],
        [
          748.1,
          2317.5
        ],
        [
          743.7,
          2318.4
        ],
        [
          736.7,
          2349.6
        ]
      ]
    },
    {
      "name": "Jalan Trikora Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          587.1,
          1572.1
        ],
        [
          633.7,
          1506.8
        ],
        [
          662.9,
          1475
        ],
        [
          672.6,
          1456.3
        ]
      ]
    },
    {
      "name": "Jalan Masjid",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          798.2,
          2287.1
        ],
        [
          787.4,
          2272.6
        ],
        [
          779.4,
          2252
        ],
        [
          781.9,
          2215.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Abdul Rahman",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          886.6,
          2414.6
        ],
        [
          861.7,
          2410.8
        ],
        [
          852.3,
          2399
        ],
        [
          841.9,
          2392.6
        ],
        [
          828.4,
          2394
        ],
        [
          811,
          2386.4
        ]
      ]
    },
    {
      "name": "Jalan Nurul Hidayah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          806.1,
          1974.5
        ],
        [
          800.3,
          1979.2
        ],
        [
          797.5,
          1987.3
        ],
        [
          802.7,
          2020.4
        ],
        [
          792.7,
          2054.6
        ]
      ]
    },
    {
      "name": "Jalan Ciracas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          894.1,
          1905.2
        ],
        [
          876.3,
          1898
        ],
        [
          858.3,
          1897.3
        ],
        [
          829.3,
          1887.9
        ],
        [
          807.4,
          1884.6
        ]
      ]
    },
    {
      "name": "Jalan Puskesmas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          380,
          1982.9
        ],
        [
          385.1,
          1978.7
        ],
        [
          399,
          1978.4
        ],
        [
          413.2,
          1982.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          584.5,
          1885.9
        ],
        [
          616.2,
          1919.1
        ],
        [
          623.8,
          1934.3
        ],
        [
          640.7,
          2023.3
        ]
      ]
    },
    {
      "name": "Jalan Kenanga",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          404.6,
          2085.5
        ],
        [
          410.4,
          2084.1
        ],
        [
          412.2,
          2076.6
        ],
        [
          421.1,
          2075.5
        ]
      ]
    },
    {
      "name": "Jalan Bantar Jati",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1358.8,
          1741.7
        ],
        [
          1350.6,
          1739.1
        ],
        [
          1345.1,
          1732.9
        ],
        [
          1334.9,
          1730.7
        ],
        [
          1330.8,
          1734.6
        ]
      ]
    },
    {
      "name": "Jalan Karya Bhakti",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          929.7,
          2431.3
        ],
        [
          999.8,
          2459.5
        ]
      ]
    },
    {
      "name": "Jalan Jambore Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          993.6,
          2483.8
        ],
        [
          941.8,
          2463.8
        ],
        [
          934.7,
          2452.9
        ]
      ]
    },
    {
      "name": "Jalan Terusan Mabes Hankam",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1268.9,
          1700.6
        ],
        [
          1291.2,
          1706.8
        ]
      ]
    },
    {
      "name": "Jalan Pagelarang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1267.8,
          1512.4
        ],
        [
          1293.9,
          1521.3
        ]
      ]
    },
    {
      "name": "Jalan Lapan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          495.1,
          2096.6
        ],
        [
          526,
          2068.5
        ],
        [
          566.3,
          2079.8
        ],
        [
          571.2,
          2070
        ],
        [
          586.7,
          2058.4
        ]
      ]
    },
    {
      "name": "Jalan Cibubur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          690.2,
          2133.1
        ],
        [
          658.9,
          2110.2
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          380.3,
          1777.8
        ],
        [
          413,
          1749.7
        ],
        [
          453.1,
          1737.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          567.6,
          1621.3
        ],
        [
          615.1,
          1539.7
        ]
      ]
    },
    {
      "name": "Jalan Hankam Cilangkap",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1178.5,
          1925.1
        ],
        [
          1204.5,
          1925.2
        ]
      ]
    },
    {
      "name": "Jalan Cilangkap Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1109.4,
          2055.9
        ],
        [
          1196.7,
          2094.9
        ],
        [
          1218.4,
          2100.9
        ]
      ]
    },
    {
      "name": "Jalan Jati",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          535.3,
          1663.2
        ],
        [
          551.7,
          1650.9
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          531.7,
          1677.1
        ],
        [
          515.8,
          1698.1
        ],
        [
          501.8,
          1709.9
        ]
      ]
    },
    {
      "name": "Jalan Pendidikan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          553.6,
          1678.3
        ],
        [
          564,
          1712.5
        ]
      ]
    },
    {
      "name": "Jalan Manunggal XVII",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1004.6,
          1450
        ],
        [
          1040.3,
          1455.1
        ],
        [
          1064.5,
          1463.4
        ],
        [
          1067.6,
          1457.3
        ],
        [
          1077.1,
          1460
        ],
        [
          1081.7,
          1444.8
        ]
      ]
    },
    {
      "name": "Jalan Mahoni",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          509.1,
          1572.8
        ],
        [
          512,
          1632
        ],
        [
          517,
          1658.5
        ],
        [
          527.1,
          1668.1
        ]
      ]
    },
    {
      "name": "Jalan Safamarwah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          716.1,
          2342.6
        ],
        [
          688.3,
          2331.4
        ]
      ]
    },
    {
      "name": "Jalan Cibubur II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          718.3,
          2175.6
        ],
        [
          710.4,
          2169.2
        ],
        [
          714.9,
          2155.8
        ]
      ]
    },
    {
      "name": "Jalan Manunggal XVII",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          982.7,
          1449.3
        ],
        [
          1003.4,
          1450.2
        ]
      ]
    },
    {
      "name": "Jalan SMP 188",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          762.9,
          1623.7
        ],
        [
          768.7,
          1612.8
        ],
        [
          768.8,
          1593.3
        ]
      ]
    },
    {
      "name": "Jalan Gongseng Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          524.5,
          1855.7
        ],
        [
          534.7,
          1853.4
        ],
        [
          571.2,
          1860.1
        ]
      ]
    },
    {
      "name": "Jalan Pendidikan III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          531.2,
          1734.9
        ],
        [
          571.5,
          1735
        ],
        [
          564,
          1712.5
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          499.9,
          1711.5
        ],
        [
          472.1,
          1733
        ],
        [
          460.9,
          1737.2
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          460.4,
          1735.3
        ],
        [
          470.5,
          1731.9
        ],
        [
          483,
          1722
        ]
      ]
    },
    {
      "name": "Jalan Penganten Ali",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          796.8,
          1722.3
        ],
        [
          812.2,
          1730.4
        ],
        [
          816.4,
          1736
        ]
      ]
    },
    {
      "name": "Jalan Rawa Binong",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1153.8,
          1461
        ],
        [
          1125.1,
          1450.4
        ]
      ]
    },
    {
      "name": "Jalan Kranggan Permai",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1372.1,
          2406.9
        ],
        [
          1364.3,
          2405.4
        ],
        [
          1344,
          2409.4
        ],
        [
          1320.9,
          2423.4
        ],
        [
          1309,
          2424.6
        ],
        [
          1287.7,
          2419
        ]
      ]
    },
    {
      "name": "Jalan Pondok Ranggon",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1097.3,
          2226.2
        ],
        [
          1120.6,
          2227
        ],
        [
          1131.1,
          2230.5
        ],
        [
          1158.3,
          2258.5
        ]
      ]
    },
    {
      "name": "Jalan Pondok Ranggon",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1226.2,
          2115
        ],
        [
          1230.8,
          2121.5
        ],
        [
          1255.4,
          2133
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          638.2,
          1511.9
        ],
        [
          669.5,
          1472
        ],
        [
          681.9,
          1443.9
        ],
        [
          689.1,
          1415.4
        ]
      ]
    },
    {
      "name": "Jalan Raya Cipayung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1012.8,
          1965.7
        ],
        [
          991.6,
          1957.8
        ],
        [
          964.9,
          1955.3
        ],
        [
          924.4,
          1937.7
        ],
        [
          909.6,
          1939.3
        ]
      ]
    },
    {
      "name": "Jalan Komjen Pol. M. Jasin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          507.6,
          2306.7
        ],
        [
          464.1,
          2284.1
        ],
        [
          423.1,
          2276.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Kranggan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1448.4,
          2393
        ],
        [
          1434.1,
          2395.8
        ],
        [
          1416.5,
          2393.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Mabes Hankkam",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1159.8,
          1681.1
        ],
        [
          1137.9,
          1665.4
        ]
      ]
    },
    {
      "name": "Jalan Jambore Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1014,
          2496.7
        ],
        [
          996.4,
          2486
        ]
      ]
    },
    {
      "name": "Jalan Radar Auri",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          919.3,
          2478.1
        ],
        [
          862.4,
          2477.3
        ],
        [
          853.7,
          2483.8
        ]
      ]
    },
    {
      "name": "Jalan B1-5",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          449.6,
          2411.5
        ],
        [
          444.9,
          2356.6
        ],
        [
          434.1,
          2342.4
        ]
      ]
    },
    {
      "name": "Jalan Nusantara",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          434.5,
          2481.2
        ],
        [
          430.6,
          2515
        ]
      ]
    },
    {
      "name": "Jalan Mekar Sari",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          513.9,
          2425.6
        ],
        [
          548.3,
          2415.7
        ],
        [
          600.3,
          2417.7
        ]
      ]
    },
    {
      "name": "Jalan Gema Insani",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          399.3,
          2623.1
        ],
        [
          397.9,
          2626.8
        ],
        [
          410.8,
          2652.8
        ],
        [
          417,
          2681.1
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          619.5,
          2656.1
        ],
        [
          626.9,
          2705.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          626.7,
          2709.9
        ],
        [
          618,
          2653.8
        ]
      ]
    },
    {
      "name": "Jalan Suprijadi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          833.5,
          1569.7
        ],
        [
          853.8,
          1568.9
        ]
      ]
    },
    {
      "name": "Jalan Gas Alam",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          699.2,
          2661.8
        ],
        [
          658.2,
          2651.9
        ],
        [
          619.3,
          2650.6
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1118.3,
          2564.8
        ],
        [
          1175.4,
          2563.1
        ],
        [
          1190.9,
          2558.9
        ],
        [
          1296.4,
          2557.2
        ]
      ]
    },
    {
      "name": "Jalan Kalimanggis",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1261.5,
          2705.9
        ],
        [
          1298.8,
          2626.2
        ]
      ]
    },
    {
      "name": "Jalan Kolonel Polisi Pranoti",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          380.7,
          2124.2
        ],
        [
          402,
          2128
        ],
        [
          410.7,
          2134.4
        ],
        [
          399.9,
          2187.4
        ],
        [
          385.6,
          2236.8
        ],
        [
          380.2,
          2275.3
        ]
      ]
    },
    {
      "name": "Jalan Radar Auri",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          852.5,
          2485.9
        ],
        [
          845.8,
          2497.8
        ],
        [
          830.3,
          2501.3
        ]
      ]
    },
    {
      "name": "Jalan Lingkar Kota",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1370.5,
          2418
        ],
        [
          1389.8,
          2423.9
        ],
        [
          1401.1,
          2419.2
        ],
        [
          1409.5,
          2411.5
        ],
        [
          1416.5,
          2393.2
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          494.5,
          2637.4
        ],
        [
          545.1,
          2645.7
        ],
        [
          613.8,
          2652
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1296.4,
          2557.2
        ],
        [
          1316.8,
          2561.4
        ]
      ]
    },
    {
      "name": "Jalan Terminal Kampung Rambutan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          846,
          1621.2
        ],
        [
          841.2,
          1614.2
        ],
        [
          827.8,
          1612.2
        ],
        [
          824.3,
          1605
        ]
      ]
    },
    {
      "name": "Jalan Insinyur Haji Juanda",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          612.6,
          2653.3
        ],
        [
          494.5,
          2638.6
        ]
      ]
    },
    {
      "name": "Jalan Garuda",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          380.8,
          2079.6
        ],
        [
          386.5,
          2076.4
        ],
        [
          397.3,
          2078.1
        ],
        [
          402.6,
          2086.2
        ]
      ]
    },
    {
      "name": "Jalan Kranggan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1422.6,
          1736
        ],
        [
          1420.7,
          1807.6
        ],
        [
          1425.5,
          1860.1
        ],
        [
          1425.7,
          1921.2
        ],
        [
          1407.7,
          2069.9
        ],
        [
          1402.7,
          2164.6
        ],
        [
          1397.7,
          2203.1
        ],
        [
          1380.7,
          2243.2
        ],
        [
          1374.3,
          2268.2
        ],
        [
          1375.7,
          2373.6
        ],
        [
          1372.1,
          2406.9
        ]
      ]
    },
    {
      "name": "Jalan Gongseng Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          464,
          1866.1
        ],
        [
          498.8,
          1862.1
        ],
        [
          511,
          1864.9
        ],
        [
          512.3,
          1859.6
        ],
        [
          523.2,
          1856.1
        ]
      ]
    },
    {
      "name": "Jalan Kenanga I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          475.1,
          2059.6
        ],
        [
          448.7,
          2063.6
        ]
      ]
    },
    {
      "name": "Jalan Pendidikan III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          507.7,
          1743.3
        ],
        [
          513.2,
          1738.6
        ],
        [
          526.4,
          1743.5
        ],
        [
          531.2,
          1734.9
        ]
      ]
    },
    {
      "name": "Jalan Gas Alam",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          666.4,
          2643.3
        ],
        [
          735,
          2657.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Pekapuran",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          625.6,
          2698.9
        ],
        [
          646.3,
          2709.9
        ]
      ]
    },
    {
      "name": "Jalan Gas Alam",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          798.2,
          2681
        ],
        [
          743.6,
          2669.9
        ]
      ]
    },
    {
      "name": "Jalan Gas Alam",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          743.6,
          2669.9
        ],
        [
          701,
          2662.1
        ]
      ]
    },
    {
      "name": "Jalan Gas Alam",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          765,
          2663.1
        ],
        [
          790.5,
          2667.8
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          448.8,
          1525.6
        ],
        [
          506.5,
          1522.2
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          553.4,
          1555.1
        ],
        [
          520.6,
          1538
        ],
        [
          512.7,
          1526.4
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          566.9,
          2550
        ],
        [
          575.1,
          2574.5
        ],
        [
          597.5,
          2594.9
        ],
        [
          616.8,
          2606.5
        ],
        [
          618.3,
          2627.7
        ]
      ]
    },
    {
      "name": "Jalan RA. Fadillah",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          483,
          1722
        ],
        [
          498.8,
          1709.6
        ]
      ]
    },
    {
      "name": "Jalan Suprijadi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          759.6,
          1588.6
        ],
        [
          786.2,
          1581.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Abdul Rahman",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          797.5,
          2306.4
        ],
        [
          801,
          2295.1
        ],
        [
          798.2,
          2287.1
        ]
      ]
    },
    {
      "name": "Jalan Mabes Hankam",
      "type": "primary",
      "width": 18,
      "points": [
        [
          864.6,
          1525.8
        ],
        [
          898.4,
          1554.2
        ],
        [
          912.6,
          1560.9
        ],
        [
          926.2,
          1563.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          691.8,
          1408.3
        ],
        [
          682.8,
          1445.6
        ],
        [
          670.4,
          1472.5
        ],
        [
          634.6,
          1518.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          592.1,
          1575.1
        ],
        [
          616.4,
          1537.6
        ]
      ]
    },
    {
      "name": "Jalan Mabes Hankam",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1114.2,
          1652.1
        ],
        [
          1069.8,
          1623.9
        ]
      ]
    },
    {
      "name": "Jalan Mabes Hankam",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1062,
          1619.1
        ],
        [
          1044.5,
          1609
        ]
      ]
    },
    {
      "name": "Jalan Kapitan Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          785.5,
          2697.8
        ],
        [
          803.6,
          2707.1
        ]
      ]
    },
    {
      "name": "Jalan Mabes Hankam",
      "type": "primary",
      "width": 18,
      "points": [
        [
          934.8,
          1565
        ],
        [
          956,
          1569.8
        ]
      ]
    },
    {
      "name": "Jalan Bantar Jati",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1345.7,
          1658.3
        ],
        [
          1335,
          1697.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          581.8,
          1602.3
        ],
        [
          570.6,
          1619.6
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1317.9,
          2561.9
        ],
        [
          1380.6,
          2597.8
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1382.5,
          2601.4
        ],
        [
          1316.9,
          2563.1
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Kecapi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1444,
          1463.8
        ],
        [
          1430.6,
          1458.7
        ],
        [
          1413.8,
          1458
        ],
        [
          1402.3,
          1440.7
        ],
        [
          1395,
          1436.9
        ],
        [
          1390.4,
          1438.3
        ]
      ]
    },
    {
      "name": "Jalan Raya Malaka",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          946.7,
          2124.4
        ],
        [
          952,
          2120.7
        ],
        [
          961.7,
          2093.1
        ],
        [
          982.5,
          2078.4
        ],
        [
          993.7,
          2079.1
        ],
        [
          1011.4,
          2051.8
        ]
      ]
    },
    {
      "name": "Jalan Lapangan Tembak",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          691.4,
          2134.2
        ],
        [
          698.6,
          2143.5
        ],
        [
          718,
          2158
        ],
        [
          759,
          2175.9
        ],
        [
          756.2,
          2194.8
        ],
        [
          781,
          2214.9
        ]
      ]
    },
    {
      "name": "Jalan Raya PKP",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          906.6,
          2067.8
        ],
        [
          859.8,
          2048.5
        ],
        [
          846.6,
          2047.6
        ],
        [
          717.2,
          2064
        ]
      ]
    },
    {
      "name": "Jalan Anggrek",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          682.6,
          2646.2
        ],
        [
          699,
          2633.8
        ]
      ]
    },
    {
      "name": "Jalan Kalisari II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          476.6,
          2060.7
        ],
        [
          481.5,
          2064.7
        ],
        [
          493.2,
          2098.3
        ]
      ]
    },
    {
      "name": "Jalan Lapangan Tembak",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          781.9,
          2215.5
        ],
        [
          800.3,
          2221.1
        ],
        [
          855.6,
          2222.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Pagelarang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1418.8,
          1569.3
        ],
        [
          1402.6,
          1568.8
        ],
        [
          1391,
          1564.4
        ]
      ]
    },
    {
      "name": "Jalan Al Baidho I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1081.7,
          1444.8
        ],
        [
          1093.6,
          1399.5
        ]
      ]
    },
    {
      "name": "Jalan Mpok Nori",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1218.6,
          1580.4
        ],
        [
          1227.6,
          1573.4
        ],
        [
          1238.2,
          1570.8
        ]
      ]
    },
    {
      "name": "Jalan Mpok Nori",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1278.9,
          1580.3
        ],
        [
          1247.4,
          1569.9
        ]
      ]
    },
    {
      "name": "Jalan Suprijadi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          830.7,
          1586.6
        ],
        [
          822.1,
          1581.5
        ],
        [
          810.3,
          1583.4
        ]
      ]
    },
    {
      "name": "Jalan Suprijadi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          674.5,
          1608.5
        ],
        [
          708.4,
          1602.2
        ]
      ]
    },
    {
      "name": "Jalan Suprijadi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          729,
          1597.3
        ],
        [
          757.7,
          1589.1
        ]
      ]
    },
    {
      "name": "Jalan Suprijadi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          802.9,
          1585.4
        ],
        [
          782.7,
          1589.6
        ]
      ]
    },
    {
      "name": "Jalan Bukit Cengkeh",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          443.9,
          2454.1
        ],
        [
          449.6,
          2411.5
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          512,
          2308.2
        ],
        [
          509,
          2349.3
        ],
        [
          510.6,
          2411.3
        ],
        [
          530.8,
          2477.8
        ],
        [
          542.5,
          2500.3
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          617.1,
          2628.4
        ],
        [
          616.1,
          2606.8
        ],
        [
          597.1,
          2595.5
        ],
        [
          574.2,
          2575
        ],
        [
          565.7,
          2549.4
        ]
      ]
    },
    {
      "name": "Jalan Raya Pagelarang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1332.6,
          1544.4
        ],
        [
          1357,
          1545.4
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          618.7,
          1537.5
        ],
        [
          607,
          1556.5
        ]
      ]
    },
    {
      "name": "Jalan TPU Pondok Ranggon",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1193,
          2357
        ],
        [
          1202.7,
          2349.3
        ],
        [
          1223,
          2313.3
        ],
        [
          1228.2,
          2297.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          558,
          1651.4
        ],
        [
          561.6,
          1681.5
        ],
        [
          588.5,
          1757.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          587.4,
          1758.1
        ],
        [
          562.2,
          1687.6
        ],
        [
          556.2,
          1660.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          639.5,
          2023.6
        ],
        [
          623.8,
          1937.4
        ],
        [
          615.6,
          1920
        ],
        [
          583.7,
          1886.5
        ]
      ]
    },
    {
      "name": "Jalan Poncol",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          643.9,
          1917.1
        ],
        [
          648.4,
          1883.9
        ],
        [
          643.9,
          1859.3
        ]
      ]
    },
    {
      "name": "Jalan Suprijadi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          648.7,
          1613.2
        ],
        [
          630.2,
          1604.6
        ]
      ]
    },
    {
      "name": "Jalan Suprijadi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          630.2,
          1604.6
        ],
        [
          608.3,
          1593.2
        ]
      ]
    },
    {
      "name": "Jalan Pondok Ranggon",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1158.3,
          2258.5
        ],
        [
          1169.8,
          2272
        ],
        [
          1171.8,
          2281.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          644.5,
          2106.2
        ],
        [
          650.5,
          2091.2
        ],
        [
          651.6,
          2073.5
        ],
        [
          639.5,
          2023.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          541.5,
          2500.6
        ],
        [
          530.1,
          2478.6
        ],
        [
          509.9,
          2411.5
        ],
        [
          508.4,
          2341.8
        ],
        [
          511.2,
          2307.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          580.2,
          2216.5
        ],
        [
          524.4,
          2253.5
        ],
        [
          516.9,
          2273.6
        ],
        [
          512,
          2308.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          640.7,
          2023.3
        ],
        [
          652.4,
          2072.1
        ],
        [
          651.3,
          2091.6
        ],
        [
          645.4,
          2106.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Mabes Hankkam",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1268.9,
          1700.6
        ],
        [
          1266.9,
          1690.3
        ],
        [
          1251.7,
          1689.6
        ]
      ]
    },
    {
      "name": "Jalan Kranggan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1316.8,
          2561.4
        ],
        [
          1327.1,
          2542.3
        ]
      ]
    },
    {
      "name": "Jalan Bantar Jati",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1330.4,
          1718.7
        ],
        [
          1335,
          1697.6
        ]
      ]
    },
    {
      "name": "Jalan Terminal Kampung Rambutan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          824.3,
          1605
        ],
        [
          815.5,
          1581.8
        ]
      ]
    },
    {
      "name": "Jalan Penganten Ali",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          817.9,
          1738.1
        ],
        [
          823.9,
          1746.9
        ],
        [
          854.7,
          1757.4
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Dua Wetan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          855.6,
          2222.7
        ],
        [
          869.8,
          2162.2
        ]
      ]
    },
    {
      "name": "Jalan Jambore Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          941.4,
          2287.3
        ],
        [
          935.4,
          2282.9
        ],
        [
          912.1,
          2228.3
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1040.4,
          2540.7
        ],
        [
          1043.9,
          2557.5
        ],
        [
          1051.6,
          2567.1
        ],
        [
          1112.1,
          2565
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1112.3,
          2566.8
        ],
        [
          1050.8,
          2568.3
        ],
        [
          1042.7,
          2558.2
        ],
        [
          1034.6,
          2520.1
        ]
      ]
    },
    {
      "name": "Jalan Hankam Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1419.6,
          1571.8
        ],
        [
          1428.7,
          1629.6
        ]
      ]
    },
    {
      "name": "Jalan Kranggan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1431.2,
          1650.9
        ],
        [
          1434.5,
          1685.5
        ],
        [
          1422.6,
          1736
        ]
      ]
    },
    {
      "name": "Jalan Kranggan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1342.6,
          2507.2
        ],
        [
          1357.4,
          2473.2
        ],
        [
          1372.1,
          2406.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Pasar Kranggan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1416.5,
          2393.2
        ],
        [
          1396.2,
          2378.1
        ],
        [
          1375.7,
          2373.6
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          513.1,
          1525.4
        ],
        [
          522,
          1537.9
        ],
        [
          583.2,
          1569.7
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1380.6,
          2597.8
        ],
        [
          1403.1,
          2618.5
        ]
      ]
    },
    {
      "name": "Jalan TPU Pondok Ranggon",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1220.9,
          2379.5
        ],
        [
          1193,
          2357
        ]
      ]
    },
    {
      "name": "Jalan Kalimanggis",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1298.8,
          2626.2
        ],
        [
          1316.9,
          2563.1
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1402.1,
          2619.6
        ],
        [
          1382.5,
          2601.4
        ]
      ]
    },
    {
      "name": "Jalan Malaka Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1011.4,
          2051.8
        ],
        [
          1020.2,
          2055.4
        ],
        [
          1030.5,
          2054.5
        ],
        [
          1048.2,
          2029.5
        ],
        [
          1058.2,
          2024.6
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1030.7,
          2491.8
        ],
        [
          1036.2,
          2516.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          546.1,
          2506.5
        ],
        [
          559.8,
          2525.6
        ],
        [
          566.2,
          2546.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          565.1,
          2546.5
        ],
        [
          559.4,
          2527
        ],
        [
          545,
          2506.7
        ]
      ]
    },
    {
      "name": "Jalan Kalisari",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          586.7,
          2058.4
        ],
        [
          562.1,
          2047.9
        ],
        [
          551.6,
          2048.1
        ],
        [
          532,
          2037.9
        ],
        [
          497,
          2031.3
        ],
        [
          496.7,
          2026.5
        ],
        [
          447,
          2008.2
        ],
        [
          444.5,
          2003.1
        ],
        [
          429.4,
          1996.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          511.2,
          2307.9
        ],
        [
          516.5,
          2270.5
        ],
        [
          523.3,
          2253.1
        ],
        [
          532.2,
          2244.7
        ],
        [
          579.6,
          2215.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          692.1,
          1384.8
        ],
        [
          691.8,
          1408.3
        ]
      ]
    },
    {
      "name": "Jalan Suprijadi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          693.3,
          1611.7
        ],
        [
          668.6,
          1615.6
        ]
      ]
    },
    {
      "name": "Jalan Suprijadi",
      "type": "primary",
      "width": 18,
      "points": [
        [
          715.4,
          1606.8
        ],
        [
          693.3,
          1611.7
        ]
      ]
    },
    {
      "name": "Jalan Tahi Bonar Simatupang",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          481,
          1525.1
        ],
        [
          449.1,
          1527
        ]
      ]
    },
    {
      "name": "Jalan Pondok Ranggon",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1258.9,
          2139
        ],
        [
          1261.4,
          2150.9
        ],
        [
          1287.4,
          2160
        ]
      ]
    },
    {
      "name": "Jalan Blok Duku",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          736.7,
          2349.6
        ],
        [
          716.1,
          2342.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          590.5,
          1763.6
        ],
        [
          594.6,
          1790.8
        ]
      ]
    },
    {
      "name": "Jalan Transyogi",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1036.2,
          2516.2
        ],
        [
          1040.4,
          2540.7
        ]
      ]
    },
    {
      "name": "Jalan Gas Alam",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          618.4,
          2636.2
        ],
        [
          666.4,
          2643.3
        ]
      ]
    },
    {
      "name": "Jalan Pertengahan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          464,
          1866.1
        ],
        [
          470.8,
          1837
        ]
      ]
    },
    {
      "name": "Jalan Kalisari Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          413.2,
          1982.9
        ],
        [
          425,
          1986.9
        ],
        [
          429.4,
          1996.2
        ]
      ]
    },
    {
      "name": "Jalan Kalisari",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          614.4,
          2061.3
        ],
        [
          586.7,
          2058.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Hasan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          384.8,
          1843.8
        ],
        [
          382.9,
          1863.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          583.7,
          1886.5
        ],
        [
          576.7,
          1875
        ],
        [
          574.2,
          1863.1
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          574.8,
          1856.8
        ],
        [
          589.4,
          1807.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          591.4,
          1803.6
        ],
        [
          575.4,
          1859.3
        ],
        [
          576.8,
          1872.1
        ],
        [
          584.5,
          1885.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          591.5,
          2206.4
        ],
        [
          603.5,
          2190.6
        ],
        [
          644.5,
          2106.2
        ]
      ]
    },
    {
      "name": "Jalan Jambore Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          928.4,
          2429.7
        ],
        [
          924.7,
          2424
        ],
        [
          910.6,
          2422.3
        ]
      ]
    },
    {
      "name": "Jalan Raya Bogor",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          645.4,
          2106.6
        ],
        [
          604.3,
          2191.1
        ],
        [
          592.3,
          2206.9
        ]
      ]
    },
    {
      "name": "Jalan Condet Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          460.1,
          1375.9
        ],
        [
          469.5,
          1524.6
        ]
      ]
    },
    {
      "name": "Jalan Bantar Jati",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1389.3,
          1742.4
        ],
        [
          1384.9,
          1740.4
        ],
        [
          1375.4,
          1744.8
        ],
        [
          1358.8,
          1741.7
        ]
      ]
    },
    {
      "name": "Jalan Mabes Hankam",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1044.5,
          1609
        ],
        [
          1018.4,
          1596.5
        ]
      ]
    },
    {
      "name": "Jalan Mpok Nori",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1089.3,
          1702
        ],
        [
          1106.6,
          1699.1
        ],
        [
          1112.6,
          1686.4
        ],
        [
          1132.6,
          1665
        ]
      ]
    },
    {
      "name": "Jalan Bina Marga",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          925.3,
          1804.2
        ],
        [
          938.3,
          1785.2
        ],
        [
          946.3,
          1762.6
        ]
      ]
    },
    {
      "name": "Jalan Ciracas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          805.7,
          1885.5
        ],
        [
          797.4,
          1891
        ],
        [
          761.8,
          1899.4
        ],
        [
          742.3,
          1907.9
        ]
      ]
    },
    {
      "name": "Jalan Lapangan Tembak",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          855.6,
          2222.7
        ],
        [
          922.3,
          2229.7
        ]
      ]
    },
    {
      "name": "Jalan Hankam Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1337.4,
          1375.3
        ],
        [
          1364.5,
          1407.3
        ],
        [
          1375.6,
          1429
        ],
        [
          1401.1,
          1450
        ],
        [
          1419.8,
          1475.6
        ],
        [
          1424.1,
          1489.2
        ],
        [
          1418.9,
          1532.1
        ],
        [
          1418.6,
          1564.1
        ]
      ]
    },
    {
      "name": "Jalan Kranggan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1342.6,
          2507.2
        ],
        [
          1327.1,
          2542.3
        ]
      ]
    },
    {
      "name": "Jalan Kranggan",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1372.1,
          2406.9
        ],
        [
          1365.4,
          2448.3
        ],
        [
          1356.9,
          2478.6
        ],
        [
          1350.2,
          2489.1
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
          380.2,
          1731.9
        ],
        [
          406.1,
          1716.4
        ],
        [
          398.2,
          1697.4
        ],
        [
          412.4,
          1666.5
        ],
        [
          415,
          1645.1
        ],
        [
          422.7,
          1645.7
        ],
        [
          446.6,
          1665.5
        ],
        [
          447.4,
          1681
        ],
        [
          453.6,
          1686
        ],
        [
          463,
          1682.3
        ],
        [
          497.5,
          1649.6
        ],
        [
          496,
          1640.9
        ],
        [
          481.6,
          1640.3
        ],
        [
          476.7,
          1632.1
        ],
        [
          479.9,
          1616.7
        ],
        [
          490.2,
          1600
        ],
        [
          487.1,
          1578.7
        ],
        [
          499.9,
          1572.5
        ]
      ]
    },
    {
      "name": "Ci Liwung",
      "kind": "river",
      "width": 16,
      "points": [
        [
          499.9,
          1572.5
        ],
        [
          501.6,
          1568
        ],
        [
          498.1,
          1561.2
        ],
        [
          466.1,
          1549.2
        ],
        [
          443.1,
          1532.3
        ],
        [
          442,
          1524.9
        ],
        [
          452.3,
          1506.2
        ],
        [
          447.4,
          1481
        ],
        [
          415.4,
          1487.1
        ],
        [
          404.5,
          1505.3
        ],
        [
          385.8,
          1492.3
        ],
        [
          380.5,
          1470.8
        ],
        [
          396.6,
          1474.7
        ],
        [
          404.5,
          1482.2
        ],
        [
          410.7,
          1479
        ],
        [
          413.1,
          1469.5
        ],
        [
          412.3,
          1459.6
        ],
        [
          388.7,
          1442.7
        ],
        [
          387.1,
          1434
        ],
        [
          405.1,
          1428.1
        ],
        [
          436.7,
          1436.5
        ],
        [
          441.9,
          1433.8
        ],
        [
          442.6,
          1409.7
        ],
        [
          439.2,
          1401.9
        ],
        [
          433.1,
          1399.3
        ],
        [
          425.2,
          1402.9
        ],
        [
          417.1,
          1412.6
        ],
        [
          412.9,
          1411.3
        ],
        [
          414,
          1404.6
        ],
        [
          436.8,
          1377.9
        ]
      ]
    },
    {
      "name": "Ci Liwung",
      "kind": "river",
      "width": 16,
      "points": [
        [
          402.5,
          1376.7
        ],
        [
          401.7,
          1383.2
        ],
        [
          395.4,
          1389.2
        ],
        [
          384.5,
          1385
        ],
        [
          380.5,
          1377.1
        ]
      ]
    },
    {
      "name": "Kalibaru",
      "kind": "river",
      "width": 9,
      "points": [
        [
          597.2,
          2192.4
        ],
        [
          648.4,
          2089
        ],
        [
          650.4,
          2073.8
        ],
        [
          630.7,
          2004.2
        ],
        [
          624.3,
          1942
        ],
        [
          614.3,
          1921.2
        ],
        [
          577.7,
          1881.6
        ],
        [
          572.1,
          1868.2
        ],
        [
          575.7,
          1843.4
        ],
        [
          589.9,
          1792.3
        ],
        [
          589.8,
          1777.1
        ],
        [
          579.4,
          1738
        ],
        [
          558.7,
          1686.1
        ],
        [
          552.1,
          1641.8
        ],
        [
          605.1,
          1548.5
        ],
        [
          670.9,
          1465.7
        ],
        [
          683.4,
          1435
        ],
        [
          690.1,
          1401.9
        ]
      ]
    },
    {
      "name": "Kalibaru",
      "kind": "river",
      "width": 9,
      "points": [
        [
          504.9,
          2380.5
        ],
        [
          504,
          2339.6
        ],
        [
          509.9,
          2287.7
        ],
        [
          516.4,
          2256.9
        ],
        [
          523.4,
          2241.1
        ],
        [
          576.5,
          2213.6
        ],
        [
          597.2,
          2192.4
        ]
      ]
    },
    {
      "name": "Kali Cipinang",
      "kind": "river",
      "width": 9,
      "points": [
        [
          845.2,
          1672.7
        ],
        [
          847.7,
          1656.4
        ],
        [
          842.5,
          1639.5
        ],
        [
          829.6,
          1639.5
        ],
        [
          827.9,
          1631.9
        ],
        [
          818.5,
          1623.9
        ],
        [
          819.5,
          1614.5
        ],
        [
          816.3,
          1606.5
        ],
        [
          807.5,
          1596
        ],
        [
          794.6,
          1590.8
        ]
      ]
    },
    {
      "name": "Kali Cipinang",
      "kind": "river",
      "width": 9,
      "points": [
        [
          727.6,
          1502.6
        ],
        [
          729.7,
          1499.8
        ],
        [
          726.2,
          1497.4
        ],
        [
          725.6,
          1487.4
        ],
        [
          716.2,
          1493.4
        ],
        [
          713.7,
          1498.8
        ],
        [
          706.3,
          1495.7
        ],
        [
          705.5,
          1482.6
        ],
        [
          700.9,
          1475.5
        ],
        [
          706.4,
          1464.8
        ],
        [
          719.7,
          1463.1
        ],
        [
          721.1,
          1459.2
        ],
        [
          716.7,
          1453
        ],
        [
          717.2,
          1450
        ],
        [
          724.2,
          1448.2
        ],
        [
          721.5,
          1446.8
        ],
        [
          721.3,
          1436.9
        ],
        [
          735.3,
          1430.4
        ],
        [
          736.2,
          1418.6
        ],
        [
          728.5,
          1413.2
        ],
        [
          715.6,
          1413.4
        ],
        [
          712.6,
          1398.7
        ],
        [
          715.3,
          1391
        ],
        [
          705.6,
          1385.9
        ],
        [
          707.8,
          1381.6
        ],
        [
          705.5,
          1375.4
        ]
      ]
    },
    {
      "name": "Kali Cipinang",
      "kind": "river",
      "width": 9,
      "points": [
        [
          727.1,
          2369
        ],
        [
          726.3,
          2361
        ],
        [
          719.2,
          2358.9
        ],
        [
          715.1,
          2352.9
        ],
        [
          707.9,
          2356
        ],
        [
          698.3,
          2353.5
        ],
        [
          683.6,
          2338.8
        ],
        [
          695.1,
          2323.2
        ],
        [
          690.5,
          2309.8
        ],
        [
          704.7,
          2305.9
        ],
        [
          706.3,
          2300.1
        ],
        [
          720,
          2286.2
        ]
      ]
    },
    {
      "name": "Kali Cipinang",
      "kind": "river",
      "width": 9,
      "points": [
        [
          720,
          2286.2
        ],
        [
          722.4,
          2282.9
        ],
        [
          708.5,
          2278.2
        ],
        [
          706.3,
          2269.4
        ],
        [
          698.5,
          2271.5
        ],
        [
          695.7,
          2268.6
        ],
        [
          697,
          2263.1
        ],
        [
          691.2,
          2252.1
        ],
        [
          678.1,
          2250
        ],
        [
          677.3,
          2245.8
        ],
        [
          683.4,
          2244.8
        ],
        [
          681.5,
          2240
        ],
        [
          673.8,
          2236.4
        ],
        [
          665.4,
          2238.9
        ],
        [
          658.3,
          2227.3
        ],
        [
          659.1,
          2219.7
        ],
        [
          652.3,
          2221
        ],
        [
          650.8,
          2215.8
        ],
        [
          643.4,
          2215.7
        ],
        [
          641.6,
          2213.1
        ],
        [
          645.9,
          2199.1
        ],
        [
          652.4,
          2198.7
        ],
        [
          653.7,
          2195.3
        ],
        [
          644.8,
          2177
        ],
        [
          657.7,
          2171
        ],
        [
          660.3,
          2172.8
        ],
        [
          657.7,
          2157
        ],
        [
          667.9,
          2156.4
        ],
        [
          667.7,
          2146.1
        ],
        [
          680.6,
          2141.2
        ],
        [
          682.1,
          2136.8
        ],
        [
          688.2,
          2138.1
        ]
      ]
    },
    {
      "name": "Kali Cipinang",
      "kind": "river",
      "width": 9,
      "points": [
        [
          692.8,
          2104
        ],
        [
          697.7,
          2085
        ],
        [
          692.1,
          2081.9
        ],
        [
          691,
          2071.4
        ],
        [
          682,
          2069.2
        ],
        [
          686.6,
          2062.4
        ],
        [
          696.6,
          2061.7
        ],
        [
          691.9,
          2052.3
        ],
        [
          703.7,
          2050.1
        ],
        [
          704.7,
          2041.3
        ],
        [
          710.5,
          2037.1
        ],
        [
          711.3,
          2028.9
        ],
        [
          726.1,
          2017.7
        ],
        [
          726.2,
          2015.1
        ],
        [
          721,
          2014.6
        ],
        [
          720,
          2010.2
        ],
        [
          724.3,
          1997.6
        ],
        [
          731.7,
          1996.6
        ],
        [
          730.4,
          1986.7
        ],
        [
          737.4,
          1987.3
        ],
        [
          747.5,
          1973.6
        ],
        [
          755,
          1974.4
        ],
        [
          769.4,
          1955.4
        ],
        [
          769.9,
          1945.4
        ],
        [
          778.5,
          1939.9
        ],
        [
          780.2,
          1931.2
        ],
        [
          792.5,
          1927.1
        ],
        [
          795.2,
          1933.3
        ],
        [
          798,
          1933.4
        ],
        [
          815.6,
          1926.8
        ],
        [
          810.1,
          1918.8
        ],
        [
          816.2,
          1904.6
        ],
        [
          812.3,
          1901.7
        ],
        [
          806,
          1884.3
        ],
        [
          804.3,
          1852.3
        ],
        [
          809.4,
          1849.4
        ],
        [
          818.7,
          1854.1
        ],
        [
          827.1,
          1850.7
        ],
        [
          826.7,
          1837.4
        ],
        [
          823.4,
          1834.8
        ]
      ]
    },
    {
      "name": "Kali Cipinang",
      "kind": "river",
      "width": 9,
      "points": [
        [
          688.2,
          2138.1
        ],
        [
          708,
          2109.9
        ],
        [
          707.7,
          2106.8
        ],
        [
          697.6,
          2108.4
        ],
        [
          692.8,
          2104
        ]
      ]
    },
    {
      "name": "Kali Cipinang",
      "kind": "river",
      "width": 9,
      "points": [
        [
          821.8,
          2438.3
        ],
        [
          812.9,
          2426.8
        ],
        [
          815.9,
          2412.6
        ],
        [
          812.3,
          2403
        ],
        [
          806.6,
          2401.5
        ],
        [
          796.5,
          2405.6
        ],
        [
          788.5,
          2396.2
        ],
        [
          778.6,
          2395.4
        ],
        [
          774.5,
          2381
        ],
        [
          787.1,
          2372.8
        ],
        [
          783.9,
          2367.6
        ],
        [
          789.8,
          2364.7
        ],
        [
          786.8,
          2360.1
        ],
        [
          788.1,
          2355.6
        ],
        [
          778.6,
          2355.6
        ],
        [
          774.4,
          2359.7
        ],
        [
          766.3,
          2358.9
        ],
        [
          764.3,
          2362.6
        ],
        [
          756.2,
          2364.1
        ],
        [
          738.1,
          2363.4
        ]
      ]
    },
    {
      "name": "Kali Cipinang",
      "kind": "river",
      "width": 9,
      "points": [
        [
          823.4,
          1834.8
        ],
        [
          823.7,
          1818.9
        ],
        [
          816.8,
          1807.8
        ],
        [
          810.2,
          1806.8
        ],
        [
          804.9,
          1811.3
        ],
        [
          801.9,
          1798.1
        ],
        [
          794.6,
          1792.9
        ],
        [
          801.9,
          1789.4
        ],
        [
          801.8,
          1780.2
        ],
        [
          816,
          1775.6
        ],
        [
          811,
          1769.5
        ],
        [
          820,
          1766.9
        ],
        [
          820.2,
          1763.3
        ],
        [
          809.5,
          1756.4
        ],
        [
          810.7,
          1744.1
        ],
        [
          830.2,
          1723.7
        ],
        [
          837.8,
          1724.3
        ],
        [
          842.6,
          1700.3
        ],
        [
          848.9,
          1695.1
        ],
        [
          845.3,
          1692.9
        ],
        [
          847.8,
          1688.3
        ],
        [
          846.4,
          1677.7
        ]
      ]
    },
    {
      "name": "Kali Cipinang",
      "kind": "river",
      "width": 9,
      "points": [
        [
          751.4,
          1515.2
        ],
        [
          744.5,
          1512.7
        ],
        [
          743,
          1518.4
        ],
        [
          731.4,
          1520.6
        ],
        [
          732.7,
          1515.1
        ],
        [
          726,
          1510.1
        ],
        [
          727.6,
          1502.6
        ]
      ]
    },
    {
      "name": "Kali Cipinang",
      "kind": "river",
      "width": 9,
      "points": [
        [
          792.4,
          1577.8
        ],
        [
          792.4,
          1566.1
        ],
        [
          785.5,
          1561.6
        ],
        [
          778,
          1561.4
        ],
        [
          776.4,
          1548.5
        ],
        [
          765.8,
          1540.9
        ],
        [
          763.9,
          1522.8
        ],
        [
          751.4,
          1515.2
        ]
      ]
    },
    {
      "name": "Kali Cijantung",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          505.3,
          2709.8
        ],
        [
          494.6,
          2679.3
        ]
      ]
    },
    {
      "name": "Kali Baru",
      "kind": "river",
      "width": 10,
      "points": [
        [
          614.5,
          2631.9
        ],
        [
          609.2,
          2606.9
        ],
        [
          563,
          2582.4
        ],
        [
          550.4,
          2571.9
        ],
        [
          562.3,
          2541.3
        ],
        [
          553.8,
          2520.7
        ],
        [
          551.7,
          2518.4
        ],
        [
          527,
          2522
        ],
        [
          519.6,
          2520.3
        ],
        [
          515,
          2492.4
        ],
        [
          519.9,
          2470.9
        ],
        [
          515.4,
          2436.9
        ],
        [
          507.6,
          2410.2
        ],
        [
          504.9,
          2380.5
        ]
      ]
    },
    {
      "name": "Kali Baru",
      "kind": "river",
      "width": 10,
      "points": [
        [
          624.2,
          2708.3
        ],
        [
          616.4,
          2656.5
        ]
      ]
    },
    {
      "name": "Kali Cipinang",
      "kind": "river",
      "width": 9,
      "points": [
        [
          857.2,
          2439.9
        ],
        [
          856.9,
          2433.1
        ],
        [
          849.6,
          2425.2
        ],
        [
          854.8,
          2411.9
        ],
        [
          848.7,
          2409.6
        ],
        [
          837.4,
          2409.4
        ],
        [
          834.2,
          2412.4
        ],
        [
          837,
          2433.9
        ],
        [
          826.6,
          2438.1
        ]
      ]
    }
  ],
  "waterBodies": [
    {
      "name": "Situ Rawa Dongkal",
      "kind": "lake",
      "points": [
        [
          914.7,
          2276.5
        ],
        [
          906,
          2281.4
        ],
        [
          903.5,
          2288.4
        ],
        [
          904.9,
          2299.4
        ],
        [
          912.5,
          2309.7
        ],
        [
          912,
          2317.9
        ],
        [
          907.3,
          2318.3
        ],
        [
          901.7,
          2311.3
        ],
        [
          890,
          2332
        ],
        [
          898.1,
          2333.6
        ],
        [
          903.5,
          2328.2
        ],
        [
          921.6,
          2320.8
        ],
        [
          923.2,
          2298.6
        ],
        [
          932.9,
          2291.8
        ],
        [
          941.3,
          2290.8
        ],
        [
          928.9,
          2279.4
        ],
        [
          914.7,
          2276.5
        ]
      ]
    },
    {
      "name": "Situ Tipar",
      "kind": "lake",
      "points": [
        [
          634.6,
          2247.8
        ],
        [
          630.1,
          2265
        ],
        [
          606.9,
          2282.9
        ],
        [
          622.8,
          2304.7
        ],
        [
          637.4,
          2305.6
        ],
        [
          641.9,
          2299.8
        ],
        [
          639.6,
          2290.3
        ],
        [
          643.3,
          2285.9
        ],
        [
          641.1,
          2270.4
        ],
        [
          646.6,
          2254
        ],
        [
          641.7,
          2247.3
        ],
        [
          634.6,
          2247.8
        ]
      ]
    },
    {
      "name": "Situ Pedongkelan",
      "kind": "lake",
      "points": [
        [
          475,
          2188.5
        ],
        [
          464.8,
          2211.3
        ],
        [
          465.3,
          2224.5
        ],
        [
          471.2,
          2230.2
        ],
        [
          475.4,
          2227.7
        ],
        [
          475.7,
          2211.4
        ],
        [
          485.1,
          2201.7
        ],
        [
          490,
          2172.3
        ],
        [
          475.2,
          2157.3
        ],
        [
          467.4,
          2177.3
        ],
        [
          468,
          2182.2
        ],
        [
          475,
          2188.5
        ]
      ]
    },
    {
      "name": "Kolam Pemancingan Telaga Mina",
      "kind": "lake",
      "points": [
        [
          1145.3,
          1542
        ],
        [
          1143.8,
          1548.5
        ],
        [
          1166,
          1553.8
        ],
        [
          1167.6,
          1547.4
        ],
        [
          1145.3,
          1542
        ]
      ]
    },
    {
      "name": "Waduk Sunter Hulu",
      "kind": "lake",
      "points": [
        [
          1397.7,
          1687.9
        ],
        [
          1396.4,
          1684.9
        ],
        [
          1373.7,
          1689
        ],
        [
          1380.3,
          1695.4
        ],
        [
          1377.7,
          1710.5
        ],
        [
          1382.8,
          1711.9
        ],
        [
          1389,
          1739
        ],
        [
          1393,
          1737.5
        ],
        [
          1392.1,
          1728.5
        ],
        [
          1395.4,
          1723.3
        ],
        [
          1391,
          1712.3
        ],
        [
          1397.5,
          1699.4
        ],
        [
          1392,
          1691.1
        ],
        [
          1397.7,
          1687.9
        ]
      ]
    },
    {
      "name": "Waduk Surilang",
      "kind": "water",
      "points": [
        [
          483,
          1430
        ],
        [
          485.5,
          1439.5
        ],
        [
          491.4,
          1445.3
        ],
        [
          498.3,
          1446.5
        ],
        [
          501.1,
          1442.2
        ],
        [
          492.1,
          1427.6
        ],
        [
          487.2,
          1425.9
        ],
        [
          483,
          1430
        ]
      ]
    },
    {
      "name": "Embung Pekayon",
      "kind": "reservoir",
      "points": [
        [
          585.8,
          2128.5
        ],
        [
          576.6,
          2130.1
        ],
        [
          568,
          2146.5
        ],
        [
          564.2,
          2147.1
        ],
        [
          570.5,
          2153.4
        ],
        [
          574.7,
          2153.5
        ],
        [
          576.7,
          2137.8
        ],
        [
          585.8,
          2128.5
        ]
      ]
    },
    {
      "name": "Situ Pangarengan",
      "kind": "lake",
      "points": [
        [
          485.6,
          2634.5
        ],
        [
          482.5,
          2656.6
        ],
        [
          486.2,
          2673.7
        ],
        [
          489.6,
          2678.4
        ],
        [
          507.9,
          2682.1
        ],
        [
          511.9,
          2675.5
        ],
        [
          505.4,
          2668.8
        ],
        [
          498.5,
          2643
        ],
        [
          491.2,
          2640.4
        ],
        [
          493.3,
          2631.9
        ],
        [
          506.9,
          2633.6
        ],
        [
          500.9,
          2632
        ],
        [
          502.9,
          2617.7
        ],
        [
          488,
          2620.8
        ],
        [
          485.6,
          2634.5
        ]
      ]
    },
    {
      "name": "Situ Gadog",
      "kind": "lake",
      "points": [
        [
          637.4,
          2521.9
        ],
        [
          633.5,
          2537.9
        ],
        [
          639.8,
          2549
        ],
        [
          646.5,
          2530.1
        ],
        [
          642.7,
          2528.4
        ],
        [
          641.8,
          2521.2
        ],
        [
          637.4,
          2521.9
        ]
      ]
    },
    {
      "name": "Situ Rawa Babon",
      "kind": "lake",
      "points": [
        [
          871.7,
          2032.2
        ],
        [
          868.8,
          2043.2
        ],
        [
          872.7,
          2049.3
        ],
        [
          871.6,
          2052.8
        ],
        [
          874.2,
          2050
        ],
        [
          879.1,
          2052.7
        ],
        [
          878.3,
          2056.8
        ],
        [
          883.1,
          2058.5
        ],
        [
          895.9,
          2051.6
        ],
        [
          896.8,
          2038.1
        ],
        [
          889.9,
          2032.2
        ],
        [
          886,
          2012.7
        ],
        [
          879.1,
          2007.1
        ],
        [
          881.2,
          1995.3
        ],
        [
          874.1,
          1999.8
        ],
        [
          872.9,
          2011
        ],
        [
          878.1,
          2014.1
        ],
        [
          878.8,
          2018.6
        ],
        [
          871.7,
          2032.2
        ]
      ]
    },
    {
      "name": "Waduk Pondok Ranggon",
      "kind": "reservoir",
      "points": [
        [
          1364.3,
          1927.1
        ],
        [
          1364.3,
          1952.7
        ],
        [
          1370,
          1956.9
        ],
        [
          1372,
          1941.4
        ],
        [
          1368.7,
          1937.3
        ],
        [
          1371.4,
          1917.7
        ],
        [
          1365.6,
          1918.3
        ],
        [
          1364.3,
          1927.1
        ]
      ]
    },
    {
      "name": "Waduk Setu",
      "kind": "lake",
      "points": [
        [
          1302.9,
          1632.9
        ],
        [
          1299.1,
          1638.9
        ],
        [
          1294.6,
          1638.5
        ],
        [
          1289.7,
          1647.4
        ],
        [
          1290.7,
          1653.2
        ],
        [
          1293.6,
          1649
        ],
        [
          1298.4,
          1653.4
        ],
        [
          1308.3,
          1652.1
        ],
        [
          1314.7,
          1631.9
        ],
        [
          1302.9,
          1632.9
        ]
      ]
    },
    {
      "name": "Waduk Kampung Rambutan 2",
      "kind": "reservoir",
      "points": [
        [
          852.7,
          1709.5
        ],
        [
          847.8,
          1702.2
        ],
        [
          845.1,
          1702.5
        ],
        [
          844.2,
          1712.6
        ],
        [
          839.8,
          1718.9
        ],
        [
          842.7,
          1730.4
        ],
        [
          852.7,
          1709.5
        ]
      ]
    },
    {
      "name": "Waduk Dukuh 1",
      "kind": "reservoir",
      "points": [
        [
          714.7,
          1475.9
        ],
        [
          726.9,
          1463
        ],
        [
          725.1,
          1455.5
        ],
        [
          719.6,
          1455
        ],
        [
          722,
          1462
        ],
        [
          718.5,
          1466.1
        ],
        [
          711.4,
          1466.6
        ],
        [
          710.7,
          1471.1
        ],
        [
          706.1,
          1472.8
        ],
        [
          706.2,
          1477.5
        ],
        [
          714.7,
          1475.9
        ]
      ]
    },
    {
      "name": "Waduk Dukuh 2",
      "kind": "reservoir",
      "points": [
        [
          726.1,
          1485.8
        ],
        [
          718.2,
          1486.8
        ],
        [
          715.7,
          1477.3
        ],
        [
          711,
          1478
        ],
        [
          707.5,
          1494.8
        ],
        [
          712.1,
          1496.7
        ],
        [
          716.6,
          1490.3
        ],
        [
          726.1,
          1485.8
        ]
      ]
    }
  ]
};
