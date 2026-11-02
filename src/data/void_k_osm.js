/**
 * Void K (Cakung-Penggilingan-Ujung Menteng-Pulo Gebang) road and water geometry derived from OpenStreetMap.
 * Source: OpenStreetMap contributors, ODbL. Retrieved 2026-11-02 via the Overpass API.
 * Coordinates are stored directly in scene units using the unscaled GPS projection:
 *   x = (lng - 106.823048) * 14100
 *   z = (lat + 6.194957) * -14180
 * Coverage is an L-shaped band: the western box fills the gap between Void E and Void F,
 * the eastern box reaches Pasar Ujung Menteng and Jalan Cakung Cilincing Barat.
 * Flyovers, toll roads, busway ways, unnamed roads, and Kanal Banjir Timur are excluded;
 * Kanal Banjir Timur stays procedural.
 */
export const VOID_K_OSM = {
  "meta": {
    "source": "OpenStreetMap contributors (ODbL)",
    "license": "ODbL 1.0",
    "retrieved": "2026-11-02",
    "api": "https://overpass.openstreetmap.fr/api/interpreter (base snapshot 2026-08-10)",
    "bbox": {
      "south": -6.2345,
      "west": 106.9174,
      "north": -6.1618,
      "east": 106.9752
    },
    "clipBoxes": [
      {
        "name": "barat",
        "minX": 1330,
        "maxX": 1995,
        "minZ": -470,
        "maxZ": -150
      },
      {
        "name": "timur",
        "minX": 1995,
        "maxX": 2145,
        "minZ": -470,
        "maxZ": 560
      }
    ],
    "projection": "projectGpsToScene",
    "projectionConstants": {
      "originLng": 106.823048,
      "originLat": -6.194957,
      "scaleX": 14100,
      "scaleZ": 14180
    },
    "simplification": 2,
    "roadCount": 389,
    "roadPointCount": 979,
    "waterwayCount": 13,
    "waterPointCount": 106,
    "waterBodyCount": 10,
    "note": "Jaringan jalan Cakung-Penggilingan-Ujung Menteng-Pulo Gebang dan tata air Kali Cakung-Rawa Malang pada koridor L antara Void E dan Void F. Jalan layang, jalan tol, way busway, jalan tanpa nama, dan Kanal Banjir Timur (dimodelkan prosedural) dikecualikan. Tiga anchor Void K terlayani jalan OSM terdekat sehingga tidak diperlukan konektor akses."
  },
  "roads": [
    {
      "name": "Jalan Rawa Kuning",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1995,
          -3.4
        ],
        [
          2017.6,
          -39.1
        ]
      ]
    },
    {
      "name": "Jalan Kayu Tinggi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1771.9,
          -445.5
        ],
        [
          1769.3,
          -396.4
        ],
        [
          1771,
          -384.8
        ],
        [
          1781.5,
          -383.7
        ],
        [
          1783.5,
          -379.8
        ],
        [
          1790.6,
          -302.8
        ],
        [
          1781,
          -289.8
        ],
        [
          1770.6,
          -262.5
        ],
        [
          1758.6,
          -200
        ],
        [
          1750.3,
          -198.1
        ],
        [
          1747.6,
          -177.6
        ],
        [
          1739.9,
          -175.2
        ],
        [
          1738.8,
          -166.3
        ],
        [
          1726.2,
          -166.2
        ],
        [
          1725.8,
          -163.7
        ]
      ]
    },
    {
      "name": "Jalan Metland Ujung Menteng",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1995,
          -91.6
        ],
        [
          2010,
          -129.3
        ]
      ]
    },
    {
      "name": "Jalan Krama Yudha Kampung Petukangan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1395.2,
          -193.3
        ],
        [
          1398.7,
          -236.4
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Cakung Drain",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1481.8,
          -290.6
        ],
        [
          1484.5,
          -310.7
        ],
        [
          1569,
          -470
        ]
      ]
    },
    {
      "name": "Jalan Syech Nawawi Al Bantani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1682,
          -351.6
        ],
        [
          1661.7,
          -470
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1708.5,
          -336.5
        ],
        [
          1683.6,
          -337.4
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1787.8,
          -343.1
        ],
        [
          1805,
          -341.5
        ],
        [
          1816.4,
          -335.8
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1887.1,
          -324.9
        ],
        [
          1886.5,
          -312.6
        ],
        [
          1876.2,
          -277.4
        ],
        [
          1839.4,
          -227.5
        ],
        [
          1813.2,
          -164.4
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1882.5,
          -325.9
        ],
        [
          1831,
          -327.3
        ],
        [
          1815,
          -333.7
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
          2021.6,
          545
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          2145,
          377.3
        ],
        [
          2132.1,
          364.1
        ]
      ]
    },
    {
      "name": "Jalan I Gusti Ngurah Rai",
      "type": "primary",
      "width": 18,
      "points": [
        [
          1995,
          365
        ],
        [
          2077.5,
          374.5
        ]
      ]
    },
    {
      "name": "Jalan I Gusti Ngurah Rai",
      "type": "primary",
      "width": 18,
      "points": [
        [
          2076.4,
          376
        ],
        [
          1995,
          366.2
        ]
      ]
    },
    {
      "name": "Jalan Pemuda Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          2145,
          515.6
        ],
        [
          2122.2,
          556.8
        ]
      ]
    },
    {
      "name": "Jalan I Gusti Ngurah Rai",
      "type": "primary",
      "width": 18,
      "points": [
        [
          2082.4,
          376.1
        ],
        [
          2145,
          385.5
        ]
      ]
    },
    {
      "name": "Jalan I Gusti Ngurah Rai",
      "type": "primary",
      "width": 18,
      "points": [
        [
          2145,
          387.1
        ],
        [
          2081.5,
          377.8
        ]
      ]
    },
    {
      "name": "Jalan Harapan Baru Barat",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2020.6,
          332.3
        ],
        [
          2021.7,
          217
        ]
      ]
    },
    {
      "name": "Jalan Gandaria",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1995,
          308
        ],
        [
          2016.8,
          308.1
        ]
      ]
    },
    {
      "name": "Jalan Garut",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1996,
          216.6
        ],
        [
          1995.7,
          232
        ]
      ]
    },
    {
      "name": "Jalan Srikaya Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2021.8,
          332.4
        ],
        [
          2003.3,
          332.1
        ]
      ]
    },
    {
      "name": "Jalan Jeruk Bali Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2017.5,
          232.1
        ],
        [
          2017.7,
          216.8
        ]
      ]
    },
    {
      "name": "Jalan Jeruk Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2000.2,
          216.7
        ],
        [
          2000.1,
          232
        ]
      ]
    },
    {
      "name": "Jalan Durian",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1995,
          216.6
        ],
        [
          2023.3,
          217
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi PAM",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1597.2,
          -287.5
        ],
        [
          1629.1,
          -270.8
        ],
        [
          1687.9,
          -209.4
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Kalimalang",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1628.2,
          -268.8
        ],
        [
          1687.9,
          -206.3
        ]
      ]
    },
    {
      "name": "Jalan Tebu",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1595.7,
          -303.6
        ],
        [
          1636.6,
          -313.1
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1577.2,
          -177.6
        ],
        [
          1603.6,
          -179.8
        ],
        [
          1620.1,
          -172.2
        ]
      ]
    },
    {
      "name": "Jalan SMU 102",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1769.2,
          -399.6
        ],
        [
          1792.6,
          -398.4
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1811.9,
          -164.9
        ],
        [
          1833.2,
          -222.6
        ],
        [
          1874,
          -281.4
        ],
        [
          1883.5,
          -313.7
        ],
        [
          1883.7,
          -324.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Mohammad Noor",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1771.2,
          -194.8
        ],
        [
          1770.3,
          -187.4
        ],
        [
          1785.4,
          -181.5
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Kayu Tinggi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1724,
          -163.7
        ],
        [
          1711.6,
          -173.1
        ],
        [
          1706.4,
          -189.1
        ],
        [
          1695.1,
          -202.1
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          2145,
          308.1
        ],
        [
          2128.1,
          341.8
        ],
        [
          2127.5,
          352.9
        ]
      ]
    },
    {
      "name": "Jalan Harapan Indah Bulevar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2145,
          -66.2
        ],
        [
          2142.1,
          -75.8
        ],
        [
          2143.6,
          -155.7
        ],
        [
          2120.5,
          -182
        ],
        [
          2119.6,
          -193.4
        ]
      ]
    },
    {
      "name": "Jalan Alamanda",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1930.7,
          -215.4
        ],
        [
          1941.2,
          -237.4
        ],
        [
          1941.7,
          -246.4
        ]
      ]
    },
    {
      "name": "Jalan Lantana I B",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1923.6,
          -225.2
        ],
        [
          1923.7,
          -243.2
        ]
      ]
    },
    {
      "name": "Jalan Zebrina",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1929.1,
          -260.8
        ],
        [
          1929,
          -281.4
        ],
        [
          1950.3,
          -282
        ]
      ]
    },
    {
      "name": "Jalan Lantana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1900,
          -225.8
        ],
        [
          1923.6,
          -225.2
        ]
      ]
    },
    {
      "name": "Jalan Alamanda",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1928.6,
          -216.3
        ],
        [
          1929.1,
          -244.8
        ]
      ]
    },
    {
      "name": "Jalan Lantana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1895.2,
          -243.4
        ],
        [
          1923.7,
          -243.2
        ]
      ]
    },
    {
      "name": "Jalan Lantana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1894,
          -237.2
        ],
        [
          1923.6,
          -237.3
        ]
      ]
    },
    {
      "name": "Jalan Lantana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1895.3,
          -231
        ],
        [
          1923.6,
          -231.4
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          2145,
          59.5
        ],
        [
          2114.2,
          -7.3
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          2136.9,
          320.8
        ],
        [
          2145,
          305.4
        ]
      ]
    },
    {
      "name": "Jalan Rawa Bebek",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2061.8,
          -4
        ],
        [
          2053.9,
          20.2
        ],
        [
          1995,
          126.2
        ]
      ]
    },
    {
      "name": "Jalan Arbei",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2004.1,
          277.6
        ],
        [
          2021,
          277.6
        ]
      ]
    },
    {
      "name": "Jalan Pisang Batu Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2016.8,
          308.1
        ],
        [
          2016.3,
          323.1
        ]
      ]
    },
    {
      "name": "Jalan Markisa",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2022.6,
          247.4
        ],
        [
          2044.4,
          247.6
        ]
      ]
    },
    {
      "name": "Jalan Kunyit IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2013.6,
          247.2
        ],
        [
          2013.1,
          277.7
        ]
      ]
    },
    {
      "name": "Jalan Kunyit I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2017.3,
          247.3
        ],
        [
          2017.5,
          277.7
        ]
      ]
    },
    {
      "name": "Jalan Garuda Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2033.2,
          529.7
        ],
        [
          2028.5,
          526.9
        ],
        [
          2034.9,
          500.6
        ],
        [
          2049.3,
          469.4
        ]
      ]
    },
    {
      "name": "Jalan Cendrawasih",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2027.4,
          546.3
        ],
        [
          2041.2,
          498.4
        ],
        [
          2053.8,
          471.5
        ]
      ]
    },
    {
      "name": "Jalan Sasak",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1996.8,
          490
        ],
        [
          2003.3,
          480
        ],
        [
          2005.5,
          481.6
        ],
        [
          2003.1,
          487.7
        ],
        [
          2010.6,
          493.6
        ]
      ]
    },
    {
      "name": "Jalan Borobudur Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2020.2,
          523.9
        ],
        [
          2052.8,
          430.7
        ]
      ]
    },
    {
      "name": "Jalan Penataran Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2028.5,
          486.3
        ],
        [
          2015.2,
          521.4
        ]
      ]
    },
    {
      "name": "Jalan Waringin Lawang Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2042.4,
          465.9
        ],
        [
          2011.2,
          452
        ]
      ]
    },
    {
      "name": "Jalan Pawon",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2007.8,
          492.5
        ],
        [
          1998.1,
          513.4
        ]
      ]
    },
    {
      "name": "Jalan Bintara Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          2023.5,
          545.3
        ],
        [
          2075.2,
          557.5
        ],
        [
          2105.4,
          557
        ]
      ]
    },
    {
      "name": "Jalan Bintara XIV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1995,
          472.8
        ],
        [
          2002.8,
          464.4
        ],
        [
          2008.2,
          450.1
        ],
        [
          2012.3,
          450
        ],
        [
          2022.8,
          421.9
        ],
        [
          2030.9,
          415.4
        ],
        [
          2049,
          372.5
        ]
      ]
    },
    {
      "name": "Jalan Limau Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2023.3,
          217
        ],
        [
          2064.7,
          217.2
        ]
      ]
    },
    {
      "name": "Jalan Haji Wahab Affan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2069.3,
          202
        ],
        [
          2145,
          205.2
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Sawit Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1995.8,
          247.1
        ],
        [
          1995.4,
          262.2
        ]
      ]
    },
    {
      "name": "Jalan Mentimun",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1995.7,
          232
        ],
        [
          1995.8,
          247.1
        ]
      ]
    },
    {
      "name": "Jalan Kelapa Puan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1995.4,
          262.2
        ],
        [
          1995.2,
          277.6
        ]
      ]
    },
    {
      "name": "Jalan Pisang Emas I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1995,
          322.9
        ],
        [
          2020.7,
          323.1
        ]
      ]
    },
    {
      "name": "Jalan Kecapi Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2000.1,
          232
        ],
        [
          2000.1,
          247.1
        ]
      ]
    },
    {
      "name": "Jalan Jeruk Nipis",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2004.3,
          232
        ],
        [
          2004.4,
          216.8
        ]
      ]
    },
    {
      "name": "Jalan Lengkeng Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2017.5,
          232.1
        ],
        [
          2017.3,
          247.3
        ]
      ]
    },
    {
      "name": "Jalan Labu",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2021.3,
          232.1
        ],
        [
          2000.1,
          232
        ]
      ]
    },
    {
      "name": "Jalan Kecapi 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2000.1,
          247.1
        ],
        [
          1999.9,
          262.2
        ]
      ]
    },
    {
      "name": "Jalan Kedondong",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2004.4,
          247.1
        ],
        [
          2004.3,
          232
        ]
      ]
    },
    {
      "name": "Jalan Manggis",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2000.1,
          247.1
        ],
        [
          2021.1,
          247.3
        ]
      ]
    },
    {
      "name": "Jalan Kecapi II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1999.9,
          262.2
        ],
        [
          1999.7,
          277.6
        ]
      ]
    },
    {
      "name": "Jalan Kenari Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2004.2,
          262.3
        ],
        [
          2004.4,
          247.1
        ]
      ]
    },
    {
      "name": "Jalan Penataran Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2037.4,
          464.1
        ],
        [
          2028.5,
          486.3
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi BKT",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2093.5,
          -470
        ],
        [
          2091.7,
          -385.5
        ],
        [
          2101.6,
          -330.2
        ],
        [
          2110.5,
          -235.9
        ],
        [
          2105.9,
          -124.4
        ],
        [
          2102,
          -110.3
        ],
        [
          2087,
          -89.7
        ]
      ]
    },
    {
      "name": "Jalan Sangkuriang",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1917.8,
          -150
        ],
        [
          1924.9,
          -166.1
        ]
      ]
    },
    {
      "name": "Jalan Tambun Rengas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1925.3,
          -167.7
        ],
        [
          1927.6,
          -179
        ],
        [
          1949.5,
          -212.5
        ],
        [
          1961.1,
          -251.4
        ],
        [
          1981.2,
          -298.7
        ],
        [
          1979.4,
          -320.6
        ]
      ]
    },
    {
      "name": "Jalan Harapan Indah Bulevar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2137.3,
          -411.4
        ],
        [
          2138.3,
          -470
        ]
      ]
    },
    {
      "name": "Jalan Prambanan Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2033.4,
          487.7
        ],
        [
          2038,
          489.6
        ],
        [
          2051.7,
          457.3
        ],
        [
          2063.6,
          402.9
        ],
        [
          2074.3,
          382.4
        ],
        [
          2071.5,
          375.3
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Ujung Menteng",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2012.2,
          -130.8
        ],
        [
          2081.2,
          -98
        ]
      ]
    },
    {
      "name": "Jalan Irigasi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1968.6,
          -150
        ],
        [
          1925.3,
          -167.7
        ]
      ]
    },
    {
      "name": "Jalan Irigasi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2012.2,
          -130.8
        ],
        [
          1995,
          -138.1
        ]
      ]
    },
    {
      "name": "Jalan Menteng Niaga",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2010.8,
          -131.4
        ],
        [
          2030.4,
          -189.5
        ]
      ]
    },
    {
      "name": "Jalan Menteng Niaga",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2032.3,
          -189.3
        ],
        [
          2012.2,
          -130.8
        ]
      ]
    },
    {
      "name": "Jalan Menteng Niaga",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2031.1,
          -193.3
        ],
        [
          2030.7,
          -197.4
        ],
        [
          2035.4,
          -197.8
        ],
        [
          2035.8,
          -193.8
        ],
        [
          2031.1,
          -193.3
        ]
      ]
    },
    {
      "name": "Jalan Valeria Boulevard",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1995,
          -199.4
        ],
        [
          2030.7,
          -197.4
        ]
      ]
    },
    {
      "name": "Jalan Rukem Jaya III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1981.3,
          -227.1
        ],
        [
          1957.2,
          -232.3
        ]
      ]
    },
    {
      "name": "Jalan Rukem Jaya IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1982.7,
          -230.8
        ],
        [
          1958.3,
          -235.9
        ]
      ]
    },
    {
      "name": "Jalan Rukem Jaya I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1974.2,
          -224.3
        ],
        [
          1972.9,
          -220.5
        ],
        [
          1955.2,
          -224.3
        ]
      ]
    },
    {
      "name": "Jalan Menteng Utama",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2036.3,
          -196.4
        ],
        [
          2062.3,
          -196.4
        ]
      ]
    },
    {
      "name": "Jalan Menteng Utama",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2088.7,
          -193.9
        ],
        [
          2064.2,
          -194.8
        ]
      ]
    },
    {
      "name": "Jalan Menteng Purnama VI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2065,
          -246.6
        ],
        [
          2064.6,
          -197.4
        ]
      ]
    },
    {
      "name": "Jalan Menteng Kencana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2035.4,
          -270.1
        ],
        [
          2042.9,
          -270.6
        ],
        [
          2051.3,
          -251.5
        ]
      ]
    },
    {
      "name": "Jalan Menteng Kencana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2040.6,
          -251.2
        ],
        [
          2058.5,
          -253.3
        ]
      ]
    },
    {
      "name": "Jalan Menteng Kartika III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2041.4,
          -239.5
        ],
        [
          2062.4,
          -241
        ]
      ]
    },
    {
      "name": "Jalan Menteng Tiara II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2046.4,
          -239.8
        ],
        [
          2046.8,
          -221.9
        ]
      ]
    },
    {
      "name": "Jalan Menteng Tiara V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2046.9,
          -202
        ],
        [
          2062.1,
          -202
        ]
      ]
    },
    {
      "name": "Jalan Menteng Mahkota",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2041.9,
          -222
        ],
        [
          2062.1,
          -221.9
        ]
      ]
    },
    {
      "name": "Jalan Menteng Purnama VII",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2081.5,
          -235.9
        ],
        [
          2075.4,
          -236
        ],
        [
          2075,
          -221.7
        ]
      ]
    },
    {
      "name": "Jalan Dbanyan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1883.7,
          -194.2
        ],
        [
          1891.5,
          -213.1
        ],
        [
          1887.7,
          -225.5
        ]
      ]
    },
    {
      "name": "Jalan Palm Spring",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1887.7,
          -225.5
        ],
        [
          1894.4,
          -229.3
        ],
        [
          1898.1,
          -224.4
        ],
        [
          1891,
          -219
        ]
      ]
    },
    {
      "name": "Jalan Belimbing Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2012,
          189
        ],
        [
          2011.4,
          216.7
        ]
      ]
    },
    {
      "name": "Jalan Dukuh",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2022.3,
          184.7
        ],
        [
          2009.9,
          184.8
        ],
        [
          1995,
          208.4
        ]
      ]
    },
    {
      "name": "Jalan Delima I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2023.3,
          205.5
        ],
        [
          2056.9,
          205.6
        ],
        [
          2057.2,
          217.1
        ]
      ]
    },
    {
      "name": "Jalan Delima IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2037.6,
          212.9
        ],
        [
          2052.9,
          212.9
        ]
      ]
    },
    {
      "name": "Jalan Semangka Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2026.2,
          308.2
        ],
        [
          2026.1,
          323.4
        ]
      ]
    },
    {
      "name": "Jalan Pepaya Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2044.4,
          247.6
        ],
        [
          2044.8,
          217.1
        ]
      ]
    },
    {
      "name": "Jalan Nangka Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2027.3,
          217
        ],
        [
          2027.1,
          247.4
        ]
      ]
    },
    {
      "name": "Jalan Pinang Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2039.4,
          278
        ],
        [
          2040,
          247.5
        ]
      ]
    },
    {
      "name": "Jalan Harapan Baru Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2123.9,
          347.4
        ],
        [
          2083,
          337.4
        ]
      ]
    },
    {
      "name": "Jalan Tawes Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2107.3,
          327.4
        ],
        [
          2081.2,
          321.9
        ]
      ]
    },
    {
      "name": "Jalan Gurame Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2083,
          337.4
        ],
        [
          2081.2,
          321.9
        ]
      ]
    },
    {
      "name": "Jalan Oscar I Terusan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2085.5,
          352.1
        ],
        [
          2108.7,
          356.9
        ]
      ]
    },
    {
      "name": "Jalan Oscar Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2087.7,
          343.4
        ],
        [
          2110.3,
          348.7
        ]
      ]
    },
    {
      "name": "Gading Arcadia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1348.4,
          -431.1
        ],
        [
          1385.2,
          -424.7
        ],
        [
          1392.5,
          -467.7
        ],
        [
          1387,
          -469.3
        ]
      ]
    },
    {
      "name": "Gading Arcadia Blok A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1385.2,
          -455.3
        ],
        [
          1382.4,
          -440.3
        ]
      ]
    },
    {
      "name": "Gading Arcadia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1381.9,
          -450.3
        ],
        [
          1364.9,
          -453.1
        ]
      ]
    },
    {
      "name": "Gading Arcadia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1348,
          -445.9
        ],
        [
          1346.6,
          -449.9
        ],
        [
          1372.2,
          -470
        ]
      ]
    },
    {
      "name": "Gading Arcadia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1385.9,
          -470
        ],
        [
          1350.2,
          -445.8
        ]
      ]
    },
    {
      "name": "Gading Arcadia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1381.6,
          -435.5
        ],
        [
          1362.4,
          -438.9
        ]
      ]
    },
    {
      "name": "Gading Arcadia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1380.8,
          -430.9
        ],
        [
          1361.6,
          -434.2
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Kanal Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1995,
          104.1
        ],
        [
          2023.1,
          55.2
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi BKT",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2081.2,
          -98
        ],
        [
          2092.8,
          -113.9
        ],
        [
          2095.6,
          -123.3
        ],
        [
          2100,
          -259.3
        ],
        [
          2087.7,
          -354.2
        ],
        [
          2056.6,
          -403.9
        ],
        [
          2060.2,
          -425.9
        ],
        [
          2076.5,
          -437.6
        ],
        [
          2082.4,
          -448.2
        ],
        [
          2083.7,
          -470
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1953.1,
          -324.9
        ],
        [
          1887.8,
          -325.8
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1923.2,
          -327.7
        ],
        [
          1953,
          -327.3
        ]
      ]
    },
    {
      "name": "Palm Spring 5",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1865.2,
          -203.6
        ],
        [
          1863.8,
          -201.5
        ],
        [
          1849.3,
          -204.1
        ]
      ]
    },
    {
      "name": "Jalan Palm Spring",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1853.8,
          -216.2
        ],
        [
          1844.8,
          -192
        ]
      ]
    },
    {
      "name": "Jalan Abbey Road 7",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1409.9,
          -445.6
        ],
        [
          1394.3,
          -447.5
        ]
      ]
    },
    {
      "name": "Jalan Abbey Road 6",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1411.3,
          -441
        ],
        [
          1393.5,
          -443
        ]
      ]
    },
    {
      "name": "Jalan Abbey Road 5",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1412.4,
          -436.3
        ],
        [
          1392.6,
          -438.6
        ]
      ]
    },
    {
      "name": "Jalan Abbey Road 3",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1391.8,
          -434
        ],
        [
          1413.5,
          -431.3
        ]
      ]
    },
    {
      "name": "Jalan Abbey Road 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1413.9,
          -426.5
        ],
        [
          1390.8,
          -429.1
        ]
      ]
    },
    {
      "name": "Jalan Abbey Road 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1389.9,
          -424.4
        ],
        [
          1414,
          -421.7
        ]
      ]
    },
    {
      "name": "Jalan Abbey Avenue",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1389.9,
          -419
        ],
        [
          1413.9,
          -416.3
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1540.2,
          -168
        ],
        [
          1494.3,
          -162.6
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1492.6,
          -165.5
        ],
        [
          1541.8,
          -171.3
        ]
      ]
    },
    {
      "name": "Jalan Krama Yudha Kampung Petukangan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1399.9,
          -169.5
        ],
        [
          1394.7,
          -188.5
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Cakung",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1493.8,
          -165.6
        ],
        [
          1480.7,
          -271.6
        ],
        [
          1481.7,
          -288.4
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Cakung Drain",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1487.2,
          -164.8
        ],
        [
          1474.4,
          -280.3
        ],
        [
          1474.8,
          -304.6
        ],
        [
          1481.9,
          -323.6
        ],
        [
          1510.1,
          -375.5
        ]
      ]
    },
    {
      "name": "Jalan Tipar Cakung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1569.9,
          -379.2
        ],
        [
          1570.8,
          -417.1
        ],
        [
          1567.1,
          -430
        ],
        [
          1557.4,
          -446
        ]
      ]
    },
    {
      "name": "Jalan Nayar 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2118.3,
          547.1
        ],
        [
          2101.1,
          542.9
        ]
      ]
    },
    {
      "name": "Jalan Merpati 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2052.8,
          527.4
        ],
        [
          2056.3,
          508.4
        ],
        [
          2052.7,
          507.1
        ]
      ]
    },
    {
      "name": "Jalan Nusa Indah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2062.8,
          475.9
        ],
        [
          2067.9,
          461.2
        ]
      ]
    },
    {
      "name": "Jalan Merpati V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2069.8,
          479.3
        ],
        [
          2064.2,
          491.8
        ],
        [
          2060.3,
          490.3
        ]
      ]
    },
    {
      "name": "Jalan Mawar",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2049.3,
          469.4
        ],
        [
          2079.4,
          483.9
        ]
      ]
    },
    {
      "name": "Jalan Dahlia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2053.2,
          457.7
        ],
        [
          2071.7,
          462.2
        ]
      ]
    },
    {
      "name": "Jalan Merpati Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2066.2,
          477.7
        ],
        [
          2054.1,
          503.1
        ],
        [
          2046.6,
          532.6
        ],
        [
          2040.7,
          532.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Mohammad Noor",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1758.3,
          -199.4
        ],
        [
          1765,
          -199.5
        ],
        [
          1765,
          -194.7
        ],
        [
          1771.2,
          -194.8
        ]
      ]
    },
    {
      "name": "Jalan Pagar Jati 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1911.7,
          -220.3
        ],
        [
          1904.5,
          -194.9
        ]
      ]
    },
    {
      "name": "Jalan Pagar Jati",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1901.9,
          -159.6
        ],
        [
          1895.6,
          -176.2
        ]
      ]
    },
    {
      "name": "Jalan Cassia Utama",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1847.6,
          -240.3
        ],
        [
          1860.4,
          -232
        ],
        [
          1870.1,
          -230.2
        ],
        [
          1884.2,
          -234.2
        ],
        [
          1890.8,
          -240.9
        ],
        [
          1895.2,
          -252.5
        ],
        [
          1894.7,
          -263.3
        ],
        [
          1890.1,
          -271.6
        ],
        [
          1877.9,
          -281.3
        ]
      ]
    },
    {
      "name": "Jalan Tambun Rengas",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1985.7,
          -441.2
        ],
        [
          1983.4,
          -457.8
        ]
      ]
    },
    {
      "name": "Jalan Cakung Cilincing Timur",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1695.1,
          -199.2
        ],
        [
          1694.5,
          -150.7
        ]
      ]
    },
    {
      "name": "Jalan Tambun Selatan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1983.5,
          -363.8
        ],
        [
          1986.4,
          -387.8
        ],
        [
          1984.3,
          -400.3
        ]
      ]
    },
    {
      "name": "Jalan Tipar Cakung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1577.9,
          -181.4
        ],
        [
          1581.2,
          -201.5
        ],
        [
          1580.1,
          -220.7
        ],
        [
          1589.9,
          -244.7
        ],
        [
          1597,
          -286.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Penggilingan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1542.9,
          -167.4
        ],
        [
          1540.8,
          -150
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Bekasi Tengah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1597,
          -285.9
        ],
        [
          1578.3,
          -292.6
        ],
        [
          1557.3,
          -292.7
        ]
      ]
    },
    {
      "name": "Jalan Menteng Kencana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2041.2,
          -245.5
        ],
        [
          2039.7,
          -270.4
        ]
      ]
    },
    {
      "name": "Jalan Wijaya Kusuma",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2115.8,
          -109.3
        ],
        [
          2113.9,
          -87.5
        ]
      ]
    },
    {
      "name": "Jalan Satria Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2044.6,
          -116
        ],
        [
          2050.4,
          -145.3
        ]
      ]
    },
    {
      "name": "Jalan Valeria Boulevard",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2016.4,
          -211.5
        ],
        [
          2015.8,
          -196.1
        ]
      ]
    },
    {
      "name": "Jalan Valeria Boulevard",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2004,
          -211.7
        ],
        [
          2032.5,
          -211.5
        ]
      ]
    },
    {
      "name": "Jalan Satria II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2074.6,
          -99.1
        ],
        [
          2057.8,
          -107.5
        ]
      ]
    },
    {
      "name": "Jalan Satria",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2033,
          -68.8
        ],
        [
          2044.5,
          -114.2
        ]
      ]
    },
    {
      "name": "Jalan Metland Ujung Menteng",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2011.2,
          -128.6
        ],
        [
          1995,
          -87.2
        ]
      ]
    },
    {
      "name": "Jalan Gudang Bekasi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2037.6,
          -66
        ],
        [
          2037.1,
          -31.4
        ],
        [
          2047.9,
          -23.5
        ]
      ]
    },
    {
      "name": "Jalan Rawa Kuning",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2019.2,
          -41.4
        ],
        [
          2035,
          -67
        ]
      ]
    },
    {
      "name": "Jalan Raya Seroja Bekasi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2087.5,
          -90.4
        ],
        [
          2117.6,
          -55.4
        ],
        [
          2127.3,
          -27.3
        ]
      ]
    },
    {
      "name": "Jalan Menteng Tiara III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2056.8,
          -221.9
        ],
        [
          2056.7,
          -202
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Kanal Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2023.1,
          55.2
        ],
        [
          2048.9,
          7.6
        ],
        [
          2054.3,
          -47.7
        ],
        [
          2057.8,
          -57.4
        ]
      ]
    },
    {
      "name": "Jalan Pinggir Dermaga",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2085.6,
          -87.8
        ],
        [
          2067,
          -54.3
        ]
      ]
    },
    {
      "name": "Jalan Pegangsaan Dua",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1346.8,
          -174.6
        ],
        [
          1332.5,
          -377
        ]
      ]
    },
    {
      "name": "Jalan Cakung Cilincing Barat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1686.1,
          -156.3
        ],
        [
          1687.9,
          -207
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Kanal Timur",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2058.3,
          -58.4
        ],
        [
          2081.2,
          -98
        ]
      ]
    },
    {
      "name": "Jalan Raya Seroja Bekasi",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2127.3,
          -27.3
        ],
        [
          2138.3,
          8
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1708.4,
          -338.8
        ],
        [
          1785.6,
          -343
        ]
      ]
    },
    {
      "name": "Jalan Akses Tipar Cakung",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1635.5,
          -335.1
        ],
        [
          1637.8,
          -339.5
        ],
        [
          1634.6,
          -361.6
        ]
      ]
    },
    {
      "name": "Jalan Garuda II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1771.8,
          -422.9
        ],
        [
          1799.7,
          -420.9
        ]
      ]
    },
    {
      "name": "Jalan Rorotan II",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1804.7,
          -470
        ],
        [
          1802.6,
          -464.5
        ],
        [
          1773.5,
          -463.2
        ],
        [
          1771.9,
          -445.5
        ]
      ]
    },
    {
      "name": "Jalan Mississippi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1995,
          -412.7
        ],
        [
          2014.7,
          -416.4
        ]
      ]
    },
    {
      "name": "Jalan Lake Garden Boulevard",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          1883.5,
          -329.5
        ],
        [
          1881.7,
          -337.8
        ],
        [
          1835.4,
          -405
        ],
        [
          1828.6,
          -419.7
        ],
        [
          1829.6,
          -444.5
        ],
        [
          1839.5,
          -470
        ]
      ]
    },
    {
      "name": "Jalan Tebu",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1616.7,
          -281.9
        ],
        [
          1619,
          -297.7
        ],
        [
          1616.3,
          -308.4
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi Kalimalang",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1597,
          -285.9
        ],
        [
          1615.2,
          -276.1
        ]
      ]
    },
    {
      "name": "Jalan Pool PPD",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          1549.5,
          -324.2
        ],
        [
          1552.5,
          -298.4
        ],
        [
          1577.9,
          -295.1
        ],
        [
          1597.2,
          -287.5
        ]
      ]
    },
    {
      "name": "Jalan Haji Mahi",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1966.3,
          -362.8
        ],
        [
          1979.1,
          -361.1
        ],
        [
          1983.5,
          -363.8
        ]
      ]
    },
    {
      "name": "Jalan Zebrina",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1948.9,
          -260.7
        ],
        [
          1950.3,
          -282
        ]
      ]
    },
    {
      "name": "Jalan Sakura",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          1844,
          -305.8
        ],
        [
          1830.7,
          -305.5
        ],
        [
          1822.3,
          -301.3
        ],
        [
          1799.4,
          -306
        ],
        [
          1794.4,
          -340.9
        ]
      ]
    },
    {
      "name": "Jalan Zebrina",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1967.4,
          -269.6
        ],
        [
          1951.2,
          -270.3
        ]
      ]
    },
    {
      "name": "Jalan Victoria",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1826.7,
          -352.2
        ],
        [
          1843.8,
          -351.1
        ],
        [
          1853.8,
          -346.4
        ],
        [
          1853.8,
          -328.9
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1492.2,
          -166
        ],
        [
          1541.8,
          -171.3
        ]
      ]
    },
    {
      "name": "Jalan Cassia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1907.3,
          -253.8
        ],
        [
          1897.9,
          -254.6
        ],
        [
          1898,
          -260.8
        ]
      ]
    },
    {
      "name": "Jalan Alamanda",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1939.3,
          -232.2
        ],
        [
          1947.3,
          -228.3
        ],
        [
          1941.8,
          -214
        ],
        [
          1932.2,
          -217.6
        ]
      ]
    },
    {
      "name": "Jalan Pepaya I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2056.7,
          217.1
        ],
        [
          2056,
          221.8
        ],
        [
          2044.7,
          221.6
        ]
      ]
    },
    {
      "name": "Jalan Aster V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2070.4,
          234.9
        ],
        [
          2058.6,
          234.9
        ],
        [
          2059.2,
          242.2
        ]
      ]
    },
    {
      "name": "Jalan Durian",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2052.2,
          346.3
        ],
        [
          2059.4,
          299.8
        ]
      ]
    },
    {
      "name": "Jalan Harapan Baru Timur",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2023.1,
          232.2
        ],
        [
          2021.8,
          332.4
        ]
      ]
    },
    {
      "name": "Jalan Baru Bintara",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2081.7,
          370.9
        ],
        [
          2085.3,
          354.6
        ]
      ]
    },
    {
      "name": "Jalan Prambanan Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2060.2,
          417
        ],
        [
          2055.8,
          416.6
        ],
        [
          2057.1,
          405.3
        ]
      ]
    },
    {
      "name": "Jalan Cendrawasih",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2076.2,
          336.9
        ],
        [
          2074.5,
          317
        ]
      ]
    },
    {
      "name": "Jalan Ratu Boko IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2045.1,
          441
        ],
        [
          2035.3,
          438.3
        ],
        [
          2037.4,
          430.4
        ],
        [
          2031.1,
          427.6
        ],
        [
          2033.4,
          419.6
        ]
      ]
    },
    {
      "name": "Gang Cahaya Baru",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2097.1,
          479.6
        ],
        [
          2078.4,
          474
        ]
      ]
    },
    {
      "name": "Jalan Dahlia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2076.7,
          504.2
        ],
        [
          2074.1,
          512.3
        ],
        [
          2085.2,
          516.4
        ]
      ]
    },
    {
      "name": "Jalan Lapangan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2074.7,
          557.4
        ],
        [
          2080.4,
          544.8
        ],
        [
          2089.7,
          500.6
        ]
      ]
    },
    {
      "name": "Jalan Haji Wahab Affan",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2145,
          206.2
        ],
        [
          2069.4,
          203.4
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          2133.3,
          363.2
        ],
        [
          2145,
          375.5
        ]
      ]
    },
    {
      "name": "Jalan Banteng",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2118.3,
          547.1
        ],
        [
          2145,
          478.5
        ]
      ]
    },
    {
      "name": "Jalan Mahakam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2023.6,
          -386.4
        ],
        [
          2018.6,
          -429.5
        ],
        [
          2043.4,
          -453.8
        ],
        [
          2046,
          -464.7
        ]
      ]
    },
    {
      "name": "Jalan Mahakam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2047.1,
          -470
        ],
        [
          2044.5,
          -453.2
        ],
        [
          2019.8,
          -429
        ],
        [
          2025,
          -386.6
        ]
      ]
    },
    {
      "name": "Jalan Valeria Boulevard",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1999.8,
          -290.1
        ],
        [
          2003.5,
          -197.4
        ]
      ]
    },
    {
      "name": "Gading Arcadia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1365.5,
          -458.4
        ],
        [
          1360.7,
          -428.6
        ]
      ]
    },
    {
      "name": "Gading Arcadia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1348,
          -445.9
        ],
        [
          1363.2,
          -443.5
        ]
      ]
    },
    {
      "name": "Gading Arcadia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1382.4,
          -440.3
        ],
        [
          1379.9,
          -425.3
        ]
      ]
    },
    {
      "name": "Jalan Tipar Cakung Gang Sakri",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1591.6,
          -251.9
        ],
        [
          1613.3,
          -244.9
        ]
      ]
    },
    {
      "name": "Jalan Lele",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1786.1,
          -353.8
        ],
        [
          1809.6,
          -353.2
        ],
        [
          1810,
          -356
        ]
      ]
    },
    {
      "name": "Jalan Zebrina",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1941.5,
          -258.3
        ],
        [
          1941.4,
          -282
        ]
      ]
    },
    {
      "name": "Jalan Cassia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1910.7,
          -284.3
        ],
        [
          1910.7,
          -258.4
        ]
      ]
    },
    {
      "name": "Jalan Cassia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1893.5,
          -284.4
        ],
        [
          1923.6,
          -284.3
        ]
      ]
    },
    {
      "name": "Jalan Balai Rakyat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1811.8,
          -162.1
        ],
        [
          1842.7,
          -150
        ]
      ]
    },
    {
      "name": "Jalan Balai Rakyat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1878.2,
          -150
        ],
        [
          1925.3,
          -167.7
        ]
      ]
    },
    {
      "name": "Jalan Balai Rakyat",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1725.8,
          -163.7
        ],
        [
          1768.7,
          -156.6
        ],
        [
          1787.1,
          -165.8
        ],
        [
          1810.6,
          -162.4
        ]
      ]
    },
    {
      "name": "Jalan Cassia Utama",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1878.3,
          -282.7
        ],
        [
          1888.9,
          -275.5
        ],
        [
          1895.5,
          -264.4
        ],
        [
          1896.4,
          -252.3
        ],
        [
          1891.9,
          -240.4
        ],
        [
          1882.5,
          -232.3
        ],
        [
          1869.8,
          -229.4
        ],
        [
          1860.4,
          -230.9
        ],
        [
          1846.8,
          -239.3
        ]
      ]
    },
    {
      "name": "Jalan Alamanda",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1911.2,
          -200.4
        ],
        [
          1916.8,
          -219.7
        ]
      ]
    },
    {
      "name": "Jalan Alamanda",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1924.8,
          -196.7
        ],
        [
          1930.7,
          -215.4
        ]
      ]
    },
    {
      "name": "Jalan Lantana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1910.8,
          -225.3
        ],
        [
          1910.2,
          -246.3
        ]
      ]
    },
    {
      "name": "Jalan Anggur Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2021.7,
          217
        ],
        [
          2022.3,
          184.7
        ]
      ]
    },
    {
      "name": "Jalan Rawa Bebek",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1996.9,
          123
        ],
        [
          1995,
          140
        ]
      ]
    },
    {
      "name": "Jalan Tambun Rengas",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1995,
          -443.9
        ],
        [
          2014.3,
          -444.8
        ],
        [
          2016,
          -450.4
        ],
        [
          2035.1,
          -454.6
        ]
      ]
    },
    {
      "name": "Jalan Rawa Bebek",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2066.8,
          -53
        ],
        [
          2062.1,
          -8.8
        ]
      ]
    },
    {
      "name": "Jalan Cakung Cilincing Timur",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1695.3,
          -260.1
        ],
        [
          1695.1,
          -201.5
        ]
      ]
    },
    {
      "name": "Jalan Cakung Cilincing Barat",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1687.9,
          -208.9
        ],
        [
          1686.7,
          -294.4
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          2012.5,
          -77.2
        ],
        [
          2058.7,
          -58.2
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          2057.8,
          -57.4
        ],
        [
          2018.6,
          -73.9
        ]
      ]
    },
    {
      "name": "Jalan Menteng",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2037.5,
          308.2
        ],
        [
          2022.2,
          308.1
        ]
      ]
    },
    {
      "name": "Jalan Sawo Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2026.6,
          277.8
        ],
        [
          2026.4,
          293.2
        ]
      ]
    },
    {
      "name": "Jalan Harapan Baru Raya",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2068.3,
          217.2
        ],
        [
          2072.4,
          259.5
        ],
        [
          2069.1,
          267.2
        ],
        [
          2076.8,
          295.5
        ],
        [
          2080.4,
          336.4
        ]
      ]
    },
    {
      "name": "Jalan Raya Bekasi",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          2145,
          74.9
        ],
        [
          2115.3,
          74
        ],
        [
          2077.9,
          67.7
        ]
      ]
    },
    {
      "name": "Jalan Kampung Rawa Bebek",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2059.4,
          299.8
        ],
        [
          2065.2,
          272.4
        ],
        [
          2065.2,
          249.5
        ],
        [
          2070.8,
          249.6
        ]
      ]
    },
    {
      "name": "Jalan Srikaya Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2003.3,
          331.1
        ],
        [
          2020.6,
          331.2
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          2111.9,
          -10.6
        ],
        [
          2085.2,
          -39.2
        ],
        [
          2065.8,
          -53.6
        ]
      ]
    },
    {
      "name": "Jalan Michigan",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          1849.3,
          -384.5
        ],
        [
          1823.1,
          -365
        ],
        [
          1820.7,
          -352.8
        ]
      ]
    },
    {
      "name": "Jalan Bintara Raya",
      "type": "primary",
      "width": 18,
      "points": [
        [
          2105.4,
          557
        ],
        [
          2122.2,
          556.8
        ]
      ]
    },
    {
      "name": "Jalan Mendut",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1995.4,
          512.2
        ],
        [
          2026.1,
          526.6
        ],
        [
          2029.1,
          514.5
        ]
      ]
    },
    {
      "name": "Jalan Plaosan Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2007.2,
          489.3
        ],
        [
          2011.7,
          479.4
        ],
        [
          2033.4,
          487.7
        ]
      ]
    },
    {
      "name": "Jalan Makam",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2089.7,
          500.6
        ],
        [
          2072.6,
          503.1
        ]
      ]
    },
    {
      "name": "Jalan Menteng Purnama VI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2061.8,
          -197.3
        ],
        [
          2061.8,
          -246.7
        ]
      ]
    },
    {
      "name": "Jalan Rukem Jaya II",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1974.2,
          -224.3
        ],
        [
          1956.1,
          -228.3
        ]
      ]
    },
    {
      "name": "Jalan Pisang Ambon",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2016.9,
          292.9
        ],
        [
          2016.8,
          308.1
        ]
      ]
    },
    {
      "name": "Jalan Pisang Ambon IV",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2003.6,
          308.1
        ],
        [
          2003.8,
          292.8
        ]
      ]
    },
    {
      "name": "Jalan Pisang Ambon V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1999.3,
          292.8
        ],
        [
          1999.3,
          308
        ]
      ]
    },
    {
      "name": "Jalan Pisang Raja",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2017.5,
          277.7
        ],
        [
          2016.9,
          292.9
        ]
      ]
    },
    {
      "name": "Jalan Pisang Raja V",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2003.8,
          292.8
        ],
        [
          2003.9,
          277.6
        ]
      ]
    },
    {
      "name": "Jalan Pisang Kepok Raya I",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1995.2,
          277.6
        ],
        [
          1995,
          292.7
        ]
      ]
    },
    {
      "name": "Jalan Salak IX",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2037.1,
          278
        ],
        [
          2056.7,
          278.3
        ]
      ]
    },
    {
      "name": "Jalan Kemiri Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2004.1,
          277.6
        ],
        [
          2004.2,
          262.3
        ]
      ]
    },
    {
      "name": "Jalan Melinjo",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2043.7,
          278.1
        ],
        [
          2044.4,
          247.6
        ]
      ]
    },
    {
      "name": "Jalan Nanas",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2040,
          247.5
        ],
        [
          2040.6,
          217.1
        ]
      ]
    },
    {
      "name": "Jalan Pala Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2027.1,
          247.4
        ],
        [
          2026.6,
          277.8
        ]
      ]
    },
    {
      "name": "Jalan Sawo Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2026.4,
          293.2
        ],
        [
          2026.2,
          308.2
        ]
      ]
    },
    {
      "name": "Jalan Cendrawasih VI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2065,
          332.4
        ],
        [
          2065.1,
          334.7
        ],
        [
          2080.4,
          336.4
        ]
      ]
    },
    {
      "name": "Jalan Saluran Irigasi Gempol",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2139.7,
          12.3
        ],
        [
          2145,
          28.3
        ]
      ]
    },
    {
      "name": "Jalan Masjid Al Ikhlas",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2108.8,
          435.5
        ],
        [
          2122.9,
          381.9
        ]
      ]
    },
    {
      "name": "Jalan Flamboyan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2057.8,
          458.8
        ],
        [
          2069.4,
          407.7
        ]
      ]
    },
    {
      "name": "Jalan Gelatik Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2083.2,
          411.3
        ],
        [
          2077.4,
          435.1
        ]
      ]
    },
    {
      "name": "Jalan Kenanga",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2075.2,
          464
        ],
        [
          2069.8,
          479.3
        ]
      ]
    },
    {
      "name": "Jalan Oval",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2077.4,
          435.1
        ],
        [
          2071.7,
          462.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Batu Boko",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2045.7,
          455.7
        ],
        [
          2031.1,
          451.1
        ]
      ]
    },
    {
      "name": "Jalan Sambisari",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2010.6,
          493.6
        ],
        [
          2002.7,
          515.5
        ]
      ]
    },
    {
      "name": "Jalan Bougenville",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2049.3,
          469.4
        ],
        [
          2062.3,
          417.7
        ]
      ]
    },
    {
      "name": "Jalan Baru Bintara",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2062.3,
          417.7
        ],
        [
          2066.7,
          401.6
        ],
        [
          2081.5,
          373.9
        ]
      ]
    },
    {
      "name": "Jalan Cemp.",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2071.7,
          462.2
        ],
        [
          2066.2,
          477.7
        ]
      ]
    },
    {
      "name": "Jalan Haji Syamsudin",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2046.7,
          365.8
        ],
        [
          2052.2,
          346.3
        ]
      ]
    },
    {
      "name": "Gading Arcadia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1364,
          -448.2
        ],
        [
          1380.8,
          -445.2
        ]
      ]
    },
    {
      "name": "Gading Arcadia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1380,
          -440.7
        ],
        [
          1363.2,
          -443.5
        ]
      ]
    },
    {
      "name": "Jalan Cassia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1910.6,
          -272.6
        ],
        [
          1892.5,
          -272.4
        ]
      ]
    },
    {
      "name": "Jalan Cassia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1910.6,
          -278.5
        ],
        [
          1893.1,
          -278.2
        ]
      ]
    },
    {
      "name": "Jalan Springwood 6",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1418,
          -465.3
        ],
        [
          1440.4,
          -469
        ]
      ]
    },
    {
      "name": "Jalan Springwood 5",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1441.7,
          -461.4
        ],
        [
          1421,
          -458.1
        ]
      ]
    },
    {
      "name": "Jalan Springwood 3",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1424.2,
          -450.6
        ],
        [
          1443,
          -453.9
        ]
      ]
    },
    {
      "name": "Jalan Lantana I B",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1923.7,
          -243.2
        ],
        [
          1923.4,
          -249.9
        ],
        [
          1913.4,
          -249.9
        ]
      ]
    },
    {
      "name": "Jalan Zebrina",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1950.3,
          -282
        ],
        [
          1966.9,
          -281.5
        ]
      ]
    },
    {
      "name": "Jalan Lantana",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1907.4,
          -250.1
        ],
        [
          1897.6,
          -250.1
        ],
        [
          1895.2,
          -243.4
        ]
      ]
    },
    {
      "name": "Jalan Kampung Gempol",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1861,
          -159.1
        ],
        [
          1865.7,
          -176
        ]
      ]
    },
    {
      "name": "Jalan Dbanyan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1875.6,
          -178.4
        ],
        [
          1880.2,
          -178.6
        ],
        [
          1883.7,
          -194.2
        ]
      ]
    },
    {
      "name": "Jalan Menteng Purnama VI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2061.8,
          -246.7
        ],
        [
          2047.5,
          -272.3
        ]
      ]
    },
    {
      "name": "Jalan Menteng Purnama VI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2054.8,
          -265.5
        ],
        [
          2065,
          -246.6
        ]
      ]
    },
    {
      "name": "Jalan Menteng Purnama VI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2041.8,
          -289.1
        ],
        [
          2054.8,
          -265.5
        ]
      ]
    },
    {
      "name": "Gading Arcadia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1382.9,
          -455.6
        ],
        [
          1365.5,
          -458.4
        ]
      ]
    },
    {
      "name": "Jalan Inspeksi",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          1560.2,
          -470
        ],
        [
          1554.5,
          -458.9
        ],
        [
          1547.8,
          -462.8
        ]
      ]
    },
    {
      "name": "Jalan Semayang 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1957.7,
          -361.9
        ],
        [
          1931.6,
          -361.9
        ]
      ]
    },
    {
      "name": "Jalan Semayang 5",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1931.8,
          -352.7
        ],
        [
          1957.8,
          -352.6
        ]
      ]
    },
    {
      "name": "Jalan Semayang 7",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1957.6,
          -343.6
        ],
        [
          1931.8,
          -343.5
        ]
      ]
    },
    {
      "name": "Jalan Semayang Avenue",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1945,
          -343.7
        ],
        [
          1944.4,
          -365.1
        ]
      ]
    },
    {
      "name": "Jalan Matana 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1956.2,
          -374.7
        ],
        [
          1932.1,
          -374.7
        ]
      ]
    },
    {
      "name": "Jalan Matana 3",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1932.7,
          -379.2
        ],
        [
          1956.1,
          -379.3
        ]
      ]
    },
    {
      "name": "Jalan Matana 7",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1956.3,
          -393.2
        ],
        [
          1932.3,
          -392.9
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1845.4,
          -329.1
        ],
        [
          1873.7,
          -328.4
        ]
      ]
    },
    {
      "name": "Jalan Matana 5",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1956,
          -384
        ],
        [
          1932.5,
          -383.8
        ]
      ]
    },
    {
      "name": "Jalan Matana 6",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1932.3,
          -388.6
        ],
        [
          1956.2,
          -388.6
        ]
      ]
    },
    {
      "name": "Jalan Semayang Avenue",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1945.3,
          -365.1
        ],
        [
          1945,
          -343.7
        ]
      ]
    },
    {
      "name": "Jalan Semayang 6",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1931.7,
          -347.8
        ],
        [
          1957.6,
          -347.7
        ]
      ]
    },
    {
      "name": "Jalan Semayang 3",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1957.6,
          -357.2
        ],
        [
          1931.6,
          -357.1
        ]
      ]
    },
    {
      "name": "Jalan Menteng Utama",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2062.4,
          -194.7
        ],
        [
          2036.2,
          -194.6
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1399.6,
          -165.7
        ],
        [
          1338,
          -171.9
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1647,
          -157.5
        ],
        [
          1624,
          -167.2
        ]
      ]
    },
    {
      "name": "Jalan Sabililah",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2118.9,
          165.3
        ],
        [
          2145,
          167.2
        ]
      ]
    },
    {
      "name": "Jalan Raya Tipar Cakung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1551.3,
          -456.9
        ],
        [
          1542.7,
          -470
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          2113,
          -10.5
        ],
        [
          2130.5,
          21.4
        ],
        [
          2145,
          57.1
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          2066.2,
          -54.6
        ],
        [
          2083.8,
          -42.1
        ],
        [
          2109.6,
          -14.6
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1453.3,
          -158.6
        ],
        [
          1424.2,
          -163.4
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1489,
          -162.4
        ],
        [
          1458.4,
          -158.6
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1428.1,
          -166.3
        ],
        [
          1453.6,
          -162
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1458.5,
          -162
        ],
        [
          1488.1,
          -164.9
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1330,
          -174.5
        ],
        [
          1346.9,
          -173.2
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1346.9,
          -173.2
        ],
        [
          1400.7,
          -169.5
        ]
      ]
    },
    {
      "name": "Jalan Pegangsaan Dua",
      "type": "secondary",
      "width": 14,
      "points": [
        [
          1332.3,
          -378
        ],
        [
          1330,
          -399.5
        ]
      ]
    },
    {
      "name": "Gang Haji Jabar",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2138.1,
          316
        ],
        [
          2118,
          306.8
        ]
      ]
    },
    {
      "name": "Jalan Valeria Boulevard",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2027.3,
          -195.9
        ],
        [
          1995,
          -198.1
        ]
      ]
    },
    {
      "name": "Jalan Menteng Purnama VI",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2046.8,
          -273.3
        ],
        [
          2037.7,
          -290.1
        ]
      ]
    },
    {
      "name": "Jalan Tambun Rengas",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1970.1,
          -329.3
        ],
        [
          1963.2,
          -379.7
        ],
        [
          1965.2,
          -414.2
        ],
        [
          1956,
          -457.2
        ]
      ]
    },
    {
      "name": "Jalan Pasar Modern",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2109.5,
          -354.5
        ],
        [
          2134.2,
          -354.2
        ]
      ]
    },
    {
      "name": "Jalan Pasar Modern",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2134.4,
          -352
        ],
        [
          2107.4,
          -353.4
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1647.9,
          -159.4
        ],
        [
          1674.8,
          -154.1
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1686.2,
          -150.2
        ],
        [
          1647,
          -157.5
        ]
      ]
    },
    {
      "name": "Jalan Tahir",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2138.2,
          495.4
        ],
        [
          2116.5,
          484.4
        ]
      ]
    },
    {
      "name": "Jalan Harapan Indah Bulevar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2140.9,
          -411.2
        ],
        [
          2139,
          -356
        ]
      ]
    },
    {
      "name": "Jalan Harapan Indah Bulevar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2135.7,
          -356.2
        ],
        [
          2137.2,
          -409.3
        ]
      ]
    },
    {
      "name": "Jalan Valeria Boulevard",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1998.7,
          -309.7
        ],
        [
          1999.8,
          -290.1
        ]
      ]
    },
    {
      "name": "Jalan Nayar 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2084.7,
          520.8
        ],
        [
          2102.6,
          526.5
        ],
        [
          2102.1,
          529.5
        ]
      ]
    },
    {
      "name": "Jalan Harapan Indah Bulevar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2140.9,
          -411.2
        ],
        [
          2141.2,
          -428.8
        ]
      ]
    },
    {
      "name": "Jalan West Toba 3",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1899.7,
          -407.2
        ],
        [
          1880.8,
          -412.5
        ],
        [
          1875.5,
          -409.6
        ]
      ]
    },
    {
      "name": "Jalan West Toba 1",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1911.2,
          -420
        ],
        [
          1893.6,
          -403.3
        ],
        [
          1880,
          -405.8
        ],
        [
          1875.5,
          -409.6
        ]
      ]
    },
    {
      "name": "Jalan West Toba 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1907.7,
          -425.9
        ],
        [
          1897.1,
          -409.2
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1816.4,
          -335.8
        ],
        [
          1827.2,
          -330.5
        ],
        [
          1845.4,
          -329.1
        ]
      ]
    },
    {
      "name": "Jalan Lapangan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2089.7,
          500.6
        ],
        [
          2108.8,
          435.5
        ]
      ]
    },
    {
      "name": "Jalan Maninjau 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1899.4,
          -362.1
        ],
        [
          1930.3,
          -361.9
        ]
      ]
    },
    {
      "name": "Jalan Maninjau 6",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1897.9,
          -346.6
        ],
        [
          1930.2,
          -348.1
        ]
      ]
    },
    {
      "name": "Jalan Maninjau Avenue",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1913.9,
          -343.5
        ],
        [
          1913.9,
          -368.5
        ]
      ]
    },
    {
      "name": "Jalan Maninjau Avenue",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1914.5,
          -368.5
        ],
        [
          1914.5,
          -343.5
        ]
      ]
    },
    {
      "name": "Jalan Maninjau 5",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1895.7,
          -350.2
        ],
        [
          1899,
          -352.7
        ],
        [
          1930.1,
          -352.8
        ]
      ]
    },
    {
      "name": "Jalan Summerwood 5",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1477.9,
          -414.8
        ],
        [
          1462.7,
          -422.7
        ]
      ]
    },
    {
      "name": "Jalan Summerwood 3",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1480,
          -418.8
        ],
        [
          1464.7,
          -426.7
        ]
      ]
    },
    {
      "name": "Jalan Tambun Selatan",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1984.5,
          -405.7
        ],
        [
          1983.1,
          -423
        ]
      ]
    },
    {
      "name": "Jalan Cassia",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1923.6,
          -284.3
        ],
        [
          1923.7,
          -260.8
        ]
      ]
    },
    {
      "name": "Jalan Lantana 1A",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1895.2,
          -243.4
        ],
        [
          1893.8,
          -233.6
        ],
        [
          1900,
          -225.8
        ]
      ]
    },
    {
      "name": "Jalan Lake Garden Boulevard",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          1853.1,
          -385.8
        ],
        [
          1884.6,
          -338.8
        ],
        [
          1886.7,
          -329.6
        ]
      ]
    },
    {
      "name": "Palm Spring 4",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1851.9,
          -210.6
        ],
        [
          1865.2,
          -203.6
        ]
      ]
    },
    {
      "name": "Jalan Tambun Rengas",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1966.1,
          -412.7
        ],
        [
          1987.3,
          -427
        ]
      ]
    },
    {
      "name": "Jalan Haji Abdurahman",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1747.6,
          -177.6
        ],
        [
          1767.7,
          -175.6
        ],
        [
          1773.8,
          -172.1
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1815,
          -333.7
        ],
        [
          1798.7,
          -340.5
        ],
        [
          1788.1,
          -340.6
        ]
      ]
    },
    {
      "name": "Jalan Waru Raya",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1783,
          -175.7
        ],
        [
          1788.5,
          -191.5
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1574.5,
          -172.7
        ],
        [
          1554,
          -169.7
        ]
      ]
    },
    {
      "name": "Jalan Harapan Indah Bulevar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2138.7,
          -350.6
        ],
        [
          2135.7,
          -235.6
        ],
        [
          2124,
          -222
        ],
        [
          2123.3,
          -191.4
        ]
      ]
    },
    {
      "name": "Jalan Harapan Indah Bulevar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2120.4,
          -220.7
        ],
        [
          2121.5,
          -226.2
        ],
        [
          2132,
          -237.6
        ],
        [
          2135.7,
          -350.7
        ]
      ]
    },
    {
      "name": "Jalan Harapan Indah Bulevar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2119.6,
          -193.4
        ],
        [
          2120.4,
          -220.7
        ]
      ]
    },
    {
      "name": "Jalan Syech Nawawi Al Bantani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1686.7,
          -294.4
        ],
        [
          1684.6,
          -328.6
        ]
      ]
    },
    {
      "name": "Jalan Syech Nawawi Al Bantani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1672.4,
          -450.1
        ],
        [
          1692.2,
          -328.8
        ]
      ]
    },
    {
      "name": "Jalan Syech Nawawi Al Bantani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1692.2,
          -328.8
        ],
        [
          1695.3,
          -260.1
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1785.8,
          -340.6
        ],
        [
          1708.5,
          -336.5
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1690.8,
          -338.5
        ],
        [
          1708.4,
          -338.8
        ]
      ]
    },
    {
      "name": "Jalan Lake Garden Boulevard",
      "type": "unclassified",
      "width": 10,
      "points": [
        [
          1843,
          -470
        ],
        [
          1833.7,
          -447.1
        ],
        [
          1831,
          -426
        ],
        [
          1835.6,
          -410.9
        ],
        [
          1853.1,
          -385.8
        ]
      ]
    },
    {
      "name": "Jalan Jakarta Garden City Boulevard",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1887.9,
          -328.2
        ],
        [
          1923.2,
          -327.7
        ]
      ]
    },
    {
      "name": "Jalan Adem Ayem",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1978.4,
          -295
        ],
        [
          1962.6,
          -299.2
        ]
      ]
    },
    {
      "name": "Jalan Wijaya Kusuma",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2113.9,
          -87.5
        ],
        [
          2092.7,
          -84.1
        ]
      ]
    },
    {
      "name": "Jalan Syech Nawawi Al Bantani",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1669.1,
          -470
        ],
        [
          1672.4,
          -450.1
        ]
      ]
    },
    {
      "name": "Jalan West Toba 3",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1898.9,
          -425.4
        ],
        [
          1892.5,
          -418.2
        ],
        [
          1890.7,
          -410.5
        ]
      ]
    },
    {
      "name": "Jalan Harapan Indah Bulevar",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          2128.4,
          -177.9
        ],
        [
          2145,
          -160.1
        ]
      ]
    },
    {
      "name": "Jalan Thames Selatan III",
      "type": "residential",
      "width": 10,
      "points": [
        [
          2051.7,
          -385.6
        ],
        [
          2072.7,
          -356.6
        ]
      ]
    },
    {
      "name": "Jalan Maninjau 7",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1930.2,
          -343.5
        ],
        [
          1901.7,
          -343.5
        ],
        [
          1895.7,
          -350.2
        ]
      ]
    },
    {
      "name": "Jalan Maninjau 3",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1930.2,
          -357.4
        ],
        [
          1899.4,
          -357.4
        ]
      ]
    },
    {
      "name": "Jalan Matana Avenue",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1944.4,
          -368.5
        ],
        [
          1944.5,
          -393.1
        ]
      ]
    },
    {
      "name": "Jalan Matana Avenue",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1945.2,
          -393.2
        ],
        [
          1945.2,
          -368.5
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1410.7,
          -168.5
        ],
        [
          1428.1,
          -166.3
        ]
      ]
    },
    {
      "name": "Jalan Kelimutu 5",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1946.5,
          -462.8
        ],
        [
          1924.8,
          -462.8
        ]
      ]
    },
    {
      "name": "Jalan Kelimutu 3",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1927.2,
          -457.2
        ],
        [
          1949.1,
          -457.1
        ]
      ]
    },
    {
      "name": "Jalan Kelimutu Avenue",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1920.8,
          -470
        ],
        [
          1927.9,
          -454.4
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1554,
          -173.1
        ],
        [
          1577.2,
          -177.6
        ]
      ]
    },
    {
      "name": "Jalan Bekasi Raya",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          1625.1,
          -169.1
        ],
        [
          1647.9,
          -159.4
        ]
      ]
    },
    {
      "name": "Jalan Tipar Cakung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1597.2,
          -287.5
        ],
        [
          1593.3,
          -318.6
        ],
        [
          1586.8,
          -328.9
        ]
      ]
    },
    {
      "name": "Jalan Tipar Cakung",
      "type": "tertiary",
      "width": 11,
      "points": [
        [
          1586.8,
          -328.9
        ],
        [
          1576.7,
          -344
        ],
        [
          1570.5,
          -375.1
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          2127.1,
          356.2
        ],
        [
          2125.8,
          345.7
        ],
        [
          2129.8,
          334.2
        ]
      ]
    },
    {
      "name": "Jalan Sultan Agung",
      "type": "trunk",
      "width": 16,
      "points": [
        [
          2129.8,
          334.2
        ],
        [
          2136.9,
          320.8
        ]
      ]
    },
    {
      "name": "Jalan Winterville Boulevard",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1498,
          -419.4
        ],
        [
          1521.2,
          -406.7
        ]
      ]
    },
    {
      "name": "Jalan Summerwood Boulevard",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1482.3,
          -423.1
        ],
        [
          1467,
          -430.9
        ]
      ]
    },
    {
      "name": "Jalan Summerwood 2",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1484.1,
          -428
        ],
        [
          1469.2,
          -435.6
        ]
      ]
    },
    {
      "name": "Jalan Summerwood 6",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1460.7,
          -419
        ],
        [
          1475,
          -411.6
        ]
      ]
    },
    {
      "name": "Jalan Alamanda",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1944.9,
          -222.1
        ],
        [
          1950.8,
          -220.1
        ],
        [
          1954,
          -229.8
        ],
        [
          1950.8,
          -230.9
        ],
        [
          1949.3,
          -226.4
        ]
      ]
    },
    {
      "name": "Jalan Alamanda",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1943.6,
          -218.6
        ],
        [
          1949.6,
          -216.2
        ],
        [
          1947.5,
          -211.8
        ],
        [
          1941.8,
          -214
        ]
      ]
    },
    {
      "name": "Jalan Zebrina",
      "type": "residential",
      "width": 10,
      "points": [
        [
          1966.3,
          -280.1
        ],
        [
          1971.2,
          -277.9
        ],
        [
          1975.9,
          -288.6
        ]
      ]
    }
  ],
  "waterways": [
    {
      "name": "Rawa Malang",
      "kind": "river",
      "width": 24,
      "points": [
        [
          1492.7,
          -150
        ],
        [
          1477.5,
          -288.6
        ],
        [
          1479.9,
          -307
        ],
        [
          1565.3,
          -470
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 10,
      "points": [
        [
          1841.9,
          -150
        ],
        [
          1799.2,
          -164.8
        ],
        [
          1783.9,
          -163.7
        ],
        [
          1770.5,
          -155.9
        ],
        [
          1718.8,
          -164.9
        ],
        [
          1711.4,
          -172.6
        ],
        [
          1705.5,
          -189.7
        ],
        [
          1629.4,
          -269.4
        ],
        [
          1587.8,
          -291.4
        ],
        [
          1572.6,
          -295.2
        ],
        [
          1551.8,
          -291.7
        ],
        [
          1516.6,
          -294
        ],
        [
          1477.5,
          -288.6
        ]
      ]
    },
    {
      "name": "Cakung",
      "kind": "stream",
      "width": 10,
      "points": [
        [
          1426,
          -409
        ],
        [
          1426.4,
          -413.1
        ],
        [
          1421.7,
          -415.8
        ],
        [
          1418.3,
          -424.3
        ],
        [
          1420.9,
          -432.1
        ],
        [
          1418.5,
          -451.6
        ],
        [
          1396.5,
          -464
        ],
        [
          1395.9,
          -470
        ]
      ]
    },
    {
      "name": null,
      "kind": "canal",
      "width": 16,
      "points": [
        [
          1999.9,
          560
        ],
        [
          2004.2,
          558.4
        ],
        [
          2006.4,
          551.2
        ],
        [
          2015.6,
          559.4
        ],
        [
          2017.9,
          550.9
        ],
        [
          2027.8,
          539.7
        ],
        [
          2030.6,
          531
        ],
        [
          2027.2,
          527
        ],
        [
          2034.8,
          497.8
        ],
        [
          2051.9,
          459.5
        ],
        [
          2065,
          403.6
        ],
        [
          2080.4,
          373.7
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 10,
      "points": [
        [
          1995,
          -32.1
        ],
        [
          2007.4,
          -39.1
        ],
        [
          2012.3,
          -37.9
        ],
        [
          2015.9,
          -42.4
        ],
        [
          2031.9,
          -30.9
        ],
        [
          2028.9,
          -9.4
        ],
        [
          2021.2,
          2
        ],
        [
          2024.7,
          34.6
        ]
      ]
    },
    {
      "name": null,
      "kind": "canal",
      "width": 16,
      "points": [
        [
          2083.9,
          -91
        ],
        [
          2117.1,
          -54.2
        ],
        [
          2126.8,
          -26.1
        ]
      ]
    },
    {
      "name": null,
      "kind": "river",
      "width": 24,
      "points": [
        [
          1396.5,
          -190.9
        ],
        [
          1390.5,
          -205.2
        ],
        [
          1395.3,
          -211.4
        ],
        [
          1394.2,
          -238
        ],
        [
          1383.5,
          -275.4
        ],
        [
          1370.7,
          -355
        ],
        [
          1383.3,
          -393.6
        ],
        [
          1381.8,
          -399
        ],
        [
          1396.5,
          -464
        ]
      ]
    },
    {
      "name": null,
      "kind": "canal",
      "width": 16,
      "points": [
        [
          2067.8,
          200.5
        ],
        [
          2068.5,
          144.9
        ],
        [
          2080.9,
          41.9
        ],
        [
          2075.2,
          10
        ],
        [
          2059.8,
          -7.8
        ]
      ]
    },
    {
      "name": null,
      "kind": "canal",
      "width": 16,
      "points": [
        [
          2080.4,
          370.7
        ],
        [
          2085.6,
          347.5
        ],
        [
          2082.1,
          342.5
        ],
        [
          2077.7,
          291.6
        ],
        [
          2070.3,
          266.6
        ],
        [
          2074.7,
          260.3
        ],
        [
          2068.3,
          205
        ]
      ]
    },
    {
      "name": "Cakung",
      "kind": "stream",
      "width": 10,
      "points": [
        [
          1452.9,
          -245.6
        ],
        [
          1453,
          -254.5
        ],
        [
          1459.5,
          -257.7
        ],
        [
          1463,
          -271.9
        ],
        [
          1454.8,
          -304.3
        ],
        [
          1462.7,
          -316.4
        ],
        [
          1453.1,
          -326.1
        ],
        [
          1444.4,
          -325.4
        ],
        [
          1441.5,
          -327.9
        ],
        [
          1451.5,
          -343.5
        ],
        [
          1449.5,
          -349.2
        ],
        [
          1442.7,
          -350.3
        ],
        [
          1450.1,
          -358.7
        ],
        [
          1446.6,
          -363.2
        ],
        [
          1447.4,
          -373.6
        ],
        [
          1421.7,
          -372.4
        ],
        [
          1416.5,
          -377.4
        ],
        [
          1426.1,
          -402.4
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 10,
      "points": [
        [
          1978.1,
          -324.2
        ],
        [
          1983.7,
          -301.2
        ],
        [
          1963.2,
          -253.3
        ],
        [
          1951.2,
          -214.2
        ],
        [
          1930.5,
          -182.3
        ],
        [
          1926.5,
          -169.6
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 10,
      "points": [
        [
          2088.8,
          -160.4
        ],
        [
          2063.3,
          -189.2
        ],
        [
          2063.1,
          -247.3
        ],
        [
          2037.7,
          -295.5
        ]
      ]
    },
    {
      "name": null,
      "kind": "stream",
      "width": 10,
      "points": [
        [
          2037.9,
          -298.6
        ],
        [
          2027.1,
          -343.4
        ],
        [
          2028.1,
          -354.2
        ],
        [
          2030.5,
          -355.1
        ],
        [
          2026.9,
          -368.9
        ],
        [
          2022.2,
          -372.2
        ],
        [
          2013.6,
          -425.7
        ],
        [
          2017.8,
          -436.4
        ],
        [
          2044.1,
          -456.6
        ]
      ]
    }
  ],
  "waterBodies": [
    {
      "name": "Kolam Cakung",
      "kind": "river",
      "points": [
        [
          2093.4,
          -470
        ],
        [
          2092.8,
          -462.2
        ],
        [
          2091.7,
          -409.8
        ],
        [
          2091.4,
          -386.3
        ],
        [
          2092.2,
          -381.6
        ],
        [
          2097.8,
          -352.6
        ],
        [
          2099.2,
          -333.2
        ],
        [
          2106.3,
          -275
        ],
        [
          2107.9,
          -259.5
        ],
        [
          2108.2,
          -247.2
        ],
        [
          2107.3,
          -212.7
        ],
        [
          2104.3,
          -129
        ],
        [
          2100.8,
          -116.4
        ],
        [
          2099.7,
          -111.5
        ],
        [
          2097.3,
          -108.5
        ],
        [
          2095.6,
          -106.2
        ],
        [
          2092.6,
          -102.3
        ],
        [
          2083.9,
          -91
        ],
        [
          2083.2,
          -90
        ],
        [
          2080.4,
          -85.5
        ],
        [
          2076,
          -76.8
        ],
        [
          2074.7,
          -74.1
        ],
        [
          2070.7,
          -67.2
        ],
        [
          2067.4,
          -61.4
        ],
        [
          2065.9,
          -58.4
        ],
        [
          2064.5,
          -55.4
        ],
        [
          2062.5,
          -51
        ],
        [
          2061.9,
          -48.1
        ],
        [
          2062.3,
          -45.8
        ],
        [
          2062.3,
          -40.6
        ],
        [
          2061.5,
          -30.7
        ],
        [
          2061.3,
          -22.3
        ],
        [
          2059.8,
          -7.8
        ],
        [
          2059.9,
          -5.7
        ],
        [
          2059,
          -2.5
        ],
        [
          2058.5,
          0.4
        ],
        [
          2057.1,
          7.3
        ],
        [
          2055.5,
          12.4
        ],
        [
          2050.7,
          21.9
        ],
        [
          2050.4,
          22.3
        ],
        [
          2046.1,
          29.8
        ],
        [
          2038.6,
          42.9
        ],
        [
          2034.8,
          40.5
        ],
        [
          2044.6,
          22.3
        ],
        [
          2049.1,
          13.8
        ],
        [
          2051.4,
          9.1
        ],
        [
          2053.2,
          1.4
        ],
        [
          2054.1,
          -4.9
        ],
        [
          2054.9,
          -19.6
        ],
        [
          2056,
          -34.2
        ],
        [
          2057.2,
          -46.8
        ],
        [
          2058.5,
          -51.7
        ],
        [
          2060.1,
          -56.3
        ],
        [
          2060.9,
          -58.4
        ],
        [
          2063.1,
          -63.4
        ],
        [
          2066.9,
          -70.8
        ],
        [
          2069.7,
          -76.4
        ],
        [
          2072,
          -80.2
        ],
        [
          2077,
          -89
        ],
        [
          2080.1,
          -93.7
        ],
        [
          2082,
          -96.5
        ],
        [
          2086.3,
          -102
        ],
        [
          2091.9,
          -109.2
        ],
        [
          2095.4,
          -113.7
        ],
        [
          2098.2,
          -121.4
        ],
        [
          2099.2,
          -131.4
        ],
        [
          2099.3,
          -138.4
        ],
        [
          2099.6,
          -151
        ],
        [
          2099.8,
          -163.7
        ],
        [
          2100,
          -176
        ],
        [
          2100.2,
          -187.4
        ],
        [
          2100.8,
          -214
        ],
        [
          2102.8,
          -256.6
        ],
        [
          2100,
          -282
        ],
        [
          2095.8,
          -316.7
        ],
        [
          2092.3,
          -343.2
        ],
        [
          2088.4,
          -356.2
        ],
        [
          2086.9,
          -362
        ],
        [
          2082.8,
          -366.4
        ],
        [
          2074,
          -379.2
        ],
        [
          2059.7,
          -401.5
        ],
        [
          2058.6,
          -405.2
        ],
        [
          2060.2,
          -421
        ],
        [
          2060.4,
          -424
        ],
        [
          2061.9,
          -426.8
        ],
        [
          2063.8,
          -429.1
        ],
        [
          2068.5,
          -432.2
        ],
        [
          2075.8,
          -436.9
        ],
        [
          2076.5,
          -437.6
        ],
        [
          2077.4,
          -438.7
        ],
        [
          2078.9,
          -441.1
        ],
        [
          2081.3,
          -445.6
        ],
        [
          2082.4,
          -448.2
        ],
        [
          2083.2,
          -451.1
        ],
        [
          2083.5,
          -460.2
        ],
        [
          2083.7,
          -470
        ],
        [
          2093.4,
          -470
        ]
      ]
    },
    {
      "name": "Situ Rawa Rorotan",
      "kind": "lake",
      "points": [
        [
          1853.2,
          -420.5
        ],
        [
          1852.5,
          -421.4
        ],
        [
          1851.1,
          -423.7
        ],
        [
          1849.7,
          -425
        ],
        [
          1847.2,
          -426.6
        ],
        [
          1844.3,
          -428.3
        ],
        [
          1841.5,
          -430.4
        ],
        [
          1839.7,
          -431.7
        ],
        [
          1839,
          -432.7
        ],
        [
          1838.3,
          -434.8
        ],
        [
          1838.2,
          -436.8
        ],
        [
          1838.3,
          -437.7
        ],
        [
          1838.9,
          -439.4
        ],
        [
          1839.8,
          -441
        ],
        [
          1840.2,
          -441.4
        ],
        [
          1840.5,
          -441.8
        ],
        [
          1843,
          -443.4
        ],
        [
          1847.5,
          -445.7
        ],
        [
          1849.9,
          -447.4
        ],
        [
          1850.9,
          -449.1
        ],
        [
          1852,
          -452
        ],
        [
          1852.4,
          -453.6
        ],
        [
          1852.4,
          -456.4
        ],
        [
          1852,
          -459.7
        ],
        [
          1851.7,
          -462.8
        ],
        [
          1851.9,
          -465
        ],
        [
          1852.4,
          -466.5
        ],
        [
          1854.2,
          -469.3
        ],
        [
          1854.9,
          -470
        ],
        [
          1879,
          -470
        ],
        [
          1879.6,
          -469.9
        ],
        [
          1883.1,
          -469
        ],
        [
          1886.1,
          -467.9
        ],
        [
          1888,
          -467.2
        ],
        [
          1891.6,
          -465.8
        ],
        [
          1894.9,
          -464
        ],
        [
          1896.9,
          -462.3
        ],
        [
          1898.2,
          -460.7
        ],
        [
          1900.1,
          -458.2
        ],
        [
          1901.7,
          -455.1
        ],
        [
          1903.9,
          -450.5
        ],
        [
          1904.9,
          -448
        ],
        [
          1905.4,
          -445.9
        ],
        [
          1905.5,
          -444
        ],
        [
          1905.4,
          -441.1
        ],
        [
          1905,
          -438.8
        ],
        [
          1904.5,
          -437.1
        ],
        [
          1904.1,
          -436.2
        ],
        [
          1903.4,
          -435.4
        ],
        [
          1902.5,
          -434.8
        ],
        [
          1901.5,
          -434.4
        ],
        [
          1900.1,
          -434.1
        ],
        [
          1898.9,
          -434
        ],
        [
          1897.5,
          -433.6
        ],
        [
          1896.1,
          -432.9
        ],
        [
          1894.9,
          -431.9
        ],
        [
          1893.4,
          -430.2
        ],
        [
          1892.2,
          -428.9
        ],
        [
          1891.1,
          -428
        ],
        [
          1889.5,
          -427.1
        ],
        [
          1887.6,
          -426.2
        ],
        [
          1886,
          -425.7
        ],
        [
          1883.4,
          -424.8
        ],
        [
          1881.5,
          -424
        ],
        [
          1880.4,
          -423.4
        ],
        [
          1879.2,
          -422.5
        ],
        [
          1878.2,
          -421.9
        ],
        [
          1877,
          -421.5
        ],
        [
          1875.8,
          -421.2
        ],
        [
          1868.7,
          -420.1
        ],
        [
          1864.6,
          -419.6
        ],
        [
          1857.6,
          -419.6
        ],
        [
          1854.6,
          -419.9
        ],
        [
          1853.2,
          -420.5
        ]
      ]
    },
    {
      "name": "Kolam Cakung",
      "kind": "river",
      "points": [
        [
          1995,
          118.7
        ],
        [
          1995,
          110.9
        ],
        [
          2001,
          100.1
        ],
        [
          2007.1,
          86
        ],
        [
          2010,
          81.1
        ],
        [
          2015.4,
          70.9
        ],
        [
          2024.7,
          55.7
        ],
        [
          2027.5,
          51.4
        ],
        [
          2034.8,
          40.5
        ],
        [
          2038.6,
          42.9
        ],
        [
          2035.4,
          49
        ],
        [
          2029.1,
          59.7
        ],
        [
          2028.8,
          60.2
        ],
        [
          2018.8,
          76.1
        ],
        [
          2014.9,
          82
        ],
        [
          2010.4,
          87.8
        ],
        [
          2006.7,
          94.9
        ],
        [
          2006.5,
          95.3
        ],
        [
          2004.9,
          98.7
        ],
        [
          2000.7,
          107.7
        ],
        [
          1995,
          118.7
        ]
      ]
    },
    {
      "name": "Kolam Cakung",
      "kind": "river",
      "points": [
        [
          1511,
          -366.5
        ],
        [
          1507.4,
          -366.7
        ],
        [
          1557.1,
          -458.3
        ],
        [
          1559.4,
          -456.7
        ],
        [
          1511,
          -366.5
        ]
      ]
    },
    {
      "name": "Kolam Cakung",
      "kind": "pond",
      "points": [
        [
          1699.4,
          -371.1
        ],
        [
          1704.4,
          -369.8
        ],
        [
          1713,
          -369.9
        ],
        [
          1714.1,
          -369.7
        ],
        [
          1714.5,
          -369.2
        ],
        [
          1714.5,
          -368.1
        ],
        [
          1714,
          -366.6
        ],
        [
          1714,
          -365.9
        ],
        [
          1714,
          -365.6
        ],
        [
          1714.2,
          -365.3
        ],
        [
          1714.6,
          -365.1
        ],
        [
          1733.9,
          -364.2
        ],
        [
          1739.7,
          -363.9
        ],
        [
          1739.9,
          -363.6
        ],
        [
          1740,
          -363.3
        ],
        [
          1740.2,
          -361.5
        ],
        [
          1740.1,
          -360.4
        ],
        [
          1740,
          -360.1
        ],
        [
          1739.4,
          -359.9
        ],
        [
          1736.7,
          -359.9
        ],
        [
          1735,
          -360
        ],
        [
          1732.9,
          -360.4
        ],
        [
          1708.9,
          -361.5
        ],
        [
          1707.8,
          -361.6
        ],
        [
          1705.3,
          -362
        ],
        [
          1704.8,
          -362.3
        ],
        [
          1704.5,
          -362.9
        ],
        [
          1704.4,
          -364
        ],
        [
          1704.7,
          -365.5
        ],
        [
          1704.7,
          -366.5
        ],
        [
          1704.6,
          -366.9
        ],
        [
          1704.5,
          -367.1
        ],
        [
          1704.2,
          -367.3
        ],
        [
          1703.8,
          -367.1
        ],
        [
          1703.6,
          -366.9
        ],
        [
          1702.6,
          -363.6
        ],
        [
          1702.1,
          -363.1
        ],
        [
          1700.7,
          -362.6
        ],
        [
          1699.7,
          -362.5
        ],
        [
          1697.1,
          -362.5
        ],
        [
          1693.6,
          -362.9
        ],
        [
          1689.9,
          -363
        ],
        [
          1689.5,
          -363.1
        ],
        [
          1689.3,
          -363.3
        ],
        [
          1688.7,
          -364.1
        ],
        [
          1688.6,
          -364.5
        ],
        [
          1688.6,
          -366
        ],
        [
          1688.8,
          -368.9
        ],
        [
          1689.1,
          -369.6
        ],
        [
          1689.5,
          -370.1
        ],
        [
          1690,
          -371
        ],
        [
          1690.5,
          -371.4
        ],
        [
          1691.1,
          -371.6
        ],
        [
          1691.9,
          -371.8
        ],
        [
          1693.7,
          -371.8
        ],
        [
          1697.9,
          -371.2
        ],
        [
          1699.4,
          -371.1
        ]
      ]
    },
    {
      "name": "Kolam Cakung",
      "kind": "river",
      "points": [
        [
          1507.4,
          -366.7
        ],
        [
          1511,
          -366.5
        ],
        [
          1484.8,
          -318.4
        ],
        [
          1480.7,
          -307.2
        ],
        [
          1478.5,
          -288.5
        ],
        [
          1479.2,
          -281.4
        ],
        [
          1476.7,
          -281.5
        ],
        [
          1475.9,
          -292.1
        ],
        [
          1476.2,
          -301.9
        ],
        [
          1478.5,
          -310.5
        ],
        [
          1482.4,
          -319.3
        ],
        [
          1507.4,
          -366.7
        ]
      ]
    },
    {
      "name": "Kolam Cakung",
      "kind": "river",
      "points": [
        [
          2139.7,
          12.3
        ],
        [
          2139.1,
          12.2
        ],
        [
          2136.6,
          11.8
        ],
        [
          2136.4,
          10.5
        ],
        [
          2136.1,
          9.5
        ],
        [
          2135.2,
          7.5
        ],
        [
          2134.1,
          3.4
        ],
        [
          2133.2,
          -0.6
        ],
        [
          2130.5,
          -10.3
        ],
        [
          2128.5,
          -17.3
        ],
        [
          2125.1,
          -28.3
        ],
        [
          2121.5,
          -39.5
        ],
        [
          2119.8,
          -44.4
        ],
        [
          2117.8,
          -50.2
        ],
        [
          2115.8,
          -54.4
        ],
        [
          2113.6,
          -57.2
        ],
        [
          2107.9,
          -63.4
        ],
        [
          2107.2,
          -64.1
        ],
        [
          2102.3,
          -69.5
        ],
        [
          2102.2,
          -69.8
        ],
        [
          2094.2,
          -79.5
        ],
        [
          2088.3,
          -86.1
        ],
        [
          2083.2,
          -90
        ],
        [
          2084.5,
          -91.8
        ],
        [
          2087.5,
          -90.4
        ],
        [
          2092.4,
          -84.1
        ],
        [
          2095.5,
          -80.7
        ],
        [
          2103.4,
          -71.5
        ],
        [
          2108.6,
          -65.4
        ],
        [
          2117.6,
          -55.4
        ],
        [
          2119.2,
          -52.2
        ],
        [
          2121.2,
          -45.7
        ],
        [
          2125.3,
          -33.2
        ],
        [
          2129.1,
          -21.7
        ],
        [
          2134.5,
          -4.6
        ],
        [
          2138,
          6.9
        ],
        [
          2139.7,
          12.3
        ]
      ]
    },
    {
      "name": "Kolam Cakung",
      "kind": "pond",
      "points": [
        [
          1836.8,
          -369.2
        ],
        [
          1845.3,
          -357
        ],
        [
          1845.1,
          -355.9
        ],
        [
          1841.7,
          -353.8
        ],
        [
          1838.9,
          -353.7
        ],
        [
          1824.7,
          -355.2
        ],
        [
          1823.5,
          -356.4
        ],
        [
          1824.6,
          -363.3
        ],
        [
          1825.9,
          -364.8
        ],
        [
          1833.9,
          -369.8
        ],
        [
          1834.7,
          -369.2
        ],
        [
          1836.8,
          -369.2
        ]
      ]
    },
    {
      "name": "Kolam Cakung",
      "kind": "river",
      "points": [
        [
          1492,
          -164.1
        ],
        [
          1493.9,
          -156.2
        ],
        [
          1493.8,
          -154.3
        ],
        [
          1492.9,
          -153.1
        ],
        [
          1493.8,
          -151.1
        ],
        [
          1493.4,
          -150
        ],
        [
          1493.4,
          -150
        ],
        [
          1490.4,
          -150
        ],
        [
          1489.3,
          -159.6
        ],
        [
          1490,
          -160.3
        ],
        [
          1489.8,
          -163.6
        ],
        [
          1489.9,
          -168.6
        ],
        [
          1488.3,
          -179
        ],
        [
          1485.8,
          -202.3
        ],
        [
          1484.8,
          -213.2
        ],
        [
          1481.6,
          -236.1
        ],
        [
          1484.1,
          -236
        ],
        [
          1491.5,
          -174.5
        ],
        [
          1491.7,
          -168.8
        ],
        [
          1492,
          -164.1
        ]
      ]
    },
    {
      "name": "Kolam Cakung",
      "kind": "lake",
      "points": [
        [
          2054.9,
          -465.1
        ],
        [
          2054.8,
          -465.9
        ],
        [
          2062.9,
          -468.6
        ],
        [
          2065.4,
          -470
        ],
        [
          2067.9,
          -470
        ],
        [
          2068.2,
          -467.4
        ],
        [
          2069,
          -465
        ],
        [
          2069.5,
          -463.3
        ],
        [
          2068.5,
          -461.2
        ],
        [
          2067.7,
          -459.8
        ],
        [
          2062.8,
          -458.5
        ],
        [
          2061.2,
          -458.8
        ],
        [
          2059.3,
          -459.3
        ],
        [
          2058.1,
          -459.8
        ],
        [
          2056.2,
          -460.4
        ],
        [
          2054.9,
          -460.7
        ],
        [
          2053.8,
          -461.4
        ],
        [
          2052.9,
          -460.8
        ],
        [
          2049.8,
          -457.4
        ],
        [
          2048.3,
          -456.3
        ],
        [
          2046.9,
          -455.9
        ],
        [
          2047.1,
          -456.7
        ],
        [
          2047.3,
          -457.3
        ],
        [
          2049.1,
          -458.8
        ],
        [
          2052.7,
          -462.8
        ],
        [
          2052.3,
          -463.9
        ],
        [
          2052.1,
          -465.4
        ],
        [
          2052.4,
          -467.3
        ],
        [
          2053.5,
          -464.7
        ],
        [
          2054.9,
          -465.1
        ]
      ]
    }
  ]
};
