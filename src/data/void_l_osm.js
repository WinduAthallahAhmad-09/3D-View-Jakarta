/**
 * Void L (Cipinang Melayu-Pondok Kelapa-Kalimalang) road and water geometry derived from OpenStreetMap.
 * Source: OpenStreetMap contributors, ODbL. Retrieved 2026-11-02 via the Overpass API.
 * Coordinates are stored directly in scene units using the unscaled GPS projection:
 *   x = (lng - 106.823048) * 14100
 *   z = (lat + 6.194957) * -14180
 * Coverage is clipped to x 960-1800 / z 560-960 so the northern edge meets Void F at z=560.
 * Curated to named arterial ways plus the 100 longest named residential corridors; unnamed roads,
 * footways, service roads, and flyovers are excluded. Kanal Banjir Timur lies west of the clip.
 */
export const VOID_L_OSM = {
  "meta": {
    "source": "OpenStreetMap contributors (ODbL)",
    "license": "ODbL 1.0",
    "retrieved": "2026-11-02",
    "api": "https://overpass-api.de/api/interpreter",
    "bbox": {
      "south": -6.2627,
      "west": 106.8911,
      "north": -6.2345,
      "east": 106.9507
    },
    "clipBox": {
      "minX": 960,
      "maxX": 1800,
      "minZ": 560,
      "maxZ": 960
    },
    "projection": "projectGpsToScene",
    "projectionConstants": {
      "originLng": 106.823048,
      "originLat": -6.194957,
      "scaleX": 14100,
      "scaleZ": 14180
    },
    "simplification": 2,
    "roadCount": 301,
    "roadPointCount": 731,
    "waterwayCount": 22,
    "waterPointCount": 160,
    "waterBodyCount": 6,
    "note": "Jaringan jalan Cipinang Melayu-Pondok Kelapa-Kalimalang dan tata air Buaran-Sunter-Kali Malang pada klip x 960-1800 / z 560-960. Kurasi: seluruh way arteri bernama dan 100 koridor permukiman terpanjang; jalan tanpa nama, footway, service, dan jalan layang dikecualikan. Kanal Banjir Timur berada di barat klip sehingga tetap prosedural."
  },
  "roads": [
    {
      "name": "Bintara Jaya Permai",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1719.4,
          670.7
        ],
        [
          1733.7,
          649.4
        ]
      ]
    },
    {
      "name": "Bintara Jaya Permai",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1724.2,
          672.6
        ],
        [
          1744.6,
          687.9
        ]
      ]
    },
    {
      "name": "Bintara Jaya Permai",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1726.9,
          669
        ],
        [
          1747.4,
          684.1
        ]
      ]
    },
    {
      "name": "Curug Jaya III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1370.9,
          873.6
        ],
        [
          1355.2,
          871.5
        ]
      ]
    },
    {
      "name": "Curug Jaya III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1371.8,
          834.5
        ],
        [
          1373.2,
          857.5
        ],
        [
          1368.5,
          878.1
        ]
      ]
    },
    {
      "name": "Jalan 26",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1399.2,
          613.7
        ],
        [
          1371.5,
          603
        ],
        [
          1366.8,
          597.7
        ]
      ]
    },
    {
      "name": "Jalan Abo Basir I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1468.9,
          926.1
        ],
        [
          1442.5,
          920.4
        ]
      ]
    },
    {
      "name": "Jalan Anugerah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1321.3,
          904.1
        ],
        [
          1323.4,
          908
        ],
        [
          1353.3,
          909.1
        ]
      ]
    },
    {
      "name": "Jalan Anugerah Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1321.3,
          904.1
        ],
        [
          1260.9,
          894.8
        ],
        [
          1237.5,
          896.1
        ]
      ]
    },
    {
      "name": "Jalan Arista Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1501.6,
          588.2
        ],
        [
          1506.3,
          608.7
        ]
      ]
    },
    {
      "name": "Jalan Arista Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1501.6,
          588.2
        ],
        [
          1505.2,
          608.9
        ]
      ]
    },
    {
      "name": "Jalan Arista Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1516.5,
          584.3
        ],
        [
          1501.6,
          588.2
        ]
      ]
    },
    {
      "name": "Jalan Artileri",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1276.7,
          779.9
        ],
        [
          1301.9,
          778.2
        ]
      ]
    },
    {
      "name": "Jalan Artileri",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1304.8,
          778.2
        ],
        [
          1330.9,
          776.8
        ]
      ]
    },
    {
      "name": "Jalan Bambu Apus Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1161.4,
          563.4
        ],
        [
          1208.5,
          565.4
        ]
      ]
    },
    {
      "name": "Jalan Betung Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1138,
          560.2
        ],
        [
          1134.1,
          617.3
        ]
      ]
    },
    {
      "name": "Jalan Bintara Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1727.4,
          589.9
        ],
        [
          1733.4,
          560
        ]
      ]
    },
    {
      "name": "Jalan Bintara Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1729.1,
          630.3
        ],
        [
          1726.4,
          597.1
        ]
      ]
    },
    {
      "name": "Jalan Bintara Jaya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1729.1,
          630.3
        ],
        [
          1733.7,
          649.4
        ],
        [
          1763.8,
          661.6
        ],
        [
          1770.4,
          673
        ],
        [
          1754.5,
          739.1
        ],
        [
          1741.2,
          762.8
        ],
        [
          1728.3,
          776.7
        ]
      ]
    },
    {
      "name": "Jalan Bintara Jaya 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1785,
          735
        ],
        [
          1785.8,
          747.6
        ],
        [
          1782.5,
          756.8
        ],
        [
          1785.8,
          758.5
        ],
        [
          1785,
          766.1
        ],
        [
          1743.6,
          758.5
        ]
      ]
    },
    {
      "name": "Jalan Bintara Jaya III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1764.7,
          705.2
        ],
        [
          1790.5,
          717.6
        ]
      ]
    },
    {
      "name": "Jalan Bintara Jaya III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1790.5,
          717.6
        ],
        [
          1798.8,
          693.7
        ]
      ]
    },
    {
      "name": "Jalan Bintara Jaya VIII",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1760.6,
          624.8
        ],
        [
          1729.1,
          630.3
        ]
      ]
    },
    {
      "name": "Jalan Bintara Jaya VIII",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1800,
          631.3
        ],
        [
          1770.3,
          623.9
        ],
        [
          1766.6,
          626.6
        ]
      ]
    },
    {
      "name": "Jalan Caman Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1750.9,
          942.9
        ],
        [
          1737,
          960
        ]
      ]
    },
    {
      "name": "Jalan Caman Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1775.1,
          915
        ],
        [
          1750.9,
          942.9
        ]
      ]
    },
    {
      "name": "Jalan Caman Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1791,
          897.7
        ],
        [
          1775.1,
          915
        ]
      ]
    },
    {
      "name": "Jalan Cemerlang I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1618.2,
          906.9
        ],
        [
          1618.3,
          911.8
        ],
        [
          1605.5,
          914.4
        ]
      ]
    },
    {
      "name": "Jalan Cemerlang I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1658.9,
          901.2
        ],
        [
          1619.3,
          894.4
        ]
      ]
    },
    {
      "name": "Jalan Curug Jaya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1337.7,
          878.9
        ],
        [
          1323.3,
          879.4
        ],
        [
          1322.2,
          870.2
        ],
        [
          1318.5,
          867.3
        ]
      ]
    },
    {
      "name": "Jalan Curug Jaya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1351.9,
          885.9
        ],
        [
          1350.1,
          892.3
        ],
        [
          1345,
          892
        ],
        [
          1345.1,
          879.7
        ],
        [
          1337.7,
          878.9
        ]
      ]
    },
    {
      "name": "Jalan Curug Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1442.8,
          889.8
        ],
        [
          1438.8,
          881.3
        ],
        [
          1443.3,
          851.4
        ],
        [
          1443,
          813.9
        ],
        [
          1434.5,
          810.9
        ],
        [
          1434.6,
          792.7
        ],
        [
          1430.2,
          782.5
        ],
        [
          1416.7,
          777.6
        ],
        [
          1415.4,
          755.7
        ]
      ]
    },
    {
      "name": "Jalan Dahlia Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1759.4,
          820.8
        ],
        [
          1784.5,
          831.1
        ]
      ]
    },
    {
      "name": "Jalan Dahlia Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1784.3,
          832.2
        ],
        [
          1759.1,
          821.9
        ]
      ]
    },
    {
      "name": "Jalan Delima Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1443,
          813.9
        ],
        [
          1446.8,
          783.7
        ],
        [
          1430.2,
          782.5
        ]
      ]
    },
    {
      "name": "Jalan Depkes II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1752,
          860.5
        ],
        [
          1738.7,
          859.8
        ],
        [
          1705.4,
          850.7
        ]
      ]
    },
    {
      "name": "Jalan Dwikora",
      "type": "residential",
      "width": 10,
      "points": [
        [
          989.9,
          761.7
        ],
        [
          972.4,
          699
        ]
      ]
    },
    {
      "name": "Jalan Dwikora",
      "type": "residential",
      "width": 10,
      "points": [
        [
          989.9,
          761.7
        ],
        [
          1004.7,
          813.5
        ]
      ]
    },
    {
      "name": "Jalan Elang Malindo",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1255.1,
          846.1
        ],
        [
          1254.9,
          856.5
        ],
        [
          1270.1,
          863.9
        ]
      ]
    },
    {
      "name": "Jalan Elang Malindo",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1270.1,
          863.9
        ],
        [
          1318.5,
          867.3
        ]
      ]
    },
    {
      "name": "Jalan Elang Malindo X",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1320.1,
          838.7
        ],
        [
          1318.5,
          867.3
        ]
      ]
    },
    {
      "name": "Jalan Elang Malindo X",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1327.1,
          839.7
        ],
        [
          1325.1,
          859.7
        ]
      ]
    },
    {
      "name": "Jalan Gading Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1158.9,
          624.6
        ],
        [
          1161.5,
          560
        ]
      ]
    },
    {
      "name": "Jalan Haji Bakri",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1047.8,
          628.7
        ],
        [
          1043.6,
          661.9
        ]
      ]
    },
    {
      "name": "Jalan Haji Bakri",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1064.3,
          632.3
        ],
        [
          1047.8,
          628.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Bashyar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1395.3,
          913.1
        ],
        [
          1353.3,
          909.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Dahlan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1338.1,
          725.9
        ],
        [
          1363.3,
          727.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Dogol",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1222.4,
          717
        ],
        [
          1237.4,
          668.9
        ],
        [
          1239.4,
          649
        ]
      ]
    },
    {
      "name": "Jalan Haji Dogon",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1569.6,
          628.1
        ],
        [
          1654.5,
          621.1
        ]
      ]
    },
    {
      "name": "Jalan Haji Dogon",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1640.6,
          593
        ],
        [
          1653.2,
          594.8
        ],
        [
          1654.3,
          611.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Matali",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1773,
          612.9
        ],
        [
          1778.2,
          593.2
        ],
        [
          1779.9,
          576
        ],
        [
          1776,
          575.2
        ],
        [
          1780,
          562.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Naman",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1674.2,
          612.7
        ],
        [
          1686.5,
          603.9
        ]
      ]
    },
    {
      "name": "Jalan Haji Naman",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1676.7,
          773.1
        ],
        [
          1682.2,
          752.7
        ],
        [
          1689.2,
          640.7
        ],
        [
          1685.5,
          629.4
        ],
        [
          1675.1,
          627.2
        ],
        [
          1674.2,
          612.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Nasir",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1337.5,
          652.9
        ],
        [
          1343.1,
          653.5
        ],
        [
          1344.9,
          670.3
        ]
      ]
    },
    {
      "name": "Jalan Haji Nasir",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1342.8,
          657.6
        ],
        [
          1378.1,
          663.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Taba",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1286.5,
          719.6
        ],
        [
          1291.8,
          693.4
        ]
      ]
    },
    {
      "name": "Jalan Haji Taba",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1319,
          685.5
        ],
        [
          1306.8,
          683
        ],
        [
          1292.4,
          674
        ]
      ]
    },
    {
      "name": "Jalan Infantri",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1276.7,
          767.5
        ],
        [
          1328.8,
          764.7
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Tarum Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1068.9,
          696.9
        ],
        [
          1010.4,
          646.9
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Tarum Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1102.3,
          710.4
        ],
        [
          1068.9,
          696.9
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Tarum Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1155,
          729.4
        ],
        [
          1102.3,
          710.4
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Tarum Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1179.2,
          737.7
        ],
        [
          1155,
          729.4
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Tarum Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1209.9,
          744.9
        ],
        [
          1188.5,
          739.7
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Tarum Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1227.9,
          750.5
        ],
        [
          1209.9,
          744.9
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Tarum Barat",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1277.4,
          760
        ],
        [
          1257.5,
          759
        ],
        [
          1229.6,
          751.2
        ]
      ]
    },
    {
      "name": "Jalan Intendans",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1276.6,
          790.7
        ],
        [
          1332.8,
          787.9
        ]
      ]
    },
    {
      "name": "Jalan Janur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1564,
          680.7
        ],
        [
          1571.5,
          717
        ]
      ]
    },
    {
      "name": "Jalan Janur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1571.5,
          717
        ],
        [
          1574.5,
          734.8
        ]
      ]
    },
    {
      "name": "Jalan Janur II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1528.2,
          697
        ],
        [
          1532.6,
          667.5
        ],
        [
          1529.8,
          632.8
        ]
      ]
    },
    {
      "name": "Jalan Janur Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1499.2,
          695.6
        ],
        [
          1506.2,
          668.3
        ]
      ]
    },
    {
      "name": "Jalan Janur Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1507.4,
          669.3
        ],
        [
          1500.7,
          695.4
        ]
      ]
    },
    {
      "name": "Jalan Janur Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1508.4,
          635
        ],
        [
          1506.2,
          668.3
        ]
      ]
    },
    {
      "name": "Jalan Jati Utama Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1505.2,
          898.2
        ],
        [
          1506,
          910
        ],
        [
          1514.5,
          914.6
        ],
        [
          1513.2,
          921.6
        ],
        [
          1527.4,
          924.6
        ]
      ]
    },
    {
      "name": "Jalan Jati Utama Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1527.4,
          924.6
        ],
        [
          1543.4,
          931.1
        ]
      ]
    },
    {
      "name": "Jalan Jati Utama Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1555,
          925
        ],
        [
          1572.7,
          928.6
        ]
      ]
    },
    {
      "name": "Jalan Jati Utama Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1578.9,
          927.4
        ],
        [
          1589.7,
          953.1
        ]
      ]
    },
    {
      "name": "Jalan Jati Utama Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1614.2,
          942.5
        ],
        [
          1589.7,
          953.1
        ]
      ]
    },
    {
      "name": "Jalan Jati Utama Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1638.2,
          932.1
        ],
        [
          1614.2,
          942.5
        ]
      ]
    },
    {
      "name": "Jalan Jati Utama Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1691.9,
          960
        ],
        [
          1686.3,
          949
        ],
        [
          1674.1,
          938.6
        ],
        [
          1638.2,
          932.1
        ]
      ]
    },
    {
      "name": "Jalan Jati Waringin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1202.7,
          761.9
        ],
        [
          1211.6,
          785.7
        ],
        [
          1222.5,
          856
        ]
      ]
    },
    {
      "name": "Jalan Jati Waringin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1222.7,
          866.8
        ],
        [
          1208.2,
          777.5
        ],
        [
          1202.5,
          763.7
        ],
        [
          1189.3,
          749.9
        ]
      ]
    },
    {
      "name": "Jalan Jati Waringin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1224.6,
          867.1
        ],
        [
          1227,
          884.5
        ]
      ]
    },
    {
      "name": "Jalan Jati Waringin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1225.2,
          884.5
        ],
        [
          1222.7,
          866.8
        ]
      ]
    },
    {
      "name": "Jalan Jati Waringin",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1238.2,
          960
        ],
        [
          1231.2,
          917.4
        ]
      ]
    },
    {
      "name": "Jalan Jatibening",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1718.5,
          960
        ],
        [
          1697.3,
          911.7
        ],
        [
          1697,
          896.8
        ]
      ]
    },
    {
      "name": "Jalan Jatibening 2",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1697,
          896.8
        ],
        [
          1662.5,
          893.9
        ],
        [
          1659,
          889.3
        ]
      ]
    },
    {
      "name": "Jalan Kampung Gandaria",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1438.4,
          712.6
        ],
        [
          1421,
          706.4
        ]
      ]
    },
    {
      "name": "Jalan Kampung Gandaria",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1438.9,
          680.9
        ],
        [
          1419.6,
          695
        ],
        [
          1439.3,
          701.2
        ]
      ]
    },
    {
      "name": "Jalan Kampung Tipar",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1507.3,
          642.4
        ],
        [
          1499.2,
          648.7
        ],
        [
          1489.6,
          651.1
        ],
        [
          1473.9,
          667.1
        ],
        [
          1452.5,
          678.8
        ]
      ]
    },
    {
      "name": "Jalan Kapin Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1502.7,
          848.9
        ],
        [
          1504.9,
          887.6
        ]
      ]
    },
    {
      "name": "Jalan Kapin Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1504.1,
          786.5
        ],
        [
          1509.7,
          790.6
        ],
        [
          1497.3,
          843.8
        ]
      ]
    },
    {
      "name": "Jalan Kavaleri",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1276.8,
          773.4
        ],
        [
          1301.4,
          772.3
        ]
      ]
    },
    {
      "name": "Jalan Kavaleri",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1304.5,
          772.2
        ],
        [
          1329.9,
          770.7
        ]
      ]
    },
    {
      "name": "Jalan Kavling Agraria",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1254,
          734.1
        ],
        [
          1274,
          736.4
        ]
      ]
    },
    {
      "name": "Jalan Kavling Agraria",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1255.8,
          726.1
        ],
        [
          1252.3,
          741.1
        ]
      ]
    },
    {
      "name": "Jalan Kavling Agraria",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1256.2,
          740.2
        ],
        [
          1286,
          744.2
        ]
      ]
    },
    {
      "name": "Jalan Kavling Agraria",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1256.6,
          726.2
        ],
        [
          1278.9,
          727.6
        ]
      ]
    },
    {
      "name": "Jalan Kavling Agraria",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1259.8,
          735.3
        ],
        [
          1261,
          731.9
        ],
        [
          1273.9,
          732.5
        ]
      ]
    },
    {
      "name": "Jalan Kavling Agraria",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1273.6,
          726.9
        ],
        [
          1274.3,
          743.4
        ]
      ]
    },
    {
      "name": "Jalan Kavling Agraria",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1278.9,
          727.6
        ],
        [
          1279.8,
          743.9
        ]
      ]
    },
    {
      "name": "Jalan Kavling Agraria",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1286,
          729.1
        ],
        [
          1286,
          744.2
        ]
      ]
    },
    {
      "name": "Jalan Kavling DKI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1351,
          639.7
        ],
        [
          1390.3,
          639.7
        ]
      ]
    },
    {
      "name": "Jalan Kavling DKI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1377.9,
          626.2
        ],
        [
          1351,
          625.9
        ]
      ]
    },
    {
      "name": "Jalan Kavling DKI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1387.8,
          633.2
        ],
        [
          1350.1,
          632.5
        ]
      ]
    },
    {
      "name": "Jalan Kejaksaan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1195.5,
          625.9
        ],
        [
          1141.2,
          623.8
        ],
        [
          1123.4,
          612.9
        ],
        [
          1098.2,
          609.3
        ],
        [
          1074.1,
          612.6
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Hibrida",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1471.2,
          634.6
        ],
        [
          1471.5,
          574.8
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Hibrida",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1471.5,
          574.8
        ],
        [
          1472.7,
          634.7
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Hibrida 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1487.4,
          576.5
        ],
        [
          1487.6,
          632.8
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Hijau II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1524.6,
          757.3
        ],
        [
          1526.4,
          726.3
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Hijau II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1526.4,
          726.3
        ],
        [
          1528.2,
          697
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Hijau Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1495.8,
          754.1
        ],
        [
          1499.2,
          695.6
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Hijau Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1500.7,
          695.4
        ],
        [
          1497,
          754.2
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Kopyor Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1381.1,
          732.4
        ],
        [
          1374.1,
          709.6
        ],
        [
          1376,
          696.3
        ],
        [
          1387.4,
          685
        ],
        [
          1396.7,
          662.8
        ],
        [
          1403.5,
          663.2
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Kuning",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1410.2,
          631
        ],
        [
          1404.7,
          663.4
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Kuning",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1410.8,
          612.7
        ],
        [
          1410.3,
          628.9
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Kuning Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1404.7,
          663.4
        ],
        [
          1400.9,
          693.8
        ],
        [
          1417.3,
          725.6
        ],
        [
          1416.6,
          738.5
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Kuning Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1416.6,
          738.5
        ],
        [
          1416.2,
          725.9
        ],
        [
          1399.9,
          695.1
        ],
        [
          1403.5,
          663.2
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Sawit III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1476.5,
          741.4
        ],
        [
          1477.6,
          715.4
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Sawit III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1478.9,
          717.8
        ],
        [
          1477.9,
          741.6
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Sawit Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1451.6,
          691.2
        ],
        [
          1457.7,
          724.5
        ],
        [
          1457.6,
          739.4
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Sawit Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1454.3,
          633.3
        ],
        [
          1450.5,
          689
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Sawit Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1455.8,
          739.2
        ],
        [
          1456.7,
          727.6
        ],
        [
          1450.2,
          690.5
        ]
      ]
    },
    {
      "name": "Jalan Kemang Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1442.5,
          920.4
        ],
        [
          1424.5,
          919.4
        ],
        [
          1419.7,
          911.7
        ],
        [
          1396.3,
          913.2
        ]
      ]
    },
    {
      "name": "Jalan Kincan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1658.4,
          876
        ],
        [
          1701.5,
          873.8
        ]
      ]
    },
    {
      "name": "Jalan Kincan Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1702.6,
          782.1
        ],
        [
          1706.7,
          835.4
        ],
        [
          1701.5,
          873.8
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          978.4,
          629.1
        ],
        [
          995.5,
          632.2
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          996.9,
          632.9
        ],
        [
          1010.7,
          640.5
        ],
        [
          1036.9,
          663.7
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1036.9,
          663.7
        ],
        [
          1072.4,
          691.7
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1072.4,
          691.7
        ],
        [
          1091.1,
          698.3
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1091.1,
          698.3
        ],
        [
          1115.3,
          706.5
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1115.3,
          706.5
        ],
        [
          1166.1,
          725.7
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1195,
          733
        ],
        [
          1214.5,
          738.3
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1214.5,
          738.3
        ],
        [
          1260.5,
          749.7
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1273.9,
          752.1
        ],
        [
          1327.2,
          750.3
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1334.8,
          749.8
        ],
        [
          1363,
          747.6
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1365.2,
          748.1
        ],
        [
          1284.8,
          753.4
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1386,
          746
        ],
        [
          1405.9,
          746.4
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1415.3,
          747.5
        ],
        [
          1454.6,
          751.8
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1456,
          751.8
        ],
        [
          1485.9,
          753.8
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1497,
          754.2
        ],
        [
          1541.6,
          759.1
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1545.6,
          759.5
        ],
        [
          1657.8,
          771.4
        ]
      ]
    },
    {
      "name": "Jalan Laksamana Malahayati",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1676.7,
          773.1
        ],
        [
          1702.7,
          775.4
        ]
      ]
    },
    {
      "name": "Jalan Lampiri",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          1660.7,
          830.4
        ],
        [
          1590.4,
          824.7
        ]
      ]
    },
    {
      "name": "Jalan Lampiri",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          1704.8,
          814.1
        ],
        [
          1670.3,
          817.8
        ],
        [
          1669,
          823.5
        ],
        [
          1660.7,
          830.4
        ]
      ]
    },
    {
      "name": "Jalan Laut Arafuru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1224.4,
          626.9
        ],
        [
          1226.1,
          560
        ]
      ]
    },
    {
      "name": "Jalan Laut Arafuru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1226.4,
          626.9
        ],
        [
          1226.8,
          647.1
        ]
      ]
    },
    {
      "name": "Jalan Laut Arafuru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1228,
          560
        ],
        [
          1226.4,
          626.9
        ]
      ]
    },
    {
      "name": "Jalan Laut Arafuru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1229,
          648.8
        ],
        [
          1224.4,
          647.1
        ],
        [
          1224.4,
          626.9
        ]
      ]
    },
    {
      "name": "Jalan Laut Maluku",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1235.5,
          597.9
        ],
        [
          1283.2,
          598.8
        ]
      ]
    },
    {
      "name": "Jalan Laut Maluku",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1268.2,
          596.8
        ],
        [
          1287.9,
          597.5
        ]
      ]
    },
    {
      "name": "Jalan Laut Sulawesi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1267.2,
          580.7
        ],
        [
          1267.6,
          560
        ]
      ]
    },
    {
      "name": "Jalan Laut Sulawesi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1269.1,
          560
        ],
        [
          1268.1,
          603
        ]
      ]
    },
    {
      "name": "Jalan Lembah Pinang Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1529.6,
          587.2
        ],
        [
          1533.9,
          601.4
        ],
        [
          1547.8,
          611.3
        ]
      ]
    },
    {
      "name": "Jalan Lembah Pinang Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1547.8,
          611.3
        ],
        [
          1561.6,
          620.7
        ],
        [
          1568.7,
          621.2
        ]
      ]
    },
    {
      "name": "Jalan Lidi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1543.2,
          715.6
        ],
        [
          1543.1,
          703
        ],
        [
          1548,
          701.4
        ]
      ]
    },
    {
      "name": "Jalan Lidi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1543.2,
          715.6
        ],
        [
          1545.1,
          734.4
        ],
        [
          1553.2,
          752.6
        ]
      ]
    },
    {
      "name": "Jalan Manggar I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1442.3,
          631.4
        ],
        [
          1471.2,
          633.1
        ]
      ]
    },
    {
      "name": "Jalan Manggar I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1471.2,
          634.6
        ],
        [
          1442,
          632.6
        ]
      ]
    },
    {
      "name": "Jalan Manggar I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1597.9,
          748.2
        ],
        [
          1592.7,
          732.7
        ]
      ]
    },
    {
      "name": "Jalan Manunggal I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1328.1,
          763
        ],
        [
          1346,
          761.5
        ]
      ]
    },
    {
      "name": "Jalan Manunggal I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1346,
          761.5
        ],
        [
          1376.7,
          758.5
        ]
      ]
    },
    {
      "name": "Jalan Marinir Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1415.9,
          599.6
        ],
        [
          1429.7,
          570.9
        ]
      ]
    },
    {
      "name": "Jalan Marinir Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1432.2,
          560
        ],
        [
          1431.3,
          571.4
        ],
        [
          1410.8,
          612.7
        ]
      ]
    },
    {
      "name": "Jalan Marna Putra Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1543.4,
          931.1
        ],
        [
          1532.1,
          960
        ]
      ]
    },
    {
      "name": "Jalan Masjid Al Ihsan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1767.6,
          923.2
        ],
        [
          1747.8,
          913.7
        ],
        [
          1718.6,
          906.3
        ]
      ]
    },
    {
      "name": "Jalan Masjid Jami' Al Wustho",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1161.8,
          714.8
        ],
        [
          1222.4,
          717
        ]
      ]
    },
    {
      "name": "Jalan Masjid Jami' Al Wustho",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1222.4,
          717
        ],
        [
          1245.6,
          718.2
        ]
      ]
    },
    {
      "name": "Jalan Masjid Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1440.3,
          954.9
        ],
        [
          1442.5,
          920.4
        ]
      ]
    },
    {
      "name": "Jalan Mayang II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1402.5,
          678.1
        ],
        [
          1432.3,
          679.9
        ]
      ]
    },
    {
      "name": "Jalan Mayang II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1432.3,
          679.9
        ],
        [
          1451.5,
          680.7
        ]
      ]
    },
    {
      "name": "Jalan Mayang Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1410.3,
          628.9
        ],
        [
          1442.3,
          631.4
        ]
      ]
    },
    {
      "name": "Jalan Mayang Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1442,
          632.6
        ],
        [
          1410.3,
          630.6
        ]
      ]
    },
    {
      "name": "Jalan Meriam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1276.5,
          789.1
        ],
        [
          1275.9,
          828.3
        ]
      ]
    },
    {
      "name": "Jalan Meriam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1276.7,
          767.5
        ],
        [
          1276.5,
          789.1
        ]
      ]
    },
    {
      "name": "Jalan Mesjid 1A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1423,
          953.6
        ],
        [
          1439.2,
          953.5
        ]
      ]
    },
    {
      "name": "Jalan Mesjid 1A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1424.5,
          919.4
        ],
        [
          1423,
          953.6
        ]
      ]
    },
    {
      "name": "Jalan Nyiur 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1410.8,
          612.7
        ],
        [
          1471.9,
          616.8
        ]
      ]
    },
    {
      "name": "Jalan Padang Golf Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1563.9,
          881.9
        ],
        [
          1523.8,
          884.1
        ]
      ]
    },
    {
      "name": "Jalan Padang Golf Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1564,
          866.9
        ],
        [
          1563.9,
          881.9
        ]
      ]
    },
    {
      "name": "Jalan Padat Karya III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1632.5,
          598.3
        ],
        [
          1653.8,
          597.3
        ]
      ]
    },
    {
      "name": "Jalan Padat Karya III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1638.7,
          588.4
        ],
        [
          1613,
          583.7
        ],
        [
          1612.9,
          581.1
        ]
      ]
    },
    {
      "name": "Jalan Pahlawan Revolusi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1074.1,
          612.6
        ],
        [
          1037.4,
          560
        ]
      ]
    },
    {
      "name": "Jalan Pahlawan Revolusi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1096.1,
          650.2
        ],
        [
          1074.1,
          612.6
        ]
      ]
    },
    {
      "name": "Jalan Pahlawan Revolusi",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1151.8,
          713.3
        ],
        [
          1125.3,
          698.2
        ],
        [
          1106.2,
          666.5
        ]
      ]
    },
    {
      "name": "Jalan Palem Indah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1620,
          727.1
        ],
        [
          1625.5,
          722.6
        ],
        [
          1614.8,
          692.9
        ]
      ]
    },
    {
      "name": "Jalan Palem Indah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1622.9,
          693.7
        ],
        [
          1607.1,
          692
        ]
      ]
    },
    {
      "name": "Jalan Pangkalan Jati II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1158.5,
          746.4
        ],
        [
          1159.4,
          764.6
        ]
      ]
    },
    {
      "name": "Jalan Pangkalan Jati II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1159.4,
          764.6
        ],
        [
          1184.2,
          762.9
        ]
      ]
    },
    {
      "name": "Jalan Pangkalan Jati II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1184.2,
          762.9
        ],
        [
          1187.6,
          770.9
        ],
        [
          1205.3,
          768.8
        ]
      ]
    },
    {
      "name": "Jalan Pangkalan Jati III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1206,
          777.8
        ],
        [
          1158.6,
          780.9
        ]
      ]
    },
    {
      "name": "Jalan Pangkalan Jati VI A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1173.2,
          846.9
        ],
        [
          1209.7,
          860.5
        ],
        [
          1215.4,
          860.5
        ],
        [
          1220.6,
          856.1
        ]
      ]
    },
    {
      "name": "Jalan Pangrango",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1468.9,
          943.7
        ],
        [
          1491.5,
          944
        ]
      ]
    },
    {
      "name": "Jalan Pangrango",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1492.3,
          944
        ],
        [
          1505.5,
          947.8
        ],
        [
          1527.3,
          960
        ]
      ]
    },
    {
      "name": "Jalan Peralatan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1276.6,
          795.8
        ],
        [
          1333.2,
          793
        ]
      ]
    },
    {
      "name": "Jalan Persada Golf Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1549.4,
          866.9
        ],
        [
          1523.1,
          866.1
        ]
      ]
    },
    {
      "name": "Jalan Persada Golf Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1590.9,
          875.5
        ],
        [
          1576.3,
          866.7
        ],
        [
          1566.9,
          867
        ]
      ]
    },
    {
      "name": "Jalan Persada Golf Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1610.8,
          874.6
        ],
        [
          1590.9,
          875.5
        ]
      ]
    },
    {
      "name": "Jalan Persada Golf Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1652.8,
          876.6
        ],
        [
          1617.8,
          879.3
        ],
        [
          1610.8,
          874.6
        ]
      ]
    },
    {
      "name": "Jalan Pomad",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1276.2,
          805.5
        ],
        [
          1325.8,
          802.8
        ]
      ]
    },
    {
      "name": "Jalan Poncol Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1149.9,
          712.4
        ],
        [
          1151.9,
          692.2
        ]
      ]
    },
    {
      "name": "Jalan Poncol Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1155.6,
          692
        ],
        [
          1155,
          653.9
        ]
      ]
    },
    {
      "name": "Jalan Pondok Bambu Batas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1036.9,
          663.7
        ],
        [
          1093.1,
          660.2
        ]
      ]
    },
    {
      "name": "Jalan Pondok Kelapa Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1549.8,
          630.2
        ],
        [
          1552.5,
          651.8
        ],
        [
          1547,
          679.4
        ],
        [
          1548,
          701.4
        ],
        [
          1565.3,
          752.6
        ],
        [
          1564.8,
          762.1
        ]
      ]
    },
    {
      "name": "Jalan Pondok Kelapa I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1587.1,
          758.1
        ],
        [
          1565.7,
          754.6
        ]
      ]
    },
    {
      "name": "Jalan Pondok Kelapa I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1605.1,
          683.3
        ],
        [
          1644.5,
          684.3
        ]
      ]
    },
    {
      "name": "Jalan Pondok Kelapa Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1572.8,
          560
        ],
        [
          1568.7,
          622.1
        ]
      ]
    },
    {
      "name": "Jalan Pondok Kelapa Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1570.9,
          652.5
        ],
        [
          1582,
          652.4
        ],
        [
          1586.5,
          655.4
        ]
      ]
    },
    {
      "name": "Jalan Pondok Kelapa Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1576.9,
          647.6
        ],
        [
          1590.8,
          653.3
        ]
      ]
    },
    {
      "name": "Jalan Pondok Kelapa Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1586.5,
          655.4
        ],
        [
          1590.8,
          661.7
        ],
        [
          1595.8,
          683.1
        ]
      ]
    },
    {
      "name": "Jalan Pondok Kelapa Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1601,
          708.4
        ],
        [
          1615.3,
          728.7
        ]
      ]
    },
    {
      "name": "Jalan Pondok Kelapa Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1617.3,
          731.2
        ],
        [
          1636.3,
          752.7
        ],
        [
          1638.8,
          766.8
        ]
      ]
    },
    {
      "name": "Jalan Pondok Kelapa Timur Dalam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1590.8,
          653.3
        ],
        [
          1599.9,
          670.9
        ],
        [
          1600.7,
          683.3
        ]
      ]
    },
    {
      "name": "Jalan Pondok Kelapa Timur Dalam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1605.9,
          706.3
        ],
        [
          1614.9,
          719.6
        ]
      ]
    },
    {
      "name": "Jalan Pratama",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1407.5,
          810.9
        ],
        [
          1410.5,
          806.3
        ],
        [
          1416.4,
          804.8
        ],
        [
          1417.1,
          795.4
        ],
        [
          1424.8,
          794.8
        ]
      ]
    },
    {
      "name": "Jalan Pratama",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1424.9,
          810.4
        ],
        [
          1425.5,
          781.5
        ]
      ]
    },
    {
      "name": "Jalan Radar Selatan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1227.5,
          893.5
        ],
        [
          1161.8,
          924.3
        ]
      ]
    },
    {
      "name": "Jalan Radar Utara",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1194.6,
          905.7
        ],
        [
          1175.4,
          914.8
        ]
      ]
    },
    {
      "name": "Jalan Radar Utara",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1221.1,
          893.5
        ],
        [
          1194.6,
          905.7
        ]
      ]
    },
    {
      "name": "Jalan Radin Inten II",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1364.9,
          744.7
        ],
        [
          1363.5,
          715.3
        ],
        [
          1367.8,
          691.4
        ],
        [
          1397.3,
          621.4
        ]
      ]
    },
    {
      "name": "Jalan Radin Inten II",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1398.6,
          621.8
        ],
        [
          1369.3,
          691.4
        ],
        [
          1364.8,
          716.3
        ],
        [
          1366.4,
          744.6
        ]
      ]
    },
    {
      "name": "Jalan Radin Inten II",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1399.2,
          613.7
        ],
        [
          1407.2,
          560
        ]
      ]
    },
    {
      "name": "Jalan Radin Inten II",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1408.6,
          560
        ],
        [
          1400.4,
          614.1
        ]
      ]
    },
    {
      "name": "Jalan Raflesia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1795.7,
          902.9
        ],
        [
          1782,
          948.6
        ]
      ]
    },
    {
      "name": "Jalan Rambutan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1502.7,
          824.4
        ],
        [
          1531.8,
          833.8
        ],
        [
          1564.6,
          833.5
        ]
      ]
    },
    {
      "name": "Jalan Rawa Domba",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1245.6,
          718.2
        ],
        [
          1338.1,
          725.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Jatibeningsatu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1468.9,
          943.7
        ],
        [
          1468.9,
          926.1
        ]
      ]
    },
    {
      "name": "Jalan Raya Kalimalang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1456.1,
          759.8
        ],
        [
          1415.4,
          755.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Kalimalang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1488.3,
          761.8
        ],
        [
          1464.6,
          760.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Kalimalang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1504,
          762.7
        ],
        [
          1488.3,
          761.8
        ]
      ]
    },
    {
      "name": "Jalan Raya Kalimalang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1561.6,
          769.6
        ],
        [
          1542.3,
          767.1
        ]
      ]
    },
    {
      "name": "Jalan Raya Kalimalang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1582.5,
          772.3
        ],
        [
          1561.6,
          769.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Kalimalang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1606.1,
          775.2
        ],
        [
          1587,
          772.8
        ]
      ]
    },
    {
      "name": "Jalan Raya Kalimalang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1634.5,
          778.8
        ],
        [
          1606.1,
          775.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Kalimalang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1702.5,
          783.5
        ],
        [
          1657.8,
          780.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Kalimalang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1702.7,
          775.4
        ],
        [
          1728.3,
          776.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Kalimalang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1728.3,
          776.7
        ],
        [
          1800,
          775
        ]
      ]
    },
    {
      "name": "Jalan Raya Kalimalang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1742.8,
          784.7
        ],
        [
          1702.5,
          783.5
        ]
      ]
    },
    {
      "name": "Jalan Raya Kalimalang",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1800,
          782.9
        ],
        [
          1742.8,
          784.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Kemang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1451,
          901.5
        ],
        [
          1443.9,
          901.7
        ],
        [
          1438.7,
          906.6
        ],
        [
          1435.5,
          920.1
        ]
      ]
    },
    {
      "name": "Jalan Raya Permata Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1399.3,
          848
        ],
        [
          1395.6,
          829.5
        ]
      ]
    },
    {
      "name": "Jalan Raya Permata Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1402.1,
          884.6
        ],
        [
          1399.3,
          848
        ]
      ]
    },
    {
      "name": "Jalan Raya Pondok Kelapa",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1569.8,
          642.3
        ],
        [
          1570.9,
          689.9
        ],
        [
          1588.7,
          759.8
        ]
      ]
    },
    {
      "name": "Jalan Raya Pondok Kelapa Selatan",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          1590.4,
          824.7
        ],
        [
          1593.4,
          797.7
        ],
        [
          1585.3,
          789.4
        ],
        [
          1587,
          772.8
        ]
      ]
    },
    {
      "name": "Jalan Raya Pondok Kopi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1695.7,
          590.4
        ],
        [
          1695.4,
          560
        ]
      ]
    },
    {
      "name": "Jalan Sapphire Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1759.4,
          605.8
        ],
        [
          1759.5,
          565.9
        ]
      ]
    },
    {
      "name": "Jalan Sapphire Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1760.6,
          624.8
        ],
        [
          1759.4,
          605.8
        ]
      ]
    },
    {
      "name": "Jalan Selat Bali",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1296.2,
          639
        ],
        [
          1297.3,
          583
        ]
      ]
    },
    {
      "name": "Jalan Selat Karimata",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1268.7,
          582.5
        ],
        [
          1297.3,
          583
        ]
      ]
    },
    {
      "name": "Jalan Selat Karimata",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1297.3,
          583
        ],
        [
          1322.2,
          584.1
        ]
      ]
    },
    {
      "name": "Jalan Selat Makasar",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1296.2,
          639
        ],
        [
          1234.4,
          638
        ]
      ]
    },
    {
      "name": "Jalan Selat Makasar",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1334.3,
          639.8
        ],
        [
          1296.2,
          639
        ]
      ]
    },
    {
      "name": "Jalan Selat Sapudi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1311.1,
          583.1
        ],
        [
          1310.6,
          607.9
        ]
      ]
    },
    {
      "name": "Jalan Selat Sapudi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1311.5,
          560
        ],
        [
          1311.1,
          583.1
        ]
      ]
    },
    {
      "name": "Jalan Selat Sunda",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1287.2,
          637.8
        ],
        [
          1287.8,
          601.8
        ]
      ]
    },
    {
      "name": "Jalan Selat Sunda",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1287.8,
          601.8
        ],
        [
          1288.1,
          582.8
        ]
      ]
    },
    {
      "name": "Jalan Seulawah Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1206.9,
          767
        ],
        [
          1230.2,
          763
        ]
      ]
    },
    {
      "name": "Jalan Seulawah Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1230.2,
          763
        ],
        [
          1249.7,
          762.4
        ],
        [
          1276.3,
          767.4
        ]
      ]
    },
    {
      "name": "Jalan Siaga",
      "type": "residential",
      "width": 10,
      "points": [
        [
          982.6,
          819.8
        ],
        [
          966.7,
          768.1
        ]
      ]
    },
    {
      "name": "Jalan SMP 135",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1187.6,
          655
        ],
        [
          1189.2,
          687.4
        ],
        [
          1195.4,
          690.3
        ]
      ]
    },
    {
      "name": "Jalan SMP 135",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1197.5,
          697.7
        ],
        [
          1227.2,
          702.1
        ]
      ]
    },
    {
      "name": "Jalan Straudaga",
      "type": "residential",
      "width": 10,
      "points": [
        [
          960,
          723.5
        ],
        [
          968.3,
          753.1
        ]
      ]
    },
    {
      "name": "Jalan Straudaga",
      "type": "residential",
      "width": 10,
      "points": [
        [
          971.4,
          716.8
        ],
        [
          976.3,
          734.5
        ]
      ]
    },
    {
      "name": "Jalan Straudaga",
      "type": "residential",
      "width": 10,
      "points": [
        [
          976.3,
          734.5
        ],
        [
          980.6,
          749.7
        ]
      ]
    },
    {
      "name": "Jalan Swadaya Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1319.2,
          568.6
        ],
        [
          1322.2,
          584.1
        ]
      ]
    },
    {
      "name": "Jalan Swadaya Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1322.2,
          584.1
        ],
        [
          1336.6,
          590.7
        ],
        [
          1339.2,
          594.9
        ],
        [
          1366.8,
          597.7
        ]
      ]
    },
    {
      "name": "Jalan Swadaya Raya",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          1327.8,
          712.4
        ],
        [
          1337.6,
          650.9
        ],
        [
          1342.2,
          639.8
        ]
      ]
    },
    {
      "name": "Jalan Swadaya Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1334.7,
          750.8
        ],
        [
          1338.1,
          725.9
        ]
      ]
    },
    {
      "name": "Jalan Swadaya Raya",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          1350.2,
          612.2
        ],
        [
          1350,
          639.6
        ]
      ]
    },
    {
      "name": "Jalan Swadaya Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1355.8,
          866.3
        ],
        [
          1354.3,
          834.8
        ]
      ]
    },
    {
      "name": "Jalan Swadaya Raya",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          1366.8,
          597.7
        ],
        [
          1364.3,
          612.9
        ]
      ]
    },
    {
      "name": "Jalan Swakarsa I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1682.5,
          744
        ],
        [
          1658.6,
          741.9
        ],
        [
          1656.2,
          771.2
        ]
      ]
    },
    {
      "name": "Jalan Taman Duren Sawit",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1248.6,
          694.1
        ],
        [
          1278.7,
          706.6
        ]
      ]
    },
    {
      "name": "Jalan Taman Duren Sawit",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1256.7,
          690.7
        ],
        [
          1278.6,
          692.6
        ]
      ]
    },
    {
      "name": "Jalan Taman Duren Sawit",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1256.8,
          678.1
        ],
        [
          1274.6,
          678.5
        ]
      ]
    },
    {
      "name": "Jalan Taman Duren Sawit",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1258.7,
          673.6
        ],
        [
          1259.9,
          663.6
        ],
        [
          1269.4,
          663.7
        ]
      ]
    },
    {
      "name": "Jalan Taman Duren Sawit",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1263.6,
          703.3
        ],
        [
          1268.3,
          692.5
        ],
        [
          1269.1,
          672.7
        ]
      ]
    },
    {
      "name": "Jalan Taman Duren Sawit",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1269.1,
          672.7
        ],
        [
          1269.6,
          657.7
        ]
      ]
    },
    {
      "name": "Jalan Taman Duren Sawit",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1278.5,
          657.8
        ],
        [
          1275,
          672.8
        ]
      ]
    },
    {
      "name": "Jalan Taman Duren Sawit",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1278.6,
          720.3
        ],
        [
          1278.6,
          686.2
        ]
      ]
    },
    {
      "name": "Jalan Taman Duren Sawit",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1296.6,
          677.1
        ],
        [
          1297,
          650.6
        ]
      ]
    },
    {
      "name": "Jalan Taman Duren Sawit",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1298.2,
          658.4
        ],
        [
          1297.9,
          677.2
        ]
      ]
    },
    {
      "name": "Jalan Taman Duren Sawit",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1314.4,
          658.6
        ],
        [
          1278.5,
          657.8
        ]
      ]
    },
    {
      "name": "Jalan Taruna",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1063.1,
          597.2
        ],
        [
          1026.7,
          631.7
        ],
        [
          1015.5,
          629
        ]
      ]
    },
    {
      "name": "Jalan Teluk Mandar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1224.4,
          626.9
        ],
        [
          1195.5,
          625.9
        ]
      ]
    },
    {
      "name": "Jalan Teluk Semangka",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1234.6,
          627.2
        ],
        [
          1235.5,
          596.4
        ]
      ]
    },
    {
      "name": "Jalan Teluk Semangka",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1235.5,
          596.4
        ],
        [
          1236.2,
          560
        ]
      ]
    },
    {
      "name": "Jalan Teluk Tomini",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1214.6,
          624.8
        ],
        [
          1214.9,
          605.2
        ]
      ]
    },
    {
      "name": "Jalan Teluk Tomini",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1216.3,
          625.4
        ],
        [
          1216.6,
          598.5
        ]
      ]
    },
    {
      "name": "Jalan Teluk Tomini",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1216.6,
          598.5
        ],
        [
          1217,
          560
        ]
      ]
    },
    {
      "name": "Jalan Utama Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1060.3,
          586.8
        ],
        [
          1113,
          580.8
        ]
      ]
    },
    {
      "name": "Jalan Wadas Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1329.3,
          960
        ],
        [
          1331.8,
          949.6
        ],
        [
          1336.4,
          949.1
        ],
        [
          1338.4,
          941.6
        ],
        [
          1342,
          909.1
        ]
      ]
    },
    {
      "name": "Jalan Wira Bakti",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1216.4,
          767.3
        ],
        [
          1226.8,
          815.8
        ]
      ]
    },
    {
      "name": "Jalan Wira Jati Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1257.5,
          786.5
        ],
        [
          1255.2,
          845
        ]
      ]
    },
    {
      "name": "Jalan Wiradarma Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1248.5,
          808.9
        ],
        [
          1249.3,
          778
        ]
      ]
    },
    {
      "name": "Jalan Wiradarma Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1249.3,
          778
        ],
        [
          1249.7,
          762.4
        ]
      ]
    },
    {
      "name": "Jalan Wiradarma Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1251.1,
          778.2
        ],
        [
          1250.2,
          808.7
        ]
      ]
    },
    {
      "name": "Jalan Wiradarma Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1251.5,
          762.7
        ],
        [
          1251.1,
          778.2
        ]
      ]
    },
    {
      "name": "Jalan Zeni",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1276.6,
          785.8
        ],
        [
          1332.2,
          783.3
        ]
      ]
    },
    {
      "name": "Komplek Dolog Jaya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1305.1,
          730.1
        ],
        [
          1330.1,
          731.3
        ]
      ]
    },
    {
      "name": "Komplek Dolog Jaya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1305.2,
          750.6
        ],
        [
          1305.1,
          730.1
        ]
      ]
    },
    {
      "name": "Komplek Dolog Jaya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1317.5,
          730.6
        ],
        [
          1317,
          736
        ],
        [
          1311.1,
          736.1
        ],
        [
          1310.7,
          730.1
        ]
      ]
    }
  ],
  "waterways": [
    {
      "name": "Kali Sunter",
      "kind": "river",
      "width": 14,
      "points": [
        [
          1160,
          928.1
        ],
        [
          1162,
          919.2
        ],
        [
          1174.6,
          910.8
        ],
        [
          1169.7,
          904.6
        ],
        [
          1160.6,
          903.5
        ],
        [
          1157.7,
          891.8
        ],
        [
          1160.8,
          887.4
        ],
        [
          1172.1,
          883.9
        ],
        [
          1173.3,
          879.4
        ],
        [
          1164.9,
          870.6
        ],
        [
          1160.6,
          876.9
        ],
        [
          1147.7,
          881.5
        ],
        [
          1141.4,
          877.9
        ],
        [
          1139.7,
          867.3
        ],
        [
          1144.9,
          861.5
        ],
        [
          1129.5,
          841.8
        ],
        [
          1133.2,
          824.4
        ],
        [
          1110.5,
          799.3
        ],
        [
          1093.2,
          773.7
        ],
        [
          1093.7,
          762.1
        ],
        [
          1087.6,
          754.7
        ],
        [
          1080.3,
          728.1
        ],
        [
          1029.9,
          700.1
        ],
        [
          989.5,
          685.1
        ],
        [
          990.2,
          670.4
        ],
        [
          995.9,
          666.8
        ],
        [
          990.1,
          663.7
        ],
        [
          990.8,
          647.6
        ],
        [
          976.2,
          643.4
        ],
        [
          975.3,
          631.9
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1641.6,
          755.1
        ],
        [
          1639.6,
          749.4
        ],
        [
          1618.1,
          725.7
        ],
        [
          1609,
          706
        ],
        [
          1602.6,
          683.6
        ],
        [
          1605.3,
          663.5
        ],
        [
          1601.2,
          654
        ],
        [
          1585.3,
          643
        ],
        [
          1566.3,
          640.1
        ],
        [
          1562.8,
          626.4
        ],
        [
          1542,
          612.5
        ],
        [
          1529.1,
          613.7
        ],
        [
          1524.3,
          611.2
        ],
        [
          1519.4,
          560
        ]
      ]
    },
    {
      "name": "",
      "kind": "river",
      "width": 8,
      "points": [
        [
          972.5,
          631.7
        ],
        [
          977.3,
          617.2
        ],
        [
          983.4,
          611
        ],
        [
          981.9,
          605.6
        ],
        [
          975.8,
          602.7
        ],
        [
          976.3,
          597.4
        ],
        [
          986.8,
          584.4
        ],
        [
          984.1,
          578.1
        ],
        [
          986.8,
          573.5
        ],
        [
          982.7,
          570.4
        ],
        [
          973.8,
          578.5
        ],
        [
          970.8,
          566.5
        ],
        [
          973,
          560
        ]
      ]
    },
    {
      "name": "Buaran",
      "kind": "river",
      "width": 10,
      "points": [
        [
          1399.6,
          892.4
        ],
        [
          1399.4,
          856
        ],
        [
          1393.6,
          828.6
        ],
        [
          1389.7,
          825.6
        ],
        [
          1393,
          819.1
        ],
        [
          1387.3,
          805.8
        ],
        [
          1391,
          804.5
        ],
        [
          1391.2,
          799.3
        ],
        [
          1381.4,
          791.8
        ],
        [
          1384.3,
          782.3
        ],
        [
          1379.1,
          770.1
        ],
        [
          1382.5,
          754.7
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1544.7,
          758
        ],
        [
          1535.2,
          732.4
        ],
        [
          1539.4,
          722.1
        ],
        [
          1540.4,
          701.9
        ],
        [
          1536.1,
          687.2
        ],
        [
          1539.7,
          680
        ],
        [
          1537.2,
          668.5
        ],
        [
          1540.8,
          664.8
        ],
        [
          1540.6,
          656.6
        ],
        [
          1536.8,
          638.5
        ],
        [
          1524.3,
          611.2
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1565.8,
          831.6
        ],
        [
          1554.5,
          832.8
        ],
        [
          1552.6,
          822.7
        ],
        [
          1542.7,
          814.4
        ],
        [
          1529.1,
          813.8
        ],
        [
          1522.8,
          822.4
        ],
        [
          1518.6,
          821.9
        ],
        [
          1517.3,
          810.4
        ],
        [
          1525.6,
          795.9
        ],
        [
          1532.8,
          772
        ]
      ]
    },
    {
      "name": "Buaran",
      "kind": "river",
      "width": 10,
      "points": [
        [
          1381.7,
          745.6
        ],
        [
          1368.9,
          705.4
        ],
        [
          1375.1,
          689.6
        ],
        [
          1384.8,
          681.6
        ],
        [
          1389.8,
          661.9
        ],
        [
          1400.6,
          652
        ],
        [
          1397.5,
          640
        ],
        [
          1406,
          613.4
        ],
        [
          1408.4,
          594
        ],
        [
          1420.8,
          560
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1710,
          960
        ],
        [
          1699.1,
          953.8
        ],
        [
          1691.1,
          939
        ],
        [
          1675.7,
          927.9
        ],
        [
          1640.5,
          917.7
        ],
        [
          1608.1,
          927
        ],
        [
          1600.2,
          903.2
        ],
        [
          1606.6,
          890
        ],
        [
          1601.6,
          882
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1382.2,
          787.8
        ],
        [
          1369.8,
          785.3
        ],
        [
          1356.8,
          787.8
        ],
        [
          1357.2,
          797.1
        ],
        [
          1341.1,
          802.5
        ],
        [
          1333.2,
          816.3
        ],
        [
          1313.7,
          817.2
        ]
      ]
    },
    {
      "name": "Kali Malang",
      "kind": "river",
      "width": 14,
      "points": [
        [
          1800,
          778.7
        ],
        [
          1731,
          780.8
        ],
        [
          1674.5,
          776.9
        ],
        [
          1401.4,
          750
        ],
        [
          1276.5,
          756.7
        ],
        [
          1173.1,
          731.1
        ],
        [
          1105.5,
          706.7
        ]
      ]
    },
    {
      "name": "",
      "kind": "river",
      "width": 8,
      "points": [
        [
          1601.6,
          882
        ],
        [
          1566.1,
          883.5
        ],
        [
          1565.8,
          831.6
        ],
        [
          1571.5,
          798.2
        ],
        [
          1563,
          786.1
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1784.5,
          960
        ],
        [
          1795.1,
          952.7
        ],
        [
          1799.5,
          933.2
        ],
        [
          1800,
          903.3
        ],
        [
          1791.7,
          899.4
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1780.8,
          874.1
        ],
        [
          1779.9,
          864.1
        ],
        [
          1770.9,
          845.9
        ],
        [
          1773.2,
          840.1
        ],
        [
          1784.3,
          832.8
        ]
      ]
    },
    {
      "name": "Kali Malang",
      "kind": "canal",
      "width": 14,
      "points": [
        [
          1105.5,
          706.7
        ],
        [
          1067.1,
          692.2
        ],
        [
          998.9,
          636.8
        ],
        [
          967.2,
          631.6
        ]
      ]
    },
    {
      "name": "Kali Sunter",
      "kind": "river",
      "width": 14,
      "points": [
        [
          1154.5,
          960
        ],
        [
          1146.4,
          951.9
        ],
        [
          1160,
          928.1
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1789.6,
          895.7
        ],
        [
          1786.1,
          892.8
        ],
        [
          1784.8,
          883.9
        ]
      ]
    },
    {
      "name": "Buaran",
      "kind": "river",
      "width": 10,
      "points": [
        [
          1382.5,
          754.7
        ],
        [
          1381.7,
          745.6
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1640.1,
          768.5
        ],
        [
          1639.7,
          759.2
        ]
      ]
    },
    {
      "name": "Buaran",
      "kind": "river",
      "width": 10,
      "points": [
        [
          1389.1,
          960
        ],
        [
          1397.1,
          903.7
        ]
      ]
    },
    {
      "name": "Buaran",
      "kind": "river",
      "width": 10,
      "points": [
        [
          1397.1,
          903.7
        ],
        [
          1399.6,
          892.4
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1785.8,
          830.2
        ],
        [
          1800,
          794.7
        ]
      ]
    },
    {
      "name": "",
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1784.8,
          883.9
        ],
        [
          1780.8,
          874.1
        ]
      ]
    }
  ],
  "waterBodies": [
    {
      "name": "",
      "points": [
        [
          1089,
          757
        ],
        [
          1093.3,
          765.5
        ],
        [
          1092.4,
          774.7
        ],
        [
          1109.4,
          800.4
        ],
        [
          1132.3,
          825.9
        ],
        [
          1127.9,
          842.1
        ],
        [
          1143,
          861.7
        ],
        [
          1137.9,
          870
        ],
        [
          1141.7,
          879.9
        ],
        [
          1148.1,
          882.5
        ],
        [
          1161,
          877.9
        ],
        [
          1163.8,
          873.3
        ],
        [
          1171.8,
          879.2
        ],
        [
          1170.7,
          883.9
        ],
        [
          1156.1,
          890.8
        ],
        [
          1160.7,
          905.2
        ],
        [
          1168.1,
          905.4
        ],
        [
          1172.5,
          910.3
        ],
        [
          1161.2,
          919.3
        ],
        [
          1158.6,
          930.4
        ],
        [
          1145.2,
          951.4
        ],
        [
          1155.9,
          960
        ],
        [
          1148.1,
          950.7
        ],
        [
          1160.4,
          931
        ],
        [
          1161.9,
          921.1
        ],
        [
          1175.6,
          910.2
        ],
        [
          1171.1,
          903.8
        ],
        [
          1162.5,
          904.4
        ],
        [
          1159,
          892.8
        ],
        [
          1160.9,
          888.9
        ],
        [
          1171.7,
          885.7
        ],
        [
          1174,
          879.6
        ],
        [
          1165.7,
          869.4
        ],
        [
          1158.7,
          876.9
        ],
        [
          1147.8,
          880.4
        ],
        [
          1141.9,
          877.4
        ],
        [
          1140.1,
          868.8
        ],
        [
          1145.2,
          860.1
        ],
        [
          1130.7,
          841.7
        ],
        [
          1134.3,
          823.9
        ],
        [
          1120.3,
          810
        ],
        [
          1095.3,
          774.5
        ],
        [
          1094,
          758.9
        ],
        [
          1089,
          757
        ]
      ]
    },
    {
      "name": "",
      "points": [
        [
          975.7,
          633.5
        ],
        [
          977.6,
          642.9
        ],
        [
          990.7,
          646.4
        ],
        [
          990.8,
          663.6
        ],
        [
          996.5,
          667.7
        ],
        [
          991,
          670.8
        ],
        [
          993.1,
          678
        ],
        [
          988.8,
          674.6
        ],
        [
          989.4,
          670.2
        ],
        [
          995.2,
          667.3
        ],
        [
          989.3,
          664
        ],
        [
          989.8,
          648
        ],
        [
          976,
          643.8
        ],
        [
          975.7,
          633.5
        ]
      ]
    },
    {
      "name": "",
      "points": [
        [
          1091.3,
          756.8
        ],
        [
          1081,
          726.4
        ],
        [
          1020.5,
          694.3
        ],
        [
          990.7,
          684.5
        ],
        [
          993.1,
          678
        ],
        [
          988,
          680.4
        ],
        [
          990,
          687.1
        ],
        [
          1017.5,
          695.6
        ],
        [
          1077.9,
          727.1
        ],
        [
          1086.9,
          754.9
        ],
        [
          1091.3,
          756.8
        ]
      ]
    },
    {
      "name": "",
      "points": [
        [
          960,
          632.2
        ],
        [
          982.2,
          633.5
        ],
        [
          999.1,
          638.3
        ],
        [
          1063.9,
          690.8
        ],
        [
          1131.8,
          717.7
        ],
        [
          1072.5,
          693.6
        ],
        [
          998,
          635.7
        ],
        [
          981.8,
          631.5
        ],
        [
          960,
          630.1
        ],
        [
          960,
          632.2
        ]
      ]
    },
    {
      "name": "",
      "points": [
        [
          1091.3,
          756.8
        ],
        [
          1099.4,
          761.2
        ],
        [
          1098.4,
          772.1
        ],
        [
          1105.6,
          775.4
        ],
        [
          1108.2,
          785
        ],
        [
          1109.1,
          774.9
        ],
        [
          1101.5,
          771.4
        ],
        [
          1101.4,
          759.9
        ],
        [
          1091.3,
          756.8
        ]
      ]
    },
    {
      "name": "",
      "points": [
        [
          1378.7,
          748.6
        ],
        [
          1378.5,
          751.2
        ],
        [
          1365,
          752.4
        ],
        [
          1268.8,
          757.3
        ],
        [
          1178.3,
          734.1
        ],
        [
          1131.8,
          717.7
        ],
        [
          1276.5,
          754.9
        ],
        [
          1378.7,
          748.6
        ]
      ]
    }
  ]
};
