/**
 * Void E (Cilincing-Marunda-Rorotan-KBN Cakung) road and water geometry derived from OpenStreetMap.
 * Source: OpenStreetMap contributors, ODbL. Retrieved 2026-10-29 via the Overpass API.
 * Coordinates are stored directly in scene units using the unscaled GPS projection:
 *   x = (lng - 106.823048) * 14100
 *   z = (lat + 6.194957) * -14180
 * Unscaled keeps the six Void E anchors aligned with their real GPS positions.
 * Toll motorways, untagged service lanes, and micro drains are excluded to keep the
 * dataset focused on the public street network and the Cakung Drain water system.
 */
export const VOID_E_OSM = {
  "meta": {
    "source": "OpenStreetMap contributors (ODbL)",
    "license": "ODbL 1.0",
    "retrieved": "2026-10-29",
    "api": "https://overpass.openstreetmap.fr/api/interpreter (base snapshot 2026-08-10)",
    "bbox": {
      "south": -6.163,
      "west": 106.915,
      "north": -6.079,
      "east": 106.988
    },
    "clipBox": {
      "minX": 1330,
      "maxX": 2300,
      "minZ": -1620,
      "maxZ": -470
    },
    "projection": "projectGpsToScene",
    "projectionConstants": {
      "originLng": 106.823048,
      "originLat": -6.194957,
      "scaleX": 14100,
      "scaleZ": 14180
    },
    "simplification": 2,
    "roadCount": 148,
    "roadPointCount": 640,
    "waterwayCount": 23,
    "waterPointCount": 252,
    "note": "Trunk Cakung Cilincing, arteri Cilincing-Marunda, koridor kampung terpilih, dan tata air Cakung Drain-Kanal Banjir Timur-Blencong. Jalan tol, gang kecil tak terpilih, drainase mikro, dan jalur inspeksi yang menumpang badan kanal dikecualikan. Rusunawa Nagrak akan dilayani konektor akses pada tahap builder (jalan OSM terdekat 80 unit)."
  },
  "roads": [
    {
      "name": "Gang Salon",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1498.8,
          -554.7
        ],
        [
          1527.8,
          -555.7
        ],
        [
          1533.8,
          -558.5
        ],
        [
          1553,
          -554.9
        ],
        [
          1551.5,
          -600.9
        ]
      ]
    },
    {
      "name": "Jalan Akses Marunda",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1592.3,
          -1193.2
        ],
        [
          1623,
          -1199.5
        ],
        [
          1560.7,
          -1182.8
        ],
        [
          1493.4,
          -1148.3
        ],
        [
          1433.6,
          -1137.7
        ],
        [
          1493.2,
          -1149.7
        ],
        [
          1560,
          -1183.7
        ],
        [
          1589.1,
          -1192.4
        ]
      ]
    },
    {
      "name": "Jalan Babek TNI",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1663.8,
          -525.7
        ],
        [
          1700.4,
          -525.8
        ],
        [
          1720.2,
          -521
        ],
        [
          1820.6,
          -528.2
        ]
      ]
    },
    {
      "name": "Jalan Bali",
      "type": "service",
      "width": 6,
      "points": [
        [
          1432.7,
          -711.5
        ],
        [
          1434,
          -801.4
        ],
        [
          1577.9,
          -799.8
        ],
        [
          1577.9,
          -783.4
        ]
      ]
    },
    {
      "name": "Jalan Batu Tumbuh",
      "type": "living_street",
      "width": 7,
      "points": [
        [
          1342.6,
          -899.6
        ],
        [
          1359.2,
          -890.9
        ],
        [
          1353.7,
          -871.2
        ],
        [
          1330.9,
          -835
        ]
      ]
    },
    {
      "name": "Jalan Bulevar Harapan Indah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2281.8,
          -609.3
        ],
        [
          2270.2,
          -599.8
        ],
        [
          2267.3,
          -578.5
        ],
        [
          2258.1,
          -577.6
        ],
        [
          2266.8,
          -581
        ],
        [
          2269,
          -601.2
        ],
        [
          2280.8,
          -610.9
        ],
        [
          2300,
          -581.9
        ],
        [
          2278.1,
          -606.9
        ],
        [
          2252.4,
          -653.4
        ],
        [
          2277.1,
          -608.5
        ]
      ]
    },
    {
      "name": "Jalan Bulevar Harapan Indah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2254.8,
          -575.8
        ],
        [
          2228.5,
          -576.6
        ],
        [
          2222.9,
          -572.7
        ],
        [
          2220.8,
          -510.2
        ],
        [
          2221.1,
          -573.3
        ],
        [
          2229.1,
          -578.3
        ],
        [
          2254.1,
          -577.6
        ]
      ]
    },
    {
      "name": "Jalan Cakung Cilincing Barat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1590.2,
          -828.3
        ],
        [
          1570.7,
          -833.4
        ],
        [
          1562.5,
          -839.3
        ],
        [
          1559.3,
          -848.1
        ],
        [
          1560.3,
          -866.3
        ],
        [
          1473.2,
          -992.5
        ],
        [
          1457.6,
          -1028.1
        ]
      ]
    },
    {
      "name": "Jalan Cakung Cilincing Barat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1647.4,
          -678.8
        ],
        [
          1645.8,
          -713.2
        ],
        [
          1638.5,
          -751.2
        ],
        [
          1597.6,
          -818.8
        ]
      ]
    },
    {
      "name": "Jalan Cakung Cilincing Timur",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1464.4,
          -1029
        ],
        [
          1478.3,
          -999.1
        ],
        [
          1527.9,
          -927.4
        ],
        [
          1575.1,
          -864
        ],
        [
          1597.8,
          -848.4
        ],
        [
          1603.5,
          -826.4
        ],
        [
          1642.3,
          -759.7
        ],
        [
          1651.1,
          -731.9
        ],
        [
          1654.8,
          -684.6
        ]
      ]
    },
    {
      "name": "Jalan Cakung Cilincing Timur",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1399.7,
          -1233.1
        ],
        [
          1408.9,
          -1220.5
        ],
        [
          1414.9,
          -1201.9
        ],
        [
          1458.9,
          -1047
        ]
      ]
    },
    {
      "name": "Jalan Camar 11",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1354.1,
          -1158.4
        ],
        [
          1350.6,
          -1069.3
        ]
      ]
    },
    {
      "name": "Jalan Cendrawasih",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1412.5,
          -641.6
        ],
        [
          1413.5,
          -565.8
        ]
      ]
    },
    {
      "name": "Jalan Cilincing Bakti",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1554.6,
          -1253.4
        ],
        [
          1570.7,
          -1220.4
        ]
      ]
    },
    {
      "name": "Jalan Cilincing Bakti",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1654.3,
          -1265.6
        ],
        [
          1635.9,
          -1252.4
        ],
        [
          1570.7,
          -1220.4
        ]
      ]
    },
    {
      "name": "Jalan Cilincing Baru",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1460.5,
          -1294.9
        ],
        [
          1463.6,
          -1248.1
        ]
      ]
    },
    {
      "name": "Jalan Cilincing Kelapa",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1529.1,
          -1321.5
        ],
        [
          1537.7,
          -1285.7
        ],
        [
          1542.8,
          -1276.1
        ]
      ]
    },
    {
      "name": "Jalan Cilincing Kesatrian",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1647,
          -1280.9
        ],
        [
          1622.6,
          -1268.4
        ],
        [
          1609.7,
          -1284.2
        ],
        [
          1554.6,
          -1253.4
        ]
      ]
    },
    {
      "name": "Jalan Cilincing Krematorium",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1615.7,
          -1358.3
        ],
        [
          1624.8,
          -1326.6
        ]
      ]
    },
    {
      "name": "Jalan Cilincing Lama I",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1532.7,
          -1307.9
        ],
        [
          1551.8,
          -1312.4
        ],
        [
          1576.5,
          -1327.6
        ],
        [
          1584.1,
          -1317.7
        ],
        [
          1584.2,
          -1323.8
        ],
        [
          1620.5,
          -1340.4
        ]
      ]
    },
    {
      "name": "Jalan Cilincing Pagi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1591.9,
          -1305.5
        ],
        [
          1603.7,
          -1280.8
        ]
      ]
    },
    {
      "name": "Jalan Colorado",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1998.1,
          -506
        ],
        [
          1997.5,
          -550.9
        ],
        [
          1999.5,
          -506
        ]
      ]
    },
    {
      "name": "Jalan Countainer Depot",
      "type": "service",
      "width": 6,
      "points": [
        [
          1798.9,
          -1248.7
        ],
        [
          1798.6,
          -1245.6
        ],
        [
          1815.4,
          -1235.3
        ],
        [
          1815,
          -1218.1
        ],
        [
          1798.2,
          -1218
        ],
        [
          1798.6,
          -1245.6
        ]
      ]
    },
    {
      "name": "Jalan Dewa Kembar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1454,
          -1203.4
        ],
        [
          1441.4,
          -1242.1
        ]
      ]
    },
    {
      "name": "Jalan Drain Kampung Sawah",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1656.8,
          -1250
        ],
        [
          1657.5,
          -637.7
        ],
        [
          1653.7,
          -625
        ],
        [
          1648.3,
          -620.3
        ]
      ]
    },
    {
      "name": "Jalan Gading Griya Lestari",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1346.5,
          -787
        ],
        [
          1350.1,
          -817.9
        ],
        [
          1345.7,
          -765.2
        ],
        [
          1346.5,
          -787
        ]
      ]
    },
    {
      "name": "Jalan Gereja Tugu",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1451.5,
          -949.2
        ],
        [
          1417.7,
          -995.3
        ]
      ]
    },
    {
      "name": "Jalan Green Garden 2",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1774.9,
          -614.4
        ],
        [
          1780,
          -674.6
        ]
      ]
    },
    {
      "name": "Jalan Green Garden 3",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1664.7,
          -681.7
        ],
        [
          1695.2,
          -683.3
        ],
        [
          1813.1,
          -673.5
        ]
      ]
    },
    {
      "name": "Jalan Gresik",
      "type": "service",
      "width": 6,
      "points": [
        [
          1792,
          -1252
        ],
        [
          1836.5,
          -1226.2
        ],
        [
          1842,
          -1210.5
        ],
        [
          1872.8,
          -1222
        ],
        [
          1870.1,
          -1235.2
        ],
        [
          1838.8,
          -1223.2
        ]
      ]
    },
    {
      "name": "Jalan Haji Malik",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1487.9,
          -571
        ],
        [
          1491.6,
          -573.6
        ],
        [
          1523.7,
          -576.2
        ]
      ]
    },
    {
      "name": "Jalan Harapan Indah Bulevar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2138.3,
          -470.6
        ],
        [
          2139.3,
          -498.4
        ],
        [
          2145.6,
          -523.1
        ],
        [
          2159.7,
          -548.1
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1561.1,
          -472.1
        ],
        [
          1630.2,
          -602.7
        ],
        [
          1648.3,
          -620.3
        ],
        [
          1645.3,
          -655.9
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Cakung Drain",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1569.7,
          -471.2
        ],
        [
          1635.2,
          -596.4
        ],
        [
          1649.3,
          -612.7
        ]
      ]
    },
    {
      "name": "Jalan Irian",
      "type": "service",
      "width": 6,
      "points": [
        [
          1618.1,
          -767.5
        ],
        [
          1616.5,
          -782.8
        ],
        [
          1433,
          -785
        ]
      ]
    },
    {
      "name": "Jalan Jayapura",
      "type": "service",
      "width": 6,
      "points": [
        [
          1825.2,
          -1485.7
        ],
        [
          1855.4,
          -1491.5
        ],
        [
          1862.7,
          -1357.4
        ],
        [
          1860.7,
          -1354.1
        ],
        [
          1717,
          -1354.6
        ]
      ]
    },
    {
      "name": "Jalan Jayapura",
      "type": "service",
      "width": 6,
      "points": [
        [
          1854.6,
          -1345
        ],
        [
          1830.8,
          -1318.3
        ],
        [
          1828.8,
          -1303.5
        ],
        [
          1832.9,
          -1295.5
        ]
      ]
    },
    {
      "name": "Jalan Jayapura",
      "type": "service",
      "width": 6,
      "points": [
        [
          1790.4,
          -1355.2
        ],
        [
          1861.6,
          -1355.8
        ]
      ]
    },
    {
      "name": "Jalan Jayapura",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1717,
          -1354.6
        ],
        [
          1692.7,
          -1350.9
        ],
        [
          1669.7,
          -1338.2
        ],
        [
          1638.5,
          -1332.9
        ]
      ]
    },
    {
      "name": "Jalan Jepara",
      "type": "service",
      "width": 6,
      "points": [
        [
          1895,
          -1226.5
        ],
        [
          1890.3,
          -1240.6
        ],
        [
          1850.1,
          -1263.1
        ],
        [
          1805.6,
          -1245
        ]
      ]
    },
    {
      "name": "Jalan Kali Bang Lio",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1615.7,
          -1358.3
        ],
        [
          1596.9,
          -1347.8
        ],
        [
          1529.2,
          -1321.1
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Barat VI",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1380.1,
          -1315.4
        ],
        [
          1379.4,
          -1300.6
        ],
        [
          1437.5,
          -1298.3
        ],
        [
          1460.3,
          -1302.9
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Barat VII",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1399,
          -1263.2
        ],
        [
          1446.8,
          -1273.1
        ],
        [
          1448,
          -1277.8
        ],
        [
          1460.3,
          -1279.5
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Barat VII",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1462.4,
          -1369.3
        ],
        [
          1460.1,
          -1320.2
        ],
        [
          1436.3,
          -1312.9
        ],
        [
          1380.1,
          -1315.4
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur III",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1460,
          -1324.2
        ],
        [
          1474.7,
          -1324.5
        ],
        [
          1524.8,
          -1336.7
        ]
      ]
    },
    {
      "name": "Jalan Kali Baru Timur IV",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1526.3,
          -1331.8
        ],
        [
          1612.3,
          -1370.5
        ]
      ]
    },
    {
      "name": "Jalan Kampung Rawa Malang",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1570.4,
          -977.4
        ],
        [
          1610.5,
          -975
        ],
        [
          1633.7,
          -977.4
        ],
        [
          1634.8,
          -974.9
        ],
        [
          1645.8,
          -976.6
        ],
        [
          1646.7,
          -973.5
        ],
        [
          1654,
          -975.7
        ]
      ]
    },
    {
      "name": "Jalan Kawasan Marunda Center",
      "type": "service",
      "width": 6,
      "points": [
        [
          2193.5,
          -1474
        ],
        [
          2129.5,
          -1474
        ],
        [
          2129.1,
          -1317.1
        ],
        [
          2134.4,
          -1312.5
        ]
      ]
    },
    {
      "name": "Jalan Kawasan Marunda Center",
      "type": "service",
      "width": 6,
      "points": [
        [
          2095.3,
          -1359.8
        ],
        [
          2095.3,
          -1333.4
        ]
      ]
    },
    {
      "name": "Jalan Kawasan Marunda Center",
      "type": "service",
      "width": 6,
      "points": [
        [
          2114,
          -1447.3
        ],
        [
          2245,
          -1447.7
        ],
        [
          2242.4,
          -1486.6
        ],
        [
          2210,
          -1486.7
        ],
        [
          2210,
          -1469.1
        ],
        [
          2226,
          -1468.3
        ],
        [
          2225.7,
          -1447.6
        ],
        [
          2208.5,
          -1450.6
        ],
        [
          2206.9,
          -1447.6
        ]
      ]
    },
    {
      "name": "Jalan Kawasan Marunda Center",
      "type": "service",
      "width": 6,
      "points": [
        [
          2107.1,
          -1359.7
        ],
        [
          2106.9,
          -1334
        ],
        [
          2085,
          -1333.3
        ],
        [
          2083.4,
          -1360
        ],
        [
          2245.6,
          -1359.7
        ],
        [
          2247.5,
          -1506.4
        ],
        [
          2244.6,
          -1359.7
        ]
      ]
    },
    {
      "name": "Jalan Kawasan Marunda Center",
      "type": "service",
      "width": 6,
      "points": [
        [
          2104.3,
          -1419.8
        ],
        [
          2104.7,
          -1384.7
        ],
        [
          2261.1,
          -1386.1
        ],
        [
          2278.9,
          -1396.4
        ],
        [
          2297.4,
          -1395
        ],
        [
          2299.2,
          -1506.5
        ],
        [
          2299.1,
          -1395.2
        ],
        [
          2279,
          -1395
        ],
        [
          2261.2,
          -1384.6
        ],
        [
          2087,
          -1385.8
        ],
        [
          2087.5,
          -1431.4
        ],
        [
          2104.6,
          -1431.3
        ],
        [
          2104.3,
          -1419.8
        ]
      ]
    },
    {
      "name": "Jalan Kawasan Marunda Center",
      "type": "service",
      "width": 6,
      "points": [
        [
          2125.7,
          -1307.1
        ],
        [
          2126.9,
          -1447.5
        ],
        [
          2191.4,
          -1443.9
        ],
        [
          2190.3,
          -1428.8
        ],
        [
          2129.5,
          -1427.9
        ],
        [
          2134.1,
          -1447.5
        ],
        [
          2128.2,
          -1530.4
        ],
        [
          2129.5,
          -1474
        ]
      ]
    },
    {
      "name": "Jalan Kawasan Marunda Center",
      "type": "service",
      "width": 6,
      "points": [
        [
          2131.8,
          -1533.5
        ],
        [
          2154.7,
          -1538
        ],
        [
          2149,
          -1506.1
        ]
      ]
    },
    {
      "name": "Jalan Kawasan Marunda Center",
      "type": "service",
      "width": 6,
      "points": [
        [
          2173.3,
          -1410.9
        ],
        [
          2173,
          -1390.5
        ],
        [
          2152.3,
          -1390.6
        ],
        [
          2152.2,
          -1420.9
        ],
        [
          2172.5,
          -1421.3
        ],
        [
          2173.3,
          -1410.9
        ]
      ]
    },
    {
      "name": "Jalan Kawasan Marunda Center",
      "type": "service",
      "width": 6,
      "points": [
        [
          2244.6,
          -1403.3
        ],
        [
          2198,
          -1403.4
        ]
      ]
    },
    {
      "name": "Jalan Kawasan Marunda Center",
      "type": "service",
      "width": 6,
      "points": [
        [
          2234.2,
          -1347.2
        ],
        [
          2234.3,
          -1342.1
        ],
        [
          2196.7,
          -1342.2
        ],
        [
          2196.2,
          -1359.5
        ]
      ]
    },
    {
      "name": "Jalan Kawasan Marunda Center",
      "type": "service",
      "width": 6,
      "points": [
        [
          2247.4,
          -1395
        ],
        [
          2272.6,
          -1409.5
        ],
        [
          2297.4,
          -1409.4
        ]
      ]
    },
    {
      "name": "Jalan Kawasan Marunda Center",
      "type": "service",
      "width": 6,
      "points": [
        [
          2299.1,
          -1424.9
        ],
        [
          2247.2,
          -1424.8
        ],
        [
          2299.1,
          -1427.5
        ]
      ]
    },
    {
      "name": "Jalan Kawasan Marunda Center",
      "type": "service",
      "width": 6,
      "points": [
        [
          2299.2,
          -1504.6
        ],
        [
          2127.4,
          -1506
        ],
        [
          2299.2,
          -1506.5
        ]
      ]
    },
    {
      "name": "Jalan Kebantenan I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1540.9,
          -1245.9
        ],
        [
          1488.3,
          -1216.8
        ],
        [
          1454,
          -1203.4
        ]
      ]
    },
    {
      "name": "Jalan Kebantenan II",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1460.6,
          -1206
        ],
        [
          1475.7,
          -1172.4
        ]
      ]
    },
    {
      "name": "Jalan Kebantenan III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1565.4,
          -1231.3
        ],
        [
          1541.8,
          -1224.3
        ],
        [
          1515.4,
          -1211.6
        ],
        [
          1499.1,
          -1199
        ],
        [
          1490.5,
          -1180.4
        ],
        [
          1475.7,
          -1172.4
        ]
      ]
    },
    {
      "name": "Jalan Kebantenan V",
      "type": "living_street",
      "width": 7,
      "points": [
        [
          1567.8,
          -1226.2
        ],
        [
          1557.8,
          -1221.4
        ],
        [
          1565.2,
          -1206.5
        ]
      ]
    },
    {
      "name": "Jalan Kebantenan V",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1455,
          -1156.7
        ],
        [
          1441.2,
          -1145.2
        ],
        [
          1431.9,
          -1141.7
        ]
      ]
    },
    {
      "name": "Jalan Kebantenan V",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1554.6,
          -1201.9
        ],
        [
          1544,
          -1225.1
        ],
        [
          1540.2,
          -1245.5
        ]
      ]
    },
    {
      "name": "Jalan Kebantenan V",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1574.4,
          -1213.1
        ],
        [
          1534,
          -1192.4
        ]
      ]
    },
    {
      "name": "Jalan Kebon Baru",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1427.6,
          -1136.1
        ],
        [
          1393.3,
          -1117.4
        ],
        [
          1378.2,
          -1147.2
        ],
        [
          1379.9,
          -1157.6
        ]
      ]
    },
    {
      "name": "Jalan Kesemek",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1354.1,
          -1158.4
        ],
        [
          1379.9,
          -1157.6
        ]
      ]
    },
    {
      "name": "Jalan KH. Abdulloh",
      "type": "residential",
      "width": 8,
      "points": [
        [
          2102.7,
          -617.7
        ],
        [
          2102.4,
          -628.4
        ],
        [
          2098.4,
          -630.7
        ],
        [
          2097.9,
          -692.5
        ],
        [
          2091.1,
          -710.7
        ],
        [
          2084.7,
          -712.5
        ]
      ]
    },
    {
      "name": "Jalan Komplek Departemen Perhubungan Laut",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1338.8,
          -1001.1
        ],
        [
          1367.7,
          -997.5
        ],
        [
          1349.7,
          -991.3
        ],
        [
          1368.4,
          -992.3
        ],
        [
          1363.8,
          -1018.8
        ],
        [
          1354.8,
          -1012.9
        ],
        [
          1365.5,
          -1008.4
        ]
      ]
    },
    {
      "name": "Jalan Komplek Imperial Gading",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1480.7,
          -503.6
        ],
        [
          1458.7,
          -499.3
        ],
        [
          1478.3,
          -508.2
        ],
        [
          1457.9,
          -509.8
        ],
        [
          1460.5,
          -488.9
        ],
        [
          1483.2,
          -499.2
        ]
      ]
    },
    {
      "name": "Jalan Komplek Imperial Gading",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1441.5,
          -505.7
        ],
        [
          1438.1,
          -522.5
        ],
        [
          1453.4,
          -525.9
        ],
        [
          1456.4,
          -510.6
        ],
        [
          1396.9,
          -496.5
        ]
      ]
    },
    {
      "name": "Jalan Komplek Militer",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1850.8,
          -1093.3
        ],
        [
          1835,
          -1070.8
        ],
        [
          1827.7,
          -1044.4
        ]
      ]
    },
    {
      "name": "Jalan Logistik",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1330.4,
          -882.9
        ],
        [
          1341.8,
          -902.9
        ],
        [
          1340,
          -932.3
        ]
      ]
    },
    {
      "name": "Jalan Madya Kebantenan",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1458.9,
          -1047
        ],
        [
          1496.5,
          -1062.4
        ],
        [
          1495.5,
          -1072.9
        ],
        [
          1459.7,
          -1132
        ],
        [
          1460,
          -1141.1
        ]
      ]
    },
    {
      "name": "Jalan Madya Kebantenan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1454,
          -1203.4
        ],
        [
          1445.3,
          -1179.6
        ],
        [
          1460,
          -1141.1
        ]
      ]
    },
    {
      "name": "Jalan Madya Kebantenan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1475.7,
          -1172.4
        ],
        [
          1456.1,
          -1154.3
        ]
      ]
    },
    {
      "name": "Jalan Malaka I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1855,
          -789.6
        ],
        [
          1865.1,
          -887.7
        ]
      ]
    },
    {
      "name": "Jalan Malaka I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1862.6,
          -775.4
        ],
        [
          1870.4,
          -759.4
        ],
        [
          1880.2,
          -756.2
        ]
      ]
    },
    {
      "name": "Jalan Malaka III",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1876.7,
          -614.2
        ],
        [
          1872,
          -652.6
        ]
      ]
    },
    {
      "name": "Jalan Malaka IV HB",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1914.3,
          -617.1
        ],
        [
          1904.6,
          -647.4
        ]
      ]
    },
    {
      "name": "Jalan Manunggal Juang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1452.8,
          -611
        ],
        [
          1446.5,
          -592.7
        ],
        [
          1448.2,
          -571.5
        ],
        [
          1413.5,
          -565.8
        ]
      ]
    },
    {
      "name": "Jalan Marunda",
      "type": "living_street",
      "width": 7,
      "points": [
        [
          1834.6,
          -1046.2
        ],
        [
          1837.8,
          -1059.6
        ],
        [
          1867.7,
          -1060.1
        ]
      ]
    },
    {
      "name": "Jalan Marunda Baru",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1966.9,
          -990
        ],
        [
          1888.4,
          -993.7
        ]
      ]
    },
    {
      "name": "Jalan Marunda Besar",
      "type": "living_street",
      "width": 7,
      "points": [
        [
          1927.2,
          -1425.3
        ],
        [
          1939.3,
          -1433.3
        ],
        [
          1949,
          -1417.6
        ]
      ]
    },
    {
      "name": "Jalan Marunda Bidara",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1719.1,
          -1200.9
        ],
        [
          1828.6,
          -1203.7
        ],
        [
          1894.7,
          -1220.6
        ],
        [
          1826.9,
          -1202
        ],
        [
          1634.4,
          -1201.3
        ],
        [
          1684.8,
          -1202.8
        ]
      ]
    },
    {
      "name": "Jalan Marunda Bidara",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1909.3,
          -1226.6
        ],
        [
          1931.5,
          -1235.7
        ],
        [
          1924,
          -1229.2
        ],
        [
          1909.2,
          -1224.6
        ]
      ]
    },
    {
      "name": "Jalan Marunda Empang",
      "type": "living_street",
      "width": 7,
      "points": [
        [
          1939,
          -1335.2
        ],
        [
          1968.4,
          -1344.9
        ]
      ]
    },
    {
      "name": "Jalan Marunda I",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1912.3,
          -952.3
        ],
        [
          1974.4,
          -951.9
        ],
        [
          1982.4,
          -942.9
        ],
        [
          1992.4,
          -943.7
        ],
        [
          2004.9,
          -936.3
        ]
      ]
    },
    {
      "name": "Jalan Marunda Kongsi",
      "type": "living_street",
      "width": 7,
      "points": [
        [
          1962.4,
          -1389.1
        ],
        [
          1965.7,
          -1395.6
        ],
        [
          1961.6,
          -1412
        ],
        [
          1967.8,
          -1414.5
        ],
        [
          1972.2,
          -1404.9
        ]
      ]
    },
    {
      "name": "Jalan Marunda Makmur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1933.2,
          -1236.7
        ],
        [
          1951.7,
          -1244
        ],
        [
          1991,
          -1249.6
        ],
        [
          2047.5,
          -1267.6
        ]
      ]
    },
    {
      "name": "Jalan Marunda Makmur",
      "type": "primary",
      "width": 18,
      "points": [
        [
          2074.4,
          -1275.2
        ],
        [
          2134.4,
          -1312.5
        ],
        [
          2152.5,
          -1320.1
        ],
        [
          2262.5,
          -1317.4
        ],
        [
          2295.4,
          -1308.2
        ]
      ]
    },
    {
      "name": "Jalan Marunda Masjid",
      "type": "service",
      "width": 6,
      "points": [
        [
          1932.7,
          -1396.8
        ],
        [
          1924.5,
          -1402.6
        ],
        [
          1933.9,
          -1416.6
        ],
        [
          1928.3,
          -1423.9
        ]
      ]
    },
    {
      "name": "Jalan Marunda Pulo",
      "type": "living_street",
      "width": 7,
      "points": [
        [
          1907,
          -1375.3
        ],
        [
          1910.4,
          -1385
        ],
        [
          1917.2,
          -1388.3
        ],
        [
          1913.9,
          -1387.9
        ],
        [
          1913,
          -1391.7
        ],
        [
          1900.2,
          -1389.1
        ],
        [
          1902.5,
          -1374.7
        ],
        [
          1890.1,
          -1373.7
        ],
        [
          1882.3,
          -1364.8
        ]
      ]
    },
    {
      "name": "Jalan Marunda Pulo",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1937.3,
          -1343.9
        ],
        [
          1920.4,
          -1389.7
        ]
      ]
    },
    {
      "name": "Jalan Marunda Pulo",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1931.5,
          -1235.7
        ],
        [
          1916.6,
          -1282.8
        ],
        [
          1928.7,
          -1287.9
        ],
        [
          1941.9,
          -1299.9
        ],
        [
          1937.3,
          -1343.9
        ]
      ]
    },
    {
      "name": "Jalan Pedongkelan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1570.7,
          -1220.4
        ],
        [
          1583.8,
          -1191.1
        ]
      ]
    },
    {
      "name": "Jalan Perumahan Green Garden",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1774.8,
          -489.6
        ],
        [
          1772.6,
          -524.3
        ]
      ]
    },
    {
      "name": "Jalan Pltgu Muara Tawar",
      "type": "service",
      "width": 6,
      "points": [
        [
          2192.6,
          -1424.2
        ],
        [
          2191.7,
          -1388.1
        ],
        [
          2174.7,
          -1388.6
        ],
        [
          2175.1,
          -1425.5
        ],
        [
          2192.6,
          -1424.2
        ]
      ]
    },
    {
      "name": "Jalan Pusaka Rakyat",
      "type": "residential",
      "width": 8,
      "points": [
        [
          2299.8,
          -493.2
        ],
        [
          2288.8,
          -492.4
        ],
        [
          2177.2,
          -520.4
        ],
        [
          2178.5,
          -622.2
        ],
        [
          2174.7,
          -627.9
        ]
      ]
    },
    {
      "name": "Jalan Pusaka Rakyat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2102.7,
          -617.7
        ],
        [
          2126.3,
          -619.4
        ],
        [
          2133.3,
          -623.2
        ],
        [
          2134.2,
          -629
        ],
        [
          2174.7,
          -627.9
        ]
      ]
    },
    {
      "name": "Jalan Rawa Indah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2232.3,
          -650.4
        ],
        [
          2278.8,
          -658.3
        ],
        [
          2296.1,
          -658.4
        ]
      ]
    },
    {
      "name": "Jalan Raya Cilincing",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1625.5,
          -1325.9
        ],
        [
          1565.9,
          -1288.3
        ],
        [
          1526.6,
          -1268.7
        ],
        [
          1473.3,
          -1250
        ],
        [
          1406.7,
          -1233.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Cilincing Koja",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1452.6,
          -1044.4
        ],
        [
          1408.7,
          -1206.9
        ]
      ]
    },
    {
      "name": "Jalan Raya Cilincing Koja",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1330.4,
          -1231.3
        ],
        [
          1373.7,
          -1230.3
        ],
        [
          1399.7,
          -1233.1
        ]
      ]
    },
    {
      "name": "Jalan Raya Cilincing Koja",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1403.7,
          -1221
        ],
        [
          1394.9,
          -1231
        ],
        [
          1371.8,
          -1228.4
        ],
        [
          1346.5,
          -1229.8
        ]
      ]
    },
    {
      "name": "Jalan Raya Sarang Bango",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1867,
          -913.3
        ],
        [
          1868.6,
          -924.5
        ],
        [
          1880.5,
          -939.3
        ],
        [
          1884.4,
          -955.6
        ]
      ]
    },
    {
      "name": "Jalan Raya Sarang Bango",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1886.2,
          -965.8
        ],
        [
          1888.4,
          -993.7
        ]
      ]
    },
    {
      "name": "Jalan Raya Tipar Cakung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1542.6,
          -470.2
        ],
        [
          1531.2,
          -487.7
        ],
        [
          1493.6,
          -564.4
        ],
        [
          1443.4,
          -622.8
        ],
        [
          1434.4,
          -643
        ],
        [
          1427.9,
          -670.1
        ],
        [
          1408.7,
          -699.7
        ],
        [
          1398.2,
          -722.8
        ],
        [
          1393.5,
          -758.7
        ],
        [
          1397.4,
          -780.1
        ],
        [
          1389.9,
          -825
        ],
        [
          1391.8,
          -843
        ],
        [
          1384.3,
          -868.1
        ],
        [
          1371.1,
          -889.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Tipar Cakung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1367.8,
          -897.2
        ],
        [
          1351.9,
          -927.4
        ],
        [
          1345.1,
          -931.1
        ]
      ]
    },
    {
      "name": "Jalan Rorotan 1",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1772.6,
          -524.3
        ],
        [
          1768,
          -574.5
        ],
        [
          1774.9,
          -614.4
        ]
      ]
    },
    {
      "name": "Jalan Rorotan II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1834.5,
          -518.4
        ],
        [
          1826.9,
          -494.4
        ],
        [
          1820.4,
          -496.5
        ],
        [
          1814.8,
          -480.2
        ],
        [
          1811.2,
          -474.4
        ],
        [
          1805.5,
          -474.6
        ],
        [
          1804.8,
          -470.5
        ]
      ]
    },
    {
      "name": "Jalan Rorotan III",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1810.8,
          -589.3
        ],
        [
          1810.6,
          -582.8
        ],
        [
          1832,
          -582.6
        ],
        [
          1836.2,
          -521.2
        ]
      ]
    },
    {
      "name": "Jalan Rorotan IV",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1866.6,
          -533.8
        ],
        [
          1870.1,
          -562.9
        ],
        [
          1863,
          -612.2
        ],
        [
          1876.7,
          -614.2
        ]
      ]
    },
    {
      "name": "Jalan Rorotan IX",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1917.5,
          -495.4
        ],
        [
          1899.9,
          -512.9
        ],
        [
          1863.3,
          -526.1
        ],
        [
          1850,
          -528.5
        ],
        [
          1834.5,
          -518.4
        ]
      ]
    },
    {
      "name": "Jalan Rorotan IX",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2075.8,
          -576.4
        ],
        [
          2029,
          -566.6
        ],
        [
          1987.3,
          -553.8
        ],
        [
          1987.1,
          -549.7
        ],
        [
          1981.5,
          -548.2
        ],
        [
          1969,
          -548.1
        ],
        [
          1943.4,
          -556.4
        ],
        [
          1928.2,
          -557.4
        ],
        [
          1926.3,
          -533.9
        ],
        [
          1866.6,
          -533.8
        ]
      ]
    },
    {
      "name": "Jalan Rorotan IX",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1948.1,
          -572.9
        ],
        [
          1929.8,
          -573.8
        ],
        [
          1928.1,
          -586
        ],
        [
          1916.3,
          -584.4
        ]
      ]
    },
    {
      "name": "Jalan Rorotan VI",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1870.4,
          -759.4
        ],
        [
          1781.7,
          -755.3
        ]
      ]
    },
    {
      "name": "Jalan Rorotan XI",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1882.2,
          -698.6
        ],
        [
          1892.2,
          -697.9
        ],
        [
          1895.3,
          -704.3
        ],
        [
          1903.9,
          -680.9
        ],
        [
          1904.6,
          -647.4
        ]
      ]
    },
    {
      "name": "Jalan Rorotan XI",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1895.3,
          -704.3
        ],
        [
          1896.8,
          -735.1
        ]
      ]
    },
    {
      "name": "Jalan Royal Orchard Raya",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1383.5,
          -650.8
        ],
        [
          1386.8,
          -672.5
        ],
        [
          1381.1,
          -683.5
        ],
        [
          1355.3,
          -690.1
        ],
        [
          1333.5,
          -677.5
        ]
      ]
    },
    {
      "name": "Jalan Rusun Marunda",
      "type": "service",
      "width": 6,
      "points": [
        [
          1963,
          -1387.3
        ],
        [
          1994,
          -1397.1
        ],
        [
          1963.3,
          -1385
        ]
      ]
    },
    {
      "name": "Jalan Rusun Marunda",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1963,
          -1387.3
        ],
        [
          1963.3,
          -1352.9
        ],
        [
          1938,
          -1344.2
        ],
        [
          1962.5,
          -1353.9
        ],
        [
          1961.7,
          -1386.5
        ]
      ]
    },
    {
      "name": "Jalan Rusun Marunda",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1955.9,
          -1406.5
        ],
        [
          1946.9,
          -1436.6
        ]
      ]
    },
    {
      "name": "Jalan Sekda Saefullah",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2004.9,
          -936.3
        ],
        [
          2012.5,
          -911.9
        ],
        [
          2016.9,
          -878.6
        ],
        [
          2034.7,
          -848.1
        ],
        [
          2055.1,
          -789.1
        ],
        [
          2058.4,
          -787.7
        ]
      ]
    },
    {
      "name": "Jalan Semarang",
      "type": "service",
      "width": 6,
      "points": [
        [
          1792.6,
          -1207.7
        ],
        [
          1790.6,
          -1345.3
        ],
        [
          1793.6,
          -1207.7
        ]
      ]
    },
    {
      "name": "Jalan Semarang",
      "type": "service",
      "width": 6,
      "points": [
        [
          1791.2,
          -1356.5
        ],
        [
          1791.2,
          -1386.8
        ]
      ]
    },
    {
      "name": "Jalan Sungai Begog",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1584.8,
          -1100.1
        ],
        [
          1594.5,
          -1132.1
        ],
        [
          1600.1,
          -1134.5
        ],
        [
          1592.6,
          -1170.6
        ],
        [
          1588.4,
          -1171.6
        ],
        [
          1584.4,
          -1189.6
        ]
      ]
    },
    {
      "name": "Jalan Sungai Brantas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1453,
          -947.2
        ],
        [
          1384.4,
          -895.6
        ]
      ]
    },
    {
      "name": "Jalan Sungai Landak",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1625.5,
          -1325.9
        ],
        [
          1640.4,
          -1293.8
        ],
        [
          1624.8,
          -1325.4
        ]
      ]
    },
    {
      "name": "Jalan Sungai Landak",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1649.7,
          -1276.2
        ],
        [
          1668.1,
          -1258.3
        ],
        [
          1668.2,
          -1214.4
        ],
        [
          1671.7,
          -1208.3
        ]
      ]
    },
    {
      "name": "Jalan Sungai Tiram",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1968.1,
          -1170.5
        ],
        [
          1953.6,
          -1169
        ],
        [
          1953,
          -1164.2
        ],
        [
          1937.2,
          -1162.4
        ],
        [
          1936.5,
          -1152
        ],
        [
          1915.6,
          -1149.7
        ],
        [
          1917.7,
          -1121.1
        ],
        [
          1896.9,
          -1122.7
        ],
        [
          1895.3,
          -1116.8
        ],
        [
          1892,
          -1115.9
        ],
        [
          1888.7,
          -1098.7
        ],
        [
          1889.8,
          -1087.5
        ],
        [
          1894.4,
          -1079.8
        ],
        [
          1889.9,
          -1079
        ]
      ]
    },
    {
      "name": "Jalan Sungai Tiram",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1878.8,
          -1084.7
        ],
        [
          1860.4,
          -1086
        ],
        [
          1765.2,
          -1162.7
        ],
        [
          1760.9,
          -1200.9
        ]
      ]
    },
    {
      "name": "Jalan Sungai Tiram",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1890.3,
          -1069.2
        ],
        [
          1887.8,
          -1065.1
        ],
        [
          1891.9,
          -1024.4
        ],
        [
          1888.4,
          -993.7
        ]
      ]
    },
    {
      "name": "Jalan Syech Nawawi Al Bantani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1657,
          -614.6
        ],
        [
          1650.1,
          -635.5
        ],
        [
          1657,
          -614.6
        ],
        [
          1663.8,
          -525.7
        ],
        [
          1661.5,
          -471.2
        ],
        [
          1651.7,
          -594.3
        ]
      ]
    },
    {
      "name": "Jalan Syech Nawawi Al Bantani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1654.8,
          -684.6
        ],
        [
          1650.1,
          -635.5
        ],
        [
          1647.4,
          -678.8
        ]
      ]
    },
    {
      "name": "Jalan Tambun Permata",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2182.4,
          -629.7
        ],
        [
          2205.5,
          -628.6
        ],
        [
          2223.4,
          -632.6
        ],
        [
          2225.4,
          -644
        ],
        [
          2231.7,
          -645.1
        ],
        [
          2232.3,
          -650.4
        ]
      ]
    },
    {
      "name": "Jalan Tambun Rengas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1949,
          -471.6
        ],
        [
          1935.5,
          -486
        ],
        [
          1917.5,
          -495.4
        ]
      ]
    },
    {
      "name": "Jalan Terusan Hybrida",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1434.8,
          -642.1
        ],
        [
          1390.6,
          -643.5
        ],
        [
          1347.1,
          -656.7
        ],
        [
          1333.4,
          -656.4
        ],
        [
          1390.6,
          -643.5
        ]
      ]
    },
    {
      "name": "Jalan Tipar Timur",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1391.2,
          -835.5
        ],
        [
          1409.4,
          -833.8
        ],
        [
          1426.9,
          -838.9
        ],
        [
          1427.5,
          -842
        ],
        [
          1439,
          -842.8
        ],
        [
          1439.4,
          -845.7
        ],
        [
          1455.2,
          -847.4
        ],
        [
          1460,
          -861.4
        ]
      ]
    },
    {
      "name": "Jalan Tugu Raya",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1335.7,
          -939.1
        ],
        [
          1338.2,
          -952.7
        ],
        [
          1347.9,
          -974.1
        ],
        [
          1356.2,
          -980.2
        ],
        [
          1376.3,
          -983.3
        ],
        [
          1387,
          -988.2
        ],
        [
          1412.8,
          -1008.4
        ],
        [
          1431.8,
          -1033.3
        ],
        [
          1452.6,
          -1044.4
        ]
      ]
    },
    {
      "name": "Jalan Ujung Pandang",
      "type": "unclassified",
      "width": 9,
      "points": [
        [
          1718.7,
          -1220.9
        ],
        [
          1717,
          -1354.6
        ]
      ]
    },
    {
      "name": "Komplek Pergudangan KBN",
      "type": "service",
      "width": 6,
      "points": [
        [
          1645.8,
          -713.2
        ],
        [
          1482.6,
          -715.8
        ],
        [
          1475.6,
          -718.2
        ],
        [
          1638.4,
          -716.7
        ],
        [
          1644.8,
          -723.1
        ]
      ]
    },
    {
      "name": "Medan",
      "type": "service",
      "width": 6,
      "points": [
        [
          1719,
          -1197.8
        ],
        [
          1718,
          -1130.2
        ],
        [
          1684.4,
          -1129.7
        ],
        [
          1684.4,
          -1195.8
        ],
        [
          1668,
          -1194.6
        ],
        [
          1668.4,
          -1062.4
        ],
        [
          1684.8,
          -1061.5
        ],
        [
          1684.4,
          -1129.7
        ]
      ]
    },
    {
      "name": "Rawa Malang",
      "type": "residential",
      "width": 8,
      "points": [
        [
          1518.4,
          -1068.7
        ],
        [
          1529.5,
          -1063
        ],
        [
          1548.4,
          -1015.6
        ],
        [
          1556,
          -1016.3
        ],
        [
          1562.9,
          -996.1
        ],
        [
          1571.5,
          -996.2
        ],
        [
          1572.5,
          -985.6
        ]
      ]
    },
    {
      "name": "Semper Barat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1492.1,
          -965
        ],
        [
          1479.1,
          -955.4
        ],
        [
          1471.3,
          -962.3
        ],
        [
          1453,
          -947.2
        ]
      ]
    },
    {
      "name": "STIP",
      "type": "service",
      "width": 6,
      "points": [
        [
          1879,
          -1291.6
        ],
        [
          1883.2,
          -1282.3
        ],
        [
          1886.4,
          -1282
        ],
        [
          1911.6,
          -1293.5
        ],
        [
          1925.3,
          -1293.7
        ],
        [
          1921.3,
          -1307.3
        ],
        [
          1915,
          -1307.4
        ],
        [
          1914,
          -1313.7
        ],
        [
          1907.8,
          -1314.1
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
          1758.2,
          -757.7
        ],
        [
          1755.6,
          -739.6
        ],
        [
          1763.7,
          -739.6
        ],
        [
          1764.2,
          -746.8
        ],
        [
          1780.1,
          -746.5
        ],
        [
          1783.1,
          -733.4
        ],
        [
          1777.7,
          -650.2
        ],
        [
          1761.2,
          -650
        ],
        [
          1758.8,
          -616.4
        ]
      ]
    },
    {
      "name": null,
      "kind": "canal",
      "width": 8,
      "points": [
        [
          1777.7,
          -650.2
        ],
        [
          1773.6,
          -614.8
        ]
      ]
    },
    {
      "name": null,
      "kind": "canal",
      "width": 8,
      "points": [
        [
          2114.6,
          -1041.7
        ],
        [
          2105.5,
          -1114.1
        ],
        [
          2092.8,
          -1175.9
        ],
        [
          2089.5,
          -1188
        ],
        [
          2078.3,
          -1207.1
        ]
      ]
    },
    {
      "name": null,
      "kind": "canal",
      "width": 8,
      "points": [
        [
          2244.6,
          -1598.3
        ],
        [
          2246,
          -1361.6
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          1516,
          -809.9
        ],
        [
          1518.3,
          -814
        ],
        [
          1513.4,
          -858.3
        ],
        [
          1498.6,
          -875.8
        ],
        [
          1480.1,
          -885.7
        ],
        [
          1462.5,
          -890.5
        ],
        [
          1438.2,
          -889.6
        ],
        [
          1368.8,
          -896.2
        ],
        [
          1360.4,
          -891.8
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          1648.3,
          -1369.8
        ],
        [
          1620,
          -1361.3
        ],
        [
          1473.7,
          -1299
        ],
        [
          1445.7,
          -1291
        ],
        [
          1449.5,
          -1259.8
        ],
        [
          1440.4,
          -1255.3
        ],
        [
          1441.8,
          -1247.8
        ],
        [
          1423.3,
          -1244.3
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          1950.1,
          -952.5
        ],
        [
          1952,
          -970.2
        ],
        [
          1968.8,
          -978.3
        ],
        [
          1966.8,
          -1014.5
        ],
        [
          1972.1,
          -1022.2
        ],
        [
          1987.4,
          -1028.9
        ],
        [
          1990.6,
          -1042.5
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          1788.1,
          -1064.2
        ],
        [
          1795,
          -1058.7
        ],
        [
          1796.5,
          -1048.7
        ],
        [
          1812.4,
          -1047.7
        ],
        [
          1818.3,
          -1037.1
        ],
        [
          1829.1,
          -1035.8
        ],
        [
          1830.7,
          -1052.1
        ],
        [
          1836.4,
          -1064
        ],
        [
          1851.8,
          -1062.3
        ],
        [
          1869.1,
          -1066.3
        ],
        [
          1870.5,
          -1076.2
        ],
        [
          1880.6,
          -1085.1
        ],
        [
          1880.5,
          -1110.6
        ],
        [
          1891.7,
          -1130.2
        ],
        [
          1890.4,
          -1182
        ],
        [
          1893.8,
          -1192.2
        ],
        [
          1900.4,
          -1196.5
        ],
        [
          1899.4,
          -1205.9
        ],
        [
          1907.4,
          -1212.5
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 9,
      "points": [
        [
          1404.5,
          -1237.7
        ],
        [
          1355.4,
          -1231.9
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1332.9,
          -821
        ],
        [
          1409.4,
          -827.4
        ],
        [
          1410.7,
          -819.4
        ],
        [
          1413.3,
          -819
        ],
        [
          1445.1,
          -817.7
        ],
        [
          1462.5,
          -812.6
        ],
        [
          1516.4,
          -811.2
        ],
        [
          1579.6,
          -820.3
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1685.6,
          -1205.6
        ],
        [
          1827.3,
          -1206.3
        ],
        [
          1892.5,
          -1223.1
        ],
        [
          1901.2,
          -1230.8
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1865.8,
          -1346
        ],
        [
          1719.1,
          -1346.3
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1655.2,
          -809.6
        ],
        [
          1654.8,
          -1247.4
        ],
        [
          1661.4,
          -1252.6
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          2257.3,
          -514.4
        ],
        [
          2255,
          -594.7
        ],
        [
          2250.6,
          -598.4
        ],
        [
          2221.2,
          -599.3
        ],
        [
          2211.5,
          -602.2
        ],
        [
          2201.2,
          -611.8
        ],
        [
          2195.5,
          -608
        ],
        [
          2187.8,
          -608.7
        ],
        [
          2181.9,
          -613.2
        ],
        [
          2179.9,
          -680.5
        ],
        [
          2183.9,
          -788.7
        ],
        [
          2169.3,
          -932.7
        ],
        [
          2163.7,
          -1065.7
        ],
        [
          2181.9,
          -1080.6
        ],
        [
          2187.3,
          -1109.7
        ],
        [
          2186.1,
          -1119.6
        ],
        [
          2180.7,
          -1125.3
        ],
        [
          2181.2,
          -1135
        ],
        [
          2175.2,
          -1139.1
        ],
        [
          2177.2,
          -1167.9
        ],
        [
          2166.4,
          -1185.2
        ],
        [
          2150.9,
          -1199.4
        ],
        [
          2146.9,
          -1208.2
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          2299.1,
          -1247.5
        ],
        [
          2288.7,
          -1248.2
        ],
        [
          2277.4,
          -1239.7
        ],
        [
          2268.7,
          -1238.6
        ],
        [
          2263.5,
          -1243.6
        ],
        [
          2266.6,
          -1256.7
        ],
        [
          2263.7,
          -1262.2
        ],
        [
          2249.9,
          -1254.1
        ],
        [
          2229.6,
          -1249.7
        ],
        [
          2216.7,
          -1238.6
        ],
        [
          2213.6,
          -1239.8
        ],
        [
          2213.8,
          -1245.2
        ],
        [
          2220.8,
          -1259.6
        ],
        [
          2216.1,
          -1264.9
        ],
        [
          2210.4,
          -1265.5
        ],
        [
          2189.8,
          -1256
        ],
        [
          2141.8,
          -1249.4
        ],
        [
          2131.4,
          -1231.3
        ],
        [
          2135.8,
          -1220.4
        ],
        [
          2135.2,
          -1211.2
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 5,
      "points": [
        [
          1460.4,
          -811.1
        ],
        [
          1534,
          -809.8
        ],
        [
          1592.7,
          -823
        ]
      ]
    },
    {
      "name": "Blencong",
      "kind": "river",
      "width": 10,
      "points": [
        [
          2255,
          -1171.8
        ],
        [
          2115.1,
          -1218.1
        ],
        [
          2107.7,
          -1223.3
        ],
        [
          2107.4,
          -1243.5
        ],
        [
          2102.5,
          -1250.5
        ],
        [
          2096,
          -1249.4
        ],
        [
          2077.1,
          -1236.9
        ],
        [
          2073.1,
          -1224
        ],
        [
          2079,
          -1200.9
        ],
        [
          2076.3,
          -1196
        ],
        [
          2070,
          -1196.6
        ],
        [
          2062.3,
          -1204
        ],
        [
          2044.2,
          -1208.1
        ],
        [
          2026.4,
          -1195.4
        ],
        [
          2013.5,
          -1192.4
        ],
        [
          2000.3,
          -1183.8
        ],
        [
          1994.5,
          -1187.7
        ],
        [
          1986.6,
          -1218.6
        ],
        [
          1973.3,
          -1230.7
        ],
        [
          1954.6,
          -1226.1
        ],
        [
          1925.5,
          -1201.6
        ],
        [
          1918.8,
          -1201.3
        ],
        [
          1912,
          -1205.6
        ],
        [
          1907.9,
          -1211
        ],
        [
          1892.5,
          -1261.8
        ],
        [
          1887.7,
          -1266.4
        ],
        [
          1866.2,
          -1261.2
        ],
        [
          1858.9,
          -1264.3
        ],
        [
          1838,
          -1313.5
        ],
        [
          1860.3,
          -1336.7
        ],
        [
          1891.1,
          -1384.5
        ],
        [
          1899.1,
          -1400
        ],
        [
          1901.6,
          -1419.6
        ]
      ]
    },
    {
      "name": "Cakung",
      "kind": "stream",
      "width": 14,
      "points": [
        [
          1395.8,
          -470.3
        ],
        [
          1395.6,
          -483.6
        ],
        [
          1386.4,
          -500.1
        ],
        [
          1389.5,
          -511.7
        ],
        [
          1369.9,
          -537.2
        ],
        [
          1349.4,
          -592.1
        ],
        [
          1332.3,
          -615.6
        ],
        [
          1331,
          -625.7
        ],
        [
          1335.6,
          -645.2
        ],
        [
          1331.1,
          -661.2
        ]
      ]
    },
    {
      "name": "Cakung",
      "kind": "stream",
      "width": 14,
      "points": [
        [
          1332.1,
          -834.7
        ],
        [
          1355,
          -871.1
        ],
        [
          1360.9,
          -890.6
        ],
        [
          1355.7,
          -898.7
        ],
        [
          1346.3,
          -904.7
        ],
        [
          1343.9,
          -929.6
        ],
        [
          1347.8,
          -946.6
        ],
        [
          1358.8,
          -958.8
        ],
        [
          1359.7,
          -967.7
        ],
        [
          1364.3,
          -970.4
        ],
        [
          1373.7,
          -967.9
        ],
        [
          1388.7,
          -970.6
        ],
        [
          1401.5,
          -980.7
        ],
        [
          1407.8,
          -992.2
        ],
        [
          1432.7,
          -1001.8
        ],
        [
          1432.9,
          -1020.8
        ],
        [
          1442.9,
          -1030.8
        ],
        [
          1449.8,
          -1032.8
        ],
        [
          1455.6,
          -1030.1
        ]
      ]
    },
    {
      "name": "Cakung",
      "kind": "stream",
      "width": 14,
      "points": [
        [
          1463.9,
          -1030.5
        ],
        [
          1473.3,
          -1037.3
        ],
        [
          1491,
          -1038.9
        ],
        [
          1507.7,
          -1033.2
        ],
        [
          1512.8,
          -1045.7
        ],
        [
          1529.7,
          -1044.7
        ],
        [
          1539.9,
          -1057.2
        ],
        [
          1557.3,
          -1065.2
        ],
        [
          1569.5,
          -1078.3
        ],
        [
          1585.5,
          -1083.2
        ],
        [
          1584.6,
          -1094.4
        ],
        [
          1590.7,
          -1121.3
        ],
        [
          1596.3,
          -1131.6
        ],
        [
          1606.3,
          -1130.4
        ],
        [
          1610.2,
          -1133.8
        ],
        [
          1603.8,
          -1157.8
        ],
        [
          1595.6,
          -1169.2
        ],
        [
          1597.8,
          -1180.1
        ],
        [
          1591,
          -1190
        ],
        [
          1592.5,
          -1206.1
        ],
        [
          1627.4,
          -1228.1
        ],
        [
          1646.4,
          -1229.8
        ],
        [
          1655,
          -1243
        ]
      ]
    },
    {
      "name": "Kanal Banjir Timur",
      "kind": "river",
      "width": 24,
      "points": [
        [
          2088.6,
          -478.4
        ],
        [
          2082.2,
          -573
        ],
        [
          2080.4,
          -698.5
        ],
        [
          2067.1,
          -795.9
        ],
        [
          2060.7,
          -881.3
        ],
        [
          2067.1,
          -969
        ],
        [
          2066.2,
          -1200.5
        ],
        [
          2058.2,
          -1353.2
        ],
        [
          2054.1,
          -1377.3
        ],
        [
          2059.5,
          -1465.9
        ]
      ]
    },
    {
      "name": "Rawa Malang",
      "kind": "river",
      "width": 8,
      "points": [
        [
          1596.1,
          -527.2
        ],
        [
          1611,
          -559.7
        ],
        [
          1640.8,
          -611.3
        ],
        [
          1657.2,
          -622.2
        ],
        [
          1662,
          -643.3
        ],
        [
          1662,
          -1295.6
        ],
        [
          1654.6,
          -1349.8
        ],
        [
          1645.7,
          -1383.4
        ]
      ]
    },
    {
      "name": "Tiram",
      "kind": "river",
      "width": 10,
      "points": [
        [
          1990.6,
          -1042.5
        ],
        [
          1997.5,
          -1045.8
        ],
        [
          2003.4,
          -1059.5
        ],
        [
          2009,
          -1058.5
        ],
        [
          2014.7,
          -1064.9
        ],
        [
          2013.2,
          -1068.8
        ],
        [
          2022.7,
          -1080.2
        ],
        [
          2018,
          -1085.3
        ],
        [
          2022.3,
          -1098
        ],
        [
          2035.6,
          -1094.5
        ],
        [
          2039.1,
          -1098
        ],
        [
          2038.6,
          -1105.2
        ],
        [
          2031.7,
          -1112.8
        ],
        [
          2023.7,
          -1109.6
        ],
        [
          2020.7,
          -1112.4
        ],
        [
          2021.1,
          -1125.5
        ],
        [
          2017.9,
          -1128.4
        ],
        [
          2002.2,
          -1127.4
        ],
        [
          1996.9,
          -1119.8
        ],
        [
          1987.7,
          -1120.2
        ],
        [
          2002.8,
          -1158.2
        ],
        [
          1999,
          -1174.2
        ],
        [
          2000.3,
          -1183.8
        ]
      ]
    }
  ]
};
