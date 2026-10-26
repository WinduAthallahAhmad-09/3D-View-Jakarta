/**
 * Void B (Kalideres-Cengkareng) road and canal geometry derived from OpenStreetMap.
 * Source: OpenStreetMap contributors, ODbL. Retrieved 2026-10-26 via Overpass API.
 * Coordinates are already projected to scene units and warped into the Void B anchor space:
 *   x = 0.4575 * projectedX - 543.7
 *   z = 0.3829 * projectedZ - 242.7
 * The warp keeps the six hand-placed anchors intact while preserving real OSM topology.
 * Regenerate with the extraction notes in docs/ROADMAP.md.
 */
export const VOID_B_OSM = {
  "meta": {
    "source": "OpenStreetMap contributors (ODbL)",
    "retrieved": "2026-10-26",
    "bbox": {
      "south": -6.28,
      "west": 106.62,
      "north": -6.08,
      "east": 106.82
    },
    "projection": "projectGpsToScene (Bundaran HI origin, 14100 x 14180)",
    "voidBWarp": {
      "xScale": 0.4575,
      "xOffset": -543.7,
      "zScale": 0.3829,
      "zOffset": -242.7
    },
    "note": "Affine warp fitted to the six Void B anchors; applies to every point below. Daan Mogot centerline is a median of the real dual carriageway."
  },
  "waterways": [
    {
      "name": "Kali Mookervaart",
      "type": "canal",
      "width": 20,
      "osmWay": 31951163,
      "points": [
        [
          -1500,
          -422.1
        ],
        [
          -1451.3,
          -423.1
        ],
        [
          -1434,
          -430
        ],
        [
          -1418.6,
          -432.8
        ],
        [
          -1365,
          -433.4
        ],
        [
          -1353.3,
          -435.1
        ],
        [
          -1316,
          -444
        ],
        [
          -1310.9,
          -447
        ],
        [
          -1292.1,
          -452.7
        ],
        [
          -1278.5,
          -452.9
        ],
        [
          -1267.7,
          -454.2
        ],
        [
          -1246.7,
          -454.2
        ],
        [
          -1240.6,
          -455.8
        ],
        [
          -1230.7,
          -461.9
        ],
        [
          -1222.4,
          -465.7
        ],
        [
          -1212.2,
          -468.6
        ],
        [
          -1202.2,
          -469.4
        ],
        [
          -1191,
          -468.6
        ],
        [
          -1175.4,
          -464.5
        ],
        [
          -1137.8,
          -457.7
        ],
        [
          -1112.6,
          -459.7
        ],
        [
          -1078.8,
          -459.6
        ],
        [
          -1058.3,
          -458.5
        ],
        [
          -987.4,
          -451.8
        ],
        [
          -941.4,
          -439.5
        ],
        [
          -925.9,
          -438.5
        ],
        [
          -915.1,
          -434.1
        ],
        [
          -906.9,
          -433.1
        ],
        [
          -890,
          -425
        ]
      ]
    }
  ],
  "roads": [
    {
      "name": "Jalan Daan Mogot",
      "type": "trunk",
      "width": 24,
      "median": true,
      "osmWays": [
        28973780,
        28973785,
        30094391,
        30094403,
        35090203,
        35090204,
        35090205,
        35090206,
        188810862,
        192213536,
        192213538,
        192214866,
        192214867,
        192214873,
        192214874,
        192214876,
        192215210,
        192218434,
        192218556,
        192218557,
        192218558,
        450032803,
        450032806,
        450032807,
        450032808,
        467143579,
        512307342,
        513190959,
        513190960,
        513190965,
        513190966,
        514758254,
        514758255,
        514758256,
        514758257,
        519953129,
        519953134,
        529670560,
        530483754,
        535929155,
        565246330,
        565246331,
        565576118,
        565576119,
        568013078,
        568013079,
        568057914,
        572290946,
        589737145,
        590314340,
        590314342,
        590314343,
        590314369,
        590331862,
        590915996,
        590915999,
        635139726,
        635536180,
        675108165,
        675910961,
        675910962,
        683273064,
        683273065,
        683273066,
        683273067,
        683297740,
        683297742,
        688454209,
        688468035,
        688710998,
        689691803,
        689691804,
        689703784,
        689703785,
        689703786,
        689703787,
        689703788,
        690612870,
        690612871,
        690617377,
        692804594,
        692804595,
        693049639,
        693666529,
        693712194,
        693712196,
        701826855,
        702849498,
        713575573,
        727383768,
        727958672,
        732561668,
        749330296,
        749338844,
        756002396,
        756002397,
        756002398,
        762930847,
        762974683,
        766051968,
        774889218,
        774889219,
        774889221,
        774889222,
        774889223,
        774889224,
        774891080,
        774891081,
        775841423,
        785036872,
        785036873,
        791668179,
        842915911,
        842915913,
        842915914,
        1079941605,
        1079941606,
        1088054839,
        1088054840,
        1088054841,
        1097127899,
        1098904353,
        1102979005,
        1103007680,
        1103007681,
        1103197992,
        1103197993,
        1103223341,
        1103223342,
        1103587020,
        1103587021,
        1103587022,
        1106869333,
        1106925884,
        1107171374,
        1119500676,
        1119500677,
        1148425307,
        1234549169,
        1239390877,
        1239524777,
        1239524778,
        1265643625,
        1265643631,
        1289111109,
        1289318393,
        1289812588,
        1289812603,
        1289812606,
        1292165495,
        1292165496,
        1292165497,
        1292165499,
        1292165500,
        1293801441,
        1293801442,
        1293801443,
        1296555089,
        1296555090,
        1296555091,
        1296978602,
        1296986413,
        1314711276,
        1314711277,
        1314711278,
        1319719935,
        1319719936,
        1319726896,
        1319726897,
        1346680814,
        1346680815,
        1371539573,
        1371540448,
        1489676479,
        1499246519
      ],
      "points": [
        [
          -1250,
          -450
        ],
        [
          -1260,
          -456.6
        ],
        [
          -1280,
          -456.4
        ],
        [
          -1300,
          -455.9
        ],
        [
          -1320,
          -451.7
        ],
        [
          -1340,
          -444.6
        ],
        [
          -1360,
          -437.6
        ],
        [
          -1380,
          -436
        ],
        [
          -1400,
          -435.9
        ],
        [
          -1420,
          -435.2
        ],
        [
          -1440,
          -432.6
        ],
        [
          -1460,
          -424.1
        ],
        [
          -1480,
          -416.5
        ],
        [
          -1500,
          -404.6
        ]
      ]
    },
    {
      "name": "Jalan Bumi Cengkareng Indah",
      "type": "tertiary",
      "width": 12,
      "osmWay": 34124294,
      "points": [
        [
          -1144.9,
          -526.5
        ],
        [
          -1116.5,
          -521
        ]
      ]
    },
    {
      "name": "Jalan Bumi Cengkareng Indah",
      "type": "tertiary",
      "width": 12,
      "osmWay": 362345674,
      "points": [
        [
          -1107.4,
          -521.1
        ],
        [
          -1107.2,
          -529
        ]
      ]
    },
    {
      "name": "Jalan Bumi Cengkareng Indah",
      "type": "residential",
      "width": 8,
      "osmWay": 362345676,
      "points": [
        [
          -1107.1,
          -530.4
        ],
        [
          -1106.4,
          -557.1
        ]
      ]
    },
    {
      "name": "Jalan Bumi Cengkareng Indah",
      "type": "residential",
      "width": 8,
      "osmWay": 518276216,
      "points": [
        [
          -1107.2,
          -529.1
        ],
        [
          -1107.2,
          -529.1
        ]
      ]
    },
    {
      "name": "Jalan Bumi Cengkareng Indah",
      "type": "residential",
      "width": 8,
      "osmWay": 671832100,
      "points": [
        [
          -1107.2,
          -529
        ],
        [
          -1107.2,
          -529.1
        ]
      ]
    },
    {
      "name": "Jalan Bumi Cengkareng Indah",
      "type": "tertiary",
      "width": 12,
      "osmWay": 753917096,
      "points": [
        [
          -1146.2,
          -527.5
        ],
        [
          -1144.9,
          -526.5
        ]
      ]
    },
    {
      "name": "Jalan Bumi Cengkareng Indah",
      "type": "tertiary",
      "width": 12,
      "osmWay": 753917097,
      "points": [
        [
          -1144.9,
          -526.5
        ],
        [
          -1146.6,
          -526.1
        ]
      ]
    },
    {
      "name": "Jalan Bumi Cengkareng Indah",
      "type": "residential",
      "width": 8,
      "osmWay": 967777333,
      "points": [
        [
          -1107.2,
          -529.7
        ],
        [
          -1107.1,
          -530.4
        ]
      ]
    },
    {
      "name": "Jalan Bumi Cengkareng Indah",
      "type": "tertiary",
      "width": 12,
      "osmWay": 1287925951,
      "points": [
        [
          -1116.5,
          -521
        ],
        [
          -1107.4,
          -521.1
        ]
      ]
    },
    {
      "name": "Jalan Bumi Cengkareng Indah",
      "type": "residential",
      "width": 8,
      "osmWay": 1315995714,
      "points": [
        [
          -1107.2,
          -529.1
        ],
        [
          -1107.2,
          -529.7
        ]
      ]
    },
    {
      "name": "Jalan Bumi Cengkareng Indah",
      "type": "residential",
      "width": 8,
      "osmWay": 1315995715,
      "points": [
        [
          -1107.2,
          -529.7
        ],
        [
          -1107.2,
          -529.7
        ]
      ]
    },
    {
      "name": "Jalan Bumi Cengkareng Indah",
      "type": "residential",
      "width": 8,
      "osmWay": 1315995716,
      "points": [
        [
          -1106.4,
          -557.1
        ],
        [
          -1107.6,
          -558
        ]
      ]
    },
    {
      "name": "Jalan Kalideres Permai",
      "type": "tertiary",
      "width": 12,
      "osmWay": 573388965,
      "points": [
        [
          -1311.8,
          -495.5
        ],
        [
          -1319.8,
          -495.5
        ]
      ]
    },
    {
      "name": "Jalan Kalideres Permai",
      "type": "tertiary",
      "width": 12,
      "osmWay": 1112152207,
      "points": [
        [
          -1293.2,
          -494.4
        ],
        [
          -1311.8,
          -495.5
        ]
      ]
    },
    {
      "name": "Jalan Kalideres Permai",
      "type": "tertiary",
      "width": 12,
      "osmWay": 1112152208,
      "points": [
        [
          -1319.8,
          -495.7
        ],
        [
          -1293.2,
          -494.6
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "residential",
      "width": 8,
      "osmWay": 34905498,
      "points": [
        [
          -1237.4,
          -461.1
        ],
        [
          -1236.8,
          -460.2
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "residential",
      "width": 8,
      "osmWay": 427959596,
      "points": [
        [
          -1236.8,
          -460.2
        ],
        [
          -1235.3,
          -457.7
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "unclassified",
      "width": 8,
      "osmWay": 427959597,
      "points": [
        [
          -1233.8,
          -458.5
        ],
        [
          -1232.4,
          -444.8
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "unclassified",
      "width": 8,
      "osmWay": 487174800,
      "points": [
        [
          -1228.6,
          -426.6
        ],
        [
          -1229.1,
          -429.7
        ],
        [
          -1226.9,
          -435.4
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "unclassified",
      "width": 8,
      "osmWay": 487174802,
      "points": [
        [
          -1225.8,
          -435.2
        ],
        [
          -1228.5,
          -430.2
        ],
        [
          -1228.6,
          -426.6
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "unclassified",
      "width": 8,
      "osmWay": 487174804,
      "points": [
        [
          -1226.8,
          -436
        ],
        [
          -1229,
          -440.4
        ],
        [
          -1232.7,
          -443.7
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "unclassified",
      "width": 8,
      "osmWay": 487174806,
      "points": [
        [
          -1232,
          -444.1
        ],
        [
          -1228.1,
          -440.1
        ],
        [
          -1225.9,
          -436.2
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "residential",
      "width": 8,
      "osmWay": 487174812,
      "points": [
        [
          -1235.3,
          -457.7
        ],
        [
          -1233.6,
          -454.5
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "unclassified",
      "width": 8,
      "osmWay": 686610689,
      "points": [
        [
          -1233.3,
          -444.6
        ],
        [
          -1234.1,
          -458.4
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "unclassified",
      "width": 8,
      "osmWay": 1239351618,
      "points": [
        [
          -1235.8,
          -460.9
        ],
        [
          -1236.7,
          -461.4
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "unclassified",
      "width": 8,
      "osmWay": 1239351619,
      "points": [
        [
          -1234.1,
          -458.4
        ],
        [
          -1235.8,
          -460.9
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "unclassified",
      "width": 8,
      "osmWay": 1239351620,
      "points": [
        [
          -1235.4,
          -461.2
        ],
        [
          -1233.8,
          -458.5
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "unclassified",
      "width": 8,
      "osmWay": 1239351621,
      "points": [
        [
          -1235.1,
          -462.2
        ],
        [
          -1235.4,
          -461.2
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "unclassified",
      "width": 8,
      "osmWay": 1317924395,
      "points": [
        [
          -1228.6,
          -426.6
        ],
        [
          -1228.6,
          -426.3
        ]
      ]
    },
    {
      "name": "Jalan Rusunawa Pesakih",
      "type": "unclassified",
      "width": 8,
      "osmWay": 1317924396,
      "points": [
        [
          -1228.6,
          -426.3
        ],
        [
          -1228.6,
          -425.9
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 30834462,
      "points": [
        [
          -1065.1,
          -374.2
        ],
        [
          -1061.6,
          -324.8
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 492904741,
      "points": [
        [
          -1067.1,
          -388
        ],
        [
          -1067.1,
          -388.4
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 492936090,
      "points": [
        [
          -1063.2,
          -336.6
        ],
        [
          -1064.4,
          -356.3
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 519286857,
      "points": [
        [
          -1065.9,
          -375
        ],
        [
          -1067.1,
          -388
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 569785831,
      "points": [
        [
          -1064.9,
          -364.7
        ],
        [
          -1065.7,
          -374.2
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 569785835,
      "points": [
        [
          -1066.5,
          -388.4
        ],
        [
          -1065.1,
          -375
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 572233705,
      "points": [
        [
          -1066.7,
          -389.2
        ],
        [
          -1066.5,
          -388.4
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 572233706,
      "points": [
        [
          -1067.1,
          -388.4
        ],
        [
          -1066.7,
          -389.2
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 690152166,
      "points": [
        [
          -1064.4,
          -356.3
        ],
        [
          -1064.9,
          -364.7
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 880456588,
      "points": [
        [
          -1062,
          -322.8
        ],
        [
          -1062.3,
          -324.6
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 880456590,
      "points": [
        [
          -1062.7,
          -330
        ],
        [
          -1062.7,
          -330.5
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 937013913,
      "points": [
        [
          -1062.7,
          -330.5
        ],
        [
          -1063.2,
          -336.6
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 1010499214,
      "points": [
        [
          -1061.6,
          -324.8
        ],
        [
          -1061.4,
          -323.6
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utama",
      "type": "residential",
      "width": 8,
      "osmWay": 1010499215,
      "points": [
        [
          -1062.3,
          -324.6
        ],
        [
          -1062.7,
          -330
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utara",
      "type": "tertiary",
      "width": 12,
      "osmWay": 30876703,
      "points": [
        [
          -1123.7,
          -365.9
        ],
        [
          -1122.3,
          -361.5
        ],
        [
          -1120.4,
          -358.8
        ],
        [
          -1118.5,
          -342.9
        ],
        [
          -1114.4,
          -342
        ],
        [
          -1116.5,
          -332
        ],
        [
          -1117,
          -323.2
        ],
        [
          -1116.4,
          -318.7
        ],
        [
          -1114.2,
          -314.3
        ],
        [
          -1113.6,
          -307.1
        ],
        [
          -1111.9,
          -305.7
        ],
        [
          -1112.6,
          -298.7
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utara",
      "type": "tertiary",
      "width": 12,
      "osmWay": 516530478,
      "points": [
        [
          -1124.3,
          -367.3
        ],
        [
          -1123.7,
          -365.9
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Utara",
      "type": "tertiary",
      "width": 12,
      "osmWay": 516530481,
      "points": [
        [
          -1125.5,
          -369.5
        ],
        [
          -1124.3,
          -367.3
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "secondary",
      "width": 14,
      "osmWay": 30834740,
      "points": [
        [
          -1028.3,
          -344.1
        ],
        [
          -1023.5,
          -361.2
        ],
        [
          -1022.7,
          -374
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "residential",
      "width": 8,
      "osmWay": 30931406,
      "points": [
        [
          -1017.3,
          -347.6
        ],
        [
          -1018.7,
          -348
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "residential",
      "width": 8,
      "osmWay": 30931743,
      "points": [
        [
          -1019.7,
          -347.8
        ],
        [
          -1019.4,
          -345.2
        ],
        [
          -1016.9,
          -342.6
        ],
        [
          -1016.9,
          -337.6
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "secondary",
      "width": 14,
      "osmWay": 303723993,
      "points": [
        [
          -1024,
          -402.3
        ],
        [
          -1032.2,
          -430.4
        ],
        [
          -1030.3,
          -452.3
        ],
        [
          -1030.8,
          -454.8
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "secondary",
      "width": 14,
      "osmWay": 303723994,
      "points": [
        [
          -1023.4,
          -399.9
        ],
        [
          -1024,
          -402.3
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "secondary",
      "width": 14,
      "osmWay": 458241241,
      "points": [
        [
          -1030.8,
          -455.1
        ],
        [
          -1030.8,
          -454.8
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "residential",
      "width": 8,
      "osmWay": 492019616,
      "points": [
        [
          -1019.8,
          -348.3
        ],
        [
          -1026.7,
          -348.6
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "secondary",
      "width": 14,
      "osmWay": 590955151,
      "points": [
        [
          -1022.7,
          -374
        ],
        [
          -1023.9,
          -395.7
        ],
        [
          -1023.3,
          -397.8
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "residential",
      "width": 8,
      "osmWay": 675927357,
      "points": [
        [
          -1019.8,
          -348.3
        ],
        [
          -1018.9,
          -348
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "residential",
      "width": 8,
      "osmWay": 675927358,
      "points": [
        [
          -1016.8,
          -347.5
        ],
        [
          -1017.3,
          -347.6
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "secondary",
      "width": 14,
      "osmWay": 675941376,
      "points": [
        [
          -1030.5,
          -456.9
        ],
        [
          -1030.8,
          -455.1
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "secondary",
      "width": 14,
      "osmWay": 675941380,
      "points": [
        [
          -1030.5,
          -457.6
        ],
        [
          -1030.5,
          -456.9
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "secondary",
      "width": 14,
      "osmWay": 720163450,
      "points": [
        [
          -1023.3,
          -397.8
        ],
        [
          -1022.3,
          -377
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "secondary",
      "width": 14,
      "osmWay": 772052222,
      "points": [
        [
          -1023.3,
          -397.8
        ],
        [
          -1023.4,
          -399.9
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "secondary",
      "width": 14,
      "osmWay": 792074354,
      "points": [
        [
          -1022.3,
          -377
        ],
        [
          -1022.7,
          -374
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "residential",
      "width": 8,
      "osmWay": 1096433398,
      "points": [
        [
          -1019.8,
          -348.3
        ],
        [
          -1019.7,
          -347.8
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Baru",
      "type": "residential",
      "width": 8,
      "osmWay": 1316175715,
      "points": [
        [
          -1018.9,
          -348
        ],
        [
          -1018.7,
          -348
        ]
      ]
    },
    {
      "name": "Jalan Duri Kosambi Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 343572717,
      "points": [
        [
          -1162,
          -423.7
        ],
        [
          -1167.1,
          -421.8
        ]
      ]
    },
    {
      "name": "Jalan Duri Kosambi Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 554367958,
      "points": [
        [
          -1192.6,
          -334.4
        ],
        [
          -1192.7,
          -337.3
        ],
        [
          -1197.4,
          -344.5
        ],
        [
          -1195.3,
          -365.3
        ],
        [
          -1192.3,
          -376.7
        ],
        [
          -1182.8,
          -388.3
        ]
      ]
    },
    {
      "name": "Jalan Duri Kosambi Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 769707330,
      "points": [
        [
          -1167.1,
          -421.8
        ],
        [
          -1167.1,
          -423
        ],
        [
          -1164,
          -425.5
        ]
      ]
    },
    {
      "name": "Jalan Duri Kosambi Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1122535068,
      "points": [
        [
          -1173.6,
          -410.1
        ],
        [
          -1166.6,
          -418.7
        ],
        [
          -1167.1,
          -421.8
        ]
      ]
    },
    {
      "name": "Jalan Duri Kosambi Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1155706532,
      "points": [
        [
          -1173.6,
          -410.1
        ],
        [
          -1173.7,
          -409.4
        ]
      ]
    },
    {
      "name": "Jalan Duri Kosambi Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1155706533,
      "points": [
        [
          -1174.4,
          -408.4
        ],
        [
          -1174,
          -409.3
        ]
      ]
    },
    {
      "name": "Jalan Duri Kosambi Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1155706534,
      "points": [
        [
          -1173.7,
          -409.4
        ],
        [
          -1174.4,
          -408.4
        ]
      ]
    },
    {
      "name": "Jalan Duri Kosambi Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1319695374,
      "points": [
        [
          -1182.8,
          -388.3
        ],
        [
          -1176.2,
          -404.6
        ]
      ]
    },
    {
      "name": "Jalan Duri Kosambi Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1319695375,
      "points": [
        [
          -1176.2,
          -404.6
        ],
        [
          -1174.4,
          -408.4
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "tertiary",
      "width": 12,
      "osmWay": 192314913,
      "points": [
        [
          -1041.6,
          -343.8
        ],
        [
          -1045,
          -343
        ],
        [
          -1051.7,
          -337.7
        ],
        [
          -1055.6,
          -328.2
        ],
        [
          -1061.7,
          -323.2
        ],
        [
          -1068.6,
          -311.9
        ],
        [
          -1071.5,
          -310.3
        ],
        [
          -1079.2,
          -308.9
        ],
        [
          -1085.4,
          -304.2
        ],
        [
          -1089.8,
          -299.5
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 343579343,
      "points": [
        [
          -1141.1,
          -293.9
        ],
        [
          -1144.4,
          -295.2
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 343581736,
      "points": [
        [
          -1141.8,
          -296.4
        ],
        [
          -1139.1,
          -294.1
        ],
        [
          -1135.6,
          -294.2
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 343581737,
      "points": [
        [
          -1138.7,
          -293.2
        ],
        [
          -1141.1,
          -293.9
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 343581740,
      "points": [
        [
          -1128.2,
          -296.6
        ],
        [
          -1122,
          -298.6
        ],
        [
          -1096.2,
          -298.4
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 343581742,
      "points": [
        [
          -1096.2,
          -297.7
        ],
        [
          -1121.9,
          -297.9
        ],
        [
          -1128.1,
          -295.8
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "tertiary",
      "width": 12,
      "osmWay": 493711352,
      "points": [
        [
          -1028.3,
          -344.1
        ],
        [
          -1035.4,
          -344
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "tertiary",
      "width": 12,
      "osmWay": 495331510,
      "points": [
        [
          -1040.3,
          -343.8
        ],
        [
          -1041.6,
          -343.8
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "tertiary",
      "width": 12,
      "osmWay": 495331511,
      "points": [
        [
          -1035.4,
          -344
        ],
        [
          -1040.1,
          -343.8
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 508058822,
      "points": [
        [
          -1087.8,
          -297.2
        ],
        [
          -1092.2,
          -297.6
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 569795587,
      "points": [
        [
          -1087.7,
          -293.9
        ],
        [
          -1086.8,
          -297.3
        ],
        [
          -1083.7,
          -298
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 621400116,
      "points": [
        [
          -1077.7,
          -298.2
        ],
        [
          -1077,
          -297.8
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "tertiary",
      "width": 12,
      "osmWay": 675941736,
      "points": [
        [
          -1040.1,
          -343.8
        ],
        [
          -1040.3,
          -343.8
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "tertiary",
      "width": 12,
      "osmWay": 687263534,
      "points": [
        [
          -1089.8,
          -299.5
        ],
        [
          -1089.7,
          -298.3
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "tertiary",
      "width": 12,
      "osmWay": 687263535,
      "points": [
        [
          -1091.4,
          -298.3
        ],
        [
          -1089.8,
          -299.5
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 689839960,
      "points": [
        [
          -1091.4,
          -298.3
        ],
        [
          -1087.2,
          -298.3
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 780094060,
      "points": [
        [
          -1087.2,
          -298.3
        ],
        [
          -1083.7,
          -298
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1001341143,
      "points": [
        [
          -1096.2,
          -298.4
        ],
        [
          -1091.4,
          -298.3
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1001341144,
      "points": [
        [
          -1092.2,
          -297.6
        ],
        [
          -1096.2,
          -297.7
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1096399390,
      "points": [
        [
          -1135.6,
          -294.2
        ],
        [
          -1128.2,
          -296.6
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1096399391,
      "points": [
        [
          -1134.9,
          -293.4
        ],
        [
          -1138.7,
          -293.2
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1096399392,
      "points": [
        [
          -1128.1,
          -295.8
        ],
        [
          -1134.9,
          -293.4
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1154689352,
      "points": [
        [
          -1080.7,
          -298
        ],
        [
          -1077.7,
          -298.2
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1289812609,
      "points": [
        [
          -1083.7,
          -298
        ],
        [
          -1080.7,
          -298
        ]
      ]
    },
    {
      "name": "Jalan Kembangan Raya",
      "type": "secondary",
      "width": 14,
      "osmWay": 1289812610,
      "points": [
        [
          -1080.7,
          -298
        ],
        [
          -1077.9,
          -297.7
        ]
      ]
    },
    {
      "name": "Jalan Terminal Rawa Buaya",
      "type": "service",
      "width": 6,
      "osmWay": 515552341,
      "points": [
        [
          -1174.8,
          -431.3
        ],
        [
          -1177.3,
          -427.1
        ],
        [
          -1177.4,
          -425.7
        ],
        [
          -1175.2,
          -422.3
        ]
      ]
    },
    {
      "name": "Jalan Terminal Rawa Buaya",
      "type": "service",
      "width": 6,
      "osmWay": 726598121,
      "points": [
        [
          -1169.1,
          -437
        ],
        [
          -1173.5,
          -435.7
        ]
      ]
    },
    {
      "name": "Jalan Terminal Rawa Buaya",
      "type": "service",
      "width": 6,
      "osmWay": 726598998,
      "points": [
        [
          -1173.5,
          -435.7
        ],
        [
          -1174.8,
          -431.3
        ]
      ]
    },
    {
      "name": "Jalan Terminal Rawa Buaya",
      "type": "service",
      "width": 6,
      "osmWay": 1318842040,
      "points": [
        [
          -1163.4,
          -437
        ],
        [
          -1169.1,
          -437
        ]
      ]
    },
    {
      "name": "Jalan Daan Mogot Estate",
      "type": "residential",
      "width": 8,
      "osmWay": 158809174,
      "points": [
        [
          -1068.2,
          -498.1
        ],
        [
          -1077,
          -489.3
        ],
        [
          -1074.2,
          -487.5
        ]
      ]
    },
    {
      "name": "Jalan Daan Mogot Estate",
      "type": "residential",
      "width": 8,
      "osmWay": 573341941,
      "points": [
        [
          -1077.6,
          -478.4
        ],
        [
          -1074.2,
          -487.5
        ]
      ]
    },
    {
      "name": "Jalan Daan Mogot Estate",
      "type": "residential",
      "width": 8,
      "osmWay": 990281548,
      "points": [
        [
          -1077.6,
          -477.8
        ],
        [
          -1077.6,
          -478.4
        ]
      ]
    }
  ]
};
